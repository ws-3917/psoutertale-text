import { helmetdyneAttack } from '../../code/common/api';
import { battler, choicer, iFancyYourVilliany, pager, player, world } from '../../code/systems/framework';
import { SAVE } from '../../code/systems/save';

// START-TRANSLATE
const text = {
   _0: {
      _1: 'The player did everything they could...',
      _2: 'But alas, {^3}his fate was sealed, {^3}and...',
      _3: 'No addendum to the story could unravel it.',
      _4: 'There was no scenario in which the player could truly be satisfied.',
      _5: 'Is this what they really deserve?',
      _6: 'To live in bittersweet agony, {^3}knowing he could never be...',
      _7: 'No...{^5}\nI will not allow it.',
      _8: 'If bending the fabric of spacetime is what it takes, then...',
      _9: 'So be it.',
      _10: 'I will not rest until the task is done.'
   },

   a_common: {
      bullybed: [
         [
            '<32>{#p/human}* (...)',
            '<32>{#p/human}* (You wake up.)',
            '<32>{#p/human}* (The outpost is the same as it was when you went to sleep.)'
         ],
         [
            '<32>{#p/human}* (You explore every corner of the outpost for signs of life, but nobody comes.)',
            '<32>{#p/human}* (You search again, and again, and again...)',
            '<32>{#p/human}* (But nobody comes.)'
         ],
         [
            '<32>{#p/human}* (You search for the craft you arrived in.)\n* (It appears it was destroyed.)',
            '<32>{#p/human}* (You search for other craft left behind by monsterkind.)',
            '<32>{#p/human}* (It appears they have been taken from you.)'
         ],
         [
            '<32>{#p/human}* (You visit the lab, and search for blueprints and shuttlecraft parts.)',
            '<32>{#p/human}* (The blueprints are available, and the parts are in storage...)',
            "<32>{#p/human}* (But the CORE's remaining energy will not be sufficient to launch the shuttle.)"
         ],
         [
            '<32>{#p/human}* (You try to RESET your SAVE file.)\n* (Nothing happens.)',
            '<32>{#p/human}* (You try again to RESET your SAVE file.)',
            '<32>{#p/human}* (Nothing happens.)'
         ],
         [
            "<32>{#p/human}* (In desperation, you try to call Toriel's Phone.)\n* (No response.)",
            '<32>{#p/human}* (You try to call Papyrus and Undyne.)',
            '<32>{#p/human}* (No response.)'
         ],
         [
            '<32>{#p/human}* (...)',
            "<32>{#p/human}* (You've lost track of how long you've been here.)",
            "<32>{#p/human}* (You can't tell if it's been weeks, months, or years.)",
            "<32>{#p/human}* (You've configured the CORE to use as little energy as possible...)",
            "<32>{#p/human}* (But it can't last forever.)"
         ],
         [
            '<32>{#p/human}* (The gravity disengages.)',
            '<32>{#p/human}* (The temperature begins to drop.)',
            '<32>{#p/human}* (The atmosphere is collapsing.)',
            '<32>{#p/human}* (Without power, the Outpost will be uninhabitable.)'
         ],
         [
            '<32>{#p/human}* (Somehow, you feel at peace.)',
            "<32>{#p/human}* (You've come to terms with your death.)",
            "<32>{#p/human}* (You realize there's no other way this could have gone.)",
            '<32>{#p/human}* (As the remaining air dissapates, you remember your journey one last time.)',
            '<32>{#p/human}* (From the day of your exile, to the day monsterkind ran away.)'
         ],
         [
            '<32>{#p/human}* (The air has run out now.)',
            '<32>{#p/human}* (You begin to choke.)',
            '<32>{#p/human}* (You feel the life leaving your body.)',
            '<32>{#p/human}* (It would appear the end is...)'
         ]
      ],
      // TODO: neutrals
      neutral0() {
         const atext = ['<32>{#s/phone}{#p/event}* Ring, ring...'] as string[];
         const btext = [] as string[];

         const a = (lines: string[]) => atext.push(...lines);
         const b = (lines: string[]) => btext.push(...lines);

         // bosses and minibosses
         const torielDead = SAVE.data.n.state_wastelands_toriel === 2;
         const doggoDead = SAVE.data.n.state_starton_doggo === 2;
         const lesserdogDead = SAVE.data.n.state_starton_lesserdog === 2;
         const greatdogDead = SAVE.data.n.state_starton_greatdog === 2;
         const dogsDead = SAVE.data.n.state_starton_dogs === 2;
         const papyrusDead = SAVE.data.n.state_starton_papyrus === 1;
         const dogeDead = SAVE.data.n.state_foundry_doge === 1;
         const muffetDead = SAVE.data.n.state_foundry_muffet === 1;
         const shyrenDead = SAVE.data.b.killed_shyren;
         const maddummyDead = SAVE.data.n.state_foundry_maddummy === 1;
         const undyneDead = SAVE.data.n.state_foundry_undyne === 2;
         const royalguardsDead = SAVE.data.n.state_aerialis_royalguards === 1;
         const glydeDead = SAVE.data.b.killed_glyde;
         const madjickDead = SAVE.data.b.killed_madjick;
         const knightknightDead = SAVE.data.b.killed_knightknight;
         const mushketeerDead = world.killed_mushketeer;

         // areas
         const outlandsKills = SAVE.data.n.kills_wastelands;
         const startonKills = SAVE.data.n.kills_starton;
         const foundryKills = SAVE.data.n.kills_foundry;
         const aerialisKills = SAVE.data.n.kills_aerialis;
         const coreKills = SAVE.data.n.corekills;

         const outlandsBullies = SAVE.data.n.bully_wastelands;
         const startonBullies = SAVE.data.n.bully_starton;
         const foundryBullies = SAVE.data.n.bully_foundry;
         const aerialisBullies = SAVE.data.n.bully_aerialis;

         const outlandsBullied = world.bullied_area('w');
         const startonBullied = world.bullied_area('s');
         const foundryBullied = world.bullied_area('f');
         const aerialisBullied = world.bullied_area('a');

         const outlandsPopulation = world.population_area('w');
         const startonPopulation = world.population_area('s');
         const foundryPopulation = world.population_area('f');
         const aerialisPopulation = world.population_area('a');

         // totals
         const kills = world.trueKills;
         const bullied = SAVE.data.n.bully;
         const alphysKills = world.alphys_percieved_kills;

         // misc
         const helmetdyne = helmetdyneAttack();
         const respect = SAVE.data.b.undyne_respecc;
         const moniker = iFancyYourVilliany();
         const fearsome = helmetdyne || 30 <= bullied;
         const dateLevel = 2.1 <= SAVE.data.n.plot_date ? 2 : 1.1 <= SAVE.data.n.plot_date ? 1 : 0;

         // live royal guard count
         const royals = [
            !doggoDead,
            !lesserdogDead,
            !dogsDead,
            !greatdogDead,
            !dogeDead,
            !royalguardsDead,
            !madjickDead,
            !knightknightDead
         ].filter(v => v).length;

         // overreactions
         const overreaction1 = kills < 20 && 4 <= royals;
         const overreaction2 = kills < 10 && 6 <= royals;

         // text
         if (SAVE.data.b.ubershortcut) {
            // uber shortcut variant [alphys call]
            /*
               alphys joins royal guard!?
            */
         } else if (SAVE.data.b.ultrashortcut) {
            // ultra shortcut variant [papyrus call]
            /*
               papyrus becomes a member of the royal guard (as an actual guard!)
            */
         } else if (world.bad_robot) {
            if (!undyneDead) {
               if (royals < 2) {
                  // dark neutral: lone captain variant [alphys call]
                  /*
                     "Ring... Ring..."
                     "ARRIGHT PUNK, LISTEN UP!"
                     "You made a BIG mistake in sparing my life after what you've did."
                     "Thanks to you, I've been granted absolute power over the Outpost!"
                     - power was almost totally drained by MTT sigma, causing outpost-wide panic
                     - power loss causes archive to shut down, releasing the humans in the process
                     - undyne storms in and takes control of the situation
                     - undyne blames you for killing asgore
                     - undyne kills all the humans, takes their souls with her and goes after you in a shuttle
                     - alphys goes with her and uses the call to trace your position (you fell for it)
                  */
                  if (overreaction1) {
                     // if less than 20 alphys-percieved kills, undyne re-assures people it'll be fine (prevents overreaction)
                  }
                  if (!papyrusDead) {
                     // papyrus secretly came along on the trip and just now appears after waiting the whole time
                  }
               } else {
                  // dark neutral: undyne variant [alphys call]
                  /*
                     - power was almost totally drained by MTT sigma, causing outpost-wide panic
                     - power loss causes archive to shut down, releasing the humans in the process
                     - undyne storms in and takes control of the situation
                     - undyne blames you for killing asgore
                     - undyne kills all the humans, puts their souls in storage
                     - undyne wanted to go after you like lone captain variant, but royal guard advises against it
                     - undyne also feels a responsibility to look after the guard, so doesn't susamong
                     - undyne instead starts increasing outpost's defenses and arming citizens (weapons/magic training)
                     - also starts construction of a weapon replication facility (worse quality but high quantity)
                     - outlands and other outskirts areas are taken over and militarized
                     - alphys decides to quit her job and go back to catty and bratty (revealed at the end)
                     - alphys acts apathetic and carefree now
                  */
                  if (overreaction1) {
                     // undyne prevents outrage over alphys's overreaction by being UNDYNE
                  }
                  if (!torielDead) {
                     // toriel tries to resist takeover, but support for undyne is feverish so she gets clowned on (unpopular opinion)
                  }
               }
            } else if (overreaction1) {
               if (!papyrusDead) {
                  // dark neutral overreaction: papyrus promise variant [papyrus call]
                  /*
                     "* HELLO! THIS IS PAPYRUS!"
                     "* I'VE GOT SOME SHOCKING NEWS FOR YOU!"
                     "* I'M NOW THE KING OF THE OUTPOST!"
                     "* AND..."
                     "* I'VE NEVER FELT SO MISERABLE IN MY LIFE."
                     "* I ONLY FELT THE NEED TO DO THIS BECAUSE NOBODY ELSE WAS."
                     "* I FEEL BAD JUST TAKING OVER LIKE THIS, BUT IF I DON'T, THE OUTPOST WILL FALL INTO CHAOS!"
                     "* I ALWAYS IMAGINED I'D HAVE TO WORK HARD FOR THIS, BUT NOW..."
                     "* ... UGH, WHY CAN'T THINGS JUST BE SIMPLER!?"
                     "* THIS FEELS SO UNDESERVED!"
                     - some people storm the citadel and blame alphys for her bad decisions
                     - the truth about humans is exposed, and humans are killed
                     - some monsters panic and take the human souls that drop from them to leave the outpost
                     - papyrus eventually arrives and protects the remaining human souls
                     - gets everyone mostly calmed down and says he'll hold fast to asgore's agreement
                  */
               } else if (!maddummyDead) {
                  // dark neutral overreaction: mew mew starfire variant [mew mew call]
                  /*
                     - some people storm the citadel and blame alphys for her bad decisions
                     - the truth about humans is exposed, and humans are killed
                     - some monsters panic and take the human souls that drop from them to leave the outpost
                     - mad dummy goes into the citadel amidst the chaos and absorbs bravery
                     - rules with godlike power, becoming starfire version of mew mew
                     - bravery goes along with the shenannigans and both mew mew and bravery have fun with it
                  */
                  if (SAVE.data.n.state_wastelands_toriel === 0) {
                     // lv0 toriel (integrity)
                     /*
                        - mad dummy takes integrity instead to become mew mew
                        - tries to have fun, but integrity is always putting rules and boundaries around the fun stuff
                        - for example, if they wanted to make 2 people do a cage match, integrity would make rules for it
                     */
                  } else if (16 <= SAVE.data.n.kills_wastelands) {
                     // glad dummy (kindness)
                     /*
                        - mad dummy takes kindness instead to become mew mew
                        - tries to have fun, but kindness always suggests a more nice thing to do
                     */
                  } else if (SAVE.data.n.state_foundry_maddummy === 3) {
                     // bored (patience)
                     /*
                        - mad dummy takes patience instead to become mew mew
                        - patience tries to temper mew mew's shenannigans over time, like an angel on the shoulder
                     */
                  } else {
                     // standard (bravery)
                  }
               } else {
                  // KING CHARLES VARIANT [sans call]
                  /*
                     - charles goes into the citadel amidst the chaos and absorbs kindness soul
                     - secretly the best ending ever
                     - hires the oni to become head chef of the outpost (turns out to be the greatest chef ever)
                  */
               }
            } else if (royals < 2) {
               // dark neutral: lone scientist variant [alphys call]
               /*
                  - without a royal guard, alphys takes more control and implements technological security measures
                  - humans don't need to be hidden away, which means they can be probed for information
                  - with the help of integrity's knowledge of dr. roman's notes, alphys solves wormhole travel
                  - they try wormholes to escape, but force field prevents em from forming (it blocks the connection)
               */
               if (!papyrusDead) {
                  if (royals === 1) {
                     // THERAPYRUS
                     /*
                        "SO... IT'S BEEN A WHILE SINCE WE LAST CAUGHT UP, HASN'T IT?"
                        "STARTON'S JUST HAD A POPULATION BOOST! SOME MONSTERS JUST CAME OUT OF NOWHERE!"
                        "...THAT'S WHAT THEY SAID ABOUT ME AND SANS WHEN WE FIRST CAME HERE TOO, SO..."
                        "...MAYBE WE'RE DESTINED TO BE GREAT FRIENDS?"
                        "AH YES, I SHOULD ALSO TALK ABOUT WHAT NEW THINGS HAVE HAPPENED TO ME RECENTLY!"
                        "IT'S ACTUALLY A FUNNY STORY! "
                        "If Doggo was spared"
                        "A STRANGE, BLIND DOG SLAMMED ITSELF ONTO MY DOOR ONE DAY..."
                        "I WAS QUITE ANNOYED AT FIRST, BUT IT DIDN'T TAKE ME LONG TO MAKE SENSE OF WHY THEY DID."
                        "THEY ASKED ME TO HELP LOOK FOR THEIR FRIENDS FROM THE CANINE UNIT, SINCE HE KNEW I WAS NO DISHONEST PRANKSTER!"
                        "SO THUS, WE LOOKED ALL OVER! FAR AND WIDE! FROM THE FAR REACHES OF STARTON, TO..."
                        "WELL, WE DIDN'T QUITE LOOK TOO FAR ACTUALLY."
                        "BY THE TIME WE REACHED DOCTOR ALPHYS' LAB AND DECIDED TO ASK HER WHILE WE WERE STOPPING BY..."
                        "SHE GAVE US SOME RATHER SHOCKING NEWS."
                        "OUR FRIEND DIDN'T FEEL TOO GREAT AFTER THAT, BUT WE WORKED TOGETHER TO COMFORT THEM IN THEIR TIME OF NEED!"
                        "I DON'T THINK I COULD HAVE BEEN ABLE TO DO THAT WITHOUT HER HELP, SO..."
                        "THANK YOU, DOCTOR ALPHYS!"
                        "If Canis Minor was spared"
                        "A SHORT-NECKED DOG HAD BEEN SLAMMING IT'S HEAD ON MY DOOR LOUDLY UNTIL I OPENED IT TO FIND OUT WHAT WAS GOING ON..."
                        "If Canis Major was spared"
                        "A SAD LOOKING PUPPY HAD KNOCKED ON MY HOUSE ONE DAY..."
                        "WELL, I SAY KNOCKED BUT..."
                        "THEY JUST BARKED INCREDIBLY LOUDLY."
                        "If Doge was spared"
                        "I RECEIVED A RATHER DISTRESSING CALL FROM A MEMBER OF THE CANINE UNIT."
                        "SHE ASKED ME TO MEET HER SOMEWHERE TO DISCUSS SOMETHING, SINCE I KNEW UNDYNE..."
                        "IT WAS A BIT SCARY, SINCE THEY WERE A MEMER OF THE ROYAL GUARD YOU SEE!"
                        "...BUT ALL SHE WISHED TO DO WAS TALK."
                        "IT WAS A BIT STRANGE, SINCE SHE WOULDN'T TELL ME OF HER REASONS."
                        "...BUT EVENTUALLY, I WAS ABLE TO CRACK THE CODE!"
                        "SHE QUESTIONED THE VIABILITY OF HER PURPOSE, IN PROTECTING MONSTERKIND WHEN ALMOST THE ENTIRE GUARD WAS WIPED OUT BY JUST 1 HUMAN..."
                        "AS SHE JOINED BECAUSE SHE BELIEVED IN THE DEFENSE OF MONSTERKIND..."
                        "I WAS QUITE SURPRISED TO HEAR SHE WAS ONE OF THE FIRST TO JOIN THE ROYAL GUARD, ACTUALLY!"
                        "If Terrestria was spared"
                        "A RATHER LARGE KNIGHT OF THE ELITE SQUAD HAD GRACED ME WITH THEIR PRESENCE ON MY DOORSTEP!"
                        "SHE SAID SOMETHING ABOUT HAVING THE WEIGHT OF HER SHOULDERS."
                        "IT WAS A BIT AWKWARD THAT I COULDN'T WELCOME HER INSIDE OF MY HOME..."
                        "SO I MOVED ALL OF MY FURNITURE OUTSIDE SO THAT SHE COULD FEEL COMFORTABLE!"
                        "SHE FELT SAD ABOUT LIVING FOR A LONG TIME... SEEING ALL OF THE PEOPLE SHE CARES ABOUT FADING AWAY..."
                        "IT SOUNDS QUITE AWFUL OF A CONUNDRUM! JUST THINKING ABOUT IT GIVES ME A BIG HEADACHE!"
                        "If Cozmo was spared"
                        "A STRANGE, MAGICAL MAN HAD TELEPORTED INTO MY ABODE WITHOUT PERMISSION..."
                        "AND ASKED ME FOR THE MEANING OF LIFE."
                        "WE... HAD TO SCALE THE CONVERSATION BACK QUITE A BIT TO SAY THE LEAST."
                        "BUT AFTERWARDS, I LEARNED A LOT ABOUT THEM AND WHAT TROUBLES THEY HAD."
                        "THEY ONCE WERE THE APPRENTICE OF AN OLD MONSTER CALLED TERRESTRIA..."
                        "ONE THAT LIVED LONGER THAN ANYONE ELSE IN THE OUTPOST."
                        "HE HAD BEEN WORKING HIS ENTIRE LIFE TO IMPRESS HER..."
                        "HE SAID HE HAD NOT MANAGED TO DO ANYTHING THAT HE THOUGHT WAS SIGNIFICANT ENOUGH TO MAKE HER PROUD..."
                        "BUT I DON'T BELIEVE THAT AT ALL! I'M SURE SHE'D JUST BE GLAD THAT HE'S STILL ALIVE!"
                        "SINCE HE'S STILL HERE, HE CAN CHANGE THE WORLD FOR THE BETTER!"
                        "HE SEEMED TO HAVE BEEN RATHER ENCHANTED BY OUR CONVERSATION, AND WE TALKED FOR HOURS!"
                        "EVEN I'M IMPRESSED I WAS ABLE TO KEEP GOING FOR THAT LONG..."
                        "ONCE WE WERE DONE, WE BOTH PARTED WAYS FEELING QUITE PLEASED!"
                        "THOUGH... THEN I HAD TO GRAPPLE SOME EMOTIONS OF MY OWN AFTERWARDS."
                        "Return to branch"
                        "LOOKING BACK ON IT... IT'S CLEAR THAT YOU DID SOME REALLY BAD THINGS."
                        "BUT THE ROYAL GUARDS WERE ALSO EXTREMELY AGAINST HUMANITY, THAT I KNOW NOW."
                        "FOR THEM TO BE SO COMMITTED IN THEIR MISSION... IT LIKELY LEFT YOU NO OTHER CHOICE."
                        "HAVING THE DEATH OF OTHERS ON YOUR HANDS IS NO EASY THING TO COME TO TERMS WITH."
                        "PERHAPS IT WAS FOR THE BEST THAT I NEVER BECAME A REAL MEMBER OF THE ROYAL GUARD..."
                        "OR ELSE MY LOVED ONES TOO, MAY ALSO BE GREATLY HURT BY MY LOSS FOR BEING JUST AS STUBBORN."
                        "AFTER HAVING WORKED MY NOGGIN LIKE NEVER BEFORE, I WAS FEELING RATHER TIRED."
                        "SO I TOOK A SNOOZE CRUISE DOWN TO DREAMTOWN!"
                        "I FELT RATHER REFRESHED AFTER THAT, PERFECT TIMING AS I HEARD ANOTHER KNOCK ON MY DOOR THAT DAY!"
                        "THEN I HEARD ONE THE DAY AFTER THAT! THEN TWO THE DAY AFTER! THEN THREE, THEN FIVE..."
                        "THERE WAS... A LOT OF PEOPLE THAT ASKED FOR MY HELP..."
                        "IT IS KIND OF STRANGE, I'M NOT USED TO THIS MUCH POPULARITY."
                        "HOWEVER! THE GREAT PAPYRUS WILL DO ANYTHING TO HELP THOSE IN NEED!"
                        "If Mettaton is alive:"
                        "METTATON EVEN HAD ME APPEAR IN HIS SHOW FOR ONE OF THESE SESSIONS!"
                        "IT DIDN'T GO VERY WELL THOUGH, THE OTHER MONSTER DIDN'T LOOK VERY HAPPY AFTERWARDS."
                        "ME AND METTATON HAVEN'T REALLY TALKED MUCH SINCE EITHER..."
                        "AHEM! MOVING PAST THAT..."
                        "Return to branch..."
                        "THANKS TO THIS NEWFOUND POPULARITY, I'VE BECAME A CELEBRITY OF SORTS!"
                        "WITH HIS OWN COOL BUILDING AND A REALLY BIG SIGN!"
                        "I EVEN CAME UP WITH A COOL SLOGAN FOR IT TO SAY!"
                        ""HOW WOULD YOU LIKE A PAPEHRAPY SESSION WITH THERAPYRUS?""
                        "QUITE CATCHY, IS IT NOT? I THOUGHT OF IT MYSELF! NYEHEHEHE!"
                        "IT EVEN SHOWS ME ON A COMFY COUCH, WRITING NOTES... WEARING INCREDIBLY PROFESSIONAL SQUARE GLASSES."
                        "OH YES AND SANS IS ALSO MY RECEPTIONIST!"
                        "SINCE MY SCHEDULE IS SO BUSY, HE MAKES SURE I HAVE ENOUGH TIME FOR EVERYBODY!"
                        "I'M QUITE SURPRISED THAT SANS WAS SO OPEN TO HELPING, BUT I DON'T MIND!"
                        "YOU COULD EVEN SAY THAT..."
                        "I'M PROUD???"
                        "PERHAPS THIS IS OUR TRUE CALLING! THE THING THAT BRINGS OUT THE POTENTIAL OF ME AND MY BROTHER THE MOST!"
                        "I HOPE YOU TOO ARE ABLE TO ATTAIN YOUR TRUE POTENTIAL AS WELL, EVEN DESPITE THE MISTAKES OF YOUR PAST."
                        "WHEREVER YOU ARE OUT THERE, OUT IN SPACE."
                        "IF YOU EVER NEED SOMEONE TO TALK TO..."
                        "YOU KNOW WHO TO CALL!"
                        - papyrus opens a therapy agency (therapyrus inc.) as the royal guard crumbles
                        - last royal guard goes to this therapy agency instead
                     */
                     if (!doggoDead) {
                        // doggo
                     } else if (!lesserdogDead) {
                        // canis minor
                     } else if (!dogsDead) {
                        // dogi
                     } else if (!greatdogDead) {
                        // canis major
                     } else if (!dogeDead) {
                        // doge
                     } else if (!royalguardsDead) {
                        // RG 01 and 02
                     } else if (!madjickDead) {
                        // cozmo
                     } else if (!knightknightDead) {
                        // terrestria
                     }
                  } else {
                     // papyrus joins the royal science division
                  }
               } else {
                  if (royals === 1) {
                     // last royal guard either quits or becomes a member of royal sciences (with alphys)
                  } else {
                     // no guards
                  }
               }
            } else if (!papyrusDead) {
               // dark neutral: papyrus-burgie-justice freedom variant [papyrus call]
               /*
                  - power was almost totally drained by MTT sigma, causing outpost-wide panic
                  - sans goes to alphys and helps advise her, and motivated her to become the leader
                  - power loss causes archive to shut down, releasing the humans in the process
                  - humans are kept hidden away by sans and alphys
                  - feeling responsible, alphys desperately tries to calm the public
                  - toriel visits but returns to outlands and shuts herself off (she has a backup generator)
                  - alphys maintains an uneasy relationship with the royal guard
                  - papyrus suggests hiring more guards, one of which ends up being burgie
                  - burgie joins due to being motivated by dark neutral events
                  - forms a secret deal with justice, justice sacrifices themselves to burgie to combine souls
                  - they escape as one being and use wormholes and return with way to break force field
                  - turns out they killed a bunch of aliens and took their souls (alphys is mad like sisko at garak)
                  - but they escape the force field
                  - papyrus feels bad about how people died for their freedom
               */
            } else {
               // dark neutral: generic variant [sans call]
               /*
                  - power was almost totally drained by MTT sigma, causing outpost-wide panic
                  - sans goes to alphys and helps advise her, and motivated her to become the leader
                  - power loss causes archive to shut down, releasing the humans in the process
                  - humans are kept hidden away by sans and alphys
                  - feeling responsible, alphys desperately tries to calm the public
                  - toriel visits but returns to outlands and shuts herself off (she has a backup generator)
                  - alphys maintains an uneasy relationship with the royal guard
               */
            }
         } else if (world.bad_lizard > 1) {
            // light neutral: aborted dark variant [alphys call]
            /*
               "Mettaton asked me to do a bunch of things, like combat upgrades"
               - mettaton is happy you stopped killing, but still reinforces that you should keep being good
               - mettaton gets upgrades for his body at alphys's request
               - while researching upgrades, they also stumble on old royal science reports about a little white dog
               - and the truth is revealed that canis maximus is the annoying dog and used to work at the lab!
               #> pacifist on command variant (no kills after entering aerialis)
                  - mettaton is very proud of you for how much you changed, even if you were awful at first
                  - sans chimes in and says they might have just done it to see how people react, but MTT tells him to shut up
               #> low kill count variant
                  - mettaton begins to question if it was really necessary to threaten sigma
                  - alphys sees that maybe she overreacted to you, and is glad nothing drastic was done in response
            */
            if (fearsome) {
               // undyne takes charge to calm people down
            } else {
               // slight overreaction
            }
         } else if (SAVE.data.n.exp > 0) {
            if (!undyneDead) {
               // light neutral: queen undyne variant [alphys call]
               a([
                  '<25>{#p/alphys}{#f/4}* H-hiya...',
                  '<25>{#p/alphys}{#f/20}* Is anyone there?',
                  "<25>{#p/alphys}{#f/11}* ... I hope it's not too much trouble...",
                  '<25>{#p/alphys}{#f/4}* I just... w-wanted to let you know how things are going out here.'
               ]);
               b([
                  '<25>{#p/alphys}{#f/20}* So... after you left, the king sort of... d-disappeared.',
                  "<25>{#p/alphys}{#f/14}* When I broke the news, it... hurt the people's morale pretty badly.",
                  '<25>{#p/alphys}{#f/10}* Technically, as royal scientist, I was meant to replace him, but...',
                  "<25>{#p/alphys}{#f/4}* I didn't really feel like I'd be the best fit for the job.",
                  '<26>{#p/alphys}{#f/20}* Well, Undyne approached me with an offer to take over, and...',
                  '<25>{#p/alphys}{#f/20}* I agreed, and appointed her as the queen.'
               ]);
               if (papyrusDead) {
                  b(["<25>{#p/alphys}{#f/13}* ... I was worried she'd overreact to Papyrus's death..."]);
                  if (royals < 2) {
                     b(['<26>{#p/alphys}{#f/13}* ... not to mention the collapse of the guard...']);
                  } else if (royals < 7) {
                     b(['<25>{#p/alphys}{#f/13}* ... not to mention the loss of those guards...']);
                  }
               } else if (royals < 2) {
                  b(["<26>{#p/alphys}{#f/13}* ... I was worried she'd overreact to the collapse of the guard..."]);
               } else if (royals < 7) {
                  b(["<25>{#p/alphys}{#f/13}* ... I was worried she'd overreact to the loss of those guards..."]);
               } else if (doggoDead) {
                  b(["<25>{#p/alphys}{#f/13}* ... I was worried she'd overreact to the loss of Doggo..."]);
               } else if (lesserdogDead) {
                  b(["<25>{#p/alphys}{#f/13}* ... I was worried she'd overreact to the loss of Canis Minor..."]);
               } else if (dogsDead) {
                  b(["<25>{#p/alphys}{#f/13}* ... I was worried she'd overreact to those married dogs' deaths..."]);
               } else if (greatdogDead) {
                  b(["<25>{#p/alphys}{#f/13}* ... I was worried she'd overreact to the loss of Canis Major..."]);
               } else if (dogeDead) {
                  b(["<25>{#p/alphys}{#f/13}* ... I was worried she'd overreact to the loss of Doge..."]);
               } else if (royalguardsDead) {
                  b(["<25>{#p/alphys}{#f/13}* ... I was worried she'd overreact to 03 and 04's deaths..."]);
               } else if (madjickDead) {
                  b(["<25>{#p/alphys}{#f/13}* ... I was worried she'd overreact to the loss of Cozmo..."]);
               } else if (knightknightDead) {
                  b(["<25>{#p/alphys}{#f/13}* ... I was worried she'd overreact to the loss of Terrestria..."]);
               } else if (torielDead) {
                  b(["<25>{#p/alphys}{#f/13}* ... I was worried she'd overreact to the former queen's death..."]);
               } else if (muffetDead) {
                  b(["<25>{#p/alphys}{#f/13}* ... I was worried she'd overreact to the spider queen's death..."]);
               } else if (kills > 1) {
                  b(["<25>{#p/alphys}{#f/13}* ... I was worried she'd overreact to those monsters' deaths..."]);
               } else if (outlandsKills === 1) {
                  b(["<26>{#p/alphys}{#f/13}* ... I was worried she'd overreact to that death in the Outlands..."]);
               } else if (startonKills === 1) {
                  b(["<25>{#p/alphys}{#f/13}* ... I was worried she'd overreact to that death in Starton..."]);
               } else if (foundryKills === 1 || shyrenDead) {
                  b(["<25>{#p/alphys}{#f/13}* ... I was worried she'd overreact to that death in the Foundry..."]);
               } else if (aerialisKills === 1 || glydeDead) {
                  b(["<25>{#p/alphys}{#f/13}* ... I was worried she'd overreact to that death in Aerialis..."]);
               } else {
                  b(["<25>{#p/alphys}{#f/13}* ... I was worried she'd overreact to that death at the CORE..."]);
               }
               if (royals < 2) {
                  b(['<25>{#p/alphys}{#f/17}* But all she did was re- establish the royal guard and its forces.']);
               } else {
                  b(["<25>{#p/alphys}{#f/17}* But all she did was bolster the royal guard's forces."]);
               }
               if (respect) {
                  b(['<25>{#p/alphys}{#f/19}* And... make a speech about how humans are dishonorable warriors.']);
               } else if (dateLevel === 2) {
                  b(['<25>{#p/alphys}{#f/19}* And... make a speech about how humans are backstabbing traitors.']);
               } else {
                  b(['<25>{#p/alphys}{#f/19}* And... make a speech about how humans are irredeemable killers.']);
               }
               if (overreaction2) {
                  b(['<25>{#p/alphys}{#f/20}* A speech that only got people on her side...']);
                  if (fearsome) {
                     b(['<25>{#p/alphys}{#f/26}* ... after they were reminded of your bullying.']);
                  } else {
                     b([
                        "<25>{#p/alphys}{#f/20}* ... after she mentioned the circumstances of ASGORE's disappearance."
                     ]);
                  }
               } else {
                  b(['<25>{#p/alphys}{#f/20}* A speech that... actually got a lot of people on her side.']);
                  if (fearsome) {
                     b(["<25>{#p/alphys}{#f/26}* ... beating everyone up certainly didn't help your case."]);
                  } else {
                     b(['<25>{#p/alphys}{#f/5}* ... monsters are pretty wary of humans these days because of that.']);
                  }
               }
               b([
                  '<25>{#p/alphys}{#f/10}* As for the actual humans still alive on the outpost...?',
                  "<25>{#p/alphys}{#f/4}* Well, after what she said, I... didn't want to take any chances.",
                  '<25>{#p/alphys}{#f/20}* So... I had the archive moved to a spire house in Aerialis.',
                  '<25>{#p/alphys}{#f/20}* In secret.',
                  '<25>{#p/alphys}{#f/5}* ... Undyne saw the lack of humans, or... human SOULs, and...',
                  "<25>{#p/alphys}{#f/10}* Assumed they'd been lost, too."
               ]);
               if (torielDead) {
                  b([
                     '<25>{#p/alphys}{#f/3}* I, ahah, tried to talk her out of announcing it in public, but...',
                     '<25>{#p/alphys}{#f/3}* ... there was nothing I could do...!',
                     "<25>{#p/alphys}{#f/30}* ...\n* Everyone thinks we're back at square one now."
                  ]);
                  if (papyrusDead) {
                     b([
                        "<25>{#p/alphys}{#f/31}* Many have lost hope that we'll... ever get out of here.",
                        '<25>{#p/alphys}{#f/31}* ...',
                        "<25>{#p/alphys}{#f/30}* People are angry.\n* They're scared, and they all want to leave.",
                        "<25>{#p/alphys}{#f/31}* I don't know how much longer I can keep this secret from everyone.",
                        '<25>{#p/sans}{#f/0}* hey, you still talking to yourself in there?',
                        "<25>{#p/sans}{#f/3}* c'mon, the humans are due for their daily checkup.",
                        '<25>{#p/alphys}{#f/20}* Uh... could you come in for just a moment?',
                        '<25>{#p/sans}{#f/0}* on it.',
                        "<25>{#p/sans}{#f/0}* ... and i'm here.",
                        "<25>{#p/alphys}{#f/20}* So... I'm not really talking to myself.",
                        "<25>{#p/alphys}{#f/19}* Actually, I'm leaving a message for the human.\n* It's recording now...",
                        '<25>{#p/sans}{#f/0}* hmm... i see.',
                        '<25>{#p/sans}{#f/2}* mind if i take over while you go look after the kids?',
                        "<26>{#p/alphys}{#f/5}* S-sure, I'll... go do that.",
                        '<25>{#p/sans}{#f/3}* ...',
                        "<25>{#p/sans}{#f/0}* ok, look, i won't take up much of your time.",
                        '<25>{#p/sans}{#f/0}* to be honest, i just took over the phone so i could hang it up.',
                        '<25>{#p/sans}{#f/3}* alphys has a habit of making phone calls that stress her out.',
                        '<25>{#p/sans}{#f/0}* but... before i go.',
                        "<25>{#p/sans}{#f/0}* undyne's announcement wasn't the only bad news we received.",
                        "<26>{#p/sans}{#f/3}* reports of the former queen's death hit people pretty hard, too.",
                        '<25>{#p/sans}{#f/0}* shops closed down, people quit their jobs...',
                        "<25>{#p/sans}{#f/0}* they're saying morale is the lowest it's ever been.",
                        "<25>{#p/sans}{#f/2}* ... on the bright side, at least grillby's gets a lot of business now.",
                        '<25>{#p/sans}{#f/3}* but no amount of junk food can make up for the loss of my...',
                        '<26>{#p/sans}{#f/3}* ... well, i think you know who i mean.',
                        '<26>{#p/sans}{#f/0}* ...',
                        "<25>{#p/sans}{#f/0}* humanity's reputation is honestly pretty terrible now.",
                        '<25>{#p/sans}{#f/0}* alphys and i will do our best to protect the next human who comes...',
                        "<25>{#p/sans}{#f/3}* but i wouldn't be surprised if they end up getting killed.",
                        "<25>{#p/sans}{#f/0}* ... that's just the way things are now.",
                        '<25>{#p/alphys}{#f/27}* Uh, hey, sorry to interrupt, but...',
                        '<26>{#p/alphys}{#f/20}* I think we may have a... b-bit of a problem.',
                        '<25>{#p/sans}{#f/0}* eh, i said all i wanted to, anyway.',
                        "<25>{#p/sans}{#f/0}* i'm hanging up the phone now.",
                        '<25>{#p/sans}{#f/3}* ... goodbye.'
                     ]);
                  } else {
                     b([
                        '<18>{#p/papyrus}{#f/0}EVERYONE EXCEPT FOR YOU, ME, AND MY BROTHER!',
                        '<25>{#p/alphys}{#f/27}* Oh, hey Papyrus.\n* I take it the archive is still working?',
                        '<18>{#p/papyrus}{#f/0}INDEED IT IS!',
                        '<18>{#p/papyrus}{#f/9}I ALSO GAVE THE HUMANS THEIR DAILY CHECKUP!',
                        '<25>{#p/alphys}{#f/10}* Awesome, thanks.',
                        "<25>{#p/alphys}{#f/10}* ... maybe... you'd like to say a few things to the human...?",
                        "<25>{#p/alphys}{#f/5}* I'm leaving a message about what's happened since they left.",
                        '<18>{#p/papyrus}{#f/0}OH, SURE THING!',
                        "<18>{#p/papyrus}{#f/0}... HELLO, HUMAN.\nI TRUST YOU'RE DOING WELL.",
                        "<18>{#p/papyrus}{#f/5}IT'S BEEN HARD KEEPING SECRETS FROM EVERYONE...",
                        "<18>{#p/papyrus}{#f/6}ESPECIALLY WHEN THEY'RE ALL JUST SO SAD!!!",
                        "<18>{#p/papyrus}{#f/5}ALL THOSE PEOPLE THINKING THEY'LL NEVER ESCAPE...",
                        '<18>{#p/papyrus}{#f/5}WONDERING IF THEY STILL HAVE A FUTURE...',
                        "<18>{#p/papyrus}{#f/0}BUT HEY!!\nIT'LL BE ALRIGHT!!",
                        "<18>{#p/papyrus}{#f/5}ONE DAY, THEY'LL COME TO KNOW THE TRUTH...",
                        '<18>{#p/papyrus}{#f/0}AND THE TRUTH WILL SET THEM FREE.',
                        "<25>{#p/alphys}{#f/8}* Papyrus, why don't you tell them about your new job?",
                        '<18>{#p/papyrus}{#f/0}OH RIGHT!!\nHOW COULD I FORGET ABOUT THAT!?',
                        '<18>{#p/papyrus}{#f/0}... UNDYNE FINALLY LET ME JOIN THE ROYAL GUARD.',
                        "<18>{#p/papyrus}{#f/4}TECHNICALLY, I'M THE GUARD'S MORALE OFFICER...",
                        '<18>{#p/papyrus}{#f/0}BUT I STILL DO A VERY IMPORTANT JOB!',
                        "<18>{#p/papyrus}{#f/5}YOU SEE, A GUARD CAN'T DO THEIR BEST...",
                        "<18>{#p/papyrus}{#f/5}IF THEY'RE DOWN IN THE DUMPS.",
                        "<18>{#p/papyrus}{#f/0}SO... THAT'S WHERE I COME IN!",
                        '<18>{#p/papyrus}{#f/4}UM, METAPHORICALLY OF COURSE.',
                        "<18>{#p/papyrus}{#f/4}I WOULDN'T ACTUALLY GO DOWN INTO A DUMP.",
                        "<18>{#p/papyrus}{#f/7}... THERE'S ENOUGH PEOPLE DOING THAT ALREADY!!!",
                        "<18>{#p/papyrus}{#f/5}IT'S STRANGE...\nTHEY NEVER SEEM TO COME BACK.",
                        "<25>{#p/alphys}{#f/10}* Eheh, I wouldn't worry about that.",
                        '<25>{#p/alphys}{#f/3}* They must just be so obsessed with trash, they never leave!',
                        '<18>{#p/papyrus}{#f/0}YEAH...\nTHAT MUST BE IT.',
                        '<18>{#p/papyrus}{#f/5}...',
                        "<18>{#p/papyrus}{#f/5}IT'S STILL KIND OF CONCERNING, THOUGH.",
                        '<25>{#p/alphys}{#f/31}* ... yeah.',
                        "<25>{#p/sans}{#f/0}* oh.\n* hey guys.\n* sorry i'm late...",
                        '<25>{#p/sans}{#f/2}* the people on the floor below us want me to make breakfast.',
                        "<25>{#p/alphys}{#f/25}* Well aren't they just a needy bunch.",
                        '<18>{#p/papyrus}{#f/7}UGH... LIVING IN A SPIRE HOUSE MUST BE SO ANNOYING!!',
                        '<18>{#p/papyrus}{#f/4}DO THEY NOT KNOW HOW TO COOK FOR THEMSELVES?',
                        "<25>{#p/sans}{#f/0}* i mean, i can't say i blame 'em.",
                        "<25>{#p/sans}{#f/0}* after undyne's announcement about our progress, and...",
                        "<25>{#p/sans}{#f/0}* those reports of the former queen's death...?",
                        "<25>{#p/sans}{#f/3}* i'd probably want someone else to cook for me, too.",
                        "<25>{#p/sans}{#f/2}* but hey.\n* that's why i have you.",
                        '<18>{#p/papyrus}{#f/0}YEAH!!\nWHO NEEDS SOMEONE ELSE TO COOK...',
                        '<18>{#p/papyrus}{#f/9}... WHEN YOU HAVE THE ONE AND ONLY GREAT PAPYRUS!',
                        '<26>{#p/sans}{#f/0}* heh.',
                        '<26>{#p/sans}{#f/0}* well, i should probably get started on that breakfast now.',
                        '<26>{#p/sans}{#f/3}* papyrus, would you mind coming with me?',
                        "<18>{#p/papyrus}{#f/0}OF COURSE!\nI'LL GO WITH YOU RIGHT AWAY!",
                        '<26>{#p/sans}{#f/0}* alrighty, then.\n* ... on we go!',
                        '<25>{#p/alphys}{#f/17}* Have fun.',
                        '<25>{#p/alphys}{#f/17}* ...',
                        '<25>{#p/alphys}{#f/5}* I guess I should probably hang up the phone now.',
                        '<25>{#p/alphys}{#f/6}* Just, if this ever gets to you, then...',
                        "<25>{#p/alphys}{#f/14}* I hope you're doing better than we are right now.",
                        '<25>{#p/alphys}{#f/20}* ...',
                        '<25>{#p/alphys}{#f/20}* See you later.'
                     ]);
                  }
               } else {
                  b([
                     '<25>{#p/alphys}{#f/5}* F-fortunately, the former queen returned, and...',
                     '<25>{#p/alphys}{#f/5}* Managed to convince her not to make an announcement about it.',
                     '<25>{#p/alphys}{#f/10}* There was some tension between them at first, but...',
                     "<25>{#p/alphys}{#f/6}* ... things feel like they're kind of back to normal, now."
                  ]);
                  if (papyrusDead) {
                     b([
                        '<25>{#p/alphys}{#f/4}* The only difference from before is...',
                        '<25>{#p/alphys}{#f/17}* ... I have to keep the archive a secret.',
                        "<25>{#p/alphys}{#f/20}* Well, I guess that's not really much of a difference.",
                        "<25>{#p/alphys}{#f/14}* It's just weird not having... anyone around to help anymore.",
                        '<25>{#p/sans}{#f/0}* didja forget about me?',
                        "<25>{#p/alphys}{#f/2}* O-oh, uh, that's not what I meant!",
                        "<25>{#p/sans}{#f/3}* hey, i get it.\n* it's not the same as it was with asgore.",
                        "<25>{#p/sans}{#f/0}* but i'd like to think i do a good job.",
                        '<25>{#p/alphys}{#f/6}* Yeah... you do.',
                        '<26>{#p/alphys}{#f/5}* I just miss having him around and stuff.',
                        '<25>{#p/sans}{#f/3}* ... by the way...',
                        '<25>{#p/sans}{#f/0}* you should probably go give the humans their daily checkup.',
                        "<25>{#p/sans}{#f/2}* i can take over on the phone while you're gone.",
                        "<26>{#p/alphys}{#f/6}* Sounds good.\n* I'll go do that now.",
                        '<25>{#p/sans}{#f/3}* ...'
                     ]);
                     if (kills === 1) {
                        b([
                           '<25>{#p/sans}{#f/0}* so here we are, then.',
                           "<25>{#p/sans}{#f/0}* now, since you left, i've been asking myself...",
                           '<25>{#p/sans}{#f/3}* "why would they go out of their way to kill just him?"',
                           "<25>{#p/sans}{#f/0}* and i'm not talking about asgore.",
                           '<25>{#p/sans}{#f/3}* ...',
                           '<25>{#p/sans}{#f/3}* i think we both know the reason.',
                           "<25>{#p/sans}{#f/3}* i think we both know it wasn't out of self- defense.",
                           "<25>{#p/sans}{#f/0}* come on.\n* let's be honest with ourselves here.",
                           "<25>{#p/sans}{#f/0}* you just did it to see what'd happen.",
                           "<25>{#p/sans}{#f/0}* to see what i'd have to say about it.",
                           '<25>{#p/sans}{#f/0}* well, congratulations!\n* you got your answer, bucko!',
                           "<25>{#p/sans}{#f/0}* i hope you're happy with the outcome.",
                           "<27>{#p/sans}{#f/3}* just kidding.\n* i don't really hope that.",
                           '<27>{#p/sans}{#f/0}* ...',
                           "<27>{#p/sans}{#f/0}* ... well, that's all."
                        ]);
                     } else {
                        b([
                           "<25>{#p/sans}{#f/0}* hey.\n* hope you're doing well.",
                           "<25>{#p/sans}{#f/0}* for the most part, we're doing well, too.",
                           '<25>{#p/sans}{#f/3}* people are still going about their lives, day after day...',
                           '<25>{#p/sans}{#f/0}* waiting for the next human to come along and set us free.'
                        ]);
                        if (kills > 2) {
                           b([
                              '<25>{#p/sans}{#f/0}* ... i just wish i could say the same about my brother.',
                              '<25>{#p/sans}{#f/3}* and the other people you killed, for that matter.'
                           ]);
                        } else {
                           b(['<25>{#p/sans}{#f/3}* ... i just wish i could say the same about my brother.']);
                        }
                        b([
                           '<25>{#p/sans}{#f/3}* ...',
                           '<25>{#p/sans}{#f/3}* hmm...\n* what else should i mention?',
                           '<26>{#p/sans}{#f/0}* ... right.\n* new living arrangements.',
                           '<25>{#p/sans}{#f/3}* so, after the former queen returned...',
                           '<25>{#p/sans}{#f/0}* she and i recognized eachother and got to talking.',
                           '<25>{#p/sans}{#f/0}* one thing led to another, and...',
                           '<25>{#p/sans}{#f/0}* she agreed to move in with me to my house in starton town.',
                           "<25>{#p/sans}{#f/0}* ... sure.\n* there's a lot we were excited about.",
                           '<25>{#p/sans}{#f/3}* the books i gave her, the recipes she tried to teach me...',
                           "<25>{#p/sans}{#f/0}* but... y'know...",
                           '<25>{#p/sans}{#f/3}* none of that stuff ever made up for what happened to papyrus.',
                           '<25>{#p/sans}{#f/3}* she still feels pretty bad about that.',
                           '<25>{#p/sans}{#f/0}* not just because she cares about me, but also...',
                           '<25>{#p/sans}{#f/0}* because she cared about you.',
                           "<25>{#p/sans}{#f/3}* you can imagine how she felt when she realized what you'd done.",
                           '<25>{#p/sans}{#f/0}* spoiler alert.\n* not good.',
                           "<25>{#p/sans}{#f/3}* ... and the public at large doesn't seem to feel much better.",
                           '<25>{#p/sans}{#f/0}* at least in terms of your reputation.',
                           '<25>{#p/sans}{#f/0}* still.\n* could be worse.',
                           '<25>{#p/sans}{#f/0}* at the very least, alphys and i are confident...',
                           '<25>{#p/sans}{#f/3}* in our ability to escort the next human to safety.',
                           "<25>{#p/sans}{#f/0}* so that's something.",
                           '<25>{#p/alphys}{#f/27}* Uh, hey, sorry to interrupt, but...',
                           '<26>{#p/alphys}{#f/20}* I think we may have a... b-bit of a problem.',
                           "<25>{#p/sans}{#f/3}* welp.\n* looks like i'll have to cut this short.",
                           "<25>{#p/sans}{#f/0}* just... think about what i've said, ok?",
                           '<25>{#p/sans}{#f/0}* ...',
                           "<25>{#p/sans}{#f/0}* ... well, that's all."
                        ]);
                     }
                  } else {
                     b([
                        "<18>{#p/papyrus}{#f/0}YEAH!!\nTHEY'RE REALLY NOT THAT BAD!",
                        '<18>{#p/papyrus}{#f/5}ASIDE FROM ALL THE SECRET-KEEPING.',
                        '<18>{#p/papyrus}{#f/5}NOT A BIG FAN OF THAT PARTICULAR THING.',
                        '<25>{#p/alphys}{#f/11}* But if Undyne were to find out, then...',
                        "<18>{#p/papyrus}{#f/4}YES, YES, I KNOW WHAT YOU'RE GOING TO SAY.",
                        "<18>{#p/papyrus}{#f/4}SHE'LL GET UPSET AND TRY TO TAKE THE HUMANS' SOULS.",
                        "<18>{#p/papyrus}{#f/7}YOU DON'T HAVE TO REMIND ME!!",
                        "<25>{#p/alphys}{#f/23}* He's been arguing with me about this for a while.",
                        '<18>{#p/papyrus}{#f/5}(SIGH...)',
                        '<18>{#p/papyrus}{#f/5}I FEEL LIKE WE COULD CONVINCE HER IF WE JUST TRIED.',
                        "<25>{#p/alphys}{#f/3}* ... Papyrus, why don't you tell them about your new job?",
                        '<18>{#p/papyrus}{#f/0}OH RIGHT!!\nHOW COULD I FORGET ABOUT THAT!?',
                        '<18>{#p/papyrus}{#f/0}... UNDYNE FINALLY LET ME JOIN THE ROYAL GUARD.',
                        "<18>{#p/papyrus}{#f/9}I'M THE GUARD'S NEWEST TRAINING EXPERT!",
                        '<18>{#p/papyrus}{#f/0}SO... WHILE UNDYNE TRAINS THE OTHER GUARDS...',
                        "<18>{#p/papyrus}{#f/0}I'M RESPONSIBLE FOR KEEPING THEM ALL MOTIVATED.",
                        "<18>{#p/papyrus}{#f/9}TURNS OUT I'M PRETTY DARN GOOD AT IT, TOO!",
                        '<18>{#p/papyrus}{#f/2}HER WORDS -AND- MINE.',
                        "<25>{#p/alphys}{#f/5}* Sounds like fun.\n* Maybe I'll visit you on the job sometime.",
                        "<18>{#p/papyrus}{#f/0}SURE, I'LL LET YOU VISIT.",
                        '<18>{#p/papyrus}{#f/4}AFTER YOU AGREE TO TELL UNDYNE OUR SECRET.',
                        '<25>{#p/alphys}{#f/20}* ...',
                        '<18>{#p/papyrus}{#f/0}SO, HOW ABOUT IT?\nYOU, ME, UNDYNE, CONVINCING?',
                        "<25>{#p/sans}{#f/0}* ... huh?\n* what's this about?",
                        "<25>{#p/sans}{#f/3}* sorry i'm late, by the way.",
                        '<25>{#p/sans}{#f/2}* the people on the floor above us want me to make dinner.',
                        "<25>{#p/alphys}{#f/25}* Well aren't they just a needy bunch.",
                        "<18>{#p/papyrus}{#f/4}AREN'T YOU GOING TO TELL HIM WHAT WE TALKED ABOUT?",
                        '<25>{#p/alphys}{#f/32}* ...',
                        '<25>{#p/alphys}{#f/3}* Papyrus thinks we should tell Undyne the truth.',
                        "<25>{#p/sans}{#f/0}* you really think that'd go well, bro?",
                        '<18>{#p/papyrus}{#f/0}WELL, AS A MEMBER OF THE ROYAL GUARD...',
                        '<18>{#p/papyrus}{#f/0}MY OPINION -SHOULD- CARRY SOME REAL WEIGHT!',
                        "<25>{#p/sans}{#f/0}* hmm... normally i'd say no to something like this, but...",
                        '<25>{#p/sans}{#f/0}* undyne does seem to have a certain respect for you.',
                        "<25>{#p/sans}{#f/3}* besides, i've been thinking about it too.",
                        "<25>{#p/alphys}{#f/22}* W-well, don't go saying anything unless I give the OK!",
                        "<25>{#p/sans}{#f/2}* wouldn't dream of it.",
                        "<18>{#p/papyrus}{#f/0}YEAH!!\nWE'LL JUST PICTURE IT IN OUR HEADS.",
                        '<18>{#p/papyrus}{#f/5}UNLESS THAT ALSO COUNTS AS DREAMING.',
                        '<26>{#p/sans}{#f/0}* heh.',
                        '<26>{#p/sans}{#f/0}* well, i should probably get started on that dinner now.',
                        '<26>{#p/sans}{#f/3}* papyrus, would you mind coming with me?',
                        "<18>{#p/papyrus}{#f/0}OF COURSE!\nI'LL GO WITH YOU RIGHT AWAY!",
                        '<26>{#p/sans}{#f/0}* alrighty, then.\n* ... on we go!',
                        '<25>{#p/alphys}{#f/17}* Have fun.',
                        '<25>{#p/alphys}{#f/17}* ...',
                        '<25>{#p/alphys}{#f/5}* To be honest...',
                        '<25>{#p/alphys}{#f/5}* It would be nice to not have to hide all of this anymore.',
                        "<25>{#p/alphys}{#f/6}* So... maybe, if there's really a chance this could succeed...",
                        '<25>{#p/alphys}{#f/6}* ...',
                        "<25>{#p/alphys}{#f/8}* I-I'll think about it after I hang up the phone.",
                        '<25>{#p/alphys}{#f/10}* ...',
                        '<25>{#p/alphys}{#f/16}* T-take care!!'
                     ]);
                  }
               }
            } else if (!torielDead) {
               if (SAVE.data.b.w_state_lateleave) {
                  // light neutral: runaway variant [toriel call]
                  a([
                     '<25>{#p/toriel}{#f/1}* Hello?',
                     '<25>{#p/toriel}{#f/5}* This is... Toriel.',
                     '<25>{#p/toriel}{#f/1}* ... I know we did not part ways on the best of terms, but...',
                     '<25>{#p/toriel}{#f/5}* I feel that you should know what has happened since your departure.'
                  ]);
                  b([
                     '<25>{#p/toriel}{#f/9}* After you ran away from me, I reconsidered my own decisions.',
                     '<25>{#p/toriel}{#f/13}* I felt... guilty.\n* For trying to keep you in the Outlands.',
                     '<25>{#p/toriel}{#f/13}* For trying to keep ALL the humans there.',
                     '<25>{#p/toriel}{#f/9}* I decided I could stay there no longer.',
                     '<26>{#p/toriel}{#f/13}* I worked up the courage to leave, and returned to the Citadel.',
                     '<25>{#p/toriel}{#f/18}* ... when I saw that the humans were trapped in those boxes...',
                     '<25>{#p/toriel}{#f/13}* I released them without a second thought.',
                     '<26>{#p/toriel}{#f/10}* I did not want them to be trapped any more than I wanted you to be.',
                     '<25>{#p/toriel}{#f/9}* ... but this decision was not without its consequences.',
                     "<25>{#p/toriel}{#f/13}* Not only were the humans traumatized by ASGORE's archive...",
                     '<25>{#p/toriel}{#f/13}* But one of them ran off, and was discovered by the public.',
                     '<25>{#p/toriel}{#f/18}* I did not want to keep them here against their will, but...',
                     "<25>{#p/toriel}{#f/9}* The death of the royal guard's captain, and loss of the king...",
                     "<25>{#p/toriel}{#f/9}* ... placed humanity's reputation in a rather difficult position.",
                     '<25>{#p/toriel}{#f/13}* With the public knowing the truth about the humans...',
                     '<25>{#p/toriel}{#f/9}* I had no choice but to do whatever I could to safeguard them.',
                     '<25>{#p/alphys}{#f/15}* Uh, not to interrupt, but... you have a visitor.',
                     '<25>{#p/toriel}{#f/10}* Let me guess.\n* Sans?',
                     '<25>{#p/alphys}{#f/3}* ...',
                     '<25>{#p/toriel}{#f/0}* There is no need to be so formal when he is the one at the gate.',
                     '<25>{#p/toriel}{#f/9}* System, unlock the gate, authorization Toriel PIE-1-1-0.',
                     "<25>{#p/sans}{#f/0}* ...\n* it's about time.",
                     '<25>{#p/sans}{#f/0}* you still on the phone with the human?',
                     '<25>{#p/alphys}{#f/23}* On the WHAT!?',
                     '<25>{#p/toriel}{#f/0}* Yes, I thought it would be nice if they heard from you, Sans.',
                     '<25>{#p/toriel}{#f/1}* Perhaps Alphys would like to join us as well?',
                     '<25>{#p/alphys}{#f/21}* ...',
                     '<25>{#p/alphys}{#f/21}* No.\n* Alphys would not.',
                     '<25>{#p/alphys}{#f/21}* In fact, Alphys would like to leave now.',
                     "<25>{#p/alphys}{#f/24}* ... I'll be outside if you need me.",
                     '<25>{#p/sans}{#f/0}* ...',
                     '<25>{#p/toriel}{#f/5}* ...'
                  ]);
                  if (SAVE.data.n.state_foundry_undyne === 1) {
                     b([
                        "<25>{#p/sans}{#f/3}* she's... still pretty upset about what happened to undyne.",
                        "<25>{#p/sans}{#f/0}* about what she's had to do as a result."
                     ]);
                  } else {
                     b([
                        "<25>{#p/sans}{#f/3}* she's... still pretty angry about what you did to undyne.",
                        "<25>{#p/sans}{#f/0}* about what she's had to do as a result."
                     ]);
                  }
                  if (papyrusDead) {
                     b([
                        '<25>{#p/sans}{#f/3}* and you know what?',
                        '<25>{#p/sans}{#f/0}* i really get it.',
                        '<25>{#p/sans}{#f/0}* i know what alphys must be going through right now.',
                        '<25>{#p/sans}{#f/0}* after all...',
                        "<25>{#p/sans}{#f/3}* she's not the only one who lost someone."
                     ]);
                  } else {
                     if (SAVE.data.n.state_foundry_undyne === 1) {
                        b(["<25>{#p/sans}{#f/3}* and while i wouldn't blame you for running away..."]);
                     } else {
                        b(["<25>{#p/sans}{#f/3}* and while i wouldn't blame you for trying to defend yourself..."]);
                     }
                     b([
                        "<25>{#p/sans}{#f/0}* i can't help but wonder if there was a better way to go about things.",
                        '<25>{#p/sans}{#f/0}* if, maybe somehow, this all could have been avoided.',
                        '<25>{#p/sans}{#f/3}* but i digress.',
                        "<25>{#p/sans}{#f/0}* there's too much at stake in the present to worry about the past."
                     ]);
                  }
                  if (royals < 2) {
                     b([
                        '<25>{#p/sans}{#f/0}* ...',
                        "<25>{#p/sans}{#f/0}* it's been difficult without the royal guard to protect us.",
                        '<25>{#p/sans}{#f/3}* not that i was a big fan of those guys before, but...',
                        "<25>{#p/sans}{#f/0}* at a time like this, it'd be nice to have them around.",
                        '<25>{#p/toriel}{#f/13}* Yes, sadly, I am inclined to agree.',
                        '<25>{#p/toriel}{#f/13}* It seems not a day goes by without an angered citizen at the gate.',
                        '<25>{#p/toriel}{#f/9}* But it cannot be helped.',
                        '<25>{#p/toriel}{#f/9}* There are few who share my willingness to treat humans as individuals.',
                        '<32>{#p/human}{#v/1}{@fill:#42fcff}* Toriel, are we in danger?',
                        '<25>{#p/toriel}{#f/1}* ... oh, hello!',
                        '<25>{#p/toriel}{#f/0}* Do not worry, my child.\n* I will always be here to protect you.',
                        '<32>{#p/human}{#v/1}{@fill:#42fcff}* ... thank you...',
                        '<25>{#p/toriel}{#f/0}* Now, please go back and wait with the others.',
                        '<25>{#p/toriel}{#f/0}* I will be with you shortly.',
                        "<32>{#p/human}{#v/1}{@fill:#42fcff}* Okay, I'll go...",
                        '<25>{#p/toriel}{#f/10}* ... very good.',
                        '<25>{#p/toriel}{#f/9}* ...'
                     ]);
                     if (papyrusDead) {
                        b([
                           '<25>{#p/toriel}{#f/10}* I suppose I cannot judge the citizens too harshly...',
                           '<25>{#p/toriel}{#f/9}* ... knowing the sorts of choices you made during your time here.',
                           '<25>{#p/toriel}{#f/13}* It was... difficult, even for me, to accept what you had done.'
                        ]);
                     } else {
                        b(['<25>{#p/toriel}{#f/13}* It is... an unfortunate situation we find ourselves in.']);
                     }
                     b([
                        "<25>{#p/sans}{#f/0}* y'know...",
                        "<25>{#p/sans}{#f/0}* i wanted to go to grillby's the other day, but...",
                        '<25>{#p/sans}{#f/3}* their entire stock got raided last week.',
                        '<25>{#p/sans}{#f/0}* turns out grillby was a pro-human supporter.',
                        '<25>{#p/toriel}{#f/13}* I am... sorry to hear that, Sans.\n* You liked going there.',
                        '<25>{#p/sans}{#f/3}* yeah, being pro-human is basically a death sentence these days.',
                        '<25>{#p/sans}{#f/0}* at least where your business is concerned.',
                        '<25>{#p/toriel}{#f/12}* ... this is not the only instance of this happening.',
                        '<25>{#p/toriel}{#f/11}* Many others have had the same fate.',
                        '<25>{#p/sans}{#f/0}* yeah, but you know what the worst part is?',
                        "<25>{#p/sans}{#f/3}* this isn't what monsters are supposed to be like.",
                        '<25>{#p/sans}{#f/0}* the homeworld was said to be peaceful, and even during the war...',
                        '<25>{#p/sans}{#f/0}* at least we were still united as a species.',
                        "<25>{#p/sans}{#f/3}* now, it just feels like... people can't get along."
                     ]);
                     if (papyrusDead) {
                        b(["<25>{#p/sans}{#f/0}* i could really use my brother's encouragement right about now."]);
                     } else {
                        b(['<25>{#p/sans}{#f/0}* and that really stinks.']);
                     }
                     b([
                        '<25>{#p/alphys}{#f/3}* Uh... guys?',
                        '<25>{#p/alphys}{#f/3}* I think you need to come see this.',
                        '<25>{#p/toriel}{#f/3}* What is that rumbling?\n* Do you hear that?',
                        '<25>{#p/alphys}{#f/23}* You need to look outside.',
                        '<25>{#p/sans}{#f/0}* toriel, did you lock the gate after i got through?',
                        '<25>{#p/toriel}{#f/2}* ...',
                        '<25>{#p/alphys}{#f/22}* Come outside, NOW!!',
                        '<25>{|}{#p/toriel}{#f/2}* I... I am sorry!\n* I have to- {%}'
                     ]);
                  } else {
                     b([
                        '<25>{#p/sans}{#f/0}* ...',
                        '<25>{#p/sans}{#f/0}* at least we have the royal guard around to back us up.',
                        "<25>{#p/sans}{#f/3}* what's left of it, anyway.",
                        '<25>{#p/toriel}{#f/14}* It is fortunate we have their support.',
                        '<25>{#p/toriel}{#f/13}* I do not know how we would fare without it.',
                        '<32>{#p/human}{#v/2}{@fill:#ff993d}* Yeah!\n* That royal guard is awesome!',
                        '<25>{#p/toriel}{#f/2}* ... huh!?',
                        "<32>{#p/human}{#v/2}{@fill:#ff993d}* You'll see!",
                        "<32>{#p/human}{#v/2}{@fill:#ff993d}* When I'm older, I'm gonna join them and protect everyone!",
                        '<25>{#p/toriel}{#f/0}* Hee hee.\n* Perhaps you will.',
                        '<25>{#p/toriel}{#f/1}* Hmm...',
                        '<25>{#p/toriel}{#f/0}* For now, your orders are to return to and guard the others first.',
                        "<32>{#p/human}{#v/2}{@fill:#ff993d}* Aye aye, captain!\n* I'll do so right away!",
                        '<25>{#p/toriel}{#f/0}* Stay safe!',
                        "<25>{#p/sans}{#f/0}* heh.\n* don't push 'em too hard out there.",
                        "<25>{#p/sans}{#f/3}* they've... still got all that archive stuff to deal with.",
                        '<26>{#p/toriel}{#f/5}* That IS true, however...',
                        '<25>{#p/toriel}{#f/0}* It does not mean they must focus on it all the time.',
                        '<25>{#p/toriel}{#f/1}* They are still only children, are they not?',
                        '<25>{#p/sans}{#f/2}* ... welp, you know more about these things than me.',
                        '<25>{#p/toriel}{#f/9}* ...',
                        '<25>{#p/toriel}{#f/9}* I do still worry about the outpost overall.',
                        '<25>{#p/toriel}{#f/13}* The royal guard has helped to keep the outpost in check, but...',
                        '<25>{#p/toriel}{#f/18}* Many people still do not see the value in what we are doing.'
                     ]);
                     if (papyrusDead) {
                        b([
                           '<25>{#p/toriel}{#f/10}* Though, I suppose I cannot judge them too harshly...',
                           '<25>{#p/toriel}{#f/9}* ... knowing the sorts of choices you made during your time here.',
                           '<25>{#p/toriel}{#f/13}* It was... difficult, even for me, to accept what you had done.'
                        ]);
                     } else {
                        b(['<25>{#p/toriel}{#f/13}* It is... an unfortunate situation we find ourselves in.']);
                     }
                     b([
                        "<25>{#p/sans}{#f/0}* y'know...",
                        "<25>{#p/sans}{#f/0}* i wanted to go to grillby's the other day, but...",
                        '<25>{#p/sans}{#f/3}* the place was utterly full of protesters.',
                        '<25>{#p/sans}{#f/0}* turns out grillby was a pro-human supporter.',
                        '<25>{#p/toriel}{#f/13}* I am... sorry to hear that, Sans.\n* Was a guard not there?',
                        "<25>{#p/sans}{#f/3}* well, yeah, but it's not like they can kick 'em out.",
                        '<25>{#p/sans}{#f/0}* they WERE still paying customers.',
                        '<25>{#p/toriel}{#f/1}* ... that does not seem like an effective means of protest.',
                        '<25>{#p/toriel}{#f/6}* But I wish them well.',
                        "<25>{#p/sans}{#f/0}* yeah, i guess that's kinda funny.\n* but at the same time...",
                        "<25>{#p/sans}{#f/3}* this isn't what monsters are supposed to be like.",
                        '<25>{#p/sans}{#f/0}* the homeworld was said to be peaceful, and even during the war...',
                        '<25>{#p/sans}{#f/0}* at least we were still united as a species.',
                        "<25>{#p/sans}{#f/3}* now, it just feels like... people can't get along."
                     ]);
                     if (papyrusDead) {
                        b(["<25>{#p/sans}{#f/0}* i could really use my brother's encouragement right about now."]);
                     } else {
                        b(['<25>{#p/sans}{#f/0}* and that really stinks.']);
                     }
                     b([
                        '<25>{#p/alphys}{#f/27}* Uh, Toriel?\n* I think you left the security gate open.',
                        "<25>{#p/alphys}{#f/20}* Don't worry, I closed it for you... again.",
                        '<25>{#p/toriel}{#f/1}* Oh, um, thank you...',
                        "<26>{#p/alphys}{#f/23}* Maybe don't do that\n  next time?\n* It's there for a reason.",
                        '<25>{#p/toriel}{#f/5}* ...',
                        '<25>{#p/toriel}{#f/9}* Perhaps now would be a good time to end this message.',
                        "<25>{#p/sans}{#f/0}* yeah, we can't talk to you forever, bucko.",
                        '<25>{#p/sans}{#f/0}* so... fly safe out there, i guess.'
                     ]);
                     if (papyrusDead) {
                        b(["<25>{#p/sans}{#f/3}* or not.\n* i don't really care."]);
                     } else {
                        b(['<25>{#p/sans}{#f/3}* ...']);
                     }
                  }
               } else {
                  if (SAVE.data.n.state_wastelands_toriel === 0) {
                     a([
                        '<25>{#p/toriel}{#f/1}* Hello?',
                        '<25>{#p/toriel}{#f/0}* ...\n* This is Toriel.',
                        '<25>{#p/toriel}{#f/1}* I know it is not the kind of call we would normally have, but...',
                        '<25>{#p/toriel}{#f/5}* I feel that you should know what has happened since your departure.'
                     ]);
                     b(['<25>{#p/toriel}{#f/9}* Despite our calling arrangements, I could not help but worry.']);
                  } else {
                     a([
                        '<25>{#p/toriel}{#f/1}* Hello?',
                        '<25>{#p/toriel}{#f/0}* ...\n* This is Toriel.',
                        '<25>{#p/toriel}{#f/1}* I know the circumstances are not ideal at the moment, but...',
                        '<25>{#p/toriel}{#f/5}* I feel that you should know what has happened since your departure.'
                     ]);
                     b(['<25>{#p/toriel}{#f/9}* After our time in the Outlands, I could not help but worry.']);
                  }
                  b([
                     '<25>{#p/toriel}{#f/5}* I knew you were the last human ASGORE would have needed.',
                     '<25>{#p/toriel}{#f/1}* Despite my fear of leaving the Outlands...',
                     '<25>{#p/toriel}{#f/5}* I knew I could not afford to remain there any longer.',
                     '<25>{#p/toriel}{#f/9}* I ran to the Citadel as fast as I could to stop him from hurting you.',
                     '<25>{#p/toriel}{#f/10}* But when I got there...',
                     '<25>{#p/toriel}{#f/9}* I realized I had been wrong about him this whole time.',
                     '<25>{#p/toriel}{#f/5}* He was not the killer I had made him out to be.',
                     '<25>{#p/toriel}{#f/1}* ...',
                     '<25>{#p/toriel}{#f/1}* I had a talk with Alphys later that day.',
                     '<25>{#p/toriel}{#f/1}* We discussed ASGORE, the humans...',
                     '<25>{#p/toriel}{#f/3}* As well as something about a "Mew Mew Space Adventure?"',
                     '<25>{#p/toriel}{#f/4}* I still do not know what that means.',
                     "<25>{#p/toriel}{#f/0}* Anyhoo, to summarize... she wasn't ready to become the queen.",
                     '<25>{#p/toriel}{#f/1}* And she agreed to appoint me instead.',
                     "<25>{#p/toriel}{#f/5}* Only then, did I hear about the royal guard captain's death..."
                  ]);
                  if (kills === 0) {
                     b([
                        '<25>{#p/toriel}{#f/9}* And the fact that, had you acted, you might have saved her.',
                        '<25>{#p/toriel}{#f/5}* I only have my own cowardice to blame, however.',
                        '<25>{#p/toriel}{#f/1}* If I had simply posessed the courage leave sooner...',
                        '<25>{#p/toriel}{#f/5}* I could have gone with you and pointed you in the right direction.'
                     ]);
                  } else {
                     if (kills === 1) {
                        b(['<25>{#p/toriel}{#f/9}* And the fact that you were the one to have killed her.']);
                     } else if (papyrusDead) {
                        b(["<25>{#p/toriel}{#f/9}* As well as the death of Sans's brother, Papyrus."]);
                     } else if (royals < 2) {
                        b(['<26>{#p/toriel}{#f/9}* As well as the deaths of the rest of the royal guard.']);
                     } else if (royals < 7) {
                        b(['<25>{#p/toriel}{#f/9}* As well as the deaths of other royal guard members.']);
                     } else if (doggoDead) {
                        b(['<25>{#p/toriel}{#f/9}* As well as the death of her subordinate, Doggo.']);
                     } else if (lesserdogDead) {
                        b(['<25>{#p/toriel}{#f/9}* As well as the death of her subordinate, Canis Minor.']);
                     } else if (dogsDead) {
                        b(['<25>{#p/toriel}{#f/9}* As well as the death of her subordinates, Dogamy and Dogaressa.']);
                     } else if (greatdogDead) {
                        b(['<25>{#p/toriel}{#f/9}* As well as the death of her subordinate, Canis Major.']);
                     } else if (dogeDead) {
                        b(['<25>{#p/toriel}{#f/9}* As well as the death of her subordinate, Doge']);
                     } else if (royalguardsDead) {
                        b(['<25>{#p/toriel}{#f/9}* As well as the death of her subordinates, 03 and 04.']);
                     } else if (madjickDead) {
                        b(['<25>{#p/toriel}{#f/9}* As well as the death of her subordinate, Cozmo.']);
                     } else if (knightknightDead) {
                        b(['<25>{#p/toriel}{#f/9}* As well as the death of her subordinate, Terrestria.']);
                     } else if (kills > 9) {
                        b(['<25>{#p/toriel}{#f/9}* As well as the deaths of many other monsters.']);
                     } else if (kills > 2) {
                        b(['<25>{#p/toriel}{#f/9}* As well as the deaths of a few other monsters.']);
                     } else {
                        b(['<25>{#p/toriel}{#f/9}* As well as the death of one other monster.']);
                     }
                     b([
                        '<25>{#p/toriel}{#f/5}* I only have my own cowardice to blame, however.',
                        '<25>{#p/toriel}{#f/1}* If I had simply posessed the courage leave sooner...',
                        '<25>{#p/toriel}{#f/5}* I could have gone with you and encouraged a more peaceful path.'
                     ]);
                  }
                  b([
                     '<26>{#p/toriel}{#f/9}* Alas, there was nothing more to be done.',
                     '<25>{#p/toriel}{#f/5}* As queen, I did not have time to dwell on such matters.',
                     "<25>{#p/toriel}{#f/9}* The humans' safety was at stake, and I would not lose them again.",
                     '<25>{#p/toriel}{#f/10}* My first act as queen would be to increase their protection.'
                  ]);
                  if (royals < 2) {
                     b([
                        '<26>{#p/toriel}{#f/5}* Admittedly, this would be difficult, given the lack of a royal guard.'
                     ]);
                  } else {
                     b([
                        '<25>{#p/toriel}{#f/5}* Admittedly, I was out of practice in handling these sorts of matters.'
                     ]);
                  }
                  b([
                     '<25>{#p/toriel}{#f/1}* But with the help of an old friend, Gerson, and his contacts...',
                     '<25>{#p/toriel}{#f/1}* I was able to arrange a minimal security detail here in the Citadel.',
                     '<25>{#p/toriel}{#f/0}* It is not much, but the humans and their secret are safer now.',
                     '<25>{#p/toriel}{#f/1}* ...',
                     '<25>{#p/toriel}{#f/1}* Since then, life has carried on as usual...'
                  ]);
                  if (royals < 2) {
                     b(['<25>{#p/toriel}{#f/5}* Despite the loss of the king, and royal guard as a whole...']);
                  } else {
                     b(['<25>{#p/toriel}{#f/5}* Despite the loss of the king, and former royal guard captain...']);
                  }
                  b([
                     '<25>{#p/toriel}{#f/1}* The people still have hope for their freedom.',
                     '<25>{#p/toriel}{#f/5}* Hope that... I will deliver it to them.',
                     '<25>{#p/toriel}{#f/9}* ...',
                     '<25>{#p/toriel}{#f/9}* In a way, I understand what ASGORE must have been going through now.',
                     '<25>{#p/toriel}{#f/10}* The weight of such outrageous demands being made of me...',
                     '<25>{#p/toriel}{#f/9}* ... it is changing who I am as a person.',
                     '<25>{#p/toriel}{#f/5}* Earlier today, in fact.'
                  ]);
                  if (papyrusDead) {
                     b([
                        '<25>{#p/toriel}{#f/5}* When Sans came to reminisce about his brother, I...',
                        '<25>{#p/toriel}{#f/9}* I declined out of a desire to be left alone.',
                        '<25>{#p/toriel}{#f/1}* He shrugged, and walked off like nothing was wrong...',
                        '<25>{#p/toriel}{#f/5}* But I knew he must have been disappointed.'
                     ]);
                  } else {
                     b([
                        '<25>{#p/toriel}{#f/5}* When Papyrus came to reminisce about Undyne, I...',
                        '<25>{#p/toriel}{#f/9}* I declined out of a desire to be left alone.',
                        '<25>{#p/toriel}{#f/1}* He tried to act like nothing was wrong...',
                        '<25>{#p/toriel}{#f/5}* But I knew he was probably upset.'
                     ]);
                  }
                  b([
                     '<25>{#p/toriel}{#f/9}* ... I felt guilty, but with all this pressure bearing down on me...',
                     '<25>{#p/toriel}{#f/5}* I did not see myself having the energy to discuss such a topic.',
                     '<25>{#p/toriel}{#f/5}* ...',
                     '<25>{#p/toriel}{#f/1}* Still.\n* I have not given up on our future.',
                     '<25>{#p/toriel}{#f/1}* No matter what happens to me, or my own well-being...',
                     '<25>{#p/toriel}{#f/0}* At least monsterkind will go free one day.',
                     '<25>{#p/toriel}{#f/1}* That is what matters now, is it not?',
                     '<25>{#p/toriel}{#f/1}* ...',
                     '<25>{#p/toriel}{#f/5}* ...',
                     '<25>{#p/toriel}{#f/9}* ... I suppose... it would be a good time to end the call now.',
                     '<25>{#p/toriel}{#f/9}* There is not much else for me to say.',
                     '<25>{#p/toriel}{#f/5}* ...',
                     '<25>{#p/toriel}{#f/5}* Goodbye, little one.'
                  ]);
               }
            } else if (!muffetDead) {
               // light neutral: spider queen variant [muffet call]
               /*
                  - with undyne and toriel dead, and alphys having fled from the throne, muffet siezes the opportunity
                  - muffet knows alphys is gone because one a spider spy spotted her with catty and bratty
                  - humans in archive are released, and are made into slaves for the spider clans
                  - the outpost becomes a dictatorship where people do what the queen demands or else
                  - muffet uses hypnosis???
               */
               if (fearsome) {
                  // muffet doesn't give a crap that people are afraid, that just makes them easier tools to use
               }
            } else if (!papyrusDead) {
               // light neutral: king papyrus variant [papyrus call]
               /*
                  - with muffet also dead, a lot of time passes without there being an actual leader
                  - without orders from above, the royal guard stops doing their job, and falls apart
                  - sans soon realizes there isn't a leader
                  - papyrus hears of this and decides to take matters into his hands
                  - with papyrus in charge, the kingdom restructures itself around making friends!
               */
               if (fearsome) {
                  // papyrus encourages people to put aside their fears, and it somehow works (pap too epic)
               }
            } else if (royals !== 5 || doggoDead || lesserdogDead || dogsDead || greatdogDead || dogeDead) {
               // light neutral: king sans variant [sans call]
               /*
                  - when sans realizes there isn't a leader, he's not sure what to do except try to be king
                  - the outpost becomes a very relaxed place, where it's okay to slack off
               */
               if (fearsome) {
                  // sans doesn't worry too much about people being afraid, and lets them calm down over time
               }
            } else {
               // light neutral: dog council variant [canis maximus call]
               /*
                  "you've left one big mess behind since you left. almost everybody completely lost hope."
                  "alphys especially has taken things pretty hard. she's completely shut herself out from the outside world."
                  "i've tried to talk to her, but no dice."
                  "with no real figureheads to turn to, the canine unit sort of formed a new government, a council of sorts."
                  "they walk inside and sit at their usual table in grillby's wearing formal suits and uh..."
                  "discuss some pretty out-there policies."
                  "seems to be working pretty well, funny enough."
                  "i get a treat and bellyrubs for doing good work, now i kinda see why dogs are a fan of this sorta thing."
                  "they can make even a lazybones like me work my butt off."
                  "almost makes you forget that not all is right with the world."
                  "...but we both know things could be better than this, right?"
                  - call begins with bark bark
                  - doge takes over the outpost as leader, and forms the council of dogs
                  - the humans are released from the archive and are treated like pets by the dogs
                  - justice soul is doge's favorite, the other humans each get one of the other dogs
               */
               if (fearsome) {
                  // have no fear, the dogs are here
               }
            }
         } else {
            // light neutral: queen terrestria variant [alphys call]
            a([
               '<25>{#p/alphys}{#f/4}* H-hiya...',
               '<25>{#p/alphys}{#f/20}* Is anyone there?',
               "<25>{#p/alphys}{#f/11}* ... I hope it's not too much trouble...",
               '<25>{#p/alphys}{#f/8}* I just... w-wanted to let you know how things are going out here.'
            ]);
            b([
               '<25>{#p/alphys}{#f/20}* So... after you left, the king sort of... d-disappeared.',
               "<25>{#p/alphys}{#f/14}* When I broke the news, it... hurt the people's morale pretty badly.",
               '<25>{#p/alphys}{#f/10}* Technically, as royal scientist, I was meant to replace him, but...',
               "<25>{#p/alphys}{#f/4}* I didn't really feel like I'd be the best fit for the job.",
               '<26>{#p/alphys}{#f/5}* Well, I had a talk with some of the royal guards, and...',
               '<25>{#p/alphys}{#f/6}* We agreed Terrestria should be appointed as the queen instead.',
               '<25>{#p/alphys}{#f/19}* Her first action was a little controversial, though...',
               '<25>{#p/alphys}{#f/20}* Cutting the royal guard in half and loosening its policies.'
            ]);
            if (respect) {
               b([
                  "<25>{#p/alphys}{#f/31}* Undyne wasn't happy about it at first, but...",
                  '<25>{#p/alphys}{#f/20}* She came around to it in the end.',
                  '<25>{#p/alphys}{#f/27}* Apparently she thinks not all humans are... bad now?',
                  '<25>{#p/alphys}{#f/27}* ...',
                  "<25>{#p/undyne}{#f/17}* Are you kidding?\n* Of COURSE they're not all bad!!",
                  '<25>{#p/alphys}{#f/10}* U-Undyne!?',
                  '<25>{#p/undyne}{#f/1}* That last human proved their kind CAN fight with honor.',
                  '<25>{#p/undyne}{#f/1}* That they CAN show respect to their opponents in battle.',
                  "<25>{#p/undyne}{#f/16}* ... and it's a good thing, too, because...",
                  "<25>{#p/undyne}{#f/14}* I doubt the royal guard'll expand again any time soon.",
                  '<25>{#p/undyne}{#f/1}* Especially after the former queen returned, and...',
                  '<25>{#p/undyne}{#f/1}* ... gave the new one her full support.'
               ]);
            } else if (dateLevel === 2) {
               b([
                  "<25>{#p/alphys}{#f/31}* Undyne wasn't happy about it at first, but...",
                  '<25>{#p/alphys}{#f/20}* She came around to it in the end.',
                  '<25>{#p/alphys}{#f/27}* Apparently she thinks not all humans are... bad now?',
                  '<25>{#p/alphys}{#f/27}* ...',
                  "<25>{#p/undyne}{#f/17}* Are you kidding?\n* Of COURSE they're not all bad!!",
                  '<25>{#p/alphys}{#f/10}* U-Undyne!?',
                  '<25>{#p/undyne}{#f/14}* That last human proved their kind CAN in fact be... well, kind.',
                  '<25>{#p/undyne}{#f/1}* That they CAN show mercy to their opponents in battle.',
                  "<25>{#p/undyne}{#f/16}* ... and it's a good thing, too, because...",
                  "<25>{#p/undyne}{#f/14}* I doubt the royal guard'll expand again any time soon.",
                  '<25>{#p/undyne}{#f/1}* Especially after the former queen returned, and...',
                  '<25>{#p/undyne}{#f/1}* ... gave the new one her full support.'
               ]);
            } else {
               b([
                  "<25>{#p/alphys}{#f/31}* Undyne... wasn't happy about this at all.",
                  '<25>{#p/alphys}{#f/13}* She still blames you for what happened to the king, so...',
                  "<25>{#p/alphys}{#f/20}* It's... understandable why she'd be opposed to it.",
                  '<25>{#p/alphys}{#f/20}* ...',
                  "<25>{#p/undyne}{#f/16}* Yeah, it's a pretty stupid policy if you ask me.",
                  '<25>{#p/alphys}{#f/10}* U-Undyne!?',
                  "<25>{#p/undyne}{#f/17}* No matter HOW many nice humans come along, we CAN'T lower our guard!",
                  '<25>{#p/undyne}{#f/9}* ... but not many people would agree with me these days.',
                  "<25>{#p/undyne}{#f/16}* With the former queen's return, and her support for the new one...",
                  '<25>{#p/undyne}{#f/9}* I doubt the royal guard will ever be as strong as it once was.'
               ]);
            }
            b([
               '<25>{#p/alphys}{#f/5}* ...\n* About the former queen.',
               '<26>{#p/alphys}{#f/5}* By the time she returned, things were mostly back to normal...',
               '<25>{#p/alphys}{#f/21}* And then she decided to reveal the truth about the humans.',
               '<25>{#p/alphys}{#f/21}* Like... RIGHT after she found out herself.'
            ]);
            if (fearsome) {
               b([
                  "<25>{#p/alphys}{#f/20}* ... eheh...\n* The people didn't react well at first.",
                  '<25>{#p/alphys}{#f/13}* They were more scared than anything...',
                  '<25>{#p/alphys}{#f/26}* A fact not helped by a certain human beating everyone up.',
                  '<25>{#p/alphys}{#f/20}* Thankfully, over time, Terrestria was able to calm them down...',
                  '<25>{#p/alphys}{#f/20}* ... by reminding them nobody had died.',
                  "<25>{#p/alphys}{#f/18}* I'm glad it worked.\n* I would have caused a riot saying that.",
                  '<25>{#p/alphys}{#f/8}* But... yeah, people are mostly positive about humanity now.'
               ]);
            } else {
               b([
                  "<25>{#p/alphys}{#f/15}* ... thankfully, this DIDN'T cause a mass uprising...",
                  '<25>{#p/alphys}{#f/17}* Though, I guess being so well-known helped her out with that.',
                  '<25>{#p/alphys}{#f/8}* In fact, people are mostly positive about humanity now.'
               ]);
            }
            b([
               "<25>{#p/alphys}{#f/8}* So that's something.",
               '<26>{#p/undyne}{#f/16}* Heh, tell me about it...',
               "<25>{#p/undyne}{#f/10}* It's a weird reality we live in now.",
               '<25>{#p/undyne}{#f/1}* By the way, did you mention all the new schools being built?',
               "<25>{#p/alphys}{#f/10}* Uh... yeah!\n* I totally... didn't.",
               "<25>{#p/alphys}{#f/6}* Eheh...\n* The education system's doing well, too.",
               '<25>{#p/alphys}{#f/1}* Suffice it to say, tuition prices have never been lower!',
               "<25>{#p/alphys}{#f/8}* There's been so many new students learning all sorts of things.",
               '<18>{#p/papyrus}{#f/0}... HEY GUYS!\nI JUST GOT BACK FROM MATH CLASS!!',
               '<18>{#p/papyrus}{#f/4}WHO KNEW FOLDING SPACETIME COULD BE SO COMPLICATED...',
               '<25>{#p/alphys}{#f/10}* ... yep, Papyrus took a class on warp field theory.',
               '<18>{#p/papyrus}{#f/6}WHAT?? ARE YOU REFERRING TO ME IN THE THIRD PERSON??',
               '<25>{#p/alphys}{#f/17}* ... and a writing class, from the sounds of it.',
               "<25>{#p/undyne}{#f/12}* That's still a thing??",
               '<18>{#p/papyrus}{#f/4}... WAIT...',
               '<18>{#p/papyrus}{#f/7}WHO ARE YOU TALKING TO ON THE PHONE!?',
               "<25>{#p/undyne}{#f/1}* It's the human.",
               '<18>{#p/papyrus}{#f/0}OH!! OH!!\nLET ME TALK TO THEM!!',
               '<25>{#p/undyne}{#f/14}* Be my guest.\n* I gotta get back to teaching my class.',
               '<25>{#p/undyne}{#f/17}* They\'ve been struggling with the "magical self- defense" excersize.',
               '<18>{#p/papyrus}{#f/0}... HELLO HUMAN!!\nHOW HAVE -YOU- BEEN LATELY!?',
               '<18>{#p/papyrus}{#f/0}...',
               "<18>{#p/papyrus}{#f/5}I GUESS YOU CAN'T REALLY ANSWER THAT.",
               "<18>{#p/papyrus}{#f/6}BUT I HOPE YOU'RE DOING WELL!!"
            ]);
            if (dateLevel === 0) {
               b(["<18>{#p/papyrus}{#f/0}I'VE BEEN THINKING ABOUT YOU SINCE OUR EPIC SHOWDOWN."]);
            } else if (SAVE.data.b.flirt_papyrus) {
               b(["<18>{#p/papyrus}{#f/0}I'VE BEEN THINKING ABOUT YOU SINCE THAT DATE WE HAD."]);
            } else {
               b(["<18>{#p/papyrus}{#f/0}I'VE BEEN THINKING ABOUT YOU SINCE WE HUNG OUT."]);
            }
            b([
               '<18>{#p/papyrus}{#f/5}I TOLD EVERYONE IN MY CLASS ABOUT YOU, AND...',
               "<18>{#p/papyrus}{#f/5}... ALL OF THEM WISHED YOU'D COME BACK SOMEDAY."
            ]);
            if (SAVE.data.b.f_state_kidd_betray) {
               b([
                  '<18>{#p/papyrus}{#f/4}... ALMOST ALL OF THEM, ANYWAY.',
                  '<18>{#p/papyrus}{#f/5}ONE CLASSMATE WHO SITS NEXT TO ME SAYS THAT YOU...',
                  '<18>{#p/papyrus}{#f/5}... UH, THEY SAY YOU BETRAYED THEM, SOMEHOW.',
                  '<18>{#p/papyrus}{#f/6}BUT LISTEN!!\nIF YOU EVER -DO- COME BACK...',
                  "<18>{#p/papyrus}{#f/0}I'LL HELP THE TWO OF YOU GET BACK ON GOOD TERMS!!"
               ]);
            } else {
               b([
                  '<18>{#p/papyrus}{#f/0}ONE OF THEM EVEN WISHES THEY COULD GO WITH YOU!!',
                  "<18>{#p/papyrus}{#f/5}IT'S A CLASSMATE WHO SITS NEXT TO ME, ACTUALLY.",
                  '<18>{#p/papyrus}{#f/6}THEY SAY THEY OWE YOU THEIR VERY LIFE!!',
                  '<18>{#p/papyrus}{#f/4}... A HERO, EH?\nIF YOU EVER -DO- COME BACK...',
                  "<18>{#p/papyrus}{#f/0}I'LL BE SURE TO INVITE THEM TO YOUR RETURN PARTY."
               ]);
            }
            b([
               '<18>{#p/papyrus}{#f/9}YOU HAVE MY PERSONAL PAPYRUS PROMISE! (TM)',
               "<25>{#p/alphys}{#f/27}* ... hey, isn't that one of Mettaton's lines?",
               '<18>{#p/papyrus}{#f/4}IN THE PAST, MAYBE... BUT NOT NOW.',
               "<18>{#p/papyrus}{#f/5}APPARENTLY, HE'S DITCHING HIS OLD FORMAT ENTIRELY...",
               '<18>{#p/papyrus}{#f/4}ALL TO START THE "MTT CINEMATIC UNIVERSE."',
               '<25>{#p/alphys}{#f/17}* Oh yeah, I heard a rumor about that.'
            ]);
            if (moniker) {
               b([
                  '<25>{#p/alphys}{#f/21}* They say he\'s doubling down on the whole "villain" thing.',
                  "<18>{#p/papyrus}{#f/4}... LIKE THAT'S NOT GOING TO BACKFIRE.",
                  '<25>{#p/alphys}{#f/22}* I KNOW, RIGHT!?!?'
               ]);
               if (fearsome) {
                  b([
                     "<25>{#p/alphys}{#f/10}* The people aren't going to want a reminder of what the human was.",
                     '<25>{#p/alphys}{#f/26}* ... no offense.'
                  ]);
               } else {
                  b([
                     "<25>{#p/alphys}{#f/10}* People don't even dislike humans anymore, so...",
                     "<25>{#p/alphys}{#f/3}* I don't really see the point in it."
                  ]);
               }
            } else {
               b([
                  '<25>{#p/alphys}{#f/21}* They say he\'s doubling down on the whole "killer robot" thing.',
                  "<18>{#p/papyrus}{#f/4}LIKE THAT'S NOT GOING TO BACKFIRE.",
                  '<25>{#p/alphys}{#f/22}* I KNOW, RIGHT!?!?'
               ]);
               if (fearsome) {
                  b([
                     "<25>{#p/alphys}{#f/10}* The people aren't going to want a reminder of the human's violence.",
                     '<25>{#p/alphys}{#f/26}* ... no offense.'
                  ]);
               } else {
                  b([
                     '<25>{#p/alphys}{#f/10}* People are just trying to be positive nowadays, so...',
                     "<25>{#p/alphys}{#f/3}* I don't really see the point in it."
                  ]);
               }
            }
            b([
               "<18>{#p/papyrus}{#f/5}YEAH... EVERYONE'S JUST TRYING TO HAVE HOPE NOW.",
               '<18>{#p/papyrus}{#f/6}... INCLUDING MY BROTHER!!',
               '<18>{#p/papyrus}{#f/0}AFTER THE ROYAL GUARD WAS REDUCED IN SIZE...',
               '<18>{#p/papyrus}{#f/0}HE LEFT TO START A BUSINESS WITH BRATTY AND CATTY.',
               '<18>{#p/papyrus}{#f/4}A SECOND-HAND TRASH BUSINESS.',
               "<18>{#p/papyrus}{#f/5}I CAN'T SAY I APPROVE, BUT AT LEAST HE'S HAPPY.",
               "<25>{#p/sans}{#f/0}* of course i'm happy.\n* selling trash is basically my calling.",
               '<18>{#p/papyrus}{#f/7}SANS!! STOP COMING OUT OF NOWHERE LIKE THAT!!',
               '<25>{#p/sans}{#f/2}* heh.\n* so how are ya, bucko?',
               "<25>{#p/sans}{#f/0}* i hope my efforts to warn and protect you weren't in vain.",
               '<18>{#p/papyrus}{#f/9}I KNEW IT!!\nYOU WERE A MOLE- RAT ALL ALONG!',
               '<25>{#p/sans}{#f/0}* true.\n* i did infiltrate the royal guard.',
               "<25>{#p/sans}{#f/3}* but i'd like to think i made a positive influence.",
               '<25>{#p/sans}{#f/2}* after all, it was MY idea to put terrestria in charge.',
               '<18>{#p/papyrus}{#f/1}WHAT!?\nYOUR IDEA!?',
               '<18>{#p/papyrus}{#f/5}WOWIE...',
               "<25>{#p/sans}{#f/3}* ... but that's all in the past now.",
               "<25>{#p/sans}{#f/0}* the way i see it, i'm just glad things didn't end up worse.",
               "<25>{#p/alphys}{#f/17}* I'm a little surprised you didn't come back to work at the lab.",
               "<25>{#p/alphys}{#f/5}* You know, like you said you'd do when you were done with the guard.",
               '<25>{#p/sans}{#f/0}* well, to be honest, i needed a break after all that serious stuff.',
               '<25>{#p/sans}{#f/2}* but hey, at least papyrus is doing a bang-up job, right?',
               '<25>{#p/alphys}{#f/6}* Eheh.\n* Yeah, he is.',
               '<18>{#p/papyrus}{#f/0}I TRY MY BEST!!',
               "<25>{#p/alphys}{#f/20}* ... though, there is this one thing that's been on my mind.",
               '<25>{#p/sans}{#f/0}* what is it?',
               '<25>{#p/alphys}{#f/27}* Well, according to the telescopes...',
               '<25>{#p/alphys}{#f/27}* Something strange happened to the stars a while back.',
               '<18>{#p/papyrus}{#f/6}STRANGE!?\nHOW CAN A STAR BE STRANGE!?',
               "<25>{#p/alphys}{#f/15}* Well, okay, it wasn't actually the STAR that was strange.",
               '<26>{#p/alphys}{#f/23}* It was the way it moved.',
               "<25>{#p/alphys}{#f/20}* Or... didn't move?",
               '<25>{#p/alphys}{#f/20}* It was more like... a jump, of sorts.\n* A sudden shift.',
               '<25>{#p/alphys}{#f/26}* As if time outside the forcefield just... lept ahead a few years.',
               "<18>{#p/papyrus}{#f/7}YEARS!?\nBUT THAT CAN'T BE RIGHT!!",
               '<25>{#p/alphys}{#f/20}* Well I checked, and double- checked, and triple-checked...',
               '<18>{#p/papyrus}{#f/6}BUT DID YOU QUADRUPLE-CHECK!?',
               '<25>{#p/alphys}{#f/21}* Of course I did.',
               "<25>{#p/alphys}{#f/5}* But it didn't change the result.",
               '<25>{#p/sans}{#f/0}* huh.\n* how strange.',
               "<25>{#p/sans}{#f/3}* whoops.\n* the recording's almost at its time limit now.",
               '<25>{#p/alphys}{#f/17}* ... oh.\n* I guess we should wrap this up, then.',
               "<25>{#p/alphys}{#f/6}* Well, I... I hope you're doing alright out there.",
               '<25>{#p/alphys}{#f/5}* If we managed to find happiness here, then... so can you.',
               '<18>{#p/papyrus}{#f/0}WELL SAID, ALPHYS.\nWELL SAID.',
               '<25>{#p/sans}{#f/2}* heh.\n* take care, okay?',
               '<18>{#p/papyrus}{#f/9}YEAH!!\nUNTIL NEXT TIME!!',
               '<25>{#p/alphys}{#f/8}* ... until next time.'
            ]);
         }
         b(['<32>{#s/equip}{#p/event}* Click...']);
         return { a: atext, b: btext };
      },
      // TODO: lv20 dark neutral variant [sans call]
      neutral1() {
         return ['<32>{#s/phone}{#p/event}* Ring, ring...', '<32>{#s/equip}{#p/event}* Click...'];
      },
      // TODO: aborted chaotic variant [asgore call]
      neutral2() {
         return ['<32>{#s/phone}{#p/event}* Ring, ring...', '<32>{#s/equip}{#p/event}* Click...'];
      },
      lastblook1: [
         () => [
            '<32>{#p/napstablook}* oh...\n* hey frisk......',
            ...(SAVE.data.b.ufokinwotm8
               ? [
                  '<32>* ...',
                  "<32>* ... huh?\n* what's with that look?",
                  '<32>* did i... get in your way?',
                  '<32>* ...',
                  "<32>* oh......\n* i did, didn't i.........",
                  '<32>* sorry...',
                  '<32>* force of habit......',
                  "<32>* i'll... just be out of your way now......",
                  '<32>* please......\n* forgive me............'
               ]
               : [
                  "<32>* they're still out there building the front door, so...",
                  '<32>* not much point in trying to go there, i guess',
                  ...(SAVE.data.b.c_state_secret4 && !SAVE.data.b.c_state_secret4_used
                     ? [
                        '<32>* ...',
                        '<32>{#p/human}* (You repeat the secret told to you by Napstablook in Archive Six.)',
                        '<32>{#p/napstablook}* a magic trick...?',
                        '<32>* wait...',
                        '<33>* i think i know what you mean...\n* let me try...'
                     ]
                     : [])
               ])
         ],
         () => [
            ...(SAVE.data.b.c_state_secret4_used
               ? ["<32>{#p/napstablook}* heh...\n* i really appreciate everything you've done, frisk."]
               : ["<32>{#p/napstablook}* hey...\n* i really appreciate everything you've done, frisk."]),
            '<32>* setting us free and all...',
            '<32>* ...',
            "<32>* the truth is, my cousins and i started to think we'd never escape.",
            "<32>* it'd been so long since the last human arrived, and...",
            '<32>* considering what we recently found out about the humans...',
            '<32>* about how they all left the home galaxy...',
            "<32>* it's a miracle you even came to the outpost at all."
         ],
         () =>
            SAVE.data.b.a_state_hapstablook
               ? [
                  '<32>{#p/napstablook}* oh yeah, about my cousins...',
                  "<32>* after the whole mettaton thing, it's been going pretty good.",
                  "<32>* we've been talking it over, and...",
                  "<32>* ... we've decided to re-open the snail farm here on eurybia.",
                  "<32>* mettaton's doing the advertising, while i and the others look after the snails.",
                  '<32>* we even found a place we could stay once we get settled in...',
                  '<32>* a very kind house told us we could live there.',
                  "<32>* apparently, it's the same one undyne used to live in..."
               ]
               : [
                  '<32>{#p/napstablook}* oh right... my cousins.',
                  "<32>* i don't really know if i should be telling you this, but...",
                  '<32>* we sort of figured out that mettaton might be our long-lost cousin.',
                  '<32>* the others and i tried to ask him about it, but...',
                  "<32>* ... it didn't really go the way we'd hoped.",
                  '<32>* then, everyone was blaming each other for messing it up...',
                  "<32>* i... haven't felt like talking with them since.",
                  '<32>* yeah... this was a bad topic',
                  '<32>* sorry...'
               ],
         () => [
            ...(SAVE.data.b.a_state_hapstablook
               ? ['<32>{#p/napstablook}* ...', '<32>* speaking of families...']
               : ['<32>{#p/napstablook}* ...', "<32>* hey...\n* even if my family's not doing to well..."]),
            '<32>* yours is only just getting started.',
            ...(SAVE.data.b.f_state_kidd_betray
               ? ['<32>* you might not have any new siblings, but...']
               : SAVE.data.b.svr
                  ? ['<32>* even with those new siblings of yours...']
                  : ['<32>* even with that new sibling of yours...']),
            "<32>* i get the feeling asgore's going to take really good care of you.",
            '<32>* how do i know?',
            '<32>* well, recently, i found out he was the hairy guy who came to our farm all the time.',
            "<32>* he'd always take such good care of the snails he purchased...",
            '<32>* even healing them if they ever got hurt before dying of natural causes.',
            "<32>* if he cared that much for little space creatures, he'll care even more for you."
         ],
         () => [
            '<32>{#p/napstablook}* ... you know...\n* before the snail farm, and...',
            '<33>* before the outpost...',
            '<32>* my life on the old homeworld was a quiet one.',
            '<32>* that old homeworld...',
            '<32>* it really was a special place.',
            '<32>* the way the sky set itself on fire every day...',
            '<32>* how everyone who lived there was so at peace before the war...',
            "<32>* back then, i didn't think anything of it.",
            '<32>* now... after nearly two hundred years of captivity......',
            "<32>* i realized i'd been taking it all for granted."
         ],
         () => [
            '<32>{#p/napstablook}* well, anyway.\n* the old homeworld was great and all...',
            "<32>* but the new one's got a lot going for it, too.",
            '<32>* like the wildlife.',
            '<32>* when i traveled the surface earlier, i ran into some of it...',
            "<32>* and that's when i saw something interesting happen",
            '<32>* the creatures... starting using magic.',
            "<32>* when i mentioned this to alphys, she said the planet didn't have any magic...",
            '<32>* not according to the scans they took when we first arrived.',
            '<32>* has our arrival to this world...',
            "<32>* ... given it something it didn't have before?"
         ],
         () => [
            '<32>{#p/napstablook}* ... heh.',
            "<32>* i've been rambling a lot, huh?",
            '<32>* i appreciate you listening to me, though',
            "<32>* it's really nice of you to do that for me, frisk.",
            '<32>* just wanted you to know that.'
         ],
         () => [
            '<32>{#p/napstablook}* huh?\n* you still wanted to talk?',
            '<32>* ...',
            '<32>* oh......',
            '<32>* i guess i ran out of conversation topics',
            "<32>* i doubt i'd have anything else of interest to say, so...",
            '<32>* feel free to go do something else, now'
         ],
         () => [
            '<32>{#p/napstablook}* ... frisk, uh...',
            "<32>* i'm not really sure what to talk about anymore",
            '<32>* maybe... if you come back later today...',
            "<33>* i'll think of something else..."
         ],
         () => [
            '<32>{#p/napstablook}* ... oh.........',
            "<32>* you're.........\n* still here.........",
            '<32>* even though i have nothing else to say.........',
            '<32>* well... i guess, if you just wanted my company... then...',
            '<32>* feel free to stick around a while longer'
         ],
         () => [
            '<32>{#p/napstablook}* ... hmm...',
            '<32>* actually...',
            '<32>* ... would you like me to tell you a joke?',
            "<32>* i don't have much of a sense of humor, but i can try..."
         ],
         () => [
            '<32>{#p/napstablook}* okay...\n* here goes...',
            '<32>* if a ghost gets tired in the middle of the road, what does it do?',
            '<32>* ...',
            '<32>* answer... it {@fill:#ff0}naps to block{@fill:#fff} you.',
            '<32>* get it?\n* napstablook?\n* naps to block?',
            '<32>* yeah...\n* that was kinda bad'
         ],
         () => [
            '<32>{#p/napstablook}* ... you wanted me to tell you another joke?',
            '<32>* hmm... let me think about it...'
         ],
         () => [
            "<32>{#p/napstablook}* okay, let's see...",
            '<32>* if a ghost changed vessels so they could have a child, what would you call it?',
            '<32>* ...',
            '<32>* answer... a {@fill:#ff0}trans-parent.{@fill:#fff}.',
            '<32>* ... heh.'
         ],
         () => ['<32>{#p/napstablook}* ... you wanted me to tell you a third joke?', '<32>* well... if you insist...'],
         () => [
            "<32>{#p/napstablook}* okay.\n* i've got it.",
            '<32>* if a restaurant hires a ghost to taste test their food, what does that make the ghost?',
            '<32>* ...',
            '<32>* answer... a {@fill:#ff0}food-in-spectre.{@fill:#fff}.'
         ],
         () => [
            '<32>{#p/napstablook}* alright, alright.\n* maybe i got a little carried away with that one.',
            '<33>* but i hope you liked it anyway.'
         ],
         () => [
            '<32>{#p/napstablook}* ...',
            '<32>* oh...',
            "<32>* ... i guess i'm at a loss for what to say.",
            "<32>* you've been such a good listener, i'd feel bad if i ran out of ideas.",
            "<32>* c'mon, blooky, think...",
            '<32>* ... what can you talk about...'
         ],
         () => [
            '<32>{#p/napstablook}* wait, hold on',
            '<32>* do you know anything about ghost food?',
            '<32>* that last joke kind of got me thinking about it.',
            "<32>* you must be confused... it's not really explained anywhere.",
            '<32>* if you like, i can tell you about it...'
         ],
         () => [
            '<32>{#p/napstablook}* ... so, ghost food...',
            "<32>* it's exactly like normal monster food, except...",
            '<32>* when preparing it...',
            "<32>* there's a special kind of spell you have to use to make it edible for ghosts.",
            "<32>* that's right... any monster food can become ghost food."
         ],
         () => [
            '<32>{#p/napstablook}* as it turns out, though...',
            '<32>* certain kinds of food are easier to convert than others.',
            '<32>* like... standard fruit.\n* or milkshakes.',
            ...(SAVE.data.b.item_blookpie
               ? ['<32>* but something like that exoberry pie you bought from me...']
               : ['<32>* but something like that exoberry pie i had in my shop...']),
            '<32>* that... would take a lot of magical power to make.',
            '<32>* the more complicated the food, the more difficult it is to convert into ghost food.'
         ],
         () => [
            ...(SAVE.data.b.a_state_hapstablook
               ? ['<32>{#p/napstablook}* this one time, my... er, mettaton made me a chocolate cake.']
               : ['<32>{#p/napstablook}* this one time, my cousin made me a chocolate cake.']),
            '<32>* chocolate filling, chocolate icing... chocolate everything.',
            "<32>* if i didn't know any better, i'd think it was actual human food.",
            ...(SAVE.data.b.a_state_hapstablook
               ? [
                  '<32>* but somehow, he managed to convert all of that into a ghost food...',
                  '<32>* not for a special occasion, but just because he wanted to see me smile.'
               ]
               : [
                  '<32>* but somehow, they managed to convert all of that into a ghost food...',
                  '<32>* not for a special occasion, but just because they wanted to see me smile.'
               ]),
            '<32>* well... i did.\n* and we ate the cake together.',
            '<32>* and i was happy.'
         ],
         () => [
            '<32>{#p/napstablook}* ...',
            "<32>* heh...\n* i think i'm gonna pretend to sleep for a while...",
            '<32>* it helps me unwind after a long day like this one.',
            "<32>* ... wait, it's morning...",
            '<32>* i guess that would make it a long night, then.',
            "<32>* days and nights...\n* that's going to take some getting used to.",
            '<32>* ...',
            '<32>* well... thanks for talking to me, frisk',
            '<32>* feel free to lay down next to me... if you like......',
            '<32>* ...',
            '<32>* Zzz... Zzz...'
         ],
         () => [
            '<32>{#p/napstablook}* Zzz... Zzz...',
            '<32>* Zzz... Zzz...',
            "<32>{#p/basic}* This ghost keeps saying 'z' out loud repeatedly, pretending to sleep.",
            choicer.create('* (Lay down next to it?)', 'Yes', 'No')
         ],
         () => ['<32>{#p/basic}* The ghost is still here.', choicer.create('* (Lay down next to it?)', 'Yes', 'No')]
      ],
      lastblook2: ['<32>{#p/napstablook}* oooooooooooo......', '<32>* this is really nice......'],
      lastblook3: [
         '<32>{#p/human}* (...)',
         '<32>* (You feel... something.)',
         '<32>{#p/napstablook}* oh, sorry... i should probably explain what this is...',
         '<32>* ...\n* so, uh...',
         '<32>* i took your body...\n* as a vessel...',
         '<32>* and now...... we inhabit the same space......',
         "<32>* i don't know why, but the last human who tried this... really liked it...",
         '<32>* so...',
         '<32>* maybe you will too...'
      ],
      lastblook4: [
         "<32>{#p/napstablook}* well, we can stay like this as long as you don't try to move.",
         '<32>* so...\n* only try to move around when you want it to end, i guess.'
      ],
      lastblook5: [
         '<32>{#p/napstablook}* well...\n* i hope you liked that...',
         '<32>* or at least found it kind of interesting...',
         '<32>* or something...'
      ],
      view: [choicer.create('* (Are you ready to go outside?)', 'Yes', 'No')],
      computer1: () =>
         SAVE.data.b.ufokinwotm8
            ? ["<32>{#p/human}* (But you didn't feel like wasting your time here.)"]
            : ["<32>{#p/basic}* The computer's offline, but there's an empty slot for a computer chip."],
      computer2: [choicer.create('* (Insert the Computer Chip?)', 'Yes', 'No')],
      computer3: ['<32>{#p/human}* (You decide not to insert.)'],
      computer4: [
         '<32>{#p/basic}* Ah!\n* Thank you!\n* Thank you so much!',
         '<32>* You really took care of me!\n* You have found a computer very far away indeed!',
         '<32>* ...',
         '<32>* I have established a link between this computer and my body on the outpost.',
         '<32>* ...',
         '<32>* I never could have imagined how it would feel to exist in two places at once!',
         '<32>* It is... incredible...',
         '<32>* I shall not forget this deed, fellow traveler!'
      ],
      computer5: ['<32>{#p/basic}* Thank you, fellow traveler.\n* I owe you my future.'],
      end1: [
         '<25>{*}{#p/asgore}{#f/6}{#v/1}* This is emergency program one.{^20}{%}',
         '<25>{*}{#p/asgore}{#f/6}{#v/1}* Initiating automated self-destruct protocol.{^20}{%}'
      ],
      end2: [
         '<25>{*}{#p/asgore}{#f/6}{#v/1}* This is emergency program one.{^20}{%}',
         '<25>{*}{#p/asgore}{#f/6}{#v/1}* The self-destruct protocol has been terminated remotely.{^20}{%}',
         '<25>{*}{#p/asgore}{#f/6}{#v/1}* Systems powering down.{^20}{%}'
      ],
      save1: '<32>{#p/human}{@fill:#f00}* ($(x) left.)',
      save2: '<32>{#p/human}{@fill:#f00}* (Determination.)',
      save3: '<32>{#p/human}{@fill:#3f00ff}* ($(x) left.)',
      save4: '<32>{#p/human}{@fill:#3f00ff}* (Determination.)',
      frontstop: pager.create(
         0,
         [
            "<32>{#p/basic}* Sorry, kiddo.\n* We're still out here building the front yard.",
            '<32>* And the front door.',
            "<32>* If you're looking for Asgore, he's out here with us.",
            "<32>* We'll be done in a few hours, so just sit tight for now."
         ],
         ['<32>{#p/basic}* Just a few more hours, kiddo.', '<32>* Then you can come out.'],
         ['<32>{#p/basic}* A few more hours.']
      ),
      charatrigger: {
         _frontier1: pager.create(
            0,
            [
               '<32>{#p/basic}* So this is your room, huh?',
               '<32>* Kind of strange...',
               "<32>* ... but who am I kidding, this is you we're talking about.",
               "<32>* You'd sleep in a doggy bed if you had the choice.",
               "<32>* And you'd eat the dog food.",
               "<32>* And you'd like it if somebody tried to pet you whilst eating said dog food."
            ],
            [
               "<32>{#p/basic}* I'd offer you a treat, but...",
               "<32>* Even with my new ability to appear visually, I'm still just a ghost.",
               "<32>* You'll have to settle for ghost dog treats, I'm afraid."
            ],
            [
               '<32>{#p/basic}* Oh, right.\n* My new ability.',
               "<32>* I tried showing myself to Asriel like before, but he couldn't see me...",
               '<32>* So it looks like it only works for you right now.',
               '<32>* Still.\n* Better than nothing.',
               '<32>* At least you can actually walk up to and talk to me now.'
            ],
            ['<32>{#p/basic}* Like that, for example.'],
            ['<32>{#p/basic}* Or that.'],
            ['<32>{#p/basic}* Or even that!'],
            ['<32>{#p/basic}* ...', '<32>{#p/basic}* You can stop now.'],
            ["<32>{#p/basic}* There's more to your room than me, isn't there?"],
            ['<32>{#p/basic}* ...', '<32>{#p/basic}* Maybe not.'],
            ["<32>{#p/basic}* Maybe I'm all you've got."],
            ['<32>{#p/basic}* In which case...', "<32>{#p/basic}* We'll be here for a long time."],
            ['<32>{#p/basic}* A very long time.'],
            ['<32>{#p/basic}* A very, very long time.'],
            ['<32>{#p/basic}* A very, very long time indeed.'],
            ["<32>{#p/basic}* Don't you have anything better to do?"],
            []
         ),
         _frontier2: pager.create(
            0,
            [
               '<32>{#p/basic}* Ah, the humble hallway.',
               '<32>* For Asriel and I, it was the starting point of countless adventures...',
               '<33>* ... running dauntlessly across the various rooms of the house.',
               '<32>* I know, right?\n* So very adventurous.',
               '<32>* Sadly, we had to stop after the mirror got smashed in for the seven hundredth time.',
               "<32>* You wouldn't believe the excuses I'd come up with...",
               '<33>* Like when I blamed a particle collider for shooting a stray atom from Earth to the outpost.',
               '<33>* And somehow only hitting the glass because it "phased" through the wall.',
               "<32>* Yeah... that one might've been a stretch."
            ],
            [
               '<32>{#p/basic}* Nowadays, though, hallways are just hallways.',
               '<32>* And excuses are just excuses.',
               '<32>* Is there a valuable life lesson in there somewhere?\n* Probably.',
               "<32>* I will say, there's a kind of symbolism to a ghost in a hallway...",
               '<32>* With the whole "between one place and another" thing going on.',
               '<32>* Actually, that probably only applies to human ghosts.',
               '<32>* Monster ghosts are just born like that naturally...',
               "<32>* So, if anything, they'd be in the room at the beginning of the hallway...",
               '<32>* ... rather than standing in the middle of it.'
            ],
            [
               '<32>{#p/basic}* Sorry.\n* Went on a tangent there.',
               '<32>* But what did you expect me to go on when you spoke to me in a boring hallway?',
               '<33>* Boring hallway, boring tangent.\n* That makes sense, right?'
            ],
            ["<32>{#p/basic}* Or maybe it doesn't.\n* What do I know."],
            ["<32>{#p/basic}* Apart from the fact that I've run out of things to say."],
            ['<32>{#p/basic}* That, I know for sure.'],
            ['<32>{#p/basic}* But what can you do?', '<32>{#p/basic}* ... wait, I know!\n* We could go to a new room!'],
            []
         ),
         _frontier3: pager.create(
            0,
            [
               "<32>{#p/basic}* Ooh... Asgore's room.",
               '<32>* The big guy sure loves his diaries, huh?',
               "<32>* Even though he hasn't written anything into that one yet, I'm sure he'll do so soon.",
               '<32>* Reading them has always been a guilty pleasure of mine...'
            ],
            [
               "<32>{#p/basic}* What?\n* Everyone's got some kind of guilty pleasure, don't they?",
               '<32>* I wonder what yours would be...',
               "<32>* Maybe I'll find out later."
            ],
            [
               "<32>{#p/basic}* For now, though, I'll just be hanging around.",
               '<32>* Watching, waiting...',
               "<32>* ... ready to catch you the moment you do something you don't want me to see!"
            ],
            ["<32>{#p/basic}* Okay, maybe I wouldn't actually go that far."],
            ["<33>{#p/basic}* Not while you're awake, anyway."],
            []
         ),
         _frontier4: pager.create(
            0,
            [
               "<32>{#p/basic}* I took a peek outside, and they're STILL working on construction.",
               '<32>* The whole front of the house is STILL a big mess.',
               "<32>* And Asgore's... STILL tending to the ground...",
               '<32>* ... while the former CORE workers take their sweet, sweet time building the porch.',
               "<32>* I wonder what it'll look like when it's done...",
               "<32>* Hopefully, with Asgore in charge, it'll look better than what we've had before."
            ],
            [
               "<32>{#p/basic}* Actually, Asgore's only in charge of the design.",
               '<32>* Since construction started yesterday, Doge has been the one giving the orders.',
               '<32>* I snuck outside then, too.',
               "<32>* She's strict, but she seems to know what she's doing.",
               '<32>* Which is great, because as much as I love Asgore for who he is...',
               '<32>* He most certainly is NOT your ideal foreman.'
            ],
            [
               '<33>{#p/basic}* Speaking of things being built, they finished the balcony earlier this morning.',
               '<32>* Monster Kid and Asriel are both outside...\n* ... sightseeing.',
               "<32>* They sure do that a lot together... they're probably waiting for you to join them.",
               "<32>* Once you're done taking in YOUR surroundings, you could go see them.",
               '<33>* Or you could just go back to your room.\n* Whatever floats your hoverboat.'
            ],
            [
               '<32>{#p/basic}* Oh yeah, about boats...',
               "<32>* I guess those aren't really needed around here.",
               "<32>* But... Frisk!\n* There are places on this world you can't be without one.",
               '<32>* Especially the bog basins.\n* All that murky water...',
               '<32>* Just keep it in mind.'
            ],
            [
               "<32>{#p/basic}* And no, you can't just get by swimming in those kinds of places.",
               '<33>* Only some of them.\n* And only at a good time of day.'
            ],
            [
               '<32>{#p/basic}* Mind you, do monsters even have a sense of the time of day?',
               '<32>* Most WERE born in space...'
            ],
            ["<32>{#p/basic}* ... maybe that's a question for another time of day."],
            []
         ),
         _frontier5: pager.create(
            0,
            [
               '<32>{#p/basic}* Three little chairs at the dining table...',
               '<32>* One for you, one for Asriel, and one for Monster Kid.',
               "<32>* That's fine, really.\n* Asgore wouldn't know I'm here.",
               '<32>* Still...',
               '<32>* It does feel strange not to have a place there.'
            ],
            [
               "<32>{#p/basic}* Asriel and I loved to swap the chairs around when Mom wasn't looking.",
               "<32>* Even Asgore would get in on it sometimes.\n* She... wasn't impressed.",
               '<32>* But it was all in good fun.',
               "<32>* Heck, he used to check under Asriel's chair for space creatures when he sat down.",
               "<32>* I'll never forget that time Toriel sat down on the chair, which we swapped beforehand...",
               '<33>* Asgore gave her the exact same treatment, and it was GLORIOUS.',
               '<32>* All of us were laughing... except for Toriel, who sat there in disbelief.',
               '<32>* Well.\n* She came around to it later.'
            ],
            () => [
               "<32>{#p/basic}* But, yeah... she wasn't much for the chicanery we got up to.",
               SAVE.data.b.c_state_secret1_used && SAVE.data.b.c_state_secret5_used
                  ? "<32>* And even if she won't be here all the time..."
                  : "<32>* And although she probably won't visit here much at all...",
               "<32>* It's a good thing Asriel's got someone like you to calm him down.",
               '<32>* When he gets excited, he gets REALLY excited.',
               '<32>* ...',
               '<32>* ... or, used to, anyway.'
            ],
            () => [
               "<32>{#p/basic}* I guess it's unfair to think of him as the same person he once was.",
               SAVE.flag.n.killed_sans
                  ? '<32>* With all that stuff he mentioned about trying to corrupt you...'
                  : '<32>* With all that stuff he mentioned about hurting you...',
               "<32>* He's probably a very different person by now.",
               '<32>* Not unlike myself.',
               '<32>* I just hope he can make the best of what he has, now.',
               "<32>* And that you'll be there for him when he needs you."
            ],
            [
               "<32>{#p/basic}* But I guess I'm starting to repeat myself.",
               "<32>* We've got a home, we've got sunlight... so there's no reason to complain!",
               '<32>* ... or something like that.'
            ],
            []
         ),
         _frontier6: pager.create(
            0,
            [
               '<32>{#p/basic}* Of course they put a microwave in here.',
               '<32>* Of course they did.',
               "<32>* No doubt that'll be Asriel's primary source of food.",
               '<32>* Yeah, he\'s what you\'d call a "microwave master."'
            ],
            [
               "<32>{#p/basic}* I mean, it's bad enough that so many of our ingredients are replicated these days...",
               '<32>* Formed with matter-energy conversion nonsense, rather than legitimate cooking.',
               '<32>* But at least that can still produce something palletable.',
               '<32>* Using the microwave is just...',
               "<32>* It's wrong.",
               "<32>* It's so very wrong."
            ],
            [
               "<33>{#p/basic}* I mean, that's just my opinion.",
               '<32>* You can feel free to disagree, and knowing you, you probably do...',
               '<32>* But some opinions...',
               "<32>* Let's just say some opinions are more correct than others."
            ],
            [
               '<32>{#p/basic}* All we can hope for is that Eurybia has a better selection of fresh ingredients.',
               '<32>* Considering Alphys was the one to seek out planets in the first place...',
               "<32>* You can't blame me for being at least a little wary."
            ],
            [
               "<33>{#p/basic}* If Asriel's a microwave master, Alphys would be a microwave overlord.",
               "<32>* That's all I'm saying."
            ],
            ['<32>{#p/basic}* No, really.', "<32>* Won't say anything more."],
            ['<32>{#p/basic}* ...', '<32>{#p/basic}* Not in the kitchen, anyway.'],
            []
         ),
         _frontier7: pager.create(
            0,
            [
               "<32>{#p/basic}* The balcony's just outside...",
               '<32>* I wonder if the birds are saying anything interesting.',
               '<33>* Like "what a nice house!"\n* Or "the weather\'s great today."',
               "<32>* Maybe they don't like the house OR the weather.\n* That'd be... kind of sad.",
               "<32>* Maybe they're not even birds.\n* Who knows what kinds of sounds birds make here.",
               '<32>* Who knows if birds even exist here at all.',
               "<33>* For all we know, what we're hearing are the cries of the damned buried deep underground."
            ],
            [
               '<32>{#p/basic}* After the monsters have lived here long enough, the planet might gain some form of magic.',
               '<32>* If that happens, would the animals be affected, too?',
               '<32>* Would they become conscious?\n* Understand us?',
               '<32>* Would we understand them?',
               "<33>* If the sounds we're hearing really ARE cries of the damned, I'm not sure I'd want to know."
            ],
            [
               '<32>{#p/basic}* But yeah, planetary magic.',
               "<32>* I think that's what happened to Krios, when monsters first gained THEIR magic.",
               '<32>* Either that, or the planet already had magic, and gave it to them.',
               "<32>* We'd have to ask Terrestria about that sort of thing.",
               "<32>* She'd know."
            ],
            [
               "<32>{#p/basic}* Hey.\n* Don't be nervous about going out there, Frisk.",
               "<32>* I'm sure those two would be happy to see you there.",
               '<32>* And if my analysis of the position is right...',
               '<32>* The planet itself will, too.'
            ],
            ["<32>{#p/basic}* Don't quote me on that, though.", "<32>* I'm not much of a chess player."],
            [
               "<32>{#p/basic}* The smartest move I've ever played in a board game was a double-jump in checkers.",
               '<32>* It was downhill from there.'
            ],
            [
               "<32>{#p/basic}* And if we weren't buried in a jungle, it might be downhill from here, too.",
               '<32>* Not that I blame Asgore for choosing such a low-risk location.',
               "<32>* He's got two adopted children to think about now...",
               '<32>* Not to mention his own son.'
            ],
            ['<32>{#p/basic}* Mountainside living might be cool, but the jungle has its own appeal, too.'],
            []
         ),
         _frontier9: pager.create(
            0,
            [
               '<32>{#p/basic}* Righty-o.\n* The bathroom.',
               '<32>* The bathroom, the bathroom, the bathroom...',
               '<32>* Bathroom bathroom bathroom bathroom bathroom.',
               '<32>* ...',
               '<32>* Bathroom.',
               '<32>* ...',
               '<32>* Bathroom!!!'
            ],
            [
               '<32>{#p/basic}* Okay... I will admit.',
               "<32>* It is pretty cool that you've got extra-fluffy shampoo.",
               "<32>* Even if it doesn't actually make sense for a human to have it.",
               '<32>* Unless... you ARE turning into a goat...',
               '<32>* ... baaah?'
            ],
            [
               '<32>{#p/basic}* ...',
               "<32>* There's a distinct possibility you are not the only one who uses this bathroom."
            ],
            []
         ),
         _frontier10: pager.create(
            0,
            [
               "<32>{#p/basic}* So this is Monster Kid and Asriel's room...",
               "<32>* I don't have much to say.",
               '<32>* Though... that poster on the wall is pretty cool.',
               '<32>* The old homeworld...',
               "<32>* Only now, it's in sepia tone."
            ],
            [
               "<32>{#p/basic}* I'm honestly not surprised he made this room so much smaller than yours.",
               "<32>* He knows monsters very well.\n* If the bed's comfortable, who cares what room it's in?",
               "<32>* Not monsters, that's who!"
            ],
            ['<32>{#p/basic}* ...', '<32>* That must be why Asriel slept in your bed last night as opposed to his.'],
            []
         ),
         _void: pager.create(
            0,
            [
               '<32>{#p/basic}* From what I can tell...',
               '<32>* This room belonged to someone who spent a long time doing one specific thing.',
               "<32>* If I had that kind of free time, I have no idea what I'd do.",
               "<32>* I do know I wouldn't spend it on such a tedious and demoralizingly-large project.",
               "<32>* But I'm not them, so I wouldn't know what goes through their head."
            ],
            []
         )
      },
      balconyX: [
         '<32>{#p/human}* (And yet, despite the sight ahead of you...)',
         "<32>{#p/human}* (... you can't help but feel as if there's something missing.)"
      ],
      balcony0: ['<25>{#p/kidd}{#f/1}* Is THIS what living on a planet is like?\n* This is INCREDIBLE!'],
      balcony1: () => [
         '<25>{#p/kidd}{#f/3}* ... haha.',
         ...(SAVE.data.b.ufokinwotm8
            ? ["<25>{#f/1}* I can't wait to...", '<25>{#f/4}* ...']
            : ["<25>{#f/1}* I can't wait to explore it!"])
      ],
      balcony2: () =>
         SAVE.data.b.ufokinwotm8
            ? [
               '<25>{#p/kidd}{#f/4}* Uh... are you okay?',
               "<25>{#f/8}* I'm kinda worried about you, dude...",
               '<25>{#f/7}* Is something wrong?'
            ]
            : [
               '<25>{#p/kidd}{#f/7}* ... wait...',
               '<25>{#f/1}* What if the two of us formed a group or something?',
               "<25>{#f/6}* We'd explore everything here, and then go to other worlds...",
               ...(SAVE.data.b.c_state_secret3_used
                  ? ["<25>{#f/1}* Then, with Dr. Alphys's wormholes, we can even go to other galaxies!"]
                  : ["<25>{#f/1}* When we're done, we'll have a map of the whole galaxy!"]),
               ...(SAVE.data.b.c_state_secret2_used
                  ? ["<26>{#f/13}* And we should TOTALLY have a secret handshake!\n* Like Gerson's!"]
                  : [])
            ],
      balcony3: () =>
         SAVE.data.b.ufokinwotm8
            ? [
               "<25>{#p/kidd}{#f/4}* (Man, I'm really getting worried now.)",
               '<25>{#f/7}* Frisk, come on...!',
               '<25>{#f/7}* You gotta say something to me, dude!',
               "<25>{#f/8}* I didn't do anything wrong... did I?"
            ]
            : [
               '<25>{#p/kidd}{#f/2}* Man, this is gonna be so cool...',
               '<25>{#f/1}* You and I are gonna do EVERYTHING together!'
            ],
      balcony1a: [
         '<25>{#p/asriel1}{#f/10}* What?\n* A whole planet of this?',
         '<25>{#f/20}* Pfft.\n* This is nothing...',
         "<25>{#f/17}* Just past the forest, there's a giant mountain...",
         '<25>{#f/17}* And a lake beyond that.'
      ],
      balcony2a: [
         '<25>{#p/kidd}{#f/2}* That must be the lake with that slimy red goo...',
         '<25>{#f/1}* Gross AND awesome!'
      ],
      balcony3a: ['<25>{#p/asriel1}{#f/1}* ... I dare you to swim.'],
      balcony4a: ['<25>{#p/kidd}{#f/7}* ...', '<25>{#f/13}* Deal.\n* But only if you swim WITH me!'],
      balcony5a: [
         '<25>{#p/asriel1}{#f/21}* Uh... I mean...',
         "<25>{#f/20}* Maybe we'd be better off if we stuck to dune racing."
      ],
      balcony6a: ["<25>{#p/kidd}{#f/6}* You're not afraid of getting sticky red goo all over you, are you?"],
      balcony7a: [
         '<25>{#p/asriel1}{#f/8}* ... ugh, of course not, you idiot, I just-',
         '<25>{#p/kidd}{#f/8}* ...',
         "<25>{#p/asriel1}{#f/25}* ... w-wait, I didn't m-mean to..."
      ],
      balcony8a: ['<25>{#p/kidd}{#f/4}* Asriel...?', '<25>{#p/kidd}{#f/4}* Are you okay?'],
      balcony9a: [
         '<25>{#p/asriel1}{#f/13}* ... I...',
         "<25>{#f/22}* I'm alright.\n* You didn't do anything wrong, okay?"
      ],
      balcony10a: [
         "<25>{#p/asriel1}{#f/21}* ... you WOULD just forgive me like that, wouldn't you...",
         "<25>{#f/23}* You're just an innocent monster kid.",
         "<25>{#p/kidd}{#f/1}* That's my name!"
      ],
      balcony11a: [
         '<25>{#p/kidd}{#f/4}* So what were you saying?',
         '<25>{#p/asriel1}{#f/13}* ...',
         '<25>{#f/13}* ... there are deserts, but the races would be done in the tubules.'
      ],
      balcony12a: ['<25>{#p/kidd}{#f/7}* Tubules??\n* What the heck??'],
      balcony13a: [
         "<25>{#p/asriel1}{#f/10}* Uh...\n* Haven't you read the geological surveys?",
         "<25>{#p/kidd}{#f/1}* What's a geological survey?",
         '<25>{#p/asriel1}{#f/15}* ...',
         '<25>{#f/15}* The tubules are a region made up of... uh, tubes.',
         '<26>{#f/17}* Large tubes form cliffs, medium tubes form hills, and small tubes, well...',
         "<25>{#f/20}* They don't really do much, I guess.",
         '<25>{#p/kidd}{#f/1}* Oh!\n* That makes sense.'
      ],
      balcony14a: [
         "<25>{#p/kidd}{#f/1}* Do you think there's other planets out there like this?",
         '<25>{#f/2}* Will we explore those, too?',
         '<25>{#p/asriel1}{#f/10}* Hmm...\n* No doubt there is...'
      ],
      balcony15a: () => [
         '<25>{#p/kidd}{#f/7}* Yo... what if we formed an exploration group!\n* To travel the stars!',
         '<25>{#p/asriel1}{#f/27}* ... huh.',
         "<25>{#p/kidd}{#f/6}* We'd start with this world, and find everything we can...",
         "<26>{#p/kidd}{#f/1}* Then we'd visit more worlds, and make a huge map of the whole galaxy!",
         ...(SAVE.data.b.c_state_secret2_used
            ? ["<26>{#p/kidd}{#f/13}* And we should TOTALLY have a secret handshake!\n* Like Gerson's!"]
            : []),
         ...(SAVE.data.b.c_state_secret3_used
            ? [
               ...(SAVE.data.b.c_state_secret2_used
                  ? ["<25>{#p/asriel1}{#f/13}* With any luck, we'll be hand-in-hand with other galaxies' races, too."]
                  : ["<25>{#p/asriel1}{#f/13}* With any luck, we'll be making maps of other galaxies, too."]),
               "<25>{#f/13}* Dr. Alphys's wormhole travel gives us the means to visit them.",
               "<25>{#f/17}* We'd be a pan-galactic exploration group."
            ]
            : [
               '<25>{#p/asriel1}{#f/17}* Woah, uh, slow down there kiddo...',
               ...(SAVE.data.b.c_state_secret2_used
                  ? [
                     '<25>{#p/asriel1}{#f/17}* ... a secret handshake would be pretty cool, but...',
                     '<25>{#f/13}* ... as for exploring other planets...'
                  ]
                  : []),
               '<26>{#f/13}* It took us long enough just to make it here, let alone another world.'
            ])
      ],
      balcony16a: () =>
         SAVE.data.b.c_state_secret3_used
            ? ["<26>{#p/kidd}{#f/14}* Oh yeah, I totally forgot about that!\n* We've GOTTA try that!"]
            : ['<25>{#p/kidd}{#f/3}* Haha. Maybe.\n* But we could still totally explore it!'],
      balcony17a: [
         '<25>{#p/asriel1}{#f/17}* Just us, huh?',
         '<25>{#p/kidd}{#f/1}* Totally, dude!\n* Just the three of us!'
      ],
      balcony18a1: ['<32>{#p/basic}* ... uh, don\'t you mean "the four of us?"'],
      balcony18a2: ['<25>{#p/asriel1}{#f/25}* ...!', "<25>{#f/25}* $(name)... you're..."],
      balcony19a1: ['<32>{#p/basic}* ... wait, NOW you can hear me?'],
      balcony19a2: [
         "<32>{#p/basic}* I tried reaching out to you before, but... it didn't work.",
         '<32>* I wonder what changed...'
      ],
      balcony20a: ["<25>{#p/kidd}{#f/6}* Haha. If you're friends with him, then you're friends with me."],
      balcony21a: ['<32>{#p/basic}* Wait, YOU can hear me?'],
      balcony22a: ["<25>{#p/kidd}{#f/1}* Kind of hard not to when you're standing there, y'know."],
      balcony23a1: ['<32>{#p/basic}* YOU CAN SEE ME!?!?'],
      balcony23a2: ['<32>{#p/basic}* Oh... my god...'],
      balcony24a: ["<33>{#p/basic}* Asriel, how did you not notice me standing here?\n* I'm not even hidden!"],
      balcony25a: ['<26>{#p/asriel1}{#f/23}* ... $(name), I...'],
      balcony26a1: [
         "<32>{#p/basic}* Asriel, it's okay.\n* You don't have to be ashamed of it anymore.",
         '<32>* If you need to cry...',
         '<32>* ... you can.'
      ],
      balcony26a2: [
         "<32>{#p/basic}* Having that extra SOUL inside of me must've made it hard to appear visually...",
         '<32>* Back on the outpost, when I did finally manage to do it...',
         '<32>* That very same SOUL was released shortly after.',
         "<32>* ... I guess this means I'll be visible all the time now?",
         "<32>* To be honest, I'm not sure how to feel about that."
      ],
      balcony27a: ['<25>{#p/kidd}{#f/7}* Wait, are you a human too!?'],
      balcony28a: [
         '<32>{#p/basic}* Excuse me?',
         "<33>* I'm a human GHOST who wants their GOAT brother to be happy.\n* Get it right. Sheesh."
      ],
      balcony29a: ['<25>{#p/kidd}{#f/14}* ... Asriel is your BROTHER!?', '<25>{#p/kidd}{#f/4}* This is too much...'],
      balcony30a: ["<25>{#p/kidd}{#f/1}* But, uh, you guys are all cool as heck, which means I'll be okay."],
      balcony31a: ["<32>{#p/basic}* Oh, I KNOW I'm cool.\n* I'm the coolest human ghost this side of the continent."],
      balcony32a: [
         "<25>{#p/asriel1}{#f/15}* $(name), you're the only human ghost this side of the continent.",
         '<25>{#f/17}* And the planet.',
         '<25>{#f/20}* And the galaxy.',
         "<25>{#f/13}* And the future, since I won't be taking Frisk's SOUL any time soon.",
         '<25>{#f/15}* And then dying... and then meeting them a hundred years later...',
         '<25>{#f/17}* Etcetera, etcetera, radical circumstances notwithstanding.'
      ],
      balcony33a: [
         "<32>{#p/basic}* Pfft.\n* You're funny, Asriel.",
         "<32>* Being the only human ghost doesn't exclude you from being the coolest human ghost.",
         '<32>* A certain handsome skeleton would concur.'
      ],
      balcony34a1: [
         '<25>{#p/kidd}{#f/2}* $(name), huh?',
         "<25>{#f/1}* That's a nice name.",
         '<25>{#p/kidd}{#f/6}* My name is Monster Kid.'
      ],
      balcony34a2: ['<25>{#p/asriel1}{#f/15}* ... did you just...', '<33>{#p/basic}* Asriel.\n* They said the thing.'],
      balcony35a1: [
         '<25>{#p/asriel1}{#f/10}* They really did...',
         '<25>{#p/kidd}{#f/4}* What?\n* Did I say something wrong, or...',
         "<33>{#p/basic}* No, no, you're fine.\n* You just... uh, reminded us of something.",
         '<25>{#p/kidd}{#f/1}* Oh.\n* I hope it was something good, then.'
      ],
      balcony35a2: ['<25>{#p/asriel1}{#f/23}* ... it was.'],
      balcony36a: [
         '<25>{#p/kidd}{#f/3}* Hey... thanks for being here, guys.',
         '<25>{#f/1}* With friends like you, living here is gonna be the best!'
      ],
      balcony37a: [
         "<33>{#p/basic}* ... heh.\n* If we were just friends, maybe.\n* But we're more than that.",
         '<25>{#p/kidd}{#f/7}* ...?'
      ],
      balcony38a: ["<25>{#p/asriel1}{#f/17}* We're your family."],
      balcony39a: [
         '<25>{*}{#p/kidd}{#f/1}* Oh!\n* Oh!\n* Does that mean we can- {%}',
         '<25>{*}{#f/1}* eat together and tell stories and go for nice walks in the park and- {%}',
         '<25>{*}{#p/asriel1}{#f/20}* Yes, yes, of course- {%}',
         "<25>{*}{#p/kidd}{#f/1}* We could have sleepovers at other people's houses and- {^999}"
      ],
      trivia: {
         bed: (kiddo: boolean) =>
            SAVE.data.b.svr && !player.metadata.voidkey?.room.startsWith('_frontier') // NO-TRANSLATE
               ? ["<25>{#p/asriel1}{#f/20}* This bed looks like it hasn't been washed in three years..."]
               : [
                  SAVE.data.b.ufokinwotm8
                     ? '<32>{#p/human}* (You run your hands through the covers of the bed, and note the wear and tear.)'
                     : '<33>{#p/basic}* This bed, albeit well-made, has seen a lot of use.',
                  ...(kiddo ? ['<25>{#p/kidd}{#f/1}* Looks comfy! '] : [])
               ],
         plushie: (kiddo: boolean) =>
            SAVE.data.b.svr && !player.metadata.voidkey?.room.startsWith('_frontier') // NO-TRANSLATE
               ? ['<25>{#p/asriel1}{#f/20}* Whoever lives here must really like plushies.']
               : [
                  SAVE.data.b.ufokinwotm8
                     ? '<32>{#p/human}* (You glance uninterestedly at the otherwise soft plushie.)'
                     : "<32>{#p/basic}* I see I'm not the only one who likes the soft things.",
                  ...(kiddo ? ['<25>{#p/kidd}{#f/3}* Aw, cute.'] : [])
               ],
         computer: (kiddo: boolean) =>
            SAVE.data.b.svr && !player.metadata.voidkey?.room.startsWith('_frontier') // NO-TRANSLATE
               ? [
                  '<25>{#p/asriel1}{#f/15}* I once dedicated myself to learning how to code...',
                  '<25>{#p/asriel1}{#f/16}* ... whoever wrote this stuff should reconsider their life choices.'
               ]
               : [
                  SAVE.data.b.ufokinwotm8
                     ? '<32>{#p/human}* (You wonder if something like this could be the answer to your dissatisfaction.)'
                     : '<32>{#p/basic}* Color-coded text fills the screen in a monospaced font.',
                  ...(kiddo ? ['<25>{#p/kidd}{#f/1}* How OLD is this thing?'] : [])
               ],
         flowers: (kiddo: boolean) =>
            SAVE.data.b.svr && !player.metadata.voidkey?.room.startsWith('_frontier') // NO-TRANSLATE
               ? ['<25>{#p/asriel1}{#f/10}* Huh?\n* What sort of flower is this anyway?']
               : [
                  SAVE.data.b.ufokinwotm8
                     ? '<32>{#p/human}* (You wonder where these flowers could have come from.)'
                     : '<32>{#p/basic}* Flowers, the universal symbol for sentimentality.',
                  ...(kiddo ? ["<25>{#p/kidd}{#f/1}* I don't think I've ever seen flowers like THESE before..."] : [])
               ],
         x_window: () =>
            SAVE.data.b.ufokinwotm8
               ? ["<32>{#p/human}* (You can tell it's going to be a day of some variety.)"]
               : [
                  ...(SAVE.data.b.svr ? ["<32>{#p/human}* (You can tell it's going to be a nice day.)"] : []),
                  "<32>{#p/basic}* It's the start of a new day."
               ],
         x_cab: () =>
            SAVE.data.b.ufokinwotm8
               ? ["<32>{#p/human}* (It's a cabinet full of clothes you feel indifferent about.)"]
               : [
                  ...(SAVE.data.b.svr ? ["<32>{#p/human}* (It's a cabinet full of your favorite clothes.)"] : []),
                  '<32>{#p/basic}* Various clothes can be found within the cabinet.'
               ],
         x_bed: () =>
            SAVE.data.b.ufokinwotm8
               ? ["<32>{#p/human}* (It's a bed.)\n* (You wish you could just go back to sleep.)"]
               : [
                  ...(SAVE.data.b.svr
                     ? ["<32>{#p/human}* (It's a comfortable bed.)\n* (You had a good night's rest.)"]
                     : []),
                  "<32>{#p/basic}* It's brand new, just for you."
               ],
         x_lamp: () => [
            ...(SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
               ? ["<32>{#p/human}* (It's a lamp.)\n* (It's just the right height for you to reach it.)"]
               : []),
            ...(SAVE.data.b.ufokinwotm8 ? [] : ["<32>{#p/basic}* It's an oddly short lamp."])
         ],
         x_toybox: () =>
            SAVE.data.b.ufokinwotm8
               ? ['<32>{#p/human}* (The toys are even less interesting than before.)']
               : [
                  ...(SAVE.data.b.svr
                     ? ['<32>{#p/human}* (The toys appear to be rather interesting for once.)']
                     : []),
                  "<32>{#p/basic}* Perhaps these toys aren't so bad after all..."
               ],
         x_wash: () =>
            SAVE.data.b.ufokinwotm8
               ? ['<32>{#p/human}* (You stare into the drain.)']
               : [
                  ...(SAVE.data.b.svr
                     ? ['<32>{#p/human}* (But your hands were already as clean as they could be.)']
                     : ['<32>{#p/human}* (You wonder if your hands could be a little cleaner.)']),
                  "<32>{#p/basic}* It's a sink.\n* Don't sink too much time into thinking about it."
               ],
         x_toilet: () =>
            SAVE.data.b.ufokinwotm8
               ? ['<32>{#p/human}* (You ignore the toilet.)']
               : [
                  ...(SAVE.data.b.svr
                     ? ['<32>{#p/human}* (You tip up the toilet lid.)\n* (You then tip it back down.)']
                     : []),
                  ...(SAVE.data.b.ufokinwotm8 ? [] : ["<32>{#p/basic}* It's a toilet.\n* What else would it be."])
               ],
         x_bathrub: () =>
            SAVE.data.b.ufokinwotm8
               ? ['<32>{#p/human}* (You wonder if a warm bath would make you feel better.)']
               : [
                  ...(SAVE.data.b.svr ? ['<32>{#p/human}* (You look forward to taking your next warm bath.)'] : []),
                  '<32>{#p/basic}* Everything in this room is fit exactly to your size...'
               ],
         x_mirror: () => [
            ...(SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
               ? ['<32>{#p/human}* (As you stare into the mirror, you reflect on the journey you took to get here.)']
               : []),
            ...(SAVE.data.b.ufokinwotm8 ? [] : ["<32>{#p/basic}* No matter what happens, it'll always be you."])
         ],
         x_sign1: () => [
            ...(SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
               ? ['<32>{#p/human}* (The sign describes adjusting to life on a new planet.)']
               : []),
            ...(SAVE.data.b.ufokinwotm8
               ? []
               : [
                  '<33>{#p/basic}* It\'s a five-step guide on how to adjust to planet-bound life.\n* They all amount to "have fun."'
               ])
         ],
         x_sign2: () => [
            ...(SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
               ? ['<32>{#p/human}* (The sign outlines tasks that are yet to be completed.)']
               : []),
            ...(SAVE.data.b.ufokinwotm8
               ? []
               : ["<33>{#p/basic}* It's a list of various pending tasks relating to building a new community."])
         ],
         x_plant: () =>
            SAVE.data.b.ufokinwotm8
               ? ['<32>{#p/human}* (You caress the plant and sigh as it sighs with you.)']
               : [
                  ...(SAVE.data.b.svr
                     ? ['<32>{#p/human}* (You caress the plant and smile as it smiles back at you.)']
                     : []),
                  '<32>{#p/basic}* This plant will always be happy to see you.'
               ],
         x_desk: () =>
            SAVE.data.b.ufokinwotm8
               ? ['<32>{#p/human}* (You stare into the empty diary, wishing you could write your own story.)']
               : [
                  ...(SAVE.data.b.svr
                     ? [
                        '<32>{#p/human}* (You stare into the empty diary, wondering what stories are yet to be told.)'
                     ]
                     : []),
                  "<32>{#p/basic}* It's a diary.\n* It's completely blank.",
                  "<32>{#p/basic}* Asgore's favorite diary- writing chair must still be on the transport ship."
               ],
         x_paperwork: () => [
            ...(SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
               ? ['<32>{#p/human}* (You wonder if any of these items could belong to you.)']
               : []),
            ...(SAVE.data.b.ufokinwotm8
               ? []
               : ['<32>{#p/basic}* The papers list various items that have yet to be taken in.'])
         ],
         x_trash: () => [
            ...(SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
               ? ["<32>{#p/human}* (You can't make out what's in the trash...)"]
               : []),
            ...(SAVE.data.b.ufokinwotm8
               ? []
               : [
                  "<32>{#p/basic}* There is a crumpled up recipe for Starling Flower Tea.\n* That's not his trash can..."
               ])
         ],
         x_bed_large: () => [
            ...(SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
               ? ['<32>{#p/human}* (The bed still seems to be way too large for you.)']
               : []),
            ...(SAVE.data.b.ufokinwotm8 ? [] : ["<32>{#p/basic}* Despite everything, it's still a king-sized bed."])
         ],
         x_cactus: () =>
            SAVE.data.b.ufokinwotm8
               ? ['<32>{#p/human}* (You poke the cactus.)\n* (It pokes back.)']
               : [
                  ...(SAVE.data.b.svr
                     ? [
                        '<32>{#p/human}* (You poke the cactus.)\n* (The cactus is touched by your sense of affection.)'
                     ]
                     : []),
                  '<32>{#p/basic}* So she finally gave up her inner cactus, eh...?'
               ],
         x_booktable: () =>
            SAVE.data.b.ufokinwotm8
               ? ["<32>{#p/human}* (But you weren't in the mood to read a diary.)"]
               : [
                  ...(SAVE.data.b.svr
                     ? ['<32>{#p/human}* (The book contains the diary entries of Monster Kid.)']
                     : ["<32>{#p/basic}* It's Monster Kid's diary."]),
                  '<32>{#p/human}* (You read the first and only entry...)',
                  '<32>{#p/kidding}* "So asgores my dad now huh? Thats weird. But also AWESOME!"',
                  '<32>{#p/kidding}* "Asgore said i should put on some new clothes so maybe ill do that later."',
                  '<32>{#p/kidding}* "He also said i should write a diary to keep track of things."',
                  '<32>{#p/kidding}* "Im pretty good at reading and writing so this should be really easy."',
                  '<32>{#p/kidding}* "And frisk can totally help me if i do something wrong!"',
                  '<32>{#p/kidding}* "Frisk if youre reading this please tell me what i did wrong."',
                  '<32>{#p/human}* (You close the diary.)'
               ],
         x_bed_left: () => [
            ...(SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
               ? ["<32>{#p/human}* (You check under the covers to make sure it's safe to sleep.)"]
               : []),
            ...(SAVE.data.b.ufokinwotm8 ? [] : ["<32>{#p/basic}* It's Monster Kid's bed."])
         ],
         x_knickknacks: () => [
            ...(SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
               ? ['<32>{#p/human}* (You re-arrange the knick knacks to pass the time.)\n* (You hope nobody notices.)']
               : []),
            ...(SAVE.data.b.ufokinwotm8 ? [] : ["<32>{#p/basic}* It's a shelf full of various toys and knick knacks."])
         ],
         x_bed_right: () =>
            SAVE.data.b.svr
               ? [
                  '<32>{#p/human}* (You pat the plushie.)\n* (It might just be you, but it seems a little happier.)',
                  "<32>{#p/basic}* It's Asriel's bed.\n* It doesn't look like it's been used yet."
               ]
               : [],
         x_bookshelf: (() => {
            const pages = pager.create(
               1,
               [
                  '<32>{#p/basic}* "EURYBIA GEOLOGICAL SURVEY"\n* "Authored by the Royal Science Division (RSD)."',
                  '<32>* "Preliminary scans of the surface have revealed vast diversity in its ecosystems."',
                  '<32>* "Each section of this report will concentrate on biomes of a specific type."',
                  '<32>* "Sections are as follows."',
                  '<32>* "SECTION 001 - Subterranian"\n* "SECTION 002 - Oceanic"\n* "SECTION 003 - Structural"',
                  '<32>* "SECTION 004 - Magnetic"\n* "SECTION 005 - Airborne"\n* "SECTION 006 - Forested"',
                  '<32>* "SECTION 007 - Spired"\n* "SECTION 008 - Metallic"\n* "SECTION 009 - Crystalline"',
                  "<32>* Jeez, how many ARE there?\n* Let's just stop reading here."
               ],
               [
                  '<32>{#p/basic}* "Howdy, fellow gardeners."',
                  '<32>* "When it comes to starling flowers, the line between growth and stagnation..."',
                  '<32>* "Is access to open space."',
                  '<32>* "That is why they were commonly grown in Aerialis..."',
                  '<32>* "Though, on Eurybia, the best place to grow them is unknown."',
                  '<32>* "For the moment, it is recommended that they be grown in orbit."',
                  '<32>* "Space station five will be deployed on date K-615.12."',
                  '<32>* "If this date has not yet arrived, a shuttlecraft will suffice."'
               ],
               [
                  '<32>{#p/basic}* "In the beginning, there was nothing."',
                  '<32>* "Then... the human appeared out of thin air."',
                  '<32>* "The human and the bunny gave each other a big, fluffy hug..."',
                  '<32>* "But then...!"\n* "The human and the bunny could hug no longer."',
                  '<32>* "Shocking!"\n* "Their world views had been shaken to their cores."',
                  '<32>* "Later, after much time had passed, the human began working on a solution."',
                  '<32>* "Day by day, the human worked tirelessly, all so they could hug their bunny once again."',
                  '<32>* "Eventually... the human\'s work was complete, and the bunny was ready."',
                  '<32>* "The human opened their arms, waiting for the bunny to approach..."',
                  '<32>* "Before they knew it, the bunny was already in their arms!"',
                  '<32>* "And so it was that the human and the bunny lived fluffily ever after."'
               ],
               () =>
                  SAVE.data.b.c_state_secret3_used
                     ? [
                        '<32>{#p/basic}* "Wormhole experiment report!"\n* "From Dr. Alphys to Asgore"',
                        '<32>* "Progress on my wormhole experiment is going smoothly!"',
                        '<32>* "Ever since Frisk forwarded the professor\'s equations, I\'ve made steady progress."',
                        '<32>* "I\'ve even managed to send small objects through the aperture..."',
                        '<32>* "In my next test, I\'ll send a tethered scanner through and see what it picks up."',
                        '<32>* "Wormholes for monster travel could be here as soon as K-616.05!"'
                     ]
                     : [
                        '<32>{#p/basic}* "Wormhole experiment report."\n* "From Dr. Alphys to Asgore"',
                        '<32>* "Progress on my wormhole experiment has hit a snag."',
                        '<32>* "The professor\'s incomplete equations haven\'t been enough to get things working."',
                        '<32>* "I\'ll keep trying, but I can\'t go too fast without putting my life at risk."',
                        '<32>* "In my next experiment, I\'ll see if I can get the aperture to last a little longer..."',
                        '<32>* "Wormholes for monster travel won\'t be coming any time soon."'
                     ],
               [
                  '<32>{#p/basic}* "You have received an invitation to the transport ship triumph!"',
                  '<32>* "Events will be held from stem to stern, including hovercar races and dance raves!"',
                  '<32>* "When we reach the homeworld, a final event will be held on the forward section lounge!"',
                  '<32>* "This is an experience you won\'t want to miss, so get up and get loud while you can!"',
                  '<32>* "Please note that this invitation expires upon reaching the homeworld."',
                  '<32>* "Can\'t wait to see you there!"'
               ],
               [
                  '<32>{#p/basic}* "Toriel\'s fur care guide, dated K-614.09."',
                  '<32>* "When shedding fur, one must always take great care to dispose properly."',
                  '<32>* "The trash can is the obvious choice, but I myself prefer the sink."',
                  '<32>* "If you shed often, consider investing in a sink with garbage disposal."',
                  '<32>* "Regarding softness, the side you sleep on will be the most affected."',
                  '<32>* "If you prefer your head or body fur to be soft, sleep on your side."',
                  '<32>* "To keep your arms and legs soft, sleep on your back."',
                  '<32>* "Thank you, dear readers."\n* "That will be all."'
               ]
            );
            return () =>
               SAVE.data.b.ufokinwotm8
                  ? ["<32>{#p/human}* (But you weren't in the mood to read a book.)"]
                  : [
                     ...(SAVE.data.b.svr
                        ? [
                           '<32>{#p/human}* (The books on this bookshelf are capable of swapping their content on-demand.)'
                        ]
                        : [
                           '<32>{#p/basic}* The books are all blank, but get filled with the text of the book you select.'
                        ]),
                     "<32>{#p/human}* (You select a book from the control panel, and pick it out once it's ready...)",
                     ...pages(),
                     '<32>{#p/human}* (You put the book back on the shelf.)'
                  ];
         })(),
         x_endtable: () =>
            SAVE.data.b.ufokinwotm8
               ? [
                  SAVE.data.b.water
                     ? '<32>{#p/human}* (You observe the end table, and the cup on top of it.)\n* (It seems disturbed.)'
                     : '<32>{#p/human}* (You observe the end table.)\n* (It seems disturbed.)'
               ]
               : [
                  ...(SAVE.data.b.svr
                     ? [
                        SAVE.data.b.water
                           ? '<32>{#p/human}* (You observe the end table, and the cup on top of it.)\n* (It seems pleased.)'
                           : '<32>{#p/human}* (You observe the end table.)\n* (It seems pleased.)'
                     ]
                     : []),
                  '<32>{#p/basic}* At last...\n* A remarkable end table.',
                  ...(SAVE.data.b.water
                     ? [
                        '<33>{#p/basic}* It even has a cup of electro- dampening fluid on it.\n* Truly, a sippy you can rely on.'
                     ]
                     : [])
               ],
         x_chasgore: () => [
            ...(SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
               ? SAVE.data.b.c_state_secret1_used && SAVE.data.b.c_state_secret5_used
                  ? ['<32>{#p/human}* (The chair strikes you as being where it belongs.)']
                  : ['<32>{#p/human}* (The chair strikes you as being out of place.)']
               : []),
            ...(SAVE.data.b.ufokinwotm8
               ? []
               : ['<32>{#p/basic}* A comfy reading chair...', "<32>* Doesn't seem like the right size for Asgore."])
         ],
         x_window_left: () =>
            SAVE.data.b.ufokinwotm8
               ? ['<32>{#p/human}* (Staring out the window, you wonder where you went wrong to deserve this feeling.)']
               : [
                  ...(SAVE.data.b.svr
                     ? [
                        '<32>{#p/human}* (Staring out the window, you feel nothing but excitement for the future ahead.)'
                     ]
                     : []),
                  '<32>{#p/basic}* The window accentuates the atmosphere outside.'
               ],
         x_window_right: () =>
            SAVE.data.b.ufokinwotm8
               ? ['<32>{#p/human}* (Staring out the window, you ask yourself why things had to end up this way.)']
               : [
                  ...(SAVE.data.b.svr
                     ? [
                        "<32>{#p/human}* (Staring out the window, you remind yourself of how long you've waited to get here.)"
                     ]
                     : []),
                  '<32>{#p/basic}* The window enhances the atmosphere inside.'
               ],
         x_plant_left: () =>
            SAVE.data.b.ufokinwotm8
               ? ['<32>{#p/human}* (You touch the plant lightly.)\n* (It understands your pain.)']
               : [
                  ...(SAVE.data.b.svr
                     ? [
                        '<32>{#p/human}* (You touch the plant lightly.)\n* (It shakes and bobs, relieved that you were here.)'
                     ]
                     : []),
                  '<33>{#p/basic}* A compassionate plant.'
               ],
         x_plant_right: () =>
            SAVE.data.b.ufokinwotm8
               ? ['<32>{#p/human}* (You touch the plant lightly.)\n* (It promises things will get better for you.)']
               : [
                  ...(SAVE.data.b.svr
                     ? ['<32>{#p/human}* (You touch the plant lightly.)\n* (It appreciates the gesture.)']
                     : []),
                  '<32>{#p/basic}* An optimistic plant.'
               ],
         x_sign3: () => [
            ...(SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
               ? ["<32>{#p/human}* (The sign doesn't appear to hold anything of note.)"]
               : []),
            ...(SAVE.data.b.ufokinwotm8
               ? []
               : [
                  "<32>{#p/basic}* It's a digital picture frame.\n* All it needs now are some good memories, in visual form."
               ])
         ],
         x_chair1: () => [
            ...(SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
               ? ['<32>{#p/human}* (You note the fairly large size of the dining chair.)']
               : []),
            ...(SAVE.data.b.ufokinwotm8
               ? []
               : SAVE.data.b.c_state_secret1_used && SAVE.data.b.c_state_secret5_used
                  ? ["<32>{#p/basic}* One of Asgore's dining chairs.\n* Fit for a mother."]
                  : ["<32>{#p/basic}* One of Asgore's dining chairs.\n* Not fit for anyone."])
         ],
         x_chair2: () => [
            ...(SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
               ? ['<32>{#p/human}* (You note the small size of the dining chair.)']
               : []),
            ...(SAVE.data.b.svr
               ? ["<32>{#p/basic}* One of Asgore's dining chairs.\n* Fit for a brother."]
               : SAVE.data.b.ufokinwotm8
                  ? []
                  : ["<32>{#p/basic}* One of Asgore's dining chairs.\n* Not fit for anyone."])
         ],
         x_chair3: () =>
            SAVE.data.b.ufokinwotm8
               ? ['<32>{#p/human}* (You wonder if this chair is still fit for a little angel.)']
               : [
                  ...(SAVE.data.b.svr
                     ? [
                        '<32>{#p/human}* (You note the perfect size of the dining chair.)',
                        "<32>{#p/basic}* It's fit just for you, Frisk."
                     ]
                     : ["<32>{#p/basic}* One of Asgore's dining chairs.\n* Still fit for a child."])
               ],
         x_chair4: () => [
            ...(SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
               ? ['<32>{#p/human}* (You note the slightly small size of the dining chair.)']
               : []),
            ...(SAVE.data.b.svr
               ? ["<32>{#p/basic}* One of Asgore's dining chairs.\n* Fit for a sibling."]
               : SAVE.data.b.ufokinwotm8
                  ? []
                  : SAVE.data.b.f_state_kidd_betray
                     ? ["<32>{#p/basic}* One of Asgore's dining chairs.\n* Not fit for anyone."]
                     : ["<32>{#p/basic}* One of Asgore's dining chairs.\n* Fit for a monster."])
         ],
         x_chair5: () => [
            ...(SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
               ? ['<32>{#p/human}* (You note the exceptional size of the dining chair.)']
               : []),
            ...(SAVE.data.b.svr
               ? ["<32>{#p/basic}* One of Asgore's dining chairs.\n* Fit for a father."]
               : SAVE.data.b.ufokinwotm8
                  ? []
                  : ["<32>{#p/basic}* One of Asgore's dining chairs.\n* Still fit for a king."])
         ],
         x_fridge: () =>
            SAVE.data.b.ufokinwotm8
               ? ['<32>{#p/human}* (You place your hands on the exterior of the fridge.)\n* (It groans harshly.)']
               : [
                  ...(SAVE.data.b.svr
                     ? ['<32>{#p/human}* (You place your hands on the exterior of the fridge.)\n* (It purrs gently.)']
                     : []),
                  ...[
                     ['<32>{#p/basic}* The fridge is mostly empty, save for a single glass of water from Undyne.'],
                     [
                        '<32>{#p/basic}* The fridge is mostly empty, save for a single bottle of exoberry punch from Undyne.'
                     ],
                     [
                        '<32>{#p/basic}* The fridge is mostly empty, save for a single mug of hot cocoa from Undyne.',
                        "<32>* ... it's freezing cold by now."
                     ],
                     [
                        '<32>{#p/basic}* The fridge is mostly empty, save for a single cup of starling tea from Undyne.',
                        "<32>* ... it's freezing cold by now."
                     ]
                  ][SAVE.data.n.undyne_drink]
               ],
         x_sink: () => [
            ...(SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
               ? ["<32>{#p/human}* (Surprisingly, you can't find any residue in the sink.)"]
               : []),
            ...(SAVE.data.b.ufokinwotm8
               ? []
               : ['<32>{#p/basic}* No fur, no hair...\n* Indeed, these are the wonders of technology.'])
         ],
         x_drawer: () =>
            SAVE.data.b.ufokinwotm8
               ? ['<32>{#p/human}* (You open the drawer, and pet the dog within for comfort.)']
               : [
                  ...(SAVE.data.b.svr ? ['<32>{#p/human}* (You open the drawer, and wave to the dog within.)'] : []),
                  '<32>{#p/basic}* That dog, in that drawer...\n* Better not let Papyrus catch wind of this.'
               ],
         x_stove: () =>
            SAVE.data.b.ufokinwotm8
               ? ['<32>{#p/human}* (You wonder if the stove will burn this house down, too.)']
               : [
                  ...(SAVE.data.b.svr
                     ? ['<32>{#p/human}* (You wonder what delicious meals will be made here.)']
                     : []),
                  "<32>{#p/basic}* It's the same model as Undyne's stove...",
                  '<32>* We can only hope it came equipped with the appropriate safety measures this time.'
               ],
         x_sign4: () => [
            ...(SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
               ? ['<32>{#p/human}* (The sign lists instructions to a certain recipe.)']
               : []),
            ...(SAVE.data.b.ufokinwotm8
               ? []
               : [
                  '<32>{#p/basic}* Tucca Zunasca, a new kind of soup for a new kind of world.',
                  '<32>* In a pot, brown a sausage, adding spicy pepper flakes as needed.',
                  '<32>* Add two Kriatas of basic stock, and bring the pot to a boil.',
                  '<32>* For best results, apply fire magic. Otherwise, oxygenated flame will suffice.',
                  '<32>* Dice one pound of Eurybian potatoes, and add them to the boiling pot.',
                  '<32>* Once the mixture begins to sparkle, begin adding whipping cream and bar-bird broth.',
                  '<32>* For now, source the cream from the giga-vine canopy. Other sources may be found later.',
                  '<32>* Additionally, kale or kretaada may be added, and cooked at high intensity until soft.',
                  '<32>* Once complete, your soup should be ready for the table!'
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
      asrieldreemurr: '§fill:#ff7f7f§§swirl:2,1,1.05,1§§hue§* Asriel Dreemurr',
      bathe: '* Bathe',
      beckon: '* Beckon',
      bedtime: '* Bed Time',
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
      imitate: '* Imitate',
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
      act_check: ["<32>{#p/story}* DUMMY - ATK 0 DEF 0\n* A ghost within the shell, they hope you're doing well."],
      act_flirt: [
         '<32>{#p/human}* (You flirt with the dummy.)',
         "<32>{#p/basic}* It went exactly how you'd expect.",
         '<32>* Toriel is trying not to laugh.'
      ],
      act_hug: ['<32>{#p/human}* (You hug the dummy.)'],
      act_slap: ['<32>{#p/human}* (You slap the dummy.)'],
      act_talk: [
         '<32>{#p/human}* (You talk to the dummy.)',
         "<32>{#p/basic}* It doesn't seem much for conversation.",
         '<32>* Toriel is pleased with you.'
      ],
      bored: ['<32>{#p/basic}* The dummy grew tired of your aimless shenanigans.'],
      hugged: ['<32>{#p/basic}* The dummy is blushing... somehow.'],
      name: '* Dummy',
      slapped: ['<32>{#p/basic}* Suddenly...!'],
      status1: ['<32>{#p/story}* You encountered the dummy.'],
      status2: ["<32>{#p/story}* The dummy looks like it's already getting bored."],
      status3: ["<32>{#p/story}* The dummy looks like it's lost in itself."],
      status4: ["<32>{#p/story}* The dummy looks like it's going to fall over."],
      talk: ['<09>{#p/basic}{#i/10}{~}.....']
   },
   b_opponent_maddummy: {
      epiphaNOPE1: ["<11>{#p/basic}{~}{#x3}Ugh, you're WASTING my time!"],
      epiphaNOPE2: ['<08>{#p/basic}{~}Oh.. how strange.'],
      act_check: () =>
         16 <= SAVE.data.n.kills_wastelands
            ? ["<32>{#p/story}* GLAD DUMMY - ATK 0 DEF 0\n* It's a dream come true!"]
            : ['<32>{#p/story}* MAD DUMMY - ATK 30 DEF 255\n* Impervious to physical attacks.'],
      act_flirt: () =>
         16 <= SAVE.data.n.kills_wastelands
            ? [
               '<32>{#p/human}* (You flirt with Glad Dummy.)',
               "<32>{#p/basic}* They're too distracted with themselves to hear you."
            ]
            : ['<32>{#p/human}* (You flirt with Mad Dummy.)', "<32>* It went exactly how you'd expect."],
      act_hug: () =>
         16 <= SAVE.data.n.kills_wastelands
            ? ['<32>{#p/human}* (You hug Glad Dummy.)']
            : ['<32>{#p/human}* (You hug Mad Dummy.)'],
      act_slap: () =>
         16 <= SAVE.data.n.kills_wastelands
            ? [
               '<32>{#p/human}* (You slap Glad Dummy.)',
               '<32>{#p/basic}* Glad Dummy exerts the better part of valor and gets out of your way.'
            ]
            : ['<32>{#p/human}* (You slap Mad Dummy.)'],
      act_talk: () =>
         16 <= SAVE.data.n.kills_wastelands
            ? [
               '<32>{#p/human}* (You talk to Glad Dummy.)',
               "<32>{#p/basic}* They're too distracted with themselves to hear you."
            ]
            : [
               '<32>{#p/human}* (You talk to Mad Dummy.)',
               "<32>* They don't seem much for conversation.",
               '<32>* Nobody is happy with this.'
            ],
      boredTalk: [
         '<11>{#p/basic}{~}{#x3}What the hell?',
         '<11>{#p/basic}{~}{#x1}Why is NOTHING hap- pening?',
         '<11>{#p/basic}{~}{#x4}Am I INVISIBLE to you or something??',
         '<11>{#p/basic}{~}{#x4}...',
         "<11>{#p/basic}{~}{#x4}I CAN'T EVEN BE MAD AT YOU!!!",
         "<11>{#p/basic}{~}{#x4}You're so... INANIMATE!",
         '<11>{#p/basic}{~}{#x4}JUST... GAHH!\nGET OUT OF MY LIFE!',
         '<11>{#p/basic}{~}{#x4}GO LISTEN TO MUSIC WITH NAPSTABLOOK OR SOMETHING!'
      ],
      changeStatus1: ['<32>{#p/story}* Mad Dummy is getting cotton all over the floor.'],
      changeStatus2: ['<32>{#p/story}* Mechanical whirrs fill the room.'],
      fightFail: [
         '<11>{#p/basic}{~}{#x1}Foolish.\nFoolish!\nFOOLISH!',
         '<11>{#p/basic}{~}{#x3}Even if you attack my vessel...',
         "<11>{#p/basic}{~}{#x4}... you'll NEVER hurt ME!",
         "<11>{#p/basic}{~}{#x1}I'm still incor- poreal, you dummy!!!"
      ],
      final1: () => [
         "<11>{#p/napstablook}{~}sorry, i interrupted you, didn't i...",
         '<11>{#p/napstablook}{~}as soon as i came over, your friend immediately left...',
         ...(SAVE.data.n.state_wastelands_napstablook === 2
            ? [
               "<11>{#p/napstablook}{~}oh wait...\ndidn't you attack me before...",
               "<11>{#p/napstablook}{~}uhhh...\nthat's awkward.",
               '<11>{#p/napstablook}{~}sorry...'
            ]
            : [
               '<11>{#p/napstablook}{~}oh no...\nyou guys looked like you were having fun...',
               '<11>{#p/napstablook}{~}oh no...\ni just wanted to say hi...',
               '<11>{#p/napstablook}{~}oh no......\n...........\n...........\n...........\n...........'
            ])
      ],
      gladTalk1: ['<08>{#p/basic}{~}Thanks!'],
      gladTalk2: ['<08>{#p/basic}{~}Thank you!'],
      gladTalk3: ['<08>{#p/basic}{~}Great work!'],
      gladTalk4: ['<08>{#p/basic}{~}Bravo!'],
      gladTalk5: ['<08>{#p/basic}{~}OK!'],
      gladTalk6: ['<08>{#p/basic}{~}...'],
      hugTalk1: () =>
         16 <= SAVE.data.n.kills_wastelands
            ? [
               '<08>{#p/basic}{~}My haphe- phobia!',
               "<08>{#p/basic}{~}It's gone!",
               '<08>{#p/basic}{~}Thank you.. human..',
               "<08>{#p/basic}{~}I've never felt so happy.."
            ]
            : SAVE.data.n.state_wastelands_dummy === 4
               ? ['<11>{#p/basic}{~}{#x4}Are you for REAL??']
               : ['<11>{#p/basic}{~}{#x3}N-no..!\nI have haphe- phobia!'],
      hugTalk2: ['<11>{#p/basic}{~}{#x4}Stop that!'],
      hugTalk3: ['<11>{#p/basic}{~}{#x2}Knock it off!'],
      hugTalk4: ['<11>{#p/basic}{~}{#x3}...'],
      name: () => (16 <= SAVE.data.n.kills_wastelands ? '* Glad Dummy' : '* Mad Dummy'),
      phase2Talk1: ["<11>{#p/basic}{~}{#x1}I'll defeat you and take your SOUL!"],
      phase2Talk2: ["<11>{#p/basic}{~}{#x1}I'll use your SOUL to break the force field!"],
      phase2Talk3: ['<11>{#p/basic}{~}{#x6}The other monsters will love me, praise me...!'],
      phase2Talk4: ['<11>{#p/basic}{~}{#x4}THEN EVERYTHING I WANT WILL BE MINE!'],
      phase2Talk5: ["<11>{#p/basic}{~}{#x3}Huh?\nYeah, I guess that'll avenge my cousin."],
      phase2Talk6: ['<11>{#p/basic}{~}{#x5}Do my other cousins care...?'],
      phase2Talk7: ['<11>{#p/basic}{~}{#x4}Whatever.\nWhatever!\nWHATEVER!'],
      phase2Talk8: ['<11>{#p/basic}{~}{#x1}...'],
      phase3Talk1: ['<11>{#p/basic}{~}{#x1}DUMMY BOTS!\nMAGIC MISSILE!'],
      phase3Talk2: ['<11>{#p/basic}{~}{#x3}DUMMY BOTS!\nTRY AGAIN!'],
      phase3Talk3: ["<11>{#p/basic}{~}{#x5}DUMMY BOTS!\nYou're awful???"],
      phase3Talk4: ['<11>{#p/basic}{~}{#x4}DUMMY BOTS!\nFINAL ATTACK!'],
      phaseChange1: [
         '<11>{#p/basic}{~}{#x2}OWWWW, you DUMMIES!!',
         '<11>{#p/basic}{~}{#x1}Watch where you aim your {@fill:#f00}MAGIC{@fill:#000} attacks!',
         '<11>{#p/basic}{~}{#x4}...',
         '<11>{#p/basic}{~}{#x4}Hey!\nYou!',
         '<11>{#p/basic}{~}{#x3}Forget I said anything about {@fill:#f00}MAGIC{@fill:#000}.'
      ],
      phaseChange2a: ['<11>{#p/basic}{~}{#x4}HEY GUYS!'],
      phaseChange2b1: [
         '<11>{#p/basic}{~}{#x1}Dummies.\nDummies!\nDUMMIES!',
         '<11>{#p/basic}{~}{#x3}Remember how I said NOT to shoot at me?',
         '<11>{#p/basic}{~}{#x3}Well...'
      ],
      phaseChange2b2: ["<11>{#p/basic}{~}{#x4}FAILURES!\nYOU'RE FIRED!\nYOU'RE ALL BEING REPLACED!"],
      phaseChange2c: [
         '<11>{#p/basic}{~}{#x4}Hahaha.\nHahaha!\nHAHAHA!',
         "<11>{#p/basic}{~}{#x3}Now you'll see my true power...",
         "<11>{#p/basic}{~}{#x6}Relying on people that aren't garbage!"
      ],
      phaseChange3a1: [
         '<11>{#p/basic}{~}{#x3}N... no way!',
         '<11>{#p/basic}{~}{#x3}These guys are WORSE than the other guys!'
      ],
      phaseChange3a2: [
         '<11>{#p/basic}{~}{#x1}Who cares.\nWho cares!\nWHO CARES!',
         "<11>{#p/basic}{~}{#x4}I DON'T NEED FRIENDS!!"
      ],
      // TODO: frisk expression from dying to this the first time
      phaseChange3b: ["<11>{#p/basic}{~}{#x6}I'VE GOT KNIVES!!!"],
      phaseChange3c1: ["<11>{#p/basic}{~}{#x3}I'm...", '<11>{#p/basic}{~}{#x3}Out of knives.'],
      phaseChange3c2: [
         "<11>{#p/basic}{~}{#x4}BUT IT DOESN'T MATTER!!!",
         "<11>{#p/basic}{~}{#x4}YOU CAN'T HURT ME AND I CAN'T HURT YOU!",
         "<11>{#p/basic}{~}{#x1}YOU'LL BE STUCK FIGHTING ME..."
      ],
      phaseChange3c3: ['<11>{#p/basic}{~}{#x1}Forever.'],
      phaseChange3c4: ['<11>{#p/basic}{~}{#x4}Forever!'],
      phaseChange3c5: ['<11>{#p/basic}{~}{#x6}FOREVER!!!!'],
      phaseChange3d: ['<11>{*}{#p/basic}{~}{#x6}AHAHAHAHA HAHAHAHAH AHAHAHAHA HAHAHAHAH AHAHAHAHA{%}'],
      phaseChange3e: [
         '<11>{*}{#p/basic}{~}{#x2}Wh...\nWhat the heck is this!?{^20}{%}',
         '<11>{*}{#p/basic}{~}{#x6}Ergh!\nAcid rain!?{^20}{%}',
         "<11>{*}{#p/basic}{~}{#x4}Oh, FORGET IT!\nI'm OUTTA here!!{^20}{%}"
      ],
      randStatus1: ['<32>{#p/story}* Mad Dummy is looking for the nearest airlock to throw you out of.'],
      randStatus2: ['<32>{#p/story}* Mad Dummy is bossing around its bullets.'],
      randStatus3: ['<32>{#p/story}* Mad Dummy glares into a portal, then turns to you with the same expression.'],
      randStatus4: ['<32>{#p/story}* Mad Dummy is hopping mad.'],
      randStatus5: ['<32>{#p/story}* Smells like a textile factory.'],
      gladStatus1: ['<32>{#p/story}* Glad Dummy is just happy to be here.'],
      gladStatus2: ["<32>{#p/story}* Glad Dummy thinks of all the wonderful things it's going to do."],
      gladStatus3: ['<32>{#p/story}* Glad Dummy seems content.'],
      randTalk1: ['<11>{#p/basic}{~}{#x1}Foolish.\nFoolish!\nFOOLISH!'],
      randTalk2: ['<11>{#p/basic}{~}{#x1}Futile.\nFutile!\nFUTILE!'],
      randTalk3: ['<11>{#p/basic}{~}{#x1}Pitiful.\nPitiful!\nPITIFUL!'],
      randTalk4: ['<11>{#p/basic}{~}{#x1}Feeble.\nFeeble!\nFEEBLE!'],
      slapTalk1: ['<11>{#p/basic}{~}{#x6}Why you little...!'],
      slapTalk2: ['<11>{#p/basic}{~}{#x4}Are you kidding me??'],
      slapTalk3: ['<11>{#p/basic}{~}{#x2}Come on!'],
      slapTalk4: ['<11>{#p/basic}{~}{#x3}...'],
      status1: () =>
         16 <= SAVE.data.n.kills_wastelands
            ? ['<32>{#p/story}* Glad Dummy lets you go.']
            : ['<32>{#p/story}* Mad Dummy blocks the way!']
   },
   b_opponent_moldsmal: {
      epiphany: [
         ['<08>{#p/basic}{~}\x00*slime sounds*'],
         () =>
            world.meanie
               ? ['<08>{#p/basic}{~}Squorch!']
               : world.flirt > 9
                  ? ['<08>{#p/basic}{~}\x00*erotic wiggle*']
                  : SAVE.data.b.oops
                     ? ['<08>{#p/basic}{~}\x00*happy wiggle*']
                     : ['<08>{#p/basic}{~}\x00*shakes in your arms*'],
         ['<08>{#p/basic}{~}Final blorb.'],
         ['<08>{#p/basic}{~}\x00*shiny wiggle*']
      ],
      act_check0: ['<32>{#p/asriel2}* Gelatini, the mindless mold.\n* What more can I say?'],
      act_check: ['<32>{#p/story}* GELATINI - ATK 6 DEF 0\n* Stereotypical: Curvaceously attractive, but no brains...'],
      act_check2: ["<32>{#p/story}* GELATINI - ATK 6 DEF 0\n* It's even more attractive in this season's colors."],
      act_check3: ['<32>{#p/story}* GELATINI - ATK 6 DEF 0\n* It\'s exactly your type.\n* It\'s "stereo."'],
      act_check4: ['<32>{#p/story}* GELATINI - ATK 6 DEF 0\n* This mold supermodel appears to be past its prime.'],
      act_flirt: [
         '<32>{#p/human}* (You wiggle your hips.)\n* (Gelatini wiggles back.)',
         '<33>{#p/basic}* What a meaningful conversation!'
      ],
      act_imitate: [
         '<33>{#p/human}* (You give Gelatini a nice pat.)\n* (Its body changes color...)',
         "<32>{#p/basic}* It's Gelatini's happy color!"
      ],
      act_slap: [
         '<32>{#p/human}* (You give Gelatini a big slap.)',
         '<32>{#p/basic}* Gelatini is jostled, but remains ultimately unfazed.'
      ],
      act_slap2: [
         '<32>{#p/human}* (You deliver your mightiest slap to Gelatini.)',
         '<32>{#p/basic}* Gelatini is shaken to its core!'
      ],
      act_slap3: [
         '<32>{#p/human}* (You deliver your mightiest slap to Gelatini.)',
         '<32>{#p/basic}* Gelatini flees the scene!'
      ],
      idleTalk1: ['<08>{#p/basic}{~}Blorb..'],
      idleTalk2: ['<08>{#p/basic}{~}Squorch..'],
      idleTalk3: ['<08>{#p/basic}{~}\x00*slime sounds*'],
      name: '* Gelatini',
      perilStatus: () =>
         world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
            ? ["<32>{#p/kidding}* This can't be good..."]
            : ['<32>{#p/story}* Gelatini has started to rot.'],
      sexyChat: ['<08>{#p/basic}{~}\x00*sexy wiggle*'],
      status1: () =>
         world.goatbro ? ['<32>{#p/asriel2}* Gelatini squared.'] : ["<32>{#p/story}* It's a pair of Gelatinis."],
      status2: () =>
         world.goatbro
            ? ['<32>{#p/asriel2}* Gelatini.']
            : world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
               ? ["<32>{#p/kidding}* Shh... it's thinking!"]
               : ['<32>{#p/story}* Gelatini blorbs quietly.'],
      status3: () =>
         world.goatbro ? ['<32>{#p/asriel2}* Gelatini.'] : ['<32>{#p/story}* Gelatini waits optimistically.'],
      status4: () =>
         world.goatbro
            ? ['<32>{#p/asriel2}* Gelatini.']
            : world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
               ? ['<32>{#p/kidding}* A blorb here, a blorb there...']
               : ['<32>{#p/story}* Gelatini is ruminating.'],
      status5: () =>
         world.goatbro
            ? ['<32>{#p/asriel2}* Gelatini.']
            : world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
               ? ['<32>{#p/kidding}* I wonder what Gelatinis are actually made of.']
               : ['<32>{#p/story}* The aroma of lime gelatin wafts through.'],
      status6: ['<32>{#p/story}* And then, there was one.'],
      status8: () =>
         world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
            ? ['<32>{#p/kidding}* Just us now!']
            : ['<32>{#p/story}* Gelatini now blorbs solo.']
   },
   b_opponent_spacetop: {
      epiphany: [
         ['<08>{#p/basic}{~}I can communi- cate else- where.'],
         () =>
            world.meanie
               ? ['<08>{#p/basic}{~}Warning broad- cast is well re- ceived!']
               : world.flirt > 9
                  ? ['<08>{#p/basic}{~}Ooh.. I like this kind of signal..']
                  : SAVE.data.b.oops
                     ? ["<08>{#p/basic}{~}I'm on your wave- length now!"]
                     : ['<08>{#p/basic}{~}The signal.. is right on top of me..'],
         ["<08>{#p/basic}{~}I'm just a waste of band- width.."],
         ["<08>{#p/basic}{~}I'll wire you the cash right away!"]
      ],
      act_check: () =>
         world.goatbro
            ? ['<32>{#p/asriel2}* Astro Serf, the attention- seeking astronaut. Cares for nothing but its antenna.']
            : ["<32>{#p/story}* ASTRO SERF - ATK 11 DEF 4\n* This teen wonders why it isn't named 'Radio Jack.'"],
      act_check2: ['<32>{#p/story}* ASTRO SERF - ATK 11 DEF 4\n* This teen seems to appreciate your sense of fashion.'],
      act_check3: ['<32>{#p/story}* ASTRO SERF - ATK 11 DEF 4\n* This teen is getting ALL the right signals.'],
      act_check4: [
         '<32>{#p/story}* ASTRO SERF - ATK 11 DEF 4\n* Attempting to hijack a public radio to call for help.'
      ],
      act_compliment: ['<32>{#p/human}* (You inform Astro Serf that it has a great antenna.)'],
      act_flirt: ['<32>{#p/human}* (You flirt with Astro Serf.)'],
      complimentTalk1: ["<08>{#p/basic}{~}DUH!\nWho DOESN'T know?"],
      complimentTalk2: ['<08>{#p/basic}{~}Envious?\nTOO BAD!'],
      createStatus1: () =>
         world.goatbro
            ? ['<32>{#p/asriel2}* Astro Serf.']
            : ["<32>{#p/story}* Astro Serf is secretly checking if you're looking at its antenna."],
      createStatus2: () =>
         world.goatbro ? ['<32>{#p/asriel2}* Astro Serf.'] : ['<32>{#p/story}* Astro Serf is impressed.'],
      createTalk1: ["<09>{#p/basic}{~}HELLO???\nMy antenna's up here."],
      createTalk2: ['<08>{#p/basic}{~}What?\nWhat are you doing?'],
      createTalk3: ["<08>{#p/basic}{~}But.. it can't be..!"],
      createTalk4: ['<08>{#p/basic}{~}Woah..\nHow did you do that??'],
      createTalk5: ["<08>{#p/basic}{~}You're.. making your OWN antenna?"],
      act_create: () =>
         [
            ['<32>{#p/human}* (You begin to fashion your own antenna.)', '<32>{#p/basic}* But... how?'],
            ['<32>{#p/human}* (You finish the antenna, and proceed to put it on.)'],
            [
               '<32>{#p/human}* (You start on another antenna.)',
               '<32>{#p/basic}* Not knowing what to do, Astro Serf runs away.'
            ]
         ][battler.target?.vars.create ?? 0],
      flirtStatus1: ['<32>{#p/story}* Astro Serf is not impressed by your attire.'],
      flirtStatus2: ['<32>{#p/story}* Astro Serf is in love.'],
      flirtTalk1: ['<08>{#p/basic}{~}No deal!\nNot without an antenna!'],
      flirtTalk2: ['<08>{#p/basic}{~}W-what??\nUm..\nI..\nYou..'],
      genoStatus: ['<32>{#p/asriel2}* Astro Serf.'],
      hurtStatus: () =>
         world.goatbro ? ['<32>{#p/asriel2}* Almost dead.'] : ["<32>{#p/story}* Astro Serf's suit is loose."],
      idleTalk1: ["<08>{#p/basic}{~}Where's YOUR antenna?"],
      idleTalk2: ['<08>{#p/basic}{~}Your head looks so ..NAKED'],
      idleTalk3: ['<08>{#p/basic}{~}What a great antenna!\n(Mine)'],
      idleTalk4: ["<09>{#p/basic}{~}It's signal feedback, not radi- ation"],
      idleTalk5: ['<08>{#p/basic}{~}I just looove my antenna.\nOK?'],
      justiceTalk: ['<08>{#p/basic}{~}What have you done..'],
      name: '* Astro Serf',
      randStatus1: ['<32>{#p/story}* Astro Serf also wants antennae for its other body parts.'],
      randStatus2: ['<32>{#p/story}* Astro Serf makes sure its antenna is still there.'],
      randStatus3: ['<32>{#p/story}* Astro Serf is thinking about a certain article of clothing.'],
      randStatus4: ['<32>{#p/story}* Smells like lithium.'],
      status1: ['<32>{#p/story}* Astro Serf struts into view.'],
      stealTalk1: ['<08>{#p/basic}{~}I KNEW IT!!!\nTHIEF!!'],
      stealTalk2: ['<08>{#p/basic}{~}HELP!!!\nFASHION POLICE!!'],
      act_steal: () =>
         battler.hurt.includes(battler.target!)
            ? [
               "<33>{#p/human}* (You steal Astro Serf's antenna.)\n* (Its spacesuit falls off.)",
               '<33>{#p/basic}* Looks like it was powered by lithium the whole time.'
            ]
            : ["<32>{#p/human}* (You try stealing Astro Serf's antenna, but it hasn't been weakened enough.)"]
   },
   b_opponent_space: {
      act_check: () =>
         world.goatbro
            ? ["<32>{#p/asriel2}* Lithium.\n* That's literally it."]
            : ['<32>{#p/story}* LITHIUM - ATK 1 DEF 0\n* Without its spacesuit...'],
      act_reassure: ['<32>{#p/human}* (You inform Lithium that it still looks fine.)'],
      genoStatus: ['<32>{#p/asriel2}* Lithium.'],
      happyStatus: ["<32>{#p/story}* Lithium doesn't mind its identity."],
      happyTalk1: ['<08>{#p/basic}{~}Yeah.. I like my body too.'],
      happyTalk2: ['<08>{#p/basic}{~}Hmm.. antennae are for posers.'],
      happyTalk3: ['<08>{#p/basic}{~}So I can still impress you?'],
      happyTalk4: ['<08>{#p/basic}{~}I wanted you to see me as cool.'],
      hurtStatus: () =>
         world.goatbro ? ['<32>{#p/asriel2}* Almost dead.\n* Again.'] : ["<32>{#p/story}* It's disintegrating."],
      idleTalk1: ['<08>{#p/basic}{~}I..\nI..'],
      idleTalk2: ['<08>{#p/basic}{~}What can I say..'],
      idleTalk3: ["<08>{#p/basic}{~}What's the point.."],
      idleTalk4: ['<08>{#p/basic}{~}So.. alone..'],
      name: '* Lithium',
      randStatus1: ['<32>{#p/story}* "Astro Serf" is no more.'],
      randStatus2: ['<32>{#p/story}* Smells like battery power.']
   },

   b_party_kidd: {
      mkNobody: ['<25>{#p/kidd}{#f/4}* Is it just me, or does it seem kinda empty around here...'],
      mkDeath1: [
         '<32>{#p/kidding}* Uh...',
         "<32>* Why'd they vanish like that?",
         '<32>* Well, we WERE attacking them, so maybe they got scared and teleported away, haha.'
      ],
      mkDeath2: ['<32>{#p/kidding}* Another one?', "<32>* Dang, why don't I get to have a cool teleporter!?"],
      mkDeath3: ["<32>{#p/kidding}* And they're gone..."],
      mkDeath4: ['<32>{#p/kidding}* ...'],
      mkDeath1OW: [
         '<25>{#p/kidd}{#f/4}* Uh...',
         "<25>* Why'd they vanish like that?",
         '<25>{#f/1}* Well, we WERE attacking them, so...',
         '<25>* Maybe they got scared and teleported away, haha.'
      ],
      mkDeath2OW: [
         '<25>{#p/kidd}{#f/4}* Another one?',
         "<25>{#f/1}* Dang, why don't I get to have a cool teleporter!?"
      ],
      mkDeath3OW: ["<25>{#p/kidd}{#f/4}* And they're gone..."],
      mkDeath4OW: ['<25>{#p/kidd}{#f/4}* ...'],
      mkBully1: [
         '<32>{#p/kidding}* Uh...',
         '<32>* They seemed really scared...',
         "<32>* I hope we didn't hurt them too badly or something..."
      ],
      mkBully2: ['<32>{#p/kidding}* That one too...!', '<32>* Are we hitting them too hard...?'],
      mkBully3: ['<32>{#p/kidding}* ...'],
      mkBully1OW: [
         '<25>{#p/kidd}{#f/4}* Uh...',
         '<25>* They seemed really scared...',
         "<25>* I hope we didn't hurt them too badly or something..."
      ],
      mkBully2OW: ['<25>{#p/kidd}{#f/7}* That one too...!', '<25>{#f/4}* Are we hitting them too hard...?'],
      mkBully3OW: ['<25>{#p/kidd}{#f/4}* ...'],
      mkShyrenDeath: ['<25>{#p/kidd}{#f/4}* Hey...', "<25>{#p/kidd}{#f/1}* Where's everybody going?"],
      mkMagic1: [
         "<32>{#p/kidding}* Yo... I don't know how to do any cool magic yet...",
         '<32>{#p/kidding}* But uh, I can heal you!'
      ],
      mkMagic2a: ['<32>{#p/kidding}* Healing spell!'],
      mkMagic2b: ['<32>{#p/kidding}* Health be with you!'],
      mkMagic2c: ['<32>{#p/kidding}* Take this!'],
      mkNope: ['<32>{#p/kidding}* Just leave me out of it...'],
      mkTurn1: ["<32>{#p/kidding}* Help, I've never been in a battle before!\n* What do I do!?"],
      mkTurn2: ['<32>{#p/kidding}* Uh... help!'],
      mkTurn3: ["<32>{#p/kidding}* I... think I'm getting the hang of this."],
      mkTurnAct1: ['<32>{#p/kidding}* Oh! Oh!', '<32>* I know how ACTing works!', '<32>* Watch this...!'],
      mkWeaken1: ["<32>{#p/kidding}* Are you sure...?\n* They don't seem to be happy about all this...", '<32>* ...'],
      mkWeaken2: ['<32>{#p/kidding}* Is this really a good idea...?', '<32>* ...'],
      mkWeaken3a: ['<32>{#p/kidding}* Uh...'],
      mkWeaken3b: ['<32>{#p/kidding}* Um...'],
      mkWeaken3c: ['<32>{#p/kidding}* Er...'],
      // defense down act
      mkTurnActRand1: (opponent: string) =>
         opponent === 'muffet' // NO-TRANSLATE
            ? [
               ['<32>{#p/story}* Monster Kid struggled in the web and made a scary face.'],
               ['<32>{#p/story}* Monster Kid struggled in the web and yelled.'],
               ['<32>{#p/story}* Monster Kid gave out a menacing laugh.']
            ]
            : opponent === 'shyren' // NO-TRANSLATE
               ? [
                  ['<32>{#p/story}* Monster Kid sang a scary tune.'],
                  ['<32>{#p/story}* Monster Kid yelled overly edgy lyrics.'],
                  ['<32>{#p/story}* Monster Kid drummed loudly with their feet.']
               ]
               : opponent === 'woshua' // NO-TRANSLATE
                  ? [
                     ['<32>{#p/story}* Monster Kid pointed out the dirty floors.'],
                     ['<32>{#p/story}* Monster Kid pointed out the leaky pipes.'],
                     ['<32>{#p/story}* Monster Kid made a gross face.']
                  ]
                  : [
                     ['<32>{#p/story}* Monster Kid stared $(x) directly in the face.'],
                     ['<32>{#p/story}* Monster Kid pointed at $(x) accusingly.'],
                     ['<32>{#p/story}* Monster Kid circled around $(x) like a predator.']
                  ],
      // attack down act
      mkTurnActRand2: (opponent: string) =>
         opponent === 'muffet' // NO-TRANSLATE
            ? [
               ['<32>{#p/story}* Monster Kid complimented Muffet on her eloquent taste in clothing.'],
               ['<32>{#p/story}* Monster Kid told Muffet her pastries are the best known to monsterkind.'],
               ["<32>{#p/story}* Monster Kid said no webs are as strong as Muffet's."]
            ]
            : opponent === 'shyren' // NO-TRANSLATE
               ? [
                  ['<32>{#p/story}* Monster Kid hummed a pretty melody.'],
                  ["<32>{#p/story}* Monster Kid complimented Shyren's hair."],
                  ["<32>{#p/story}* Monster Kid complimented Shyren's voice."]
               ]
               : opponent === 'woshua' // NO-TRANSLATE
                  ? [
                     ['<32>{#p/story}* Monster Kid called Skrubbington the cleanest monster on the block.'],
                     ["<32>{#p/story}* Monster Kid appreciated Skrubbington's efforts to freshen up the factory."],
                     ["<32>{#p/story}* Monster Kid noted Skrubbington's committment to perfection."]
                  ]
                  : opponent === 'radtile' // NO-TRANSLATE
                     ? [
                        ["<32>{#p/story}* Monster Kid complimented Radtile's mirror."],
                        ["<32>{#p/story}* Monster Kid complimented Radtile's hat."],
                        ["<32>{#p/story}* Monster Kid made sure to double-check Radtile's appearance."]
                     ]
                     : [
                        ['<32>{#p/story}* Monster Kid offered to keep $(x) company.'],
                        ["<32>{#p/story}* Monster Kid told $(x) they'd be there if it'd help."],
                        ['<32>{#p/story}* Monster Kid stood on top of $(x).']
                     ],
      // turn skip act
      mkTurnActRand3: (opponent: string) =>
         opponent === 'muffet' // NO-TRANSLATE
            ? [
               ['<32>{#p/story}* Monster Kid tried asking Muffet about spider clans.'],
               ['<32>{#p/story}* Monster Kid tried asking Muffet about bakeries.'],
               ['<32>{#p/story}* Monster Kid tried asking Muffet about tea.']
            ]
            : opponent === 'shyren' // NO-TRANSLATE
               ? [
                  ['<32>{#p/story}* Monster Kid debated about musical notation.'],
                  ['<32>{#p/story}* Monster Kid spoke about music theory.'],
                  ['<32>{#p/story}* Monster Kid discussed their favorite music genres.']
               ]
               : opponent === 'woshua' // NO-TRANSLATE
                  ? [
                     ['<32>{#p/story}* Monster Kid waxed poetic about proper hygiene.'],
                     ['<32>{#p/story}* Monster Kid rapped about hazard safety.'],
                     ['<32>{#p/story}* Monster Kid showed off their polished sewer pipe set.']
                  ]
                  : opponent === 'radtile' // NO-TRANSLATE
                     ? [
                        ['<32>{#p/story}* Monster Kid made an ugly face at Radtile.'],
                        ['<32>{#p/story}* Monster Kid came near and inspected Radtile up close.'],
                        ['<32>{#p/story}* Monster Kid acted out as if they were a feral creature.']
                     ]
                     : [
                        ['<32>{#p/story}* Monster Kid wiggled around, mimicing $(x).'],
                        ['<32>{#p/story}* Monster Kid did a handstand, impressing $(x).'],
                        ['<32>{#p/story}* Monster Kid spun around, bewildering $(x).']
                     ],
      // pacify act
      mkTurnActRand4: (opponent: string) =>
         opponent === 'muffet' // NO-TRANSLATE
            ? [["<32>{#p/story}* Monster Kid tried telling Muffet there's no point in all this!"]]
            : opponent === 'shyren' || opponent === 'radtile' // NO-TRANSLATE
               ? [['<32>{#p/story}* Monster Kid claimed a spatial distortion was approaching fast!']]
               : opponent === 'woshua' // NO-TRANSLATE
                  ? [['<32>{#p/story}* Monster Kid claimed an airborne viral agent was on its way!']]
                  : [['<32>{#p/story}* Monster Kid claimed the nearby pipes were leaking acid!']],
      mkTurnActResult0: ['<32>{#p/story}* Nothing happened.'],
      mkTurnActResult1: (opponent: string) =>
         opponent === 'woshua' // NO-TRANSLATE
            ? ["<32>{#p/story}* Skrubbington was grossed out!\n* Skrubbington's DEFENSE down!"]
            : opponent === 'shyren' // NO-TRANSLATE
               ? ["<32>{#p/story}* Shyren felt uncomfortable!\n* Shyren's DEFENSE down!"]
               : opponent === 'radtile' // NO-TRANSLATE
                  ? ["<32>{#p/story}* Radtile felt uncomfortable!\n* Radtile's DEFENSE down!"]
                  : ["<32>{#p/story}* $(x) felt uncomfortable!\n* $(x)'s DEFENSE down!"],
      mkTurnActResult2: (opponent: string) =>
         opponent === 'woshua' // NO-TRANSLATE
            ? ["<32>{#p/story}* Skrubbington felt flattered!\n* Skrubbington's ATTACK down!"]
            : opponent === 'shyren' // NO-TRANSLATE
               ? ["<32>{#p/story}* Shyren felt flattered!\n* Shyren's ATTACK down!"]
               : opponent === 'radtile' // NO-TRANSLATE
                  ? ["<32>{#p/story}* Radtile felt respected!\n* Radtile's ATTACK down!"]
                  : ["<32>{#p/story}* $(x) felt respected!\n* $(x)'s ATTACK down!"],
      mkTurnActResult3: (opponent: string, multiple: boolean) =>
         opponent === 'woshua' // NO-TRANSLATE
            ? multiple
               ? ['<32>{#p/story}* Skrubbington and the others were distracted by Monster Kid and forgot their turn!']
               : ['<32>{#p/story}* Skrubbington was distracted by Monster Kid and forgot their turn!']
            : opponent === 'shyren' // NO-TRANSLATE
               ? ['<32>{#p/story}* Distracted by Monster Kid, Shyren forgot her turn!']
               : multiple
                  ? ['<32>{#p/story}* Entranced by Monster Kid, $(x) and the others forgot their turn!']
                  : opponent === 'radtile' // NO-TRANSLATE
                     ? ['<32>{#p/story}* Entranced by Monster Kid, Radtile forgot his turn!']
                     : ['<32>{#p/story}* Entranced by Monster Kid, $(x) forgot their turn!'],
      mkTurnActResult4: (opponent: string, multiple: boolean, allowpac: boolean) =>
         opponent === 'woshua' // NO-TRANSLATE
            ? [
               '<32>{#p/story}* Fearful for its life, Skrubbington panicked and left the battle!',
               ...(multiple ? ['<32>{#p/story}* The other monsters continue to fight you.'] : [])
            ]
            : opponent === 'shyren' // NO-TRANSLATE
               ? allowpac
                  ? ['<32>{#p/story}* Fearful for her life, Shyren panicked and left the battle!']
                  : ['<32>{#p/story}* Encouraged by her own performance, Shyren braved the threat!']
               : opponent === 'radtile' // NO-TRANSLATE
                  ? ['<32>{#p/story}* Fearful for his life, Radtile panicked and left the battle!']
                  : [
                     '<32>{#p/story}* Fearful for its life, $(x) panicked and left the battle!',
                     ...(multiple ? ['<32>{#p/story}* The other monsters continue to fight you.'] : [])
                  ],
      mkTurnFight1: [
         '<32>{#p/kidding}* Y... y-you want me to fight?\n* Are you sure?',
         choicer.create('* (Do you confirm?)', 'Yes', 'No')
      ],
      mkTurnFight2a: ['<32>{#p/kidding}* Okay... here goes nothing...'],
      mkTurnFight2b: ['<32>{#p/kidding}* Oh, okay...', "<32>* I'll just spare them, then!"],
      mkTurnFight3a: ['<32>* Ngh...!'],
      mkTurnFight3b: ['<32>* Hi-yah...!'],
      mkTurnFight3c: ['<32>* Wa-POW!'],
      mkTurnMercy1: ['<32>{#p/kidding}* Mercy?\n* Do I spare them?', "<32>{#p/kidding}* Haha, that's easy!"],
      mkTurnX: [choicer.create('* (What should Monster Kid do?)', 'Mercy', 'Act', 'Magic', 'Fight')]
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
      start: '<32>{#s/phone}{#p/event}* Dialing...',
      end: '<32>{#s/equip}{#p/event}* Click...',
      nobody0: ['<32>{#p/human}* (Too much interference.)'],
      nobody1: ['<32>{#p/human}* (No response.)'],
      nobody2: ['<32>{#p/basic}* ... but nobody came.'],
      nobody3: ['<32>{#p/human}* (No connection.)'],
      nobody4: [
         '<32>{#p/human}* (It sounds like a small, white dog is sleeping on the cell phone.)',
         '<32>{#p/basic}* (Snore... snore...)',
         '<32>* (Snore... snore...)'
      ],
      nobody4a: [
         '<32>{#p/human}* (It sounds like a small, white dog is sleeping on the cell phone.)',
         '<32>{#p/basic}* (Snore... snore... snore...)',
         '<32>* (Snore... snore... snore...)'
      ],
      nobody4f: [
         '<32>{#p/human}* (It sounds like a small, white dog is sleeping on the cell phone.)',
         '<32>{#p/basic}* (Snore...!)',
         '<32>* (Snore...!)'
      ],
      nobody4m: [
         '<32>{#p/human}* (It sounds like a small, white dog is sleeping on the cell phone.)',
         '<32>{#p/basic}* (Snore...?)',
         '<32>* (Snore...?)'
      ],
      nobody4i: [
         '<32>{#p/human}* (It sounds like a small, white dog is sleeping on the cell phone.)',
         '<32>{#p/basic}* (Whimper.)',
         '<32>* (Whine.)'
      ],
      about1: [
         '<25>{#p/asgore}{#f/5}* About me?',
         '<25>{#f/7}* ... oh, but where would I begin?',
         '<25>{#f/6}* There is far too much to tell at once.',
         '<25>{#f/6}* Perhaps, over time, you will come to know me very well.',
         '<25>{#f/21}* It would be better than telling you everything at once.'
      ],
      about2: [
         '<25>{#p/asgore}{#f/5}* If you like, I can tell you something about myself later.',
         '<25>{#f/7}* How does that sound?'
      ],
      flirt1: [
         '<25>{#p/asgore}{#f/20}* ...',
         '<25>{#f/4}* Frisk.',
         '<25>{#f/6}* Surely there is someone more your age.',
         '<25>{#f/5}* I am not saying I cannot oblige, but...',
         '<25>{#f/6}* There is a world of difference between "can" and "should."'
      ],
      flirt2: [
         '<25>{#p/asgore}{#f/20}* Frisk.',
         '<25>{#f/20}* Perhaps when you are older, we may explore this further.',
         '<25>{#f/6}* But not now.'
      ],
      flirt3: [
         '<25>{#p/asgore}{#f/20}* Frisk.',
         '<25>{#f/6}* You call me "Dad," and then you flirt with me.',
         '<25>{#f/5}* I am not sure how to react to this.'
      ],
      hello: [
         ['<25>{#p/asgore}{#f/21}* A greeting, you say?', '<25>{#f/7}* Hmm...', '<25>{#f/6}* I give you a "Howdy!"'],
         ['<25>{#p/asgore}{#f/5}* Another greeting?', '<25>{#f/21}* I know...', '<25>{#f/6}* "How do you do!"'],
         [
            '<25>{#p/asgore}{#f/5}* ...',
            '<25>{#f/5}* At this rate, I am going to run out of greetings.',
            '<25>{#f/6}* Though, the birds outside may be more willing to oblige.',
            '<25>{#f/7}* Why not try with them?'
         ],
         ['<25>{#p/asgore}{#f/5}* ... howdy, little one.', '<25>{#f/6}* It is always nice to hear your voice.']
      ],
      dad1: [
         '<25>{#p/asgore}{#f/6}* ...',
         '<25>{#f/24}* ...',
         '<25>{#f/21}* Of course.',
         '<25>{#f/6}* I suppose it is only natural you would call me that.',
         '<25>{#f/6}* You may call me "Dad" if you want, Frisk.'
      ],
      dad2: [
         '<25>{#p/asgore}{#f/24}* ...\n* Goodness gracious.',
         '<25>{#f/6}* You seem very intent on me being your father.',
         '<25>{#f/21}* Fortunately, I had already planned to fill that role.'
      ],
      dad3: [
         '<25>{#p/asgore}{#f/24}* ...\n* Goodness gracious.',
         '<25>{#f/6}* You flirt with me, and then you call me "Dad."',
         '<25>{#f/5}* I am not sure how to react to this.'
      ],
      insult1: () =>
         SAVE.data.b.ufokinwotm8
            ? [
               '<25>{#p/asgore}{#f/1}* ...',
               '<25>{#f/1}* You seem very upset about something...',
               '<25>{#f/6}* If you like, we may talk once construction has come to an end.'
            ]
            : [
               '<25>{#p/asgore}{#f/8}* ...',
               '<26>{#f/6}* Ooh.\n* How dastardly of you.',
               '<25>{#f/21}* But do not worry...\n* I can tell you are only kidding with me.'
            ],
      insult2: () =>
         SAVE.data.b.ufokinwotm8
            ? ['<25>{#p/asgore}{#f/1}* ...', '<25>{#p/asgore}{#f/6}* I will be available to talk with you soon, okay?']
            : ['<25>{#p/asgore}{#f/21}* Now, now.\n* There is no need to be so brazen.']
   },

   i_water: {
      battle: {
         description: 'Smells like Dihydrogen Monoxide.',
         name: 'Water'
      },
      drop: ['<32>{#p/human}* (You throw away the Water.)'],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? ['<32>{#p/human}* (12 HP.)']
            : ['<32>{#p/basic}* "Water" Heals 12 HP\n* Smells like Di-Hydrogen Monoxide.'],
      name: 'Water',
      use: () => [
         '<32>{#p/human}* (You drank the Water.)',
         ...(SAVE.data.b.ufokinwotm8 ? [] : ["<33>{#p/human}* (You're filled with hydration.)"]) // credits to Anisaly
      ]
   },

   s_save_common: {
      _cockpit: {
         name: 'Deep Space',
         text: []
      },
      _frontier1: {
         name: 'Your Room',
         text: ["<32>{#p/human}* (You're filled with determination.)"]
      },
      _frontier8: {
         name: 'Eurybia',
         text: []
      }
   }
};
// END-TRANSLATE

export default text;
