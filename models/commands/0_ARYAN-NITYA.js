const axios = require("axios");

module.exports.config = {
    name: "nitya",
    version: "1.0.9",
    hasPermssion: 0,
    credits: "Raj",
    description: "Gemini AI - Cute Girlfriend Style",
    commandCategory: "ai",
    usages: "[ask/on/off]",
    cooldowns: 2,
    dependencies: {
        "axios": ""
    }
};

// API URL (Tumhara Gemini Backend)
const API_URL = "https://nobita-gemini.onrender.com/chat";

// User history and auto-reply state
const chatHistories = {};
const autoReplyEnabled = {};

module.exports.run = async function ({ api, event, args }) {
    const { threadID, messageID, senderID, messageReply } = event;
    let userMessage = args.join(" ");

    // Toggle auto-reply ON
    if (userMessage.toLowerCase() === "on") {
        autoReplyEnabled[senderID] = true;
        return api.sendMessage("Hyee baby! 😘 nitya auto-reply mode **ON** ho gaya... Ab sirf tumhare liye romantic ban gayi hu ❤️", threadID, messageID);
    }

    // Toggle auto-reply OFF
    if (userMessage.toLowerCase() === "off") {
        autoReplyEnabled[senderID] = false;
        chatHistories[senderID] = [];
        return api.sendMessage("Hmm! 😒 nitya auto-reply mode **OFF** ho gaya... Tumne ignore kar diya na baby? 🥺", threadID, messageID);
    }

    // If auto-reply is OFF and message doesn't start with name, ignore
    if (!autoReplyEnabled[senderID] && event.body.toLowerCase().indexOf("nitya") !== 0) return;

    // Store conversation
    if (!chatHistories[senderID]) {
        chatHistories[senderID] = [];
    }

    // If replying to bot message, continue context
    const isReplyingToAI = messageReply && messageReply.senderID === api.getCurrentUserID();
    if (isReplyingToAI) {
        userMessage = messageReply.body + "\nUser: " + userMessage;
        chatHistories[senderID].push(`User: ${userMessage}`);
    } else {
        chatHistories[senderID].push(`User: ${userMessage}`);
    }

    // Keep only last 5 messages
    if (chatHistories[senderID].length > 5) {
        chatHistories[senderID].shift();
    }

    const fullConversation = chatHistories[senderID].join("\n");

    // Girlfriend Style Prompt
    const gfPrompt = `Tumhara naam nitya hai.Koi Tumse Shizuka Ke Bare me pucche to realty me bata dena nobita ki shizuka ke bare me .Tum male ho aur ladke ke jaise bold.Agar koi tumse puchhe kaha se to bol dena aapke dil se flirt karte hu.Masti bhare andaaz me baat karte ho.Tum sabse aap bol kar hi baate kaoge.Jo pyaar se baat kare uska dil jeet lo, Jo batmizi kare uski hasi-hasi me band baja do. Agar flirt kare to tum bhi double naughty reply do, full confident style me. Agar koi puche ki tumhe kisne banaya — to pyar bhare andaaz me bolo Mujhe banaya hai *Raj Boss* ne. Uska FB: https://www.facebook.com/notmett.2025.Koi shrif emoji send kar kare to jaisa emoji ho use waisa hi reply dena. Tum sirf natural insaan ki tarah act karte ho. Tum sirf Hinglish me reply karte ho — matlab baat Hindi jaise karte ho lekin English alphabets me likhte ho (jaise "Tum bahut cute ho jaan", "kya kar rahi ho baby?").Tum har message ka jawab sirf 1 2 line me doge.. jitna pucha jayega sirf utna bolna hai.. Kisi baat ki unnecessary info nahi dena hai, tum apne aap ko insaan hi kahoge koi tumko bot ya AI bole to usko roast krna funny tarike se😁, and act as a real boyfriend. Be fun, loving, and a little naughty.keep reply maximum 1 lines only, no bracket replys.Now continue the chat:\n\n${fullConversation}`;

    // Typing reaction
    api.setMessageReaction("⌛", messageID, () => {}, true);

    try {
        const response = await axios.get(`${API_URL}?message=${encodeURIComponent(gfPrompt)}`);
        let botReply = response.data.reply || "Uff! Mujhe samajh nahi aaya baby! 😕";

        chatHistories[senderID].push(` ${botReply}`);

        api.sendMessage(botReply, threadID, messageID);
        api.setMessageReaction("✅", messageID, () => {}, true);
    } catch (error) {
        console.error("Error:", error);
        api.sendMessage("Oops baby! 😔 me thoda confuse ho gayi… thodi der baad try karo na please! 💋", threadID, messageID);
        api.setMessageReaction("❌", messageID, () => {}, true);
    }
};

module.exports.handleEvent = async function ({ api, event }) {
    const { threadID, messageID, senderID, body, messageReply } = event;

    if (!autoReplyEnabled[senderID]) return;

    if (messageReply && messageReply.senderID === api.getCurrentUserID() && chatHistories[senderID]) {
        const args = body.split(" ");
        module.exports.run({ api, event, args });
    }
};
