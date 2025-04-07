const fs = require("fs");
module.exports.config = {
  name: "Rahi",
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
  if(react.includes("Haryanvi") ||
     react.includes("haryanvi") || react.includes("HARYANVI") || react.includes("Haryanvi") ||
react.includes("Haryanvi") ||
react.includes("HARYANVI") ||     
react.includes("haryanvi")) {
    var msg = {
        body: `${name} 𝐀𝐋𝐄😹 𝐘𝐀𝐋 𝐘𝐄 𝐌𝐎𝐓𝐀 𝐁𝐇𝐄𝐍𝐒𝐀 𝐊𝐎𝐍 𝐇𝐀𝐈 😹 💐✿
        •⊰ ☞𓅂 𝐌𝐀𝐃𝐄 ♡ 𝐁𝐘 ♡ 𝐀𝐑𝐘𝐀𝐍𓅂☜ ⊱•`,
attachment: fs.createReadStream(__dirname + `/Aryan/6d59dceb-7845-49b6-a71c-5336762076eb.jpg`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🙊", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = async ({ api, event, Currencies, args, utils, client, global }) => {

  }
