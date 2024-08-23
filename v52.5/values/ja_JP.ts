import { content } from '../../../code/systems/assets';
import { CosmosFont, CosmosKeyed, CosmosTyper } from '../../../code/systems/storyteller';

const cjk = /[\u2000-\u221F\u3000-\u30FF\u4E00-\u9FFF\uFF00-\uFFFF]/;
const cjk2latin =
   /([\u2000-\u221F\u3000-\u30FF\u4E00-\u9FFF\uFF00-\uFFFF])([^/=}\u2000-\u221F\u3000-\u30FF\u4E00-\u9FFF\uFF00-\uFFFF]|$)/g;
const latin2cjk =
   /(^|[^/={\u2000-\u221F\u3000-\u30FF\u4E00-\u9FFF\uFF00-\uFFFF])([\u2000-\u221F\u3000-\u30FF\u4E00-\u9FFF\uFF00-\uFFFF])/g;

// START-TRANSLATE



export const LANGUAGE = "ja_JP";

export default {
   cellInventoryX: 9,
   cellBoxX: -2,
   cellFinishX: 24,
   footerX: 0,
   disclaimer: {
      title: "- DISCLAIMER -",
      content: "1. PS!OUTERTALE is made by Spacey_432.\nOur team is working on the translation.\n2. If you find any untranslated text or dialogue,\nplease kindly let us know instead of\nassuming we are lazy.\n3. Please avoid asking questions already answered \nin the FAQ.  (Examples: \"How do I change the language?\",\n\"How do I defeat Toriel?\", or \"How do I run the game?\").\nOur translators are focused on providing \nthe best translation and may not have time \nto address these inquiries."
   },
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
      
      '': 'なまえを　つけてください。',
      no: 'No?',

      
      bully: 'Hm...?',
      flirt: 'Hm...?',
      geno: 'Hm...?',
      mercy: 'Hm...?',
      murder: 'Hm...?',
      paci: 'Hm...?',
      maybe: 'Maybe?',
      yes: 'Yes?',

      
      afraid: 'ゆうきを　だして。\nなにも　おそれることは　ないよ。',
      amused: 'ようきな　せいしんは　たびで　よくやくだつでしょう。',
      angry: 'ゆうきを　だして。\nざせつはもう　すぎさったよ。',
      angsty: 'ゆうきを　だして。\nなにを　かんじても　ものがたりは　あなたのものですよ。',
      antsy: 'たびが　じゅんちょうで　ありますように。',
      bored: 'ゆうきを　だして。\nかきたければ　おもしろい　じんせいを　かくことができるよ。',
      brainy: 'ことばのしつが　たびのなかで　こうどうに　かわりますように。',
      brave: 'ゆうきあるこころは　たびで　よくやくだつでしょう。',
      brazen: 'ゆうきあるこころは　たびで　よくやくだつでしょう。',
      calm: 'しずかなかんじは　たびに　きせきを　おこすでしょう。',
      clever: 'ちえが　たびのちょうせんに　うちかちますように。',
      cocky: 'じしんをも　つきもちが　さらに　ぜんしんさせるでしょう。',
      crafty: 'ちえが　たびのちょうせんに　うちかちますように。',
      crazy: 'たびが　こうへいで　ありますように。',
      daring: 'ゆうきあるこころは　たびで　よくやくだつでしょう。',
      dizzy: 'たびが　こうへいで　ありますように。',
      dumb: 'ゆうきを　だして。\nこれからのみちで　まなぶべきことは　たくさんあります。',
      edgy: 'こんらんと　ちつじょのきぬが　たびを　じゅうじつさせますように。',
      elated: 'ようきな　せいしんは　たびで　よくやくだつでしょう。',
      empty: 'くらやみの　まゆのなかで　ものがたりが　いみを　もちますように。',
      flirty: 'このけいけんが　のぞむように　おもしろく　なりますように。',
      giddy: 'ようきな　せいしんは　たびで　よくやくだつでしょう。',
      goofy: 'ようきな　せいしんは　たびで　よくやくだつでしょう。',
      greedy: 'このけいけんが　のぞむように　じゅうじつしますように。',
      guilty: 'ゆうきを　だして。\nなにも　はじることは　ないよ。',
      happy: 'ようきな　せいしんは　たびで　よくやくだつでしょう。',
      hollow: 'くらやみの　まゆのなかで　ものがたりが　いみを　もちますように。',
      humble: 'てきどなワガママが　さらに　とおざけるでしょう。',
      hungry: 'このけいけんが　えいように　なりますように。',
      insane: 'たびが　こうへいで　ありますように。',
      irate: 'ゆうきを　だして。\nざせつはもう　すぎさったよ。',
      jaded: 'ものがたりが　けんめいに　かんじる　かんじょうを　あたえますように。',
      lazy: 'せんたくが　らくに　なりますように。',
      lively: 'ようきな　せいしんは　たびで　よくやくだつでしょう。',
      livid: 'ゆうきを　だして。\nざせつはもう　すぎさったよ。',
      lonely: 'ゆうきを　だして。\nたくさんの　ともたちが　できますよ。',
      lucky: 'こううんが　たびを　ぜんしんさせます　ように。',
      mad: 'ゆうきを　だして。\nざせつはもう　すぎさったよ。',
      manic: 'たびが　こうへいで　ありますように。',
      meek: 'てきどなワガママが　さらに　とおざけるでしょう。',
      modest: 'てきどなワガママが　さらに　とおざけるでしょう。',
      nervy: 'たびが　じゅんちょうで　ありますように。',
      moody: 'ゆうきを　だして。\nなにを　かんじても　ものがたりは　あなたのものですよ。',
      numb: 'ものがたりが　けんめいに　かんじる　かんじょうを　あたえますように。',
      proud: 'じしんをも　つきもちが　さらに　ぜんしんさせるでしょう。',
      rowdy: 'こんらんと　ちつじょのきぬが　たびを　よろこばせますように。',
      sad: 'ゆうきを　だして。\nかきたければ　わくわくする　じんせいを　かくことができるよ。',
      sane: 'りせいが　たびの　きょうこな　きばんと　なりますように。',
      sassy: 'このけいけんが　のぞむように　おもしろく　なりますように。',
      sated: 'このけいけんが　まんぞくかんを　ますだけで　ありますように。',
      scared: 'ゆうきを　だして。\nなにも　おそれることは　ないよ。',
      serene: 'しずかなかんじは　たびに　きせきを　おこすでしょう。',
      shy: 'このけいけんが　のぞむように　なぐさめに　なりますように。',
      silly: 'ようきな　せいしんは　たびで　よくやくだつでしょう。',
      sleepy: 'このけいけんが　ひつような　エネルギーに　なりますように。',
      smug: 'じしんをも　つきもちが　さらに　ぜんしんさせるでしょう。',
      sorry: 'ゆうきを　だして。\nなにも　はじることは　ないよ。',
      spry: 'あふれるエネルギーが　たびのちからに　なりますように。',
      steady: 'りせいが　たびの　きょうこな　きばんと　なりますように。',
      stupid: 'ゆうきを　だして。\nこれからのみちで　まなぶべきことは　たくさんあります。',
      timid: 'ゆうきを　だして。\nなにも　おそれることは　ないよ。',
      tired: 'このけいけんが　ひつような　エネルギーに　なりますように。',
      unruly: 'こんらんと　ちつじょのきぬが　たびを　よろこばせますように。',
      wacky: 'ようきな　せいしんは　たびで　よくやくだつでしょう。',
      witty: 'ことばのしつが　たびのなかで　こうどうに　かわりますように。',
      zen: 'りせいが　たびの　きょうこな　きばんと　なりますように。',

      
      erogot: 'こうえいの　いたり。',
      roman: 'じっけんを　はじめよう。',
      thomas: 'じっけんを　はじめよう。',

      
      chara: 'ほんとうのなまえ。',
      frisk: 'ちょっとちがう　なまえ。',

      
      blooky: "…………\n(とめるちからは　ない)",
      dummy: "…………\n(かいわは　はずまなかった)",
      lurky: 'Hello.',
      mushy: 'Saddle up!',
      napsta: "…………\n(とめるちからは　ない)",
      torie: 'Well... I suppose that works...',
      toriel: 'ちゃんと　なまえを\nかんがえるのよ。',
      twink: 'Really...',
      twinkl: 'Nice try, idiot.',
      twinky: 'Nice try, idiot.',
      walker: 'Don\'t you mean \"Eyewalker?\"',

      
      astro: 'Check out my antenna!',
      cdrake: 'Guh huh huh, nice one.',
      chilly: 'Guh huh huh, nice one.',
      dogamy: "Huh? What's that smell?",
      doggo: "It's m-moving! I-I-It's shaking!",
      jerry: 'ジェリー。',
      major: '(The dog jumped into your lap.)',
      minor: '(へっ…　へっ…)',
      papyrs: "オレさまは\nべつに\nいいよッ！",
      papyru: "オレさまは\nべつに\nいいよッ！",
      san: 'ほーい。',
      sans: 'ダメだぜ。',
      sdrake: 'A \"stellar\" choice.',
      serf: 'Check out my antenna!',
      starry: 'A \"stellar\" choice.',

      
      bob: 'A pleasing nomenclature, no?',
      doge: 'I am not amused.',
      gelata: 'Roar.',
      gerson: 'ワッハッハッ！\nそりゃあいい！',
      mdummy: 'あ？　なんだよ！　ああんッ！！',
      mkid: "That's my name!!",
      monkid: "That's my name!!",
      muffet: 'Ahuhuhu~\nYou must have great taste, dearie~',
      raddy: 'Hey!\nOnly Skrubby gets to call me that!',
      radtie: "Sorry, but you're a letter shy.",
      radtil: "Sorry, but you're a letter shy.",
      shyren: '…？',
      skrub: 'せいけつな　なまえ。',
      skrubb: 'せいけつな　なまえ。',
      tem: 'ホィ！',
      temmie: 'ホィ！',
      undyn: 'Ngah, fine.',
      undyne: 'ひとの　なまえを\nパクるな！',

      
      alphy: 'う…　うん\nいいよ…',
      alphys: "ダ…　ダメだよっ！",
      bpants: '…なまえの\nネタぎれ？',
      bratty: 'べつに　いいけどぉ～？',
      burgie: 'You like my name, little buddy?',
      catty: "アリゲッティ！　みて！\nアタシのなまえ\nだしぃ～！",
      cozmo: 'A fellow wizard?',
      glyde: 'Slick choice, homeslice.',
      hapsta: "Now you're just being rude, darling.",
      mett: 'おお！！キミ！！\nせんでん　してくれるのかい？',
      metta: 'おお！！キミ！！\nせんでん　してくれるのかい？',
      mtt: 'おお！！キミ！！\nせんでん　してくれるのかい？',

      
      aaron: 'このなまえで\nよろしいですか？(^_–)☆',
      grillb: 'Hot, but not hot enough.',
      grilly: 'Hot, but not hot enough.',
      gyft: "You don't have to do that...",
      heats: 'わかるんですか！？',
      kabakk: 'Respect my AUTHORITY!',
      vulkin: 'Ahh! Thank you~',
      zorren: 'Thanks for, uh, using my name.',

      
      asgor: 'そのなまえは　けっこう？',
      asgore: 'そのなまえは　ダメだ。',
      asriel: '…',
      asrie: '…',
   },



   

// END-TRANSLATE
   nameChoiceFonts: {
      san: [content.fComicSans, 16],
      sans: [content.fComicSans, 16],
      snas: [content.fComicSans, 16],
      papyrs: [content.fPapyrus, 16],
      papyru: [content.fPapyrus, 16],
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
      const indent = raw[0] === '＊';
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
                        const words = ender.split(/[　 ]/);
                        output = `${lines.slice(0, -1).join('\n')}${lines.length > 1 ? '\n' : ''}${words
                           .slice(0, -1)
                           .join('　')}\n${indent ? '　' : ''}${words[words.length - 1]}`;
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
