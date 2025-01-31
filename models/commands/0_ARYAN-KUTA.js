const fs = require("fs");
module.exports.config = {
  name: "kuta",
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
  if(react.includes("kutta") ||
     react.includes("KUTTA") || react.includes("Kutta") || react.includes("kuta") ||
react.includes("Kuta") ||
react.includes("KUTA")) {
    var msg = {
        body: `🙆𝐎𝐘𝐄 𝐓𝐔𝐓𝐈𝐘𝐀 𝐌𝐄𝐑𝐊𝐎 𝐊𝐔𝐓𝐓𝐀 𝐍𝐀 𝐁𝐎𝐋 𝐍𝐀𝐇𝐈 𝐓𝐎 𝐀𝐏𝐍𝐄 𝐀𝐑𝐘𝐀𝐍 𝐁𝐎𝐒𝐒 𝐊𝐎 𝐁𝐎𝐋 𝐃𝐔𝐍𝐆𝐀🙆`,    
 }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("👿", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
