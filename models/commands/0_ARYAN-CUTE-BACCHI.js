const fs = require("fs");
module.exports.config = {
  name: "Cute bacchi",
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
  if(react.includes("cute bacchi") ||
     react.includes("ragni") || react.includes("Cute bacchi") || react.includes("CUTE BACCHI") ||
react.includes("Ragni") ||
react.includes("CUTE BACCHI") ||     
react.includes("cute bacchi")) {
    var msg = {
        body: `${name} 𝐀𝐋𝐄 😹𝐀𝐋𝐄 𝐘𝐄 🤪𝐊𝐎𝐍 𝐇𝐀𝐈 𝐈𝐓𝐍𝐀 𝐂𝐔𝐓𝐄 😜 💐✿
        •⊰ ☞𓅂 𝐌𝐀𝐃𝐄 ♡ 𝐁𝐘 ♡ 𝐀𝐑𝐘𝐀𝐍𓅂☜ ⊱•`,
attachment: fs.createReadStream(__dirname + `/Aryan/received_9617925788266590.jpeg`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🙊", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = async ({ api, event, Currencies, args, utils, client, global }) => {

  }
