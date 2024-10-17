import { asrielinter, helmetdyne, helmetdyneAttack } from '../../../code/common/api';
import {
   armorprice,
   badSpider,
   dogecon,
   dogex,
   geno,
   ghostpartyCondition,
   respecc,
   temgone
} from '../../../code/foundry/extras';
import { game, rng } from '../../../code/systems/core';
import {
   antiAteThreshold,
   battler,
   choicer,
   fetchCharacters,
   pager,
   player,
   postSIGMA,
   roomKills,
   world
} from '../../../code/systems/framework';
import { SAVE } from '../../../code/systems/save';

// START-TRANSLATE
export default {
   a_foundry: {
      locketseller: ['>{#p/basic}* ...', ">{#p/basic}* I'm going to pretend you didn't just sell that locket."],
      noequip: ['>{#p/human}* (You decide not to equip.)'],
      darktoriel1: [
         ">{#p/human}* (You grab Toriel's hand.)",
         '>{#p/toriel}{#f/2}* Oh my...!\n* F-frisk, is that you?',
         ">{#f/1}* It's a little hard to see in here..."
      ],
      darktoriel2: [
         '>{#p/toriel}{#f/9}* I apologize. You must have been looking all over for me.',
         '>{#f/9}* If you tried to call me, I had my phone turned off.',
         '>{#f/13}* ...',
         '>{#f/13}* I am sorry for all that I did, little one.',
         '>{#f/13}* Even if you forgive me, it would be difficult to accept it.',
         '>{#f/9}* I am only beginning to come to terms with my behavior in the past.',
         '>{#f/10}* ...',
         '>{#f/10}* I suppose it is nice to see you here.'
      ],
      darktoriel3: [
         '>{#p/toriel}{#f/5}* ... huh?\n* You wanted me to call... Sans?',
         '>{#f/1}* Let me turn it on...'
      ],
      darktoriel4a: [
         '>{#s/phone}{#p/event}* Dialing...',
         '>{#p/toriel}{#f/3}* ... oh, right.\n* My phone does not work very well here.'
      ],
      darktoriel4b: [
         '>{#f/4}* I will have to go up there and talk to him myself.',
         '>{#f/5}* Er... I will do so.\n* But not now.',
         '>{#f/5}* ...'
      ],
      darktoriel5a: [
         '>{#p/toriel}{#f/5}* ... huh?\n* You have something else to tell me?',
         '>{#p/human}* (You repeat the advice given to you by Toriel in Archive Six.)',
         '>{#p/toriel}{#f/2}* ...',
         '>{#f/1}* Those words...',
         '>{#f/1}* How could you possibly have heard them...?',
         '>{#f/0}* It has been nearly a century since I have spoken those words.',
         '>{#f/5}* ...',
         '>{#f/1}* Well...\n* I will keep what you have told me in mind.'
      ],
      darktoriel5b: ['>{#p/toriel}{#f/1}* Well, it would be a good time for you to go.'],
      darktoriel6: [
         '>{#f/5}* I know the transport ship is leaving soon, and I will not miss it.',
         '>{#f/9}* For now, however, I must collect my thoughts.',
         '>{#f/1}* ... thank you for being good, Frisk.\n* You have been the best.'
      ],
      darktoriel7: () =>
         SAVE.data.b.c_state_secret1_used
            ? [
               '>{#p/toriel}{#f/10}* Do not worry, Frisk.\n* I will be okay.',
               '>{#f/1}* I will see you on the transport ship.\n* Alright?'
            ]
            : [
               '>{#p/toriel}{#f/5}* Frisk, you must allow me time to process.',
               '>{#f/1}* I will see you on the transport ship.\n* Alright?'
            ],
      ghostpartymusic1: [
         '>{#p/finalghost}* Ah, the classic.\n* Not just "a" spooktune, but "the" spooktune.',
         '>* The original, you might say.'
      ],
      ghostpartymusic2: [
         '>{#p/mettaton}{#e/mettaton/9}* NOW THIS IS SOMETHING I CAN REALLY "VIBE" TO, AS BLOOKY WOULD SAY.',
         ">{#e/mettaton/36}* IT'S GOT JUST THE RIGHT MIX OF ELEMENTS...",
         '>{#e/mettaton/8}* AND THE BREAKDOWN?',
         '>{#e/mettaton/9}* NOT WHAT I WOULD HAVE GONE FOR, BUT DECENT NONETHELESS.'
      ],
      ghostpartymusic3: [
         '>{#p/basic}{#e/maddummy/1}* I always thought this one felt really slow, you know?',
         '>* Just... super... duper... slow.',
         ">{#e/maddummy/0}* But that's just me."
      ],
      evac: ['>{#p/human}* (You feel the nearby monster presence dwindling.)'],
      shopclosed: ['>{#p/human}* (But there was nothing left for you to do here.)'],
      starKILLER: ['>{#p/basic}{#npc/a}* The grass is fading faster than I had thought.'],
      quicksolve3: () =>
         postSIGMA()
            ? [">{#p/basic}* It's out of service."]
            : SAVE.data.b.svr
               ? ['>{#p/human}* (The terminal appears to have been powered off.)']
               : [
                  '>{#p/human}* (You activate the terminal.)',
                  '>{#p/basic}* "Pathway unlocked!"\n* "No further action required."'
               ],
      quicksolve4: ['>{#p/human}* (You activate the terminal.)', '>{#p/basic}* "Enter override code!"'],
      quicksolve5: [
         '>{#p/basic}* ...',
         '>{#p/basic}* If only you knew a puzzle officionado who could tell you what that code might be.'
      ],
      quicksolve6: () => ['>{#p/basic}* ...', choicer.create('* (Enter the code?)', 'Yes', 'No')],
      quicksolve7: ['>{#p/human}* (You decide not to enter.)'],
      quicksolve8: [">{#p/basic}* Well, that's a mercy."],
      escape: [
         '>{#p/event}* Ring, ring...',
         '>{#p/alphys}* H-hey... are you there?',
         '>* I know you want to keep going forward, but...',
         ">* If you do, she'll... try to kill you...",
         ">* I tried to stop her... b-but she wouldn't listen to me!",
         ">* Now she's...",
         '>* ...',
         ">* But, uh, it's okay!\n* Because...",
         ">* B-because there's another way to get past her!",
         ">* I know it'd be kind of...\n* Inconvenient...",
         ">* But it's the only way you'll make it out alive...!",
         '>* T-trust me... okay?',
         '>* Go back to the balcony j-just before the pylon puzzle.',
         ">* If you don't, I...",
         '>* I...',
         ">* I'll... let you go now.\n* Good luck...",
         '>{#s/equip}{#p/event}* Click...'
      ],
      artifact1: ['>{#p/human}* (You got the Legendary Artifact.)'],
      artifact2: [">{#p/human}* (You're carrying too much to take that.)"],
      artifact3: () =>
         SAVE.data.b.svr
            ? ['>{#p/human}* (The inscription describes a riddle of ivories and melodies.)']
            : [
               '>{#p/basic}* There is a inscription inscribed on the pedastal.',
               '>* "Two halves, split by the ivories."',
               '>* "If the prince\'s is your left, then whose is your right?',
               '>* "And what is their melody?"'
            ],
      tome0: () =>
         SAVE.data.b.svr
            ? [">{#p/human}* (It seems there's something missing here.)"]
            : ['>{#p/basic}* The tome is attached firmly to the pedastal.'],
      tome1: () =>
         SAVE.data.b.svr
            ? ['>{#p/human}* (But the tome seems to have been taken.)']
            : [
               '>{#p/human}* (You acquired The Epiphany.)',
               ...(world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
                  ? ['>{#p/kidd}{#f/2}* Haha.', '>{#f/2}* That thing must be REALLY old.']
                  : [])
            ],
      tome2: [">{#p/human}* (You're carrying too much to take that.)"],
      tome3: () =>
         SAVE.data.b.svr
            ? ['>{#p/human}* (The inscription speaks of peace and good intentions.)']
            : [
               '>{#p/basic}* There is a writ inscribed on the pedastal.',
               '>* "To those who are worthy, to those who are kind."',
               '>* "To those who wish well, in both heart and mind."',
               '>* "May peace follow you on your journey home."'
            ],
      tome4: () => [
         choicer.create(
            '* (What do you intend to do?)',
            'Spare',
            world.meanie ? 'Bully' : world.flirt > 9 ? 'Flirt' : SAVE.data.b.oops ? 'Befriend' : 'Hug',
            'Kill',
            'Take Gold'
         )
      ],
      tome5a: '>{#p/human}* (You focus your mind on the intent to spare.)',
      tome5b: () =>
         world.meanie
            ? '>{#p/human}* (You focus your mind on the intent to bully.)'
            : world.flirt > 9
               ? '>{#p/human}* (You focus your mind on the intent to flirt.)'
               : SAVE.data.b.oops
                  ? '>{#p/human}* (You focus your mind on the intent to befriend.)'
                  : '>{#p/human}* (You focus your mind on the intent to hug.)',
      tome5c: '>{#p/human}* (You focus your mind on the intent to kill.)',
      tome5d: '>{#p/human}* (You focus your mind on the intent to take gold.)',
      tome5e: '>{#p/basic}* Suddenly...!',
      tome5f: '\n* (Nothing happens.)',
      astrofood0: () => [
         ">{#p/human}* (You can't make out what's in the box...)",
         choicer.create('* (Take something out?)', 'Yes', 'No')
      ],
      astrofood1: () =>
         [
            [
               '>{#p/basic}* There are three portions of Space Tofu in the box.',
               choicer.create('* (Take one?)', 'Yes', 'No')
            ],
            [
               '>{#p/basic}* There are two portions of Space Tofu left in the box.',
               choicer.create('* (Take one?)', 'Yes', 'No')
            ],
            [
               '>{#p/basic}* There is one portion of Space Tofu left in the box.',
               choicer.create('* (Take it?)', 'Yes', 'No')
            ]
         ][SAVE.data.n.state_foundry_astrofood],
      astrofood2: ['>{#p/human}* (You got the Space Tofu.)'],
      astrofood3: [">{#p/human}* (You're carrying too much.)"],
      astrofood4: () => ['>{#p/human}* (You decide not to take anything.)'],
      astrofood5: () =>
         SAVE.data.b.svr
            ? [">{#p/human}* (But you couldn't find anything inside.)"]
            : ['>{#p/basic}* The box is empty.'],
      bird1: () => [
         ...(SAVE.data.b.svr ? [] : ['>{#p/basic}* This small bird wants to carry you across the gap.']),
         choicer.create("* (Accept the bird's offer?)", 'Yes', 'No')
      ],
      blookdate1: () =>
         world.sad_ghost || world.population === 0
            ? [
               '>{#p/napstablook}* oh...\n* hi there...',
               ">* sorry, i...\n* wasn't expecting you to follow me here.",
               '>* uh...\n* make yourself at home...?'
            ]
            : [
               '>{#p/napstablook}* oh...\n* you actually came...',
               ">* sorry, i...\n* wasn't expecting that.",
               ">* it's not much, but make yourself at home."
            ],
      blookdate2: () => [
         ...(world.sad_ghost || world.population === 0
            ? ['>{#p/napstablook}* oh... you want my food...', '>* let me see what i have...']
            : SAVE.data.b.f_state_ghostsleep
               ? ['>{#p/napstablook}* okay, so...', ">* let me show you what's in the fridge"]
               : ['>{#p/napstablook}* are you hungry?', '>* i think i have something in the fridge...'])
      ],
      blookdate2x: pager.create(
         0,
         () =>
            SAVE.data.b.svr
               ? [
                  ">{#p/human}* (You inspect the fridge.)\n* (It doesn't seem like you can exactly see the contents.)"
               ]
               : [
                  '>{#p/human}* (You inspect the fridge.)',
                  ">{#p/basic}* It's difficult to make out what's inside.",
                  ...(ghostpartyCondition()
                     ? [
                        ">{#p/mettaton}{#e/mettaton/8}* THERE'S PROBABLY NOTHING BUT GHOST FOOD IN THERE, DARLING.",
                        ">{#p/mettaton}{#e/mettaton/9}* IF YOU TRIED TO EAT IT, IT'D JUST PHASE THROUGH YOU."
                     ]
                     : [])
               ],
         () =>
            SAVE.data.b.svr
               ? [
                  ">{#p/human}* (You inspect the fridge.)\n* (It doesn't seem like you can exactly see the contents.)"
               ]
               : [
                  '>{#p/human}* (You inspect the fridge.)',
                  ">{#p/basic}* It's difficult to make out what's inside."
               ]
      ),
      blookdate3: () => [
         ">{#p/napstablook}* it's a ghost sandwich...",
         '>* do you want to try it...',
         choicer.create('* (Take a bite?)', 'Yes', 'No')
      ],
      blookdate4a: [
         '>{#p/human}* (You attempt to bite into the ghost sandwich.)',
         '>{#p/human}* (You phase right through it.)',
         '>{#p/napstablook}* oh...',
         '>* nevermind...'
      ],
      blookdate4b: ['>{#p/napstablook}* oh...........'],
      blookdate5: () => [
         '>{#p/napstablook}* after a great meal i like to lie on the ground and feel like garbage...',
         ">* it's a family tradition...",
         '>* do you want...\n* ... to join me...?',
         choicer.create('* (What do you say?)', 'Yes', 'No')
      ],
      blookdate6a: ['>{#p/napstablook}* okay...\n* follow my lead...'],
      blookdate6b: ['>{#p/napstablook}* oh......................', ">* i'll just be outside then"],
      blookdate7: [
         ">{#p/napstablook}* here we go...\n* you'll lie down as long as you don't move.",
         '>* so...\n* only move around when you want to get up, i guess.'
      ],
      blookdate8: ['>{#p/napstablook}* well, that was nice...', '>* thank you...'],
      blookdate8x: ['>{#p/napstablook}* well, that was fast......', '>* thanks for trying, though......'],
      blookdate8y: ['>{#p/napstablook}* well, that was that', '>* ............'],
      blookdate9: [
         ">{#p/napstablook}* i'll be outside...\n* feel free to join me...\n* or not...",
         ">* it's up to you..."
      ],
      blookmusic0: [">{#p/basic}* It's out of service."],
      blookmusic1: () => [
         SAVE.data.b.svr
            ? '>{#p/human}* (You reach for the sound system...)'
            : '>{#p/basic}* There is currently no music playing.',
         choicer.create('* (Play a song?)', 'Spooktune', 'Spookwave', 'Spookwaltz', 'Cancel')
      ],
      blookmusic1y: ['>{*}{#p/human}* (You turn the dial...){^40}{%}'],
      blookmusic2: () => [
         SAVE.data.b.svr
            ? '>{#p/human}* (It sounds like a song is currently playing.)'
            : [
               '>{#p/basic}* Currently playing "Spooktune"',
               '>{#p/basic}* Currently playing "Spookwave"',
               '>{#p/basic}* Currently playing "Spookwaltz"'
            ][SAVE.data.n.state_foundry_blookmusic - 1],
         choicer.create('* (Stop playback?)', 'Yes', 'No')
      ],
      blookmusic3a: [
         '>{#p/napstablook}* oh...\n* a classic spooktune...',
         ">* they really don't make music like this anymore..."
      ],
      blookmusic3b: ['>{#p/napstablook}* dang, that ambience...', ">* it's like my whole body is being spooked"],
      blookmusic3c: [
         ">{#p/napstablook}* this one's kinda slow...",
         ">* but once you get into the groove, it's pretty good"
      ],
      blookmusic3d: [
         '>{#p/napstablook}* hey...\n* you really like listening to that old playlist, huh',
         ">* i mean......\n* i've made better stuff since then.....",
         '>* but still, i appreciate it',
         '>* so... thanks, heh'
      ],
      blooksnail1: pager.create(
         0,
         () => [
            ">{#p/napstablook}* do you want to play a game?\n* it's called electrosnail.",
            '>* the snails will race, and if the yellow snail wins, you win.',
            ">* it's 10G to play.",
            choicer.create('* (Play the game?)', 'Yes', 'No')
         ],
         () => ['>{#p/napstablook}* did you change your mind?', choicer.create('* (Play the game?)', 'Yes', 'No')]
      ),
      blooksnail1i: () => [
         '>{#p/napstablook}* do you want to play again?',
         choicer.create('* (Play the game?)', 'Yes', 'No')
      ],
      blooksnail2a: [
         ">{#p/napstablook}* um...\n* you don't have enough money......",
         ">* n-no, you can still play, don't worry about it..."
      ],
      blooksnail2b: ['>{#p/napstablook}* oh...........'],
      blooksnail2b0: ['>{#p/napstablook}* alright...........'],
      blooksnail3: ['>{#p/napstablook}* okay...\n* press [Z] repeatedly to encourage your snail.', '>* ready?'],
      blooksnail3i: ['>{#p/napstablook}* okay...\n* remember, you can always encourage your snail.', '>* ready?'],
      blooksnail4a: [
         '>{#p/napstablook}* you won... congratulations.',
         '>* i hope the prize is enough...',
         '>{#s/equip}{#p/human}* (You got 20G.)'
      ],
      blooksnail4b: [
         '>{#p/napstablook}* your snail lost by a thin margin.',
         '>* wait...\n* the snail is under the false belief that it won...',
         '>* oh no... the snail is going to be sad...',
         ">* here, i'll just give you some money...\n* act like you won...",
         '>{#s/equip}{#p/human}* (You got 40G.)'
      ],
      blooksnail4c: [
         '>{#p/napstablook}* oh...........\n* you both tried your best...',
         '>* the snail looks discouraged...',
         ">* i guess her best wasn't good enough...",
         '>* oh...........'
      ],
      blooksnail4d: [
         '>{#p/napstablook}* oh...........\n* looks like you encouraged your snail a little too much...',
         '>* all that pressure to succeed...\n* really got to her...',
         '>* oh...........'
      ],
      blooksnail4e: [
         '>{#p/napstablook}* oh...........\n* looks like you encouraged your snail too much...',
         ">* she won't even look at you...",
         '>* oh...........'
      ],
      blooksnail4f: [
         '>{#p/napstablook}* oh...........\n* looks like you encouraged your snail way too much...',
         ">* now she's... just gone...",
         '>* oh...........'
      ],
      blooksnailX: {
         a: '3...',
         b: '2...',
         c: '1...',
         d: 'GO!',
         e: 'RACE END'
      },
      blooksorry1: () => [
         '>{#p/napstablook}* ...?',
         ">* you...\n* you're...",
         '>* ... are you sure?',
         choicer.create('* (What do you say?)', 'Yes', 'No')
      ],
      blooksorry2: () => [
         '>{#p/napstablook}* i...',
         ">* i never thought you'd...",
         '>* ... um...',
         '>* ... are you absolutely sure?',
         choicer.create('* (What do you say?)', 'Yes', 'No')
      ],
      blooksorry3: [
         '>{#p/napstablook}* you...',
         ">* you really mean it, don't you?",
         '>* ...\n* heh...',
         '>* okay...',
         ">* i'll try to forget about what you did before..."
      ],
      blooksorryX: ['>{#p/napstablook}* oh...........\n* ...........\n* ...........'],
      blooksorryY: ['>{#p/napstablook}* ...'],
      blooktouch1: () =>
         world.sad_ghost
            ? [
               '>{#p/napstablook}* what do you want......',
               choicer.create('* (What do you say?)', 'Sorry', 'Nothing')
            ]
            : [
               '>{#p/napstablook}* oh, do you need anything?',
               choicer.create('* (What do you say?)', 'Hug', 'Sleep', 'Music', 'Nothing')
            ],
      blooktouch2a1: [
         '>{#p/napstablook}* you... want to...\n* umm...',
         '>* you want me to give you a hug?',
         ">* well...\n* if it'll make you happy...",
         '>{#p/basic}* Napstablook attempts to give you a big hug.',
         '>* They pass right through you.',
         '>{#p/napstablook}* oh...........',
         ">* i guess...........\n* i can't do it..........."
      ],
      blooktouch2a2: [
         ">{#p/napstablook}* you really need a hug, don't you...",
         ">* i'm sorry...\n* i wish i could..."
      ],
      blooktouch2b1: [
         '>{#p/napstablook}* do you need a place to sleep?',
         ">* umm... i don't really have a bed in here...",
         '>* hmm...',
         ">* go to the fridge and see if there's anything to eat...",
         '>* after that, we can lie down on the ground...',
         ">* you'll see..."
      ],
      blooktouch2b2: ['>{#p/napstablook}* the fridge...'],
      blooktouch2c1: [
         ">{#p/napstablook}* if you wanna listen to music, there's some on my stereo...",
         '>* feel free to take a look...\n* or not...'
      ],
      blooktouch2c2: () => [
         '>{#p/napstablook}* is the stereo...\n* ... not to your liking...',
         ">* maybe...\n* i could show you a new song i've been working on...",
         ">* it's way different than my usual stuff...",
         '>* do you want to hear it?',
         choicer.create('* (What do you say?)', 'Yes', 'No')
      ],
      blooktouch2c2x: () => [
         '>{#p/napstablook}* want to hear my new song?',
         choicer.create('* (What do you say?)', 'Yes', 'No')
      ],
      blooktouch2c3a: ['>{#p/napstablook}* oh...\n* well, let me know if you change your mind...'],
      blooktouch2c3b: ['>{#p/napstablook}* okay...\n* let me put it on...'],
      blooktouch2c4: () => [
         '>{#p/napstablook}* so... what did you think',
         choicer.create('* (What do you say?)', 'Good', 'Bad')
      ],
      blooktouch2c5a: [
         ">{#p/napstablook}* it's... not bad?",
         '>* oh-\n* umm... thank you...',
         ">* i'll...\n* i'll tell you when it's done!"
      ],
      blooktouch2c5b: [">{#p/napstablook}* oh.........\n* you're probably right........."],
      blooktouch2d1: [">{#p/napstablook}* sorry...\n* that's all the music i have for now..."],
      blooktouch2d2: [">{#p/napstablook}* sorry...\n* i'll try to make something better next time..."],
      blookyard1: pager.create(
         0,
         () =>
            SAVE.storage.inventory.contents.includes('tvm_mewmew') // NO-TRANSLATE
               ? [
                  '>{#p/napstablook}* you can keep your mew mew doll',
                  '>{#p/napstablook}* thanks for...\n* not being helpful, i guess'
               ]
               : 65 <= SAVE.data.n.plot
                  ? SAVE.data.b.a_state_hapstablook
                     ? 68 <= SAVE.data.n.plot
                        ? [
                           '>{#p/napstablook}* hey, mettaton came by a little while ago.',
                           ">* we talked for a bit about what we've been up to...",
                           '>* about the family...',
                           ">* well, i don't think i've ever been this happy before.",
                           '>* what you did for us back there... it means a lot.'
                        ]
                        : [
                           ">{#p/napstablook}* hey... sorry things didn't work out the way we hoped...",
                           '>* it was nice to have you there, though......'
                        ]
                     : [
                        '>{#p/napstablook}* with every day that goes by, i feel a little farther away from happiness......'
                     ]
                  : 63 <= SAVE.data.n.plot && SAVE.data.b.a_state_hapstablook
                     ? ['>* oh...\n* hey......', '>* i just came back here to keep an eye on the snails......']
                     : 60 <= SAVE.data.n.plot
                        ? [
                           ">{#p/napstablook}* being a contestant on one of mettaton's shows was a dream come true...",
                           ">* i wonder if i'll ever get to do it again"
                        ]
                        : 49 <= SAVE.data.n.plot
                           ? [
                              '>{#p/napstablook}* dang, you sure get around',
                              '>* i mean...',
                              '>* i guess i do too...',
                              ">* but, i'm kind of incorporeal, so it's not that impressive for me"
                           ]
                           : [
                              '>{#p/napstablook}* welcome to blook family snail farm...',
                              ">* ... yeah.\n* i'm the only employee.",
                              ...(world.killed0
                                 ? [
                                    ">* hey, that's weird...",
                                    '>* my snails disappeared...',
                                    '>* maybe they were picked up by that guy with a beard...'
                                 ]
                                 : [
                                    '>* this place used to get a lot of business...',
                                    '>* but our main customer disappeared one day...',
                                    ">* now it's just some hairy guy who shows up once in a while..."
                                 ])
                           ],
         () =>
            SAVE.storage.inventory.contents.includes('tvm_mewmew') // NO-TRANSLATE
               ? ['>{#p/napstablook}* ............']
               : 65 <= SAVE.data.n.plot
                  ? SAVE.data.b.a_state_hapstablook
                     ? 68 <= SAVE.data.n.plot
                        ? [">{#p/napstablook}* hopefully next time you won't have to risk your life."]
                        : ['>{#p/napstablook}* it is what it is...']
                     : ['>{#p/napstablook}* it is what it is...']
                  : 63 <= SAVE.data.n.plot && SAVE.data.b.a_state_hapstablook
                     ? [">{#p/napstablook}* don't worry, they're alright...", '>* at least, i hope so......']
                     : 60 <= SAVE.data.n.plot
                        ? [">{#p/napstablook}* hopefully next time he's a little nicer to the contestants........."]
                        : 49 <= SAVE.data.n.plot
                           ? [
                              '>{#p/napstablook}* oh yeah, i saw you on that talent show earlier...',
                              ...(SAVE.data.n.state_aerialis_talentfails === 0
                                 ? [
                                    ">{#p/napstablook}* that was quite a performance... you didn't even mess up once",
                                    ">* i don't think i've ever someone do that before......"
                                 ]
                                 : SAVE.data.n.state_aerialis_talentfails < 15
                                    ? [
                                       ">{#p/napstablook}* even if your performance wasn't perfect, you did pretty good",
                                       ">* most of mettaton's contestants don't even make it halfway...",
                                       '>* including me......'
                                    ]
                                    : [
                                       ">{#p/napstablook}* even if your performance wasn't the greatest, i could tell you were trying your best",
                                       '>* and besides, you made it to the end...',
                                       '>* unlike me......'
                                    ])
                           ]
                           : world.killed0
                              ? [
                                 ">{#p/napstablook}* oh hey...\n* that rhymed, didn't it...",
                                 '>* i guess i could make a song about this... or not...'
                              ]
                              : [
                                 '>{#p/napstablook}* a friend of mine recently told me it was the king...',
                                 ">* but that can't be true\n* he wouldn't even know me..."
                              ],
         () =>
            SAVE.storage.inventory.contents.includes('tvm_mewmew') // NO-TRANSLATE
               ? ['>{#p/napstablook}* ............']
               : 65 <= SAVE.data.n.plot
                  ? SAVE.data.b.a_state_hapstablook && 68 <= SAVE.data.n.plot
                     ? ['>{#p/napstablook}* i wish i had more to say...']
                     : ['>{#p/napstablook}* it is what it is...']
                  : 60 <= SAVE.data.n.plot
                     ? ['>{#p/napstablook}* .........']
                     : 49 <= SAVE.data.n.plot
                        ? SAVE.data.n.state_aerialis_talentfails === 0
                           ? ['>{#p/napstablook}* congratulations, i guess']
                           : ['>{#p/napstablook}* ......']
                        : ['>{#p/napstablook}* i wish i had more to say...']
      ),
      boots1: () => [
         '>{#p/human}* (You got the Hoverboots.)',
         choicer.create('* (Equip the Hoverboots?)', 'Yes', 'No')
      ],
      boots2: [">{#p/human}* (You're carrying too much to take that.)"],
      bruh: ['>{*}{#p/undyne}* See you soon.{^20}{%}'],
      candy1: () =>
         postSIGMA()
            ? [">{#p/basic}* It's out of service."]
            : SAVE.data.b.svr
               ? [
                  '>{#p/human}* (You approach the vending machine.)',
                  choicer.create('* (What will you make?)', 'Licorice', 'Chisps', 'Rations', 'Nothing')
               ]
               : [
                  '>{#p/basic}* Synthesize something with the vending machine?',
                  choicer.create('* (What will you make?)', 'Licorice', 'Chisps', 'Rations', 'Nothing')
               ],
      candy2: ['>{#p/human}* (You got the $(x).)'],
      candy3: () => [choicer.create('* (Buy the $(x) for $(y)G?)', 'Yes', 'No')],
      candy4: [">{#p/human}* (You don't have enough G.)"],
      candy5: ['>{#p/human}* (You decide not to buy.)'],
      candy6: [">{#p/human}* (You're carrying too much.)"],
      candy7: ['>{#p/human}* (You decide not to make anything.)'],
      deathReaction: {
         f_bird: ['>{#p/basic}* This small bird no longer wants to carry you across the gap.'],
         // each line of this is processed one-at-a-time
         f_blooky: [
            '>{#p/basic}{#npc/a}* Did you hear about Undyne?',
            '>{#p/basic}{#npc/a}* Oh, not at all!',
            ">{#p/basic}{#npc/a}* I heard she's doing well.",
            '>{#p/basic}{#npc/a}* Sounds good to me!',
            '>{#p/basic}{#npc/a}* Undyne will never die.',
            '>{#p/basic}{#npc/a}* Indeed not!'
         ],
         f_dummy: [
            '>{#p/basic}{#npc/a}* Fatal energy signature detected.',
            '>* Name... Undyne.',
            '>* Relationship status... "BESTIES!!!"',
            '>* Last interaction... asked about humans.',
            '>* Time to compensate for loss...',
            '>* Indeterminate.'
         ],
         f_hub: [
            ">{#p/basic}{#npc/a}* Wh...\n* What've you done!?",
            ">* Ole' Gerson's not gonna be a happy camper after that..."
         ],
         f_snail: () => [
            '>{#p/basic}* ...',
            SAVE.data.b.f_state_thundersnail_win
               ? ">* I'll make sure you NEVER win another game of electrosnail."
               : ">* I'll make sure you NEVER win a game of electrosnail."
         ],
         f_undyne: [
            '>{#p/basic}* No.\n* No!\n* NO!!!',
            '>* What. Have. You. DONE???',
            '>* She was...',
            '>* She was my FAVORITE bully!\n* How dare you take her away from me like that!?'
         ]
      },
      dummy1x: () =>
         SAVE.data.n.state_wastelands_dummy === 4
            ? [
               '>{#p/basic}* Gah!\n* I just KNEW you were going to do that!!',
               '>* What an IMBECILE!!!\n* You just hugged someone with haphephobia!!!!',
               ">* Guooohh, you're gonna PAY."
            ]
            : [
               '>{#p/basic}* Gah!\n* Why would you EVER do that!?',
               ">* Don't you know who I am!?!?\n* You just hugged someone with haphephobia!!!!",
               ">* Guooohh, you're gonna PAY."
            ],
      dummy1a: () =>
         SAVE.data.n.state_wastelands_dummy === 2
            ? [">{#p/basic}* HA!\n* Of course you'd run away.", '>* Whatever, DUMMY.']
            : ['>{#p/basic}* You DARE enter my territory and WALK PAST me?', '>* FOOL!'],
      dummy1b: () =>
         SAVE.data.n.state_wastelands_dummy === 1
            ? ['>{#p/basic}* Too intimidated to fight...?', '>* I see how it is.']
            : ['>{#p/basic}* You DARE enter my territory and STARE at me?', '>* FOOL!'],
      dummy1c: () =>
         SAVE.data.n.state_wastelands_dummy === 1
            ? ['>{#p/basic}* I thought you might do that.', '>* Predictable.\n* Predictable!\n* PREDICTABLE!!!']
            : [
               ">{#p/basic}* Well well well, I see there's more to you than just talk.",
               ">* Not that it'll do you much good when I STOMP you!"
            ],
      dummy2: () => [
         '>{#p/basic}* Those ELITE bozos failed to take your SOUL, but they lack something I have in SPADES!',
         ">* That's right, human...\n* I'm INCORPOREAL!",
         '>* I am a ghost that lives inside a dummy!',
         '>* My cousin also lived inside a dummy, UNTIL...!',
         ...(SAVE.data.n.state_wastelands_toriel === 0
            ? [
               '>* Until...!',
               '>* Until...',
               '>{#x1}* ... well, actually, they left it on their own accord...',
               '>* Apparently, this really nice woman decided to take care of them in the Outlands?',
               '>* They said a human helped her feel better.',
               ">* That was you, wasn't it?",
               '>* ... shucks.\n* I guess you can go peacefully...'
            ]
            : [
               '>* YOU CAME ALONG!!!',
               ...(16 <= SAVE.data.n.kills_wastelands
                  ? [
                     '>* Not only did YOUR actions cause them to leave their home...',
                     '>* But now all of their neighbors are gone, too!',
                     '>* Despicable.\n* Despicable!\n* DESPICABLE!!!',
                     ">{#x1}* You're the worst person I've ever met!\n* I've NEVER been more mad!!!",
                     '>* Guooooohhhh!!!\n* My mannequin levels are going OFF THE CHARTS!!!'
                  ]
                  : SAVE.data.n.state_wastelands_dummy === 3
                     ? [
                        '>* YOU... you...',
                        '>* Shucks!\n* You were really boring!',
                        '>* They got annoyed and flew away like any self-respecting spectre.',
                        '>* Well then.\n* Well then!\n* WELL THEN!',
                        ">* I guess I'll just have to entertain MYSELF!",
                        ">* Buckle up, sleepyhead!\n* It's time to put on a show!"
                     ]
                     : SAVE.data.n.state_wastelands_dummy === 4
                        ? [
                           '>* YOU... you...',
                           '>* Shucks!\n* You were really nice!',
                           '>* So nice, in fact, that after your encounter, they developed a HUGGING addiction!!',
                           '>* In desperation, they left their body, hoping to get their fix from me.',
                           ">* They know I'm afraid of hugs, but they won't quit asking me!\n* It's INFURIATING!",
                           ">* You'll SUFFER for this, HUMAN!!!"
                        ]
                        : [
                           ...(SAVE.data.n.state_wastelands_dummy === 0
                              ? [
                                 '>* When you talked with them, they were hoping for a nice chat...',
                                 '>* But the things you said...!',
                                 '>* Horrible.\n* Shocking!\n* UNBELIEVABLE!',
                                 '>* You spooked them right out of their dummy!',
                                 '>* Grr...'
                              ]
                              : SAVE.data.n.state_wastelands_dummy === 1
                                 ? [
                                    '>* Us ghosts spend our whole lives looking for a proper vessel.',
                                    '>* Slowly, slowly, we grow closer to our new bodies, until one day...',
                                    '>* We too maybe become corporeal beings, able to laugh, love, and dance like any other.',
                                    ">* But YOU!!!\n* My cousin's future...\n* You snatched it all away!",
                                    '>* Uraaahhhhh!!!'
                                 ]
                                 : SAVE.data.n.state_wastelands_dummy === 2
                                    ? [
                                       '>* They were a shy sort.\n* Living a lonely life in the Outlands...',
                                       '>* They saw you and HOPED you might TALK to them.',
                                       '>* But NO!\n* You ran away!',
                                       '>* Pathetic.\n* Pathetic!\n* PATHETIC!!!',
                                       ">* Nobody breaks my cousin's HEART and GETS AWAY with it!"
                                    ]
                                    : SAVE.data.n.state_wastelands_dummy === 5
                                       ? [
                                          '>* When you first showed up, they were so excited to talk...',
                                          '>* And then you went and SLAPPED them in the FACE!',
                                          '>* Not just once.\n* Not just twice!',
                                          '>* But THREE TIMES!!',
                                          '>* How AWFUL do you have to BE!?'
                                       ]
                                       : SAVE.data.n.state_wastelands_dummy === 6
                                          ? [
                                             '>* My cousin is a nice fellow.',
                                             ">* But that doesn't mean you can just GO AROUND and FLIRT with them!",
                                             '>* Your stupid advances weirded them out SO MUCH...',
                                             ">* ... they just couldn't take it anymore!!",
                                             '>* Disgusting.\n* Disgusting!\n* DISGUSTING!!!'
                                          ]
                                          : []),
                           ">* You'll DIE for this, HUMAN!!!!"
                        ])
            ])
      ],
      dummy3: [
         '>{#p/basic}* ...?',
         '>* This...\n* This feeling...?',
         '>{#x3}* Eureka.\n* Eureka!\n* EUREKA!!!',
         '>* Human.\n* That moment of unbridled emotion.',
         '>* It allowed me to finally fuse with my body!',
         ">* I'm fully corporeal now!\n* Am I... dreaming?\n* Is this real???",
         ">* Well, in return, I guess I won't stomp you.",
         ">* How's that sound?"
      ],
      dummy4: (mover: boolean) => [
         ...(mover
            ? [
               SAVE.data.n.state_foundry_maddummy === 1
                  ? '>{#p/napstablook}* hey...\n* i thought i heard someone being attacked...'
                  : '>{#p/napstablook}* hey...\n* i thought i heard someone yelling...',
               ">{#p/napstablook}* but i guess you're alright",
               '>* i was actually about to head home...'
            ]
            : [">{#p/napstablook}* well...\n* i'm going to head home now..."]),
         ...(world.sad_ghost || world.population === 0
            ? [
               '>* just warning you...',
               ">* so you don't accidentally follow me to my house...",
               ">* you probably wouldn't like that..."
            ]
            : [
               '>* so... um...\n* feel free to "come with" if you want...',
               '>* but no pressure...',
               ">* i understand if you're busy...",
               ">* it's fine...",
               '>* no worries...',
               ">* just thought i'd offer..."
            ])
      ],
      dummypunch1: () =>
         SAVE.data.b.oops
            ? [
               ">{#p/basic}* It's a training dummy.\n* Beat it up?",
               choicer.create('* (Beat up the dummy?)', 'Yes', 'No')
            ]
            : [">{#p/basic}* It's a training dummy.\n* Hug it?", choicer.create('* (Hug the dummy?)', 'Yes', 'No')],
      dummypunch2a: ['>{#p/human}* (You decide not to do anything.)'],
      dummypunch2b: () =>
         world.genocide || world.meanie
            ? ['>{#p/human}* (You punched the dummy as hard as you could.)']
            : SAVE.data.n.exp > 0
               ? ['>{#p/human}* (You beat up the dummy.)']
               : SAVE.data.b.oops
                  ? ['>{#p/human}* (You poked the dummy.)']
                  : ['>{#p/human}* (You hugged the dummy.)'],
      dummypunch3: () =>
         SAVE.data.b.f_state_dummypunch
            ? [">{#p/basic}* It's a beat-up training dummy."]
            : [">{#p/basic}* It's a happy hugging dummy."],
      epicreaction: () =>
         [
            ['>{#p/kidd}{#f/7}* What was THAT!?'],
            ['>{#p/kidd}{#f/7}* Ack!!'],
            ['>{#p/kidd}{#f/7}* Not again!'],
            ['>{#p/kidd}{#f/7}* How many of those things are there!'],
            ['>{#p/kidd}{#f/7}* Seriously!?'],
            ['>{#p/kidd}{#f/7}* Jeez!!'],
            [">{#p/kidd}{#f/4}* We've gotta find a way outta here..."],
            ['>{#p/kidd}{#f/4}* ...']
         ][Math.min(SAVE.data.n.state_foundry_kiddreaction++, 7)],
      fallenfish: ['>{#p/basic}* Electricity permeates the body.'],
      fallenfish2: [">{#p/basic}* She's fallen down."],
      fallenfish3: ['>{#p/basic}* ... but nothing happened.'],
      finalfish1: ['>{#p/undyne}{#f/19}* Ngah...'],
      finalfish2: ['>{#p/undyne}{#f/19}* Stupid...\n* Interference...'],
      finalpre: () => [choicer.create('* (Continue to Aerialis?)', 'Yes', 'No')],
      genotext: {
         asgoreFinal1: () =>
            SAVE.flag.n.genocide_milestone < 5
               ? SAVE.flag.n.ga_asrielStutter < 1
                  ? [
                     '>{#p/asgore}{#f/15}* So you still ended up with him in the end...',
                     '>{#p/asriel2}{#f/7}* $(name) and I are inseparable, Asgore.\n* You should know that.',
                     '>{#p/asgore}{#f/15}* $(name)... o-of course.\n* So... w-what are you doing with the kid?',
                     ">{#p/asriel2}{#f/8}* That's honestly none of your business.",
                     ">{#p/asgore}{#f/15}* (Ugh... should've seen that coming...)",
                     ">{#p/asriel2}{#f/6}* To summarize, though...\n* We're going on a little trip together.",
                     ">{#f/6}* Just the three of us.\n* And surprise, surprise, you're not invited.",
                     '>{#p/asgore}{#f/15}* D-do I look like I want to be invited??',
                     '>{#p/asriel2}{#f/6}* You tell me.',
                     ">{#p/asgore}{#f/15}* Well, I just wanted to check on you.\n* That's all.",
                     ">{#p/asriel2}{#f/10}{#x1}* ...\n* Something's wrong.",
                     '>{#p/asriel2}{#f/10}* Dr. Alphys?\n* Is that you...?'
                  ]
                  : [
                     '>{#p/asgore}{#f/15}* So you still ended up with him in the end...',
                     '>{#p/asriel2}{#f/8}* $(name) and I are inseparable, ALPHYS.',
                     ">{#p/asriel2}{#f/7}* But YOU won't know anything about that, would you?"
                  ]
               : [
                  '>{#p/asgore}{#f/15}* So you still ended up with him in the end...',
                  '>{#p/asriel2}{#f/8}* $(name) and I are inseparable, ALPHYS.',
                  ...(SAVE.flag.n.ga_asrielQuestion < 1
                     ? [">{#p/asriel2}{#f/7}* Like I don't already know you're planning to kill us."]
                     : ['>{#p/asriel2}{#f/7}* Do you really think you can stop us?'])
               ],
         asgoreFinal2: () =>
            SAVE.flag.n.genocide_milestone < 5
               ? [
                  '>{#p/alphys}{#g/alphysThatSucks}* ... no fooling you, huh?',
                  '>{#p/asriel2}{#f/3}* Guess not.',
                  ">{#p/alphys}{#g/alphysGarbo}* ...\n* At least you're honest.",
                  '>{#p/asriel2}{#f/13}* You must be distraught over the death of your dear friend...',
                  ">{#p/asriel2}{#f/16}* I can't imagine how that feels for you.",
                  '>{#p/alphys}{#g/alphysIDK}* ...',
                  '>{#p/alphys}{#g/alphysNeutralSweat}* ...',
                  '>{#p/alphys}{#g/alphysNeutralSweat}* This was a b-bad idea.',
                  ">{|}{#p/asriel2}{#f/8}* Don't tell me you're- {%}"
               ]
               : [
                  '>{#p/alphys}{#g/alphysOhGodNo}* What?',
                  ">* I...\n* I-I wouldn't stand a chance against you!",
                  ...(SAVE.flag.n.ga_asrielQuestion < 1
                     ? ['>{#p/asriel2}{#f/10}* ... you sure?', '>{#p/alphys}{#g/alphysIDK}* ...']
                     : ['>{#p/asriel2}{#f/7}* ...']),
                  '>{#p/alphys}{#g/alphysNeutralSweat}* ...',
                  '>{#p/alphys}{#g/alphysNeutralSweat}* This was a b-bad idea.'
               ],
         asgoreFinal3: () =>
            SAVE.flag.n.genocide_milestone < 5
               ? ['>{#p/asriel2}{#f/7}* Coward.']
               : [
                  [">{#p/asriel2}{#f/15}* Huh... I guess it's too early in the timeline."],
                  ['>{#p/asriel2}{#f/15}* Oh well.']
               ][Math.min(SAVE.flag.n.ga_asrielQuestion++, 1)],
         asgoreMK1: [
            '>{#p/kidd}{#f/7}* Woah, is that... no way...',
            ">{#f/1}* It's the KING!",
            '>* King Asgore, dude!\n* What the heck are you doing way out here!?',
            '>{#p/asgore}{#f/3}* ...',
            '>{#f/3}* It is... a long story.',
            '>{#p/kidd}{#f/4}* Oh...',
            '>{#f/1}* Well, you can tell me!',
            '>{#p/asgore}{#f/7}* Heh.\n* No, I cannot.',
            '>{#f/6}* But I can ask you a question.',
            '>{#p/kidd}{#f/3}* ...?',
            '>{#p/asgore}{#f/7}* Has this human been a good friend to you?',
            '>{#p/kidd}{#f/1}* Well... yeah!',
            '>{#f/4}* But, there was this other kid with them...',
            ">{#f/8}* He wasn't as friendly.",
            ">{#p/asgore}{#f/1}* So it's him, then.\n* Just him...",
            '>{#p/kidd}{#f/4}* Huh?',
            '>{#p/asgore}{#f/6}* Erm, never mind.\n* I should not trouble you with this.',
            '>{#f/3}* As for you, human...',
            '>{#f/2}* You and that "other kid" have done a lot of damage.',
            '>{#f/1}* Countless monsters are... well, you know.',
            '>{#p/kidd}{#f/4}* ... huh?',
            '>{#p/asgore}{#f/7}* Nothing, nothing.\n* I just...',
            '>{#f/5}* I want to believe that there is more to you than... this.',
            '>{#f/5}* That, maybe somehow... Papyrus was right.',
            '>{#f/6}* If your "friend" has chosen to abandon you...',
            '>* Then this could be your chance to start anew.',
            ">{#p/kidd}{#f/1}* And I'll help them!",
            '>{#p/asgore}{#f/6}* Heh, perhaps you can, little one.\n* Perhaps you can.',
            '>{#f/5}* Since we last met, I have been thinking very hard about everything.',
            '>{#f/2}* It is difficult to say it, but...\n* He is too far gone.',
            '>{#f/2}* My son... he will never be whole again.',
            ">{#p/kidd}{#f/4}* I'm just gonna let you guys talk about this...",
            '>{#p/asgore}{#f/1}* No, no, that is alright. We were just about to end it.',
            '>{#f/1}* Think about my words carefully, human.',
            '>{#f/1}* That is all I ask.'
         ],
         asgoreMK2: [
            ">{#p/kidd}{#f/2}* Woah... he's AMAZING!",
            ">{#f/1}* I've heard stories about the king's speeches, but WOW!",
            '>{#f/3}* I wish he was MY dad...'
         ],
         asriel32: [
            '>{#p/asgore}{#f/15}* ...',
            '>{#f/16}* I see you have ignored my advice.',
            '>{#p/asriel2}{#f/3}* I sure did.',
            '>{#p/asgore}{#f/1}* ...',
            '>{#f/16}* You know, I have been wondering.',
            '>{#f/16}* You may not claim to be my son now, but you were...',
            '>{#f/15}* Once upon a time.',
            '>{#p/asriel2}{#f/10}* And your point is?',
            '>{#p/asgore}{#f/12}* ...',
            '>{#p/asgore}{#f/12}* Well... what changed?',
            '>{#f/12}* What made you into this... stranger... standing here now?',
            '>{#p/asriel2}{#f/6}* You REALLY wanna know?',
            '>{#p/asgore}{#f/7}* ...',
            '>{#p/asriel2}{#f/7}* Be honest.',
            '>{#p/asgore}{#f/1}* ...\n* Well, no...\n* Not really...',
            ">{#p/asriel2}{#f/8}* Tch.\n* Now that's more like the Asgore I know.",
            ">{#f/6}* You'd rather pretend everything's juuuust fine, ain't that right?",
            ">{#f/7}* Well, guess what, pal.\n* You're overdue for a wakeup call.",
            ">{#f/8}* (I'd give you one right now if you weren't a freakin' hologram...)",
            '>{#p/asgore}{#f/12}* ...',
            '>{#p/asriel2}{#f/8}* ...',
            '>{#p/asgore}{#f/15}* You know... I sometimes wonder how I got here.',
            '>{#f/16}* No homeworld, no children... trapped here by the humans...',
            '>{#f/15}* And now, the outpost is going to fall and all I can do is watch.',
            ">{#p/asriel2}{#f/15}* If you're asking ME for insight, you must be really desperate...",
            '>{#f/16}* Small word of advice.\n* Next time, try not to start a war...',
            '>{#p/asgore}{#f/2}* ...',
            '>{#f/4}* You...',
            '>{#f/2}* ...',
            '>{#f/6}* You know what, Asriel?\n* Forget it.',
            ">{#f/7}* Because you're right...",
            '>{#f/5}* Reasoning with you is a total waste of time.',
            ">{#p/asriel2}{#f/15}* ... wow.\n* I'm impressed.",
            '>{#f/16}* You finally said something intelligent for once.',
            '>{#p/asgore}{#f/1}* ...',
            ">{#p/asriel2}{#f/10}* So what now?\n* What's next for the aspiring king?",
            '>{#p/asgore}{#f/15}* To be honest?',
            '>{#f/15}* ...',
            '>{#f/16}* I have no idea, Asriel.'
         ],
         asriel33: ['>{#p/asriel2}{#f/10}* Did I detect a hint of anger...?'],
         // rule 34!!!!!!!!!!!!!!!!!!!!!!!!!!1
         asriel34: [
            ">{#p/asriel2}{#f/3}* I've gotta take care of some things, so I'll leave you two alone.",
            '>{#p/kidd}{#f/3}* Will you be back?\n* You gotta tell me more about Undyne...',
            ">{#p/asriel2}{#f/4}* I promised, didn't I?",
            ">{#f/1}* Don't worry.\n* I'll be back before you know it.",
            '>{#p/kidd}{#f/4}* Okay...'
         ],
         asriel34x: ['>{#p/asriel2}{#f/3}* Hey, stop here.'],
         asriel35: () =>
            SAVE.flag.n.undying > 0
               ? [
                  [
                     '>{#p/asriel2}{#f/6}* Well, here we are again, $(name).',
                     ">{#f/7}* ... look, I know Undyne won't die when the kid attacks her.",
                     ">{#f/15}* From what I can see, though, it's our best way forward for now.",
                     ">{#f/16}* Let's just stick to the script, okay?"
                  ],
                  []
               ][Math.min(SAVE.flag.n.ga_asrielUndying++, 1)]
               : [
                  [
                     '>{#p/asriel2}{#f/1}* Howdy, $(name).',
                     '>{#f/13}* Did you miss me?',
                     '>{#f/4}* Heh.\n* Sorry I had to leave your side again.',
                     ">{#f/3}* But I haven't been doing it for nothing.",
                     ">{#f/13}* I see you've parted ways with your little friend...",
                     '>{#f/16}* You must be soooo lonely, right $(name)?'
                  ],
                  []
               ][Math.min(SAVE.flag.n.ga_asriel35++, 1)],
         asriel37: () => [
            '>{#p/asriel2}{#f/1}* And thus, your little friend has returned!',
            ">{#f/17}* You'd do anything for me, wouldn't you?",
            '>{#p/kidd}{#f/9}* Mhm...'
         ],
         asriel38: () => [
            ...[
               [
                  // Let's go catch a fish.
                  '>{#p/asriel2}{#f/17}* Well, whaddya think?',
                  ">{#f/16}* They weren't easy to get ahold of, you know.",
                  ...(SAVE.data.n.state_foundry_muffet === 1
                     ? [
                        '>{#f/15}* They kept saying they wanted to be forgotten...',
                        '>{#f/10}* Golly, $(name).\n* What did you do to them while I was gone?'
                     ]
                     : [
                        ">{#f/15}* They wouldn't stop asking me where you were...",
                        '>{#f/10}* Golly, $(name).\n* What were you two doing while I was gone?'
                     ]),
                  ">{#f/3}* Uh, don't answer that.\n* They're here now, and that's what matters."
               ],
               [">{#p/asriel2}{#f/3}* Well, at least that's outta the way now."]
            ][Math.min(SAVE.flag.n.ga_asriel38++, 1)]
         ],
         asriel39: [
            '>{#p/asriel2}{#f/8}* Wait.\n* Think you can do me a favor, kid?',
            '>{#p/kidd}{#f/9}* ...?',
            '>{#p/asriel2}{#f/6}* Solve the puzzle.'
         ],
         asriel40: () =>
            SAVE.flag.n.ga_asriel40++ < 1
               ? [
                  '>{#p/asriel2}{#f/10}* Done already?\n* Golly...',
                  '>{#f/3}* This is the potential monsters deny themselves, $(name).',
                  '>{#f/16}* Hope, fear, empathy...\n* They cling to these pointless emotions.',
                  ">{#f/15}* Imagine how much better they'd be if they were all like this."
               ]
               : ['>{#p/asriel2}{#f/4}* Right on schedule.'],
         asriel41: ['>{#p/asriel2}{#f/3}* Back with us now, kid.'],
         asriel42: [">{#p/asriel2}{#f/4}* If we keep this up, we'll be over and done with in no time."],
         asriel43: () =>
            [
               [
                  ">{#p/asriel2}{#f/16}* It's over, $(name)...",
                  ">{#f/3}* We've done it.",
                  '>{#f/2}* The captain of the Royal Guard...',
                  '>{#f/15}* Did she REALLY think she stood a chance?',
                  SAVE.flag.n.undying > 2
                     ? '>{#f/8}* Granted, it took us a few runs...'
                     : SAVE.flag.n.undying > 1
                        ? '>{#f/8}* Granted, it took us an extra run...'
                        : '>{#f/8}* Granted, she did put up a valiant stand...',
                  '>{#f/7}* But in the end, we both knew what was destined to happen.'
               ],
               [
                  '>{#p/asriel2}{#f/3}* ... if only that victory felt as good as it did the first time.',
                  '>{#f/4}* Oh well.'
               ],
               ['>{#p/asriel2}{#f/6}* Killing Undyne is quickly becoming our hobby.'],
               ['>{#p/asriel2}{#f/6}* ...']
            ][Math.min(SAVE.flag.n.ga_asriel43++, 3)],
         asriel44: ['>{#p/asriel2}{#f/13}* Uh, you can take the lead, $(name).'],
         asriel45: [
            '>{#p/asriel2}{#f/13}* Well, well, well...{%40}',
            ">{#f/16}* I can't express how grateful I am for all your help.{%40}",
            ">{#f/1}* This body might not be perfect, but for what it's worth...?{%40}",
            ">{#f/2}* I won't miss being a stupid talking star.{%40}"
         ],
         asrielHug1: ['>{#p/asriel2}{#f/13}* ...'],
         asrielHug2: ['>{*}{#p/asriel2}{#f/13}* $(name)...{^100}{%}'],
         asrielHug3: ['>{#p/asriel2}{#f/13}* Er...\n* Thanks, $(name).'],
         bombshell1: [
            '>{*}{#p/alphys}* Talking... star...?',
            '>{*}* But that experiment...\n* It f-failed...',
            '>{*}* Unless...'
         ],
         bombshell2: ['>{*}* No...', '>{*}{@random=1.1/1.1}* No...'],
         bombshell3: [
            '>{*}{@random=1.1/1.1}* Toriel...\n* Sans...\n* Papyrus...',
            '>{*}{@random=1.1/1.1}* Undyne...',
            ">{*}{@random=1.1/1.1}* It's all m-my fault...",
            '>{*}{@random=1.1/1.1}{#i/4}* Oh... g-god...'
         ],
         bombshell4: [">{*}{@random=1.1/1.1}{#i/5}* I've killed you all..."],
         kidd1: [
            '>{#p/kidd}{#f/4}* What did he say your name was?\n* $(name)...?',
            '>{#f/3}* Well $(name), just between you and me, he kinda makes me feel...',
            '>{#f/4}* Uncomfortable.'
         ],
         kiddFinal1: [
            '>{#p/kidd}{#f/11}* ...!',
            ">{#p/asriel2}{#f/5}* I know.\n* Exciting, isn't it?",
            '>{#p/kidd}{#f/9}* ...',
            ">{|}{#f/12}* I don't- {%}",
            ">{#p/asriel2}{#f/4}* Shh...\n* It's okay.",
            '>{#p/asriel2}{#f/3}* Just remember what we came here for.'
         ],
         kiddFinal2: () => [
            '>{#p/kidd}{#f/9}* Undyne...',
            '>{#p/asriel2}{#f/10}* ...?',
            '>{#f/6}* ... let me guess.\n* Still having doubts?',
            ">{|}{#p/kidd}{#f/12}* I'm sorry, I- {%}",
            ">{#p/asriel2}{#f/13}* Undyne, schmundyne...\n* She's not the hero you take her for.",
            '>{#p/asriel2}{#f/4}* No... the REAL heroes are people who can use their minds.',
            SAVE.flag.n.genocide_milestone < 5
               ? SAVE.flag.n.ga_asrielKiddFinal1++ < 1
                  ? '>{#f/15}* People like...\n* Well, people unlike her.'
                  : '>{#f/15}* People unlike her.'
               : '>{#f/3}* People like Alphys.',
            '>{#p/kidd}{#f/12}* Is she... really...'
         ],
         kiddFinal3: () => [
            '>{#p/kidd}{#f/10}* ...',
            ">{#f/10}* Undyne won't die.",
            '>* Even if I do this, she...',
            ">* She'll be fine.\n* She'll be strong...",
            ...(SAVE.flag.n.ga_asrielKiddFinal3a < 1
               ? ['>{#p/asriel2}{#f/8}* (Yeah, whatever makes you feel better...)']
               : []),
            ">{#p/kidd}{#f/9}* 'Cause, like...\n* She's... stronger than any other monster...",
            ">{#f/12}* She's {@fill=#ff0}determined{@fill=#fff}...",
            ...(SAVE.flag.n.ga_asrielKiddFinal3a++ < 1
               ? ['>{#p/asriel2}{#f/10}* Uh... okay?\n* (Golly, what is this kid on about?)']
               : SAVE.flag.n.undying > 0 && SAVE.flag.n.ga_asrielKiddFinal3b++ < 1
                  ? ['>{#p/asriel2}{#f/8}* (How did they KNOW?)']
                  : ['>{#p/asriel2}{#f/10}* ...'])
         ],
         kiddFinal4: ['>{#p/asriel2}{#f/6}* There she is.'],
         kiddFinal5: ['>{#f/6}* Now.', '>{#f/7}* ...'],
         kiddFinal6: ['>{*}{#p/asriel2}{#f/14}{@random=1.1/1.1}{@fill=#f00}* Do it.{%100}'],
         kiddFinal7: [
            '>{#p/kidd}{#f/12}* ...',
            '>{#p/undyne}{#f/13}* What the HELL?\n* What are you doing all the way out here!?',
            '>{|}{#f/13}* And why does your eye look like- {%}'
         ]
      },
      goatreaction: () =>
         [
            ['>{#p/asriel2}{#f/15}* Careful, $(name).'],
            ['>{#p/asriel2}{#f/15}* $(name)...'],
            ['>{#p/asriel2}{#f/15}* Really now?'],
            [">{#p/asriel2}{#f/15}* We're trying not to die here, $(name)..."],
            [">{#p/asriel2}{#f/16}* I'm really starting to get worried."],
            ['>{#p/asriel2}{#f/8}* Are you blind or something?'],
            ['>{#p/asriel2}{#f/7}* Come on!'],
            ['>{#p/asriel2}{#f/7}* ...']
         ][Math.min(SAVE.flag.n.ga_asrielEpic++, 7)],
      hapstadoor1: () =>
         SAVE.data.b.svr ? [">{#p/human}* (But you didn't have the key.)"] : [">{#p/basic}* It's locked."],
      hapstadoor2: ['>{#p/human}* (You use the Mystery Key.)'],
      jumpsuit1: () => [
         '>{#p/human}* (You got the Flight Suit.)',
         choicer.create('* (Equip the Flight Suit?)', 'Yes', 'No')
      ],
      jumpsuit2: [">{#p/human}* (You're carrying too much to take that.)"],
      kiddStatue: [
         '>{#p/kidd}{#f/1}* Yo, I remember this place!',
         '>{#f/3}* My, uh, Mom took me here one time, haha.',
         ">{#f/1}* If we both stand on a switch, it lights up.\n* Isn't that awesome!?"
      ],
      kitchencall: () => [
         '>{#p/event}* Ring, ring...',
         '>{#p/papyrus}HUMAN!\nI WAS THINKING.',
         ...(SAVE.data.n.plot_date < 1
            ? [
               SAVE.data.b.flirt_papyrus
                  ? '>WE SHOULD TOTALLY DATE SOMETIME!'
                  : '>WE SHOULD TOTALLY HANG OUT SOMETIME!',
               ">{#f/5}AND BESIDES... I HAVEN'T SEEN YOU IN A WHILE.",
               ">{#f/0}IT'LL BE GOOD TO CATCH UP!",
               ">{#f/0}WELL, MEET ME AT MY HOUSE WHEN YOU'RE READY."
            ]
            : [
               '>SO, YOU KNOW HOW WE SPENT TIME TOGETHER?',
               '>{#f/5}WELL... I THINK UNDYNE NEEDS TO DO THE SAME.',
               '>{#f/4}BESIDES, I BET YOU TWO WOULD BE GREAT FRIENDS...',
               SAVE.data.b.flirt_papyrus ? '>{#f/6}... JUST FRIENDS!' : '>{#f/0}JUST LIKE WE WERE!',
               ">{#f/0}WELL, MEET ME AT UNDYNE'S HOUSE WHEN YOU'RE READY."
            ]),
         '>{#f/9}THIS IS GOING TO BE FANTASTIC!',
         '>{#s/equip}{#p/event}* Click...'
      ],
      madfish1: () => [
         ...(SAVE.flag.n.ga_asrielUndyneX++ < 1
            ? ['>{#p/asriel2}{#f/8}* Here comes the over- dramatic speech...']
            : []),
         '>{#p/undyne}* You.',
         '>{#x1}* You think you can just waltz around, MURDERING all those innocent monsters?',
         '>* Well guess what, punks.',
         '>* That ends NOW.',
         '>{#x2}* You may have scraped by Doge, but let me be clear...',
         ">{#x3}* Once the rest of ELITE squad nails you, you're in for a world of hurt."
      ],
      madfish2: () =>
         SAVE.flag.n.genocide_milestone < 5
            ? [
               '>* Nothing to say?\n* Feh.',
               ">{#x4}* I don't have time to deal with you right now, Alphys needs my help evacuating people.",
               ">{#x5}* Fuhuhu...\n* Have fun trying to progress.\n* You won't get far."
            ]
            : [
               '>* Nothing to say?\n* Feh.',
               ">{#x4}{|}* I don't have time to deal with you right now, Alphys needs my help- {%}",
               ">{#x5}{#p/asriel2}{#f/8}* Alphys is stronger than you, y'know.",
               ">{#f/2}* I've already seen what happens in this timeline...",
               '>{#f/1}* Your fight is NOTHING compared to hers.',
               '>{#p/undyne}* Is that so?',
               ">* ... well.\n* You'll still have to get through me first.",
               '>{#p/asriel2}{#f/6}* Oh, BELIEVE me.\n* We will.',
               ">{#p/undyne}* We'll see about that."
            ],
      madfish3: () =>
         SAVE.flag.n.genocide_milestone < 5
            ? SAVE.flag.n.ga_asrielMadfish++ < 1
               ? ['>{#p/asriel2}{#f/8}* Whatever you say.']
               : ['>{#p/asriel2}{#f/8}* ...']
            : ['>{#p/asriel2}{#f/8}* Tch.'],
      muffet1: () =>
         badSpider()
            ? ['>{#p/basic}* Ahuhuhuhu...', '>* Tell her she should increase my payout next time.']
            : SAVE.data.b.flirt_muffet
               ? ['>{#p/basic}* Ahuhuhuhu...', ">* Let's just pretend this never happened, shall we, dearies?"]
               : ['>{#p/basic}* Ahuhuhuhu...', '>* That was fun!\n* See you again, dearies!'],
      muffet2: () =>
         badSpider()
            ? ['>{#p/kidd}{#f/4}* Yo... that was weird...']
            : SAVE.data.b.flirt_muffet
               ? [">{#p/kidd}{#f/4}* Yo... at least it's over now?"]
               : ['>{#p/kidd}{#f/4}* Yo... that was not fun at ALL.'],
      muffetGeno1: () =>
         SAVE.data.n.state_foundry_kidddeath < 1
            ? ['>{#p/kidd}{#f/4}* Yo...\n* What just happened?', '>* Did she... {%}']
            : [
               '>{#p/kidd}{#f/4}* Yo... did she just...',
               '>* How come monsters keep disappearing like that? {%}'
            ],
      muffetGeno1x: [">{#p/basic}* She's dead."],
      muffetGeno2: [
         ">{#p/kidd}{#f/7}* N-no...\n* I didn't mean...",
         ">{#f/7}* S-she's not... no...\n* She was...",
         ">{#f/4}* No, it...\n* It c-can't be...",
         '>{#f/4}* She was just...',
         '>{#f/8}* Just...'
      ],
      muffetGeno3: ['>{#f/8}* ...', '>{#f/8}* ... what have I done...'],
      mushroomdance1: ['>{#p/basic}* Mushroom dance\n* Mushroom dance\n* Whatever could it mean'],
      mushroomdance2: () =>
         SAVE.data.n.plot === 72
            ? SAVE.data.b.f_state_mushroomdanceEpilogue
               ? ['>{#p/basic}* It means the future is very uncertain indeed.']
               : SAVE.data.b.f_state_mushroomdanceGeno
                  ? [
                     ">{#p/basic}* It means I'm going free.\n* They're going to transplant me to the new homeworld.",
                     '>* But why should you care?\n* Unless...',
                     '>* ... unless you have absolved yourself of sin?'
                  ]
                  : [
                     ">{#p/basic}* It means I'm going free.\n* They're going to transplant me to the new homeworld.",
                     '>{#p/basic}* Goodbye, old outpost, for you have been my abode...'
                  ]
            : world.meanie || SAVE.data.s.state_foundry_deathroom === 'f_village' // NO-TRANSLATE
               ? SAVE.data.b.f_state_mushroomdanceGeno
                  ? [">{#p/basic}* It means... don't talk to me."]
                  : [
                     ">{#p/basic}* It means you've lived a life of sin.",
                     ...(SAVE.data.b.f_state_mushroomdance ? [">* Wait.\n* Weren't you nicer before?"] : [])
                  ]
               : SAVE.data.b.f_state_mushroomdance
                  ? [
                     '>{#p/basic}* If only I could see the galaxy beyond.',
                     '>* But even if the force field was destroyed, how would I leave...?'
                  ]
                  : [
                     '>{#p/basic}* It symbolizes my inner torment, trapped here by my hyphae.',
                     '>* My struggle to pull away.\n* My struggle to escape.\n* But alas, to no avail.'
                  ],
      musicbox: [
         '>{#p/asriel1}{#i/4}It sounds like it came from over here...',
         ">Oh! You've crash- landed, haven't you...",
         '>Are you okay?',
         '>Here, get up...',
         '>...',
         '>$(name), huh?',
         ">That's a nice name.",
         '>{*}{#x1}{#p/asriel3}{#i/18}My name is   {%}'
      ],
      napcomputer1: () =>
         postSIGMA()
            ? [">{#p/basic}* It's out of service."]
            : [
               SAVE.data.b.svr
                  ? '>{#p/human}* (You move towards the computer...)'
                  : '>{#p/basic}* The computer is currently open to a music-sharing application.',
               choicer.create('* (View the opened application?)', 'Yes', 'No')
            ],
      napcomputer2: ['>{#p/human}* (You decide not to look.)'],
      napcomputer3: {
         a: () => [
            'MTT Tunes - Solarwave.kwac',
            'MTT Tunes - Planetary.kwac',
            SAVE.data.n.plot === 72 ? 'Parting of Ways.kwac' : 'Bad Wolf.kwac',
            'MMSA - Main Theme.kwac',
            !world.genocide && SAVE.data.n.state_starton_papyrus === 1 ? 'papyrus tribute.kwac' : 'funny autotune.kwac',
            'Song of the Stars.kwac'
         ],
         b: () => [
            'COOLSKELETON95',
            'COOLSKELETON95',
            SAVE.data.n.plot === 72 ? '_Sp4ceAdv3ntur3r_' : '_K1ll3rMann3qu1n_',
            'ALPHYS',
            'lazybones.',
            '(Unknown)'
         ]
      },
      napcomputer4: {
         a: () => ['Ghost Rave.kwac', 'Spooktune Mashup.kwac'],
         b: () => ['NAPSTABLOOK22', 'NAPSTABLOOK22']
      },
      noTem: [">{#p/tem}* oh no, it's a... FISHES!!!"],
      noShroom: [">{#p/basic}* Watch out\n* Watch out\n* There's a fish running about"],
      noTortoise: () =>
         world.population === 0 ? ['>{#p/basic}* Wa ha ha...'] : ['>{#p/basic}* Run while ya still can, kid!'],
      npc86x: () =>
         SAVE.data.b.svr
            ? ['>{#p/human}* (The robot appears to be asleep.)']
            : [">{#p/basic}* It's in sleep mode."],
      npc86z: () =>
         [
            [
               '>{#p/basic}{#npc/a}* Familiar energy signature detected in combat.',
               '>{#p/basic}* Recommended action... run.'
            ],
            [
               '>{#p/basic}{#npc/a}* Familiar energy signature detected in combat.',
               '>{#p/basic}* Recommended action... stand still.'
            ],
            [
               '>{#p/basic}{#npc/a}* Familiar energy signature detected in combat.',
               '>{#p/basic}* Recommended action... unknown.'
            ],
            [
               '>{#p/basic}{#npc/a}* Familiar energy signature detected in combat.',
               '>{#p/basic}* Recommended action... hide.'
            ]
         ][(SAVE.data.n.state_foundry_npc86_feelings || 3) - 1],
      npc86a: () => [
         '>{#p/basic}{#npc/a}* Foreign energy signature detected.',
         '>* Name... unknown.',
         '>* Relationship status... stranger.',
         SAVE.data.n.plot < 42.1 ? '>* Last interaction... none.' : '>* Last interaction... observed in battle.',
         '>* Processing...\n* Processing...\n* Processing...',
         '>* Hello, stranger.\n* I am eight-six, the all- purpose delivery bot.',
         '>* It is far from my intended function, but would you like to complete a survey today?',
         choicer.create('* (What do you say?)', 'Yes', 'No')
      ],
      npc86b: () => [
         '>{#p/basic}{#npc/a}* Thank you.\n* The question is as follows.',
         '>* "Out of the colors red, green, and blue, which do you prefer?"',
         choicer.create('* (What do you say?)', 'Red', 'Green', 'Blue', 'Not sure')
      ],
      npc86c: [
         '>{#p/basic}* Thank you.\n* Your choice will be inscribed deeply into my memory bank.',
         '>{#p/basic}{#npc/a}* Your relationship status is now set to "acquaintance."'
      ],
      npc86d: () => [
         '>{#p/basic}{#npc/a}* Familiar energy signature detected.',
         '>* Name... unknown.',
         '>* Relationship status... acquaintance.',
         SAVE.data.n.state_foundry_npc86 === 1
            ? '>* Last interaction... survey declined.'
            : '>* Last interaction... survey taken.',
         '>* Processing...\n* Processing...\n* Processing...',
         '>* Hello again, acquaintance.\n* How is your day today?',
         choicer.create('* (What do you say?)', 'Good', 'Bad', 'Neutral', 'Not sure')
      ],
      npc86e: () => [
         ...[
            ['>{#p/basic}{#npc/a}* Good?\n* That is good to hear.'],
            ['>{#p/basic}{#npc/a}* Bad?\n* I hope things get better.'],
            ['>{#p/basic}{#npc/a}* Neutral?\n* That is understandable.'],
            ['>{#p/basic}{#npc/a}* Not sure?\n* That is... understandable.']
         ][choicer.result],
         '>{#p/basic}{#npc/a}* Your relationship status is now set to "friend."'
      ],
      npc86f: () => [
         '>{#p/basic}{#npc/a}* Familiar energy signature detected.',
         '>* Name... unknown.',
         '>* Relationship status... friend.',
         '>* Last interaction... asked about mood.',
         '>* Processing...\n* Processing...\n* Processing...',
         [
            '>* Hello again, friend.\n* I hope your mood has remained since our last interaction.',
            '>* Hello again, friend.\n* I hope your mood has improved since our last interaction.',
            '>* Hello again, friend.\n* Based on our last interaction...',
            '>* Hello again, friend.\n* Based on our last interaction...'
         ][SAVE.data.n.state_foundry_npc86_mood - 1],
         '>* It appears you have a great deal of interest towards me.',
         '>* What emotion do you most commonly feel about me?',
         choicer.create('* (What do you say?)', 'Love', 'Disgust', 'None', 'Not sure')
      ],
      npc86g: () =>
         [
            [
               '>{#p/basic}{#npc/a}* ...',
               '>* Your relationship status is now set to "bestie."',
               '>* I love you too, bestie.'
            ],
            [
               '>{#p/basic}{#npc/a}* ...',
               '>* Your relationship status is now set to "enemy."',
               '>* I have no further need for you, enemy.'
            ],
            [
               '>{#p/basic}{#npc/a}* ...',
               '>* Your relationship status is now set to "acquaintance."',
               '>* Perhaps this was not a good idea, acquaintance.'
            ],
            [
               '>{#p/basic}{#npc/a}* ...',
               '>* Your relationship status is unchanged.',
               ...(SAVE.data.n.state_foundry_npc86 === 5 && SAVE.data.n.state_foundry_npc86_feelings === 4
                  ? ['>* Expected reply to all questions is now set to "Not sure."']
                  : [])
            ]
         ][choicer.result],
      npc86h: () => [
         '>{#p/basic}{#npc/a}* Familiar energy signature detected.',
         '>* Name... unknown.',
         [
            '>* Relationship status... bestie.',
            '>* Relationship status... enemy.',
            '>* Relationship status... acquaintance.',
            '>* Relationship status... friend.'
         ][SAVE.data.n.state_foundry_npc86_feelings - 1],
         SAVE.data.b.f_state_done86
            ? [
               '>* Last interaction... showed appreciation.',
               '>* Last interaction... declined conversation.',
               '>* Last interaction... made small talk.',
               '>* Last interaction... gave advice.'
            ][SAVE.data.n.state_foundry_npc86_feelings - 1]
            : '>* Last interaction... asked about feelings.',
         '>* Processing...\n* Processing...\n* Processing...',
         [
            [
               '>* Hello again, bestie.\n* I hope you are doing well.',
               '>* Hello again, bestie.\n* I love you very much.',
               '>* Hello again, bestie.\n* It is good to see you today.'
            ],
            [
               '>* ...\n* Do not speak to me again.',
               '>* ...\n* Do not speak to me again.',
               '>* ...\n* Do not speak to me again.'
            ],
            [
               '>* Hello again, acquaintance.\n* The factory is musty today.',
               '>* Hello again, acquaintance.\n* The starlight is glimmering today.',
               '>* Hello again, acquaintance.\n* The steam is humid today.'
            ],
            [
               '>* Hello again, friend.\n* Remember to eat something.',
               '>* Hello again, friend.\n* Remember to take breaks.',
               '>* Hello again, friend.\n* Remember to talk things out.'
            ]
         ][SAVE.data.n.state_foundry_npc86_feelings - 1][rng.dialogue.int(3)]
      ],
      npcinter: {
         grandmuffdarkened: pager.create(
            0,
            () =>
               SAVE.data.n.state_foundry_muffet === 2
                  ? [
                     ...(world.population < 6 && world.bullied
                        ? [
                           ">{#p/basic}{#s/spiderLaugh}{#npc/a}* No matter how many monsters you've bullied, your payment to me is all that matters~"
                        ]
                        : [
                           '>{#p/basic}{#s/spiderLaugh}{#npc/a}* Your payment to me means more than you can possibly imagine~'
                        ]),
                     '>* Thank you for your generous donation, dearie~',
                     '>* If you or your little armless friend need anything, you just let me know~'
                  ]
                  : [
                     ">{#p/basic}{#s/spiderLaugh}{#npc/a}* It's a shame I wasn't able to capture you the first time around~",
                     ...(world.population < 6 && world.bullied
                        ? ['>* A little bully like you would have been a wonderful prize~']
                        : [">* Oh well~\n* Now that the force field's gone, I won't have to~"])
                  ],
            [
               '>{#p/basic}{#s/spiderLaugh}{#npc/a}* Oh, dearie~\n* When the spider clans arrive on the new homeworld...',
               ">* There'll be so many natural resouces to exploit~",
               ">* We're going to build the largest tea empire this new world has ever seen~"
            ],
            [
               '>{#p/basic}{#s/spiderLaugh}{#npc/a}* Oh, and if I can help it...',
               ">* It'll be the only tea empire this new world will ever see~\n* Ahuhuhu~"
            ],
            ['>{#p/basic}{#s/spiderLaugh}{#npc/a}* Ahuhuhu~']
         ),
         f_dogenpc: pager.create(
            0,
            () =>
               SAVE.data.n.state_foundry_doge === 2
                  ? [
                     ...(world.population < 6 && world.bullied
                        ? [
                           '>{#p/basic}{#npc/a}* I know you have been violent, but I appreciate the compassion you have shown me.'
                        ]
                        : ['>{#p/basic}{#npc/a}* Thank you for the compassion you have shown me.']),
                     '>* It is what I needed to see the error in my choice of career.',
                     ">* Still, I'm keeping the uniform.\n* It suits me well."
                  ]
                  : [
                     ">{#p/basic}{#npc/a}* I regretted letting you get past me, but after what you've done, I'm fine with that.",
                     ...(world.population < 6 && world.bullied
                        ? ['>* I shall overlook your rather... violent tendencies for the moment.']
                        : ['>* I shall recall your name for many centuries to come.'])
                  ],
            [
               '>{#p/basic}{#npc/a}* I do apologize for mis- judging you, Frisk.',
               '>* As a member of the ELITE squad, it was difficult for me to see the good in you.'
            ],
            [
               '>* Well.\n* There is much for me to reflect on, now.',
               '>* I would appreciate if you gave me the time and space to do so.',
               '>* Thank you for the conversation.'
            ],
            ['>{#p/basic}{#npc/a}* Until next time.']
         ),
         f_clamgirl: pager.create(
            0,
            () =>
               SAVE.data.n.plot === 72
                  ? [
                     '>{#p/basic}{#npc/a}* How silly...\n* As soon as I choose to stay somewhere, we all have to go.',
                     '>* The irony of the situation has not escaped me.\n* Still, it is for the best.',
                     ">* On our new homeworld...\n* I'm sure to find lots of new neighbors for myself."
                  ]
                  : SAVE.data.n.plot === 47.2
                     ? [">{#p/basic}{#npc/a}* Er, she's still after you..."]
                     : SAVE.data.s.state_foundry_deathroom === 'f_hub' // NO-TRANSLATE
                        ? ['>{#p/basic}{#npc/a}* You should never have come.']
                        : SAVE.data.n.state_foundry_undyne === 1
                           ? [
                              '>{#p/basic}{#npc/a}* I sense a disturbance in the nearby aura...',
                              ">* You really shouldn't have left that girl alone."
                           ]
                           : SAVE.data.n.state_foundry_undyne === 2
                              ? [
                                 '>{#p/basic}{#npc/a}* I sense a disturbance in the nearby aura...',
                                 '>* You really should have left that girl alone.'
                              ]
                              : 2 <= SAVE.data.n.plot_date
                                 ? [
                                    '>{#p/basic}{#npc/a}* I sense a disturbance in the nearby aura...',
                                    '>* You and my new neighbor are getting along, I see.'
                                 ]
                                 : SAVE.data.n.plot > 47.2 && SAVE.data.n.plot_date > 1
                                    ? world.trueKills > 0
                                       ? ['>{#p/basic}{#npc/a}* Papyrus is waiting nearby.', ">* Isn't he brave?"]
                                       : ['>{#p/basic}{#npc/a}* Papyrus is waiting nearby.', ">* Won't you meet my new neighbor?"]
                                    : [
                                       ">{#p/basic}{#npc/a}* I'm visiting the Foundry from the Citadel, by the way.",
                                       ">* There, I hardly knew anyone, but here, I've met several friendly neighbors already.",
                                       ">* I don't think I'll be leaving here any time soon."
                                    ],
            () =>
               SAVE.data.n.plot === 72
                  ? [">{#p/basic}{#npc/a}* Won't that be splendid?"]
                  : SAVE.data.n.plot === 47.2
                     ? [">{#p/basic}{#npc/a}* Er, she's still after you..."]
                     : SAVE.data.n.state_foundry_undyne > 0
                        ? ['>{#p/basic}{#npc/a}* ...']
                        : 2 <= SAVE.data.n.plot_date
                           ? ['>{#p/basic}{#npc/a}* Good neighbors have been quite difficult to find.']
                           : SAVE.data.n.plot > 47.2 && SAVE.data.n.plot_date > 1
                              ? world.trueKills > 0
                                 ? ['>{#p/basic}{#npc/a}* ...']
                                 : [
                                    ">{#p/basic}{#npc/a}* Go on. She won't bite.\n* She might throw a few spears at you, though."
                                 ]
                              : ['>{#p/basic}{#npc/a}* Having neighbors is nice.']
         ),
         f_echo1: () =>
            world.runaway
               ? [
                  '>{#s/echostart}{#p/event}{#npc/a}* Signal start...',
                  '>{#p/undyne}* Citizens of the Foundry...',
                  '>* ... you should all know what happened to you by now.',
                  ">* It's time to go, and you damn well know it.",
                  ">* So let's get going.",
                  '>{#s/echostop}{#p/event}{#npc}* Signal stop.'
               ]
               : SAVE.data.n.plot === 72
                  ? [
                     '>{#s/echostart}{#p/event}{#npc/a}* Signal start...',
                     ">{#p/undyne}* Listen up, everyone!\n* The force field's gone!\n* We can all go home!",
                     ">* If you're still down there dawdling by the time we leave...",
                     ">* Then... we'll probably just come back for you later.",
                     ">* But don't make us do that!",
                     '>{#s/echostop}{#p/event}{#npc}* Signal stop.'
                  ]
                  : geno()
                     ? [
                        '>{#s/echostart}{#p/event}{#npc/a}* Signal start...',
                        ">{#p/undyne}* Citizens of the Foundry!\n* If you're hearing this, then get the heck outta here!",
                        world.genocide
                           ? ">* There's a pair of killers on the loose, and they WON'T show mercy!"
                           : ">* There's a killer on the loose, and they WON'T show mercy!",
                        ">* You've been warned!!",
                        '>{#s/echostop}{#p/event}{#npc}* Signal stop.',
                        ...(world.goatbro && SAVE.flag.n.ga_asrielEcho1++ < 1
                           ? ['>{#p/asriel2}{#f/2}* Thanks, Undyne.\n* I was getting tired of running into people.']
                           : [])
                     ]
                     : [
                        '>{#s/echostart}{#p/event}{#npc/a}* Signal start...',
                        '>{#p/basic}* Skrubby of foundry crew.\n* Need u to check pipe for leak.',
                        ">{#p/alphys}* Oh- uh... s-sorry, ah!\n* I'm a little busy at the moment!",
                        '>{#p/basic}* Okie.\n* I ask Raddy instead.\n* Thx for nothing.',
                        ">{#p/alphys}* Y-you're welcome??",
                        '>{#s/echostop}{#p/event}{#npc}* Signal stop.'
                     ],
         f_echo2: () =>
            world.runaway
               ? [
                  '>{#s/echostart}{#p/event}{#npc/a}* Signal start...',
                  ">{#p/basic}* Hey... everything's gonna be okay, kiddo.",
                  '>* (Gerson?)\n* (Is that you again?)',
                  '>* Oh, I dunno.\n* Is that really you, Burgie?\n* Wa ha ha.',
                  ">* (Yeah, yeah.)\n* (I'm just a little scared... like everyone else.)",
                  '>{#s/echostop}{#p/event}{#npc}* Signal stop.'
               ]
               : SAVE.data.n.plot === 72
                  ? [
                     '>{#s/echostart}{#p/event}{#npc/a}* Signal start...',
                     '>{#p/basic}* Well, you heard her!\n* Time for us to go, kiddo!',
                     ">{#p/basic}* ... wa ha ha.\n* In truth, we've still got the rest of the day.",
                     ">{#p/basic}* (Yeah, I'm gonna hang out here for a bit longer.)",
                     ">{#p/basic}* (Who knows?)\n* (Maybe Frisk'll come by.)",
                     '>{#s/echostop}{#p/event}{#npc}* Signal stop.'
                  ]
                  : geno()
                     ? [
                        '>{#s/echostart}{#p/event}{#npc/a}* Signal start...',
                        '>{#p/basic}* Hey kiddo, did ya catch the warning broadcast?',
                        '>* (Keep your voice down!)\n* (... so are they like, a human or something?)',
                        '>* No doubt about it.',
                        ">* (Figures.)\n* (It's gonna suck having to evacuate, though.)",
                        '>{#s/echostop}{#p/event}{#npc}* Signal stop.'
                     ]
                     : [
                        '>{#s/echostart}{#p/event}{#npc/a}* Signal start...',
                        '>{#s/phone}* Ring, ring...',
                        '>{#p/basic}* Hey kiddo!\n* Just wanted to check in on how that new shop of yours is.',
                        ">* I hear you're doin' pretty well!",
                        ">* (...)\n* (It's kinda hard for me to talk right now.)",
                        '>{#s/echostop}{#p/event}{#npc}* Signal stop.'
                     ],
         f_echo3: () =>
            world.runaway
               ? [
                  '>{#s/echostart}{#p/event}{#npc/a}* Signal start...',
                  ">{#p/basic}* I hear ya.\n* Hey, maybe it'd help if ya told me what ya saw.",
                  '>* From your point of view.',
                  '>* (Well...)\n* (It all started when...)',
                  '>* (I was at the force field with a bunch of others.)',
                  '>{#s/echostop}{#p/event}{#npc}* Signal stop.'
               ]
               : SAVE.data.n.plot === 72
                  ? [
                     '>{#s/echostart}{#p/event}{#npc/a}* Signal start...',
                     ">{#p/basic}* That'd be a treat!\n* I know I'd sure as hell like to see 'em.",
                     ">{#p/basic}* It's kind of hard to imagine, isn't it?\n* Being saved by a human?",
                     ">{#p/basic}* (I know, right?)\n* (And those other humans... they're alive, too.)",
                     ">{#p/basic}* (What a crazy day it's been.)",
                     '>{#s/echostop}{#p/event}{#npc}* Signal stop.'
                  ]
                  : geno()
                     ? [
                        '>{#s/echostart}{#p/event}{#npc/a}* Signal start...',
                        ">{#p/basic}* Evacuate? Not a chance!\n* You'll be just fine right where you are, actually.",
                        ">* (Uh...)\n* (You do realize I'm out in the open here, right?)",
                        ">* That may be true.\n* But there's a little thing I happen to know...",
                        ">* Somethin' that keeps us humble shopkeepers safe.",
                        '>{#s/echostop}{#p/event}{#npc}* Signal stop.'
                     ]
                     : [
                        '>{#s/echostart}{#p/event}{#npc/a}* Signal start...',
                        ">{#p/basic}* Huh?\n* What's the problem?",
                        ">* (... don't you know?)",
                        '>* Wait...',
                        ">* (It's THAT menace.)",
                        '>{#s/echostop}{#p/event}{#npc}* Signal stop.'
                     ],
         f_echo4: () =>
            world.runaway
               ? [
                  '>{#s/echostart}{#p/event}{#npc/a}* Signal start...',
                  '>{#p/basic}* (We were all there to see the force field be taken down.)',
                  ">* (We'd been told something like that could happen, but when we got there...)",
                  '>* (The same talking star who told us to go there was holding monsters hostage.)',
                  '>* Little star, huh?\n* I have heard stories of a little yellow star...',
                  '>{#s/echostop}{#p/event}{#npc}* Signal stop.'
               ]
               : SAVE.data.n.plot === 72
                  ? [
                     '>{#s/echostart}{#p/event}{#npc/a}* Signal start...',
                     ">{#p/basic}* (I wonder what we'll do when we arrive on the new homeworld.)",
                     ">{#p/basic}* (Maybe the two of us could open a shop together!)\n* (You'd sell the trinkets...)",
                     ">{#p/basic}* And you'd sell the food.\n* I like the way you think about it, kiddo!",
                     ">{#p/basic}* But it'd likely be better if one of us sells, and the other tracks the finances.",
                     '>{#s/echostop}{#p/event}{#npc}* Signal stop.'
                  ]
                  : geno()
                     ? [
                        '>{#s/echostart}{#p/event}{#npc/a}* Signal start...',
                        ">{#p/basic}* (What?)\n* (That's the dumbest thing I've ever heard.)",
                        ">* It's true!\n* I could demonstrate it, if you'd like.",
                        ">* (Uh, n-no thanks!)\n* (I'll take your word for it, old b-buddy!)",
                        ">* Wa ha ha.\n* Y'learn something new every day, don'tcha!",
                        '>{#s/echostop}{#p/event}{#npc}* Signal stop.'
                     ]
                     : [
                        '>{#s/echostart}{#p/event}{#npc/a}* Signal start...',
                        ">{#p/basic}* ... wa ha ha.\n* It's the fella who goes around selling steak, ain't it?",
                        '>* (What am I gonna do!)',
                        ">* Shhhh.\n* It's alright, kiddo.\n* That shop's got a backdoor!",
                        '>* (It does!?!?)',
                        '>{#s/echostop}{#p/event}{#npc}* Signal stop.'
                     ],
         f_echo5: () =>
            world.runaway
               ? [
                  '>{#s/echostart}{#p/event}{#npc/a}* Signal start...',
                  ">{#p/basic}* (Well, he's real.)\n* (And we thought we'd helped the human beat him...)",
                  ">* (But he just ended up taking everyone's SOULs anyway.)",
                  ">* That must've been the bright light I saw...\n* I just couldn't shake it.",
                  ">* (Yeah, and it was even brighter at the source.)\n* (We didn't stand a chance.)",
                  '>{#s/echostop}{#p/event}{#npc}* Signal stop.'
               ]
               : SAVE.data.n.plot === 72
                  ? [
                     '>{#s/echostart}{#p/event}{#npc/a}* Signal start...',
                     ">{#p/basic}* (Ha. We'll take turns, then.)",
                     ">{#p/basic}* (Doing the same thing all the time would get boring, don't you think?)",
                     ">{#p/basic}* Wa ha ha.\n* Maybe I'm just old, but I don't mind doing finances.",
                     '>{#p/basic}* You can have the fun job all to yourself, kiddo!',
                     '>{#s/echostop}{#p/event}{#npc}* Signal stop.'
                  ]
                  : geno()
                     ? [
                        '>{#s/echostart}{#p/event}{#npc/a}* Signal start...',
                        '>{#p/basic}* (I guess we really are doomed to live here forever, huh?)',
                        ">* Hey, don't underestimate the Royal Guard.\n* They're tough stuff!",
                        '>* (Do you really think they can stop someone like that?)',
                        ">* One human child?\n* I dunno kiddo, maybe that's just too much to handle.",
                        '>{#s/echostop}{#p/event}{#npc}* Signal stop.',
                        ...(world.goatbro && SAVE.flag.n.ga_asrielEcho4++ < 1
                           ? ['>{#p/asriel2}{#f/5}* Hee hee hee...']
                           : [])
                     ]
                     : [
                        '>{#s/echostart}{#p/event}{#npc/a}* Signal start...',
                        '>{#p/basic}* (Woah...)\n* (This door leads to a balcony on the outside!)',
                        '>{#p/basic}* (I swear the stars have never looked this bright...)',
                        '>* Huh.\n* Must be a distortion field or something.',
                        '>* Take a minute, and enjoy it while ya can!',
                        '>{#s/echostop}{#p/event}{#npc}* Signal stop.'
                     ],
         f_echo6: () =>
            world.runaway
               ? [
                  '>{#s/echostart}{#p/event}{#npc/a}* Signal start...',
                  '>{#p/basic}* So what happened next?',
                  '>* (Well, you should know.)\n* (This is the part that everyone knows.)',
                  '>* (From our perspective, we saw a human fending off attacks...)',
                  '>* (Whatever that star turned himself into was relentlessly attacking the human.)',
                  '>{#s/echostop}{#p/event}{#npc}* Signal stop.'
               ]
               : SAVE.data.n.plot === 72
                  ? [
                     '>{#s/echostart}{#p/event}{#npc/a}* Signal start...',
                     ">{#p/basic}* I do feel like a part of me's going to miss this old place.",
                     '>{#p/basic}* We really made it our own.',
                     ">{#p/basic}* (You're kidding, right?)\n* (I won't miss this old dump for a second.)",
                     ">{#p/basic}* (But I guess I've also had it pretty bad up here.)",
                     '>{#s/echostop}{#p/event}{#npc}* Signal stop.'
                  ]
                  : geno()
                     ? [
                        '>{#s/echostart}{#p/event}{#npc/a}* Signal start...',
                        '>{#p/basic}* Bad news, kiddo.\n* The human came through not too long ago.',
                        ...(world.genocide
                           ? [
                              ">{#p/basic}* ... they had a partner with 'em, too.",
                              '>{#p/basic}* (What?)\n* (Who was it?)',
                              ">{#p/basic}* Wa ha ha...\n* You wouldn't believe me."
                           ]
                           : [
                              '>{#p/basic}* (Are they on their way here?)',
                              ">{#p/basic}* Sure, but it'll be a while until ya see 'em.\n* Not to mention Undyne...",
                              ">{#p/basic}* (Yeah, she'll stop them.)\n* (She's in charge of the Royal Guard, after all...)"
                           ]),
                        '>{#s/echostop}{#p/event}{#npc}* Signal stop.'
                     ]
                     : [
                        '>{#s/echostart}{#p/event}{#npc/a}* Signal start...',
                        '>{#s/phone}* Ring, ring...',
                        ">{#p/basic}* Sorry about that, the phone signal here isn't the greatest.",
                        '>* You seen anything interesting so far?',
                        '>* (... well...)',
                        '>* (How about a shooting star?)',
                        '>{#s/echostop}{#p/event}{#npc}* Signal stop.'
                     ],
         f_echo7: () =>
            world.runaway
               ? [
                  '>{#s/echostart}{#p/event}{#npc/a}* Signal start...',
                  '>{#p/basic}* (Eventually, though, the human mustered some kind of power...)',
                  '>* (And then...)',
                  '>* (... IT... happened.)',
                  '>* Yeah... that.\n* The moment where it all turned upside-down, huh?',
                  '>{#s/echostop}{#p/event}{#npc}* Signal stop.'
               ]
               : SAVE.data.n.plot === 72
                  ? [
                     '>{#s/echostart}{#p/event}{#npc/a}* Signal start...',
                     ">{#p/basic}* Hey, it's alright.",
                     ">{#p/basic}* On a new homeworld... you'll be able to go wherever you want.",
                     '>{#p/basic}* (Really? I thought I was going to settle down with you.)',
                     '>{#p/basic}* Oh, did you now?\n* Wa ha ha.',
                     '>{#s/echostop}{#p/event}{#npc}* Signal stop.'
                  ]
                  : geno()
                     ? [
                        '>{#s/echostart}{#p/event}{#npc/a}* Signal start...',
                        ...(world.genocide
                           ? [
                              ">{#p/basic}* (So you're telling me this kid's been resurrected from the dead?)",
                              '>{#p/basic}* (Wow.)\n* (I knew you were a crazy old coot, but this is something!)',
                              '>{#p/basic}* ... would I lie to you?',
                              '>{#p/basic}* (Well... knowing you... I guess... probably not.)\n* (Hmph.)'
                           ]
                           : [
                              '>{#p/basic}* (So what are we supposed to do in the meantime?)',
                              ">{#p/basic}* Oh, y'know, just the usual jiggery-pokery, I'd guess.",
                              '>{#p/basic}* (You and your weird sayings.)',
                              '>{#p/basic}* Wa ha ha, you know it!'
                           ]),
                        '>{#s/echostop}{#p/event}{#npc}* Signal stop.'
                     ]
                     : [
                        '>{#s/echostart}{#p/event}{#npc/a}* Signal start...',
                        '>{#p/basic}* Oh!\n* Make a wish, kiddo!',
                        ">* (...)\n* (It'd never come true.)",
                        '>* ... freedom, huh?\n* Wa ha ha... I might have some good news for you.',
                        '>* I saw a human come through just a little while ago.',
                        '>{#s/echostop}{#p/event}{#npc}* Signal stop.'
                     ],
         f_echo8: () =>
            world.runaway
               ? [
                  '>{#s/echostart}{#p/event}{#npc/a}* Signal start...',
                  '>{#p/basic}* I remember that bit.\n* The power changed hands... the human was in control.',
                  '>* (Yeah, and then they started attacking us!)\n* (I thought we were all...)',
                  '>* Going to die?',
                  ">* (Yeah, and it's like I could feel their fear.)\n* (Everyone was so afraid.)",
                  '>{#s/echostop}{#p/event}{#npc}* Signal stop.'
               ]
               : SAVE.data.n.plot === 72
                  ? [
                     '>{#s/echostart}{#p/event}{#npc/a}* Signal start...',
                     '>{#p/basic}* (Who else am I gonna go to?)\n* (The girls?)',
                     '>{#p/basic}* Hmm...\n* I see your point.',
                     ">{#p/basic}* (You're the only one I feel like I can rely on, old buddy.)",
                     ">{#p/basic}* (Using this shop to make fun of Mettaton was a blast, but it's time for a change.)",
                     '>{#s/echostop}{#p/event}{#npc}* Signal stop.'
                  ]
                  : geno()
                     ? [
                        '>{#s/echostart}{#p/event}{#npc/a}* Signal start...',
                        '>{#p/basic}* (Hey... if we ever manage to get out of this...)',
                        '>* (Maybe... we could go for some lunch together?)',
                        ">* Huh?\n* Sure, kiddo!\n* I don't see why not!",
                        ">* It'll give us somethin' to look forward to.",
                        '>{#s/echostop}{#p/event}{#npc}* Signal stop.'
                     ]
                     : [
                        '>{#s/echostart}{#p/event}{#npc/a}* Signal start...',
                        ">{#p/basic}* (So it's true...)\n* (Freedom really is coming.)",
                        '>* One would assume.',
                        ">* (Guess it's all up to the king, then, huh?)",
                        '>* ... if it comes to that.',
                        '>{#s/echostop}{#p/event}{#npc}* Signal stop.'
                     ],
         f_echo9: () =>
            world.runaway
               ? [
                  '>{#s/echostart}{#p/event}{#npc/a}* Signal start...',
                  '>{#p/basic}* Yeah... I remember.',
                  ">* (Look, whatever happens...)\n* (I'm just glad you're safe, ya fat old mole-rat.)",
                  ">* Wa ha ha... that's my boy.",
                  '>* (... when we get to the new homeworld, would you... like to go out for dinner?)',
                  '>{#s/echostop}{#p/event}{#npc}* Signal stop.'
               ]
               : SAVE.data.n.plot === 72
                  ? [
                     '>{#s/echostart}{#p/event}{#npc/a}* Signal start...',
                     ">{#p/basic}* That robot... I don't know if he'll be able to stay popular on the new homeworld.",
                     '>{#p/basic}* But hey, if he gets poor, we can always remind him how much better off we are.',
                     ">{#p/basic}* (Jeez, you're even more ruthless than I am when it comes to him!)",
                     ">{#p/basic}* (... if he comes to our shop, we'll charge him double.)",
                     '>{#s/echostop}{#p/event}{#npc}* Signal stop.'
                  ]
                  : geno()
                     ? [
                        '>{#s/echostart}{#p/event}{#npc/a}* Signal start...',
                        ">{#p/basic}* (Thanks, old buddy...)\n* (... for a second there, I'd forgotten our troubles.)",
                        '>* Wa ha ha...\n* Glad I could help out.',
                        '>* And even if we never do make it outta here...',
                        '>* ... maybe we could go for lunch anyway.',
                        ">* (Yeah...)\n* (That'd be nice.)",
                        '>{#s/echostop}{#p/event}{#npc}* Signal stop.'
                     ]
                     : [
                        '>{#s/echostart}{#p/event}{#npc/a}* Signal start...',
                        ">{#p/basic}* (If it comes to that...?)\n* (What's the alternative, let them go free?)",
                        '>* I dunno.\n* I wish I had all the answers.',
                        ">* (Wait...)\n* (Is there something the king hasn't been telling us!?)",
                        '>* Wa ha ha...\n* Talk to ya later, kiddo.',
                        '>* (... huh!?!?)',
                        '>{#s/echostop}{#p/event}{#npc}* Signal stop.'
                     ],
         f_echoAbyss1: () =>
            SAVE.data.n.plot === 72
               ? [
                  '>{#s/echostart}{#p/event}{#npc/a}* Signal start...',
                  ">{#p/basic}* I don't know where I am...",
                  '>* I was just doing my laundry, but then there was this bright light...',
                  ">* Now it's like... I'm in some kind of limbo...",
                  '>* Please... help me...',
                  '>{#s/echostop}{#p/event}{#npc}* Signal stop.',
                  ...(SAVE.data.b.svr ? ['>{#p/asriel1}{#f/13}* ...'] : [])
               ]
               : geno()
                  ? [
                     '>{#s/echostart}{#p/event}{#npc/a}* Signal start...',
                     ">{#p/basic}* I think there's a b-b-b-bogey comin' towards me as we speak...",
                     '>{#p/undyne}* Doggo?\n* That you?',
                     ">{#p/basic}* Yeah... they're almost here...\n* Woah!",
                     '>{#p/basic}* (Ahem!)\n* Did something move?\n* Was it my imagination?',
                     '>{#s/echostop}{#p/event}{#npc}* Signal stop.'
                  ]
                  : [
                     '>{#s/echostart}{#p/event}{#npc/a}* Signal start...',
                     '>{#p/radio}{#v/1}* Helloooooo everyone!\n* You are listening to The Midnight Rush!',
                     '>{#p/alphys}* (What the-)\n* (What is this!?)',
                     '>{#p/radio}{#v/1}* It is the fifteenth of September two-thousand, and well, not much happened today.',
                     ">{#p/alphys}* (Some kind of communications system... must've been dormant for hundreds of years!)",
                     '>{#s/echostop}{#p/event}{#npc}* Signal stop.'
                  ],
         f_echoAbyss2: () =>
            SAVE.data.n.plot === 72
               ? [
                  '>{#s/echostart}{#p/event}{#npc/a}* Signal start...',
                  '>{#p/basic}* Gosh, where could I be...',
                  '>* We were out hunting for trash, but then this bright white light came in.',
                  ">* Catty thinks we're in some sort of shared dream...",
                  ">* But, like, wouldn't we be able to wake ourselves up?",
                  '>{#s/echostop}{#p/event}{#npc}* Signal stop.',
                  ...(SAVE.data.b.svr ? ['>{#p/asriel1}{#f/15}* ...'] : [])
               ]
               : world.genocide
                  ? [
                     '>{#s/echostart}{#p/event}{#npc/a}* Signal start...',
                     ">{#p/papyrusnt}UNDYNE, ARE YOU THERE?\nMY BROTHER...\nHE'S...",
                     '>{#p/undyne}* What is it, Papyrus?',
                     '>{#p/papyrusnt}...',
                     '>{#p/undyne}* Papyrus?',
                     '>{#s/echostop}{#p/event}{#npc}* Signal stop.'
                  ]
                  : geno()
                     ? [
                        '>{#s/echostart}{#p/event}{#npc/a}* Signal start...',
                        '>{#p/sans}{#f/7}* hey, not to bother ya, but you should probably have starton evacuated.',
                        ">{#p/undyne}* Huh?\n* What's this about?",
                        '>{#p/sans}{#f/7}* ...',
                        '>{#p/undyne}* Not... particularly liking the silent treatment...',
                        '>{#s/echostop}{#p/event}{#npc}* Signal stop.'
                     ]
                     : [
                        '>{#s/echostart}{#p/event}{#npc/a}* Signal start...',
                        ">{#p/radio}{#v/0}* Not much happened!?\n* You're outta your mind.",
                        '>{#p/alphys}* (Hmm...)',
                        '>{#p/radio}{#v/0}* ALIENS from the neighboring planet are due to arrive today!',
                        ">{#p/alphys}* (I guess I'll let it play out, then. Ehehe.)",
                        '>{#s/echostop}{#p/event}{#npc}* Signal stop.',
                        ...(world.kiddo && !SAVE.data.b.f_state_dc_kidd2
                           ? ((SAVE.data.b.f_state_dc_kidd2 = true),
                              [
                                 '>{#p/kidd}{#f/7}* Neighboring planet?\n* Could that mean...',
                                 '>{#f/2}* ... n-no way.'
                              ])
                           : [])
                     ],
         f_echoAbyss3: () =>
            SAVE.data.n.plot === 72
               ? [
                  '>{#s/echostart}{#p/event}{#npc/a}* Signal start...',
                  '>{#p/toriel}{#f/21}* My child... are you there?',
                  '>* That Twinkly...',
                  ">* I should have known he'd cause some sort of trouble, but...",
                  ">* Once again... I've failed to see the reality that lay right in front of me...",
                  '>{#s/echostop}{#p/event}{#npc}* Signal stop.',
                  ...(SAVE.data.b.svr ? ['>{#p/asriel1}{#f/16}* ...'] : [])
               ]
               : geno()
                  ? [
                     '>{#s/echostart}{#p/event}{#npc/a}* Signal start...',
                     ...(SAVE.data.b.s_state_chilldrake
                        ? [
                           ">{#p/basic}* Help!\n* My friend Stardrake's gone missing...",
                           '>{#p/basic}* They went off to find some inspiration for new jokes, but they never came back!',
                           ">{#p/undyne}* Sit tight, kiddo.\n* I'll send out a search party right away."
                        ]
                        : [
                           ">{#p/basic}* Help!\n* My friend Stardrake's in danger...",
                           '>{#p/basic}* They said they saw a human on the loose out here!',
                           '>{#p/undyne}* Sit tight, kiddo.\n* The Royal Guard will take care of this.'
                        ]),
                     '>{#p/basic}* Thank you... Undyne...',
                     '>{#s/echostop}{#p/event}{#npc}* Signal stop.',
                     ...(world.kiddo && !SAVE.data.b.f_state_dc_kidd3
                        ? ((SAVE.data.b.f_state_dc_kidd3 = true),
                           ['>{#p/kidd}{#f/3}* Woah, uh... this is kinda scary, haha...', '>{#f/4}* ...'])
                        : [])
                  ]
                  : [
                     '>{#s/echostart}{#p/event}{#npc/a}* Signal start...',
                     ">{#p/radio}{#v/1}* Okay, nobody panic!\n* We're not just gonna let 'em walk all over us, right?",
                     '>{#v/0}* You say that like you mean it literally.',
                     '>{#v/1}* What if I do?',
                     '>{#v/0}* Well, I think these aliens could be great allies.\n* They seem pretty nice.',
                     '>{#v/0}* They even brought that translation field thing so we can understand them!',
                     '>{#s/echostop}{#p/event}{#npc}* Signal stop.'
                  ],
         f_echoAbyss4: () =>
            SAVE.data.n.plot === 72
               ? [
                  '>{#s/echostart}{#p/event}{#npc/a}* Signal start...',
                  ">{#p/papyrusnt}HUH? WHAT'S WRONG WITH THINKING EVERYTHING'S JUST FINE?",
                  '>{#p/without}* well, the way i see it...',
                  ">{#p/without}* you're just a-{@fill=#ff0}void{@fill=#fff}-ing the problem.",
                  ">{#p/papyrusnt}UGH... MAYBE YOU'RE RIGHT. THINGS DO SEEM PRETTY... {@fill=#ff0}DARK{@fill=#fff}.",
                  '>{#s/echostop}{#p/event}{#npc}* Signal stop.',
                  ...(SAVE.data.b.svr ? ['>{#p/asriel1}{#f/23}* ...'] : [])
               ]
               : geno()
                  ? [
                     '>{#s/echostart}{#p/event}{#npc/a}* Signal start...',
                     ">{#p/undyne}* You don't get it, this isn't some rowdy teen... get outta there before you get hurt!",
                     ">{#p/basic}* I don't care what it is.\n* I'm doing my duty for the good of the outpost!",
                     ">{#p/basic}* If you wanna fight 'em so bad, why don't you come out here yourself!?",
                     '>{#p/undyne}* Dogamy!!',
                     '>{#s/echostop}{#p/event}{#npc}* Signal stop.',
                     ...(world.kiddo && !SAVE.data.b.f_state_dc_kidd4
                        ? ((SAVE.data.b.f_state_dc_kidd4 = true),
                           [
                              ">{#p/kidd}{#f/1}* Man, isn't the Royal Guard brave or what?",
                              ">{#f/3}* I'm glad we have them to protect us...!"
                           ])
                        : [])
                  ]
                  : [
                     '>{#s/echostart}{#p/event}{#npc/a}* Signal start...',
                     ">{#p/radio}{#v/1}* Yeah, yeah...\n* If we're gonna be all lovey-dovey with E.T. here...",
                     '>{#v/1}* We\'re gonna have to do better than just walking up and saying "Howdy."',
                     ">{#v/0}* ... isn't that Erogot's preferred way of saying Hello?",
                     ">{#v/0}* The dude's clearly into western movies, no doubt.",
                     '>{#s/echostop}{#p/event}{#npc}* Signal stop.',
                     ...(world.kiddo && !SAVE.data.b.f_state_dc_kidd4
                        ? ((SAVE.data.b.f_state_dc_kidd4 = true),
                           ['>{#p/kidd}{#f/1}* Erogot?', '>{#f/1}* KING Erogot!?', '>{#f/3}* Dude...'])
                        : [])
                  ],
         f_echoAbyss5: () =>
            SAVE.data.n.plot === 72
               ? [
                  '>{#s/echostart}{#p/event}{#npc/a}* Signal start...',
                  '>{#p/kidding}* Yo... what is this place?',
                  ">* It's really dark, and I can't see anything in here...",
                  ">* I'm scared...",
                  '>* Is anyone there?\n* Please... someone help me...',
                  '>{#s/echostop}{#p/event}{#npc}* Signal stop.',
                  ...(SAVE.data.b.svr ? ['>{#p/asriel1}{#f/22}* ...'] : [])
               ]
               : world.genocide
                  ? [
                     '>{#s/echostart}{#p/event}{#npc/a}* Signal start...',
                     ">{#p/alphys}* How's that new body coming?",
                     '>{#p/mettaton}* QUITE WELL, ACTUALLY.\n* I WAS JUST ABOUT TO SEARCH FOR PARTS DOWN IN MECHANICAL.',
                     ">{#p/alphys}* S-sounds good.\n* I'll keep working on improving the power distribution.",
                     ">{#p/mettaton}* DON'T WORRY, DOCTOR.\n* WE'VE GOT PLENTY OF TIME.",
                     '>{#s/echostop}{#p/event}{#npc}* Signal stop.'
                  ]
                  : geno()
                     ? [
                        '>{#s/echostart}{#p/event}{#npc/a}* Signal start...',
                        '>{#p/alphys}* How can I just...\n* Sit here and let it happen?',
                        ">{#p/mettaton}* WELL... WHAT ELSE CAN YOU DO?\n* YOU'RE NOT A FIGHTER.",
                        ">{#p/mettaton}* IF YOU GO OUT THERE NOW, YOU MIGHT DIE, AND WE'D LOSE A VALUABLE PERSON.",
                        '>{#p/alphys}* Why... why does this always happen to me...',
                        ">{#p/mettaton}* ... TO BE FAIR, WATCHING PEOPLE DIE HASN'T ACTUALLY HAPPENED TO YOU BEFORE.",
                        '>{#s/echostop}{#p/event}{#npc}* Signal stop.'
                     ]
                     : [
                        '>{#s/echostart}{#p/event}{#npc/a}* Signal start...',
                        '>{#p/radio}{#v/0}* Just between us, some of them are pretty cute.',
                        '>{#v/1}* Uh... okay?',
                        ">{#v/0}* What?\n* I don't mean like THAT.\n* I just mean they're adorable.",
                        '>{#v/0}* The same way a pet might be.',
                        ">{#v/1}* ...\n* We've got a listener calling into the station.",
                        '>{#s/echostop}{#p/event}{#npc}* Signal stop.'
                     ],
         f_echoAbyss6: () =>
            SAVE.data.n.plot === 72
               ? [
                  '>{#s/echostart}{#p/event}{#npc/a}* Signal start...',
                  '>{#p/alphys}* How strange...',
                  '>* So our SOULs have been absorbed into another being.',
                  '>* This could be a kind of "separate plane" where we\'re held before...',
                  '>* ... wait.\n* There m-might be a way I could contact the others!',
                  '>{#s/echostop}{#p/event}{#npc}* Signal stop.',
                  ...(SAVE.data.b.svr ? ['>{#p/asriel1}{#f/10}* ...'] : [])
               ]
               : geno()
                  ? [
                     '>{#s/echostart}{#p/event}{#npc/a}* Signal start...',
                     world.genocide
                        ? ">{#p/basic}* Asriel and the human are on their way. I'll intercept them as soon as they come through."
                        : ">{#p/basic}* The human's on their way.\n* I'll intercept them as soon as they come through.",
                     ">{#p/undyne}* I trust you know what you're getting into, Doge.",
                     dogex()
                        ? '>{#p/basic}* They are responsible for the deaths in Starton.\n* I will show no mercy!'
                        : world.dead_canine
                           ? ">{#p/basic}* They are responsible for my colleagues' deaths.\n* I will show no mercy!"
                           : '>{#p/basic}* This is the moment I have long prepared myself for.\n* I will not falter!',
                     ">{#p/undyne}* Yeah!! Get out there and show 'em what the ELITE squad are all about!!",
                     '>{#s/echostop}{#p/event}{#npc}* Signal stop.'
                  ]
                  : [
                     '>{#s/echostart}{#p/event}{#npc/a}* Signal start...',
                     '>{#p/radio}{#v/0}* Welcome, dear caller, to The Midnight Rush!\n* Got anything for us?',
                     ">{#p/human}* Yeah, I've got a few words.\n* The fact is, us humans aren't ready for this sorta thing.",
                     ">{#p/radio}{#v/0}* Just what are you implying?\n* That we're too dumb to comprehend alien concepts?",
                     ">{#p/human}* ... you're so naive.\n* It's not us I'm really worried for, but rather... the aliens.",
                     '>{#s/echostop}{#p/event}{#npc}* Signal stop.'
                  ],
         f_echoAbyss7: () =>
            SAVE.data.n.plot === 72
               ? [
                  '>{#s/echostart}{#p/event}{#npc/a}* Signal start...',
                  '>{#p/basic}* Where am I?\n* What is this... place?',
                  ">{#p/alphys}* Hello?\n* I'm Dr. Alphys, and I'm... t-trying something!",
                  ">{#p/basic}* Dr. Alphys!\n* I'm here, can you hear me?",
                  ">{#p/alphys}* Yes... yes!\n* I just have to think about them... and I'm there!",
                  '>{#s/echostop}{#p/event}{#npc}* Signal stop.',
                  ...(SAVE.data.b.svr ? ['>{#p/asriel1}{#f/21}* ...'] : [])
               ]
               : geno()
                  ? [
                     '>{#s/echostart}{#p/event}{#npc/a}* Signal start...',
                     '>{#p/basic}* Skrubby of foundry crew.\n* Concerned over circumstances regarding human.',
                     '>{#p/alphys}* H-hey, uh...\n* Undyne can probably help... a lot better than I can...',
                     '>{#p/basic}* Agreed.\n* U are very unhelpful.',
                     '>{#p/alphys}* R-rude...',
                     '>{#s/echostop}{#p/event}{#npc}* Signal stop.'
                  ]
                  : [
                     '>{#s/echostart}{#p/event}{#npc/a}* Signal start...',
                     ">{#p/radio}{#v/1}* Oh, come on.\n* We're not a threat to them.\n* They hold all the cards!",
                     ">{#p/human}* Sure, but have you seen the way they act?\n* They're too nice...",
                     ">* I know you two won't do any harm, but some human is going to take advantage of that.",
                     '>{#p/radio}{#v/1}* Yeah... well...',
                     '>{#s/echostop}{#p/event}{#npc}* Signal stop.'
                  ],
         f_echoAbyss8: () =>
            SAVE.data.n.plot === 72
               ? [
                  '>{#s/echostart}{#p/event}{#npc/a}* Signal start...',
                  '>{#p/basic}* My name is Thomas Roman.\n* Royal scientist, and trusted associate of the crown.',
                  ">{#p/alphys}* Professor Roman?\n* But you're...",
                  '>{#p/basic}* My name is Thomas Roman.\n* Royal scientist, and trusted associate of the crown.',
                  ">{#p/alphys}* He's repeating...\n* It must just be the professor in everyone's memory.",
                  '>{#s/echostop}{#p/event}{#npc}* Signal stop.',
                  ...(SAVE.data.b.svr ? ['>{#p/asriel1}{#f/3}* ...'] : [])
               ]
               : world.genocide
                  ? [
                     '>{#s/echostart}{#p/event}{#npc/a}* Signal start...',
                     '>{#p/papyrusnt}THIS IS PAPYRUS.\nFEEL FREE TO LEAVE A MESSAGE AT THE TONE!',
                     '>{#p/undyne}* Damn it...',
                     '>{#p/undyne}* I should never have let this happen to you, Papyrus.',
                     '>{#p/undyne}* You and your brother deserved better than this.',
                     '>{#s/echostop}{#p/event}{#npc}* Signal stop.'
                  ]
                  : geno()
                     ? [
                        '>{#s/echostart}{#p/event}{#npc/a}* Signal start...',
                        '>{#p/undyne}* ... and even Doge has failed to capture the human.',
                        ">{#p/sans}{#f/7}* i'll be honest, this doesn't sound good.\n* evacuate the foundry?",
                        ">{#p/undyne}* At this point, everyone knows about what's going on.\n* They'll evacuate.",
                        ">{#p/sans}{#f/7}* i feel like it's better to be safe than sorry.\n* but what do i know.",
                        '>{#s/echostop}{#p/event}{#npc}* Signal stop.'
                     ]
                     : [
                        '>{#s/echostart}{#p/event}{#npc/a}* Signal start...',
                        ">{#p/radio}{#v/0}* Hey, cheer up.\n* Don't let that guy bring you down, alright?",
                        ">{#v/1}* But he's got a point...\n* For many, this situation might be overwhelming.",
                        ">* And not everybody's intentions are as pure as you and your... pet obsession.",
                        '>{#v/0}* Now wait just a minute!',
                        '>{#s/echostop}{#p/event}{#npc}* Signal stop.'
                     ],
         f_echoAbyss9: () =>
            SAVE.data.n.plot === 72
               ? [
                  '>{#s/echostart}{#p/event}{#npc/a}* Signal start...',
                  ">{#p/alphys}* Yeah, just think of who you'd like to see, and you'll be with them.",
                  '>{#p/asgore}* Asriel... are you there?',
                  ">{#p/alphys}* Huh, it's not working...\n* Maybe there's not enough of him left in us?",
                  '>{#p/asgore}* Please... come back...',
                  '>{#s/echostop}{#p/event}{#npc}* Signal stop.',
                  ...(SAVE.data.b.svr ? ['>{#p/asriel1}{#f/25}* ...'] : [])
               ]
               : geno()
                  ? [
                     '>{#s/echostart}{#p/event}{#npc/a}* Signal start...',
                     '>{#p/undyne}* Mind if I ask you a favor?',
                     '>{#p/basic}* Ahuhuhu~\n* Anything for the one who now occupies the old nest~',
                     world.genocide
                        ? ">{#p/undyne}* Track down the human and their accomplice. Take them to me.\n* Biggest payout you've ever had."
                        : ">{#p/undyne}* Track down the human and take them to me.\n* Biggest payout you've ever had.",
                     ">{#p/basic}* Hmmm...\n* I'll see what I can do~",
                     '>{#s/echostop}{#p/event}{#npc}* Signal stop.',
                     ...(world.kiddo && !SAVE.data.b.f_state_dc_kidd9
                        ? ((SAVE.data.b.f_state_dc_kidd9 = true), ['>{#p/kidd}{#f/4}* Not THAT spider...'])
                        : [])
                  ]
                  : [
                     '>{#s/echostart}{#p/event}{#npc/a}* Signal start...',
                     ">{#p/radio}{#v/1}* Now, now.\n* There's no shame in admitting what you like.",
                     ">{#v/0}* It's not like that at all!",
                     ">{#v/1}* Speaking of love, queue the jazz tune that's been blowing up in clubs everywhere...",
                     '>{#v/1}* "Married to an Alien!"',
                     '>{#s/echostop}{#p/event}{#npc}* Signal stop.',
                     ...(world.kiddo && !SAVE.data.b.f_state_dc_kidd9
                        ? ((SAVE.data.b.f_state_dc_kidd9 = true),
                           ['>{#p/kidd}{#f/2}* Pfft, only a human could come up with a title like THAT.'])
                        : [])
                  ],
         f_echoAbyss10: () =>
            SAVE.data.n.plot === 72
               ? [
                  '>{#s/echostart}{#p/event}{#npc/a}* Signal start...',
                  ">{#p/undyne}* I can't keep holding on...",
                  '>{#p/undyne}* The others... have already slipped away...',
                  ">{#p/undyne}* It's like they don't know who they are anymore...",
                  ">{#p/undyne}* No... no!\n* Not like this...\n* I can't forget who I am!",
                  '>{#s/echostop}{#p/event}{#npc}* Signal stop.',
                  ...(SAVE.data.b.svr ? ['>{#p/asriel1}{#f/21}* ...'] : [])
               ]
               : world.genocide
                  ? [
                     '>{#s/echostart}{#p/event}{#npc/a}* Signal start...',
                     '>{#p/mettaton}* OH, DOCTOR...',
                     ">{#p/mettaton}* I SHOULD HAVE KNOWN YOU'D RUN OFF LIKE THIS...",
                     '>{#p/mettaton}* ...\n* DAMN IT...',
                     ">{#p/mettaton}* DON'T YOU UNDERSTAND?",
                     ">{#p/mettaton}* I CAN'T PERFECT THOSE DEFENSES WITHOUT YOU...",
                     '>{#s/echostop}{#p/event}{#npc}* Signal stop.'
                  ]
                  : geno()
                     ? [
                        '>{#s/echostart}{#p/event}{#npc/a}* Signal start...',
                        ">{#p/mettaton}* WELL, THEY'LL BE HERE SOON.\n* I DON'T KNOW WHAT I'D DO IF I WERE YOU, BUT...",
                        '>{#p/mettaton}* WHETHER YOU STAND YOUR GROUND HERE, OR RETREAT...',
                        ">{#p/mettaton}* I'LL DO MY BEST TO SUPPORT YOU.",
                        '>{#p/alphys}* ... ehehe...',
                        '>* The same goes to you, Mettaton.',
                        '>{#s/echostop}{#p/event}{#npc}* Signal stop.'
                     ]
                     : [
                        '>{#s/echostart}{#p/event}{#npc/a}* Signal start...',
                        '>{#p/alphys}* Wait, wait!\n* This would be perfect for my date with Undyne...',
                        '>{#p/mettaton}* OH WOULD IT NOW?',
                        ">{#p/alphys}* Mettaton!?\n* Where did you...\n* ... I'm not d-dating anyone!",
                        ">{#p/mettaton}* OH, DON'T YOU WORRY.\n* YOUR SECRET'S SAFE WITH ME...\n* ... PROBABLY.",
                        '>{#s/echostop}{#p/event}{#npc}* Signal stop.',
                        ...(world.kiddo && !SAVE.data.b.f_state_dc_kidd10
                           ? ((SAVE.data.b.f_state_dc_kidd10 = true),
                              [
                                 '>{#p/kidd}{#f/1}* Alphys wants to marry UNDYNE!?',
                                 '>{#f/6}* You really DO learn something new every day...'
                              ])
                           : [])
                     ],
         f_echodude: pager.create(
            0,
            () =>
               SAVE.data.n.plot === 72
                  ? [
                     '>{#p/basic}{#npc/a}* With a new world comes new kinds of stars.',
                     '>* These signal stars may be the least of our worries...'
                  ]
                  : [
                     '>{#p/basic}{#npc/a}* This is a signal star.\n* When it picks up a signal, it repeats it over and over...'
                  ],
            () =>
               SAVE.data.n.plot === 72
                  ? ['>{#p/basic}{#npc/a}* Hopefully the stars out there are more honest.']
                  : ['>{#p/basic}{#npc/a}* Never trust a star.', '>* Dishonesty is their one defining trait.']
         ),
         f_echoLobby: () =>
            world.runaway
               ? [
                  '>{#s/echostart}{#p/event}{#npc/a}* Signal start...',
                  ">{#p/basic}* Raddy of the foundry crew.\n* We've no time to keep running the show here.",
                  ">* Don't worry about pipes, unless you're slidin' through em to escape!",
                  '>* Got it, Skrubby?\n* Large lata?\n* My teeny tini?',
                  ">* We've gotta go, right away.",
                  '>{#s/echostop}{#p/event}{#npc}* Signal stop.'
               ]
               : SAVE.data.n.plot === 72
                  ? [
                     '>{#s/echostart}{#p/event}{#npc/a}* Signal start...',
                     ">{#p/basic}* Raddy of the foundry crew.\n* Everyone, you've done a real great job so far.",
                     ">* Now that we're free, we can all give it a rest!",
                     '>* Ya hear that, Skrubby?\n* Large lata?\n* My teeny tini?',
                     ">* It's time for a totally tubular celebration!",
                     '>{#s/echostop}{#p/event}{#npc}* Signal stop.'
                  ]
                  : [
                     '>{#s/echostart}{#p/event}{#npc/a}* Signal start...',
                     '>{#p/basic}* Skrubby of foundry crew.\n* Reporting on success of maintenance with Raddy.',
                     geno()
                        ? ">{#p/alphys}* That's... g-great...\n* Look, I-I can't deal with this right now, so just..."
                        : '>{#p/alphys}* Uh... g-glad you could fix it!',
                     '>{#p/basic}* No problem, thx for being one hundred percent useless.',
                     '>{#p/alphys}* ... any time.',
                     '>{#s/echostop}{#p/event}{#npc}* Signal stop.'
                  ],
         f_kidd: pager.create(
            0,
            () =>
               world.genocide
                  ? [
                     '>{#p/kidd}{#npc/a}{#f/3}* H... hey...',
                     '>{#p/asriel2}{#f/15}{#npc}* Weirdo.',
                     '>{#p/kidd}{#npc/a}{#f/1}* ... y-yeah, hi!\n* Uh, haha!'
                  ]
                  : SAVE.data.n.plot === 33
                     ? [
                        '>{#p/kidd}{#npc/a}{#f/1}* How was lunch?',
                        '>{#f/1}* Did that short skeleton make everyone laugh again?'
                     ]
                     : [
                        '>{#p/kidd}{#npc/a}{#f/2}* Yo, are you here to see her too?',
                        ">{#f/1}* Haha.\n* She's the coolest!!",
                        '>{#f/2}* I wanna be just like her when I grow up...'
                     ],
            () =>
               world.genocide
                  ? ['>{#p/kidd}{#npc/a}{#f/4}* ...']
                  : SAVE.data.n.plot === 33
                     ? ['>{#p/kidd}{#npc/a}{#f/3}* He always gets kicked out for pulling awful pranks.']
                     : ['>{#p/kidd}{#npc/a}{#f/1}* You go on ahead.', ">{#f/1}* I'll catch up with you soon!"]
         ),
         f_longsy: pager.create(
            0,
            () =>
               SAVE.data.n.plot === 72
                  ? [
                     ">{#p/basic}{#npc/a}* My friend Shortsy and I plan to become the new world's premiere architects.",
                     ">* We'll build bridges, spires, space stations... if you can imagine it, we can build it!",
                     ">* As always, I'll be in charge of carrying the tools."
                  ]
                  : SAVE.data.n.plot < 48
                     ? [
                        '>{#p/basic}{#npc/a}* My friend Shortsy and I plan to build a bridge.',
                        ">* He's got his reasons, but personally, I'm just tired of using that unstable raft.",
                        ">* Let's hope we can do something a little better than that."
                     ]
                     : [
                        ">{#p/basic}{#npc/a}* How'd you like our bridge?\n* Was it stable?\n* Was it gravitationally secure?",
                        ">* Well, Shortsy said it's fine, and they're kinda the expert here.",
                        ">* I'm mostly just here to carry around the tools!"
                     ],
            () =>
               SAVE.data.n.plot === 72
                  ? ['>{#p/basic}{#npc/a}* Shortsy told me about a new kind of tool recently...']
                  : SAVE.data.n.plot < 48
                     ? [">{#p/basic}{#npc/a}* Instability and I don't get along very well.\n* That's just how I am."]
                     : [
                        ">{#p/basic}{#npc/a}* Don't get it twisted.\n* I'm a fantastic tool-toter.\n* That's just what I do."
                     ]
         ),
         f_shortsy: pager.create(
            0,
            () =>
               SAVE.data.n.plot === 72
                  ? [
                     '>{#p/basic}{#npc/a}* My buddy Longsy and I want to become full-time architects.',
                     ">* I've invented a brand new tool for Longsy to use...",
                     ">* ... called the builder's wand."
                  ]
                  : SAVE.data.n.plot < 48
                     ? [
                        '>{#p/basic}{#npc/a}* My buddy Longsy and I want to build a new bridge to impress the king.',
                        ">* It'll be the straightest, most sturdy bridge you've ever seen.",
                        ">* I'll make sure of it!"
                     ]
                     : [
                        '>{#p/basic}{#npc/a}* Take a look at our newest bridge.',
                        '>* Longsy and I figure this will be enough to impress the king...',
                        ">* It needs to be if we're going to work alongside him!"
                     ],
            () =>
               SAVE.data.n.plot === 72
                  ? ['>{#p/basic}{#npc/a}* With enough power, it could create anything you can imagine...']
                  : SAVE.data.n.plot < 48
                     ? [">{#p/basic}{#npc/a}* I'm set on doing nothing less than the best.\n* That's just how I am."]
                     : [
                        ">{#p/basic}{#npc/a}* No need to thank us, it's only a community service.\n* That's just what I do."
                     ]
         ),
         f_snail1: () =>
            SAVE.data.n.plot === 72
               ? [">{#p/basic}{#npc/a}* (Snail snail...)\n* Everyone's leaving, it seems."]
               : ['>{#p/basic}{#npc/a}* (Snail snail...)\n* Optimism, any day...'],
         f_snail2: () =>
            SAVE.data.n.plot === 72
               ? [">{#p/basic}{#npc/a}* (Snail snail...)\n* It's time for us to go."]
               : [">{#p/basic}{#npc/a}* (Snail snail...)\n* All's well that ends well..."],
         f_starkiller: pager.create(
            0,
            () =>
               SAVE.data.n.plot === 72
                  ? [
                     '>{#p/basic}{#npc/a}* The smell of grass grows ever closer now...',
                     '>* Soon, I will see it for myself.'
                  ]
                  : SAVE.data.n.state_foundry_undyne !== 0
                     ? ['>{#p/basic}{#npc/a}* I feel the grass has faded.', ">* Don't you...?"]
                     : roomKills().f_telescope > 0
                        ? ['>{#p/basic}{#npc/a}* The grass may already be too far gone.', '>* Or am I wrong...?']
                        : [
                           ">{#p/basic}{#npc/a}* What's grass?",
                           ...(world.genocide
                              ? ['>* Can it find you?', '>* Can it eat you?', '>* Can it kill you?']
                              : ['>* Can you find it?', '>* Can you eat it?', '>* Can you kill it?']),
                           '>* ...',
                           '>* Are you made of grass?'
                        ],
            () =>
               SAVE.data.n.plot === 72
                  ? [
                     '>{#p/basic}{#npc/a}* The grass may not always be greener, but who says it has to be?',
                     '>* A new world may have any number of colors in its grass.'
                  ]
                  : [">{#p/basic}{#npc/a}* The grass isn't always greener on the other side."]
         ),
         f_temmie1: () =>
            SAVE.data.n.plot === 72
               ? ['>{#p/tem}{#npc/a}* woa... tem hear news...\n* VERY GOODS!!!']
               : ['>{#p/tem}{#npc/a}* hOI!!\n* im temmie!!!', '>* and dis is my friend...\n* temmie!!!'],
         f_temmie2: () =>
            SAVE.data.n.plot === 72
               ? ['>{#p/tem}{#npc/a}* yaYA!!!\n* tems can go free!!']
               : ['>{#p/tem}{#npc/a}* hOI!!\n* im temmie!!!', '>* and dis is my friend...\n* temmie!!!'],
         f_temmie3: () =>
            SAVE.data.n.plot === 72
               ? [
                  '>{#p/tem}{#npc/a}* woa...\n* if tems can go to new homeworld, can make,',
                  '>{#p/tem}{#npc/a}* LOT OF TEMS HISTORY!!!'
               ]
               : ['>{#p/tem}{#npc/a}* hOI!!\n* im temmie!!!', '>* don forget my friend!'],
         f_temmie4: () =>
            SAVE.data.n.plot === 72
               ? ['>{#p/tem}{#npc/a}* A pleasing development, no?']
               : world.genocide || 10 <= world.trueKills
                  ? [
                     ['>{*}{#p/tem}{#i/5}{#s.stop}* I know what you did.', '{*}{#s.resume}{%}'],
                     ['>{#p/tem}{#npc/a}* Hi.', ">* I'm Bob."]
                  ][Math.min(SAVE.flag.n._bob++, 1)]
                  : SAVE.data.n.plot === 47.2
                     ? ['>{#p/tem}{#npc/a}* Hi.', ">* I'm afraid for your life."]
                     : ['>{#p/tem}{#npc/a}* Hi.', ">* I'm Bob."],
         f_temmie5: () =>
            SAVE.data.n.plot === 72
               ? ['>{#p/tem}{#npc/a}* awawawawah!!', '>* humans...\n* such a...', '>* HEROES!!!!']
               : ['>{#p/tem}{#npc/a}* awawawawah!!', '>* humans...\n* such a...', '>* CUTE!!!!'],
         f_temmie6: () =>
            SAVE.data.n.plot === 72
               ? [
                  '>{#p/tem}{#npc/a}* everyones go free...\n* BUT TEM!!!',
                  '>* TEM NOT LEAV!!!\n* TEM WATCH EG!!!',
                  '>* tem will be happily fambily,'
               ]
               : [
                  '>{#p/tem}{#npc/a}* tem... WATCH EGG!!!',
                  '>* eg... wil HATCH!!!',
                  '>* tem... PROUD PARENT!!'
               ]
      },
      punchcard0: () =>
         SAVE.data.b.svr ? ['>{#p/human}* (But the box was empty.)'] : ['>{#p/basic}* The box is empty.'],
      punchcard1: ['>{#p/basic}* There is one postcard in the box.'],
      punchcard2: ['>{#p/basic}* There are multiple postcards in the box.'],
      punchcard3: () => [choicer.create('* (Take a postcard?)', 'Yes', 'No')],
      punchcard4: ['>{#p/human}* (You got the Postcard.)'],
      punchcardX: () => [
         ">{#p/human}* (You can't make out what's in the box...)",
         choicer.create('* (Take something out?)', 'Yes', 'No')
      ],
      puzzle1switch: () =>
         SAVE.data.b.svr
            ? [">{#p/human}* (You can't seem to use the switch anymore.)"]
            : world.darker
               ? [">{#p/basic}* It's stuck, like always."]
               : ['>{#p/basic}* The switch, quite shockingly, is stuck.', '>* What a turn of events!'],
      puzzle2switch: () =>
         SAVE.data.b.svr
            ? [">{#p/human}* (You can't seem to use the switch anymore.)"]
            : world.darker
               ? [">{#p/basic}* It's stuck, like always."]
               : ['>{#p/basic}* The switch is stuck.\n* Naturally.'],
      puzzle3switch: () =>
         SAVE.data.b.svr
            ? [">{#p/human}* (You can't seem to use the switch anymore.)"]
            : world.darker
               ? [">{#p/basic}* It's stuck, like always."]
               : [
                  '>{#p/basic}* Believe it or not...',
                  ">* The switch isn't stuck, it's just out of service.\n* Oh wait."
               ],
      quiche1: () =>
         SAVE.data.b.svr
            ? [
               '>{#p/human}* (The note attached to this cheesecake describes how it was abandoned.)',
               choicer.create('* (Take the cheesecake?)', 'Yes', 'No')
            ]
            : [
               ">{#p/basic}* There's a piece of cheesecake here with a note attached.",
               '>* "I just couldn\'t handle the responsibility."',
               choicer.create('* (Take the cheesecake?)', 'Yes', 'No')
            ],
      quiche2: [">{#p/human}* (You're carrying too much.)"],
      quiche3: ['>{#p/human}* (You got the Cheesecake.)'],
      quiche4: () =>
         SAVE.data.b.svr
            ? [
               [
                  '>{#p/asriel1}{#f/24}* Before we moved out, $(name) used to sit here all the time...',
                  ">{#f/23}* We'd swap stories about our hopes and our dreams...",
                  '>{#f/22}* And bring the telescope out and watch for stars sometimes.',
                  '>{#f/13}* Even as a star...\n* I wished I could return to those moments...'
               ],
               [
                  '>{#p/asriel1}{#f/23}* Look at me, getting all sentimental over a random bench.',
                  ">{#f/17}* But hey.\n* At least it's sturdy.",
                  ">{#f/3}* Heck, even Asgore's tremendous figure couldn't break it.",
                  '>{#f/4}* Back when we all lived here, I mean.'
               ],
               [
                  ">{#p/asriel1}{#f/13}* It's kind of funny to think about...",
                  '>{#f/13}* The house we used to live in is now lived in by Undyne.',
                  '>{#f/17}* Or was, until the force field was destroyed.',
                  ">{#f/13}* And... it's not your usual kind of house.\n* It's a monster."
               ],
               ['>{#p/asriel1}{#f/15}* ... all the other monster homes were lost in the war.']
            ][Math.min(asrielinter.quiche4++, 3)]
            : world.darker
               ? [">{#p/basic}* It's a bench."]
               : SAVE.data.n.plot === 72
                  ? ['>{#p/basic}* Coming back to give a lonely bench some company...\n* The gesture is appreciated.']
                  : ['>{#p/basic}* Just a lonely bench out in the middle of a factory.\n* Nothing weird about that!'],
      quiche5: ['>{#p/human}* (You decide not to take anything.)'],
      run1: ['>{*}{#p/undyne}* Run.{^20}{%}'],
      run2a1: ['>{#p/undyne}* ...', ">{#p/undyne}* I'll go check."],
      run2b1: ['>{#p/undyne}* (Stupid spiders...)'],
      run2a2: ['>{#p/undyne}* ...', ">{#p/undyne}* I'm a little busy right now."],
      run2b2: ['>{#p/undyne}* (Ugh...)'],
      run3: [">{*}{#p/kidd}{#f/13}{#x1}* I'll save you!{#x2}{^20}{%}"],
      run4: [">{*}{#p/kidd}{#f/1}{#x1}* Sorry, I, uh... don't really know how to land this thing!{#x2}{^20}{%}"],
      run5: ['>{*}{#p/kidd}{#f/7}{#x1}* What the...{#x2}{^20}{%}'],
      run6: ['>{*}{#p/kidd}{#f/7}{#x1}* Help!!!{#x2}{^20}{%}'],
      run6a: [
         '>{*}{#p/kidd}{#f/7}{#x1}* Quit {@fill=#ff0}standing around{@fill=#fff} and {@fill=#ff0}get over here{@fill=#fff}, dude!!!{#x2}{^20}{%}'
      ],
      run6b: ['>{*}{#p/kidd}{#f/7}{#x1}* Come on, please!!!{#x2}{^20}{%}'],
      run6c: [">{*}{#p/kidd}{#f/7}{#x1}* I...\n* I-I can't stop it...!{#x2}{^20}{%}"],
      run6d: [
         '>{*}{#p/kidd}{#f/7}{#x1}* What are you doing!?{#x2}{^20}{%}',
         '>{*}{#p/kidd}{#f/7}{#x1}* Ah...!{#x2}{^20}{%}'
      ],
      run7: [
         '>{#p/kidd}{#f/4}* Y... y... yo... dude...',
         '>* If...\n* If y-you wanna hurt my friend...',
         ">* You're gonna have to get through me, first."
      ],
      run8: [
         ">{#p/kidd}{#f/3}* She's gone...",
         '>{#f/1}* Yo, you really saved my skin.',
         '>{#f/3}* Even if I was trying to save yours instead.',
         '>{#f/2}* Haha.',
         ">{#f/3}* ... man, I've never been so TIRED...",
         '>{#f/4}* Guess I should probably go home.',
         '>{#f/7}* I...\n* I bet my parents are worried sick about me!'
      ],
      run9: ['>{#p/kidd}{#f/13}* L... later, dude!'],
      run10: [
         '>{#p/kidd}* Undyne...\n* You....\n* You saved me!',
         '>* Huh?\n* They ran away?',
         ">* Yo, you're wrong...",
         '>* They went to get help!',
         ">* They'll be back any second!!",
         '>* ...',
         ">* O-okay, I'll go home..."
      ],
      run11: (charged: boolean) => [
         '>{#p/kidd}* Undyne...',
         '>* You saved me...?',
         '>* Yo... I...\n* I thought I was a goner.\n* Haha...',
         '>* ... wait, are you okay?\n* It looks like you hit the ceiling pretty hard...',
         '>* Th-this is my fault.\n* I should have stayed away from them, like you said.',
         charged
            ? '>* They just went straight to fight you instead of helping me...'
            : '>* They just stood there...\n* Watching...\n* Waiting for me to disappear.',
         '>* I was so scared, and you...',
         ">* What?\n* You're gonna go fight them now?",
         '>* But you look hurt...\n* You should rest, haha...',
         '>* ...',
         ">* W-warriors don't rest, huh?",
         ">* Undyne...\n* You're really cool."
      ],
      sansSentry: () =>
         SAVE.data.b.svr
            ? ['>{#p/human}* (This sentry station strikes you as rather unnecessary.)']
            : world.darker
               ? [">{#p/basic}* It's a sentry station."]
               : [">{#p/basic}* Sans's second sentry station...", ">* As if the first one wasn't already enough."],
      sansSentryBack: () =>
         !world.genocide && SAVE.data.n.state_starton_papyrus === 1
            ? ['>{#p/human}* (You look under the shelf...)', ">{#p/basic}* It's a box of bones."]
            : [
               '>{#p/human}* (You look under the shelf...)',
               ...(SAVE.data.b.svr
                  ? [
                     [
                        '>{#p/asriel1}{#f/13}* The notes in here are actually really interesting.',
                        ">{#f/17}* Don't you know anything about time travel?",
                        '>{#f/15}* I had a theory that my power to RESET was time travel...',
                        '>{#f/13}* ... but I never did prove it.'
                     ],
                     [
                        ">{#p/asriel1}{#f/13}* There's a lot of different theories I've tried to prove.",
                        '>{#f/13}* Quantum gravity, simulation theory, the Skasis paradigm...',
                        '>{#f/17}* In hindsight, I might have spent a little too much time on them.',
                        '>{#f/20}* Not that it made it any less interesting!'
                     ],
                     [
                        '>{#p/asriel1}{#f/16}* I am surprised that Sans even keeps this around.',
                        '>{#f/3}* He used to work at the lab, though, so...',
                        '>{#f/4}* I guess it could just be a sentimental thing.'
                     ],
                     [
                        '>{#p/asriel1}{#f/13}* I never used to understand why monsters are so sentimental...',
                        '>{#f/17}* ... but my years as a star changed that forever.'
                     ]
                  ][Math.min(asrielinter.sansSentryBack++, 3)]
                  : [">{#p/basic}* It's a series of notes on time travel."])
            ],
      secretcallA: [
         '>{#s/phone}{#p/event}* Ring, ring...',
         '>{#p/papyrus}{#f/9}PSST, THIS IS PAPYRUS!',
         '>{#f/0}AT THE MOMENT, I AM STILL HIDING IN MY SAFE PLACE.',
         ">{#f/4}I HOPE YOU'RE NOT GETTING INTO TROUBLE...",
         '>{#f/4}BECAUSE IF YOU ARE...',
         ">{#f/9}I'D HAVE TO COME OVER THERE AND DO SOMETHING ABOUT IT!",
         ">{#f/6}... WHICH I CAN'T DO, BECAUSE OF THE CURRENT SITUATION.",
         ">{#f/7}SO DON'T GET INTO ANY TROUBLE!",
         '>{#f/5}...',
         '>{#f/5}PAPYRUS OUT...',
         '>{#s/equip}{#p/event}* Click...'
      ],
      secretcallB: [
         '>{#s/phone}{#p/event}* Ring, ring...',
         ">{#p/papyrus}{#f/0}PSST, IT'S PAPYRUS AGAIN.",
         '>{#f/5}WOWIE... IT MUST BE GETTING LATE BY NOW.',
         '>{#f/6}ARE YOU WELL?\nHAS ANYONE ELSE BEEN... KILLED?',
         '>{#f/5}THESE ARE THE QUESTIONS I ASK MYSELF EVERY DAY.',
         ">{#f/4}GRANTED, I'VE ONLY BEEN IN HIDING FOR A SHORT TIME.",
         '>{#f/7}BUT STILL!!!',
         '>{#f/5}...',
         '>{#f/4}... YOU MUST BE NEARLY OUT OF THE FOUNDRY BY NOW.',
         '>{#f/5}I WISH I COULD DO MORE TO HELP, BUT ALAS...',
         '>{#f/3}IT WOULD BE UNSAFE FOR ME TO RETURN RIGHT NOW.',
         ">{#f/9}S-STILL!!!\nI KNOW YOU WON'T LET ME DOWN!",
         '>{#f/5}...',
         '>{#f/5}PAPYRUS OUT...',
         '>{#s/equip}{#p/event}* Click...'
      ],
      spider1: () => ['>{#p/basic}* ... huh?'],
      spider2: () =>
         badSpider()
            ? [">{#p/basic}* There's something advancing in the dark."]
            : [">{#p/basic}* There's someone roving in the dark."],
      spider3: () => (badSpider() ? ['>{#p/basic}* Something powerful...'] : ['>{#p/basic}* Someone curious...']),
      spider4: () =>
         badSpider() ? ['>{#p/basic}* Something dangerous...'] : ['>{#p/basic}* Someone mysterious...'],
      spider5: () => (badSpider() ? ['>{#p/basic}* Something...'] : ['>{#p/basic}* Someone...']),
      spider6: () =>
         badSpider()
            ? [
               '>{#p/basic}* ... that should not be allowed to live.',
               '>* You think you can just get away with all this, dearies?',
               '>* Ahuhuhu~\n* You have a lot to answer for!'
            ]
            : [
               '>{#p/basic}* ... that should not be allowed to pass.',
               '>* You think you can just walk by an ELITE squad volunteer and get away with it?',
               '>* Ahuhuhu~\n* You have a lot to learn!'
            ],
      spookydate0x: pager.create(
         0,
         ['>{#p/sans}* hey, i respect what you did back there.', '>{#f/3}* thanks.'],
         ['>{#p/sans}{#f/2}* keep it up, and i might even even take you out for dinner.']
      ),
      spookydate0y: [
         ">{#p/basic}* There's a pair of eyes painted on the back of Sans's head.",
         ">{#p/basic}* They don't seem very convincing."
      ],
      spookydate0z: [
         ">{#p/basic}* Surprisingly, there are no ears painted on the side of Sans's head.",
         '>{#p/basic}* Makes a change from the back...'
      ],
      spookydate0: pager.create(
         0,
         [">{#p/sans}* thanks for treatin' me, bud.", '>* glad we could talk.'],
         ['>{#p/sans}{#f/2}* maybe later we could go out for dinner.']
      ),
      spookydate1: pager.create(
         0,
         () => [
            '>{#p/sans}* hey, i heard you made up with my bro.\n* the great papyrus.',
            '>{#f/2}* well... i consider that a {@fill=#ff0}great victory{@fill=#fff}.',
            ">{#f/0}* whaddya say we celebrate the occasion at grillby's?",
            ">{#f/3}* getting in papyrus's good books earns you a spot in mine.",
            choicer.create('* (What do you say?)', 'Yeah', 'Nah')
         ],
         () => [">{#p/sans}* my offer remains.\n* grillby's?", choicer.create('* (What do you say?)', 'Yeah', 'Nah')]
      ),
      spookydate2a: () => [">{#p/sans}* alrighty then, just for you, i'll pry myself away from my work..."],
      spookydate2b: () => [
         '>{#p/sans}* well, suit yourself.',
         ...(SAVE.data.n.sans_doge_warning++ < 1
            ? [
               ">{#p/sans}* just don't complain if you get in a fight and get hurt...",
               '>{#p/sans}* ... all because you forgot to eat something.'
            ]
            : [])
      ],
      spookydate3: ['>{#p/sans}* over here.\n* i know a shortcut.'],
      spookydate4: ['>{#p/sans}* fast shortcut, huh?'],
      spookydate5: ['>{#p/sans}* hey everyone.'],
      spookydate6: ['>{#p/basic}* Greetings, Sans.\n{#x1}* Hiya, Sansy~'],
      spookydate7: ['>{#p/basic}* Hey, Sans.\n{#x1}* (Hi, Sans.)'],
      spookydate8: [">{#p/basic}* I once heard you set the bar on fire with a flamin' grillby, is that true?"],
      spookydate9: [
         '>{#p/sans}{#f/3}* huh?\n* nah, those things are totally harmless.',
         '>{#f/2}* the only thing to ever set THIS bar on fire are my hilarious jokes.'
      ],
      spookydate9x: [">{#p/sans}{#f/3}* gee grillby, where'd everybody go?"],
      spookydate9y: [
         '>{#p/basic}{#npc/a}* ...\n* ...\n* ...',
         ">* ... Grillbz doesn't mention customers, but says seeing you is a nice relief."
      ],
      spookydate9z: ['>{#p/sans}{#f/0}* how strange.'],
      spookydate10: [">{#p/sans}* bud, why don't you come up here and take a seat?"],
      spookydate11: [
         '>{#p/sans}* whoops, watch where you sit down in here.',
         '>{#f/2}* some weirdo musta put a whoopee cushion on the seat.',
         ">{#f/0}* ... anyway, let's order.\n* whaddya want?",
         ">{#p/human}* (What do you say?){!}\n§shift=64§Flamin'\n§shift=64§Grillbys§shift=56§Sliders{#c/0/8/7}",
         ">{#p/sans}{#f/2}* hey, that's pretty good."
      ],
      spookydate12a: [">{#p/sans}* grillby, we'll have two flamin' versions of yourself."],
      spookydate12b: [">{#p/sans}* grillby, we'll have two sets of sliders."],
      spookydate13: () => [
         ">{#p/sans}* so, what'd you think of my brother's attacks?",
         choicer.create('* (What do you say?)', 'Easy', 'Hard')
      ],
      spookydate14a: [
         '>{#p/sans}* easy?\n* get outta here.',
         ">{#f/3}* papyrus's attacks are anything BUT easy.",
         ">{#f/0}* you'd be surprised how long he spent working on 'em.",
         '>{#f/0}* oh well.\n* at least he took breaks.',
         '>{#f/2}* and by that, i mean he brought his attack manuals outside.'
      ],
      spookydate14b: [
         '>{#p/sans}{#f/0}* tell me about it.',
         '>{#f/3}* once, after a particularly long day of attack revisions...',
         ">{#f/0}* papyrus revealed all that he'd been working on up to that point.",
         '>{#f/0}* i gotta say, i was impressed by what i saw.',
         ">{#f/2}* maybe one day, i'll even design an attack of my own."
      ],
      spookydate15: ['>{#p/sans}* here comes the grub.'],
      spookydate16: [
         '>{#p/sans}* regardless, you have to agree he goes above and beyond.',
         '>{#f/0}* matter of fact, those attack designs of his are a good example.',
         '>{#f/3}* not too long ago, papyrus visited the captain of the guard...',
         '>{#f/0}* and begged her to let him be in it.',
         '>{#f/3}* well, she shut the door on him.\n* classic undyne move.',
         '>{#f/0}* but when papyrus came back with his designs, a few hours later...',
         ">{#f/0}* undyne was impressed, and decided she'd give him...",
         '>{#f/2}* ... well, let\'s just call it "warrior training."'
      ],
      spookydate17: [">{#p/sans}* oh yeah, there's something i've been meaning to ask ya."],
      spookydate18: () => [
         '>{#p/sans}{#f/3}* have you ever heard of a {@fill=#ff0}talking star{@fill=#fff}?',
         choicer.create('* (What do you say?)', 'Yes', 'No')
      ],
      spookydate19a: [
         '>{#p/sans}* so you know all about it, then.',
         '>{#p/sans}* the {@fill=#003cff}signal star{@fill=#fff}.'
      ],
      spookydate19b: [">{#p/sans}* well, lemme tell ya.\n* it's called the {@fill=#003cff}signal star{@fill=#fff}."],
      spookydate20: [
         ">* they're all over the factory.",
         ">* once they pick up a signal, they'll repeat it over and over...",
         '>{#f/3}* what about it?',
         '>{#f/0}* well, papyrus told me something interesting the other day.',
         '>* sometimes, when no one else is around...',
         '>* a star appears from the heavens and whispers things to him.',
         '>* flattery...\n* advice...\n* encouragement...',
         '>{#f/3}* ... predictions.',
         '>{#f/0}* weird, huh?',
         '>* someone must be using a signal star to play a trick on him.',
         '>* keep an eye out, ok?',
         '>* thanks.'
      ],
      spookydate21: ['>{#p/sans}* ... er, grillby.\n* would you mind passing me the yamok sauce?'],
      spookydate22: ['>{#p/sans}{#f/8}* delicious.'],
      spookydate23: [
         ">{#p/sans}{#f/8}* well, i'll be at my station.",
         '>{#f/8}* oh, and be sure to grab your food on the way out.',
         '>{#f/9}* you might need it soon.'
      ],
      telescopeX: pager.create(
         0,
         () => [
            ">{#p/sans}* i'm thinking about getting into the telescope business.",
            ">{#f/3}* this here is what you'd call a PREMIUM telescope.",
            '>{#f/3}* i was planning on waiting to show it off tomorrow...',
            SAVE.data.b.voucher
               ? '>{#f/2}* but, with that premium membership voucher, you can use it early.'
               : '>{#f/2}* but, since i know you, you can use it early.',
            '>{#f/0}* howzzabout it?',
            choicer.create('* (What do you say?)', 'Yes', 'No')
         ],
         () => ['>{#p/sans}{#f/2}* wanna try my telescope?', choicer.create('* (What do you say?)', 'Yes', 'No')]
      ),
      telescopeY: () =>
         SAVE.data.b.voucher
            ? ((SAVE.data.b.f_state_voucher = true),
               [
                  ">{#p/sans}* lemme guess...\n* it doesn't work?",
                  '>{#f/3}* oh, sorry, i thought you knew.',
                  '>{#f/2}* a premium membership requires a premium subscription.',
                  ...(world.kiddo
                     ? [
                        ">{#p/kidd}{#f/2}* You're kidding, right?",
                        '>{#p/sans}{#f/0}* nope.\n* premium subscription.',
                        '>{#p/kidd}{#f/1}* Darn!'
                     ]
                     : [])
               ])
            : [
               ">{#p/sans}* lemme guess...\n* it doesn't work?",
               '>{#f/3}* oh, sorry, i thought you knew.',
               '>{#f/2}* a premium telescope requires a premium membership.',
               ...(world.kiddo
                  ? [
                     '>{#p/kidd}{#f/1}* What if I give them my membership voucher?',
                     ">{#p/sans}{#f/0}* oh.\n* well, that'd require a premium subscription.",
                     '>{#p/kidd}{#f/1}* Darn!'
                  ]
                  : [])
            ],
      telescopeZ: ['>{#p/sans}{#f/2}* oh well...'],
      temmiepat1: () => [
         '>{#p/tem}{#npc/a}* p...\n* tem heard human loves to pet tem...',
         '>* u wana...\n* PET???',
         choicer.create('{#npc}* (What do you say?)', 'Yuz.', 'Nuu!')
      ],
      temmiepat2a: ['>{#p/human}* (You pet temmie.)', '>{#p/tem}{#npc/a}* uwawawawah.....'],
      temmiepat2b: ['>{#p/tem}{#npc/a}* ...', '>{#p/tem}{#npc/a}* Go away.'],
      temmiepat3a: ['>{#p/human}* (You continue petting temmie.)', '>{#p/tem}{#npc/a}* uwawawawah.....'],
      temmiepat3b: ['>{#p/tem}{#npc/a}* ...'],
      temstatue: () =>
         SAVE.data.b.svr
            ? [
               '>{#p/human}* (You flip the switch behind the statue.)',
               '>{#p/human}* (The riddle here describes a statue like this one and hints at a sequence of notes.)',
               '>{#p/human}* (It also mentions bringing an item to a specific opposing room.)'
            ]
            : [
               '>{#p/human}* (You flip the switch behind the statue.)',
               ">{#p/basic}* ... there's a riddle here.",
               '>* "Flip the switch and bring a friend to a place you\'ve been before again..."',
               '>* "A figure not unlike my own, a statue carved and set in stone."',
               '>* "Follow the sequence of notes divined, to unlock the path to the other side..."',
               '>* "Bring the item to the room nextdoor, and all the power will be yours."'
            ],
      temstatueAftuh: () =>
         SAVE.data.b.svr
            ? [
               '>{#p/human}* (The riddle here describes a statue like this one and hints at a sequence of notes.)',
               '>{#p/human}* (It also mentions bringing an item to a specific area.)'
            ]
            : [
               '>{#p/basic}* "Flip the switch and bring a friend to a place you\'ve been before again..."',
               '>* "A figure not unlike my own, a statue carved and set in stone."',
               '>* "Follow the sequence of notes divined, to unlock the path to the other side..."',
               '>* "Bring the item to the room nextdoor, and all the power will be yours."',
               '>* ... the switch back here has already been pulled.'
            ],
      temstatueNormuh: () =>
         SAVE.data.b.svr
            ? ['>{#p/human}* (The sign emphasizes the fame of the statue.)']
            : ['>{#p/basic}* "Statue of tem... very famus"\n* "VERY!!!!!!!!!"'],
      shard1: ['>{#p/basic}* A pile of glass shards.'],
      shard2: () => [choicer.create('* (Stomp on them?)', 'Yes', 'No')],
      shard3: ['>{#p/human}* (You decide not to stomp.)'],
      shard4: ['>{#p/basic}* With the might of your indomitable soles, you charged up the ultimate power move!'],
      shard5: () => [
         '>{#p/basic}* The shards have been scattered across the room.',
         '>{#p/undyne}{#f/8}* PFFT-\n* OH MY GOD!!!',
         ...(SAVE.data.b.undyne_respecc
            ? [">{#p/undyne}{#f/1}* That's the kind of attitude I like to see!"]
            : [
               '>{#p/undyne}{#f/17}* I mean, uh, I mean, how could you do that to my kitchen...!',
               '>{#p/undyne}{#f/4}* ...'
            ])
      ],
      sanscall2: () => [
         '>{#s/phone}{#p/event}* Ring, ring...',
         '>{#p/sans}{#f/0}* hey, you there?',
         ...(SAVE.data.n.state_foundry_muffet === 1
            ? [
               ">{#f/3}* it's been a while since i heard from you.",
               '>{#f/2}* didja fall into a wormhole or something?'
            ]
            : [
               '>{#f/3}* some kid seemed really antsy to see you again.',
               '>{#f/2}* didja make a new friend while i was gone?'
            ]),
         '>{#f/0}* ... heh.',
         ">{#f/0}* i guess you're okay.",
         '>{#f/3}* i did want to keep a closer eye on you, but...',
         ">{#f/0}* for some reason, this premium telescope can't see through walls.",
         ">{#f/2}* what a scam.\n* i'll have to call my premium fraud agent.",
         ...(world.population === 0
            ? [
               '>{#f/0}* in the meantime, you should be fine for now.',
               '>{#f/3}* the area ahead of you seems pretty empty, by my estimate.',
               '>{#f/2}* but hey.\n* i could be wrong.'
            ]
            : world.killed5
               ? [
                  ">{#f/0}* in the meantime, you shouldn't have too much more trouble.",
                  '>{#f/3}* the area ahead of you will be evacuated soon.',
                  '>{#f/2}* hmm... i wonder if anyone will still be out there.'
               ]
               : geno()
                  ? [
                     '>{#f/0}* in the meantime, just be careful what you do next.',
                     ">{#f/3}* it'd be a shame if we had to evacuate the foundry as well."
                  ]
                  : antiAteThreshold()
                     ? [
                        '>{#f/0}* in the meantime, just be careful who you talk to.',
                        ">{#f/3}* rumor has it, someone's been roughhousing folks in the factory."
                     ]
                     : [
                        '>{#f/0}* in the meantime, just be careful who you talk to.',
                        ">{#f/3}* rumor has it, someone's been causing havoc near the trash depository."
                     ]),
         '>{#s/equip}{#p/event}* Click...'
      ],
      trivia: {
         f_bbox: [
            ">{#p/basic}* A bastion box.\n* There's a human inside...",
            '>{#p/basic}* Seems this one was adopted by Gerson.'
         ],
         ghostparty1: pager.create(
            0,
            () => [
               '>{#p/finalghost}* Hello there.\n* I still remember the first time we met...',
               ...[
                  [
                     '>{#p/finalghost}* Toriel was so proud of you for talking to me.',
                     ">* Personally, I don't think too much about how I talk to people, so...",
                     ">* I'm not sure what else to say about that."
                  ],
                  [
                     '>{#p/finalghost}* ... much to my dismay.',
                     '>* Being forced out of your dummy outright is kind of annoying.'
                  ],
                  [
                     '>{#p/finalghost}* It was rather silly how you ran away from me.',
                     '>* Toriel had every right to be worried about you running from an inanimate object.'
                  ],
                  [
                     '>{#p/finalghost}* ... not that I have any right to.',
                     '>* I mean, how could you actually be that boring?\n* It must be a skill.'
                  ],
                  [
                     '>{#p/finalghost}* ... ha...',
                     '>* ... maybe, when I get another vessel, the two of us can... do our thing again.',
                     ">* You remember, don't you?"
                  ],
                  [
                     '>{#p/finalghost}* ... much to my dismay.',
                     '>* Being forced to move after such a long period of blissful inanimateness...',
                     '>* It was very uncomfortable.'
                  ],
                  [
                     '>{#p/finalghost}* Toriel was so taken aback by your flirtatious ways.',
                     '>* Personally, I thought it was hilarious.',
                     '>* I was laughing on the inside.'
                  ]
               ][SAVE.data.n.state_wastelands_dummy],
               '>* Anyway...',
               ">* We all decided to hang out at Blooky's before leaving for the new homeworld.",
               '>* I will say, Blooky sure had some "interesting" music queued for download here...',
               '>* What\'s a "Hyper Rage" anyway?',
               ">{#p/basic}* A song I wish I hadn't made.",
               '>{#p/finalghost}* Oh?\n* You made this?',
               '>{#p/basic}* Unfortunately, mew.',
               '>{#p/finalghost}* I can see why you would want to forget about it.'
            ],
            [">{#p/finalghost}* She's looking to move past her violent ways."]
         ),
         ghostparty2: pager.create(
            0,
            [
               '>{#p/basic}* So, being an angry dummy got boring after a while.',
               '>* Then I asked Alphys to make me a replica of her favorite Mew Mew doll, mew!',
               '>* Wow.\n* Wow!\n* WOW!!',
               ">* I haven't felt this happy in a long time."
            ],
            ['>{#p/basic}* Sometimes all it takes is the right vessel, mew!!']
         ),
         ghostparty3: pager.create(
            0,
            [
               ">{#p/mettaton}{#e/mettaton/9}* WHILE BLOOKY'S BUSY AT THE SHOP, WE DECIDED WE'D LOOK AFTER THEIR FARM ONCE MORE.",
               ">{#e/mettaton/8}* OF COURSE, IT'S ONLY FOR A DAY BEFORE WE LEAVE THE OUTPOST.\n* BUT STILL.",
               ">{#e/mettaton/36}* THINKING BACK, I'VE BEEN PRETTY OVER-DRAMATIC ABOUT THE WHOLE THING.",
               ">{#e/mettaton/36}* BLOOKY NEVER DID -THAT- MUCH WRONG... I GUESS I JUST DIDN'T WANT TO ADMIT I WAS BORED.",
               ">{#e/mettaton/8}* BUT MAYBE THAT'S WHAT MAKES ME SUCH A GREAT ACTOR.",
               ">{#e/mettaton/37}* IT'S NOT ACTING IF YOU CAN'T PUT TOO MUCH EMOTION INTO IT!",
               '>{#e/mettaton/9}* ... OR SOMETHING LIKE THAT.'
            ],
            ['>{#p/mettaton}{#e/mettaton/9}* IF YOU EVER NEED AN ACTOR, YOU KNOW WHO TO CALL.']
         ),
         sleepingdogs: () =>
            world.darker
               ? [
                  ">{#p/basic}* It's an upright sleeping dog.",
                  ...(world.goatbro && SAVE.flag.n.ga_asrielDogepoke++ < 1
                     ? ['>{#p/asriel2}{#f/10}* I gotta say, this is rather in character.']
                     : [])
               ]
               : [
                  '>{#p/basic}* This dog appears to be asleep, yet its stance is one of ultra battle-readiness.',
                  '>{#p/basic}* Quite the para-dogs!'
               ],
         napstacouch: pager.create(
            0,
            () =>
               SAVE.data.b.svr
                  ? [">{#p/human}* (The couch appears to be new, but something tells you it's not.)"]
                  : [
                     '>{#p/basic}* This couch looks just as worn as it does brand-new.',
                     ...(ghostpartyCondition()
                        ? [
                           ">{#p/basic}* We're ghosts, so we don't really need a couch, mew.",
                           '>* We just thought the room looked better with one in it!',
                           '>{#p/mettaton}* OF COURSE.\n* ANY GOOD LIVING SPACE REQUIRES AT LEAST ONE COUCH!',
                           '>{#p/mettaton}* PREFERABLY MTT-BRAND.',
                           '>{#p/finalghost}* This seems like an entirely pointless requirement.'
                        ]
                        : [])
                  ],
            () =>
               SAVE.data.b.svr
                  ? [">{#p/human}* (The couch appears to be new, but something tells you it's not.)"]
                  : ['>{#p/basic}* This couch looks just as worn as it does brand-new.']
         ),
         f_armor_sign: () =>
            SAVE.data.b.svr
               ? ['>{#p/human}* (The sign warns of dogs who appear to be asleep.)']
               : ['>{#p/basic}* "Be wary of sleeping dogs."'],
         f_backsign: () =>
            SAVE.data.b.svr
               ? ['>{#p/human}* (The sign speaks of strength of will in times of uncertainty.)']
               : ['>{#p/basic}* "Even when you\'re lost, the will to find yourself shows through."'],
         f_cheesetable: () =>
            SAVE.data.b.svr
               ? [">{#p/human}* (Something about this cheese doesn't sit right with you.)"]
               : world.darker
                  ? ['>{#p/basic}* Nothing about this is real.']
                  : SAVE.data.n.plot === 72
                     ? ['>{#p/basic}* Despite being holographic, it looks like a small slice of cheese was taken...']
                     : ['>{#p/basic}* Holographic cheese.', '>{#p/basic}* The table is holographic, too.'],
         f_creamsign: () =>
            SAVE.data.b.svr
               ? [">{#p/human}* (The sign declares the monsters' ownership of the outpost.)"]
               : world.population_area('s') < 6 || world.genocide || SAVE.data.n.plot === 72 // NO-TRANSLATE
                  ? ['>{#p/basic}* "We claim this outpost as our own, never to be taken prisoner again."']
                  : ['>{#p/basic}* The glyphs have been painted over with a list of 21 different flavors.'],
         f_doge_sign: () =>
            SAVE.data.b.svr
               ? ['>{#p/human}* (The sign derides boxes for their lack of real-time utility.)']
               : [
                  '>{#p/basic}* "This is a box."',
                  '>* "You can put an item inside or take an item out."',
                  '>* "Why would you, though??"\n* "It\'s not like you can use items while they\'re inside."',
                  '>* "Sincerely, a box critic."'
               ],
         f_doge1: () =>
            SAVE.data.b.svr
               ? ['>{#p/human}* (The sign details the difference in power between human and monster SOULs.)']
               : [
                  '>{#p/basic}* "Why did the humans attack?"\n* "Indeed, it seemed that they had nothing to fear."',
                  '>* "Humans are unbelievably strong. It would take the SOUL of nearly every monster..."',
                  '>* "... just to equal the power of a single human SOUL."'
               ],
         f_doge3: () =>
            SAVE.data.b.svr
               ? ['>{#p/human}* (The sign outlines a key weakness of human SOULs and its consequences.)']
               : [
                  '>{#p/basic}* "But humans have one weakness. Ironically, it is the strength of their SOUL."',
                  '>* "Its power allows it to persist outside the human body, even after death."',
                  '>* "If a monster defeats a human, they can take its SOUL."',
                  '>* "A monster with a human SOUL... a cosmic being with unfathomable power."',
                  ...(world.goatbro && SAVE.flag.n.ga_asrielBeast++ < 1
                     ? [">{#p/asriel2}{#f/15}* Cosmic doesn't even BEGIN to cover it..."]
                     : [])
               ],
         f_doge5: () =>
            SAVE.data.b.svr
               ? [">{#p/human}* (The sign depicts something the likes of which you've never seen before.)"]
               : [
                  ">{#p/basic}* It's an illustration of a harrowing space creature...",
                  ">* There's something very unsettling about this drawing.",
                  ...(world.goatbro && SAVE.flag.n.ga_asrielDrawing++ < 1
                     ? [
                        ">{#p/asriel2}{#f/5}* Look, $(name)!\n* It's us!\n* ... sort of.",
                        '>{#f/4}* ... is that really how they think we looked?'
                     ]
                     : [])
               ],
         f_gersonshop: () =>
            SAVE.data.b.svr
               ? [
                  [
                     ">{#p/asriel1}{#f/17}* To think he'd been running that store for this long...",
                     ">{#f/20}* I wonder what other things he's sold over the years.",
                     ">{#f/15}* Remember, in this timeline, I've only been here two weeks.",
                     ">{#f/13}* My guess is, he's mainly been selling trinkets...",
                     '>{#f/16}* Either from the early outpost days, or the old homeworld.'
                  ],
                  [
                     '>{#p/asriel1}{#f/13}* I did hear something about a certain artifact...',
                     '>{#f/15}* One so dangerous, its use was banned in the war.',
                     ">{#f/16}* I'm not sure if Gerson ever sold it, though.",
                     '>{#f/13}* Even he might not be old enough to know if it exists.'
                  ],
                  [
                     ">{#p/asriel1}{#f/15}* Knowledge about that artifact's existence...",
                     ">{#f/13}* It'd have to be within someone who was born even before the war.",
                     '>{#f/16}* Someone like that would know all about that sort of thing.'
                  ]
               ][Math.min(asrielinter.f_gersonshop++, 2)]
               : ['>{#p/basic}* "Gerson\'s Bits \'n\' Bobs!"\n* "A humble store for all your factory life needs!"'],
         f_hub_sign: () =>
            SAVE.data.b.svr
               ? ['>{#p/human}* (The sign lists off what lies in each direction.)']
               : [
                  '>{#p/basic}* "Left - Dark Zone"\n* "Forward - Undyne\'s House"\n* "Right - Gerson\'s Shop"',
                  '>{#p/basic}* "Backward - Snail Preserve"'
               ],
         f_lobbywindow: [
            ">{#p/human}* (You feel like you've already seen a window like this from another perspective.)"
         ],
         f_shinycab: () =>
            SAVE.data.b.svr
               ? [
                  [
                     '>{#p/asriel1}{#f/13}* Looks like it already cleaned out the room...',
                     '>{#f/17}* No trash here!'
                  ],
                  [
                     '>{#p/asriel1}{#f/15}* Unless you consider yourself a piece of trash.',
                     ">{#f/16}* Knowing you, that wouldn't surprise me.",
                     ">{#f/31}* You'd probably be proud of it or something."
                  ],
                  [
                     '>{#p/asriel1}{#f/13}* ... come on.',
                     ">{#f/17}* You don't REALLY believe you're a piece of trash, do you?"
                  ]
               ][Math.min(asrielinter.f_shinycab++, 2)]
               : world.darker
                  ? ['>{#p/basic}* A garbage disposal box.']
                  : [
                     '>{#p/basic}* A garbage disposal box.\n* While active, it fills the room with ultra-hot gas.',
                     ">{#p/basic}* You wouldn't survive."
                  ],
         f_path1: () =>
            SAVE.data.b.svr
               ? ['>{#p/human}* (The sign describes how a being can leave the force field.)']
               : [
                  '>{#p/basic}* "When the humans trapped us, they sealed us in with a force field."',
                  '>* "Only beings with a powerful SOUL can leave."'
               ],
         f_path2: () =>
            SAVE.data.b.svr
               ? ['>{#p/human}* (The sign describes how the force field can be broken.)']
               : [
                  '>{#p/basic}* "There is only one way to free ourselves."',
                  '>* "If a huge power, equivalent to seven human SOULs, attacks the force field..."',
                  '>* "It will be destroyed."'
               ],
         f_path3: () =>
            SAVE.data.b.svr
               ? ['>{#p/human}* (It appears this sign was very wrong indeed.)']
               : [
                  '>{#p/basic}* "But this cursed place is not even in the solar system."',
                  '>* "There is no way a human could find us out here."',
                  '>* "We will remain trapped here forever."'
               ],
         f_puzzle1_sign: () =>
            SAVE.data.b.svr
               ? world.postnoot && world.nootflags.has('f_puzzle1') // NO-TRANSLATE
                  ? [
                     '>{#p/human}* (The sign tells you to ignore the puzzle outright.)',
                     ...[
                        [
                           ">{#p/asriel1}{#f/15}* Whoever wrote that must've had a bad sense of humor...",
                           ">{#f/17}* You'd have to be REALLY bored to ignore a puzzle this simple."
                        ],
                        [
                           '>{#p/asriel1}{#f/9}* What are you looking at me for?\n* I love puzzles.',
                           ">{#f/4}* Big ol' puzzle lover right here."
                        ],
                        ['>{#p/asriel1}{#f/15}* ...']
                     ][Math.min(asrielinter.f_puzzle1_sign++, 2)]
                  ]
                  : ['>{#p/human}* (The sign informs you on how to solve the puzzle.)']
               : world.postnoot && world.nootflags.has('f_puzzle1') // NO-TRANSLATE
                  ? ['>{#p/basic}* "Walk right into the next room if you don\'t mind."\n* "And ignore the switch."']
                  : [
                     '>{#p/basic}* "Move the pylons to guide the laser into the receiver."\n* "Then press the switch."'
                  ],
         f_puzzle2_sign: () =>
            SAVE.data.b.svr
               ? world.postnoot && world.nootflags.has('f_puzzle2') // NO-TRANSLATE
                  ? [
                     '>{#p/human}* (The sign claims nobody would care about this puzzle.)',
                     ...[
                        [
                           '>{#p/asriel1}{#f/13}* Yeah, puzzles like this just solve themselves sometimes...',
                           '>{#f/17}* What else can I say?'
                        ],
                        [
                           '>{#p/asriel1}{#f/10}* Huh?\n* You think I solved this one for you...?',
                           '>{#f/20}* No way.\n* Puzzles barely interest me at all.'
                        ],
                        ['>{#p/asriel1}{#f/15}* ...']
                     ][Math.min(asrielinter.f_puzzle2_sign++, 2)]
                  ]
                  : ['>{#p/human}* (The sign informs you on how to solve the puzzle.)']
               : world.postnoot && world.nootflags.has('f_puzzle2') // NO-TRANSLATE
                  ? ['>{#p/basic}* "Honestly, who cares about this puzzle?"\n* "It\'s not worth it."']
                  : ['>{#p/basic}* "All pylons must be used in the puzzle solution."'],
         f_puzzle3_sign: () =>
            SAVE.data.b.svr
               ? [
                  '>{#p/human}* (The sign declares the decided unfairness of this puzzle as the reason it was shut down.)'
               ]
               : !world.genocide && world.trueKills < 30
                  ? ['>{#p/basic}* "The puzzler\'s guild has shut this puzzle down on the basis of its unfairness."']
                  : world.postnoot && world.nootflags.has('f_puzzle3') // NO-TRANSLATE
                     ? [
                        '>{#p/basic}* The contents of this sign have been crossed out...',
                        '>* ... and crossed out again?'
                     ]
                     : [
                        '>{#p/basic}* The contents of this sign have been crossed out...',
                        '>* ... with a distinct sense of illegible chicken-scratch.'
                     ],
         f_statue_kidd: () =>
            SAVE.data.b.svr
               ? ['>{#p/asriel1}{#f/20}* Er, try standing the other switch.']
               : ['>{#p/kidd}{#f/1}* Stand on the other switch!'],
         f_telescope: () =>
            SAVE.data.b.svr
               ? [
                  [">{#p/asriel1}{#f/15}* Frisk.\n* It's no use.\n* Don't even bother."],
                  [
                     '>{#p/asriel1}{#f/13}* Even if you COULD get a premium subscription...',
                     ">{#p/asriel1}{#f/15}* You'd never be able to cancel it."
                  ],
                  [">{#p/asriel1}{#f/16}* There's just too many premium hoops to jump through here."]
               ][Math.min(asrielinter.f_telescope++, 2)]
               : world.darker
                  ? [">{#p/basic}* It's a telescope."]
                  : ['>{#p/basic}* It\'s a "premium" telescope.'],
         f_temhistory: () =>
            SAVE.data.b.svr
               ? ['>{#p/human}* (The painting depicts a tale of a nondescript nature.)']
               : world.darker
                  ? ['>{#p/basic}* The history of Tem.']
                  : SAVE.data.n.plot === 72
                     ? ['>{#p/basic}* Tem history.\n* May its richness and deepness never be forgotten.']
                     : ['>{#p/basic}* Tem history.\n* The deepest and most rich history in all the galaxy.'],
         f_temhole: () =>
            SAVE.data.b.svr
               ? ['>{#p/human}* (Through the hole, you stare into the rumbling underbelly of the factory.)']
               : world.runaway ||
                  SAVE.data.s.state_foundry_deathroom === 'f_village' || // NO-TRANSLATE
                  world.genocide ||
                  30 <= world.trueKills
                  ? [">{#p/basic}* It's a hole."]
                  : [">{#p/basic}* It's a temmie in a hole.\n* A tem hole."],
         f_trash: pager.create(
            1,
            ['>{#p/basic}* Trash.'],
            () => (world.darker ? ['>{#p/basic}* Trash.'] : ['>{#p/basic}* Still trash.']),
            () => (world.darker ? ['>{#p/basic}* Trash.'] : ['>{#p/basic}* Just trash...']),
            () => (world.darker ? ['>{#p/basic}* Trash.'] : ['>{#p/basic}* The trash is trash.']),
            () => (world.darker ? ['>{#p/basic}* Trash.'] : ['>{#p/basic}* Trashy trash.']),
            () => (world.darker ? ['>{#p/basic}* Trash.'] : ['>{#p/basic}* Surprisingly, trash.']),
            () => (world.darker ? ['>{#p/basic}* Trash.'] : ['>{#p/basic}* Trash!!!'])
         ),
         f_trash1: () =>
            SAVE.data.b.svr
               ? ['>{#p/human}* (The tablet seems to describe the lifecycle of a particular kind of flower.)']
               : world.darker
                  ? ['>{#p/basic}* The data on this tablet is of little importance.']
                  : [
                     ">{#p/basic}* It's an old tablet.\n* The data is mostly corrupted...",
                     '>* "A flower from beyond... a second life... the shape of a star..."',
                     ">* That's all you can make out."
                  ],
         f_trash2: () =>
            SAVE.data.b.svr
               ? ['>{#p/human}* (The tablet describes various uses for wormholes.)']
               : world.darker
                  ? ['>{#p/basic}* This tablet contains nothing but meaningless trivia.']
                  : [
                     ">{#p/basic}* It's a tablet with information pertaining to wormhole travel.",
                     '>* An additional section mentions the danger of wormhole weapons...'
                  ],
         f_trash3: () =>
            SAVE.data.b.svr
               ? ['>{#p/human}* (The tablet contains the entire run of a science fiction anime.)']
               : world.darker
                  ? [">{#p/basic}* It's a video tablet.\n* You wouldn't be interested in the contents."]
                  : [
                     ">{#p/basic}* It's an old video tablet for a science fiction anime.",
                     '>* The cover reads "MEW MEW STARFIRE: COMPLETE COLLECTION."'
                  ],
         f_undynedummy: () =>
            SAVE.data.n.plot === 72
               ? [
                  ">{#p/basic}* I've been thinking of finding a new identity...",
                  '>* The "Mad Dummy" shtick just doesn\'t suit me anymore.',
                  '>* I wonder if Alphys could make me a new body...',
                  '>* Something like... a robo-girl, or... a digi-woman...',
                  '>* Or even a sci-fi doll?'
               ]
               : SAVE.data.b.killed_mettaton
                  ? []
                  : SAVE.data.s.state_foundry_deathroom === 'f_undyne' // NO-TRANSLATE
                     ? [
                        '>{#p/basic}* No.\n* No!\n* NO!!',
                        '>* You killed my only training partner.',
                        '>* How DARE you kill the only person who knows how to hit me properly!?',
                        ...(SAVE.data.n.bad_lizard < 2 && 49 <= SAVE.data.n.plot
                           ? ['>* No matter how many dumb game shows I agree to be in to try and distract myself...']
                           : ['>* No matter what lame excuse I come up with...']),
                        ">* I'll never be able to replace her!"
                     ]
                     : world.goatbro
                        ? [
                           '>{#p/basic}* Seriously.\n* Seriously?\n* SERIOUSLY!?',
                           '>{#p/basic}* You guys are genuinely adorable.',
                           ...(SAVE.flag.n.ga_asrielDummy++ < 1
                              ? ['>{#p/asriel2}{#f/13}* Are we... really...', '>{#p/asriel2}{#f/16}* ...']
                              : [])
                        ]
                        : SAVE.data.n.plot_date > 1.3 && SAVE.data.n.plot_date < 2.1
                           ? SAVE.data.n.state_wastelands_toriel === 0
                              ? [">{#p/basic}* Don't worry.\n* Everything is fine.\n* This happens all the time."]
                              : ['>{#p/basic}* What.\n* What?\n* WHAT!?', '>{#p/basic}* This happens all the time.']
                           : SAVE.storage.inventory.contents.includes('tvm_mewmew') // NO-TRANSLATE
                              ? [
                                 ">{#p/basic}* Yeah, you're so cool with that Mew Mew doll of yours, huh?",
                                 ">{#p/basic}* You think it's so adorable and lovable and...",
                                 ">{#p/basic}* W-what!?\n* I'm not blushing!"
                              ]
                              : 65 <= SAVE.data.n.plot
                                 ? SAVE.data.b.a_state_hapstablook
                                    ? 68 <= SAVE.data.n.plot
                                       ? ['>{#p/basic}* You did it, human.', ">{#p/basic}* I'm sorry I ever doubted you."]
                                       : [
                                          '>{#p/basic}* Well.\n* Well!\n* WELL!',
                                          '>* You certainly know how to choose your battles.'
                                       ]
                                    : ['>{#p/basic}* Ugh.\n* Ugh!\n* UGH!', '>{#p/basic}* My life really sucks right now.']
                                 : 63 <= SAVE.data.n.plot && SAVE.data.b.a_state_hapstablook
                                    ? [
                                       ">{#p/basic}* Hey, aren't you supposed to be in Mettaton's next show?",
                                       '>* What are you doing way back here?',
                                       '>* Come on.\n* Come on!\n* COME ON!!',
                                       '>* Get back in the spotlight so we can go forward with our plan!'
                                    ]
                                    : SAVE.data.n.bad_lizard < 2 && 49 <= SAVE.data.n.plot
                                       ? [
                                          '>{#p/basic}* So.\n* So!\n* SO!',
                                          ">* You're a TV star now, huh?",
                                          '>* Yeah, Mettaton usually has that effect on people.'
                                       ]
                                       : SAVE.data.n.plot === 47.2
                                          ? ['>{#p/basic}* Ready or not, here she comes!!']
                                          : SAVE.data.n.state_wastelands_toriel === 0
                                             ? ['>{#p/basic}* Hello again!']
                                             : SAVE.data.b.f_state_dummypunch
                                                ? [
                                                   '>{#p/basic}* Hey.\n* Hey!\n* HEY!',
                                                   ...(SAVE.data.b.f_state_dummypunch_meanie
                                                      ? [
                                                         ">* You don't hit too bad for a dummy.",
                                                         ">* It's a pity...",
                                                         ">* BECAUSE I'M ALREADY TAKEN!",
                                                         '>* Go find your own dummy and get the hell outta my face!'
                                                      ]
                                                      : [
                                                         '>* Hands off the goods!\n* I ain\'t rated "E" for everyone, you know!',
                                                         '>* Wimpy strikes like yours will never compare to those of Undyne!'
                                                      ])
                                                ]
                                                : SAVE.data.b.f_state_dummyhug
                                                   ? [
                                                      '>{#p/basic}* Hey.\n* Hey!\n* HEY!',
                                                      ">* ... you're...\n* Actually a pretty good hugger.",
                                                      '>* So... even though I have my fear... I still appreciate the attempt.'
                                                   ]
                                                   : SAVE.data.b.f_state_dummytalk
                                                      ? [
                                                         '>{#p/basic}* Hey.\n* Hey!\n* HEY!',
                                                         ...(SAVE.data.b.f_state_dummytalk_meanie
                                                            ? [
                                                               ">* You've got quite the intimidating stare.",
                                                               ">* It's a shame you wasted it on me...",
                                                               ">* BECAUSE I COULDN'T CARE LESS!"
                                                            ]
                                                            : [
                                                               '>* Eyes off the prize!\n* I ain\'t rated "E" for everyone, you know!',
                                                               ">* A weak stare like yours will never compare to Undyne's menacing gaze!"
                                                            ])
                                                      ]
                                                      : ['>{#p/basic}* What.\n* What?\n* WHAT!?', ">{#p/basic}* It's a living."],
         f_view: ['>{#p/kidd}{#f/14}* Awesome...'],
         f_village_egg: () => [">{#p/basic}* It's hard-boiled."],
         f_village_sign1: () =>
            SAVE.data.b.svr
               ? ['>{#p/human}* (The sign welcomes you to the area.)']
               : ['>{#p/tem}* "hOI!!"\n* "welcom to..."\n* "TEM VILLAGE!!!"'],
         f_village_sign2: () =>
            SAVE.data.b.svr
               ? ['>{#p/human}* (The sign implores you to check the nearby shop.)']
               : ['>{#p/tem}* "hOI!!"\n* "u shud check out..."\n* "TEM SHOP!!!"'],
         f_village_sign3: () =>
            SAVE.data.b.svr
               ? ['>{#p/human}* (The sign agrees with another sign imploring you to check the nearby shop.)']
               : ['>{#p/tem}* "yaYA!! i AGREES!!"\n* "shud check..."\n* "TEM SHOP!!!"'],
         fstatue: () =>
            SAVE.data.b.svr
               ? [
                  ['>{#p/asriel1}{#f/13}* This statue...', '>{#f/15}* Is this supposed to be of me...?'],
                  [
                     ">{#p/asriel1}{#f/13}* I don't remember this being built...",
                     ">{#f/23}* Must've been after I...",
                     '>{#f/22}* ...'
                  ],
                  ['>{#p/asriel1}{#f/22}* ...']
               ][Math.min(asrielinter.fstatue++, 2)]
               : [">{#p/basic}* It's an old, derelict statue."],
         hapstabed: () =>
            SAVE.data.b.svr
               ? [
                  [
                     ">{#p/asriel1}{#f/15}* I doubt even WE'D sleep very well in this bed.",
                     '>{#f/23}* No matter how comfortable that might sound.'
                  ],
                  [
                     '>{#p/asriel1}{#f/13}* Yeah.\n* This is a ghost bed, Frisk.',
                     '>{#f/13}* Ghosts have different sorts of needs than... well, not ghosts.',
                     ">{#f/13}* And I'm not just talking about their sleeping arrangements."
                  ],
                  [
                     '>{#p/asriel1}{#f/13}* Ghosts, more than any other kind of monster...',
                     '>{#f/13}* Seem to focus more on the world around them.',
                     ">{#f/15}* It's like they never let what's in front of them...",
                     '>{#f/13}* Distract them from the bigger picture for long.',
                     ">{#f/17}* On second thought, maybe that's why Mettaton loves TV.",
                     '>{#f/16}* Getting the "bigger picture" is basically the whole idea...'
                  ],
                  ['>{#p/asriel1}{#f/20}* Mettaton and his TV shows, am I right?']
               ][Math.min(asrielinter.hapstabed++, 3)]
               : world.darker
                  ? [">{#p/basic}* It's a ghost bed."]
                  : SAVE.data.n.plot === 72
                     ? [">{#p/basic}* Just because you saved the galaxy doesn't mean you can sleep on a ghost bed."]
                     : [">{#p/basic}* It's a ghost bed.\n* You'd sleep right through it."],
         hapstabook1: () => [
            ...(SAVE.data.b.svr ? [] : [">{#p/basic}* It's a voicebook."]),
            '>{#p/human}* (You pick up the voicebook and open to the only recorded section.)',
            '>{#p/hapstablook}* Dear diary, volume one...',
            '>* Humans dream of so many fantastical stories, yet when I look out my window...',
            '>* ... all I can see is a wall.',
            '>* Is it right that we monsters have become used to this sad state of living?',
            '>* Is it right that only the youngest children seem to be truly alive?',
            '>* Our sense of wonder has been beaten out of us...',
            ">* There's no denying it now.",
            '>{#p/human}* (You put the book back down.)',
            ...(SAVE.data.b.svr || SAVE.data.b.oops || SAVE.data.n.state_foundry_hapstacom1++ > 0
               ? []
               : [
                  '>{#p/basic}* ... he was always like this in the early days...',
                  '>{#p/basic}* Always wanting everyone to be as happy as he was.',
                  '>{#p/basic}* Especially me.'
               ])
         ],
         hapstabook2: () => [
            ...(SAVE.data.b.svr ? [] : [">{#p/basic}* It's a voicebook."]),
            '>{#p/human}* (You pick up the voicebook and open to the only recorded section.)',
            '>{#p/hapstablook}* Dear diary, volume two...',
            ">* I've been binge-watching old human television series.",
            ">* These people aren't like what I've been told... in fact, they're a lot like us.",
            '>* Living, laughing, loving...\n* Hurting and crying.\n* Doing what they believe in.',
            '>* They say humanity is a species that should be feared.',
            '>* But the more I see of them... the more I grow tired of that idea.',
            ">* Monsters aren't all starlight and roses, either.",
            '>{#p/human}* (You put the book back down.)',
            ...(SAVE.data.b.svr || SAVE.data.b.oops || SAVE.data.n.state_foundry_hapstacom2++ > 0
               ? []
               : [
                  '>{#p/basic}* I remember how, when we first met, he was the first one to open up to me.',
                  ">{#p/basic}* It wasn't long before I opened up, too..."
               ])
         ],
         hapstabook3: () => [
            ...(SAVE.data.b.svr ? [] : [">{#p/basic}* It's a voicebook."]),
            '>{#p/human}* (You pick up the voicebook and open to the only recorded section.)',
            '>{#p/hapstablook}* Dear diary, volume three...',
            ">* It's been a hard day at the farm for Blooky and me.",
            ">* Two of the snails we'd been looking after escaped, and we couldn't find them.",
            '>* No matter what I do, something like this always happens.',
            ">* Blooky says it's fine, of course, but they say that about everything.",
            '>* And I wonder why I still bother working here.',
            '>{#p/human}* (You put the book back down.)',
            ...(SAVE.data.b.svr || SAVE.data.b.oops || SAVE.data.n.state_foundry_hapstacom3++ > 0
               ? []
               : [
                  '>{#p/basic}* I tried to help the family out, but with the way things were...',
                  ">{#p/basic}* There wasn't much I could do."
               ])
         ],
         hapstabook4: () => [
            ...(SAVE.data.b.svr ? [] : [">{#p/basic}* It's a voicebook."]),
            '>{#p/human}* (You pick up the voicebook and open to the only recorded section.)',
            '>{#p/hapstablook}* Dear diary, volume four...',
            '>* I was at the store today when I ran into a girl... Alphys, I think?',
            ">* Apparently, she's next in line to be the royal scientist.\n* Who would've thought?",
            '>* Anyway, her and I have become fast friends due to our shared love of humanity.',
            '>* Funny... the previous royal scientist was sympathetic, too.',
            '>* I wonder why that is.',
            '>{#p/human}* (You put the book back down.)',
            ...(SAVE.data.b.svr || SAVE.data.b.oops || SAVE.data.n.state_foundry_hapstacom4++ > 0
               ? []
               : ['>{#p/basic}* Oh, if only you knew...'])
         ],
         hapstabook5: () => [
            ...(SAVE.data.b.svr ? [] : [">{#p/basic}* It's a voicebook."]),
            '>{#p/human}* (You pick up the voicebook and open to the only recorded section.)',
            '>{#p/hapstablook}* Dear diary, volume five...',
            '>* Alphys and I have started work on a new project.',
            ">* We'll be taking inspiration from those imaginative humans...",
            '>* ... by starting a new, public- broadcast television series!',
            ">* I've already written numerous elaborate scripts.",
            ">* If this doesn't lift the public's spirits, then I don't know what will!",
            '>* Haha... let\'s just say things could get "explosive."',
            '>{#p/human}* (You put the book back down.)',
            ...(SAVE.data.b.svr || SAVE.data.b.oops || SAVE.data.n.state_foundry_hapstacom5++ > 0
               ? []
               : ['>{#p/basic}* All he ever wanted to do was make them happy...'])
         ],
         hapstabook6: () => [
            ...(SAVE.data.b.svr ? [] : [">{#p/basic}* It's a voicebook."]),
            '>{#p/human}* (You pick up the voicebook and open to the only recorded section.)',
            '>{#p/hapstablook}* Dear diary, volume six...',
            '>* That Alphys... shes done something I never could have imagined.',
            '>* Thanks to her, my future seems brighter than ever...',
            '>* ... I only hope the others come to understand my choice.',
            '>* No matter what happens to me next, a part of me will always miss being with you.',
            '>* Please... never forget that.\n* Even if I myself do.',
            '>{#p/human}* (You put the book back down.)',
            ...(SAVE.data.b.svr || SAVE.data.b.oops || SAVE.data.n.state_foundry_hapstacom6++ > 0
               ? []
               : SAVE.data.n.plot < 68
                  ? [
                     '>{#p/basic}* Sentimental as ever, eh?',
                     ">{#p/basic}* Well.\n* With any luck, you'll be re- united on better terms soon."
                  ]
                  : [
                     '>{#p/basic}* Sentimental as ever, eh?',
                     ">{#p/basic}* Heh.\n* I'm just glad you got to re- unite with them in the end."
                  ])
         ],
         hapstacouch: () =>
            SAVE.data.b.svr
               ? ['>{#p/human}* (But you knew you still had a little farther to go before you could rest.)']
               : world.darker
                  ? [">{#p/basic}* It's just a couch."]
                  : SAVE.data.n.plot === 72
                     ? [
                        ">{#p/basic}* Another couch, another temptation... you're so tired after all this traveling.",
                        ">{#p/basic}* ... but you can't stay here forever!"
                     ]
                     : [
                        ">{#p/basic}* Another couch, another temptation... you're so tired after all this traveling.",
                        '>{#p/basic}* ... but you have to keep going!'
                     ],
         hapstaposter: () =>
            SAVE.data.b.svr
               ? ['>{#p/human}* (The caption on this poster describes a love story.)']
               : ['>{#p/basic}* "Two star-crossed lovers fall into a digital abyss..."'],
         hapstatv: () =>
            SAVE.data.b.svr
               ? [
                  [
                     '>{#p/asriel1}{#f/13}* This thing must be centuries old...',
                     '>{#f/17}* Makes you wonder how it got here from Earth so quickly.'
                  ],
                  [
                     '>{#p/asriel1}{#f/13}* You do realize Earth is thousands of lightyears from here, right?',
                     '>{#f/15}* The odds of this being here are so slim...',
                     ">{#f/16}* That part of me thinks it wasn't an accident.",
                     '>{#f/10}* But why would the humans send us their centuries-old junk?'
                  ],
                  [
                     '>{#p/asriel1}{#f/17}* My theory is that some human was... secretly on our side.',
                     ">{#f/13}* They couldn't send us modern technology, that'd be detected.",
                     '>{#f/1}* But if they sent us ancient technology...',
                     '>{#f/2}* Well, the other humans might not have noticed.',
                     ">{#f/3}* But that's just a theory."
                  ],
                  [">{#p/asriel1}{#f/21}* Sure would've been nice to have an extra ally out there..."]
               ][Math.min(asrielinter.hapstatv++, 3)]
               : ['>{#p/basic}* An old earth television set.'],
         hapstawindow: () =>
            SAVE.data.b.svr
               ? ['>{#p/human}* (Through the window, you gaze long into the wall on the other side.)']
               : world.darker
                  ? [">{#p/basic}* There's nothing to see here."]
                  : ['>{#p/basic}* A beautiful view... of the outside foundry wall.'],
         k_bonedrawer: pager.create(
            0,
            () => [
               ">{#p/undyne}{#f/1}* I'll be honest...",
               ">{#f/14}* It's been a long time since I've seen the bottom of that drawer.",
               SAVE.data.b.oops
                  ? '>{#p/basic}* Nothing but bones.'
                  : ">{#p/basic}* It's a drawer reserved just for Papyrus.\n* I like this."
            ],
            () => [
               SAVE.data.b.oops
                  ? '>{#p/basic}* Nothing but bones.'
                  : ">{#p/basic}* It's a drawer reserved just for Papyrus.\n* I like this."
            ]
         ),
         k_broadsword: pager.create(
            0,
            () => [
               '>{#p/undyne}{#f/1}* Humans can be awful, but their history... kinda rules.',
               '>{#f/1}* Case in point, this giant energy saber!',
               '>{#f/1}* Historically, humans wielded sabers up to ten times their size.',
               '>{#f/15}* Not to mention their inter-dimensional portals...',
               '>{#f/15}* Colossal parsec-length battleships...',
               '>{#f/1}* When I first heard about it, I immediately wanted my own!',
               ">{#f/14}* That's why Alphys and I built a giant replica saber together.",
               '>{#f/12}* She even figured out all the specs herself!',
               SAVE.data.b.oops
                  ? '>{#p/basic}* This weapon seems to have quite a storied past.'
                  : '>{#p/basic}* I once saw a saber just like this... except it was real, and a lot smaller.'
            ],
            () => [
               SAVE.data.b.oops
                  ? '>{#p/basic}* This weapon seems to have quite a storied past.'
                  : '>{#p/basic}* I once saw a saber just like this... except it was real, and a lot smaller.'
            ]
         ),
         k_closet: pager.create(
            0,
            () => [
               ">{#p/undyne}{#f/1}* That's my snack closet.",
               '>{#f/17}* What, you thought I had a bedroom back there or something?',
               '>{#f/8}* Pfft, hah!\n* Everyone knows I sleep on a cold, hard floor.',
               SAVE.data.b.oops
                  ? ">{#p/basic}* It's locked."
                  : '>{#p/basic}* I get the feeling there\'s more to this "closet" than snacks.'
            ],
            () => [
               SAVE.data.b.oops
                  ? ">{#p/basic}* It's locked."
                  : '>{#p/basic}* I get the feeling there\'s more to this "closet" than snacks.'
            ]
         ),
         k_fridge: pager.create(
            0,
            () => [
               ">{#p/undyne}{#f/11}* Cold food and I don't really get along.",
               '>{#f/14}* Luckily, Alphys modded my fridge so it heats up food instead!',
               '>{#f/1}* Neat, huh?',
               SAVE.data.b.oops
                  ? '>{#p/basic}* There are several pre-heated plates of spaghetti inside.'
                  : '>{#p/basic}* A hot fridge would have done wonders back home.'
            ],
            () => [
               SAVE.data.b.oops
                  ? '>{#p/basic}* There are several pre-heated plates of spaghetti inside.'
                  : '>{#p/basic}* A hot fridge would have done wonders back home.'
            ]
         ),
         k_otherdrawer: pager.create(
            0,
            () => [
               SAVE.data.b.undyne_respecc
                  ? '>{#p/undyne}{#f/12}* Careful with that stuff.'
                  : ">{#p/undyne}{#f/17}* Steal anything from that drawer, and you're DEAD.",
               ">{#p/basic}* There's a silverware drawer.\n* It has forks, spoons, knives...",
               '>* ... tiny cosmo-spears, plasma sabers, dimensional axes, anti-grav boomerangs...'
            ],
            [
               ">{#p/basic}* There's a silverware drawer.\n* It has forks, spoons, knives...",
               '>* ... tiny cosmo-spears, plasma sabers, dimensional axes, anti-grav boomerangs...'
            ]
         ),
         k_piano: pager.create(
            0,
            [
               ">{#p/undyne}{#f/1}* That's my piano.",
               '>{#f/16}* Say what you want about humans, they have great taste in acoustics!',
               '>{#p/basic}* Smells... scientific.'
            ],
            ['>{#p/basic}* Smells... scientific.']
         ),
         k_sink: pager.create(
            0,
            [
               '>{#p/undyne}{#f/1}* I once forgot to turn the sink off before heading out to work.',
               '>{#f/17}* When I got back home, the house was completely flooded...',
               '>{#f/8}* Not that it was a problem for ME!\n* Fuhuhu!',
               '>{#p/basic}* The drain is eerily clean of any fur or hair.'
            ],
            ['>{#p/basic}* The drain is eerily clean of any fur or hair.']
         ),
         k_stove: pager.create(
            0,
            [
               '>{#p/undyne}{#f/1}* This stove is supposed to be some top-of-the- line MTT thing.',
               '>* But, as much as technology advances...',
               '>* Nothing will ever beat food home-cooked with fire magic.',
               '>{#p/basic}* The stove has seen an average amount of use.'
            ],
            ['>{#p/basic}* The stove has seen an average amount of use.']
         ),
         k_window: pager.create(
            0,
            () => [
               '>{#p/undyne}{#f/16}* Yeah.',
               '>{#f/14}* Papyrus tends to go the "scenic route."',
               '>{#p/basic}* He flew out so fast, it triggered a sonic boom.'
            ],
            ['>{#p/basic}* He flew out so fast, it triggered a sonic boom.']
         ),
         plankstop: () =>
            SAVE.data.b.svr
               ? [
                  ['>{#p/asriel1}{#f/13}* Seems like a dead end.'],
                  [">{#p/asriel1}{#f/15}* We're not just stand here all day, right?"],
                  ['>{#p/asriel1}{#f/10}* What are we even doing out here.'],
                  ['>{#p/asriel1}{#f/10}* ...']
               ][Math.min(asrielinter.plankstop++, 3)]
               : world.darker || SAVE.data.n.plot < 42.1
                  ? []
                  : [">{#p/basic}* The endless abyss of space is met only by the distant sight of the factory's edge."],
         wallsign4: () =>
            SAVE.data.b.svr
               ? ['>{#p/human}* (The sign labels its location.)']
               : ['>{#p/basic}* "Left - Maintenance Shaft"\n* "Right - Foundry Exit"']
      },
      truetext: {
         doge1: ['>{#p/basic}* ... well, that went better than I expected.'],
         muffet: ['>{#p/basic}* ... that was too close.'],
         preundyne: [
            '>{#p/basic}* ...',
            ">* To doubt you after everything you've done...",
            ">* ... no.\n* I know you'll find a way to get through to her.",
            '>* You just have to believe in yourself... right?',
            '>* ...\n* Go on, step forward.',
            '>* Show her the kindness she needs to see.'
         ],
         unddate: () => [
            ">{#p/basic}* So.\n* One second, we're running for our lives from her...",
            '>* And the next?',
            ">* We're cooking spaghetti with her.\n* And burning her house down.",
            '>{#p/human}* (You hear a small giggle.)',
            ...(SAVE.data.n.plot > 64.1
               ? [
                  ">{#p/basic}* Jeez.\n* We've come a long way since you first arrived, huh?",
                  ">* Even if there's not much left to see now...",
                  ">* I still appreciate the time I've spent with you."
               ]
               : [
                  '>{#p/basic}* Oh, uh, sorry!\n* I...',
                  ">* It's been a while since I've felt... happy like this.",
                  '>* With you here, things never seem to go wrong.'
               ]),
            ">* So... you just keep doing what you're doing, alright?",
            ">* And I'll...",
            ">* I'll be here for you."
         ],
         undyne1: [
            '>{#p/basic}* We did it.\n* We really did it!',
            '>* I mean, uh, you did it.',
            '>* Yeah...',
            ">* ... at least it'll be nice to finally have her off your back.",
            '>* At least for now.',
            '>* Heh.\n* Well done, partner.',
            ">* I don't think anyone's going to replicate THAT stunt again."
         ],
         view1: [
            '>{#p/basic}* Look at that...',
            ">* ...\n* It's the Citadel.",
            ">* It's where this journey's been taking us.",
            '>* The silver city, nestled in the twin arches of Aradon...',
            ">* ...\n* I'm getting ahead of myself.",
            ">* We've still got a ways to go before we get there, so...",
            ">* For now, let's just admire the view before us."
         ]
      },
      unddate0: () =>
         world.trueKills > 0 && SAVE.data.n.state_foundry_undyne === 0
            ? [
               ">{#p/papyrus}SO YOU'RE HERE.",
               ">{#f/5}UNDYNE... ISN'T READY TO BEFRIEND YOU RIGHT NOW.",
               SAVE.data.b.undyne_respecc
                  ? '>{#f/5}SHE BLAMES HERSELF FOR TRUSTING YOU...'
                  : '>{#f/5}SHE BLAMES HERSELF FOR LETTING YOU GET AWAY...',
               '>{#f/6}AND THAT YOU... DESERVE TO DIE??',
               '>{#f/7}WELL, I DISAGREE!',
               ">{#f/0}BUT THAT'S OKAY.",
               ">{#f/0}I'LL JUST WAIT HERE UNTIL SHE RETURNS."
            ]
            : [
               '>{#p/papyrus}OHO, THE HUMAN ARRIVES!',
               ...(SAVE.data.n.state_foundry_undyne > 0
                  ? [
                     ">{#f/4}... THOUGH, I'M NOT QUITE SURE WHERE UNDYNE IS.",
                     ">{#f/5}SHE ISN'T NORMALLY OUT THIS LONG...",
                     ">{#f/6}AND SHE WON'T EVEN ANSWER THE PHONE!",
                     ">{#f/0}WELL, I'LL JUST WAIT HERE UNTIL SHE RETURNS."
                  ]
                  : [
                     '>{#f/4}ARE YOU UP FOR THE DAUNTING TASK...',
                     '>{#f/1}OF BEFRIENDING THE CAPTAIN OF THE ROYAL GUARD!?!?',
                     choicer.create('* (Befriend Undyne?)', 'Yes', 'No')
                  ])
            ],
      unddate0x: () =>
         world.trueKills > 0 || SAVE.data.n.state_foundry_undyne > 0
            ? [
               ">{#p/papyrus}{#f/0}UNDYNE'S NOT HERE RIGHT NOW.",
               ">{#p/papyrus}{#f/4}YOU'LL HAVE TO WAIT FOR HER LIKE I ALWAYS DO."
            ]
            : [
               '>{#p/papyrus}{#f/0}OKAY!\nALL READIED UP TO HANG OUT?',
               choicer.create('* (Befriend Undyne?)', 'Yes', 'No')
            ],
      // outside: start
      unddate1a: ['>{#p/papyrus}{#f/0}OKAY!\nSTAND BEHIND ME!'],
      unddate1b: pager.create(
         0,
         ['>{#p/papyrus}{#f/4}HMM... STILL GETTING READY?', '>{#f/0}WELL, TAKE YOUR TIME!'],
         ['>{#p/papyrus}{#f/0}TAKE YOUR TIME!']
      ),
      unddate2a: ['>{#p/papyrus}{#f/4}PSST...\nGIVE HER THIS.'],
      unddate2b: ['>{#f/0}SHE LOVES THESE!'],
      unddate3: [
         '>{#p/undyne}{#f/14}* Hi, Papyrus!',
         '>{#f/1}* Ready for your extra- private, one-on-one training?',
         '>{#p/papyrus}YOU BET I AM!',
         '>{#f/9}AND I BROUGHT A FRIEND!'
      ],
      unddate4: () =>
         SAVE.data.b.undyne_respecc
            ? [
               ">{#p/undyne}{#f/1}* Hi, I don't think we've...",
               '>{#f/8}* ... OH MY GOD!!!',
               '>{#p/papyrus}{#f/6}... UNDYNE?',
               ">{#p/undyne}{#f/12}* Pfft, I can't believe you actually brought THEM here.",
               '>{#p/papyrus}{#f/5}...',
               '>{#p/undyne}{#f/1}* Come on, get inside!'
            ]
            : [
               ">{#p/undyne}{#f/1}* Hi, I don't think we've...",
               '>{#f/4}* ...',
               '>{#p/papyrus}...',
               '>{#p/undyne}{#f/5}* ...',
               '>{#p/papyrus}{#f/5}...',
               ">{#p/undyne}{#f/17}* Why don't.\n* You two.\n* Come in?"
            ],
      // inside: pre-sitdown
      unddate5: ['>{#p/papyrus}HERE, UNDYNE.', '>MY FRIEND WANTED YOU TO HAVE THIS!'],
      unddate5x: [
         '>{#p/undyne}{#f/17}* There you are!',
         ">{#f/1}* We've been waiting here FOREVER for you!",
         ">{#p/papyrus}{#f/4}AND, DON'T WORRY, I ALREADY SHOWED UNDYNE YOUR GIFT.",
         '>{#f/0}SHE LOVED IT!',
         '>{#p/undyne}{#f/14}* Yeah, uh...',
         '>{#f/12}* I sure did!'
      ],
      unddate6: ['>{#p/undyne}{#f/1}* Uhhh... thanks.'],
      unddate7: [">{#f/14}* I'll, uh, put it with the others."],
      unddate8: ['>* So are we ready to start?'],
      unddate9: [
         '>{#p/papyrus}{#f/1}WHOOPSY DOOPSY!\nI JUST REMEMBERED!',
         '>{#f/0}I HAVE TO CHECK ON MY BROTHER!!',
         '>{#f/9}YOU TWO HAVE FUN!!!'
      ],
      unddate10: () =>
         SAVE.data.b.undyne_respecc
            ? [
               SAVE.data.b.f_state_undynecheck
                  ? ">{#p/undyne}{#f/17}* If it isn't the human who tried to break into my house IN FRONT OF ME."
                  : ">{#p/undyne}{#f/1}* Well then.\n* Look who's come crawling back for more.",
               ">{#f/16}* To be honest, though, I dunno if I'm in the mood for another fight.",
               '>{#f/12}* Still, I can get you something to drink in the meantime!',
               ">{#f/1}* Have a seat, and I'll see what I can do."
            ]
            : [
               '>{#p/undyne}{#f/11}* ...',
               ...(SAVE.data.b.f_state_undynecheck
                  ? [
                     '>* So why were YOU so desperate to break into my house earlier?',
                     '>* Is this some kind of humilation tactic?',
                     '>* To parade into my house and act like you OWN the place?'
                  ]
                  : [
                     '>* So why are YOU here?',
                     '>* To rub your victory in my face?',
                     '>* To humiliate me even further?'
                  ]),
               '>{#f/4}* IS THAT IT?',
               choicer.create('* (What do you say?)', 'Yes', 'No')
            ],
      unddate11a: () => [
         '>{#p/undyne}{#f/11}* Then why are you here?',
         '>{#f/1}* Wait, I get it.',
         ">* You think that I'm gonna be friends with you, huh?",
         '>{#f/17}* Right???',
         choicer.create('* (What do you say?)', 'Yes', 'No')
      ],
      unddate11a1a: [
         '>{#p/undyne}{#f/14}* Really?\n* How delightful!\n* I accept!',
         ">{#f/8}* Let's all frolick in the fields of friendship!",
         '>{#f/7}* ... NOT!',
         ">{#f/1}* You're the enemy of everyone's hopes and dreams!",
         ">* If you weren't my houseguest, I'd kick you out right now!",
         '>{#f/5}* ...'
      ],
      unddate11a1b: [
         '>{#p/undyne}{#f/15}* Then again...',
         '>{#f/17}* ...',
         '>{#f/4}* WHAT ARE YOU LOOKING AT?',
         ">{#f/5}* I WOULDN'T MAKE FRIENDS WITH YOU JUST TO IMPRESS SOMEONE???",
         '>{#f/12}* Not at all!',
         '>{#f/1}* In fact, my sudden change of mind...',
         '>{#f/7}* Comes from nothing but a burning passion for VENGEANCE!'
      ],
      unddate11a2: [
         '>{#p/undyne}{#f/13}* ...',
         '>{#f/11}* So... let me get this straight.',
         '>* First, you parade into my house.',
         ">{#f/7}* And then you don't give me a reason WHY??",
         ">{#f/4}* You little BRAT!\n* If you weren't my houseguest, I'd...!",
         '>{#f/5}* ...',
         '>{#f/4}* ... no, you know what?',
         ">{#f/7}* I'll prove you WRONG.",
         ">{#f/1}* And we aren't JUST going to be friends."
      ],
      unddate11b: [
         '>{#p/undyne}{#f/4}* Oh-ho-ho.',
         ">{#f/7}* Well, I've got news for you, BRAT.",
         ">{#f/1}* You're on MY battlefield now!",
         ">{#f/7}* And you AREN'T going to humiliate me.",
         ">{#f/11}* No.\n* I'll TELL you what's going to happen.",
         ">{#f/17}* We're going to hang out.",
         ">{#f/17}* We're going to have a good time.",
         '>{#f/7}* We\'re going to be "friends."'
      ],
      unddate12a: [
         ">{#f/1}* I'll make you like me so much...",
         ">{#f/7}* You won't be able to think of anyone else!"
      ],
      unddate12b: [">{#f/8}* Fuhuhuhu!\n* It's the PERFECT REVENGE!!"],
      unddate12c: [">{#f/12}* Err... why don't you have a seat?"],
      unddate13: () => [
         SAVE.data.b.undyne_respecc
            ? '>{#p/undyne}{#f/1}* Need anything?'
            : '>{#p/undyne}{#f/14}* Need anything?',
         choicer.create('* (What do you say?)', 'Hungry', 'Book', 'Home', 'Nothing')
      ],
      unddate13a1: [
         '>{#p/undyne}{#f/1}* You want a snack or something?',
         '>{#f/1}* Let me see what I have in the closet.'
      ],
      unddate13a2: ['>{#p/undyne}{#f/1}* Ah... this should do nicely.'],
      unddate13a3: ['>{#p/undyne}{#f/14}* All yours...\n* Fuhuhu.'],
      unddate13a4a: [">{#p/human}* (You're carrying too much.)"],
      unddate13a4b: ['>{#p/human}* (You got the Odd Snack.)'],
      unddate13a5: () =>
         SAVE.data.b.drop_snack
            ? [
               ">{#p/undyne}{#f/17}* I know dropping food is fun, but I can't let it all go to waste.",
               '>{#p/undyne}{#f/12}* Sorry.'
            ]
            : SAVE.data.b.undyne_respecc
               ? [
                  ">{#p/undyne}{#f/17}* Just because you're my friend doesn't mean you can have two snacks!",
                  '>{#p/undyne}{#f/1}* Maybe some other time.'
               ]
               : [
                  ">{#p/undyne}{#f/11}* Listen punk, it's one snack per person here.",
                  '>* Get with the program or get lost.'
               ],
      unddate13b: pager.create(
         0,
         () => [
            '>{#p/undyne}{#f/13}* A book???\n* Does this look like a librarby to you?',
            ">{#f/1}* The only books you'll find in the kitchen are cookbooks!",
            ">{#f/4}* Which I don't use, because cooking is supposed to be an ART.",
            '>{#f/7}* Not some bogged-down process with rules and regulations.',
            '>{#f/5}* Why does nobody seem to get that???',
            SAVE.data.b.undyne_respecc
               ? '>{#f/1}* ... let me know if you need anything else.'
               : '>{#f/14}* Well, let me know if you need anything else!'
         ],
         [
            ">{#p/undyne}{#f/1}* Look, there's a librarby in Starton.",
            ">{#f/1}* If you really want to read a book, that's your best bet.",
            '>{#f/7}* But not right now!!!',
            '>{#f/14}* ... let me know if you need anything else.'
         ]
      ),
      unddate13c: pager.create(
         0,
         () => [
            '>{#p/undyne}{#f/3}* ...',
            '>{#f/17}* This IS home.',
            ">{#f/17}* You're already HERE.",
            '>{#f/16}* Unless you mean the home planet...',
            '>{#f/9}* ...',
            '>{#f/19}* But nothing can bring that back.',
            SAVE.data.b.undyne_respecc
               ? ">{#f/1}* ... I'll be here if you need anything else."
               : '>{#f/14}* Well, let me know if you need anything else!'
         ],
         () => [
            ">{#p/undyne}{#f/16}* I'd give a description of that place if I could, y'know.",
            '>{#f/16}* But I was born here, on the outpost...',
            '>{#f/9}* The memory of our world seems to fade more and more every day.',
            SAVE.data.b.undyne_respecc
               ? '>{#f/1}* ... let me know if you need anything else.'
               : '>{#f/12}* ... let me know if you need anything else.'
         ]
      ),
      unddate13d: () => [
         SAVE.data.b.undyne_respecc
            ? ">{#p/undyne}{#f/1}* Well, alright.\n* Remember, I'm here if you change your mind."
            : ">{#p/undyne}{#f/14}* Well, alright.\n* Remember, I'm here if you change your mind!"
      ],
      unddate14: () => [choicer.create('* (Sit down?)', 'Yes', 'No')],
      unddate15a: () => [
         '>{#p/undyne}{#f/14}* Comfortable?',
         SAVE.data.b.undyne_respecc
            ? ">{#f/1}* I'll get you something to drink."
            : ">{#f/14}* I'll get you something to drink."
      ],
      unddate15b: () => [
         '>{#p/undyne}{#f/14}* Comfortable?',
         SAVE.data.b.undyne_respecc
            ? ">{#f/1}* I'll get you something to..."
            : ">{#f/14}* I'll get you something to...",
         '>{#f/17}* ...',
         '>{#f/17}* What are you still doing with a cup of dampening fluid?',
         '>{#f/17}* Throw that thing away!'
      ],
      unddate15c: () => [
         '>{#p/human}* (You discarded the electro- dampening fluid.)',
         SAVE.data.b.undyne_respecc ? '>{#p/undyne}{#f/1}* Thanks.' : '>{#p/undyne}{#f/14}* Much appreciated.'
      ],
      unddate16: () => [
         SAVE.data.b.undyne_respecc
            ? '>{#p/undyne}{#f/1}* All set!\n* Take your pick!'
            : '>{#p/undyne}{#f/14}* All set!\n* What would you like?'
      ],
      unddate17: () => [
         ">{#p/undyne}{#f/17}* HEY!\n* DON'T GET UP!",
         ...(SAVE.data.b.undyne_respecc
            ? ['>{#f/10}* ...', '>{#f/16}* Sorry, reflex.\n* I seriously gotta stop doing that...']
            : [">{#f/17}* YOU'RE THE GUEST!\n* SIT DOWN AND ENJOY YOURSELF!", '>{#f/17}* ...'])
      ],
      unddate18: () =>
         SAVE.data.b.undyne_respecc
            ? ['>{#p/undyne}{#f/1}* Um, why not just point to what you want?', '>{#f/16}* You can use the spear.']
            : [
               '>{#p/undyne}{#f/12}* Um, why not just point to what you want?',
               '>{#f/12}* You can use the spear!'
            ],
      unddate19x: '* Move left and right to aim.\n* Select with [Z].',
      unddate19y: () => [
         SAVE.data.b.undyne_respecc ? '* Undyne\n* Awesome fish lady.' : '* Undyne\n* Mad fish lady.',
         '* Snack Closet\n* Tons of goodies in there!',
         '* Water\n* The smart choice.',
         '* Sugar\n* Great for sweetening tea.',
         '* Exoberry Punch\n* Made locally... or so they say.',
         "* Hot Cocoa\n* It's a blue cylinder.",
         '* Tea\n* Blatantly correct choice?',
         '* Fridge\n* Too much for one meal.',
         '* Energy Saber\n* Legendary human weapon.'
      ],
      unddate20: [
         pager.create(0, ['>{#p/undyne}{#f/13}* Are you...\n* Hitting on me???'], ['>{#p/undyne}{#f/13}* ?????']),
         pager.create(
            0,
            [
               ">{#p/undyne}{#f/17}* You're supposed to be choosing a drink??",
               ">{#f/1}* There's nothing in that closet but snacks."
            ],
            [">{#p/undyne}{#f/1}* Really, it's all just snacks in there.\n* Nothing more!"],
            ['>{#p/undyne}{#f/1}* Really!']
         ),
         pager.create(
            0,
            [
               '>{#p/undyne}{#f/13}* You want WATER?',
               '>{#f/11}* Just... water.',
               '>{#f/11}* With no added flavors or sugars or anything.',
               '>{#f/11}* ...'
            ],
            ['>{#p/undyne}{#f/11}* ...']
         ),
         pager.create(
            0,
            [
               ">{#p/undyne}{#f/12}* That sugar's only there for the tea.",
               ">{#f/7}* I'm not gonna give you a cup of sugar!"
            ],
            () =>
               SAVE.data.b.undyne_respecc
                  ? ['>{#p/undyne}{#f/1}* No sugar, sweetheart.']
                  : [">{#p/undyne}{#f/14}* The sugar's for the tea, mmm'kay?"]
         ),
         pager.create(
            0,
            [
               '>{#p/undyne}{#f/1}* Ah... exoberry punch.',
               ">{#f/14}* Well, Papyrus loves this stuff, so I guess it's alright."
            ],
            ['>{#p/undyne}{#f/17}* You gonna pick something or what?']
         ),
         pager.create(
            0,
            ['>{#p/undyne}{#f/14}* Nothing like a good cup of hot cocoa.'],
            ['>{#p/undyne}{#f/17}* Hot cocoa, right?']
         ),
         pager.create(0, ['>{#p/undyne}{#f/14}* Tea, huh?'], [">{#p/undyne}{#f/12}* So it's tea, right?"]),
         pager.create(
            0,
            [
               '>{#p/undyne}{#f/4}* The fridge!?\n* You want to have the entire fridge!?',
               '>{#p/undyne}{#f/17}* No!'
            ],
            ['>{#p/undyne}{#f/17}* I said no!'],
            ['>{#p/undyne}{#f/17}* No means no!'],
            ['>{#p/undyne}{#f/17}* Do you not know what the word "no" means?'],
            ['>{#p/undyne}{#f/17}* ... clearly not!'],
            ['>{#p/undyne}{#f/17}* ...']
         ),
         pager.create(
            0,
            [
               '>{#p/undyne}{#f/1}* The energy saber...',
               ">{#p/undyne}{#f/12}* That's the weapon the humans wielded against us in the war.",
               '>{#p/undyne}{#f/16}* ... one of them, anyway.'
            ],
            [">{#p/undyne}{#f/17}* It's not for sale."]
         )
      ],
      unddate21: () => [choicer.create('* (Choose this drink?)', 'Yes', 'No')],
      unddate22: [
         ['>{#p/undyne}{#f/16}* Okay, I guess...'],
         [">{#p/undyne}{#f/1}* Let's fruit-punch your ticket to hydration!"],
         ['>{#p/undyne}{#f/14}* No time like hot cocoa time!'],
         ['>{#p/undyne}{#f/14}* Tea, coming right up.']
      ],
      unddate22x: [">{#p/undyne}{#f/12}* It'll take a moment for the water to boil."],
      unddate22y: () => [
         SAVE.data.b.undyne_respecc ? '>{#p/undyne}{#f/1}* There.' : '>{#p/undyne}{#f/12}* All done!'
      ],
      unddate23: ['>{#p/undyne}{#f/1}* Here we are.'],
      unddate24: [
         ['>{#p/undyne}{#f/12}* Enjoy...?'],
         [">{#p/undyne}{#f/12}* Careful, it's sour."],
         [">{#p/undyne}{#f/14}* Careful, it's hot."],
         [">{#p/undyne}{#f/14}* Careful, it's hot."]
      ],
      unddate25: [
         () => [
            '>{#p/undyne}{#f/17}* Seriously?\n* Just drink it already!',
            '>{#p/human}{#s/heal}* (You take a sip of the water.)',
            ">{#p/basic}* It, uh... yeah, it's water.\n* So it tasted fine.",
            SAVE.data.b.undyne_respecc
               ? ">{#p/undyne}{#f/1}* Heh.\n* At least you're happy."
               : ">{#p/undyne}{#f/12}* Well, you look like you're satisfied."
         ],
         [
            ">{#p/undyne}{#f/17}* What's the holdup?\n* Just drink it already!",
            '>{#p/human}{#s/heal}* (You take a sip of the punch.)',
            ">{#p/basic}* It's so sour, your lips are already puckered up..."
         ],
         [
            ">{#p/undyne}{#f/17}* It's not that hot!!\n* Just drink it already!",
            '>{#p/human}{#s/heal}* (You take a sip of the hot cocoa.)',
            ">{#p/basic}* It's burning..."
         ],
         [
            ">{#p/undyne}{#f/17}* It's not that hot!!\n* Just drink it already!",
            '>{#p/human}{#s/heal}* (You take a sip of the tea.)',
            ">{#p/basic}* It's burning..."
         ]
      ],
      unddate25x: () => [
         ">* But other than that, it's pretty good.",
         ...(SAVE.data.b.undyne_respecc
            ? [">{#p/undyne}{#f/1}* Heh.\n* I'm glad you like it."]
            : [
               ">{#p/undyne}{#f/12}* It's good, right?",
               '>{#f/8}* Nothing but the best for my ABSOLUTELY SPECIAL FRIEND!'
            ])
      ],
      unddate27: [
         [
            ">{#p/undyne}{#f/12}* You know, it's kinda funny you chose THAT drink...",
            '>{#f/12}* Water, I mean.',
            '>{#f/1}* Asgore and I once joked about how humans are made of it...',
            ">{#f/8}* And that if we drank it, we'd be CONSUMING humanity!!!",
            ">{#f/16}* ... well, he didn't really find it funny.",
            ">{#f/16}* The guy's got a soft spot for just about everyone..."
         ],
         [
            ">{#p/undyne}{#f/12}* You know, it's kinda neat you picked out THAT drink...",
            '>{#f/12}* Exoberry punch...',
            '>{#f/1}* Alphys and Papyrus sort of "invented" it together.',
            ">{#f/16}* I wasn't the biggest fan, but when I showed it to Asgore...",
            ">{#f/12}* Well, let's just say he had it put into mass- production."
         ],
         [
            ">{#p/undyne}{#f/12}* You know, it's kinda cool you went with THAT drink...",
            '>{#f/12}* Hot cocoa...',
            '>{#f/16}* This one time, after the CORE malfunctioned...',
            '>{#f/16}* They had to reboot the entire atmospheric system.',
            '>{#f/10}* No heat, very little air... it got colder, and colder...',
            '>{#f/1}* Then, Asgore came over and offered me a hot cocoa.',
            '>{#f/12}* We sat together in this very room...'
         ],
         [
            ">{#p/undyne}{#f/12}* You know, it's kinda weird you ended up liking THAT tea...",
            '>{#f/12}* Starling flower tea...',
            ">{#f/1}* That's always been Asgore's favorite kind."
         ]
      ],
      unddate28: () => [
         '>{#p/undyne}{#f/14}* Actually, now that I think about it...',
         '>{#f/12}* You kinda remind me of him.',
         ...(SAVE.data.b.undyne_respecc
            ? [
               '>{#f/17}* I mean, your fighting styles are TOTALLY different, but...',
               ">{#f/1}* You're the only two people who've actually managed to beat me!",
               '>{#f/9}* ... in a sense.'
            ]
            : [">{#f/8}* You're both TOTAL weenies!", '>{#f/9}* ... sort of.'])
      ],
      unddate29: [
         '>{#p/undyne}{#f/16}* The thing is, I was a pretty hot-headed kid.',
         '>* Once, to prove I was the strongest, I tried to fight Asgore.',
         '>{#f/17}* Emphasis on TRIED.',
         '>{#f/1}* I could barely land a single blow on him!',
         '>* And worse, the whole time, he refused to fight back!',
         '>{#f/9}* I was so humiliated...',
         '>{#f/16}* Afterwards, he apologized and said something goofy...',
         '>* "Excuse me, do you want to know how to beat me?"',
         '>{#f/1}* I said yes, and from then on, he trained me.',
         '>{#f/16}* One day, during practice, I finally knocked him down.',
         '>{#f/9}* I felt... bad.',
         '>{#f/12}* But he was beaming...',
         '>{#f/1}* I had never seen someone more proud to get their butt kicked.',
         '>* Anyway, long story short, after completing my training...',
         '>{#f/14}* I took up leadership of the Royal Guard!',
         ">{#f/8}* So I'm the one who gets to train dorks to fight!",
         '>{#f/1}* ... like, uh, Papyrus.'
      ],
      unddate30: [
         '>{#f/16}* But, um, to be honest...',
         ">{#f/16}* ... I don't know if...",
         '>{#f/9}* I can ever let Papyrus into the Royal Guard.',
         ">{#f/17}* Don't tell him I said that!",
         ">{#f/10}* He's just...\n* Well...",
         ">{#f/9}* I mean, it's not that he's stupid.",
         '>{#f/17}* His attack designs are actually pretty freaking wild!',
         ">{#f/10}* It's just that...\n* He's...",
         ">{#f/17}* He's too innocent and nice!!!",
         '>{#f/16}* I mean, look, he was SUPPOSED to capture you...',
         '>{#f/11}* And he ended up being FRIENDS with you instead.',
         '>{#f/4}* I could NEVER send him into battle!',
         ">{#f/9}* He'd get ripped into little smiling shreds.",
         ">{#f/12}* That's part of why...",
         '>{#f/12}* I started teaching him how to cook, you know?',
         '>{#f/9}* So, um, maybe he can do something else with his life.'
      ],
      unddate31: () => [
         SAVE.data.b.undyne_respecc
            ? '>{#p/undyne}{#f/1}* Oh, sorry, I was talking for so long...'
            : '>{#p/undyne}{#f/12}* Oh, sorry, I was talking for so long...'
      ],
      unddate32: [
         [">{#f/12}* You're out of water, aren't you?"],
         [">{#f/12}* You're out of punch, aren't you?"],
         [">{#f/12}* You're out of cocoa, aren't you?"],
         [">{#f/12}* You're out of tea, aren't you?"]
      ],
      unddate33: () => [
         SAVE.data.b.undyne_respecc
            ? ">{#p/undyne}{#f/1}* Heh, don't worry.\n* I'll get you some more."
            : ">{#p/undyne}{#f/12}* Heh, don't worry.\n* I'll get you some more."
      ],
      unddate34: ['>{#p/undyne}{#f/17}* Wait a second...', '>{#f/17}* Papyrus...\n* His cooking lesson...'],
      unddate35: [
         '>{#p/undyne}{#f/17}* HE WAS SUPPOSED TO HAVE THAT RIGHT NOW!!!',
         ">{#f/11}* And if HE's not here to have it...",
         ">{#f/7}* YOU'LL HAVE TO HAVE IT FOR HIM!"
      ],
      unddate36: () =>
         SAVE.data.b.undyne_respecc
            ? [
               ">{#f/1}* That's right!",
               '>{#f/1}* NOTHING has brought Papyrus and I closer than cooking!',
               '>{#f/17}* Heheh, if you thought we were friends before...',
               '>{#f/8}* JUST WAIT UNTIL YOU SEE US AFTER THIS!'
            ]
            : [
               ">{#f/1}* That's right!",
               '>{#f/1}* NOTHING has brought Papyrus and I closer than cooking!',
               '>{#f/17}* Which means that if I give you his lesson...',
               ">{#f/8}* WE'LL BECOME CLOSER THAN YOU CAN EVER IMAGINE!"
            ],
      unddate37: [">{#f/1}* First, let's start with the sauce!!"],
      unddate38: () => [
         '>{#f/1}* Envision these veggies as your mortal enemy!',
         '>{#f/7}* Now, pound them to bits with your fists!!',
         choicer.create('* (What will you do?)', 'Pet', 'Pound')
      ],
      unddate39a: () => [
         '>{#p/human}* (You pet the vegetables in an affectionate manner.)',
         SAVE.data.b.undyne_respecc
            ? ">{#p/undyne}{#f/17}* OH MY GOD!!!\n* NOW I -KNOW- YOU'RE\n  JUST SCREWING WITH ME!!!"
            : '>{#p/undyne}{#f/17}* OH MY GOD!!!\n* STOP PETTING THE ENEMY!!!',
         ">{#x1}{#f/7}* I'll show you how it's done!",
         '>{#f/4}* NGAHHH!'
      ],
      unddate39b: () =>
         world.meanie
            ? ['>{#p/human}* (You punch the vegetables with all your might.)']
            : [
               '>{#p/human}* (You punch the vegetables with all your might.)\n* (You knock over a tomato.)',
               '>{#p/undyne}{#f/1}* YEAH!\n* YEAH!',
               '>{#f/1}* Our minds are uniting against these healthy ingredients!',
               ">{#x1}{#f/7}* NOW IT'S MY TURN!",
               '>{#f/4}* NGAHHH!'
            ],
      unddate40: (res: number) => [
         ...(world.meanie && res === 1
            ? [
               SAVE.data.b.undyne_respecc
                  ? ">{#p/undyne}{#f/2}* YEAH!!!\n* THAT'S THE WARRIOR I KNOW!!!"
                  : '>{#p/undyne}{#f/6}* Feisty today, huh?',
               ">{#f/6}* Heh, we'll just scrape this into a bowl later."
            ]
            : [">{#p/undyne}{#f/6}* Uh, we'll just scrape this into a bowl later."]),
         '>{#f/2}* But for NOW!'
      ],
      unddate41: [
         '>{#p/undyne}{#f/1}* We add the noodles!',
         '>{#f/1}* Homemade noodles are the best, so I always keep some around.'
      ],
      unddate41x: ['>{#p/undyne}{#f/12}* Uhh, you can come over here now, kiddo.'],
      unddate41y: () => [
         '>{#p/undyne}{#f/1}* Anyway, you see these noodles here, right?',
         '>{#f/1}* Well...',
         ">{#f/17}* DISH 'EM OUT!",
         choicer.create('* (What will your approach be?)', 'Careful', 'Fierce')
      ],
      unddate42a: [
         '>{#p/human}* (You carefully place each spaghetti strand in one at a time.)',
         '>* The noodles clank against the empty bottom.',
         '>{#p/undyne}{#f/17}* I mean, that works???',
         ">{#f/1}* Well, now it's time to stir the pasta!"
      ],
      unddate42b: [
         '>{#p/human}* (You throw everything into the pot, including the box.)',
         '>* The box and the noodles clank against the empty bottom.',
         ">{#p/undyne}{#f/17}* YEAH!!\n* I'M INTO IT!!",
         ">{#f/1}* Alright!\n* Now it's time to stir the pasta!"
      ],
      unddate43: [
         '>{#p/undyne}{#f/1}* As a general rule of thumb, the more you stir...',
         '>{#f/17}* The better it tastes!'
      ],
      unddate44: ['>{#p/undyne}{#f/17}* Ready?', ">{#f/1}* Let's do it!"],
      unddate45: '* Press [Z] repeatedly to stir!',
      unddate46: ['>{*}{#p/undyne}{#f/17}* Stir harder!{^20}{%}'],
      unddate46x: [">{*}{#p/undyne}{#f/17}* Don't just stand there!{^20}{%}"],
      unddate47: ['>{*}{#p/undyne}{#f/7}* HARDER!{^20}{%}'],
      unddate47x: ['>{*}{#p/undyne}{#f/7}* STIR, DAMN IT!{^20}{%}'],
      unddate48: ['>{*}{#p/undyne}{#f/8}* HARDER!!!{^20}{%}'],
      unddate48x: ['>{*}{#p/undyne}{#f/8}* STIR!!!{^20}{%}'],
      unddate49: ['>{*}{#p/undyne}{#f/8}* Ugh, let me do it-{^10}{%}'],
      unddate50: [">{#p/undyne}{#f/8}* Fuhuhuhu!\n* That's the stuff!"],
      unddate51: [
         '>{#p/undyne}{#f/1}* Alright, now for the final step...',
         '>{#f/17}* TURN UP THE HEAT!',
         '>{#f/1}* Let the stovetop symbolize your passion!',
         '>{#f/1}* Let your hopes and dreams turn into burning fire!',
         ">{#f/8}* And of course, don't hold anything back!!!"
      ],
      unddate52: ['>{#p/undyne}{#f/17}* Ready?', '>{#f/1}* Here we go!'],
      unddate53: '* Hold [RIGHT] to crank it up!',
      unddate53x: ['>{*}{#p/undyne}{#f/8}* You fool!\n* This burner only goes ONE WAY!!!{^20}{%}'],
      unddate54: ['>{*}{#p/undyne}{#f/17}* Make it hotter!{^20}{%}'],
      unddate54x: ['>{*}{#p/undyne}{#f/17}* What are you doing?{^20}{%}'],
      unddate55: ['>{*}{#p/undyne}{#f/7}* HOTTER!{^20}{%}'],
      unddate55x: ['>{*}{#p/undyne}{#f/7}* STOP HESITATING!{^20}{%}'],
      unddate56: ['>{*}{#p/undyne}{#f/8}* HOTTER!!!{^20}{%}'],
      unddate56x: ['>{*}{#p/undyne}{#f/8}* JUST DO IT!!!{^20}{%}'],
      unddate57a: ['>{*}{#p/undyne}{#f/17}* Ugh, let me do it...{^10}{%}'],
      unddate57b: ['>{*}{#p/undyne}{#f/17}* See, this is how you-{^20}{%}'],
      unddate58: [">{*}{#p/undyne}{#f/17}* No, wait, that's too-{^10}{%}"],
      unddate59: ['>{#p/undyne}{#f/14}* Ah.'],
      unddate60: [">{#p/undyne}{#f/14}* Man, no wonder Papyrus isn't improving at cooking anymore."],
      unddate61: [">{#p/undyne}{#f/12}* So what's next?\n* Trash hunting?\n* Entanglement bracelets?"],
      unddate62: () =>
         SAVE.data.b.undyne_respecc
            ? [
               '>{#p/undyne}{#f/10}* ...',
               '>{#f/9}* ... who am I kidding...',
               ">{#f/16}* I really let this get outta hand, didn't I...?",
               '>{#f/16}* Heh...'
            ]
            : [
               '>{#p/undyne}{#f/10}* ...',
               '>{#f/9}* ... who am I kidding...',
               ">{#f/16}* I really screwed this up, didn't I...?",
               '>{#f/16}* Heh...'
            ],
      unddate63: () =>
         SAVE.data.b.undyne_respecc
            ? [
               ">{#f/16}* Y'know what?",
               ">{#f/9}* I'm not ready to give up on this just yet.",
               '>{#f/1}* So I failed to teach you how to cook.\n* Big whoop.',
               ">{#f/14}* There's still something we can do to salvage this mess.",
               '>{#f/1}* And that something is...'
            ]
            : [
               ">{#f/16}* I can't force you to like me, human.",
               ">{#f/9}* Some people just don't easily get along.",
               ">{#f/16}* I'd understand if you felt that way about me...",
               ">{#f/9}* And if we can't be friends... that's okay.",
               ">{#f/9}* Because...\n* If we're not gonna be friends..."
            ],
      unddate64: () =>
         SAVE.data.b.undyne_respecc
            ? [">{#p/undyne}{#f/17}* ONE LAST DUEL TO SHOW THE GALAXY WHAT WE'RE MADE OF!!!"]
            : ['>{#p/undyne}{#f/17}* THEN I CAN DESTROY YOU WITHOUT REGRET!!!'],
      unddate65: () => [
         '>{#p/undyne}{#f/12}* Well, that was fun, huh?',
         SAVE.data.b.undyne_respecc
            ? ">{#f/8}* We'll have to spar again another time!"
            : ">{#f/8}* We'll have to hang out again another time!",
         '>{#f/9}* But, uh, somewhere else, I guess.',
         ...(world.postnoot
            ? [
               '>{#f/1}* By the way, have you noticed something weird in the air?',
               ...(world.nootflags.has('papyrus') // NO-TRANSLATE
                  ? ['>{#f/13}* Even Papyrus mentioned it earlier...']
                  : ['>{#f/13}* It seems like it just started recently...']),
               ">{#f/16}* ... maybe it's nothing, but I swear I feel weaker than usual."
            ]
            : []),
         ...(SAVE.data.n.plot < 68.1 || SAVE.data.b.a_state_hapstablook
            ? [
               ">{#f/1}* In the meantime, I'll be at the rec center with Papyrus.",
               '>{#f/12}* I look forward to seeing you there!',
               '>{#f/1}* Until then, you can give Papyrus a ring on your phone.',
               ">{#f/8}* Since we're in the same place, I'll be able to talk too!"
            ]
            : [
               ">{#f/1}* In the meantime, I'll be at the rec center.",
               '>{#f/12}* I look forward to seeing you there!',
               '>{#f/1}* Oh, and uh, Papyrus said he has to go do something.',
               ">{#f/14}* Just letting you know, since he won't be available on the phone."
            ])
      ],
      unddate66: () =>
         SAVE.data.b.undyne_respecc
            ? ['>{#f/1}* Well, see ya later, pal!!']
            : ['>{#f/14}* Well, see ya later, punk!!'],
      undroom1: () => ['>{#p/undyne}{#f/17}* Huh?\n* The heck was THAT?'],
      undroom2: () => [
         SAVE.data.b.undyne_respecc
            ? ">{#p/undyne}{#f/1}* Maybe don't do that right now."
            : ">{#p/undyne}{#f/12}* We're trying to be friends here."
      ],
      undroom3: () => [
         SAVE.data.b.undyne_respecc
            ? ">{#p/undyne}{#f/11}* This is some kind of weird battle tactic, isn't it?"
            : ">{#p/undyne}{#f/11}* So that's your way of making friends?"
      ],
      undroom4: () => ['>{#p/undyne}{#f/17}* Stop doing that!'],
      undroom5: () => ['>{#p/undyne}{#f/17}* ...'],
      undyne1a: [
         ">{#p/papyrus}{#f/30}H... HI, UNDYNE!\nI'M HERE WITH MY DAILY REPORT...",
         '>UHHH... REGARDING THAT HUMAN I CALLED YOU ABOUT EARLIER...'
      ],
      undyne1b: ['>{#p/papyrus}{#f/30}... HUH?\nDID I FIGHT THEM?'],
      undyne1c: () =>
         // im not even gonna try to explain what this checks for
         world.edgy || (world.population_area('s') < 6 && !world.bullied_area('s')) // NO-TRANSLATE
            ? ['>{#p/papyrusnt}UH...', ">I-IT'S COMPLICATED!"]
            : ['>{#p/papyrusnt}Y-YES!\nOF COURSE I DID!', '>I FOUGHT THEM VALIANTLY!'],
      undyne1d: ['>{#p/papyrus}{#f/30}... WHAT?\nDID I CAPTURE THEM...?'],
      undyne1e: ['>{#p/papyrus}{#f/30}W-W-WELL...', '>NO...'],
      undyne1f: () =>
         world.edgy || (world.population_area('s') < 6 && !world.bullied_area('s')) // NO-TRANSLATE
            ? [">{#p/papyrus}{#f/30}L-LIKE I SAID, IT'S COMPLICATED!"]
            : ['>{#p/papyrus}{#f/30}I-I MEAN, I TRIED VERY HARD TO, B-BUT, IN THE END...'],
      undyne1g: () => [
         '>{#p/papyrus}{#f/30}... W-WHAT?',
         ...(SAVE.data.n.state_foundry_doge === 1
            ? [">THEY'VE ALREADY KILLED AN ELITE SQUAD MEMBER??", ">N-NO... THEY WOULDN'T DO THAT, WOULD THEY?"]
            : [">YOU'RE GOING TO TAKE THE HUMAN'S SOUL YOURSELF??"])
      ],
      undyne1h: () =>
         SAVE.data.n.state_foundry_doge === 1
            ? ['>{#p/papyrus}{#f/30}SURELY THERE MUST BE ANOTHER WAY!', '>SURELY...']
            : [">{#p/papyrus}{#f/30}BUT UNDYNE, YOU DON'T H-HAVE TO DESTROY THEM! YOU SEE...", '>YOU SEE...'],
      undyne1i: () => [
         '>{#p/papyrus}{#f/30}I...',
         '>... I UNDERSTAND.',
         ">I'LL HELP YOU IN ANY WAY I CAN.",
         ...(world.postnoot
            ? [
               '>BY THE WAY... YOU NEED TO DOUBLE-CHECK THE ATMOSPHERIC SYSTEM.',
               '>WHAT WAS IT CALLED?\nTHE WIDE-AREA TROPE-A- SPHERE FRAMEWORK?',
               '>SOMETHING SEEMS... OFF.'
            ]
            : [])
      ],
      undyne1j: ['>{#p/kidd}{#f/1}* Yo!\n* There she is!'],
      undyne1k: [">{#p/kidd}{#f/7}* Wait... you're a human, aren't you?"],
      undyne1l: ['>{*}{#p/kidd}{#f/7}* RUUUUUUUUUUUN!{^20}{%}'],
      undyne1m: ['>{#p/kidd}{#f/2}* Phew...'],
      undyne1n: ['>{#p/kidd}{#f/1}* Uh, you can step off the platform now.'],
      undyne1o: [">{#p/kidd}{#f/4}* Where'd she go...?"],
      undyne1p: ['>{#p/kidd}{#f/7}* AH!{^10}{%}'],
      undyne1q: ['>{#p/kidd}{#f/2}* Psst, I think we can sneak past her.\n* Come on!'],
      undyne1r: [">{#p/kidd}{#f/4}* It's dark...", '>{#p/kidd}{#f/7}* ... but we have to keep going forward!'],
      undyne1s: ['>{#p/kidd}{#f/7}* Quick, into the conveniently-placed plants!'],
      undyne2a: [
         '>{#p/kidd}{#f/7}* She... she...',
         '>{#f/7}* She TOUCHED me!!',
         ">{#f/4}* ...\n* Guess we're BOTH lucky, then, huh?",
         ">{#f/5}* Things could've gotten real bad if she saw you."
      ],
      undyne2ax: () => [
         '>{#p/kidd}{#f/1}* She... she...',
         ">{#f/1}* She's NOWHERE to be found!?",
         '>{#f/3}* Have you guys seen her ANYWHERE out here?',
         '>{#p/asriel2}{#f/3}* Who, Undyne?',
         ">{#p/kidd}{#f/1}* Yeah!\n* I've been looking around for AGES!",
         '>{#p/asriel2}{#f/2}* (Hee hee hee...)',
         '>{#p/kidd}{#f/4}* Huh??',
         '>{#p/asriel2}{#f/4}* Nothing.',
         '>{#f/13}* Say, wanna join us for a bit?',
         '>{#p/kidd}{#f/3}* Y... you want me to join you?',
         ">{#p/asriel2}{#f/4}* Yeah, why not.\n* It'll be fun, I think.",
         ">{#p/kidd}{#f/4}* Uh...\n* I don't know...",
         ...(SAVE.flag.n.genocide_milestone < 5
            ? [
               '>{#p/asriel2}{#f/15}* Well, did you know Dr. Alphys likes Undyne?',
               '>* Like, she likes her... a LOT.'
            ]
            : [
               '>{#p/asriel2}{#f/9}* Well, did you know Dr. Alphys is actually stronger than Undyne?',
               ">{#f/5}* Alphys's problem is that she's usually too scared to do anything!"
            ]),
         '>{#p/kidd}{#f/7}* What!?\n* No way...',
         ">{#p/asriel2}{#f/1}* Yeah, and that's not the only thing I know about those two.",
         '>{#p/kidd}{#f/7}* Tell me more!',
         '>{#p/asriel2}{#f/5}* Okay, okay...\n* But only if you come with $(name) and me.',
         '>{#p/kidd}{#f/1}* Deal!\n* Haha.',
         '>{#f/2}* ...'
      ],
      undyne2b: ['>{#p/kidd}{#f/1}* Yo, what are you waiting for?'],
      undyne2bx: [">{#p/kidd}{#f/1}* Let's go!"],
      undyne2c: [
         '>{#f/3}* Hey... I know we only just met, but...',
         ">{#f/4}* I don't want Undyne to hurt you...",
         '>* ...',
         ">{#f/2}* Why don't we stick together for a while?",
         ">{#f/1}* Come on, it'll be fun!"
      ],
      undyne2cx: [
         '>{#p/kidd}{#f/2}* Man, you shoulda SEEN her during human- chasing practice...',
         '>{#f/1}* She was throwing like, a MILLION spears a second!'
      ],
      undyne2d: [">{#f/1}* I'm right behind you!"],
      undyne2dx: () => [
         '>{#p/kidd}{#f/2}* And when the target was about to get away...',
         '>{#f/1}* She nailed it at the VERY last moment!',
         ...(SAVE.flag.n.ga_asrielKidd2++ < 1
            ? ['>{#p/asriel2}{#f/6}* Good for her, I guess.', '>{#p/kidd}{#f/1}* Yeah!!']
            : [])
      ],
      undyne2ex: [
         '>{#p/kidd}{#f/4}* Wait...',
         ">* If Undyne's not here, who's going to protect us from those baddies?",
         '>{|}{#f/8}* You know...\n* The ones who- {%}',
         ">{#p/asriel2}{#f/4}* I wouldn't worry about it.",
         '>{#f/3}* Besides, if Undyne is as tactically skilled as you say...',
         ">{#f/4}* Then clearly she must have a reason.\n* She's smart, right?",
         ">{#p/kidd}{#f/4}* Yeah...\n* That's true...",
         '>{#p/kidd}{#f/2}* Well, thanks for taking me along, you guys.',
         ">{#p/asriel2}{#f/10}* Sure...?\n* We haven't gotten THAT far, you know...",
         '>{#p/kidd}{#f/3}* Well, yeah, but like, I barely get time away from my parents, so...',
         ">{#p/asriel2}{#f/8}* You have parents?\n* That's new.",
         ">{#p/kidd}{#f/7}* Uh, o-of course I have parents, who doesn't??",
         '>{#p/asriel2}{#f/16}* ...\n* Right.'
      ],
      undynefinal1a: () =>
         respecc()
            ? ['>{#p/undyne}* Seven.', '>* Seven human SOULs, and...', '>* ...']
            : [
               '>{#p/undyne}* Seven.',
               '>* Seven human SOULs, and {@fill=#f00}King ASGORE{@fill=#fff} will become a god.',
               '>{#x1}* Six.',
               ">{#x1}* That's how many we have collected thus far.",
               '>{#x1}* Understand?',
               '>{#x1}* Through your seventh and final SOUL, monsters will finally go free.',
               '>{#x3}* First, however, as is customary for those who make it this far...',
               '>{#x4}* I must tell you the tragic tale of our people.',
               '>{#x5}* It all began long ago, when...'
            ],
      undynefinal1b: () => (respecc() ? ['>{#p/undyne}* No...'] : ['>{#p/undyne}* You know what?']),
      undynefinal1c: () =>
         respecc() ? ['>{*}{#p/undyne}{#i/2}* NO!!{^999}'] : ['>{*}{#p/undyne}{#i/2}* SCREW IT!!{^999}'],
      undynefinal1d: () =>
         respecc()
            ? ['>{*}{#p/undyne}{#i/1}* HOW COULD I TALK DOWN TO YOU LIKE THAT!!{^999}']
            : ['>{*}{#p/undyne}{#i/1}* WHY SHOULD I TELL YOU THAT STORY!!{^999}'],
      undynefinal1e: () =>
         respecc()
            ? [">{*}{#p/undyne}{#i/1}* AFTER YOU'VE FOUGHT SO HONORABLY!!{^999}"]
            : [">{*}{#p/undyne}{#i/1}* WHEN YOU'RE ABOUT TO DIE!!{^999}"],
      undynefinal1f: ['>{*}{#p/undyne}{#i/2}* NGAHHHHHHHHHHHH!!!{^999}'],
      undynefinal1g: () =>
         respecc()
            ? [
               '>{#p/undyne}{#f/1}* LISTEN UP!',
               '>* I like the way you fight.',
               ">{#f/16}* Like any good warrior, you fight until your enemy's been crushed...",
               '>{#f/17}* ... and then you spare them, so they can live to tell the tale!',
               '>{#f/10}* What courage...'
            ]
            : [
               '>{#p/undyne}{#f/1}* HUMAN!',
               ">* YOU'RE standing in the way of EVERYBODY's hopes and dreams!",
               ">{#f/11}* Alphys's history films made me think humans were cool...",
               '>{#f/16}* ... with their living spacecraft and inter- dimensional portals.',
               '>{#f/4}* But YOU???'
            ],
      undynefinal2a: () =>
         respecc()
            ? [
               '>{#f/1}* I guess I should apologize for how I acted back there.',
               '>{#f/16}* You and your friend were just standing up for each other, right?',
               '>{#f/1}* Well, I can respect that sort of thing.',
               ">{#f/17}* And then there's the local ELITE squad!",
               ">{#f/9}* I'll admit, I was impressed...",
               ...(SAVE.data.n.state_foundry_doge === 2 && SAVE.data.n.state_foundry_muffet === 2
                  ? [
                     '>* The way you managed to not only get past them...',
                     '>{#f/10}* But BEFRIEND them???',
                     ">{#f/1}* I guess I shouldn't be surprised, though.\n* They'd like your style."
                  ]
                  : SAVE.data.n.state_foundry_doge === 3 && SAVE.data.n.state_foundry_muffet === 3
                     ? [
                        '>{#f/10}* The way you managed to EMBARRASS them?',
                        ">{#f/11}* I don't think I've ever seen those two so red-faced."
                     ]
                     : [
                        '>{#f/10}* Even when faced with their blades, you still held your nerve?',
                        '>{#f/1}* I guess you really are something special!'
                     ]),
               '>{#f/8}* ... BUT GETTING BACK TO MY POINT!',
               ">{#f/1}* So, normally, I'd just try to kill you and take your SOUL.",
               '>{#f/11}* However, after seeing the way you fight...',
               ">{#f/8}* THERE'S NO WAY I'D GO SO EASY ON YOU!!!",
               ">{#f/1}* No... I want you to show me what you're REALLY made of!",
               ">{#f/4}* And only once I've beaten you fair and square...",
               ">{#f/5}* Will I finally claim the freedom that's rightfully ours!",
               '>{#f/16}* But, if you manage to beat me...',
               ">{#f/9}* I'll let you through.",
               '>{#f/8}* ... IF you actually manage to beat me!!!',
               ">{#f/1}* Step forward when you're ready!\n* Fuhuhuhu!"
            ]
            : [
               ">{#f/7}* You're just a COWARD!",
               ...(SAVE.data.b.f_state_kidd_betray
                  ? [
                     '>{#f/16}* Remember that friend of yours from earlier?',
                     '>{#f/17}* The one you ABANDONED?',
                     ">{#f/13}* Even when their life was in danger, you didn't bat an eye.",
                     ...(world.trueKills === 0 && SAVE.data.n.bully > 9
                        ? [
                           ">{#f/9}* Maybe if you had, your fighting style would've earned my respect.",
                           ">{#f/16}* But it'd be naive to think you've got any sort of honor NOW."
                        ]
                        : ['>{#f/16}* Typical human.\n* Always quick to stab people in the back.']),
                     ">{#f/4}* But that's fine...\n* I didn't need you to be some kind of saint...",
                     '>{#f/7}* ALL THAT MATTERS IS SOUL!'
                  ]
                  : [
                     '>* Hiding behind that kid so you could run away from me again!',
                     ">{#f/9}* I'll admit, I was impressed...",
                     ...(SAVE.data.n.state_foundry_doge === 2 && SAVE.data.n.state_foundry_muffet === 2
                        ? [
                           '>* The way you managed to not only get past the local ELITE squad...',
                           '>{#f/10}* But BEFRIEND them???',
                           ">{#f/11}* You've got cojones, punk.",
                           '>{#f/8}* ... NOT THAT IT ACTUALLY MATTERS!'
                        ]
                        : SAVE.data.n.state_foundry_doge === 3 && SAVE.data.n.state_foundry_muffet === 3
                           ? [
                              '>{#f/10}* The way you managed to EMBARRASS the local ELITE squad?',
                              ">{#f/11}* I don't think I've ever seen those two so red-faced.",
                              ">{#f/8}* ... AS IF THAT'D WORK ON ME!"
                           ]
                           : [
                              ">{#f/10}* The way you've managed to get through without killing anyone?",
                              ">{#f/11}* Congratulations, punk.\n* You're a little nicer than the average human.",
                              '>{#f/8}* ... AS IF I CARE!'
                           ]),
                     '>{#f/4}* You know what would be more valuable to everyone?',
                     '>{#f/7}* IF YOU WERE DEAD!'
                  ]),
               '>{#f/17}* Your life is all that stands between us and our freedom!',
               ">{#f/1}* Right now, I can feel everyone's minds racing together!",
               ">* Everyone's been waiting their whole lives for this moment!",
               ">{#f/9}* But we're not nervous at all.",
               ">{#f/17}* When everyone puts their minds together, they can't lose!",
               ">{#f/1}* Now, human!\n* Let's end this, right here, right now!",
               ">{#f/17}* I'll show you how determined monsters can truly be!",
               ">{#f/1}* Step forward when you're ready!\n* Fuhuhuhu!"
            ],
      undynefinal2b1: [">{#f/7}* You're just a ruthless MURDERER!"],
      undynefinal2b1a: ['>{#f/11}* Self-defense?\n* Please.'],
      undynefinal2b1b: [
         ">{#f/11}* What? You thought I'd overlook what you were up to in the Outlands?",
         '>{#f/1}* Fuhuhu... think again.'
      ],
      undynefinal2b2: () => [
         world.trueKills === 1
            ? ">{#f/9}* You didn't kill that monster because you had to."
            : ">{#f/9}* You didn't kill those monsters because you had to.",
         '>{#f/11}* You did it because it was EASY for you.\n* Because it was FUN.',
         '>{#f/16}* Do you think it was fun when I found out?'
      ],
      undynefinal2b2a: [
         '>{#f/9}* The canine unit.\n* The local ELITE squad.\n* And many others, too...',
         '>* Almost everyone I know and love, dead just like that.'
      ],
      undynefinal2b2b: [
         '>{#f/9}* The canine unit, AND the local ELITE squad...',
         ">* People I've served with for years, gone in the blink of an eye."
      ],
      undynefinal2b2c: [
         '>{#f/9}* The local ELITE squad, who dedicated their lives to service...',
         '>* Gone in one fell swoop.'
      ],
      undynefinal2b2d: [
         '>{#f/9}* The canine unit, who protected that little town for years...',
         '>* Gone without a trace.'
      ],
      undynefinal2b2e: [
         '>{#f/9}* That ghost, who wanted nothing more than to fuse with their dummy...',
         '>* Erased in a mere moment.'
      ],
      undynefinal2b2f: [
         '>{#f/9}* That spider, who only wanted to protect and care for the clans...',
         ">* Not only is she dead, but spiders' lives are in jeopardy."
      ],
      undynefinal2b2g: [
         '>{#f/9}* Doge, who had a strong and unwavering sense of duty...',
         ">* Even if putting her life at risk was her job, she's still dead."
      ],
      undynefinal2b2h: [
         '>{#f/9}* That big dog, one of the kindest and sweetest dogs ever...',
         '>* Eliminated before his time.'
      ],
      undynefinal2b2i: [
         '>{#f/9}* Those two dogs, caring for each other through thick and thin...',
         '>* Their love and legacy, ripped away in an instant.'
      ],
      undynefinal2b2j: [
         '>{#f/9}* That little dog who wanted nothing more than to be pet...',
         '>* Only to be met with a ruthless attack.'
      ],
      undynefinal2b2k: [
         '>{#f/9}* Doggo, who I PERSONALLY looked after for some time...',
         '>* Now dead thanks to the whims of a single human.'
      ],
      undynefinal2b2l: [
         ">{#f/9}* That woman in the Outlands... I didn't know her, but...",
         ">* She hasn't been seen since you arrived in Starton."
      ],
      undynefinal2b2m: [
         '>{#f/9}* Every. Single. Monster. who spent their lives in the factory...',
         '>* Only to have it all snatched away.'
      ],
      undynefinal2b2n: [
         '>{#f/9}* Every. Single. Monster. who lived peacefully in Starton...',
         '>* Only to meet an untimely end.'
      ],
      undynefinal2b2o: [
         '>{#f/9}* Those monsters who spent their lives here in the factory...',
         '>* Only to have it all be undone.'
      ],
      undynefinal2b2p: [
         '>{#f/9}* Those monsters who lived peacefully in Starton...',
         '>* Slaughtered in cold blood.'
      ],
      undynefinal2b2q1: [
         '>{#f/9}* One monster dead from each area thus far...',
         ">{#f/13}* It's like you have some kind of per-area kill quota."
      ],
      undynefinal2b2q2: [
         '>{#f/9}* Two monsters dead from each area thus far...',
         ">{#f/13}* It's like you have some kind of per-area kill quota."
      ],
      undynefinal2b2q3: [
         '>{#f/9}* Three monsters dead from each area thus far...',
         ">{#f/13}* It's like you have some kind of per-area kill quota."
      ],
      undynefinal2b2q4: [
         '>{#f/9}* Four monsters dead from each area thus far...',
         ">{#f/13}* It's like you have some kind of per-area kill quota."
      ],
      undynefinal2b2q5: [
         '>{#f/9}* Five monsters dead from each area thus far...',
         ">{#f/13}* It's like you have some kind of per-area kill quota."
      ],
      undynefinal2b2r: () => [
         world.trueKills === 1
            ? ">{#f/9}* That monster in the Outlands... I didn't really know them, but..."
            : ">{#f/9}* Those monsters in the Outlands... I didn't really know them, but...",
         ">* Thanks to you, they're dead now."
      ],
      undynefinal2b2s: [
         '>{#f/9}* Even if it was just one monster...',
         ">* That's still one less SOUL that'll get to see the stars one day."
      ],
      // 2B2T :flushed: :flushed: :flushed:
      undynefinal2b2t: [
         '>{#f/9}* At least two monsters left home for the last time today.',
         '>* Thanks to you, their families will never see them again.'
      ],
      undynefinal2b2u1: [
         '>{#f/9}* That big dog, who enjoyed the company of his comrades...',
         '>* Awakening to find them dead.'
      ],
      undynefinal2b2u2: [
         '>{#f/9}* Those two dogs, always looking out for the other canines...',
         ">* Only to discover there's nobody to look out for anymore."
      ],
      undynefinal2b2u3: [
         '>{#f/9}* That little dog who mostly kept to itself...',
         ">* The other dogs' deaths might not bother it now, but they will someday."
      ],
      undynefinal2b2u4: [
         '>{#f/9}* Doggo, who spent years to find a home in the canine unit...',
         '>* Only to have it all ripped away again.'
      ],
      undynefinal2b2v1: [
         '>{#f/9}* That big dog, as well as Dogamy and Dogaressa...',
         '>* All wiped from the face of Starton.'
      ],
      undynefinal2b2v2: [
         '>{#f/9}* Both the big dog, and the little dog...',
         '>{#f/13}* So, according to you, only the average-sized dogs get to live.'
      ],
      undynefinal2b2v3: [
         '>{#f/9}* That big dog, along with Doggo, too...',
         '>* Both dead thanks to the whims of a single human.'
      ],
      undynefinal2b2v4: [
         '>{#f/9}* Those two dogs, always looking out for the other canines...',
         '>* Not only are THEY dead, but a little dog they looked after is, too.'
      ],
      undynefinal2b2v5: [
         '>{#f/9}* Those two dogs, always looking out for the other canines...',
         '>* They, along with Doggo who they looked after, are all dead.'
      ],
      undynefinal2b2v6: [
         '>{#f/9}* That little dog, as well as its comrade Doggo...',
         '>* Both dead thanks to the whims of a single human.'
      ],
      undynefinal2b3: () => [
         ">{#f/11}* Do you think that's FUN?",
         '>* ...',
         '>{#f/17}* Well guess what, punk.',
         ...(SAVE.data.n.state_foundry_muffet === 1
            ? [">* No phone call's gonna save you THIS time."]
            : ['>* Your time is UP.']),
         '>{#f/4}* All the pain you inflicted on the fallen...',
         ">{#f/7}* Every hope, every dream you've turned to dust...",
         ">{#f/1}* This hero's gonna send it all right back through her spear!",
         '>{#f/4}* NGAHHH!!!',
         ">{#f/5}* I'll show you how determined monsters truly are!",
         ">{#f/17}* Come on!\n* Step forward and let's end this!"
      ],
      undynefinal2c1: ['>* ...', '>* Forget it.'],
      undynefinal2c2: () => [
         '>{#f/16}{#x1}* Look.',
         ">* Papyrus didn't come to his meeting today.",
         '>{#f/19}* ...',
         '>{#x2}* Say what you want about him.',
         ">{#f/18}* He's weird, he's naive, he's self-absorbed...",
         '>{#f/20}{#x3}* But Papyrus has NEVER missed a meeting.',
         '>{#f/18}{#x4}* And no matter what time you call him on the phone...',
         '>{#f/20}{#x5}* He ALWAYS answers within the first two rings.',
         '>* ...',
         ">{#f/18}{#x6}* But now he's gone.",
         ">{#f/22}{#x7}* And his brother isn't around, either.",
         '>* ...',
         '>{#f/18}* What did you do to him?',
         '>{#f/11}{#x8}* What did you DO TO HIM?',
         ...((SAVE.data.n.state_foundry_doge === 1 ? 1 : 0) +
            (SAVE.data.n.state_starton_doggo === 2 ? 1 : 0) +
            (SAVE.data.n.state_starton_dogs === 2 ? 2 : 0) +
            (SAVE.data.n.state_starton_greatdog === 2 ? 1 : 0) +
            (SAVE.data.n.state_starton_lesserdog === 2 ? 1 : 0) >
            1
            ? [
               '>{#f/16}{#x9}* And those missing members of the guard...',
               '>{#f/13}* Did you do the same thing to THEM?'
            ]
            : [
               '>{#f/16}{#x9}* Papyrus, who I have trained every day...',
               ">{#f/19}* Even though I KNOW he's too goofy to ever hurt anyone..."
            ]),
         '>* ...',
         '>{#f/16}{#x10}* Go ahead.\n* Prepare however you want.',
         '>{#f/20}* But when you step forward...',
         '>{#f/11}{#x11}* I will KILL you.'
      ],
      undynefinal3: () => [
         ...(SAVE.data.n.state_starton_papyrus === 1
            ? ['>{#p/undyne}{#f/21}* Alright, then.', '>{#f/19}* ...']
            : world.trueKills > 1
               ? ['>{#p/undyne}{#f/11}* You asked for it, punk.', '>{#f/9}* Ready or not...']
               : respecc()
                  ? [">{#p/undyne}{#f/1}* That's it, then...!", ">{#f/17}* It's time you met your one true equal!"]
                  : [">{#p/undyne}{#f/1}* That's it, then...!", '>{#f/17}* No more running away!'])
      ],
      undynefinal3x: ['>{#f/7}{*}* HERE I COME!!!!!!!{#x1}{^999}'],
      undynehouse1: [">{#p/basic}* It's locked."],
      undynehouse2: () =>
         SAVE.data.b.svr || world.runaway
            ? [">{#p/human}* (You can't seem to find a way in.)"]
            : SAVE.data.n.plot === 72
               ? [
                  '>{#p/basic}* First, the goat family...\n* Then, the spider queen...',
                  '>* And now, the fish lady...',
                  ">* I'll miss her... just like I'm going to miss being here...",
                  ">* But maybe... I've inhabited this house for too long...",
                  ">* Maybe I'll be happier if I spend time... somewhere new..."
               ]
               : [">{#p/basic}* It's literally on fire.\n* You're not getting in there."],
      walktext: {
         bird: () => [
            '>{#p/kidd}{#f/4}* Dead end...',
            world.genocide
               ? ">{#f/3}* The bird must've carried him across the gap by now, haha."
               : '>{#f/3}* The bird must be busy right now, haha.'
         ],
         birdx: ['>{#p/basic}* ... but nobody came.'],
         path1: () =>
            SAVE.data.n.state_foundry_muffet === 1
               ? [
                  ">{#p/kidd}{#f/8}* I feel like I'm gonna puke...",
                  SAVE.data.n.state_foundry_kidddeath > 5
                     ? '>* We killed so many monsters...'
                     : SAVE.data.n.state_foundry_kidddeath > 1
                        ? '>* We killed other monsters...'
                        : '>* We killed a monster...'
               ]
               : [
                  '>{#p/kidd}{#f/1}* Did I ever tell you about how we got shuttle pilot lessons!?',
                  '>{#p/kidd}{#f/7}* It was EPIC!'
               ],
         path2: () =>
            SAVE.data.n.state_foundry_muffet === 1
               ? [
                  SAVE.data.b.f_state_kidd_fight
                     ? '>{#p/kidd}{#f/4}* I mean, you TOLD me to fight...'
                     : '>{#p/kidd}{#f/4}* I mean, you did ALL the attacking...',
                  '>{#p/kidd}{#f/8}* But did you really...\n* ... m-mean to do...\n* ... that...?'
               ]
               : [
                  '>{#p/kidd}{#f/2}* One day, that short skeleton and his brother subbed in...',
                  '>{#p/kidd}{#f/2}* And, this is a secret, but...',
                  '>{#f/1}* They let me fly around the outpost all by MYSELF!!'
               ],
         path3: () =>
            SAVE.data.n.state_foundry_muffet === 1
               ? [
                  '>{#p/kidd}{#f/4}* I never wanted to hurt anyone, I just...\n* I...',
                  '>{#p/kidd}{#f/8}* I just wanna wake up...\n* Please... let it all be a bad dream...'
               ]
               : [
                  ">{#p/kidd}{#f/1}* Maybe one day I'll be a real pilot, with my own starship.",
                  ">{#p/kidd}{#f/1}* It'd have FLAMES painted on the side, and HUGE wings, and...",
                  ">{#p/kidd}{#f/6}* Man, that'd be so cool..."
               ],
         path4: () =>
            SAVE.data.n.state_foundry_muffet === 1
               ? ['>{#p/kidd}{#f/8}* I...', '>{#f/8}* I...', ">{#f/5}* I'm just... \n* ... gonna be quiet."]
               : [
                  '>{#p/kidd}{#f/2}* We could go anywhere in the universe, dude...',
                  '>{#p/kidd}{#f/1}* And the best part?\n* No more school, like, EVER!'
               ],
         path5: ['>{#p/kidd}{#f/4}* Wait...'],
         path6: () =>
            SAVE.data.n.state_foundry_muffet === 1
               ? [
                  ">{#p/kidd}{#f/8}* You can't get over that gap alone, dude...",
                  '>{#p/kidd}{#f/8}* ...',
                  '>{#p/kidd}{#f/5}* ... let me help.'
               ]
               : [
                  '>{#p/kidd}{#f/2}* You sure you can get across that gap?',
                  '>{#p/kidd}{#f/1}* Yo, let me help you!'
               ],
         path7: () =>
            SAVE.data.n.state_foundry_muffet === 1
               ? ['>{#p/kidd}{#f/8}* Climb on.']
               : ['>{#p/kidd}{#f/1}* Climb on!'],
         path8: () =>
            SAVE.data.n.state_foundry_muffet === 1
               ? [
                  '>{#p/kidd}{#f/4}* ...\n* Well...',
                  '>{#f/8}* If you never see me again...\n* Tell my parents...',
                  ">{#f/5}* ...\n* They're better off without me."
               ]
               : [">{#p/kidd}{#f/1}* Don't worry, dude!\n* I always find my own way around!"],
         prechase: [
            '>{#p/kidd}{#f/4}* Hey... uh...\n* This place gives me the creeps.',
            '>{#f/3}* Can we turn around now?'
         ],
         rescue1: () => [
            ">{#p/kidd}{#f/7}* Undyne, please!\n* They're my friend!",
            geno()
               ? ">{#p/undyne}* No, they're not.\n* You really shouldn't be with them, kiddo."
               : ">{#p/undyne}* Go home, kiddo.\n* You don't belong with them."
         ],
         rescue2: ['>{*}{#p/kidd}{#f/8}* Undyne...{#x1}{^20}{%}'],
         rescue3: [
            ">{*}{#p/kidd}{#f/13}* I promise, I... I-I'll come back for you!{^20}{%}",
            ">{*}{#p/kidd}{#f/13}* Don't die, okay?{^20}{%}"
         ],
         snailcom: [
            '>{#p/kidd}{#f/9}* That ghost and I played electrosnail here one time...',
            '>* Have you ever...?',
            '>{#p/asriel2}{#f/10}* Um... no?',
            '>{#f/4}* Not in this timeline, anyway.',
            '>{#p/kidd}{#f/9}* Timeline?'
         ],
         trashcom: [
            '>{#p/asriel2}{#f/13}* Oh, hey...\n* This is where we...',
            '>{#f/13}* Where you...',
            '>{#f/15}* ...',
            '>{#f/16}* Oh, $(name)...',
            '>{#p/kidd}{#f/9}* ...?',
            ">{#p/asriel2}{#f/6}* It's nothing.",
            ">{#f/7}* Just a little reminder, that's all.",
            '>{#p/kidd}{#f/9}* Oh...'
         ],
         undynecom: [
            ">{#p/kidd}{#f/11}* Oh, it's...\n* This is Undyne's house...!",
            ">{#p/asriel2}{#f/8}* Thankfully, Undyne's not here right now.",
            '>{#f/6}* If all goes to plan, she never will be again.'
         ]
      },
      watercooler1: () => [
         ...(SAVE.data.b.svr
            ? ['>{#p/human}* (The label describes using this fluid only in a specific kind of emergency.)']
            : [
               ">{#p/basic}* It's a cooler full of electro- dampening fluid with an oddly specific warning label.",
               '>{#p/basic}* "Use only to negate electro- static interference with portable jetpacks."'
            ]),
         choicer.create('* (Get a cup?)', 'Yes', 'No')
      ],
      watercooler2a: ['>{#p/human}* (You now hold a cup of the electro-dampening fluid.)'],
      watercooler2b: ['>{#p/human}* (You decide not to get a cup.)'],
      watercooler3: () => [
         ...(SAVE.data.b.svr
            ? ['>{#p/human}* (The label describes using this fluid only in a specific kind of emergency.)']
            : [
               ">{#p/basic}* It's a cooler full of electro- dampening fluid with an oddly specific warning label.",
               '>{#p/basic}* "Use only to negate electro- static interference with portable jetpacks."'
            ]),
         '>{#p/human}* (You already have a cup.)'
      ]
   },

   b_group_foundry: {
      moldsmalMoldbygg1: () =>
         world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
            ? ['>{#p/kidding}* Holy moldy!']
            : [">{#p/story}* It's a gelatin festival!"],
      moldsmalMoldbygg2a: () =>
         world.goatbro
            ? ['>{#p/asriel2}* One left.']
            : world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
               ? ['>{#p/kidding}* Just us now!']
               : ['>{#p/story}* Gelata is all alone now.'],
      moldsmalMoldbygg2b: () =>
         world.goatbro
            ? ['>{#p/asriel2}* One left.']
            : world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
               ? ['>{#p/kidding}* Just us now!']
               : ['>{#p/story}* Gelatini now blorbs solo.'],
      woshuaMoldbygg2: () =>
         world.goatbro
            ? ['>{#p/asriel2}* Talk about a contradiction.']
            : world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
               ? ['>{#p/kidding}* Woah, hello...']
               : ['>{#p/story}* Skrubbington straddles up.\n* Much to its dismay, Gelata is also here...'],
      woshuaMoldbygg2a: () =>
         world.goatbro
            ? ['>{#p/asriel2}* One left.']
            : world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
               ? ['>{#p/kidding}* Just us now!']
               : ['>{#p/story}* Gelata is all alone now.'],
      woshuaMoldbygg2b: () =>
         world.goatbro
            ? ['>{#p/asriel2}* One left.']
            : world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
               ? ['>{#p/kidding}* Just us now!']
               : ['>{#p/story}* Skrubbington is not sure how to feel anymore.']
   },
   b_opponent_woshua: {
      tweet: 'tweet',
      epiphany: [
         ['>{#p/basic}{~}Skrubby accepts your mercy.'],
         () =>
            world.meanie
               ? ['>{#p/basic}{~}Skrubby will retreat now..', '>{#p/basic}{~}Thx for warning!']
               : world.flirt > 9
                  ? ['>{#p/basic}{~}Skrub u entire body..', '>{#p/basic}{~}Special service just for you!']
                  : SAVE.data.b.oops
                     ? [
                        '>{#p/basic}{~}Even if u get dirty sometimes..',
                        '>{#p/basic}{~}Skrubby will be there to clean u.'
                     ]
                     : ['>{#p/basic}{~}Skrubby accepts hug..', '>{#p/basic}{~}Regard- less if u are clean or dirty.'],
         ['>{#p/basic}{~}Skrubby knows what must be done.', '>{#p/basic}{~}Thx for showing me the way.'],
         ['>{#p/basic}{~}Okie.\nTake u G.']
      ],
      act_check: () =>
         world.goatbro
            ? [">{#p/asriel2}* Skrubbington, the clean freak.\n* Can't handle seeing more than a speck of dirt."]
            : [
               '>{#p/story}* SKRUBBINGTON - ATK 18 DEF 5\n* This humble germophobe seeks to cleanse the whole galaxy.'
            ],
      act_check2: [
         '>{#p/story}* SKRUBBINGTON - ATK 18 DEF 5\n* This humble germophobe wants to go home to wash its wounds.'
      ],
      act_check3: [
         '>{#p/story}* SKRUBBINGTON - ATK 18 DEF 5\n* One wheel closer to a cleaner future for monsterkind.'
      ],
      act_check4: [
         ">{#p/story}* SKRUBBINGTON - ATK 18 DEF 5\n* This humble germophobe's love story is as soapy as it gets."
      ],
      name: '* Skrubbington',
      status1: () =>
         world.goatbro
            ? ['>{#p/asriel2}* Skrubbington.']
            : world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
               ? [">{#p/kidding}* Skrubby's here!"]
               : ['>{#p/story}* Skrubbington strolls in.'],
      idleTalk1a: ['>{#p/basic}{~}Skrub u SOUL'],
      idleTalk1b: ['>{#p/basic}{~}Skrub u hands'],
      idleTalk1c: ['>{#p/basic}{~}Skrub u face'],
      idleTalk1d: ['>{#p/basic}{~}Skrub u hair'],
      idleTalk1e: ['>{#p/basic}{~}Skrub u feet'],
      idleTalk2a: ['>{#p/basic}{~}Skrub a dub-dubs'],
      idleTalk2b: ['>{#p/basic}{~}Oops, I meant..\nSkrub a sub-SUBS'],
      idleTalk2c: ['>{#p/basic}{~}Skrub a sub-subs'],
      idleTalk3: () =>
         world.trueKills > 0 ? ['>{#p/basic}{~}Your SOUL is unclean.'] : ['>{#p/basic}{~}\x00*whistle whistle*'],
      cleanTalk: ['>{#p/basic}{~}Green means clean'],
      jokeTalk1: [">{#p/basic}{~}NO. THAT JOKE'S TOO.. DIRTY"],
      jokeTalk2: [">{#p/basic}{~}EUGH.. I CAN'T BELIEVE THIS"],
      randStatus1: () =>
         world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
            ? ['>{#p/kidding}* Look at the little bird!']
            : ['>{#p/story}* Skrubbington is friends with a little bird.'],
      randStatus2: () =>
         world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
            ? [">{#p/kidding}* You should've SEEN when it tried to clean my school lunch off."]
            : ['>{#p/story}* Skrubbington is rinsing off a saucer.'],
      randStatus3: () =>
         world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
            ? ['>{#p/kidding}* We should go spacesuit-shining with this one.']
            : ['>{#p/story}* Skrubbington is looking for some good clean fun.'],
      randStatus4: () =>
         world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
            ? ['>{#p/kidding}* Squeaky clean?\n* This is gonna be FREAKY clean.']
            : ['>{#p/story}* Smells like detergent.'],
      randStatus5: () =>
         world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
            ? ['>{#p/kidding}* You do NOT wanna get dirty around this one, dude.']
            : ['>{#p/story}* Skrubbington wonders if stardust is sanitary.'],
      hurtStatus: () =>
         world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
            ? ['>{#p/kidding}* Is... everything okay?']
            : ['>{#p/story}* Skrubbington is revolted at its own wounds.'],
      jokeText1: ['>{#p/human}* (You tell a joke about a rusty piece of space junk.)'],
      jokeText2: ['>{#p/human}* (You tell a joke about atmospheric pollution.)'],
      jokeText3: ['>{#p/human}* (You tell a joke about two starships that got stuck in a trash barge.)'],
      touchText0: [
         '>{#p/human}* (You give Skrubbington a friendly pat.)',
         ">{#p/basic}* Skrubbington can't stand your slime-covered hands and runs away!"
      ],
      touchText1: [
         '>{#p/human}* (You give Skrubbington a friendly pat.)',
         '>{#p/basic}* Skrubbington recoils from your touch.'
      ],
      touchText2: [
         '>{#p/human}* (You give Skrubbington a friendly pat.)',
         '>{#p/basic}* Skrubbington is flattered.'
      ],
      cleanText1: [
         '>{#p/human}* (You ask Skrubbington to clean you.)',
         '>{#p/basic}* Skrubbington hops around excitedly.'
      ],
      flirtTalk1: ['>{#p/basic}{~}No!\nUnclean romance!'],
      flirtTalk2: ['>{#p/basic}{~}Sparkle and shine!'],
      cleanText2: [
         '>{#p/human}* (You ask Skrubbington to clean you.)',
         '>{#p/basic}* Skrubbington resumes cleaning.'
      ]
   },
   b_opponent_moldbygg: {
      sexyChat: ['>{#p/basic}{~}\x00*sexy shuffle*'],
      epiphany: [
         ['>{#p/basic}{~}\x00*slime sounds*'],
         () =>
            world.meanie
               ? ['>{#p/basic}{~}Guoooh..']
               : world.flirt > 9
                  ? ['>{#p/basic}{~}\x00*erotic shuffle*']
                  : SAVE.data.b.oops
                     ? ['>{#p/basic}{~}\x00*happy shuffle*']
                     : ['>{#p/basic}{~}\x00*slimy embrace*'],
         ['>{#p/basic}{~}Final roar.'],
         ['>{#p/basic}{~}\x00*shiny shuffle*']
      ],
      status1: () =>
         world.goatbro
            ? ['>{#p/asriel2}* Gelata.']
            : world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
               ? ['>{#p/kidding}* Woah!']
               : ['>{#p/story}* Gelata appears!'],
      act_check: () =>
         world.goatbro
            ? ['>{#p/asriel2}* Gelata, the slimy gelatin.\n* Why do I bother explaining these things to you.']
            : ['>{#p/story}* GELATA - ATK 18 DEF 18\n* Not so tini anymore.'],
      act_check2: ['>{#p/story}* GELATA - ATK 18 DEF 18\n* Not in the best of shape.'],
      act_check3: ['>{#p/story}* GELATA - ATK 18 DEF 18\n* Not against becoming a full- time jelly cushion.'],
      act_check4: ['>{#p/story}* GELATA - ATK 18 DEF 18\n* Not your ideal relationship...'],
      act_topple1: [">{#p/human}* (You try to topple Moldbygg, but it hasn't been weakened enough.)"],
      act_topple2: ['>{#p/human}* (You topple Moldbygg.)\n* (Its body parts collapse and roll into the distance.)'],
      name: '* Gelata',
      idleTalk1: ['>{#p/basic}{~}Guoooh!'],
      idleTalk2: ['>{#p/basic}{~}\x00*slime sounds*'],
      idleTalk3: ['>{#p/basic}{~}Roar.'],
      idleTalk4: ['>{#p/basic}{~}\x00*eager shuffle*'],
      randStatus1: () =>
         world.goatbro
            ? ['>{#p/asriel2}* Gelata.']
            : world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
               ? ['>{#p/kidding}* What does it want?']
               : ['>{#p/story}* Gelata wants to carry you.'],
      randStatus2: () =>
         world.goatbro
            ? ['>{#p/asriel2}* Gelata.']
            : world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
               ? ['>{#p/kidding}* I wonder what would happen if I hugged it.']
               : ['>{#p/story}* Gelata wobbles anxiously.'],
      randStatus3: () =>
         world.goatbro
            ? ['>{#p/asriel2}* Gelata.']
            : world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
               ? ['>{#p/kidding}* So icky... I love it!']
               : ['>{#p/story}* Gelata mills about nearby.'],
      randStatus4: () =>
         world.goatbro
            ? ['>{#p/asriel2}* Gelata.']
            : world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
               ? ['>{#p/kidding}* This all seems kinda slimy.']
               : ['>{#p/story}* Smells like a jell-o store.'],
      hurtStatus: () =>
         world.goatbro
            ? ['>{#p/asriel2}* Almost dead.']
            : world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
               ? [">{#p/kidding}* Gelata isn't looking good..."]
               : ['>{#p/story}* Gelata has seen better days.'],
      act_handshake: [
         '>{#p/human}* (You offer a handshake.)\n* (Gelata engulfs you in slime.)',
         '>{#p/story}* SPEED decreased!'
      ],
      act_sit: ['>{#p/human}* (You sit on top of Gelata.)\n* (Gelata now feels that it has been useful to you.)'],
      distanceStatus: () =>
         world.goatbro
            ? ['>{#p/asriel2}* Gelata.']
            : world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
               ? ['>{#p/kidding}* Can I come sit too!?']
               : ['>{#p/story}* Gelata seems happy with your presence.'],
      act_flirt: [
         '>{#p/human}* (You wiggle your hips.)\n* (Gelata does a tornado spin.)',
         '>{#p/basic}* A meaningful conversation...?'
      ]
   },
   b_opponent_moldfake: {
      act_check: () =>
         world.goatbro
            ? [">{#p/asriel2}* Gelatini...\n* Something tells me this one's more than meets the eye."]
            : ['>{#p/story}* GELATINI - ATK 18 DEF 18\n* Not a squorch to be heard.'],
      name: '* Gelatini',
      smalTalk: ['>{#p/basic}{~}...'],
      status1: () => (world.goatbro ? ['>{#p/asriel2}* Gelatini.'] : ['>{#p/story}* Gelatini appears?']),
      fakeStatus1: () =>
         world.goatbro
            ? ['>{#p/asriel2}* Gelatini.']
            : world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
               ? ['>{#p/kidding}* Do Gelatinis always sit this still?']
               : [">{#p/story}* Gelatini isn't moving."],
      fakeStatus2: () =>
         world.goatbro
            ? ['>{#p/asriel2}* Gelatini.']
            : world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
               ? [">{#p/kidding}* Something's off with that Gelatini..."]
               : ['>{#p/story}* Gelatini is a perfectly tempered gelatin with no flaws.'],
      fakeStatus3: () =>
         world.goatbro
            ? ['>{#p/asriel2}* Gelatini.']
            : world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
               ? ['>{#p/kidding}* Are Gelatinis always this quiet?']
               : [">{#p/story}* It's Gelatini's quiet time."],
      fakeStatus4: () =>
         world.goatbro
            ? ['>{#p/asriel2}* Gelatini.']
            : world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
               ? ['>{#p/kidding}* This seems kinda weird.']
               : ['>{#p/story}* Smells like a jell-o store.'],
      act_imitate: ['>{#p/human}* (You approach Gelatini.)', '>{#p/basic}* Suddenly...!'],
      act_flirt: ['>{#p/human}* (You wiggle your hips.)', '>{#p/basic}* Suddenly...!'],
      act_slap: ['>{#p/human}* (You give Gelatini a big slap.)', '>{#p/basic}* Suddenly...!']
   },
   b_opponent_shyren: {
      act_check: ['>{#p/story}* SHYREN - ATK 19 DEF 0\n* A prophetic singer, held back by her own shame.'],
      act_check2: ['>{#p/story}* SHYREN - ATK 19 DEF 0\n* With newfound confidence, she takes to the stage!'],
      act_check3: ['>{#p/story}* SHYREN - ATK 19 DEF 0\n* With newfound confidence, she sings for the crowd!'],
      act_check4: [">{#p/story}* SHYREN - ATK 19 DEF 0\n* With newfound confidence, she's the star of the show!"],
      act_check5: ['>{#p/story}* SHYREN - ATK 19 DEF 0\n* A prophetic singer, held back by fresh wounds.'],
      act_check6: ['>{#p/story}* SHYREN - ATK 19 DEF 0\n* Alas, the bitter dregs of rejection.'],
      act_check7: ['>{#p/story}* SHYREN - ATK 19 DEF 0\n* Suddenly, love songs.'],
      awkwardtoot: ['>{#p/basic}{~}(awkward toot)'],
      creepStatus: () =>
         SAVE.data.n.state_foundry_muffet === 1
            ? ['>{#p/story}* Shyren cowers in the corner.']
            : [">{#p/kidding}* I don't think that helped..."],
      creepText1: [
         '>{#p/human}* (You flirt with Shyren, offering your best smile.)',
         '>{#p/basic}* Shyren turns away...'
      ],
      creepText2: [
         '>{#p/human}* (You flirt with Shyren again.)',
         '>{#p/basic}* Shyren is uncomfortable now, and decides to leave.'
      ],
      encourage1: () =>
         SAVE.data.n.state_foundry_muffet === 1
            ? ['>{#p/story}* Shyren seems much more comfortable singing along.']
            : ['>{#p/kidding}* A sing-along?\n* Heck yeah, dude!'],
      encourage2: () =>
         world.dead_skeleton || geno()
            ? world.genocide
               ? SAVE.data.n.state_foundry_muffet === 1
                  ? ['>{#p/story}* The eerily quiet air passes behind the symphony of voices.']
                  : [">{#p/kidding}* Haha, this is kinda fun!\n* Even though it's just the three of us..."]
               : SAVE.data.n.state_foundry_muffet === 1
                  ? ['>{#p/story}* A shadowy figure watches the commotion from afar.']
                  : [">{#p/kidding}* Yo... uh...\n* What's that weird shadowy guy doing over there?"]
            : SAVE.data.n.state_foundry_muffet === 1
               ? ['>{#p/story}* Sans is selling tickets made of carbon fiber.']
               : ['>{#p/kidding}* Is that short skeleton selling TICKETS now??'],
      encourage3: () =>
         world.dead_skeleton || geno()
            ? SAVE.data.n.state_foundry_muffet === 1
               ? ['>{#p/story}* Your previous hums echo back into the room.']
               : ['>{#p/kidding}* This place is so empty, we can hear ourselves from the past.\n* So trippy...']
            : SAVE.data.n.state_foundry_muffet === 1
               ? [">{#p/story}* The crowd tosses clothing.\n* It's a storm of cotton balls."]
               : ['>{#p/kidding}* Woah, so many people!'],
      encourage4: () =>
         SAVE.data.n.state_foundry_muffet === 1
            ? ['>{#p/story}* Shyren thinks about her future.']
            : ['>{#p/kidding}* One last time!\n* One last time!\n* One last time!'],
      flirtText1: ['>{#p/human}* (You flirt with Shyren.)\n* (Though uneasy, she blushes a little in return.)'],
      flirttoot: ['>{#p/basic}{~}(happy toot)'],
      hum0: ['>{#p/human}* (You hum a melancholy waltz.)\n* (Shyren follows your melody.)'],
      hum1: ['>{#p/human}* (You hum a funky tune.)\n* (Shyren follows your melody.)'],
      hum2: ['>{#p/human}* (You hum a bluesy song.)\n* (Shyren follows your melody.)'],
      hum3: ['>{#p/human}* (You hum a jazz ballad.)\n* (Shyren follows your melody.)'],
      hum4: ['>{#p/human}* (You hum an apology song.)\n* (Shyren calms down.)'],
      humX1: () =>
         world.dead_skeleton || geno()
            ? ['>{#p/human}* (You hum some more.)', ">{#p/basic}* It's a veritable duet!"]
            : [
               '>{#p/human}* (You hum some more.)',
               '>{#p/basic}* Monsters are drawn to the music.',
               ">{#p/basic}* Suddenly, it's a concert..."
            ],
      humX2: () =>
         world.dead_skeleton || geno()
            ? [
               '>{#p/human}* (You hum some more.)',
               '>{#p/basic}* Shyren is happy to have you as her vocal partner.'
            ]
            : [
               '>{#p/human}* (You hum some more.)',
               ">{#p/basic}* The seats are sold out.\n* It's a rockstar performance!"
            ],
      humX3: () =>
         world.dead_skeleton || geno()
            ? [
               '>{#p/human}* (You hum some more.)',
               '>{#p/basic}* Even without a crowd, a dance of melody and harmony persists.'
            ]
            : [
               '>{#p/human}* (You hum some more.)',
               '>{#p/basic}* Despite your success, the constant attention...',
               ">* The tours...\n* The groupies...\n* It's all..."
            ],
      humX4: () => [
         ">{#p/human}* (You and Shyren have come so far, but it's time.)",
         '>* (You both have your own journeys to embark on.)',
         '>* (You hum a farewell song.)'
      ],
      hurtStatus: [">{#p/story}* Shyren's voice is raspy."],
      name: '* Shyren',
      randStatus1: () =>
         SAVE.data.n.state_foundry_muffet === 1
            ? ['>{#p/story}* Shyren hums very faintly.']
            : ['>{#p/kidding}* Are you okay?'],
      randStatus2: () =>
         SAVE.data.n.state_foundry_muffet === 1
            ? ['>{#p/story}* Shyren pretends to be a pop idol.']
            : ['>{#p/kidding}* You look sad...'],
      randStatus3: () =>
         SAVE.data.n.state_foundry_muffet === 1
            ? ['>{#p/story}* Shyren taps a little beat with her fins.']
            : ['>{#p/kidding}* Do you need any help?'],
      randStatus4: () =>
         SAVE.data.n.state_foundry_muffet === 1
            ? ['>{#p/story}* Shyren thinks about doing karaoke by herself.']
            : ['>{#p/kidding}* Is there anything I can do?'],
      randStatus5: () =>
         SAVE.data.n.state_foundry_muffet === 1
            ? ['>{#p/story}* Smells like music.']
            : [">{#p/kidding}* Wait... what's with her body?"],
      sadtalk1: ['>{#p/basic}{~}..\n..\ntoot\n..'],
      sadtalk2: ['>{#p/basic}{~}..\n..\nhum hum\n..'],
      status1: () =>
         SAVE.data.n.state_foundry_muffet === 1
            ? ['>{#p/kidding}* No...\n* Not again...']
            : [">{#p/kidding}* Yo, how's it going?\n* You look sad..."],
      talk3: ['>{#p/basic}{~}si re, si re, si mi, si mi'],
      talk4: ['>{#p/basic}{~}Si Fa Si Fa So Fa So Mi Re Re'],
      talk5: ['>{#p/basic}{~}Mi So Mi So Mi Si Mi La Si So'],
      talk6: ['>{#p/basic}{~}(pas- sionate tooting)'],
      talk7: ['>{#p/basic}{~}(final toot)'],
      wave1: ['>{#p/human}* (You wave your arms wildly.)\n* (Nothing happens.)'],
      wave2: () =>
         world.genocide
            ? ['>{#p/human}* (You wave your arms wildly.)\n* (Nothing happens.)']
            : ['>{#p/human}* (You wave your arms wildly.)', '>{#p/basic}* The crowd eats it up!'],
      act_boo1: ['>{#p/human}* (You boo Shyren.)', '>{#p/basic}* Her head down, Shyren moves away quietly...'],
      act_boo2: [
         '>{#p/human}* (You boo Shyren.)',
         '>{#p/basic}* Shyren, seeing how you handle rejection, leaves in a huff.'
      ],
      act_boo3: [
         '>{#p/human}* (You boo Shyren.)',
         ">{#p/basic}* Shyren's fleeting joy fades just as soon as it came to her."
      ],
      act_boo4: [
         '>{#p/human}* (You boo Shyren.)',
         '>{#p/basic}* The crowd, distraught, watches as Shyren flees the scene.'
      ],
      act_boo5: [
         '>{#p/human}* (You boo Shyren.)',
         '>{#p/basic}* The betrayal brings Shyren to tears as she flees the scene.'
      ]
   },
   b_opponent_radtile: {
      epiphany: [
         ['>{#p/basic}{~}Until next time, G.'],
         () =>
            world.meanie
               ? ['>{#p/basic}{~}Huh..!\nSince when did you get scary!']
               : world.flirt > 9
                  ? ['>{#p/basic}{~}This feeling..', ">{#p/basic}{~}I mustn't resist!"]
                  : SAVE.data.b.oops
                     ? ['>{#p/basic}{~}Yeah..\nWe make a pretty radical team.']
                     : [">{#p/basic}{~}It's so comfort- able.."],
         ['>{#p/basic}{~}At least my end will serve a purpose.', ">{#p/basic}{~}Peace 'n' tran- quility, G."],
         [">{#p/basic}{~}Here's your G, my G!"]
      ],
      act_check: () =>
         world.goatbro
            ? ['>{#p/asriel2}* Radtile, the "cool crocodile."\n* Funny, considering how un-cool he actually is.']
            : ['>{#p/story}* RADTILE - ATK 24 DEF 12\n* A stargazer in starglasses.\n* Favorite genre: Kriobeat'],
      act_check2: [">{#p/story}* RADTILE - ATK 24 DEF 12\n* Things aren't looking so hot for this cool crocodile."],
      act_check3: ['>{#p/story}* RADTILE - ATK 24 DEF 12\n* This cool crocodile is on fire.'],
      act_check4: [
         '>{#p/story}* RADTILE - ATK 24 DEF 12\n* When it comes to romance, this cool crocodile is stone cold.'
      ],
      name: '* Radtile',
      status1: () =>
         world.goatbro
            ? ['>{#p/asriel2}* Radtile.']
            : world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
               ? ['>{#p/kidding}* Not this guy...']
               : ['>{#p/story}* Radtile makes an impression!'],
      randStatus1: () =>
         world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
            ? [">{#p/kidding}* That sure is an interesting hat he's got on his head."]
            : ['>{#p/story}* Radtile adjusts his hat.'],
      randStatus2: () =>
         world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
            ? [">{#p/kidding}* Everyone around here just loves Raddy's little mirror."]
            : ['>{#p/story}* Radtile looks deeply into his mirror image.'],
      randStatus3: () =>
         world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
            ? [">{#p/kidding}* What's he doing, anyway?"]
            : ['>{#p/story}* Radtile is making gestures to improve his cool factor.'],
      randStatus4: () =>
         world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
            ? ['>{#p/kidding}* I wonder what his face looks like.']
            : ['>{#p/story}* Smells like an old skatepark.'],
      idleTalk1: ['>{#p/basic}{~}Check it.'],
      idleTalk2: ['>{#p/basic}{~}Take a looksie.'],
      idleTalk3: ['>{#p/basic}{~}Sneak a peek..'],
      idleTalk4: ['>{#p/basic}{~}Give it a gaze..'],
      insultIdleTalk1: ['>{#p/basic}{~}Meh.'],
      insultIdleTalk2: ['>{#p/basic}{~}Whatever.'],
      insultIdleTalk3: ['>{#p/basic}{~}\x00*shrugs*'],
      insultIdleTalk4: ['>{#p/basic}{~}Very un- cool.'],
      act_praise: [">{#p/human}* (You tell Radtile he's as cool as a quantum cucumber.)"],
      act_praise_bullied: ['>{#p/human}* (You tell Radtile his scars make him look tougher.)'],
      complimentTalk1: [">{#p/basic}{~}Were you really lookin'?"],
      complimentTalk2: ['>{#p/basic}{~}Check first, opinions later.'],
      complimentTalk3: ['>{#p/basic}{~}Show and tell, in that order.'],
      complimentPostInsultTalk1: [">{#p/basic}{~}You're a liar, anyway."],
      complimentPostInsultStatus: () =>
         world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
            ? [">{#p/kidding}* Yeah, I don't think that's gonna work now, dude..."]
            : [">{#p/story}* Radtile isn't having it."],
      flirtTalk1: ['>{#p/basic}{~}Woah, hey, hold on..'],
      complimentStatus: () =>
         world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
            ? [">{#p/kidding}* Maybe if you show him you're checking him out first...?"]
            : ['>{#p/story}* Radtile wants you to check him out first.'],
      checkTalk: ['>{#p/basic}{~}Study me, heh heh.'],
      realTalk1: ['>{#p/basic}{~}Right on.'],
      realStatus: () =>
         world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
            ? ['>{#p/kidding}* You did it!\n* ... can we leave now?']
            : [">{#p/story}* Radtile's feeling a whole lot cooler than before."],
      realTalkY1: ['>{#p/basic}{~}\x00*fist bump*'],
      realTalkY2: [">{#p/basic}{~}You're the coolest."],
      realTalkY3: [">{#p/basic}{~}Let's rock 'n' roll."],
      shockTalk1: ['>{#p/basic}{~}.. cool.'],
      shockStatus: () =>
         world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
            ? ['>{#p/kidding}* Uh...']
            : ['>{#p/story}* Radtile is not amused.'],
      act_insult: ['>{#p/human}* (You call Radtile a loser, and tell him to shut up.)'],
      act_insult_bullied: [">{#p/human}* (You mock Radtile's bruises, and tell him to go away.)"],
      act_flirt: ['>{#p/human}* (You beckon Radtile.)'],
      act_flirt_bullied: [">{#p/human}* (You tell Radtile he's beautiful no matter how disfigured he is.)"],
      insultTalk1: [">{#p/basic}{~}And what if I don't?"],
      insultStatus: () =>
         world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
            ? ['>{#p/kidding}* Uh...']
            : ['>{#p/story}* Radtile keeps his distance.'],
      checkPostInsultTalk: ['>{#p/basic}{~}Come to take another look?'],
      checkPostInsultStatus: () =>
         world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
            ? [">{#p/kidding}* Ah, we're going in circles!"]
            : ['>{#p/story}* Radtile gives you a chance.'],
      hurtStatus: () =>
         world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
            ? [">{#p/kidding}* This isn't looking good..."]
            : [">{#p/story}* Radtile's teeth are beginning to fall out."]
   },
   b_opponent_doge: {
      act_check: () =>
         world.goatbro
            ? ['>{#p/asriel2}* Doge, the callous dog.\n* Cares only for her work.']
            : ['>{#p/story}* DOGE - ATK 14 DEF 10\n* Pronounced "dohj." Soft j.\n* Member of the ELITE squad.'],
      act_flirt: () => [
         ...(dogecon() || world.goatbro
            ? ['>{#p/human}* (You flirt with Doge.)', '>{#p/basic}* Doge ignores your attempts at flattery.']
            : battler.volatile[0].vars.pet
               ? ['>{#p/human}* (You flirt with Doge.)', '>{#p/basic}* Doge smiles in return.']
               : battler.volatile[0].sparable
                  ? [
                     '>{#p/human}* (You flirt with Doge.)',
                     '>{#p/basic}* Doge, despondent, was unreceptive to your remark.'
                  ]
                  : world.flirt < 10
                     ? ['>{#p/human}* (You flirt with Doge.)', ">{#p/basic}* Doge doesn't react in any strong way."]
                     : ['>{#p/human}* (You flirt with Doge.)', '>{#p/basic}* Doge is giving it her all to resist you.'])
      ],
      act_flirt2: [
         '>{#p/human}* (You flirt with Doge again.)',
         ">{#p/basic}* Doge can't keep this up for much longer..."
      ],
      act_flirt3: [
         '>{#p/human}* (You muster your courage, and call Doge a little munchkin.)',
         '>{#p/basic}* Doge tries not to react, but finds herself blushing.',
         ">* She squirms and she struggles, but there's no hiding what's on her face.",
         '>* Thoroughly embarrassed, Doge flees the scene...'
      ],
      batheText: [
         '>{#p/human}* (You suggest Doge get a shower.)',
         '>{#p/basic}* Doge rips open a pipe from the ceiling... water comes flooding out.',
         ">* It's cold, but she doesn't seem to mind...",
         '>* Soon, the water runs dry.\n* Doge relaxes a little...',
         ">{#p/story}* Doge's ATTACK down!"
      ],
      batheTextEarly: [">{#p/human}* (You suggest Doge get a shower, but she wasn't in the mood yet.)"],
      batheTextGeno: [
         '>{#p/human}* (You suggest Doge get a shower.)',
         '>{#p/basic}* Doge does not seem concerned for her hygiene.'
      ],
      batheTextLate: ['>{#p/human}* (You suggest Doge get a shower, but it was too late.)'],
      batheTextPost: ['>{#p/human}* (But Doge was already clean.)'],
      fetchStatus: ['>{#p/story}* Doge is a little smarter than the average dog.'],
      fetchText: () => [
         '>{#p/human}* (You throw the spanner.)\n* (Doge intercepts your throw, launching it back at you.)',
         '>{#p/basic}* The spanner bonks you directly in the head!',
         '>{#p/story}* SPEED down!',
         ...(world.goatbro && SAVE.flag.n.ga_asrielSpanner++ < 1
            ? [">{#p/asriel2}* Maybe don't try that again."]
            : [])
      ],
      fetchTextEpic: [
         '>{#p/human}* (You throw the spanner.)\n* (Doge, inspired, picks it up and brings it back to you.)'
      ],
      fetchTextGarb: ['>{#p/human}* (You throw the spanner.)\n* (Doge, exhausted, ignores it.)'],
      flirtStatus: ['>{#p/story}* Doge questions the intention behind your advances.'],
      flirtStatusAccept: ['>{#p/story}* Doge blushes slightly.'],
      flirtStatusReject: ['>{#p/story}* Doge sighs apathetically.'],
      hurtStatus: () =>
         world.goatbro
            ? ['>{#p/asriel2}* Almost dead.']
            : [">{#p/story}* Doge is trying desperately to pretend she's just fine."],
      name: '* Doge',
      petTalkPost: ['>{#p/basic}{~}Ah...'],
      petText: [
         '>{#p/human}* (You try to pet Doge.)',
         '>{#p/basic}* Doge hesitantly reaches her head up to meet your hand.',
         '>* You make contact.\n* Her face lights up.\n* She gives you a big smile.',
         '>* All her pent-up stress has finally been released.',
         '>* Doge is no longer interested in fighting you.'
      ],
      petTextEarly: [">{#p/human}* (You try to pet Doge, but she can't be reached yet.)"],
      petTextGeno: [
         '>{#p/human}* (You try to pet Doge.)',
         '>{#p/basic}* Doge does not care for your attempts at affection.'
      ],
      petTextLate: ['>{#p/human}* (You try to pet Doge, but it was too late.)'],
      petTextPost1: [
         '>{#p/human}* (You try to pet Doge again.)',
         ">{#p/basic}* Doge laps up your love like it's the first time she's been cared for in years..."
      ],
      petTextPost2: ['>{#p/human}* (You try to pet Doge yet again.)', '>{#p/basic}* Doge has reached nirvana.'],
      petTextPost3: ['>{#p/human}* (You continue petting Doge.)', '>{#p/basic}* Is this even legal?'],
      petTextPost4: ['>{#p/human}* (You pet Doge some more.)', '>{#p/basic}* Doge flops on the ground.'],
      petTextPost5: ['>{#p/human}* (You give Doge a side rub.)', '>{#p/basic}* Doge is drooling...'],
      petTextPost6: ['>{#p/human}* (You pet Doge.)', '>{#p/basic}* It continues.'],
      petTextPost7: ['>{#p/human}* (You pet Doge.)', '>{#p/basic}* ...'],
      petTextSus: ['>{#p/human}* (But Doge was too antsy to be pet.)'],
      status1: () => (world.goatbro ? ['>{#p/asriel2}* Doge.'] : ['>{#p/story}* Doge struts towards you.']),
      turnStatus1: ['>{#p/story}* Doge studies your stance, and deems it lacking.'],
      turnStatus2: () =>
         dogecon() ? ['>{#p/story}* Doge fiddles with her spear.'] : ['>{#p/story}* Doge needs a good washdown.'],
      turnStatus3: () =>
         dogecon()
            ? ['>{#p/story}* Doge double-checks her stance.']
            : battler.volatile[0].vars.bathe
               ? ['>{#p/story}* Doge is dripping wet.']
               : [">{#p/story}* Doge's hygiene remains unchanged, much to her dismay."],
      turnStatus4: () =>
         dogex()
            ? ['>{#p/story}* Doge thinks of her duty.']
            : world.dead_canine
               ? ['>{#p/story}* Doge thinks of her colleagues.']
               : battler.volatile[0].vars.bathe
                  ? ['>{#p/story}* Doge seeks a little adventure.']
                  : ['>{#p/story}* Doge ponders the meaning of her duty.'],
      turnStatus5: () =>
         dogex()
            ? ['>{#p/story}* Doge thinks of her honor.']
            : world.dead_canine
               ? ['>{#p/story}* Doge thinks of her friends.']
               : battler.volatile[0].vars.walk
                  ? ['>{#p/story}* Doge relaxes back into her standard pose.']
                  : battler.volatile[0].vars.bathe
                     ? ['>{#p/story}* Doge regains her composure.']
                     : ['>{#p/story}* Doge remembers an old colleague fondly.'],
      turnStatus6: () =>
         dogecon()
            ? ['>{#p/story}* Doge keeps a cool head.']
            : battler.volatile[0].vars.walk
               ? ['>{#p/story}* Doge takes a deep breath.']
               : ['>{#p/story}* Doge breaks into a cold sweat.'],
      turnStatus7: () =>
         battler.volatile[0].vars.walk
            ? ['>{#p/story}* Doge seeks affection.']
            : ['>{#p/story}* Doge takes a deep breath.'],
      turnStatus8: () =>
         dogecon()
            ? ['>{#p/story}* Doge remains intent.']
            : battler.volatile[0].vars.walk
               ? ['>{#p/story}* Doge could use a helping hand.']
               : [">{#p/story}* Doge's breath shortens."],
      turnStatus9: () =>
         dogecon()
            ? ['>{#p/story}* Doge remains intent.']
            : battler.volatile[0].vars.walk
               ? ['>{#p/story}* Doge just wants to be pet.']
               : ['>{#p/story}* Doge is hyperventilating.'],
      turnStatus10: () =>
         dogecon()
            ? ['>{#p/story}* Doge remains intent.']
            : battler.volatile[0].vars.pet
               ? ['>{#p/story}* Doge is satisfied.']
               : ['>{#p/story}* Doge stands patiently before you in surrender.'],
      turnTalk1: () =>
         dogecon() || world.goatbro
            ? [">{#p/basic}{~}I know what you've been doing."]
            : ['>{#p/basic}{~}The captain warned us about your arrival.'],
      turnTalk2: () =>
         world.goatbro
            ? [
               '>{#p/basic}{~}All those you two have hurt together...',
               '>{#p/basic}{~}Have you truly lost yourselves this badly?'
            ]
            : dogex()
               ? ['>{#p/basic}{~}All that carnage...', '>{#p/basic}{~}Did you ever once feel remorse?']
               : world.dead_canine
                  ? ['>{#p/basic}{~}The canine unit...', '>{#p/basic}{~}You killed them all!']
                  : [
                     '>{#p/basic}{~}As such, I have been on extended patrol.',
                     '>{#p/basic}{~}Mind you... it is quite dirty here.'
                  ],
      turnTalk3: () =>
         world.goatbro
            ? [
               '>{#p/basic}{~}It is a difficult conclusion to avoid...',
               '>{#p/basic}{~}But I see no alterna- tive.'
            ]
            : dogecon()
               ? [
                  '>{#p/basic}{~}You could have surrendered at any moment...',
                  '>{#p/basic}{~}Yet you chose violence.'
               ]
               : battler.volatile[0].vars.bathe
                  ? ['>{#p/basic}{~}Ah...', '>{#p/basic}{~}How pleasant...']
                  : [
                     '>{#p/basic}{~}But we are ELITE squad members, I suppose.',
                     '>{#p/basic}{~}We must adapt to any situation.'
                  ],
      turnTalk4: () =>
         dogecon() || world.goatbro
            ? [
               '>{#p/basic}{~}When I first joined the ELITE squad...',
               ">{#p/basic}{~}Part of me doubted Undyne's stance on humans..."
            ]
            : battler.volatile[0].vars.bathe
               ? ['>{#p/basic}{~}Too much water in my hair...']
               : [
                  '>{#p/basic}{~}When I asked to join the ELITE squad...',
                  ">{#p/basic}{~}I never imagined I'd make it in."
               ],
      turnTalk5: () =>
         dogecon() || world.goatbro
            ? [">{#p/basic}{~}But after what you've done...", ">{#p/basic}{~}There's no more doubt in my mind."]
            : battler.volatile[0].vars.walk
               ? ['>{#p/basic}{~}Well.\nNothing beats a nice walk.']
               : battler.volatile[0].vars.bathe
                  ? [
                     '>{#p/basic}{~}{#f.batmusic1}Just a moment.',
                     '>{#p/basic}{~}...',
                     '>{#p/basic}{~}\x00*whips around*',
                     '>{#p/basic}{~}\x00*whipping continues*',
                     '>{#p/basic}{~}\x00*shakes off*',
                     '>{#p/basic}{~}...',
                     '>{#p/basic}{~}There, all dry now.\nBack to fighting, yes?',
                     '{*}{#f.batmusic2}{%}'
                  ]
                  : [
                     '>{#p/basic}{~}But after that dummy called it quits...',
                     '>{#p/basic}{~}I became the next in line.'
                  ],
      turnTalk6: () =>
         world.goatbro
            ? [
               '>{#p/basic}{~}And you, Asriel... a traitor to your own kind...',
               '>{#p/basic}{~}It is hard to believe you were once to be our king.'
            ]
            : dogex()
               ? ['>{#p/basic}{~}It would be wise for you to surrender.', '>{#p/basic}{~}Not that you know how.']
               : world.dead_canine
                  ? [
                     '>{#p/basic}{~}Doggo was the newest recruit to the canines.',
                     '>{#p/basic}{~}Some saw his blindness as a weakness...',
                     '>{#p/basic}{~}But he had so much promise.'
                  ]
                  : battler.volatile[0].vars.walk
                     ? [
                        ">{#p/basic}{~}You've sure been walking for a while.",
                        '>{#p/basic}{~}How much stamina do YOU have?'
                     ]
                     : battler.volatile[0].vars.bathe
                        ? ['>{#p/basic}{~}Apologies.\nThere is much on my mind.']
                        : [
                           '>{#p/basic}{~}It has been a difficult line of work...',
                           '>{#p/basic}{~}Even Undyne herself has moments of doubt.',
                           '>{#p/basic}{~}... do not tell her I shared that.'
                        ],
      turnTalk7: () =>
         world.goatbro
            ? [
               '>{#p/basic}{~}Is this really the fate that befalls us?',
               '>{#p/basic}{~}A vile prince and his human partner...',
               '>{#p/basic}{~}... on a mission to kill us all?'
            ]
            : dogex()
               ? [
                  '>{#p/basic}{~}For life, you show nothing but contempt.',
                  '>{#p/basic}{~}At every turn, you treat us as inferior.'
               ]
               : world.dead_canine
                  ? [
                     ">{#p/basic}{~}Canis Minor was Canis Major's underling.",
                     '>{#p/basic}{~}Its unique perspective helped in unexpected ways...',
                     '>{#p/basic}{~}Even if it was often mis- understood.'
                  ]
                  : battler.volatile[0].vars.walk
                     ? ['>{#p/basic}{~}Clearly more than I antici- pated...']
                     : ['>{#p/basic}{~}(Sigh...)'],
      turnTalk8: () =>
         world.goatbro
            ? [
               '>{#p/basic}{~}After all is said and done...',
               ">{#p/basic}{~}I can't decide which of you is worse."
            ]
            : dogex()
               ? ['>{#p/basic}{~}Now, it is your turn.', '>{#p/basic}{~}Your turn to be treated as inferior.']
               : world.dead_canine
                  ? [
                     '>{#p/basic}{~}Dogamy and Dogaressa, a duo of dilligence.',
                     '>{#p/basic}{~}Before they met, they often misbehaved.',
                     '>{#p/basic}{~}But once together, they could do ANYTHING.'
                  ]
                  : battler.volatile[0].vars.walk
                     ? ['>{#p/basic}{~}...', '>{#p/basic}{~}Can we really keep going like this?']
                     : ['>{#p/basic}{~}This battle is starting to drag on.'],
      turnTalk9: () =>
         world.goatbro
            ? // gotta love that charlie jade reference-
            ['>{#p/basic}{~}Suffice it to say...', '>{#p/basic}{~}This, I did not expect.']
            : dogex()
               ? ['>{#p/basic}{~}...']
               : world.dead_canine
                  ? [
                     '>{#p/basic}{~}Canis Major was there when the canine unit was formed.',
                     '>{#p/basic}{~}Along with its master, it led the unit well.',
                     '>{#p/basic}{~}But now...'
                  ]
                  : ['>{#p/basic}{~}Human, I...'],
      turnTalk10: () =>
         world.goatbro
            ? [
               '>{#p/basic}{~}There is nothing left to say.',
               '>{#p/basic}{~}I will have justice for the terror you have inspired.'
            ]
            : dogex()
               ? [
                  '>{#p/basic}{~}There is nothing left to say.',
                  ">{#p/basic}{~}I will have justice for what you've done."
               ]
               : world.dead_canine
                  ? [
                     '>{#p/basic}{~}There is nothing left to say.',
                     ">{#p/basic}{~}I will have justice for those dogs' deaths."
                  ]
                  : battler.volatile[0].vars.pet
                     ? ['>{#p/basic}{~}(Blushes)', '>{#p/basic}{~}You are a... kind human...']
                     : [
                        '>{#p/basic}{~}I think I have had enough.',
                        '>{#p/basic}{~}...',
                        '>{#p/basic}{~}In fairness, you do not seem so bad.',
                        '>{#p/basic}{~}At least, compared to how Undyne described.',
                        '>{#p/basic}{~}Accept my mercy as a plea...',
                        '>{#p/basic}{~}A plea that you will not stray into the darkness.'
                     ],
      turnTalk11: () => ['>{#p/basic}{~}...'],
      walkText: [
         '>{#p/human}* (You offer to take Doge on a walk.)',
         '>{#p/basic}* Doge follows your lead.\n* Together you march in unison.',
         '>* This continues for a while...',
         '>* But eventually...',
         '>* Doge grows tired of this frivolous exercise.',
         '>* She follows you back to her patrol zone, and relaxes a little...',
         ">{#p/story}* Doge's ATTACK down!"
      ],
      walkTextEarly: ['>{#p/human}* (You offer to take Doge on a walk, but she has no reason to go on one yet.)'],
      walkTextGeno: [
         '>{#p/human}* (You offer to take Doge on a walk.)',
         '>{#p/basic}* Doge refuses to walk anywhere with you.'
      ],
      walkTextLate1: [
         ">{#p/human}* (You offer to take Doge on a walk, but she's already dried herself up for you.)"
      ],
      walkTextLate2: [
         '>{#p/human}* (You offer to take Doge on a walk, but she never did anything to necessitate it.)'
      ],
      walkTextPost: ['>{#p/human}* (But Doge was already spent from walking beforehand.)'],
      walkTextSus: ['>{#p/human}* (But Doge was too dirty to go on a walk.)']
   },
   b_opponent_muffet: {
      act_check: ['>{#p/story}* MUFFET - ATK 39 DEF 19\n* Queen of all spider clans.\n* ELITE squad volunteer.'],
      act_flirt: () => [
         ...(badSpider()
            ? ['>{#p/human}* (You flirt with Muffet.)\n* (Muffet gives you the stink eyes.)']
            : battler.volatile[0].sparable
               ? ['>{#p/human}* (You flirt with Muffet.)\n* (Muffet giggles and pats your head with several hands.)']
               : world.flirt < 10
                  ? ['>{#p/human}* (You flirt with Muffet.)\n* (Muffet giggles and wags several fingers at you.)']
                  : ['>{#p/human}* (You flirt with Muffet.)\n* (Muffet seems intrigued, but it may not enough.)'])
      ],
      act_flirt2: [
         '>{#p/human}* (You flirt with Muffet again.)\n* (Muffet turns more than a few eyes towards you.)'
      ],
      act_flirt3: [
         '>{#p/human}* (You muster your courage, and ask Muffet out on a picnic date.)',
         '>{#p/basic}* Muffet giggles...',
         '>* Then giggles some more...',
         ">* She can't stop herself!\n* Muffet succumbs to your immaculate flirtatious power!",
         '>* ... then promptly decides to end this battle, so as not to shame her fellow spiders.',
         '>{#p/kidding}* ... what?'
      ],
      flirtReaction1: ['>{#p/basic}{~}How adorable~'],
      flirtReaction2: [">{#p/basic}{~}You're the sweetest~"],
      flirtReaction3: ['>{#p/basic}{~}Ahuhu~'],
      appeaseText: () =>
         world.dead_canine
            ? [
               '>{#p/human}* (You make an appeal to Muffet.)\n* (Muffet is once again intrigued by your words.)',
               ">* (You mention how Doge was forced to fight, and Undyne's lack of care is clear.)",
               '>* (As such, you suggest that trusting Undyne would mean putting spider clans at risk.)',
               '>{#p/basic}* Muffet starts considering the situation...',
               ">{#p/story}* Muffet's SPEED down!"
            ]
            : [
               '>{#p/human}* (You make an appeal to Muffet.)\n* (Muffet is once again intrigued by your words.)',
               ">* (You mention how Doge was mistreated, and Undyne's lack of care is clear.)",
               '>* (As such, you suggest that trusting Undyne would mean putting spider clans at risk.)',
               '>{#p/basic}* Muffet starts considering the situation...',
               ">{#p/story}* Muffet's SPEED down!"
            ],
      appeaseTextEarly: [">{#p/human}* (You make an appeal to Muffet, but she doesn't seem ready to hear it yet.)"],
      appeaseTextGeno: [
         '>{#p/human}* (You make an appeal to Muffet.)',
         '>{#p/basic}* Muffet will not be swayed by your shallow claims.'
      ],
      appeaseTextLate: [
         ">{#p/human}* (You make an appeal to Muffet, but she's already past the point of hearing you out.)"
      ],
      appeaseTextPost: [">{#p/human}* (But Muffet didn't need to be appeased twice.)"],
      appeaseTextSus: ['>{#p/human}* (But Muffet had no reason to listen to you.)'],
      counterText: [
         '>{#p/human}* (You try to counter Muffet.)\n* (Muffet is intrigued by your words.)',
         '>* (You propose that a deal with the ELITE squad is flimsy.)',
         '>* (You point out that one of their ranks already failed to capture you.)',
         '>{#p/basic}* Muffet begins to carefully think everything over...',
         ">{#p/story}* Muffet's SPEED down!"
      ],
      counterTextEarly: [
         ">{#p/human}* (You try to counter Muffet, but she hasn't said anything that could be countered yet.)"
      ],
      counterTextGeno: [
         '>{#p/human}* (You try to counter Muffet.)',
         '>{#p/basic}* Muffet is deadset in her goal.'
      ],
      counterTextLate: [">{#p/human}* (You try to counter Muffet, but she's already made up her mind.)"],
      counterTextPost: ['>{#p/human}* (But Muffet has already heard your argument.)'],
      name: '* Muffet',
      payTalkPost: [">{#p/basic}{~}That's very kind, but we already have more than enough~"],
      payText: [
         '>{#p/human}* (You try to pay Muffet.)',
         ">* As it turns out, Monster Kid had enough G to cover all of the spider clans' expenses!",
         '>* Muffet pockets the money and bows to you and Monster Kid.',
         '>* Her subjects will be well fed for quite a while.',
         ">* Muffet doesn't care about fighting anymore."
      ],
      payTextEarly: [
         ">{#p/human}* (You try to pay Muffet, but she didn't yet see any basis on which she could accept it.)"
      ],
      payTextGeno: [
         '>{#p/human}* (You try to pay Muffet.)',
         ">{#p/basic}* Muffet doesn't need any money from you."
      ],
      payTextLate: [">{#p/human}* (You try to pay Muffet, but she's already past the point of bribery.)"],
      payTextPost: ['>{#p/human}* (You try to pay Muffet again.)'],
      payTextSus: ['>{#p/human}* (But Muffet had no reason to trust you.)'],
      status1: [">{#p/kidding}* I'm trapped...!"],
      turnStatus1: () =>
         badSpider()
            ? world.genocide
               ? world.bullied
                  ? ['>{#p/kidding}* Little bullies...?']
                  : ['>{#p/kidding}* Little killers...?']
               : world.bullied
                  ? ['>{#p/kidding}* Little bully...?']
                  : ['>{#p/kidding}* Little killer...?']
            : ['>{#p/kidding}* Help...!'],
      turnStatus2: () =>
         badSpider()
            ? world.genocide
               ? [">{#p/kidding}* But we haven't done anything!"]
               : [">{#p/kidding}* I've got a bad feeling about this..."]
            : [">{#p/kidding}* So it's a business thing..."],
      turnStatus3: () =>
         badSpider()
            ? [">{#p/kidding}* Yo...\n* She REALLY doesn't like you..."]
            : battler.volatile[0].vars.counter
               ? ['>{#p/kidding}* What are we going to do?']
               : [">{#p/kidding}* We're never getting outta here, are we..."],
      turnStatus4: () =>
         badSpider()
            ? ['>{#p/kidding}* What the heck was THAT?']
            : battler.volatile[0].vars.counter
               ? ['>{#p/kidding}* Is she... changing her mind?']
               : ['>{#p/kidding}* What the heck was THAT?'],
      turnStatus5: () =>
         badSpider()
            ? ['>{#p/kidding}* Of course...']
            : battler.volatile[0].vars.counter
               ? [">{#p/kidding}* Guess it won't be so easy..."]
               : [">{#p/kidding}* Y... you're kidding, right?\n* This isn't fun at all!"],
      turnStatus6: () =>
         badSpider()
            ? [">{#p/kidding}* I don't like what she's saying about you, dude..."]
            : battler.volatile[0].vars.counter
               ? ['>{#p/kidding}* Fellow spiders...?']
               : ['>{#p/kidding}* Uh...'],
      turnStatus7: () =>
         badSpider()
            ? [">{#p/kidding}* She's relentless...!"]
            : battler.volatile[0].vars.appease
               ? ['>{#p/kidding}* Hey, wait...\n* I think this is working!\n* Keep going, dude!']
               : [">{#p/kidding}* I'm...\n* I'm scared, dude..."],
      turnStatus8: () =>
         badSpider()
            ? ['>{#p/kidding}* Dude, HOW are we STILL ALIVE??']
            : battler.volatile[0].vars.appease
               ? [">{#p/kidding}* Yo, freaky muffins aside... we're making progress!\n* I think?"]
               : ['>{#p/kidding}* Ack, not again!!'],
      turnStatus9: () =>
         badSpider()
            ? ['>{#p/kidding}* What\'s "inevitable?"']
            : battler.volatile[0].vars.appease
               ? ['>{#p/kidding}* But...\n* I thought we...']
               : ['>{#p/kidding}* Ack, not again!!'],
      turnStatus10: () =>
         badSpider()
            ? [">{#p/kidding}* Yo, I'm here too, you know..."]
            : battler.volatile[0].vars.appease
               ? [">{#p/kidding}* Hey, I've got money!\n* Let's use it, dude!"]
               : ['>{#p/kidding}* Someone, anyone...'],
      turnStatus11: () =>
         badSpider()
            ? [">{#p/kidding}* This isn't funny...!"]
            : battler.volatile[0].vars.pay
               ? [">{#p/kidding}* I hope that short skeleton doesn't mind me using the money he gave me..."]
               : battler.volatile[0].vars.appease
                  ? [">{#p/kidding}* Dude...\n* Why didn't we help her?"]
                  : [">{#p/kidding}* It's over..."],
      turnStatus12: () =>
         badSpider() ? ['>{#p/kidding}* ...'] : ['>{#p/kidding}* Are we gonna end this, or...?'],
      turnStatus13: () =>
         badSpider() ? ['>{#p/kidding}* Is it really over?'] : ['>{#p/kidding}* Are we gonna end this, or...?'],
      turnTalk1: () =>
         badSpider()
            ? world.genocide
               ? world.bullied
                  ? ['>{#p/basic}{~}Ahuhuhu... two little bullies crawl into my web~']
                  : ['>{#p/basic}{~}Ahuhuhu... two little killers crawl into my web~']
               : world.bullied
                  ? ['>{#p/basic}{~}Ahuhuhu... a little bully crawls into my web~']
                  : ['>{#p/basic}{~}Ahuhuhu... a little killer crawls into my web~']
            : [">{#p/basic}{~}You're mine now, dearies~"],
      turnTalk1a: [
         '>{#p/basic}{~}I hope you like your new color~',
         '>{#p/basic}{~}I think purple looks better on you...',
         ">{#p/basic}{~}Don't you, dearie?"
      ],
      turnTalk2: () =>
         badSpider()
            ? [
               world.genocide
                  ? '>{#p/basic}{~}What did you think would happen, dearies?'
                  : '>{#p/basic}{~}What did you think would happen, dearie?',
               '>{#p/basic}{~}Did you expect me to SPARE you?'
            ]
            : [
               ">{#p/basic}{~}Don't expect me to go easy on you, little human.",
               '>{#p/basic}{~}That ELITE squad offered lots of money for your SOUL~'
            ],
      turnTalk3: () =>
         badSpider()
            ? ['>{#p/basic}{~}Oh my~', '>{#p/basic}{~}Such a shame for you~']
            : battler.volatile[0].vars.counter
               ? ['>{#p/basic}{~}Ahuhuhu...\nWell...']
               : [
                  '>{#p/basic}{~}With your lack of a counter- offer...',
                  '>{#p/basic}{~}The choice for me is clear~'
               ],
      turnTalk4: () =>
         badSpider()
            ? [
               '>{#p/basic}{~}Well.\nThere is one good thing about it~',
               ">{#p/basic}{~}I don't have to feel bad about feeding my pet!"
            ]
            : battler.volatile[0].vars.counter
               ? ['>{#p/basic}{~}A better deal would be nice...']
               : ['>{#p/basic}{~}Where are you, my pet~', ">{#p/basic}{~}It's time to eat~"],
      turnTalk5: () =>
         badSpider()
            ? [
               '>{#p/basic}{~}You survived?\nImpressive~',
               '>{#p/basic}{~}I shall have to reward you...',
               '>{#p/basic}{~}... with more attacks, of course.\nAhuhuhu!'
            ]
            : battler.volatile[0].vars.counter
               ? [
                  '>{#p/basic}{~}But what guarantee do I have...',
                  ">{#p/basic}{~}... that you won't just stab me in the back?"
               ]
               : [
                  '>{#p/basic}{~}I often wondered what fighting would be like.',
                  ">{#p/basic}{~}I never realized it'd be so much fun~"
               ],
      turnTalk6: () =>
         badSpider()
            ? [
               '>{#p/basic}{~}How did it feel, hmm?',
               !world.bullied
                  ? '>{#p/basic}{~}All those monsters falling like dominoes...'
                  : '>{#p/basic}{~}All those monsters running scared...'
            ]
            : battler.volatile[0].vars.counter
               ? [
                  '>{#p/basic}{~}My fellow spiders need kept safe...',
                  ">{#p/basic}{~}I can't put THEM in danger, can I?\nAhuhuhu..."
               ]
               : [
                  ">{#p/basic}{~}Aren't you having fun, dearies?",
                  '>{#p/basic}{~}My fellow spiders certainly will...',
                  '>{#p/basic}{~}... when they get their share of the money~'
               ],
      turnTalk7: () =>
         badSpider()
            ? world.genocide || !world.bullied
               ? [
                  world.genocide ? '>{#p/basic}{~}Well, dearies...' : '>{#p/basic}{~}Well, dearie...',
                  '>{#p/basic}{~}I shall enjoy killing you personally~'
               ]
               : ['>{#p/basic}{~}Well, dearie...', '>{#p/basic}{~}I shall enjoy paying back the favor~']
            : battler.volatile[0].vars.appease
               ? ['>{#p/basic}{~}I must admit, that is very worrying...']
               : [
                  '>{#p/basic}{~}Well, no matter, little human~',
                  '>{#p/basic}{~}The only thing that matters now is your SOUL~'
               ],
      turnTalk8: () =>
         badSpider()
            ? [
               world.genocide
                  ? '>{#p/basic}{~}Oh, this is so much fun, you two!'
                  : '>{#p/basic}{~}Oh, this is so much fun, is it not?',
               ">{#p/basic}{~}My pet, it's feeding time~"
            ]
            : battler.volatile[0].vars.appease
               ? [
                  ">{#p/basic}{~}And they didn't exactly do much to earn my trust...",
                  '>{#p/basic}{~}Oh, hello, my pet~'
               ]
               : ['>{#p/basic}{~}Time for round two, my pet~'],
      turnTalk9: () =>
         badSpider()
            ? ['>{#p/basic}{~}You only delay the inevitable~']
            : battler.volatile[0].vars.appease
               ? ['>{#p/basic}{~}Still, dearies...', ">{#p/basic}{~}I don't know if I can trust you~"]
               : [">{#p/basic}{~}You're resilient, I'll give you that~"],
      turnTalk10: () =>
         badSpider()
            ? ['>{#p/basic}{~}Come now...', ">{#p/basic}{~}Aren't you getting tired?"]
            : battler.volatile[0].vars.appease
               ? ['>{#p/basic}{~}Unless, perhaps...', '>{#p/basic}{~}You can offer me a little insurance?']
               : ['>{#p/basic}{~}But unless my deal changes, your SOUL is as good as mine~'],
      turnTalk11: () =>
         badSpider()
            ? ['>{#p/basic}{~}Ahuhuhu...']
            : battler.volatile[0].vars.pay
               ? [
                  '>{#p/basic}{~}You two have my sincerest apologies~',
                  ">{#p/basic}{~}This is a good deed I won't easily forget!"
               ]
               : [
                  ">{#p/basic}{~}What's this?\nA message from Undyne?",
                  ">{#p/basic}{~}She's called off the deal...?",
                  '>{#p/basic}{~}... hmmm...',
                  ">{#p/basic}{~}Well, I think my job here is done, don't you?",
                  '>{#p/basic}{~}Sorry for wasting your time~'
               ],
      turnTalk12: () => ['>{#p/basic}{~}...'],
      turnTalk13: (didf: boolean) =>
         badSpider()
            ? [
               world.genocide
                  ? '>{#p/basic}{~}You know what, dearies?'
                  : '>{#p/basic}{~}You know what, dearie?',
               ">{#p/basic}{~}I've had enough of fighting you.",
               '>{#p/basic}{~}So do what you will.',
               world.genocide || !world.bullied
                  ? didf
                     ? ">{#p/basic}{~}... sorry, Undyne.\nI'd rather die on my own terms, thank you."
                     : '>{#p/basic}{~}... sorry, Undyne.\nThis has dragged on for long enough.'
                  : didf
                     ? ">{#p/basic}{~}Honestly, a little bully like you isn't worth dying over..."
                     : ">{#p/basic}{~}Honestly, a little bully like you isn't worth my time...",
               '>{#p/basic}{~}Bye bye, now~'
            ]
            : ['>{#p/basic}{~}...']
   },
   b_opponent_undyne: {
      artifact: [">{#p/human}* (Undyne doesn't even seem to know what it is.)"],
      epiphaNOPE: ['>{#p/undyne}Huh?\nWhat even IS this?'],
      spaghetti1: [
         '>{#p/basic}* The smell reminds Undyne of someone close to her...',
         ">{#p/story}* Undyne's ATTACK down!"
      ],
      spaghetti2: () =>
         world.genocide
            ? [
               ">{#p/basic}* The smell reminds Undyne of someone she'll never see again...",
               '>{#p/basic}* ... but her determination to eliminate you strengthens.',
               ">{#p/story}* Undyne's ATTACK up!\n* Undyne's DEFENSE down!"
            ]
            : [
               ">{#p/basic}* The smell reminds Undyne of someone she'll never see again...",
               ">{#p/story}* Undyne's DEFENSE down!"
            ],
      act_check: () =>
         world.genocide
            ? [">{#p/asriel2}* Undyne the Undying.\n* Shouldn't you be attacking her or something?"]
            : helmetdyne()
               ? ['>{#p/story}* UNDYNE - ATK 40 DEF 100\n* Captain of the Royal Guard.\n* Relentless.']
               : respecc()
                  ? ['>{#p/story}* UNDYNE - ATK 25 DEF 10\n* Once your sworn enemy, now your unmatched equal!']
                  : ['>{#p/story}* UNDYNE - ATK 50 DEF 20\n* The heroine that NEVER gives up.'],
      name: () => (world.genocide ? '* Undyne the Undying' : '* Undyne'),
      status1: () =>
         helmetdyne()
            ? ['>{#p/story}* Undyne towers above you.']
            : respecc()
               ? ['>{#p/story}* Undyne takes you head-on!']
               : ['>{#p/story}* Undyne attacks!'],
      intro1: () =>
         SAVE.data.n.state_starton_papyrus === 1
            ? ['>{*}{#p/undyne}Ready yourself.']
            : ['>{*}{#p/undyne}En guarde!'],
      intro2: () =>
         SAVE.data.n.state_starton_papyrus === 1
            ? [">{*}{#p/undyne}I wasn't done with my story."]
            : respecc()
               ? ['>{*}{#p/undyne}Huh!?\nI thought you were tough!']
               : [">{*}{#p/undyne}You won't get away from me this time!"],
      intro3: () =>
         respecc()
            ? ['>{*}{#p/undyne}No more second chances!']
            : [">{*}{#p/undyne}You've escaped from me for the LAST time!"],
      intro4: ['>{*}{#p/undyne}STOP RUNNING AWAY!!!'],
      intro5: ['>{*}{#p/undyne}COME BACK HERE, YOU LITTLE PUNK!!'],
      earlyChallenge: () =>
         SAVE.data.n.state_starton_papyrus === 1
            ? [
               '>{#p/undyne}{#e/undyne/3}So, you wanna do this the {@fill=#f00}hard way{@fill=#000}, huh?',
               '>{#e/undyne/2}Fine by me.'
            ]
            : respecc()
               ? [
                  ">{#p/undyne}{#e/undyne/17}What!?\nI'm already going as fast as I can!",
                  '>{#e/undyne/17}But...\nI... you...',
                  ">{#e/undyne/17}N-no!\nI'll show you!",
                  ">{#e/undyne/1}I'll show you {@fill=#f00}EVERYTHING I'VE GOT{@fill=#000}!"
               ]
               : [
                  '>{#p/undyne}{#e/undyne/17}So, you wanna do this the {@fill=#f00}hard way{@fill=#000}, huh?',
                  '>{#e/undyne/1}FINE BY ME!\nFUHUHU!'
               ],
      earlyChallengeStatus: ['>{#p/story}* Things are about to get spicy.'],
      randStatus1: () =>
         respecc()
            ? ['>{#p/story}* Undyne points dramatically towards space.']
            : ['>{#p/story}* Undyne points heroically towards space.'],
      randStatus2: () =>
         respecc()
            ? ['>{#p/story}* Undyne twirls her spear with grace.']
            : ['>{#p/story}* Undyne flips her spear impatiently.'],
      randStatus3: () => ['>{#p/story}* Undyne suplexes an asteroid.\n* Just because she can.'],
      randStatus4: () =>
         respecc() ? ['>{#p/story}* Undyne bounces with fervor.'] : ['>{#p/story}* Undyne bounces impatiently.'],
      randStatus5: () =>
         respecc()
            ? ['>{#p/story}* Undyne flashes a genuine smile.']
            : ['>{#p/story}* Undyne flashes a menacing smile.'],
      randStatus6: () =>
         respecc()
            ? ['>{#p/story}* Undyne looks on with adoration.']
            : ['>{#p/story}* Undyne draws her finger across her neck.'],
      randStatus7: () =>
         respecc()
            ? ['>{#p/story}* Undyne lets out a battle cry.']
            : ['>{#p/story}* Undyne holds her fist in front of her and shakes her head.'],
      randStatus8: () =>
         respecc()
            ? ['>{#p/story}* Undyne stares into your SOUL.']
            : ['>{#p/story}* Undyne towers threateningly.'],
      randStatus9: () =>
         respecc()
            ? ['>{#p/story}* Undyne thinks of her friends... and thinks of you.']
            : ['>{#p/story}* Undyne thinks of her friends and pounds the ground with her fists.'],
      randStatus10: () =>
         respecc() ? ['>{#p/story}* Smells like tilapia.'] : ['>{#p/story}* Smells like sushi.'],
      papStatus1: ['>{#p/story}* Undyne has a tear in her eye.'],
      papStatus2: ['>{#p/story}* Undyne scowls at you.'],
      papStatus3: ['>{#p/story}* Undyne thinks of her friends and shatters the ground with her body.'],
      papStatus4: [">{#p/story}* Undyne isn't in the mood for games."],
      papStatus5: ['>{#p/story}* Smells like tuna salad.'],
      endStatus1: [">{#p/story}* Undyne's eye is twitching involuntarily."],
      endStatus2: ['>{#p/story}* Undyne is smashing spears on the ground.'],
      endStatus3: [">{#p/story}* Undyne's eye dart around to see if this is a prank."],
      endStatus4: ['>{#p/story}* Undyne is hyperventilating.'],
      endStatus5: ['>{#p/story}* Smells like roasted fish.'],
      tutorial1: () =>
         SAVE.data.n.state_starton_papyrus === 1
            ? [
               '>{#p/undyne}{#e/undyne/3}...',
               ">{#e/undyne/4}What? You think I'm just gonna stand here and explain my strategy to you?"
            ]
            : [
               ">{#p/undyne}{#e/undyne/0}As long as you're {@fill=#00c000}GREEN{@fill=#000} you {@fill=#f00}CAN'T ESCAPE{@fill=#000}!",
               '>{#e/undyne/0}Unless you learn to {@fill=#f00}face danger head-on{@fill=#000}...',
               ">{#e/undyne/1}You won't last a SECOND against ME!"
            ],
      tutorial2: [
         '>{#p/undyne}{#e/undyne/0}When I said {@fill=#f00}face towards danger{@fill=#000}...',
         '>{#e/undyne/1}I meant face towards the bullets!'
      ],
      tutorial3: () => [
         '>{#p/undyne}{#e/undyne/3}Look.',
         '>{#e/undyne/3}I gave you a spear.',
         '>{#e/undyne/2}You can use that to block my attacks.',
         respecc()
            ? '>{#e/undyne/17}I should not have to explain this to YOU of all people!'
            : '>{#e/undyne/17}Do I have to explain this any more clearly?'
      ],
      tutorial4: [
         '>{#p/undyne}{#e/undyne/6}WHAT ARE YOU DOING?',
         '>{#e/undyne/7}JUST FACE UPWARDS!!!',
         ">{#e/undyne/5}IT'S NOT THAT HARD!!!"
      ],
      tutorial5: () =>
         respecc()
            ? [
               '>{#p/undyne}{#e/undyne/2}...',
               '>{#e/undyne/2}I wanted this to be a fair fight.',
               ">{#e/undyne/3}I had hoped you'd show me what you're capable of.",
               '>{#e/undyne/4}And maybe, if you beat me like this...',
               ">{#e/undyne/2}It'd truly show how strong you are.",
               '>{#e/undyne/6}BUT NOW???',
               ">{#e/undyne/5}I DON'T CARE!",
               ">{#e/undyne/5}I'M NOT YOUR FREAKING BABYSITTER!",
               '>{#e/undyne/17}Unless your babysitter...',
               '>{#e/undyne/5}DOES THIS!'
            ]
            : [
               '>{#p/undyne}{#e/undyne/2}...',
               '>{#e/undyne/2}I wanted this to be a fair fight.',
               '>{#e/undyne/3}I wanted to give you a chance.',
               '>{#e/undyne/4}And maybe, if I beat you like this...',
               ">{#e/undyne/2}It'd truly show how strong monsters can be.",
               '>{#e/undyne/6}BUT NOW???',
               ">{#e/undyne/5}I DON'T CARE!",
               ">{#e/undyne/5}I'M NOT YOUR FREAKING BABYSITTER!",
               '>{#e/undyne/17}Unless your babysitter...',
               '>{#e/undyne/5}DOES THIS!'
            ],
      turnTalkA1: () =>
         SAVE.data.n.state_starton_papyrus === 1
            ? SAVE.data.n.hp < 6
               ? [
                  '>{#p/undyne}{#e/undyne/33}Too difficult?\nFeh.',
                  ">{#p/undyne}{#e/undyne/2}You should've thought about THAT when you had the chance."
               ]
               : SAVE.data.n.hp < 11
                  ? [
                     '>{#p/undyne}{#e/undyne/3}Not bad, not great.',
                     ">{#p/undyne}{#e/undyne/2}Papyrus certainly wouldn't be satisfied, though."
                  ]
                  : SAVE.data.n.hp < 16
                     ? [
                        ">{#p/undyne}{#e/undyne/3}So you're gonna be a little tougher than I expected.",
                        '>{#p/undyne}{#e/undyne/2}Fair enough.'
                     ]
                     : [
                        '>{#p/undyne}{#e/undyne/4}Impressive...',
                        ">{#p/undyne}{#e/undyne/2}Just don't expect your luck to last long."
                     ]
            : battler.volatile[0].vars.trolled
               ? respecc()
                  ? [
                     '>{#p/undyne}{#e/undyne/1}\x00*huff...*\n\x00*huff...*',
                     '>{#e/undyne/1}So this was your plan all along, huh?',
                     '>{#e/undyne/5}Get me all riled up so you could face me at FULL STRENGTH?',
                     '>{#e/undyne/0}Well then.',
                     ">{#e/undyne/6}Looks like WE'RE gonna have to do this the {@fill=#f00}hard way{@fill=#000}!",
                     '>{#e/undyne/1}Fuhuhuhu!!'
                  ]
                  : [
                     '>{#p/undyne}{#e/undyne/1}\x00*huff...*\n\x00*huff...*',
                     '>{#e/undyne/21}Not bad.',
                     ">{#e/undyne/15}But I don't have time for your games.",
                     ">{#e/undyne/6}So WE'RE gonna have to do this the {@fill=#f00}hard way{@fill=#000}!",
                     '>{#e/undyne/1}Fuhuhuhu!!'
                  ]
               : ['>{#p/undyne}{#e/undyne/1}Not bad!\nThen how about THIS!?'],
      turnTalkA2: () =>
         SAVE.data.n.state_starton_papyrus === 1
            ? ['>{#p/undyne}{#e/undyne/2}Let me tell you a little story.']
            : respecc()
               ? [">{#p/undyne}{#e/undyne/0}It's been a long time since I've met a warrior like you..."]
               : [">{#p/undyne}{#e/undyne/0}For years, we've dreamed of a happy ending..."],
      turnTalkA3: () =>
         SAVE.data.n.state_starton_papyrus === 1
            ? [
               '>{#p/undyne}{#e/undyne/2}Back when I was training to be a royal guard...',
               ">{#p/undyne}{#e/undyne/2}Things weren't all starlight and roses."
            ]
            : respecc()
               ? [">{#p/undyne}{#e/undyne/0}And now, I've got the chance to do battle with one!"]
               : ['>{#p/undyne}{#e/undyne/0}And now, the stars are just within reach!'],
      turnTalkA4: () =>
         SAVE.data.n.state_starton_papyrus === 1
            ? ['>{#p/undyne}{#e/undyne/2}Many were against me joining the guard, including my family.']
            : respecc()
               ? [">{#p/undyne}{#e/undyne/1}I'll savor this moment for as long as it lasts!"]
               : [">{#p/undyne}{#e/undyne/1}I won't let you snatch it away from us!"],
      turnTalkA5: () =>
         SAVE.data.n.state_starton_papyrus === 1
            ? [
               '>{#p/undyne}{#e/undyne/3}And when I lost my eye in a training accident...',
               '>{#p/undyne}{#e/undyne/2}I felt like I had nobody to turn to.'
            ]
            : ['>{#p/undyne}{#e/undyne/5}NGAHHH!\nEnough warming up!'],
      turnTalkA6a: () =>
         SAVE.data.n.state_starton_papyrus === 1
            ? [
               '>{#p/undyne}{#e/undyne/11}Howling in pain, I dragged myself across the floor...',
               '>{#e/undyne/3}Hoping someone would hear me.'
            ]
            : [">{#p/undyne}{#e/undyne/20}Well... you're tough!"],
      turnTalkA6b: () =>
         SAVE.data.n.state_starton_papyrus === 1
            ? [
               '>{#p/undyne}{#e/undyne/11}Howling in pain, I dragged myself across the floor...',
               '>{#e/undyne/3}Hoping someone would hear me.'
            ]
            : respecc()
               ? ['>{#p/undyne}{#e/undyne/9}Come on!\nHit me already!', ">{#e/undyne/7}Don't just stand there!"]
               : [
                  '>{#p/undyne}{#e/undyne/6}Mercy!\nHa!',
                  ">{#e/undyne/5}I still can't believe you want to SPARE me!"
               ],
      turnTalkA7a: () =>
         SAVE.data.n.state_starton_papyrus === 1
            ? [
               '>{#p/undyne}{#e/undyne/4}Then, I heard an innocent voice.',
               '>{#e/undyne/3}Calling from the distance.'
            ]
            : respecc()
               ? ['>{#p/undyne}{#e/undyne/0}Not that I expected anything less...']
               : ['>{#p/undyne}{#e/undyne/0}But even if you could beat me...'],
      turnTalkA7b: () =>
         SAVE.data.n.state_starton_papyrus === 1
            ? [
               '>{#p/undyne}{#e/undyne/4}Then, I heard an innocent voice.',
               '>{#e/undyne/3}Calling from the distance.'
            ]
            : respecc()
               ? [">{#p/undyne}{#e/undyne/10}This isn't like you at all!"]
               : ['>{#p/undyne}{#e/undyne/3}But even if I DID spare you...'],
      turnTalkB1: () =>
         SAVE.data.n.state_starton_papyrus === 1
            ? [
               '>{#p/undyne}{#e/undyne/2}After searching desperately for help, to no avail...',
               '>{#e/undyne/3}An innocent voice called my name.'
            ]
            : respecc()
               ? [
                  '>{#p/undyne}{#e/undyne/3}You know...',
                  ">{#p/undyne}{#e/undyne/4}Even though we haven't escaped the outpost yet..."
               ]
               : [">{#p/undyne}{#e/undyne/3}Honestly, I'm doing you a favor..."],
      turnTalkB2: () =>
         SAVE.data.n.state_starton_papyrus === 1
            ? ['>{#p/undyne}{#e/undyne/2}At the time, Papyrus was just a kid.']
            : respecc()
               ? [">{#p/undyne}{#e/undyne/0}Getting to fight makes me FEEL like I'm already free!"]
               : ['>{#p/undyne}{#e/undyne/1}No human has EVER made it past ASGORE!'],
      turnTalkB3: () =>
         SAVE.data.n.state_starton_papyrus === 1
            ? ['>{#p/undyne}{#e/undyne/3}Most kids run when they sense danger...', '>{#e/undyne/4}But not him.']
            : respecc()
               ? ['>{#p/undyne}{#e/undyne/4}Just like that one anime Alphys showed me...']
               : ['>{#p/undyne}{#e/undyne/4}Killing you now is an act of mercy...'],
      turnTalkB4: () =>
         SAVE.data.n.state_starton_papyrus === 1
            ? [
               '>{#p/undyne}{#e/undyne/2}All that mattered to him was that someone was hurting.',
               '>{#e/undyne/2}Someone he could-\nNo, HAD to help.'
            ]
            : respecc()
               ? [
                  '>{#p/undyne}{#e/undyne/1}No matter how awful being trapped out here can be...',
                  ">{#e/undyne/0}It won't stop us from doing what we love!"
               ]
               : ['>{#p/undyne}{#e/undyne/6}So STOP being so damn resilient!'],
      turnTalkB5: () =>
         SAVE.data.n.state_starton_papyrus === 1
            ? [
               ">{#p/undyne}{#e/undyne/4}'Cause that's just who he was.",
               '>{#p/undyne}{#e/undyne/3}Right to the end.'
            ]
            : respecc()
               ? [
                  ">{#p/undyne}{#e/undyne/1}... but man, you really don't know when to quit!",
                  ">{#e/undyne/17}How'd you manage to get this strong!?"
               ]
               : ['>{#p/undyne}{#e/undyne/5}What the hell are humans made out of!?'],
      turnTalkB6: () =>
         SAVE.data.n.state_starton_papyrus === 1
            ? [
               '>{#p/undyne}{#e/undyne/4}For all my bravado, courage, and strength of will...',
               ">{#e/undyne/11}Even I didn't have what it took to be like him."
            ]
            : respecc()
               ? [">{#p/undyne}{#e/undyne/5}Anyone else would've GIVEN UP by now!"]
               : ['>{#p/undyne}{#e/undyne/5}Anyone else would be DEAD by now!'],
      turnTalkB7a: () =>
         SAVE.data.n.state_starton_papyrus === 1
            ? [
               ">{#p/undyne}{#e/undyne/2}You didn't just kill a friend, or a student.",
               ">{#e/undyne/2}You killed the one person who would've forgiven you for it."
            ]
            : respecc()
               ? [">{#p/undyne}{#e/undyne/3}Then again, you've had time to train..."]
               : ['>{#p/undyne}{#e/undyne/7}Are you even listening to me!?'],
      turnTalkB7b: () =>
         SAVE.data.n.state_starton_papyrus === 1
            ? [
               ">{#p/undyne}{#e/undyne/2}You didn't just kill a friend, or a student.",
               ">{#e/undyne/2}You killed the one person who would've forgiven you for it."
            ]
            : respecc()
               ? [">{#p/undyne}{#e/undyne/3}Huh?\nDon't tell me you're ACTUALLY giving up..."]
               : [">{#p/undyne}{#e/undyne/8}And sparing me won't do anything!!"],
      turnTalkB8a: () =>
         SAVE.data.n.state_starton_papyrus === 1
            ? [
               world.trueKills > 9
                  ? '>{#p/undyne}{#e/undyne/11}With him and so many others gone...'
                  : '>{#p/undyne}{#e/undyne/11}With him gone...',
               ">{#p/undyne}{#e/undyne/2}The only mercy YOU'RE going to get...",
               '>{#p/undyne}{#e/undyne/1}... is a quick death at the end of MY spear!'
            ]
            : respecc()
               ? [
                  '>{#p/undyne}{#e/undyne/18}All those other monsters you fought...',
                  ">{#p/undyne}{#e/undyne/1}THAT'S the source of your power!"
               ]
               : ['>{#p/undyne}{#e/undyne/9}Come on!'],
      turnTalkB8b: () =>
         SAVE.data.n.state_starton_papyrus === 1
            ? [
               world.trueKills > 9
                  ? '>{#p/undyne}{#e/undyne/11}With him and so many others gone...'
                  : '>{#p/undyne}{#e/undyne/11}With him gone...',
               ">{#p/undyne}{#e/undyne/2}The only mercy YOU'RE going to get...",
               '>{#p/undyne}{#e/undyne/1}... is a quick death at the end of MY spear!'
            ]
            : respecc()
               ? [">{#p/undyne}{#e/undyne/5}Come on, I'm GIVING you an opening here!"]
               : ['>{#p/undyne}{#e/undyne/1}Seriously.'],
      turnTalkC1: () =>
         SAVE.data.n.state_starton_papyrus === 1
            ? [
               '>{#p/undyne}{#e/undyne/11}You know, punk...',
               ">{#p/undyne}{#e/undyne/2}It's rude to interrupt people when they're monologuing.",
               ...(world.trueKills > 9
                  ? [
                     ">{#p/undyne}{#e/undyne/11}...\nYou're going to pay for what you did to him...",
                     ">{#p/undyne}{#e/undyne/2}... and all the other monsters you've slaughtered."
                  ]
                  : [">{#p/undyne}{#e/undyne/2}...\nYou're going to pay for what you did to him."])
            ]
            : [
               '>{#p/undyne}{#e/undyne/17}Keep a close eye on my attacks, and maybe...',
               ">{#p/undyne}{#e/undyne/5}... you'll be smart enough to know when to let 'em through!"
            ],
      turnTalkC2: () =>
         SAVE.data.n.state_starton_papyrus === 1
            ? [
               ">{#p/undyne}{#e/undyne/2}Y'know, Alphys told me humans can be determined...",
               '>{#p/undyne}{#e/undyne/1}Feh.\nDetermination will only get you so far.'
            ]
            : respecc()
               ? [
                  '>{#p/undyne}{#e/undyne/1}Still going!?',
                  '>{#p/undyne}{#e/undyne/17}Ha...\nAlphys told me humans can be determined...'
               ]
               : [
                  '>{#p/undyne}{#e/undyne/1}Alphys told me humans can be determined...',
                  '>{#p/undyne}{#e/undyne/1}I see now what she meant by that!'
               ],
      turnTalkC3: () =>
         SAVE.data.n.state_starton_papyrus === 1 || respecc()
            ? ['>{#p/undyne}{#e/undyne/1}But you know what?', ">{#e/undyne/1}I'm determined, too!"]
            : [">{#p/undyne}{#e/undyne/1}But I'm determined, too!"],
      turnTalkC4: () =>
         respecc()
            ? [">{#p/undyne}{#e/undyne/5}Determined to show you who's BOSS!"]
            : ['>{#p/undyne}{#e/undyne/6}Determined to end this RIGHT NOW!!'],
      turnTalkC5: () =>
         respecc() ? [">{#p/undyne}{#e/undyne/9}... WHO'S BOSS!"] : ['>{#p/undyne}{#e/undyne/7}... RIGHT NOW!'],
      turnTalkC6: () =>
         respecc()
            ? [">{#p/undyne}{#e/undyne/10}... WHO'S...\n...\n... BOSS!!"]
            : ['>{#p/undyne}{#e/undyne/9}... RIGHT...\n...\n... NOW!!'],
      turnTalkC7: ['>{#p/undyne}{#e/undyne/10}Ha...\nHa...'],
      turnTalkC8: () =>
         respecc()
            ? ['>{#p/undyne}{#e/undyne/5}NGAHHH!!!\nFINAL ATTACK!!!']
            : ['>{#p/undyne}{#e/undyne/5}NGAHHH!!!\nDIE ALREADY, YOU LITTLE BRAT!'],
      turnTalkC9a: [">{#p/undyne}{#e/undyne/5}YOU'RE GETTING IN MY WAY!"],
      turnTalkC9b: ['>{#p/undyne}{#e/undyne/5}I WILL NEVER TAKE MERCY FROM THE LIKES OF YOU!'],
      turnTalkC10a: ['>{#p/undyne}{#e/undyne/6}I WILL NOT BE DEFEATED!'],
      turnTalkC10b: ['>{#p/undyne}{#e/undyne/6}I WILL FIGHT YOU TO THE BITTER END!'],
      turnTalkD: ['>{#p/undyne}{#e/undyne/9}...'],
      respeccTalk1: [
         '>{#p/undyne}{#e/undyne/11}\x00*huff...*\n\x00*huff...*',
         '>{#e/undyne/3}...',
         '>{#e/undyne/4}Well...',
         ">{#e/undyne/17}You're certainly tough, aren't you?"
      ],
      respeccTalk2: [
         '>{#e/undyne/0}... heh, enough to beat me, anyway.',
         ">{#e/undyne/13}But hey, that's pretty freaking tough!",
         ">{#e/undyne/1}Even though not everyone's gonna like you for it...",
         '>{#e/undyne/0}Seeing a human fight with honor gives me hope for your kind.',
         '>{#e/undyne/4}...',
         ">{#e/undyne/3}It's a shame we can't do battle forever, huh?"
      ],
      respeccTalk3: [
         '>{#e/undyne/1}Just... whatever you do, whoever you fight with...',
         ">{#e/undyne/1}Don't let it change who you are, got it?",
         '>{#e/undyne/3}...',
         '>{#e/undyne/4}Until next time...',
         '>{#e/undyne/4}Warrior.'
      ],
      death1: () =>
         respecc()
            ? [
               '>{#p/undyne}Ngahhh...',
               '>I thought...\nYou were different...',
               '>But then...\n... you actually...\n... urgh...',
               '>...'
            ]
            : [
               '>{#p/undyne}Ngahhh...',
               '>You were stronger...\nThan I thought...',
               '>So then...\n... this is where...\n... it ends...',
               '>...'
            ],
      death2: () =>
         helmetdyneAttack() ? ['>{#p/undyne}{#e/undyne/31}...'] : ['>{#p/undyne}{#e/undyne/31}No...'],
      death3: () =>
         helmetdyneAttack()
            ? ['>{#p/undyne}{#e/undyne/46}... no.', '>{#e/undyne/43}Not yet.']
            : [
               '>{#p/undyne}{#e/undyne/32}NO!',
               ">I won't die!",
               ...(respecc()
                  ? ['>This betrayal...\nThis... dishonor...', ">I won't let you get away with it!"]
                  : [
                     SAVE.data.n.state_starton_papyrus === 1
                        ? '>{#e/undyne/36}Alphys...\nAsgore...'
                        : '>{#e/undyne/36}Alphys...\nAsgore...\nPapyrus...',
                     '>{#e/undyne/32}Everyone is counting on me to protect them!'
                  ]),
               '>{#e/undyne/32}NNNNGAH!'
            ],
      death4: () =>
         helmetdyneAttack()
            ? [">{#e/undyne/45}Not while you're still breathing."]
            : [
               '>{#p/undyne}{#e/undyne/32}Human!',
               respecc()
                  ? '>{#e/undyne/36}In the name of a good and fair fight...'
                  : ">{#e/undyne/36}In the name of everybody's hopes and dreams...",
               '>{#e/undyne/32}I WILL DEFEAT YOU!'
            ],
      determination1: () =>
         helmetdyneAttack() ? [] : [">{#p/undyne}{#e/undyne/32}Come on, is that all you've got!?"],
      determination2: () => (helmetdyneAttack() ? [] : ['>{#p/undyne}{#e/undyne/32}... pathetic.']),
      determination3: () =>
         helmetdyneAttack() ? [] : [">{#p/undyne}{#e/undyne/32}You're going to have to try harder than that!"],
      determination4: () =>
         helmetdyneAttack()
            ? []
            : respecc()
               ? [">{#p/undyne}{#e/undyne/34}W-where's your fighting spirit now, huh?"]
               : ['>{#p/undyne}{#e/undyne/34}S-see how strong we are when we believe in ourselves?'],
      determination5: () =>
         helmetdyneAttack() ? [] : ['>{#p/undyne}{#e/undyne/35}H... heh...', '>{#e/undyne/34}Had enough yet?'],
      determination6: () => (helmetdyneAttack() ? [] : ['>{#p/undyne}{#e/undyne/34}...']),
      determination7: () =>
         helmetdyneAttack() ? [] : [">{#p/undyne}{#e/undyne/35}... I won't...\n...\ngive up..."],
      determination8: () => (helmetdyneAttack() ? [] : ['>{#p/undyne}{#e/undyne/34}...']),
      death5: () => [
         helmetdyneAttack() ? '>{#p/undyne}{#e/undyne/43}...' : '>{#p/undyne}{#e/undyne/34}...',
         '>{#p/undyne}{#e/undyne/47}Ha...\nHa...',
         '>{#e/undyne/44}...\nAlphys...',
         '>This is what I was afraid of...',
         '>{#e/undyne/49}This is why I never told you...',
         '>...'
      ],
      death6: () => [
         '>{#p/undyne}{#e/undyne/44}No...\nNo!',
         '>{#e/undyne/34}Not yet!',
         ">{#e/undyne/48}I won't die!"
      ],
      death7: ['>{*}{#p/undyne}{#i/4}{@random=1.1/1.1}NGAHHHHHHHH!!!{^10}{%}'],
      death8a: [">{*}{#p/undyne}{#i/5}{#v/1}{@random=1.1/1.1}I WON'T DIE!{^15}{%}"],
      death8b: [">{*}{#p/undyne}{#i/5}{#v/2}{@random=1.1/1.1}I WON'T DIE!{^15}{%}"],
      death8c: [">{*}{#p/undyne}{#i/5}{#v/3}{@random=1.1/1.1}I WON'T DIE!{^15}{%}"],
      death9: [">{*}{#p/undyne}{#i/6}{#v/4}{@random=1.1/1.1}I{^10} WON'T{^30}{%}"],
      deterStatus1: ['>{#p/story}* Undyne is smiling as if nothing is wrong.'],
      deterStatus2: [">{#p/story}* Undyne's body is wavering."],
      deterStatus3: [">{#p/story}* Undyne's body is losing its shape."],
      deterStatus4: ['>{#p/story}* Undyne takes a deep breath.'],
      deterStatus5: ['>{#p/story}* Undyne stands defiantly.'],
      challengeText1: [">{#p/human}* (You tell Undyne her attacks are too easy.)\n* (She doesn't care.)"],
      challengeText2: [
         '>{#p/human}* (You tell Undyne her attacks are too easy.)',
         '>{#p/basic}* The bullets get faster.'
      ],
      challengeText3: [
         '>{#p/human}* (You tell Undyne her attacks are too easy.)',
         '>{#p/basic}* The bullets get ridiculous.'
      ],
      challengeText4: ['>{#p/human}* (You tell Undyne she should give you a REAL fight.)'],
      challengeText5: [
         '>{#p/human}* (You tell Undyne her attacks are too easy.)',
         ">{#p/basic}* Undyne can't go any faster."
      ],
      challengeText7: [">{#p/human}* (You tell Undyne her attacks are too easy.)\n* (She's not paying attention.)"],
      pleadText1: [">{#p/human}* (You tell Undyne you didn't want to fight.)\n* (Nothing happens.)"],
      pleadText2: [
         '>{#p/human}* (You tell Undyne you just want to be friends.)',
         '>{#p/basic}* Undyne remembers someone.\n* The bullets get a little less extreme.'
      ],
      pleadText3: [">{#p/human}* (You tell Undyne you just want to be friends.)\n* (She doesn't believe you.)"],
      pleadText4: [">{#p/human}* (You tell Undyne you didn't want to fight.)\n* (She laughs.)"],
      pleadText5: [">{#p/human}* (You tell Undyne you didn't want to fight.)\n* (She looks confused.)"],
      pleadText6: [">{#p/human}* (You tell Undyne you didn't want to fight.)\n* (She's not paying attention.)"],
      pleadText7a: [
         '>{#p/human}* (You tell Undyne you just want to be friends.)',
         '>{#p/basic}* Undyne agrees.\n* The bullets get a little more extreme.'
      ],
      pleadText7b: [
         '>{#p/human}* (You tell Undyne you just want to be friends.)',
         ">{#p/basic}* Undyne agrees.\n* But the bullets can't get any faster."
      ],
      pleadText7c: [
         '>{#p/human}* (You tell Undyne you just want to be friends.)',
         '>{#p/basic}* Undyne agrees.\n* The bullets are getting out of control.'
      ],
      pleadText8: [">{#p/human}* (You tell Undyne you didn't want to fight.)\n* She glares at you coldly."],
      genoCutscene1: ['>{#p/kidding}{#e/kidd/0}...', '>{#e/kidd/1}H... huh?', '>{|}{#e/kidd/1}What is- {%}'],
      genoCutscene2: ['>{#p/kidding}{#e/kidd/3}UNDYNE!!!', '>{#e/kidd/4}I...!'],
      genoCutscene3: ['>{#p/undyne}{#e/undyne/1}Kid...?'],
      genoCutscene3x: [
         '>{#p/undyne}{#e/undyne/4}Hey, shh...',
         ">{#e/kidd/7}I'll be fine, kiddo.",
         '>{#p/undyne}Just get outta here, okay?'
      ],
      genoCutscene4: [
         ">{#p/kidding}{#e/kidd/5}I couldn't stop it...",
         '>{#e/kidd/6}They... he...',
         '>{#e/kidd/7}He did some- thing to me...'
      ],
      genoCutscene5: ['>{#p/undyne}{#e/undyne/2}Your eye...'],
      genoCutscene6: ['>{#p/kidding}{#e/kidd/6}I...', '>{#p/kidding}{#e/kidd/6}I...'],
      genoCutscene7: ['>{#p/kidding}{#e/kidd/7}I hurt you...'],
      genoCutscene8: [">{#p/undyne}{#e/undyne/3}It's nothing..."],
      genoCutscene9: [
         ">{#e/undyne/4}Look, I'll take care of these punks.",
         ">You'll never have to kill anyone for them again.",
         '>Just get outta here, okay?'
      ],
      genoCutscene10: ['>{#e/kidd/8}{#p/kidding}...'],
      genoCutscene11: ['>{#p/undyne}{#e/undyne/5}Dr. Alphys will look after you.', '>{#e/undyne/6}Now go!'],
      genoCutscene12a: [
         '>{#p/undyne}{#e/undyne/7}... heh...\n"It\'s nothing..."',
         '>No... s-somehow, with just one hit...'
      ],
      genoCutscene12b: [">I'm already...", '>Already...'],
      genoCutscene12c: ['>D...\nDamn it...', '>Papyrus...\nAsgore...\nAlphys...'],
      genoCutscene12d: ['>Just like that, I...', ">{#e/undyne/8}I've failed you."],
      genoCutscene12e: ['>I...', "{#e/undyne/8}I can't..."],
      genoCutscene13: ['>{#p/undyne}...', '>{#e/undyne/12}No...'],
      genoCutscene14: [
         ">{*}{#p/undyne}{#e/undyne/11}My body...\nIt feels like it's splitting apart.{^15}{%15}",
         ">{*}Like any instant, I'll scatter into a million pieces.{^15}{%15}",
         '>{*}But deep, deep in my SOUL...{^15}{%15}',
         ">{*}There's a burning feeling I can't describe.{^15}{%15}",
         ">{*}{#e/undyne/12}A feeling that WON'T let me die.{^15}{%15}",
         ">{*}{#e/undyne/11}You've killed too many of our people... too many of my friends...{^15}{%15}",
         ">{*}If you two get past me, you'll destroy them all.{^15}{%15}",
         ">{*}Everyone's hopes.\nEveryone's dreams.\nVanquished in an instant.{^15}{%15}",
         ">{*}{#e/undyne/12}But I WON'T let you do that.{^15}{%15}",
         '>{*}{#e/undyne/13}Right now, everyone in the galaxy...{^15}{%15}',
         '>{*}I can feel their minds working as one.{^15}{%15}',
         '>{*}And we all have ONE goal.{^15}{%15}',
         '>{*}{#e/undyne/14}To defeat YOU.{^15}{%15}',
         '>{*}{#e/undyne/13}Human.\nAsriel.\n... no, WHATEVER you two are.{^15}{%15}',
         '>{*}{#e/undyne/14}For the sake of the entire galaxy...{^15}{%15}',
         '>{*}{#e/undyne/15}{@random=1.1/1.1}I, Undyne, will strike you down!{^15}{%15}'
      ],
      genoCutscene14x: [
         '>{#e/undyne/11}No...',
         '>{#e/undyne/12}Not like this...!',
         '>{#e/undyne/13}Everyone in the galaxy is counting on me!',
         ">{#e/undyne/14}I WON'T let them down!"
      ],
      genoCutscene15: [">{*}{#p/undyne}{#v/1}You're gonna have to try a little harder than THAT.{%20}"],
      genoCutscene15x: [">{#p/undyne}{#v/1}You're gonna have to try a little harder than that!{%20}"],
      genoDeath1: [
         '>{#p/undyne}{#v/1}Damn it...',
         ">So even THAT power...\nIt wasn't enough...?",
         '>...',
         '>{#e/undyne/25}Heh...',
         '>Heheheh...'
      ],
      genoDeath2: [
         '>{*}{#e/undyne/26}If you...{^60}{%}',
         ">{*}If you think I'm gonna give up hope, you're wrong.{^60}{%}",
         ">{*}{#e/undyne/27}'Cause I've... got my friends behind me.{^60}{%}",
         '>{*}{#e/undyne/28}Alphys told me she had a backup plan in case I failed...{^60}{%}',
         ">{*}{#e/undyne/29}By now, she's called Asgore and told him to absorb the six human SOULs.{^60}{%}"
      ],
      genoDeath3: ['>{*}{#p/undyne}{#v/1}{#e/undyne/30}{@random=1.1/1.1}And with that power...{^60}{%}'],
      genoDeath4: ['>{*}{#p/undyne}{#v/1}{#e/undyne/30}{@random=1.1/1.1}This world will live on...!{^60}{%}'],
      lowStatus1: ['>{#p/story}* The starlight is glimmering...'],
      lowStatus2: ['>{#p/story}* Undyne flips her spear impatiently.'],
      lowStatus3: ['>{#p/story}* Twinkling shards drift in front of you.'],
      lowStatus4: ['>{#p/story}* Steam whirls around you.'],
      lowStatus5: ['>{#p/story}* The spears pause for a moment.'],
      genoStatus1: ['>{#p/asriel2}* How did she...'],
      genoStatus2: ['>{#p/asriel2}* No...'],
      genoStatus3: ['>{#p/asriel2}* Even in my timelines, she never...'],
      genoStatus4: [">{#p/asriel2}* $(name), I don't think you can beat her alone."],
      genoStatus5: ['>{#p/asriel2}* ...'],
      trueGenoStatusX: () =>
         battler.volatile[0].vars.azzyAssist < 2
            ? [">{#p/asriel2}* Let's see how she likes THIS."]
            : ['>{#p/asriel2}* Remember our strategy.'],
      trueGenoStatus1: ['>{#p/asriel2}* Stay focused.'],
      trueGenoStatus2: [">{#p/asriel2}* Don't let her get to you."],
      trueGenoStatus3: ['>{#p/asriel2}* Just keep attacking...'],
      trueGenoStatus4: [">{#p/asriel2}* She can't hold on forever."],
      trueGenoStatus5: ['>{#p/asriel2}* Our victory is inevitable.'],
      trueGenoStatusLow1: ['>{#p/asriel2}* Almost dead...!'],
      trueGenoStatusLow2: ['>{#p/asriel2}* Come on...!'],
      asrielExplain: () => [
         ...(battler.volatile[0].vars.azzyAssist < 2
            ? [">{#p/asriel2}{#f/4}Your attacks aren't going to work, $(name)."]
            : [
               ">{#p/asriel2}{#f/8}You DO remember what was going on last time, don't you?",
               ">{#f/4}Your attacks weren't going to do anything to her, $(name).",
               '>{#f/3}Between then and now, though, I had a chance to think.'
            ]),
         ">{#f/13}This body... it still hasn't fully accepted me yet.",
         '>{#f/16}Still, it might just be enough to help you.',
         ">{#f/3}When you make an attack, I'll cast a spell to identify Undyne's weak points.",
         ">{#f/4}It's up to you to point your attacks towards them.",
         '>{#f/3}Good luck...'
      ],
      neutralFinalStatus: ['>{#p/story}* Undyne looks determined.']
   },
   b_opponent_dateundyne: {
      name: '* Undyne',
      snacker: () =>
         SAVE.data.b.undyne_respecc
            ? ['>{#p/undyne}{#e/undyne/13}Hope you like it, fuhuhu!']
            : ['>{#p/undyne}{#e/undyne/12}Enjoy it while you still can.'],
      intro: () =>
         SAVE.data.b.undyne_respecc
            ? [
               '>{#p/undyne}{#f/0}... so this is it.',
               '>Our final battle.',
               '>...',
               '>{#e/undyne/12}Warrior to warrior.',
               '>Across the sky of stars.',
               '>I challenge you to a duel...',
               '>{#e/undyne/9}For the honor of EVERYONE ON THE OUTPOST!!',
               ">{#e/undyne/7}IT'S THE ONLY WAY I CAN SETTLE THE SCORE BETWEEN US!!",
               ">{#e/undyne/9}SO COME ON, HIT ME WITH EVERYTHING YOU'VE GOT!!!\nNGAHHHH!!!"
            ]
            : [
               ">{#p/undyne}{#f/0}I've been defeated, my house is in ruins...",
               '>I even failed to befriend you.',
               '>...',
               ">{#e/undyne/12}That's it.",
               ">I don't care if you're my house- guest anymore.",
               '>{#e/undyne/9}One final rematch, all out on both sides!!',
               ">{#e/undyne/7}IT'S THE ONLY WAY I CAN REGAIN MY LOST PRIDE!!",
               ">{#e/undyne/9}NOW COME ON, HIT ME WITH EVERYTHING YOU'VE GOT!!!\nNGAHHHH!!!"
            ],
      status1: ['>{#p/story}* Undyne is letting you make the first attack.'],
      act_check: ['>{#p/story}* UNDYNE - ATK 41 DEF 21\n* The real, ACTUAL final battle has finally begun!'],
      idleTalk1: [">{#p/undyne}{#e/undyne/9}Show me what you're made of!"],
      idleTalk2: ['>{#p/undyne}{#e/undyne/9}Come on!'],
      idleTalk3: [">{#p/undyne}{#e/undyne/9}What's the matter, scared?"],
      idleTalk4: [">{#p/undyne}{#e/undyne/9}What's the holdup?"],
      fightTalk: (stronk: boolean) =>
         SAVE.data.b.undyne_respecc
            ? [
               '>{#p/undyne}{#e/undyne/19}Ouch.',
               '>{#e/undyne/19}That actually kind of hurt.',
               '>{#e/undyne/4}Heh...',
               ">{#e/undyne/3}I guess that's what I get for under- estimating my opponent.",
               ">{#e/undyne/0}Though, I'm not sure why I'm so surprised.",
               '>{#e/undyne/1}Given your battle style to date.'
            ]
            : [
               '>{#p/undyne}{#e/undyne/16}What.',
               ">{#e/undyne/15}That's the best you can manage...?",
               ...(SAVE.data.b.oops
                  ? [
                     '>{#e/undyne/3}Even attacking at full force...',
                     stronk
                        ? ">{#e/undyne/33}You can't give me more than a scratch, huh?"
                        : ">{#e/undyne/33}You just can't muster any intent to hurt me, huh?"
                  ]
                  : [">{#e/undyne/17}You didn't even land the hit on me!", '>{#e/undyne/17}...'])
            ],
      flirtTalk0: [
         '>{#p/undyne}{#e/undyne/12}When I told you to hit me...',
         '>{#e/undyne/9}I MEANT IT LITERALLY!'
      ],
      flirtTalk1: [
         '>{#p/undyne}{#e/undyne/6}Wh-... no!',
         ">{#e/undyne/8}If anyone's got someone's heart, it's...",
         '>{#e/undyne/5}Wait, no-\nShut up!!!'
      ],
      flirtTalk2: [
         '>{#p/undyne}{#e/undyne/10}Would you STOP THAT!?',
         ">{#e/undyne/15}If you keep going like this, I'll...",
         ">{#e/undyne/16}I'll..."
      ],
      flirtTalk3: [
         '>{#p/undyne}{#p/undyne}{#e/undyne/18}Wha-...\nI...!',
         '>{#e/undyne/19}...',
         '>{#e/undyne/10}AHHHHHHHHHHHHHH-\nYOU FLIRTATIOUS LITTLE BRAT!',
         '>{#e/undyne/8}I HAVE HALF THE NERVE TO...',
         '>{#e/undyne/7}TO...',
         '>{#e/undyne/7}...'
      ],
      flirtStatus0: ['>{#p/story}* In this case, FIGHTING might not be such a bad idea.'],
      flirtStatus1: ['>{#p/story}* Something magical is happening.'],
      flirtStatus2: ['>{#p/story}* Undyne is at her limit.'],
      flirtText0: ['>{#p/human}* (You flirt with Undyne.)'],
      flirtText1: [">{#p/human}* (You tell Undyne she's got your heart hook, line, and sinker.)"],
      flirtText2: [">{#p/human}* (You commend Undyne on her brave, fighting spirit.)\n* (She's YOUR hero, now.)"],
      flirtText3: [">{#p/human}* (You tell Undyne she's a precious, adorable little urchin.)"],
      cutscene1: ['>{#p/undyne}{#e/undyne/4}Heh... you know what?'],
      cutscene2: (fought: boolean) => [
         ...(SAVE.data.b.undyne_respecc
            ? [
               ">{#e/undyne/11}I don't really want to hurt you.",
               '>{#e/undyne/11}At first, I was excited by the prospect of fighting you...'
            ]
            : [
               ">{#e/undyne/11}I don't actually want to hurt you either.",
               '>{#e/undyne/11}At first, I despised your stupid saccharine schtick, but...'
            ]),
         ...(fought
            ? SAVE.data.b.undyne_respecc
               ? ['>{#e/undyne/3}But seeing you go along with me right now, it...']
               : SAVE.data.b.oops
                  ? ['>{#e/undyne/3}The way you hit me right now, it...']
                  : ['>{#e/undyne/3}The way you missed your attack right now, it...']
            : SAVE.data.b.undyne_respecc
               ? ['>{#e/undyne/3}But seeing you act that way towards me right now, it...']
               : ['>{#e/undyne/3}The way you acted towards me right now, it...']),
         '>{#e/undyne/4}Reminded me of someone I used to train with.',
         ...(SAVE.data.b.undyne_respecc
            ? [
               '>{#e/undyne/11}... you may not be a wimpy loser like him.',
               '>{#e/undyne/11}But one thing you do have in common...',
               '>{#e/undyne/1}Is a sense of respect for what it means to fight.'
            ]
            : [
               ">{#e/undyne/11}Now I know you aren't just some wimpy loser.",
               ">{#e/undyne/13}You're a wimpy loser with a big heart!",
               '>{#e/undyne/4}Just like him...'
            ]),
         '>{#e/undyne/3}...',
         '>{#e/undyne/3}Listen, human.',
         '>{#f/undyne/0}It seems that you and Asgore are destined to meet.',
         SAVE.data.b.undyne_respecc ? '>{#e/undyne/3}Unlike you...' : '>{#e/undyne/3}Knowing him...',
         ">{#e/undyne/4}He probably doesn't want to fight you.",
         ...(SAVE.data.b.undyne_respecc
            ? [
               '>{#e/undyne/0}Talk to him, if you can.',
               '>{#e/undyne/0}Tell him what you want upfront.',
               '>{#e/undyne/3}I get that might be a little weird for you, but...',
               ">{#e/undyne/4}I'm sure you two can work something out.",
               '>{#e/undyne/0}And as for our freedom?',
               '>{#e/undyne/1}Well.',
               '>{#e/undyne/3}If some other, less respectable human ends up here...',
               ">{#e/undyne/3}I'll take THEIR soul instead of yours."
            ]
            : [
               '>{#f/undyne/0}Talk to him.',
               ">{#f/undyne/1}I'm sure you two can work something out.",
               '>{#e/undyne/3}Eventually, some meaner human will end up here...',
               ">{#e/undyne/3}And I'll take THEIR soul instead of yours."
            ]),
         '>{#f/undyne/1}That makes sense, right?\nFuhuhu.',
         '>{#f/undyne/0}Oh, and if you DO hurt Asgore...',
         ">{#e/undyne/11}I'll take the human SOULs... cross the force field...",
         ...(SAVE.data.b.undyne_respecc
            ? ['>{#e/undyne/8}And give you a REAL battle!', ">{#e/undyne/13}That's what warriors do, right?"]
            : [
               '>{#e/undyne/8}And beat the hell out of you!',
               ">{#e/undyne/13}That's what friends are for, right?"
            ]),
         '>{#e/undyne/13}Fuhuhu!',
         ">{#e/undyne/13}Now let's get the hell out of this flaming house!"
      ]
   },

   i_artifact: {
      battle: {
         description: 'It is said this pendant was worn by Erogot himself.',
         name: 'Artifact'
      },
      drop: () => [
         '>{#p/human}* (You threw away the Legendary Artifact.)',
         ...(!SAVE.data.b.svr && game.room === 's_secret' && SAVE.data.n.state_starton_trashprogress < 2 // NO-TRANSLATE
            ? SAVE.data.b.s_state_papsink
               ? ['>{#p/basic}* The dog dances even harder!']
               : [">{#p/basic}* ... the dog's sighing quiets down, even if you can't tell."]
            : [])
      ],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? ['>{#p/human}* (Inscribed with the signature of a former world leader.)']
            : ['>{#p/basic}* It is said this pendant was worn by Erogot himself.'],
      name: 'Legendary Artifact',
      use: () => [
         '>{#p/human}* (You use the Legendary Artifact.)',
         ...((battler.active && battler.targetCurrent?.opponent.metadata.reactArtifact) ||
            (game.room === 'f_truth' && // NO-TRANSLATE
               SAVE.data.n.epiphany < 1 &&
               !SAVE.data.b.svr &&
               !world.runaway)
            ? []
            : !SAVE.data.b.svr && game.room === 's_secret' && SAVE.data.n.state_starton_trashprogress < 2 // NO-TRANSLATE
               ? SAVE.data.b.s_state_papsink
                  ? [">{#p/basic}* ... the dog's dancing slows down, even if you can't tell."]
                  : ['>{#p/basic}* The dog sighs even louder!']
               : ['>{#p/human}* (Nothing happens.)'])
      ]
   },
   i_epiphany: {
      battle: {
         description: 'Makes the weak-willed see things from your point of view.',
         name: 'Epiphany'
      },
      drop: ['>{#p/human}* (You cast The Epiphany away.)'],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? ['>{#p/human}* (A tome from centuries past, used first by a former world leader.)']
            : [
               '>{#p/basic}* Makes the weak-willed see things from your point of view.\n* Not viable outside of battle.'
            ],
      name: 'The Epiphany',
      use: () =>
         battler.active
            ? []
            : SAVE.data.b.ufokinwotm8
               ? [
                  '>{#p/human}* (You activated The Epiphany on yourself, with the intent to hug.)',
                  '>{#p/human}* (No effect.)'
               ]
               : SAVE.data.b.svr
                  ? [
                     '>{#p/human}* (You read through the ancient text of the tome.)',
                     '>* (The text appears to be self- translating.)'
                  ]
                  : ['>{#p/human}* (You activated The Epiphany.)', '>{#p/human}* (No effect outside of battle.)']
   },
   i_astrofood: {
      battle: {
         description: 'Not for the faint of teeth.',
         name: 'Licorice'
      },
      drop: ['>{#p/human}* (You throw away the Licorice.)'],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? ['>{#p/human}* (24 HP.)']
            : ['>{#p/basic}* "Licorice" Heals 24 HP\n* Not for the faint of teeth.'],
      name: 'Licorice',
      use: ['>{#p/human}* (You gnawed at the Licorice.)']
   },
   i_sap: {
      battle: {
         description: "Sourced from a tree that grew on the monsters' homeworld.",
         name: 'Sap'
      },
      drop: ['>{#p/human}* (You throw away the Tree Sap.)'],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? ['>{#p/human}* (35 HP.)']
            : ['>{#p/basic}* "Tree Sap" Heals 35 HP\n* Sourced from a tree that grew on the monsters\' homeworld.'],
      name: 'Tree Sap',
      use: ['>{#p/human}* (You chewed the Tree Sap.)']
   },
   i_goggles: {
      battle: {
         description: 'Expand your reality!\nMakes you invincible longer.',
         name: 'Headset'
      },
      drop: ['>{#p/human}* (You throw away the AR Headset.)'],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? ['>{#p/human}* (6 DF.)']
            : ['>{#p/basic}* "AR Headset" (6 DF)\n* Expand your reality! Makes you invincible longer.'],
      name: 'AR Headset',
      use: ['>{#p/human}* (You wear the AR Headset.)']
   },
   i_goggles_x: {
      battle: {
         description: 'Makes you invincible just a little longer.',
         name: 'Headset?'
      },
      drop: ['>{#p/human}* (You throw away the AR Headset.)'],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? ['>{#p/human}* (4 DF.)']
            : ['>{#p/basic}* "AR Headset?" (4 DF)\n* Expand your reality! Makes you invincible a little longer.'],
      name: 'AR Headset?',
      use: ['>{#p/human}* (You wear the AR Headset.)']
   },
   i_padd: {
      battle: {
         description: 'A digital journal.\nMakes you invincible longer.',
         name: 'Datapad'
      },
      drop: ['>{#p/human}* (You throw away the Datapad.)'],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? ['>{#p/human}* (2 AT.)']
            : ['>{#p/basic}* "Datapad" (2 AT)\n* A digital journal.\n* Makes you invincible longer.'],
      name: 'Datapad',
      use: ['>{#p/human}* (You equip the Datapad.)']
   },
   i_padd_x: {
      battle: {
         description: 'Makes you invincible just a little longer.',
         name: 'Datapad?'
      },
      drop: ['>{#p/human}* (You throw away the Datapad.)'],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? ['>{#p/human}* (0 AT.)']
            : ['>{#p/basic}* "Datapad?" (0 AT)\n* Makes you invincible just a little longer.'],
      name: 'Datapad?',
      use: ['>{#p/human}* (You equip the Datapad.)']
   },
   i_punchcard: {
      battle: {
         description: 'A picturesque landscape...',
         name: 'Postcard'
      },
      drop: ['>{#p/human}* (You throw away the Postcard.)'],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? ['>{#p/human}* (A perfectly ordinary piece of paper, with no notable attributes.)']
            : ['>{#p/basic}* A picturesque landscape...'],
      name: 'Postcard',
      use: () =>
         world.meanie
            ? [
               '>{#p/human}* (You rip up the Postcard.)',
               battler.active
                  ? `>{#p/story}* ATTACK up by ${2 + battler.at_bonus}!`
                  : '>{#p/human}* (No effect outside of battle.)'
            ]
            : battler.active
               ? ['>{#p/human}* (You daydream about the landscape on the Postcard.)\n* (Nothing happens.)']
               : []
   },
   i_quiche: {
      battle: {
         description: 'With great confections come great sweetsponsibilities.',
         name: 'Cheesecake'
      },
      drop: () => [
         '>{#p/human}* (You threw away the Cheesecake.)',
         ...(SAVE.data.b.svr || world.darker || SAVE.data.b.ufokinwotm8
            ? []
            : ['>{#p/basic}* And the cycle of abandonment continues.']),
         ...(!battler.active &&
            (fetchCharacters()
               .find(c => c.key === 'sans') // NO-TRANSLATE
               ?.position.extentOf(player) ?? 200) < 200
            ? [
               ">{#p/sans}{#f/3}* ... oh.\n* that's a shame.",
               ">{#p/sans}{#f/2}* i'd hoped someone would take care of that for me."
            ]
            : [])
      ],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? ['>{#p/human}* (45 HP.)']
            : ['>{#p/basic}* "Cheesecake" Heals 45 HP\n* With great confections come great sweetsponsibilities.'],
      name: 'Cheesecake',
      use: () => [
         '>{#p/human}* (You eat the Cheesecake.)',
         ...(!battler.active &&
            (fetchCharacters()
               .find(c => c.key === 'sans') // NO-TRANSLATE
               ?.position.extentOf(player) ?? 200) < 200
            ? [
               '>{#p/sans}{#f/0}* ... oh.\n* you actually ate it?',
               '>{#p/sans}{#f/2}* i had no idea anyone liked my baking skills.'
            ]
            : [])
      ]
   },
   i_crisp: {
      battle: {
         description: 'A bag of chisps from far beyond the stars.',
         name: 'Chisps'
      },
      drop: ['>{#p/human}* (You throw away the Cosmic Chisps.)'],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? ['>{#p/human}* (18 HP.)']
            : ['>{#p/basic}* "Cosmic Chisps" Heals 18 HP\n* A bag of chisps from far beyond the stars.'],
      name: 'Cosmic Chisps',
      use: ['>{#p/human}* (You eat the Cosmic Chisps.)']
   },
   i_rations: {
      battle: {
         description: 'Standard-issue rations.\nGreat for emergencies.',
         name: 'Rations'
      },
      drop: ['>{#p/human}* (You throw away the Rations.)'],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? ['>{#p/human}* (30 HP.)']
            : ['>{#p/basic}* "Rations" Heals 30 HP\n* Standard-issue rations.\n* Great for emergencies.'],
      name: 'Rations',
      use: ['>{#p/human}* (You consume the Rations.)']
   },
   i_tea: {
      battle: {
         description: 'Increases your SPEED in battle.',
         name: 'Tea'
      },
      drop: ['>{#p/human}* (You throw away the Nebula Tea.)'],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? ['>{#p/human}* (15 HP.)']
            : [
               '>{#p/basic}* "Nebula Tea" Heals 15 HP\n* Increases your SPEED in battle.\n* Not viable outside of battle.'
            ],
      name: 'Nebula Tea',
      use: () => [
         '>{#p/human}* (You drank the Nebula Tea.)',
         battler.active ? '>{#p/story}* SPEED up by 1!' : '>{#p/human}* (No effect outside of battle.)'
      ]
   },
   i_tzn: {
      battle: {
         description: 'Like Earth tofu, but spacier.',
         name: 'Tofu'
      },
      drop: ['>{#p/human}* (You throw away the Space Tofu.)'],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? ['>{#p/human}* (17 HP.)']
            : ['>{#p/basic}* "Space Tofu" Heals 17 HP\n* Like Earth tofu, but spacier.'],
      name: 'Space Tofu',
      use: () => [
         '>{#p/human}* (You ingest the Space Tofu.)',
         ...(world.meanie
            ? [
               '>* (The taste fills you with a certain kind of feeling...)',
               battler.active
                  ? `>{#p/story}* ATTACK up by ${4 + battler.at_bonus}!`
                  : '>{#p/human}* (No effect outside of battle.)'
            ]
            : [])
      ]
   },
   i_flakes: {
      battle: {
         description: 'Finally, a proper breakfast.',
         name: 'Tem Flakes'
      },
      drop: ['>{#p/human}* (You discard the Temmie Flakes.)'],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? ['>{#p/human}* (2 HP.)']
            : ['>{#p/basic}* "Temmie Flakes" Heals 2 HP\n* Finally, a proper breakfast.'],
      name: 'Temmie Flakes',
      use: ['>{#p/human}* (You eat the Temmie Flakes.)']
   },
   i_temyarmor: {
      battle: {
         description: 'The things you can do with a college education!',
         name: 'Tem Armor'
      },
      drop: ['>{#p/human}* (You throw away the Temmie Armor.)'],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? ['>{#p/human}* (10 AT, 20 DF.)']
            : [
               '>{#p/basic}* "Temmie Armor" (10 AT, 20 DF)\n* The things you can do with a college education!',
               '>* Makes you invincible a lot longer...',
               '>* Restores a lot of lost HP after each turn...',
               ">* Your opposition's attacks have a fair chance to heal you...",
               '>* Significantly increases aim time in battle...',
               '>* It does everything any other item can do, but better.'
            ],
      name: 'Temmie Armor',
      use: ['>{#p/human}* (You don the Temmie Armor.)']
   },
   i_boots: {
      battle: {
         description: 'Nimble, but fickle. Not a suitable jetpack replacement.',
         name: 'Boots'
      },
      drop: ['>{#p/human}* (You throw away the Hoverboots.)'],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? ['>{#p/human}* (7 AT.)']
            : ['>{#p/basic}* "Hoverboots" (7 AT)\n* Nimble, but fickle. Not a suitable jetpack replacement.'],
      name: 'Hoverboots',
      use: ['>{#p/human}* (You equip the Hoverboots.)']
   },
   i_flight_suit: {
      battle: {
         description: 'Not for the faint of heart.',
         name: 'Flight Suit'
      },
      drop: ['>{#p/human}* (You throw away the Flight Suit.)'],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? ['>{#p/human}* (10 DF.)']
            : ['>{#p/basic}* "Flight Suit" (10 DF)\n* Not for the faint of heart.'],
      name: 'Flight Suit',
      use: ['>{#p/human}* (You wear the Flight Suit.)']
   },
   i_snack: {
      battle: {
         description: "Undyne's personal recipe...?",
         name: 'Odd Snack'
      },
      drop: () => [
         '>{#p/human}* (You throw away the Odd Snack.)',
         ...(game.room === 'f_kitchen' // NO-TRANSLATE
            ? ((SAVE.data.b.drop_snack = true),
               ['>{#p/undyne}{#f/8}* Fuhuhuhu!\n* Throw that snack on the cold, hard floor!'])
            : [])
      ],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? ['>{#p/human}* (15 HP.)']
            : ['>{#p/basic}* "Odd Snack" Heals 15 HP\n* Undyne\'s personal recipe...?'],
      name: 'Odd Snack',
      use: () => [
         '>{#p/human}* (You eat the Odd Snack.)',
         ...(game.room === 'f_kitchen' // NO-TRANSLATE
            ? [
               SAVE.data.b.undyne_respecc
                  ? '>{#p/undyne}{#f/1}* Hope you like it!'
                  : '>{#p/undyne}{#f/14}* Hope you like it!'
            ]
            : SAVE.data.b.svr || world.darker || SAVE.data.b.ufokinwotm8
               ? []
               : ['>{#p/basic}* Crispy.'])
      ]
   },

   n_shop_tem: {
      exit: ['>{#p/tem}{#k/0}* bOI!!'],
      item: (armorprice: number) =>
         SAVE.data.n.plot === 72
            ? [
               '0G - free flake!!',
               '0G - free flake!!',
               '0G - free flake!!',
               SAVE.data.b.item_temyarmor || temgone()
                  ? '§fill=#808080§--- UNAVAILABLE ---'
                  : SAVE.data.b.colleg
                     ? `${armorprice}G - temy ARMOR!!!`
                     : '1000G - tem pay 4 colleg',
               'Exit'
            ]
            : [
               '4G - tem flake',
               '2G - tem flake (ON SALE,)',
               '20G - tem flake (expensiv)',
               SAVE.data.b.item_temyarmor
                  ? '§fill=#808080§--- UNAVAILABLE ---'
                  : SAVE.data.b.colleg
                     ? `${armorprice}G - temy ARMOR!!!`
                     : '1000G - tem pay 4 colleg',
               'Exit'
            ],
      itemInfo: () =>
         SAVE.data.n.plot === 72
            ? [
               'Heals 2HP\nfree food\nof tem!!',
               'Heals 2HP\nfree food\nof tem!!',
               'Heals 2HP\nfree food\nof tem!!',
               SAVE.data.b.colleg ? 'Armor: 20DF\nmake\nbattles\nver easy!!!' : 'COLLEG\ntem pursu\nhigher\neducation'
            ]
            : [
               'Heals 2HP\nfood of\ntem',
               'Heals 2HP\nDISCOUNT\nFOOD OF\nTEM!!!',
               'Heals 2HP\nfood of\ntem\n(expensiv)',
               SAVE.data.b.colleg ? 'Armor: 20DF\nmake\nbattles\nver easy!!!' : 'COLLEG\ntem pursu\nhigher\neducation'
            ],
      itemPrompt: '>{#p/tem}{#k/0}hOI!\nwelcome to...\nTEM SHOP!',
      itemPurchase: [
         '>{#p/tem}{#k/6}thanks PURCHASE!',
         '>{#p/tem}{#k/0}fdshfg',
         '>{#p/tem}{#k/2}you don hav da muns,',
         ">{#p/human}(You're carrying too much.)"
      ],
      itemPurchasePrompt: (free: boolean) => (free || temgone() ? 'Take it?' : 'Buy it for\n$(x)G?'),
      itemSellPrompt: 'Sell it for\n$(x)G?',
      itemUnavailable: () => (temgone() ? '>{#p/basic}Nothing left.' : '>{#p/tem}{#k/2}no more item...'),
      itemRestricted: '>{#p/tem}{#k/2}not for sale...',
      menu: () =>
         temgone() ? ['Take', 'Steal', 'Read', 'Exit'] : ['Buy', world.meanie ? 'Steal' : 'Sell', 'Talk', 'Exit'],
      menuPrompt1: '>{#p/tem}{#k/0}* hOI!\n* welcom to...\n* da TEM SHOP!!!',
      menuPrompt2: '>{#p/basic}* ... but everybody ran.',
      sell1: ['>{#p/tem}{#k/2}* NUUU!!!\n* my muns,,,', '>{#p/tem}{#k/4}* cannot STEAL!!!'],
      sell2: ['>{#p/tem}{#k/3}* No.'],
      steal1: ['>{#p/human}* (You took 32767G from behind the counter.)'],
      steal2: ['>{#p/basic}* Nothing left.'],
      note: ['>{#p/human}* (But there was no note to be found here.)'],
      talk: () => [
         SAVE.data.n.plot === 72 ? 'Good News' : 'Say Hello',
         SAVE.data.n.plot === 72 ? 'Your Future' : SAVE.data.b.colleg ? 'About Temmie Armor' : 'About Yourself',
         SAVE.data.n.plot === 72 ? 'Temmie Secrets' : 'Temmie History',
         'About Shop',
         'Exit'
      ],
      talkPrompt: '>{#p/tem}{#k/0}HOI!!!\nim temmie',
      talkText: [
         () =>
            SAVE.data.n.plot === 72
               ? ['>{#p/tem}{#k/0}* yAYA!', '>{#p/tem}{#k/0}* tem go to NEW WORLDS!!!']
               : ['>{#p/tem}{#k/0}* hOI!!!', ">* i'm temmie"],
         () =>
            SAVE.data.n.plot === 72
               ? ['>{#p/tem}{#k/0}* yAYA!', '>{#p/tem}{#k/0}* tem go to NEW WORLDS!!!']
               : SAVE.data.b.colleg
                  ? [
                     '>{#k/1}* tem armor so GOOds!\n* any battle becom!\n* a EASY victories!!!',
                     '>{#k/4}* but, hnnn, tem think...\n* if u use armors, battles woudn b a challenge anymores,',
                     '>{#k/3}* but tem...\n* have a solushun.',
                     '>{#k/6}* tem wil offer...\n* a {@fill=#ff0}SKOLARSHIPS{@fill=#fff}!',
                     '>{#k/3}* if u {@fill=#ff0}lose a lot of battles,{@fill=#fff} tem wil {@fill=#ff0}LOWER THE PRICE{@fill=#fff}!',
                     ...(armorprice() <= 1000
                        ? [
                           '>{#k/1}* in fack...\n* PRICE MAY ALREADY BE LOWERS!!!\n* WOA!!!!',
                           '>{#k/6}* Congra-tem-lations!!!'
                        ]
                        : [
                           '>{#k/3}* so if you get to TOUGH BATLE and feel FRUSTRATE, can buy TEM armor as last resort!',
                           '>{#k/5}* but tem armor so goods,\n* promise to only buy if you really needs it,'
                        ])
                  ]
                  : ['>{#p/tem}{#k/0}* hOI!!!', ">* i'm temmie"],
         () =>
            SAVE.data.n.plot === 72
               ? [
                  '>{#p/tem}{#k/0}* at back of famus statue, can find SPECIL SWITCH,',
                  '>{#p/tem}{#k/0}* and SWITCHs...\n* come wif RIDDLES!',
                  SAVE.data.b.colleg
                     ? '>{#p/tem}{#k/2}* even after colleg, tem don know what it means,,,'
                     : '>{#p/tem}{#k/0}* tem don know what it means,,,',
                  '>{#p/tem}{#k/1}* but mayb humans can solve!!\n* yAYA!!'
               ]
               : SAVE.data.b.colleg
                  ? [
                     ">{#p/tem}{#k/0}* yaYA!!!\n* tem got degree in TEM STUDIES!\n* tem can tell you all about tem's DEEP HISTORY!!!"
                  ]
                  : ['>{#p/tem}{#k/0}* us tems hav a DEEP HISTORY!!!'],
         () =>
            SAVE.data.n.plot === 72
               ? ['>{#p/tem}{#k/0}* yaYA!!!\n* wil close TEM SHOP soon!!!']
               : ['>{#p/tem}{#k/0}* yaYA!!!\n* go to TEM SHOP!!!']
      ],
      colleg1: [
         '>{#p/tem}{#k/1}* WOA!!',
         '>{#k/2}* thas ALOT o muns...\n* can tem realy acepts...',
         '>{#k/6}* OKs!!!!\n* tem go to colleg and make u prouds!!!'
      ],
      colleg2: [
         '>{#p/tem}* tem bak from cool leg,',
         '>{#k/0}* tem learn MANY THINs,\n* learn to sell new ITEM!\n* yayA!!!'
      ],
      sellExit: 'Exit',
      sellValue: '$(x)G',
      sellStory1: () => [
         '>{#p/tem}{#k/1}* WOA!!',
         '>{#k/2}* u gota... $(x)s!!!',
         SAVE.data.b.colleg
            ? '>{#k/4}* hnnn....\n* i gota have dat $(x)s...\n* but i gota pay for gradskool,'
            : '>{#k/4}* hnnn....\n* i gota have dat $(x)s...\n* but i gota pay for colleg,',
         '>{#k/5}* hnnnn....!!!\n* tem always wanna $(x)s...!'
      ],
      sellStory2: ['>{#p/tem}{#k/2}* b.. but...', '>{#k/4}* p!!!!!!!!!!!!'],
      sellStory3: () =>
         SAVE.data.b.colleg
            ? [
               ">{#p/tem}{#k/3}* Is this a joke?\n* Are you having a laugh?\n* Ha ha, very funny.\n* I'm the one with a degree."
            ]
            : [">{#p/tem}{#k/3}* You're gonna regret that."],
      zeroPrompt: '>{#p/basic}...'
   },
   n_shop_tortoise: {
      exit: () =>
         world.runaway
            ? []
            : world.genocide || world.killed0 || SAVE.data.s.state_foundry_deathroom === 'f_hub' // NO-TRANSLATE
               ? ['>{#p/basic}{#k/1}* Good riddance.']
               : ['>{#p/basic}{#k/0}* Be careful out there, kid!'],
      item: () =>
         world.runaway
            ? ['0G - Datapad?', '0G - AR Headset?', '0G - Nebula Tea', '0G - Tree Sap', 'Exit']
            : world.genocide || world.killed0 || SAVE.data.s.state_foundry_deathroom === 'f_hub' // NO-TRANSLATE
               ? ['45G - Datapad?', '45G - AR Headset?', '16G - Nebula Tea', '25G - Tree Sap', 'Exit']
               : SAVE.data.n.plot === 72
                  ? [
                     SAVE.data.b.item_padd ? '25G - Datapad?' : '35G - Datapad',
                     SAVE.data.b.item_goggles ? '25G - AR Headset?' : '35G - AR Headset',
                     '5G - Nebula Tea',
                     '5G - Tree Sap',
                     'Exit'
                  ]
                  : [
                     SAVE.data.b.item_padd ? '45G - Datapad?' : '55G - Datapad',
                     SAVE.data.b.item_goggles ? '45G - AR Headset?' : '55G - AR Headset',
                     '16G - Nebula Tea',
                     '25G - Tree Sap',
                     'Exit'
                  ],
      itemInfo: () => [
         SAVE.data.b.item_padd || world.genocide || world.killed0 || SAVE.data.s.state_foundry_deathroom === 'f_hub' // NO-TRANSLATE
            ? 'Weapon: 0AT\n($(x) AT)\nJust a bit\ninvincible.'
            : 'Weapon: 2AT\n($(x) AT)\nInvincible\nlonger.',
         SAVE.data.b.item_goggles || world.genocide || world.killed0 || SAVE.data.s.state_foundry_deathroom === 'f_hub' // NO-TRANSLATE
            ? 'Armor: 4DF\n($(x) DF)\nJust a bit\ninvincible.'
            : 'Armor: 6DF\n($(x) DF)\nInvincible\nlonger.',
         'Heals 15HP\nSPEED\nup in\nbattle.',
         'Heals 35HP\nMade from\na real\ntree.'
      ],
      itemPrompt: () =>
         world.genocide || world.killed0
            ? ">{#p/basic}{#k/3}Don't expect a discount."
            : ">{#p/basic}{#k/4}What are you lookin' for?",
      itemPurchase: () =>
         world.genocide || world.killed0
            ? [
               '>{#p/basic}{#k/1}Here we are.',
               '>{#p/basic}{#k/1}...',
               ">{#p/basic}{#k/3}Eh?\nYou can't afford it?",
               ">{#p/human}(You're carrying too much.)"
            ]
            : [
               '>{#p/basic}{#k/0}Thanks!\nWa ha ha.',
               '>{#p/basic}{#k/2}Careful with that.',
               ">{#p/basic}{#k/4}You're a bit short on cash.",
               ">{#p/human}(You're carrying too much.)"
            ],
      itemPurchasePrompt: () => (world.runaway ? 'Take it?' : 'Buy it for\n$(x)G?'),
      menu: () =>
         world.runaway ? ['Take', 'Steal', 'Read', 'Exit'] : ['Buy', world.meanie ? 'Steal' : 'Sell', 'Talk', 'Exit'],
      menuPrompt1: () =>
         SAVE.data.n.plot === 72
            ? '>{#p/basic}{#k/0}* Wa ha ha!\n* I knew you could do it!'
            : ">{#p/basic}{#k/0}* Woah there!\n* I've got some neat junk for sale.",
      menuPrompt2: () =>
         SAVE.data.n.plot === 72 ? '>{#p/basic}{#k/0}* Wa ha ha.' : ">{#p/basic}{#k/0}* Don't be shy now.",
      menuPrompt3: () =>
         world.genocide
            ? ">{#p/basic}{#k/3}* What are you guys up to now?\n* Wait, don't tell me.\n* None of my business, right?"
            : '>{#p/basic}{#k/2}* Wa ha ha...\n* So you came to see me.\n* What a riot!',
      menuPrompt4: '>{#p/basic}* ... but everybody ran.',
      note: ['>{#p/human}* (But there was no note for you to read.)'],
      sell1: () =>
         world.runaway
            ? ['>{#p/human}* (You took 1394G from behind the counter.)']
            : world.genocide
               ? [
                  '>{#p/basic}{#k/4}* Wah ha ha...',
                  '>{#k/3}* You gonna steal my goods the same way you stole your SOULs?',
                  ">{#k/4}* If I were you, I'd appreciate what I already have."
               ]
               : world.meanie
                  ? [
                     ">{#p/basic}{#k/2}* Woah there, kiddo.\n* That stuff ain't free, y'know?",
                     ">{#k/3}* It may look like junk to you, but to me, it's anything but!"
                  ]
                  : [
                     ">{#p/basic}{#k/2}* Ha!\n* I'm tryin' to get RID of my junk, not get more of it!",
                     ">{#k/3}* Though, I've heard if you want to sell stuff, the Temmies are your best bet.",
                     '>{#k/0}* Where can you find them?',
                     '>{#k/4}* ...',
                     ">{#k/0}* I don't remember."
                  ],
      sell2: () =>
         world.runaway
            ? ['>{#p/basic}* Nothing left.']
            : world.genocide || world.meanie
               ? [">{#p/basic}{#k/1}* I wouldn't give up my gilded treasures at phaser-point."]
               : [">{#p/basic}{#k/0}* For the last time, I'm not taking it!"],
      talk: () =>
         SAVE.data.n.plot === 72
            ? [
               'Asgore',
               'New Homeworld',
               'Toriel',
               SAVE.data.b.c_state_secret2 && !SAVE.data.b.c_state_secret2_used
                  ? '§fill=#ff0§Handshake'
                  : 'Am I A Hero',
               'Exit'
            ]
            : world.genocide
               ? ['Asriel', '(Threaten)', '(Fight)', 'Undyne', 'Exit']
               : world.killed0
                  ? ['Your Fate', '(Threaten)', '(Fight)', 'Hero', 'Exit']
                  : [
                     48 <= SAVE.data.n.plot && SAVE.data.n.state_foundry_undyne > 0
                        ? 'About Yourself'
                        : ['About Yourself', '§fill=#ff0§The War (NEW)', '§fill=#ff0§Retirement (NEW)', 'Retirement'][
                        Math.min(SAVE.data.n.shop_gerson, 3)
                        ],
                     ['The Homeworld', '§fill=#ff0§Family (NEW)', '§fill=#ff0§Erogot (NEW)', 'Erogot'][
                     Math.min(SAVE.data.n.shop_homeworld, 3)
                     ],
                     'The Foundry',
                     SAVE.data.s.state_foundry_deathroom === 'f_hub' // NO-TRANSLATE
                        ? 'Undyne'
                        : SAVE.data.b.c_state_secret2 && !SAVE.data.b.c_state_secret2_used
                           ? '§fill=#ff0§Handshake'
                           : 'About Undyne',
                     'Exit'
                  ],
      talkPrompt: () =>
         world.genocide || world.killed0
            ? '>{#p/basic}{#k/2}Really?\nYOU wanna talk?'
            : '>{#p/basic}{#k/0}Anything you wanna know?',
      talkText: [
         () =>
            SAVE.data.n.plot === 72
               ? [
                  ">{#p/basic}{#k/0}* Ol' King Fluffybuns, eh?\n* Now there's someone I know.",
                  ">{#k/2}* I'll say this, I had no clue about what he was doing with those humans until today!",
                  ">{#k/3}* I don't know how he kept such a secret for so long...",
                  ">{#k/0}* Especially since everyone woulda been fine with it if he told 'em before.",
                  ">{#k/0}* I've adopted one of the humans myself, actually.",
                  ">{#k/2}* They're asleep in their box, just outside the shop.\n* What an adorable little fella!",
                  ">{#k/0}* Asgore says they'll wake up once their body adjusts to the real world or whatever.",
                  '>{#k/3}* ... huh?\n* You want to know if Asgore can be your father?',
                  ">{#k/0}* Well, I don't see why not!",
                  ">{#k/0}* I'm sure he'd be happy to have you living with him.",
                  ">{#k/2}* It'd probably be good for him!\n* Wa ha ha."
               ]
               : world.genocide
                  ? [
                     '>{#p/basic}{#k/1}* You wanna know my thoughts on Asriel?',
                     '>{#k/0}* ...\n* He was a good kid.',
                     '>{#k/3}* And if he was still alive, he woulda made a great king.',
                     ">{#k/4}* As for what you got there standin' in front of me, well, it's not him.",
                     '>{#k/0}* It looks like him, talks like him, even has his damned adorable face... bless that kid.',
                     '>{#k/3}* But that SOUL... being this close to you, the resemblance is unmistakable.',
                     ">{#k/1}* How'd it feel taking the SOUL of your own mother, boy?",
                     '>{#k/0}* I wonder.'
                  ]
                  : world.killed0
                     ? [
                        '>{#p/basic}{#k/0}* Long ago, the king and I agreed that escaping would be pointless...',
                        '>{#k/1}* Since once we left, humans would just kill us on the spot.',
                        ">{#k/3}* I'll admit I felt a little betrayed when he changed his mind.",
                        '>{#k/4}* But now, I think...\n* Maybe he was right to.',
                        ">{#k/0}* 'Cause after all, even though we never escaped...",
                        ">{#k/3}* A human's killing us anyway, ain't that right?"
                     ]
                     : 48 <= SAVE.data.n.plot && SAVE.data.n.state_foundry_undyne > 0
                        ? [
                           ">{#p/basic}{#k/0}* Eh, there's really not much to say about me.",
                           '>{#k/0}* I do my best to live my life...',
                           '>{#k/4}* Help those around me in ways that I can.',
                           '>{#k/0}* The thing of it is, we live in dangerous times.',
                           ">{#k/3}* If the wrong human were to stumble on our little outpost, we'd be as good as gone..."
                        ]
                        : [
                           [
                              ">{#p/basic}{#k/0}* I've been around a long time.\n* Maybe too long.",
                              '>{#k/3}* Back in the day, I served as a chief on the planetary council.',
                              '>{#k/2}* The "Saber of Justice" they called me.',
                              ">{#k/1}* ... if it weren't for that damned war, I might still be in that position today."
                           ],
                           [
                              '>{#p/basic}{#k/0}* Ah yeah, the war.\n* That awful thing took a toll on me.\n* On all of us.',
                              ">{#k/4}* Every so often, we'd get these reports...\n* A list of the people who'd died protecting our home.",
                              ">{#k/1}* I still remember the look on Fluffybuns's face when he had to deliver the bad news to families.",
                              ">{#k/1}* That blank stare, those empty eyes...\n* That's what war does to people, kiddo.",
                              ">{#k/3}* That's why I retired."
                           ],
                           [
                              '>{#p/basic}{#k/3}* My retirement?',
                              ">{#k/2}* Wah ha ha!\n* I'd say it's going well!",
                              ">{#k/4}* This old shack ain't exactly up to par with those guys operating from Aerialis...",
                              ">{#k/2}* ... but who cares!\n* I don't need to compete with them.",
                              '>{#k/0}* The heroic, wacky, and sometimes shy neighors I live with out here are all I could ever ask for.',
                              '>{#k/0}* It may not be the home I once dreamed of, but you take what you can get in life.'
                           ],
                           [
                              '>{#p/basic}{#k/3}* You want me to repeat myself?',
                              ">{#k/4}* Wa ha ha... you'll have to go back in time or something.",
                              ">{#k/2}* Even I don't remember what I said!"
                           ]
                        ][Math.min(SAVE.data.n.shop_gerson++, 3)],
         () =>
            SAVE.data.n.plot === 72
               ? [
                  '>{#p/basic}{#k/3}* A whole new world...',
                  ">{#k/0}* Boy, I never thought I'd see the day.",
                  ">{#k/3}* Dr. Alphys told everyone she'd started scanning for new worlds...",
                  ">{#k/0}* Then, just a short time ago, she said she'd found one.",
                  ">{#k/0}* It's called Eurybia.\n* Don't know much else about it beyond that.",
                  ">{#k/1}* All I can be sure of is that it'll be better than this place.",
                  ">{#k/3}* That's not to say I won't miss it.",
                  ">{#k/0}* I've lived through the entire period of monster captivity...",
                  '>{#k/0}* Leaving it so soon almost seems like a crime.'
               ]
               : world.genocide || world.killed0
                  ? [
                     ">{#p/basic}{#k/3}* I've lived too long to be afraid of something like you.",
                     '>{#k/2}* Try it, kiddo!',
                     ">{#k/1}* ... I know you can't here.",
                     ">{#k/4}* Wah ha...\n* Knowledge like that is part of the reason I've survived so long."
                  ]
                  : [
                     [
                        ">{#p/basic}{#k/0}* The homeworld...\n* Well, first off, it has a name.\n* It's Krios.",
                        '>{#k/3}* I myself grew up in a quiet little town outside the city.\n* Well, I say quiet.',
                        '>{#k/4}* Every few days, some of the kids from school would host these time trial races.',
                        ">{#k/0}* The weather wasn't always friendly, but they didn't care.\n* If anything, it just made things more interesting.",
                        '>{#k/0}* My family and I attended dozens of these races when I was just a kiddo.',
                        ">{#k/0}* Don't get me wrong.\n* Electrosnail is fun, but it's just not the same thing."
                     ],
                     [
                        ">{#p/basic}{#k/3}* My family?\n* Eh, there's not much to say.\n* I had good parents, a few siblings.",
                        '>{#k/0}* One day, King Erogot came to our town.\n* He and I met at one of those races I told ya about.',
                        ">{#k/0}* I was an insignificant country bumpkin, but he saw somethin' in me, somethin' more...",
                        '>{#k/4}* One thing led to another, and I ended up moving away from my family at an early age.',
                        ">{#k/3}* ... that was the last time I'd ever get to see them face to face."
                     ],
                     [
                        '>{#p/basic}{#k/0}* Erogot, the king of the last great era of our homeworld.',
                        ">* I'm sure you've read about him at some point.",
                        ...(SAVE.storage.inventory.has('artifact') // NO-TRANSLATE
                           ? [">{#k/2}* If you haven't, then what are ya holding his pendant for!?"]
                           : [
                              ">{#k/2}* If you haven't, then what asteroid have ya been living in for all this time!?"
                           ]),
                        '>{#k/3}* Under his reign, the monster species came so far.\n* Perhaps a little too far.',
                        '>{#k/0}* He was so happy to meet a human for the first time... but not for himself.',
                        ">{#k/1}* Nah, that was his son's wish.\n* Poor kid got exactly what he asked for and then some..."
                     ],
                     [
                        ">{#p/basic}{#k/3}* Forgive me, but I don't really wanna talk about that too much more.",
                        ">{#k/1}* Ol' King Fluffybuns wouldn't want you to carry that kinda burden."
                     ]
                  ][Math.min(SAVE.data.n.shop_homeworld++, 3)],
         () =>
            SAVE.data.n.plot === 72
               ? [
                  '>{#p/basic}{#k/0}* Toriel?\n* She came through here not too long ago, actually.',
                  '>{#k/1}* Said she needed time to herself.',
                  ">{#k/3}* Well, y'know what?\n* I figure she's had enough time by now.",
                  '>{#k/0}* You can find her in the trash depository past the ladder in the room nearby.',
                  ">{#k/3}* I'm pretty sure I know what's got her so pre-occupied..."
               ]
               : world.genocide || world.killed0
                  ? 48 <= SAVE.data.n.plot
                     ? [
                        [
                           '>{#p/basic}{#k/3}* Eh?\n* Fight you?',
                           ">{#k/1}* Nah... I'm not a hero.\n* Not anymore.",
                           ">{#k/0}* And b'sides...\n* You may have spared Undyne, but everyone else is still dead.",
                           ">{#k/4}* I'm better off holding my ground right where I am..."
                        ],
                        [
                           '>{#p/basic}{#k/3}* Eh?\n* Fight you?',
                           ">{#k/1}* Nah... I'm not a hero.\n* Not anymore.",
                           ">{#k/3}* And b'sides...\n* People seem to go missing after they run into you.",
                           ">{#k/4}* I'll take that as an omen to stay right where I am..."
                        ],
                        [
                           '>{#p/basic}{#k/3}* Eh?\n* Fight you?',
                           ">{#k/1}* Nah... I'm not a hero.\n* Not anymore.",
                           ">{#k/0}* And b'sides...\n* After what you did to Undyne, I know I don't stand a chance.",
                           ">{#k/4}* I'm better off holding my ground right where I am..."
                        ]
                     ][world.genocide ? 2 : SAVE.data.n.state_foundry_undyne]
                     : [
                        '>{#p/basic}{#k/3}* Eh?\n* Fight you?',
                        ">{#k/1}* Nah... I'm not a hero.\n* Not anymore.",
                        ">{#k/0}* And b'sides...\n* These old bones aren't fit for fighting anyhoo.",
                        ">{#k/1}* One attack from you, and then I'd... well...",
                        ">{#k/4}* At least by talking to you, I've bought enough time for some of them to escape."
                     ]
                  : postSIGMA()
                     ? [
                        '>{#p/basic}{#k/3}* You wanna know about the Foundry?\n* This old place?',
                        ">{#k/3}* Well, recently, we've been having some electricity problems...",
                        ">{#k/0}* Though I'm sure it's nothing the Foundry crew can't sort out.",
                        ">{#k/2}* Those folks can't get enough of their engineering jobs!"
                     ]
                     : 48 <= SAVE.data.n.plot && SAVE.data.n.state_foundry_undyne > 0
                        ? [
                           [
                              '>{#p/basic}{#k/3}* You wanna know about the Foundry?\n* This old place?',
                              ">{#k/3}* Well, it's a place people often get lost...",
                              '>{#k/3}* Or left behind...',
                              ">{#k/2}* Boy, I sure hope that doesn't happen to you."
                           ],
                           [
                              '>{#p/basic}{#k/3}* You wanna know about the Foundry?\n* This old place?',
                              ">{#k/0}* Well, it's never been the friendliest location...",
                              '>{#k/3}* From the humans sending us here to die, to the recent loss of a fighting spirit...',
                              ">{#k/3}* Nothin' but bad luck down here, kiddo."
                           ]
                        ][SAVE.data.n.state_foundry_undyne - 1]
                        : [
                           '>{#p/basic}{#k/3}* You wanna know about the Foundry?\n* This old place?',
                           '>{#k/2}* Well, back when we first got trapped out here, this WAS the outpost!',
                           '>{#k/0}* All those fancy-schmancy sections added on afterwards were built by us monsters.',
                           ">{#k/0}* Turns out most people aren't into the idea of living in the past.\n* Fair enough.",
                           ">{#k/2}* But... I just think there's something so decadent about repurposing this place.",
                           ">{#k/3}* It was the humans who trapped us here, hoping we'd rot and suffer in darkness.",
                           ">{#k/0}* But look at us now.\n* Look at how we've made this place our own.",
                           ">{#k/2}* Wa ha ha!\n* Talk about showing 'em who's boss, eh?"
                        ],
         () =>
            SAVE.data.b.c_state_secret2 && !SAVE.data.b.c_state_secret2_used
               ? ((SAVE.data.b.c_state_secret2_used = true),
                  [
                     '>{#p/basic}{#k/3}* What?\n* Where on Krios did you learn THAT handshake?',
                     ">{#k/2}* I haven't shown anyone that routine in years!",
                     '>{#k/0}* Wa ha ha... but I think I know where ya learned it from.',
                     '>{#k/0}* Long time ago, a human came here... me and them became good friends.',
                     ...(SAVE.data.n.plot === 72
                        ? [
                           ">{#k/3}* Maybe we still are.\n* I'll have to ask 'em when they wake up.",
                           ">{#k/4}* I've only just adopted the little rascal...",
                           '>{#k/0}* They seem pretty tired after all that archive business.',
                           '>{#k/3}* Imagine...\n* Living in a virtual world...',
                           '>{#k/2}* If you die in the simulation, do you die in real life?',
                           ">{#k/0}* Eh, never mind.\n* It doesn't matter now, anyway."
                        ]
                        : [">{#k/3}* I wonder what they're up to now..."])
                  ])
               : SAVE.data.n.plot === 72
                  ? [
                     '>{#p/basic}{#k/0}* Frisk, I could talk about you all day after what you did.',
                     '>{#k/4}* Risking your life, facing down a godlike being just to save us...',
                     ">{#k/3}* The words strong enough to do it justice don't exist.",
                     '>{#k/0}* I think, sometime in your future, if you really wanted it...',
                     '>{#k/0}* You could lead the monster race yourself, as ruler.',
                     '>{#k/2}* Everyone would follow you.\n* Even this old coot!',
                     ">{#k/0}* You're a real hero, kid."
                  ]
                  : 48 <= SAVE.data.n.plot
                     ? world.genocide
                        ? [
                           [
                              ">{#p/basic}{#k/1}* I take it you've killed her by now?",
                              '>{#k/1}* ...',
                              '>{#k/3}* Then why ask me...',
                              '>{#k/3}* Unless...',
                              ">{#k/2}* You just wanna get my reaction, don'tcha?",
                              '>{#k/4}* ...',
                              '>{#k/4}* How about... nah.'
                           ],
                           [
                              '>{#p/basic}{#k/1}* I get it, guys.',
                              ">{#k/1}* She's dead.",
                              ">{#k/3}* You expectin' me to throw a party for you or somethin'?",
                              '>{#k/1}* Get outta my sight.'
                           ]
                        ][Math.min(SAVE.data.n.shop_deadfish++, 1)]
                        : SAVE.data.s.state_foundry_deathroom === 'f_hub' // NO-TRANSLATE
                           ? [
                              '>{#p/basic}{#k/1}* ...',
                              ">{#k/1}* You've got a real twisted sense of humor, kiddo.",
                              '>{#k/3}* Killing her in front of me like that...',
                              ">{#k/1}* You're lucky I don't walk out there and kill you myself."
                           ]
                           : world.killed0
                              ? [
                                 [
                                    '>{#p/basic}{#k/4}* Undyne?',
                                    49 <= SAVE.data.n.plot
                                       ? '>{#k/4}* She passed through here earlier...'
                                       : '>{#k/4}* She just passed through here a few moments ago.',
                                    '>{#k/0}* Said she\'d "given up" on tryin\'a capture you.',
                                    '>{#k/4}* ...',
                                    '>{#k/4}* What happened back there...?'
                                 ],
                                 [
                                    '>{#p/basic}{#k/3}* Undyne?',
                                    ">{#k/0}* I haven't heard from her in a while.",
                                    '>{#k/4}* She just kinda... disappeared.',
                                    '>{#k/3}* Was that your doing?'
                                 ],
                                 [
                                    [
                                       '>{#p/basic}{#k/1}* ...',
                                       '>{#k/1}* You killed her, just like you killed everyone else.',
                                       ">{#k/3}* Granted, she wasn't intent on letting YOU live...",
                                       ">{#k/1}* But don't act like this was just self-defense for you.",
                                       '>{#k/3}* Wa ha...\n* I know you better than that.'
                                    ],
                                    ['>{#p/basic}{#k/4}* ...', '>{#k/0}* What more is there to say?']
                                 ][Math.min(SAVE.data.n.shop_deadfish++, 1)]
                              ][SAVE.data.n.state_foundry_undyne]
                              : [
                                 2 <= SAVE.data.n.plot_date
                                    ? SAVE.data.b.undyne_respecc
                                       ? [
                                          '>{#p/basic}{#k/4}* So you and her had a good time, eh?',
                                          '>{#k/2}* Wa ha ha!',
                                          ">{#k/0}* You've really made a good impression on her, kiddo!"
                                       ]
                                       : [
                                          '>{#p/basic}{#k/4}* So are you and her... friends now?',
                                          '>{#k/2}* Wa ha ha!',
                                          ">{#k/0}* You've done something I never thought possible, kiddo!"
                                       ]
                                    : [
                                       [
                                          '>{#p/basic}{#k/4}* Undyne?',
                                          49 <= SAVE.data.n.plot
                                             ? '>{#k/4}* She passed through here earlier...'
                                             : '>{#k/4}* She just passed through here a few moments ago.',
                                          SAVE.data.b.undyne_respecc
                                             ? '>{#k/0}* Said she was proud to have fought an "honorable" human.'
                                             : '>{#k/0}* Said she was "done" tryin\'a capture you.',
                                          '>{#k/4}* ...',
                                          '>{#k/4}* The heck did you do to make her say THAT?'
                                       ],
                                       [
                                          ">{#p/basic}{#k/4}* If you're askin' me where to find her, she's at home.\n* Ain't but a few steps away.",
                                          '>{#k/3}* From her words to me before...',
                                          SAVE.data.b.undyne_respecc
                                             ? '>{#k/4}* It seems you two are on better terms than I thought.'
                                             : '>{#k/4}* It seems you two have some things to work out.'
                                       ]
                                    ][Math.min(SAVE.data.n.shop_deadfish++, 1)],
                                 [
                                    '>{#p/basic}{#k/3}* Undyne?',
                                    ">{#k/0}* I haven't heard from her in a while.",
                                    '>{#k/4}* She just kinda... disappeared.',
                                    '>{#k/1}* Something tells me you played a part in that...'
                                 ],
                                 [
                                    [
                                       '>{#p/basic}{#k/4}* ...',
                                       '>{#k/0}* Well... you killed her.',
                                       ">{#k/3}* Though, that's kinda her own doing.",
                                       '>{#k/4}* I never really got why she was so intent on killing you humans...',
                                       ">{#k/0}* If she wanted your SOUL, couldn't she just wait until you died naturally?"
                                    ],
                                    ['>{#p/basic}{#k/4}* ...', '>{#k/0}* What more is there to say?']
                                 ][Math.min(SAVE.data.n.shop_deadfish++, 1)]
                              ][SAVE.data.n.state_foundry_undyne]
                     : world.genocide
                        ? [
                           ">{#p/basic}{#k/0}* Undyne?\n* Oh, that poor little urchin.\n* Normally, I'd call her the hero...",
                           ">{#k/1}* But to be honest, I've seen what you've done.\n* She doesn't stand a chance.",
                           ">{#k/4}* Don't get me wrong, she'll give ya one hell of a fight.",
                           '>{#k/3}* But no... the outpost needs a different kinda hero now.',
                           ">{#k/3}* Someone that doesn't operate on brawn and bravado...",
                           ">{#k/3}* Someone that doesn't see the universe like everyone else...",
                           ">{#k/0}* Wa ha ha.\n* I don't doubt someone like that will be the end of you."
                        ]
                        : world.killed0
                           ? world.trueKills > 29
                              ? [
                                 ">{#p/basic}{#k/1}* I'm not a hero.",
                                 ">{#k/3}* But I know there's someone out there.",
                                 ">* Someone who'll never give up trying to do the right thing, no matter what.",
                                 ">{#k/0}* There's no prophecy or legend 'bout anyone like that.",
                                 ">* It's just something I know is true.",
                                 '>{#k/3}* One day, someone like that will hunt you down.'
                              ]
                              : [
                                 ">{#p/basic}{#k/1}* I'm not a hero.",
                                 ">{#k/3}* But I know there's someone out there.",
                                 ">* Someone who'll never give up trying to do the right thing, no matter what.",
                                 ">{#k/0}* I'd watch your back, kiddo.",
                                 ">{#k/0}* 'Cause sooner or later, before you know it...",
                                 ">{#k/3}* ... you'll be as good as dead."
                              ]
                           : world.trueKills > 29
                              ? [
                                 ">{#p/basic}{#k/0}* Undyne?\n* Yeah, she's a local hero around here.",
                                 '>{#k/3}* She stormed off earlier... seemed pretty upset at someone who looked just like you...',
                                 ">{#k/2}* I'd watch your back, kiddo.\n* And buy some items...\n* It might just save your hide!\n* Wa ha ha!"
                              ]
                              : [
                                 ">{#p/basic}{#k/0}* Undyne?\n* Yeah, she's a local hero around here.",
                                 '>{#k/4}* Through grit and determination alone, she fought her way to the top of the Royal Guard.',
                                 '>{#k/3}* Actually, she just came through here asking about someone who looked just like you...',
                                 ">{#k/2}* I'd watch your back, kiddo.\n* And buy some items...\n* It might just save your hide!\n* Wa ha ha!"
                              ]
      ],
      zeroPrompt: '>{#p/basic}...'
   },

   s_save_foundry: {
      f_abyss: {
         name: 'Foundry - Abyss',
         text: [
            '>{#p/human}* (You find yourself at the lowest point on the outpost.)',
            '>{#p/human}* (This sense of limbo fills you with determination.)'
         ]
      },
      f_battle: {
         name: 'Foundry - Bridge',
         text: () =>
            SAVE.data.n.state_foundry_undyne > 0 || world.runaway
               ? ['>{#p/human}* (The starlight dims, filling you with determination.)']
               : [
                  '>{#p/human}* (The starlight glimmers, distant as it may be.)',
                  '>{#p/human}* (This fills you with determination.)'
               ]
      },
      f_hub: {
         name: 'Foundry - Quiet Area',
         text: () =>
            SAVE.data.n.state_foundry_undyne > 0 || world.runaway
               ? [
                  '>{#p/human}* (The silence is deafening...)',
                  '>{#p/human}* (Yet it fills you with determination.)'
               ]
               : SAVE.data.n.plot === 72
                  ? ['>{#p/human}* (Returning to such a quiet place after your journey fills you with determination.)']
                  : SAVE.data.n.plot < 48
                     ? [
                        '>{#p/human}* (A short reprieve in the ongoing chaos...)',
                        '>{#p/human}* (It fills you with determination.)'
                     ]
                     : SAVE.data.n.plot_date < 2.1
                        ? ['>{#p/human}* (The chaos has come to an end, filling you with determination.)']
                        : SAVE.data.n.exp > 0
                           ? [
                              '>{#p/human}* (In with the steam comes the bitter scent of betrayal.)',
                              '>{#p/human}* (It fills you with determination.)'
                           ]
                           : [
                              '>{#p/human}* (In with the steam comes the sweet scent of friendship.)',
                              '>{#p/human}* (It fills you with determination.)'
                           ]
      },
      f_lobby: {
         name: 'Foundry - Dark Zone',
         text: () =>
            SAVE.data.n.plot < 39
               ? ['>{#p/human}* (Wandering deeper into the factory fills you with determination.)']
               : SAVE.data.n.state_foundry_muffet === 1
                  ? ['>{#p/human}* (Thinking of the friends you corrupted along the way fills you with determination.)']
                  : SAVE.data.b.f_state_kidd_betray
                     ? ['>{#p/human}* (Thinking of the friends you betrayed along the way fills you with determination.)']
                     : world.runaway
                        ? [
                           ">{#p/human}* (Thinking of the friends you'll never get to see again fills you with determination.)"
                        ]
                        : SAVE.data.b.svr
                           ? [
                              '>{#p/human}* (Thinking of the friends you went the extra mile to save fills you with determination.)'
                           ]
                           : ['>{#p/human}* (Thinking of the friends you made along the way fills you with determination.)']
      },
      f_prechase: {
         name: 'Foundry - Crossing',
         text: () =>
            SAVE.data.b.svr
               ? [
                  '>{#p/human}* (Despite it only being useful for you and your company...)',
                  '>{#p/human}* (The newly-built bridge nearby still fills you with determination.)'
               ]
               : world.runaway
                  ? [
                     ">{#p/human}* (Despite you being the only one who'll get to use it now...)",
                     '>{#p/human}* (The newly-built bridge nearby still fills you with determination.)'
                  ]
                  : SAVE.data.n.plot < 48
                     ? [
                        '>{#p/human}* (Pylon puzzles, signal stars, and vintage vents...)',
                        '>{#p/human}* (These fickle frivolities fill you with determination.)'
                     ]
                     : [
                        '>{#p/human}* (A bridge now sits amidst the surroundings.)',
                        '>{#p/human}* (This development fills you with determination.)'
                     ]
      },
      f_sans: {
         name: 'Foundry - Checkpoint',
         text: () =>
            world.dead_skeleton || world.runaway
               ? [
                  '>{#p/human}* (Somehow, the steam emitted by these vents is unsettling.)',
                  '>{#p/human}* (Nonetheless, it fills you with determination.)'
               ]
               : ['>{#p/human}* (The hot, damp steam emitted by these vents fills you with determination.)']
      },
      f_shyren: {
         name: 'Foundry - Vending Machine',
         text: () =>
            SAVE.data.b.killed_shyren
               ? ['>{#p/human}* (A sad stillness permeates the air, filling you with determination.)']
               : SAVE.data.n.plot < 40
                  ? ['>{#p/human}* (A quiet hum echoes closeby, filling you with determination.)']
                  : ['>{#p/human}* (The sound of music fills you with determination.)']
      },
      f_tunnel: {
         name: 'Foundry - Trash Zone',
         text: () =>
            SAVE.data.n.plot < 42.1
               ? ['>{#p/human}* (Getting lost amongst the trash fills you with determination.)']
               : ['>{#p/human}* (Finding yourself back amongst the trash fills you with determination.)']
      }
   }
};
// END-TRANSLATE
