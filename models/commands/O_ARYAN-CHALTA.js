const fs = require("fs");
module.exports.config = {
  name: "chalta hu",
    version: "1.1.1",
  hasPermssion: 0,
  credits: "ARYAN KING", 
  description: "Just Respond",
  commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  let react = event.body.toLowerCase();
  if(react.includes("by") ||
     react.includes("bye") || react.includes("By") || react.includes("ja raha hu") ||
react.includes("Ja rahi hu") ||
react.includes("Chalo")) {
    var msg = {
        body: `चल चल जल्दी निकल दुबारा अपनी शकल मत दिखाना😐👈`,
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🧐", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {
    
