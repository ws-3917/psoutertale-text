import { asrielinter } from '../common';
import { game, renderer } from '../systems/core';
import {
   battler,
   calcHP,
   calcLV,
   choicer,
   fetchCharacters,
   pager,
   player,
   roomKills,
   world
} from '../systems/framework';
import { SAVE } from '../systems/save';
import { CosmosKeyed, CosmosProvider, CosmosUtils } from '../systems/storyteller';
import systemsText from '../systems/text';

export const papreal = () =>
   world.dead_skeleton || (SAVE.data.n.plot < 31 && (world.edgy || (world.population <= 0 && !world.bullied)));

export const solo = () => SAVE.data.n.plot_date < 2 || SAVE.data.n.exp > 0;

export const dateready = () => SAVE.data.n.plot_date < 0.2 && !world.edgy && (world.population > 0 || world.bullied);

export const roomready = () => SAVE.data.n.plot_date < 1 && !world.edgy && (world.population > 0 || world.bullied);

export const blookGone = () =>
   world.genocide ||
   (world.population === 0 && !world.bullied) ||
   SAVE.flag.n.pacifist_marker_bully > 3 ||
   world.scared_ghost;

// START-TRANSLATE
export const s_taxi = pager.create(
   0,
   () => [
      '<18>{#p/papyrus}{#f/0}IS THE TAXI OUT YET TODAY?',
      '<18>{#f/5}HMM... IT TENDS TO COME OUT IN THE LATER HOURS.',
      '<18>{#f/6}AS FOR HOW TO TELL THE LATER HOURS FROM EARLIER ONES?',
      ...(solo()
         ? [ "<18>{#f/4}UH, I'LL GET BACK TO YOU ON THAT." ]
         : [
              '<25>{#p/undyne}{#f/12}* Uh, Papyrus, there are no "later hours."',
              '<18>{#p/papyrus}{#f/9}CORRECT... UNTIL NOW!',
              '<18>{#f/4}... I WAS JUST IN THE PROCESS OF MAKING THEM UP.'
           ])
   ],
   () =>
      solo()
         ? [ '<18>{#p/papyrus}{#f/6}EVENTUALLY!' ]
         : [ "<18>{#p/papyrus}{#f/6}I'LL LET YOU KNOW IF I EVER FINISH MAKING THEM UP!" ]
);

export const f_puzzle1 = pager.create(0, () => [
   ...(SAVE.data.n.plot < 48
      ? [
           '<18>{#p/papyrus}{#f/0}WATCH OUT FOR THE ANCIENT HUMAN PYLON PUZZLES!',
           '<18>THOUGH RUDIMENTARY IN THEIR METHOD OF CONSTRUCTION...',
           '<18>THEIR DESIGN IS NOTHING SHORT OF PERPLEXING!'
        ]
      : [
           "<18>{#p/papyrus}{#f/4}SO, HOW'D YOU FARE WITH THE PYLON PUZZLES?",
           '<18>{#f/5}I STRUGGLED WITH THEM GREATLY.'
        ]),
   ...(solo()
      ? []
      : [
           "<25>{#p/undyne}{#f/1}* They weren't built by monsters, so it actually makes sense.",
           '<25>{#f/8}* Makes me wonder if the human struggles on monster-made puzzles!'
        ])
]);

export const f_prespear = pager.create(
   0,
   () =>
      SAVE.data.n.plot < 46
         ? [ '<18>{#p/papyrus}{#f/4}CAREFUL, THIS ROOM HAS SPECIAL SPOOKY POWERS.' ]
         : [
              '<18>{#p/papyrus}{#f/4}THE TIME IT TAKES TO TRAVEL ACROSS THIS ROOM...',
              '<18>{#p/papyrus}{#f/4}... NEVER SEEMS TO BE THE SAME.',
              "<18>{#p/papyrus}{#f/5}SOMETIMES IT'S LONG, SOMETIMES IT'S NOT...",
              '<18>{#p/papyrus}{#f/0}AND SOMETIMES I WEAR POLKA-DOTS.',
              ...(solo()
                 ? []
                 : [
                      '<25>{#p/undyne}{#f/12}* Polka-what?',
                      '<25>{#p/undyne}{#f/1}* Well uh, as for the length...',
                      "<25>{#p/undyne}{#f/3}* It's probably just a spatial disturbance.",
                      '<18>{#p/papyrus}{#f/0}... OH!',
                      '<25>{#p/undyne}{#f/17}* Yeah!!!',
                      '<25>{#p/undyne}{#f/16}* But... polka dots.',
                      '<25>{#p/undyne}{#f/8}* What does that have to do with anything!'
                   ])
           ],
   () =>
      SAVE.data.n.plot < 46
         ? [ '<18>{#p/papyrus}{#f/5}OBJECTS IN HALLWAY ARE FARTHER THAN THEY APPEAR.' ]
         : [
              '<18>{#p/papyrus}{#f/4}YES, I LITERALLY JUST SAID THAT TO MAKE IT RHYME.',
              '<18>{#p/papyrus}{#f/9}WHAT ARE YOU GONNA DO ABOUT IT, HUH?',
              "<18>THAT'S RIGHT.\nNOTHING!",
              '<18>NOTHING AT ALL!'
           ]
);

export const f_blooky = pager.create(
   0,
   () => [
      "<18>{#p/papyrus}{#f/0}HEY, THAT'S WHERE NAPSTABLOOK LIVES.",
      '<18>{#f/5}DESPITE FEELING SAD, THEY DECLINE OFFERS OF HELP...',
      '<18>{#f/0}EXCEPT FOR WHEN THEY LET US DONATE OUR SNAILS!',
      ...(solo()
         ? []
         : [
              '<25>{#p/undyne}{#f/12}* Oh yeah, they were really happy about that...',
              "<25>{#p/undyne}{#f/7}* But, uh, they haven't said much since."
           ])
   ],
   () =>
      solo()
         ? [
              '<18>{#p/papyrus}{#f/0}THAT SNAIL FARM KEEPS THEM BUSY, AND LESS LONELY.',
              '<18>{#f/9}AN A-PLUS COMBINATION IF YOU ASK ME!'
           ]
         : [
              "<18>{#p/papyrus}{#f/4}MAYBE THEY'RE JUST AFRAID OF YOU.",
              '<25>{#p/undyne}{#f/7}* Me??\n* Scary???',
              '<25>{#p/undyne}{#f/14}* Not a chance!'
           ]
);

const text = {
   a_starton: {
      telescope1: () => [
         ...(SAVE.data.b.svr ? [] : [ '<32>{#p/basic}* A standard-issue CITADEL long- range telescope, circa 261X.' ]),
         choicer.create('* (Use the telescope?)', 'Yes', 'No')
      ],
      telescopeMeetup1: [ '<25>{#p/kidd}{#f/2}* You do stargazing??' ],
      telescopeMeetup2: [
         '<25>{#p/kidd}{#f/1}* Yo... I bet you just saw something really cool.',
         '<25>{#f/14}* The last time I looked in a telescope, I saw a freaking SUPERNOVA!'
      ],
      telescopeMeetup3: [
         '<25>{#p/kidd}{#f/3}* Here.\n* Take this.',
         '<32>{#s/equip}{#p/human}* (The Premium Membership Voucher was added to your keyring.)',
         '<25>{#p/kidd}{#f/7}* Now you can use ANY telescope, even the "premium" ones!',
         '<25>{#f/1}* That short skeleton gave me a bunch of these earlier.',
         '<25>{#f/2}* He also gave me some digital thing with a lot of money...',
         '<25>{#f/1}* I guess he really likes me, haha.'
      ],
      telescopeMeetup4: [
         '<25>{#p/kidd}{#f/3}* Anyway, I kinda just wanted to give you the voucher.',
         '<25>{#f/1}* I hope you see something cool with it, though!'
      ],
      telescopeMeetup5: [ "<25>{#p/kidd}{#f/1}* I'll be in town!" ],
      telescope2: () =>
         SAVE.data.b.svr
            ? [ '<25>{#p/asriel1}{#f/17}* See anything you like?' ]
            : world.darker
            ? [ "<32>{#p/basic}* It's a telescope." ]
            : SAVE.data.b.oops || SAVE.data.b.s_state_chargazer
            ? [ '<32>{#p/basic}* Stargazing in space...\n* Truly, this is some outside- the-box thinking.' ]
            : ((SAVE.data.b.s_state_chargazer = true),
              [
                 '<32>{#p/basic}* ...',
                 '<32>* Asriel and I had a telescope just like this.',
                 "<32>* We'd point it in random directions, hoping to see something exciting...",
                 '<32>* ... we never saw much at all.',
                 "<32>* Despite that, it didn't seem to matter to him...",
                 '<32>* While I was focused on looking outward, he was just happy to spend time with me.',
                 '<32>* ...',
                 '<32>{#p/human}* (You hear a sigh.)',
                 "<32>{#p/basic}* ... uh, let's just get back to what we were doing."
              ]),
      notv: [ "<32>{#p/basic}* It doesn't seem like there's anything interesting to watch." ],
      nicecreamScoreReaction1a: [ '<32>{#p/basic}* Not bad for your first try...' ],
      nicecreamScoreReaction1b: [ '<32>{#p/basic}* Not bad for your first try.' ],
      nicecreamScoreReaction2a: [ '<32>{#p/basic}* You can do better than that...' ],
      nicecreamScoreReaction2b: [ '<32>{#p/basic}* You can do better than that.' ],
      nicecreamScoreReaction3a: [
         "<32>{#p/basic}* You beat the top scorer...?\n* I don't think I've ever seen anyone do that..."
      ],
      nicecreamScoreReaction3b: [
         "<32>{#p/basic}* You beat the top scorer?\n* I don't think I've ever seen anyone do that!"
      ],
      nicecreamScoreReaction4a: [ '<33>{#p/basic}* You seem pretty good at this...' ],
      nicecreamScoreReaction4b: [ '<32>{#p/basic}* You seem pretty good at this.' ],
      nicecreamScoreReaction5a: [ '<32>{#p/basic}* You beat your high score...?' ],
      nicecreamScoreReaction5b: [ '<32>{#p/basic}* Look at that, new high score!' ],
      nicecreamScoreReaction6a: [ '<32>{#p/basic}* For a second, I thought you were going to beat the top scorer...' ],
      nicecreamScoreReaction6b: [
         "<32>{#p/basic}* Woah, you could've beaten the top scorer!\n* Can you go all the way?"
      ],
      nicecreamScoreReaction7a: [ '<32>{#p/basic}* Looks like you could use some practice...' ],
      nicecreamScoreReaction7b: [ '<32>{#p/basic}* Looks like you could use some practice.' ],
      nicecreamScoreReaction8a: [ "<32>{#p/basic}* That's better..." ],
      nicecreamScoreReaction8b: [ "<32>{#p/basic}* That's more like it." ],
      nicecreamScoreReaction9a: [
         '<32>{#p/basic}* You beat the top scorer on your first try...?\n* How in the world...'
      ],
      nicecreamScoreReaction9b: [ "<32>{#p/basic}* You beat the top scorer on your first try?\n* You're a natural!" ],
      nicecreamScoreReaction10a: [ "<32>{#p/basic}* For a first try, that's pretty good..." ],
      nicecreamScoreReaction10b: [ "<32>{#p/basic}* For a first try, that's pretty good!" ],
      nicecreamScoreReaction11a: [ '<32>{#p/basic}* You keep getting so close...' ],
      nicecreamScoreReaction11b: [ '<32>{#p/basic}* Darn, you almost beat the top scorer again...\n* You can do it!' ],
      noteleport: [ "<32>{#p/human}* (It doesn't seem to be powered on anymore.)" ],
      evac: [ '<32>{#p/human}* (You feel the nearby monster presence dwindling.)' ],
      shopclosed: [ '<32>{#p/human}* (But there was nothing left for you to do here.)' ],
      jukebox1: () => [
         SAVE.data.b.svr
            ? '<32>{#p/human}* (You reach for the jukebox...)'
            : "<32>{#p/basic}* This jukebox only plays music you've heard before.",
         choicer.create(
            '* (Play a song?)',
            SAVE.data.b.napsta_performance ? 'Track 01' : '???',
            2 <= SAVE.data.n.state_foundry_swansong ? 'Track 02' : '???',
            2 <= SAVE.data.n.state_starton_trashprogress ? 'Track 03' : '???',
            'Cancel'
         )
      ],
      jukebox1x1: () =>
         SAVE.data.b.svr
            ? [ "<32>{#p/human}* (But you couldn't play a song you didn't know yet.)" ]
            : [ "<32>{#p/basic}* The cover depicts a spooky DJ playing to the crowd.\n* You can't know this song." ],
      jukebox1x2: () =>
         SAVE.data.b.svr
            ? [ "<32>{#p/human}* (But you couldn't play a song you didn't know yet.)" ]
            : [ "<33>{#p/basic}* The cover depicts a spooky DJ at their computer.\n* You can't know this song." ],
      jukebox1x3: () =>
         SAVE.data.b.svr
            ? [ "<32>{#p/human}* (But you couldn't play a song you didn't know yet.)" ]
            : [
                 "<32>{#p/basic}* The cover depicts a little white dog surrounded by trash.\n* You can't know this song."
              ],
      jukebox1y: [ '<32>{*}{#p/human}* (You select the disc...){^40}{%}' ],
      jukebox2: () => [
         SAVE.data.b.svr
            ? '<32>{#p/human}* (It sounds like a song is currently playing.)'
            : [
                 '<32>{#p/basic}* Currently playing "Track 01"',
                 '<32>{#p/basic}* Currently playing "Track 02"',
                 '<32>{#p/basic}* Currently playing "Track 03"'
              ][SAVE.data.n.state_starton_jukebox - 1],
         choicer.create('* (Stop playback?)', 'Yes', 'No')
      ],
      jukebox3a1: [ "<32>{#p/basic}{#npc/a}* That's more like it!" ],
      jukebox3a2: [ '<32>{#p/basic}{#npc/a}* (We love this kind of music.)' ],
      jukebox3b: [ '<32>{#p/basic}{#npc/a}* Is that the song making the rounds at the dance club?' ],
      jukebox3c: [
         '<32>{#p/basic}* ...\n* ...\n* ...',
         "<32>{#npc/a}* Grillbz says he's heard this song somewhere before."
      ],
      jukebox3d: [
         '<32>{#p/basic}{#npc/a}* You sure know a lot of music offhand, kid...',
         '<32>* You must be really tasty.'
      ],
      shockpapyrus0a: [
         '<15>{#p/papyrus}{#e/papyrus/17}WHAT IS THE MEANING OF THIS?',
         '<15>{#p/papyrus}{#e/papyrus/21}I ONLY CAME BECAUSE I FELT SANS WAS IN DANGER...',
         '<15>{#p/papyrus}{#e/papyrus/22}... BUT THIS IS WHAT I SEE WHEN I GET HERE!?!?',
         "<15>{#p/papyrus}{#e/papyrus/14}I'LL HAVE YOU KNOW, I'M A SHOE-IN FOR THE ROYAL GUARD.",
         '<15>{#p/papyrus}{#e/papyrus/21}SO, WHOEVER YOU TWO ARE...'
      ],
      shockpapyrus0b: [
         '<15>{#p/papyrus}{#e/papyrus/24}... WAIT.',
         '<15>{#p/papyrus}{#e/papyrus/22}IS THAT A HUMAN!?',
         "<15>{#p/papyrus}{#e/papyrus/20}OH MY GOD!\nIT REALLY IS, ISN'T IT?"
      ],
      shockpapyrus0c: [
         '<15>{#p/papyrus}{#e/papyrus/20}SANS, YOU HAVE TO COME AND SEE THIS!',
         '<15>{#p/papyrus}{#e/papyrus/15}A HUMAN HAS MATERIALIZED IN FRONT OF ME!',
         '<15>{#p/papyrus}{#e/papyrus/27}ALONG WITH... A TINY VERSION OF ASGORE???',
         "<15>{#p/papyrus}{#e/papyrus/24}YEAH, I'M NOT SO SURE ABOUT THAT ONE."
      ],
      shockpapyrus1: () =>
         [
            [
               '<32>{#p/asriel2}* Ready, $(name)?',
               choicer.create('* (What should Asriel do?)', 'Mercy', 'Act', 'Magic', 'Fight')
            ],
            [ "<32>{#p/asriel2}* Let's just get this over with." ]
         ][Math.min(SAVE.flag.n.ga_asrielPapyrus, 1)],
      shockpapyrus2a: [
         '<32>{#p/asriel2}* Mercy, huh?',
         '<32>{#p/asriel2}* Mercy... I think I like that word.',
         '<32>{#p/asriel2}* Let\'s show him some "Mercy."'
      ],
      shockpapyrus2b: [
         "<32>{#p/asriel2}* Act...?\n* I'll show you how to act.",
         '<32>{#p/asriel2}* First, you raise your arm...',
         '<32>{#p/asriel2}* Then...!'
      ],
      shockpapyrus2c: [
         '<32>{#p/asriel2}* Magic.\n* The force that binds us monsters together.',
         '<32>{#p/asriel2}* Or, in this case...',
         '<33>{#p/asriel2}* The force that rips them apart.'
      ],
      shockpapyrus2d: [ '<32>{#p/asriel2}* Fight... the ideal choice.', '<32>{#p/asriel2}* Hee hee hee...' ],
      sansDeath1: [ "<15>{#p/papyrus}{#e/papyrus/27}SANS!\nYOU'RE HURT!" ],
      sansDeath2: [ "<20>{#p/sans}papyrus, didn't i tell you to stay at home?", '{*}{#e/papyrus/21}{%}' ],
      sansDeath3: [ "<20>{#p/sans}... don't worry bro, it's only my favorite sauce.", '{*}{#e/papyrus/26}{%}' ],
      sansDeath4: [ "<15>{#p/papyrus}{#e/papyrus/21}BUT YOU'RE HURT..." ],
      sansDeath5: [
         "<20>{#p/sans}i know.\ni wasn't thinking straight.",
         "<20>{#p/sans}... there's not much i can do about it now.",
         '{*}{#e/papyrus/21}{%}'
      ],
      sansDeath6: [
         '<20>{#p/sans}so...',
         "<20>guess that's it, huh?",
         '<20>...',
         '<20>just...',
         "<20>promise me you'll be fine without me, bro.",
         "<20>promise me you'll be g-{^5}great.",
         '<20>...',
         '<20>after all...'
      ],
      sansDeath7: [ "<20>{|}{#p/sans}you're the... great p-{^5}papyrus.{^20}{%}" ],
      sansDeath8: [ '<15>{#p/papyrus}{#e/papyrus/33}N-NO...{^40}{%}' ],
      fast_food1: () => [
         SAVE.data.b.fryz
            ? "<32>{#p/human}{#npc}* (You got the Flamin' Grillby.)"
            : '<32>{#p/human}{#npc}* (You got the Sliders.)'
      ],
      fast_food2: [ "<32>{#p/human}{#npc}* (You're carrying too much.)" ],
      aussie: pager.create(
         0,
         () =>
            SAVE.data.n.state_starton_trashprogress < 1
               ? [
                    '<25>{#p/sans}{#f/0}* finally.',
                    "<25>{#f/3}* i've been wondering when you'd show up.",
                    '<25>{#f/0}* i dunno if you recall, but back when we first met...',
                    '<25>{#f/0}* i told papyrus to focus more on the "gravity" of the situation.',
                    '<25>{#f/0}* what did i mean by that, you ask?',
                    '<25>{#f/3}* well.',
                    "<25>{#f/2}* you're about to find out."
                 ]
               : [ '<25>{#p/sans}{#f/0}* welcome back.', '<25>{#f/2}* ready to find out what awaits you?' ],
         () =>
            SAVE.data.n.state_starton_trashprogress < 1
               ? [ '<25>{#p/sans}{#f/0}* go on, take a look.', "<25>{#f/2}* it's right up there, bucko." ]
               : [ "<25>{#p/sans}{#f/2}* it's right up there, bucko." ],
         () =>
            SAVE.data.n.state_starton_trashprogress < 2
               ? [ "<25>{#p/sans}{#f/2}* don't worry, it's not dangerous... even if it tries to be." ]
               : [ '<25>{#p/sans}{#f/2}* thanks for the help.' ]
      ),
      trashhunt1: [
         '<25>{#p/sans}{#f/0}* sooo... whaddya think?',
         '<25>{#f/3}* i call it "the trash planet."',
         "<25>{#f/0}* ... actually, this thing's been growing in size for quite a while.",
         '<25>{#f/0}* if it grows any larger, well...',
         "<25>{#f/2}* let's just say we'd be in a {@fill:#ff0}world{@fill:#fff} of trouble.",
         "<25>{#f/0}* don't worry, though.\n* with your help, it'll be gone in no time.",
         '<25>{#f/2}* i even found you some music to keep you motivated.'
      ],
      trashhunt2: '* Press [Z] repeatedly to shake\n  out all the trash!',
      trashhunt3: () => [
         '<25>{#p/sans}{#f/3}* wow.\n* all in one go, huh?',
         "<25>{#f/2}* ... we'll i'll be turned upside down.",
         '<25>{#f/0}* guess i gotta give you some kinda reward.',
         '<25>{#f/0}* ...\n* here.\n* have this on me.',
         '<32>{#p/human}* (Sans tossed you something.)',
         ...(SAVE.storage.inventory.size < 8
            ? [ '<32>{#s/equip}{#p/human}* (You got the Corn Dog Sword.)', '<25>{#p/sans}{#f/2}* use it wisely.' ]
            : [
                 "<32>{#p/human}* (You're carrying too much.)",
                 '<25>{#p/sans}{#f/3}* no room, huh?',
                 "<25>{#p/sans}{#f/2}* don't worry.\n* i'll leave it in my room for you."
              ])
      ],
      gravo1: () =>
         SAVE.data.b.svr
            ? [
                 '<32>{#p/human}* (You look curiously at the seemingly useless device.)',
                 ...[ [ "<25>{#p/asriel1}{#f/17}* Too bad we don't have the remote for this thing, huh?" ], [] ][
                    Math.min(asrielinter.gravo1++, 1)
                 ]
              ]
            : [ '<32>{#p/basic}* It\'s a "gravometric inverter."', '<32>* Whatever that means.' ],
      gravo3: () => [
         '<32>{#p/human}* (You use the Gravometric Inverter Remote.)\n* (Nothing happens.)',
         ...(SAVE.data.b.svr
            ? [ [ "<25>{#p/asriel1}{#f/21}* They're probably shutting off power for non-essential devices." ], [] ][
                 Math.min(asrielinter.gravo3++, 1)
              ]
            : [ '<32>{#p/basic}* It must be offline...' ])
      ],
      gravo2: [ '<32>{#p/human}* (You use the Gravometric Inverter Remote.)' ],
      sansdoor1: () =>
         SAVE.data.b.svr || SAVE.flag.n.pacifist_marker_bully > 3
            ? [ '<32>{#p/human}* (It looks to have been closed with a deadlock seal.)' ]
            : [ "<32>{#p/basic}* It's locked." ],
      sansdoor2: [ '<32>{#p/human}* (You use the Skeleton Key.)' ],
      sanscab1: () => [
         ...(SAVE.data.b.svr ? [] : [ "<32>{#p/basic}* There's an odd remote inside of this envelope." ]),
         '<32>{#s/equip}{#p/human}* (The Gravometric Inverter Remote was added to your keyring.)'
      ],
      sanscab2: () =>
         SAVE.data.b.svr
            ? [ '<32>{#p/human}* (But you already emptied the envelope of its contents.)' ]
            : [ "<32>{#p/basic}* It's just an empty envelope." ],
      sanscab3: () => [
         ...(SAVE.data.b.svr ? [] : [ "<32>{#p/basic}* There's an odd... item, inside of this envelope." ]),
         SAVE.storage.inventory.size < 8
            ? '<32>{#s/equip}{#p/human}* (You got the Corn Dog Sword.)'
            : "<32>{#p/human}* (You're carrying too much.)"
      ],
      cream_get: [ '<32>{#p/human}* (You got the Ice Dream.)' ],
      cream_deny: [ '<32>{#p/basic}* Nothing left.' ],
      cream_full: [ "<32>{#p/human}* (You're carrying too much.)" ],
      cream_get_archive: [
         '<32>{#p/human}* (You reach into the cart.)',
         '<32>{#p/human}{#s/equip}* (You got the Ice Dream.)'
      ],
      cream_empty_archive: [ '<32>{#p/human}* (You reach into the cart.)', '<32>{#p/human}* (...)' ],
      cream_full_archive: [ "<32>{#p/human}* (You're carrying too much to reach inside.)" ],
      bunbun: pager.create(
         0,
         () =>
            SAVE.data.n.plot === 72
               ? [ "<32>{#p/basic}* Mom says that we're going to a new homeworld soon.", "<32>* ... what's a homeworld?" ]
               : [
                    '<32>{#p/basic}* Mom says that sleeping could recover your health {@fill:#ff0}above your maximum HP{@fill:#fff}.',
                    "<32>* ... what's maximum HP?"
                 ],
         () =>
            SAVE.data.n.plot === 72
               ? [ '<32>{#p/basic}* Do humans have a homeworld?' ]
               : [ '<32>{#p/basic}* Is it something monsters have?' ]
      ),
      emptytable1: () =>
         SAVE.data.b.svr
            ? [ '<32>{#p/human}* (The table strikes you as being rather lonesome.)' ]
            : [ "<32>{#p/basic}* It's just a lonely table.\n* Smells like frosting." ],
      emptytable2: () =>
         SAVE.data.b.svr
            ? [ '<32>{#p/human}* (The table strikes you as being rather lonesome.)' ]
            : [ "<32>{#p/basic}* It's just a lonely table.\n* Smells like hair." ],
      balcony0: [ '<18>{#p/papyrus}ENJOYING THE VIEW?', choicer.create('* (What do you say?)', 'Yes', 'No') ],
      balcony1: [
         "<18>{#p/papyrus}{#f/9}GOOD!\nIT'S ABOUT TIME SOMEONE DID.",
         '<18>{#f/7}SANS BARELY EVER TAKES THE TIME TO LOOK OUTSIDE!!!'
      ],
      balcony2: [
         "<18>{#p/papyrus}{#f/5}OH...\nWELL, THAT'S OKAY...",
         '<18>{#f/4}(SIGH...)\nAT LEAST YOU TRIED WALKING OUT.',
         "<18>{#f/7}SANS WOULDN'T EVEN DO THAT!!!"
      ],
      bedbook1: () =>
         SAVE.data.b.svr
            ? [ "<32>{#p/human}* (You can't seem to understand the contents of this book.)" ]
            : [ "<32>{#p/basic}* It's a book, written in an ancient language." ],
      bedbook3a: [ '<32>{#p/basic}* Would you like me to read it?' ],
      bedbook3b: [ '<32>{#p/basic}* Read it again?' ],
      bedbook4: [ choicer.create('* (Have $(name) read the book?)', 'Yes', 'No') ],
      bedbook5: [
         '<32>{#p/basic}* Okay, here goes...',
         '<32>* "Long ago, two species ruled the solar system: humans and monsters."',
         '<32>* "At first, the monsters were only visitors, soon to return to their own star system."',
         '<32>* "But the monsters became fascinated by humanity, and wanted to co-exist with them."',
         '<32>* "As such, they shared their technology with the humans, and forged an alliance."',
         '<32>* "Over the next few hundred years, monsters and humans lived in peace and harmony."',
         '<32>* "One day, the humans began to fear something about the monsters..."',
         '<32>* "A fear that, without skilled leadership, was allowed to spiral out of control."',
         '<32>* "As time passed, a war broke out between the two species."',
         '<32>* "Many battles and skirmishes would occur all across the solar system..."',
         '<32>* "But the humans, filled with fear and determination, easily took control."',
         '<32>* "Then, on one fateful day, a massive weapon was fired at the monsters\' homeworld."',
         '<32>* "After the monsters\' home planet was destroyed, humans declared victory."',
         '<32>* "A settlement between the two species was signed, and..."',
         '<32>* "The remaining monsters were banished to an abandoned outpost."',
         '<32>* "Then, the humans gathered seven of their brightest minds."',
         '<32>* "A powerful force field was erected, and the monsters were sealed in."',
         "<32>* Well, that's the story."
      ],
      bedbook6: [ '<32>{#p/basic}* Well, if you ever want me to read it, let me know.' ],
      beddoor1: [ "<32>{#p/basic}{#npc/a}* If you want a room, you'll need to ask me first." ],
      beddoor2: [ "<32>{#p/basic}{#npc/a}* If you want a room again, you'll need to ask me first." ],
      beddoor3: [ '<32>{#p/basic}{#npc/a}* Sorry, munchkin!\n* No more vacancies left here!' ],
      candy1: () => [
         SAVE.data.b.svr
            ? '<32>{#p/human}* (You approach the vending machine.)'
            : "<32>{#p/basic}* It's an exoberry-exclusive vending machine.",
         choicer.create('* (Buy exoberries for 8G?)', 'Yes', 'No')
      ],
      candy2: [ "<32>{#p/human}* (You don't have enough G.)" ],
      candy3: [ "<32>{#p/human}* (You're carrying too much.)" ],
      candy4: [ '<32>{#p/human}* (You got the Exoberries.)' ],
      candy5: [ '<32>{#p/human}* (You decide not to buy.)' ],
      capstation1: [
         '<32>{#p/human}* (You look behind the station and find a key.)',
         '<32>{#s/equip}{#p/human}* (The Rusty Key was added to your keyring.)',
         '<32>* (Check your CELL to see all acquired keys.)'
      ],
      capstation2: [ '<32>{#p/human}* (You look behind the station.)', '<32>{#p/basic}* Nothing new back here.' ],
      crossword0: () =>
         world.edgy
            ? [
                 '<25>{#p/sans}* oh, hey there.',
                 '<25>{#p/sans}{#f/2}* if you liked that last puzzle, just wait until you see this one.'
              ]
            : [
                 '<18>{#p/papyrus}{#f/9}HUMAN!!',
                 '<18>{#f/9}YOU HAVE SEEN MY PUZZLES.',
                 '<18>{#f/4}BUT WHAT YOU ARE ABOUT TO SEE IS...'
              ],
      crossword1: () =>
         world.edgy
            ? [
                 '<26>{#p/sans}* no, really.\n* walk up and take a look.',
                 "<25>{#p/sans}* it's right there on the ground."
              ]
            : [
                 "<18>{#p/papyrus}{#f/7}SANS!!\nWHERE'S THE PUZZLE!?",
                 "<25>{#p/sans}* you're lookin' at it.",
                 '<18>{#p/papyrus}{#f/1}WHAT?\nTHAT TABLET LYING ON THE GROUND?',
                 '<18>{#f/4}OKAY...'
              ],
      crossword2: (check: boolean) =>
         world.edgy
            ? [
                 check
                    ? '<25>{#p/sans}* well, how was it?\n* ... too hot to handle?'
                    : "<25>{#p/sans}* can't even bring yourself to look at it, huh?",
                 "<25>* i guess i shouldn't have expected much.",
                 '<26>{#f/3}* oh well.\n* maybe a kakuro puzzle would be easier for you.',
                 '<26>{#f/0}* but i digress.'
              ]
            : [
                 check
                    ? "<18>{#p/papyrus}{#f/7}SANS!!!\nTHAT DIDN'T DO ANYTHING!"
                    : "<18>{#p/papyrus}{#f/7}SANS!!!\nTHEY DIDN'T EVEN LOOK AT IT!",
                 '<25>{#p/sans}* whoops.',
                 "<25>{#f/3}* i knew i should have used today's kakuro puzzle instead.",
                 '<18>{#p/papyrus}{#f/1}WHAT!? KAKURO!?',
                 "<18>{#f/9}I CAN'T BELIEVE YOU SAID THAT!!",
                 '<18>{#f/4}IN MY OPINION...',
                 '<18>{#f/0}SUDOKU IS EASILY THE HARDEST.',
                 '<25>{#p/sans}* what? really, dude?\n* that easy-peasy number shuffle?',
                 "<25>{#f/4}* that's for baby bones.",
                 '<18>{#p/papyrus}{#f/4}UN. BELIEVABLE.',
                 '<18>{#f/9}HUMAN!!!\nSOLVE THIS DISPUTE!',
                 choicer.create('* (Which is harder?)', 'Sudoku', 'Kakuro')
              ],
      crossword3a: [
         '<18>{#p/papyrus}HA! HA! YES!',
         '<18>HUMANS MUST BE VERY INTELLIGENT!',
         '<18>IF THEY ALSO FIND SUDOKU SO DIFFICULT!',
         '<18>{#f/9}NYEH! HEH! HEH HEH!'
      ],
      crossword3b: [
         '<18>{#p/papyrus}{#f/9}YOU TWO ARE WEIRD!',
         '<18>{#f/0}KAKURO PUZZLES ARE SO EASY.',
         "<18>IT'S THE SAME SOLUTION EVERY TIME.",
         '<18>{#f/4}I JUST FILL ALL THE BOXES IN WITH THE LETTER "Z"...',
         '<18>{#f/4}BECAUSE EVERY TIME I LOOK AT A KAKURO...',
         '<18>{#f/9}ALL I CAN DO IS SNORE!!!'
      ],
      crossword3c: [
         '<25>{#p/sans}{#f/3}* by the way, i think i saw a pair of dogs running around...',
         "<25>{#f/0}* i'd tread carefully if i were you."
      ],
      crossword4a: pager.create(0, [ '<25>{#p/sans}* hey, where ya goin there, bucko?' ], [ '<25>{#p/sans}* wrong way.' ]),
      crossword4b: pager.create(0, [ "<25>{#p/sans}* really?\n* it's not THAT bad." ], [ '<25>{#p/sans}* really?' ]),
      crossword5a: [
         '<25>{#p/sans}* thanks for saying "sudoku" just to appease my brother.',
         '<25>{#f/4}* yesterday he got stumped trying to "solve" a star chart.'
      ],
      crossword5b: [
         '<25>{#p/sans}* papyrus...\n* ... finds difficulty in interesting places.',
         '<25>{#f/4}* yesterday he got stumped trying to "solve" a star chart.'
      ],
      crossword6a: [
         "<25>{#p/sans}{#f/3}* i kinda figured you'd skip over it.",
         "<25>{#f/0}* that just seems like the sort of thing you'd do, doesn't it?"
      ],
      crossword6b: [
         "<25>{#p/sans}{#f/3}* i'm surprised.\n* i thought you'd walk right past it.",
         "<25>{#f/2}* perhaps you're not so terrible after all."
      ],
      crossword6c: [ '<25>{#p/sans}{#f/2}* heheh, made you look.' ],
      crossword6d: [
         "<25>{#p/sans}{#f/3}* i'm surprised.\n* i thought you weren't even interested.",
         "<25>{#f/2}* perhaps you're not so terrible after all."
      ],
      doggo1: [
         '<32>{#p/basic}* Did something move?\n* Was it just my imagination?',
         '<32>* If something WAS moving...\n* For example, a human...',
         "<32>* I'll make sure it never leaves my sight again!"
      ],
      doggo2: [
         [
            "<32>{#p/basic}* S-S-S-Something pet me...\n* Something that isn't even m-m-moving...!",
            "<32>* I'm gonna need some dog treats for this."
         ],
         [ '<32>{#p/basic}* A w-w-wrench appeared out of nowhere, h-huh!?!?', '<32>{#p/basic}* ... what a day!' ],
         [],
         [
            '<32>{#p/basic}* A b-b-bully came up and attacked me...\n* Out of n-n-nowhere...!',
            "<32>{#p/basic}* It hurts...\n* I'm gonna go to bed."
         ]
      ],
      doggo3: pager.create(
         0,
         [ '<32>{#p/basic}* Hello?\n* Is anybody there...?' ],
         [ '<32>{#p/basic}* Are you two playing a trick on me?\n* Real funny, guys.' ],
         [ '<32>{#p/basic}* Big lug?\n* Is that you?\n* Come on...' ],
         [ "<32>{#p/basic}* Well, it's not the tall skeleton...\n* He's too loud." ],
         [ '<32>{#p/basic}* Whoever you are, knock it off!!!' ],
         [ '<32>{#p/basic}* ...' ]
      ),
      doggo3x: [ '<32>{#p/basic}* (Snore... snore...)' ],
      drop_chip: [
         '<32>{#p/basic}* Did you just...\n* Drop the part of me I had given you?',
         '<32>* I have no words for you...\n* Begone!'
      ],
      drop_cream: [ "<32>{#p/basic}* You know, you're lucky I'm busy advertising." ],
      eat_chip: [
         '<32>{#p/basic}* Did you just...\n* Consume the part of me I had given you?',
         '<32>* I have no words for you...\n* Begone!'
      ],
      eat_cream: [ '<32>{#p/basic}* Nice to see you enjoying your Ice Dream!\n* Very nice!' ],
      genotext: {
         asriel1: () =>
            [ [ '<25>{#p/asriel2}{#f/9}* Just follow my lead...' ], [ '<25>{#p/asriel2}{#f/16}* This way.' ] ][
               Math.min(SAVE.flag.n.ga_asriel1++, 1)
            ],
         asriel2: () =>
            [
               [ "<25>{#p/asriel2}{#f/2}* Well, well... if it isn't the great Papyrus standing just ahead." ],
               [ '<25>{#p/asriel2}{#f/3}* Well, well... here we go again.' ]
            ][Math.min(SAVE.flag.n.killed_sans, 1)],
         asriel3: () =>
            [
               [ "<25>{#p/asriel2}{#f/1}* Let's go introduce ourselves, shall we?" ],
               [ '<25>{#p/asriel2}{#f/4}* You know the drill by now.' ]
            ][Math.min(SAVE.flag.n.killed_sans, 1)],
         asriel4: [ '<25>{*}{#p/asriel2}{#f/5}* Howdy!{^5}{%}' ],
         asriel5: [ '<18>{*}{#p/papyrus}{#f/1}WHAT THE- {%}' ],
         asriel6: () =>
            [
               [
                  '<25>{#p/asriel2}{#f/15}* Well... $(name)...',
                  '<25>{#f/17}* Maybe you could take over from here?',
                  "<25>{#f/16}* I mean, I'm fine, really.",
                  "<25>{#f/13}* I just think you'd be better at this than me..."
               ],
               [ "<25>{#p/asriel2}{#f/16}* Okay, yeah.\n* I'll, uh... let you take over now." ],
               [ '<25>{#p/asriel2}{#f/15}* So, uh... onwards?' ],
               [ '<25>{#p/asriel2}{#f/15}* ...' ]
            ][Math.min(SAVE.flag.n.ga_asriel6++, 3)],
         asriel9: [ "<25>{#p/asriel2}{#f/8}* Psst, let's wait and see what he does." ],
         asriel10: () =>
            [
               [
                  '<25>{#p/asriel2}{#f/15}* Wow.\n* To see Papyrus in such a state...',
                  "<25>{#f/16}* ... it's certainly unexpected, isn't it?",
                  '<25>{#f/13}* Oh, $(name)...',
                  "<25>{#f/1}* I think we're going to have a lot of fun."
               ],
               [ '<25>{#p/asriel2}{#f/16}* Poor, poor Papyrus.' ]
            ][Math.min(SAVE.flag.n.ga_asriel10++, 1)],
         asriel17: () =>
            [ [ "<25>{#p/asriel2}{#f/16}* Golly... some people just don't get it." ], [ '<25>{#p/asriel2}{#f/4}* Tch.' ] ][
               Math.min(SAVE.flag.n.ga_asriel17++, 1)
            ],
         asriel24: () =>
            [ [ '<25>{#p/asriel2}{#f/4}* What a waste of time.' ], [ '<25>{#p/asriel2}{#f/3}* Huh.' ] ][
               Math.min(SAVE.flag.n.ga_asriel24++, 1)
            ],
         asriel26: () =>
            [
               [
                  "<26>{#p/asriel2}{#f/3}* Well, that's the canine unit gone.",
                  '<26>{#p/asriel2}{#f/4}* Only one bridge left between us and town.',
                  '<25>{#f/1}* ... stay behind me.'
               ],
               [ '<25>{#p/asriel2}{#f/3}* Into town we go...' ]
            ][Math.min(SAVE.flag.n.ga_asriel26++, 1)],
         asriel28: () =>
            [
               [
                  "<25>{#p/asriel2}{#f/6}* Okay, $(name).\n* The town's all yours.",
                  "<25>{#f/7}* In the meantime, I have to do something that'll be important later.",
                  "<25>{#f/1}* I'll be back before you know it."
               ],
               [ '<25>{#p/asriel2}{#f/1}* See you around the back of town.' ]
            ][Math.min(SAVE.flag.n.ga_asriel28++, 1)],
         asriel29: () =>
            [
               SAVE.data.b.papyrus_secret
                  ? [
                       '<25>{#p/asriel2}{#f/2}* Hee.\n* Hee.\n* Hee....',
                       "<25>{#f/10}* ... wait, where's Papyrus?",
                       '<25>{#f/10}* ...',
                       "<25>{#f/4}* Golly, $(name), I didn't think you'd kill him THAT quickly."
                    ]
                  : [
                       '<25>{#p/asriel2}{#f/2}* Hee.\n* Hee.\n* Hee....',
                       "<25>{#f/1}* It's about time that bonehead paid the price for his mercy.",
                       '<25>{#f/13}* Golly.\n* He wanted SO badly to forgive you.',
                       "<25>{#f/16}* But, let's be honest with ourselves here...",
                       "<25>{#f/1}* We've got bigger fish to fry up ahead."
                    ],
               [ '<25>{#p/asriel2}{#f/13}* Oh well.\n* The skeleton died for nothing again.' ],
               [
                  "<25>{#p/asriel2}{#f/13}* You know, they say the third time's the charm...",
                  '<25>{#f/16}* Too bad he only ever gets one.'
               ],
               [
                  "<25>{#p/asriel2}{#f/6}* That's four times you've killed him now.",
                  "<25>{#f/8}* I'm starting to think you enjoy this..."
               ],
               [ '<25>{#p/asriel2}{#f/15}* Again...?' ]
            ][Math.min(SAVE.flag.n.ga_asriel29++, 4)],
         asriel30: () => [
            '<25>{#p/asgore}{#f/1}* ...',
            '<25>{#f/1}* Howdy, Asriel.',
            '<25>{#f/2}* ...',
            '<25>{#f/3}* We need to talk.',
            ...[
               [
                  '<25>{#p/asriel2}{#f/6}* Talk?\n* About what?',
                  '<25>{#f/6}* Why are you even here?',
                  "<25>{#f/7}* You know you'll just die to me anyway.",
                  '<25>{#f/8}* Speaking of which... {%15}'
               ],
               [
                  "<25>{#p/asriel2}{#f/8}* Talk?\n* Don't waste my time.",
                  "<25>{#f/6}* I KNOW you're just using a hologram.",
                  '<25>{|}{#p/asgore}{#f/5}* How did you- {%}',
                  '<25>{#p/asriel2}{#f/1}* Hush.'
               ]
            ][Math.min(SAVE.flag.n.ga_asriel30x, 1)]
         ],
         asriel30a: [
            '<25>{#p/asriel2}{#f/8}* Seriously?\n* A hologram?',
            '<25>{#f/6}* I knew you were a coward, but this is a whole new level.'
         ],
         asriel30b: [
            '<25>{#p/asgore}{#f/1}* Do you not have anything better to do?',
            '<25>{#p/asriel2}{#f/8}* ...',
            '<25>{|}{#p/asgore}{#f/3}* Look, son, I only- {%}',
            "<25>{#p/asriel2}{#f/7}* I'm not your son.\n* I haven't BEEN your son for a long time.",
            '<25>{#p/asgore}{#f/2}* ...',
            '<25>{#p/asgore}{#f/1}* Alright, Asriel.\n* Do you not see what you are doing to yourself?',
            "<25>{#f/2}* You've become callous.\n* Unforgiving.",
            "<25>{#p/asriel2}{#f/8}* Ugh, don't say it like you actually care about me, dad.",
            '<25>{#p/asgore}{#f/5}* ...',
            '<25>{#p/asriel2}{#f/9}* Oh, sorry...\n* Did I say "Dad?"\n* I meant "Asgore."',
            '<25>{#f/1}* Forgive me.',
            '<25>{#p/asgore}{#f/3}* ...\n* Really now...',
            '<25>{#f/5}* You must reconsider what you are doing, not for our sakes...',
            '<25>{#f/6}* But for yours!',
            '<25>{#p/asriel2}{#f/8}* ...',
            '<25>{#p/asriel2}{#f/7}* ... give me a break.',
            "<26>{#f/6}* It's OBVIOUS you're\n  just here to wind me up.",
            '<25>{#p/asgore}{#f/3}* ...',
            '<25>{#p/asriel2}{#f/6}* ...',
            '<25>{#p/asgore}{#f/7}* You must consider the gravity of your choices!',
            "<25>{#p/asriel2}{#f/15}* Or what? I'll float off into space, never to be seen again?",
            "<25>{#f/16}* Come on $(name), we're done here."
         ],
         asriel30c: [ '<25>{*}{#p/asgore}{#f/8}* Asriel, please!\n* I only want to help!{^999}' ],
         asriel30d: () =>
            [
               [ '<25>{#p/asriel2}{#f/3}* Ready yourself, $(name).', "<26>{#f/4}* This is Undyne's domain." ],
               [ '<25>{#p/asriel2}{#f/4}* Take us in.' ]
            ][Math.min(SAVE.flag.n.ga_asriel30d++, 1)],
         papyrusSolo1a: [
            '<18>{#p/papyrus}{#f/31}SANS?\nIS THAT A HUMAN?',
            "<18>{#f/5}IT IS, ISN'T IT?",
            '<18>{#f/32}NYEH...\nUNDYNE WILL FINALLY...',
            "<18>{#p/papyrus}{#f/31}I'LL GET TO JOIN THE ROYAL GUARD...",
            "<18>{#f/5}DOESN'T THAT MAKE YOU HAPPY?",
            "<25>{#p/asriel2}{#f/3}* You can't keep pretending, Papyrus.\n* He's gone.",
            '<18>{|}{#p/papyrus}{#f/5}BUT- {%}',
            "<25>{#p/asriel2}{#f/3}* It's over.\n* You're wasting your time on him.", // asriel inevitably motivates papyrus to feel better
            "<18>{#p/papyrus}{#f/6}BUT IT CAN'T BE...\nSANS, HE...",
            '<18>{#f/31}HE PROMISED...',
            "<25>{#p/asriel2}{#f/8}* That bonehead is the LAST person I'd trust to keep a promise.",
            "<26>{#f/9}* Not that I'm any better.", // he smirks when he says this
            '<18>{#p/papyrus}{#f/31}...',
            "<18>{#f/3}I'M SORRY.\nI HAVE TO GO..."
         ],
         papyrusSolo2a: [
            '<18>{#p/papyrus}{#f/31}WELL, I JUST GOT BACK FROM UNDYNE...',
            '<18>{#f/31}SHE TELLS ME THE KING HAS AN OFFER FOR YOU.',
            '<25>{#p/asriel2}{#f/6}* ...',
            '<18>{#p/papyrus}{#f/3}HIS EXACT WORDS WERE "I WANT TO SEE MY SON."',
            '<18>{#f/7}...',
            "<18>{#f/7}I CAN'T BELIEVE THE PRINCE KILLED MY BROTHER!",
            '<25>{|}{#p/asriel2}{#f/8}* Actually, it was you we were trying to- {%}',
            '<18>{#p/papyrus}{#f/7}ENOUGH!!',
            '<18>{#f/7}YOU BETRAYED YOUR OWN SOCIETY!\nYOUR OWN PEOPLE!',
            '<18>{#f/7}AND FOR WHAT!?',
            '<18>{#f/7}A PETTY ATTEMPT AT SELF-AMUSEMENT?',
            "<25>{#p/asriel2}{#f/16}* Yes, Papyrus.\n* That's exactly what this is for.",
            "<18>{#p/papyrus}{#f/7}AND I'M BETTER OFF FOR IT!",
            '<18>{#p/papyrus}{#f/4}AS FOR YOU, HUMAN...',
            "<18>{#f/7}DON'T THINK I CAN'T SEE WHAT'S GOING ON.",
            "<18>{#f/7}IT'S OBVIOUS YOU'RE THE ONE CALLING THE SHOTS!",
            '<25>{#p/asriel2}{#f/8}* How observant.',
            '<25>{#f/7}* Guess we should just admit defeat to you here and now, huh?',
            '<18>{#p/papyrus}{#f/31}...',
            '<25>{#p/asriel2}{#f/4}* Let me be clear.\n* I do admire the effort.',
            "<25>{#f/3}* But we've got our own plans to see to.",
            "<18>{#p/papyrus}{#f/4}JUST SO YOU KNOW, UNDYNE'S PROBABLY WATCHING US.",
            '<25>{#p/asriel2}{#f/3}* And your point is?',
            "<25>{#f/4}* ... look Papyrus, it doesn't matter what you or anyone else does.",
            '<25>{#f/1}* When the two of us are together, NOTHING can bring us apart.',
            '<18>{#p/papyrus}{#f/7}UGH!!!'
         ],
         papyrusSolo3: [ '<25>{#p/asriel2}{#f/3}* Howdy.' ],
         papyrusSolo3a: () => [
            '<18>{#p/papyrus}{#f/31}YOU KNOW...',
            '<18>{#f/31}I OVERHEARD ALPHYS TALKING...',
            '<18>{#f/5}AND SHE MENTIONED SOMETHING LIKE "TURN BACK TIME?"',
            "<18>{|}{#f/32}{#x1}I CAN'T BE SURE, BUT IT SOUNDS LIKE- {%}",
            '<25>{#p/asriel2}{#f/6}* No.',
            '<18>{|}{#p/papyrus}{#f/6}BUT SHE SAID YOU MIGHT BE ABLE TO- {%}',
            ...(SAVE.flag.n.genocide_milestone < 5
               ? [ '<25>{#p/asriel2}{#f/6}* No.' ]
               : SAVE.flag.n.genocide_milestone < 6
               ? [ "<25>{#p/asriel2}{#f/6}* No.\n* Though, I'm sure she'd love it if I did." ]
               : [ "<25>{#p/asriel2}{#f/6}* No.\n* And she'll be dead in the end, anyway." ]),
            '<18>{#p/papyrus}{#f/31}BUT, IF YOU REALLY CAN ERASE WHAT HAPPENED...',
            '<18>{#f/5}THEN WHY NOT?',
            "<18>{#f/31}A-AND, IN THE NEXT TIMELINE... I'LL TAKE HIS PLACE.",
            "<18>{#f/3}THEN HE WOULDN'T HAVE TO DIE, RIGHT?",
            "<25>{#p/asriel2}{#f/6}* ...\n* Trust me, I've already seen that timeline.",
            "<25>{#f/7}* It's BORING.",
            '<18>{#p/papyrus}{#f/3}...',
            '<18>{#f/6}BUT WHAT IF I SHOW YOU THIS PUZZLE?',
            '<18>{#f/32}IT MIGHT HELP TO ALLEVIATE YOUR BOREDOM...',
            '<25>{#p/asriel2}{#f/15}* ...',
            '<25>{#p/asriel2}{#f/15}* If it makes you feel better, I guess.',
            '<18>{#p/papyrus}OH... OH!',
            "<18>{#f/0}THAT'S GREAT!!",
            "<18>{#f/0}YOU'RE ALREADY CHANGING YOUR MIND!!",
            '<25>{#p/asriel2}{#f/8}* ...',
            '<25>{#p/papyrus}{#f/6}...',
            '<18>{|}{#f/5}WELL, HERE ARE THE RULES OF THE- {%}',
            '<25>{#p/asriel2}{#f/7}* We already know the rules, idiot.',
            '<18>{#p/papyrus}{#f/31}... OH...',
            '<18>{#f/6}UH, WELL THEN!!\nWITHOUT FURTHER ADO...',
            "<18>{#f/9}LET'S FIND OUT WHAT OUR RANDOM NUMBER WILL BE!!"
         ],
         papyrusSolo4a: [
            '<18>{#p/papyrus}{#f/3}ASRIEL.',
            '<25>{#p/asriel2}{#f/6}* Papyrus.',
            '<18>{#p/papyrus}{#f/31}...',
            '<18>{#f/31}WHY?',
            '<18>{#f/31}WHY WOULD YOU DO THIS?',
            "<18>{#f/3}MONSTERS AREN'T SUPPOSED TO BE LIKE THIS...",
            "<18>{#f/5}WHERE'S YOUR LOVE?\nYOUR COMPASSION?",
            '<18>{#f/31}YOUR... MERCY...',
            '<25>{#p/asriel2}{#f/2}* ...\n* Oh, you sweet stellar star child...',
            '<25>{#f/1}* I lost those things a LONG time ago.',
            "<18>{#p/papyrus}{#f/31}BUT...\nI DON'T GET IT...",
            '<18>{#f/5}HOW CAN A MONSTER SO PURE OF MIND...',
            '<18>{#f/31}... BE TURNED SO COMPLETELY TO THE DARK SIDE?',
            '<25>{#p/asriel2}{#f/1}* You really wanna know?',
            '<18>{#p/papyrus}{#f/3}...',
            '<18>{#f/3}YES...',
            '<25>{#p/asriel2}{#f/10}* But do you really, really wanna know?',
            '<18>{#p/papyrus}{#f/31}YES.',
            '<25>{#p/asriel2}{#f/3}* Say it louder.',
            '<18>{#p/papyrus}{#f/5}YES!',
            '<26>{#p/asriel2}{#f/1}* With an exoberry on top.',
            '<18>{#p/papyrus}{#f/7}YES!\nWITH AN EXOBERRY ON TOP, DAMN IT!',
            '<25>{#p/asriel2}{#f/1}* Hee hee hee...',
            "<25>{#f/1}* Alright, I'll tell you.",
            "<25>{#f/15}* In fact, it'll only take one word...",
            '<18>{#p/papyrus}{#f/4}OH MY GOD, JUST SAY IT ALREADY...'
         ],
         papyrusSolo4b: [
            '<25>{*}{#p/asriel2}{#f/14}{@random:1.1,1.1}{@fill:#f00}* $(name).{%100}',
            '<18>{#p/papyrus}{#f/32}...!',
            '<25>{#p/asriel2}{#f/5}* Hah!\n* Hahaha!\n* The look on your face!'
         ],
         papyrusSolo4c: [ '<18>{#p/papyrus}{#f/31}I...', '<18>{#f/3}... NO...' ],
         papyrusSolo4d: [
            "<18>{#p/papyrus}{#f/7}NO, YOU'RE WRONG.",
            "<18>{#f/7}YOU ARE THE ONE WHO'S BEEN TRYING TO BRING ME DOWN.",
            "<18>{#f/7}YOU ARE THE ONE WHO'S FED ME LIE AFTER LIE.",
            '<18>{#f/9}BUT I, PAPYRUS...',
            '<18>{#f/9}FINALLY UNDERSTAND THE {@fill:#f00}REAL TRUTH{@fill:#fff}.',
            "<25>{#p/asriel2}{#f/13}* Oh?\n* And what's that?"
         ],
         papyrusSolo4e: [ "<18>{#p/papyrus}{#f/34}YOU'RE NOT {@fill:#f00}ASRIEL{@fill:#fff}." ],
         papyrusSolo4f: [
            '<18>{#f/31}{@fill:#f00}ASRIEL{@fill:#fff} WOULD NEVER ACT LIKE THIS.',
            '<18>{#f/5}{@fill:#f00}ASRIEL{@fill:#fff} WAS A KIND SOUL.',
            '<18>{#f/5}{@fill:#f00}ASRIEL{@fill:#fff} BELIEVED IN PEOPLE...',
            '<18>{#f/31}HE BELIEVED IN HUMANITY BEFORE ANYONE ELSE DID.',
            '<18>{#f/4}YOU, ON THE OTHER HAND...',
            '<18>{#f/7}YOU JUST WANT TO USE THEM FOR YOUR OWN ENDS!',
            "<18>{#f/4}AND FRANKLY, I DON'T CARE WHAT YOU HAVE TO SAY.",
            '<18>{#f/9}I STILL HAVE HOPE FOR THAT HUMAN.',
            "<25>{#p/asriel2}{#f/8}* Well, if you've got so much faith in them...",
            '<25>{#f/7}* Then prove me wrong.',
            "<25>{#f/3}* I'll let you take them on, one on one.",
            "<25>{#f/3}* If they spare you, then I'll admit I was wrong.",
            '<25>{#f/4}* But if they kill you, which they inevitably will...',
            "<25>{#f/1}* You'll realize that I was right, and that HE died for nothing.",
            '<25>{#f/1}* How does that sound?',
            '<18>{#p/papyrus}{#f/9}...\nI ACCEPT.',
            '<25>{#p/asriel2}{#f/3}* Splendid.',
            '<25>{#f/4}* See you never.'
         ]
      },
      houz: () =>
         SAVE.data.b.svr
            ? [ '<32>{#p/human}* (You place your hands on the heavily scratched door.)' ]
            : [ '<32>{#p/basic}* The door is covered in cat- claw scratches.' ],
      gonezo: () =>
         world.bullied || SAVE.flag.n.pacifist_marker_bully > 3
            ? [ '<32>{#p/basic}* ... but everybody ran.' ]
            : [ '<32>{#p/basic}* ... but nobody came.' ],
      garbanzo: [ '<32>{#p/human}* (But there was nobody around to occupy the seat.)' ],
      doggonopoggo: () =>
         SAVE.data.b.svr
            ? [
                 [
                    "<25>{#p/asriel1}{#f/20}* Doggo's probably on the transport ship by now.\n* Like everyone else.",
                    "<25>{#f/13}* Though, if any dog were to get there first, it'd be him.",
                    "<25>{#f/17}* Doggo's always been quick on his paws..."
                 ],
                 [
                    '<25>{#p/asriel1}{#f/13}* Once, when Dogamy and Dogaressa got a little too, uh...',
                    '<25>{#f/15}* Let\'s just call it "distracted" with themselves...',
                    '<25>{#f/13}* They walked off the edge of the path and floated away together.',
                    '<25>{#f/16}* By the time a search party was called, Doggo already found them.',
                    '<25>{#f/20}* When he heard what they were doing, though, he quickly realized...',
                    "<25>{#f/17}* ... they weren't in ANY rush to be rescued."
                 ],
                 [
                    "<25>{#p/asriel1}{#f/17}* Doggo also happens to be Dr. Alphys's favorite dog.",
                    '<25>{#f/15}* Doggo and the doctor spent a lot of time together...',
                    '<25>{#f/16}* ... since Doggo was in a rough spot with finding companionship.',
                    "<25>{#f/17}* Thankfully, Doggo's love story has a happy ending.",
                    '<25>{#f/20}* That Ice Wolf is as big and strong as he could have hoped for.'
                 ],
                 [ "<25>{#p/asriel1}{#f/17}* Doggo's got a thing for big, strong wolves.\n* It's adorable." ]
              ][Math.min(asrielinter.doggonopoggo++, 3)]
            : [ "<32>{#p/basic}* Nobody's home." ],
      housebloc: () =>
         SAVE.data.b.svr ? [ "<32>{#p/human}* (You can't seem to find a way in.)" ] : [ "<32>{#p/basic}* It's locked." ],
      innkeep1a: pager.create(
         0,
         [
            "<32>{#p/basic}{#npc/a}* Welcome to Starred Inn!\n* Starton's premier hotel!",
            '<32>* One night will cost you 60G.',
            choicer.create('* (Get a room?)', 'Yes', 'No')
         ],
         [
            '<32>{#p/basic}{#npc/a}* Changed your mind?',
            '<32>* Remember, one night is 60G.',
            choicer.create('* (Get a room?)', 'Yes', 'No')
         ]
      ),
      innkeep1b: pager.create(
         0,
         [
            '<32>{#p/basic}{#npc/a}* Back again?\n* Remember, one night is 60G.',
            choicer.create('* (Get a room again?)', 'Yes', 'No')
         ],
         [ '<32>{#p/basic}{#npc/a}* Changed your mind?', choicer.create('* (Get a room again?)', 'Yes', 'No') ]
      ),
      innkeep1c: pager.create(
         0,
         [
            '<33>{#p/basic}{#npc/a}* Back again?\n* Well, stay as long as you like!',
            choicer.create('* (Get a room again?)', 'Yes', 'No')
         ],
         [ '<32>{#p/basic}{#npc/a}* Changed your mind?', choicer.create('* (Get a room again?)', 'Yes', 'No') ]
      ),
      innkeep2a: [
         "<32>{#p/basic}{#npc/a}* ... you don't even have 60G?",
         "<32>* Oh! You poor thing.\n* I can only imagine what you've been through.",
         '<32>* One of the rooms upstairs is empty, you can sleep there for free, okay?'
      ],
      innkeep2b: [ "<32>{#p/basic}{#npc/a}* Here's your room key.\n* Remember to bundle up!" ],
      innkeep2c: [ "<32>{#p/basic}{#npc/a}* Sorry, you don't have enough G..." ],
      innkeep3a: [ '<32>{#p/basic}{#npc/a}* Hiya!\n* You look like you had a great sleep.' ],
      innkeep3b: [ '<32>* Which is incredible...\n* ... considering you were only up there for a few minutes.' ],
      innkeep3c: [ '<32>* Feel free to come back if you get tired.' ],
      innkeep3d: [ "<32>* Here's your money back.\n* You can pay me if you're going to stay overnight." ],
      innkeep4: [ "<32>* Not in a sleepy mood?\n* Well, I'll always be here if you need me!" ],
      innkeep5: [
         '<32>{#p/basic}{#npc/a}* Hello!\n* Sorry, no time for a nap...',
         '<32>* Starred Inn is shutting down so we can leave to find a new homeworld.'
      ],
      innkeep6: [
         "<32>{#p/basic}{#npc/a}* Oh, there you are.\n* I've been worrying about you!",
         '<32>* Things are going to be OK, you hear?',
         "<32>* We're all going to settle on a new homeworld soon...",
         "<32>* There's bound to be a place you can stay there!"
      ],
      kidd1: pager.create(
         2,
         [ "<25>{#p/kidd}{#f/1}* What's up?" ],
         [ '<25>{#p/kidd}{#f/1}* Yo, howzzitgoin?' ],
         [ '<25>{#p/kidd}{#f/1}* Hey, hey!' ],
         [ '<25>{#p/kidd}{#f/1}* Nice to see you, haha.' ],
         [ "<25>{#p/kidd}{#f/1}* Woah, dude, what's up?" ]
      ),
      kidd2: pager.create(
         0,
         () =>
            game.room === 's_town1' // NO-TRANSLATE
               ? [
                    "<25>{#p/kidd}{#f/1}* Yo, you're a kid too, right?",
                    "<25>{#p/kidd}{#f/1}* I can tell 'cause you're wearing a striped shirt."
                 ]
               : [
                    '<25>{#p/kidd}{#f/7}* Wait, you read books too!?',
                    '<25>{#p/kidd}{#f/1}* That librarby taught me everything I know about monster history!',
                    "<25>{#p/kidd}{#f/3}* I can't even imagine what living on a planet is like..."
                 ],
         () =>
            game.room === 's_town1' // NO-TRANSLATE
               ? [ '<25>{#p/kidd}{#f/1}* I wonder if that short skeleton is an adult or a kid.' ]
               : [ '<25>{#p/kidd}{#f/3}* Have you ever lived on a planet?' ]
      ),
      marriage1: [
         "<32>{#p/basic}* What's that smell?\n* (Where's that smell?)",
         "<32>* If you're a smell...\n* (... identify yoursmellf!)"
      ],
      marriage2: [
         "<32>{#p/basic}* Hmmm...\n* Here's that weird smell.",
         '<32>* It makes me want to eliminate...',
         '<32>* (... eliminate YOU!)'
      ],
      marriage3a: [
         '<32>{#p/basic}* Dogs can pet other dogs???\n* (A new world has opened up for us...)',
         '<32>* Thanks, weird puppy!'
      ],
      marriage3b: [
         '<32>{#p/basic}* Weird smells can bring good things...\n* (Friendly fun fetch!)',
         '<32>* Thanks, weird smell!\n* (It sure was fun to catch a "wrench" in the works!)'
      ],
      marriage3c: [
         "<32>{#p/basic}* It's getting harder and harder to sniff things...\n* (Getting harder to see...)",
         "<32>* Let's get out of here!"
      ],
      marriage3d: [
         '<32>{#p/basic}* That weird puppy came out of nowhere...\n* (Almost killed us...)',
         "<32>* Let's get out of here!"
      ],
      marriage4: [
         "<32>{#p/basic}* Where's the prince?\n* (Did we come the right way?)",
         '<32>* We must stop that menace...\n* (... and his human companion!)'
      ],
      marriage5: [ '<32>{#p/basic}* Hmmm...\n* Here they are...', "<32>* (Let's capture them!)" ],
      maze1: () =>
         world.edgy
            ? [
                 '<25>{#p/sans}{#f/0}* welcome back.',
                 "<25>{#p/sans}{#f/3}* it's a shame papyrus can't be here, because...",
                 "<25>{#p/sans}{#f/2}* he's been working very hard on this puzzle for a long time.",
                 "<25>{#p/sans}{#f/0}* but that's alright.",
                 "<25>{#p/sans}{#f/0}* i promised him earlier that i'd show it to you, so here goes."
              ]
            : [
                 '<18>{#p/papyrus}OHO, THE HUMAN ARRIVES!',
                 '<18>MY BROTHER AND I HAVE CREATED MANY PUZZLES.',
                 '<18>{#f/9}ARE YOU UP FOR THE CHALLENGE, HUMAN!?',
                 choicer.create('* (What do you say?)', 'Yes', 'No'),
                 '<18>{#p/papyrus}CORRECT ANSWER!\nFOR YOU SEE...'
              ],
      maze2a: [
         '<18>{#x4}{#f/9}NO CRAFTSMAN HAS EVER MADE TRAPS AS FINE AS ME!',
         "<18>{#f/0}THEY'RE PRACTICALLY IRRESISTIBLE!",
         "<25>{#x1}{#p/sans}{#f/2}* maybe you're the one who's irresistible.",
         '<18>{#p/papyrus}{#f/1}REALLY!?'
      ],
      maze2b: [
         '<18>{#x4}{#f/9}NO HUMAN HAS EVER BESTED A PUZZLE BY THE GREAT PAPYRUS!',
         '<25>{#x1}{#p/sans}{#f/4}* no human has even had the chance to, bro.',
         "<18>{#p/papyrus}{#x3}{#f/7}UGH, THAT'S BESIDES THE POINT!!"
      ],
      maze3: [ '<18>{#x1}{#f/0}ANYWAY, THIS HERE IS WHAT I LIKE TO CALL...' ],
      maze3a: [
         '<18>"THE WALL OF FIRE!!"',
         '<25>{#p/sans}* couldn\'t you just call it "the firewall?"\n* it\'d save time.',
         "<18>{#p/papyrus}{#f/4}DR. ALPHYS WOULD THINK I'M MIS- USING THE TERM.",
         "<25>{#p/sans}* i dunno bro, she's really into that kinda stuff. in fact...",
         "<30>{#f/2}* i bet she'd find it {@fill:#ff0}hot{@fill:#fff}."
      ],
      maze4: [ '<18>{#p/papyrus}{#x3}{#f/7}NOT NOW, SANS!!' ],
      maze5: () =>
         world.edgy
            ? [
                 '<25>{#p/sans}{#f/0}* it\'s called "the firewall."',
                 "<25>{#p/sans}{#f/2}* y'know.\n* like the firewall on a computer.",
                 '<25>{#p/sans}* the idea behind this one is to get to the other side.',
                 '<25>{#p/sans}* simple, right?',
                 "<25>{#p/sans}{#f/3}* though, i've tested this puzzle myself, and i gotta say...",
                 "<25>{#p/sans}{#f/2}* it's not as easy as it looks."
              ]
            : [
                 "<25>{#x2}{#p/sans}* ok, i'll stop {#x1}now.",
                 "<25>{|}{#f/4}* i mean, since you've {#x2}lit a {@fill:#ff0}fire{@fill:#fff} under- {%}",
                 '<18>{#p/papyrus}ANYWAY, THE IDEA BEHIND THIS PUZZLE IS SIMPLE.',
                 '<18>BECAUSE ALL YOU HAVE TO DO...',
                 '<18>{#f/9}IS MAKE IT TO THE OTHER SIDE!!',
                 '<18>{#f/0}GOOD LUCK!!\nNYEH HEH HEH!!'
              ],
      maze6: pager.create(
         0,
         () =>
            world.edgy
               ? [
                    '<25>{#p/sans}{#f/0}* what are you going back there for, huh?',
                    '<25>{#p/sans}{#f/3}* come on.\n* at least try to be a good sport.'
                 ]
               : [ "<18>{#p/papyrus}{#x2}{#f/7}WHERE DO YOU THINK YOU'RE GOING!?" ],
         () => (world.edgy ? [ '<25>{#p/sans}{#f/0}* seriously?' ] : [ '<18>{#p/papyrus}{#x2}{#f/7}GET BACK HERE!!' ])
      ),
      maze7: [
         [
            '<18>{#p/papyrus}ARE YOU AFRAID OF THE FLAMES??',
            "<18>{#f/4}DON'T WORRY, THEY CAN'T ACTUALLY\nHARM YOU.",
            '<18>{#f/0}AS SANS WOULD SAY, THEY\'RE JUST "PLEASANTLY WARM."',
            '<25>{#p/sans}* actually, i picked that saying up from a friend.',
            '<18>{#p/papyrus}{#f/4}... OH.'
         ],
         [
            '<18>{#p/papyrus}ARE YOU ANXIOUS ABOUT FAILING THE PUZZLE??',
            "<18>IF THAT'S THE CASE, THEN YOU MUST KNOW...",
            '<18>{#x4}{#f/9}I, THE GREAT PAPYRUS, WOULD NOT JUDGE YOU FOR IT!',
            "<18>{#f/0}AS EVERY STAR CHEF KNOWS, IT'S THE THOUGHT THAT COUNTS.",
            '<18>{#x1}SO GO ON, DO TRY YOUR BEST!'
         ],
         [
            '<18>{#p/papyrus}{#f/4}(SANS, WHAT IS THE HUMAN DOING??)',
            '<25>{#p/sans}* they could just be studying the pattern.',
            '<18>{#p/papyrus}{#f/4}(OH, TRUE.)',
            '<18>{#f/9}IN THAT CASE, PROCEED WHEN READY!'
         ]
      ],
      maze8: () =>
         world.edgy
            ? [ '<25>{#p/sans}{#f/0}* ouch.\n* nice try, though.' ]
            : [
                 '<18>{#p/papyrus}NYEH HEH HEH!\nWELL THEN.',
                 "<18>{#f/9}IT SEEMS YOU'VE BEEN JAPED BY THE GREAT PAPYRUS!",
                 '<18>{#f/0}BUT FRET NOT!',
                 '<18>FOR YOU SEE, MY TRAPS ARE NO SLOUCH.',
                 "<18>{#f/9}YOU CAN'T BE BLAMED FOR FAILING ONE SO EASILY!!"
              ],
      maze9: () =>
         world.edgy
            ? [ "<25>{#p/sans}{#f/0}* huh.\n* guess you're smarter than you look." ]
            : [
                 '<18>{#p/papyrus}{#f/1}WHAT!?',
                 '<18>{#f/7}HOW DID YOU MANAGE TO DO THAT!?!?',
                 '<18>THAT WAS SUPPOSED TO BE TOTALLY IMPOSSIBLE!',
                 '<18>{#f/9}... WELL THEN!\nI SHALL HAVE TO STEP UP MY GAME!'
              ],
      maze10: () =>
         world.edgy
            ? [
                 "<25>{#p/sans}{#f/0}* well, that's it.",
                 '<25>{#p/sans}{#f/3}* ... thanks for playing along, at least.',
                 "<25>{#p/sans}{#f/0}* in the meantime, i've got another puzzle to set up.",
                 "<25>{#p/sans}{#f/2}* we'll be seeing each other again."
              ]
            : [
                 '<18>{#f/4}IN ANY CASE...',
                 '<18>{#f/0}I AM EXCITED FOR WHAT COMES NEXT!',
                 '<18>{#f/4}A PUZZLE SO CONFOUNDING...',
                 "<18>{#f/1}EVEN TERRESTRIA HERSELF COULDN'T SOLVE IT!!!",
                 "<25>{#p/sans}* terrestria?\n* isn't she literally the oldest monster alive?",
                 '<18>{|}{#p/papyrus}{#f/1}UH...\nWELL YES, BUT- {%}',
                 "<25>{#p/sans}* dang, i didn't know you thought THAT highly of me.",
                 '<18>{#p/papyrus}{#f/4}WHAT.',
                 "<25>{|}{#p/sans}* like, if even SHE can't do it, then- {%}",
                 '<18>{#p/papyrus}{#f/7}{#x3}I GET THE POINT!!'
              ],
      maze11: [ '<18>{#p/papyrus}{#f/7}SANS, WE HAVE PUZZLES TO PREPARE!!', '<18>COME ON!' ],

      nicecreamSc1: [
         "<32>{#p/basic}* I don't understand why these aren't selling...",
         "<32>* It's the perfect place for something nice..."
      ],
      nicecreamSc2: () => [
         SAVE.data.n.plot > 20.2
            ? '<32>{#p/basic}* OH!!!!\n* ... you came back!'
            : SAVE.data.b.s_state_scorereaction1 || SAVE.data.n.plot === 20.2
            ? "<32>{#p/basic}* WAIT!!!!\n* Maybe YOU'D like something!"
            : '<32>{#p/basic}* OH!!!!\n* A CUSTOMER!!',
         '<32>* Hello!\n* Would you like an Ice Dream?',
         SAVE.data.b.s_state_million
            ? '<32>* As the top scorer here, you get a handy discount!\n* 6G per Ice Dream!'
            : "<32>* It's the frozen treat that'll set your mind ablaze!\n* Now just 12G."
      ],
      nicecreamSc3: () => [
         "<32>{#p/basic}* Ice Dreams!\n* They're the frozen treats that'll set your mind ablaze!",
         SAVE.data.b.s_state_million ? '<32>* For you, 6G!' : '<32>* Now just 12G.'
      ],
      nicecreamPrompt1: [ choicer.create('* (Buy an Ice Dream?)', 'Yes', 'No') ],
      nicecreamPrompt2: [ choicer.create('* (Get an Ice Dream?)', 'Yes', 'No') ],
      nicecreamSc4: [
         '<32>{#p/basic}* Well then...\n* Tell your friends...',
         "<32>* There's ice cream out here...\n* In the middle of nowhere..."
      ],
      nicecreamFc1: [ '<32>{#p/basic}* I relocated my stand, but there are still no customers...' ],
      nicecreamFc2: [
         "<32>{#p/basic}* Fortunately, I've thought of a solution!!",
         '<32>* Postcards!',
         '<32>* Every time you buy an Ice Dream, you can take a postcard from the box.',
         '<32>* If you have three postcards, you can trade them for a free Ice Dream!',
         "<32>* They're sure to get the customers to come back!",
         '<32>* Oh, um, would you like an Ice Dream?',
         "<32>* It's the frozen treat that'll set your mind ablaze!\n* Now just 10G."
      ],
      nicecreamFc3a: [
         "<32>{#p/basic}* Ice Dreams!\n* They're the frozen treats that'll set your mind ablaze!",
         "<32>* You've got three postcards, would you like to redeem them?"
      ],
      nicecreamFc3b: [
         "<32>{#p/basic}* Ice Dreams!\n* They're the frozen treats that'll set your mind ablaze!",
         '<32>* Now just 10G.'
      ],
      nicecreamFc4: [
         '<32>{#p/basic}* Well then...\n* Tell your friends...',
         '<32>* Four Ice Dreams for the price of three...'
      ],
      nicecreamFc5: [ "<32>{#p/basic}* Don't forget to take a postcard from the box!" ],
      nicecreamNoFun1: [ "<32>{#p/basic}* Huh?\n* You don't have enough room in your pockets..." ],
      nicecreamNoFun2: [ '<32>{#p/basic}* I wish I could make Ice Dreams easier to store...' ],
      nicecreamNoMun1: [ "<32>{#p/basic}* Huh?\n* You don't have enough money..." ],
      nicecreamNoMun2: [ '<32>{#p/basic}* I wish I could make Ice Dreams for free...' ],
      nicecreamFree1: [ '<32>{#p/basic}* Tell you what, have your first one on me.' ],
      nicecreamFree2: [ '<32>{#p/basic}* Enjoy...' ],
      nicecreamReturnWithGoods: [ '<32>{#p/basic}* Well, you can always come back later.' ],
      nicecreamReturnWithNeeds: [ "<32>{#p/basic}* Oh, that's okay.", '<32>* Come again soon, kid!' ],
      nicecreamPurchase: [ '<32>{#p/basic}* Here you go!\n* Have a super-duper day!' ],
      nicecreamGet: [ '<32>{#s/equip}{#p/human}* (You got the Ice Dream.)' ],
      nicecreamK1a: [ '<25>{#p/kidd}{#f/1}* Yo, can I get an Ice Dream?' ],
      nicecreamK1b: [ "<32>{#p/basic}* Sure, kid.\n* If you've got the money." ],
      nicecreamK1c: [ '<25>{#p/kidd}{#f/2}* (Psst, give them this.)' ],
      nicecreamK2: [ '<32>{#p/basic}* W... where did you get that?' ],
      nicecreamK3a: [ '<32>* S-sure, kid... here you go!' ],
      nicecreamK3b: [
         '<32>{#s/equip}{#p/human}* (You hand the Ice Dream to Monster Kid.)',
         '<25>{#p/kidd}{#f/7}* AWESOME!!!'
      ],
      nicecreamE: pager.create(
         0,
         () =>
            SAVE.data.n.plot === 72
               ? [
                    "<32>{#p/basic}* Sold out again, I'm afraid!\n* The thought of freedom has drawn in many customers!",
                    ...(world.population_area('s') < 6 || world.population_area('f') < 6 || world.population < 2 // NO-TRANSLATE
                       ? [
                            "<32>* Not that I'd sell to you if I wasn't sold out...",
                            '<32>* If I sold Ice Dreams to a bully, my reputation would be in ruins!'
                         ]
                       : [
                            "<32>* With the recent success, I've been reflecting on my past, and remembering my father.",
                            "<32>* If he hadn't invented Ice Dreams, I'd still be selling cheap balloons."
                         ])
                 ]
               : [
                    "<32>{#p/basic}* Hey, kid!\n* I'd offer you an Ice Dream, but I'm all sold out!",
                    ...(2 <= SAVE.data.n.plot_date && SAVE.data.n.exp <= 0
                       ? [
                            '<32>* That fish lady bought out my entire stock.',
                            "<32>* Mind you, it's not the first time she's done it..."
                         ]
                       : 2 <= SAVE.data.n.plot_date && SAVE.data.n.plot < 68
                       ? [
                            '<32>* That handsome skeleton got the last of my supply.',
                            "<33>* Don't blame him, though.\n* He is pretty handsome, heheh..."
                         ]
                       : [
                            '<33>* Those numbered royal guard girls ran me dry.',
                            '<32>* Apparently they found out they were like, childhood friends or something of the sort.',
                            '<32>* Not gonna lie, though...\n* Calling them "friends" would be putting it lightly.'
                         ])
                 ],
         () =>
            SAVE.data.n.plot === 72
               ? world.population_area('s') < 6 || world.population_area('f') < 6 || world.population < 2 // NO-TRANSLATE
                  ? [ '<32>{#p/basic}* Nothing personal, of course.' ]
                  : [
                       '<32>{#p/basic}* Apparently, he sold his first Ice Dream in the middle of the Starton holo-forest.'
                    ]
               : [ '<32>{#p/basic}* Maybe it\'s time to start that "Ice Dream" chain I\'ve always dreamed of...' ]
      ),
      faunX: () =>
         [
            [ '<32>{#p/basic}{#npc/a}* I can tell you have absolutely no respect for life.\n* Good going, champ.' ],
            [ '<32>{#p/basic}{#npc/a}* Keep it up, champ.\n* See where it gets you.' ],
            [ '<32>{#p/basic}{#npc/a}* Really, champ?' ]
         ][Math.min(roomKills().s_greater++, 2)],
      snowdrakeX: [
         '<32>{#p/basic}{#npc/a}* Guh?\n* Did you just...',
         "<32>{#p/basic}{#npc/a}* ...\n* That's, uh, not very cool."
      ],
      moonrocksX1: [ '<32>{#p/basic}{#npc/a}* What the-\n* What was THAT for?' ],
      moonrocksX2: [ '<32>{#p/basic}{#npc/b}* For real, though~\n* How did THAT happen?' ],
      npcinter: {
         s_snowdrake: pager.create(
            0,
            () =>
               SAVE.data.n.plot === 72
                  ? [
                       "<32>{#p/basic}{#npc/a}* Hey.\n* You're pretty cool.",
                       '<32>* Just remember, if you get in a fight with someone, god or otherwise...',
                       "<32>* Remember to hold [X] to move twice as slowly.\n* That's very important."
                    ]
                  : roomKills().s_doggo > 0
                  ? [ "<32>{#p/basic}{#npc/a}* Get away from me, man!\n* I don't like you." ]
                  : SAVE.data.n.plot < 19
                  ? [
                       "<32>{#p/basic}{#npc/a}* I heard if you hold [X] in battle, you'll move twice as slow as normal!",
                       '<32>* I know... lame, right?',
                       "<32>* But I'll tell you a secret.\n* That dog over there... won't expect you to move slowly.",
                       '<32>* If you sneak up on him while holding [X], you might just get by undetected!',
                       '<32>* Guh huh huh... good luck.'
                    ]
                  : [
                       '<32>{#p/basic}{#npc/a}* So you came back to talk, huh?',
                       "<32>* That's cool.",
                       '<32>* Not as cool as me, but still pretty cool anyway.'
                    ],
            () =>
               SAVE.data.n.plot === 72
                  ? [ '<32>{#p/basic}{#npc/a}* Very important.' ]
                  : roomKills().s_doggo > 0
                  ? [ "<32>{#p/basic}{#npc/a}* Didn't you hear me?\n* Get away!" ]
                  : SAVE.data.n.plot < 19
                  ? [ "<32>{#p/basic}* You're gonna need it." ]
                  : [ "<32>{#p/basic}* I'm ice cold." ]
         ),
         s_genokid: pager.create(
            0,
            () =>
               world.genocide
                  ? [
                       '<25>{#p/kidd}{#f/3}{#npc/a}* Yo, this kid came up to me and stuck something in my head.',
                       '<25>{#f/3}* Then, he went off to the Foundry so he could "boost the signal..."',
                       '<25>{#f/4}* ... kids can be so weird sometimes.'
                    ]
                  : [
                       '<25>{#p/kidd}{#f/3}{#npc/a}* Yo, everyone ran away and hid somewhere.',
                       '<25>{#f/3}* Man, adults can be so dumb sometimes, haha...',
                       "<25>{#f/1}* Don't they know we've got Undyne to protect us!?"
                    ],
            () =>
               world.genocide
                  ? [ "<25>{#p/kidd}{#f/7}{#npc/a}* You're cool, though!" ]
                  : [ "<25>{#p/kidd}{#f/1}{#npc/a}* Undyne's got our backs!" ]
         ),
         g_beautifulfish: pager.create(
            0,
            () =>
               SAVE.data.n.plot === 33
                  ? [
                       "<32>{#p/basic}{#npc/a}* It's surprising to see Sans back here after what happened last time.",
                       "<32>* ... actually, perhaps that's not too surprising."
                    ]
                  : SAVE.data.n.plot === 72
                  ? [
                       '<32>{#p/basic}{#npc/a}* In the end, I never caught any "girls" on my voice-mail.',
                       '<32>* So kid, take it from me...',
                       "<32>* Don't try to catch fantastic space creatures with just your voice-mail."
                    ]
                  : papreal()
                  ? [
                       '<32>{#p/basic}{#npc/a}* Where the heck is Sans?',
                       '<32>* He told me he had a star chart I could use to find girls...',
                       '<32>* I mean, it was probably some kind of prank, but I wanted to know what the prank was!'
                    ]
                  : [
                       '<32>{#p/basic}{#npc/a}* I put out a call for some "girls" today.',
                       '<32>* Someone told me there are infinite possibilities among the stars...',
                       "<32>* Well, I'm taking that seriously.",
                       "<32>* I'm literally going to make out with a space creature."
                    ],
            () =>
               SAVE.data.n.plot === 33
                  ? [
                       "<32>{#p/basic}{#npc/a}* You're talking to me like you want the inside scoop.",
                       "<32>{#p/basic}{#npc/a}* Sorry kid.\n* Guess you'll just have to wait for the next news update."
                    ]
                  : SAVE.data.n.plot === 72
                  ? [
                       '<32>{#p/basic}{#npc/a}* Mind you, there was a single missed call...',
                       '<32>* ... from a certain "ONIONSAN."',
                       "<32>* They didn't leave me any voice-mail though."
                    ]
                  : papreal()
                  ? [ '<32>{#p/basic}{#npc/a}* Do you know where Sans is?' ]
                  : [
                       '<32>{#p/basic}{#npc/a}* I guess I could ask Undyne.\n* But I think she likes someone else already.'
                    ],
            () =>
               SAVE.data.n.plot === 33
                  ? [ "<32>{#p/basic}{#npc/a}* Don't tell me you don't have an OuterNet account..." ]
                  : SAVE.data.n.plot === 72
                  ? [ "<32>{#p/basic}{#npc/a}* What's an onionsan, anyway?" ]
                  : papreal()
                  ? [ '<32>{#p/basic}{#npc/a}* Let me know if you see him...' ]
                  : [ '<32>{#p/basic}{#npc/a}* Can I ever find love out here?' ]
         ),
         g_bigmouth: pager.create(
            0,
            () =>
               SAVE.data.n.plot === 33
                  ? [
                       "<32>{#p/basic}{#npc/a}* Despite Sans's culinary knowledge, he always orders the worst burger off the menu.",
                       ...(papreal()
                          ? [
                               '<32>* Except for earlier today...',
                               '<32>* ... when he ordered the SECOND worst burger off the menu.',
                               "<32>* That's something, right?"
                            ]
                          : [ "<32>* It's practically fate." ])
                    ]
                  : SAVE.data.n.plot === 72
                  ? world.population < 4
                     ? [
                          '<32>{#p/basic}{#npc/a}* I wonder what a human bully would taste like...',
                          "<32>* Are they tastier when they're meaner?\n* Or vice-versa?"
                       ]
                     : [
                          "<32>{#p/basic}{#npc/a}* As much as I would've liked to try human food...",
                          "<32>* Food from a whole new world... now that's even better."
                       ]
                  : papreal()
                  ? [
                       '<32>{#p/basic}{#npc/a}* Hmmm, this is around the time that Sans comes in.',
                       '<32>* Then, a little bit later, his brother comes in.',
                       '<32>* Yes, his brother.\n* Papyrus.',
                       "<32>* He's an interesting fellow, and he always orders a glass of milk...",
                       '<32>* He says it\'s "full of strong bones."'
                    ]
                  : [
                       "<32>{#p/basic}{#npc/a}* Hmmm...\n* Isn't human food different from monster food?",
                       '<32>* It does things like "spoil."',
                       '<32>* And when you eat it, it passes all the way through your body.',
                       "<32>* I'd love to try it sometime."
                    ],
            () =>
               SAVE.data.n.plot === 33
                  ? papreal()
                     ? world.dead_skeleton
                        ? [
                             "<32>{#p/basic}{#npc/a}* Come to think of it, that's not the only off-putting thing to have happened today..."
                          ]
                        : [ '<32>{#p/basic}{#npc/a}* How strange.' ]
                     : [ "<32>{#p/basic}{#npc/a}* Can't imagine what it'd take to change a fate like that." ]
                  : SAVE.data.n.plot === 72
                  ? world.population < 4
                     ? [
                          '<32>{#p/basic}{#npc/a}* For all we know, a last-minute redemption could make them the tastiest of all.'
                       ]
                     : [
                          '<32>{#p/basic}{#npc/a}* For all we know, new world food spoils even faster than food made by humans.'
                       ]
                  : papreal()
                  ? [
                       '<32>{#p/basic}{#npc/a}* I hope he shows up today.\n* Him and his brother are great at making us laugh.'
                    ]
                  : [ '<32>{#p/basic}{#npc/a}* I\'ve also heard they have things called "bathrooms."' ],
            () =>
               SAVE.data.n.plot === 33
                  ? papreal()
                     ? [ '<32>{#p/basic}{#npc/a}* How strange.' ]
                     : [ "<32>{#p/basic}{#npc/a}* Can't imagine what it'd take to change a fate like that." ]
                  : SAVE.data.n.plot === 72
                  ? world.population < 4
                     ? [ '<32>{#p/basic}{#npc/a}* How... unexpected.' ]
                     : [ '<32>{#p/basic}{#npc/a}* How... delicious.' ]
                  : papreal()
                  ? [ '<32>{#p/basic}{#npc/a}* Skeletons are cool.' ]
                  : [ '<32>{#p/basic}{#npc/a}* Humans are weird.' ]
         ),
         g_bunbun: pager.create(
            0,
            () =>
               SAVE.data.n.plot === 33
                  ? [
                       '<32>{#p/basic}{#npc/a}* Sansyyyy...\n* Come back and sit with me...!',
                       "<32>* Everything's so f-f-fun when you're around..."
                    ]
                  : SAVE.data.n.plot === 72
                  ? [
                       '<32>{#p/basic}{#npc/a}* I w-wonder if the n-new world h-has h-hot guys...',
                       '<32>* A-and neat d-drinks...',
                       "<32>* Ooooooo, I'm ready!"
                    ]
                  : papreal()
                  ? [
                       "<32>{#p/basic}{#npc/a}* H-hey, isn't Sansy s'posed to come swinging in right about now??",
                       "<32>* C'mon Sansy!\n* You're the life of the party..."
                    ]
                  : world.dead_dog
                  ? [
                       "<32>{#p/basic}{#npc/a}* It's s-s-so quiet in here.",
                       '<32>* Lighten up everybody!\n* ...',
                       "<32>* I'm really starting to loathe th-this place."
                    ]
                  : [
                       "<32>{#p/basic}{#npc/a}* No matter where I go, it's the same menu, the same people...",
                       "<32>* Help!\n* I want new drinks an' h-h-h-hot guys!!"
                    ],
            () =>
               SAVE.data.n.plot === 33
                  ? [ '<32>{#p/basic}{#npc/a}* Sansyyyy...' ]
                  : SAVE.data.n.plot === 72
                  ? [ "<32>{#p/basic}{#npc/a}* Y-yeah, I'm soooooo ready!" ]
                  : papreal() || world.dead_dog
                  ? [ '<32>{#p/basic}{#npc/a}* ...' ]
                  : [ "<32>{#p/basic}{#npc/a}* I guess the bartender's kind of h-h-h-hot..." ],
            () =>
               SAVE.data.n.plot === 33
                  ? [ '<32>{#p/basic}{#npc/a}* Sansyyyy...' ]
                  : SAVE.data.n.plot === 72
                  ? [ '<32>{#p/basic}{#npc/a}* S-soooooo ready!' ]
                  : papreal() || world.dead_dog
                  ? [ '<32>{#p/basic}{#npc/a}* ...' ]
                  : [ "<32>{#p/basic}{#npc/a}* I jus' don't kn-know what to do anymore!" ]
         ),
         g_dogamy: () =>
            SAVE.data.n.plot === 33
               ? [ '<32>{#p/basic}{#npc/a}* Shoot, I was hoping Sans came to give us a pat on the head.' ]
               : SAVE.data.n.plot === 72
               ? world.population < 2
                  ? [
                       "<32>{#p/basic}{#npc/a}* We're free!\n* Maybe now, Sans can finally give us a pat on the head.",
                       "<32>* It's better than worrying about a rogue bully tearing through town."
                    ]
                  : [
                       "<32>{#p/basic}{#npc/a}* We're free!\n* Maybe now, Sans can finally give us a pat on the head.",
                       "<32>* Or maybe our new company's clients will do that for us instead."
                    ]
               : SAVE.data.n.state_starton_doggo === 2 && SAVE.data.n.state_starton_greatdog === 2
               ? [ '<32>{#p/basic}{#npc/a}* Smells kinda... quiet.' ]
               : SAVE.data.n.state_starton_doggo === 2
               ? [ "<32>{#p/basic}{#npc/a}* (Where's Doggo?)\n* (I hope he didn't get lost again.)" ]
               : SAVE.data.n.state_starton_greatdog === 2
               ? [ "<32>{#p/basic}{#npc/a}* Where's that big lug?\n* We can't start until he shows up." ]
               : papreal()
               ? [ "<32>{#p/basic}{#npc/a}* Where's Sans...\n* He's supposed to give me a pat on the head..." ]
               : [
                    '<32>{#p/basic}{#npc/a}* You better watch where you sit down in here, kid.',
                    '<32>* That big lug WILL jump into your lap and give you lots of love and attention.'
                 ],
         g_dogaressa: () =>
            SAVE.data.n.plot === 33
               ? [ '<32>{#p/basic}{#npc/a}* (I like Sans.)\n* (Sometimes he feeds us scraps of food under the table.)' ]
               : SAVE.data.n.plot === 72
               ? world.population < 2
                  ? [
                       "<32>{#p/basic}{#npc/a}* (Now that we're free, we're planning on starting a marriage counseling company.)",
                       '<32>* (Our first curriculum will be called "What it means to be in an abusive relationship.")'
                    ]
                  : [
                       "<32>{#p/basic}{#npc/a}* (Now that we're free, we're planning on starting a marriage counseling company.)",
                       '<32>* (Our first curriculum will be called "The do\'s and dont\'s of marrying your mother.")'
                    ]
               : SAVE.data.n.state_starton_doggo === 2 && SAVE.data.n.state_starton_greatdog === 2
               ? [
                    "<32>{#p/basic}{#npc/a}* (It's lonely in here today.)\n* (If our friends don't show up, would you like to play?)"
                 ]
               : SAVE.data.n.state_starton_doggo === 2
               ? [ "<32>{#p/basic}{#npc/a}* (Where's Doggo?)\n* (I hope he didn't get lost again.)" ]
               : SAVE.data.n.state_starton_greatdog === 2
               ? [ "<32>{#p/basic}{#npc/a}* (Where's Canis Major?)\n* (He was supposed to join us for this game.)" ]
               : papreal()
               ? [ '<32>{#p/basic}{#npc/a}* (Where are those skeletons?)\n* (I wanted to get a bone from them...)' ]
               : [
                    "<32>{#p/basic}{#npc/a}* (We're sentries, but we never get any respect.)",
                    '<32>* (I wish those skeletons would throw us more bones.)',
                    '<32>* (We love bones.)'
                 ],
         g_doggo: () =>
            SAVE.data.n.plot === 33
               ? [
                    '<32>{#p/basic}{#npc/a}* Huh?\n* Since when did you and Sans become friends...?',
                    "<32>* I'm not the biggest fan of that guy...",
                    '<32>* He loves to appear without moving.'
                 ]
               : SAVE.data.n.plot === 72
               ? [
                    "<32>{#p/basic}{#npc/a}* I've been without cuddles for so long, but finally, someone opened up to me.",
                    '<32>* Ice Wolf is now my Nice Wolf.'
                 ]
               : SAVE.data.n.state_starton_dogs === 2 && SAVE.data.n.state_starton_greatdog === 2
               ? [
                    "<32>{#p/basic}{#npc/a}* Sometimes the others like to prank me. They sit still so I can't see them.",
                    '<32>* They must be here, playing a joke on me.',
                    "<32>* I'll just wait until one of them admits it..."
                 ]
               : SAVE.data.n.state_starton_dogs === 2
               ? [
                    "<32>{#p/basic}{#npc/a}* Where're the other two?\n* I can't play with this big lug alone...",
                    "<32>* It'd be too hard!"
                 ]
               : SAVE.data.n.state_starton_greatdog === 2
               ? [
                    "<32>{#p/basic}{#npc/a}* Where's the big lug?\n* I can't play with these two alone...",
                    "<32>* It'd be too easy!"
                 ]
               : papreal()
               ? [ '<32>{#p/basic}{#npc/a}* Papyrus?\n* Is that you?\n* Come on...' ]
               : [
                    "<32>{#p/basic}{#npc/a}* I'm thinking of letting my hair grow out a little to show off my personality.",
                    '<32>* It makes a statement like "Give me a big, soft hug and cuddle me, please."'
                 ],
         g_grillby: () =>
            SAVE.data.n.plot === 33
               ? SAVE.data.b.item_fast_food
                  ? [
                       '<32>{#p/basic}* ...\n* ...\n* ...',
                       '<32>{#npc/a}* Grillbz said he only lets Sans eat for free because he pulls in other customers.',
                       "<32>* I can't exactly disagree..."
                    ]
                  : [
                       '<32>{#p/basic}* ...\n* ...\n* ...',
                       '<32>{#npc/a}* Grillbz suggested taking your food with you before he has to throw it out.'
                    ]
               : SAVE.data.n.plot === 72
               ? world.population < 4
                  ? [ '<32>{#p/basic}* ...\n* ...\n* ... okay.' ]
                  : [ '<32>{#p/basic}* ...\n* ...\n* ... good job.' ]
               : world.population < 4
               ? [
                    '<32>{#p/basic}* ...\n* ...\n* ...',
                    '<32>{#npc/a}* Grillbz is real sorry for the lack of other customers.',
                    "<32>* Personally, I think they're just afraid...",
                    '<32>* You know.\n* Of that bully.'
                 ]
               : [
                    '<32>{#p/basic}* ...\n* ...\n* ...',
                    '<32>{#npc/a}* Grillbz said he found his new colors in an e-magazine.',
                    "<32>* Personally, I prefer Grillbz' natural orange color.\n* But that's just me."
                 ],
         g_punkhamster: pager.create(
            0,
            () =>
               SAVE.data.n.plot === 33
                  ? [
                       '<32>{#p/basic}{#npc/a}* Sans certainly knows how to make you laugh, huh?',
                       '<32>* Good thing, too.\n* That skeleton practically pays the bills here.'
                    ]
                  : SAVE.data.n.plot === 72
                  ? world.population < 2
                     ? [
                          "<32>{#p/basic}{#npc/a}* Y'know, I've taken a liking to your fighting spirit, kid.",
                          "<32>* Now that we're all back in town, it seems we'll become great friends.",
                          "<32>* ... but we're all moving out of here, huh?",
                          "<32>* Oh well.\n* Guess it can't all be a haven for the tough stuff."
                       ]
                     : [
                          "<32>{#p/basic}{#npc/a}* If we're free, people won't have to move in from the Citadel anymore!",
                          "<32>* Seems like we won't have to lose our local culture.",
                          "<32>* ... except we're all moving out of here, huh?",
                          "<32>* Oh well.\n* Guess it can't all be punk- peaches and punk-cream."
                       ]
                  : papreal() || world.dead_canine || world.population < 6
                  ? [
                       "<32>{#p/basic}{#npc/a}* The Citadel's getting pretty crowded, so I've heard they're going to start moving here.",
                       "<32>* ... who knows?\n* Maybe we'll have room for 'em."
                    ]
                  : [
                       "<32>{#p/basic}{#npc/a}* The Citadel's getting pretty crowded, so I've heard they're going to start moving here.",
                       "<32>* Hmmm...\n* I don't want to see the erasure of our local culture.",
                       "<32>* But it'd definitely be fun to teach those city slickers how we do things out here!"
                    ],
            () =>
               SAVE.data.n.plot === 33
                  ? [ "<32>{#p/basic}{#npc/a}* Regular?\n* Who, me?\n* Nah, I'm only semi-regular." ]
                  : SAVE.data.n.plot === 72
                  ? world.population < 2
                     ? [
                          "<32>{#p/basic}{#npc/a}* Come to think of it, you've inspired me, kid.\n* I'm gonna start a fight club."
                       ]
                     : [ "<32>{#p/basic}{#npc/a}* We'll just have to come up with something new, eh?" ]
                  : [ "<32>{#p/basic}{#npc/a}* Yeah, bring 'em on!" ]
         ),
         g_redbird: pager.create(
            0,
            () =>
               SAVE.data.n.plot === 33
                  ? [
                       "<32>{#p/basic}{#npc/a}* Sans is a royal sentry, but don't let his title fool ya.",
                       '<32>* Everyone knows he sits around at the edge of the holo-forest reading hovercar manuals.'
                    ]
                  : SAVE.data.n.plot === 72
                  ? [
                       '<32>{#p/basic}{#npc/a}* Wow, a brand new world...',
                       '<32>* I might not get to translate for Grillbz anymore...',
                       "<32>* ... or maybe I will!\n* Grillbz, do you plan on movin' this place out there?",
                       '<32>{#npc}* ...\n* ...\n* ...',
                       ...(world.population < 4
                          ? [
                               "<32>{#npc/a}* Grillbz says he's more than happy to.",
                               '<33>* He must still be afraid of you.'
                            ]
                          : [ "<32>{#npc/a}* Grillbz says he'll think about it." ])
                    ]
                  : papreal()
                  ? [
                       '<32>{#p/basic}{#npc/a}* Grillby is getting nervous.',
                       "<32>* Sans is his best customer, and he hasn't shown up at all today..."
                    ]
                  : world.dead_dog
                  ? [
                       '<32>{#p/basic}{#npc/a}* Those dogs are part of the ROYAL GUARD, the...',
                       '<32>* Huh?\n* Where are they?\n* Weird...'
                    ]
                  : world.population < 4
                  ? [
                       "<32>{#p/basic}{#npc/a}* Word around town is there's a bully going and beating people up.",
                       '<32>* Grillbz and I decided to stay behind, though.',
                       "<32>* No bully's gonna keep us from running THIS establishment!"
                    ]
                  : [
                       '<32>{#p/basic}{#npc/a}* Those dogs are part of the ROYAL GUARD, the military group led by UNDYNE.',
                       "<32>* She's rude, loud, and beats up everybody who disrespects her...",
                       "<32>* It's no wonder all the kids want to be like her when they grow up!"
                    ],
            () =>
               SAVE.data.n.plot === 33
                  ? [
                       "<32>{#p/basic}{#npc/a}* Don't ask me why he does it.",
                       "<32>* If I had to guess, though, I'd say it's got something to do with Papyrus."
                    ]
                  : SAVE.data.n.plot === 72
                  ? [
                       "<32>{#p/basic}{#npc/a}* If he DOES open a Grillby's on the new homeworld...",
                       ...(world.population < 4
                          ? [ '<32>* We can only hope the travelers there are nicer.', "<32>* ... you're debatable." ]
                          : [
                               "<32>* We can only hope there isn't too much water around.",
                               "<32>* ... that'd be dangerous."
                            ])
                    ]
                  : papreal() || world.dead_dog
                  ? [ '<32>{#p/basic}{#npc/a}* Something feels off.' ]
                  : world.population < 4
                  ? [ "<32>{#p/basic}{#npc/a}* At least they're not out there killing everybody." ]
                  : [ '<32>{#p/basic}{#npc/a}* I want to be like UNDYNE when I grow up, too!\n* Hoo hoo hoo!' ]
         ),
         l_cupjake: pager.create(
            0,
            () =>
               SAVE.data.n.plot === 72
                  ? [
                       "<32>{#p/basic}{#npc/a}* Maybe now that we're free, that sweet lady will finally leave.",
                       '<32>* Then, I shall come to know the contents of that {@fill:#f00}odd book{@fill:#fff} for myself...'
                    ]
                  : [
                       "<32>{#p/basic}{#npc/a}* There's an {@fill:#f00}odd book{@fill:#fff} that appears and disappears here at random...",
                       '<32>* But that sweet lady always seems to be in the way of it!',
                       '<32>* Do you know anything that could scare her off?'
                    ],
            () =>
               SAVE.data.n.plot === 72
                  ? [ '<32>{#p/basic}{#npc/a}* Soon, I tell you.', '<32>* Soon.' ]
                  : [ "<32>{#p/basic}{#npc/a}* I know what you're thinking.", "<32>* Don't try it." ]
         ),
         l_kakurolady: pager.create(
            0,
            () =>
               SAVE.data.n.plot === 72
                  ? [
                       '<32>{#p/basic}{#npc/a}* (Cough, cough.)',
                       "<32>* This will be our news feed's last issue...",
                       '<32>* Why don\'t we just put a big "THE END" on the front and call it a day?'
                    ]
                  : [
                       '<32>{#p/basic}{#npc/a}* (Cough, cough.)',
                       '<33>* Back in school, teachers gave us spot-the-difference puzzles when we ran out of work.',
                       '<32>* I thought they were a waste of time.\n* But look at me now...',
                       "<33>* I'm the number-one spot-the- difference artist on the outpost!"
                    ],
            () =>
               SAVE.data.n.plot === 72
                  ? [
                       '<32>{#p/basic}{#npc/a}* (Cough, cough.)',
                       "<32>* Heck, why don't we just quit right here and now?"
                    ]
                  : [
                       '<32>{#p/basic}{#npc/a}* (Cough, cough.)',
                       "<33>* Trust me, kid.\n* You don't really want this job."
                    ]
         ),
         l_librarian: pager.create(
            0,
            () =>
               SAVE.data.n.plot === 72
                  ? [
                       '<32>{#p/basic}{#npc/a}* Welcome to the librarby.',
                       ...(world.population === 0
                          ? [ "<32>* If you beat up anyone else, you'll be really sorry." ]
                          : [ "<32>* This is the last day we'll be open, so make as much noise as you want." ])
                    ]
                  : [
                       '<32>{#p/basic}{#npc/a}* Welcome to the librarby.\n* Actually, that name started as a spelling mistake.',
                       '<32>* Now everybody calls it that...'
                    ],
            () =>
               SAVE.data.n.plot === 72
                  ? world.population === 0
                     ? [ "<32>{#p/basic}{#npc/a}* You have feelings, don't you?" ]
                     : [ "<32>{#p/basic}{#npc/a}* Not that anyone would've stopped you before..." ]
                  : [ "<32>{#p/basic}{#npc/a}* This is what happens when you're too lazy to fix simple problems." ]
         ),
         l_sweetie: pager.create(
            0,
            () =>
               SAVE.data.n.plot === 72
                  ? [
                       "<32>{#p/basic}{#npc/a}* Oh my, there's so much news to report, I don't know where to begin!",
                       '<32>* How about this headline...\n* "Monsters Finally Escape From the Outpost."',
                       "<32>* Nah, that doesn't have enough pizazz...",
                       '<32>* How about "You Won\'t Believe Who Helped Us Escape From the Outpost!"'
                    ]
                  : world.dead_dog || world.population < 6
                  ? [
                       '<32>{#p/basic}{#npc/a}* I love working the news feed.',
                       "<32>* Lately, though, I've had to report on something terrible...",
                       "<32>* I'm starting to second-guess my life choices."
                    ]
                  : [
                       '<32>{#p/basic}{#npc/a}* I love working the news feed.',
                       "<32>* There's so little to report that we just fill it with comics and games."
                    ],
            () =>
               world.dead_dog || world.population < 6
                  ? [ '<32>{#p/basic}{#npc/a}* Have you ever felt like your life is just running in circles?' ]
                  : [ "<32>{#p/basic}{#npc/a}* Have you ever felt like you're just missing something?" ]
         ),
         s_faun: pager.create(
            0,
            () =>
               SAVE.data.n.plot === 72
                  ? world.population < 6
                     ? [
                          "<32>{#p/basic}{#npc/a}* We're all free?",
                          "<32>* OK, OK...\n* And here I thought we'd all be covered in bruises.",
                          "<33>* What a surprise.\n* I'm sure that dog won't care."
                       ]
                     : [
                          "<32>{#p/basic}{#npc/a}* We're all free?",
                          "<32>* OK, OK...\n* I'll stop lounging around.\n* Does that dog know?",
                          "<33>* Hm, I'll be sure to go tell it."
                       ]
                  : roomKills().s_greater > 0
                  ? [ "<32>{#p/basic}{#npc/a}* Sorry, champ.\n* Now's not a good time." ]
                  : 30 <= SAVE.data.n.plot
                  ? [
                       '<32>{#p/basic}{#npc/a}* I heard that dog is a 4-D poker player...',
                       '<32>* Has it ever won a game?\n* I wonder.'
                    ]
                  : [
                       [
                          '<32>{#p/basic}{#npc/a}* A dog just rushed in here, filled with inspiration.',
                          '<32>* It kept trying to create a hologram that expressed its own emotions...',
                          '<32>* But, as it did, it kept getting more excited about the creation...',
                          '<32>* Its neck got longer and longer, and it added more and more light, until...',
                          "<32>* It was rather sad to watch, but I couldn't turn away."
                       ],
                       [
                          "<32>{#p/basic}{#npc/a}* That dog from earlier...?\n* It's at Grillby's.\n* I think.",
                          '<32>* After work, all of the dogs go there to play cards together.',
                          "<32>* But that dog doesn't really know how to express itself.",
                          '<32>* So, it ends up playing alone, instead of introducing itself to the others...'
                       ],
                       [
                          "<32>{#p/basic}{#npc/a}* Where's that dog?",
                          '<32>* It usually comes through here every day after work...'
                       ],
                       [
                          '<32>{#p/basic}{#npc/a}* A badly wounded dog just walked through here...',
                          '<32>* What kind of person would beat up a cute little dog?'
                       ]
                    ][SAVE.data.n.state_starton_lesserdog],
            () =>
               SAVE.data.n.plot === 72
                  ? world.population < 6
                     ? [ "<32>{#p/basic}{#npc/a}* Don't worry, champ.\n* Most of them have probably forgiven ya by now." ]
                     : [ "<32>{#p/basic}{#npc/a}* Don't worry, champ.\n* I've got this covered for ya." ]
                  : roomKills().s_greater > 0
                  ? [ '<32>{#p/basic}{#npc/a}* ...' ]
                  : 30 <= SAVE.data.n.plot
                  ? [ "<32>{#p/basic}{#npc/a}* The day that dog wins a game of 4-D poker, we're ALL doomed." ]
                  : [
                       [ '<32>{#p/basic}{#npc/a}* Too bad for the dog, huh?' ],
                       [ '<32>{#p/basic}{#npc/a}* So sad for the dog, huh?' ],
                       [ '<32>{#p/basic}{#npc/a}* Have you seen it?' ],
                       [ '<32>{#p/basic}{#npc/a}* Despicable.' ]
                    ][SAVE.data.n.state_starton_lesserdog]
         ),
         s_moonrocks1: pager.create(
            0,
            () =>
               SAVE.data.n.plot === 72
                  ? world.population < 6
                     ? [
                          '<32>{#p/basic}{#npc/a}* Hah-\n* Incredible-',
                          '<32>* I knew my moon rocks were the real deal all along-',
                          "<32>* Even I'm surprised what your mean ways have led to for me-"
                       ]
                     : [
                          '<32>{#p/basic}{#npc/a}* Tch-\n* Unbelievable-',
                          "<32>* I can't believe I'm gonna be working with that guy-",
                          '<32>* At least our sales figures should finally go up-'
                       ]
                  : roomKills().s_pacing > 0
                  ? [ "<32>{#p/basic}{#npc/a}* Tch-\n* Sorry, I don't sell to people like you-" ]
                  : [
                       '<32>{#p/basic}{#npc/a}* Tch-\n* Unbelievable-',
                       '<32>* I got authentic moon rocks straight from a moon, unlike his phoned in crap-',
                       "<32>* That guy's rocks don't look anything like a moon-"
                    ],
            () =>
               SAVE.data.n.plot === 72
                  ? world.population < 6
                     ? [ '<32>{#p/basic}{#npc/a}* Yeah, I have you to thank-' ]
                     : [ "<32>{#p/basic}{#npc/a}* It's just good for business-" ]
                  : roomKills().s_pacing > 0
                  ? [ "<32>{#p/basic}{#npc/a}* Tch-\n* Sorry, I don't sell to people like you-" ]
                  : [ '<32>{#p/basic}{#npc/a}* The nerve of that guy-' ]
         ),
         s_moonrocks2: pager.create(
            0,
            () =>
               SAVE.data.n.plot === 72
                  ? world.population < 6
                     ? [
                          "<32>{#p/basic}{#npc/a}* Ehhh~\n* I just couldn't deal with it anymore, man~",
                          "<32>* Between his badgering and your bullying, I've just about had enough~",
                          "<32>* His moon rocks may be fake, but if it gets me peace and quiet, I'll deal~"
                       ]
                     : [
                          '<32>{#p/basic}{#npc/a}* Pfft~\n* Shaw man~',
                          "<32>* It's good to finally be working together on this thing~",
                          "<32>* Now we'll both be sellin' my authentic moon rocks~"
                       ]
                  : roomKills().s_pacing > 0
                  ? [ '<32>{#p/basic}{#npc/a}* Pfft~\n* No moon rocks for you~' ]
                  : [
                       '<32>{#p/basic}{#npc/a}* Pfft~\n* Shaw man~',
                       "<32>* That dude to my left be sellin' phoney baloney moon rocks, bruh~",
                       "<32>* Don't believe a word he says~"
                    ],
            () =>
               SAVE.data.n.plot === 72
                  ? world.population < 6
                     ? [ '<32>{#p/basic}{#npc/a}* Shaw man~\n* Sorry it had to come to this~' ]
                     : [ '<32>{#p/basic}{#npc/a}* Yeah, his were the real fake moon rocks all along~' ]
                  : roomKills().s_pacing > 0
                  ? [ '<32>{#p/basic}{#npc/a}* Pfft~\n* No moon rocks for you~' ]
                  : [ "<32>{#p/basic}{#npc/a}* The gall o' that dude~" ]
         ),
         t_bunny: pager.create(
            0,
            () =>
               SAVE.data.n.plot === 72
                  ? [
                       "<32>{#p/basic}{#npc/a}* My little Cinnamon's going to grow up one day...",
                       "<32>* Since he's my brother, I only want the best for him.",
                       '<32>* I sure hope our new world can accommodate for that.'
                    ]
                  : papreal()
                  ? [
                       "<32>{#p/basic}{#npc/a}* Ah, it's so peaceful and quiet...",
                       '<32>* Usually one of those skeletons chases my little Cinnamon around.'
                    ]
                  : world.dead_canine
                  ? [
                       "<32>{#p/basic}{#npc/a}* Ah, it's so peaceful and quiet...",
                       '<32>* Usually one of those dogs chases my little Cinnamon around.'
                    ]
                  : [
                       "<32>{#p/basic}{#npc/a}* Isn't my little Cinnamon just the cutest?",
                       '<32>* Bun-buns are so adorable...\n* Tee hee!'
                    ],
            () =>
               SAVE.data.n.plot === 72
                  ? [ "<32>{#p/basic}{#npc/a}* It's not long now, bun-bun..." ]
                  : papreal() || world.dead_canine
                  ? [ '<32>{#p/basic}{#npc/a}* I wonder where they are...' ]
                  : [ '<32>{#p/basic}{#npc/a}* Bun-bun-bun-bun-bun...' ]
         ),
         t_icewolf: pager.create(0, () =>
            SAVE.data.n.plot === 72
               ? [
                    "<32>{#p/basic}{#npc/a}* Ice Wolf is happy today.\n* Sweet Doggo has finally been held in Ice Wolf's arms.",
                    '<32>* Ice Wolf is now his Nice Wolf.'
                 ]
               : world.dead_canine
               ? [
                    "<32>{#p/basic}{#npc/a}* Ice Wolf has not seen any of Ice Wolf's dog-friends today.",
                    '<32>* Ice Wolf is sad.'
                 ]
               : SAVE.data.n.state_starton_doggo === 2
               ? [
                    '<32>{#p/basic}{#npc/a}* Ice Wolf has not seen sweet Doggo at all today.',
                    '<32>* Ice Wolf is lonely.'
                 ]
               : papreal()
               ? [ '<32>{#p/basic}{#npc/a}* Ice Wolf has not seen any skeletons today.', '<32>* Ice Wolf is concerned.' ]
               : SAVE.data.n.state_starton_doggo === 1 &&
                 SAVE.data.n.state_starton_dogs === 1 &&
                 SAVE.data.n.state_starton_greatdog === 1 &&
                 SAVE.data.n.state_starton_lesserdog === 1
               ? [
                    "<32>{#p/basic}{#npc/a}* Ice Wolf is going to play fetch with Ice Wolf's dog-friends.",
                    '<32>* Ice Wolf is excited.'
                 ]
               : world.population < 6
               ? [
                    world.bullied
                       ? '<32>{#p/basic}{#npc/a}* Ice Wolf is wondering why so many monsters are hurt.'
                       : '<32>{#p/basic}{#npc/a}* Ice Wolf is wondering why so many monsters are gone.',
                    '<32>* Ice Wolf is concerned.'
                 ]
               : [
                    '<32>{#p/basic}{#npc/a}* Ice Wolf is wondering why Ice Wolf is Ice Wolf when there is no ice to throw around.',
                    '<32>* Ice Wolf is confused.'
                 ]
         ),
         t_imafraidjumitebeinagang: pager.create(
            0,
            () =>
               SAVE.data.n.plot === 72
                  ? [
                       "<32>{#p/basic}{#npc/a}* I asked Papyrus about his floss collection, and he said he'd help me start one, too.",
                       "<32>* Isn't he the best?"
                    ]
                  : papreal()
                  ? [
                       "<32>{#p/basic}{#npc/a}* I went to ask Papyrus about his floss collection, but he wasn't available.",
                       '<32>* Would you happen to know anything about that?'
                    ]
                  : world.popmax(0) - world.population > 4
                  ? [
                       "<32>{#p/basic}{#npc/a}* I'd lend you my MTT-brand toothbrush...",
                       "<32>* ... but I get the feeling you'd smash it a whole bunch."
                    ]
                  : [
                       "<32>{#p/basic}{#npc/a}* Those MTT-brand toothbrushes are so freakin' brittle.",
                       '<32>* Thing got crushed in my hands before I could even start!'
                    ],
            () =>
               SAVE.data.n.plot === 72
                  ? [
                       "<32>{#p/basic}{#npc/a}* I asked Papyrus about his floss collection, and he said he'd help me start one, too.",
                       "<32>* Isn't he the best?"
                    ]
                  : papreal()
                  ? [ '<32>{#p/basic}{#npc/a}* Hmm...\n* I wonder how skeletons brush their teeth.' ]
                  : world.popmax(0) - world.population > 4
                  ? [
                       '<32>{#p/basic}{#npc/a}* Hanging out by the bar tells you a lot about this place...\n* For better or worse.'
                    ]
                  : [ '<32>{#p/basic}{#npc/a}* Then again, it was the cheapest option...' ]
         ),
         t_kabakk: pager.create(
            0,
            () =>
               SAVE.data.n.plot === 72
                  ? world.population < 4
                     ? [
                          '<32>{#p/basic}{#npc/a}* HEY!',
                          "<32>* ... you're pretty weird.",
                          '<32>* You put us through hell, then went through hell to save us all.',
                          "<32>* I don't really know why.",
                          '<32>* ...',
                          '<32>* ...',
                          "<32>* I DON'T KNOW HOW TO HANDLE TO THIS SITUATION!\n* YEAH!"
                       ]
                     : [
                          '<32>{#p/basic}{#npc/a}* HEY!',
                          "<32>* ... you're pretty cool.",
                          '<32>* Thanks for going through hell to save us all back there.',
                          '<32>* That was a real stand-up move.',
                          '<32>* ...',
                          '<32>* ...',
                          '<32>* ALL HAIL THE NEW AUTHORITY!\n* YEAH!'
                       ]
                  : world.meanie
                  ? [
                       '<32>{#p/basic}{#npc/a}* HEY!',
                       '<32>* What you been up to, huh KID?',
                       "<32>* You've got an oughly criminal look on your FACE...",
                       '<32>* ...',
                       '<32>* ...',
                       '<32>* Respect my AUTHORITY!\n* YEAH!'
                    ]
                  : [
                       '<32>{#p/basic}{#npc/a}* HEY!',
                       '<32>* You think you can just stand there and stare at ME?',
                       "<32>* Well, I've got some bad news for you, PAL.",
                       "<32>* I'm an officer of the LAW.",
                       '<32>* So, UH...',
                       '<32>* Respect my AUTHORITY!\n* YEAH!'
                    ],
            () =>
               SAVE.data.n.plot === 72
                  ? world.population < 4
                     ? [ '<32>{#p/basic}{#npc/a}* ...' ]
                     : [ '<32>{#p/basic}{#npc/a}* HAIL it, PAL.' ]
                  : [ '<32>{#p/basic}{#npc/a}* Respect it, PAL.' ]
         ),
         t_loverboy: pager.create(
            0,
            () =>
               SAVE.data.n.plot === 72
                  ? world.population < 2
                     ? [
                          '<32>{#p/basic}{#npc/a}* Hey hey...',
                          "<32>* ... despite what you've done, you still chose to...",
                          "<32>* Oh... oh gee...\n* You can't see it, but I think I'm gonna cry...",
                          "<32>* ... wait, don't hurt me!"
                       ]
                     : [
                          '<32>{#p/basic}{#npc/a}* Hey hey...',
                          "<32>* ... thanks to you, we're...",
                          "<32>* Oh... oh gee...\n* You can't see it, but I think I'm gonna cry...",
                          '<32>* ... uh, can I cry?'
                       ]
                  : papreal() || world.dead_canine
                  ? [
                       "<32>{#p/basic}{#npc/a}* Hey hey, why's everyone so sad around this town?",
                       '<32>* Did something happen?'
                    ]
                  : [
                       "<32>{#p/basic}{#npc/a}* Hey hey, nothing's ever going to change in my life!",
                       '<32>* Ha... ha...'
                    ],
            () =>
               SAVE.data.n.plot === 72
                  ? world.population < 2
                     ? [ "<32>{#p/basic}{#npc/a}* I still think you're cool...!\n* Please don't hurt me." ]
                     : [ '<32>{#p/basic}{#npc/a}* I love you...!' ]
                  : papreal() || world.dead_canine
                  ? [ "<32>{#p/basic}{#npc/a}* Maybe it's just my imagination." ]
                  : [ "<32>{#p/basic}{#npc/a}* Or maybe I'm just crazy." ]
         ),
         t_politics: pager.create(
            0,
            () =>
               SAVE.data.n.plot === 72
                  ? [
                       '<32>{#p/basic}{#npc/a}* I heard the king revealed the truth about the humans he supposedly killed.',
                       "<32>* Everyone felt so bad that they didn't know.\n* They all gave him a big hug.",
                       '<32>* Then they took the humans and adopted them for themselves.',
                       '<32>* Now the humans will get to live their lives with us.',
                       "<32>* Thaaaaaat's politics!"
                    ]
                  : papreal()
                  ? [
                       '<32>{#p/basic}{#npc/a}* Hmmm, usually Papyrus goes to meet with Undyne about now.',
                       '<32>* Where is he...?\n* I can feel our political system crumbling apart...'
                    ]
                  : world.popmax(0) - world.population > 4
                  ? [
                       '<32>{#p/basic}{#npc/a}* This town has no real police.\n* But maybe the fake police will scare off the bullies.',
                       '<32>* The politics carry on...'
                    ]
                  : world.trueKills > 0 || SAVE.data.n.bully > 0
                  ? [
                       '<32>{#p/basic}{#npc/a}* This town has no mayor.',
                       '<32>* But, if anything happens, a skeleton will tell a fish lady about it.',
                       "<32>* Thaaaaaat's politics!"
                    ]
                  : [
                       '<32>{#p/basic}{#npc/a}* This town is always so dreary.',
                       "<32>* But, if things keep going the way they are, maybe that'll change.",
                       '<32>* Is that politics?'
                    ],
            () =>
               SAVE.data.n.plot === 72
                  ? [ "<32>{#p/basic}{#npc/a}* You see?\n* Politics isn't all bad..." ]
                  : papreal() || world.popmax(0) - world.population > 4
                  ? [ '<32>{#p/basic}{#npc/a}* Politics...' ]
                  : world.trueKills > 0 || SAVE.data.n.bully > 0
                  ? [ '<32>{#p/basic}{#npc/a}* Politics.' ]
                  : [ '<32>{#p/basic}{#npc/a}* Politics?' ]
         ),
         t_rabbit: pager.create(
            0,
            () =>
               SAVE.data.n.plot === 72
                  ? [
                       '<32>{#p/basic}{#npc/a}* Long ago, I heard they didn\'t have such fancy things as "force fields."',
                       '<32>* All I can say... is that it feels good to be back.'
                    ]
                  : papreal()
                  ? [
                       '<32>{#p/basic}{#npc/a}* Long ago, I heard they had to deal with under-population.',
                       "<32>* At this rate... we'll be back to having that same problem."
                    ]
                  : [
                       '<32>{#p/basic}{#npc/a}* Long ago, I heard they split the town into two halves.',
                       '<32>* I wonder what it looked like before...?'
                    ],
            () =>
               SAVE.data.n.plot === 72
                  ? [ '<32>{#p/basic}{#npc/a}* Thanks for bringing us back.' ]
                  : papreal()
                  ? [ "<32>{#p/basic}{#npc/a}* You feel it too, don't you?" ]
                  : [ "<32>{#p/basic}{#npc/a}* I think I've figured it out.", '<32>* ...', '<32>* ... no, never mind.' ],
            () =>
               SAVE.data.n.plot === 72
                  ? [ '<32>{#p/basic}{#npc/a}* Thanks for bringing us back.' ]
                  : papreal()
                  ? [ "<32>{#p/basic}{#npc/a}* You feel it too, don't you?" ]
                  : [ "<32>{#p/basic}{#npc/a}* I'll get back to you on that." ]
         ),
         t_smileguy: pager.create(
            0,
            () =>
               SAVE.data.n.plot === 72
                  ? world.population < 2
                     ? [
                          "<32>{#p/basic}{#npc/a}* So we're free, huh?",
                          "<32>* I guess I don't have to keep smiling anymore...",
                          "<32>* ... strange.\n* I don't feel like not smiling, but smiling also seems wrong.",
                          "<32>* This is too deep.\n* I'm sticking to what I know."
                       ]
                     : [
                          "<32>{#p/basic}{#npc/a}* So we're free, huh?",
                          "<32>* I guess I don't have to keep smiling anymore...",
                          "<32>* ... huh.\n* Then why can't I stop?",
                          "<32>* For some reason, I don't want to stop smiling now!"
                       ]
                  : papreal()
                  ? [ '<32>{#p/basic}{#npc/a}* Just now, I felt my smile falter for a moment.', "<32>* What's wrong?" ]
                  : [
                       "<32>{#p/basic}{#npc/a}* We all know things haven't gone how we'd hoped, but we smile anyway.",
                       '<32>* Why?',
                       '<32>* This is our reality, so why be morose about it?'
                    ],
            () =>
               SAVE.data.n.plot === 72
                  ? world.population < 2
                     ? [ '<32>{#p/basic}{#npc/a}* Smile smile.' ]
                     : [ '<32>{#p/basic}{#npc/a}* Smile smile!' ]
                  : papreal()
                  ? [ '<32>{#p/basic}{#npc/a}* Smile smile?' ]
                  : [ '<32>{#p/basic}{#npc/a}* Smile smile.' ]
         ),
         t_wisconsin: pager.create(
            0,
            () =>
               SAVE.data.n.plot === 72
                  ? world.population < 2
                     ? [
                          '<32>{#p/basic}{#npc/a}* Freedom...',
                          "<32>* That means I don't have to worry about getting beat up anymore.",
                          '<32>* Haha.'
                       ]
                     : [
                          '<32>{#p/basic}{#npc/a}* Freedom...',
                          "<32>* That means I don't have to worry about cracking jokes anymore.",
                          '<32>* ...',
                          '<32>* What does a mouse do when it finally gets the cheese?',
                          '<32>* ...',
                          '<32>* Well...',
                          "<32>* It probably doesn't worry about cracking jokes, that's for sure.",
                          '<32>* Haha.'
                       ]
                  : world.dead_dog || world.dead_skeleton || world.population < 6
                  ? [
                       '<32>{#p/basic}{#npc/a}* It just feels like...',
                       '<32>* Like everything is getting worse, and worse...\n* And worse.'
                    ]
                  : [
                       '<32>{#p/basic}{#npc/a}* Everyone is always laughing and cracking jokes, trying to forget our modern crises...',
                       '<32>* Dreariness.\n* Crowding.\n* Lack of a homeworld.',
                       "<32>* I would join them, but I just don't feel like being funny."
                    ],
            () =>
               SAVE.data.n.plot === 72
                  ? world.population < 2
                     ? [ "<32>{#p/basic}{#npc/a}* Sorry.\n* That wasn't funny." ]
                     : [
                          '<32>{#p/basic}{#npc/a}* Sorry.\n* I guess you could say...',
                          '<32>* That joke was a little too "cheesy."'
                       ]
                  : world.dead_dog
                  ? [ '<32>{#p/basic}{#npc/a}* ... and worse still.' ]
                  : [ "<32>{#p/basic}{#npc/a}* At least I'm not making puns." ],
            () =>
               SAVE.data.n.plot === 72
                  ? world.population < 2
                     ? [ '<32>{#p/basic}{#npc/a}* You should leave before I stop being nice to you.' ]
                     : [ "<32>{#p/basic}{#npc/a}* Yes.\n* That was a pun.\n* I'm a pun mouse now." ]
                  : world.dead_dog
                  ? [ '<32>{#p/basic}{#npc/a}* ... and worse still.' ]
                  : [ "<32>{#p/basic}{#npc/a}* At least I'm not making puns." ]
         ),
         t_zorren: pager.create(
            0,
            () => [
               "<32>{#p/basic}{#npc/a}* (Oh, hey, it's me, Zorren.)",
               ...(SAVE.data.n.plot === 72
                  ? world.population < 4
                     ? [
                          "<32>* (We, uh, can't thank you enough for doing what you did.)",
                          "<32>* (But...)\n* (You've, uh, not exactly been a model citizen.)",
                          "<32>* (Why'd you have to go and, make it all so complicated?)"
                       ]
                     : [
                          "<32>* (We, uh, can't thank you enough for doing what you did.)",
                          "<32>* (But...)\n* (You've, uh, probably heard enough of that, by now.)",
                          "<32>* (So I'll let you get back to, what you were doing.)"
                       ]
                  : world.meanie
                  ? [
                       '<32>* (You uh, got a problem with our, uh, police force, or...?)',
                       '<32>* (...)',
                       "<32>* (Yeah, you know, uh, I don't really like you all that much.)",
                       "<32>* (There's just, something off, particularly about you.)"
                    ]
                  : [
                       ...(SAVE.data.b.oops
                          ? [
                               '<32>* (You uh, got a problem with our, uh, police force, or...?)',
                               '<32>* (No?)\n* (Hey, thanks for uh, not doing that.)'
                            ]
                          : [
                               "<32>* (Y'know, you seem like someone who likes to show respect.)",
                               '<32>* (So, thanks for, uh, doing that.)'
                            ]),
                       ...(SAVE.data.b.s_state_capstation
                          ? []
                          : ((SAVE.data.b.s_state_capstation = true),
                            [
                               '<32>* (In fact...)',
                               '<32>* (Here, kid.)\n* (Have a key, on us.)',
                               '<32>{#s/equip}{#p/human}* (The Rusty Key was added to your keyring.)',
                               '<32>* (Check your CELL to see all acquired keys.)',
                               "<32>{#p/basic}{#npc/a}* (We've, uh, got an armory somewhere, I think.)"
                            ])),
                       ...(SAVE.data.b.oops
                          ? [
                               '<32>* (Psst...)\n* (Just between us, Kabakk and I built this station ourselves.)',
                               '<32>* (Pretty cool, huh?)'
                            ]
                          : [
                               '<32>* (Psst...)\n* (Just between us, Kabakk and I built this station ourselves.)',
                               '<32>* (Pretty cool, huh?)'
                            ])
                    ])
            ],
            () =>
               SAVE.data.n.plot === 72
                  ? world.population < 4
                     ? [ '<32>{#p/basic}{#npc/a}* (Do better, my friend.)\n* (Do better.)' ]
                     : [ '<32>{#p/basic}{#npc/a}* (Carry on, my friend.)\n* (Carry on.)' ]
                  : world.meanie
                  ? [ '<32>{#p/basic}{#npc/a}* (Get outta here.)' ]
                  : SAVE.data.b.oops
                  ? [ "<32>{#p/basic}{#npc/a}* (Yeah, we're not real police.)" ]
                  : [
                       '<32>{#p/basic}{#npc/a}* (We may not be real police, but people like you are worth protecting and serving.)'
                    ]
         )
      },
      objinter: {
         ctower0: () => [
            '<32>{#p/human}* (You inspect the terminal.)',
            ...(SAVE.data.b.svr
               ? [
                    '<32>{#p/human}* (The note describes reducing the total to zero by adding or subtracting powers of ten.)'
                 ]
               : [
                    '<32>{#p/basic}* There are written instructions tacked onto the side...',
                    '<33>* It\'s illegible chicken-scratch.\n* The only word you can make out is "zero."'
                 ])
         ],
         ctower1: () =>
            SAVE.data.b.svr
               ? [ '<32>{#p/human}* (But you already completed this puzzle beforehand.)' ]
               : SAVE.data.n.plot === 72
               ? [ "<32>{#p/basic}* The terminal's unlocked state is now permanent." ]
               : [ '<32>{#p/basic}* The terminal is now in an unlocked state.' ],
         microwave0: [ '<32>{#p/human}* (You look behind the microwave...)', '<32>{#p/basic}* Nothing useful here.' ],
         microwave1: () =>
            SAVE.data.b.svr
               ? [
                    '<32>{#p/human}* (You look behind the microwave...)',
                    '<32>{#s/equip}{#p/human}* (You pulled the switch.)'
                 ]
               : [
                    '<32>{#p/human}* (You look behind the microwave...)',
                    "<32>{#p/basic}* There's a switch here...",
                    '<32>{#s/equip}{#p/human}* (You pulled the switch.)'
                 ],
         microwave2: () =>
            SAVE.data.b.svr
               ? [
                    '<32>{#p/human}* (You look behind the microwave...)',
                    '<32>{#p/human}* (But you already flipped the switch here.)'
                 ]
               : [ '<32>{#p/human}* (You look behind the microwave...)', '<32>{#p/basic}* Nothing new back here.' ],
         microwave3: () =>
            SAVE.data.b.svr
               ? [ "<32>{#p/human}* (But you didn't notice anything of note about this appliance.)" ]
               : [
                    '<32>{#p/basic}* A standard-issue CITADEL dielectric heater, circa 260X.',
                    "<32>* It's a microwave.\n* Can't be over a decade old."
                 ],
         microwave4: () => [
            '<32>{#p/basic}* It seems to be projecting some kind of gravity field.',
            ...(SAVE.data.b.oops ? [ "<32>{#p/basic}* I wonder... if there's a switch somewhere..." ] : [])
         ],
         papmail1: () =>
            SAVE.data.b.svr
               ? [ "<32>{#p/human}* (But you didn't have any mail to send.)" ]
               : [
                    '<32>{#p/basic}* This mailbox is labelled "PAPYRUS."',
                    choicer.create('* (Look inside the mailbox?)', 'Yes', 'No')
                 ],
         papmail2: pager.create(
            0,
            () =>
               SAVE.data.n.plot === 72
                  ? [
                       '<32>{#p/human}* (You look inside...)',
                       SAVE.flag.n.pacifist_marker_bully > 3
                          ? "<32>{#p/basic}* It's even emptier than before."
                          : "<32>{#p/basic}* It's not empty?"
                    ]
                  : [
                       '<32>{#p/human}* (You look inside...)',
                       "<32>{#p/basic}* It's empty.",
                       ...(31 <= SAVE.data.n.plot &&
                       SAVE.data.n.plot_date < 0.1 &&
                       SAVE.data.n.state_starton_papyrus !== 1
                          ? [
                               '<18>{#p/papyrus}{#f/0}HOW NICE OF YOU TO CHECK MY MAIL!',
                               "<18>{#p/papyrus}{#f/4}THANKFULLY, I'VE ALREADY COLLECTED IT ALL."
                            ]
                          : [])
                    ],
            () =>
               SAVE.data.n.plot === 72
                  ? [
                       '<32>{#p/human}* (You look inside...)',
                       SAVE.flag.n.pacifist_marker_bully > 3
                          ? "<32>{#p/basic}* It's even emptier than before."
                          : "<32>{#p/basic}* It's not empty?"
                    ]
                  : [ '<32>{#p/human}* (You look inside...)', "<32>{#p/basic}* It's empty." ]
         ),
         papmail3: [ '<32>{#p/human}* (You decide not to look.)' ],
         puzzle3: () => [
            '<32>{#p/human}* (You inspect the terminal.)',
            ...(SAVE.data.b.svr
               ? [ '<32>{#p/human}* (The modification log describes the completed state of the puzzle.)' ]
               : [
                    '<32>{#p/basic}* There is a log of previous modifications...',
                    '<32>* "Pattern has been solved!"\n* "You may now exit."'
                 ])
         ],
         puzzlechip: () =>
            SAVE.data.b.svr
               ? [ '<32>{#p/human}* (But you already completed this puzzle beforehand.)' ]
               : [ '<32>{#p/basic}* The terminal is now in an unlocked state.' ],
         spagtable0: [ "<32>{#p/basic}* It's an unused plate." ],
         spagtable1: [
            '<32>{#p/human}* (You gaze upon the mouth- watering spaghetti.)',
            '<32>{#p/human}* (It appears to be just beyond your reach.)'
         ],
         spagtable2: [ '<32>{#p/human}* (You got the Spaghetti.)' ],
         spagtable2b: [ "<32>{#p/human}* (You're carrying too much to take that.)" ],
         spagtable3: () =>
            SAVE.data.b.svr
               ? [ '<32>{#p/human}* (You feel appreciative towards this plate for the food it served you.)' ]
               : world.darker
               ? [ "<32>{#p/basic}* Why bother.\n* It's just a simple plate." ]
               : [ '<32>{#p/basic}* Once the home of a truly out- of-this-world creation.' ],
         xtower1: pager.create(0, () => [
            '<32>{#p/human}* (You inspect the terminal.)',
            ...(SAVE.data.b.svr
               ? [
                    [
                       "<25>{#p/asriel1}{#f/13}* It's offline.\n* But it makes sense they'd shut this off.",
                       "<25>{#f/17}* Wouldn't want anyone to get distracted and miss the transport, right?"
                    ],
                    [
                       "<25>{#p/asriel1}{#f/13}* To be fair, I don't think they'd actually let someone miss it.",
                       '<25>{#f/13}* Dr. Alphys probably has some kind of thing to scan for SOULs, so...',
                       "<25>{#f/17}* They'd know if anyone was left behind.",
                       '<25>{#f/15}* Makes me wonder if they can see us out here right now...'
                    ],
                    [ "<25>{#p/asriel1}{#f/17}* Don't worry, Frisk.\n* The new homeworld will have plenty of games." ]
                 ][Math.min(asrielinter.xtower1++, 2)]
               : [
                    "<32>{#p/basic}* It's a game terminal...",
                    ...(SAVE.data.n.plot === 72 || world.postnoot
                       ? [ '<32>{#p/basic}* The power supply has been cut.' ]
                       : [ '<32>{#p/basic}* "Shoot targets as fast as you can! Use [Z] to shoot."' ])
                 ])
         ])
      },
      papbooks1: pager.create(
         0,
         () =>
            SAVE.data.b.svr
               ? [ "<32>{#p/human}* (The books on this bookshelf consist of puzzler's guides and children's stories.)" ]
               : [
                    '<32>{#p/basic}* The bookshelf is filled with complex tomes about puzzle creation.',
                    "<32>* And children's books.",
                    ...(roomready()
                       ? [
                            '<18>{#p/papyrus}SOME OF MY FAVORITE BOOKS ARE ON THAT SHELF.',
                            '<18>{#f/4}LIKE "ADVANCED PUZZLE CONSTRUCTS FOR BRIGHT MINDS."',
                            '<18>{#f/0}AND ANOTHER FAVORITE OF MINE?',
                            '<18>{#f/4}"PEEK-A-BOO WITH FLUFFY BUNNY."',
                            '<18>{#f/8}THE ENDING ALWAYS GETS ME!'
                         ]
                       : [])
                 ],
         () =>
            SAVE.data.b.svr
               ? [ "<32>{#p/human}* (The books on this bookshelf consist of puzzler's guides and children's stories.)" ]
               : [ "<32>{#p/basic}* Complex manuals and children's books." ]
      ),
      papbooks2: pager.create(
         1,
         [
            '<32>{#p/human}* (You pick out a book...)',
            '<32>{#p/basic}* "The cornerstone of a puzzle\'s interactive value is the player\'s affectation."',
            '<32>* "The tacit drive within every player to explore, progress, and complete a given task."',
            '<32>* "A puzzle that challenges and engages these motivations will ensure..."',
            '<32>* "The player remains focused and on task until the very end."',
            '<32>{#p/human}* (You put the book back on the shelf.)'
         ],
         [
            '<32>{#p/human}* (You pick out a book...)',
            '<32>{#p/basic}* "\'Peek-A-Boo!\' said the human, appearing from behind the wall."',
            '<32>* "The fluffy bunny, surprised, looked at the human excitedly."',
            '<32>* "Then, the human moved away... no longer able to see them, the fluffy bunny was sad."',
            '<32>* "It shook, thinking about how lonely it\'d be."',
            '<32>* "It wanted to cry, thinking it\'d been abandoned for all eternity..."',
            '<32>* "But then, the human appeared once again, and all was right with the world."',
            '<32>* "The human and the bunny gave each other a big, fluffy hug."',
            '<32>{#p/human}* (You put the book back on the shelf.)'
         ],
         () =>
            SAVE.flag.n.pacifist_marker_bully > 3
               ? [
                    '<32>{#p/human}* (You pick out a book...)',
                    '<23>{#p/papyrusnt}"DEAR DAIRY, THE FORCE FIELD HAS BEEN DESTROYED."',
                    '<23>"FRISK, THE HUMAN WHO CAME TO THE OUTPOST JUST A FEW DAYS AGO..."',
                    '<23>"IS NOW THE SUBJECT OF FEAR AMONG EVERYONE ON THE OUTPOST."',
                    '<23>"WE\'RE ALL LEAVING RIGHT AWAY, BEFORE THEY WAKE UP."',
                    '<23>"STILL, A PART HOPES THEY FIND THEIR WAY OFF THE OUTPOST, TOO."',
                    '<23>"EVERYONE ELSE JUST SEEMS CONTENT LEAVING THEM TO DIE."',
                    '<32>{#p/human}* (You put the book back on the shelf.)'
                 ]
               : SAVE.data.n.plot === 72
               ? [
                    '<32>{#p/human}* (You pick out a book...)',
                    '<23>{#p/papyrusnt}"DEAR DAIRY, THE FORCE FIELD HAS BEEN DESTROYED."',
                    '<23>"FRISK, THE HUMAN WHO CAME TO THE OUTPOST JUST A FEW DAYS AGO..."',
                    '<23>"TOOK ON IMPOSSIBLE ODDS TO SAVE US FROM DESTRUCTION."',
                    '<23>"MAYBE THIS IS WHAT\'LL INSPIRE SANS TO MOVE UP IN THE WORLD."',
                    '<23>"I ONLY MENTION IT BECAUSE, I NEVER KNEW HIS SENTRY JOB..."',
                    '<23>"MEANT DOING SO LITTLE ACTUAL WORK."',
                    '<32>{#p/human}* (You put the book back on the shelf.)'
                 ]
               : [
                    '<32>{#p/human}* (You pick out a book...)',
                    '<23>{#p/papyrusnt}"DEAR DAIRY, SANS HAS JUST BEEN MADE AN OFFICIAL ROYAL SENTRY."',
                    '<23>"AT FIRST, I WAS CONFUSED AT HIM..."',
                    '<23>"AFTER ALL, WHY WOULD SOMEBODY SO LAZY WANT TO TAKE THIS ON?"',
                    '<23>"WELL, I DECIDED NOT TO QUESTION IT."',
                    '<23>"THE TRUTH IS, I COULDN\'T BE MORE PROUD OF HIM!!!"',
                    '<23>"ONLY TIME WILL TELL WHAT GREAT THINGS THIS BRINGS FORTH."',
                    '<32>{#p/human}* (You put the book back on the shelf.)'
                 ]
      ),
      papcomputer1: pager.create(
         0,
         () => [
            ...(roomready()
               ? [
                    "<18>{#p/papyrus}THE OUTERNET!\nI'M QUITE POPULAR THERE.",
                    "<18>{#f/4}I'M JUST A DOZEN AWAY...",
                    '<18>{#f/0}FROM A DOUBLE DIGIT FOLLOWER COUNT!'
                 ]
               : []),
            SAVE.data.b.svr
               ? '<32>{#p/human}* (You move towards the computer...)'
               : "<32>{#p/basic}* The computer's web browser is opened to a social media site.",
            choicer.create("* (Log in to Papyrus's account?)", 'Yes', 'No')
         ],
         () => [
            SAVE.data.b.svr
               ? '<32>{#p/human}* (You move towards the computer...)'
               : "<32>{#p/basic}* The computer's web browser is opened to a social media site.",
            choicer.create("* (Log in to Papyrus's account?)", 'Yes', 'No')
         ]
      ),
      papcomputer2: [ '<32>{#p/human}* (You decide not to log in.)' ],
      papcomputer3: {
         a: 'COOLSKELETON95',
         b: '-2 FOLLOWERS',
         c: 'THIS ACCOUNT\nIS OWNED BY\nTHE GREAT\nPAPYRUS.\nHIGH-QUALITY\nPOSTS ONLY!',
         d: '- NEWS -',
         e: () =>
            SAVE.flag.n.pacifist_marker_bully > 3
               ? 'BREAKING:\n..\n..\n..\n..\n.. WE ALL NEED\nTO LEAVE.'
               : SAVE.data.n.plot === 72
               ? 'BREAKING:\nWE CAN LEAVE.\nLIKE..\nFOR REAL.\nSOURCE:\nLOOK OUTSIDE,\nPEOPLE!'
               : "BREAKING:\nMEW MEW STAR-\nFIRE IS..\nSUPER BAD.\nSOURCE:\nLIKE, IT'S\nJUST TRUE?"
      },
      papcomputer4: [
         () =>
            SAVE.flag.n.pacifist_marker_bully > 3
               ? {
                    a: 'HOWDY!',
                    b: 'SAVE YOURSELVES...',
                    c: ''
                 }
               : SAVE.data.n.plot === 72
               ? {
                    a: 'HOWDY!',
                    b: 'FAILED TO CONNECT...',
                    c: ''
                 }
               : {
                    a: 'HOWDY!',
                    b: 'SHARE YOUR THOUGHTS...',
                    c: ''
                 },
         () =>
            SAVE.flag.n.pacifist_marker_bully > 3
               ? {
                    a: 'ALPHYS',
                    b: 'TODAY',
                    c: '< message deleted >'
                 }
               : SAVE.data.n.plot === 72
               ? {
                    a: 'SYSTEM',
                    b: 'TODAY',
                    c: 'The OuterNet is closed.'
                 }
               : SAVE.data.n.plot < 34
               ? {
                    a: 'NAPSTABLOOK22',
                    b: 'TODAY',
                    c: 'this is why i never go\nonline anymore... nothing\nmeaningful ever happens'
                 }
               : world.genocide
               ? {
                    a: 'NAPSTABLOOK22',
                    b: 'TODAY',
                    c: "but i'm a ghost..."
                 }
               : world.dead_skeleton
               ? {
                    a: 'NAPSTABLOOK22',
                    b: 'TODAY',
                    c: "umm... i'll just keep\nworking on this mix..."
                 }
               : {
                    a: 'lazybones.',
                    b: 'TODAY',
                    c: "let's just hope he\ndoesn't capture our SOULs~\n*finger guns*"
                 },
         () =>
            SAVE.flag.n.pacifist_marker_bully > 3
               ? {
                    a: 'lazybones.',
                    b: 'TODAY',
                    c: '< message deleted >'
                 }
               : SAVE.data.n.plot === 72
               ? {
                    a: 'ALPHYS',
                    b: 'TODAY',
                    c: 'whoops, i forgot to shut\noff the server'
                 }
               : SAVE.data.n.plot < 34
               ? {
                    a: 'STRONGFISH91',
                    b: 'YESTERDAY',
                    c: 'uh... dont you say that\nEVERY day, Papyrus?'
                 }
               : world.genocide
               ? {
                    a: 'STRONGFISH91',
                    b: 'TODAY',
                    c: 'stay outta this blooky.\ni dont want you getting\nhurt too.'
                 }
               : world.dead_skeleton
               ? {
                    a: 'STRONGFISH91',
                    b: 'TODAY',
                    c: 'papyrus is gone blooky.\nthat human is going to\nPAY for what they did.'
                 }
               : {
                    a: 'STRONGFISH91',
                    b: 'TODAY',
                    c: 'well no...\nbut he did capture all of\nour hearts! FUHUHU!!'
                 },
         () =>
            SAVE.flag.n.pacifist_marker_bully > 3
               ? {
                    a: 'COOLSKELETON95',
                    b: 'TODAY',
                    c: '< message deleted >'
                 }
               : SAVE.data.n.plot === 72
               ? {
                    a: '_Sp4ceAdv3ntur3r_',
                    b: 'TODAY',
                    c: '< Username Update >\nWas: _K1ll3rMann3qu1n_\nNow: _Sp4ceAdv3ntur3r_'
                 }
               : SAVE.data.n.plot < 34
               ? {
                    a: 'COOLSKELETON95',
                    b: 'YESTERDAY',
                    c: "TODAY'S THE DAY I FINALLY\nCAPTURE A HUMAN!\nI CAN FEEL IT IN MY BONES!"
                 }
               : world.genocide
               ? {
                    a: 'NAPSTABLOOK22',
                    b: 'TODAY',
                    c: 'umm... is there anything\ni can do to help? things\nare getting worse...'
                 }
               : {
                    a: 'NAPSTABLOOK22',
                    b: 'TODAY',
                    c: 'so... did papyrus capture\na human yet? or...'
                 }
      ],
      papcomputer5: () =>
         SAVE.flag.n.pacifist_marker_bully > 3
            ? [ 'FRISK', "DON'T YOU", 'DARE COME', 'AFTER US' ]
            : SAVE.data.n.plot === 72
            ? [ 'SORRY', "BUT WE'RE", 'OFFLINE', 'LMAO' ]
            : [ 'REFRESH', 'MESSAGES', 'SETTINGS', 'LOG OUT' ],
      papcouch0: () =>
         SAVE.data.b.svr
            ? [ "<32>{#p/human}* (You can't seem to find anything in the couch.)" ]
            : [ "<32>{#p/basic}* It's been cleaned out." ],
      papcouch1: pager.create(
         0,
         () => [
            '<32>{#p/human}* (You hear a jangling sound within the couch.)',
            SAVE.data.b.svr
               ? '<32>{#p/human}* (It seems a cache of coins was left here...)'
               : '<32>{#p/basic}* There are a bunch of loose coins inside...',
            choicer.create('* (Take the coins?)', 'Yes', 'No')
         ],
         () => [
            SAVE.data.b.svr
               ? "<32>{#p/human}* (The coins within haven't moved from where they were.)"
               : '<32>{#p/basic}* The coins are still here.',
            choicer.create('* (Take the coins?)', 'Yes', 'No')
         ]
      ),
      papcouch2: [ '<32>{#p/human}* (You decide not to take anything.)' ],
      papcouch3: [ '<32>{#p/human}* (You found 10G.)' ],
      papcouch3a: [
         "<18>{#p/papyrus}{#f/1}YOU'RE CLEANING OUT THE COUCH FOR US!?",
         '<18>{#p/papyrus}{#f/5}AND OUT OF NOTHING BUT THE KINDNESS OF YOUR HEART...',
         '<18>{#p/papyrus}{#f/6}SUCH GENEROSITY!!!'
      ],
      paproom1: [
         '<18>{#p/papyrus}{#f/6}WHAT!?\nHOW DID YOU...',
         '<18>{#p/papyrus}{#f/5}YOU APPEARED RIGHT IN FRONT OF ME!'
      ],
      paproom2: [ '<18>{#p/papyrus}{#f/4}HAS SANS BEEN TEACHING YOU ABOUT SHORTCUTS...?' ],
      paproom3: [ '<18>{#p/papyrus}{#f/7}... UGH!\nSTOP DOING THAT!!' ],
      paproom4: [ "<18>{#p/papyrus}{#f/0}YOU'RE ASKING FOR TROUBLE, HUMAN." ],
      paproom5: [ '<18>{#p/papyrus}{#f/4}SIGH...' ],
      papdate0: () => [
         SAVE.data.b.flirt_papyrus
            ? "<18>{#p/papyrus}{#f/5}WOWIE, YOU'RE SO EAGER TO DATE..."
            : "<18>{#p/papyrus}{#f/5}WOWIE, YOU'RE SO EAGER TO HANG OUT WITH ME...",
         "<18>{#f/5}THAT YOU'RE TRYING TO GO IN MY HOUSE AHEAD OF ME!",
         "<18>{#f/6}THAT'S DEDICATION!"
      ],
      papdate1x: pager.create(
         0,
         [
            '<18>{#p/papyrus}{#f/0}HELLO, HUMAN!',
            '<18>{#f/5}I HOPE EVERYTHING IS ALRIGHT.',
            '<18>{#f/6}FEEL FREE TO TAKE A WALK AROUND TOWN...',
            '<18>{#f/0}... OR A LOOK IN MY HOUSE!'
         ],
         [ "<18>{#p/papyrus}{#f/4}JUST BE SURE TO AVOID SANS'S ROOM." ]
      ),
      papdate1: () => [
         SAVE.data.b.flirt_papyrus
            ? '<18>{#p/papyrus}SO YOU CAME BACK TO HAVE A DATE WITH ME!'
            : '<18>{#p/papyrus}SO YOU CAME BACK TO SEE ME!',
         ...(world.dead_dog || world.population < 6
            ? [
                 "<18>{#f/0}THAT'S GREAT!!",
                 "<18>{#f/5}TRUTH BETOLD, IT'S BEEN A LITTLE LONELY TODAY...",
                 '<18>{#f/5}A LOT OF PEOPLE ARE STRANGELY ABSENT...',
                 "<18>{#f/0}BUT YOU'RE STILL HERE!!",
                 '<18>{#f/0}THAT MEANS SOMETHING, RIGHT??'
              ]
            : [ '<18>{#f/4}YOU MUST BE REALLY SERIOUS ABOUT THIS...' ]),
         "<18>{#f/5}I'LL HAVE TO TAKE YOU SOMEPLACE REALLY SPECIAL...",
         '<18>{#f/0}A PLACE I LIKE TO SPEND A LOT OF TIME!!!'
      ],
      papdate2: [ '<18>{#p/papyrus}MY HOUSE!!!' ],
      papdate3: pager.create(
         0,
         [ '<18>{#p/papyrus}WELCOME TO SCENIC MY HOUSE!', '<18>ENJOY AND TAKE YOUR TIME!!!' ],
         [ "<18>{#p/papyrus}WHEN YOU'RE DONE, HEAD UPSTAIRS TO MY ROOM!" ]
      ),
      papdate3a: [ '<18>{#p/papyrus}{#f/6}WOW! BEING A GOOD HOST IS A REAL WORKOUT!' ],
      papdate3b: [
         "<18>{#p/papyrus}{#f/5}WOWIE, I CAN'T FEEL MY LEGS...",
         "<18>{#f/0}THAT MUST MEAN I'M BEING A GREAT HOST!!!"
      ],
      papdate4: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}THAT'S MY ROOM!",
            "<18>{#f/4}IF YOU'VE FINISHED LOOKING AROUND, WE COULD GO IN AND...",
            '<18>{#f/4}AND...',
            SAVE.data.b.flirt_papyrus
               ? '<18>{#f/9}DO WHATEVER PEOPLE DO WHEN THEY DATE!'
               : '<18>{#f/9}"HANG OUT" LIKE A PAIR OF VERY COOL FRIENDS!',
            choicer.create('* (What do you say?)', 'Yes', 'No')
         ],
         [ '<18>{#p/papyrus}READY?', choicer.create('* (What do you say?)', 'Yes', 'No') ]
      ),
      papdate4a: [ "<18>{#p/papyrus}OKAY, LET'S GO!" ],
      papdate4b: [ "<18>{#p/papyrus}I'LL KEEP WAITING HERE THEN!" ],
      papdate5: pager.create(
         0,
         () => [
            '<18>{#p/papyrus}{#f/5}SO, UM...',
            "<18>{#f/5}IF YOU'VE SEEN EVERYTHING...",
            SAVE.data.b.flirt_papyrus
               ? '<18>{#f/6}DO YOU WANT TO START DATING?'
               : '<18>{#f/6}DO YOU WANT TO START HANGING OUT?',
            choicer.create('* (What do you say?)', 'Yes', 'No')
         ],
         [ '<18>{#p/papyrus}{#f/6}READY TO START?', choicer.create('* (What do you say?)', 'Yes', 'No') ]
      ),
      papdate5a: () => [
         SAVE.data.b.flirt_papyrus
            ? '<18>{#p/papyrus}OKAY!!!\nDATING START!!!'
            : "<18>{#p/papyrus}OKAY!!!\nLET'S HANG TEN!!!"
      ],
      papdate5b: [ "<18>{#p/papyrus}TAKE YOUR TIME, I'LL WAIT FOR YOU." ],
      papdate6: () => [
         SAVE.data.b.flirt_papyrus
            ? '<32>{#p/story}µµµµµµµµ DATING µµ START!'
            : '<32>{#p/story}µµµµµµµµ HANGOUT µ START!'
      ],
      papdate7: () => [
         '<15>{#p/papyrus}{#f/10}HERE WE ARE!!',
         SAVE.data.b.flirt_papyrus ? '<15>{#f/20}ON OUR DATE!!' : '<15>{#f/20}HANGING OUT!!',
         "<15>{#f/24}I'VE ACTUALLY NEVER DONE THIS BEFORE.",
         "<15>{#f/10}BUT DON'T WORRY!!!",
         '<15>{#f/20}PREPERATION IS MY (UNOFFICIAL) LAST NAME!'
      ],
      papdate8: () => [
         '<15>{#f/20}WHAT DO I HAVE HERE, YOU ASK?',
         SAVE.data.b.flirt_papyrus
            ? '<15>{#p/papyrus}{#f/10}AN OFFICIAL DATING GUIDE, STRAIGHT FROM THE LIBRARBY!'
            : '<15>{#p/papyrus}{#f/10}AN OFFICIAL HANGOUT GUIDE, STRAIGHT FROM THE LIBRARBY!',
         "<15>{#f/20}WITH THIS, WE'RE BOUND TO HAVE A GREAT TIME!"
      ],
      papdate9: () => [
         "<15>{#p/papyrus}{#f/25}LET'S SEE...",
         SAVE.data.b.flirt_papyrus
            ? '<15>{#f/25}STEP ONE: PRESS C OR CTRL TO OPEN THE {@fill:#f00}DATING HUD{@fill:#000}.'
            : '<15>{#f/25}STEP ONE: PRESS C OR CTRL TO OPEN THE {@fill:#f00}FRIENDSHIP HUD{@fill:#000}.'
      ],
      papdate10: () => [
         '<15>{#p/papyrus}{#f/24}... WAIT.',
         '<15>{#f/22}YOU ALREADY DID THAT!?!?',
         SAVE.data.b.flirt_papyrus
            ? '<15>{#f/11}WOWIE, YOU MUST REALLY LOVE ME!'
            : '<15>{#f/11}WOWIE, YOU MUST REALLY LIKE ME!',
         "<15>{#f/10}IT'S ONTO STEP TWO, THEN!"
      ],
      papdate11: [
         '<15>{#p/papyrus}{#f/24}...',
         "<15>{#f/24}EH, WE DIDN'T NEED IT ANYWAY.",
         '<15>{#f/20}ONTO STEP TWO!'
      ],
      papdate12: [
         '<15>{#p/papyrus}{#f/11}WOWIE, I FEEL SO INFORMED!',
         "<15>{#f/24}IN FACT, I THINK WE'RE READY FOR STEP TWO..."
      ],
      papdate13: () => [
         SAVE.data.b.flirt_papyrus
            ? '<15>{#p/papyrus}{#f/25}STEP TWO: ASK THEM ON A DATE.'
            : '<15>{#p/papyrus}{#f/25}STEP TWO: ASK THEM TO HANG OUT.'
      ],
      papdate13a: () => [
         '<15>{#f/24}"AHEM."',
         '<15>{#f/20}HUMAN!\nI, THE GREAT PAPYRUS...',
         SAVE.data.b.flirt_papyrus
            ? '<15>{#f/10}WOULD LIKE TO GO ON A DATE WITH YOU!'
            : '<15>{#f/10}WOULD LIKE TO HANG OUT WITH YOU!'
      ],
      papdate14: [ choicer.create('* (What do you say?)', 'Yes', 'No') ],
      papdate15a: [ '<15>{#p/papyrus}{#f/12}R-REALLY???', '<15>{#f/11}WOWIE!!!' ],
      papdate15a1: [ "<15>{#f/24}I GUESS THAT MEANS IT'S TIME FOR STEP THREE..." ],
      papdate15b: [ '<15>{#p/papyrus}{#f/21}OH...', '<15>{#f/27}F-FORTUNATELY, IT ONLY SAYS TO ASK.' ],
      papdate15c: [ "<15>{#f/24}WELL ANYWAY, IT'S TIME FOR STEP THREE..." ],
      papdate16: [ '<15>{#p/papyrus}{#f/25}STEP THREE: PUT ON NICE CLOTHES TO SHOW YOU CARE.' ],
      papdate16a: [ '<15>{#p/papyrus}{#f/24}...', '<15>{#f/24}WAIT A SECOND.' ],
      papdate17: () => [
         '<15>{#f/24}NICE CLOTHES...',
         (
            {
               spacesuit: "<15>{#f/26}THAT OLD SPACESUIT YOU'RE WEARING...",
               halo: '<15>{#f/26}THAT FANCY HALO ON YOUR HEAD...',
               eye: '<15>{#f/26}THAT FORCE FIELD AROUND YOU...',
               temyarmor: "<15>{#f/26}THAT ARMOR YOU'RE WEARING...",
               goggles: '<15>{#f/26}THOSE GOGGLES ON YOUR FACE...',
               visor: '<15>{#f/26}THAT BAND ON YOUR ARM...',
               sonic: "<15>{#f/26}THAT ODD DEVICE YOU'RE CARRYING...",
               heart_locket: '<15>{#f/26}THAT LOCKET AROUND YOUR NECK...'
            } as Partial<CosmosKeyed<string>>
         )[SAVE.data.s.armor] || '<15>{#f/26}THAT THING ON YOUR BODY...',
         "<15>{#f/20}YOU'RE WEARING CLOTHING RIGHT NOW!!!",
         '<15>{#f/24}AND NOT ONLY THAT...',
         '<15>{#f/20}EARLIER TODAY, YOU WERE ALSO WEARING CLOTHING!'
      ],
      papdate17a: () => [
         '<15>{#f/12}NO...!\nCOULD IT BE???',
         SAVE.data.b.flirt_papyrus
            ? '<15>{#f/13}HAVE YOU WANTED TO DATE ME FROM THE VERY BEGINNING???'
            : '<15>{#f/13}HAVE YOU WANTED TO BEFRIEND ME FROM THE VERY BEGINNING???'
      ],
      papdate18a: () => [
         '<15>{#p/papyrus}{#f/22}NO!!',
         '<15>{#f/22}YOU PLANNED IT ALL!!!',
         ...(SAVE.data.b.flirt_papyrus
            ? [
                 '<15>{#f/22}YOU MIGHT EVEN BE BETTER AT DATING THAN I AM!!!',
                 '<15>N-NOOOO!!!\nYOUR {@fill:#003cff}DATING POWER{@fill:#000}...!!!'
              ]
            : [
                 '<15>{#f/22}YOU MIGHT EVEN BE BETTER AT HANGING OUT THAN I AM!!!',
                 '<15>N-NOOOO!!!\nYOUR {@fill:#003cff}FRIENDSHIP POWER{@fill:#000}!!!'
              ])
      ],
      papdate18b: () => [
         '<15>{#p/papyrus}{#f/24}OH...',
         '<15>{#f/21}BUT DESPITE THAT...',
         '<15>{#f/21}YOU STILL CHOSE TO WEAR CLOTHING TODAY OF ALL DAYS...?',
         "<15>{#f/24}IT'S ALMOST LIKE...",
         ...(SAVE.data.b.flirt_papyrus
            ? [
                 '<15>{#f/13}LIKE YOUR INTEREST IN ME WAS PREDESTINED~',
                 '<15>{#f/22}N-NOOOO!!!\nYOUR {@fill:#003cff}DATING POWER{@fill:#000}...!!!'
              ]
            : [
                 '<15>{#f/13}LIKE YOUR FRIENDSHIP WAS PREDESTINED~',
                 '<15>{#f/22}N-NOOOO!!!\nYOUR {@fill:#003cff}FRIENDSHIP POWER{@fill:#000}...!!!'
              ])
      ],
      papdate19: [ '<15>{#p/papyrus}{#f/15}NYEH!', '<15>{#f/15}NYEH HEH HEH!!!' ],
      papdate20: () => [
         "<15>{#p/papyrus}{#f/15}DON'T THINK YOU'VE BESTED ME YET!",
         '<15>{#f/20}I, THE GREAT PAPYRUS...',
         SAVE.data.b.flirt_papyrus
            ? '<15>{#f/20}HAVE NEVER BEEN BEATEN AT DATING...'
            : '<15>{#f/20}HAVE NEVER BEEN BEATEN AT HANGING OUT...',
         '<15>{#f/15}AND I NEVER WILL!!',
         '<15>{#f/10}I CAN EASILY KEEP UP WITH YOU!!!',
         '<15>{#f/24}IN FACT...',
         '<15>{#f/20}I ALWAYS WEAR MY "SPECIAL" CLOTHES...',
         '<15>{#f/20}UNDERNEATH MY REGULAR ONES!!',
         '<15>{#f/15}BEHOLD!!'
      ],
      papdate21: [ '<15>{#p/papyrus}{#f/15}WHAT DO YOU THINK OF MY SECRET STYLE?' ],
      papdate22: [ choicer.create('* (What do you say?)', 'It rocks', 'It sucks') ],
      papdate23a: [ '<15>{#p/papyrus}{#f/13}NO!!!', '<15>{#f/13}A GENUINE COMPLIMENT...!' ],
      papdate23b: [ '<15>{#p/papyrus}{#f/13}NO!!!', '<15>{#f/13}A CRITICAL, YET HONEST REVIEW...!' ],
      papdate24: [
         '<15>{#p/papyrus}{#f/24}HOWEVER...',
         "<15>{#f/20}YOU DON'T TRULY UNDERSTAND THE {@fill:#f00}HIDDEN POWER{@fill:#000} OF THIS OUTFIT!",
         '<15>{#f/26}THEREFORE...'
      ],
      papdate24a: () => [
         '<15>{#f/15}WHAT YOU JUST SAID IS INVALID!!',
         SAVE.data.b.flirt_papyrus
            ? "<15>{#f/15}THIS DATE WON'T ESCALATE ANY FURTHER!"
            : "<15>{#f/15}THIS HANGOUT WON'T ESCALATE ANY FURTHER!",
         '<15>{#f/24}UNLESS...',
         '<15>{#f/20}YOU CAN FIND MY {@fill:#f00}SECRET{@fill:#000}.',
         "<15>{#f/15}BUT THAT WON'T HAPPEN!!"
      ],
      papdate24b: '* Move and inspect with [Z].',
      papdate25: [
         // yes this is a reference to the bees disappearing line from journey's end shutu-
         '<15>{#p/papyrus}{#f/21}THE WIG ON MY HEAD...?',
         '<15>{#f/16}THE WIG ON MY HEAD.',
         '<15>{#f/10}THE WIG... ON MY HEAD!!!',
         "<15>{#f/10}NYEH HEH HEH!\nTHAT'S VERY SIGNIFICANT INDEED!"
      ],
      papdate25a: [
         '<15>{#p/papyrus}{#f/21}OVERWHELMED BY THE SIGHT OF MY "STELLAR" OUTFIT?',
         '<15>{#f/24}NO, NO, I UNDERSTAND.',
         "<15>{#f/20}BUT YOU CAN'T BACK DOWN NOW!!!"
      ],
      papdate25b: [
         '<15>{#p/papyrus}{#f/26}THIS SHIRT DIDN\'T ORIGINALLY SAY "STELLAR..."',
         '<15>{#f/20}BUT I IMPROVED IT!',
         '<15>{#f/10}EXPERT TIP: ALL CLOTHING CAN BE IMPROVED THIS WAY.',
         "<15>{#f/20}... BUT THAT'S NOT A SECRET!\nTRY AGAIN!"
      ],
      papdate25c: [
         '<15>{#p/papyrus}{#f/24}I SEE, I SEE.',
         '<15>{#f/24}YOU LIKE FEELING MY ARM- PILLOWS WITH A FLOATING HEART.',
         "<15>{#f/20}BUT WHO DOESN'T!?\nTRY AGAIN!"
      ],
      papdate25d: [
         "<15>{#p/papyrus}{#f/13}HOLDING MY HAND SO I'LL TELL YOU THE ANSWER...?",
         '<15>{#f/14}N-NO, I MUST RESIST!!',
         '<15>{#f/20}TRY AGAIN!'
      ],
      papdate25e: [
         "<15>{#p/papyrus}{#f/26}PILLOWS OR NOT, THERE'S NO SECRET TO MY LEGS.",
         '<15>{#f/10}ONLY HARD WORK AND PERSEVERANCE!',
         '<15>{#f/20}TRY AGAIN!'
      ],
      papdate25f: [
         '<15>{#p/papyrus}{#f/24}THIS "DRIP" MAY BE UNDE- FEET-ABLE...',
         '<15>{#f/20}BUT EXPECTING A SECRET HERE IS TOTALLY UNREASONABLE!',
         '<15>{#f/20}TRY AGAIN!'
      ],
      papdate25g: [
         '<15>{#p/papyrus}{#f/20}AH YES, MY TOP-OF-THE-LINE SPORTSWEAR!',
         "<15>{#f/24}YOU WON'T FIND ANY SECRETS HERE, THOUGH, BECAUSE...",
         "<15>{#f/20}I DON'T HAVE ANY POCKETS TO HIDE THEM IN!!!",
         '<15>{#f/20}TRY AGAIN!'
      ],
      papdate25h: () => [
         '<15>{#p/papyrus}{#f/24}MY SHOULDERS...',
         '<15>{#f/10}ARE YOU ASKING FOR A PIGGYBACK RIDE??',
         SAVE.data.b.flirt_papyrus
            ? "<15>{#f/24}WELL, I'D GIVE IT TO YOU IF WE WEREN'T SO BUSY DATING."
            : "<15>{#f/24}WELL, I'D GIVE IT TO YOU IF WE WEREN'T SO BUSY HANGING OUT.",
         '<15>{#f/20}BUT WE ARE!\nSO TRY AGAIN!'
      ],
      papdate25i: [
         '<15>{#p/papyrus}{#f/14}SERIOUSLY??',
         "<15>{#f/19}I'M NOT JUST GOING TO -TELL- YOU THE SECRET...",
         "<15>{#f/20}YOU'LL HAVE TO TRY A LITTLE HARDER THAN THAT!"
      ],
      papdate25j: () =>
         calcLV() > 2
            ? [
                 '<15>{#p/papyrus}{#f/24}IF YOUR {@fill:#f00}LV{@fill:#000} IS THIS HIGH, THEN...',
                 SAVE.data.b.flirt_papyrus
                    ? '<15>{#f/28}YOUR {@fill:#f00}LOVE{@fill:#000} FOR ME MUST BE EVEN GREATER THAN I THOUGHT!'
                    : "<15>{#f/28}YOU'VE GOT MORE EXPERIENCE WITH {@fill:#f00}LOVE{@fill:#000} THAN I THOUGHT!",
                 "<15>{#f/24}STILL, THAT'S YOUR SECRET, NOT MINE.",
                 '<15>{#f/20}TRY AGAIN!'
              ]
            : calcLV() === 2
            ? [
                 '<15>{#p/papyrus}{#f/24}AN {@fill:#f00}LV{@fill:#000} OF TWO?',
                 '<15>{#f/27}DOES THAT MEAN...',
                 ...(SAVE.data.b.flirt_papyrus
                    ? [
                         '<15>{#f/28}YOU HAVE A SECRET SECOND {@fill:#f00}LOVE{@fill:#000} INTEREST...?',
                         '<15>{#f/20}WELL, THIS IS SUPPOSED TO BE ABOUT MY SECRET!!'
                      ]
                    : [
                         '<15>{#f/28}YOUR INTEREST IN ME IS SECRETLY TWO-FOLD?',
                         '<15>{#f/28}THAT DEEP DOWN, YOU {@fill:#f00}LOVE{@fill:#000} ME AS MUCH AS YOU LIKE ME?',
                         '<15>{#f/14}N-NO...!\nI WILL NOT SUCCUMB TO YOUR TRICKS!'
                      ]),
                 '<15>{#f/20}TRY AGAIN!'
              ]
            : SAVE.data.b.oops
            ? [
                 '<15>{#p/papyrus}{#f/24}AN {@fill:#f00}LV{@fill:#000} OF ONE?',
                 '<15>{#f/26}DOES THAT MEAN...',
                 "<15>{#f/28}THAT I'M YOUR ONE TRUE {@fill:#f00}LOVE{@fill:#000}...?",
                 ...(SAVE.data.b.flirt_papyrus
                    ? [ '<15>{#f/14}N-NO...!\nI WILL NOT SUCCUMB TO YOUR TRICKS!' ]
                    : [
                         "<15>{#f/24}WELL, THAT WOULDN'T MAKE SENSE IF WE'RE JUST FRIENDS.",
                         '<15>{#f/14}B-BUT... NO!\nI WILL NOT SUCCUMB TO YOUR TRICKS!'
                      ]),
                 '<15>{#f/20}TRY AGAIN!'
              ]
            : [
                 '<15>{#p/papyrus}{#f/24}AN {@fill:#f00}LV{@fill:#000} OF ZERO?',
                 "<15>{#f/26}OKAY, THAT'S WEIRD.",
                 "<15>{#f/21}SANS TOLD ME A HUMAN'S {@fill:#f00}LOVE{@fill:#000} STARTS AT ONE.",
                 '<15>{#f/24}HMM...',
                 '<15>{#f/24}IS THIS YOUR SECRET?',
                 '<15>{#f/20}WELL, THIS IS SUPPOSED TO BE ABOUT MY SECRET!',
                 '<15>{#f/20}TRY AGAIN!'
              ],
      papdate25k: () => [
         ...(SAVE.data.n.hp > calcHP()
            ? [
                 '<15>{#p/papyrus}{#f/22}WHAT!?\nAN HP EVEN -FULLER- THAN FULL!?',
                 '<15>{#f/10}YOU REALLY CAME PREPARED FOR ANYTHING!',
                 '<15>{#f/24}BUT THIS HAS NOTHING TO DO WITH MY SECRET.'
              ]
            : [
                 '<15>{#p/papyrus}{#f/24}YOUR HP MAY BE FULL, BUT WHEN IT COMES TO SECRETS...',
                 "<15>{#f/20}YOU'RE STILL RUNNING ON EMPTY!"
              ]),
         '<15>{#f/20}TRY AGAIN!'
      ],
      papdate25l: [
         "<15>{#p/papyrus}{#f/20}SO THAT'S HOW IT IS...",
         '<15>{#f/24}YOU THINK BY SCRATCHING MY NECK...',
         '<15>{#f/21}AND CALLING ME A "GOOD BOY..."',
         "<15>{#f/24}I'LL BARK THE ANSWER AT YOU LIKE A DOG.",
         '<15>{#f/20}LAST I CHECKED, I WAS A SKELETON!\nSO TRY AGAIN!'
      ],
      papdate26: () => [
         '<15>{#p/papyrus}{#f/27}W-WELL THEN...',
         '<15>{#f/27}YOU FOUND MY SECRET!',
         '<15>{#f/24}I SUPPOSE I HAVE NO CHOICE BUT TO ADMIT THE TRUTH.',
         "<15>{#f/24}IT'S A PRESENT...",
         [ '<15>{#f/27}A PRESENT J-JUST FOR YOU!!!', '<15>{#f/27}A PRESENT FOR US TO SHARE!!!' ][
            (SAVE.data.n.state_papyrus_spaghet + 1) % 2
         ],
         '<15>{#f/10}GO AHEAD!\nOPEN IT!'
      ],
      papdate27: [ choicer.create('* (What will you do?)', 'Open it', 'Do not') ],
      papdate28: [
         "<15>{#p/papyrus}{#f/21}YOU WON'T EVEN HARM MY DELICATE WRAPPING??",
         '<15>{#f/27}N-NO... THAT TECHNIQUE...',
         "<15>{#f/13}IT'S TOO MUCH!",
         '<15>{#f/14}B-BUT... AHA!\nCOUNTERATTACK!',
         "<15>{#f/15}I'LL OPEN THE PRESENT MYSELF!!"
      ],
      papdate29: [ '<15>{#p/papyrus}{#f/20}DO YOU KNOW WHAT -THIS- IS?' ],
      papdate30: [ choicer.create('* (Do you know what it is?)', 'Yes', 'No') ],
      papdate31a: [
         '<15>{#p/papyrus}{#f/26}SPAGHETTI.',
         "<15>{#f/24}THAT'S PROBABLY WHAT YOU'RE THINKING, ISN'T IT?",
         '<15>{#f/20}RIGHT!',
         '<15>{#f/15}BUT OH-SO-WRONG!'
      ],
      papdate31b: [
         "<15>{#p/papyrus}{#f/20}NYEH HEH HEH!\nTHAT'S RIGHT.",
         '<15>{#p/papyrus}{#f/15}YOU HAVE NO IDEA!',
         '<15>{#f/24}THOUGH THIS APPEARS TO BE SPAGHETTI...'
      ],
      papdate32: () => [
         "<15>{#p/papyrus}{#f/20}THIS ISN'T ANY PLAIN OL' PASTA!",
         "<15>{#f/20}THIS IS AN ARTISAN'S WORK!",
         '<15>{#f/24}SILKEN SPA- GHETTI, FINELY AGED IN A TIME DILATION UNIT.',
         '<15>{#f/20}THEN PREPARED BY ME, MASTER CHEF PAPYRUS!',
         "<15>{#f/15}HUMAN!!!\nIT'S TIME TO END THIS!!",
         "<15>THERE'S NO WAY THIS CAN GO ANY FURTHER!",
         ...[ [ "<15>{#f/20}LET'S EAT THIS SPAGHETTI TOGETHER!!!" ], [ '<15>{#f/20}FEAST UPON MY ULTIMATE TECHNIQUE!!!' ] ][
            (SAVE.data.n.state_papyrus_spaghet + 1) % 2
         ]
      ],
      papdate33: [ choicer.create('* (What will you do?)', 'Eat it', 'Do not') ],
      papdate33a: () => [
         '<32>{#p/human}* (You take a small bite.)\n* (You appear to be blushing from the taste.)',
         "<32>{#p/basic}* It's unbelievable...!",
         ...(SAVE.data.n.state_papyrus_spaghet === 1
            ? [ '<32>{#p/basic}* Papyrus seems to have enjoyed his bite just the same.' ]
            : [])
      ],
      papdate34a: () => [
         '<15>{#p/papyrus}{#f/10}WHAT A PASSIONATE EXPRESSION!!!',
         SAVE.data.b.flirt_papyrus
            ? '<15>{#f/12}YOU MUST REALLY LOVE MY COOKING!'
            : '<15>{#f/12}YOU MUST REALLY LIKE MY COOKING!',
         ...[
            [
               '<15>{#f/24}WELL, I DID TOO...',
               SAVE.data.b.flirt_papyrus
                  ? '<15>{#f/20}BUT I THINK YOU LOVED IT EVEN MORE THAN ME!!!'
                  : '<15>{#f/20}BUT I THINK YOU LIKED IT EVEN MORE THAN ME!!!'
            ],
            [ '<15>{#f/10}AND BY EXTENSION, ME!', '<15>{#f/20}MAYBE EVEN MORE THAN I DO!!!' ]
         ][(SAVE.data.n.state_papyrus_spaghet + 1) % 2],
         "<15>{#f/27}BUT... THAT'S IMPOSSIBLE...!",
         '<15>{#f/12}HOW DID YOU DO THAT!?!?'
      ],
      papdate34b: () => [
         '<15>{#p/papyrus}{#f/21}YOU MEAN...',
         "<15>{#f/18}YOU'RE LETTING ME HAVE IT INSTEAD?",
         ...[
            [
               '<15>{#f/24}I THOUGHT WHEN YOU SAID YOU WERE SHARING...',
               '<15>{#f/20}YOU WOULD AT LEAST WANT A LITTLE FOR YOURSELF.',
               '<15>{#f/27}BUT NO, ALL THIS TIME...',
               '<15>{#f/12}YOU WANTED ME, -ME-, TO HAVE IT ALL!!!'
            ],
            [
               '<15>{#f/21}EVEN AFTER WHAT YOU SAID BEFORE...',
               '<15>{#f/21}ABOUT WANTING MY SPAGHETTI FOR YOURSELF...',
               '<15>{#f/27}AT THE VERY PRECIPICE OF YOUR SATISFACTION, YOU...',
               '<15>{#f/12}YOU GAVE IT ALL UP FOR ME???'
            ]
         ][(SAVE.data.n.state_papyrus_spaghet + 1) % 2]
      ],
      papdate35: [ '<15>{*}{#p/papyrus}{#f/22}AUGH!!!{%15}' ],
      papdate36: [ '<15>{*}{#p/papyrus}{#f/22}URRRGH!!!{%15}' ],
      papdate37: [ '<15>{*}{#p/papyrus}{#f/22}NOOOOOOOO!!!{%15}' ],
      papdate38: () => [
         "<18>{#p/papyrus}{@random:1.1,1.1}HUMAN.\nIT'S CLEAR NOW.",
         SAVE.data.b.flirt_papyrus
            ? "<18>{@random:1.1,1.1}YOU'RE MADLY IN LOVE WITH ME."
            : "<18>{@random:1.1,1.1}YOU'RE COMPLETELY OBSESSED WITH ME.",
         '<99>{@random:1.1,1.1}EVERYTHING YOU DO.\nEVERYTHING YOU SAY.',
         "<18>{@random:1.1,1.1}IT'S ALL BEEN FOR MY SAKE.",
         '<18>{@random:1.1,1.1}HUMAN.\nI WANT YOU TO BE HAPPY, TOO.',
         "<18>{@random:1.1,1.1}IT'S TIME FOR ME TO EXPRESS MY FEELINGS...",
         "<18>{@random:1.1,1.1}IT'S TIME I TOLD YOU THE TRUTH."
      ],
      papdate39: () =>
         SAVE.data.b.flirt_papyrus
            ? [
                 '<15>{#f/21}HUMAN, THE TRUTH IS...',
                 "<15>{#f/21}I JUST DON'T LIKE YOU THE WAY YOU LIKE ME.",
                 '<15>{#f/24}ROMANTICALLY, I MEAN.',
                 '<15>{#f/27}I MEAN, I TRIED VERY HARD TO!',
                 '<15>{#f/27}I THOUGHT THAT BECAUSE YOU HAD FLIRTED WITH ME...',
                 '<15>{#f/27}THAT I WAS SUPPOSED TO GO ON A DATE WITH YOU.',
                 '<15>{#f/10}THEN, ON OUR DATE, FEELINGS WOULD BLOSSOM FORTH!!!',
                 '<15>{#f/20}I WOULD BE ABLE TO MATCH YOUR PASSION FOR ME!',
                 '<15>{#f/21}BUT ALAS...\nI, THE GREAT PAPYRUS...',
                 '<15>{#f/21}HAVE FAILED.',
                 '<15>{#f/21}I FEEL JUST THE SAME AS BEFORE.',
                 '<15>{#f/27}AND THE WORST PART IS, BY DATING YOU...',
                 '<15>{#f/22}I HAVE ONLY DRAWN YOU DEEPER INTO YOUR LOVE!',
                 '<15>{#f/21}A DARK PRISON OF PASSION FROM WHICH THERE IS NO ESCAPE.',
                 '<15>{#f/27}HOW COULD I HAVE DONE THIS TO MY DEAR FRIEND...?',
                 '<15>{#f/27}...',
                 '<15>{#f/27}... NO...'
              ]
            : [ '<15>{#f/24}HUMAN, THE TRUTH IS...' ],
      papdate39a: () => [
         ...(SAVE.data.b.flirt_papyrus
            ? [
                 "<15>{#f/20}NO!\nTHAT'S WRONG!",
                 "<15>{#f/17}I CAN'T FAIL AT ANYTHING!!!",
                 "<15>{#f/20}HUMAN!!!\nI'LL HELP YOU THROUGH THESE TRYING TIMES!!!",
                 "<15>{#f/24}I'LL KEEP BEING YOUR COOL FRIEND...",
                 '<15>{#f/20}AND WE CAN FORGET THIS EVER HAPPENED.',
                 '<15>{#f/10}AFTER ALL, YOU, TOO, ARE VERY GREAT.',
                 '<15>{#f/20}IT WOULD BE TRAGIC TO LOSE YOUR FRIENDSHIP!',
                 '<15>{#f/21}SO, PLEASE....',
                 "<15>{#f/21}DON'T CRY BECAUSE I CAN'T KISS YOU.",
                 "<15>{#f/19}BESIDES, I DON'T EVEN HAVE LIPS!!!",
                 ...(SAVE.data.n.plot < 48
                    ? [
                         "<15>{#f/10}AND HEY, SOMEDAY, YOU'LL FIND SOMEONE JUST AS GREAT.",
                         "<15>{#f/24}WELL, NO.\nTHAT'S NOT TRUE.",
                         "<15>{#f/20}BUT I'LL HELP YOU SETTLE FOR SECOND BEST!!!"
                      ]
                    : [ "<15>{#f/10}AND HEY, UNDYNE'S NOT TOO FAR FROM HERE.", '<15>{#f/20}WE CAN HANG OUT WITH HER!' ])
              ]
            : [
                 '<15>{#f/10}I LIKE YOU TOO!',
                 '<15>{#f/10}YOU ARE A VERY NICE PERSON, AFTER ALL.',
                 '<15>{#f/21}BUT, MAYBE...',
                 "<15>{#f/21}YOU'D BE BETTER OFF IF YOU LIVED MORE FOR YOUR OWN SAKE.",
                 '<15>{#f/21}RATHER THAN JUST FOR MINE.',
                 '<15>{#f/10}FORTUNATELY, I KNOW THE SOLUTION!!!',
                 '<15>{#f/20}A HANGOUT WITH MY BOSS, UNDYNE!!!',
                 '<15>{#f/24}I THINK IF YOU SPREAD OUT YOUR FRIEND ENERGY A BIT MORE...',
                 "<15>{#f/10}YOU'D LEAD A MUCH HEALTHIER LIFESTYLE.",
                 ...(SAVE.data.n.plot < 48
                    ? [ "<15>{#f/20}I'LL LET YOU KNOW WHEN I'M READY!" ]
                    : [ "<15>{#f/20}SO LET'S DO IT!\nTOGETHER!!" ])
              ]),
         '<15>{#f/20}NYEH HEH HEH HEH HEH!!!'
      ],
      papdate40: () => [
         '<15>{#f/24}OH, AND IF YOU EVER NEED TO REACH ME...',
         "<15>{#f/10}HERE'S MY {@fill:#f00}PHONE NUMBER{@fill:#000}.",
         '<15>{#f/11}FEEL FREE TO CALL ME AT ANY TIME!',
         ...(SAVE.data.b.flirt_papyrus
            ? [
                 '<15>{#f/24}PLATONICALLY, OF COURSE.',
                 ...(SAVE.data.n.plot < 48
                    ? [ '<15>{#f/10}WELL, GOTTA GO!' ]
                    : [ "<15>{#f/10}WELL, SEE YOU AT UNDYNE'S HOUSE!" ])
              ]
            : SAVE.data.n.plot < 48
            ? [ '<15>{#f/20}WELL, GOTTA GO!' ]
            : [ "<15>{#f/20}WELL, SEE YOU AT UNDYNE'S HOUSE!" ]),
         '<15>{#f/20}NYEH HEH HEH!'
      ],
      papdate41: {
         a: () => (SAVE.data.b.flirt_papyrus ? 'ROMANCE' : 'FRIENDSHIP'),
         b: 'POWER\nLEVELS',
         c: 'DATE: K-615.09',
         d: 'SPEED',
         e: 'GALAXY\nMAP',
         f: 'TENSION'
      },
      pappuzzle1: [
         '<18>{#p/papyrus}{#f/0}HUMAN!',
         '<18>{#f/0}THIS NEXT PUZZLE IS ONE OF MY FAVORITES.',
         "<18>{#f/4}IT'S LIKE MY BROTHER'S COTTON BALL COLLECTION...",
         '<18>{#f/0}AN ODDLY SATISFYING SERIES OF OBJECTS!',
         "<18>{#f/9}I'LL -TRY- NOT TO GIVE AWAY THE SOLUTION."
      ],
      pappuzzle1a: [ '<18>{#p/papyrus}{#f/0}HAVE AT IT!' ],
      pappuzzle2: [ '<18>{#p/papyrus}WOW!\nYOU SOLVED IT!!' ],
      pappuzzle2a: [ '<18>AND YOU DID IT ALL WITHOUT MY HELP!!!' ],
      pappuzzle2b: [ "<18>AND I DIDN'T EVEN HAVE TO HELP YOU THAT MUCH!" ],
      pappuzzle2c: [ '<18>IT TOOK A BIT OF ENCOURAGEMENT, BUT YOU REALLY DID IT!' ],
      pappuzzle2d: [
         '<18>YOU MUST CARE ABOUT PUZZLES LIKE I DO!',
         "<18>WELL, I'M SURE YOU'LL LOVE THE NEXT PUZZLE, THEN!",
         '<18>IT MIGHT EVEN BE TOO EASY FOR YOU!!',
         '<18>NYEH!\nHEH HEH!\nHEHEHEH!!!'
      ],
      papsink0: () =>
         SAVE.data.b.svr
            ? [
                 '<32>{#p/human}* (The dog residue in this sink appears to be arranged in the shape of a heart.)',
                 '<32>* (Somehow, this seems to put you at ease.)'
              ]
            : SAVE.data.n.plot < 72
            ? [ "<32>{#p/basic}* The sink is so tall, you can't even wash your hands..." ]
            : [ "<32>{#p/basic}* There's a pile of dog residue in the sink." ],
      papsink1: [
         '<18>{#p/papyrus}{#f/9}IMPRESSED?\nI INCREASED THE HEIGHT OF MY SINK.',
         '<18>{#f/0}NOW I CAN FIT MORE BONES UNDER IT!\nTAKE A LOOKSY!'
      ],
      papsink2: [ '<18>{#p/papyrus}{#f/8}NOO, THE DOG!' ],
      papsink3: [ '<18>{#p/papyrus}{#f/31}OH, YOU POOR, POOR PUPPY...', '<18>{#f/9}HERE, HAVE MY SPECIAL ATTACK!' ],
      papsink4: [ '<18>{#p/papyrus}WOW!!!\nIT LOVES IT!!!' ],
      papsink5: [ '<18>{#p/papyrus}{#f/7}SANS!', '<18>STOP PLAGUING MY LIFE WITH INCIDENTAL MUSIC!!' ],
      papsink6: [ '<18>{#p/papyrus}{#f/4}AND NOW THE DOG HAS DISAPPEARED WITH MY ATTACK.', '<18>OH WELL...' ],
      papsolu1: [
         '<18>{#p/papyrus}YOU LOOK LIKE YOU NEED A HINT.',
         '<18>{#f/4}HMM...',
         "<18>{#f/0}WELL, I'D PAY ATTENTION TO THE CIRCUITS.",
         "<18>{#f/0}BUT THAT'S JUST ME."
      ],
      papsolu2: [
         '<18>{#p/papyrus}{#f/5}STILL CONFUSED?',
         '<18>{#f/5}UM... MAYBE...',
         '<18>{#f/6}USE THE CIRCUITS AS A GUIDE TO THE SEQUENCE???',
         "<18>{#f/5}I'M TRYING VERY HARD NOT TO SPOIL IT..."
      ],
      papsolu3: [
         '<18>{#p/papyrus}{#f/6}STILL???',
         '<18>{#f/0}I MEAN, I COULD TOTALLY GIVE YOU THE SOLUTION.',
         "<18>{#f/4}I DON'T WANT TO SPOIL THE FUN, THOUGH..."
      ],
      papsolu3a: [
         '<18>{#p/papyrus}{#f/9}DO YOU ABSOLUTELY, DAPSOLUTELY WANT THE SOLUTION???',
         choicer.create('* (What do you say?)', 'Yes', 'No')
      ],
      papsolu3a1: [
         '<18>{#p/papyrus}THE! SOLUTION! IS!',
         '<18>{#f/4}(PLEASE IMAGINE A DRUMROLL IN YOUR HEAD...)',
         '<18>{#f/0}... THAT HOLO-TREE NEXT TO THE LAMP ON YOUR RIGHT!',
         '<18>CHECK IT OUTIE!!!'
      ],
      papsolu3a2: [
         "<18>{#p/papyrus}WOW... YOU'RE TRULY A PUZZLE PASSIONEER!",
         "<18>I'M ENTHUSED BY YOUR ENTHUSIASM!",
         '<18>YOU CAN DO IT, HUMAN!!!'
      ],
      papsolu4: [ "<18>{#p/papyrus}{#f/4}DON'T YOU REMEMBER THE SOLUTION I GAVE YOU...?" ],
      papsolu5: [ '<18>{#f/0}{#p/papyrus}ALMOST DONE!\nONLY ONE CIRCUIT LEFT TO ACTIVATE!' ],
      papspaghet1: (take: boolean) => [
         '<18>{#p/papyrus}{#f/1}WHAT!?\nHOW DID YOU AVOID MY TRAP?',
         '<18>{#f/4}AND, MORE IMPORTANTLY...',
         '<18>{#f/0}IS THERE ANY LEFT FOR ME???',
         choicer.create('* (What do you tell Papyrus\n  about his spaghetti?)', take ? 'Took it' : 'Left it', 'Ate it'),
         '<18>{#p/papyrus}REALLY!?'
      ],
      papspaghet1a: [
         '<18>{#p/papyrus}WHAT!?\nHOW DID YOU AVOID MY TRAP?',
         '<18>{#f/4}AND, MORE IMPORTANTLY...',
         '<18>{#f/0}IS THERE ANY...',
         '<18>{#f/4}... WAIT.',
         "<18>{#f/0}IT'S RIGHT THERE IN YOUR ITEMS!!",
         '<18>{#f/9}WHAT WERE YOU PLANNING, HUMAN?',
         choicer.create("* (What will you do with\n  Papyrus' spaghetti?)", 'Share it', 'Eat it'),
         '<18>{#p/papyrus}REALLY!?'
      ],
      papspaghet2a: [
         "<18>{#f/5}YOU'D RESIST THE FLAVOR OF MY HOME- COOKED PASTA...",
         '<18>{#f/6}JUST SO YOU COULD SHARE IT WITH ME???',
         '<18>{#f/9}WELL THEN!!',
         '<18>FRET NOT HUMAN!\nFOR I, MASTER CHEF PAPYRUS...',
         '<18>WILL MAKE US ALL THE PASTA WE COULD EVER WANT!',
         '<18>{#f/0}HEH HEH HEH HEH HEH HEH NYEH!'
      ],
      papspaghet2b: [
         '<18>{#f/5}WOWIE...',
         '<19>{#f/6}FEW HAVE EVER ENJOYED MY COOKING LIKE THAT BEFORE...',
         '<18>{#f/9}WELL THEN!!',
         '<18>FRET NOT HUMAN!\nFOR I, MASTER CHEF PAPYRUS...',
         '<18>WILL MAKE YOU ALL THE PASTA YOU COULD EVER WANT!',
         '<18>{#f/0}HEH HEH HEH HEH HEH HEH NYEH!'
      ],
      paptv: pager.create(
         0,
         () => [
            ...(dateready() && SAVE.data.n.state_starton_papyrus === 0
               ? [ "<18>{#p/papyrus}OOH, IT'S MY FAVORITE TV SHOW!" ]
               : []),
            '<33>{#p/mettaton}* "STAY TUNED FOR A NEW PROGRAM!"',
            ...(dateready() && SAVE.data.n.state_starton_papyrus === 0
               ? [
                    "<18>{#p/papyrus}{#f/7}WHAT!!!\nIT'S USUALLY BETTER THAN THIS!",
                    '<18>{#f/4}THIS IS JUST A BAD EPISODE.',
                    "<18>{#f/7}DON'T JUDGE ME!!!"
                 ]
               : [])
         ],
         [ '<33>{#p/mettaton}* "STAY TUNED FOR A NEW PROGRAM!"' ]
      ),
      papyrus1: [ '<18>{#p/papyrus}SO, AS I WAS SAYING ABOUT UNDYNE...' ],
      papyrus2: [
         '<18>{#p/papyrus}SANS!!\nOH MY GOD!!\nIS THAT...',
         '<18>A HUMAN!?!?',
         "<25>{#p/sans}{#f/2}* nah, it's just a human shaped hologram."
      ],
      papyrus3: [
         '<18>{#p/papyrus}{#f/4}OH.',
         '<18>{#f/4}...',
         '<18>{#f/4}WAIT...',
         "<18>{#f/7}YOU'RE LYING!!",
         '<25>{#p/sans}{#f/2}* sorry, meant to say "hologram-shaped human."',
         '<18>{#p/papyrus}{#f/0}SANS!\nWE FINALLY DID IT!',
         '<18>{#f/0}UNDYNE HAS TO LET ME INTO THE ROYAL GUARD NOW!',
         '<18>{#f/6}WE JUST HAVE TO...',
         '<18>{#f/6}TO...',
         '<18>{#f/4}...',
         "<18>{#f/4}I'M FORGETTING SOMETHING.",
         '<25>{#p/sans}{#f/2}* the speech, remember?',
         '<18>{#p/papyrus}{#f/4}OH, RIGHT.\n..."AHEM."',
         "<18>{#f/9}HUMAN! YOU MAY THINK YOU'RE SAFE OUT HERE...",
         '<18>{#f/9}BUT I, THE GREAT PAPYRUS, INTEND TO CHANGE THAT!',
         "<18>{#f/4}FIRST, I'LL DAZZLE YOU WITH DR. ALPHYS' PUZZLES...",
         '<18>{#f/4}AND THEN, WHEN YOU LEAST EXPECT IT...',
         '<19>{#f/9}WHAM!\nCAPTURED!\nOFF TO THE CITADEL!',
         '<18>{#f/9}OUR BATTLE WILL BE AS LEGENDARY AS THEY COME!',
         '<18>{#f/4}IN ANY CASE...',
         '<18>{#f/9}CONTINUE... ONLY IF YOU DARE!!!'
      ],
      papyrus4: [ '<18>{#f/0}NYEH HEH HEH HEH HEH HEH HEH HEH!!!' ],
      papyrus5: [
         '<25>{#p/sans}* well, that went well.',
         "<25>* don't sweat it, bud.",
         "<25>{#f/2}* i'll keep an eyesocket out for ya."
      ],
      papyrus6x1: [ '<18>{#p/papyrus}{#f/5}H-HUMAN?\nIS THAT YOU...?' ],
      papyrus6x2: [
         "<18>{#p/papyrus}{#f/1}OH MY GOD!!!\nIT REALLY IS YOU, ISN'T IT!?!?",
         "<18>{#p/papyrus}{#f/0}I'VE BEEN EXCITED TO MEET YOU SINCE I HEARD ABOUT YOU!",
         "<18>{#p/papyrus}{#f/4}... AS FOR WHY I'M ONLY HERE NOW?",
         '<18>{#p/papyrus}{#f/6}WELL, I HAVE REASON TO BELIEVE...',
         '<18>{#p/papyrus}{#f/5}... MY BROTHER HAS BEEN TRYING TO KEEP YOU FROM ME.',
         '<18>{#p/papyrus}{#f/7}TYPICAL!!!',
         '<18>{#p/papyrus}{#f/0}BUT OUR LITTLE ALLIANCE CAN BE OUR LITTLE SECRET.',
         "<18>{#p/papyrus}{#f/9}HE DOESN'T HAVE TO KNOW A -DAMN- THING ABOUT IT!"
      ],
      papyrus6x3: [
         "<18>{#p/papyrus}{#f/5}GUESS I BETTER GO BEFORE HE FINDS OUT I'M HERE.",
         "<18>{|}{#p/papyrus}{#f/9}I'LL CATCH UP WITH YOU SOON, HU- {%}"
      ],
      papyrus6x4: [ '<32>{#p/without}* ... papyrus?' ],
      papyrus6: [
         '<18>{#p/papyrus}{#f/9}HUMAN!!',
         '<18>{#f/4}YOU MAY HAVE PASSED MY OTHER CHALLENGES.',
         "<18>{#f/9}BUT NOW YOU WILL SURELY MEET YOUR WIT'S END!",
         '<18>FOR YOU SEE, THIS PUZZLE WAS MADE BY NONE OTHER...',
         '<18>{#f/0}THAN THE AMAZING DR. ALPHYS!',
         '<18>THE RULES ARE QUITE SIMPLE, REALLY.',
         '<18>THIS DISPLAY WILL READ OUT A NUMBER AT RANDOM.',
         '<18>{#f/9}... THE NUMBER OF SECONDS UNTIL YOU CAN PASS!',
         '<18>{#f/0}IF THE NUMBER IS ODD, YOU MUST DODGE PROJECTILES.',
         '<18>NUMBERS ENDING IN 1 GIVE YOU STAR- SHAPED ONES...',
         '<18>NUMBERS ENDING IN 3 GIVE YOU MOON- SHAPED ONES...',
         '<18>{#f/4}5 GIVES YOU COMETS, 7 GIVES YOU QUASARS...',
         "<18>{#f/9}AND IF IT ENDS IN A 9, IT'S ENTIRELY RANDOM!",
         '<18>{#f/0}IF THE NUMBER IS PRIME, THE GRAVITY WILL FLIP.',
         "<18>{#f/4}(ALTHOUGH, PRIMES BELOW TEN DON'T OFTEN TRIGGER IT.)",
         '<18>{#f/0}IF THE NUMBER IS EVEN, YOU WILL BE FINE AT FIRST...',
         '<18>{#f/9}BUT RANDOM MONSTER ENCOUNTERS WILL OCCUR!',
         '<18>ALSO, POWERS OF TWO WILL DOUBLE THE FREQUENCY!!',
         '<18>{#f/0}IF THE NUMBER REPEATS THE SAME DIGIT TWICE...',
         '<18>{#f/0}THE WAIT TIME WILL BE MULTIPLIED BY SAID DIGIT!',
         '<18>{#f/0}IF THE NUMBER IS A RUN, I.E. 1-2-3...',
         '<18>{#f/0}THE ROOM WILL SHAKE, CAUSING YOU TO STUMBLE!',
         '<18>{#f/0}AND IF THE NUMBER CONTAINS A 4 AT ALL...',
         '<18>{#f/9}SANS WILL RANDOMLY LEVITATE YOU WITH BLUE MAGIC!',
         "<25>{#p/sans}{#f/6}* check it out, it's my special yellow eye.",
         '<18>{#p/papyrus}{#f/7}NOT NOW, SANS!!',
         '<25>{#p/sans}* oh, heheh.\n* guess i got a little {@fill:#ff0}carried away{@fill:#fff}, huh?',
         '<18>{#p/papyrus}{#f/4}YEAH, YEAH...',
         '<18>{#f/9}WELL!\nDO YOU UNDERSTAND THE EXPLANATION?',
         choicer.create('* (What do you say?)', 'Yes', 'No')
      ],
      papyrus7: [
         "<18>{#p/papyrus}{#f/9}WELL, LET'S REVIEW THEN!",
         '<18>{#f/0}THIS DISPLAY GENERATES A RANDOM NUMBER OF SECONDS.',
         '<18>AKA, HOW LONG YOU MUST WAIT TO PASS THROUGH.',
         '<18>ODD NUMBERS MEAN DODGING PROJECTILES.',
         "<18>THE NUMBER'S LAST DIGIT DETERMINES THE TYPE.",
         '<18>1 FOR STARS, 3 FOR MOONS, 5 FOR QUASARS, 7 FOR...',
         '<18>{#f/5}WAIT, WHICH NUMBER WAS FOR QUASARS AGAIN??',
         '<18>{#f/9}UH, WELL, IF IT ENDS IN 9, THE TYPE IS RANDOM!',
         '<18>{#f/0}PRIME NUMBERS SHIFT THE GRAVITY AROUND...',
         '<18>{#f/0}EVEN NUMBERS TRIGGER RANDOM ENCOUNTERS...',
         '<18>{#f/5}WAIT, DID I SAY THE GRAVITY SHIFTS!?,',
         '<18>{#f/7}UGH, I MEANT TO SAY IT FLIPS!!',
         '<18>{#f/0}BUT POWERS OF TWO DOUBLE THE ENCOUNTER RATE.',
         '<18>RUNS CAUSE THE ROOM TO SHAKE, AND 4 MEANS...',
         '<18>{#f/6}UH, I THINK I FORGOT WHAT 4 MEANS.',
         "<25>{#p/sans}* wasn't that supposed to be my cue?",
         '<18>{#p/papyrus}{#f/6}MAYBE???',
         '<18>{#f/7}WHATEVER!!\nDO YOU UNDERSTAND IT NOW!?',
         choicer.create('* (What do you say?)', 'Sure', 'Even less')
      ],
      papyrus8: [
         '<18>{#p/papyrus}{#f/9}WELL... THEN...',
         "<18>{#f/9}YOU KNOW WHAT, I'LL LEAVE THE INSTRUCTIONS HERE!",
         '<18>{#f/0}THEN, YOU CAN READ THEM AT YOUR OWN PACE.',
         '<18>GOOD LUCK, HUMAN!!',
         '<18>{#f/5}NYEH... HEH HEH...'
      ],
      papyrus9: [
         '<18>{#p/papyrus}{#f/9}AWESOME SAUCE!',
         '<18>{#f/9}WELL, WITHOUT FURTHER ADO...',
         "<18>LET'S FIND OUT WHAT OUR RANDOM NUMBER WILL BE!!"
      ],
      papyrus10: [
         '<18>{#p/papyrus}{#f/9}HUMAN!',
         '<18>{#f/9}ARE YOU READY FOR YOUR GREATEST CHALLENGE YET?',
         '<18>{#f/9}INTRODUCING... THE GAUNTLET OF DEADLY TERROR!'
      ],
      papyrus11: [
         '<18>{#p/papyrus}{#f/9}ONCE I GIVE THE WORD, IT WILL FULLY ACTIVATE!',
         '<18>LASERS WILL FIRE!\nCOILS WILL CHARGE!\nBLADES WILL SLICE!',
         '<18>ALL IN A PRECISE AND TACTICAL MANNER!',
         '<18>{#f/4}WITHOUT PERFECT ACCURACY, YOU WILL SURELY FAIL.',
         '<18>{#f/9}NOW!!!\nARE YOU READY!?!?',
         '<18>BECAUSE!',
         '<18>I!',
         '<18>AM!',
         '<18>ABOUT!',
         '<18>TO DO IT!'
      ],
      papyrus12: [
         '<25>{#p/sans}* well?\n* are we doing this thing or what?',
         '<18>{#p/papyrus}{#f/7}...',
         '<18>ANY SECOND NOW!'
      ],
      papyrus13: [
         '<25>{#p/sans}* ready when you are.',
         '<18>{#p/papyrus}{#f/6}I...',
         "<18>{#f/6}I'M STARTING TO THINK THAT...",
         '<18>{#f/6}MAYBE...',
         '<18>{#f/6}THIS CHALLENGE...',
         '<18>{#f/6}...',
         '<18>{#f/4}... WAS A BIT OF A BAD IDEA.',
         '<18>{#f/5}TO THINK I CREATED A CHALLENGE THAT COULD KILL...',
         '<18>{#f/9}BUT, HAVE NO FEAR!',
         '<18>{#f/9}I AM A SKELETON WITH STANDARDS!',
         '<18>{#f/4}AND, FRANKLY, A CHALLENGE YOU CANNOT SURVIVE...',
         '<18>{#f/7}IS A CHALLENGE FAR TOO CONTRIVED!',
         '<18>AWAY IT GOES!!'
      ],
      papyrus14: [
         '<18>{#p/papyrus}{#f/7}WHAT ARE YOU LOOKING AT!?',
         '<18>{#f/9}THIS WAS ANOTHER DECISIVE VICTORY FOR PAPYRUS!!',
         '<18>NYEH!',
         '<18>HEH!',
         '<18>{#f/4}...',
         '<18>... HEH?'
      ],
      papyrusFinal1: [
         '<23>{#p/papyrus}{#f/30}HUMAN.',
         '<23>ALLOW ME TO TELL YOU ABOUT SOME COMPLEX FEELINGS.',
         '<23>FEELINGS LIKE...'
      ],
      papyrusFinal2: () =>
         world.genocide
            ? [
                 '<23>THE SADNESS OF LOSING SOMEONE SPECIAL.',
                 '<23>THE GUILT OF NOT BEING ABLE TO SAVE THEM.',
                 '<23>THE DESIRE TO SEE THEM ONE LAST TIME.',
                 '<23>THESE FEELINGS...'
              ]
            : papreal()
            ? [
                 '<23>THE STRESS OF KNOWING SO MANY PEOPLE HAVE BEEN KILLED.',
                 "<23>THE HOPELESSNESS OF THINKING YOU CAN'T DO ANYTHING TO STOP IT.",
                 '<23>THE DESIRE TO MAKE A CHANGE FOR THE BETTER.',
                 '<23>THESE FEELINGS...'
              ]
            : [
                 '<23>THE JOY OF FINDING ANOTHER PASTA LOVER.',
                 "<23>THE ADMIRATION FOR ANOTHER'S PUZZLE- SOLVING SKILLS.",
                 '<23>THE DESIRE TO HAVE A COOL, SMART PERSON THINK YOU ARE COOL.',
                 '<23>THESE FEELINGS...'
              ],
      papyrusFinal3: () =>
         world.genocide || papreal()
            ? [
                 '<18>{#f/31}THEY MUST BE WHAT YOU ARE FEELING, RIGHT NOW.',
                 '<18>{#f/32}I CAN HARDLY IMAGINE WHAT THAT MUST FEEL LIKE...',
                 '<18>{#f/6}AFTER ALL, I AM VERY... GREAT...',
                 '<18>{#f/32}{#x1}...',
                 '<18>{#f/31}DESPITE EVERYTHING THAT HAS HAPPENED, I STILL...',
                 '<18>{#f/5}I STILL BELIEVE IN YOU, HUMAN.',
                 '<18>{#f/31}I KNOW YOU CAN DO BETTER.',
                 '<18>{#f/31}I KNOW YOU HAVE IT IN YOU TO CHANGE.',
                 ...(world.genocide
                    ? [ "<18>{#f/4}NO MATTER WHAT RIDICULOUS THING 'ASRIEL' SAYS..." ]
                    : [ '<18>{#f/5}NO MATTER HOW IRREDEEMABLE YOU THINK YOU ARE...' ]),
                 "<18>{#f/6}{#x2}I KNOW, DEEP DOWN, THERE'S STILL GOOD IN YOU!",
                 '<18>{#f/0}SO LET ME HELP YOU FIND THAT GOODNESS.',
                 '<18>{#f/0}LET ME HELP YOU DISCOVER YOUR TRUE POTENTIAL.',
                 '<18>{#f/4}AND MOST OF ALL...',
                 '<18>{#f/9}LET ME SHOW YOU THAT YOU CAN STILL BE GREAT!!!',
                 '<18>{#f/0}I, PAPYRUS, WELCOME YOU WITH OPEN ARMS!'
              ]
            : [
                 '<18>{#f/0}THEY MUST BE WHAT YOU ARE FEELING RIGHT NOW!!',
                 '<18>{#f/4}I CAN HARDLY IMAGINE WHAT THAT MUST FEEL LIKE.',
                 '<18>{#f/4}AFTER ALL, I AM VERY GREAT.',
                 '<18>I NEVER WONDER WHAT HAVING MANY FRIENDS IS LIKE.',
                 '<18>{#f/5}I PITY YOU, LONELY HUMAN...',
                 '<18>{#f/0}BUT WORRY NOT!!!\nYOU SHALL BE LONELY NO LONGER!',
                 '<18>{#f/9}FOR I, THE GREAT PAPYRUS, WILL BE YOUR...',
                 '<18>{#f/5}{#x1}...',
                 '<18>NO...',
                 '<18>{#f/7}{#x2}NO, THIS IS ALL WRONG!',
                 '<18>I CAN\'T BE YOUR "FRIEND..."',
                 '<18>YOU ARE A HUMAN!\nI MUST CAPTURE YOU!!!',
                 '<18>{#f/9}THEN, I CAN FULFILL MY LIFELONG DREAM!!!',
                 '<18>POWERFUL!\nPOPULAR!\nPRESTIGIOUS!!!',
                 "<18>THAT'S PAPYRUS!!!",
                 '<18>{#f/4}THE NEWEST MEMBER...',
                 '<18>{#f/9}OF THE ROYAL GUARD!!!'
              ],
      papyrusFinal4: (b: boolean) =>
         world.edgy || (world.population === 0 && !world.bullied)
            ? [
                 '<18>{#p/papyrus}{#f/0}WOWIE!\nYOU DID IT!',
                 "<18>{#p/papyrus}{#f/5}YOU DIDN'T DO A VIOLENCE!",
                 '<18>{#p/papyrus}{#f/6}TO BE HONEST, I WAS A LITTLE AFRAID...',
                 "<18>{#p/papyrus}{#f/0}BUT YOU'RE ALREADY TAKING STEPS TO REDEEM YOURSELF!",
                 "<18>{#p/papyrus}{#f/8}I'M SO PROUD OF YOU, HUMAN!",
                 "<18>{#p/papyrus}{#f/4}... WAIT, WASN'T I SUPPOSED TO CAPTURE YOU?",
                 "<18>{#p/papyrus}{#f/0}OH WELL.\nIT'S NOT IMPORTANT RIGHT NOW.",
                 '<18>{#p/papyrus}{#f/0}I JUST WANT YOU TO BE THE BEST PERSON YOU CAN BE.',
                 "<18>{#p/papyrus}{#f/5}LET'S LET BYBONES BE BYBONES, HUH?",
                 "<18>{#p/papyrus}{#f/9}I'LL EVEN GIVE YOU DIRECTIONS TO THE EXIT!"
              ]
            : [
                 '<18>{#p/papyrus}{#f/5}NYOO HOO HOO...',
                 ...(b
                    ? [ "<18>I WASN'T STRONG ENOUGH TO STOP YOU..." ]
                    : [ "<18>I CAN'T EVEN STOP SOMEONE AS WEAK AS YOU..." ]),
                 "<18>{#f/7}UNDYNE'S GOING TO BE DISAPPOINTED!",
                 "<18>{#f/5}I'LL NEVER JOIN THE ROYAL GUARD... AND...",
                 '<18>{#f/7}MY FRIEND QUANTITY WILL REMAIN STAGNANT!',
                 "<32>{#p/human}* (How will you respond?){!}\nµµµµµµµLet's beµµµµµµµµWhat a\nµµµµµµµfriendsµµµµµµµµµloser{#c/0/7/7}"
              ],
      papyrusFinal4a1: [
         '<18>{#p/papyrus}{#f/1}REALLY!?\nYOU WANT TO BE FRIENDS WITH ME???',
         '<18>{#f/6}WELL THEN...\nI GUESS...',
         '<18>{#f/0}I CAN MAKE AN ALLOWANCE FOR YOU!'
      ],
      papyrusFinal4a2: [
         '<18>{#p/papyrus}{#f/1}HUH? WHY WOULD YOU BERATE YOURSELF SO LOUDLY???',
         '<18>{#f/4}IS IT BECAUSE...',
         "<18>{#f/7}YOU DON'T THINK YOU'RE GOOD ENOUGH TO BE MY FRIEND?",
         "<18>{#f/9}NO, YOU'RE GREAT!\nI'LL BE YOUR FRIEND!!!"
      ],
      papyrusFinal4b1: [
         '<18>{#f/0}WOWIE!!',
         '<18>I FOUND A NEW FRIEND!!!',
         '<18>{#f/4}AND WHO KNEW THAT ALL I NEEDED TO DO IT...'
      ],
      papyrusFinal4b2: [
         '<18>{#f/0}WOWIE!!',
         "<18>{#f/0}WE HAVEN'T EVEN HAD OUR FIRST DATE...",
         "<18>{#f/0}AND I'VE ALREADY MANAGED TO HIT THE FRIEND ZONE!!!",
         '<18>{#f/4}WHO KNEW THAT ALL I HAD TO DO...'
      ],
      papyrusFinal4c1: [
         '<18>{#f/0}WAS TO GIVE PEOPLE AWFUL PUZZLES AND THEN FIGHT THEM?',
         '<18>YOU TAUGHT ME A LOT, HUMAN.',
         '<18>{#f/9}I HEREBY GRANT YOU PERMISSION TO PASS THROUGH!',
         "<18>{#f/0}AND I'LL GIVE YOU DIRECTIONS TO THE EXIT."
      ],
      papyrusFinal4c2: [
         '<18>CONTINUE FORWARD UNTIL YOU REACH THE CITADEL.',
         '<18>THEN, HOP IN A CRAFT AND CROSS THE {@fill:#ff0}FORCE FIELD{@fill:#fff}.',
         "<18>{#f/4}THAT'S THE THING TRAPPING US ALL ON THE OUTPOST.",
         '<18>ANYONE CAN ENTER THROUGH IT, BUT NOBODY CAN EXIT...',
         '<18>{#f/9}... EXCEPT SOMEONE WITH A POWERFUL SOUL.',
         '<18>{#f/0}LIKE YOU!!!'
      ],
      papyrusFinal4d: [
         '<18>{#f/4}OH, I ALMOST FORGOT TO MENTION.',
         '<18>TO REACH THE EXIT, YOU WILL HAVE TO PASS...',
         '<18>{#f/7}BY {@fill:#ff0}THE KING{@fill:#fff}.',
         '<18>{@fill:#ff0}THE KING OF ALL MONSTERS...',
         '<18>{@fill:#ff0}HE IS...',
         '<18>{@fill:#ff0}{#f/6}... WELL...'
      ],
      papyrusFinal4e: [
         "<18>{#f/0}HE'S A BIG FUZZY PUSHOVER!!!",
         '<18>EVERYBODY LOVES THAT GUY.',
         '<18>{#f/4}I AM CERTAIN IF YOU JUST SAY...',
         '<18>"EXCUSE ME, MR. DREEMURR... CAN I PLEASE GO HOME?"',
         "<18>{#f/0}HE'LL GUIDE YOU OVER TO THE LAUNCH BAY HIMSELF!",
         "<18>{#f/9}ANYWAY!!!\nTHAT'S ENOUGH TALKING!!!",
         "<18>{#f/0}I'LL BE AT HOME BEING A COOL FRIEND."
      ],
      papyrusFinal4f1: [ '<18>{#f/9}FEEL FREE TO COME BY AND HANG OUT!!!' ],
      papyrusFinal4f2: [ '<18>{#f/9}FEEL FREE TO COME BY AND HAVE THAT DATE!!!' ],
      papyrusFinal4f3: [ '<18>{#f/9}FEEL FREE TO COME BY AND SAY HELLO!!!' ],
      papyrusFinal4g: [ '<18>NYEH HEH HEH HEH HEH HEH HEH!!!' ],
      papyrusFinal5: [
         '<18>{#p/papyrus}{#f/5}OH, WHERE COULD THAT HUMAN HAVE GONE...',
         '<18>{#f/4}...\nWAIT.',
         "<18>{#f/1}IT'S RIGHT IN FRONT OF ME!!!",
         '<18>{#f/0}HELLO! I WAS WORRIED THAT YOU HAD GOTTEN LOST!',
         "<18>IT SURE IS A RELIEF TO SEE THAT YOU'RE HERE...",
         '<18>{#f/7}...\nWAIT A SECOND!!!',
         "<18>YOU'RE NOT SUPPOSED TO ESCAPE!!!",
         '<18>GET BACK THERE!!!'
      ],
      papyrusFinal6: [
         '<18>{#p/papyrus}{#f/4}BACK AGAIN, EH?',
         "<18>{#f/5}I SUPPOSE IT'S MY FAULT...",
         '<18>I TOLD YOU BEFORE THAT I WOULD MAKE YOU SPAGHETTI.',
         "<18>IT'S ONLY NATURAL THAT YOU WOULD WANT TO SEE ME...",
         '<18>IN THE DIRE HOPE THAT I WOULD MAKE YOU SOME.',
         '<18>{#f/0}WELL... I UNDERSTAND.',
         '<18>{#f/0}PAPYRUS IS HUNGRY, TOO!',
         '<18>{#f/7}HUNGRY FOR JUSTICE!'
      ],
      papyrusFinal7: [
         "<18>{#p/papyrus}{#f/1}YOU'RE BACK AGAIN!?!?",
         '<18>{#f/4}I FINALLY REALIZE THE TRUE REASON WHY.',
         '<18>{#f/5}YOU...',
         '<18>YOU JUST MISS SEEING MY FACE SO MUCH...',
         '<18>{#f/6}I...',
         "<18>{#f/31}I'M NOT SURE I CAN FIGHT SOMEONE WHO FEELS THIS WAY.",
         "<18>{#f/4}NOT TO MENTION, I'M GETTING TIRED OF CAPTURING YOU.",
         '<18>{#f/5}WOULD YOU LIKE TO PASS THROUGH...',
         '<18>{#f/5}... WITHOUT A BATTLE?',
         choicer.create('* (What do you say?)', 'Yes', 'No')
      ],
      papyrusFinal7a: [ '<18>{#p/papyrus}{#f/31}...\nOKAY...', "<18>{#f/3}I GUESS I'LL ACCEPT MY FAILURE." ],
      papyrusFinal7b: [ '<18>{#p/papyrus}{#f/4}WELL, IF YOU SAY SO, THEN...', '<18>{#f/9}BY ALL MEANS!!!' ],
      papyrusFinal8: [
         '<18>{#p/papyrus}{#f/1}AGAIN??',
         '<18>{#f/4}... WELL, OKAY...',
         '<18>{#f/9}WILL YOU FORGO THE BATTLE THIS TIME??',
         choicer.create('* (What do you say?)', 'Yes', 'No')
      ],
      papyrusFinal8a: [ '<18>{#f/0}OKAY, HERE WE GO!' ],
      puzzle3: () => [
         '<32>{#p/human}* (You inspect the terminal.)',
         '<32>{#p/basic}* There is a log of previous modifications...',
         world.edgy
            ? '<32>* "Pattern last modified by user: ALPHYS"'
            : '<32>* "Pattern last modified by user: COOLSKELETON95"',
         ...(!world.goatbro || SAVE.flag.n.genocide_milestone < 5 || SAVE.flag.n.ga_asrielAlphysCom1++ > 0
            ? []
            : [ "<25>{#p/asriel2}{#f/13}* She's been against us the whole time..." ]),
         '<32>* "Would you like to view the pattern?"',
         choicer.create('* (View the pattern?)', 'Yes', 'No')
      ],
      robotx: () =>
         SAVE.data.b.svr
            ? [ '<32>{#p/human}* (The robot appears to be asleep.)' ]
            : [ "<32>{#p/basic}* It's in sleep mode." ],
      robot1: pager.create(
         0,
         [
            '<32>{#p/basic}* Hello.\n* I am a builder bot.',
            '<32>* I want to see the galaxy...\n* But I cannot move.',
            '<32>* If you would be so kind, traveler, please...',
            '<32>* Take one of my computer chips and bring it to another computer very far away.',
            choicer.create('* (Take a chip?)', 'Yes', 'No')
         ],
         [
            '<32>{#p/basic}* If you would be so kind, traveler, please...',
            '<32>* Take one of my computer chips and bring it to another computer very far away.',
            choicer.create('* (Take a chip?)', 'Yes', 'No')
         ]
      ),
      robot2: () => [
         '<32>{#p/basic}* Thank you... good luck!',
         '<32>{#s/equip}{#p/human}* (You got the Computer Chip.)',
         ...(world.goatbro && SAVE.flag.n.ga_asriel98++ < 1
            ? [
                 "<25>{#p/asriel2}{#f/9}* Pfft, that's adorable.",
                 "<25>{#p/asriel2}{#f/13}* This robot has no idea what's going on here..."
              ]
            : [])
      ],
      robot3: [ '<32>{#p/basic}* It seems you do not have enough room for me.' ],
      robot4: () => [
         '<32>{#p/basic}* I see.\n* Good journey, then.',
         ...(world.goatbro && SAVE.flag.n.ga_asriel98++ < 1
            ? [
                 "<25>{#p/asriel2}{#f/9}* Pfft, that's adorable.",
                 "<25>{#p/asriel2}{#f/13}* This robot has no idea what's going on here..."
              ]
            : [])
      ],
      robot5: () => [
         '<32>{#p/basic}* Thank you for taking care of me.',
         ...(world.goatbro && SAVE.flag.n.ga_asriel99++ < 1
            ? [ "<25>{#p/asriel2}{#f/4}* It's alright, we don't need any more for now." ]
            : [])
      ],
      robot6: [
         '<32>{#p/basic}* How am I doing?\n* By "I" I mean the chip I gave you...',
         '<32>* Huh? You lost it...?\n* ... I suppose I can give you another one...',
         choicer.create('* (Take another chip?)', 'Yes', 'No')
      ],
      robot7: [
         '<32>{#p/basic}* Please be careful this time.',
         '<32>{#p/human}{#s/equip}* (You got the Computer Chip.)'
      ],
      robot8: [ '<32>{#p/basic}* I understand.\n* Safe journey, then...' ],
      robot9: () => [
         '<32>{#p/basic}* Thank you for... taking care of me...',
         ...(world.goatbro && SAVE.flag.n.ga_asriel99++ < 1
            ? [ "<25>{#p/asriel2}{#f/4}* It's alright, we don't need any more for now." ]
            : [])
      ],
      robot10: [
         '<32>{#p/basic}* How am I doing?',
         '<32>* Huh? Again...?',
         "<32>* I'm sorry... if I give you any more, there will be nothing left of me.",
         '<32>* I suppose it is true.\n* Traveling beyond our limits is but a fantasy.',
         "<32>* It's no different for anyone else.",
         '<32>* All of monsterkind are doomed to live out here forever...'
      ],
      robot11: [ '<32>{#p/basic}* Why did I give myself away so easily?' ],
      robot12: [ '<32>{#p/basic}* Begone!' ],
      sans1: [
         '<99>{#p/darksans}* {@spacing:2.25,0}Human.',
         "<99>* {@spacing:2.25,0}Don't you know how to{@spacing:}\n  {@spacing:2.25,0}greet a new pal?",
         '<99>* {@spacing:2.25,0}Turn around and shake{@spacing:}\n  {@spacing:2.25,0}my hand.'
      ],
      sans2: () => [
         ...(world.edgy
            ? [
                 "<25>{#p/sans}{#f/0}* huh?\n* what's with the face?",
                 "<25>{#p/sans}{#f/2}* ... didn't you like my whoopee cushion?",
                 '<25>{#f/0}* ... eh.\n* to each their own.'
              ]
            : [ "<25>{#p/sans}{#f/4}* heheh... nothin' like a good whoopee cushion." ]),
         "<25>{#f/0}* anyway, you're a human, right?",
         "<25>{#f/5}* that's fantastic.",
         "<25>{#f/0}* i'm sans.\n* sans the skeleton.",
         '<25>{#f/3}* as a royal sentry, my job is to capture humans.',
         "<25>{#f/4}* but... y'know...",
         ...(world.edgy
            ? [
                 "<25>{#f/2}* i don't really feel like doing much work today.",
                 '<25>{#f/0}* as for my brother, well...',
                 "<25>{#f/5}* he's OVERFLOWING with the stuff.",
                 '<25>{#f/0}* it took everything i had just to get him to stay home.'
              ]
            : [
                 "<25>{#f/2}* i've got better things to do.",
                 '<25>{#f/0}* as for my brother, well...',
                 '<25>{#f/5}* despite not being an actual sentry, he sure ACTS like one.',
                 "<25>{#f/0}* in fact, i think that's him over there."
              ]),
         '<25>* i have an idea.\n* jump across that gap, will ya?',
         '<26>{#f/4}* yeah, jump right across.\n* my bro set the gravity too low to stop anyone.'
      ],
      sans3: () =>
         world.edgy
            ? [
                 '<25>{#p/sans}* well, here we are.',
                 "<25>{#f/3}* i'm afraid there's not much else i can show you right now...",
                 "<25>{#f/2}* but maybe i'll come up with something if you keep heading forward.",
                 "<25>{#f/0}* for now, i'll just hang around here."
              ]
            : [ '<25>{#p/sans}* quick, to the gravometric inverter.' ],
      sans4: [ '<25>{#p/sans}* sup, bro?' ],
      sans5: [
         '<18>{#p/papyrus}{#x2}{#f/7}YOU KNOW WHAT\'S "SUP" BROTHER!',
         '<18>YOU HAVE PUZZLES TO ATTEND TO!',
         "<18>I'VE GIVEN YOU PLENTY OF LEEWAY, BUT STILL...",
         '<18>YOU SIT AROUND AND DO NOTHING ALL DAY!',
         "<18>EVEN NOW, THAT'S WHAT YOU'RE DOING!",
         '<18>NOTHING!',
         "<25>{#p/sans}* actually, i'm playing with this gravometric thingy.",
         "<25>* it's really cool.",
         '<25>{#f/4}* do you wanna look?',
         "<18>{#p/papyrus}{#x3}{#f/7}NO!!\nI DON'T HAVE TIME FOR THAT!!",
         '<18>{#x2}IF A HUMAN COMES THROUGH HERE, I WANT TO BE READY!',
         '<18>I MUST BE THE ONE!\nI WILL BE THE ONE!',
         '<18>{#x1}{#f/9}I WILL FINALLY CAPTURE A HUMAN!',
         '<18>{#x4}{#f/0}THEN I, THE GREAT PAPYRUS...',
         '<18>WILL GET ALL THE THINGS I UTTERLY DESERVE!',
         '<18>RESPECT...\nRECOGNITION...',
         '<18>{#f/9}I WILL FINALLY BE ABLE TO JOIN THE ROYAL GUARD!',
         '<25>{#p/sans}* hmm...',
         '<25>{#f/2}* maybe this gadget will help you.',
         "<18>{#p/papyrus}{#x3}{#f/7}SANS, THAT WON'T DO ANYTHING!\nYOU LAZYBONES!",
         '<18>{#x1}{#f/5}YOU KNOW, YOU ARE CAPABLE OF SO MUCH MORE, YET...',
         '<18>{#x2}{#f/7}YOU CHOOSE TO SIT AROUND AND DO NOTHING ALL DAY!',
         "<18>{#x1}{#f/5}DON'T YOU WANT... MORE, OUT OF LIFE?",
         "<25>{#p/sans}* hey, take it easy.\n* i've got plenty of things in mind.",
         "<25>{#f/4}* perhaps you could even say i'm...",
         '<25>{#f/2}* shooting for the {@fill:#ff0}stars{@fill:#fff}?'
      ],
      sans6: [
         '<18>{#p/papyrus}{#x3}{#f/7}SANS!!',
         "<25>{#p/sans}{#f/5}* come on.\n* you're smiling.",
         '<18>{#p/papyrus}{#x2}{#f/7}I AM AND I UTTERLY DESPISE IT!',
         '<18>{#x1}{#f/4}(SIGH...)',
         '<18>{#f/5}WHY DOES SOMEONE\nAS GREAT AS MYSELF...',
         '<18>HAVE TO DO SO MUCH JUST TO GET SOME RECOGNITION??',
         '<25>{#p/sans}* heh.\n* perhaps you should focus more on, well...',
         '<25>* the {@fill:#ff0}gravity{@fill:#fff} of the situation.'
      ],
      sans7: [
         '<18>{#p/papyrus}{#x2}{#f/7}UGH!!',
         '<18>{#x1}{#f/4}I WILL ATTEND TO MY PUZZLES...',
         '<18>{#f/7}AS FOR YOUR WORK?',
         '<18>{#f/4}I EXPECT YOU TO DO A MORE...',
         '<18>{#f/9}{@fill:#ff0}"STELLAR"{@fill:#fff} JOB FROM NOW ON!!!',
         '<18>{#f/0}NYEHEHEHEHEHE\nHEHEHEHEHEHEH!!'
      ],
      sans8: [ '<18>{#p/papyrus}HEH!' ],
      sans9: [ '<25>{#p/sans}* ok, time to bring you back down.' ],
      sans10: [
         '<25>{#p/sans}{#f/0}* actually, hey...\n* before you go out there on your own...',
         "<25>{#f/3}* you should know the royal guard's on the lookout for you.",
         "<25>{#f/0}* don't worry, though.\n* all they've got out here are the canines.",
         "<25>{#f/0}* since you're a human, you should know what dogs love, right?",
         "<25>{#f/2}* they're almost as harmless as papyrus."
      ],
      sansbook0: [ '<32>{#p/human}* (It appears this joke book has no clear ending.)' ],
      sansbook1: [ '<32>{#p/basic}* It\'s a book about non-euclidian geometry.\n* Property of "ALPHYS."' ],
      sansbook2: [ choicer.create('* (Take a look inside?)', 'Yes', 'No') ],
      sansbook3: [ '<32>{#p/human}* (You look inside the book...)' ],
      sansbook4: [ '<32>{#p/basic}* Inside the geometry book was a joke book.' ],
      sansbook5: [ '<32>{#p/basic}* Inside the joke book was another geometry book.' ],
      sansbook6: [ '<32>{#p/basic}* Inside the geometry book was another joke book.' ],
      sansbook7: [ "<32>{#p/basic}* It's another geometry book." ],
      sansbook8: [ "<32>{#p/basic}* It's another joke book." ],
      sansbook9: [ '<32>{#p/human}* (You decide not to look.)' ],
      sansbook10: () => [
         "<32>{#p/basic}* It's a note from Sans.",
         '<32>{#p/without}* "why so serious?"\n* "it\'s just a bad joke."',
         '<33>{#p/without}* "heh..."',
         '<33>{#p/without}* "don\'t read into it too deeply."',
         ...(SAVE.data.b.oops ? [] : [ '<32>{#p/basic}* ... this is the worst joke I have ever experienced.' ])
      ],
      sansinter: {
         s_sans: pager.create(
            0,
            () =>
               world.edgy
                  ? [ "<25>{#p/sans}* 'sup." ]
                  : [
                       "<25>{#p/sans}* papyrus will be back soon, y'know.",
                       "<25>{#f/4}* i'd get going if i were you...",
                       "<25>{#f/2}* otherwise, you'll have to listen to more of my hilarious jokes."
                    ],
            () =>
               world.edgy
                  ? [
                       '<25>{#p/sans}* if my bro was here, you and i would have TONS of stuff to do.',
                       '<25>{#p/sans}{#f/3}* but, alas...',
                       "<25>{#p/sans}{#f/2}* he's busy solving the sudoku book i gave him."
                    ]
                  : [
                       "<25>{#p/sans}* look, there's nothin' to be afraid of.",
                       "<25>{#f/2}* he may seem scary, but papyrus is the nicest guy you'll ever meet."
                    ],
            () =>
               world.edgy
                  ? [
                       '<25>{#p/sans}* huh?\n* you want me to bring you to him?',
                       "<25>{#f/3}* look, bucko.\n* you're barking up the wrong holo-tree.",
                       "<25>{#p/sans}{#f/2}* if i were you, i'd be thankful for what you already have."
                    ]
                  : [ '<25>{#p/sans}* trust me.' ],
            () =>
               world.edgy
                  ? [
                       '<25>{#p/sans}{#f/3}* ...',
                       "<25>{*}{#p/darksans}{#f/1}{#i/5}{#s.stop}* Don't push your luck.",
                       '{*}{#s.resume}{%}'
                    ]
                  : [ '<25>{#p/sans}* trust me.' ],
            () => (world.edgy ? [] : [ '<25>{#p/sans}* trust me.' ])
         ),
         s_papyrus: pager.create(
            0,
            [
               "<25>{#p/sans}* hey, here's something important to remember.",
               '<25>* my brother has a very {@fill:#00a2e8}special attack{@fill:#fff}.',
               "<25>* if you see an {@fill:#ff993d}orange attack{@fill:#fff}, you'll get hurt if you're not moving.",
               "<25>{#f/3}* here's an easy way to keep it in mind.",
               "<25>{#f/0}* imagine hot coals.\n* you wouldn't stand still on those, right?",
               '<25>* hot coals are rocky.\n* so imagine boney hot coals instead.',
               '<25>{#f/2}* simple, right?\n* when fighting, think about boney hot coals.'
            ],
            [
               "<25>{#p/sans}{#f/0}* and no, you won't get hurt if you're moving slowly.",
               '<25>{#f/0}* you just have to be moving.',
               "<25>{#f/2}* there's someone out there who can explain it better."
            ],
            [ '<25>{#p/sans}{#f/2}* remember...\n* boney hot coals.' ]
         ),
         s_dogs: pager.create(
            0,
            [
               "<25>{#p/sans}* since you're a human, you've probably never heard of the W.T.F.",
               '<25>{#f/2}* that\'s short for "wide- area troposphere framework."'
            ],
            [
               '<25>{#p/sans}* if the W.T.F. were to drop, the air around us would disappear.',
               "<25>{#f/3}* don't worry, though.\n* i {@fill:#ff0}swear{@fill:#fff} it's never happened before."
            ],
            [ "<25>{#p/sans}{#f/2}* if it did, it'd be mother-frellin' crazy." ]
         ),
         s_jenga: pager.create(
            0,
            [
               '<25>{#p/sans}* actually, that spaghetti from earlier...',
               "<25>{#f/3}* it wasn't too bad for my brother.",
               "<25>{#f/0}* since he started cooking lessons, he's been improving a lot.",
               "<25>{#f/4}* i bet if he keeps it up, next year he'll even impress the king."
            ],
            [ "<25>{#p/sans}{#f/2}* ... the man up top's a sucker for spaghetti." ]
         ),
         s_bridge: pager.create(
            0,
            () =>
               world.edgy
                  ? [
                       '<25>{#p/sans}{#f/0}* i hope you liked that last puzzle i set for you.',
                       '<25>{#f/3}* i was kind of in a hurry, but papyrus insisted i prepare it.'
                    ]
                  : world.population < 6 && !world.bullied
                  ? [
                       "<25>{#p/sans}{#f/3}* i hear the area's being evacuated right now...",
                       "<25>{#f/0}* if i were you, i'd be afraid for my life."
                    ]
                  : [
                       "<25>{#p/sans}{#f/3}* i don't know what my brother's going to do now.",
                       '<25>{#f/0}* if i were you, i would make sure i understand {@fill:#ff993d}orange attacks{@fill:#fff}.'
                    ],
            () =>
               world.edgy
                  ? [
                       '<25>{#p/sans}{#f/0}* what?\n* can you blame me?',
                       "<25>{#f/3}* it's hard to get ANYTHING done when i have you to consider."
                    ]
                  : world.population < 6 && !world.bullied
                  ? [
                       '<25>{#p/sans}{#f/0}* thankfully, i have someone who cares about my well-being.',
                       "<25>{#f/2}* no matter what happens, i know he'll be there for me."
                    ]
                  : [ '<25>{#p/sans}{#f/2}* oh, and maybe {@fill:#00a2e8}blue attacks{@fill:#fff}, too.' ],
            () =>
               world.edgy
                  ? [ '<25>{#p/sans}{#f/3}* oh well.' ]
                  : world.population < 6 && !world.bullied
                  ? [ '<25>{#p/sans}{#f/0}* am i wrong?' ]
                  : [ '<26>{#p/sans}{#f/0}* all sorts of attacks.' ]
         )
      },
      sansbredgey: () =>
         world.edgy
            ? 6 <= world.population
               ? [
                    '<25>{#p/sans}* by the way...',
                    "<25>* i know i've been harsh on you lately...",
                    '<25>{#f/3}* but thanks for trying to be a better person.',
                    '<25>{#f/2}* keep it up, ok?'
                 ]
               : world.bullied
               ? [
                    '<25>{#p/sans}* by the way...',
                    "<25>* i know you're still going around hurting people...",
                    '<25>{#f/3}* but i appreciate the effort not to outright to kill them.',
                    "<25>{#f/2}* it's something, right?"
                 ]
               : [
                    '<25>{#p/sans}* by the way...',
                    '<25>* if you happen to run into my brother...',
                    '<25>{#f/3}* ...',
                    "<25>{*}{#p/darksans}{#f/1}{#i/5}{#s.stop}* Don't even try it.",
                    '{*}{#s.resume}{%}'
                 ]
            : 6 <= world.population
            ? [
                 '<25>{#p/sans}* by the way...',
                 "<25>* i know it's kind of silly at times...",
                 "<25>{#f/3}* but thanks for going along with my brother's crazy schemes.",
                 "<25>{#f/2}* you're a champion."
              ]
            : world.bullied
            ? [
                 '<25>{#p/sans}* by the way...',
                 "<25>* i know you've been going around hurting people...",
                 '<25>{#f/3}* but i appreciate the effort not to outright to kill them.',
                 "<25>{#f/2}* it's something, right?"
              ]
            : [
                 '<25>{#p/sans}* by the way...',
                 '<25>* if you happen to run into my brother...',
                 '<25>{#f/3}* ...',
                 "<25>{*}{#p/darksans}{#f/1}{#i/5}{#s.stop}* Don't even try it.",
                 '{*}{#s.resume}{%}'
              ],
      sentryPapyrus1: pager.create(
         0,
         () =>
            SAVE.data.b.svr
               ? [ '<32>{#p/human}* (The narration on this sentry station predicts the future fame of its creator.)' ]
               : [
                    "<32>{#p/basic}* There's some narration on this cardboard box.",
                    ...(world.genocide || SAVE.flag.n.pacifist_marker_bully > 3
                       ? [
                            '<23>{#p/papyrus}{#f/30}"PLEASE DO NOT DESTROY MY SENTRY STATION."',
                            '<23>"I WORKED VERY HARD ON IT, AND IT\'D BE A SHAME IF IT WERE RUINED."',
                            '<23>"... THAT IS ALL."',
                            '<23>("NOTE: I WOULD HAVE SAID MORE, BUT THERE\'S NOT ENOUGH ROOM.")'
                         ]
                       : [
                            '<23>{#p/papyrus}{#f/30}"YOU OBSERVE THE WELL- CRAFTED SENTRY STATION."',
                            '<23>"WHO COULD HAVE BUILT THIS, YOU PONDER...?"',
                            '<23>"I BET IT WAS THAT VERY FAMOUS ROYAL GUARDSMAN!"',
                            SAVE.data.n.plot === 72
                               ? '<32>{#p/basic}* The last line was crossed out.'
                               : '<23>("NOTE: NOT YET A VERY FAMOUS ROYAL GUARDSMAN.")',
                            ...(SAVE.data.n.plot < 19 && !world.edgy
                               ? [
                                    "<25>{#p/sans}{#f/0}* admiring my bro's handiwork, are we?",
                                    "<25>{#p/sans}{#f/2}* i know.\n* it's pretty cool."
                                 ]
                               : [])
                         ])
                 ],
         () =>
            SAVE.data.b.svr
               ? [ '<32>{#p/human}* (The narration on this sentry station predicts the future fame of its creator.)' ]
               : [
                    "<32>{#p/basic}* There's some narration on this cardboard box.",
                    ...(world.genocide || SAVE.flag.n.pacifist_marker_bully > 3
                       ? [
                            '<23>{#p/papyrus}{#f/30}"PLEASE DO NOT DESTROY MY SENTRY STATION."',
                            '<23>"I WORKED VERY HARD ON IT, AND IT\'D BE A SHAME IF IT WERE RUINED."',
                            '<23>"... THAT IS ALL."',
                            '<23>("NOTE: I WOULD HAVE SAID MORE, BUT THERE\'S NOT ENOUGH ROOM.")'
                         ]
                       : [
                            '<23>{#p/papyrus}{#f/30}"YOU OBSERVE THE WELL- CRAFTED SENTRY STATION."',
                            '<23>"WHO COULD HAVE BUILT THIS, YOU PONDER...?"',
                            '<23>"I BET IT WAS THAT VERY FAMOUS ROYAL GUARDSMAN!"',
                            SAVE.data.n.plot === 72
                               ? '<32>{#p/basic}* The last line was crossed out.\n* That checks out.'
                               : '<23>("NOTE: NOT YET A VERY FAMOUS ROYAL GUARDSMAN.")'
                         ])
                 ]
      ),
      sentryPapyrus2: pager.create(0, () => [
         '<32>{#p/human}* (You look under the shelf...)',
         ...(SAVE.data.b.svr
            ? [
                 [
                    "<25>{#p/asriel1}{#f/17}* That's where Papyrus keeps all his wacky whatsits.",
                    '<25>{#f/20}* A fighter by night, and a tinkerer by... also night.'
                 ],
                 [
                    '<26>{#p/asriel1}{#f/13}* In one timeline, I encouraged Papyrus to\n  be a royal lab employee.',
                    '<25>{#f/17}* He kind of ended up doing his own thing...',
                    '<25>{#f/17}* ... working on personal science projects rather than official work.',
                    "<25>{#f/13}* Papyrus isn't someone who easily conforms to standard systems."
                 ],
                 [
                    '<26>{#p/asriel1}{#f/13}* One device Papyrus created was the legendary "shickaxe."',
                    '<25>{#f/17}* A multi-tool that could efficiently break any material.',
                    '<25>{#f/15}* Its durability was... infinite, actually.',
                    '<25>{#f/13}* He only threw it away because, in his own words...',
                    '<25>{#f/13}* "Having a tool that can do everything takes the fun out of it!"'
                 ],
                 [ '<26>{#p/asriel1}{#f/20}* Papyrus certainly has a unique way of thinking.' ]
              ][Math.min(asrielinter.sentryPapyrus2++, 3)]
            : [ '<32>* Boxes upon boxes of unused cables and old tech can be found here.' ])
      ]),
      sentrySans1: () =>
         SAVE.data.b.svr
            ? [ '<32>{#p/human}* (This sentry station strikes you as rather unimportant.)' ]
            : world.darker
            ? [ "<32>{#p/basic}* It's a sentry station." ]
            : SAVE.data.n.plot < 31
            ? [
                 "<32>{#p/basic}* Sans's sentry station...",
                 "<32>* Truly the most worthwhile investment the royal guard could've made."
              ]
            : SAVE.data.n.plot === 72
            ? [ "<32>{#p/basic}* Sans's sentry station...", "<32>* The quality of this investment hasn't changed a bit." ]
            : [ "<32>{#p/basic}* Sans's sentry station...", '<33>* A poor investment in hindsight.' ],
      sentrySans2: pager.create(
         0,
         () => [
            '<32>{#p/human}* (You look under the shelf...)',
            ...(SAVE.data.b.svr
               ? [
                    [
                       '<25>{#p/asriel1}{#f/15}* As a star, there were some dark corners even I never dared search.',
                       "<25>{#f/20}* It's probably for the best if we leave this be."
                    ],
                    [ '<25>{#p/asriel1}{#f/20}* Please.\n* Anywhere but here.' ]
                 ][Math.min(asrielinter.sentrySans2++, 1)]
               : world.edgy
               ? [ "<32>{#p/basic}* It's mostly empty, save for the singular red crayon." ]
               : [ '<32>{#p/basic}* There are bottles of honey, tartar, and yamok sauce stockpiled here.' ])
         ],
         () => [
            '<32>{#p/human}* (You look under the shelf...)',
            SAVE.data.b.svr
               ? '<25>{#p/asriel1}{#f/20}* Please.\n* Anywhere but here.'
               : world.edgy
               ? "<32>{#p/basic}* It's an unsettling reminder."
               : "<32>{#p/basic}* It's an unholy quantity of food toppings."
         ]
      ),
      whew1: () =>
         [
            [ '<32>{#p/basic}* The doggy bed is covered in annoying white fur.' ],
            [ '<32>{#p/basic}* Fighting Papyrus has begun to tire you, but not enough to sleep.' ],
            [
               '<32>{#p/basic}* After fighting Papyrus three times, you feel exhausted.',
               choicer.create('* (What will you do?)', 'Nothing', 'Sleep')
            ],
            [
               '<32>{#p/basic}* Continually fighting Papyrus has exhausted you.',
               choicer.create('* (What will you do?)', 'Nothing', 'Sleep')
            ]
         ][Math.min(SAVE.data.n.state_papyrus_capture - 1, 3)],
      whew2: [ '<32>{#p/human}* (You let the doggy bed be.)' ],
      whew3: [ '<32>{#p/human}* (You lay in the doggy bed...)' ],
      whew4: [
         "<32>{#p/alphys}* And you say they're in here?",
         '<23>{#p/papyrus}{#f/30}WELL, YES...',
         '<23>{#p/papyrus}{#f/30}IF I MAY ASK, WHAT ARE YOU GOING TO DO WITH THEM?',
         "<23>{#p/papyrus}{#f/30}I D-DON'T WANT THEM TO...",
         '<32>{#p/alphys}* ...',
         '<32>{#p/alphys}* Papyrus...',
         "<32>{#p/alphys}* I'm not gonna hurt them, okay?\n* N-nobody will.",
         "<23>{#p/papyrus}{#f/30}ALRIGHT...\nBUT IF YOU DO HURT THEM, I'LL...",
         "<23>{#p/papyrus}{#f/30}I'LL BRING UNDYNE WITH ME TO GET THEM BACK!",
         "<32>{#p/alphys}* Ehehe... that's...",
         '<23>{#p/papyrus}{#f/30}WHAT?\nUNDYNE WOULD HELP!\nSHE WOULD!',
         "<32>{#p/alphys}* Yeah... l-let's just hope she doesn't have to, alright?",
         '<23>{#p/papyrus}{#f/30}OKAY...'
      ],
      whew5: [
         '<32>{#p/human}* (It feels like someone is trying to carry you.)',
         '<32>{#p/alphys}* O-oh god, were humans always this heavy!?'
      ],
      whew6: [
         '<32>{#p/basic}* Huh?\n* Where are...',
         '<32>* ...',
         "<32>* Asgore's house.",
         "<33>* ... come on, let's go find him."
      ],
      trivia: {
         // never forget the givers!
         ogkxsaucer: () =>
            SAVE.data.b.svr
               ? [ "<32>{#p/human}* (You reach your hand deep into the dispenser.)\n* (It's a tad saucy.)" ]
               : [ "<32>{#p/basic}* It's a dispenser of some kind." ],
         mousehole: () =>
            [
               [ "<32>{#p/basic}* It's a mouse hole.\n* The mice inside are discussing your great battle." ],
               [ "<32>{#p/basic}* It's a mouse hole.\n* The mice inside are concerned for your safety." ],
               [ "<32>{#p/basic}* It's a mouse hole.\n* The mice inside are wondering if you should take a rest." ],
               [ "<32>{#p/basic}* It's a mouse hole.\n* The mice inside are concerned for your sanity." ]
            ][Math.min(SAVE.data.n.state_papyrus_capture - 1, 3)],
         lamppost: () =>
            SAVE.data.b.svr
               ? [ '<32>{#p/human}* (You observe the strange lamp bouncing up and down.)' ]
               : [ "<32>{#p/basic}* It's a bounce lamp." ],
         ntower: () =>
            SAVE.data.b.svr
               ? [
                    [
                       '<25>{#p/asriel1}{#f/13}* I guess Alphys never did fix this thing.',
                       "<25>{#f/16}* Don't blame her.\n* That ruleset is kind of a nightmare.",
                       '<25>{#f/20}* Also, it kind of relies on Sans being there.',
                       '<25>{#f/15}* Getting him to participate is... kind of impossible.'
                    ],
                    [
                       '<25>{#p/asriel1}{#f/17}* Yeah... Sans.\n* Great sense of humor, but not very active.',
                       '<25>{#f/13}* And by active, I mean physically.',
                       "<25>{#f/15}* And by physically, I mean he doesn't like to move.",
                       '<25>{#f/16}* And by move, I mean get up and walk around.',
                       '<25>{#f/13}* After all.\n* He usually just takes some kind of shortcut.',
                       '<25>{#f/15}* I still have no idea how those things work.'
                    ],
                    [
                       "<25>{#p/asriel1}{#f/17}* Guess you could say Alphys's choice to not fix this puzzle...",
                       '<25>{#f/20}* Was a little shortcut of her own.'
                    ],
                    [ '<25>{#p/asriel1}{#f/20}* ... maybe my sense of humor could use some work.' ]
                 ][Math.min(asrielinter.ntower++, 3)]
               : SAVE.data.b.s_state_puzzlenote || (!world.genocide && world.edgy)
               ? [ "<32>{#p/basic}* It's un-activated." ]
               : [ '<32>{#p/basic}* What an unfortunate result.' ],
         s_secret_sign: () =>
            SAVE.data.b.svr
               ? [ '<32>{#p/human}* (The sign mentions an escape.)' ]
               : SAVE.data.n.state_starton_trashprogress < 2 && SAVE.data.n.plot < 72
               ? [
                    '<32>{#p/basic}* "It\'s taking a time-out."',
                    ...(world.goatbro && SAVE.flag.n.ga_asrielDog++ < 1 ? [ '<25>{#p/asriel2}{#f/15}* What.' ] : [])
                 ]
               : [ '<32>{#p/basic}* "It\'s escaped."' ],
         grillflower: () =>
            SAVE.data.b.svr
               ? [ '<32>{#p/human}* (It appears this plant is very neon indeed.)' ]
               : world.darker
               ? [ "<32>{#p/basic}* It's a plant." ]
               : [
                    "<32>{#p/basic}* It's not just a plant...\n* It's a NEON plant.",
                    '<32>* What difference does it make?\n* None, none at all.'
                 ],
         librarbywindow1: () =>
            SAVE.data.b.svr
               ? [ '<32>{#p/human}* (But there was nothing of real interest to see here.)' ]
               : [ "<32>{#p/basic}* There's a plant in the window.\n* How interesting." ],
         librarbywindow2: () =>
            SAVE.data.b.svr
               ? [ '<32>{#p/human}* (You reach up to the window and put your hands on it.)' ]
               : [
                    "<32>{#p/human}* (You reach up to the window and put your hands on it.)\n* * (You can't see inside.)"
                 ],
         papwindow: () =>
            SAVE.data.b.svr
               ? [ "<32>{#p/human}* (You peer into the window, but you couldn't see anybody inside.)" ]
               : SAVE.data.n.plot_date > 0 && SAVE.data.n.plot_date < 1
               ? [ '<32>{#p/basic}* ... seems Papyrus is waiting patiently for you.' ]
               : [ "<32>{#p/basic}* ... seems like nobody's home." ],
         s_puzzlenote: () =>
            SAVE.data.b.svr
               ? [ '<32>{#p/human}* (The note describes the rules of a complex challenge.)' ]
               : SAVE.data.b.s_state_puzzlenote
               ? [ "<33>{#p/basic}* It's illegible chicken-scratch." ]
               : [],
         s_backrooms_lessdog: () =>
            SAVE.data.b.svr
               ? [
                    "<32>{#p/human}* (You run your hands through the nonexistent dog's fur.)\n* (The dog seems to like it.)",
                    ...[
                       [ '<25>{#p/asriel1}{#f/13}* Frisk, are you okay?' ],
                       [ "<25>{#p/asriel1}{#f/13}* Frisk.\n* There's nothing there." ],
                       [ '<25>{#p/asriel1}{#f/15}* ... okay?' ],
                       [ '<25>{#p/asriel1}{#f/15}* ...' ]
                    ][Math.min(asrielinter.s_backrooms_lessdog++, 3)]
                 ]
               : SAVE.flag.n.pacifist_marker_bully > 3
               ? [ '<32>{#p/basic}* ... but everybody ran.' ]
               : SAVE.data.n.plot < 72
               ? world.bullied
                  ? [ '<32>{#p/basic}* ... but everybody ran.' ]
                  : SAVE.data.n.state_starton_lesserdog === 2 || world.population === 0
                  ? [ '<32>{#p/basic}* ... but nobody came.' ]
                  : [ "<32>{#p/basic}* It's playing a game of poker against itself.", '<32>* It appears to be losing...' ]
               : [
                    "<32>{#p/basic}* It's playing a game of poker against itself.",
                    '<32>* It appears to be winning...\n* Somehow.'
                 ],
         s_backrooms_lesstable: () =>
            SAVE.data.b.svr
               ? [ '<32>{#p/human}* (You wonder if the Dog chow is edible for humans.)' ]
               : [ "<32>{#p/basic}* It's a table for 4-D poker, plus complimentary dog chow." ],
         s_beddinng_table: () =>
            SAVE.data.b.svr
               ? [ '<32>{#p/human}* (You glance at the table.)\n* (You then glance away.)' ]
               : [ '<32>{#p/basic}* The obligatory table.\n* Despite its lack of purpose, it fills the space well.' ],
         s_bh_bone: pager.create(
            0,
            () =>
               SAVE.data.b.svr
                  ? [ '<32>{#p/human}* (You admire the artisanship in this minimalistic painting.)' ]
                  : [
                       ...(dateready() && SAVE.data.n.state_starton_papyrus === 0
                          ? [
                               '<18>{#p/papyrus}A CLASSIC IMAGE.',
                               "<18>IT ALWAYS REMINDS ME OF WHAT'S IMPORTANT IN LIFE."
                            ]
                          : []),
                       "<32>{#p/basic}* It's a minimalistic painting of a cartoon bone."
                    ],
            () =>
               SAVE.data.b.svr
                  ? [ '<32>{#p/human}* (You admire the artisanship in this minimalistic painting.)' ]
                  : [ "<32>{#p/basic}* It's a minimalistic painting of a cartoon bone." ]
         ),
         s_bh_cottonball: () =>
            SAVE.data.b.svr
               ? [
                    '<32>{#p/human}* (The content of the notes attached to this pile of socks does not surprise you at all.)'
                 ]
               : [
                    "<32>{#p/basic}* It's a dirty cotton ball with a series of notes on it.",
                    '<23>{#p/papyrusnt}"SANS!"\n"PLEASE PICK UP YOUR COTTON BALL!"',
                    '<32>{#p/without}* "ok."',
                    '<23>{#p/papyrusnt}"DON\'T PUT IT BACK DOWN!"\n"MOVE IT!"',
                    '<32>{#p/without}* "ok."',
                    '<23>{#p/papyrusnt}"YOU MOVED IT TWO MICRONS!"\n"MOVE IT TO YOUR ROOM!"',
                    '<32>{#p/without}* "ok."',
                    '<23>{#p/papyrusnt}"AND DON\'T BRING IT BACK!"',
                    '<32>{#p/without}* "ok."',
                    '<23>{#p/papyrusnt}"IT\'S STILL HERE!"',
                    '<32>{#p/without}* "didn\'t you just say not to bring it back to my room?"',
                    '<23>{#p/papyrusnt}"FORGET IT!"'
                 ],
         s_paptrash: pager.create(
            0,
            ...[
               () => [
                  ...(dateready() && SAVE.data.n.state_starton_papyrus === 0
                     ? [
                          "<18>{#p/papyrus}{#f/9}I DIDN'T KNOW YOU WERE A FAN OF GARBAGE-HUNTING!",
                          '<18>{#f/0}DR. ALPHYS WOULD LIKE TO KNOW YOUR NUMBER.'
                       ]
                     : []),
                  world.darker ? "<32>{#p/basic}* It's a trash can." : '<32>{#p/basic}* It\'s a "stellar" trash can.'
               ],
               pager.create(
                  1,
                  ...[
                     [
                        '<32>{#p/basic}* You can tell this trash can is "stellar" because it has "stellar" written on the side.'
                     ],
                     [ '<32>{#p/basic}* A "stellar" dude with a "stellar" trash can.\n* What more could you want.' ],
                     [ '<32>{#p/basic}* The "stellarest" trash can this side of town.' ],
                     [ '<32>{#p/basic}* Or any side, for that matter.' ],
                     [ '<32>{#p/basic}* How "stellar" is that?' ],
                     [ '<32>{#p/basic}* Very?\n* Very very?\n* More "stellar" than anything?' ],
                     [ "<32>{#p/basic}* We've got options here, baby!" ],
                     [
                        '<33>{#p/basic}* But no matter how much time\n  has passed... the trash can\n  still strikes you as "stellar."'
                     ],
                     [
                        '<32>{#p/basic}* Actually, the more I think about it, "stellar" doesn\'t begin to scratch the surface.'
                     ],
                     [ '<32>{#p/basic}* Like, maybe "astronomical" would be a better term for it.' ],
                     [ "<33>{#p/basic}* Actually, no.\n* That term's reserved for the higher-ups at the royal lab." ],
                     [ '<32>{#p/basic}* Hmm...\n* But what if the trash can is secretly a black hole!' ],
                     [ '<32>{#p/basic}* A black hole trash can...\n* Would you risk it?' ],
                     [ "<32>{#p/basic}* That's a weird question." ],
                     [
                        '<32>{#p/basic}* I guess you could say that, thanks to this trash can, I\'m getting all "spaced out."'
                     ],
                     [ "<32>{#p/basic}* You might even say I'm feeling... rather otherwordly." ],
                     [ '<32>{#p/basic}* ...\n* Ignore that last statement.' ],
                     [ '<32>{#p/basic}* Actually, ignore the last nine things I said entirely.\n* This too.' ],
                     [ "<32>{#p/basic}* Truth is...\n* There's only one adjective this trash can could ever be." ],
                     [ "<32>{#p/basic}* What is it, you ask?\n* Well, I'll tell you... if you really want to know." ],
                     [ "<32>{#p/basic}* It's not an astronomical trash can, not by any means." ],
                     [ "<32>{#p/basic}* It's not black hole-ish in any capacity..." ],
                     [ "<32>{#p/basic}* Don't you remember?\n* Don't you remember how this all started?" ],
                     [ '<32>{#p/basic}* It was the first thing I ever said about this trash can.' ],
                     [ '<32>{#p/basic}* ...\n* I said...\n* Wait for it...' ],
                     [ '<32>{#p/basic}* It\'s a "stellar" trash can.' ]
                  ].map(lines => () => world.darker ? [ "<32>{#p/basic}* It's a trash can." ] : lines)
               )
            ].map(
               p => () =>
                  SAVE.data.b.svr
                     ? [ "<32>{#p/human}* (You can't make out what's in the trash...)" ]
                     : CosmosUtils.provide(p)
            )
         ),
         s_bh_fridge: pager.create(
            0,
            () =>
               SAVE.data.b.svr
                  ? [ '<32>{#p/human}* (The food in this fridge seems decent enough.)' ]
                  : SAVE.flag.n.pacifist_marker_bully > 3
                  ? [ "<32>{#p/basic}* It's been gutted." ]
                  : SAVE.data.n.plot === 72
                  ? [ '<32>{#p/basic}* Oops, all spaghetti.' ]
                  : [
                       ...(dateready() && SAVE.data.n.state_starton_papyrus === 0
                          ? [
                               '<18>{#p/papyrus}{#f/9}AH-HA!\nINTERESTED IN MY FOOD MUSEUM?',
                               '<18>{#f/0}PLEASE, FEEL FREE TO PERUSE MY CULINARY ARTSHOW.'
                            ]
                          : []),
                       '<32>{#p/basic}* Half of the fridge is filled with containers all labelled "spaghetti."',
                       '<32>* The other half contains nothing but an empty bottle of orange crush soda.'
                    ],
            () =>
               SAVE.data.b.svr
                  ? [ '<32>{#p/human}* (The food in this fridge seems decent enough.)' ]
                  : SAVE.flag.n.pacifist_marker_bully > 3
                  ? [ "<32>{#p/basic}* It's been gutted." ]
                  : SAVE.data.n.plot === 72
                  ? [ '<32>{#p/basic}* Oops, all spaghetti.' ]
                  : [
                       ...(dateready() && SAVE.data.n.state_starton_papyrus === 0
                          ? [ "<18>{#p/papyrus}GREAT FRIDGE, ISN'T IT?" ]
                          : []),
                       '<32>{#p/basic}* The bottle is labelled as property of "ALPHYS."'
                    ]
         ),
         s_bh_rocktable: pager.create(
            0,
            () =>
               SAVE.data.b.svr
                  ? [ '<32>{#p/human}* (You doubt the stardust is actually edible.)' ]
                  : [
                       ...(dateready() && SAVE.data.n.state_starton_papyrus === 0
                          ? [
                               '<18>{#p/papyrus}AH YES, THE DINING TABLE.',
                               '<18>{#f/5}WE USED TO KEEP A PET MOON ROCK THERE...',
                               '<18>{#f/7}UNTIL ONE DAY, IT TOTALLY VANISHED!',
                               '<18>{#f/4}AT FIRST, I BLAMED THAT MEDDLING CANINE...',
                               '<18>{#f/7}BUT THEN I FOUND THAT SANS HAD USED IT TO TEST HIS...',
                               '<18>{#f/6}HIS... ACTUALLY USEFUL GADGET.\nWOWIE...',
                               "<18>{#f/0}YOU KNOW WHAT, I'LL GIVE IT TO HIM.",
                               '<18>{#f/0}HE GENUINELY TRIED PUTTING EFFORT INTO SOMETHING.',
                               '<18>{#f/4}EVEN IF IT COST US A VALUABLE MOON ROCK.',
                               "<18>{#f/0}YEAH!!\n'E' FOR EFFORT!!"
                            ]
                          : []),
                       "<32>{#p/basic}* It's covered in edible stardust."
                    ],
            () =>
               SAVE.data.b.svr
                  ? [ '<32>{#p/human}* (You doubt the stardust is actually edible.)' ]
                  : [ "<32>{#p/basic}* It's covered in edible stardust." ]
         ),
         s_bh_sansdoor: () =>
            SAVE.data.b.svr ? [ "<32>{#p/human}* (You can't seem to find a way in.)" ] : [ "<32>{#p/basic}* It's locked." ],
         s_bh_stove: pager.create(
            0,
            () =>
               SAVE.data.b.svr
                  ? [
                       [
                          '<25>{#p/asriel1}{#f/13}* Tell me, Frisk...',
                          '<25>{#f/13}* Have you ever heard the tragedy of the abandoned cheesecake?',
                          '<25>{#f/16}* Right here in this pie tin, a confection was created...',
                          '<25>{#f/3}* Something beyond what its baker could have forseen.'
                       ],
                       [
                          '<25>{#p/asriel1}{#f/13}* Basically, Sans had created a cheesecake so sweet...',
                          '<25>{#f/16}* Anyone who tried it would become addicted to it.',
                          '<25>{#f/3}* If he wanted, he could have the outpost all to himself.',
                          '<25>{#f/3}* The cheesecake, it would seem...',
                          '<25>{#f/4}* Was a pathway to success Papyrus could never approve of.'
                       ],
                       [
                          "<25>{#p/asriel1}{#f/13}* In the end, Sans knew he'd upstage his brother...",
                          "<25>{#f/15}* And that, by simply creating the cheescake, he'd gone too far.",
                          '<25>{#f/16}* So he stashed it away to avoid taking the responsibility.'
                       ],
                       [ '<25>{#p/asriel1}{#f/16}* Alas, the tragedy of the abandoned cheesecake.' ]
                    ][Math.min(asrielinter.s_bh_stove++, 3)]
                  : [
                       "<32>{#p/basic}* There's an empty pie tin inside the stove.",
                       ...(dateready() && SAVE.data.n.state_starton_papyrus === 0
                          ? [
                               '<18>{#p/papyrus}MY BROTHER ALWAYS GOES OUT TO EAT.',
                               "<18>{#f/4}BUT RECENTLY, HE TRIED 'BAKING' SOMETHING...",
                               '<18>{#f/4}IT WAS LIKE... A CHEESECAKE?',
                               '<18>{#f/4}BUT FILLED WITH A SUGARY, NON-DIARY SUBSTANCE.',
                               '<18>{#f/7}HOW ABSURD!'
                            ]
                          : [])
                    ],
            () =>
               SAVE.data.b.svr
                  ? [
                       [],
                       [
                          '<25>{#p/asriel1}{#f/13}* Basically, Sans had created a cheesecake so sweet...',
                          '<25>{#f/16}* Anyone who tried it would become addicted to it.',
                          '<25>{#f/3}* If he wanted, he could have the outpost all to himself.',
                          '<25>{#f/3}* The cheesecake, it would seem...',
                          '<25>{#f/4}* Was a pathway to success Papyrus could never approve of.'
                       ],
                       [
                          "<25>{#p/asriel1}{#f/13}* In the end, Sans knew he'd upstage his brother...",
                          "<25>{#f/15}* And that, by simply creating the cheescake, he'd gone too far.",
                          '<25>{#f/16}* So he stashed it away to avoid taking the responsibility.'
                       ],
                       [ '<25>{#p/asriel1}{#f/16}* Alas, the tragedy of the abandoned cheesecake.' ]
                    ][Math.min(asrielinter.s_bh_stove++, 3)]
                  : [ "<32>{#p/basic}* There's an empty pie tin inside the stove." ]
         ),
         s_chew: [ "<32>{#p/basic}* It's a squeaky chew toy labelled 'special attack.'" ],
         s_crossroads_sign: () =>
            SAVE.data.b.svr
               ? [ '<32>{#p/human}* (The sign espouses the many benefits of boxes.)' ]
               : [
                    '<32>{#p/basic}* "This is a box."',
                    '<32>* "You can put an item inside or take an item out."',
                    '<32>* "The same box will appear later, so don\'t worry about coming back."',
                    '<32>* "Sincerely, a box fan."'
                 ],
         s_doghouse: () =>
            SAVE.data.b.svr
               ? [
                    '<32>{#p/human}* (The interior wall of this doghouse appears to be covered in strange round circles.)'
                 ]
               : SAVE.data.n.state_starton_greatdog === 2
               ? [ '<32>{#p/basic}* There must be a lot of empty space in this doghouse.' ]
               : world.genocide || world.edgy || world.darker
               ? [ '<32>{#p/basic}* A tiny doghouse.' ]
               : SAVE.data.n.plot === 72
               ? [ '<32>{#p/basic}* I wonder if this doghouse also travels in time.' ]
               : [ '<32>{#p/basic}* What a tiny doghouse!', '<32>{#p/basic}* Seems bigger on the inside.' ],
         s_doghouse_sign: () =>
            SAVE.data.b.svr
               ? [ "<32>{#p/human}* (You struggle to explain what's written on this sign.)" ]
               : [ '<32>{#p/basic}* "Woof."' ],
         s_dogs_sign: () =>
            SAVE.data.b.svr
               ? [ '<32>{#p/human}* (The sign rates the danger level of certain smells.)' ]
               : [
                    '<32>{#p/basic}* "Smell Danger Ratings"',
                    '<32>* "Silicone Smell - Robot"\n* "WHITE rating"\n* "Can become {@fill:#2f2f2f}BLACK{@fill:#fff} rating."',
                    '<32>* "Unsuspicious Smell - Puppy"\n* "{@fill:#003cff}BLUE{@fill:#fff} rating."\n* "Smell of rolling around."',
                    SAVE.flag.n.pacifist_marker_bully > 3
                       ? '<32>* "Weird Smell - Human"\n* "{@fill:#00c000}GREEN{@fill:#fff} rating."\n* "Escape at all costs!"'
                       : SAVE.data.n.plot === 72
                       ? '<32>* "Weird Smell - Human"\n* "{@fill:#00c000}GREEN{@fill:#fff} rating."\n* "Can defeat godlike beings."'
                       : SAVE.data.n.plot < 31
                       ? '<32>* "Weird Smell - Human"\n* "{@fill:#00c000}GREEN{@fill:#fff} rating."\n* "Destroy at all costs!"'
                       : '<32>* "Weird Smell - Puppy?"\n* "{@fill:#00c000}GREEN{@fill:#fff} rating."\n* "Deep knowledge of petting."'
                 ],
         s_dogstandA: () =>
            SAVE.data.b.svr
               ? [ '<32>{#p/human}* (It would appear this sign belongs to a male dog.)' ]
               : player.position.y > 45
               ? [ '<32>{#p/basic}* "His."' ]
               : [ '<32>{#p/basic}* Inside is a magazine for fancy blue-and-grey furcuts.' ],
         s_dogstandB: () =>
            SAVE.data.b.svr
               ? [ '<32>{#p/human}* (It would appear this sign belongs to a female dog.)' ]
               : player.position.y > 45
               ? [ '<32>{#p/basic}* "Hers."' ]
               : [ '<32>{#p/basic}* Inside is a brochure for blunt heavy-duty weaponry.' ],
         s_dogstandC: () =>
            SAVE.data.b.svr
               ? [ '<32>{#p/human}* (The signed letter inside looks to have been ignored.)' ]
               : world.genocide
               ? [
                    '<32>{#p/basic}* Inside, on the floor, is a signed royal guard letter about tactical retreat.',
                    '<32>{#p/basic}* The "treat" in "retreat" was nibbled off...'
                 ]
               : [
                    '<32>{#p/basic}* Inside, on the floor, is a signed royal guard letter about royal guard uniforms.',
                    "<32>{#p/basic}* It's covered in pawprints."
                 ],
         s_grillbys_beegstool: () =>
            SAVE.data.b.svr
               ? [ '<25>{#p/asriel1}{#f/20}* I think that might be a little tall for you.' ]
               : world.darker
               ? [ '<32>{#p/basic}* Just another barstool.' ]
               : [ '<32>{#p/basic}* A barstool...', '<32>* Seems like the right size for Sans.' ],
         s_grillbys_drinks: () =>
            SAVE.data.b.svr
               ? [ "<32>{#p/human}* (You can't make out what's under the tray table...)" ]
               : SAVE.data.n.plot === 72
               ? [ "<32>{#p/basic}* It's a tray table.", '<32>* The camera on the underside has been taken away.' ]
               : [ "<32>{#p/basic}* It's a tray table.", "<32>* There's a camera hidden on its underside." ],
         s_grillbys_shelf: () =>
            SAVE.data.b.svr
               ? [
                    [
                       "<25>{#p/asriel1}{#f/16}* I don't think tasting any of these would be a good idea.",
                       '<25>{#f/15}* The last time someone had one, they burst into flames...'
                    ],
                    [
                       '<25>{#p/asriel1}{#f/15}* Spoiler alert:\n* It was Grillby.',
                       "<25>{#f/20}* Golly.\n* I'm on fire today."
                    ],
                    [ "<25>{#p/asriel1}{#f/17}* Seriously, though.\n* You probably shouldn't drink these." ]
                 ][Math.min(asrielinter.s_grillbys_shelf++, 2)]
               : SAVE.data.n.plot === 72
               ? [ '<32>{#p/basic}* A few of the beverages on this shelf have been used up.' ]
               : [
                    '<32>{#p/basic}* A shelf full of various party beverages and sickly liquids.',
                    '<32>{#p/basic}* And a single bottle of water labelled "fire hazard."'
                 ],
         s_grillbys_sidestool: () =>
            SAVE.data.b.svr
               ? [ "<25>{#p/asriel1}{#f/20}* That one's definitely too tall for you." ]
               : world.darker
               ? [ '<32>{#p/basic}* Just another barstool.' ]
               : [ '<32>{#p/basic}* This barstool is labelled "PAPYRUS."' ],
         s_grillbys_smolstool: () =>
            SAVE.data.b.svr
               ? [ '<25>{#p/asriel1}{#f/19}* This one seems like just your size.' ]
               : world.darker
               ? [ '<32>{#p/basic}* Just another barstool.' ]
               : SAVE.data.b.oops
               ? [ '<32>{#p/basic}* There is nothing special about this barstool.' ]
               : [ '<32>{#p/basic}* Something tells me this barstool is very special.' ],
         s_helipad: () =>
            SAVE.data.b.svr
               ? [
                    [
                       '<25>{#p/asriel1}{#f/21}* Ah yes...\n* The hovercar terminal.',
                       "<25>{#f/4}* It's derelict now, but once upon a time...",
                       '<25>{#f/3}* An operator would stand here and direct traffic through the area.'
                    ],
                    [
                       '<25>{#p/asriel1}{#f/3}* This terminal was used mainly when Starton was being built.',
                       '<25>{#f/4}* For the first new area built here, it seemed a wise precaution.',
                       "<25>{#f/13}* Ships carrying supplies from the factory's replicators...",
                       '<25>{#f/13}* Often had trouble landing safely without it.'
                    ],
                    [
                       "<25>{#p/asriel1}{#f/17}* Eventually, terminals like this weren't needed anymore.",
                       '<25>{#f/20}* The pilots of those supply ships got better at landing unaided.',
                       '<25>{#f/13}* And so, the terminal was forgotten...'
                    ],
                    [ '<25>{#p/asriel1}{#f/16}* Just one of many objects whose story is mostly forgotten.' ]
                 ][Math.min(asrielinter.s_helipad++, 3)]
               : [ '<32>{#p/basic}* A derelict terminal once used to direct hovercar landings.' ],
         s_jenga_sign: () =>
            SAVE.data.b.svr
               ? [ "<32>{#p/human}* (The sign describes the broken state of the display tower's quantum randomizer.)" ]
               : [ '<32>{#p/basic}* "ATTENTION: The quantum randomizer in this display tower is still broken."' ],
         s_library_window: () => [
            '<32>{#p/human}* (You put your hands on window.)',
            ...(SAVE.data.b.svr ? [] : [ '<32>{#p/basic}* Smells like paint.' ])
         ],
         s_librarby_blueBooks: pager.create(
            1,
            () =>
               SAVE.data.b.svr
                  ? [
                       '<32>{#p/human}* (The books on this bookshelf consist of comparisons between the past the and present.)'
                    ]
                  : [
                       '<32>{#p/basic}* This bookshelf is labelled "Then and Now."',
                       '<32>{#p/human}* (You pick out a book...)',
                       '<32>{#p/basic}* "Before the war, monsters were taught magic on a regular, day-to-day basis."',
                       '<32>* "When most of our race died, so too did many of our teachers."',
                       '<32>* "To account for this, monsters started learning in larger groups."',
                       '<32>* "These new teaching methods were focused on skills to help us survive on the outpost."',
                       '<32>* "By now, the population woes play a much smaller factor in our lives."',
                       '<32>* "Though, we still stick to the new methods, because..."',
                       '<32>* "... we\'re honestly just too lazy to change back."',
                       '<32>{#p/human}* (You put the book back on the shelf.)'
                    ],
            () =>
               SAVE.data.b.svr
                  ? [
                       '<32>{#p/human}* (The books on this bookshelf consist of comparisons between the past the and present.)'
                    ]
                  : [
                       '<32>{#p/basic}* This bookshelf is labelled "Then and Now."',
                       '<32>{#p/human}* (You pick out a book...)',
                       '<32>{#p/basic}* "Once upon a time, monsters used a wide variety of currencies."',
                       '<32>* "JEWEL and KRIOTAAN were the most prominent... but only on the home planet."',
                       '<32>* "When it came to interactions with humans, the only currency used was GOLD."',
                       '<32>* "Our abundant supply of the shiny mineral granted us many favors..."',
                       '<32>* "But as a result, the other curriences lost their value in short time."',
                       '<32>* "Now, we just use gold for everything!"\n* "It\'s the monster way."',
                       '<32>{#p/human}* (You put the book back on the shelf.)'
                    ],
            () =>
               SAVE.data.b.svr
                  ? [
                       '<32>{#p/human}* (The books on this bookshelf consist of comparisons between the past the and present.)'
                    ]
                  : [
                       '<32>{#p/basic}* This bookshelf is labelled "Then and Now."',
                       '<32>{#p/human}* (You pick out a book...)',
                       '<32>{#p/basic}* "Since Erogot\'s fall, our king has done his best to uphold our homeworld\'s legacy."',
                       '<32>* "Even if he lost the damn thing in the process..."',
                       '<32>* "We\'ve all come to accept what happened, and we don\'t really blame him anymore."',
                       '<32>* "The past two centuries have been tough, but we grow ever-closer to freedom."',
                       '<32>* "The angel is coming..."',
                       '<32>* "... for all we know, it might already be here, having read this very book."',
                       '<32>{#p/human}* (You put the book back on the shelf.)'
                    ]
         ),
         s_librarby_desk: () =>
            SAVE.data.b.svr
               ? [ '<32>{#p/human}* (You observe the dust gathering on this check-out book.)' ]
               : [ "<32>{#p/basic}* The librarby's check-out book." ],
         s_librarby_greenBooks: pager.create(
            1,
            () =>
               SAVE.data.b.svr
                  ? [
                       '<32>{#p/human}* (The books on this bookshelf consist of information, some of which is actually useful.)'
                    ]
                  : [
                       '<32>{#p/basic}* It\'s a bookshelf labelled "Information."',
                       '<32>{#p/human}* (You pick out a book...)',
                       '<32>{#p/basic}* "The OuterNet is a joint effort by the king and the royal scientist."',
                       '<32>* "... well, mostly the royal scientist, since the king just wrote the welcome message."',
                       '<32>* "Still, the website serves as a \'virtual town square\' for outpost residents."',
                       '<32>* "All you have to do to create an account is..."',
                       '<32>* "Um... well..."',
                       "<32>* \"The instructions weren't exactly 'clear...'\"",
                       '<32>{#p/human}* (You put the book back on the shelf.)'
                    ],
            () =>
               SAVE.data.b.svr
                  ? [
                       '<32>{#p/human}* (The books on this bookshelf consist of information, some of which is actually useful.)'
                    ]
                  : [
                       '<32>{#p/basic}* It\'s a bookshelf labelled "Information."',
                       '<32>{#p/human}* (You pick out a book...)',
                       '<32>{#p/basic}* "If you wanna get around on the outpost, the traveler is your best bet."',
                       '<32>* "They can take you anywhere you wanna go..."',
                       '<32>* "... given they\'re available at your nearest taxi stop."',
                       '<32>* "Not gonna lie, the stuff they say seems kinda random."',
                       '<33>* "What\'s "dog justice" anyway?"',
                       '<32>{#p/human}* (You put the book back on the shelf.)'
                    ],
            () =>
               SAVE.data.b.svr
                  ? [
                       '<32>{#p/human}* (The books on this bookshelf consist of information, some of which is actually useful.)'
                    ]
                  : [
                       '<32>{#p/basic}* It\'s a bookshelf labelled "Information."',
                       '<32>{#p/human}* (You pick out a book...)',
                       '<32>{#p/basic}* "Monsters are free to traverse any area of the outpost."',
                       '<32>* "That is, any area short of the last corridor at the top of the Citadel."',
                       '<32>* "Beyond this, only the royal scientist is allowed through..."',
                       '<32>* "... we still don\'t know why."',
                       '<32>{#p/human}* (You put the book back on the shelf.)'
                    ]
         ),
         s_librarby_ladder: () =>
            SAVE.data.b.svr
               ? [ '<32>{#p/human}* (It appears the access hatch above this ladder was sealed shut.)' ]
               : [ "<32>{#p/basic}* A random ladder.\n* That's all there is to it." ],
         s_librarby_pinkBooks: pager.create(
            1,
            () =>
               SAVE.data.b.svr
                  ? [
                       '<32>{#p/human}* (The books on this bookshelf consist of various facts about the biology of monsters.)'
                    ]
                  : [
                       '<32>{#p/basic}* It\'s a bookshelf labelled "Monster Biology."',
                       '<32>{#p/human}* (You pick out a book...)',
                       '<32>{#p/basic}* "Monster funerals, technically speaking, are cool as heck."',
                       '<32>* "When monsters get old and kick the bucket, they turn into dust."',
                       '<32>* "At funerals, we take that dust and spread it on that person\'s favorite thing."',
                       '<32>* "Then their essence will live on in that thing..."',
                       '<32>* "Uhhh, am I at the page minimum yet?"\n* "I\'m tired of writing this."',
                       '<32>{#p/human}* (You put the book back on the shelf.)'
                    ],
            () =>
               SAVE.data.b.svr
                  ? [
                       '<32>{#p/human}* (The books on this bookshelf consist of various facts about the biology of monsters.)'
                    ]
                  : [
                       '<32>{#p/basic}* It\'s a bookshelf labelled "Monster Biology."',
                       '<32>{#p/human}* (You pick out a book...)',
                       '<32>{#p/basic}* "Because they are made of magic, monsters\' bodies are attuned to their SOUL."',
                       '<32>* "If a monster intends to cause harm, and truly believes in themselves..."',
                       '<32>* "Such a monster could become unusually powerful."',
                       '<32>* "But most of our kind do not believe in fighting."\n* "Not whole-heartedly."',
                       '<32>* "If an enemy were to attack us again, with only an outpost to defend ourselves..."',
                       '<32>* ...',
                       '<32>{#p/human}* (You feel it would be best to stop here.)'
                    ],
            () =>
               SAVE.data.b.svr
                  ? [
                       '<32>{#p/human}* (The books on this bookshelf consist of various facts about the biology of monsters.)'
                    ]
                  : [
                       '<32>{#p/basic}* It\'s a bookshelf labelled "Monster Biology."',
                       '<32>{#p/human}* (You pick out a book...)',
                       '<32>{#p/basic}* "While monsters are mostly made of magic, humans are mostly made of water."',
                       '<32>* "With their physical forms, humans are far stronger than us."',
                       '<32>* "But, they will never know the joy of expressing themselves through magic."',
                       '<32>* "They\'ll never get a bullet- pattern birthday card..."',
                       '<32>* "Or play hide-and-go seek with invisibility and clairvoyance..."',
                       '<32>* "Or even create wild light shows with electricity magic!"',
                       '<32>* "How unfortunate."',
                       '<32>{#p/human}* (You put the book back on the shelf.)'
                    ]
         ),
         s_librarby_purpleBooks: pager.create(
            1,
            () =>
               SAVE.data.b.svr
                  ? [ '<32>{#p/human}* (The books on this bookshelf document the history of the monster homeworld.)' ]
                  : [
                       '<32>{#p/basic}* This bookshelf is labelled "Homeworld History."',
                       '<32>{#p/human}* (You pick out a book...)',
                       '<32>{#p/basic}* "Each day on our homeworld was a sight to behold."',
                       '<32>* "To start the morning, bright spires of magical energy pierced the skies."',
                       '<32>* "Throughout the day, these magical formations began to resonate together..."',
                       '<32>* "All leading to a dazzling release that sent the planet into darkness."',
                       '<32>* "At nightfall, the process of magical coalescense would begin anew."',
                       '<32>* "Bolts of magical energy previously released struck back down from above."',
                       '<32>* "Once enough energy hit the ground, the spires would rise again..."',
                       '<32>* "Such was the cycle that once governed our days and nights."',
                       '<32>{#p/human}* (You put the book back on the shelf.)'
                    ],
            () =>
               SAVE.data.b.svr
                  ? [ '<32>{#p/human}* (The books on this bookshelf document the history of the monster homeworld.)' ]
                  : [
                       '<32>{#p/basic}* This bookshelf is labelled "Homeworld History."',
                       '<32>{#p/human}* (You pick out a book...)',
                       '<32>{#p/basic}* "Monsters didn\'t always have such an organized structure, you know?"',
                       '<32>* "Long, long ago... thousands of years ago, in fact..."',
                       '<32>* "Our race frolicked wild and free, with no sense of order or direction."',
                       '<32>* "Heck, we didn\'t even wear clothing back then!"',
                       '<32>* "But as timed passed, we yearned for more."\n* "We wanted to evolve..."',
                       '<32>* "During the great renaissance, even the very essence of our magic came into focus."',
                       '<32>* "These developments begat our society, and eventually, our way of life."',
                       '<32>* "... I still can\'t believe we just ran around naked for two thousand years."',
                       '<32>* "Where\'s the class in that?"\n* "Where\'s the fashion?"\n* "Unbelievable."',
                       '<32>{#p/human}* (You put the book back on the shelf.)'
                    ],
            () =>
               SAVE.data.b.svr
                  ? [ '<32>{#p/human}* (The books on this bookshelf document the history of the monster homeworld.)' ]
                  : [
                       '<32>{#p/basic}* This bookshelf is labelled "Homeworld History."',
                       '<32>{#p/human}* (You pick out a book...)',
                       '<32>{#p/basic}* "When monsterkind first met with humanity, Erogot was the king at the time."',
                       '<32>* "Through his wisdom and guidance, monsters and humans lived in peace and harmony."',
                       '<32>* "But when Erogot died of old age... things would never be the same."',
                       '<32>* "He was a skilled leader, and one his son could never replace."',
                       '<32>* "The war that followed was... sadly inevitable."',
                       '<32>{#p/human}* (You put the book back on the shelf.)'
                    ]
         ),
         s_librarby_yellowBooks: pager.create(
            1,
            () =>
               SAVE.data.b.svr
                  ? [ '<32>{#p/human}* (The books on this bookshelf discuss various technologies devised by monsters.)' ]
                  : [
                       '<32>{#p/basic}* This bookshelf is labelled "Monster Technology."',
                       '<32>{#p/human}* (You pick out a book...)',
                       '<32>{#p/basic}* "Gerson says the outpost used to just be a small space station."',
                       '<32>* "Then, one day, someone looked at the force field and thought..."',
                       "<32>* \"'Couldn't WE harvest some of that energy?'\"",
                       '<32>* "A simple but brilliant idea!"',
                       '<32>* "As a result, the CORE was built, and with it came a stable power supply."',
                       '<32>* "We\'re still using it to this very day!"',
                       '<32>{#p/human}* (You put the book back on the shelf.)'
                    ],
            () =>
               SAVE.data.b.svr
                  ? [ '<32>{#p/human}* (The books on this bookshelf discuss various technologies devised by monsters.)' ]
                  : [
                       '<32>{#p/basic}* This bookshelf is labelled "Monster Technology."',
                       '<32>{#p/human}* (You pick out a book...)',
                       '<32>{#p/basic}* "Ah, the wonders of artificial intelligence..."',
                       '<32>* "... or not."',
                       '<32>* "After the builder bot tragedy of K-541.12, we abandoned the idea of a sentient AI."',
                       '<32>* "In fact, the king barred anyone from creating new AI programs altogether."',
                       '<32>* "These days, there\'s only one monster who\'d have the skills and resources to do so..."',
                       '<32>{#p/human}* (You put the book back on the shelf.)'
                    ],
            () =>
               SAVE.data.b.svr
                  ? [ '<32>{#p/human}* (The books on this bookshelf discuss various technologies devised by monsters.)' ]
                  : [
                       '<32>{#p/basic}* This bookshelf is labelled "Monster Technology."',
                       '<32>{#p/human}* (You pick out a book...)',
                       '<32>{#p/basic}* "Something people forget these days is that there\'s little to no gravity in space."',
                       '<32>* "One of the earliest advancements made by monsters, even before the war..."',
                       '<32>* "Was our state-of-the-art gravity manipulation tech."',
                       '<32>* "Even now, it\'s built into all areas of the outpost, both big and small..."',
                       '<32>* "You, reading this book, are probably standing on it right now."',
                       '<32>{#p/human}* (You put the book back on the shelf.)'
                    ]
         ),
         s_math_sign: () =>
            SAVE.data.b.svr
               ? [ "<32>{#p/human}* (You can't help but be confused at the contents of this sign.)" ]
               : [ '<32>{#p/basic}* "Warning: Dog Justice"' ],
         s_pacing_sign: () =>
            SAVE.data.b.svr
               ? [ "<32>{#p/human}* (You can't help but smile at the contents of this sign.)" ]
               : [ '<32>{#p/basic}* "AWARE OF DOG"\n* "... pleas pet dog..."' ],
         s_phonecard: () =>
            SAVE.data.b.svr
               ? [
                    '<32>{#p/human}* (The note requests that you call a certain phone number.)',
                    '<32>{#s/phone}{#p/event}* Dialing...',
                    '<32>{#p/human}* (No connection.)'
                 ]
               : SAVE.flag.n.pacifist_marker_bully > 3
               ? [
                    "<32>{#p/basic}* It's a note.",
                    '<32>* "Call me!"\n* "Here\'s my number!"',
                    '<32>{#s/phone}{#p/event}* Dialing...',
                    '<32>{#p/basic}* The call went straight to voice-mail.',
                    '<32>{#p/basic}* "Hello, lonely caller!"\n* "Would you like to escape the outpost with me?"',
                    '<32>{#s/equip}{#p/event}* Click...'
                 ]
               : SAVE.data.n.plot === 72
               ? [
                    "<32>{#p/basic}* It's a note.",
                    '<32>* "Call me!"\n* "Here\'s my number!"',
                    '<32>{#s/phone}{#p/event}* Dialing...',
                    '<32>{#p/human}* (No connection.)'
                 ]
               : [
                    "<32>{#p/basic}* It's a note.",
                    '<32>* "Call me!"\n* "Here\'s my number!"',
                    '<32>{#s/phone}{#p/event}* Dialing...',
                    '<32>{#p/basic}* The call went straight to voice-mail.',
                    '<32>{#p/basic}* "Hello, lonely caller!"\n* "I\'m so sorry I couldn\'t be here to greet you~"',
                    '<32>{#s/equip}{#p/event}* Click...',
                    ...(world.goatbro && SAVE.flag.n.ga_asrielVoicemail++ < 1
                       ? [ '<25>{#p/asriel2}{#f/10}* ... weird.' ]
                       : [])
                 ],
         s_sr_cottonball: () =>
            SAVE.data.b.svr
               ? [ '<32>{#p/human}* (Something about these cotton balls seems out of character.)' ]
               : [
                    '<32>{#p/basic}* A series of neatly-organized cotton balls.',
                    ...(SAVE.data.b.s_state_inverter || world.darker ? [] : [ '<32>{#p/basic}* How suspicious.' ])
                 ],
         s_sr_treadmill: () =>
            SAVE.data.b.svr
               ? [ "<32>{#p/human}* (You'd use the treadmill if it wasn't running so slowly.)" ]
               : [ "<32>{#p/basic}* It's a treadmill.", "<32>{#p/basic}* It's at its highest setting." ],
         s_pr_papbed: pager.create(
            0,
            () =>
               SAVE.data.b.svr
                  ? [ '<32>{#p/human}* (You appreciate the bed for being very awesome in general.)' ]
                  : [
                       '<32>{#p/basic}* A neatly-made hypercar bed.',
                       ...(roomready()
                          ? [
                               "<18>{#p/papyrus}THAT'S MY BED!",
                               '<18>{#f/4}IF I EVER GET TO EXPLORE THE STARS...',
                               "<18>{#f/0}I'D LIKE TO CRUISE DOWN A LONG INTER- STELLAR HIGHWAY.",
                               '<18>STATIC IN MY HAIR, STARLIGHT ON MY SKIN...',
                               "<18>{#f/4}OF COURSE, THAT'S JUST A DREAM.",
                               '<18>{#f/0}SO INSTEAD I CRUISE WHILE I SNOOZE.'
                            ]
                          : [])
                    ],
            () =>
               SAVE.data.b.svr
                  ? [ '<32>{#p/human}* (You thank the bed for being very awesome in general.)' ]
                  : [ '<32>{#p/basic}* A neatly-made hypercar bed.' ]
         ),
         s_pr_papbones: pager.create(
            0,
            () =>
               SAVE.data.b.svr
                  ? [
                       "<32>{#p/basic}* (You reach into the box, but the bones don't deal any damage.)",
                       ...[
                          [ '<25>{#p/asriel1}{#f/21}* Careful, Frisk!\n* Those bones might still be active...' ],
                          [ '<25>{#p/asriel1}{#f/16}* ... or maybe not.' ],
                          [ "<25>{#p/asriel1}{#f/13}* I wonder if you're the kind of person who stands on hot coals." ],
                          [ '<25>{#p/asriel1}{#f/8}* Boney hot coals.' ]
                       ][Math.min(asrielinter.s_pr_papbones++, 3)]
                    ]
                  : [
                       '<32>{#p/basic}* A box of bones.',
                       ...(roomready()
                          ? [
                               '<18>{#p/papyrus}HEY, THOSE ARE ALL THE ATTACKS I USED ON YOU.',
                               '<18>GREAT MEMORIES, HUH?',
                               '<18>SEEMS LIKE IT WAS ONLY YESTERDAY...',
                               '<18>{#f/4}EVEN THOUGH IT BASICALLY JUST HAPPENED.'
                            ]
                          : [])
                    ],
            () =>
               SAVE.data.b.svr
                  ? [
                       "<32>{#p/basic}* (You reach into the box, but the bones don't deal any damage.)",
                       ...[
                          [],
                          [ '<25>{#p/asriel1}{#f/16}* ... or maybe not.' ],
                          [ "<25>{#p/asriel1}{#f/13}* I wonder if you're the kind of person who stands on hot coals." ],
                          [ '<25>{#p/asriel1}{#f/8}* Boney hot coals.' ]
                       ][Math.min(asrielinter.s_pr_papbones++, 3)]
                    ]
                  : [ '<32>{#p/basic}* A box of bones.' ]
         ),
         s_pr_papcloset: pager.create(
            0,
            () => [
               '<32>{#p/human}* (You look inside the closet...)',
               ...(SAVE.data.b.svr
                  ? [ "<32>{#p/human}* (It's hard for you to see in such a dark place.)" ]
                  : SAVE.flag.n.pacifist_marker_bully < 4
                  ? [ '<32>{#p/basic}* The clothes inside have been frantically shifted around.' ]
                  : [
                       '<32>{#p/basic}* Clothes are hung up neatly inside.',
                       SAVE.data.n.plot === 72
                          ? '<32>* One of the clothes has "Free Bones" written on it.'
                          : '<32>* Many of the clothes have handwritten text drawn on them.'
                    ]),
               ...(roomready()
                  ? [
                       "<18>{#p/papyrus}DON'T WORRY, THE CLOSET IS SKELETON-FREE.",
                       "<18>{#f/4}UNLESS I'M CHANGING, OF COURSE."
                    ]
                  : [])
            ],
            () => [
               '<32>{#p/human}* (You look inside the closet...)',
               ...(SAVE.data.b.svr
                  ? [ "<32>{#p/human}* (It's hard for you to see in such a dark place.)" ]
                  : SAVE.flag.n.pacifist_marker_bully < 4
                  ? [ '<32>{#p/basic}* The clothes inside have been frantically shifted around.' ]
                  : [
                       '<32>{#p/basic}* Clothes are hung up neatly inside.',
                       SAVE.data.n.plot === 72
                          ? '<32>* One of the clothes has "Free Bones" written on it.'
                          : '<32>* Many of the clothes have handwritten text drawn on them.'
                    ])
            ]
         ),
         s_pr_papposter: pager.create(
            0,
            () =>
               SAVE.data.b.svr
                  ? [
                       [
                          "<25>{#p/asriel1}{#f/17}* Ah.\n* That's Papyrus's special attack...",
                          '<25>{#f/13}* In previous timelines, this attack right here...',
                          '<25>{#f/15}* Caused me my fair share of defeats.',
                          "<25>{#f/16}* ... don't ask how or why I was fighting Papyrus."
                       ],
                       [ "<25>{#p/asriel1}{#f/10}* What?\n* It wasn't anything bad.\n* Not that time, anyway." ],
                       [
                          '<25>{#p/asriel1}{#f/16}* Okay, okay.\n* I might have disguised myself as a human.',
                          '<25>{#f/15}* ... yeah.\n* It looked as bad as you think it would.',
                          '<25>{#f/5}* But hey, I got a chance to battle the great Papyrus!'
                       ],
                       [ '<25>{#p/asriel1}{#f/20}* Totally worth it.' ]
                    ][Math.min(asrielinter.s_pr_papposter++, 3)]
                  : [
                       "<32>{#p/basic}* It's a flag with a menacing skull painted on it.",
                       ...(roomready()
                          ? [
                               "<18>{#p/papyrus}ISN'T THAT POSTER NEATO?",
                               '<18>UNDYNE FOUND IT ON A TRASH RUN.',
                               '<18>{#f/4}IT HAD A SKULL AND CROSSBONES ON IT AT FIRST...',
                               '<18>{#f/9}BUT I THOUGHT OF SOMETHING BETTER!'
                            ]
                          : [])
                    ],
            () =>
               SAVE.data.b.svr
                  ? [
                       [],
                       [ "<25>{#p/asriel1}{#f/10}* What?\n* It wasn't anything bad.\n* Not that time, anyway." ],
                       [
                          '<25>{#p/asriel1}{#f/16}* Okay, okay.\n* I might have disguised myself as a human.',
                          '<25>{#f/15}* ... yeah.\n* It looked as bad as you think it would.',
                          '<25>{#f/5}* But hey, I got a chance to battle the great Papyrus!'
                       ],
                       [ '<25>{#p/asriel1}{#f/20}* Totally worth it.' ]
                    ][Math.min(asrielinter.s_pr_papposter++, 3)]
                  : [ "<32>{#p/basic}* It's a flag with a menacing skull painted on it." ]
         ),
         s_pr_paptable: pager.create(
            0,
            () =>
               SAVE.data.b.svr
                  ? [ '<32>{#p/human}* (You marvel at the detail of these action figures...)' ]
                  : [
                       '<32>{#p/basic}* A set of action figures with tacky, matching uniforms.',
                       ...(roomready()
                          ? [
                               '<18>{#p/papyrus}AH, YES, ACTION FIGURES.',
                               '<18>A GREAT REFERENCE FOR THEORETICAL BATTLE SCENARIOS.',
                               '<18>{#f/4}BUT HOW DO I HAVE SO MANY?',
                               '<18>{#f/6}WELL, UMM...\nTHE KING GAVE THEM TO ME AS A GIFT...',
                               '<18>{#f/5}A GIFT I TRULY WISH I COULD REPAY HIM FOR.'
                            ]
                          : [])
                    ],
            () =>
               SAVE.data.b.svr
                  ? [ '<32>{#p/human}* (Upon reflection, you realize who created these.)' ]
                  : [ '<32>{#p/basic}* A set of action figures with tacky, matching uniforms.' ]
         ),
         s_puzzle1_sign: () =>
            SAVE.data.b.svr
               ? [ '<32>{#p/human}* (The sign describes the basics of solving the puzzle.)' ]
               : [ '<32>{#p/basic}* "Trigger each circuit in order."' ],
         s_puzzle2_sign: () =>
            SAVE.data.b.svr
               ? [ '<32>{#p/human}* (The sign defines a starting point for solving the puzzle.)' ]
               : [ '<32>{#p/basic}* "Start at the left."' ],
         s_puzzle3_note: () =>
            SAVE.data.b.svr
               ? world.postnoot && world.nootflags.has('s_puzzle3') // NO-TRANSLATE
                  ? [
                       "<32>{#p/human}* (The note's brags about having solved a puzzle in advance.)",
                       ...[
                          [ '<25>{#p/asriel1}{#f/20}* Ha, uh, I wonder who wrote that note, huh?\n* Yeah...' ],
                          [ "<25>{#p/asriel1}{#f/20}* Couldn't be me!" ],
                          [ '<25>{#p/asriel1}{#f/13}* ...' ]
                       ][Math.min(asrielinter.s_puzzle3_note++, 2)]
                    ]
                  : [ '<32>{#p/human}* (The note remarks about how the puzzle solution was not modified as intended.)' ]
               : world.postnoot && world.nootflags.has('s_puzzle3') // NO-TRANSLATE
               ? [
                    [
                       "<32>{#p/basic}* It's a note from someone who didn't say who they were...",
                       '<32>* "Puzzles like these can be so annoying, can\'t they?"',
                       '<32>* "Thankfully, I\'ve taken care of it for you."',
                       '<32>* "Isn\'t that nice?"\n* "You should be thankful!"',
                       '<32>µ - "Sincerely,"\nµ Your Best Friend'
                    ],
                    [
                       "<32>{#p/basic}* It's a note from someone who didn't say who they were...",
                       '<32>* "Don\'t worry."\n* "No matter how many times you do this over..."',
                       '<32>* "I\'ll always be here to make sure you never have to deal with a puzzle again."',
                       '<32>* "It\'s the least I can do."',
                       '<32>µ - "Forevermore,"\nµ Your Best Friend'
                    ]
                 ][Math.min(SAVE.flag.n.neutral_twinkly_loop1, 1)]
               : !world.genocide && world.edgy
               ? [
                    "<32>{#p/basic}* It's a note from Sans...",
                    '<32>{#p/without}* "welp."\n* "seems my bro found out about you after all."',
                    '<32>* "i told him everything you\'ve done up to now, and he\'s agreed to stay put."',
                    '<32>* "it\'s a shame, isn\'t it?"',
                    '<32>* "papyrus shouldn\'t have to deal with this kinda stuff."',
                    '<32>* "but i guess that\'s the galaxy we live in, now."',
                    '<32>* "well.\n* good luck with the puzzle."',
                    '<32>* "i\'m sure it\'ll take you no time at all."',
                    '<32>µ - "with all due respect,"\nµ sans'
                 ]
               : [
                    "<32>{#p/basic}* It's a note from Papyrus...",
                    '<23>{#p/papyrus}{#f/30}"HUMAN!! THIS PUZZLE IS NOT AS IT SEEMS."',
                    '<23>"WHILE I WAS WAITING FOR YOU, I TRIED TO MODIFY IT..."',
                    '<23>"TO MAKE THE PATTERN RESEMBLE MY FACE, OF COURSE!"',
                    '<23>"BUT SOMETHING WENT WRONG..."',
                    '<23>"ALL I COULD CREATE WAS A LOUSY ARROW SHAPE!!!"',
                    '<23>"(IN OTHER WORDS, YOU WILL HAVE TO SOLVE IT YOURSELF.)"',
                    '<23>"BUT DON\'T WORRY!"\n"I KNOW YOU CAN DO IT, HUMAN!"',
                    '<23>µ - "WITH THE UTMOST FAITH,"\nµ PAPYRUS'
                 ],
         s_redbook: () =>
            SAVE.data.b.svr
               ? [ '<32>{#p/human}* (The uniquely-colored book describes a secret weapon lost to time.)' ]
               : [
                    "<32>{#p/basic}* It's a bookshelf.",
                    '<32>{#p/human}* (You pick out the red book...)',
                    '<32>{#p/basic}* "At the height of the war, a secret division of the royal forces was established."',
                    '<32>{#p/basic}* "The so-called \'special weapons\' division, focused on experimental research."',
                    '<32>{#p/basic}* "The division would develop a variety of artifacts, but all proved useless in battle..."',
                    '<32>{#p/basic}* "That is, all but one."\n* "An enchanted tome known only as \'The Epiphany.\'"',
                    '<32>{#p/basic}* "Its power was so great, it was deemed too dangerous, even for use against humans."',
                    '<32>{#p/basic}* "The tome was locked from the inside, and stowed away in short order."',
                    '<32>{#p/basic}* "Some say the tome was taken aboard the transport ship used to reach the outpost."',
                    '<32>{#p/basic}* "If so, where is it?"\n* "And how would one go about unlocking it?"',
                    '<32>{#p/basic}* "Perhaps these questions are better left unanswered."',
                    '<32>{#p/human}* (You put the book back on the shelf.)'
                 ],
         s_sansbox: () =>
            SAVE.data.b.svr
               ? [ "<32>{#p/human}* (Due to how full it is, you can't seem to see inside the mailbox.)" ]
               : SAVE.data.n.plot === 72 && SAVE.flag.n.pacifist_marker_bully < 4
               ? [
                    '<32>{#p/basic}* Somehow, the mailbox has been stuffed with even more unread junk mail than before.',
                    ...(SAVE.data.b.oops ? [] : [ '<32>{#p/basic}* ... color me surprised.' ])
                 ]
               : [
                    "<32>{#p/basic}* It's a mailbox overflowing with unread junk mail.",
                    ...(SAVE.data.b.oops ? [] : [ '<32>{#p/basic}* ... he never reads the mail anyway.' ])
                 ],
         s_sheddoor: () =>
            SAVE.data.b.svr
               ? [ "<32>{#p/human}* (You can't seem to find a way in.)" ]
               : [ "<32>{#p/basic}* It's locked from the inside." ],
         s_slew: [ "<32>{#p/basic}* It's dog food.\n* The pieces look like bones." ],
         s_spagnote: () =>
            SAVE.data.b.svr
               ? [ '<32>{#p/human}* (The note declares the brilliance of enticing you with a place of spaghetti.)' ]
               : !world.genocide && world.edgy
               ? [
                    "<32>{#p/basic}* It's a note from Sans...",
                    '<32>{#p/without}* "whoops."\n* "seems like you\'ve found my bro\'s spaghetti."',
                    '<32>* "looks tasty, right?"',
                    '<32>* "well."\n* "it turns out that\'s kind of the point."',
                    '<32>* "i\'d be careful with it if i were you..."',
                    '<32>* "\'cause the more time you spend eating this..."',
                    '<32>* "the more time i have to prepare for the next puzzle."',
                    '<23>µ - "joke\'s on you,"\nµ sans'
                 ]
               : [
                    "<32>{#p/basic}* It's a note from Papyrus...",
                    '<23>{#p/papyrus}{#f/30}"HUMAN!!"\n"PLEASE ENJOY THIS SPAGHETTI."',
                    '<23>("LITTLE DO YOU KNOW, THIS SPAGHETTI IS A TRAP...")',
                    '<23>("DESIGNED TO ENTICE YOU!!!")',
                    '<23>("YOU\'LL BE SO BUSY EATING IT...")',
                    '<23>("THAT YOU WON\'T REALIZE THAT YOU AREN\'T PROGRESSING!!")',
                    '<23>("THOROUGHLY JAPED AGAIN BY THE GREAT PAPYRUS!!!")',
                    '<23>µ - "NYEH-HEH-HEH,"\nµ PAPYRUS'
                 ],
         s_town_camera1: () =>
            SAVE.data.b.svr
               ? []
               : SAVE.flag.n.pacifist_marker_bully > 3
               ? [
                    "<32>{#p/basic}* There's no longer anyone to spy on you through the camera hidden in these crystal pods."
                 ]
               : SAVE.data.n.plot === 72
               ? [ "<32>{#p/basic}* There's no longer a camera hidden in these crystal pods." ]
               : [ "<32>{#p/basic}* There's a camera hidden in these crystal pods." ],
         s_trapnote: () =>
            [
               [
                  "<32>{#p/basic}* It's a note from Papyrus...",
                  '<23>{#p/papyrus}{#f/30}"SORRY, I HAVE TO LOCK YOU IN THE GUEST ROOM UNTIL UNDYNE ARRIVES."',
                  '<23>"FEEL FREE TO MAKE YOURSELF AT HOME!!!"',
                  '<22>"REFRESHMENTS AND ACCOMODATIONS HAVE BEEN PROVIDED."',
                  '<23>µ - "NYEHFULLY YOURS,"\nµ PAPYRUS'
               ],
               [
                  "<32>{#p/basic}* It's a note from Papyrus...",
                  '<23>{#p/papyrus}{#f/30}"PLEASE ASK BEFORE YOU ESCAPE!!!"',
                  '<23>"WHEN YOU WENT MISSING I GOT WORRIED SICK!!!"',
                  '<23>µ - "SLIGHTLY BONETROUSLED,"\nµ PAPYRUS'
               ],
               [
                  "<32>{#p/basic}* It's a note from Papyrus...",
                  '<23>{#p/papyrus}{#f/30}"IF YOU\'RE ONLY LOOKING FOR A PLACE TO STAY..."',
                  '<23>"JUST ASK!!! YOU DON\'T NEED TO FIGHT ME!!!"',
                  '<23>µ - "YOUR HOST,"\nµ PAPYRUS'
               ]
            ][Math.min(SAVE.data.n.state_papyrus_capture - 1, 2)],
         s_tree: pager.create(
            0,
            () =>
               SAVE.data.b.svr
                  ? [
                       [
                          '<25>{#p/asriel1}{#f/20}* $(name) always liked to call this ant colony a "civilization."',
                          '<25>{#f/17}* I guess it was their way of trying to sound smart.',
                          '<25>{#f/13}* I tried to sound smart too, but Mom and Dad saw right through me.',
                          '<25>{#f/13}* $(name) always was a better liar than me...'
                       ],
                       [
                          '<26>{#p/asriel1}{#f/13}* After $(name) arrived, they tried to convince us they were a diplomat.',
                          "<25>{#f/17}* Thankfully, even they couldn't lie THAT well.",
                          '<25>{#f/15}* Imagine how much worse things could have been had they been believed...'
                       ],
                       [
                          "<26>{#p/asriel1}{#f/17}* I'm glad you're not a liar, Frisk.",
                          "<25>{#f/20}* I've had enough difficulty in my life as it is.",
                          '<25>{#f/13}* ... eh, sorry.\n* This topic just came out of left field.',
                          '<26>{#f/13}* I apologize for that.'
                       ],
                       [ '<26>{#p/asriel1}{#f/17}* Life sure does like to throw curveballs at you sometimes...' ]
                    ][Math.min(asrielinter.s_tree++, 3)]
                  : world.darker
                  ? [
                       '<32>{#p/basic}* This innocent tree-like structure is actually the home of a civilization.',
                       '<32>* ... at least it was, until they were all scared off and ran away.'
                    ]
                  : SAVE.data.n.plot === 72
                  ? [
                       '<32>{#p/basic}* Soon enough, this civilization will need to migrate once again.',
                       '<32>* Where shall they go?\n* Sooner or later, we will know.'
                    ]
                  : [
                       '<32>{#p/basic}* This innocent tree-like structure is actually the home of a civilization.',
                       '<32>* On the brink of extinction, they migrated here to save their species.'
                    ],
            () =>
               SAVE.data.b.svr
                  ? [
                       [],
                       [
                          '<26>{#p/asriel1}{#f/13}* After $(name) arrived, they tried to convince us they were a diplomat.',
                          "<25>{#f/17}* Thankfully, even they couldn't lie THAT well.",
                          '<25>{#f/15}* Imagine how much worse things could have been had they been believed...'
                       ],
                       [
                          "<26>{#p/asriel1}{#f/17}* I'm glad you're not a liar, Frisk.",
                          "<25>{#f/20}* I've had enough difficulty in my life as it is.",
                          '<25>{#f/13}* ... eh, sorry.\n* This topic just came out of left field.',
                          '<26>{#f/13}* I apologize for that.'
                       ],
                       [ '<26>{#p/asriel1}{#f/17}* Life sure does like to throw curveballs at you sometimes...' ]
                    ][Math.min(asrielinter.s_tree++, 3)]
                  : world.darker
                  ? [ '<32>{#p/basic}* ...' ]
                  : SAVE.data.n.plot === 72
                  ? [ "<32>{#p/basic}* Don't worry.\n* They'll find their own way." ]
                  : [ "<32>{#p/basic}* Pro tip...\n* Don't shake the innocent tree- like structure." ]
         ),
         doginfo: () =>
            SAVE.data.b.svr
               ? [ '<32>{#p/human}* (The dog treats inside look to have been somewhat devoured.)' ]
               : SAVE.data.n.state_starton_doggo === 2 || SAVE.data.n.plot > 27
               ? SAVE.data.b.oops
                  ? [ '<32>{#p/basic}* Inside is a half-empty pack of dog treats.' ]
                  : [ "<32>{#p/basic}* Inside is a pack of dog treats. It's half-full." ]
               : [
                    SAVE.data.n.state_starton_doggo === 3
                       ? '<32>{#p/basic}* Inside is a rather sleepy guard dog.\n* It cannot see you.'
                       : '<32>{#p/basic}* Inside is a rather confused guard dog.\n* It cannot see you.'
                 ]
      },
      truetext: {
         doggo1: [ '<32>{#p/basic}* That dog needs a therapist.' ],
         doggo2: [ "<32>{#p/basic}* Fetch, huh?\n* Now we're getting places." ],
         dogs1: [ '<32>{#p/basic}* The things we do for the good of the canines.' ],
         dogs2: [ '<32>{#p/basic}* The rusty spanner strikes again.' ],
         fetch: () =>
            [
               [ "<32>{#p/basic}* Fetch, huh?\n* Now we're getting places." ],
               [ "<32>{#p/basic}* That's two for two on the rusty spanner method.", '<32>{#p/basic}* What else is new?' ],
               [ "<32>{#p/basic}* You can't keep getting away with this." ]
            ][SAVE.data.n.state_starton_latefetch++],
         great1: [ "<32>{#p/basic}* It's a proven fact that little puppy kisses are the best." ],
         great2: [
            '<32>{#p/basic}* The entire canine unit, beaten with nothing but a wrench and a strong throwing arm.',
            '<32>* The lunacy speaks for itself.'
         ],
         great3: [ '<32>{#p/basic}* What just happened?' ],
         lesser1: [ '<32>{#p/basic}* Mysterious words about extending necks suddenly make a lot more sense.' ],
         lesser2: [
            "<32>{#p/basic}* That's two for two on the rusty spanner method.",
            '<32>{#p/basic}* What else is new?'
         ],
         papyrus1: [
            '<32>{#p/basic}* Papyrus is well-known for his spaghetti.',
            "<32>* What's not as well-known is that he uses a human recipe instead of a monster one.",
            '<32>* An honest mistake by his, uh, "cooking instructor," but...',
            '<32>* Apart from himself, only a human would enjoy it.',
            '<32>* The irony is off the charts.'
         ],
         papyrus3: [ '<32>{#p/basic}* This is it...', "<32>* You're about to spar with the coolest skeleton in town." ],
         papyrus4: [
            '<32>{#p/basic}* He might as well have been waiting his whole life for this moment...',
            "<32>* If I were you, I wouldn't let it go to waste."
         ],
         papyrus5: [ "<32>{#p/basic}* Don't worry.", "<32>* With any luck, you'll be best friends in no time." ],
         puzzle1: () =>
            SAVE.data.b.svr
               ? [ "<25>{#p/asriel1}{#f/20}* Not bad, Frisk.\n* I didn't know you were a mathematics expert..." ]
               : [ '<32>{#p/basic}* Wow.\n* You actually solved it?' ],
         sans3: [ '<32>{#p/basic}* You tried.' ],
         sans4: [ '<32>{#p/basic}* Have you done this before...?' ],
         sans5: [ '<32>{#p/basic}* Really, Sans?\n* That "puzzle" wasn\'t even worth looking at.' ],
         sans6: [ '<32>{#p/basic}* Really, Sans?\n* That "puzzle" was impossible.' ],
         sans7: [ '<32>{#p/basic}* That was anti-climactic.' ],
         sans8: [ "<32>{#p/basic}* I'm just as confused as you." ],
         sans9: [ "<32>{#p/basic}* Aw, c'mon!\n* I wanted to see that!", '<32>* ... oh well...' ],
         papdate: () => [
            '<32>{#p/basic}* So... Papyrus, huh?',
            SAVE.data.n.plot > 64.1
               ? '<32>* After all this time, you finally became friends.'
               : '<32>* Somehow I knew you two would end up as friends.',
            '<32>* I wish I could tell him how much I adore him...',
            '<32>* But I guess just watching him will have to do for now.'
         ]
      },
      vegetoid: pager.create(
         0,
         () => [
            SAVE.data.n.plot === 72
               ? '<32>{#p/basic}* I heard the taxi driver will be here when everyone else is off the outpost.'
               : world.population === 0
               ? '<32>{#p/basic}* I heard the taxi driver will be here when everyone else is gone.'
               : "<32>{#p/basic}* I heard the taxi driver doesn't eat their greens.",
            '<33>{#p/basic}* Are they even a real monster...?'
         ],
         () => [
            SAVE.data.n.plot === 72
               ? "<32>{#p/basic}* A real monster wouldn't hesitate to escape this dreadful place."
               : world.population === 0
               ? '<32>{#p/basic}* ...'
               : '<32>{#p/basic}* Real monsters always eat their greens.'
         ]
      ),
      vegetoidx: () =>
         SAVE.data.b.svr
            ? [ "<32>{#p/human}* (You can't seem to find anyone down there.)" ]
            : world.bullied || SAVE.flag.n.pacifist_marker_bully > 3
            ? [ '<32>{#p/basic}* ... but everybody ran.' ]
            : [ '<32>{#p/basic}* ... but nobody came.' ],
      xtowerHiscoreHeader: 'Leaderboard',
      xtowerHiscoreNames: {
         kidd: 'UNDYNEFAN10',
         napstablook: 'NAPSTABLOOK22',
         papyrus: 'COOLSKELETON95',
         sans: 'lazybones.',
         undyne: 'STRONGFISH91',
         you: () => (49 <= SAVE.data.n.plot ? 'ALPHYS2' : '(Unknown)')
      },
      xtowerMessage1: 'New High Score!',
      xtowerMessage2: 'Better Luck Next Time...',
      xtowerMessage3: 'Thanks For Playing!',
      xtowerSans: () =>
         world.genocide
            ? [
                 '<32>{#p/event}* Ring, ring...',
                 "<32>{#p/alphys}* So... killing him wasn't g-good enough, huh?",
                 '<32>* You just had to go and beat his score on my... stupid m-minigame...',
                 '<32>* Ehehe...',
                 "<32>* You're truly disgusting...",
                 '<32>* ...',
                 '<32>{#s/equip}{#p/human}* (You lost all of your G.)',
                 ...(world.goatbro
                    ? SAVE.flag.n.genocide_milestone < 5
                       ? SAVE.flag.n.ga_asrielXtower++ < 1
                          ? [ "<25>{#p/asriel2}{#f/10}* Daring today, aren't we?" ]
                          : []
                       : SAVE.flag.n.genocide_milestone < 6
                       ? SAVE.flag.n.ga_asrielAlphysCom2++ < 1
                          ? [ "<25>{#p/asriel2}{#f/1}* Now THAT's the Alphys I like to see." ]
                          : []
                       : SAVE.flag.n.ga_asrielAlphysCom5++ < 1
                       ? [ "<25>{#p/asriel2}{#f/4}* Too bad this won't save her when she's dead." ]
                       : []
                    : [])
              ]
            : [
                 '<32>{#p/event}* Ring, ring...',
                 '<25>{#p/sans}* didja seriously just put in all that effort tryna beat my score?',
                 "<25>{#f/3}* wow.\n* you're even more stubborn than my bro.",
                 ...(SAVE.data.n.state_starton_papyrus === 1
                    ? [
                         '<25>{#f/3}* ...',
                         "<25>{*}{#p/darksans}{#f/1}{#i/5}{#s.stop}* Too bad he's dead, huh?",
                         '{*}{#s.resume}{%}'
                      ]
                    : [
                         SAVE.data.n.plot === 72
                            ? "<25>{#f/0}* i'd give you a special reward, but i'm still looking for toriel."
                            : "<25>{#f/0}* i'd give you a special reward, but i'm on break right now.",
                         ...(world.edgy_x
                            ? [ '<25>{#f/0}* no hard feelings.', '<32>{#s/equip}{#p/event}* Click...' ]
                            : [
                                 "<25>{#f/2}* instead, i'll just send ya some pocket change.",
                                 '<32>{#s/equip}{#p/human}* (You got 10000G.)'
                              ])
                      ])
              ],
      xtowerAsriel: [
         '<25>{#p/asriel1}{#f/13}* ... you actually beat the high score?',
         '<25>{#f/17}* Wow.\n* I under-estimated you.',
         '<25>{#f/20}* Very cool, Frisk.'
      ],
      xtowerScore: 'Score: $(x)'
   },

   b_group_starton: {
      dogs: () => (world.goatbro ? [ '<32>{#p/asriel2}* Dogamy and Dogaressa.' ] : [ '<32>{#p/story}* Dogi assault you!' ]),
      spacetopJerry: () =>
         world.goatbro
            ? [ '<32>{#p/asriel2}* Tacky hats and fickle friends.' ]
            : [ '<32>{#p/story}* Astro Serf saunters in!\n* Jerry came too.' ],
      stardrakeSpacetop: () =>
         world.goatbro
            ? [ '<32>{#p/asriel2}* The teenage idiot squad.' ]
            : SAVE.data.b.s_state_chilldrake
            ? [ '<32>{#p/story}* Chilldrake and Astro Serf pose like bad guys.' ]
            : [ '<32>{#p/story}* Stardrake and Astro Serf pose like bad guys.' ],
      stardrakeSpacetop2a: () =>
         world.goatbro
            ? [ '<32>{#p/asriel2}* One left.' ]
            : SAVE.data.b.s_state_chilldrake
            ? [ '<32>{#p/story}* Chilldrake remains steady.' ]
            : [ '<32>{#p/story}* Stardrake remains steady.' ],
      stardrakeSpacetop2b: () =>
         world.goatbro ? [ '<32>{#p/asriel2}* One left.' ] : [ '<32>{#p/story}* Astro Serf remains steady.' ],
      stardrakeSpacetop2c: () =>
         world.goatbro ? [ '<32>{#p/asriel2}* One left.' ] : [ '<32>{#p/story}* Just Astro now.' ],
      stardrakeSpacetop2d: () => (world.goatbro ? [ '<32>{#p/asriel2}* Jerry.' ] : [ '<32>{#p/story}* Jerry.' ]),
      stardrakeSpacetopJerry: () =>
         world.goatbro
            ? [ '<32>{#p/asriel2}* The teenage idiot squad.\n* Also, Jerry.' ]
            : SAVE.data.b.spared_jerry
            ? [ '<32>{#p/story}* Jerry and friends appear!' ]
            : SAVE.data.b.s_state_chilldrake
            ? [ '<32>{#p/story}* Astro Serf and Chilldrake confront you, sighing.\n* Jerry.' ]
            : [ '<32>{#p/story}* Astro Serf and Stardrake confront you, sighing.\n* Jerry.' ],
      stardrakeSpacetopJerry2a: () =>
         world.goatbro
            ? [ '<32>{#p/asriel2}* Two left.' ]
            : SAVE.data.b.s_state_chilldrake
            ? [ '<32>{#p/story}* Astro Serf and Chilldrake remain steady.' ]
            : [ '<32>{#p/story}* Astro Serf and Stardrake remain steady.' ],
      stardrakeSpacetopJerry2b: () =>
         world.goatbro ? [ '<32>{#p/asriel2}* Two left.' ] : [ '<32>{#p/story}* Astro Serf remains steady.\n* Jerry.' ],
      stardrakeSpacetopJerry2c: () =>
         world.goatbro
            ? [ '<32>{#p/asriel2}* Two left.' ]
            : SAVE.data.b.s_state_chilldrake
            ? SAVE.data.b.spared_jerry
               ? [ '<32>{#p/story}* Chilldrake and Jerry remain steady!' ]
               : [ '<32>{#p/story}* Chilldrake remains steady.\n* Jerry.' ]
            : SAVE.data.b.spared_jerry
            ? [ '<32>{#p/story}* Stardrake and Jerry remain steady!' ]
            : [ '<32>{#p/story}* Stardrake remains steady.\n* Jerry.' ]
   },

   b_opponent_stardrake: {
      act_check: () =>
         world.goatbro
            ? SAVE.data.b.s_state_chilldrake
               ? [
                    '<32>{#p/asriel2}* Chilldrake, the teen rebel.\n* Nothing more pointless than a rebel without a cause.'
                 ]
               : [
                    '<32>{#p/asriel2}* Stardrake, the comedian.\n* A bigger joke than he himself could ever hope to tell.'
                 ]
            : SAVE.data.b.s_state_chilldrake
            ? [ '<33>{#p/story}* CHILLDRAKE - ATK 12 DEF 7\n* Rebels against everything!!\n* On the lookout for Starry.' ]
            : [ '<32>{#p/story}* STARDRAKE - ATK 12 DEF 7\n* This teen comedian fights to keep a captive audience.' ],
      act_check2: () =>
         SAVE.data.b.s_state_chilldrake
            ? [ '<32>{#p/story}* CHILLDRAKE - ATK 12 DEF 7\n* Rebels against everything!!\n* Looking for a way out.' ]
            : [ "<32>{#p/story}* STARDRAKE - ATK 12 DEF 7\n* This teen isn't taking your punchline very well." ],
      act_check3: () =>
         SAVE.data.b.s_state_chilldrake
            ? [ '<32>{#p/story}* CHILLDRAKE - ATK 12 DEF 7\n* Rebels against everything!!\n* Especially flirting!!' ]
            : [ '<32>{#p/story}* STARDRAKE - ATK 12 DEF 7\n* Flirting is no joke for this teen comedian.' ],
      act_check4: () =>
         SAVE.data.b.s_state_chilldrake
            ? [ '<32>{#p/story}* CHILLDRAKE - ATK 12 DEF 7\n* The rebellion is fading...' ]
            : [ '<32>{#p/story}* STARDRAKE - ATK 12 DEF 7\n* Things are looking up for this teen comedian.' ],
      act_flirt: () => [ '<32>{#p/human}* (You make a romantic joke.)' ],
      flirtTalk1: [ "<08>{#p/basic}{~}You're weird." ],
      flirtTalk2: [ "<08>{#p/basic}{~}You're mean AND weird." ],
      genoStatus: () =>
         SAVE.data.b.s_state_chilldrake ? [ '<32>{#p/asriel2}* Chilldrake.' ] : [ '<32>{#p/asriel2}* Stardrake.' ],
      heckleStatus: () =>
         world.goatbro
            ? SAVE.data.b.s_state_chilldrake
               ? [ '<32>{#p/asriel2}* Chilldrake.' ]
               : [ '<32>{#p/asriel2}* Stardrake.' ]
            : SAVE.data.b.s_state_chilldrake
            ? [ '<32>{#p/story}* Chilldrake is puffed up...' ]
            : [ '<32>{#p/story}* Stardrake is puffed up...' ],
      heckleTalk1: () =>
         SAVE.data.b.s_state_chilldrake
            ? [ '<08>{#p/basic}{~}No!!\nThis is the way!' ]
            : [ "<08>{#p/basic}{~}THIS won't be funny either!" ],
      heckleTalk2: () =>
         SAVE.data.b.s_state_chilldrake
            ? [ '<08>{#p/basic}{~}Filthy law- obider.' ]
            : [ '<08>{#p/basic}{~}Is your flesh rotten as you?' ],
      heckleTalk3: () =>
         SAVE.data.b.s_state_chilldrake
            ? [ "<08>{#p/basic}{~}Defiance can't be defied!" ]
            : [ '<08>{#p/basic}{~}(Insults towards humans)' ],
      heckleText1: () =>
         SAVE.data.b.s_state_chilldrake
            ? [ '<32>{#p/human}* (You denounce Chilldrake for its cause.)' ]
            : [ '<32>{#p/human}* (You boo Stardrake.)' ],
      heckleText2: () =>
         SAVE.data.b.s_state_chilldrake
            ? [ '<32>{#p/human}* (You tell Chilldrake that they should be a rebel somewhere else.)' ]
            : [ "<32>{#p/human}* (You tell Stardrake that they aren't funny.)" ],
      heckleText3: () =>
         SAVE.data.b.s_state_chilldrake
            ? [
                 '<32>{#p/human}* (You mock Chilldrake for protesting out in the middle of nowhere.)',
                 '<32>{#p/basic}* Chilldrake takes your mockery as advice, and saunters off to town...'
              ]
            : [
                 '<32>{#p/human}* (You tell Stardrake that no one will ever love them the way they are.)',
                 '<32>{#p/basic}* Stardrake struggles to make a retort, and slinks away utterly crushed...'
              ],
      hurtStatus: () =>
         world.goatbro
            ? [ '<32>{#p/asriel2}* Almost dead.' ]
            : SAVE.data.b.s_state_chilldrake
            ? [ '<32>{#p/story}* Chilldrake is flaking apart.' ]
            : [ '<32>{#p/story}* Stardrake is flaking apart.' ],
      idleTalk1: () =>
         SAVE.data.b.s_state_chilldrake
            ? [ '<08>{#p/basic}{~}Brush my teeth?\nNo way in heck!' ]
            : [ '<08>{#p/basic}{~}Try not to get "spaced" out..' ],
      idleTalk2: () =>
         SAVE.data.b.s_state_chilldrake
            ? [ '<08>{#p/basic}{~}No bedtime for this bird!' ]
            : [ '<08>{#p/basic}{~}I\'m just in my moon pun "phase"' ],
      idleTalk3: () =>
         SAVE.data.b.s_state_chilldrake
            ? [ '<08>{#p/basic}{~}Who needs parents anyway!?' ]
            : [ '<08>{#p/basic}{~}Haven\'t seen home in "light- years.."' ],
      idleTalk4: () =>
         SAVE.data.b.s_state_chilldrake
            ? [ '<08>{#p/basic}{~}Live wild and free, I say!' ]
            : [ '<08>{#p/basic}{~}Oh, it\'s on.\n"Tachy- on."' ],
      idleTalk5: () =>
         SAVE.data.b.s_state_chilldrake
            ? [ '<08>{#p/basic}{~}Nobody tells ME what to do!' ]
            : [ '<08>{#p/basic}{~}Want a fight?\n"Comet" me, bro.' ],
      idleTalk6: () =>
         SAVE.data.b.s_state_chilldrake
            ? [ '<08>{#p/basic}{~}Authority be darned!' ]
            : [ '<08>{#p/basic}{~}Don\'t ruin the "atmos- phere.."' ],
      idleTalk7: () =>
         SAVE.data.b.s_state_chilldrake
            ? [ '<08>{#p/basic}{~}Trim my claws?\nNo way in heck!' ]
            : [ '<08>{#p/basic}{~}It\'s not free, it\'s "zero G"' ],
      jokeStatus: () =>
         SAVE.data.b.s_state_chilldrake
            ? [ '<32>{#p/story}* Chilldrake is losing faith in its rebellion.' ]
            : [ '<32>{#p/story}* Stardrake is pleased with its "stellar" joke.' ],
      jokeTalk1: () =>
         SAVE.data.b.s_state_chilldrake
            ? [ "<08>{#p/basic}{~}You don't know my cause!" ]
            : [ "<08>{#p/basic}{~}What are YOU laughin' at!?" ],
      jokeTalk2: () =>
         SAVE.data.b.s_state_chilldrake
            ? [ '<08>{#p/basic}{~}Do you..\nreally..' ]
            : [ '<08>{#p/basic}{~}See!?\nLaughs!\nMom was right!' ],
      jokeTalk3: () =>
         SAVE.data.b.s_state_chilldrake
            ? [ "<08>{#p/basic}{~}I don't think you.." ]
            : [ "<08>{#p/basic}{~}Thanks, you're all great." ],
      jokeTalk4: () =>
         SAVE.data.b.s_state_chilldrake
            ? [ '<08>{#p/basic}{~}To tell you the truth..' ]
            : [ '<08>{#p/basic}{~}You have good taste!!' ],
      jokeText1: () =>
         SAVE.data.b.s_state_chilldrake
            ? [ "<32>{#p/human}* (But it hasn't said anything you could agree with yet.)" ]
            : [ "<32>{#p/human}* (But it hasn't said anything you could laugh at yet.)" ],
      jokeText2: () =>
         SAVE.data.b.s_state_chilldrake
            ? [ '<32>{#p/human}* (You agree with Chilldrake.)' ]
            : [ "<32>{#p/human}* (You laugh at Stardrake's pun.)" ],
      jokeText3: () =>
         SAVE.data.b.s_state_chilldrake
            ? [ '<32>{#p/human}* (You double down on your agreement with Chilldrake.)' ]
            : [ "<32>{#p/human}* (You continue to laugh at Stardrake's puns.)" ],
      name: () => (SAVE.data.b.s_state_chilldrake ? '* Chilldrake' : '* Stardrake'),
      punTalk1: () =>
         SAVE.data.b.s_state_chilldrake
            ? [ '<08>{#p/basic}{~}Only Starry can do that.' ]
            : [ "<08>{#p/basic}{~}Is that s'posed to be funny?" ],
      punTalk2: () =>
         SAVE.data.b.s_state_chilldrake ? [ "<08>{#p/basic}{~}You ain't Starry." ] : [ '<08>{#p/basic}{~}Ha.. Ha..' ],
      punTalk3: () =>
         SAVE.data.b.s_state_chilldrake
            ? [ '<08>{#p/basic}{~}Quit copying my friends.' ]
            : [ "<08>{#p/basic}{~}I've heard that one." ],
      punText1: [ '<32>{#p/human}* (You make a space pun.)' ],
      randStatus1: () =>
         SAVE.data.b.s_state_chilldrake
            ? [ '<32>{#p/story}* Chilldrake is wondering where Starry went.' ]
            : [ '<32>{#p/story}* Stardrake is assessing the crowd.' ],
      randStatus2: () =>
         SAVE.data.b.s_state_chilldrake
            ? [ '<32>{#p/story}* Chilldrake is chanting an anarchist spell.' ]
            : [ '<32>{#p/story}* Stardrake is practicing its next pun.' ],
      randStatus3: () =>
         SAVE.data.b.s_state_chilldrake
            ? [ '<32>{#p/story}* Chilldrake starts a one- monster riot.' ]
            : [ '<32>{#p/story}* Stardrake is smiling at the thought of its next pun.' ],
      randStatus4: () => [ '<32>{#p/story}* Smells like wet pillows.' ],
      randStatus5: () =>
         SAVE.data.b.s_state_chilldrake
            ? [ '<32>{#p/story}* Smells like body spray.' ]
            : [ '<32>{#p/story}* Stardrake sighs in relief, realizing its own name is in fact not a pun.' ],
      status1: () =>
         SAVE.data.b.s_state_chilldrake
            ? [ '<32>{#p/story}* Chilldrake saunters up!' ]
            : [ '<32>{#p/story}* Stardrake flutters forth!' ]
   },
   b_opponent_jerry: {
      act_check: () =>
         SAVE.data.b.spared_jerry
            ? world.goatbro
               ? [
                    '<33>{#p/asriel2}* Jerry, the undisputable jerk.\n* I refuse to believe one flirt could have that much influence.'
                 ]
               : [
                    '<32>{#p/story}* JERRY - ATK 0 DEF 30\n* A born-again monster, awakened with the power of friendship!'
                 ]
            : world.goatbro
            ? [
                 '<32>{#p/asriel2}* Jerry, the undisputable jerk.\n* A worthless piece of garbage, nothing more, nothing less.'
              ]
            : [ '<32>{#p/story}* JERRY - ATK 0 DEF 30\n* Everyone knows Jerry.\n* Makes attacks last longer.' ],
      act_flirt: () =>
         SAVE.data.b.spared_jerry
            ? [ '<32>{#p/human}* (You flirt with Jerry.)\n* (It appreciates the compliment.)' ]
            : 5 <= world.flirt
            ? [ '<32>{#p/human}* (You call on your experience, and deliver a life-changing flirt.)' ]
            : [
                 '<32>{#p/human}* (You flirt with Jerry.)',
                 '<32>{#p/basic}* Jerry seems to like you a little too much now.'
              ],
      act_ditch: () => [ '<32>{#p/human}* (You ditch Jerry.)' ],
      flirtStatus: [ "<32>{#p/story}* Jerry's redemption arc begins." ],
      flirtStatusWeird: [ '<32>{#p/story}* This is wrong on so many levels.' ],
      flirtTalk: [
         '<08>{#p/basic}{~}You... y-you...',
         "<08>{#p/basic}{~}Just for you, I'll...",
         "<08>{#p/basic}{~}I'll be the best person I can be!"
      ],
      flirtTalkWeird: [ '<08>{#p/basic}{~}*licks lips*' ],
      genoStatus: [ '<32>{#p/asriel2}* Jerry.' ],
      hurtStatus: () => (world.goatbro ? [ '<32>{#p/asriel2}* Almost dead.' ] : [ '<32>{#p/story}* Jerry is wounded.' ]),
      idleTalk1: () =>
         SAVE.data.b.spared_jerry
            ? [ "<08>{#p/basic}{~}I'm so glad we're here!" ]
            : [ "<08>{#p/basic}{~}Aren't you guys BORED?" ],
      idleTalk2: () =>
         SAVE.data.b.spared_jerry
            ? [ '<08>{#p/basic}{~}Can we do this more often??' ]
            : [ '<08>{#p/basic}{~}Why are we doing this?' ],
      idleTalk3: () =>
         SAVE.data.b.spared_jerry
            ? [ '<08>{#p/basic}{~}Hey, you guys are the BEST!' ]
            : [ '<08>{#p/basic}{~}Wow, you guys SUCK at this.' ],
      idleTalk4: () =>
         SAVE.data.b.spared_jerry
            ? [ '<08>{#p/basic}{~}Does anyone want a hug?' ]
            : [ '<08>{#p/basic}{~}SHHHH!\nLet me think, guys!!' ],
      idleTalkSolo1: () =>
         SAVE.data.b.spared_jerry ? [ '<08>{#p/basic}{~}Thanks for being here!' ] : [ '<08>{#p/basic}{~}Awkwarrd.' ],
      idleTalkSolo2: () =>
         SAVE.data.b.spared_jerry
            ? [ "<08>{#p/basic}{~}You're awesome!\nJust saying." ]
            : [ '<08>{#p/basic}{~}So like, what are you even doing?' ],
      idleTalkSolo3: () =>
         SAVE.data.b.spared_jerry
            ? [ "<08>{#p/basic}{~}Wouldn't trade ya for the galaxy." ]
            : [ '<08>{#p/basic}{~}The signal here sucks.' ],
      idleTalkSolo4: () =>
         SAVE.data.b.spared_jerry
            ? [ '<08>{#p/basic}{~}I love humans!' ]
            : [ '<08>{#p/basic}{~}Must be nice being HUMAN..' ],
      name: '* Jerry',
      randStatus1: () =>
         SAVE.data.b.spared_jerry
            ? [ '<32>{#p/story}* Jerry is living care-free.' ]
            : [ '<32>{#p/story}* Jerry eats powdery food and licks its hands proudly.' ],
      randStatus2: () =>
         SAVE.data.b.spared_jerry
            ? [ '<32>{#p/story}* Jerry giggles from happiness.' ]
            : [ '<32>{#p/story}* Jerry sneezes without covering its nose.' ],
      randStatus3: () =>
         SAVE.data.b.spared_jerry
            ? [ '<32>{#p/story}* Jerry lets out a squeal of excitement.' ]
            : [ '<32>{#p/story}* Jerry lets out a yawn.' ],
      randStatus4: () =>
         SAVE.data.b.spared_jerry
            ? [ '<32>{#p/story}* Smells like...... Jerry?' ]
            : [ '<32>{#p/story}* Smells like...... Jerry.' ],
      status1: [ '<32>{#p/story}* Jerry clings to you!' ],
      ditchResult: () =>
         SAVE.data.b.spared_jerry
            ? battler.alive.length === 1
               ? [ '<32>{#p/basic}* The other monster wishes Jerry was still here...' ]
               : [ '<32>{#p/basic}* The other monsters wish Jerry was still here...' ]
            : battler.alive.length === 1
            ? [ "<32>{#p/basic}* The other monster celebrates Jerry's disappearance." ]
            : [ "<32>{#p/basic}* The other monsters celebrate Jerry's disappearance." ]
   },
   b_opponent_mouse: {
      act_check: () =>
         world.goatbro
            ? [ '<32>{#p/asriel2}* Whizkarat, the homeless cat.\n* Lost its purpose in life a long time ago.' ]
            : [ '<33>{#p/story}* WHIZKARAT - ATK 16 DEF 8\n* This posh city cat wishes only to live the simple life.' ],
      act_check2: [
         "<33>{#p/story}* WHIZKARAT - ATK 16 DEF 8\n* This posh city cat regrets going where it doesn't belong."
      ],
      act_check3: [
         '<33>{#p/story}* WHIZKARAT - ATK 16 DEF 8\n* This reformed country cat is quite pleased with itself.'
      ],
      act_check4: [ '<33>{#p/story}* WHIZKARAT - ATK 16 DEF 8\n* This reformed country cat has taken a liking to you.' ],
      act_direct: [ '<32>{#p/human}* (You tell Whizkarat a mouse fact.)' ],
      act_direct2: [
         '<32>{#p/human}* (You tell Whizkarat everything you know about mice.)',
         '<32>{#p/basic}* Suddenly...!'
      ],
      act_direct3: [ "<32>{#p/human}* (You try to tell Whizkarat more, but it's already found its way.)" ],
      act_disown: [
         "<32>{#p/human}* (You pluck a whisker from Whizkarat's face.)",
         '<32>{#p/basic}* Whizkarat lets out a gnarly hiss!'
      ],
      act_disown2: [
         "<32>{#p/human}* (You pluck another whisker from Whizkarat's face.)",
         '<32>{#p/basic}* Whizkarat scurries away!'
      ],
      act_disown3: [ '<32>{#p/human}* (You try to pluck a whisker, but Whizkarat pretends it has none.)' ],
      act_flirt: [ "<32>{#p/human}* (You make a cute remark and scratch Whizkarat's neck.)" ],
      disownStatus: () =>
         world.goatbro ? [ '<32>{#p/asriel2}* Whizkarat.' ] : [ '<32>{#p/story}* Whizkarat is losing its cool.' ],
      disownTalk1: [ '<08>{#p/basic}{~}Keep your paws off me..!' ],
      flirtTalk: [ '<08>{#p/basic}{~}No pussy- cats allowed.' ],
      flirtTalk2: [ '<08>{#p/basic}{~}\x00*purrs gently*' ],
      genoStatus: [ '<32>{#p/asriel2}* Whizkarat.' ],
      hurtStatus: () =>
         world.goatbro ? [ '<32>{#p/asriel2}* Almost dead.' ] : [ '<32>{#p/story}* Whizkarat is nearing demise.' ],
      idleTalk1: [ '<08>{#p/basic}{~}What food do they eat?' ],
      idleTalk2: [ '<08>{#p/basic}{~}Where do they hide?' ],
      idleTalk3: [ '<08>{#p/basic}{~}How do they speak?' ],
      idleTalk4: [ '<08>{#p/basic}{~}Do they dream?' ],
      initTalk1: [ '<08>{#p/basic}{~}Alas, here I stand.' ],
      initTalk2: [ '<08>{#p/basic}{~}Oh, how I lose myself..' ],
      initTalk3: [ '<08>{#p/basic}{~}The si- tuation is not ideal.' ],
      initTalk4: [ '<08>{#p/basic}{~}Could you help me?' ],
      name: '* Whizkarat',
      randStatus1: [ '<32>{#p/story}* Whizkarat fantasizes about getting down on all fours.' ],
      randStatus2: [ '<32>{#p/story}* Whizkarat scans the area.' ],
      randStatus3: [ '<32>{#p/story}* Whizkarat is trying to pretend that it is small.' ],
      randStatus4: [ '<32>{#p/story}* Smells like top-twenty-cheese.' ],
      remindStatus: () =>
         world.goatbro
            ? [ '<32>{#p/asriel2}* Whizkarat.' ]
            : [ '<32>{#p/story}* Whizkarat just needs a little more help.' ],
      remindTalk1: [ '<08>{#p/basic}{~}Live in holes, do they..?' ],
      remindTalk2: [ '<08>{#p/basic}{~}Squeak like toys, do they..?' ],
      remindTalk3: [ '<08>{#p/basic}{~}From now on, I shall live as a mouse.' ],
      safeStatus: () =>
         world.goatbro ? [ "<32>{#p/asriel2}* It's vulnerable." ] : [ '<32>{#p/story}* Whizkarat has found its way.' ],
      safeTalk1: [ '<08>{#p/basic}{~}Wonder- ful...' ],
      safeTalk2: [ '<08>{#p/basic}{~}Simply splen- did...' ],
      status1: [ '<32>{#p/story}* Whizkarat arrives!' ]
   },
   b_opponent_doggo: {
      act_check: () =>
         world.goatbro
            ? [ '<32>{#p/asriel2}* Doggo, the unsightly dog.\n* How exactly did this idiot get a job again?' ]
            : [ '<32>{#p/story}* DOGGO - ATK 13 DEF 7\n* Easily excited by movement.\n* Hobbies include: Cuddles.' ],
      act_check2: [ '<32>{#p/story}* DOGGO - ATK 13 DEF 7\n* Struggling to even see itself...' ],
      act_check3: [ '<32>{#p/story}* DOGGO - ATK 13 DEF 7\n* A very excited dog, currently enjoying a hobby.' ],
      act_check4: [ '<32>{#p/story}* DOGGO - ATK 13 DEF 7\n* This dog strikes you as being lonely in life.' ],
      act_flirt: () => [ '<32>{#p/human}* (You flirt with Doggo.)' ],
      act_cuddle: () => [ '<32>{#p/human}* (You cuddle Doggo closely.)' ],
      fetch: () => [
         '<32>{#p/human}* (You throw the spanner.)\n* (The dog runs to get it.)\n* (You play fetch for a while.)'
      ],
      fetchTalk: pager.create(
         0,
         [ '<11>{#p/basic}{~}HUH!! A FUN WRENCH APPEARS!' ],
         [ '<11>{#p/basic}{~}HUH!! THERE IT IS AGAIN!' ]
      ),
      fetchTalkX1: [ "<11>{#p/basic}{~}WHERE'D IT GO!?" ],
      fetchTalkX2: [ "<11>{#p/basic}{~}WHERE'S MY WRENCH NOW!?" ],
      flirt1: [ '<11>{#p/basic}{~}(Blushes uncontrol- lably)' ],
      invisStatus: () =>
         world.goatbro ? [ "<32>{#p/asriel2}* He's vulnerable." ] : [ '<32>{#p/story}* Doggo has lost sight of you.' ],
      name: '* Doggo',
      fetchStatus: [ '<32>{#p/story}* Doggo loves fetch!' ],
      fetchpet: [ '<32>{#p/human}* (But the dog was too busy looking for the spanner to be pet.)' ],
      fetchflirt: [ '<32>{#p/human}* (But the dog was too busy looking for the spanner to hear you.)' ],
      fetchcuddle: [ '<32>{#p/human}* (But the dog was too busy looking for the spanner to be cuddled.)' ],
      normaStatus: () => (world.goatbro ? [ '<32>{#p/asriel2}* Doggo.' ] : [ "<32>{#p/story}* Doggo knows you're here." ]),
      pet: () => [
         '<32>{#p/human}* (You pet Doggo.)',
         ...(world.goatbro
            ? [
                 [],
                 [ '<32>{#p/asriel2}* ... again?' ],
                 [ "<32>{#p/asriel2}* It's not THAT funny..." ],
                 [ '<32>{#p/asriel2}* ... or is it?' ],
                 [ '<32>{#p/asriel2}* This is so stupid.' ],
                 [ '<32>{#p/asriel2}* Do you really need to do this?' ],
                 [ '<32>{#p/asriel2}* ... do you?' ],
                 [ '<32>{#p/asriel2}* I guess so.' ],
                 [ '<32>{#p/asriel2}* ...' ],
                 [ '<32>{#p/asriel2}* This is getting out of hand...' ],
                 [ '<32>{#p/asriel2}* Still?\n* Come on...' ],
                 [ '<32>{#p/asriel2}* Wow.\n* Just wow.' ],
                 [ '<32>{#p/asriel2}* You are enjoying this way too much.' ],
                 [ '<32>{#p/asriel2}* ...' ]
              ][Math.min(battler.volatile[0].vars.pet - 1, 13)]
            : [])
      ],
      cuddle: pager.create(
         0,
         [ '<11>{#p/basic}{~}CUDDLES!?!?\nWELL, AT LEAST I KNOW WHERE IT IS!' ],
         [ '<11>{#p/basic}{~}AGAIN!?!?' ]
      ),
      petStatus: () =>
         world.goatbro ? [ "<32>{#p/asriel2}* He's vulnerable." ] : [ '<32>{#p/story}* Doggo has been pet.' ],
      petTalk1: [ "<11>{#p/basic}{~}WHAT!!!\nI'VE BEEN PET!" ],
      petTalk2: [ "<11>{#p/basic}{~}WHERE'S THAT COMING FROM!?" ],
      petTalk3: [ "<11>{#p/basic}{~}THERE'S NO END TO IT!!" ],
      petTalk4: [ '<11>{#p/basic}{~}WELL, THIS IS THOROUGH!!!' ],
      petTalk5: [ '<11>{#p/basic}{~}(Dies)' ],
      petTalk6: [ '<11>{#p/basic}{~}(Comes back to life)' ],
      petTalk7: [ '<11>{#p/basic}{~}IT JUST KEEPS COMING!' ],
      petTalk8: [ '<11>{#p/basic}{~}AND COMING!!' ],
      petTalk9: [ '<11>{#p/basic}{~}AND COMINGGG!!!' ],
      petTalk10: [ "<11>{#p/basic}{~}OK.\nThat's enough." ],
      petTalk11: [ '<11>{#p/basic}{~}I said "that\'s enough!"' ],
      petTalk12: [ "<11>{#p/basic}{~}Oh my god, it just doesn't stop!" ],
      petTalk13: [ "<11>{#p/basic}{~}OH MY GOD, IT REALLY DOESN'T STOP!!" ],
      petTalk14: [ '<11>{#p/basic}{~}AHHHHHHH!!!' ],
      query1: [ '<11>{#p/basic}{~}No escape!' ],
      query2: [ "<11>{*}{#p/basic}{~}Ha!\nIt moved!\nIt couldn't NOT move!{^30}{%}" ],
      query3: [ '<11>{#p/basic}{~}Will it move this time?' ],
      status1: () => (world.goatbro ? [ '<32>{#p/asriel2}* Doggo.' ] : [ '<32>{#p/story}* Doggo blocks the way!' ]),
      sussy: () =>
         world.goatbro ? [ '<32>{#p/asriel2}* Doggo.' ] : [ '<32>{#p/basic}* Doggo is too suspicious of your actions.' ]
   },
   b_opponent_lesserdog: {
      act_check: () =>
         world.goatbro
            ? [ "<32>{#p/asriel2}* Canis Minor, the ignorant dog.\n* It probably doesn't even know why it's here." ]
            : [ '<32>{#p/story}* CANIS MINOR - ATK 12 DEF 2\n* Wields a shiny dogger made of fido-nium.' ],
      act_check2: [
         '<32>{#p/story}* CANIS MINOR - ATK 12 DEF 2\n* Scarred for life, this puppy wants to turn tail and run.'
      ],
      act_check3: [
         "<32>{#p/story}* CANIS MINOR - ATK 12 DEF 2\n* It's necks-in-line for the galaxy's tallest monster."
      ],
      act_check4: [ '<32>{#p/story}* CANIS MINOR - ATK 12 DEF 2\n* Trying its best to decipher your advanced petting.' ],
      act_check5: [ '<32>{#p/story}* CANIS MINOR - ATK 12 DEF 2\n* The journey for this puppy has only just begun.' ],
      act_flirt: [ '<32>{#p/human}* (You tell Canis Minor you love it by petting it in morse code.)' ],
      act_handshake: [
         "<32>{#p/human}* (You place your hand on Canis Minor's head, shaking and ruffling its fur to the core.)"
      ],
      act_inquire: [
         "<32>{#p/human}* (You pet Canis Minor and ask it who's a good dog. It barks its answer excitedly.)"
      ],
      act_tickle: [
         "<32>{#p/human}* (You tickle Canis Minor's sides, thereby petting it.)\n* (It's a frenzy of excitement.)"
      ],
      fetch: () => [
         '<32>{#p/human}* (You throw the spanner.)\n* (The dog elongates its neck to reach it.)',
         '<32>{#p/human}* (You play fetch for a while.)',
         ...(world.goatbro ? [ '<32>{#p/asriel2}* But why though?' ] : [])
      ],
      fetchStatus: [ '<32>{#p/story}* Canis Minor loves fetch!' ],
      fetchTalk: [ '<11>{#p/basic}{~}(Pants fast)' ],
      hurtStatus: () =>
         world.goatbro
            ? [ '<32>{#p/asriel2}* Almost dead.' ]
            : [ '<32>{#p/story}* Canis Minor tucks its tail between its legs.' ],
      name: '* Canis Minor',
      petTalk1: [ '<11>{#p/basic}{~}(Pant pant)' ],
      petTalk2: [ '<11>{#p/basic}{~}(Tiny bark)' ],
      petTalk3: [ '<11>{#p/basic}{~}(Wag wag)' ],
      petTalk4: [ '<11>{#p/basic}{~}(Thinks of food)' ],
      petTalk5: [ '<11>{#p/basic}{~}(Pant! Pant!)' ],
      petTalk6: [ '<11>{#p/basic}{~}(Excited noises)' ],
      petTalk7: [ '<11>{#p/basic}{~}(Motor revving)' ],
      petTalk8: [ '<11>{#p/basic}{~}(Plane takeoff)' ],
      petTalk9: [ '<11>{#p/basic}{~}(Kettle whistle)' ],
      petTalk10: [ '<11>{#p/basic}{~}(...)' ],
      petTalk11: [ '<11>{#p/basic}{~}(Faraway bark)' ],
      petTalk12: [ '<11>{#p/basic}{~}(Bark)' ],
      petText1: () => [ '<32>{#p/human}* (You barely lift your hand.)', '<32>{#p/basic}* How exciting!' ],
      petText2: () => [
         '<32>{#p/human}* (You lightly touch the dog.)',
         "<32>{#p/basic}* It's already overexcited...",
         ...(world.goatbro ? [ '<32>{#p/asriel2}* Dogs do love to be pet.' ] : [])
      ],
      petText3: () => [
         '<32>{#p/human}* (You pet Canis Minor.)',
         "<32>{#p/basic}* It's raising its head to meet your hand.",
         ...(world.goatbro ? [ "<32>{#p/asriel2}* Okay, you've pet it.\n* There's really no reason to keep going." ] : [])
      ],
      petText4: () => [
         '<32>{#p/human}* (You pet Canis Minor.)',
         '<32>{#p/basic}* It was a good dog.',
         ...(world.goatbro ? [ '<32>{#p/asriel2}* No reason to keep going?' ] : [])
      ],
      petText5: () => [
         '<32>{#p/human}* (You pet Canis Minor.)',
         '<32>{#p/basic}* Its excitement knows no bounds...',
         ...(world.goatbro ? [ '<32>{#p/asriel2}* No reason to keep going.' ] : [])
      ],
      petText6: () => [
         '<32>{#p/human}* (You pet Canis Minor.)',
         '<32>{#p/basic}* Critical pet!\n* Dog excitement increased.',
         ...(world.goatbro ? [ '<32>{#p/asriel2}* Golly, $(name).' ] : [])
      ],
      petText7: () => [
         '<32>{#p/human}* (You have to jump up to pet the dog.)',
         ...(world.goatbro ? [ "<32>{#p/asriel2}* We can't do this all day." ] : [])
      ],
      petText8: () => [
         '<32>{#p/human}* (You pet Canis Minor without even reaching it.)',
         '<32>{#p/basic}* It gets more excited.',
         ...(world.goatbro ? [ '<32>{#p/asriel2}* We CAN do this all day...?' ] : [])
      ],
      petText9: () => [
         '<32>{#p/human}* (You pet Canis Minor.)',
         '<32>{#p/basic}* There is no way to stop this madness.',
         ...(world.goatbro ? [ '<32>{#p/asriel2}* ...' ] : [])
      ],
      petText10: () => [
         '<32>{#p/human}* (You pet Canis Minor.)',
         '<32>{#p/basic}* Many small pets for a dog, one giant neck amongst dog-kind.',
         ...(world.goatbro ? [ '<32>{#p/asriel2}* Why are we still here.' ] : [])
      ],
      petText11: () => [
         '<32>{#p/human}* (You call Canis Minor, but it cannot hear you.)',
         ...(world.goatbro ? [ "<32>{#p/asriel2}* There.\n* It's totally out of reach now." ] : [])
      ],
      petText12: () => [ '<32>{#p/basic}* ...', ...(world.goatbro ? [ '<32>{#p/asriel2}* ???' ] : []) ],
      petText13: () => [
         '<32>{#p/human}* (You can reach Canis Minor again.)',
         ...(world.goatbro ? [ "<32>{#p/asriel2}* You've GOT to be kidding me." ] : [])
      ],
      petText14: () => [ '<32>{#p/human}* (You pet Canis Minor.)' ],
      petText15: () => [
         '<32>{#p/human}* (You pet Canis Minor.)',
         "<32>{#p/basic}* It's possible that you may have a problem."
      ],
      petText16: () => [
         '<32>{#p/human}* (Canis Minor is unpettable, but appreciates the attempt.)',
         ...(world.goatbro ? [ '<32>{#p/asriel2}* Stop.' ] : [])
      ],
      petText17: () => [
         '<32>{#p/human}* (You pet Canis Minor.)',
         '<32>{#p/basic}* Perhaps mankind was not meant to pet this much.',
         ...(world.goatbro ? [ '<32>{#p/asriel2}* Please stop.' ] : [])
      ],
      petText18: () => [
         '<32>{#p/human}* (You pet Canis Minor.)',
         '<32>{#p/basic}* It continues.',
         ...(world.goatbro ? [ '<32>{#p/asriel2}* ...' ] : [])
      ],
      petText19: () => [
         '<32>{#p/human}* (But Canis Minor was beyond your reach.)',
         ...(world.goatbro ? [ "<32>{#p/asriel2}* Okay, it's over.\n* Now kill this idiot already." ] : [])
      ],
      petText20: () => [
         '<32>{#p/human}* (Really now.)',
         '<32>{#p/basic}* ... really now.',
         ...(world.goatbro ? [ '<32>{#p/asriel2}* Really now...' ] : [])
      ],
      statusX: [ "<32>{#p/asriel2}* It's vulnerable." ],
      status0: () => (world.goatbro ? [ '<32>{#p/asriel2}* Canis Minor.' ] : [ '<32>{#p/story}* Canis Minor appears.' ]),
      status1: () =>
         world.goatbro
            ? [ '<32>{#p/asriel2}* Canis Minor.' ]
            : [ '<32>{#p/story}* Canis Minor tilts its head to one side.' ],
      status2: () =>
         world.goatbro
            ? [ '<32>{#p/asriel2}* Canis Minor.' ]
            : [ '<32>{#p/story}* Canis Minor thinks your weapon is a dog treat.' ],
      status3: () =>
         world.goatbro
            ? [ '<32>{#p/asriel2}* Canis Minor.' ]
            : [ '<32>{#p/story}* Canis Minor is not really paying attention.' ],
      status4: () => (world.goatbro ? [ '<32>{#p/asriel2}* Canis Minor.' ] : [ '<32>{#p/story}* Smells like dog chow.' ]),
      status5: () =>
         world.goatbro ? [ '<32>{#p/asriel2}* Canis Minor.' ] : [ '<32>{#p/story}* Canis Minor is barking excitedly.' ],
      status6: () =>
         world.goatbro ? [ '<32>{#p/asriel2}* Canis Minor.' ] : [ '<32>{#p/story}* Canis Minor is overstimulated.' ],
      status7: () =>
         world.goatbro
            ? [ '<32>{#p/asriel2}* Canis Minor.' ]
            : [ '<32>{#p/story}* Canis Minor shows no signs of stopping.' ],
      status8: () =>
         world.goatbro ? [ '<32>{#p/asriel2}* Canis Minor.' ] : [ '<32>{#p/story}* Canis Minor is lowering.' ],
      status9: () =>
         world.goatbro ? [ '<32>{#p/asriel2}* Canis Minor.' ] : [ '<32>{#p/story}* Canis Minor learns to code.' ],
      status10: () =>
         world.goatbro
            ? [ '<32>{#p/asriel2}* Canis Minor.' ]
            : [ "<32>{#p/story}* Canis Minor is whining because it can't see you." ],
      status11: () => (world.goatbro ? [ '<32>{#p/asriel2}* Canis Minor.' ] : [ '<32>{#p/story}* Hello there.' ]),
      status12: () =>
         world.goatbro
            ? [ '<32>{#p/asriel2}* Canis Minor.' ]
            : [ '<32>{#p/story}* Canis Minor is questioning your life choices.' ],
      status13: () =>
         world.goatbro
            ? [ '<32>{#p/asriel2}* Canis Minor.' ]
            : [ '<32>{#p/story}* Canis Minor has gone where no dog has gone before.' ]
   },
   b_opponent_dogamy: {
      act_check: () =>
         world.goatbro
            ? [ '<32>{#p/asriel2}* Dogamy, the pathetic dog.\n* Relies entirely on his over- aggressive partner.' ]
            : [ '<32>{#p/story}* DOGAMY - ATK 14 DEF 5\n* Husband of Dogaressa.\n* Knows only what he smells.' ],
      act_check2: [ '<32>{#p/story}* DOGAMY - ATK 14 DEF 5\n* Recently widowed.\n* Knows only the pain of loss.' ],
      act_check3: [ '<32>{#p/story}* DOGAMY - ATK 14 DEF 5\n* Husband of Dogaressa.\n* Knows more than ever before.' ],
      act_check4: [ "<32>{#p/story}* DOGAMY - ATK 14 DEF 5\n* Husband of Dogaressa.\n* Doesn't mind sharing...?" ],
      act_check5: [ "<32>{#p/story}* DOGAMY - ATK 14 DEF 5\n* Husband of Dogaressa.\n* Wouldn't mind leaving...?" ],
      fetchText: [
         '<32>{#p/human}* (You throw the spanner.)\n* (The dogs run to get it.)\n* (You play fetch for a while.)'
      ],
      fetchTextLone: () => [
         '<32>{#p/human}* (You throw the spanner.)\n* (Dogamy ignores it and lets it roll off the edge.)',
         ...(world.goatbro && SAVE.flag.n.ga_asrielSpannerComment++ < 1 ? [ '<32>{#p/asriel2}* Saw that coming.' ] : [])
      ],
      flirtTalk1: [ '<11>{#p/basic}{~}Ah!\nBut why...!?' ],
      flirtTalk2: [ '<11>{#p/basic}{~}Love is in the air?' ],
      flirtTalk3: [ "<11>{#p/basic}{~}You didn't just..." ],
      flirtTalk4: [ "<11>{#p/basic}{~}What's the puppy doing?" ],
      flirtText: [
         '<32>{#p/human}* (You flirt with Dogamy.)',
         "<32>{#p/basic}* Your... pheromones, reach Dogamy's snout."
      ],
      flirtTextLone: [ '<32>{#p/human}* (You flirt with Dogamy.)', "<32>{#p/basic}* Dogamy's expression is unchanged." ],
      loneStatus: () =>
         world.goatbro
            ? [ '<32>{#p/asriel2}* One left.' ]
            : [ '<32>{#p/story}* Dogaressa is intent on kicking human tail.' ],
      loneTalk1: [ '<11>{#p/basic}{~}Whine.' ],
      loneTalk2: [ '<11>{#p/basic}{~}Whimper.' ],
      loneTalk3: [ '<11>{#p/basic}{~}Shake.' ],
      name: '* Dogamy',
      fetchStatus: [ '<32>{#p/story}* Married dogs love fetch!' ],
      otherPet: [ '<11>{#p/basic}{~}...' ],
      petNeedStatus: () =>
         world.goatbro
            ? [ '<32>{#p/asriel2}* Dogamy and Dogaressa.' ]
            : [ '<32>{#p/story}* Dogaressa is looking for affection.' ],
      petStatus: () =>
         world.goatbro
            ? [ "<32>{#p/asriel2}* They're vulnerable." ]
            : [ "<32>{#p/story}* The dogs' minds have been expanded." ],
      petTalk1: [ '<11>{#p/basic}{~}Paws off you smelly human.' ],
      petTalk1x: [ '<11>{#p/basic}{~}Paws off you weird puppy.' ],
      petTalk2: [ '<11>{#p/basic}{~}Wow!!!\nPet by another pup!!!' ],
      petTalk3: [ "<11>{#p/basic}{~}Stop!\nDon't touch her!" ],
      petTalk4: [ '<11>{#p/basic}{~}What\nabout\nme......' ],
      petTalk5: [ '<11>{#p/basic}{~}Thank\nyou...' ],
      petText: [ '<32>{#p/human}* (You pet Dogamy.)' ],
      petTextLone: [ '<32>{#p/human}* (You try to pet Dogamy, but he cowers in fear.)' ],
      randTalk1: () =>
         world.goatbro
            ? [ '<11>{#p/basic}{~}The prince has lost his mind...' ]
            : [ "<11>{#p/basic}{~}Take my wife...\n's fleas." ],
      randTalk2: () =>
         world.goatbro ? [ '<11>{#p/basic}{~}You have come far...' ] : [ "<11>{#p/basic}{~}Don't touch my hot dog." ],
      randTalk3: () =>
         world.goatbro
            ? [ "<11>{#p/basic}{~}We'll take you down!" ]
            : [ '<11>{#p/basic}{~}Number one puppy-dog eyes champs K-614!!' ],
      randTalk4: () =>
         world.goatbro ? [ "<11>{#p/basic}{~}You won't win this time..." ] : [ "<11>{#p/basic}{~}Let's kick human tail!!" ],
      resmellStatus: () =>
         world.goatbro
            ? [ '<32>{#p/asriel2}* Dogamy and Dogaressa.' ]
            : [ '<32>{#p/story}* The dogs think that you may be a lost puppy.' ],
      resmellText1: [
         '<32>{#p/human}* (You encourage the dogs to sniff you again.)',
         '<32>* (You smell just as weird as before.)'
      ],
      resmellText2: [
         '<32>{#p/human}* (You encourage the dogs to sniff you again.)',
         '<32>* (After rolling in the dirt, you smell alright.)'
      ],
      resmellText3: [
         '<32>{#p/human}* (You encourage the dogs to sniff you again, but they already know you smell fine.)'
      ],
      resmellTextFetch: [
         '<32>{#p/human}* (You encourage the dogs to sniff you, but they seem occupied with other things.)'
      ],
      resmellTextLone: [ "<32>{#p/human}* (You encourage Dogamy to sniff you, but he won't even lift up his snout.)" ],
      rollStatus: () =>
         world.goatbro
            ? [ "<32>{#p/asriel2}* You're going to get your clothes dirty, $(name)." ]
            : [ '<32>{#p/story}* The dogs may want to re-smell you.' ],
      rollText: () => [
         '<32>{#p/human}* (You roll around in the dirt.)\n* (It appears to be synthetic.)',
         '<32>{#p/basic}* Your scent is changing...',
         ...(world.goatbro ? [ '<32>{#p/asriel2}* I have questions.' ] : [])
      ],
      rollText2: [
         '<32>{#p/human}* (You roll around in the dirt.)\n* (It appears to be synthetic.)',
         '<33>{#p/basic}* Your scent has already changed.'
      ],
      rollTextLone: () => [
         "<32>{#p/human}* (You roll around in Dogaressa's remains.)",
         '<32>{#p/basic}* Dogamy looks even more defeated than before.',
         ...(world.goatbro ? [ '<32>{#p/asriel2}* ...' ] : [])
      ],
      smellTalk1: [ "<11>{#p/basic}{~}Hm?\nWhat's that smell?" ],
      smellTalk2: [ '<11>{#p/basic}{~}What!\nSmells like a...' ],
      smellTalk3: [ '<11>{#p/basic}{~}Ah!\nSuch a lovely smell...' ],
      status1: () =>
         world.goatbro
            ? [ '<32>{#p/asriel2}* Dogamy and Dogaressa.' ]
            : [ '<32>{#p/story}* The dogs keep shifting their axes to protect each other.' ],
      status2: () =>
         world.goatbro
            ? [ '<32>{#p/asriel2}* Dogamy and Dogaressa.' ]
            : [ '<32>{#p/story}* The dogs are re-evaluating your smell.' ],
      status3: () =>
         world.goatbro
            ? [ '<32>{#p/asriel2}* Dogamy and Dogaressa.' ]
            : [ '<32>{#p/story}* The dogs are practicing for the next couples contest.' ],
      status4: () =>
         world.goatbro
            ? [ '<32>{#p/asriel2}* Dogamy and Dogaressa.' ]
            : [ '<32>{#p/story}* The dogs are whispering sweet nothings to each other.' ],
      susText: [ "<32>{#p/basic}* The dogs still think you're a smelly human." ],
      fetchTalk: [ '<11>{#p/basic}{~}Fetch is so much fun!' ]
   },
   b_opponent_dogaressa: {
      act_check: () =>
         world.goatbro
            ? [ "<32>{#p/asriel2}* Dogaressa, the rowdy dog.\n* Without her hubby, she'd lose herself completely." ]
            : [ '<32>{#p/story}* DOGARESSA - ATK 14 DEF 5\n* This puppy finds her hubby lovely. SMELLS ONLY?' ],
      act_check2: [ '<32>{#p/story}* DOGARESSA - ATK 14 DEF 5\n* This puppy misses her hubby dearly. KILLS ONLY?' ],
      act_check3: [ '<32>{#p/story}* DOGARESSA - ATK 14 DEF 5\n* Things are going quite alright for this puppy.' ],
      act_check4: [
         "<32>{#p/story}* DOGARESSA - ATK 14 DEF 5\n* Her hubby isn't the only thing this puppy finds lovely."
      ],
      act_check5: [ "<32>{#p/story}* DOGAMY - ATK 14 DEF 5\n* This puppy is afraid for her hubby's safety." ],
      fetchTextLone: () => [
         '<32>{#p/human}* (You throw the spanner.)\n* (Dogaressa takes it and smashes it to pieces.)',
         ...(world.goatbro && SAVE.flag.n.ga_asrielSpannerComment++ < 1 ? [ '<32>{#p/asriel2}* Saw that coming.' ] : [])
      ],
      flirtTalk1: [ '<11>{#p/basic}{~}(Hey! Knock it off!)' ],
      flirtTalk2: [ '<11>{#p/basic}{~}(This just gets weirder and weirder.)' ],
      flirtTalk3: [ '<11>{#p/basic}{~}(... flirt with me! Ugh!)' ],
      flirtTalk4: [ '<11>{#p/basic}{~}(I think it loves me. A lot.)' ],
      flirtText: [
         '<32>{#p/human}* (You flirt with Dogaressa.)',
         "<32>{#p/basic}* Your... pheromones, reach Dogaressa's snout."
      ],
      flirtTextLone: [
         '<32>{#p/human}* (You flirt with Dogaressa.)',
         "<32>{#p/basic}* Dogaressa's expression is unchanged."
      ],
      loneStatus: () =>
         world.goatbro ? [ '<32>{#p/asriel2}* One left.' ] : [ '<32>{#p/story}* Dogamy is brokenhearted.' ],
      loneTalk1: [ '<11>{#p/basic}{~}(Misery awaits you.)' ],
      loneTalk2: [ "<11>{#p/basic}{~}(You'll suffer for this.)" ],
      name: '* Dogaressa',
      otherPet: [ '<11>{#p/basic}{~}(...)' ],
      petNeedStatus: () =>
         world.goatbro
            ? [ '<32>{#p/asriel2}* Dogamy and Dogaressa.' ]
            : [ '<32>{#p/story}* Dogamy is looking for affection.' ],
      petTalk1: [ "<11>{#p/basic}{~}(That's not your husband, OK?)" ],
      petTalk2: [ "<11>{#p/basic}{~}(Well, don't leave me out!)" ],
      petTalk3: [ '<11>{#p/basic}{~}(Beware of dog.)' ],
      petTalk4: [ '<11>{#p/basic}{~}(A dog that pets dogs... amazing!)' ],
      petTalk5: [ "<11>{#p/basic}{~}(You're the best!)" ],
      petText: [ '<32>{#p/human}* (You pet Dogaressa.)' ],
      petTextLone: [ '<32>{#p/human}* (You try to pet Dogaressa, but she just growls at you.)' ],
      randTalk1: () => (world.goatbro ? [ '<11>{#p/basic}{~}(Indeed.)' ] : [ "<12>{#p/basic}{~}(Don't,\nactually...)" ]),
      randTalk2: () => (world.goatbro ? [ '<11>{#p/basic}{~}(Far enough.)' ] : [ '<11>{#p/basic}{~}(He means me.)' ]),
      randTalk3: () =>
         world.goatbro
            ? [ '<11>{#p/basic}{~}(By force, if necessary.)' ]
            : [ '<11>{#p/basic}{~}(Of course we were first.)' ],
      randTalk4: () =>
         world.goatbro ? [ "<11>{#p/basic}{~}(Time's up.)" ] : [ '<11>{#p/basic}{~}(Do humans have tails?)' ],
      resmellTalkLone: [ '<11>{#p/basic}{~}(Is that what you wanted??)\n(Huh?)' ],
      resmellTextLone: [
         '<33>{#p/human}* (You encourage Dogaressa to sniff you, and she forcefully shoves her snout in your face.)'
      ],
      rollTextLone: () => [
         "<32>{#p/human}* (You roll around in Dogamy's remains.)",
         '<32>{#p/basic}* Dogaressa looks even angrier than before.',
         ...(world.goatbro ? [ '<32>{#p/asriel2}* ...' ] : [])
      ],
      smellTalk1: [ '<11>{#p/basic}{~}(A smell mystery...)' ],
      smellTalk2: [ '<11>{#p/basic}{~}(Are you actually a little puppy!?)' ],
      smellTalk3: [ '<11>{#p/basic}{~}(The smell of a weird puppy!)' ],
      fetchTalk: [ '<11>{#p/basic}{~}(We love to play fetch.)' ]
   },
   b_opponent_greatdog: {
      act_check: () =>
         world.goatbro
            ? [ '<33>{#p/asriel2}* Canis Major, the brainless dog.\n* The biggest and dumbest dog of the bunch.' ]
            : [ "<32>{#p/story}* CANIS MAJOR - ATK 15 DEF 8\n* It's so excited that it thinks fighting is just play." ],
      act_check2: [ '<32>{#p/story}* CANIS MAJOR - ATK 15 DEF 8\n* Desperate for some love and attention...' ],
      act_check3: [ '<32>{#p/story}* CANIS MAJOR - ATK 15 DEF 8\n* All tuckered out.' ],
      act_flirt: [
         '<32>{#p/human}* (You flirt with Canis Major.)',
         '<32>{#p/basic}* Canis Major awkwardly cocks its head to one side.'
      ],
      beckonText: [
         '<32>{#p/human}* (You call Canis Major.)',
         '<32>{#p/basic}* Canis Major bounds towards you, flecking slobber into your face.'
      ],
      closeStatus: () =>
         world.goatbro ? [ '<32>{#p/asriel2}* Canis Major.' ] : [ '<32>{#p/story}* Canis Major seeks affection.' ],
      closeText: [ "<32>{#p/human}* (You call Canis Major.)\n* (Only the dog's ears perk up.)" ],
      doneText: [ '<32>{#p/basic}* Canis Major decides you are too boring.' ],
      fetch: () =>
         world.goatbro
            ? [
                 '<32>{#p/human}* (You throw the spanner.)\n* (Canis Major absorbs it and carries on with its life.)',
                 '<32>{#p/asriel2}* Yeah... that makes sense.'
              ]
            : [
                 '<32>{#p/human}* (You throw the spanner.)\n* (The dog runs to get it.)\n* (You play fetch for a while.)'
              ],
      hurtStatus: () =>
         world.goatbro ? [ '<32>{#p/asriel2}* Almost dead.' ] : [ '<32>{#p/story}* Canis Major is panting slowly.' ],
      ignoreStatus1: () =>
         world.goatbro
            ? [ '<32>{#p/asriel2}* Canis Major.' ]
            : [ '<32>{#p/story}* Canis Major just wants some affection.' ],
      ignoreStatus2: () =>
         world.goatbro ? [ '<32>{#p/asriel2}* Canis Major.' ] : [ '<32>{#p/story}* Canis Major is making puppy-dog eyes.' ],
      name: '* Canis Major',
      fetchStatus: [ '<32>{#p/story}* Canis Major love fetch!' ],
      petStatus1: () =>
         world.goatbro
            ? [ '<32>{#p/asriel2}* Canis Major.' ]
            : [ '<32>{#p/story}* Canis Major is patting the ground with its front paws.' ],
      petStatus2: () =>
         world.goatbro ? [ '<32>{#p/asriel2}* Canis Major.' ] : [ '<32>{#p/story}* Canis Major wants some TLC.' ],
      petStatus3: () =>
         world.goatbro ? [ '<32>{#p/asriel2}* ...' ] : [ '<32>{#p/story}* Pet capacity now at forty percent.' ],
      petStatus4: () =>
         world.goatbro ? [ "<32>{#p/asriel2}* It's vulnerable." ] : [ '<32>{#p/story}* Canis Major is contented.' ],
      petText0: [ '<32>{#p/human}* (But Canis Major was too far away to pet.)' ],
      petText1: [
         '<32>{#p/human}* (Canis Major curls up in your lap as it is pet by you.)',
         '<32>* (It gets so comfortable that it falls asleep.)',
         '<32>* (The dog snores, and snores some more...)',
         '<32>* (... until eventually, it wakes up.)',
         "<32>{#p/basic}* Canis Major's excitement begins rising without warning!"
      ],
      petText2: [
         '<32>{#p/human}* (You try to pet the dog...)',
         '<32>* (... but its excitement is generating an energy field that prevents petting.)'
      ],
      petText3: [
         '<32>{#p/human}* (You pet the dog.)\n* (It sinks its entire weight into you.)',
         "<32>* (Your movement slows, but you still haven't pet enough.)"
      ],
      petText4: [
         '<32>{#p/human}* (You pet decisively.)\n* (Pet capacity now at one- hundred percent.)',
         '<32>{#p/basic}* Canis Major flops over with its legs hanging in the air.'
      ],
      petText5: [
         '<32>{#p/human}* (You give the dog a tummy rub.)',
         '<32>{#p/basic}* Canis Major is whining in bliss...'
      ],
      playText1: [ '<32>{#p/human}* (But Canis Major was not excited enough to play with yet.)' ],
      playText2: [
         '<32>{#p/human}* (You conjure a hologram for the dog to chase after.)',
         '<32>* (Eventually, the hologram loses cohesion and dissipates.)',
         '<32>* (Canis Major collects all the residual energy in the area and brings it to you.)',
         '<32>{#p/basic}* Canis Major, tired, rests its head on you...'
      ],
      playText3: [ '<32>{#p/basic}* Canis Major is too tired to play.' ],
      playText4: [ '<32>{#p/human}* (But Canis Major was already in the middle of playing fetch.)' ],
      status0: () => (world.goatbro ? [ '<32>{#p/asriel2}* Canis Major.' ] : [ '<32>{#p/story}* Canis Major appears.' ]),
      status1: () =>
         world.goatbro ? [ '<32>{#p/asriel2}* Canis Major.' ] : [ '<32>{#p/story}* Canis Major is watching you intently.' ],
      status2: () =>
         world.goatbro
            ? [ '<32>{#p/asriel2}* Canis Major.' ]
            : [ '<32>{#p/story}* Canis Major is waiting for your command.' ],
      status3: () =>
         world.goatbro
            ? [ '<32>{#p/asriel2}* Canis Major.' ]
            : [ '<32>{#p/story}* Smells like fresh-squeezed puppy juice.' ],
      waitText: [ '<32>{#p/basic}* Canis Major inches closer.' ]
   },
   b_opponent_papyrus: {
      act_flirt: [ '<32>{#p/human}* (You flirt with Papyrus.)' ],
      act_insult: [ '<32>{#p/human}* (You insult Papyrus.)' ],
      spanner: [ '<32>{#p/human}* (You throw the spanner.)\n* (Papyrus catches it in his mouth and returns it to you.)' ],
      spannerTalk1: [ '<15>{#p/papyrus}{#f/20}WHAT A JAW- DROPPING MOVE!' ],
      spannerTalk2: [ '<15>{#p/papyrus}{#f/20}I COULD DO THIS ALL DAY!' ],
      spannerTalk3: [ '<15>{#p/papyrus}{#f/20}JUST LIKE THEY DO IT ON TV!' ],
      spannerTalk4: [ '<15>{#p/papyrus}{#f/20}NYEH HEH HEH!' ],
      sparableSpannerTalk1: [ '<15>{#p/papyrus}{#f/20}NOW, SHOW ME YOUR MERCY!' ],
      sparableSpannerTalk2: [ '<15>{#p/papyrus}{#f/20}...' ],
      bullySpareTalk: [
         '<15>{#p/papyrus}{#f/27}SAY... IS IT GETTING DARK OUT HERE?',
         "<15>{#p/papyrus}{#f/27}MAYBE CAPTURING YOU WASN'T SUCH A GREAT IDEA...",
         "<15>{#f/15}YEAH!!! I CAN TELL YOU'RE DESPERATE FOR MY MERCY!",
         '<15>{#f/20}I, THE GREAT PAPYRUS, WILL OBLIGE YOU!!',
         '<15>{#f/20}I WILL {@fill:#f00}SPARE{@fill:#000} YOU, HUMAN!!!',
         "<15>{#f/27}SO... NOW'S YOUR CHANCE... TO ACCEPT MY {@fill:#f00}MERCY{@fill:#000}..."
      ],
      act_check: () =>
         world.genocide
            ? [ '<32>{#p/story}* PAPYRUS - ATK 3 DEF 3\n* Sans a brother.' ]
            : [ '<32>{#p/story}* PAPYRUS - ATK 20 DEF 20\n* Likes to say "Nyeh Heh Heh!"' ],
      act_check2: [ '<32>{#p/story}* PAPYRUS - ATK 20 DEF 20\n* Everything is fine.' ],
      act_check3: [ '<32>{#p/story}* PAPYRUS - ATK 20 DEF 20\n* The most benevolent and merciful guardsman!' ],
      capture1: [
         "<15>{#p/papyrus}{#f/20}LOOKS LIKE YOU'RE GOING TO THE CAPTURE ZONE!!",
         '<15>{#f/24}... ALSO KNOWN AS THE GARAGE.',
         '<15>{#f/20}A HEAVILY FORTIFIED GARAGE, THAT IS!',
         '<15>{#f/20}NYEH HEH HEH HEH HEH HEH HEH!!!'
      ],
      capture2: [
         '<15>{#p/papyrus}{#f/24}WELL!!! YOU MAY HAVE CLEVERLY ESCAPED BEFORE...',
         "<15>{#f/20}BUT THIS TIME, I'VE UPGRADED THE FACILITIES.",
         '<15>{#f/20}NOT ONLY WILL YOU BE STUCK...',
         "<15>{#f/15}BUT YOU WON'T EVEN WANT TO LEAVE!!!",
         '<15>{#f/20}NYEH HEH HEH HEH HEH HEH HEH!!!'
      ],
      capture3: [
         '<15>{#p/papyrus}{#f/20}YOU ARE... DETERMINED!',
         "<15>BUT!!\nIT JUST WON'T WORK ON ME!",
         '<15>I AM THE DETERMINEST!',
         '<99>{#f/24}AND IF YOU\nTHINK YOU ARE\nDETERMINESTER...',
         '<15>{#f/20}THAT IS WRONG!\nGRAMATICALLY WRONG!',
         '<15>{#f/24}BECAUSE THE CORRECT FORM WOULD BE...',
         '<15>{#f/20}NOT AS DETERMINEST AS PAPYRUS, THE DETERMINESTEST!',
         '<15>{#f/10}I HOPE YOU ENJOYED THIS LESSON.',
         '<15>{#f/20}NYEH HEH HEH HEH HEH HEH HEH!!!'
      ],
      capture4: [
         '<15>{#p/papyrus}{#f/24}ARE YOU SURE YOU CAN KEEP THIS UP?',
         '<15>{#f/21}BEING CAPTURED AGAIN MUST BE FRUSTRATING...',
         "<15>{#f/21}I DON'T WANT YOU TO GET MAD ABOUT FAILING REPEATEDLY...",
         '<15>{#f/20}PERHAPS NEXT TIME WE CAN SKIP THE BATTLE!',
         "<15>{#f/20}FOR NOW, THOUGH, IT'S OFF TO THE CAPTURE ZONE!!!",
         '<15>{#f/20}NYEH HEH HEH HEH HEH HEH HEH!!!'
      ],
      capture5: [
         '<15>{#p/papyrus}{#f/27}WOWIE... AGAIN???',
         '<15>{#f/15}WELL, IF YOU INSIST...!',
         '<15>{#f/20}NYEH HEH HEH HEH HEH HEH HEH!!!'
      ],
      checkTalk: [ '<15>{#p/papyrus}{#f/20}NYEH HEH HEH!' ],
      death1: () =>
         world.genocide
            ? [ '<15>{#p/papyrus}{#f/27}N...\nN-NO...' ]
            : [ "<15>{#p/papyrus}{#f/21}WELL, THAT'S NOT WHAT I WAS EXPECTING..." ],
      death2: () =>
         world.genocide
            ? [ '<15>{#p/papyrus}{#f/21}SANS, I...', '<15>{#f/33}{@random:1.1,1.1}I FAILED YOU...' ]
            : [ '<15>{#p/papyrus}{#f/27}... A-AT LEAST I STILL HAVE MY HEAD!' ],
      dots: [ '<32>{#p/basic}* ...' ],
      flirt0: [ '<32>{#p/basic}* Cute.' ],
      flirt1: [
         '<15>{#p/papyrus}{#f/20}WHAT!?\nF-F-FLIRTING!?',
         '<15>SO YOU FINALLY REVEAL YOUR {@fill:#f00}ULTIMATE FEELINGS{@fill:#000}!',
         "<15>W-WELL!\nI'M A SKELETON WITH VERY HIGH STANDARDS!!!",
         '<15>WHAT CAN YOU DO IN RETURN FOR MY AFFECTION???'
      ],
      flirt2: [
         '<32>{#p/human}* (Your reply?){!}µµµI have\nµµµµI can makeµµµµzero redeeming\nµµµµspaghettiµµµµµqualities{#c/0/4/2}'
      ],
      flirt3a: [ '<15>{#p/papyrus}{#f/24}THAT CONFIDENCE... IT REMINDS ME OF...' ],
      flirt3b: [ '<15>{#p/papyrus}{#f/24}THAT HUMILITY... IT REMINDS ME OF...' ],
      flirt4: [
         '<15>{#f/22}MYSELF!!!',
         "<15>{#f/10}YOU'RE MEETING ALL MY STANDARDS!!!",
         '<15>{#f/27}I GUESS THIS MEANS I HAVE TO GO ON A DATE WITH YOU...?'
      ],
      flirt5: [ "<15>{#p/papyrus}{#f/20}LET'S DATE L-LATER!!\nAFTER I CAPTURE YOU!" ],
      flirt6: [ "<32>{#p/human}* (You flirt, but to no avail.)\n* (It seems acting won't escalate this battle.)" ],
      flirt7: [ '<32>{#p/human}* (But Papyrus was too busy fighting to hear you.)' ],
      flirtStatus1: [ '<32>{#p/story}* Papyrus is thinking about what to wear for his date.' ],
      flirtStatus2: [ '<32>{#p/story}* Papyrus dabs some Bone Cologne behind his ear.' ],
      flirtStatus3: [ '<32>{#p/story}* Papyrus is thinking about what to cook for his date.' ],
      flirtStatus4: [ '<32>{#p/story}* Papyrus dabs marinara sauce behind his ear.' ],
      flirtStatus5: [ '<32>{#p/story}* Papyrus is thinking about sexy rectangles.' ],
      flirtStatus6: [ '<32>{#p/story}* Papyrus dabs MTT-brand Bishie Cream behind his ear.' ],
      flirtStatus7: [ '<32>{#p/story}* Papyrus dabs MTT-brand Anime Powder behind his ear.' ],
      flirtStatus8: [ '<32>{#p/story}* Papyrus dabs MTT-brand Cute Juice behind his ear.' ],
      flirtStatus9: [ "<32>{#p/story}* Papyrus realizes he doesn't have ears." ],
      flirtStatus10: [ '<32>{#p/story}* Papyrus has random lumps of ointment on his head.' ],
      flirtStatus11: [ "<32>{#p/story}* ... he's still thinking about sexy rectangles." ],
      hurtStatus: [ '<32>{#p/story}* Papyrus is at the edge of defeat.' ],
      insult1: [ '<15>{#p/papyrus}{#f/20}HOW SELFLESS!', '<15>{#f/21}YOU WANT ME TO FEEL BETTER ABOUT FIGHTING YOU...' ],
      insult2: [ "<15>{#p/papyrus}{#f/15}THERE'S NO NEED TO LIE TO YOURSELF!!!" ],
      insult3: [ "<32>{#p/human}* (You insult, but to no avail.)\n* (It seems acting won't escalate this battle.)" ],
      insult4: [ '<32>{#p/human}* (But Papyrus was too busy fighting to hear you.)' ],
      name: '* Papyrus',
      randomStatus1: [ '<32>{#p/story}* Papyrus readies a bone attack.' ],
      randomStatus2: [ '<32>{#p/story}* Papyrus prepares a non-bone attack then spends a minute fixing his mistake.' ],
      randomStatus3: [ '<32>{#p/story}* Papyrus is cooking.' ],
      randomStatus4: [ '<32>{#p/story}* Papyrus whispers "Nyeh heh heh!"' ],
      randomStatus5: [ '<32>{#p/story}* Papyrus is rattling his bones.' ],
      randomStatus6: [ '<32>{#p/story}* Papyrus is trying hard to play it cool.' ],
      randomStatus7: [ '<32>{#p/story}* Papyrus is considering his options.' ],
      randomStatus8: [ '<32>{#p/story}* Smells like bones.' ],
      randomStatus9: [ '<32>{#p/story}* Papyrus remembered a good joke Sans told and is smiling.' ],
      spaghetti1: () => [
         '<15>{#p/papyrus}{#f/12}MY SPAGHETTI!',
         "<15>{#p/papyrus}{#f/13}AND YOU LOOK LIKE YOU'RE ENJOYING IT...",
         papreal()
            ? "<15>{#p/papyrus}{#f/27}WELL, I'M GLAD I COULD MAKE YOU HAPPY!"
            : [
                 '<15>{#p/papyrus}{#f/27}WELL THEN!\nI LOOK FORWARD TO OUR MEAL TOGETHER!',
                 '<15>{#p/papyrus}{#f/27}WELL THEN!\nI LOOK FORWARD TO MAKING SOME MORE FOR YOU!'
              ][(SAVE.data.n.state_papyrus_spaghet + 1) % 2]
      ],
      spaghetti2: [ "<32>{#p/basic}* If Papyrus wasn't so busy fighting, he might've noticed that." ],
      specialStatus1: [ '<32>{#p/story}* Special attack.' ],
      specialStatus2: [ '<32>{#p/story}* Papyrus is going all out.' ],
      specialStatus3: [ '<32>{#p/story}* Papyrus has thrown all logic out the window.' ],
      specialStatus4: [ '<32>{#p/story}* Papyrus notices the lack of logic and brings it back inside.' ],
      specialStatus5: [ '<32>{#p/story}* Papyrus is sweating.' ],
      specialStatus6: [ "<32>{#p/story}* Papyrus is at his wit's end." ],
      status1: [ '<32>{#p/story}* Papyrus is sparing you.' ],
      status2: [ '<32>{#p/story}* Papyrus blocks the way!' ],
      turnTalk0a: [ "<15>{#p/papyrus}{#f/24}SO, YOU'RE SERIOUS..." ],
      turnTalk0b: [ "<15>{#p/papyrus}{#f/24}SO, YOU WON'T FIGHT..." ],
      turnTalk0c: [ "<15>{#p/papyrus}{#f/20}THEN LET'S SEE HOW YOU HANDLE MY FABLED 'BLUE ATTACK!'" ],
      turnTalk0x: [
         "<15>{#p/papyrus}{#f/10}YOU'RE BLUE NOW.",
         "<15>{#f/10}THAT'S MY ATTACK!",
         '<15>{#f/20}NYEH HEH HEH HEH HEH HEH HEH HEH HEH!!!'
      ],
      turnTalk1a: [ '<15>{#p/papyrus}{#f/20}BEHOLD!' ],
      turnTalk1b: [ '<15>{#p/papyrus}{#f/20}HMMM... I WONDER WHAT I SHOULD WEAR...' ],
      turnTalk2a: [ '<15>{#p/papyrus}{#f/20}HOW HIGH CAN YOU JUMP?' ],
      turnTalk2b: [ "<15>{#p/papyrus}{#f/22}WHAT!?\nI'M NOT THINKING ABOUT THE DATE!!" ],
      turnTalk3: () =>
         world.postnoot
            ? [ '<15>{#p/papyrus}{#f/21}... IS IT JUST ME, OR DOES THE AIR SEEM A LITTLE WEIRD?' ]
            : [ "<15>{#p/papyrus}{#f/20}YEAH!\nDON'T MAKE ME USE MY {@fill:#f00}SPECIAL ATTACK{@fill:#000}!" ],
      turnTalk4: () =>
         world.postnoot
            ? [ "<15>{#p/papyrus}{#f/20}OH WELL.\nI'M SURE IT'S NOTHING." ]
            : [ '<15>{#p/papyrus}{#f/20}I CAN ALMOST TASTE MY FUTURE POPULARITY!!!' ],
      turnTalk5: () =>
         world.postnoot
            ? [ '<15>{#p/papyrus}{#f/20}BESIDES, I SEE MARINARA SAUCE IN MY FUTURE!' ]
            : [ '<15>{#p/papyrus}{#f/20}PAPYRUS: UNPARALLELED SPAGHETTORE!' ],
      turnTalk6: () =>
         world.postnoot
            ? [ '<15>{#p/papyrus}{#f/20}AND A POSITION IN THE ELITE SQUAD!' ]
            : [ '<15>{#p/papyrus}{#f/20}PAPYRUS: ELITE SQUAD MEMBER!' ],
      turnTalk7: [ '<15>{#p/papyrus}{#f/10}UNDYNE WILL BE REALLY PROUD OF ME!!' ],
      turnTalk8: [ '<15>{#p/papyrus}{#f/20}THE KING WILL BUILD A STATUE OF ME IN THE CITADEL!!!' ],
      turnTalk9: [ "<15>{#p/papyrus}{#f/10}... AND I'LL MAKE SURE MY BROTHER GETS ONE TOO." ],
      turnTalk10: [ "<15>{#p/papyrus}{#f/27}WE'LL HAVE LOTS OF ADMIRERS!!\nBUT..." ],
      turnTalk11a: [ '<15>{#p/papyrus}{#f/20}HOW WILL I KNOW IF PEOPLE SINCERELY LIKE ME???' ],
      turnTalk11b: [ '<15>{#p/papyrus}{#f/20}WILL ANYONE LIKE ME LIKE YOU DO?' ],
      turnTalk12: [ '<15>{#p/papyrus}{#f/21}SOMEONE LIKE YOU IS REALLY RARE...' ],
      turnTalk13a: [ "<15>{#p/papyrus}{#f/21}I DON'T THINK THEY'LL LET YOU GO..." ],
      turnTalk13b: [ '<15>{#p/papyrus}{#f/21}AND DATING MIGHT BE KIND OF HARD...' ],
      turnTalk14: [ "<15>{#p/papyrus}{#f/26}AFTER YOU'RE CAPTURED AND SENT AWAY." ],
      turnTalk15: [ '<15>{#p/papyrus}{#f/17}URGH... WHO CARES!\nGIVE UP!!' ],
      turnTalk16: [ '<15>{#p/papyrus}{#f/15}GIVE UP OR FACE MY... {@fill:#f00}SPECIAL ATTACK{@fill:#000}!' ],
      turnTalk17: [ '<15>{#p/papyrus}{#f/20}YEAH!!!\nVERY SOON I WILL USE MY {@fill:#f00}SPECIAL ATTACK{@fill:#000}!' ],
      turnTalk18: [
         '<15>{#p/papyrus}{#f/20}THIS IS YOUR LAST CHANCE... BEFORE MY {@fill:#f00}SPECIAL ATTACK{@fill:#000}!'
      ],
      turnTalk19: [ '<15>{#p/papyrus}{#f/20}BEHOLD...!\nMY {@fill:#f00}SPECIAL ATTACK{@fill:#000}!' ],
      turnTalk19x: [
         '<15>{#p/papyrus}{#f/15}NYEH HEH HEH!',
         '<15>{#f/20}NO HUMAN HAS EVER FACED MY {@fill:#f00}SPECIAL ATTACK{@fill:#000} BEFORE!',
         '<15>{#f/20}PREPARE TO BE CAPTURED, ONCE AND FOR ALL!'
      ],
      turnTalk20: [ '<15>{#p/papyrus}{#f/20}SPECIAL ATTACK, FORMATION ALPHA!!' ],
      turnTalk21: [ '<15>{#p/papyrus}{#f/20}SPECIAL ATTACK, FORMATION BETA!!' ],
      turnTalk22: [ '<15>{#p/papyrus}{#f/20}SPECIAL ATTACK, FORMATION GAMMA!!' ],
      turnTalk23: [ '<15>{#p/papyrus}{#f/20}SPECIAL ATTACK, FORMATION DELTA!!' ],
      turnTalk24: [
         '<15>{#p/papyrus}{#f/27}WOWIE!\nARE YOU STRONG!',
         '<15>{#f/20}BUT NO FEAR!\nI WILL NOT BE DETERRED BY YOUR STRENGTH!',
         '<15>{#f/14}... SPECIAL ATTACK...',
         '<15>{#f/17}FORMATION {@fill:#f00}SIGMA{@fill:#000}!!!'
      ],
      turnTalk24x: [
         "<15>{#p/papyrus}{#f/27}WELL...! *HUFF* IT'S CLEAR... YOU CAN'T! *HUFF* BEAT ME!",
         '<15>{#f/15}YEAH!!! I CAN SEE YOU SHAKING IN YOUR BOOTS!!',
         '<15>{#f/20}I, THE GREAT PAPYRUS, ELECT TO GRANT YOU PITY!!',
         '<15>{#f/20}I WILL {@fill:#f00}SPARE YOU{@fill:#000}, HUMAN!!!',
         "<15>{#f/10}NOW'S YOUR CHANCE TO ACCEPT MY {@fill:#f00}MERCY{@fill:#000}."
      ],
      idleTalk: [ '<15>{#p/papyrus}{#f/20}...' ],
      secretFlirt1: [ '<15>{#p/papyrus}{#f/27}YOU WISH TO REMAIN WITH ME... FOREVER?', '<15>{#p/papyrus}{#f/21}HMM...' ],
      secretFlirt2: [
         '<15>{#p/papyrus}{#f/27}SOMETHING IS TRYING TO TEAR OUR LOVE APART?',
         '<15>{#p/papyrus}{#f/21}I WONDER...'
      ],
      secretFlirt2x: [
         "<15>{#p/papyrus}{#f/27}SO YOU -DON'T- WISH TO REMAIN WITH ME?",
         "<15>{#p/papyrus}{#f/14}BUT THEN... WHY WON'T YOU ACCEPT MY MERCY AND LEAVE ME?"
      ],
      secretFlirt3: [
         "<15>{#p/papyrus}{#f/25}UH, I DON'T THINK WE'VE GOTTEN -THAT- FAR YET...",
         '<15>{#p/papyrus}{#f/15}... BUT WE CAN SURE TRY LATER!'
      ],
      secretFlirt3x: [ "<15>{#p/papyrus}{#f/27}WAIT, ARE -YOU- THE ONE WHO'S TRYING TO TEAR OUR LOVE APART?" ],
      secretFlirt4: [ '<15>{#p/papyrus}{#f/24}WAIT, ARE YOU SUGGESTING SOME KIND OF... LOVE TRIANGLE???' ],
      secretFlirt4x: [
         "<15>{#p/papyrus}{#f/26}... SO YOU -DON'T- WANT TO TRY THAT LATER?",
         '<15>{#p/papyrus}{#f/24}AND NOT ONLY THAT, BUT...',
         '<15>{#p/papyrus}{#f/22}YOU NEVER EVEN WANTED TO BE WITH ME TO BEGIN WITH!?'
      ],
      secretFlirt5: [ "<15>{#p/papyrus}{#f/22}OR MAYBE IT'S MORE LIKE... A LOVE TRAPEZOID!" ],
      secretFlirt5x: [
         "<15>{#p/papyrus}{#f/21}NO?\nIT'S ACTUALLY A LOVE DI-ANGLE INSTEAD?",
         "<15>{#p/papyrus}{#f/18}BUT... THAT'S NOT EVEN A REAL SHAPE!",
         "<15>{#p/papyrus}{#f/27}ARE YOU SAYING THAT OUR LOVE, ISN'T TRULY REAL AFTER ALL!?"
      ],
      secretFlirt6: [
         '<15>{#p/papyrus}{#f/14}WAIT... I THINK I GET IT NOW!',
         '<15>{#p/papyrus}{#f/15}THE PRINCE IS JEALOUS OF YOUR AFFECTION FOR ME!',
         '<15>{#p/papyrus}{#f/24}SO... HE SPRUNG A TRAP TO PREVENT US FROM BEING TOGETHER!'
      ],
      secretFlirt6x: [
         "<15>{#p/papyrus}{#f/27}NO?\nBUT AT LEAST I'M ON THE RIGHT TRACK?",
         '<15>{#p/papyrus}{#f/24}WAIT... TRAPEZOID...',
         "<15>{#p/papyrus}{#f/22}ARE YOU SAYING THAT YOU'RE TRAPPED WITH ME, RIGHT NOW!?",
         "<15>{#p/papyrus}{#f/14}BUT THEN... WHY WON'T YOU ACCEPT MY MERCY AND ESCAPE?",
         '<15>{#p/papyrus}{#f/21}... THERE MUST BE SOMETHING ELSE GOING ON HERE.',
         '<15>{#p/papyrus}{#f/26}NO... YES.',
         '<15>{#p/papyrus}{#f/20}YES, YES, YES!!!',
         '<15>{#p/papyrus}{#f/20}I FINALLY UNDERSTAND IT NOW!',
         '<15>{#p/papyrus}{#f/15}THIS MUST BE THE WORK OF THAT "ASRIEL" FELLOW!',
         "<15>{#p/papyrus}{#f/14}SOMEHOW, HE'S OUTRIGHT PREVENTED YOU FROM SHOWING MERCY TO ME!"
      ],
      secretFlirt7: [
         '<15>{#p/papyrus}{#f/14}WELL.\nTHIS SIMPLY WILL NOT STAND!',
         '<15>{#p/papyrus}{#f/20}IN FACT, I HAVE THE PERFECT SOLUTION ALREADY!',
         "<15>{#p/papyrus}{#f/10}TO AVOID ANY ROMANTIC DRAMA, I'LL LEAVE POLITELY.",
         "<15>{#p/papyrus}{#f/24}THEN, WHEN YOU'RE ALONE WITH HIM ONCE AGAIN...",
         "<15>{#p/papyrus}{#f/25}YOU'LL BE IN THE PERFECT POSITION...",
         '<15>{#p/papyrus}{#f/15}TO ENSURE HE DOES NOT GET IN THE WAY OF YOUR FEELINGS!',
         '<15>{#p/papyrus}{#f/20}NYEH HEH HEH HEH HEH HEH HEH HEH HEH HEH!'
      ],
      secretFlirt8: [
         '<15>{#p/papyrus}{#f/20}FRET NOT, HUMAN!',
         '<15>{#p/papyrus}{#f/14}I, PAPYRUS, WILL MAKE SURE NO HARM COMES TO EITHER OF US!',
         '<15>{#p/papyrus}{#f/20}I WILL SPARE MYSELF FOR YOU!',
         '<15>{#p/papyrus}{#f/20}AND THEN, I WILL FIND A VERY SAFE PLACE TO HIDE.',
         "<15>{#p/papyrus}{#f/15}DON'T WORRY, HUMAN!\nPAPYRUS HAS THIS UNDER CONTROL!"
      ],
      secretInsult1: [ '<15>{#p/papyrus}{#f/27}UH... THANKS???' ],
      secretInsult2: [ '<15>{#p/papyrus}{#f/21}IDIOT... WHERE HAVE I HEARD THAT BEFORE...' ],
      secretInsult2x: [
         '<15>{#p/papyrus}{#f/22}OR... NOT?',
         '<15>{#p/papyrus}{#f/24}SO, LET ME GET THIS STRAIGHT.',
         '<15>{#p/papyrus}{#f/27}YOU MEANT TO SAY YOU... LOVE ME???',
         '<15>{#p/papyrus}{#f/27}AND THAT SOMETHING IS TRYING TO TEAR OUR LOVE APART?'
      ],
      secretInsult3: [ '<15>{#p/papyrus}{#f/29}NOW WHAT...' ],
      secretInsult3x: [
         "<15>{#p/papyrus}{#f/27}YOU MEAN I'M AN IDIOT FOR NOT NOTICING HOW MUCH YOU LOVE ME?",
         '<15>{#p/papyrus}{#f/28}AND THAT YOU WANT TO... UH...',
         "<15>{#p/papyrus}{#f/25}I-I MEAN, I DON'T THINK WE'VE GOTTEN -THAT- FAR YET...",
         '<15>{#p/papyrus}{#f/15}... BUT WE CAN SURE TRY LATER!'
      ],
      secretInsult4: [ "<15>{#p/papyrus}{#f/27}I'M NOT SMART ENOUGH TO REALIZE WHAT'S GOING ON...?" ],
      secretInsult4x: [
         "<15>{#p/papyrus}{#f/27}SO... YOU MEANT TO SAY WE'RE IN A LOVE TRIANGLE?",
         "<15>{#p/papyrus}{#f/19}WELL, IT'D CERTAINLY EXPLAIN YOUR ABRASIVE ATTITUDE!"
      ],
      secretInsult5: [
         '<15>{#p/papyrus}{#f/27}HUH? SHOOT FOR THE STARS INSTEAD OF SHOOTING MYSELF?',
         '<15>{#p/papyrus}{#f/17}BUT WHAT DOES IT MEAN...!'
      ],
      secretInsult5x: [
         '<15>{#p/papyrus}{#f/25}WAIT... YOU WANTED ME TO REALIZE THAT YOU SECRETLY LOVED ME?',
         "<15>{#p/papyrus}{#f/22}AND THAT WE'RE ACTUALLY IN A... LOVE TRAPEZOID!?"
      ],
      secretInsult6: [
         '<15>{#p/papyrus}{#f/14}WAIT... I THINK I GET IT NOW!',
         '<15>{#p/papyrus}{#f/21}IDIOT...',
         '<15>{#p/papyrus}{#f/21}SHOOT FOR THE STARS...',
         '<15>{#p/papyrus}{#f/20}TWINKLY WAS A STAR, AND HE LOVED TO CALL PEOPLE IDIOTS!',
         '<15>{#p/papyrus}{#f/25}OBLIVIOUS...',
         "<15>{#p/papyrus}{#f/22}I'VE BEEN OBLIVIOUS THIS WHOLE TIME!",
         '<15>{#p/papyrus}{#f/20}THAT "ASRIEL" FELLOW SEEMS TO LOVE CALLING PEOPLE IDIOTS AS WELL!',
         '<15>{#p/papyrus}{#f/24}WHICH MEANS...',
         '<15>{#p/papyrus}{#f/22}THE "STAR" IN THIS SCENARIO MUST BE HIM!',
         '<15>{#p/papyrus}{#f/19}HE MUST HAVE DONE SOMETHING TO MAKE -ME- LOOK LIKE AN IDIOT!'
      ],
      secretInsult6x: [
         '<15>{#p/papyrus}{#f/10}OH... OH!',
         "<15>{#p/papyrus}{#f/10}YOU'RE THE STAR I'M SUPPOSED TO SHOOT FOR!",
         "<15>{#p/papyrus}{#f/20}YOU'VE BEEN TRYING TO WIN MY AFFECTION THIS WHOLE TIME!",
         '<15>{#p/papyrus}{#f/27}WOWIE... YOU SURE DO HAVE A STRANGE WAY OF GOING ABOUT IT...',
         '<15>{#p/papyrus}{#f/24}STRANGE ENOUGH...',
         "<15>{#p/papyrus}{#f/15}... THAT I'M CONVINCED THERE'S MORE GOING ON HERE!",
         "<15>{#p/papyrus}{#f/21}AFTER ALL, IF THAT'S WHAT YOU WANTED TO TELL ME...",
         '<15>{#p/papyrus}{#f/21}WHY GO TO ALL THIS TROUBLE...',
         '<15>{#p/papyrus}{#f/27}INSTEAD OF SPARING ME AND TALKING ABOUT IT AFTERWARDS?',
         "<15>{#p/papyrus}{#f/21}UNLESS... YOU REALLY -CAN'T- SPARE ME.",
         '<15>{#p/papyrus}{#f/26}NO... YES.',
         '<15>{#p/papyrus}{#f/20}YES, YES, YES!!!',
         '<15>{#p/papyrus}{#f/20}I FINALLY UNDERSTAND IT NOW!',
         '<15>{#p/papyrus}{#f/24}THAT "ASRIEL" FELLOW WAS SO SURE YOU\'D KILL ME...',
         "<15>{#p/papyrus}{#f/20}SOMETHING TELLS ME, HE MUST BE THE ONE WHO'S GETTING IN YOUR WAY!",
         "<15>{#p/papyrus}{#f/15}HE'S BEEN JEALOUS OF YOUR AFFECTION FOR ME ALL THIS TIME!"
      ],
      secretInsult7: [
         '<15>{#p/papyrus}{#f/14}WELL.\nI WILL NOT BE FOOLED BY THE LIKES OF HIM!',
         '<15>{#p/papyrus}{#f/20}I, PAPYRUS, WILL MAKE SURE HE NEVER FINDS ME AGAIN!',
         "<15>{#p/papyrus}{#f/15}DON'T WORRY, HUMAN!\nPAPYRUS HAS THIS UNDER CONTROL!"
      ],
      sparableFlirt1: [
         "<15>{#p/papyrus}{#f/27}YOU'RE SUPPOSED TO BE SPARING, NOT FLIRTING!",
         '<15>{#f/14}I MUST RESIST!'
      ],
      sparableFlirt1x: [
         '<15>{#p/papyrus}{#f/27}HUH?\nFLIRTING, AT A TIME LIKE THIS?',
         "<15>{#f/14}WELL, THAT'S ONE WAY TO REDEEM YOURSELF!"
      ],
      sparableFlirt2: [ '<15>{#p/papyrus}{#f/14}N-NO...!' ],
      sparableFlirt2x: [ '<15>{#p/papyrus}{#f/14}A-AH...!' ],
      sparableFlirt3: [ '<15>{#p/papyrus}{#f/14}...' ],
      sparableInsult1: [
         "<15>{#p/papyrus}{#f/20}HEY, THERE'S NO NEED TO INSULT YOURSELF!",
         '<15>{#f/21}I KNOW YOU DID YOUR BEST...'
      ],
      sparableInsult1x: [
         "<15>{#p/papyrus}{#f/20}HEY, THERE'S NO NEED TO INSULT YOURSELF!",
         "<15>{#f/15}YOU'RE HERE TO BETTER YOURSELF, REMEMBER?"
      ],
      sparableInsult2: [ '<15>{#p/papyrus}{#f/21}HUMAN...' ],
      sparableInsult2x: [ '<15>{#p/papyrus}{#f/15}COME ON...!' ],
      sparableInsult3: [ '<15>{#p/papyrus}{#f/21}...' ]
   },
   b_opponent_shockasgore: {
      act_check: [ '<32>{#p/asriel2}* Asgore.\n* The king who got his home planet destroyed.' ],
      act_hug: [ '<32>{#p/human}* (You attempt to hug Asgore...)' ],
      hugText: [ '<32>{#p/human}* (... but your body goes right through him.)', '<32>{#p/asriel2}* ... huh?' ],
      foodText: [ '<11>{#p/asgore}{#f/5}Is that...' ],
      idleText1: [ '<11>{#p/asgore}{#f/1}Really now...' ],
      idleText2: [ '<11>{#p/asgore}{#f/1}Must we resort to violence?' ],
      idleText3: [ '<11>{#p/asgore}{#f/1}Can we not settle this peacefully?' ],
      idleText4: [ '<11>{#p/asgore}{#f/1}Is this really necessary?' ],
      stickText: [
         '<32>{#p/human}* (You throw the spanner.)\n* (Asgore lets it pass right through him.)',
         '<32>{#p/asriel2}* ... huh?'
      ],
      miss: [
         '<11>{#p/asgore}{#f/2}...',
         '<11>{#f/1}I am not really here, Asriel.',
         "<11>{#f/2}It's just a projection."
      ],
      name: '* Asgore',
      status1: [ '<32>{#p/asriel2}* Kill him, $(name).' ],
      status2: [ '<32>{#p/asriel2}* ...' ]
   },

   i_berry: {
      battle: {
         description: 'A small branch of semi-translucent berries.',
         name: 'Exoberries'
      },
      drop: [ '<32>{#p/human}* (You throw away the Exoberries.)' ],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? [ '<32>{#p/human}* (7 HP.)' ]
            : [ '<32>{#p/basic}* "Exoberries" Heals 7 HP\n* A small branch of semi-translucent berries.' ],
      name: 'Exoberries',
      use: [ '<32>{#p/human}* (You eat the Exoberries.)' ]
   },
   i_blookpie: {
      battle: {
         description: 'Fresh exoberries, bathed in a sea of moist Jell-O.',
         name: 'Berry Pie'
      },
      drop: [ '<32>{#p/human}* (You throw away the Exoberry Pie.)' ],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? [ '<32>{#p/human}* (99 HP.)' ]
            : [ '<32>{#p/basic}* "Exoberry Pie" Heals 99 HP\n* Fresh exoberries, bathed in a sea of moist Jell-O.' ],
      name: 'Exoberry Pie',
      use: [ '<32>{#p/human}* (You eat the Exoberry Pie.)' ]
   },
   i_chip: {
      battle: {
         description: 'Please take this to the edge of the galaxy.',
         name: 'Chip'
      },
      drop: () => [
         '<32>{#p/human}* (You threw away the Computer Chip.)',
         ...(SAVE.data.b.svr && !SAVE.data.b.freedom
            ? [ "<25>{#p/asriel1}{#f/15}* Uh... weren't you going to protect that?" ]
            : [])
      ],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? [ '<32>{#p/human}* (45 HP. Rather than eating it, you feel you should keep this item safe.)' ]
            : [ '<32>{#p/basic}* "Computer Chip" Heals 45 HP\n* Please take this to the edge of the galaxy.' ],
      name: 'Computer Chip',
      use: () => [
         '<32>{#p/human}* (You bit into the Computer Chip.)',
         ...(SAVE.data.b.svr && !SAVE.data.b.freedom
            ? [ "<25>{#p/asriel1}{#f/15}* Uh... weren't you going to protect that?" ]
            : world.darker || SAVE.data.b.ufokinwotm8
            ? []
            : [ '<32>{#p/basic}* Ouch.' ])
      ]
   },
   i_eye: {
      battle: {
         description: 'A portable force field.',
         name: 'Emitter'
      },
      drop: [ '<32>{#p/human}* (You throw away the Field Emitter.)' ],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? [ '<32>{#p/human}* (7 DF.)' ]
            : [ '<32>{#p/basic}* "Field Emitter" (7 DF)\n* A portable force field.' ],
      name: 'Field Emitter',
      use: [ '<32>{#p/human}* (You deployed the Field Emitter.)' ]
   },
   i_eye_x: {
      battle: {
         description: 'A somewhat underpowered portable force field.',
         name: 'Emitter?'
      },
      drop: [ '<32>{#p/human}* (You throw away the Field Emitter.)' ],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? [ '<32>{#p/human}* (5 DF.)' ]
            : [ '<32>{#p/basic}* "Field Emitter?" (5 DF)\n* A somewhat underpowered portable force field.' ],
      name: 'Field Emitter?',
      use: [ '<32>{#p/human}* (You deployed the Field Emitter.)' ]
   },
   i_fruit: {
      battle: {
         description: 'A non-euclidian fruit, bigger on the inside.',
         name: 'Ghost Fruit'
      },
      drop: [ '<32>{#p/human}* (You fold the Ghost Fruit in on itself.)' ],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? [ '<32>{#p/human}* (15 HP.)' ]
            : [ '<32>{#p/basic}* "Ghost Fruit" Heals 15 HP\n* A non-euclidian fruit, bigger on the inside.' ],
      name: 'Ghost Fruit',
      use: [ "<32>{#p/human}* (You unpacked the Ghost Fruit's many dimensions.)" ]
   },
   i_glove: {
      battle: {
         description: "A state-of-the-art bionic glove.\nIt's so bad.",
         name: 'Power Glove'
      },
      drop: [ '<32>{#p/human}* (You throw away the Power Glove.)' ],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? [ '<32>{#p/human}* (5 AT.)' ]
            : [ '<32>{#p/basic}* "Power Glove" (5 AT)\n* A state-of-the-art bionic glove. It\'s so bad.' ],
      name: 'Power Glove',
      use: [ '<32>{#p/human}* (You wear the Power Glove.)' ]
   },
   i_glove_x: {
      battle: {
         description: "It's not the original, but it still packs a punch.",
         name: 'Glove?'
      },
      drop: [ '<32>{#p/human}* (You throw away the Power Glove.)' ],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? [ '<32>{#p/human}* (3 AT.)' ]
            : [ '<32>{#p/basic}* "Power Glove?" (3 AT)\n* It\'s not the original, but it still packs a punch.' ],
      name: 'Power Glove?',
      use: [ '<32>{#p/human}* (You wear the Power Glove.)' ]
   },
   i_milkshake: {
      battle: {
         description: 'Made of an unknown, pearly-white substance.',
         name: 'Milkshake'
      },
      drop: [ '<32>{#p/human}* (You rid yourself of the Milkshake.)' ],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? [ '<32>{#p/human}* (18 HP.)' ]
            : [ '<32>{#p/basic}* "Milkshake" Heals 18 HP\n* Made of an unknown, pearly-white substance.' ],
      name: 'Milkshake',
      use: () => [
         '<32>{#p/human}* (You swallowed every last drop of the Milkshake.)',
         ...(SAVE.data.b.svr || world.darker || SAVE.data.b.ufokinwotm8 ? [] : [ '<32>{#p/basic}* ... salty.' ])
      ]
   },
   i_nice_cream: {
      battle: {
         description: 'Instead of a joke, the wrapper says something fantastical.',
         name: 'Ice Dream'
      },
      drop: [ '<32>{#p/human}* (You throw away the Ice Dream.)' ],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? [ '<32>{#p/human}* (15 HP.)' ]
            : [ '<32>{#p/basic}* "Ice Dream" Heals 15 HP\n* Instead of a joke, the wrapper says something fantastical.' ],
      name: 'Ice Dream',
      use: pager.create(
         2,
         () => [
            '<32>{#p/human}* (You unwrapped the Ice Dream.)',
            SAVE.data.b.svr
               ? '<32>* (The wrapper spoke of a world- saving adventure.)'
               : '<32>{#p/basic}* "You\'re a grand adventurer, on a mission to save the world!"'
         ],
         () => [
            '<32>{#p/human}* (You unwrapped the Ice Dream.)',
            SAVE.data.b.svr
               ? '<32>* (The wrapper mentioned your role as a starship captain.)'
               : '<32>{#p/basic}* "You\'re the captain of a starship, moving deeper into unexplored space!"'
         ],
         () => [
            '<32>{#p/human}* (You unwrapped the Ice Dream.)',
            SAVE.data.b.svr
               ? '<32>* (The wrapper claimed that you could uniquely solve a mystery.)'
               : '<32>{#p/basic}* "A grand mystery unfolds, and you\'re the only one who can solve it!"'
         ],
         () => [
            '<32>{#p/human}* (You unwrapped the Ice Dream.)',
            SAVE.data.b.svr
               ? '<32>* (The wrapper talked of your time-traveling endeavour.)'
               : '<32>{#p/basic}* "You\'ve traveled back in time to stop a terrible catastrophe!"'
         ],
         () => [
            '<32>{#p/human}* (You unwrapped the Ice Dream.)',
            SAVE.data.b.svr
               ? '<32>* (The wrapper stated your scientific brilliance.)'
               : '<32>{#p/basic}* "You\'re a brilliant scientist on the verge of a massive breakthrough!"'
         ],
         () => [
            '<32>{#p/human}* (You unwrapped the Ice Dream.)',
            SAVE.data.b.svr
               ? "<32>* (The wrapper established the innocent world you've ended up in.)"
               : '<32>{#p/basic}* "You stumble on a world of innocent creatures, and it\'s up to you what happens next!"'
         ],
         () => [
            '<32>{#p/human}* (You unwrapped the Ice Dream.)',
            SAVE.data.b.svr
               ? '<32>* (The wrapper detailed your newfound power.)'
               : '<32>{#p/basic}* "You\'ve gained the power to change the universe at your will! Use it wisely!"'
         ],
         [
            '<32>{#p/human}* (You unwrapped the Ice Dream.)',
            "<32>{#p/human}* (It's a holographic illustration of you, finding a loving family.)"
         ]
      )
   },
   i_pop: {
      battle: {
         description: 'Alters your perception of time.',
         name: 'Vortex Pop'
      },
      drop: [ '<32>{#p/human}* (You throw away the Vortex Pop.)' ],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? [ '<32>{#p/human}* (11 HP.)' ]
            : [
                 '<33>{#p/basic}* "Vortex Pop" Heals 11 HP\n* Alters your perception of time.\n* Not viable outside of battle.'
              ],
      name: 'Vortex Pop',
      use: () => [
         '<32>{#p/human}* (You suck on the Vortex Pop.)',
         ...(battler.active
            ? game.vortex
               ? [ '<32>{#p/human}* (Your perception of time is already shifted.)' ]
               : [
                    '<32>{#p/human}* (Your perception of time begins to shift.)',
                    '<32>{#p/story}* FOCUS up for two turns!'
                 ]
            : [ '<32>{#p/human}* (No effect outside of battle.)' ])
      ]
   },
   i_spaghetti: {
      battle: {
         description: 'Silken spaghetti, finely aged in a time dilation unit.',
         name: 'Spaghetti'
      },
      drop: [ '<32>{#p/human}* (You throw away the Spaghetti.)' ],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? [ '<32>{#p/human}* (16 HP.)' ]
            : [ '<32>{#p/basic}* "Spaghetti" Heals 16 HP\n* Silken spaghetti, finely aged in a time dilation unit.' ],
      name: 'Spaghetti',
      use: () => [
         '<32>{#p/human}* (You eat the Spaghetti.)',
         ...(!battler.active &&
         SAVE.data.n.state_papyrus_spaghet !== 0 &&
         SAVE.data.n.plot === 72 &&
         game.room === 'c_asgore_kitchen' // NO-TRANSLATE
            ? [
                 '<18>{#p/papyrus}{#f/1}WHAT?\nDID YOU JUST EAT THAT SPAGHETTI?',
                 '<18>{#f/5}IT SURE HAS BEEN A WHILE SINCE I MADE IT...',
                 '<25>{#p/sans}{#f/2}* a few hours at LEAST.',
                 "<18>{#p/papyrus}{#f/6}WELL, I'D WAGER THAT IT'S OUT OF DATE BY NOW.",
                 "<18>{#f/6}AND BY THAT, I MEAN IT'S AN OLDER VERSION.",
                 "<18>{#f/4}BUT DON'T WORRY.\nTHIS NEW SPAGHETTI DISH HERE...",
                 '<18>{#f/9}... IS WAY BETTER THAN THE OLD STUFF!',
                 "<18>{#f/9}FEEL FREE TO SWING BY AND HAVE SOME WHEN IT'S DONE!"
              ]
            : (fetchCharacters()
                 .find(c => c.key === 'papyrus') // NO-TRANSLATE
                 ?.position.extentOf(player) ?? 200) < 200
            ? [
                 [
                    '<18>{#p/papyrus}{#f/1}WHAT?\nDID YOU JUST EAT THAT SPAGHETTI?',
                    '<18>{#f/7}I THOUGHT YOU WERE GOING TO SHARE IT!',
                    ...(fetchCharacters().find(c => c.key === 'undyne') !== void 0 // NO-TRANSLATE
                       ? [
                            "<25>{#p/undyne}{#f/7}* Well, maybe they didn't WANT to share it!",
                            '<18>{#p/papyrus}{#f/6}BUT THEY PROMISED!'
                         ]
                       : []),
                    '<18>{#f/5}... PERHAPS MY COOKING IS AT FAULT HERE...',
                    "<18>{#f/6}IT WAS SO TASTY, YOU COULDN'T HELP BUT TAKE A BITE!",
                    '<18>{#f/5}AND ANOTHER, AND ANOTHER...',
                    "<18>{#f/6}BEFORE YOU KNEW IT, YOU'D EATEN THE ENTIRE PLATE!",
                    ...(fetchCharacters().find(c => c.key === 'undyne') !== void 0 // NO-TRANSLATE
                       ? [ '<25>{#p/undyne}{#f/14}* Wow.\n* What a crime.' ]
                       : []),
                    '<18>{#p/papyrus}{#f/5}TO THINK MY COOKING MADE YOU BETRAY ME...',
                    "<18>{#f/9}N-NO...!\nI'LL FIX THIS!",
                    '<15>{#f/4}... "AHEM."',
                    '<15>{#f/0}I, PAPYRUS, HEREBY DECLARE YOUR PROMISE VOID.',
                    '<15>{#f/0}THERE!\nNOW, YOU MAY EAT GUILT-FREE.',
                    ...(fetchCharacters().find(c => c.key === 'undyne') !== void 0 // NO-TRANSLATE
                       ? [
                            '<25>{#p/undyne}{#f/11}* ...',
                            '<15>{#p/papyrus}{#f/4}(IT WOULD HELP IF YOU PLAYED ALONG.)',
                            "<25>{#p/undyne}{#f/12}* Right!\n* Guilt-free!\n* That's how you'll eat!",
                            '<18>{#p/papyrus}{#f/0}(THANK YOU.)'
                         ]
                       : [])
                 ],
                 [
                    '<18>{#p/papyrus}{#f/1}WHAT?\nDID YOU JUST EAT THAT SPAGHETTI?',
                    "<18>{#f/4}WELL, YOU DIDN'T SAY YOU WERE GOING TO SHARE IT...",
                    ...(fetchCharacters().find(c => c.key === 'undyne') !== void 0 // NO-TRANSLATE
                       ? [
                            "<25>{#p/undyne}{#f/11}* So what's the problem?",
                            "<18>{#p/papyrus}{#f/0}OH, UH, I GUESS THERE ISN'T ONE."
                         ]
                       : [ "<18>{#f/0}HMM, I SUPPOSE THAT'S FOR THE BEST." ]),
                    '<18>{#f/5}AFTER ALL, IF YOU -HAD- MADE SUCH A STATEMENT...',
                    '<18>{#f/6}WE WOULD HAVE BEEN IN QUITE THE PERDICAMENT.',
                    "<18>{#f/0}BUT YOU DIDN'T!\nSO WE'RE GOOD!",
                    ...(fetchCharacters().find(c => c.key === 'undyne') !== void 0 // NO-TRANSLATE
                       ? [
                            '<25>{#p/undyne}{#f/12}* And all is right with the world, huh?',
                            "<18>{#p/papyrus}{#f/7}HEY, THAT'S WHAT I WAS GOING TO SAY!",
                            '<18>{#f/0}BUT YES.\nYES IT IS.'
                         ]
                       : [ '<18>{#f/0}AND ALL IS RIGHT WITH THE WORLD.' ])
                 ]
              ][SAVE.data.n.state_papyrus_spaghet - 1]
            : [])
      ]
   },
   i_swirl: {
      battle: {
         description: 'A glowing, colorful sugar roll.',
         name: 'Swirl'
      },
      drop: [ '<32>{#p/human}* (You throw away the Radiant Swirl.)' ],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? [ '<32>{#p/human}* (22 HP.)' ]
            : [ '<32>{#p/basic}* "Radiant Swirl" Heals 22 HP\n* A glowing, colorful sugar roll.' ],
      name: 'Radiant Swirl',
      use: [ '<32>{#p/human}* (You eat the Radiant Swirl.)' ]
   },
   i_voidy: {
      battle: {
         description: 'Leads to a mysterious place.\nNot viable in battle.',
         name: 'Sanctuary'
      },
      drop: [ '<32>{#p/human}* (You throw away the Sanctuary.)' ],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? [ '<32>{#p/human}* (A device whose origin is beyond the boundaries of existence.)' ]
            : [ '<32>{#p/basic}* Leads to a mysterious place.\n* Accessible on-the-go.' ],
      name: 'Sanctuary',
      use: () =>
         battler.active
            ? [ '<32>{#p/human}* (You use the Sanctuary.)', '<32>{#p/human}* (No effect in battle.)' ]
            : [ '<32>{#p/human}* (You use the Sanctuary.)' ]
   },
   i_corndog_sword: {
      battle: {
         description: 'A truly one-of-a-kind weapon.',
         name: 'Dog Sword'
      },
      drop: [ '<32>{#p/human}* (You try to throw away the Corn Dog Sword...)', '<32>{#p/human}* (... but it refuses.)' ],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? [ '<32>{#p/human}* (You decide not to question the logic of this weapon.)' ]
            : [ '<32>{#p/basic}* A truly one-of-a-kind weapon.' ],
      name: 'Corn Dog Sword',
      use: () =>
         battler.active && battler.target?.opponent.metadata.corndogger
            ? [
                 '<32>{#p/human}* (You equip the Corn Dog Sword.)',
                 "<32>{#p/human}* (You can't resist the urge to take a bite.)",
                 [
                    '<32>{#p/human}* (You consume the outer layer of breading...)',
                    '<32>{#p/human}* (You consume the tip...)',
                    '<32>{#p/human}* (You consume the blade...)',
                    '<32>{#p/human}* (You consume the hilt...)',
                    '<32>{#p/human}* (You consume the handle...)'
                 ][SAVE.data.n.corndogger++],
                 '<32>{#p/basic}* Suddenly...!'
              ]
            : [
                 '<32>{#p/human}* (You try to equip the Corn Dog Sword...)',
                 "<32>{#p/human}* (... but it didn't detect a high enough threat level!)"
              ]
   },
   i_fryz: {
      battle: {
         description: 'For once, it\'s not just "pleasantly warm."',
         name: 'Grillby'
      },
      drop: [ "<32>{#p/human}* (You tossed the Flamin' Grillby like a molotov.)" ],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? [ '<32>{#p/human}* (30 HP.)' ]
            : [ '<32>{#p/basic}* "Flamin\' Grillby" Heals 30 HP\n* For once, it\'s not just "pleasantly warm."' ],
      name: "Flamin' Grillby",
      use: [ "<32>{#p/human}* (You consume the Flamin' Grillby.)" ]
   },
   i_burgerz: {
      battle: {
         description: 'Like burgers, but smaller.\nThree left.',
         name: 'Slider Trio'
      },
      drop: [ '<32>{#p/human}* (You throw away the Sliders.)' ],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? [ '<32>{#p/human}* (15 HP. Three uses left.)' ]
            : [ '<32>{#p/basic}* "Sliders" Heals 15 HP\n* Like burgers, but smaller.\n* Three left.' ],
      name: 'Slider Trio',
      use: [ '<32>{#p/human}* (You eat one of the Sliders.)' ]
   },
   i_burgerz_use1: {
      battle: {
         description: 'Like burgers, but smaller.\nTwo left.',
         name: 'Slider Duo'
      },
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? [ '<32>{#p/human}* (15 HP. Two uses left.)' ]
            : [ '<32>{#p/basic}* "Sliders" Heals 15 HP\n* Like burgers, but smaller.\n* Two left.' ],
      name: 'Slider Duo'
   },
   i_burgerz_use2: {
      battle: {
         description: 'Like a burger, but smaller.',
         name: 'Slider'
      },
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? [ '<32>{#p/human}* (15 HP. One use left.)' ]
            : [ '<32>{#p/basic}* "Sliders" Heals 15 HP\n* Like burgers, but smaller.\n* One left.' ],
      name: 'Slider'
   },

   k_premium: {
      name: 'Premium Membership Voucher',
      description: () =>
         SAVE.data.b.f_state_voucher
            ? 'Used in tandem with your nonexistent premium telescope subscription.'
            : 'Given to you by Monster Kid after using the telescope in Starton.'
   },

   k_inverter: {
      name: 'Gravometric Inverter Remote',
      description: () =>
         SAVE.data.b.s_state_inverter
            ? 'Used to operate the eponymous Gravometric Inverter.'
            : "Acquired from the unsealed envelope in Sans's room."
   },

   k_security: {
      name: 'Rusty Key',
      description: () =>
         SAVE.data.n.state_aerialis_lockup > 0
            ? 'Used to unlock the armory in the rec center.'
            : 'Acquired at the "police station" on the north side of Starton town.'
   },

   n_shop_blook: {
      exit: [ "<32>{#p/napstablook}{#k/0}* oh... you're leaving...", '<32>{#k/1}* well, cya next time i guess...' ],
      item: () =>
         blookGone()
            ? [
                 '§fill:#808080§--- UNAVAILABLE ---',
                 SAVE.data.b.item_blookpie ? '§fill:#808080§--- UNAVAILABLE ---' : '0G - Exoberry Jell-O Pie',
                 '0G - Ghost Fruit',
                 '0G - Milkshake',
                 'Exit'
              ]
            : SAVE.data.n.plot === 72
            ? [
                 SAVE.data.b.item_voidy ? '§fill:#808080§--- UNAVAILABLE ---' : '432G - Sanctuary',
                 SAVE.data.b.item_blookpie ? '§fill:#808080§--- UNAVAILABLE ---' : '80G - Exoberry Jell-O Pie',
                 '5G - Ghost Fruit',
                 '5G - Milkshake',
                 'Exit'
              ]
            : [
                 SAVE.data.b.item_voidy ? '§fill:#808080§--- UNAVAILABLE ---' : '432G - Sanctuary',
                 SAVE.data.b.item_blookpie ? '§fill:#808080§--- UNAVAILABLE ---' : '100G - Exoberry Jell-O Pie',
                 '12G - Ghost Fruit',
                 '16G - Milkshake',
                 'Exit'
              ],
      itemInfo: [
         'Special:\nLeads to a\nmysterious\nplace.',
         'Heals 99HP\nGlows in\nthe dark.',
         "Heals 15HP\nIt's non-\neuclidian.",
         'Heals 18HP\nMay contain\nectoplasm.'
      ],
      itemPrompt: '<09>{#p/napstablook}{#k/3}see anything you like?',
      itemPurchase: [
         '<09>{#p/napstablook}{#k/3}heh... thank you...',
         "<09>{#p/napstablook}{#k/0}you don't have to buy it...",
         '<09>{#p/napstablook}{#k/0}sorry... not enough g...',
         "<10>{#p/human}(You're carrying too much.)"
      ],
      itemPurchasePrompt: () => (blookGone() ? 'Take it?' : 'Buy it for\n$(x)G?'),
      itemUnavailable: () =>
         blookGone() ? '<09>{#p/basic}Nothing left.' : "<09>{#p/napstablook}{#k/0}oh... i don't have any more...",
      menu: () =>
         blookGone() ? [ 'Take', 'Steal', 'Read', 'Exit' ] : [ 'Buy', world.meanie ? 'Steal' : 'Sell', 'Talk', 'Exit' ],
      menuPrompt1: () =>
         [
            '<23>{#p/napstablook}{#k/3}* have a look around...',
            "<23>{#p/napstablook}{#k/3}* i hope you find what you're looking for...",
            "<23>{#p/napstablook}{#k/3}* have a look around... or not... it's your choice...",
            '<23>{#p/napstablook}{#k/3}* have a look around, i guess...',
            "<23>{#p/napstablook}{#k/3}* have a look around... or not... it's your choice..."
         ][Math.min(SAVE.data.n.state_wastelands_napstablook, 4)],
      menuPrompt2: '<23>{#p/napstablook}{#k/0}* feel free to leave at any time...',
      menuPrompt3: () =>
         world.bullied || SAVE.flag.n.pacifist_marker_bully > 3
            ? '<23>{#p/basic}* ... but everybody ran.'
            : '<23>{#p/basic}* ... but nobody came.',
      note: () =>
         world.scared_ghost
            ? [ "<32>{#p/basic}* There's no note here." ]
            : SAVE.flag.n.pacifist_marker_bully > 3
            ? [ "<32>{#p/basic}* There's a note here.", '<32>{#p/napstablook}* "we had no choice..."' ]
            : [ "<32>{#p/basic}* There's a note here.", '<32>{#p/napstablook}* "sorry, i had to go..."' ],
      sell1: () =>
         blookGone()
            ? [ '<30>{#p/human}* (You took 42G from behind the counter.)' ]
            : world.meanie
            ? [
                 "<30>{#p/napstablook}{#k/2}* oh... you're trying to steal from me...",
                 '<30>{#p/napstablook}{#k/5}* you must really need it...',
                 SAVE.data.b.item_voidy
                    ? "<30>{#k/0}* i'm so sorry... the only money i have came from you..."
                    : "<30>{#k/0}* i'm so sorry... i don't have much to give..."
              ]
            : [
                 '<30>{#p/napstablook}{#k/2}* oh... you wanted to sell something',
                 "<30>{#k/0}* i don't know if i can afford to buy anything... sorry..."
              ],
      sell2: () =>
         blookGone()
            ? [ '<30>{#p/basic}* Nothing left.' ]
            : world.meanie
            ? [
                 "<30>{#p/napstablook}{#k/5}* um...\n* i can't give you anything of real value...",
                 "<30>{#p/napstablook}{#k/0}* i know... it's pretty sad"
              ]
            : [
                 '<30>{#p/napstablook}{#k/5}* um... you could ask my cousin about selling...',
                 '<30>{#k/0}* they live with undyne, i think'
              ],
      talk: () =>
         SAVE.data.n.plot === 72
            ? [ 'Say Hello', 'What Happened', SAVE.data.s.name || systemsText.general.mystery1, 'The Future', 'Exit' ]
            : [
                 'Say Hello',
                 'Ghosts',
                 'Sanctuary',
                 65 <= SAVE.data.n.plot
                    ? SAVE.data.b.a_state_hapstablook && 68 <= SAVE.data.n.plot
                       ? 'Family'
                       : 'Your Life'
                    : 63 <= SAVE.data.n.plot && SAVE.data.b.a_state_hapstablook
                    ? 'Mettaton'
                    : 60 <= SAVE.data.n.plot
                    ? 'Mew Mew Doll'
                    : 48 <= SAVE.data.n.plot
                    ? 'Travels'
                    : SAVE.data.b.napsta_performance
                    ? 'DJ Blooky?'
                    : SAVE.data.n.state_wastelands_napstablook === 0
                    ? 'Dapper Blook?'
                    : 'Your Life',
                 'Exit'
              ],
      talkPrompt: '<09>{#p/napstablook}{#k/1}oh, you wanna chat?',
      talkText: [
         () =>
            SAVE.data.n.plot === 72
               ? [
                    '<32>{#p/napstablook}{#k/3}* oh, hey...',
                    '<32>{#k/0}* i think everybody dissappeared for a while...',
                    '<32>{#k/1}* but when they woke up, they all knew your name...',
                    "<32>{#k/3}* so... you're frisk, huh?",
                    '<32>{#k/4}* well, nice to see you... frisk'
                 ]
               : SAVE.data.b.a_state_napstadecline
               ? [ '<32>{#p/napstablook}{#k/2}* uh...', '<32>{#p/napstablook}{#k/2}* hey there...' ]
               : SAVE.data.n.state_wastelands_napstablook < 2
               ? [
                    [
                       '<32>{#p/napstablook}{#k/3}* oh, hey...',
                       '<32>{#p/napstablook}{#k/3}* oh, nice to see you again...'
                    ][SAVE.data.n.state_wastelands_napstablook],
                    ...(world.meanie
                       ? [ "<32>{#k/0}* what's that look for?\n* have i done something wrong..." ]
                       : [ '<32>{#k/4}* what have you been up to?' ])
                 ]
               : SAVE.data.n.state_wastelands_napstablook < 5
               ? [
                    "<32>{#p/napstablook}{#k/0}* oh...\n* i'm not sure what to say, really...",
                    '<32>{#k/3}* uhh... hello, i guess?'
                 ]
               : [
                    '<32>{#p/napstablook}{#k/4}* heh...\n* hey...',
                    '<32>{#k/3}* say, are you new around here?',
                    "<32>{#k/5}* you don't look familiar..."
                 ],
         () =>
            SAVE.data.n.plot === 72
               ? [
                    "<32>{#p/napstablook}{#k/2}* honestly, i don't really know what happened...",
                    "<32>{#k/2}* same goes for everyone in my family.\n* we didn't get pulled in like everyone else.",
                    '<32>{#k/1}* we did see a bright light, but when it came by... we just sort of rejected it',
                    "<32>{#k/0}* still, even though we didn't see it ourselves...",
                    "<32>{#k/3}* we've heard all about what you did for us.",
                    '<32>{#k/3}* so... thanks.'
                 ]
               : [
                    '<32>{#p/napstablook}{#k/2}* you wanna know about ghosts?',
                    '<32>{#k/0}* well, the only ghosts i know are myself, my three cousins...',
                    '<32>{#k/3}* and the one behind you, of course',
                    "<32>{#k/1}* aside from that, there's not much to say",
                    '<32>{#k/0}* without a fused host body, we just sorta... exist',
                    '<32>{#k/0}* yeah, i know...\n* very interesting stuff...'
                 ],
         () =>
            SAVE.data.n.plot === 72
               ? [
                    '<32>{#p/napstablook}{#k/2}* ...',
                    "<32>{#k/2}* they're... still behind you, aren't they?",
                    '<32>{#k/0}* yeah... i can see them...',
                    ...(SAVE.data.b.oops
                       ? [
                            "<32>{#k/0}* they... don't like the fact that i'm pointing them out...",
                            '<32>{#k/0}* oh no...'
                         ]
                       : [
                            '<32>{#k/2}* they... look happy?',
                            '<32>{#k/4}* frisk, if you were able to make them feel this way...',
                            '<32>{#k/3}* then you really are special.'
                         ])
                 ]
               : [
                    '<32>{#p/napstablook}{#k/3}* oh yeah... that...',
                    '<32>{#k/1}* well, one day, i found this box lying around...',
                    "<32>{#k/5}* when i opened it, i ended up in this mysterious place i haven't seen before...",
                    '<32>{#k/4}* now and then, i like to visit that place to relax',
                    "<32>{#k/3}* it's peaceful..."
                 ],
         () =>
            SAVE.data.n.plot === 72
               ? [
                    '<32>{#p/napstablook}{#k/0}* well, my cousins are looking after the farm, so...',
                    "<32>{#k/2}* i figured i'd wrap things up here before we left.",
                    "<32>{#k/3}* i'm interested to see what kind of world we'll go to...",
                    '<32>{#k/4}* will it be like the old one, or will it be something new?'
                 ]
               : 65 <= SAVE.data.n.plot
               ? SAVE.data.b.a_state_hapstablook
                  ? 68 <= SAVE.data.n.plot
                     ? [
                          '<32>{#p/napstablook}{#k/3}* hey, hapsta-\n* er, mettaton came by a little while ago.',
                          "<32>{#k/0}* we talked for a bit about what we've been up to...",
                          '<32>{#k/0}* about the family...',
                          "<32>{#k/3}* well, i don't think i've ever been this happy before.",
                          '<32>{#k/3}* what you did for us back there... it means a lot.'
                       ]
                     : [
                          "<32>{#p/napstablook}{#k/0}* hey... sorry things didn't work out the way we hoped...",
                          '<32>{#k/3}* it was nice to have you there, though......'
                       ]
                  : [
                       '<32>{#p/napstablook}{#k/7}* with every day that goes by, i feel a little farther away from happiness......'
                    ]
               : 63 <= SAVE.data.n.plot && SAVE.data.b.a_state_hapstablook
               ? [
                    "<32>{#k/7}* oh... you're probably wondering about the meeting",
                    "<32>{#k/7}* don't worry, it's still happening...",
                    '<32>{#k/7}* i just came back here to check on my shop......'
                 ]
               : 60 <= SAVE.data.n.plot
               ? SAVE.data.b.a_state_napstadecline
                  ? [
                       '<32>{#k/7}* ...',
                       "<32>{#k/7}* i don't... really wanna talk about that...",
                       ...(SAVE.storage.inventory.contents.includes('tvm_mewmew') // NO-TRANSLATE
                          ? [ "<32>{#k/2}* especially when it's right there in your ITEMs......" ]
                          : [])
                    ]
                  : [
                       '<32>{#k/1}* oh... yeah......',
                       '<32>{#k/3}* thanks for agreeing to help me with that',
                       "<32>{#k/2}* mettaton's been acting kinda weird lately......",
                       "<32>{#k/0}* i'm not surprised he did this",
                       '<32>{#k/4}* alphys first had me watch mew mew space adventure with her a while ago...',
                       '<32>{#k/3}* we marathonned the entire fourth season in one night...',
                       '<32>{#k/6}* that finale...',
                       '<32>{#k/6}* was something else......'
                    ]
               : 48 <= SAVE.data.n.plot
               ? [
                    '<32>{#k/1}* yeah... this is mostly where i hang out now',
                    ...[
                       [ '<32>{#k/0}* sorry for interrupting whatever you were doing with my cousin...' ],
                       [ '<32>{#k/0}* ...\n* have you seen my cousin?' ],
                       [ '<32>{#k/3}* i heard my cousin really likes you...' ],
                       [
                          "<32>{#k/5}* my cousin tells me you're not the most interesting person to be with...",
                          '<32>{#k/5}* i disagree......'
                       ],
                       [],
                       []
                    ][SAVE.data.n.state_wastelands_toriel === 0 ? 2 : SAVE.data.n.state_foundry_maddummy],
                    '<32>* ...',
                    "<32>{#f/1}* anyway\n* i hope you're doing alright out there...",
                    '<32>{#f/2}* past starton, things get a bit... crazy'
                 ]
               : SAVE.data.b.napsta_performance
               ? [
                    '<32>{#p/napstablook}{#k/1}* yeah, i make music sometimes',
                    "<32>{#k/0}* people say it's great, but i know they're just lying to make me feel better...",
                    '<32>{#k/4}* thanks for coming to my little show, though...',
                    '<32>{#k/3}* seeing you made me happy...'
                 ]
               : [
                    [
                       '<32>{#p/napstablook}{#k/2}* you mean... that little hat trick i showed you...?',
                       '<32>{#k/1}* yeah, my cousin taught me that...',
                       '<32>{#k/3}* he and i used to spend so much time together...',
                       '<32>{#k/0}* then one day, he...',
                       '<32>{#k/6}* ...',
                       '<32>{#k/0}* never mind...'
                    ],
                    [
                       "<32>{#p/napstablook}{#k/0}* oh, there's not much to say about my life...",
                       '<32>{#k/3}* meeting you was the highlight of my weekend...'
                    ],
                    [
                       "<32>{#p/napstablook}{#k/0}* oh, there's not much to say about my life...",
                       '<32>{#k/6}* and thanks to people like you, there probably never will be...'
                    ],
                    [
                       "<32>{#p/napstablook}{#k/0}* oh, there's not much to say about my life...",
                       "<32>{#k/3}* i'm just... pluggin' along..."
                    ],
                    [
                       "<32>{#p/napstablook}{#k/0}* oh, there's not much to say about my life...",
                       '<32>{#k/6}* not that you... really care...'
                    ],
                    [
                       "<32>{#p/napstablook}{#k/0}* oh, there's not much to say about my life...",
                       "<32>{#k/0}* i'm just a ghost that tends to get lost in the mix"
                    ]
                 ][SAVE.data.n.state_wastelands_napstablook]
      ],
      zeroPrompt: '<09>{#p/basic}...'
   },
   n_shop_hare: {
      exit: [ '<32>{#p/basic}{#k/11}* Bye now!\n* Come again sometime!' ],
      item: () =>
         world.population === 0 || SAVE.flag.n.pacifist_marker_bully > 3
            ? [
                 '0G - Power Glove?',
                 SAVE.data.b.item_eye ? '0G - Field Emitter?' : '0G - Field Emitter',
                 '0G - Vortex Pop',
                 '0G - Radiant Swirl',
                 'Exit'
              ]
            : SAVE.data.n.plot === 72
            ? [
                 '10G - Power Glove?',
                 SAVE.data.b.item_eye ? '10G - Field Emitter?' : '20G - Field Emitter',
                 '8G - Vortex Pop',
                 '5G - Radiant Swirl',
                 'Exit'
              ]
            : [
                 '30G - Power Glove?',
                 SAVE.data.b.item_eye ? '30G - Field Emitter?' : '40G - Field Emitter',
                 '28G - Vortex Pop',
                 '20G - Radiant Swirl',
                 'Exit'
              ],
      itemInfo: () => [
         "Weapon: 3AT\n($(x) AT)\nKnock 'em.\nReplicated.",
         SAVE.data.b.item_eye
            ? 'Armor: 5DF\n($(x) DF)\nProtection\nfor one.\nReplicated.'
            : 'Armor: 7DF\n($(x) DF)\nProtection\nfor one.',
         'Heals 11HP\nSlows your\nperception\nof time.',
         "Heals 22HP\nIt's her own\nrecipe."
      ],
      itemPrompt: '<09>{#p/basic}{#k/0}What would you like to buy?',
      itemPurchase: [
         '<09>{#p/basic}{#k/4}Thanks for your purchase.',
         '<09>{#p/basic}{#k/7}Just looking?',
         "<09>{#p/basic}{#k/5}That's not enough money.",
         "<10>{#p/human}(You're carrying too much.)"
      ],
      itemPurchasePrompt: () =>
         world.population === 0 || SAVE.flag.n.pacifist_marker_bully > 3 ? 'Take it?' : 'Buy it for\n$(x)G?',
      menu: () =>
         world.population === 0 || SAVE.flag.n.pacifist_marker_bully > 3
            ? [ 'Take', 'Steal', 'Read', 'Exit' ]
            : [ 'Buy', world.meanie ? 'Steal' : 'Sell', 'Talk', 'Exit' ],
      menuPrompt1: '<23>{#p/basic}{#k/0}* Hello, traveler.\n* How can I help you?',
      menuPrompt2: '<23>{#p/basic}{#k/0}* Take your time.',
      menuPrompt3: () =>
         world.bullied || SAVE.flag.n.pacifist_marker_bully > 3
            ? '<23>{#p/basic}* ... but everybody ran.'
            : '<23>{#p/basic}* ... but nobody came.',
      note: () =>
         SAVE.flag.n.pacifist_marker_bully > 3
            ? [ "<32>{#p/basic}* There's a note here.", '<32>{#p/basic}* "Please don\'t come after us."' ]
            : SAVE.data.n.plot === 72
            ? [ "<32>{#p/basic}* There's a note here.", '<33>{#p/basic}* "I\'m sorry I couldn\'t come back."' ]
            : [ "<32>{#p/basic}* There's a note here.", '<33>{#p/basic}* "Please don\'t hurt my family."' ],
      sell1: () =>
         world.population === 0 || SAVE.flag.n.pacifist_marker_bully > 3
            ? [ '<30>{#p/human}* (You took 758G from behind the counter.)' ]
            : world.meanie
            ? [
                 "<30>{#p/basic}{#k/1}* Huh?\n* Is this what we're resortin' to now?",
                 "<30>{#k/2}* If you want somethin', you'll have to buy it first.",
                 '<30>{#k/12}* No exceptions.'
              ]
            : [
                 "<30>{#p/basic}{#k/6}* Huh?\n* Sell somethin'?\n* Does this look like a pawn shop?",
                 "<30>{#k/3}* I don't know how it works where you come from... but...",
                 "<30>* If I started spending money on old wrenches and used spacesuits, I'd be out of business in a jiffy!"
              ],
      sell2: () =>
         world.population === 0 || SAVE.flag.n.pacifist_marker_bully > 3
            ? [ '<30>{#p/basic}* Nothing left.' ]
            : world.meanie
            ? [ "<30>{#p/basic}{#k/8}* I don't know what your game is, but it's not going to work on me." ]
            : [
                 "<30>{#p/basic}{#k/8}* If you're really hurtin' for cash, then maybe you could do some crowdfunding.",
                 '<30>{#k/2}* I hear people will pay for ANYTHING nowadays.'
              ],
      talk: () =>
         SAVE.data.n.plot === 72
            ? [ 'Say Hello', 'What Happened', 'Outlands', 'The Future', 'Exit' ]
            : [ 'Say Hello', 'What To Do Here', 'Town History', 'Your Life', 'Exit' ],
      talkPrompt: '<09>{#p/basic}{#k/0}Care to chat?',
      talkText: [
         () =>
            SAVE.data.n.plot === 72
               ? [
                    "<32>{#p/basic}{#k/4}* Oh, it's you!\n* You're the one who gave us back our freedom!",
                    "<32>{#k/0}* Frisk, right?\n* Everyone's been talking about you.",
                    "<32>{#k/5}* We've all seen the same thing... we know you must just want some peace and quiet.",
                    "<32>{#k/4}* Still.\n* Can't help but get a little excited, now can we?"
                 ]
               : [
                    "<32>{#p/basic}{#k/4}* Hiya! Welcome to Starton!\n* I can't remember the last time I saw a fresh face around here.",
                    '<32>{#k/8}* Where did you come from?\n* The Citadel?',
                    "<32>{#k/7}* You don't look like a tourist.\n* Are you here by yourself?"
                 ],
         () =>
            SAVE.data.n.plot === 72
               ? [
                    "<32>{#p/basic}{#k/8}* You DO know what happened, don't you?",
                    "<32>{#k/9}* Then again, you might've seen things a bit differently...",
                    "<32>{#k/0}* Here.\n* I'll tell you what I saw.",
                    '<32>{#k/0}* So we all got pulled in by this bright light...',
                    "<32>{#k/7}* Then we saw it... like we were watching from someone else's eyes.",
                    "<32>{#k/5}* You were being attacked on all sides, and I could've sworn you died...",
                    "<32>{#k/11}* But you're still here, so that can't be right.",
                    '<32>{#k/8}* Eventually, you said something in particular, and whoever was attacking you... stopped.',
                    '<32>{#k/9}* After that, we woke up, and the force field was gone.'
                 ]
               : [
                    '<32>{#p/basic}{#k/8}* You want to know what to do here in Starton?',
                    "<32>{#k/9}* Grillby's has food, and the librarby has information...",
                    "<32>{#k/2}* If you're tired, you can take a nap at the inn.\n* It's right nextdoor, my sister runs it.",
                    "<32>{#k/0}* And if you're bored, you can sit outside and watch those wacky skeletons do their thing.",
                    "<32>* There's two of 'em...\n* Brothers, I think.\n* They've been here for as long as I can remember.",
                    '<32>{#k/9}* Oh, I almost forgot.\n* Recently, a ghost fella decided to open a store on the south side of town.',
                    "<32>{#k/11}* It's not much, but if you drop by, be sure to say hello.\n* They could use the company."
                 ],
         () =>
            SAVE.data.n.plot === 72
               ? [
                    '<32>{#p/basic}{#k/12}* Didja hear?\n* About the Outlands?',
                    '<32>{#k/2}* Apparently the Queen had been hanging out there for who knows how long.',
                    '<32>{#k/8}* Pretty unbelievable, huh!?',
                    "<32>{#k/10}* I'm sure she was even more surprised than we were to find out the humans were alive."
                 ]
               : [
                    '<32>{#p/basic}{#k/9}* Think back to your history class...',
                    '<32>{#k/0}* A long time ago, monsters lived in what we now call the Foundry.',
                    '<32>* After a while, we invented the technology to build new areas onto the outpost.',
                    "<32>* The first of those areas was Starton, and they figured it'd be a good place for a town.",
                    "<32>{#k/10}* It's quaint, but I kinda like that, you know?"
                 ],
         () =>
            SAVE.data.n.plot === 72
               ? [
                    "<32>{#p/basic}{#k/5}* Well, I suppose I'll move my store to the new homeworld...",
                    "<32>{#k/4}* ... haven't planned much more than that, I'm afraid."
                 ]
               : [
                    '<32>{#p/basic}* Life is the same as usual.',
                    '<32>{#k/5}* A little lonely...',
                    "<32>{#k/10}* But... we all know deep down that freedom is coming, don't we?",
                    '<32>{#k/9}* As long as we got that hope, we can grit our teeth and face the same struggles, day after day...',
                    "<32>{#k/0}* That's life, ain't it?"
                 ]
      ],
      zeroPrompt: '<09>{#p/basic}...'
   },

   c_name_starton: {
      papyrus: () =>
         SAVE.data.n.plot_date < 2 || (SAVE.data.n.exp > 0 && SAVE.data.b.a_state_fishbetray)
            ? "Papyrus's Phone"
            : 'Papyrus and Undyne'
   },

   c_call_papyrus: <Partial<CosmosKeyed<CosmosProvider<string[]>>>>{
      s_start: pager.create(
         0,
         () => [
            '<18>{#p/papyrus}AH, THAT LONELY ROAD.',
            '<18>{#f/4}BACK WHEN WE WERE BABY BONES...',
            '<18>{#f/0}SANS AND I WOULD RACE HOVERCARS TOGETHER.',
            '<18>{#f/4}BUT NO MATTER HOW FAST I WENT...',
            '<18>{#f/7}SANS WOULD ALWAYS BE WAITING AT THE FINISH LINE!',
            ...(solo()
               ? [ '<18>{#f/5}YOU CAN IMAGINE MY FRUSTRATION.' ]
               : [
                    "<25>{#p/undyne}{#f/1}* That's 'cause he's a big fat cheater!",
                    '<25>{#f/4}* Have you SEEN his high score on the target practice machine?',
                    "<25>{#f/12}* It's like, a gazillion or something.",
                    '<18>{#p/papyrus}{#f/4}TRUST ME, I KNOW ALL TOO WELL.',
                    "<18>{#f/7}I REALLY WISH HE WOULDN'T CHEAT ON THINGS LIKE THAT!",
                    '<18>{#f/7}IT RUINS THE GAME FOR EVERYONE ELSE.',
                    '<25>{#p/undyne}{#f/1}* Or maybe...',
                    '<25>{#f/8}* It just provides a more interesting challenge!!',
                    "<18>{#p/papyrus}{#f/0}ACTUALLY, THAT'S A FAIR POINT!"
                 ])
         ],
         () => [
            '<18>{#p/papyrus}{#f/5}SANS HAS ALWAYS BEEN ONE TO TAKE SHORTCUTS.',
            ...(solo()
               ? [ '<18>{#f/4}I SUSPECT THAT PLAYED A PART IN HIS VICTORIES.' ]
               : [ "<18>{#f/4}IT'S PRACTICALLY A LAW OF NATURE AT THIS POINT." ])
         ]
      ),
      s_sans: pager.create(
         0,
         () => [
            '<18>{#p/papyrus}{#f/4}THIS IS WHERE MY BROTHER IS MEANT TO PATROL...',
            "<18>{#f/7}BUT EVERY TIME I CHECK ON HIM, HE'S SLACKING OFF!",
            ...(solo()
               ? [ '<18>{#f/5}NOT THAT I CAN BLAME HIM...' ]
               : [
                    '<25>{#p/undyne}{#f/9}* Felt that.',
                    '<25>{#f/16}* I never see him at his post anymore.',
                    "<18>{#p/papyrus}{#f/5}I CAN'T BLAME HIM, THOUGH..."
                 ]),
            '<18>{#f/5}LIFE OUT HERE HAS BECOME KIND OF HARD LATELY.',
            ...(solo() ? [] : [ '<25>{#p/undyne}{#f/16}* Yeah...' ])
         ],
         () => [
            '<18>{#p/papyrus}{#f/5}JUST BECAUSE WE LIVE AMONGST THE STARS...',
            "<18>{#f/5}... DOESN'T MEAN WE'RE ANY LESS TRAPPED."
         ]
      ),
      s_crossroads: pager.create(
         0,
         () => [
            '<18>{#p/papyrus}RECENTLY, PEOPLE HAVE BEEN LEAVING NOTES OUTSIDE.',
            '<18>{#f/5}DREAMS, WISHES, OFFERS OF ROMANCE...',
            ...(solo()
               ? [
                    "<18>{#f/0}REALLY, I'M OVER THE MOON ABOUT IT!",
                    "<18>{#f/0}IT'S GREAT TO SEE PEOPLE MAKING AN EFFORT.",
                    '<18>{#f/4}SANS, ON THE OTHER HAND...',
                    "<18>{#f/4}HE THINKS THEY'RE ALL JUST BEING LUNAR-TICKS."
                 ]
               : [
                    '<18>{#f/6}...',
                    "<18>{#f/6}WHAT'S THAT LOOK FOR, UNDYNE?",
                    '<25>{#p/undyne}{#f/3}* ... did you, uh...',
                    '<18>{#p/papyrus}{#f/1}DID I WHAT?',
                    '<25>{#p/undyne}{#f/15}* ... see any...\n* ... scientific notes?',
                    '<18>{#p/papyrus}{#f/6}UH...\nNO, SORRY...',
                    '<25>{#p/undyne}{#f/1}* Darn!'
                 ])
         ],
         () => [
            ...(solo()
               ? [ '<18>{#p/papyrus}I WONDER WHAT LIFE WOULD BE LIKE WITH A MOON IN ORBIT.' ]
               : [ '<18>{#p/papyrus}DO YOU HAVE ANY HOPES AND DREAMS TO SHARE?' ])
         ]
      ),
      s_human: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}ISN'T THAT WHERE WE FIRST MET?",
            '<18>{#f/5}WOWIE, TIME SURE DOES FLY...',
            ...(solo()
               ? [
                    "<18>{#f/0}BUT HEY, JUST LOOK AT HOW FAR WE'VE COME!",
                    '<18>{#f/5}ALL THE PUZZLING AND BATTLING AND DATING WE DID...',
                    '<18>{#f/0}GOOD TIMES, HUH?'
                 ]
               : [
                    '<25>{#p/undyne}{#f/14}* Man, remember how WE first met?',
                    '<18>{#p/papyrus}OH, YEAH, I WAS WAITING OUTSIDE FOR HOURS...',
                    '<25>{#p/undyne}{#f/16}* No, not that...',
                    '<25>{#f/9}* Actually, you might not even remember it.',
                    "<18>{#p/papyrus}WAIT, THERE'S MORE TO PAPYRUS THAN I THOUGHT!?",
                    '<25>{#p/undyne}{#f/1}* Always has been.',
                    "<18>{#p/papyrus}YOU'LL HAVE TO TELL ME MORE ABOUT IT LATER!"
                 ])
         ],
         () =>
            solo()
               ? [
                    '<18>{#p/papyrus}{#f/5}STILL RELIVING THE PAST?',
                    '<18>{#f/5}TRUST ME, I KNOW THE FEELING...',
                    '<18>{#f/5}I WISH I COULD GO BACK, TOO.'
                 ]
               : [ '<18>{#p/papyrus}{#f/4}YOU THINK YOU KNOW A PERSON...' ]
      ),
      s_papyrus: pager.create(
         0,
         () => [
            '<18>{#p/papyrus}{#f/9}NYEH HEH HEH!!\nIMPRESSED!?!',
            '<18>{#f/0}NOT ONLY AM I GREAT AT PUZZLES...',
            "<18>{#f/9}I'M ALSO AN ESTEEMED ARCHITECT!!!",
            ...(solo()
               ? []
               : [
                    '<25>{#p/undyne}{#f/1}* Y\'know, I WAS thinking of renovating your "sentry station..."',
                    '<25>{#f/1}* Like a surprise gift.',
                    '<18>{#p/papyrus}{#f/6}NYEH...?',
                    "<25>{#p/undyne}{#f/12}* But, uh, then I realized I'd be messing with perfection.",
                    '<18>{#p/papyrus}PERFECTION, HUH?',
                    '<25>{#p/undyne}{#f/14}* Yeah!',
                    '<18>{#p/papyrus}{#f/5}BUT, YOU ONCE SAID THINGS CAN ALWAYS BE IMPROVED!',
                    '<25>{|}{#p/undyne}{#f/17}* Wh- huh?\n* I mean... yes!!!\n* But what do I call- {%}',
                    '<18>{#p/papyrus}ALMOST-PERFECTION.\nHOW ABOUT THAT?',
                    '<25>{#p/undyne}{#f/12}* Works for me.'
                 ])
         ],
         () =>
            solo()
               ? [ '<18>{#p/papyrus}MY BROTHER HELPED ME FIND THE BOX.' ]
               : [ '<18>{#p/papyrus}THANK YOU, HUMAN...', '<18> FOR BEING MY ALMOST- PERFECT FRIEND.' ]
      ),
      s_doggo: pager.create(
         0,
         () =>
            player.position.y > 60
               ? [
                    '<18>{#p/papyrus}{#f/5}LIFE AS A BUILDER BOT MUST BE TOUGH.',
                    '<18>{#f/5}BE NICE TO THOSE WHOSE INTELLIGENCE IS ARTIFICIAL.',
                    ...(solo()
                       ? []
                       : [
                            '<25>{#p/undyne}{#f/17}* Wait, those things still exist??',
                            "<18>{#p/papyrus}{#f/6}ACTUALLY, IT'S JUST THE ONE IN STARTON.",
                            "<25>{#p/undyne}{#f/14}* Oh.\n* Yeah, I don't know that robot very well.",
                            '<18>{#p/papyrus}{#f/4}WHAT ABOUT THE ROBOT YOU DO KNOW?',
                            '<25>{#p/undyne}{#f/4}* ...',
                            '<25>{#f/5}* ...',
                            '<18>{#p/papyrus}{#f/6}OKAY, MAYBE ANOTHER TIME!!!'
                         ])
                 ]
               : [
                    '<18>{#p/papyrus}THE SENTRY STATION OF DOGGO...',
                    '<18>{#f/5}ONE DAY, AFTER AN INCIDENT WITH THE OTHER DOGS...',
                    "<18>{#f/5}HE TOLD ME HE DIDN'T FEEL AT HOME ANYMORE.",
                    '<18>{#f/0}SO I GAVE HIM A HUG, AND TOLD HIM TO TALK IT OUT.',
                    '<18>{#f/4}OF COURSE, THE CANINE UNIT ARE A REASONABLE BUNCH.',
                    "<18>{#f/0}IT'S NO SURPRISE THINGS TURNED OUT JUST FINE!",
                    ...(solo()
                       ? []
                       : [
                            '<25>{#p/undyne}{#f/16}* Hey, I remember that incident...',
                            '<25>{#f/16}* Doggo, uh...\n* He was thinking of...',
                            '<18>{#p/papyrus}{#f/4}THINKING OF...?',
                            '<25>{#p/undyne}{#f/9}* Just... thanks for being there when you were.',
                            "<25>{#f/16}* Without you, he might've actually...",
                            '<18>{#p/papyrus}{#f/7}WHAT??\nWHAT IS IT??',
                            '<25>{#p/undyne}{#f/9}* ...',
                            '<25>{#f/12}* Uh, he would have quit the guard for a really long time.',
                            '<18>{#p/papyrus}OH!\nOKAY.'
                         ])
                 ],
         [ '<18>{#p/papyrus}{#f/0}KINDNESS REALLY -IS- A VIRTUE!' ]
      ),
      s_maze: () => [
         '<18>{#p/papyrus}{#f/5}YES, YES, I KNOW MY PUZZLES CAN BE DIFFICULT...',
         ...(SAVE.data.b.papyrus_fire
            ? [
                 "<18>{#f/5}BUT LOOK, DON'T THINK ABOUT YOUR FAILURE...",
                 '<18>{#f/9}THINK ABOUT WHAT YOU LEARNED FROM IT!',
                 ...(solo()
                    ? []
                    : [
                         '<25>{#p/undyne}{#f/1}* Yeah!!!',
                         '<25>{#f/5}* Wait, what are you talking about?',
                         "<18>{#p/papyrus}{#f/5}THE HUMAN DIDN'T DO SO WELL ON THE WALL OF FIRE.",
                         "<25>{#p/undyne}{#f/10}* Ah.\n* Yeah, I didn't fare much better.",
                         '<18>{#p/papyrus}PRACTICE MAKES PERFECT, UNDYNE.',
                         '<18>{#f/4}YOU OF ALL FISH LADIES SHOULD KNOW THAT.',
                         '<25>{#p/undyne}{#f/17}* Hey, quit calling me that!',
                         '<18>{#p/papyrus}{#f/6}AH- SORRY!!!',
                         "<25>{#p/undyne}{#f/1}* Nah, you're good.\n* Besides...",
                         "<25>{#f/8}* When it comes from a handsome bone man like you, I can't complain!!",
                         '<18>{#p/papyrus}{#f/0}YOU CHEEKY LITTLE!!'
                      ])
              ]
            : [
                 '<18>{#f/0}BUT YOU, MY FRIEND, ARE QUITE THE PUZZLIST!',
                 "<18>{#f/9}IT'S NOT EVERY DAY SOMEONE TROUSLES THIS BONE.",
                 ...(solo()
                    ? []
                    : [
                         '<25>{#p/undyne}{#f/5}* Hey, what are you talking about?',
                         '<18>{#p/papyrus}{#f/5}THE HUMAN BEAT MY INFAMOUS "WALL OF FIRE" EARLIER.',
                         '<25>{#p/undyne}{#f/3}* Wait, really?',
                         "<25>{#f/8}* Even I can't beat that thing!",
                         '<18>{#p/papyrus}PRACTICE MAKES PERFECT, UNDYNE.',
                         "<18>{#f/4}THOUGH, I'M NOT SURE WHERE THEY GOT IT...",
                         '<18>{#f/4}CONSIDERING THAT WAS DEFINITELY THEIR FIRST TRY.',
                         ...(SAVE.data.b.undyne_respecc
                            ? [
                                 "<25>{#p/undyne}{#f/1}* Heh.\n* They've shown to have a taste for challenge.",
                                 "<25>{#p/undyne}{#f/12}* I'm not surprised they beat it so easily!"
                              ]
                            : [
                                 '<25>{#p/undyne}{#f/17}* What?\n* Practice?\n* Screw that!!',
                                 '<25>{#f/7}* GIVE ME YOUR SECRETS NOW, PUNK!!!',
                                 '<18>{#p/papyrus}{#f/6}NO, LET THE PUZZLIST PUZZLE IN PEACE!'
                              ])
                      ])
              ])
      ],
      s_dogs: pager.create(
         0,
         () => [
            '<18>{#p/papyrus}THE SENTRY STATION OF DOGAMY AND DOGARESSA...',
            '<18>{#f/0}I WONDER WHAT IT WOULD BE LIKE TO MARRY A DOG.',
            "<18>{#f/4}THOUGH, I'LL NEVER HAVE TO WORRY ABOUT THAT...",
            "<18>{#f/0}I'D MUCH RATHER MARRY A VERY HANDSOME SKELETON!",
            ...(solo()
               ? []
               : [
                    '<25>{#p/undyne}{#f/1}* So, basically yourself, then.',
                    "<18>{#p/papyrus}{#f/7}HUH?\nWHERE'D YOU GET THAT IDEA??",
                    "<25>{#p/undyne}{#f/1}* It's not like there's any OTHER handsome skeletons out there...",
                    '<25>{#p/undyne}{#f/8}* At least, none as handsome as yourself!',
                    '<18>{#p/papyrus}{#f/4}WELL, I SUPPOSE I DO HAVE A VERY DASHING LOOK...',
                    "<18>{#f/0}BUT NONETHELESS, IT SIMPLY WASN'T MEANT TO BE!"
                 ])
         ],
         () =>
            solo()
               ? [
                    "<18>{#p/papyrus}WHAT!?!?\nWE CAN'T MARRY!!",
                    ...(SAVE.data.b.flirt_papyrus
                       ? [ "<18>{#f/5}WE AGREED THAT IT WOULDN'T WORK OUT, REMEMBER?" ]
                       : [ "<18>{#f/5}WE'RE JUST VERY COOL FRIENDS, REMEMBER?" ])
                 ]
               : [ '<18>{#p/papyrus}{#f/4}SUCH A PAIRING WOULD BE... TOO POWERFUL.' ]
      ),
      s_lesser: pager.create(
         0,
         () => [
            '<18>{#p/papyrus}THIS ROOM USED TO BE CONNECTED WITH A BRIDGE.',
            '<18>{#f/0}TWO HALVES, JOINED AT THE CENTERPOINT...',
            '<18>{#f/0}LIKE THE SOULS OF TWO VERY INTREPID SKELETONS.',
            ...(solo()
               ? [
                    "<18>{#f/5}I DON'T KNOW EXACTLY WHAT SANS IS THINKING NOW...",
                    "<18>{#f/4}BUT I'D IMAGINE IT HAS A LOT TO DO WITH CONDIMENTS.",
                    "<18>{#f/0}IF ONLY HE'D STOP THINKING ABOUT THEM...",
                    '<18>{#f/9}THEN, I WOULDN\'T HAVE TO "YAMOK" HIM FOR IT!'
                 ]
               : [
                    "<25>{#p/undyne}{#f/1}* Oh yeah, aren't you guys linked or something?",
                    '<18>{#p/papyrus}FOR AS LONG AS WE CAN REMEMBER!',
                    '<25>{#p/undyne}{#f/1}* I heard they did experiments with skeletons in the past.',
                    "<25>{#f/8}* If you and Sans were the result, it MUST'VE been a success!",
                    '<18>{#p/papyrus}{#f/1}ME, AN EXPERIMENT!?',
                    "<18>{#f/7}THAT'S PREPOSTEROUS!",
                    '<25>{#p/undyne}{#f/14}* You never know.',
                    '<18>{#p/papyrus}{#f/4}HMM...'
                 ])
         ],
         () =>
            solo()
               ? [
                    '<18>{#p/papyrus}{#f/5}I WISH I HAD MORE TO SAY...',
                    "<18>{#f/4}BUT I CAN'T STOP THINKING ABOUT CONDIMENTS."
                 ]
               : [
                    "<18>{#p/papyrus}{#f/5}WELL, NOW I'M REALLY CURIOUS ABOUT MY PAST.",
                    "<18>{#f/0}LOOKS LIKE I'LL HAVE TO DO SOME RESEARCH!",
                    "<25>{#p/undyne}{#f/14}* If you'd like, I could give you a hand...",
                    "<18>{#p/papyrus}{#f/5}NO, IT'S ALRIGHT. BESIDES, AS THE GUARD CAPTAIN...",
                    '<18>{#f/4}YOU ALREADY HAVE TOO MUCH ON YOUR PLATE.'
                 ]
      ),
      s_bros: pager.create(
         0,
         () => [
            '<18>{#p/papyrus}{#f/4}THOSE SPOT-THE- DIFFERENCE PUZZLES SANS LIKES...',
            '<18>{#f/5}THEY USED TO BE SO EASY FOR ME...',
            "<18>{#f/7}BUT LATELY, IT'S BECOME NEXT TO IMPOSSIBLE!",
            '<18>{#f/4}AND, SHORT OF SCANNING THE IMAGE PIXEL FOR PIXEL...',
            "<18>{#f/7}THERE'S NO WAY ANYONE COULD SOLVE THEM!",
            "<18>{#f/7}IT'S RIDICULOUS!",
            ...(solo()
               ? []
               : [
                    '<25>{#p/undyne}{#f/1}* That puzzle artist in the librarby made it, I think.',
                    '<25>{#f/11}* I talked to her just the other day.',
                    "<25>* ... something tells me she's really bored with her job.",
                    "<18>{#p/papyrus}{#f/4}NOW THERE'S A PUZZLE..."
                 ])
         ],
         () =>
            solo()
               ? [
                    '<18>{#p/papyrus}{#f/4}ARE YOU ASKING FOR MY HELP?',
                    '<18>{#f/7}WELL, FORGET IT!',
                    "<18>{#f/0}UNFAIR PUZZLES AREN'T WORTH SOLVING, ANYWAY."
                 ]
               : [
                    '<25>{#p/undyne}{#f/1}* Whenever I get stuck on those things, I just send it over to Alphys.',
                    '<25>{#f/1}* She does some kinda fancy image subtraction thing... I dunno.',
                    "<25>{#f/12}* I have no idea how it works, but it's great at finding differences."
                 ]
      ),
      s_spaghetti: pager.create(
         0,
         () => [
            '<18>{#p/papyrus}DID YOU ENJOY THE SPAGHETTI I MADE EARLIER?',
            "<18>{#f/0}IT'S NOT EVERY DAY YOU COOK FOR SUCH ESTEEMED GUESTS.",
            ...(solo()
               ? [
                    [
                       '<18>{#f/4}BUT, KNOWING THAT YOU WANTED TO SHARE IT...',
                       '<18>{#f/9}THAT REALLY MADE THE DIFFERENCE!'
                    ],
                    [
                       '<18>{#f/4}ESPECIALLY WHEN THAT COOKING INVOLVES...',
                       '<18>{#f/9}CONCOCTING AN IRRESISTABLE TRAP!\nNYEH!'
                    ]
                 ][(SAVE.data.n.state_papyrus_spaghet + 1) % 2]
               : [
                    '<25>{#p/undyne}{#f/1}* Sans once told me you wanted to cook for the king.',
                    '<25>{#f/1}* Is that true?',
                    '<18>{#p/papyrus}OH, YEAH!\nI DO, ACTUALLY.',
                    "<18>I'D OFFER HIM ONLY THE HIGHEST QUALITY DISH.",
                    '<18>{#f/9}YOU AND THE HUMAN COULD EVEN HELP!',
                    "<25>{#p/undyne}{#f/8}* I'm down for it!!",
                    "<25>{#f/9}* It's just a matter of if HE is...",
                    '<18>{#p/papyrus}{#f/5}YEAH...'
                 ])
         ],
         () =>
            solo()
               ? [
                    [ '<18>{#p/papyrus}REMEMBER, SHARING IS CARING!' ],
                    [
                       '<18>{#p/papyrus}{#f/4}IF YOU EVER WANT MORE SPAGHETTI...',
                       "<18>{#f/0}DON'T HESITATE TO STOP BY MY FOOD MUSEUM!"
                    ]
                 ][(SAVE.data.n.state_papyrus_spaghet + 1) % 2]
               : [
                    '<18>{#p/papyrus}{#f/5}THE KING CAN BE A LITTLE RECLUSIVE AT TIMES.',
                    "<18>I, UH...\nI HOPE HE'S DOING ALRIGHT UP THERE."
                 ]
      ),
      s_math: pager.create(
         0,
         () => [
            '<18>{#p/papyrus}MATH HAS ALWAYS BEEN A PET PEEVE OF MINE.',
            '<18>{#f/5}CALCULUS THIS, GEOMETRY THAT...',
            '<18>{#f/7}WHATEVER HAPPENED TO COUNTING ON YOUR FINGERBONES?',
            '<18>{#f/0}THAT "ADVANCED" MATH IS TOTALLY UNNECESSARY.',
            ...(solo()
               ? []
               : [
                    '<25>{#p/undyne}{#f/17}* Unnecessary, huh?',
                    "<25>{#f/7}* Without advanced math, we'd still be living in the dark ages!",
                    "<18>{#p/papyrus}{#f/4}YEAH, I KNOW.\nI JUST DON'T LIKE SOLVING IT.",
                    "<25>{#p/undyne}{#f/14}* Oh, no, I'm with you on that."
                 ])
         ],
         () => [
            '<18>{#p/papyrus}{#f/4}IF YOU WANT HELP WITH ADVANCED MATH...',
            ...(solo()
               ? [ '<18>{#f/0}JUST ASK DR. ALPHYS!!' ]
               : [ '<25>{#p/undyne}{#f/1}* Just ask Dr. Alphys!!', '<18>{#p/papyrus}{#f/6}UH... YEAH, THAT!' ])
         ]
      ),
      s_puzzle1: pager.create(
         0,
         () => [
            '<18>{#p/papyrus}THIS ROOM IS NORMALLY BLOCKED BY THOSE LASERS.',
            "<18>{#f/5}ALTHOUGH, WE'RE THINKING OF REMOVING THEM...",
            '<18>{#f/4}THE KING RELEASED A MANDATE ON PUZZLES RECENTLY.',
            '<18>{#f/4}HE SAYS LASERS ARE INEFFECTIVE AND HAZARDOUS TO KIDS.',
            ...(solo()
               ? [
                    "<18>{#f/5}WHILE I DO THINK THEY'RE NEAT, PART OF ME AGREES...",
                    "<18>{#f/5}I WOULDN'T WANT ANY KIDS GETTING HURT."
                 ]
               : [
                    '<25>{#p/undyne}{#f/16}* Heh...',
                    "<25>{#f/9}* That's such an Asgore thing to do.",
                    '<18>{#p/papyrus}{#f/6}BUT WHAT ABOUT THE KIDS!?',
                    "<25>{#p/undyne}{#f/1}* Yeah, I know.\n* He's probably right.",
                    '<25>{#f/8}* But those lasers WERE pretty fun growing up!',
                    '<18>{#p/papyrus}{#f/4}OF COURSE YOU\'D FIND RISKING YOUR LIFE "FUN."',
                    "<25>{#p/undyne}{#f/14}* Who wouldn't!",
                    '<18>{#p/papyrus}{#f/6}UH, ME???'
                 ])
         ],
         () =>
            solo()
               ? [ '<18>{#p/papyrus}REMEMBER, SAFETY FIRST!' ]
               : [
                    "<18>{#p/papyrus}{#f/4}THERE'S A BIT OF A DIFFERENCE BETWEEN RISKING A LIFE...",
                    '<18>{#f/7}AND NEEDLESSLY THROWING IT AWAY!'
                 ]
      ),
      s_puzzle2: pager.create(
         0,
         () => [
            '<18>{#p/papyrus}HMMM... THE SOLUTION TO THIS ONE...?',
            '<18>{#f/5}I ACTUALLY JUST STEPPED OVER THE LASERS.',
            '<18>{#f/0}THEREFORE, THE SOLUTION IS TO BE TALL AND HANDSOME!',
            ...(solo()
               ? [ "<18>{#f/4}... DEFINITELY DON'T DO THIS IF YOU'RE TOO SMALL." ]
               : [
                    '<25>{#p/undyne}{#f/8}* Meanwhile, my JETPACK and I are here...',
                    '<18>{#p/papyrus}{#f/4}A JETPACK YOU ALMOST NEVER USE, MIND YOU.',
                    "<25>{#p/undyne}{#f/17}* I don't have infinite energy reserves, Papyrus!"
                 ])
         ],
         () =>
            solo()
               ? [ "<18>{#p/papyrus}{#f/9}I'M SOLVING IT AS WE SPEAK!" ]
               : [ '<18>{#p/papyrus}{#f/4}HMM...', '<18>{#f/0}UNDYNE SHOULD PROBABLY INVEST IN A BATTERY.' ]
      ),
      s_jenga: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}{#f/5}AT FIRST, THIS PUZZLE'S OUTCOME DISAPPOINTED ME...",
            '<18>{#f/4}BUT THEN I REALIZED...',
            '<18>{#f/0}THE CHANCES OF WHAT HAPPENED WERE SO LOW...',
            '<18>{#f/0}... THAT WE MAY BE THE ONLY ONES TO EVER SEE IT!',
            '<18>{#f/0}HOW LUCKY YOU MUST FEEL RIGHT NOW.',
            ...(solo()
               ? []
               : [
                    '<25>{#p/undyne}{#f/5}* Hey, gambling is really bad for you, YOU KNOW THAT RIGHT?',
                    "<18>{#p/papyrus}{#f/4}WHY DOES SHE THINK I'M GAMBLING.",
                    '<25>{#p/undyne}{#f/4}* Your time could be better spent doing things that matter!',
                    '<25>{#f/5}* Like, uh...',
                    '<25>{#p/undyne}{#f/3}* ...',
                    '<18>{#p/papyrus}{#f/5}ARE YOU ALRIGHT?',
                    '<25>{#p/undyne}{#f/16}* ... sorry, bad memory.',
                    '<18>{#p/papyrus}{#f/5}I SEE.'
                 ])
         ],
         () =>
            solo()
               ? [ '<18>{#p/papyrus}LUCK IS ON OUR SIDE TODAY, HUMAN!' ]
               : [ '<18>{#p/papyrus}{#f/5}IT APPEARS LUCK IS NOT ON OUR SIDE AFTER ALL.' ]
      ),
      s_pacing: pager.create(
         0,
         () => [
            '<18>{#p/papyrus}THE SENTRY STATION OF CANIS MINOR...',
            "<18>{#f/4}THAT'S WHERE THOSE LOUD MOON ROCK SALESFOLK STAND.",
            '<18>{#f/5}WHAT ARE MOON ROCKS MADE OF, ANYWAY?',
            "<18>{#f/4}THEY CAN'T BE MADE OF MOONS, BECAUSE...",
            '<18>{#f/7}MOONS ARE JUST BIG ROCKS ANYWAY!',
            '<18>{#f/5}DOES THAT MEAN MOONS ARE MOON ROCKS THEMSELVES?',
            '<18>{#f/5}WHERE DOES "MOON" END AND "MOON ROCK" BEGIN?',
            ...(solo()
               ? []
               : [
                    '<25>{#p/undyne}{#f/1}* Serious question.',
                    '<25>{#f/7}* Do you ever worry that you THINK too much??',
                    '<18>{#p/papyrus}{#f/1}WH-\nTHINKING IS GOOD FOR THE BRAIN!',
                    "<25>{#p/undyne}{#f/1}* But you don't actually have a brain.",
                    '<25>{|}{#f/1}* You have a- {%}',
                    '<18>{#p/papyrus}{#f/7}YES, YES, I KNOW!\nSANS HAS REMINDED ME PLENTY.',
                    '<18>{#f/4}YOU SEE, HUMAN...',
                    "<18>{#f/4}WE MONSTERS DON'T REALLY USE BRAINS TO THINK.",
                    "<18>{#f/0}IT'S MORE LIKE... A SOUL THING.",
                    '<25>{#p/undyne}{#f/8}* As opposed to a SKULL thing.',
                    '<18>{#p/papyrus}{#f/7}OH MY GOD!!!'
                 ])
         ],
         () =>
            solo()
               ? [ '<18>{#p/papyrus}{#f/4}PERHAPS US MORTALS ARE NOT WORTHY OF SUCH KNOWLEDGE.' ]
               : [ "<18>{#p/papyrus}{#f/4}YOU KNOW IT'S BAD WHEN UNDYNE STARTS MAKING PUNS." ]
      ),
      s_puzzle3: pager.create(
         0,
         [ '<18>{#p/papyrus}{#f/7}...', '<18>{#f/5}...', "<18>{#f/4}LET'S NOT TALK ABOUT THIS PUZZLE." ],
         () => [
            '<18>{#p/papyrus}{#f/4}...',
            ...(solo() ? [] : [ '<25>{#p/undyne}{#f/7}* HE SAID NOT TO TALK ABOUT IT!!!' ])
         ]
      ),
      s_greater: pager.create(
         0,
         () => [
            '<18>{#p/papyrus}THE SENTRY STATION OF CANIS MAJOR...',
            '<18>{#f/5}THAT DOG HAS A HEART OF GOLD- LADEN PLATINUM.',
            '<18>{#f/4}IF ONLY I WAS IN THE ROYAL GUARD...',
            "<18>{#f/0}I'D BE ABLE TO REPAY IT FOR ITS KINDNESS!",
            ...(solo()
               ? []
               : [
                    '<25>{#p/undyne}{#f/1}* ... how so?',
                    '<18>{#p/papyrus}WELL, IF I GO TO WORK WITH HIM EVERY DAY...',
                    '<18>{#f/0}I CAN BE A MORE POSITIVE PRESENCE!',
                    '<25>{#p/undyne}{#f/9}* ...',
                    "<25>{#f/16}* You're making me reconsider some decisions.",
                    '<18>{#p/papyrus}{#f/6}LIKE... WHAT?',
                    '<25>{#p/undyne}{#f/17}* ...',
                    "<25>{#p/undyne}{#f/17}* I'll let you know when I figure it out!!",
                    '<18>{#p/papyrus}OKAY!!'
                 ])
         ],
         () =>
            solo()
               ? [ '<18>{#p/papyrus}{#f/4}SOMETIMES, I FEEL LIKE UNDYNE TREATS ME LIKE A CHILD.' ]
               : [
                    '<18>{#p/papyrus}{#f/4}SOMETIMES, I FEEL LIKE...',
                    '<25>{#p/undyne}{#f/20}* Feel like what...?',
                    '<18>{#p/papyrus}{#f/4}UH, NEVER MIND.',
                    '<25>{#p/undyne}{#f/11}* ...',
                    "<18>{#p/papyrus}{#f/6}I SWEAR, IT'S NOTHING!",
                    '<25>{#p/undyne}{#f/16}* If you say so...'
                 ]
      ),
      s_bridge: pager.create(
         0,
         () => [
            '<18>{#p/papyrus}REMEMBER THE "GAUNTLET OF DEADLY TERROR?"',
            '<18>{#f/5}AS MUCH AS I WANTED TO USE IT...',
            '<18>{#f/5}LIFE HAS TAUGHT ME TO AVOID PUTTING OTHERS IN DANGER.',
            ...(solo()
               ? [ "<18>{#f/0}IT'S FOR THE BEST.\nREALLY." ]
               : [
                    '<25>{#p/undyne}{#f/18}* Something you want to talk about?',
                    '<18>{#p/papyrus}{#f/5}YOU ALREADY KNOW WHY I LEARNED THAT LESSON.',
                    '<25>{#p/undyne}{#f/18}* Oh.\n* Yeah...',
                    "<18>{#p/papyrus}{#f/6}BUT HEY, AT LEAST THEY'RE STILL ALIVE...",
                    '<25>{#p/undyne}{#f/12}* Heh, yeah.'
                 ])
         ],
         [ '<18>{#p/papyrus}{#f/5}SOME TRAPS ARE BETTER LEFT UNSPRUNG.' ]
      ),
      s_town1: pager.create(
         0,
         () => [
            '<18>{#p/papyrus}STARTON TOWN: THE NORTH SIDE!',
            "<18>{#f/4}I DON'T REALLY SPEND MUCH TIME THERE.",
            '<18>{#f/5}SANS, ON THE OTHER HAND...',
            ...(solo()
               ? []
               : [
                    "<25>{#p/undyne}{#f/17}* Oh, I know.\n* I've SEEN him slacking at the bar.",
                    '<18>{#p/papyrus}{#f/4}TELL ME ABOUT IT...',
                    "<18>{#f/6}... ACTUALLY, DON'T TELL ME ABOUT IT!",
                    "<18>{#f/6}I DON'T EVEN WANT TO KNOW!"
                 ])
         ],
         () => [
            "<18>{#p/papyrus}DON'T WORRY!\nLAST I CHECKED, HE'S AT HOME.",
            ...(solo()
               ? []
               : [
                    "<25>{#p/undyne}{#f/5}* When it comes to Sans, that doesn't really confirm anything.",
                    '<18>{#p/papyrus}{#f/4}OH.',
                    '<18>{#p/papyrus}{#f/5}YEAH, HIM AND HIS SHORTCUTS...'
                 ])
         ]
      ),
      s_taxi,
      s_town2: pager.create(
         0,
         () => [
            '<18>{#p/papyrus}STARTON TOWN: THE SOUTH SIDE!',
            '<18>{#f/4}OR AS I LIKE TO CALL IT...',
            '<18>{#f/9}THE "SUPERIOR" SIDE!',
            ...(solo()
               ? []
               : [
                    "<25>{#p/undyne}{#f/5}* Are you just saying that because you don't like Grillby's?",
                    '<18>{#p/papyrus}{#f/4}MAYBE IN THE PAST, BUT...',
                    "<18>{#f/0}WELL, MAYBE THE NORTH SIDE ISN'T SO BAD AFTER ALL."
                 ])
         ],
         () =>
            solo()
               ? [
                    '<18>{#p/papyrus}{#f/0}I CALL IT SO BECAUSE I LIVE HERE.',
                    '<18>{#f/4}NO WONDER THAT FRIENDLY GHOST PUT THEIR SHOP HERE...',
                    "<18>{#f/9}WHO WOULDN'T WANT TO BE IN PROXIMITY OF SUCH GREATNESS?"
                 ]
               : [ '<18>{#p/papyrus}{#f/7}THE SOUTH SIDE IS STILL SUPERIOR THOUGH!' ]
      ),
      s_battle: pager.create(
         0,
         () => [
            '<18>{#p/papyrus}{#f/9}STANDING AT THE SITE OF OUR LEGENDARY BATTLE?',
            "<18>{#f/0}NO, NO, GO AHEAD.\nIT'S A PLACE OF HISTORICAL VALUE.",
            ...(solo()
               ? []
               : [
                    "<25>{#p/undyne}{#f/7}* Don't admire the view for too long, punk!",
                    "<25>{#f/8}* You've still gotta admire the site of OUR epic battle!",
                    '<18>{#p/papyrus}{#f/6}HOW MANY LEGENDARY BATTLES HAVE THEY BEEN IN?',
                    '<25>{#p/undyne}{#f/12}* Possibly... too many.',
                    '<25>{#p/undyne}{#f/8}* OR... NOT ENOUGH!!!',
                    "<18>{#p/papyrus}{#f/9}YEAH, NOW THAT'S MORE LIKE IT!"
                 ])
         ],
         [ "<18>{#p/papyrus}{#f/4}I'M PETITIONING TO HAVE THIS PLACE PRESERVED." ]
      ),
      s_grillbys: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}{#f/5}OH... GRILLBY'S...",
            '<18>{#f/5}I DESPISED THAT PLACE ONCE.',
            '<18>{#f/0}BUT THESE DAYS, THEIR FOOD HAS IMPROVED.',
            '<18>{#f/4}AND, MOST IMPORTANTLY...',
            '<18>{#f/1}THEY FINALLY FIXED THE JUKEBOX!!!',
            '<18>{#f/0}I KNOW!!\nCRAZY, RIGHT??',
            ...(solo()
               ? []
               : [
                    '<25>{#p/undyne}{#f/8}* Oh, I KNOW!!!',
                    "<25>{#f/1}* That thing's been broken since before I was BORN.",
                    '<18>{#p/papyrus}{#f/4}YEAH...'
                 ])
         ],
         () => [
            '<18>{#p/papyrus}{#f/4}TRACK THREE IS MY PERSONAL FAVORITE.',
            ...(solo() ? [] : [ "<25>{#p/undyne}{#f/8}* Mine's track four!" ])
         ]
      ),
      s_backrooms: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}{#f/4}PART OF THE REASON GRILLBY'S FOOD IMPROVED...",
            '<18>{#f/4}HAS TO DO WITH THE USE OF REPLICATION TECHNOLOGY.',
            '<18>{#f/0}OF COURSE, THAT MADE THE KITCHEN OBSOLETE.',
            '<18>{#f/5}NOW, THAT AREA IS JUST USED TO PLAY CARD GAMES...',
            ...(solo()
               ? []
               : [
                    '<25>{#p/undyne}{#f/1}* Speaking of, how is Canis Minor doing?',
                    "<18>{#p/papyrus}{#f/4}OH, THEY'RE FINE, UNDYNE.",
                    '<18>{#f/4}THEY SEEM TO HAVE THEIR OWN AGENDA FOR LIFE.',
                    '<18>{#f/0}INVOLVING LOTS OF CARD GAMES!\nAND HEADPATS!'
                 ])
         ],
         () =>
            solo()
               ? [ '<18>{#p/papyrus}{#f/5}IS CANIS MINOR STILL IN THERE...?' ]
               : [ "<18>{#p/papyrus}{#f/0}DOGS AND CARD GAMES... WHO'D HAVE THUNK IT!" ]
      ),
      s_bonehouse: pager.create(
         0,
         () => [
            '<18>{#p/papyrus}WHAT BETTER PLACE TO BE THAN MY HOUSE!',
            "<18>{#f/0}IT'S PRACTICALLY THE ONLY PLACE I FEEL AT HOME.",
            ...(solo()
               ? []
               : [ "<25>{#p/undyne}{#f/8}* Well, obviously, it's your HOUSE after all!", '<18>{#p/papyrus}YEAH!!!' ])
         ],
         () => [
            "<18>{#p/papyrus}DON'T YOU FEEL AT HOME HERE?",
            ...(solo()
               ? []
               : [
                    '<25>{#p/undyne}{#f/1}* Actually, where DO humans live??',
                    '<25>{#p/undyne}{#f/8}* I heard that Earth is a decaying mess, although it was only a rumor.',
                    '<18>{#p/papyrus}{#f/4}HONESTLY, HUMANS COULD BE FROM ANYWHERE NOWADAYS.'
                 ])
         ]
      ),
      s_papyrusroom: pager.create(
         0,
         () =>
            SAVE.data.n.plot_date < 1.1
               ? [
                    '<18>{#p/papyrus}WOW, IT ONLY TOOK YOU FOUR SECONDS TO CALL ME!!',
                    '<18>YOU MUST BE VERY DESPERATE FOR MY HELP!!!',
                    "<18>{#f/9}WELL, DO NOT FEAR!\nTHIS IS PAPYRUS'S HOTFUL HELPLINE!",
                    '<18>{#f/4}JUST DESCRIBE YOUR LOCATION, AND...!',
                    '<18>{#f/6}I WILL DESCRIBE SOME HOT TIPS!',
                    '<18>{#f/0}SO, WHERE ARE YOU?',
                    '<18>{#f/4}...',
                    "<18>{#f/5}YOU'RE STILL IN MY ROOM??",
                    '<18>{#f/6}...',
                    '<18>{#f/6}HAVE YOU HEARD OF SOMETHING CALLED A... DOOR?',
                    "<18>{#f/0}WAIT, DON'T WORRY!\nI'LL DRAW A DIAGRAM FOR YOU!"
                 ]
               : SAVE.data.n.plot_date < 1.2
               ? [
                    "<18>{#p/papyrus}{#f/1}WHAT?? I THOUGHT YOU'D LEFT MY ROOM!",
                    "<18>{#f/4}WE'LL HAVE TO START OVER FROM SQUARE ONE...",
                    '<18>{#f/0}FIRST, DO YOU KNOW WHO PAPYRUS IS!?'
                 ]
               : [
                    '<18>{#p/papyrus}{#f/4}SO YOU CAME BACK TO MY ROOM...',
                    "<18>{#f/0}JUST COULDN'T STAY AWAY FOR LONG, HUH?",
                    "<18>{#f/0}THAT'S OKAY.",
                    ...(solo()
                       ? []
                       : [
                            '<25>{#p/undyne}{#f/1}* Hey, maybe you could visit my room!',
                            '<18>{#p/papyrus}{#f/4}...',
                            '<25>{#p/undyne}{#f/17}* Wait, I forgot my house went up in flames.',
                            '<25>{#f/8}* Never mind!'
                         ])
                 ],
         () =>
            SAVE.data.n.plot_date < 1.1
               ? [ "<18>{#p/papyrus}{#f/6}HOLD UP!\nI'M STILL DRAWING!" ]
               : SAVE.data.n.plot_date < 1.2
               ? [ '<18>{#p/papyrus}{#f/1}DO I KNOW WHO PAPYRUS IS!?' ]
               : [
                    "<18>{#p/papyrus}{#f/4}MAYBE WHILE YOU'RE THERE...",
                    '<18>{#f/4}YOU CAN LOOK AFTER MY ACTION FIGURES.',
                    ...(solo()
                       ? [ "<18>{#f/5}THEY'VE BEEN KIND OF LONELY LATELY." ]
                       : [
                            '<25>{#p/undyne}{#f/1}* You mean the ones Asgore made?',
                            "<18>{#p/papyrus}{#f/5}YEAH!\nTHEY'VE BEEN KIND OF LONELY LATELY.",
                            '<25>{#p/undyne}{#f/16}* Aw...\n* Poor things...',
                            '<18>{#p/papyrus}{#f/8}SO LONELY...!'
                         ])
                 ],
         () =>
            SAVE.data.n.plot_date < 1.1
               ? [ "<18>{#p/papyrus}{#f/6}HOLD UP!\nI'M STILL DRAWING!" ]
               : SAVE.data.n.plot_date < 1.2
               ? [ '<18>{#p/papyrus}{#f/1}DO I KNOW WHO PAPYRUS IS!?' ]
               : [ '<18>{#p/papyrus}{#f/5}NEVER FORGET TO LOOK AFTER YOUR ACTION FIGURES.' ]
      ),
      s_innterior: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}THE INN'S A GREAT PLACE TO STAY.",
            ...(solo()
               ? [ '<18>I ESPECIALLY LOVE THE PHOTO ON THE WALL...', '<18>{#f/5}I FEEL... CONNECTED TO IT, SOMEHOW.' ]
               : [
                    '<25>{#p/undyne}{#f/14}* Oh yeah, the reception lady is really nice!',
                    "<25>{#f/14}* And she's a big monster history buff!"
                 ])
         ],
         () => [
            '<18>{#p/papyrus}{#f/5}DO YOU EVER WONDER WHAT LIFE WAS LIKE BEFORE THE WAR?',
            ...(solo()
               ? []
               : [
                    '<25>{#p/undyne}{#f/10}* Honestly, Papyrus?',
                    '<25>{#f/16}* It was pretty good.',
                    '<25>{#f/1}* Gerson and Asgore could both tell you countless stories...',
                    "<25>{#f/12}* Knowing you, it'd make for a hundred great bedtimes!",
                    '<18>{#p/papyrus}WITHOUT DOUBT!'
                 ])
         ]
      ),
      s_beddinng: pager.create(
         0,
         () => [
            '<18>{#p/papyrus}GROWING UP, SANS USED READ ME BEDTIME STORIES.',
            '<18>HAVE YOU EVER HEARD OF "GENEROUS MONSTER?"',
            '<18>{#f/8}SANS READ IT TO ME LAST NIGHT, AND I...!',
            '<18>{#f/6}I CRIED...',
            ...(solo()
               ? [ '<18>{#f/5}THE ENDING WAS JUST TOO MUCH.' ]
               : [
                    "<25>{#p/undyne}{#f/1}* So what?\n* Crying's not a bad thing, Papyrus.",
                    '<18>{#p/papyrus}{#f/5}I KNOW...',
                    '<18>{#p/papyrus}{#f/8}BUT... STILL!'
                 ])
         ],
         [ '<18>{#p/papyrus}{#f/8}AUGH...!' ]
      ),
      s_librarby: pager.create(
         0,
         () => [
            '<18>{#p/papyrus}I LOVE THE LIBRARBY.',
            '<18>{#f/0}THE BOOKS ARE ALL ARRANGED BY COLOR!',
            ...(solo() ? [] : [ '<25>{#p/undyne}{#f/8}* Perfectly good reason to love a librarby!' ])
         ],
         [ '<18>{#p/papyrus}TELL ME, WHAT\'S A "LIBRARBY CARD?"' ]
      ),
      s_exit: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}CAREFUL, THAT'S THE FOUNDRY ENTRANCE.",
            '<18>{#f/4}ONLY DARKNESS AWAITS YOU IN THAT FORSAKEN PLACE.',
            ...(solo()
               ? []
               : [
                    '<25>{#p/undyne}{#f/1}* Ha, no argument from me.',
                    '<25>{#f/8}* Half the time I just use my jetpack as a flashlight!'
                 ])
         ],
         () =>
            solo()
               ? [ '<18>{#p/papyrus}{#f/4}DID I SAY THE FOUNDRY WAS DARK?\nBECAUSE IT IS.' ]
               : [
                    "<18>{#p/papyrus}IF I'VE LEARNED ONE THING FROM UNDYNE...",
                    "<18>{#f/0}IT'S THAT JETPACKS ARE PRETTY NEATO, ACTUALLY.",
                    '<25>{#p/undyne}{#f/1}* Anywhere you can go in a hovercar, you can get to with a jetpack!',
                    '<25>{#f/8}* AND IT LOOKS COOLER!!'
                 ]
      ),
      f_start: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}SO YOU'RE IN THE FOUNDRY NOW.",
            '<18>{#f/4}YOU SHOULD WATCH YOURSELF IN THERE...',
            '<18>{#f/0}THOSE STEAM VENTS ARE UNWIELDY.',
            ...(solo()
               ? []
               : [
                    "<25>{#p/undyne}{#f/17}* Steam??\n* That's what you're worried about??",
                    '<25>{#f/8}* I used to swing on the pipes like they were part of it jungle gym!',
                    "<18>{#p/papyrus}{#f/6}UNDYNE, NO!\nDON'T ENCOURAGE THEM FURTHER!!"
                 ])
         ],
         () =>
            solo()
               ? [ '<18>{#p/papyrus}{#f/6}A SKELETON CAN ONLY TAKE SO MUCH HEAT!' ]
               : [ '<18>{#p/papyrus}{#f/6}A SKELETON CAN ONLY TAKE SO MUCH ACTION!' ]
      ),
      f_sans: pager.create(
         0,
         () => [
            '<18>{#p/papyrus}{#f/0}MY BROTHER HAS A STATION HERE.',
            '<18>{#f/4}YES, HE MANS TWO STATIONS AT ONCE.',
            "<18>{#f/0}AMAZING, ISN'T HE?",
            '<18>{#f/7}HE SLACKS OFF TWICE AS MUCH AS NORMAL!!',
            ...(solo()
               ? []
               : [
                    '<25>{#p/undyne}{#f/17}* At least he keeps vigilant, right??',
                    '<18>{#p/papyrus}{#f/0}AH, YES... QUITE VIGILANT INDEED.',
                    '<18>{#f/4}... HE PAYS VERY CLOSE ATTENTION TO HIS DAYDREAMS.'
                 ])
         ],
         [ '<18>{#p/papyrus}{#f/4}WE WAKEFUL FOLK COULD ONLY DREAM OF SUCH SLOTH...' ]
      ),
      f_corridor: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}WHAT'S IN YOUR DIMENSIONAL BOX?",
            "<18>{#f/4}ACTUALLY, DON'T TELL ME.",
            "<18>{#f/7}THAT'D BE A BLATANT VIOLATION OF YOUR PRIVACY!",
            ...(solo()
               ? []
               : SAVE.data.b.undyne_respecc
               ? [ '<25>{#p/undyne}{#f/17}* ...', "<25>{#p/undyne}{#f/1}* ... yeah, you're right." ]
               : [
                    '<25>{#p/undyne}{#f/8}* Wait, no!\n* I want to know!',
                    "<25>{#f/17}* You!\n* What've you been hiding, punk!?",
                    '<18>{#p/papyrus}{#f/6}PROBABLY NOTHING!',
                    "<25>{#p/undyne}{#f/17}* I wasn't asking you.",
                    "<25>{#f/14}* ... eh, I'll just search the dimensional storage array later.",
                    "<18>{#p/papyrus}{#f/6}WHAT!?\nTHAT'S A THING?",
                    '<18>{#p/papyrus}{#f/5}I GUESS THE ITEMS DO HAVE TO GO SOMEWHERE...'
                 ])
         ],
         () =>
            solo()
               ? [ '<18>{#p/papyrus}{#f/4}... AT LEAST TELL ME IT\'S NOT "DOG RESIDUE."' ]
               : [
                    '<18>{#p/papyrus}{#f/4}JUST BETWEEN YOU AND I...',
                    "<18>{#f/0}UNDYNE DOESN'T ACTUALLY WANT TO STEAL YOUR STUFF.",
                    "<25>{#p/undyne}{#f/12}* Me? Stealing?\n* Pfft, I dunno what you're talking about!",
                    "<18>{|}{#p/papyrus}SEE?\nSHE'S NOT- {%}",
                    SAVE.data.b.undyne_respecc
                       ? "<25>{#p/undyne}{#f/14}* I'd only steal from someone who ISN'T the bravest punk around!"
                       : "<25>{#p/undyne}{#f/14}* I'd only steal from someone who ISN'T the nicest punk around.",
                    "<18>{#p/papyrus}{#f/1}SO YOU'D STEAL FROM ME, THEN.",
                    "<25>{#p/undyne}{#f/17}* Don't overthink it!"
                 ]
      ),
      f_doge: pager.create(
         0,
         () => [
            '<18>{#p/papyrus}"BEWARE OF SLEEPING DOGS."',
            '<18>AN OMINOUS WARNING, BUT...',
            '<18>WHO MIGHT THIS DOG POSSIBLY BE?',
            ...(solo()
               ? []
               : [
                    "<25>{#p/undyne}{#f/1}* Well, duh... it's Doge!\n* One of my top guards.",
                    '<25>{#f/16}* Or rather, WAS one of my top guards.',
                    '<25>{#f/9}* ...\n* I think I went a bit too hard on her.',
                    "<18>{#p/papyrus}HEY, DON'T BEAT YOURSELF UP OVER IT.",
                    '<18>YOU CAN JUST APOLOGIZE TO HER LATER!',
                    "<25>{#p/undyne}{#f/16}* Heh... it'll take a bit more than a simple apology."
                 ])
         ],
         () =>
            solo()
               ? [ "<18>{#p/papyrus}MAYBE IT'S THAT PESKY CANINE WHO HANGS BY MY HOUSE." ]
               : [
                    "<18>{#p/papyrus}{#f/5}IF I WERE YOU, I'D BE SURE TO TALK THINGS OUT.",
                    "<25>{#p/undyne}{#f/12}* That's the plan!",
                    '<18>{#p/papyrus}{#f/0}GOOD!'
                 ]
      ),
      f_puzzle1,
      f_quiche: pager.create(
         0,
         () => [
            '<18>{#p/papyrus}{#f/5}MY BROTHER CAME BY HERE THE OTHER DAY...',
            '<18>{#f/5}HE SAID HE HAD TO DROP SOMETHING OFF.',
            '<18>{#f/5}I ASKED HIM ABOUT IT, AND HE ISSUED ME A RIDDLE...',
            '<18>{#f/4}A RIDDLE ABOUT A VERY "CHEESY" JOKE.',
            ...(solo()
               ? []
               : [
                    '<25>{#p/undyne}{#f/14}* I think I know what he meant, Papyrus.',
                    '<18>{#p/papyrus}{#f/0}WHAT?\nWHAT WAS IT!?',
                    '<25>{#p/undyne}{#f/1}* Oh, come on.\n* You know your brother better than anyone.',
                    '<25>{#f/12}* Solving this one should be a piece of cake!',
                    '<18>{#p/papyrus}{#f/5}HMM...\nA CHEESY RIDDLE...',
                    '<18>{#p/papyrus}{#f/4}A PIECE OF CAKE...'
                 ])
         ],
         [ "<18>{#p/papyrus}{#f/6}I'LL GET BACK TO YOU WITH THE ANSWER SOON!" ]
      ),
      f_puzzle2: f_puzzle1,
      f_story1: pager.create(
         0,
         () => [
            '<18>{#p/papyrus}{#f/0}SIGNAL STARS ARE PRETTY NEAT, HUH?',
            '<18>{#f/5}THOUGH, THEY ONLY RESET PERIODICALLY.',
            '<18>{#f/4}UNTIL THEN, ONLY A SINGLE MESSAGE IS SAVED...',
            ...(solo()
               ? []
               : [
                    "<25>{#p/undyne}{#f/12}* So that's why my messages to Alphys aren't getting through.",
                    '<18>{#p/papyrus}{#f/6}YOU USED A SIGNAL STAR FOR THAT!?',
                    '<18>{#f/5}OH...\nUNDYNE...',
                    "<25>{#p/undyne}{#f/17}* What?\n* I thought it'd send the message on demand!",
                    "<25>{#f/11}* That's how they used to work, isn't it?",
                    '<18>{#p/papyrus}{#f/0}AH, NOT EXACTLY.',
                    '<18>{#f/0}WHEN WE FIRST DISCOVERED THEM GROWING HERE...',
                    '<18>{#f/9}THEY WERE A LOT MORE RECEPTIVE TO NEW SIGNALS!',
                    '<18>{#f/5}THEN, AS THEY GREW OLDER, THEY BECAME SLOWER.',
                    '<25>{#p/undyne}{#f/1}* Huh.\n* Fascinating!',
                    "<25>{#f/12}* I guess I'll have to come up with something else, then."
                 ])
         ],
         [ "<18>{#p/papyrus}{#f/4}THIS PHONE CALL PROBABLY WON'T BE RECORDED." ]
      ),
      f_prechase: pager.create(0, () =>
         SAVE.data.n.plot < 37.11
            ? []
            : SAVE.data.n.plot < 48
            ? [
                 '<18>{#p/papyrus}THERE USED TO BE A BRIDGE HERE, BUT IT COLLAPSED.',
                 '<18>HOPEFULLY THEY BUILD A NEW ONE SOON...',
                 '<18>{#f/6}RIDING A FLIMSY FLOATING PLATFORM IS NERVEWRACKING!'
              ]
            : [
                 '<18>{#p/papyrus}I HEARD SOME WORKERS BUILT A NEW BRIDGE HERE!',
                 '<18>THANK HEAVENS...',
                 '<18>I WAS GETTING TIRED OF THAT FLOATING PLATFORM.',
                 ...(solo()
                    ? []
                    : [
                         "<25>{#p/undyne}{#f/8}* What's so bad about a floating platform!?",
                         "<18>{#p/papyrus}{#f/4}YOU HAVE A JETPACK, SO YOU CAN'T FALL OFF.",
                         '<18>{#f/6}I HAVE NO SUCH GUARANTEES!',
                         '<25>{#p/undyne}{#f/1}* Oh, come on, the gravity on that thing was secure.',
                         "<18>{#p/papyrus}{#f/6}I'LL BELIEVE IT WHEN I SEE IT!",
                         "<18>{#f/4}WHICH I WON'T EVER DO, BECAUSE...",
                         '<18>{#f/0}THE BRIDGE IS BACK IN PLACE, THANKS TO THOSE WORKERS.'
                      ])
              ]
      ),
      f_chase: pager.create(
         0,
         () => [
            '<18>{#p/papyrus}{#f/4}THE FIRST TIME I SAW THIS ROOM, I WAS... AMAZED.',
            "<18>{#f/6}SO MUCH SO, THAT I COULDN'T FIND MY WAY OUT!",
            '<18>{#f/5}NOT TO MENTION THE TRAPS...',
            ...(solo()
               ? []
               : [
                    '<25>{#p/undyne}{#f/1}* Oh yeah, I forgot about those things.',
                    "<25>{#p/undyne}{#f/14}* Most people know the way through, though, so it's alright.",
                    '<18>{#p/papyrus}{#f/6}THIS SEEMS LIKE A RECIPE FOR DISASTER.',
                    "<25>{#p/undyne}{#f/14}* Hey, at least it's fun!",
                    '<25>{#p/undyne}{#f/1}* I think the canine unit even started using it as a training ground.',
                    '<18>{#p/papyrus}{#f/4}AND HOW DOES THAT WORK, EXACTLY?',
                    '<25>{#p/undyne}{#f/17}* It\'s something about "tactical temptation avoidance?"',
                    '<25>{#p/undyne}{#f/12}* They put treats behind the trap paths, and the dogs try to avoid them.',
                    '<18>{#p/papyrus}{#f/4}I TAKE IT BACK.\nTHIS IS NO RECIPE FOR DISASTER...',
                    "<18>{#p/papyrus}{#f/6}IT'S A PRE-COOKED DISASTER SERVED ON A SILVER PLATTER!"
                 ])
         ],
         () =>
            solo()
               ? [ '<18>{#p/papyrus}{#f/5}I FIND IT BEST TO STEER CLEAR OF SCARY MAZE GAMES.' ]
               : [
                    "<25>{#p/undyne}{#f/12}* There used to be a lot more, actually.\n* It's not what it was.",
                    '<18>{#p/papyrus}{#f/4}HOW MUCH MORE?',
                    '<25>{#p/undyne}{#f/9}* ...\n* Many more.',
                    '<18>{#p/papyrus}{#f/5}HOW MANY?',
                    '<25>{#p/undyne}{#f/16}* Very.',
                    '<18>{#p/papyrus}{#f/6}HOW VERY??',
                    '<25>{#p/undyne}{#f/7}* Knock it off!'
                 ]
      ),
      f_entrance: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}{#f/0}YOU'RE AT THE ENTRANCE TO WHAT'S KNOWN AS...",
            '<18>{#f/9}THE "DARK ZONE."',
            "<18>{#f/4}YOU WOULDN'T BELIEVE HOW IT GOT ITS NAME...",
            ...(solo()
               ? []
               : [
                    '<25>{#p/undyne}{#f/1}* You can thank Asgore for that brilliancy in naming.',
                    '<25>{#p/undyne}{#f/8}* He always has the BEST names for things!',
                    '<18>{#p/papyrus}{#f/0}I KNOW, RIGHT?\nEVERYTHING IS SO EASY TO GRASP!',
                    '<25>{#p/undyne}{#f/17}* Uh, I mean...\n* Sure???',
                    "<18>{#p/papyrus}{#f/0}IT'S A QUALITY OF HIS I APPRECIATE.",
                    '<25>{#p/undyne}{#f/3}* I see.',
                    '<18>{#p/papyrus}{#f/0}MORE IMPORTANTLY, UNDYNE, YOU KNOW!',
                    '<18>{#p/papyrus}{#f/0}WHEN IT COMES TO ASGORE, YOU ALWAYS KNOW WHAT IT IS.',
                    '<25>{#p/undyne}{#f/1}* I suppose you do.'
                 ])
         ],
         () =>
            solo()
               ? [ '<18>{#p/papyrus}{#f/4}SPOILER ALERT...\nTHE WALLS INSIDE ARE VERY DARK.' ]
               : [ "<18>{#p/papyrus}{#f/0}AREN'T THINGS BETTER WHEN YOU UNDERSTAND THEM?" ]
      ),
      f_lobby: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}{#f/6}I TOTALLY... CAN'T REACH YOU... AT THE MOMENT!",
            "<18>{#f/6}THE CALL... IT'S DEFINITELY... GLITCHING OUT!",
            ...(solo()
               ? [
                    '<18>{#f/5}...',
                    "<18>{#f/4}OKAY, I ADMIT, IT'S NOT REALLY DOING THAT.",
                    "<18>{#f/6}I'M JUST NOT SURE WHAT ELSE TO SAY!"
                 ]
               : [
                    '<25>{#p/undyne}{#f/1}* So, would you... say the call\'s... getting "sliced" or "shredded?"',
                    '<18>{#p/papyrus}{#f/5}NO, UNDYNE...',
                    "<18>{#p/papyrus}{#f/4}IT'S SOMETHING FAR MORE DREADED."
                 ])
         ],
         [ "<18>{#p/papyrus}{#f/6}REALLY, THOUGH.\nWHAT'S WITH THAT TABLE, ANYWAY?" ]
      ),
      f_error: pager.create(
         0,
         () => [
            '<18>{#p/papyrus}{#f/0}ON A DIRECT ROUTE FROM THE BEGINNING OF STARTON...',
            '<18>{#p/papyrus}{#f/0}TO THE END OF THE FIRST FLOOR IN AERIALIS...',
            '<18>{#f/0}THAT ROOM MARKS THE HALFWAY POINT OF YOUR JOURNEY.',
            "<18>{#f/4}SEEING AS THAT'S EXACTLY THE PATH YOU'VE TAKEN...",
            '<18>{#f/9}YOUR JOURNEY MUST BE HALFWAY OVER BY NOW!',
            ...(solo()
               ? [ '<18>{#f/5}HALFWAY OVER...' ]
               : [
                    "<25>{#p/undyne}{#f/4}* What?\n* Don't say it like that!",
                    "<18>{#p/papyrus}{#f/6}I-I MEAN, YOUR JOURNEY'S JUST GETTING STARTED!",
                    "<25>{#p/undyne}{#f/12}* That's better."
                 ])
         ],
         () =>
            solo()
               ? [
                    "<19>{#p/papyrus}{#f/4}LET'S JUST HOPE THE OTHER HALF OF YOUR JOURNEY...",
                    '<19>{#p/papyrus}{#f/9}... CAN BE AS GREAT AS THE FIRST!'
                 ]
               : [ "<19>{#p/papyrus}{#f/9}HERE'S TO THE LONG JOURNEY AHEAD!" ]
      ),
      f_telescope: pager.create(
         0,
         () => [
            '<18>{#p/papyrus}{#f/0}MY BROTHER RUNS A TELESCOPE BUSINESS HERE.',
            '<18>{#p/papyrus}{#f/5}SUBSCRIPTIONS, MEMBERSHIPS, SIGN- UPS, VOUCHERS...',
            "<18>{#f/6}IT'S AN ENDLESS MAZE OF TERMS AND CONDITIONS!",
            ...(solo()
               ? [
                    '<18>{#f/5}I MEAN, I -DID- TRY TO GET ACCESS ONE TIME...',
                    "<18>{#f/4}BUT EVEN I HAVE LIMITS TO WHAT I'M WILLING TO ENDURE."
                 ]
               : [
                    '<25>{#p/undyne}{#f/13}* Has anyone ever actually managed to sign up for that thing?',
                    '<18>{#p/papyrus}{#f/6}UH... NOT THAT I KNOW OF???',
                    '<25>{#p/undyne}{#f/12}* Sounds about right.'
                 ])
         ],
         [ '<19>{#p/papyrus}{#f/4}YOU CAN ALWAYS BET ON A PRANKSTER TO MAKE THINGS TRICKY.' ]
      ),
      f_bird: pager.create(
         0,
         () => [
            '<18>{#p/papyrus}{#f/9}THE MOST INFAMOUS.',
            '<18>{#f/9}THE MOST FEARLESS.',
            '<18>{#f/9}THE MOST BRAVESTEST.',
            '<18>{#f/9}THE MONSTER.\nTHE MYTH.\nTHE LEGEND...',
            '<18>{#f/9}THE YELLOW BIRD.',
            ...(SAVE.data.n.plot < 42
               ? [
                    '<18>{#f/9}...',
                    '<18>{#f/4}... WAIT.',
                    "<18>{#f/1}IT'S NOT THERE ANYMORE!?!?",
                    '<18>{#f/8}HOW COULD THIS BE!!!'
                 ]
               : solo()
               ? [ '<18>{#f/4}... NOT LIKE WE HAVE ANY OTHER WAY TO CROSS THE GAP.' ]
               : [
                    '<25>{#p/undyne}{#f/1}* That bird will carry anyone past the gap.\n* It NEVER says no.',
                    '<25>{#f/16}* When I was younger, it gave me a lift.\n* It took an hour...',
                    '<25>{#f/17}* But this bird NEVER once thought of giving up!!!',
                    '<25>{#f/1}* Cherish this bird.'
                 ])
         ],
         () =>
            SAVE.data.n.plot < 42
               ? [
                    "<18>{#p/papyrus}{#f/8}I JUST DON'T UNDERSTAND..!",
                    '<18>{#f/8}HOW COULD THE ONE AND ONLY YELLOW BIRD ABANDON US???'
                 ]
               : [
                    '<18>{#p/papyrus}{#f/0}TRUST ME, THE GAP IS EVEN LONGER THAN IT SEEMS.',
                    '<18>{#f/0}AND POSSIBLY NON- EUCLIDIAN.',
                    ...(solo()
                       ? []
                       : [
                            '<25>{#p/undyne}{#f/7}* What.',
                            '<18>{|}{#p/papyrus}{#f/0}NON-EUCLIDIAN!\nYOU KNOW... THAT THING WHERE- {%}',
                            "<25>{#p/undyne}{#f/1}* Sometimes I wonder why you aren't working at the lab."
                         ])
                 ]
      ),
      f_stand: pager.create(
         0,
         () => [
            '<18>{#p/papyrus}{#f/0}LEGEND HAS IT...',
            '<18>THE LOCAL ICE CREAM GUY HANDS OUT POSTCARDS.',
            '<18>{#f/4}SOURCES SAY THESE "POSTCARDS" HAVE UNSPOKEN POWER...',
            '<18>{#f/9}... TO UNLOCK MORE TASTY TREATS!',
            ...(solo()
               ? []
               : [
                    '<25>{#p/undyne}{#f/1}* Yeah, I love tasty treats!',
                    "<25>{#p/undyne}{#f/16}* Well, umm, as long as they're hot, anyway.",
                    "<25>{#p/undyne}{#f/8}* Then I don't love them that much!!"
                 ])
         ],
         () => [
            "<18>{#p/papyrus}{#f/5}BRING ME A TREAT, WON'T YOU?",
            ...(solo() ? [] : [ "<25>{#p/undyne}{#f/7}* And don't you dare leave me out!!" ])
         ]
      ),
      f_abyss: pager.create(
         0,
         () => [
            '<18>{#p/papyrus}{#f/4}WE LOOK UPON THIS WINDING PATH FULL OF SIGNAL STARS...',
            '<18>{#f/4}AND WE DEEM IT "NORMAL."',
            '<18>{#f/0}YOU KNOW WHAT ELSE IS "NORMAL?"',
            '<18>{#f/0}THE FACT THAT THIS PHONE CALL EVEN GETS DOWN THERE!',
            '<18>{#f/6}TOTALLY NORMAL!',
            ...(solo()
               ? []
               : [
                    "<25>{#p/undyne}{#f/1}* So you're saying that's NOT normal, right?",
                    '<18>{#p/papyrus}{#f/4}RIGHT.',
                    '<25>{#p/undyne}{#f/12}* Well done!\n* Your sarcasm skills are on the up and up.',
                    "<18>{#p/papyrus}{#f/9}I CAN'T WAIT TO USE IT ON MY BROTHER!",
                    "<25>{#p/undyne}{#f/14}* Careful, he's the de- facto sarcasm wizard.",
                    "<25>{#p/undyne}{#f/12}* If you want any chance of besting him, you've gotta train like crazy!",
                    "<18>{#p/papyrus}{#f/4}OH, BELIEVE ME, UNDYNE, I'M READY.",
                    "<25>{#p/undyne}{#f/8}* I hope you're not being sarcastic about that!"
                 ])
         ],
         () =>
            solo()
               ? [ '<18>{#p/papyrus}{#f/4}IT\'S CALLED "SARCASM."', "<18>UNDYNE'S BEEN TEACHING IT TO ME." ]
               : [ "<19>{#p/papyrus}{#f/4}SARCASM TRAINING'S -TOTALLY- THE EASIEST THING EVER." ]
      ),
      f_muffet: pager.create(
         0,
         () => [
            '<18>{#p/papyrus}{#f/0}I WAS SURFING THE WEB THE OTHER DAY...',
            "<18>{#f/0}TURNS OUT SPIDER SILK IS STRONGER THAN YOU'D THINK!",
            '<18>{#f/6}WHICH WEB WAS I SURFING, YOU ASK?',
            "<18>{#f/6}...\nYOU PROBABLY DON'T WANT TO KNOW.",
            ...(solo()
               ? []
               : [
                    '<25>{#p/undyne}{#f/17}* Papyrus, not again!',
                    '<18>{#p/papyrus}{#f/4}WELL, YOU SEE...',
                    '<18>{#p/papyrus}{#f/6}I WANTED TO KNOW WHERE THE LITTLE STRINGS WENT!',
                    '<25>{#p/undyne}{#f/17}* That was your reason last time!',
                    '<18>{#p/papyrus}{#f/6}BUT... CURIOSITY!',
                    '<25>{#p/undyne}{#f/12}* Maybe leave the web-crawling to the spiders, okay?'
                 ])
         ],
         () =>
            solo()
               ? [ "<18>{#p/papyrus}{#f/4}... IT WASN'T ON THE COMPUTER." ]
               : [ "<18>{#p/papyrus}{#f/4}... MAYBE IT'S SAFER TO RESEARCH FROM AFAR." ]
      ),
      f_shyren: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}{#f/0}I'VE HEARD A SHY MONSTER LIVES AROUND HERE.",
            ...(solo()
               ? [
                    '<18>{#f/4}WELL, IF YOU WANT TO GET SOMEONE TO OPEN UP...',
                    '<18>{#f/0}YOU SHOULD ENGAGE THEM IN COMBAT!'
                 ]
               : [
                    "<25>{#p/undyne}{#f/1}* Oh, that'd be Shyren.",
                    '<25>* I used to give her piano lessons...',
                    '<25>{#f/14}* She was really talented for someone with no appendages.',
                    '<25>{#f/16}* One day, though, she stopped coming to her lessons...',
                    '<25>{#f/11}* How did her song go again...?'
                 ])
         ],
         () => [ '<18>{#p/papyrus}{#f/0}HUM HUM HUM...', ...(solo() ? [] : [ '<25>{#p/undyne}{#f/12}* Hum hum hum...' ]) ]
      ),
      f_statue: pager.create(
         0,
         () => [
            '<18>{#p/papyrus}{#f/4}A MYSTERIOUS STATUE...',
            '<18>{#p/papyrus}{#f/4}I WONDER WHAT IT COULD BE FOR.',
            ...(solo()
               ? []
               : [
                    "<25>{#p/undyne}{#f/16}* That statue's been there forever...",
                    '<25>{#p/undyne}{#f/9}* Nobody seems to know where it came from.'
                 ])
         ],
         () => [
            ...(solo()
               ? [
                    "<18>{#p/papyrus}{#f/4}IT'S A FACT OF LIFE...",
                    '<18>{#p/papyrus}{#f/6}THE MYSTERIOUS STATUE IS MYSTERIOUS.'
                 ]
               : [ "<25>{#p/undyne}{#f/14}* It's got a cool music box, though." ])
         ]
      ),
      f_piano: pager.create(
         0,
         () => [
            '<18>{#p/papyrus}HUH!?\nARE YOU SERENADING ME!?',
            "<18>{#f/1}NO!!!\nYOU'RE GONNA MAKE ME BLUSH!!!",
            ...(solo()
               ? []
               : [
                    "<25>{#p/undyne}{#f/17}* Oh yeah, there's a puzzle there!",
                    '<25>{#p/undyne}{#f/1}* Whoever built it must have great taste.',
                    '<25>{#p/undyne}{#f/8}* FIGHTING THE IVORIES IS THE BEST!'
                 ])
         ],
         () => [
            "<18>{#p/papyrus}LET'S WRITE A MUSICAL ABOUT OUR ADVENTURES!",
            ...(solo() ? [] : [ "<25>{#p/undyne}{#f/8}* I'm down to sing it!" ])
         ]
      ),
      f_artifact: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}I DON'T THINK I'VE EVER BEEN IN THIS ROOM BEFORE.",
            "<18>WHAT'S IT LIKE?\nARE THERE UNTOLD TREASURES ABOUND?",
            '<18>{#f/4}FOR THE RECORD, THAT QUESTION WAS RHETORICAL.',
            "<18>{#f/9}I'D RATHER FIND OUT FOR MYSELF!",
            ...(solo()
               ? []
               : [
                    "<25>{#p/undyne}{#f/1}* Glad to see your sense of adventure hasn't gone away.",
                    '<18>{#p/papyrus}{#f/9}OF COURSE NOT!\nI, THE GREAT PAPYRUS...',
                    '<18>{#f/9}HAVE A SENSE OF ADVENTURE BEYOND COMPARE!',
                    "<18>{#f/4}WELL, THAT'S NOT ENTIRELY TRUE.",
                    '<18>{#f/4}SANS FINDS NEW WAYS OF EXPLORING THE COUCH DAILY.',
                    '<25>{#p/undyne}{#f/17}* Oh.',
                    "<25>{#p/undyne}{#f/8}* So that's why that thing is such a mess!!"
                 ])
         ],
         () =>
            solo()
               ? [ '<18>{#p/papyrus}{#f/6}NO SPOILERS!!!' ]
               : [ "<18>{#p/papyrus}{#f/0}YOU'D BE AMAZED BY SANS'S MANY FEATS!" ]
      ),
      f_path: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}{#f/0}KEEP GOING, AND YOU'LL WITNESS THE CITADEL.",
            "<18>{#f/5}YOU CAN'T NORMALLY SEE IT DUE TO SOME TIME-PHASING.",
            '<18>{#f/4}BUT SOMETHING ABOUT THAT ONE ROOM...',
            '<18>... MAKES IT POSSIBLE TO VIEW...',
            ...(solo()
               ? []
               : [
                    '<25>{#p/undyne}{#f/1}* Could be one of those spatial distortions.',
                    '<18>{#p/papyrus}{#f/4}IF SO, THEN THE HUMAN BETTER BE CAREFUL.',
                    "<25>{#p/undyne}{#f/12}* But I've been through there many times, and I never got stuck.",
                    '<18>{#p/papyrus}{#f/7}JUST BE CAREFUL!'
                 ])
         ],
         () =>
            solo()
               ? [ "<18>{#p/papyrus}LET'S JUST HOPE IT'S NOT A SPATIAL DISTORTION." ]
               : [ '<18>{#p/papyrus}NO TWO SPATIAL DISTORTIONS ARE THE SAME.' ]
      ),
      f_view: pager.create(
         0,
         () => [
            '<18>{#p/papyrus}{#f/0}YOU MUST BE A VERY GREAT MULTITASKER!',
            "<18>{#f/4}IT'D TAKE ONE TO WANT TO CALL SOMEONE...",
            '<18>{#f/4}WITH A VIEW LIKE THAT SITTING AHEAD OF THEM.',
            ...(solo()
               ? []
               : [
                    '<25>{#p/undyne}{#f/1}* During human-chasing practice with the ELITE squad...',
                    '<25>{#f/17}* Going through here has a habit of distracting at LEAST one of them.',
                    "<25>{#f/10}* Whether it's Cozmo, debating the nature of aesthetics...",
                    '<25>{#f/10}* Or Terrestria obsessing over the "beauty of the universe..."',
                    "<25>{#f/9}* ... actually, it's usually just those two.",
                    "<25>{#f/16}* They're good at their job, but they don't take training seriously.",
                    "<25>{#f/14}* Lucky enough, no fancy view can catch this captain's eye!",
                    '<25>{#f/1}* Which is why it usually falls to me to keep them in check.',
                    "<18>{#p/papyrus}{#f/6}SOUNDS HARD!\nBUT I KNOW YOU'RE MORE THAN CAPABLE!"
                 ])
         ],
         () =>
            solo()
               ? [
                    '<18>{#p/papyrus}{#f/7}WHAT ARE YOU DOING CALLING ME?',
                    "<18>{#p/papyrus}{#f/7}YOU'VE GOT FANCY STRUCTURES TO ADMIRE!"
                 ]
               : [
                    "<25>{#p/undyne}{#f/1}* Fortunately for you, you're not a royal guard.",
                    '<25>{#p/undyne}{#f/14}* Feel free to get as distracted as you like!'
                 ]
      ),
      f_plank: [
         '<18>{#p/papyrus}{#f/0}THE SIGNAL IS WEAK FROM THERE.',
         "<18>{#f/6}GO ANY FUTHER, AND I WON'T BE ABLE TO REACH YOU!",
         "<18>{#f/0}CALL BACK WHEN YOU'RE NOT SO FAR OUT."
      ],
      f_dummy: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}{#f/0}DON'T LOOK PAST THE HIDDEN PATH...",
            '<18>{#f/0}CLOSE YOUR EYES, WALK STRAIGHT...',
            "<18>AND FACE THE TEMMIES' WRATH.",
            "<18>{#f/4}IT'S A RIDDLE I'VE HEARD ABOUT THIS PLACE.",
            ...(solo()
               ? []
               : [
                    '<25>{#p/undyne}{#f/4}* A riddle about temmies?',
                    '<25>{#p/undyne}{#f/7}* No riddle can locate THOSE adorable things!'
                 ])
         ],
         () =>
            solo()
               ? [ '<18>{#p/papyrus}{#f/6}APPARENTLY, TEMMIES ARE RATHER HARD TO FIND.' ]
               : [ '<18>{#p/papyrus}{#f/4}DO YOU KNOW HOW TO SOLVE THIS RIDDLE?' ]
      ),
      f_hub: pager.create(
         0,
         () => [
            '<18>{#p/papyrus}IF YOU SEE A SHOP, YOU SHOULD STOP...',
            '<18>{#f/4}DROP, AND ROLL...',
            '<18>{#f/0}INTO SOME GREAT DEALS!!',
            ...(solo()
               ? [
                    "<18>{#f/9}BECAUSE WE'RE HAVING A FIRE SALE!!",
                    '<18>{#f/5}AT MY IMAGINARY STORE, WHICH SELLS FLAMES.'
                 ]
               : [
                    "<25>{#p/undyne}{#f/1}* Like the ones at Gerson's shop?",
                    "<25>{#f/16}* See, he's the toughest monster that ever lived.",
                    '<25>{#f/1}* He fought in the war between humans and monsters...',
                    '<25>{#f/14}* And yet, he survived!\n* Which makes him a hero.',
                    '<18>{#p/papyrus}{#f/4}I WAS GOING TO SAY SOMETHING ELSE, BUT OKAY.',
                    '<18>{#f/0}HOORAY FOR GERSON!'
                 ])
         ],
         [ "<18>{#p/papyrus}{#f/5}IT'S YET ANOTHER A DREAM OF MINE." ]
      ),
      f_undyne: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}{#f/0}THAT'S UNDYNE'S HOUSE.",
            ...(SAVE.data.n.plot < 48 || world.trueKills > 0
               ? [ "<18>{#f/0}IT'S THE IDEAL PLACE TO LEARN HOW TO COOK!" ]
               : SAVE.data.n.plot_date < 1.3
               ? [ '<18>{#f/4}YOU KNOW, THE ONE WITH THE SKELETON IN FRONT.' ]
               : SAVE.data.n.plot_date < 2
               ? [ "<18>{#f/9}DON'T HESITATE TO COME INSIDE!" ]
               : SAVE.data.n.plot_date < 2.1
               ? [
                    "<18>{#f/0}YOU'RE STILL AT UNDYNE'S HOUSE?",
                    "<18>{#f/5}SHE, UH, HASN'T EVEN MET UP WITH ME YET.",
                    '<18>{#f/4}MAYBE LEAVE THE ROOM AND...',
                    '<18>{#f/1}... {%}',
                    '<25>{#p/undyne}{#f/12}* Huff... puff...!',
                    "<25>{#f/12}* YEAH!!!\n* That's MY HOUSE!!!",
                    "<18>{#p/papyrus}{#f/6}UH, HI UNDYNE!\nHOW'D YOU GET HERE SO FAST?",
                    '<25>{#p/undyne}{#f/17}I ran.',
                    '<18>{#p/papyrus}{#f/1}WHAT??\nTHEN YOU MUST HAVE SOMETHING...',
                    '<18>{#f/9}EXTREMELY COOL TO SAY ABOUT YOUR HOUSE!!!',
                    '<25>{#p/undyne}{#f/14}* Nope!!!'
                 ]
               : [
                    '<18>{#f/4}WELL, IT WAS, UNTIL...',
                    '<25>{#p/undyne}{#f/12}* Yeah, we kinda blew it up.',
                    '<25>{#f/8}* BUT WHO CARES??',
                    '<25>{#f/8}* HANGING OUT WITH PAPYRUS IS JUST AS EPIC!'
                 ])
         ],
         () =>
            SAVE.data.n.plot < 48 || world.trueKills > 0
               ? [
                    '<18>{#p/papyrus}{#f/0}PRO TIP, WHEN COOKING WITH UNDYNE...',
                    "<18>{#f/4}ONCE SHE STARTS POUNDING VEGGIES, IT'S TIME TO BAIL."
                 ]
               : SAVE.data.n.plot_date < 1.3
               ? [ '<18>{#p/papyrus}{#f/0}NICE TO SEE YOU, TOO!' ]
               : SAVE.data.n.plot_date < 2
               ? [ "<18>{#p/papyrus}{#f/6}WE'RE STILL WAITING INSIDE, YOU KNOW..." ]
               : SAVE.data.n.plot_date < 2.1
               ? [
                    "<18>{#p/papyrus}{#f/0}DON'T WORRY, HUMAN.",
                    "<18>{#f/0}I'M SURE SHE'LL COME UP WITH SOMETHING.",
                    '<18>{#f/6}NO PRESSURE, OF COURSE!!!',
                    '<25>{#p/undyne}{#f/12}* Not at all!'
                 ]
               : [
                    '<18>{#p/papyrus}{#f/0}YOU MIGHT AS WELL CALL ME THE HANGOUT HANDYMAN!',
                    '<18>{#f/4}I MAY NOT BE ABLE TO FIX YOUR HOUSE...',
                    '<18>{#f/9}BUT I CAN STILL FIX YOUR DAY!',
                    '<18>{#f/0}BY HANGING OUT, THAT IS.'
                 ]
      ),
      f_blooky,
      f_snail: f_blooky,
      f_napstablook: pager.create(
         0,
         () =>
            SAVE.data.n.state_foundry_blookdate < 2
               ? [
                    "<18>{#p/papyrus}{#f/0}SO YOU'RE MAKING FRIENDS WITH A GHOST, HUH?",
                    '<18>{#p/papyrus}{#f/4}IS THERE NOTHING BEYOND YOUR GRASP OF FRIENDSHIP?',
                    ...(solo()
                       ? [ '<18>{#p/papyrus}{#f/9}YOU SEEM TO HAVE A KNACK FOR IT!' ]
                       : [
                            "<25>{#p/undyne}{#f/16}* ... they're doing better than I ever did.",
                            '<25>{#p/undyne}{#f/9}* Making friends with Napstablook, I mean.',
                            '<25>{#p/undyne}{#f/10}* They way they live sometimes... just makes me feel bad.'
                         ])
                 ]
               : [
                    '<18>{#p/papyrus}{#f/4}HMM...',
                    '<18>{#p/papyrus}{#f/4}WHY DO I HEAR BOSS MUSIC?',
                    ...(solo()
                       ? [
                            '<18>{#p/papyrus}{#f/0}... SORRY, DID I SAY "BOSS" MUSIC?',
                            '<18>{#p/papyrus}{#f/5}I MEANT "BOSSA NOVA."'
                         ]
                       : [
                            "<25>{#p/undyne}{#f/8}* BECAUSE I'M HERE, SILLY!",
                            '<18>{#p/papyrus}{#f/6}OH, RIGHT!\nYES, OF COURSE!',
                            '<18>THAT EXPLAINS IT!!'
                         ])
                 ],
         () =>
            SAVE.data.n.state_foundry_blookdate < 2
               ? solo()
                  ? [ '<18>{#p/papyrus}{#f/5}WATCH OUT FOR THE ECTOPLASM...' ]
                  : [ '<18>{#p/papyrus}{#f/5}MAYBE... TRY NOT TO HURT THEIR FEELINGS.' ]
               : solo()
               ? [ '<18>{#p/papyrus}{#f/0}NAPSTABLOOK HAS TONS OF MUSIC ON THEIR STEREO.' ]
               : [
                    '<18>{#p/papyrus}{#f/0}BOSSY MUSIC FOR A BOSSY FISH LADY.',
                    "<18>{#p/papyrus}{#f/0}MAKES SENSE, DOESN'T IT?"
                 ]
      ),
      f_taxi: s_taxi,
      f_puzzle3: (() => {
         const p = pager.create(
            0,
            () => [
               "<18>{#p/papyrus}{#f/5}IN TRUTH, I'VE NEVER SOLVED THIS PUZZLE FOR REAL.",
               "<18>{#p/papyrus}{#f/4}THERE'S JUST... SOMETHING TWISTED ABOUT IT.",
               ...(solo()
                  ? []
                  : [
                       "<25>{#p/undyne}{#f/11}* Wasn't it YOU who said no puzzle is too great a challenge?",
                       '<18>{#p/papyrus}{#f/4}WHEN I SAID THAT, I WAS REFERRING TO FAIR PUZZLES.',
                       '<18>THIS IS CLEARLY A VERY UNFAIR PUZZLE.',
                       '<25>{#p/undyne}{#f/14}* Ah.'
                    ])
            ],
            [ "<18>{#p/papyrus}{#f/0}FORTUNATELY, IT'S USUALLY DISABLED THESE DAYS." ]
         );
         return () => {
            if (SAVE.data.n.plot < 45 && !SAVE.data.b.f_state_password) {
               SAVE.data.b.f_state_password = true;
               return [
                  "<18>{#p/papyrus}{#f/4}OH... IT'S -THIS- PUZZLE, EH?",
                  "<18>{#p/papyrus}{#f/5}... YEAH.\nIT'S NOT EXACTLY THE MOST FAIR...",
                  '<18>{#p/papyrus}{#f/9}THANKFULLY, I, PAPYRUS, HAVE A SOLUTION!',
                  '<18>{#p/papyrus}{#f/0}READY?',
                  '<18>{#p/papyrus}{#f/0}YOU CAN USE IT AT THE TERMINAL NEAR THE RIGHT.',
                  '<32>{#p/human}* (Papyrus whispered something in your ear.)',
                  '<18>{#p/papyrus}{#f/6}HOPE THAT HELPS!'
               ];
            } else {
               return p();
            }
         };
      })(),
      f_prespear,
      f_spear: f_prespear,
      f_corner: f_prespear,
      f_story2: pager.create(
         0,
         () => [
            '<18>{#p/papyrus}{#f/0}SIGNAL STARS ARE PRETTY NEAT, HUH?',
            '<18>{#f/5}THOUGH, THEY ONLY RESET PERIODICALLY.',
            '<18>{#f/4}UNTIL THEN...',
            "<18>{#f/1}WAIT, ISN'T THERE A ROOM LIKE THIS SOMEWHERE ELSE!?",
            ...(solo()
               ? []
               : [
                    "<25>{#p/undyne}{#f/1}* It's easier to get lost in here than you think.",
                    '<25>{#f/4}* This one time, there was a search for a missing monster...',
                    '<25>{#f/7}* And I could have sworn the room I was in repeated!',
                    '<18>{#p/papyrus}{#f/0}LIKE HOW A SIGNAL STAR REPEATS ITS SIGNAL!',
                    '<25>{#p/undyne}{#f/10}* Not really...',
                    "<25>{#f/12}* It's more like the room got... longer, somehow.",
                    '<25>{#f/11}* ... huh.',
                    '<18>{#p/papyrus}{#f/5}... DID THE MONSTERS EVER GET FOUND?',
                    '<25>{#p/undyne}{#f/12}* Yeah, it just turned out to be some random kid.',
                    '<25>{#f/10}* I asked them where their home was, but... they...',
                    "<25>{#f/12}* ... uh, didn't have one.",
                    '<18>{#p/papyrus}{#f/6}THAT SEEMS... RATHER CONCERNING.',
                    '<25>{#p/undyne}{#f/17}* Tell me about it!!!'
                 ])
         ],
         () =>
            solo()
               ? [ "<18>{#p/papyrus}{#f/5}I SWEAR I'M JUST REPEATING MYSELF SOMETIMES." ]
               : [ "<18>{#p/papyrus}{#f/5}SOMETIMES I WONDER IF WE'RE ALL JUST GOING IN CIRCLES." ]
      ),
      f_pacing: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}{#f/0}THERE'S GENUINELY NOTHING TO SAY ON THIS HALLWAY.",
            "<18>{#f/0}IT'S LITERALLY ONLY HERE TO MAKE YOU WALK FURTHER.",
            '<18>{#f/4}TO MAKE IT SO THAT EVERY STEP TOWARDS THE EXIT...',
            '<18>{#f/4}IS FILLED WITH UTTER, UNENDING SUSPENSE.',
            ...(solo() ? [] : [ "<25>{#p/undyne}{#f/14}* Yeah... I don't really have anything to add to this topic." ])
         ],
         [ '<18>{#p/papyrus}{#f/4}UTTER.\nUNENDING.\nSUSPENSE.' ]
      ),
      f_battle: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}{#f/0}IN THIS ROOM, YOU WILL FIND UNDYNE'S GIANT TOWER.",
            '<19>{#p/papyrus}{#f/9}MADE FROM THE REMNANTS OF AN OLD ASTEROID!',
            "<18>{#f/0}SHE'S ALWAYS POSING ATOP IT...",
            '<18>{#f/4}MUMBLING SOMETHING TO HERSELF...',
            ...(solo()
               ? []
               : SAVE.data.b.undyne_respecc
               ? [
                    '<25>{#p/undyne}{#f/12}* Ah, right, the "story of our people..."',
                    "<25>{#f/1}* I didn't really bother telling it to them.",
                    "<25>{#f/8}* They'd probably know it already anyway!"
                 ]
               : [
                    '<25>{#p/undyne}{#f/12}* Ah, right, the "story of our people..."',
                    '<25>{#f/1}* Despite all the rehearsal, I just ended up going off the cuff.',
                    '<25>{#f/8}* Besides, who CARES about some pre-planned speech!',
                    '<26>{#f/14}* Stick to what first comes to your mind!'
                 ])
         ],
         () =>
            solo()
               ? [ "<18>{#p/papyrus}{#f/0}I THINK IT'S SOMETHING SHE HAS TO MEMORIZE." ]
               : [ "<18>{#p/papyrus}{#f/0}A BATTLE'S MORE FUN WHEN IT'S UNSCRIPTED." ]
      ),
      f_exit: pager.create(
         0,
         () => [
            '<18>{#p/papyrus}THIS FLUID TANK WAS SPECIFICALLY PUT HERE...',
            '<18>{#f/0}BECAUSE A CERTAIN FISH LADY THINKS METAL ARMOR...',
            '<18>{#f/4}AND STATICALLY- CHARGED SKYWAYS...',
            "<18>{#f/4}WON'T CAUSE A MAJOR CATASTROPHE WHEN THEY TOUCH.",
            ...(solo()
               ? []
               : [
                    '<25>{#p/undyne}{#f/12}* I was in a hurry!',
                    "<18>{#p/papyrus}{#f/4}YOU'VE BEEN IN A LOT OF HURRIES...",
                    "<25>{#p/undyne}{#f/5}* You think I don't know that!?",
                    '<18>{#p/papyrus}{#f/4}AND DESPITE THAT, YOU STILL DO IT ANYWAY.',
                    '<18>{#p/papyrus}{#f/6}WHAT GIVES!',
                    '<25>{#p/undyne}{#f/1}* Facing danger head-on is just a part of being in the royal guard.',
                    "<18>{#p/papyrus}{#f/6}BUT YOU DON'T HAVE TO RISK YOU LIFE??",
                    '<25>{#p/undyne}{#f/8}* No risk, no reward!!',
                    '<18>{#p/papyrus}{#f/6}UNDYNE!'
                 ])
         ],
         () =>
            solo()
               ? [
                    '<18>{#p/papyrus}{#f/0}I ONLY HAVE ONE WORD FOR UNDYNE.',
                    '<18>{#f/4}AND THAT WORD IS "WATCH WHERE YOU\'RE GOING."'
                 ]
               : [ "<18>{#p/papyrus}{#f/0}I WORRY FOR THE CAPTAIN'S SAFETY." ]
      ),
      a_start: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}{#f/0}SO YOU'RE IN AERIALIS NOW, HUH?",
            "<18>{#p/papyrus}{#f/0}GUESS I'M NOT THE ONLY ONE WHO LIKES DECORATIVE SPIRES.",
            "<18>{#p/papyrus}{#f/4}EXCEPT... THEY'RE NOT JUST DECORATIVE.",
            '<18>{#p/papyrus}{#f/4}HUNDREDS OF PEOPLE LIVE THERE.',
            "<18>{#p/papyrus}{#f/0}STILL, DOESN'T STOP THEM FROM BEING DECORATIVE!",
            ...(solo()
               ? []
               : [
                    "<25>{#p/undyne}{#f/1}* I'm glad you recognize that, Papyrus!",
                    '<25>{#p/undyne}{#f/14}* Even Dr. Alphys used to live in one of those things.',
                    '<25>{#p/undyne}{#f/1}* With her childhood friends, Catty and Bratty...',
                    '<25>{#p/undyne}{#f/1}* She told me about this when she first became royal scientist.',
                    "<18>{#p/papyrus}{#f/0}OOH, I'M CURIOUS!\nI'LL ASK HER ABOUT IT LATER.",
                    '<25>{#p/undyne}{#f/12}* You do that.\n* I think she likes talking about it...?'
                 ])
         ],
         () =>
            solo()
               ? [ '<18>{#p/papyrus}{#f/0}THE ONE IN THE MIDDLE IS MY FAVORITE.' ]
               : [
                    "<18>{#p/papyrus}{#f/0}MAYBE ONE DAY I'LL GET TO LIVE IN A SPIRE HOUSE.",
                    '<25>{#p/undyne}{#f/15}* And eat spire food...',
                    '<18>{#p/papyrus}{#f/0}HUH?',
                    '<25>{#p/undyne}{#f/7}* Nothing!!!',
                    '<18>{#p/papyrus}{#f/1}OKAY!!!!!!'
                 ]
      ),
      a_lab_entry: pager.create(
         0,
         () => [
            '<18>{#p/papyrus}{#f/0}AH, THE LAB.\nA GREAT PLACE TO HANG OUT!',
            '<18>{#p/papyrus}{#f/0}ESPECIALLY WHEN ALPHYS IS AROUND.',
            ...(solo()
               ? [
                    '<18>{#p/papyrus}{#f/4}SHE REALLY LOVES TALKING ABOUT "SCI-FI" STUFF...',
                    "<18>{#p/papyrus}{#f/9}SO IT'S A GOOD THING I DO TOO!"
                 ]
               : [
                    '<25>{#p/undyne}{#f/1}* Alphys is... always at the lab, Papyrus.',
                    '<26>{#f/17}* Her "house" is that purple cube on the upper floor.',
                    "<26>{#f/16}* Don't ask me how it works, because even though she told me...",
                    "<26>{#f/12}* I don't think either of us would understand it.",
                    '<18>{#p/papyrus}{#f/4}POINT TAKEN.',
                    '<18>{#f/0}SO HOW DOES IT WORK?',
                    '<25>{#p/undyne}{#f/17}* ...',
                    "<25>{#f/14}* I'll tell you later."
                 ])
         ],
         () =>
            solo()
               ? [ '<18>{#p/papyrus}{#f/4}SHE DOES HAVE A HABIT OF SPOILING THINGS, THOUGH.' ]
               : [ "<25>{#p/undyne}{#f/8}* I'll tell you later!!!", '<18>{#p/papyrus}{#f/6}I KNOW!!!' ]
      ),
      a_lab_main: pager.create(
         0,
         () => [
            '<18>{#p/papyrus}{#f/4}THE LAST TIME I WAS HERE...',
            solo()
               ? '<18>{#p/papyrus}{#f/0}... WAS EARLIER IN THE WEEK, TO HANG OUT WITH ALPHYS!'
               : '<18>{#p/papyrus}{#f/0}... WAS EARLIER TODAY, ON OUR WAY TO THE REC CENTER!',
            '<18>{#p/papyrus}{#f/4}BUT WHEN I WAS YOUNGER, SANS USED TO TAKE ME THERE.',
            '<18>{#p/papyrus}{#f/5}SO MANY SCIENTIFIC MARVELS TO BE FOUND IN A LAB...',
            ...(solo()
               ? [ "<18>{#p/papyrus}{#f/6}IT'S A SHAME MORE PEOPLE DON'T TAKE AN INTEREST!" ]
               : [
                    '<18>{#p/papyrus}{#f/0}WHAT DO YOU THINK, UNDYNE?',
                    '<25>{#p/undyne}{#f/1}* What do I think?\n* Well...',
                    '<25>{#p/undyne}{#f/14}* The ice cream machine makes REALLY good ice cream.',
                    "<18>{#p/papyrus}{#f/4}... THAT'S IT?",
                    '<25>{#p/undyne}{#f/20}* Hmm... it IS cool how Alphys can track the human like that...',
                    '<18>{#p/papyrus}{#f/0}OH, YEAH!\nSHE CAN TRACK OTHER PEOPLE, TOO!',
                    '<25>{#p/undyne}{#f/13}* ...',
                    '<25>{#p/undyne}{#f/7}* AM I BEING TRACKED RIGHT NOW???'
                 ])
         ],
         () =>
            solo()
               ? [
                    '<18>{#p/papyrus}{#f/0}OH YEAH, I FORGOT TO MENTION...',
                    '<18>{#f/0}MY BROTHER USED TO BE A LAB ASSISTANT.',
                    "<18>{#f/6}I STILL DON'T KNOW WHY HE QUIT...",
                    '<18>{#f/5}SINCE HE ENJOYED THE JOB SO MUCH.'
                 ]
               : [
                    '<25>{#p/undyne}{#f/7}* I am GOING to kill her.',
                    "<18>{#p/papyrus}{#f/6}BUT YOU DON'T EVEN KNOW IF SHE TRACKED YOU YET!",
                    "<25>{#p/undyne}{#f/17}* ... and you think she WOULDN'T do that?",
                    "<18>{#p/papyrus}{#f/6}I DON'T KNOW!!",
                    "<25>{#p/undyne}{#f/14}* Don't worry, I'm not LITERALLY going to kill her.",
                    '<25>{#p/undyne}{#f/12}* Just metaphorically.',
                    '<18>{#p/papyrus}{#f/4}OH, OKAY.'
                 ]
      ),
      a_lab_upstairs: pager.create(
         0,
         () =>
            SAVE.data.b.water
               ? [
                    '<18>{#p/papyrus}{#f/5}THOSE RECYCLE BINS ARE NEVER ACTUALLY USED TO RECYCLE.',
                    "<18>{#f/4}IF THEY WERE, ALPHYS WOULN'T HAVE PLANS...",
                    '<18>{#f/4}FOR A MACHINE THAT SEPARATES ALL THE TRASH INSIDE.',
                    '<18>{#f/7}FOR EXAMPLE, ELECTRO-DAMPENING FLUID!',
                    ...(solo()
                       ? []
                       : [ "<25>{#p/undyne}{#f/17}* Don't tell me you're still carrying that thing around." ])
                 ]
               : [
                    "<18>{#p/papyrus}{#f/0}THERE'S THIS ODD MACHINE IN THE LAB...",
                    '<18>{#p/papyrus}{#f/0}I HEARD ALPHYS USES IT TO MAKE ICE CREAM.',
                    '<18>{#p/papyrus}{#f/4}... WHICH SHE NO DOUBT EATS BINGING SCI-FI ANIME.',
                    ...(solo()
                       ? []
                       : [
                            "<25>{#p/undyne}{#f/17}* What??\n* She hasn't invited ME to any TV marathons...",
                            '<18>{#p/papyrus}{#f/4}HMM...',
                            '<18>{#p/papyrus}{#f/0}OH, I KNOW!',
                            '<18>{#p/papyrus}{#f/9}YOU JUST HAVE TO "BREAK THE ICE CREAM!" WITH HER!',
                            '<25>{#p/undyne}{#f/13}* Break the... what?',
                            '<18>{#p/papyrus}{#f/0}BREAK THE ICE CREAM!',
                            '<25>{#p/undyne}{#f/4}* Wait...',
                            '<25>{#p/undyne}{#f/7}* Was that supposed to be a pun?'
                         ])
                 ],
         () => [
            '<18>{#p/papyrus}{#f/4}SPEAKING OF FOOD AND DRINK...',
            '<18>{#f/0}I HEARD METTATON ONCE WANTED TO OPEN A FOOD SHOP.',
            '<18>{#f/9}THE FEATURED ITEM WAS CALLED "NEO ENERGY."',
            ...(solo()
               ? [ "<18>{#p/papyrus}{#f/4}I DON'T KNOW WHAT IT MEANS." ]
               : [
                    '<25>{#p/undyne}{#f/12}* Sounds like some cheap knockoff brand.',
                    "<18>{#p/papyrus}{#f/7}WHAT??\nMETTATON WOULDN'T DO THAT!"
                 ])
         ]
      ),
      a_lab_downstairs: pager.create(
         0,
         () => [
            '<18>{#p/papyrus}{#f/0}THOSE FANCY DRINKS IN THE VENDING MACHINE...',
            '<18>{#p/papyrus}{#f/0}I KEEP MEANING TO TRY THEM, BUT...',
            '<18>{#p/papyrus}{#f/4}THE MACHINE SEEMS TO BE MISSING A DISPENSE FUNCTION.',
            ...(solo()
               ? []
               : [
                    "<25>{#p/undyne}{#f/8}* If they're not coming out, just shake the entire box!",
                    "<18>{#p/papyrus}{#f/0}I'D RATHER FIX THE MACHINE PROPERLY, THANK YOU.",
                    "<25>{#p/undyne}{#f/1}* Shaking usually works just fine.\n* It's my go-to fix.",
                    '<18>{#p/papyrus}{#f/4}MAYBE YOU COULD TRY SHAKING UP MY CAREER, THEN.',
                    "<25>{#p/undyne}{#f/14}* Nah, that's fine just the way it is."
                 ])
         ],
         () =>
            solo()
               ? [ "<18>{#p/papyrus}{#f/0}MAYBE I'LL SETTLE FOR THE RED SODA ON THE TABLE." ]
               : [
                    '<25>{#p/undyne}{#f/1}* In addition to shaking...',
                    '<25>{#p/undyne}{#f/14}* That super-strong heat tape is my OTHER go-to fix.',
                    '<18>{#p/papyrus}{#f/0}OH YEAH, THAT STUFF CAN FIX ANYTHING.',
                    '<18>{#p/papyrus}{#f/4}... ALMOST ANYTHING.',
                    "<25>{#p/undyne}{#f/7}* It's fine just the way it is!!"
                 ]
      ),
      a_lab_virt: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}{#f/5}IT'S A SHAME THE VIRTUALASIUM ISN'T ALWAYS OPEN.",
            "<18>{#p/papyrus}{#f/7}THINK OF ALL THE FUN I'M LOSING OUT ON RIGHT NOW!",
            ...(solo()
               ? [
                    '<18>{#p/papyrus}{#f/5}SUCH A PITY.',
                    "<18>{#p/papyrus}{#f/5}I CAN'T EVEN RUN MY WORLD-FAMOUS RESTAURANT."
                 ]
               : [
                    '<25>{#p/undyne}{#f/8}* "Fun" isn\'t exactly the word I\'d use.',
                    '<18>{#p/papyrus}{#f/5}CAN YOU REALLY BLAME A SKELETON SUCH AS MYSELF...',
                    '<18>{#p/papyrus}{#f/5}FOR WANTING TO RUN A WORLD-FAMOUS RESTAURANT?',
                    '<25>{#p/undyne}{#f/17}* That kind of thing can be really stressful, Papyrus.',
                    '<18>{#p/papyrus}{#f/4}SAYS THE CAPTAIN OF THE ROYAL GUARD.',
                    '<25>{#p/undyne}{#f/14}* Running the royal guard is one thing.',
                    '<25>{#p/undyne}{#f/7}* Running a restaurant is something else entirely!'
                 ])
         ],
         () => [
            '<18>{#p/papyrus}{#f/0}OH YEAH, ABOUT THE RESTAURANT...',
            '<18>{#p/papyrus}{#f/9}IT HAPPENS TO BE A GIANT SPACESHIP!',
            '<18>{#p/papyrus}{#f/4}POWERED BY MARINARA SAUCE, OBVIOUSLY.',
            ...(solo() ? [] : [ '<25>{#p/undyne}{#f/12}* Why am I not surprised.' ])
         ]
      ),
      a_path1: pager.create(
         0,
         () => [
            '<18>{#p/papyrus}{#f/0}I HEARD AERIALIS USED TO BE A STAGING AREA.',
            '<18>{#p/papyrus}{#f/0}THEY WERE GOING TO BUILD SO MANY COOL THINGS, BUT...',
            '<18>{#p/papyrus}{#f/4}AFTER THE LAB WAS DONE, THEY RAN OUT OF PURPLE.',
            '<18>{#p/papyrus}{#f/5}TRULY, A GIANT LEAP BACKWARDS FOR PAINT-KIND.',
            ...(solo()
               ? []
               : [
                    "<25>{#p/undyne}{#f/3}* You know they could've just made more of it, right?",
                    '<25>{#p/undyne}{#f/17}* The REAL reason they quit is because Mettaton took over!',
                    "<18>{#p/papyrus}{#f/0}YOU SAY THAT LIKE IT'S A BAD THING.",
                    '<25>{#p/undyne}{#f/17}* ...',
                    '<25>{#p/undyne}{#f/17}* He CAN be a bit overbearing at times.',
                    "<18>{#p/papyrus}{#f/0}OH, I KNOW.\nTHAT'S WHY I DON'T BLAME THEM.",
                    '<18>{#p/papyrus}{#f/4}FEW CAN WITHSTAND HIS OVERPOWERING BEAUTY.',
                    '<25>{#p/undyne}{#f/12}* ... whatever you say, Papyrus.'
                 ])
         ],
         () =>
            solo()
               ? [
                    "<19>{#p/papyrus}{#f/0}IT'S TOO BAD WE'LL NEVER GET TO SEE ITS FULL POTENTIAL.",
                    '<18>{#p/papyrus}{#f/5}ALL THOSE FANCY STRUCTURES AND MACHINES...',
                    "<18>{#p/papyrus}{#f/8}THINK OF THE NEAT GIZMOS I COULD'VE GOTTEN TO USE!"
                 ]
               : [
                    "<18>{#p/papyrus}{#f/4}IF ONLY METTATON WASN'T SO BEAUTIFUL.",
                    "<18>{#p/papyrus}{#f/6}WAIT, THAT'D BE BAD!!",
                    '<18>{#p/papyrus}{#f/5}BUT SO IS THE ABANDONMENT OF THE STAGING AREA...',
                    "<25>{#p/undyne}{#f/1}* I wonder if there's some gizmo that could fix this.",
                    '<18>{#p/papyrus}{#f/0}LIKE... A BEAUTY COMPENSATION FILTER!?',
                    '<25>{#p/undyne}{#f/18}* I was thinking more along the lines of his EGO.',
                    '<25>{#p/undyne}{#f/17}* An "ego compensation filter" if you will.',
                    '<18>{#p/papyrus}{#f/7}NEVER MIND!'
                 ]
      ),
      a_path2: pager.create(
         0,
         () => [
            '<18>{#p/papyrus}{#f/0}THESE LIFTGATES ARE PRETTY FUN.',
            "<18>{#p/papyrus}{#f/0}SOMETIMES, WHEN NOBODY'S WATCHING...",
            "<18>{#p/papyrus}{#f/0}I'LL COME OUT THERE AND GO BACK AND FORTH ON THEM.",
            '<18>{#p/papyrus}{#f/4}IT DOES REQUIRE A SPECIAL PASS, THOUGH.',
            ...(solo()
               ? []
               : [
                    '<25>{#p/undyne}{#f/4}* Hey, Alphys never gives ME liftgate passes!',
                    '<18>{#p/papyrus}{#f/0}MAYBE NEXT TIME YOU SHOULD ASK HER FOR ONE!',
                    '<25>{#p/undyne}{#f/3}* ...',
                    '<18>{#p/papyrus}{#f/6}...',
                    '<25>{#p/undyne}{#f/11}* ...',
                    '<25>{#p/undyne}{#f/8}* Like hell I will!',
                    '<18>{#p/papyrus}{#f/6}LANGUAGE!!',
                    '<26>{#p/undyne}{#f/17}* Sorry!!\n* This stuff is too weird!',
                    '<18>{#p/papyrus}{#f/6}YOU MEAN... HER.',
                    '<26>{#p/undyne}{#f/7}* Shut up!!'
                 ])
         ],
         () =>
            solo()
               ? [
                    '<18>{#p/papyrus}{#f/0}GO ON, GIVE IT A TRY!',
                    "<18>{#p/papyrus}{#f/5}THEY'RE NOT DANGEROUS...",
                    '<18>{#p/papyrus}{#f/6}... USUALLY.'
                 ]
               : [
                    '<18>{#p/papyrus}{#f/4}...',
                    "<18>{|}{#p/papyrus}{#f/4}I CAN'T BE THE ONLY ONE THAT THINKS YOU'RE- {%}",
                    '<25>{#p/undyne}{#f/8}* OH MY GOD PLEASE!!',
                    '<18>{#p/papyrus}{#f/6}OKAY, OKAY!'
                 ]
      ),
      a_path3: pager.create(
         0,
         () => [
            '<18>{#p/papyrus}{#f/0}I HEARD TUITION IS HARD TO COME BY IN AERIALIS.',
            '<18>{#p/papyrus}{#f/5}IS IT TRUE?\nDO STUDENTS REALLY SUFFER THAT MUCH?',
            "<18>{#p/papyrus}{#f/8}I DON'T KNOW WHAT I'D BE WITHOUT MY EDUCATION!",
            ...(solo()
               ? []
               : [
                    '<25>{#p/undyne}{#f/8}* I quit school when I was only ten years old!',
                    '<18>{#p/papyrus}{#f/1}HOW COULD YOU BETRAY THE SYSTEM SO COMPLETELY!?!?',
                    '<25>{#p/undyne}{#f/14}* Not everyone walks the same path in life, Papyrus.',
                    '<18>{#p/papyrus}{#f/4}IT WOULD APPEAR I HAVE MUCH TO LEARN.'
                 ])
         ],
         () =>
            solo()
               ? [ "<18>{#p/papyrus}{#f/4}FOR STARTERS, YOU WOULDN'T SEE MY COOL BONE ATTACKS!" ]
               : [
                    '<25>{#p/undyne}{#f/14}* Asgore is a great example of an unconventional teacher.',
                    "<18>{#p/papyrus}{#f/9}MAYBE THAT'S HOW I CAN GET INTO THE ROYAL GUARD!",
                    "<25>{#p/undyne}{#f/12}* We'll see."
                 ]
      ),
      a_rg1: pager.create(
         0,
         () =>
            solo()
               ? [
                    '<18>{#p/papyrus}{#f/0}I WONDER WHAT ICE CREAM IN AERIALIS TASTES LIKE.',
                    '<18>{#p/papyrus}{#f/0}IS IT SOFT?\nIS IT PURPLE?',
                    '<18>{#p/papyrus}{#f/4}OR IS IT NOTHING LIKE I EXPECT?',
                    "<18>{#p/papyrus}{#f/5}I KNOW, I KNOW... THESE AREN'T EASY QUESTIONS TO ASK."
                 ]
               : [
                    '<18>{#p/papyrus}{#f/0}YOU SHOULD MEET US AT THE REC CENTER.',
                    "<18>{#p/papyrus}{#f/0}THERE'S SO MUCH TO DO HERE!",
                    "<25>{#p/undyne}{#f/1}* Don't even get him started on the bowling alley.",
                    '<18>{#p/papyrus}{#f/9}WE HOPE TO SEE YOU AROUND SOON!'
                 ],
         () =>
            solo()
               ? [ '<18>{#p/papyrus}{#f/5}AND TO THINK I MAY NEVER KNOW THE ANSWER...' ]
               : SAVE.data.n.plot < 65
               ? [ '<18>{#p/papyrus}{#f/0}IT\'D BE A REAL "TREAT."' ]
               : [ '<18>{#p/papyrus}{#f/4}EVEN IF YOU WERE ALREADY HERE.' ]
      ),
      a_path4: pager.create(
         0,
         () => [
            '<18>{#p/papyrus}{#f/0}TALES SPEAK OF A PLACE WHERE TRASH TURNS TO TREASURE.',
            '<18>{#p/papyrus}{#f/9}A PLACE WHERE GARBAGE TURNS TO GOLD!',
            '<18>{#p/papyrus}{#f/6}AND A PLACE WHERE SPACE TUNA...',
            '<18>{#p/papyrus}{#f/4}WELL, THAT STUFF JUST STRAIGHT UP DISAPPEARS.',
            ...(solo()
               ? [ '<18>{#p/papyrus}{#f/5}DO YOU KNOW OF SUCH A PLACE?' ]
               : [
                    "<25>{#p/undyne}{#f/1}* That sounds like Bratty and Catty's place.",
                    '<25>{#p/undyne}{#f/14}* They love space tuna even more than they love selling junk!',
                    '<25>{#p/undyne}{#f/17}* And they really love selling junk!'
                 ])
         ],
         () =>
            solo()
               ? [ '<18>{#p/papyrus}{#f/4}I\'LL TAKE THAT AS A RESOUNDING "MAYBE."' ]
               : [
                    '<18>{#p/papyrus}{#f/0}SO BRATTY AND CATTY ARE JUNK DEALERS, HUH?',
                    "<18>{#p/papyrus}{#f/4}I'D BE SURPRISED IF THEY DIDN'T KNOW MY BROTHER."
                 ]
      ),
      a_barricade1: pager.create(
         0,
         () => [
            '<18>{#p/papyrus}{#f/4}I HEARD YOU HAVE TO ANSWER SECURITY QUESTIONS THERE...',
            '<18>{#p/papyrus}{#f/1}COULD IT BE??\nA SECRET AUDITION FOR A QUIZ SHOW??',
            ...(solo()
               ? []
               : [
                    '<25>{#p/undyne}{#f/14}* Wait, what?',
                    "<25>{#p/undyne}{#f/17}* Tell me there's a question about...",
                    '<18>{#p/papyrus}{#f/5}ABOUT WHAT?',
                    "<26>{#p/undyne}{#f/8}* About how many boots it'd take to kick a robot's butt into space!",
                    '<18>{#p/papyrus}{#f/4}WELL, THAT DEPENDS ON THE GRAVITY.',
                    '<25>{#p/undyne}{#f/17}* Papyrus!'
                 ])
         ],
         () =>
            solo()
               ? [ "<18>{#p/papyrus}{#f/4}IT HAS BEEN A WHILE SINCE HE'S DONE ONE." ]
               : [
                    "<18>{#p/papyrus}{#f/4}SHE DOESN'T LIKE IT WHEN I HELP WITH HER PLANS.",
                    '<25>{#p/undyne}{#f/17}* I do too!',
                    '<18>{#p/papyrus}{#f/4}HOW DO YOU EXPLAIN THE ROYAL GUARD THING, THEN?',
                    '<25>{#p/undyne}{#f/4}* ...',
                    '<25>{#p/undyne}{#f/12}* Good point.'
                 ]
      ),
      a_puzzle1: pager.create(
         0,
         () => [
            '<18>{#p/papyrus}{#f/4}THESE PUZZLES ARE WEIRD.',
            '<18>{#p/papyrus}{#f/5}I ALWAYS END UP WALKING PAST THE CORRECT TERMINAL.',
            ...(solo()
               ? []
               : [
                    '<25>{#p/undyne}{#f/3}* How many times did someone have to pull you back?',
                    '<18>{#p/papyrus}{#f/1}HOW MANY!?!?\nUNDYNE, WHAT DID YOU DO!!!',
                    "<25>{#p/undyne}{#f/12}* Uh, nothin.'",
                    '<25>{#p/undyne}{#f/12}* Apart from almost erasing myself from existence, that is.',
                    '<18>{#p/papyrus}{#f/8}PLEASE BE MORE CAREFUL NEXT TIME!'
                 ])
         ],
         () =>
            solo()
               ? [ '<18>{#p/papyrus}{#f/4}I HAVE "ZERO" INTENTION OF EVER DOING ONE AGAIN.' ]
               : [ '<18>{#p/papyrus}{#f/4}THESE DIMENSIONAL TECHNOLOGIES ARE A REAL PROBLEM.' ]
      ),
      a_mettaton1: pager.create(
         0,
         () => [
            '<18>{#p/papyrus}{#f/0}LET ME BE CLEAR.',
            '<18>{#p/papyrus}{#f/0}WHEN METTATON SAYS TO DO SOMETHING ON HIS SHOW...',
            '<18>{#p/papyrus}{#f/0}YOU DO IT.',
            '<18>{#p/papyrus}{#f/0}NO IFS, ANDS, OR BUTS ABOUT IT.',
            ...(solo()
               ? []
               : [
                    '<25>{#p/undyne}{#f/17}* What about howevers?',
                    '<18>{#p/papyrus}{#f/4}...',
                    '<18>{#p/papyrus}{#f/4}NO.',
                    '<25>{#p/undyne}{#f/17}* Damn it!'
                 ])
         ],
         () =>
            solo()
               ? [ '<18>{#p/papyrus}{#f/4}AND NO HOWEVERS, EITHER.' ]
               : [
                    '<18>{#p/papyrus}{#f/5}DO YOU -ALWAYS- HAVE TO TRY TO BEND THE RULES...',
                    '<25>{#p/undyne}{#f/1}* Always.',
                    '<18>{#p/papyrus}{#f/4}FIGURES.'
                 ]
      ),
      a_elevator1: pager.create(
         0,
         () => [
            '<18>{#p/papyrus}{#f/0}SO MANY ELEVATORS, SO LITTLE TIME.',
            "<18>{#f/4}EXCEPT FOR WHEN THEY'RE INACCESSIBLE.",
            '<18>{#f/5}I HAD TO WALK AROUND ON FOOT YESTERDAY...',
            "<18>{#f/4}... EVEN THOUGH I PROBABLY COULD'VE FLOWN.",
            ...(solo()
               ? [ '<18>{#f/6}SPEAKING OF WHICH, WHO KEEPS SHUTTING DOWN ELEVATORS!?' ]
               : [
                    "<18>{#f/6}MAYBE I SHOULD CHECK IF THEY'RE WORKING NOW.",
                    '<25>{#p/undyne}{#f/14}* I think Mettaton just shuts them off to run his shows.',
                    '<18>{#p/papyrus}{#f/4}HE... HE DOES?',
                    '<25>{#p/undyne}{#f/12}* Yeah.',
                    '<18>{#p/papyrus}{#f/7}...',
                    '<18>{#p/papyrus}{#f/7}I INTEND TO HAVE A WORD WITH HIM.'
                 ])
         ],
         () =>
            solo()
               ? [ '<18>{#p/papyrus}{#f/4}THIS IS A CONSPIRACY OF THE HIGHEST CALIBER.' ]
               : [
                    '<18>{#p/papyrus}{#f/4}THIS COULD BE MY CHANCE...',
                    '<18>{#p/papyrus}{#f/9}... TO SUGGEST THE CONSTRUCTION OF MORE LIFTGATES!'
                 ]
      ),
      a_lift: pager.create(
         0,
         () => [
            '<18>{#p/papyrus}{#f/0}THIS ELEVATOR SHOULD RELEASE A MUSIC ALBUM!',
            '<18>{#p/papyrus}{#f/0}SO MANY PLEASANTLY BLUESY TUNES...',
            "<18>{#p/papyrus}{#f/5}IT'S A SHAME THE SOUND SYSTEM IS BROKEN RIGHT NOW.",
            ...(solo()
               ? []
               : [
                    '<25>{#p/undyne}{#f/13}* Blues?\n* Seriously?',
                    "<25>{#p/undyne}{#f/14}* Everyone knows rock 'n' roll is the best.",
                    '<18>{#p/papyrus}{#f/4}I WILL DEBATE YOU TO NO END ON THIS.',
                    '<25>{#p/undyne}{#f/12}* And I will not.'
                 ])
         ],
         () =>
            solo()
               ? [ '<18>{#p/papyrus}{#f/4}I MAY OR MAY NOT HAVE USED IT ONE TOO MANY TIMES.' ]
               : [
                    '<18>{#p/papyrus}{#f/0}BLUES IS NICE, BUT SKA IS MY FAVORITE OF ALL.',
                    '<18>{#p/papyrus}{#f/9}YOU CAN NEVER GET ENOUGH OF THOSE RIVETING TRUMPETS!'
                 ]
      ),
      a_elevator2: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}{#f/0}LOOK, YOU'RE ON THE SECOND FLOOR!",
            '<18>{#p/papyrus}{#f/0}HERE, YOU WILL FIND MANY AMAZING THINGS...',
            '<18>{#p/papyrus}{#f/9}PUZZLES!\nBARRICADES!\nSHOW STAGES!',
            '<18>{#p/papyrus}{#f/4}SO... BASICALLY THE EXACT SAME AS THE FIRST FLOOR.',
            ...(solo()
               ? [ '<18>{#p/papyrus}{#f/9}BUT BETTER!!' ]
               : [ '<25>{#p/undyne}{#f/14}* Yeah, that sounds about right.' ])
         ],
         [ '<18>{#p/papyrus}{#f/4}* ... IT EVEN HAS AN EXTRA SENTRY STATION.' ]
      ),
      a_sans: pager.create(
         0,
         () => [
            '<19>{#p/papyrus}{#f/4}YES, MY BROTHER SELLS CORN DOGS AT HIS SENTRY STATION.',
            '<18>{#f/4}IT\'S NOT EXACTLY WHAT I\'D CALL "PALATABLE."',
            "<18>{#f/0}I'D OPEN A FOOD STAND OF MY OWN TO OFFSET IT...",
            '<18>{#f/5}BUT THE LAST TIME I TRIED...',
            '<18>{#f/6}THE SPACE MAFIA WANTED A CUT OF THE PROFIT.',
            ...(solo()
               ? [ "<18>{#f/7}ARE YOU KIDDING!?\nI'D NEVER SELL OUT TO THE MAFIA!!" ]
               : [
                    '<25>{#p/undyne}{#f/7}* Space WHAT?',
                    '<18>{#p/papyrus}{#f/0}SPACE MAFIA.',
                    '<18>{#f/4}YOU KNOW, THE ONES IN THE VIRTUALASIUM.',
                    '<25>{#p/undyne}{#f/12}* Oh... THAT space mafia.',
                    '<25>{#f/17}* I should have known.'
                 ])
         ],
         () =>
            solo()
               ? [
                    "<18>{#p/papyrus}{#f/0}CREDIT WHERE IT'S DUE, THEY DO DRESS SPIFFINGLY.",
                    "<18>{#f/7}NOT THAT IT'LL CHANGE MY MIND ABOUT THEM!",
                    '<18>{#p/papyrus}{#f/4}A GOOD DRESS SENSE CAN ONLY TAKE YOU SO FAR.'
                 ]
               : [
                    '<25>{#p/undyne}{#f/1}* You think this "space mafia" takes a cut of Sans\'s corn dog sales?',
                    "<18>{#p/papyrus}{#f/0}WOW, THAT'S A GREAT QUESTION!",
                    '<25>{#p/undyne}{#f/14}* Really?',
                    "<18>{#p/papyrus}{#f/0}A GREAT QUESTION I DON'T NEED AN ANSWER TO!"
                 ]
      ),
      a_pacing: pager.create(
         0,
         () => [
            '<18>{#p/papyrus}{#f/5}I GOT A STRANGE MESSAGE ON THE OUTERNET TODAY...',
            '<18>{#p/papyrus}{#f/4}ABOUT A COLONY OF MOLE-RATS, TRAPPED IN A FORCE FIELD.',
            '<18>{#p/papyrus}{#f/5}LIVING MOLE-RAT LIVES, EATING MOLE-RAT FOOD...',
            '<18>{#p/papyrus}{#f/4}YEARNING TO ONE DAY REACH THE MOLE-RAT STARS.',
            ...(solo()
               ? [ '<18>{#p/papyrus}{#f/6}... WHAT COULD THIS MEAN!?' ]
               : [
                    "<25>{#p/undyne}{#f/8}* You think that's strange?\n* Ha!",
                    '<25>{#p/undyne}{#f/1}* Just wait until you hear about the message I got the other day!',
                    '<18>{#p/papyrus}{#f/4}WAS IT ABOUT MOLE-RATS?',
                    '<25>{#p/undyne}{#f/14}* No.',
                    '<18>{#p/papyrus}{#f/4}DID IT INVOLVE A "MONEY-MAKING OPPORTUNITY?"',
                    '<25>{#p/undyne}{#f/1}* No.',
                    '<18>{#p/papyrus}{#f/6}DID IT PROMISE A WAY OFF THE OUTPOST??',
                    "<25>{#p/undyne}{#f/1}* ... actually, yes.\n* And that's when I blocked them.",
                    '<25>{#p/undyne}{#f/7}* Nobody makes false promises of freedom and gets away with it!',
                    '<18>{#p/papyrus}{#f/0}ESPECIALLY WHEN THE REAL PROMISE OF FREEDOM...',
                    '<18>{#p/papyrus}{#f/4}IS ON THE PHONE WITH US RIGHT NOW.',
                    '<25>{#p/undyne}{#f/12}* Right...'
                 ])
         ],
         () =>
            solo()
               ? [
                    '<18>{#p/papyrus}{#f/4}I WONDER IF SUCH A COLONY ACTUALLY EXISTS.',
                    '<18>{#p/papyrus}{#f/5}THE UNIVERSE IS MADE OF INFINITES, AFTER ALL...',
                    '<18>{#p/papyrus}{#f/6}INFINITE DIVERSITY IN INFINITE COMBINATIONS!'
                 ]
               : [
                    '<18>{#p/papyrus}{#f/5}BY "KEY TO FREEDOM" I MEANT -YOUR- FREEDOM.',
                    "<18>{#p/papyrus}{#f/4}I'M... NOT REALLY SURE HOW WE'LL GET OURS.",
                    "<18>{#p/papyrus}{#f/0}BUT WE'LL GET IT!!\nI KNOW WE WILL!"
                 ]
      ),
      a_prepuzzle: pager.create(
         0,
         () => [
            '<18>{#p/papyrus}{#f/4}ABOUT THE FLOWERS SCATTERED AROUND THE AREA...',
            "<18>{#p/papyrus}{#f/0}IT WAS ASGORE'S IDEA, ACTUALLY.",
            '<18>{#p/papyrus}{#f/5}IF THAT GUY WASN\'T THE "CEO" OF THE OUTPOST...',
            '<18>{#p/papyrus}{#f/4}HE\'D BE THE "CGO" INSTEAD.',
            '<18>{#p/papyrus}{#f/0}WHICH STANDS FOR "CHIEF GARDENING OFFICER."',
            ...(solo()
               ? []
               : [
                    '<25>{#p/undyne}{#f/1}* Who would I be, then?',
                    '<18>{#p/papyrus}{#f/0}OH YEAH, YOU\'D BE THE "CSETPO."',
                    "<25>{#p/undyne}{#f/17}* ... what's that?",
                    '<18>{#p/papyrus}{#f/4}THE "CHIEF SMASH- EVERYTHING-TO- PIECES OFFICER."',
                    '<25>{#p/undyne}{#f/8}* OH YEAH!!!'
                 ])
         ],
         [
            '<18>{#p/papyrus}{#f/0}AS YOU CAN SEE, ACRONYMS ARE MY SPECIALITY.',
            '<18>{#p/papyrus}{#f/4}I MIGHT AS WELL BE THE "CAO" AROUND HERE...',
            '<18>{#p/papyrus}{#f/9}SHORT FOR "CHIEF ACRONYM OFFICER" OF COURSE!'
         ]
      ),
      a_puzzle2: pager.create(
         0,
         () => [
            '<18>{#p/papyrus}{#f/6}NO MATTER WHERE I GO, I END UP IN THE SAME PLACE!',
            "<18>{#p/papyrus}{#f/5}AT LEAST, THAT'S WHAT HAPPENS TO ME...",
            '<18>{#p/papyrus}{#f/4}WHENEVER I ATTEMPT TO SOLVE THIS PUZZLE.',
            ...(solo()
               ? []
               : [
                    "<25>{#p/undyne}{#f/8}* It's easy!\n* Just fly around it!!",
                    '<18>{#p/papyrus}{#f/0}FLIGHT MAGIC IS RESERVED FOR EMERGENCIES.',
                    '<25>{#p/undyne}{#f/17}* Okay??\n* Then use a jetpack!',
                    "<18>{#p/papyrus}{#f/7}I DON'T HAVE ONE!",
                    '<18>{#p/papyrus}{#f/4}...',
                    '<18>{#p/papyrus}{#f/4}... MAYBE, IF I WAS IN THE ROYAL GUARD...',
                    "<25>{#p/undyne}{#f/1}* Finish your training, and I'll think about it!",
                    '<18>{#p/papyrus}{#f/9}AYE, CAPTAIN!'
                 ])
         ],
         () =>
            solo()
               ? [ '<18>{#p/papyrus}{#f/6}NUMBERS, NUMBERS EVERYWHERE!', '<18>{#f/6}WHAT DOES IT ALL MEAN!?!?' ]
               : [
                    '<18>{#p/papyrus}{#f/0}USING FLIGHT MAGIC WOULD MAKE LIFE TOO EASY.',
                    '<25>{#p/undyne}{#f/11}* And you always do things the hard way because...?',
                    '<18>{#p/papyrus}{#f/9}BECAUSE NOTHING IS AS REWARDING AS HARD WORK!'
                 ]
      ),
      a_mettaton2: pager.create(
         0,
         () => [
            '<18>{#p/papyrus}{#f/5}METTATON WANTED ME TO BE A PART OF HIS NEXT SHOW...',
            '<18>{#p/papyrus}{#f/5}BUT AFTER SOME THOUGHT, I CAME TO REALIZE...',
            "<18>{#p/papyrus}{#f/6}... HOW NERVOUS I'D BE SITTING RIGHT NEXT TO HIM.",
            ...(solo()
               ? []
               : [
                    '<25>{#p/undyne}{#f/12}* You really like him, huh?',
                    '<18>{#p/papyrus}{#f/7}I DO NOT!!!',
                    '<18>{#p/papyrus}{#f/4}...',
                    '<18>{#p/papyrus}{#f/4}MAYBE A LITTLE.'
                 ])
         ],
         () =>
            solo()
               ? [ "<18>{#p/papyrus}{#f/0}THAT'S WHY I TOLD MY BROTHER TO GO IN MY PLACE." ]
               : [ '<18>{#p/papyrus}{#f/6}... OR MAYBE A LOT.' ]
      ),
      a_rg2: pager.create(
         0,
         () => [
            '<18>{#p/papyrus}{#f/6}BE CAREFUL OUT THERE, HUMAN!',
            '<18>{#p/papyrus}{#f/5}THE GUARDS IN THAT AREA ARE KNOWN TO BE UNRULY.',
            '<18>{#p/papyrus}{#f/4}... ALPHYS TOLD ME HOW THEY IGNORE HER ROYAL MEMOS.',
            ...(solo()
               ? []
               : [
                    '<25>{#p/undyne}{#f/16}* ...',
                    '<18>{#f/16}* I had a feeling that might happen to her.',
                    "<18>{#p/papyrus}{#f/5}WHAT'S THE PROBLEM?",
                    "<25>{#p/undyne}{#f/16}* The royal scientist is meant to be the king's most trusted associate.",
                    "<25>{#f/9}* After Dr. Roman passed, though, we weren't ready to replace him.",
                    "<25>{#f/17}* Don't get me wrong.\n* Alphys is... honestly a brilliant individual.",
                    "<25>{#f/16}* But she's unweildy... and she's still got a LOT to prove out there.",
                    '<18>{#p/papyrus}{#f/5}THE ROYAL GUARD IS STILL GETTING USED TO THAT, HUH?',
                    '<25>{#p/undyne}{#f/14}* Something like that.'
                 ])
         ],
         () =>
            solo()
               ? [ "<18>{#p/papyrus}{#f/4}NOW THERE'S A QUESTION...", "<18>{#p/papyrus}{#f/0}WHAT'S A ROYAL MEMO?" ]
               : [ '<18>{#p/papyrus}{#f/4}WE CAN ONLY HOPE IT HAPPENS SOONER THAN LATER.' ]
      ),
      a_barricade2: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}{#f/5}I'M AFRAID I DON'T HAVE MUCH TO SAY ABOUT THIS AREA...",
            "<18>{#p/papyrus}{#f/5}WELL, APART FROM THE FACT THAT IT'S EMPTY.",
            '<18>{#p/papyrus}{#f/5}...',
            '<18>{#p/papyrus}{#f/5}THEY REALLY DID WANT TO DO SO MUCH WITH THIS PLACE...',
            ...(solo()
               ? []
               : [
                    "<25>{#p/undyne}{#f/1}* Hey, don't be sad.\n* You've got me by your side, right?",
                    "<18>{#p/papyrus}{#f/1}* I KNOW.\nYOU'RE A GREAT FRIEND, UNDYNE.",
                    '<25>{#p/undyne}{#f/14}* Shucks...\n* Thanks, Papyrus.',
                    "<18>{#p/papyrus}{#f/4}IT'S MY PLEASURE."
                 ])
         ],
         () =>
            solo()
               ? [ '<18>{#p/papyrus}{#f/5}UNFULFILLED DREAMS ARE THE WORST.' ]
               : [
                    '<18>{#p/papyrus}{#f/0}FRIENDS CAN GET YOU THROUGH ANYTHING.',
                    '<18>{#p/papyrus}{#f/5}EVEN... THE STING OF AN UNFULFILLED DREAM...',
                    "<18>{#p/papyrus}{#f/4}THOUGH, I'D RATHER FIX THE PROBLEM THEN IGNORE IT.",
                    '<25>{#p/undyne}{#f/14}* Never change, Papyrus.'
                 ]
      ),
      a_split: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}{#f/0}LOOK, IT'S THE EVER-FAMOUS METTATON FOUNTAIN!",
            '<18>{#f/4}I HEARD IT TOOK A LOT OF TIME TO GET IT TO LOOK RIGHT.',
            '<18>{#f/5}COUNTLESS HOURS OF TIRELESS, PAINFUL WORK...',
            '<18>{#f/6}TO GET THAT IDEAL RECTANGULAR SHAPE.',
            ...(solo()
               ? []
               : [
                    '<25>{#p/undyne}{#f/17}* And then he destroyed it just so he could rebuild it himself.',
                    '<25>{#p/undyne}{#f/17}* Because it wasn\'t up to his "high standards."',
                    "<18>{#p/papyrus}{#f/4}WAIT, WASN'T THERE SOMETHING ABOUT THAT ON TV?",
                    '<25>{#p/undyne}{#f/14}* Oh yeah, he decided to broadcast it to the entire outpost.',
                    '<18>{#p/papyrus}{#f/1}OH MY GOD!',
                    '<25>{#p/undyne}{#f/17}* Because of course he did.'
                 ])
         ],
         () =>
            solo()
               ? [ "<18>{#p/papyrus}{#f/4}MY BROTHER TELLS ME THAT'S NOT ENTIRELY TRUE." ]
               : [
                    '<18>{#p/papyrus}{#f/4}IF HE KNEW HOW TO BUILD IT HIMSELF...',
                    '<18>{#p/papyrus}{#f/5}WHY DID HE BOTHER TO HIRE ANYONE ELSE?',
                    '<25>{#p/undyne}{#f/17}* We may never know.'
                 ]
      ),
      a_offshoot1: pager.create(
         0,
         () => [
            '<18>{#p/papyrus}{#f/5}THE SIGNAL SEEMS TO BE A BIT WEAK.',
            "<18>{#p/papyrus}{#f/5}IT'S LIKE... INTERFERENCE OF SOME KIND?",
            "<18>{#p/papyrus}{#f/6}MAYBE IT'D BE A GOOD IDEA TO CALL BACK ELSEWHERE.",
            ...(solo()
               ? []
               : [
                    "<25>{#p/undyne}{#f/14}* They're probably near the old security tower in Aerialis.",
                    '<25>{#p/undyne}{#f/12}* Nothing to worry about.'
                 ])
         ],
         () => (solo() ? [ '<18>{#p/papyrus}{#f/6}ELSEWHERE!!!' ] : [ '<25>{#p/undyne}{#f/17}Nothing at all.' ])
      ),
      a_elevator3: pager.create(
         0,
         () => [
            '<18>{#p/papyrus}{#f/0}ANOTHER DAY, ANOTHER ELEVATOR...',
            "<18>{#p/papyrus}{#f/5}IT'S A MIRACLE WE DON'T SPEND OUR LIVES...",
            '<18>{#p/papyrus}{#f/5}GOING UP AND DOWN THESE THINGS EVERY DAY.',
            '<18>{#p/papyrus}{#f/6}EVEN IF WE DO NEED THEM TO GET AROUND.',
            ...(solo()
               ? []
               : [
                    "<25>{#p/undyne}{#f/17}* If you think it's bad here, just wait until you see a spire house!",
                    '<18>{#p/papyrus}{#f/8}N-NO...!',
                    '<25>{#p/undyne}{#f/1}* An elevator a day keeps the taxi driver away!',
                    "<18>{#p/papyrus}{#f/4}THAT IS THE WORST THING I'VE EVER HEARD."
                 ])
         ],
         [ '<18>{#p/papyrus}{#f/4}IF ONLY THERE WAS A FASTER WAY TO GET AROUND...' ]
      ),
      a_elevator4: pager.create(
         0,
         () => [
            '<18>{#p/papyrus}{#f/0}WHAT HAPPENS TO A SKELETON WHO WALKS THROUGH SECURITY?',
            "<19>{#p/papyrus}{#f/4}... THAT'S RIGHT.\nHE GETS RESTRAINED.",
            '<18>{#p/papyrus}{#f/6}JUST LIKE I WAS MY FIRST TIME AT THE REC CENTER.',
            ...(solo()
               ? []
               : [
                    '<25>{#p/undyne}{#f/1}* That sounds like a fun story, why not share it?',
                    '<18>{#p/papyrus}{#f/6}THAT STORY IS ANYTHING BUT "FUN."',
                    '<25>{#p/undyne}{#f/17}* Even though you just made a "pun" out of it.',
                    '<18>{#p/papyrus}{#f/4}CAN YOU BLAME ME FOR WANTING TO BE... HUMERUS?',
                    "<25>{#p/undyne}{#f/17}* God, you're worse than your brother.",
                    '<18>{#p/papyrus}{#f/7}I AM NOT!'
                 ])
         ],
         () =>
            solo()
               ? [ "<18>{#p/papyrus}{#f/6}IT'S A LONG STORY." ]
               : [ '<18>{#p/papyrus}{#f/4}MY BROTHER ALWAYS CRACKS JOKES AT THE WORST TIMES.' ]
      ),
      a_auditorium: pager.create(
         0,
         () => [
            '<18>{#p/papyrus}{#f/0}MY BROTHER ONCE HOSTED A COMEDY SHOW HERE.',
            '<18>{#p/papyrus}{#f/0}IT WAS CALLED...',
            '<18>{#p/papyrus}{#f/4}... THE RIB-TICKLER.',
            '<18>{#p/papyrus}{#f/1}EVEN ASGORE COULD HAVE DONE BETTER THAN THAT!',
            '<18>{#p/papyrus}{#f/0}ANYWAY, HIS SHOW ACTUALLY DID PRETTY WELL.',
            "<18>{#p/papyrus}{#f/5}IT'S A SHAME HE STOPPED DOING IT.",
            ...(solo()
               ? []
               : [
                    '<25>{#p/undyne}{#f/1}* I think he just wanted to be a royal sentry.',
                    "<18>{#p/papyrus}{#f/5}YEAH.\nMAYBE THAT'S IT.",
                    '<18>{#f/4}BUT WHY WOULD HE WANT TO BE A ROYAL SENTRY?',
                    '<18>{#f/9}BEING A ROYAL GUARD IS MUCH MORE PRESTIGIOUS!'
                 ])
         ],
         () =>
            solo()
               ? [
                    "<18>{#p/papyrus}{#f/5}IF YOU EVER FIND SUCCESS, DON'T QUIT.",
                    '<18>{#f/5}WELL... UNLESS NOT DOING THAT WOULD CAUSE YOU HARM.',
                    '<18>{#f/4}THEN YOU SHOULD DEFINITELY QUIT.',
                    "<18>{#f/6}JUST DO WHAT'S BEST FOR YOURSELF, ALRIGHT??"
                 ]
               : [
                    '<18>{#p/papyrus}{#f/4}YOU CAN COUNT ON MY BROTHER TO SHOOT LOW...',
                    '<18>{#p/papyrus}{#f/4}EVERY.\nSINGLE.\nTIME.'
                 ]
      ),
      a_aftershow: pager.create(
         0,
         () => [
            '<18>{#p/papyrus}{#f/0}SO THIS IS WHERE BRATTY AND CATTY WORK, HUH?',
            "<18>{#f/0}IT'S CLEANER THAN I EXPECTED.",
            '<18>{#f/4}AND HERE I THOUGHT THESE TWO WERE TRASH DEALERS...',
            ...(solo()
               ? []
               : [
                    '<25>{#p/undyne}{#f/17}* They ARE trash dealers!',
                    "<25>{#p/undyne}{#f/14}* I think... they're just protective about the trash they collect.",
                    '<25>{#p/undyne}{#f/16}* Alphys told me how she used to go trash- hunting with them...',
                    "<25>{#p/undyne}{#f/9}* It's more than just a silly hobby.\n* It's... a way of life.",
                    '<18>{#p/papyrus}{#f/0}I CAN BELIEVE IT.',
                    "<25>{#p/undyne}{#f/15}* It's also how we get our coolest trinkets.",
                    '<18>{#p/papyrus}{#f/0}LIKE THE MEW MEW DOLL ON TV EARLIER!',
                    '<25>{#p/undyne}{#f/12}* Exactly!'
                 ])
         ],
         () =>
            solo()
               ? [
                    '<18>{#p/papyrus}{#f/0}MAYBE THE JUNK IS JUST KEPT ON THE INSIDE.',
                    "<18>{#p/papyrus}{#f/4}IT'D EXPLAIN A LOT MORE THAN YOU MIGHT THINK."
                 ]
               : [ '<18>{#p/papyrus}{#f/0}I WONDER IF HUMANS GO HUNTING FOR MONSTER TRASH.' ]
      ),
      a_hub1: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}{#f/0}SO YOU'VE MADE IT TO THE CENTRAL RING ROOM!",
            '<18>{#p/papyrus}{#f/4}AT FIRST, WHEN I HEARD THE TERM "RING ROOM..."',
            '<18>{#p/papyrus}{#f/5}I THOUGHT IT REFERRED TO A ROOM FOR MAKING CALLS.',
            ...(solo()
               ? [ "<18>{#p/papyrus}{#f/0}GIVEN WHAT YOU'RE DOING, IT'S NOT ENTIRELY WRONG!" ]
               : [
                    "<18>{#p/papyrus}{#f/0}GIVEN WHAT WE'RE DOING, IT'S NOT ENTIRELY WRONG!",
                    '<25>{#p/undyne}{#f/1}* "Ring room" huh?',
                    '<25>{#p/undyne}{#f/12}* Papyrus, have you ever considered poetry?',
                    "<25>{#p/undyne}{#f/8}* You're a natural!",
                    "<18>{#p/papyrus}{#f/6}I'M NOT SURE THAT'D BE A GREAT USE OF MY TIME.",
                    '<25>{#p/undyne}{#f/1}* Sure it would!',
                    '<25>{#p/undyne}{#f/8}* Just IMAGINE all the crazy stories you could write!',
                    '<18>{#p/papyrus}{#f/4}I THINK...\nYOU AND I...',
                    '<18>{#p/papyrus}{#f/4}... HAVE TWO VERY DIFFERENT IDEAS ABOUT THAT.'
                 ])
         ],
         () =>
            solo()
               ? [ '<18>{#p/papyrus}{#f/4}NOT TO MENTION, THE RECEPTION IS WAY BETTER THERE.' ]
               : [ '<18>{#p/papyrus}{#f/4}PAPYRUS THE POET.', '<18>{#f/5}WELL, IT DOES HAVE A RING TO IT.' ]
      ),
      a_dining: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}{#f/5}I DON'T KNOW ABOUT YOU, BUT THE FOOD IN THIS PLACE...",
            '<18>{#f/5}WELL, IT REALLY GRINDS MY GEARS.',
            "<18>{#f/4}IT'S LIKE EVERYONE FORGOT WHAT GOOD COOKING IS LIKE...",
            "<18>{#f/1}WHERE'S MY PASTA- FLAVORED PASTA!?!?",
            ...(solo()
               ? []
               : [
                    '<25>{#p/undyne}{#f/16}* You know, that reminds me...',
                    '<25>{#p/undyne}{#f/9}* I once wanted the royal guard to have a culinary division.',
                    "<25>{#p/undyne}{#f/12}* We'd have gourmet restaurants, exquisite food...",
                    '<25>{#p/undyne}{#f/17}* ... and then Asgore tasted my cooking.',
                    '<18>{#p/papyrus}{#f/4}... OH.',
                    '<18>{#p/papyrus}{#f/5}...',
                    "<18>{#p/papyrus}{#f/9}MAYBE YOU JUST DIDN'T ADD ENOUGH MARINARA SAUCE!",
                    '<25>{#p/undyne}{#f/3}* No amount of marinara sauce could fix THAT disaster.'
                 ])
         ],
         () =>
            solo()
               ? [
                    '<18>{#p/papyrus}{#f/6}THE LAST TIME I ORDERED IT, THEY...',
                    "<18>{#p/papyrus}{#f/4}WELL, LET'S JUST SAY THE CONCEPT WAS BEYOND THEM."
                 ]
               : [
                    '<18>{#p/papyrus}{#f/4}IN MY VERY HUMBLE OPINION...',
                    '<18>{#p/papyrus}{#f/0}MARINARA SAUCE CAN FIX EVERYTHING.',
                    '<25>{#p/undyne}{#f/17}* But not this!!',
                    "<19>{#p/papyrus}{#f/6}YOU'D BE SURPRISED!"
                 ]
      ),
      a_hub2: pager.create(
         0,
         () => [
            '<18>{#p/papyrus}{#f/0}LIFE IS LIKE A CHESS GAME.',
            '<18>{#p/papyrus}{#f/5}MINUS ALL OF THE BLUNDERING...',
            '<18>{#p/papyrus}{#f/5}AND CAPTURING OF PIECES...',
            '<18>{#p/papyrus}{#f/5}AND...',
            '<18>{#p/papyrus}{#f/4}ACTUALLY, LIFE IS ALMOST NOTHING LIKE A CHESS GAME.',
            '<18>{#p/papyrus}{#f/0}BUT THEY DO HAVE ONE THING IN COMMON.',
            '<18>{#p/papyrus}{#f/0}WHICH IS THAT YOU NEVER KNOW WHAT TO EXPECT!',
            ...(solo()
               ? []
               : [
                    '<25>{#p/undyne}{#f/1}* So, kind of like a box of tree saps, then.',
                    '<18>{#p/papyrus}{#f/6}YEAH, KIND OF LIKE THAT.',
                    "<18>{#p/papyrus}{#f/4}WAIT, ISN'T IT SUPPOSED TO BE A BOX OF CHOCOLATES?",
                    '<25>{#p/undyne}{#f/14}* That would be the human expression.'
                 ])
         ],
         () =>
            solo()
               ? [ '<18>{#p/papyrus}{#f/4}OR WAS IT A BOX OF TREE SAPS...?' ]
               : [ '<18>{#p/papyrus}{#f/0}CHOCOLATE AND TREE SAP TASTE VERY SIMILAR, ACTUALLY.' ]
      ),
      a_lookout: pager.create(
         0,
         () => [
            '<18>{#p/papyrus}{#f/5}IN TIME, WE MAY ALL BE EXPLORERS AMONGST THE STARS.',
            '<18>{#p/papyrus}{#f/5}WE MAY VENTURE OUT IN THE GREAT UNKNOWN...',
            '<18>{#p/papyrus}{#f/5}EJECTING OURSELVES FAR FROM THIS PRISON OF OLD.',
            ...(solo()
               ? []
               : [
                    "<25>{#p/undyne}{#f/17}* Don't tell me you're planning a prison break.",
                    '<18>{#p/papyrus}{#f/4}UMM, NO?\nTHAT WOULD BE FAR TOO SUSPICIOUS.',
                    '<25>{#p/undyne}{#f/3}* Oh. Right.',
                    "<18>{#p/papyrus}{#f/0}IT'S AN ALLEGORY FOR FREEDOM.",
                    '<25>{#p/undyne}{#f/16}* I know what you mean.'
                 ])
         ],
         () =>
            solo()
               ? [
                    "<18>{#p/papyrus}{#f/4}LET'S JUST HOPE THAT, WHEN WE REACH THE STARS...",
                    "<18>WE DON'T MEET ANY OF THOSE MOLE-RAT IMPOSTORS."
                 ]
               : [ '<18>{#p/papyrus}{#f/5}I APOLOGIZE.', "<18>{#f/4}I DIDN'T MEAN TO VENT." ]
      ),
      a_hub3: pager.create(
         0,
         () =>
            solo()
               ? [
                    '<18>{#p/papyrus}{#f/0}OH YEAH, THIS IS WHERE THE CHILLY FOLKS HANG OUT.',
                    '<18>{#p/papyrus}{#f/5}I FEEL BAD FOR THEM...',
                    "<18>{#p/papyrus}{#f/9}THAT'S WHY I'M THINKING OF BUYING THEM A FRIDGE!",
                    "<18>{#p/papyrus}{#f/9}THAT WAY, THEY'LL ALWAYS HAVE A COLD PLACE NEARBY!"
                 ]
               : [ '<18>{#p/papyrus}{#f/0}COME SAY HI, WE\'RE "CHILLING" IN THE NEXT ROOM OVER!' ],
         () =>
            solo()
               ? [ "<18>{#p/papyrus}{#f/0}ISN'T TECHNOLOGY WONDERFUL?" ]
               : [ '<18>{#p/papyrus}{#f/6}WHAT ARE YOU WAITING FOR!!!' ]
      ),
      a_plaza: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}{#f/0}THAT'S WHERE BURGIE'S SHOP IS.",
            '<18>{#p/papyrus}{#f/4}ALTHOUGH HIS FOODS ARE BASICALLY JUNK...',
            '<18>{#p/papyrus}{#f/5}HE DOES SEEM LIKE A REALLY GENUINE GUY.',
            '<18>{#p/papyrus}{#f/5}HE ALSO GAVE ME A LOT TO TALK ABOUT WITH METTATON.',
            '<18>{#p/papyrus}{#f/4}... I DO INTEND TO CONFRONT HIM NOW.',
            ...(solo()
               ? []
               : [
                    '<25>{#p/undyne}{#f/1}* Yeah, uh, you do that.',
                    '<25>{#p/undyne}{#f/12}* As for me, I plan to stay the hell away when that goes down.',
                    '<18>{#p/papyrus}{#f/5}METTATON DID SOME BAD THINGS, BUT...',
                    '<26>{#p/undyne}{#f/14}* You got this, Papyrus.\n* Helping people confront stuff is your specialty.',
                    '<18>{#p/papyrus}{#f/6}...',
                    '<18>{#p/papyrus}{#f/9}Y-YEAH, THIS WILL BE EASY!'
                 ])
         ],
         () =>
            solo()
               ? [ "<18>{#p/papyrus}{#f/6}AFTER I'VE EARNED HIS RESPECT, OF COURSE." ]
               : [
                    '<18>{#p/papyrus}{#f/9}NO RELATIONSHIP IS TOO ABUSIVE FOR PAPYRUS!',
                    '<25>{#p/undyne}{#f/8}* PAPYRUS!!\n* THAT DOES NOT SOUND HOW YOU THINK IT DOES!'
                 ]
      ),
      a_elevator5: pager.create(
         0,
         () => [
            '<18>{#p/papyrus}{#f/5}THIS "REC CENTER" IS CERTIANLY RECREATIONAL...',
            '<18>{#p/papyrus}{#f/4}... IN MORE WAYS THAN ONE.',
            "<18>{#p/papyrus}{#f/0}WHAT'S SO AMAZING ABOUT WISH FLOWERS, ANYWAY?",
            '<18>{#p/papyrus}{#f/0}DO YOUR WISHES COME TRUE IF YOU BREATHE THEM IN?',
            ...(solo()
               ? [ '<18>{#p/papyrus}{#f/0}MAYBE I SHOULD TRY IT SOMETIME.' ]
               : [
                    "<25>{#p/undyne}{#f/14}* I don't think you'd enjoy it, Papyrus.",
                    "<18>{#p/papyrus}{#f/5}YEAH, YOU'RE PROBABLY RIGHT.",
                    '<18>{#p/papyrus}{#f/9}BUT IT NEVER HURTS TO TRY!',
                    '<25>{#p/undyne}{#f/17}* ...'
                 ])
         ],
         () => [
            '<18>{#p/papyrus}{#f/0}BETTER NOT DO IT AT THE REC CENTER, THOUGH.',
            '<18>{#p/papyrus}{#f/4}TALK ABOUT BEING A NUSIANCE.',
            ...(solo() ? [] : [ '<25>{#p/undyne}{#f/12}* Pfft, uh, yeah...' ])
         ]
      ),
      a_hub4: pager.create(
         0,
         () =>
            solo()
               ? [
                    "<18>{#p/papyrus}{#f/0}SO THERE'S LOTS TO DO UP THERE, HUH?",
                    '<18>{#p/papyrus}{#f/0}SOUNDS LIKE A GREAT PLACE TO HANG OUT.',
                    '<18>{#p/papyrus}{#f/9}MAYBE WE CAN ALL GO THERE AFTER WE VISIT UNDYNE!',
                    "<18>{#p/papyrus}{#f/4}... IT'D BE BETTER THAN EATING JUNK FOOD."
                 ]
               : [ "<25>{#p/undyne}{#f/8}* Wanna talk?\n* We're right here, punk!" ],
         () =>
            solo()
               ? [ '<18>{#p/papyrus}{#f/4}YOU DO KNOW WHAT JUNK FOOD IS, RIGHT?' ]
               : [ "<25>{#p/undyne}{#f/8}* And we're not going anywhere else!!!" ]
      ),
      a_sleeping1: pager.create(
         0,
         () => [
            '<18>{#p/papyrus}{#f/0}I HEAR THIS HOTEL IS MADE IN EXTRA DIMENSIONS.',
            '<18>{#p/papyrus}{#f/4}DIMENSIONS...\nLAYERS...',
            '<18>{#p/papyrus}{#f/5}DO THEY GIVE US EXTRA BLANKETS TO TAKE NAPS WITH?',
            '<18>{#p/papyrus}{#f/0}ASKING FOR A FRIEND, OF COURSE.',
            ...(solo()
               ? []
               : [
                    '<25>{#p/undyne}{#f/1}* Right, because you just stay awake all the time.',
                    "<18>{#p/papyrus}{#f/0}OF COURSE!\nI CAN'T WASTE MY TIME NAPPING.",
                    '<25>{#p/undyne}{#f/14}* What about sleeping?',
                    '<18>{#p/papyrus}{#f/6}SLEEPING???',
                    "<18>{#p/papyrus}{#f/4}... THAT'S JUST AN EXCUSE MY BROTHER USES TO TAKE NAPS.",
                    '<25>{#p/undyne}{#f/14}* I see.'
                 ])
         ],
         () =>
            solo()
               ? [ '<18>{#p/papyrus}{#f/9}THE GREAT PAPYRUS NEVER TAKES NAPS.' ]
               : [ "<18>{#p/papyrus}{#f/4}IT'S A MIRACLE HE MAKES IT OUT OF BED ANYMORE." ]
      ),
      a_hub5: pager.create(
         0,
         () => [
            '<18>{#p/papyrus}{#f/5}FEELS KIND OF EMPTY IN THAT ROOM, HUH?',
            '<18>{#p/papyrus}{#f/5}I THINK PEOPLE ARE JUST AFRAID OF THE ELEVATOR.',
            "<18>{#p/papyrus}{#f/4}OR MORE ACCURATELY, WHAT'S INSIDE IT.",
            '<18>{#p/papyrus}{#f/8}A LACK OF MUSIC!',
            ...(solo() ? [] : [ '<25>{#p/undyne}{#f/8}* How could they do this!' ])
         ],
         [ '<18>{#p/papyrus}{#f/4}AN ELEVATOR WITHOUT MUSIC IS JUST AWKWARD.' ]
      ),
      a_citadelevator: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}{#f/5}IF YOU'RE LEAVING THE REC CENTER...",
            "<18>{#p/papyrus}{#f/5}I WON'T BE ABLE TO REACH YOU.",
            "<18>{#p/papyrus}{#f/4}IF YOU'RE ON THE RETURN TRIP, THOUGH...",
            ...(solo()
               ? [ "<18>{#p/papyrus}{#f/0}WELL, THERE'S NO NEED TO WORRY, THEN!" ]
               : [
                    "<25>{#p/undyne}{#f/14}* Yeah, don't worry.\n* We'll probably still be here.",
                    '<18>{#p/papyrus}{#f/0}PROBABLY.'
                 ])
         ],
         () =>
            solo()
               ? [
                    '<18>{#p/papyrus}{#f/6}SO, ARE YOU COMING, OR GOING?',
                    "<18>{#f/0}IT'S HARD TO TELL WHICH WAY IS UP IN THOSE THINGS."
                 ]
               : [ "<25>{#p/undyne}{#f/17}* It's not like we have anything better to do." ]
      )
   },

   s_save_starton: {
      s_crossroads: {
         name: 'Starton - Landing Zone',
         text: () =>
            SAVE.data.n.plot < 29
               ? world.edgy
                  ? [ '<32>{#p/human}* (Missing skeletons fill you with determination.)' ]
                  : [ "<32>{#p/human}* (Sans and Papyrus's antics fill you with determination.)" ]
               : papreal() || SAVE.flag.n.pacifist_marker_bully > 3
               ? [ '<32>{#p/human}* (The box is so lonely, it fills you with determination anyway.)' ]
               : [ '<32>{#p/human}* (The box can rest easy now.)\n* (This, of course, fills you with determination.)' ]
      },
      s_pacing: {
         name: 'Starton - Moon Rock Road',
         text: () =>
            papreal() || SAVE.flag.n.pacifist_marker_bully > 3
               ? SAVE.data.n.plot < 29
                  ? [ '<32>{#p/human}* (The starlight dims.)\n* (Somehow, this fills you with determination.)' ]
                  : [ '<32>{#p/human}* (The starlight has faded.)\n* (Indeed, this fills you with determination.)' ]
               : SAVE.data.b.svr
               ? [
                    '<32>{#p/human}* (The frivolous arguments once had in this room have ceased.)',
                    '<32>* (This fills you with determination.)'
                 ]
               : world.population > 5
               ? [
                    '<32>{#p/human}* (Moon rock merchants argue frivolously in the foreground.)',
                    '<32>* (This fills you with determination.)'
                 ]
               : [ '<32>{#p/human}* (The starlight remains dim.)\n* (Somehow, this fills you with determination.)' ]
      },
      s_spaghetti: {
         name: 'Starton - Spaghetti Junction',
         text: () =>
            [
               [ '<32>{#p/human}* (A plate of spaghetti defying the laws of physics fills you with determination.)' ],
               [
                  '<32>{#p/human}* (The spaghetti no longer defies the laws of physics.)',
                  '<32>{#p/human}* (This fills you with determination.)'
               ],
               [ '<32>{#p/human}* (The spaghetti is no more.)', '<32>{#p/human}* (This fills you with determination.)' ]
            ][SAVE.data.n.state_starton_spaghetti]
      },
      s_town1: {
         name: 'Starton - Town',
         text: () =>
            SAVE.data.b.svr
               ? [
                    '<32>{#p/human}* (The town may be abandoned, but its cuteness remains.)',
                    '<32>{#p/human}* (This fills you with determination.)'
                 ]
               : papreal() || SAVE.flag.n.pacifist_marker_bully > 3
               ? [ '<32>{#p/human}* (A shadow looms over town, filling you with determination.)' ]
               : [ '<32>{#p/human}* (This cute little town fills you with determination.)' ]
      }
   }
};
// END-TRANSLATE

export default text;

CosmosUtils.status(`LOAD MODULE: STARTON TEXT (${Math.floor(performance.now()) / 1000})`, { color: '#07f' });
