const fs = require("fs");
module.exports.config = {
  name: "bsdk",
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
  if(react.includes("bsdk") ||
     react.includes("Bsdk") || react.includes("BSDK") || react.includes("bhosdike") ||
react.includes("bhosd") ||
react.includes("Bhosd")) {
    var msg = {
        body: `😈𝐍𝐈𝐊𝐀𝐋 𝐁𝐒𝐃𝐊 𝐆𝐀𝐋𝐈 𝐍𝐀 𝐃𝐄 𝐍𝐀𝐇𝐈 𝐓𝐎 𝐘𝐀𝐇𝐈 𝐏𝐄𝐋 𝐏𝐀𝐋 𝐃𝐔𝐍𝐆𝐀👿`,    
 }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("👿", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
