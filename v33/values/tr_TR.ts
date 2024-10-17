import { content } from '../../../code/systems/assets';
import { CosmosFont, CosmosKeyed, CosmosTyper } from '../../../code/systems/storyteller';

const cjk = /[\u2000-\u221F\u3000-\u30FF\u4E00-\u9FFF\uFF00-\uFFFF]/;
const cjk2latin =
   /([\u2000-\u221F\u3000-\u30FF\u4E00-\u9FFF\uFF00-\uFFFF])([^/=}\u2000-\u221F\u3000-\u30FF\u4E00-\u9FFF\uFF00-\uFFFF]|$)/g;
const latin2cjk =
   /(^|[^/={\u2000-\u221F\u3000-\u30FF\u4E00-\u9FFF\uFF00-\uFFFF])([\u2000-\u221F\u3000-\u30FF\u4E00-\u9FFF\uFF00-\uFFFF])/g;

// START-TRANSLATE



export const LANGUAGE = "tr_TR";

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
      
      "": "You must choose a name.",
      no: "No?",

      
      bully: "Hm...?",
      flirt: "Hm...?",
      geno: "Hm...?",
      mercy: "Hm...?",
      murder: "Hm...?",
      paci: "Hm...?",
      maybe: "Maybe?",
      yes: "Yes?",

      
      afraid: "Take heart.\nThere is nothing to be afraid of here.",
      amused: "A light-hearted spirit will serve you well on your journey.",
      angry: "Take heart.\nYour frustrations are behind you now.",
      angsty: "Take heart.\nThe story is yours, no matter what you feel.",
      antsy: "May tranquility come upon you as you embark on your journey.",
      bored: "Take heart.\nYour story is as interesting as you make it.",
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
      elated: "A light-hearted spirit will serve you well on your journey.",
      empty: "May your story gain meaning in this cocoon amidst the darkness.",
      flirty: "May the experience be as playful as you desire.",
      giddy: "A light-hearted spirit will serve you well on your journey.",
      goofy: "A light-hearted spirit will serve you well on your journey.",
      greedy: "May the experience be as excessive as you desire.",
      guilty: "Take heart.\nYou have nothing to feel ashamed of now.",
      happy: "A light-hearted spirit will serve you well on your journey.",
      hollow: "May your story gain meaning in this cocoon amidst the darkness.",
      humble: "A temperate ego will take you far on your journey.",
      hungry: "May the experience provide the sustenance you require.",
      insane: "May balance come upon you as you embark on your journey.",
      irate: "Take heart.\nYour frustrations are behind you now.",
      jaded: "May your story bring forth the emotion you strive to feel.",
      lazy: "May your choices be as effortless as they come.",
      lively: "A light-hearted spirit will serve you well on your journey.",
      livid: "Take heart.\nYour frustrations are behind you now.",
      lonely: "Take heart.\nThere is much companionship to be had here.",
      lucky: "May your fortune carry you forward on your journey.",
      mad: "Take heart.\nYour frustrations are behind you now.",
      manic: "May balance come upon you as you embark on your journey.",
      meek: "A temperate ego will take you far on your journey.",
      modest: "A temperate ego will take you far on your journey.",
      nervy: "May tranquility come upon you as you embark on your journey.",
      moody: "Take heart.\nThe story is yours, no matter what you feel.",
      numb: "May your story bring forth the emotion you strive to feel.",
      proud: "A confident mindset will take you far on your journey.",
      rowdy: "May the tapestry of chaos and order please you on your journey.",
      sad: "Take heart.\nYour story is as uplifting as you make it.",
      sane: "May your stability provide a solid foundation on your journey.",
      sassy: "May the experience be as playful as you desire.",
      sated: "May the experience only add to your state of satisfaction.",
      scared: "Take heart.\nThere is nothing to be afraid of here.",
      serene: "A sense of serenity will do you wonders on your journey.",
      shy: "May the experience be as comforting as you desire.",
      silly: "A light-hearted spirit will serve you well on your journey.",
      sleepy: "May the experience provide the energy you require.",
      smug: "A confident mindset will take you far on your journey.",
      sorry: "Take heart.\nYou have nothing to feel ashamed of now.",
      spry: "May your overflowing energy power you through your journey.",
      steady: "May your stability provide a solid foundation on your journey.",
      stupid: "Take heart.\nThere is much to be learned on the road ahead.",
      timid: "Take heart.\nThere is nothing to be afraid of here.",
      tired: "May the experience provide the energy you require.",
      unruly: "May the tapestry of chaos and order please you on your journey.",
      wacky: "A light-hearted spirit will serve you well on your journey.",
      witty: "May your quality of speech translate to action on your journey.",
      zen: "May your stability provide a solid foundation on your journey.",

      
      erogot: "I am honored by your choice.",
      roman: "Let the experiment begin.",
      thomas: "Let the experiment begin.",

      
      chara: "The true name.",
      frisk: "This name is incorrect.",

      
      blooky: "............\n(They're powerless to stop you.)",
      dummy: "............\n(It's not much for conversation.)",
      lurky: "Hello.",
      mushy: "Saddle up!",
      napsta: "............\n(They're powerless to stop you.)",
      torie: "Well... I suppose that works...",
      toriel: "I think you should think of your own name, my child.",
      twink: "Really...",
      twinkl: "Nice try, idiot.",
      twinky: "Nice try, idiot.",
      walker: "Don't you mean \"Eyewalker?\"",

      
      astro: "Check out my antenna!",
      cdrake: "Guh huh huh, nice one.",
      chilly: "Guh huh huh, nice one.",
      dogamy: "Huh? What's that smell?",
      doggo: "It's m-moving! I-I-It's shaking!",
      jerry: "Jerry.",
      major: "(The dog jumped into your lap.)",
      minor: "(Pant pant)",
      papyrs: "I'LL ALLOW IT!!!!",
      papyru: "I'LL ALLOW IT!!!!",
      san: "ok.",
      sans: "nope.",
      sdrake: "A \"stellar\" choice.",
      serf: "Check out my antenna!",
      starry: "A \"stellar\" choice.",

      
      bob: "A pleasing nomenclature, no?",
      doge: "I am not amused.",
      gelata: "Roar.",
      gerson: "Wah ha ha! Why not?",
      mdummy: "What. What! WHAT!",
      mkid: "That's my name!!",
      monkid: "That's my name!!",
      muffet: "Ahuhuhu~\nYou must have great taste, dearie~",
      raddy: "Hey!\nOnly Skrubby gets to call me that!",
      radtie: "Sorry, but you're a letter shy.",
      radtil: "Sorry, but you're a letter shy.",
      shyren: "...?",
      skrub: "Clean name.",
      skrubb: "Clean name.",
      tem: "hOI!",
      temmie: "hOI!",
      undyn: "Ngah, fine.",
      undyne: "Get your OWN name!",

      
      alphy: "Uh.... OK?",
      alphys: "D-don't do that.",
      bpants: "You are really scraping the bottom of the barrel.",
      bratty: "Like, OK I guess.",
      burgie: "You like my name, little buddy?",
      catty: "Bratty! Bratty! That's MY name!",
      cozmo: "A fellow wizard?",
      glyde: "Slick choice, homeslice.",
      hapsta: "Now you're just being rude, darling.",
      mett: "OOOOH!!! ARE YOU PROMOTING MY BRAND?",
      metta: "OOOOH!!! ARE YOU PROMOTING MY BRAND?",
      mtt: "OOOOH!!! ARE YOU PROMOTING MY BRAND?",

      
      aaron: "Is this name correct? ;)",
      grillb: "Hot, but not hot enough.",
      grilly: "Hot, but not hot enough.",
      gyft: "You don't have to do that...",
      heats: "You KNEW!?",
      kabakk: "Respect my AUTHORITY!",
      vulkin: "Ahh! Thank you~",
      zorren: "Thanks for, uh, using my name.",

      
      asgor: "You can?",
      asgore: "You cannot.",
      asriel: "...",

      查拉: "The true name.",
      猹: "...The true name?",
      卡拉: "...The true name?",
      恰拉: "...The true name?",
      弗里斯克: "This name is incorrect.",
      福: "This name is... incorrect?",
      福瑞斯克: "This name is... incorrect?",

      羊妈: "Well... I suppose that works...",
      托丽: "Well... I suppose that works...",
      托丽尔: "I think you should think of your own name, my child.",
      闪闪: "Nice try, idiot.",

      papyrus: "I DON'T THINK IT'S INAPPROPRIATE!!",
      帕: "I'LL ALLOW IT!!!!",
      帕帕: "I'LL ALLOW IT!!!!",
      帕派肉丝: "I'LL ALLOW IT!!!!",
      帕帕肉丝: "I'LL ALLOW IT!!!!",
      帕派瑞: "I'LL ALLOW IT!!!!",
      帕派瑞斯: "I DON'T THINK IT'S INAPPROPRIATE!!",
      阿派瑞斯: "I'LL ALLOW IT!!!!",
      杉: "ok.",
      衫: "ok.",
      杉哥: "ok.",
      衫哥: "ok.",
      杉斯: "nope.",
      衫斯: "nope.",
      snas: "what?",
      鳝丝: "what?",
      衫衫: "what?",
      杉杉: "what?",

      鱼姐: "Ngah, fine.",
      安戴: "Ngah, fine.",
      安戴因: "Get your OWN name!",

      宅龙: "Uh.... OK?",
      艾菲: "Uh.... OK?",
      艾菲斯: "D-don't do that.",
      meta: "OOOOH!!! ARE YOU PROMOTING MY BRAND?",
      镁塔: "OOOOH!!! ARE YOU PROMOTING MY BRAND?",
      镁塔顿: "OOOOH!!! ARE YOU PROMOTING MY BRAND?",
      慢吞吞: "OOOOH!!! ARE YOU PROMOTING MY BRAND?",
      马婷婷: "OOOOH!!! ARE YOU PROMOTING MY BRAND?",
      慢腾腾: "OOOOH!!! ARE YOU PROMOTING MY BRAND?",
      马蹄铁: "OOOOH!!! ARE YOU PROMOTING MY BRAND?",
      马桶套: "OOOOH!!! ARE YOU PROMOTING MY BRAND?",

      羊爸: "You can?",
      艾斯戈: "You can?",
      艾斯戈尓: "You cannot",
      艾斯利尓: "...",
      小羊: "...",
      艾斯利: "...",

      游乐比: "嗯嗯↑嗯嗯嗯嗯嗯↑嗯嗯↑\n嗯嗯嗯嗯嗯嗯嗯↓\n嗯嗯嗯→嗯嗯",
      ws3917: "6。"
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
      '艾斯戈尓',
      'asriel',
      '艾斯利尓',
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
      '安戴因'
   ],
   namePromptX: 16,
   nameValueX: -6,
   nameValueY: 0,
   nameLetterMap: [],
   nameLetterPosition: () => { },
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
         for (const char of text) {
            output += char;
            switch (char) {
               case '{':
                  braces = true;
                  break;
               case '}':
                  braces = false;
                  break;
               default:
                  if (!braces) {
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
