const emojiResponses = {
  "Bot beta": {
    "OWNER": [
      "g khalu🥺",
      "Khalu meri khala kaha hai 😀",
      "Khalu ap mujse pyar nhi karte na🥺"
    ]
  },
  "beta": {
     "OWNER": [
      "Khalu ap Jo bologe m wahi karunga ❤️bus mere shadi Kara do",
      "Khala se milwao na khalu 😀",
      "Khalu ap mujhe chor kar na Jaya kato🥺",
     "Khalu g ap mujhe Akela chor kar na Jaya Karo sab presan karte hai 😀"
    ]
  },
  "Beta": {
      "OWNER": [
      "Khalu g ap itna busy na raha karo",
      "Khalu jaldi se mere liye khala dhundh do na🥺",
      "Khalu g yeh group m sab mujhe bahut tang karte hai 😔"
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
      const botOwnerID = "100088814839076"; // Your bot owner UID
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
