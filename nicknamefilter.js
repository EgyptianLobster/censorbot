module.exports = function(bot, connection, stuff, auth) {

const modulename = "nicknamefilter"
const swears = require("./swears.json")
const byp = require('./byp.json')
var statuslog = bot.channels.get("450444337357258772")
var logchannel = bot.channels.get("399688995283533824")
var serverlistchannel = bot.channels.get("413831069117186078")
var botowner = bot.users.get("142408079177285632")
 

 

//
bot.on('guildMemberUpdate', (newMember, oldMember, guild) => {
   
	
   
   if(oldMember.guild.id == "264445053596991498") return;
   if(oldMember.guild.id == "110373943822540800") return;
var crash = "hi"
  
							
	async function stopped() {
		connection.query("SELECT * FROM censorbot WHERE serverid = " + oldMember.guild.id, async function (err, rows) {
						if(err) {
							 var on = {

	"serverid": oldMember.guild.id,

	"censor": true,
	
	"serverowner": oldMember.guild.owner

}
							connection.query("INSERT INTO censorbot SET ?", on)
							return;
						}
							let censor = rows[0].censor
							if(censor == false) return;
		oldMember.setNickname(' ').catch(err => {
			console.log(`${guild.name} ${guild.id} Missing perms`)
		})
    console.log(`Changed username of ${oldMember.id} because it was innapropriate ${oldMember.displayName}`)   
    const logchannel = bot.channels.get("399688995283533824")
    logchannel.send(`Changed username of ${oldMember.id} because it was innapropriate`) 

	
	      		const logchannelxd = oldMember.guild.channels.find("name", "log");

		

		console.log("xd")

		if(!logchannelxd) {

			return;

		}

	if(logchannelxd) {
		let yas = {
			"embed": {
			  "title": "Changed Innapropriate Nickname",
			  "color": 16452296,
			  "timestamp": "",
			  "footer": {
				"icon_url": "https://cdn.discordapp.com/app-icons/394019914157129728/2759df1fe0b8ec03a26c5645bc19c652.png",
				"text": "If you believe this was a mistake run +ticket word"
			  },
			  "thumbnail": {
				"url": oldMember.avatarURL
			  },
			  "fields": [
				{
				  "name": "User",
				  "value": oldMember + "",
				  "inline": true
				},
				{
				  "name": "Time",
				  "value": Date() + ""
				},
				{
				  "name": "Nickname",
				  "value": oldMember.displayName + ""
				}
			  ]
			}
		  }
		  logchannelxd.send(yas)
	}
	
	})
	}
	
	if(oldMember.displayName.match(/(f uck|fu ck|Pu.ssy|P.ussy|Puss.y|b i t c|b itc|d l c|dlc|c u n t|d 1 c|n l g|n!g|fa g|f4g|f 4 g|f a g |f @ g|f u c k|f u k|f.u.c|🇫🇺🇨|🇫 🇺 🇨|🇦🇸🇸|🇦 🇸 🇸|🇧🇮🇹🇨|🇧 🇮 🇹 🇨|🇩🇮🇨|🇩 🇮 🇨|🇨🇺🇳🇹|🇨 🇺 🇳 🇹|🇳🇮🇬|🇳 🇮 🇬|🇸🇭🇮🇹|🇸 🇭 🇮 🇹|🇫🇦🇬|🇫 🇦 🇬|🇵🇴🇷🇳|🇵 🇴 🇷 🇳|🇹🇮🇹|🇹 🇮 🇹|🇨🇴🇨|🇨 🇴 🇨|🇧🇦🇸🇹|🇧 🇦 🇸 🇹|🇸🇱🇺🇹|🇸 🇱 🇺 🇹|🇷🇪🇹🇦🇷🇩|🇷 🇪 🇹 🇦 🇷 🇩|🇵🇺🇸🇸🇾|🇵 🇺 🇸 🇸 🇾|🇨🇺🇲|🇨 🇺 🇲)/gi)) {
		stopped();
		console.log(crash)
	}
   	const arg = oldMember.displayName.slice().trim().split(/ +/g)
 
		const words = swears.var
			
			const arrays = byp
			

		arg.forEach(arg => {
			words.forEach(words => {
				let word = new RegExp (words, 'gi')
				if(arg.match(word)) {
                  const array = arrays[words.toLowerCase()]
					if(array[0]) { 
					let sio1 = new RegExp (array[0], 'gi') 
					if(arg.match(sio1)) return; 
					}
					if(array[1]) { 
					let sio2 = new RegExp (array[1], 'gi') 
					if(arg.match(sio2)) return; 
					}
					if(array[2]) { 
					let sio3 = new RegExp (array[2], 'gi') 
					if(arg.match(sio3)) return; 
					}
					if(array[3]) { 
					let sio4 = new RegExp (array[3], 'gi') 
					if(arg.match(sio4)) return; 
					}
					if(array[4]) { 
					let sio5 = new RegExp (array[4], 'gi') 
					if(arg.match(sio5)) return; 
					}
					if(array[5]) { 
					let sio6 = new RegExp (array[5], 'gi') 
					if(arg.match(sio6)) return; 
					}
					if(array[6]) {
					let sio7 = new RegExp (array[6], 'gi') 
					if(arg.match(sio7)) return; 
					}
					if(array[7]) { 
					let sio8 = new RegExp (array[7], 'gi') 
					if(arg.match(sio8)) return; 
					}
					if(array[8]) { 
					let sio9 = new RegExp (array[8], 'gi') 
					if(arg.match(sio9)) return; 
					}
					if(array[9]) {
					let sio10 = new RegExp (array[9], 'gi') 
					if(arg.match(sio10)) return; 
					}
					if(array[10]) { 
					let sio11 = new RegExp (array[10], 'gi') 
					if(arg.match(sio11)) return; 
					}
					if(array[11]) { 
					let sio12 = new RegExp (array[11], 'gi') 
					if(arg.match(sio12)) return; 
					}
					if(array[12]) { 
					let sio13 = new RegExp (array[12], 'gi') 
					if(arg.match(sio13)) return; 
					}
					if(array[13]) { 
					let sio14 = new RegExp (array[13], 'gi') 
					if(arg.match(sio14)) return; 
					}
					if(array[14]) { 
					let sio15 = new RegExp (array[14], 'gi') 
					if(arg.match(sio15)) return; 
					}
					if(array[15]) { 
					let sio16 = new RegExp (array[15], 'gi') 
					if(arg.match(sio16)) return; 
					}
					if(array[16]) { 
					let sio17 = new RegExp (array[16], 'gi') 
					if(arg.match(sio17)) return; 
					}
					if(array[17]) { 
					let sio18 = new RegExp (array[17], 'gi') 
					if(arg.match(sio18)) return; 
					}
					if(array[18]) { 
					let sio19 = new RegExp (array[18], 'gi') 
					if(arg.match(sio19)) return; 
					}
					if(array[19]) { 
					let sio20 = new RegExp (array[19], 'gi') 
					if(arg.match(sio20)) return; 
					}
					if(array[20]) { 
					let sio21 = new RegExp (array[20], 'gi') 
					if(arg.match(sio21)) return; 
					}
					if(array[21]) { 
					let sio22 = new RegExp (array[21], 'gi') 
					if(arg.match(sio22)) return; 
					}
					if(array[22]) { 
					let sio23 = new RegExp (array[22], 'gi') 
					if(arg.match(sio23)) return; 
					}
					if(array[23]) { 
					let sio24 = new RegExp (array[23], 'gi') 
					if(arg.match(sio24)) return; 
					}
					if(array[24]) { 
					let sio25 = new RegExp (array[24], 'gi') 
					if(arg.match(sio25)) return; 
					}
					stopped();
					console.log(crash)
				}
			})
		})
})
   
   
}