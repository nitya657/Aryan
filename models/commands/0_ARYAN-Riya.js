const fs = require("fs");
module.exports.config = {
  name: "Riya",
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
  if(react.includes("Riya gupta") ||
     react.includes("riya") || react.includes("RIYA GUPTA") || react.includes("Riya gupta") ||
react.includes("Riya gupta") ||
react.includes("RIYA GUPTA") ||     
react.includes("riya gupta")) {
    var msg = {
        body: `${name} 𝐀𝐋𝐄😹 𝐘𝐀𝐋 𝐘𝐄😜 𝐁𝐇𝐀𝐁𝐇𝐈 𝐇𝐀 🤓𝐘𝐀𝐀 𝐁𝐇𝐀𝐁𝐇𝐈 𝐌𝐀𝐀𝐋 😹 💐✿
        •⊰ ☞𓅂 𝐌𝐀𝐃𝐄 ♡ 𝐁𝐘 ♡ 𝐀𝐑𝐘𝐀𝐍𓅂☜ ⊱•`,
attachment: fs.createReadStream(__dirname + `/Aryan/153cf062-8054-40e1-b0a1-c3dad6786558.jpg`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🙊", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = async ({ api, event, Currencies, args, utils, client, global }) => {

  }
