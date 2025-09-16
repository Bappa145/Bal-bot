const fs = require('fs');
const path = require('path');
const axios = require('axios');
const moment = require('moment-timezone');

module.exports.config = {
  name: "prefix",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "𝗟𝗮𝘀𝗵 ☢️_𝐓𝐄𝐀𝐌",
  description: "Prefix এবং Bot তথ্য দেখায়",
  commandCategory: "prefix",
  usages: "",
  cooldowns: 5
};

module.exports.run = async function({ api, event }) {
  const { threadID, messageID } = event;

  // Bot এবং System তথ্য
  const { PREFIX, BOTNAME } = global.config || { PREFIX: "!", BOTNAME: "Bot" };
  const threadData = global.data.threadData || {};
  const threadPrefix = (threadData[threadID]?.PREFIX) || PREFIX;

  // সময় (Bangladesh)
  const now = Date.now();
  const dayName = moment.tz("Asia/Dhaka").format("dddd");
  const time = moment.tz("Asia/Dhaka").format("HH:mm:ss | D/MM/YYYY");

  // Random Logo / Image
  const images = [
    path.join(__dirname, "images/logo1.png"),
    path.join(__dirname, "images/logo2.png"),
    path.join(__dirname, "images/logo3.png")
  ];
  const randomImage = images[Math.floor(Math.random() * images.length)];

  // Bot Info Message
  const message = `
╔══════𝗣𝗥𝗘𝗙𝗜𝗫 & 𝗕𝗢𝗧 𝗜𝗡𝗙𝗢
┃ 𝗣𝗿𝗲𝗳𝗶𝘅: ${threadPrefix}
┃ 𝗕𝗼𝘁 𝗡𝗮𝗺𝗲: ${BOTNAME}
┃ 𝗖𝘂𝗿𝗿𝗲𝗻𝘁 𝗗𝗮𝘆: ${dayName}
┃ 𝗖𝘂𝗿𝗿𝗲𝗻𝘁 𝗧𝗶𝗺𝗲: ${time}
╚════════════════
`;

  // মেসেজ পাঠানো
  api.sendMessage(
    { body: message, attachment: fs.createReadStream(randomImage) },
    threadID,
    () => fs.unlinkSync(randomImage), // পাঠানোর পর ছবি ডিলিট করা
    messageID
  );
};

module.exports.handleEvent = async () => {};