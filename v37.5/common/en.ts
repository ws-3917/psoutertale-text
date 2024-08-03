import { pms } from '../../../code/common/extras';
import { music } from '../../../code/systems/assets';
import { battler, choicer, iFancyYourVilliany, pager, phone, player, world } from '../../../code/systems/framework';
import { SAVE } from '../../../code/systems/save';

// START-TRANSLATE
export default {
   _0: {
      _1: 'The player did everything they could...',
      _2: 'But alas, his fate was sealed, and...',
      _3: 'No addendum to the story could unravel it.',
      _4: 'There was no scenario in which the player could truly be satisfied.',
      _5: 'Is this what they really deserve?',
      _6: 'To live in bittersweet agony, knowing he could never be...',
      _7: 'No...\nI will not allow it.',
      _8: 'If bending the fabric of spacetime is what it takes, then...',
      _9: 'So be it.',
      _10: 'I will not rest until the task is done.'
   },

   a_common: {
      bullybed: [
         [
            '>{#p/human}* (...)',
            '>{#p/human}* (You wake up.)',
            '>{#p/human}* (The outpost is the same as it was when you went to sleep.)'
         ],
         [
            '>{#p/human}* (You explore every corner of the outpost for signs of life, but nobody comes.)',
            '>{#p/human}* (You search again, and again, and again...)',
            '>{#p/human}* (But nobody comes.)'
         ],
         [
            '>{#p/human}* (You search for the craft you arrived in.)\n* (It appears it was destroyed.)',
            '>{#p/human}* (You search for other craft left behind by monsterkind.)',
            '>{#p/human}* (It appears they have been taken from you.)'
         ],
         [
            '>{#p/human}* (You visit the lab, and search for blueprints and shuttlecraft parts.)',
            '>{#p/human}* (The blueprints are available, and the parts are in storage...)',
            ">{#p/human}* (But the CORE's remaining energy will not be sufficient to launch the shuttle.)"
         ],
         [
            '>{#p/human}* (You try to RESET your SAVE file.)\n* (Nothing happens.)',
            '>{#p/human}* (You try again to RESET your SAVE file.)',
            '>{#p/human}* (Nothing happens.)'
         ],
         [
            ">{#p/human}* (In desperation, you try to call Toriel's Phone.)\n* (No response.)",
            '>{#p/human}* (You try to call Papyrus and Undyne.)',
            '>{#p/human}* (No response.)'
         ],
         [
            '>{#p/human}* (...)',
            ">{#p/human}* (You've lost track of how long you've been here.)",
            ">{#p/human}* (You can't tell if it's been weeks, months, or years.)",
            ">{#p/human}* (You've configured the CORE to use as little energy as possible...)",
            ">{#p/human}* (But it can't last forever.)"
         ],
         [
            '>{#p/human}* (The gravity disengages.)',
            '>{#p/human}* (The temperature begins to drop.)',
            '>{#p/human}* (The atmosphere is collapsing.)',
            '>{#p/human}* (Without power, the Outpost will be uninhabitable.)'
         ],
         [
            '>{#p/human}* (Somehow, you feel at peace.)',
            ">{#p/human}* (You've come to terms with your death.)",
            ">{#p/human}* (You realize there's no other way this could have gone.)",
            '>{#p/human}* (As the remaining air dissapates, you remember your journey one last time.)',
            '>{#p/human}* (From the day of your exile, to the day monsterkind ran away.)'
         ],
         [
            '>{#p/human}* (The air has run out now.)',
            '>{#p/human}* (You begin to choke.)',
            '>{#p/human}* (You feel the life leaving your body.)',
            '>{#p/human}* (It would appear the end is...)'
         ]
      ],
      dogcheck1: [
         '>{#x1}{#p/event}Bark!\n{#x1}{#p/event}Bark!',
         '>{#p/basic}(And thus, you have reached the end!)',
         '>{#p/basic}(The time has come to review your accomplishments!)'
      ],
      dogcheck2: () => [
         ...(!SAVE.flag.b._saved
            ? !SAVE.flag.b._item
               ? [
                  '>{#x1}{#p/event}Bark!\n{#x1}{#p/event}Bark!',
                  '>{#p/basic}(Wow!)\n(No SAVE points and no ITEMs!)',
                  '>{#p/basic}(You must have been in a hurry!)'
               ]
               : [
                  '>{#x1}{#p/event}Bark!\n{#x1}{#p/event}Bark!\n{#x1}{#p/event}Bark!',
                  ">{#p/basic}(Wow!)\n(Don't you know what a SAVE point is?)",
                  '>{#p/basic}(You never used one!)'
               ]
            : !SAVE.flag.b._item
               ? [
                  '>{#x1}{#p/event}Bark!\n{#x1}{#p/event}Bark!',
                  ">{#p/basic}(Wow!)\n(Don't you know what an ITEM is?)",
                  '>{#p/basic}(You never got one!)'
               ]
               : []),
         ...(SAVE.flag.n._hits === 0
            ? !SAVE.flag.b._flee
               ? [
                  '>{#x1}{#p/event}Bark!\n{#x1}{#p/event}Bark!\n{#x1}{#p/event}Bark!',
                  '>{#p/basic}(Amazing!)\n(You dodged every attack, and you never ran away!)',
                  !SAVE.flag.b._equip
                     ? ">{#p/basic}(You must have known you wouldn't need any armors or weapons!)"
                     : '>{#p/basic}(You must be very brave indeed!)'
               ]
               : [
                  '>{#x1}{#p/event}Bark!\n{#x1}{#p/event}Bark!\n{#x1}{#p/event}Bark!',
                  '>{#p/basic}(Amazing!)\n(You dodged every attack you faced!)',
                  !SAVE.flag.b._equip
                     ? '>{#p/basic}(How fortunate for someone who never equipped any armors or weapons!)'
                     : '>{#p/basic}(How skilled in battle you must be!)'
               ]
            : SAVE.flag.n._deaths === 0
               ? !SAVE.flag.b._heal
                  ? !SAVE.flag.b._flee
                     ? [
                        '>{#x1}{#p/event}Bark!\n{#x1}{#p/event}Bark!\n{#x1}{#p/event}Bark!',
                        '>{#p/basic}(Amazing!)\n(Not only did you never die...)',
                        !SAVE.flag.b._equip
                           ? '>{#p/basic}(You never healed, or equipped any armors or weapons either!)'
                           : '>{#p/basic}(You never healed, either!)'
                     ]
                     : [
                        '>{#x1}{#p/event}Bark!\n{#x1}{#p/event}Bark!\n{#x1}{#p/event}Bark!',
                        '>{#p/basic}(Amazing!)\n(You never died, and you never ran away!)',
                        !SAVE.flag.b._equip
                           ? ">{#p/basic}(You didn't even heal or equip any armors or weapons!)"
                           : ">{#p/basic}(You didn't even heal!)"
                     ]
                  : !SAVE.flag.b._flee
                     ? [
                        '>{#x1}{#p/event}Bark!\n{#x1}{#p/event}Bark!\n{#x1}{#p/event}Bark!',
                        '>{#p/basic}(Amazing!)\n(You never died, and you never ran away!)',
                        !SAVE.flag.b._equip
                           ? '>{#p/basic}(Is this why you never equipped any armors or weapons?)'
                           : '>{#p/basic}(Is this what it means to be brave?)'
                     ]
                     : !SAVE.flag.b._equip
                        ? [
                           '>{#x1}{#p/event}Bark!\n{#x1}{#p/event}Bark!',
                           '>{#p/basic}(Amazing!)\n(You never died or equipped any armors or weapons!)'
                        ]
                        : ['>{#x1}{#p/event}Bark!\n{#x1}{#p/event}Bark!', '>{#p/basic}(Amazing!)\n(You never died once!)']
               : !SAVE.flag.b._heal
                  ? !SAVE.flag.b._flee
                     ? [
                        '>{#x1}{#p/event}Bark!\n{#x1}{#p/event}Bark!\n{#x1}{#p/event}Bark!',
                        '>{#p/basic}(Amazing!)\n(You never healed, and you never ran away!)',
                        !SAVE.flag.b._equip
                           ? ">{#p/basic}(Are you sure you also didn't need any armors or weapons?)"
                           : '>{#p/basic}(You must like living on the edge.)'
                     ]
                     : !SAVE.flag.b._equip
                        ? [
                           '>{#x1}{#p/event}Bark!\n{#x1}{#p/event}Bark!',
                           '>{#p/basic}(Amazing!)\n(You never healed or equipped any armors or weapons!)'
                        ]
                        : [
                           '>{#x1}{#p/event}Bark!\n{#x1}{#p/event}Bark!',
                           '>{#p/basic}(Amazing!)\n(You never healed yourself once!)'
                        ]
                  : !SAVE.flag.b._flee
                     ? [
                        '>{#x1}{#p/event}Bark!\n{#x1}{#p/event}Bark!\n{#x1}{#p/event}Bark!',
                        '>{#p/basic}(Amazing!)\n(You refused to run away!)',
                        !SAVE.flag.b._equip
                           ? ">{#p/basic}(Are you sure you also didn't need any armors or weapons?)"
                           : '>{#p/basic}(You must like living on the edge.)'
                     ]
                     : !SAVE.flag.b._equip
                        ? [
                           '>{#x1}{#p/event}Bark!\n{#x1}{#p/event}Bark!',
                           '>{#p/basic}(Amazing!)\n(You never equipped any armors or weapons!)'
                        ]
                        : []),
         ...(!SAVE.flag.b._skip
            ? [
               '>{#x1}{#p/event}Bark!\n{#x1}{#p/event}Bark!\n{#x1}{#p/event}Bark!',
               ">{#p/basic}(How kind...)\n(You never skipped anybody's dialogue!)",
               !SAVE.flag.b._call
                  ? SAVE.data.n.plot_pmcheck === 0 && phone.of('pms').display() && pms().length > 0
                     ? '>{#p/basic}(Too bad your phone seems to have never been used.)'
                     : '>{#p/basic}(Too bad your phone seems to have never dialed anyone.)'
                  : SAVE.data.n.plot_pmcheck === 0 && phone.of('pms').display() && pms().length > 0
                     ? '>{#p/basic}(Too bad your phone seems to have never had its messages read.)'
                     : '>{#p/basic}(You must really care about everyone a lot!)'
            ]
            : !SAVE.flag.b._call
               ? SAVE.data.n.plot_pmcheck === 0 && phone.of('pms').display() && pms().length > 0
                  ? [
                     '>{#x1}{#p/event}Bark!\n{#x1}{#p/event}Bark!',
                     '>{#p/basic}(How strange...)\n(Your phone seems to have never been used!)'
                  ]
                  : [
                     '>{#x1}{#p/event}Bark!\n{#x1}{#p/event}Bark!',
                     '>{#p/basic}(How strange...)\n(Your phone seems to have never dialed anyone!)'
                  ]
               : SAVE.data.n.plot_pmcheck === 0 && phone.of('pms').display() && pms().length > 0
                  ? [
                     '>{#x1}{#p/event}Bark!\n{#x1}{#p/event}Bark!',
                     '>{#p/basic}(How strange...)\n(Your phone seems to have never had its messages read!)'
                  ]
                  : []),
         ...(!SAVE.flag.b._getg
            ? [
               '>{#x1}{#p/event}Bark!\n{#x1}{#p/event}Bark!',
               '>{#p/basic}(Shocking!)\n(You never acquired any G!)'
            ]
            : !SAVE.flag.b._useg
               ? [
                  '>{#x1}{#p/event}Bark!\n{#x1}{#p/event}Bark!',
                  '>{#p/basic}(Shocking!)\n(You never spent any of your G!)'
               ]
               : []),
         ...(SAVE.data.b.water
            ? [
               '>{#x1}{#p/event}Bark!',
               ">{#p/basic}(You really like holding that cup of electro-dampening fluid, don't you?)"
            ]
            : [])
      ],
      dogcheck3: (none: boolean) =>
         none
            ? [
               '>{#x1}{#p/event}Bark!\n{#x1}{#p/event}Bark!',
               ">{#p/basic}(Seems you didn't do anything out of the ordinary.)",
               '>{#p/basic}(Perhaps this is extraordinary on its own!)'
            ]
            : [
               '>{#x1}{#p/event}Bark!\n{#x1}{#p/event}Bark!',
               ">{#p/basic}(Seems that's all there is to say today!)",
               '>{#p/basic}(Congratulations and goodbyes!)'
            ],
      neutral0() {
         let d = false;
         let k = '';
         let m = music.ending;
         const a = [] as string[];
         const b = [] as string[];
         const addA = (lines: string[]) => a.push(...lines);
         const addB = (lines: string[]) => b.push(...lines);
         const dtoriel = SAVE.data.n.state_wastelands_toriel === 2;
         const ddoggo = SAVE.data.n.state_starton_doggo === 2;
         const dlesserdog = SAVE.data.n.state_starton_lesserdog === 2;
         const dgreatdog = SAVE.data.n.state_starton_greatdog === 2;
         const ddogs = SAVE.data.n.state_starton_dogs === 2;
         const dpapyrus = SAVE.data.n.state_starton_papyrus === 1;
         const ddoge = SAVE.data.n.state_foundry_doge === 1;
         const dmuffet = SAVE.data.n.state_foundry_muffet === 1;
         const dundyne = SAVE.data.n.state_foundry_undyne !== 0;
         const droyalguards = SAVE.data.n.state_aerialis_royalguards === 1;
         const dmadjick = SAVE.data.b.killed_madjick;
         const dknightknight = SAVE.data.b.killed_knightknight;
         const dmettaton = SAVE.data.b.killed_mettaton;
         const hkills = world.trueKills;
         const mdeaths = hkills + (SAVE.data.n.state_foundry_undyne === 1 ? 1 : 0);
         const royals = [
            !ddoggo,
            !dlesserdog,
            !ddogs,
            !dgreatdog,
            !ddoge,
            !droyalguards,
            !dmadjick,
            !dknightknight
         ].filter(v => v).length;
         if (world.bad_robot) {
            if (!dundyne) {
               if (royals < 2) {
                  d = true;
                  k = 'dark_death'; // NO-TRANSLATE
                  m = music.youscreweduppal;
                  // dark neutral: lone captain variant [undyne call]
                  addB([
                     '>{#s/phone}{#p/event}* Ring, ring...',
                     '>{#p/undyne}{#f/7}* ARRIGHT PUNK, LISTEN UP!',
                     ">{#p/undyne}{#f/4}* You made a BIG mistake sparing my life after what you've done.",
                     ">{#p/undyne}{#f/5}* Thanks to you, I've got the power to do what I ALWAYS wanted, and...",
                     '>{#p/undyne}{#f/17}* ... and...',
                     ">{#p/undyne}{#f/16}* ... well, before that, I'd like to tell you how I got here first.",
                     '>{#p/undyne}{#f/20}* So... it all started when you left the outpost.',
                     ">{#p/undyne}{#f/22}* I found out what you'd done, and I... stormed the Citadel myself.",
                     '>{#p/undyne}{#f/22}* Alphys was in shock.\n* The king was dead, and the guard was gone.',
                     '>{#p/undyne}{#f/20}* Plus, after whatever she and Mettaton tried to do to stop you...',
                     ">{#p/undyne}{#f/22}* The outpost's power systems started acting like crazy.",
                     '>{#p/undyne}{#f/19}* The atmosphere, the gravity... these things we depend on...',
                     '>{#p/undyne}{#f/19}* They all started going haywire, resulting in countless deaths.',
                     ">{#p/undyne}{#f/18}* Without a Royal Guard, we couldn't evacuate them to safety.",
                     '>{#p/undyne}{#f/16}* Then, to top it off, a massive power surge hit the archive HARD.',
                     '>{#p/undyne}{#f/19}* The humans within were killed instantly.',
                     '>{#p/undyne}{#f/10}* ...\n* I got what ASGORE was going for with it.',
                     ">{#p/undyne}{#f/10}* A way to set us free, that didn't involve us killing anyone?",
                     '>{#p/undyne}{#f/16}* ... heh.\n* It was very... him.',
                     ">{#p/undyne}{#f/19}* But after that power surge, ASGORE's plan had failed.",
                     '>{#p/undyne}{#f/20}* So with the human SOULs in front of me, and the kingdom falling...',
                     '>{#p/undyne}{#f/20}* ...',
                     '>{#p/alphys}{#f/10}* Not to interrupt, but I think we found what you were l-looking for.',
                     '>{#p/undyne}{#f/12}* Is that so?',
                     '>{#p/undyne}{#f/1}* Let me see that...',
                     '>{#p/undyne}{#f/17}* ...',
                     '>{#p/alphys}{#f/18}* ...\n* Is that right!?',
                     '>{#p/undyne}{#f/9}* Tch.\n* "Is that right."',
                     '>{#p/undyne}{#f/11}* Are you kidding me?',
                     '>{#p/alphys}{#f/20}* ...',
                     ">{#p/undyne}{#f/8}* OF COURSE IT'S RIGHT!",
                     '>{#p/undyne}{#f/7}* So, after I gathered up the human SOULs...',
                     '>{#p/undyne}{#f/11}* Alphys and I came up with a plan to save EVERYONE.',
                     ">{#p/undyne}{#f/16}* We'd take a shuttle past the forcefield, hunt you down...",
                     '>{#p/undyne}{#f/7}* And TEAR the SOUL from your body!',
                     ">{#p/undyne}{#f/1}* Then, we'd go back, and blast the force field to pieces!",
                     '>{#p/undyne}{#f/12}* Only problem is, how would we find you?',
                     '>{#p/alphys}{#f/15}* W-well, I can answer THAT question.',
                     '>{#p/alphys}{#f/16}* After all, I was the one who came up with the solution!',
                     ">{#p/alphys}{#f/26}* It's simple, really.\n* By answering this VERY phone call...",
                     ">{#p/alphys}{#f/18}* We've been able to triangulate your location!"
                  ]);
                  if (!dpapyrus) {
                     addB([
                        ">{|}{#p/alphys}{#f/18}* We've been able to triangulate your- {%}",
                        '>{#p/papyrus}{#f/6}UNDYNE!?\nARE YOU OKAY!?',
                        '>{#p/alphys}{#f/2}* ...!?',
                        '>{#p/undyne}{#f/13}* Huh??\n* What are YOU doing here?',
                        '>{#p/papyrus}{#f/5}WELL... I HEARD A LOT OF SCREAMING.\nAND SHOUTING.',
                        '>{#p/papyrus}{#f/6}I WAS WORRIED ABOUT YOU.',
                        '>{#p/undyne}{#f/14}* Aw, thanks Papyrus.\n* How considerate of you.',
                        ">{#p/papyrus}{#f/0}OH, YOU'RE WELCOME!",
                        ">{#p/undyne}{#f/7}* Maybe NEXT time, don't sneak onto SOMEONE ELSE'S SHUTTLE!!!",
                        ">{#p/papyrus}{#f/6}I-I'M SORRY, I WAS CURIOUS, OKAY??",
                        '>{#p/papyrus}{#f/5}I JUST WENT TO LOOK, AND THE NEXT THING I KNEW...',
                        '>{#p/papyrus}{#f/6}THE SHUTTLE STARTED FLYING OFF THE OUTPOST!',
                        ">{#p/papyrus}{#f/4}BELIEVE ME, I WOULD'VE RATHER STAYED BEHIND.",
                        ">{#p/alphys}{#f/15}* Okay, uh, I don't know if you can tell, but...",
                        ">{#p/alphys}{#f/23}* We're in the middle of a situation here.",
                        '>{#p/undyne}{#f/12}* Yeah, you should... probably go back to hiding again.',
                        '>{#p/undyne}{#f/1}* Think of it like a game of hide-and-go seek!',
                        '>{#p/papyrus}{#f/6}AND HOW LONG DO I HAVE TO HIDE!?',
                        ">{#p/undyne}{#f/12}* I don't know???",
                        ">{#p/alphys}{#f/17}* Two hours.\n* We'll give you two hours.",
                        '>{#p/papyrus}{#f/0}OKAY!!\nGOOD LUCK THEN!!',
                        '>{#p/alphys}{#f/20}* ... is two hours gonna be enough to catch the human, or...',
                        '>{#p/undyne}{#f/14}* Pfft, two HOURS?',
                        ">{#p/undyne}{#f/1}* Yeah, I don't think so.",
                        '>{#p/undyne}{#f/4}* ...\n* Fuhuhuhuhu...',
                        '>{*}{#x0}{#p/undyne}{#f/7}* Try two SECONDS.{^40}{%}'
                     ]);
                  } else {
                     addB([
                        ">{#p/alphys}{#f/18}* We've been able to triangulate your location!",
                        ">{#p/undyne}{#f/1}* Fuhuhu... that's right.",
                        ">{#p/undyne}{#f/7}* You've already FALLEN for it, punk!",
                        ">{#p/alphys}{#f/16}* Y-yeah, you're gonna wish you hadn't d-done everything you did!!",
                        ">{#p/alphys}{#f/16}* No matter where you go, there's no escape!!",
                        ">{#p/undyne}{#f/8}* YEAH!!\n* YOU TELL 'EM, ALPHYS!!",
                        '>{#p/undyne}{#f/4}* ...\n* Fuhuhuhuhu...',
                        ">{*}{#x0}{#p/undyne}{#f/7}* I've got you now.{^40}{%}"
                     ]);
                  }
               } else {
                  k = 'dark_undyne'; // NO-TRANSLATE
                  // dark neutral: undyne variant [alphys call]
                  addA([
                     '>{#s/phone}{#p/event}* Ring, ring...',
                     '>{#p/alphys}{#f/33}* ... shh, shh, I think this is them.',
                     ">{#p/alphys}{#f/1}* Hiya!\n* I'm Dr. Alphys.",
                     '>{#p/alphys}{#f/17}* Head of the royal pain- in-the-butt society.',
                     '>{#p/alphys}{#f/28}* ... may I interest you in a tragic backstory today?'
                  ]);
                  addB([
                     '>{#p/alphys}{#f/5}* So I was going about my business, looking after the archive...',
                     '>{#p/alphys}{#f/23}* When, suddenly, I hear a spacecraft taking off.',
                     '>{#p/basic}{@fill=#ffbbdc}* Huuuuge spacecraft.',
                     '>{#p/alphys}{#f/17}* Uh, not really.\n* It was just a shuttle.',
                     '>{#p/basic}{@fill=#ffbbdc}* Oh.\n* Tiny spacecraft.',
                     '>{#p/alphys}{#f/15}* Yeah, and Asgore was NOWHERE to be found.',
                     '>{#p/alphys}{#f/20}* I checked his house, I checked the royal annex...',
                     '>{#p/alphys}{#f/21}* ... then, I noticed the power fluctuations.',
                     '>{#p/alphys}{#f/24}* Turns out Mettaton was being stupid and wasted it all fighting you.',
                     '>{#p/alphys}{#f/25}* So now, the outpost was running on practically nothing.',
                     '>{#p/basic}{@fill=#d4bbff}* Oh my god, what happened next?',
                     '>{#p/alphys}{#f/26}* ...',
                     '>{#p/basic}{@fill=#d4bbff}* Oh, right, you totally freaked out and called Undyne.',
                     '>{#p/alphys}{#f/18}* ... and when she got there, she told me Asgore was dead!',
                     ">{#p/alphys}{#f/3}* Because that's DEFINITELY what I wanted to hear.",
                     '>{#p/basic}{@fill=#ffbbdc}* Like, for sure.',
                     '>{#p/alphys}{#f/13}* I mean, she did at least call the Royal Guard...',
                     '>{#p/alphys}{#f/20}* To help stabilize the CORE and stop anyone from getting hurt.',
                     '>{#p/alphys}{#f/30}* But what she did next was... WAY worse than I expected.',
                     '>{#p/basic}{@fill=#d4bbff}* Is... is this where...',
                     '>{#p/alphys}{#f/31}* Where Undyne found the archive, and killed the humans inside.',
                     ">{#p/alphys}{#f/32}* In that moment, I didn't know WHAT to feel anymore.",
                     ">{#p/basic}{@fill=#ffbbdc}* Gosh, I don't blame you.",
                     ">{#p/basic}{@fill=#d4bbff}* It's like she was only thinking about herself!!!",
                     '>{#p/alphys}{#f/17}* She said she "got" what Asgore was going for...',
                     '>{#p/alphys}{#f/24}* But that she "couldn\'t allow it to go on."',
                     '>{#p/alphys}{#f/13}* ...\n* I was pretty upset about it, but...',
                     '>{#p/alphys}{#f/10}* At least we still just needed one more SOUL.\n* We still had hope.',
                     ">{#p/basic}{@fill=#ffbbdc}* ... until you didn't.",
                     ">{#p/alphys}{#f/20}* Right.\n* Until we didn't.",
                     '>{#p/alphys}{#f/21}* Because Undyne, in her INFINITE WISDOM...',
                     // this is the moment alphys would say the f word if the game was pg-13 btw
                     '>{#p/alphys}{#f/22}* Had NO FREAKING IDEA HOW TO STORE THE HUMAN SOULS PROPERLY.',
                     ">{#p/basic}{@fill=#d4bbff}* And now they're all...",
                     '>{#p/alphys}{#f/24}* ... gone.',
                     '>{#p/alphys}{#f/6}* At that point, I just gave up.',
                     ">{#p/alphys}{#f/8}* I didn't care what she did after that.",
                     '>{#p/alphys}{#f/10}* I quit my job.\n* Threw my experiments in the garbage.',
                     '>{#p/alphys}{#f/33}* And then...',
                     '>{#p/basic}{@fill=#ffbbdc}* You came back to us.',
                     '>{#p/basic}{@fill=#d4bbff}* You became an interstellar trash hunter again!',
                     ">{#p/alphys}{#f/29}* That's right.",
                     ">{#p/alphys}{#f/28}* And I'm GOOD at it.\n* Heck, I'm the best in the business.",
                     ">{#p/basic}{@fill=#ffbbdc}* Now there's a fact if I've ever heard one.",
                     '>{#p/alphys}{#f/10}* Like, honestly, who CARES about getting out of here anyway?',
                     '>{#p/alphys}{#f/28}* With all this space junk that comes through...',
                     ">{#p/alphys}{#f/18}* There's no reason to leave at all!",
                     '>{#p/basic}{@fill=#ffbbdc}* But nobody else knows about the human stuff.',
                     ">{#p/basic}{@fill=#d4bbff}* Yeah, it's like, our new super duper big secret.",
                     '>{#p/alphys}{#f/23}* Well, Undyne can lie to them all she wants.',
                     '>{#p/alphys}{#f/23}* She can build her arms factories, and her watchtowers...',
                     '>{#p/alphys}{#f/25}* If she thinks going all "military" will sell her story, okay.',
                     '>{#p/alphys}{#f/26}* She can do whatever she sees fit.'
                  ]);
                  if (!dtoriel) {
                     addB([
                        ">{#p/basic}{@fill=#d4bbff}* Oh yeah, didn't she, like, forcibly take over the Outlands or something?",
                        '>{#p/alphys}{#f/24}* Ugh, that pissed me off.',
                        '>{#p/alphys}{#f/30}* The former queen tried to stand up to it, and...',
                        ">{#p/alphys}{#f/31}* ... she got absolutely curb-stomped by Undyne's supporters.",
                        ">{#p/alphys}{#f/21}* Undyne STILL hasn't taken responsibility for that.",
                        ">{#p/basic}{@fill=#ffbbdc}* Gosh, that's just sad."
                     ]);
                  } else {
                     addB([
                        ">{#p/basic}{@fill=#d4bbff}* Oh yeah, didn't she, like, draft people into the Royal Guard or something?",
                        '>{#p/alphys}{#f/24}* Ugh, that was stupid.',
                        '>{#p/alphys}{#f/30}* All those people being forced to stand around all day...',
                        '>{#p/alphys}{#f/31}* Watching for a human that may NEVER come...',
                        ">{#p/alphys}{#f/21}* It's like she forgot the telescope network exists.",
                        ">{#p/basic}{@fill=#ffbbdc}* Wow, she didn't think that through at all."
                     ]);
                  }
                  addB(['>{#p/basic}{@fill=#d4bbff}* Yeah...']);
                  if (!dpapyrus) {
                     addB([
                        '>{#p/alphys}{#f/20}* And she did it in spite of Papyrus BEGGING her not to.',
                        '>{#p/alphys}{#f/31}* ... I stopped caring about her entirely after that.'
                     ]);
                  } else {
                     addB([
                        ">{#p/alphys}{#f/20}* Maybe, if Papyrus was around, he could've stopped her.",
                        ">{#p/alphys}{#f/18}* ... but we all know why that didn't happen, don't we?"
                     ]);
                  }
                  if (hkills > 19) {
                     addB([
                        '>{#p/alphys}{#f/17}* ...\n* Oh well.\n* It is what it is.',
                        ">{#p/alphys}{#f/27}* Either way, it's thanks to all the people you killed...",
                        '>{#p/alphys}{#f/26}* That any of this happened in the first place.',
                        ">{#p/alphys}{#f/18}* So, I'm blaming it all on you."
                     ]);
                  } else {
                     addB([
                        '>{#p/alphys}{#f/17}* ...\n* Oh well.\n* It is what it is.',
                        ">{#p/alphys}{#f/26}* And even if you didn't kill THAT many people...",
                        '>{#p/alphys}{#f/23}* Even if Mettaton and I overreacted...',
                        ">{#p/alphys}{#f/18}* It's still totally your fault."
                     ]);
                  }
                  addB([
                     ">{#p/basic}{@fill=#ffbbdc}* You tell 'em, Alphys.",
                     '>{#p/basic}{@fill=#d4bbff}* Yeah, in your face, loser!',
                     ">{#p/alphys}{#f/33}* ... anyway.\n* That's all I've got.",
                     '>{#p/alphys}{#f/1}* Bye now!',
                     '>{#p/basic}{@fill=#ffbbdc}* Until next time, pip-squeak.',
                     ">{#p/basic}{@fill=#d4bbff}* Bratty, are you sure there's going to BE a next time?",
                     ">{#p/basic}{@fill=#ffbbdc}* Oh, shoot, you're right.\n* The phone's, like, outta batteries anyway.",
                     '>{#p/basic}{@fill=#d4bbff}* ... later, alligator!!!\n* Nya ha ha!!!',
                     '>{#s/equip}{#p/event}* Click...'
                  ]);
               }
            } else if (royals < 2) {
               if (!dpapyrus || royals === 1) {
                  k = 'dark_alphys'; // NO-TRANSLATE
                  // dark neutral: lone scientist variant [sans call]
                  addA([
                     '>{#s/phone}{#p/event}* Ring, ring...',
                     '>{#p/sans}{#f/0}* heya.',
                     ">{#p/sans}{#f/3}* it's been a while, huh?"
                  ]);
                  addB([
                     '>{#p/sans}{#f/0}* after you left, alphys... kind of went into a panic.',
                     '>{#p/sans}{#f/0}* not only were asgore and undyne gone...',
                     '>{#p/sans}{#f/0}* but due to a botched plan involving mettaton and the core...',
                     ">{#p/sans}{#f/3}* the outpost's power systems were in total disarray.",
                     ">{#p/sans}{#f/3}* both the atmosphere and the gravity broke down.\n* it... wasn't pretty.",
                     '>{#p/sans}{#f/0}* just from her call, i could tell things were pretty bad.',
                     '>{#p/sans}{#f/0}* but by the time i got to the citadel...',
                     '>{#p/sans}{#f/3}* a power surge killed the humans in the archive as well.',
                     ">{#p/sans}{#f/3}* ... i'd never seen her in worse shape.",
                     '>{#p/sans}{#f/0}* still, i knew from back when we were lab partners...',
                     '>{#p/sans}{#f/2}* that she had what it took to overcome anything.',
                     '>{#p/sans}{#f/0}* so i sat with her, and gave her a chance to process it all...',
                     ">{#p/sans}{#f/3}* and by the end, she\n  took responsibility and accepted asgore's crown.",
                     ">{#p/sans}{#f/0}* ... right away, we knew we'd have to protect the human souls.",
                     '>{#p/sans}{#f/0}* so, we repurposed some old lab junk and built a containment system.',
                     ">{#p/sans}{#f/3}* after that, we realized we'd need someone to guard it."
                  ]);
                  if (!dtoriel) {
                     addB([
                        '>{#p/sans}{#f/0}* when the former queen returned, shortly thereafter...',
                        '>{#p/sans}{#f/2}* she seemed like the ideal candidate.',
                        '>{#p/sans}{#f/0}* but then, she saw the human souls for herself...',
                        '>{#p/sans}{#f/3}* and just went on a tirade about us being "part of his agenda."',
                        '>{#p/sans}{#f/0}* we tried to explain what happened, and that asgore was innocent...',
                        ">{#p/sans}{#f/3}* but she wasn't having it in the slightest.",
                        '>{#p/sans}{#f/3}* needless to say, she declined the job.'
                     ]);
                  }
                  if (!dpapyrus) {
                     if (!dtoriel) {
                        addB([
                           ">{#p/sans}{#f/0}* luckily, the same couldn't be said about papyrus.",
                           '>{#p/sans}{#f/3}* after toriel declined, i called him next, and... well.'
                        ]);
                     } else {
                        addB(['>{#p/sans}{#f/3}* luckily, since papyrus was around, i called him up, and... well.']);
                     }
                     if (royals === 1) {
                        addB([
                           '>{#p/sans}{#f/2}* he pretty much took the job on the spot.',
                           '>{#p/papyrus}{#f/4}... FOR A WHILE, ANYWAY.',
                           ">{#p/sans}{#f/0}* ah, there you are.\n* how'd the session go just now?",
                           '>{#p/papyrus}{#f/0}OH, IT WENT WELL!\nEVERYONE SEEMS TO BE GETTING ALONG.',
                           '>{#p/sans}{#f/3}* heh.\n* glad to hear it.',
                           '>{#p/papyrus}{#f/0}BY THE WAY, WHO ARE YOU TALKING TO?'
                        ]);
                     } else {
                        addB([
                           '>{#p/sans}{#f/2}* he pretty much took the job on the spot.',
                           ">{#p/papyrus}{#f/0}HELLO, SANS!\nI'VE COMPLETED MY SHIFT FOR TODAY.",
                           '>{#p/papyrus}{#f/9}NO INTRUDERS OR MALFUNCTIONS TO REPORT!',
                           '>{#p/sans}{#f/0}* great work, papyrus.\n* keep it up.',
                           ">{#p/papyrus}{#f/6}I'LL BE SURE TO!!!",
                           ">{#p/papyrus}{#f/0}SO, WHO'S THAT YOU'RE TALKING TO?"
                        ]);
                     }
                     addB([
                        ">{#p/sans}{#f/2}* oh, y'know.\n* just another human, nobody important.",
                        '>{#p/papyrus}{#f/4}BUT ALL THE HUMANS ARE...',
                        '>{#p/papyrus}{#f/7}... WAIT!!\nGIVE ME THAT!!',
                        '>{#p/sans}{#f/0}* here you go.',
                        '>{#p/papyrus}{#f/0}HELLO, HUMAN!',
                        '>{#p/papyrus}{#f/4}IT SURE HAS BEEN A WHILE...',
                        '>{#p/papyrus}{#f/5}...'
                     ]);
                     if (royals === 1) {
                        k = 'dark_alphys_therapy'; // NO-TRANSLATE
                        addB([
                           ">{#p/papyrus}{#f/5}THERE'S... A STORY I'D LIKE TO TELL YOU, ACTUALLY.",
                           '>{#f/6}IT\'LL EXPLAIN THE WHOLE "FOR A WHILE" THING.',
                           '>{#p/sans}{#f/3}* ... ah.\n* here we go.',
                           '>{#p/papyrus}{#f/7}SHH!!!',
                           ">{#p/papyrus}{#f/5}SO... I'M DOING MY JOB AS USUAL ONE DAY.",
                           '>{#p/papyrus}{#f/0}MAKING SURE THE HUMAN SOULS REMAIN SAFE AND SOUND.',
                           '>{#p/papyrus}{#f/4}THEN...\nOUT OF NOWHERE...'
                        ]);
                        if (!ddoggo) {
                           addB([
                              '>{#p/papyrus}{#f/5}I HEAR A LOUD KNOCK AT THE MAINTENANCE DOOR.',
                              '>{#p/papyrus}{#f/6}AS IT TURNS OUT, A STRANGE, BLIND DOG HAD RUN INTO IT!',
                              '>{#p/papyrus}{#f/5}I WAS QUITE CONFUSED AT FIRST...',
                              '>{#p/papyrus}{#f/5}BUT AFTER TALKING TO HIM, THE REASON BECAME CLEAR.',
                              '>{#p/papyrus}{#f/6}HE WAS LOOKING FOR HIS CANINE UNIT COMRADES.',
                              '>{#p/papyrus}{#f/0}FORTUNATELY, I WAS HAPPY TO HELP.',
                              '>{#p/papyrus}{#f/4}SO, AFTER THE END OF MY SHIFT...',
                              '>{#p/papyrus}{#f/0}WE WENT OUT TOGETHER TO BEGIN OUR SEARCH.',
                              '>{#p/papyrus}{#f/5}FROM THE EDGE OF THE NOW-OPEN OUTLANDS...',
                              '>{#p/papyrus}{#f/5}TO THE TALLEST SKYSCRAPERS IN THE CITADEL...',
                              ">{#p/papyrus}{#f/6}IT WAS SAFE TO SAY WE'D SEEN IT ALL.",
                              '>{#p/papyrus}{#f/5}... ALL EXCEPT THE CANINES WE WERE LOOKING FOR.',
                              '>{#p/sans}{#f/0}* hmm...',
                              '>{#p/sans}{#f/3}* did you ever find the other dogs?',
                              '>{#p/papyrus}{#f/5}WELL... NO.',
                              '>{#p/papyrus}{#f/5}BY THE TIME WE MADE IT BACK TO THE ROYAL ANNEX...',
                              '>{#p/papyrus}{#f/5}ALPHYS WAS AWAKE, AND TOLD US WHAT HAPPENED.',
                              '>{#p/papyrus}{#f/3}... ALL THOSE ROYAL GUARDS...',
                              '>{#p/papyrus}{#f/31}...',
                              '>{#p/papyrus}{#f/5}DOGGO TOOK THE NEWS PRETTY HARD.',
                              ">{#p/papyrus}{#f/6}BUT ALPHYS AND I, WE DIDN'T LET HIM GIVE UP!",
                              '>{#p/papyrus}{#f/6}IN HIS TIME OF NEED, WE COMFORTED HIM OURSELVES!',
                              ">{#p/papyrus}{#f/5}WE PROMISED HIM HE'D HAVE A HOME HERE.",
                              '>{#p/sans}{#f/0}* hmm... i see.',
                              ">{#p/sans}{#f/2}* that explains the dog hair on asgore's couch."
                           ]);
                        } else if (!dlesserdog) {
                           addB([
                              '>{#p/papyrus}{#f/5}I HEAR A BUNCH OF KNOCKS AT THE MAINTENANCE DOOR.',
                              '>{#p/papyrus}{#f/6}AS IT TURNS OUT, A SHORT-NECKED DOG WANTED MY ATTENTION!',
                              '>{#p/papyrus}{#f/5}I WAS QUITE CONFUSED AT FIRST...',
                              '>{#p/papyrus}{#f/5}BUT AFTER PETTING IT SEVERAL TIMES, IT ALL MADE SENSE.',
                              '>{#p/papyrus}{#f/6}ITS NECK... BEGAN TO SPELL OUT A MESSAGE.',
                              '>{#p/papyrus}{#f/6}AND THAT MESSAGE WAS "ALONE."',
                              ">{#p/papyrus}{#f/8}I FELT SO BAD!!\nI COULDN'T HELP BUT CRY!!",
                              '>{#p/papyrus}{#f/5}ANYWAY, I ASKED ALPHYS ABOUT IT LATER, AND...',
                              '>{#p/papyrus}{#f/5}SHE TOLD ME WHAT HAD HAPPENED.',
                              '>{#p/papyrus}{#f/3}... ALL THOSE ROYAL GUARDS...',
                              '>{#p/papyrus}{#f/31}...',
                              '>{#p/papyrus}{#f/5}IT WAS HARD HEARING THAT NEWS, BUT...',
                              '>{#p/papyrus}{#f/6}KNOWING HOW CANIS MINOR MUST HAVE FELT...',
                              '>{#p/papyrus}{#f/5}FROM THEN ON, I GAVE IT ALL THE ATTENTION I COULD.',
                              ">{#p/sans}{#f/3}* well... if it's any consolation...",
                              '>{#p/sans}{#f/0}* i think you did the right thing.'
                           ]);
                        } else if (!ddogs) {
                           addB([
                              '>{#p/papyrus}{#f/5}I HEAR A BANGING SOUND FROM THE MAINTENANCE DOOR.',
                              '>{#p/papyrus}{#f/6}AS IT TURNS OUT, TWO DOGS WITH AXES HAD WHALED ON IT!',
                              '>{#p/papyrus}{#f/5}I WAS QUITE CONCERNED AT FIRST...',
                              '>{#p/papyrus}{#f/5}BUT AFTER WHAT THEY TOLD ME...',
                              '>{#p/papyrus}{#f/5}THAT FEELING HAD TURNED TO SADNESS.',
                              '>{#p/papyrus}{#f/3}... ALL THOSE ROYAL GUARDS...',
                              '>{#p/papyrus}{#f/31}...',
                              '>{#p/papyrus}{#f/5}DOGAMY AND DOGARESSA, THEY...',
                              '>{#p/papyrus}{#f/5}THEY QUESTIONED IF THEIR MARRIAGE WAS WORTH MAINTAINING.',
                              '>{#p/sans}{#f/0}* hmm...',
                              '>{#p/sans}{#f/3}* ... surely you convinced them to stay together.',
                              '>{#p/papyrus}{#f/4}...',
                              '>{#p/papyrus}{#f/4}YOU KNOW ME TOO WELL.',
                              '>{#p/papyrus}{#f/5}ANYWAY, THEY JUST WANTED SOME ALONE TIME AFTER THAT.',
                              ">{#p/papyrus}{#f/5}SO... I DROPPED THEM OFF AT ASGORE'S PLACE.",
                              '>{#p/sans}{#f/0}* actually, i heard they still live there.',
                              '>{#p/sans}{#f/2}* something tells me that extra room will come in handy soon.'
                           ]);
                        } else if (!dgreatdog) {
                           addB([
                              '>{#p/papyrus}{#f/5}I HEAR A KNOCK OF SORTS AT THE MAINTENANCE DOOR.',
                              ">{#p/papyrus}{#f/6}AS IT TURNS OUT, IT WAS JUST A BIG DOG'S LOUD BARK.",
                              '>{#p/papyrus}{#f/5}THEN THE DOG TOOK OFF ITS ARMOR, AND BECAME SMALL.',
                              '>{#p/papyrus}{#f/6}AND THEN IT RAN UP TO ME, AND WANTED TO PLAY!',
                              '>{#p/papyrus}{#f/6}IT SEEMED... MORE DESPERATE THAN EVER.',
                              ">{#p/papyrus}{#f/6}LIKE IT HADN'T PLAYED WITH ANYONE IN YEARS!",
                              '>{#p/papyrus}{#f/4}I GET THAT DOG-TIME CAN BE WEIRD, BUT...',
                              '>{#p/papyrus}{#f/6}STILL, I WONDERED IF SOMETHING HAD GONE AWRY!',
                              '>{#p/papyrus}{#f/5}SO I ASKED ALPHYS ABOUT IT LATER, AND...',
                              '>{#p/papyrus}{#f/5}SHE TOLD ME WHAT HAD HAPPENED.',
                              '>{#p/papyrus}{#f/3}... ALL THOSE ROYAL GUARDS...',
                              '>{#p/papyrus}{#f/31}...',
                              '>{#p/papyrus}{#f/5}IT WAS HARD HEARING THAT NEWS, BUT...',
                              '>{#p/papyrus}{#f/6}KNOWING HOW CANIS MAJOR MUST HAVE FELT...',
                              '>{#p/papyrus}{#f/5}FROM THEN ON, I PLAYED WITH IT AS MUCH AS I COULD.',
                              ">{#p/sans}{#f/3}* well... if it's any consolation...",
                              '>{#p/sans}{#f/0}* i think you did the right thing.'
                           ]);
                        } else if (!ddoge) {
                           addB([
                              '>{#p/papyrus}{#f/5}I GET A CALL FROM A HIGH-RANKING GUARD MEMBER.',
                              '>{#p/papyrus}{#f/6}AND A DISTRESSING ONE AT THAT.',
                              ">{#p/papyrus}{#f/5}AS A FRIEND OF UNDYNE'S, SHE TOLD ME TO MEET HER...",
                              '>{#p/papyrus}{#f/6}TO DISCUSS A MATTER OF "GREAT IMPORTANCE."',
                              '>{#p/papyrus}{#f/6}I WAS A LITTLE NERVOUS WHEN I GOT THERE...',
                              '>{#p/papyrus}{#f/5}BUT SHE REALLY DID JUST WANT TO TALK.',
                              '>{#p/papyrus}{#f/4}ADMITTEDLY, SHE WAS BEING CRYPTIC ABOUT IT...',
                              '>{#p/papyrus}{#f/5}THOUGH, WITH ENOUGH TIME, I CRACKED THE CODE.',
                              '>{#p/papyrus}{#f/3}... ALL THOSE ROYAL GUARDS...',
                              '>{#p/papyrus}{#f/31}...',
                              '>{#p/papyrus}{#f/5}DOGE QUESTIONED THE VIABILITY OF HER PURPOSE.',
                              '>{#p/papyrus}{#f/6}THAT OF PROTECTING MONSTERKIND.',
                              '>{#p/papyrus}{#f/5}IF THE ROYAL GUARD COULD BE WIPED OUT BY ONE HUMAN...',
                              '>{#p/papyrus}{#f/6}WHAT WOULD SHE ALONE BE ABLE TO DO?',
                              '>{#p/papyrus}{#f/5}...\nI TOOK HER TO THE CITADEL.',
                              '>{#p/papyrus}{#f/5}I SHOWED HER THE HUMAN SOULS.',
                              '>{#p/papyrus}{#f/6}AND I TURNED TO HER AND SAID...',
                              '>{#p/papyrus}{#f/6}"JUST ONE MORE."',
                              '>{#p/papyrus}{#f/5}THEN, SHE LOOKED BACK AT ME, CLOSED HER EYES...',
                              '>{#p/papyrus}{#f/6}AND REPLIED "I UNDERSTAND."',
                              '>{#p/sans}{#f/0}* jeez.\n* sounds intense.',
                              ">{#p/sans}{#f/3}* for what it's worth, that probably motivated her quite a bit."
                           ]);
                        } else if (!droyalguards) {
                           addB([
                              '>{#p/papyrus}{#f/5}I GET A CALL FROM TWO NUMBERED GUARD MEMBERS.',
                              '>{#p/papyrus}{#f/6}AND A DISTRESSING ONE AT THAT.',
                              '>{#p/papyrus}{#f/5}AS SOMEONE THEY SHARED ICE CREAM WITH...',
                              '>{#p/papyrus}{#f/6}THEY ASKED ME TO MEET WITH THEM TO DISCUSS SOMETHING.',
                              '>{#p/sans}{#f/0}* if i had to guess...',
                              ">{#p/sans}{#f/3}* i'd say this particular meeting wasn't about ice cream.",
                              '>{#p/papyrus}{#f/6}SADLY NOT.',
                              '>{#p/papyrus}{#f/5}INSTEAD, THEY... HAD SOME BAD NEWS.',
                              '>{#p/papyrus}{#f/3}... ALL THOSE ROYAL GUARDS...',
                              '>{#p/papyrus}{#f/31}...',
                              '>{#p/papyrus}{#f/5}AFTER HAVING ONLY JUST BEEN PROMOTED, THEY...',
                              '>{#p/papyrus}{#f/6}THEY FELT LIKE ALL THEIR TRAINING HAD BEEN FOR NOTHING.',
                              '>{#p/papyrus}{#f/6}BUT...!\nI SAID I COULD GET THEM A NEW JOB!!',
                              '>{#p/papyrus}{#f/5}SO, I WENT THROUGH A FEW IDEAS.',
                              '>{#p/papyrus}{#f/4}MOST OF THEM WERE REJECTED, BUT WEIRDLY ENOUGH...',
                              '>{#p/papyrus}{#f/4}THEY LOVED MY IDEA OF THEM JOINING A SWIMMING TEAM.',
                              ">{#p/sans}{#f/0}* so you're saying 01 and 02 became professional swimmers?",
                              ">{#p/sans}{#f/3}* well, as long as they're happy doing what they're doing.",
                              ">{#p/papyrus}{#f/4}OH, DON'T WORRY.\nNOT ONLY ARE THEY HAPPY...",
                              ">{#p/papyrus}{#f/0}THEY'RE ALSO INCREDIBLY POPULAR!",
                              ">{#p/papyrus}{#f/5}...\nSTILL, KNOWING WHY THEY'RE THERE...",
                              '>{#p/papyrus}{#f/5}DOES MAKE ME FEEL A LITTLE SAD.'
                           ]);
                        } else if (!dmadjick) {
                           addB([
                              '>{#p/papyrus}{#f/5}A STRANGE WIZARD APPEARED IN THE MAINTENANCE ROOM.',
                              '>{#p/papyrus}{#f/6}AND ASKED ME ABOUT THE MEANING OF LIFE.',
                              '>{#p/papyrus}{#f/4}WE... HAD TO SCALE THE CONVERSATION BACK A BIT.',
                              '>{#p/papyrus}{#f/4}TO SAY THE LEAST.',
                              '>{#p/sans}{#f/3}* i can imagine.',
                              '>{#p/sans}{#f/0}* so did you learn anything after that?',
                              '>{#p/papyrus}{#f/5}WELL, YES.\nI LEARNED ABOUT A LOT OF THINGS.',
                              '>{#p/papyrus}{#f/6}ITS FEARS, ITS ANXIETIES...',
                              '>{#p/papyrus}{#f/5}AND...  A LOSS FAR GREATER THAN I HAD ANTICIPATED.',
                              '>{#p/papyrus}{#f/3}... ALL THOSE ROYAL GUARDS...',
                              '>{#p/papyrus}{#f/31}...',
                              '>{#p/papyrus}{#f/5}LOSING ITS MENTOR, TERRESTRIA, HIT PARTICULARLY HARD.',
                              '>{#p/papyrus}{#f/6}COZMO HAD WORKED TO IMPRESS HER ALL ITS LIFE...',
                              '>{#p/papyrus}{#f/5}AND YET, NEVER FELT IT DID ENOUGH TO MAKE HER PROUD.',
                              '>{#p/papyrus}{#f/6}WELL, I DISAGREED!',
                              ">{#p/papyrus}{#f/5}I KNEW SHE'D JUST BE GLAD IT WAS STILL ALIVE.",
                              '>{#p/papyrus}{#f/4}AND SINCE IT KNEW HER BETTER THAN ANYONE ELSE...',
                              '>{#p/papyrus}{#f/5}IT WAS ONLY RIGHT IT SHOULD CARRY ON WITH HER LEGACY.',
                              '>{#p/papyrus}{#f/0}THE CONVERSATION THAT FOLLOWED WAS HIGHLY ENCHANTING!',
                              ">{#p/papyrus}{#f/6}WE TALKED FOR SO LONG, I'M AMAZED I EVEN KEPT UP!",
                              '>{#p/papyrus}{#f/0}ONCE WE WERE DONE, WE PARTED WAYS FEELING SATISFIED.',
                              '>{#p/papyrus}{#f/5}THOUGH... I KNEW THERE WAS STILL SOMETHING WRONG.'
                           ]);
                        } else {
                           addB([
                              '>{#p/papyrus}{#f/5}A POLITE, GENTLE KNOCK GRACED THE MAINTENANCE DOOR.',
                              '>{#p/papyrus}{#f/4}I TRIED TO INVITE -WHOEVER IT WAS- INSIDE, BUT...',
                              '>{#p/papyrus}{#f/5}IT APPEARED -SHE- WAS TOO LARGE TO GET THROUGH.',
                              '>{#p/papyrus}{#f/5}SO, TO ACCOMMODATE THE TOWERING, ARMORED KNIGHT...',
                              '>{#p/papyrus}{#f/6}I MOVED ALL THE MAINTENANCE ROOM FURNITURE OUTSIDE.',
                              '>{#p/papyrus}{#f/4}AFTER THAT... HER AND I HAD A TALK.',
                              '>{#p/papyrus}{#f/5}A TALK...',
                              '>{#p/papyrus}{#f/6}... ABOUT DEATH.',
                              '>{#p/papyrus}{#f/6}NOT MY FAVORITE SUBJECT, BUT...',
                              '>{#p/papyrus}{#f/5}I COULD TELL SHE NEEDED TO TALK ABOUT IT.',
                              '>{#p/papyrus}{#f/6}ABOUT... HOW SOMEONE WHO LIVES AS LONG AS HER...',
                              '>{#p/papyrus}{#f/6}LIVES TO SEE EVERYONE ELSE DIE.',
                              '>{#p/papyrus}{#f/5}AND THEN...',
                              '>{#p/papyrus}{#f/3}... ALL THOSE ROYAL GUARDS...',
                              '>{#p/papyrus}{#f/31}...',
                              '>{#p/papyrus}{#f/5}I TRIED TO MAKE HER FEEL BETTER, BUT...',
                              ">{#p/papyrus}{#f/6}NO MATTER WHAT I SAID, TERRESTRIA WOULDN'T CHEER UP!",
                              '>{#p/papyrus}{#f/5}SO INSTEAD...',
                              '>{#p/papyrus}{#f/5}I JUST GAVE HER A BIG, LONG HUG.',
                              '>{#p/papyrus}{#f/6}WE HELD EACH OTHER FOR HOURS...',
                              ">{#p/papyrus}{#f/6}I'M SURPRISED I WAS ABLE TO GO FOR THAT LONG!!",
                              ">{#p/papyrus}{#f/5}AFTER THAT, SHE LEFT AND SAID SHE'D BE OKAY.",
                              ">{#p/papyrus}{#f/4}PART OF ME DOESN'T BELIEVE HER, BUT...",
                              ">{#p/papyrus}{#f/5}IT'S BEST IF I RESPECT HER WISHES NOW.",
                              '>{#p/sans}{#f/3}* well... hey.',
                              ">{#p/sans}{#f/0}* if she needs you again, she'll let you know.",
                              '>{#p/papyrus}{#f/5}I SURE HOPE SO.'
                           ]);
                        }
                        addB([
                           '>{#p/papyrus}{#f/5}...',
                           ">{#p/papyrus}{#f/5}FINDING OUT WHAT YOU DID... WASN'T EASY FOR ME.",
                           ">{#p/papyrus}{#f/6}THOUGH, I GUESS I CAN'T -FULLY- BLAME YOU.",
                           ">{#p/papyrus}{#f/6}THE ROYAL GUARD'S JOB WAS TO CAPTURE HUMANS, AND...",
                           ">{#p/papyrus}{#f/5}I'M ONLY JUST STARTING TO GRASP WHAT THAT MEANS.",
                           '>{#p/papyrus}{#f/5}IT MUST BE HARD... KNOWING WHAT YOU HAD TO DO.',
                           '>{#p/papyrus}{#f/3}KNOWING... WHO YOU HAD TO DESTROY.',
                           '>{#p/papyrus}{#f/31}...',
                           ">{#p/papyrus}{#f/5}PERHAPS IT'S FOR THE BEST I NEVER BECAME A GUARD.",
                           '>{#p/papyrus}{#f/6}PERHAPS... UNDYNE WAS JUST TRYING TO PROTECT ME.',
                           ">{#p/papyrus}{#f/5}...\nI'M NOT SURE HOW TO FEEL ABOUT THAT.",
                           ">{#p/sans}{#f/0}* hey, aren't you gonna tell them what happened next?",
                           '>{#p/papyrus}{#f/6}OH, RIGHT!!!',
                           '>{#p/papyrus}{#f/0}SO THAT WHOLE ORDEAL HAD ME FEELING TIRED.',
                           ">{#p/papyrus}{#f/4}NOW, DON'T JUDGE ME, BUT...",
                           '>{#p/papyrus}{#f/4}I MAY HAVE CLOSED MY EYES FOR LONGER THAN ANTICIPATED.'
                        ]);
                        if (!ddoggo || !dlesserdog || !ddogs || !dgreatdog || !dknightknight) {
                           addB([
                              '>{#p/papyrus}{#f/6}IN FACT, I ONLY OPENED THEM AFTER ANOTHER KNOCK!',
                              '>{#p/papyrus}{#f/0}THIS TIME ON THE FRONT DOOR OF MY HOUSE.'
                           ]);
                        } else if (!ddoge || !droyalguards) {
                           addB([
                              '>{#p/papyrus}{#f/6}IN FACT, I ONLY OPENED THEM AFTER ANOTHER CALL!',
                              '>{#p/papyrus}{#f/0}THIS TIME WHILE I WAS AT HOME.'
                           ]);
                        } else {
                           addB([
                              '>{#p/papyrus}{#f/6}IN FACT, I ONLY OPENED THEM AFTER ANOTHER APPEARANCE!',
                              '>{#p/papyrus}{#f/0}THIS TIME AT MY OWN HOUSE.'
                           ]);
                        }
                        addB([
                           '>{#p/papyrus}{#f/5}IT WAS SOMEONE ELSE WHO WANTED MY HELP...',
                           '>{#p/papyrus}{#f/0}FORTUNATELY, I HAD ALL THE ENERGY I NEEDED NOW!',
                           '>{#p/papyrus}{#f/0}AND SO, I HELPED THEM, TOO.',
                           '>{#p/papyrus}{#f/4}THE NEXT DAY, SOMEONE ELSE CAME LOOKING FOR ME.',
                           '>{#p/papyrus}{#f/5}THE DAY AFTER THAT, TWO PEOPLE WANTED ME.',
                           '>{#p/papyrus}{#f/6}THEN THREE!\nTHEN FIVE!!\nTHEN SEVEN!!!',
                           '>{#p/sans}{#f/2}* then eleven?',
                           '>{#p/papyrus}{#f/4}NO, UNFORTUNATELY THE NON-COMPOSITES STOPPED THERE.',
                           '>{#p/papyrus}{#f/6}DESPITE THAT, I DID MY BEST TO HELP THEM ALL!!',
                           '>{#p/papyrus}{#f/5}AS MY POPULARITY GREW, I REALIZED...',
                           ">{#p/papyrus}{#f/6}I'D HAVE TO TAKE THINGS TO THE NEXT LEVEL!!",
                           '>{#p/papyrus}{#f/9}SO I MADE SLOGANS!\nBOUGHT BUILDINGS!\nHIRED EMPLOYEES!',
                           '>{#p/papyrus}{#f/4}EVENTUALLY, I QUIT MY JOB LOOKING AFTER THE HUMANS.',
                           '>{#p/papyrus}{#f/6}THE ROYAL GUARD I HELPED ORIGINALLY DOES THAT NOW!!',
                           '>{#p/papyrus}{#f/0}AND SO MY FOCUS SHIFTED TO WORKING AT MY COMPANY.',
                           '>{#p/papyrus}{#f/0}CALLED "THERAPYRUS INDUSTRIES."',
                           '>{#p/papyrus}{#f/9}"DEALING WITH YOUR EMOTIONS SO -YOU- DON\'T HAVE TO!"',
                           '>{#p/sans}{#f/0}* love that tagline.',
                           '>{#p/papyrus}{#f/0}ALSO, SANS IS MY RECEPTIONIST.',
                           ">{#p/papyrus}{#f/9}HE'S GREAT AT MAKING SURE I HAVE TIME FOR EVERYONE!",
                           '>{#p/papyrus}{#f/5}FOR ONCE, MY BROTHER IS GREAT AT SOMETHING...',
                           ">{#p/papyrus}{#f/0}I'VE NEVER BEEN SO PROUD OF HIM!!",
                           '>{#p/sans}{#f/0}* yeah, this company really brought out the best in us.',
                           '>{#p/papyrus}{#f/9}YEAH, IT MIGHT EVEN BE OUR TRUE CALLING!!!',
                           '>{#p/sans}{#f/2}* heheh, calling.',
                           ">{#p/papyrus}{#f/6}WHAT!?\nWHAT'S SO FUNNY?",
                           '>{#p/sans}{#f/3}* oh, nothing.',
                           ">{#p/papyrus}{#f/4}YOU HAVEN'T CHANGED A BIT.",
                           '>{#p/papyrus}{#f/5}...\nWELL, ANYWAY...',
                           ">{#p/papyrus}{#f/6}DESPITE WHAT YOU'VE DONE, I...",
                           '>{#p/papyrus}{#f/5}I HOPE YOU FIND -YOUR- TRUE CALLING TOO ONE DAY.',
                           '>{#p/papyrus}{#f/4}AND IF YOU EVER NEED SOMEONE TO TALK TO...',
                           '>{#p/papyrus}{#f/6}YOU KNOW EXACTLY WHO TO...',
                           '>{#p/papyrus}{#f/4}... OH, I GET IT.\nVERY FUNNY, SANS.',
                           '>{#p/sans}{#f/2}* glad you finally picked up on that one.',
                           '>{#p/papyrus}{#f/7}ANYWAY, YOU KNOW WHO TO CALL!!!'
                        ]);
                     } else {
                        k = 'dark_alphys_virtual'; // NO-TRANSLATE
                        addB([
                           ">{#p/papyrus}{#f/5}I KEEP THINKING... ABOUT THOSE WHO'VE DISAPPEARED.",
                           ">{#p/papyrus}{#f/6}ASGORE, WHO I'D SWAP STORIES WITH SOMETIMES...",
                           ">{#p/papyrus}{#f/6}UNDYNE, WHO'D GIVE ME WARRIOR TRAINING...",
                           ">{#p/papyrus}{#f/5}THE ROYAL GUARD, WHO'D GREET ME ON THEIR WAY TO WORK.",
                           '>{#p/papyrus}{#f/6}I USED TO SPEND SO MUCH TIME WITH THEM, BUT NOW...',
                           ">{#p/papyrus}{#f/5}THEY'RE GONE.",
                           ">{#p/papyrus}{#f/5}AND I DON'T KNOW WHEN THEY'RE COMING BACK.",
                           ">{#p/papyrus}{#f/7}... IT'S HIGHLY INFURIATING!!!",
                           ">{#p/papyrus}{#f/4}HAVEN'T ANY OF THEM HEARD OF A SCHEDULE?",
                           '>{#p/papyrus}{#f/6}OR A CALENDAR!?',
                           ">{#p/papyrus}{#f/5}ANYTHING TO TELL ME WHEN THEY'RE COMING BACK!",
                           ">{#p/sans}{#f/3}* hey, i miss 'em too.",
                           ">{#p/sans}{#f/0}* but you can't spend all your life thinking about 'em.",
                           '>{#p/sans}{#f/2}* maybe you could talk about something else?',
                           '>{#p/papyrus}{#f/4}HMM...\nSOMETHING ELSE...',
                           '>{#p/papyrus}{#f/0}OH, I KNOW!\nTHE ARCHIVE WORLD!',
                           '>{#p/sans}{#f/2}* of course.\n* you and alphys spend a lot of time there.',
                           '>{#p/papyrus}{#f/9}AND FOR GOOD REASON!',
                           '>{#p/papyrus}{#f/0}OKAY, SO, LET ME EXPLAIN.',
                           '>{#p/papyrus}{#f/4}WITH NOTHING TO DO EXCEPT GUARD THE HUMAN SOULS...',
                           '>{#p/papyrus}{#f/0}I STARTED HAVING A LOT OF FREE TIME.',
                           '>{#p/papyrus}{#f/6}BUT WHAT WOULD I DO WITH IT!?',
                           '>{#p/papyrus}{#f/0}ONE DAY, IN A STORAGE CLOSET, I FOUND... A THING.',
                           '>{#p/papyrus}{#f/5}I ASKED ALPHYS WHAT THE THING WAS, AND...',
                           '>{#p/papyrus}{#f/6}BOY DID SHE HAVE A LOT TO SAY!!',
                           '>{#p/papyrus}{#f/0}APPARENTLY, IT WAS USED TO SIMULATE VIRTUAL WORLDS.',
                           '>{#p/papyrus}{#f/5}I ASKED HER IF WE COULD TRY IT, AND...',
                           '>{#p/papyrus}{#f/4}BEING JUST AS BORED AS I WAS, SHE SAID YES.',
                           ">{#p/papyrus}{#f/0}THE ARCHIVE DIDN'T HAVE A WORLD LOADED, THOUGH.",
                           '>{#p/papyrus}{#f/0}SO SHE DOWNLOADED A POPULAR SCI-FI ANIME...',
                           '>{#p/papyrus}{#f/0}AND LET THE SYSTEM "EXTRAPOLATE" THE WORLD WITHIN.',
                           '>{#p/papyrus}{#f/5}THEN SHE TOLD ME TO PUT ON THIS WEIRD HEADSET...',
                           '>{#p/papyrus}{#f/6}I WAS NERVOUS, BUT I DID IT IN THE NAME OF SCIENCE!!',
                           '>{#p/papyrus}{#f/4}THE NEXT THING I KNEW, I WAS TRANSPORTED...',
                           ">{#p/papyrus}{#f/9}TO A WORLD BEYOND ANYTHING I'D SEEN BEFORE!!!",
                           '>{#p/papyrus}{#f/5}I EXPLORED THIS NEW REALM FOR HOURS...',
                           '>{#p/papyrus}{#f/5}WANDERING FROM PLANET TO PLANET, MEETING PEOPLE...',
                           ">{#p/papyrus}{#f/0}OF COURSE, I KNOW THEY'RE NOT REAL.",
                           '>{#p/papyrus}{#f/6}BUT WHEN ONE OF THEM GOT HURT, I FELT BAD!',
                           '>{#p/papyrus}{#f/5}SO, I MADE IT MY MISSION TO SAVE EVERYONE I COULD.',
                           '>{#p/papyrus}{#f/0}EVENTUALLY, ALPHYS JOINED IN AS MY SIDEKICK!',
                           ">{#p/papyrus}{#f/0}WE'VE BEEN ADVENTURING EVER SINCE.",
                           ">{#p/sans}{#f/0}* she's in there right now, isn't she?",
                           '>{#p/sans}{#f/2}* maybe you should go check on her.',
                           '>{#p/papyrus}{#f/9}YEAH, I THINK I WILL!',
                           '>{#p/papyrus}{#f/0}SORRY, HUMAN.\nADVENTURE WAITS FOR NO SKELETON!',
                           '>{#p/sans}{#f/3}* ...',
                           ">{#p/sans}{#f/3}* i'm just glad he's got a distraction from what's going on.",
                           ">{#p/sans}{#f/0}* people aren't doing all that well right now.",
                           '>{#p/sans}{#f/0}* losing the royal guard, having all those power issues...',
                           '>{#p/sans}{#f/3}* a lot of folks have nobody to turn to.',
                           ">{#p/sans}{#f/0}* and, even if they do, it's hard to will up the courage...",
                           '>{#p/sans}{#f/3}* to admit to anyone how miserable they are.',
                           '>{#p/sans}{#f/3}* ...'
                        ]);
                        if (hkills > 19) {
                           addB([
                              ">{#p/sans}{#f/3}* it's no surprise people aren't fans of humanity these days.",
                              '>{#p/sans}{#f/0}* you may have spared my brother, but...',
                              '>{#p/sans}{#f/3}* you killed a lot of people, many of them important.'
                           ]);
                        } else {
                           addB([
                              ">{#p/sans}{#f/3}* i'm not saying you're a bad person.",
                              ">{#p/sans}{#f/0}* you spared my brother, and you didn't kill that many people.",
                              '>{#p/sans}{#f/3}* but the people you did kill were pretty important.'
                           ]);
                        }
                        addB([
                           '>{#p/sans}{#f/0}* ... as much as i disagreed with their ways...',
                           '>{#p/sans}{#f/0}* the royal guard offered citizens a sense of stability and security.',
                           ">{#p/sans}{#f/3}* but that's gone now.",
                           ">{#p/sans}{#f/3}* heck, even mettaton's not around anymore.",
                           '>{#p/sans}{#f/0}* no more tv shows, no more tacky little trinkets...',
                           '>{#p/sans}{#f/0}* without someone like him, the outpost loses a bit of its spark.'
                        ]);
                        if (hkills > 19) {
                           addB([
                              ">{#p/sans}{#f/3}* honestly, the truth is that you're just not a great person.",
                              '>{#p/sans}{#f/3}* plain and simple.',
                              '>{#p/sans}{#f/0}* ... anyway.\n* i should probably end the call here.',
                              '>{#p/sans}{#f/3}* sorry, buddo.',
                              '>{#p/sans}{#f/3}* ...'
                           ]);
                        } else {
                           addB([
                              ">{#p/sans}{#f/3}* honestly, i'm not sure what to say about you.",
                              ">{#p/sans}{#f/3}* i can't say you're a bad person, but i don't like you, either.",
                              '>{#p/sans}{#f/0}* ... anyway.\n* i should probably end the call here.',
                              '>{#p/sans}{#f/3}* sorry, buddo.',
                              '>{#p/sans}{#f/3}* have a safe journey, and all that.'
                           ]);
                        }
                        addB(['>{#s/equip}{#p/event}* Click...']);
                     }
                  } else {
                     if (!dtoriel) {
                        addB(['>{#p/sans}{#f/0}* which meant it was back to the drawing board.']);
                     } else {
                        addB([">{#p/sans}{#f/0}* i couldn't think of anyone off the top of my head, so..."]);
                     }
                     addB(['>{#p/sans}{#f/0}* ... we started asking around, looking for someone we could trust.']);
                     if (!ddoggo) {
                        addB([
                           '>{#p/sans}{#f/3}* pretty soon, we found out about doggo...',
                           '>{#p/sans}{#f/0}* a canine unit member who survived the fall of the royal guard.',
                           '>{#p/sans}{#f/2}* luckily, he was more than happy to take the job.',
                           '>{#p/alphys}{#f/27}* Huh?\n* Were you talking about Doggo...?'
                        ]);
                     } else if (!dlesserdog) {
                        addB([
                           '>{#p/sans}{#f/3}* pretty soon, we found out about canis minor...',
                           '>{#p/sans}{#f/0}* a canine unit member who survived the fall of the royal guard.',
                           '>{#p/sans}{#f/2}* luckily, it was more than happy to take the job.',
                           '>{#p/alphys}{#f/27}* Huh?\n* Were you talking about Canis Minor...?'
                        ]);
                     } else if (!ddogs) {
                        addB([
                           '>{#p/sans}{#f/3}* pretty soon, we found out about dogamy and dogaressa...',
                           '>{#p/sans}{#f/0}* two canine unit members who survived the fall of the royal guard.',
                           '>{#p/sans}{#f/2}* luckily, they were more than happy to take the job.',
                           '>{#p/alphys}{#f/27}* Huh?\n* Were you talking about Dogamy and Dogaressa?'
                        ]);
                     } else if (!dgreatdog) {
                        addB([
                           '>{#p/sans}{#f/3}* pretty soon, we found out about canis major...',
                           '>{#p/sans}{#f/0}* a canine unit member who survived the fall of the royal guard.',
                           '>{#p/sans}{#f/2}* luckily, it was more than happy to take the job.',
                           '>{#p/alphys}{#f/27}* Huh?\n* Were you talking about Canis Major?'
                        ]);
                     } else if (!ddoge) {
                        addB([
                           '>{#p/sans}{#f/3}* pretty soon, we found out about doge...',
                           '>{#p/sans}{#f/0}* an elite squad member who survived the fall of the royal guard.',
                           '>{#p/sans}{#f/3}* she gathered her belongings, and took the job in short order.',
                           '>{#p/alphys}{#f/27}* Huh?\n* Were you talking about Doge?'
                        ]);
                     } else if (!droyalguards) {
                        addB([
                           '>{#p/sans}{#f/3}* pretty soon, we found out about 01 and 02...',
                           '>{#p/sans}{#f/0}* two patrol officers who survived the fall of the royal guard.',
                           '>{#p/sans}{#f/3}* the pair cast off their armor, and took the job in stride.',
                           '>{#p/alphys}{#f/27}* Huh?\n* Were you talking about 01 and 02?'
                        ]);
                     } else if (!dmadjick) {
                        addB([
                           '>{#p/sans}{#f/3}* pretty soon, we found out about cozmo...',
                           '>{#p/sans}{#f/0}* an elite squad member who survived the fall of the royal guard.',
                           '>{#p/sans}{#f/3}* it seemed confused at first, but adjusted to the job quickly.',
                           '>{#p/alphys}{#f/27}* Huh?\n* Were you talking about Cozmo?'
                        ]);
                     } else {
                        addB([
                           '>{#p/sans}{#f/3}* pretty soon, we found out about terrestria...',
                           '>{#p/sans}{#f/0}* an elite squad member who survived the fall of the royal guard.',
                           '>{#p/sans}{#f/3}* of course, she accepted the job with reverence and dignity.',
                           '>{#p/alphys}{#f/27}* Huh?\n* Were you talking about Terrestria?'
                        ]);
                     }
                     addB([
                        ">{#p/sans}{#f/0}* oh, hey alphys.\n* i'm leaving a message for the human.",
                        '>{#p/alphys}{#f/17}* Oh, right.\n* You said you were going to do that.'
                     ]);
                     if (!ddoggo) {
                        addB([
                           ">{#p/alphys}{#f/6}* Yeah, Doggo can get nervous sometimes, but I've helped him before.",
                           '>{#p/alphys}{#f/8}* Just having me around seems to make him happy to do his job.'
                        ]);
                     } else if (!dlesserdog) {
                        addB([
                           '>{#p/alphys}{#f/6}* Yeah, that neck can be a problem sometimes, but it does a good job.',
                           '>{#p/alphys}{#f/8}* All it asks for in return is to be pet many, many times.'
                        ]);
                     } else if (!ddogs) {
                        addB([
                           ">{#p/alphys}{#f/6}* Yeah, those dogs do alright as long as they're together.",
                           '>{#p/alphys}{#f/8}* All they ask for in return is... well, lots of "alone time."'
                        ]);
                     } else if (!dgreatdog) {
                        addB([
                           '>{#p/alphys}{#f/6}* Yeah, not only does that dog do its job, but it does so eagerly.',
                           '>{#p/alphys}{#f/8}* All it asks for in return is a copious amount of headpats.'
                        ]);
                     } else if (!ddoge) {
                        addB([
                           ">{#p/alphys}{#f/6}* Yeah, Doge can be a little cold, but she knows what she's doing.",
                           '>{#p/alphys}{#f/8}* We usually reward her with a cold shower.\n* A bit odd, but okay.'
                        ]);
                     } else if (!droyalguards) {
                        addB([
                           '>{#p/alphys}{#f/6}* Yeah, 01 and 02 are cute, and... also happen to do a good job.',
                           '>{#p/alphys}{#f/8}* We usually reward them with ice cream.\n* They love that stuff.'
                        ]);
                     } else if (!dmadjick) {
                        addB([
                           ">{#p/alphys}{#f/6}* Yeah, it can get antsy at times, but it's done well overall.",
                           '>{#p/alphys}{#f/8}* We usually reward it with poems.\n* It likes those.'
                        ]);
                     } else {
                        addB([
                           ">{#p/alphys}{#f/6}* Yeah, she's... done a really good job.",
                           '>{#p/alphys}{#f/8}* We usually reward her with lullabies.\n* She finds them calming.'
                        ]);
                     }
                     addB([
                        ">{#p/sans}{#f/0}* yup, it's a pretty good arrangement.",
                        ">{#p/sans}{#f/3}* everyone gets what they want, and everyone's happy.",
                        '>{#p/sans}{#f/3}* ...',
                        '>{#p/sans}{#f/3}* well, i say everyone.',
                        '>{#p/alphys}{#f/15}* ... right...',
                        ">{#p/alphys}{#f/10}* I'm just... gonna let you two keep talking.",
                        '>{#p/sans}{#f/0}* actually, we were almost done.',
                        '>{#p/alphys}{#f/17}* ... oh.',
                        ">{#p/sans}{#f/3}* look, it hasn't been easy for a single person on the outpost.",
                        '>{#p/sans}{#f/0}* not for me, not for alphys...',
                        '>{#p/sans}{#f/3}* ... not for anyone.',
                        ">{#p/alphys}{#f/24}* Yep, because that's what happens when you kill a bunch of people.",
                        '>{#p/alphys}{#f/25}* Who would have thought.'
                     ]);
                     if (hkills > 19) {
                        addB([
                           '>{#p/sans}{#f/3}* except it was more than just "a bunch of people."',
                           '>{#p/sans}{#f/0}* it was... a lot of important people.',
                           '>{#p/sans}{#f/0}* people whose loss impacted everyone on the outpost.',
                           '>{#p/sans}{#f/3}* ... and, there was one person you killed...'
                        ]);
                     } else {
                        addB([
                           ">{#p/sans}{#f/3}* to be fair, it could've been a lot worse.",
                           '>{#p/sans}{#f/0}* i can understand defending yourself against the royal guard.',
                           '>{#p/sans}{#f/0}* and, even outside of that, you were mostly alright.',
                           '>{#p/sans}{#f/3}* ... but, there was one person you killed...'
                        ]);
                     }
                     addB(['>{#p/sans}{#f/0}* that i know for certain you had no reason to.']);
                     if (world.edgy || (world.population_area('s') <= 0 && !world.bullied_area('s'))) {
                        addB([
                           '>{#p/sans}{#f/0}* someone who only wanted you to be a better person.',
                           '>{#p/sans}{#f/3}* before you struck him down and declared your true nature.'
                        ]);
                     } else {
                        addB([
                           '>{#p/sans}{#f/0}* someone who would have never hurt you, no matter what.',
                           '>{#p/sans}{#f/3}* whereas you seemed almost eager to end his life.'
                        ]);
                     }
                     addB([
                        ">{#p/sans}{#f/0}* don't lie to yourself.\n* you know exactly who i'm referring to.",
                        '>{#p/alphys}{#f/20}* I certainly do.',
                        ">{#p/sans}{#f/3}* ...\n* if you're out there, somewhere...",
                        ">{#p/sans}{#f/0}* i hope you realize how bad you've made things here.",
                        '>{#p/sans}{#f/0}* no asgore, or undyne.\n* no royal guard.\n* no mettaton.',
                        '>{#p/sans}{#f/3}* ... no reason to keep this phone call going any longer.',
                        '>{#s/equip}{#p/event}* Click...'
                     ]);
                  }
               } else if (SAVE.data.n.state_wastelands_toriel !== 0 && SAVE.data.n.kills_wastelands < 16) {
                  k = 'dark_mew'; // NO-TRANSLATE
                  m = music.gameshow;
                  // dark neutral: mew mew variant [sans call]
                  addA([
                     '>{#s/phone}{#p/event}* Ring, ring...',
                     '>{#p/sans}{#f/0}* heya.',
                     '>{#p/sans}{#f/4}* is anyone there?',
                     ">{#p/sans}{#f/2}* no?\n* well, i'll just leave a message."
                  ]);
                  addB([
                     '>{#p/sans}{#f/0}* so, after you left, things kind of just got worse and worse.',
                     '>{#p/sans}{#f/3}* asgore was gone, undyne was gone...',
                     '>{#p/sans}{#f/0}* and due to a botched plan involving mettaton and the core...',
                     '>{#p/sans}{#f/3}* issues with the power occured, killing many in the process.',
                     '>{#p/sans}{#f/3}* even the humans in the archive got hit by a power surge.',
                     '>{#p/sans}{#f/0}* long story short, alphys and i put their souls in a safe place.',
                     '>{#p/sans}{#f/3}* but who would we hire to watch over them?',
                     '>{#p/sans}{#f/0}* well, the only person we called who was available...',
                     '>{#p/sans}{#f/0}* a former elite squad member...',
                     '>{#p/sans}{#f/3}* turned out to be a massive trojan horse.',
                     '>{#p/sans}{#f/0}* the moment they were left alone with the souls...',
                     '>{#p/sans}{#f/3}* they took them, and turned themselves from a dummy...',
                     '>{#p/sans}{#f/3}* into mad mew mew, from mew mew starfire.',
                     '>{#p/sans}{#f/0}* also known as the best movie in the mew mew franchise.',
                     ">{#p/sans}{#f/2}* which i definitely didn't say because i'm afraid for my life.",
                     '>{#p/sans}{#f/0}* anyway, as you can tell, things are just wonderful here!',
                     '>{#p/sans}{#f/0}* rather than doing any important work, we all just play games.',
                     ">{#p/sans}{#f/0}* ... which we definitely aren't forced into doing.",
                     '>{#p/sans}{#f/3}* i mean, hey.\n* at least the games are always fair.',
                     ">{#p/sans}{#f/0}* no, really.\n* that's not even a lie.",
                     ">{#p/sans}{#f/0}* 'cause, even when she acts like she WANTS them to be unfair...",
                     ">{#p/sans}{#f/3}* it's like...",
                     ">{#p/sans}{#f/3}* something within her won't let her go that far.",
                     '>{#p/sans}{#f/0}* something stops her.\n* she hesitates, or even backpedals at times.',
                     '>{#p/sans}{#f/0}* there was this one time where, she had an idea...',
                     ">{#p/sans}{#f/3}* for a game where we'd all fight to the death in rounds.",
                     '>{#p/sans}{#f/0}* but just as the match was about to start...',
                     '>{#p/sans}{#f/3}* she changed the rules to make it a fight to knockout instead.',
                     '>{#p/sans}{#f/3}* so...\n* if i had to guess...',
                     ">{#p/sans}{#f/2}* i'd say the human souls gave her more than she bargained for.",
                     '>{#p/sans}{#f/0}* maybe some part of them remains conscious...?',
                     ">{#p/alphys}{#f/17}* Uh, not to interrupt, but it's your move.",
                     '>{#p/sans}{#f/0}* huh?',
                     ">{#p/alphys}{#f/18}* The game's all in your hands now!",
                     '>{#p/sans}{#f/3}* ... i see.',
                     // guess i'm OUTER here, then
                     '>{#p/sans}{#f/0}* i guess i better get out there, then.',
                     '>{#p/alphys}{#f/6}* That would probably be a good idea.',
                     '>{#p/alphys}{#f/23}* For all our sakes.',
                     '>{#p/sans}{#f/0}* but before i go.',
                     '>{#p/sans}{#f/0}* if this call ever reaches you...',
                     '>{#p/sans}{#f/3}* i suggest not letting another human get near us.',
                     ">{#p/sans}{#f/3}* mew mew's planning something big.\n* i can feel it.",
                     '>{#p/sans}{#f/0}* if she succeeds, the whole galaxy might be in danger.',
                     ">{#p/sans}{#f/2}* ... just thought i'd give you a heads up.",
                     ">{#p/alphys}{#f/23}* Come on, let's go!",
                     ">{#p/sans}{#f/0}* i'm on my way.",
                     '>{#s/equip}{#p/event}* Click...'
                  ]);
               } else {
                  k = 'dark_charles'; // NO-TRANSLATE
                  m = music.letsmakeabombwhydontwe;
                  // dark neutral: charles variant [sans call]
                  addA([
                     '>{#s/phone}{#p/event}* Ring, ring...',
                     '>{#p/sans}{#f/0}* heya.',
                     '>{#p/sans}{#f/4}* is anyone there?',
                     ">{#p/sans}{#f/2}* no?\n* well, i'll just leave a message."
                  ]);
                  addB([
                     ">{#p/sans}{#f/0}* so, after you left, things weren't too great at first.",
                     '>{#p/sans}{#f/3}* asgore was gone, undyne was gone...',
                     '>{#p/sans}{#f/0}* and due to a botched plan involving mettaton and the core...',
                     '>{#p/sans}{#f/3}* issues with the power occured, killing many in the process.',
                     '>{#p/sans}{#f/3}* even the humans in the archive got hit by a power surge.',
                     '>{#p/sans}{#f/0}* long story short, alphys and i put their souls in a safe place.',
                     '>{#p/sans}{#f/4}* but who would we hire to watch over them?',
                     '>{#p/sans}{#f/0}* well, of all the people we called, only charles took the job.',
                     '>{#p/sans}{#f/2}* a little mouse with a spotless service record at the core.',
                     '>{#p/sans}{#f/0}* now, charles had worked at the core for so long...',
                     '>{#p/sans}{#f/0}* that it grew accustomed with its routine.',
                     '>{#p/sans}{#f/0}* take a power cell out, put a new one back in...',
                     '>{#p/sans}{#f/3}* except now, instead of power cells, it was human souls.',
                     '>{#p/sans}{#f/0}* ... so, when it accidentally absorbed those souls...',
                     '>{#p/sans}{#f/3}* it was only because charles was just doing what it knew best.',
                     '>{#p/sans}{#f/3}* i know.\n* it sounds bad.',
                     '>{#p/sans}{#f/0}* without the human souls, how would we escape?',
                     '>{#p/sans}{#f/0}* but when that little mouse realized its new godlike power...',
                     ">{#p/sans}{#f/2}* it used that power to make everyone's dreams come true.",
                     '>{#p/papyrus}{#f/0}HELLO, HUMAN!\nIT IS I, THE GREAT PAPYRUS!',
                     '>{#p/papyrus}{#f/6}WHAT!?!?\nYOU THOUGHT I WAS DEAD!?',
                     ">{#p/papyrus}{#f/7}... UGH, THAT'S RIDICULOUS!\nI COULD NEVER DIE!",
                     '>{#p/papyrus}{#f/4}FOR I HAVE BEEN RE-INCARNATED...',
                     '>{#p/papyrus}{#f/9}BY OUR ONE TRUE OVERLORD, KING CHARLES!!!',
                     ">{#p/sans}{#f/3}* ... so, as you can see, there's no reason for anyone to be sad.",
                     '>{#p/sans}{#f/2}* who cares about leaving the outpost, am i right?',
                     ">{#p/papyrus}{#f/0}YEAH, WE DON'T NEED TO SEE THE STARS!",
                     ">{#p/papyrus}{#f/9}WE'RE LIVING OUT OUR BEST LIVES RIGHT HERE!",
                     '>{#p/sans}{#f/2}* my thoughts exactly.',
                     '>{#p/sans}{#f/0}* ... anyway, thanks for being the reason all of this happened.',
                     '>{#p/sans}{#f/0}* if you ever get bored of flying around out there...',
                     ">{#p/sans}{#f/3}* just know you're always welcome to return.",
                     '>{#p/papyrus}{#f/0}YEAH, THEN YOU CAN LIVE OUT YOUR BEST LIFE, TOO!',
                     '>{#p/sans}{#f/2}* heh.\n* we can only hope.',
                     '>{#s/equip}{#p/event}* Click...'
                  ]);
               }
            } else {
               // dark neutral: generic variant [sans call]
               k = 'dark_generic'; // NO-TRANSLATE
               addA([
                  '>{#s/phone}{#p/event}* Ring, ring...',
                  '>{#p/sans}{#f/0}* heya.',
                  ">{#p/sans}{#f/3}* it's been a while, huh?"
               ]);
               addB([
                  '>{#p/sans}{#f/0}* after you left, alphys... kind of went into a panic.',
                  '>{#p/sans}{#f/0}* not only were asgore and undyne gone...',
                  '>{#p/sans}{#f/0}* but due to a botched plan involving mettaton and the core...',
                  ">{#p/sans}{#f/3}* the royal guard had to rush to fix the outpost's power systems.",
                  '>{#p/sans}{#f/0}* alphys called me, and asked me to come up and meet her.',
                  ">{#p/sans}{#f/3}* when i got there, i could tell she wasn't doing well.",
                  '>{#p/sans}{#f/0}* still, i knew from back when we were lab partners...',
                  '>{#p/sans}{#f/2}* that she had what it took to overcome anything.',
                  '>{#p/sans}{#f/0}* so i sat with her, and gave her a chance to process it all...',
                  ">{#p/sans}{#f/3}* and by the end, she\n  took responsibility and accepted asgore's crown.",
                  '>{#p/sans}{#f/0}* ... after that, things seemed to settle down.',
                  '>{#p/human}{#v/4}{@fill=#d535d9}* Sans, do we get to go to the swimming pool?',
                  ">{#p/human}{#v/5}{@fill=#00c000}* It's okay if you can't take us...",
                  ">{#p/sans}{#f/0}* woah there, what's got you kids all worked up?",
                  ">{#p/sans}{#f/3}* sure, i can take ya.\n* after i'm all done on the phone.",
                  '>{#p/human}{#v/4}{@fill=#d535d9}* Deal.',
                  '>{#p/human}{#v/5}{@fill=#00c000}* Sounds good!',
                  '>{#p/alphys}{#f/10}* Ahah, s-sorry about that, I...',
                  '>{#p/alphys}{#f/20}* I... had to attend a meeting with the Royal Defense Agency.',
                  ">{#p/alphys}{#f/6}* Come on guys, let's let Sans finish his phone call.",
                  '>{#p/human}{#v/4}{@fill=#d535d9}* Alright.',
                  ">{#p/human}{#v/5}{@fill=#00c000}* We're sorry we got in your way...",
                  ">{#p/sans}{#f/2}* heh.\n* don't sweat it, kid.\n* i won't be THAT long.",
                  '>{#p/sans}{#f/0}* ...',
                  '>{#p/sans}{#f/0}* after alphys became queen, she started making some changes.',
                  '>{#p/sans}{#f/0}* for one, the royal guard became the royal defense agency.',
                  '>{#p/sans}{#f/0}* a technologically- oriented version of the royal guard.',
                  ">{#p/sans}{#f/3}* they've got high-tech visors, long-range tracking...",
                  '>{#p/sans}{#f/2}* perfect for finding and escorting whatever kid crash-lands here next.'
               ]);
               if (!dpapyrus) {
                  addB([
                     ">{#p/sans}{#f/0}* heck, even papyrus landed a position with 'em.",
                     ">{#p/sans}{#f/3}* he's the leader of a squadron tasked with handling the more..."
                  ]);
               } else {
                  addB([
                     '>{#p/sans}{#f/0}* and the original royal guards from before the rebrand?',
                     '>{#p/sans}{#f/3}* they put together a squadron tasked with handling the more...'
                  ]);
               }
               addB([
                  '>{#p/sans}{#f/3}* ... rowdy types.',
                  '>{#p/sans}{#f/0}* we learned a lot about those since you were here.',
                  ">{#p/sans}{#f/0}* the defense agency's got people analyzing your data every day.",
                  '>{#p/sans}{#f/3}* looking for patterns, finding weak points...',
                  ">{#p/sans}{#f/2}* with any luck, we won't have to use them.",
                  '>{#p/sans}{#f/0}* but... you never know.'
               ]);
               if (!dpapyrus) {
                  addB([
                     '>{#p/papyrus}{#f/0}HELLO, SANS!\nBEEN UP TO ANYTHING LATELY?',
                     '>{#p/sans}{#f/3}* eh, not really.',
                     '>{#p/sans}{#f/0}* you on break right now?',
                     '>{#p/papyrus}{#f/9}INDEED I AM!',
                     ">{#p/papyrus}{#f/5}I DON'T TAKE BREAKS OFTEN, SO...",
                     '>{#p/papyrus}{#f/0}I MIGHT AS WELL USE THE ONES I DO WISELY.',
                     '>{#p/sans}{#f/3}* hmm... lemme guess.',
                     '>{#p/sans}{#f/2}* was alphys the one who made you take it?',
                     '>{#p/papyrus}{#f/4}...',
                     ">{#p/papyrus}{#f/4}I DIDN'T HAVE A CHOICE IN THE MATTER.",
                     '>{#p/papyrus}{#f/0}ANYWAY, THAT SHOULD BE ENOUGH BREAK TIME.',
                     '>{#p/papyrus}{#f/9}BACK TO WORK NOW!',
                     '>{#p/sans}{#f/0}* huh?\n* come on bro, you were barely here.',
                     '>{#p/papyrus}{#f/6}NO TIME TO LOSE!!\nA HUMAN COULD ARRIVE ANY SECOND!',
                     ">{#p/sans}{#f/3}* ... well, you're right.",
                     ">{#p/sans}{#f/0}* it'd just be nice if you weren't so busy anymore."
                  ]);
               }
               addB(['>{#p/sans}{#f/0}* ...']);
               if (!dtoriel) {
                  if (!dpapyrus) {
                     addB([
                        '>{#p/sans}{#f/3}* at least alphys seems to have a lot of free time.',
                        '>{#p/sans}{#f/0}* since, when the former queen returned...',
                        '>{#p/sans}{#f/4}* she offered to help look after the humans.'
                     ]);
                  } else {
                     addB([
                        '>{#p/sans}{#f/3}* at least the humans who came before you are pretty cool.',
                        '>{#p/sans}{#f/0}* heck, when the former queen returned...',
                        '>{#p/sans}{#f/4}* she even offered to help look after them.'
                     ]);
                  }
                  addB([
                     '>{#p/sans}{#f/3}* she still thinks asgore was a bad person, but...',
                     ">{#p/sans}{#f/0}* maybe one day, she'll forgive him.",
                     ">{#p/sans}{#f/0}* it's hard to tell.",
                     ">{#p/sans}{#f/3}* ... though, i know one person she'll never forgive."
                  ]);
               } else {
                  if (!dpapyrus) {
                     addB([">{#p/sans}{#f/3}* at least he's happy.\n* he really enjoys what he does."]);
                     if (hkills > 19) {
                        addB(['>{#p/sans}{#f/0}* which is more than i can say about a lot of people these days.']);
                     } else {
                        addB(['>{#p/sans}{#f/0}* which is good, because not everyone can say the same.']);
                     }
                  } else {
                     addB([">{#p/sans}{#f/3}* life's been kind of lonely lately, you know?"]);
                     if (hkills > 19) {
                        addB(['>{#p/sans}{#f/0}* not just for me, but for a lot of people these days.']);
                     } else {
                        addB([
                           '>{#p/sans}{#f/0}* not everyone has the luxury of carrying on like nothing happened.'
                        ]);
                     }
                  }
               }
               addB([
                  ">{#p/alphys}{#f/20}* S-sans, I'm sorry.\n* But you have to take the kids to the pool.",
                  ">{#p/alphys}{#f/3}* They're driving me crazy back here!",
                  '>{#p/sans}{#f/3}* ... welp.',
                  ">{#p/sans}{#f/0}* i guess i'll let alphys finish this one off for me.",
                  '>{#p/alphys}{#f/27}* Finish what off?',
                  '>{#p/alphys}{#f/21}* ...',
                  ">{#p/alphys}{#f/21}* So it's you.",
                  '>{#p/alphys}{#f/24}* Well.\n* He said he was planning on calling you.',
                  ">{#p/alphys}{#f/25}* Personally, I don't have much to say."
               ]);
               if (hkills > 19) {
                  addB([">{#p/alphys}{#f/25}* You're a killer, a coward, and better off gone."]);
                  if (!dpapyrus) {
                     addB(['>{#p/alphys}{#f/24}* And no matter what good you do now...']);
                  } else {
                     addB(['>{#p/alphys}{#f/24}* And worst of all...']);
                  }
               } else {
                  addB([">{#p/alphys}{#f/25}* You might not have killed many people, but you're still awful."]);
                  if (!dpapyrus) {
                     addB(['>{#p/alphys}{#f/24}* No matter what good you do now, though...']);
                  } else {
                     addB(['>{#p/alphys}{#f/24}* Worst of all, though...']);
                  }
               }
               if (!dpapyrus) {
                  addB([
                     ">{#p/alphys}{#f/25}* It'll never make up for the damage you've already done.",
                     '>{#p/alphys}{#f/24}* ...',
                     '>{#p/alphys}{#f/24}* On behalf of everyone living on the outpost...'
                  ]);
               } else {
                  addB([
                     '>{#p/alphys}{#f/25}* You killed someone important to my closest friend.',
                     '>{#p/alphys}{#f/24}* ...',
                     '>{#p/alphys}{#f/24}* On his behalf...'
                  ]);
               }
               addB([
                  '>{#p/alphys}{#f/16}* I hope you fall into a black hole and die.',
                  '>{#s/equip}{#p/event}* Click...'
               ]);
            }
         } else if (SAVE.data.b.ubershortcut || world.bad_lizard > 1) {
            k = 'dark_aborted'; // NO-TRANSLATE
            // dark neutral: aborted dark variant [ghost family call]
            if (dmettaton) {
               addA([
                  '>{#s/phone}{#p/event}* Ring, ring...',
                  '>{#p/napstablook}* hey',
                  '>{#p/napstablook}* is anyone there?',
                  ">{#p/napstablook}* i think... there's something i need to tell you.",
                  ">{#p/napstablook}* if it's not too much trouble."
               ]);
               addB([
                  '>{#p/napstablook}* so, even before you left the outpost...',
                  '>{#p/napstablook}* things were already going downhill for me',
                  '>{#p/napstablook}* people were dead... others were hurt, or scared...',
                  '>{#p/napstablook}* and then...... when mettaton died during his grand finale, i......',
                  ">{#p/napstablook}* .........\n* i didn't know what to do",
                  '>{#p/napstablook}* it felt like... my whole world came crashing down......',
                  '>{#p/napstablook}* and all i could do......... was watch it happen............',
                  '>{#p/napstablook}* ...............',
                  '>{#p/napstablook}* as it turns out, though, a lot of people felt the same way.',
                  '>{#p/napstablook}* and all of us who did formed a support group for fans of mettaton.',
                  '>{#p/napstablook}* remember his last words?',
                  '>{#p/napstablook}* "you\'ll realize not everything\'s going to go your way!"',
                  '>{#p/napstablook}* ... of course, he was wrong.',
                  '>{#p/napstablook}* you escaped, and got away with what you did.',
                  ">{#p/napstablook}* even king asgore couldn't stop you.",
                  ">{#p/napstablook}* but those nine words... became our group's mantra.",
                  '>{#p/napstablook}* we became united in our dislike for you, and what you got away with.',
                  ">{#p/napstablook}* you're not just a human who did some bad things.",
                  ">{#p/napstablook}* you're an interloper who spat in the face of our way of life."
               ]);
               if (!dundyne) {
                  addB([
                     '>{#p/napstablook}* the new queen, undyne, would agree with us.',
                     '>{#p/napstablook}* ... she took over after asgore disappeared.',
                     ">{#p/napstablook}* it's not like she was the biggest fan of mettaton, but...",
                     '>{#p/napstablook}* she definitely got behind what he said in the end.'
                  ]);
                  if (!dtoriel) {
                     addB([
                        '>{#p/napstablook}* heh...... when toriel returned and begged undyne to defend you......',
                        '>{#p/napstablook}* she got laughed all the way back to the outlands.',
                        '>{#p/napstablook}* ... people are pretty much united in their dislike for you now.'
                     ]);
                  } else {
                     addB(['>{#p/napstablook}* just like everyone else does nowadays.']);
                  }
               } else if (!dtoriel) {
                  addB([
                     '>{#p/napstablook}* the new queen, toriel, might disagree with us.',
                     '>{#p/napstablook}* ... she took over after asgore disappeared.',
                     ">{#p/napstablook}* it's not like she was against what mettaton said, but...",
                     '>{#p/napstablook}* she seemed to have a stubborn soft spot for humanity.',
                     ">{#p/napstablook}* .........\n* honestly, it's fine.",
                     ">{#p/napstablook}* it hasn't stopped people from being united in their dislike for you."
                  ]);
               } else {
                  addB([
                     '>{#p/napstablook}* eventually, our group noticed that asgore had yet to be replaced',
                     '>{#p/napstablook}* so...... one of our own members suggested we take the throne ourselves.',
                     '>{#p/napstablook}* as the "face" of the group, i was appointed as the outpost\'s official leader...',
                     '>{#p/napstablook}* but, in reality... we all kind of make decisions together.',
                     ">{#p/napstablook}* it's pretty cool, actually.",
                     '>{#p/napstablook}* a little weird having all these people look up to me, but......',
                     '>{#p/napstablook}* at least none of us have to do this thing alone.'
                  ]);
               }
               addB([
                  '>{#p/napstablook}* anyway, i just wanted you to know......',
                  ">{#p/napstablook}* i'm fine now.",
                  '>{#p/napstablook}* better than fine, in fact.',
                  ">{#p/napstablook}* because, what you did... didn't hurt us.",
                  '>{#p/napstablook}* it only made us stronger.',
                  '>{#p/napstablook}* and one day... when we all escape from the outpost......',
                  '>{#p/napstablook}* .........',
                  ">{#p/napstablook}* our group vows to hunt you down and make sure you pay for what you've done.",
                  '>{#p/napstablook}* heh......',
                  '>{#p/napstablook}* ......\n* i hope you die a painful death',
                  '>{#s/equip}{#p/event}* Click...'
               ]);
            } else {
               addA([
                  '>{#s/phone}{#p/event}* Ring, ring...',
                  '>{#p/mettaton}* EXCUSE ME, HUMAN...',
                  ">{#p/mettaton}* THERE'S A FEW THINGS I'D LIKE TO SAY TO YOU.",
                  '>{#p/mettaton}* ARE YOU THERE?',
                  ">{#p/mettaton}* ... I GUESS IT'LL BE A MESSAGE, THEN."
               ]);
               if (SAVE.data.b.ubershortcut) {
                  addB([
                     ">{#p/mettaton}* TO START, I'LL SAY THAT I -AM- HAPPY YOU FOLLOWED ALPHYS'S INSTRUCTIONS.",
                     '>{#p/mettaton}* AVOIDING UNDYNE, AND A LARGE PART OF AERIALIS...?',
                     '>{#p/mettaton}* IT SAVED BOTH HER AND MYSELF A LOT OF POTENTIAL HEADACHE.'
                  ]);
               } else if (royals < 4 && hkills > 19) {
                  addB([
                     ">{#p/mettaton}* TO BE HONEST, I'M NOT SURE WHERE TO BEGIN.",
                     '>{#p/mettaton}* YOU KILLED CITIZENS, YOU KILLED ROYAL GUARDS...',
                     '>{#p/mettaton}* YOU WERE INDISCRIMINATE IN YOUR KILLING.',
                     '>{#p/mettaton}* I -DO- APPRECIATE THAT YOUR BEHAVIOR IMPROVED LATER ON...'
                  ]);
               } else if (royals < 4) {
                  addB([
                     ">{#p/mettaton}* LET'S GET ONE THING STRAIGHT.",
                     '>{#p/mettaton}* YOU OUTRIGHT -SLAUGHTERED- THE ROYAL GUARD.',
                     '>{#p/mettaton}* YOU WERE SOMEWHAT MORE MERCIFUL TOWARDS REGULAR CITIZENS...',
                     '>{#p/mettaton}* AND YOUR BEHAVIOR DID IMPROVE AFTER MY WARNING...'
                  ]);
               } else if (hkills > 19) {
                  addB([
                     ">{#p/mettaton}* LET'S GET ONE THING STRAIGHT.",
                     '>{#p/mettaton}* WHEN IT CAME TO CITIZENS, YOU SHOWED -NO- REMORSE.',
                     '>{#p/mettaton}* YOU WERE SOMEWHAT MORE MERCIFUL TOWARDS THE ROYAL GUARD...',
                     '>{#p/mettaton}* AND YOUR BEHAVIOR DID IMPROVE AFTER MY WARNING...'
                  ]);
               } else {
                  addB([
                     ">{#p/mettaton}* TO START, I'LL ADMIT YOU WEREN'T AS BAD AS I FIRST THOUGHT.",
                     '>{#p/mettaton}* YOU SPARED MANY OF THE ROYAL GUARDS, AND A FAIR FEW CITIZENS, TOO.',
                     '>{#p/mettaton}* NOT TO MENTION HOW YOU IMPROVED YOUR BEHAVIOR AFTER MY WARNING.'
                  ]);
               }
               addB([">{#p/mettaton}* BUT DON'T THINK FOR A SECOND THAT IT EXCUSES ANYTHING OTHERWISE."]);
               if (SAVE.data.b.ubershortcut) {
                  addB([
                     '>{#p/mettaton}* SINCE ASGORE DISAPPEARED, ALPHYS HAS HAD HER HANDS FULL AS THE QUEEN.',
                     '>{#p/mettaton}* I WAS SURPRISED TO SEE HER TAKE ON THE ROLE, BUT...',
                     '>{#p/mettaton}* I GUESS HER SUCCESS IN ESCORTING YOU BOOSTED HER CONFIDENCE.',
                     ">{#p/mettaton}* STILL, IT HASN'T BEEN EASY.",
                     ">{#p/mettaton}* EVER SINCE SHE GUIDED YOU TO SAFETY, UNDYNE'S BEEN QUITE UPSET AT HER.",
                     '>{#p/mettaton}* THE INCUMBENT GUARD CAPTAIN QUESTIONS HER EVERY DECISION, GIVING HER DOUBTS.',
                     '>{#p/mettaton}* AND WHILE SHE STILL BELIEVES YOU TO BE REDEEMABLE...',
                     '>{#p/mettaton}* THE PEOPLE WANT HUMANS DEAD.'
                  ]);
                  if (!dtoriel) {
                     addB([
                        ">{#p/mettaton}* EVEN THE FORMER QUEEN TORIEL COULDN'T CHANGE THEIR MINDS UPON HER RETURN.",
                        '>{#p/mettaton}* BY THEN, ALPHYS HAD LOST HER APPETITE FOR POLITICS.'
                     ]);
                  }
               } else if (!dundyne) {
                  addB([
                     '>{#p/mettaton}* SINCE ASGORE DISAPPEARED, UNDYNE HAS HAD HER HANDS FULL AS THE QUEEN.',
                     '>{#p/mettaton}* AND ALPHYS?\n* WELL, SHE -WAS- SUPPOSED TO BE THE NEXT IN LINE...',
                     ">{#p/mettaton}* BUT I DON'T BLAME HER FOR RUNNING OFF.",
                     ">{#p/mettaton}* THE PEOPLE WANT HUMANS DEAD.\n* AND, FRANKLY, THEY'RE MORE THAN JUSTIFIED."
                  ]);
                  if (!dtoriel) {
                     addB([
                        ">{#p/mettaton}* EVEN THE FORMER QUEEN TORIEL COULDN'T CHANGE THEIR MINDS UPON HER RETURN.",
                        ">{#p/mettaton}* LET ALONE UNDYNE'S."
                     ]);
                  }
               } else if (!dtoriel) {
                  addB([
                     '>{#p/mettaton}* SINCE ASGORE DISAPPEARED, TORIEL HAS HAD HER HANDS FULL AS THE QUEEN.',
                     '>{#p/mettaton}* AND ALPHYS?\n* WELL, SHE -WAS- SUPPOSED TO BE THE NEXT IN LINE...',
                     ">{#p/mettaton}* BUT I DON'T BLAME HER FOR RUNNING OFF.",
                     ">{#p/mettaton}* THE PEOPLE WANT HUMANS DEAD.\n* AND, FRANKLY, THEY'RE MORE THAN JUSTIFIED.",
                     ">{#p/mettaton}* EVEN TORIEL HERSELF COULDN'T CONVINCE THEM TO CALM DOWN.\n* BELIEVE ME, SHE TRIED."
                  ]);
               } else {
                  addB([
                     '>{#p/mettaton}* SINCE ASGORE DISAPPEARED, THINGS HAVE GOTTEN WORSE BY THE DAY.',
                     '>{#p/mettaton}* ALPHYS WAS SUPPOSED TO TAKE OVER FOR HIM, BUT SHE RAN OFF.',
                     '>{#p/mettaton}* DO I BLAME HER?\n* NOT AT ALL.',
                     '>{#p/mettaton}* BUT IT MEANT I HAD NO CHOICE EXCEPT TO TAKE OVER MYSELF.',
                     '>{#p/mettaton}* I HAVE MIXED FEELINGS ABOUT HUMANS, AFTER DISCOVERING THE ARCHIVE...',
                     '>{#p/mettaton}* BUT THE PEOPLE ARE COMPLETELY JUSTIFIED IN FEELING THE WAY THEY DO ABOUT YOU.'
                  ]);
               }
               addB([
                  ">{#p/mettaton}* YOUR ACTIONS PROVED THAT, NO MATTER HOW MUCH I'D LIKE TO BELIEVE IN HUMANITY...",
                  ">{#p/mettaton}* THERE WILL ALWAYS BE THOSE OF YOU OUT THERE WHO DON'T DESERVE THAT BELIEF.",
                  ">{#p/mettaton}* AND THAT'S THE BIGGEST SHAME OF THEM ALL.",
                  ">{#p/mettaton}* HUMANS AND MONSTERS SHOULDN'T HAVE TO BE AT ODDS.",
                  '>{#p/mettaton}* IN A PERFECT UNIVERSE, OUR TWO SPECIES CO-EXIST IN PEACE.',
                  ">{#p/mettaton}* BUT IT'S NOT A PERFECT UNIVERSE, IS IT?",
                  '>{#p/mettaton}* AFTER ALL, PEOPLE LIKE YOU STILL EXIST WITHIN IT.',
                  '>{#p/napstablook}* uh...\n* mettaton?',
                  '>{#p/napstablook}* are you okay?',
                  '>{#p/mettaton}* ...\n* WHAT DOES IT SOUND LIKE.',
                  '>{#p/napstablook}* .........',
                  '>{#p/napstablook}* mettaton, who are you talking to?',
                  ">{#p/mettaton}* BLOOKY, IT'S NOT IMPORTANT.",
                  '>{#p/napstablook}* let me see......',
                  '>{#p/napstablook}* ...\n* oh...',
                  '>{#p/napstablook}* hey, uh... you made my cousin pretty upset',
                  ">{#p/napstablook}* ever since i found out he was my cousin, i've been looking after him..."
               ]);
               if (SAVE.data.b.ubershortcut || !dundyne || !dtoriel) {
                  addB(['>{#p/napstablook}* no matter what good you may have done, he......']);
               } else {
                  addB(['>{#p/napstablook}* regardless of the other humans being innocent, he......']);
               }
               addB([
                  ">{#p/napstablook}* he's been getting angrier at you than ever lately",
                  ">{#p/napstablook}* i'm...... really worried",
                  ">{#p/mettaton}* ARE YOU SAYING I SHOULDN'T BE ANGRY?\n* THAT I SHOULD BE CALM?",
                  '>{#p/mettaton}* THE PEOPLE THAT HUMAN KILLED ARE NEVER COMING BACK.',
                  '>{#p/mettaton}* THEIR FAMILIES WILL NEVER SEE THEM AGAIN.',
                  ">{#p/mettaton}* I'LL BE DAMNED IF I'M GOING TO REMAIN CALM IN THE FACE OF WHAT THEY DID!",
                  '>{#p/napstablook}* well... i just wanted you to know...',
                  '>{#p/napstablook}* ......\n* i hope you die a painful death',
                  '>{#p/mettaton}* B... BLOOKY, COME ON...',
                  ">{#p/mettaton}* IT'S NOT LIKE YOU TO SAY THINGS LIKE THAT.",
                  ">{#p/mettaton}* YOU'RE JUST SAYING THAT TO MAKE ME FEEL BETTER, RIGHT?",
                  ">{#p/napstablook}* ......\n* ...... i don't know",
                  ">{#p/mettaton}* I APPRECIATE WHAT YOU'RE DOING, BUT I THINK IT'D BE BEST IF YOU STAYED OUT OF THIS.",
                  '>{#p/napstablook}* you know...',
                  '>{#p/napstablook}* if you did die like that......',
                  ">{#p/napstablook}* i don't know if i would feel bad for you or not",
                  ">{#p/napstablook}* so...... that's all",
                  '>{#p/mettaton}* ...\n* ... WOW.',
                  ">{#p/mettaton}* HONESTLY, I THINK I'LL JUST LEAVE IT AT THAT.",
                  '>{#p/mettaton}* I WAS GOING TO TELL YOU MORE ABOUT MY FAMILY, BUT... THAT ABOUT SUMS IT UP.',
                  '>{#p/mettaton}* BESIDES, IT\'S A FITTING END TO THIS "LEGACY" YOU\'VE LEFT BEHIND.',
                  '>{#p/mettaton}* ...',
                  '>{#p/mettaton}* WHAT A SHAME...',
                  '>{#s/equip}{#p/event}* Click...'
               ]);
            }
         } else if (SAVE.data.b.ultrashortcut) {
            k = 'light_ultra'; // NO-TRANSLATE
            m = music.sansdate;
            // light neutral: ultra shortcut variant [sans call]
            addA([
               '>{#s/phone}{#p/event}* Ring, ring...',
               '>{#p/sans}{#f/0}* heya.',
               '>{#p/sans}{#f/4}* is anyone there?',
               ">{#p/sans}{#f/2}* no?\n* well, i'll just leave a message."
            ]);
            addB([
               '>{#p/sans}{#f/0}* sooo... where to begin?',
               '>{#p/sans}{#f/3}* ...\n* after you left, things got... interesting.',
               ">{#p/sans}{#f/0}* first off, asgore's disappearance hurt the outpost's morale."
            ]);
            if (dtoriel) {
               addB([">{#p/sans}{#f/3}* not to mention the reports of the former queen's death."]);
            }
            addB([
               '>{#p/sans}{#f/0}* but alphys, who was next in line for leadership...',
               '>{#p/sans}{#f/2}* seems to have gained some confidence.',
               '>{#p/sans}{#f/0}* it was touch and go at first, but she accepted her role as the queen.'
            ]);
            if (30 <= SAVE.data.n.bully) {
               addB([
                  ">{#p/sans}{#f/3}* so... despite people's newfound fear of getting beat up...",
                  '>{#p/sans}{#f/0}* that helped folks relax.'
               ]);
            } else {
               addB(['>{#p/sans}{#f/0}* so that helped people move on.']);
            }
            addB([
               ">{#p/sans}{#f/0}* i've been helping to advise her ever since.",
               ">{#p/sans}{#f/3}* she debated on if she should make the humans' existence public..."
            ]);
            if (royals < 6) {
               addB([
                  '>{#p/sans}{#f/0}* ultimately, we decided not to do it.',
                  '>{#p/sans}{#f/0}* it would have been nice, but with the deaths of those dogs...',
                  ">{#p/sans}{#f/3}* ... well, it wouldn't be wise.",
                  ">{#p/sans}{#f/3}* opinions on humanity aren't all that great right now."
               ]);
            } else if (SAVE.data.n.exp > 0) {
               addB([
                  '>{#p/sans}{#f/0}* for now, we decided not to do it.',
                  ">{#p/sans}{#f/0}* at some point, though, we'd like to.",
                  '>{#p/sans}{#f/3}* ... when the people are ready.',
                  '>{#p/sans}{#f/0}* opinions on humanity are still kind of mixed these days.'
               ]);
            } else {
               addB([
                  '>{#p/sans}{#f/0}* at first, we decided not to do it.',
                  '>{#p/sans}{#f/0}* but, eventually, we figured the people would be ready.',
                  '>{#p/sans}{#f/3}* ... luckily, they took it well.',
                  '>{#p/sans}{#f/2}* opinions on humanity turn more positive by the day.'
               ]);
            }
            addB([
               '>{#p/sans}{#f/0}* ... anyway.\n* after that decision was made...',
               '>{#p/sans}{#f/0}* alphys and i set our sights on royal guard reforms.',
               ">{#p/sans}{#f/3}* yeah... we weren't exactly fans of how it was run before.",
               '>{#p/sans}{#f/0}* suffice it to say, we made some changes.',
               '>{#p/sans}{#f/2}* you can probably guess what the first one was.',
               ">{#p/papyrus}{#f/9}NYEH HEH HEH!\nTHAT'S RIGHT!",
               ">{#p/sans}{#f/0}* oh, hey papyrus.\n* so how'd your shift go?",
               ">{#p/papyrus}{#f/0}I'D SAY IT WENT EXCELLENTLY!"
            ]);
            if (royals < 6) {
               addB([
                  '>{#p/papyrus}{#f/5}ADMITTEDLY, I WAS LOOKING FORWARD TO WORKING WITH DOGS.',
                  '>{#p/papyrus}{#f/6}BUT... I GUESS EVEN DOGS CAN TAKE VACATIONS.',
                  ">{#p/sans}{#f/3}* hey, it's okay.",
                  ">{#p/sans}{#f/2}* you're still doing as good a job as ever, aren't you?"
               ]);
            } else if (royals < 8) {
               addB([
                  '>{#p/papyrus}{#f/5}ADMITTEDLY, THE ATMOSPHERE THERE FEELS... WEIRD.',
                  ">{#p/papyrus}{#f/6}LIKE THERE'S SOMETHING MISSING.",
                  ">{#p/sans}{#f/3}* hey, it's okay.",
                  ">{#p/sans}{#f/2}* you're still doing as good a job as ever, aren't you?"
               ]);
            } else {
               addB([
                  ">{#p/papyrus}{#f/5}UNDYNE'S STILL GETTING USED TO ME BEING HERE...",
                  '>{#p/papyrus}{#f/0}BUT, APART FROM THAT, THINGS ARE OKAY.',
                  '>{#p/sans}{#f/2}* glad to hear it.'
               ]);
            }
            addB([
               ">{#p/papyrus}{#f/4}I MEAN, IT'S ONLY NATURAL I'D TRY MY BEST.",
               '>{#p/papyrus}{#f/9}AFTER ALL, I DID CAPTURE A HUMAN TO EARN MY POSITION!',
               ">{#p/papyrus}{#f/0}I'M NOT GOING TO GET LAZY AND LOSE IT AFTER THAT.",
               '>{#p/sans}{#f/0}* of course not.\n* keeping a job like that takes dedication.',
               ">{#p/papyrus}{#f/4}... IT'S NO WONDER YOU LOST YOURS.",
               '>{#p/papyrus}{#f/5}THOUGH, YOU ARE DOING WELL IN YOUR NEW JOB, SO...',
               ">{#p/papyrus}{#f/0}I'LL LET IT SLIDE.",
               '>{#p/sans}{#f/0}* thanks.\n* advising the queen is no easy task.',
               '>{#p/sans}{#f/3}* she can be a little neurotic at times.',
               '>{#p/sans}{#f/3}* she can be... quick to make big decisions.'
            ]);
            if (dmettaton) {
               addB([
                  ">{#p/sans}{#f/0}* and what she did recently... really wasn't great.",
                  ">{#p/papyrus}{#f/6}HUH!?\nWHAT'D SHE DO?",
                  ">{#p/sans}{#f/3}* recently, some of mettaton's biggest fans came to her...",
                  '>{#p/sans}{#f/0}* asking her to put on a memorial show.',
                  ">{#p/sans}{#f/0}* i liked the idea.\n* it'd give people something to care about.",
                  '>{#p/sans}{#f/0}* but, she was never really a big fan of his, so...',
                  '>{#p/sans}{#f/3}* she shot the proposal down out of spite.',
                  ">{#p/papyrus}{#f/7}... UGH, IF SHE WON'T DO IT, THEN -I- WILL!",
                  ">{#p/sans}{#f/0}* wait, really?\n* that's a pretty big commitment, bro.",
                  '>{#p/papyrus}{#f/4}I WAS A FAN OF HIS TOO, YOU KNOW.'
               ]);
            } else {
               addB([
                  ">{#p/sans}{#f/0}* and that's before you throw mettaton into the mix.",
                  ">{#p/papyrus}{#f/6}METTATON!?\nWHAT'S -HE- DOING?",
                  '>{#p/sans}{#f/0}* oh, after alphys became queen, he figured he\'d "tag along."',
                  ">{#p/sans}{#f/3}* but his advice... isn't very helpful.",
                  '>{#p/sans}{#f/0}* he just wants to turn the outpost into an entertainment complex.',
                  '>{#p/sans}{#f/0}* with his tv shows being front and center, of course.',
                  ">{#p/sans}{#f/3}* it's all a bit of a mess, really.",
                  '>{#p/papyrus}{#f/4}SOUNDS LIKE HE NEEDS A STERN TALKING-TO.',
                  ">{#p/sans}{#f/0}* maybe.\n* but aren't you like, his biggest fan?",
                  ">{#p/papyrus}{#f/7}NOT WHEN HE'S INTERFERING WITH YOUR WORK I'M NOT!"
               ]);
            }
            addB([
               ">{#p/papyrus}{#f/9}... I'LL BE BACK.",
               '>{#p/sans}{#f/0}* ...',
               ">{#p/sans}{#f/3}* i should probably go make sure he doesn't cause any trouble.",
               '>{#p/sans}{#f/0}* but, before i go...'
            ]);
            if (hkills > 9) {
               addB([
                  '>{#p/sans}{#f/0}* you may have killed a lot of people, but...',
                  '>{#p/sans}{#f/3}* in the end, you surrendered and did the right thing.'
               ]);
            } else if (30 <= SAVE.data.n.bully) {
               if (SAVE.data.n.exp > 0) {
                  addB([
                     '>{#p/sans}{#f/0}* regardless of the people you hurt and killed...',
                     '>{#p/sans}{#f/3}* in the end, you surrendered and did the right thing.'
                  ]);
               } else {
                  addB([
                     '>{#p/sans}{#f/0}* you may have hurt a lot of people, but...',
                     '>{#p/sans}{#f/3}* in the end, you surrendered and did the right thing.'
                  ]);
               }
            } else if (SAVE.data.n.exp > 0) {
               addB([
                  '>{#p/sans}{#f/0}* you may have made some mistakes, but...',
                  ">{#p/sans}{#f/3}* overall, you're not half bad."
               ]);
            } else {
               addB([
                  '>{#p/sans}{#f/0}* even if not everybody likes humanity...',
                  '>{#p/sans}{#f/2}* i and many others are more positive about them because of you.'
               ]);
            }
            addB([
               ">{#p/sans}{#f/0}* so, don't worry.",
               '>{#p/sans}{#f/3}* whatever happens to you out there...',
               '>{#p/sans}{#f/2}* just know that you have my full support.',
               '>{#p/sans}{#f/0}* ...\n* take care of yourself out there, ok?',
               '>{#p/sans}{#f/3}* ...',
               ">{#p/sans}{#f/3}* see ya 'round.",
               '>{#s/equip}{#p/event}* Click...'
            ]);
         } else if (SAVE.data.n.exp > 0 || SAVE.data.n.state_foundry_undyne === 1) {
            if (!dundyne) {
               k = 'light_undyne'; // NO-TRANSLATE
               // light neutral: queen undyne variant [alphys call]
               addA([
                  '>{#s/phone}{#p/event}* Ring, ring...',
                  '>{#p/alphys}{#f/4}* H-hiya...',
                  '>{#p/alphys}{#f/20}* Is anyone there?',
                  ">{#p/alphys}{#f/11}* ... I hope it's not too much trouble...",
                  '>{#p/alphys}{#f/4}* I just... w-wanted to let you know how things are going out here.'
               ]);
               addB([
                  '>{#p/alphys}{#f/20}* So... after you left, the king sort of... d-disappeared.',
                  ">{#p/alphys}{#f/14}* When I broke the news, it... hurt the people's morale pretty badly.",
                  '>{#p/alphys}{#f/10}* Technically, as royal scientist, I was meant to replace him, but...',
                  ">{#p/alphys}{#f/4}* I didn't really feel like I'd be the best fit for the job."
               ]);
               if (dmettaton) {
                  addB(['>{#p/alphys}{#f/4}* Especially after what I... let happen to Mettaton.']);
               }
               addB([
                  '>{#p/alphys}{#f/20}* Well, Undyne approached me with an offer to take over, and...',
                  '>{#p/alphys}{#f/20}* I agreed, and appointed her as the queen.'
               ]);
               if (dpapyrus) {
                  addB([">{#p/alphys}{#f/13}* ... I was worried she'd overreact to Papyrus's death..."]);
                  if (royals < 2) {
                     addB(['>{#p/alphys}{#f/13}* ... not to mention the collapse of the guard...']);
                  } else if (royals < 7) {
                     addB(['>{#p/alphys}{#f/13}* ... not to mention the loss of those guards...']);
                  }
               } else if (royals < 2) {
                  addB([">{#p/alphys}{#f/13}* ... I was worried she'd overreact to the collapse of the guard..."]);
               } else if (royals < 7) {
                  addB([">{#p/alphys}{#f/13}* ... I was worried she'd overreact to the loss of those guards..."]);
               } else if (ddoggo) {
                  addB([">{#p/alphys}{#f/13}* ... I was worried she'd overreact to the loss of Doggo..."]);
               } else if (dlesserdog) {
                  addB([">{#p/alphys}{#f/13}* ... I was worried she'd overreact to the loss of Canis Minor..."]);
               } else if (ddogs) {
                  addB([">{#p/alphys}{#f/13}* ... I was worried she'd overreact to those married dogs' deaths..."]);
               } else if (dgreatdog) {
                  addB([">{#p/alphys}{#f/13}* ... I was worried she'd overreact to the loss of Canis Major..."]);
               } else if (ddoge) {
                  addB([">{#p/alphys}{#f/13}* ... I was worried she'd overreact to the loss of Doge..."]);
               } else if (droyalguards) {
                  addB([">{#p/alphys}{#f/13}* ... I was worried she'd overreact to 03 and 04's deaths..."]);
               } else if (dmadjick) {
                  addB([">{#p/alphys}{#f/13}* ... I was worried she'd overreact to the loss of Cozmo..."]);
               } else if (dknightknight) {
                  addB([">{#p/alphys}{#f/13}* ... I was worried she'd overreact to the loss of Terrestria..."]);
               } else if (dtoriel) {
                  addB([">{#p/alphys}{#f/13}* ... I was worried she'd overreact to the former queen's death..."]);
               } else if (dmuffet) {
                  addB([">{#p/alphys}{#f/13}* ... I was worried she'd overreact to the spider queen's death..."]);
               } else if (dmettaton) {
                  addB([">{#p/alphys}{#f/13}* ... I was worried she'd overreact to Mettaton's death..."]);
               } else if (hkills > 1) {
                  addB([">{#p/alphys}{#f/13}* ... I was worried she'd overreact to those monsters' deaths..."]);
               } else {
                  addB([">{#p/alphys}{#f/13}* ... I was worried she'd overreact to that one monster's death..."]);
               }
               if (royals < 2) {
                  addB(['>{#p/alphys}{#f/17}* But all she did was re- establish the Royal Guard and its forces.']);
               } else {
                  addB([">{#p/alphys}{#f/17}* But all she did was bolster the Royal Guard's forces."]);
               }
               if (SAVE.data.b.undyne_respecc) {
                  addB(['>{#p/alphys}{#f/19}* And... make a speech about how humans are dishonorable warriors.']);
               } else if (2.1 <= SAVE.data.n.plot_date) {
                  addB(['>{#p/alphys}{#f/19}* And... make a speech about how humans are backstabbing traitors.']);
               } else {
                  addB(['>{#p/alphys}{#f/19}* And... make a speech about how humans are irredeemable killers.']);
               }
               if (royals < 6 || mdeaths > 9) {
                  addB(['>{#p/alphys}{#f/20}* A speech that... actually got a lot of people on her side.']);
                  if (30 <= SAVE.data.n.bully) {
                     addB([">{#p/alphys}{#f/26}* ... beating everyone up certainly didn't help your case."]);
                  } else {
                     addB([
                        '>{#p/alphys}{#f/5}* ... monsters are pretty wary of humans these days because of that.'
                     ]);
                  }
               } else {
                  addB(['>{#p/alphys}{#f/20}* A speech that only got people on her side...']);
                  if (30 <= SAVE.data.n.bully) {
                     addB(['>{#p/alphys}{#f/26}* ... after they were reminded of your bullying.']);
                  } else {
                     addB([
                        ">{#p/alphys}{#f/20}* ... after she mentioned the circumstances of ASGORE's disappearance."
                     ]);
                  }
               }
               addB([
                  '>{#p/alphys}{#f/10}* As for the actual humans still alive on the outpost...?',
                  ">{#p/alphys}{#f/4}* Well, after what she said, I... didn't want to take any chances.",
                  '>{#p/alphys}{#f/20}* So... I had the archive moved to a spire house in Aerialis.',
                  '>{#p/alphys}{#f/20}* In secret.',
                  '>{#p/alphys}{#f/5}* ... Undyne saw the lack of humans, or... human SOULs, and...',
                  ">{#p/alphys}{#f/10}* Assumed they'd been lost, too."
               ]);
               if (dtoriel) {
                  addB([
                     '>{#p/alphys}{#f/3}* I, ahah, tried to talk her out of announcing it in public, but...',
                     '>{#p/alphys}{#f/3}* ... there was nothing I could do...!',
                     ">{#p/alphys}{#f/30}* ...\n* Everyone thinks we're back at square one now."
                  ]);
                  if (dpapyrus) {
                     addB([
                        ">{#p/alphys}{#f/31}* Many have lost hope that we'll... ever get out of here.",
                        '>{#p/alphys}{#f/31}* ...',
                        ">{#p/alphys}{#f/30}* People are angry.\n* They're scared, and they all want to leave.",
                        ">{#p/alphys}{#f/31}* I don't know how much longer I can keep this secret from everyone.",
                        '>{#p/sans}{#f/0}* hey, you still talking to yourself in there?',
                        ">{#p/sans}{#f/3}* c'mon, the humans are due for their daily checkup.",
                        '>{#p/alphys}{#f/20}* Uh... could you come in for just a moment?',
                        '>{#p/sans}{#f/0}* on it.',
                        ">{#p/sans}{#f/0}* ... and i'm here.",
                        ">{#p/alphys}{#f/20}* So... I'm not really talking to myself.",
                        ">{#p/alphys}{#f/19}* Actually, I'm leaving a message for the human.\n* It's recording now...",
                        '>{#p/sans}{#f/0}* hmm... i see.',
                        '>{#p/sans}{#f/2}* mind if i take over while you go look after the kids?',
                        ">{#p/alphys}{#f/5}* S-sure, I'll... go do that.",
                        '>{#p/sans}{#f/3}* ...',
                        ">{#p/sans}{#f/0}* ok, look, i won't take up much of your time.",
                        '>{#p/sans}{#f/0}* to be honest, i just took over the phone so i could hang it up.',
                        '>{#p/sans}{#f/3}* alphys has a habit of making phone calls that stress her out.',
                        '>{#p/sans}{#f/0}* but... before i go.',
                        ">{#p/sans}{#f/0}* undyne's announcement wasn't the only bad news we received.",
                        ">{#p/sans}{#f/3}* reports of the former queen's death hit people pretty hard, too.",
                        '>{#p/sans}{#f/0}* shops closed down, people quit their jobs...',
                        ">{#p/sans}{#f/0}* they're saying morale is the lowest it's ever been.",
                        ">{#p/sans}{#f/2}* ... on the bright side, at least grillby's gets a lot of business now.",
                        '>{#p/sans}{#f/3}* but no amount of junk food can make up for the loss of my...',
                        '>{#p/sans}{#f/3}* ... well, i think you know who i mean.',
                        '>{#p/sans}{#f/0}* ...',
                        ">{#p/sans}{#f/0}* humanity's reputation is honestly pretty terrible now.",
                        '>{#p/sans}{#f/0}* alphys and i will do our best to protect the next human who comes...',
                        ">{#p/sans}{#f/3}* but i wouldn't be surprised if they end up getting killed.",
                        ">{#p/sans}{#f/0}* ... that's just the way things are now.",
                        '>{#p/alphys}{#f/27}* Uh, hey, sorry to interrupt, but...',
                        '>{#p/alphys}{#f/20}* I think we may have a... b-bit of a problem.',
                        '>{#p/sans}{#f/0}* eh, i said all i wanted to, anyway.',
                        ">{#p/sans}{#f/0}* i'm hanging up the phone now.",
                        '>{#p/sans}{#f/3}* ... goodbye.',
                        '>{#s/equip}{#p/event}* Click...'
                     ]);
                  } else {
                     addB([
                        '>{#p/papyrus}{#f/0}EVERYONE EXCEPT FOR YOU, ME, AND MY BROTHER!',
                        '>{#p/alphys}{#f/27}* Oh, hey Papyrus.\n* I take it the archive is still working?',
                        '>{#p/papyrus}{#f/0}INDEED IT IS!',
                        '>{#p/papyrus}{#f/9}I ALSO GAVE THE HUMANS THEIR DAILY CHECKUP!',
                        '>{#p/alphys}{#f/10}* Awesome, thanks.',
                        ">{#p/alphys}{#f/10}* ... maybe... you'd like to say a few things to the human...?",
                        ">{#p/alphys}{#f/5}* I'm leaving a message about what's happened since they left.",
                        '>{#p/papyrus}{#f/0}OH, SURE THING!',
                        ">{#p/papyrus}{#f/0}... HELLO, HUMAN.\nI TRUST YOU'RE DOING WELL.",
                        ">{#p/papyrus}{#f/5}IT'S BEEN HARD KEEPING SECRETS FROM EVERYONE...",
                        ">{#p/papyrus}{#f/6}ESPECIALLY WHEN THEY'RE ALL JUST SO SAD!!!",
                        ">{#p/papyrus}{#f/5}ALL THOSE PEOPLE THINKING THEY'LL NEVER ESCAPE...",
                        '>{#p/papyrus}{#f/5}WONDERING IF THEY STILL HAVE A FUTURE...',
                        ">{#p/papyrus}{#f/0}BUT HEY!!\nIT'LL BE ALRIGHT!!",
                        ">{#p/papyrus}{#f/5}ONE DAY, THEY'LL COME TO KNOW THE TRUTH...",
                        '>{#p/papyrus}{#f/0}AND THE TRUTH WILL SET THEM FREE.',
                        ">{#p/alphys}{#f/8}* Papyrus, why don't you tell them about your new job?",
                        '>{#p/papyrus}{#f/0}OH RIGHT!!\nHOW COULD I FORGET ABOUT THAT!?',
                        '>{#p/papyrus}{#f/0}... UNDYNE FINALLY LET ME JOIN THE ROYAL GUARD.',
                        ">{#p/papyrus}{#f/4}TECHNICALLY, I'M THE GUARD'S MORALE OFFICER...",
                        '>{#p/papyrus}{#f/0}BUT I STILL DO A VERY IMPORTANT JOB!',
                        ">{#p/papyrus}{#f/5}YOU SEE, A GUARD CAN'T DO THEIR BEST...",
                        ">{#p/papyrus}{#f/5}IF THEY'RE DOWN IN THE DUMPS.",
                        ">{#p/papyrus}{#f/0}SO... THAT'S WHERE I COME IN!",
                        '>{#p/papyrus}{#f/4}UM, METAPHORICALLY OF COURSE.',
                        ">{#p/papyrus}{#f/4}I WOULDN'T ACTUALLY GO DOWN INTO A DUMP.",
                        ">{#p/papyrus}{#f/7}... THERE'S ENOUGH PEOPLE DOING THAT ALREADY!!!",
                        ">{#p/papyrus}{#f/5}IT'S STRANGE...\nTHEY NEVER SEEM TO COME BACK.",
                        ">{#p/alphys}{#f/10}* Eheh, I wouldn't worry about that.",
                        '>{#p/alphys}{#f/3}* They must just be so obsessed with trash, they never leave!',
                        '>{#p/papyrus}{#f/0}YEAH...\nTHAT MUST BE IT.',
                        '>{#p/papyrus}{#f/5}...',
                        ">{#p/papyrus}{#f/5}IT'S STILL KIND OF CONCERNING, THOUGH.",
                        '>{#p/alphys}{#f/31}* ... yeah.',
                        ">{#p/sans}{#f/0}* oh.\n* hey guys.\n* sorry i'm late...",
                        '>{#p/sans}{#f/2}* the people on the floor below us want me to make breakfast.',
                        ">{#p/alphys}{#f/25}* Well aren't they just a needy bunch.",
                        '>{#p/papyrus}{#f/7}UGH... LIVING IN A SPIRE HOUSE MUST BE SO ANNOYING!!',
                        '>{#p/papyrus}{#f/4}DO THEY NOT KNOW HOW TO COOK FOR THEMSELVES?',
                        ">{#p/sans}{#f/0}* i mean, i can't say i blame 'em.",
                        ">{#p/sans}{#f/0}* after undyne's announcement about our progress, and...",
                        ">{#p/sans}{#f/0}* those reports of the former queen's death...?",
                        ">{#p/sans}{#f/3}* i'd probably want someone else to cook for me, too.",
                        ">{#p/sans}{#f/2}* but hey.\n* that's why i have you.",
                        '>{#p/papyrus}{#f/0}YEAH!!\nWHO NEEDS SOMEONE ELSE TO COOK...',
                        '>{#p/papyrus}{#f/9}... WHEN YOU HAVE THE ONE AND ONLY GREAT PAPYRUS!',
                        '>{#p/sans}{#f/0}* heh.',
                        '>{#p/sans}{#f/0}* well, i should probably get started on that breakfast now.',
                        '>{#p/sans}{#f/3}* papyrus, would you mind coming with me?',
                        ">{#p/papyrus}{#f/0}OF COURSE!\nI'LL GO WITH YOU RIGHT AWAY!",
                        '>{#p/sans}{#f/0}* alrighty, then.\n* ... on we go!',
                        '>{#p/alphys}{#f/17}* Have fun.',
                        '>{#p/alphys}{#f/17}* ...',
                        '>{#p/alphys}{#f/5}* I guess I should probably hang up the phone now.',
                        '>{#p/alphys}{#f/6}* Just, if this ever gets to you, then...',
                        ">{#p/alphys}{#f/14}* I hope you're doing better than we are right now.",
                        '>{#p/alphys}{#f/20}* ...',
                        '>{#p/alphys}{#f/20}* See you later.',
                        '>{#s/equip}{#p/event}* Click...'
                     ]);
                  }
               } else {
                  addB([
                     '>{#p/alphys}{#f/5}* F-fortunately, the former queen returned, and...',
                     '>{#p/alphys}{#f/5}* Managed to convince her not to make an announcement about it.',
                     '>{#p/alphys}{#f/10}* There was some tension between them at first, but...',
                     ">{#p/alphys}{#f/6}* ... things feel like they're kind of back to normal, now."
                  ]);
                  if (dpapyrus) {
                     addB([
                        '>{#p/alphys}{#f/4}* The only difference from before is...',
                        '>{#p/alphys}{#f/17}* ... I have to keep the archive a secret.',
                        ">{#p/alphys}{#f/20}* Well, I guess that's not really much of a difference.",
                        ">{#p/alphys}{#f/14}* It's just weird not having... anyone around to help anymore.",
                        '>{#p/sans}{#f/0}* didja forget about me?',
                        ">{#p/alphys}{#f/2}* O-oh, uh, that's not what I meant!",
                        ">{#p/sans}{#f/3}* hey, i get it.\n* it's not the same as it was with asgore.",
                        ">{#p/sans}{#f/0}* but i'd like to think i do a good job.",
                        '>{#p/alphys}{#f/6}* Yeah... you do.',
                        '>{#p/alphys}{#f/5}* I just miss having him around and stuff.',
                        '>{#p/sans}{#f/3}* ... by the way...',
                        '>{#p/sans}{#f/0}* you should probably go give the humans their daily checkup.',
                        ">{#p/sans}{#f/2}* i can take over on the phone while you're gone.",
                        ">{#p/alphys}{#f/6}* Sounds good.\n* I'll go do that now.",
                        '>{#p/sans}{#f/3}* ...'
                     ]);
                     if (hkills === 1) {
                        addB([
                           '>{#p/sans}{#f/0}* so here we are, then.',
                           ">{#p/sans}{#f/0}* now, since you left, i've been asking myself...",
                           '>{#p/sans}{#f/3}* "why would they go out of their way solely to kill him?"',
                           ">{#p/sans}{#f/0}* and i'm not talking about asgore.",
                           '>{#p/sans}{#f/3}* ...',
                           '>{#p/sans}{#f/3}* i think we both know the reason.',
                           ">{#p/sans}{#f/3}* i think we both know it wasn't out of self- defense.",
                           ">{#p/sans}{#f/0}* come on.\n* let's be honest with ourselves here.",
                           ">{#p/sans}{#f/0}* you just did it to see what'd happen.",
                           ">{#p/sans}{#f/0}* to see what i'd have to say about it.",
                           '>{#p/sans}{#f/0}* well, congratulations!\n* you got your answer, bucko!',
                           ">{#p/sans}{#f/0}* i hope you're happy with the outcome.",
                           ">{#p/sans}{#f/3}* just kidding.\n* i don't really hope that.",
                           '>{#p/sans}{#f/0}* ...',
                           ">{#p/sans}{#f/0}* ... well, that's all.",
                           '>{#s/equip}{#p/event}* Click...'
                        ]);
                     } else {
                        addB([
                           ">{#p/sans}{#f/0}* hey.\n* hope you're doing well.",
                           ">{#p/sans}{#f/0}* for the most part, we're doing well, too.",
                           '>{#p/sans}{#f/3}* people are still going about their lives, day after day...',
                           '>{#p/sans}{#f/0}* waiting for the next human to come along and set us free.'
                        ]);
                        if (hkills > 9) {
                           addB([
                              '>{#p/sans}{#f/0}* ... i just wish i could say the same about my brother.',
                              '>{#p/sans}{#f/3}* and the other people you killed, for that matter.'
                           ]);
                        } else {
                           addB(['>{#p/sans}{#f/3}* ... i just wish i could say the same about my brother.']);
                        }
                        addB([
                           '>{#p/sans}{#f/3}* ...',
                           '>{#p/sans}{#f/3}* hmm...\n* what else should i mention?',
                           '>{#p/sans}{#f/0}* ... right.\n* new living arrangements.',
                           '>{#p/sans}{#f/3}* so, after the former queen returned...',
                           '>{#p/sans}{#f/0}* she and i recognized each other and got to talking.',
                           '>{#p/sans}{#f/0}* one thing led to another, and...',
                           '>{#p/sans}{#f/0}* she agreed to move in with me to my house in starton town.',
                           ">{#p/sans}{#f/0}* ... sure.\n* there's a lot we were excited about.",
                           '>{#p/sans}{#f/3}* the books i gave her, the recipes she tried to teach me...',
                           ">{#p/sans}{#f/0}* but... y'know...",
                           '>{#p/sans}{#f/3}* none of that stuff ever made up for what happened to papyrus.',
                           '>{#p/sans}{#f/3}* she still feels pretty bad about that.',
                           '>{#p/sans}{#f/0}* not just because she cares about me, but also...',
                           '>{#p/sans}{#f/0}* because she cared about you.',
                           ">{#p/sans}{#f/3}* you can imagine how she felt when she realized what you'd done.",
                           '>{#p/sans}{#f/0}* spoiler alert.\n* not good.',
                           ">{#p/sans}{#f/3}* ... and the public at large doesn't seem to feel much better.",
                           '>{#p/sans}{#f/0}* at least in terms of your reputation.',
                           '>{#p/sans}{#f/0}* still.\n* could be worse.',
                           '>{#p/sans}{#f/0}* at the very least, alphys and i are confident...',
                           '>{#p/sans}{#f/3}* in our ability to escort the next human to safety.',
                           ">{#p/sans}{#f/0}* so that's something.",
                           '>{#p/alphys}{#f/27}* Uh, hey, sorry to interrupt, but...',
                           '>{#p/alphys}{#f/20}* I think we may have a... b-bit of a problem.',
                           ">{#p/sans}{#f/3}* welp.\n* looks like i'll have to cut this short.",
                           ">{#p/sans}{#f/0}* just... think about what i've said, ok?",
                           '>{#p/sans}{#f/0}* ...',
                           ">{#p/sans}{#f/0}* ... well, that's all.",
                           '>{#s/equip}{#p/event}* Click...'
                        ]);
                     }
                  } else {
                     addB([
                        ">{#p/papyrus}{#f/0}YEAH!!\nTHEY'RE REALLY NOT THAT BAD!",
                        '>{#p/papyrus}{#f/5}ASIDE FROM ALL THE SECRET-KEEPING.',
                        '>{#p/papyrus}{#f/5}NOT A BIG FAN OF THAT PARTICULAR THING.',
                        '>{#p/alphys}{#f/11}* But if Undyne were to find out, then...',
                        ">{#p/papyrus}{#f/4}YES, YES, I KNOW WHAT YOU'RE GOING TO SAY.",
                        ">{#p/papyrus}{#f/4}SHE'LL GET UPSET AND TRY TO TAKE THE HUMANS' SOULS.",
                        ">{#p/papyrus}{#f/7}YOU DON'T HAVE TO REMIND ME!!",
                        ">{#p/alphys}{#f/23}* He's been arguing with me about this for a while.",
                        '>{#p/papyrus}{#f/5}(SIGH...)',
                        '>{#p/papyrus}{#f/5}I FEEL LIKE WE COULD CONVINCE HER IF WE JUST TRIED.',
                        ">{#p/alphys}{#f/3}* ... Papyrus, why don't you tell them about your new job?",
                        '>{#p/papyrus}{#f/0}OH RIGHT!!\nHOW COULD I FORGET ABOUT THAT!?',
                        '>{#p/papyrus}{#f/0}... UNDYNE FINALLY LET ME JOIN THE ROYAL GUARD.',
                        ">{#p/papyrus}{#f/9}I'M THE GUARD'S NEWEST TRAINING EXPERT!",
                        '>{#p/papyrus}{#f/0}SO... WHILE UNDYNE TRAINS THE OTHER GUARDS...',
                        ">{#p/papyrus}{#f/0}I'M RESPONSIBLE FOR KEEPING THEM ALL MOTIVATED.",
                        ">{#p/papyrus}{#f/9}TURNS OUT I'M PRETTY DARN GOOD AT IT, TOO!",
                        '>{#p/papyrus}{#f/2}HER WORDS -AND- MINE.',
                        ">{#p/alphys}{#f/5}* Sounds like fun.\n* Maybe I'll visit you on the job sometime.",
                        ">{#p/papyrus}{#f/0}SURE, I'LL LET YOU VISIT.",
                        '>{#p/papyrus}{#f/4}AFTER YOU AGREE TO TELL UNDYNE OUR SECRET.',
                        '>{#p/alphys}{#f/20}* ...',
                        '>{#p/papyrus}{#f/0}SO, HOW ABOUT IT?\nYOU, ME, UNDYNE, CONVINCING?',
                        ">{#p/sans}{#f/0}* ... huh?\n* what's this about?",
                        ">{#p/sans}{#f/3}* sorry i'm late, by the way.",
                        '>{#p/sans}{#f/2}* the people on the floor above us want me to make dinner.',
                        ">{#p/alphys}{#f/25}* Well aren't they just a needy bunch.",
                        ">{#p/papyrus}{#f/4}AREN'T YOU GOING TO TELL HIM WHAT WE TALKED ABOUT?",
                        '>{#p/alphys}{#f/32}* ...',
                        '>{#p/alphys}{#f/3}* Papyrus thinks we should tell Undyne the truth.',
                        ">{#p/sans}{#f/3}* you really think that'd go well, bro?",
                        '>{#p/papyrus}{#f/0}WELL, AS A MEMBER OF THE ROYAL GUARD...',
                        '>{#p/papyrus}{#f/0}MY OPINION -SHOULD- CARRY SOME REAL WEIGHT!',
                        ">{#p/sans}{#f/0}* hmm... normally i'd say no to something like this, but...",
                        '>{#p/sans}{#f/0}* undyne does seem to have a certain respect for you.',
                        ">{#p/sans}{#f/3}* besides, i've been thinking about it too.",
                        ">{#p/alphys}{#f/22}* W-WELL DON'T GO SAYING ANYTHING UNTIL I GIVE THE OKAY!",
                        ">{#p/sans}{#f/2}* wouldn't dream of it.",
                        ">{#p/papyrus}{#f/0}YEAH!!\nWE'LL JUST PICTURE IT IN OUR HEADS.",
                        '>{#p/papyrus}{#f/5}UNLESS THAT ALSO COUNTS AS DREAMING.',
                        '>{#p/sans}{#f/0}* heh.',
                        '>{#p/sans}{#f/0}* well, i should probably get started on that dinner now.',
                        '>{#p/sans}{#f/3}* papyrus, would you mind coming with me?',
                        ">{#p/papyrus}{#f/0}OF COURSE!\nI'LL GO WITH YOU RIGHT AWAY!",
                        '>{#p/sans}{#f/0}* alrighty, then.\n* ... on we go!',
                        '>{#p/alphys}{#f/17}* Have fun.',
                        '>{#p/alphys}{#f/17}* ...',
                        '>{#p/alphys}{#f/5}* To be honest...',
                        '>{#p/alphys}{#f/5}* It would be nice to not have to hide all of this anymore.',
                        ">{#p/alphys}{#f/6}* So... maybe, if there's really a chance this could succeed...",
                        '>{#p/alphys}{#f/6}* ...',
                        ">{#p/alphys}{#f/8}* I-I'll think about it after I hang up the phone.",
                        '>{#p/alphys}{#f/10}* ...',
                        '>{#p/alphys}{#f/16}* T-take care!!',
                        '>{#s/equip}{#p/event}* Click...'
                     ]);
                  }
               }
            } else if (!dtoriel) {
               if (SAVE.data.b.w_state_lateleave) {
                  k = 'light_runaway'; // NO-TRANSLATE
                  // light neutral: runaway variant [toriel call]
                  addA([
                     '>{#s/phone}{#p/event}* Ring, ring...',
                     '>{#p/toriel}{#f/1}* Hello?',
                     '>{#p/toriel}{#f/5}* This is... Toriel.',
                     '>{#p/toriel}{#f/1}* ... I know we did not part ways on the best of terms, but...',
                     '>{#p/toriel}{#f/5}* I feel that you should know what has happened since your departure.'
                  ]);
                  addB([
                     '>{#p/toriel}{#f/9}* After you ran away from me, I reconsidered my own decisions.',
                     '>{#p/toriel}{#f/13}* I felt... guilty.\n* For trying to keep you in the Outlands.',
                     '>{#p/toriel}{#f/13}* For trying to keep ALL the humans there.',
                     '>{#p/toriel}{#f/9}* I decided I could stay there no longer.',
                     '>{#p/toriel}{#f/13}* I worked up the courage to leave, and returned to the Citadel.',
                     '>{#p/toriel}{#f/18}* ... when I saw that the humans were trapped in those boxes...',
                     '>{#p/toriel}{#f/13}* I released them without a second thought.',
                     '>{#p/toriel}{#f/10}* I did not want them to be trapped any more than I wanted you to be.',
                     '>{#p/toriel}{#f/9}* ... but this decision was not without its consequences.',
                     ">{#p/toriel}{#f/13}* Not only were the humans traumatized by ASGORE's archive...",
                     '>{#p/toriel}{#f/13}* But one of them ran off, and was discovered by the public.',
                     '>{#p/toriel}{#f/18}* I did not want to keep them here against their will, but...',
                     ">{#p/toriel}{#f/9}* The death of the Royal Guard's captain, and loss of the king...",
                     ">{#p/toriel}{#f/9}* ... placed humanity's reputation in a rather difficult position.",
                     '>{#p/toriel}{#f/13}* With the public knowing the truth about the humans...',
                     '>{#p/toriel}{#f/9}* I had no choice but to do whatever I could to safeguard them.',
                     '>{#p/alphys}{#f/15}* Uh, not to interrupt, but... you have a visitor.',
                     '>{#p/toriel}{#f/10}* Let me guess.\n* Sans?',
                     '>{#p/alphys}{#f/3}* ...',
                     '>{#p/toriel}{#f/0}* There is no need to be so formal when he is the one at the gate.',
                     '>{#p/toriel}{#f/9}* System, unlock the gate, authorization Toriel PIE-1-1-0.',
                     ">{#p/sans}{#f/0}* ...\n* it's about time.",
                     '>{#p/sans}{#f/0}* you still on the phone with the human?',
                     '>{#p/alphys}{#f/23}* On the WHAT!?',
                     '>{#p/toriel}{#f/0}* Yes, I thought it would be nice if they heard from you, Sans.',
                     '>{#p/toriel}{#f/1}* Perhaps Alphys would like to join us as well?',
                     '>{#p/alphys}{#f/21}* ...',
                     '>{#p/alphys}{#f/21}* No.\n* Alphys would not.',
                     '>{#p/alphys}{#f/21}* In fact, Alphys would like to leave now.',
                     ">{#p/alphys}{#f/24}* ... I'll be outside if you need me.",
                     '>{#p/sans}{#f/0}* ...',
                     '>{#p/toriel}{#f/5}* ...'
                  ]);
                  if (SAVE.data.n.state_foundry_undyne === 1) {
                     addB([">{#p/sans}{#f/3}* she's... still pretty upset about what happened to undyne."]);
                  } else {
                     addB([">{#p/sans}{#f/3}* she's... still pretty angry about what you did to undyne."]);
                  }
                  if (dmettaton) {
                     addB(['>{#p/sans}{#f/0}* not to mention her friend, mettaton.']);
                  } else {
                     addB([">{#p/sans}{#f/0}* about what she's had to do as a result."]);
                  }
                  if (dpapyrus) {
                     addB([
                        '>{#p/sans}{#f/3}* and you know what?',
                        '>{#p/sans}{#f/0}* i really get it.',
                        '>{#p/sans}{#f/0}* i know what alphys must be going through right now.',
                        '>{#p/sans}{#f/0}* after all...',
                        ">{#p/sans}{#f/3}* she's not the only one who lost someone."
                     ]);
                  } else {
                     if (SAVE.data.n.state_foundry_undyne === 1) {
                        if (dmettaton) {
                           addB([
                              ">{#p/sans}{#f/3}* and while i wouldn't blame you for what you did, or didn't do..."
                           ]);
                        } else {
                           addB([">{#p/sans}{#f/3}* and while i wouldn't blame you for running away..."]);
                        }
                     } else {
                        addB([">{#p/sans}{#f/3}* and while i wouldn't blame you for trying to defend yourself..."]);
                     }
                     addB([
                        ">{#p/sans}{#f/0}* i can't help but wonder if there was a better way to go about things.",
                        '>{#p/sans}{#f/0}* if, maybe somehow, this all could have been avoided.',
                        '>{#p/sans}{#f/3}* but i digress.',
                        ">{#p/sans}{#f/0}* there's too much at stake in the present to worry about the past."
                     ]);
                  }
                  if (royals < 2) {
                     addB([
                        '>{#p/sans}{#f/0}* ...',
                        ">{#p/sans}{#f/0}* it's been difficult without the royal guard to protect us.",
                        '>{#p/sans}{#f/3}* not that i was a big fan of those guys before, but...',
                        ">{#p/sans}{#f/0}* at a time like this, it'd be nice to have them around.",
                        '>{#p/toriel}{#f/13}* Yes, sadly, I am inclined to agree.',
                        '>{#p/toriel}{#f/13}* It seems not a day goes by without an angered citizen at the gate.',
                        '>{#p/toriel}{#f/9}* But it cannot be helped.',
                        '>{#p/toriel}{#f/9}* There are few who share my willingness to treat humans as individuals.',
                        '>{#p/human}{#v/1}{@fill=#42fcff}* Toriel, are we in danger?',
                        '>{#p/toriel}{#f/1}* ... oh, hello!',
                        '>{#p/toriel}{#f/0}* Do not worry, my child.\n* I will always be here to protect you.',
                        '>{#p/human}{#v/1}{@fill=#42fcff}* ... thank you...',
                        '>{#p/toriel}{#f/0}* Now, please go back and wait with the others.',
                        '>{#p/toriel}{#f/0}* I will be with you shortly.',
                        ">{#p/human}{#v/1}{@fill=#42fcff}* Okay, I'll go...",
                        '>{#p/toriel}{#f/10}* ... very good.',
                        '>{#p/toriel}{#f/9}* ...'
                     ]);
                     if (dpapyrus) {
                        addB([
                           '>{#p/toriel}{#f/10}* I suppose I cannot judge the citizens too harshly...',
                           '>{#p/toriel}{#f/9}* ... knowing the sorts of choices you made during your time here.',
                           '>{#p/toriel}{#f/13}* It was... difficult, even for me, to accept what you had done.'
                        ]);
                     } else {
                        addB(['>{#p/toriel}{#f/13}* It is... an unfortunate situation we find ourselves in.']);
                     }
                     addB([
                        ">{#p/sans}{#f/0}* y'know...",
                        ">{#p/sans}{#f/0}* i wanted to go to grillby's the other day, but...",
                        '>{#p/sans}{#f/3}* their entire stock got raided last week.',
                        '>{#p/sans}{#f/0}* turns out grillby was a pro-human supporter.',
                        '>{#p/toriel}{#f/13}* I am... sorry to hear that, Sans.\n* You liked going there.',
                        '>{#p/sans}{#f/3}* yeah, being pro-human is basically a death sentence these days.',
                        '>{#p/sans}{#f/0}* at least where your business is concerned.',
                        '>{#p/toriel}{#f/12}* ... this is not the only instance of this happening.',
                        '>{#p/toriel}{#f/11}* Many others have had the same fate.',
                        '>{#p/sans}{#f/0}* yeah, but you know what the worst part is?',
                        ">{#p/sans}{#f/3}* this isn't what monsters are supposed to be like.",
                        '>{#p/sans}{#f/0}* the homeworld was said to be peaceful, and even during the war...',
                        '>{#p/sans}{#f/0}* at least we were still united as a species.',
                        ">{#p/sans}{#f/3}* now, it just feels like... people can't get along."
                     ]);
                     if (dpapyrus) {
                        addB([">{#p/sans}{#f/0}* i could really use my brother's encouragement right about now."]);
                     } else {
                        addB(['>{#p/sans}{#f/0}* and that really stinks.']);
                     }
                     addB([
                        '>{#p/alphys}{#f/3}* Uh... guys?',
                        '>{#p/alphys}{#f/3}* I think you need to come see this.',
                        '>{#p/toriel}{#f/3}* What is that rumbling?\n* Do you hear that?',
                        '>{#p/alphys}{#f/23}* You need to look outside.',
                        '>{#p/sans}{#f/0}* toriel, did you lock the gate after i got through?',
                        '>{#p/toriel}{#f/2}* ...',
                        '>{#p/alphys}{#f/22}* Come outside, NOW!!',
                        '>{|}{#p/toriel}{#f/2}* I... I am sorry!\n* I have to- {%}',
                        '>{#s/equip}{#p/event}* Click...'
                     ]);
                  } else {
                     addB([
                        '>{#p/sans}{#f/0}* ...',
                        '>{#p/sans}{#f/0}* at least we have the royal guard around to back us up.',
                        ">{#p/sans}{#f/3}* what's left of it, anyway.",
                        '>{#p/toriel}{#f/14}* It is fortunate we have their support.',
                        '>{#p/toriel}{#f/13}* I do not know how we would fare without it.',
                        '>{#p/human}{#v/2}{@fill=#ff993d}* Yeah!\n* That Royal Guard is awesome!',
                        '>{#p/toriel}{#f/2}* ... huh!?',
                        ">{#p/human}{#v/2}{@fill=#ff993d}* You'll see!",
                        ">{#p/human}{#v/2}{@fill=#ff993d}* When I'm older, I'm gonna join them and protect everyone!",
                        '>{#p/toriel}{#f/0}* Hee hee.\n* Perhaps you will.',
                        '>{#p/toriel}{#f/1}* Hmm...',
                        '>{#p/toriel}{#f/0}* For now, your orders are to return to and guard the others first.',
                        ">{#p/human}{#v/2}{@fill=#ff993d}* Aye aye, captain!\n* I'll do so right away!",
                        '>{#p/toriel}{#f/0}* Stay safe!',
                        ">{#p/sans}{#f/0}* heh.\n* don't push 'em too hard out there.",
                        ">{#p/sans}{#f/3}* they've... still got all that archive stuff to deal with.",
                        '>{#p/toriel}{#f/5}* That IS true, however...',
                        '>{#p/toriel}{#f/0}* It does not mean they must focus on it all the time.',
                        '>{#p/toriel}{#f/1}* They are still only children, are they not?',
                        '>{#p/sans}{#f/2}* ... welp, you know more about these things than me.',
                        '>{#p/toriel}{#f/9}* ...',
                        '>{#p/toriel}{#f/9}* I do still worry about the outpost overall.',
                        '>{#p/toriel}{#f/13}* The Royal Guard has helped to keep the outpost in check, but...',
                        '>{#p/toriel}{#f/18}* Many people still do not see the value in what we are doing.'
                     ]);
                     if (dpapyrus) {
                        addB([
                           '>{#p/toriel}{#f/10}* Though, I suppose I cannot judge them too harshly...',
                           '>{#p/toriel}{#f/9}* ... knowing the sorts of choices you made during your time here.',
                           '>{#p/toriel}{#f/13}* It was... difficult, even for me, to accept what you had done.'
                        ]);
                     } else {
                        addB(['>{#p/toriel}{#f/13}* It is... an unfortunate situation we find ourselves in.']);
                     }
                     addB([
                        ">{#p/sans}{#f/0}* y'know...",
                        ">{#p/sans}{#f/0}* i wanted to go to grillby's the other day, but...",
                        '>{#p/sans}{#f/3}* the place was utterly full of protesters.',
                        '>{#p/sans}{#f/0}* turns out grillby was a pro-human supporter.',
                        '>{#p/toriel}{#f/13}* I am... sorry to hear that, Sans.\n* Was a guard not there?',
                        ">{#p/sans}{#f/3}* well, yeah, but it's not like they can kick 'em out.",
                        '>{#p/sans}{#f/0}* they WERE still paying customers.',
                        '>{#p/toriel}{#f/1}* ... that does not seem like an effective means of protest.',
                        '>{#p/toriel}{#f/6}* But I wish them well.',
                        ">{#p/sans}{#f/0}* yeah, i guess that's kinda funny.\n* but at the same time...",
                        ">{#p/sans}{#f/3}* this isn't what monsters are supposed to be like.",
                        '>{#p/sans}{#f/0}* the homeworld was said to be peaceful, and even during the war...',
                        '>{#p/sans}{#f/0}* at least we were still united as a species.',
                        ">{#p/sans}{#f/3}* now, it just feels like... people can't get along."
                     ]);
                     if (dpapyrus) {
                        addB([">{#p/sans}{#f/0}* i could really use my brother's encouragement right about now."]);
                     } else {
                        addB(['>{#p/sans}{#f/0}* and that really stinks.']);
                     }
                     addB([
                        '>{#p/alphys}{#f/27}* Uh, Toriel?\n* I think you left the security gate open.',
                        ">{#p/alphys}{#f/20}* Don't worry, I closed it for you.\n* Again.",
                        '>{#p/toriel}{#f/1}* Oh, um, thank you...',
                        ">{#p/alphys}{#f/23}* Maybe don't do that\n  next time?\n* It's there for a reason.",
                        '>{#p/toriel}{#f/5}* ...',
                        '>{#p/toriel}{#f/9}* Perhaps now would be a good time to end this message.',
                        '>{#p/sans}{#f/0}* yeah, sounds good.',
                        ">{#p/sans}{#f/3}* sorry, bucko... can't talk to you forever."
                     ]);
                     if (dpapyrus) {
                        addB([
                           '>{#p/sans}{#f/0}* fly safe out there, i guess...',
                           ">{#p/sans}{#f/3}* ... or not.\n* i don't really care."
                        ]);
                     } else {
                        addB(['>{#p/sans}{#f/0}* fly safe out there, will ya?', '>{#p/sans}{#f/3}* ...']);
                     }
                     addB(['>{#s/equip}{#p/event}* Click...']);
                  }
               } else {
                  k = 'light_toriel'; // NO-TRANSLATE
                  // light neutral: queen toriel variant [toriel call]
                  if (SAVE.data.n.state_wastelands_toriel === 0) {
                     addA([
                        '>{#s/phone}{#p/event}* Ring, ring...',
                        '>{#p/toriel}{#f/1}* Hello?',
                        '>{#p/toriel}{#f/0}* ...\n* This is Toriel.',
                        '>{#p/toriel}{#f/1}* I know it is not the kind of call we would normally have, but...',
                        '>{#p/toriel}{#f/5}* I feel that you should know what has happened since your departure.'
                     ]);
                     addB(['>{#p/toriel}{#f/9}* Despite our calling arrangements, I could not help but worry.']);
                  } else {
                     addA([
                        '>{#s/phone}{#p/event}* Ring, ring...',
                        '>{#p/toriel}{#f/1}* Hello?',
                        '>{#p/toriel}{#f/0}* ...\n* This is Toriel.',
                        '>{#p/toriel}{#f/1}* The circumstances may not be ideal at the moment, but...',
                        '>{#p/toriel}{#f/5}* I feel that you should know what has happened since your departure.'
                     ]);
                     addB(['>{#p/toriel}{#f/9}* After our time in the Outlands, I could not help but worry.']);
                  }
                  addB([
                     '>{#p/toriel}{#f/5}* I knew you were the last human ASGORE would have needed.',
                     '>{#p/toriel}{#f/1}* Despite my fear of leaving the Outlands...',
                     '>{#p/toriel}{#f/5}* I knew I could not afford to remain there any longer.',
                     '>{#p/toriel}{#f/9}* I ran to the Citadel as fast as I could to stop him from hurting you.',
                     '>{#p/toriel}{#f/10}* But when I got there...',
                     '>{#p/toriel}{#f/9}* I realized I had been wrong about him this whole time.',
                     '>{#p/toriel}{#f/5}* He was not the killer I had made him out to be.',
                     '>{#p/toriel}{#f/1}* ...',
                     '>{#p/toriel}{#f/1}* I had a talk with Alphys later that day.',
                     '>{#p/toriel}{#f/1}* We discussed ASGORE, the humans...',
                     '>{#p/toriel}{#f/3}* As well as something about a "Mew Mew Space Adventure?"',
                     '>{#p/toriel}{#f/4}* I still do not know what that means.',
                     ">{#p/toriel}{#f/0}* Anyhoo, to summarize... she wasn't ready to become the queen.",
                     '>{#p/toriel}{#f/1}* And she agreed to appoint me instead.',
                     ">{#p/toriel}{#f/5}* Only then, did I hear about the Royal Guard captain's death..."
                  ]);
                  if (dmettaton) {
                  }
                  if (hkills === 0) {
                     addB(['>{#p/toriel}{#f/9}* And the fact that, had you acted, you might have saved her.']);
                  } else if (hkills === 1) {
                     addB(['>{#p/toriel}{#f/9}* And the fact that you were the one to have killed her.']);
                  } else if (dmettaton) {
                     addB(['>{#p/toriel}{#f/9}* As well as the death of the TV star, Mettaton.']);
                     if (royals < 2) {
                        addB([
                           '>{#p/toriel}{#f/9}* ... and the deaths of most of the Royal Guard beyond that.',
                           ">{#p/toriel}{#f/5}* Mettaton's death in particular was difficult, however."
                        ]);
                     } else if (royals < 7) {
                        addB([
                           '>{#p/toriel}{#f/9}* ... and the deaths of Royal Guard members beyond that.',
                           ">{#p/toriel}{#f/5}* Mettaton's death in particular was difficult, however."
                        ]);
                     } else {
                        addB(['>{#p/toriel}{#f/5}* Learning of his death was... difficult for me.']);
                     }
                  } else if (dpapyrus) {
                     addB([">{#p/toriel}{#f/9}* As well as the death of Sans's brother, Papyrus."]);
                     if (royals < 2) {
                        addB(['>{#p/toriel}{#f/9}* ... and the deaths of most of the Royal Guard beyond that.']);
                     } else if (royals < 7) {
                        addB(['>{#p/toriel}{#f/9}* ... and the deaths of Royal Guard members beyond that.']);
                     }
                  } else if (royals < 2) {
                     addB(['>{#p/toriel}{#f/9}* As well as the deaths of the rest of the Royal Guard.']);
                  } else if (royals < 7) {
                     addB(['>{#p/toriel}{#f/9}* As well as the deaths of other Royal Guard members.']);
                  } else if (ddoggo) {
                     addB(['>{#p/toriel}{#f/9}* As well as the death of canine unit member Doggo.']);
                  } else if (dlesserdog) {
                     addB(['>{#p/toriel}{#f/9}* As well as the death of canine unit member Canis Minor.']);
                  } else if (ddogs) {
                     addB(['>{#p/toriel}{#f/9}* As well as the death of canine unit members Dogamy and Dogaressa.']);
                  } else if (dgreatdog) {
                     addB(['>{#p/toriel}{#f/9}* As well as the death of canine unit member Canis Major.']);
                  } else if (ddoge) {
                     addB(['>{#p/toriel}{#f/9}* As well as the death of ELITE squad member Doge']);
                  } else if (droyalguards) {
                     addB(['>{#p/toriel}{#f/9}* As well as the death of her new recruits, 03 and 04.']);
                  } else if (dmadjick) {
                     addB(['>{#p/toriel}{#f/9}* As well as the death of ELITE squad member Cozmo.']);
                  } else if (dknightknight) {
                     addB(['>{#p/toriel}{#f/9}* As well as the death of ELITE squad member Terrestria.']);
                  } else if (mdeaths > 9) {
                     addB(['>{#p/toriel}{#f/9}* As well as the deaths of many other monsters.']);
                  } else if (mdeaths > 2) {
                     addB(['>{#p/toriel}{#f/9}* As well as the deaths of other monsters.']);
                  } else {
                     addB(['>{#p/toriel}{#f/9}* As well as the death of one other monster.']);
                  }
                  if (dmettaton) {
                     addB([
                        '>{#p/toriel}{#f/1}* I had believed he could simply be repaired...',
                        '>{#p/toriel}{#f/1}* And that everyone else had been mistaken.',
                        '>{#p/toriel}{#f/5}* But that was not the case, and I was wrong to think otherwise.'
                     ]);
                  } else {
                     addB([
                        '>{#p/toriel}{#f/5}* I only have my own cowardice to blame, however.',
                        '>{#p/toriel}{#f/1}* If I had simply possessed the courage to leave sooner...'
                     ]);
                     if (hkills === 0) {
                        addB([
                           '>{#p/toriel}{#f/5}* I could have gone with you and pointed you in the right direction.'
                        ]);
                     } else {
                        addB([
                           '>{#p/toriel}{#f/5}* I could have gone with you and encouraged a more peaceful path.'
                        ]);
                     }
                  }
                  addB([
                     '>{#p/toriel}{#f/9}* Alas, there was nothing more to be done.',
                     '>{#p/toriel}{#f/5}* As queen, I did not have time to dwell on such matters.',
                     ">{#p/toriel}{#f/9}* The humans' safety was at stake, and I would not lose them again.",
                     '>{#p/toriel}{#f/10}* My first act as queen would be to increase their protection.'
                  ]);
                  if (royals < 2) {
                     addB([
                        '>{#p/toriel}{#f/5}* Admittedly, this would be difficult, given the lack of a Royal Guard.'
                     ]);
                  } else {
                     addB([
                        '>{#p/toriel}{#f/5}* Admittedly, I was out of practice in handling these sorts of matters.'
                     ]);
                  }
                  addB([
                     '>{#p/toriel}{#f/1}* But with the help of an old friend, Gerson, and his contacts...',
                     '>{#p/toriel}{#f/1}* I was able to arrange a minimal security detail here in the Citadel.',
                     '>{#p/toriel}{#f/0}* It is not much, but the humans and their secret are safer now.',
                     '>{#p/toriel}{#f/1}* ...',
                     '>{#p/toriel}{#f/1}* Since then, life has carried on as usual...'
                  ]);
                  if (royals < 2) {
                     addB(['>{#p/toriel}{#f/5}* Despite the loss of the king, and Royal Guard as a whole...']);
                  } else {
                     addB(['>{#p/toriel}{#f/5}* Despite the loss of the king, and former Royal Guard captain...']);
                  }
                  addB([
                     '>{#p/toriel}{#f/1}* The people still have hope for their freedom.',
                     '>{#p/toriel}{#f/5}* Hope that... I will deliver it to them.',
                     '>{#p/toriel}{#f/9}* ...',
                     '>{#p/toriel}{#f/9}* In a way, I understand what ASGORE must have been going through now.',
                     '>{#p/toriel}{#f/10}* The weight of such outrageous demands being made of me...',
                     '>{#p/toriel}{#f/9}* ... it is changing who I am as a person.',
                     '>{#p/toriel}{#f/5}* Earlier today, in fact.'
                  ]);
                  if (dpapyrus) {
                     addB([
                        '>{#p/toriel}{#f/5}* When Sans came to reminisce about his brother, I...',
                        '>{#p/toriel}{#f/9}* I declined out of a desire to be left alone.',
                        '>{#p/toriel}{#f/1}* He shrugged, and walked off like nothing was wrong...',
                        '>{#p/toriel}{#f/5}* But I knew he must have been disappointed.'
                     ]);
                  } else {
                     addB([
                        '>{#p/toriel}{#f/5}* When Papyrus came to reminisce about Undyne, I...',
                        '>{#p/toriel}{#f/9}* I declined out of a desire to be left alone.',
                        '>{#p/toriel}{#f/1}* He tried to act like nothing was wrong...',
                        '>{#p/toriel}{#f/5}* But I knew he was probably upset.'
                     ]);
                  }
                  addB([
                     '>{#p/toriel}{#f/9}* ... I felt guilty, but with all this pressure bearing down on me...',
                     '>{#p/toriel}{#f/5}* I did not see myself having the energy to discuss such a topic.',
                     '>{#p/toriel}{#f/5}* ...',
                     '>{#p/toriel}{#f/1}* Still.\n* I have not given up on our future.',
                     '>{#p/toriel}{#f/1}* No matter what happens to me, or my own well-being...',
                     '>{#p/toriel}{#f/0}* At least monsterkind will go free one day.',
                     '>{#p/toriel}{#f/1}* That is what matters now, is it not?',
                     '>{#p/toriel}{#f/1}* ...',
                     '>{#p/toriel}{#f/5}* ...',
                     '>{#p/toriel}{#f/9}* ... I suppose... it would be a good time to end the call now.',
                     '>{#p/toriel}{#f/9}* There is not much else for me to say.',
                     '>{#p/toriel}{#f/5}* ...',
                     '>{#p/toriel}{#f/5}* Goodbye, little one.',
                     '>{#s/equip}{#p/event}* Click...'
                  ]);
               }
            } else if (royals === 5 && !ddoggo && !dlesserdog && !ddogs && !dgreatdog && !ddoge) {
               k = 'light_dog'; // NO-TRANSLATE
               m = music.dogsong;
               // light neutral: dog council variant [canis maximus call]
               addA([
                  '>{#s/phone}{#p/event}* Ring, ring...',
                  '>{#s/bark}{#p/event}* Bark!\n{#s/bark}* Bark!',
                  '>{#p/basic}* (And yet, there is much to say!)\n* (Much to be excited for!)',
                  '>{#s/bark}{#p/event}* Bark!',
                  ">{#p/basic}* (Wouldn't you like to know more!?)"
               ]);
               addB([
                  '>{#s/bark}{#p/event}* Bark!\n{#s/bark}* Bark!\n{#s/bark}* Bark!',
                  '>{#p/basic}* (When you left, the king was nowhere to be found!)',
                  '>{#p/basic}* (Everyone, confused!)\n* (Alphys, unable to take his place!)',
                  '>{#s/bark}{#p/event}* Bark!\n{#s/bark}* Bark!\n{#s/bark}* Bark!',
                  '>{#p/basic}* (But she spoke to all of Royal Guard.)\n* (Guard came to an agreement!)',
                  '>{#p/basic}* (Doge returned to duty, only this time as queen of the outpost.)',
                  '>{#s/bark}{#p/event}* Bark!\n{#s/bark}* Bark!\n{#s/bark}* Bark!',
                  '>{#p/basic}* (It was fun to see the other dogs in agreement.)',
                  '>{#p/basic}* (A feeling of pride unlike any other!)',
                  '>{#p/basic}* (Of course, their old master taught them all they know.)',
                  '>{#s/bark}{#p/event}* Bark!\n{#s/bark}* Bark!',
                  '>{#p/basic}* (In the end, they formed the council of dogs to make all decisions.)',
                  '>{#p/basic}* (Everyone gets belly rubs and treats for their hard work!)',
                  ">{#p/basic}* Huh?\n* Who's there?\n* Did I see someone MOVE!?",
                  '>{#s/bark}{#p/event}* Bark!',
                  ">{#p/basic}* Oh, it's just you.",
                  '>{#p/basic}* ...',
                  '>{#p/basic}* Wait, who are you talking to!?',
                  '>{#s/bark}{#p/event}* Bark!\n{#s/bark}* Bark!',
                  '>{#p/basic}* (Doggo wants to talk to you.)\n* (Good luck!)',
                  '>{#p/basic}* Give me that thing!',
                  ">{#p/basic}* ...\n* So it's you, huh?"
               ]);
               if (
                  SAVE.data.n.state_starton_doggo === 0 &&
                  SAVE.data.n.state_starton_lesserdog === 0 &&
                  SAVE.data.n.state_starton_dogs === 0 &&
                  SAVE.data.n.state_starton_greatdog === 0
               ) {
                  if (SAVE.data.n.state_foundry_doge === 2) {
                     addB([
                        ">{#p/basic}* You're the one who thought it'd be funny to pet us all!",
                        ">{#p/basic}* Not that... I'm complaining.",
                        ">{#p/basic}* But... argh!\n* I couldn't even see you!",
                        '>{#p/basic}* That was so unfair.'
                     ]);
                  } else {
                     addB([
                        ">{#p/basic}* You're the one who thought it'd be funny to pet us all!",
                        ">{#p/basic}* Except for Doge.\n* She's really hard to pet.",
                        ">{#p/basic}* But... argh!\n* I couldn't even see you!",
                        '>{#p/basic}* I wonder what her secret is...'
                     ]);
                  }
               } else if (
                  SAVE.data.n.state_starton_doggo === 1 &&
                  SAVE.data.n.state_starton_lesserdog === 1 &&
                  SAVE.data.n.state_starton_dogs === 1 &&
                  SAVE.data.n.state_starton_greatdog === 1
               ) {
                  addB([
                     ">{#p/basic}* You're the one who thought you could get past us by throwing a wrench around.",
                     '>{#p/basic}* I mean, OK, it worked.',
                     '>{#p/basic}* But it was really annoying when I found out!',
                     '>{#p/basic}* Maybe...',
                     '>{#p/basic}* ... we can play again sometime?',
                     ">{#p/basic}* No, no, forget I said that.\n* I shouldn't indulge in my fantasies this much."
                  ]);
               } else if (
                  SAVE.data.n.state_starton_doggo === 3 &&
                  SAVE.data.n.state_starton_lesserdog === 3 &&
                  SAVE.data.n.state_starton_dogs === 3
               ) {
                  if (SAVE.data.n.state_starton_greatdog === 3) {
                     addB([
                        ">{#p/basic}* You're the one who tried to beat us all up!",
                        '>{#p/basic}* You even managed to disappoint Canis Major...',
                        ">{#p/basic}* What's wrong with you!?\n* You're awful!",
                        ">{#p/basic}* ... that's what the others would say."
                     ]);
                  } else {
                     addB([
                        ">{#p/basic}* You're the one who tried to beat us all up!",
                        '>{#p/basic}* At least you made Canis Major happy.',
                        ">{#p/basic}* So, maybe you're not all bad?",
                        ">{#p/basic}* ... to be honest, I didn't mind it..."
                     ]);
                  }
               } else if (SAVE.data.n.state_starton_doggo === 0) {
                  addB([
                     ">{#p/basic}* You're the one who pet me when I couldn't even see you!",
                     '>{#p/basic}* I bet you thought that was really funny.',
                     '>{#p/basic}* I bet I looked really cute.',
                     ">{#p/basic}* ... no, wait, I didn't mean that!"
                  ]);
               } else if (SAVE.data.n.state_starton_doggo === 1) {
                  addB([
                     ">{#p/basic}* You're the one who played fetch with me, right?",
                     ">{#p/basic}* Wow!\n* I'd love to do that again sometime.",
                     ">{#p/basic}* But... that's just a fantasy."
                  ]);
               } else {
                  addB([
                     ">{#p/basic}* You're the one who tried to beat me up!",
                     '>{#p/basic}* That was really rude.\n* And mean.',
                     ">{#p/basic}* I definitely didn't like that.",
                     '>{#p/basic}* ...'
                  ]);
               }
               addB([
                  '>{#p/basic}* Anyway!\n* Did you hear about the humans we released!?',
                  ">{#p/basic}* They were all asleep in some weird archive thing.\n* It's way above my paw grade.",
                  '>{#p/basic}* All I know is, I get to take care of a human!',
                  ">{#p/basic}* It was Doge's idea.\n* We all get one human each.",
                  ">{#p/basic}* They're like pets???",
                  ">{#p/basic}* Don't worry, we don't mistreat them.\n* They're under our protection!",
                  '>{#p/basic}* Which is weird... since we were like, trying to hunt them down before or something.'
               ]);
               if (royals < 6 || mdeaths > 9) {
                  addB([
                     '>{#p/basic}* Still, they kind of have to be.',
                     '>{#p/basic}* People REALLY seem to dislike humans these days.'
                  ]);
               } else {
                  addB(['>{#p/basic}* But times change.\n* And so must we!']);
               }
               addB([
                  '>{#p/basic}* Hey, WAIT!!\n* My human is coming this way RIGHT NOW!!',
                  '>{#p/human}{#v/3}{@fill=#003cff}* Master Doggo!\n* Master Doggo!\n* You have to come and see!',
                  '>{#p/basic}* What is it now.',
                  ">{#p/human}{#v/3}{@fill=#003cff}* You're going to miss the grand opening!",
                  '>{#p/basic}* Guess I better go see what this is...',
                  '>{#p/basic}* ...',
                  '>{#s/bark}{#p/event}* Bark!\n{#s/bark}* Bark!\n{#s/bark}* Bark!',
                  ">{#p/basic}* I get it, OK!?\n* Heck, I'm almost there!",
                  '>{#p/basic}* ...',
                  '>{#p/basic}* What the...\n* WHAT IS THAT THING!?',
                  ">{#p/basic}* THAT WASN'T PART OF THE CITY'S SKYLINE BEFORE!!",
                  ">{#p/human}{#v/3}{@fill=#003cff}* It's your brand new dog shrine!\n* Just like you wanted!",
                  ">{#p/basic}* It's... in constant motion...",
                  '>{#p/basic}* WELL THIS IS SOMETHING!',
                  '>{#s/bark}{#p/event}* Bark!\n{#s/bark}* Bark!\n{#s/bark}* Bark!'
               ]);
               if (30 <= SAVE.data.n.bully) {
                  addB([
                     '>{#p/basic}* (Shrines, good for peace!)\n* (Help relieve fears of being attacked by humans!)',
                     '>{#p/basic}* (A reminder of the stability the new regime offers you, dog or otherwise!)'
                  ]);
               } else {
                  addB([
                     '>{#p/basic}* (Shrines, good for peace!)\n* (Encourage good behavior in all citizens!)',
                     '>{#p/basic}* (A reminder of the blessings you may receive for being good, dog or otherwise!)'
                  ]);
               }
               addB([
                  '>{#p/basic}* Yes, yes, I know.\n* It looks great... looks just like me.',
                  '>{#p/basic}* ... thanks.',
                  '>{#s/bark}{#p/event}* Bark!\n{#s/bark}* Bark!',
                  ">{#p/basic}* (And that's the last one!)\n* (All council dogs have shrines now!)",
                  '>{#p/basic}* PERFECT!!\n* Can I go back to my phone call now?',
                  '>{#s/bark}{#p/event}* Bark!',
                  ">{#p/human}{#v/3}{@fill=#003cff}* I'll have to show the others!",
                  '>{#p/basic}* HEY!\n* Before you go...',
                  ">{#p/basic}* I wouldn't have seen it on time without you.\n* Have a treat.",
                  '>{#p/human}{#v/3}{@fill=#003cff}* Master Doggo...!',
                  ">{#p/basic}* Go on, tell your friends.\n* BUT DON'T SHARE!",
                  '>{#p/basic}* ...',
                  '>{#p/basic}* So, around here, everyone understands how things work.',
                  '>{#p/basic}* You visit the shrine, do a good job at work, and be good at home, too.',
                  ">{#p/basic}* And maybe, if you're really really good, you'll get rewarded!",
                  ">{#p/basic}* It's perfect.\n* Nobody breaks the rules.",
                  '>{#p/basic}* Except those pesky shopkeepers at the rec center.',
                  ">{#p/basic}* THEY'RE JUST LAZY AND DISORGANIZED!",
                  '>{#p/basic}* But they sell cool junk, so we give them a pass.',
                  '>{#p/basic}* Hold on.\n* Are we giving anyone else a pass??',
                  '>{#p/basic}* WHAT HAS OUR SOCIETY COME TO!',
                  '>{#s/bark}{#p/event}* Bark!\n{#s/bark}* Bark!\n{#s/bark}* Bark!'
               ]);
               if (!dmuffet) {
                  addB([
                     '>{#p/basic}* (Doggo, new job for you!)\n* (Spider queen, stirring up trouble again.)',
                     '>{#p/basic}* (A punishment is required!)',
                     ">{#p/basic}* ... ugh.\n* I don't like disciplining people.",
                     '>{#s/bark}{#p/event}* Bark!',
                     '>{#p/basic}* (Without discipline, dog society falls out of balance.)',
                     ">{#p/basic}* I guess.\n* But can't someone else do it?",
                     '>{#s/bark}{#p/event}* Bark!\n{#s/bark}* Bark!',
                     ">{#p/basic}* (All council dogs must practice discipline.)\n* (It's your turn!)"
                  ]);
               } else if (!dpapyrus) {
                  addB([
                     '>{#p/basic}* (Doggo, new job for you!)\n* (Tall skeleton, deserving of bonus rewards.)',
                     '>{#p/basic}* (Offer them to him!)',
                     '>{#p/basic}* ... ugh.\n* I swear we give him bonus rewards every day.',
                     '>{#s/bark}{#p/event}* Bark!',
                     '>{#p/basic}* (Tall skeleton sets a very good example!)',
                     ">{#p/basic}* At this rate, he'll be on the dog council himself.",
                     '>{#s/bark}{#p/event}* Bark!\n{#s/bark}* Bark!',
                     '>{#p/basic}* (We are considering the possibility.)\n* (Now do your duty!)'
                  ]);
               } else {
                  addB([
                     '>{#p/basic}* (Doggo, new job for you!)\n* (Supplies of dog chow are running low.)',
                     '>{#p/basic}* (Can you help refill?)',
                     '>{#p/basic}* ... ugh.\n* Why do I get all the dirty work around here.',
                     '>{#s/bark}{#p/event}* Bark!',
                     ">{#p/basic}* (Doggo, only dog who doesn't mind dirty work.)",
                     '>{#p/basic}* Lies.\n* Doge likes doing dirty jobs way more than me.',
                     '>{#s/bark}{#p/event}* Bark!\n{#s/bark}* Bark!',
                     '>{#p/basic}* (Doge cannot do this job.)\n* (Doge is queen.)'
                  ]);
               }
               addB([
                  '>{#p/basic}* OK.\n* Fine.',
                  ">{#p/basic}* Well, I guess I'll have to end the message here.",
                  '>{#p/basic}* Have fun out there, wherever you are.',
                  ">{#p/basic}* ... I'd give the phone back to that annoying dog, but the message would never end.",
                  '>{#p/basic}* HOW CAN YOU TALK FOR SO LONG WITHOUT GETTING TIRED!?',
                  '>{#s/bark}{#p/event}* Bark!\n{#s/bark}* Bark!\n{#s/bark}* Bark!',
                  '>{#p/basic}* OK already!\n* Quit rushing me!!',
                  '>{#s/equip}{#p/event}* Click...'
               ]);
            } else if (!dmuffet) {
               k = 'light_muffet'; // NO-TRANSLATE
               m = music.spiderboss;
               // light neutral: spider queen variant [muffet call]
               addA([
                  '>{#s/phone}{#p/event}* Ring, ring...',
                  '>{#p/basic}{#s/spiderLaugh}* Oh, hello, dearie~',
                  '>{#p/basic}* Are you doing well?',
                  ">{#p/basic}* Oh, who am I kidding~\n* It's not like I cared about you anyway~",
                  ">{#p/basic}* I just wanted to let you know about all the fun you're missing out on!"
               ]);
               addB([
                  '>{#p/basic}{#s/spiderLaugh}* So, after you departed from the outpost...',
                  '>{#p/basic}* By line of succession, Alphys was put in charge as queen~',
                  ">{#p/basic}* But you see, dearie, she didn't think she could do it!"
               ]);
               if (dmettaton) {
                  addB([">{#p/basic}* Don't blame her though~\n* She let her pet TV star die such a tragic death!"]);
               } else {
                  addB([
                     ">{#p/basic}* Don't blame her though~\n* Without big boy Asgore to hold her hand, she was helpless!"
                  ]);
               }
               if (royals < 2) {
                  addB([
                     ">{#p/basic}* It's so unfortunate there was nobody left to take charge, don't you think?",
                     '>{#p/basic}* Lucky for her, I was more than willing to appoint myself~',
                     '>{#p/basic}* Ahuhuhu~\n* She rejected me at first, but after a little "persuasion..."',
                     '>{#p/basic}* She was quite eager to hand the outpost over to me!'
                  ]);
               } else {
                  addB([
                     '>{#p/basic}* She held a meeting with the royal guards to hire someone else, but...',
                     ">{#p/basic}* Without their captain, they'd fallen into disorder!\n* They needed direction~",
                     '>{#p/basic}* Ahuhuhu~\n* Thankfully, I was more than willing to give it to them!',
                     '>{#p/basic}* And from there, the outpost was all but mine.'
                  ]);
               }
               if (30 <= SAVE.data.n.bully) {
                  if (hkills > 9) {
                     addB([
                        '>{#p/basic}* With your killing and bullying, the people were made so afraid and obedient~'
                     ]);
                  } else {
                     addB(['>{#p/basic}* With your bullying, the people were made so afraid and obedient~']);
                  }
                  addB([
                     '>{#p/basic}* Like they were just begging for a strong, assertive leader to take her rightful place!',
                     ">{#p/basic}* It's incredible just how quickly they all came around.",
                     '>{#p/basic}* For that, dearie, I have you to thank~',
                     '>{#p/alphys}{#f/21}* Oh, come ON.\n* You think you can just blame it all on THEM?'
                  ]);
               } else {
                  addB([
                     ">{#p/basic}* Oh, dearie...\n* It's a shame you're not here to see this~",
                     '>{#p/basic}* Not only do the people do whatever I want, whenever I want...',
                     '>{#p/basic}* But some of them even do it willingly!',
                     '>{#p/basic}* Most of them still whine and complain like babies, though.',
                     '>{#p/alphys}{#f/21}* Well GEE, I wonder why THAT might be.'
                  ]);
               }
               addB([
                  ">{#p/basic}{#s/spiderLaugh}* Oh, Alphys-dear~\n* Didn't I tell you to clean out the fluid network today?",
                  ">{#p/basic}* It's gotten so dirty after all these years...",
                  ">{#p/basic}* If you don't clean it, then who will?"
               ]);
               if (royals < 2) {
                  addB([
                     ">{#p/alphys}{#f/22}* I DON'T KNOW, MAYBE SOMEONE WHO'S ACTUALLY QUALIFIED!?",
                     ">{#p/basic}{#s/spiderLaugh}* Oh, you ARE such a pest, aren't you~",
                     ">{#p/basic}* But... ahuhuhu~\n* You know what happens to pests, don't you?",
                     '>{#p/alphys}{#f/2}* ... n-no, please, I...',
                     ">{#p/alphys}{#f/3}* I-I'll do it!\n* You just watch me, I'll do it right now!",
                     '>{#p/basic}{#s/spiderLaugh}* Too late, Alphys-dear~',
                     '>{#p/basic}* Spiders, take her away!',
                     '>{#p/basic}* It would seem she needs another stay in the Aurora Zone~',
                     ">{#p/alphys}{#f/22}* No, PLEASE!!\n* I'LL DO ANYTHING!!",
                     '>{#p/basic}{#s/spiderLaugh}* See you on the other side~'
                  ]);
               } else {
                  addB([
                     ">{#p/alphys}{#f/24}* Maybe you'd like to try.",
                     ">{#p/basic}{#s/spiderLaugh}* Oh, but you know that'll never happen~",
                     ">{#p/basic}* And... ahuhuhu~\n* Talk like that is what gets you in trouble, I'm afraid~",
                     '>{#p/alphys}{#f/27}* Oh, does it now?',
                     ">{#p/alphys}{#f/28}* Eheh...\n* Maybe you'll be the one who's in trouble soon.",
                     '>{#p/basic}{#s/spiderLaugh}* Enough talk, Alphys-dear~\n* I know exactly what kind of punishment you deserve!',
                     '>{#p/basic}* Spiders, take her away!',
                     '>{#p/basic}* It would seem she needs another stay in the Aurora Zone~',
                     '>{#p/alphys}{#f/29}* Enjoy your last moments in power.',
                     ">{#p/basic}{#s/spiderLaugh}* Like I'd fall for that~"
                  ]);
               }
               addB([
                  '>{#p/basic}* ...',
                  '>{#p/basic}* Ahuhuhu~\n* Poor Alphys-dear, always getting into trouble~',
                  ">{#p/basic}* It's a good thing we have the Aurora Zone to straighten out her behavior!",
                  '>{#p/basic}* With the power of the archive, we can send a monster into a virtual world~',
                  '>{#p/basic}* Best of all, we control how time passes there~',
                  '>{#p/basic}* Days, months, years...',
                  '>{#p/basic}* All going by in the blink of an eye!',
                  '>{#p/basic}* We spiders LOVE to make them suffer for a long time when they misbehave!'
               ]);
               if (dmettaton) {
                  addB([
                     '>{#p/napstablook}* sorry to interrupt...',
                     ">{#p/napstablook}* i just came to let you know that i've done what you wanted me to......",
                     '>{#p/basic}{#s/spiderLaugh}* Ahuhuhu~\n* Very good, my little ghost-munchkin~',
                     '>{#p/basic}* Have you found and identified each target on my list?',
                     '>{#p/napstablook}* of course......\n* i wrote down their locations as best i could',
                     ">{#p/basic}{#s/spiderLaugh}* Oh, wonderful!\n* You're really such a good and loyal spy, aren't you~",
                     '>{#p/napstablook}* .........',
                     '>{#p/napstablook}* i guess.........',
                     ">{#p/napstablook}* it'd just be nice if... i knew what you were going to do with these people.........",
                     ">{#p/basic}{#s/spiderLaugh}* Your poor thing~\n* You don't need to concern yourself with that!",
                     '>{#p/basic}* Rest assured, everyone will get what they deserve in the end~',
                     '>{#p/napstablook}* ...',
                     ">{#p/napstablook}* i'd like to go rest now, it's been a long day",
                     '>{#p/basic}{#s/spiderLaugh}* Of course, my little ghost-munchkin~',
                     '>{#p/basic}* Just be sure to show up on time tomorrow~'
                  ]);
                  if (royals < 2) {
                     addB([
                        '>{#p/napstablook}* ...',
                        '>{#p/napstablook}* will do',
                        ">{#p/basic}{#s/spiderLaugh}* ... as you can see, there's no citizen alive who can hide from my loyal spies!"
                     ]);
                  } else {
                     addB(['>{#p/napstablook}* ...', ">{#p/napstablook}* it's now or never, alphys!"]);
                  }
               } else {
                  addB([
                     '>{#p/mettaton}* YOU DONE BOASTING ABOUT YOUR ACCOMPLISHMENTS YET?',
                     ">{#p/mettaton}* I'M HERE, JUST AS REQUESTED.",
                     ">{#p/basic}{#s/spiderLaugh}* Ahuhuhu~\n* Just the robot I've been wanting to see!",
                     '>{#p/basic}* So would you say audiences are enjoying the new TV lineup?',
                     '>{#p/mettaton}* THE RATINGS ARE TERRIBLE.\n* NOBODY LIKES IT.',
                     '>{#p/basic}{#s/spiderLaugh}* Oh, wonderful!\n* Like music to my ears~',
                     '>{#p/mettaton}* YOU KNOW...'
                  ]);
                  if (iFancyYourVilliany()) {
                     addB(['>{#p/mettaton}* PEOPLE WANT VILLAINS, AND SOMEBODY TO ROOT AGAINST.']);
                  } else {
                     addB(['>{#p/mettaton}* PEOPLE WANT VARIETY, AND FAMOUS GUEST ROLES.']);
                  }
                  addB([
                     ">{#p/mettaton}* NOT THE UTTER GARBAGE -YOU'RE- PUSHING ON EVERYONE.",
                     ">{#p/basic}{#s/spiderLaugh}* The point isn't to give people what they want...",
                     ">{#p/basic}* It's to dull their minds until they can't refuse me anymore~",
                     '>{#p/mettaton}* ... UGH, CAN I GO NOW?'
                  ]);
                  if (dpapyrus) {
                     addB([
                        ">{#p/mettaton}* I'M EXHAUSTED ENOUGH AS IT IS.",
                        '>{#p/basic}{#s/spiderLaugh}* Sure thing, darling-dear~',
                        ">{#p/basic}* Just remember why you're doing this for me~"
                     ]);
                  } else {
                     addB([
                        '>{#p/mettaton}* PAPYRUS IS STILL OUT THERE WAITING FOR ME.',
                        '>{#p/basic}{#s/spiderLaugh}* Is he now?',
                        ">{#p/mettaton}* WE'RE TRYING OUT A NEW TV SHOW.\n* A SPIDER BAKERY SHOW.",
                        '>{#p/basic}{#s/spiderLaugh}* A bakery show, you say~',
                        '>{#p/basic}* Hmm...',
                        ">{#p/basic}* Well, as long as the audiences can't stand it!"
                     ]);
                  }
                  if (royals < 2) {
                     addB([
                        '>{#p/mettaton}* ...',
                        '>{#p/mettaton}* GOODBYE.',
                        '>{#p/basic}{#s/spiderLaugh}* ... as you can see, I have complete control of the entertainment here, too!'
                     ]);
                  } else {
                     addB(['>{#p/mettaton}* ...', ">{#p/mettaton}* NOW, ALPHYS!\n* NOW'S YOUR CHANCE!"]);
                  }
               }
               if (royals < 2) {
                  addB([
                     ">{#p/basic}* Isn't it just blissful?",
                     ">{#p/basic}* Ahuhuhu~\n* I so badly want to see how you'd fare here~",
                     '>{#p/basic}* The other humans have been doing splendidly!',
                     '>{#p/basic}* In fact, despite them being traumatized when they first left the archive...',
                     ">{#p/basic}* They've become my most loyal servants!",
                     '>{#p/basic}* Oh, dearie...\n* You must be so lonely without a direction in life~',
                     ">{#p/basic}* If it ever becomes too much, you're always welcome here with us!",
                     ">{#p/basic}* But for now~\n* I'll be seeing you~",
                     '>{#p/basic}* On the other side~',
                     '>{#s/equip}{#p/event}* Click...'
                  ]);
               } else {
                  addB([
                     '>{#p/basic}* Ahuhuhu~\n* What are you- hngh!',
                     '>{#p/alphys}{#f/28}* Well, well...\n* Look who we have here.',
                     '>{#p/basic}{#s/spiderLaugh}* No, let me go...!',
                     ">{#p/basic}* You royal guards... y-you're all the same!",
                     ">{#p/basic}* You need a strong leader who can tell you what's right and what's wrong!",
                     ">{#p/alphys}{#f/29}* It's no use.\n* They've chosen ME as their leader now.",
                     '>{#p/basic}{#s/spiderLaugh}* But... how?',
                     '>{#p/basic}* I had you in custody, the spiders had you under escort~',
                     ">{#p/basic}* And you...\n* You're supposed to be weak!",
                     ">{#p/basic}* You couldn't hope to command the Royal Guard~",
                     ">{#p/alphys}{#f/17}* Y'know, I've learned a lot since you took over the outpost.",
                     ">{#p/alphys}{#f/5}* Everything you've done to make all our lives miserable...",
                     '>{#p/alphys}{#f/16}* Surviving it only made me more determined to stop you!',
                     ">{#p/alphys}{#f/7}* God, I've always wanted to say that...",
                     ">{#p/basic}{#s/spiderLaugh}* No... no!\n* You can't do this to me!",
                     '>{#p/alphys}{#f/27}* Guards...?',
                     '>{#p/basic}{#s/spiderLaugh}* No~\n* Please!',
                     ">{#p/alphys}{#f/29}* Let's see how SHE likes the Aurora Zone.",
                     '>{#p/alphys}{#f/27}* ...',
                     ">{#p/alphys}{#f/27}* Huh... what's this?",
                     '>{#p/alphys}{#f/27}* Was she... talking to someone on this thing?',
                     '>{#p/alphys}{#f/17}* Weird.',
                     '>{#s/equip}{#p/event}* Click...'
                  ]);
               }
            } else if (!dpapyrus) {
               k = 'light_papyrus'; // NO-TRANSLATE
               m = music.papyrus;
               // light neutral: king papyrus variant [papyrus call]
               addA([
                  '>{#s/phone}{#p/event}* Ring, ring...',
                  '>{#p/papyrus}{#f/4}IS THIS THING EVEN WORKING?',
                  '>{#p/papyrus}{#f/0}OH! OH!\nIT JUST WENT TO VOICE-MAIL!',
                  '>{#p/papyrus}{#f/6}NO WONDER I WAS SO CONFUSED!',
                  '>{#p/papyrus}{#f/5}WELL HELLO, HUMAN!\nI HAVE... A LOT TO TALK ABOUT.'
               ]);
               addB([
                  '>{#p/papyrus}{#f/4}SO... I KIND OF BECAME THE KING.',
                  ">{#p/papyrus}{#f/6}WAIT!!\nDON'T CLICK OFF!!",
                  ">{#p/papyrus}{#f/5}IT'S NOT AS CRAZY AS IT SOUNDS...",
                  ">{#p/papyrus}{#f/0}UH, I'LL JUST START FROM THE BEGINNING.",
                  '>{#p/papyrus}{#f/5}SO, AFTER YOU LEFT...',
                  ">{#p/papyrus}{#f/5}THE OUTPOST'S LEADERSHIP KIND OF FELL APART.",
                  ">{#p/papyrus}{#f/6}ALPHYS, WHO WAS MEANT TO TAKE ASGORE'S PLACE...",
                  ">{#p/papyrus}{#f/5}DIDN'T REALLY WANT TO BE THE QUEEN.",
                  ">{#p/papyrus}{#f/5}AND SINCE UNDYNE STILL HASN'T RE-APPEARED...",
                  '>{#p/papyrus}{#f/4}ALPHYS HAD TO HOLD A MEETING TO FIND A NEW LEADER.'
               ]);
               if (royals < 2) {
                  addB([
                     '>{#p/papyrus}{#f/4}UNFORTUNATELY, THE ROYAL GUARD WAS ALL BUT GONE.',
                     '>{#p/papyrus}{#f/5}SO... THAT MEETING NEVER HAPPENED.'
                  ]);
               } else {
                  addB([
                     '>{#p/papyrus}{#f/4}THE ROYAL GUARD ARGUED, AND ARGUED SOME MORE...',
                     ">{#p/papyrus}{#f/5}BUT NOBODY AGREED ON WHO'D BE THE BEST FIT."
                  ]);
               }
               addB([
                  '>{#p/papyrus}{#f/6}AFTER THAT, ALPHYS JUST SORT OF... LEFT.',
                  '>{#p/papyrus}{#f/6}LEFT US WITH NOBODY IN CHARGE, THAT IS.',
                  '>{#p/papyrus}{#f/5}AND FOR A WHILE...',
                  '>{#p/papyrus}{#f/6}THINGS WERE... SURPRISINGLY CALM!',
                  ">{#p/papyrus}{#f/0}BUT I KNEW THAT WOULDN'T LAST.",
                  '>{#p/papyrus}{#f/4}SO, EVENTUALLY...',
                  '>{#p/papyrus}{#f/9}I TOOK MATTERS INTO MY OWN HANDS!',
                  '>{#p/papyrus}{#f/5}YOU CAN GUESS HOW I BECAME THE KING FROM THERE.',
                  '>{#p/papyrus}{#f/0}BUT HEY!\nTHINGS HAVE BEEN GOING WELL!',
                  ">{#p/papyrus}{#f/0}I'VE ENSTATED A FEW POLICIES TO HELP MAKE FRIENDS.",
                  '>{#p/papyrus}{#f/4}NOT JUST -MY- FRIENDS...',
                  ">{#p/papyrus}{#f/0}BUT EVERYONE ELSE'S FRIENDS, TOO!",
                  '>{#p/papyrus}{#f/9}AS A RESULT, OUTPOST MORALE IS ON THE RISE!',
                  '>{#p/papyrus}{#f/4}AND ONCE OUR FRIENDSHIP POWER REACHES CRITICAL...',
                  ">{#p/papyrus}{#f/9}I'LL EVEN BE ABLE TO RELEASE THE HUMANS!",
                  '>{#p/papyrus}{#f/0}HOPEFULLY WITH ONLY MINIMAL RIOTING.',
                  ">{#p/sans}{#f/0}* heh.\n* that'll be nice.",
                  '>{#p/sans}{#f/3}* people have been clinging to their anger for too long.',
                  ">{#p/papyrus}{#f/0}OH, HELLO SANS!\nI'M HAPPY TO SEE YOU UP AND ABOUT.",
                  '>{#p/sans}{#f/0}* actually, i just got off from work.',
                  ">{#p/sans}{#f/3}* it's a holiday today.",
                  '>{#p/papyrus}{#f/4}A HOLIDAY, EH?',
                  '>{#p/papyrus}{#f/5}(SIGH...)',
                  ">{#p/papyrus}{#f/5}EVER SINCE YOU STARTED WORKING AT GRILLBY'S...",
                  ">{#p/papyrus}{#f/4}THEY'VE BEEN GIVING YOU MORE OF THOSE THINGS.",
                  ">{#p/sans}{#f/3}* nah, don't worry.\n* you'll like this one...",
                  '>{#p/sans}{#f/2}* it\'s the new semi- annual "get-along day."',
                  '>{#p/papyrus}{#f/1}OH!!! RIGHT!!!\nI TOTALLY FORGOT I ENSTATED THAT!!!',
                  '>{#p/papyrus}{#f/0}THE DAY WHERE ALL YOUR ENEMIES TURN TO FRIENDS.',
                  '>{#p/papyrus}{#f/4}SO DID YOU MAKE ANY "FRENEMIES" TODAY???',
                  '>{#p/sans}{#f/0}* hmm...',
                  ">{#p/sans}{#f/3}* that'd require having enemies to begin with.",
                  '>{#p/papyrus}{#f/5}WELL... UH...',
                  '>{#p/papyrus}{#f/6}YOU CAN JUST BETTER AN EXISTING FRIENDSHIP THEN!',
                  '>{#p/sans}{#f/2}* well, all my friendships are already pretty good.',
                  ">{#p/sans}{#f/3}* ... guess this just isn't my holiday.",
                  ">{#p/papyrus}{#f/0}OH.\nTHAT'S OKAY.",
                  '>{#p/papyrus}{#f/9}"NEW PALS DAY" IS RIGHT AROUND THE CORNER!',
                  '>{#p/sans}{#f/0}* lemme guess... the day where you make even MORE friends?',
                  '>{#p/papyrus}{#f/0}NYEH HEH HEH!\nOF COURSE!',
                  '>{#p/sans}{#f/0}* i look forward to it, then.',
                  '>{#p/sans}{#f/3}* ...',
                  ">{#p/sans}{#f/3}* y'know, buddo... when you first left the outpost...",
                  ">{#p/sans}{#f/0}* things weren't as rosy as they are now.",
                  '>{#p/sans}{#f/3}* people blamed each other for letting it all happen...',
                  '>{#p/sans}{#f/3}* for what you did to them...',
                  '>{#p/sans}{#f/0}* but, over time, my brother really turned things around.'
               ]);
               if (royals < 2) {
                  addB([
                     '>{#p/sans}{#f/3}* heck, despite the fall of the royal guard...',
                     '>{#p/sans}{#f/0}* he still made the best of it.',
                     ">{#p/papyrus}{#f/0}YEAH!! I'M REALLY HAPPY WITH HOW I'VE DONE.",
                     '>{#p/papyrus}{#f/9}THE OUTPOST HAS NEVER BEEN BETTER!'
                  ]);
               } else {
                  addB([
                     '>{#p/sans}{#f/2}* heck, even the royal guard improved.',
                     '>{#p/papyrus}{#f/0}YEAH!! INSTEAD OF GUARDING AGAINST HUMANS...',
                     '>{#p/papyrus}{#f/9}THEY PROTECT US MONSTERS FROM SPITE AND VITRIOL!'
                  ]);
               }
               addB([
                  '>{#p/papyrus}{#f/5}...',
                  '>{#p/papyrus}{#f/5}WHATEVER YOU MAY HAVE DONE, HUMAN...',
                  '>{#p/papyrus}{#f/0}JUST KNOW THAT THINGS TURNED OUT OKAY.',
                  '>{#p/papyrus}{#f/6}AND THAT I FORGIVE YOU!!!'
               ]);
               if (world.edgy || (world.population_area('s') <= 0 && !world.bullied_area('s'))) {
                  addB(['>{#p/papyrus}{#f/5}BECAUSE, EVEN IF WE GOT OFF TO A ROUGH START...']);
               } else if (SAVE.data.n.plot_date < 1.1) {
                  if (SAVE.data.b.flirt_papyrus) {
                     addB(['>{#p/papyrus}{#f/5}BECAUSE, EVEN IF WE NEVER HAD THAT DATE...']);
                  } else {
                     addB(['>{#p/papyrus}{#f/5}BECAUSE, EVEN IF WE NEVER HUNG OUT...']);
                  }
               } else {
                  addB([">{#p/papyrus}{#f/5}BECAUSE, EVEN IF WE NEVER HUNG OUT AT UNDYNE'S..."]);
               }
               addB([
                  ">{#p/papyrus}{#f/0}I'D STILL BE HAPPY TO CALL YOU MY FRIEND.",
                  ">{#p/sans}{#f/2}* aw, that's sweet.",
                  ">{#p/sans}{#f/3}* it's too bad we won't get to hear their reaction.",
                  ">{#p/papyrus}{#f/7}YEAH, WELL, IT'S STILL WORTH SAYING!!",
                  '>{#p/papyrus}{#f/0}THE IMPORTANT THING IS THAT THEY HEARD IT.',
                  '>{#p/sans}{#f/0}* heh.\n* take care of yourself out there.',
                  ">{#p/sans}{#f/2}* 'cause at least one person's rootin' for ya.",
                  ">{#p/papyrus}{#f/0}... THAT'S ME!!!",
                  '>{#s/equip}{#p/event}* Click...'
               ]);
            } else {
               k = 'light_sans'; // NO-TRANSLATE
               m = music.papyrusLow;
               // light neutral: king sans variant [sans call]
               addA([
                  '>{#s/phone}{#p/event}* Ring, ring...',
                  '>{#p/sans}{#f/0}* heya.',
                  ">{#p/sans}{#f/3}* it's been a while, huh?"
               ]);
               addB([
                  '>{#p/sans}{#f/0}* after you left, the king vanished into thin air.',
                  '>{#p/sans}{#f/3}* why?\n* nobody knows.',
                  '>{#p/sans}{#f/2}* ... maybe he just went on vacation.',
                  '>{#p/sans}{#f/0}* anyway, alphys was supposed to replace him.',
                  ">{#p/sans}{#f/3}* but she didn't consider herself to be cut out for the job."
               ]);
               if (royals < 2) {
                  addB([
                     '>{#p/sans}{#f/0}* she thought about putting a royal guard in her place...',
                     '>{#p/sans}{#f/0}* but those guys all but vanished, too.',
                     '>{#p/sans}{#f/3}* why?\n* hard to say.',
                     '>{#p/sans}{#f/2}* ... maybe they just got bored of their jobs.'
                  ]);
               } else {
                  addB([
                     '>{#p/sans}{#f/0}* she thought about putting a royal guard in her place...',
                     ">{#p/sans}{#f/0}* but with their captain gone, they couldn't make up their minds.",
                     '>{#p/sans}{#f/3}* why?\n* hard to say.',
                     ">{#p/sans}{#f/2}* ... maybe undyne just couldn't be bothered anymore."
                  ]);
               }
               addB([
                  '>{#p/sans}{#f/0}* after that, alphys fled the citadel and left us without a leader.',
                  ">{#p/sans}{#f/3}* you'd think the former queen might return, or...",
                  '>{#p/sans}{#f/3}* maybe someone overzealous would take the throne instead.',
                  '>{#p/sans}{#f/0}* and yet, neither of those things happened.',
                  '>{#p/sans}{#f/3}* why?\n* you tell me.',
                  '>{#p/sans}{#f/2}* ... maybe all the potential leaders out there just gave up.',
                  ">{#p/sans}{#f/0}* regardless, i realized it'd be up to me to do something.",
                  '>{#p/sans}{#f/0}* so i took over for asgore and alphys myself.',
                  ">{#p/sans}{#f/3}* it hasn't been easy, what with all the leadership troubles...",
                  ">{#p/sans}{#f/3}* not to mention keeping the humans' existence a secret.",
                  '>{#p/sans}{#f/0}* but after i implemented my pro-slacker policy...',
                  '>{#p/sans}{#f/2}* people seemed to relax quite a bit.'
               ]);
               if (30 <= SAVE.data.n.bully) {
                  addB(['>{#p/sans}{#f/3}* a far cry from how scared they were of being beat up before.']);
               } else {
                  addB(['>{#p/sans}{#f/3}* a far cry from how distraught they were about asgore and undyne.']);
               }
               addB([
                  '>{#p/sans}{#f/0}* all in all, things are going pretty well.',
                  '>{#p/sans}{#f/0}* the humans are safe and sound, the citizens still have hope...',
                  ">{#p/sans}{#f/3}* so what's the catch?",
                  '>{#p/sans}{#f/0}* why does it all feel so... hopeless?',
                  ">{#p/sans}{#f/3}* well, to be honest, it's anyone's guess.",
                  '>{#p/sans}{#f/3}* ...',
                  ">{*}{#x0}{#p/darksans}{#f/1}{#i/5}* ... maybe you're just a dirty brother killer."
               ]);
            }
         } else {
            k = 'light_generic'; // NO-TRANSLATE
            // light neutral: queen terrestria variant [alphys call]
            addA([
               '>{#s/phone}{#p/event}* Ring, ring...',
               '>{#p/alphys}{#f/8}* Hiya...',
               '>{#p/alphys}{#f/6}* Is anyone there?',
               ">{#p/alphys}{#f/10}* I hope it's not too much trouble...",
               '>{#p/alphys}{#f/5}* I just wanted to let you know how things are going out here.'
            ]);
            addB([
               '>{#p/alphys}{#f/20}* So... after you left, the king sort of... d-disappeared.',
               ">{#p/alphys}{#f/14}* When I broke the news, it... hurt the people's morale pretty badly.",
               '>{#p/alphys}{#f/10}* Technically, as royal scientist, I was meant to replace him, but...',
               ">{#p/alphys}{#f/11}* I didn't really feel like I'd be the best fit for the job.",
               '>{#p/alphys}{#f/5}* Well, I had a talk with some of the royal guards, and...',
               '>{#p/alphys}{#f/6}* We agreed Terrestria should be appointed as the queen instead.',
               '>{#p/alphys}{#f/15}* Her first action was a little controversial, though...',
               '>{#p/alphys}{#f/17}* Cutting the Royal Guard in half and loosening its policies.'
            ]);
            if (SAVE.data.b.undyne_respecc) {
               addB([
                  ">{#p/alphys}{#f/26}* Undyne wasn't happy about it at first, but...",
                  '>{#p/alphys}{#f/8}* She came around to it in the end.',
                  '>{#p/alphys}{#f/27}* Apparently she thinks not all humans are... bad now?',
                  '>{#p/alphys}{#f/27}* ...',
                  ">{#p/undyne}{#f/17}* Are you kidding?\n* Of COURSE they're not all bad!!",
                  '>{#p/alphys}{#f/10}* U-Undyne!?',
                  '>{#p/undyne}{#f/1}* That last human proved their kind CAN fight with honor.',
                  '>{#p/undyne}{#f/1}* That they CAN show respect to their opponents in battle.',
                  ">{#p/undyne}{#f/16}* ... and it's a good thing, too, because...",
                  ">{#p/undyne}{#f/14}* I doubt the Royal Guard will expand again any time soon.",
                  '>{#p/undyne}{#f/1}* Especially after the former queen returned, and...',
                  '>{#p/undyne}{#f/1}* ... gave the new one her full support.'
               ]);
            } else if (2.1 <= SAVE.data.n.plot_date) {
               addB([
                  ">{#p/alphys}{#f/26}* Undyne wasn't happy about it at first, but...",
                  '>{#p/alphys}{#f/8}* She came around to it in the end.',
                  '>{#p/alphys}{#f/27}* Apparently she thinks not all humans are... bad now?',
                  '>{#p/alphys}{#f/27}* ...',
                  ">{#p/undyne}{#f/17}* Are you kidding?\n* Of COURSE they're not all bad!!",
                  '>{#p/alphys}{#f/10}* U-Undyne!?',
                  '>{#p/undyne}{#f/14}* That last human proved their kind CAN in fact be... well, kind.',
                  '>{#p/undyne}{#f/1}* That they CAN show mercy to their opponents in battle.',
                  ">{#p/undyne}{#f/16}* ... and it's a good thing, too, because...",
                  ">{#p/undyne}{#f/14}* I doubt the Royal Guard will expand again any time soon.",
                  '>{#p/undyne}{#f/1}* Especially after the former queen returned, and...',
                  '>{#p/undyne}{#f/1}* ... gave the new one her full support.'
               ]);
            } else {
               addB([
                  ">{#p/alphys}{#f/19}* Undyne... wasn't happy about this at all.",
                  '>{#p/alphys}{#f/19}* She still blames you for what happened to the king, so...',
                  ">{#p/alphys}{#f/20}* It's... understandable why she'd be opposed to it.",
                  '>{#p/alphys}{#f/20}* ...',
                  ">{#p/undyne}{#f/16}* Yeah, it's a pretty stupid policy if you ask me.",
                  '>{#p/alphys}{#f/10}* U-Undyne!?',
                  ">{#p/undyne}{#f/17}* No matter HOW many nice humans come along, we CAN'T lower our guard!",
                  '>{#p/undyne}{#f/9}* ... but not many people would agree with me these days.',
                  ">{#p/undyne}{#f/16}* With the former queen's return, and her support for the new one...",
                  ">{#p/undyne}{#f/9}* I doubt the Royal Guard will ever be as strong as it once was."
               ]);
            }
            addB([
               '>{#p/alphys}{#f/5}* ...\n* About the former queen.',
               '>{#p/alphys}{#f/5}* By the time she returned, things were mostly back to normal...',
               '>{#p/alphys}{#f/21}* And then she decided to reveal the truth about the humans.',
               '>{#p/alphys}{#f/21}* Like... RIGHT after she found out herself.'
            ]);
            if (30 <= SAVE.data.n.bully) {
               addB([
                  ">{#p/alphys}{#f/20}* ... eheh...\n* The people didn't react well at first.",
                  '>{#p/alphys}{#f/13}* They were more scared than anything...',
                  '>{#p/alphys}{#f/26}* A fact not helped by a certain human beating everyone up.',
                  '>{#p/alphys}{#f/20}* Thankfully, over time, Terrestria was able to calm them down...',
                  '>{#p/alphys}{#f/20}* ... by reminding them nobody had died.',
                  ">{#p/alphys}{#f/18}* I'm glad it worked.\n* I would have caused a riot saying that.",
                  '>{#p/alphys}{#f/8}* But... yeah, people are mostly positive about humanity now.'
               ]);
            } else {
               addB([
                  ">{#p/alphys}{#f/15}* ... thankfully, this DIDN'T cause a mass uprising...",
                  '>{#p/alphys}{#f/17}* Though, I guess being so well-known helped her out with that.',
                  '>{#p/alphys}{#f/8}* In fact, people are mostly positive about humanity now.'
               ]);
            }
            addB([">{#p/alphys}{#f/8}* So that's something.", '>{#p/undyne}{#f/16}* Heh, tell me about it...']);
            if (SAVE.data.b.undyne_respecc || 2.1 <= SAVE.data.n.plot_date) {
               addB([
                  ">{#p/undyne}{#f/10}* It's a weird reality we live in now.",
                  '>{#p/undyne}{#f/1}* By the way, did you mention all the new schools being built?',
                  ">{#p/alphys}{#f/10}* Uh... yeah!\n* I totally... didn't."
               ]);
            } else {
               addB([
                  ">{#p/undyne}{#f/10}* I just wish it didn't mean scaling back the Royal Guard.",
                  '>{#p/undyne}{#f/1}* But... hey, at least those new schools are pretty cool.',
                  ">{#p/alphys}{#f/10}* Oh yeah!\n* I forgot you're a teacher there now!"
               ]);
            }
            addB([
               ">{#p/alphys}{#f/6}* Eheh...\n* The education system's doing well, too.",
               '>{#p/alphys}{#f/1}* Suffice it to say, tuition prices have never been lower!',
               ">{#p/alphys}{#f/8}* There's been so many new students learning all sorts of things.",
               '>{#p/papyrus}{#f/0}... HEY GUYS!\nI JUST GOT BACK FROM MATH CLASS!!',
               '>{#p/papyrus}{#f/4}WHO KNEW FOLDING SPACETIME COULD BE SO COMPLICATED...',
               '>{#p/alphys}{#f/10}* ... yep, Papyrus took a class on warp field theory.',
               '>{#p/papyrus}{#f/6}WHAT?? ARE YOU REFERRING TO ME IN THE THIRD PERSON??',
               '>{#p/alphys}{#f/17}* ... and a writing class, from the sounds of it.',
               ">{#p/undyne}{#f/12}* That's still a thing??",
               '>{#p/papyrus}{#f/4}... WAIT...',
               '>{#p/papyrus}{#f/7}WHO ARE YOU TALKING TO ON THE PHONE!?',
               ">{#p/undyne}{#f/1}* It's the human.",
               '>{#p/papyrus}{#f/0}OH!! OH!!\nLET ME TALK TO THEM!!',
               '>{#p/undyne}{#f/14}* Be my guest.\n* I gotta get back to teaching my class.',
               '>{#p/undyne}{#f/17}* They\'ve been struggling with the "magical self- defense" exercise.',
               '>{#p/papyrus}{#f/0}... HELLO HUMAN!!\nHOW HAVE -YOU- BEEN LATELY!?',
               '>{#p/papyrus}{#f/0}...',
               ">{#p/papyrus}{#f/5}I GUESS YOU CAN'T REALLY ANSWER THAT.",
               ">{#p/papyrus}{#f/6}BUT I HOPE YOU'RE DOING WELL!!"
            ]);
            if (SAVE.data.n.plot_date < 1.1) {
               addB([">{#p/papyrus}{#f/0}I'VE BEEN THINKING ABOUT YOU SINCE OUR EPIC SHOWDOWN."]);
            } else if (SAVE.data.b.flirt_papyrus) {
               addB([">{#p/papyrus}{#f/0}I'VE BEEN THINKING ABOUT YOU SINCE THAT DATE WE HAD."]);
            } else {
               addB([">{#p/papyrus}{#f/0}I'VE BEEN THINKING ABOUT YOU SINCE WE HUNG OUT."]);
            }
            addB([
               '>{#p/papyrus}{#f/5}I TOLD EVERYONE IN MY CLASS ABOUT YOU, AND...',
               ">{#p/papyrus}{#f/5}... ALL OF THEM WISHED YOU'D COME BACK SOMEDAY."
            ]);
            if (SAVE.data.b.f_state_kidd_betray) {
               addB([
                  '>{#p/papyrus}{#f/4}... ALMOST ALL OF THEM, ANYWAY.',
                  '>{#p/papyrus}{#f/5}ONE CLASSMATE WHO SITS NEXT TO ME SAYS THAT YOU...',
                  '>{#p/papyrus}{#f/5}... UH, THEY SAY YOU BETRAYED THEM, SOMEHOW.',
                  '>{#p/papyrus}{#f/6}BUT LISTEN!!\nIF YOU EVER -DO- COME BACK...',
                  ">{#p/papyrus}{#f/0}I'LL HELP THE TWO OF YOU GET BACK ON GOOD TERMS!!"
               ]);
            } else {
               addB([
                  '>{#p/papyrus}{#f/0}ONE OF THEM EVEN WISHES THEY COULD GO WITH YOU!!',
                  ">{#p/papyrus}{#f/5}IT'S A CLASSMATE WHO SITS NEXT TO ME, ACTUALLY.",
                  '>{#p/papyrus}{#f/6}THEY SAY THEY OWE YOU THEIR VERY LIFE!!',
                  '>{#p/papyrus}{#f/4}... A HERO, EH?\nIF YOU EVER -DO- COME BACK...',
                  ">{#p/papyrus}{#f/0}I'LL BE SURE TO INVITE THEM TO YOUR RETURN PARTY."
               ]);
            }
            addB([
               '>{#p/papyrus}{#f/9}YOU HAVE MY PERSONAL PAPYRUS PROMISE! (TM)',
               ">{#p/alphys}{#f/27}* ... hey, isn't that one of Mettaton's lines?",
               '>{#p/papyrus}{#f/4}IN THE PAST, MAYBE... BUT NOT NOW.',
               ">{#p/papyrus}{#f/5}APPARENTLY, HE'S DITCHING HIS OLD FORMAT ENTIRELY...",
               '>{#p/papyrus}{#f/4}ALL TO START THE "MTT CINEMATIC UNIVERSE."',
               '>{#p/alphys}{#f/17}* Oh yeah, I heard a rumor about that.'
            ]);
            if (iFancyYourVilliany()) {
               addB([
                  '>{#p/alphys}{#f/21}* They say he\'s doubling down on the whole "villain" thing.',
                  ">{#p/papyrus}{#f/4}... LIKE THAT'S NOT GOING TO BACKFIRE.",
                  '>{#p/alphys}{#f/22}* I KNOW, RIGHT!?!?'
               ]);
               if (30 <= SAVE.data.n.bully) {
                  addB([
                     ">{#p/alphys}{#f/10}* The people aren't going to want a reminder of what the human was.",
                     '>{#p/alphys}{#f/26}* ... no offense.'
                  ]);
               } else {
                  addB([
                     ">{#p/alphys}{#f/10}* People don't even dislike humans anymore, so...",
                     ">{#p/alphys}{#f/3}* I don't really see the point in it."
                  ]);
               }
            } else {
               addB([
                  '>{#p/alphys}{#f/21}* They say he\'s doubling down on the whole "killer robot" thing.',
                  ">{#p/papyrus}{#f/4}LIKE THAT'S NOT GOING TO BACKFIRE.",
                  '>{#p/alphys}{#f/22}* I KNOW, RIGHT!?!?'
               ]);
               if (30 <= SAVE.data.n.bully) {
                  addB([
                     ">{#p/alphys}{#f/10}* The people aren't going to want a reminder of the human's violence.",
                     '>{#p/alphys}{#f/26}* ... no offense.'
                  ]);
               } else {
                  addB([
                     '>{#p/alphys}{#f/10}* People are just trying to be positive nowadays, so...',
                     ">{#p/alphys}{#f/3}* I don't really see the point in it."
                  ]);
               }
            }
            addB([
               ">{#p/papyrus}{#f/5}YEAH... EVERYONE'S JUST TRYING TO HAVE HOPE NOW.",
               '>{#p/papyrus}{#f/6}... INCLUDING MY BROTHER!!',
               '>{#p/papyrus}{#f/0}AFTER THE ROYAL GUARD WAS REDUCED IN SIZE...',
               '>{#p/papyrus}{#f/0}HE LEFT TO START A BUSINESS WITH BRATTY AND CATTY.',
               '>{#p/papyrus}{#f/4}A SECOND-HAND TRASH BUSINESS.',
               ">{#p/papyrus}{#f/5}I CAN'T SAY I APPROVE, BUT AT LEAST HE'S HAPPY.",
               ">{#p/sans}{#f/0}* of course i'm happy.\n* selling trash is basically my calling.",
               '>{#p/papyrus}{#f/7}SANS!! STOP COMING OUT OF NOWHERE LIKE THAT!!',
               '>{#p/sans}{#f/2}* heh.\n* so how are ya, bucko?',
               ">{#p/sans}{#f/0}* i hope my efforts to warn and protect you weren't in vain.",
               '>{#p/papyrus}{#f/9}I KNEW IT!!\nYOU WERE A MOLE- RAT ALL ALONG!',
               '>{#p/sans}{#f/0}* true.\n* i did infiltrate the royal guard.',
               ">{#p/sans}{#f/3}* but i'd like to think i made a positive influence.",
               '>{#p/sans}{#f/2}* after all, it was MY idea to put terrestria in charge.',
               '>{#p/papyrus}{#f/1}WHAT!?\nYOUR IDEA!?',
               '>{#p/papyrus}{#f/5}WOWIE...',
               ">{#p/sans}{#f/3}* ... but that's all in the past now.",
               ">{#p/sans}{#f/0}* the way i see it, i'm just glad things didn't end up worse.",
               ">{#p/alphys}{#f/17}* I'm a little surprised you didn't come back to work at the lab.",
               ">{#p/alphys}{#f/5}* You know, like you said you'd do when you were done with the guard.",
               '>{#p/sans}{#f/3}* well, to be honest, i needed a break after all that serious stuff.',
               '>{#p/sans}{#f/2}* but hey, at least papyrus is doing a bang-up job, right?',
               '>{#p/alphys}{#f/6}* Eheh.\n* Yeah, he is.',
               '>{#p/papyrus}{#f/0}I TRY MY BEST!!',
               ">{#p/alphys}{#f/20}* ... though, there is this one thing that's been on my mind.",
               '>{#p/sans}{#f/0}* what is it?',
               '>{#p/alphys}{#f/27}* Well, according to the telescopes...',
               '>{#p/alphys}{#f/27}* Something strange happened to the stars a while back.',
               '>{#p/papyrus}{#f/6}STRANGE!?\nHOW CAN A STAR BE STRANGE!?',
               ">{#p/alphys}{#f/15}* Well, okay, it wasn't actually the STAR that was strange.",
               '>{#p/alphys}{#f/23}* It was the way it moved.',
               ">{#p/alphys}{#f/20}* Or... didn't move?",
               '>{#p/alphys}{#f/20}* It was more like... a jump, of sorts.\n* A sudden shift.',
               '>{#p/alphys}{#f/26}* As if time outside the forcefield just... lept ahead a few years.',
               ">{#p/sans}{#f/0}* you sure those reports didn't contain any counter-indications?",
               '>{#p/alphys}{#f/20}* Well, I checked, and double-checked, and triple-checked...',
               '>{#p/papyrus}{#f/6}BUT DID YOU QUADRUPLE-CHECK!?',
               '>{#p/alphys}{#f/21}* Of course I did.',
               ">{#p/alphys}{#f/5}* But it didn't change the result.",
               '>{#p/sans}{#f/3}* huh.\n* how strange.',
               ">{#p/sans}{#f/0}* i'd say this is worth a closer look.",
               '>{#p/alphys}{#f/20}* Agreed.',
               ">{#p/sans}{#f/3}* whoops.\n* the recording's almost at its time limit now.",
               '>{#p/alphys}{#f/17}* ... oh.\n* I guess we should wrap this up, then.',
               ">{#p/alphys}{#f/6}* Well, I... I hope you're doing alright out there.",
               '>{#p/alphys}{#f/5}* If we managed to find happiness here, then... so can you.',
               ">{#p/alphys}{#f/10}* After all, you've got the whole universe to explore!",
               '>{#p/papyrus}{#f/0}WELL SAID, ALPHYS.\nWELL SAID.',
               '>{#p/sans}{#f/2}* heh.\n* take care, okay?',
               '>{#p/papyrus}{#f/9}YEAH!!\nUNTIL NEXT TIME!!',
               '>{#p/alphys}{#f/8}* ... until next time.',
               '>{#s/equip}{#p/event}* Click...'
            ]);
         }
         return { a, b, d, k, m };
      },
      neutral1: [
         '>{#s/phone}{#p/event}* Dialing...',
         '>{#p/sans}{#f/0}* hello?',
         '>{#p/sans}{#f/3}* ... oh, heya.\n* been a while since we last spoke, huh?',
         '>{#p/sans}{#f/0}* this must be your fifth or sixth call by now.',
         ">{#p/human}* (You correct Sans, telling him it's actually the seventh.)",
         '>{#p/sans}{#f/2}* nah, i knew that.\n* i was just testing your memory skills.',
         '>{#p/human}* (...)',
         ">{#p/sans}{#f/0}* heh...\n* y'know, bud...",
         '>{#p/sans}{#f/0}* for someone who did the kinds of things you did...',
         '>{#p/sans}{#f/3}* you sound awfully shy over the phone.',
         ">{#p/human}* (You try to apologize, but you can't find the words.)",
         ">{#p/sans}{#f/3}* hey, don't sweat it.\n* we all make mistakes, don't we?",
         '>{#p/sans}{#f/0}* like, on the day you left...',
         '>{#p/sans}{#f/0}* it was a mistake to think my words could make any difference.',
         ">{#p/human}* (You ask Sans why he's only mentioning this now.)",
         '>{#p/sans}{#f/0}* hmm... good point.',
         ">{#p/sans}{#f/3}* we've never really discussed it before.",
         ">{#p/sans}{#f/3}* i mean, i could ask why you're still in range of the outpost...",
         '>{#p/sans}{#f/2}* but that might be getting a little too off-topic.',
         '>{#p/sans}{#f/0}* so... why am i only bringing that day up now?',
         '>{#p/sans}{#f/3}* well, to tell you the truth...',
         ">{#p/sans}{#f/0}* i'm having trouble taking what happened at face value.",
         ">{#p/human}* (You focus on Sans's voice.)",
         '>{#p/sans}{#f/0}* first off, none of the other humans were like you.',
         '>{#p/sans}{#f/3}* and, sure, not all of them were perfect angels.',
         '>{#p/sans}{#f/0}* but, generally speaking, they acted like normal children.',
         '>{#p/sans}{#f/0}* ... which brings me to my main point.',
         ">{#p/sans}{#f/3}* i think it's safe to say you were not a normal child.",
         '>{#p/sans}{#f/3}* you did things no normal child would ever do.',
         '>{#p/sans}{#f/3}* not only killing, but going out of your way to do so.',
         '>{#p/human}* (...)',
         '>{#p/sans}{#f/0}* your actions were so extreme, i began to wonder...',
         '>{#p/sans}{#f/3}* if someone your age would really be capable of them.',
         '>{#p/sans}{#f/3}* the more i wondered, the more i realized...',
         '>{#p/sans}{#f/0}* the answer to that question was "no."',
         '>{#p/human}* (Your eyes widen.)',
         '>{#p/sans}{#f/0}* the more i think about it, buddo...',
         '>{#p/sans}{#f/0}* the harder it is to believe you were in control back then.',
         '>{#p/human}* (You know what Sans is saying is true.)',
         '>{#p/sans}{#f/3}* looking back, you always seemed so cold...',
         '>{#p/sans}{#f/3}* never showing much emotion or care for those around you.',
         ">{#p/sans}{#f/0}* and yet, you can't seem to stay away from us now.",
         ">{#p/sans}{#f/3}* it's like you're not even the same person.",
         '>{#p/human}* (...)',
         '>{#p/sans}{#f/0}* hey, uh...',
         '>{#p/sans}{#f/3}* ...',
         ">{#p/sans}{#f/3}* heh...\n* i hope those tears of yours means i'm right.",
         ">{#p/sans}{#f/2}* if not, then you're one darn good actor.",
         ">{#p/human}* (...)\n* (Despite everything, you smile a little at Sans's joke.)",
         '>{#p/sans}{#f/3}* sorry if the subject got a little heavy, by the way.',
         ">{#p/sans}{#f/3}* i just thought i should tell you about what i've been thinking.",
         '>{#p/human}* (You ask if it would be a bad time to hang up.)',
         ">{#p/sans}{#f/0}* huh?\n* no, that's alright.",
         '>{#p/sans}{#f/3}* besides, you must have a lot to think about right now.',
         '>{#p/human}* (You let out a sigh.)',
         ">{#p/sans}{#f/3}* ... yeah.\n* i'll let you go.",
         '>{#p/sans}{#f/0}* good luck out there, okay?',
         ">{#p/sans}{#f/2}* i promise we'll do the best we can here.",
         '>{#s/equip}{#p/event}* Click...'
      ],
      neutral2: [
         '>{#s/phone}{#p/event}* Ring, ring...',
         '>{#p/asgore}{#f/1}* ...',
         '>{#p/asgore}{#f/1}* Howdy, young one.',
         '>{#p/asgore}{#f/1}* I do not know if this message will reach you, or if you are alive.',
         '>{#p/asgore}{#f/2}* I cannot confirm if the self-destruct sequence was terminated.',
         '>{#p/asgore}{#f/4}* However, if it was...',
         '>{#p/asgore}{#f/25}* Then I am grateful to have saved your life.',
         ">{#p/asgore}{#f/7}* I do not believe you were entirely at fault for Asriel's actions.",
         '>{#p/asgore}{#f/5}* Papyrus, Muffet, and many others you have shown mercy to...',
         '>{#p/asgore}{#f/6}* Can all attest to your attempts to make a difference.',
         '>{#p/asgore}{#f/21}* There is even someone with me who would like to say a few words.',
         '>{#p/kidd}{#f/7}* Dude, is that you!?',
         '>{#p/kidd}{#f/2}* I, uh, kinda forgot your name...',
         '>{#p/asgore}{#f/6}* Go on, tell them what you told me.',
         '>{#p/kidd}{#f/6}* Okay, okay.',
         ">{#p/kidd}{#f/4}* So like, y'know...",
         '>{#p/kidd}{#f/4}* Despite what Asriel did and stuff...',
         '>{#p/kidd}{#f/3}* I thought you were a pretty cool kid.',
         ">{#p/kidd}{#f/13}* If I ever got to see you again, we'd TOTALLY hang out together!",
         ">{#p/kidd}{#f/6}* And, maybe...\n* While we're at it...",
         '>{#p/kidd}{#f/5}* We could help each other get over what happened before.',
         '>{#p/asgore}{#f/6}* Hmm... that sounds rather nice!',
         '>{#p/asgore}{#f/5}* You have been through a lot together, so it is sensible to do so.',
         ">{#p/kidd}{#f/4}* It's too bad they had to leave, huh?",
         '>{#p/asgore}{#f/1}* ... indeed.',
         ">{#p/kidd}{#f/3}* Well, they're cool, so I'm sure they'll be alright.",
         ">{#p/kidd}{#f/1}* You will, won't you!?",
         '>{#p/asgore}{#f/20}* ...',
         '>{#p/papyrus}{#f/7}WHAT!?\nTHEY GET TO TALK BEFORE I DO!?',
         '>{#p/papyrus}{#f/4}... THIS IS TOTALLY UNFAIR.',
         '>{#p/kidd}{#f/14}* YOOOO PAPYRUS!!!',
         '>{#p/kidd}{#f/1}* You want the phone, skele-dude?',
         ">{#p/kidd}{#f/2}* 'Cause Asgore's gonna take me back to his house now.",
         ">{#p/papyrus}{#f/0}OF COURSE I DO!\nI'VE GOT IMPORTANT THINGS TO SAY.",
         ">{#p/kidd}{#f/1}* Cool, it's all yours!\n* See ya later, man!",
         '>{#p/asgore}{#f/6}* ... I will return after I have taken Monster Kid home.',
         '>{#p/papyrus}{#f/0}WELL THEN!\nWE SPEAK AT LONG LAST, HUMAN!',
         '>{#p/papyrus}{#f/5}OR, UH, I SPEAK.\nYOU JUST KIND OF... LISTEN.',
         ">{#p/papyrus}{#f/6}BUT THAT'S NOT IMPORTANT!",
         '>{#p/papyrus}{#f/0}I JUST WANTED TO SAY, YOU DID AN AMAZING JOB.',
         '>{#p/papyrus}{#f/5}BY NOT HURTING ALL THOSE PEOPLE.',
         '>{#p/papyrus}{#f/4}NO DOUBT "ASRIEL" MADE THINGS DIFFICULT...',
         '>{#p/papyrus}{#f/5}AND... MADE YOU DO THINGS YOU MUST REGRET NOW...',
         ">{#p/papyrus}{#f/0}BUT I SAY YOU SHOULDN'T HAVE TO FEEL THAT REGRET!",
         '>{#p/papyrus}{#f/9}YOU DID THE BEST YOU COULD, AFTER ALL!',
         ">{#p/papyrus}{#f/6}THAT'S GOT TO COUNT FOR SOMETHING, RIGHT?",
         '>{#p/papyrus}{#f/6}...',
         ">{#p/papyrus}{#f/5}TRUTH BE TOLD... IT HASN'T BEEN EASY FOR US.",
         ">{#p/papyrus}{#f/5}AFTER THE CORE'S DESTRUCTION WAS AVERTED...",
         '>{#p/papyrus}{#f/5}I SPOKE WITH THE OTHERS WHO HELPED TO AVERT IT.',
         '>{#p/papyrus}{#f/6}...\nMUFFET PRETTY MUCH JUST IGNORED ME.',
         '>{#p/papyrus}{#f/6}THE WORKERS WERE ASHAMED THEY LET IT GET THIS FAR.',
         '>{#p/papyrus}{#f/5}AND THAT DUMMY...',
         '>{#p/papyrus}{#f/5}... LOST SOMEONE VERY IMPORTANT TO THEM.',
         '>{#p/papyrus}{#f/5}A GHOST WHO FUSED WITH THE CORE TO STABILIZE IT.',
         '>{#p/papyrus}{#f/6}EVEN IF THAT GHOST IS TECHNICALLY STILL ALIVE...',
         ">{#p/papyrus}{#f/5}EXISTING IN SUCH A MANNER ISN'T IDEAL.",
         ">{#p/papyrus}{#f/3}IT'S LIKELY... THEY'LL NEVER SPEAK AGAIN.",
         '>{#p/papyrus}{#f/6}I TRIED CONSOLING THAT DUMMY, BUT...',
         '>{#p/papyrus}{#f/5}ALL THEY COULD DO WAS STARE INTO THE MACHINE.',
         '>{#p/papyrus}{#f/5}...',
         ">{#p/papyrus}{#f/6}S-STILL, I KNOW THEY'LL COME AROUND!",
         '>{#p/papyrus}{#f/0}I BELIEVE IN THEM!',
         '>{#p/papyrus}{#f/0}JUST LIKE I BELIEVE IN YOU.',
         '>{#p/papyrus}{#f/5}I BELIEVE IN EVERYONE...',
         '>{#p/papyrus}{#f/4}APART FROM THAT IMPOSTROUS FRIEND OF YOURS.',
         '>{#p/papyrus}{#f/0}HE LOST THE RIGHT TO HAVE ME BELIEVE IN HIM.',
         '>{#p/asgore}{#f/6}* Alas, I have returned.',
         '>{#p/papyrus}{#f/0}WELCOME BACK!',
         '>{#p/asgore}{#f/7}* I trust you have said all you wanted to?',
         ">{#p/papyrus}{#f/6}WELL, THERE'S A LOT MORE I'D -LIKE- TO SAY...",
         '>{#p/papyrus}{#f/5}BUT THE BATTERY ONLY LASTS FOR SO LONG.',
         '>{#p/asgore}{#f/1}* I see.',
         ">{#p/papyrus}{#f/5}I'LL... HAND THE PHONE BACK TO YOU, NOW.",
         '>{#p/asgore}{#f/2}* ...',
         '>{#p/asgore}{#f/2}* He is correct.',
         '>{#p/asgore}{#f/1}* The batteries necessary to power such a long- range transmission...',
         ">{#p/asgore}{#f/2}* Demand a surplus of the CORE's power.",
         '>{#p/asgore}{#f/4}* Knowing who inhabits and regulates it now...',
         '>{#p/asgore}{#f/2}* It would be wise not to strain it more than is necessary.',
         '>{#p/papyrus}{#f/0}YEAH, WELL, THAT MAKES SENSE.',
         '>{#p/asgore}{#f/15}* ... however, before the message concludes.',
         '>{#p/asgore}{#f/15}* I must issue you one last warning.',
         '>{#p/asgore}{#f/14}* ...\n* Do not follow him.\n* Do not trust him.',
         '>{#p/asgore}{#f/14}* Do not believe anything he tells you.',
         '>{#p/asgore}{#f/13}* Do not let him do what he wants, and do not let him hurt others.',
         '>{#p/papyrus}{#f/6}THIS IS PROBABLY MY CUE TO LEAVE.\nGOODBYE!',
         '>{#p/asgore}{#f/14}* ... do not allow him to coerce you into violence yourself.',
         '>{#p/asgore}{#f/13}* And if you are left with no other option...',
         '>{#p/asgore}{#f/14}* ... do not hesitate to put an end to him.',
         '>{#p/asgore}{#f/2}* ...',
         '>{#p/asgore}{#f/4}* Good luck.',
         '>{#s/equip}{#p/event}* Click...'
      ],
      lastblook1: [
         () => [
            '>{#p/napstablook}* oh...\n* hey frisk......',
            ...(SAVE.data.b.ufokinwotm8
               ? [
                  '>* ...',
                  ">* ... huh?\n* what's with that look?",
                  '>* did i... get in your way?',
                  '>* ...',
                  ">* oh......\n* i did, didn't i.........",
                  '>* sorry...',
                  '>* force of habit......',
                  ">* i'll... just be out of your way now......",
                  '>* please......\n* forgive me............'
               ]
               : [
                  ">* they're still out there building the front door, so...",
                  '>* not much point in trying to go there, i guess',
                  ...(SAVE.data.b.c_state_secret4 && !SAVE.data.b.c_state_secret4_used
                     ? [
                        '>* ...',
                        '>{#p/human}* (You repeat the secret told to you by Napstablook in Archive Six.)',
                        '>{#p/napstablook}* a magic trick...?',
                        '>* wait...',
                        '>* i think i know what you mean...\n* let me try...'
                     ]
                     : [])
               ])
         ],
         () => [
            ...(SAVE.data.b.c_state_secret4_used
               ? [">{#p/napstablook}* heh...\n* i really appreciate everything you've done, frisk."]
               : [">{#p/napstablook}* hey...\n* i really appreciate everything you've done, frisk."]),
            '>* setting us free and all...',
            '>* ...',
            ">* the truth is, my cousins and i started to think we'd never escape.",
            ">* it'd been so long since the last human arrived, and...",
            '>* considering what we recently found out about humanity...',
            '>* about how they all left the home galaxy...',
            ">* it's a miracle you even came to the outpost at all."
         ],
         () =>
            SAVE.data.b.a_state_hapstablook
               ? [
                  '>{#p/napstablook}* oh yeah, about my cousins...',
                  ">* after the whole mettaton thing, it's been going pretty good.",
                  ">* we've been talking it over, and...",
                  ">* ... we've decided to re-open the snail farm here on eurybia.",
                  ">* mettaton's doing the advertising, while i and the others look after the snails.",
                  '>* we even found a place we could stay once we get settled in...',
                  '>* a very kind house told us we could live there.',
                  ">* apparently, it's the same one undyne used to live in..."
               ]
               : [
                  '>{#p/napstablook}* oh right... my cousins.',
                  ">* i don't really know if i should be telling you this, but...",
                  '>* we sort of figured out that mettaton might be our long-lost cousin.',
                  '>* the others and i tried to ask him about it, but...',
                  ">* ... it didn't really go the way we'd hoped.",
                  '>* then, everyone was blaming each other for messing it up...',
                  ">* i... haven't felt like talking with them since.",
                  '>* yeah... this was a bad topic',
                  '>* sorry...'
               ],
         () => [
            ...(SAVE.data.b.a_state_hapstablook
               ? ['>{#p/napstablook}* ...', '>* speaking of family...']
               : ['>{#p/napstablook}* ...', ">* hey...\n* even if my family's not doing too well..."]),
            '>* that human i adopted is... really something, heh',
            ">* they say i'm their favorite monster...",
            '>* ... knowing what they went through in the archive, that really means something.',
            '>* and... they always find a way to make me smile.',
            '>* like, a few hours ago, when the walls were still being put in...',
            '>* they wanted to go outside to see the construction before it was too late.',
            '>* when i said they could, they were so happy...',
            '>* now, i finally understand why people like raising children.'
         ],
         () => [
            ">* y'know... about your childhood...",
            ">* i'd say it's only just getting started.",
            ...(SAVE.data.b.f_state_kidd_betray
               ? ['>* you might not have any new siblings, but...']
               : SAVE.data.b.svr
                  ? ['>* along with those new siblings of yours...']
                  : ['>* along with that new sibling of yours...']),
            ">* i get the feeling asgore's going to take really good care of you.",
            '>* how do i know?',
            '>* well, recently, i found out he was the hairy guy who came to our farm all the time.',
            ">* he'd always take such good care of the snails he purchased...",
            '>* even healing them if they ever got hurt before dying of natural causes.',
            ">* if he cared that much for little space creatures, he'll care even more for you."
         ],
         () => [
            '>{#p/napstablook}* ... you know...\n* before the snail farm, and...',
            '>* before the outpost...',
            '>* my life on the old homeworld was a quiet one.',
            '>* that old homeworld...',
            '>* it really was a special place.',
            '>* the way the sky set itself on fire every day...',
            '>* how everyone who lived there was so at peace before the war...',
            ">* back then, i didn't think anything of it.",
            '>* now... after nearly two hundred years of captivity......',
            ">* i realized i'd been taking it all for granted."
         ],
         () => [
            '>{#p/napstablook}* well, anyway.\n* the old homeworld was great and all...',
            ">* but the new one's got a lot going for it, too.",
            '>* like the wildlife.',
            '>* when i traveled the surface earlier, i ran into some of it...',
            ">* and that's when i saw something interesting happen",
            '>* the creatures... starting using magic.',
            ">* when i mentioned this to alphys, she said the planet didn't have any magic...",
            '>* not according to the scans they took when we first arrived.',
            '>* has our arrival to this world...',
            ">* ... given it something it didn't have before?"
         ],
         () => [
            '>{#p/napstablook}* ... heh.',
            ">* i've been rambling a lot, huh?",
            '>* i appreciate you listening to me, though',
            ">* it's really nice of you to do that for me, frisk.",
            '>* just wanted you to know that.'
         ],
         () => [
            '>{#p/napstablook}* huh?\n* you still wanted to talk?',
            '>* ...',
            '>* oh......',
            '>* i guess i ran out of conversation topics',
            ">* i doubt i'd have anything else of interest to say, so...",
            '>* feel free to go do something else, now'
         ],
         () => [
            '>{#p/napstablook}* ... frisk, uh...',
            ">* i'm not really sure what to talk about anymore",
            '>* maybe... if you come back later today...',
            ">* i'll think of something else..."
         ],
         () => [
            '>{#p/napstablook}* ... oh.........',
            ">* you're.........\n* still here.........",
            '>* even though i have nothing else to say.........',
            '>* well... i guess, if you just wanted my company... then...',
            '>* feel free to stick around a while longer'
         ],
         () => [
            '>{#p/napstablook}* ... hmm...',
            '>* actually...',
            '>* ... would you like me to tell you a joke?',
            ">* i don't have much of a sense of humor, but i can try..."
         ],
         () => [
            '>{#p/napstablook}* okay...\n* here goes...',
            '>* if a ghost gets tired in the middle of the road, what does it do?',
            '>* ...',
            '>* answer... it {@fill=#ff0}naps to block{@fill=#fff} you.',
            '>* get it?\n* napstablook?\n* naps to block?',
            '>* yeah...\n* that was kinda bad'
         ],
         () => [
            '>{#p/napstablook}* ... you wanted me to tell you another joke?',
            '>* hmm... let me think about it...'
         ],
         () => [
            ">{#p/napstablook}* okay, let's see...",
            '>* if a ghost changed vessels so they could have a child, what would you call it?',
            '>* ...',
            '>* answer... a {@fill=#ff0}trans-parent.{@fill=#fff}.',
            '>* ... heh.'
         ],
         () => ['>{#p/napstablook}* ... you wanted me to tell you a third joke?', '>* well... if you insist...'],
         () => [
            ">{#p/napstablook}* okay.\n* i've got it.",
            '>* if a restaurant hires a ghost to taste test their food, what does that make the ghost?',
            '>* ...',
            '>* answer... a {@fill=#ff0}food-in-spectre.{@fill=#fff}.'
         ],
         () => [
            '>{#p/napstablook}* alright, alright.\n* maybe i got a little carried away with that one.',
            '>* but i hope you liked it anyway.'
         ],
         () => [
            '>{#p/napstablook}* ...',
            '>* oh...',
            ">* ... i guess i'm at a loss for what to say.",
            ">* you've been such a good listener, i'd feel bad if i ran out of ideas.",
            ">* c'mon, blooky, think...",
            '>* ... what can you talk about...'
         ],
         () => [
            '>{#p/napstablook}* wait, hold on',
            '>* do you know anything about ghost food?',
            '>* that last joke kind of got me thinking about it.',
            ">* you must be confused... it's not really explained anywhere.",
            '>* if you like, i can tell you about it...'
         ],
         () => [
            '>{#p/napstablook}* ... so, ghost food...',
            ">* it's exactly like normal monster food, except...",
            '>* when preparing it...',
            ">* there's a special kind of spell you have to use to make it edible for ghosts.",
            ">* that's right... any monster food can become ghost food."
         ],
         () => [
            '>{#p/napstablook}* as it turns out, though...',
            '>* certain kinds of food are easier to convert than others.',
            '>* like... standard fruit.\n* or milkshakes.',
            ...(SAVE.data.b.item_blookpie
               ? ['>* but something like that exoberry pie you bought from me...']
               : ['>* but something like that exoberry pie i had in my shop...']),
            '>* that... would take a lot of magical power to make.',
            '>* the more complicated the food, the more difficult it is to convert into ghost food.'
         ],
         () => [
            ...(SAVE.data.b.a_state_hapstablook
               ? ['>{#p/napstablook}* this one time, my... er, mettaton made me a chocolate cake.']
               : ['>{#p/napstablook}* this one time, my cousin made me a chocolate cake.']),
            '>* chocolate filling, chocolate icing... chocolate everything.',
            ">* if i didn't know any better, i'd think it was actual human food.",
            ...(SAVE.data.b.a_state_hapstablook
               ? [
                  '>* but somehow, he managed to convert all of that into a ghost food...',
                  '>* not for a special occasion, but just because he wanted to see me smile.'
               ]
               : [
                  '>* but somehow, they managed to convert all of that into a ghost food...',
                  '>* not for a special occasion, but just because they wanted to see me smile.'
               ]),
            '>* well... i did.\n* and we ate the cake together.',
            '>* and i was happy.'
         ],
         () => [
            '>{#p/napstablook}* ...',
            ">* heh...\n* i think i'm gonna pretend to sleep for a while...",
            '>* it helps me unwind after a long day like this one.',
            ">* ... wait, it's morning...",
            '>* i guess that would make it a long night, then.',
            ">* days and nights...\n* that's going to take some getting used to.",
            '>* ...',
            '>* well... thanks for talking to me, frisk',
            '>* feel free to lay down next to me... if you like......',
            '>* ...',
            '>* Zzz... Zzz...'
         ],
         () => [
            '>{#p/napstablook}* Zzz... Zzz...',
            '>* Zzz... Zzz...',
            ">{#p/basic}* This ghost keeps saying 'z' out loud repeatedly, pretending to sleep.",
            choicer.create('* (Lay down next to it?)', 'Yes', 'No')
         ],
         () => ['>{#p/basic}* The ghost is still here.', choicer.create('* (Lay down next to it?)', 'Yes', 'No')]
      ],
      lastblook2: ['>{#p/napstablook}* oooooooooooo......', '>* this is really nice......'],
      lastblook3: [
         '>{#p/human}* (...)',
         '>* (You feel... something.)',
         '>{#p/napstablook}* oh, sorry... i should probably explain what this is...',
         '>* ...\n* so, uh...',
         '>* i took your body...\n* as a vessel...',
         '>* and now...... we inhabit the same space......',
         ">* i don't know why, but the last human who tried this... really liked it...",
         '>* so...',
         '>* maybe you will too...'
      ],
      lastblook4: [
         ">{#p/napstablook}* well, we can stay like this as long as you don't try to move.",
         '>* so...\n* only try to move around when you want it to end, i guess.'
      ],
      lastblook5: [
         '>{#p/napstablook}* well...\n* i hope you liked that...',
         '>* or at least found it kind of interesting...',
         '>* or something...'
      ],
      view: () => [choicer.create('* (Are you ready to go outside?)', 'Yes', 'No')],
      computer1: () =>
         SAVE.data.b.ufokinwotm8
            ? [">{#p/human}* (But you didn't feel like wasting your time here.)"]
            : [">{#p/basic}* The computer's offline, but there's an empty slot for a computer chip."],
      computer2: () => [choicer.create('* (Insert the Computer Chip?)', 'Yes', 'No')],
      computer3: ['>{#p/human}* (You decide not to insert.)'],
      computer4: [
         '>{#p/basic}* Ah!\n* Thank you!\n* Thank you so much!',
         '>* You really took care of me!\n* You have found a computer very far away indeed!',
         '>* ...',
         '>* I have established a link between this computer and my body on the outpost.',
         '>* ...',
         '>* I never could have imagined how it would feel to exist in two places at once!',
         '>* It is... incredible...',
         '>* I shall not forget this deed, fellow traveler!'
      ],
      computer5: ['>{#p/basic}* Thank you, fellow traveler.\n* I owe you my future.'],
      end1: [
         '>{*}{#p/asgore}{#f/6}{#v/1}* This is emergency program one.{^20}{%}',
         '>{*}{#p/asgore}{#f/6}{#v/1}* Initiating automated self-destruct protocol.{^20}{%}'
      ],
      end2: [
         '>{*}{#p/asgore}{#f/6}{#v/1}* This is emergency program one.{^20}{%}',
         '>{*}{#p/asgore}{#f/6}{#v/1}* The self-destruct protocol has been terminated remotely.{^20}{%}',
         '>{*}{#p/asgore}{#f/6}{#v/1}* Systems powering down.{^20}{%}'
      ],
      save1: '>{#p/human}{@fill=#f00}* ($(x) left.)',
      save2: '>{#p/human}{@fill=#f00}* (Determination.)',
      save3: '>{#p/human}{@fill=#3f00ff}* ($(x) left.)',
      save4: '>{#p/human}{@fill=#3f00ff}* (Determination.)',
      frontstop: pager.create(
         0,
         [
            ">{#p/basic}* Sorry, kiddo.\n* We're still out here building the front yard.",
            '>* And the front door.',
            ">* If you're looking for Asgore, he's out here with us.",
            ">* We'll be done in a few hours, so just sit tight for now."
         ],
         ['>{#p/basic}* Just a few more hours, kiddo.', '>* Then you can come out.'],
         ['>{#p/basic}* A few more hours.']
      ),
      charatrigger: {
         _frontier1: pager.create(
            0,
            [
               '>{#p/basic}* So this is your room, huh?',
               '>* Kind of strange...',
               ">* ... but who am I kidding, this is you we're talking about.",
               ">* You'd sleep in a doggy bed if you had the choice.",
               ">* And you'd eat the dog food.",
               ">* And you'd like it if somebody tried to pet you whilst eating said dog food."
            ],
            [
               ">{#p/basic}* I'd offer you a treat, but...",
               ">* Even with my new ability to appear visually, I'm still just a ghost.",
               ">* You'll have to settle for ghost dog treats, I'm afraid."
            ],
            [
               '>{#p/basic}* Oh, right.\n* My new ability.',
               ">* I tried showing myself to Asriel like before, but he couldn't see me...",
               '>* So it looks like it only works for you right now.',
               '>* Still.\n* Better than nothing.',
               '>* At least you can actually walk up to and talk to me now.'
            ],
            ['>{#p/basic}* Like that, for example.'],
            ['>{#p/basic}* Or that.'],
            ['>{#p/basic}* Or even that!'],
            ['>{#p/basic}* ...', '>{#p/basic}* You can stop now.'],
            [">{#p/basic}* There's more to your room than me, isn't there?"],
            ['>{#p/basic}* ...', '>{#p/basic}* Maybe not.'],
            [">{#p/basic}* Maybe I'm all you've got."],
            ['>{#p/basic}* In which case...', ">{#p/basic}* We'll be here for a long time."],
            ['>{#p/basic}* A very long time.'],
            ['>{#p/basic}* A very, very long time.'],
            ['>{#p/basic}* A very, very long time indeed.'],
            [">{#p/basic}* Don't you have anything better to do?"],
            []
         ),
         _frontier2: pager.create(
            0,
            [
               '>{#p/basic}* Ah, the humble hallway.',
               '>* For Asriel and I, it was the starting point of countless adventures...',
               '>* ... running dauntlessly across the various rooms of the house.',
               '>* I know, right?\n* So very adventurous.',
               '>* Sadly, we had to stop after the mirror got smashed in for the seven hundredth time.',
               ">* You wouldn't believe the excuses I'd come up with...",
               '>* Like when I blamed a particle collider for shooting a stray atom from Earth to the outpost.',
               '>* And somehow only hitting the glass because it "phased" through the wall.',
               ">* Yeah... that one might've been a stretch."
            ],
            [
               '>{#p/basic}* Nowadays, though, hallways are just hallways.',
               '>* And excuses are just excuses.',
               '>* Is there a valuable life lesson in there somewhere?\n* Probably.',
               ">* I will say, there's a kind of symbolism to a ghost in a hallway...",
               '>* With the whole "between one place and another" thing going on.',
               '>* Actually, that probably only applies to human ghosts.',
               '>* Monster ghosts are just born like that naturally...',
               ">* So, if anything, they'd be in the room at the beginning of the hallway...",
               '>* ... rather than standing in the middle of it.'
            ],
            [
               '>{#p/basic}* Sorry.\n* Went on a tangent there.',
               '>* But what did you expect me to go on when you spoke to me in a boring hallway?',
               '>* Boring hallway, boring tangent.\n* That makes sense, right?'
            ],
            [">{#p/basic}* Or maybe it doesn't.\n* What do I know."],
            [">{#p/basic}* Apart from the fact that I've run out of things to say."],
            ['>{#p/basic}* That, I know for sure.'],
            ['>{#p/basic}* But what can you do?', '>{#p/basic}* ... wait, I know!\n* We could go to a new room!'],
            []
         ),
         _frontier3: pager.create(
            0,
            [
               ">{#p/basic}* Ooh... Asgore's room.",
               '>* The big guy sure loves his diaries, huh?',
               ">* Even though he hasn't written anything into that one yet, I'm sure he'll do so soon.",
               '>* Reading them has always been a guilty pleasure of mine...'
            ],
            [
               ">{#p/basic}* What?\n* Everyone's got some kind of guilty pleasure, don't they?",
               '>* I wonder what yours would be...',
               ">* Maybe I'll find out later."
            ],
            [
               ">{#p/basic}* For now, though, I'll just be hanging around.",
               '>* Watching, waiting...',
               ">* ... ready to catch you the moment you do something you don't want me to see!"
            ],
            [">{#p/basic}* Okay, maybe I wouldn't actually go that far."],
            [">{#p/basic}* Not while you're awake, anyway."],
            []
         ),
         _frontier4: pager.create(
            0,
            [
               ">{#p/basic}* I took a peek outside, and they're STILL working on construction.",
               '>* The whole front of the house is STILL a big mess.',
               ">* And Asgore's... STILL tending to the ground...",
               '>* ... while the former CORE workers take their sweet, sweet time building the porch.',
               ">* I wonder what it'll look like when it's done...",
               ">* Hopefully, with Asgore in charge, it'll look better than what we've had before."
            ],
            [
               ">{#p/basic}* Actually, Asgore's only in charge of the design.",
               '>* Since construction started yesterday, Doge has been the one giving the orders.',
               '>* I snuck outside then, too.',
               ">* She's strict, but she seems to know what she's doing.",
               '>* Which is great, because as much as I love Asgore for who he is...',
               '>* He most certainly is NOT your ideal foreman.'
            ],
            [
               '>{#p/basic}* Speaking of things being built, they finished the balcony earlier this morning.',
               '>* Monster Kid and Asriel are both outside...\n* ... sightseeing.',
               ">* They sure do that a lot together... they're probably waiting for you to join them.",
               ">* Once you're done taking in YOUR surroundings, you could go see them.",
               '>* Or you could just go back to your room.\n* Whatever floats your hoverboat.'
            ],
            [
               '>{#p/basic}* Oh yeah, about boats...',
               ">* I guess those aren't really needed around here.",
               ">* But... Frisk!\n* There are places on this world you can't be without one.",
               '>* Especially the bog basins.\n* All that murky water...',
               '>* Just keep it in mind.'
            ],
            [
               ">{#p/basic}* And no, you can't just get by swimming in those kinds of places.",
               '>* Only some of them.\n* And only at a good time of day.'
            ],
            [
               '>{#p/basic}* Mind you, do monsters even have a sense of the time of day?',
               '>* Most WERE born in space...'
            ],
            [">{#p/basic}* ... maybe that's a question for another time of day."],
            []
         ),
         _frontier5: pager.create(
            0,
            [
               '>{#p/basic}* Three little chairs at the dining table...',
               '>* One for you, one for Asriel, and one for Monster Kid.',
               ">* That's fine, really.\n* Asgore wouldn't know I'm here.",
               '>* Still...',
               '>* It does feel strange not to have a place there.'
            ],
            [
               ">{#p/basic}* Asriel and I loved to swap the chairs around when Mom wasn't looking.",
               ">* Even Asgore would get in on it sometimes.\n* She... wasn't impressed.",
               '>* But it was all in good fun.',
               ">* Heck, he used to check under Asriel's chair for space creatures when he sat down.",
               ">* I'll never forget that time Toriel sat down on the chair, which we swapped beforehand...",
               '>* Asgore gave her the exact same treatment, and it was GLORIOUS.',
               '>* All of us were laughing... except for Toriel, who sat there in disbelief.',
               '>* Well.\n* She came around to it later.'
            ],
            () => [
               ">{#p/basic}* But, yeah... she wasn't much for the chicanery we got up to.",
               SAVE.data.b.c_state_secret1_used && SAVE.data.b.c_state_secret5_used
                  ? ">* And even if she won't be here all the time..."
                  : ">* And although she probably won't visit here much at all...",
               ">* It's a good thing Asriel's got someone like you to calm him down.",
               '>* When he gets excited, he gets REALLY excited.',
               '>* ...',
               '>* ... or, used to, anyway.'
            ],
            () => [
               ">{#p/basic}* I guess it's unfair to think of him as the same person he once was.",
               SAVE.flag.n.killed_sans
                  ? '>* With all that stuff he mentioned about trying to corrupt you...'
                  : '>* With all that stuff he mentioned about hurting you...',
               ">* He's probably a very different person by now.",
               '>* Not unlike myself.',
               '>* I just hope he can make the best of what he has, now.',
               ">* And that you'll be there for him when he needs you."
            ],
            [
               ">{#p/basic}* But I guess I'm starting to repeat myself.",
               ">* We've got a home, we've got sunlight... so there's no reason to complain!",
               '>* ... or something like that.'
            ],
            []
         ),
         _frontier6: pager.create(
            0,
            [
               '>{#p/basic}* Of course they put a microwave in here.',
               '>* Of course they did.',
               ">* No doubt that'll be Asriel's primary source of food.",
               '>* Yeah, he\'s what you\'d call a "microwave master."'
            ],
            [
               ">{#p/basic}* I mean, it's bad enough that so many of our ingredients are replicated these days...",
               '>* Formed with matter-energy conversion nonsense, rather than legitimate cooking.',
               '>* But at least that can still produce something palletable.',
               '>* Using the microwave is just...',
               ">* It's wrong.",
               ">* It's so very wrong."
            ],
            [
               ">{#p/basic}* I mean, that's just my opinion.",
               '>* You can feel free to disagree, and knowing you, you probably do...',
               '>* But some opinions...',
               ">* Let's just say some opinions are more correct than others."
            ],
            [
               '>{#p/basic}* All we can hope for is that Eurybia has a better selection of fresh ingredients.',
               '>* Considering Alphys was the one to seek out planets in the first place...',
               ">* You can't blame me for being at least a little wary."
            ],
            [
               ">{#p/basic}* If Asriel's a microwave master, Alphys would be a microwave overlord.",
               ">* That's all I'm saying."
            ],
            ['>{#p/basic}* No, really.', ">* Won't say anything more."],
            ['>{#p/basic}* ...', '>{#p/basic}* Not in the kitchen, anyway.'],
            []
         ),
         _frontier7: pager.create(
            0,
            [
               ">{#p/basic}* The balcony's just outside...",
               '>* I wonder if the birds are saying anything interesting.',
               '>* Like "what a nice house!"\n* Or "the weather\'s great today."',
               ">* Maybe they don't like the house OR the weather.\n* That'd be... kind of sad.",
               ">* Maybe they're not even birds.\n* Who knows what kinds of sounds birds make here.",
               '>* Who knows if birds even exist here at all.',
               ">* For all we know, what we're hearing are the cries of the damned buried deep underground."
            ],
            [
               '>{#p/basic}* After the monsters have lived here long enough, the planet might gain some form of magic.',
               '>* If that happens, would the animals be affected, too?',
               '>* Would they become conscious?\n* Understand us?',
               '>* Would we understand them?',
               ">* If the sounds we're hearing really ARE cries of the damned, I'm not sure I'd want to know."
            ],
            [
               '>{#p/basic}* But yeah, planetary magic.',
               ">* I think that's what happened to Krios, when monsters first gained THEIR magic.",
               '>* Either that, or the planet already had magic, and gave it to them.',
               ">* We'd have to ask Terrestria about that sort of thing.",
               ">* She'd know."
            ],
            [
               ">{#p/basic}* Hey.\n* Don't be nervous about going out there, Frisk.",
               ">* I'm sure those two would be happy to see you there.",
               '>* And if my analysis of the position is right...',
               '>* The planet itself will, too.'
            ],
            [">{#p/basic}* Don't quote me on that, though.", ">* I'm not much of a chess player."],
            [
               ">{#p/basic}* The smartest move I've ever played in a board game was a double-jump in checkers.",
               '>* It was downhill from there.'
            ],
            [
               ">{#p/basic}* And if we weren't buried in a jungle, it might be downhill from here, too.",
               '>* Not that I blame Asgore for choosing such a low-risk location.',
               ">* He's got two adopted children to think about now...",
               '>* Not to mention his own son.'
            ],
            ['>{#p/basic}* Mountainside living might be cool, but the jungle has its own appeal, too.'],
            []
         ),
         _frontier9: pager.create(
            0,
            [
               '>{#p/basic}* Righty-o.\n* The bathroom.',
               '>* The bathroom, the bathroom, the bathroom...',
               '>* Bathroom bathroom bathroom bathroom bathroom.',
               '>* ...',
               '>* Bathroom.',
               '>* ...',
               '>* Bathroom!!!'
            ],
            [
               '>{#p/basic}* Okay... I will admit.',
               ">* It is pretty cool that you've got extra-fluffy shampoo.",
               ">* Even if it doesn't actually make sense for a human to have it.",
               '>* Unless... you ARE turning into a goat...',
               '>* ... baaah?'
            ],
            [
               '>{#p/basic}* ...',
               ">* There's a distinct possibility you are not the only one who uses this bathroom."
            ],
            []
         ),
         _frontier10: pager.create(
            0,
            [
               ">{#p/basic}* So this is Monster Kid and Asriel's room...",
               ">* I don't have much to say.",
               '>* Though... that poster on the wall is pretty cool.',
               '>* The old homeworld...',
               ">* Only now, it's in sepia tone."
            ],
            [
               ">{#p/basic}* I'm honestly not surprised he made this room so much smaller than yours.",
               ">* He knows monsters very well.\n* If the bed's comfortable, who cares what room it's in?",
               ">* Not monsters, that's who!"
            ],
            ['>{#p/basic}* ...', '>* That must be why Asriel slept in your bed last night as opposed to his.'],
            []
         ),
         _void: pager.create(
            0,
            [
               '>{#p/basic}* From what I can tell...',
               '>* This room belonged to someone who spent a long time doing one specific thing.',
               ">* If I had that kind of free time, I have no idea what I'd do.",
               ">* I do know I wouldn't spend it on such a tedious and demoralizingly-large project.",
               ">* But I'm not them, so I wouldn't know what goes through their head."
            ],
            []
         )
      },
      balconyX: [
         '>{#p/human}* (And yet, despite the sight ahead of you...)',
         ">{#p/human}* (... you can't help but feel as if there's something missing.)"
      ],
      balcony0: ['>{#p/kidd}{#f/3}* Oh, hey Frisk...', '>{#f/1}* I was getting worried you would never wake up!'],
      balcony1: () => [
         '>{#p/kidd}{#f/3}* ... haha.',
         ...(SAVE.data.b.ufokinwotm8
            ? [">{#f/2}* I can't believe I actually...", '>{#f/4}* ... have...']
            : [
               ">{#f/2}* I can't believe I actually have a home now.",
               '>{#f/7}* And with King Asgore!?',
               '>{#f/1}* All the other kids are gonna want to hang out with us...',
               ">{#f/1}* We'll get to throw house parties ALL the time!"
            ])
      ],
      balcony2: () =>
         SAVE.data.b.ufokinwotm8
            ? [
               '>{#p/kidd}{#f/4}* Uh... are you okay?',
               ">{#f/8}* I'm kinda worried about you, dude...",
               '>{#f/7}* Is something wrong?'
            ]
            : [
               '>{#p/kidd}{#f/1}* Man, the books in the librarby were one thing...',
               '>{#p/kidd}{#f/7}* But being on a planet for REAL!?',
               ">{#f/13}* It's SOOOO much cooler!",
               '>{#f/2}* Imagine if we tried to explore it all...',
               ">{#f/1}* We'd never EVER be finished!"
            ],
      balcony3: () =>
         SAVE.data.b.ufokinwotm8
            ? [
               ">{#p/kidd}{#f/4}* (Man, I'm really getting worried now.)",
               '>{#f/7}* Frisk, come on...!',
               '>{#f/7}* You gotta say something to me, dude!',
               ">{#f/8}* I didn't do anything wrong... did I?"
            ]
            : [">{#p/kidd}{#f/2}* Aren't you excited?", '>{#f/1}* You and I are gonna do EVERYTHING together!'],
      balcony0a: ['>{#p/kidd}{#f/1}* Is THIS what living on a planet is like?\n* This is INCREDIBLE!'],
      balcony1a: [
         '>{#p/asriel1}{#f/10}* What?\n* A whole planet of this?',
         '>{#f/20}* Pfft.\n* This is nothing...',
         ">{#f/17}* Just past the forest, there's a giant mountain...",
         '>{#f/17}* And a lake beyond that.'
      ],
      balcony2a: [
         '>{#p/kidd}{#f/2}* That must be the lake with that slimy red goo...',
         '>{#f/1}* Gross AND awesome!'
      ],
      balcony3a: ['>{#p/asriel1}{#f/1}* ... I dare you to swim.'],
      balcony4a: ['>{#p/kidd}{#f/7}* ...', '>{#f/13}* Deal.\n* But only if you swim WITH me!'],
      balcony5a: [
         '>{#p/asriel1}{#f/21}* Uh... I mean...',
         ">{#f/20}* Maybe we'd be better off if we stuck to dune racing."
      ],
      balcony6a: [">{#p/kidd}{#f/6}* You're not afraid of getting sticky red goo all over you, are you?"],
      balcony7a: [
         '>{#p/asriel1}{#f/8}* ... ugh, of course not, you idiot, I just-',
         '>{#p/kidd}{#f/8}* ...',
         ">{#p/asriel1}{#f/25}* ... w-wait, I didn't m-mean to..."
      ],
      balcony8a: ['>{#p/kidd}{#f/4}* Asriel...?', '>{#p/kidd}{#f/4}* Are you okay?'],
      balcony9a: [
         '>{#p/asriel1}{#f/13}* ... I...',
         ">{#f/22}* I'm alright.\n* You didn't do anything wrong, okay?"
      ],
      balcony10a: [
         ">{#p/asriel1}{#f/21}* ... you WOULD just forgive me like that, wouldn't you...",
         ">{#f/23}* You're just an innocent monster kid.",
         ">{#p/kidd}{#f/1}* That's my name!"
      ],
      balcony11a: [
         '>{#p/kidd}{#f/4}* So what were you saying?',
         '>{#p/asriel1}{#f/13}* ...',
         '>{#f/13}* ... there are deserts, but the races would be done in the tubules.'
      ],
      balcony12a: ['>{#p/kidd}{#f/7}* Tubules??\n* What the heck??'],
      balcony13a: [
         ">{#p/asriel1}{#f/10}* Uh...\n* Haven't you read the geological surveys?",
         ">{#p/kidd}{#f/1}* What's a geological survey?",
         '>{#p/asriel1}{#f/15}* ...',
         '>{#f/15}* The tubules are a region made up of... uh, tubes.',
         '>{#f/17}* Large tubes form cliffs, medium tubes form hills, and small tubes, well...',
         ">{#f/20}* They don't really do much, I guess.",
         '>{#p/kidd}{#f/1}* Oh!\n* That makes sense.'
      ],
      balcony14a: [
         ">{#p/kidd}{#f/1}* Do you think there's other planets out there like this?",
         '>{#f/2}* Will we explore those, too?',
         '>{#p/asriel1}{#f/10}* Hmm...\n* No doubt there is...'
      ],
      balcony15a: () => [
         '>{#p/kidd}{#f/7}* Yo... what if we formed an exploration group!\n* To travel the stars!',
         '>{#p/asriel1}{#f/27}* ... huh.',
         ">{#p/kidd}{#f/6}* We'd start with this world, and find everything we can...",
         ">{#p/kidd}{#f/1}* Then we'd visit more worlds, and make a huge map of the whole galaxy!",
         ...(SAVE.data.b.c_state_secret2_used
            ? [">{#p/kidd}{#f/13}* And we should TOTALLY have a secret handshake!\n* Like Gerson's!"]
            : []),
         ...(SAVE.data.b.c_state_secret3_used
            ? [
               ...(SAVE.data.b.c_state_secret2_used
                  ? [">{#p/asriel1}{#f/13}* With any luck, we'll be hand-in-hand with other galaxies' races, too."]
                  : [">{#p/asriel1}{#f/13}* With any luck, we'll be making maps of other galaxies, too."]),
               ">{#f/13}* Dr. Alphys's wormhole travel gives us the means to visit them.",
               ">{#f/17}* We'd be a pan-galactic exploration group."
            ]
            : [
               '>{#p/asriel1}{#f/17}* Woah, uh, slow down there kiddo...',
               ...(SAVE.data.b.c_state_secret2_used
                  ? [
                     '>{#p/asriel1}{#f/17}* ... a secret handshake would be pretty cool, but...',
                     '>{#f/13}* ... as for exploring other planets...'
                  ]
                  : []),
               '>{#f/13}* It took us long enough just to make it here, let alone another world.'
            ])
      ],
      balcony16a: () =>
         SAVE.data.b.c_state_secret3_used
            ? [">{#p/kidd}{#f/14}* Oh yeah, I totally forgot about that!\n* We've GOTTA try that!"]
            : ['>{#p/kidd}{#f/3}* Haha. Maybe.\n* But we could still totally explore it!'],
      balcony17a: [
         '>{#p/asriel1}{#f/17}* Just us, huh?',
         '>{#p/kidd}{#f/1}* Totally, dude!\n* Just the three of us!'
      ],
      balcony18a1: ['>{#p/basic}* ... uh, don\'t you mean "the four of us?"'],
      balcony18a2: ['>{#p/asriel1}{#f/25}* ...!', ">{#f/25}* $(name)... you're..."],
      balcony19a1: ['>{#p/basic}* ... wait, NOW you can hear me?'],
      balcony19a2: [
         ">{#p/basic}* I tried reaching out to you before, but... it didn't work.",
         '>* I wonder what changed...'
      ],
      balcony20a: [">{#p/kidd}{#f/6}* Haha. If you're friends with him, then you're friends with me."],
      balcony21a: ['>{#p/basic}* Wait, YOU can hear me?'],
      balcony22a: [">{#p/kidd}{#f/1}* Kind of hard not to when you're standing there, y'know."],
      balcony23a1: ['>{#p/basic}* YOU CAN SEE ME!?!?'],
      balcony23a2: ['>{#p/basic}* Oh... my god...'],
      balcony24a: [">{#p/basic}* Asriel, how did you not notice me standing here?\n* I'm not even hidden!"],
      balcony25a: ['>{#p/asriel1}{#f/23}* ... $(name), I...'],
      balcony26a1: [
         ">{#p/basic}* Asriel, it's okay.\n* You don't have to be ashamed of it anymore.",
         '>* If you need to cry...',
         '>* ... you can.'
      ],
      balcony26a2: [
         ">{#p/basic}* Having that extra SOUL inside of me must've made it hard to appear visually...",
         '>* Back on the outpost, when I did finally manage to do it...',
         '>* That very same SOUL was released shortly after.',
         ">* ... I guess this means I'll be visible all the time now?",
         ">* To be honest, I'm not sure how to feel about that."
      ],
      balcony27a: ['>{#p/kidd}{#f/7}* Wait, are you a human too!?'],
      balcony28a: [
         '>{#p/basic}* Excuse me?',
         ">* I'm a human GHOST who wants their GOAT brother to be happy.\n* Get it right. Sheesh."
      ],
      balcony29a: ['>{#p/kidd}{#f/14}* ... Asriel is your BROTHER!?', '>{#p/kidd}{#f/4}* This is too much...'],
      balcony30a: [">{#p/kidd}{#f/1}* But, uh, you guys are all cool as heck, which means I'll be okay."],
      balcony31a: [">{#p/basic}* Oh, I KNOW I'm cool.\n* I'm the coolest human ghost this side of the continent."],
      balcony32a: [
         ">{#p/asriel1}{#f/15}* $(name), you're the only human ghost this side of the continent.",
         '>{#f/17}* And the planet.',
         '>{#f/20}* And the galaxy.',
         ">{#f/13}* And the future, since I won't be taking Frisk's SOUL any time soon.",
         '>{#f/15}* And then dying... and then meeting them a hundred years later...',
         '>{#f/17}* Etcetera, etcetera, radical circumstances notwithstanding.'
      ],
      balcony33a: [
         ">{#p/basic}* Pfft.\n* You're funny, Asriel.",
         ">* Being the only human ghost doesn't exclude you from being the coolest human ghost.",
         '>* A certain handsome skeleton would concur.'
      ],
      balcony34a1: [
         '>{#p/kidd}{#f/2}* $(name), huh?',
         ">{#f/1}* That's a nice name.",
         '>{#p/kidd}{#f/6}* My name is Monster Kid.'
      ],
      balcony34a2: ['>{#p/asriel1}{#f/15}* ... did you just...', '>{#p/basic}* Asriel.\n* They said the thing.'],
      balcony35a1: [
         '>{#p/asriel1}{#f/10}* They really did...',
         '>{#p/kidd}{#f/4}* What?\n* Did I say something wrong, or...',
         ">{#p/basic}* No, no, you're fine.\n* You just... uh, reminded us of something.",
         '>{#p/kidd}{#f/1}* Oh.\n* I hope it was something good, then.'
      ],
      balcony35a2: ['>{#p/asriel1}{#f/23}* ... it was.'],
      balcony36a: [
         '>{#p/kidd}{#f/3}* Hey... thanks for being here, guys.',
         '>{#f/1}* With friends like you, living here is gonna be the best!'
      ],
      balcony37a: [
         ">{#p/basic}* ... heh.\n* If we were just friends, maybe.\n* But we're more than that.",
         '>{#p/kidd}{#f/7}* ...?'
      ],
      balcony38a: [">{#p/asriel1}{#f/17}* We're your family."],
      balcony39a: [
         '>{*}{#p/kidd}{#f/1}* Oh!\n* Oh!\n* Does that mean we can- {%}',
         '>{*}{#f/1}* eat together and tell stories and go for nice walks in the park and- {%}',
         '>{*}{#p/asriel1}{#f/20}* Yes, yes, of course- {%}',
         ">{*}{#p/kidd}{#f/1}* We could have sleepovers at other people's houses and- {^999}"
      ],
      trivia: {
         bed: (kiddo: boolean) =>
            SAVE.data.b.svr && !player.metadata.voidkey?.room.startsWith('_frontier') // NO-TRANSLATE
               ? [">{#p/asriel1}{#f/20}* This bed looks like it hasn't been washed in three years..."]
               : [
                  SAVE.data.b.ufokinwotm8
                     ? '>{#p/human}* (You run your hands through the covers of the bed, and note the wear and tear.)'
                     : '>{#p/basic}* This bed, albeit well-made, has seen a lot of use.',
                  ...(kiddo ? ['>{#p/kidd}{#f/1}* Looks comfy! '] : [])
               ],
         plushie: (kiddo: boolean) =>
            SAVE.data.b.svr && !player.metadata.voidkey?.room.startsWith('_frontier') // NO-TRANSLATE
               ? ['>{#p/asriel1}{#f/20}* Whoever lives here must really like plushies.']
               : [
                  SAVE.data.b.ufokinwotm8
                     ? '>{#p/human}* (You glance uninterestedly at the otherwise soft plushie.)'
                     : ">{#p/basic}* I see I'm not the only one who likes the soft things.",
                  ...(kiddo ? ['>{#p/kidd}{#f/3}* Aw, cute.'] : [])
               ],
         computer: (kiddo: boolean) =>
            SAVE.data.b.svr && !player.metadata.voidkey?.room.startsWith('_frontier') // NO-TRANSLATE
               ? [
                  '>{#p/asriel1}{#f/15}* I once dedicated myself to learning how to code...',
                  '>{#p/asriel1}{#f/16}* ... whoever wrote this stuff should reconsider their life choices.'
               ]
               : [
                  SAVE.data.b.ufokinwotm8
                     ? '>{#p/human}* (You wonder if something like this could be the answer to your dissatisfaction.)'
                     : '>{#p/basic}* Color-coded text fills the screen in a monospaced font.',
                  ...(kiddo ? ['>{#p/kidd}{#f/1}* How OLD is this thing?'] : [])
               ],
         flowers: (kiddo: boolean) =>
            SAVE.data.b.svr && !player.metadata.voidkey?.room.startsWith('_frontier') // NO-TRANSLATE
               ? ['>{#p/asriel1}{#f/10}* Huh?\n* What sort of flower is this anyway?']
               : [
                  SAVE.data.b.ufokinwotm8
                     ? '>{#p/human}* (You wonder where these flowers could have come from.)'
                     : '>{#p/basic}* Flowers, the universal symbol for sentimentality.',
                  ...(kiddo ? [">{#p/kidd}{#f/1}* I don't think I've ever seen flowers like THESE before..."] : [])
               ],
         x_window: () =>
            SAVE.data.b.ufokinwotm8
               ? [">{#p/human}* (You can tell it's going to be a day of some variety.)"]
               : [
                  ...(SAVE.data.b.svr ? [">{#p/human}* (You can tell it's going to be a nice day.)"] : []),
                  ">{#p/basic}* It's the start of a new day."
               ],
         x_cab: () =>
            SAVE.data.b.ufokinwotm8
               ? [">{#p/human}* (It's a cabinet full of clothes you feel indifferent about.)"]
               : [
                  ...(SAVE.data.b.svr ? [">{#p/human}* (It's a cabinet full of your favorite clothes.)"] : []),
                  '>{#p/basic}* Various clothes can be found within the cabinet.'
               ],
         x_bed: () =>
            SAVE.data.b.ufokinwotm8
               ? [">{#p/human}* (It's a bed.)\n* (You wish you could just go back to sleep.)"]
               : [
                  ...(SAVE.data.b.svr
                     ? [">{#p/human}* (It's a comfortable bed.)\n* (You had a good night's rest.)"]
                     : []),
                  ">{#p/basic}* It's brand new, just for you."
               ],
         x_lamp: () => [
            ...(SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
               ? [">{#p/human}* (It's a lamp.)\n* (It's just the right height for you to reach it.)"]
               : []),
            ...(SAVE.data.b.ufokinwotm8 ? [] : [">{#p/basic}* It's an oddly short lamp."])
         ],
         x_toybox: () =>
            SAVE.data.b.ufokinwotm8
               ? ['>{#p/human}* (The toys are even less interesting than before.)']
               : [
                  ...(SAVE.data.b.svr
                     ? ['>{#p/human}* (The toys appear to be rather interesting for once.)']
                     : []),
                  ">{#p/basic}* Perhaps these toys aren't so bad after all..."
               ],
         x_wash: () =>
            SAVE.data.b.ufokinwotm8
               ? ['>{#p/human}* (You stare into the drain.)']
               : [
                  ...(SAVE.data.b.svr
                     ? ['>{#p/human}* (But your hands were already as clean as they could be.)']
                     : ['>{#p/human}* (You wonder if your hands could be a little cleaner.)']),
                  ">{#p/basic}* It's a sink.\n* Don't sink too much time into thinking about it."
               ],
         x_toilet: () =>
            SAVE.data.b.ufokinwotm8
               ? ['>{#p/human}* (You ignore the toilet.)']
               : [
                  ...(SAVE.data.b.svr
                     ? ['>{#p/human}* (You tip up the toilet lid.)\n* (You then tip it back down.)']
                     : []),
                  ...(SAVE.data.b.ufokinwotm8 ? [] : [">{#p/basic}* It's a toilet.\n* What else would it be."])
               ],
         x_bathrub: () =>
            SAVE.data.b.ufokinwotm8
               ? ['>{#p/human}* (You wonder if a warm bath would make you feel better.)']
               : [
                  ...(SAVE.data.b.svr ? ['>{#p/human}* (You look forward to taking your next warm bath.)'] : []),
                  '>{#p/basic}* Everything in this room is fit exactly to your size...'
               ],
         x_mirror: () => [
            ...(SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
               ? ['>{#p/human}* (As you stare into the mirror, you reflect on the journey you took to get here.)']
               : []),
            ...(SAVE.data.b.ufokinwotm8 ? [] : [">{#p/basic}* No matter what happens, it'll always be you."])
         ],
         x_sign1: () => [
            ...(SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
               ? ['>{#p/human}* (The sign describes adjusting to life on a new planet.)']
               : []),
            ...(SAVE.data.b.ufokinwotm8
               ? []
               : [
                  '>{#p/basic}* It\'s a five-step guide on how to adjust to planet-bound life.\n* They all amount to "have fun."'
               ])
         ],
         x_sign2: () => [
            ...(SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
               ? ['>{#p/human}* (The sign outlines tasks that are yet to be completed.)']
               : []),
            ...(SAVE.data.b.ufokinwotm8
               ? []
               : [">{#p/basic}* It's a list of various pending tasks relating to building a new community."])
         ],
         x_plant: () =>
            SAVE.data.b.ufokinwotm8
               ? ['>{#p/human}* (You caress the plant and sigh as it sighs with you.)']
               : [
                  ...(SAVE.data.b.svr
                     ? ['>{#p/human}* (You caress the plant and smile as it smiles back at you.)']
                     : []),
                  '>{#p/basic}* This plant will always be happy to see you.'
               ],
         x_desk: () =>
            SAVE.data.b.ufokinwotm8
               ? ['>{#p/human}* (You stare into the empty diary, wishing you could write your own story.)']
               : [
                  ...(SAVE.data.b.svr
                     ? [
                        '>{#p/human}* (You stare into the empty diary, wondering what stories are yet to be told.)'
                     ]
                     : []),
                  ">{#p/basic}* It's a diary.\n* It's completely blank.",
                  ">{#p/basic}* Asgore's favorite diary- writing chair must still be on the transport ship."
               ],
         x_paperwork: () => [
            ...(SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
               ? ['>{#p/human}* (You wonder if any of these items could belong to you.)']
               : []),
            ...(SAVE.data.b.ufokinwotm8
               ? []
               : ['>{#p/basic}* The papers list various items that have yet to be taken in.'])
         ],
         x_trash: () => [
            ...(SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
               ? [">{#p/human}* (You can't make out what's in the trash...)"]
               : []),
            ...(SAVE.data.b.ufokinwotm8
               ? []
               : [">{#p/basic}* There is a crumpled up recipe for Starling Tea.\n* That's not his trash can..."])
         ],
         x_bed_large: () => [
            ...(SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
               ? ['>{#p/human}* (The bed still seems to be way too large for you.)']
               : []),
            ...(SAVE.data.b.ufokinwotm8 ? [] : [">{#p/basic}* Despite everything, it's still a king-sized bed."])
         ],
         x_cactus: () =>
            SAVE.data.b.ufokinwotm8
               ? ['>{#p/human}* (You poke the cactus.)\n* (It pokes back.)']
               : [
                  ...(SAVE.data.b.svr
                     ? [
                        '>{#p/human}* (You poke the cactus.)\n* (The cactus is touched by your sense of affection.)'
                     ]
                     : []),
                  '>{#p/basic}* So she finally gave up her inner cactus, eh...?'
               ],
         x_booktable: () =>
            SAVE.data.b.ufokinwotm8
               ? [">{#p/human}* (But you weren't in the mood to read a diary.)"]
               : [
                  ...(SAVE.data.b.svr
                     ? ['>{#p/human}* (The book contains the diary entries of Monster Kid.)']
                     : [">{#p/basic}* It's Monster Kid's diary."]),
                  '>{#p/human}* (You read the first and only entry...)',
                  '>{#p/kidding}* "So asgores my dad now huh? Thats weird. But also AWESOME!"',
                  '>{#p/kidding}* "Asgore said i should put on some new clothes so maybe ill do that later."',
                  '>{#p/kidding}* "He also said i should write a diary to keep track of things."',
                  '>{#p/kidding}* "Im pretty good at reading and writing so this should be really easy."',
                  '>{#p/kidding}* "And frisk can totally help me if i do something wrong!"',
                  '>{#p/kidding}* "Frisk if youre reading this please tell me what i did wrong."',
                  '>{#p/human}* (You close the diary.)'
               ],
         x_bed_left: () => [
            ...(SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
               ? [">{#p/human}* (You check under the covers to make sure it's safe to sleep.)"]
               : []),
            ...(SAVE.data.b.ufokinwotm8 ? [] : [">{#p/basic}* It's Monster Kid's bed."])
         ],
         x_knickknacks: () => [
            ...(SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
               ? ['>{#p/human}* (You re-arrange the knick knacks to pass the time.)\n* (You hope nobody notices.)']
               : []),
            ...(SAVE.data.b.ufokinwotm8 ? [] : [">{#p/basic}* It's a shelf full of various toys and knick knacks."])
         ],
         x_bed_right: () =>
            SAVE.data.b.svr
               ? [
                  '>{#p/human}* (You pat the plushie.)\n* (It might just be you, but it seems a little happier.)',
                  ">{#p/basic}* It's Asriel's bed.\n* It doesn't look like it's been used yet."
               ]
               : [],
         x_bookshelf: (() => {
            const pages = pager.create(
               1,
               [
                  '>{#p/basic}* "EURYBIA GEOLOGICAL SURVEY"\n* "Authored by the Royal Science Division (RSD)."',
                  '>* "Preliminary scans of the surface have revealed vast diversity in its ecosystems."',
                  '>* "Each section of this report will concentrate on biomes of a specific type."',
                  '>* "Sections are as follows."',
                  '>* "SECTION 001 - Subterranian"\n* "SECTION 002 - Oceanic"\n* "SECTION 003 - Structural"',
                  '>* "SECTION 004 - Magnetic"\n* "SECTION 005 - Airborne"\n* "SECTION 006 - Forested"',
                  '>* "SECTION 007 - Spired"\n* "SECTION 008 - Metallic"\n* "SECTION 009 - Crystalline"',
                  ">* Jeez, how many ARE there?\n* Let's just stop reading here."
               ],
               [
                  '>{#p/basic}* "Howdy, fellow gardeners."',
                  '>* "When it comes to Starling flowers, the line between growth and stagnation..."',
                  '>* "Is access to open space."',
                  '>* "That is why they were commonly grown in Aerialis..."',
                  '>* "Though, on Eurybia, the best place to grow them is unknown."',
                  '>* "For the moment, it is recommended that they be grown in orbit."',
                  '>* "Space station five will be deployed on date K-615.12."',
                  '>* "If this date has not yet arrived, a shuttlecraft will suffice."'
               ],
               [
                  '>{#p/basic}* "In the beginning, there was nothing."',
                  '>* "Then... the human appeared out of thin air."',
                  '>* "The human and the bunny gave each other a big, fluffy hug..."',
                  '>* "But then...!"\n* "The human and the bunny could hug no longer."',
                  '>* "Shocking!"\n* "Their world views had been shaken to their cores."',
                  '>* "Later, after much time had passed, the human began working on a solution."',
                  '>* "Day by day, the human worked tirelessly, all so they could hug their bunny once again."',
                  '>* "Eventually... the human\'s work was complete, and the bunny was ready."',
                  '>* "The human opened their arms, waiting for the bunny to approach..."',
                  '>* "Before they knew it, the bunny was already in their arms!"',
                  '>* "And so it was that the human and the bunny lived fluffily ever after."'
               ],
               () =>
                  SAVE.data.b.c_state_secret3_used
                     ? [
                        '>{#p/basic}* "Wormhole experiment report!"\n* "From Dr. Alphys to Asgore"',
                        '>* "Progress on my wormhole experiment is going smoothly!"',
                        '>* "Ever since Frisk forwarded the professor\'s equations, I\'ve made steady progress."',
                        '>* "I\'ve even managed to send small objects through the aperture..."',
                        '>* "In my next test, I\'ll send a tethered scanner through and see what it picks up."',
                        '>* "Wormholes for monster travel could be here as soon as K-616.05!"'
                     ]
                     : [
                        '>{#p/basic}* "Wormhole experiment report."\n* "From Dr. Alphys to Asgore"',
                        '>* "Progress on my wormhole experiment has hit a snag."',
                        '>* "The professor\'s incomplete equations haven\'t been enough to get things working."',
                        '>* "I\'ll keep trying, but I can\'t go too fast without putting my life at risk."',
                        '>* "In my next experiment, I\'ll see if I can get the aperture to last a little longer..."',
                        '>* "Wormholes for monster travel won\'t be coming any time soon."'
                     ],
               [
                  '>{#p/basic}* "You have received an invitation to the transport ship triumph!"',
                  '>* "Events will be held from stem to stern, including hovercar races and dance raves!"',
                  '>* "When we reach the homeworld, a final event will be held on the forward section lounge!"',
                  '>* "This is an experience you won\'t want to miss, so get up and get loud while you can!"',
                  '>* "Please note that this invitation expires upon reaching the homeworld."',
                  '>* "Can\'t wait to see you there!"'
               ],
               [
                  '>{#p/basic}* "Toriel\'s fur care guide, dated K-614.09."',
                  '>* "When shedding fur, one must always take great care to dispose properly."',
                  '>* "The trash can is the obvious choice, but I myself prefer the sink."',
                  '>* "If you shed often, consider investing in a sink with garbage disposal."',
                  '>* "Regarding softness, the side you sleep on will be the most affected."',
                  '>* "If you prefer your head or body fur to be soft, sleep on your side."',
                  '>* "To keep your arms and legs soft, sleep on your back."',
                  '>* "Thank you, dear readers."\n* "That will be all."'
               ]
            );
            return () =>
               SAVE.data.b.ufokinwotm8
                  ? [">{#p/human}* (But you weren't in the mood to read a book.)"]
                  : [
                     ...(SAVE.data.b.svr
                        ? [
                           '>{#p/human}* (The books on this bookshelf are capable of swapping their content on-demand.)'
                        ]
                        : [
                           '>{#p/basic}* The books are all blank, but get filled with the text of the book you select.'
                        ]),
                     ">{#p/human}* (You select a book from the control panel, and pick it out once it's ready...)",
                     ...pages(),
                     '>{#p/human}* (You put the book back on the shelf.)'
                  ];
         })(),
         x_endtable: () =>
            SAVE.data.b.ufokinwotm8
               ? [
                  SAVE.data.b.water
                     ? '>{#p/human}* (You observe the end table, and the cup on top of it.)\n* (It seems disturbed.)'
                     : '>{#p/human}* (You observe the end table.)\n* (It seems disturbed.)'
               ]
               : [
                  ...(SAVE.data.b.svr
                     ? [
                        SAVE.data.b.water
                           ? '>{#p/human}* (You observe the end table, and the cup on top of it.)\n* (It seems pleased.)'
                           : '>{#p/human}* (You observe the end table.)\n* (It seems pleased.)'
                     ]
                     : []),
                  '>{#p/basic}* At last...\n* A remarkable end table.',
                  ...(SAVE.data.b.water
                     ? [
                        '>{#p/basic}* It even has a cup of electro- dampening fluid on it.\n* Truly, a sippy you can rely on.'
                     ]
                     : [])
               ],
         x_chasgore: () => [
            ...(SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
               ? SAVE.data.b.c_state_secret1_used && SAVE.data.b.c_state_secret5_used
                  ? ['>{#p/human}* (The chair strikes you as being where it belongs.)']
                  : ['>{#p/human}* (The chair strikes you as being out of place.)']
               : []),
            ...(SAVE.data.b.ufokinwotm8
               ? []
               : ['>{#p/basic}* A comfy reading chair...', ">* Doesn't seem like the right size for Asgore."])
         ],
         x_window_left: () =>
            SAVE.data.b.ufokinwotm8
               ? ['>{#p/human}* (Staring out the window, you wonder where you went wrong to deserve this feeling.)']
               : [
                  ...(SAVE.data.b.svr
                     ? [
                        '>{#p/human}* (Staring out the window, you feel nothing but excitement for the future ahead.)'
                     ]
                     : []),
                  '>{#p/basic}* The window accentuates the atmosphere outside.'
               ],
         x_window_right: () =>
            SAVE.data.b.ufokinwotm8
               ? ['>{#p/human}* (Staring out the window, you ask yourself why things had to end up this way.)']
               : [
                  ...(SAVE.data.b.svr
                     ? [
                        ">{#p/human}* (Staring out the window, you remind yourself of how long you've waited to get here.)"
                     ]
                     : []),
                  '>{#p/basic}* The window enhances the atmosphere inside.'
               ],
         x_plant_left: () =>
            SAVE.data.b.ufokinwotm8
               ? ['>{#p/human}* (You touch the plant lightly.)\n* (It understands your pain.)']
               : [
                  ...(SAVE.data.b.svr
                     ? [
                        '>{#p/human}* (You touch the plant lightly.)\n* (It shakes and bobs, relieved that you were here.)'
                     ]
                     : []),
                  '>{#p/basic}* A compassionate plant.'
               ],
         x_plant_right: () =>
            SAVE.data.b.ufokinwotm8
               ? ['>{#p/human}* (You touch the plant lightly.)\n* (It promises things will get better for you.)']
               : [
                  ...(SAVE.data.b.svr
                     ? ['>{#p/human}* (You touch the plant lightly.)\n* (It appreciates the gesture.)']
                     : []),
                  '>{#p/basic}* An optimistic plant.'
               ],
         x_sign3: () => [
            ...(SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
               ? [">{#p/human}* (The sign doesn't appear to hold anything of note.)"]
               : []),
            ...(SAVE.data.b.ufokinwotm8
               ? []
               : [
                  ">{#p/basic}* It's a digital picture frame.\n* All it needs now are some good memories, in visual form."
               ])
         ],
         x_chair1: () => [
            ...(SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
               ? ['>{#p/human}* (You note the fairly large size of the dining chair.)']
               : []),
            ...(SAVE.data.b.ufokinwotm8
               ? []
               : SAVE.data.b.c_state_secret1_used && SAVE.data.b.c_state_secret5_used
                  ? [">{#p/basic}* One of Asgore's dining chairs.\n* Fit for a mother."]
                  : [">{#p/basic}* One of Asgore's dining chairs.\n* Not fit for anyone."])
         ],
         x_chair2: () => [
            ...(SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
               ? ['>{#p/human}* (You note the small size of the dining chair.)']
               : []),
            ...(SAVE.data.b.svr
               ? [">{#p/basic}* One of Asgore's dining chairs.\n* Fit for a brother."]
               : SAVE.data.b.ufokinwotm8
                  ? []
                  : [">{#p/basic}* One of Asgore's dining chairs.\n* Not fit for anyone."])
         ],
         x_chair3: () =>
            SAVE.data.b.ufokinwotm8
               ? ['>{#p/human}* (You wonder if this chair is still fit for a little angel.)']
               : [
                  ...(SAVE.data.b.svr
                     ? [
                        '>{#p/human}* (You note the perfect size of the dining chair.)',
                        ">{#p/basic}* It's fit just for you, Frisk."
                     ]
                     : [">{#p/basic}* One of Asgore's dining chairs.\n* Still fit for a child."])
               ],
         x_chair4: () => [
            ...(SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
               ? ['>{#p/human}* (You note the slightly small size of the dining chair.)']
               : []),
            ...(SAVE.data.b.svr
               ? [">{#p/basic}* One of Asgore's dining chairs.\n* Fit for a sibling."]
               : SAVE.data.b.ufokinwotm8
                  ? []
                  : SAVE.data.b.f_state_kidd_betray
                     ? [">{#p/basic}* One of Asgore's dining chairs.\n* Not fit for anyone."]
                     : [">{#p/basic}* One of Asgore's dining chairs.\n* Fit for a monster."])
         ],
         x_chair5: () => [
            ...(SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
               ? ['>{#p/human}* (You note the exceptional size of the dining chair.)']
               : []),
            ...(SAVE.data.b.svr
               ? [">{#p/basic}* One of Asgore's dining chairs.\n* Fit for a father."]
               : SAVE.data.b.ufokinwotm8
                  ? []
                  : [">{#p/basic}* One of Asgore's dining chairs.\n* Still fit for a king."])
         ],
         x_fridge: () =>
            SAVE.data.b.ufokinwotm8
               ? ['>{#p/human}* (You place your hands on the exterior of the fridge.)\n* (It groans harshly.)']
               : [
                  ...(SAVE.data.b.svr
                     ? ['>{#p/human}* (You place your hands on the exterior of the fridge.)\n* (It purrs gently.)']
                     : []),
                  ...[
                     ['>{#p/basic}* The fridge is mostly empty, save for a single glass of water from Undyne.'],
                     [
                        '>{#p/basic}* The fridge is mostly empty, save for a single bottle of exoberry punch from Undyne.'
                     ],
                     [
                        '>{#p/basic}* The fridge is mostly empty, save for a single mug of hot cocoa from Undyne.',
                        ">* ... it's freezing cold by now."
                     ],
                     [
                        '>{#p/basic}* The fridge is mostly empty, save for a single cup of Starling tea from Undyne.',
                        ">* ... it's freezing cold by now."
                     ]
                  ][SAVE.data.n.undyne_drink]
               ],
         x_sink: () => [
            ...(SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
               ? [">{#p/human}* (Surprisingly, you can't find any residue in the sink.)"]
               : []),
            ...(SAVE.data.b.ufokinwotm8
               ? []
               : ['>{#p/basic}* No fur, no hair...\n* Indeed, these are the wonders of technology.'])
         ],
         x_drawer: () =>
            SAVE.data.b.ufokinwotm8
               ? ['>{#p/human}* (You open the drawer, and pet the dog within for comfort.)']
               : [
                  ...(SAVE.data.b.svr ? ['>{#p/human}* (You open the drawer, and wave to the dog within.)'] : []),
                  '>{#p/basic}* That dog, in that drawer...\n* Better not let Papyrus catch wind of this.'
               ],
         x_stove: () =>
            SAVE.data.b.ufokinwotm8
               ? ['>{#p/human}* (You wonder if the stove will burn this house down, too.)']
               : [
                  ...(SAVE.data.b.svr
                     ? ['>{#p/human}* (You wonder what delicious meals will be made here.)']
                     : []),
                  ">{#p/basic}* It's the same model as Undyne's stove...",
                  '>* We can only hope it came equipped with the appropriate safety measures this time.'
               ],
         x_sign4: () => [
            ...(SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
               ? ['>{#p/human}* (The sign lists instructions to a certain recipe.)']
               : []),
            ...(SAVE.data.b.ufokinwotm8
               ? []
               : [
                  '>{#p/basic}* Tucca Zunasca, a new kind of soup for a new kind of world.',
                  '>* In a pot, brown a sausage, adding spicy pepper flakes as needed.',
                  '>* Add two Kriatas of basic stock, and bring the pot to a boil.',
                  '>* For best results, apply fire magic. Otherwise, oxygenated flame will suffice.',
                  '>* Dice one pound of Eurybian potatoes, and add them to the boiling pot.',
                  '>* Once the mixture begins to sparkle, begin adding whipping cream and bar-bird broth.',
                  '>* For now, source the cream from the giga-vine canopy. Other sources may be found later.',
                  '>* Additionally, kale or kretaada may be added, and cooked at high intensity until soft.',
                  '>* Once complete, your soup should be ready for the table!'
               ])
         ]
      },
      moniker: [
         ['Heartbreaker', 'Heartbreaker', 'Heartbreaker', 'Heart- breaker'],
         ['the Yellow Kid', 'Yellow Kid', 'Kid', 'Yellow Kid'],
         ['the Oncoming Storm', 'Oncoming Storm', 'Storm', 'Oncoming Storm'],
         ['Hyper Rage', 'Hyper Rage', 'Rage', 'Hyper Rage'],
         ['Space Invader', 'Space Invader', 'Invader', 'Space Invader']
      ] as [string, string, string, string][]
   },

   b_act: {
      activate: '* Activate',
      advice: '* Advice',
      agree: '* Agree',
      alphys: '* Alphys',
      analyze: '* Analyze',
      annoy: '* Annoy',
      appease: '* Appease',
      approach: '* Approach',
      asgore: '* Asgore',
      asriel: '* Asriel',
      asrieldreemurr: '§fill=#ff7f7f§§swirl=2/1/1.05§§hue§* Asriel Dreemurr',
      bathe: '* Bathe',
      beckon: '* Beckon',
      bedtime: '* Bed Time',
      berate: '* Berate',
      blind: '* Blind',
      boast: '* Boast',
      boo: '* Boo',
      boost: '* Boost',
      bow: '* Bow',
      break: '* Break',
      burn: '* Burn',
      carry: '* Carry',
      challenge: '* Challenge',
      charge: '* Charge',
      check: '* Check',
      cheer: '* Cheer',
      clean: '* Clean',
      cocoa: '* Cocoa',
      comfort: '* Comfort',
      compliment: '* Compliment',
      compose: '* Compose',
      conclude: '* Conclude',
      console: '* Console',
      counter: '* Counter',
      create: '* Create',
      criticize: '* Criticize',
      cuddle: '* Cuddle',
      cut: '* Cut',
      dance: '* Dance',
      dream: '* Dream',
      dinnertime: '* Dinner Time',
      direct: '* Direct',
      disarm: '* Disarm',
      disown: '* Disown',
      diss: '* Diss',
      distance: '* Distance',
      distract: '* Distract',
      ditch: '* Ditch',
      dontpick: '* Dont Pick On',
      encourage: '* Encourage',
      escort: '* Escort',
      flash: '* Flash',
      flirt: '* Flirt',
      grin: '* Grin',
      guide: '* Guide',
      handshake: '* Handshake',
      hangout: '* Hang Out',
      heckle: '* Heckle',
      heel: '* Heel Turn',
      highfive: '* High Five',
      home: '* Home',
      hope: '* Hope',
      hug: '* Hug',
      hum: '* Hum',
      hypothesize: '* Hypothesize',
      ignore: '* Ignore',
      inquire: '* Inquire',
      insult: '* Insult',
      joke: '* Joke',
      agreement: '* Agreement',
      call: '* Call',
      dinner: '* Dinner',
      judgement: '* Judgement',
      laugh: '* Laugh',
      lecture: '* Lecture',
      leech: '* Leech',
      lesson: '* Lesson',
      mislead: '* Mislead',
      mix: '* Mix',
      mystify: '* Mystify',
      notes: '* Notes',
      object: '* Object',
      papyrus: '* Papyrus',
      password: '* Password',
      pat: '* Pat',
      pay: '* Pay',
      perch: '* Perch',
      pet: '* Pet',
      pick: '* Pick On',
      play: '* Play',
      playdead: '* Play Dead',
      plead: '* Plead',
      pluck: '* Pluck',
      poke: '* Poke',
      pose: '* Pose',
      praise: '* Praise',
      promise: '* Promise',
      punch: '* Punch',
      puzzle: '* Puzzle',
      puzzlehelp: '* Puzzle Help',
      rap: '* Rap',
      reassure: '* Re-Assure',
      release: '* Release',
      resniff: '* Re-Sniff',
      rest: '* Rest',
      roll: '* Roll Around',
      sample: '* Sample',
      sans: '* Sans',
      scream: '* Scream',
      secret: '* Secret',
      shout: '* Shout',
      shove: '* Shove',
      siphon: '* Siphon',
      sit: '* Sit',
      slap: '* Slap',
      smile: '* Smile',
      someoneelse: '* Someone else',
      spark: '* Spark',
      stare: '* Stare',
      steal: '* Steal',
      storytime: '* Story Time',
      suggest: '* Suggest',
      talk: '* Talk',
      taunt: '* Taunt',
      tea: '* Tea',
      telloff: '* Tell Off',
      terrorize: '* Terrorize',
      test_a: '* Binding',
      test_b: '* Prosthesis',
      test_c: '* Infusion',
      threaten: '* Threaten',
      tickle: '* Tickle',
      topple: '* Topple',
      toriel: '* Toriel',
      translate: '* Translate',
      travel: '* Travel',
      trivia: '* Trivia',
      tug: '* Tug',
      turn: '* Turn',
      undyne: '* Undyne',
      walk: '* Walk',
      water: '* Water',
      whisper: '* Whisper',
      whistle: '* Whistle',
      yell: '* Yell'
   },

   b_group_common: {
      nobody: () => (!world.genocide && world.bullied ? '* ... but everybody ran.' : '* ... but nobody came.')
   },

   b_opponent_dummy: {
      act_check: [">{#p/story}* DUMMY - ATK 0 DEF 0\n* A ghost within the shell, they hope you're doing well."],
      act_flirt: [
         '>{#p/human}* (You flirt with the dummy.)',
         ">{#p/basic}* It went exactly how you'd expect.",
         '>* Toriel is trying not to laugh.'
      ],
      act_hug: ['>{#p/human}* (You hug the dummy.)'],
      act_slap: ['>{#p/human}* (You slap the dummy.)'],
      act_talk: [
         '>{#p/human}* (You talk to the dummy.)',
         ">{#p/basic}* It doesn't seem much for conversation.",
         '>* Toriel is pleased with you.'
      ],
      bored: ['>{#p/basic}* The dummy grew tired of your aimless shenanigans.'],
      hugged: ['>{#p/basic}* The dummy is blushing... somehow.'],
      name: '* Dummy',
      slapped: ['>{#p/basic}* Suddenly...!'],
      status1: ['>{#p/story}* You encountered the dummy.'],
      status2: [">{#p/story}* The dummy looks like it's already getting bored."],
      status3: [">{#p/story}* The dummy looks like it's lost in itself."],
      status4: [">{#p/story}* The dummy looks like it's going to fall over."],
      talk: ['>{#p/basic}{#i/20}{~}.....{}']
   },
   b_opponent_maddummy: {
      epiphaNOPE1: [">{#p/basic}{~}{#x3}Ugh, you're WASTING my time!"],
      epiphaNOPE2: ['>{#p/basic}{~}Oh.. how strange.'],
      act_check: () =>
         16 <= SAVE.data.n.kills_wastelands
            ? [">{#p/story}* GLAD DUMMY - ATK 0 DEF 0\n* It's a dream come true!"]
            : ['>{#p/story}* MAD DUMMY - ATK 30 DEF 255\n* Impervious to physical attacks.'],
      act_flirt: () =>
         16 <= SAVE.data.n.kills_wastelands
            ? [
               '>{#p/human}* (You flirt with Glad Dummy.)',
               ">{#p/basic}* They're too distracted with themselves to hear you."
            ]
            : ['>{#p/human}* (You flirt with Mad Dummy.)', ">* It went exactly how you'd expect."],
      act_hug: () =>
         16 <= SAVE.data.n.kills_wastelands
            ? ['>{#p/human}* (You hug Glad Dummy.)']
            : ['>{#p/human}* (You hug Mad Dummy.)'],
      act_slap: () =>
         16 <= SAVE.data.n.kills_wastelands
            ? [
               '>{#p/human}* (You slap Glad Dummy.)',
               '>{#p/basic}* Glad Dummy exerts the better part of valor and gets out of your way.'
            ]
            : ['>{#p/human}* (You slap Mad Dummy.)'],
      act_talk: () =>
         16 <= SAVE.data.n.kills_wastelands
            ? [
               '>{#p/human}* (You talk to Glad Dummy.)',
               ">{#p/basic}* They're too distracted with themselves to hear you."
            ]
            : [
               '>{#p/human}* (You talk to Mad Dummy.)',
               ">* They don't seem much for conversation.",
               '>* Nobody is happy with this.'
            ],
      boredTalk: [
         '>{#p/basic}{~}{#x3}What the hell?',
         '>{#p/basic}{~}{#x1}Why is NOTHING hap- pening?',
         '>{#p/basic}{~}{#x4}Am I INVISIBLE to you or something??',
         '>{#p/basic}{~}{#x4}...',
         ">{#p/basic}{~}{#x4}I CAN'T EVEN BE MAD AT YOU!!!",
         ">{#p/basic}{~}{#x4}You're so... INANIMATE!",
         '>{#p/basic}{~}{#x4}JUST... GAHH!\nGET OUT OF MY LIFE!',
         '>{#p/basic}{~}{#x4}GO LISTEN TO MUSIC WITH NAPSTABLOOK OR SOMETHING!'
      ],
      changeStatus1: ['>{#p/story}* Mad Dummy is getting cotton all over the floor.'],
      changeStatus2: ['>{#p/story}* Mechanical whirrs fill the room.'],
      fightFail: [
         '>{#p/basic}{~}{#x1}Foolish.\nFoolish!\nFOOLISH!',
         '>{#p/basic}{~}{#x3}Even if you attack my vessel...',
         ">{#p/basic}{~}{#x4}... you'll NEVER hurt ME!",
         ">{#p/basic}{~}{#x1}I'm still incor- poreal, you dummy!!!"
      ],
      final1: () => [
         ">{#p/napstablook}{~}sorry, i interrupted you, didn't i...",
         '>{#p/napstablook}{~}as soon as i came over, your friend immediately left...',
         ...(SAVE.data.n.state_wastelands_napstablook === 2
            ? [
               ">{#p/napstablook}{~}oh wait...\ndidn't you attack me before...",
               ">{#p/napstablook}{~}uhhh...\nthat's awkward.",
               '>{#p/napstablook}{~}sorry...'
            ]
            : [
               '>{#p/napstablook}{~}oh no...\nyou guys looked like you were having fun...',
               '>{#p/napstablook}{~}oh no...\ni just wanted to say hi...',
               '>{#p/napstablook}{~}oh no......\n...........\n...........\n...........\n...........'
            ])
      ],
      gladTalk1: ['>{#p/basic}{~}Thanks!'],
      gladTalk2: ['>{#p/basic}{~}Thank you!'],
      gladTalk3: ['>{#p/basic}{~}Great work!'],
      gladTalk4: ['>{#p/basic}{~}Bravo!'],
      gladTalk5: ['>{#p/basic}{~}OK!'],
      gladTalk6: ['>{#p/basic}{~}...'],
      hugTalk1: () =>
         16 <= SAVE.data.n.kills_wastelands
            ? [
               '>{#p/basic}{~}My haphe- phobia!',
               ">{#p/basic}{~}It's gone!",
               '>{#p/basic}{~}Thank you.. human..',
               ">{#p/basic}{~}I've never felt so happy.."
            ]
            : SAVE.data.n.state_wastelands_dummy === 4
               ? ['>{#p/basic}{~}{#x4}Are you for REAL??']
               : ['>{#p/basic}{~}{#x3}N-no..!\nI have haphe- phobia!'],
      hugTalk2: ['>{#p/basic}{~}{#x4}Stop that!'],
      hugTalk3: ['>{#p/basic}{~}{#x2}Knock it off!'],
      hugTalk4: ['>{#p/basic}{~}{#x3}...'],
      name: () => (16 <= SAVE.data.n.kills_wastelands ? '* Glad Dummy' : '* Mad Dummy'),
      phase2Talk1: [">{#p/basic}{~}{#x1}I'll defeat you and take your SOUL!"],
      phase2Talk2: [">{#p/basic}{~}{#x1}I'll use your SOUL to break the force field!"],
      phase2Talk3: ['>{#p/basic}{~}{#x6}The other monsters will love me, praise me...!'],
      phase2Talk4: ['>{#p/basic}{~}{#x4}THEN EVERYTHING I WANT WILL BE MINE!'],
      phase2Talk5: [">{#p/basic}{~}{#x3}Huh?\nYeah, I guess that'll avenge my cousin."],
      phase2Talk6: ['>{#p/basic}{~}{#x5}Do my other cousins care...?'],
      phase2Talk7: ['>{#p/basic}{~}{#x4}Whatever.\nWhatever!\nWHATEVER!'],
      phase2Talk8: ['>{#p/basic}{~}{#x1}...'],
      phase3Talk1: ['>{#p/basic}{~}{#x1}DUMMY BOTS!\nMAGIC MISSILE!'],
      phase3Talk2: ['>{#p/basic}{~}{#x3}DUMMY BOTS!\nTRY AGAIN!'],
      phase3Talk3: [">{#p/basic}{~}{#x5}DUMMY BOTS!\nYou're awful???"],
      phase3Talk4: ['>{#p/basic}{~}{#x4}DUMMY BOTS!\nFINAL ATTACK!'],
      phaseChange1: [
         '>{#p/basic}{~}{#x2}OWWWW, you DUMMIES!!',
         '>{#p/basic}{~}{#x1}Watch where you aim your {@fill=#f00}MAGIC{@fill=#000} attacks!',
         '>{#p/basic}{~}{#x4}...',
         '>{#p/basic}{~}{#x4}Hey!\nYou!',
         '>{#p/basic}{~}{#x3}Forget I said anything about {@fill=#f00}MAGIC{@fill=#000}.'
      ],
      phaseChange2a: ['>{#p/basic}{~}{#x4}HEY GUYS!'],
      phaseChange2b1: [
         '>{#p/basic}{~}{#x1}Dummies.\nDummies!\nDUMMIES!',
         '>{#p/basic}{~}{#x3}Remember how I said NOT to shoot at me?',
         '>{#p/basic}{~}{#x3}Well...'
      ],
      phaseChange2b2: [">{#p/basic}{~}{#x4}FAILURES!\nYOU'RE FIRED!\nYOU'RE ALL BEING REPLACED!"],
      phaseChange2c: [
         '>{#p/basic}{~}{#x4}Hahaha.\nHahaha!\nHAHAHA!',
         ">{#p/basic}{~}{#x3}Now you'll see my true power...",
         ">{#p/basic}{~}{#x6}Relying on people that aren't garbage!"
      ],
      phaseChange3a1: [
         '>{#p/basic}{~}{#x3}N... no way!',
         '>{#p/basic}{~}{#x3}These guys are WORSE than the other guys!'
      ],
      phaseChange3a2: [
         '>{#p/basic}{~}{#x1}Who cares.\nWho cares!\nWHO CARES!',
         ">{#p/basic}{~}{#x4}I DON'T NEED FRIENDS!!"
      ],
      phaseChange3b: [">{#p/basic}{~}{#x6}I'VE GOT KNIVES!!!"],
      phaseChange3c1: [">{#p/basic}{~}{#x3}I'm...", '>{#p/basic}{~}{#x3}Out of knives.'],
      phaseChange3c2: [
         ">{#p/basic}{~}{#x4}BUT IT DOESN'T MATTER!!!",
         ">{#p/basic}{~}{#x4}YOU CAN'T HURT ME AND I CAN'T HURT YOU!",
         ">{#p/basic}{~}{#x1}YOU'LL BE STUCK FIGHTING ME..."
      ],
      phaseChange3c3: ['>{#p/basic}{~}{#x1}Forever.'],
      phaseChange3c4: ['>{#p/basic}{~}{#x4}Forever!'],
      phaseChange3c5: ['>{#p/basic}{~}{#x6}FOREVER!!!!'],
      phaseChange3d: ['>{*}{#p/basic}{~}{#x6}AHAHAHAHA HAHAHAHAH AHAHAHAHA HAHAHAHAH AHAHAHAHA{%}'],
      phaseChange3e: [
         '>{*}{#p/basic}{~}{#x2}Wh...\nWhat the heck is this!?{^20}{%}',
         '>{*}{#p/basic}{~}{#x6}Ergh!\nAcid rain!?{^20}{%}',
         ">{*}{#p/basic}{~}{#x4}Oh, FORGET IT!\nI'm OUTTA here!!{^20}{%}"
      ],
      randStatus1: ['>{#p/story}* Mad Dummy is looking for the nearest airlock to throw you out of.'],
      randStatus2: ['>{#p/story}* Mad Dummy is bossing around its bullets.'],
      randStatus3: ['>{#p/story}* Mad Dummy glares into a portal, then turns to you with the same expression.'],
      randStatus4: ['>{#p/story}* Mad Dummy is hopping mad.'],
      randStatus5: ['>{#p/story}* Smells like a textile factory.'],
      gladStatus1: ['>{#p/story}* Glad Dummy is just happy to be here.'],
      gladStatus2: [">{#p/story}* Glad Dummy thinks of all the wonderful things it's going to do."],
      gladStatus3: ['>{#p/story}* Glad Dummy seems content.'],
      randTalk1: ['>{#p/basic}{~}{#x1}Foolish.\nFoolish!\nFOOLISH!'],
      randTalk2: ['>{#p/basic}{~}{#x1}Futile.\nFutile!\nFUTILE!'],
      randTalk3: ['>{#p/basic}{~}{#x1}Pitiful.\nPitiful!\nPITIFUL!'],
      randTalk4: ['>{#p/basic}{~}{#x1}Feeble.\nFeeble!\nFEEBLE!'],
      slapTalk1: ['>{#p/basic}{~}{#x6}Why you little...!'],
      slapTalk2: ['>{#p/basic}{~}{#x4}Are you kidding me??'],
      slapTalk3: ['>{#p/basic}{~}{#x2}Come on!'],
      slapTalk4: ['>{#p/basic}{~}{#x3}...'],
      status1: () =>
         16 <= SAVE.data.n.kills_wastelands
            ? ['>{#p/story}* Glad Dummy lets you go.']
            : ['>{#p/story}* Mad Dummy blocks the way!']
   },
   b_opponent_moldsmal: {
      epiphany: [
         ['>{#p/basic}{~}\x00*slime sounds*'],
         () =>
            world.meanie
               ? ['>{#p/basic}{~}Squorch!']
               : world.flirt > 9
                  ? ['>{#p/basic}{~}\x00*erotic wiggle*']
                  : SAVE.data.b.oops
                     ? ['>{#p/basic}{~}\x00*happy wiggle*']
                     : ['>{#p/basic}{~}\x00*shakes in your arms*'],
         ['>{#p/basic}{~}Final blorb.'],
         ['>{#p/basic}{~}\x00*shiny wiggle*']
      ],
      act_check0: ['>{#p/asriel2}* Gelatini, the mindless mold.\n* What more can I say?'],
      act_check: ['>{#p/story}* GELATINI - ATK 6 DEF 0\n* Stereotypical: Curvaceously attractive, but no brains...'],
      act_check2: [">{#p/story}* GELATINI - ATK 6 DEF 0\n* It's even more attractive in this season's colors."],
      act_check3: ['>{#p/story}* GELATINI - ATK 6 DEF 0\n* It\'s exactly your type.\n* It\'s "stereo."'],
      act_check4: ['>{#p/story}* GELATINI - ATK 6 DEF 0\n* This mold supermodel appears to be past its prime.'],
      act_flirt: [
         '>{#p/human}* (You wiggle your hips.)\n* (Gelatini wiggles back.)',
         '>{#p/basic}* What a meaningful conversation!'
      ],
      act_imitate: [
         '>{#p/human}* (You give Gelatini a nice pat.)\n* (Its body changes color...)',
         ">{#p/basic}* It's Gelatini's happy color!"
      ],
      act_slap: [
         '>{#p/human}* (You give Gelatini a big slap.)',
         '>{#p/basic}* Gelatini is jostled, but remains ultimately unfazed.'
      ],
      act_slap2: [
         '>{#p/human}* (You deliver your mightiest slap to Gelatini.)',
         '>{#p/basic}* Gelatini is shaken to its core!'
      ],
      act_slap3: [
         '>{#p/human}* (You deliver your mightiest slap to Gelatini.)',
         '>{#p/basic}* Gelatini flees the scene!'
      ],
      idleTalk1: ['>{#p/basic}{~}Blorb..'],
      idleTalk2: ['>{#p/basic}{~}Squorch..'],
      idleTalk3: ['>{#p/basic}{~}\x00*slime sounds*'],
      name: '* Gelatini',
      perilStatus: () =>
         world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
            ? [">{#p/kidding}* This can't be good..."]
            : ['>{#p/story}* Gelatini has started to rot.'],
      sexyChat: ['>{#p/basic}{~}\x00*sexy wiggle*'],
      status1: () =>
         world.goatbro ? ['>{#p/asriel2}* Gelatini squared.'] : [">{#p/story}* It's a pair of Gelatinis."],
      status2: () =>
         world.goatbro
            ? ['>{#p/asriel2}* Gelatini.']
            : world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
               ? [">{#p/kidding}* Shh... it's thinking!"]
               : ['>{#p/story}* Gelatini blorbs quietly.'],
      status3: () =>
         world.goatbro ? ['>{#p/asriel2}* Gelatini.'] : ['>{#p/story}* Gelatini waits optimistically.'],
      status4: () =>
         world.goatbro
            ? ['>{#p/asriel2}* Gelatini.']
            : world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
               ? ['>{#p/kidding}* A blorb here, a blorb there...']
               : ['>{#p/story}* Gelatini is ruminating.'],
      status5: () =>
         world.goatbro
            ? ['>{#p/asriel2}* Gelatini.']
            : world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
               ? ['>{#p/kidding}* I wonder what Gelatinis are actually made of.']
               : ['>{#p/story}* The aroma of lime gelatin wafts through.'],
      status6: ['>{#p/story}* And then, there was one.'],
      status8: () =>
         world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
            ? ['>{#p/kidding}* Just us now!']
            : ['>{#p/story}* Gelatini now blorbs solo.']
   },
   b_opponent_spacetop: {
      epiphany: [
         ['>{#p/basic}{~}I can communi- cate else- where.'],
         () =>
            world.meanie
               ? ['>{#p/basic}{~}Warning broad- cast is well re- ceived!']
               : world.flirt > 9
                  ? ['>{#p/basic}{~}Ooh.. I like this kind of signal..']
                  : SAVE.data.b.oops
                     ? [">{#p/basic}{~}I'm on your wave- length now!"]
                     : ['>{#p/basic}{~}The signal.. is right on top of me..'],
         [">{#p/basic}{~}I'm just a waste of band- width.."],
         [">{#p/basic}{~}I'll wire you the cash right away!"]
      ],
      act_check: () =>
         world.goatbro
            ? ['>{#p/asriel2}* Astro Serf, the attention- seeking astronaut. Cares for nothing but its antenna.']
            : [">{#p/story}* ASTRO SERF - ATK 11 DEF 4\n* This teen wonders why it isn't named 'Radio Jack.'"],
      act_check2: ['>{#p/story}* ASTRO SERF - ATK 11 DEF 4\n* This teen seems to appreciate your sense of fashion.'],
      act_check3: ['>{#p/story}* ASTRO SERF - ATK 11 DEF 4\n* This teen is getting ALL the right signals.'],
      act_check4: [
         '>{#p/story}* ASTRO SERF - ATK 11 DEF 4\n* Attempting to hijack a public radio to call for help.'
      ],
      act_compliment: ['>{#p/human}* (You inform Astro Serf that it has a great antenna.)'],
      act_flirt: ['>{#p/human}* (You flirt with Astro Serf.)'],
      complimentTalk1: [">{#p/basic}{~}DUH!\nWho DOESN'T know?"],
      complimentTalk2: ['>{#p/basic}{~}Envious?\nTOO BAD!'],
      createStatus1: () =>
         world.goatbro
            ? ['>{#p/asriel2}* Astro Serf.']
            : [">{#p/story}* Astro Serf is secretly checking if you're looking at its antenna."],
      createStatus2: () =>
         world.goatbro ? ['>{#p/asriel2}* Astro Serf.'] : ['>{#p/story}* Astro Serf is impressed.'],
      createTalk1: [">{#p/basic}{~}HELLO???\nMy antenna's up here."],
      createTalk2: ['>{#p/basic}{~}What?\nWhat are you doing?'],
      createTalk3: [">{#p/basic}{~}But.. it can't be..!"],
      createTalk4: ['>{#p/basic}{~}Woah..\nHow did you do that??'],
      createTalk5: [">{#p/basic}{~}You're.. making your OWN antenna?"],
      act_create: () =>
         [
            ['>{#p/human}* (You begin to fashion your own antenna.)', '>{#p/basic}* But... how?'],
            ['>{#p/human}* (You finish the antenna, and proceed to put it on.)'],
            [
               '>{#p/human}* (You start on another antenna.)',
               '>{#p/basic}* Not knowing what to do, Astro Serf runs away.'
            ]
         ][battler.targetCurrent?.vars.create ?? 0],
      flirtStatus1: ['>{#p/story}* Astro Serf is not impressed by your attire.'],
      flirtStatus2: ['>{#p/story}* Astro Serf is in love.'],
      flirtTalk1: ['>{#p/basic}{~}No deal!\nNot without an antenna!'],
      flirtTalk2: ['>{#p/basic}{~}W-what??\nUm..\nI..\nYou..'],
      genoStatus: ['>{#p/asriel2}* Astro Serf.'],
      hurtStatus: () =>
         world.goatbro ? ['>{#p/asriel2}* Almost dead.'] : [">{#p/story}* Astro Serf's suit is loose."],
      idleTalk1: [">{#p/basic}{~}Where's YOUR antenna?"],
      idleTalk2: ['>{#p/basic}{~}Your head looks so ..NAKED'],
      idleTalk3: ['>{#p/basic}{~}What a great antenna!\n(Mine)'],
      idleTalk4: [">{#p/basic}{~}It's signal feedback, not radi- ation"],
      idleTalk5: ['>{#p/basic}{~}I just looove my antenna.\nOK?'],
      justiceTalk: ['>{#p/basic}{~}What have you done..'],
      name: '* Astro Serf',
      randStatus1: ['>{#p/story}* Astro Serf also wants antennae for its other body parts.'],
      randStatus2: ['>{#p/story}* Astro Serf makes sure its antenna is still there.'],
      randStatus3: ['>{#p/story}* Astro Serf is thinking about a certain article of clothing.'],
      randStatus4: ['>{#p/story}* Smells like lithium.'],
      status1: ['>{#p/story}* Astro Serf struts into view.'],
      stealTalk1: ['>{#p/basic}{~}I KNEW IT!!!\nTHIEF!!'],
      stealTalk2: ['>{#p/basic}{~}HELP!!!\nFASHION POLICE!!'],
      act_steal: () =>
         battler.hurt.includes(battler.targetCurrent!)
            ? [
               ">{#p/human}* (You steal Astro Serf's antenna.)\n* (Its spacesuit falls off.)",
               '>{#p/basic}* Looks like it was powered by lithium the whole time.'
            ]
            : [">{#p/human}* (You try stealing Astro Serf's antenna, but it hasn't been weakened enough.)"]
   },
   b_opponent_space: {
      act_check: () =>
         world.goatbro
            ? [">{#p/asriel2}* Lithium.\n* That's literally it."]
            : ['>{#p/story}* LITHIUM - ATK 1 DEF 0\n* Without its spacesuit...'],
      act_reassure: ['>{#p/human}* (You inform Lithium that it still looks fine.)'],
      genoStatus: ['>{#p/asriel2}* Lithium.'],
      happyStatus: [">{#p/story}* Lithium doesn't mind its identity."],
      happyTalk1: ['>{#p/basic}{~}Yeah.. I like my body too.'],
      happyTalk2: ['>{#p/basic}{~}Hmm.. antennae are for posers.'],
      happyTalk3: ['>{#p/basic}{~}So I can still impress you?'],
      happyTalk4: ['>{#p/basic}{~}I wanted you to see me as cool.'],
      hurtStatus: () =>
         world.goatbro ? ['>{#p/asriel2}* Almost dead.\n* Again.'] : [">{#p/story}* It's disintegrating."],
      idleTalk1: ['>{#p/basic}{~}I..\nI..'],
      idleTalk2: ['>{#p/basic}{~}What can I say..'],
      idleTalk3: [">{#p/basic}{~}What's the point.."],
      idleTalk4: ['>{#p/basic}{~}So.. alone..'],
      name: '* Lithium',
      randStatus1: ['>{#p/story}* "Astro Serf" is no more.'],
      randStatus2: ['>{#p/story}* Smells like battery power.']
   },

   b_party_kidd: {
      mkNobody: ['>{#p/kidd}{#f/4}* Is it just me, or does it seem kinda empty around here...'],
      mkDeath1: [
         '>{#p/kidding}* Uh...',
         ">* Why'd they vanish like that?",
         '>* Well, we WERE attacking them, so maybe they got scared and teleported away, haha.'
      ],
      mkDeath2: ['>{#p/kidding}* Another one?', ">* Dang, why don't I get to have a cool teleporter!?"],
      mkDeath3: [">{#p/kidding}* And they're gone..."],
      mkDeath4: ['>{#p/kidding}* ...'],
      mkDeath1OW: [
         '>{#p/kidd}{#f/4}* Uh...',
         ">* Why'd they vanish like that?",
         '>{#f/1}* Well, we WERE attacking them, so...',
         '>* Maybe they got scared and teleported away, haha.'
      ],
      mkDeath2OW: [
         '>{#p/kidd}{#f/4}* Another one?',
         ">{#f/1}* Dang, why don't I get to have a cool teleporter!?"
      ],
      mkDeath3OW: [">{#p/kidd}{#f/4}* And they're gone..."],
      mkDeath4OW: ['>{#p/kidd}{#f/4}* ...'],
      mkBully1: [
         '>{#p/kidding}* Uh...',
         '>* They seemed really scared...',
         ">* I hope we didn't hurt them too badly or something..."
      ],
      mkBully2: ['>{#p/kidding}* That one too...!', '>* Are we hitting them too hard...?'],
      mkBully3: ['>{#p/kidding}* ...'],
      mkBully1OW: [
         '>{#p/kidd}{#f/4}* Uh...',
         '>* They seemed really scared...',
         ">* I hope we didn't hurt them too badly or something..."
      ],
      mkBully2OW: ['>{#p/kidd}{#f/7}* That one too...!', '>{#f/4}* Are we hitting them too hard...?'],
      mkBully3OW: ['>{#p/kidd}{#f/4}* ...'],
      mkShyrenDeath: ['>{#p/kidd}{#f/4}* Hey...', ">{#p/kidd}{#f/1}* Where's everybody going?"],
      mkMagic1: [
         ">{#p/kidding}* Yo... I don't know how to do any cool magic yet...",
         '>{#p/kidding}* But uh, I can heal you!'
      ],
      mkMagic2a: ['>{#p/kidding}* Healing spell!'],
      mkMagic2b: ['>{#p/kidding}* Health be with you!'],
      mkMagic2c: ['>{#p/kidding}* Take this!'],
      mkNope: ['>{#p/kidding}* Just leave me out of it...'],
      mkTurn1: [">{#p/kidding}* Help, I've never been in a battle before!\n* What do I do!?"],
      mkTurn2: ['>{#p/kidding}* Uh... help!'],
      mkTurn3: [">{#p/kidding}* I... think I'm getting the hang of this."],
      mkTurnAct1: ['>{#p/kidding}* Oh! Oh!', '>* I know how ACTing works!', '>* Watch this...!'],
      mkWeaken1: [">{#p/kidding}* Are you sure...?\n* They don't seem to be happy about all this...", '>* ...'],
      mkWeaken2: ['>{#p/kidding}* Is this really a good idea...?', '>* ...'],
      mkWeaken3a: ['>{#p/kidding}* Uh...'],
      mkWeaken3b: ['>{#p/kidding}* Um...'],
      mkWeaken3c: ['>{#p/kidding}* Er...'],
      // defense down act
      mkTurnActRand1: (opponent: string) =>
         opponent === 'muffet' // NO-TRANSLATE
            ? [
               ['>{#p/story}* Monster Kid struggled in the web and made a scary face.'],
               ['>{#p/story}* Monster Kid struggled in the web and yelled.'],
               ['>{#p/story}* Monster Kid gave out a menacing laugh.']
            ]
            : opponent === 'shyren' // NO-TRANSLATE
               ? [
                  ['>{#p/story}* Monster Kid sang a scary tune.'],
                  ['>{#p/story}* Monster Kid yelled overly edgy lyrics.'],
                  ['>{#p/story}* Monster Kid drummed loudly with their feet.']
               ]
               : opponent === 'woshua' // NO-TRANSLATE
                  ? [
                     ['>{#p/story}* Monster Kid pointed out the dirty floors.'],
                     ['>{#p/story}* Monster Kid pointed out the leaky pipes.'],
                     ['>{#p/story}* Monster Kid made a gross face.']
                  ]
                  : [
                     ['>{#p/story}* Monster Kid stared $(x) directly in the face.'],
                     ['>{#p/story}* Monster Kid pointed at $(x) accusingly.'],
                     ['>{#p/story}* Monster Kid circled around $(x) like a predator.']
                  ],
      // attack down act
      mkTurnActRand2: (opponent: string) =>
         opponent === 'muffet' // NO-TRANSLATE
            ? [
               ['>{#p/story}* Monster Kid complimented Muffet on her eloquent taste in clothing.'],
               ['>{#p/story}* Monster Kid told Muffet her pastries are the best known to monsterkind.'],
               [">{#p/story}* Monster Kid said no webs are as strong as Muffet's."]
            ]
            : opponent === 'shyren' // NO-TRANSLATE
               ? [
                  ['>{#p/story}* Monster Kid hummed a pretty melody.'],
                  [">{#p/story}* Monster Kid complimented Shyren's hair."],
                  [">{#p/story}* Monster Kid complimented Shyren's voice."]
               ]
               : opponent === 'woshua' // NO-TRANSLATE
                  ? [
                     ['>{#p/story}* Monster Kid called Skrubbington the cleanest monster on the block.'],
                     [">{#p/story}* Monster Kid appreciated Skrubbington's efforts to freshen up the factory."],
                     [">{#p/story}* Monster Kid noted Skrubbington's committment to perfection."]
                  ]
                  : opponent === 'radtile' // NO-TRANSLATE
                     ? [
                        [">{#p/story}* Monster Kid complimented Radtile's mirror."],
                        [">{#p/story}* Monster Kid complimented Radtile's hat."],
                        [">{#p/story}* Monster Kid made sure to double-check Radtile's appearance."]
                     ]
                     : [
                        ['>{#p/story}* Monster Kid offered to keep $(x) company.'],
                        [">{#p/story}* Monster Kid told $(x) they'd be there if it'd help."],
                        ['>{#p/story}* Monster Kid stood on top of $(x).']
                     ],
      // turn skip act
      mkTurnActRand3: (opponent: string) =>
         opponent === 'muffet' // NO-TRANSLATE
            ? [
               ['>{#p/story}* Monster Kid tried asking Muffet about spider clans.'],
               ['>{#p/story}* Monster Kid tried asking Muffet about bakeries.'],
               ['>{#p/story}* Monster Kid tried asking Muffet about tea.']
            ]
            : opponent === 'shyren' // NO-TRANSLATE
               ? [
                  ['>{#p/story}* Monster Kid debated about musical notation.'],
                  ['>{#p/story}* Monster Kid spoke about music theory.'],
                  ['>{#p/story}* Monster Kid discussed their favorite music genres.']
               ]
               : opponent === 'woshua' // NO-TRANSLATE
                  ? [
                     ['>{#p/story}* Monster Kid waxed poetic about proper hygiene.'],
                     ['>{#p/story}* Monster Kid rapped about hazard safety.'],
                     ['>{#p/story}* Monster Kid showed off their polished sewer pipe set.']
                  ]
                  : opponent === 'radtile' // NO-TRANSLATE
                     ? [
                        ['>{#p/story}* Monster Kid made an ugly face at Radtile.'],
                        ['>{#p/story}* Monster Kid came near and inspected Radtile up close.'],
                        ['>{#p/story}* Monster Kid acted out as if they were a feral creature.']
                     ]
                     : [
                        ['>{#p/story}* Monster Kid wiggled around, mimicing $(x).'],
                        ['>{#p/story}* Monster Kid did a handstand, impressing $(x).'],
                        ['>{#p/story}* Monster Kid spun around, bewildering $(x).']
                     ],
      // pacify act
      mkTurnActRand4: (opponent: string) =>
         opponent === 'muffet' // NO-TRANSLATE
            ? [[">{#p/story}* Monster Kid tried telling Muffet there's no point in all this!"]]
            : opponent === 'shyren' || opponent === 'radtile' // NO-TRANSLATE
               ? [['>{#p/story}* Monster Kid claimed a spatial distortion was approaching fast!']]
               : opponent === 'woshua' // NO-TRANSLATE
                  ? [['>{#p/story}* Monster Kid claimed an airborne viral agent was on its way!']]
                  : [['>{#p/story}* Monster Kid claimed the nearby pipes were leaking acid!']],
      mkTurnActResult0: ['>{#p/story}* Nothing happened.'],
      mkTurnActResult1: (opponent: string) =>
         opponent === 'woshua' // NO-TRANSLATE
            ? [">{#p/story}* Skrubbington was grossed out!\n* Skrubbington's DEFENSE down!"]
            : opponent === 'shyren' // NO-TRANSLATE
               ? [">{#p/story}* Shyren felt uncomfortable!\n* Shyren's DEFENSE down!"]
               : opponent === 'radtile' // NO-TRANSLATE
                  ? [">{#p/story}* Radtile felt uncomfortable!\n* Radtile's DEFENSE down!"]
                  : [">{#p/story}* $(x) felt uncomfortable!\n* $(x)'s DEFENSE down!"],
      mkTurnActResult2: (opponent: string) =>
         opponent === 'woshua' // NO-TRANSLATE
            ? [">{#p/story}* Skrubbington felt flattered!\n* Skrubbington's ATTACK down!"]
            : opponent === 'shyren' // NO-TRANSLATE
               ? [">{#p/story}* Shyren felt flattered!\n* Shyren's ATTACK down!"]
               : opponent === 'radtile' // NO-TRANSLATE
                  ? [">{#p/story}* Radtile felt respected!\n* Radtile's ATTACK down!"]
                  : [">{#p/story}* $(x) felt respected!\n* $(x)'s ATTACK down!"],
      mkTurnActResult3: (opponent: string, multiple: boolean) =>
         opponent === 'woshua' // NO-TRANSLATE
            ? multiple
               ? ['>{#p/story}* Skrubbington and the others were distracted by Monster Kid and forgot their turn!']
               : ['>{#p/story}* Skrubbington was distracted by Monster Kid and forgot their turn!']
            : opponent === 'shyren' // NO-TRANSLATE
               ? ['>{#p/story}* Distracted by Monster Kid, Shyren forgot her turn!']
               : multiple
                  ? ['>{#p/story}* Entranced by Monster Kid, $(x) and the others forgot their turn!']
                  : opponent === 'radtile' // NO-TRANSLATE
                     ? ['>{#p/story}* Entranced by Monster Kid, Radtile forgot his turn!']
                     : ['>{#p/story}* Entranced by Monster Kid, $(x) forgot their turn!'],
      mkTurnActResult4: (opponent: string, multiple: boolean, allowpac: boolean) =>
         opponent === 'woshua' // NO-TRANSLATE
            ? [
               '>{#p/story}* Fearful for its life, Skrubbington panicked and left the battle!',
               ...(multiple ? ['>{#p/story}* The other monsters continue to fight you.'] : [])
            ]
            : opponent === 'shyren' // NO-TRANSLATE
               ? allowpac
                  ? ['>{#p/story}* Fearful for her life, Shyren panicked and left the battle!']
                  : ['>{#p/story}* Encouraged by her own performance, Shyren braved the threat!']
               : opponent === 'radtile' // NO-TRANSLATE
                  ? ['>{#p/story}* Fearful for his life, Radtile panicked and left the battle!']
                  : [
                     '>{#p/story}* Fearful for its life, $(x) panicked and left the battle!',
                     ...(multiple ? ['>{#p/story}* The other monsters continue to fight you.'] : [])
                  ],
      mkTurnFight1: () => [
         '>{#p/kidding}* Y... y-you want me to fight?\n* Are you sure?',
         choicer.create('* (Do you confirm?)', 'Yes', 'No')
      ],
      mkTurnFight2a: ['>{#p/kidding}* Okay... here goes nothing...'],
      mkTurnFight2b: ['>{#p/kidding}* Oh, okay...', ">* I'll just spare them, then!"],
      mkTurnFight3a: ['>* Ngh...!'],
      mkTurnFight3b: ['>* Hi-yah...!'],
      mkTurnFight3c: ['>* Wa-POW!'],
      mkTurnMercy1: ['>{#p/kidding}* Mercy?\n* Do I spare them?', ">{#p/kidding}* Haha, that's easy!"],
      mkTurnX: () => [choicer.create('* (What should Monster Kid do?)', 'Mercy', 'Act', 'Magic', 'Fight')]
   },

   c_name_common: {
      keyring: 'Keyring',
      hello_asgore: 'Say Hello',
      about_asgore: 'About Yourself',
      dad: 'Call Him "Dad"',
      flirt_asgore: 'Flirt',
      insult_asgore: 'Insult'
   },

   c_call_common: {
      start: '>{#s/phone}{#p/event}* Dialing...',
      end: '>{#s/equip}{#p/event}* Click...',
      nobody0: ['>{#p/human}* (Too much interference.)'],
      nobody1: ['>{#p/human}* (No response.)'],
      nobody2: ['>{#p/basic}* ... but nobody came.'],
      nobody3: ['>{#p/human}* (No connection.)'],
      nobody4: [
         '>{#p/human}* (It sounds like a small, white dog is sleeping on the cell phone.)',
         '>{#p/basic}* (Snore... snore...)',
         '>* (Snore... snore...)'
      ],
      nobody4a: [
         '>{#p/human}* (It sounds like a small, white dog is sleeping on the cell phone.)',
         '>{#p/basic}* (Snore... snore... snore...)',
         '>* (Snore... snore... snore...)'
      ],
      nobody4f: [
         '>{#p/human}* (It sounds like a small, white dog is sleeping on the cell phone.)',
         '>{#p/basic}* (Snore...!)',
         '>* (Snore...!)'
      ],
      nobody4m: [
         '>{#p/human}* (It sounds like a small, white dog is sleeping on the cell phone.)',
         '>{#p/basic}* (Snore...?)',
         '>* (Snore...?)'
      ],
      nobody4i: [
         '>{#p/human}* (It sounds like a small, white dog is sleeping on the cell phone.)',
         '>{#p/basic}* (Whimper.)',
         '>* (Whine.)'
      ],
      about1: [
         '>{#p/asgore}{#f/5}* About me?',
         '>{#f/7}* ... oh, but where would I begin?',
         '>{#f/6}* There is far too much to tell at once.',
         '>{#f/6}* Perhaps, over time, you will come to know me very well.',
         '>{#f/21}* It would be better than telling you everything at once.'
      ],
      about2: [
         '>{#p/asgore}{#f/5}* If you like, I can tell you something about myself later.',
         '>{#f/7}* How does that sound?'
      ],
      flirt1: [
         '>{#p/asgore}{#f/20}* ...',
         '>{#f/4}* Frisk.',
         '>{#f/6}* Surely there is someone more your age.',
         '>{#f/5}* I am not saying I cannot oblige, but...',
         '>{#f/6}* There is a world of difference between "can" and "should."'
      ],
      flirt2: [
         '>{#p/asgore}{#f/20}* Frisk.',
         '>{#f/20}* Perhaps when you are older, we may explore this further.',
         '>{#f/6}* But not now.'
      ],
      flirt3: [
         '>{#p/asgore}{#f/20}* Frisk.',
         '>{#f/6}* You call me "Dad," and then you flirt with me.',
         '>{#f/5}* I am not sure how to react to this.'
      ],
      hello: [
         ['>{#p/asgore}{#f/21}* A greeting, you say?', '>{#f/7}* Hmm...', '>{#f/6}* I give you a "Howdy!"'],
         ['>{#p/asgore}{#f/5}* Another greeting?', '>{#f/21}* I know...', '>{#f/6}* "How do you do!"'],
         [
            '>{#p/asgore}{#f/5}* ...',
            '>{#f/5}* At this rate, I am going to run out of greetings.',
            '>{#f/6}* Though, the birds outside may be more willing to oblige.',
            '>{#f/7}* Why not try with them?'
         ],
         ['>{#p/asgore}{#f/5}* ... howdy, little one.', '>{#f/6}* It is always nice to hear your voice.']
      ],
      dad1: [
         '>{#p/asgore}{#f/6}* ...',
         '>{#f/24}* ...',
         '>{#f/21}* Of course.',
         '>{#f/6}* I suppose it is only natural you would call me that.',
         '>{#f/6}* You may call me "Dad" if you want, Frisk.'
      ],
      dad2: [
         '>{#p/asgore}{#f/24}* ...\n* Goodness gracious.',
         '>{#f/6}* You seem very intent on me being your father.',
         '>{#f/21}* Fortunately, I had already planned to fill that role.'
      ],
      dad3: [
         '>{#p/asgore}{#f/24}* ...\n* Goodness gracious.',
         '>{#f/6}* You flirt with me, and then you call me "Dad."',
         '>{#f/5}* I am not sure how to react to this.'
      ],
      insult1: () =>
         SAVE.data.b.ufokinwotm8
            ? [
               '>{#p/asgore}{#f/1}* ...',
               '>{#f/1}* You seem very upset about something...',
               '>{#f/6}* If you like, we may talk once construction has come to an end.'
            ]
            : [
               '>{#p/asgore}{#f/8}* ...',
               '>{#f/6}* Ooh.\n* How dastardly of you.',
               '>{#f/21}* But do not worry...\n* I can tell you are only kidding with me.'
            ],
      insult2: () =>
         SAVE.data.b.ufokinwotm8
            ? ['>{#p/asgore}{#f/1}* ...', '>{#p/asgore}{#f/6}* I will be available to talk with you soon, okay?']
            : ['>{#p/asgore}{#f/21}* Now, now.\n* There is no need to be so brazen.']
   },

   s_save_common: {
      _cockpit: {
         name: 'Deep Space',
         text: []
      },
      _frontier1: {
         name: 'Your Room',
         text: [">{#p/human}* (You're filled with determination.)"]
      },
      _frontier8: {
         name: 'Eurybia',
         text: []
      }
   }
};
// END-TRANSLATE
