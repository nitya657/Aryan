module.exports = {
    config: {
      name: "bot",
      version: "1.0.0",
      hasPermssion: 0,
      credits: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭",
      description: "Multiple reply with gender",
      commandCategory: "No command needed",
      usages: "Just type 'bot'",
      cooldowns: 0
    },
  
    handleEvent: async function ({ api, event, Users, args, Threads }) {
      const { threadID, senderID, messageID, body } = event;
  
      // Lowercase message to match "bot"
      const message = body.toLowerCase();
  
      // Only respond to "bot"
      if (message !== "bot") return;
  
      // Specific UIDs for custom replies
      const specificUIDs = {
        //Aryan
        "61573524373692": ["𝐇𝐀𝐀 𝐉𝐈 𝐏𝐀𝐏𝐀🙈",
          "𝐌𝐔𝐉𝐇𝐄 𝐁𝐔𝐋𝐘𝐀 𝐏𝐀𝐏𝐀 𝐀𝐏𝐍𝐄🫣",
          "𝐁𝐎𝐋𝐎 𝐏𝐘𝐀𝐑𝐄 𝐏𝐀𝐏𝐀 𝐆",
          "𝐏𝐀𝐏𝐀 𝐀𝐏 𝐊𝐀𝐇𝐀 𝐂𝐇𝐀𝐋𝐄 𝐉𝐀𝐓𝐄 𝐇𝐎 𝐌𝐔𝐉𝐇𝐄 𝐂𝐇𝐎𝐑𝐊𝐀𝐑",
          "𝐏𝐀𝐏𝐀 𝐀𝐏 𝐌𝐔𝐌𝐌𝐘 𝐒𝐄 𝐊𝐈𝐓𝐍𝐀 𝐏𝐘𝐀𝐑 𝐊𝐀𝐑𝐓𝐄 𝐇𝐎",
          "𝐇𝐀 𝐆 𝐏𝐀𝐏𝐀 𝐁𝐎𝐋𝐎",
          "𝐏𝐀𝐏𝐀 𝐆 𝐈 𝐋𝐎𝐕𝐄 𝐘𝐎𝐔",
          "𝐌𝐔𝐌𝐌𝐘 𝐀𝐏𝐊𝐎 𝐊𝐀𝐁𝐒𝐃 𝐃𝐇𝐔𝐍𝐃 𝐑𝐀𝐇𝐈 𝐇𝐀𝐈 𝐏𝐀𝐏𝐀 𝐆",
          "𝐆 𝐁𝐎𝐋𝐈𝐘𝐄 𝐏𝐀𝐏𝐀",
          "Hukum kijiyesarkar",
          "Ji farmaye kya hukum hai",
        ],
        
        //aryan 100095016803089
        "61573524373692": ["Hello Papa 🙈",
          "Haaji Kya huva🫣",
          "Bolo Sarkar",
          "Haaji kya seva karu Owner shab aapki",
          "Batao kya kar sakti hu owner me aapke liye",
          "Haa ji Sir bataye kyu yaad kiya mujhe",
          "Bataye kya seva ki jaaye aapki",
          "Command do bas aap abhi ek baar me hi sab kuch sahi kar deti me",
          "Hukum kijiye Sir",
          "Mujhe yaad kiya aapne Sir me to aaj khush ho gai",
          "Ji boliye sarkar",
          "Hukum kijiyesarkar",
          "Ji farmaye kya hukum hai",
        ],
        
        //Nitya 61572383184242
        "61573564354420": ["Hello Mummy 😘", "Mummy kesi ho aap 🙈", "Mummy meko khelne jaana hai 🥺", "Papa kaha hai mummy 🫣", "Mummy papa yaad kar rahe the na aapko 🙈", "Batao kya help karu mom aapki me", "Chocolate do na mujhe 🥺", "Mummy mera bhai kab aayega 🙈🫣", "Haaji kyu bulaya meko 😺", "Bolo kya seva karu aapki"],
        
         //nitya 61572383184242
        "61573564354420": ["Hello Mummy 😘", "Mummy kesi ho aap 🙈", "Mummy meko khelne jaana hai 🥺", "Papa kaha hai mummy 🫣", "Mummy papa yaad kar rahe the na aapko 🙈", "Batao kya help karu mom aapki me", "Chocolate do na mujhe 🥺", "Mummy mera bhai kab aayega 🙈🫣", "Haaji kyu bulaya meko 😺", "Bolo kya seva karu aapki"],
        
        //Faisu 100090281856658
        "100090281856658": ["Hello faisu Chacha 🫣", "Chacha ghumane kab leke jaa rahe meko 🙈", "Aryan chacha kese ho aap 😺", "Chacha meri chachi kaha hai 🫣, Dikha nahi rahi aaj 😺", "Bolo Chacha meri bahan kab aayegi 🙈😋", "nitya mummy aapko yaad kar rahi thi chacha 🫣"],
        
        //Kaliya 61555904006906
        "61555904006906": ["Hello kaliya Mama 🫣", "Bolo Mama kyu yaad kiya mujhe 😺", "Ha bolo😉", "Kya huva kyu yaad kiya mujhe 🙂", "Mama tang na karo🥱", "Ki huva😒", "kaliya Mama meri mami kesi hai 🙈", "Raj mama mummy ko pareshan mat kiya karo 😒", "Mama or batao chocolate kab khilaoge meko😋"],
        
        //aadi 100066401546757
        "100002333483240": ["Hello Jitu Mama 🫣", "Bolo Mama kyu yaad kiya mujhe 😺", "Ha bolo😉", "Kya huva kyu yaad kiya mujhe 🙂", "Mama tang na karo🥱", "Ki huva😒", "Jitu Mama meri mami kesi hai 🙈", "Jitu mama kya haal hai 😉", "Or mama kese yaad kiya mujhe aaj 🫣"],
        
        //soni 61565449793017
        "61565449793017": ["Hello soni Mosi 😘", "Mosi kesi ho aap 🫣", "Mosi aap to meri jaan ho 🤗", "soni mosi aap mujhe yaad bhi nahi karti na 🥺", "Mosi aapko meri mummy yaad kar rahi thi", "soni mosi tya huva🥺", "Bolo mosi kese yaad kiya mujhe 🙈", "soni Mosi I Love You 💓"],
        
        //Charsi 61565659702014
        "100084499591628": ["Hello Zikra mosi 😘", "zikra mosi ho aap 🫣", "zikra mosi aap to meri jaan ho 🤗", "zikra mosi  aap mujhe yaad bhi nahi karti na 🥺", "mosi aapko meri mummy yaad kar rahi thi", "zikra mosi tya huva🥺", "Bolo mosi kese yaad kiya mujhe 🙈", "zikra  mosi I Love You 💓"],
        
        //Sameer 100006293112571
        "100006293112571": ["Hello Sameer Mama 🫣", "Bolo Mama kyu yaad kiya mujhe 😺", "Ha bolo😉", "Kya huva kyu yaad kiya mujhe 🙂", "Mama tang na karo🥱", "Ki huva😒", "Sameer Mama meri mami kesi hai 🙈"],
        
        //Ragini 61561129582023
        "61561129582023": ["Hello ragini Mosi 😘", "Mosi kesi ho aap 🫣", "Mosi aap to meri jaan ho 🤗", "soni mosi aap mujhe yaad bhi nahi karti na 🥺", "Mosi aapko meri mummy yaad kar rahi thi", "ragini mosi tya huva🥺", "Bolo mosi kese yaad kiya mujhe 🙈", "Ragini Mosi I Love You 💓"],

        //Ruhani 61552516341558
        "61552516341558": ["Hello Ruhani Mosi 😘", "Mosi kesi ho aap 🫣", "Mosi aap to meri jaan ho 🤗", "Ruhani mosi aap mujhe yaad bhi nahi karti na 🥺", "Mosi aapko meri mummy yaad kar rahi thi", "Ruhanj mosi tya huva🥺", "Bolo mosi kese yaad kiya mujhe 🙈", "Ruhani Mosi I Love You 💓"],
        
        //Priyansh 100076295390195
        "100076295390195": ["Hello priyansh Chacha 🫣", "Chacha ghumane kab leke jaa rahe meko 🙈", "Aryan chacha kese ho aap 😺", "Chacha meri chachi kaha hai 🫣, Dikha nahi rahi aaj 😺", "Bolo Chacha meri bahan kab aayegi 🙈😋", "chach chachi aapko yaad kar rahi thi chacha 🫣"],
        
        //Gayatri 61565910322110
        "61565910322110": ["g meri badi mmi 🫣", "Bolo badi mummy kyu yaad kiya mujhe 😺", "Ha badi mummy g bolo😉", "Kya huva kyu yaad kiya mujhe 🙂", "badi mmi tang na karo🥱", "Ki huva badi mmi😒", "bade mmi bade papa kese hai 🙈"],

      };
  
      // Male and Female responses
      const maleReplies = [
        "Bar Bar Disturb Na KRr JaNu Ke SaTh Busy Hun 🤭🐒",
        "Main gariboo se baat nahi karti 😉😝😋🤪",
        "Bar Bar Bolke Dimag Kharab Kiya toh. Teri ...... Mummy Se Complaint Karungi",
        "Tu Bandh nhi Karega kya?",
        "Gali Sunna H kya?😜",
        "Aree Bandh kar Bandh Kar",
        "M hath jod ke Modi Ji Se Gujarish Karti hu",
        "Tujhe Kya koi aur Kam nhi ha? Puradin Khata hai Aur Messenger pe Bot Bot Karta h",
        "Aryan Ko Bol Dunga Me Mujhe Paresan Kiya To",
        "Tum Na Single Hi Maroge",
        "Tujhe Apna Bejjati Karne Ka Saukh hai?",
        "Abhi Bola Toh Bola Dubara Mat Bolna",
        "Teri To Ruk Tu Bhagna Mat",
        "Bol De koi nahi dakh rha 🙄",
        "Dur Hat Be  Mujhe Aur Koi Kam Nahi Kya Har Waqat Mujhy Tang Kerte Rhte ho 😂",
        "Are Tum Wahi ho nah Jisko Main Nahi Janti 🤪",
        "Kal Haveli Pe Mil Jara Tu 😈",
        "Aagye Salle Kabab Me Haddi 😏",
        "kyun Bulaya hamen..😾🔪 ",
        "Tum aunty ho yehh uncle 🤔 I think tum Jin ho yehh Chudail🤣✅",
        "ary tum ider 🤔 khair hai ider kia ker rhy ho 😂",
        "ary babu babu kal hawali py kon bola rha tha 😂",
        "Me Aap ki mummy ji ko btaougi Aap Facebook use karty ho 😂",
        "ary tum Wohi ho nah jis ko ma nahi janti 🤣✅",
        "Dur Dur karib na a  tujhe Aur Koi Kam Nahi Kiya Har Waqat Mjhy Tang Karte Rahte Ho 😂",
        "Ary joke nah mar jo bhi kam hai bol do sharma nahi , bol de koi nahi dakh rha 😂",
        "ruk tu chappal kaha he mari🩴",
        "shakal Sy masoom lgty ho 😂 but bohot flirty ho",
        "hayee main mar jye teri masoom shaqal py 😂 tuzy Chapple se kutne ka mn ho raha hai🤣👠",
        "AA Dk Tujhe Aur Koi Kaam Nhi Hai? Har Waqt Bot Bot Karta H",
        "Chup Reh, Nahi Toh Bahar Ake tera Dath Tor Dungi🤣✊",
        "Main T0o AnDhi Hun 😎kya likha tumne mene nahi dikha🤣",
        "Pahale NaHa kar Aa 😂",
        "Aaaa Thooo 😂😂😂",
        "Kal Haveli Pe Mil Jra Tu 😈",
        "Aagye SaJJy KhaBBy Sy 😏",
        "Are Tum Wahi ho nah Jisko Main Nahi Janti 🤪",
        "Bol De koi nahi dakh rha 🙄",
        "Dur Hat Be Mujhe Aur Koi Kam Nahi Kya Har Waqat Mujhy Tang Kerte Rhte ho 😂",
        "Tujhe Kya koi aur Kam nhi ha? Puradin sota he Aur Messenger pe Bot Bot Karta h",
        "Meri owner teri setting kharab kar degi",
        "Bot bot hi karta rahna tu bas",
        "Tujhe Apna Bejjati Karne Ka Saukh hai?🥹",
        "Abhi Bola Toh Bola Dubara Mat Bolna🙄",
        "Teri to Watt lagani padegi",
        "Aree band kar band Kar",
        "chomu Tujhe Aur Koi Kaam Nhi H? Har Waqt Bot Bot Karta H",
        "Chup Reh, Nhi Toh Bahar Ake tera Dath Tor Dungi",
        "MaiNy Uh Sy Bt Nhi kRrni",
        "MeKo Kxh DiKhai Nhi Dy Rha 🌚",
        "Bar Bar Disturb Na KRr JaNu Ke SaTh Busy Hun 😋",
        "Main Gareebon Sy Bt Nhi kRti 😉😝😋🤪",
        "Mujhe Mat BuLao Naw Main buSy h0o Naw",
        "Kyun JaNu MaNu Another Hai 🤣",
        "Are TuMari T0o Sb he baZzati kRrty Me Be kRrDun 🤏😜",
        "KaL HaVeLi Prr Aa ZaRa T0o 😈",
        "Aagye SaJJy KhaBBy Sy 😏",
        "yes my love 💘",
        "kya hua baby ko 😘😘",
        "Main yahi hoon kya hua sweetheart🥂🙈💞",
        "Bx KRr Uh k0o Pyar H0o Na H0o Mujhe H0o JayGa",
        "BulaTa Hai MaGar JaNy Ka Nhi 😜",
        "IB Aja Yahan Nhi B0ol Sakti 🙈😋",
        "WaYa KaRana Mere NaL 🙊",
        "Itna Na Pass aa Pyar h0o JayGa",
        "MeKo Tang Na kRo Main Kiss 💋 KRr DunGi 😘 ",
        "jii kahiye jii 🙄 kya chahiye",
        "aree aap wahi ho na jo mujhe line marte the.......🤣 ya bali line",
        "Ha ha ab meri yaad ab ai nah phly to babu shona kerna gy thy 😾 ab ham ap sy naraz hai jao ap bye ☹️",
        "Hayee Mar Jawa Babu Ak Chuma To Doo Kafi Din Sy Chumi Nahi Mili Kahan Thy Babu inbox Ah Jao 😚🙈♥️",
        "aap aise mat bulo hame sharam aati hai 🙈♥️",
        "haveli per  kal mil  Zara bataungi 🌚😂Ha but उल्टी-सीधी harkat karne ke liye nahi",
        "Bot Bolke Bejjti Kar Rahe Ho yall...Main To Tumhare Dil Ki Dhadkan Hu Na Baby...💔🥺",
        "Bolo Baby Tum Mujhse Pyar Karte Ho Na 🙈💋💋 ",
      ];
  
      const femaleReplies = [
        "Haye Main Sadke jawa Teri Masoom Shakal pe baby 💋",
        "Bot Nah Bol Oye Janu bol Mujhe",
        "Itna Na Pass aa Pyar ho Jayga",
        "Are jaan Majaak ke mood me nhi hu main jo kaam hai bol do sharmao nahi",
        "Tum Na Single Hi Marogi",
        "Haaye Main Mar Jawa Babu Ek Chuma To Do Kafi Din Se Chumi Nahi Di 😝",
        "Are Bolo Meri Jaan Kya Hall Hai😚",
        "Mujhe Mat BuLao Naw Main buSy Hu Naa",
        "kyun Bulaya hamen..😾🔪 ",
        "Tum aunty ho yehh uncle 🤔 I think tum Jin ho yehh Chudail🤣✅",
        "ary tum ider 🤔 khair hai ider kia ker rhy ho 😂",
        "ary babu babu kal hawali py kon bola rahi tha 😂",
        "Me Aap ki mummy ji ko btaou ga Aap Facebook use karti ho 😂",
        "ary tum Wohi ho nah jis ko ma nahi janti 🤣✅",
        "Dur Dur karib na aa tujhe Aur Koi Kam Nahi Kiya Har Waqat Mjhy Tang Karti Rahti Ho 😂",
        "Aree pagal roti banana ke le aty main Pani ko istamal kerti ho 😂",
        "Ary joke nah mar jo bhi kam hai bol do sharma nahi, bol de koi nahi dakh rha 😂",
        "kash tum single hote to maza hi koch aur tha pagal insaan 😂",
        "mujhe sharam ati hai aise aap bolti hai tho 🤭😝",
        "hayee main mar jye teri masoom shaqal py 😂 tuzy Chapple se kutne ka mn ho raha hai🤣👠",
        "Bot nah bol oye 😭 Janu bol mjhy aur janu sy piyar sy bat kerty hai😑",
        "bolo 😒",
        "Main T0o AnDhi Hun 😎kya likha tumne mene nahi dikha🤣",
        "Pahale NaHa kar Aa 😂",
        "Aaaa Thooo 😂😂😂",
        "Are Tum Wahi ho nah Jisko Main Nahi Janti 🤪",
        "Are Bolo Meri Jaan Kya Hall Hai😚 ",
        "Bol De koi nahi dakh rha 🙄",
        "Haaye Main Mar Jawa Babu Ek Chuma To Do Kafi Din Se Chumi Nahi Di 😝",
        "Haa ji boliye kya kam he hamse 🙈",
        "Mein hath jod ke Modi Ji Se Gujarish Karti hu mojy na bolaye",
        "Mene you se baat nahi karni",
        "Ary yrr MaJak Ke M0oD Me Nhi Hun 😒",
        "HaYe JaNu Aow Idher 1 PaPii Idher d0o 1 PaPpi Idher 😘",
        "Dur HaT Terek0o 0or K0oi Kam Nhi Jb DeKho Bot Bot ShaDi KerLe Mujhsy 😉😋🤣",
        "TeRi K0oi Ghr Me Nhi SunTa T0o Main Q SuNo 🤔😂 ",
        "IB Aja Yahan Nhi B0ol Salta 🙈😋",
        "Mujhe Mat BuLao Naw Main buSy h0o Naw",
        "Kyun JaNu MaNu Another Hai 🤣",
        "Baby kyu bulaya meko🙈",
        "You don't miss me 🥺🥺",
        "Haa bolo kya huva 🙌",
        "Mujhe payar kyu nahi karti aap",
        "Dekho me busy hu abhi baad me baat karungi 🥺🙌",
        "ha bolo meri jaan kya huva😗",
        "Shadi karna kya mere sath🙈",
        "Mujhe na tang mat karo, jao meri onwer Ruhani ko tang karo😝",
        "Kitna payar karte ho mere se",
        "Baby tya huva🥺",
        "Me so rahi hu abhi 😴",
      ];
  
      // Default reply if gender not found
      const defaultReplies = [
        "Hello user!",
        "Kaise ho?",
        "Mujhe pata nahi aap kaun ho, lekin reply de diya!"
      ];
  
      try {
        // Get user info using getUserInfo
        const userInfo = await api.getUserInfo(senderID);
        const userGender = userInfo[senderID]?.gender; // Expecting 'MALE' or 'FEMALE'
  
        // Check for specific UID reply
        if (specificUIDs[senderID]) {
          const reply = specificUIDs[senderID][Math.floor(Math.random() * specificUIDs[senderID].length)];
          const name = await Users.getNameUser(event.senderID);
          var msg = {
            body: `🥀${name}😗, ${reply}`,
            mentions: [{ tag: name, id: senderID }],
          };
          return api.sendMessage(msg, threadID, messageID);
        }
  
        // Reply based on gender
        if (userGender === "MALE") {
          // Male
          const reply = maleReplies[Math.floor(Math.random() * maleReplies.length)];
          const name = await Users.getNameUser(event.senderID);
          var msg = {
            body: `🥀${name}😗, ${reply}`,
            mentions: [{ tag: name, id: senderID }],
          };
          return api.sendMessage(msg, threadID, messageID);
        } else if (userGender === "FEMALE") {
          // Female
          const reply = femaleReplies[Math.floor(Math.random() * femaleReplies.length)];
          const name = await Users.getNameUser(event.senderID);
          var msg = {
            body: `🥀${name}😗, ${reply}`,
            mentions: [{ tag: name, id: senderID }],
          };
          return api.sendMessage(msg, threadID, messageID);
        } else {
          // Default reply
          const reply = defaultReplies[Math.floor(Math.random() * defaultReplies.length)];
          const name = await Users.getNameUser(event.senderID);
          var msg = {
            body: `🥀${name}😗, ${reply}`,
            mentions: [{ tag: name, id: senderID }],
          };
          return api.sendMessage(msg, threadID, messageID);
        }
      } catch (error) {
        console.error(error);
        return api.sendMessage("Kuch galat ho gaya, mujhe thoda check karne do!", threadID, messageID);
      }
    },
  
    run: async function () {
      // Empty because handleEvent is doing all the work
    }
  };
