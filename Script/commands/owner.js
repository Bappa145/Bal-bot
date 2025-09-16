const axios = require("axios");
const fs = require("fs-extra");
const request = require("request");
const moment = require("moment-timezone");

module.exports.config = {
  name: "admininfo",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "𝐂𝐘𝐁𝐄𝐑 ☢️_𖣘 𝑴_ ☢️",
  description: "বটের অ্যাডমিন ইনফো দেখাবে",
  commandCategory: "info",
  usages: "[]",
  cooldowns: 5,
  dependencies: {
    "request": "",
    "fs-extra": "",
    "axios": ""
  }
};

module.exports.run = async function ({ api, event }) {
  try {
    // বট কতক্ষণ চালু আছে
    const uptime = process.uptime();
    const hours = Math.floor(uptime / (60 * 60));
    const minutes = Math.floor((uptime % (60 * 60)) / 60);
    const seconds = Math.floor(uptime % 60);

    // বাংলাদেশ টাইম
    const time = moment.tz("Asia/Dhaka").format("『D/MM/YYYY』 【hh:mm:ss】");

    // প্রোফাইল পিক ডাউনলোড
    let url = encodeURI(
      "https://graph.facebook.com/100086680386976/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb99e22001a3"
    );
    let path = __dirname + "/cache/Bappa.jpg";

    request(url)
      .pipe(fs.createWriteStream(path))
      .on("close", () => {
        // মেসেজ পাঠানো
        api.sendMessage(
          {
            body:
              "===𝗔𝗗𝗠𝗜𝗡 𝗜𝗡𝗙𝗢===\n\n" +
              "𝗢𝘄𝗻𝗲𝗿 : BAPPA DEBNATH \n" +
              "𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞: https://www.facebook.com/BappaxD \n" +
              "𝗠𝗔𝗦𝗦𝗘𝗡𝗚𝗘𝗥 𝗟𝗜𝗡𝗞:\n" +
              "https://m.me/BappaxD \n\n" +
              "𝗔𝗗𝗗𝗥𝗘𝗦𝗦: KHULNA \n\n" +
              "===𝗖𝗢𝗡𝗧𝗔𝗖𝗧 𝗙𝗢𝗥𝗠𝗔𝗧𝗧𝗢𝗡===\n\n" +
              "⏱ Bot Uptime: " +
              hours +
              "h " +
              minutes +
              "m " +
              seconds +
              "s\n" +
              "🕑 Time: " +
              time +
              "\n\n==========",
            attachment: fs.createReadStream(path),
          },
          event.threadID,
          () => fs.unlinkSync(path) // ছবি ডিলিট
        );
      });
  } catch (e) {
    console.log(e);
    return api.sendMessage("❌ কিছু সমস্যা হয়েছে!", event.threadID, event.messageID);
  }
};