const fs = require('fs-extra');
const axios = require('axios');
const path = require('path');

module.exports.config = {
  name: "Rule",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Lash TEAM",
  description: " গ্রুপের নিয়ম ও তথ্য দেখায়",
  commandCategory: "info",
  usages: "",
  cooldowns: 5,
  dependencies: {
    "request": "",
    "fs-extra": "",
    "axios": ""
  }
};

module.exports.run = async function({ api, event, args, Users, Threads, __GLOBAL }) {
  const { threadID, messageID } = event;

  // Messenger Bot এর image path
  const imagePath = path.join(__dirname, 'images', 'islamic_group.jpg');

  // Bot Message
  const messageBody = `
⎯⎯⎯⋆✦⋆
 গ্রুপের নিয়ম ও তথ্য:
1. স্প্যাম করা যাবে না
2. খারাপ ভাষা ব্যবহার নিষিদ্ধ
3. সকলকে সম্মান দিতে হবে
4. ভিডিও/ছবি পোস্ট করার আগে অনুমতি নিন
5. ১৮+ বিষয় এড়াতে হবে
6. অন্যকে বিরক্ত করা যাবে না
7. দয়া করে অ্যাডমিনের নির্দেশ মানুন
⎯⎯⎯⋆✦⋆
`;

  // মেসেজ পাঠানো
  api.sendMessage({
    body: messageBody,
    attachment: fs.createReadStream(imagePath)
  }, threadID, () => {
    // পাঠানোর পর ছবি ফাইল ডিলিট করা
    if (fs.existsSync(imagePath)) fs.unlinkSync(imagePath);
  }, messageID);
};