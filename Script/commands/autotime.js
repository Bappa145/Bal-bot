module.exports.config = {
  name: "autotime",
  version: "2.0.0",
  hasPermssion: 0,
  credits: "Emran Edit",
  description: "২৪ ঘণ্টায় ফানি মেসেজ পাঠাবে!",
  commandCategory: "Messenger group message",
  usages: "[]",
  cooldowns: 3
};

const nam = [
  { timer: "1:00:00 AM", message: ["🌃 এখন রাত ১টা... কারো ঘুম ভাঙছে না তো? 😴"] },
  { timer: "2:00:00 AM", message: ["😴 রাত ২টা... ঘুম না দিলে কালকে পাণ্ডা লাগবে 🐼"] },
  { timer: "3:00:00 AM", message: ["🌌 রাত ৩টা... ভূতের সিনেমা দেখতেছেন নাকি? 👻"] },
  { timer: "4:00:00 AM", message: ["😳 রাত ৪টা... এই সময়ে অনলাইনে থাকলে সন্দেহজনক 🤨"] },
  { timer: "5:00:00 AM", message: ["🌄 ভোর ৫টা... মোরগ ডাকছে, উঠো ভাই 🐓"] },
  { timer: "6:00:00 AM", message: ["☀️ সকাল ৬টা... দাঁত মাজছো তো? 😁"] },
  { timer: "7:00:00 AM", message: ["🍵 সকাল ৭টা... চা খাওয়ার পারফেক্ট টাইম ☕"] },
  { timer: "8:00:00 AM", message: ["📚 সকাল ৮টা... স্কুল-কলেজের দুঃস্বপ্ন টাইম 😵"] },
  { timer: "9:00:00 AM", message: ["💼 সকাল ৯টা... অফিস যাত্রা শুরু, ট্রাফিকের যুদ্ধ 🚌"] },
  { timer: "10:00:00 AM", message: ["😪 সকাল ১০টা... কাজের নামে ঘুমাইতাসে কিছু মানুষ 😂"] },
  { timer: "11:00:00 AM", message: ["🍛 সকাল ১১টা... পেট চুলকাচ্ছে, লাঞ্চ টাইম আসতেছে 😋"] },
  { timer: "12:00:00 PM", message: ["🌞 দুপুর ১২টা... খাওয়ার আগে পানি খাও! 🥤"] },
  { timer: "1:00:00 PM", message: ["🍲 দুপুর ১টা... লাঞ্চ খাইলা? প্লেট ধুইছো তো? 🍽️"] },
  { timer: "2:00:00 PM", message: ["😴 দুপুর ২টা... ঝিমাইতাসে সবাই 💤"] },
  { timer: "3:00:00 PM", message: ["📖 বিকেল ৩টা... পড়াশোনা করার নাটক শুরু 📚"] },
  { timer: "4:00:00 PM", message: ["⚽ বিকেল ৪টা... মাঠে নামার মুড তৈরি 🏃"] },
  { timer: "5:00:00 PM", message: ["🌅 বিকেল ৫টা... বিকেলের হাওয়া, কফি চাই ☕"] },
  { timer: "6:00:00 PM", message: ["🕌 সন্ধ্যা ৬টা... আজানের সুর শোনা যাচ্ছে 🤲"] },
  { timer: "7:00:00 PM", message: ["🍔 সন্ধ্যা ৭টা... নাশতা খাইলা? নাকি আবার বিরিয়ানি? 😋"] },
  { timer: "8:00:00 PM", message: ["📱 রাত ৮টা... সবাই মোবাইলের সাথে বিয়ে করছে 📵"] },
  { timer: "9:00:00 PM", message: ["🌙 রাত ৯টা... ঘুমানোর আগে মশার কয়েল দাও 🦟"] },
  { timer: "10:00:00 PM", message: ["😴 রাত ১০টা... ঘুমাতে যাও, কাল সকালে ফ্রেশ থাকবা 🛌"] },
  { timer: "11:00:00 PM", message: ["📺 রাত ১১টা... নাটক শেষ? এবার অফলাইন হও 🙃"] },
  { timer: "12:00:00 AM", message: ["🌌 রাত ১২টা... দিবানিশি অনলাইনে থাকলে পাগল বনে যাবা 🤯"] }
];

module.exports.onLoad = api => setInterval(() => {
  const getRandom = arr => arr[Math.floor(Math.random() * arr.length)];

  let now = new Date(Date.now() + 25200000) // +7 ঘন্টা (BD Time)
    .toLocaleTimeString()
    .trim();

  let found = nam.find(item => item.timer === now);

  if (found) {
    global.data.allThreadID.forEach(threadID => 
      api.sendMessage(getRandom(found.message), threadID)
    );
  }
}, 1000);

module.exports.run = () => {};