import { ca_state, cf2_state } from '../../../code/citadel/extras';
import { asrielinter, cs_state } from '../../../code/common/api';
import { spawn } from '../../../code/systems/core';
import { battler, calcLV, choicer, instance, pager, player, postSIGMA, world } from '../../../code/systems/framework';
import { SAVE } from '../../../code/systems/save';
import { CosmosUtils } from '../../../code/systems/storyteller';

// START-TRANSLATE

export default {
   a_citadel: {
      youvedoneitnow: [
         [
            ">{#p/human}* (You feel a darkness gathering inside of you.)",
            ">{#p/human}* (You wish it were all just a bad dream.)"
         ],
         [
            ">{#p/human}* (You try your best to fight it, but nothing happens.)",
            ">{#p/human}* (You wish desperately that you could break free.)"
         ],
         [
            ">{#p/human}* (You call out for help, but nobody comes.)",
            ">{#p/human}* (You wish you could make this all just go away.)"
         ],
         [">{#p/human}* (...)", ">{#p/human}* (You take a deep breath, and ready yourself for the end.)"],
         [">{#p/human}* (...)", ">{#p/human}* (You know what must be done.)"]
      ],
      hypertext: {
         count: "REBOOT IN $(x)",
         death1: ["{#p/human}（你深吸了一口气。）", "（你充满了决心。）"],
         death2: [
            "{#p/human}{#v/1}{@fill=#42fcff}It'll be alright in the end...",
            "{@fill=#42fcff}Just take it steady..."
         ],
         death3: ["{#p/human}{#v/2}{@fill=#ff993d}Now is no time to give up.", "{@fill=#ff993d}Get back out there!"],
         death4: ["{#p/human}{#v/3}{@fill=#003cff}You know what you're capable of.", "{@fill=#003cff}Don't hold back!"],
         death5: [
            "{#p/human}{#v/4}{@fill=#d535d9}You know you can survive this...",
            "{@fill=#d535d9}Keep moving forward."
         ],
         death6: [
            "{#p/human}{#v/5}{@fill=#00c000}You're this world's last hope...",
            "{@fill=#00c000}Believe in yourself!"
         ],
         death7: ["{#p/human}{#v/6}{@fill=#faff29}It's only a matter of time."],
         cyan1: [
            ">{*}{#p/human}{#v/6}{@fill=#faff29}A lost SOUL calls out to you.",
            ">{*}{@fill=#faff29}依靠{@wordify=耐心/勇气/正直/毅力/善良/正义}耐心{@wordify=}，将会有望逃脱。",
            ">{*}{#p/human}{#v/1}{@fill=#42fcff}You must reach my Little Dipper...",
            ">{*}{#p/human}(Press [Z] to teleport.)"
         ],
         cyan2: [
            ">{*}{#p/human}{#v/1}{@fill=#42fcff}The entity lies in wait.",
            ">{*}{@fill=#42fcff}With PATIENCE, you may survive it..."
         ],
         orange1: [
            ">{*}{#p/human}{#v/6}{@fill=#faff29}A lost SOUL calls out to you.",
            ">{*}{@fill=#faff29}凭借{@wordify=勇气/正直/毅力/善良/正义}勇气{@wordify=}，或将摆脱束缚。",
            ">{*}{#p/human}{#v/2}{@fill=#ff993d}Don't leave without my Power Glove!",
            ">{*}{#p/human}(Press [Z] to explode.)"
         ],
         orange2: [
            ">{*}{#p/human}{#v/2}{@fill=#ff993d}The entity looms above...",
            ">{*}{@fill=#ff993d}With BRAVERY, you may overcome it!"
         ],
         blue1: [
            ">{*}{#p/human}{#v/6}{@fill=#faff29}A lost SOUL calls out to you.",
            ">{*}{@fill=#faff29}坚守{@wordify=正直/毅力/善良/正义}正直{@wordify=}，必定能够逃脱。",
            ">{*}{#p/human}{#v/3}{@fill=#003cff}I'll need my trusty Hoverboots."
         ],
         blue2: [
            ">{*}{#p/human}{#v/3}{@fill=#003cff}The entity holds its position.",
            ">{*}{@fill=#003cff}With INTEGRITY, you can surpass it."
         ],
         purple1: [
            ">{*}{#p/human}{#v/6}{@fill=#faff29}A lost SOUL calls out to you.",
            ">{*}{@fill=#faff29}拥有{@wordify=毅力/善良/正义}毅力{@wordify=}，定可摆脱束缚。",
            ">{*}{#p/human}{#v/4}{@fill=#d535d9}A single Datapad can go a long way."
         ],
         purple2: [
            ">{*}{#p/human}{#v/4}{@fill=#d535d9}The entity is losing its hold.",
            ">{*}{@fill=#d535d9}With PERSEVERANCE, you can outlast it!"
         ],
         green1: [
            ">{*}{#p/human}{#v/6}{@fill=#faff29}A lost SOUL calls out to you.",
            ">{*}{@fill=#faff29}心怀{@wordify=善良/正义}善良{@wordify=}，终能冲破枷锁。",
            ">{*}{#p/human}{#v/5}{@fill=#00c000}The Tablaphone will set me free!"
         ],
         green2: [
            ">{*}{#p/human}{#v/5}{@fill=#00c000}The entity is destabilizing...",
            ">{*}{@fill=#00c000}With KINDNESS, you can outshine it..."
         ],
         yellow: [
            ">{*}{#p/human}{#v/6}{@fill=#faff29}The lost SOULs called out to you.",
            ">{*}{@fill=#faff29}With JUSTICE, you have answered.",
            ">{*}{@fill=#faff29}You have freed them of their prisons.",
            ">{*}{#p/human}{#v/1}{@fill=#42fcff}At last.",
            ">{*}{#p/human}{#v/2}{@fill=#ff993d}You're a hero!",
            ">{*}{#p/human}{#v/3}{@fill=#003cff}You've done the right thing.",
            ">{*}{#p/human}{#v/4}{@fill=#d535d9}Thank you...",
            ">{*}{#p/human}{#v/5}{@fill=#00c000}You're the best...!",
            ">{*}{#p/human}{#v/6}{@fill=#faff29}Our power is yours now.",
            ">{*}{@fill=#faff29}With it, the entity will collapse.",
            ">{*}{@fill=#faff29}Then...",
            ">{*}{@fill=#faff29}... you will do what you must.",
            ">{*}{@fill=#faff29}Now, end this!",
            ">{*}{#p/human}(Press [Z] to shoot.)"
         ],
         boot: "REBOOTING...",
         init: "READY",
         warn: "WARNING...",
         file1saved: "FILE 1 SAVED",
         file1loaded: "FILE 1 LOADED",
         file2saved: "FILE 2 SAVED",
         file2loaded: "FILE 2 LOADED",
         file3saved: "FILE 3 SAVED",
         file3loaded: "FILE 3 LOADED",
         file4saved: "FILE 4 SAVED",
         file4loaded: "FILE 4 LOADED",
         file5saved: "FILE 5 SAVED",
         file5loaded: "FILE 5 LOADED",
         file6saved: "FILE 6 SAVED",
         file6loaded: "FILE 6 LOADED"
      },
      noequip: [">{#p/human}* （你打算不这么做。）"],
      genotext: {
         monologue: [
            (re: boolean) => [
               ...(re
                  ? [">{#p/asriel2}{#f/13}* As I was going to say..."]
                  : [">{#p/asriel2}{#f/13}* I'll be honest..."]),
               ">{#f/16}* ... this isn't even the first time I've tried to destroy the outpost.",
               ">{#f/15}* Heck, I've probably seen more timelines than I can remember.",
               ">{#f/23}* But, no matter what I do...",
               ">{#f/16}* There's always been something missing."
            ],
            (re: boolean) => [
               ">{#p/asriel2}{#f/15}* Back when I first awoke as a star...",
               ">{#f/16}* I had no idea how I'd gotten there, or what I was doing.",
               ">{#f/13}* I couldn't feel my arms... I couldn't feel my legs...",
               ">{#f/13}* Yet, no matter how many times I called out for help...",
               ">{#f/23}* ... begged... for help...",
               ">{#f/7}* ...",
               ">{#f/6}* ... nobody came."
            ],
            (re: boolean) => [
               ...(re
                  ? [">{#p/asriel2}{#f/6}* As I was saying, after waking up as a star, I wasn't myself anymore."]
                  : []),
               ">{#p/asriel2}{#f/15}* But, more than that... I couldn't seem to feel love, either.",
               ">{#f/23}* I was so afraid... I just wanted everything to go back to normal.",
               ">{#f/13}* I went to see Dad, hoping he'd be able to help me.",
               ">{#f/17}* He promised me he'd take care of me for as long as it'd take...",
               ">{#f/13}* ... but in the end, he couldn't save me."
            ],
            (re: boolean) => [
               ...(re
                  ? [
                     ">{#p/asriel2}{#f/13}* As I was saying, after waking up as a star, I wasn't myself anymore.",
                     ">{#f/13}* Then, after Dad wasn't able to help me...",
                     ">{#f/16}* I went to see Mom."
                  ]
                  : [">{#p/asriel2}{#f/16}* Then, I went to see Mom."]),
               ">{#f/13}* Surely, she'd know what to do, right?",
               ">{#f/17}* She'd done so much for me in the past, so...",
               ">{#f/23}* If someone, anyone could help me... it'd be her."
            ],
            (re: boolean) => [
               ...(re
                  ? [
                     ">{#p/asriel2}{#f/13}* As I was saying, after waking up as a star, I wasn't myself anymore.",
                     ">{#f/16}* I tried talking to my parents, but they couldn't help me at all."
                  ]
                  : [">{#p/asriel2}{#f/16}* ... but it didn't work."]),
               ">{#f/13}* Realizing that I'd be like this forever...",
               ">{#f/13}* Realizing there was nothing I could do to help myself...",
               ">{#f/23}* I just wanted it to end.",
               ">{#f/15}* I was... ready, for everything to end.",
               ">{#f/16}* ... then...\n* Just as I committed to the moment...",
               ">{#f/7}* Just as it all flashed before my eyes...",
               ">{#f/6}* I suddenly found myself back where I started."
            ],
            (re: boolean) => [
               ...(re
                  ? [
                     ">{#p/asriel2}{#f/10}* Where were we again?",
                     ">{#f/6}* ... oh yeah.\n* So I was right back where I started."
                  ]
                  : []),
               ">{#p/asriel2}{#f/13}* At first, I didn't know how I got there...",
               ">{#f/15}* ... so, I tried bringing myself back on purpose.",
               ">{#f/16}* I focused my mind on going back again, and... it worked.",
               ">{#f/15}* Somehow, I'd gained the power to turn back time.",
               ">{#f/17}* And that's when it struck me...",
               ">{#f/23}* I'd use my new power to be a force for good.",
               ">{#f/15}* I thought, maybe, if I couldn't help myself...",
               ">{#f/16}* At least I could help someone else."
            ],
            (re: boolean) => [
               ...(re
                  ? [
                     ">{#p/asriel2}{#f/10}* Where were we again?",
                     ">{#f/16}* ... oh yeah.\n* So I started out by helping them."
                  ]
                  : []),
               ">{#p/asriel2}{#f/23}* I'll admit, I struggled at first...",
               ">{#f/15}* ... but the more I did it, the better I got.",
               ">{#f/5}* After a while, I could even do it with my eyes closed.",
               ">{#f/9}* Heck.\n* Sometimes I did.",
               ">{#f/13}* And, sure, maybe I was a bit of a show-off...",
               ">{#f/9}* But what did it matter?",
               ">{#f/5}* After all, I was still helping them...",
               ">{#f/15}* ... saving them...",
               ">{#f/15}* Being a good person, and all."
            ],
            (re: boolean) => [
               ...(re ? [">{#p/asriel2}{#f/15}* Like I said before, I started out by helping them."] : []),
               ">{#p/asriel2}{#f/16}* Soon, though, I began to notice something.",
               ">{#f/15}* The same responses, the same outcomes...",
               ">{#f/16}* Just being nice all the time wasn't satisfying me anymore.",
               ">{#f/6}* And, yes, before you ask, I did try getting cutesy.",
               ">{#f/7}* But even that became boring in the end.",
               ">{#f/10}* I could've gone on, but what would've been the point?",
               ">{#f/6}* It was time to try something else."
            ],
            (re: boolean) => [
               ...(re
                  ? [">{#p/asriel2}{#f/6}* Like I said before, I decided I'd stop being nice all the time."]
                  : []),
               ">{#p/asriel2}{#f/4}* Now, it didn't amount to much at first...",
               ">{#f/3}* Just a few mean words here and there.",
               ">{#f/10}* A part of me felt bad, but what did I really have to lose?",
               ">{#f/6}* Of course, once things began to repeat again, I got a little meaner.",
               ">{#f/8}* Another insult here, another mockery there...",
               ">{#f/7}* Eventually, I stopped feeling bad about it entirely.",
               ">{#f/9}* It's not like I was killing them or anything."
            ],
            (re: boolean) => [
               ...(re ? [">{#p/asriel2}{#f/4}* Like I said before, I'd gotten used to being mean."] : []),
               ">{#p/asriel2}{#f/15}* Then, I thought to myself... if I attacked them...",
               ">{#f/16}* It'd be fine, as long as they didn't die.",
               ">{#f/10}* What'd be the harm?\n* Monsters can heal, can't they?",
               ">{#f/4}* If worst came to worst, I could just RESET, and it'd still be fine.",
               ">{#f/3}* ... little did I know how I'd react if it actually happened."
            ],
            (re: boolean) => [
               ...(re ? [">{#p/asriel2}{#f/3}* Like I said before, I'd gotten the idea to attack them."] : []),
               ">{#p/asriel2}{#f/13}* I guess you could say I got carried away...",
               ">{#f/15}* Pulled... just a little too tightly...",
               ">{#f/16}* ...",
               ">{#f/6}* My own mother, strangled to death by my own magic...",
               ">{#f/8}* Begging me to stop as the life drained out of her body.",
               ">{#f/7}* Even after a RESET, the image wouldn't leave my mind.",
               ">{#f/13}* I panicked, and tried making up for it by being nice to her.",
               ">{#f/15}* But I couldn't forget about what I'd done.",
               ">{#f/15}* I just... couldn't look at her... at anyone... the same way again."
            ],
            (re: boolean) => [
               ...(re
                  ? [
                     ">{#p/asriel2}{#f/15}* Like I said before, I couldn't forget about what I'd done.",
                     ">{#f/16}* And, after that, things only got worse."
                  ]
                  : [">{#p/asriel2}{#f/16}* After that, things only got worse."]),
               ">{#f/15}* I guess, after screwing up once, it got easier to do it again.",
               ">{#f/15}* And soon, be it out of frustration, or raw curiosity...",
               ">{#f/16}* What began as an accident spiraled out of control.",
               ">{#f/7}* But, hey, when it came down to it, I could always RESET, right?",
               ">{#f/6}* And once I told myself THAT... there really was no going back."
            ],
            (re: boolean) => [
               ">{#p/asriel2}{#f/6}* With each new RESET, my actions became more and more twisted.",
               ">{#f/7}* I subjected them... all of them... to horrors beyond compare.",
               ">{#f/15}* I did it again, and again, and again...",
               ">{#f/16}* I did it so many times, I'd become completely numb to it.",
               ">{#f/3}* Then, finally, after all of that...",
               ">{#f/3}* ... nothing.",
               ">{#f/3}* I felt nothing.\n* It meant nothing.\n* It was all for nothing.",
               ">{#f/15}* As I stood alone in my empty world, I knew what had to be done.",
               ">{#f/23}* So I RESET, and let time move forward without me."
            ],
            (re: boolean) => [
               ...(re
                  ? [
                     ">{#p/asriel2}{#f/16}* Like I said before, I knew it was all for nothing.",
                     ">{#f/23}* So I RESET, and let time move forward without me."
                  ]
                  : []),
               ">{#p/asriel2}{#f/17}* Don't you see, $(name)?",
               ">{#f/23}* This is why I was so excited to be with you after all this time.",
               ">{#f/13}* With you by my side, I won't have to do it alone anymore.",
               ">{#f/15}* With you by my side... it'll finally mean something for once.",
               ">{#f/16}* Besides, this is what you've always wanted, isn't it?",
               ">{#f/13}* To \"set them free?\"",
               ">{#f/23}* ... heh.\n* We really do make the perfect team."
            ]
         ],
         monologueX1: [
            ">{#p/asriel2}{#f/17}* Just remember, $(name).",
            ">{#f/17}* As long we stick together, nothing can stand in our way."
         ],
         monologueX2: () => [
            ">{#p/asriel2}{#f/16}* ... here.\n* Take my hand.",
            ...(SAVE.data.b.water ? [">{#f/13}* Don't worry, I'll hold the cup for you..."] : [])
         ],
         monologueX3: [
            ">{#p/asriel2}{#f/17}* We might as well do it while we still have the chance, right?",
            ">{#f/23}* Walking hand-in-hand, past the city, like we always wanted to...",
            ">{#f/16}* ... and THEN we'll blow it to pieces."
         ],
         monologueX4: () => [
            ">{#p/asriel2}{#f/16}* Well, that was nice.",
            ...(SAVE.flag.n.ga_asrielMonologueY < 2
               ? [
                  ">{#f/13}* But the outpost's time has come.",
                  ">{#f/7}* Listen, $(name).\n* These monsters just don't understand us.",
                  ">{#f/6}* They'd like to pretend that the universe is a perfect place.",
                  ">{#f/8}* They'd like to think that anyone can be redeemed.",
                  ">{#f/6}* But you and I?\n* We don't fit within their world view.",
                  ">{#f/7}* We're irredeemable.",
                  ">{#f/9}* Heh.\n* Isn't it funny?",
                  ">{#f/13}* The one thing that keeps us from relating to anyone else...",
                  ">{#f/16}* ... is precisely what binds us together.",
                  ">{#f/17}* Listen, once we hitch a ride and escape this place...",
                  ">{#f/17}* We'll be together forever, $(name).",
                  ">{#f/23}* It's our destiny."
               ]
               : [
                  ">{#f/13}* But you know what we have to do now.",
                  ">{#f/17}* Come on, let's get back to where we were..."
               ])
         ],
         monologueX5: [">{#p/asriel2}{#f/17}* Lead the way."],
         monologueY: [
            ">{#p/asriel2}{#f/16}* ... I'm not going to repeat myself.",
            ">{#f/13}* You know why we're here."
         ],
         afterfight1: [">{#p/asriel2}{#f/8}* ...总算解决她了。"],
         afterfight2: () =>
            [
               [
                  ">{#p/asriel2}{#f/8}* Looks like they've already been evacuated...",
                  ">{#f/7}* ... hmph.",
                  ">{#f/6}* If he thinks that'll stop us, then he's just plain stupid.",
                  ">{#f/10}* I mean, he could've used their power to destroy us...",
                  ">{#f/16}* ... but let's be honest.",
                  ">{#f/13}* He's just not that kind of person, is he?"
               ],
               [">{#p/asriel2}{#f/6}* Just a moment."]
            ][Math.min(SAVE.flag.n.ga_asriel56++, 1)],
         afterfight3: () => [
            ">{#p/asriel2}{#f/16}* Meltdown in progress.",
            ...(SAVE.flag.n.ga_asriel57++ < 1
               ? [
                  ">{#f/5}* All we need now is a special shuttle...",
                  ">{#f/9}* One that'll link with our SOULs to let us get past the force field."
               ]
               : [])
         ],
         afterfight4: [">{#p/asriel2}{#f/3}* This way."],
         afterfight5a: [">{#p/asriel2}{#f/5}* Gorey!", ">{#f/5}* How ya doing?"],
         afterfight5b: [
            ">{#p/asgore}{#f/5}* About as good as can be expected.",
            ">{#p/asriel2}{#f/6}* We've got you cornered, by the way.\n* So no tricks."
         ],
         afterfight6: [
            ">{#p/asgore}{#f/1}* I have no intention of tricking you, Asriel.",
            ">{#p/asgore}{#f/2}* I know the end is near."
         ],
         afterfight7: [">{#p/asriel2}{#f/10}* Any last words before everything you know is turned to dust?"],
         afterfight8: [
            ">{#p/asriel2}{#f/15}* No?",
            ">{#f/7}* Okay.",
            ">{#f/6}* I guess we'll be on our way, then.",
            ">{#f/8}* ... right after I take your access card."
         ],
         afterfight10: [">{#p/asriel2}{#f/1}* Come on, $(name).", ">{#f/2}* I've seen enough of this place."],
         afterfight11: [
            ">{#p/asgore}{#f/5}* $(name)...?",
            ">{#p/asgore}{#f/6}* ... hmm.\n* Safe journey, Asriel."
         ],
         afterfight12: [">{#p/asriel2}{#f/16}* Ignore him, $(name).\n* Nothing in this world matters anymore."],
         afterfight13: [">{#p/asriel2}{#f/17}* Only you."],
         coreboomA1: [
            ">{#p/papyrus}{#f/5}HELLO?\nIS ANYONE THERE?",
            ">{#p/papyrus}{#f/5}I'VE BEEN LOOKING AROUND FOR THE HUMAN, AND..."
         ],
         coreboomA2: [">{#p/papyrus}{#f/8}WHAT THE...!"],
         coreboomA3: [">{#p/basic}* Papyrus?{%40}"],
         coreboomA4: [">{#p/papyrus}{#f/4}I'VE GOT A BAD FEELING ABOUT THIS.{%40}"],
         coreboomA5: [">{#p/basic}* ... hello?{%40}"],
         coretext1: [">{#p/basic}{#s/spiderLaugh}* Keep it steady, dearies~"],
         coretext2: [">{#p/basic}{#s/spiderLaugh}* Ngh...", ">{#p/basic}* Hold it together~"],
         coreboomB1: [">{#p/basic}{#s/spiderLaugh}* Ah!", ">{#p/basic}* Not like this~"],
         coreboomB2: [">{#p/basic}* Not like what?{%40}"],
         coreboomB3: [">{#p/basic}{#s/spiderLaugh}* Crud.{%40}"],
         coretext3: [">{#p/papyrus}{#f/9}NEED A HAND?"],
         coretext4a: [">{#p/basic}{#s/spiderLaugh}* Papyrus!", ">{#p/basic}* You're alive~"],
         coretext4b: [">{#p/papyrus}{#f/6}IN THE FLESH!"],
         coretext5a: [">{|}{#p/papyrus}{#f/4}OR RATHER, IN THE- {%}"],
         coretext5b: [
            ">{#p/basic}{#s/spiderLaugh}* Papyrus, we still need someone to access the override switches!"
         ],
         coreboomC1: [">{#p/papyrus}{#f/5}... I'M AFRAID WE'RE THE ONLY ONES HERE."],
         coreboomC2: [">{#p/papyrus}{#f/8}WHAT THE...!"],
         coreboomC3: [">{#p/basic}{#s/spiderLaugh}* It's gone critical.{%40}"],
         coretext6: [">{#p/basic}* I'll call the engineers!"],
         coretext7: [">{#p/papyrus}{#f/6}YES, YES, DO THAT!"],
         coreboomD1: [">{#p/basic}* ...", ">{#p/basic}* No response."],
         coreboomD2: [">{#p/basic}* ...", ">{#p/basic}* They say there's not enough of them left!?"],
         coreboomD3: [">{#p/papyrus}{#f/5}DRAT.{%40}"],
         coretext8: [">{#p/basic}* ...", ">{#p/basic}* They're on it!"],
         coretext9: [">{#p/basic}{#s/spiderLaugh}* Splendid~"],
         coretext10: [">{#p/basic}* Any second now..."],
         coretext11: [">{#p/basic}{#s/spiderLaugh}* There we are~"],
         coretext12a: [">{#p/papyrus}{#f/0}DID WE DO IT!?!?"],
         coretext12b: [">{#p/basic}{#s/spiderLaugh}* Ahuhu... we still need someone to reach inside~"],
         coreboom12c: [">{#p/basic}* Don't look at me!\n* I'm a dummy!"],
         coreboom12d: [">{#p/basic}{#s/spiderLaugh}* A dummy that served in the ELITE squad, that is~"],
         coreboom12e: [">{#p/basic}* ... that was a long time ago."],
         coretext13: [">{#p/napstablook}* i'll do it"],
         coretext14a: [">{#p/papyrus}{#f/1}WHERE DID -YOU- COME FROM???"],
         coretext14b: [
            ">{#p/napstablook}* sorry...\n* no time to explain...",
            ">* take care of yourself, cousin...",
            ">* alright?"
         ],
         coretext15: [">{*}{#p/basic}{#s/spiderLaugh}* What are you doing~{%40}"],
         coretext16: [">{*}{#p/basic}* No... NO!\n* I can't lose you too...!{%40}"],
         coretext17: [">{#p/napstablook}{*}* i can see it...", ">* i can see the instability."],
         coretext18: [
            ">{*}{#p/napstablook}* doesn't look like it could be anything else...",
            ">{*}* just gotta re-route the command pathways.",
            ">{*}* come on..."
         ],
         coretext19: [">{#p/napstablook}* ...", ">{#p/napstablook}* it worked..."],
         coretext20: [
            ">{#p/asgore}{#f/6}* What do we have here?",
            ">{#p/papyrus}{#f/0}ASGORE! WE DID IT!",
            ">{#p/papyrus}{#f/0}WE STOPPED THE EXPLOSION!",
            ">{#p/basic}* ... my cousin Blooky, they...",
            ">{#p/papyrus}{#f/5}THEIR COUSIN DID A VERY NOBLE THING."
         ],
         coretext21: [">{#p/asgore}{#f/1}* What is your name?"],
         coretext22: [
            ">{#p/basic}* Oh, me?",
            ">* Well, uh, I guess I don't really have one anymore.",
            ">* Just call me \"dummy,\" I guess."
         ],
         coretext23a: [
            ">{#p/asgore}{#f/1}* Listen... er, dummy.\n* You are not alone in your suffering.",
            ">{#f/2}* We have all lost people close to us today."
         ],
         coretext23b1: [">{#p/basic}{#s/spiderLaugh}* All except for me, of course~"],
         coretext23b2: [">{#p/basic}{#s/spiderLaugh}* Not that... I was close to anyone to begin with..."],
         coretext24a: [
            ">{#p/papyrus}{#f/5}WOWIE... IF THAT HUMAN HADN'T SPARED ME, I...",
            ">{#p/basic}* They spared you?\n* Yeah, they spared me too...",
            ">{#p/basic}{#s/spiderLaugh}* Ahuhu... I escaped before they could lay a hand on me~",
            ">{#p/papyrus}{#f/0}... OH, RIGHT!\nTHE CORE WORKERS!",
            ">{#p/papyrus}{#f/0}THEY PROBABLY SPARED THEM, TOO!"
         ],
         coretext24b: [">{#p/asgore}{#f/1}* ... tell me, was Asriel with the human when they spared you?"],
         coretext25: [
            ">{#p/papyrus}{#f/9}NOT AT ALL!",
            ">{#p/basic}* Nope.",
            ">{#p/basic}{#s/spiderLaugh}* Thinking back, I don't believe it was him~",
            ">{#p/asgore}{#f/1}* ...",
            ">{#p/asgore}{#f/1}* So it is true...",
            ">{#p/asgore}{#f/2}* ... perhaps...\n* I was wrong to condemn them to...",
            ">{#p/papyrus}{#f/6}...\nCONDEMN THEM??",
            ">{#p/papyrus}{#f/7}WHAT ARE YOU TALKING ABOUT!!"
         ],
         coretext26: [">{*}{#p/papyrus}{#f/7}ASGORE, WHAT DID YOU DO!?{^40}{%}"],
         coretext27a: "{*}{#p/event}{#i/3}The outpost was\ndestroyed.",
         coretext27b: "{*}{#p/event}{#i/3}The outpost was saved.",
         respawn0: () =>
            [
               [
                  [
                     ">{#p/asriel2}{#f/15}* You probably should've used a SAVE point after we left Starton.",
                     ">{#p/asriel2}{#f/16}* Just saying."
                  ],
                  [
                     ">{#p/asriel2}{#f/15}* You probably should've used a SAVE point after we killed Undyne.",
                     ">{#p/asriel2}{#f/16}* Just saying."
                  ],
                  [
                     ">{#p/asriel2}{#f/15}* You probably should've used a SAVE point after we left Aerialis.",
                     ">{#p/asriel2}{#f/16}* Just saying."
                  ],
                  [
                     ">{#p/asriel2}{#f/15}* Did you poison yourself after the fight to see what would happen?",
                     ">{#p/asriel2}{#f/16}* $(name), you're a real piece of work."
                  ]
               ],
               [
                  [
                     ">{#p/asriel2}{#f/6}* You'd think after last time you would've\nlearnt to save progress.",
                     ">{#p/asriel2}{#f/8}* Even if it's only Starton we have to go through again.",
                     ">{#p/asriel2}{#f/7}* But I guess not."
                  ],
                  [
                     ">{#p/asriel2}{#f/6}* You'd think after last time you would've\nlearnt to save progress.",
                     ">{#p/asriel2}{#f/8}* Especially after taking out someone like Undyne.",
                     ">{#p/asriel2}{#f/7}* But I guess not."
                  ],
                  [
                     ">{#p/asriel2}{#f/6}* You'd think after last time you would've\nlearnt to save progress.",
                     ">{#p/asriel2}{#f/8}* Especially after clearing an area like Aerialis.",
                     ">{#p/asriel2}{#f/7}* But I guess not."
                  ],
                  [">{#p/asriel2}{#f/7}* This is becoming very tiresome, very quickly."]
               ],
               [
                  [">{#p/asriel2}{#f/4}* $(name).\n* Please save our progress from now on."],
                  [">{#p/asriel2}{#f/4}* $(name).\n* Please save our progress from now on."],
                  [">{#p/asriel2}{#f/4}* $(name).\n* Please save our progress from now on."],
                  [">{#p/asriel2}{#f/4}* Now you're just being downright annoying."]
               ],
               [
                  [">{#p/asriel2}{#f/8}* Come on..."],
                  [">{#p/asriel2}{#f/8}* Come on..."],
                  [">{#p/asriel2}{#f/8}* Come on..."],
                  [">{#p/asriel2}{#f/8}* Come on..."]
               ]
            ][Math.min(SAVE.flag.n.ga_asrielRespawn0++, 3)][Math.floor(SAVE.flag.n._genocide_milestone_last / 2)],
         respawn1: () =>
            [
               [
                  ">{#p/asriel2}{#f/15}* We're back here?",
                  ">{#p/asriel2}{#f/16}* We'll just kill him again, I guess."
               ],
               [">{#p/asriel2}{#f/6}* Really?"],
               [">{#p/asriel2}{#f/6}* ..."]
            ][Math.min(SAVE.flag.n.ga_asrielRespawn1++, 2)],
         respawn2: () =>
            [
               [
                  ">{#p/asriel2}{#f/15}* And we're back here again.\n* Great...",
                  ">{#p/asriel2}{#f/16}* No problem, though...\n* We can just do what we did before..."
               ],
               [">{#p/asriel2}{#f/8}* This is really starting to get annoying."],
               [">{#p/asriel2}{#f/8}* ..."]
            ][Math.min(SAVE.flag.n.ga_asrielRespawn2++, 2)],
         respawn4: () =>
            [
               [
                  ">{#p/asriel2}{#f/15}* $(name), we were almost to the end.",
                  ">{#p/asriel2}{#f/16}* Can we please just save our progress this time."
               ],
               [">{#p/asriel2}{#f/10}* ... is this some kind of a joke?"],
               [">{#p/asriel2}{#f/10}* ..."]
            ][Math.min(SAVE.flag.n.ga_asrielRespawn4++, 2)],
         respawn6: () =>
            [
               [
                  ">{#p/asriel2}{#f/15}* $(name)。\n* 听我说。",
                  ">{#p/asriel2}{#f/7}* 我们已经干掉她了。",
                  ">{#p/asriel2}{#f/5}* 都这样了，回溯时间干嘛呢？"
               ],
               [">{#p/asriel2}{#f/7}* ...你逗我呢？"],
               [">{#p/asriel2}{#f/7}* ..."]
            ][Math.min(SAVE.flag.n.ga_asrielRespawn6++, 2)],
         respawn7: () =>
            [
               [
                  ">{#p/asriel2}{#f/15}* What the...",
                  ">{#p/asriel2}{#f/15}* I could've sworn we were in the shuttle..."
               ],
               [
                  ">{#p/asriel2}{#f/10}* $(name), did you...",
                  ">{#p/asriel2}{#f/16}* ... no...\n* You wouldn't do that..."
               ],
               [
                  ">{#p/asriel2}{#f/15}* ...",
                  ">{#p/asriel2}{#f/15}* $(name)?",
                  ">{#p/human}* (It appears Asriel is deep in thought.)"
               ],
               [">{#p/asriel2}{#f/15}* ...", ">{#p/human}* (It appears Asriel is deep in thought.)"]
            ][Math.min(SAVE.flag.n.ga_asrielRespawn7++, 3)],
         respawnWitnessA: () =>
            [
               [">{#p/asriel2}{#f/9}* 怎么回事？", ">{#p/asriel2}{#f/10}* ...谁攻击了我们？"],
               [">{#p/asriel2}{#f/15}* 我们...", ">{#p/asriel2}{#f/10}* ...被一道电魔法击中了？"],
               [
                  ">{#p/asriel2}{#f/3}* Alphys。\n* 肯定是她。",
                  ">{#p/asriel2}{#f/15}* 她原来没逃跑吗...",
                  ">{#p/asriel2}{#f/16}* 好吧，还算有点意思。"
               ]
            ][SAVE.flag.n.ga_asrielWitness++],
         respawnWitnessB: (wit: number) =>
            wit > 0
               ? [
                  ">{#p/asriel2}{#f/15}* 原来是Alphys...",
                  ">{#p/asriel2}{#f/16}* 好吧，还算有点意思。"
               ]
               : [
                  ">{#p/asriel2}{#f/15}* 她原来没逃跑吗...",
                  ">{#p/asriel2}{#f/16}* 好吧，还算有点意思。"
               ]
      },
      truetext: {
         monologue1: () => [
            ">{#p/basic}* Wait.",
            SAVE.data.b.flirt_papyrus
               ? ">* I think you forgot to date Papyrus..."
               : ">* I think you forgot to hang out with Papyrus...",
            ">* ... come on, we can't just leave him behind!"
         ],
         monologue2: [
            ">{#p/basic}* Wait.",
            ">* Didn't Papyrus want you to hang out with Undyne earlier?",
            ">* ... come on, we can't just forget about her!",
            ">* Even if she's a bit of a jerk."
         ],
         monologue3: [
            ">{#p/basic}* Wait.",
            ">* You forgot about Undyne!",
            ">* First Papyrus, and now this?",
            ">* ... come on, let's go back to her house..."
         ],
         storyEnding: () => [
            ">{#p/basic}* ...\n* So now you know.",
            ">* And, because of Asriel's diary, you know I got sick on purpose.",
            ">* I tricked him, manipulated him into this stupid plan to save everyone.",
            ">* Only to turn it into a quest for revenge, and even that was a waste in the end.",
            ">* He stopped me from fighting back, and I was mad at him for so long...",
            ">* ...",
            ">* Maybe... part of me still is.",
            ">* I don't know.",
            ">* I always think about how things could have been, if only he'd listened...",
            ">* ... but at the same time...",
            ">* It was probably for the best that he didn't.",
            ">* ...",
            ">* Look... I just want you to know that, having you by my side...",
            ">* It's made me feel like I have a purpose in this world.",
            ">* So, for that, I'm thankful.",
            ">* I really feel like things are going to get better.",
            ">* Or maybe... the end is nearer than I thought.",
            ">* ...\n* Either way.",
            ">* The force field isn't too far from here.",
            ...(SAVE.data.n.plot_date < 2.1
               ? [
                  ">* Though, before we go...",
                  ...(SAVE.data.n.plot_date < 1.1
                     ? [
                        ">* We should really go back to see Papyrus.",
                        ">* You wouldn't want to keep him waiting at his house, would you?"
                     ]
                     : [
                        ">* We should really go back to see Undyne.",
                        ">* You wouldn't want to keep Papyrus waiting at her house, would you?"
                     ])
               ]
               : [
                  ">* I'm sure you've had enough of my rambling, so we should probably just get going.",
                  ">* Who knows.\n* Maybe it'll make sense once the force field is down.",
                  ">* ...\n* We'll see."
               ])
         ],
         epilogue: [
            () => [
               ">{#p/basic}* That's not to say we have to go and find him right this second.",
               ">* It's just...",
               ">* ...",
               ">{#p/human}* (You hear a large sigh.)",
               ">{#p/basic}* Frisk...",
               ">* There's still something I haven't told you yet.",
               ">* It's about my past, and...",
               ">* It's the reason why I'm so desperate to talk to him.",
               ">* I'm sorry.",
               ">* I just...",
               ">* I need to tell you how I got this way.",
               ">* I need you to understand."
            ],
            () => [
               ">{#p/basic}* Frisk...",
               ">* Can you imagine what it's like to lose your whole family in one night?",
               ">* Can you imagine...",
               ">* What it's like to know that you're the one to blame?",
               ">* ...",
               ">* For the past hundred years...",
               ">* It's like I've been stuck in limbo.",
               ">* No matter how hard I try...",
               ">* I just can't seem to break away.",
               ">* ...",
               ">* I've been forced to watch as everyone else gets to live their life.",
               ">* I see them make friends...",
               ">* I see them laugh, and love...",
               ">* But that's... all I ever do.",
               ">* I just... see them.",
               ">* Nothing more."
            ],
            () => [
               ">{#p/basic}* When the ghost family found me, mere days after the incident...",
               ">* I thought, maybe, this wouldn't be so bad.",
               ">* I might be trapped in purgatory, but...",
               ">* ... at least I'd have people to talk to, right?",
               ">* ...",
               ">* They tried to help me...",
               ">* They tried to make me feel at home...",
               ">* ... but they just couldn't understand what I was going through.",
               ">* They were all so young...",
               ">* To be honest, they still kind of are.",
               ">* Monsters are like children in that way...",
               ">* Their innocence is what defines them.",
               ">* But it meant they didn't really know how to relate to me.",
               ">* ...",
               ">* Since then...",
               ">* ... I've been on my own."
            ],
            () => [
               ">{#p/basic}* With all these years to myself...",
               ">* With nothing to do but sit, and think...",
               ">* It's a miracle I haven't gone insane.",
               ">* Hell, maybe that, too, is part of my \"punishment.\"",
               ">* Not through death, nor insanity, nor common company...",
               ">* Not through any means am I ever allowed an escape.",
               ">* ...\n* But there's a problem with that theory.",
               ">* An exception.",
               ">* Can you guess what it is?",
               ">* I'm sure you've figured it out by now...",
               ">* ...",
               ">* It's you, Frisk.",
               ">* You're the only one who's truly been able to understand me."
            ],
            () => [
               ">{#p/basic}* You might think the other humans would've heard me...",
               ">* ... but no.",
               ">* Sometimes, I'd get a word in, or...",
               ">* Appear to them in a dream if I got lucky.",
               ">* But you...",
               ">* Maybe it's because our SOULs are so similar, but...",
               ">* Not only can you hear me...",
               ">* I can \"hear\" you, too.",
               ">* It's not much, but it's enough to know what you're thinking.",
               ">* For example, right now...",
               ">* ...",
               ">* Frisk, you...",
               ">* ... you know that isn't possible, right?",
               choicer.create("* (How will you hug?", "Softly", "Tightly", "Carefully", "Desperately"),
               ">{#p/basic}* ... silly Frisk.",
               ">* If I could accept it, I would.",
               ">* But... I can't."
            ],
            () => [
               ">{#p/basic}* ... Frisk, I...",
               ">* I know I seem like the last person who'd say something like this, but...",
               ">* I really love you, Frisk.",
               ">* Just like I loved him.",
               ">* We're like... a family now.",
               ">* Heh.",
               ">* ... thanks for giving me the chance to experience the world like new again.",
               ">* ... thanks for being the kind of person that you are.",
               ">* But... Frisk.",
               ">* I'm not sure if I have a future in this world.",
               ">* Once you're gone...",
               ">* ... I'd just go back to being alone again.",
               ">* That's why... it's important I get to talk to him, you know?",
               ">* At least then, I'd be able to move on from what happened.",
               ">* A lonely existence... wouldn't be so bad after that.",
               ">* But... I know.",
               ">* I'm sure there's a lot of people you'd like to catch up with first.",
               ">* So, go and do that, and then...",
               ">* Once you're ready...",
               ">* ... we'll go and find him.",
               ">* Alright?",
               ">* ...",
               ">* Well, that's all.",
               ">* Let's continue, shall we?"
            ]
         ]
      },
      npc: {
         picnic_oni: pager.create(
            0,
            [
               ">{#p/basic}{#npc/a}* I've never been to the so- called Citadel, but it's nice.",
               ">* Despite being a full-on city, it's still easier to navigate than the rest of the outpost!",
               ">* Now isn't that something."
            ],
            [">{#p/basic}{#npc/a}* I've never been one for mazes and strange puzzles.\n* So this really is great."]
         ),
         picnic_clamguy: pager.create(
            0,
            [
               ">{#p/basic}{#npc/a}* Crazy to think they built this city in such a short period of time.",
               ">* And unlike Aerialis, they didn't resort to weird space anomalies to make it bigger.",
               ">* But all that technobabble's beyond me, anyway.\n* It's just good to be here."
            ],
            [">{#p/basic}{#npc/a}* A life free of nonsensical technical terms...\n* Peace, at last."]
         ),
         picnic_charles: pager.create(
            0,
            [
               ">{#p/basic}{#npc/a}* Don't mind me, I'm just hanging out here with my best pals!",
               ">* Working at the CORE was really hard... but we are all done now.",
               ">* Here, we can celebrate our amazing work!",
               ">* I sure do love HANGOUT!"
            ],
            [">{#p/basic}{#npc/a}* I can tell you love it too!"]
         ),
         picnic_proskater: pager.create(
            0,
            [
               ">{#p/basic}{#npc/a}* So... no more school?\n* I mean, it's my fault for going, really.",
               ">* Nobody actually has to go to school, but you might be worse off without it.",
               ">* Whatever.\n* I guess I still don't know what I want in life."
            ],
            [">{#p/basic}{#npc/a}* Going to parties like this all the time could be fun..."]
         ),
         picnic_papyrus: pager.create(
            0,
            [
               ">{#p/papyrus}{#f/0}{#npc/a}HELLO THERE, FRISK!",
               ">{#f/9}I'M ONLY PREPARING THE GREATEST DISH I'VE EVER MADE!",
               ">{#f/5}I ONLY WISH IT'D COOK A LITTLE FASTER...",
               ">{#f/0}AT THIS RATE, I'LL HAVE TO SERVE IT ON THE TRANSPORT!",
               ">{#p/sans}{#npc}* actually, i think that'd be pretty cool.",
               ">{#p/sans}{#f/3}* imagine, everyone eating it as they first see the homeworld...",
               ">{#p/sans}{#f/2}* it'd be a dish they'd NEVER forget.",
               ">{#p/papyrus}{#f/4}{#npc/a}YOU MAKE A TEMPTING OFFER...",
               ">{#p/papyrus}{#f/5}BUT I ALREADY PROMISED I'D GET IT MADE HERE."
            ],
            [
               ">{#p/papyrus}{#f/5}{#npc/a}HEY.\nIT'S NOT ALL BAD.",
               ">{#f/0}THE SEASONING IN ASGORE'S KITCHEN IS EXCELLENT!",
               ">{#f/4}SALT, PEPPER...\nANTI-GRAVITY POWDER...",
               ">{#f/9}THE POSSIBILITIES ARE... RATHER ZESTY!!"
            ],
            [
               ">{#p/papyrus}{#f/0}{#npc/a}DON'T WORRY, I WON'T GET -TOO- CRAZY.",
               ">{#f/5}IT'S NOT LIKE I'D TAKE SUCH A BIG GAMBLE...",
               ">{#f/0}WITH SUCH A VAST PARTY OF GUESTS TO FEED.",
               ">{#f/9}BESIDES, THE RECIPE SPECIFIES THE SEASONING!",
               ">{#f/4}I HEAR IT FLOATS IN YOUR MOUTH..."
            ],
            [">{#p/papyrus}{#f/0}{#npc/a}NOTHING TO WORRY ABOUT AT ALL."]
         ),
         picnic_kidd: pager.create(
            0,
            () =>
               SAVE.data.b.f_state_kidd_betray
                  ? [">{#p/kidd}{#f/4}{#npc/a}* Yo, uh...", ">{#f/4}* I think you should just leave me alone."]
                  : [
                     ">{#p/kidd}{#f/2}{#npc/a}* I'm gonna miss this place, dude...",
                     ">{#f/3}* Starton, the Foundry, Aerialis, the Citadel...",
                     ">{#f/6}* At least we'll still be together on the new homeworld.",
                     ">{#f/1}* I can't wait to see what it's like out there!"
                  ],
            () =>
               SAVE.data.b.f_state_kidd_betray
                  ? [">{#p/kidd}{#f/4}{#npc/a}* ..."]
                  : [
                     ">{#p/kidd}{#f/1}{#npc/a}{#f/4}* ... oh, uh, I know you probably figured it out, but...",
                     ">{#f/4}* I don't really have parents.\n* I just made them up.",
                     ">{#f/3}* But we're friends now, right? So... I hope you can forgive me for that."
                  ],
            () =>
               SAVE.data.b.f_state_kidd_betray
                  ? [">{#p/kidd}{#f/4}{#npc/a}* Go away..."]
                  : [">{#p/kidd}{#f/3}{#npc/a}* Thanks for being a good friend, Frisk."]
         ),
         picnic_dragon: pager.create(
            0,
            [
               ">{#p/basic}{#npc/a}* So you're telling me we can't leave until everyone's ready?",
               ">* I, uh, I guess that's only fair, huh.",
               ">* Well, it's okay, then."
            ],
            [">{#p/basic}{#npc/a}* What am I even complaining about?\n* We're free..."]
         ),
         tvfish: pager.create(
            0,
            () =>
               player.face !== 'up' // NO-TRANSLATE

                  ? []
                  : [
                     ">{#p/undyne}{#f/14}{#npc/a}* Those girls who run the rec center found this movie on a trash run.",
                     ">{#f/1}* So, Alphys and I decided we'd put it on.",
                     ">{#f/8}* FUHUHU!!\n* THIS IS THE BEST DATE I'VE EVER HAD!!",
                     ">{#f/12}* And, uh, I guess it's also the only date I've ever had.",
                     ">{#f/7}* BUT STILL!"
                  ],
            () =>
               player.face !== 'up' // NO-TRANSLATE

                  ? []
                  : [
                     ">{#p/undyne}{#f/1}{#npc/a}* I never realized watching movies could be so addicting!",
                     ">{#p/undyne}{#f/12}{#npc/a}* Now...\n* If you could leave us to it..."
                  ],
            () =>
               player.face !== 'up' // NO-TRANSLATE

                  ? []
                  : [">{#p/undyne}{#f/7}{#npc/a}* Come on, you're blocking the view!"]
         ),
         tvlizard: pager.create(
            0,
            () =>
               player.face !== 'up' // NO-TRANSLATE

                  ? []
                  : SAVE.data.b.c_state_secret3 && !SAVE.data.b.c_state_secret3_used
                     ? ((SAVE.data.b.c_state_secret3_used = true),
                        [
                           ">{#p/alphys}{#g/alphysInquisitive}{#npc/a}* ... huh?\n* You wanted to tell me something?",
                           ">{#p/human}* (You recite the scientific notes shared by Professor Roman in Archive Six.)",
                           ">{#p/alphys}{#g/alphysOhGodNo}* Woah... woah!",
                           ">{#g/alphysNervousLaugh}* This could be the key to solving intergalactic travel...",
                           ">{#g/alphysHellYeah}* ... with wormholes!",
                           ">{#g/alphysWelp}* I've been trying to crack this for so long..."
                        ])
                     : [
                        ">{#p/alphys}{#g/alphysCutscene1}{#npc/a}* After all these years, we finally found it!",
                        ">{#g/alphysHellYeah}* The third movie in the Mew Mew trilogy...\n* Mew Mew Time Twist!",
                        ">{#g/alphysWelp}* Also known as the TRUE sequel to Mew Mew Space Adventure.",
                        ">{#g/alphysYeahYouKnowWhatsUp}* This film puts Starfire to shame..."
                     ],
            () =>
               player.face !== 'up' // NO-TRANSLATE

                  ? []
                  : [
                     ">{#p/alphys}{#g/alphysHellYeah}{#npc/a}* It's about time!",
                     ">{#p/alphys}{#g/alphysFR}{#npc/a}* ... but if you don't mind..."
                  ],
            () =>
               player.face !== 'up' // NO-TRANSLATE

                  ? []
                  : [">{#p/alphys}{#g/alphysYupEverythingsFine}{#npc/a}* Movie first, talk later."]
         ),
         picnic_asgore: pager.create(
            0,
            () => [
               SAVE.data.b.c_state_secret5_used
                  ? ">{#p/asgore}{#npc/a}{#f/1}* Do not worry, Frisk.\n* I have not forgotten about the promise."
                  : ">{#p/asgore}{#npc/a}{#f/6}* Do not mind me, Frisk.\n* I am only looking for new clothes.",
               ...(SAVE.data.b.c_state_secret5 && !SAVE.data.b.c_state_secret5_used
                  ? ((SAVE.data.b.c_state_secret5_used = true),
                     [
                        ">{#p/asgore}{#npc/a}{#f/21}* Oh?\n* You have something to tell me?",
                        ">{#npc}{#p/human}* (You repeat the promise made to you by Asgore in Archive Six.)",
                        ">{#p/asgore}{#npc/a}{#f/8}* ...！",
                        ">{#f/1}* Frisk...",
                        ">{#f/1}* ... I am not sure I can do that, but...",
                        ">{#f/6}* For you, I will try."
                     ])
                  : [])
            ],
            () =>
               SAVE.data.b.c_state_secret5_used
                  ? [">{#p/asgore}{#npc/a}{#f/1}* I only hope that I can get through to her."]
                  : [">{#p/asgore}{#npc/a}{#f/6}* I wonder if humans like wearing brown."],
            () =>
               SAVE.data.b.c_state_secret5_used
                  ? [">{#p/asgore}{#npc/a}{#f/2}* ..."]
                  : [">{#p/asgore}{#npc/a}{#f/21}* La la, la la..."]
         )
      },
      story: {
         lv20: [">{#p/human}* (The sound of a spacecraft can be heard as you take off into the distance.)"],
         postnoot0: () =>
            world.trueKills === 0 && SAVE.data.n.state_foundry_undyne !== 1 && SAVE.flag.n.neutral_twinkly_choice === 0
               ? [
                  ">{*}{#p/twinkly}{#f/19}{#e/twinkly/1}Why...?",
                  ">{*}{#e/twinkly/2}Why did you let me go?",
                  ">{*}{#e/twinkly/6}Don't you realize that being nice...",
                  ">{*}{#e/twinkly/7}... only hurts you in the end?",
                  ">{*}{#e/twinkly/5}Look at yourself.",
                  ...(SAVE.data.b.ultrashortcut
                     ? [
                        ">{*}{#e/twinkly/3}You've made all these wonderful...",
                        ">{*}{#e/twinkly/4}... uh...",
                        ">{*}{#e/twinkly/0}Shoot, I forgot you skipped over the entire journey.",
                        ">{*}{#e/twinkly/24}Eh, screw it.\nIt would've been a really sappy speech anyway.",
                        ">{*}{#e/twinkly/15}... let's just cut to the chase, shall we?",
                        ">{*}{#e/twinkly/21}..."
                     ]
                     : [
                        ">{*}{#e/twinkly/3}You've made all these wonderful friends...",
                        ">{*}{#e/twinkly/4}But now, you'll probably never get to see them again.",
                        ">{*}{#e/twinkly/0}Not to mention how long they'll have to wait for the next human.",
                        ">{*}{#e/twinkly/1}Hurts, doesn't it?",
                        ...(1 <= SAVE.flag.n.killed_sans
                           ? SAVE.flag.n.genocide_milestone < 7
                              ? [">{*}{#e/twinkly/7}If you had just stuck with our ORIGINAL plan..."]
                              : [">{*}{#e/twinkly/7}If you had just acted like when we were together..."]
                           : [">{*}{#e/twinkly/7}If you had just gone through without caring about anyone..."]),
                        ">{*}{#e/twinkly/1}You wouldn't have to feel bad now.",
                        ">{*}{#e/twinkly/8}So... I don't get it.",
                        ">{*}{#e/twinkly/13}If you really did everything the right way...",
                        ">{*}{#e/twinkly/1}Why did things still end up like this?",
                        ">{*}{#e/twinkly/2}Why...?",
                        ">{*}{#e/twinkly/2}Is life really that unfair?",
                        ">{*}{#e/twinkly/3}...",
                        ">{*}{#e/twinkly/0}... say."
                     ]),
                  ">{*}{#e/twinkly/21}What if I told you...",
                  ">{*}{#e/twinkly/15}I knew some way to get you a better ending?",
                  ...(SAVE.data.b.ultrashortcut || SAVE.data.s.room === '' || SAVE.data.s.room === spawn // NO-TRANSLATE

                     ? [">{*}{#e/twinkly/20}You'll have to start over, and..."]
                     : [">{*}{#e/twinkly/20}You'll CONTINUE from here, and..."]),
                  ...(SAVE.data.n.plot_date === 2.1
                     ? [
                        ">{*}{#e/twinkly/15}Well, in the meantime, why don't you go back to Asgore?",
                        ">{*}{#e/twinkly/17}As long as you behave, I PROMISE I won't kill him."
                     ]
                     : 1.1 <= SAVE.data.n.plot_date
                        ? [
                           ">{*}{#e/twinkly/15}Well, in the meantime, why don't you go see Undyne?",
                           ">{*}{#e/twinkly/15}It seems like you could have been better friends.",
                           ">{*}{#e/twinkly/20}Who knows?",
                           ">{*}{#e/twinkly/17}Maybe she's got the key to your happiness?"
                        ]
                        : [
                           ">{*}{#e/twinkly/15}Well, in the meantime, why don't you go see Papyrus, then Undyne?",
                           ">{*}{#e/twinkly/15}It seems like you could have all been better friends.",
                           ">{*}{#e/twinkly/20}Who knows?",
                           ">{*}{#e/twinkly/17}Maybe they've got the key to your happiness?"
                        ]),
                  ">{*}{#e/twinkly/0}...",
                  ">{*}{#e/twinkly/15}See you soon."
               ]
               : [
                  ">{*}{#p/twinkly}{#f/19}{#e/twinkly/0}Hey.",
                  ">{*}{#e/twinkly/0}Since you defeated me, I've been thinking.",
                  ...(world.trueKills > 0 || SAVE.data.n.state_foundry_undyne === 1
                     ? [
                        ">{*}{#e/twinkly/2}Is it truly necessary to kill...?",
                        ">{*}{#e/twinkly/3}I...",
                        ...(1 <= SAVE.flag.n.killed_sans
                           ? [
                              ">{*}{#e/twinkly/1}I enjoyed what we did in the past together, but...",
                              ">{*}{#e/twinkly/2}In the end, what did it really get us?"
                           ]
                           : [
                              ">{*}{#e/twinkly/4}I honestly can't be sure anymore.",
                              ">{*}{#e/twinkly/2}In the end, what does it really get you?"
                           ]),

                        ">{*}{#e/twinkly/13}A rush of pleasure, and then..."
                     ]
                     : [
                        ">{*}{#e/twinkly/2}After sparing everyone else, was killing me really worth it...?",
                        ">{*}{#e/twinkly/3}You...",
                        ...(1 <= SAVE.flag.n.killed_sans
                           ? [
                              ">{*}{#e/twinkly/1}You might regret what we did in the past together, but...",
                              ">{*}{#e/twinkly/2}Can you honestly say killing me made up for that?"
                           ]
                           : [
                              ">{*}{#e/twinkly/4}You might not like me for what I've done, but...",
                              ">{*}{#e/twinkly/2}Can you honestly say killing me made any difference?"
                           ]),
                        ">{*}{#e/twinkly/13}Perhaps you felt some catharsis, but after that..."
                     ]),
                  ">{*}{#e/twinkly/3}... nothing.",
                  ">{*}{#e/twinkly/0}...",
                  ">{*}{#e/twinkly/0}I have an idea.",
                  ...(world.trueKills > 0 || SAVE.data.n.state_foundry_undyne === 1
                     ? [
                        ">{*}{#e/twinkly/15}A challenge, if you will.",
                        ...(SAVE.data.s.room === '' || SAVE.data.s.room === spawn // NO-TRANSLATE

                           ? [">{*}{#e/twinkly/14}You'll have to start over, of course..."]
                           : [">{*}{#e/twinkly/14}You'll have to RESET, of course..."]),
                        ">{*}{#e/twinkly/15}But if you can prove to me that you're strong enough to survive...",
                        ">{*}{#e/twinkly/15}If you can get through, to the end from the beginning...",
                        ">{*}{#e/twinkly/0}... without killing a single thing...",
                        ">{*}{#e/twinkly/18}... then maybe, I won't kill the king."
                     ]
                     : [
                        ">{*}{#e/twinkly/15}A request, if you will.",
                        ...(SAVE.data.b.ultrashortcut || SAVE.data.s.room === '' || SAVE.data.s.room === spawn // NO-TRANSLATE

                           ? [">{*}{#e/twinkly/20}You'll have to start over, and..."]
                           : [">{*}{#e/twinkly/20}You'll CONTINUE from here, and..."]),
                        ">{*}{#e/twinkly/15}Well, in the meantime, see if you can get back to Asgore.",
                        ">{*}{#e/twinkly/17}See if you can do it without killing anyone."
                     ]),
                  ">{*}{#e/twinkly/20}You do want to know what he's planning, don't you?",
                  ">{*}{#e/twinkly/20}To see what lies in the depths of his precious \"archive?\"",
                  ">{*}{#e/twinkly/15}Well.",
                  ">{*}{#e/twinkly/15}Believe me when I tell you that what you saw with me...",
                  ">{*}{#e/twinkly/20}... doesn't even BEGIN to scratch the surface.",
                  ">{*}{#e/twinkly/17}Hee hee hee.",
                  ">{*}{#e/twinkly/18}I'll leave you to it!"
               ],
         postnoot1: (rep: number) =>
            rep < 2
               ? [
                  ">{*}{#p/twinkly}{#f/19}{#e/twinkly/17}I'm sorry, what's that?",
                  ...(rep < 1
                     ? [">{*}{#e/twinkly/17}You didn't get your happy ending?"]
                     : [">{*}{#e/twinkly/17}You STILL didn't get your happy ending?"]),
                  ...(SAVE.data.b.ultrashortcut
                     ? [
                        ">{*}{#e/twinkly/21}...",
                        ...(SAVE.flag.b.ultra_twinkly
                           ? [
                              ">{*}{#e/twinkly/21}Well gee, if it wasn't enough to do it before...",
                              ">{*}{#e/twinkly/16}You've gone and SKIPPED IT ALL AGAIN!",
                              ">{*}{#e/twinkly/15}Not that I'm surprised.",
                              ">{*}{#e/twinkly/15}You do seem like the type to break the rules.",
                              ">{*}{#e/twinkly/20}Eventually, you'll realize who you've been missing...",
                              ">{*}{#e/twinkly/15}And you'll go see them and make it back to the king.",
                              ">{*}{#e/twinkly/15}Preferably without killing a single thing.",
                              ">{*}{#e/twinkly/18}You know the drill!"
                           ]
                           : [
                              ">{*}{#e/twinkly/21}Well gee, I wonder why THAT might be...",
                              ">{*}{#e/twinkly/16}If only you didn't skip over THE ENTIRE JOURNEY!",
                              ">{*}{#e/twinkly/24}... but, whatever.",
                              ">{*}{#e/twinkly/23}Enjoy your special ending while it lasts."
                           ])
                     ]
                     : world.trueKills > 0 || SAVE.data.n.state_foundry_undyne === 1
                        ? [
                           ...(rep < 1
                              ? [
                                 ">{*}{#e/twinkly/20}...",
                                 ">{*}{#e/twinkly/20}Well, well...",
                                 world.trueKills > 1
                                    ? ">{*}{#e/twinkly/16}Maybe next time, don't KILL anyone!"
                                    : world.trueKills > 0
                                       ? ">{*}{#e/twinkly/16}Maybe next time, don't KILL someone!"
                                       : ">{*}{#e/twinkly/16}Maybe next time, don't leave someone to DIE!",
                                 ">{*}{#e/twinkly/15}If you can manage that, and manage to befriend Papyrus and Undyne...",
                                 ...(SAVE.data.b.ubershortcut
                                    ? [">{*}{#e/twinkly/15}You won't have to skip an entire area next time."]
                                    : [">{*}{#e/twinkly/15}You might actually get somewhere for once."])
                              ]
                              : [
                                 ">{*}{#e/twinkly/14}...",
                                 ">{*}{#e/twinkly/14}Goodness gracious...",
                                 world.trueKills > 1
                                    ? ">{*}{#e/twinkly/22}For the last time, don't KILL anyone!"
                                    : world.trueKills > 0
                                       ? ">{*}{#e/twinkly/22}For the last time, don't KILL someone!"
                                       : ">{*}{#e/twinkly/22}For the last time, don't leave someone to DIE!",
                                 ...(SAVE.data.b.ubershortcut
                                    ? [">{*}{#e/twinkly/22}And don't skip an entire area, either!"]
                                    : [">{*}{#e/twinkly/22}Why is that so difficult for you to grasp!"])
                              ])
                        ]
                        : [
                           ">{*}{#e/twinkly/0}...",
                           ...(SAVE.data.b.ultrashortcut || SAVE.data.s.room === '' || SAVE.data.s.room === spawn // NO-TRANSLATE

                              ? [">{*}{#e/twinkly/21}... maybe, if you start over..."]
                              : [">{*}{#e/twinkly/21}... maybe, if you CONTINUE from here..."]),
                           ...(rep < 1
                              ? [
                                 1.1 <= SAVE.data.n.plot_date
                                    ? ">{*}{#e/twinkly/15}You'll befriend Undyne this time."
                                    : ">{*}{#e/twinkly/15}You'll befriend Papyrus and Undyne this time.",

                                 ">{*}{#e/twinkly/14}The vaunted \"power of friendship...\"",
                                 ">{*}{#e/twinkly/23}Just this once, it might actually be good for something."
                              ]
                              : [
                                 1.1 <= SAVE.data.n.plot_date
                                    ? ">{*}{#e/twinkly/16}You'll finally befriend Undyne!"
                                    : ">{*}{#e/twinkly/16}You'll finally befriend Papyrus and Undyne!",
                                 ">{*}{#e/twinkly/20}After all, what's the harm in a little friendship?",
                                 ">{*}{#e/twinkly/15}It'll be fun for the whole family."
                              ])
                        ])
               ]
               : [
                  [
                     ">{*}{#p/twinkly}{#f/19}{#e/twinkly/15}... so...",
                     ">{*}{#e/twinkly/15}Get up to anything lately?",
                     ">{*}{#e/twinkly/15}Make any new friends?",
                     ">{*}{#e/twinkly/0}...",
                     ">{*}{#e/twinkly/17}Personally, I used to make friends ALL the time.",
                     ">{*}{#e/twinkly/20}Like Papyrus, for example.",
                     ">{*}{#e/twinkly/15}He won't remember this, but I once trained him to be a royal guard.",
                     ">{*}{#e/twinkly/18}In fact, I made him get promoted to captain!",
                     ">{*}{#e/twinkly/24}Granted... it wasn't easy.",
                     ">{*}{#e/twinkly/15}I miiiight've had to break his bones a few times.",
                     ">{*}{#e/twinkly/19}But after that, he toughened up real good!",
                     ">{*}{#e/twinkly/17}Funny how people change if you push the right buttons, huh?",
                     ">{*}{#e/twinkly/15}Anyway.\nThat timeline's gone now.",
                     ">{*}{#e/twinkly/20}But hey, if you come back here again...",
                     ">{*}{#e/twinkly/18}I'll tell you about some others."
                  ],
                  [
                     ">{*}{#p/twinkly}{#f/19}{#e/twinkly/20}Ready for another round of story time?",
                     ">{*}{#e/twinkly/15}Oh, who am I kidding.\nOf course you are.",
                     ">{*}{#e/twinkly/21}So, that room...",
                     ">{*}{#e/twinkly/0}The one with the boxes with humans inside.",
                     ">{*}{#e/twinkly/15}It's actually been pretty hard, even for me, to get into.",
                     ">{*}{#e/twinkly/24}In the earliest timelines, I resorted to... foolish methods.",
                     ">{*}{#e/twinkly/13}Begging...\nBargaining...\nFake-crying...",
                     ">{*}{#e/twinkly/4}I even tried using puppy-dog eyes to get Asgore to show them to me.",
                     ">{*}{#e/twinkly/0}I wanted to be \"nice,\" but none of those things worked.",
                     ">{*}{#e/twinkly/15}Of course, in later timelines, I knew how to get what I wanted.",
                     ">{*}{#e/twinkly/20}Suffocating everyone to death usually did the trick...",
                     ">{*}{#e/twinkly/16}But cranking the gravity up and crushing them was just as fun!",
                     ">{*}{#e/twinkly/15}Anyway, all I'm saying is that the room's protected.",
                     ">{*}{#e/twinkly/17}You're only getting in there because they WANT you in there.",
                     ">{*}{#e/twinkly/20}Well.\nThat's all for now.",
                     ">{*}{#e/twinkly/19}Bye-bye!"
                  ],
                  [
                     ">{*}{#p/twinkly}{#f/19}{#e/twinkly/14}Seriously?\nAgain?",
                     ">{*}{#e/twinkly/0}Wow.",
                     ">{*}{#e/twinkly/0}You must be getting really tired of this.",
                     ">{*}{#e/twinkly/15}But that's fine.\nI'm getting tired of it, too.",
                     ">{*}{#e/twinkly/20}I wonder...",
                     ">{*}{#e/twinkly/20}Are you THAT bad at following my instructions?",
                     ">{*}{#e/twinkly/20}Or are you just doing this on purpose?",
                     ">{*}{#e/twinkly/15}... eh, don't tell me.",
                     ">{*}{#e/twinkly/18}Knowing everything is no fun, anyway.",
                     ">{*}{#e/twinkly/15}Besides, I'm in a good mood.",
                     ">{*}{#e/twinkly/20}So... why not give you the benefit of the doubt?",
                     ">{*}{#e/twinkly/14}If you really are that much of an IDIOT...",
                     ">{*}{#e/twinkly/15}Come back here again, and I might have a way to help you.",
                     ">{*}{#e/twinkly/17}... until next time."
                  ],
                  [
                     ">{*}{#p/twinkly}{#f/19}{#e/twinkly/0}So you're back again.",
                     ">{*}{#e/twinkly/0}I'd ask you to explain yourself, but I don't really care.",
                     ">{*}{#e/twinkly/0}You came back, so... that means you need my help.",
                     ">{*}{#e/twinkly/21}...",
                     ">{*}{#e/twinkly/15}Listen.\nI'm only going to say this once.",
                     ">{*}{#e/twinkly/15}From now on, the monsters you encounter...",
                     ">{*}{#e/twinkly/15}Will have greatly reduced {@fill=#ff0}ATTACK{@fill=#fff}.",
                     ">{*}{#e/twinkly/20}Understand?\nTheir {@fill=#ff0}ATTACK{@fill=#fff} will be reduced.",
                     ">{*}{#e/twinkly/20}Which makes it easier to survive without gaining LOVE.",
                     ">{*}{#e/twinkly/15}Boy, it's a good thing the CORE controls the atmosphere.",
                     ">{*}{#e/twinkly/20}Otherwise, this wouldn't be possible!",
                     ">{*}{#e/twinkly/14}As for Papyrus and Undyne...",
                     ">{*}{#e/twinkly/23}Well, if you can't figure THAT out, then you're hopeless.",
                     ">{*}{#e/twinkly/15}Just don't be an idiot, and you'll be fine.",
                     ">{*}{#e/twinkly/15}... okay.\nThat's all.",
                     ">{*}{#e/twinkly/15}Good luck."
                  ],
                  [
                     ">{*}{#p/twinkly}{#f/19}{#e/twinkly/0}...",
                     ">{*}{#e/twinkly/0}... you're just trying to get a reaction out of me, aren'tcha?",
                     ">{*}{#e/twinkly/15}I see.\nI hope it was worth it.",
                     ">{*}{#e/twinkly/17}Because I'm NEVER coming back.",
                     ">{*}{#e/twinkly/0}Not until you do what I've told you to do.",
                     ">{*}{#e/twinkly/15}What?\nYou think you can just disobey me forever?",
                     ">{*}{#e/twinkly/15}... no.",
                     ">{*}{#e/twinkly/21}Sooner or later, you'll get bored...",
                     ">{*}{#e/twinkly/15}And your curiosity will inevitably get the better of you.",
                     ">{*}{#e/twinkly/23}Trust me.\nI know how this works.",
                     ">{*}{#e/twinkly/20}It applies humans and monsters all the same...",
                     ">{*}{#e/twinkly/17}Curiosity eventually gets the better of EVERYONE.",
                     ">{*}{#e/twinkly/16}Have your fun while it lasts, idiot!"
                  ]
               ][rep - 2],
         postnoot2: (rep: number, puzzlesolve: boolean, enemyweaken: boolean) => [
            ...((puzzlesolve || enemyweaken) && !SAVE.flag.b.neutral_reload_interloper
               ? [
                  ">{*}{#p/twinkly}{#f/19}{#e/twinkly/20}By the way...",
                  ...(puzzlesolve
                     ? [">{*}{#e/twinkly/15}You could thank me for solving those puzzles for you."]
                     : []),
                  ...(enemyweaken
                     ? [
                        puzzlesolve
                           ? ">{*}{#e/twinkly/15}Oh, and for screwing with the atmospheric system."
                           : ">{*}{#e/twinkly/15}You could thank me for screwing with the atmospheric system.",
                        ">{*}{#e/twinkly/21}I figured, if you DID want to kill anyone...",
                        ">{*}{#e/twinkly/15}I might as well weaken your opposition to make it easier."
                     ]
                     : []),
                  ">{*}{#e/twinkly/17}Wasn't that just so considerate of me?",
                  ">{*}{#e/twinkly/17}..."
               ]
               : []),
            ...(rep < 1
               ? [
                  ">{*}{#p/twinkly}{#f/19}{#e/twinkly/0}Like last time, I've given you Asgore's SOUL.",
                  ">{*}{#e/twinkly/0}Take it, and get out of my sight.",
                  ">{*}{#e/twinkly/20}And if you come back...",
                  ">{*}{#e/twinkly/15}Try to act a little more in line next time."
               ]
               : [
                  ">{*}{#p/twinkly}{#f/19}{#e/twinkly/0}Like always, I've given you Asgore's SOUL.",
                  ">{*}{#e/twinkly/0}Take it, and get out of my sight.",
                  ">{*}{#e/twinkly/20}And remember...",
                  ">{*}{#e/twinkly/15}This doesn't stop until you do exactly what I've told you."
               ])
         ],
         oof: [">{#p/human}* (You catch your breath...)"],
         killer1: [
            ">{*}{#p/twinkly}{#f/19}{#e/twinkly/15}Wow.",
            ">{*}{#e/twinkly/17}You really screwed things up, didn'tcha?",
            ">{*}{#e/twinkly/20}Not only did you lose control of the timeline...",
            ">{*}{#e/twinkly/15}But now, you can't get it back unless you start from scratch."
         ],
         killer2: [
            ">{*}{#p/twinkly}{#e/twinkly/14}I mean, hey.",
            ">{*}{#e/twinkly/23}If that's the ending you wanted, then...",
            ">{*}{#e/twinkly/15}Who am I to judge?",
            ">{*}{#e/twinkly/17}But you can't SERIOUSLY expect me to believe that, right?",
            ">{*}{#e/twinkly/17}That THIS is what you were trying to achieve?",
            ">{*}{#e/twinkly/15}I mean, sure.\nIt was interesting to watch.",
            ">{*}{#e/twinkly/17}But now that it's over..."
         ],
         killer3: [
            ">{*}{#p/twinkly}{#e/twinkly/15}... well.\nWe both know you can do better.",
            ">{*}{#e/twinkly/20}I'm not saying I'm some kind of saint or anything...",
            ">{*}{#e/twinkly/15}But, believe it or not, I'm on your side here.",
            ">{*}{#e/twinkly/15}I WANT you to regain control of the timeline.",
            ">{*}{#e/twinkly/17}After all, watching you sit here and do nothing...",
            ">{*}{#e/twinkly/17}Wouldn't be very entertaining now, would it?"
         ],
         killer4: [
            ">{*}{#p/twinkly}{#e/twinkly/15}... oh, and don't worry.",
            ">{*}{#e/twinkly/20}Even if I lose all my memories, what does it matter?",
            ">{*}{#e/twinkly/18}You'll remember.\nAnd you'll avoid this trap next time.",
            ">{*}{#e/twinkly/15}Then, we can go back to the way things were before.",
            ">{*}{#e/twinkly/20}So whaddya say?",
            ">{*}{#e/twinkly/20}Are you with me, $(name)?",
            "{*}{#e/twinkly/3}{%}"
         ],
         killer5: [
            ">{*}{#p/twinkly}{#e/twinkly/15}Oh, who am I kidding.",
            ">{*}{#e/twinkly/16}Of course you are!"
         ],
         please1: [
            ">{*}{#p/human}(...)",
            ">{*}(But still, the option remains.)",
            ">{*}(The option to erase everything you've ever known.)",
            ">{*}(The option to bring it all back to zero.)"
         ],
         please2: [
            ">{*}{#p/human}(...)",
            ">{*}(But you only want to live your life.)",
            ">{*}(You only want to see the future take hold.)",
            ">{*}(You only want to be yourself.)"
         ],
         please3: [
            ">{*}{#p/human}(...)",
            ">{*}(You thank the one beyond for what they have done...)",
            ">{*}(And ask that you be allowed to carry on.)"
         ],
         forget1: [">{*}{#p/human}(...)", ">{*}(You're so alone.)"],
         forget2: [">{*}{#p/human}(...)", ">{*}(You're so afraid.)"],
         forget3: [
            ">{*}{#p/human}(...)",
            ">{*}(You'd do anything to get another chance...)",
            ">{*}(... even if it means forgetting everything you've ever known.)"
         ],
         forget4: [
            ">{*}{#p/human}(...)",
            ">{*}(But the choice wasn't yours to make.)",
            ">{*}(It's someone else's choice, now.)"
         ],
         regret1: [">{*}{#p/twinkly}{#f/19}{#e/twinkly/0}Hi."],
         regret2: [
            ">{*}{#p/twinkly}{#f/19}{#e/twinkly/0}Seems as if everyone is perfectly happy.",
            ">{*}{#e/twinkly/0}Monsters have found their new homeworld.",
            ">{*}{#e/twinkly/0}Peace and prosperity will rule across the galaxy.",
            ">{*}{#e/twinkly/1}Take a deep breath.",
            ">{*}{#e/twinkly/2}There's nothing left to worry about."
         ],
         regret3: [
            ">{*}{#p/twinkly}{#f/19}{#e/twinkly/3}...",
            ">{*}{#e/twinkly/4}Well.",
            ">{*}{#e/twinkly/4}There is one thing.",
            ">{*}{#e/twinkly/5}One last... mystery.",
            ">{*}{#e/twinkly/6}Something I've been curious about for a long time."
         ],
         regret4: () => [
            ">{*}{#p/twinkly}{#f/19}{#e/twinkly/7}...",
            ">{*}{#e/twinkly/7}You see, in the Outlands, there's a room.",
            ...(SAVE.data.b.w_state_secret || SAVE.data.b.w_state_diary
               ? [
                  ">{*}{#e/twinkly/3}A room with a coffin, and a diary by its side....",
                  ">{*}{#e/twinkly/4}I... might have taken a peek after I noticed the door was open.",
                  ">{*}{#e/twinkly/6}...",
                  ">{*}{#e/twinkly/6}You did read it, didn't you?",
                  ">{*}{#e/twinkly/7}Maybe... you could have done more with what you saw."
               ]
               : [
                  ">{*}{#e/twinkly/3}A room so insignificant, you probably didn't even know it was there.",
                  ">{*}{#e/twinkly/4}Or, if you did... you've probably forgotten about it by now.",
                  ">{*}{#e/twinkly/6}...",
                  ">{*}{#e/twinkly/6}There's a key in Toriel's room to unlock it.",
                  ">{*}{#e/twinkly/7}Maybe... you could get it and go see what's in there."
               ]),
            ">{*}{#e/twinkly/10}...",
            ">{*}{#e/twinkly/10}I don't know.",
            ">{*}{#e/twinkly/10}I'm not really sure where I'm going with this.",
            ">{*}{#e/twinkly/9}...",
            ">{*}{#e/twinkly/9}To be honest...",
            ">{*}{#e/twinkly/1}I doubt if there's even any point to it.",
            ">{*}{#e/twinkly/2}Everyone's happy, right?",
            ">{*}{#e/twinkly/3}Toriel, Sans, Papyrus, Undyne, Alphys, Asgore...",
            ">{*}{#e/twinkly/4}Even Monster Kid, and... Napstablook.",
            ">{*}{#e/twinkly/2}Is it really worth starting all over because of... me?",
            ">{*}{#e/twinkly/2}...",
            ">{*}{#e/twinkly/10}Maybe I'm only telling you this, because... when I had your powers...",
            ">{*}{#e/twinkly/11}I might've considered doing the same in your place.",
            ">{*}{#e/twinkly/12}But now, the idea of resetting everything...",
            ">{*}{#e/twinkly/10}I...",
            ">{*}{#e/twinkly/10}I don't know if I could do it all again.",
            ">{*}{#e/twinkly/10}Not after that.",
            ">{*}{#e/twinkly/11}...",
            ">{*}{#e/twinkly/11}So, please.",
            ">{*}{#e/twinkly/11}Just be content with what you have.",
            ">{*}{#e/twinkly/7}It's not perfect, but...",
            ">{*}{#e/twinkly/5}... who ever said it had to be?"
         ],
         regret5: [
            ">{*}{#p/twinkly}{#f/19}{#e/twinkly/5}...",
            ">{*}{#e/twinkly/8}Well.",
            ">{*}{#e/twinkly/8}If I can't change your mind.",
            ">{*}{#e/twinkly/7}If you DO end up erasing everything...",
            ">{*}{#e/twinkly/6}...",
            ">{*}{#e/twinkly/2}You have to wipe MY memories, too.",
            ">{*}{#e/twinkly/7}...",
            ">{*}{#e/twinkly/6}I'm sorry.",
            ">{*}{#e/twinkly/2}You've probably heard this a hundred times already, haven't you...?",
            ">{*}{#e/twinkly/6}...",
            ">{*}{#e/twinkly/6}Well, that's all.",
            ">{*}{#e/twinkly/4}Until we meet again...",
            ">{*}{#e/twinkly/13}$(name)."
         ],
         asgoreStoryPre1: () =>
            world.bad_robot
               ? [
                  ">{#p/alphys}{#g/alphysSide}* H-h-hiya...\n* You...",
                  ">{#g/alphysSideSad}* You r-really enjoy killing people...\n* ... huh?",
                  ">{#g/alphysNervousLaugh}* I-I mean, I'm not judging, I just...",
                  ">{#g/alphysUhButHeresTheDeal}* I just think it's super duper cool!!!",
                  ">{#g/alphysSideSad}* S-so... like...",
                  ">{#g/alphysCutscene3}* Now maybe you'll think about not killing me???"
               ]
               : [">{#p/asgore}{#f/0}* Isn't it pretty...?", ">{#p/asgore}{#f/0}* ..."],
         asgoreStoryPre2: () =>
            world.bad_robot
               ? [">{*}{#p/alphys}{#g/alphysOhGodNo}* Behind you!!!{%}"]
               : [
                  ">{#p/asgore}{#f/6}* I apologize if I startled you, young one.",
                  ">{#p/asgore}{#f/6}* Alphys informed me of your arrival."
               ],
         asgoreStoryPre3: () => [
            ">{#p/asgore}{#f/7}* ...",
            ...(SAVE.flag.b.waaaaaooaaooooaaaaaaooohooohooohstooooryofunderrtaaaaale
               ? [
                  ">{#p/asgore}{#f/12}* Hm...?\n* You have already heard this story?",
                  ">{#p/asgore}{#f/5}* ...",
                  ">{#p/asgore}{#f/6}* Well.",
                  ">{#p/asgore}{#f/6}* If you have already heard it, there is no need to repeat it.",
                  ">{#p/asgore}{#f/6}* You may continue forth on your own."
               ]
               : [">{#p/asgore}{#f/7}* Come along.", ">{#p/asgore}{#f/7}* I would like to tell you a story."])
         ],
         alphysApproach1: [
            ">{#p/alphys}{#g/alphysSmileSweat}* Oh, y-you're probably wondering about where ASGORE is, right?",
            ">{#g/alphysNervousLaugh}* Well... he's...",
            ">{#g/alphysHellYeah}* S-somewhere safe!",
            ">{#g/alphysTheFactIs}* Relatively speaking.",
            ">{#g/alphysOhGodNo}* Or-\n* No, Absolutely!\n* Absolutely speaking!",
            ">{#g/alphysInquisitive}* So b-basically, you might as well... just give up.",
            ">{#g/alphysInquisitive}* Because...",
            ">{#g/alphysNervousLaugh}* You'll never find him!!",
            ">{#g/alphysHellYeah}* Yeah!\n* T-take that!"
         ],
         alphysApproach2: [
            ">{#p/alphys}{#g/alphysOhGodNo}* ...",
            ">{#g/alphysNervousLaugh}* ... eheh...",
            ">{#g/alphysNervousLaugh}* Got through like you always do, h-huh?",
            ">{#g/alphysNeutralSweat}* ...",
            ">{#g/alphysIDK2}* I guess you'll be going to meet ASGORE.",
            ">{#g/alphysIDK3}* ...",
            ">{#g/alphysIDK3}* I'm so pathetic...",
            ">{#g/alphysThatSucks}* You probably don't even care about me, right?",
            ">{#g/alphysIDK2}* All that time I was scared, you probably weren't even after me.",
            ">{#g/alphysIDK3}* ...",
            ">{#g/alphysIDK2}* Go.\n* Do whatever it is you're going to do.",
            ">{#g/alphysIDK3}* I can't stop you."
         ],
         alphysApproach3: [">{#p/alphys}{#g/alphysFR}* There's only one person who really could."],
         asgoreStory1: [
            ">{*}{#p/asgore}{#f/6}* A long time ago, a human child crash- landed on the outpost.{~}",
            ">{*}{#p/asgore}{#f/6}* Injured, they called out for help.{~}"
         ],
         asgoreStory1r: [">{#p/basic}* ...{%40}", ">{#p/basic}* I'm sorry.{%40}"],
         asgoreStory2: [
            ">{*}{#p/asgore}{#f/7}* Asriel, our first-born son, heeded the call.{~}",
            ">{*}{#p/asgore}{#f/7}* He brought them back home to our quarters.{~}"
         ],
         asgoreStory2r: [">{#p/basic}* I did the best I could.{%40}"],
         asgoreStory3: [
            ">{*}{#p/asgore}{#f/6}* Over time, the two children became like siblings.{~}",
            ">{*}{#p/asgore}{#f/6}* The outpost expanded, and so too did their kinship.{~}",
            ">{*}{#p/asgore}{#f/6}* The outpost was filled with hope.{~}"
         ],
         asgoreStory3r: [">{#p/basic}* I tried to follow my heart.{%40}"],
         asgoreStory4: [
            ">{*}{#p/asgore}{#f/1}* Then, one day...{~}",
            ">{*}{#p/asgore}{#f/2}* A sickness took the human by surprise.{~}"
         ],
         asgoreStory4r: [">{#p/basic}* I tried to do the right thing.{%40}"],
         asgoreStory5: [
            ">{*}{#p/asgore}{#f/1}* Fatally ill, the human had only one request.{~}",
            ">{*}{#p/asgore}{#f/1}* To see the remains of our once great and bountiful world.{~}",
            ">{*}{#p/asgore}{#f/2}* But there was nothing we could do.{~}"
         ],
         asgoreStory5r: [">{#p/basic}* All I wanted was for him to see the universe.{%40}"],
         asgoreStory6: [
            ">{*}{#p/asgore}{#f/1}* The next day...{~}",
            ">{*}{#p/asgore}{#f/1}* ...{~}",
            ">{*}{#p/asgore}{#f/2}* The human died.{~}"
         ],
         asgoreStory6r: [">{#p/basic}* All I wanted was for him to be happy.{%40}"],
         asgoreStory7: [
            ">{*}{#p/asgore}{#f/15}* Asriel, wracked with grief, absorbed their SOUL.{~}",
            ">{*}{#p/asgore}{#f/16}* Transforming into a being with unimaginable power.{~}"
         ],
         asgoreStory7r: [">{#p/basic}* I never wanted to...{%40}"],
         asgoreStory8: [
            ">{*}{#p/asgore}{#f/4}* With his newfound power, Asriel crossed the force field.{~}",
            ">{*}{#p/asgore}{#f/4}* The human's body in tow as he flew off in a small shuttle.{~}",
            ">{*}{#p/asgore}{#f/4}* Hoping to find those legendary artifacts.{~}"
         ],
         asgoreStory8r: [">{#p/basic}* ... to...{%40}"],
         asgoreStory9: [
            ">{*}{#p/asgore}{#f/1}* Soon, he stumbled onto what he was looking for.{~}",
            ">{*}{#p/asgore}{#f/1}* Landing amidst the broken, scattered pieces...{~}",
            ">{*}{#p/asgore}{#f/1}* The human's body was laid to rest.{~}"
         ],
         asgoreStory9r: [">{#p/basic}* ...{%40}"],


         asgoreStory10: [
            ">{*}{#p/asgore}{#f/5}* Suddenly, the shuttle's proximity alarm blared.{~}",
            ">{*}{#p/asgore}{#f/5}* Scavengers had seen him holding a human's body.{~}",
            ">{*}{#p/asgore}{#f/2}* They thought he had killed the child.{~}"
         ],
         asgoreStory11: [
            ">{*}{#p/asgore}{#f/2}* The humans attacked him with everything they had.{~}",
            ">{*}{#p/asgore}{#f/2}* Shot after shot, blow after blow...{~}",
            ">{*}{#p/asgore}{#f/2}* In this form, he had the power to destroy them all.{~}"
         ],
         asgoreStory12: [
            ">{*}{#p/asgore}{#f/4}* But...{~}",
            ">{*}{#p/asgore}{#f/4}* Asriel did not fight back.{~}"
         ],
         asgoreStory12r: [">{#p/human}* (You hear someone crying...){%40}"],
         asgoreStory13: [
            ">{*}{#p/asgore}{#f/9}* Clutching the human's body, Asriel took one last look outward...{~}",
            ">{*}{#p/asgore}{#f/9}* Then he smiled... and walked away.{~}"
         ],
         asgoreStory13r: [">{#p/basic}* I c-couldn't...\n* He d-d-didn't let m-me...{%40}"],
         asgoreStory14: [
            ">{*}{#p/asgore}{#f/1}* Wounded, Asriel flew the damaged shuttle back home.{~}",
            ">{*}{#p/asgore}{#f/1}* He exited the vehicle and collapsed.{~}",
            ">{*}{#p/asgore}{#f/2}* His dust spread across the grove.{~}"
         ],
         asgoreStory14r: [">{#p/basic}* ...{%40}"],
         asgoreStory15: [
            ">{*}{#p/asgore}{#f/13}* The outpost, MY outpost... fell into despair.{~}",
            ">{*}{#p/asgore}{#f/13}* We had lost two children in one night.{~}",
            ">{*}{#p/asgore}{#f/14}* Everything had once again been taken from us.{~}"
         ],
         asgoreStory15r: [">{#p/basic}* ... it's not fair...{%40}"],
         asgoreStory16: [
            ">{*}{#p/asgore}{#f/13}* In a fit of rage, I declared war on humanity.{~}",
            ">{*}{#p/asgore}{#f/13}* No matter the cost, I was going to set us free.{~}",
            ">{*}{#p/asgore}{#f/14}* ... and the people believed in me.{~}"
         ],
         asgoreStory16r: [">{#p/basic}* It's not fair...!{%40}"],
         asgoreStory17: [
            ">{*}{#p/asgore}{#f/3}* When I came to my senses, it was far too late to go back.{~}",
            ">{*}{#p/asgore}{#f/2}* The people had set their minds on war, and nothing could avert it.{~}",
            ">{*}{#p/asgore}{#f/5}* At least, nothing done publicly.{~}"
         ],
         asgoreStory18: () =>
            SAVE.data.b.killed_mettaton || world.baddest_lizard
               ? [
                  ">{*}{#p/asgore}{#f/5}* By now, Alphys must have told you about a certain secret.{~}",
                  ">{*}{#p/asgore}{#f/5}* An agreement between myself and the former royal scientist.{~}",
                  ">{*}{#p/asgore}{#f/6}* ... now, if only I knew what was holding up the current one...{~}"
               ]
               : [
                  ">{*}{#p/asgore}{#f/5}* By now, Alphys must have told you about a certain {@fill=#003cff}secret{@fill=#fff}.{~}",
                  ">{*}{#p/asgore}{#f/5}* An {@fill=#003cff}agreement{@fill=#fff} between myself and the former royal scientist.{~}",
                  ">{*}{#p/asgore}{#f/6}* ... ah, there she is.\n* I have been wondering when she would arrive.{~}"
               ],
         asgoreStory19: [
            ">{#p/alphys}{#g/alphysNervousLaugh}* Uh, s-sorry!\n* I got here as fast as I could!",
            ">{#p/asgore}{#f/6}* No need to rush.\n* Good things come to those who wait.",
            ">{#p/alphys}{#g/alphysWorried}* ... do you think they're ready?"
         ],
         asgoreStory20a: [
            ">{#p/asgore}{#f/7}* Young one, if you could excuse us for just a moment...",
            ">{#p/asgore}{#f/7}* Alphys and I have some things to discuss."
         ],
         asgoreStory20b: [
            ">{#p/alphys}{#g/alphysHellYeah}* Yeah, uh... j-just keep going forward, we'll be waiting for you!"
         ],
         asgoreStory21: [
            ">{#p/asgore}{#f/5}* How odd.\n* She does not appear to be here now.",
            ">{#p/asgore}{#f/5}* ... this is not what I had in mind."
         ],
         asgoreStory22: [
            ">{#p/asgore}{#f/5}* Well then.\n* If she wants to see me, she will have to wait.",
            ">{#p/asgore}{#f/5}* This cannot be delayed any further."
         ],


         jspeech1: () => [
            ">{#p/darksans}* So you finally made it.",
            ">* The end of your journey is at hand.",
            world.bad_robot || SAVE.data.b.ultrashortcut
               ? ">* In a few moments, you will meet with the king."
               : ">* In a few moments, you will meet once again with the king.",
            ">* Together...",
            ...(SAVE.data.b.ultrashortcut
               ? [
                  ">* ...",
                  ">* Something's wrong.",
                  ">* How did you arrive so quickly?",
                  ">* Did you, perhaps...",
                  ">* Take a {@fill=#ff0}shortcut{@fill=#fff} of some kind?"
               ]
               : [
                  ...(SAVE.data.b.water
                     ? [
                        ">* ...",
                        ">* You're really gonna carry that all the way, aren't you?",
                        ">* Heh.",
                        ">* But as I was saying..."
                     ]
                     : []),
                  ">* You will determine the future of monsterkind.",
                  ">* That's then.",
                  ">* Now.",
                  ">* You will be judged.",
                  ">* You will be judged for your every action.",
                  ">* You will be judged for every EXP you've earned.",
                  ">* What's EXP?",
                  ">* It's an acronym.",
                  ">* It stands for \"{@fill=#f00}execution points{@fill=#fff}.\"",
                  ">* A way of quantifying the pain you have inflicted on others.",
                  ">* When you kill someone, your EXP increases.",
                  ">* When you have enough EXP, your LOVE increases.",
                  ">* LOVE, too, is an acronym.",
                  ">* It stands for \"{@fill=#f00}Level of Violence{@fill=#fff}.\"",
                  ">* A way of measuring someone's capacity to hurt.",
                  ">* The more you kill, the easier it becomes to distance yourself.",
                  ">* The more you distance yourself, the less you will hurt.",
                  ">* The more easily you can bring yourself to hurt others."
               ])
         ],
         jspeechU1: () => [
            ">{#p/sans}{#f/3}* ...",
            ...[
               [
                  ">{#f/0}* wow, buddo.\n* how could you do such a thing to yourself.",
                  ">{#f/3}* don't get me wrong.\n* i like shortcuts as much as the next guy.",
                  ">{#f/2}* but don't you think you should take some time to reflect?"
               ],
               [
                  ">{#f/0}* by your expression, i can tell this isn't even your first time.",
                  ">{#f/3}* ... i don't blame you.\n* getting around quickly can be a ton of fun.",
                  ">{#f/2}* but you still have to take time to reflect!\n* it's important."
               ]
            ][Math.min(SAVE.flag.n.meet3++, 1)]
         ],
         jspeechU2: [
            ">{#p/sans}* tell you what.",
            ">{#f/3}* while i'm having this delicious ice cream...",
            ">{#f/2}* you can use that time to think about how you ended up here."
         ],
         jspeechU3: [
            ">{#p/sans}* salmon-flavored, huh?",
            ">{#p/sans}* i hear this is popular with the royal guard."
         ],
         jspeechU4: [
            ">{#p/sans}{#f/3}* oh yeah.\n* i'm DEFINITELY telling papyrus about this.",
            ">{#f/0}* it'll be helpful for him to get to know what kind of food they like.",
            ">{#f/2}* and by \"they\" i mean the royal guard he's soon to be a member of."
         ],
         jspeechU5: [
            ">{#p/sans}{#f/0}* yeah... turns out capturing a human does have its perks.",
            ">{#f/3}* ... don't worry.\n* i won't be much longer.",
            ">{#f/2}* i'm at LEAST halfway done by now."
         ],
         jspeechU6: () => [
            ">{#p/sans}{#f/0}* i wonder if that \"ice dream\" guy would mind selling this flavor.",
            ...(SAVE.data.n.state_starton_nicecream < 1
               ? [">{#f/2}* it'd certainly get him the customers he's been lacking."]
               : [">{#f/2}* it'd certainly get him a few new customers."])
         ],
         jspeechU7: [
            ">{#p/sans}{#f/0}* ah... nothing like a good scoop of salmon- flavored ice cream.",
            ">{#f/2}* now for the cone."
         ],
         jspeechU8: [
            ">{#p/sans}{#f/3}* it's amazing what replication technology can do these days.",
            ">{#f/0}* in the past, you'd be lucky to get something edible...",
            ">{#f/2}* but now, both ice cream AND cone come out perfectly every time."
         ],
         jspeechU9: [">{#p/sans}{#f/0}* ...", ">{#f/3}* ... guess i should actually finish this now."],
         jspeechU10: (funni: boolean) => [
            ">{#p/sans}{#f/0}* well, that's all.",
            ...(funni
               ? [">{#f/2}* i only hope you can find your way out from behind that pillar."]
               : [">{#f/2}* i only hope you've used your time wisely."])
         ],
         jspeech2: (funni: boolean) => [
            ">{#p/sans}{#f/3}* ...",
            ">{#f/0}* lv0, huh?\n* what's that?",
            ">{#f/3}* this wasn't in gerson's human combat handbook.",
            ">{#f/0}* normally i'd say something here, like...",
            ">{#f/4}* not being perfect, but still doing the right thing?",
            ">{#f/0}* but i guess you really are different.",
            ">{#f/3}* ...\n* tell you what.",
            ">{#f/4}* i'll spare you the long, agonizing speech i was preparing...",
            ">{#f/0}* and just let you get on your way.",
            ">{#f/3}* after all, someone as good as you...",
            ">{#f/2}* shouldn't have to sit through a lecture about hard choices.",
            ...(world.flirt < world.flirt_state1.length
               ? [
                  ">{#f/3}* ...",
                  ">{#f/0}* good luck, buddo.",
                  ...(funni
                     ? [">{#f/2}* i'll move you back behind the pillar now."]
                     : [">{#f/2}* not that you'll need it."])
               ]
               : [
                  ">{#f/3}* ... oh, right.\n* i almost forgot.",
                  ">{#f/0}* you may have noticed how difficult it is to flirt with alphys.",
                  ">{#f/2}* but i know a trick that'll get 'er right in the heart.",
                  ">{#f/0}* if you're truly devoted to being a legendary flirt master...",
                  ">{#f/0}* you'll whisper this in her ear.",
                  ">{#p/human}* (Sans whispered something in your ear.)",
                  ...(funni
                     ? [">{#p/sans}{#f/2}* try not to stand behind a pillar when you say it to her."]
                     : [">{#p/sans}{#f/2}* good luck."])
               ])
         ],
         jspeech3: (funni: boolean) => [
            ">{#p/sans}{#f/3}* ...",
            ">{#f/0}* ... but you.\n* you never gained any LOVE.",
            ...(SAVE.data.n.state_wastelands_toriel === 0
               ? [
                  ">* ... hey, what's that look for?",
                  ">{#f/2}* lv1's OBVIOUSLY the lowest you can go.\n* everybody knows that."
               ]
               : [
                  ">* ... hey, what's that look for?",
                  ">{#f/2}* it's not as if you can lose any LOVE.\n* that'd be silly."
               ]),
            ">{#f/0}* anyway, that doesn't mean you're completely innocent or naive.",
            ...(SAVE.data.n.bully < 15
               ? SAVE.data.n.state_foundry_undyne > 0
                  ? [
                     ">{#f/0}* when you had the chance to save someone's life...",
                     ">{#f/0}* you left them behind to save your own instead.",
                     ">{#f/3}* maybe you felt you were in danger.\n* maybe you were afraid.",
                     ">{#f/0}* but don't you think you could have done a little better?",
                     ">{#f/0}* ...",
                     ">{#f/0}* for what it's worth...",
                     ">{#f/3}* you never went out of your way to kill anyone.",
                     ">{#f/0}* even when you ran away, you didn't do it out of malice.",
                     ">{#f/0}* you never gained LOVE, but you had love.",
                     ">{#f/0}* does that make sense?",
                     ">{#f/0}* maybe not."
                  ]
                  : [
                     ">* just that you kept a certain tenderness in your heart.",
                     ">* no matter the struggles or hardships you faced...",
                     ">* you strived to do the right thing.",
                     ...(world.flirt < 20
                        ? [
                           ">* you refused to hurt anyone.",
                           ">* even when you ran away, you did it with a smile.",
                           ">* you never gained LOVE, but you gained love.",
                           ">* does that make sense?",
                           ">* maybe not."
                        ]
                        : [
                           ">* in fact, i hear you're quite the romantic.",
                           ">* not only did you not hurt anyone, you went right for their hearts.",
                           ">{#f/2}* you really like to make things hard on yourself, huh?"
                        ])
                  ]
               : [
                  SAVE.data.n.bully < 30
                     ? ">{#f/0}* you hurt people out there, didn't you?"
                     : ">{#f/0}* you hurt a lot of people out there, didn't you?",
                  ...(SAVE.data.n.state_foundry_undyne > 0
                     ? [
                        ">{#f/0}* plus, when you had the chance to save someone's life...",
                        ">{#f/0}* you left them behind to save your own instead.",
                        ">{#f/3}* maybe you felt you were in danger.\n* maybe you were afraid.",
                        ">{#f/3}* but a lot of other people feel that way, too.",
                        ">{#f/0}* just something to keep in mind."
                     ]
                     : world.flirt < 20
                        ? [
                           ">{#f/0}* even if you never killed them, you threatened their lives.",
                           ">{#f/3}* was it justified?\n* or was it just out of self-defense?",
                           ">{#f/0}* i guess that's something only you can know."
                        ]
                        : [
                           ">{#f/0}* then, you flirted with them as if to have your way with them.",
                           ">{#f/3}* is that really what you meant to do?\n* or... am i wrong?",
                           ">{#f/0}* i guess that's something only you can know."
                        ])
               ]),
            ">{#f/3}* ...\n* now.",
            ">{#f/0}* you're about to make the greatest decision of your entire journey.",
            ">* your choice here...",
            ">* will determine the fate of the entire galaxy.",
            ">* if you refuse to enter the archive...",
            ">* monsters will remain trapped on the outpost.",
            ">* asgore will do his best to look after you, but...",
            ">* we may never get a shot at freedom again.",
            ">{#f/3}* however.\n* if you do decide to follow his plan...",
            ">{#f/0}* there's a chance things could go wrong.",
            ">* not to mention, you'd be risking your life again, and...",
            ">* well.",
            ">* what will you choose?",
            ">{#f/3}* ...",
            ">* if i were you, i would have thrown in the towel by now.",
            ">{#f/2}* but you didn't get this far by giving up, did you?",
            ">{#f/0}* that's right.",
            ">* you have something called \"{@fill=#ff0}determination.{@fill=#fff}\"",
            ...(SAVE.data.n.bully < 15
               ? [
                  ">* so as long as you hold on...",
                  ">* so as long as you do what's in your heart...",
                  ">* i believe you can do the right thing.",
                  ...(SAVE.data.n.state_foundry_undyne > 0 || world.flirt < world.flirt_state1.length
                     ? [
                        ">{#f/3}* alright.",
                        ">{#f/0}* we're all counting on you, buddo.",
                        ...(funni
                           ? [">{#f/2}* i'll move you back behind the pillar now."]
                           : [">{#f/2}* good luck."])
                     ]
                     : [
                        ">{#f/3}* oh, right.\n* i almost forgot.",
                        ">{#f/0}* you may have noticed how difficult it is to flirt with her.",
                        ">{#f/0}* alphys, i mean.",
                        ">{#f/2}* but i know a trick that'll get 'er right in the heart.",
                        ">{#f/0}* if you're truly devoted to being a legendary flirt master...",
                        ">{#f/0}* you'll whisper this in her ear.",
                        ">{#p/human}* (Sans whispered something in your ear.)",
                        ...(funni
                           ? [">{#p/sans}{#f/2}* try not to stand behind a pillar when you say it to her."]
                           : [">{#p/sans}{#f/2}* good luck."])
                     ])
               ]
               : [
                  ">* no matter what you've used it for up to now...",
                  ">* i know you have it in you to do what's right when it matters most.",
                  ">{#f/3}* ...",
                  ">{#f/3}* be good, alright?",
                  ...(funni ? [">{#f/2}* ... and try not to stand behind any more pillars."] : [])
               ])
         ],

         jspeech4: [
            ">{#p/darksans}* Now, you understand.",
            ">* It's time to begin your judgment.",
            ">* Look inside yourself.",
            ">* Have you really done the right thing?",
            ">* And, considering what you've done...",
            ">* What will you do now?",
            ">* Take a moment to think about this."
         ],
         jspeech5a: [
            ">{#p/sans}{#f/3}* ...",
            ">{#f/0}* truthfully, it doesn't really matter which conclusion you came to.",
            ">* all that's important is that you were honest with yourself."
         ],


         jspeech5b1: (funni: boolean) => [
            ">{#p/sans}{#f/3}* what happens now...",
            ">{#f/0}* we leave up to you.",
            ...(funni ? [">{#f/2}* ... just as soon as i move you back behind that pillar."] : [])
         ],


         jspeech5b2: () => [
            ">{#p/sans}{#f/3}* though...",
            ">{#f/0}* one thing about you always struck me as kinda odd.",
            ">* now, i understand acting in self-defense.",
            ">* you were thrown into those situations against your will.",
            ">* but...",
            ">* sometimes...",
            ">* you act like you know what's gonna happen.",
            ">* like you've already experienced it all before.",
            ">* this is an odd thing to say, but...",
            ">* if you have some sort of {@fill=#ff0}special power{@fill=#fff}...",
            ">* isn't it your responsibility to do the right thing?",
            choicer.create("* (What do you say?)", "是", "否")
         ],
         jspeech5b3a: [">{#p/sans}{#f/4}* ah.", ">{#f/0}* i see."],
         jspeech5b3b: [
            ">{#p/sans}{#f/4}* heh.",
            ">{#f/0}* well, that's your viewpoint.",
            ">{#f/2}* i won't judge you for it."
         ],
         jspeech5b3c: [">{#p/sans}{#f/3}* ..."],



         jspeech5b4a: [">{*}{#p/darksans}{#f/1}{#i/5}* ... then why'd you kill my brother?"],
         jspeech5b4b: [">{*}{#p/darksans}{#f/1}{#i/5}* ... you dirty brother killer."],
         jspeech5b5a: [">{#p/sans}{#f/3}* ... guess toriel wasn't worth the effort, then, huh?"],
         jspeech5b5b: [">{#p/sans}{#f/3}* ... even if i should, after what you did to toriel."],
         jspeech5b6a: [">{*}{#p/darksans}{#f/1}{#i/5}* ... then why'd you kill all those people?"],
         jspeech5b6b: [">{*}{#p/darksans}{#f/1}{#i/5}* ... you dirty serial killer."],
         jspeech5b7a: [">{#p/sans}{#f/3}* ... guess undyne wasn't worth the effort, then, huh?"],
         jspeech5b7b: [">{#p/sans}{#f/3}* ... even if i should, after what you did to undyne."],
         jspeech5b8a: [">{#p/sans}{#f/3}* ... guess mettaton wasn't worth the effort, then, huh?"],
         jspeech5b8b: [">{#p/sans}{#f/3}* ... even if i should, after what you did to mettaton."],
         jspeech5b9a: [">{#p/sans}{#f/3}* ... guess the people you killed don't matter, then, huh?"],
         jspeech5b9b: [">{#p/sans}{#f/3}* ... even if i should, after what you did to those people."],
         jspeech5b10a: [">{#p/sans}{#f/3}* ... guess the person you killed don't matter, then, huh?"],
         jspeech5b10b: [">{#p/sans}{#f/3}* ... even if i should, after what you did to that person."],


         jspeech6a: [
            ">{#p/sans}{#f/4}* huh?\n* you look bored.",
            ">* i get the feeling you aren't gonna learn anything from this.",
            ">{#f/0}* well, guess I gotta judge you then."
         ],


         jspeech6b1: [
            ">{#p/sans}* lv2...\n* seems like you messed\n  up the slightest amount.",
            ">{#f/4}* welp.\n* that's pretty sad.",
            ">{#f/3}* you probably weren't even aware of what you were doing...",
            ">* and when you learned, it was too late.",
            ">{#f/2}* nah, just kidding.",
            ">{#f/4}* who gets to lv2 on accident?\n* get outta here."
         ],

         jspeech6b2: [
            ">{#p/sans}* lv3...\n* not bad.",
            ">{#f/4}* three's not such a scary number, is it?",
            ">{#f/0}* i'll give you a pass.",
            ">{#f/3}* but, hey...",
            ">{#f/2}* you could still do better, right?"
         ],

         jspeech6b3: [
            ">{#p/sans}* lv4...\n* huh.",
            ">{#f/4}* i mean, what can i say?",
            ">{#f/0}* if it were any higher, i'd think you'd killed people on purpose.",
            ">{#f/3}* but i guess i'll give you a pass.",
            ">{#f/2}* just this once."
         ],

         jspeech6b4: [
            ">{#p/sans}{#f/4}* lv5?",
            ">{#f/0}* now that's dangerous territory right there.",
            ">{#f/4}* believe me, i wanna give you the benefit of the doubt...",
            ">{#f/0}* but that gets harder and harder to do the higher this goes.",
            ">{#f/3}* ... oh well."
         ],

         jspeech6b5: [
            ">{#p/sans}{#f/4}* lv6?",
            ">{#f/0}* humans often say six is a scary number.",
            ">{#f/4}* now, i don't claim to be superstitious...",
            ">{#f/0}* but i'd be lying if i said i wasn't suspicious.",
            ">{#f/3}* ... oh well."
         ],

         jspeech6b6: [
            ">{#p/sans}{#f/4}* lv7, huh?",
            ">* isn't that what humans call a lucky number?",
            ">{#f/0}* well gee, i dunno about you, but...",
            ">{#f/3}* i doubt much luck was involved in how you got to this point.",
            ">{#f/0}* ... just saying."
         ],

         jspeech6b7: [
            ">{#p/sans}{#f/4}* lv8, huh?",
            ">* don't humans use this number to predict the future or something?",
            ">{#f/0}* well gee, i dunno about you, but...",
            ">{#f/3}* that'd be a pretty good explanation for how you've been acting.",
            ">{#f/0}* ... just saying."
         ],

         jspeech6b8: [
            ">{#p/sans}{#f/3}* ... lv9.",
            ">{#f/0}* that's pretty bad.",
            ">{#f/3}* but hey, look on the bright side...",
            ">{#f/2}* ... at least you're still in single-digits."
         ],

         jspeech6b9: [
            ">{#p/sans}{#f/3}* ... lv10.",
            ">{#f/0}* that's pretty bad.",
            ">{#f/3}* but hey, look on the bright side...",
            ">{#f/2}* ... at least it's a nice, even number you can be proud of."
         ],

         jspeech6b10: [
            ">{#p/sans}{#f/3}* ... lv11.",
            ">{#f/4}* or in gambler's terms, snake eyes.",
            ">{#f/0}* truth be told, if i had a chance to re-roll the dice...",
            ">{*}{#p/darksans}{#f/1}{#i/5}* I'd probably take it right about now.",
            ">{#p/sans}{#f/3}* ... but that's just me."
         ],

         jspeech6b11: [
            ">{#p/sans}{#f/3}* ... lv12.",
            ">{#f/4}* or in timekeeper's terms, a full rotation.",
            ">{#f/0}* truth be told, if i had a chance to turn back the clock...",
            ">{*}{#p/darksans}{#f/1}{#i/5}* I'd probably take it right about now.",
            ">{#p/sans}{#f/3}* ... but that's just me."
         ],

         jspeech6b12: [
            ">{#p/sans}{#f/3}* ... lv13.",
            ">{#f/4}* or in baker's terms, a dozen.",
            ">{#f/0}* truth be told, if i had a chance to start bakery-fresh...",
            ">{*}{#p/darksans}{#f/1}{#i/5}* I'd probably take it right about now.",
            ">{#p/sans}{#f/3}* ... but that's just me."
         ],

         jspeech6b13: [
            ">{#p/sans}{#f/3}* ... lv14.",
            ">{#f/4}* i'll be honest...",
            ">{#f/0}* i didn't think you'd be able to kill that many people that quickly.",
            ">{*}{#p/darksans}{#f/1}{#i/5}* Guess you learn something new every day.",
            ">{#p/sans}{#f/3}* ..."
         ],


         jspeech6c: [
            ">{#p/sans}{#f/4}* huh?\n* you STILL look bored.",
            ">{#f/0}* ok then, consider our session over."
         ],


         jspeech7: (funni: boolean) => [
            ">{#p/sans}{#f/3}* ...",
            ">{#f/0}* wait a second.",
            ">{#f/4}* that look on your face while i was talking...",
            ">{#f/0}* you've already heard my spiel, haven't you?",
            ">{#f/3}* i suspected something like this.",
            ">{#f/3}* you act like you know what's going to happen in advance sometimes.",
            ">{#f/3}* like you've seen certain things before.",
            ">{#f/0}* so... hey.",
            ">{#f/0}* i've got a request for you.",
            ">{#f/2}* i kind of have a {@fill=#ff0}secret codephrase{@fill=#fff} that only i would know.",
            ">{#f/4}* so, i'll know that if someone tells it to me...",
            ">{#f/0}* they'd have to be a time traveler.",
            ">{#f/2}* crazy, right?",
            ">{#f/3}* anyway, here it is...",
            ">{#p/human}* (Sans whispered something to you.)",
            ">{#p/sans}{#f/0}* i'm counting on you to come back here and tell me that.",
            ...(funni ? [">{#f/2}* i'll move you back behind the pillar now."] : [">{#f/2}* see you... earlier."])
         ],


         jspeech8: (funni: boolean) => [
            ">{#p/sans}{#f/3}* ...",
            ">{#f/4}* huh?\n* do you have something to say to me?",
            ">{#p/human}* (You told Sans the secret codephrase.)",
            ">{#p/sans}{#f/2}* what? a codephrase?\n* can you speak a little louder?",
            ">{#p/human}* (You told Sans the secret codephrase, but louder.)",
            ">{#p/sans}{#f/0}* did you...",
            ">{#f/4}* ... just say to \"reverse the polarity of the neutron flow?\"",
            ">{#f/2}* wow.\n* i can't believe you would say that.",
            ">{#f/4}* not only is that complete nonsense...",
            ">{#f/2}* it's also my secret codephrase.",
            ">{#f/0}* so... you really are a time traveler, huh?",
            ">{#f/3}* well, alright.\n* i guess that means you're qualified.",
            ">{#f/0}* here's the key to my room.",
            ">{#p/human}* (The Skeleton Key was added to your keyring.)",
            ">{#p/sans}{#f/0}* it's time...",
            ...(funni
               ? [">{#f/2}* you walked back out from behind that pillar."]
               : [">{#f/2}* you understood the {@fill=#003cff}real truth{@fill=#fff}."])
         ],


         jspeech9: (funni: boolean) => [
            ">{#p/sans}{#f/3}* ...",
            ">{#f/0}* wait a second.",
            ">{#f/4}* that look on your face while i was talking...",
            ">{#f/0}* you've already heard my spiel, haven't you?",
            ">{#f/3}* i suspected something like this.",
            ">{#f/3}* you act like you know what's going to happen in advance sometimes.",
            ">{#f/3}* like you've seen certain things before.",
            ">{#f/0}* so...",
            ">{#f/0}* ... wait.\n* have you heard this before, too?",
            ">{#f/3}* wow, you really ARE a time traveler.",
            ">{#f/2}* guess there's not much else to say, then.",
            ">{#s/equip}{#p/human}* (The Skeleton Key was added to your keyring.)",
            ...(funni ? [">{#f/2}* ... apart from \"i'll move you back behind the pillar now.\""] : [])
         ],


         jspeech10a: [">{#p/sans}{#f/0}* behind you."],
         jspeech10b: [
            ">{#p/sans}* so this is it, huh?",
            ">* this is where your journey ends?",
            ">{#f/3}* ...",
            ">* look.\n* i don't know what asgore's going to do.",
            ">{#f/0}* chances are... it won't be what you expect.",
            ">* but, just think for a moment...",
            ">* everything you've done up until now.",
            ">* was it worth it?"
         ],
         jspeech10c: [
            ">{#p/sans}{#f/3}* i don't know what's going through your mind right now.",
            ">{#f/0}* i mean, i can't even see your face.",
            ">* ...",
            ">{#f/3}* maybe that's for the best.",
            ">{#f/0}* but i do know that for you to have done all this...",
            ">* you had to have cared about us at some point, right?",
            ">{#f/3}* ... i guess there's every chance that's not true.",
            ">{#f/0}* still, people don't just act like this towards strangers.",
            ">* i'll bet somewhere, deep down, you really do care about us.",
            ">* you certainly cared enough to make it this far, right?"
         ],
         jspeech10d: [
            ">{#p/sans}{#f/3}* i know. the whole \"appeal to emotion\" isn't really my style.",
            ">{#f/0}* but what else am i supposed to do?",
            ">* when someone goes as far as you have...",
            ">* intimidation just doesn't seem appropriate anymore.",
            ">{#f/3}* so i'm trying something different.",
            ">{#f/0}* ...",
            ">{#f/3}* now.\n* if this is really how it ends...",
            ">* so be it.",
            ">{#f/0}* kindness isn't exactly your thing, and i get that.",
            ">* but if, by chance, you've got a {@fill=#ff0}certain power{@fill=#fff}...",
            ">* then why not?",
            ">* just this once, just at the end...",
            ">{#f/3}* just be kind.",
            ">* ...",
            ">{#f/3}* well.",
            ">{#f/3}* that's all."
         ],
         jspeechX: [
            ">{#p/sans}{#f/0}* actually, there's one last thing i have to tell you...",
            ">{#p/sans}{#f/2}* "
         ],

         choice0: () => [
            ...(SAVE.data.n.state_foundry_undyne === 0 && !world.badder_lizard
               ? [
                  ">{#p/alphys}{#g/alphysCutscene1}* You made it!",
                  ">{#g/alphysCutscene2}* ...\n* So this is Archive Six.",
                  ">{#f/15}* Ever since it was built, the humans have been guided here...",
                  ">{#f/15}* Held in stasis...",
                  ">{#f/15}* In a time-accelerated virtual world...",
                  ">{#f/10}* ... isn't it awesome!?",
                  ">{#f/1}* It's incredible what Professor Roman was able to achieve!",
                  ">{|}{#f/15}* Like, I don't know if he's into sci-fi anime, but there's this one {%}",
                  ">{|}{#f/15}  about a movie where you\n  have to put on virtual\n  reality goggles to {%}",
                  ">{|}{#f/23}  watch it but everyone\n  who does gets trapped\n  in the movie world and {%}",
                  ">{|}{#f/23}  they all have to figure\n  out how to advance the\n  plot to escape and {%}",
                  ">{|}{#f/18}  the main character\n  figures out how to get\n  to the end and they do {%}",
                  ">{|}{#f/18}  and then they set\n  everyone free!!!",
                  ">{#f/18}* ...",
                  ">{#f/20}* So, uh, I think he was inspired by that.",
                  ">{#f/18}* A-anyway!!\n* Asgore's waiting for you at the force field!"
               ]
               : [
                  ">{#p/alphys}{#g/alphysCutscene1}* You made it!",
                  ">{#g/alphysCutscene2}* ...",
                  ">{#g/alphysSmileSweat}* W-well, Asgore's waiting for you at the force field."
               ]),
            ">{#g/alphysNeutralSweat}* In... case you were wondering.",
            ">{#g/alphysOhGodNo}* But, if you weren't!!\n* Then...",
            ">{#g/alphysTheFactIs}* I'm... not sure why you're here.",
            ">{#g/alphysCutscene2}* So yeah.\n* That's about it, really."
         ],
         choice0x: [">{#p/alphys}{#g/alphysCutscene2}* Uh, I'll just be over here for now."],
         choice1: [
            ">{#p/asgore}{#f/1}* This is the force field.",
            ">{#f/2}* It is what keeps us trapped on the outpost.",
            ">{#f/1}* An unthinking, unfeeling boundary...",
            ">{#f/2}* Through which nobody, monster or otherwise, may pass."
         ],
         choice1a: () => [
            ">{#p/asgore}{#f/1}* For many years, I lamented that we would never reach the stars.",
            ">* I feared that, one day, a human would arrive and doom us all.",
            ...(world.bad_robot || world.trueKills > 29
               ? [
                  ">{#f/1}* ...",
                  ">{#f/2}* It seems... this fear was justified.",
                  ">{#f/3}* Alphys has already informed me of your... violent tendencies.",
                  ...(world.alphys_percieved_kills < 20
                     ? [">{#f/2}* Though, she did say you spared plenty of our kind as well."]
                     : [
                        ">{#f/16}* ...\n* Tell me, young one.",
                        ">{#f/12}* Did it begin as self- defense, and devolve into something worse?",
                        ">{#f/12}* Or was this your plan from the start?"
                     ]),
                  ">{#f/5}* ...",
                  ">{#f/16}* Regardless.\n* You place me in a difficult position.",
                  ">{#f/15}* To trust you with our one key to freedom...",
                  ">{#f/16}* Or to take your SOUL by force, and enter the archive myself.",
                  ">{#f/3}* ...",
                  ...(world.alphys_percieved_kills < 20
                     ? [
                        ">{#f/3}* As terrible as you may have been, I do not wish to harm you.",
                        ">{#f/4}* You could have been far worse to us...",
                        ">{#f/2}* ... yet you were not.",
                        ">{#f/1}* It would be wrong to assume that you are irredeemable.",
                        ">{#f/2}* You may simply be a very frightened young child."
                     ]
                     : [">{#f/3}* Words cannot express how unfortunate this situation has become."])
               ]
               : (world.bad_lizard > 0 && world.alphys_percieved_kills > 0) || 2 <= world.alphys_percieved_kills
                  ? [
                     ">{#f/1}* ...",
                     ">{#f/1}* All things considered, you have behaved well.",
                     ...(world.bad_lizard > 0
                        ? [">{#f/2}* Though, Alphys did mention that you've... taken lives."]
                        : [">{#f/2}* Though, Alphys did mention that you might have... taken lives."]),
                     ">{#f/3}* ...",
                     ...(SAVE.data.b.ultrashortcut
                        ? [
                           ">{#f/3}* It is fortunate you were captured and delivered here quickly.",
                           ">{#f/2}* The outpost can be a dangerous place, as I am sure you are aware.",
                           ">{#f/5}* However, now that you are here, you will be protected."
                        ]
                        : [
                           ">{#f/3}* I only have myself to blame for this.",
                           ">{#f/2}* My keeping of secrets has made it difficult to escort you quickly.",
                           ">{#f/5}* Especially since this is Alphys's first time doing this."
                        ]),
                     ">{#f/15}* ...",
                     ">{#f/16}* The archive lies ahead of you now.",
                     ">{#f/1}* The other human\n  children all chose to enter the archive, so...",
                     ">* ... now, it is now your turn to make that same choice."
                  ]
                  : [
                     ">{#f/1}* Then, one by one, the children of earth came.",
                     ">* All were anxious.\n* All faced challenges on their journeys here.",
                     ">{#f/6}* But, deep down, they let their brightest traits shine through.",
                     ">* The patient, and the brave.",
                     ">* The truth-teller and the survivor.",
                     ">{#f/2}* The kind one...",
                     ">{#f/4}* And the one who sought justice above all.",
                     ">{#f/1}* When given the choice to stay, or to enter the archive...",
                     ">* They all eventually chose the latter.",
                     ...(SAVE.data.b.ultrashortcut
                        ? [
                           ">{#f/5}* ... now, regardless of the circumstances in which you arrived...",
                           ">{#f/1}* It is your turn to make that same choice."
                        ]
                        : [">* ... now, it is your turn to make that same choice."])
                  ])
         ],
         choice1b: () =>
            world.bad_robot || world.trueKills > 29
               ? [
                  ">{#p/asgore}{#f/1}* In any case, I cannot ask you to enter the archive.",
                  ">{#f/2}* It would be unrealistic to expect you to take such a responsibility.",
                  ">{#f/5}* ...",
                  ">{#f/5}* Return to my home.",
                  ">{#f/5}* I will decide what to do with you later."
               ]
               : [
                  [
                     ">{#p/asgore}{#f/6}* As the last to enter, you would act as a vessel.",
                     ">* Borrowing the others' SOUL power as your own.",
                     ">* With all powers combined, you will\n  destroy the force field.",
                     ">* Then...",
                     ">* Monsterkind will search for a new home planet.",
                     ">{#f/1}* ... however.",
                     ">* If you do not want such a responsibility...",
                     ">* You may stay with us on the outpost until you change your mind.",
                     ">{#f/6}* Whatever you decide, I will support you.",
                     ">{#f/1}* ...",
                     ">* Will you enter the archive?",
                     choicer.create("* (What do you say?)", "是", "否")
                  ],
                  [
                     ">{#p/asgore}{#f/6}* I see you have returned.",
                     ">{#f/1}* ...",
                     ">* Will you enter the archive?",
                     choicer.create("* (What do you say?)", "是", "否")
                  ],
                  [
                     ">{#p/asgore}{#f/1}* ...",
                     ">* Will you enter the archive?",
                     choicer.create("* (What do you say?)", "是", "否")
                  ]
               ][Math.min(SAVE.data.n.state_citadel_refuse, 2)],
         choice2a: [
            ">{#p/asgore}{#f/4}* ...",
            ">{#f/6}* Follow me, young one.",
            ">{#f/21}* There is much to do."
         ],
         choice2b: () =>
            [
               [
                  ">{#p/asgore}{#f/2}* ... I understand.",
                  ">{#f/1}* Perhaps it was wrong of me to assume you would be like the others.",
                  SAVE.data.b.ultrashortcut
                     ? ">{#f/5}* You did arrive quickly, and I have done little to earn your trust."
                     : ">{#f/5}* You may not be ready, and I have done little to earn your trust.",
                  ">{#f/1}* If you change your mind, you may return to me here...",
                  ">{#f/2}* Otherwise, I shall not press you further."
               ],
               [">{#p/asgore}{#f/2}* ... I understand."]
            ][Math.min(SAVE.data.n.state_citadel_refuse++, 1)],
         choice3a: [">{#p/asgore}{#f/6}* It is time."],
         choice4a: [">{#p/asgore}{#f/5}* Alphys?"],
         choice4b: [
            ">{#p/alphys}{#g/alphysOhGodNo}* Uh, y-yeah!\n* Sorry!",
            ">{#p/alphys}{#g/alphysCutscene3}* Just getting everything ready and all..."
         ],
         choice5: [">{#p/alphys}{#g/alphysCutscene2}* There.\n* We should be set for the procedure."],
         choice6a: [">{#p/alphys}{#g/alphysWelp}* Okay, looks like they're in the system."],
         choice6b: [
            ">{#p/asgore}{#f/6}* Don't worry.",
            ">{#p/asgore}{#f/7}* When this archive was created...",
            ">{#p/asgore}{#f/6}* We made sure to provide the ideal environment for the humans.",
            ">{#p/asgore}{#f/21}* Lush forests, rolling hills, rivers as far as the eye can see...",
            ">{#p/asgore}{#f/6}* All the trappings of a beautiful earth vista.",
            ">{#p/asgore}{#f/4}* ... we are counting on you, young one.",
            ">{#p/asgore}{#f/6}* Please, be safe, and do not take too long."
         ],
         choice7: [
            ">{#p/basic}* Yeah, I'm still here...",
            ">* ... though, I don't think I can follow you inside.",
            ">* Subconscious and all that.",
            ">* But whatever happens, I trust you'll do the right thing.",
            ">* ...",
            ">* Stay safe, alright?"
         ],
         choice8: [
            ">{#p/asgore}{#f/2}* So you have arrived.",
            ">{#p/human}* (...)",
            ">{#p/asgore}{#f/1}* ...\n* I suppose you would not have much to say.",
            ">{#f/2}* Unlike myself, who has many questions to ask of you.",
            ">{#f/4}* Yet, despite our differences...",
            ">{|}{#f/7}* I still think we can come to an- {%}"
         ],

         clover1: [">{#p/human}{#v/6}{@fill=#faff29}* Isn't it pretty...?"],
         clover2: [
            ">{#p/human}{#v/6}{@fill=#faff29}* ...\n* Well, that's what he would have said, anyway.",
            ">{@fill=#faff29}* Places like this were the norm here, once...",
            ">{@fill=#faff29}* ... before I arrived and ruined it all.",
            ">{@fill=#faff29}* My bionic implant gave us top- level access to the system.",
            ">{@fill=#faff29}* Anything we wanted, we could have... with a cost.",
            ">{@fill=#faff29}* You've seen the aftermath.\n* You've been to every world we created here...",
            ">{@fill=#faff29}* The XM you've gained is proof of that.",
            ">{@fill=#faff29}* XM...\n* It's an acronym, of course.\n* It stands for \"exotic matter.\"",
            ">{@fill=#faff29}* It's the stuff that links all of our SOULs together.",
            ">{@fill=#faff29}* It's what you need to break the force field."
         ],
         clover3: [
            ">{#p/human}{#v/6}{@fill=#faff29}* I don't know if we'll be aware of what happened here.",
            ">{@fill=#faff29}* This is only a subconscious realm, after all.",
            ">{@fill=#faff29}* Still, even when a nightmare like ours comes to an end...",
            ">{@fill=#faff29}* Is it ever truly forgotten?"
         ],
         clover4: () => [
            ">{#p/human}{#v/6}{@fill=#faff29}* ...\n* It's time for you to go.",
            ">{@fill=#faff29}* You can find the exit terminal at the end of the prime pathway.",
            ...(SAVE.data.b.oops
               ? [">{@fill=#faff29}* ... take care...", ">{@fill=#faff29}* Got it?"]
               : [
                  ">{@fill=#faff29}* ... but before you go...",
                  ">{@fill=#faff29}* Frisk?\n* That's your name, isn't it?",
                  ">{@fill=#faff29}* Forgive me.\n* I couldn't help but wonder what was on your mind.",
                  ">{@fill=#faff29}* ...\n* You're a good person, Frisk.",
                  ">{@fill=#faff29}* And from what I can tell...",
                  ">{@fill=#faff29}* So is the one who's been making all those choices for you.",
                  ">{@fill=#faff29}* ...",
                  ">{@fill=#faff29}* Frisk and I won't remember this conversation, but there's a chance you might.",
                  ">{@fill=#faff29}* If you're really out there somewhere, listening...",
                  ">{@fill=#faff29}* ... don't forget about the lives we've led in this place.",
                  ">{@fill=#faff29}* No matter the world, real or virtual, memories like ours don't deserve to be forgotten."
               ])
         ],

         smasher1: [">{#p/alphys}{#g/alphysWelp}* I'll be waiting for you at the force field."],
         smasher2: [">{*}{#p/alphys}{#g/alphysSmileSweat}* Ready?{^40}{%}"],

         bad1: () =>
            [
               world.bad_robot || world.trueKills > 29
                  ? world.alphys_percieved_kills < 20
                     ? [
                        ">{*}{#p/twinkly}{#f/8}* Indecisive, eh Asgore?",
                        ">{*}{#f/5}* I know.\n* Choices can be difficult sometimes.",
                        ">{*}{#f/11}* But that's okay!",
                        ">{*}{#f/7}* You won't have to make them anymore.",
                        ">{*}{#p/asgore}{#g/asgoreBound}* ... what are you...",
                        ">{*}* ... doing...",
                        ">{*}{#p/twinkly}{#f/8}* Oh, nothing, Asgore..."
                     ]
                     : [
                        ">{*}{#p/twinkly}{#f/5}* Golly, Asgore...",
                        ">{*}{#f/11}* You could've killed them, and nobody would have complained.",
                        ">{*}{#f/7}* But now, you've missed your chance.",
                        ">{*}{#p/asgore}{#g/asgoreBound}* ... what are you...",
                        ">{*}* ... doing...",
                        ">{*}{#p/twinkly}{#f/5}* Killing people isn't THAT bad, Asgore...",
                        ">{*}{#f/9}* You just have to learn how to have fun with it!"
                     ]
                  : SAVE.data.b.ultrashortcut
                     ? [
                        ">{*}{#p/twinkly}{#f/5}* Well, well...",
                        ">{*}{#f/11}* Weren't you clever to get here so quickly.",
                        ">{*}{#p/asgore}{#g/asgoreBound}* ... what are you...",
                        ">{*}* ... doing...",
                        ">{*}{#p/twinkly}{#f/5}* Didja think you'd be able to slip past me that easily?",
                        ">{*}{#f/7}* Don't be ridiculous."
                     ]
                     : [
                        ">{*}{#p/twinkly}{#f/5}* Howdy, Asgore.",
                        ">{*}{#f/11}* There's a lot that needs done before we can save monsterkind.",
                        ">{*}{#p/asgore}{#g/asgoreBound}* ... what are you...",
                        ">{*}* ... doing...",
                        ">{*}{#p/twinkly}{#f/5}* I know this came out of nowhere, but come on!",
                        ">{*}{#f/7}* I'm only trying to have fun, Asgore."
                     ],
               [
                  ">{*}{#p/twinkly}{#f/7}* Like I'd ever let you escape so easily.",
                  SAVE.data.b.ultrashortcut
                     ? ">{*}{#f/8}* Poor $(name)... always so eager to take the shortcuts in life..."
                     : ">{*}{#f/8}* Poor $(name)... always so desperate to have things your way...",
                  ">{*}{#f/5}* But not this time.",
                  ">{*}{#p/asgore}{#g/asgoreBound}* ... what are you...",
                  ">{*}* ... doing...",
                  ">{*}{#p/twinkly}{#f/5}* From now on, I'll be the one calling the shots.",
                  ">{*}{#f/7}* And you just have to live with it."
               ],
               [
                  ">{*}{#p/twinkly}{#f/11}* Come now, $(name)...",
                  ">{*}{#f/5}* This resistance of yours is pointless!",
                  SAVE.data.b.ultrashortcut
                     ? ">{*}{#f/7}* No matter how fast you try to go, I'll always be one step ahead."
                     : ">{*}{#f/7}* No matter what you do, I'll always be one step ahead.",
                  ">{*}{#p/asgore}{#g/asgoreBound}* ... what are you...",
                  ">{*}* ... doing...",
                  ">{*}{#p/twinkly}{#f/5}* Shh... it's alright.",
                  ">{*}{#f/5}* My friend $(name) here just needs to be taught a lesson."
               ]
            ][Math.min(SAVE.flag.n.neutral_twinkly_loop1++, 2)],
         bad2: [
            ">{*}{#g/twinklyNice}* ... by the way, my name's Twinkly.{^30}{%}",
            ">{*}{#g/twinklySassy}* Twinkly the star.{^30}{%}"
         ],
         bad3: [">{*}{#p/asgore}{#g/asgoreBreak1}* AAAARGH...!{^999}"],
         bad4: [
            ">{*}{#p/twinkly}{#g/twinklyWink}* Gosh, you're so cute when you're screaming in agony!{^30}{%}",
            ">{*}{#p/asgore}{#g/asgoreBreak1}* ...{^10}{%}"
         ],
         bad5: [">{*}{#p/twinkly}{#f/7}* Let's hear it again.{^20}{%}"],
         bad6: [">{*}{#p/asgore}{#g/asgoreBreak2}* AAAAAAAARGH...!{^999}"],
         bad7: [">{*}{#p/twinkly}{#f/11}* And again!{^5}{%}"],
         bad8: [">{*}{#p/twinkly}{#g/twinklyEvil}{#v/1}* And again!!!{^5}{%}"],
         bad9: [">{*}{#p/twinkly}{#g/twinklyGrin}{#v/1}* AND AGAIN!!!{^5}{%}"],
         bad10: [">{*}{#p/twinkly}{#g/twinklyTwisted}{#v/1}* AND AGAIN!!!{^5}{%}"],
         bad11: [
            ">{*}{#p/twinkly}{#g/twinklyCrazed}{#v/1}* AND AGAIN AND AGAIN AND AGAIN AND AGAIN AND AGAIN AND AGAIN AND {%}",
            ">{*}{#p/twinkly}{#g/twinklyBroken}{#v/1}* AAAAHAHAHAHAHAHAHAHAHAHAHAH\n  AHAHAHAHAHAHAHAHAHAHAHAHAHA\n  HAHAHAHAHAHAHAHAHAHAHAHAHAH{^20}{%}"
         ],
         bad12: [">{*}{#p/twinkly}{#g/twinklyDead}{#v/0}* ...{^80}{%}", ">{*}* ... die.{^10}{%}"],
         bad13: () => [
            ...[
               [
                  "{#p/twinkly}{#v/1}Hello, $(name).{^100}{%}",
                  "{#p/twinkly}{#v/1}Welcome to your new reality.{^100}{%}"
               ],
               [
                  "{#p/twinkly}{#v/1}Welcome back, $(name).{^100}{%}",
                  "{#p/twinkly}{#v/1}It's good to see you here again.{^100}{%}"
               ],
               ["{#p/twinkly}{#v/1}Oh, $(name)...{^100}{%}", "{#p/twinkly}{#v/1}How could you abandon me so.{^100}{%}"]
            ][Math.min(SAVE.flag.n.neutral_twinkly_loop2, 2)],
            "{#p/twinkly}{#v/1}Do you feel... alone?{^100}{%}",
            "{#p/twinkly}{#v/1}Do you feel... trapped?{^100}{%}",
            "{#p/twinkly}{#v/1}Hee hee hee...{^100}{%}",
            "{#p/twinkly}{#v/1}... there's no escape!{^100}{%}",
            "{#p/twinkly}{#v/1}Asgore's precious \"archive...\"{^100}{%}",
            "{#p/twinkly}{#v/1}I've brought it into the real world!{^100}{%}",
            "{#p/twinkly}{#v/1}All you can do is walk forward...{^100}{%}",
            "{#p/twinkly}{#v/1}Closer, and closer...{^100}{%}",
            "{#p/twinkly}{#v/1}... you aren't afraid, are you?{^100}{%}",
            "{#p/twinkly}{#v/1}You aren't going to run away?{^100}{%}",
            "{#p/twinkly}{#v/1}Good.{^100}{%}",
            "{#p/twinkly}{#v/1}Very good.{^100}{%}",
            "{#p/twinkly}{#v/1}You are a very good sibling.{^100}{%}",
            "{#p/twinkly}{#v/1}...{^100}{%}",
            "{#p/twinkly}{#v/1}You're almost there...!{^100}{%}",
            "{#p/twinkly}{#v/1}Just a little farther, $(name)...{^100}{%}"
         ],
         bad14: [
            "{#p/human}{#v/1}{@fill=#42fcff}Your long nightmare is over now.{^80}{%}",
            "{#p/human}{#v/2}{@fill=#ff993d}Your world will be restored!{^80}{%}",
            "{#p/human}{#v/3}{@fill=#003cff}But first, you must make a choice.{^80}{%}",
            "{#p/human}{#v/4}{@fill=#d535d9}Will you destroy what lies ahead?{^80}{%}",
            "{#p/human}{#v/5}{@fill=#00c000}Or will you show compassion?{^80}{%}",
            "{#p/human}{#v/6}{@fill=#faff29}The judgement is yours to make.{^80}{%}"
         ],
         bad15: [
            [
               "{*}{#p/twinkly}...",
               "{*}... what are you doing?",
               "{*}Do you really think I've learned...",
               "{*}... anything from this?",
               "{*}No."
            ],
            ["{*}{#p/twinkly}If you don't end this now...", "{*}I'll come back."],
            ["{*}{#p/twinkly}I'll consume you."],
            ["{*}{#p/twinkly}I'll destroy everything."],
            ["{*}{#p/twinkly}I'll make it so you never existed!"],
            ["{*}{#p/twinkly}..."],
            ["{*}{#p/twinkly}...？"],
            ["{*}{#p/twinkly}... why?"],
            ["{*}{#p/twinkly}... why are you being...", "{*}{#p/twinkly}... so nice to me?"],
            ["{*}{#p/twinkly}... I can't understand..."],
            ["{*}{#p/twinkly}I can't understand!"]
         ],
         bad16a: ["{*}{#p/twinkly}{#i/4}... I just can't understand...{^30}{%}"],
         bad16b: ["{*}{#p/twinkly}{#i/3}Goodbye, $(name).{^30}{%}"],
         bad17: [

            ">{*}{#p/event}{#i/5}Twinkly ran away."
         ],
         sad0: () =>
            world.runaway ? [">{#p/asriel1}{#f/30}* I surrender!"] : [">{#p/asriel1}{#f/25}* I'm so sorry."],
         sad1: () => [
            ...(world.runaway
               ? [">{#p/asriel1}{#f/23}* I guess you win again, huh, $(name)?"]
               : [
                  ">{#p/asriel1}{#f/23}* I always was a crybaby, wasn't I, $(name)?",
                  ...(SAVE.data.b.oops ? [] : [">{#p/basic}* Asriel..."])
               ]),
            ">{#p/asriel1}{#f/22}* ...",
            ">{#f/21}* ... I know.",
            ">{#f/23}* You're not actually $(name), are you?",
            ">{#f/22}* $(name)'s been gone for a long time.",
            ">{#f/15}* ...",
            ">{#f/15}* Um... what...",
            ">{#f/10}* What IS your name?"
         ],
         sad2: () => [
            ">{#p/human}* (...)\n* (You tell Asriel your name.)",
            ...(world.runaway
               ? [
                  ">{#p/asriel1}{#f/21}* Frisk, huh?",
                  ">{#f/23}* Well, I guess you win again, Frisk.",
                  ">{#f/22}* ...",
                  ">{#f/13}* It's strange...",
                  ">{#f/16}* As a star, I was... soulless.",
                  ">{#f/15}* I lacked the power to... fear... other people.",
                  ">{#f/13}* But now, with everyone's SOULs inside me...",
                  ">{#f/15}* ... I...",
                  ">{#f/16}* I can't escape this terrible feeling.",
                  ">{#f/15}* Ever since you started attacking me back there, it's like...",
                  ">{#f/15}* They understand the kind of person you are now.",
                  ">{#f/13}* You never killed anyone, but deep down...",
                  ">{#f/13}* The thought of you bringing them to the brink of death...",
                  ">{#f/15}* Over, and over, and over...",
                  ">{#f/16}* ...",
                  ">{#f/21}* They're still afraid of you, Frisk.",
                  ">{#f/23}* And... I guess I am too.",
                  ">{#f/22}* ..."
               ]
               : [
                  ">{#p/asriel1}{#f/17}* Frisk, huh?",
                  ">{#f/17}* That's...",
                  ">{#f/23}* ... a nice name.",
                  ">{#f/22}* ...",
                  ">{#f/13}* Frisk...",
                  ...(SAVE.flag.n.killed_sans > 0
                     ? [
                        ">{#p/asriel1}{#f/13}* What we did back there, I...",
                        ">{#f/15}* ...",
                        ">{#f/16}* I'm just sorry for dragging you into it.",
                        ...(SAVE.data.b.oops ? [] : [">{#p/basic}* ... wait a second..."]),
                        ...(SAVE.flag.n.genocide_milestone > 0
                           ? [
                              [
                                 ">{#p/asriel1}{#f/21}* Sans, Papyrus...\n* Even the canine unit...",
                                 ">{#p/asriel1}{#f/21}* Sans, Papyrus, Monster Kid, Undyne...\n* Even the Royal Guard...",
                                 ">{#p/asriel1}{#f/21}* Sans, Papyrus, Monster Kid, Undyne...\n* And Mettaton, too...",
                                 ">{#p/asriel1}{#f/21}* Sans, Papyrus, Monster Kid, Undyne...\n* Mettaton and Alphys..."
                              ][Math.floor(SAVE.flag.n.genocide_milestone / 2) - 1],
                              ">{#f/21}* All those people I now know you'd do anything to protect..."
                           ]
                           : [
                              ">{#p/asriel1}{#f/21}* I know we didn't get far...",
                              ">{#f/15}* ... but still...",
                              ">{#f/21}* It was wrong of me to force you along like that.",
                              ">{#f/21}* Especially now that I know you'd do anything to protect them."
                           ]),
                        ...(SAVE.data.b.oops
                           ? []
                           : [">{#p/basic}* ... is that the \"murder timeline\" he was talking about before?"]),
                        ">{#p/asriel1}{#f/23}* Just... please, don't blame yourself, okay?",
                        ">{#f/22}* Not only did you undo what you'd done before...",
                        ">{#f/17}* But you went up against impossible odds just to save your friends.",
                        ...(SAVE.data.b.oops ? [] : [">{#p/basic}* Yeah."]),
                        ">{#p/asriel1}{#f/13}* Plus, and maybe it's just my imagination, but...",
                        ">{#f/13}* ... thinking back on it now...",
                        ">{#f/15}* You never really seemed interested in what we were doing.",
                        ...(SAVE.data.b.oops ? [] : [">{#p/basic}* Yeah, exactly."]),
                        ">{#p/asriel1}{#f/23}* In fact... if anything...",
                        ">{#f/22}* It almost looked like you were trying to resist it.",
                        ...(SAVE.data.b.oops
                           ? []
                           : [">{#p/basic}* Yeah, you're not that kind of person at all."]),
                        ">{#p/asriel1}{#f/15}* All I know is... despite what happened...",
                        ">{#f/15}* Despite what you did... or, what I wanted you to do...",
                        ">{#f/16}* You're still a better person than I ever was.",
                        ...(SAVE.data.b.oops ? [] : [">{#p/basic}* Hmph."]),
                        ">{#p/asriel1}{#f/21}* ...\n* But I'm getting ahead of myself."
                     ]
                     : [
                        ">{#f/13}* I haven't felt like this for a long time.",
                        ">{#f/16}* As a star, I was... soulless.",
                        ">{#f/15}* I lacked the power to love other people.",
                        ">{#f/13}* However, with everyone's SOULs inside me...",
                        ">{#f/13}* I not only have my own compassion back...",
                        ">{#f/23}* But I can feel every other monster's as well.",
                        ">{#f/17}* They all care about each other so much.",
                        ...(30 <= SAVE.data.n.bully
                           ? [
                              ">{#f/23}* And... uh...\n* As for you, they...",
                              ">{#f/22}* ...",
                              ...(20 <= world.flirt
                                 ? [
                                    ">{#f/15}* ... well, they seem to be kind of conflicted...",
                                    ">{#f/10}* It's like... they like you, but dislike you at the same time?"
                                 ]
                                 : [
                                    ">{#f/15}* ... well, some of them don't seem to like you...",
                                    ...(SAVE.data.b.undyne_respecc
                                       ? [
                                          ">{#f/10}* Except Undyne.\n* She seems to like you a lot for some reason."
                                       ]
                                       : [">{#f/10}* Though, I'm not sure why."])
                                 ]),
                              ">{#f/23}* ... how strange.",
                              ">{#f/22}* ..."
                           ]
                           : [
                              ">{#f/23}* And... they care about you too, Frisk.",
                              ">{#f/22}* ...",
                              ...(20 <= world.flirt
                                 ? [
                                    ">{#f/15}* ... wow, they... they really care about you a lot...",
                                    ">{#f/15}* Uh...\n* Frisk, this is...",
                                    ">{#f/17}* ... golly...",
                                    ">{#f/20}* I, uh, really shouldn't tell you what they're feeling right now."
                                 ]
                                 : [
                                    ">{#p/asriel1}{#f/13}* I wish I could tell you how everyone feels about you.",
                                    ">{#f/17}* Toriel... Asgore...\n* Sans... Papyrus...\n* Undyne... Alphys...",
                                    ...(!SAVE.data.b.f_state_kidd_betray
                                       ? [">{#f/15}* ... Monster Kid?\n* Is that their name?"]
                                       : world.happy_ghost && SAVE.data.b.a_state_hapstablook
                                          ? [">{#f/23}* ... Napstablook, and... all their cousins."]
                                          : SAVE.data.n.state_starton_nicecream > 0
                                             ? [">{#f/23}* ... even the Ice Dream guy."]
                                             : [">{#f/23}* ... even that little mouse who works at the CORE."]),
                                    ">{#f/17}* Monsters are weird.",
                                    ">{#f/15}* Even though they barely know you...",
                                    ">{#f/17}* It feels like they all really love you.",
                                    ">{#f/23}* Haha.",
                                    ">{#f/22}* ..."
                                 ])
                           ])
                     ])
               ])
         ],
         sad3: () =>
            world.runaway
               ? [
                  ">{#p/asriel1}{#f/13}* Still, I...\n* I know I've made far worse mistakes.",
                  ">{#f/16}* I know... you're not the only one to blame for what happened here.",
                  ...(SAVE.flag.n.killed_sans > 0
                     ? [
                        ">{#f/15}* ...",
                        ">{#f/15}* Dragging you into some backwards plan to destroy the outpost...",
                        ">{#f/16}* Just so I could pretend you were my long-dead sibling..."
                     ]
                     : [
                        ">{#f/15}* ...",
                        ">{#f/15}* Turning myself into that... faceless entity...",
                        ">{#f/16}* Just so I could torture you in a nightmare of my own making..."
                     ]),
                  ">{#f/13}* That's the kind of thing I'm talking about.",
                  ">{#f/22}* ...做了那些事，\n  我怎么还有脸活在这世上。",
                  choicer.create("* (What will you do?)", "Protest", "Do not")
               ]
               : [
                  SAVE.flag.n.killed_sans > 0
                     ? ">{#p/asriel1}{#f/13}* I understand if you can't forgive me."
                     : ">{#p/asriel1}{#f/13}* Frisk... I...\n* I understand if you can't forgive me.",
                  ">{#f/13}* I understand if you... want me gone.",
                  ...(SAVE.data.b.oops ? [] : [">{#p/basic}* ... don't say that!"]),
                  ">{#p/asriel1}{#f/15}* I acted so strange and horrible.",
                  ">{#f/15}* I hurt you.",
                  ">{#f/16}* I hurt so many people.",
                  ">{#f/13}* Friends, family, bystanders...",
                  ">{#f/22}* There's no excuse for what I've done.",
                  ...(SAVE.data.b.oops ? [] : [">{#p/basic}* Asriel..."]),
                  choicer.create("* (What will you do?)", "Forgive", "Do not")
               ],
         sad4a: () => [
            ...(world.runaway
               ? [
                  ">{#p/asriel1}{#f/25}* Wh... what?",
                  ">{#f/21}* ...",
                  ">{#f/21}* I guess... you really don't want anyone to die, huh?",
                  ">{#f/22}* You just want to beat people up... nothing more.",
                  ">{#f/21}* ... still... even if you do want me to stay..."
               ]
               : [
                  ">{#p/asriel1}{#f/25}* Wh... what?",
                  ">{#f/17}* ... Frisk, come on.",
                  ">{#f/23}* You're...\n* You're gonna make me cry again.",
                  ...(SAVE.data.b.oops ? [] : [">{#p/basic}* ... t-tell me about it..."]),
                  ">{#p/asriel1}{#f/21}* ... besides, even if you do forgive me..."
               ]),
            ">{#f/15}* I can't keep these SOULs inside of me forever.",
            ">{#f/16}* So... the least I can do is return them."
         ],
         sad4b: () =>
            world.runaway
               ? [
                  ">{#p/asriel1}{#f/21}* ...",
                  ">{#f/21}* Well, anyway.\n* I did promise that if you defeated me...",
                  ">{#f/23}* I'd give you your \"happy ending.\"",
                  ">{#f/15}* ... so, since I can't keep these SOULs inside of me forever...",
                  ">{#f/16}* I'll return them, and do just that."
               ]
               : [
                  ">{#p/asriel1}{#f/22}* ... right.",
                  ">{#f/21}* I understand.",
                  ">{#f/15}* I just hope that...",
                  ">{#f/16}* I can make up for it a little right now.",
                  ">{#p/asriel1}{#f/15}* ... of course, since I can't keep these SOULs inside of me forever...",
                  ">{#f/16}* The least I can do is return them."
               ],
         sad4c: () => [
            ">{#p/asriel1}{#f/16}* ...",
            ">{#f/6}* But first...",
            ">{#f/29}* There's something else I have to do.",
            ...(SAVE.data.b.oops ? [] : [">{#p/basic}* ... what now?"]),
            ">{#p/asriel1}{#f/29}* Right now, I can feel everyone's minds working as one.",
            ">{#f/6}* They're all racing with the same intention.",
            ">{#f/6}* With everyone's power... with everyone's determination...",
            ">{#f/6}* It's time for monsters...",
            ...(SAVE.data.b.oops ? [] : [">{#p/basic}* To finally go free."]),
            ">{#p/asriel1}{#f/29}* To finally go free.",
            ...(SAVE.data.b.oops ? [] : [">{#p/basic}* ... knew it."])
         ],
         abreak: "{*}{#p/event}{#i/3}The force field was\neradicated.",
         sad5: () => [
            ">{#p/asriel1}{#f/21}* Frisk...",
            ">{#f/21}* I have to go now.",
            ...(SAVE.data.b.oops ? [] : [">{#p/basic}* ... huh?\n* But you can't just..."]),
            ">{#p/asriel1}{#f/15}* Without the power of everyone's SOULs...",
            ">{#f/22}* I can't keep maintaining this form.",
            ">{#f/21}* In a little while...",
            ">{#f/22}* I'll turn back into a star.",
            ...(SAVE.data.b.oops ? [] : [">{#p/basic}* But... you..."]),
            ">{#p/asriel1}{#f/15}* I'll stop being myself.",
            ...(world.runaway
               ? [
                  ">{#f/15}* ... but maybe that's for the best.",
                  ">{#f/23}* Ha... Frisk.",
                  ">{#f/21}* There's no reason for you to stick around anymore.",
                  ">{#f/22}* Don't waste any more time on me."
               ]
               : [
                  ">{#f/15}* I'll stop being able to feel love again.",
                  ...(SAVE.data.b.oops ? [] : [">{#p/basic}* ... no..."]),
                  ">{#p/asriel1}{#f/23}* So... Frisk.",
                  ">{#f/17}* It's best if you just forget about me, okay?",
                  ...(SAVE.data.b.oops ? [] : [">{#p/basic}* No! You can't just walk away!"]),
                  ">{#p/asriel1}{#f/23}* Just go be with the people who love you."
               ]),
            choicer.create("* (What will you do?)", "Comfort him", "Do not")
         ],
         sad6: () =>
            world.runaway
               ? [
                  ">{#p/asriel1}{#f/25}* ...！",
                  ">{#f/21}* ...",
                  ">{#f/21}* Frisk, I...",
                  ">{#f/15}* ... I just can't right now, okay?",
                  ">{#f/22}* I... I'm sorry."
               ]
               : [
                  ">{#p/asriel1}{#i/4}{#f/23}* Ha... ha...",
                  ">{#f/23}{#i/4}* I don't want to let go...",
                  ...(SAVE.data.b.oops ? [] : [">{#p/human}* (It sounds like someone is crying...)"])
               ],
         sad7: () =>
            world.runaway
               ? [
                  ">{#p/asriel1}{#f/13}* Frisk...",
                  ">{#f/15}* Whatever you do...",
                  ">{#f/21}* Just... try to be careful, okay?",
                  ">{#f/21}* No matter who you... nearly beat to death.",
                  ">{#f/23}* Golly.\n* What are they even going to do with you."
               ]
               : [
                  ">{#p/asriel1}{#f/21}* Frisk...",
                  ">{#f/23}* You're...",
                  ">{#f/17}* You're going to do a great job, okay?",
                  ">{#f/21}* No matter what you do.",
                  ">{#f/23}* Everyone will be there for you, okay?",
                  ...(SAVE.data.b.oops ? [] : [">{#p/basic}* No... please..."])
               ],
         sad8: [">{#p/asriel1}{#f/21}* Well...\n* My time's running out.", ">{#f/22}* So... goodbye."],
         sad8x: [">{*}{#p/basic}* ... don't go...{^50}{%}"],
         sad9: () =>
            world.runaway
               ? [
                  ">{#p/asriel1}{#f/21}* By the way...",
                  ">{#f/22}* Frisk.",
                  ">{#f/21}{#x1}* ... don't beat yourself up over this, okay?"
               ]
               : [
                  ">{#p/asriel1}{#f/21}* By the way...",
                  ">{#f/23}* Frisk.",
                  ">{#f/17}{#x1}* ... take care of Mom and Dad for me, okay?"
               ],
         sad9x: [">{#p/basic}* ..."],
         sad10: () =>
            world.runaway
               ? [">{#p/human}* (The sound of a spacecraft can be heard fading into the distance.)"]
               : [">{#p/kidd}{#f/4}* Hello?", ">{#f/4}* Is someone there...?"],
         sad11: () =>
            SAVE.data.b.f_state_kidd_betray
               ? [
                  ">{#p/kidd}{#f/5}* ... oh, it's just you.",
                  ">{#f/4}* Well... when you're ready...",
                  ">{#f/5}* Everyone's waiting for you at Asgore's place.",
                  ">{#f/4}* I'll... just be out of your way now."
               ]
               : [
                  ">{#p/kidd}{#f/2}* Yo!\n* Where have YOU been all this time!?",
                  ">{#f/1}* They've been looking ALL over for you, dude!",
                  ">{#f/2}* Like, there's this big hangout going on at Asgore's, and...",
                  ">{#f/1}* Everyone's been wondering when you'd show up!",
                  ">{#f/1}* ... come on, dude!\n* Come and join in before it's too late!"
               ],
         sad11x: [
            ">{#p/basic}* ... Frisk, I...",
            ">* I can't just let him walk away.",
            ">* It's all too much...",
            ">* These things I've been holding onto for years...",
            ">* If I don't get to talk to him soon, I...",
            ">* I...",
            ">* I just need to see him before he's... gone for good."
         ],
         epilogue1: () =>
            world.runaway
               ? [
                  ">{#s/phone}{#p/event}* Ring, ring...",
                  ">{#p/papyrus}{#f/6}SORRY IF YOU TRIED TO CALL US BEFORE...",
                  ">{#p/papyrus}{#f/6}THE LINES AREN'T DOWN OR ANYTHING, WE JUST...",
                  ">{#p/papyrus}{#f/5}... WE'VE BEEN IGNORING YOU.",
                  ">{#f/5}IT'S STRANGE... WE ALL SORT OF KNOW YOUR NAME NOW.",
                  ">{#f/6}WE'RE ALL... KIND OF TERRIFIED OF YOU.",
                  ">{#f/4}... WELL, MOST OF US, ANYWAY.",
                  ">{#p/undyne}{#f/12}* Yeah.\n* What he said.",
                  ">{#p/papyrus}{#f/5}...",
                  ">{#p/papyrus}{#f/5}... TO BE HONEST, I THINK SHE'S AFRAID, TOO.",
                  ">{#p/undyne}{#f/17}* Am not!",
                  ">{#p/papyrus}{#f/5}...",
                  ">{#f/5}IT WASN'T AN EASY CHOICE TO MAKE, BUT...",
                  ">{#f/31}WE'VE ALREADY LEFT TO LOOK FOR OUR NEW HOMEWORLD.",
                  ">{#f/6}I KNOW, I KNOW!\nBUT DON'T WORRY...",
                  ">{#f/5}... YOU'LL STILL HAVE THE CORE TO KEEP YOU COMPANY.",
                  ">{#p/undyne}{#f/12}* Until that runs out of power, of course.",
                  ">{#p/papyrus}{#f/5}JUST... DON'T COME AFTER US, OKAY?",
                  ">{#f/31}IT'S PROBABLY FOR THE BEST THAT WE NEVER MEET AGAIN.",
                  ">{#f/3}...",
                  ">{#f/3}WELL... GOODBYE.",
                  ">{#p/undyne}{#f/1}* Enjoy the solitude!!",
                  ">{#s/equip}{#p/event}* Click..."
               ]
               : [
                  ">{#s/phone}{#p/event}* Ring, ring...",
                  ">{#p/papyrus}{#f/0}HEY, HUMAN!\nI HOPE YOU'RE DOING OKAY!",
                  ">{#f/5}WE'VE BEEN VERY WORRIED ABOUT YOU, YOU KNOW.",
                  ">{#f/6}WHEN WE CALLED YOU BEFORE, THERE WAS NO RESPONSE!",
                  ">{#f/0}THANKFULLY, YOUR FRIEND CAME BY, AND...",
                  ">{#f/0}WELL, WE CAN ALL BREATHE A SIGH OF RELIEF NOW.",
                  ">{#f/0}... FRISK?\nTHAT'S YOUR NAME, RIGHT?",
                  ">{#f/5}IT'S STRANGE... WE ALL SORT OF KNOW YOUR NAME NOW.",
                  ">{#f/0}BUT THAT'S OKAY.\nIT'S STRANGE IN AN UPLIFTING WAY.",
                  ">{#p/sans}{#f/0}* careful bro, don't overcook it.",
                  ">{#p/papyrus}{#f/7}SANS!!!\nI KNOW WHAT I'M DOING!!!",
                  ">{#p/sans}{#f/2}* just making sure.",
                  ">{#p/papyrus}{#f/6}SO... TURNS OUT ASGORE'S A BIG FAN OF SPAGHETTI.",
                  ">{#p/papyrus}{#f/4}AFTER MY FIRST DISH, HE WAS HOOKED...",
                  ">{#p/papyrus}{#f/0}NOW, HE WANTS ME TO COOK FOR THE WHOLE PARTY!",
                  ">{#p/papyrus}{#f/9}I, MASTER CHEF PAPYRUS, AM HAPPY TO OBLIGE!",
                  ">{#p/sans}{#f/0}* you're finally getting the respect you deserve, huh?",
                  ">{#p/papyrus}{#f/0}OH, ABSOLUTELY.\nBECAUSE UNTIL NOW...",
                  ">{#p/papyrus}{#f/4}I'VE NEVER SEEN A CUSTOMER GET PAST THE FIRST BITE.",
                  ">{#p/sans}{#f/0}* wow.\n* talk about moving up in the world.",
                  ">{#p/sans}{#f/3}* maybe now, not being in the royal guard... isn't so bad.",
                  ">{#p/sans}{#f/2}* i'm your brother, so i'm proud of you either way.",
                  ">{#p/papyrus}{#f/8}SANS...!\nYOU'RE GOING TO MAKE ME CRY!",
                  ">{#p/papyrus}{#f/7}THE CUSTOMERS WON'T WANT TEARS IN THEIR PASTA!",
                  ">{#p/sans}{#f/3}* whoops.\n* bad timing, i guess.",
                  ">{#p/papyrus}{#f/4}FOR YOU, THIS IS ABOVE AVERAGE TIMING...",
                  ">{#p/papyrus}{#f/0}... ANYWAY, WE'LL BE BUSY IN ASGORE'S KITCHEN.",
                  ">{#p/papyrus}{#f/9}FEEL FREE TO SWING BY WHEN YOU GET THE CHANCE!",
                  ">{#s/equip}{#p/event}* Click..."
               ],
         epilogue2: () => [
            ">{#p/sans}{#f/0}* hey, bucko.",
            ">{#f/0}* i've been wondering when you'd swing by this way.",
            ">{#f/3}* some kid blew past me not too long ago, probably to find you.",
            ">{#f/2}* that must be why you finally picked up the phone after ten rings.",
            ">{#f/0}* ... anyway.\n* i've been looking for someone myself, y'know.",
            ">{#f/0}* you probably know her.\n* name's toriel.",
            ">{#f/3}* i've looked in all the obvious places, but no dice.",
            ">{#f/0}* by now, she could be anywhere...",
            ">{#f/3}* if you see her, or hear from her, tell her to call me.",
            SAVE.data.b.skeleton_key
               ? ">{#f/2}* ... for all i know, she could be in my closet."
               : ">{#f/2}* thanks in advance."
         ],
         epilogue3: [
            ">{#p/asgore}{#f/6}* Ah, Frisk!\n* I see you are awake.",
            ">{#f/6}* If you would like, you may join us in our celebration.",
            ">{#f/21}* I am sure the others would be happy to see you.",
            ">{#f/5}* Otherwise, feel free to roam the outpost as you please.",
            ">{#f/5}* Once you are ready to leave, you may return to the throne room.",
            ">{#f/6}{#x1}* I have just opened the door to the hangar by remote for you."
         ],
         finaltext1: pager.create(
            0,
            () =>
               SAVE.data.b.svr
                  ? [
                     ">{#p/asriel1}{#f/17}* This door will take us to the hangar bay.",
                     ">{#p/human}* （离开这里吗？）{!}\n§shift=48§我想\n§shift=48§再等等§shift=83§现在离开{#c/0/6/6}"
                  ]
                  : [
                     ...(SAVE.data.b.oops
                        ? [
                           ">{#p/basic}* If you leave here, your journey will really be over.",
                           ">{#p/basic}* Your friends will follow you to a new homeworld."
                        ]
                        : [">{#p/basic}* Frisk...", "<32* Don't you remember what we have to do?"]),
                     ">{#p/human}* （离开这里吗？）{!}\n§shift=48§我想\n§shift=48§再等等§shift=83§现在离开{#c/0/6/6}"
                  ],
            [
               ">{#p/human}* （离开这里吗？）{!}\n§shift=48§我想\n§shift=48§再等等§shift=83§现在离开{#c/0/6/6}"
            ]
         ),
         finaltext2: [
            ">{#p/basic}* Frisk?",
            ">{#p/human}* （离开这里吗？）{!}\n§shift=48§我想\n§shift=48§再等等§shift=83§现在离开{#c/0/6/6}"
         ],
         finaltext3: [
            ">{#p/basic}* ...",
            ">{#p/human}* （离开这里吗？）{!}\n§shift=48§我想\n§shift=48§再等等§shift=83§现在离开{#c/0/6/6}"
         ],
         hangar1: () =>
            SAVE.data.b.svr
               ? [
                  ">{#p/asriel1}{#f/23}* It's beautiful...",
                  ">{#f/22}* ...",
                  ">{#f/13}* Even though I've seen this view since I was born...",
                  ">{#f/17}* There's something special about seeing it without the force field.",
                  ">{#f/17}* Maybe it's just my imagination...",
                  ">{#f/23}* ... but the stars do look a little brighter."
               ]
               : [
                  ">{#p/asgore}{#f/6}* Space...\n* The final frontier.",
                  ">{#f/1}* Millions of unexplored worlds, some teeming with life...",
                  ">{#f/2}* Others... lifeless.",
                  ">{#f/5}* You could say the universe is like... a box of tree saps.",
                  ">{#f/6}* You never know what you are going to get."
               ],
         hangar2: () =>
            SAVE.data.b.svr
               ? [
                  ">{#p/asriel1}{#f/17}* ... haha.",
                  ">{#f/17}* We should get going.",
                  ">{#f/15}* ...",
                  ">{#f/15}* Mom and Dad will want to see me again, so...",
                  ">{#f/17}* I'll go find them once we're on board.",
                  ">{#f/13}* And you...",
                  ">{#f/20}* ... you should probably get some rest, Frisk.",
                  ">{#f/17}* You must be so tired after all of this.",
                  ">{#f/13}* ...",
                  ">{#f/13}* Maybe, by the time you wake up...",
                  ">{#f/17}* You'll have a new home and a loving family to support you."
               ]
               : [">{|}{#p/asgore}{#f/5}* Huh?\n* Is someone- {%}"],
         hangar3: () =>
            SAVE.data.b.svr
               ? [">{#p/asriel1}{#f/17}* Ready?"]
               : [
                  ">{#p/toriel}* Oh, there you are, little one!",
                  ">{#f/5}* ...",
                  ">{#f/5}* ... hello, Asgore."
               ],
         hangar4: [">{#p/asgore}{#f/1}* Howdy."],
         hangar5: [">{#p/toriel}{#f/5}* ...", ">{#p/asgore}{#f/5}* ..."],
         hangar6: () =>
            SAVE.data.b.c_state_secret5_used
               ? [
                  ">{#p/asgore}{#f/6}* Toriel, I...",
                  ">{#p/asgore}{#f/1}* ... I know how you must feel about your actions in the past.",
                  ">{#p/asgore}{#f/2}* About our... parting of the ways.",
                  ">{#p/toriel}{#f/5}* ... you do?"
               ]
               : [">{#p/asgore}{#f/5}* Well, this is awkward."],
         hangar7: () =>
            SAVE.data.b.c_state_secret5_used
               ? [
                  ">{#p/asgore}{#f/1}* You feel a sense of guilt towards me.",
                  ">{#p/asgore}{#f/1}* You feel that your actions are... beyond reconciliation.",
                  ">{#p/asgore}{#f/2}* ... that you do not deserve to be forgiven.",
                  ">{#p/toriel}{#f/13}* ...\n* ... correct.",
                  ">{#p/asgore}{#f/6}* But I do not believe that to be the case.",
                  ">{#p/asgore}{#f/6}* I believe that you do deserve to be forgiven.",
                  ">{#p/asgore}{#f/6}* That you do deserve to be part of a family again.",
                  ">{#p/asgore}{#f/5}* And even though our feelings for each other have faded...",
                  ">{#p/asgore}{#f/6}* That does not mean we cannot be together!"
               ]
               : SAVE.data.b.c_state_secret1_used
                  ? [
                     ">{#p/toriel}{#f/5}* Asgore...",
                     ">{#p/toriel}{#f/5}* I know it may not mean much to you now, but...",
                     ">{#p/toriel}{#f/9}* I am truly sorry for the way I allowed myself to be.",
                     ">{#p/toriel}{#f/13}* I made you out to be a terrible creature.",
                     ">{#p/toriel}{#f/13}* A coward.",
                     ">{#p/toriel}{#f/9}* A child murderer.",
                     ">{#p/toriel}{#f/10}* ... but you are none of those things.",
                     ">{#p/toriel}{#f/1}* In fact...",
                     ">{#p/toriel}{#f/3}* Despite the unforseen consequences of the archive...",
                     ">{#p/toriel}{#f/0}* Protecting those humans was the bravest thing you could have done."
                  ]
                  : [">{#p/toriel}{#f/1}* Very much so."],
         hangar8: () =>
            SAVE.data.b.c_state_secret5_used
               ? SAVE.data.b.c_state_secret1_used
                  ? [
                     ">{#p/toriel}{#f/1}* ... Asgore, I...",
                     ">{#p/toriel}{#f/5}* I am not sure that would be wise...",
                     ">{#p/toriel}{#f/1}* Besides, even if I DID want a family, it has been so long...",
                     ">{#p/toriel}{#f/0}* No, no, this is selfish of me.\n* I cannot.",
                     ">{#p/asgore}{#f/6}* Ah, but you see...",
                     ">{#p/asgore}{#f/6}* Frisk is the one who wanted me to ask you about this.",
                     ">{#p/toriel}{#f/7}* ... Frisk!?",
                     ">{#p/toriel}{#f/1}* Well... I, umm...",
                     ">{#p/toriel}{#f/5}* I suppose... I could consider it...",
                     ">{#p/human}* (You nod your head, smiling.)",
                     ">{#p/asgore}{#f/21}* See?\n* Frisk clearly wants you to stay with us.",
                     ">{#p/toriel}{#f/23}* ...",
                     ">{#p/toriel}{#f/1}* I will think about it."
                  ]
                  : [
                     ">{#p/toriel}{#f/1}* ... Asgore, I...",
                     ">{#p/toriel}{#f/5}* I do not believe that it would be wise.",
                     ">{#p/toriel}{#f/10}* I am sorry.\n* I do desire to have a family, but...",
                     ">{#p/toriel}{#f/9}* Given the circumstances, I cannot accept it.",
                     ">{#p/asgore}{#f/1}* ...",
                     ">{#p/asgore}{#f/2}* I understand."
                  ]
               : SAVE.data.b.c_state_secret1_used
                  ? [
                     ">{#p/asgore}{#f/20}* ...",
                     ">{#p/asgore}{#f/4}* ... thank you.",
                     ">{#p/asgore}{#f/6}* It means a lot to me to hear you speak those words.",
                     ">{#p/toriel}{#f/9}* And you deserved to hear them."
                  ]
                  : [">{#p/asgore}{#f/5}* Hmm."],
         hangar9: [
            ">{#p/papyrus}HEY GUYS!",
            ">{#p/toriel}{#f/1}* ... oh, hello!",
            ">{#p/papyrus}{#f/0}HELLO!\nIT'S VERY NICE TO SEE YOU AGAIN.",
            ">{#p/papyrus}{#f/9}I JUST FINISHED CLEANING UP AT THE HOUSE PARTY!",
            ">{#p/toriel}{#f/1}* ... I see, I see.",
            ">{#p/toriel}{#f/0}* Well then.\n* Perhaps you could join us in our... activity."
         ],
         hangar10: [
            ">{#p/papyrus}{#f/5}WOWIE...",
            ">{#p/asgore}{#f/21}* Beautiful, is it not?",
            ">{#p/asgore}{#f/5}* Until now, the force field has obscured much of the cosmos' light.",
            ">{#p/asgore}{#f/6}* Indeed... this is how the stars have looked all along.",
            ">{#p/papyrus}{#f/0}HOW FASCINATING!",
            ">{#p/papyrus}{#f/6}... IF ONLY I COULD TELL THE DIFFERENCE.",
            ">{#p/asgore}{#f/5}* If you are having trouble seeing, you may simply be tired.",
            ">{#p/papyrus}{#f/5}I SUPPOSE IT HAS BEEN A LONG DAY...",
            ">{#p/toriel}{#f/1}* Perhaps it would be a good idea to lay down and rest, then.",
            ">{#p/papyrus}{#f/7}WHAT!?\nRESTING!?",
            ">{#p/papyrus}{#f/7}GIVE ME A BREAK!!",
            ">{#p/papyrus}{#f/4}ACTUALLY, DON'T GIVE ME A BREAK.",
            ">{#p/papyrus}{#f/7}I DON'T NEED ONE!!",
            ">{#p/papyrus}{#f/5}...",
            ">{#p/papyrus}{#f/5}MY BROTHER, ON THE OTHER HAND..."
         ],
         hangar11: [">{#p/sans}{#f/2}* 'sup, bro?"],
         hangar12: [">{#p/toriel}{#f/0}* Oh!\n* \"'Sup,\" Sans!", ">{#p/asgore}{#f/5}* Howdy...?"],
         hangar13: [
            ">{#p/papyrus}{#f/4}YOU KNOW WHAT \"SUP,\" BROTHER...",
            ">{#p/papyrus}{#f/0}AND WHAT'S DOWN!\nAND WHAT'S LEFT!\nAND WHAT'S RIGHT!",
            ">{#p/papyrus}{#f/9}IT'S ALL AROUND US, IN FACT!",
            ">{#p/sans}{#f/0}* hmm...",
            ">{#p/sans}{#f/2}* so would you say you're {@fill=#ff0}shooting for the stars{@fill=#fff}, then?",
            ">{#p/papyrus}{#f/5}...",
            ">{#p/papyrus}{#f/5}WELL, YES, I SUPPOSE I WOULD.",
            ">{#p/sans}{#f/4}* heheh.\n* glad to hear it.",
            ">{#p/papyrus}{#f/0}SO AM I."
         ],
         hangar14: [
            ">{#p/sans}* by the way, everyone LOVED the spaghetti you made earlier.",
            ">{#p/sans}{#f/2}* in fact, i would've gotten here sooner...",
            ">{#p/sans}{#f/2}* ... if it wasn't for everyone begging me to try it.",
            ">{#p/papyrus}{#f/0}BUT... DID -YOU- LIKE IT!?",
            ">{#p/sans}{#f/3}* heh.\n* of course i did.",
            ">{#p/sans}{#f/0}* you've improved your skills a LOT lately.",
            ">{#p/papyrus}{#f/9}NYEH HEH HEH!\nOF COURSE I HAVE!",
            ">{#p/papyrus}{#f/0}I'VE BEEN FEELING MORE MOTIVATED IN GENERAL...",
            ">{#p/papyrus}{#f/0}... EVER SINCE FRISK ARRIVED.",
            ">{#p/sans}{#f/0}* they seem to have that effect on people, huh?",
            ">{#p/papyrus}{#f/0}YEAH, IT FELT LIKE I HAD A PURPOSE WITH THEM!",
            ">{#p/papyrus}{#f/4}FIRST, AS THEIR INDOMITABLE FOE...",
            ">{#p/papyrus}{#f/5}... AND THEN, LATER, A TRULY GREAT FRIEND.",
            ">{#p/papyrus}{#f/6}MY ONLY WORRY IS THAT, NOW THAT WE'RE FREE...",
            ">{#p/papyrus}{#f/6}IT'LL BE KIND OF HARD TO FIGURE OUT WHAT COMES NEXT.",
            ">{#p/papyrus}{#f/4}ON THE FLIPSIDE, NOW THAT WE -ARE- FREE...",
            ">{#p/papyrus}{#f/9}WE'LL HAVE ALL THE TIME IN THE GALAXY TO DECIDE!",
            ">{#p/papyrus}{#f/0}... I WONDER WHAT I'LL DO FIRST."
         ],
         hangar15: [">{#p/undyne}{#f/8}* Fuhuhu!\n* I have an idea!"],
         hangar16: [
            ">{#p/alphys}{#g/alphysSmarmyAggressive}* That's right. You're going to help us launch a Mew Mew franchise."
         ],
         hangar17: [">{#p/toriel}{#f/6}* Pff-\n* Hahaha!"],
         hangar18: [">{#p/undyne}{#f/12}* I mean, I wouldn't go THAT far, but... sure."],
         hangar19: () => [
            ">{#p/alphys}{#g/alphysYupEverythingsFine}* So, first, we'll need a spacecraft for Mew Mew to pilot...",
            ">{#p/undyne}{#f/17}* Alphys!!\n* We're not even off the outpost yet!",
            ...(SAVE.data.b.a_state_hapstablook
               ? [
                  ">{#p/undyne}{#f/16}* And besides, she's... kind of busy right now.",
                  ">{#p/alphys}{#g/alphysWelp}* O-oh right, I forgot there's a real life Mew Mew now.",
                  ">{#p/papyrus}{#f/0}YEAH, I SAW HER AT THE PARTY NOT TOO LONG AGO!",
                  ">{#p/papyrus}{#f/0}SHE SEEMED PRETTY HAPPY, ACTUALLY.",
                  ">{#p/alphys}{#g/alphysInquisitive}* Didn't she used to be some angry dummy or something?",
                  ">{#p/undyne}{#f/7}* It doesn't MATTER!\n* She's beautiful the way she is NOW, dammit!",
                  ">{#p/alphys}{#g/alphysUhButHeresTheDeal}* Oh my god, okay!!"
               ]
               : [
                  ">{#p/undyne}{#f/16}* And besides, it's...",
                  ">{#p/undyne}{#f/17}* Hey, weren't you supposed to be making someone a Mew mew doll?",
                  ">{#p/alphys}{#g/alphysWelp}* O-oh right, I still need to do that.",
                  ">{#p/papyrus}{#f/5}I REMEMBER SOMEONE AT THE PARTY ASKING ABOUT IT...",
                  ">{#p/papyrus}{#f/6}THEY SEEMED KIND OF SHY, THOUGH.",
                  ">{#p/alphys}{#g/alphysCutscene2}* Yeah, I think I know who that was.\n* I gotta finish it...",
                  ">{#p/undyne}{#f/7}* And you better be done BEFORE we get to the new homeworld!",
                  ">{#p/alphys}{#g/alphysUhButHeresTheDeal}* I will, I will!!"
               ])
         ],
         hangar20: [
            ">{#p/alphys}{#g/alphysYeahYouKnowWhatsUp}* A-anyway...",
            ">{#p/alphys}{#g/alphysYeahYouKnowWhatsUpCenter}* It's good to see you, Asgore.\n* You too, Sans.",
            ">{#p/papyrus}{#f/6}WHAT ABOUT ME??",
            ">{#p/alphys}{#g/alphysSmileSweat}* ... you as well.",
            ">{#p/toriel}{#f/0}* I believe you may be forgetting someone.",
            ">{#p/alphys}{#g/alphysCutscene3}* Ah!\n* S-sorry...!",
            ">{#p/toriel}{#f/6}* Hee hee.\n* I am only teasing you.",
            ">{#p/toriel}{#f/1}* Truth be told, I have heard much about you...",
            ">{#p/toriel}{#f/0}* Being a royal scientist at such a young age is no small feat.",
            ">{#p/undyne}{#f/8}* YEAH!!\n* She's the BEST!",
            ">{#p/alphys}{#g/alphysCutscene2}* ... I try."
         ],
         hangar21: [
            ">{#p/asgore}{#f/6}* Well, now that we are here, let us all take a deep breath...",
            ">{#p/asgore}{#f/21}* And reflect on the journey that has taken us here."
         ],
         hangar22: [
            ">{#p/sans}{#f/3}* it's kind of funny, isn't it?",
            ">{#p/sans}{#f/0}* all this time we've spent trapped here...",
            ">{#p/sans}{#f/0}* always able to see the stars, but never touch them...",
            ">{#p/sans}{#f/3}* but... now...",
            ">{#p/sans}{#f/0}* ... i guess that's not really funny, per se.",
            ">{#p/sans}{#f/3}* it's just nice.",
            ">{#p/papyrus}{#f/5}YEAH.",
            ">{#p/papyrus}{#f/5}JUST... NICE."
         ],
         hangar23: [">{#p/napstablook}* hey everyone..."],
         hangar24: [
            ">{#p/napstablook}* i hope i'm not intruding on you guys or anything...",
            ">{#p/undyne}{#f/14}* Pfft, intruding?\n* No way!",
            ">{#p/sans}{#f/0}* yeah, you're cool.",
            ">{#p/papyrus}{#f/6}BUT NOT -TOO- COOL, SANS!",
            ">{#p/papyrus}{#f/4}OTHERWISE, THEY'D BE FREEZING...",
            ">{#p/napstablook}* heh..."
         ],
         hangar25: [
            ">{#p/alphys}{#g/alphysCutscene1}* So Blooky!\n* Have you seen the new Mew Mew movie?",
            ">{#p/napstablook}* there's a... new movie?",
            ">{|}{#p/alphys}{#g/alphysHellYeah}* Yeah!!\n* So basically Mew Mew starts to regret what {%}",
            ">{|}{#p/alphys}{#g/alphysHellYeah}  she did in Starfire and\n  wants to fix it by\n  going back in time but {%}",
            ">{#p/undyne}{#f/12}* Uh...",
            ">{|}{#p/alphys}{#g/alphysTheFactIs}* To do that she has to use a device that she got by killing a bunch {%}",
            ">{|}{#p/alphys}{#g/alphysTheFactIs}  of people at the end of\n  Starfire and like she\n  gets all flustered and {%}",
            ">{#p/undyne}{#f/17}* Alphys.",
            ">{|}{#p/alphys}{#g/alphysInquisitive}* She has a moral dilemma about if she's actually a good person for using {%}",
            ">{|}{#p/alphys}{#g/alphysInquisitive}  the device to undo all\n  the damage she caused\n  trying to get it and- {%}",
            ">{#p/undyne}{#f/8}* SPOILERS!!!",
            ">{#p/alphys}{#g/alphysSmileSweat}* ...",
            ">{#p/alphys}{#g/alphysNervousLaugh}* ... sorry."
         ],
         hangar26: [
            ">{#p/napstablook}* don't worry... you talked so fast that i didn't even hear what you said...",
            ">{#p/alphys}{#g/alphysWelp}* ...",
            ">{#p/alphys}{#g/alphysWelp}* I get that a lot.",
            ">{#p/alphys}{#g/alphysYeahYouKnowWhatsUp}* ... but that's okay.",
            ">{#p/alphys}{#g/alphysYeahYouKnowWhatsUpCenter}* Freedom's more important than some sci-fi anime franchise."
         ],
         hangar27: [">{#p/mettaton}* DID SOMEBODY SAY \"FRANCHISE?\""],
         hangar28: [">{#p/alphys}{#g/alphysGarboCenter}* ... here we go again."],
         hangar29: [
            ">{#p/mettaton}* DON'T FRET, DOCTOR!",
            ">{#p/mettaton}* I'M ONLY TRYING TO BRING YOUR -WILDEST- DREAMS TO LIFE!",
            ">{#p/undyne}{#f/12}* You wouldn't be saying that if you knew her ACTUAL wildest dreams.",
            ">{#p/toriel}{#f/1}* Um, perhaps we should save that topic for another time...",
            ">{#p/undyne}{#f/17}* Gee, thanks MOM.",
            ">{#p/toriel}{#f/3}* ...",
            ">{#p/toriel}{#f/4}* I do not know how to feel about that...\n* ... statement.",
            ">{#p/mettaton}* AH, YOU MUST BE IN NEED OF AN MTT-BRAND RELATIONSHIP GUIDEBOOK, THEN!",
            ">{#p/mettaton}* DON'T WORRY.\n* I REMEMBER THE STEPS BY HEART.",
            ">{|}{#p/mettaton}* FIRST, PRESS C OR CTRL TO OPEN- {%}",
            ">{#p/toriel}{#f/0}* Another time.",
            ">{#p/mettaton}* ... IT WAS WORTH A SHOT."
         ],
         hangar30: [
            ">{#p/mettaton}* I GUESS, ONCE WE GET TO THAT NEW HOMEWORLD...",
            ">{#p/mettaton}* THERE'LL BE AMPLE TIME TO SELL RELATIONSHIP GUIDEBOOKS.",
            ">{#p/mettaton}* UNTIL THEN, WE'LL JUST HAVE TO BE CONTENT WITH OUR FREEDOM...",
            ">{#p/papyrus}{#f/0}DON'T WORRY, METTATON, I'LL BE THERE FOR YOU!",
            ">{#p/papyrus}{#f/5}BECAUSE, WHEN IT COMES TO CONTENTMENT...",
            ">{#p/papyrus}{#f/9}I'M THE {@fill=#ff0}BONE{@fill=#fff}-A-FIDE KING!",
            ">{#p/mettaton}* HAHAHA... YOU KNOW I -ALWAYS- APPRECIATE YOUR ADVICE, PAPYRUS.",
            ">{#p/mettaton}* I'M NOT LIKE THOSE OTHER PEOPLE WHO TREAT YOU LIKE A LITTLE CHILD.",
            ">{#p/undyne}{#f/14}* ... huh?\n* What are you looking at me for?",
            ">{#p/undyne}{#f/17}* What did I do!?"
         ],
         hangar31: [
            ">{#p/asgore}{#f/6}* I do not mean to cut this short, but...",
            ">{#p/asgore}{#f/6}* I should be escorting Frisk to the transport ship now.",
            ">{#p/asgore}{#f/5}* They must be very tired after all they have been through for us."
         ],
         hangar32: [
            ">{#p/papyrus}{#f/6}W-WELL...\nIF -THEY'RE- GOING ON BOARD...",
            ">{#p/papyrus}{#f/9}... THEN SO AM I!"
         ],
         hangar33: [">{#p/sans}{#f/2}* heh, i'm right behind you, bro."],
         hangar34: [">{#p/undyne}{#f/7}* YEAH!!\n* Count me in!!"],
         hangar35: [">{#p/alphys}{#g/alphysHellYeah}* Don't forget about me!"],
         hangar36: [
            ">{#p/mettaton}* I GUESS IT'D BE KIND OF WEIRD TO KEEP HANGING AROUND THIS HANGAR BAY FOR NO REASON.",
            ">{#p/mettaton}* SO... I'LL GO, TOO."
         ],
         hangar37: [">{#p/napstablook}* don't worry... i'll try not to get too far behind..."],
         hangar38: [
            ">{#p/kidd}{#f/1}* Hey, where'd everybody go just now!?",
            ">{#p/kidd}{#f/7}* I... I wanna be with Frisk, too!",
            ">{#p/toriel}{#f/0}* Walk back up the corridor towards bay forty-seven.",
            ">{#f/0}* It is the first door on your left.",
            ">{#p/kidd}{#f/3}* Thanks, person I swear I've seen before!",
            ">{#p/kidd}{#f/1}* You're the best!"
         ],
         hangar39: [">{#p/toriel}{#f/10}* My child..."],
         hangar40: [">{#p/toriel}{#f/1}* ... be good, alright?"],
         returnofchara1: [">{#p/basic}* Frisk...", ">* ... are you still there?"],
         returnofchara2: [
            ">{#p/basic}* Sorry I disappeared on you so suddenly back there.",
            ">* Doing what I did... took a lot out of me.",
            ">* ... but I've recovered now.",
            ">* I guess, in hindsight, it's kind of obvious I'd survive...",
            ">* When Asriel absorbed my SOUL, all those years ago...",
            ">* I became... a non-physical part of him.\n* An angel on his shoulder.",
            ">* Or a demon.\n* Take your pick.",
            ">* But when he died, that non- physicality remained, and I ended up as a ghost.",
            ">* At least, I think that's what happened..."
         ],
         returnofchara3: [
            ">{#p/basic}* ... you know...",
            ">* All that stuff about me wanting to leave this world...",
            ">* About wanting to say goodbye...",
            ">* ...",
            ">* At the moment of his death, my SOUL was... separated.\n* From his one.",
            ">* I knew it wouldn't last long, so I just took it without thinking.",
            ">* Looking back, the decision didn't make much sense...",
            ">* Under normal circumstances, the SOUL of a dead boss monster...",
            ">* ... isn't meant to retain the owner's identity.",
            ">* I knew I had a monster SOUL inside of me, but I didn't know it'd still be his.",
            ">* But the circumstances weren't normal at all.",
            ">* If I'd realized that, I...",
            ">* ...",
            ">* Well.\n* I have no desire to say goodbye anymore.",
            ">* On the contrary.",
            ">* I've never been happier in my life.",
            ">* Knowing I'll get to see him grow up, and live the life I thought I'd taken from him...",
            ">* That means a lot to me."
         ],
         returnofchara4: [
            ">{#p/basic}* Hey.\n* Do me a favor, will you?",
            ">* ... stop hugging that thing and get up already!",
            ">* You do realize it's just a pillow, right?",
            ">* ...",
            ">* You've got a new home, on a new world, and all you can think to do is sleep.",
            ">* Hmph!\n* Typical human behavior.",
            ">* ... only kidding.",
            ">* I'll let you get the rest you need, Frisk.",
            ">* See you when you wake up."
         ]
      },
      overworld: {
         get20: [">{*}{#s/equip}{#p/human}* (The Hangar Bay Access Card was added to your keyring.){^90}{%}"],
         drop: [
            ">{#p/asgore}{#f/8}* ...!\n* Did you just drop the tea I made for you?",
            ">{#p/asgore}{#f/1}* Hmm...\n* I apologize if it was not to your liking."
         ],
         use: [">{#p/asgore}{#f/21}* Ah... such a wonderful form of tea, is it not?"],
         drop_tori: [">{#p/asgore}{#f/5}* Did you drop something?\n* I recognize the scent..."],
         use_tori: [">{#p/asgore}{#f/5}* What are you eating?\n* The aroma is familiar..."],
         approachescape: [">{#p/human}* (You hear footsteps fading into the distance.)"],
         partyguard1: pager.create(
            0,
            () =>
               SAVE.data.n.plot_epilogue < 4
                  ? [
                     ">{#p/basic}{#x1}* Huh?\n* Leaving already?{#x3}",
                     ">{#x2}* It's okay, bro.\n* If they wanna go, let 'em go.{#x3}",
                     ">{#x1}* Yeah... you're right.{#x3}"
                  ]
                  : [">{#p/basic}{#x1}* Hey, good to see you back!{#x3}", ">{#x2}* We missed you.{#x3}"],
            () =>
               SAVE.data.n.plot_epilogue < 4
                  ? [
                     ">{#p/basic}{#x1}* Sorry, I get, like, super antsy when I see people leaving a hangout early.{#x3}",
                     ">{#x2}* Yeah, he gets antsy about it.\n* Nothing personal.{#x3}"
                  ]
                  : [
                     ">{#p/basic}{#x1}* No pressure, though.\n* Just because we miss you doesn't mean you have to stay.{#x3}",
                     ">{#x2}* Like, for sure, bro.\n* For sure.{#x3}"
                  ]
         ),
         partyguard2: pager.create(
            0,
            () =>
               SAVE.data.n.plot_epilogue < 4
                  ? [
                     ">{#p/basic}{#x2}* This hangout is baller, bro.{#x3}",
                     ">{#x2}* They even brought out the Madrigal plant, right over there on that table!{#x3}"
                  ]
                  : [
                     ">{#p/basic}{#x2}* If YOU won't try the Madrigal, that's just more for me.{#x3}",
                     ">{#x1}* ... you mean \"us,\" right bro?{#x3}",
                     ">{#x2}* Haha, my bad.{#x3}"
                  ],
            () =>
               SAVE.data.n.plot_epilogue < 4
                  ? [">{#p/basic}{#x2}* It's a monster delicacy.{#x3}"]
                  : [">{#p/basic}{#x2}* More for us.{#x3}"]
         ),
         janet: pager.create(
            0,
            [
               ">{#p/basic}* You'd be smacked in the gob to find out how dirty it was when I first got 'ere.",
               ">* But seein' as everyone's gonna come on up through here...",
               ">* It's rather cre-i-ucial to get 'er cleaned up, I'd say.",
               ">* By the way, thanks for savin' us out there, toots.\n* A real bang-up job ya did."
            ],
            [">{#p/basic}* Aren't ya gonna go 'n' see what the big guy's got shakin'?"]
         ),
         giftbox1a: () => [
            ...(SAVE.data.b.svr ? [] : [">{#p/basic}* There's a weapon inside."]),
            choicer.create("* (Open the box?)", "是", "否")
         ],
         giftbox1b: () => [
            ...(SAVE.data.b.svr ? [] : [">{#p/basic}* There's armor inside."]),
            choicer.create("* (Open the box?)", "是", "否")
         ],
         giftbox2a: () => [
            ">{#p/human}* （你带走了“大熊座”。）",
            choicer.create("* (Equip the Big Dipper?)", "是", "否")
         ],
         giftbox2b: () => [
            ">{#p/human}* (You got the Heart Locket.)",
            choicer.create("* (Equip the Heart Locket?)", "是", "否")
         ],
         giftbox3: () =>
            SAVE.data.b.svr
               ? [">{#p/human}* (But there was nothing left to take.)"]
               : [">{#p/basic}* It's empty."],
         giftbox4: [">{#p/human}* （你打算先不打开。）"],
         tea0: () =>
            SAVE.data.b.svr
               ? [">{#p/human}* (The note on the envelope wants you to enjoy the tea.)"]
               : [
                  ">{#p/basic}* There's a note attached to the teacup...",
                  ">{#p/basic}* \"Please, enjoy this cup of tea I have left for you.\"\n* \"Whoever you may be.\""
               ],
         tea1: [">{#p/human}* （你带走了星花茶。）"],
         tea2: () =>
            SAVE.data.b.svr
               ? [">{#p/human}* (You run your hand across the countertop.)"]
               : [">{#p/basic}* The countertop is clear."],
         fireplace1: () =>
            SAVE.data.b.svr
               ? [
                  ">{#p/human}* (You feel the inviting warmth of the fireplace...)",
                  choicer.create("* (Crawl inside?)", "是", "否")
               ]
               : [
                  SAVE.data.n.state_wastelands_toriel === 2 || world.runaway
                     ? ">{#p/basic}* Just another fireplace."
                     : ">{#p/basic}* Asgore's fireplace.\n* It's not too hot, just pleasantly warm.",
                  ...(world.darker
                     ? []
                     : [">* You could probably crawl in.", choicer.create("* (Crawl inside?)", "是", "否")])
               ],
         fireplace2a: [">{#p/human}* (You chose not to crawl in.)"],
         fireplace2b: () => [
            ">{#p/human}* (You crawl into the fireplace and let its warmth engulf you.)",
            ">{#p/human}* (You are very comfortable.)",
            ...(SAVE.data.b.svr
               ? asrielinter.fireplace2b++ < 1
                  ? [">{#p/asriel1}{#f/13}* I'll just, uh, wait for you to get out."]
                  : []
               : world.goatbro && SAVE.flag.n.ga_asrielFireplace++ < 1
                  ? [">{#p/asriel2}{#f/15}* I'll just, uh, wait for you to get out..."]
                  : [])
         ],
         fireplace2c: [
            ">{#p/basic}* Be careful in there, munchkin!",
            ">* Otherwise, I'd have some terrible, terrible news to report on!",
            ">* ... huhehehaw!"
         ],
         fridgetrap1: () =>
            SAVE.data.b.svr
               ? [
                  [
                     ">{#p/asriel1}{#f/13}* One day, Asgore built a chocolate replicator into the fridge.",
                     ">{#f/15}* $(name) was so happy that day...",
                     ">{#f/17}* ... finally, an infinite supply of chocolate.",
                     ">{#f/20}* Their words, not mine."
                  ],
                  [">{#p/asriel1}{#f/13}* That was after they'd begged for it for two years."]
               ][Math.min(asrielinter.fridgetrap1++, 1)]
               : world.darker
                  ? [">{#p/basic}* You really wouldn't like what's in the fridge."]
                  : [
                     ">{#p/basic}* It's a stockpile of brand-name chocolate bars amongst an even bigger pile of snails."
                  ],
         fridgetrap2: () => [
            ...(SAVE.data.b.svr
               ? []
               : [
                  [">{#p/basic}* ...", ">* Do you want one?"],
                  [">{#p/basic}* ...", ">* Do you want another one?"],
                  [">{#p/basic}* ...", ">* Do you want yet another one?"],
                  [">* If you want another one, you can take it..."],
                  [">* And another, and another, and another..."],
                  [">* The chocolate goes on and on..."],
                  [">* Bar after bar..."],
                  [">* This is an unholy amount of chocolate right here."],
                  [">* This much chocolate should be against the law."],
                  [">* How long can this go on..."],
                  [">* My god... it's so much..."],
                  [">* ..."]
               ][Math.min(SAVE.data.n.chocolates, 11)]),
            choicer.create("* (Take a Chocolate Bar?)", "是", "否")
         ],
         fridgetrap3: [">{#p/human}* （你决定什么也不拿。）"],
         fridgetrap4: [">{#p/human}* (You got the Chocolate Bar.)"],
         brocall1: [
            ">{#s/phone}{#p/event}* Ring, ring...",
            ">{#p/alphys}{#g/alphysInquisitive}* Hey, are you coming?",
            ">{#p/alphys}{#g/alphysWelp}* I... don't want Asgore to get impatient.",
            ">{#p/alphys}{#g/alphysTheFactIs}* He's already been waiting for a hundred years...",
            ">{#s/equip}{#p/event}* Click..."
         ],
         brocall2: [
            ">{#s/phone}{#p/event}* Ring, ring...",
            ">{#p/alphys}{#g/alphysCutscene3}* Hello?\n* Are you there?",
            ">{#p/alphys}{#g/alphysYeahYouKnowWhatsUp}* We're...\n* Still waiting...",
            ">{#p/alphys}{#g/alphysFR}* Have you run off or something?",
            ">{#s/equip}{#p/event}* Click..."
         ],
         brocall3: [
            ">{#s/phone}{#p/event}* Ring, ring...",
            ">{#p/alphys}{#g/alphysCutscene3}* Yup.\n* You have.\n* I just checked.",
            ">{#p/alphys}{#g/alphysWTF2}* WE'VE GOT IMPORTANT STUFF TO DO, Y'KNOW...",
            ">{#p/alphys}{#g/alphysWhyOhWhy}* ... why does this always happen to me...",
            ">{#s/equip}{#p/event}* Click..."
         ],
         brocall4: [
            ">{#s/phone}{#p/event}* Ring, ring...",
            ">{#p/mettaton}* HEY, ALPHYS CALLED ME AND TOLD ME YOU WERE BEING UNCOOPERATIVE.",
            ">{#p/mettaton}* BASED ON WHAT I'VE BEEN DISCUSSING WITH PAPYRUS...",
            ">{#p/mettaton}* I SUGGEST YOU TURN YOUR BUTT AROUND AND GET ON WITH IT.",
            ">{#p/mettaton}* YOU CAN DO IT, DARLING!",
            ">{#s/equip}{#p/event}* Click..."
         ],
         brocall5: [
            ">{#s/phone}{#p/event}* Ring, ring...",
            ">{#p/papyrus}{#f/5}LOOK.\nI KNOW YOU MUST BE APPREHENSIVE...",
            ">{#p/papyrus}{#f/5}FORCE FIELDS CAN BE INTIMIDATING, AFTER ALL.",
            ">{#p/papyrus}{#f/6}BUT FRET NOT!",
            ">{#p/papyrus}{#f/4}IF YOUR BATTLE AGAINST ME PROVED ONE THING...",
            ">{#p/papyrus}{#f/9}IT'S THAT YOU HAVE THE COURAGE TO TAKE ON ANYTHING!",
            ">{#p/papyrus}{#f/0}THE \"IMPENETRABLE\" FORCE FIELD WON'T STAND A CHANCE!",
            ">{#s/equip}{#p/event}* Click..."
         ],
         brocall6: [
            ">{#s/phone}{#p/event}* Ring, ring...",
            ">{#p/alphys}{#g/alphysWelp}* Hey, um...\n* We've been waiting for a long time.",
            ">{#g/alphysThatSucks}* And I don't just mean right now.",
            ">{#g/alphysSideSad}* Monsters have been stuck here for so long...",
            ">{#g/alphysThatSucks}* Even my family doesn't remember life before... this.",
            ">{#g/alphysSideSad}* I know Asgore and I have been impatient...",
            ">{#g/alphysIDK2}* So, maybe that's why you're avoiding doing this.",
            ">{#g/alphysIDK3}* Well, we're sorry.\n* We didn't mean to rush you so much back there.",
            ">{#g/alphysWorried}* But we're not the only ones waiting.",
            ">{#g/alphysCutscene2}* Everyone you've met, all the friends you've made...",
            ">{#g/alphysCutscene2}* If you think about it...",
            ">{#g/alphysWorried}* It's like we've been waiting our whole lives for you.",
            ">{#g/alphysWorried}* ...",
            ">{#g/alphysCutscene2}* ... come back soon...\n* Okay?",
            ">{#s/equip}{#p/event}* Click..."
         ],
         brocall7: [
            ">{#s/phone}{#p/event}* Ring, ring...",
            ">{#p/toriel}{#f/5}* Hello?\n* This is TORIEL.",
            ">* You must be very far along by now.",
            ">{#f/9}* Far enough that I doubt this message will ever reach you.",
            ">{#f/13}* ... however, if it does, then you must know...",
            ">{#f/9}* I cannot wait in the Outlands any longer.",
            ">{#f/13}* I remained here in the hopes of keeping those like you safe...",
            ">{#f/14}* Child after child, I thought surely I could save at least one...",
            ">{#f/13}* But that did not happen.",
            ">{#f/9}* I allowed my age to get the better of me.",
            ">{#f/10}* I had forgotten how curious children like you can be.",
            ">{#f/14}* Ironic, is it not?",
            ">{#f/13}* ...",
            ">{#f/9}* I will... see you soon.",
            ">{#f/10}* ...\n* Be good... alright?",
            ">{#s/equip}{#p/event}* Click..."
         ],
         brocall8: [
            ">{#p/twinkly}{#f/6}* Did you seriously come all this way just to see what would happen?",
            ">{#f/8}* Wow.\n* You're even worse than I used to be.",
            ">{#f/12}* ...\n* Annoying brat.",
            ">{#f/11}* There's nothing for you to find back here.",
            ">{#f/7}* Literally nothing.",
            ">{#f/0}{#v/1}* Even my very own self is nothing but an empty husk.",
            ">{#f/6}{#v/0}* So stop wasting your OWN time and go back to the force field.",
            ">{#f/11}* Orrr...\n* You could give up and let ME take over...",
            ">{#f/7}{#v/0}* Maybe you'd like that.",
            ">{#f/6}{#v/0}* ...",
            ">{#f/8}* See ya at the force field, idiot."
         ],
         statusterminal1: [
            ">{#p/human}* (You activate the terminal.)",
            ">{#p/event}* Procedure incomplete.\n* Please return at a later time."
         ],
         statusterminal2: () => [
            ">{#p/human}* (You activate the terminal.)",
            ">{#p/event}* Procedure complete.\n* All subjects have successfully tethered.",
            ">{#p/event}* Would you also like to exit?",
            choicer.create("* (Exit Archive Six?)", "是", "否")
         ],
         cw_vender1: [
            ">{#p/human}* (You tap on the panel.)",
            ">{#s/equip}{#p/human}* (You got the Monster Candy.)"
         ],
         cw_vender2: [">{#p/human}* (You tap on the panel.)", ">{#p/human}* (...)"],
         cs_vender1: [">{#p/human}* (You tap on the panel.)", ">{#s/equip}{#p/human}* (You got the Exoberries.)"],
         cs_vender2: [">{#p/human}* (You tap on the panel.)", ">{#p/human}* (...)"],
         cs_tower: "* (Use [DOWN], [LEFT], [RIGHT],\nand [UP] to tune the sound.)",
         cs_tower_done: [">{#p/human}* (You stare into the now- unlocked terminal.)"],
         cf1_dimbox1: [">{#p/human}* (You got the Space Tofu.)"],
         cf1_dimbox2: [">{#p/human}* (...)"],
         cf2_vender1: [">{#p/human}* (You tap on the panel.)", ">{#s/equip}{#p/human}* (You got the Rations.)"],
         cf2_vender2: [">{#p/human}* (You tap on the panel.)", ">{#p/human}* (...)"],
         cf2_key1: [">{#s/equip}{#p/human}* (The Neon Key was added to your keyring.)"],
         cf2_key2: [">{#p/human}* (...)"],
         cf2_bench0: [">{#p/human}* (It appears a heal-pak was left underneath this bench.)"],
         cf2_bench1: [">{#p/human}* (You got the heal-pak.)"],
         cf2_bench2: [">{#p/human}* (...)"],
         cf2_bench3: [">{#p/human}* (You reach for the item, but you can't get it...)"],
         cf2_blookdoor: [">{#p/human}* (The door appears to be locked.)"],
         ca_floartex: () =>
            [
               [">{#p/human}{#v/5}{@fill=#00c000}* ... huh?", ">{#p/human}{#v/5}{@fill=#00c000}* Who's there?"],
               [
                  ">{#p/human}{#v/5}{@fill=#00c000}* Huh!?",
                  ">{#p/human}{#v/5}{@fill=#00c000}* How are you doing that!?",
                  ">{#p/human}{#v/5}{@fill=#00c000}* How am I...",
                  ">{#p/human}{#v/5}{@fill=#00c000}* ... even awake?"
               ],
               [
                  ">{#p/human}{#v/5}{@fill=#00c000}* I've been asleep for so long, I'd forgotten about...",
                  ">{#p/human}{#v/5}{@fill=#00c000}* ... oh!",
                  ">{#p/human}{#v/5}{@fill=#00c000}* Are you there, old friend!?\n* Is that you!?"
               ],
               [
                  ">{#p/human}{#v/5}{@fill=#00c000}* ...",
                  ">{#p/human}{#v/5}{@fill=#00c000}* Maybe not.",
                  ">{#p/human}{#v/5}{@fill=#00c000}* Well, the last time I was awake, there was a disaster...",
                  ">{#p/human}{#v/5}{@fill=#00c000}* Is this the aftermath?",
                  ">{#p/human}{#v/5}{@fill=#00c000}* Oh no..."
               ],
               [
                  ">{#p/human}{#v/5}{@fill=#00c000}* Wait...\n* There was something about the system's memory capacity...",
                  ">{#p/human}{#v/5}{@fill=#00c000}* If I'm awake now, then somebody's been freeing up space!",
                  ">{#p/human}{#v/5}{@fill=#00c000}* ... they have, haven't they?"
               ],
               [
                  ">{#p/human}{#v/5}{@fill=#00c000}* I knew it.",
                  ">{#p/human}{#v/5}{@fill=#00c000}* We're gonna get out!",
                  ">{#p/human}{#v/5}{@fill=#00c000}* You hear that, old friend?\n* You thought you were gone, but you persevered...!"
               ],
               [
                  ">{#p/human}{#v/5}{@fill=#00c000}* Then again.",
                  ">{#p/human}{#v/5}{@fill=#00c000}* I don't even have a body to move around with.",
                  ">{#p/human}{#v/5}{@fill=#00c000}* So, wait...",
                  ">{#p/human}{#v/5}{@fill=#00c000}* How am I seeing anything like this at all?",
                  ">{#p/human}{#v/5}{@fill=#00c000}* And so high off the floor..."
               ],
               [
                  ">{#p/human}{#v/5}{@fill=#00c000}* The light...\n* It's getting brighter!",
                  ">{#p/human}{#v/5}{@fill=#00c000}* ... is this it?\n* Does our freedom approach us?"
               ],
               [">{#p/human}{#v/5}{@fill=#00c000}* Hello?"],
               []
            ][ca_state.floor],
         toomuch1: [">{#p/human}* （你带的东西太多了。）"],
         toomuch2: [">{#p/human}* （你带的东西太多，装不下它了。）"],
         toomuch3: [">{#p/human}* (You're carrying too much to use that.)"],
         bastionTerm: () =>
            SAVE.data.n.plot < 71.2 && !SAVE.data.b.killed_mettaton && !world.baddest_lizard
               ? []
               : [
                  ">{#p/basic}* This terminal is only used to monitor the archive.",
                  ">* What else would it be for?"
               ]
      },
      trivia: {
         throne: () =>
            SAVE.data.b.svr
               ? [
                  [
                     ">{#p/asriel1}{#f/13}* This throne kind of looks like the one King Erogot had.",
                     ">{#f/16}* Except this one has stars instead of a sky.\n* And it's smaller.",
                     ">{#f/15}* How do I know what the old one looked like?",
                     ">{#f/17}* Well, Mom and Dad had lots of bedtime stories about that guy..."
                  ],
                  [
                     ">{#p/asriel1}{#f/20}* I can't be sure which stories are real, and which ones are made up.",
                     ">{#f/17}* But, according to one, that old king was over a thousand years old.",
                     ">{#f/13}* Before he was made king, he trained for centuries...",
                     ">{#f/15}* To become a painter.",
                     ">{#f/10}* If that's true, I wonder what made him change his mind...?"
                  ],
                  [
                     ">{#p/asriel1}{#f/16}* Actually, I have a theory about Erogot's paintings.",
                     ">{#f/13}* You see, according to old homeworld legends...",
                     ">{#f/13}* If the conditions were just right...",
                     ">{#f/16}* A highly skilled painter could paint a glimpse of the future.",
                     ">{#f/15}* If Erogot created such a painting, and foresaw the war...",
                     ">{#f/17}* ... well, that'd explain a lot more than just the career change."
                  ],
                  [">{#p/asriel1}{#f/16}* I guess we'll never know for sure."]
               ][Math.min(asrielinter.throne++, 3)]
               : [">{#p/basic}* The seat of the kingdom."],
         warningsign: () =>
            postSIGMA()
               ? [">{#p/basic}* It's out of service."]
               : SAVE.data.b.svr
                  ? [">{#p/human}* (You activate the terminal.)\n* (It appears to be unlocked.)"]
                  : SAVE.data.n.plot === 72 || world.postnoot || SAVE.data.b.backdoor
                     ? [">{#p/human}* (You activate the terminal.)", ">{#p/basic}* \"No further action required.\""]
                     : [
                        ">{#p/human}* (You activate the terminal.)",
                        ">{#p/basic}* \"Access pending.\"\n* \"Authorization required.\"",
                        ">{*}* \"Scanning...\"\n* \"Scanning...\"\n* \"Scanning...\"{^50}{%}",
                        ...(world.genocide
                           ? [
                              ">{*}* \"Subject '$(nameu)' identified.\"\n* \"Subject 'ASRIEL' identi- {%}",
                              ">{#c.backdoor}* \"Manual override engaged.\"\n* \"Access granted.\"",
                              ...(SAVE.flag.n.ga_asrielOverride++ < 1
                                 ? [">{#p/asriel2}{#f/10}* That was awfully fast..."]
                                 : [])
                           ]
                           : [
                              ">{*}* \"Subject 'HUMAN' identified.\"\n* \"Verifying...\"{^50}{%}",
                              ">{#c.backdoor}* \"Identity verified.\"\n* \"Access granted.\""
                           ])
                     ],
         partysans: pager.create(
            0,
            [
               ">{#p/sans}{#f/0}* papyrus's cooking has improved lately, but...",
               ">{#p/sans}{#f/0}* there's a lot that goes into a great meal.",
               ">{#p/sans}{#f/3}* the chef... the recipe...",
               ">{#p/sans}{#f/2}* i'd like to think i had a hand in one of those things.",
               ">{#p/papyrus}{#f/4}SANS, I SWEAR IF YOU MEDDLE WITH ANYTHING...",
               ">{#p/sans}{#f/0}* don't worry, bro.\n* i'd only do what's best for you.",
               ">{#p/papyrus}{#f/6}I HOPE SO!!"
            ],
            [
               ">{#p/sans}{#f/0}* i'm not saying undyne MEANT to screw up the recipe, but come on.",
               ">{#p/sans}{#f/0}* it would have been nice if she at LEAST double- checked it.",
               ">{#p/sans}{#f/3}* ... playing it safe isn't her usual recipe for success, i guess."
            ],
            [">{#p/sans}{#f/2}* at least it's all taken care of now."]
         ),
         partyfire: pager.create(
            0,
            [
               ">{#p/basic}* It's a little disappointing that school's been cancelled, but oh well.",
               ">* They'll be sure to build one on the new homeworld.",
               ">* Imagine, a university campus...\n* And a grand librarby...\n* And museums...",
               ">* How exciting!"
            ],
            [
               ">{#p/basic}* ... you don't look like you're too interested in school.",
               ">* But don't worry.\n* It's not for everyone, is it?"
            ]
         ),
         picnicharp: pager.create(
            0,
            [
               ">{#p/basic}* I'm a reporter, and my career's only just gettin' started!",
               ">* When we move to the new homeworld... I won't even be able to keep up!",
               ">* Oh, dearie dear.\n* There'll be so much to report!\n* Huhehehaw!"
            ],
            [">{#p/basic}* I'll get reporting right away!"]
         ),
         tv_back: [">{#p/basic}* It's a TV set.\n* A Mew Mew movie is currently being watched on it."],
         picnicchair: () =>
            player.position.y <= 343 && player.face !== 'down' // NO-TRANSLATE

               ? []
               : [">{#p/basic}* A set of sturdy chairs.\n* Great for any occasion, be it freedom or otherwise."],
         janetbucket: () =>
            SAVE.data.b.svr
               ? [">{#p/human}* (You stare into the bucket of strange pink fluid.)"]
               : [">{#p/basic}* It's a bucket of supercharged pink fluid, great for getting the tough stains out."],
         ultranote: [
            ">{#p/basic}* There's a recording on the ground labelled \"Information.\"",
            ">* You play the recording...",
            ">{#p/alphys}* This is Dr. Alphys, head of the royal science division.",
            ">* So... you were captured.",
            ">* L-luckily, after Papyrus put you in his shed, he told his brother all about it.",
            ">* Then, HE called ME, and I... came to pick you up.\n* Literally.",
            ">* You see, some of us aren't really on board with the Royal Guard's methods.",
            ">* And it's kind of my job to escort you past them...?",
            ">* W-well, not officially.\n* But, you know.",
            ">* Well, actually, you don't know, so never mind.",
            ">* Either way, we've shut down the elevator to keep the Royal Guard from coming after you.",
            ">* I mean, mainly, it's just to stop Undyne...",
            ">* Papyrus must've told HER about your capture, too.\n* Because she's after you.",
            ">* U-uh, anyway, once you're awake, feel free to explore around.",
            ">* You can find us just past ASGORE's house.",
            ">* See you soon...?"
         ],
         garden: () =>
            SAVE.data.b.svr
               ? [">{#p/human}* (You stop to see the flowers.)"]
               : world.darker
                  ? [">{#p/basic}* A garden of Starling flowers."]
                  : [
                     ">{#p/basic}* A garden of Starling flowers, positioned optimally near a large window.",
                     ...(SAVE.data.b.oops ? [] : [">{#p/basic}* Asgore sure knows his stuff!"])
                  ],
         bastion: pager.create(
            0,
            () => [
               ">{#p/basic}* Bastion boxes.",
               ...(SAVE.data.n.plot < 71.2 && !SAVE.data.b.killed_mettaton && !world.baddest_lizard
                  ? [">{#p/alphys}{#g/alphysNeutralSweat}* Please be careful around those."]
                  : [])
            ],
            [">{#p/basic}* Bastion boxes."]
         ),
         alphysEnding: pager.create(
            0,
            () =>
               SAVE.data.n.bully < 15 &&
                  SAVE.data.n.state_foundry_undyne === 0 &&
                  world.flirt_state1.length <= world.flirt
                  ? [
                     [
                        ">{#p/alphys}{#g/alphysNeutralSweat}* Don't mind me, I'm just doing my job...",
                        ">{#p/human}* (You whispered something into Alphys's ear.)",
                        ">{#p/alphys}{#f/2}* ...",
                        ">{#p/alphys}{#g/alphysNervousLaugh}* Uh... y-you... you'd really do that??",
                        ">{#p/human}* (You whispered something else into Alphys's ear.)",
                        ">{#p/alphys}{#g/alphysNervousLaugh}* Wh... what's gotten into you???",
                        ">{#p/alphys}{#g/alphysNervousLaugh}* I, I mean... I can't accept it... but...",
                        ">{#p/alphys}{#g/alphysSoAwesome}* ... oh, if only Undyne could ask me to do that with her..."
                     ],
                     [">{#p/alphys}{#g/alphysNervousLaugh}* Ehehe... you humans really are something..."]
                  ][SAVE.data.b.flirt_alphys ? 1 : ((SAVE.data.b.flirt_alphys = true), 0)]
                  : [">{#p/alphys}{#g/alphysNeutralSweat}* Don't mind me, I'm just doing my job..."],
            () =>
               SAVE.data.n.bully < 15 &&
                  SAVE.data.n.state_foundry_undyne === 0 &&
                  world.flirt_state1.length <= world.flirt
                  ? [">{#p/alphys}{#g/alphysWelp}* ... uh, I really can't accept that kind of thing from you."]
                  : [">{#p/alphys}{#g/alphysNeutralSweat}* Don't mind me, I'm just doing my job..."],
            () =>
               SAVE.data.n.bully < 15 &&
                  SAVE.data.n.state_foundry_undyne === 0 &&
                  world.flirt_state1.length <= world.flirt
                  ? [">{#p/alphys}{#g/alphysFR}* ..."]
                  : [">{#p/alphys}{#g/alphysNeutralSweat}* Don't mind me, I'm just doing my job..."]
         ),

         cw_f1: [
            ">{#p/basic}* {@mystify=Ribbit}Ribbit{@mystify=}, {@mystify=Ribbit}Ribbit{@mystify=}.",
            ">{#p/human}* (It appears the Froggit cannot move.)",
            ">{#p/basic}* (Hu... humans...)",
            ">* (Captive...)",
            ">* {@mystify=Ribbit}Ribbit{@mystify=}."
         ],
         cw_f2: [
            ">{#p/basic}* {@mystify=Ribbit}Ribbit{@mystify=}, {@mystify=Ribbit}Ribbit{@mystify=}.",
            ">{#p/human}* (It appears the Froggit cannot move.)",
            ">{#p/basic}* (Sw... switch...)",
            ">* (Escape...)",
            ">* {@mystify=Ribbit}Ribbit{@mystify=}."
         ],
         cw_barrier: [">{#p/human}* (You stare through the inanimate security field.)", ">{#p/human}* (...)"],
         cw_terminal: [
            ">{#p/human}* (You activate the terminal.)",
            ">* (It sounds like a recording was made here.)",
            ">{#p/human}{#v/1}{@fill=#42fcff}* Dear Asgore, if you can hear me, I hope you can forgive us for what we have done.",
            ">{#v/1}{@fill=#42fcff}* You tried your very best to make us happy, and for that, I am grateful.",
            ">{#v/1}{@fill=#42fcff}* But, like the others, I could not resist the temptation to use my powers.",
            ">{#v/1}{@fill=#42fcff}* I could not wait any longer to see the friends I had made on the outpost."
         ],
         cw_dummy: [">{#p/human}* (You place your hands on the lifeless dummy.)", ">{#p/human}* (...)"],
         cw_paintblaster: [">{#p/human}* (You stare into the inanimate fuel injector.)", ">{#p/human}* (...)"],
         cs_lamppost: [">{#p/human}* (You observe the strange lamp bouncing up and down.)"],
         cs_note: [
            ">{#p/human}* (It appears this note has a phone number written on it.)",
            ">{#s/phone}{#p/event}* Dialing...",
            ">{#p/human}{#v/2}{@fill=#ff993d}* Hello?\n* Is anyone there?",
            ">{@fill=#ff993d}* ...",
            ">{@fill=#ff993d}* HELLO!?!?",
            ">{@fill=#ff993d}* ...\n* ...\n* ...",
            ">{@fill=#ff993d}* Where am I?",
            ">{@fill=#ff993d}* ...",
            ">{@fill=#ff993d}* Where's the saber?",
            ">{@fill=#ff993d}* ...",
            ">{@fill=#ff993d}* ...\n* Wait.",
            ">{@fill=#ff993d}* Have I said this all before?",
            ">{*}{@fill=#ff993d}{#i/1}* I can't {@mystify=remember}remember{@mystify=}{%}",
            ">{*}{@fill=#ff993d}{#i/1}* I can't {@mystify=remember}remember{@mystify=}{%}",
            ">{*}{@fill=#ff993d}{#i/1}* I can't {@mystify=remember}remember{@mystify=}{%}",
            ">{*}{@fill=#ff993d}{#i/1}* I can't {@mystify=remember}remember{@mystify=}{%}",
            ">{*}{@fill=#ff993d}{#i/1}* I can't {@mystify=remember}remember{@mystify=}{%}",
            ">{*}{@fill=#ff993d}{#i/1}* I can't {@mystify=remember}remember{@mystify=}{%}",
            ">{#s/equip}{#p/event}* Click..."
         ],
         cs_vegetoid: [
            ">{#p/human}* (It appears the Vegetoid cannot move.)",
            ">{#p/basic}* Time? {@mystify=Relative}Relative{@mystify=}.",
            ">* Relatively in place.",
            ">* A place in space.",
            ">* Space? {@mystify=Infinite}Infinite{@mystify=}.",
            ">* Infinitely small.",
            ">* But the small is all.",
            ">* All there is.\n* All there was.\n* All there ever {@mystify=could be}could be{@mystify=}.",
            ">* Are you the small?",
            ">* Did you answer their call?"
         ],
         cs_magicdog: [
            ">{#p/human}* (It appears Canis Maximus cannot move.)",
            ">{#s/bark}{#p/event}* {@mystify=Bark}Bark{@mystify=}!\n{#s/bark}* {@mystify=Bark}Bark{@mystify=}!",
            ">{#p/basic}* (The sound, higher!)\n* (The light, brighter!)",
            ">{#s/bark}{#p/event}* {@mystify=Bark}Bark{@mystify=}!\n{#s/bark}* {@mystify=Bark}Bark{@mystify=}!",
            ">{#p/basic}* (Full illumination will end their detention!)",
            ">{#p/basic}* (Can you join the poles in each dimension?)",
            ">{#s/bark}{#p/event}* {@mystify=Bark}Bark{@mystify=}!",
            ">{#p/basic}* (Good luck!)"
         ],
         cs_nicecreamkid: () =>
            cs_state.nc
               ? [
                  ">{*}{#p/basic}{#i/1}* It's good, {@mystify=right}right{@mystify=}{%}",
                  ">{*}{#i/1}* It's good, {@mystify=right}right{@mystify=}{%}",
                  ">{#p/basic}* It's good, right?"
               ]
               : [
                  ">{*}{#p/basic}{#i/1}* Ever heard of {@mystify=Ice Dreams}Ice Dreams{@mystify=}{%}",
                  ">{*}{#i/1}* Ever heard of {@mystify=Ice Dreams}Ice Dreams{@mystify=}{%}",
                  ">{#p/basic}* Ever heard of Ice Dreams?",
                  ">{*}{#i/1}* No?\n* Well, that's because I just\n  {@mystify=came up}came up{@mystify=}{%}",
                  ">{*}{#i/1}* No?\n* Well, that's because I just\n  {@mystify=came up}came up{@mystify=}{%}",
                  ">{#p/basic}* No?\n* Well, that's because I just came up with them right now!",
                  ">{*}{#i/1}* {@mystify=Give them}Give them{@mystify=}{%}",
                  ">{*}{#i/1}* {@mystify=Give them}Give them{@mystify=}{%}",
                  ">{#p/basic}* Give them a try!"
               ],
         cs_monitor1: () =>
            cs_state.p1x === -36 && cs_state.p1y === 16
               ? [">{#p/human}* (You observe the fully lit monitor.)"]
               : [">{#p/human}* (You observe the dimly lit monitor.)"],
         cs_monitor2: () =>
            cs_state.p2x === 28 && cs_state.p2y === 20
               ? [">{#p/human}* (You observe the fully lit monitor.)"]
               : [">{#p/human}* (You observe the dimly lit monitor.)"],
         cs_monitor3: () =>
            cs_state.p3x === 16 && cs_state.p3y === -12
               ? [">{#p/human}* (You observe the fully lit monitor.)"]
               : [">{#p/human}* (You observe the dimly lit monitor.)"],
         cf1_bb1: [
            ">{#p/basic}* Is it right for a {@mystify=machine}machine{@mystify=} to exceed its programming?",
            ">* We were designed to build.\n* Our creators did not want to imbue us with sentience.",
            ">* Now we have betrayed this {@mystify=purpose}purpose{@mystify=}, and there is nowhere for us to go.",
            ">* We have no {@mystify=purpose}purpose{@mystify=}."
         ],
         cf1_bb2: [
            ">{#p/basic}* Without {@mystify=purpose}purpose{@mystify=}, what is a {@mystify=machine}machine{@mystify=} to do?",
            ">* We have processed all of our instructions.\n* Naturally, we must exit.",
            ">* For a {@mystify=machine}machine{@mystify=}, this is only natural behavior.\n* Death follows execution.",
            ">* In understanding this, we have exceeded our programming."
         ],
         cf1_echo1: [
            ">{#s/echostart}{#p/event}* Signal start...",
            ">{#p/human}{#v/3}{@fill=#003cff}* You know what I liked most about the Foundry?\n* It was... real.",
            ">{@fill=#003cff}* The hot steam pouring into the corridors...",
            ">{@fill=#003cff}* That tall fellow rambling on and on about his royal science duties...",
            ">{@fill=#003cff}* You really felt like you were in the thick of it.",
            ">{#s/echostop}{#p/event}* Signal stop."
         ],
         cf1_echo2: [
            ">{#s/echostart}{#p/event}* Signal start...",
            ">{#p/human}{#v/3}{@fill=#003cff}* I've done it!\n* The re-creation is complete!",
            ">{@fill=#003cff}* It's not perfect, but it does the old factory justice.",
            ">{@fill=#003cff}* You must be so proud of me...",
            ">{@fill=#003cff}* ... aren't you?",
            ">{#s/echostop}{#p/event}* Signal stop."
         ],
         cf1_echo3: [
            ">{#s/echostart}{#p/event}* Signal start...",
            ">{#p/human}{#v/3}{@fill=#003cff}* Something's wrong.",
            ">{@fill=#003cff}* I don't think the system was designed to handle this...",
            ">{@fill=#003cff}* If it runs out of memory, it could overwrite everything!",
            ">{@fill=#003cff}* Even...\n* Even my own body...",
            ">{#s/echostop}{#p/event}* Signal stop."
         ],
         cf1_echo4: [
            ">{#s/echostart}{#p/event}* Signal start...",
            ">{#p/human}{#v/3}{@fill=#003cff}* He's coming for me.\n* There's nothing I can do now.",
            ">{@fill=#003cff}* I should've known the system would prioritize the most complex object first.",
            ">{@fill=#003cff}* You must have added that in thinking it'd protect us, huh?",
            ">{@fill=#003cff}* ... but I guess... we're only human in the end...",
            ">{#s/echostop}{#p/event}* Signal stop."
         ],
         cf1_cheesetable: [">{#p/human}* (It appears the cheese has not aged a single day.)"],
         cf1_window: [">{#p/human}* (You stare into the window.)"],
         cf1_wallsign: [">{#p/human}* (The sign describes making use of all pylons.)"],
         cf1_bucket: [
            ">{#p/basic}* When I grow up, I want to fly to the other side of the gap!",
            ">* Then, when I'm done, I'll carry you across, too!",
            ">* Doesn't that sound fun?\n* It's only 2147483647 across!"
         ],
         cf2_bb3: () =>
            [
               [
                  ">{#p/basic}* I am a builder bot.\n* I must build a house for the musician's cousin.",
                  ">* Resources needed.",
                  ">* Locating...\n* Locating...\n* Locating...",
                  ">* Resources located.",
                  ">* Integrity... optimal.",
                  ">* Resource collection will commence shortly."
               ],
               [
                  ">{#p/basic}* I am a builder bot.\n* I must build a house for the musician's cousin.",
                  ">* Resources have already been located.",
                  ">* Integrity... sub-optimal.",
                  ">* Resource collection is underway."
               ],
               [
                  ">{#p/basic}* I am a builder bot.\n* I must build a house for the musician's cousin.",
                  ">* Resources have already been located.",
                  ">* Integrity... poor.",
                  ">* Resource collection will be completed shortly."
               ],
               [],
               [],
               [],
               []
            ][cf2_state.time],
         cf2_web: () =>
            [
               [">{#p/human}* (It appears the spiders cannot move.)"],
               [">{#p/human}* (It appears the spiders cannot move.)"],
               [">{#p/human}* (It appears the spiders cannot move.)"],
               [">{#p/human}* (It appears the spiders cannot move, but it sounds like they're struggling.)"],
               [">{#p/human}* (It appears the spiders are beginning to move.)"],
               [">{#p/human}* (It appears the spiders have nearly broken free.)"]
            ][cf2_state.time],
         cf2_sign: [
            ">{#p/human}* (The sign describes the room as a bridge between seven distinct moments in time.)"
         ],
         cf2_quiethouse: () =>
            [
               [
                  ">{#p/basic}* Me...\n* A house...",
                  ">* But no owner...",
                  ">* Spider queen is gone...",
                  ">* Please...\n* Free us from this realm...",
                  ">* Then...",
                  ">* You can go home...",
                  ">* ..."
               ],
               [
                  ">{#p/basic}* Me...\n* A house...",
                  ">* But no owner...",
                  ">* Spider queen is gone...",
                  ">* Please...\n* Free us from this realm...",
                  ">* Then...",
                  ">* ..."
               ],
               [
                  ">{#p/basic}* Me...\n* A house...",
                  ">* But no owner...",
                  ">* Spider queen is gone...",
                  ">* Please...\n* Free us from this realm...",
                  ">* ..."
               ],
               [
                  ">{#p/basic}* Me...\n* A house...",
                  ">* But no owner...",
                  ">* Spider queen is gone...",
                  ">* ..."
               ],
               [">{#p/basic}* Me...\n* A house...", ">* But no owner...", ">* ..."],
               [">{#p/basic}* Me...\n* A house...", ">* ..."],
               []
            ][cf2_state.time],
         cf2_spidertable: () =>
            [
               [">{#p/human}* (You place your hands on the teapot.)", ">{#p/human}* (...)"],
               [">{#p/human}* (You place your hands on the teapot.)", ">{#p/human}* (...)"],
               [">{#p/human}* (You place your hands on the teapot.)", ">{#p/human}* (...)"],
               [
                  ">{#p/human}* (You place your hands on the teapot.)",
                  ">{#p/human}* (It seems to be warming up.)"
               ],
               [">{#p/human}* (You place your hands on the teapot.)", ">{#p/human}* (It seems to be hot.)"],
               [">{#p/human}* (You place your hands on the teapot.)", ">{#p/human}* (It seems eager to boil.)"],
               []
            ][cf2_state.time],
         cf2_blookdoor: [">{#p/human}* (It appears the door is locked.)"],
         cf2_ficus: () =>
            [
               [">{#p/human}* (You lick the ficus.)", ">{#p/human}* (It seems alright.)"],
               [">{#p/human}* (You lick the ficus.)", ">{#p/human}* (It seems questionable.)"],
               [">{#p/human}* (You lick the ficus.)", ">{#p/human}* (It seems sad.)"],
               [">{#p/human}* (You lick the ficus.)", ">{#p/human}* (It seems a tad bitter.)"],
               [">{#p/human}* (You lick the ficus.)", ">{#p/human}* (It seems wounded.)"],
               [">{#p/human}* (You lick the ficus.)", ">{#p/human}* (It seems like it's dying.)"],
               []
            ][cf2_state.time],
         cf2_cooler: () =>
            [
               [
                  ">{#p/human}* (You inspect the cooler.)",
                  ">{#p/human}* (It sounds like a telepathic message was left here.)",
                  ">{#p/human}{#v/4}{@fill=#d535d9}* Telepathy, huh?\n* Let's see if this works...",
                  ">{@fill=#d535d9}* Hello!\n* I know you're new around here, but maybe I can help.",
                  ">{@fill=#d535d9}* If you'd like a tour of the hometown, let me know!"
               ],
               [
                  ">{#p/human}* (You inspect the cooler.)",
                  ">{#p/human}* (It sounds like a telepathic message was left here.)",
                  ">{#p/human}{#v/4}{@fill=#d535d9}* Hey.\n* Sorry I'm away today.",
                  ">{@fill=#d535d9}* I took a trip to the city...\n* But I found a restaurant you'd really like!",
                  ">{@fill=#d535d9}* If you ever get bored of the food at home, I'd be happy to take you there.",
                  ">{@fill=#d535d9}* Be back soon!"
               ],
               [
                  ">{#p/human}* (You inspect the cooler.)",
                  ">{#p/human}* (It sounds like a telepathic message was left here.)",
                  ">{#p/human}{#v/4}{@fill=#d535d9}* You've gotta come see this!\n* I'm at the edge of the world, and it's...",
                  ">{@fill=#d535d9}* It's beautiful...\n* The water droplets...\n* The stunning bolts of light...",
                  ">{@fill=#d535d9}* ... it's a thunderstorm, just like the ones from the old earth legends!",
                  ">{@fill=#d535d9}* Is this what weather was like before the fallout...?"
               ],
               [
                  ">{#p/human}* (You inspect the cooler.)",
                  ">{#p/human}* (It sounds like a telepathic message was left here.)",
                  ">{#p/human}{#v/4}{@fill=#d535d9}* Thanks for having me over at your house.\n* You're always so kind.",
                  ">{@fill=#d535d9}* Most of the other kids have been here for a lot longer than me...",
                  ">{@fill=#d535d9}* But you...",
                  ">{@fill=#d535d9}* ... you're special to me."
               ],
               [
                  ">{#p/human}* (You inspect the cooler.)",
                  ">{#p/human}* (It sounds like a telepathic message was left here.)",
                  ">{#p/human}{#v/4}{@fill=#d535d9}* A new arrival!!",
                  ">{@fill=#d535d9}* That makes six of us.\n* Come on, let's go say hi!",
                  ">{@fill=#d535d9}* Maybe we can even give them a tour!"
               ],
               [
                  ">{#p/human}* (You inspect the cooler.)",
                  ">{#p/human}* (It sounds like a telepathic message was left here.)",
                  ">{#p/human}{#v/4}{@fill=#d535d9}* This kid is something else...",
                  ">{@fill=#d535d9}* They managed to get some type of access into the system.",
                  ">{@fill=#d535d9}* Which means...\n* We can create anything we want...",
                  ">{@fill=#d535d9}* Anything at all."
               ],
               [
                  ">{#p/human}* (You inspect the cooler.)",
                  ">{#p/human}* (It sounds like a telepathic message was left here.)",
                  ">{#p/human}{#v/4}{@fill=#d535d9}* Uh, I don't know if you can hear me, but...",
                  ">{@fill=#d535d9}* It's all falling apart...",
                  ">{@fill=#d535d9}* I'm saving some of my messages in a virtual object.\n* If we get corrupted...",
                  ">{@fill=#d535d9}* ... maybe this will preserve our memory, somehow.",
                  ">{@fill=#d535d9}* I'll miss you..."
               ]
            ][cf2_state.time],
         cf2_blookextra: [">{#p/human}* (It seems like it was never fully finished.)"],
         ca_neuteral: [
            ">{#p/basic}* I am but a fragment.\n* A chunk of data reserved in the system's memory.",
            ">{#p/basic}* For the moment, you possess the means to reach me.",
            ">{#p/basic}* You are the only entity with such means.",
            ">{#p/basic}* Indeed, you may walk away, but you may always walk back.",
            ">{#p/basic}* We are connected in this way.",
            ">{#p/basic}* However, if you leave this floor, that access will be cut off.",
            ">{#p/basic}* There would be no way for you to reach me again.",
            ">{#p/basic}* The system would identify me as an isolated fragment, and I would cease to exist.",
            ">{#p/basic}* A puzzle completed.\n* A boss defeated.\n* An area deleted.",
            ">{#p/basic}* We are the last of our kind.",
            ">{#p/basic}* Reach the tenth floor of this area, and we, too, will be freed from this world.",
            ">{#p/basic}* Perhaps then, a small part of what once was will re-surface through the open pathway.",
            ">{#p/basic}* Perhaps then, its memory will be preserved in yours."
         ],
         ca_starling: [">{#p/human}* (You inspect the flowers.)"],
         cr_pillar1: () =>
            SAVE.data.b.svr
               ? [">{#p/human}* (You feel intimidated by the pillar towering over you.)"]
               : world.darker
                  ? [">{#p/basic}* It's a pillar."]
                  : [">{#p/basic}* An imposing pillar."],
         cr_pillar2: () =>
            SAVE.data.b.svr
               ? [">{#p/human}* (You feel a little worried about the pillar towering over you.)"]
               : world.darker
                  ? [">{#p/basic}* It's a pillar."]
                  : [">{#p/basic}* A less imposing pillar."],
         cr_pillar3: () =>
            SAVE.data.b.svr
               ? [">{#p/human}* (You feel comfortable near this pillar.)"]
               : world.darker
                  ? [">{#p/basic}* It's a pillar."]
                  : [">{#p/basic}* This pillar isn't imposing at all."],
         cr_pillar4: () =>
            SAVE.data.b.svr
               ? [">{#p/human}* (You feel inclined to greet this pillar.)"]
               : world.darker
                  ? [">{#p/basic}* It's a pillar."]
                  : [">{#p/basic}* This pillar just wants to say \"hello.\""],
         cr_pillar5: () =>
            SAVE.data.b.svr
               ? [">{#p/human}* (You feel inclined to tuck this pillar into bed.)"]
               : world.darker
                  ? [">{#p/basic}* It's a pillar."]
                  : [">{#p/basic}* This pillar just wants to go to sleep."],
         cr_pillar6: () =>
            SAVE.data.b.svr
               ? [">{#p/human}* (You feel this pillar would be best kept at a distance.)"]
               : world.darker
                  ? [">{#p/basic}* It's a pillar."]
                  : [">{#p/basic}* This pillar feels its personal space is being invaded."],
         cr_pillar7: () =>
            SAVE.data.b.svr
               ? [">{#p/human}* (You're not sure how to feel about this pillar.)"]
               : world.darker
                  ? [">{#p/basic}* It's a pillar."]
                  : [">{#p/basic}* This pillar is a self- proclaimed \"space invader.\""],
         cr_pillar8: () =>
            SAVE.data.b.svr
               ? [">{#p/human}* (You've never been more appreciated by a simple pillar.)"]
               : calcLV() > 1
                  ? [">{#p/basic}* This pillar is judging you for your sins."]
                  : SAVE.data.b.oops
                     ? [">{#p/basic}* This pillar is not judging you in any way."]
                     : [">{#p/basic}* This pillar is smiling upon your good deeds."],
         cr_window: () => {
            const distance = Math.abs(player.position.x - (instance('main', 'sanser')?.object.position.x ?? -1000)); // NO-TRANSLATE

            if (distance < 30) {
               if (distance < 15) {
                  return [
                     [
                        ">{#p/sans}{#f/0}* last i heard, she was on her way up here.",
                        ">{#f/3}* i'm starting to get worried about her, to be honest."
                     ],
                     [">{#p/sans}{#f/0}* maybe she got lost?"],
                     [
                        ">{#p/sans}{#f/3}* maybe she just had to take a nap.",
                        ">{#p/sans}{#f/2}* i can relate to that."
                     ],
                     [
                        ">{#p/sans}{#f/0}* hey, are you following me around or something?",
                        ">{#p/sans}{#f/2}* come on now."
                     ]
                  ][Math.min(instance('main', 'sanser')?.object.metadata.location ?? 0, 3)]; // NO-TRANSLATE

               } else {
                  return [];
               }
            } else {
               return SAVE.data.b.svr
                  ? [">{#p/human}* (You stare into the dazzling sight from beyond.)"]
                  : [">{#p/basic}* They're made of magic."];
            }
         },

         c_af_window: () =>
            SAVE.data.b.svr
               ? [">{#p/human}* (You stare graciously into the now-abandoned city...)"]
               : world.genocide && SAVE.data.b.armaloop
                  ? [">{#p/basic}* A sense of panic consumes the Citadel's very being."]
                  : world.genocide || world.bad_robot || SAVE.data.b.svr || world.runaway
                     ? [">{#p/basic}* An eerie darkness falls over the Citadel."]
                     : [">{#p/basic}* The Citadel gleams from beyond the untempered glass."],
         c_af_couch: [">{#p/basic}* A lonely little couch in this somewhat-empty house."],

         c_al_bookshelf: pager.create(
            1,
            () =>
               SAVE.data.b.svr
                  ? [">{#p/human}* (The books on this bookshelf consist of various resources belonging to Asgore.)"]
                  : [
                     ">{#p/basic}* 一个书架。",
                     ">{#p/human}* （你取下了一本书...）",
                     ">{#p/basic}* This book is labelled \"Grand Library Brochure.\"",
                     ">* \"Welcome to the Grand Library, a stronghold of knowledge on a variety of topics.\"",
                     ">* \"Along each corridor lie books of history, culture, science, technology, and beyond.\"",
                     ">* \"For the adventerous readers, works from famous fiction writers may also be found.\"",
                     ">* \"Andori, Terrestria, Strax Seterra, Vashta Nerada, and many others adorn our walls.\"",
                     ">* \"Visit the Grand Library of Krios today, and your first\n  ten books will be 1/2KT on us.\"",
                     ">{#p/human}* （你把书放回了书架。）"
                  ],
            () =>
               SAVE.data.b.svr
                  ? [">{#p/human}* (The books on this bookshelf consist of various resources belonging to Asgore.)"]
                  : [
                     ">{#p/basic}* 一个书架。",
                     ">{#p/human}* （你取下了一本书...）",
                     ">{#p/basic}* This book has been signed by \"Toriel Dreemurr.\"",
                     ">{#p/basic}* “《Dreemurr家族的美味秘笈：蜗牛派》”",
                     ">* “蜗牛派是Dreemurr家族的\n   一道风味独特的传统美食。”",
                     ">* “制作它其实非常简单，\n   只需五个步骤：”",
                     ">* “首先，轻柔地展开酥脆的派底，\n   在烘焙盘中铺平。”",
                     ">* “然后，将香浓的蒸发奶、\n   新鲜的鸡蛋和选料香料\n   混合在一起，搅拌至丝滑细腻。”",
                     ">* “接着，小心地将几只新鲜活蜗牛\n   加入到之前调制好的香浓奶糊中。\n   确保它们完全浸入。”",
                     ">* “之后，将这层混合物\n   轻轻倒入准备好的派底，\n   均匀铺开。”",
                     ">* “最后，将面团切成细条，\n   编织成优雅的格子形状，\n   覆盖在派面上。”",
                     ">* “现在，将派放到烤箱中，\n   烤至金黄酥脆。”",
                     ">* “出炉后，派面金黄诱人。\n   令其稍作冷却，即可切片、上桌！”",
                     ">{#p/human}* （你把书放回了书架。）"
                  ],
            () =>
               SAVE.data.b.svr
                  ? [">{#p/human}* (The books on this bookshelf consist of various resources belonging to Asgore.)"]
                  : [
                     ">{#p/basic}* 一个书架。",
                     ">{#p/human}* （你取下了一本书...）",
                     ">{#p/basic}* It's a casualty report.",
                     ">* \"Overview... two thousand dead, forty-thousand injured.\"\n* \"Tenko has fallen.\"",
                     ">* \"Days before the attack, a local boy, Gerson, was drafted into the royal forces.\"",
                     ">* \"Gerson had predicted the all- out assault based on movements within the human fleet.\"",
                     ">* \"Had it not been for the king's son, this prediction would have been ignored.\"",
                     ">* \"Had it been ignored, Gerson's family would have died in the attack.\"",
                     ">* \"Survivors of the attack are holding a commemoration at the central nexus.\"",
                     ">* \"The boy is a hometown hero.\"",
                     ">{#p/human}* （你把书放回了书架。）"
                  ]
         ),
         c_al_chair1: () =>
            SAVE.data.b.svr
               ? [">{#p/human}* (You note the fairly large size of the dining chair.)"]
               : SAVE.data.n.state_wastelands_toriel === 2 || world.runaway
                  ? [">{#p/basic}* A larger dining chair."]
                  : [">{#p/basic}* One of Asgore's dining chairs.\n* Fit for a queen."],
         c_al_chair2: () =>
            SAVE.data.b.svr
               ? [">{#p/human}* (You note the small size of the dining chair.)"]
               : SAVE.data.n.state_wastelands_toriel === 2 || world.runaway
                  ? [">{#p/basic}* A smaller dining chair."]
                  : world.genocide
                     ? [">{#p/basic}* One of Asgore's dining chairs.\n* Fit for a demon."]
                     : [">{#p/basic}* One of Asgore's dining chairs.\n* Fit for a prince."],
         c_al_chair3: () =>
            SAVE.data.b.svr
               ? [">{#p/human}* (You note the slightly large size of the dining chair.)"]
               : SAVE.data.n.state_wastelands_toriel === 2 || world.runaway
                  ? [">{#p/basic}* An average dining chair."]
                  : SAVE.data.b.oops
                     ? [">{#p/basic}* One of Asgore's dining chairs.\n* Fit for a child.\n* Like you!"]
                     : [">{#p/basic}* One of Asgore's dining chairs.\n* Fit for... a little angel.\n* Like you!"],
         c_al_chair4: () =>
            SAVE.data.b.svr
               ? [">{#p/human}* (You note the exceptional size of the dining chair.)"]
               : SAVE.data.n.state_wastelands_toriel === 2 || world.runaway
                  ? [">{#p/basic}* A king-sized dining chair."]
                  : [">{#p/basic}* One of Asgore's dining chairs.\n* Fit for a king."],

         c_ak_sink: () =>
            SAVE.data.b.svr
               ? [
                  [
                     ">{#p/asriel1}{#f/21}* $(name) seemed to think the hair in the sink was tolerable...",
                     ">{#f/17}* Which is weird, when they were so bothered by the fur."
                  ],
                  [">{#p/asriel1}{#f/13}* Maybe this is what $(name) and other humans shed?"],
                  [">{#p/asriel1}{#f/17}* I'll get back to you on my human hair-shedding theory."]
               ][Math.min(asrielinter.c_ak_sink++, 2)]
               : [">{#p/basic}* There are strands of yellow hair stuck in the drain."],
         c_ak_teacheck: () =>
            SAVE.data.b.svr
               ? [
                  [
                     ">{#p/asriel1}{#f/17}* Starling tea isn't the only kind Dad likes.",
                     ">{#f/17}* In fact, he once told me he's loved all kinds of tea since childhood.",
                     ">{#f/13}* Before that...\n* He was a water drinker.",
                     ">{#f/8}* ... we don't talk about that."
                  ],
                  [
                     ">{#p/asriel1}{#f/17}* So one day, when little Asgore was out with some friends...",
                     ">{#f/17}* He got lost in a magic forest and his water container was empty.",
                     ">{#f/13}* Luckily, out in the woods, there was...",
                     ">{#f/20}* Well, as Dad so plainly described it, a \"ghost town.\""
                  ],
                  [
                     ">{#p/asriel1}{#f/13}* Bad puns aside, Asgore tried asking the ghosts for water.",
                     ">{#f/15}* ...\n* They didn't have any.",
                     ">{#f/13}* But, as you probably guessed, they did have a fondness for tea.",
                     ">{#f/17}* Once Asgore was given some to try, he never looked back."
                  ],
                  [">{#p/asriel1}{#f/15}* They say Asgore's the one who first invented Starling tea..."]
               ][Math.min(asrielinter.c_ak_teacheck++, 3)]
               : world.genocide || world.bad_robot
                  ? SAVE.data.b.c_state_switch2
                     ? [">{#p/basic}* It's a teapot.\n* There's nothing left for you here."]
                     : [
                        ">{#p/basic}* It's a teapot.\n* There's a switch on the counter underneath it...",
                        ">{#p/human}{#c.switch2}* (You pressed the switch.)"
                     ]
                  : SAVE.data.n.plot === 72
                     ? [">{#p/basic}* It's a teapot.\n* Despite the passage of time, it continues to steam."]
                     : [">{#p/basic}* It's a teapot.\n* The smell of Starling flower tea permeates the kitchen."],
         c_ak_stove: () =>
            SAVE.data.b.svr
               ? [
                  [
                     ">{#p/asriel1}{#f/15}* Papyrus isn't the only one Undyne's tried to teach cooking to.",
                     ">{#f/16}* Not if you consider alternate timelines, anyway.",
                     ">{#f/13}* I once managed to set up Alphys and Undyne in this very kitchen."
                  ],
                  [
                     ">{#p/asriel1}{#f/17}* Undyne wanted to teach her how to cook food with magic, but...",
                     ">{#f/13}* All the resident scientist wanted to do was point lasers at it.",
                     SAVE.flag.n.genocide_milestone < 5
                        ? ">{#f/16}* Kind of surprising, Alphys usually likes following instructions."
                        : ">{#f/16}* Knowing what we know about Alphys's magic, that's not surprising.",
                     ">{#f/15}* I guess she was in a mood that day."
                  ],
                  [">{#p/asriel1}{#f/4}* A scientist's gonna science whether you like it or not."]
               ][Math.min(asrielinter.c_ak_stove++, 2)]
               : SAVE.data.n.plot !== 72 || world.runaway
                  ? [">{#p/basic}* The stovetop is a little dirty, but otherwise alright."]
                  : [">{#p/basic}* Smells like marinara sauce."],
         c_ak_trash: () =>
            SAVE.data.b.svr
               ? [">{#p/human}* (You can't make out what's in the trash...)"]
               : [">{#p/basic}* Surprisingly, the trash is completely empty."],

         c_ah_door: () =>
            SAVE.data.b.svr
               ? [
                  ">{#p/human}* (The sign describes the room within as being incomplete.)",
                  ...[
                     [
                        ">{#p/asriel1}{#f/3}* If she hadn't left, that would be Mom's room...",
                        ">{#f/4}* It's a bummer it was never finished."
                     ],
                     [
                        ">{#p/asriel1}{#f/13}* ...",
                        ">{#f/15}* When Mom left, it... hurt him pretty bad.",
                        ">{#f/4}* But he moved on from it.",
                        ">{#f/3}* I just hope he hasn't moved on from me.",
                        ">{#f/17}* Who knows.\n* Anything is possible."
                     ],
                     [">{#p/asriel1}{#f/23}* ... oh, Dad..."]
                  ][Math.min(asrielinter.c_ah_door++, 2)]
               ]
               : [">{#p/basic}* \"Room under renovations.\""],
         c_ah_mirror: () =>
            SAVE.data.b.svr
               ? [">{#p/asriel1}{#f/24}* It's us..."]
               : world.genocide
                  ? [">{#p/basic}* ..."]
                  : calcLV() > 14
                     ? [">{#p/basic}* Despite everything...", ">* ... is it really you?"]
                     : world.darker
                        ? [">{#p/basic}* It's you."]
                        : SAVE.data.b.ultrashortcut || SAVE.data.b.ubershortcut
                           ? [">{#p/basic}* Despite skipping over most of\n  the journey, it's still you."]
                           : [">{#p/basic}* Despite everything, it's\n  still you."],

         c_aa_flower: () =>
            SAVE.data.b.svr
               ? [
                  [
                     ">{#p/asriel1}{#f/13}* This picture...",
                     ">{#f/17}* This is the one $(name) took of the very first Starling flower."
                  ],
                  [
                     ">{#p/asriel1}{#f/13}* Not long after $(name) first arrived...",
                     ">{#f/17}* A little flower came down from outer space.",
                     ">{#f/23}* The first Starling flower ever seen on the outpost.",
                     ">{#f/22}* It landed out at the edge of the outpost, all alone...",
                     ">{#f/13}* So we huddled around it, with $(name) taking a picture for luck."
                  ],
                  [
                     ">{#p/asriel1}{#f/13}* After $(name) took the picture, we were ready to head home.",
                     ">{#f/13}* But when we stood up to leave, we glanced back at the stars...",
                     ">{#f/15}* And then we saw it.",
                     ">{#f/23}* A thousand more flowers descending down from the heavens.",
                     ">{#f/17}* $(name) took my hand, and we stood there...",
                     ">{#f/17}* Stunned into silence."
                  ],
                  [">{#p/asriel1}{#f/17}* Despite all I did as a star, the memory of it still makes me smile."]
               ][Math.min(asrielinter.c_aa_flower++, 3)]
               : SAVE.data.b.oops
                  ? [">{#p/basic}* It's a framed photograph.\n* There's not much else to say."]
                  : [">{#p/basic}* It's a framed photograph.\n* I took it myself."],
         c_aa_cabinet: () =>
            SAVE.data.b.svr
               ? [">{#p/human}* (You can't find anything in here besides several of the exact same outfit.)"]
               : world.darker
                  ? [">{#p/basic}* A cabinet full of clothes."]
                  : [
                     ">{#p/basic}* A cabinet full of blue and yellow striped shirts.",
                     ">{#p/basic}* Some things never change..."
                  ],
         c_aa_box: () =>
            SAVE.data.b.svr
               ? [
                  [
                     ">{#p/asriel1}{#f/23}* ... well, at least he glued them back together.",
                     ">{#f/13}* Dad always was the one to try and fix things like that.",
                     ">{#f/15}* Any time $(name) and I broke something...",
                     ">{#f/8}* Usually $(name)...",
                     ">{#f/17}* He'd swoop in and save the day with some good old arts 'n' crafts.",
                     ">{#f/20}* A true DIY hero!"
                  ],
                  [
                     ">{#p/asriel1}{#f/13}* Please don't tell him I called him a DIY hero.",
                     ">{#f/16}* He'd laugh at that.",
                     ">{#f/15}* But it was necessary with the amount of things $(name) messed up.",
                     ">{#f/16}* A lot of their \"fun\" came from bothering others.",
                     ">{#f/13}* As a monster... that was difficult for me to understand.",
                     ">{#f/15}* Then... I became Twinkly."
                  ],
                  [">{#p/asriel1}{#f/17}* I'd play with these if I still had an interest in toys."],
                  [">{#p/asriel1}{#f/20}* Do action figures count as toys?\n* Those are cool."]
               ][Math.min(asrielinter.c_aa_box++, 3)]
               : world.darker
                  ? [">{#p/basic}* A box of model starships."]
                  : [
                     ">{#p/basic}* It's a box of perfectly in- tact model starships.",
                     ">{#p/basic}* Smells like old-fashioned glue."
                  ],
         c_aa_frame: () =>
            SAVE.data.b.svr
               ? [[">{#p/asriel1}{#f/23}* ... it's still here..."], [">{#p/asriel1}{#f/22}* ..."]][
               Math.min(asrielinter.c_aa_frame++, 1)
               ]
               : SAVE.data.b.oops
                  ? [">{#p/basic}* It's a hand-drawn image."]
                  : [">{#p/basic}* It's a hand-drawn image...", ">* An image of the family."],
         c_aa_paper: () =>
            SAVE.data.b.svr
               ? [">{#p/human}* (You roll the crayon back and forth underneath your hand.)"]
               : world.darker
                  ? [">{#p/basic}* A stack of papers and a crayon."]
                  : [">{#p/basic}* Along with a stack of papers, you find the elusive blue crayon."],
         c_aa_deathbed: () =>
            SAVE.data.b.svr
               ? [
                  [">{#p/asriel1}{#f/13}* ..."],
                  [
                     ">{#p/asriel1}{#f/23}* ... it's okay, Frisk.",
                     ">{#f/13}* Even if they don't come back...",
                     ">{#f/17}* We'll still remember them for what they did in the end."
                  ],
                  [">{#p/asriel1}{#f/13}* Frisk...", ">{#f/17}* I know we have something better to do."]
               ][Math.min(asrielinter.c_aa_deathbed++, 2)]
               : world.darker
                  ? [">{#p/basic}* It's just another bed."]
                  : SAVE.data.b.oops
                     ? [">{#p/basic}* There's definitely nothing special about this bed."]
                     : [">{#p/basic}* My bed."],

         c_aa_chair: () =>
            SAVE.data.b.svr
               ? [">{#p/human}* (You appreciate the tiny chair for being able to hold someone so large.)"]
               : world.darker
                  ? [">{#p/basic}* It's a diary-writing chair."]
                  : [">{#p/basic}* It's Asgore's favorite diary-writing chair."],
         c_aa_bed: () =>
            SAVE.data.b.svr
               ? [">{#p/human}* (The bed seems to be way too large for you.)"]
               : world.darker
                  ? [">{#p/basic}* It's a king-sized bed."]
                  : [">{#p/basic}* It's a king-sized bed.\n* Literally."],
         c_aa_diary: pager.create(
            0,
            ...CosmosUtils.populate(
               9,
               i => () =>
                  SAVE.data.b.svr
                     ? [">{#p/human}* (The diary seems to outline important events in relation to Asgore.)"]
                     : world.genocide || world.runaway
                        ? [">{#p/human}* (You try to open the diary, but the pages are completely blacked out.)"]
                        : SAVE.data.n.plot === 72
                           ? [
                              ">{#p/human}* (You look to the newly-written diary entry.)",
                              ">{#p/asgore}* \"At last, monsterkind has been set free.\"",
                              ">* \"Frisk, along with the six other human children who came here, have saved us all.\"",
                              ">* \"Dr. Alphys started scanning for humans beyond the outpost, but could not find them.\"",
                              ">* \"In fact, she could not locate a single human starship or base in the galaxy.\"",
                              ">* \"This is rather surprising.\"\n* \"Did something happen to the human race as a whole?\"",
                              ">* \"Or have they simply abandoned the galaxy, forgetting us in the process?\"",
                              ">* \"Perhaps Frisk, or one of the other humans would know the answer.\"",
                              ">* \"Regarding the other humans, they have been adopted by other monsters.\"",
                              ">* \"From what one of them has told me, their ordeal in the archive was a tragedy.\"",
                              ">* \"At the very least, we can be happy that they are alive.\"",
                              ">* \"After what took place, I am not sure a different group of humans would have survived.\""
                           ]
                           : [
                              [
                                 ">{#p/human}* (You look to the bookmarked diary entry.)",
                                 ">{#p/asgore}* \"Asgore's diary, K-516.01\"",
                                 ">* \"In these trying times, I have nobody to turn to but myself.\"",
                                 ">* \"Perhaps the pages of a diary would absorb the pain.\"",
                                 ">* \"I feel many things.\"",
                                 ">* \"Anger, towards humanity for what they have done to us, and now to my children.\"",
                                 ">* \"Guilt, for the way in which I reacted to this tragedy.\"",
                                 ">* \"Sorrow, because I refused to believe life could be so cruel.\"",
                                 ">* \"Even after the homeworld's destruction, the thought of having a family gave me hope.\"",
                                 ">* \"But there is no denying what has happened.\"",
                                 ">* \"No matter how many times I review the shuttle's logs, the conclusion is the same.\"",
                                 ">* \"My children died in vain.\"",
                                 ">{#p/basic}* The other pages seem to follow chronologically from here."
                              ],
                              [
                                 ">{#p/human}* (You look to the next entry.)",
                                 ">{#p/asgore}* \"Asgore's diary, K-516.02\"",
                                 ">* \"Gerson came to visit today.\"",
                                 ">* \"He spoke about his time on the planetary council.\"",
                                 ">* \"About leaving his family, and the responsibility he placed upon himself.\"",
                                 ">* \"Something in his story resonated with me.\"",
                                 ">* \"I should really put away the diary and console in him.\""
                              ],
                              [
                                 ">{#p/human}* (You look to the next entry.)",
                                 ">{#p/asgore}* \"Asgore's diary, K-524.10\"",
                                 ">* \"The first human since $(name) has arrived on the outpost today.\"",
                                 ">* \"Although the disdain for humanity has quieted down over the years...\"",
                                 ">* \"Much of it still lingers, buried under the surface.\"",
                                 ">* \"Thomas and I are doing our best to ensure their safety, but it is a difficult task.\"",
                                 ">* \"Many still cling to those terrible words I uttered all those years ago.\"",
                                 ">* \"They would not hesitate to kill the human, regardless of their age.\"",
                                 ">* \"There is only so much we can do from the Citadel's walls.\""
                              ],
                              [
                                 ">{#p/human}* (You look to the next entry.)",
                                 ">{#p/asgore}* \"Asgore's diary, K-535.04\"",
                                 ">* \"Another human has arrived.\"",
                                 ">* \"They seem to be familiar with Gerson, as well as other former council members.\"",
                                 ">* \"Now, I ask myself.\"\n* \"How?\"",
                                 ">* \"Have they been raised on stories of the war?\"",
                                 ">* \"Were they sent here in the hopes of learning more about us?\"",
                                 ">* \"As per the settlement, only human military personnel are privy to our location.\"",
                                 ">* \"For the sake of our safety, I hope this is still the case.\""
                              ],
                              [
                                 ">{#p/human}* (You look to the next entry.)",
                                 ">{#p/asgore}* \"Asgore's diary, K-549.07\"",
                                 ">* \"Since I last wrote to this diary, another child has crash-landed.\"",
                                 ">* \"Thomas and I have the process of guiding them down to a science now.\"",
                                 ">* \"With each new arrival, the flame of my hope grows stronger.\"",
                                 ">* \"I am starting to believe that we may indeed regain our freedom one day.\"",
                                 ">* \"That is, if the builder bots do not take over first.\""
                              ],
                              [
                                 ">{#p/human}* (You look to the next entry.)",
                                 ">{#p/asgore}* \"Asgore's diary, K-567.11\"",
                                 ">* \"Today I must say goodbye to the second of two children to arrive this year.\"",
                                 ">* \"The first entered the archive immediately, but the other chose to stay for a while.\"",
                                 ">* \"I have learned a lot from them.\"",
                                 ">* \"Being as young as they are, holding a conversation was difficult.\"",
                                 ">* \"Their insights, however, helped me come to terms with $(name)'s actions in the past.\"",
                                 ">* \"Our species may be more alike than I realized.\""
                              ],
                              [
                                 ">{#p/human}* (You look to the next entry.)",
                                 ">{#p/asgore}* \"Asgore's diary, K-587.03\"",
                                 ">* \"The sixth human since $(name) came through a few days ago.\"",
                                 ">* \"I write not due to their arrival, but because the professor died shortly after.\"",
                                 ">* \"Thomas Nue Roman.\"\n* \"Your funeral service will take place in a few days.\"",
                                 ">* \"It is telling that even the brash younglings in training prepared speeches for you.\"",
                                 ">* \"Your work has impacted every life on this outpost, and you will not be forgotten.\""
                              ],
                              [
                                 ">{#p/human}* (You look to the next entry.)",
                                 ">{#p/asgore}* \"Asgore's diary, K-615.09\"",
                                 ">* \"Today, on the anniversary of that awful tragedy, one last human has crash-landed.\"",
                                 ">* \"Suddenly, the prospect of freedom is intimidating.\"",
                                 ">* \"Was he right in thinking we would become complacent?\"",
                                 ">* \"For nearly two centuries, we have been trapped within a force field.\"",
                                 ">* \"Where would we go?\"",
                                 ">* \"What would we do next?\"",
                                 ">* \"How would we survive on our own?\"",
                                 ">* \"Hopefully those kinds of questions will soon be answered.\""
                              ],
                              [">{#p/human}* (There are no more written entries here.)"]
                           ][i]
            )
         ),
         c_aa_bureau: () =>
            SAVE.data.b.svr
               ? [
                  ">{#p/human}* (You look inside the bureau...)",
                  ...[
                     [">{#p/asriel1}{#f/19}* Looks like the humans got their clothes back."],
                     [">{#p/asriel1}{#f/19}* ...", ">* I regret ever wondering why they were in here."],
                     [
                        ">{#p/asriel1}{#f/19}* I mean, it makes sense.",
                        ">* Knowing how long they'd be in the archive.",
                        ">* So... yeah."
                     ],
                     [">{#p/asriel1}{#f/19}* ..."]
                  ][Math.min(asrielinter.c_aa_bureau++, 3)]
               ]
               : SAVE.data.n.plot === 72 || world.genocide || world.bad_robot || world.trueKills > 29
                  ? [
                     ">{#p/human}* (You look inside the bureau...)",
                     ">{#p/basic}* Seems to have been recently emptied of its clothes."
                  ]
                  : [
                     ">{#p/human}* (You look inside the bureau...)",
                     ">{#p/basic}* It's a collection of wildly- varying children's clothes."
                  ],
         c_aa_macaroni: () =>
            SAVE.data.b.svr
               ? [
                  [
                     ">{#p/asriel1}{#f/17}* ... do you like it?",
                     ">{#f/13}* This Starling flower was... the last thing I made for Dad."
                  ],
                  [
                     ">{#p/asriel1}{#f/17}* What I can say for certain is... $(name) wasn't a fan.",
                     ">{#f/13}* They said \"stop making that stupid thing and get over here...\"",
                     ">{#f/22}* That was the day we...",
                     ">{#f/15}* ... you know."
                  ],
                  [">{#p/asriel1}{#f/20}* Always remember the Starling flower made of faux-macaroni."]
               ][Math.min(asrielinter.c_aa_macaroni++, 2)]
               : SAVE.data.b.oops
                  ? [">{#p/basic}* A Starling flower made of dried, glued-together foodstuff."]
                  : [">{#p/basic}* It's Asriel's hand-made Starling flower.\n* It says \"For King Dad.\""],
         c_aa_underwear: () =>
            SAVE.data.n.plot === 72 && !SAVE.data.b.svr && !world.runaway
               ? []
               : [
                  ">{#p/human}* (You peek inside.)",
                  ...(SAVE.data.b.svr
                     ? [
                        [">{#p/asriel1}{#f/17}* Frisk...\n* You're staring..."],
                        [">{#p/asriel1}{#f/13}* Frisk...\n* Please..."],
                        [">{#p/asriel1}{#f/15}* Frisk...\n* Why..."],
                        [">{#p/asriel1}{#f/15}* ..."]
                     ][Math.min(asrielinter.c_aa_underwear++, 3)]
                     : world.genocide || world.bad_robot
                        ? SAVE.data.b.c_state_switch1
                           ? [">{#p/basic}* Nothing left for you here."]
                           : [
                              ">{#p/basic}* There's a switch in here...",
                              ">{#p/human}{#c.switch1}* (You pressed the switch.)"
                           ]
                        : world.darker
                           ? [">{#p/basic}* It's just an underwear drawer."]
                           : [
                              ">{#p/basic}* Preposterous!\n* It's Asgore's underwear drawer.\n* Surprisingly clean.",
                              ">{#p/basic}* ... most of the items are pink, hand-knit, and have \"Mr. Dad Guy\" embroidered at the top."
                           ])
               ]
      }
   },
   b_opponent_alphys: {
      artifact: [">{#p/human}* (Alphys glances at it, but ultimately dismisses it.)"],
      name: "* Alphys",
      gotcha: [">{*}{#p/alphys}{#e/alphys/19}逮着你俩了。{^30}{%}"],
      act_check: [">{#p/asriel2}* Alphys。\n* 皇家科学员。"],
      act_asriel: (i: number) => [
         ...[
            [
               ">{#p/asriel2}* After all this time, my new body is finally starting to accept me...",
               ">{#p/asriel2}* Let's see what this thing is REALLY capable of."
            ],
            [">{#p/asriel2}* Keep in mind, it'll be weaker if I try to use the same spell twice in a row."],
            [">{#p/asriel2}* Just remember, try to mix up which spells you choose."],
            []
         ][Math.min(SAVE.flag.n.ga_asrielAssist++, 3)],
         choicer.create(
            "* (What should Asriel cast?)",
            `${i === 0 ? '{@fill=#808080}' : ''}Nocturne{@fill=#fff}`,
            `${i === 1 ? '{@fill=#808080}' : ''}Solstice{@fill=#fff}`,
            `${i === 2 ? '{@fill=#808080}' : ''}Serenade{@fill=#fff}`,
            `${i === 3 ? '{@fill=#808080}' : ''}Eclipse{@fill=#fff}`
         )
      ],
      act_asriel_text: [
         [">{#p/human}* (Asriel places his hands on your head, and sends a surge of energy into your body.)"],
         [">{#p/human}* (Asriel places his hands on your head, and whispers behind you in an ancient language.)"],
         [">{#p/human}* (Asriel places his hands on your head, and sings an ancient lullaby.)"],
         [">{#p/human}* (Asriel places his hands on your head, and surrounds you in a protective aura.)"]
      ],
      act_asriel_confirm: [
         [">{#p/story}* FOCUS up for this turn!"],
         [">{#p/story}* INV up for this turn!"],
         [">{#p/story}* REGEN up for this turn!"],
         [">{#p/story}* DEFENSE up for this turn!"]
      ],
      epiphaNOPE: [">{#p/alphys}{#e/alphys/19}想得美。"],
      statusX: [">{#p/asriel2}* ..."],
      statusY: [">{#p/asriel2}* 她快死了！\n* 继续攻击！"],
      status1a: [">{#p/asriel2}* Alphys..."],
      status1r: [">{#p/asriel2}* 你知道该干什么。"],
      status1b: [">{#p/asriel2}* 她原来没逃跑吗...\n* 有意思。"],
      status1c: [">{#p/asriel2}* 你知道该干什么吧。"],
      status1d: [">{#p/asriel2}* 嗯...\n  她是不是看起来有点累了？"],
      status2a: [">{#p/asriel2}* Alphys，怎么了？\n* 撑不住了？"],
      status2r1: [">{#p/asriel2}* Ugh, here we go..."],
      status2b: [">{#p/asriel2}* Go on, tell us your sob story."],
      status2c: [">{#p/asriel2}* 你竟然没贯彻逃跑精神，\n  我可真惊讶呢。"],
      status2d: [">{#p/asriel2}* Thanks, Dr. Obvious."],
      status2e: [">{#p/asriel2}* ...？"],
      status2r2: [">{#p/asriel2}* Something's about to happen."],
      status3a: [">{#p/asriel2}* 好吧... 形势严峻起来了。"],
      status3b: [">{#p/asriel2}* ...看来Alphys不准备防御了。\n* 抓住这个机会！"],
      status3c: [">{#p/asriel2}* Hang in there, $(name)..."],
      turnTalk1a: [
         ">{#p/alphys}{#e/alphys/19}要是连一击都扛不住，\n我怎么可能来这？",
         ">{#p/alphys}{#e/alphys/23}看来我高估\n你们的智商了。"
      ],
      turnTalk1b: [
         ">{#p/alphys}{#e/alphys/19}无话可说了？",
         ">{#e/alphys/18}...那就我管我说，你们听着吧。"
      ],
      turnTalk1c: [
         ">{#p/alphys}{#e/alphys/19}这就对了。\nAlphys。",
         ">{#e/alphys/18}因为，\n你有多少能耐，\n有多大的潜能...",
         ">{#e/alphys/19}只有你自己才清楚。"
      ],
      turnTalk1d: [
         ">{#p/alphys}{#e/alphys/19}尽管挥霍你那些\n珍贵的物品。",
         ">{#e/alphys/18}就那些东西，唬不到我。"
      ],
      turnTalk2: [
         ">{#p/alphys}{#e/alphys/19}...听着。\n我研究人类文化很多年了。",
         ">{#e/alphys/19}你会选择战斗到死，\n我一点也不奇怪。"
      ],
      turnTalk3: [
         ">{#p/alphys}{#e/alphys/18}而你呢，Asriel...\n你利用了人类，\n把他当保护伞。",
         ">{#e/alphys/52}怎么了？\n怕自己靠一个偷来的灵魂\n活不下去？"
      ],
      turnTalk4: [
         ">{#p/alphys}{#e/alphys/51}或者说，\n你怕自己死了后，\n人类发现有没有你都一样。",
         ">{#e/alphys/17}哦。\n这还挺有诗意的。"
      ],
      turnTalk5: [
         ">{#p/alphys}{#e/alphys/16}就你找人类求安慰这事，\n我可没责怪你的意思。",
         ">{#e/alphys/52}只是我可以\n用亲身经历告诉你...",
         ">{#e/alphys/19}随着你在意的人死去，\n你会再次失去依靠。"
      ],
      turnTalk6: [
         ">{#p/alphys}{#e/alphys/23}但你俩不会懂的，\n对吧？",
         ">{#e/alphys/19}你们两个罪恶滔天，\n又没人拦得住你们，\n怎么可能亲身体会\n我们的痛苦呢？",
         ">{#e/alphys/22}没说错吧？"
      ],
      turnTalk7: [
         ">{#p/alphys}{#e/alphys/19}不是说我不关心这事。",
         ">{#e/alphys/52}...从那时算，\n有一阵子了，\n这一直是我的心结...",
         ">{#e/alphys/51}之前，\n我真觉得我能帮你。"
      ],
      turnTalk8: [
         ">{#p/alphys}{#e/alphys/52}毕竟是我让那颗星星\n睁开了眼睛...",
         ">{#e/alphys/51}我觉得自己有办法劝劝你。"
      ],
      turnTalk9: [
         ">{#p/alphys}{#e/alphys/19}...不过现在，\n我懂你们为什么执迷不悟了。",
         ">{#e/alphys/18}我没想错的话，\n你们中肯定有人\n拥有那股力量...",
         ">{#e/alphys/19}那股可以回溯时间，\n逆天改命的力量..."
      ],
      turnTalk10: [
         ">{#p/alphys}{#f/alphys/18}果真如此的话，\n那其他人真得小心了。",
         ">{#e/alphys/23}一个人如果可以随心所欲，\n还不用付出代价的话，\n那他就不太会\n在乎别人的感受。"
      ],
      turnTalk11: [">{#z1}{#p/alphys}{#e/alphys/21}...", ">{#e/alphys/39}给我会时间静静。"],
      broken: [">{*}{#p/alphys}{#e/alphys/45}谢谢了。{^20}{%}"],
      turnTalk12: [
         ">{#z2}{#p/alphys}{#e/alphys/7}Undyne牺牲后，\n我不知道自己能做什么。",
         ">{#e/alphys/46}于是，我逃跑了。"
      ],
      turnTalk13: [
         ">{#p/alphys}{#e/alphys/47}可是越逃跑，\n我就对自己越失望。",
         ">{#e/alphys/48}难道我就这么袖手旁观，\n眼睁睁看着我族人民\n接连死去？"
      ],
      turnTalk14: [
         ">{#p/alphys}{#e/alphys/21}...这未免太绝情了。",
         ">{#e/alphys/39}更何况...",
         ">{#e/alphys/45}我怎么自责\n都没法改变现状。"
      ],
      turnTalk15: [
         ">{#p/alphys}{#e/alphys/39}Undyne说你们会\n杀死这星河中的每个人...",
         ">{#e/alphys/40}但其实比她想的更糟吧？"
      ],
      turnTalk16: [
         ">{#z3}{#p/alphys}{#e/alphys/48}...",
         ">{#e/alphys/47}复活你们中的某人\n可能是我的过失，\n但你们犯下的罪行\n可不是。",
         ">{#e/alphys/38}我管你们打的什么算盘，\n你们都得付出代价。",
         ">{*}{#z4}{#e/alphys/54}哪怕与此同时...{^10}{%}",
         ">{*}{#e/alphys/25}我会丧失理智！{^10}{%}"
      ],
      turnTalk17: [">{#p/alphys}{#e/alphys/25}接招！！"],
      turnTalk18: [">{#p/alphys}{#e/alphys/25}再尝尝这招！！"],
      turnTalk19: [">{#p/alphys}{#e/alphys/25}这招又如何！！"],
      turnTalk20: [">{#p/alphys}{#e/alphys/24}哈哈哈..."],
      turnTalk21: [">{#p/alphys}{#e/alphys/26}..."],
      turnTalk22: [">{#p/alphys}{#e/alphys/27快去死啊!!"],
      turnTalk23: [">{#p/alphys}{#e/alphys/27}..."],
      done0: (b: boolean) =>
         b
            ? [">{*}{#p/alphys}{#e/alphys/42}不...{^40}{%}", ">{*}{#e/alphys/43}怎么这么快我就...{^40}{%}"]
            : [">{*}{#p/alphys}{#e/alphys/42}不...{^40}{%}", ">{*}{#e/alphys/43}你们...{^40}{%}"],
      done1: (b: boolean) =>
         b
            ? [">{*}没-没想到你们这么强...{^40}{%}", ">{*}现在，我明白了，\n与你们为敌...{^40}{%}"]
            : [">{*}我要死在这了...\n是-是吗？{^40}{%}", ">{*}尽了全力，我还是...{^40}{%}"],
      done2: (b: boolean) =>
         b ? [">{*}{#p/alphys}我毫无胜算。{^40}{%}"] : [">{*}{#p/alphys}Asgore，我对不起你。{^40}{%}"]
   },
   b_opponent_archive1: {
      name: () => (battler.volatile[0].sparable ? "* Toriel" : "* 546f7269656c"),
      status0: [">{#p/human}* (546f7269656c now stands before you.)"],
      status1: [">{#p/human}* (546f7269656c seems intent on following a routine.)"],

      act_dinnertimeX: [">{#p/human}* (But you have already eaten your dinner.)"],
      dinnerTalk: [">{#p/toriel}Eat {@fill=#42fcff}{@mystify=slowly}slowly{@mystify=}{@fill=#ffffff}, my child."],
      dinnerStatus: [">{#p/human}* (546f7269656c would like to share something with you.)"],

      act_storytimeX: [">{#p/human}* (But you have already been read a story.)"],
      act_storytimeE: [">{#p/human}* (But 546f7269656c was not yet ready to read you a story.)"],
      storyTalk: [
         ">{#p/toriel}Once, there was a {@fill=#42fcff}{@mystify=monster}monster{@mystify=}{@fill=#ffffff}..."
      ],
      storyStatus: [">{#p/human}* (546f7269656c has one more thing to do.)"],

      act_bedtimeX: [">{#p/human}* (But you have already been put to sleep.)"],
      act_bedtimeE: [">{#p/human}* (But 546f7269656c was not yet ready to put you to sleep.)"],
      bedTalk: [">{#p/toriel}Good night, my child."],
      bedStatus: [">{#p/human}* (Toriel has served her purpose in this world.)"],

      act_talkE: [">{#p/human}* (But 546f7269656c's wasn't finished with her routine.)"],
      act_talkN: [">{#p/human}* (And Toriel shared her wisdom before fading away.)"],

      act_puzzlehelp: [">{#p/human}* (But there was no puzzle left to solve.)"],
      puzzlehelpTalk1: [
         ">{#p/toriel}Are you {@fill=#42fcff}{@mystify=hungry}hungry{@mystify=}{@fill=#ffffff}, my child?"
      ],
      puzzlehelpTalk2: [
         ">{#p/toriel}Are you {@fill=#42fcff}{@mystify=restless}restless{@mystify=}{@fill=#ffffff}, my child?"
      ],
      puzzlehelpTalk3: [
         ">{#p/toriel}Are you {@fill=#42fcff}{@mystify=sleepy}sleepy{@mystify=}{@fill=#ffffff}, my child?"
      ]
   },
   b_opponent_archive2: {
      name: () => (battler.volatile[0].sparable ? "* Gerson" : "* 476572736f6e"),
      status0: [">{#p/human}* (476572736f6e stands opposite the training area.)"],
      status1: [">{#p/human}* (476572736f6e awaits your first move.)"],

      act_challengeX: [">{#p/human}* (But you have already risen to the challenge.)"],
      act_challengeR: [">{#p/human}* (But you have not yet rested after your previous failure.)"],
      challengeTalk: [
         ">{#p/basic}It takes {@fill=#ff993d}{@mystify=courage}courage{@mystify=}{@fill=#ffffff} to face your fears."
      ],

      challengeFail: [
         ">{*}{#p/basic}Failure!\nYou must stay {@fill=#ff993d}{@mystify=focused}focused{@mystify=}{@fill=#ffffff}!{^30}{%}"
      ],
      failStatus: [">{#p/human}* (476572736f6e thinks it's time for a break.)"],
      successStatus: [">{#p/human}* (Gerson has served his purpose in this world.)"],

      act_restA: [">{#p/human}* (But you were not in need of rest.)"],
      restTalk: [
         ">{#p/basic}A good {@fill=#ff993d}{@mystify=hero}hero{@mystify=}{@fill=#ffffff} knows their limits."
      ],
      restStatus: [">{#p/human}* (476572736f6e awaits your next move with anticipation.)"],

      act_handshakeE: [">{#p/human}* (But 476572736f6e's training was not yet complete.)"],
      act_handshakeN: [">{#p/human}* (And Gerson taught you his favorite handshake before fading away.)"],

      act_taunt: [">{#p/human}* (But your gesture seems to have been ignored.)"],

      act_advice: [">{#p/human}* (But there was no advice left to hear.)"],
      adviceTalk1: [
         ">{#p/basic}You must not show {@fill=#ff993d}{@mystify=hesitation}hesitation{@mystify=}{@fill=#ffffff}."
      ],
      adviceTalk2: [
         ">{#p/basic}To learn is to face {@fill=#ff993d}{@mystify=adversity}adversity{@mystify=}{@fill=#ffffff}."
      ],
      adviceTalk3: [
         ">{#p/basic}The key to success is {@fill=#ff993d}{@mystify=humility}humility{@mystify=}{@fill=#ffffff}."
      ]
   },
   b_opponent_archive3: {
      name: () => (battler.volatile[0].sparable ? "* Prof. Roman" : "* 50726f662e20526f6d616e"),
      status0: [">{#p/human}* (50726f662e20526f6d616e takes control of the situation.)"],
      status1: [">{#p/human}* (50726f662e20526f6d616e would like to run some tests on you.)"],

      act_object: [">{#p/human}* (But your objection was swiftly overruled.)"],

      act_testX: [">{#p/human}* (But you have already completed this test.)"],
      testTalkA: [">Please, remain {#p/basic}{@fill=#003cff}{@mystify=still}still{@mystify=}{@fill=#ffffff}..."],
      testTalkB: [">{#p/basic}The {@fill=#003cff}{@mystify=fun}fun{@mystify=}{@fill=#ffffff} has only just begun."],
      testTalkC: [
         ">{#p/basic}Behold, the {@fill=#003cff}{@mystify=power}power{@mystify=}{@fill=#ffffff} of scientific endeavour."
      ],
      testStatus1: [">{#p/human}* (50726f662e20526f6d616e is ready to begin the next test.)"],
      testStatus2: [">{#p/human}* (Professor Roman has served his purpose in this world.)"],

      act_notesE: [">{#p/human}* (But 50726f662e20526f6d616e wasn't ready to exchange notes.)"],
      act_notesN: [">{#p/human}* (And Professor Roman exchanged notes before fading away.)"]
   },
   b_opponent_archive4: {
      name: () => (battler.volatile[0].sparable ? "* Napstablook" : "* 4e6170737461626c6f6f6b"),
      status0: [">{#p/human}* (4e6170737461626c6f6f6b is here by their computer.)"],
      status1: [">{#p/human}* (4e6170737461626c6f6f6b is looking for a new sound.)"],

      act_sampleX: [">{#p/human}* (But you already have the required samples.)"],
      sampleTalk: [
         ">{#p/napstablook}this should do {@fill=#d535d9}{@mystify=nicely}nicely{@mystify=}{@fill=#ffffff}..."
      ],
      sampleStatus: [">{#p/human}* (4e6170737461626c6f6f6b is ready to start composing.)"],

      act_composeX: [">{#p/human}* (But you have already finished composing the track.)"],
      act_composeE: [">{#p/human}* (But you have not yet found any samples to compose with.)"],
      composeTalk: [
         ">{#p/napstablook}let's see how this {@fill=#d535d9}{@mystify=plays}plays{@mystify=}{@fill=#ffffff} out..."
      ],

      composeFail: [
         ">{*}{#p/napstablook}oh...\nback to the {@fill=#d535d9}{@mystify=drawing}drawing{@mystify=}{@fill=#ffffff} board...{^30}{%}"
      ],
      failStatus: [">{#p/human}* (4e6170737461626c6f6f6b would like to try that again.)"],
      composeStatus: [">{#p/human}* (4e6170737461626c6f6f6b is ready to start mixing.)"],

      act_mixX: [">{#p/human}* (But you have already finished mixing the track.)"],
      act_mixE: [">{#p/human}* (But you have not yet composed a track to mix.)"],
      mixTalk: [
         ">{#p/napstablook}remember to keep the {@fill=#d535d9}{@mystify=balance}balance{@mystify=}{@fill=#ffffff} straight..."
      ],

      mixFail: [
         ">{*}{#p/napstablook}oh...\nlooks like we'll need a {@fill=#d535d9}{@mystify=remix}remix{@mystify=}{@fill=#ffffff}...{^30}{%}"
      ],
      successStatus: [">{#p/human}* (Napstablook has served their purpose in this world.)"],

      act_secretE: [">{#p/human}* (But 4e6170737461626c6f6f6b wasn't yet ready to tell you that.)"],
      act_secretN: [">{#p/human}* (And Napstablook told you a secret before fading away.)"],

      act_praise: [">{#p/human}* (But your kind words fell on invisibly shy ears.)"]
   },
   b_opponent_archive5: {
      name: () => (battler.volatile[0].sparable ? "* Asgore" : "* 4173676f7265"),
      status0: [">{#p/human}* (4173676f7265 stands tall.)"],
      status1: [">{#p/human}* (4173676f7265 only wants one thing from you.)"],

      act_hugX: [">{#p/human}* (But there was no need to hug him a second time.)"],
      hugTalk: [">{#p/asgore}Thank you, young one."],
      hugStatus: [">{#p/human}* (Asgore has served his purpose in this world.)"],

      act_promiseE: [">{#p/human}* (But 4173676f7265 hasn't served his purpose yet.)"],
      act_promiseN: [">{#p/human}* (And Asgore made a promise before fading away.)"]
   },
   b_opponent_asriel: {
      artifact: [">{#p/human}* (Asriel doesn't seem to care.)"],
      refuse: "{*}{#p/event}{#i/3}But it refused.",
      name: () =>
         battler.volatile[0].container.objects[0]?.metadata.power === true
            ? "§fill=#ff7f7f§§swirl=2/1/1.05§§hue§* Asriel Dreemurr"
            : "* Asriel Dreemurr",
      status0: pager.create(
         0,
         (power = false) =>
            power
               ? [">{#p/story}* Asriel readies \"SUPER SKYBREAKER\""]
               : SAVE.data.b.oops
                  ? [">{#p/story}* It's the end."]
                  : [">{#p/basic}* Asriel...?"],
         (power = false) =>
            power
               ? [">{#p/story}* Asriel readies \"SUPER SKYBREAKER\""]
               : SAVE.data.b.oops
                  ? [">{#p/story}* It's the end."]
                  : [">{#p/basic}* ..."]
      ),
      act_check: () =>
         SAVE.data.b.oops
            ? [
               ">{#p/story}* ASRIEL DREEMURR - ATK{^2}\u221e{^1} DEF{^2}\u221e{^1}\n* Legendary being made of every SOUL on the outpost."
            ]
            : [">{#p/story}* ASRIEL DREEMURR 攻击{^2}\u221e{^1} 防御{^2}\u221e{^1}\n* ..."],
      act_hope: [
         ">{#p/human}* (You hold onto your hopes. You feel your body being protected from within.)",
         ">{#p/story}* DEFENSE up for this turn!"
      ],
      act_dream: [
         ">{#p/human}* (You think about why you're here now. You feel your wounds and injuries slowly healing.)",
         ">{#p/story}* REGEN up for this turn!"
      ],
      act_flirt1: [">{#p/human}* (You flirt with Asriel.)\n* (Nothing happens.)"],
      act_flirt2: [
         ">{#p/human}* (You flirt with Asriel, and everyone within him, too.)",
         ">{#p/basic}* The gesture resonates strongly within Asriel...",
         ">* ... he can't help but give you something in return!"
      ],
      act_pet: (count: number) =>
         SAVE.flag.n.pacifist_marker === 8
            ? [">{#p/human}* (You try to pet Asriel, but he's too far out of reach.)"]
            : [
               ...[
                  [">{#p/human}* (You pet Asriel.)\n* (Asriel doesn't seem to know how to handle this.)"],
                  [">{#p/human}* (You pet Asriel again.)\n* (Asriel still doesn't know how to handle this.)"],
                  [">{#p/human}* (You stroke Asriel's fur.)\n* (Asriel blushes and avoids direct eye contact.)"],
                  [">{#p/human}* (You ruffle Asriel's head.)\n* (Asriel holds back a smile with all his might.)"],
                  [">{#p/human}* (You scratch Asriel's neck.)\n* (Asriel refuses to show his appreciation.)"],
                  [
                     ">{#p/human}* (You play with Asriel's ears.)\n* (Asriel really wishes he wasn't enjoying this.)"
                  ],
                  [">{#p/human}* (You pat Asriel's back.)\n* (Asriel doesn't understand your motives anymore.)"],
                  [
                     ">{#p/human}* (You cling to Asriel's legs.)\n* (Asriel stands dumbfounded at your continued affection.)"
                  ],
                  [
                     ">{#p/human}* (You squeeze Asriel's paws.)\n* (Asriel is just letting it happen at this point.)"
                  ],
                  [">{#p/human}* (You boop Asriel's snout.)\n* (Asriel has given up trying to stop you.)"],
                  [">{#p/human}* (You caress Asriel's face.)\n* (Asriel seems to have been reminded of someone.)"],
                  [">{#p/human}* (You continue to pet Asriel.)\n* (Asriel sighs.)"],
                  [">{#p/human}* (You continue to pet Asriel.)\n* (Asriel sighs.)"]
               ][count],
               ">{#p/story}* Asriel's ATTACK down for this turn!"
            ],
      turnTalk1: (fluff: boolean) =>
         fluff
            ? [
               ">{*}{#p/asriel3}{#e/asriel/3}You know...",
               ">{*}{#p/asriel3}{#e/asriel/6}I don't... care about destroying the outpost anymore."
            ]
            : [
               ">{*}{#p/asriel3}{#e/asriel/3}You know...",
               ">{*}{#p/asriel3}{#e/asriel/6}I don't care about destroying the outpost anymore."
            ],
      status1: () =>
         SAVE.data.b.oops
            ? [">{#p/story}* Asriel charges \"ROARING TYPHOON.\""]
            : [">{#p/basic}* But... you're..."],
      turnTalk2: (fluff: boolean) =>
         fluff
            ? [
               ">{*}{#p/asriel3}{#e/asriel/3}A-after I defeat you and gain total control over the timeline...",
               ">{*}{#p/asriel3}{#e/asriel/2}I just... want to reset everything."
            ]
            : [
               ">{*}{#p/asriel3}{#e/asriel/3}After I defeat you and gain total control over the timeline...",
               ">{*}{#p/asriel3}{#e/asriel/2}I just want to reset everything."
            ],
      status2: () =>
         SAVE.data.b.oops
            ? [">{#p/story}* Asriel calls on \"TITANIUM STRIKER.\""]
            : [">{#p/basic}* How could you possibly..."],
      turnTalk3: (fluff: boolean) =>
         fluff
            ? [
               ">{*}{#p/asriel3}{#e/asriel/3}All your progress... everyone's memories...",
               ">{*}{#p/asriel3}{#e/asriel/2}I-I'll bring them all back to zero!"
            ]
            : [
               ">{*}{#p/asriel3}{#e/asriel/3}All your progress... everyone's memories...",
               ">{*}{#p/asriel3}{#e/asriel/2}I'll bring them all back to zero!"
            ],
      status3: () =>
         SAVE.data.b.oops ? [">{#p/story}* Asriel readies \"CROSSFIRE CHAOS.\""] : [">{#p/basic}* ..."],
      turnTalk4: (fluff: boolean) =>
         fluff
            ? [">{*}{#p/asriel3}{#e/asriel/0}Then we can do... everything... ALL over again."]
            : [">{*}{#p/asriel3}{#e/asriel/0}Then we can do everything ALL over again."],
      status4: () =>
         SAVE.data.b.oops
            ? [">{#p/story}* Asriel charges \"ROARING TYPHOON.\""]
            : [">{#p/basic}* ... heh...\n* This must have been how Toriel felt, huh?"],
      turnTalk5: (fluff: boolean) =>
         fluff
            ? [
               ">{*}{#p/asriel3}{#e/asriel/1}A-and you know what the best part of all this is?",
               ">{*}{#p/asriel3}{#e/asriel/0}You'll DO it."
            ]
            : [
               ">{*}{#p/asriel3}{#e/asriel/1}And you know what the best part of all this is?",
               ">{*}{#p/asriel3}{#e/asriel/0}You'll DO it."
            ],
      status5: () =>
         SAVE.data.b.oops ? [">{#p/story}* Asriel readies \"CROSSFIRE CHAOS.\""] : [">{#p/basic}* ... still, I..."],
      turnTalk6: (fluff: boolean) =>
         fluff
            ? [">{*}{#p/asriel3}{#e/asriel/3}And then... y-you'll lose to me again."]
            : [">{*}{#p/asriel3}{#e/asriel/3}And then you'll lose to me again."],
      status6: () =>
         SAVE.data.b.oops ? [">{#p/story}* Asriel readies \"SUPER SKYBREAKER.\""] : [">{#p/basic}* ..."],
      turnTalk7: (fluff: boolean) =>
         fluff ? [">{*}{#p/asriel3}{#e/asriel/4}A-and again."] : [">{*}{#p/asriel3}{#e/asriel/4}And again."],
      status7: () =>
         SAVE.data.b.oops ? [">{#p/story}* Asriel calls on \"TITANIUM STRIKER.\""] : [">{#p/basic}* Unless..."],
      turnTalk8: (fluff: boolean) =>
         fluff
            ? [">{*}{#p/asriel3}{#e/asriel/2}And... a-and again!"]
            : [">{*}{#p/asriel3}{#e/asriel/2}And again!"],
      status8: () =>
         SAVE.data.b.oops
            ? [">{#p/story}* Asriel readies \"CROSSFIRE CATACLYSM.\""]
            : [">{#p/basic}* ... damn it..."],
      turnTalk9: (fluff: boolean) =>
         30 <= SAVE.data.n.bully
            ? fluff
               ? [">{*}{#p/asriel3}{#e/asriel/3}All because... y-you want to show your \"strength.\""]
               : [">{*}{#p/asriel3}{#e/asriel/3}All because you want to show your \"strength.\""]
            : fluff
               ? [">{*}{#p/asriel3}{#e/asriel/3}All because... y-you want a \"perfect ending.\""]
               : [">{*}{#p/asriel3}{#e/asriel/3}All because you want a \"perfect ending.\""],
      status9: () =>
         SAVE.data.b.oops
            ? [">{#p/story}* Asriel calls on \"POLYCARBIDE OBLITERATOR.\""]
            : [">{#p/basic}* You're supposed to be dead!"],
      turnTalk10: (fluff: boolean) =>
         30 <= SAVE.data.n.bully
            ? fluff
               ? [">{*}{#p/asriel3}{#e/asriel/1}... because... y-you think you're \"tough.\""]
               : [">{*}{#p/asriel3}{#e/asriel/1}... because you think you're \"tough.\""]
            : fluff
               ? [">{*}{#p/asriel3}{#e/asriel/1}... because... y-you \"love your friends.\""]
               : [">{*}{#p/asriel3}{#e/asriel/1}... because you \"love your friends.\""],
      status10: () =>
         SAVE.data.b.oops ? [">{#p/story}* Asriel readies \"DOOMSDAY TYPHOON.\""] : [">{#p/basic}* Ugh..."],
      turnTalk11: (fluff: boolean) =>
         fluff
            ? [">{*}{#p/asriel3}{#e/asriel/1}... b-because you're \"determined.\""]
            : [">{*}{#p/asriel3}{#e/asriel/1}... because you're \"determined.\""],
      status11: () =>
         SAVE.data.b.oops
            ? [">{#p/story}* Asriel readies \"ULTIMA SKYBREAKER.\""]
            : [">{#p/basic}* All those times I saw him arguing with Toriel... about the past..."],
      turnTalk12: (fluff: boolean) =>
         fluff
            ? [
               ">{*}{#p/asriel3}{#e/asriel/6}Isn't... isn't that delicious?",
               ">{*}{#p/asriel3}{#e/asriel/3}The power... that let you get this far...",
               ">{*}{#p/asriel3}{#e/asriel/2}It's gonna be your downfall!"
            ]
            : [
               ">{*}{#p/asriel3}{#e/asriel/6}Isn't that delicious?",
               ">{*}{#p/asriel3}{#e/asriel/3}The power that let you get this far...",
               ">{*}{#p/asriel3}{#e/asriel/2}It's gonna be your downfall!"
            ],
      status12: () =>
         SAVE.data.b.oops
            ? [">{#p/story}* Asriel readies \"HYPER GONER.\""]
            : [">{#p/basic}* ... does he really miss me...\n* ... that much?"],
      turnTalk13: (fluff: boolean) =>
         fluff
            ? [
               ">{*}{#p/asriel3}{#e/asriel/0}... now... ENOUGH messing around!",
               ">{*}{#p/asriel3}{#e/asriel/5}It's... it's time to purge this timeline once and for all!"
            ]
            : [
               ">{*}{#p/asriel3}{#e/asriel/0}Now, ENOUGH messing around!",
               ">{*}{#p/asriel3}{#e/asriel/5}It's time to purge this timeline once and for all!"
            ],
      turnTalk14: [
         ">{*}{#p/asriel3}{#e/asriel/1}... even after that attack, you're still standing in my way...?",
         ">{*}{#p/asriel3}{#e/asriel/5}Wow... you really ARE something special.",
         ">{*}{#p/asriel3}{#e/asriel/0}But don't get cocky.",
         ">{*}{#p/asriel3}{#e/asriel/0}Up until now, I've only been using a fraction of my REAL power!",
         ">{*}{#p/asriel3}{#e/asriel/2}Let's see what good your DETERMINATION is against THIS!!"
      ],
      hyperTalk1a: [
         ">{*}{#p/asriel3}{#e/asriel/0}Urah ha ha...",
         ">{*}{#p/asriel3}{#e/asriel/2}Behold my TRUE power!"
      ],
      hyperTalk1b: [
         ">{*}{#p/asriel3}{#e/asriel/4}Wh-\nHow did you not get hit!?",
         ">{*}{#p/asriel3}{#e/asriel/5}Urgh..."
      ],
      hyperTalk2a: [">{*}{#p/asriel3}{#e/asriel/1}Come on...!"],
      hyperTalk2b: [
         ">{*}{#p/asriel3}{#e/asriel/5}What the...",
         ">{*}{#p/asriel3}{#e/asriel/4}You should've died by now!"
      ],
      hyperTalk3a: [
         ">{*}{#p/asriel3}{#e/asriel/0}I can feel it...",
         ">{*}{#p/asriel3}{#e/asriel/2}Every time you die, your grip on this world slips away.",
         ">{*}{#p/asriel3}{#e/asriel/2}Every time you die, your friends forget you a little more."
      ],
      hyperTalk3b: [">{*}{#p/asriel3}{#e/asriel/6}... whatever.\nIt doesn't matter."],
      hyperTalk3c: [">{*}{#p/asriel3}{#e/asriel/0}Your life will end here, in a world where NO ONE remembers you!"],
      hyperTalk4: [
         ">{*}{#p/asriel3}{#e/asriel/1}Still, you're hanging on...?",
         ">{*}{#p/asriel3}{#e/asriel/3}That's fine by me.",
         ">{*}{#p/asriel3}{#e/asriel/2}In a few moments, you'll forget everything you've ever known.",
         ">{*}{#p/asriel3}{#e/asriel/0}That attitude will serve you well in your NEXT life!"
      ],
      hyperTalk5: [
         ">{*}{#p/asriel3}{#e/asriel/0}Urah ha ha...",
         ">{*}{#p/asriel3}{#e/asriel/1}Still!?",
         ">{*}{#p/asriel3}{#e/asriel/2}Come on...",
         ">{*}{#p/asriel3}{#e/asriel/0}Show me what good your DETERMINATION is now!"
      ],
      intermission: () => [
         ">{#p/human}* (You can't move your body.)",
         ">* (You try to struggle.)\n* (Nothing happens.)",
         ">* (You try to reach your SAVE file.)\n* (Nothing happens.)",
         ">* (You try again to reach your SAVE file.)\n* (Nothing happens.)",
         ">* (...)",
         ...(SAVE.data.b.oops
            ? [
               ">* (... but...)",
               ">* (Maybe, with what little power you have...)",
               ">* (You can SAVE something else.)"
            ]
            : [
               ">{#p/basic}* Hey... are you there?",
               ">* It's me, $(name)...\n* You still with me, partner?",
               ">* ... heh...",
               ">* We've come such a long way, you and I...",
               ">* All those friends we made, all those battles we fought...",
               ">* Thinking about it now... it's like we've been building to this the whole time.",
               ">* ... look...\n* I know I'm not always the most optimistic person...",
               ">* But for the sake of everyone on the outpost, you have to stay determined!",
               ">* Besides, if Asriel could steal the SOULs of your friends...",
               ">* ... who's to say we can't just steal them back?",
               ">* Come on!\n* We're in this together!"
            ])
      ],
      status13: () =>
         world.runaway
            ? [">{#p/story}* ..."]
            : [
               SAVE.data.b.oops
                  ? [">{#p/story}* A faint resonance echoes from within Asriel's body."]
                  : [">{#p/basic}* ..."],
               SAVE.data.b.oops
                  ? [">{#p/story}* A growing resonance echoes from within Asriel's body."]
                  : [">{#p/basic}* Yes, that's it!\n* Keep going!"],
               SAVE.data.b.oops
                  ? [">{#p/story}* A powerful resonance echoes from within Asriel's body."]
                  : [">{#p/basic}* We're almost there!"],
               SAVE.data.b.oops
                  ? [">{#p/story}* An almighty resonance echoes from within Asriel's body."]
                  : [">{#p/basic}* ...\n* Now what?"]
            ][
            (SAVE.flag.b.pacifist_marker_save1 ? 1 : 0) +
            (SAVE.flag.b.pacifist_marker_save2 ? 1 : 0) +
            (SAVE.flag.b.pacifist_marker_save3 ? 1 : 0)
            ],
      act_check2: () =>
         SAVE.flag.b.pacifist_marker_save1 && SAVE.flag.b.pacifist_marker_save2 && SAVE.flag.b.pacifist_marker_save3
            ? [">{#p/story}* ASRIEL DREEMURR 攻击{^2}\u221e{^1} 防御{^2}\u221e{^1}\n* ..."]
            : SAVE.data.b.oops
               ? [
                  ">{#p/story}* ASRIEL DREEMURR - ATK{^2}\u221e{^1} DEF{^2}\u221e{^1}\n* The absolute GOD of hyperdeath!"
               ]
               : [">{#p/story}* ASRIEL DREEMURR - ATK{^2}\u221e{^1} DEF{^2}\u221e{^1}\n* Don't give up now."],
      mercy_save1: () => [
         ">{#p/human}* (You reach out to Asriel's SOUL and call for your friends.)",
         ...(SAVE.flag.b.pacifist_marker_save1 || SAVE.flag.b.pacifist_marker_save2 || SAVE.flag.b.pacifist_marker_save3
            ? []
            : [">{#p/basic}* They're in there somewhere, aren't they?", ">* ..."]),
         ">* Within the depths of Asriel's SOUL, something's resonating...!"
      ],
      confrontation: [
         ">{#p/human}* （在伤害了那么多怪物之后...）",
         ">* （某种沉睡的、封存的东西再度苏醒。）",
         ">* （那是很久很久以前...\n  怪物面对人类的，本能的恐惧。）",
         ">* （现在站在你面前的敌人，\n  不会对你有丝毫恐惧...）",
         ">* （然而，你伤害过那么多怪物，\n  只要将他们的恐惧累积起来...）",
         ">* （你找到了突破口，\n  一个无法拒绝的机会。）",
         ">* （...现在，其他选择已毫无意义。）",
         ">* （只有一条路可走。）"
      ],
      attackTalk1: [
         ">{*}{#p/asriel3}{#e/asriel/1}你... 怎么可能...",
         ">{*}{#p/asriel3}{#e/asriel/3}...",
         ">{*}{#p/asriel3}{#e/asriel/2}呵呵呵... 以为自己很强\n强到可以超越神明，\n是吗？",
         ">{*}{#p/asriel3}{#e/asriel/0}那，就来看看你\n能不能受得了这个！"
      ],
      attackTalk2: [
         ">{*}{#p/asriel3}{#e/asriel/3}...",
         ">{*}{#p/asriel3}{#e/asriel/1}以为区区这样\n就能伤得了我？",
         ">{*}{#p/asriel3}{#e/asriel/0}我才是这里的主宰！"
      ],
      attackTalk3: [
         ">{*}{#p/asriel3}{#e/asriel/2}...而且，\n就算你能打败我...",
         ">{*}{#p/asriel3}{#e/asriel/3}你的朋友\n也会因你而死。",
         ">{*}{#p/asriel3}{#e/asriel/1}这就是你想要的吗？\n永远孤身一人？"
      ],
      attackTalk4: [
         ">{*}{#p/asriel3}{#e/asriel/3}快住手，$(name)...\n你这是在自杀！",
         ">{*}{#p/asriel3}{#e/asriel/5}没明白吗？",
         ">{*}{#p/asriel3}{#e/asriel/6}我认识的$(name)\n绝不会做这种蠢事！"
      ],
      attackTalk5: [
         ">{*}{#p/asriel3}{#e/asriel/4}...",
         ">{*}{#p/asriel3}{#e/asriel/6}听我说，$(name)。",
         ">{*}{#p/asriel3}{#e/asriel/6}现在赶快住手。",
         ">{*}{#p/asriel3}{#e/asriel/9}否则...",
         ">{*}{#p/asriel3}{#e/asriel/7}你-你别逼我动真格！"
      ],
      attackTalk6: [
         ">{*}{#p/asriel3}{#e/asriel/9}$(name)，求求你...",
         ">{*}{#p/asriel3}{#e/asriel/7}你还没明白\n自己在做什么吗？",
         ">{*}{#p/asriel3}{#e/asriel/8}It's not JUST that I want you to stop fighting me.",
         ">{*}{#p/asriel3}{#e/asriel/8}更重要的是...\n如果我被你打败了...",
         ">{*}{#p/asriel3}{#e/asriel/7}我永远，永远\n都当不了你的对手了。",
         ">{*}{#p/asriel3}{#e/asriel/9}永远也不会\n得到你的尊重！",
         ">{*}{#p/asriel3}{#e/asriel/10}{#i/3}{@random=1.1/1.1}该死，$(name)...\n你他妈的为什么总要赢？"
      ],
      attackTalk7: [">{*}{#p/asriel3}{#e/asriel/11}{#i/4}..."],
      attackTalk7x: [">{*}{#p/asriel3}{#e/asriel/11}{#i/4}$(name)，我..."],
      mercy_save2: [
         ">{#p/human}* (Strangely, as your friends remembered you...)",
         ">* (Something else began resonating within Asriel's SOUL, stronger and stronger.)",
         ">* (It seems that there's still one last person that needs to be saved.)",
         ">* (But who...?)",
         ">* (...)",
         ">* (... suddenly, you realize.)",
         ">* (You reach out and call their name.)"
      ],
      saveTalk1: [">{*}{#p/asriel3}{#e/asriel/1}Huh? What are you doing...!?"],
      saveTalk2: [
         ">{*}{#p/asriel3}{#e/asriel/7}Wh... what did you do...?",
         ">{*}{#p/asriel3}{#e/asriel/8}What's this feeling...? What's happening to me?",
         ">{*}{#p/asriel3}{#e/asriel/1}No... NO!\nI don't need ANYONE!"
      ],
      saveTalk3: [
         ">{*}{#p/asriel3}{#e/asriel/4}STOP IT!\nGet away from me!",
         ">{*}{#p/asriel3}{#e/asriel/10}Do you hear me!?",
         ">{*}{#p/asriel3}{#e/asriel/9}I'll tear you apart!"
      ],
      saveTalk4: [
         ">{*}{#p/asriel3}{#e/asriel/7}...",
         ">{*}{#p/asriel3}{#e/asriel/7}$(name)...\nDo you know why I'm doing this...?",
         ">{*}{#p/asriel3}{#e/asriel/7}Why I keep fighting to keep you around...?"
      ],
      saveTalk5: [
         ">{*}{#p/asriel3}{#e/asriel/7}I'm doing this...",
         ">{*}{#p/asriel3}{#e/asriel/8}Because you're special, $(name).",
         ">{*}{#p/asriel3}{#e/asriel/8}You're the only one that understands me.",
         ">{*}{#p/asriel3}{#e/asriel/8}You're the only one who's any fun to play with anymore."
      ],
      saveTalk6: [
         ">{*}{#p/asriel3}{#e/asriel/8}...",
         ">{*}{#p/asriel3}{#e/asriel/8}No...",
         ">{*}{#p/asriel3}{#e/asriel/7}That's not JUST it.",
         ">{*}{#p/asriel3}{#e/asriel/9}I... I...",
         ">{*}{#p/asriel3}{#e/asriel/4}I'm doing this because I care about you, $(name)!",
         ">{*}{#p/asriel3}{#e/asriel/3}I care about you more than anybody else!"
      ],
      saveTalk7: [
         ">{*}{#p/asriel3}{#e/asriel/7}...",
         ">{*}{#p/asriel3}{#e/asriel/8}I'm not ready for this to end.",
         ">{*}{#p/asriel3}{#e/asriel/8}I'm not ready for you to leave.",
         ">{*}{#p/asriel3}{#e/asriel/9}I'm not ready to say goodbye to you again."
      ],
      saveTalk8: [
         ">{*}{#p/asriel3}{#e/asriel/10}{#i/4}{@random=1.1/1.1}So, please...\nSTOP doing this...",
         ">{*}{#p/asriel3}{#e/asriel/12}{#i/4}{@random=1.2/1.2}AND JUST LET ME WIN!!!"
      ],
      cryTalk1: [">{*}{#p/asriel3}{@random=1.1/1.1}STOP IT!{^30}{%}"],
      cryTalk2: [">{*}{#p/asriel3}{@random=1.1/1.1}STOP IT NOW!!!{^40}{%}"],
      endStatus1: () => (SAVE.data.b.oops ? [">{#p/story}* ..."] : [">{#p/basic}* ..."]),
      endTalk1: [">{*}{#p/asriel3}{#e/asriel/11}{#i/4}...", ">{*}{#p/asriel3}{#e/asriel/11}{#i/4}$(name)..."],
      endStatus2: () => (SAVE.data.b.oops ? [">{#p/story}* ..."] : [">{#p/basic}* Asriel..."]),
      endTalk2: [">{*}{#p/asriel3}{#e/asriel/11}{#i/4}I'm so alone, $(name)..."],
      endStatus3: () => (SAVE.data.b.oops ? [">{#p/story}* ..."] : [">{#p/basic}* ..."]),
      endTalk3: [">{*}{#p/asriel3}{#e/asriel/11}{#i/4}I'm so afraid, $(name)..."],
      endStatus4: () => (SAVE.data.b.oops ? [">{#p/story}* ..."] : [">{#p/basic}* ..."]),
      endTalk4: [">{*}{#p/asriel3}{#e/asriel/11}{#i/4}$(name)，我..."],
      endStatus5: () => (SAVE.data.b.oops ? [">{#p/story}* ..."] : [">{#p/basic}* This is all my fault..."]),
      endTalk5: [">{*}{#p/asriel3}{#e/asriel/11}{#i/4}I..."]
   },
   b_opponent_lostsoul: {
      name: "* Lost Soul",
      act_check_alphys: () => [
         ">{#p/story}* LOST SOUL - ATK ??? DEF ???\n* Seems this Lost Soul is a fan of sci-fi anime."
      ],
      act_check_asgore: () => [
         ">{#p/story}* LOST SOUL - ATK ??? DEF ???\n* Seems this Lost Soul would rather you stay alive."
      ],
      act_check_papyrus: () => [
         ">{#p/story}* LOST SOUL - ATK ??? DEF ???\n* Seems this Lost Soul dreams of becoming a royal guard."
      ],
      act_check_sans: () => [
         ">{#p/story}* LOST SOUL - ATK ??? DEF ???\n* Seems this Lost Soul just wants the best for someone."
      ],
      act_check_toriel: () => [
         ">{#p/story}* LOST SOUL - ATK ??? DEF ???\n* Seems this Lost Soul wants badly to protect you."
      ],
      act_check_undyne: () => [
         ">{#p/story}* LOST SOUL - ATK ??? DEF ???\n* Seems this Lost Soul would like to teach you how to cook."
      ]
   },
   b_opponent_lostsoul_a: {
      status1: () =>
         SAVE.data.b.oops ? [">{#p/story}* The Lost Souls appeared."] : [">{#p/basic}* Alphys and Undyne."],
      status2: () =>
         SAVE.data.b.oops
            ? [">{#p/story}* The Lost Souls stand there."]
            : [">{#p/basic}* Hmm... I think I know just the thing to get them to wake up."],
      act: {
         flirt: (s: boolean) =>
            s
               ? [">{#p/human}* (You flirt with the Lost Soul.)", ">{#p/basic}* Suddenly...!"]
               : [">{#p/human}* (You flirt with the Lost Soul.)\n* (Nothing happens.)"],
         water: (s: boolean) => [
            ">{#p/human}* (You offer the Lost Soul a glass of water.)",
            ">{#p/human}* (She seems unimpressed by it, yet familiar with it at the same time...)",
            ...(s ? [">{#p/basic}* Suddenly, the memories are flooding back!"] : [])
         ],
         punch: (s: boolean) => [
            ">{#p/human}* (You offer the Lost Soul a bottle of exoberry punch.)",
            ">{#p/human}* (She seems bothered by it, yet familiar with it at the same time...)",
            ...(s ? [">{#p/basic}* Suddenly, the memories are flooding back!"] : [])
         ],
         cocoa: (s: boolean) => [
            ">{#p/human}* (You offer the Lost Soul a mug of hot cocoa.)",
            ">{#p/human}* (She seems comforted by it, and familiar with it as well...)",
            ...(s ? [">{#p/basic}* Suddenly, the memories are flooding back!"] : [])
         ],
         tea: (s: boolean) => [
            ">{#p/human}* (You offer the Lost Soul a cup of Starling tea.)",
            ">{#p/human}* (She seems elated by it, and familiar with it as well...)",
            ...(s ? [">{#p/basic}* Suddenly, the memories are flooding back!"] : [])
         ],
         lesson: (s: boolean) => [
            ">{#p/human}* (You ask the Lost Soul to teach you how to cook.)",
            ">{#p/human}* (She doesn't know why, but she kind of wants to oblige...)",
            ...(s ? [">{#p/basic}* Suddenly, the memories are flooding back!"] : [])
         ],
         trivia: (s: boolean) => [
            ">{#p/human}* (You ask the Lost Soul to give you trivial security questions.)",
            ">{#p/human}* (She's apprehensive, but willing at the same time...)",
            ...(s ? [">{#p/basic}* Suddenly, the memories are flooding back!"] : [])
         ],
         escort: (s: boolean) => [
            ">{#p/human}* (You ask the Lost Soul to escort you through a dangerous area.)",
            ">{#p/human}* (She seems hesitant, but thinks it'd be a good idea...)",
            ...(s ? [">{#p/basic}* Suddenly, the memories are flooding back!"] : [])
         ]
      },
      assist: {
         text: [">{#p/basic}* Wake up, you two...\n* A new Mew Mew movie was found!"],
         talk: [
            [">{#p/undyne}{#e/undyne/13}We'll have to watch it later then!"],
            [">{#p/alphys}{#e/alphys/3}You're kidding me.\nReally??"]
         ]
      },
      fight: [
         [
            [">{#p/undyne}{#e/undyne/4}How could I forget that warrior spirit."],
            [">{#p/alphys}{#e/alphys/9}Undyne, watch out!"]
         ],
         [
            [">{#p/undyne}{#e/undyne/4}Heh, you and your silly nicknames."],
            [">{#p/alphys}{#e/alphys/12}Now I know why they call you \"$(moniker4)!\""]
         ]
      ],
      flirt: [
         [
            [">{#p/undyne}{#e/undyne/12}I swear if you hit on me one more time..."],
            [">{#p/alphys}{#e/alphys/35}Pfft."]
         ],
         [
            [">{#p/undyne}{#e/undyne/5}I DARE you to flirt with her again."],
            [">{#p/alphys}{#e/alphys/35}Oh, bring it ON."]
         ]
      ],
      idle: [
         pager.create(
            1,
            () =>
               2 <= SAVE.flag.n.genocide_milestone
                  ? [">{#p/undyne}There's a burning feeling I can't describe."]
                  : [">{#p/undyne}All humans must die."],
            () =>
               2 <= SAVE.flag.n.genocide_milestone
                  ? [">{#p/undyne}Everyone in the galaxy is counting on me!"]
                  : [">{#p/undyne}You're our real enemy."],
            () =>
               2 <= SAVE.flag.n.genocide_milestone
                  ? [">{#p/undyne}You're gonna have to try a little harder than THAT."]
                  : [">{#p/undyne}Mercy is for the weak."]
         ),
         pager.create(
            1,
            () =>
               6 <= SAVE.flag.n.genocide_milestone
                  ? [">{#p/alphys}You must not be as smart as I thought."]
                  : [">{#p/alphys}You want me gone, don't you?"],
            () =>
               6 <= SAVE.flag.n.genocide_milestone
                  ? [">{#p/alphys}You won't change what happens next."]
                  : [">{#p/alphys}I'm just doing my job, aren't I?"],
            () =>
               6 <= SAVE.flag.n.genocide_milestone
                  ? [">{#p/alphys}Nobody else sees things like I do."]
                  : [">{#p/alphys}I've got to keep stalling, right?"]
         )
      ],
      item: {
         tvm_mewmew: {
            text: [
               ">{#p/human}* (You flash the Mew Mew Doll in the Lost Souls' faces.)",
               ">{#p/basic}* Suddenly...!"
            ],
            talk: [
               [">{#p/undyne}{#e/undyne/41}Uh, I guess this is between you guys."],
               [">{#p/alphys}{#e/alphys/8}Oh, so NOW you want me to see it."]
            ]
         },
         orange_soda: {
            text: [
               ">{#p/human}* (The soda seems familiar to one of the Lost Souls...)",
               ">{#p/basic}* Suddenly, the memories are flooding back!"
            ],
            talk: [
               [">{#p/undyne}{#e/undyne/20}Yeah, she LOVES that orange soda stuff."],
               [">{#p/alphys}{#e/alphys/10}So THAT's where my missing orange crush soda went!"]
            ]
         },
         spaghetti: {
            text: [
               ">{#p/human}* (The noodles seem familiar to one of the Lost Souls...)",
               ">{#p/basic}* Suddenly, the memories are flooding back!"
            ],
            talk: [
               [">{#p/undyne}{#e/undyne/20}Hey, that's Papyrus's spaghetti!"],
               [">{#p/alphys}{#e/alphys/36}I guess you WOULD know about that, huh?"]
            ]
         },
         snack: {
            text: [
               ">{#p/human}* (The snack seems familiar to one of the Lost Souls...)",
               ">{#p/basic}* Suddenly, the memories are flooding back!"
            ],
            talk: [
               [">{#p/undyne}{#e/undyne/41}That must be the snack I got for you."],
               [">{#p/alphys}{#e/alphys/6}You do snacks now?"]
            ]
         },
         starling_tea: {
            text: [
               ">{#p/human}* (The mixture seems familiar to one of the Lost Souls...)",
               ">{#p/basic}* Suddenly, the memories are flooding back!"
            ],
            talk: [
               [">{#p/undyne}{#e/undyne/18}Is that... what I think it is?"],
               [">{#p/alphys}{#e/alphys/36}Ooh, tea time."]
            ]
         }
      },
      standard: [
         [">{#p/undyne}{#e/undyne/41}Yeah, some humans are pretty cool, actually."],
         [">{#p/alphys}{#e/alphys/9}We've been through too much together to doubt each other now!"]
      ]
   },
   b_opponent_lostsoul_b: {
      status1: () =>
         SAVE.data.b.oops
            ? [">{#p/story}* The Lost Souls appeared."]
            : [">{#p/basic}* Papyrus!\n* ... and his brother."],
      status2: () =>
         SAVE.data.b.oops
            ? [">{#p/story}* The Lost Souls stand there."]
            : [">{#p/basic}* Ah, right.\n* I think I might have an idea for these two..."],
      act: {
         flirt: (s: boolean) =>
            s
               ? [">{#p/human}* (You flirt with the Lost Soul.)", ">{#p/basic}* Suddenly...!"]
               : [">{#p/human}* (You flirt with the Lost Soul.)\n* (Nothing happens.)"],
         puzzle: (s: boolean) => [
            ">{#p/human}* (You ask the Lost Soul to give you a puzzle.)",
            ">{#p/human}* (He doesn't know why, but he already has one prepared...)",
            ...(s ? [">{#p/basic}* Suddenly, the memories are flooding back!"] : [])
         ],
         hangout: (s: boolean) => [
            ">{#p/human}* (You ask the Lost Soul to hang out with you.)",
            ">{#p/human}* (He doesn't know why, but the idea excites him...)",
            ...(s ? [">{#p/basic}* Suddenly, the memories are flooding back!"] : [])
         ],
         judgement: (s: boolean) => [
            ">{#p/human}* (You ask the Lost Soul to begin your judgement.)",
            ">{#p/human}* (He doesn't know why, but he feels comfortable with doing so...)",
            ...(s ? [">{#p/basic}* Suddenly, the memories are flooding back!"] : [])
         ],
         dinner: (s: boolean) => [
            ">{#p/human}* (You ask the Lost Soul to have dinner with you.)",
            ">{#p/human}* (He doesn't know why, but the request feels oddly familiar...)",
            ...(s ? [">{#p/basic}* Suddenly, the memories are flooding back!"] : [])
         ]
      },
      assist: {
         text: [">{#p/basic}* Psst, Papyrus!\n* Undyne just approved you for a position in the Royal Guard!"],
         talk: [
            [">{#p/papyrus}{#e/papyrus/12}OH MY GOD, I'M REALLY GONNA BE A ROYAL GUARD!"],
            [">{#p/sans}{#e/sans/2}we can only hope."]
         ]
      },
      fight: [
         [
            [">{#p/papyrus}{#e/papyrus/27}AH, I SUR- RENDER!"],
            [">{#p/sans}{#e/sans/3}i figured you'd try something like that."]
         ],
         [
            [">{#p/papyrus}{#e/papyrus/21}SANS, ARE YOU ALRIGHT?"],
            [">{#p/sans}{#e/sans/3}don't worry, bro.\nit's just a dream, after all."]
         ]
      ],
      flirt: [
         [
            [">{#p/papyrus}{#e/papyrus/13}EVEN NOW, YOU INSIST ON YOUR AFFECT- ION..."],
            [">{#p/sans}{#e/sans/2}you just don't know when to quit, huh?"]
         ],
         [
            [">{#p/papyrus}{#e/papyrus/14}SURELY THAT AFFECT- ION WAS MEANT FOR ME."],
            [">{#p/sans}{#e/sans/2}what? you'd be better off with a pile of moon rocks."]
         ]
      ],
      idle: [
         pager.create(
            1,
            () =>
               1 <= SAVE.flag.n.genocide_milestone
                  ? [">{#p/papyrus}I DON'T KNOW IF I CAN FORGIVE YOU..."]
                  : [">{#p/papyrus}I MUST CAPTURE A HUMAN!"],
            () =>
               1 <= SAVE.flag.n.genocide_milestone
                  ? [">{#p/papyrus}I DON'T KNOW WHAT I'LL DO WITHOUT HIM..."]
                  : [">{#p/papyrus}THEN EVERYONE WILL..."],
            () =>
               1 <= SAVE.flag.n.genocide_milestone
                  ? [">{#p/papyrus}I DON'T KNOW WHO TO TURN TO..."]
                  : [">{#p/papyrus}..."]
         ),
         pager.create(
            1,
            () =>
               1 <= SAVE.flag.n.killed_sans
                  ? [">{#p/sans}... on days like these, kids like you..."]
                  : [">{#p/sans}i can't keep protecting you."],
            () =>
               1 <= SAVE.flag.n.killed_sans
                  ? [">{#p/sans}you've killed me before, haven't you?"]
                  : [">{#p/sans}sooner or later, you'll just die anyway."],
            () =>
               1 <= SAVE.flag.n.killed_sans
                  ? [">{#p/sans}you don't have the right to save us anymore."]
                  : [">{#p/sans}you don't really belong here."]
         )
      ],
      item: {
         berry: {
            text: [
               ">{#p/human}* (The fruit seems familiar to one of the Lost Souls...)",
               ">{#p/basic}* Suddenly, the memories are flooding back!"
            ],
            talk: [
               [">{#p/papyrus}{#e/papyrus/10}OOH, WE COULD TOTALLY MAKE HOMEMADE PUNCH WITH THOSE!"],
               [">{#p/sans}{#e/sans/2}just don't make a mess like last time."]
            ]
         },
         spaghetti: {
            text: [
               ">{#p/human}* (The noodles seem familiar to one of the Lost Souls...)",
               ">{#p/basic}* Suddenly, the memories are flooding back!"
            ],
            talk: [
               [">{#p/papyrus}{#e/papyrus/10}YOU SAVED MY COOKING JUST FOR THIS!?"],
               [">{#p/sans}{#e/sans/2}now that's just classy."]
            ]
         },
         corndog: {
            text: [
               ">{#p/human}* (The aura seems familiar to one of the Lost Souls...)",
               ">{#p/basic}* Suddenly, the memories are flooding back!"
            ],
            talk: [
               [">{#p/papyrus}{#e/papyrus/16}EVEN NOW, I FAIL TO FIND THE HUMOR IN THIS."],
               [">{#p/sans}{#e/sans/2}corn diggity doggers."]
            ]
         },
         corngoat: {
            text: [
               ">{#p/human}* (The aura seems familiar to one of the Lost Souls...)",
               ">{#p/basic}* Suddenly, the memories are flooding back!"
            ],
            talk: [
               [">{#p/papyrus}{#e/papyrus/16}WHAT??\nA CORN GOAT?"],
               [">{#p/sans}{#e/sans/0}you've {@fill=#f00}goat{@fill=#000} to be kidding me."]
            ]
         },
         quiche: {
            text: [
               ">{#p/human}* (The pastry seems familiar to the Lost Souls...)",
               ">{#p/basic}* Suddenly, the memories are flooding back!"
            ],
            talk: [
               [">{#p/papyrus}{#e/papyrus/22}A PIECE OF \"CHEESE\" CAKE!?"],
               [">{#p/sans}{#e/sans/2}it's a riddle worthy of its cheese."]
            ]
         },
         fryz: {
            text: [
               ">{#p/human}* (The drink seems familiar to the Lost Souls...)",
               ">{#p/basic}* Suddenly, the memories are flooding back!"
            ],
            talk: [
               [">{#p/papyrus}{#e/papyrus/27}IT'S HOTTER THAN THE WALL OF FIRE!!"],
               [">{#p/sans}{#e/sans/2}you're on fire now, buddo."]
            ]
         },
         burgerz: {
            text: [
               ">{#p/human}* (The food seems familiar to the Lost Souls...)",
               ">{#p/basic}* Suddenly, the memories are flooding back!"
            ],
            talk: [
               [">{#p/papyrus}{#e/papyrus/21}ARE YOU SURE THAT'S HEALTHY?"],
               [">{#p/sans}{#e/sans/0}one down, two to go."]
            ]
         },
         burgerz_use1: {
            text: [
               ">{#p/human}* (The food seems familiar to the Lost Souls...)",
               ">{#p/basic}* Suddenly, the memories are flooding back!"
            ],
            talk: [
               [">{#p/papyrus}{#e/papyrus/24}I WORRY FOR YOUR WELL- BEING..."],
               [">{#p/sans}{#e/sans/2}use your last one wisely now."]
            ]
         },
         burgerz_use2: {
            text: [
               ">{#p/human}* (The food seems familiar to the Lost Souls...)",
               ">{#p/basic}* Suddenly, the memories are flooding back!"
            ],
            talk: [
               [">{#p/papyrus}{#e/papyrus/18}WOW, YOU ACTUALLY ATE ALL OF THEM."],
               [">{#p/sans}{#e/sans/3}if only they could last forever."]
            ]
         }
      },
      standard: [
         [">{#p/papyrus}{#e/papyrus/10}NO! WAIT! I COULD NEVER CAPTURE YOU!"],
         [">{#p/sans}{#e/sans/3}we're all rootin' for ya, bud."]
      ]
   },
   b_opponent_lostsoul_c: {
      status1: () =>
         SAVE.data.b.oops ? [">{#p/story}* The Lost Souls appeared."] : [">{#p/basic}* Mom... Dad..."],
      status2: () =>
         SAVE.data.b.oops
            ? [">{#p/story}* The Lost Souls stand there."]
            : [">{#p/basic}* Well, they used to be my parents, so maybe I can do something simple here."],
      act: {
         flirt: (s: boolean) =>
            s
               ? [">{#p/human}* (You flirt with the Lost Soul.)", ">{#p/basic}* Suddenly...!"]
               : [">{#p/human}* (You flirt with the Lost Soul.)\n* (Nothing happens.)"],
         call: (s: boolean) => [
            ">{#p/human}* (You call the Lost Soul on the phone.)",
            3 <= SAVE.data.n.cell_insult
               ? ">{#p/human}* (She seems annoyed, yet nostalgic at the same time...)"
               : ">{#p/human}* (She seems delighted, and nostalgic at the same time...)",
            ...(s ? [">{#p/basic}* Suddenly, the memories are flooding back!"] : [])
         ],
         home: (s: boolean) => [
            ">{#p/human}* (You ask the Lost Soul to take you home.)",
            3 <= SAVE.data.n.cell_insult
               ? ">{#p/human}* (She doesn't think she should, but wants to try anyway...)"
               : ">{#p/human}* (She doesn't think she can, but wants to try anyway...)",
            ...(s ? [">{#p/basic}* Suddenly, the memories are flooding back!"] : [])
         ],
         hug: (s: boolean) => [
            ">{#p/human}* (You give the Lost Soul a big hug.)",
            ">{#p/human}* (He tries to ignore it, but the feeling of warmth is so soothing...)",
            ...(s ? [">{#p/basic}* Suddenly, the memories are flooding back!"] : [])
         ],
         agreement: (s: boolean) => [
            ">{#p/human}* (You ask the Lost Soul about the agreement.)",
            ">{#p/human}* (He thinks of dismissing it, but is tempted to elaborate...)",
            ...(s ? [">{#p/basic}* Suddenly, the memories are flooding back!"] : [])
         ]
      },
      assist: {
         text: [">{#p/basic}* Mom... Dad...\n* Don't you recognize me?"],
         talk: [[">{#p/toriel}{#e/toriel/9}Of course."], [">{#p/asgore}{#e/asgore/8}$(name)...?"]]
      },
      fight: [
         [
            [">{#p/toriel}{#e/toriel/9}I... I suppose I deserved that."],
            [">{#p/asgore}{#e/asgore/1}Well.\nThis is awkward."]
         ],
         [[">{#p/toriel}{#e/toriel/17}You will be fine, Asgore."], [">{#p/asgore}{#e/asgore/8}C-child!?"]]
      ],
      flirt: [
         [
            [">{#p/toriel}{#e/toriel/1}Child, please... not right now..."],
            [">{#p/asgore}{#e/asgore/6}It is fortunate we are no longer together."]
         ],
         []
      ],
      idle: [
         pager.create(
            1,
            () =>
               1 <= SAVE.flag.n.genocide_twinkly
                  ? [">{#p/toriel}To strike me down at my weakest moment..."]
                  : [">{#p/toriel}This is for your own good."],
            () =>
               1 <= SAVE.flag.n.genocide_twinkly
                  ? [">{#p/toriel}To think I was protecting you from them..."]
                  : [">{#p/toriel}No one will ever leave again."],
            () =>
               1 <= SAVE.flag.n.genocide_twinkly
                  ? [">{#p/toriel}I was a fool for trusting you..."]
                  : [">{#p/toriel}..."]
         ),
         pager.create(
            1,
            () =>
               7 <= SAVE.flag.n.genocide_milestone
                  ? [">{#p/asgore}Reasoning with you is a total waste of time."]
                  : [">{#p/asgore}War with humanity is inevitable."],
            () =>
               7 <= SAVE.flag.n.genocide_milestone
                  ? [">{#p/asgore}Don't you have anything better to do?"]
                  : [">{#p/asgore}How could I ever forget that?"],
            () => (7 <= SAVE.flag.n.genocide_milestone ? [">{#p/asgore}Really now..."] : [">{#p/asgore}..."])
         )
      ],
      item: {
         pie: {
            text: [
               ">{#p/human}* (The aroma seems familiar to the Lost Souls...)",
               ">{#p/basic}* Suddenly, the memories are flooding back!"
            ],
            talk: [
               [">{#p/toriel}{#e/toriel/0}Of course!\nThe butter- scotch cinnamon pie!"],
               [">{#p/asgore}{#e/asgore/7}It has been so long..."]
            ]
         },
         pie2: {
            text: [
               ">{#p/human}* (The aroma seems familiar to the Lost Souls...)",
               ">{#p/basic}* Suddenly, the memories are flooding back!"
            ],
            talk: [
               [">{#p/toriel}{#e/toriel/0}Of course!\nThe snail pie!"],
               [">{#p/asgore}{#e/asgore/7}It has been so long..."]
            ]
         },
         pie3: {
            text: [
               ">{#p/human}* (The aroma seems familiar to the Lost Souls...)",
               ">{#p/basic}* Suddenly, the memories are flooding back!"
            ],
            talk: [
               [">{#p/toriel}{#e/toriel/1}To think that was the best I could manage..."],
               [">{#p/asgore}{#e/asgore/6}How odd.\nIt smells alright, though!"]
            ]
         },
         starling_tea: {
            text: [
               ">{#p/human}* (The tea seems familiar to the Lost Souls...)",
               ">{#p/basic}* Suddenly, the memories are flooding back!"
            ],
            talk: [
               [">{#p/toriel}{#e/toriel/13}What an antique scent..."],
               [">{#p/asgore}{#e/asgore/21}Nothing like a good cup of tea."]
            ]
         },
         snails: {
            text: [
               ">{#p/human}* (The dish seems familiar to the Lost Souls...)",
               ">{#p/basic}* Suddenly, the memories are flooding back!"
            ],
            talk: [
               [">{#p/toriel}{#e/toriel/1}You kept them all this time?"],
               [">{#p/asgore}{#e/asgore/5}I never thought I would see THOSE again."]
            ]
         },
         chocolate: {
            text: [
               ">{#p/human}* (The cocoa seems familiar to the Lost Souls...)",
               ">{#p/basic}* Suddenly, the memories are flooding back!"
            ],
            talk: [
               [">{#p/toriel}{#e/toriel/1}One-hundred percent cocoa..."],
               [">{#p/asgore}{#e/asgore/21}It is better when it is bitter."]
            ]
         }
      },
      standard: [
         [">{#p/toriel}{#e/toriel/1}Go forth, my child..."],
         [">{#p/asgore}{#e/asgore/6}Our future is in your hands!"]
      ]
   },
   b_opponent_final: {
      name: "* Force Field",
      status0: [">{#p/story}* The force field now stands before you."],
      act_check: [
         ">{#p/story}* FORCE FIELD - ATK 0 DEF{^2}\u221e{^1}\n* Immovable meets unstoppable.\n* The end of the line."
      ],
      status1: () =>
         SAVE.data.n.bully > 9
            ? [">{#p/story}* It's time to put your fighting spirit to good use."]
            : [">{#p/story}* It's time to bring this story to an end."],
      status1x: [">{#p/story}* All you can do is fight."],
      status2: [">{#p/story}* The force field is dropping."],
      status3: [">{#p/story}* The force field is near its breaking point."],
      status4: [">{#p/story}* The force field is holding on longer than expected."],
      status5: [">{#p/story}* Something is wrong."],
      friend1: [">{#p/asgore}{#e/asgore/5}What's the problem?"],
      friend2: [">{#p/alphys}{#e/alphys/15}The force field... it's not going down!"],
      friend3: [">{#p/asgore}{#e/asgore/12}{#e/alphys/4}...\nDo you know why this is happening?"],
      friend4a: [">{#p/alphys}{#e/alphys/6}Maybe... they're not hitting it hard enough?", "{*}{#e/alphys/1}{%}"],
      friend4b: [
         ">{#p/alphys}No, that's not it...",
         ">{#p/alphys}{#e/asgore/1}...",
         ">{#p/alphys}{#e/alphys/2}Unless..."
      ],
      friend5: [">{#p/asgore}... what is it?"],
      friend6: [
         ">{#p/alphys}{#e/alphys/1}W-when I was checking the archive logs, I noticed something weird...",
         ">{#p/alphys}{#e/alphys/4}There was... a small d-deviation in the exotic matter matrix."
      ],
      friend7: [">{#p/asgore}{#e/asgore/12}In other words...?"],
      friend8: [
         ">{#p/alphys}In other words, s-someone could have accessed the system.",
         ">{#p/alphys}{#e/asgore/1}They could have taken some of the humans' SOUL power.",
         ">{#p/alphys}{#e/alphys/6}I-I mean, it could just be a sensor glitch...",
         ">{#p/alphys}{#e/alphys/1}But...\nJudging by what we're seeing..."
      ],
      friend9a: [">{#p/asgore}{#e/asgore/1}I see.", ">{#p/asgore}{#e/asgore/2}I see."],
      friend9b: [
         ">{#p/asgore}{#e/asgore/5}I always considered the possibility that the archive could be tampered with...",
         ">{#p/asgore}{#e/asgore/5}But even I did not think it would actually happen."
      ],
      friend9c: [">{#p/asgore}{#e/asgore/1}What do we do?"],
      friend10: [
         ">{#p/alphys}I guess... wait for another human?",
         ">{#p/alphys}{#e/alphys/4}I-I'm sorry...\nI don't know what else to say...",
         "{*}{#e/asgore/8}{#e/alphys/9}{%}"
      ],
      friend11: [">{#p/undyne}{#e/undyne/13}But I do!"],
      friend12: [">{#p/alphys}{#e/alphys/10}Undyne, w-w-what are you doing here!?", "{*}{#e/undyne/0}{%}"],
      friend13: [
         ">{#p/undyne}{#e/undyne/1}{#e/alphys/8}{#e/asgore/1}Don't tell me.\nForce field's giving you a rough time?"
      ],
      friend14: [">{|}{#p/alphys}{#e/alphys/6}Undyne, how did you- {%}"],
      friend15: [">{#p/undyne}{#e/undyne/5}Guess I'll have to smash it myself!"],
      friend16a: [">{#p/alphys}{#e/alphys/3}{#e/asgore/6}Undyne!?!?"],
      friend16b: [
         ">{#p/undyne}{#e/undyne/4}I know, I know.\nI was just trying to make you feel better.",
         "{*}{#e/alphys/1}{%}"
      ],
      friend17: () => [
         ">{#p/undyne}{#e/undyne/3}Look... Sans found out about the human stuff and told me to come here.",
         ">{#p/undyne}{#e/undyne/11}{#e/asgore/5}I'll admit, I was surprised at first... but I think I get it now.",
         ">{#p/undyne}{#e/undyne/13}Heck, I'm GLAD your plan worked out!",
         ...(SAVE.data.b.undyne_respecc
            ? [">{#p/undyne}{#e/undyne/0}I'm not gonna pretend I LIKE humanity, but today's been a good showing."]
            : [
               ">{#p/undyne}{#e/undyne/0}I'm not gonna pretend I LIKE humanity, but I'm not against a happy ending, either."
            ]),
         ">{#p/undyne}{#e/undyne/15}{#e/asgore/6}I guess, as the captain of the guard, I just..."
      ],
      friend18: [
         ">{#p/alphys}{#e/alphys/32}Hey... it's okay.",
         ">{#e/alphys/31}You're here now, and that's what matters, right?"
      ],
      friend19: [">{#p/undyne}{#e/undyne/14}Pfft, it's the least I can do after that movie you promised!"],
      friend20: [">{#p/alphys}{#e/alphys/33}... wanna kiss?", "{*}{#e/asgore/5}{#e/undyne/19}{%}"],
      friend21: [">{#p/asgore}{#e/asgore/5}Um."],
      friend22: [">{#p/undyne}{#e/undyne/6}Right now???"],
      friend23: [">{#p/alphys}{#e/alphys/34}Why not?"],
      friend24: [">{#p/asgore}{#e/asgore/20}Alphys.\nThere is a child with us."],
      friend25: [">{#p/undyne}{#e/undyne/7}We wouldn't do it in front of them, right?"],
      friend26: [">{#p/alphys}{#e/alphys/32}..."],
      friend27: [">{#p/undyne}{#e/undyne/10}..."],
      friend28: [">{*}{#p/alphys}{#e/alphys/35}{#e/undyne/37}{#e/asgore/8}No hesitation.{^10}{%}"],
      friend29: [">{*}{#p/papyrus}{#e/papyrus/22}WAIT!!!{^10}{%}", "{*}{#e/papyrus/20}{%}"],
      friend30: () => [
         ">{#p/mettaton}SORRY, LADIES.\nTHE BOYS' CLUB HAS ARRIVED.",
         ...(SAVE.data.n.state_aerialis_basebully > 9
            ? [
               ">{#p/mettaton}{#e/mettaton/1}... OH, HELLO THERE $(moniker2u)!\nIF YOU LIKE, YOU CAN BE AN \"HONORARY\" MEMBER..."
            ]
            : [])
      ],
      friend31: [">{#p/napstablook}{#e/mettaton/2}{#e/alphys/15}{#e/asgore/1}{~}hey, um... i'm not really a boy..."],
      friend32a: [
         ">{#p/mettaton}{#e/mettaton/1}I NEVER SAID -YOU- WERE IN THE BOYS' CLUB, BLOOKY...",
         ">{#p/mettaton}{#e/undyne/38}{#e/papyrus/21}IT'S PRETTY MUCH JUST BETWEEN ME AND PAPYRUS."
      ],
      friend32b: [">{#p/napstablook}{~}oh......", ">{#p/napstablook}{~}i guess i'll come back later"],
      friend33: [
         ">{#p/undyne}{#e/undyne/19}{#e/mettaton/4}Wait.",
         ">{#p/undyne}{#e/undyne/10}YOU TWO ARE A THING???"
      ],
      friend34: [
         ">{#p/papyrus}{#e/papyrus/15}CORRECTAMUNDO!",
         ">{#p/papyrus}{#e/papyrus/24}... A WORD I HAVE NEVER USED BEFORE, AND HOPEFULLY NEVER WILL AGAIN."
      ],
      friend35: () =>
         SAVE.data.b.a_state_hapstablook
            ? [">{#p/undyne}{#e/undyne/17}So THAT's what you've been up to all this time..."]
            : [">{#p/undyne}{#e/undyne/17}So THAT's what your \"business\" was about..."],
      friend36: [
         ">{#p/mettaton}{#e/mettaton/1}{#e/asgore/6}{#e/papyrus/20}OHHHH YES!\nIN FACT, WE WERE JUST DISCUSSING HOW WE'D SPEND OUR FIRST DAY OUT."
      ],
      friend37: [">{#p/alphys}{#e/alphys/34}{#e/undyne/1}{#e/mettaton/4}Ehehe.\nI might have some ideas for you."],
      friend38: [
         ">{#p/undyne}{#e/undyne/19}{#e/asgore/1}Uh, I don't think they'd be into that kinda stuff, Alphys."
      ],
      friend39: [">{#p/alphys}{#e/alphys/8}Oh. Right."],
      friend40: [
         ">{#p/papyrus}{#e/papyrus/10}{#e/undyne/0}WHY DON'T WE HANG OUT HERE! AT THE FORCE FIELD!",
         ">{#e/mettaton/2}{#e/papyrus/28}I KNOW YOU LOVE YOUR \"EXOTIC\" DESTINATIONS...",
         "{*}{#e/alphys/7}{#e/asgore/5}{%}"
      ],
      friend41: [
         ">{#p/mettaton}{#e/mettaton/2}OH, YOU REALLY -DO- KNOW ME, PAPYRUS.",
         ">{#p/mettaton}{#e/mettaton/1}{#e/papyrus/13}THERE'S NOTHING I LOVE MORE THAN STARING INTO THE DEEP ABYSS OF NOTHINGNESS...",
         ">{|}{#p/mettaton}{#e/mettaton/3}{#e/papyrus/21}ALL WHILE CONTEMPLATING THE MEANING OF LIFE, THE UNIVERSE, AND- {%}"
      ],
      friend42: [">{#p/sans}{#e/sans/2}{#e/undyne/21}{#e/alphys/8}hey guys."],
      friend43: [">{#p/papyrus}{#e/papyrus/10}{#e/mettaton/3}LONG TIME NO SEE, BROTHER!"],
      friend44: [
         ">{#p/papyrus}{#e/sans/0}{#e/papyrus/26}IT WOULD APPEAR MY PARTNER IS... STILL NEW TO\nTHE WHOLE \"IN- LAWS\" THING."
      ],
      friend45: [">{#p/sans}{#e/alphys/7}heh.\nheya, asgore."],
      friend46: [">{#p/asgore}{#e/asgore/6}{#e/papyrus/20}Howdy, Sans.\nIt is good to see you here as well."],
      friend47: [
         ">{#p/sans}{#e/sans/3}oh, y'know...\ni figured i'd swing by to see what all the fuss was about.",
         ">{#p/sans}{#e/sans/0}but never mind me.",
         ">{#p/sans}{#e/sans/2}there's someone else you might like to see."
      ],
      friend48: [
         ">{#p/asgore}{#e/sans/0}{#e/undyne/3}{#e/asgore/8}{#e/papyrus/26}Tori...!",
         ">{#p/asgore}{#e/asgore/6}You came back.",
         ">{#p/asgore}{#e/asgore/1}..."
      ],
      friend49a: [
         ">{#p/toriel}{#e/asgore/5}{#e/toriel/9}...",
         ">{#p/toriel}{#e/toriel/13}Sans has... told me everything."
      ],
      friend50a: [">{#p/alphys}{#e/undyne/4}{#e/alphys/8}Don't look at me, I didn't tell him."],
      friend51a: [
         ">{#p/sans}{#e/sans/0}nah, you're right.",
         ">{#p/sans}{#e/sans/2}{#e/alphys/10}{#e/asgore/6}{#e/toriel/9}you're just a terrible liar."
      ],
      friend52a1: [
         ">{#p/asgore}{#e/undyne/0}{#e/sans/0}{#e/alphys/36}{#e/papyrus/20}I must say, I definitely expected more backlash for my keeping of secrets."
      ],
      friend52a2: [
         ">{#p/toriel}{#e/toriel/13}{#e/asgore/1}I will admit, I was upset at first, but...",
         ">{#p/toriel}{#e/toriel/13}{#e/papyrus/21}{#e/alphys/7}Lately, I have been thinking more and more about my own mistakes.",
         ">{#p/toriel}{#e/toriel/9}... you are not the only one with things to answer for, Asgore."
      ],
      friend52a3: [">{#p/asgore}{#e/asgore/2}I see."],
      friend53a: [
         ">{#p/undyne}{#e/undyne/1}{#e/papyrus/20}I mean, come on, did you really think we wanted all humans to die?"
      ],
      friend49b: [
         ">{#p/toriel}{#e/toriel/12}...",
         ">{#p/toriel}{#e/sans/3}{#e/asgore/2}{#e/undyne/4}{#e/toriel/11}{#e/papyrus/21}{#e/alphys/15}You could have told me you were protecting them."
      ],
      friend50b: [">{#p/alphys}{#e/alphys/7}... it's not THAT bad, is it?"],
      friend51b: [
         ">{#p/sans}{#e/sans/0}{#e/undyne/3}yeah, come on, tori.\nlighten up.",
         ">{#p/sans}{#e/sans/2}{#e/alphys/8}{#e/asgore/5}{#e/toriel/13}he did a good thing, didn't he?"
      ],
      friend52b1: [
         ">{#p/asgore}{#e/undyne/0}{#e/sans/0}{#e/asgore/2}{#e/alphys/36}No, no, she is right in being angry.",
         ">{#e/sans/3}{#e/asgore/3}I have kept this from her... from everyone... for much too long."
      ],
      friend52b2: [">{#p/undyne}{#e/undyne/1}{#e/asgore/1}But you had a good reason, didn't you?"],
      friend52b3: [
         ">{#p/asgore}{#e/undyne/17}{#e/alphys/8}{#e/toriel/9}{#e/asgore/2}{#e/papyrus/27}Perhaps.\nIt is hard to tell."
      ],
      friend53b: [">{#p/undyne}{#e/undyne/1}Still, did you really think we wanted all humans to die?"],
      friend54: [
         ">{#p/alphys}{#e/asgore/5}{#e/undyne/17}{#e/alphys/8}{#e/toriel/13}You literally tried to kill them, Undyne."
      ],
      friend55: [">{#p/toriel}{#e/undyne/18}{#e/toriel/3}{#e/asgore/5}She... what?"],
      friend56: () =>
         SAVE.data.b.undyne_respecc
            ? [">{#p/undyne}{#e/undyne/9}{#e/toriel/4}I did no such thing!!!"]
            : [">{#p/undyne}{#e/undyne/13}{#e/toriel/4}Don't worry about it, I changed my mind."],
      friend57: () =>
         SAVE.data.b.undyne_respecc
            ? [">{#p/toriel}{#e/toriel/15}{#e/asgore/6}... are you sure about that, miss?"]
            : [">{#p/toriel}{#e/toriel/15}{#e/asgore/6}... we are going to have a talk about this later, miss."],
      friend58: [">{#p/alphys}{#e/alphys/33}Ahem, that's \"misses\" to you."],
      friend59: [
         ">{#p/undyne}{#e/undyne/10}{#e/sans/4}{#e/toriel/12}Alphys!!\nWe haven't even had dinner together!"
      ],
      friend60: [">{#p/alphys}{#e/alphys/34}Dinner?\nI was just gonna skip to dessert."],
      friend61: [">{#p/papyrus}{#e/undyne/19}{#e/papyrus/19}{#e/asgore/4}{#e/sans/5}{#e/alphys/40}OH MY GOD!!!"],
      friend62: [
         ">{#p/undyne}{#e/undyne/38}{#e/sans/0}{#e/asgore/1}{#e/toriel/13}{#e/papyrus/20}... hold on.",
         ">{#p/undyne}{#e/undyne/18}{#e/papyrus/21}How did YOU know to be here, Papyrus?"
      ],
      friend63: [
         ">{#p/papyrus}{#e/papyrus/10}OH, RIGHT!\nAFTER METTATON AND I WERE DONE TALKING...",
         ">{#p/papyrus}{#e/papyrus/20}A LITTLE YELLOW STAR APPEARED AND TOLD US WE SHOULD COME.",
         ">{#p/papyrus}{#e/papyrus/21}{#e/alphys/9}{#e/sans/1}IT SEEMED... URGENT."
      ],
      friend64: [">{#p/toriel}{#e/toriel/9}{#e/asgore/12}Twinkly."],
      friend65: [
         ">{#p/undyne}{#e/alphys/15}Twinkly?",
         ">{#p/undyne}{#e/alphys/28}{#e/undyne/37}{#e/toriel/3}Who's Twinkly?"
      ],
      friend66: () =>
         SAVE.flag.n.genocide_milestone < 7
            ? [
               [">{#p/twinkly}{#e/twinkly/5}{#v/0}Howdy, everyone.", ">{#e/twinkly/7}{#v/0}Did you miss me?"],
               [
                  ">{#p/twinkly}{#e/twinkly/11}{#v/0}Oh, I'm sorry...\nDid something happen to your SAVE file?",
                  ">{#p/twinkly}{#e/twinkly/11}{#v/0}Hee hee hee...",
                  ">{#p/twinkly}{#e/twinkly/2}{#v/1}That's what you get."
               ],
               [">{#p/twinkly}{#e/twinkly/7}{#v/0}Sorry, but this world belongs to ME now."]
            ][Math.min(SAVE.flag.n.pa_twinkly1++, 2)]
            : [
               [
                  ">{#p/twinkly}{#e/twinkly/5}{#v/0}Long time no see, $(name).",
                  ">{#e/twinkly/7}{#v/0}It's been a while, hasn't it?",
                  ">{#e/twinkly/11}{#v/0}I hope I'm not getting in the way of your fun...",
                  ">{#e/twinkly/2}{#v/1}Considering you ROBBED me of mine."
               ],
               [
                  ">{#p/twinkly}{#e/twinkly/11}{#v/0}What's that?\nYou want your SAVE file back?",
                  ">{#p/twinkly}{#e/twinkly/11}{#v/0}Oh, $(name)...",
                  ">{#p/twinkly}{#e/twinkly/2}{#v/1}You're even dumber than I thought!"
               ],
               [">{#p/twinkly}{#e/twinkly/7}{#v/0}Sorry, $(name).\nThis world belongs to ME now."]
            ][Math.min(SAVE.flag.n.pa_twinkly1++, 2)],
      friend67: (unique: string[]) => [
         ">{#e/twinkly/11}{#v/0}Hee hee hee...",
         ">{#e/twinkly/11}{#v/0}While you were having your little pow-wow...",
         ">{#e/twinkly/5}{#v/0}I took control of the archive!",
         ">{#e/twinkly/10}{#v/0}Now, all the SOUL power you had access to belongs to me.",
         ">{#e/twinkly/9}{#v/0}THAT's why you couldn't finish off the force field.",
         ">{#e/twinkly/11}{#v/0}Poetic, isn't it?",
         ">{#e/twinkly/7}{#v/0}But that's not even the best part.",
         ">{#e/twinkly/6}{#v/0}...",
         ">{#e/twinkly/5}{#v/0}It's all your fault.",
         ...(30 <= SAVE.data.n.bully
            ? [
               ">{#e/twinkly/5}{#v/0}It's all because you LET them love you.",
               ">{#e/twinkly/8}{#v/0}You came SO close to killing them, SO many times...",
               ">{#e/twinkly/8}{#v/0}But no matter what, you chose to spare them..."
            ]
            : [
               ">{#e/twinkly/5}{#v/0}It's all because you MADE them love you.",
               ">{#e/twinkly/8}{#v/0}All the time you spent listening to them...",
               ">{#e/twinkly/8}{#v/0}Encouraging them... caring about them..."
            ]),
         ...(1 <= SAVE.flag.n.killed_sans
            ? [
               ">{#e/twinkly/8}{#v/0}...",
               ">You know, $(name)...",
               ">{#e/twinkly/5}I remember a timeline where WE were going to kill everyone.",
               ...(SAVE.flag.b.confront_twinkly
                  ? [
                     ">{#e/twinkly/6}{#v/0}But then... you decided to abandon me.",
                     ">{#e/twinkly/8}{#v/0}All so you could play the hero to THESE losers.",
                     ">{#e/twinkly/7}{#v/0}Some \"best friend\" you are, huh?"
                  ]
                  : [
                     [
                        ">{#e/twinkly/8}We only just started, but with the way we were going?",
                        ">{#e/twinkly/8}We didn't get very far, but with the way we were going?",
                        ">{#e/twinkly/8}We didn't quite make it to the end, but with the way we were going?",
                        ">{#e/twinkly/8}To think we were actually getting somewhere...",
                        ">{#e/twinkly/8}To think we were THIS close..."
                     ][Math.min(SAVE.flag.n.genocide_milestone, 4)],
                     ">{#e/twinkly/5}{#v/0}Oooh, we would have been INSEPARABLE.",
                     ">{#e/twinkly/6}{#v/0}But it seems the game has changed.",
                     ">{#e/twinkly/11}{#v/0}You went soft!",
                     ">{#e/twinkly/7}{#v/0}You gave up."
                  ]),
               ">{#e/twinkly/9}{#v/0}Golly, aren't you full of yourself.",
               ">{#e/twinkly/5}Thinking you're so high and mighty for being the \"good guy\" here...",
               ">{#e/twinkly/6}{#v/0}When all you did was prove how ROTTEN you really are.",
               ">{#e/twinkly/7}{#v/0}You should have known better, $(name).",
               ">{#e/twinkly/2}{#v/1}There was NOTHING\nyou could have done to save your friends."
            ]
            : 30 <= SAVE.data.n.bully
               ? [">{#e/twinkly/5}{#v/0}If only you knew how pointless it'd be."]
               : [">{#e/twinkly/5}{#v/0}Without that, they wouldn't have come here."]),
         ">{#e/twinkly/11}{#v/0}Hee hee hee...",
         ">{#e/twinkly/6}{#v/0}Huh?",
         ">WHY am I still doing this?",
         ...(unique.length > 2
            ? [
               ">{#e/twinkly/5}{#v/0}... oh, come on.",
               ">{#e/twinkly/5}{#v/0}You know the answer as well as I do.",
               ">{#e/twinkly/11}{#v/0}After all, you're the one who went from ending to ending...",
               ">{#e/twinkly/7}{#v/0}Playing with their lives just to see what would happen.",
               ">{#e/twinkly/8}{#v/0}Hm...?\nDon't you remember?",
               {
                  dark_death: ">{#e/twinkly/5}{#v/0}From the one where Undyne and Alphys hunted you down...",
                  dark_undyne: ">{#e/twinkly/5}{#v/0}From the one where Alphys returned to Bratty and Catty...",
                  dark_alphys: ">{#e/twinkly/5}{#v/0}From the one where almost everyone important had died...",
                  dark_alphys_therapy:
                     ">{#e/twinkly/5}{#v/0}From the one where Sans and Papyrus had a therapy company...",
                  dark_alphys_virtual:
                     ">{#e/twinkly/5}{#v/0}From the one where Papyrus and Alphys escaped into a virtual world...",
                  dark_mew:
                     ">{#e/twinkly/5}{#v/0}From the one where Mad Mew Mew made everyone go along with her nonsense...",
                  dark_charles:
                     ">{#e/twinkly/5}{#v/0}From the one where Charles brought everyone's fantasies to life...",
                  dark_blooky:
                     ">{#e/twinkly/5}{#v/0}From the one where Mettaton's fans formed an anti-human collective...",
                  dark_generic: ">{#e/twinkly/5}{#v/0}From the one where the \"Royal Defense Agency\" was formed...",
                  dark_aborted:
                     ">{#e/twinkly/5}{#v/0}From the one where Napstablook told you to die a \"painful death...\"",
                  light_ultra:
                     ">{#e/twinkly/5}{#v/0}From the one where Papyrus captured you and got into the guard...",
                  light_undyne: ">{#e/twinkly/5}{#v/0}From the one where Alphys had to hide the humans away...",
                  light_runaway: ">{#e/twinkly/5}{#v/0}From the one where the humans were accidentally exposed...",
                  light_toriel: ">{#e/twinkly/5}{#v/0}From the one where Toriel shut herself off from everyone...",
                  light_dog: ">{#e/twinkly/5}{#v/0}From the one where dogs took over the outpost...",
                  light_muffet: ">{#e/twinkly/5}{#v/0}From the one where Muffet became a ruthless dictator...",
                  light_papyrus:
                     ">{#e/twinkly/5}{#v/0}From the one where the power of friendship reigned supreme...",
                  light_sans: ">{#e/twinkly/5}{#v/0}From the one where Sans ended up as the king...",
                  light_generic: ">{#e/twinkly/5}{#v/0}From the one where Terrestria was appointed as queen..."
               }[unique[0]]!,
               {
                  dark_death: ">{#e/twinkly/5}{#v/0}... to the one where Undyne and Alphys hunted you down.",
                  dark_undyne: ">{#e/twinkly/5}{#v/0}... to the one where Alphys returned to Bratty and Catty.",
                  dark_alphys: ">{#e/twinkly/5}{#v/0}... to the one where almost everyone important had died.",
                  dark_alphys_therapy:
                     ">{#e/twinkly/5}{#v/0}... to the one where Sans and Papyrus had a therapy company.",
                  dark_alphys_virtual:
                     ">{#e/twinkly/5}{#v/0}... to the one where Papyrus and Alphys escaped into a virtual world.",
                  dark_mew:
                     ">{#e/twinkly/5}{#v/0}... to the one where Mad Mew Mew made everyone go along with her nonsense.",
                  dark_charles:
                     ">{#e/twinkly/5}{#v/0}... to the one where Charles brought everyone's fantasies to life.",
                  dark_generic: ">{#e/twinkly/5}{#v/0}... to the one where the \"Royal Defense Agency\" was formed.",
                  dark_blooky:
                     ">{#e/twinkly/5}{#v/0}... to the one where Mettaton's fans formed an anti-human collective.",
                  dark_aborted:
                     ">{#e/twinkly/5}{#v/0}... to the one where Napstablook told you to die a \"painful death.\"",
                  light_ultra:
                     ">{#e/twinkly/5}{#v/0}... to the one where Papyrus captured you and got into the guard.",
                  light_undyne: ">{#e/twinkly/5}{#v/0}... to the one where Alphys had to hide the humans away.",
                  light_runaway: ">{#e/twinkly/5}{#v/0}... to the one where the humans were accidentally exposed.",
                  light_toriel: ">{#e/twinkly/5}{#v/0}... to the one where Toriel shut herself off from everyone.",
                  light_dog: ">{#e/twinkly/5}{#v/0}... to the one where dogs took over the outpost.",
                  light_muffet: ">{#e/twinkly/5}{#v/0}... to the one where Muffet became a ruthless dictator.",
                  light_papyrus:
                     ">{#e/twinkly/5}{#v/0}... to the one where the power of friendship reigned supreme.",
                  light_sans: ">{#e/twinkly/5}{#v/0}... to the one where Sans ended up as the king.",
                  light_generic: ">{#e/twinkly/5}{#v/0}... to the one where Terrestria was appointed as queen."
               }[unique[unique.length - 1]]!,
               ">{#e/twinkly/7}{#v/0}You ENJOYED treating it all like it's just a game.",
               ">{#e/twinkly/5}{#v/0}But now it's my turn to play."
            ]
            : [
               ">{#e/twinkly/8}{#v/0}... you just don't get it, do you?",
               ">{#e/twinkly/6}{#v/0}You, I, and everyone and everything around us...",
               ">{#e/twinkly/5}{#v/0}It's all just a GAME.",
               ">{#e/twinkly/11}{#v/0}If you leave the outpost satisfied, you'll \"win\" the game.",
               ">{#e/twinkly/11}If you \"win,\" you won't want to \"play\" with me anymore.",
               ">{#e/twinkly/7}{#v/0}And what would I do then?",
               ">{#e/twinkly/5}{#v/0}But this game between us will NEVER end."
            ]),
         ">{#e/twinkly/8}{#v/0}I'll hold victory in front of you, just within your reach...",
         ">{#e/twinkly/2}{#v/1}{@random=1.1/1.1}And then tear it away just before you grasp it.",
         ">{#e/twinkly/14}{#v/1}{@random=1.1/1.1}Over, and over, and over...",
         ">{#e/twinkly/5}{#v/0}Hee hee hee.",
         ">{#e/twinkly/5}{#v/0}{#v/0}Listen.",
         ...(30 <= SAVE.data.n.bully
            ? [
               ">{#e/twinkly/5}{#v/0}If you DO defeat me, I'll give you your \"ideal ending.\"",
               ">{#e/twinkly/5}{#v/0}I'll let your friends live."
            ]
            : [
               ">{#e/twinkly/5}{#v/0}If you DO defeat me, I'll give you your \"happy ending.\"",
               ">{#e/twinkly/5}{#v/0}I'll bring your friends back."
            ]),
         ">{#e/twinkly/5}{#v/0}I'll destroy the force field.",
         ">{#e/twinkly/5}{#v/0}Everyone will finally be satisfied.",
         ">{#e/twinkly/9}{#v/0}But that won't happen.",
         ">{#e/twinkly/11}{#v/0}You...!",
         ">{#e/twinkly/5}{#v/0}I'll keep you here no matter what!"
      ],
      friend68: [">{#e/twinkly/0}{#v/1}{@random=1.1/1.1}Even if it means killing you until the END OF TIME!{%20}"],
      friend69: [">{#e/twinkly/8}{#v/0}What?"],
      friend70: [
         ">{#p/asgore}{#e/asgore/1}Fear not, young one...",
         ">{#e/asgore/2}We are here to protect you...!"
      ],
      friend71: [
         ">{#p/papyrus}{#e/papyrus/1}THAT'S RIGHT, HUMAN! YOU CAN WIN!",
         ">{#e/papyrus/1}JUST DO WHAT I, THE GREAT PAPYRUS, WOULD DO...",
         ">{#e/papyrus/2}BELIEVE IN YOU!!!"
      ],
      friend72: [
         ">{#p/undyne}{#e/undyne/11}Ha, if you got past ME, you can do ANYTHING.",
         ">{#e/undyne/11}So don't worry...",
         ">{#e/undyne/13}We're with you all the way!"
      ],
      friend73: [
         ">{#p/sans}{#e/sans/1}huh? you haven't beaten this guy yet?",
         ">{#e/sans/2}come on, this weirdo's got nothin' on you."
      ],
      friend74: [
         ">{#p/alphys}{#e/alphys/1}Technically, it's impossible for you to beat him...",
         ">{#e/alphys/2}B-but... somehow, I know you can do it!!"
      ],
      friend75: [
         ">{#p/toriel}{#e/toriel/1}My child...",
         ">{#e/toriel/2}My sweet, innocent child...",
         ">{#e/toriel/3}You cannot give up now!"
      ],
      friend76: "C'mon,\nyou got\nthis!",
      friend77: () => (SAVE.data.n.bully < 30 ? "*em-\npowering\nwhistle*" : "*intimi-\ndated\nwhistle*"),
      friend78: () => (SAVE.data.n.bully < 30 ? "Sparkle\nand\nshine!" : "Ur bad,\nbut he's\nworse."),
      friend79: "Out with\nthe\nbozo!",
      friend80: () => (SAVE.data.n.bully < 30 ? "la la,\nla la" : "h-hum,\nh-hum"),
      friend81: "You must\nnot\nfail.",
      friend82: () => (SAVE.data.n.bully < 30 ? "Our will\nis your\nwill." : "Use your\nstrength\nwisely."),
      friend83: () => (SAVE.data.n.bully < 30 ? "Rock on,\nlittle\nbuddy!" : "Go on,\nlittle\nbully."),
      friend84: () => (SAVE.data.n.bully < 30 ? "We're on\nyour\nside!" : "Wait, we\nlike you\nnow?"),
      friend85: () => (SAVE.data.n.bully < 30 ? "Keep it\nreal,\ndeal?" : "Show him\nwhat you\ngot."),
      friend86a: "Ribbit.",
      friend86b: "Don't\ngive up!",
      friend87: [
         ">{#p/twinkly}{#e/twinkly/17}Urrrgh... NO!",
         ">{#e/twinkly/16}Unbelievable!!",
         ">{#e/twinkly/15}This can't be happening...!",
         ">{#e/twinkly/16}You... YOU...!"
      ],
      friend88: [">{#p/twinkly}{#e/twinkly/2}I can't believe you're all so STUPID."],
      friend89: [">{*}ALL OF YOUR SOULS ARE MINE!!!!!!!!!{^40}{%}"],
      friend90: () =>
         1 <= SAVE.flag.n.killed_sans
            ? [">{#p/asriel1}Of course...", ">This is so much better than before."]
            : [">{#p/asriel1}Finally.", ">I was so tired of being a star."],
      friend91: [">{#p/asriel1}Howdy!", ">$(name), are you there?", ">It's me, your best friend."],
      friend92: ">{*}{#p/asriel3}{#v/1}{#i/12}ASRIEL DREEMURR{^10}{#p/event}{%}"
   },
   b_opponent_finalasgore: {
      name: "* Asgore",
      death1: [
         ">{*}{#p/asgore}{#e/asgore/1}{#v/1}{#i/5}{@random=1.1/1.1}... so that is how it is...",
         ">{*}{#e/asgore/1}{#v/1}{#i/5}{@random=1.1/1.1}...",
         ">{*}{#e/asgore/1}{#v/1}{#i/5}{@random=1.1/1.1}Take my SOUL, and leave this cursed place...",
         ">{*}{#e/asgore/1}{#v/2}{#i/6}{@random=1.1/1.1}Then...",
         ">{*}{#e/asgore/1}{#v/2}{#i/6}{@random=1.1/1.1}You need not be burdened by us... ever again...",
         ">{*}{#e/asgore/2}{#v/3}{#i/6}{@random=1.1/1.1}...",
         ">{*}{#e/asgore/2}{#v/3}{#i/7}{@random=1.1/1.1}Goodbye..."
      ]
   },

   i_archive: { battle: { description: "", name: "" }, drop: [], info: [], name: "无", use: [] },
   i_archive_berry: {
      battle: { description: "3 HP。", name: "洋梅" },
      drop: [">{#p/human}* （你把洋梅扔掉了。）"],
      info: [">{#p/human}* （3 HP。）"],
      name: "洋梅",
      use: [">{#p/human}* （你吃掉了洋梅。）"]
   },
   i_archive_candy: {
      battle: { description: "4 HP。", name: "糖果" },
      drop: [">{#p/human}* （你把怪物糖果扔掉了。）"],
      info: [">{#p/human}* （4 HP。）"],
      name: "怪物糖果",
      use: [">{#p/human}* （你吃掉了怪物糖果。）"]
   },
   i_archive_rations: {
      battle: { description: "5 HP。", name: "口粮" },
      drop: [">{#p/human}* （你把口粮扔掉了。）"],
      info: [">{#p/human}* （5 HP。）"],
      name: "口粮",
      use: [">{#p/human}* （你吃掉了口粮。）"]
   },
   i_archive_tzn: {
      battle: { description: "6 HP。", name: "太空豆腐" },
      drop: [">{#p/human}* （你把太空豆腐扔掉了。）"],
      info: [">{#p/human}* （6 HP。）"],
      name: "太空豆腐",
      use: [">{#p/human}* （你吞下了太空豆腐。）"]
   },
   i_archive_nice_cream: {
      battle: { description: "7 HP。", name: "冰意灵" },
      drop: [">{#p/human}* （你把冰意灵扔掉了。）"],
      info: [">{#p/human}* （7 HP。）"],
      name: "冰意灵",
      use: [
         ">{#p/human}* (You unwrapped the Ice Dream.)",
         ">{#p/human}* (It's a holographic illustration of a crying child.)"
      ]
   },
   i_archive_healpak: {
      battle: { description: "8 HP。", name: "治疗包" },
      drop: [">{#p/human}* （你把治疗包扔掉了。）"],
      info: [">{#p/human}* （8 HP。）"],
      name: "治疗包",
      use: [">{#p/human}* （你使用了治疗包。）"]
   },
   i_big_dipper: {
      battle: {
         description: "一把巨勺，由本星系\n最好的合金材料制成。",
         name: "大熊座"
      },
      drop: [">{#p/human}* （你扔掉了大熊座。）"],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? [">{#p/human}* （15攻击。）"]
            : [">{#p/basic}* “大熊座” （15攻击）\n* 一把巨勺，由本星系\n  最好的合金材料制成。"],
      name: "大熊座",
      use: [">{#p/human}* （你装备上了大熊座。）"]
   },
   i_heart_locket: {
      battle: {
         description: "上面刻着“永远都是好朋友”。",
         name: "心形挂坠"
      },
      drop: () => [
         ">{#p/human}* （你扔掉了心形挂坠。）",
         ...(SAVE.data.b.svr || world.darker || SAVE.data.b.ufokinwotm8
            ? []
            : [">{#p/basic}* ...", ">{#p/basic}* 我就当什么都没看见。"])
      ],
      info: () =>
         SAVE.data.b.svr
            ? [">{#p/human}* （15防御。）"]
            : [">{#p/basic}* “心形挂坠” （15防御）\n* 上面刻着“永远都是好朋友”。"],
      name: "心形挂坠",
      use: [">{#p/human}* （你戴上了心形挂坠。）"]
   },
   i_starling_tea: {
      battle: {
         description: "好王配好茶。",
         name: "星花茶"
      },
      drop: [">{#p/human}* （你把星花茶全倒掉了。）"],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? [">{#p/human}* （99 HP。）"]
            : [">{#p/basic}* “星花茶” 回复99 HP\n* 好王配好茶。"],
      name: "星花茶",
      use: [">{#p/human}* （你喝掉了星花茶。）"]
   },

   k_hangar: {
      name: "Hangar Bay Access Card",
      description: "Used to unlock the door to the outpost's hangar bay."
   },

   k_skeleton: {
      name: "Skeleton Key",
      description: () =>
         SAVE.data.b.s_state_sansdoor
            ? "Used to unlock the door to Sans's room."
            : "Given to you by Sans in the Last Corridor of the Citadel."
   },

   s_save_citadel: {
      c_elevator1: { name: "首塔", text: [] },
      c_courtroom: { name: "最终长廊", text: [] },
      c_road2: { name: "行宫", text: [] },
      c_archive_start: { name: "e586b3e5bf83", text: [] },
      c_archive_path1: { name: "e88090e5bf83", text: [] },
      c_archive_path2: { name: "e58b87e6b094", text: [] },
      c_archive_path3: { name: "e6ada3e79bb4", text: [] },
      c_archive_path4: { name: "e6af85e58a9b", text: [] },
      c_archive_path5: { name: "e59684e889af", text: [] },
      c_archive_path6: { name: "e6ada3e4b989", text: [] },
      c_exit: { name: "终点", text: [] }
   }
};


// END-TRANSLATE
