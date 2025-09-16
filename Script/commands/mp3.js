const axios = require("axios");
const fs = require("fs-extra");

module.exports.config = {
  name: "mp3",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Islamick Chat",
  description: "Convert video to MP3 audio",
  commandCategory: "media",
  usages: "convartMP4 [video url] or reply to a video",
  cooldowns: 5
};

module.exports.run = async function ({ api, args, event }) {
  try {
    // যদি লিঙ্ক দেয়া থাকে অথবা reply এ ভিডিও থাকে
    let url =
      args.join(" ") ||
      (event.messageReply &&
        event.messageReply.attachments[0] &&
        event.messageReply.attachments[0].url);

    if (!url) {
      return api.sendMessage("❌ Please provide a video link or reply to a video.", event.threadID, event.messageID);
    }

    // ভিডিও ডাউনলোড
    const { data } = await axios.get(url, {
      method: "GET",
      responseType: "arraybuffer"
    });

    // mp3 হিসেবে সেভ করা
    const filePath = __dirname + "/cache/vdtoau.m4a";
    fs.writeFileSync(filePath, Buffer.from(data, "utf-8"));

    // মেসেজ তৈরি
    const msg = {
      body: "┄┅════❁🌺❁════┅┄•\n𝗖𝗼𝗻𝘃𝗲𝗿𝘁 𝗩𝗶𝗱𝗲𝗼 𝗠𝗣𝟯 🎼\n═══┅┄•",
      attachment: fs.createReadStream(filePath)
    };

    // পাঠানো
    return api.sendMessage(msg, event.threadID, event.messageID);
  } catch (e) {
    console.log(e);
    return api.sendMessage("❌ Error while converting video to MP3.", event.threadID, event.messageID);
  }
};