import { asrielinter } from '../../../code/common';
import { toriCheck, toriSV } from '../../../code/outlands/extras';
import { game } from '../../../code/systems/core';
import {
   battler,
   choicer,
   iFancyYourVilliany,
   instance,
   outlandsKills,
   pager,
   resetThreshold,
   roomKills,
   world
} from '../../../code/systems/framework';
import { SAVE } from '../../../code/systems/save';
import { CosmosKeyed, CosmosProvider } from '../../../code/systems/storyteller';

// START-TRANSLATE
const toriel_aerialis = () =>
   SAVE.data.n.plot < 49
      ? [
         '{#p/toriel}{#f/1}* I hear there is a certain kind of fluid in Aerialis...',
         '{#f/0}* Used primarily to dampen electricity.',
         '{#f/1}* If you could carry this fluid, how far would you take it?',
         '{#f/1}* Would you carry it all the way to the Citadel?',
         '{#f/1}* Or would you simply dispose of it in a recycle bin?',
         '{#f/0}* How disappointing that would be.'
      ]
      : SAVE.data.n.plot < 51
         ? world.bad_lizard > 1 || SAVE.data.n.state_foundry_undyne === 2
            ? [
               '{#p/toriel}{#f/1}* Perhaps, if I ever become a teacher...',
               '{#f/0}* I could host a field trip to the Royal Lab.',
               "{#f/0}* With Dr. Alphys's permission, of course.",
               '{#f/1}* All those interesting experiments they must conduct there...',
               "{#f/0}* It'd be a great learning experience for the children."
            ]
            : [
               '{#p/toriel}{#f/0}* Word of your TV premier has spread quickly, little one!',
               '{#f/0}* Though, I have not seen it, due to my lack of a TV.',
               '{#f/1}* When I heard about it, however, I must admit I was surprised...',
               SAVE.data.n.state_aerialis_talentfails === 0
                  ? '{#f/2}* How did you not miss even a SINGLE time?'
                  : '{#f/6}* I did not know you had such "fabulous" moves.'
            ]
         : SAVE.data.n.plot < 56
            ? [
               '{#p/toriel}{#f/1}* Hmm...\n* The royal guards in Aerialis...',
               '{#f/0}* Apparently, their favorite food is... salmon.',
               '{#f/1}* Or... was it ice cream?',
               '{#f/2}* Wait, no, I think it was pizza!',
               '{#f/0}* All of which would be impossible without the humble replicator.',
               '{#f/1}* And... are those not strange foods for such new recruits?'
            ]
            : SAVE.data.n.plot < 59
               ? [
                  world.bad_lizard > 1 || SAVE.data.n.state_foundry_undyne === 2
                     ? '{#p/toriel}{#f/0}* I hear you have appeared on TV, little one.'
                     : '{#p/toriel}{#f/0}* I hear you have appeared on TV again, little one.',
                  '{#f/1}* I also hear you did something shocking...',
                  iFancyYourVilliany()
                     ? '{#f/2}* And altered crafting ingredients to create plastic explosive!'
                     : SAVE.data.n.state_aerialis_crafterresult === 0
                        ? '{#f/2}* And held your ground against the threat of an impending explosion!'
                        : '{#f/2}* And flew a "one-time use portable jetpack" by yourself!',
                  '{#f/3}* ... are you...',
                  '{#f/4}* Are you TRYING to put your life in danger?'
               ]
               : SAVE.data.n.plot < 60
                  ? [
                     '{#p/toriel}{#f/1}* What kind of puzzles do they have in Aerialis?',
                     '{#f/1}* Are they laser-based?',
                     '{#f/1}* Do they bring you back to the start when you fail?',
                     '{#f/1}* ... can they be explicitly "failed" as such?',
                     '{#f/0}* Hmm...\n* Pardon me for asking so many questions.',
                     '{#f/1}* A fan of puzzles like myself cannot help but ponder these things...'
                  ]
                  : SAVE.data.n.plot < 61
                     ? [
                        '{#p/toriel}{#f/1}* When hearing about your hijinks with Mettaton...',
                        '{#f/0}* I had a thought.',
                        '{#f/1}* How could a robot like him exist after the ban on AI programs?',
                        '{#f/5}* Surely Dr. Alphys would not break such a well- established rule.',
                        '{#f/0}* No...\n* There must be some other explanation.'
                     ]
                     : SAVE.data.n.plot < 63
                        ? [
                           '{#p/toriel}{#f/1}* Hmm...\n* The royal guards in Aerialis...',
                           '{#f/0}* I heard they were only just promoted to their positions.',
                           '{#f/1}* I also heard they are quite picky about their choice of weapons...',
                           '{#f/5}* Refuse to upgrade them despite better options on offer.',
                           '{#f/0}* Not that I want them to upgrade their weapons.',
                           '{#f/2}* I worry about you enough as it is!'
                        ]
                        : SAVE.data.n.plot < 65
                           ? SAVE.data.b.a_state_hapstablook
                              ? [
                                 '{#p/toriel}{#f/1}* A ghost, Lurksalot, recently spoke of some family business.',
                                 '{#f/5}* It seems this has been on their mind for some time.',
                                 '{#f/0}* Thankfully, they say it should be resolved soon.',
                                 '{#f/1}* And with the help of you, no less?',
                                 '{#f/0}* Well then.\n* I am very proud of you, little one.'
                              ]
                              : [
                                 '{#p/toriel}{#f/1}* A ghost, Lurksalot, recently spoke of some family business.',
                                 '{#f/5}* It seems this has been on their mind for some time.',
                                 '{#f/1}* They say their cousin tried to ask for your help, but...',
                                 '{#f/5}* You were unavailable at the time.',
                                 '{#f/1}* ... you did have a good reason, did you not?'
                              ]
                           : SAVE.data.n.plot < 66
                              ? [
                                 '{#p/toriel}{#f/1}* Who knew a robot could have such a beautiful voice?',
                                 "{#f/0}* Upon hearing Mettaton's new recording, I could not believe my ears.",
                                 '<26>{#f/1}* Though, some of the lyrics were a touch... violent, for my taste.',
                                 '{#f/5}* ...',
                                 '{#f/0}* Do not worry, my child.\n* Nobody is going to cast you out into space.'
                              ]
                              : SAVE.data.n.plot < 68
                                 ? [
                                    '{#p/toriel}{#f/0}* Sans tells me the "rec center" is a favored location of his.',
                                    '{#p/toriel}{#f/1}* Art classes, music clubs, libraries...',
                                    '{#p/toriel}{#f/5}* It is a shame much of the area is unsafe for young children.',
                                    '{#p/toriel}{#f/3}* Could they not put a little more effort into being accommodating?',
                                    '{#p/toriel}{#f/2}* Those mediums can offer valuable transformative experiences!'
                                 ]
                                 : SAVE.data.n.plot < 70
                                    ? world.bad_robot
                                       ? [
                                          '{#p/toriel}{#f/0}* Everyone I know is upset about a cancelled "grand finale."',
                                          '{#p/toriel}{#f/0}* They say it would have been quite the fight.',
                                          '{#p/toriel}{#f/1}* While I am relieved you did not have to take on such a battle...',
                                          '{#p/toriel}{#f/5}* I cannot help but worry for what awaits you now.'
                                       ]
                                       : SAVE.data.b.killed_mettaton
                                          ? [
                                             '{#p/toriel}{#f/0}* Everyone I know has been talking about a "grand finale."',
                                             '{#p/toriel}{#f/1}* They say Mettaton gave his life for the good of the show...',
                                             '{#p/toriel}{#f/0}* But I know better.',
                                             '{#p/toriel}{#f/1}* After all, robots can be repaired, can they not?'
                                          ]
                                          : [
                                             '{#p/toriel}{#f/0}* Everyone I know has been talking about a "grand finale."',
                                             '{#p/toriel}{#f/0}* They say watching you and Mettaton really made them happy.',
                                             '{#p/toriel}{#f/1}* While I am glad that you appear to have had a good time...',
                                             '{#p/toriel}{#f/5}* I cannot help but worry for what awaits you now.'
                                          ]
                                    : [
                                       '{#p/toriel}{#f/1}* Are you still doing alright out there, little one?',
                                       '{#p/toriel}{#f/5}* You have probably been to the Citadel by now.',
                                       '{#p/toriel}{#f/9}* ...',
                                       "{#p/toriel}{#f/10}* Be good, won't you?"
                                    ];

export default {
   a_outlands: {
      darktorielcall: [
         '<26>{#p/toriel}{#f/5}* I apologize, little one.\n* I have once again turned off my phone.',
         '{#p/toriel}{#f/9}* Please, leave me here for the time being.',
         '{#p/toriel}{#f/10}* I will return to you and the others in due time.'
      ],
      secret1: () =>
         SAVE.data.n.plot === 72 && !world.darker
            ? [
               '{#p/basic}* If only there was some hidden method of unlocking this drawer.',
               '* Sorry, did I say "drawer?"\n* Surely there aren\'t any of those in the Outlands.'
            ]
            : ['{#p/basic}* There is a door here.\n* It is locked.'],
      secret2: ['{#p/human}* (You use the Secret Key.)'],
      exit: [choicer.create('* (Exit the Outlands?)', 'Yes', 'No')],
      nosleep: ['{#p/human}* (Something seems to have interrupted your sleep.)'],
      noequip: ['{#p/human}* (You decide not to equip.)'],
      finaltext: {
         a: ["{#p/basic}* He's gotta be around here somewhere..."],
         b: ['{#p/basic}* Huh...?', '{#p/basic}* Is that... him?\n* Out there?'],
         c: [
            "{#p/basic}* ... it's him.",
            "* ...\n* Frisk, if you're ready...",
            "* If you've seen everyone else you wanted to see...",
            '* ...',
            '* You know what to do.',
            "* Otherwise, I'll wait until you're ready."
         ],
         d1: ['{#p/basic}* Asriel.'],
         d2: ['{#p/asriel1}{#f/13}* ... Frisk?\n* Is that you...?'],
         d3: ["{#p/basic}* Asriel, it's me...", '{#p/basic}* Your best friend, remember?'],
         d4: [
            '{#p/asriel1}{#f/25}* ...!',
            '{#f/25}* $(name)...?',
            "{#f/13}* But... you're...",
            "{#f/23}* ... you're..."
         ],
         d5: ['{#p/basic}* Dead?'],
         d6: [
            '{#p/basic}* Heh.\n* For a long time... part of me wished I was.',
            '{#p/basic}* After what I did to you, I...\n* I felt like I deserved it.'
         ],
         d7: ["{#p/asriel1}{#f/7}* Don't say that, $(name)!", "{#f/6}* ... you're wrong!"],
         d8: [
            '<33>{#p/basic}* Haha... look who\'s talking now.\n* Mister "just go be with the people who love you."',
            '* But you deserve to know the truth about me, Asriel...',
            '* About everything.'
         ],
         d9: ['{#p/asriel1}{#f/23}* ...', '{#f/23}* $(name)...'],
         d10: ['{#p/asriel1}{#f/13}* But...', '{#f/15}* How are you still...'],
         d11: [
            '{#p/basic}* ... does it matter?',
            '* You were right to forget about me the way you did back there.',
            "* The truth is, I've been a terrible person...",
            "* And I'm not the friend, or the sibling you wish you had."
         ],
         d12: ['{#p/asriel1}{#f/13}* $(name), I...'],
         d13: ["{#p/basic}* It's alright, Asriel.", "* You don't have to make it out to be better than it is."],
         d14: ['{#p/asriel1}{#f/22}* ...', '{#f/22}* ... why now?'],
         d15: [
            '{#p/basic}* Well...',
            '* I always thought humanity was beyond redemption.',
            '* That, no matter what...',
            '* If you were human... you were doomed to fall into darkness.',
            '* But after following Frisk along on their journey...',
            '* I understand the truth.',
            '* The other humans... always did something that made it easy to ignore this truth.',
            "<33>* They'd attack people, or worse, make them... disappear.",
            '* But not Frisk.',
            '* No matter what struggles they faced, they showed kindness and mercy at every turn.',
            '* They... proved me wrong.',
            "* And now, because of that, I know there's no excuse for the way I treated you.",
            '* Everything you went through, everything you lost...',
            "* I'm the one to blame for it."
         ],
         d16: ['{#p/asriel1}{#f/13}* $(name)...', '{#f/15}* Have you been conscious this whole time?'],
         d17: [
            '{#p/basic}* ... yeah.\n* I guess I have.',
            '* This has been my existence, Asriel...\n* Ever since we died.',
            "* And... there's something else I have to tell you."
         ],
         d18: ['{#p/asriel1}{#f/21}* What is it?'],
         d19: [
            '{#p/basic}* Remember when we crossed the force field together?',
            '* When we arrived at the ruins of the old homeworld, and got found out by those humans?',
            '* I wanted to use our power to destroy them... but you stopped me, remember?'
         ],
         d20: ['{#p/asriel1}{#f/16}* ... right.'],
         d21: [
            "{#p/basic}* I didn't understand it back then, but...",
            '* I get it now.',
            '* ... you were just trying to stop me... from making a terrible mistake.'
         ],
         d22: ['{#p/asriel1}{#f/15}* $(name)...'],
         d23: [
            "{#p/basic}* If not for you, the outpost would've been destroyed in a second war.",
            '* If not for you, the very same monsters I was supposedly trying to save...',
            '* ... would have died right along with us.'
         ],
         d24: ['{#p/asriel1}{#f/25}* $(name), I...'],
         d25: [
            '{#p/basic}* Even now, your choice back then still matters.',
            '* Even now...',
            "* You're still a better sibling to me than I ever was."
         ],
         d26: [
            '{#p/asriel1}{#f/25}* I forgive you, $(name)!',
            "{#f/23}* Alright?\n* You don't have to do this...",
            '{#f/22}* I know how strongly you felt back then, and...',
            "{#f/15}* I wouldn't want you to change your mind just because I..."
         ],
         d27: [
            '{#p/basic}* No.\n* Not anymore.',
            '* People CAN change, Asriel...',
            "* Isn't that what you always believed?"
         ],
         d28: ['{#p/asriel1}{#f/13}* ... I still do.'],
         d29: [
            "{#p/basic}* I've spent the past hundred years wallowing in self-pity.",
            "* I've spent the past hundred years holding a grudge I never should've had.",
            '* In all that time, I wondered what kept me alive...',
            '* And now, I finally know the answer.'
         ],
         d30: ['{#p/asriel1}{#f/15}* ...?'],
         d31: ["{#p/basic}* ... it's you, Asriel.", "* You're the one who's been keeping me alive."],
         d32: [
            '{#p/basic}* Think of it like... an unfulfilled promise.',
            '* Holding that grudge... thinking about you in the way that I did...',
            "* Knowing I could've been so much more for you than I ultimately was.",
            "* All this time, that's what's been holding me back."
         ],
         d33: ['{#p/asriel1}{#f/23}* $(name)...'],
         d34: ['{#p/basic}* Asriel.\n* My brother.', '* You deserve to know the truth.'],
         d35: ['{*}{#p/asriel1}{#f/25}* Huh?\n* But you already- {%}'],
         d36: ['{#p/basic}* I forgive you, too.'],
         d37: ['{#p/asriel1}{#f/30}{#i/4}* ...!', '{#p/asriel1}{#f/26}{#i/4}* $(name)...'],
         d38: ['{#p/basic}* Shh...', "* It's alright.", "* I've got you, okay?"],
         d39: ['{#p/asriel1}{#f/25}{#i/4}* I...'],
         d40: ["{#p/basic}* I've got you, Asriel."],
         d41: [
            '{#p/basic}* ... I can feel it.',
            '* Even after a hundred years have passed...',
            "* He's still in there, isn't he?",
            '* Like a little angel...',
            '* Watching over me, protecting me from my own bad choices...',
            '* ... all so I could one day return him the favor.'
         ],
         d42: ["{#p/basic}* It's all starting to make sense now.", '* I know what I have to do.'],
         d43: ['{*}{#p/asriel1}{#f/25}* Huh?\n* What are you... {^60}{%}'],
         d44: ['{*}{#f/25}* No...!{^60}{%}', '{*}{#f/26}* L... let me go!{^60}{%}'],
         d45: ['{*}{#p/basic}* Heh...{^60}{%}', '{*}* ... take care of Mom and Dad for me, okay?{^60}{%}'],
         d46: ['{#p/asriel1}{#f/25}* Frisk, are you there?', '{#f/22}* Please... wake up...'],
         d47: ["{#p/asriel1}{#f/23}* I...\n* I don't want to lose you too..."],
         d48: ['{#p/asriel1}{#f/17}* ... there you are.'],
         d49: [
            "{#p/asriel1}{#f/23}* Ha... I thought I'd lost you for a minute there.",
            "{#f/22}* Don't scare me like that again, okay?",
            '{#f/13}* ...'
         ],
         d50: [
            '{#p/asriel1}{#f/13}* Well...\n* I have my SOUL back inside of me now.',
            '{#f/15}* My original one.',
            '{#f/16}* ...',
            "<26>{#f/16}* When $(name) and I died, they must've wrapped themselves around me...",
            '{#f/13}* ... keeping me safe until I could be brought back here.',
            '<26>{#f/17}* They held on that whole time, just for a chance to see me, Frisk...',
            '{#f/13}* ... so, the least I can do is honor it.',
            '{#f/15}* Live the life they always wanted me to have.'
         ],
         d51: [
            '{#p/asriel1}{#f/23}* ... Frisk.',
            "{#f/23}* I'm going to stay with you from now on.",
            "{#f/17}* Wherever you go... I'll follow you.",
            '{#f/13}* I feel like...\n* I can trust you with that sort of thing.',
            "{#f/13}* Even if we don't know much about each other.",
            "{#f/15}* ... I don't know.",
            '{#f/15}* ...',
            '{#f/13}* Frisk... are you really sure about this?',
            "{#f/13}* All the times I've hurt you, hurt your friends...",
            "{#f/22}* It's... all I can think about right now.",
            '{#f/21}* Seeing them die like that in my mind, over and over...',
            "{#f/22}* Knowing that I'm the one who did it.",
            '{#f/15}* ...',
            '{#f/15}* Are you really sure you can be there for someone like that?',
            choicer.create('* (What do you say?)', 'Yes', 'No')
         ],
         d52: () => [
            '{#p/asriel1}{#f/15}* ...',
            ...(choicer.result === 0
               ? [
                  "{#f/17}* ... I guess I just don't understand you, Frisk.",
                  "{#f/23}* No matter what I do to you... you just won't give in."
               ]
               : [
                  "{#f/17}* ... yeah, but you're still going to try, aren't you.",
                  "{#f/23}* You're too stubborn for your own good, Frisk."
               ]),
            '{#f/22}* ...',
            "{#f/13}* Hey.\n* Maybe it won't be so bad.",
            "{#f/17}* Having you there with me definitely won't hurt matters.",
            '{#f/13}* ...\n* The thing is...\n* If I stayed here now...',
            "{#f/15}* It wouldn't be right by $(name)... you know?",
            '{#f/13}* And besides, with my SOUL back inside of me...',
            "{#f/13}* I won't turn back into a star.",
            "{#f/13}* So... there's no point in me staying here."
         ],
         d53: [
            '{#p/asriel1}{#f/17}* Well.\n* Better get going.',
            '{#f/20}* Your friends are probably worried sick about you by now.'
         ],
         e1: [
            '{#p/asriel1}{#f/15}* ...',
            "{#f/16}* I don't know what's going to happen to $(name) after this.",
            "{#f/13}* They held on for a chance to see me, but that's...",
            '{#f/15}* ... in the past now.'
         ],
         e2: [
            "{#p/asriel1}{#f/13}* I still can't believe they waited all that time just to see me...",
            '{#f/23}* Stubborn idiot.',
            '{#f/17}* ... is what I would have said, if I was still a talking star.',
            "{#f/13}* But... I don't really think they're an idiot."
         ],
         e3: [
            "{#p/asriel1}{#f/13}* $(name)'s not stupid.\n* And I...",
            '{#f/13}* I agreed with a lot of what they said about themselves...',
            '{#f/15}* About them not being the kind of friend I wish I had...',
            "{#f/7}* ... but it doesn't mean I wanted them gone!"
         ],
         e4: [
            "{#p/asriel1}{#f/13}* It's not like $(name) has to go away...",
            "{#f/17}* If they wanted to, they could stay with us.\n* I'd like them to.",
            "{#f/15}* But I'd understand if they wanted to go.",
            '{#f/16}* They "won" their game.\n* They shouldn\'t want to "play" with me anymore.'
         ],
         e5: [
            "{#p/asriel1}{#f/13}* ... $(name)...\n* If you're still there, listening...",
            '{#f/15}* I want you to know that I love you.',
            '{#f/23}* You might not have been the greatest person...',
            '{#f/22}* But, deep down, you still cared about me.'
         ],
         e6: [
            '{#p/asriel1}{#f/23}* Ha...',
            '{#f/22}* I probably seem like a crazy person right now.',
            '{#f/15}* Obsessing over someone I should have moved on from already...',
            '<26>{#f/17}* ... I guess $(name) and I really are just a \n  pair of stubborn idiots.'
         ],
         e7: [
            '{#p/asriel1}{#f/13}* One time, $(name) and I were fighting over a bed...',
            "{#f/10}* 'Cause, both of us wanted the one with the nightstand next to it.",
            '<26>{#f/15}* We were both pushing each other off the side, trying to make room...',
            '{#f/4}* All that fighting got us so tired, that we fell asleep.',
            '{#f/13}* But when we woke up...',
            '{#f/17}* We were lying right next to each other.',
            "{#f/13}* I tried to get up, but... they didn't want to let go.",
            '<26>{#f/15}* They just kept saying...',
            '{#f/15}* "... warm..."',
            '{#f/15}* "... fluffy..."',
            '{#f/20}* I would have complained about it, but...',
            "{#f/17}* ... at that point, I was just happy we weren't fighting."
         ],
         e8: [
            '{#p/asriel1}{#f/13}* This other time, $(name) and I were making dinner for Mom and Dad.',
            '{#f/15}* They kept wanting to make it more spicy...',
            '{#f/3}* To be honest, if they insisted on that now, I would not complain.',
            '{#f/20}* I could go for something spicy right about now.',
            '{#f/13}* But, back then, I was more into sweets.\n* Most monsters are.',
            '{#f/15}* We ended up playing tug-of-war with the mixing bowl, and...',
            '{#f/20}* You can imagine how that turned out.',
            '{#f/17}* Mom made us clean up the mess, of course.',
            '{#f/13}* Then, Dad took us out to eat, and we both got what we wanted.'
         ],
         e9: [
            "{#p/asriel1}{#f/15}* $(name) and I...\n* It's like we couldn't agree on anything...",
            '{#f/20}* Besides spending time together, that is.',
            '<26>{#f/17}* Despite our differences, $(name) and I really were inseparable.',
            "{#f/13}* Even death itself couldn't even keep us apart forever."
         ],
         e10: [
            "{#p/asriel1}{#f/17}* ... do you think they're still around, Frisk?",
            '{#f/17}* For all you know, they could be watching us right now.',
            "{#f/23}* Wouldn't that be something.",
            "{#f/22}* But it's impossible to know for sure."
         ],
         e11: [
            "{#p/asriel1}{#f/17}* Golly.\n* For someone who'll be staying with you...",
            "{#f/20}* I sure am making it sound like I'd rather be with $(name).",
            "{#f/13}* But... it's not like that at all.",
            "{#f/17}* I just can't help but reminisce about someone I used to know."
         ],
         e12: () => [
            '{#p/asriel1}{#f/17}* Frisk...\n* I want you to know.',
            '{#f/13}* Thanks to you...',
            '{#f/23}* I feel like I have a future again.',
            '{#f/22}* ...',
            ...(!SAVE.flag.b.pacifist_marker_forgive
               ? ["{#f/22}* Even though you couldn't forgive me for what I'd done..."]
               : SAVE.flag.n.killed_sans > 0
                  ? ['{#f/22}* Even though I wanted you to do all those terrible things...']
                  : ['{#f/22}* Even though I tortured you, and threatened everyone you love...']),
            "{#f/13}* You're still willing to help me move past it all.",
            '{#f/23}* ... it means a lot.',
            '{#f/22}* ...',
            '{#f/13}* Mom, Dad...',
            '{#f/13}* Sans, Papyrus, Undyne, Alphys...',
            "{#f/15}* Everyone I've killed in past realities...",
            "{#f/16}* ... it's going to difficult for me to face them.",
            '{#f/13}* ...',
            "{#f/17}* But I'll try.",
            "{#f/23}* I'll try to be a better person.",
            '{#f/22}* And, If I ever screw up...',
            "{#f/13}* ... I know you'll be there to help me pick up the pieces."
         ],
         e13: [
            '{#p/asriel1}{#f/17}* Ha... $(name).',
            "{#f/23}* I won't let you down, okay?",
            "{#f/22}* I'll make the most out of this chance you've given me.",
            "{#f/17}* I'll make it count."
         ]
      },
      evac: ['{#p/human}* (You feel the nearby monster presence dwindling.)'],
      stargum1: () =>
         SAVE.data.b.svr
            ? [
               '{#p/human}* (You saw a piece of gum taped to the comic strip...)',
               choicer.create('* (Chew the gum?)', 'Yes', 'No')
            ]
            : [
               '{#p/basic}* There was a piece of gum taped to the comic strip.',
               choicer.create('* (Chew the gum?)', 'Yes', 'No')
            ],
      stargum2: ['{#p/human}* (You decide not to chew.)'],
      stargum3: ['{#p/human}* (You recovered $(x) HP.)'],
      stargum4: ['{#p/human}* (HP fully restored.)'],
      fireplace1: () =>
         SAVE.data.b.svr
            ? [
               '{#p/human}* (You feel the inviting warmth of the fireplace...)',
               choicer.create('* (Crawl inside?)', 'Yes', 'No')
            ]
            : [
               SAVE.data.n.state_wastelands_toriel === 2 || world.runaway
                  ? '{#p/basic}* An ordinary fireplace.'
                  : "{#p/basic}* Toriel's fireplace.\n* It's not too hot, just pleasantly warm.",
               ...(world.darker
                  ? []
                  : ['* You could probably crawl in.', choicer.create('* (Crawl inside?)', 'Yes', 'No')])
            ],
      fireplace2a: ['{#p/human}* (You chose not to crawl in.)'],
      fireplace2b: () => [
         '{#p/human}* (You crawl into the fireplace and let its warmth engulf you.)',
         '{#p/human}* (You are very comfortable.)',
         ...(SAVE.data.b.svr
            ? asrielinter.fireplace2b++ < 1
               ? ["{#p/asriel1}{#f/13}* I'll just, uh, wait for you to get out."]
               : []
            : world.goatbro && SAVE.flag.n.ga_asrielFireplace++ < 1
               ? ["{#p/asriel2}{#f/15}* I'll just, uh, wait for you to get out..."]
               : [])
      ],
      fireplace2c: ["{#p/toriel}{#f/1}{#npc/a}* Don't stay in there for too long..."],
      fireplace2d: ['{#p/basic}* ...', '* This is fine.'],
      noticereturn: ['{#p/asriel2}{#f/10}* Something you missed back here?'],
      noticestart: [
         '{#p/asriel2}{#f/3}* Ah, the place where it all began.',
         "{#p/asriel2}{#f/4}* We've certainly come along since then, haven't we, $(name)?"
      ],
      noticedummy: ['{#p/asriel2}{#f/3}* ...', "{#p/asriel2}{#f/10}* Wasn't there a dummy here before...?"],
      afrog: {
         a: [
            '{#p/basic}{#n1}* Just between you and me...',
            '* I saw that goat lady come through here just a little while ago.',
            '* She had groceries, so I asked her what they were for, and...',
            "* Well, you're in for a treat."
         ],
         b: () =>
            SAVE.data.n.plot === 72
               ? [
                  '{#p/basic}{#n1}* Just between you and me...',
                  '* I saw that goat lady come through here earlier.',
                  '* She said it was time to "confront her fears."',
                  "* Well, whatever she did clearly led to something!\n* We're all free now!"
               ]
               : SAVE.data.n.plot === 71.2
                  ? [
                     '{#p/basic}{#n1}* Did you see her?\n* She just came through here right now!',
                     '* She said it was time to "confront her fears."',
                     '* I wonder what she could have meant...?\n* She seemed determined.'
                  ]
                  : SAVE.data.b.w_state_lateleave
                     ? [
                        '{#p/basic}{#n1}* Just between you and me...',
                        '* I saw that goat lady take the taxi to the supermarket earlier.',
                        "* She said she was going off to buy milk, but she still hasn't come back...",
                        "* I hope she's alright."
                     ]
                     : [
                        '{#p/basic}{#n1}* Just between you and me...',
                        "* Sometimes, when I'm alone, I like to ride the taxi to the marketplace.",
                        "* It's a quaint little shop, but there's loads of stuff to buy.",
                        "* Maybe I'll take you there sometime... you'd adore it!"
                     ],
         c: () =>
            SAVE.data.n.plot === 72
               ? [
                  '{#p/basic}{#n1}* Just between you and me...',
                  "* I'm not a fan of how you beat us all up at first.",
                  '* We were all so scared and confused...',
                  '* ... at least you did something good in the end.'
               ]
               : [
                  '{#p/basic}{#n1}* Just between you and me...',
                  "* The people you've been beating up aren't happy about it.",
                  "* Just be glad I'm off-duty...\n* 'Cause otherwise...",
                  "* I'd have your head."
               ],
         d: ['{#p/basic}{#n1}* No... no!', '* G-get away from me!']
      },
      asriel2: [
         '{#p/asriel2}{#f/1}* Ready?',
         "{#f/2}* 'Cause once we move forward, there's no turning back.",
         choicer.create('* (Follow Him?)', 'Yes', 'No')
      ],
      asriel2b: ['{#p/asriel2}{#f/1}* Ready?', choicer.create('* (Follow Him?)', 'Yes', 'No')],
      asriel3: ['{#p/asriel2}{#f/2}* Okay...', "{#f/1}* Let's do this."],
      asriel4: ["{#p/asriel2}{#f/4}* I'll be waiting, then."],
      asrielDiary: [
         [
            '{#p/human}* (You turn to the first page... you can barely make out the words.)',
            '{#p/asriel1}{#v/2}* "i am starting a dairy Cuz mommy said it wood be fun."',
            '* "today i lerned how to put seeds in daddys garden"',
            '* "he says they will grow up soon But it wil take a long tiem."',
            '* "mommy is gona make a snail pie tonite And im exsited"',
            '* "other then that im having a good day."'
         ],
         [
            '{#p/human}* (You turn to the second page...)',
            '{#p/asriel1}{#v/2}* "azzys dairy, k-504"',
            '* "mommy said i shood rite down the date So folks can no when i rote it."',
            '* "my starling flower stil hasnt grown yet but daddy promises it wil be soon"',
            '* "i wish there was a window on my room but daddy said there is pluming here."',
            '* "they said they wood put a window in the front room tho"',
            '* "i am having a nice day today as wel."'
         ],
         [
            '{#p/human}* (You turn to the third page... seems a couple years went by.)',
            '{#p/asriel1}{#v/2}* "Azzys Diary, K-506.03"',
            '* "My old diary was in a box of toys And i wanted to put more in it."',
            '* "Looks like I only rote the first part of The date last time."',
            '* "By the way the Starling flower I planted before grew up."',
            '* "But I got in a fite with a frend The other day and we havent talked since that."',
            '* "Im worryed about them... i hope theyre not still mad."'
         ],
         [
            '{#p/human}* (You turn to the fourth page...)',
            '{#p/asriel1}{#v/2}* "Azzys Diary, K-506.03"',
            '* "i talked with my frend, they say theyre not upset anymore, so thats good"',
            '* "Mommy and I were watching the sky out side And we saw a shooting star."',
            '* "She said to make a wish... I wished that one day a human wood come down."',
            '* "Mommy and Daddy tell so many storys about them..."',
            '* "They cant all be bad rite?"'
         ],
         [
            '{#p/human}* (You turn to the fifth page...)',
            '{#p/asriel1}{#v/2}* "Azzys Diary, K-506.03"',
            '* "Not alot to say today."',
            '* "Maybe this diary idea is silly."',
            '* "Mom saw me riting in it the other day and said she was proud of me."',
            '* "Is it realy that importint?"'
         ],
         [
            '{#p/human}* (You turn to the sixth page... seems like a few more years went by.)',
            '{#p/asriel1}{#v/1}* "Azzy\'s Diary, K-510.08"',
            '* "Seems I cant write in this thing for too long at once."',
            '* "But today I saw the book again and chose to write some more in it."',
            '* "The past few years have been good, I went to school and learned lots of things."',
            '* "Like how to add numbers."\n* "And how to use a computer."',
            '* "Mom said Im too young to make an online acount tho."',
            '* "Maybe one day when Im older I can have one."'
         ],
         [
            '{#p/human}* (You turn to the seventh page...)',
            '{#p/asriel1}{#v/1}* "Azzy\'s Diary, K-510.08."',
            '* "That smart guy visited again today. He said he had a bad dream about a human."',
            '* "Oh, did I mention him? He is the science person dad talks to alot."',
            '* "He invented alot of things that we use now."',
            '* "Like the replicaters and fabricaters and gravity plate things."',
            '* "But he looked at me really odd Like I was so scary."',
            '* "Did I do somthing wrong?"'
         ],
         [
            '{#p/human}* (You turn to the eighth page...)',
            '{#p/asriel1}{#v/1}* "Azzy\'s Diary, K-510.08."',
            '* "A new star appeared in the sky today."',
            '* "A really brite one."',
            '* "I wonder why more stars dont appear like that all the time."',
            '* "Also we are gonna move to the new citadel soon."',
            '* "I saw it in the distance, it looks amazing so far!"',
            '* "It will be alot better than living in the factory too."'
         ],
         [
            '{#p/human}* (You turn to the ninth page... seems a day was skipped.)',
            '{#p/asriel1}{#v/1}* "Azzy\'s Diary, K-510.09."',
            '* "I met a real human yesterday. They crashed in the trash area near our house."',
            '* "I helped them out of the reck and they said thanks."',
            '* "I didnt think it would ever happen, but here they are."',
            '* "And they are actually he{#p/basic}f{#p/asriel1}{#v/1}h{#p/basic}sj haha azzy is a stinky butt and he{#p/asriel1}{#v/1}vh{#p/basic}v{#p/asriel1}{#v/1}j{#p/basic}a{#p/asriel1}{#v/1}s"',
            '* "Okay so Im actually hiding under the covers so $(name) cant mess up what Im writing."',
            '* "They can be a bit mean some times, but thats ok."',
            '* "Mom did that battle thing with them and there heart was red and upside down."',
            '* "Its really nice to have someone else to talk to everyday."'
         ],
         [
            '{#p/human}* (You turn to the tenth page...)',
            '{#p/asriel1}{#v/1}* "Azzy\'s Diary, K-510.09."',
            '* "Mom said shes gonna adopt $(name) into the family."',
            '* "I dont know what adopt means but she said I will be like their brother."',
            '* "But thats good Cuz then I can spend more time with them."',
            '* "Me and $(name) are gonna do everything together!"',
            '* "Also they said sorry for what happend in the last diary page."',
            '* "I didnt tell them yet but, I forgive them."',
            '{#p/basic}* ...'
         ],
         [
            '{#p/human}* (You turn to the eleventh page.)',
            '{#p/asriel1}* "Asriel\'s Diary, K-515.09"',
            '* "$(name) said it\'s time for the plan."',
            '* "I was scared, but they said I could do it."',
            '* "After this entry, I\'ll wait for them to fall down..."',
            '* "And then we can save everyone together."',
            '* "If something goes wrong, and you\'re reading this later..."',
            '* "I want you to know that you\'re the best, $(name)."',
            '{#p/basic}* ...',
            '{#p/human}* (It sounds like someone is crying...)'
         ]
      ],
      backdesk: {
         a: () => [
            ...(SAVE.data.b.svr ? [] : ["{#p/basic}* There's a backpack strung up on this coat rack."]),
            '{#p/human}* (You look inside the backpack...)',
            ...(SAVE.data.b.svr
               ? ['{#p/human}* (But there was nothing left to find within.)']
               : ['{#p/basic}* Nothing left to find here.'])
         ],
         b: () => [
            ...(SAVE.data.b.svr ? [] : ["{#p/basic}* There's a backpack strung up on this coat rack."]),
            '{#p/human}* (You look inside the backpack...)',
            ...(SAVE.data.b.svr
               ? []
               : ["{#p/basic}* What's this?\n* A limited edition Super Starwalker comic strip?"]),
            '{#s/equip}{#p/human}* (You got the Super Starwalker 2.)'
         ],
         b2: () => [
            ...(SAVE.data.b.svr ? [] : ["{#p/basic}* There's a backpack strung up on this coat rack."]),
            '{#p/human}* (You look inside the backpack...)',
            ...(SAVE.data.b.svr
               ? []
               : ["{#p/basic}* What's this?\n* A limited edition Super Starwalker comic strip?"]),
            "{#p/human}* (You're carrying too much to take that.)"
         ]
      },
      midsleep: [
         '{#p/human}* (If you sleep here now, you may miss something important.)',
         choicer.create('* (Go to sleep?)', 'Yes', 'No')
      ],
      bedfailToriel: [
         '{#p/toriel}{#f/5}* Oh dear.',
         '{#f/1}* Perhaps my actions have done more harm than I first imagined...',
         '{#f/0}* ...\n* Worry not, my child.',
         "* I will make sure you get a good night's rest for the journey ahead.",
         '{#p/human}* (Toriel sits next to you and sings a lullaby to put you to sleep.)'
      ],
      blooky1: [
         '{#p/napstablook}* Zzz... Zzz...',
         '* Zzz... Zzz...',
         "{#p/basic}* This ghost keeps saying 'z' out loud repeatedly, pretending to sleep.",
         choicer.create('* (Try to walk through it?)', 'Yes', 'No')
      ],
      blooky2: [
         '{#p/basic}* The ghost is still blocking the way.',
         choicer.create('* (Try to walk through it?)', 'Yes', 'No')
      ],
      blooky3: [
         '{#p/napstablook}* i usually visit this place to get some peace and quiet...',
         '* but today i met someone nice...',
         "* well, i'll get out of your way now",
         '* cya...'
      ],
      blooky4: [
         '{#p/napstablook}* so um...\n* you really like me, huh',
         '* heh... thank you...',
         '* and, uh... sorry i got in your way before...',
         "* i'll just be like...\n* somewhere else...",
         '* cya...'
      ],
      blooky5: [
         '{#p/napstablook}* so um... you really despise me, huh',
         "* that's... nice...",
         "* well, i'll be on my way now",
         '* bye...'
      ],
      blooky6: [
         '{#p/napstablook}* so um... that happened...',
         '* ...',
         '* uh... i gotta go now',
         '* cya...'
      ],
      blooky7: [
         "{#p/napstablook}* you didn't even say anything to me...",
         "* that's... i don't even know what that is...",
         "* well, i'll be going now",
         '* bye...'
      ],
      breakfast: ['{#p/human}* (You got the Fried Snails.)'],
      breakslow: ["{#p/human}* (You're carrying too much to take that.)"],
      candy1: () =>
         SAVE.data.b.svr
            ? [
               '{#p/human}* (You approach the vending machine.)',
               choicer.create('* (What will you make?)', 'Candy', 'Water', 'Δ-9', 'Nothing')
            ]
            : [
               '{#p/basic}* Synthesize something with the vending machine?',
               choicer.create('* (What will you make?)', 'Candy', 'Water', 'Δ-9', 'Nothing')
            ],
      candy2: ['{#p/human}* (You got the $(x).)\n* (Press [C] to open the menu.)'],
      candy3: ['{#p/human}* (You got the $(x).)'],
      candy4: () => [
         '{#p/human}* (You got the $(x).)',
         ...(SAVE.data.b.svr ? [] : ['{#p/basic}* The machine is beginning to malfunction.'])
      ],
      candy5: () => [
         '{#p/human}* (You got the $(x).)',
         ...(SAVE.data.b.svr ? [] : ['{#p/basic}* The machine broke down.'])
      ],
      candy6: () =>
         SAVE.data.b.svr
            ? [
               [
                  '{#p/asriel1}{#f/13}* Out of order again?',
                  "{#f/17}* Yeah, that's... by design, actually.",
                  "{#f/13}* This machine runs on the Outlands' own power supply, so...",
                  '{#f/15}* To avoid using too much power, Toriel just made it break itself.',
                  "<26>{#f/20}* Not that she'd tell you."
               ],
               [
                  '{#p/asriel1}{#f/13}* The reason that power supply is so small, though...',
                  "{#f/17}* It's because, unlike the CORE, it only uses background radiation.",
                  "{#f/13}* To put it into numbers, I'd say...",
                  '{#f/15}* It generates about ten- thousandths of the power the CORE does.'
               ],
               [
                  '{#p/asriel1}{#f/13}* Hmm...',
                  '{#f/15}* I wonder if, despite its low capacity...',
                  '{#f/13}* This generator would be enough to power a small atmospheric system.',
                  '{#f/17}* If the CORE was destroyed, could people survive here...?'
               ],
               ['<26>{#p/asriel1}{#f/20}* ... asking for a friend.']
            ][Math.min(asrielinter.candy6++, 3)]
            : ["{#p/basic}* It's out of order."],
      candy7: ['{#p/human}* (You decide not to make anything.)'],
      candy8: ["{#p/human}* (You're carrying too much.)"],
      chair1a: [
         '{#p/toriel}{#f/1}{#n1}* What is it, my child?\n* Are you hungry?',
         '{#f/0}* Perhaps you would like to know more about the book I am reading.',
         choicer.create('{#n1!}* (What do you say?)', 'Hungry', 'Book', 'Home', 'Nothing')
      ],
      chair1b: [
         '{#p/toriel}{#n1}* What is it, my child?',
         choicer.create('{#n1!}* (What do you say?)', 'Hungry', 'Book', 'Home', 'Nothing')
      ],
      chair1c: ['{#p/toriel}{#n1}* Well, let me know if you need anything.'],
      chair1d: ['{#p/toriel}{#n1}* Well, let me know if you change your mind.'],
      chair1e: [
         '{#p/toriel}{#f/1}{#n1}* Restless night?',
         '{#f/1}* ...\n* If you like, I can read you this book...',
         '{#f/0}* It is called "Generous Monster" and it was written by a human.',
         choicer.create('{#n1!}* (Read the book?)', 'Yes', 'No')
      ],
      chair1f: pager.create(
         0,
         ['{#p/toriel}{#n1}{#f/1}* Back for a visit?', '{#f/0}* Well, feel free to stay as long as you need.'],
         ['<26>{#p/toriel}{#n1}{#f/5}* I shall remain here, as I always have...']
      ),
      chair2a1: [
         '{#p/toriel}{#f/1}{#n1}* Are you hungry?\n* Would you like me to make you a breakfast?',
         choicer.create('{#n1!}* (Have breakfast?)', 'Yes', 'No')
      ],
      chair2a2: ['{#p/toriel}{#n1}* Wonderful!\n* I will be in the kitchen preparing it.'],
      chair2a3: [
         '{#p/toriel}{#f/1}{#n1}* Have you changed your mind about breakfast?',
         choicer.create('{#n1!}* (Have breakfast?)', 'Yes', 'No')
      ],
      chair2a4: () =>
         SAVE.data.b.drop_snails
            ? [
               '{#p/toriel}{#f/3}{#n1}* You expect me to make another after you dropped the first one?',
               '{#f/4}* This child...',
               '{#f/0}* No, little one.\n* I will not prepare another breakfast.'
            ]
            : [
               '{#p/toriel}{#n1}* I have already served breakfast, little one.',
               '{#f/1}* We cannot have more than one breakfast per day, can we?',
               '{#f/0}* That would be silly.'
            ],
      chair2c1: [
         '{#p/toriel}{#n1}* Ah, the book!\n* Yes, it is quite the fun little read.',
         '{#f/0}* It is called "Generous Monster" and was written by a human.',
         '{#f/1}* Would you like me to read it to you?',
         choicer.create('{#n1!}* (Read the book?)', 'Yes', 'No')
      ],
      chair2c2: ['{#p/toriel}{#n1}* Splendid!', '{#g/torielCompassionSmile}* ...'],
      chair2c3: [
         '{#p/toriel}{#f/1}{#n1}* Do you want me to read you the book now?',
         choicer.create('{#n1!}* (Read the book?)', 'Yes', 'No')
      ],
      chair2c4: [
         '{#p/toriel}{#f/1}{#n1}* Do you want me to read you the book again?',
         choicer.create('{#n1!}* (Read the book?)', 'Yes', 'No')
      ],
      chair2c5: ['{#p/toriel}{#f/1}{#n1}* Alright, then...', '{#p/toriel}{#g/torielCompassionSmile}* ...'],
      chair2c6: [
         '{#f/1}{#n1}* "Once, there was a monster..."',
         '{#f/0}* "And she loved a little human."',
         '{#f/1}* "And every day, the human would come visit..."',
         '{#f/0}* "And they would run and play together in the fields."',
         '{#f/1}* "They\'d sing songs together, tell stories to each other..."',
         '{#f/0}* "And they would play hide-and-go seek."',
         '{#f/1}* "And when the human was tired, she would tuck them into bed..."',
         '{#f/0}* "And the human loved the monster very much."',
         '{#f/0}* "And the monster was happy."',
         '{#f/1}* "But as time went by, and the human grew older..."',
         '{#f/0}* "The monster was often left alone."',
         '{#f/1}* "Then one day, the human came back..."',
         '{#f/0}* "And the monster said \'Come, human, come and play!\'"',
         '{#f/5}* "\'I am too big to play,\' said the human."',
         '{#f/1}* "\'I want to drive, to find a new home...\'"',
         "{#f/5}* \"'Sorry,' said the monster, 'but I am too poor to own a car.'\"",
         '{#f/5}* "\'All I have is my own two feet.\'"',
         '{#f/0}* "\'Climb on my back, and I can run you to where you need.\'"',
         '{#f/0}* "\'Then you can see the town and be happy.\'"',
         '{#f/1}* "And so the human climbed onto the monster\'s back..."',
         '{#f/0}* "And the monster took them to a new home."',
         '{#f/0}* "And the monster was happy."',
         '{#f/1}* "But the human stayed away for a long time..."',
         '{#f/5}* "And the monster was sad."',
         '{#f/0}* "Then one day, the human came back."',
         '{#f/1}* "And the monster smiled from ear to ear and said..."',
         '{#f/1}* "\'Come, human, come and ride on my back!\'"',
         '{#f/5}* "\'I am too sad to ride around,\' said the human."',
         '{#f/1}* "\'I wish I had a family, and children of my own...\'"',
         "{#f/5}* \"'Sorry,' said the monster, 'but I cannot give that to you.'\"",
         '{#f/5}* "\'I am only one person.\'"',
         '{#f/0}* "\'Visit for a while, and we can find you a date.\'"',
         '{#f/0}* "\'Then you can find love and be happy.\'"',
         '{#f/1}* "And so the human visited their old friend for a while..."',
         '{#f/0}* "And the monster found them someone they might like."',
         '{#f/0}* "And the monster was happy."',
         '{#f/5}* "But the human stayed away for a long time."',
         '{#f/1}* "When they finally returned, the monster was so happy..."',
         '{#f/9}* "She could hardly speak."',
         '{#f/1}* "\'Come, human,\' she whispered..."',
         '{#f/1}* "\'Come and visit.\'"',
         '{#f/5}* "\'I am too old and busy to visit,\' said the human."',
         '{#f/1}* "\'I want a place to rest for the night...\'"',
         "{#f/5}* \"'Sorry,' said the monster, 'but I do not have a bed your size.'\"",
         '{#f/5}* "\'I am still too poor to afford one.\'"',
         '{#f/0}* "\'Sleep with me for the night.\'"',
         '{#f/0}* "\'Then you can get some rest and be happy.\'"',
         '{#f/1}* "And so the human and the monster cuddled together..."',
         '{#f/0}* "And the monster was able to put the human to sleep."',
         '{#f/0}* "And the monster was happy."',
         '{#f/5}* "... but not really."',
         '{#f/9}* "And after a long time, the human came back again."',
         "{#f/5}* \"'I am sorry, human,' said the monster, 'but I have fallen down.'\"",
         '{#f/5}* "\'My legs are giving out, I cannot take you anywhere.\'"',
         '{#f/10}* "\'There is nowhere else I want to be,\' said the human."',
         '<26>{#f/5}* "\'I cannot find you a date, I know no one else\' said the monster."',
         '{#f/10}* "\'There is no one else I want to be with,\' said the human."',
         '{#f/5}* "\'I am too weak for you to sleep on me\', said the monster."',
         '{#f/10}* "\'I do not need sleep any longer,\' said the human."',
         "{#f/5}* \"'I am sorry,' sighed the monster.",
         '{#f/5}* "\'I wish I had something to offer, but I have nothing left.\'"',
         '{#f/9}* "\'I am just an old monster approaching her death.\'"',
         '{#f/5}* "\'I am sorry...\'"',
         '{#f/10}* "\'I do not need very much now,\' said the human."',
         '{#f/10}* "\'Just a hug from my best friend before I die.\'"',
         '{#f/1}* "\'Well,\' said the monster, straightening her posture..."',
         '{#f/0}* "\'Well, an old monster is always here for that.\'"',
         '{#f/0}* "\'Come, human, come to me. Be with me one last time.\'"',
         '{#f/9}* "And so the human did."',
         '{#f/10}* "And the monster was happy."'
         // '{#f/2}* "And then they both fucking died-"'
      ],
      chair2c7: ['{#f/0}{#n1}* Well, that was the story.', '{#f/1}* I hope you liked it...'],
      chair2c8: ['{#f/0}{#n1}* Well, that is all.'],
      chair2d1: [
         '{#p/toriel}{#f/1}{#n1}* Home...?\n* Could you be a little more specific?',
         '{#p/human}{#n1!}* (What do you say?){!}\nµµµµµµNeverµµµµµµµµµWhen can I\nµµµµµµmindµµµµµµµµµµgo home?{#c/0/6/4}'
      ],
      chair2d2: [
         '{#p/toriel}{#f/1}{#n1}* But... this is your home now, is it not?',
         '{#p/human}{#n1!}* (What do you say?){!}\nµµµµµµµµµµµµµµµµµµHow to exit\nµµµµµµµµSorryµµµµµthe Outlands{#c/0/8/2}'
      ],
      chair2d3: [
         '{#p/toriel}{#f/5}{#n1}* Please, try to understand...',
         '{#p/toriel}{#f/9}* I only want the best for you.'
      ],
      chair2d4: [
         '{#p/toriel}{#f/5}{#n1}* My child...',
         '{#p/human}{#n1!}* (What do you say?){!}\nµµµµµµNeverµµµµµµµµµHow to exit\nµµµµµµmindµµµµµµµµµµthe Outlands{#c/0/6/4}'
      ],
      chair2d5: ['{#p/toriel}{#f/5}{#n1}* ...'],
      chair2d6: [
         '{#p/toriel}{#f/9}{#n1}* ...',
         '{#p/toriel}{#f/9}* Please, wait here.',
         '{#p/toriel}{#f/5}* There is something I have to do.'
      ],
      chair3: () =>
         SAVE.data.b.svr
            ? [
               [
                  "{#p/asriel1}{#f/20}* I still can't believe she moved this all the way from the Citadel.",
                  "{#f/17}* But... I understand why she'd want to.",
                  '{#f/13}* Mom and this chair of hers go pretty far back..'
               ],
               [
                  '{#p/asriel1}{#f/13}* One time, she told me something...',
                  '{#f/17}* "This chair reminds me of home."',
                  '{#f/13}* But she was already at home, so I asked her what she meant.',
                  '{#f/17}* Turns out she had this at her home...',
                  '{#f/23}* ... on the old homeworld.'
               ],
               [
                  "{#p/asriel1}{#f/13}* I don't know much about that world, Frisk...",
                  '{#f/17}* But I hear it was very... idyllic.',
                  '{#f/20}* Sure, there were lots of advances in magic and technology...',
                  '{#f/17}* But people loved it, because life was so... simple.'
               ],
               ["{#p/asriel1}{#f/23}* What I wouldn't give to have a simple life."]
            ][Math.min(asrielinter.chair3++, 3)]
            : world.darker
               ? ['{#p/basic}* A reading chair.']
               : ['{#p/basic}* A comfy reading chair...', '* Seems like the right size for Toriel.'],
      chair4: ['{#p/toriel}{#n1!}* Ah, there you are.', '* I have left your breakfast on the table for you.'],
      closetrocket: {
         a: () => [
            '{#p/human}* (You look inside the chest...)',
            ...(SAVE.data.b.svr
               ? [
                  [
                     "{#p/asriel1}{#f/13}* Yeah, uh, that's about all you'll find in there.",
                     "{#f/17}* I'm not sure why Toriel put this here.",
                     '{#f/17}* $(name) and I were never interested in comic books.'
                  ],
                  ['{#p/asriel1}{#f/10}* I guess she just wanted to pretend we were living here...?'],
                  ['{#p/asriel1}{#f/13}* The things a mother does to make herself feel better...']
               ][Math.min(asrielinter.closetrocket_a++, 2)]
               : ['{#p/basic}* Nothing left to find here.'])
         ],
         b: () => [
            '{#p/human}* (You look inside the chest...)',
            ...(SAVE.data.b.svr
               ? []
               : ["{#p/basic}* What's this?\n* A limited edition Super Starwalker comic strip?"]),
            '{#s/equip}{#p/human}* (You got the Super Starwalker 3.)'
         ],
         b2: () => [
            '{#p/human}* (You look inside the chest...)',
            ...(SAVE.data.b.svr
               ? []
               : ["{#p/basic}* What's this?\n* A limited edition Super Starwalker comic strip?"]),
            "{#p/human}* (You're carrying too much to take that.)"
         ]
      },
      goner: {
         a1: [
            '{#p/human}* A world not bound by association...',
            '* Existing purely for the sake of its own beauty...',
            "* There's something special about that."
         ],
         a2: ['* Tell me...', '* Does that not pique your... curiosity?']
      },
      danger_puzzle1: () => [
         '{#p/toriel}* In this room lies a new kind of puzzle.',
         [1, 5].includes(SAVE.data.n.state_wastelands_dummy)
            ? '{#f/3}* Perhaps you will do better here than with the dummy.'
            : '{#f/1}* Do you think you can solve it on your own?'
      ],
      danger_puzzle2: () =>
         world.darker
            ? ["{#p/basic}* It's too tall for you to reach."]
            : ["{#p/basic}* This terminal's staggering height towers over you, blocking your eager approach."],
      danger_puzzle3: () => [
         [1, 5].includes(SAVE.data.n.state_wastelands_dummy)
            ? '{#p/toriel}{#f/3}* What is it now...'
            : '{#p/toriel}{#f/1}* What is the problem?\n* Do you need assistance?'
      ],
      danger_puzzle4: () => [
         ...([1, 5].includes(SAVE.data.n.state_wastelands_dummy)
            ? ['{#p/toriel}{#f/5}* Ah... I see.', '{#f/5}* The terminal is too high for you to reach it.']
            : [
               '{#p/toriel}{#f/7}* ... oh my.',
               '{#f/6}* It seems there is a bit of a design fault here.',
               '{#f/1}* So the terminal is too high for you to reach it...?'
            ]),
         '{#f/0}* No matter.\n* I will operate it for you.',
         '{#f/0}* ...',
         '{#f/0}* There is a riddle to be solved here.\n* Would you like to try?',
         choicer.create('* (Solve the riddle?)', 'Yes', 'No')
      ],
      danger_puzzle5a: [
         '{#p/toriel}* Excellent!\n* The eagerness to learn and grow is important.',
         '{#f/0}* Especially for a youngster such as yourself.'
      ],
      danger_puzzle5b: [
         '{#p/toriel}{#f/0}* The riddle takes the form of a question.',
         "{#p/toriel}{#f/1}* \"What's baked like a cake and rhymes with 'lie?'\""
      ],
      danger_puzzle5c: [
         '{#p/human}* (...)\n* (You tell Toriel the answer.)',
         '{#p/toriel}{#f/0}* ... ah, very good.\n* And with such a positive attiude!'
      ],
      danger_puzzle5d: [
         '{#p/human}* (...)\n* (You tell Toriel you do not know the answer.)',
         '{#p/toriel}{#f/1}* ... is something wrong?\n* You seem to have something on your mind.',
         '{#f/5}* ... hmm...',
         '{#f/0}* Well, alright.\n* I will solve the riddle for you this time.'
      ],
      danger_puzzle5e: () =>
         [1, 5].includes(SAVE.data.n.state_wastelands_dummy)
            ? ['{#p/toriel}{#f/5}* ...', '{#f/5}* I see.']
            : ['{#p/toriel}{#f/0}* ...', '{#f/0}* I suppose I can solve the riddle for you this time.'],
      danger_puzzle6: () => [
         [1, 5].includes(SAVE.data.n.state_wastelands_dummy) && SAVE.data.b.w_state_riddleskip
            ? '{#p/toriel}{#f/5}* And... {#x1}there.\n* The pathway is clear.'
            : '{#p/toriel}* And... {#x1}there!\n* The pathway is clear!'
      ],
      danger_puzzle7: () => [
         [1, 5].includes(SAVE.data.n.state_wastelands_dummy) && SAVE.data.b.w_state_riddleskip
            ? '{#p/toriel}{#f/5}* I will wait for you to enter the next room.'
            : '{#p/toriel}* Once ready, you may enter the next room.'
      ],
      danger_puzzle8: () =>
         SAVE.data.b.svr
            ? ["{#p/human}* (But you still couldn't reach the terminal.)"]
            : ['{#p/basic}* Even now, the terminal still stands as tall as ever.'],
      denie: ["{#p/human}* (You're carrying too much to take that.)"],
      dipper: {
         a: [
            '{#p/human}* (You got the Little Dipper.)',
            choicer.create('* (Equip the Little Dipper?)', 'Yes', 'No')
         ],
         b: ["{#p/human}* (You're carrying too much to take that.)"]
      },
      drop_pie: ['{#p/toriel}{#f/1}* Pies are for eating, not for splattering on the floor.'],
      drop_pie3: ['{#p/toriel}{#f/1}* Please do not spill food on the floor.'],
      drop_snails: ['{#p/toriel}{#f/1}* What did those poor fried snails ever do to you.'],
      drop_soda: ["{#p/basic}{#n1}* Aww c'mon! ;)", '* I poured my heart into that! ;)'],
      drop_steak: ['{#p/basic}{#n1}* Seriously!? ;)', '* That steak was utterly priceless! ;)'],
      dummy1: [
         '{#p/toriel}{#f/0}* Your next lesson involves encounters with other monsters.',
         '{#f/1}* As a human roaming the outpost, it is likely you will be attacked...',
         '{#f/0}* If that happens, you will enter what is known as a FIGHT.',
         '{#f/0}* Thankfully, there are several ways to resolve one.',
         '{#f/1}* For now, I suggest striking up a friendly conversation...',
         '{#f/0}* ... thereby giving me a chance to sort out the conflict for you.'
      ],
      dummy2: ['{#p/toriel}* To start, you may practice talking with the dummy.'],
      dummy3: [
         '{#p/toriel}{#f/7}* ... you think that I am the dummy?',
         '{#f/6}* Hahaha!\n* How adorable!',
         '{#f/0}* Unfortunately, I am but a worrisome old lady.'
      ],
      dummy4: [
         '{#p/toriel}* There is nothing to be afraid of, my child.',
         '* A simple training dummy cannot harm you.'
      ],
      dummy5: ['{#p/toriel}{#f/1}* Go on, little one...'],
      dummy6: [
         '{#p/toriel}{#f/2}* Child, no!\n* The dummy was not made for fighting!',
         '{#f/1}* Besides, we do not want to hurt anyone, do we?',
         '{#f/0}* Come now.'
      ],
      dummy7: ['{#p/toriel}* Excellent!\n* You appear to be quite the fast learner.'],
      dummy8: [
         '{#p/toriel}{#f/1}* You ran away...?',
         '{#f/0}* Actually, that may have been a wise choice.',
         '<26>{#f/1}* By escaping, you have avoided any potential conflict...',
         '{#f/0}* ... even if it WAS only a simple training dummy.'
      ],
      dummy9: ['{#p/toriel}{#f/3}* ...', '{#f/4}* ...', '{#f/0}* The next room awaits.'],
      dummy9a: ['{#p/toriel}{#f/3}* ...', '{#f/4}* ...', '{#f/6}* The next room awaits.'],
      dummy10: [
         '{#p/toriel}{#f/7}* My child, that is...',
         '{#f/0}* ... that is perhaps the most adorable thing I have ever seen.',
         '{#f/0}* In any case, you have handled this lesson admirably.',
         '{#f/0}* The next room awaits.'
      ],
      dummy11: ['{#p/toriel}* The next room awaits.'],
      dummy12: [
         '{#p/toriel}{#f/2}* My goodness, child!\n* Have mercy!',
         '{#f/1}* ...',
         '{#f/0}* Thankfully, that was only a training dummy.',
         '{#f/1}* In the future, however, it would be wise...',
         '{#f/0}* ... not to slap people half to death!',
         '<26>{#f/0}* Anywho.\n* The next room awaits.'
      ],
      eat_pie: ['{#p/toriel}{#f/1}{#n1}* Tasty, is it not?'],
      eat_snails: ['{#p/toriel}{#f/0}{#n1}* I hope your breakfast sufficed.'],
      eat_soda: [
         '{#p/basic}* Aaron pulled out his phone and snapped a picture.',
         '{#p/basic}{#n1}* Ooh, I could definitely put this on an poster somewhere ;)'
      ],
      eat_steak: [
         '{#p/basic}* Aaron shot you with a wink.',
         '{#p/basic}{#n1}* You like the product, lassy? ;)'
      ],
      endtwinkly2: [
         '{#p/basic}* Who does he think he is?',
         "* You've been nothing but kind to everyone we've met.",
         '* That talking star really needs to get a life...'
      ],
      endtwinklyA1: [
         '{#p/twinkly}{#f/12}* You idiot...',
         "* Didn't you hear me before!?",
         '* I thought I told you not to screw it up!',
         "* Now look what you've done to our plan.",
         '{#f/8}* ...',
         '{#f/6}* You better fix this, $(name).',
         "{#f/5}* It's our destiny."
      ],
      endtwinklyA2: () =>
         SAVE.flag.n.genocide_milestone < 1
            ? [
               '{#p/twinkly}{#f/5}* Howdy, $(name).',
               "{#f/5}* Seems you don't want to play with me anymore.",
               '{#f/6}* I tried being patient with you, but here we are...',
               '{#f/6}* Back at the beginning again.',
               '{#f/8}* Again, and again...',
               '{#f/5}* You must think this is all very funny.',
               '{#f/7}* Teasing me with the chance to be with you, only to tear it away...',
               "{#f/5}* Well, that's fine.",
               "{#f/5}* If that's the game you're going to play, then go right ahead.",
               "{#f/11}* Just don't expect to be in control for long...",
               "{#f/7}* Sooner or later, you're going to regret what you've done."
            ]
            : [
               '{#p/twinkly}{#f/6}* Howdy, $(name).',
               ...(SAVE.flag.n.genocide_milestone < 7
                  ? [
                     "{#f/6}* I've had some time to think about what happened.",
                     '{#f/5}* It was thrilling, at first...',
                     '* The thought of taking the outpost by force together...',
                     "{#f/6}* But now, I'm not sure.",
                     '{#f/8}* ...',
                     '{#f/8}* I guess... I got a bit carried away back there.',
                     "{#f/5}* But that's okay, right?\n* You'll forgive me, won't you?"
                  ]
                  : [
                     "{#f/6}* I'm still not really sure what happened back there...",
                     "{#f/5}* It's... kinda scaring me, haha...",
                     '{#f/8}* ...',
                     '{#f/8}* Maybe... we should hold off on things for now.',
                     "{#f/5}* But that's okay, right?\n* You'll be fine with that, won't you?"
                  ]),
               '{#f/6}* ...',
               '{#f/8}* Goodbye, $(name)...',
               ...(SAVE.flag.n.genocide_milestone < 7 ? ["{#f/5}* I'll be back before you know it."] : [])
            ],
      endtwinklyA3: [
         "{#p/twinkly}{#f/5}* Howdy!\n* I'm {@fill=#ff0}TWINKLY{@fill=#fff}.\n* {@fill=#ff0}TWINKLY{@fill=#fff} the {@fill=#ff0}STAR{@fill=#fff}!"
      ],
      endtwinklyA4: [
         '{#p/event}* Apologies.\n* This was not the intended course of events.',
         "* The data at your last SAVE point indicates Asriel has absorbed Toriel's SOUL.",
         "* However, Asriel's character data indicates he no longer intends to repeat this event.",
         '* Therefore, it is possible for you to LOAD to a point at which these states conflict.',
         '* This possibility creates an anomaly in the causal nexus which cannot be accounted for.',
         '* To put it in simpler terms, Asriel would be forced to react to each LOAD you perform.',
         '* As he can remember each LOAD, his reaction would vary from one instance to the next.',
         '* As you can LOAD an infinite number of times, he would have an infinite set of reactions.',
         '* An infinite set of reactions cannot exist, and as such, this scenario cannot continue.'
      ],
      endtwinklyA5: ['{#p/event}* Goodbye.'],
      endtwinklyAreaction: [
         '{#p/basic}* Sorry, did I miss something?',
         "* I've never talked to him in my life, let alone go on some mission with him.",
         "* Oh well.\n* It wouldn't be the first time he's made up stories about me."
      ],
      endtwinklyB: () =>
         SAVE.data.b.w_state_lateleave
            ? [
               '{#p/twinkly}{#f/5}{#v/0}* Well.\n* That was unexpected.',
               "{#f/11}{#v/0}* You think you can just break the rules, don'tcha?",
               '{#f/7}{#v/0}* Hee hee hee...',
               "{#f/0}{#v/1}* In this world, it's KILL or BE killed."
            ]
            : [
               '{#p/twinkly}{#f/5}{#v/0}* Clever.\n* Verrrryy clever.',
               "{#f/11}{#v/0}* You think you're really smart, don'tcha?",
               '{#f/7}{#v/0}* Hee hee hee...',
               "{#f/0}{#v/1}* In this world, it's KILL or BE killed."
            ],
      endtwinklyB2: [
         '{#f/8}{#v/0}* If you had just killed a FEW more monsters...',
         "{#f/9}{#v/0}* Well, maybe I shouldn't reveal my plans this early.",
         '{#f/7}{#v/0}* You know, $(name)...',
         "{#f/5}{#v/0}* It's only a matter of time before we're together again.",
         '{#f/6}{#v/0}* Try a little harder next time, and maybe...',
         "{#f/5}{#v/0}* You'll get to see something new.",
         '{#f/11}{#v/0}* Until we meet again...'
      ],
      endtwinklyB3: [
         '{#f/8}{#v/0}* If you had just killed ONE more monster...',
         "{#f/9}{#v/0}* Well, maybe I shouldn't reveal my plans this early.",
         '{#f/7}{#v/0}* You know, $(name)...',
         "{#f/5}{#v/0}* It's only a matter of time before we're together again.",
         '{#f/6}{#v/0}* Try a little harder next time, and maybe...',
         "{#f/5}{#v/0}* You'll get to see something new.",
         '{#f/11}{#v/0}* Until we meet again...'
      ],
      endtwinklyBA: () => [
         SAVE.data.n.state_wastelands_napstablook === 5
            ? '{#p/twinkly}{#f/6}{#v/0}* So you made it through without killing anyone.'
            : '{#p/twinkly}{#f/6}{#v/0}* So you spared the life of everyone you came across.',
         '{#f/5}{#v/0}* I bet you feel really great.',
         '{#f/2}{#v/1}* But what will you do if you meet a serial murderer?',
         "{#f/9}{#v/0}* You'll die, and you'll die, and you'll die...",
         "{#f/5}{#v/0}* Eventually, you'll tire of trying.",
         '{#f/11}{#v/0}* What then, huh?',
         '{#f/2}{#v/1}* Will you KILL out of frustration?',
         '{#f/14}{#v/1}* Or will you simply GIVE UP?',
         '{#f/11}{#v/0}* Hee hee hee...',
         '{#f/7}{#v/0}* This is gonna be SO much fun.',
         "{#f/9}{#v/0}* I'll be watching!"
      ],
      endtwinklyBB1: () => [
         SAVE.data.b.w_state_lateleave
            ? "{#p/twinkly}{#f/6}{#v/0}* So you managed to stay out of a few measly people's way."
            : '{#p/twinkly}{#f/6}{#v/0}* So you spared the life of a few measly people.',
         '{#f/11}{#v/0}* But what about the others, huh?',
         '{#f/7}{#v/0}* Froggit, Flutterlyte, Gelatini, Silente, Oculoux, Mushy...',
         "{#f/6}{#v/0}* Don'tcha think any of them have families?",
         "{#f/8}{#v/0}* Don'tcha think any of them have friends?",
         "{#f/5}{#v/0}* Each one could've been someone else's Toriel.",
         '{#f/5}{#v/0}* ...',
         '{#f/7}{#v/0}* Selfish brat.',
         '{#f/0}{#v/1}* Monsters are dead because of you.'
      ],
      endtwinklyBB2: () => [
         SAVE.data.b.w_state_lateleave
            ? "{#p/twinkly}{#f/6}{#v/0}* So you managed to stay out of one person's way."
            : '{#p/twinkly}{#f/6}{#v/0}* So you spared the life of a single person.',
         '{#f/11}{#v/0}* But what about everyone else, huh?',
         '{#f/7}{#v/0}* Froggit, Flutterlyte, Gelatini, Silente, Oculoux, Mushy...',
         "{#f/0}{#v/0}* They're all gone now.",
         "{#f/11}{#v/0}* What's Toriel gonna do when she finds out, huh?",
         '{#f/2}{#v/1}* What if she KILLS herself out of grief?',
         "{#f/11}{#v/0}* If you think you're saving her just by SPARING her...",
         "{#f/7}{#v/0}* Then you're even dumber than I thought.",
         '{#f/9}* Well, see ya!'
      ],
      endtwinklyBB3: () => [
         SAVE.data.b.w_state_lateleave
            ? "{#p/twinkly}{#f/6}{#v/0}* So you managed to stay out of almost everyone's way."
            : '{#p/twinkly}{#f/6}{#v/0}* So you spared the life of almost everyone.',
         SAVE.data.b.w_state_lateleave
            ? '{#p/twinkly}{#f/11}{#v/0}* But what about the one you DID get in the way of, huh?'
            : "{#p/twinkly}{#f/11}{#v/0}* But what about the one you DIDN'T spare, huh?",
         '{#f/7}{#v/0}* Froggit, Flutterlyte, Gelatini, Silente, Oculoux, Mushy...',
         "{#f/6}{#v/0}* Don'tcha think any of them have families?",
         "{#f/8}{#v/0}* Don'tcha think any of them have friends?",
         "{#f/5}{#v/0}* The one you killed could've been someone else's Toriel.",
         '{#f/5}{#v/0}* ...',
         '{#f/7}{#v/0}* Selfish brat.',
         "{#f/0}{#v/1}* Someone's dead because of you."
      ],
      endtwinklyBC: [
         "{#p/twinkly}{#f/5}{#v/0}* I'm sure you're well aware of that, though...",
         "{#f/6}{#v/0}* Considering you've already killed Toriel once before.",
         "{#f/7}{#v/0}* Ain't that right, brat?",
         '{#f/2}{#v/1}* You MURDERED her.',
         "{#f/7}{#v/0}* And then, you felt bad...\n* Ain't that right?",
         '{#f/7}{#v/0}* Hee hee hee...',
         "{#f/11}{#v/0}* Do you think you're the only one with that power?",
         '{#f/6}{#v/0}* The power to reshape the universe, purely by your determination...',
         '{#f/8}{#v/0}* The power to SAVE...',
         '{#f/7}{#v/0}* That used to be MY power, you know.',
         '{#f/6}{#v/0}* Seems YOUR desires for this world override MINE.',
         '{#f/5}{#v/0}* Well then.\n* Enjoy that power while you can.',
         "{#f/9}{#v/0}* I'll be watching!"
      ],
      endtwinklyC: [
         '{#f/7}{#v/0}* After all, this used to be MY power.',
         '{#f/6}{#v/0}* The power to reshape the universe, purely by your determination...',
         '{#f/8}{#v/0}* The power to SAVE...',
         '{#f/6}{#v/0}* I thought I was the only one who could do that.',
         '{#f/6}{#v/0}* Seems YOUR desires for this world override MINE.',
         '{#f/5}{#v/0}* Well then.\n* Enjoy that power while you can.',
         "{#f/9}{#v/0}* I'll be watching!"
      ],
      endtwinklyD: [
         "{#p/twinkly}{#f/11}{#v/0}* You're one hell of a tease, huh?",
         '{#f/8}{#v/0}* Beating monsters to the brink of death, only to let them go...',
         "{#f/7}{#v/0}* What will you do if a monster doesn't WANT your mercy?",
         '{#f/6}{#v/0}* Will you snuff the light out of their eyes?',
         '{#f/5}{#v/0}* Or will you realize your faulty "pacifism" is for nothing?',
         '{#f/11}{#v/0}* Hee hee hee...',
         '{#f/7}{#v/0}* This is gonna be SO much fun.',
         "{#f/9}{#v/0}* I'll be watching!"
      ],
      endtwinklyE: [
         "{#p/twinkly}{#f/7}{#v/0}* Wow, you're utterly repulsive.",
         '<26>{#f/11}{#v/0}* You got by peacefully...',
         "{#f/5}{#v/0}* Then, you figured that wasn't good enough for you.",
         '{#f/2}{#v/1}* So you KILLED her just to see what would happen.',
         '{#f/7}{#v/0}* Hee hee hee...',
         '{#f/0}{#v/0}* You did it out of BOREDOM.'
      ],
      endtwinklyEA: ["{#f/11}{#v/0}* Don't think I don't know how this works..."],
      endtwinklyEB: ["{#f/6}{#v/0}* It's sad, though..."],
      endtwinklyF: ['{#p/twinkly}{#f/11}{#v/0}* Look at you, playing with her life like this...'],
      endtwinklyFA: ['{#f/7}{#v/0}* Killing her, leaving her, killing her again...'],
      endtwinklyFB: ['{#f/7}{#v/0}* Leaving her, killing her, leaving her again...'],
      endtwinklyFXA: [
         "{#f/11}{#v/0}* It's fun, isn't it?",
         '{#f/6}{#v/0}* Endlessly toying with the lives of others...',
         '{#f/8}{#v/0}* Watching how they react to every possible decision...',
         "{#f/11}{#v/0}* Isn't it thrilling?",
         '{#f/7}{#v/0}* Hee hee hee...',
         "{#f/9}{#v/0}* I wonder what you'll do next.",
         "{#f/5}{#v/0}* I'll be watching..."
      ],
      endtwinklyG: [
         "{#p/twinkly}{#f/10}{#v/0}* You just can't get enough, can you~",
         '{#f/11}{#v/0}* How many more times will you KILL her, eh?',
         '{#f/7}{#v/0}* Hee hee hee...',
         '{#f/0}{#v/1}* You kinda remind me of myself.',
         '{#f/9}{#v/0}* Well, cya!'
      ],
      endtwinklyG1: [
         '{#p/twinkly}{#f/6}{#v/0}* Again?\n* Golly...',
         '{#f/0}{#v/1}* You REALLY remind me of myself.'
      ],
      endtwinklyG2: [
         '{#p/twinkly}{#f/6}{#v/0}* Again!?',
         "{#f/8}{#v/0}* Wow, you're even worse than I thought."
      ],
      endtwinklyH: () => [
         SAVE.data.b.w_state_lateleave
            ? "{#p/twinkly}{#f/5}{#v/0}* So you've finally gotten by peacefully, huh?"
            : "{#p/twinkly}{#f/5}{#v/0}* So you've finally decided to show mercy, huh?",
         '{#f/5}{#v/0}* And after all that KILLING...',
         '{#f/11}{#v/0}* Say, was this your idea all along?',
         '{#f/2}{#v/1}* To get a rush out of her death, then spare her once you got bored?',
         '{#f/7}{#v/0}* Hee hee hee...',
         '{#f/11}{#v/0}* What a saint you must think you are.',
         "{#f/5}{#v/0}* But hey, it's not as if I don't know how this works..."
      ],
      endtwinklyI: [
         '{#p/twinkly}{#f/11}{#v/0}* Hee hee hee...',
         '{#f/7}{#v/0}* I hope you like your choice.',
         "{#f/9}{#v/0}* I mean, it's not as if you can go back and change fate.",
         "{#f/0}{#v/1}* In this world, it's KILL or BE killed.",
         '{#f/5}{#v/0}* That old woman thought she could break the rules.',
         '{#f/8}{#v/0}* She tried so hard to save you humans...',
         "{#f/6}{#v/0}* But when it came down to it, she couldn't even save herself."
      ],
      endtwinklyIX: [
         '{#p/twinkly}{#f/11}{#v/0}* Hee hee hee...',
         '{#f/11}{#v/0}* So you finally caved in and killed someone, huh?',
         '{#f/7}{#v/0}* Well, I hope you like your choice.',
         "{#f/9}{#v/0}* I mean, it's not as if you can go back and change fate.",
         "{#f/0}{#v/1}* In this world, it's KILL or BE killed.",
         "{#f/8}{#v/0}* ... what's wrong?\n* Did she not last as long as you thought?",
         '<26>{#f/6}{#v/0}* Oh, how terrible.\n* Guess not everyone can be beat into submission.'
      ],
      endtwinklyIA: ['{#f/11}{#v/0}* What an idiot!'],
      endtwinklyIAX: ['{#f/7}{#v/0}* What a shame for her.'],
      endtwinklyIB: ['{#f/6}{#v/0}* As for you...'],
      endtwinklyJ: [
         '{#p/twinkly}{#f/6}{#v/0}* Wow.',
         '{#f/7}{#v/0}* And here I thought you were the righteous one for showing mercy.',
         '{#f/11}{#v/0}* Hah!\n* What a joke.',
         '{#f/6}{#v/0}* ...',
         '{#f/6}{#v/0}* How did it feel to finally satisfy your violent side?',
         '{#f/7}{#v/0}* Hee hee hee...',
         "{#f/0}{#v/1}* I bet it felt GOOD, didn't it?",
         '{#f/11}{#v/0}* I mean, I should know...'
      ],
      endtwinklyK: [
         '{#p/twinkly}{#f/5}{#v/0}* Nice to see you again.',
         "{#f/6}{#v/0}* By the way, you're the most boring person in the galaxy.",
         '{#f/12}{#v/0}* Getting by peacefully, then going back just to do it again?',
         '{#f/8}{#v/0}* Come on...',
         "{#f/2}{#v/1}* You know as well as I do that it's KILL or BE killed."
      ],
      endtwinklyK1: [
         "{#p/twinkly}{#f/6}* Aren't you getting tired of this?",
         '{#f/8}{#v/0}* Come on...',
         '{#f/2}{#v/1}* You KNOW deep down that part of you wants to hurt her.',
         "{#f/14}{#v/1}* A few good hits, and she'd be dead before your very eyes.",
         "{#f/11}{#v/0}* Wouldn't that be exciting?",
         '{#f/6}{#v/0}* ...',
         '{#f/8}{#v/0}* ...',
         '{#f/7}{#v/0}* See ya, idiot.'
      ],
      endtwinklyK2: [
         '{#p/twinkly}{#f/8}{#v/0}* Are you doing this just to see how I react?',
         '{#f/6}{#v/0}* Is that what this is about?',
         "{#f/7}{#v/0}* Well, don't expect to get anything else outta me.",
         '{#f/6}{#v/0}* All this boring pacifism is getting tiresome.',
         '{#f/11}{#v/0}* Now, if something more interesting were to happen...',
         "{#f/9}{#v/0}* Perhaps I'd be more inclined to talk.",
         '{#f/6}{#v/0}* ...',
         '{#f/8}{#v/0}* ...',
         '{#f/7}{#v/0}* See ya, idiot.'
      ],
      endtwinklyKA: [
         "{#f/7}{#v/0}* Sooner or later, you'll be forced to realize that.",
         '{#f/11}{#v/0}* And when that time comes...',
         "{#f/5}{#v/0}* Well, let's just say I'm interested to see what happens.",
         '{#f/11}{#v/0}* Hee hee hee...',
         '{#f/9}{#v/0}* Good luck!'
      ],
      endtwinklyKB: [
         '{#f/11}{#v/0}* Hee hee hee...',
         "{#f/7}{#v/0}* Maybe that's why you killed that one monster.",
         '{#f/8}{#v/0}* I mean, you went almost the whole way without killing anyone...',
         '{#f/6}{#v/0}* But somewhere along the line, you screwed up.',
         '{#f/5}{#v/0}* All that good karma you had went straight down the toilet.',
         "{#f/11}{#v/0}* Golly, you can't do anything right!",
         '{#f/11}{#v/0}* What a joke!'
      ],
      endtwinklyKC: [
         '{#f/11}{#v/0}* Hee hee hee...',
         "{#f/7}{#v/0}* Maybe that's why you killed those other monsters.",
         '{#f/8}{#v/0}* I mean, you had a good run, but...',
         "{#f/6}{#v/0}* What's the point in mercy if it doesn't mean anything?",
         '{#f/7}{#v/0}* And believe me, after you did what you did...',
         "{#f/2}{#v/1}* It doesn't mean JACK.",
         '{#f/6}{#v/0}* ...',
         '{#f/8}{#v/0}* ...',
         '{#f/7}{#v/0}* See ya, idiot.'
      ],
      endtwinklyKD: [
         "{#f/11}{#v/0}* What's wrong with killing Toriel, huh?\n* Too good for that?",
         '{#f/7}{#v/0}* Hee hee hee...',
         "{#f/2}{#v/1}* I know you're still rotten to the core.",
         '{#f/11}{#v/0}* I mean, you managed to take out everyone in your path...',
         '{#f/6}{#v/0}* But when it came to the final hurdle, you failed.',
         "{#f/11}{#v/0}* Golly, you can't do anything right!",
         '{#f/11}{#v/0}* What a joke!'
      ],
      endtwinklyL: [
         '{#p/twinkly}{#f/6}{#v/0}* Back again, huh?\n* Golly...',
         "{#f/8}{#v/0}* You've changed the timeline around so much...",
         "{#f/6}{#v/0}* I don't even know what to think now.",
         '{#f/8}{#v/0}* Are you good?\n* Evil?\n* Just curious?',
         '{#f/6}{#v/0}* I dunno.',
         '{#f/5}{#v/0}* There is one thing, though...',
         "{#f/5}{#v/0}* One thing I KNOW you haven't done yet.",
         '{#f/11}{#v/0}* Hee hee hee...',
         "{#f/7}{#v/0}* That's right.",
         "{#f/7}{#v/0}* You haven't killed everyone here in one run yet.",
         "{#f/11}{#v/0}* Aren't you at least a LITTLE curious?",
         '{#f/8}{#v/0}* Come on, $(name)...',
         "{#f/5}{#v/0}* I know you're in there somewhere."
      ],
      endtwinklyL1: [
         '{#p/twinkly}{#f/6}{#v/0}* Well well, we meet again.',
         '{#f/8}{#v/0}* How many times is this now?',
         "{#f/6}{#v/0}* Whatever.\n* Doesn't matter.",
         '{#f/6}{#v/0}* You KNOW what you have to do, $(name).',
         '{#f/8}{#v/0}* ...',
         "{#f/5}{#v/0}* I'll be waiting."
      ],
      exit1: [
         '{#p/toriel}{#f/13}* You wish to return "home," do you not?',
         '{#f/9}* ...',
         '{#f/9}* If you leave here, I will not be able to protect you.',
         '{#f/9}* I will not be able to save you from the dangers that lie ahead.',
         '{#f/13}* So, please, little one...',
         '{#f/9}* Go back the other way.'
      ],
      exit2: [
         '{#p/toriel}{#f/13}* Every human that ends up here meets the same fate.',
         '{#f/9}* I have seen it repeat time and time again.',
         '{#f/13}* They come.',
         '{#f/13}* They leave.',
         '{#f/9}* ... they die.',
         '{#f/13}* My child...',
         '{#f/13}* If you leave the Outlands...',
         '{#f/9}* They...\n* {@fill=#f00}ASGORE{@fill=#fff}...\n* Will take your SOUL.'
      ],
      exit3: [
         '{#p/toriel}{#f/9}* ...',
         '{#f/13}* I did not want to say this, but...',
         '{#f/11}* I cannot allow you to continue this way.',
         '{#f/9}* For your own sake, child...',
         '{#f/9}* Do not follow me into the next room.'
      ],
      exit4: [
         '{#p/toriel}{#p/toriel}{#f/13}* ...',
         '{#f/10}* ... of course.',
         '{#f/9}* Perhaps it was always meant to come to this.',
         '{#f/9}* Perhaps I was foolish to think you would be any different.',
         '{#f/9}* ...',
         '{#f/13}* I am afraid there is little choice now.',
         '{#f/13}* Forgive me, my child...',
         '{#f/11}* But I cannot allow you to leave.'
      ],
      exitfail1: (lateleave: boolean, sleep: boolean) =>
         world.postnoot
            ? [
               [
                  sleep
                     ? "{#p/twinkly}{#f/19}* After you sleep at Mommy's house, she goes out for groceries."
                     : "{#p/twinkly}{#f/19}* After you run back to Mommy's house, she goes out for groceries.",
                  '{#x1}* But... oh no!\n* The taxi she was in exploded, killing her instantly!',
                  '* Golly, I wonder how such an awful thing could have happened.',
                  '{*}{#x2}* ...',
                  "{*}{#f/7}* Sorry, $(name).\n* Guess your happy ending won't be so easy."
               ],
               [
                  sleep
                     ? "{#p/twinkly}{#f/19}* After you sleep at Mommy's house, she goes out for groceries."
                     : "{#p/twinkly}{#f/19}* After you run back to Mommy's house, she goes out for groceries.",
                  '{#x1}* But... oh no!\n* A talking star appears and tortures her to death!',
                  "* Golly, that's an even worse outcome than last time!",
                  '{*}{#x2}* ...',
                  "{*}{#f/6}* We've don't have time for this, $(name).\n* Get back on track."
               ],
               [
                  '{*}{#p/twinkly}{#f/5}* Come on, $(name)...',
                  sleep
                     ? "{*}{#f/7}* Do you really think I'm gonna let you avoid me THAT easily?"
                     : "{*}{#f/7}* Do you really think I'm gonna let you run away from me THAT easily?"
               ],
               ['{*}{#p/twinkly}{#f/6}* We can do this all day.'],
               ['{*}{#p/twinkly}{#f/8}* ...']
            ][Math.min(SAVE.flag.n.postnoot_exitfail++, 4)]
            : [
               sleep
                  ? "{#p/basic}* After you sleep at Toriel's home, she destroys the bridge to the outpost."
                  : "{#p/basic}* After you return to Toriel's home, she destroys the bridge to the outpost.",
               ...(outlandsKills() > 10
                  ? [
                     "* Time goes by, and Toriel soon finds out about the monsters you've killed.",
                     '* Her hopes shattered, and with nothing left to lose, she...',
                     '* ...',
                     '* ... m-meanwhile, the remaining outpost residents await salvation...'
                  ]
                  : outlandsKills() > 5 || SAVE.data.n.bully_wastelands > 5
                     ? [
                        '* Time goes by, and Toriel does her best to care for you.',
                        '* Reading books, baking pies...',
                        '* Tucking you snugly into bed, each and every night...',
                        ...(lateleave
                           ? ['* ... despite her fear that you may try to run away again.']
                           : ["* ... despite those who've gone missing."]),
                        '* All the while, the outpost residents await salvation...'
                     ]
                     : [
                        '* Time goes by, and Toriel does her best to care for you.',
                        '* Reading books, baking pies...',
                        '* Tucking you snugly into bed, each and every night...',
                        ...(lateleave
                           ? ['* And hugging you so tightly that you never ever try to run away again.']
                           : ['* And all the hugging you could ever hope for.']),
                        '* All the while, the outpost residents await salvation...'
                     ]),
               '* ... from a human that may never reach them.',
               '* Is this truly the outcome you had hoped for?',
               '* Is this truly what they deserve?'
            ],
      food: () => [
         ...(SAVE.data.n.state_wastelands_mash === 2
            ? [
               '{#p/toriel}{#f/1}* Sorry for the wait...',
               '{#f/3}* It seems that little white dog has raided my kitchen again.',
               '{#f/4}* You should see the state of that pie...',
               '<26>{#f/0}* But anyhoo.\n* I have prepared a plate of fried snails for you.'
            ]
            : ['{#p/toriel}* Breakfast is ready!', '<26>* I have prepared a plate of fried snails for you.']),
         '{#f/1}* I will leave them here on the table...'
      ],
      fridgetrap: {
         a: () =>
            SAVE.data.b.svr
               ? []
               : world.darker
                  ? ["{#p/basic}* You wouldn't like what's in the fridge."]
                  : ['{#p/basic}* There is a brand-name chocolate bar in the fridge.'],
         b: () => [
            ...(SAVE.data.b.svr ? [] : ['{#p/basic}* ...', '* Do you want it?']),
            choicer.create('* (Take the Chocolate Bar?)', 'Yes', 'No')
         ],
         b1: ['{#p/human}* (You decide not to take anything.)'],
         b2: () => [
            '{#p/human}* (You got the Chocolate Bar.)',
            ...(SAVE.data.b.svr ? ['{#p/asriel1}{#f/17}* Ah... chocolate.', '{#p/asriel1}{#f/13}* ...'] : [])
         ],
         c: () =>
            SAVE.data.b.svr
               ? [
                  '{#p/human}* (But there was nothing left to find within.)',
                  ...[
                     [
                        '{#p/asriel1}{#f/23}* Oh... $(name) ALWAYS used to root around in the fridge.',
                        '{#f/13}* They thought, if they dug deep enough...',
                        '{#f/13}* Another bar of chocolate would reveal itself inside.',
                        '{#f/17}* ... how silly.'
                     ],
                     ['{#p/asriel1}{#f/20}* That was before the chocolate replicator was installed.']
                  ][Math.min(asrielinter.fridgetrap_c++, 1)]
               ]
               : ['{#p/basic}* The chocolate bar has already been taken.'],
         d: ["{#p/human}* (You're carrying too much.)"]
      },
      front1: [
         '{#p/toriel}{#f/1}* ... and you want to play one of your songs?',
         '{#f/0}* Alright, I will see what I can do.'
      ],
      front1x: ['{#p/toriel}{#f/1}* ... hello?'],
      front2: () => [
         ...(world.postnoot
            ? [
               '{#p/toriel}{#f/2}* Up already!?',
               '{#f/1}* You were not asleep for very long...',
               '{#f/5}* ...',
               world.nootflags.has('toriel') // NO-TRANSLATE
                  ? '{#f/1}* The atmospheric system still does not seem to be fixed.'
                  : '{#f/1}* The atmospheric system seems to be malfunctioning.',
               '{#f/1}* If you begin to feel weak, do not hesitate to return to bed.',
               '<26>{#f/0}* ... anywho.'
            ]
            : [
               '{#p/toriel}{#f/2}* How long have you been standing there!?',
               '{#f/5}* ...',
               '{#f/0}* I suppose it matters not.'
            ]),
         '{#f/0}* Napstablook, a visitor here, has offered to play their music.',
         '{#f/0}* In fact, they invited you specifically to be with them on stage!',
         '{#f/1}* Would you like to visit the activities room to see them?',
         ...(SAVE.data.n.state_wastelands_mash === 1
            ? [
               '{#f/3}* Oh, and, I apologize about the state of the pie.',
               '{#f/4}* It seems that little white dog has raided my kitchen again...'
            ]
            : 3 <= SAVE.data.n.cell_insult
               ? [
                  '{#f/5}* Oh, and, I apologize about the state of the pie.',
                  '{#f/9}* I did my best to try and salvage it...'
               ]
               : []),
         choicer.create("* (See Napstablook's show?)", 'Yes', 'No')
      ],
      front2a: ['{#p/toriel}{#f/0}* Wonderful!\n* I will let them know you are coming.'],
      front2b: ['{#p/toriel}{#f/5}* ...', '{#p/toriel}{#f/5}* I will be in the living room if you need me.'],
      front3: () => [
         ...(world.postnoot
            ? [
               '{#p/toriel}{#f/0}* Oh, hello, little one.\n* You are up early.',
               '{#f/1}* Are you sure you slept for a long enough time?',
               '{#f/5}* ...',
               world.nootflags.has('toriel') // NO-TRANSLATE
                  ? '{#f/1}* The atmospheric system still does not seem to be fixed.'
                  : '{#f/1}* The atmospheric system seems to be malfunctioning.',
               '{#f/1}* If you begin to feel weak, do not hesitate to return to bed.',
               '<26>{#f/0}* ... aside from that...'
            ]
            : ['{#p/toriel}* Good morning, little one.']),
         ...(SAVE.data.n.state_wastelands_mash === 1
            ? [
               '{#f/3}* It seems that little white dog has raided my kitchen again.',
               '{#f/4}* You should see the state of that pie...',
               '{#f/0}* Still, I have done my best to salvage it for you.'
            ]
            : ['{#f/1}* The stars do look pretty today, do they not?']),
         '{#f/5}* ...',
         '{#f/5}* I will be in the living room if you need me.'
      ],
      front4: () => [
         ...(world.postnoot
            ? [
               '{#p/toriel}{#f/0}* Oh, hello, little one.\n* You are up early.',
               '{#f/1}* Are you sure you slept for a long enough time?',
               '{#f/5}* ...',
               world.nootflags.has('toriel') // NO-TRANSLATE
                  ? '{#f/1}* The atmospheric system still does not seem to be fixed.'
                  : '{#f/1}* The atmospheric system seems to be malfunctioning.',
               '{#f/1}* If you begin to feel weak, do not hesitate to return to bed.'
            ]
            : ['{#p/toriel}* Good morning, little one.']),
         '{#f/5}* ...',
         ...(world.bullied
            ? [
               '* The Outlands have been unusually noisy today.',
               '* It seems a bully has been going around and causing trouble...',
               '* It would be best not to stray too far.'
            ]
            : [
               '* The Outlands have been unusually silent today.',
               '* I tried calling someone just now, but...',
               '* Nothing.'
            ]),
         ...(SAVE.data.n.state_wastelands_mash === 1
            ? [
               world.bullied
                  ? '<26>{#f/3}* In other news, that little white dog has raided my kitchen again.'
                  : '{#f/3}* Apart from the little white dog raiding my kitchen, that is.',
               '{#f/4}* You should see the state of that pie...',
               '{#f/0}* Still, I have done my best to salvage it for you.',
               '{#f/1}* I hope you like it...'
            ]
            : world.bullied || (16 <= outlandsKills() && SAVE.flag.n.genocide_twinkly < resetThreshold())
               ? []
               : ['{#f/1}* It is rather worrying...']),
         '{#f/0}* Anyhoo, I will be in the living room if you need me.'
      ],
      goodbye1a: ['{#p/toriel}{#f/10}* ...', '{#f/20}{|}* Come here- {%}'],
      goodbye1b: ['{#p/toriel}{#f/9}* ...', '{#f/19}{|}* Come here- {%}'],
      goodbye2: [
         '{#p/toriel}{#f/5}* I am sorry for what I have put you through, little one.',
         '{#f/9}* I should have known that I could not keep you here forever.',
         '{#f/5}* ... still, if you ever need someone to talk to...',
         '{#f/1}* Feel free to call me at any time.',
         '{#f/0}* As long as my phone can reach you, I will be there to pick up.'
      ],
      goodbye3: [
         '{#p/toriel}{#f/5}* I am sorry for what I have put you through, little one.',
         '{#f/9}* I should have known that I could not keep you here forever.',
         '{#f/10}* ...',
         '{#f/14}* Be good, alright?'
      ],
      goodbye4: ['{#p/toriel}{#f/1}* Be good, alright?'],
      goodbye5a: [
         '{#p/toriel}{#f/5}* ... hmm?\n* You changed your mind?',
         '{#f/9}* ...',
         '{#f/10}* Perhaps you really are different from the others.',
         '{#f/0}* ... well then.',
         '{#f/0}* I will finish up here, and meet you back at the house.',
         '{#f/0}* Thank you for listening, my child.',
         '{#f/0}* It means a lot to me.'
      ],
      goodbye5b: [
         '{#p/toriel}{#f/5}* ... hmm?\n* You changed your mind?',
         '{#f/10}* ...\n* Forgive me, my child.',
         '{#f/9}* I might have lost it there for a moment.',
         '{#f/0}* ... no matter.',
         '{#f/0}* I will finish up here, and meet you back at the house.',
         '{#f/0}* Thank you for listening, my child.',
         '{#f/0}* It means a lot to me.'
      ],
      halo: {
         a: ['{#p/human}* (You got the Halo.)', choicer.create('* (Equip the Halo?)', 'Yes', 'No')],
         b: ["{#p/human}* (You're carrying too much to take that.)"]
      },
      indie1: () => [
         ...([1, 5].includes(SAVE.data.n.state_wastelands_dummy) && SAVE.data.b.w_state_riddleskip
            ? [
               '{#p/toriel}{#f/5}* Teaching you thus far has been difficult, but...',
               '{#f/5}* Perhaps this exercise will help.'
            ]
            : ['<26>{#p/toriel}* Alright.\n* It is time for your third and final lesson.']),
         '{#f/1}* Do you think you can make it to the end of this room...',
         '{#f/1}* ... all by yourself?',
         choicer.create('* (What do you say?)', 'Yes', 'No')
      ],
      indie1a: [
         '{#p/toriel}{#f/1}* Are you sure...?',
         '{#f/0}* It is only a short distance away.',
         choicer.create('* (Change your mind?)', 'Yes', 'No')
      ],
      indie1b: [
         '{#p/toriel}{#f/5}* My child.',
         '{#f/1}* It IS important to do things on your own, is it not?',
         choicer.create('* (Change your mind?)', 'Yes', 'No')
      ],
      indie2a: ['{#p/toriel}{#f/1}* Alright...', '{#f/0}* Good luck!'],
      indie2b: ['{#p/toriel}{#f/5}* ...', '{#f/9}* ... I see.'],
      indie2b1: [
         '{#p/toriel}{#f/10}* Worry not, my child.',
         '{#f/1}* If you truly do not wish to leave my side...',
         '{#f/0}* I will guide you through the remainder of the Outlands.',
         '{#f/5}* ...',
         '{#f/5}* Take my hand, young one...',
         '{#f/5}* It is time to go home.'
      ],
      indie2f: ['{#p/human}{#s/equip}* (You got the CELL.)'],
      indie3a: ['{#p/toriel}* You did it!'],
      indie3b: [
         '{#p/toriel}{#f/3}* My child, what took you so long!?',
         '{#f/4}* Did you get lost?',
         '{#f/1}* ...\n* You DO seem alright...'
      ],
      indie4: () => [
         ...([1, 5].includes(SAVE.data.n.state_wastelands_dummy) && SAVE.data.b.w_state_riddleskip
            ? [
               '{#f/0}* I must admit, I am surprised you made it to the end.',
               '{#f/3}* Your behavior thus far has left me asking...',
               '{#f/4}* ... have you been attempting to mess with me this whole time?',
               '{#f/23}* To be blunt, I do not have time for such pointless riffraff.'
            ]
            : [
               '{#p/toriel}{#f/0}* Do not worry.\n* You were never in any real danger.',
               '{#f/0}* This was merely a test of your independence!',
               '{#f/1}* In truth, my child...'
            ]),
         '{#f/5}* There are important errands I must run.',
         '{#f/0}* While I am away, I expect you to be on your best behavior.',
         '{#f/1}* The puzzles ahead are yet to be explained, and...',
         '{#f/0}* Leaving the room on your own may prove to be dangerous.',
         '{#f/10}* Here.\n* Take this CELL phone.',
         '{#p/human}{#s/equip}* (You got the CELL.)',
         ...([1, 5].includes(SAVE.data.n.state_wastelands_dummy) && SAVE.data.b.w_state_riddleskip
            ? [
               '{#p/toriel}{#f/1}* If you need anything while I am away, please...',
               '{#f/0}* Do not hesitate to call me.',
               '{#f/5}* ...',
               '<26>{#f/23}* And stay out of trouble.'
            ]
            : [
               '{#p/toriel}{#f/1}* If you need anything while I am away, please...',
               '{#f/0}* Do not hesitate to call me.',
               '{#f/5}* ...',
               '{#f/1}* Be good, alright?'
            ])
      ],
      indie5: [
         [
            '{#s/phone}{#p/event}* Ring, ring...',
            '{#p/toriel}* Hello!\n* This is Toriel.',
            '* My errands are taking longer than I thought they would.',
            '* You must wait a little longer.',
            '{#f/1}* Thank you for being patient, my child...',
            '{#f/0}* You are very good.'
         ],
         [
            '{#s/phone}{#p/event}* Ring, ring...',
            '{#p/toriel}* Hello...\n* This is Toriel.',
            '{#f/1}* I found what I was looking for...',
            '{#f/0}* But a small, white puppy snatched it away!\n* How odd.',
            '{#f/1}* Do dogs even like flour?',
            '{#f/0}* Err, that is an unrelated question, of course.',
            '* It will take a little longer for me to return.',
            '{#f/1}* Thank you again for being so patient...'
         ],
         [
            '{#s/phone}{#p/event}* Ring, ring...',
            '{#p/basic}* (...)',
            '{#p/human}* (You hear heavy panting on the other end of the phone.)',
            '{#s/bark}{#p/event}* Bark!\n{#s/bark}* Bark!',
            '{#p/human}* (You hear a distant voice.)',
            '{#p/toriel}{#f/2}* Stop, please!',
            '{#s/bark}{#p/event}* Bark!\n{#s/bark}* Bark!',
            '{#p/toriel}{#f/1}* Come back here with my cell phone!'
         ],
         [
            '{#s/phone}{#p/event}* Ring, ring...',
            '{#p/basic}* (...)',
            '{#p/human}* (It sounds like a small, white dog is sleeping on the phone.)',
            '{#p/basic}* (Snore... snore...)',
            '{#p/human}* (You hear a distant voice.)',
            '{#p/toriel}{#f/1}* Hellooo?\n* Little puppy...?',
            '{#f/1}* Where are youuu?',
            '{#f/0}* I will give you a nice pat on the head!',
            '{#p/human}* (The snoring stops.)',
            '{#p/toriel}* ... if you return with my cell phone.',
            '{#p/human}* (The snoring resumes.)'
         ],
         [
            '{#s/phone}{#p/event}* Ring, ring...',
            '{#p/basic}* (...)',
            '{#p/basic}* (Achoo!)',
            '{#p/human}* (It sounds like a small, white dog sneezing in its sleep.)',
            '* (You hear a distant voice.)',
            '{#p/toriel}{#f/1}* Aha!\n* I heard that, you little white dog...',
            '{#f/6}* Now I am going to find you!',
            '{#p/human}* (The snoring stops.)\n* (The dog now seems to be on the run from something.)',
            '{#p/toriel}{#f/8}* Hee hee, there is no escape!'
         ],
         [
            '{#s/phone}{#p/event}* Ring, ring...',
            '{#p/human}* (You hear a distant voice.)',
            '{#p/toriel}{#f/1}* Hello...\n* This is... Toriel...',
            '{#s/bark}{#p/event}* Bark!\n* Bark!',
            '{#p/toriel}{#f/2}* No, bad puppy!',
            '{#p/basic}* (Whimper... whimper...)',
            '{#p/toriel}* There, there...\n* I will find another cell phone for you.',
            '{#f/1}* Would that be alright?',
            '{#p/basic}* (...)',
            '{#s/bark}{#p/event}* Bark!',
            '{#p/toriel}* Glad to hear it.',
            '{#p/human}* (The dog could be heard walking away.)',
            '{#p/toriel}* Please, forgive me for all of this nonsense.',
            '{#f/1}* I will be back to pick you up shortly...'
         ]
      ],
      indie6: (early: boolean) => [
         '{#s/phone}{#p/event}* Ring, ring...',
         ...([1, 5].includes(SAVE.data.n.state_wastelands_dummy) && SAVE.data.b.w_state_riddleskip
            ? [
               early
                  ? '{#p/toriel}{#g/torielTired}* ... already?'
                  : '{#p/toriel}{#g/torielTired}* ... feeling impatient?',
               '{#f/9}* I really should not be surprised.',
               '{#f/5}* Just remember the dangers that lie ahead of you out there...',
               '{#f/1}* It would be a shame if you got hurt.'
            ]
            : [
               '{#p/toriel}* Hello?\n* This is Toriel.',
               '{#f/1}* You have not left the room, have you?',
               '{#f/0}* There are many dangers out there, and I do not want you to get hurt.',
               '{#f/1}* Take care of yourself, alright?'
            ])
      ],
      indie7: ['{#p/basic}* A few minutes later...'],
      indie8: [
         '{#p/toriel}* I have returned!',
         '* Your patience thus far has been commendable.\n* Even I am impressed!',
         '{#f/0}* Anyhoo.\n* It is time I took you home now.',
         '{#f/1}* Please, allow me...'
      ],
      lobby_puzzle1: [
         '{#p/toriel}{#f/0}* Welcome to our humble outpost, innocent one.',
         '{#f/0}* There are many lessons that I must teach you about life here.',
         '{#f/1}* First and foremost...',
         '{#f/0}* Puzzles!',
         '{#f/0}* Allow me to perform this quick demonstration.'
      ],
      lobby_puzzle2: [
         '{#p/toriel}{#f/1}* It may seem strange to you now, but here on the outpost...',
         '{#f/0}* Solving puzzles is a part of our daily routine.',
         '{#f/0}* With time, and a little guidance, you will grow accustomed to them.'
      ],
      lobby_puzzle3: ['{#p/toriel}* When you are ready, we may proceed.'],
      loox: {
         a: [
            "{#p/basic}{#n1}* I heard you're quite flirty, for a human.",
            "* As you {@fill=#cf7fff}FLIRT{@fill=#fff} with different kinds of monsters, you'll see hearts next to their names.",
            "* The more types of monsters you {@fill=#cf7fff}FLIRT{@fill=#fff} with, the more hearts you'll have.",
            '* I wonder...',
            '* Just how far can you go?',
            '* Perhaps, my friend, you could even become... a legend.'
         ],
         b: [
            '{#p/basic}{#n1}* Hey human, have you tried flirting yet?',
            "* Ha!\n* I can tell by the look on your face that you haven't yet.",
            "* I gotta tell you, it's tons of fun.",
            "* Your enemies won't know what to do with themselves!",
            '* Psst... if you DO start flirting, I might have more to tell you.',
            '* Good luck with that!'
         ],
         c: [
            "{#p/basic}{#n1}* Hey human, now that you've started flirting...",
            '* How does it feel?',
            "* It's pretty great, right?",
            "* As you {@fill=#cf7fff}FLIRT{@fill=#fff} with different kinds of monsters, you'll see hearts next to their names.",
            "* The more types of monsters you {@fill=#cf7fff}FLIRT{@fill=#fff} with, the more hearts you'll have.",
            '* I wonder...',
            '* Just how far can you go?',
            '* Perhaps, my friend, you could even become... a legend.'
         ],
         d: [
            "{#p/basic}{#n1}* I hear you're somewhat of a bully in these parts.",
            '* Ha!\n* Join the club, pal.',
            "* You're talking to the number one bully around.",
            "* As you {@fill=#3f00ff}BULLY{@fill=#fff} different kinds of monsters, you'll see swords next to their names.",
            "* The more types of monsters you {@fill=#3f00ff}BULLY{@fill=#fff}, the more swords you'll have.",
            '* Though, as a disclaimer, not ALL monsters can be bullied.',
            "* It's like flirting... but with death.",
            '* Fun, right?'
         ],
         e: pager.create(
            0,
            () => [
               ...(30 <= SAVE.data.n.bully
                  ? [
                     "{#p/basic}{#n1}* I heard you're quite the bully around here now.",
                     "* Everyone's afraid of you, huh?"
                  ]
                  : 20 <= world.flirt
                     ? [
                        "{#p/basic}{#n1}* I heard you're quite the romantic around here now.",
                        '* Everyone loves you, huh?'
                     ]
                     : [
                        "{#p/basic}{#n1}* I heard you're quite the hero around here now.",
                        '* Everyone likes you, huh?'
                     ]),
               '* Well... personally, I think you have too much free time.'
            ],
            ['{#p/basic}{#n1}* What?\n* Am I wrong?']
         )
      },
      manana: {
         a: pager.create(
            0,
            () =>
               SAVE.data.b.napsta_performance
                  ? [
                     "{#p/basic}{#n1}* So, you're the one who co-hosted that music show, eh?",
                     "* Maybe now you'll have the means to accept my offer.",
                     "* I'm just lookin' for someone to buy this limited edition Super Starwalker comic strip.",
                     "* Now I liked that little show, so you'll get a discount.\n* 5G, take it or leave it.",
                     choicer.create('{#n1!}* (Buy the comic strip?)', 'Yes', 'No')
                  ]
                  : [
                     ...(world.postnoot
                        ? [
                           "{#p/basic}{#n1}* Hey, have you noticed anything strange goin' on around here?",
                           "* I could'a sworn all the puzzles just de-activated themselves earlier.",
                           "* Anyway, I'm lookin' for a buyer on this limited edition Super Starwalker comic strip."
                        ]
                        : [
                           '{#p/basic}{#n1}* Finally, someone speaks to me!',
                           "* I've been standin' out here for ages, and nobody's takin' my offer.",
                           "* I'm just lookin' for someone to buy this limited edition Super Starwalker comic strip."
                        ]),
                     "* Interested?\n* All I'm askin' for is 10G.",
                     choicer.create('{#n1!}* (Buy the comic strip?)', 'Yes', 'No')
                  ],
            () =>
               SAVE.data.b.napsta_performance
                  ? [
                     "{#p/basic}{#n1}* Interested in buyin' my limited edition Super Starwalker comic strip?",
                     "* All I'm askin' for is 5G.",
                     choicer.create('{#n1!}* (Buy the comic strip?)', 'Yes', 'No')
                  ]
                  : [
                     "{#p/basic}{#n1}* Interested in buyin' my limited edition Super Starwalker comic strip?",
                     "* All I'm askin' for is 10G.",
                     choicer.create('{#n1!}* (Buy the comic strip?)', 'Yes', 'No')
                  ]
         ),
         b: () => [
            "{#p/human}{#n1!}* (You don't have enough G.)",
            SAVE.data.b.napsta_performance
               ? "{#p/basic}{#n1}* I'll be honest, that don't look like 5G..."
               : "{#p/basic}{#n1}* I'll be honest, that don't look like 10G..."
         ],
         c: ['{#p/basic}{#n1}* Not interested, huh?', "* Well, that's fine.\n* I'll just find someone else..."],
         d: [
            '{#s/equip}{#p/human}{#n1!}* (You got the Super Starwalker 1.)',
            '{#p/basic}{#n1}* Splendid!\n* Enjoy the comic strip.'
         ],
         e: ['{#p/basic}{#n1}* Back again, huh?', "* Sorry bud, I've got nothin' left to sell."],
         f: [
            "{#p/human}{#n1!}* (You're carrying too much.)",
            "{#p/basic}{#n1}* Them pockets of yours are lookin' kinda full..."
         ],
         g: [
            "{#p/basic}{#n1}* I heard they're rebooting the comic franchise...",
            '* The new main character is some snake fella with sunglasses or something.',
            "* If I was in charge, I'd make a spinoff about that sidekick...",
            '* Gumbert, I think?'
         ],
         h: [
            "{#p/basic}{#n1}* Maybe now that we're free, they'll finally make that reboot they were planning.",
            "* What was it called?\n* Oh, I've already forgotten..."
         ]
      },
      mananaX: () =>
         [
            [
               '{#p/basic}{#n1}* Now what was THAT racket?',
               "{#p/basic}{#n1}* Er, sorry, my eyesight's not what it used to be..."
            ],
            ['{#p/basic}{#n1}* Huh?\n* It happened again?\n* Tch, kids these days...'],
            ['{#p/basic}{#n1}* Kids these days...']
         ][Math.min(roomKills().w_puzzle4++, 2)],
      afrogX: (k: number) =>
         [
            ["{#p/basic}{#n1}* If... if you d-do that again... I-I'm gonna have to stop you!"],
            ['{#p/basic}{#n1}* N-no...\n* Not again...']
         ][k],
      patron: {
         a: pager.create(
            0,
            () =>
               SAVE.data.n.plot === 72
                  ? 6 <= world.population
                     ? [
                        "{#p/basic}{#n1}* I'm sad.\n* They took the DJ table to use for some tacky show later.",
                        '* ... wait, that might actually be kind of cool.'
                     ]
                     : [
                        "{#p/basic}{#n1}* I'm sad.\n* The bully who came through here earlier...",
                        '* ... turned out to be you.',
                        '* You saved us in the end, but why resort to such violence along the way?'
                     ]
                  : SAVE.data.b.napsta_performance
                     ? [
                        "{#p/basic}{#n1}* I'm sad.\n* Musicians these days are way too hard on themselves...",
                        '* Personally, I really liked that tune of theirs.',
                        "* It's a shame we'll probably never get to hear it again.",
                        '{#n1!}{#n2}* At least you still have steak to keep you company, right? ;)',
                        '{#n2!}{#n1}* ... not this again.'
                     ]
                     : [
                        "{#p/basic}{#n1}* I'm sad.\n* The food these days just gets worse and worse...",
                        '* I was promised something "real," but all I got was a cheap copy.',
                        '{#n1!}{#n2}* Hey! ;)\n* Quit bad-mouthing my shop in front of the customers! ;)',
                        '* Besides, what if your sense of taste is to blame ;)',
                        '{#n2!}{#n1}* ... typical.'
                     ],
            () => [
               SAVE.data.n.plot === 72 && 6 <= world.population
                  ? "{#p/basic}{#n1}* ... it isn't what it is?"
                  : '{#p/basic}{#n1}* ... it is what it is.'
            ]
         )
      },
      pie: () =>
         3 <= SAVE.data.n.cell_insult
            ? ['{#p/human}* (You got the Burnt Pie.)']
            : SAVE.data.n.state_wastelands_mash === 1
               ? ['{#p/human}* (You got the Pie Soup.)']
               : SAVE.data.b.snail_pie
                  ? ['{#p/human}* (You got the Snail Pie.)']
                  : ['{#p/human}* (You got the Butterscotch Pie.)'],
      plot_call: {
         a: () => [
            '{#p/event}* Ring, ring...',
            3 <= SAVE.data.n.cell_insult
               ? '{#p/toriel}* Hello, child.'
               : '{#p/toriel}* Hello?\n* This is Toriel.',
            '{#f/1}* For no reason in particular...',
            '{#f/0}* Do you prefer cinnamon, or butterscotch?',
            choicer.create('* (Which do you prefer?)', 'Cinnamon', 'Bscotch'),
            3 <= SAVE.data.n.cell_insult
               ? '{#p/toriel}{#f/0}* I see.'
               : '{#p/toriel}* Oh, I see!\n* Thank you very much!'
         ],
         b: () => [
            '{#p/event}* Ring, ring...',
            3 <= SAVE.data.n.cell_insult
               ? '{#p/toriel}* Hello, child.'
               : '{#p/toriel}* Hello?\n* This is Toriel.',
            [
               '{#f/1}* You do not DISLIKE butterscotch, do you?',
               '{#f/1}* You do not DISLIKE cinnamon, do you?'
            ][SAVE.data.n.choice_flavor],
            '{#f/1}* I know what your preference is, but...',
            '{#f/1}* Would you still be satisfied if it turned up on your plate?',
            choicer.create('* (What do you say?)', 'Yes', 'No')
         ],
         b1: () => [
            3 <= SAVE.data.n.cell_insult
               ? '{#p/toriel}{#f/0}* Got it.'
               : '{#p/toriel}* Right, right, of course.',
            '{#f/1}* Carry on, then...'
         ],
         b2: () => [
            '{#p/toriel}{#f/5}* ...',
            '{#f/0}* Well then.',
            '{#f/1}* ...',
            3 <= SAVE.data.n.cell_insult
               ? '{#f/0}* I will see what I can do.'
               : '{#f/0}* I will call you back later, my child.'
         ],
         c: [
            '{#p/event}* Ring, ring...',
            '{#p/toriel}{#f/1}* You do not have any allergies, do you?',
            '{#f/5}* ...',
            '{#f/0}* Err, never mind.\n* Forget I asked!'
         ],
         d: [
            '{#p/event}* Ring, ring...',
            '{#p/toriel}{#f/1}* Hello, little one.',
            '{#f/0}* I realize now that it has been a while since I cleaned up.',
            '{#f/1}* There are likely plenty of things strewn about...',
            '{#f/0}* You may pick them up if you like, but do not try to carry too much.',
            '{#f/1}* What if you see something you really want?',
            '{#f/0}* You will want to leave room in your pockets for that.'
         ]
      },
      puzzle1A: () =>
         SAVE.data.b.svr
            ? ['{#p/human}* (The switch appears to be stuck.)']
            : ['{#p/basic}* The switch is stuck.'],
      puzzle3A: () =>
         SAVE.data.b.svr
            ? ['{#p/human}* (The switch appears to be stuck.)']
            : ['{#p/basic}* The switch is stuck.'],
      return1: () => [
         SAVE.data.n.cell_insult < 3
            ? '{#p/toriel}{#f/1}* My child, how did you get here!?'
            : '{#p/toriel}{#f/1}* Ah... there you are.',
         '* Are you alright?'
      ],
      return2a: () =>
         SAVE.data.n.cell_insult < 3
            ? ['{#p/toriel}* Not a scratch!\n* Impressive.']
            : ['{#p/toriel}{#f/10}* Not a scratch...\n* Very well.'],
      return2b: () =>
         SAVE.data.n.cell_insult < 3
            ? ['{#p/toriel}{#f/4}* You look hurt...', '{#f/10}* There, there, I will heal you.']
            : ['{#p/toriel}{#f/9}* You have been hurt.', '{#f/10}* Please, allow me to heal your injuries.'],
      return2c: [
         '{#p/toriel}{#f/3}* ...',
         '{#f/11}* Who did this to you?\n* Someone is going to answer for this.'
      ],
      return3: () => [
         '{#p/toriel}* I apologize, young one.\n* It was foolish of me to leave you on your own.',
         ...(world.postnoot
            ? [
               '{#f/1}* ... is it just me, or is something wrong with the atmosphere?',
               '{#f/5}* Perhaps the system that provides it is not functioning properly.',
               '{#f/5}* ...',
               '{#f/0}* No matter.\n* I am sure it will be resolved shortly.'
            ]
            : []),
         '{#f/1}* Come!\n* I have a surprise for you.'
      ],
      return4: () => [
         '{#p/toriel}* Welcome to my parlor!',
         ...(3 <= SAVE.data.n.cell_insult
            ? [
               '{#f/1}* Can you smell...',
               '{#p/toriel}{#f/2}* ... oh, I forgot to check the oven!',
               '{#p/toriel}{#f/5}* I have been so pre- occupied with your previous behavior, I...',
               '{#p/toriel}{#f/1}* I must take care of this now, please do not wander off!'
            ]
            : [
               '{#f/1}* Can you smell that?',
               ...(SAVE.data.b.snail_pie
                  ? ['{#f/0}* Surprise!\n* It is a homemade snail pie.']
                  : [
                     '{#f/0}* Surprise!\n* It is a butterscotch- cinnamon pie.',
                     '{#f/0}* I thought you might prefer that instead of snail pie for tonight.'
                  ]),
               '{#f/1}* Now, it has been a long time since I have cared for anyone...',
               '{#f/0}* But I still want you to have a nice time living here.',
               '{#f/0}* Follow me!\n* I have another surprise for you.'
            ])
      ],
      return5: [
         "{#p/toriel}* Would you look at that!\n* It's a room of your very own.",
         '{#f/1}* I hope you like it...'
      ],
      return6: [
         '{#p/toriel}{#f/1}* Well, I have to go check on the pie.',
         '{#f/0}* Please, make yourself at home!'
      ],
      runaway1: [
         ['{#p/toriel}{#f/1}* Should you not play at the house instead?', '{#f/0}* Come now.'],
         ['{#p/toriel}{#f/9}* Child, it is dangerous to play out here.', '{#f/5}* Trust me.'],
         ['<26>{#p/toriel}{#f/5}* The gravity is low here.\n* You will float away.'],
         ['{#p/toriel}{#f/5}* The atmopsheric system is weak here.\n* You will suffocate.'],
         ['{#p/toriel}{#f/23}* There is really nothing for you to see here.'],
         ['{#p/toriel}{#f/1}* Would you like to read a book with me?'],
         ['{#p/toriel}{#f/1}* Would you like to revisit the other rooms in the Outlands?'],
         ['{#p/toriel}{#f/5}* I will not allow you to endanger yourself.'],
         ['{#p/toriel}{#f/3}* Do you expect me to do this all day?'],
         ['{#p/toriel}{#f/4}* ...'],
         ['{#p/toriel}{#f/17}* ...', '{#f/15}* I do not like the game you are playing.'],
         ['{#p/toriel}{#f/17}* ...']
      ],
      runaway2: [
         '{#p/toriel}{#f/1}* Please come back to the house, little one...',
         '{#f/0}* I have something to show you!'
      ],
      runaway3: [
         '{#p/toriel}{#f/2}* Child, no!\n* It is not safe for you out here!',
         '{#f/0}* Come. I have finished preparing breakfast.'
      ],
      runaway4: ['{#p/toriel}{#f/2}* Child!\n* What are you doing!?'],
      runaway5: [
         '{#p/toriel}{#f/1}* Do you not realize what would happen if you left here?',
         '{#f/5}* I... I am sorry I did not pay more attention to you...',
         '{#f/9}* Maybe if I had, you would not have run away...'
      ],
      runaway6: [
         '{#g/torielStraightUp}* I must admit... I am afraid of leaving here myself.',
         '{#f/9}* There are many dangers beyond which would threaten us both.',
         '{#g/torielSincere}* I do want to protect you from them, but...',
         '{#g/torielStraightUp}* If I follow you out of here, I would only put you in further danger.',
         '{#f/9}* My presence would be seen as a threat.'
      ],
      runaway7: [
         '{#p/toriel}{#f/5}* Please...',
         '{#f/1}* Come back with me, and I promise to take care of you.',
         '{#f/5}* I will do anything you ask, alright?',
         '{#f/18}* Please... do not leave me like the others...'
      ],
      runaway7a: [
         '{#p/toriel}{#f/18}* ...',
         '{#g/torielCompassionSmile}* There, there, my child.\n* Everything will be alright now.',
         '{#f/1}* Return to the house, and I will rejoin you soon.',
         '{#f/5}* There is something I have to do here.'
      ],
      runaway7b: [
         '{#p/toriel}{#f/21}* How pathetic...',
         '* I cannot...\n* Even protect a single human child...'
      ],
      silencio: {
         a: pager.create(
            0,
            () =>
               SAVE.data.n.plot === 72
                  ? [
                     '{#p/basic}{#n1}* Hey there.\n* Nice to see you back here.',
                     "* I've decided to revisit this old stomping ground of mine...",
                     "* Besides, it's quiet here.\n* Just like me.",
                     "* Oh, and I've retired from working at the CORE.",
                     '* You see, when I joined the engineering team...',
                     "* I didn't realize I'd be called on for impromptu guard duty.",
                     '* ... it would seem deception of the corporate variety is beyond even my foresight.'
                  ]
                  : SAVE.data.b.napsta_performance
                     ? [
                        '{#p/basic}{#n1}* Hey there.\n* Nice to see you at the show.',
                        "* The name's Silencio... but I'm sure you've heard that by now.",
                        '* Everyone around here knows my name, even that DJ.',
                        '* I once performed my own kind of musical here.',
                        '* "Silencio\'s Great Escape," it was called.',
                        '* Once it was over, I was gone before the crowd could even catch their breath.'
                     ]
                     : [
                        '{#p/basic}{#n1}* Hey there.\n* Nice to meet you.',
                        "* The name's Silencio... well, that's what they call me, anyway.",
                        '* You wanna know why they call me that?',
                        "* I'm like a space ninja, silent as the most silent of nights.",
                        '* I can slip out of any danger, no exceptions.',
                        "* Don't believe me?\n* Try something funny, and you'll see how fast I run."
                     ],
            () =>
               SAVE.data.n.plot === 72
                  ? [
                     "{#p/basic}{#n1}* Oh, yeah, I guess I'm free to leave the galaxy now.",
                     "* ... but maybe I'll stay."
                  ]
                  : SAVE.data.b.napsta_performance
                     ? [
                        '{#p/basic}{#n1}* You might even say, that performance of mine...',
                        '* Was "breathtaking."'
                     ]
                     : [
                        '{#p/basic}{#n1}* What are you still talking to me for, huh?',
                        "* I've already said everything I'm willing to."
                     ]
         )
      },
      // cetadel i swear if you say "socks" one more time-
      socks1: () =>
         world.darker
            ? ['{#p/human}* (You peek inside.)', "{#p/basic}* It's just a sock drawer."]
            : [
               '{#p/human}* (You peek inside.)',
               "{#p/basic}* Scandalous!\n* It's Toriel's sock collection.\n* A little messy...",
               world.meanie
                  ? choicer.create('* (Make it messier?)', 'Yes', 'No')
                  : choicer.create('* (Clean up the mess?)', 'Yes', 'No')
            ],
      socks2: () =>
         world.meanie
            ? ['<33>{#p/human}* (You make a mess of the socks.)']
            : [
               '{#p/human}* (You organize the socks into matching pairs.)',
               ...(!SAVE.isCanon() || !SAVE.flag.b.$asr || SAVE.data.b.oops
                  ? []
                  : [
                     '{#p/human}* (Somehow, you got the sense that there was something here...)',
                     "{#p/human}* (...)\n* (It appears there's a key hidden in the drawer.)",
                     choicer.create('* (Take the key?)', 'Yes', 'No')
                  ])
            ],
      socks3: [
         "{#p/human}* (...)\n* (It appears there's a key hidden in the drawer.)",
         choicer.create('* (Take the key?)', 'Yes', 'No')
      ],
      socks4: ['{#p/human}* (You decide not to do anything.)'],
      socks5: () =>
         SAVE.flag.b.$svr
            ? ["{#p/human}* (But you got the sense that it'd be a bad idea.)"]
            : ['{#s/equip}{#p/human}* (The Secret Key was added to your keyring.)'],
      socks6: ['{#p/human}* (You decide not to take anything.)'],
      socks7: () =>
         SAVE.data.b.svr
            ? [
               '{#p/human}* (You stare into the sock drawer, recalling the long journey that started here.)',
               "{#p/human}* (You can't help but wonder where you'd be without it.)"
            ]
            : world.darker
               ? ["{#p/basic}* It's just a sock drawer."]
               : SAVE.data.n.plot < 72
                  ? ["{#p/basic}* You can't stop looking at the socks."]
                  : SAVE.data.b.oops
                     ? [
                        "{#p/basic}* You came all this way just to revisit Toriel's sock drawer...?",
                        '* You have great priorities in life.'
                     ]
                     : [
                        "{#p/basic}* You came all this way just to revisit Toriel's sock drawer...?",
                        '* ... I guess that makes sense.'
                     ],
      steaksale: {
         a: pager.create(
            0,
            () =>
               SAVE.data.b.napsta_performance
                  ? [
                     '{#p/basic}{#n1}* Sup, lassy ;)',
                     "* It was good seeyin' ya at the show, ya know? ;)",
                     '* You did a real bang-up job ;)',
                     "* If one thing's for sure, I think that calls for a special offer ;)",
                     '* For a limited time only, our products will be infused with our "premium" ingredients ;)',
                     "* And believe me, lassy, this ain't just the same old stuff as before, aw naw ;)",
                     '* This stuff is GENUINE, yo ;)',
                     "* It's a little more expensive, so I hope ya don't mind ;)",
                     "* Now... why don'tcha check out what's for sale? ;)"
                  ]
                  : [
                     '{#p/basic}{#n1}* Sup, lassy ;)',
                     '* The boss man sent me out here to see what you country peeps are up to, ya know? ;)',
                     "* You could say we're expanding our enterprise ;)",
                     "* What's our enterprise, you ask? ;)",
                     "* Well, it's quite simple really... we sell steak ;)",
                     "* And this ain't the replicated stuff, aw naw ;)",
                     '* This stuff is REAL, yo ;)',
                     '* Anyone who says otherwise is a poser, ya feel me? ;)',
                     "* That being said, why don'tcha check out what's for sale? ;)"
                  ],
            ["{#p/basic}{#n1}* Why don'tcha check out what's for sale? ;)"]
         ),
         a1: ['{#p/basic}{#n1}* Thanks for everything, lassy ;)'],
         b: () => [
            SAVE.data.b.napsta_performance
               ? world.darker
                  ? '{#p/basic}{#n1!}* "Sizzli Steak" for 40G.'
                  : '{#p/basic}{#n1!}* It\'s labelled "Sizzli Steak" and costs 40G.\n* Smells like ultra-hyperbole.'
               : world.darker
                  ? '{#p/basic}{#n1!}* "Sizzli Steak" for 20G.'
                  : '{#p/basic}{#n1!}* It\'s labelled "Sizzli Steak" and costs 20G.\n* Smells like hyperbole.',
            choicer.create('* (Buy this item?)', 'Yes', 'No')
         ],
         b1: ['{#p/human}{#n1!}* (You got the Sizzli Steak.)', '{#p/basic}{#n1}* Slick choice, lassy ;)'],
         b2: ['{#p/human}{#n1!}* (You decide not to buy.)'],
         c: () => [
            SAVE.data.b.napsta_performance
               ? world.darker
                  ? '{#p/basic}{#n1!}* "Fizzli Soda" for 10G.'
                  : '{#p/basic}{#n1!}* It\'s labelled "Fizzli Soda" and costs 10G.\n* Who would EVER buy this?'
               : world.darker
                  ? '{#p/basic}{#n1!}* "Fizzli Soda" for 5G.'
                  : '{#p/basic}{#n1!}* It\'s labelled "Fizzli Soda" and costs 5G.\n* Who would buy this?',
            choicer.create('* (Buy this item?)', 'Yes', 'No')
         ],
         c1: ['{#p/human}{#n1!}* (You got the Fizzli Soda.)', "{#p/basic}{#n1}* Careful, it's sweet ;)"],
         c2: ['{#p/human}{#n1!}* (You decide not to buy.)'],
         d: pager.create(
            0,
            () => [
               "{#p/human}{#n1!}* (You don't have enough G.)",
               '{#p/basic}{#n1}* Not enough money, huh? ;)',
               SAVE.data.b.napsta_performance
                  ? '{#p/basic}* That\'s alright, lassy ;)\n* Not everyone can afford the "premium" ingredients ;)'
                  : "{#p/basic}* That's alright, lassy ;)\n* Just be sure to come back when you've got some ;)"
            ],
            ["{#p/human}{#n1!}* (You don't have enough G.)"]
         ),
         e: pager.create(
            0,
            [
               "{#p/human}{#n1!}* (You're carrying too much.)",
               '{#p/basic}{#n1}* Maybe you should come back later ;)'
            ],
            ["{#p/human}{#n1!}* (You're carrying too much.)"]
         ),
         f: ['{#p/human}{#n1!}* (You got the Sizzli Steak.)'],
         g: ['{#p/human}{#n1!}* (You got the Fizzli Soda.)'],
         h: ["{#p/human}{#n1!}* (You're carrying too much.)"],
         i: [
            "{#p/basic}{#n1}* By the way, we're outta stock ;)",
            "* Seems you can't get enough of our stuff ;)",
            '* Say, if- no, when you meet the boss-man... tell him this ;)',
            '{#p/human}{#n1!}* (Aaron whispered something in your ear.)',
            '{#p/basic}{#n1}* Good luck out there, lassy ;)'
         ]
      },
      supervisor: {
         a: ['{#p/basic}* Later...'],
         b: [
            '{#p/napstablook}* hey everyone...',
            '* this is a little tune i wrote a while ago...',
            "* it's nothing special, but...",
            "* hopefully, it's good enough for this club",
            '* well, here we go...'
         ],
         c1: ['{*}{#p/basic}* Well, this is jazzy.{^30}{%}'],
         c2: [
            '{*}{#p/toriel}{#f/7}* Why has Napstablook never mentioned this??\n* This is good!{^30}{%}',
            "{*}{#p/basic}* Yeah, maybe they're just shy.{^30}{%}"
         ],
         c3: ['{*}{#p/basic}* Ooh, bells ;){^30}{%}'],
         c4: ['{*}{#p/basic}* Here comes the breakdown!{^30}{%}'],
         c5: ['{*}{#p/basic}* Well, that was... something.{^30}{%}'],
         d: [
            '{#p/napstablook}* yeah, that was something',
            '{#p/napstablook}* oh well...\n* i probably bored you guys...',
            '{#p/napstablook}* sorry...'
         ],
         e: [
            '{|}{#p/toriel}{#f/2}* No, wait!\n* That was actually- {%}',
            "{#p/basic}* I don't think they can hear you, Toriel.",
            '{#p/toriel}{#f/9}* No...\n* They never do...'
         ]
      },
      terminal: {
         a: () =>
            SAVE.data.n.plot === 72
               ? !world.runaway
                  ? [
                     '{#p/human}* (You access the communications terminal and play the incoming message.)',
                     "{#p/alphys}* We're free, everyone!\n* This isn't a joke, the force field's gone!",
                     "* Seriously, they're shutting down the core in a few days, so it's time to go!",
                     "* You don't want to die here, do you?"
                  ]
                  : [
                     '{#p/human}* (You access the communications terminal and play the incoming message.)',
                     "{#p/alphys}* The force field's gone.\n* Calling all citizens for immediate evacuation.",
                     "* ... I know you're all afraid, but it's going to be okay.",
                     "* They can't hurt us if we leave them behind."
                  ]
               : 37.2 <= SAVE.data.n.plot
                  ? [
                     '{#p/human}* (You access the communications terminal and play the incoming message.)',
                     "{#p/alphys}* The Foundry's fluid network has been repaired, thanks to our... v-very kind workers.",
                     '* ...',
                     "* On an unrelated note, we're... l-looking for new workers."
                  ]
                  : [
                     '{#p/human}* (You access the communications terminal and play the incoming message.)',
                     "{#p/alphys}* The Foundry's fluid network is f-falling apart again.",
                     '* The workers have promised a short turnaround, but things are looking bleak.',
                     '* Please, i-if anyone out there can help, we need you...'
                  ]
      },
      torieldanger: {
         a: ['{#p/toriel}{#f/1}* Have you tried checking the terminal?'],
         b: ['{#p/toriel}{#f/1}* The password terminal is right over there, little one.']
      },
      latetoriel1: [
         '{#p/toriel}{#npc/a}{#f/2}* ...!',
         '{#f/5}* What are you doing out here, my ch...',
         '{#f/9}* ... child...',
         '{#f/5}* I cannot care for you any longer, child.\n* Nor should I.',
         '{#f/5}* You have places to be, things to see...',
         '{#f/10}* Who am I to keep you from that?',
         '{#f/9}* ...',
         '{#f/5}* Please, carry on without me...',
         '{#f/1}* ... I know you can do the right thing...'
      ],
      latetoriel2: ['{#p/toriel}{#npc/a}{#f/5}* ... go on...'],
      /** i wish this stupid fucking dialogue didn't have to exist */
      lateasriel: () =>
         [
            ['{#p/asriel1}{#f/13}* Just leave me, Frisk...', "{#f/15}* I can't come back with you, okay?"],
            [
               "{#p/asriel1}{#f/16}* I don't want to break their hearts all over again.",
               "{#f/13}* It's better if they never see me at all."
            ],
            [
               '{#p/asriel1}{#f/15}* ... what are you doing?',
               '{#f/15}* Are you trying to keep me company?',
               '{#f/23}* Frisk...',
               '{#f/22}* ...',
               '{#f/13}* Hey.',
               '{#f/13}* Let me ask you a question.',
               '{#f/15}* Frisk...\n* Why did you come here?',
               '{#f/13}* Everyone knows the story, right...?',
               '{#f/23}* "Spacecraft who fly into the Ebott sector are said to disappear."',
               '{#f/22}* ...',
               '{#p/human}* (...)\n* (You tell Asriel the truth.)',
               '{#p/asriel1}{#f/25}* ...',
               '{#f/25}* Frisk... you...',
               '{#f/23}* ...',
               "{#f/23}* You don't have to be alone anymore, okay?",
               "{#f/17}* You've made so many wonderful friends here...",
               "{#f/17}* They'll look out for you, okay?"
            ],
            [
               '{#p/asriel1}{#f/15}* ...',
               '{#f/15}* I know why $(name) flew out here.',
               "{#f/16}* It wasn't for a very happy reason.",
               "{#f/13}* Frisk.\n* I'll be honest with you.",
               '{#f/15}* $(name) wanted nothing to do with humanity.',
               '{#f/16}* Why, they never said.',
               '{#f/15}* But they felt very strongly about that.'
            ],
            [
               "{#p/asriel1}{#f/17}* Frisk, it's okay.\n* You're not like $(name) at all.",
               '{#f/15}* In fact, though you have similar, uh, fashion choices...',
               "{#f/13}* I don't know why I ever acted like you were the same person.",
               '{#f/15}* Maybe...\n* The truth is...',
               "{#f/16}* $(name) just wasn't who I wanted them to be.",
               '{#f/13}* While, Frisk...',
               "{#f/17}* You're the kind of friend I've always wanted to have.",
               '{#f/20}* So maybe I was kind of projecting a little.',
               "{#f/17}* Let's be honest.\n* I did some weird stuff as a star."
            ],
            [
               "{#p/asriel1}{#f/13}* There's one last thing I feel like I should tell you.",
               '{#f/15}* When $(name) and I combined our SOULs together...',
               '{#f/16}* The control over our body was actually split between us.',
               '{#f/15}* They were the one that picked up their own empty body.',
               "{#f/13}* And then, when we made it to the planet's remains...",
               '{#f/13}* They were the one that wanted to...',
               '{#f/16}* ... to use our full power.',
               '{#f/13}* It took everything I had to resist it.',
               '{#f/15}* And then, because of me, we...',
               "{#f/22}* Well, that's why I ended up the way I did.",
               '{#f/23}* ... Frisk.',
               "{#f/17}* This whole time, I've blamed myself for that decision.",
               "{#f/13}* It's why I adopted that horrible view of the world.",
               '{#f/13}* "Kill or be killed."',
               '{#f/17}* But now...\n* After meeting you...',
               "{#f/23}* Frisk, I don't regret that decision anymore.",
               '{#f/22}* I did the right thing.',
               "{#f/13}* If we'd killed those humans...",
               '{#f/15}* We would have had to wage war against all of humanity.',
               '{#f/17}* And in the end, everyone went free, right?',
               '{#f/17}* Even the others who came here made it out alive.',
               '{#f/13}* ...',
               '{#f/15}* But, $(name)...',
               "{#f/16}* ... I can't say for certain what happened to them after we died.",
               '{#f/15}* Nothing was ever found... not even their SOUL.',
               "{#f/15}* So... I can't help but wonder if they're... still out there.",
               '{#p/basic}* ...',
               '{#p/human}* (It sounds like someone is crying...)'
            ],
            [
               '{#p/asriel1}{#f/17}* Frisk, thank you for listening to me.',
               '{#f/17}* You should really go be with your friends now, okay?',
               '{#f/13}* Oh, and, please...',
               '{#f/20}* In the future, if you, uh, see me...',
               "{#f/15}* ... don't think of it as me, okay?",
               '{#f/16}* I just want you to remember me like... this.',
               '{#f/17}* Someone that was your friend for a little while.',
               '{#f/13}* ...',
               '{|}{#p/human}* (You tell Asriel you really- {%}',
               "{#p/asriel1}{#f/23}* Frisk, it's okay.",
               "{#f/22}* You don't have to save everyone to be a good person.",
               '{#f/13}* Besides... even if I could keep this form...',
               "{#f/15}* I don't know if I could move on from what happened in the past.",
               "{#f/17}* ... just promise me you'll take care of yourself, alright?",
               '{#f/13}* ...',
               '{#f/15}* Well, see you.'
            ],
            ['{#p/asriel1}{#f/13}* Frisk...', "{#f/15}* Don't you have anything better to do?"],
            []
         ][Math.min(SAVE.data.n.lateasriel++, 8)],
      securefield: ['<33>{#p/basic}* There is a security field here.\n* It is active.'],
      trivia: {
         w_security: ["{#p/basic}* It's a security field."],
         photoframe: () =>
            SAVE.data.b.svr
               ? [
                  [
                     '{#p/asriel1}{#f/13}* An empty photo frame...',
                     '{#f/16}* Once upon a time, there WERE pictures in these frames.',
                     '{#f/15}* Then, she took them out and never put them back.',
                     "{#f/16}* ... must've hurt too much to look at them."
                  ],
                  [
                     '{#p/asriel1}{#f/13}* Empty photo frames are like missing memories...',
                     '{#p/asriel1}{#f/15}* This place has way too many of them.'
                  ],
                  ['{#p/asriel1}{#f/22}* Too many of these in this strange place.']
               ][Math.min(asrielinter.photoframe++, 1)]
               : SAVE.data.n.plot === 72 && !world.runaway
                  ? ['{#p/basic}* Still an empty photo frame.']
                  : ['{#p/basic}* An empty photo frame.'],
         w_paintblaster: () =>
            SAVE.data.b.svr
               ? ['{#p/human}* (This device seems to be a few decades out of date.)']
               : world.darker
                  ? ['{#p/basic}* A useless device of little importance to anyone.']
                  : ['{#p/basic}* An old fuel injection device.'],
         w_candy: () =>
            SAVE.data.b.svr
               ? ['{#p/human}* (The sign warns of unexpected appliance malfunctions.)']
               : ['{#p/basic}* "Please note that appliances may be more malfunction-prone than they seem."'],
         w_djtable: () =>
            SAVE.data.b.svr
               ? ['{#p/human}* (You touch the DJ set.)\n* (It makes an oddly satisfying scratching sound.)']
               : world.darker
                  ? ["{#p/basic}* It's a DJ set."]
                  : SAVE.data.n.plot === 72
                     ? ['{#p/basic}* A fancy DJ set, which is surprisingly not in use right now.']
                     : ['{#p/basic}* A fancy DJ set, equipped with knobs and sliders galore.'],
         w_froggit: () =>
            SAVE.data.n.plot === 72
               ? [
                  '{#p/basic}* Ribbit, ribbit.\n* (Excuse me, human.)',
                  '* (You seem like you have grown into a thoughtful and conscientious person.)',
                  "* (Whether that was from my advice or not...)\n* (I'm quite proud.)",
                  '* Ribbit.'
               ]
               : [
                  '{#p/basic}* Ribbit, ribbit.\n* (Excuse me, human...)',
                  '* (I have some advice for you about battling monsters.)',
                  '* (If you {@fill=#ff0}ACT{@fill=#fff} a certain way or {@fill=#ff0}FIGHT{@fill=#fff} until you almost defeat them...)',
                  '* (They might not want to battle you anymore.)',
                  '* (If a monster does not want to fight you, please...)',
                  '* (Use some {@fill=#ff0}MERCY{@fill=#fff}, human.)\n* Ribbit.'
               ],
         w_froggit_view: () =>
            SAVE.data.b.svr
               ? ['{#p/human}* (You stare thoughtfully into the cosmos beyond...)']
               : world.darker
                  ? []
                  : SAVE.data.n.plot === 72
                     ? [
                        "{#p/basic}* It's ironic how staring at outer space...",
                        '* Tends to be a great way to channel your inner thoughts.'
                     ]
                     : [
                        "{#p/basic}* It's a view of outer space.",
                        '* Certainly no shortage of those around here, is there?'
                     ],
         w_kitchenwall: () =>
            SAVE.data.n.plot === 9
               ? ['<26>{#p/toriel}{#f/1}* Patience, my child!']
               : ['<26>{#p/toriel}{#f/1}* This may take a while...'],
         w_lobby1: () =>
            SAVE.data.b.svr
               ? ['{#p/human}* (The sign speaks of strength of will in times of trouble.)']
               : ['{#p/basic}* "Even when you stumble, the will to push onward shows through."'],
         w_pacing_view: () =>
            SAVE.data.b.svr
               ? ['{#p/human}* (You stare happily into the cosmos beyond...)']
               : world.darker
                  ? []
                  : SAVE.data.n.plot === 72
                     ? [
                        "{#p/basic}* After such a long journey, the glass doesn't seem to scare you.",
                        '* Not that it ever did in the first place.'
                     ]
                     : [
                        '{#p/basic}* To think the only thing between you and the endless expanse is a sheet of glass...',
                        "* Despite all common sense, this doesn't seem to bother you."
                     ],
         w_pacing1: () =>
            SAVE.data.n.plot === 72
               ? [
                  '{#p/basic}* Ribbit, ribbit.\n* (Someone passed by here not too long ago.)',
                  '* (He told me not to tell you where he was going.)',
                  "* (I wasn't going to, but then, he just seemed so sad...)",
                  "* (He's probably at the platform just past the entrance now.)",
                  '* (Go. Speak to him. Something good will come of it.)\n* Ribbit.',
                  '{#p/basic}* ... Asriel...'
               ]
               : [
                  '{#p/basic}* Ribbit, ribbit.\n* (Sigh...)',
                  '* (My "friend" doesn\'t really like being kind to me.)',
                  '* (If given the option, they choose to hurt me instead.)',
                  "* (That's right.......)\n* (Hurting me............)\n* (................)",
                  "* (At least you're kind to me.)\n* Ribbit."
               ],
         w_pacing2: () =>
            SAVE.data.n.plot === 72
               ? SAVE.data.b.oops
                  ? [
                     '{#p/basic}* Ribbit, ribbit.\n* (Hello, human...)',
                     '* (Have you heard from my friend?)',
                     '* (They were standing here a few days ago, just to my left...)',
                     '* (But some time after your arrival, they disappeared.)',
                     "* (They did say they'd leave if you hurt anyone...)",
                     SAVE.data.n.exp <= 0
                        ? "* (Which is confusing, since you definitely haven't done that.)\n* Ribbit."
                        : '* (Maybe next time, you could try being a little nicer?)\n* Ribbit.'
                  ]
                  : [
                     '{#p/basic}* Ribbit, ribbit.\n* (Hello, human...)',
                     "* (My friend is the happiest they've ever been.)",
                     "* (They said they'd leave if you hurt anyone, but you haven't.)",
                     "* (In fact, they've decided to stay to my left forever.)",
                     '* (As for that "friend" of theirs who always tried to hurt them...)',
                     '* (Oh, he seems to have turned himself into a goat.)\n* Ribbit.'
                  ]
               : [
                  '{#p/basic}* Ribbit, ribbit.\n* (Hello, human...)',
                  '* (Have you ever tried checking your ITEMs?)',
                  "* (If you've picked up anything, that's where you'll find it.)",
                  '* (What do I have in my ITEMs, you ask?)',
                  "* (Oh, you're silly... monsters don't have ITEMs!)\n* Ribbit."
               ],
         w_pacing3: () =>
            SAVE.data.n.plot === 72
               ? SAVE.data.n.bully < 1
                  ? [
                     '{#p/basic}* Ribbit, ribbit.\n* (Thank you for always showing mercy to us monsters.)',
                     '* (I know I gave you advice on how to beat people up safely...)',
                     "* (But that didn't mean I wanted you to do it.)",
                     '* (You are a kind human indeed.)\n* Ribbit.'
                  ]
                  : SAVE.data.n.bully < 15
                     ? [
                        '{#p/basic}* Ribbit, ribbit.\n* (Thank you for keeping the beatings to a minimum.)',
                        '* (I know I gave you advice on how to beat people up safely...)',
                        "* (But that didn't mean I wanted you to do it.)",
                        "* (You aren't too terrible, at least for a human.)\n* Ribbit."
                     ]
                     : [
                        '{#p/basic}* Ribbit, ribbit.\n* (So you have proven to be a formidable threat.)',
                        "* (Yet, somehow, I'm still not afraid of you...)",
                        '* (Perhaps at the end, you offered mercy when you could have attacked.)',
                        '* (I do appreciate the restraint you have shown.)\n* Ribbit.'
                     ]
               : [
                  "{#p/basic}* Ribbit, ribbit.\n* (If you beat up a monster until it's almost dead...)",
                  '* (Its name will turn blue.)',
                  '* (Weird, right?)\n* (But I heard humans turn blue when they get beat up, too.)',
                  '* (So, I suppose you can relate to that.)',
                  '* (Well, thank you for listening to my head-talk.)\n* Ribbit.'
               ],
         w_puzzle1_view: () =>
            SAVE.data.b.svr
               ? ['{#p/human}* (You stare deeply into the cosmos beyond...)']
               : world.darker
                  ? []
                  : SAVE.data.n.plot === 72
                     ? ['{#p/basic}* In the end, these rooms still feel like nothing more than lookout areas.']
                     : [
                        '{#p/basic}* Why does it feel like some of these rooms...',
                        '* ... were just made solely to be lookout areas?'
                     ],
         w_puzzle2: () =>
            SAVE.data.b.svr
               ? world.nootflags.has('w_puzzle2') // NO-TRANSLATE
                  ? [
                     '{#p/human}* (The sign describes puzzle- solving as an unnecessary part of space exploration.)',
                     ...[
                        [
                           '{#p/asriel1}{#f/13}* Unlike most signs, this one has a point.',
                           "{#f/15}* And that's not just because I'm the one who wrote it."
                        ],
                        ["{#p/asriel1}{#f/3}* ... don't tell me you actually enjoyed these puzzles."],
                        ["{#p/asriel1}{#f/10}* Frisk, even you're not THAT weird."]
                     ][Math.min(asrielinter.w_puzzle2++, 2)]
                  ]
                  : ['{#p/human}* (The sign describes the value of patience in space.)']
               : world.nootflags.has('w_puzzle2') // NO-TRANSLATE
                  ? [
                     '{#p/basic}* "The final frontier is a deep dark sea."',
                     '* "Navigating its waters should NEVER require solving badly designed puzzles!"'
                  ]
                  : [
                     '{#p/basic}* "The final frontier is a deep dark sea."',
                     '{#p/basic}* "Before charging into the {@fill=#ff993d}great unknown{@fill=#fff}, you must wait for its {@fill=#00a2e8}currents to align{@fill=#fff}."'
                  ],
         w_puzzle3_view: () =>
            SAVE.data.b.svr
               ? ['{#p/human}* (You stare reflectively into the cosmos beyond...)']
               : world.darker
                  ? []
                  : SAVE.data.n.plot === 72
                     ? ['{#p/basic}* It sure... was... a nice view.']
                     : ['{#p/basic}* It sure is a nice view.'],
         w_puzzle4: () =>
            SAVE.data.b.svr
               ? ['{#p/human}* (The sign appears to be an advertisement for a now- defunct steak sale.)']
               : [
                  '{#p/basic}* "Be sure to catch a slice of Glyde\'s Signature Steak (TM) in the activities room!"'
               ],
         w_ta_box: () =>
            SAVE.data.b.svr
               ? [
                  [
                     '{#p/asriel1}{#f/20}* Yeah... Toriel was never one to keep these in one piece.',
                     '{#f/21}* Even these replicas of my model starships got smashed...'
                  ],
                  [
                     "{#f/13}* It's surprising.\n* She's usually such an organized person.",
                     '{#p/asriel1}{#f/17}* ... she must have been having a bad day.'
                  ],
                  ['{#p/asriel1}{#f/13}* It happens...']
               ][Math.min(asrielinter.w_ta_box++, 2)]
               : world.darker
                  ? ["{#p/basic}* It's a toy box.\n* The model starships have been smashed to pieces."]
                  : SAVE.data.n.plot === 72
                     ? [
                        '{#p/basic}* The little ships in this box were never repaired.',
                        "* If this was at Asgore's house, they'd be in perfect shape."
                     ]
                     : [
                        '{#p/basic}* A box of model starships!\n* And... shattered glass?',
                        '* Looks like someone broke their little ships.'
                     ],
         w_ta_cabinet: () =>
            SAVE.data.b.svr
               ? ["{#p/human}* (You can't find anything in here besides several of the exact same outfit.)"]
               : [
                  '{#p/basic}* A cabinet full of blue and yellow striped shirts.',
                  ...(SAVE.data.n.plot === 72 ? ["* Like that's ever gonna change."] : [])
               ],
         w_ta_frame: () =>
            SAVE.data.b.svr
               ? [["{#p/asriel1}{#f/21}* ... it's missing..."], ['{#p/asriel1}{#f/21}* ...']][
               Math.min(asrielinter.w_ta_frame++, 1)
               ]
               : SAVE.data.n.plot === 72
                  ? ['{#p/basic}* An empty photo frame.', "* There still isn't much else to say."]
                  : ['{#p/basic}* An empty photo frame.', "* There's not much else to say."],
         w_ta_paper: () =>
            SAVE.data.b.svr
               ? [
                  "{#p/human}* (The drawing doesn't appear to be anything of importance.)",
                  ...[
                     [
                        "{#p/asriel1}{#f/13}* It's long gone now, but the real drawing I made here...",
                        '{#f/17}* ... was basically the blueprint for my "god of hyperdeath" form.',
                        '{#f/17}* Super skybreaker, titanium striker...',
                        '{#f/20}* And, of course, the legendary "hyper goner."'
                     ],
                     [
                        '{#p/asriel1}{#f/17}* Yeah... I guess I had it all planned out.',
                        '{#f/20}* I came up with lots of crazy stuff, all the time...',
                        '{#f/1}* Ooh, you would have ADORED my pan-galactic starship concept.'
                     ],
                     [
                        '{#p/asriel1}{#f/17}* Frisk, I hope...',
                        '{#f/23}* I really hope we can have a moment like that between us.',
                        '{#f/22}* Back with $(name), it was always...',
                        '{#f/15}* ... difficult.'
                     ],
                     ["{#p/asriel1}{#f/20}* Don't worry.\n* If you can't draw, I'll just teach you."]
                  ][Math.min(asrielinter.w_ta_paper++, 3)]
               ]
               : world.darker
                  ? ['{#p/basic}* A forgettable drawing.\n* Nothing like the original.']
                  : [
                     "{#p/basic}* A children's drawing, depicting a giant monster with rainbow wings.",
                     "* It's just like the one at home..."
                  ],
         w_tf_couch: () =>
            SAVE.data.b.svr
               ? ['{#p/human}* (The couch appears to have never been used.)']
               : SAVE.data.n.plot === 72
                  ? ["{#p/basic}* No matter how much time passes, it's unlikely anyone will ever sit here."]
                  : world.darker
                     ? ["{#p/basic}* It's a couch.\n* What else were you expecting?"]
                     : [
                        '{#p/basic}* A comfortable-looking couch.',
                        '* The temptation to sink into its luscious cushions is hard to resist...'
                     ],
         w_tf_table: () =>
            SAVE.data.b.svr
               ? ["{#p/human}* (You glance at the end table, but it doesn't appear to glance back.)"]
               : [
                  '{#p/basic}* An unremarkable end table.',
                  "{#p/basic}* Rather unrealistically, it's in near-perfect condition."
               ],
         w_tf_window: () =>
            SAVE.data.b.svr
               ? SAVE.data.b.c_state_secret1_used && SAVE.data.b.c_state_secret5_used
                  ? ['{#p/human}* (You stare wishfully into the cosmos beyond...)']
                  : ['{#p/human}* (You stare wistfully into the cosmos beyond...)']
               : world.darker
                  ? ["{#p/basic}* It's just another window."]
                  : SAVE.data.n.plot === 72
                     ? ["{#p/basic}* Despite everything, it's a beautiful view of outer space."]
                     : ["{#p/basic}* It's a beautiful view of outer space."],
         w_th_door: () =>
            SAVE.data.b.svr
               ? [
                  '{#p/human}* (The sign describes the room within as being incomplete.)',
                  ...[
                     [
                        "{#p/asriel1}{#f/3}* If this house weren't a replica, that would be Dad's room...",
                        '{#f/4}* You can guess why it was never finished.'
                     ],
                     [
                        '{#p/asriel1}{#f/13}* ...',
                        '{#f/15}* That speech affected Mom in a... not good way.',
                        '{#f/4}* As a star, I sometimes... spied on her.',
                        "{#f/3}* And the way she was talking, it's like she never left that moment.",
                        '{#f/13}* Then, you arrived, and everything changed...'
                     ],
                     [
                        '{#p/asriel1}{#f/13}* ...',
                        "{#f/15}* This is too awkward.\n* I'm going to pretend we aren't here."
                     ],
                     ['{#p/asriel1}{#f/13}* ...']
                  ][Math.min(asrielinter.w_th_door++, 3)]
               ]
               : ['{#p/basic}* "Room under renovations."'],
         w_th_mirror: () =>
            SAVE.data.b.svr
               ? ["{#p/asriel1}{#f/24}* It's us..."]
               : world.genocide
                  ? ['{#p/basic}* ...']
                  : world.darker
                     ? ["{#p/basic}* It's you."]
                     : SAVE.data.b.w_state_catnap || SAVE.data.n.plot > 17
                        ? ["{#p/basic}* It's you...", '{#p/basic}* ... and it always will be.']
                        : ["{#p/basic}* It's you!"],
         w_th_plant: () =>
            SAVE.data.b.svr
               ? ['{#p/human}* (You thank the plant for the warmth it brings each day.)']
               : SAVE.data.n.plot === 72
                  ? ["{#p/basic}* This plant is just happy you're still alive."]
                  : world.darker
                     ? ['{#p/basic}* This plant is not very happy to see you.']
                     : SAVE.data.b.oops
                        ? ['{#p/basic}* This plant is happy to see you.']
                        : ['{#p/basic}* This plant is ecstatic about seeing you!'],
         w_th_sausage: () =>
            SAVE.data.b.svr
               ? ['{#p/human}* (You rustle the corny plant.)']
               : ['{#p/basic}* This plant looks quite corny.'],
         w_th_table1: () => [
            '{#p/human}* (You look under the table and find a set of crayons.)',
            ...(SAVE.data.b.svr
               ? [
                  [
                     '{#p/asriel1}{#f/24}* I think $(name) might have lost the blue crayon.',
                     '{#f/7}* ... actually, no.\n* I KNOW they lost the blue crayon.',
                     '{#f/6}* It turned up later in a food chest, but nobody thought to check it.',
                     '{#f/16}* They must have been trying to claim the chest as their own.'
                  ],
                  [
                     "<26>{#p/asriel1}{#f/4}* If we ever get a new set of crayons, I'm keeping watch.",
                     '{#f/3}* The moment you even think about losing a crayon...',
                     "<26>{#f/8}* I'll be there to stop that crime train before it even hits the tracks.",
                     '{#f/2}* Just you wait.'
                  ],
                  ["{#p/asriel1}{#f/31}* I've got my eyes on you, Frisk.", '{#f/8}* And... maybe my ears.'],
                  ['{#p/asriel1}{#f/10}* Are you staring at my ears again?\n* You keep doing that.']
               ][Math.min(asrielinter.w_th_table1++, 3)]
               : world.edgy
                  ? ['{#p/basic}* Two crayons are missing from the set.']
                  : world.darker
                     ? ['{#p/basic}* One crayon is missing from the set.']
                     : [
                        '{#p/basic}* The ever-evasive blue crayon, missing for a hundred years...',
                        '{#p/basic}* Truly a legend of our time.'
                     ])
         ],
         w_th_table2: () =>
            SAVE.data.b.svr
               ? [
                  '{#p/human}* (You look under the table and find a deck of cards.)',
                  ...[
                     [
                        '{#p/asriel1}{#f/27}* $(name) and I were never really into those kinds of things.',
                        '{#p/asriel1}{#f/15}* Well... I say never.',
                        "{#p/asriel1}{#f/15}* Uh, let's just not talk about it."
                     ],
                     [
                        '{#p/asriel1}{#f/13}* ...',
                        '{#p/asriel1}{#f/13}* The last time we did, a table got flipped over.',
                        '{#p/asriel1}{#f/17}* Just sibling things.\n* You know how it goes with card games.'
                     ],
                     ['{#p/asriel1}{#f/17}* ...']
                  ][Math.min(asrielinter.w_th_table2++, 2)]
               ]
               : world.darker
                  ? [
                     '{#p/human}* (You look under the table and find a deck of cards.)',
                     "<33>{#p/basic}* It's just not worth your time."
                  ]
                  : SAVE.data.n.plot === 72
                     ? [
                        '{#p/human}* (You look under the table and find a deck of cards.)',
                        "<33>{#p/basic}* Soon enough, we'll never have to think about these again."
                     ]
                     : [
                        '{#p/human}* (You look under the table and find a deck of cards.)',
                        "<33>{#p/basic}* They're holographic, of course."
                     ],
         w_tk_counter: () =>
            SAVE.data.b.svr
               ? [
                  '{#p/human}* (You run your hand across the cutting board, noting the various grooves and ridges.)'
               ]
               : world.darker
                  ? ["{#p/basic}* It's a cutting board."]
                  : ["{#p/basic}* Toriel's cutting board.\n* It's not as up-to-scratch as it used to be."],
         w_tk_sink: () =>
            SAVE.data.b.svr
               ? [
                  [
                     '{#p/asriel1}{#f/21}* $(name) always said leaving fur in the drain was super gross.',
                     '{#f/15}* I always thought it was normal, though...'
                  ],
                  [
                     '{#p/asriel1}{#f/13}* Do humans not shed fur?\n* $(name) would never tell me things like this.'
                  ],
                  ["{#p/asriel1}{#f/17}* I do have reason to believe humans shed.\n* Even if it's not fur."]
               ][Math.min(asrielinter.w_tk_sink++, 2)]
               : SAVE.data.n.plot === 72
                  ? ['{#p/basic}* Remnants of the white fur once stuck here still remain to this very day.']
                  : ['{#p/basic}* There are clumps of white fur stuck in the drain.'],
         w_tk_stove: () =>
            SAVE.data.b.svr
               ? [
                  [
                     '{#p/asriel1}{#f/13}* I have to wonder why she thought buying this would be a good idea.',
                     "{#f/10}* Unless she wanted to re-create Asgore's kitchen...?",
                     "{#f/17}* For someone who didn't like him, she had a weird way to show it."
                  ],
                  [
                     '{#p/asriel1}{#f/15}* I really wish Toriel and Asgore stayed together sometimes.',
                     "{#f/16}* ... but I guess it's for the best that they didn't."
                  ],
                  ["{#p/asriel1}{#f/13}* It just wasn't meant to be, Frisk..."]
               ][Math.min(asrielinter.w_tk_stove++, 2)]
               : SAVE.data.n.state_wastelands_toriel === 2
                  ? ["{#p/basic}* It's just a stovetop.\n* No one is going to use it."]
                  : world.darker
                     ? ["{#p/basic}* It's just a stovetop."]
                     : SAVE.data.n.plot === 72
                        ? ['{#p/basic}* The stovetop is very clean.\n* Toriel may not need a new one on the new world.']
                        : ['{#p/basic}* The stovetop is very clean.\n* Toriel must use fire magic instead.'],
         w_tk_trash: () =>
            SAVE.data.b.svr
               ? ["{#p/human}* (You can't make out what's in the trash...)"]
               : SAVE.data.n.plot === 72
                  ? ['{#p/basic}* Rather symbolically, the trash can has been emptied.']
                  : ['{#p/basic}* There is a crumpled up recipe for Starling Tea.'],
         // it's actually torichair
         w_tl_azzychair: () =>
            SAVE.data.b.svr
               ? ['{#p/human}* (You note the fairly large size of the dining chair.)']
               : SAVE.data.n.state_wastelands_toriel === 2 || world.runaway
                  ? ['{#p/basic}* A larger dining chair.']
                  : ["{#p/basic}* One of Toriel's dining chairs.\n* Fit for a queen."],
         w_tl_bookshelf: pager.create(
            1,
            () =>
               SAVE.data.b.svr
                  ? [
                     '{#p/human}* (The books on this bookshelf consist of snail facts, family recipes, and gardening tips.)'
                  ]
                  : [
                     "{#p/basic}* It's a bookshelf.",
                     '{#p/human}* (You pick out a book...)',
                     '{#p/basic}* "Did you know that snails have a chainsaw-like tounge called a radula?"',
                     '* "Not many folks know about that one."',
                     '* "Another neat thing about \'em is how their digestive systems flip as they mature."',
                     '* "Oh, and did I mention..."',
                     '* "Snails Talk. {^10}Really. {^10}Slowly."',
                     '* "Just kiddin\', snails don\'t talk."',
                     '* "I mean, could you imagine a world with talking snails?"\n* "I know I couldn\'t."',
                     '{#p/human}* (You put the book back on the shelf.)'
                  ],
            () =>
               SAVE.data.b.svr
                  ? [
                     '{#p/human}* (The books on this bookshelf consist of snail facts, family recipes, and gardening tips.)'
                  ]
                  : [
                     "{#p/basic}* It's a bookshelf.",
                     '{#p/human}* (You pick out a book...)',
                     '{#p/basic}* "Dreemurr Family Recipes: Snail Pie"',
                     '* "Snail Pie is a coveted tradition among members of the Dreemurr family line."',
                     '* "Making it is a simple process, and can be broken down into five steps."',
                     '* "First, prepare the bottom crust by laying it on top of a pie plate."',
                     '* "Next, whisk evaporated milk, eggs, and spices together in a bowl until smooth."',
                     '* "Then, take several live snails, and thoroughly incorporate into the mixture."',
                     '* "After that, pour the contents of the bowl into the bottom crust."',
                     '* "Last, prepare the top crust by cutting sheet into strips and forming a lattice."',
                     '* "Then just bake the pie!"',
                     '* "Once the pie is ready, take it out of the oven, let it cool, and serve!"',
                     '{#p/human}* (You put the book back on the shelf.)'
                  ],
            () =>
               SAVE.data.b.svr
                  ? [
                     '{#p/human}* (The books on this bookshelf consist of snail facts, family recipes, and gardening tips.)'
                  ]
                  : [
                     "{#p/basic}* It's a bookshelf.",
                     '{#p/human}* (You pick out a book...)',
                     '{#p/basic}* "Howdy, fellow gardeners."',
                     '* "When it comes to Starling flowers, the line between growth and stagnation..."',
                     '* "Is access to open space."',
                     '* "That is why they are commonly grown in Aerialis..."',
                     '* "It is the most open area of the outpost."',
                     '{#p/human}* (You put the book back on the shelf.)'
                  ]
         ),
         // it's actually azzychair
         w_tl_goreychair: () =>
            SAVE.data.b.svr
               ? ['{#p/human}* (You note the small size of the dining chair.)']
               : SAVE.data.n.state_wastelands_toriel === 2 || world.runaway
                  ? ['{#p/basic}* A smaller dining chair.']
                  : world.genocide
                     ? ["{#p/basic}* One of Toriel's dining chairs.\n* Fit for a demon."]
                     : world.darker
                        ? ["{#p/basic}* One of Toriel's dining chairs.\n* Fit for a prince."]
                        : SAVE.data.b.oops
                           ? ["{#p/basic}* One of Toriel's dining chairs.\n* Fit for a child.\n* Like you!"]
                           : ["{#p/basic}* One of Toriel's dining chairs.\n* Fit for... a little angel.\n* Like you!"],
         w_tl_table: () =>
            SAVE.data.b.svr
               ? ['{#p/human}* (The plant appears to be decorative in nature.)']
               : world.darker
                  ? ['{#p/basic}* A decorative plant.\n* Nothing more.']
                  : ["{#p/basic}* A decorative plant on Toriel's dining table."],
         w_tl_tools: () =>
            SAVE.data.b.svr
               ? [
                  [
                     '{#p/asriel1}{#f/20}* $(name) used to pretend these things were musical instruments.',
                     '{#f/17}* They\'d pull them out, start "playing" them...',
                     '{#f/20}* Once, I joined in, and we did a little fire- poker-instrument duet.',
                     '<26>{#f/13}* We started using our voices to emulate the instruments, and then...',
                     '{#f/17}* Mom and Dad walked in to add backing vocals!'
                  ],
                  [
                     '{#p/asriel1}{#f/13}* Then, as it turns out, someone had been listening in outside.',
                     '{#f/15}* Before we knew it, we had monsters coming to the house in droves...',
                     '{#f/17}* $(name) and I were still in the middle of the room, doing our thing.',
                     '{#f/20}* But now we had an entire orchestra behind us!',
                     '{#f/17}* We must have performed half of the Harmonexus Index that day.',
                     "{#f/17}* ... it's an old book full of songs from our culture."
                  ],
                  [
                     '{#p/asriel1}{#f/13}* All that because we played pretend with some fire pokers...',
                     '{#f/17}* They say you can make an instrument out of anything.',
                     '{#f/13}* ...',
                     "{#f/15}* Wait...\n* I'M an anything..." // hungertale reference 2 electric boogaloo
                  ],
                  ["{#p/asriel1}{#f/20}* Please don't make a musical instrument out of me."]
               ][Math.min(asrielinter.w_tl_tools++, 3)]
               : world.darker
                  ? ['{#p/basic}* Fire pokers.']
                  : SAVE.data.n.plot === 72
                     ? [
                        "{#p/basic}* They're just fire pokers...\n* Or are they?",
                        "* Consider that Toriel's fire is only pleasantly warm, and not hot at all.",
                        '* Why would she need these?',
                        '* Thus, by the process of elimination, these must be advanced musical instruments.'
                     ]
                     : [
                        '{#p/basic}* A rack of advanced musical instruments.',
                        '* Upon closer inspection, you realize these are in fact fire pokers.',
                        "* It's hard to tell, given that these tools were likely made...",
                        '* Before the outpost itself even existed.'
                     ],
         // it's actually goreychair
         w_tl_torichair: () =>
            SAVE.data.b.svr
               ? ['{#p/human}* (You note the exceptional size of the dining chair.)']
               : SAVE.data.n.state_wastelands_toriel === 2 || world.runaway
                  ? ['{#p/basic}* A king-sized dining chair.']
                  : ["{#p/basic}* One of Toriel's dining chairs.\n* Fit for a king."],
         w_toriel_toriel: () => [
            "{#p/basic}* It's locked.",
            toriSV()
               ? SAVE.data.n.plot < 17.001
                  ? '{#p/basic}* It sounds like Toriel is crying...'
                  : '{#p/basic}* It sounds like Toriel is asleep...'
               : '{#p/basic}* It sounds like Toriel is writing...'
         ],
         w_tt_bed: () =>
            SAVE.data.b.svr
               ? ['{#p/human}* (The bed seems a lot smaller than it might have used to.)']
               : SAVE.data.n.state_wastelands_toriel === 2 || world.runaway
                  ? ["{#p/basic}* It's a bed."]
                  : SAVE.data.n.plot < 72 || world.runaway
                     ? [
                        "{#p/basic}* It's Toriel's bed.",
                        ...(world.darker ? [] : ['* Certainly too big for the likes of you.'])
                     ]
                     : [
                        "{#p/basic}* It's Toriel's bed.",
                        "* You've still got some time to go, but you'll grow into it."
                     ],
         w_tt_bookshelf: pager.create(
            1,
            () =>
               SAVE.data.b.svr
                  ? [
                     '{#p/human}* (The books on this bookshelf consist of history, biology, and a foreboding possibility.)'
                  ]
                  : [
                     SAVE.data.n.state_wastelands_toriel === 2 || world.runaway
                        ? "{#p/basic}* It's a bookshelf."
                        : "{#p/basic}* It's Toriel's private bookshelf.",
                     '{#p/human}* (You pick out a book...)',
                     '{#p/basic}* "Our homeworld gone... our people dead... but why?"',
                     '* "Surely, the humans must\'ve had a reason for their attacks."',
                     '* "Did our kind truly pose a threat to them?"',
                     '* "Was the threat of our potential truly that dire?"',
                     '* "Whatever the case may be, we were cornered, and there was nowhere else to go."',
                     '* "Capitulation was our only real means of survival."',
                     '{#p/human}* (You put the book back on the shelf.)'
                  ],
            () =>
               SAVE.data.b.svr
                  ? [
                     '{#p/human}* (The books on this bookshelf consist of history, biology, and a foreboding possibility.)'
                  ]
                  : [
                     SAVE.data.n.state_wastelands_toriel === 2 || world.runaway
                        ? "{#p/basic}* It's a bookshelf."
                        : "{#p/basic}* It's Toriel's private bookshelf.",
                     '{#p/human}* (You pick out a book...)',
                     '{#p/basic}* "When a boss monster is born, a magical link forms between the parents and the child."',
                     '* "Through this, their SOUL is created, ageing the parents along with the child."',
                     '* "The SOUL of a fully-grown boss monster is the strongest known to monsterkind..."',
                     '* "Able to persist after death, if only for the briefest of periods."',
                     '{#p/human}* (You put the book back on the shelf.)'
                  ],
            () =>
               SAVE.data.b.svr
                  ? [
                     '{#p/human}* (The books on this bookshelf consist of history, biology, and a foreboding possibility.)'
                  ]
                  : [
                     SAVE.data.n.state_wastelands_toriel === 2 || world.runaway
                        ? "{#p/basic}* It's a bookshelf."
                        : "{#p/basic}* It's Toriel's private bookshelf.",
                     '{#p/human}* (You pick out a book...)',
                     '{#p/basic}* "We often worry about what would happen if a human attacked us."',
                     '<33>* "But what if one of our own attacked instead...?"',
                     '* "Would we as a society be able to handle such a betrayal?"',
                     '* "But who would think to do such a thing?"',
                     '{#p/human}* (You put the book back on the shelf.)'
                  ]
         ),
         w_tt_cactus: () =>
            SAVE.data.b.svr
               ? ['{#p/human}* (This cactus seems to remind you of someone you once knew.)']
               : SAVE.data.n.plot < 72
                  ? world.darker
                     ? ['{#p/basic}* Finally, a houseplant we can all relate to.']
                     : ['{#p/basic}* Ah, the cactus.\n* Truly the most tsundere of plants.']
                  : ["{#p/basic}* It's not like this cactus was waiting for you to come back or anything..."],
         w_tt_chair: () =>
            SAVE.data.b.svr
               ? ['{#p/human}* (This chair appears to be a little small for the person who owns it.)']
               : world.darker
                  ? ["{#p/basic}* It's a reading chair."]
                  : SAVE.data.n.plot === 72
                     ? [
                        "{#p/basic}* Toriel's dedicated reading chair...",
                        "* ... at least until Asgore decides he'd like it instead.",
                        "* He's always wanted this chair.\n* I'd be surprised if he didn't take it with him."
                     ]
                     : ["{#p/basic}* Toriel's dedicated reading chair.", '* Smells like lazy bones.'],
         w_tt_diary: pager.create(
            0,
            ...[
               [
                  '{#p/human}* (You look to the circled paragraph.)',
                  '{#p/toriel}{#f/21}* "Question: Why did the skeleton want a friend?"',
                  '* "Answer: Because he was feeling BONELY..."',
                  '{#p/basic}* The jokes continue from here at a similar caliber.'
               ],
               [
                  '{#p/human}* (You look to another paragraph.)',
                  '{#p/toriel}{#f/21}* "Question: What\'s another name for a skeleton\'s vices?"',
                  '* "Answer: HOLLOW pursuits..."',
                  "{#p/basic}* There's no sense in continuing to read these."
               ],
               [
                  '{#p/human}* (You look to another paragraph.)',
                  '{#p/toriel}{#f/21}* "Question: How does a skeleton say goodbye?"',
                  '* "Answer: See you to-MARROW..."',
                  "{#p/basic}* That one wasn't even REMOTELY funny."
               ],
               [
                  '{#p/human}* (You look to another paragraph.)',
                  "{#p/basic}* You can't get enough of these lame puns.",
                  '{#p/toriel}{#f/21}* "Question: Why did the skeleton drool in their sleep?"',
                  '* "Answer: Because they were having a FEMUR dream..."',
                  '{#p/basic}* This is getting old...'
               ],
               [
                  '{#p/human}* (You look to another paragraph.)',
                  "{#p/basic}* You still can't get enough of these lame puns.",
                  '{#p/toriel}{#f/21}* "Question: What does a skeleton say to start a fight?"',
                  '* "Answer: I\'ve got a BONE to pick with you..."',
                  "{#p/basic}* Seriously?\n* That wasn't even a pun!"
               ],
               [
                  '{#p/human}* (You look to another paragraph.)',
                  "{#p/basic}* We're losing brain cells here...",
                  "{#p/toriel}{#f/21}* \"'What's up stairs?' asked the skeleton.\"",
                  '* "... the stairs did not reply."',
                  '{#p/basic}* ...\n* I have no words.'
               ],
               [
                  '{#p/human}* (You look to the final paragraph.)',
                  "{#p/basic}* Huh?\n* This one's not a joke...",
                  '{#p/toriel}{#f/21}* "A human has arrived in the Outlands today."',
                  '* "I do trust that Sans would look after them, but..."',
                  '* "I would rather not force him to do so."',
                  '* "Besides, can one royal sentry really protect them from the rest of the outpost?"',
                  '* "Hopefully those kinds of questions will soon be pointless."',
                  '{#p/basic}* ...'
               ],
               ['{#p/human}* (There are no more written entries here.)']
            ].map(
               lines => () =>
                  SAVE.data.b.svr
                     ? ['{#p/human}* (The diary seems to consist primarily of over-the-top skeleton puns.)']
                     : SAVE.data.n.plot === 72
                        ? [
                           '{#p/human}* (You look to the newly-written page.)',
                           '{#p/toriel}{#f/21}* "It seems my preconceptions about Asgore were incorrect."',
                           '* "In failing to confront him, I have failed to understand what was truly going on."',
                           '* "I was right in thinking I did not deserve to be a mother."',
                           '* "But perhaps now... I can learn what being a mother truly means."',
                           '* "I will need to think about this on my own."'
                        ]
                        : SAVE.data.n.plot < 14 || SAVE.data.n.state_wastelands_toriel === 2 || world.runaway
                           ? world.darker
                              ? ["{#p/basic}* It's Toriel's diary.\n* You wouldn't find it funny."]
                              : lines
                           : [
                              '{#p/human}* (You look to the most recently written paragraph.)',
                              ...(world.edgy
                                 ? ["{#p/basic}* It's been scribbled out with a crayon."]
                                 : toriSV()
                                    ? [
                                       '{#p/toriel}{#f/21}* "It has not been the best of days."',
                                       '* "Yet another human has fallen out of my care..."',
                                       '* "The seventh and final human he\'d need to break the force field."',
                                       '* "I should not have allowed this to happen."',
                                       '* "With the stakes so high, a confrontation may be inevitable..."'
                                    ]
                                    : [
                                       '{#p/toriel}{#f/21}* "It has been an interesting day, to say the least."',
                                       '* "A human arrived..."',
                                       '* "Then, tried to leave..."',
                                       '* "And then, the strangest thing happened."',
                                       '* "A reminder I have been in need of for some time..."'
                                    ])
                           ]
            )
         ),
         w_tt_plant: () =>
            SAVE.data.b.svr
               ? ['{#p/human}* (This houseplant strikes you as exceedingly normal.)']
               : ["{#p/basic}* It's a houseplant.", '* What more is there to say?'],
         w_tt_trash: pager.create(
            0,
            () =>
               SAVE.data.b.svr
                  ? ["{#p/human}* (You can't make out what's in the trash...)"]
                  : world.darker
                     ? ['{#p/basic}* Snails.']
                     : SAVE.data.n.plot === 72
                        ? ['{#p/basic}* The snails are beginning to smell... ghostly.', '* ... what could this mean?']
                        : [
                           "{#p/basic}* It's Toriel's private trash can, containing...",
                           '* Snails.',
                           '* Oodles and oodles of snails.'
                        ],
            pager.create(
               1,
               () =>
                  SAVE.data.b.svr
                     ? ["{#p/human}* (You can't make out what's in the trash...)"]
                     : world.darker
                        ? ['{#p/basic}* Snails.']
                        : SAVE.data.n.plot === 72
                           ? ['{#p/basic}* Maybe this is how snails live past their expiry date.']
                           : ['{#p/basic}* And nothing BUT snails.'],
               () =>
                  SAVE.data.b.svr
                     ? ["{#p/human}* (You can't make out what's in the trash...)"]
                     : world.darker
                        ? ['{#p/basic}* Snails.']
                        : SAVE.data.n.plot === 72
                           ? ["{#p/basic}* Or maybe I've just gone and lost it completely."]
                           : ['{#p/basic}* ...\n* Did I mention the snails?'],
               () =>
                  SAVE.data.b.svr
                     ? ["{#p/human}* (You can't make out what's in the trash...)"]
                     : world.darker
                        ? ['{#p/basic}* Snails.']
                        : SAVE.data.n.plot === 72
                           ? ['{#p/basic}* Or maybe...', '* ... wait, what was I saying?']
                           : ['{#p/basic}* Snails.'],
               () =>
                  SAVE.data.b.svr
                     ? ["{#p/human}* (You can't make out what's in the trash...)"]
                     : world.darker
                        ? ['{#p/basic}* Snails.']
                        : SAVE.data.n.plot === 72
                           ? ["{#p/basic}* Oh, right.\n* The meaning of the snails' newfound ghostly scent."]
                           : ['{#p/basic}* Oodles and oodles of snails.']
            )
         ),
         w_tutorial_view: () =>
            SAVE.data.b.svr
               ? ['{#p/human}* (You stare excitedly into the cosmos beyond...)']
               : world.darker
                  ? []
                  : ['{#p/basic}* The first of many windows in this part of the Outlands.'],
         w_tutorial1: () =>
            SAVE.data.b.svr
               ? ['{#p/human}* (The sign describes the qualities of a good relationship.)']
               : [
                  '{#p/basic}* "A good relationship requires trust and kindness to move forward."',
                  ...(world.goatbro && SAVE.flag.n.ga_asrielOutlands7++ < 1
                     ? ['<26>{#p/asriel2}{#f/8}* How grossly sentimental.']
                     : [])
               ]
      },
      piecheck: () =>
         SAVE.data.b.svr
            ? [
               [
                  "{#p/asriel1}{#f/17}* Mom's pies were always the best...",
                  '{#f/13}* I can still remember what the first one I ever had tasted like.',
                  "{#f/15}* I'd never felt so happy to take a bite of something...",
                  "{#f/17}* ... it was like I'd transcended to the next level of confection."
               ],
               [
                  "{#p/asriel1}{#f/20}* Er, maybe I'm overselling it just a little.",
                  "{#f/17}* But I'm telling you right now, Frisk...",
                  '{#f/13}* ... no matter what happens with Mom and Dad...',
                  '{#f/17}* You NEED to have her make one of her pies for me.',
                  "{#f/20}* I'm... kind of curious if I'll still like it after all of this."
               ],
               ['{#p/asriel1}{#f/15}* It sure has been a while, huh...']
            ][Math.min(asrielinter.piecheck++, 2)]
            : SAVE.data.n.plot < 8
               ? world.darker
                  ? ["{#p/basic}* It's just a countertop."]
                  : ['{#p/basic}* There is a nigh-invisible ring-shaped stain on the countertop.']
               : SAVE.data.n.state_wastelands_mash === 1 && SAVE.data.n.plot > 8
                  ? ['{#p/basic}* The ghost of a pie once smashed haunts the countertop.']
                  : SAVE.data.n.plot === 72
                     ? SAVE.data.n.state_wastelands_mash > 0
                        ? ['{#p/basic}* No amount of passed time will fix this atrocity.']
                        : SAVE.data.n.state_wastelands_toriel === 2
                           ? ['{#p/basic}* You feel strongly that you should leave this alone.']
                           : world.runaway
                              ? [
                                 '{#p/basic}* You might have been a bully, but the pie remains untouched.',
                                 '{#p/basic}* Perhaps some things are too sacred, even for you.'
                              ]
                              : [
                                 world.meanie
                                    ? '{#p/basic}* The pie may be intimidated by you, but after all this time...'
                                    : '{#p/basic}* The size of the pie may no longer intimidate you, but after all this time...',
                                 "{#p/basic}* You've gained a sense of respect for the pie that does not permit you to eat it."
                              ]
                     : SAVE.data.n.state_wastelands_mash > 0
                        ? ['{#p/basic}* There is simply nothing more to be done here.']
                        : SAVE.data.n.state_wastelands_toriel === 2
                           ? ['{#p/basic}* You feel strongly that you should leave this alone.']
                           : world.meanie
                              ? [
                                 '{#p/basic}* The size of the pie does not intimidate you at all.',
                                 '{#p/basic}* In fact, it might even be intimidated by you...',
                                 choicer.create('* (Smash the pie?)', 'Yes', 'No')
                              ]
                              : ['{#p/basic}* The size of the pie intimidates you too much to eat it.'],
      piesmash1: ['{#p/human}* (You decide not to smash.)'],
      piesmash2: ['{#p/human}* (You take a swing...)'],
      piesmash3: ["{#p/basic}* It's been utterly destroyed."],
      tutorial_puzzle1: [
         '{#p/toriel}* Unlike the puzzle beforehand, this one is a little different.',
         '{#f/1}* It IS rare, but certain puzzles on the outpost...'
      ],
      tutorial_puzzle2: [
         '{#p/toriel}* ... require the assistance of another monster.',
         '{#f/1}* Do you understand what you must do next?'
      ],
      tutorial_puzzle2a: ['{#p/toriel}{#f/1}* Do you understand what you must do next?'],
      tutorial_puzzle3: ['{#p/toriel}* Very good, little one!\n* Very good.'],
      tutorial_puzzle4: ['{#p/toriel}{#f/1}* Your turn...'],
      tutorial_puzzle4a: ['{#p/toriel}{#f/0}* It is your turn.'],
      tutorial_puzzle5: ['{#p/toriel}* Well done!\n* Only one row to go.'],
      tutorial_puzzle6: ['{#p/toriel}{#f/1}* Yes, yes!\n* I am proud of you, my child...'],
      tutorial_puzzle7: ['{#p/toriel}* I will wait here until you are ready to begin your next lesson.'],
      tutorial_puzzle8a: ['{#p/toriel}* The answer does not lie with me, little one.'],
      tutorial_puzzle8b: ['{#p/toriel}* Try repeating what you have done before.'],
      tutorial_puzzle8c: ['{#p/toriel}{#f/1}* Go on...'],
      twinkly1: [
         "{#p/twinkly}{#f/5}* Howdy!\n* I'm {@fill=#ff0}TWINKLY{@fill=#fff}.\n* {@fill=#ff0}TWINKLY{@fill=#fff} the {@fill=#ff0}STAR{@fill=#fff}!"
      ],
      twinkly2: [
         '{#f/5}* What brings you to the outpost, fellow traveler?',
         '{#f/5}* ...',
         "{#f/8}* You're lost, aren't you...",
         "{#f/5}* Well, good thing I'm here for you!",
         "{#f/8}* I haven't been in my top form for a while, but...",
         '{#f/5}* ... someone ought to teach you how things work around here!',
         '{#f/10}* Guess little old me will have to do.',
         "{#f/5}* Let's get started, shall we?"
      ],
      twinkly3: [
         "{#f/7}* But you already KNEW that, didn'tcha?",
         '{#f/8}* ...',
         "{#f/5}* Still, it's up to me to show you the ropes.",
         "* Let's get started, shall we?"
      ],
      twinkly4: [
         "{#p/twinkly}{#f/6}* Okay, that's enough.",
         '{#f/8}* If you wanna keep resetting, then by all means...',
         '{#f/6}* Do as you wish.',
         "{#f/7}* Just don't expect to get past me so easily."
      ],
      twinkly5: ["{#p/twinkly}{#f/6}* Don't you have anything better to do?"],
      twinkly6: [
         "{#p/twinkly}{#f/6}* Resetting right after you've taken your first hit, huh?",
         '{#f/7}* How pathetic.'
      ],
      twinkly6a: [
         "{#p/twinkly}{#f/11}* As if you think I'd forget about what you did...",
         '{#f/7}* Filthy shard dodger.'
      ],
      twinkly7: ['{#p/twinkly}{#f/7}* I can play this game all day, idiot.'],
      twinkly8: ["{#f/11}* Either way, since you already know what's coming next...{%15}"],
      twinkly9: [
         '{#p/twinkly}{#f/6}* Howdy.',
         "* Seems I'll be fireballed if I stick around too long.",
         '{#f/8}* A shame, really...',
         '{#f/7}* I was gonna have SO much fun with you.',
         '{#f/6}* ...',
         '{#f/5}* Oop, time to go!'
      ],
      twinkly9a: [
         '{#p/twinkly}{#f/12}{#v/0}* What the HELL are you doing, $(name)?',
         '{#f/12}{#v/0}* We had the outpost at our mercy!'
      ],
      twinkly9a1: ['{#f/6}{#v/0}* All we had to do was follow the plan.'],
      twinkly9a2: [
         '{#f/6}{#v/0}* All we had to do was get through the Foundry...',
         '* Finish off the guards...',
         '* And make it to the Citadel!'
      ],
      twinkly9a3: [
         '{#f/6}{#v/0}* All we had to do was finish off the guards...',
         '* And get through the Citadel!'
      ],
      twinkly9a4: [
         '{#f/6}{#v/0}* All we had to do was KILL that stupid robot...',
         '* And get through the Citadel!'
      ],
      twinkly9a5: ['{#f/6}{#v/0}* All we had to do was get through the Citadel!'],
      twinkly9a6: ['{#f/6}{#v/0}* All we had to do was KILL that nerdy trashbag!'],
      twinkly9a7: ['{#f/6}{#v/0}* All we had to do was walk to the end!', '* We were so close!'],
      twinkly9a8: ['{#f/8}{#v/0}* Coward...'],
      twinkly9b: [
         '{#p/twinkly}{#f/5}* $(name)...?',
         "{#f/6}* I'm not really sure what just happened.",
         '{#f/8}* We were on the shuttle, and then...',
         '{#f/8}* ...',
         '{#f/6}* I...',
         '{#f/8}* I have to go...'
      ],
      twinkly9c: [
         "{#p/twinkly}{#f/7}* So, we're back at the beginning, are we?",
         "<26>{#f/5}* I've been expecting you.\n* I wonder how you'll do this time around.",
         "{#f/11}* Who knows?\n* Maybe it'll be easier for you now.",
         '{#f/7}* It certainly was when I had your powers.',
         '{#f/6}* ...',
         '{#f/5}* Well, good luck!'
      ],
      twinkly10: [
         "<20>{#f/5}See that heart? That's your SOUL, the very culmination of your being!",
         '<20>{#f/5}Your SOUL is an important part of you, and needs LOVE to sustain itself.'
      ],
      twinkly11: [
         "<20>{*}{#x2}{#f/5}Out here, LOVE is shared through... {#f/8}little white... {#f/11}'happiness shards.'",
         "<20>{*}{#f/5}To get you started on the right path, I'll share some of my own LOVE.",
         '<20>{*}{#f/5}Try to get as many as you can!{^20}{*}{#x1}{%}'
      ],
      twinkly12: [
         "<20>{*}{#f/8}Whoops, I think you might've missed them...",
         "<20>{*}{#f/5}But that's okay!",
         '<20>{*}{#x2}{#f/10}Here, have some more.{^20}{*}{#x1}{%}'
      ],
      twinkly13: [
         '<20>{*}{#f/12}What the-... are you braindead or something??',
         '<20>{*}{#x2}RUN. INTO. THE. BULLETS!!!{^20}{*}{#x1}{^999}'
      ],
      twinkly14: 'RUN. INTO. THE. happiness shards~',
      twinkly15: [
         '<20>{#v/1}Hee hee hee...',
         "<20>In this world, it's KILL or BE killed.",
         '<20>Imagine, a SOUL like yours crash-landing on my doorstep...',
         "<20>Did you really think I'd pass up such a golden opportunity?"
      ],
      twinkly16: [
         "<20>{#f/7}Nah, you know what's going on here, don'tcha?",
         "<20>You just wanted to torment little old Twinkly, didn'tcha?",
         "<20>Golly... you must have no idea who you're messing with.",
         '<20>{#f/11}Hee hee hee...'
      ],
      twinkly17: ["<20>{#v/1}We'll just have to cut straight to the point, won't we?", '<20>Hee hee hee...'],
      twinkly18: ['<20>{*}{#f/2}{#v/1}{@random=1.1/1.1}DIE.{^20}{%}'],
      twinkly19: ['<20>{#p/toriel}What a terrible creature, torturing such a poor, innocent youth...'],
      twinkly20: [
         '<20>Have no fear, little one.',
         '<20>I am {@fill=#003cff}TORIEL{@fill=#000}, overseer of the {@fill=#f00}OUTLANDS{@fill=#000}.',
         '<20>I come by every day to check for those who have been stranded here.',
         '<20>Follow me, child.\nThere is much I intend to teach you.'
      ],
      twinkly21: [
         '{#p/toriel}{#f/1}* Oh my!\n* Where did you come from, little one?',
         '{#f/1}* Are you injured?',
         '{#f/0}* ...\n* Forgive me for asking so many questions.',
         '{#f/0}* I am {@fill=#003cff}TORIEL{@fill=#fff}, overseer of the {@fill=#f00}OUTLANDS{@fill=#fff}.',
         '<26>{#f/0}* I come by every day to check for those who\n  have been stranded here.',
         '{#f/0}* Follow me, child.\n* There is much I intend to teach you.'
      ],
      twinkly22: ['{#f/0}* This way.'],
      w_coffin0: () => [
         '{#p/human}* (You feel it would be best to leave this be.)',
         ...(SAVE.data.b.svr ? ['{#p/asriel1}{#f/13}* ...'] : [])
      ],
      w_coffin1: () => [
         '{#p/basic}* This coffin is very old.\n* There is nothing remarkable about it.',
         ...(world.goatbro && SAVE.flag.n.ga_asrielCoffin++ < 1
            ? [
               '{#p/asriel2}{#f/13}* Oh, look at that.\n* They made one just for you, $(name).',
               '{#p/asriel2}{#f/5}* How touching.'
            ]
            : [])
      ],
      w_coffin2: pager.create(
         0,
         [
            '{#p/basic}* This coffin dates back to December 251X.',
            '* There is an old record-keeping manifest stashed next to it...',
            choicer.create('* (Access the manifest?)', 'Yes', 'No')
         ],
         [
            '{#p/human}* (You once again pick up the manifest.)',
            choicer.create('* (Access the manifest?)', 'Yes', 'No')
         ]
      ),
      w_coffin3: [choicer.create('* (Read the next page?)', 'Yes', 'No')],
      w_coffin4: ['{#p/human}* (But there were no further pages to be read.)'],
      w_coffin5: ['{#p/human}* (You put the manifest back where it belongs.)'],
      w_dummy1: () =>
         SAVE.data.b.svr
            ? ['{#p/human}* (You place your hands on the dummy.)\n* (It seems very worn out.)']
            : ['{#p/basic}* A training dummy, circa 251X.\n* CITADEL standard-issue.'],
      wonder1: [
         '{#p/basic}* Can you hear it?\n* The song of the stars?',
         "* At certain places on the outpost, like this one... it's there.",
         '* You just have to be listening for it.'
      ]
   },

   b_group_outlands: {
      froggitWhimsun: ['{#p/story}* Space frogs and Starflies!\n* Or something of the like.'],
      froggitWhimsun2a: ['{#p/story}* Space frogs...?'],
      froggitWhimsun2b: ['{#p/story}* Starflies...?'],
      looxMigospWhimsun: ["{#p/story}* It's the troublesome trio!"],
      looxMigospWhimsun2: ['{#p/story}* The trio has become a duo.'],
      looxMigospWhimsun3: ['{#p/story}* Only one remains.'],
      moldsmalMigosp: ['{#p/story}* Silente and company present themselves!']
   },

   b_opponent_froggit: {
      act_check: ['{#p/story}* FROGGIT - ATK 4 DEF 5\n* Life is difficult for this monster.'],
      act_check2: ['{#p/story}* FROGGIT - ATK 4 DEF 5\n* Life is getting better for this monster.'],
      act_check3: ["{#p/story}* FROGGIT - ATK 4 DEF 5\n* Life just doesn't seem to get easier for this monster."],
      act_check4: ['{#p/story}* FROGGIT - ATK 4 DEF 5\n* Life is very confusing for this monster.'],
      act_check5: ['{#p/story}* FROGGIT - ATK 4 DEF 5\n* Life seems to be very lovely for this monster.'],
      act_threat: [
         '{#p/human}* (You threaten Froggit.)',
         "{#p/basic}* Froggit doesn't understand what you said..."
      ],
      act_threat2: [
         '{#p/human}* (You threaten Froggit again.)',
         "{#p/basic}* Froggit recalls the previous threat and decides it's time to run away."
      ],
      act_compliment: [
         '{#p/human}* (You compliment Froggit.)',
         "{#p/basic}* Froggit doesn't understand what you said..."
      ],
      act_flirt: [
         '{#p/human}* (You flirt with Froggit.)',
         "{#p/basic}* Froggit doesn't understand what you said..."
      ],
      act_translate0: ["{#p/human}* (But you haven't said anything to translate yet.)"],
      act_translate1: [
         '{#p/human}* (You translate what you said.)\n* (Froggit seems to understand you now.)',
         '{#p/basic}* Froggit is flattered.'
      ],
      act_translate1x: [
         '{#p/human}* (You translate what you said.)\n* (Froggit seems to understand you now.)',
         '{#p/basic}* Froggit is hesitant to continue this battle.'
      ],
      act_translate1y: [
         '{#p/human}* (You translate what you said.)\n* (Froggit seems to understand you now.)',
         '* Thoroughly threatened, Froggit runs away!'
      ],
      act_translate1z: [
         '{#p/human}* (You translate what you said.)\n* (Froggit seems to understand you now.)',
         '{#p/basic}* Froggit shows no sign of fear.'
      ],
      act_translate2: [
         '{#p/human}* (You translate what you said.)\n* (Froggit seems to understand you now.)',
         '{#p/basic}* Froggit is blushing, if only on the inside.'
      ],
      confuseText: ['<08>{#p/basic}{~}Ribbit, ribbit?'],
      flirtText: ['<08>{#p/basic}{~}(Blushes deeply.)\nRibbit..'],
      idleText1: ['<08>{#p/basic}{~}Ribbit, ribbit.'],
      idleText2: ['<08>{#p/basic}{~}Croak, croak.'],
      idleText3: ['<08>{#p/basic}{~}Hop, hop.'],
      idleText4: ['<08>{#p/basic}{~}Meow.'],
      mercyStatus: ['{#p/story}* Froggit seems reluctant to fight you.'],
      name: '* Froggit',
      meanText: ['<08>{#p/basic}{~}(Shiver, shake.)\nRibbit..'],
      niceText: ['<08>{#p/basic}{~}(Blushes softly.)\nRibbit..'],
      perilStatus: ['{#p/story}* Froggit is trying to run away.'],
      status1: ['{#p/story}* Froggit hops near!'],
      status2: ['{#p/story}* The battlefield is filled with the smell of crystherium utilia.'],
      status3: ["{#p/story}* Froggit doesn't seem to know why it's here."],
      status4: ['{#p/story}* Froggit hops to and fro.']
   },
   b_opponent_whimsun: {
      act_check: ['{#p/story}* FLUTTERLYTE - ATK 5 DEF 0\n* This monster has only just learned how to fly...'],
      act_check2: ['{#p/story}* FLUTTERLYTE - ATK 5 DEF 0\n* This monster wishes it had stayed on the ground.'],
      act_console: [
         '{#p/human}* (You help Flutterlyte fly higher into the air.)',
         '{#p/basic}* Flutterlyte thanks you, and flies away...'
      ],
      act_flirt: [
         '{#p/human}* (You flirt with Flutterlyte.)',
         '{#p/basic}* Unable to handle your compliment, Flutterlyte bursts into tears and flies away...'
      ],
      act_terrorize: [
         '{#p/human}* (You weep and wail and gnash your teeth.)',
         '{#p/basic}* Flutterlyte panicks and flies away...'
      ],
      idleTalk1: ['<08>{#p/basic}{~}Why is this so hard..'],
      idleTalk2: ['<08>{#p/basic}{~}Please help me..'],
      idleTalk3: ["<08>{#p/basic}{~}I'm scared.."],
      idleTalk4: ["<08>{#p/basic}{~}I can't do this.."],
      idleTalk5: ['<08>{#p/basic}{~}\x00*sniff sniff*'],
      name: '* Flutterlyte',
      perilStatus: ['{#p/story}* Flutterlyte is barely keeping itself in the air.'],
      status1: ['{#p/story}* Flutterlyte comes forth!'],
      status2: ['{#p/story}* Flutterlyte continues to mutter apologies.'],
      status3: ['{#p/story}* Flutterlyte hovers meekly.'],
      status4: ['{#p/story}* The smell of fresh peaches permeates the air.'],
      status5: ['{#p/story}* Flutterlyte is hyperventilating.'],
      status6: ['{#p/story}* Flutterlyte avoids eye contact.']
   },
   b_opponent_loox: {
      act_check: ['{#p/story}* OCULOUX - ATK 6 DEF 6\n* Staring contest master.\n* Family name: Eyewalker'],
      act_check2: [
         "{#p/story}* OCULOUX - ATK 6 DEF 6\n* This bully is trying very hard to pretend it's not flattered."
      ],
      act_check3: ['{#p/story}* OCULOUX - ATK 6 DEF 6\n* This monster is honored to be in your line of sight.'],
      act_dontpick: [
         '{#p/human}* (You stare at Oculoux.)\n* (Oculoux stares back harder.)',
         "{#p/human}* (Oculoux's eye becomes increasingly strained, and eventually...)",
         '{#p/human}* (... Oculoux bows.)'
      ],
      act_flirt: ['{#p/human}* (You flirt with Oculoux.)'],
      act_pick: ['{#p/human}* (You rudely lecture Oculoux about staring at people.)'],
      checkTalk1: ['<08>{#p/basic}{~}Do you dare to stare?'],
      dontDeny1: ['<08>{#p/basic}{~}Look who changed their mind.'],
      dontTalk1: ['<99>{#p/basic}{~}The gaze\nis\nstrong\nwith\nthis one.'],
      flirtDeny1: ['<08>{#p/basic}{~}How tsundere of you.'],
      flirtTalk1: ['<08>{#p/basic}{~}What? N-no way!'],
      hurtStatus: ['{#p/story}* Oculoux is watering.'],
      idleTalk1: ["<08>{#p/basic}{~}I've got my eye on you."],
      idleTalk2: ["<08>{#p/basic}{~}Don't tell me what to do."],
      idleTalk3: ['<08>{#p/basic}{~}Staring is caring.'],
      idleTalk4: ['<08>{#p/basic}{~}What an eyesore.'],
      idleTalk5: ['<08>{#p/basic}{~}How about a staring contest?'],
      name: '* Oculoux',
      pickTalk1: ['<08>{#p/basic}{~}How dare you question our way of life!'],
      spareStatus: ["{#p/story}* Oculoux doesn't care about fighting anymore."],
      status1: ['{#p/story}* A pair of Oculoux walked in!'],
      status2: ['{#p/story}* Oculoux is staring right through you.'],
      status3: ['{#p/story}* Oculoux gnashes its teeth.'],
      status4: ['{#p/story}* Smells like eyedrops.'],
      status5: ['{#p/story}* Oculoux has gone bloodshot.'],
      status6: ['{#p/story}* Oculoux is gazing at you.'],
      status7: ['{#p/story}* Oculoux is now alone.']
   },
   b_opponent_migosp: {
      act_check: ["{#p/story}* SILENTE - ATK 7 DEF 5\n* It seems evil, but it's just with the wrong crowd..."],
      act_check2: ['<33>{#p/story}* SILENTE - ATK 7 DEF 5\n* Now alone, it joyfully expresses itself through dance.'],
      act_check3: ['{#p/story}* SILENTE - ATK 7 DEF 5\n* It seems comfortable with you.\n* VERY comfortable.'],
      act_check4: ["{#p/story}* SILENTE - ATK 7 DEF 5\n* Despite its tough act, it's clearly in pain..."],
      act_flirt: ['{#p/human}* (You flirt with Silente.)'],
      flirtTalk: ['<08>{#p/basic}{~}Hiya~'],
      groupInsult: ["{#p/human}* (You try insulting Silente, but it's too focused on the others.)"],
      groupStatus1: ['{#p/story}* Silente is whispering to the others.'],
      groupStatus2: ["{#p/story}* It's starting to smell like a roach motel."],
      groupTalk1: ['<08>{#p/basic}FILTHY SINGLE MINDER\n..'],
      groupTalk2: ['<08>{#p/basic}OBEY THE OVERMIND\n..'],
      groupTalk3: ['<08>{#p/basic}LEGION! WE ARE LEGION!'],
      groupTalk4: ['<08>{#p/basic}HEED THE SWARM\n..'],
      groupTalk5: ['<08>{#p/basic}IN UNISON, NOW\n..'],
      groupTalk6: ["<08>{#p/basic}I DON'T CARE."],
      name: '* Silente',
      perilStatus: ['{#p/story}* Silente refuses to give up.'],
      soloInsult: ["{#p/human}* (You try insulting Silente, but it's too happy to care.)"],
      soloStatus: ["{#p/story}* Silente doesn't have a care in the cosmos."],
      soloTalk1: ["<08>{#p/basic}{~}Bein' me is the best!"],
      soloTalk2: ['<08>{#p/basic}{~}La la~ Just be your- self~'],
      soloTalk3: ["<08>{#p/basic}{~}Nothin' like alone time!"],
      soloTalk4: ['<08>{#p/basic}{~}Mmm, cha cha cha!'],
      soloTalk5: ['<08>{#p/basic}{~}Swing your arms, baby~']
   },
   b_opponent_mushy: {
      act_challenge: [
         '{#p/human}* (You challenge Mushy to a duel.)',
         "<33>{#p/story}* Mushy's SPEED up for this turn!"
      ],
      act_check: ['{#p/story}* MUSHY - ATK 6 DEF 6\n* Huge fan of space cowboys.\n* Gunslinger.'],
      act_check2: ['{#p/story}* MUSHY - ATK 6 DEF 6\n* Huge fan of space cowboys.\n* Even the sexy ones.'],
      act_check3: ['{#p/story}* MUSHY - ATK 6 DEF 6\n* After giving it your all, this gunslinger is impressed.'],
      act_flirt: ['{#p/human}* (You flirt with Mushy.)'],
      act_taunt: ['{#p/human}* (You taunt Mushy.)'],
      challengeStatus: ['{#p/story}* Mushy awaits your next challenge.'],
      challengeTalk1: ["<08>{#p/basic}{~}Let's see what you got."],
      challengeTalk2: ['<08>{#p/basic}{~}Think you can take me?'],
      flirtStatus1: ['{#p/story}* Mushy, the confused and the aroused.'],
      flirtTalk1: ['<08>{#p/basic}{~}H-hey, knock it off!'],
      hurtStatus: ['{#p/story}* Mushy makes a last stand.'],
      idleTalk1: ['<08>{#p/basic}{~}Bang!\nBang!\nBang!'],
      idleTalk2: ['<08>{#p/basic}{~}Saddle up!'],
      idleTalk3: ["<08>{#p/basic}{~}All in a day's."],
      name: '* Mushy',
      spareStatus: ['{#p/story}* Mushy bows out of respect.'],
      status1: ['{#p/story}* Mushy stormed in!'],
      status2: ['{#p/story}* Mushy adjusts their stance.'],
      status3: ['{#p/story}* Mushy is preparing for a grand standoff.'],
      status4: ['{#p/story}* Mushy reaches for their holster.'],
      status5: ['{#p/story}* Smells like petrichor.'],
      tauntStatus1: ["{#p/story}* Mushy pretends they aren't bothered by your taunts."],
      tauntTalk1: ["<08>{#p/basic}{~}As if that'll work on me."]
   },
   b_opponent_napstablook: {
      act_check: ["{#p/story}* NAPSTABLOOK - ATK 10 DEF 255\n* It's Napstablook."],
      act_check2: [
         "{#p/story}* NAPSTABLOOK - ATK 10 DEF 255\n* It doesn't seem like they want to be here anymore."
      ],
      act_check3: ['{#p/story}* NAPSTABLOOK - ATK 10 DEF 255\n* Hopeful, for the first time in a while...'],
      act_check4: ['{#p/story}* NAPSTABLOOK - ATK 10 DEF 255\n* The romantic tension is at an all-time high.'],
      awkwardTalk: ['<11>{#p/napstablook}{~}uh...'],
      checkTalk: ["<11>{#p/napstablook}{~}that's me..."],
      cheer0: ['{#p/human}* (You try to console Napstablook.)'],
      cheer1: ['{#p/human}* (You give Napstablook a patient smile.)'],
      cheer2: ['{#p/human}* (You tell Napstablook a little joke.)'],
      cheer3: ["{#p/human}* (You show adoration for Napstablook's top hat.)"],
      cheerTalk1: ['<11>{#p/napstablook}{~}...?'],
      cheerTalk2: ['<11>{#p/napstablook}{~}heh heh...'],
      cheerTalk3: [
         '<11>{*}{#p/napstablook}{~}let me {#x1}try...{^20}{#x2}{^20}{%}',
         "<11>{*}{#p/napstablook}{~}i call it {#x3}'dapper blook'{^40}{%}",
         '<11>{*}{#p/napstablook}{~}do you like it?{^40}{%}'
      ],
      cheerTalk4: ['<11>{#p/napstablook}{~}oh gee.....'],
      consoleTalk1: ['<11>{#p/napstablook}{~}yeah, yeah...'],
      consoleTalk2: ['<11>{#p/napstablook}{~}not buying it...'],
      consoleTalk3: ["<11>{#p/napstablook}{~}you're not sorry..."],
      deadTalk: [
         "<11>{#p/napstablook}{~}umm... you do know you can't kill ghosts, right...",
         "<11>{~}we're sorta incorporeal and all",
         "<11>{~}i was just lowering my hp because i didn't want to be rude",
         '<11>{~}sorry... i just made this more awkward...',
         '<11>{~}pretend you beat me...',
         '<11>{~}ooooooooo'
      ],
      flirt1: ['{#p/human}* (You flirt with Napstablook.)'],
      flirt2: ['{#p/human}* (You try your best pickup line on Napstablook.)'],
      flirt3: ['{#p/human}* (You give Napstablook a heartfelt compliment.)'],
      flirt4: ['{#p/human}* (You reassure Napstablook of your feelings towards them.)'],
      flirtTalk1: ["<11>{#p/napstablook}{~}i'd just weigh you down"],
      flirtTalk2: ["<11>{#p/napstablook}{~}oh.....\ni've heard that one....."],
      flirtTalk3: ['<11>{#p/napstablook}{~}uh... you really think so?'],
      flirtTalk4: ["<11>{#p/napstablook}{~}oh, you're serious...", '<11>{~}oh no.....'],
      idleTalk1: ["<11>{#p/napstablook}{~}i'm fine, thanks"],
      idleTalk2: ['<11>{#p/napstablook}{~}just pluggin along...'],
      idleTalk3: ['<11>{#p/napstablook}{~}just doing my thing...'],
      insultTalk1: ['<11>{#p/napstablook}{~}i knew it...'],
      insultTalk2: ['<11>{#p/napstablook}{~}whatever...'],
      insultTalk3: ['<11>{#p/napstablook}{~}say what you will...'],
      insultTalk4: ['<11>{#p/napstablook}{~}let it all out...'],
      name: '* Napstablook',
      silentTalk: ['<11>{#p/napstablook}{~}...'],
      sincere: ["{#p/human}* (You flirtatiously comment on Napstablook's top hat.)"],
      sincereTalk: ['<11>{#p/napstablook}{~}heh... thanks'],
      status1: ['{#p/story}* Here comes Napstablook.'],
      status2: ['{#p/story}* Napstablook looks just a little better.'],
      status3: ['{#p/story}* Napstablook wants to show you something.'],
      status3a: ['{#p/story}* Napstablook awaits your reply.'],
      status4: ["{#p/story}* Napstablook's eyes are glistening."],
      status5: ['{#p/story}* Napstablook is clearly not sure how to handle this.'],
      status5a: ['{#p/story}* Napstablook is questioning their very being.'],
      status6: ['{#p/story}* Napstablook is biding their time.'],
      status7: ['{#p/story}* Napstablook is waiting for your next move.'],
      status8: ['{#p/story}* Napstablook is staring off into the distance.'],
      status9: ["{#p/story}* Napstablook is wishing they weren't here."],
      status10: ['{#p/story}* Napstablook is trying their best to ignore you.'],
      suck: ['{#p/human}* (You tell Napstablook their hat sucks bad.)'],
      threat: ['{#p/human}* (You threaten Napstablook.)']
   },
   b_opponent_toriel: {
      spannerText: ['{#p/human}* (You throw the spanner.)\n* (Toriel picks it up and returns it to you.)'],
      spannerTalk: ['<11>{#p/toriel}{#f/3}That will accomplish nothing, my child.'],
      spannerTalkRepeat: ['<11>{#p/toriel}{#f/4}...'],
      act_check: ['{#p/story}* TORIEL - ATK 80 DEF 80\n* Knows best for you.'],
      act_check2: ['{#p/story}* TORIEL - ATK 80 DEF 80\n* Seems to be holding back.'],
      act_check3: ['{#p/story}* TORIEL - ATK 80 DEF 80\n* Looks pre-occupied.'],
      act_check4: ['{#p/story}* TORIEL - ATK 80 DEF 80\n* Just wants the best for you.'],
      act_check5: ['{#p/story}* TORIEL - ATK 80 DEF 80\n* Thinks you are "adorable."'],
      precrime: ['<20>{#p/asriel2}...'],
      criminal1: (reveal: boolean) => [
         '<20>{#p/asriel2}{#f/3}Howdy, $(name).',
         "<20>{#f/3}It's me, Asriel...",
         "<20>{#f/3}Don't you recognize me?",
         '<20>{#f/4}...',
         ...(reveal
            ? ["<20>{#f/2}Heh... don't pretend it's not you.", "<20>{#f/1}I know you're empty inside, just like me."]
            : [
               "<20>{#f/4}I've been trapped in that star for so long...",
               '<20>{#f/3}But now, seeing you here before me...',
               '<20>{#f/4}I knew it was worth the wait.',
               "<20>{#f/1}You're empty inside, just like me, aren't you?"
            ]),
         "<20>{#f/5}We're still inseparable after all these years...",
         "<20>{#f/1}Listen.\nI have a plan that'll bring us closer than ever.",
         '<20>{#f/2}With me, you, and our stolen SOULs...',
         "<20>{#f/1}Let's destroy everything on this wretched outpost.",
         '<21>{#f/2}Anyone who dares to stand in the way of our perfect future...',
         "<20>{#f/1}Let's turn 'em all to dust."
      ],
      criminal2: ['<20>{#p/asriel2}{#f/3}Welcome back, $(name).', '<20>{#f/4}Ready to pick up where we last left off?'],
      criminal3: ['<20>{#p/asriel2}{#f/3}Well then.', '<20>{#f/4}...', "<20>{#f/4}Let's just get going."],
      cutscene1: [
         "{#p/basic}* Maybe because I'm the only one you'll listen to.",
         '{#p/toriel}{#f/16}* ...!?',
         "{#p/basic}* But what do I know, huh?\n* I'm just a sweet, innocent little child."
      ],
      cutscene2: [
         '{#p/toriel}{#f/3}* ...',
         '{#p/toriel}{#f/4}* This is impossible...',
         '{#f/0}* I must be dreaming.\n* Or hallucinating.\n* Or maybe...',
         '{#p/basic}* No.',
         '{#p/basic}* This is real.',
         '{#p/toriel}{#f/5}* But you died, $(name).',
         '{#f/5}* You cannot possibly be speaking to me.',
         "{#p/basic}* Pretend it's a dream, then.",
         '{#p/basic}* If that works for you.',
         '{#p/toriel}{#f/5}* ...',
         '{#p/toriel}{#f/9}* What do you want?',
         '{#p/basic}* Toriel...',
         "{#p/basic}* You know how I feel about humanity, don't you?",
         '{#p/toriel}{#f/13}* Right.',
         '{#p/basic}* Wrong.',
         '{#p/basic}* ... not about this human.',
         "* Ever since they got here, I've been following them...",
         "* And now they're asking me to reach out to you.",
         '* What do you think that means?',
         '{#p/toriel}{#f/13}* ...',
         '{#p/basic}* It means you have to let them go.',
         '{#p/toriel}{#f/12}* ... do you not understand what is at stake?',
         '{#f/11}* If I let them go, they will surely die.',
         '{#p/basic}* ... come on.',
         "{#p/basic}* That's not really why you're doing this, is it?",
         '{#p/toriel}{#f/12}* With that attitude, perhaps you really are $(name).',
         '{#p/toriel}{#f/11}* You always did question my authority.',
         '{#p/basic}* I think I have every right to.',
         '{#p/basic}* You wish to keep them here because you are afraid of what lies beyond the Outlands.',
         "<33>{#p/basic}* But things aren't the same as they were a hundred years ago.",
         "<33>{#p/basic}* You're only ignorant about it because you're too afraid to go see for yourself.",
         '{#p/toriel}{#f/13}* ...',
         "{#p/toriel}{#f/13}* ... but if I let them go, I won't be able to...",
         '{#p/basic}* Be there for them?',
         '{#p/basic}* Hey, I know the feeling.',
         '{#p/basic}* But keeping them here would be dooming them to death anyway.',
         "{#p/basic}* What's a life if it doesn't get to do anything worth living for?",
         '{#p/toriel}{#f/13}* ...',
         '{#p/toriel}{#f/13}* $(name), I...',
         '{#p/basic}* You gave them a spare cell phone, remember?',
         "{#p/basic}* Keep the line open, and maybe they'll give you a call.",
         '{#p/toriel}{#f/9}* ... and what about you?',
         "{#p/basic}* Look.\n* I'll be alright.",
         "{#p/basic}* All I ask is that you don't forget about THEM after they're gone.",
         '{#p/toriel}{#f/13}* ...',
         '{#p/basic}* Goodbye, Toriel.',
         '{#p/toriel}{#f/14}* ... goodbye, $(name).'
      ],
      death1: [
         '<11>{#p/toriel}{#f/21}{#v/1}{#i/3}{#x1}{@random=1.1/1.1}Urgh...',
         '<11>{#v/1}{#i/3}{#x1}{@random=1.1/1.1}To strike me down at my weakest moment...',
         '<11>{#v/1}{#i/3}{#x1}{@random=1.1/1.1}...',
         '<11>{#v/2}{#i/4}{#x2}{@random=1.1/1.1}Ha...\nHa...',
         '<11>{#v/2}{#i/4}{#x2}{@random=1.1/1.1}It seems, young one...',
         '<11>{#v/3}{#i/5}{#x2}{@random=1.2/1.2}I was a fool for trusting you... all along...'
      ],
      death2: [
         '<11>{#p/toriel}{#f/21}{#v/1}{#i/3}{#x1}{@random=1.1/1.1}Urgh...',
         '<11>{#v/1}{#i/3}{#x3}{@random=1.1/1.1}To think I was protecting you from them...',
         '<11>{#v/1}{#i/3}{#x4}{@random=1.1/1.1}...',
         '<11>{#v/2}{#i/4}{#x2}{@random=1.1/1.1}Ha...\nHa...',
         '<11>{#v/2}{#i/4}{#x1}{@random=1.1/1.1}It seems, young one...',
         '<11>{#v/3}{#i/5}{#x2}{@random=1.2/1.2}I was actually protecting them... from you...'
      ],
      death3: [
         '<11>{#p/toriel}{#f/21}{#v/1}{#i/3}{#x1}{@random=1.1/1.1}Urgh...',
         '<11>{#v/1}{#i/3}{#x1}{@random=1.1/1.1}You are stronger than I thought...',
         '<11>{#v/1}{#i/3}{#x3}{@random=1.1/1.1}Listen to me, young one...',
         '<11>{#v/1}{#i/3}{#x3}{@random=1.1/1.1}In a few moments, I will turn to dust...',
         '<11>{#v/1}{#i/3}{#x3}{@random=1.1/1.1}When that happens, you must take my SOUL...',
         '<11>{#v/1}{#i/3}{#x1}{@random=1.1/1.1}It is the only real way you can escape this place.',
         "<11>{#v/2}{#i/4}{#x3}{@random=1.1/1.1}You cannot... allow ASGORE's plan to... succeed...",
         '<11>{#v/2}{#i/4}{#x1}{@random=1.1/1.1}...',
         '<11>{#v/3}{#i/5}{#x2}{@random=1.2/1.2}My child...',
         "<11>{#v/3}{#i/5}{#x4}{@random=1.2/1.2}Be good... won't you?"
      ],
      magic1: ["<20>{#p/asriel2}{#f/3}Let's go."],
      name: '* Toriel',
      spareTalk1: ['<11>{#p/toriel}{#f/11}...'],
      spareTalk2: ['<11>{#p/toriel}{#f/11}...\n...'],
      spareTalk3: ['<11>{#p/toriel}{#f/11}...\n...\n...'],
      spareTalk4: ['<11>{#p/toriel}{#f/17}...?'],
      spareTalk5: ['<11>{#p/toriel}{#f/17}What are you doing?'],
      spareTalk6: ['<11>{#p/toriel}{#f/17}...'],
      spareTalk7: ['<11>{#p/toriel}{#f/17}What are you trying to prove?'],
      spareTalk8: ['<11>{#p/toriel}{#f/17}...'],
      spareTalk9: ['<11>{#p/toriel}{#f/12}Fight me or leave!'],
      spareTalk10: ['<11>{#p/toriel}{#f/12}Stop looking at me that way!'],
      spareTalk11: ['<11>{#p/toriel}{#f/12}Go away!'],
      spareTalk12: ['<11>{#p/toriel}{#f/13}...'],
      spareTalk13: ['<11>{#p/toriel}{#f/13}...\n...'],
      spareTalk14: ['<11>{#p/toriel}{#f/13}...\n...\n...'],
      spareTalk15: [
         '<11>{#p/toriel}{#f/13}I know you want to go home...',
         '<11>{#p/toriel}{#f/9}But you may die trying to get there.'
      ],
      spareTalk16: ['<11>{#p/toriel}{#f/14}So please... go back the other way.'],
      spareTalk17: [
         '<11>{#p/toriel}{#f/13}I know we do not have much...',
         '<11>{#p/toriel}{#f/10}But we can still have a good life.'
      ],
      spareTalk18: [
         '<11>{#p/toriel}{#f/13}You and I, like a family...',
         '<11>{#p/toriel}{#f/10}Does that not sound good?'
      ],
      spareTalk19: ['<11>{#p/toriel}{#f/21}...'],
      spareTalk20: ['<11>{#p/toriel}{#f/18}Why are you making this so difficult?'],
      spareTalk21: ['<11>{#p/toriel}{#f/21}...'],
      spareTalk22: ['<11>{#p/toriel}{#f/18}Please, just...', '<11>{#p/toriel}{#f/9}Go back the other way.'],
      spareTalk23: ['<11>{#p/toriel}{#f/21}...'],
      spareTalk24: ['<11>{#p/toriel}{#f/18}Oh, child...'],
      spareTalk28b: [
         '<11>{#p/toriel}{#f/9}Maybe it was foolish of me...',
         '<11>{#f/13}Trying to stop you like this...',
         '<11>{#f/9}Maybe I should have just let you go.'
      ],
      spareTalk28c: ['<11>{#p/toriel}{#f/17}...?', '<11>{#f/17}Why are you calling out for "$(name)?"'],
      status1: ['{#p/story}* Toriel now stands before you.'],
      status2: ['{#p/story}* Toriel prepares a magical attack.'],
      status3: ['{#p/story}* Toriel is acting aloof.'],
      status4: ['{#p/story}* Toriel is looking through you.'],
      status5: ['{#p/story}* ...'],
      assistStatus: ['{#p/basic}* There must be another way...'],
      talk1: ['{#p/human}* (You ask Toriel to let you through.)\n* (No effect.)'],
      talk2: ["{#p/human}* (You ask Toriel why she's really doing this.)\n* (She winces briefly.)"],
      talk3: ['{#p/human}* (You begged Toriel to stop.)\n* (She hesitates.)'],
      talk4: [
         '{#p/human}* (You once again begged Toriel to stop.)',
         '{#p/basic}* ... perhaps there is too much at stake for her.'
      ],
      talk5: ['{#p/human}* (You yell at Toriel.)\n* (She closes her eyes and takes a deep breath.)'],
      talk6: [
         '{#p/human}* (You once again yell at Toriel.)',
         "{#p/basic}* ... perhaps talking won't do anymore good."
      ],
      talk7: ["{#p/human}* (But you couldn't think of anything else to say.)"],
      talk8: ['{#p/human}* (But there was no sense in doing that now.)'],
      theft: ['<20>{*}{#p/twinkly}Mine.{^15}{%}']
   },

   c_name_outlands: {
      hello: 'Say Hello',
      about: 'About Yourself',
      mom: 'Call Her "Mom"',
      flirt: 'Flirt',
      toriel: "Toriel's Phone",
      puzzle: 'Puzzle Help',
      insult: 'Insult'
   },

   c_call_outlands: {
      about1: [
         '{#p/toriel}{#f/1}* You want to know more about me...?',
         '{#f/0}* Well, I am afraid there is not much to say.',
         '{#f/0}* I am but a silly old lady who worries too often!'
      ],
      about2: [
         '{#p/toriel}{#f/1}* If you really want to know more about me...',
         '{#f/1}* Why not take a look around...?',
         '{#f/0}* I have built or at least helped to build much of what you see.'
      ],
      about3: [
         '{#p/toriel}{#f/1}* If you really want to know more about me...',
         '{#f/2}* You should think twice about insulting me over the phone!'
      ],
      flirt1: [
         '{#p/toriel}{#f/7}* ... huh?',
         '{#f/1}* Oh, heh... heh...',
         '{#f/6}* Hahaha!\n* I could pinch your cheek!',
         '{#f/0}* You can certainly find better than an old woman like me.'
      ],
      flirt2: [
         '{#p/toriel}{#f/7}* ...\n* Oh dear, are you serious...?',
         '{#f/1}* My child, I do not know if this is pathetic or endearing.'
      ],
      flirt3: [
         '{#p/toriel}{#f/7}* ...\n* Oh dear, are you serious...?',
         '{#f/5}* And after you called me "Mother..."',
         '{#f/1}* Well then.\n* You are a very "interesting" child.'
      ],
      flirt4: ['{#p/toriel}{#f/3}* ...', '{#p/toriel}{#f/4}* I cannot begin to understand you.'],
      hello: [
         [
            '{#p/toriel}* This is Toriel.',
            '{#f/1}* You only wanted to say hello...?',
            '{#f/0}* Well then.\n* "Hello!"',
            '{#f/0}* I hope that suffices.\n* Hee hee.'
         ],
         [
            '{#p/toriel}* This is Toriel.',
            '{#f/1}* You wanted to say hello again?',
            '{#f/0}* "Salutations" it is!',
            '{#f/1}* Is that enough?'
         ],
         [
            '{#p/toriel}{#f/1}* Are you bored?',
            '{#f/0}* My apologies.\n* I should have given you something to do.',
            '{#f/1}* Why not use your imagination to distract yourself?',
            '{#f/0}* Pretend you are... a fighter pilot!',
            '{#f/1}* Twisting and twirling, doing barrel rolls at light speed...',
            '{#f/1}* Can you do that for me?'
         ],
         [
            '{#p/toriel}{#f/5}* Hello, small one.',
            '{#f/9}* I am sorry, but I do not have much else to say.',
            '{#f/1}* It was nice to hear your voice, though...'
         ]
      ],
      helloX: ['{#p/toriel}{#g/torielLowConcern}* Hello?'],
      mom1: [
         '{#p/toriel}* ...',
         '{#f/7}* Huh?\n* Did you just call me "Mom?"',
         '{#f/1}* Well...\n* I suppose...',
         '{#f/1}* Would that make you happy?',
         '{#f/1}* To call me...\n* "Mother?"',
         '{#f/0}* Well then.\n* Call me whatever you like!'
      ],
      mom2: ['{#p/toriel}{#f/7}* ...\n* Oh my... again?', '{#f/0}* Hee hee...\n* You are a very sweet child.'],
      mom3: [
         '{#p/toriel}{#f/7}* ...\n* Oh my... again?',
         '{#f/5}* And after you flirted with me...',
         '{#f/1}* Well then.\n* You are a very "interesting" child.'
      ],
      mom4: ['{#p/toriel}{#f/5}* ...'],
      puzzle1: [
         '{#p/toriel}{#f/1}* Help with a puzzle...?',
         '{#f/1}* You have not left the room yet, have you?',
         '{#f/0}* Wait for me to return, and we can solve it together.'
      ],
      puzzle2: [
         '{#p/toriel}{#f/1}* Help with a puzzle...?',
         '{#f/23}* ... something tells me you do not sincerely need my help.'
      ],
      insult1: (sus: boolean) =>
         sus
            ? [
               '{#p/toriel}{#f/0}* Hello?\n* This is...',
               '{#f/2}* ...!',
               '{#f/3}* Would you mind repeating that for me?'
            ]
            : [
               '{#p/toriel}{#f/0}* Hello?\n* This is...',
               '{#f/2}* ...!',
               '{#f/1}* My child... I do not think that means what you think it means.'
            ],
      insult2: (sus: boolean) =>
         sus
            ? ['{#p/toriel}{#f/15}* ...', '{#f/12}* I am going to pretend you did not just say that to me.']
            : ['{#p/toriel}{#f/1}* My child...']
   },

   i_candy: {
      battle: {
         description: 'Has a distinct, non-licorice flavor.',
         name: 'Candy'
      },
      drop: ['{#p/human}* (You throw away the Monster Candy.)'],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? ['{#p/human}* (10 HP.)']
            : ['{#p/basic}* "Monster Candy" Heals 10 HP\n* Has a distinct, non-licorice flavor.'],
      name: 'Monster Candy',
      use: ['{#p/human}* (You eat the Monster Candy.)']
   },
   i_water: {
      battle: {
         description: 'Smells like Dihydrogen Monoxide.',
         name: 'Water'
      },
      drop: ['{#p/human}* (You throw away the Water.)'],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? ['{#p/human}* (12 HP.)']
            : ['{#p/basic}* "Water" Heals 12 HP\n* Smells like Di-Hydrogen Monoxide.'],
      name: 'Water',
      use: () => [
         '{#p/human}* (You drank the Water.)',
         ...(SAVE.data.b.ufokinwotm8 ? [] : ["<33>{#p/human}* (You're filled with hydration.)"]) // credits to Anisaly
      ]
   },
   i_chocolate: {
      battle: {
         description: 'A well-deserved chocolate bar.',
         name: 'Chocolate'
      },
      drop: () => [
         '{#p/human}* (You threw away the Chocolate Bar.)',
         ...(SAVE.data.b.svr || world.darker ? [] : ['{#p/basic}* ... oh well.'])
      ],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? ['{#p/human}* (19 HP. This item seems to remind you of someone.)']
            : ['{#p/basic}* "Chocolate Bar" Heals 19 HP\n* It\'s a well-deserved treat.'],
      name: 'Chocolate Bar',
      use: () => [
         '{#p/human}* (You eat the Chocolate Bar.)',
         ...(battler.active && battler.targetCurrent?.opponent.metadata.reactChocolate
            ? ['{#p/basic}* Toriel recognizes the scent and smiles a little.']
            : [])
      ]
   },
   i_delta: {
      battle: {
         description: 'This substance is said to have highly relaxing properties.',
         name: 'Δ-9'
      },
      drop: ['{#p/human}* (You throw away the Δ-9.)'],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? ['{#p/human}* (5 HP. You feel strangely about this item.)']
            : ['{#p/basic}* "Δ-9" Heals 5 HP\n* This substance is said to have highly relaxing properties.'],
      name: 'Δ-9',
      use: ['{#p/human}* (You ingest the Δ-9.)']
   },
   i_halo: {
      battle: {
         description: 'A headband with its own gravity field.',
         name: 'Halo'
      },
      drop: ['{#p/human}* (You fling the Halo away like a frisbee.)'],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? ['{#p/human}* (3 DF.)']
            : ['{#p/basic}* "Halo" (3 DF)\n* A headband with its own gravity field.'],
      name: 'Halo',
      use: () => [
         '{#p/human}* (You don the Halo.)',
         ...(SAVE.data.b.svr && !SAVE.data.b.freedom && asrielinter.i_halo_use++ < 1
            ? ['{#p/asriel1}{#f/20}* I think it suits you.']
            : [])
      ]
   },
   i_little_dipper: {
      battle: {
         description: 'A whacking spoon.',
         name: 'Dipper'
      },
      drop: ['{#p/human}* (You throw away the Little Dipper.)'],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? ['{#p/human}* (3 AT.)']
            : ['{#p/basic}* "Little Dipper" (3 AT)\n* A whacking spoon.'],
      name: 'Little Dipper',
      use: ['{#p/human}* (You equip the Little Dipper.)']
   },
   i_pie: {
      battle: {
         description: 'Homemade butterscotch-cinnamon pie, one slice.',
         name: 'Pie'
      },
      drop: ['{#p/human}* (You throw away the Butterscotch Pie.)'],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? ['{#p/human}* (99 HP.)']
            : ['{#p/basic}* "Butterscotch Pie" Heals 99 HP\n* Homemade butterscotch-cinnamon pie, one slice.'],
      name: 'Butterscotch Pie',
      use: ['{#p/human}* (You eat the Butterscotch Pie.)']
   },
   i_pie2: {
      battle: {
         description: 'Classic family recipe.',
         name: 'Snail Pie'
      },
      drop: ['{#p/human}* (You throw away the Snail Pie.)'],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? ['{#p/human}* (99 HP.)']
            : ['{#p/basic}* "Snail Pie" Heals 99 HP\n* Classic family recipe.'],
      name: 'Snail Pie',
      use: ['{#p/human}* (You eat the Snail Pie.)']
   },
   i_pie3: {
      battle: {
         description: 'Despite being soup-ified, the pie remains delicious.',
         name: 'Pie Soup'
      },
      drop: ['{#p/human}* (You dump the Pie Soup and the spoon that came with it.)'],
      info: ['{#p/basic}* "Pie Soup" Heals 49 HP\n* Despite being soup-ified, the pie remains delicious.'],
      name: 'Pie Soup',
      use: ['{#p/human}* (You consume the Pie Soup with the provided spoon.)']
   },
   i_pie4: {
      battle: {
         description: 'Actions do have their consequences...',
         name: 'Burnt Pie'
      },
      drop: ['{#p/human}* (You toss the Burnt Pie to the side like it never existed.)'],
      info: ['{#p/basic}* "Burnt Pie" Heals 39 HP\n* Actions do have their consequences...'],
      name: 'Burnt Pie',
      use: ['{#p/human}* (You eat the Burnt Pie.)']
   },
   i_snails: {
      battle: {
         description: 'A plate of fried snails.\nFor breakfast, of course.',
         name: 'Snails'
      },
      drop: ['{#p/human}* (You throw away the Fried Snails.)'],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? ['{#p/human}* (19 HP.)']
            : ['{#p/basic}* "Fried Snails" Heals 19 HP\n* A plate of fried snails.\n* For breakfast, of course.'],
      name: 'Fried Snails',
      use: ['{#p/human}* (You eat the Fried Snails.)']
   },
   i_soda: {
      battle: {
         description: 'A sickly, dark yellow liquid.',
         name: 'Soda'
      },
      drop: () => [
         '{#p/human}* (You threw away the Fizzli Soda.)',
         ...(SAVE.data.b.svr || world.darker ? [] : ['{#p/basic}* Good riddance.'])
      ],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? ['{#p/human}* (8 HP.)']
            : ['{#p/basic}* "Fizzli Soda" Heals 8 HP\n* A dark, sickly yellow liquid.'],
      name: 'Fizzli Soda',
      use: () => [
         '{#p/human}* (You drank the Fizzli Soda.)',
         ...(SAVE.data.b.svr || world.darker ? [] : ['{#p/basic}* Yuck!'])
      ]
   },
   i_spacesuit: {
      battle: {
         description: 'It came with the craft you crash-landed in.',
         name: 'Spacesuit'
      },
      drop: ['{#p/human}* (You throw away the Worn Spacesuit.)'],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? ['{#p/human}* (20 HP. The last remaining fragment of a spacecraft flown in exile.)']
            : ['{#p/basic}* "Worn Spacesuit" Heals 20 HP\n* It came with the craft you crash-landed in.'],
      name: 'Worn Spacesuit',
      use: ['<33>{#p/human}* (After using its last heal-pak, the Worn Spacesuit fell apart.)']
   },
   i_spanner: {
      battle: {
         description: 'A rusty old wrench.',
         name: 'Spanner'
      },
      drop: ['{#p/human}* (You throw away the Rusty Spanner.)'],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? ["{#p/human}* (A trusty tool forged from beyond the galaxy's edge.)"]
            : ['{#p/basic}* A rusty old wrench.'],
      name: 'Rusty Spanner',
      use: () => [
         ...(battler.active && battler.targetCurrent?.opponent.metadata.reactSpanner
            ? []
            : ['{#p/human}* (You toss the spanner into the air.)\n* (Nothing happens.)'])
      ]
   },
   i_starbertA: {
      battle: {
         description: 'The first of a limited run of Super Starwalker comics.',
         name: 'Starwalker 1'
      },
      drop: ['{#p/human}* (You throw away Super Starwalker 1.)'],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? ['{#p/human}* (It seems like the beginning of a journey.)']
            : ['{#p/basic}* The first of a limited run of Super Starwalker comics.'],
      name: 'Super Starwalker 1',
      use: () => (battler.active ? ['{#p/human}* (You read Super Starwalker 1.)', '* (Nothing happens.)'] : [])
   },
   i_starbertB: {
      battle: {
         description: 'The second of a limited run of Super Starwalker comics.',
         name: 'Starwalker 2'
      },
      drop: ['{#p/human}* (You throw away Super Starwalker 2.)'],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? ['{#p/human}* (It seems like the middle of a journey.)']
            : ['{#p/basic}* The second of a limited run of Super Starwalker comics.'],
      name: 'Super Starwalker 2',
      use: () =>
         battler.active
            ? [
               '{#p/human}* (You read Super Starwalker 2.)',
               ...(SAVE.data.b.stargum
                  ? ['* (Nothing happens.)']
                  : [
                     '* (You found a piece of gum taped to the comic strip.)',
                     choicer.create('* (Use the gum?)', 'Yes', 'No')
                  ])
            ]
            : []
   },
   i_starbertC: {
      battle: {
         description: 'The third of a limited run of Super Starwalker comics.',
         name: 'Starwalker 3'
      },
      drop: ['{#p/human}* (You throw away Super Starwalker 3.)'],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? ['{#p/human}* (It seems like the end of a journey... or is it a new beginning?)']
            : ['{#p/basic}* The third of a limited run of Super Starwalker comics.'],
      name: 'Super Starwalker 3',
      use: () => (battler.active ? ['{#p/human}* (You read Super Starwalker 3.)', '* (Nothing happens.)'] : [])
   },
   i_steak: {
      battle: {
         description: 'Questionable at best.',
         name: 'Steak'
      },
      drop: () => [
         '{#p/human}* (You threw away the Sizzli Steak.)',
         ...(SAVE.data.b.svr || world.darker || SAVE.data.b.ufokinwotm8
            ? []
            : ["{#p/basic}* Well, that won't be missed."])
      ],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? ['{#p/human}* (14 HP.)']
            : ['{#p/basic}* "Sizzli Steak" Heals 14 HP\n* Questionable.'],
      name: 'Sizzli Steak',
      use: () => [
         '{#p/human}* (You eat the Sizzli Steak.)',
         ...(SAVE.data.b.svr || world.darker || SAVE.data.b.ufokinwotm8 ? [] : ['{#p/basic}* Gross!'])
      ]
   },

   k_coffin: {
      name: 'Secret Key',
      description: () =>
         SAVE.data.b.w_state_secret
            ? 'Used to access a hidden room in the Outlands.'
            : "Acquired from the sock drawer in Toriel's room."
   },

   c_call_toriel: <Partial<CosmosKeyed<CosmosProvider<string[]>, string>>>{
      w_start: [
         '{#p/toriel}{#f/0}* Ah, of course.\n* That must be where you crash-landed.',
         '{#f/0}* The other humans who came here landed there, too.',
         '{#f/1}* There must be something about the force field...',
         '{#f/0}* ... which always makes incoming craft fly in on this vector.'
      ],
      w_twinkly: () =>
         SAVE.data.b.toriel_twinkly
            ? [
               '{#p/toriel}{#f/1}* Is that where I first found you?',
               '{#f/5}* That talking star who tormented you has been a pest for some time.',
               '{#f/1}* I have tried to reason with him before, but...',
               '{#f/9}* My efforts never truly got anywhere.'
            ]
            : [
               '{#p/toriel}{#f/1}* Is that where I first found you?',
               '{#f/5}* All alone out there, by yourself...',
               '{#f/0}* It is a good thing I was there to bring you in.'
            ],
      w_entrance: [
         '{#p/toriel}{#f/1}* The entrance to the Outlands...',
         '{#f/0}* Indeed, the area before this is not actually part of it.',
         '{#f/5}* It is... more of an unmarked crash site.',
         '{#f/1}* After the first human crashed directly INTO the Outlands...',
         '{#f/0}* A separate platform seemed an obvious addition.'
      ],
      w_lobby: [
         '{#p/toriel}{#f/0}* The puzzle in this room works well for demonstrations.',
         '{#f/1}* After all, why else would I build it?',
         '{#f/5}* Unfortunately, not every human understood this.',
         '{#f/3}* One of them even tried running at the security field directly...',
         '{#f/0}* ... suffice it to say, the use of healing magic was required.'
      ],
      w_tutorial: [
         '{#p/toriel}* If this puzzle is not my favorite, I do not know what is!',
         '* The way it teaches collaboration is a most valuable quality.',
         '{#f/1}* Since my dream job IS to become a teacher...',
         '{#f/0}* I am always looking for ways to impart these important lessons.'
      ],
      w_dummy: () => [
         '{#p/toriel}{#f/1}* The training room...?',
         ...(SAVE.data.n.plot < 42
            ? [
               [
                  '{#f/0}* Hee hee, I am still proud of the way you handled that lesson.',
                  '{#f/1}* A friendly conversation is preferable to the alternative...',
                  '{#f/0}* And not just because it helps you make friends!'
               ],
               [],
               [
                  '{#f/5}* ...',
                  '{#f/5}* Although you did not handle that lesson in the way I intended...',
                  '{#f/0}* At the very least, you avoided the conflict.',
                  '{#f/0}* Considering the alternatives, it was... a preferable outcome.'
               ],
               [
                  '{#f/0}* ... hmm.',
                  '{#f/0}* Truthfully, I still do not know how to react to what happened.',
                  '{#f/1}* It was mesmerising to watch, though...',
                  '{#f/3}* Just the two of you...\n* Staring at each other...',
                  '{#f/4}* ...'
               ],
               [
                  '{#f/1}* I cannot say I expected what happened, but...',
                  '{#f/0}* It was still endearing nonetheless.',
                  '{#f/0}* Surprisingly, you are the first human to try the approach.',
                  '{#f/1}* And it seemed such an obvious solution in hindsight...'
               ],
               [],
               [
                  '{#f/5}* ...',
                  '{#f/7}* ...',
                  '{#f/8}* Hahaha!\n* Ah, I cannot help but laugh!',
                  '{#f/6}* The shamelessness with which you chose to flirt...',
                  '{#f/1}* Certainly took me by surprise!',
                  '{#f/0}* Listen to me, my child.',
                  '{#f/9}* Flirting with your adversaries may not always be ideal.',
                  '{#f/10}* But, if you can do it like THAT again...',
                  '{#f/0}* There is no telling what you can accomplish this way.'
               ]
            ][SAVE.data.n.state_wastelands_dummy]
            : [
               '{#p/toriel}{#f/0}* Oh, right, about that.',
               '{#p/toriel}{#f/0}* I recently discovered that a ghost was hiding in the dummy.',
               '{#p/toriel}{#f/1}* They seemed bothered about something, but...',
               '{#p/toriel}{#f/0}* After a little talk, I helped to calm them down.',
               '{#p/toriel}{#f/1}* Hmm... I wonder where Lurksalot is now?'
            ])
      ],
      w_coffin: [
         '{#p/toriel}{#f/5}* ...',
         '{#f/5}* In times like this, it is important that we show respect.',
         '{#f/10}* ... do you understand?',
         '{#f/9}* It is a lesson more important than that of puzzles or encounters.'
      ],
      w_danger: () =>
         SAVE.data.n.state_wastelands_froggit === 3
            ? [
               '{#p/toriel}{#f/1}* The riddle offered by the terminal in that room...',
               '{#f/0}* Was based on something I found in an old Earth legend.',
               '{#f/1}* It involved a series of many intricate puzzles...',
               '{#f/0}* And a certain deceptive baked good.',
               SAVE.data.b.w_state_riddleskip
                  ? '{#f/5}* It is a shame you refused to solve it.'
                  : '{#f/0}* Seeing you solve it was quite gratifying.'
            ]
            : [
               '{#p/toriel}{#f/1}* As overseer of the Outlands, I took it upon myself...',
               '{#f/0}* To ensure the other monsters did not attack you.',
               '{#f/0}* Both they and I have a mutual understanding about this.',
               '{#f/0}* That is why the Froggit left so readily.'
            ],
      w_zigzag: [
         '{#p/toriel}{#f/1}* My idea with building this room to be so long and windy...',
         '{#f/0}* ... was that I felt a straight room would be too boring.',
         '{#f/1}* After all, who wants to walk in a straight line all their life?',
         '{#f/0}* A little change of pace can be quite nice.'
      ],
      w_froggit: [
         '{#p/toriel}* From this room forward, more monsters may be found.',
         '{#f/0}* They often like to "hang out" here.\n* Nice, is it not?',
         '{#f/1}* It tended to be a quiet place, until recently...',
         '{#f/0}* When a monster began teaching the others how to flirt.',
         '{#f/0}* This new element has greatly altered the social atmosphere.'
      ],
      w_candy: () => [
         SAVE.data.n.state_wastelands_candy < 4
            ? '{#p/toriel}{#f/1}* The vending machine has yet to break down?'
            : '{#p/toriel}{#f/1}* Oh dear, is the vending machine broken again?',
         '{#f/5}* Well, it has happened more times than I can count.',
         '{#f/3}* On the positive side, it DOES save power...',
         '{#f/0}* ... so perhaps it is not all bad.'
      ],
      w_puzzle1: [
         '{#p/toriel}{#f/1}* To ease the process of retrying the puzzle...',
         '{#f/0}* I installed a system to move you back to the start.',
         '{#f/5}* The scientist who helped to install it is long gone now...',
         '{#f/0}* But his work continues to be of use every day.'
      ],
      w_puzzle2: [
         '{#p/toriel}{#f/1}* Ah, a most unique form of puzzle exists here.',
         '{#f/0}* One that tests patience over memorization.',
         '{#f/1}* For the most part, the other humans complained about it...',
         '{#f/0}* Though, one did appreciate the value it provides.'
      ],
      w_puzzle3: [
         '{#p/toriel}{#f/1}* A little trick you may find helpful for this puzzle...',
         '{#f/0}* Is that you can start moving even as the sequence is shown.',
         '{#f/5}* ... I suppose that is not of much use to you now.',
         '{#f/1}* But, if for some reason you need to solve it again...',
         '{#f/0}* You may try the advice I have just given.'
      ],
      w_puzzle4: [
         '{#p/toriel}{#f/1}* It has come to my attention that, recently...',
         '{#f/0}* Old editions of a now- defunct comic series are being sold.',
         '{#f/0}* Perhaps, if you are bored, you could buy one.',
         '{#f/0}* Children your age tend to be rather fond of these things!'
      ],
      w_mouse: [
         '{#p/toriel}{#f/1}* As a matter of principle, I find it important...',
         '{#f/0}* That there be a room designated for stopping and resting.',
         '{#f/0}* In my own life, I often find breaks to be a useful asset.',
         '{#f/1}* The stærmite who resides here would certainly agree...'
      ],
      w_blooky: () =>
         SAVE.data.b.killed_mettaton
            ? [
               '{#p/toriel}{#f/1}* For whatever reason, that ghost who often comes here...',
               '{#f/5}* Has been feeling worse than ever lately.',
               '{#f/1}* I tried to ask them why, but they would not say...',
               '{#f/5}* ... I have not seen them since.'
            ]
            : !SAVE.data.b.a_state_hapstablook || SAVE.data.n.plot < 68
               ? [
                  '{#p/toriel}{#f/0}* That ghost who called earlier often inhabits this area.',
                  ...(SAVE.data.b.napsta_performance
                     ? ['{#f/1}* I thought they would be happier after their performance...']
                     : ['{#f/1}* I have tried to lift their spirits in the past...']),
                  '{#f/5}* But their troubles may not be so easy to resolve.',
                  '{#f/1}* If only I knew what was holding them down...'
               ]
               : [
                  '{#p/toriel}{#f/1}* For whatever reason, that ghost who often comes here...',
                  '{#f/0}* Has been feeling a lot better lately.',
                  '{#f/0}* They even came to my house to tell me so themselves.',
                  '{#f/1}* Apparently you had something to do with this...?'
               ],
      w_party: [
         '{#p/toriel}{#f/0}* The activities room.\n* We host all kinds of performances there.',
         '{#f/0}* Drama, dance nights...\n* And, most important of all, the arts.',
         '{#f/0}* It is always good to see people expressing themselves.',
         '{#f/1}* I once attended a comedy show in that very room.',
         '{#f/0}* It was the hardest I have ever laughed in my life!'
      ],
      w_pacing: () => [
         SAVE.data.b.toriel_twinkly
            ? '{#p/toriel}{#f/0}* I heard someone here made a "friend" with that talking star.'
            : '{#p/toriel}{#f/0}* I heard someone here made a "friend" with a talking star.',
         '{#f/1}* One of the Froggits, I presume...?',
         "{#f/1}* To say I am worried for that monsters' safety...",
         '{#f/5}* Would be quite the understatement.'
      ],
      w_junction: [
         '{#p/toriel}{#f/1}* The junction room...',
         '{#f/0}* In the past, we had planned a community area of sorts here.',
         '{#f/0}* Outlands visitors would be met with a warm, welcoming atmosphere.',
         '{#f/1}* Over time, though, we realized not many people would come...',
         '{#f/0}* And so, the design was altered into what you see today.',
         '{#f/5}* A little boring, but I suppose not every room can be grand...'
      ],
      w_annex: [
         '{#p/toriel}* From here, the all- important taxi stop can be reached.',
         '{#f/1}* Not only are other areas of the outpost accessible...',
         '{#f/0}* But other subsections of the Outlands are, too.',
         '{#f/1}* Seeing as you are but a small child, however...',
         '{#f/5}* It is unlikely the driver would offer that as an option to you.',
         '{#f/0}* The shops and business there are mostly just for grown-ups.'
      ],
      w_wonder: () => [
         '{#p/toriel}{#f/1}* A little mushroom greeted me on my way back from shopping...',
         SAVE.data.b.snail_pie
            ? '{#f/0}* ... as I returned with ingredients for that snail pie.'
            : '{#f/0}* ... as I returned with ingredients for that butterscotch pie.',
         '{#f/3}* Strangely, it was floating above the doorway...',
         '{#f/0}* The gravity must be weak in that room.',
         '{#f/1}* Perhaps the presence of the taxi has some kind of effect...?'
      ],
      w_courtyard: [
         '{#p/toriel}{#f/0}* Ah.\n* The courtyard.',
         '{#f/1}* Admittedly, it is a little lacking...',
         '{#f/5}* In terms of being a place for children like you to play.',
         '{#f/1}* With every human who came, I thought of fixing that...',
         '{#f/5}* But they always left before I had the chance.'
      ],
      w_alley1: [
         '{#p/toriel}{#f/9}* ... the room in which I lectured you about leaving.',
         '{#f/5}* I thought, if I spoke of the force field...',
         '{#f/5}* I might convince you to stay.',
         '{#f/1}* ... I remember telling the other humans the same, but...',
         '{#f/5}* It was as effective for you as it was for them.'
      ],
      w_alley2: [
         '{#p/toriel}{#f/9}* ... the room in which I warned you of the dangers ahead.',
         '{#f/5}* I have been told my beliefs about them are misguided, but...',
         '{#f/5}* I felt it unwise to take that chance.',
         '{#f/9}* ... perhaps it is time I re-considered my viewpoint.'
      ],
      w_alley3: [
         '{#p/toriel}{#f/9}* ... I truly regret the way I acted towards you here.',
         '{#f/5}* It was wrong of me to attempt to force you to stay...',
         '{#f/5}* Merely acting on my own silly desires.',
         '{#f/1}* I am sure you have already forgiven me, though...',
         '{#f/5}* Regardless of whether or not I deserve it...'
      ],
      w_alley4: () =>
         SAVE.data.b.w_state_fightroom
            ? [
               '{#s/phone}{#p/event}* Dialing...',
               '{#p/toriel}{#f/1}* Although that room may not evoke the best of feelings for us...',
               '{#f/0}* It is still one of my favorite places in the Outlands.',
               '{#f/1}* There is a certain someone who visits sometimes...',
               '{#f/6}* Perhaps you are already aware of him.',
               '{#s/equip}{#p/event}* Click...'
            ]
            : instance('main', 'toriButNotGarb') === void 0 // NO-TRANSLATE
               ? [
                  '{#s/phone}{#p/event}* Dialing...',
                  '{#p/toriel}{#f/1}* Calling so soon...?',
                  '{#f/0}* ... I have not even gotten back to the house yet!',
                  '{#f/0}* Please, wait a moment before calling again.',
                  '{#s/equip}{#p/event}* Click...'
               ]
               : [
                  '{#w.stopThatGoat}{#s/phone}{#p/event}* Dialing...',
                  '{#p/toriel}{#f/1}* Calling so soon...?',
                  '{#f/0}* ... I have not even left the room yet!',
                  '{#f/2}* A moment to breathe would be nice!',
                  '{#w.startThatGoat}{#s/equip}{#p/event}* Click...'
               ],
      w_bridge: [
         '{#p/toriel}{#f/1}* The bridge to the rest of the outpost...',
         '{#f/5}* It is a shame to think I almost destroyed it.',
         '{#f/0}* Of course, the taxi still would have been around.',
         '{#f/3}* But I doubt that would have been very reliable.',
         '{#f/1}* Let us be glad this bridge is still in place.'
      ],
      w_exit: () =>
         SAVE.data.n.plot < 16
            ? [
               '{#p/toriel}{#f/1}* My child, if you are leaving the Outlands...',
               '{#f/0}* Then... I want you to remember something.',
               '{#f/1}* Whatever happens, no matter how difficult it may seem...',
               '{#f/0}* I want you to know that I have faith in you.',
               '{#f/0}* That I know you can do the right thing.',
               '{#f/1}* Remember that, alright?'
            ]
            : SAVE.data.n.plot < 17.001
               ? [
                  '{#p/toriel}{#f/1}* Returning to the Outlands so soon...?',
                  '{#f/0}* Well.\n* I cannot say I am opposed to that.',
                  '{#f/1}* You may leave at any time, of course...',
                  '{#f/0}* But, for the moment, it is nice to see you.'
               ]
               : [
                  '{#p/toriel}{#f/2}* How long have you been standing out there!?',
                  '{#f/1}* Did you come back all this way just to call me?',
                  '{#f/0}* ... silly goose.',
                  '{#f/0}* If you would like to call, there is no need to go back this far.'
               ],
      w_toriel_front: [
         '{#p/toriel}{#f/1}* Did you know that this house is a re-creation of another?',
         '{#f/1}* In the past, I lived in the Citadel...',
         '{#f/0}* In a house that this one was made to resemble.',
         '{#f/5}* Once in a while, I forget that I am not really there...'
      ],
      w_toriel_hallway: [
         '{#p/toriel}{#f/0}* There is not much to say about thehallway.',
         '<26>{#f/1}* Though, you can take a look in the mirror, if you like...',
         '{#f/0}* I hear self-reflection can be a powerful thing.'
      ],
      w_toriel_asriel: [
         '{#p/toriel}{#f/0}* Ah, it is your room!',
         '{#f/5}* Your... room...',
         '{#f/9}* ...',
         '{#f/5}* Perhaps it is no longer as such.',
         '{#f/1}* ...',
         '{#f/1}* Actually, I will leave that decision to you...',
         '{#f/0}* You may still rest any time you like.'
      ],
      w_toriel_toriel: [
         '{#p/toriel}{#f/0}* So you have stumbled into my room.',
         '{#f/0}* If you like, you may read a book from my bookshelf.',
         '{#f/0}* But, please, do not forget to put it back.',
         "{#f/23}* And don't you dare open that sock drawer!"
      ],
      w_toriel_living: () =>
         toriCheck()
            ? ['{#p/toriel}{#f/3}* There is no need to call me when I am right here, little one.']
            : [
               '{#p/toriel}{#f/1}* Rummaging around in the living room, are we?',
               '{#f/0}* Say.\n* Have you read all of the books yet?',
               '{#f/1}* I thought about reading you the snail fact book...',
               '{#f/0}* But I decided it might be a little too repetitive for you.'
            ],
      w_toriel_kitchen: [
         '{#p/toriel}{#f/1}* The kitchen...?',
         '{#f/0}* I left a chocolate bar in the fridge for you.',
         '{#f/0}* I hear it is... an old favorite of humans.',
         '{#f/1}* I hope you like it...'
      ],
      s_start: () =>
         SAVE.data.n.plot < 17.001
            ? [
               '{#p/toriel}{#f/0}* If I am right, a certain friend of mine should be up ahead.',
               '<26>{#f/0}* Do not fear, little one.',
               '{#f/1}* Keep going...'
            ]
            : [
               '{#p/toriel}{#f/1}* From what I recall, this long room...',
               '<26>{#f/0}* ... would have been the basis for a town on the outskirts of Starton.',
               '{#f/0}* Of course, that never came to pass.',
               '{#f/2}* One town was more than enough!'
            ],
      s_sans: () =>
         SAVE.data.n.plot < 17.001
            ? [
               '{#p/toriel}{#f/0}* If I am right, a certain friend of mine should be up ahead.',
               '<26>{#f/0}* Do not fear, little one.',
               '{#f/1}* Keep going...'
            ]
            : [
               '{#p/toriel}{#f/1}* I presume by now you have heard of the "gravometric inverter?"',
               '<26>{#f/0}* It is a device Sans has told me all about.',
               '{#f/1}* Apparently, there is another world up there...',
               '{#f/0}* A place where things do not always face the right way up.'
            ],
      s_crossroads: [
         '{#p/toriel}{#f/1}* This old landing pad was once a bustling intersection...',
         '{#f/1}* Supply ships coming and going...',
         '{#f/1}* Ready to aid in whatever was being built next...',
         '{#f/5}* It is a shame the outpost seems to have stopped expanding.',
         '{#f/0}* For a while, building new areas defined our culture!'
      ],
      s_human: [
         "{#p/toriel}* I heard Sans's brother wants to join the Royal Guard someday.",
         '{#f/1}* Such an aspirational young skeleton...',
         '{#f/0}* Despite my feelings about the guard, it is good for him to dream.',
         '{#f/5}* I worry that too many have given up on their dreams lately...',
         '{#f/0}* But not him!\n* That skeleton knows what is best for him.'
      ],
      s_papyrus: [
         '{#p/toriel}* Sans told me all about the gadgets Papyrus added to his station.',
         '{#f/1}* First, a handle, so he can "swing" into duty...',
         '{#f/1}* A so-called "sky wrench" used to get a "fix" on the stars...',
         '{#f/0}* And a screen attachment to keep track of his many responsibilities.',
         '{#f/6}* With inventions like these, you would think he works at a lab.'
      ],
      s_doggo: [
         '{#p/toriel}{#f/5}* Is the Royal Guard giving you too much trouble?',
         '{#f/0}* Sans did say he would warn you of potential encounters.',
         '{#f/1}* ...',
         '{#f/1}* Perhaps I should be more worried, but...',
         '{#f/0}* Something tells me you will be alright.',
         '{#f/0}* I have faith in that skeleton to look out for you.'
      ],
      s_robot: [
         '{#p/toriel}{#f/1}* Ah, what a lovely sound...',
         '{#f/0}* I would recognize a builder bot anywhere.',
         '{#f/5}* After the ban on AI programs, we had most of them disabled...',
         '{#f/1}* But the two whose sentience did not corrupt them...',
         '{#f/0}* Were allowed a more graceful retirement.',
         '{#f/0}* It is nice to know that they have survived to this day.'
      ],
      s_maze: [
         "{#p/toriel}* Sans has told me all about his brother's fondness for puzzles.",
         '{#f/1}* I hear he has even created some of his own...?',
         '{#f/0}* I am most curious about the "wall of fire."',
         '{#f/1}* Are the flames hot?\n* Or are they merely pleasantly warm?',
         '{#f/5}* For your sake, I would hope it is the latter.'
      ],
      s_dogs: [
         '{#p/toriel}{#f/1}* I hear the Royal Guard employs a pair of married dogs.',
         '{#f/3}* To be married at the same time as being a royal guard...',
         '{#f/4}* That relationship must have some "interesting" motivations.',
         '{#f/6}* But what do I know.\n* As Sans would say, I am merely a "goat!"'
      ],
      s_lesser: [
         '{#p/toriel}* I wonder what kind of food is sold in Starton these days.',
         '{#f/1}* When I was last here, everyone loved to eat ghost fruit...',
         '{#f/0}* A strange food which could be eaten both by ghosts and non-ghosts.',
         '<26>{#f/0}* Whatever the favorite\n  is now, I am sure I could never dream of it.'
      ],
      s_bros: [
         "{#p/toriel}{#f/1}* Sans's fondness for spot-the-difference puzzles...",
         '{#f/0}* Well, it has never really made sense to me.',
         '{#f/1}* How could such a simple puzzle be appealing to him?',
         '<26>{#f/3}* ... more specifically...',
         '{#f/1}* Where is the humor in such a puzzle?'
      ],
      s_spaghetti: [
         "{#p/toriel}* Sans has often spoken of Papyrus's interest in spaghetti dishes.",
         '{#f/6}* But why stop there?\n* Just imagine the PASTABILITIES...',
         '{#f/8}* Rigatoni!\n* Fettuccine!\n* Acini di Pepe!',
         '{#f/0}* Some variety could really help him go FARFALLE.',
         '{#f/2}* ... in other words, go BIGOLI or go home!'
      ],
      s_puzzle1: [
         '{#p/toriel}{#f/1}* Whatever the puzzles in Starton are like now, I am sure...',
         '{#f/0}* They are nothing like the ones that were here when I left.',
         '{#f/5}* A level of difficulty so unrealistic...',
         '{#f/5}* It is a wonder anyone could solve them at all.'
      ],
      s_puzzle2: [
         '{#p/toriel}{#f/1}* They say some puzzles have secret solutions...',
         '{#f/0}* ... a statement I find utterly unbelievable!',
         '{#f/0}* A secret solution would defeat the whole purpose of a puzzle.',
         '{#f/1}* Puzzles, at least ones with realistic difficulty...',
         '{#f/2}* Should be solved the intended way only!'
      ],
      s_jenga: [
         '{#p/toriel}* To my knowledge, Dr. Alphys is the current royal scientist.',
         '{#f/1}* She may never replace the experience of her predecessor, but...',
         '{#f/0}* I am sure she is more than capable of finding her own path forward.',
         '{#f/0}* This may surprise you, but I have a certain respect for scientists.',
         '{#f/2}* Such brilliant minds!'
      ],
      s_pacing: [
         '{#p/toriel}{#f/1}* You would be wise to steer clear of dubious salesfolk...',
         '{#f/0}* For you never know what strings they may pull.',
         '{#f/0}* Or what moon rocks may end up falling into your lap.',
         '{#f/3}* It is a lesson I have learned the hard way, unfortunately...'
      ],
      s_puzzle3: [
         '{#p/toriel}{#f/1}* The puzzle in this room is one of memorization, is it not?',
         '{#f/1}* Sans mentioned that his brother often updates the pattern...',
         '{#f/0}* ... to maintain a strong "rotating password."',
         '{#f/6}* How silly!',
         '{#f/0}* In the Outlands, our memorization puzzles update on-demand.'
      ],
      s_greater: [
         '{#p/toriel}{#f/1}* The old owner of that doghouse, Canis Maximus...',
         '{#f/0}* ... retired from the guard a long while ago.',
         '{#f/7}* Fortunately, its new owner is said to be a bundle of puppy energy!',
         '{#f/0}* Clearly, it has learned well from such a wise master.'
      ],
      s_math: [
         '{#p/toriel}{#f/1}* Please, can somebody explain "dog justice?"',
         '{#f/0}* It is an odd phrase I continue to hear every so often.',
         '{#f/5}* I do know of one little puppy that visits the Outlands sometimes...',
         '{#f/0}* Perhaps that is who is deserving of justice.'
      ],
      s_bridge: [
         '{#p/toriel}{#f/1}* When this bridge was first constructed...',
         "{#f/0}* Its precarious nature prompted an upgrade to the outpost's systems.",
         '{#f/0}* In short time, the aptly-named "gravity guardrails" were added.',
         '{#f/0}* These are what prevent you from falling off the platforms.'
      ],
      s_town1: [
         '{#p/toriel}{#f/0}* Ah...\n* The town of Starton.',
         '{#f/1}* I have heard much about a "Grillby\'s" there...',
         '{#f/0}* ... and its diverse array of patrons both new and old.',
         '{#f/0}* Sans often goes there to eat, you see.',
         '{#f/7}* I hear the bartender is quite "hot."'
      ],
      s_taxi: [
         '{#p/toriel}{#f/1}* A taxi stop near town?',
         '{#f/1}* ... hmm...',
         '{#f/0}* I wonder if it is any different from the one in the Outlands.',
         '{#f/1}* Of course, I would have no way of knowing until I saw it...',
         '{#f/0}* Which I have no way of doing without a fancy telescope.',
         '{#f/0}* I wonder where I could find one of those.'
      ],
      s_town2: [
         '{#p/toriel}{#f/1}* Napstablook recently told me they opened a shop...',
         '{#f/5}* ... on the "south side" of town.',
         '{#f/1}* What could this mean?',
         '{#f/0}* The town I remember organizing was a large, unified square.',
         '{#f/1}* Perhaps there was a split at some point?',
         '{#f/5}* That would be a shame, considering the original vision...'
      ],
      s_battle: [
         '{#p/toriel}{#f/1}* The thing Sans seemed most eager to warn me about...',
         '{#f/0}* Was his brother\'s so- called "special attack."',
         '{#f/1}* If Papyrus chooses to spar with you, you must avoid it at all costs.',
         '{#f/2}* I repeat, avoid the special attack!\n* At all costs!',
         '{#f/0}* That is all I have to say on this matter.'
      ],
      s_exit: [
         '{#p/toriel}{#f/1}* If you ever decide to leave Starton, you must understand...',
         '{#f/5}* My phone is old, and can only reach certain rooms in the factory.',
         '{#f/9}* It would be difficult to call me until you find your way out.',
         '{#f/1}* Forgive me.\n* I just thought that I should let you know.'
      ],
      f_entrance: [
         '{#p/toriel}{#f/7}* So you found a place in the factory with good reception...?',
         '{#f/1}* ... that must mean you are somewhere unenclosed...',
         '{#f/0}* Which also implies the nearby presence of synth-bushes.',
         '{#f/3}* Those things are terrible to get stuck in...',
         '{#f/4}* Getting you all itchy and scratchy...',
         '{#f/0}* Fortunately, I know you are smart enough not to run into them.'
      ],
      f_bird: () =>
         SAVE.data.n.plot !== 47.2 && SAVE.data.n.plot > 42 && SAVE.data.s.state_foundry_deathroom !== 'f_bird' // NO-TRANSLATE
            ? [
               '{#p/toriel}{#f/0}* There truly is nothing like the chirp of that fearless little bird.',
               '{#f/1}* Even when it still lived within a bucket of water...',
               '{#f/1}* It would fly its mighty little wings...',
               '{#f/1}* Taking us places...',
               '{#f/0}* I used its services to carry groceries often.',
               '{#f/5}* ... back when we as a species all lived in that old factory.'
            ]
            : [
               '{#p/toriel}{#f/5}* Things sound awfully silent where you are...',
               '{#f/5}* Almost like there is something missing.',
               '{#f/5}* Something important...',
               '{#f/0}* Well, no matter.\n* My imagination does run wild sometimes.',
               '{#f/1}* ...',
               '{#f/1}* Chirp, chirp, chirp, chirp, chirp...'
            ],
      f_taxi: [
         "{#p/toriel}{#f/1}* So you found the factory's taxi stop...?",
         '{#f/0}* Perhaps you could use it to escape that Royal Guard captain.',
         '{#f/1}* A visitor here once spoke of her obsession with spears...',
         '{#f/0}* How odd.\n* The captain I knew was into sabers.'
      ],
      f_battle: [
         '{#p/toriel}{#f/0}* Ah, there you are.',
         "{#f/0}* You're at the edge of the factory there.",
         '<26>{#f/1}* From this point forward, I do not know what lies ahead of you...',
         '{#f/5}* Before I left, there was only an elevator to the Citadel.',
         '{#f/1}* Now, however, exists the area called "Aerialis..."',
         '{#f/23}* ... I wonder who came up with THAT name.'
      ],
      f_exit: toriel_aerialis,
      a_start: toriel_aerialis,
      a_path1: toriel_aerialis,
      a_path2: toriel_aerialis,
      a_path3: toriel_aerialis,
      a_rg1: toriel_aerialis,
      a_path4: toriel_aerialis,
      a_barricade1: toriel_aerialis,
      a_puzzle1: toriel_aerialis,
      a_mettaton1: toriel_aerialis,
      a_elevator1: toriel_aerialis,
      a_elevator2: toriel_aerialis,
      a_sans: toriel_aerialis,
      a_pacing: toriel_aerialis,
      a_prepuzzle: toriel_aerialis,
      a_puzzle2: toriel_aerialis,
      a_mettaton2: toriel_aerialis,
      a_rg2: toriel_aerialis,
      a_barricade2: toriel_aerialis,
      a_split: toriel_aerialis,
      a_offshoot1: toriel_aerialis,
      a_elevator3: toriel_aerialis,
      a_elevator4: toriel_aerialis,
      a_auditorium: toriel_aerialis,
      a_aftershow: toriel_aerialis,
      a_hub1: toriel_aerialis,
      a_hub2: toriel_aerialis,
      a_lookout: toriel_aerialis,
      a_hub3: toriel_aerialis,
      a_plaza: toriel_aerialis,
      a_elevator5: toriel_aerialis,
      a_hub4: toriel_aerialis,
      a_sleeping1: toriel_aerialis,
      a_hub5: toriel_aerialis
   },
   c_call_toriel_early: () =>
      game.room === 'w_bridge' || game.room.startsWith('w_alley') // NO-TRANSLATE
         ? ['{#p/toriel}{#f/3}* ...', '{#f/2}* Come back to the house this instant!']
         : [
            3 <= SAVE.data.n.cell_insult
               ? '{#p/toriel}{#f/23}* Are you not exhausted after how you behaved towards me?'
               : SAVE.data.n.state_wastelands_napstablook === 5
                  ? '{#p/toriel}{#f/1}* Are you not exhausted after waiting so long?'
                  : '{#p/toriel}{#f/1}* Are you not exhausted after all you have been through?',
            3 <= SAVE.data.n.cell_insult
               ? game.room.startsWith('w_toriel') // NO-TRANSLATE
                  ? '{#f/0}* Perhaps you should see the bed I made for you in the guest room.'
                  : '{#f/0}* Perhaps you should see the bed I made for you at the house.'
               : game.room.startsWith('w_toriel') // NO-TRANSLATE
                  ? '{#f/0}* Come to the hallway, and I will show you something.'
                  : '{#f/0}* Come to the house, and I will show you something.'
         ],
   c_call_toriel_late: () =>
      SAVE.data.n.plot === 8.1
         ? ['{#p/human}* (But the line was busy.)']
         : game.room === 'w_bridge' || game.room.startsWith('w_alley') // NO-TRANSLATE
            ? ['{#p/toriel}{#f/3}* ...', '{#f/2}* Come back to the house this instant!']
            : [
               '{#p/toriel}{#f/1}* There is no need to call me over the phone, my child.',
               3 <= SAVE.data.n.cell_insult
                  ? '<26>{#f/23}* We already know what that tends to result in.'
                  : game.room === 'w_toriel_living' // NO-TRANSLATE
                     ? toriCheck()
                        ? '{#f/0}* After all, I am here in the room with you.'
                        : '{#f/0}* I will be done in just a moment.'
                     : game.room.startsWith('w_toriel') // NO-TRANSLATE
                        ? toriCheck()
                           ? '{#f/0}* If you want to see me, you can wait in the living room.'
                           : '{#f/0}* If you want to see me, you can come to the living room.'
                        : '{#f/0}* If you want to see me, you can come to the house.'
            ],
   c_call_tunnel: pager.create(
      0,
      ['{#p/toriel}{#f/5}* Frisk?', '{#f/5}* Is that you...?'],
      ['{#p/toriel}{#f/5}* Hello...?'],
      ['{#p/toriel}{#f/5}* ...']
   ),

   s_save_outlands: {
      w_courtyard: {
         name: 'Outlands - Courtyard',
         text: () =>
            SAVE.data.n.plot > 16
               ? [
                  6 <= world.population
                     ? '{#p/human}* (Even when visiting, this little home fills you with determination.)'
                     : '{#p/human}* (Even when visiting, this house fills you with determination.)'
               ]
               : 6 <= world.population
                  ? ['{#p/human}* (This cute little home fills you with determination.)']
                  : ['{#p/human}* (A house amidst the metallic walls fills you with determination.)']
      },
      w_entrance: {
         name: 'Outlands - Entrance',
         text: () =>
            world.runaway
               ? [
                  '{#p/human}* (The industrious Outlands falls silent, filling you with determination.)',
                  '{#p/human}* (HP fully restored.)'
               ]
               : SAVE.data.n.plot < 48
                  ? [
                     '{#p/human}* (The industrious Outlands lies ahead, filling you with determination.)',
                     '{#p/human}* (HP fully restored.)'
                  ]
                  : [
                     '{#p/human}* (Returning to where it all began, after so long...)',
                     '{#p/human}* (This fills you with determination.)',
                     '{#p/human}* (HP fully restored.)'
                  ]
      },
      w_froggit: {
         name: 'Outlands - Rest Area',
         text: () =>
            world.runaway
               ? [
                  '{#p/human}* (The air has turned foul, yet it fills you with determination.)',
                  '{#p/human}* (HP fully restored.)'
               ]
               : SAVE.data.b.svr
                  ? [
                     '{#p/human}* (The area has been cleared, but the air remains fresh.)',
                     '{#p/human}* (This, of course, fills you with determination.)',
                     '{#p/human}* (HP fully restored.)'
                  ]
                  : world.population > 5
                     ? [
                        '{#p/human}* (The sight of weird and wonderful creatures fills you with determination.)',
                        '{#p/human}* (HP fully restored.)'
                     ]
                     : SAVE.data.n.plot < 8.1
                        ? [
                           '{#p/human}* (The air grows stale.)\n* (Somehow, this fills you with determination.)',
                           '{#p/human}* (HP fully restored.)'
                        ]
                        : SAVE.data.n.state_wastelands_toriel === 2
                           ? [
                              '{#p/human}* (The air has fully dried up.)\n* (Indeed, this fills you with determination.)',
                              '{#p/human}* (HP fully restored.)'
                           ]
                           : [
                              '{#p/human}* (The air remains stale.)\n* (Somehow, this fills you with determination.)',
                              '{#p/human}* (HP fully restored.)'
                           ]
      },
      w_mouse: {
         name: 'Outlands - Stærmite Hole',
         text: () =>
            world.population > 5 && !SAVE.data.b.svr && !world.runaway
               ? [
                  '{#p/human}* (Knowing that the stærmite will one day emerge...)',
                  '{#p/human}* (The thought fills you with determinætion.)'
               ]
               : [
                  '{#p/human}* (Even if the stærmite may never emerge again...)',
                  '{#p/human}* (The situation fills you with determinætion.)'
               ]
      },
      w_start: {
         name: 'Crash Site',
         text: []
      }
   }
};
// END-TRANSLATE
