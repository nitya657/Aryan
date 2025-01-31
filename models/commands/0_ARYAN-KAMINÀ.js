const fs = require("fs");
module.exports.config = {
  name: "kamina",
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
  if(react.includes("kamina") ||
     react.includes("Kamina") || react.includes("KAMINA") || react.includes("KMINA") ||
react.includes("kmina") ||
react.includes("Kmina")) {
    var msg = {
        body: `🙆𝐎𝐘𝐄 𝐓𝐔𝐓𝐈𝐘𝐀 𝐌𝐔𝐉𝐇𝐌𝐄 𝐊𝐎𝐈 𝐊𝐀𝐌𝐈 𝐍𝐀𝐇𝐈 𝐇𝐀𝐈 𝐓𝐔 𝐀𝐏𝐍𝐀 𝐃𝐄𝐊𝐇 𝐊𝐀𝐌𝐈𝐍𝐀😹`,    
 }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("👿", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
