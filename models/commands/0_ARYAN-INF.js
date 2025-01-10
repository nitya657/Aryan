module.exports.config = {
  name: "inf",
  version: "1.0.1", 
  hasPermssion: 0,
  credits:"LEGEND-ARYAN" ,
  description: "THIS BOT IS MADE BY LEGEND ARYAN",
  usePrefix: true,
  commandCategory: "INFORMATION",
  cooldowns: 1,
  dependencies: 
  {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
    hours = Math.floor(time / (60 * 60)),
    minutes = Math.floor((time % (60 * 60)) / 60),
    seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Kolkata").format("DD/MM/YYYY");
var link =                                     
["https://i.imgur.com/dxZNoUf.jpeg","https://i.imgur.com/0aARWU3.jpeg","https://i.imgur.com/O3ptBXe.jpeg"];
var callback = () => api.sendMessage({body:`┏━━━━━┓\n     ╔╬⓼★⓼╃───────➣™
🄼🅁 🄱🄾🅃 🄾🅆🄽🄴🅁 🄰🅁🅈🄰🄽𝄠━─━Ⓔ⧐
╰✾✾®️╀✿✿╀─━ↈⓇ⧐                ✧═══•❁🙊❁•═══✧\n┗━━━━━┛\n\n\n         ❁ ═════════ ❃•❃ ═════════ ❁\n                            ♥️ 𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗧𝗜𝗢𝗡 ♥️\n         ❁ ═════════ ❃•❃ ═════════ ❁\n\n\n\n🌺  [ 1 ]  𒁍 💐𝐁𝐎𝐓 𝐍𝐀𝐌𝐄 💐   →   ${global.config.BOTNAME}\n🌺  [ 2 ]  𒁍💐𝐁𝐎𝐓 𝐀𝐃𝐌𝐈𝐍💐   →   𝐀𝐑𝐘𝐀𝐍\n🌺  [ 3 ]  𒁍 💐𝐁𝐎𝐓 𝐏𝐑𝐄𝐅𝐈𝐗💐   →   [ ${global.config.PREFIX} ]\n🌺  [ 4 ]  𒁍  𝐃𝐀𝐓𝐄   → ${juswa}\n🌺  [ 5 ]  𒁍  𝐁𝐎𝐓 𝐑𝐔𝐍𝐍𝐈𝐍𝐆 𝐓𝐈𝐌𝐄 →  [ ${hours}:${minutes}:${seconds} ]\n🌺  [ 6 ]  𒁍  [ 7 ]  𒁍 💐𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏💐 → [ +91 9336xxxx36 ]\n🌺  [ 8 ]  𒁍 💐𝐈𝐍𝐒𝐓𝐀𝐆𝐑𝐀𝐌💐 →  𝐀𝐑𝐘𝐀𝐍_.𝐒𝐓𝐀𝐓𝐔𝐒\n🌺  [ 9 ]  𒁍 💐𝐘𝐎𝐔𝐓𝐔𝐁𝐄💐  →  𝐀𝐑𝐘𝐀𝐍𝐓𝐔𝐁𝐄 \n🌺  [ 10 ]  𒁍 𝐆𝐈𝐓𝐇𝐔𝐁  →  @𝐁𝐎𝐓𝐉𝐀𝐍𝐔\n💐𝐓𝐇𝐀𝐍𝐊𝐔 𝐅𝐎𝐑 𝐔𝐒𝐈𝐍𝐆 𝐁𝐎𝐓 ${global.config.BOTNAME} 𝐁𝐎𝐓♥️\n\n\n
`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };
