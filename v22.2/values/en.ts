import { CosmosTextUtils } from '../../code/api';
import { translator } from '../../code/systems/translator';
import aerialis from './aerialis';
import citadel from './citadel';
import common from './common';
import developer from './developer';
import foundry from './foundry';
import outlands from './outlands';
import starton from './starton';
import systems from './systems';


import ibbBark from './assets/images/battleBullets/bark.png?url';
import ibbBlimpstrat from './assets/images/battleBullets/blimpstrat.png?url';
import ibbPyropebom from './assets/images/battleBullets/pyropebom.png?url';
import ibcDoggoHeadWan from './assets/images/battleCharacters/doggo/headWan.png?url';
import ibcMettatonBodyBack from './assets/images/battleCharacters/mettaton/bodyBack.png?url';
import ibcMettatonHappybreaktime from './assets/images/battleCharacters/mettaton/happybreaktime.png?url';
import ibcMettatonRecbox from './assets/images/battleCharacters/mettaton/recbox.png?url';
import ibcMuffetSpiderSign from './assets/images/battleCharacters/muffet/spiderSign.png?url';
import ibcNapstablookSad from './assets/images/battleCharacters/napstablook/sad.png?url';
import ibcPapyrusSecretStyle from './assets/images/battleCharacters/papyrus/secretStyle.png?url';
import ibuAct from './assets/images/battleUI/act.png?url';
import ibuDefeat from './assets/images/battleUI/defeat.png?url';
import ibuFight from './assets/images/battleUI/fight.png?url';
import ibuItem from './assets/images/battleUI/item.png?url';
import ibuMercy from './assets/images/battleUI/mercy.png?url';
import ibuMercydud from './assets/images/battleUI/mercydud.png?url';
import ibuPressz from './assets/images/battleUI/pressz.png?url';
import ibuSave from './assets/images/battleUI/save.png?url';
import ieSplashForeground from './assets/images/extras/splash-foreground.png?url';
import iePunchcard from './assets/images/extras/punchcard.png?url';
import ieStarbertA from './assets/images/extras/starbertA.png?url';
import ieStarbertB from './assets/images/extras/starbertB.png?url';
import ieStarbertC from './assets/images/extras/starbertC.png?url';
import im_ from './assets/images/maps/_.png?url';
import imAerialisA from './assets/images/maps/aerialis-a.png?url';
import imAerialisBDark from './assets/images/maps/aerialis-b-dark.png?url';
import imAerialisB from './assets/images/maps/aerialis-b.png?url';
import imOutlands from './assets/images/maps/outlands.png?url';
import imStarton from './assets/images/maps/starton.png?url';
import iooAArtsncrafts from './assets/images/overworldObjects/aerialis/artsncrafts.png?url';
import iooABomburst from './assets/images/overworldObjects/aerialis/bomburst.png?url';
import iooAFakeFireStation from './assets/images/overworldObjects/aerialis/fakeFireStation.png?url';
import iooAKittyemu2 from './assets/images/overworldObjects/aerialis/kittyemu2.png?url';
import iooAProgresser from './assets/images/overworldObjects/aerialis/progresser.png?url';
import iooAScreen1 from './assets/images/overworldObjects/aerialis/screen1.png?url';
import iooAScreen1alt from './assets/images/overworldObjects/aerialis/screen1alt.png?url';
import iooAScreen2 from './assets/images/overworldObjects/aerialis/screen2.png?url';
import iooASignposter from './assets/images/overworldObjects/aerialis/signposter.png?url';
import iooATimer from './assets/images/overworldObjects/aerialis/timer.png?url';
import iooCArchiveStrut from './assets/images/overworldObjects/citadel/archive_strut.png?url';
import iooCTerminal from './assets/images/overworldObjects/citadel/terminal.png?url';
import iooFNapster from './assets/images/overworldObjects/foundry/napster.png?url';
import iooFTemstatue from './assets/images/overworldObjects/foundry/temstatue.png?url';
import iooSCrosswordScreen from './assets/images/overworldObjects/starton/crosswordScreen.png?url';
import iooSOuternet from './assets/images/overworldObjects/starton/outernet.png?url';
import iooSTownBlookshop from './assets/images/overworldObjects/starton/town_blookshop.png?url';
import iooSTownGrillbys from './assets/images/overworldObjects/starton/town_grillbys.png?url';
import iooSTownInnshop from './assets/images/overworldObjects/starton/town_innshop.png?url';
import iooSTownLibrarby from './assets/images/overworldObjects/starton/town_librarby.png?url';
import iooSTownPolice from './assets/images/overworldObjects/starton/town_police.png?url';
import isTemBox from './assets/images/shops/tem/box.png?url';

const LANGUAGE = 'chinese';

translator.langs.push(LANGUAGE);

translator.registry.of('aerialis').addLanguage(LANGUAGE, aerialis);
translator.registry.of('citadel').addLanguage(LANGUAGE, citadel);
translator.registry.of('common').addLanguage(LANGUAGE, common);
translator.registry.of('developer').addLanguage(LANGUAGE, developer);
translator.registry.of('foundry').addLanguage(LANGUAGE, foundry);
translator.registry.of('outlands').addLanguage(LANGUAGE, outlands);
translator.registry.of('starton').addLanguage(LANGUAGE, starton);
translator.registry.of('systems').addLanguage(LANGUAGE, systems);

translator.sources.addLanguage(LANGUAGE, {
   ibbBark,
   ibbBlimpstrat,
   ibbPyropebom,
   ibcDoggoHeadWan,
   ibcMettatonBodyBack,
   ibcMettatonHappybreaktime,
   ibcMettatonRecbox,
   ibcMuffetSpiderSign,
   ibcNapstablookSad,
   ibcPapyrusSecretStyle,
   ibuAct,
   ibuDefeat,
   ibuFight,
   ibuItem,
   ibuMercy,
   ibuMercydud,
   ibuPressz,
   ibuSave,
   ieSplashForeground,
   iePunchcard,
   ieStarbertA,
   ieStarbertB,
   ieStarbertC,
   imAerialisA,
   imAerialisBDark,
   imAerialisB,
   imOutlands,
   imStarton,
   im_,
   iooAArtsncrafts,
   iooABomburst,
   iooAFakeFireStation,
   iooAKittyemu2,
   iooAProgresser,
   iooAScreen1,
   iooAScreen1alt,
   iooAScreen2,
   iooASignposter,
   iooATimer,
   iooCArchiveStrut,
   iooCTerminal,
   iooFNapster,
   iooFTemstatue,
   iooSCrosswordScreen,
   iooSOuternet,
   iooSTownBlookshop,
   iooSTownGrillbys,
   iooSTownInnshop,
   iooSTownLibrarby,
   iooSTownPolice,
   isTemBox
});

translator.values.addLanguage(LANGUAGE, {
   footerX: 0,
   itemEquipX: 0,
   itemUseX: 0,
   itemInfoX_equip: 0,
   itemInfoX_use: 0,
   itemDropX_equip: 0,
   itemDropX_use: 0,
   loadContinueX: 0,
   loadObserveX: 0,
   loadResetX: 0,
   loadSettingsX: 0,
   loadTrueResetX: 0,
   // START-TRANSLATE
   nameChoiceCameos: {
      // no names
      '': 'You must choose a name.',
      no: 'No?',

      // meta names
      bully: 'Hm...?',
      flirt: 'Hm...?',
      geno: 'Hm...?',
      mercy: 'Hm...?',
      murder: 'Hm...?',
      paci: 'Hm...?',
      maybe: 'Maybe?',
      yes: 'Yes?',

      // mood names
      afraid: 'Take heart.\nThere is nothing to be afraid of here.',
      amused: 'A light-hearted spirit will serve you well on your journey.',
      angry: 'Take heart.\nYour frustrations are behind you now.',
      angsty: 'Take heart.\nThe story is yours, no matter what you feel.',
      antsy: 'May tranquility come upon you as you embark on your journey.',
      bored: 'Take heart.\nYour story is as interesting as you make it.',
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
      elated: 'A light-hearted spirit will serve you well on your journey.',
      empty: 'May your story gain meaning in this cocoon amidst the darkness.',
      flirty: 'May the experience be as playful as you desire.',
      giddy: 'A light-hearted spirit will serve you well on your journey.',
      goofy: 'A light-hearted spirit will serve you well on your journey.',
      greedy: 'May the experience be as excessive as you desire.',
      guilty: 'Take heart.\nYou have nothing to feel ashamed of now.',
      happy: 'A light-hearted spirit will serve you well on your journey.',
      hollow: 'May your story gain meaning in this cocoon amidst the darkness.',
      humble: 'A temperate ego will take you far on your journey.',
      hungry: 'May the experience provide the sustenance you require.',
      insane: 'May balance come upon you as you embark on your journey.',
      irate: 'Take heart.\nYour frustrations are behind you now.',
      jaded: 'May your story bring forth the emotion you strive to feel.',
      lazy: 'May your choices be as effortless as they come.',
      lively: 'A light-hearted spirit will serve you well on your journey.',
      livid: 'Take heart.\nYour frustrations are behind you now.',
      lonely: 'Take heart.\nThere is much companionship to be had here.',
      lucky: 'May your fortune carry you forward on your journey.',
      mad: 'Take heart.\nYour frustrations are behind you now.',
      manic: 'May balance come upon you as you embark on your journey.',
      meek: 'A temperate ego will take you far on your journey.',
      modest: 'A temperate ego will take you far on your journey.',
      nervy: 'May tranquility come upon you as you embark on your journey.',
      moody: 'Take heart.\nThe story is yours, no matter what you feel.',
      numb: 'May your story bring forth the emotion you strive to feel.',
      proud: 'A confident mindset will take you far on your journey.',
      rowdy: 'May the tapestry of chaos and order please you on your journey.',
      sad: 'Take heart.\nYour story is as uplifting as you make it.',
      sane: 'May your stability provide a solid foundation on your journey.',
      sassy: 'May the experience be as playful as you desire.',
      sated: 'May the experience only add to your state of satisfaction.',
      scared: 'Take heart.\nThere is nothing to be afraid of here.',
      serene: 'A sense of serenity will do you wonders on your journey.',
      shy: 'May the experience be as comforting as you desire.',
      silly: 'A light-hearted spirit will serve you well on your journey.',
      sleepy: 'May the experience provide the energy you require.',
      smug: 'A confident mindset will take you far on your journey.',
      sorry: 'Take heart.\nYou have nothing to feel ashamed of now.',
      spry: 'May your overflowing energy power you through your journey.',
      steady: 'May your stability provide a solid foundation on your journey.',
      stupid: 'Take heart.\nThere is much to be learned on the road ahead.',
      timid: 'Take heart.\nThere is nothing to be afraid of here.',
      tired: 'May the experience provide the energy you require.',
      unruly: 'May the tapestry of chaos and order please you on your journey.',
      wacky: 'A light-hearted spirit will serve you well on your journey.',
      witty: 'May your quality of speech translate to action on your journey.',
      zen: 'May your stability provide a solid foundation on your journey.',

      // historical figures
      erogot: 'I am honored by your choice.',
      roman: 'Let the experiment begin.',

      // humans
      chara: 'The true name.',
      查拉: 'The true name.',
      猹: 'The true name..?',
      卡拉: 'The true name..?',
      恰拉: 'The true name..?',
      frisk: 'This name is incorrect.',
      弗里斯克: 'This name is incorrect.',
      福: 'This name is incorrect..?',
      福瑞斯克: 'This name is incorrect..?',

      // outlands
      blooky: "............\n(They're powerless to stop you.)",
      dummy: "............\n(It's not much for conversation.)",
      mushy: 'Saddle up!',
      napsta: "............\n(They're powerless to stop you.)",
      torie: 'Well... I suppose that works...',
      羊妈: 'Well... I suppose that works...',
      托丽: 'Well... I suppose that works...',
      toriel: 'I think you should think of your own name, my child.',
      托丽尔: 'I think you should think of your own name, my child.',
      twink: 'Really...',
      twinkl: 'Nice try, idiot.',
      twinky: 'Nice try, idiot.',
      twnkly: 'Nice try, idiot.',
      闪闪: 'Nice try, idiot.',
      walker: 'Don\'t you mean "Eyewalker?"',

      // starton
      astro: 'Check out my antenna!',
      cdrake: 'Guh huh huh, nice one.',
      chilly: 'Guh huh huh, nice one.',
      dogamy: "Huh? What's that smell?",
      doggo: "It's m-moving! I-I-It's shaking!",
      jerry: 'Jerry.',
      major: '(The dog jumped into your lap.)',
      minor: '(Pant pant)',
      papyru: "I'LL ALLOW IT!!!!",
      帕: "I'LL ALLOW IT!!!!",
      帕帕: "I'LL ALLOW IT!!!!",
      帕派肉丝: "I'LL ALLOW IT!!!!",
      帕帕肉丝: "I'LL ALLOW IT!!!!",
      帕派瑞: "I'LL ALLOW IT!!!!",
      帕派瑞斯: "I DON'T THINK IT'S INAPPROPRIATE!!",
      san: 'ok.',
      杉: 'ok.',
      衫: 'ok.',
      杉哥: 'ok.',
      衫哥: 'ok.',
      sans: 'nope.',
      杉斯: 'nope.',
      衫斯: 'nope.',
      snas: 'what?',
      鳝丝: 'what?',
      衫衫: 'what?',
      杉杉: 'what?',
      sdrake: 'A "stellar" choice.',
      serf: 'Check out my antenna!',
      starry: 'A "stellar" choice.',

      // foundry
      bob: 'A pleasing nomenclature, no?',
      doge: 'I am not amused.',
      gelata: 'Roar.',
      gerson: 'Wah ha ha! Why not?',
      mdummy: 'What. What! WHAT!',
      mkid: "That's my name!!",
      monkid: "That's my name!!",
      muffet: 'Ahuhuhu~\nYou must have great taste, dearie~',
      raddy: 'Hey!\nOnly Skrubby gets to call me that!',
      radtil: "Sorry, but you're a letter shy.",
      shyren: '...?',
      skrub: 'Clean name.',
      skrubb: 'Clean name.',
      tem: 'hOI!',
      temmie: 'hOI!',
      undyn: 'Ngah, fine.',
      鱼姐: 'Ngah, fine.',
      安戴: 'Ngah, fine.',
      undyne: 'Get your OWN name!',
      安戴因: 'Get your OWN name!',

      // aerialis
      alphy: 'Uh.... OK?',
      宅龙: 'Uh.... OK?',
      艾菲: 'Uh.... OK?',
      alphys: "D-don't do that.",
      艾菲斯: "D-don't do that.",
      bpants: 'You are really scraping the bottom of the barrel.',
      bratty: 'Like, OK I guess.',
      burgie: 'You are really scraping the bottom of the barrel.',
      catty: "Bratty! Bratty! That's MY name!",
      cozmo: 'A fellow wizard?',
      glyde: 'Slick choice, homeslice.',
      hapsta: "I don't think so, darling.",
      mett: 'OOOOH!!! ARE YOU PROMOTING MY BRAND?',
      metta: 'OOOOH!!! ARE YOU PROMOTING MY BRAND?',
      mtt: 'OOOOH!!! ARE YOU PROMOTING MY BRAND?',

      // notable NPCs
      aaron: 'Is this name correct? ;)',
      grillb: 'Hot, but not hot enough.',
      gyft: "You don't have to do that...",
      heats: 'You KNEW!?',
      kabakk: 'Respect my AUTHORITY!',
      vulkin: 'Ahh! Thank you~',
      zorren: 'Thanks for, uh, using my name.',

      // citadel
      asgor: 'You can?',
      羊爸: 'You can?',
      艾斯戈: 'You can?',
      asgore: 'You cannot.',
      艾斯戈尓: 'You cannot.',
      asriel: '...',
      艾斯利尓: '...',
      小羊: '...',
      艾斯利: '...',
   },
   // END-TRANSLATE
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
   namePromptX: 0,
   nameValueX: 0,
   nameValueY: 0,
   nameLetterMap: [],
   nameLetterPosition: () => { },
   nameLetterValidation: (char: string) => {
      return /[A-Za-z]/g.test(char) || CosmosTextUtils.cjk(char);
   },
   nameQuitX: 0,
   nameBackspaceX: 0,
   nameDoneX: 0,
   nameConfirmX: 0,
   nameNoX: 0,
   nameYesX: 0,
   nameGoBackX: 0,
   settingsHeaderX: 0
});
