const fs = require("fs");
module.exports.config = {
  name: "ib",
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
  if(react.includes("ib") ||
     react.includes("Ib") || react.includes("IB") || react.includes("INBOX") ||
react.includes("inbox") ||
react.includes("Inbox")) {
    var msg = {
        body: `👿𝐎𝐘𝐄 𝐓𝐔𝐓𝐈𝐘𝐀 𝐊𝐘𝐀 𝐈𝐁 𝐈𝐁 𝐋𝐀𝐆𝐀 𝐑𝐀𝐊𝐇𝐀 𝐇𝐀𝐈 𝐉𝐎 𝐁𝐎𝐋𝐀𝐍𝐀 𝐇𝐀𝐈 𝐌𝐄𝐑𝐄 𝐒𝐀𝐌𝐍𝐄 𝐁𝐎𝐋👿`,    
 }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("👿", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
