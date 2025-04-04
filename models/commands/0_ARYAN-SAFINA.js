const fs = require("fs");
module.exports.config = {
  name: "Safina",
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
  if(react.includes("Safina") ||
     react.includes("SAFINA") || react.includes("@Safina Safina Khan ") || react.includes("SAFINA") ||
react.includes("safina") ||
react.includes("Safina") ||     
react.includes("@Safina Safina Khan ")) {
    var msg = {
        body: `${name} 💐𝐊𝐈𝐒 🤪𝐍𝐄 𝐁𝐔𝐋𝐘𝐀 😹𝐆𝐑𝐔𝐏 𝐊𝐈 𝐒𝐀𝐁 𝐒𝐄😸 𝐊𝐇𝐔𝐁 😜𝐒𝐔𝐑𝐀𝐓 🤓𝐋𝐀𝐃𝐊𝐈 𝐒𝐀𝐅𝐈𝐍𝐀 𝐊𝐎 😹💐✿`,attachment: fs.createReadStream(__dirname + `/Aryan/e8ae3447330619f1e809d8c4e4ca501d.jpg`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🤲", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = async ({ api, event, Currencies, args, utils, client, global }) => {

  }
