const fs = require("fs");
module.exports.config = {
  name: "Rahul",
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
  if(react.includes("Rahul gupta") ||
     react.includes("rahul Gupta") || react.includes("rahul gupta") || react.includes("RAHUL GUPTA") ||
react.includes("Rahul gupta") ||
react.includes("RAHUL GUPTA") ||     
react.includes("rahul gupta")) {
    var msg = {
        body: `${name} 𝐀𝐋𝐄 😋𝐁𝐀𝐀𝐏 𝐋𝐄 🤓 𝐘𝐄 𝐈𝐍𝐒𝐀𝐍 𝐇𝐀𝐈 𝐘𝐀 𝐒𝐔𝐊𝐇𝐀 𝐌𝐈𝐑𝐂𝐇𝐀🙈 💐✿
        •⊰ ☞𓅂 𝐌𝐀𝐃𝐄 ♡ 𝐁𝐘 ♡ 𝐀𝐑𝐘𝐀𝐍𓅂☜ ⊱•`,
attachment: fs.createReadStream(__dirname + `/Aryan/888e2b4f-10de-418e-80ae-df2d8196c016.jpg`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😳", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = async ({ api, event, Currencies, args, utils, client, global }) => {

  }
