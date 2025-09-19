module.exports.config = {
  name: "hot girl dp",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "LEGEND-ARYAN",
  description: "Gril Dp photos",
  commandCategory: "Random-IMG",
  usages: "hot gril dp",
  cooldowns: 2,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }

};

module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
    var link = [
"https://i.imgur.com/t9JqWzr.jpeg","https://i.imgur.com/lrY3VRt.jpeg","https://i.imgur.com/gj5rXFr.jpeg","https://i.imgur.com/swsOxAE.jpeg","https://i.imgur.com/CUQpLCF.jpeg","https://i.imgur.com/1GgbeeW.jpeg","https://i.imgur.com/1lfTEfc.jpeg","https://i.imgur.com/8qJ19rP.jpeg","https://i.imgur.com/LTvmTWF.jpeg","https://i.imgur.com/JdaO7D8.jpeg","https://i.imgur.com/KIllSw9.jpeg","https://i.imgur.com/TzTyJ0j.jpeg","https://i.imgur.com/YyJGwft.jpeg","https://i.imgur.com/D52bMAQ.jpeg","https://i.imgur.com/Srqs60R.jpeg","https://i.imgur.com/GRIpaTd.jpeg","https://i.imgur.com/6lVDApB.jpeg","https://i.imgur.com/oyEJoZl.jpeg","https://i.imgur.com/XYtNSBd.jpeg","https://i.imgur.com/tUIk8LS.jpeg","https://i.imgur.com/EfOqu7j.jpeg","https://i.imgur.com/f7E7z1j.jpeg","https://i.imgur.com/ZZA5PUk.jpeg","https://i.imgur.com/Nk9XyF5.jpeg","https://i.imgur.com/H4yYDgH.jpeg","https://i.imgur.com/mGBc75p.jpeg","https://i.imgur.com/hncVLZx.jpeg","https://i.imgur.com/MYeL7Mc.jpeg","https://i.imgur.com/otSfUPs.jpeg","https://i.imgur.com/R9YJv8V.jpeg","https://i.imgur.com/HcAJDQC.jpeg","https://i.imgur.com/asCV7CI.jpeg","https://i.imgur.com/FHezlyG.jpeg","https://i.imgur.com/ZXxweGw.jpeg","https://i.imgur.com/tI6Cwwt.jpeg","https://i.imgur.com/YNjO1Q9.jpeg","https://i.imgur.com/9FQRwc6.jpeg","https://i.imgur.com/rwKQiUB.jpeg","https://i.imgur.com/h274psu.jpeg","https://i.imgur.com/Q5sx37r.jpeg","https://i.imgur.com/i6L3JHu.jpeg","https://i.imgur.com/0WaQeZ2.jpeg","https://i.imgur.com/9czbWC9.jpeg","https://i.imgur.com/zUiUeWg.jpeg","https://i.imgur.com/C1G2nf1.jpeg","https://i.imgur.com/5LWwVk2.jpeg","https://i.imgur.com/oM8EW8y.jpeg","https://i.imgur.com/5bNHZHF.jpeg","https://i.imgur.com/xznFFBb.jpeg","https://i.imgur.com/AS9iuNh.jpeg","https://i.imgur.com/rKhx4Ov.jpeg","https://i.imgur.com/ZKe1zo1.jpeg","https://i.imgur.com/y2yV8hm.jpeg","https://i.imgur.com/Nrm4PZg.jpeg","https://i.imgur.com/ymqON6e.jpeg","https://i.imgur.com/1rFclCj.jpeg","https://i.imgur.com/sZ2hk0x.jpeg","https://i.imgur.com/eYMyp7p.jpeg","https://i.imgur.com/oF5xBqq.jpeg","https://i.imgur.com/XvkdHJ1.jpeg","https://i.imgur.com/OgZOjTc.jpeg","https://i.imgur.com/ayRSmLr.jpeg","https://i.imgur.com/fMV4O3U.jpeg","https://i.imgur.com/G52Sneh.jpeg","https://i.imgur.com/bgnxFtz.jpeg"
     ];
     var callback = () => api.sendMessage({body:`┏━━━━━┓\n     ╔╬⓼★⓼╃───────➣™
🄼🅁 🄱🄾🅃 🄾🅆🄽🄴🅁 🄰🅁🅈🄰🄽𝄠━─━Ⓔ⧐
╰✾✾®️╀✿✿╀─━ↈⓇ⧐                 ✧══•❁😛❁•══✧\n┗━━━━━┛\n\n♥️`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
   };
