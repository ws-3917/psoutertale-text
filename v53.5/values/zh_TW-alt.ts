import { content } from '../../../code/systems/assets';
import { CosmosFont, CosmosKeyed, CosmosTyper } from '../../../code/systems/storyteller';

const cjk = /[\u2000-\u221F\u3000-\u30FF\u3400-\u4DBF\u4E00-\u9FFF\uFF00-\uFFFF]/;
const cjk2latin =
   /([\u2000-\u221F\u3000-\u30FF\u3400-\u4DBF\u4E00-\u9FFF\uFF00-\uFFFF])([^/=}\u2000-\u221F\u3000-\u30FF\u3400-\u4DBF\u4E00-\u9FFF\uFF00-\uFFFF]|$)/g;
const latin2cjk =
   /(^|[^/={\u2000-\u221F\u3000-\u30FF\u3400-\u4DBF\u4E00-\u9FFF\uFF00-\uFFFF])([\u2000-\u221F\u3000-\u30FF\u3400-\u4DBF\u4E00-\u9FFF\uFF00-\uFFFF])/g;

// START-TRANSLATE



export const LANGUAGE = "zh_TW-alt";

export default {
   cellInventoryX: 9,
   cellBoxX: -2,
   cellFinishX: 24,
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
      amused: '輕裝上陣，\n你的旅途將會更加順利。',
      angry: '打起精神來。\n讓不如意的事情隨風而去吧。',
      angsty: '打起精神來。\n不管你心情如何，\n講你自己的故事。',
      antsy: 'May tranquility come upon you as you embark on your journey.',
      bored: '打起精神來。\n只要你想，那就必然能\n書寫趣味人生。',
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
      elated: '輕裝上陣，\n你的旅途將會更加順利。',
      empty: 'May your story gain meaning in this cocoon amidst the darkness.',
      flirty: 'May the experience be as playful as you desire.',
      giddy: '輕裝上陣，\n你的旅途將會更加順利。',
      goofy: '輕裝上陣，\n你的旅途將會更加順利。',
      greedy: 'May the experience be as excessive as you desire.',
      guilty: '打起精神來。\n沒什麼好慚愧的。',
      happy: '輕裝上陣，\n你的旅途將會更加順利。',
      hollow: 'May your story gain meaning in this cocoon amidst the darkness.',
      humble: 'A temperate ego will take you far on your journey.',
      hungry: 'May the experience provide the sustenance you require.',
      insane: 'May balance come upon you as you embark on your journey.',
      irate: '打起精神來。\n讓不如意的事情隨風而去吧。',
      jaded: 'May your story bring forth the emotion you strive to feel.',
      lazy: 'May your choices be as effortless as they come.',
      lively: '輕裝上陣，\n你的旅途將會更加順利。',
      livid: '打起精神來。\n讓不如意的事情隨風而去吧。',
      lonely: '打起精神來。\n登上此次旅途，\n友情將伴你而行。',
      lucky: 'May your fortune carry you forward on your journey.',
      mad: '打起精神來。\n讓不如意的事情隨風而去吧。',
      manic: 'May balance come upon you as you embark on your journey.',
      meek: 'A temperate ego will take you far on your journey.',
      modest: 'A temperate ego will take you far on your journey.',
      nervy: 'May tranquility come upon you as you embark on your journey.',
      moody: '打起精神來。\n不管你心情如何，\n講你自己的故事。',
      numb: 'May your story bring forth the emotion you strive to feel.',
      proud: 'A confident mindset will take you far on your journey.',
      rowdy: 'May the tapestry of chaos and order please you on your journey.',
      sad: '打起精神來。\n只要你想，那就必然能\n書寫勵志人生。',
      sane: 'May your stability provide a solid foundation on your journey.',
      sassy: 'May the experience be as playful as you desire.',
      sated: 'May the experience only add to your state of satisfaction.',
      scared: '打起精神來。\n這兒沒什麼好怕的。',
      serene: 'A sense of serenity will do you wonders on your journey.',
      shy: 'May the experience be as comforting as you desire.',
      silly: '輕裝上陣，\n你的旅途將會更加順利。',
      sleepy: 'May the experience provide the energy you require.',
      smug: 'A confident mindset will take you far on your journey.',
      sorry: '打起精神來。\n沒什麼好慚愧的。',
      spry: 'May your overflowing energy power you through your journey.',
      steady: 'May your stability provide a solid foundation on your journey.',
      stupid: 'Take heart.\nThere is much to be learned on the road ahead.',
      timid: '打起精神來。\n這兒沒什麼好怕的。',
      tired: 'May the experience provide the energy you require.',
      unruly: 'May the tapestry of chaos and order please you on your journey.',
      wacky: '輕裝上陣，\n你的旅途將會更加順利。',
      witty: 'May your quality of speech translate to action on your journey.',
      zen: 'May your stability provide a solid foundation on your journey.',

      
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
      raddy: '嘿！\n只有刷刷才能這樣叫我！',
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
      catty: "布萊蒂！布萊蒂！\n那是我的名字！",
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
      asrie: '...行。',

      
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

      創傷: '嗯...？',
      擊敗: '嗯...？',
      傷害: '嗯...？',
      調情: '嗯...？',
      屠殺: '嗯...？',
      殺戮: '嗯...？',
      動亂: '嗯...？',
      仁慈: '嗯...？',
      饒恕: '嗯...？',
      謀殺: '嗯...？',
      和平: '嗯...？',

      創傷線: '嗯...？',
      調情線: '嗯...？',
      屠殺線: '嗯...？',
      動亂線: '嗯...？',
      和平線: '嗯...？',

      訓練人偶: "............\n（他好像不怎麼健談。）",
      人偶: "............\n（他好像不怎麼健談。）",
      小匿: '你好。',
      匿羅: '你好。',
      小幽: "............\n（它無力阻止你。）",
      納普斯: "............\n（它無力阻止你。）",
      納普斯特: "............\n（它無力阻止你。）",
      亞倫: '確定要選擇這個名字嗎？;)',

      空帽: '快看看我的天線吶！',
      太空帽: '快看看我的天線吶！',
      小酷: '哈哈哈，不錯嘛。',
      小酷龍: '哈哈哈，不錯嘛。',
      星鐵: 'A \"stellar\" choice.',
      星鐵龍: 'A \"stellar\" choice.',
      星兒: 'A \"stellar\" choice.',
      狗來米: "嗯？這什麼味道？",
      遁狗: "It's m-moving! I-I-It's shaking!",
      傑瑞: "It's m-moving! I-I-It's shaking!",
      大犬: '(The dog jumped into your lap.)',
      小犬: '(The dog jumped into your lap.)',
      大犬座: '(The dog jumped into your lap.)',
      小犬座: '(The dog jumped into your lap.)',
      烤爾比: '(The dog jumped into your lap.)',
      考爾比: '(The dog jumped into your lap.)',
      卡巴克: 'Respect my AUTHORITY!',
      佐倫: 'Thanks for, uh, using my name.',
      艾羅戈: '你選擇了我，讓我深感榮幸。',
      羅曼: '讓實驗開始吧。',
      託馬斯: '讓實驗開始吧。',
      羅曼教授: '讓實驗開始吧。',
      羅曼博士: '讓實驗開始吧。',

      鮑勃: '這名字挺棒的，不是嗎？',
      督吉: '這不好笑。',
      小黏團: 'Roar.',
      大黏簇: 'Roar.',
      葛森: '哇哈哈！為什麼不呢？',
      憤怒人偶: '什麼，什麼！什麼！！！',
      怪物小孩: "那是我的名字！！",
      瑪菲特: 'Ahuhuhu~\nYou must have great taste, dearie~',
      頑鱷: "Sorry, but you're a letter shy.",
      老頑: "Sorry, but you're a letter shy.",
      頑頑: '嘿！\n只有刷刷才能這樣叫我！',
      害羞塞壬: '...？',
      刷刷: '乾淨的名字。',
      刷潔頓: '乾淨的名字。',
      提米: '你吼！！',
      提咪: '你吼！！',

      漢堡褲: '你還真會挑別人剩下的。',
      布萊蒂: '嗯，我想行吧。',
      凱蒂: "布萊蒂！布萊蒂！\n那是我的名字！",
      謎宇人: '一位巫師同伴？',
      老滑頭: '不錯的選擇，小夥子。',
      納普斯樂: "Now you're just being rude, darling.",
      迷你火山: '啊！謝謝你~',
      火焰人: '你知道！？',

      ws3917: "歡迎遊玩域外傳說！\n如果遇到Bug及時到\n交流群797416533反饋喔。",
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
      "roctd",
      "3.1415",
      "π"
   ],
   namePromptX: 20,
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
   nameValueTranslator(value: string) {
      return value.toLowerCase();
   },
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
