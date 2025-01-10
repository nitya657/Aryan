module.exports.config = {
	name: "groupname",
	version: "1.0.0", 
	hasPermssion: 0,
	credits: "LEGEND-ARYAN",
	description: "THIS BOT WAS MADE BY MR LEGEND-ARYAN",
	commandCategory: "CHANGE GROUP NAME", 
	usages: "PREFIX", 
	cooldowns: 0,
	dependencies: [] 
};

module.exports.run = async function({ api, event, args }) {
	var name = args.join(" ")
	if (!name) api.sendMessage("💐𝐌𝐄𝐑𝐈 𝐉𝐀𝐀𝐍 𝐆𝐑𝐎𝐔𝐏 𝐍𝐀𝐌𝐄 𝐓𝐈 𝐋𝐈𝐊𝐇𝐎 𝐉𝐎 𝐂𝐇𝐀𝐍𝐆𝐄 𝐊𝐀𝐑𝐍𝐀 𝐇𝐀𝐈💐", event.threadID, event.messageID)
	else api.setTitle(name, event.threadID, () => api.sendMessage(`💐𝐌𝐄𝐍𝐄 𝐆𝐑𝐎𝐔𝐏 𝐊𝐀 𝐍𝐀𝐌𝐄 𝐂𝐇𝐀𝐍𝐆𝐄 𝐊𝐀𝐑 𝐃𝐈𝐘𝐀💐👉 ${name}\n━━━━━━━━━━━━━━━━━━━━━━━\n╔╬⓼★⓼╃───────➣™
🄼🅁 🄱🄾🅃 🄾🅆🄽🄴🅁 🄰🅁🅈🄰🄽𝄠━─━Ⓔ⧐
╰✾✾®️╀✿✿╀─━ↈⓇ⧐🌺`, event.threadID, event.messageID));
}
