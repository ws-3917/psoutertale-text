import { content } from '../../../code/systems/assets';
import { CosmosFont, CosmosKeyed } from '../../../code/systems/storyteller';

// START-TRANSLATE

export const LANGUAGE = "zh_TW-alt";

export default {
   cellInventoryX: 0,
   cellBoxX: 0,
   cellFinishX: 0,
   footerX: 0,
   itemEquipX: 0,
   itemUseX: 0,
   itemInfoX_equip: 0,
   itemInfoX_use: 0,
   itemDropX_equip: 0,
   itemDropX_use: 0,
   loadContinueX: 0,
   loadLVX: 0,
   loadObserveX: 0,
   loadResetX: 0,
   loadSettingsX: 0,
   loadTimeX: 0,
   loadTrueResetX: 0,
   nameChoiceCameos: <CosmosKeyed<string>>{
      
      "": "你必須選定一個名字。",
      no: "No?",

      
      bully: "嗯...？",
      flirt: "嗯...？",
      geno: "嗯...？",
      mercy: "嗯...？",
      murder: "嗯...？",
      paci: "嗯...？",
      maybe: "Maybe?",
      yes: "Yes?",

      
      afraid: "打起精神來。\n這兒沒什麼好怕的。",
      amused: "輕裝上陣，你的旅途將會更加順利。",
      angry: "打起精神來。\n讓不如意的事情隨風而去吧。",
      angsty: "打起精神來。\n不管你心情如何，講你自己的故事。",
      antsy: "May tranquility come upon you as you embark on your journey.",
      bored: "打起精神來。\n只要你想，那就必然能書寫趣味人生。",
      brainy: "May your quality of speech translate to action on your journey.",
      brave: "A courageous heart will serve you well on your journey.",
      brazen: "A courageous heart will serve you well on your journey.",
      calm: "A sense of serenity will do you wonders on your journey.",
      clever: "May your ingenuity surpass the challenges on your journey.",
      cocky: "A confident mindset will take you far on your journey.",
      crafty: "May your inginuity surpass the challanges on your journey.",
      crazy: "May balance come upon you as you embark on your journey.",
      daring: "A courageous heart will serve you well on your journey.",
      dizzy: "May balance come upon you as you embark on your journey.",
      dumb: "Take heart.\nThere is much to be learned on the road ahead.",
      edgy: "May the tapestry of chaos and order satisfy you on your journey.",
      elated: "輕裝上陣，你的旅途將會更加順利。",
      empty: "May your story gain meaning in this cocoon amidst the darkness.",
      flirty: "May the experience be as playful as you desire.",
      giddy: "輕裝上陣，你的旅途將會更加順利。",
      goofy: "輕裝上陣，你的旅途將會更加順利。",
      greedy: "May the experience be as excessive as you desire.",
      guilty: "打起精神來。\n沒什麼好慚愧的。",
      happy: "輕裝上陣，你的旅途將會更加順利。",
      hollow: "May your story gain meaning in this cocoon amidst the darkness.",
      humble: "A temperate ego will take you far on your journey.",
      hungry: "May the experience provide the sustenance you require.",
      insane: "May balance come upon you as you embark on your journey.",
      irate: "打起精神來。\n讓不如意的事情隨風而去吧。",
      jaded: "May your story bring forth the emotion you strive to feel.",
      lazy: "May your choices be as effortless as they come.",
      lively: "輕裝上陣，你的旅途將會更加順利。",
      livid: "打起精神來。\n讓不如意的事情隨風而去吧。",
      lonely: "Take heart.\nThere is much companionship to be had here.",
      lucky: "May your fortune carry you forward on your journey.",
      mad: "打起精神來。\n讓不如意的事情隨風而去吧。",
      manic: "May balance come upon you as you embark on your journey.",
      meek: "A temperate ego will take you far on your journey.",
      modest: "A temperate ego will take you far on your journey.",
      nervy: "May tranquility come upon you as you embark on your journey.",
      moody: "打起精神來。\n不管你心情如何，講你自己的故事。",
      numb: "May your story bring forth the emotion you strive to feel.",
      proud: "A confident mindset will take you far on your journey.",
      rowdy: "May the tapestry of chaos and order please you on your journey.",
      sad: "Take heart.\nYour story is as uplifting as you make it.",
      sane: "理智會為你築牢這趟旅程的基石。",
      sassy: "May the experience be as playful as you desire.",
      sated: "May the experience only add to your state of satisfaction.",
      scared: "打起精神來。\n這兒沒什麼好怕的。",
      serene: "A sense of serenity will do you wonders on your journey.",
      shy: "May the experience be as comforting as you desire.",
      silly: "輕裝上陣，你的旅途將會更加順利。",
      sleepy: "May the experience provide the energy you require.",
      smug: "A confident mindset will take you far on your journey.",
      sorry: "打起精神來。\n沒什麼好慚愧的。",
      spry: "May your overflowing energy power you through your journey.",
      steady: "理智會為你築牢這趟旅程的基石。",
      stupid: "Take heart.\nThere is much to be learned on the road ahead.",
      timid: "打起精神來。\n這兒沒什麼好怕的。",
      tired: "May the experience provide the energy you require.",
      unruly: "May the tapestry of chaos and order please you on your journey.",
      wacky: "輕裝上陣，你的旅途將會更加順利。",
      witty: "May your quality of speech translate to action on your journey.",
      zen: "理智會為你築牢這趟旅程的基石。",

      
      erogot: "你選擇了我，讓我深感榮幸。",
      roman: "讓實驗開始吧。",
      thomas: "讓實驗開始吧。",

      
      chara: "真正的名字。",
      frisk: "這名字不對。",

      
      blooky: "............\n（它無力阻止你。）",
      dummy: "............\n（他好像不怎麼健談。）",
      lurky: "Hello.",
      mushy: "上馬！",
      napsta: "............\n（它無力阻止你。）",
      torie: "嗯... 我想這個名字可以...",
      toriel: "我覺得，\n你應該想個自己的名字。\n我的孩子。",
      twink: "真的嗎...",
      twinkl: "想得美，蠢貨。",
      twinky: "想得美，蠢貨。",
      walker: "你是指“眼行家”？",

      
      astro: "快看看我的天線吶！",
      cdrake: "哈哈哈，不錯嘛。",
      chilly: "哈哈哈，不錯嘛。",
      dogamy: "嗯？這什麼味道？",
      doggo: "It's m-moving! I-I-It's shaking!",
      jerry: "傑瑞。",
      major: "(The dog jumped into your lap.)",
      minor: "(Pant pant)",
      papyrs: "我準了！！！",
      papyru: "我準了！！！",
      san: "好。",
      sans: "沒門。",
      sdrake: "A \"stellar\" choice.",
      serf: "快看看我的天線吶！",
      starry: "A \"stellar\" choice.",

      
      bob: "這名字挺棒的，不是嗎？",
      doge: "這不好笑。",
      gelata: "Roar.",
      gerson: "哇哈哈！為什麼不呢？",
      mdummy: "什麼，什麼！什麼！！！",
      mkid: "那是我的名字！！",
      monkid: "那是我的名字！！",
      muffet: "Ahuhuhu~\nYou must have great taste, dearie~",
      raddy: "嘿！\n只有Skrubby才能這樣叫我！",
      radtie: "Sorry, but you're a letter shy.",
      radtil: "Sorry, but you're a letter shy.",
      shyren: "...？",
      skrub: "乾淨的名字。",
      skrubb: "乾淨的名字。",
      tem: "你吼！！",
      temmie: "你吼！！",
      undyn: "哈啊，行行行。",
      undyne: "找個你自己的名字去！",

      
      alphy: "額... 行吧？",
      alphys: "別-別這麼做。",
      bpants: "你還真會挑別人剩下的。",
      bratty: "嗯，我想行吧。",
      burgie: "You like my name, little buddy?",
      catty: "Bratty！Bratty！\n那是我的名字！",
      cozmo: "一位巫師同伴？",
      glyde: "不錯的選擇，小夥子。",
      hapsta: "Now you're just being rude, darling.",
      mett: "喔！！！ \n你在推廣我的品牌嗎？",
      metta: "喔！！！ \n你在推廣我的品牌嗎？",
      mtt: "喔！！！ \n你在推廣我的品牌嗎？",

      
      aaron: "你確定是這個名字嗎？ ;)",
      grillb: "Hot, but not hot enough.",
      grilly: "Hot, but not hot enough.",
      gyft: "沒必要這樣...",
      heats: "你知道！？",
      kabakk: "Respect my AUTHORITY!",
      vulkin: "啊！謝謝你～",
      zorren: "Thanks for, uh, using my name.",

      
      asgor: "可以？",
      asgore: "不可以。",
      asriel: "..."
   },

   

// END-TRANSLATE
   nameChoiceFonts: {
      san: [ content.fComicSans, 16 ],
      sans: [ content.fComicSans, 16 ],
      papyrs: [ content.fPapyrus, 16 ],
      papyru: [ content.fPapyrus, 16 ]
   } as Partial<CosmosKeyed<[CosmosFont, number]>>,
   nameChoiceRestrictions: [
      '',
      'alphys',
      'asgore',
      'asriel',
      'frisk',
      'sans',
      'toriel',
      'twinkl',
      'twinky',
      'twnkly',
      'undyne'
   ],
   namePromptX: 0,
   nameValueY: 0,
   nameLetterMap: [
      [ 'A', 'B', 'C', 'D', 'E', 'F', 'G' ],
      [ 'H', 'I', 'J', 'K', 'L', 'M', 'N' ],
      [ 'O', 'P', 'Q', 'R', 'S', 'T', 'U' ],
      [ 'V', 'W', 'X', 'Y', 'Z' ],
      [ 'a', 'b', 'c', 'd', 'e', 'f', 'g' ],
      [ 'h', 'i', 'j', 'k', 'l', 'm', 'n' ],
      [ 'o', 'p', 'q', 'r', 's', 't', 'u' ],
      [ 'v', 'w', 'x', 'y', 'z' ]
   ],
   nameLetterPosition: (index: number) => {
      const x = (index % 26) % 7;
      const y = Math.floor((index % 26) / 7);
      if (index < 26) {
         return { x: 120 + x * 64, y: 158 + y * 28 };
      } else {
         return { x: 120 + x * 64, y: 278 + y * 28 };
      }
   },
   nameLetterValidation: (char: string) => {
      return /[A-Za-z]/g.test(char);
   },
   nameQuitX: 0,
   nameBackspaceX: 0,
   nameDoneX: 0,
   nameConfirmX: 0,
   nameNoX: 0,
   nameYesX: 0,
   nameGoBackX: 0,
   saveLVX: 0,
   saveReturnX: 0,
   saveSaveX: 0,
   settingsHeaderX: 0,
   statBoxSizeX: 0
};
