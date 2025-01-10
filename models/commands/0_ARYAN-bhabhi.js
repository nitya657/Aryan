const fs = require("fs");
module.exports.config = {
  name: "#bhabhi.js",
    version: "1.1.1",
  hasPermssion: 0,
  credits: "LEGEND-ARYAN ", 
  description: "Just Respond",
  commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  let react = event.body.toLowerCase();
  if(react.includes("gayatri") ||
     react.includes("Gayatri") || react.includes("bhabhi") || react.includes("Bhabhi") ||
react.includes("GAYATRI") ||
react.includes("Gayatri jaiswal")) {
    var msg = {
        body: `😛𝐌𝐀𝐈 𝐁𝐎𝐓 😹𝐇𝐔𝐍 𝐓𝐎 𝐊𝐘𝐀 𝐇𝐔𝐀😛 𝐌𝐀𝐈 𝐁𝐇𝐈 𝐁𝐇𝐀𝐁𝐇𝐈 😆𝐁𝐎𝐋𝐔𝐍𝐆𝐀👻𝐁𝐇𝐀𝐁𝐇𝐈😸`,
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🥰", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
