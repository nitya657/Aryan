const fs = require("fs");
module.exports.config = {
  name: "Soni",
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
  if(react.includes("Cutie pie") ||
     react.includes("soni") || react.includes("Cutie pie") || react.includes("CUTIE PIE") ||
react.includes("Soni") ||
react.includes("CUTIE PIE") ||     
react.includes("cutie pie")) {
    var msg = {
        body: `${name} 𝐀𝐋𝐄 😋𝐁𝐀𝐀𝐏 𝐋𝐄 🤓𝐊𝐈𝐓𝐍𝐈 𝐎𝐒𝐌 😹𝐇𝐀𝐈 𝐘𝐀𝐀𝐋 😜𝐘𝐄 𝐌𝐄𝐑𝐄 𝐌𝐔𝐇 😜𝐌𝐄 𝐏𝐀𝐍𝐈 𝐀𝐆𝐘𝐀🙈 💐✿
        •⊰ ☞𓅂 𝐌𝐀𝐃𝐄 ♡ 𝐁𝐘 ♡ 𝐀𝐑𝐘𝐀𝐍𓅂☜ ⊱•`,
attachment: fs.createReadStream(__dirname + `/Aryan/b64e6330-4457-45d1-bc08-92be6c0fe146.jpg`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🙊", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = async ({ api, event, Currencies, args, utils, client, global }) => {

  }
