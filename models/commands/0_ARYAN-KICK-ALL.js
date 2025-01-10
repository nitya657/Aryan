module.exports.config = {
    name: "allkick",
    version: "1.0.0",
    hasPermssion: 2,
    credits: "LEGEND-ARYAN",
    description: "THIS BOT WAS MADE BY MR LEGEND-ARYAN",
    commandCategory: "ALL MEMBERS REMOVE THE GROUP",
    usages: "PREFIX",
    usePrefix: false,
    cooldowns: 5
};
module.exports.run = async function({ api, event, getText,args }) {
  const { participantIDs } = await api.getThreadInfo(event.threadID)
  function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  };
  const botID = api.getCurrentUserID();
  const listUserID = participantIDs.filter(ID => ID != botID);
  return api.getThreadInfo(event.threadID, (err, info) => {
    if (err) return api.sendMessage("💐𝐁𝐎𝐒𝐒 𝐊𝐂𝐇 𝐆𝐀𝐃𝐁𝐀𝐃 𝐇𝐎 𝐑𝐀𝐇𝐈 𝐇𝐀𝐈💐", event.threadID);
    if (!info.adminIDs.some(item => item.id == api.getCurrentUserID()))
      return api.sendMessage(` 💐𝐁𝐎𝐒𝐒 𝐌𝐔𝐉𝐇𝐄 𝐀𝐃𝐌𝐈𝐍 𝐓𝐎 𝐁𝐀𝐍𝐀𝐎 𝐏𝐄𝐇𝐋𝐄💐`, event.threadID, event.messageID);
    if (info.adminIDs.some(item => item.id == event.senderID)) {
      setTimeout(function() { api.removeUserFromGroup(botID, event.threadID) }, 300000);
      return api.sendMessage(`💐𝐆𝐎𝐎𝐃 𝐁𝐘 𝐄𝐕𝐄𝐑𝐘𝐎𝐍𝐄 𝐌 𝐆𝐑𝐎𝐔𝐏 𝐊𝐇𝐀𝐓𝐀𝐌 𝐊𝐀𝐑 𝐑𝐀𝐇𝐀 𝐇𝐔💐🙂✌️`, event.threadID, async (error, info) => {
        for (let id in listUserID) {
          await new Promise(resolve => setTimeout(resolve, 1000));
          api.removeUserFromGroup(listUserID[id], event.threadID)
        }
      })
    } else return api.sendMessage(💐𝐘𝐄𝐇 𝐂𝐎𝐌𝐌𝐀𝐍𝐃 𝐒𝐈𝐑𝐅 𝐌𝐄𝐑𝐄 𝐁𝐎𝐒𝐒 𝐀𝐑𝐘𝐀𝐍 𝐊𝐎 𝐇𝐈 𝐀𝐋𝐋𝐎𝐖 𝐇𝐀𝐈💐😐✌️', event.threadID, event.messageID);
  })
}
