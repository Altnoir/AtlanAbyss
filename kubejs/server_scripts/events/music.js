function musicRecipes(event) {
  const musics = [
    {
      url: "https://music.163.com/song/media/outer/url?id=2018462805.mp3",
      name: "下北沢は良い所",
      time_second: 108,
      id: "llmion:music_cd_15"
    },
    {
      url: "https://music.163.com/song/media/outer/url?id=2018459478.mp3",
      name: "うきうき現実世界",
      time_second: 124,
      id: "llmion:music_cd_16"
    },
    {
      url: "https://music.163.com/song/media/outer/url?id=2010586266.mp3",
      name: "その日入った新人より使えないダメバイトのエレジー",
      time_second: 28,
      id: "llmion:music_cd_17"
    },
    {
      url: "https://music.163.com/song/media/outer/url?id=2010586262.mp3",
      name: "陰キャの果て",
      time_second: 66,
      id: "llmion:music_cd_18"
    },
    {
      url: "https://music.163.com/song/media/outer/url?id=2010586261.mp3",
      name: "なんだかとても眠いんだ",
      time_second: 78,
      id: "llmion:music_cd_19"
    },
    {
      url: "https://music.163.com/song/media/outer/url?id=2010586260.mp3",
      name: "よくわからない",
      time_second: 59,
      id: "llmion:music_cd_20"
    },
    {
      url: "https://music.163.com/song/media/outer/url?id=2010582516.mp3",
      name: "魔境",
      time_second: 69,
      id: "llmion:music_cd_21"
    },
    {
      url: "https://music.163.com/song/media/outer/url?id=2010582515.mp3",
      name: "あ、あの......",
      time_second: 59,
      id: "llmion:music_cd_22"

    },
    {
      url: "https://music.163.com/song/media/outer/url?id=2010586251.mp3",
      name: "ふらふら",
      time_second: 97,
      id: "llmion:music_cd_23"
    },
    {
      url: "https://music.163.com/song/media/outer/url?id=509098809.mp3",
      name: "Tomorrow",
      time_second: 272,
      id: "llmion:music_cd_24"
    },
    {
      url: "https://music.163.com/song/media/outer/url?id=509106635.mp3",
      name: "The First Layer",
      time_second: 117,
      id: "llmion:music_cd_25"
    },
    {
      url: "https://music.163.com/song/media/outer/url?id=509098792.mp3",
      name: "Hanezeve Caradhina (ft.Takeshi Saito)",
      time_second: 201,
      id: "llmion:music_cd_26"
    },
    {
      url: "https://music.163.com/song/media/outer/url?id=509098783.mp3",
      name: "Underground River (opening version ft.Raj Ramayya)",
      time_second: 121,
      id: "llmion:music_cd_27"
    },
    {
      url: "https://music.163.com/song/media/outer/url?id=509106626.mp3",
      name: "To the Abyss!",
      time_second: 141,
      id: "llmion:music_cd_28"
    },
    {
      url: "https://music.163.com/song/media/outer/url?id=509106619.mp3",
      name: "Made in Abyss",
      time_second: 128,
      id: "llmion:music_cd_29"
    },
    {
      url: "https://music.163.com/song/media/outer/url?id=1993070346.mp3",
      name: "VOH ft. Takeshi Saito",
      time_second: 459,
      id: "llmion:music_cd_30"
    },
    {
      url: "https://music.163.com/song/media/outer/url?id=1993075049.mp3",
      name: "Counterpoint of Abyss",
      time_second: 259,
      id: "llmion:music_cd_31"
    },
    {
      url: "https://music.163.com/song/media/outer/url?id=1993070339.mp3",
      name: "Ningyō x 龍",
      time_second: 162,
      id: "llmion:music_cd_32"
    },
    {
      url: "https://music.163.com/song/media/outer/url?id=1993075046.mp3",
      name: "ベラフの子守歌",
      time_second: 199,
      id: "llmion:music_cd_33"
    },
    {
      url: "https://music.163.com/song/media/outer/url?id=1993070337.mp3",
      name: "Capital of the Unreturned",
      time_second: 156,
      id: "llmion:music_cd_34"
    },
    {
      url: "https://music.163.com/song/media/outer/url?id=1993075048.mp3",
      name: "vs. Organic Machine",
      time_second: 250,
      id: "llmion:music_cd_35"
    },
    {
      url: "https://music.163.com/song/media/outer/url?id=1993070338.mp3",
      name: "Nature Sequence. 6th Layer.",
      time_second: 155,
      id: "llmion:music_cd_36"
    },
    {
      url: "https://music.163.com/song/media/outer/url?id=1993075039.mp3",
      name: "SAN-KEN「The Three SAGES」",
      time_second: 215,
      id: "llmion:music_cd_37"
    },
    {
      url: "https://music.163.com/song/media/outer/url?id=1993070344.mp3",
      name: "Market of IRUburu",
      time_second: 213,
      id: "llmion:music_cd_38"
    },
    {
      url: "https://music.163.com/song/media/outer/url?id=1993070342.mp3",
      name: "Drums of Ganja-Tai",
      time_second: 187,
      id: "llmion:music_cd_39"
    },
    {
      url: "https://music.163.com/song/media/outer/url?id=1993075038.mp3",
      name: "The Village",
      time_second: 182,
      id: "llmion:music_cd_40"
    },
    {
      url: "https://music.163.com/song/media/outer/url?id=1993070335.mp3",
      name: "Faputa",
      time_second: 219,
      id: "llmion:music_cd_41"
    },
    {
      url: "https://music.163.com/song/media/outer/url?id=1993075040.mp3",
      name: "Radio Requiem",
      time_second: 255,
      id: "llmion:music_cd_42"
    },
    {
      url: "https://music.163.com/song/media/outer/url?id=1993070336.mp3",
      name: "BIRD_(n); CAGE. For Strings, Organs & Winds",
      time_second: 247,
      id: "llmion:music_cd_43"
    },
    {
      url: "https://music.163.com/song/media/outer/url?id=1993070343.mp3",
      name: "Juroimoh Mutation",
      time_second: 319,
      id: "llmion:music_cd_44"
    },
    {
      url: "https://music.163.com/song/media/outer/url?id=1993075047.mp3",
      name: "Carnival! Praise to Princess",
      time_second: 130,
      id: "llmion:music_cd_45"
    },
    {
      url: "https://music.163.com/song/media/outer/url?id=1993070341.mp3",
      name: "Reg & his Interference Unit",
      time_second: 175,
      id: "llmion:music_cd_46"
    },
    {
      url: "https://music.163.com/song/media/outer/url?id=1993075007.mp3",
      name: "Gravity ft. Arnór Dan",
      time_second: 313,
      id: "llmion:music_cd_47"
    },
    {
      url: "https://music.163.com/song/media/outer/url?id=1993075009.mp3",
      name: "Vueko",
      time_second: 216,
      id: "llmion:music_cd_48"
    },
    {
      url: "https://music.163.com/song/media/outer/url?id=1993070305.mp3",
      name: "Tori x Onkyō",
      time_second: 202,
      id: "llmion:music_cd_49"
    },
    {
      url: "https://music.163.com/song/media/outer/url?id=1993070304.mp3",
      name: "I. AM. BURNING. MAN",
      time_second: 149,
      id: "llmion:music_cd_50"
    },
    {
      url: "https://music.163.com/song/media/outer/url?id=1993070302.mp3",
      name: "Ouni",
      time_second: 202,
      id: "llmion:music_cd_51"
    },
    {
      url: "https://music.163.com/song/media/outer/url?id=1993075005.mp3",
      name: "Princess & the Village",
      time_second: 216,
      id: "llmion:music_cd_52"
    },
    {
      url: "https://music.163.com/song/media/outer/url?id=1993075004.mp3",
      name: "Mori",
      time_second: 172,
      id: "llmion:music_cd_53"
    },
    {
      url: "https://music.163.com/song/media/outer/url?id=1993070307.mp3",
      name: "The Golden City",
      time_second: 231,
      id: "llmion:music_cd_54"
    },
    {
      url: "https://music.163.com/song/media/outer/url?id=1993070306.mp3",
      name: "Eyes of Irumyuui",
      time_second: 199,
      id: "llmion:music_cd_55"
    },
    {
      url: "https://music.163.com/song/media/outer/url?id=1993070303.mp3",
      name: "Ryūsazai",
      time_second: 135,
      id: "llmion:music_cd_56"
    },
    {
      url: "https://music.163.com/song/media/outer/url?id=1993070301.mp3",
      name: "DANCE : nArEhAtE",
      time_second: 253,
      id: "llmion:music_cd_57"
    },
    {
      url: "https://music.163.com/song/media/outer/url?id=1993075002.mp3",
      name: "Sëgûr",
      time_second: 216,
      id: "llmion:music_cd_58"
    },
    {
      url: "https://music.163.com/song/media/outer/url?id=1993070298.mp3",
      name: "Mallets of Abyss",
      time_second: 166,
      id: "llmion:music_cd_59"
    },
    {
      url: "https://music.163.com/song/media/outer/url?id=1993075006.mp3",
      name: "Old Stories",
      time_second: 421,
      id: "llmion:music_cd_60"
    },
    {
      url: "https://music.163.com/song/media/outer/url?id=1993070299.mp3",
      name: "Tomorrowland",
      time_second: 172,
      id: "llmion:music_cd_61"
    }
  ];
  //唱片
  for (const music of musics) {
    event.custom({
      type: 'pneumaticcraft:amadron',
      static: false,
      input: {
        type: 'ITEM',
        id: 'minecraft:emerald',
        amount: 42
      },
      output: {
        type: 'ITEM',
        id: 'netmusic:music_cd',
        amount: 1,
        nbt: `{NetMusicSongInfo:{name:'${music.name}',time:${music.time_second},url:'${music.url}'}}`
      },
      level: 3,
      maxStock: 1
    }).id(music.id);
  }
};