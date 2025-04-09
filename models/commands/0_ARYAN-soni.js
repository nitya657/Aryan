const https = require('https');
const fs = require('fs');
const path = require('path');

module.exports = {
    config: {
        name: "soni",
        version: "1.0.1",
        hasPermission: 0,
        credits: "Priyansh Rajput",
        description: "no prefix",
        usePrefix: false,
        commandCategory: "No command marks needed",
        usages: "Yo Yo",
        cooldowns: 5,
    },

    handleEvent: async function({ api, event }) {
        const gifs = [
            "https://i.imgur.com/Igt8caR.jpeg",
            "https://i.imgur.com/i7J2tdF.jpeg",
            "https://i.imgur.com/ZjV7vTm.jpeg",
            "https://i.imgur.com/fKaDw4e.jpeg",
            "https://i.imgur.com/zazl1tD.jpeg",
            "https://i.imgur.com/ExtuNhg.jpeg"
        ];

        const message = "●💐 =======❤️💐❤️💐❤️❤️  =======💐     ☟  ========== ☟ ==========  ☟  ●============================● 𝐎𝐰𝐧𝐞𝐫 ➻────╔╬⓼★⓼╃───────➣🄼🅁 🄱🄾🅃 🄾🅆🄽🄴🅁 🄰🅁🅈🄰🄽𝄠━─━Ⓔ⧐╰✾✾®️╀✿✿╀─━ↈⓇ⧐";

        const { threadID, messageID, body } = event;
        if (!body || !body.toLowerCase().startsWith("soni")) return;

        try {
            const randomGif = gifs[Mathhttps:https:.floor(Math.random() * gifs.length)];
            const filePath = path.join(__dirname, 'Soni-Image.jpg');

            // Download the image
            const file = fs.createWriteStream(filePath);
            https.get(randomGif, (response) => {
                response.pipe(file);
                file.on('finish', async () => {
                    file.close();
                    const msg = {
                        body: message,
                        attachment: fs.createReadStream(filePath)
                    };
                    api.sendMessage(msg, threadID, (err, res) => {
                        if (!err) {
                            api.setMessageReaction("🙈", messageID, () => {}, true);
                        }
                        fs.unlink(filePath, () => {}); // Delete file after sending
                    });
                });
            }).on('error', (err) => {
                console.error("Download error:", err);
                fs.unlink(filePath, () => {}); // Cleanup on error
            });

        } catch (error) {
            console.error("Error handling event:", error);
        }
    },

    run: function() {
        // Empty run function for module requirements
    },
};
