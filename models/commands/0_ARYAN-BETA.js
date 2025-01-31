const emojiResponses = {
  "Bot": {
    "OWNER": [
      "जी पापा 🥺",
      "Bolo papa g apne merko ku yaad kiya😀",
      "Thanku papa g mujhe banane k liye 🥺"
    ]
  },
  "beta": {
     "OWNER": [
      "Bolo boss mujhe ku yaad kiya",
      "M apka hi wait kar raha tha boss 😀",
      "Papa g mmi ko I love you bol do na aj🥺",
     "Papa g ap mujhe Akela chor kar na Jaya Karo sab presan karte hai 😀"
    ]
  },
  "Beta": {
      "OWNER": [
      "Papa g ap itna busy na raha karo",
      "Papa g aj bta do ap mujse bahut pyar karte ho na 🥺",
      "Papa g yeh group m sab mujhe bahut tang karte hai 😔"
    ]
  }
};
 
module.exports.config = {
  name: "beta",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "LEGEND ARYAN",
  description: "MADE BY LEGEND ARYAN",
  commandCategory: "No command marks needed",
  cooldowns: 0,
};
 
module.exports.handleEvent = async function({ api, event }) {
  const { threadID, messageID, senderID, body } = event;
  const emojis = Object.keys(emojiResponses);
 
  // Convert the message body to lowercase
  const lowercaseBody = body.toLowerCase();
 
  for (const emoji of emojis) {
    if (lowercaseBody.includes(emoji)) {
      // Fetch user's gender correctly
      const ThreadInfo = await api.getThreadInfo(threadID);
      const user = ThreadInfo.userInfo.find(user => user.id === senderID);
 
      // Check if the sender is the bot owner
      const botOwnerID = "100095016803089"; // Your bot owner UID
      let responseArray;
 
      if (senderID === botOwnerID) {
        responseArray = emojiResponses[emoji]["OWNER"];
      } else {
        responseArray = emojiResponses[emoji][gender] || emojiResponses[emoji]["MALE"];
      }
 
      // Randomly select a response from the appropriate array
      const randomResponse = responseArray[Math.floor(Math.random() * responseArray.length)];
 
      const msg = {
        body: randomResponse,
      };
      api.sendMessage(msg, threadID, messageID);
      break; // Exit the loop once a match is found
    }
  }
};
 
module.exports.run = function() {};
