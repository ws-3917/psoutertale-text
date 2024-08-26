import { content } from '../../../code/systems/assets';
import { CosmosFont, CosmosKeyed, CosmosTyper } from '../../../code/systems/storyteller';

const cjk = /[\u2000-\u221F\u3000-\u30FF\u4E00-\u9FFF\uFF00-\uFFFF]/;
const cjk2latin =
   /([\u2000-\u221F\u3000-\u30FF\u4E00-\u9FFF\uFF00-\uFFFF])([^/=}\u2000-\u221F\u3000-\u30FF\u4E00-\u9FFF\uFF00-\uFFFF]|$)/g;
const latin2cjk =
   /(^|[^/={\u2000-\u221F\u3000-\u30FF\u4E00-\u9FFF\uFF00-\uFFFF])([\u2000-\u221F\u3000-\u30FF\u4E00-\u9FFF\uFF00-\uFFFF])/g;

// START-TRANSLATE



export const LANGUAGE = "zh_TW";

export default {
   cellInventoryX: 9,
   cellBoxX: -2,
   cellFinishX: 24,
   disclaimer: {
      title: "- DISCLAIMER -",
      content: "1. PS!OUTERTALE is made by Spacey_432.\nOur team is working on the translation.\n2. If you find any untranslated text or dialogue,\nplease kindly let us know instead of\nassuming we are lazy.\n3. Please avoid asking questions already answered \nin the FAQ.  (Examples: \"How do I change the language?\",\n\"How do I defeat Toriel?\", or \"How do I run the game?\").\nOur translators are focused on providing \nthe best translation and may not have time \nto address these inquiries."
   },
   footerX: 0,
   itemEquipX: 0,
   itemUseX: 0,
   itemInfoX_equip: -3,
   itemInfoX_use: 4,
   itemDropX_equip: 0,
   itemDropX_use: 0,
   loadContinueX: 0,
   loadObserveX: 4,
   loadLVX: 8,
   loadResetX: 13,
   loadSettingsX: 1,
   loadTimeX: 0,
   loadTrueResetX: 16,
   nameChoiceCameos: <CosmosKeyed<string>>{
      
      '': '你必須選定一個名字。',
      no: 'No？',

      
      bully: '嗯...？',
      flirt: '嗯...？',
      geno: '嗯...？',
      mercy: '嗯...？',
      murder: '嗯...？',
      paci: '嗯...？',
      maybe: '也許吧？',
      yes: 'Yes？',

      
      afraid: '打起精神來。\n這兒沒什麼好怕的。',
      amused: '輕裝上陣，你的旅途將會更加順利。',
      angry: '打起精神來。\n讓不如意的事情隨風而去吧。',
      angsty: '打起精神來。\n不管你心情如何，講你自己的故事。',
      antsy: '願平靜如微風，伴你踏上旅程中的每一步。',
      bored: '打起精神來。\n只要你想，那就必然能書寫趣味人生。',
      brainy: '願你言行不渝，在旅途中化為行動的力量。',
      brave: '勇敢的心將成為你旅途中的最佳夥伴。',
      brazen: '勇敢的心將成為你旅途中的最佳夥伴。',
      calm: '內心的寧靜將為你的旅途帶來奇蹟。',
      clever: '願你足智多謀，戰勝此次旅途的重重困難。',
      cocky: '心態堅定，你會在旅途中一往無前。',
      crafty: '願你足智多謀，戰勝此次旅途的重重困難。',
      crazy: '願你心態平和，在旅途中收穫平衡與安寧。',
      daring: '勇敢的心將成為你旅途中的最佳夥伴。',
      dizzy: '願你心態平和，在旅途中收穫平衡與安寧。',
      dumb: '打起精神來。\n前路漫漫，許多未知亟待你來求索。',
      edgy: '願你安之若素，享受混沌與秩序交織的圖景。',
      elated: '輕裝上陣，你的旅途將會更加順利。',
      empty: '願你受益匪淺，在黑暗的囚籠中找尋到意義。',
      flirty: '願從你心所欲，享受此番經歷的樂趣與玩味。',
      giddy: '輕裝上陣，你的旅途將會更加順利。',
      goofy: '輕裝上陣，你的旅途將會更加順利。',
      greedy: '願從你心所欲，享受此番經歷的充實與豐盈。',
      guilty: '打起精神來。\n沒什麼好慚愧的。',
      happy: '輕裝上陣，你的旅途將會更加順利。',
      hollow: '願你受益匪淺，在黑暗的囚籠中找尋到意義。',
      humble: '謙虛敬慎，你會在旅途中一往無前。',
      hungry: '願你大快朵頤，攫取旅途一點一滴的滋養。',
      insane: '願你心態平和，在旅途中收穫平衡與安寧。',
      irate: '打起精神來。\n讓不如意的事情隨風而去吧。',
      jaded: 'May your story bring forth the emotion you strive to feel.',
      lazy: 'May your choices be as effortless as they come.',
      lively: '輕裝上陣，你的旅途將會更加順利。',
      livid: '打起精神來。\n讓不如意的事情隨風而去吧。',
      lonely: 'Take heart.\nThere is much companionship to be had here.',
      lucky: 'May your fortune carry you forward on your journey.',
      mad: '打起精神來。\n讓不如意的事情隨風而去吧。',
      manic: '願你心態平和，在旅途中收穫平衡與安寧。',
      meek: '謙虛敬慎，你會在旅途中一往無前。',
      modest: '謙虛敬慎，你會在旅途中一往無前。',
      nervy: '願平靜如微風，伴你踏上旅程中的每一步。',
      moody: '打起精神來。\n不管你心情如何，講你自己的故事。',
      numb: 'May your story bring forth the emotion you strive to feel.',
      proud: '心態堅定，你會在旅途中一往無前。',
      rowdy: 'May the tapestry of chaos and order please you on your journey.',
      sad: 'Take heart.\nYour story is as uplifting as you make it.',
      sane: '願理智成為你築牢這趟旅程的基石。',
      sassy: '願從你心所欲，享受此番經歷的樂趣與玩味。',
      sated: 'May the experience only add to your state of satisfaction.',
      scared: '打起精神來。\n這兒沒什麼好怕的。',
      serene: '內心的寧靜將為你的旅途帶來奇蹟。',
      shy: 'May the experience be as comforting as you desire.',
      silly: '輕裝上陣，你的旅途將會更加順利。',
      sleepy: 'May the experience provide the energy you require.',
      smug: '心態堅定，你會在旅途中一往無前。',
      sorry: '打起精神來。\n沒什麼好慚愧的。',
      spry: 'May your overflowing energy power you through your journey.',
      steady: '願理智成為你築牢這趟旅程的基石。',
      stupid: '打起精神來。\n前路漫漫，許多未知亟待你來求索。',
      timid: '打起精神來。\n這兒沒什麼好怕的。',
      tired: 'May the experience provide the energy you require.',
      unruly: 'May the tapestry of chaos and order please you on your journey.',
      wacky: '輕裝上陣，你的旅途將會更加順利。',
      witty: '願你言行不渝，在旅途中化為行動的力量。',
      zen: '願理智成為你築牢這趟旅程的基石。',

      
      erogot: '你選擇了我，讓我深感榮幸。',
      roman: '讓實驗開始吧。',
      thomas: '讓實驗開始吧。',

      
      chara: '真正的名字。',
      frisk: '這名字不對。',

      
      blooky: "............\n（它無力阻止你。）",
      dummy: "............\n（他好像不怎麼健談。）",
      lurky: '你好。',
      mushy: '上馬！',
      napsta: "............\n（它無力阻止你。）",
      torie: '嗯... 我想這個名字可以...',
      toriel: '我覺得，\n你應該想個自己的名字。\n我的孩子。',
      twink: '真的嗎...',
      twinkl: '想得美，蠢貨。',
      twinky: '想得美，蠢貨。',
      walker: '你是指「眼行家」？',

      
      astro: '快看看我的天線吶！',
      cdrake: '哈哈哈，不錯嘛。',
      chilly: '哈哈哈，不錯嘛。',
      dogamy: "嗯？這什麼味道？",
      doggo: "It's m-moving! I-I-It's shaking!",
      jerry: 'Jerry。',
      major: '(The dog jumped into your lap.)',
      minor: '(Pant pant)',
      papyrs: "我準了！！！",
      papyru: "我準了！！！",
      san: '好。',
      sans: '沒門。',
      sdrake: 'A \"stellar\" choice.',
      serf: '快看看我的天線吶！',
      starry: 'A \"stellar\" choice.',

      
      bob: '這名字挺棒的，不是嗎？',
      doge: '這不好笑。',
      gelata: 'Roar.',
      gerson: '哇哈哈！為什麼不呢？',
      mdummy: '什麼，什麼！什麼！！！',
      mkid: "那是我的名字！！",
      monkid: "那是我的名字！！",
      muffet: 'Ahuhuhu~\nYou must have great taste, dearie~',
      raddy: '嘿！\n只有Skrubby才能這樣叫我！',
      radtie: "Sorry, but you're a letter shy.",
      radtil: "Sorry, but you're a letter shy.",
      shyren: '...？',
      skrub: '乾淨的名字。',
      skrubb: '乾淨的名字。',
      tem: '你吼！！',
      temmie: '你吼！！',
      undyn: '嘎啊，行行行。',
      undyne: '找個你自己的名字去！',

      
      alphy: '呃... 行吧？',
      alphys: "別-別這麼做。",
      bpants: '你還真會挑別人剩下的。',
      bratty: '嗯，我想行吧。',
      burgie: 'You like my name, little buddy?',
      catty: "Bratty！Bratty！\n那是我的名字！",
      cozmo: '一位巫師同伴？',
      glyde: '不錯的選擇，小夥子。',
      hapsta: "Now you're just being rude, darling.",
      mett: '喔！！！\n你在推廣我的品牌嗎？',
      metta: '喔！！！\n你在推廣我的品牌嗎？',
      mtt: '喔！！！\n你在推廣我的品牌嗎？',

      
      aaron: '確定要選擇這個名字嗎？;)',
      grillb: 'Hot, but not hot enough.',
      grilly: 'Hot, but not hot enough.',
      gyft: "沒必要這樣...",
      heats: '你知道！？',
      kabakk: 'Respect my AUTHORITY!',
      vulkin: '啊！謝謝你~',
      zorren: 'Thanks for, uh, using my name.',

      
      asgor: '可以？',
      asgore: '不可以。',
      asriel: '...',
      asrie: '...',

      char: "...真正的名字？",
      查拉: "真正的名字。",
      猹: "...真正的名字？",
      卡拉: "...真正的名字？",
      恰拉: "...真正的名字？",
      fris: "這名字... 不對吧？",
      frask: "這名字... 不對吧？",
      弗裡斯克: "這名字不對。",
      福: "這名字... 不對吧？",
      福瑞斯克: "這名字... 不對吧？",

      羊媽: "嗯... 我想這個名字可以...",
      托麗: "嗯... 我想這個名字可以...",
      托麗爾: "我覺得，\n你應該想個自己的名字。\n我的孩子。",
      閃閃: "想得美，蠢貨。",

      papyrus: "這沒啥不合適的！！",
      帕: "我準了！！！",
      帕帕: "我準了！！！",
      帕派肉絲: "我準了！！！",
      帕帕肉絲: "我準了！！！",
      帕派瑞: "我準了！！！",
      帕派瑞斯: "這沒啥不合適的！！",
      阿派瑞斯: "我準了！！！",
      杉: "好。",
      衫: "好。",
      杉哥: "好。",
      衫哥: "好。",
      杉斯: "沒門。",
      衫斯: "沒門。",
      snas: "啥？",
      鱔絲: "啥？",
      衫衫: "啥？",
      杉杉: "啥？",

      魚姐: "嘎啊，行行行。",
      安黛: "嘎啊，行行行。",
      安黛因: "找個你自己的名字去！",

      宅龍: "呃... 行吧？",
      艾菲: "呃... 行吧？",
      艾菲斯: "別-別這麼做。",
      meta: "喔！！！\n你在推廣我的品牌嗎？",
      鎂塔: "喔！！！\n你在推廣我的品牌嗎？",
      鎂塔頓: "喔！！！\n你在推廣我的品牌嗎？",

      羊爸: "可以？",
      艾斯戈: "可以？",
      艾斯戈爾: "不可以。",
      艾斯利爾: "...",
      小羊: "...",
      艾斯利: "...",

      ws3917: "歡迎遊玩域外傳說！如果遇到Bug\n及時到交流群797416533反饋喔。",
      曉曉あかつき: "§fill=#43fff3§能找到這裡來也是辛苦你了。\n所以，嗯，我討厭翻譯雙關。§fill=#fff§",
      曉曉アカツキ: "§fill=#43fff3§能找到這裡來也是辛苦你了。\n所以，嗯，我討厭翻譯雙關。§fill=#fff§",
      暁々アカツキ: "§fill=#43fff3§能找到這裡來也是辛苦你了。\n所以，嗯，我討厭翻譯雙關。§fill=#fff§",
      暁暁アカツキ: "§fill=#43fff3§能找到這裡來也是辛苦你了。\n所以，嗯，我討厭翻譯雙關。§fill=#fff§",
      暁々あかつき: "§fill=#43fff3§能找到這裡來也是辛苦你了。\n所以，嗯，我討厭翻譯雙關。§fill=#fff§",
      暁暁あかつき: "§fill=#43fff3§能找到這裡來也是辛苦你了。\n所以，嗯，我討厭翻譯雙關。§fill=#fff§",
      roctd: "§random=1.1/1.1§3.1415⑨§random=0/0§ ...後面是啥來著？\n我數學水平堪比§fill=#0080ff§§random=1.1/1.1§琪露諾§random=0/0§§fill=#fff§，\n等我想完再放你進去...",
      3.1415: "§random=1.1/1.1§3.1415⑨§random=0/0§ ...後面是啥來著？\n我數學水平堪比§fill=#0080ff§§random=1.1/1.1§琪露諾§random=0/0§§fill=#fff§，\n等我想完再放你進去...",
      π: "§random=1.1/1.1§3.1415⑨§random=0/0§ ...後面是啥來著？\n我數學水平堪比§fill=#0080ff§§random=1.1/1.1§琪露諾§random=0/0§§fill=#fff§，\n等我想完再放你進去...",
      雪理奈: "§fill=#ffd1d9§你取了我的名字，\n這意味著你認識我。\n我可以給你一些幫助。§fill=#fff§",
      mdr: '§fill=#888§直入主題吧。§fill=#fff§',
      月亮菌: "§random=1.1/1.1§...我不覺得這個名字好欸bro§random=0/0§",
      屑moons: "§random=1.1/1.1§...我不覺得這個名字好欸bro§random=0/0§",
   },



   

// END-TRANSLATE
   nameChoiceFonts: {
      san: [content.fComicSans, 16],
      sans: [content.fComicSans, 16],
      snas: [content.fComicSans, 16],
      杉: [content.fComicSans, 16],
      衫: [content.fComicSans, 16],
      杉哥: [content.fComicSans, 16],
      衫哥: [content.fComicSans, 16],
      杉斯: [content.fComicSans, 16],
      衫斯: [content.fComicSans, 16],
      鱔絲: [content.fComicSans, 16],
      衫衫: [content.fComicSans, 16],
      杉杉: [content.fComicSans, 16],
      papyrs: [content.fPapyrus, 16],
      papyru: [content.fPapyrus, 16],
      papyrus: [content.fPapyrus, 16],
      帕: [content.fPapyrus, 16],
      帕帕: [content.fPapyrus, 16],
      帕派肉絲: [content.fPapyrus, 16],
      帕帕肉絲: [content.fPapyrus, 16],
      帕派瑞: [content.fPapyrus, 16],
      帕派瑞斯: [content.fPapyrus, 16],
      阿派瑞斯: [content.fPapyrus, 16]
   } as Partial<CosmosKeyed<[CosmosFont, number]>>,
   nameChoiceRestrictions: [
      '',
      'alphys',
      '艾菲斯',
      'asgore',
      '艾斯戈爾',
      'asriel',
      '艾斯利爾',
      'frisk',
      '弗裡斯克',
      'sans',
      '杉斯',
      '衫斯',
      'toriel',
      '托麗爾',
      'twinkl',
      'twinky',
      'twnkly',
      '閃閃',
      'undyne',
      '安黛因',
      "曉曉あかつき",
      "曉曉アカツキ",
      "暁々アカツキ",
      "暁暁アカツキ",
      "暁々あかつき",
      "暁暁あかつき",
      "roctd",
      "3.1415",
      "π"
   ],
   namePromptX: 16,
   nameValueY: 0,
   nameLetterMap: [],
   nameLetterPosition: () => ({ x: 0, y: 0 }),
   nameLetterValidation: (char: string) => {
      return /[\S]/g.test(char);
   },
   nameQuitX: 0,
   nameBackspaceX: 28,
   nameDoneX: 14,
   nameConfirmX: -4,
   nameNoX: 4,
   nameYesX: 3,
   nameGoBackX: 0,
   saveLVX: 8,
   saveReturnX: 18,
   saveSaveX: 14,
   settingsHeaderX: 0,
   statBoxSizeX: 22.5,
   textFormat(text: string, length = Infinity, plain = false) {
      let output = '';
      const raw = CosmosTyper.strip(text);
      const indent = raw[0] === '*';
      if (raw.length > length) {
         let braces = false;
         let sections = false;
         for (const char of text) {
            output += char;
            switch (char) {
               case '§':
                  sections = !sections;
                  break;
               case '{':
                  braces = true;
                  break;
               case '}':
                  braces = false;
                  break;
               default:
                  if (!braces && !sections) {
                     const lines = output.split('\n');
                     const ender = lines[lines.length - 1];
                     if (CosmosTyper.strip(ender).length > length) {
                        const words = ender.split(' ');
                        output = `${lines.slice(0, -1).join('\n')}${lines.length > 1 ? '\n' : ''}${words
                           .slice(0, -1)
                           .join(' ')}\n${indent ? '  ' : ''}${words[words.length - 1]}`;
                     }
                  }
            }
         }
      } else {
         output = text;
      }
      return plain
         ? output
         : output
            .replace(cjk2latin, '$1{#i/x0.5}$2')
            .replace(latin2cjk, '$1{#i/x2}$2')
            .replace(/,([\n ])/g, ',{^3}$1')
            .replace(/，/g, '，{^4}')
            .replace(/~([\n ])/g, '~{^4}$1')
            .replace(/\n\*/g, '{^5}\n*')
            .replace(/([.?!。？！])([\n ])/g, '$1{^5}$2')
            .replace(/:([\n ])/g, ':{^6}$1')
            .replace(/([-、])/g, '$1{^2}')
            .replace(/：/g, '：{^6}');
   },
   textLength(text: string) {
      let value = 0;
      for (const char of text) {
         value += cjk.test(char) ? 1 : 1;
      }
      return value;
   },
   textLengthPrecise(text: string) {
      let value = 0;
      for (const char of text) {
         value += cjk.test(char) ? 1.875 : 1;
      }
      return value;
   }
};
