const fs = require("fs");
module.exports.config = {
  name: "khana",
    version: "2.1.1",
  hasPermssion: 0,
  credits: "LEGEND ARYAN", 
  description: "Just Respond",
  commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = async ({ api, event, Users, Currencies, args, utils, client, global }) => {
  var name = await Users.getNameUser(event.senderID);
  var { threadID, messageID } = event;
  let react = event.body.toLowerCase();
  if(react.includes("khana") ||
     react.includes("Khana") || react.includes("lunch") || react.includes("Lunch") ||
react.includes("dineer") ||
react.includes("Dinner") ||     
react.includes("KHANA")) {
    var msg = {
        body: `${name} 𝐋𝐎 𝐁𝐀𝐁𝐘 𝐀𝐏𝐊𝐀 𝐊𝐇𝐀𝐍𝐀 𝐊𝐇𝐀𝐎 𝐌𝐄𝐑𝐈 𝐉𝐀𝐀𝐍💐✿
        •⊰ ☞𓅂 𝐌𝐀𝐃𝐄 ♡ 𝐁𝐘 ♡ 𝐀𝐑𝐘𝐀𝐍𓅂☜ ⊱•`,
attachment: fs.createReadStream(__dirname + `/Aryan/20250401_105850.png`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😋", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = async ({ api, event, Currencies, args, utils, client, global }) => {

  }
