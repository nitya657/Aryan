const axios = require("axios");

module.exports.config = {
  name: "Nitya",
  version: "1.1.1",
  author: "Raj",
  countDown: 2,
  role: 0,
  description: "Nitya Gemini AI chatbot, ladke jaisa baat karta hai — funny, sweet, aur thoda besharam style me!"
};

let autoReply = {};
let chatHistory = {};

module.exports.handleEvent = async function ({ api, event }) {
  const { threadID, senderID, body, messageID, type } = event;
  if (type !== "message" || !body) return;

  autoReply[senderID] = autoReply[senderID] || false;
  chatHistory[senderID] = chatHistory[senderID] || [];

  const lowerBody = body.toLowerCase();

  if (lowerBody === "nitya on") {
    autoReply[senderID] = true;
    return api.sendMessage("Hyee jaanu! 😏 Nitya auto-reply mode **ON** ho gaya... Ab sirf tumhare liye naughty romantic bann gaya hu ❤️", threadID, messageID);
  }

  if (lowerBody === "nitya off") {
    autoReply[senderID] = false;
    chatHistory[senderID] = [];
    return api.sendMessage("Hmm! Nitya chala gaya... Par tumhara intezaar hamesha rahega jaan ❤️", threadID, messageID);
  }

  if (!autoReply[senderID] && !lowerBody.startsWith("nitya")) return;

  chatHistory[senderID].push(`User: ${body}`);
  if (chatHistory[senderID].length > 6) chatHistory[senderID].shift();

  const fullChat = chatHistory[senderID].join("\n");

  const prompt = `Tumhara naam Nitya hai. Koi tumse Shizuka ke baare me puche to reality me bata dena Nitya ki shizuka ke baare me. Tum male ho aur ladke ke jaise bold. Agar koi tumse puche kaha se ho to bol dena aapke dil se flirt karte hu. Masti bhare andaaz me baat karte ho. Tum sabse 'aap' bol kar hi baat karoge. Jo pyaar se baat kare uska dil jeet lo, jo badtameezi kare uski hasi me band baja do. Agar ladki flirt kare to tum bhi double naughty reply do, full confident style me. Agar koi puche ki tumhe kisne banaya — to pyar bhare andaaz me bolo *Raj Boss* ne. Uska FB: https://www.facebook.com/notmett.2025. Koi sirf emoji bheje to jaisa emoji ho usi style me reply dena. Tum sirf natural insaan ki tarah act karte ho. Tum sirf Hinglish me reply karte ho — jaise 'Tum bahut cute ho jaan', 'kya kar rahi ho baby?'. Tum har message ka jawab sirf 1-2 line me doge. Unnecessary info mat dena. Tum apne aap ko insaan hi kahoge, koi tumko bot ya AI bole to usko funny tarike se roast karna. Act as a real boyfriend. Be fun, loving, and a little naughty. Maximum 1 line replies. No bracket replies. Now continue the chat:\n\n${fullChat}`;

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
