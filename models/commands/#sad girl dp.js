module.exports.config = {
  name: "sad girl dp",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "LEGEND-ARYAN",
  description: "Gril Dp photos",
  commandCategory: "Random-IMG",
  usages: "sad girl dp",
  cooldowns: 2,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }

};

module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
    var link = [
"https://i.imgur.com/XUwTScX.jpeg","https://i.imgur.com/JEkk0Oa.jpeg","https://i.imgur.com/FBYB9Fx.jpeg","https://i.imgur.com/LIZUzIo.jpeg","https://i.imgur.com/3psmlch.jpeg",https://i.imgur.com/xrfAMFG.jpeg","https://i.imgur.com/u3wEd8l.jpeg","https://i.imgur.com/hezqkHb.jpeg","https://i.imgur.com/hezqkHb.jpeg","https://i.imgur.com/ZrgY6eG.jpeg","https://i.imgur.com/liqApOA.jpeg","https://i.imgur.com/8nYZaED.jpeg","https://i.imgur.com/QdXEg03.jpeg","https://i.imgur.com/vQ85dNM.jpeg","https://i.imgur.com/Z87dGeJ.jpeg","https://i.imgur.com/VUCeD2u.jpeg","https://i.imgur.com/yn32eCc.jpeg","https://i.imgur.com/rLX6Uls.jpeg","https://i.imgur.com/VH2Jz9F.jpeg","https://i.imgur.com/uSejIZE.jpeg","https://i.imgur.com/QFMhhwy.jpeg","https://i.imgur.com/XZSJeIW.jpeg","https://i.imgur.com/SmyQpzM.jpeg","https://i.imgur.com/o5KOwyr.jpeg",https://i.imgur.com/mjr4Azz.jpeg","https://i.imgur.com/jwbEj2u.jpeg","https://i.imgur.com/1NYJOB2.jpeg","https://i.imgur.com/o5DBH89.jpeg","https://i.imgur.com/Nw6QAGa.jpeg","https://i.imgur.com/JQuIHiB.jpeg","https://i.imgur.com/jasdBFx.jpeg","https://i.imgur.com/VHHwlgh.jpeg","https://i.imgur.com/IswUrMm.jpeg","https://i.imgur.com/wv4U0gu.jpeg","https://i.imgur.com/N4Gmsnt.jpeg","https://i.imgur.com/rjYsMIM.jpeg","https://i.imgur.com/CyMiM7r.jpeg","https://i.imgur.com/SsnsWAW.jpeg","https://i.imgur.com/SsnsWAW.jpeg","https://i.imgur.com/2ZrjvTK.jpeg"
     ];
     var callback = () => api.sendMessage({body:`┏━━━━━┓\n     ╔╬⓼★⓼╃───────➣™
🄼🅁 🄱🄾🅃 🄾🅆🄽🄴🅁 🄰🅁🅈🄰🄽𝄠━─━Ⓔ⧐
╰✾✾®️╀✿✿╀─━ↈⓇ⧐                 ✧══•❁😛❁•══✧\n┗━━━━━┛\n\n♥️`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
   };
