const fs = require("fs");
module.exports.config = {
  name: "INQALAB",
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
  if(react.includes("Inqalab zindabad") ||
     react.includes("inqalab zindabad") || react.includes("Inqalab zindabad") || react.includes("INQALAB ZINDABAD") ||
react.includes("INQALAB ZINDABAD") ||
react.includes("Inqalab zindabad")) {
    var msg = {
        body: `𝐓𝐄𝐑𝐀🍫 𝐈𝐍𝐐𝐀𝐋𝐁😸 𝐙𝐈𝐍𝐃𝐀𝐁𝐀𝐃 𝐌𝐄𝐑𝐀😹 𝐓𝐎🤓 𝐁𝐀𝐁𝐔 😜𝐙𝐈𝐍𝐃𝐀𝐁𝐀𝐀𝐃😹`,
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🙋", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
