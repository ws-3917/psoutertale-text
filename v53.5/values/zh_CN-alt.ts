import { content } from '../../../code/systems/assets';
import { CosmosFont, CosmosKeyed, CosmosTyper } from '../../../code/systems/storyteller';

const cjk = /[\u2000-\u221F\u3000-\u30FF\u3400-\u4DBF\u4E00-\u9FFF\uFF00-\uFFFF]/;
const cjk2latin =
   /([\u2000-\u221F\u3000-\u30FF\u3400-\u4DBF\u4E00-\u9FFF\uFF00-\uFFFF])([^/=}\u2000-\u221F\u3000-\u30FF\u3400-\u4DBF\u4E00-\u9FFF\uFF00-\uFFFF]|$)/g;
const latin2cjk =
   /(^|[^/={\u2000-\u221F\u3000-\u30FF\u3400-\u4DBF\u4E00-\u9FFF\uFF00-\uFFFF])([\u2000-\u221F\u3000-\u30FF\u3400-\u4DBF\u4E00-\u9FFF\uFF00-\uFFFF])/g;

// START-TRANSLATE



export const LANGUAGE = "zh_CN-alt";

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
      
      '': '你必须选定一个名字。',
      no: 'No？',

      
      bully: '嗯...？',
      flirt: '嗯...？',
      geno: '嗯...？',
      mercy: '嗯...？',
      murder: '嗯...？',
      paci: '嗯...？',
      maybe: '也许吧？',
      yes: 'Yes？',

      
      afraid: '打起精神来。\n这儿没什么好怕的。',
      amused: '轻装上阵，\n你的旅途将会更加顺利。',
      angry: '打起精神来。\n让不如意的事情随风而去吧。',
      angsty: '打起精神来。\n不管你心情如何，\n讲你自己的故事。',
      antsy: 'May tranquility come upon you as you embark on your journey.',
      bored: '打起精神来。\n只要你想，那就必然能\n书写趣味人生。',
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
      elated: '轻装上阵，\n你的旅途将会更加顺利。',
      empty: 'May your story gain meaning in this cocoon amidst the darkness.',
      flirty: 'May the experience be as playful as you desire.',
      giddy: '轻装上阵，\n你的旅途将会更加顺利。',
      goofy: '轻装上阵，\n你的旅途将会更加顺利。',
      greedy: 'May the experience be as excessive as you desire.',
      guilty: '打起精神来。\n没什么好惭愧的。',
      happy: '轻装上阵，\n你的旅途将会更加顺利。',
      hollow: 'May your story gain meaning in this cocoon amidst the darkness.',
      humble: 'A temperate ego will take you far on your journey.',
      hungry: 'May the experience provide the sustenance you require.',
      insane: 'May balance come upon you as you embark on your journey.',
      irate: '打起精神来。\n让不如意的事情随风而去吧。',
      jaded: 'May your story bring forth the emotion you strive to feel.',
      lazy: 'May your choices be as effortless as they come.',
      lively: '轻装上阵，\n你的旅途将会更加顺利。',
      livid: '打起精神来。\n让不如意的事情随风而去吧。',
      lonely: '打起精神来。\n登上此次旅途，\n友情将伴你而行。',
      lucky: 'May your fortune carry you forward on your journey.',
      mad: '打起精神来。\n让不如意的事情随风而去吧。',
      manic: 'May balance come upon you as you embark on your journey.',
      meek: 'A temperate ego will take you far on your journey.',
      modest: 'A temperate ego will take you far on your journey.',
      nervy: 'May tranquility come upon you as you embark on your journey.',
      moody: '打起精神来。\n不管你心情如何，\n讲你自己的故事。',
      numb: 'May your story bring forth the emotion you strive to feel.',
      proud: 'A confident mindset will take you far on your journey.',
      rowdy: 'May the tapestry of chaos and order please you on your journey.',
      sad: '打起精神来。\n只要你想，那就必然能\n书写励志人生。',
      sane: 'May your stability provide a solid foundation on your journey.',
      sassy: 'May the experience be as playful as you desire.',
      sated: 'May the experience only add to your state of satisfaction.',
      scared: '打起精神来。\n这儿没什么好怕的。',
      serene: 'A sense of serenity will do you wonders on your journey.',
      shy: 'May the experience be as comforting as you desire.',
      silly: '轻装上阵，\n你的旅途将会更加顺利。',
      sleepy: 'May the experience provide the energy you require.',
      smug: 'A confident mindset will take you far on your journey.',
      sorry: '打起精神来。\n没什么好惭愧的。',
      spry: 'May your overflowing energy power you through your journey.',
      steady: 'May your stability provide a solid foundation on your journey.',
      stupid: 'Take heart.\nThere is much to be learned on the road ahead.',
      timid: '打起精神来。\n这儿没什么好怕的。',
      tired: 'May the experience provide the energy you require.',
      unruly: 'May the tapestry of chaos and order please you on your journey.',
      wacky: '轻装上阵，\n你的旅途将会更加顺利。',
      witty: 'May your quality of speech translate to action on your journey.',
      zen: 'May your stability provide a solid foundation on your journey.',

      
      erogot: '你选择了我，让我深感荣幸。',
      roman: '让实验开始吧。',
      thomas: '让实验开始吧。',

      
      chara: '真正的名字。',
      frisk: '这名字不对。',

      
      blooky: "............\n（它无力阻止你。）",
      dummy: "............\n（他好像不怎么健谈。）",
      lurky: '你好。',
      mushy: '上马！',
      napsta: "............\n（它无力阻止你。）",
      torie: '嗯... 我想这个名字可以...',
      toriel: '我觉得，\n你应该想个自己的名字。\n我的孩子。',
      twink: '真的吗...',
      twinkl: '想得美，蠢货。',
      twinky: '想得美，蠢货。',
      walker: '你是指“眼行家”？',

      
      astro: '快看看我的天线呐！',
      cdrake: '哈哈哈，不错嘛。',
      chilly: '哈哈哈，不错嘛。',
      dogamy: "嗯？这什么味道？",
      doggo: "It's m-moving! I-I-It's shaking!",
      jerry: '杰瑞。',
      major: '(The dog jumped into your lap.)',
      minor: '(Pant pant)',
      papyrs: "我准了！！！",
      papyru: "我准了！！！",
      san: '好。',
      sans: '没门。',
      sdrake: 'A \"stellar\" choice.',
      serf: '快看看我的天线呐！',
      starry: 'A \"stellar\" choice.',

      
      bob: '这名字挺棒的，不是吗？',
      doge: '这不好笑。',
      gelata: 'Roar.',
      gerson: '哇哈哈！为什么不呢？',
      mdummy: '什么，什么！什么！！！',
      mkid: "那是我的名字！！",
      monkid: "那是我的名字！！",
      muffet: 'Ahuhuhu~\nYou must have great taste, dearie~',
      raddy: '嘿！\n只有刷刷才能这样叫我！',
      radtie: "Sorry, but you're a letter shy.",
      radtil: "Sorry, but you're a letter shy.",
      shyren: '...？',
      skrub: '干净的名字。',
      skrubb: '干净的名字。',
      tem: '你吼！！',
      temmie: '你吼！！',
      undyn: '嘎啊，行行行。',
      undyne: '找个你自己的名字去！',

      
      alphy: '呃... 行吧？',
      alphys: "别-别这么做。",
      bpants: '你还真会挑别人剩下的。',
      bratty: '嗯，我想行吧。',
      burgie: 'You like my name, little buddy?',
      catty: "布莱蒂！布莱蒂！\n那是我的名字！",
      cozmo: '一位巫师同伴？',
      glyde: '不错的选择，小伙子。',
      hapsta: "Now you're just being rude, darling.",
      mett: '哦！！！\n你在推广我的品牌吗？',
      metta: '哦！！！\n你在推广我的品牌吗？',
      mtt: '哦！！！\n你在推广我的品牌吗？',

      
      aaron: '确定要选择这个名字吗？;)',
      grillb: 'Hot, but not hot enough.',
      grilly: 'Hot, but not hot enough.',
      gyft: "没必要这样...",
      heats: '你知道！？',
      kabakk: 'Respect my AUTHORITY!',
      vulkin: '啊！谢谢你~',
      zorren: 'Thanks for, uh, using my name.',

      
      asgor: '可以？',
      asgore: '不可以。',
      asriel: '...',
      asrie: '... fine.',

      
      char: "...真正的名字？",
      查拉: "真正的名字。",
      猹: "...真正的名字？",
      卡拉: "...真正的名字？",
      恰拉: "...真正的名字？",
      fris: "这名字... 不对吧？",
      frask: "这名字... 不对吧？",
      弗里斯克: "这名字不对。",
      福: "这名字... 不对吧？",
      福瑞斯克: "这名字... 不对吧？",

      羊妈: "嗯... 我想这个名字可以...",
      托丽: "嗯... 我想这个名字可以...",
      托丽尔: "我觉得，\n你应该想个自己的名字。\n我的孩子。",
      闪闪: "想得美，蠢货。",

      papyrus: "这没啥不合适的！！",
      帕: "我准了！！！",
      帕帕: "我准了！！！",
      帕派肉丝: "我准了！！！",
      帕帕肉丝: "我准了！！！",
      帕派瑞: "我准了！！！",
      帕派瑞斯: "这没啥不合适的！！",
      阿派瑞斯: "我准了！！！",
      杉: "好。",
      衫: "好。",
      杉哥: "好。",
      衫哥: "好。",
      杉斯: "没门。",
      衫斯: "没门。",
      snas: "啥？",
      鳝丝: "啥？",
      衫衫: "啥？",
      杉杉: "啥？",

      鱼姐: "嘎啊，行行行。",
      安黛: "嘎啊，行行行。",
      安黛因: "找个你自己的名字去！",

      宅龙: "呃... 行吧？",
      艾菲: "呃... 行吧？",
      艾菲斯: "别-别这么做。",
      meta: "哦！！！\n你在推广我的品牌吗？",
      镁塔: "哦！！！\n你在推广我的品牌吗？",
      镁塔顿: "哦！！！\n你在推广我的品牌吗？",

      羊爸: "可以？",
      艾斯戈: "可以？",
      艾斯戈尔: "不可以。",
      艾斯利尔: "...",
      小羊: "...",
      艾斯利: "...",

      创伤: '嗯...？',
      击败: '嗯...？',
      伤害: '嗯...？',
      调情: '嗯...？',
      屠杀: '嗯...？',
      杀戮: '嗯...？',
      动乱: '嗯...？',
      仁慈: '嗯...？',
      饶恕: '嗯...？',
      谋杀: '嗯...？',
      和平: '嗯...？',

      创伤线: '嗯...？',
      调情线: '嗯...？',
      屠杀线: '嗯...？',
      动乱线: '嗯...？',
      和平线: '嗯...？',

      训练人偶: "............\n（他好像不怎么健谈。）",
      人偶: "............\n（他好像不怎么健谈。）",
      小匿: '你好。',
      匿罗: '你好。',
      小幽: "............\n（它无力阻止你。）",
      纳普斯: "............\n（它无力阻止你。）",
      纳普斯特: "............\n（它无力阻止你。）",
      亚伦: '确定要选择这个名字吗？;)',

      空帽: '快看看我的天线呐！',
      太空帽: '快看看我的天线呐！',
      小酷: '哈哈哈，不错嘛。',
      小酷龙: '哈哈哈，不错嘛。',
      星铁: 'A \"stellar\" choice.',
      星铁龙: 'A \"stellar\" choice.',
      星儿: 'A \"stellar\" choice.',
      狗来米: "嗯？这什么味道？",
      遁狗: "It's m-moving! I-I-It's shaking!",
      杰瑞: "It's m-moving! I-I-It's shaking!",
      大犬: '(The dog jumped into your lap.)',
      小犬: '(The dog jumped into your lap.)',
      大犬座: '(The dog jumped into your lap.)',
      小犬座: '(The dog jumped into your lap.)',
      烤尔比: '(The dog jumped into your lap.)',
      考尔比: '(The dog jumped into your lap.)',
      卡巴克: 'Respect my AUTHORITY!',
      佐伦: 'Thanks for, uh, using my name.',
      艾罗戈: '你选择了我，让我深感荣幸。',
      罗曼: '让实验开始吧。',
      托马斯: '让实验开始吧。',
      罗曼教授: '让实验开始吧。',
      罗曼博士: '让实验开始吧。',

      鲍勃: '这名字挺棒的，不是吗？',
      督吉: '这不好笑。',
      小黏团: 'Roar.',
      大黏簇: 'Roar.',
      葛森: '哇哈哈！为什么不呢？',
      愤怒人偶: '什么，什么！什么！！！',
      怪物小孩: "那是我的名字！！",
      玛菲特: 'Ahuhuhu~\nYou must have great taste, dearie~',
      顽鳄: "Sorry, but you're a letter shy.",
      老顽: "Sorry, but you're a letter shy.",
      顽顽: '嘿！\n只有刷刷才能这样叫我！',
      害羞塞壬: '...？',
      刷刷: '干净的名字。',
      刷洁顿: '干净的名字。',
      提米: '你吼！！',
      提咪: '你吼！！',

      汉堡裤: '你还真会挑别人剩下的。',
      布莱蒂: '嗯，我想行吧。',
      凯蒂: "布莱蒂！布莱蒂！\n那是我的名字！",
      谜宇人: '一位巫师同伴？',
      老滑头: '不错的选择，小伙子。',
      纳普斯乐: "Now you're just being rude, darling.",
      迷你火山: '啊！谢谢你~',
      火焰人: '你知道！？',

      ws3917: "欢迎游玩域外传说！\n如果遇到Bug及时到\n交流群797416533反馈哦。",
      roctd: "§random=1.1/1.1§3.1415⑨§random=0/0§ ...后面是啥来着？\n我数学水平堪比§fill=#0080ff§§random=1.1/1.1§琪露诺§random=0/0§§fill=#fff§，\n等我想完再放你进去...",
      3.1415: "§random=1.1/1.1§3.1415⑨§random=0/0§ ...后面是啥来着？\n我数学水平堪比§fill=#0080ff§§random=1.1/1.1§琪露诺§random=0/0§§fill=#fff§，\n等我想完再放你进去...",
      π: "§random=1.1/1.1§3.1415⑨§random=0/0§ ...后面是啥来着？\n我数学水平堪比§fill=#0080ff§§random=1.1/1.1§琪露诺§random=0/0§§fill=#fff§，\n等我想完再放你进去...",
      雪理奈: "§fill=#ffd1d9§你取了我的名字，\n这意味着你认识我。\n我可以给你一些帮助。§fill=#fff§",
      mdr: '§fill=#888§直入主题吧。§fill=#fff§',
      月亮菌: "§random=1.1/1.1§...我不觉得这个名字好欸bro§random=0/0§",
      屑moons: "§random=1.1/1.1§...我不觉得这个名字好欸bro§random=0/0§",
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
      鳝丝: [content.fComicSans, 16],
      衫衫: [content.fComicSans, 16],
      杉杉: [content.fComicSans, 16],
      papyrs: [content.fPapyrus, 16],
      papyru: [content.fPapyrus, 16],
      papyrus: [content.fPapyrus, 16],
      帕: [content.fPapyrus, 16],
      帕帕: [content.fPapyrus, 16],
      帕派肉丝: [content.fPapyrus, 16],
      帕帕肉丝: [content.fPapyrus, 16],
      帕派瑞: [content.fPapyrus, 16],
      帕派瑞斯: [content.fPapyrus, 16],
      阿派瑞斯: [content.fPapyrus, 16]
   } as Partial<CosmosKeyed<[CosmosFont, number]>>,
   nameChoiceRestrictions: [
      '',
      'alphys',
      '艾菲斯',
      'asgore',
      '艾斯戈尔',
      'asriel',
      '艾斯利尔',
      'frisk',
      '弗里斯克',
      'sans',
      '杉斯',
      '衫斯',
      'toriel',
      '托丽尔',
      'twinkl',
      'twinky',
      'twnkly',
      '闪闪',
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
