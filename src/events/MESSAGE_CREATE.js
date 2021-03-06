const resends = [
  (c) => {
    return `||${c}||`
  },
  (c) => {
    return '#'.repeat(c.length)
  }
]

module.exports = async function (message) {
  const db = await this.db.config(message.guild_id)

  if (this.config.prefix.some(x => x === message.content + ' ')) return this.interface.send(message.channel_id, `Current prefix is: \`${db.prefix || 'none'}\``)

  if (this.commands) {
    const cmd = this.commands.event(message, db.prefix)

    if (this.config.deleteCommands.includes(cmd)) return this.interface.delete(message.channel_id, message.id).catch(() => {})
  }

  const channel = this.channels.get(message.channel_id)

  const inviteCensor = db.invites && message.content.match(this.utils.inviteRegex)

  if (
    !channel ||
    !message.member ||
     message.type !== 0 ||
     channel.type !== 0 ||
     message.author.bot ||
     (inviteCensor ? false : channel.nsfw)
  ) return this.multi.delete(message.channel_id)

  if (
    !db.censor.msg ||
    message.member.roles.includes(db.role) ||
      db.channels.includes(message.channel_id)
  ) return

  let multiline = false
  let multi
  let content = ''

  if (db.multi) {
    if (this.multi.has(message.channel_id)) {
      multi = this.multi.get(message.channel_id)
      if (multi.user !== message.author.id) {
        this.multi.delete(message.channel_id)
      } else {
        content += Object.values(multi.msg).join('')

        multi.msg[message.id] = message.content

        this.multi.set(message.channel_id, multi)

        multiline = true
      }
    } else {
      const ob = {}
      ob[message.id] = message.content
      this.multi.set(message.channel_id, {
        user: message.author.id,
        msg: ob
      })
    }
  }

  content += message.content

  const res = inviteCensor ? ({ censor: true, method: 'invites', word: 'invite', arg: [] }) : this.filter.test(content, db.base, db.languages, db.filter, db.uncensor)

  if (res.uncensor) this.multi.delete(message.channel_id)

  if (!res.censor) return

  this.internals.logCensor('msg', content, message.author, message.guild_id, res)

  let errMsg

  if (multiline) {
    this.interface.bulkDelete(message.channel_id, Object.keys(multi.msg))
  } else errMsg = await this.buckets.set(message.channel_id, message.id)

  this.multi.delete(message.channel_id)

  if (db.msg.content !== false) {
    this.buckets.pop(message.channel_id, message.author.id, db)
  }

  if (db.log) {
    this.interface.send(db.log,
      this.embed
        .title('Deleted Message')
        .description(`From <@${message.author.id}> in <#${message.channel_id}>${errMsg ? `\n\nError: ${errMsg}` : ''}`)
        .field('Message', content, true)
        .field('Method', res.method, true)
        .timestamp()
        .footer('https://patreon.com/censorbot')
    )
  }

  this.punishments.addOne(message.guild_id, message.author.id, db)

  if (!inviteCensor && db.webhook.enabled) {
    if (db.webhook.separate) {
      const send = res.resolved.split(' ')
      const finished = []
      res.arg.forEach(x => {
        send.forEach((s, i) => {
          if (finished.includes(i)) return
          if (s.match(x)) {
            send[i] = resends[db.webhook.replace || 0](s)
            finished.push(i)
          }
        })
      })
      this.webhooks.sendAs(message.channel_id, message.author, message.member.nick || message.author.username, send.join(' '))
    } else {
      this.webhooks.sendAs(message.channel_id, message.author, message.member.nick || message.author.username, `Contains Curse:\n||${content.replace(/\|/g, '')}||`)
    }
  }
}
