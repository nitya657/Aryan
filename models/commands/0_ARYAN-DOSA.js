const fs = require("fs");
module.exports.config = {
  name: "dosa",
    version: "2.1.1",
  hasPermssion: 0,
  credits: "LEGEND ARYAN ", 
  description: "Just Respond",
  commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = async ({ api, event, Users, Currencies, args, utils, client, global }) => {
  var name = await Users.getNameUser(event.senderID);
  var { threadID, messageID } = event;
  let react = event.body.toLowerCase();
  if(react.includes("dosa") ||
     react.includes("Dosa") || react.includes("DOSA") || react.includes("MASLA DOSA") ||
react.includes("Masala dosa") ||
react.includes("Masla dosa") ||     
react.includes("MASALA DOSA")) {
    var msg = {
        body: `${name} 💐𝐘𝐄𝐇 𝐋𝐎 𝐌𝐄𝐑𝐈 𝐉𝐀𝐀𝐍 𝐃𝐎𝐒𝐀 𝐊𝐇𝐀𝐎💐✿`,attachment: fs.createReadStream(__dirname + `/Aryan/received_614973427948920.jpeg`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😋", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = async ({ api, event, Currencies, args, utils, client, global }) => {

  }
