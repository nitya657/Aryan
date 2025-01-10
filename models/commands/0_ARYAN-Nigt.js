const fs = require("fs");
module.exports.config = {
  name: "Nigt",
    version: "2.1.1",
  hasPermssion: 0,
  credits: "𝐏𝐑𝐈𝐘𝐀𝐍𝐒𝐇𝐈 𝐊𝐀𝐔𝐑", 
  description: "Just Respond",
  commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = async ({ api, event, Users, Currencies, args, utils, client, global }) => {
  var name = await Users.getNameUser(event.senderID);
  var { threadID, messageID } = event;
  let react = event.body.toLowerCase();
  if(react.includes("good night") ||
     react.includes("Good night") || react.includes("Good night") || react.includes("GOOD NIGHT") ||
react.includes("nini") ||
react.includes("GOOD NIGHT") ||     
react.includes("good night")) {
    var msg = {
        body: `${name} 𝐠𝐨𝐨𝐝 𝐍𝐢𝐠𝐡𝐭 𝐛𝐚𝐛𝐲 𝐩𝐡𝐢𝐫 𝐦𝐢𝐥𝐞 𝐠𝐞 𝐦𝐮𝐣𝐡𝐞 𝐛𝐡𝐮𝐥𝐧𝐚 𝐦𝐚𝐭💐✿
        •⊰ ☞𓅂 𝐌𝐀𝐃𝐄 ♡ 𝐁𝐘 ♡ 𝐀𝐑𝐘𝐀𝐍𓅂☜ ⊱•`,
attachment: fs.createReadStream(__dirname + `/noprefix/Nigt.mp4`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🥱", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = async ({ api, event, Currencies, args, utils, client, global }) => {

  }
