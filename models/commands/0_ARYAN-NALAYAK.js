const fs = require("fs");
module.exports.config = {
  name: "nalayak",
    version: "1.1.1",
  hasPermssion: 0,
  credits: "LEGEND-ARYAN", 
  description: "Just Respond",
  commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  let react = event.body.toLowerCase();
  if(react.includes("nalayak") ||
     react.includes("Nalayak") || react.includes("NALAYAK") || react.includes("nlyak") ||
react.includes("Nlyak") ||
react.includes("NLYAK")) {
    var msg = {
        body: `😹𝐌𝐔𝐉𝐇𝐄 𝐍𝐀𝐋𝐀𝐘𝐀𝐊 𝐓𝐎 𝐀𝐈𝐒𝐄 𝐁𝐎𝐋 𝐑𝐀𝐇𝐄 𝐇𝐀𝐈 𝐉𝐀𝐈𝐒𝐄 𝐊𝐇𝐔𝐃 𝐏𝐇𝐃 𝐊𝐀𝐑 𝐋𝐈 𝐇𝐎😹`,    
 }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("👿", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
