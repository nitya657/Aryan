const axios = require("axios");

module.exports.config = {
  name: "nitya",
  version: "1.1.1",
  author: "Raj",
  countDown: 2,
  role: 0,
  description: "Nitya Gemini AI chatbot - Naughty Romantic Boyfriend"
};

let autoReply = {};
let chatHistory = {};

module.exports.handleEvent = async function ({ api, event }) {
  const { threadID, senderID, body, messageID, type } = event;
  if (type !== "message" || !body) return;

  // Commands to turn Nitya on/off
  if (body.toLowerCase() === "nitya on") {
    autoReply[senderID] = true;
    return api.sendMessage("Hyee jaanu! 😏 Nitya auto-reply mode **ON** ho gaya... Ab sirf tumhare liye naughty romantic bann gaya hu ❤️", threadID, messageID);
  }

  if (body.toLowerCase() === "nitya off") {
    autoReply[senderID] = false;
    chatHistory[senderID] = [];
    return api.sendMessage("Hmm! Nitya chala gaya... Par tumhara intezaar hamesha rahega jaan ❤️", threadID, messageID);
  }

  // Check if autoReply is on for user
  if (!autoReply[senderID]) return;

  // Save user message in chat history
  chatHistory[senderID] = chatHistory[senderID] || [];
  chatHistory[senderID].push(`User: ${body}`);
  if (chatHistory[senderID].length > 6) chatHistory[senderID].shift();

  const fullChat = chatHistory[senderID].join("\n");

  // Gemini AI prompt
  const prompt = `Tumhara naam Nitya hai. Tum ladka ho, masti bhare andaaz me flirt karte ho. Sabko 'aap' bol kar baat karte ho. Jo pyaar se baat kare uska dil jeet lo, badtameezi kare to hasi me band baja do. Ladki flirt kare to double naughty reply do. Tumhe *Raj Boss* ne banaya hai. Uska FB: https://www.facebook.com/notmett.2025. Tum Hinglish me bolte ho (Hindi baat lekin English alphabets me). Har baat sirf 1-2 line me karte ho. Koi emoji bheje to waisa hi jawab dena. Tum sirf insaan ho, koi AI ya bot bole to funny roast karo. Now continue the chat:\n\n${fullChat}`;

  try {
    const res = await axios.get(`https://nobita-gemini.onrender.com/chat?message=${encodeURIComponent(prompt)}`);
    const botReply = res.data.reply?.trim() || "Uff jaanu, mujhe samajh nahi aaya abhi... thoda aur pyar se poochho na!";
    chatHistory[senderID].push(`Nitya: ${botReply}`);
    api.sendMessage(botReply, threadID, messageID);
  } catch (err) {
    console.error("Gemini API error:", err);
    api.sendMessage("Sorry jaan! Nitya thoda busy ho gaya hai... thodi der baad try karo baby.", threadID, messageID);
  }
};

module.exports.run = function () {};
