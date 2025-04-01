const fs = require("fs");
module.exports.config = {
  name: "momo",
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
  if(react.includes("momoss") ||
     react.includes("Momo") || react.includes("momo") || react.includes("MOMOS") ||
react.includes("MOMO") ||
react.includes("Momo") ||     
react.includes("momo")) {
    var msg = {
        body: `${name) 💐𝐘𝐄𝐇 𝐋𝐎 𝐉𝐀𝐀𝐍 𝐌𝐎𝐌𝐎 𝐊𝐇𝐀𝐎💐✿`,attachment: fs.createReadStream(__dirname + `/Aryan/momo.jpeg`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😋", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = async ({ api, event, Currencies, args, utils, client, global }) => {

  }
