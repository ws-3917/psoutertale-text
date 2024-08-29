import { content } from '../../../code/systems/assets';
import { CosmosFont, CosmosKeyed, CosmosMath, CosmosTyper } from '../../../code/systems/storyteller';

// START-TRANSLATE

export const LANGUAGE = 'cs_CZ';

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
      
      '': 'Musíš si vybrat jména.',
      no: 'Ne?',

      
      bully: 'Hm...?',
      flirt: 'Hm...?',
      geno: 'Hm...?',
      mercy: 'Hm...?',
      murder: 'Hm...?',
      paci: 'Hm...?',
      maybe: 'Možná?',
      yes: 'Ano?',

      
      afraid: 'Vzchopte se.\nTady se není čeho bát.',
      amused: 'Na vaší cestě vám dobře poslouží lehkovážný duch.',
      angry: 'Vzchopte se.\nVaše frustrace jsou nyní za vámi.',
      angsty: 'Vzchopte se.\nPříběh je váš, bez ohledu na to, co cítíte.',
      antsy: 'Kéž na vás přijde klid, když se vydáte na cestu.',
      bored: 'Vzchopte se.\nTvůj příběh je stejně zajímavý, jak si ho uděláš.',
      brainy: 'Ať se vaše kvalita řeči promítne do činů na vaší cestě.',
      brave: 'Odvážné srdce vám na vaší cestě dobře poslouží.',
      brazen: 'Odvážné srdce vám na vaší cestě dobře poslouží.',
      calm: 'Pocit klidu s vámi na vaší cestě udělá zázraky.',
      clever: 'Ať vaše vynalézavost překoná výzvy na vaší cestě.',
      cocky: 'Sebevědomé myšlení vás dovede daleko na vaší cestě.',
      crafty: 'Ať vaše vynalézavost překoná výzvy na vaší cestě.',
      crazy: 'Kéž na vás přijde rovnováha, když se vydáte na cestu.',
      daring: 'Odvážné srdce vám na vaší cestě dobře poslouží.',
      dizzy: 'Kéž na vás přijde rovnováha, když se vydáte na cestu.',
      dumb: 'Vzchopte se.\nNa cestě před námi se lze mnohému naučit.',
      edgy: 'Kéž vás tapisérie chaosu a řádu uspokojí na vaší cestě.',
      elated: 'Na vaší cestě vám dobře poslouží lehkovážný duch.',
      empty: 'Ať váš příběh získá smysl v tomto zámotku uprostřed temnoty.',
      flirty: 'Ať je zážitek tak hravý, jak si přejete.',
      giddy: 'Na vaší cestě vám dobře poslouží lehkovážný duch.',
      goofy: 'Na vaší cestě vám dobře poslouží lehkovážný duch.',
      greedy: 'Kéž je zážitek tak přehnaný, jak si přejete.',
      guilty: 'Vzchopte se.\nTeď se nemáš za co stydět.',
      happy: 'Na vaší cestě vám dobře poslouží lehkovážný duch.',
      hollow: 'Ať váš příběh získá smysl v tomto zámotku uprostřed temnoty.',
      humble: 'Umírněné ego vás na vaší cestě dovede daleko.',
      hungry: 'Kéž vám zkušenost poskytne obživu, kterou požadujete.',
      insane: 'Kéž na vás přijde rovnováha, když se vydáte na cestu.',
      irate: 'Vzchopte se.\nVaše frustrace jsou nyní za vámi.',
      jaded: 'Kéž váš příběh vyvolá emoce, které se snažíte cítit.',
      lazy: 'Ať jsou vaše volby tak snadné, jak přicházejí.',
      lively: 'Na vaší cestě vám dobře poslouží lehkovážný duch.',
      livid: 'Vzchopte se.\nVaše frustrace jsou nyní za vámi.',
      lonely: 'Vzchopte se.\nJe zde mnoho přátelství.',
      lucky: 'Ať vás vaše jmění nese na vaší cestě vpřed.',
      mad: 'Vzchopte se.\nVaše frustrace jsou nyní za vámi.',
      manic: 'Kéž na vás přijde rovnováha, když se vydáte na cestu.',
      meek: 'Umírněné ego vás na vaší cestě dovede daleko.',
      modest: 'Umírněné ego vás na vaší cestě dovede daleko.',
      nervy: 'Kéž na vás přijde klid, když se vydáte na cestu.',
      moody: 'Vzchopte se.\nPříběh je váš, bez ohledu na to, co cítíte.',
      numb: 'Kéž váš příběh vyvolá emoce, které se snažíte cítit.',
      proud: 'Sebevědomé myšlení vás dovede daleko na vaší cestě.',
      rowdy: 'Kéž vás na vaší cestě potěší tapisérie chaosu a řádu.',
      sad: 'Take heart.\nYour story is as uplifting as you make it.',
      sane: 'May your stability provide a solid foundation on your journey.',
      sassy: 'Ať je zážitek tak hravý, jak si přejete.',
      sated: 'May the experience only add to your state of satisfaction.',
      scared: 'Vzchopte se.\nTady se není čeho bát.',
      serene: 'Pocit klidu s vámi na vaší cestě udělá zázraky.',
      shy: 'May the experience be as comforting as you desire.',
      silly: 'Na vaší cestě vám dobře poslouží lehkovážný duch.',
      sleepy: 'May the experience provide the energy you require.',
      smug: 'Sebevědomé myšlení vás dovede daleko na vaší cestě.',
      sorry: 'Vzchopte se.\nTeď se nemáš za co stydět.',
      spry: 'May your overflowing energy power you through your journey.',
      steady: 'May your stability provide a solid foundation on your journey.',
      stupid: 'Vzchopte se.\nNa cestě před námi se lze mnohému naučit.',
      timid: 'Vzchopte se.\nTady se není čeho bát.',
      tired: 'May the experience provide the energy you require.',
      unruly: 'Kéž vás na vaší cestě potěší tapisérie chaosu a řádu.',
      wacky: 'Na vaší cestě vám dobře poslouží lehkovážný duch.',
      witty: 'Ať se vaše kvalita řeči promítne do činů na vaší cestě.',
      zen: 'May your stability provide a solid foundation on your journey.',

      
      erogot: 'I am honored by your choice.',
      roman: 'Let the experiment begin.',
      thomas: 'Let the experiment begin.',

      
      chara: 'The true name.',
      frisk: 'This name is incorrect.',

      
      blooky: "............\n(They're powerless to stop you.)",
      dummy: "............\n(It's not much for conversation.)",
      lurky: 'Hello.',
      mushy: 'Saddle up!',
      napsta: "............\n(They're powerless to stop you.)",
      torie: 'Well... I suppose that works...',
      toriel: 'I think you should think of your own name, my child.',
      twink: 'Really...',
      twinkl: 'Nice try, idiot.',
      twinky: 'Nice try, idiot.',
      walker: 'Don\'t you mean \"Eyewalker?\"',

      
      astro: 'Check out my antenna!',
      cdrake: 'Guh huh huh, nice one.',
      chilly: 'Guh huh huh, nice one.',
      dogamy: "Huh? What's that smell?",
      doggo: "It's m-moving! I-I-It's shaking!",
      jerry: 'Jerry.',
      major: '(The dog jumped into your lap.)',
      minor: '(Pant pant)',
      papyrs: "I'LL ALLOW IT!!!!",
      papyru: "I'LL ALLOW IT!!!!",
      san: 'ok.',
      sans: 'nope.',
      sdrake: 'A \"stellar\" choice.',
      serf: 'Check out my antenna!',
      starry: 'A \"stellar\" choice.',

      
      bob: 'A pleasing nomenclature, no?',
      doge: 'I am not amused.',
      gelata: 'Roar.',
      gerson: 'Wah ha ha! Why not?',
      mdummy: 'What. What! WHAT!',
      mkid: "That's my name!!",
      monkid: "That's my name!!",
      muffet: 'Ahuhuhu~\nYou must have great taste, dearie~',
      raddy: 'Hey!\nOnly Skrubby gets to call me that!',
      radtie: "Sorry, but you're a letter shy.",
      radtil: "Sorry, but you're a letter shy.",
      shyren: '...?',
      skrub: 'Clean name.',
      skrubb: 'Clean name.',
      tem: 'hOI!',
      temmie: 'hOI!',
      undyn: 'Ngah, fine.',
      undyne: 'Get your OWN name!',

      
      alphy: 'Uh.... OK?',
      alphys: "D-don't do that.",
      bpants: 'You are really scraping the bottom of the barrel.',
      bratty: 'Like, OK I guess.',
      burgie: 'You like my name, little buddy?',
      catty: "Bratty! Bratty! That's MY name!",
      cozmo: 'A fellow wizard?',
      glyde: 'Slick choice, homeslice.',
      hapsta: "Now you're just being rude, darling.",
      mett: 'OOOOH!!! ARE YOU PROMOTING MY BRAND?',
      metta: 'OOOOH!!! ARE YOU PROMOTING MY BRAND?',
      mtt: 'OOOOH!!! ARE YOU PROMOTING MY BRAND?',

      
      aaron: 'Is this name correct? ;)',
      grillb: 'Hot, but not hot enough.',
      grilly: 'Hot, but not hot enough.',
      gyft: "You don't have to do that...",
      heats: 'You KNEW!?',
      kabakk: 'Respect my AUTHORITY!',
      vulkin: 'Ahh! Thank you~',
      zorren: 'Thanks for, uh, using my name.',

      
      asgor: 'You can?',
      asgore: 'You cannot.',
      asrie: '... fine.',
      asriel: '...'
   },

   

// END-TRANSLATE
   nameChoiceFonts: {
      san: [content.fComicSans, 16],
      sans: [content.fComicSans, 16],
      papyrs: [content.fPapyrus, 16],
      papyru: [content.fPapyrus, 16]
   } as Partial<CosmosKeyed<[CosmosFont, number]>>,
   nameChoiceRestrictions: ['', 'alphys', 'asgore', 'asriel', 'frisk', 'sans', 'toriel', 'twinkl', 'twinky', 'undyne'],
   namePromptX: 0,
   nameValueY: 0,
   nameLetterMap: [
      ['A', 'Á', 'B', 'C', 'Č', 'D', 'Ď', 'E', 'É'],
      ['Ě', 'F', 'G', 'H', 'Ch', 'I', 'Í', 'J', 'K'],
      ['L', 'M', 'N', 'Ň', 'O', 'Ó', 'P', 'Q', 'R'],
      ['Ř', 'S', 'Š', 'T', 'Ť', 'U', 'Ú', 'Ů', 'V'],
      ['W', 'X', 'Y', 'Ý', 'Z', 'Ž'],
      ['a', 'á', 'b', 'c', 'č', 'd', 'ď', 'e', 'é'],
      ['ě', 'f', 'g', 'h', 'ch', 'i', 'í', 'j', 'k'],
      ['l', 'm', 'n', 'ň', 'o', 'ó', 'p', 'q', 'r'],
      ['ř', 's', 'š', 't', 'ť', 'u', 'ú', 'ů', 'v'],
      ['w', 'x', 'y', 'ý', 'z', 'ž']
   ],
   nameLetterPosition: (index: number) => {
      // variables
      const alphabetSize = 42;
      const lineLength = 9;

      // computation
      const position = index % alphabetSize;
      return {
         x: 312 + CosmosMath.spread(192, position % lineLength, lineLength),
         y:
            (index < alphabetSize ? 200 : 320) +
            CosmosMath.spread(42, Math.floor(position / lineLength), Math.ceil(alphabetSize / lineLength))
      };
   },
   nameLetterValidation: (char: string) => {
      return /[A-Za-z]/g.test(char);
   },
   nameValueTranslator(value: string) {
      return value.toLowerCase();
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
   statBoxSizeX: 0,
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
            .replace(/-/g, '-{^2}')
            .replace(/,([\n ])/g, ',{^3}$1')
            .replace(/~([\n ])/g, '~{^4}$1')
            .replace(/\n\*/g, '{^5}\n*')
            .replace(/([.?!])([\n ])/g, '$1{^5}$2')
            .replace(/:([\n ])/g, ':{^6}$1');
   },
   textLength(text: string) {
      return text.length;
   },
   textLengthPrecise(text: string) {
      return text.length;
   },
   textPunctuation(char: string) {
      return /[\s\.\,\!\?\~\*\-]/g.test(char);
   }
};
