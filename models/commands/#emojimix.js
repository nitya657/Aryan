const axios = require("axios");
const fs = require("fs-extra");
const path = require("path");

module.exports.config = {
  name: "emojimix",
  version: "1.0",
  hasPermssion: 0,
  credits: "Raj",
  description: "Mix 2 emojis together using Emoji Kitchen",
  commandCategory: "fun",
  usages: "[emoji1][emoji2] (without space)",
  cooldowns: 3
};

module.exports.run = async function({ api, event, args }) {
  try {
    const input = args.join(" ");
    if (!input || input.length < 2)
      return api.sendMessage("❌ Please enter 2 emojis together. Example: 🙂🥵", event.threadID, event.messageID);

    const emoji1 = input[0];
    const emoji2 = input[1];

    const res = await axios.get(`https://nobita-emojimix.onrender.com/emojimix?emoji1=${encodeURIComponent(emoji1)}&emoji2=${encodeURIComponent(emoji2)}`, {
      responseType: "stream"
    });

    const filePath = path.join(__dirname, `/cache/emojimix_${Date.now()}.gif`);
    const writer = fs.createWriteStream(filePath);

    res.data.pipe(writer);
    writer.on("finish", () => {
      api.sendMessage({
        body: `✨ EmojiMix of ${emoji1} and ${emoji2}`,
        attachment: fs.createReadStream(filePath)
      }, event.threadID, () => fs.unlinkSync(filePath), event.messageID);
    });

    writer.on("error", (err) => {
      console.error(err);
      api.sendMessage("❌ Failed to process emoji mix.", event.threadID, event.messageID);
    });
    
  } catch (err) {
    console.error(err);
    api.sendMessage("❌ Error mixing emojis. Try again later.", event.threadID, event.messageID);
  }
};
