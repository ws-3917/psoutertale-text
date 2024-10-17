import { content } from '../../../code/systems/assets';
import { CosmosFont, CosmosKeyed, CosmosTyper } from '../../../code/systems/storyteller';

const cjk = /[\u2000-\u221F\u3000-\u30FF\u4E00-\u9FFF\uFF00-\uFFFF]/;
const cjk2latin =
   /([\u2000-\u221F\u3000-\u30FF\u4E00-\u9FFF\uFF00-\uFFFF])([^/=}\u2000-\u221F\u3000-\u30FF\u4E00-\u9FFF\uFF00-\uFFFF]|$)/g;
const latin2cjk =
   /(^|[^/={\u2000-\u221F\u3000-\u30FF\u4E00-\u9FFF\uFF00-\uFFFF])([\u2000-\u221F\u3000-\u30FF\u4E00-\u9FFF\uFF00-\uFFFF])/g;

// START-TRANSLATE



export const LANGUAGE = "zh_TW-alt";

export default {
   cellInventoryX: 9,
   cellBoxX: -2,
   cellFinishX: 24,
   disclaimer: {
      title: "- 遊戲聲明 -",
      content: "1.PS!OUTERTALE是Spacey_432製作的遊戲，\n  PSOT漢化組負責中文翻譯（以及「三角旅者」的翻譯），\n  漢化交流群群號：797416533(QQ)\n2.中文翻譯已完成41%，如果發現未翻譯的文本或對話，\n  請耐心等待。所有多語言翻譯中，中文進度是最快的。\n  所以儘量不要反饋對話沒有翻譯的問題。\n3.一些常見問題（比如「怎麼把語言改成中文？」、\n  「怎麼下載？」、「怎麼解壓遊戲？」），\n  建議先查閱「Q群管家」，常見問題答案都在那裡。\n  漢化組需要花更多時間推進漢化，接受bug反饋。\n  所以過於基礎的問題可能不會解答。\n4.如果對遊戲比較失望，不想繼續測試或遊玩，\n  您可以選擇刪除遊戲，而不要辱罵我們和作者。\n  漢化組和作者都付出了很多努力，希望能相互理解。\n\n再次感謝您對本遊戲與漢化組的支援，10秒後自動進入遊戲。"
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
      no: 'No?',

      
      bully: '嗯...？',
      flirt: '嗯...？',
      geno: '嗯...？',
      mercy: '嗯...？',
      murder: '嗯...？',
      paci: '嗯...？',
      maybe: 'Maybe?',
      yes: 'Yes?',

      
      afraid: '打起精神來。\n這兒沒什麼好怕的。',
      amused: '輕裝上陣，你的旅途將會更加順利。',
      angry: '打起精神來。\n讓不如意的事情隨風而去吧。',
      angsty: '打起精神來。\n不管你心情如何，講你自己的故事。',
      antsy: 'May tranquility come upon you as you embark on your journey.',
      bored: '打起精神來。\n只要你想，那就必然能書寫趣味人生。',
      brainy: 'May your quality of speech translate to action on your journey.',
      brave: 'A courageous heart will serve you well on your journey.',
      brazen: 'A courageous heart will serve you well on your journey.',
      calm: 'A sense of serenity will do you wonders on your journey.',
      clever: 'May your ingenuity surpass the challenges on your journey.',
      cocky: 'A confident mindset will take you far on your journey.',
      crafty: 'May your inginuity surpass the challanges on your journey.',
      crazy: 'May balance come upon you as you embark on your journey.',
      daring: 'A courageous heart will serve you well on your journey.',
      dizzy: 'May balance come upon you as you embark on your journey.',
      dumb: 'Take heart.\nThere is much to be learned on the road ahead.',
      edgy: 'May the tapestry of chaos and order satisfy you on your journey.',
      elated: '輕裝上陣，你的旅途將會更加順利。',
      empty: 'May your story gain meaning in this cocoon amidst the darkness.',
      flirty: 'May the experience be as playful as you desire.',
      giddy: '輕裝上陣，你的旅途將會更加順利。',
      goofy: '輕裝上陣，你的旅途將會更加順利。',
      greedy: 'May the experience be as excessive as you desire.',
      guilty: '打起精神來。\n沒什麼好慚愧的。',
      happy: '輕裝上陣，你的旅途將會更加順利。',
      hollow: 'May your story gain meaning in this cocoon amidst the darkness.',
      humble: 'A temperate ego will take you far on your journey.',
      hungry: 'May the experience provide the sustenance you require.',
      insane: 'May balance come upon you as you embark on your journey.',
      irate: '打起精神來。\n讓不如意的事情隨風而去吧。',
      jaded: 'May your story bring forth the emotion you strive to feel.',
      lazy: 'May your choices be as effortless as they come.',
      lively: '輕裝上陣，你的旅途將會更加順利。',
      livid: '打起精神來。\n讓不如意的事情隨風而去吧。',
      lonely: 'Take heart.\nThere is much companionship to be had here.',
      lucky: 'May your fortune carry you forward on your journey.',
      mad: '打起精神來。\n讓不如意的事情隨風而去吧。',
      manic: 'May balance come upon you as you embark on your journey.',
      meek: 'A temperate ego will take you far on your journey.',
      modest: 'A temperate ego will take you far on your journey.',
      nervy: 'May tranquility come upon you as you embark on your journey.',
      moody: '打起精神來。\n不管你心情如何，講你自己的故事。',
      numb: 'May your story bring forth the emotion you strive to feel.',
      proud: 'A confident mindset will take you far on your journey.',
      rowdy: 'May the tapestry of chaos and order please you on your journey.',
      sad: 'Take heart.\nYour story is as uplifting as you make it.',
      sane: '理智會為你築牢這趟旅程的基石。',
      sassy: 'May the experience be as playful as you desire.',
      sated: 'May the experience only add to your state of satisfaction.',
      scared: '打起精神來。\n這兒沒什麼好怕的。',
      serene: 'A sense of serenity will do you wonders on your journey.',
      shy: 'May the experience be as comforting as you desire.',
      silly: '輕裝上陣，你的旅途將會更加順利。',
      sleepy: 'May the experience provide the energy you require.',
      smug: 'A confident mindset will take you far on your journey.',
      sorry: '打起精神來。\n沒什麼好慚愧的。',
      spry: 'May your overflowing energy power you through your journey.',
      steady: '理智會為你築牢這趟旅程的基石。',
      stupid: 'Take heart.\nThere is much to be learned on the road ahead.',
      timid: '打起精神來。\n這兒沒什麼好怕的。',
      tired: 'May the experience provide the energy you require.',
      unruly: 'May the tapestry of chaos and order please you on your journey.',
      wacky: '輕裝上陣，你的旅途將會更加順利。',
      witty: 'May your quality of speech translate to action on your journey.',
      zen: '理智會為你築牢這趟旅程的基石。',

      
      erogot: '你選擇了我，讓我深感榮幸。',
      roman: '讓實驗開始吧。',
      thomas: '讓實驗開始吧。',

      
      chara: '真正的名字。',
      frisk: '這名字不對。',

      
      blooky: "............\n（它無力阻止你。）",
      dummy: "............\n（他好像不怎麼健談。）",
      lurky: 'Hello.',
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
      jerry: '傑瑞。',
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
      undyn: '哈啊，行行行。',
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

      
      aaron: '你確定是這個名字嗎？;)',
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
      弗里斯克: "這名字不對。",
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

      魚姐: "哈啊，行行行。",
      安戴: "哈啊，行行行。",
      安戴因: "找個你自己的名字去！",

      宅龍: "呃... 行吧？",
      艾菲: "呃... 行吧？",
      艾菲斯: "別-別這麼做。",
      meta: "喔！！！\n你在推廣我的品牌嗎？",
      鎂塔: "喔！！！\n你在推廣我的品牌嗎？",
      鎂塔頓: "喔！！！\n你在推廣我的品牌嗎？",
      慢吞吞: "喔！！！\n你在推廣我的品牌嗎？",
      馬婷婷: "喔！！！\n你在推廣我的品牌嗎？",
      慢騰騰: "喔！！！\n你在推廣我的品牌嗎？",
      馬蹄鐵: "喔！！！\n你在推廣我的品牌嗎？",
      馬桶套: "喔！！！\n你在推廣我的品牌嗎？",

      羊爸: "可以？",
      艾斯戈: "可以？",
      艾斯戈尓: "不可以。",
      艾斯利尓: "...",
      小羊: "...",
      艾斯利: "...",

      ws3917: "歡迎遊玩域外傳說！如果遇到Bug\n及時到交流群797416533反饋喔。",
      支援中文: "請選擇「是」。"
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
      '艾斯戈尓',
      'asriel',
      '艾斯利尓',
      'frisk',
      '弗里斯克',
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
      '安戴因'
   ],
   namePromptX: 16,
   nameValueY: 0,
   nameLetterMap: [],
   nameLetterPosition: () => ({ x: 0, y: 0 }),
   nameLetterValidation: (char: string) => {
      return /[A-Za-z0-9]/g.test(char) || cjk.test(char);
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
         value += cjk.test(char) ? 1.5 : 1;
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
