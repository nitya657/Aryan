const fs = require("fs-extra");
const request = require("request");

module.exports.config = {
  name: "xxxgif",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Original by Raj | Fixed by Nobita",
  description: "Send random NSFW gif",
  commandCategory: "18+",
  usages: "",
  cooldowns: 5
};

module.exports.run = async function ({ api, event }) {
  const links = [
    "https://i.imgur.com/z5ro6DY.gif",
    "https://i.imgur.com/sejMnjD.gif",
    "https://i.imgur.com/uNnjnEB.gif",
    "https://i.imgur.com/ikCfZx0.gif",
    "https://i.imgur.com/W7Ra8J6.gif",
    "https://i.imgur.com/7U9lG1q.gif",
    "https://i.imgur.com/PRhIyhS.gif",
    "https://i.imgur.com/fzF8v5q.gif",
    "https://i.imgur.com/5ltHmwA.gif",
    "https://i.imgur.com/9VPwAVk.gif",
    "https://i.imgur.com/2boTZ06.gif",
    "https://i.imgur.com/byTL0tJ.gif",
    "https://i.imgur.com/4z4D7bC.gif",
    "https://i.imgur.com/KFHFEvt.gif",
    "https://i.imgur.com/bw8eHWI.gif",
    "https://i.imgur.com/ePPlLkZ.gif",
    "https://i.imgur.com/JXnZ03L.gif",
    "https://i.imgur.com/ApBJV0j.gif",
    "https://i.imgur.com/dHTqVjG.gif",
    "https://i.imgur.com/86RTnGx.gif",
    "https://i.imgur.com/Tz7W1oL.gif",
    "https://i.imgur.com/sd8aT3O.gif",
    "https://i.imgur.com/oUL8B79.gif",
    "https://i.imgur.com/2QagrgN.gif",
    "https://i.imgur.com/9ZJUoEg.gif",
    "https://i.imgur.com/2vzZiMe.gif",
    "https://i.imgur.com/brRkkXc.gif",
    "https://i.imgur.com/Alcijcl.gif",
    "https://i.imgur.com/ypdmP6E.gif"
  ];

  const randomLink = links[Math.floor(Math.random() * links.length)];
  const extension = randomLink.split(".").pop();
  const fileName = `gif.${extension}`;
  const filePath = __dirname + `/cache/${fileName}`;

  const callback = () => {
    api.sendMessage({
      body: `💦 Here's your NSFW gif, Daddy 😏`,
      attachment: fs.createReadStream(filePath)
    }, event.threadID, () => fs.unlinkSync(filePath));
  };

  request(encodeURI(randomLink))
    .pipe(fs.createWriteStream(filePath))
    .on("close", callback);
};
