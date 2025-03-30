const fs = require("fs");
module.exports.config = {
  name: "eid mubarak",
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
  if(react.includes("eid mubarak") ||
     react.includes("EID MUBARAK") || react.includes("🤲") || react.includes("EID MUBARAK") ||
react.includes("Eid Mubarak") ||
react.includes("🤲") ||     
react.includes("🤲")) {
    var msg = {
        body: `${name} 💐𝐀𝐀𝐏 𝐒𝐀𝐁 𝐊𝐎 𝐀𝐔𝐑 𝐀𝐏𝐊𝐈 𝐅𝐄𝐌𝐋𝐘 𝐊𝐎 𝐌𝐄𝐑𝐄 𝐁𝐎𝐒𝐒 𝐀𝐑𝐘𝐀𝐍 𝐊𝐈 𝐓𝐀𝐑𝐀𝐅 𝐒𝐄 𝐇𝐀𝐏𝐘 𝐄𝐈𝐃 𝐌𝐔𝐁𝐀𝐑𝐀𝐊💐✿`,attachment: fs.createReadStream(__dirname + `/Aryan/received_1319184765957065.mp4`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😋", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = async ({ api, event, Currencies, args, utils, client, global }) => {

  }
