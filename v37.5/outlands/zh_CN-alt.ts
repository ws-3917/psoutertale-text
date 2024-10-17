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
   postSIGMA,
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
         ">{#p/toriel}{#f/1}* I hear there is a certain kind of fluid in Aerialis...",
         ">{#f/0}* Used primarily to dampen electricity.",
         ">{#f/1}* If you could carry this fluid, how far would you take it?",
         ">{#f/1}* Would you carry it all the way to the Citadel?",
         ">{#f/1}* Or would you simply dispose of it in a recycle bin?",
         ">{#f/0}* How disappointing that would be."
      ]
      : SAVE.data.n.plot < 51
         ? world.bad_lizard > 1 || SAVE.data.n.state_foundry_undyne === 2
            ? [
               ">{#p/toriel}{#f/1}* Perhaps, if I ever become a teacher...",
               ">{#f/0}* I could host a field trip to the Royal Lab.",
               ">{#f/0}* With Dr. Alphys's permission, of course.",
               ">{#f/1}* All those interesting experiments they must conduct there...",
               ">{#f/0}* It'd be a great learning experience for the children."
            ]
            : [
               ">{#p/toriel}{#f/0}* Word of your TV premier has spread quickly, little one!",
               ">{#f/0}* Though, I have not seen it, due to my lack of a TV.",
               ">{#f/1}* When I heard about it, however, I must admit I was surprised...",
               SAVE.data.n.state_aerialis_talentfails === 0
                  ? ">{#f/2}* How did you not miss even a SINGLE time?"
                  : ">{#f/6}* I did not know you had such \"fabulous\" moves."
            ]
         : SAVE.data.n.plot < 56
            ? [
               ">{#p/toriel}{#f/1}* Hmm...\n* The royal guards in Aerialis...",
               ">{#f/0}* Apparently, their favorite food is... salmon.",
               ">{#f/1}* Or... was it ice cream?",
               ">{#f/2}* Wait, no, I think it was pizza!",
               ">{#f/0}* All of which would be impossible without the humble replicator.",
               ">{#f/1}* And... are those not strange foods for such new recruits?"
            ]
            : SAVE.data.n.plot < 59
               ? [
                  world.bad_lizard > 1 || SAVE.data.n.state_foundry_undyne === 2
                     ? ">{#p/toriel}{#f/0}* I hear you have appeared on TV, little one."
                     : ">{#p/toriel}{#f/0}* I hear you have appeared on TV again, little one.",
                  ">{#f/1}* I also hear you did something shocking...",
                  iFancyYourVilliany()
                     ? ">{#f/2}* And altered crafting ingredients to create plastic explosive!"
                     : SAVE.data.n.state_aerialis_crafterresult === 0
                        ? ">{#f/2}* And held your ground against the threat of an impending explosion!"
                        : ">{#f/2}* And flew a \"one-time use portable jetpack\" by yourself!",
                  ">{#f/3}* ... are you...",
                  ">{#f/4}* Are you TRYING to put your life in danger?"
               ]
               : SAVE.data.n.plot < 60
                  ? [
                     ">{#p/toriel}{#f/1}* What kind of puzzles do they have in Aerialis?",
                     ">{#f/1}* Are they laser-based?",
                     ">{#f/1}* Do they bring you back to the start when you fail?",
                     ">{#f/1}* ... can they be explicitly \"failed\" as such?",
                     ">{#f/0}* Hmm...\n* Pardon me for asking so many questions.",
                     ">{#f/1}* A fan of puzzles like myself cannot help but ponder these things..."
                  ]
                  : SAVE.data.n.plot < 61
                     ? [
                        ">{#p/toriel}{#f/1}* When hearing about your hijinks with Mettaton...",
                        ">{#f/0}* I had a thought.",
                        ">{#f/1}* How could a robot like him exist after the ban on AI programs?",
                        ">{#f/5}* Surely Dr. Alphys would not break such a well- established rule.",
                        ">{#f/0}* No...\n* There must be some other explanation."
                     ]
                     : SAVE.data.n.plot < 63
                        ? [
                           ">{#p/toriel}{#f/1}* Hmm...\n* The royal guards in Aerialis...",
                           ">{#f/0}* I heard they were only just promoted to their positions.",
                           ">{#f/1}* I also heard they are quite picky about their choice of weapons...",
                           ">{#f/5}* Refuse to upgrade them despite better options on offer.",
                           ">{#f/0}* Not that I want them to upgrade their weapons.",
                           ">{#f/2}* I worry about you enough as it is!"
                        ]
                        : SAVE.data.n.plot < 65
                           ? SAVE.data.b.a_state_hapstablook
                              ? [
                                 ">{#p/toriel}{#f/1}* A ghost, Lurksalot, recently spoke of some family business.",
                                 ">{#f/5}* It seems this has been on their mind for some time.",
                                 ">{#f/0}* Thankfully, they say it should be resolved soon.",
                                 ">{#f/1}* And with the help of you, no less?",
                                 ">{#f/0}* Well then.\n* I am very proud of you, little one."
                              ]
                              : [
                                 ">{#p/toriel}{#f/1}* A ghost, Lurksalot, recently spoke of some family business.",
                                 ">{#f/5}* It seems this has been on their mind for some time.",
                                 ">{#f/1}* They say their cousin tried to ask for your help, but...",
                                 ">{#f/5}* You were unavailable at the time.",
                                 ">{#f/1}* ... you did have a good reason, did you not?"
                              ]
                           : SAVE.data.n.plot < 66
                              ? [
                                 ">{#p/toriel}{#f/1}* Who knew a robot could have such a beautiful voice?",
                                 ">{#f/0}* Upon hearing Mettaton's new recording, I could not believe my ears.",
                                 ">{#f/1}* Though, some of the lyrics were a touch... violent, for my taste.",
                                 ">{#f/5}* ...",
                                 ">{#f/0}* Do not worry, my child.\n* Nobody is going to cast you out into space."
                              ]
                              : SAVE.data.n.plot < 68
                                 ? [
                                    ">{#p/toriel}{#f/0}* Sans tells me the \"rec center\" is a favored location of his.",
                                    ">{#p/toriel}{#f/1}* Art classes, music clubs, libraries...",
                                    ">{#p/toriel}{#f/5}* It is a shame much of the area is unsafe for young children.",
                                    ">{#p/toriel}{#f/3}* Could they not put a little more effort into being accommodating?",
                                    ">{#p/toriel}{#f/2}* Those mediums can offer valuable transformative experiences!"
                                 ]
                                 : SAVE.data.n.plot < 70
                                    ? world.bad_robot
                                       ? [
                                          ">{#p/toriel}{#f/0}* Everyone I know is upset about a cancelled \"grand finale.\"",
                                          ">{#p/toriel}{#f/0}* They say it would have been quite the fight.",
                                          ">{#p/toriel}{#f/1}* While I am relieved you did not have to take on such a battle...",
                                          ">{#p/toriel}{#f/5}* I cannot help but worry for what awaits you now."
                                       ]
                                       : SAVE.data.b.killed_mettaton
                                          ? [
                                             ">{#p/toriel}{#f/0}* Everyone I know has been talking about a \"grand finale.\"",
                                             ">{#p/toriel}{#f/1}* They say Mettaton gave his life for the good of the show...",
                                             ">{#p/toriel}{#f/0}* But I know better.",
                                             ">{#p/toriel}{#f/1}* After all, robots can be repaired, can they not?"
                                          ]
                                          : [
                                             ">{#p/toriel}{#f/0}* Everyone I know has been talking about a \"grand finale.\"",
                                             ">{#p/toriel}{#f/0}* They say watching you and Mettaton really made them happy.",
                                             ">{#p/toriel}{#f/1}* While I am glad that you appear to have had a good time...",
                                             ">{#p/toriel}{#f/5}* I cannot help but worry for what awaits you now."
                                          ]
                                    : [
                                       ">{#p/toriel}{#f/1}* Are you still doing alright out there, little one?",
                                       ">{#p/toriel}{#f/5}* You have probably been to the Citadel by now.",
                                       ">{#p/toriel}{#f/9}* ...",
                                       ">{#p/toriel}{#f/10}* Be good, won't you?"
                                    ];

export default {
   a_outlands: {
      darktorielcall: [
         ">{#p/toriel}{#f/5}* I apologize, little one.\n* I have once again turned off my phone.",
         ">{#p/toriel}{#f/9}* Please, leave me here for the time being.",
         ">{#p/toriel}{#f/10}* I will return to you and the others in due time."
      ],
      secret1: () =>
         SAVE.data.n.plot === 72 && !world.darker
            ? [
               ">{#p/basic}* If only there was some hidden method of unlocking this drawer.",
               ">* Sorry, did I say \"drawer?\"\n* Surely there aren't any of those in the Outlands."
            ]
            : [">{#p/basic}* 这里有一扇门。\n* 锁住了。"],
      secret2: [">{#p/human}* （你使用了秘密钥匙。）"],
      exit: () => [choicer.create("* （离开外域吗？）", "离开", "再等等")],
      nosleep: [">{#p/human}* （好像有什么打扰了你休息。）"],
      noequip: [">{#p/human}* （你打算不这么做。）"],
      finaltext: {
         a: [">{#p/basic}* 他肯定就在附近..."],
         b: [">{#p/basic}* 等等...？", ">{#p/basic}* 那边站着的...\n* 是他吗？"],
         c: [
            ">{#p/basic}* ...真的是他。",
            ">* ...\n* 弗里斯克，如果你准备好了...",
            ">* 如果你已见过每一位想见的人...",
            ">* ...",
            ">* 你知道该做什么。",
            ">* 如果你还有事要做，\n  我会耐心等待，直到你准备好。"
         ],
         d1: [">{#p/basic}* 艾斯利尔。"],
         d2: [">{#p/asriel1}{#f/13}* ...弗里斯克？\n* 是你吗...？"],
         d3: [">{#p/basic}* 艾斯利尔，是我啊，你最好的朋友...", ">{#p/basic}* 还记得我吗？"],
         d4: [
            ">{#p/asriel1}{#f/25}* ...！",
            ">{#f/25}* $(name)...？",
            ">{#f/13}* 可是... 你...",
            ">{#f/23}* ...你已经..."
         ],
         d5: [">{#p/basic}* 死了？"],
         d6: [
            ">{#p/basic}* 呵。\n* 很长一段时间里...\n  我真想死了算了。",
            ">{#p/basic}* 我对你做了那种事，我...\n  我就活该去死。"
         ],
         d7: [">{#p/asriel1}{#f/7}* 别这么说， $(name)！", ">{#f/6}* ...你错了！"],
         d8: [
            ">{#p/basic}* 哈哈... 瞧瞧是谁在反驳。\n* “去找爱你的人”先生。",
            ">* 但是，艾斯利尔...\n  是时候告诉你真相了。",
            ">* 关于我的，我的一切。"
         ],
         d9: [">{#p/asriel1}{#f/23}* ...", ">{#f/23}* 但是..."],
         d10: [">{#p/asriel1}{#f/13}* $(name)...", ">{#f/15}* 你是怎么..."],
         d11: [
            ">{#p/basic}* ...那重要吗？",
            ">* 我一直都不是什么好人，\n  这才是最重要的，\n  也是想告诉你的真相。",
            ">* 所以，你之前不记得我，\n  把我遗忘... 我不怪你。",
            ">* 而且，我也不配做\n  你的朋友，你的兄弟。"
         ],
         d12: [">{#p/asriel1}{#f/13}* $(name)，我..."],
         d13: [">{#p/basic}* 别伤心，艾斯利尔。", ">* 没必要逼自己觉得\n  我是个好人。"],
         d14: [">{#p/asriel1}{#f/22}* ...", ">{#f/22}* ...为什么现在说这些？"],
         d15: [
            ">{#p/basic}* 因为...",
            ">* 曾经，我一直觉得人性本恶。",
            ">* 也就是说...",
            ">* 只要你是个人类，\n  不管经历什么，最终必定堕入黑暗。",
            ">* 但我在目睹了弗里斯克的整段旅程，\n  见证了弗里斯克所做的一切后...",
            ">* 我才知道真相。",
            ">* 别的人类... \n  他们伤害怪物，欺负怪物。\n* 更有甚者，把他们...",
            ">* 所以，我一直对真相视而不见。",
            ">* 但弗里斯克不是。",
            ">* 无论面对什么困难，\n  弗里斯克总是施以善意，报以仁慈。",
            ">* 是弗里斯克... \n  让我看清自己的错误。",
            ">* 所以，我不该继续逃避责任了。",
            ">* 让你受了那么多苦，\n  失去那么多重要的东西。",
            ">* 都是我的错。"
         ],
         d16: [">{#p/asriel1}{#f/13}* 对了，$(name)...", ">{#f/15}* 这段时间里，\n  你一直都有自己的意识吗？"],
         d17: [
            ">{#p/basic}* ...对，应该是这样。",
            ">* 在咱们死后，我就是以这种形态\n  继续“活着”的。",
            ">* 而且，我还有些话想跟你说。"
         ],
         d18: [">{#p/asriel1}{#f/21}* 你说吧。"],
         d19: [
            ">{#p/basic}* 还记得吗？",
            ">* 咱们一起穿过力场，\n  到达故园的废墟时，\n  被那伙人类发现了。",
            ">* 那时，\n  我打算用咱们的力量消灭他们...\n  但你阻止了我，还记得吗？"
         ],
         d20: [">{#p/asriel1}{#f/16}* ...当然。"],
         d21: [
            ">{#p/basic}* 那时，我不理解\n  你为什么要那么做...",
            ">* 但现在，我明白了。",
            ">* 你那么做... \n  是不想让我铸成大错。"
         ],
         d22: [">{#p/asriel1}{#f/15}* $(name)..."],
         d23: [
            ">{#p/basic}* 如果没有你，\n  前哨站就会在又一次战争中\n  彻底毁灭。",
            ">* 如果没有你，\n  那些我想拯救的怪物们...",
            ">* ...就将与我们一同陪葬。"
         ],
         d24: [">{#p/asriel1}{#f/25}* $(name)，我..."],
         d25: [
            ">{#p/basic}* 即使是现在，你当时的选择仍然很重要。",
            ">* 即使是现在...",
            ">* 你仍然是最好的兄弟姐妹。"
         ],
         d26: [
            ">{#p/asriel1}{#f/25}* 我原谅你，$(name)！",
            ">{#f/23}* 好吧？\n* 你不必这么做的...",
            ">{#f/22}* 我知道你当时的感受有多强烈，而且...",
            ">{#f/15}* 我不想你因为我改变想法..."
         ],
         d27: [
            ">{#p/basic}* 不。\n* 不用说了。",
            ">* 人人都会改变，艾斯利尔...",
            ">* 这不是你一直相信的吗？"
         ],
         d28: [">{#p/asriel1}{#f/13}* ...是的。"],
         d29: [
            ">{#p/basic}* 过去的一百年中，我一直在自责。",
            ">* 过去的一百年中，我一直怀恨在心。",
            ">* 那段时间，我一直在想是什么让我活着...",
            ">* 现在，我终于知道答案了。"
         ],
         d30: [">{#p/asriel1}{#f/15}* ...？"],
         d31: [">{#p/basic}* ...是你，艾斯利尔。", ">* 是你一直在支撑我活下去。"],
         d32: [
            ">{#p/basic}* 像是一种... 没有兑现的承诺。",
            ">* 怀恨在心... 像我一样想着你...",
            ">* 知道我本可以为你付出比最终更多的努力。",
            ">* 一直以来，这就是阻止我前进的原因。"
         ],
         d33: [">{#p/asriel1}{#f/23}* $(name)..."],
         d34: [">{#p/basic}* 艾斯利尔。\n* 我的兄弟。", ">* 你应该知道真相。"],
         d35: [">{*}{#p/asriel1}{#f/25}* 嗯？\n* 但是你早就- {%}"],
         d36: [">{#p/basic}* 我也原谅你。"],
         d37: [">{#p/asriel1}{#f/30}{#i/4}* ...！", ">{#p/asriel1}{#f/26}{#i/4}* $(name)..."],
         d38: [">{#p/basic}* 嘘...", ">* It's alright.", ">* 我懂你了，好吗？"],
         d39: [">{#p/asriel1}{#f/25}{#i/4}* 我..."],
         d40: [">{#p/basic}* 我懂你，艾斯利尔。"],
         d41: [
            ">{#p/basic}* ...我能感觉到。",
            ">* 即使过去了一百年...",
            ">* 他还在这，对吧？",
            ">* 就像个小天使一样...",
            ">* 守护我，保护我\n  不受错误决定影响...",
            ">* ...所有这些，\n  都是为了有一天我能报答他。"
         ],
         d42: [">{#p/basic}* 这一切开始有意义了。", ">* 我知道我该怎么做。"],
         d43: [">{*}{#p/asriel1}{#f/25}* 哈？\n* 你要... {^60}{%}"],
         d44: [">{*}{#f/25}* 不...！{^60}{%}", ">{*}{#f/26}* 让... 让我走！{^60}{%}"],
         d45: [">{*}{#p/basic}* 呵...{^60}{%}", ">{*}* ...替我照顾好爸爸妈妈，好吗？{^60}{%}"],
         d46: [">{#p/asriel1}{#f/25}* 弗里斯克，你在那里吗？", ">{#f/22}* 拜托了... 醒来吧..."],
         d47: [">{#p/asriel1}{#f/23}* 我...\n* 我也不想失去你..."],
         d48: [">{#p/asriel1}{#f/17}* ... there you are."],
         d49: [
            ">{#p/asriel1}{#f/23}* Ha... I thought I'd lost you for a minute there.",
            ">{#f/22}* Don't scare me like that again, okay?",
            ">{#f/13}* ..."
         ],
         d50: [
            ">{#p/asriel1}{#f/13}* Well...\n* I have my SOUL back inside of me now.",
            ">{#f/15}* My original one.",
            ">{#f/16}* ...",
            ">{#f/16}* When $(name) and I died, they must've wrapped themselves around me...",
            ">{#f/13}* ... keeping me safe until I could be brought back here.",
            ">{#f/17}* They held on that whole time, just for a chance to see me, Frisk...",
            ">{#f/13}* ... so, the least I can do is honor it.",
            ">{#f/15}* Live the life they always wanted me to have."
         ],
         d51: () => [
            ">{#p/asriel1}{#f/23}* ...弗里斯克。",
            ">{#f/23}* I'm going to stay with you from now on.",
            ">{#f/17}* Wherever you go... I'll follow you.",
            ">{#f/13}* I feel like...\n* I can trust you with that sort of thing.",
            ">{#f/13}* Even if we don't know much about each other.",
            ">{#f/15}* ... I don't know.",
            ">{#f/15}* ...",
            ">{#f/13}* Frisk... are you really sure about this?",
            ">{#f/13}* All the times I've hurt you, hurt your friends...",
            ">{#f/22}* It's... all I can think about right now.",
            ">{#f/21}* Seeing them die like that in my mind, over and over...",
            ">{#f/22}* Knowing that I'm the one who did it.",
            ">{#f/15}* ...",
            ">{#f/15}* Are you really sure you can be there for someone like that?",
            choicer.create("* （你要怎么回答？）", "是", "否")
         ],
         d52: () => [
            ">{#p/asriel1}{#f/15}* ...",
            ...(choicer.result === 0
               ? [
                  ">{#f/17}* ... I guess I just don't understand you, Frisk.",
                  ">{#f/23}* No matter what I do to you... you just won't give in."
               ]
               : [
                  ">{#f/17}* ... yeah, but you're still going to try, aren't you.",
                  ">{#f/23}* You're too stubborn for your own good, Frisk."
               ]),
            ">{#f/22}* ...",
            ">{#f/13}* Hey.\n* Maybe it won't be so bad.",
            ">{#f/17}* Having you there with me definitely won't hurt matters.",
            ">{#f/13}* ...\n* The thing is...\n* If I stayed here now...",
            ">{#f/15}* It wouldn't be right by $(name)... you know?",
            ">{#f/13}* And besides, with my SOUL back inside of me...",
            ">{#f/13}* I won't turn back into a star.",
            ">{#f/13}* So... there's no point in me staying here."
         ],
         d53: [
            ">{#p/asriel1}{#f/17}* Well.\n* Better get going.",
            ">{#f/20}* Your friends are probably worried sick about you by now."
         ],
         e1: [
            ">{#p/asriel1}{#f/15}* ...",
            ">{#f/16}* I don't know what's going to happen to $(name) after this.",
            ">{#f/13}* They held on for a chance to see me, but that's...",
            ">{#f/15}* ... in the past now."
         ],
         e2: [
            ">{#p/asriel1}{#f/13}* I still can't believe they waited all that time just to see me...",
            ">{#f/23}* Stubborn idiot.",
            ">{#f/17}* ... is what I would have said, if I was still a talking star.",
            ">{#f/13}* But... I don't really think they're an idiot."
         ],
         e3: [
            ">{#p/asriel1}{#f/13}* $(name)'s not stupid.\n* And I...",
            ">{#f/13}* I agreed with a lot of what they said about themselves...",
            ">{#f/15}* About them not being the kind of friend I wish I had...",
            ">{#f/7}* ... but it doesn't mean I wanted them gone!"
         ],
         e4: [
            ">{#p/asriel1}{#f/13}* It's not like $(name) has to go away...",
            ">{#f/17}* If they wanted to, they could stay with us.\n* I'd like them to.",
            ">{#f/15}* But I'd understand if they wanted to go.",
            ">{#f/16}* They \"won\" their game.\n* They shouldn't want to \"play\" with me anymore."
         ],
         e5: [
            ">{#p/asriel1}{#f/13}* ... $(name)...\n* If you're still there, listening...",
            ">{#f/15}* I want you to know that I love you.",
            ">{#f/23}* You might not have been the greatest person...",
            ">{#f/22}* But, deep down, you still cared about me."
         ],
         e6: [
            ">{#p/asriel1}{#f/23}* Ha...",
            ">{#f/22}* I probably seem like a crazy person right now.",
            ">{#f/15}* Obsessing over someone I should have moved on from already...",
            ">{#f/17}* ... I guess $(name) and I really are just a \n  pair of stubborn idiots."
         ],
         e7: [
            ">{#p/asriel1}{#f/13}* One time, $(name) and I were fighting over a bed...",
            ">{#f/10}* 'Cause, both of us wanted the one with the nightstand next to it.",
            ">{#f/15}* We were both pushing each other off the side, trying to make room...",
            ">{#f/4}* All that fighting got us so tired, that we fell asleep.",
            ">{#f/13}* But when we woke up...",
            ">{#f/17}* We were lying right next to each other.",
            ">{#f/13}* I tried to get up, but... they didn't want to let go.",
            ">{#f/15}* They just kept saying...",
            ">{#f/15}* \"... warm...\"",
            ">{#f/15}* \"... fluffy...\"",
            ">{#f/20}* I would have complained about it, but...",
            ">{#f/17}* ... at that point, I was just happy we weren't fighting."
         ],
         e8: [
            ">{#p/asriel1}{#f/13}* This other time, $(name) and I were making dinner for Mom and Dad.",
            ">{#f/15}* They kept wanting to make it more spicy...",
            ">{#f/3}* To be honest, if they insisted on that now, I would not complain.",
            ">{#f/20}* I could go for something spicy right about now.",
            ">{#f/13}* But, back then, I was more into sweets.\n* Most monsters are.",
            ">{#f/15}* We ended up playing tug-of-war with the mixing bowl, and...",
            ">{#f/20}* You can imagine how that turned out.",
            ">{#f/17}* Mom made us clean up the mess, of course.",
            ">{#f/13}* Then, Dad took us out to eat, and we both got what we wanted."
         ],
         e9: [
            ">{#p/asriel1}{#f/15}* $(name) and I...\n* It's like we couldn't agree on anything...",
            ">{#f/20}* Besides spending time together, that is.",
            ">{#f/17}* Despite our differences, $(name) and I really were inseparable.",
            ">{#f/13}* Even death itself couldn't even keep us apart forever."
         ],
         e10: [
            ">{#p/asriel1}{#f/17}* ... do you think they're still around, Frisk?",
            ">{#f/17}* For all you know, they could be watching us right now.",
            ">{#f/23}* Wouldn't that be something.",
            ">{#f/22}* But it's impossible to know for sure."
         ],
         e11: [
            ">{#p/asriel1}{#f/17}* Golly.\n* For someone who'll be staying with you...",
            ">{#f/20}* I sure am making it sound like I'd rather be with $(name).",
            ">{#f/13}* But... it's not like that at all.",
            ">{#f/17}* I just can't help but reminisce about someone I used to know."
         ],
         e12: () => [
            ">{#p/asriel1}{#f/17}* Frisk...\n* I want you to know.",
            ">{#f/13}* Thanks to you...",
            ">{#f/23}* I feel like I have a future again.",
            ">{#f/22}* ...",
            ...(!SAVE.flag.b.pacifist_marker_forgive
               ? [">{#f/22}* Even though you couldn't forgive me for what I'd done..."]
               : SAVE.flag.n.killed_sans > 0
                  ? [">{#f/22}* Even though I wanted you to do all those terrible things..."]
                  : [">{#f/22}* Even though I tortured you, and threatened everyone you love..."]),
            ">{#f/13}* You're still willing to help me move past it all.",
            ">{#f/23}* ... it means a lot.",
            ">{#f/22}* ...",
            ">{#f/13}* Mom, Dad...",
            ">{#f/13}* Sans, Papyrus, Undyne, Alphys...",
            ">{#f/15}* Everyone I've killed in past realities...",
            ">{#f/16}* ... it's going to difficult for me to face them.",
            ">{#f/13}* ...",
            ">{#f/17}* But I'll try.",
            ">{#f/23}* I'll try to be a better person.",
            ">{#f/22}* And, If I ever screw up...",
            ">{#f/13}* ... I know you'll be there to help me pick up the pieces."
         ],
         e13: [
            ">{#p/asriel1}{#f/17}* Ha... $(name).",
            ">{#f/23}* I won't let you down, okay?",
            ">{#f/22}* I'll make the most out of this chance you've given me.",
            ">{#f/17}* I'll make it count."
         ]
      },
      evac: [">{#p/human}* （你感觉周围的怪物越来越少了。）"],
      stargum1: () =>
         SAVE.data.b.svr
            ? [
               ">{#p/human}* （你发现漫画上\n  “附赠”了一块口香糖...）",
               choicer.create("* （嚼它吗？）", "嚼", "不嚼")
            ]
            : [
               ">{#p/basic}* 漫画封面上附了一块口香糖。",
               choicer.create("* （嚼它吗？）", "嚼", "不嚼")
            ],
      stargum2: [">{#p/human}* （你决定不嚼。）"],
      stargum3: [">{#p/human}* （你回复了$(x) HP。）"],
      stargum4: [">{#p/human}* （HP已回满。）"],
      fireplace1: () =>
         SAVE.data.b.svr
            ? [
               ">{#p/human}* （壁炉的温暖让你无法抗拒...）",
               choicer.create("* （爬进去吗？）", "是", "否")
            ]
            : [
               SAVE.data.n.state_wastelands_toriel === 2 || world.runaway
                  ? ">{#p/basic}* 一个普通的壁炉。"
                  : ">{#p/basic}* 托丽尔的壁炉。\n* 里面并不烫，而是暖暖的，\n  很舒服。",
               ...(world.darker
                  ? []
                  : [">* 你甚至可以爬进去。", choicer.create("* （爬进去吗？）", "是", "否")])
            ],
      fireplace2a: [">{#p/human}* （你不打算爬进去。）"],
      fireplace2b: () => [
         ">{#p/human}* （你爬进壁炉，\n  它的温暖紧紧将你包围。）",
         ">{#p/human}* （你感到十分舒适。）",
         ...(SAVE.data.b.svr
            ? asrielinter.fireplace2b++ < 1
               ? [">{#p/asriel1}{#f/13}* 呃，我会在这等你出来的。"]
               : []
            : world.goatbro && SAVE.flag.n.ga_asrielFireplace++ < 1
               ? [">{#p/asriel2}{#f/15}* 呃，我就在这等你出来吧..."]
               : [])
      ],
      fireplace2c: [">{#p/toriel}{#f/1}{#npc/a}* 别在里面待太久了..."],
      fireplace2d: [">{#p/basic}* ...", ">* 挺舒服的。"],
      noticereturn: [">{#p/asriel2}{#f/10}* 之前有什么东西\n  忘在这了吗？"],
      noticestart: [
         ">{#p/asriel2}{#f/3}* 啊，这就是一切开始的地方。",
         ">{#p/asriel2}{#f/4}* $(name)，记得吗？\n  从那以后，无论去哪里，\n  我们都是在一起的。"
      ],
      noticedummy: [">{#p/asriel2}{#f/3}* ...", ">{#p/asriel2}{#f/10}* 这里以前\n  应该有个人偶吧...？"],
      afrog: {
         a: [
            ">{#p/basic}{#n1}* 偷偷告诉你一件事...",
            ">* 刚才我看到那位羊女士\n  从这经过。",
            ">* 她买了很多吃的，于是我问她\n  这些是用来干什么的。她说...",
            ">* 嘿嘿，有惊喜等着你哦。"
         ],
         b: () =>
            SAVE.data.n.plot === 72
               ? [
                  ">{#p/basic}{#n1}* 偷偷告诉你一件事...",
                  ">* I saw that goat lady come through here earlier.",
                  ">* She said it was time to \"confront her fears.\"",
                  ">* Well, whatever she did clearly led to something!\n* We're all free now!"
               ]
               : SAVE.data.n.plot === 71.2
                  ? [
                     ">{#p/basic}{#n1}* Did you see her?\n* She just came through here right now!",
                     ">* She said it was time to \"confront her fears.\"",
                     ">* I wonder what she could have meant...?\n* She seemed determined."
                  ]
                  : SAVE.data.b.w_state_lateleave
                     ? [
                        ">{#p/basic}{#n1}* 偷偷告诉你一件事...",
                        ">* 刚才我看到那位羊女士\n  搭出租车买东西去了。",
                        ">* 她说买完牛奶就回来，\n  结果到现在也没回来...",
                        ">* 希望她没事。"
                     ]
                     : [
                        ">{#p/basic}{#n1}* 偷偷告诉你一件事...",
                        ">* 有时候，当我一个人的时候，\n  我喜欢坐出租车去市场。",
                        ">* 店小巧精致，\n  但卖的东西很多。",
                        ">* 也许我可以找个时间带你去...\n  你肯定会喜欢的！"
                     ],
         c: () =>
            SAVE.data.n.plot === 72
               ? [
                  ">{#p/basic}{#n1}* 偷偷告诉你一件事...",
                  ">* I'm not a fan of how you beat us all up at first.",
                  ">* We were all so scared and confused...",
                  ">* ... at least you did something good in the end."
               ]
               : [
                  ">{#p/basic}{#n1}* 偷偷告诉你一件事...",
                  ">* The people you've been beating up aren't happy about it.",
                  ">* Just be glad I'm off-duty...\n* 'Cause otherwise...",
                  ">* I'd have your head."
               ],
         d: [">{#p/basic}{#n1}* 不要... 不要！", ">* 离-离我远点！"]
      },
      asriel0: [
         ">{#p/asriel2}{#f/5}* ...没事！\n  我知道你很守时的！",
         ">{#p/asriel2}{#f/1}* 别让我失望哦。"
      ],
      asriel1: () =>
         [
            [
               ">{#p/asriel2}{#f/2}* 对不起，耽搁了一会。\n  我刚才用托丽尔的手机\n  喊了个人。",
               ">{#p/asriel2}{#f/1}* 别着急，马上你就懂了。",
               ">{#p/asriel2}{#f/2}* 嘻嘻嘻...\n* 我到前面等你。"
            ],
            [">{#p/asriel2}{#f/4}* 我到前面等你。"],
            [">{#p/asriel2}{#f/3}* ..."]
         ][Math.min(SAVE.flag.n.ga_asrielNegative1++, 1)],
      asriel2: () => [
         ">{#p/asriel2}{#f/1}* $(name)，准备好了吗？",
         ">{#f/2}* 迈出这一步后，\n  可就再也没有回头路了。",
         choicer.create("* （跟上他吗？）", "跟上他", "再等等")
      ],
      asriel2b: () => [">{#p/asriel2}{#f/1}* 准备好了？", choicer.create("* （跟上他吗？）", "跟上他", "再等等")],
      asriel3: [">{#p/asriel2}{#f/2}* 好...", ">{#f/1}* 我们前进吧。"],
      asriel4: [">{#p/asriel2}{#f/4}* 我会等你准备好的。"],
      asrielDiary: [
         [
            ">{#p/human}* （你翻到第一页...）\n* （上面的字歪歪扭扭，难以辨认。）",
            ">{#p/asriel1}{#v/2}* “今天我 yào 开女台 xiě 日计了\n   妈妈 shuō 日计 hěn好玩”",
            ">* “今天 bàbà 叫wǒ\n   zěn 么在花园 bō种”",
            ">* “bàbà shuō 花会长大\n   但是 yào 灯 hěn长 时间”",
            ">* “妈妈 wǎn上\n   yào给我坐 wō 牛 pài\n   我 hěn 高兴”",
            ">* “今天过的 hěn 开心”"
         ],
         [
            ">{#p/human}* （你翻到第二页...）",
            ">{#p/asriel1}{#v/2}* “艾利的日计 kè历 504年”",
            ">* “妈妈shuō 我应gāi 把 日qī 写上\n   不rán 别人不知到\n   我nǎ 天写的日计”",
            ">* “我的 xīngxīng 花还是没有开\n  但 bàbà shuō 马上jiù会开”",
            ">* “我 xiǎng 在我的 fáng 间\n   放一个 chuāng户\n   bàbà shuō 那里有 guǎn子”",
            ">* “但是会在 kè tīng里\n   放一个 chuāng户”",
            ">* “今天也 hěn 开心”"
         ],
         [
            ">{#p/human}* （你翻到第三页...）\n* （看起来，两年过去了。）",
            ">{#p/asriel1}{#v/2}* “艾利的日记，克历506年 3月”",
            ">* “我今天在 fān 我的玩具时\n   找到了日记\n   xiǎng 多写一点”",
            ">* “好像上次 日qī\n   我 wàng 了写月”",
            ">* “对了 我之前 bō 种的星星花\n   长出来一点了”",
            ">* “但是 今天我和 朋友打jià了\n   tā不理我了。”",
            ">* “我很担心... \n   希忘tā 别生我的气。”"
         ],
         [
            ">{#p/human}* （你翻到第四页...）",
            ">{#p/asriel1}{#v/2}* “艾利的日记，克历506年3月”",
            ">* “我和朋友 liáo了一下，\n   朋友不生我的气了，\n   太好了。”",
            ">* “今天，妈妈和我到外面看星空。\n   我们看到了liú星。”",
            ">* “妈妈让我许个原，\n   我希望...\n   有一天，我能在这里见到人lèi。”",
            ">* “妈妈和爸爸给我讲了\n   很多他们的故是...”",
            ">* “人lèi中，一定有好人\n  对吧？”"
         ],
         [
            ">{#p/human}* （你翻到了第五页...）",
            ">{#p/asriel1}{#v/2}* “艾利的日记，克历506年3月”",
            ">* “今天没什么想写的。”",
            ">* “我有点tǎo厌写日记了。”",
            ">* “妈妈前两天看到我\n   又在写日记，\n   她说她很高兴。”",
            ">* “写日记真有那么 zhòng 要吗？”"
         ],
         [
            ">{#p/human}* （你翻到了第六页...）\n* （看起来，又过去了好几年。）",
            ">{#p/asriel1}{#v/1}* “艾利的日记，克历510年8月”",
            ">* “感觉自己写日记，\n   总是写不了多久就放弃了。”",
            ">* “今天偶然间又翻出了日记本，\n   打算再多写一点。”",
            ">* “过去几年，过的都挺不错的。\n   我上了学，学到了很多知识。”",
            ">* “我学会了加减乘除，\n   学会了打字上网。”",
            ">* “不过，妈妈说我现在还太小。\n   不能住册自己的账号。”",
            ">* “等我再大一点，\n   应该就能有自己的号了。”"
         ],
         [
            ">{#p/human}* （你翻到了第七页...）",
            ">{#p/asriel1}{#v/1}* “艾利的日记，克历510年8月”",
            ">* “那个天才今天又来我家串门了，\n   他说，自己刚做了个恶梦，\n   一个关于人类的恶梦。”",
            ">* “哦，忘了介绍他了。\n   他是一名皇家科学员，\n   经常和爸爸聊天。”",
            ">* “物质复制仪、钠米构造机、\n   重力模拟器... \n   这些装置，我们每天都要用到。”",
            ">* “而它们，都出自这位天才之手。”",
            ">* “但是今天，\n   他却用一种很异样的眼神看着我，\n   仿佛见了鬼一样。”",
            ">* “我做了什么错事吗？”"
         ],
         [
            ">{#p/human}* （你翻到了第八页...）",
            ">{#p/asriel1}{#v/1}* “艾利的日记，克历510年8月”",
            ">* “今天，天空中突然出现\n   一颗很耀眼的星星。”",
            ">* “超级耀眼。”",
            ">* “我很奇怪，为什么大部分星星\n   平时都没有那么亮呢？”",
            ">* “对了，我们马上就要搬到\n   首塔的新家了。”",
            ">* “我在这里就能远远看到首塔，\n   那里真漂亮啊！”",
            ">* “住在那里，\n   肯定比住厂房舒服多了。”"
         ],
         [
            ">{#p/human}* （你翻到了第九页...\n   看起来，又过去了两天。）",
            ">{#p/asriel1}{#v/1}* “艾利的日记，克历510年9月”",
            ">* “昨天，我见到了真正的人类。\n   那人类的飞船一头撞到了\n   我家附近的垃圾站。”",
            ">* “我将其从废墟中拉了出来，\n   那人类对我道了谢。”",
            ">* “我都没想到有一天\n   居然真的见到了人类。”",
            ">* “而且，人类{#p/basic}闂彞{#p/asriel1}{#v/1}瓠{#p/basic}監哈哈哈艾利\n   你真是个大hún求掓{#p/asriel1}{#v/1}銊簦{#p/basic}燹{#p/asriel1}{#v/1}瀲{#p/basic}潏{#p/asriel1}{#v/1}甕”",
            ">* “好，现在我躲到被窝里\n   $(name)应该没法再乱写乱画了。”",
            ">* “有时，$(name)会稍微有点淘气，\n   不过我不介意。”",
            ">* “妈妈让$(name)进入战斗，\n   发现$(name)的心心是红色的，\n   方向也是反的。”",
            ">* “多个能每天陪我聊天的伙伴\n   真是太棒了。”"
         ],
         [
            ">{#p/human}* （你翻到了第十页...）",
            ">{#p/asriel1}{#v/1}* “艾利的日记，克历510年9月”",
            ">* “妈妈说，她决定收养$(name)，\n   把$(name)当成自己的孩子。”",
            ">* “我还不太懂‘收养’是什么意思，\n   但妈妈说，$(name)现在就是\n   我的亲人了。”",
            ">* “太好了，我可以和$(name)\n   待得更久啦。”",
            ">* “无论做什么，去哪里，\n   我俩都要在一起！”",
            ">* “哦对了，昨天乱写乱画的事，\n   $(name)跟我道了歉。”",
            ">* “我嘴上没说，\n   但心里已经原谅了。”",
            ">{#p/basic}* ..."
         ],
         [
            ">{#p/human}* （你翻到了第十一页。）",
            ">{#p/asriel1}* “艾斯利尔的日记，克历515年9月”",
            ">* “$(name)说，是时候执行计划了。”",
            ">* “我很害怕，\n   但$(name)相信我能行的。”",
            ">* “写完这段，\n   我就只需要等$(name)‘陨落’...”",
            ">* “然后，我们一起拯救所有怪物。”",
            ">* “但是，$(name)。\n   如果真出了事，计划失败了...\n   如果你看到了这篇日记...”",
            ">* “我想对你说，你是最棒的。”",
            ">{#p/basic}* ...",
            ">{#p/human}* （你听到有人在哭...）"
         ]
      ],
      backdesk: {
         a: () => [
            ...(SAVE.data.b.svr ? [] : [">{#p/basic}* 衣架上挂了个背包。"]),
            ">{#p/human}* （你往背包里瞅了一眼...）",
            ...(SAVE.data.b.svr
               ? [">{#p/human}* （但里面什么都没有。）"]
               : [">{#p/basic}* 没有其他东西了。"])
         ],
         b: () => [
            ...(SAVE.data.b.svr ? [] : [">{#p/basic}* 衣架上挂了个背包。"]),
            ">{#p/human}* （你往背包里瞅了一眼...）",
            ...(SAVE.data.b.svr
               ? []
               : [">{#p/basic}* 这是什么？\n* 限量版的《超级星之行者》漫画？"]),
            ">{#s/equip}{#p/human}* （你获得了《超级星之行者2》。）"
         ],
         b2: () => [
            ...(SAVE.data.b.svr ? [] : [">{#p/basic}* 衣架上挂了个背包。"]),
            ">{#p/human}* （你往背包里瞅了一眼...）",
            ...(SAVE.data.b.svr
               ? []
               : [">{#p/basic}* 这是什么？\n* 限量版的《超级星之行者》漫画？"]),
            ">{#p/human}* （你带的东西太多，装不下它了。）"
         ]
      },
      midsleep: () => [
         ">{#p/human}* （如果你现在睡觉，\n  你可能会错过一些重要的事情。）",
         choicer.create("* （要睡觉吗？）", "是", "否")
      ],
      bedfailToriel: [
         ">{#p/toriel}{#f/5}* 哦，天哪...",
         ">{#f/1}* 我是不是刚刚对这孩子\n  下手太狠了...",
         ">{#f/0}* ...\n* 别担心，孩子。",
         ">* 好好休息。\n  然后，以饱满的状态\n  去迎接之后的旅程。",
         ">{#p/human}* （托丽尔唱了一首优美的摇篮曲\n  伴你入睡。）"
      ],
      blooky1: () => [
         ">{#p/napstablook}* Zzz... Zzz...",
         ">* Zzz... Zzz...",
         ">{#p/basic}* 这只幽灵不停地大声说“z”，\n  假装自己在睡觉。",
         choicer.create("* （“踩”过去吗？）", "是", "否")
      ],
      blooky2: () => [
         ">{#p/basic}* 幽灵还是把路挡着。",
         choicer.create("* （“踩”过去吗？）", "是", "否")
      ],
      blooky3: [
         ">{#p/napstablook}* 我经常来这边\n  因为这里很宁静...",
         ">* 但是今天我碰到了很好的人...",
         ">* 哦，我不挡你路了",
         ">* 回见..."
      ],
      blooky4: [
         ">{#p/napstablook}* 呃，所以...\n* 你真的挺喜欢我的，是吧",
         ">* 嘿... 谢谢你...",
         ">* 还有，嗯... \n  对不起之前挡了你的路...",
         ">* 我要去其他地方了",
         ">* 不过... 别担心...",
         ">* 如果你想见我的话...",
         ">* 之后还有机会的...",
         ">* 那，回见了..."
      ],
      blooky5: [
         ">{#p/napstablook}* 呃，好吧...\n  看来，你打心底里厌恶我",
         ">* 这样... 也挺好的...",
         ">* 好吧，我要忙自己的事去了",
         ">* 拜拜..."
      ],
      blooky6: [
         ">{#p/napstablook}* 呃... 发生了什么...",
         ">* ...",
         ">* 哦... 我得走了",
         ">* 回见..."
      ],
      blooky7: [
         ">{#p/napstablook}* 你甚至连句话都没有...？",
         ">* 你... 我都不知道\n  你到底怎么了...",
         ">* 好吧，我走了",
         ">* 拜拜..."
      ],
      breakfast: [">{#p/human}* （你得到了焗蜗牛。）"],
      breakslow: [">{#p/human}* （你带的东西太多，装不下它了。）"],
      candy1: () =>
         SAVE.data.b.svr
            ? [
               ">{#p/human}* (You approach the vending machine.)",
               choicer.create("* （你想合成什么呢？）", "怪物糖果", "水", "大麻素", "放弃")
            ]
            : [
               ">{#p/basic}* 要用这台机器合成什么呢？",
               choicer.create("* （你想合成什么呢？）", "怪物糖果", "水", "大麻素", "放弃")
            ],
      candy2: [">{#p/human}* （你得到了$(x)。）\n* （按[C]打开菜单。）"],
      candy3: [">{#p/human}* （你得到了$(x)。）"],
      candy4: () => [
         ">{#p/human}* （你得到了$(x)。）",
         ...(SAVE.data.b.svr ? [] : [">{#p/basic}* 机器开始出故障了。"])
      ],
      candy5: () => [
         ">{#p/human}* （你得到了$(x)。）",
         ...(SAVE.data.b.svr ? [] : [">{#p/basic}* 机器坏掉了。"])
      ],
      candy6: () =>
         SAVE.data.b.svr
            ? [
               [
                  ">{#p/asriel1}{#f/13}* Out of service again?",
                  ">{#f/17}* Yeah, that's... by design, actually.",
                  ">{#f/13}* This machine runs on the Outlands' own power supply, so...",
                  ">{#f/15}* To avoid using too much power, Toriel just made it break itself.",
                  ">{#f/20}* Not that she'd tell you."
               ],
               [
                  ">{#p/asriel1}{#f/13}* The reason that power supply is so small, though...",
                  ">{#f/17}* It's because, unlike the CORE, it only uses background radiation.",
                  ">{#f/13}* To put it into numbers, I'd say...",
                  ">{#f/15}* It generates about ten- thousandths of the power the CORE does."
               ],
               [
                  ">{#p/asriel1}{#f/13}* Hmm...",
                  ">{#f/15}* I wonder if, despite its low capacity...",
                  ">{#f/13}* This generator would be enough to power a small atmospheric system.",
                  ">{#f/17}* If the CORE was destroyed, could people survive here...?"
               ],
               [">{#p/asriel1}{#f/20}* ... asking for a friend."]
            ][Math.min(asrielinter.candy6++, 3)]
            : [">{#p/basic}* 完全不运转了。"],
      candy7: [">{#p/human}* （你打算什么也不合成。）"],
      candy8: [">{#p/human}* （你带的东西太多了。）"],
      chair1a: () => [
         ">{#p/toriel}{#f/1}{#n1}* 怎么了，孩子？\n* 饿了吗？",
         ">{#f/0}* 还是，对我看的这本书\n  比较感兴趣？",
         choicer.create("{#n1!}* （你要怎么回答？）", "饿了", "看书", "回家", "没事")
      ],
      chair1b: () => [
         ">{#p/toriel}{#n1}* 怎么了，孩子？",
         choicer.create("{#n1!}* （你要怎么回答？）", "饿了", "看书", "回家", "没事")
      ],
      chair1c: [">{#p/toriel}{#n1}* 需要任何东西随时告诉我哦。"],
      chair1d: [">{#p/toriel}{#n1}* 如果改变主意的话\n  随时告诉我哦。"],
      chair1e: () => [
         ">{#p/toriel}{#f/1}{#n1}* 睡不着吗？",
         ">{#f/1}* ...\n* 如果你喜欢的话，\n  我可以给你读这本书...",
         ">{#f/0}* 书名叫《慷慨的怪物》，\n  是一个人类写的。",
         choicer.create("{#n1!}* （要听吗？）", "听", "不听")
      ],
      chair1f: pager.create(
         0,
         [">{#p/toriel}{#n1}{#f/1}* 哦，回来看我了吗？", ">{#f/0}* 想待多久都可以的。"],
         [">{#p/toriel}{#n1}{#f/5}* 我不想离开这里了，\n  待惯了..."]
      ),
      chair2a1: () => [
         ">{#p/toriel}{#f/1}{#n1}* 你饿了吗？\n* 我给你做点早餐吧。",
         choicer.create("{#n1!}* （现在吃早餐吗？）", "是", "否")
      ],
      chair2a2: [">{#p/toriel}{#n1}* 太好了！\n* 我会在厨房做饭。"],
      chair2a3: () => [
         ">{#p/toriel}{#f/1}{#n1}* 现在想吃早饭了吗？",
         choicer.create("{#n1!}* （现在吃早餐吗？）", "是", "否")
      ],
      chair2a4: () =>
         SAVE.data.b.drop_snails
            ? [
               ">{#p/toriel}{#f/3}{#n1}* 把我做好的早饭扔了，\n  还想让我再给你做一份？",
               ">{#f/4}* 这小子...",
               ">{#f/0}* 休想，小子。\n* 我不会再给你做了。"
            ]
            : [
               ">{#p/toriel}{#n1}* 我已经做过早饭了，小家伙。",
               ">{#f/1}* 我们不能一天吃两顿早饭，\n  对吧？",
               ">{#f/0}* 不然，就会让人觉得很奇怪。"
            ],
      chair2c1: () => [
         ">{#p/toriel}{#n1}* 啊，你说这本书啊！\n* 对，这小书可有意思了。",
         ">{#f/0}* 书名叫《慷慨的怪物》，\n  是一个人类写的。",
         ">{#f/1}* 想让我把它读给你听吗？",
         choicer.create("{#n1!}* （要听吗？）", "听", "不听")
      ],
      chair2c2: [">{#p/toriel}{#n1}* 太好了！", ">{#g/torielCompassionSmile}* ..."],
      chair2c3: () => [
         ">{#p/toriel}{#f/1}{#n1}* 现在想听这本小书了吗？",
         choicer.create("{#n1!}* （要听吗？）", "听", "不听")
      ],
      chair2c4: () => [
         ">{#p/toriel}{#f/1}{#n1}* 你想再听我读一遍吗？",
         choicer.create("{#n1!}* （要听吗？）", "听", "不听")
      ],
      chair2c5: [">{#p/toriel}{#f/1}{#n1}* 好，故事从这里开始...", ">{#p/toriel}{#g/torielCompassionSmile}* ..."],
      chair2c6: [
         ">{#f/1}{#n1}* “从前，有一只怪物...”",
         ">{#f/0}* “这个怪物爱上了\n   一个小小的人类。”",
         ">{#f/1}* “每天，\n   这个人类都会去找她...”",
         ">{#f/0}* “他们一起在田野上\n   奔跑，玩耍。”",
         ">{#f/1}* “他们一起唱歌，\n   一起分享故事...”",
         ">{#f/0}* “还会一起捉迷藏。”",
         ">{#f/1}* “人类玩累了，\n   怪物就会哄人类入睡，\n   帮人类盖上被子...”",
         ">{#f/0}* “人类非常喜欢这个怪物。”",
         ">{#f/0}* “怪物也因此感到快乐。”",
         ">{#f/1}* “但是，随着时间流逝，\n   人类渐渐长大，\n   离开了怪物...”",
         ">{#f/0}* “怪物则只能孤身一人。”",
         ">{#f/1}* “突然有一天，\n   人类回来了...”",
         ">{#f/0}* “怪物对人类说：\n  ‘来吧，一起来玩吧！’”",
         ">{#f/5}* “‘我已经长大，\n    不能再玩了。’\n   人类这样回答。”",
         ">{#f/1}* “‘我想有一辆车，\n    开着它找一个新家。’”",
         ">{#f/5}* “‘对不起，’怪物说道，\n   ‘但是我太穷了，\n    买不起车。’”",
         ">{#f/5}* “‘我只有两条腿，’”",
         ">{#f/0}* “‘爬到我的背上，\n    我可以带你去你\n    想去的地方。’”",
         ">{#f/0}* “‘这样，\n    你就能去到城镇，\n    感到快乐。’”",
         ">{#f/1}* “于是人类爬到\n   怪物的背上...”",
         ">{#f/0}* “怪物带他们去了一个新家。”",
         ">{#f/0}* “怪物也因此感到快乐。”",
         ">{#f/1}* “但是，\n   人类再次离开了怪物，\n   很久都没有回来看她。”",
         ">{#f/5}* “怪物十分难过。”",
         ">{#f/0}* “突然有一天，\n   人类又回来了。”",
         ">{#f/1}* “怪物笑得合不拢嘴，\n   她说...”",
         ">{#f/1}* “‘来吧，人类！\n    骑在我的背上，\n    让我带你去任何地方。’”",
         ">{#f/5}* “‘我现在很伤心，\n    没心情到处转悠。’\n    人类这样说道。”",
         ">{#f/1}* “‘我想有一个家庭，\n    有自己的孩子...’”",
         ">{#f/5}* “‘对不起，\n    但是我给不了你这些。’”",
         ">{#f/5}* “‘我只是一只怪物。’\n   怪物这样说道，”",
         ">{#f/0}* “‘但是，你可以留下来\n    和我待一会，我可以帮你\n    找到一个约会对象。’”",
         ">{#f/0}* “‘这样，你就可以\n    找到心爱之人，感到快乐。’”",
         ">{#f/1}* “于是人类留下来，\n   和老朋友待了一会儿...”",
         ">{#f/0}* “怪物为其找到了\n   可能喜欢的人。”",
         ">{#f/0}* “怪物也因此感到快乐。”",
         ">{#f/5}* “人类又一次离开了怪物，\n   很久之后才回来。”",
         ">{#f/1}* “当人类最终回来的时候，\n   怪物欣喜若狂...”",
         ">{#f/9}* “但她已经连说话\n   都十分困难。”",
         ">{#f/1}* “‘来吧，人类。’\n    她低声说道...”",
         ">{#f/1}* “‘让我带你去找\n    约会对象吧。’”",
         ">{#f/5}* “‘我年岁大了，而且很忙，\n    没空操心这些。’\n   人类这样回答。”",
         ">{#f/1}* “‘我只是想找个\n    今晚过夜的地方...’”",
         ">{#f/5}* “‘对不起，’怪物说，\n   ‘但我没有适合你的床。’”",
         ">{#f/5}* “‘我还是太穷了，\n    连一张床都买不起。’”",
         ">{#f/0}* “‘和我一起睡吧。’”",
         ">{#f/0}* “‘这样，\n    你就可以获得休息，\n    感到快乐。’”",
         ">{#f/1}* “于是，人类躺在了\n   怪物怀里...”",
         ">{#f/0}* “怪物伴着人类入睡。”",
         ">{#f/0}* “怪物也因此感到快乐。”",
         ">{#f/5}* “...但心中另有所思。”",
         ">{#f/9}* “...很久很久以后，\n   人类终于回到了怪物身边。”",
         ">{#f/5}* “‘对不起，人类。’怪物说，\n   ‘但我的生命快走到\n    尽头了。’”",
         ">{#f/5}* “‘我的腿脚不听使唤了，\n    没法带你去任何地方。’”",
         ">{#f/10}* “‘我哪儿也不想去了，’\n   人类说。”",
         ">{#f/5}* “‘我找不到约会对象了，\n    我认识的人都不在了。’”",
         ">{#f/10}* “‘我不需要什么约会了。’”",
         ">{#f/5}* “‘我身体很虚弱，\n    你也不能睡在我身上了。’”",
         ">{#f/10}* “‘我不需要多少休息了。’”",
         ">{#f/5}* “‘我很抱歉，’怪物叹息道。”",
         ">{#f/5}* “‘我希望我还能为你做什么，\n    但我已经一无所有。’”",
         ">{#f/9}* “‘我现在只是一个\n    快要死去的老怪物。’”",
         ">{#f/5}* “‘对不起...’”",
         ">{#f/10}* “‘我现在不需要太多，’\n   人类说。”",
         ">{#f/10}* “‘只想在死前拥抱一下\n    我最好的朋友。’”",
         ">{#f/1}* “‘好，’怪物挺直腰板...”",
         ">{#f/0}* “‘你的朋友，这只老怪物\n    永远在这里等着你。’”",
         ">{#f/0}* “‘来吧，人类，到我这里来。\n    最后一次和我在一起。’”",
         ">{#f/9}* “人类走了过去。”",
         ">{#f/10}* “怪物... 十分快乐。”"

      ],
      chair2c7: [">{#f/0}{#n1}* 嗯，故事讲完了。", ">{#f/1}* 希望你能喜欢这个故事..."],
      chair2c8: [">{#f/0}{#n1}* 嗯，讲完了。"],
      chair2d1: [
         ">{#p/toriel}{#f/1}{#n1}* 回家...？\n* 能说的具体点吗？",
         ">{#p/human}{#n1!}* （你要怎么回答）{!}\n§shift=160§什么时候\n§shift=48§别放在心上§shift=37§可以回家？{#c/0/6/4}"
      ],
      chair2d2: [
         ">{#p/toriel}{#f/1}{#n1}* 但... 这里就是你的家啊，\n  不是吗？",
         ">{#p/human}{#n1!}* （你要怎么回答？）{!}\n§shift=144§怎么才能\n§shift=64§对不起§shift=35§离开外域{#c/0/8/2}"
      ],
      chair2d3: [
         ">{#p/toriel}{#f/5}{#n1}* 请你... 理解一下...",
         ">{#p/toriel}{#f/5}{#n1}* 我这么做都是为了你好。"
      ],
      chair2d4: [
         ">{#p/toriel}{#f/5}{#n1}* 我的孩子...",
         ">{#p/human}{#n1!}* （你要怎么回答？）{!}\n§shift=144§怎么才能\n§shift=64§对不起§shift=35§离开外域{#c/0/8/2}"
      ],
      chair2d5: [">{#p/toriel}{#f/5}{#n1}* ..."],
      chair2d6: [
         ">{#p/toriel}{#f/9}{#n1}* ...",
         ">{#p/toriel}{#f/9}* 拜托，在这里等着。",
         ">{#p/toriel}{#f/5}* 有件事情我必须去处理一下。"
      ],
      chair3: () =>
         SAVE.data.b.svr
            ? [
               [
                  ">{#p/asriel1}{#f/20}* I still can't believe she moved this all the way from the Citadel.",
                  ">{#f/17}* But... I understand why she'd want to.",
                  ">{#f/13}* Mom and this chair of hers go pretty far back.."
               ],
               [
                  ">{#p/asriel1}{#f/13}* One time, she told me something...",
                  ">{#f/17}* \"This chair reminds me of home.\"",
                  ">{#f/13}* But she was already at home, so I asked her what she meant.",
                  ">{#f/17}* Turns out she had this at her home...",
                  ">{#f/23}* ... on the old homeworld."
               ],
               [
                  ">{#p/asriel1}{#f/13}* I don't know much about that world, Frisk...",
                  ">{#f/17}* But I hear it was very... idyllic.",
                  ">{#f/20}* Sure, there were lots of advances in magic and technology...",
                  ">{#f/17}* But people loved it, because life was so... simple."
               ],
               [">{#p/asriel1}{#f/23}* What I wouldn't give to have a simple life."]
            ][Math.min(asrielinter.chair3++, 3)]
            : world.darker
               ? [">{#p/basic}* 一把扶椅。"]
               : [">{#p/basic}* 一把舒适的扶椅。", ">* 大小正好适合托丽尔。"],
      chair4: [">{#p/toriel}{#n1!}* 啊，你醒了。", ">* 我已经把你的那份早餐\n  放在桌子上了。"],
      closetrocket: {
         a: () => [
            ">{#p/human}* （你往箱子里瞅了一眼...）",
            ...(SAVE.data.b.svr
               ? [
                  [
                     ">{#p/asriel1}{#f/13}* Yeah, uh, that's about all you'll find in there.",
                     ">{#f/17}* I'm not sure why Toriel put this here.",
                     ">{#f/17}* $(name) and I were never interested in comic books."
                  ],
                  [">{#p/asriel1}{#f/10}* I guess she just wanted to pretend we were living here...?"],
                  [">{#p/asriel1}{#f/13}* The things a mother does to make herself feel better..."]
               ][Math.min(asrielinter.closetrocket_a++, 2)]
               : [">{#p/basic}* 没有其他东西了。"])
         ],
         b: () => [
            ">{#p/human}* （你往箱子里瞅了一眼...）",
            ...(SAVE.data.b.svr
               ? []
               : [">{#p/basic}* 这是什么？\n* 限量版的《超级星之行者》漫画？"]),
            ">{#s/equip}{#p/human}* （你获得了《超级星之行者3》。）"
         ],
         b2: () => [
            ">{#p/human}* （你往箱子里瞅了一眼...）",
            ...(SAVE.data.b.svr
               ? []
               : [">{#p/basic}* 这是什么？\n* 限量版的《超级星之行者》漫画？"]),
            ">{#p/human}* （你带的东西太多，装不下它了。）"
         ]
      },
      goner: {
         a1: [
            ">{#p/human}* 一片未被凡俗所羁绊的宇宙...",
            ">* 仅为了那纯洁无瑕之美，\n  而存在于斯...",
            ">* 某种特别之物，于此独自闪耀。"
         ],
         a2: [">* 告诉我...", ">* 此情此景... 可曾引起过你的好奇？"]
      },
      danger_puzzle1: () => [
         ">{#p/toriel}* 这个房间里的谜题\n  和之前的都不太一样。",
         [1, 5].includes(SAVE.data.n.state_wastelands_dummy)
            ? ">{#f/3}* 说不定，比起应付人偶...\n  这个谜题更合你胃口？"
            : ">{#f/1}* 你能靠自己解开它吗？"
      ],
      danger_puzzle2: () =>
         world.darker
            ? [">{#p/basic}* 这台终端太高了，你够不到。"]
            : [">{#p/basic}* 终端高高地耸立在你的面前，\n  挡住了你急切的脚步。"],
      danger_puzzle3: () => [
         [1, 5].includes(SAVE.data.n.state_wastelands_dummy)
            ? ">{#p/toriel}{#f/3}* 又怎么了..."
            : ">{#p/toriel}{#f/1}* 怎么了？\n* 需要帮忙吗？"
      ],
      danger_puzzle4: () => [
         ...([1, 5].includes(SAVE.data.n.state_wastelands_dummy)
            ? [">{#p/toriel}{#f/5}* 唉... 我知道了。", ">{#f/5}* 这台终端太高了，\n  你够不到。"]
            : [
               ">{#p/toriel}{#f/7}* ...天哪。",
               ">{#f/6}* 这应该是个设计上的小失误。",
               ">{#f/1}* 这台终端太高了，\n  你够不到是吗？"
            ]),
         ">{#f/0}* 没关系。\n* 我可以替你操作。",
         ">{#f/0}* ...",
         ">{#f/0}* 密码是一个谜语的谜底。\n* 想猜猜看吗？",
         choicer.create("* （猜谜吗？）", "试试看", "算了吧")
      ],
      danger_puzzle5a: [
         ">{#p/toriel}* 太好了！\n* 对你这么大的孩子来说...",
         ">{#f/0}* 热爱学习，渴求知识\n  是尤为重要的。"
      ],
      danger_puzzle5b: [
         ">{#p/toriel}{#f/0}* 谜面是个问题。",
         ">{#p/toriel}{#f/1}* “源自小麦，圆圆不赖。\n   名字带水，小孩最爱。\n   （打一单字食物名）”"
      ],
      danger_puzzle5c: [
         ">{#p/human}* (...)\n* （你把答案告诉了托丽尔。）",
         ">{#p/toriel}{#f/0}* ...啊，想法不错！\n* 学习态度也很积极！"
      ],
      danger_puzzle5d: [
         ">{#p/human}* (...)\n* （你告诉托丽尔，你猜不出来。）",
         ">{#p/toriel}{#f/1}* ...怎么了，孩子？\n* 有什么心事吗？",
         ">{#f/5}* ...嗯...",
         ">{#f/0}* 哦，好吧。\n* 我来帮你解开这个迷题吧。"
      ],
      danger_puzzle5e: () =>
         [1, 5].includes(SAVE.data.n.state_wastelands_dummy)
            ? [">{#p/toriel}{#f/5}* ...", ">{#f/5}* 知道了。"]
            : [">{#p/toriel}{#f/0}* ...", ">{#f/0}* 这次的谜题，我替你解吧。"],
      danger_puzzle6: () => [
         [1, 5].includes(SAVE.data.n.state_wastelands_dummy) && SAVE.data.b.w_state_riddleskip
            ? ">{#p/toriel}{#f/5}* 还有... {#x1}这个。\n* ...可以继续前进了。"
            : ">{#p/toriel}* 还有... {#x1}这个！\n* 可以继续前进了。"
      ],
      danger_puzzle7: () => [
         [1, 5].includes(SAVE.data.n.state_wastelands_dummy) && SAVE.data.b.w_state_riddleskip
            ? ">{#p/toriel}{#f/5}* 我等着你来下个房间。"
            : ">{#p/toriel}* 要是你准备好了，\n  就可以来下个房间了。"
      ],
      danger_puzzle8: () =>
         SAVE.data.b.svr
            ? [">{#p/human}* （但你还是够不到终端。）"]
            : [">{#p/basic}* 即便是现在，那台终端\n  依然高高耸立在这里。"],
      denie: [">{#p/human}* （你带的东西太多，装不下它了。）"],
      dipper: {
         a: () => [
            ">{#p/human}* （你捡起了“小熊座”。）",
            choicer.create("* （装备上小熊座吗？）", "是", "否")
         ],
         b: [">{#p/human}* （你带的东西太多，装不下它了。）"]
      },
      drop_pie: [">{#p/toriel}{#f/1}* 派粥是用来喝的，\n  不是让你往地上倒的。"],
      drop_pie3: [">{#p/toriel}{#f/1}* 请你别把好好的食物\n  往地上扔，好吗？"],
      drop_snails: [">{#p/toriel}{#f/1}* 这些可怜的焗蜗牛\n  又怎么你了？"],
      drop_soda: [">{#p/basic}{#n1}* 啊，你干嘛 ;)", ">* 那可是我全部的心血啊！ ;)"],
      drop_steak: [">{#p/basic}{#n1}* 认真的吗？ ;)", ">* 那牛排可是无价之宝！ ;)"],
      dummy1: [
         ">{#p/toriel}{#f/0}* 接下来，我要教你\n  如何应对其他怪物的攻击。",
         ">{#f/1}* 身为人类，在前哨站走动时，\n  怪物们很可能袭击你...",
         ">{#f/0}* 这时，你就会进入\n  称作“战斗”的环节。",
         ">{#f/0}* 幸好，你可以\n  通过多种方式解决。",
         ">{#f/1}* 眼下，我建议\n  友好地和他们对话...",
         ">{#f/0}* ...好给我机会\n  出面解决冲突。"
      ],
      dummy2: [">{#p/toriel}* 你可以从试着\n  和那边的人偶说说话开始。"],
      dummy3: [
         ">{#p/toriel}{#f/7}* ...你觉得\n  我就是训练人偶？",
         ">{#f/6}* 哈哈哈！\n* 你真是太可爱了！",
         ">{#f/0}* 但很遗憾，我只是个\n  喜欢瞎操心的老阿姨哦。"
      ],
      dummy4: [
         ">{#p/toriel}* 孩子，没有什么好担心的。",
         ">* 区区一个人偶也不会伤害你，\n  对吧？"
      ],
      dummy5: [">{#p/toriel}{#f/1}* 不要怕，小家伙..."],
      dummy6: [
         ">{#p/toriel}{#f/2}* 住手啊，孩子！\n* 人偶不是用来打的！",
         ">{#f/1}* 而且，我们可不想\n  伤害任何人，对吗？",
         ">{#f/0}* 来吧。"
      ],
      dummy7: [">{#p/toriel}* 非常棒！\n* 你学得真快！"],
      dummy8: [
         ">{#p/toriel}{#f/1}* 怎么逃跑了...？",
         ">{#f/0}* 好吧，其实这样也不差。",
         ">{#f/1}* 不管对手是想欺负你，\n  还是像这个人偶一样\n  想和你聊天...",
         ">{#f/0}* 只要你跑的够快，\n  什么都能避免。"
      ],
      dummy9: [">{#p/toriel}{#f/3}* ...", ">{#f/4}* ...", ">{#f/0}* 咱们去下一个房间吧。"],
      dummy9a: [">{#p/toriel}{#f/3}* ...", ">{#f/4}* ...", ">{#f/6}* 咱们去下一个房间吧。"],
      dummy10: [
         ">{#p/toriel}{#f/7}* 天哪，孩子...",
         ">{#f/0}* 我第一次看到\n  这么有爱的场面啊...",
         ">{#f/0}* 总之，你已经出色地掌握了\n  教给你的东西。",
         ">{#f/0}* 咱们去下一个房间吧。"
      ],
      dummy11: [">{#p/toriel}* 咱们去下一个房间吧。"],
      dummy12: [
         ">{#p/toriel}{#f/2}* 我的天哪！\n* 孩子，快住手！",
         ">{#f/1}* ...",
         ">{#f/0}* 幸好，\n  打的只是一个训练人偶。",
         ">{#f/1}* 但是，以后再遇到这种情况...",
         ">{#f/0}* ...请不要\n  把对手打得半死了！",
         ">{#f/0}* 没事，去下个房间吧。"
      ],
      eat_pie: [">{#p/toriel}{#f/1}{#n1}* 好吃吗？"],
      eat_snails: [">{#p/toriel}{#f/0}{#n1}* 希望早餐合你胃口。"],
      eat_soda: [
         ">{#p/basic}* Aaron举起手机，\n  把你喝汽水的瞬间拍了下来。",
         ">{#p/basic}{#n1}* 哦豁，海报大头贴的素材有了 ;)"
      ],
      eat_steak: [
         ">{#p/basic}* Aaron给你抛了个媚眼。",
         ">{#p/basic}{#n1}* 喜欢我们的产品吗，亲？ ;)"
      ],
      endtwinkly2: [
         ">{#p/basic}* 那星星是不是觉得\n  自己可了不起了？",
         ">* 你明明对每个怪物都那么友好，\n  一点错事都没做。",
         ">* 他真能多管闲事..."
      ],
      endtwinklyA1: [
         ">{#p/twinkly}{#f/12}* 你个蠢货...",
         ">* 你没听到我之前\n  说的吗？",
         ">* 我不是告诉过你\n  别搞砸了吗！",
         ">* 看看你对我们的计划\n  做了什么。",
         ">{#f/8}* ...",
         ">{#f/6}* 你最好能解决现在的处境，\n  $(name).",
         ">{#f/5}* 这关乎我们的命运。"
      ],
      endtwinklyA2: () =>
         SAVE.flag.n.genocide_milestone < 1
            ? [
               ">{#p/twinkly}{#f/5}* 哈喽，$(name)。",
               ">{#f/5}* Seems you don't want to play with me anymore.",
               ">{#f/6}* I tried being patient with you, but here we are...",
               ">{#f/6}* Back at the beginning again.",
               ">{#f/8}* Again, and again...",
               ">{#f/5}* You must think this is all very funny.",
               ">{#f/7}* Teasing me with the chance to be with you, only to tear it away...",
               ">{#f/5}* Well, that's fine.",
               ">{#f/5}* If that's the game you're going to play, then go right ahead.",
               ">{#f/11}* Just don't expect to be in control for long...",
               ">{#f/7}* Sooner or later, you're going to regret what you've done."
            ]
            : [
               ">{#p/twinkly}{#f/6}* 哈喽，$(name)。",
               ...(SAVE.flag.n.genocide_milestone < 7
                  ? [
                     ">{#f/6}* I've had some time to think about what happened.",
                     ">{#f/5}* It was thrilling, at first...",
                     ">* The thought of taking the outpost by force together...",
                     ">{#f/6}* But now, I'm not sure.",
                     ">{#f/8}* ...",
                     ">{#f/8}* I guess... I got a bit carried away back there.",
                     ">{#f/5}* But that's okay, right?\n* You'll forgive me, won't you?"
                  ]
                  : [
                     ">{#f/6}* I'm still not really sure what happened back there...",
                     ">{#f/5}* It's... kinda scaring me, haha...",
                     ">{#f/8}* ...",
                     ">{#f/8}* Maybe... we should hold off on things for now.",
                     ">{#f/5}* But that's okay, right?\n* You'll be fine with that, won't you?"
                  ]),
               ">{#f/6}* ...",
               ">{#f/8}* Goodbye, $(name)...",
               ...(SAVE.flag.n.genocide_milestone < 7 ? [">{#f/5}* I'll be back before you know it."] : [])
            ],
      endtwinklyAreaction: [
         ">{#p/basic}* Sorry, did I miss something?",
         ">* I've never talked to him in my life, let alone go on some mission with him.",
         ">* Oh well.\n* It wouldn't be the first time he's made up stories about me."
      ],
      endtwinklyB: () =>
         SAVE.data.b.w_state_lateleave
            ? [
               ">{#p/twinkly}{#f/5}{#v/0}* 呵。\n* 没想到你就这么跑了。",
               ">{#f/11}{#v/0}* 以为规矩这么好打破吗？",
               ">{#f/7}{#v/0}* 嘻嘻嘻...",
               ">{#f/0}{#v/1}* 在这个世界上...\n  不是杀人就是被杀。"
            ]
            : [
               ">{#p/twinkly}{#f/5}{#v/0}* 聪明。\n* 非-常聪明。",
               ">{#f/11}{#v/0}* 你是真觉得自己\n  很聪明，是吗？",
               ">{#f/7}{#v/0}* 嘻嘻嘻...",
               ">{#f/0}{#v/1}* 在这个世界上...\n  不是杀人就是被杀。"
            ],
      endtwinklyB2: [
         ">{#f/8}{#v/0}* 只要你再多杀几只怪物...",
         ">{#f/9}{#v/0}* 呵，现在把计划告诉你\n  还为时过早。",
         ">{#f/7}{#v/0}* 别忘了，$(name)...",
         ">{#f/5}{#v/0}* 我们俩久别重逢，强强联手\n  只是时间问题。",
         ">{#f/6}{#v/0}* 下次长点心，狠一点，\n  说不定...",
         ">{#f/5}{#v/0}* 你就能看到好戏了。",
         ">{#f/11}{#v/0}* 那么，回见..."
      ],
      endtwinklyB3: [
         ">{#f/8}{#v/0}* 只要你再多杀{@fill=#ff0}一只{@fill=#fff}怪物...",
         ">{#f/9}{#v/0}* 呵，现在把计划告诉你\n  还为时过早。",
         ">{#f/7}{#v/0}* 别忘了，$(name)...",
         ">{#f/5}{#v/0}* 我们俩久别重逢，强强联手\n  只是时间问题。",
         ">{#f/6}{#v/0}* 下次长点心，狠一点，\n  说不定...",
         ">{#f/5}{#v/0}* 你就能看到好戏了。",
         ">{#f/11}{#v/0}* 那么，回见..."
      ],
      endtwinklyBA: () => [
         SAVE.data.n.state_wastelands_napstablook === 5
            ? ">{#p/twinkly}{#f/6}{#v/0}* 所以，你最终谁也没杀掉。"
            : ">{#p/twinkly}{#f/6}{#v/0}* 所以你放过了\n  每一只你遇到的怪物。",
         ">{#f/5}{#v/0}* 我打赌你觉得很棒。",
         ">{#f/2}{#v/1}* 但如果你遇到了一个\n  连环杀人犯呢？",
         ">{#f/9}{#v/0}* 你除了死，还是死，\n  还是死。",
         ">{#f/5}{#v/0}* 最后，你会疲于尝试。",
         ">{#f/11}{#v/0}* 那时候你该怎么办呢，\n  嗯哼？",
         ">{#f/2}{#v/1}* 你会因为沮丧\n  而大开杀戒吗？",
         ">{#f/14}{#v/1}* 或者只是单纯地放弃呢？",
         ">{#f/11}{#v/0}* 嘻嘻嘻...",
         ">{#f/7}{#v/0}* 那一定会很好玩的。",
         ">{#f/9}{#v/0}* 我会好好看你的好戏的！"
      ],
      endtwinklyBB1: () => [
         SAVE.data.b.w_state_lateleave
            ? ">{#p/twinkly}{#f/6}{#v/0}* So you managed to stay out of a few measly people's way."
            : ">{#p/twinkly}{#f/6}{#v/0}* So you spared the life of a few measly people.",
         ">{#f/11}{#v/0}* But what about the others, huh?",
         ">{#f/7}{#v/0}* Froggit, Flutterlyte, Gelatini, Silente, Oculoux, Mushy...",
         ">{#f/6}{#v/0}* Don'tcha think any of them have families?",
         ">{#f/8}{#v/0}* Don'tcha think any of them have friends?",
         ">{#f/5}{#v/0}* Each one could've been someone else's Toriel.",
         ">{#f/5}{#v/0}* ...",
         ">{#f/7}{#v/0}* Selfish brat.",
         ">{#f/0}{#v/1}* Monsters are dead because of you."
      ],
      endtwinklyBB2: () => [
         SAVE.data.b.w_state_lateleave
            ? ">{#p/twinkly}{#f/6}{#v/0}* So you managed to stay out of one person's way."
            : ">{#p/twinkly}{#f/6}{#v/0}* So you spared the life of a single person.",
         ">{#f/11}{#v/0}* But what about everyone else, huh?",
         ">{#f/7}{#v/0}* Froggit, Flutterlyte, Gelatini, Silente, Oculoux, Mushy...",
         ">{#f/0}{#v/0}* They're all gone now.",
         ">{#f/11}{#v/0}* What's Toriel gonna do when she finds out, huh?",
         ">{#f/2}{#v/1}* What if she KILLS herself out of grief?",
         ">{#f/11}{#v/0}* If you think you're saving her just by SPARING her...",
         ">{#f/7}{#v/0}* Then you're even dumber than I thought.",
         ">{#f/9}* Well, see ya!"
      ],
      endtwinklyBB3: () => [
         SAVE.data.b.w_state_lateleave
            ? ">{#p/twinkly}{#f/6}{#v/0}* So you managed to stay out of almost everyone's way."
            : ">{#p/twinkly}{#f/6}{#v/0}* So you spared the life of almost everyone.",
         SAVE.data.b.w_state_lateleave
            ? ">{#p/twinkly}{#f/11}{#v/0}* But what about the one you DID get in the way of, huh?"
            : ">{#p/twinkly}{#f/11}{#v/0}* But what about the one you DIDN'T spare, huh?",
         ">{#f/7}{#v/0}* Froggit, Flutterlyte, Gelatini, Silente, Oculoux, Mushy...",
         ">{#f/6}{#v/0}* Don'tcha think any of them have families?",
         ">{#f/8}{#v/0}* Don'tcha think any of them have friends?",
         ">{#f/5}{#v/0}* The one you killed could've been someone else's Toriel.",
         ">{#f/5}{#v/0}* ...",
         ">{#f/7}{#v/0}* Selfish brat.",
         ">{#f/0}{#v/1}* Someone's dead because of you."
      ],
      endtwinklyBC: [
         ">{#p/twinkly}{#f/5}{#v/0}* I'm sure you're well aware of that, though...",
         ">{#f/6}{#v/0}* Considering you've already killed Toriel once before.",
         ">{#f/7}{#v/0}* Ain't that right, brat?",
         ">{#f/2}{#v/1}* You MURDERED her.",
         ">{#f/7}{#v/0}* And then, you felt bad...\n* Ain't that right?",
         ">{#f/7}{#v/0}* 嘻嘻嘻...",
         ">{#f/11}{#v/0}* Do you think you're the only one with that power?",
         ">{#f/6}{#v/0}* The power to reshape the universe, purely by your determination...",
         ">{#f/8}{#v/0}* The power to SAVE...",
         ">{#f/7}{#v/0}* That used to be MY power, you know.",
         ">{#f/6}{#v/0}* Seems YOUR desires for this world override MINE.",
         ">{#f/5}{#v/0}* Well then.\n* Enjoy that power while you can.",
         ">{#f/9}{#v/0}* 我会好好看你的好戏的！"
      ],
      endtwinklyC: [
         ">{#f/7}{#v/0}* After all, this used to be MY power.",
         ">{#f/6}{#v/0}* The power to reshape the universe, purely by your determination...",
         ">{#f/8}{#v/0}* The power to SAVE...",
         ">{#f/6}{#v/0}* I thought I was the only one who could do that.",
         ">{#f/6}{#v/0}* Seems YOUR desires for this world override MINE.",
         ">{#f/5}{#v/0}* Well then.\n* Enjoy that power while you can.",
         ">{#f/9}{#v/0}* 我会好好看你的好戏的！"
      ],
      endtwinklyD: [
         ">{#p/twinkly}{#f/11}{#v/0}* You're one hell of a tease, huh?",
         ">{#f/8}{#v/0}* Beating monsters to the brink of death, only to let them go...",
         ">{#f/7}{#v/0}* What will you do if a monster doesn't WANT your mercy?",
         ">{#f/6}{#v/0}* Will you snuff the light out of their eyes?",
         ">{#f/5}{#v/0}* Or will you realize your faulty \"pacifism\" is for nothing?",
         ">{#f/11}{#v/0}* 嘻嘻嘻...",
         ">{#f/7}{#v/0}* 那一定会很好玩的。",
         ">{#f/9}{#v/0}* 我会好好看你的好戏的！"
      ],
      endtwinklyE: [
         ">{#p/twinkly}{#f/7}{#v/0}* Wow, you're utterly repulsive.",
         ">{#f/11}{#v/0}* You got by peacefully...",
         ">{#f/5}{#v/0}* Then, you figured that wasn't good enough for you.",
         ">{#f/2}{#v/1}* So you KILLED her just to see what would happen.",
         ">{#f/7}{#v/0}* 嘻嘻嘻...",
         ">{#f/0}{#v/0}* You did it out of BOREDOM."
      ],
      endtwinklyEA: [">{#f/11}{#v/0}* Don't think I don't know how this works..."],
      endtwinklyEB: [">{#f/6}{#v/0}* It's sad, though..."],
      endtwinklyF: [">{#p/twinkly}{#f/11}{#v/0}* Look at you, playing with her life like this..."],
      endtwinklyFA: [">{#f/7}{#v/0}* Killing her, leaving her, killing her again..."],
      endtwinklyFB: [">{#f/7}{#v/0}* Leaving her, killing her, leaving her again..."],
      endtwinklyFXA: [
         ">{#f/11}{#v/0}* It's fun, isn't it?",
         ">{#f/6}{#v/0}* Endlessly toying with the lives of others...",
         ">{#f/8}{#v/0}* Watching how they react to every possible decision...",
         ">{#f/11}{#v/0}* Isn't it thrilling?",
         ">{#f/7}{#v/0}* 嘻嘻嘻...",
         ">{#f/9}{#v/0}* I wonder what you'll do next.",
         ">{#f/5}{#v/0}* I'll be watching..."
      ],
      endtwinklyG: [
         ">{#p/twinkly}{#f/10}{#v/0}* You just can't get enough, can you~",
         ">{#f/11}{#v/0}* How many more times will you KILL her, eh?",
         ">{#f/7}{#v/0}* 嘻嘻嘻...",
         ">{#f/0}{#v/1}* You kinda remind me of myself.",
         ">{#f/9}{#v/0}* Well, cya!"
      ],
      endtwinklyG1: [
         ">{#p/twinkly}{#f/6}{#v/0}* Again?\n* Golly...",
         ">{#f/0}{#v/1}* You REALLY remind me of myself."
      ],
      endtwinklyG2: [
         ">{#p/twinkly}{#f/6}{#v/0}* Again!?",
         ">{#f/8}{#v/0}* Wow, you're even worse than I thought."
      ],
      endtwinklyH: () => [
         SAVE.data.b.w_state_lateleave
            ? ">{#p/twinkly}{#f/5}{#v/0}* So you've finally gotten by peacefully, huh?"
            : ">{#p/twinkly}{#f/5}{#v/0}* So you've finally decided to show mercy, huh?",
         ">{#f/5}{#v/0}* And after all that KILLING...",
         ">{#f/11}{#v/0}* Say, was this your idea all along?",
         ">{#f/2}{#v/1}* To get a rush out of her death, then spare her once you got bored?",
         ">{#f/7}{#v/0}* 嘻嘻嘻...",
         ">{#f/11}{#v/0}* What a saint you must think you are.",
         ">{#f/5}{#v/0}* But hey, it's not as if I don't know how this works..."
      ],
      endtwinklyI: [
         ">{#p/twinkly}{#f/11}{#v/0}* Hee hee hee...",
         ">{#f/7}{#v/0}* I hope you like your choice.",
         ">{#f/9}{#v/0}* I mean, it's not as if you can go back and change fate.",
         ">{#f/0}{#v/1}* 在这个世界上...\n  不是杀人就是被杀。",
         ">{#f/5}{#v/0}* That old woman thought she could break the rules.",
         ">{#f/8}{#v/0}* She tried so hard to save you humans...",
         ">{#f/6}{#v/0}* But when it came down to it, she couldn't even save herself."
      ],
      endtwinklyIX: [
         ">{#p/twinkly}{#f/11}{#v/0}* Hee hee hee...",
         ">{#f/11}{#v/0}* So you finally caved in and killed someone, huh?",
         ">{#f/7}{#v/0}* Well, I hope you like your choice.",
         ">{#f/9}{#v/0}* I mean, it's not as if you can go back and change fate.",
         ">{#f/0}{#v/1}* 在这个世界上...\n  不是杀人就是被杀。",
         ">{#f/8}{#v/0}* ... what's wrong?\n* Did she not last as long as you thought?",
         ">{#f/6}{#v/0}* Oh, how terrible.\n* Guess not everyone can be beat into submission."
      ],
      endtwinklyIA: [">{#f/11}{#v/0}* What an idiot!"],
      endtwinklyIAX: [">{#f/7}{#v/0}* What a shame for her."],
      endtwinklyIB: [">{#f/6}{#v/0}* As for you..."],
      endtwinklyJ: [
         ">{#p/twinkly}{#f/6}{#v/0}* Wow.",
         ">{#f/7}{#v/0}* And here I thought you were the righteous one for showing mercy.",
         ">{#f/11}{#v/0}* Hah!\n* What a joke.",
         ">{#f/6}{#v/0}* ...",
         ">{#f/6}{#v/0}* How did it feel to finally satisfy your violent side?",
         ">{#f/7}{#v/0}* 嘻嘻嘻...",
         ">{#f/0}{#v/1}* I bet it felt GOOD, didn't it?",
         ">{#f/11}{#v/0}* I mean, I should know..."
      ],
      endtwinklyK: [
         ">{#p/twinkly}{#f/5}{#v/0}* 很高兴再次见到你。",
         ">{#f/6}{#v/0}* 顺便说一句，\n  你怕不是宇宙间\n  最无聊的人。",
         ">{#f/12}{#v/0}* 和平地过了一段时间之后，\n  还要回去再来一遍？",
         ">{#f/8}{#v/0}* 得了吧...",
         ">{#f/2}{#v/1}* 你和我都知道，\n  不是杀人就是被杀。"
      ],
      endtwinklyK1: [
         ">{#p/twinkly}{#f/6}* Aren't you getting tired of this?",
         ">{#f/8}{#v/0}* 得了吧...",
         ">{#f/2}{#v/1}* You KNOW deep down that part of you wants to hurt her.",
         ">{#f/14}{#v/1}* A few good hits, and she'd be dead before your very eyes.",
         ">{#f/11}{#v/0}* Wouldn't that be exciting?",
         ">{#f/6}{#v/0}* ...",
         ">{#f/8}{#v/0}* ...",
         ">{#f/7}{#v/0}* See ya, idiot."
      ],
      endtwinklyK2: [
         ">{#p/twinkly}{#f/8}{#v/0}* Are you doing this just to see how I react?",
         ">{#f/6}{#v/0}* Is that what this is about?",
         ">{#f/7}{#v/0}* Well, don't expect to get anything else outta me.",
         ">{#f/6}{#v/0}* All this boring pacifism is getting tiresome.",
         ">{#f/11}{#v/0}* Now, if something more interesting were to happen...",
         ">{#f/9}{#v/0}* Perhaps I'd be more inclined to talk.",
         ">{#f/6}{#v/0}* ...",
         ">{#f/8}{#v/0}* ...",
         ">{#f/7}{#v/0}* See ya, idiot."
      ],
      endtwinklyKA: [
         ">{#f/7}{#v/0}* 你迟早会不得不\n  意识到这一点的。",
         ">{#f/11}{#v/0}* 等到那时候... \n  又会发生什么呢？",
         ">{#f/5}{#v/0}* 喏，我真的很期待\n  看到那一刻呢。",
         ">{#f/11}{#v/0}* 嘻嘻嘻...",
         ">{#f/9}{#v/0}* 祝你好运！"
      ],
      endtwinklyKB: [
         ">{#f/11}{#v/0}* 嘻嘻嘻...",
         ">{#f/7}{#v/0}* Maybe that's why you killed that one monster.",
         ">{#f/8}{#v/0}* I mean, you went almost the whole way without killing anyone...",
         ">{#f/6}{#v/0}* But somewhere along the line, you screwed up.",
         ">{#f/5}{#v/0}* All that good karma you had went straight down the toilet.",
         ">{#f/11}{#v/0}* Golly, you can't do anything right!",
         ">{#f/11}{#v/0}* What a joke!"
      ],
      endtwinklyKC: [
         ">{#f/11}{#v/0}* 嘻嘻嘻...",
         ">{#f/7}{#v/0}* Maybe that's why you killed those other monsters.",
         ">{#f/8}{#v/0}* I mean, you had a good run, but...",
         ">{#f/6}{#v/0}* What's the point in mercy if it doesn't mean anything?",
         ">{#f/7}{#v/0}* And believe me, after you did what you did...",
         ">{#f/2}{#v/1}* It doesn't mean JACK.",
         ">{#f/6}{#v/0}* ...",
         ">{#f/8}{#v/0}* ...",
         ">{#f/7}{#v/0}* See ya, idiot."
      ],
      endtwinklyKD: [
         ">{#f/11}{#v/0}* What's wrong with killing Toriel, huh?\n* Too good for that?",
         ">{#f/7}{#v/0}* 嘻嘻嘻...",
         ">{#f/2}{#v/1}* I know you're still rotten to the core.",
         ">{#f/11}{#v/0}* I mean, you managed to take out everyone in your path...",
         ">{#f/6}{#v/0}* But when it came to the final hurdle, you failed.",
         ">{#f/11}{#v/0}* Golly, you can't do anything right!",
         ">{#f/11}{#v/0}* What a joke!"
      ],
      endtwinklyL: [
         ">{#p/twinkly}{#f/6}{#v/0}* Back again, huh?\n* Golly...",
         ">{#f/8}{#v/0}* You've changed the timeline around so much...",
         ">{#f/6}{#v/0}* I don't even know what to think now.",
         ">{#f/8}{#v/0}* Are you good?\n* Evil?\n* Just curious?",
         ">{#f/6}{#v/0}* I dunno.",
         ">{#f/5}{#v/0}* There is one thing, though...",
         ">{#f/5}{#v/0}* One thing I KNOW you haven't done yet.",
         ">{#f/11}{#v/0}* 嘻嘻嘻...",
         ">{#f/7}{#v/0}* That's right.",
         ">{#f/7}{#v/0}* You haven't killed everyone here in one run yet.",
         ">{#f/11}{#v/0}* Aren't you at least a LITTLE curious?",
         ">{#f/8}{#v/0}* Come on, $(name)...",
         ">{#f/5}{#v/0}* I know you're in there somewhere."
      ],
      endtwinklyL1: [
         ">{#p/twinkly}{#f/6}{#v/0}* Well well, we meet again.",
         ">{#f/8}{#v/0}* How many times is this now?",
         ">{#f/6}{#v/0}* Whatever.\n* Doesn't matter.",
         ">{#f/6}{#v/0}* You KNOW what you have to do, $(name).",
         ">{#f/8}{#v/0}* ...",
         ">{#f/5}{#v/0}* I'll be waiting."
      ],
      exit1: [
         ">{#p/toriel}{#f/13}* 你想要回“家”，\n  对吗？",
         ">{#f/9}* ...",
         ">{#f/9}* 如果你离开这里，\n  我就没办法保护你了。",
         ">{#f/9}* 我就没办法\n  在你直面危险的时候\n  拯救你了。",
         ">{#f/13}* 所以，拜托了，孩子...",
         ">{#f/9}* 回去吧。"
      ],
      exit2: [
         ">{#p/toriel}{#f/13}* 每个来到这里的人类\n  最终的命运都一模一样。",
         ">{#f/9}* 我已经见证了一次又一次。",
         ">{#f/13}* 他们到来。",
         ">{#f/13}* 他们离开。",
         ">{#f/9}* ...他们死去。",
         ">{#f/13}* 我的孩子...",
         ">{#f/13}* 如果你离开外域...",
         ">{#f/9}* 那个人...\n* {@fill=#f00}艾斯戈尔{@fill=#fff}...\n* 会取走你的灵魂。"
      ],
      exit3: [
         ">{#p/toriel}{#f/9}* ...",
         ">{#f/13}* 我虽然不想这么说，但...",
         ">{#f/11}* 我不能允许你继续往前走。",
         ">{#f/9}* 这都是为了你好，孩子...",
         ">{#f/9}* 不要跟着我进下一个房间。"
      ],
      exit4: [
         ">{#p/toriel}{#p/toriel}{#f/13}* ...",
         ">{#f/10}* ...果然。",
         ">{#f/9}* 也许事情总是注定\n  要走到这一步。",
         ">{#f/9}* 也许我就是愚蠢到\n  觉得你和他们不一样。",
         ">{#f/9}* ...",
         ">{#f/13}* 恐怕现在我没什么\n  选择的余地了。",
         ">{#f/13}* 请原谅我，我的孩子...",
         ">{#f/11}* 我不能让你离开。"
      ],
      exitfail1: (lateleave: boolean, sleep: boolean) =>
         world.postnoot
            ? [
               [
                  sleep
                     ? ">{#p/twinkly}{#f/19}* After you sleep at Mommy's house, she goes out for groceries."
                     : ">{#p/twinkly}{#f/19}* After you run back to Mommy's house, she goes out for groceries.",
                  ">{#x1}* But... oh no!\n* The taxi she was in exploded, killing her instantly!",
                  ">* Golly, I wonder how such an awful thing could have happened.",
                  ">{*}{#x2}* ...",
                  ">{*}{#f/7}* Sorry, $(name).\n* Guess your happy ending won't be so easy."
               ],
               [
                  sleep
                     ? ">{#p/twinkly}{#f/19}* After you sleep at Mommy's house, she goes out for groceries."
                     : ">{#p/twinkly}{#f/19}* After you run back to Mommy's house, she goes out for groceries.",
                  ">{#x1}* But... oh no!\n* A talking star appears and tortures her to death!",
                  ">* Golly, that's an even worse outcome than last time!",
                  ">{*}{#x2}* ...",
                  ">{*}{#f/6}* We don't have time for this, $(name).\n* Get back on track."
               ],
               [
                  ">{*}{#p/twinkly}{#f/5}* Come on, $(name)...",
                  sleep
                     ? ">{*}{#f/7}* Do you really think I'm gonna let you avoid me THAT easily?"
                     : ">{*}{#f/7}* Do you really think I'm gonna let you run away from me THAT easily?"
               ],
               [">{*}{#p/twinkly}{#f/6}* We can do this all day."],
               [">{*}{#p/twinkly}{#f/8}* ..."]
            ][Math.min(SAVE.flag.n.postnoot_exitfail++, 4)]
            : [
               sleep
                  ? ">{#p/basic}* 当你在托丽尔的家里睡下后，\n  她随即摧毁了离开外域\n  唯一的出口。"
                  : ">{#p/basic}* 在你回到托丽尔家后，\n  她随即摧毁了离开外域\n  唯一的出口。",
               ...(outlandsKills() > 10
                  ? [
                     ">* 日子一天天过去，\n  她很快就发现\n  许多怪物都是因你而死。",
                     ">* 她彻底陷入了绝望。\n  万念俱灰，最后...",
                     ">* ...",
                     ">* ...与-与此同时，\n  前哨站的其他居民苦苦等待着\n  下一个人类去解救他们。"
                  ]
                  : outlandsKills() > 5 || SAVE.data.n.bully_wastelands > 5
                     ? [
                        ">* 日子一天天过去，\n  托丽尔尽己所能关心你，照顾你。",
                        ">* 带你读书，给你做派...",
                        ">* 每晚睡前，帮你盖好被子...",
                        ...(lateleave
                           ? [">* ...然而，她心底里仍担心\n  你会再度逃跑。"]
                           : [">* ...尽力不去想那些\n  失踪的怪物。"]),
                        ">* 与此同时，\n  前哨站的其他居民苦苦等待着\n  下一个人类去解救他们。"
                     ]
                     : [
                        ">* 日子一天天过去，\n  托丽尔尽己所能关心你，照顾你。",
                        ">* 带你读书，给你做派...",
                        ">* 每晚睡前，帮你盖好被子...",
                        ...(lateleave
                           ? [">* 她总是紧紧抱住你，\n  仿佛这么做你就不会再度逃跑。"]
                           : [">* 只要你想拥抱，\n  她都会无条件给你。"]),
                        ">* 与此同时，\n  前哨站的其他居民苦苦等待着\n  下一个人类去解救他们。"
                     ]),
               ">* ...然而，这个人类\n  永远都不会到来了。",
               ">* 这是你希望的结果吗？",
               ">* 前哨站的怪物，\n  活该接受这样的命运吗？"
            ],
      food: () => [
         ...(SAVE.data.n.state_wastelands_mash === 2
            ? [
               ">{#p/toriel}{#f/1}* 抱歉让你久等了...",
               ">{#f/3}* 估计那只小白狗\n  又洗劫我的厨房了。",
               ">{#f/4}* 你应该也看到好好的派\n  现在被糟蹋成什么样了...",
               ">{#f/0}* 不说这个了。\n* 我给你做好了一盘焗蜗牛。"
            ]
            : [">{#p/toriel}* 早餐做好啦！", ">* 我给你做了一盘焗蜗牛。"]),
         ">{#f/1}* 我把吃的放在桌上吧..."
      ],
      fridgetrap: {
         a: () =>
            SAVE.data.b.svr
               ? []
               : world.darker
                  ? [">{#p/basic}* 你对冰箱里的东西不感兴趣。"]
                  : [">{#p/basic}* 冰箱里有一条名牌巧克力棒。"],
         b: () => [
            ...(SAVE.data.b.svr ? [] : [">{#p/basic}* ...", ">* 你想尝尝吗？"]),
            choicer.create("* （拿走它吗？）", "是", "否")
         ],
         b1: [">{#p/human}* （你决定什么也不拿。）"],
         b2: () => [
            ">{#p/human}* （你得到了巧克力棒。）",
            ...(SAVE.data.b.svr ? [">{#p/asriel1}{#f/17}* 啊... 是巧克力。", ">{#p/asriel1}{#f/13}* ..."] : [])
         ],
         c: () =>
            SAVE.data.b.svr
               ? [
                  ">{#p/human}* （但里面什么都没有。）",
                  ...[
                     [
                        ">{#p/asriel1}{#f/23}* Oh... $(name) ALWAYS used to root around in the fridge.",
                        ">{#f/13}* They thought, if they dug deep enough...",
                        ">{#f/13}* Another bar of chocolate would reveal itself inside.",
                        ">{#f/17}* ... how silly."
                     ],
                     [">{#p/asriel1}{#f/20}* That was before the chocolate replicator was installed."]
                  ][Math.min(asrielinter.fridgetrap_c++, 1)]
               ]
               : [">{#p/basic}* 巧克力棒已经被拿走了。"],
         d: [">{#p/human}* （你带的东西太多了。）"]
      },
      front1: [
         ">{#p/toriel}{#f/1}* ...你想演奏一首\n  自己的曲子？",
         ">{#f/0}* 好的，我看看能帮上什么忙。"
      ],
      front1x: [">{#p/toriel}{#f/1}* ...喂？"],
      front2: () => [
         ...(world.postnoot
            ? [
               ">{#p/toriel}{#f/2}* 这么早就起来了！？",
               ">{#f/1}* You were not asleep for very long...",
               ">{#f/5}* ...",
               world.nootflags.has('toriel') // NO-TRANSLATE

                  ? ">{#f/1}* 供气系统应该还没修好。"
                  : ">{#f/1}* 供气系统好像坏掉了。",
               ">{#f/1}* 要是觉得困，就再睡一会吧。",
               ">{#f/0}* ...顺便一提..."
            ]
            : [
               ">{#p/toriel}{#f/2}* 你站在这里多久了！？",
               ">{#f/5}* ...",
               ">{#f/0}* 没事，顺带一提..."
            ]),
         ">{#f/0}* 一位叫纳普斯特的客人\n  想在这里演奏自己的音乐。",
         ">{#f/0}* 而且，它特别邀请你\n  一起上台演出！",
         ">{#f/1}* 你想去活动室见见它吗？",
         ...(SAVE.data.n.state_wastelands_mash === 1
            ? [
               ">{#f/3}* 对了，不好意思\n  派变成了那副样子。",
               ">{#f/4}* 估计是那只小白狗\n  又去洗劫我的厨房了..."
            ]
            : 3 <= SAVE.data.n.cell_insult
               ? [
                  ">{#f/5}* 对了，不好意思\n  把派做成了那副样子。",
                  ">{#f/9}* 我已经尽力去抢救了..."
               ]
               : []),
         choicer.create("* （参加纳普斯特的演出吗？）", "是", "否")
      ],
      front2a: [">{#p/toriel}{#f/0}* 太好了！\n* 我会转告给它的。"],
      front2b: [">{#p/toriel}{#f/5}* ...", ">{#p/toriel}{#f/5}* 需要我的话，\n  随时可以到客厅找我。"],
      front3: () => [
         ...(world.postnoot
            ? [
               ">{#p/toriel}{#f/0}* 哦，早安，小家伙。\n* 你起的真早。",
               ">{#f/1}* 确定睡足了吗？",
               ">{#f/5}* ...",
               world.nootflags.has('toriel') // NO-TRANSLATE

                  ? ">{#f/1}* 供气系统应该还没修好。"
                  : ">{#f/1}* 供气系统好像坏掉了。",
               ">{#f/1}* 要是觉得困，就再睡一会吧。",
               ">{#f/0}* ...顺便一提..."
            ]
            : [">{#p/toriel}* 早上好，小家伙。"]),
         ...(SAVE.data.n.state_wastelands_mash === 1
            ? [
               ">{#f/3}* 估计那只小白狗\n  又洗劫我的厨房了。",
               ">{#f/4}* 你应该也看到好好的派\n  现在被糟蹋成什么样了...",
               ">{#f/0}* 不过，为了你能吃上派\n  我还是尽力抢救了一下。"
            ]
            : [">{#f/1}* 今天的星星看起来格外美丽，\n  不是吗？"]),
         ">{#f/5}* ...",
         ">{#f/5}* 需要我的话，\n  随时可以到客厅找我。"
      ],
      front4: () => [
         ...(world.postnoot
            ? [
               ">{#p/toriel}{#f/0}* 哦，早安，小家伙。\n* 你起的真早。",
               ">{#f/1}* 确定睡足了吗？",
               ">{#f/5}* ...",
               world.nootflags.has('toriel') // NO-TRANSLATE

                  ? ">{#f/1}* 供气系统应该还没修好。"
                  : ">{#f/1}* 供气系统好像坏掉了。",
               ">{#f/1}* 要是觉得困，就再睡一会吧。"
            ]
            : [">{#p/toriel}* 早上好，小家伙。"]),
         ">{#f/5}* ...",
         ...(world.bullied
            ? [
               ">* The Outlands have been unusually noisy today.",
               ">* 听说有个恶霸四处游荡，\n  惹是生非。",
               ">* 最好别离家太远。"
            ]
            : [
               ">* 今天外域格外安静呢。",
               ">* 我刚才给一个人\n  打了个电话，但是...",
               ">* 只有一片死寂。"
            ]),
         ...(SAVE.data.n.state_wastelands_mash === 1
            ? [
               world.bullied
                  ? ">{#f/3}* 而且，那只小白狗\n  又洗劫了我的厨房。"
                  : ">{#f/3}* 以及洗劫我厨房的小白狗。",
               ">{#f/4}* 你应该也看到好好的派\n  现在被糟蹋成什么样了...",
               ">{#f/0}* 不过，为了你能吃上派\n  我还是尽力抢救了一下。",
               ">{#f/1}* 希望你能喜欢它..."
            ]
            : world.bullied || (16 <= outlandsKills() && SAVE.flag.n.genocide_twinkly < resetThreshold())
               ? []
               : [">{#f/1}* 真令人担心..."]),
         ">{#f/0}* 顺便一提，如果需要我的话，\n  随时可以到客厅找我。"
      ],
      goodbye1a: [">{#p/toriel}{#f/10}* ...", ">{#f/20}{|}* 过来- {%}"],
      goodbye1b: [">{#p/toriel}{#f/9}* ...", ">{#f/19}{|}* 过来- {%}"],
      goodbye2: [
         ">{#p/toriel}{#f/5}* 我很抱歉让你遭这些罪，\n  孩子。",
         ">{#f/9}* 我早就该明白我没办法\n  一直把你留在这里。",
         ">{#f/5}* ...不过，\n  如果你想找人聊天的话...",
         ">{#f/1}* 欢迎你随时打电话给我。",
         ">{#f/0}* 只要电话信号能覆盖到，\n  我肯定会接的。"
      ],
      goodbye3: [
         ">{#p/toriel}{#f/5}* 我很抱歉让你遭这些罪，\n  孩子。",
         ">{#f/9}* 我早就该明白我没办法\n  一直把你留在这里。",
         ">{#f/10}* ...",
         ">{#f/14}* 要乖啊，好吗？"
      ],
      goodbye4: [">{#p/toriel}{#f/1}* 要乖啊，好吗？"],
      goodbye5a: [
         ">{#p/toriel}{#f/5}* ...嗯？\n* 你改变主意了吗？",
         ">{#f/9}* ...",
         ">{#f/10}* 看来你这孩子真挺奇怪的。",
         ">{#f/0}* ...罢了。",
         ">{#f/0}* 我把这里的事处理完，\n  然后回房间见你。",
         ">{#f/0}* 谢谢你愿意听话，孩子。",
         ">{#f/0}* 这下好办多了。"
      ],
      goodbye5b: [
         ">{#p/toriel}{#f/5}* ...嗯？\n* 你改变主意了吗？",
         ">{#f/10}* ...\n* 对不起，孩子。",
         ">{#f/9}* 我可能一时情绪失控了。",
         ">{#f/0}* ...别担心我。",
         ">{#f/0}* 我把这里的事处理完，\n  然后回房间见你。",
         ">{#f/0}* 谢谢你愿意听话，孩子。",
         ">{#f/0}* 这下好办多了。"
      ],
      halo: {
         a: () => [">{#p/human}* （你捡起了光环。）", choicer.create("* （戴上光环吗？）", "是", "否")],
         b: [">{#p/human}* （你带的东西太多，装不下它了。）"]
      },
      indie1: () => [
         ...([1, 5].includes(SAVE.data.n.state_wastelands_dummy) && SAVE.data.b.w_state_riddleskip
            ? [
               ">{#p/toriel}{#f/5}* 之前的教学都不太顺利...",
               ">{#f/5}* 希望这次能有所改善。"
            ]
            : [">{#p/toriel}* 好。\n* 现在教你第三项，\n  也是最后一项本领。"]),
         ">{#f/1}* 有信心只靠自己...",
         ">{#f/1}* 走到房间的尽头吗？",
         choicer.create("* （你要怎么回答？）", "有信心", "我不敢")
      ],
      indie1a: () => [
         ">{#p/toriel}{#f/1}* 你确定吗...？",
         ">{#f/0}* 这段路其实并不长...",
         choicer.create("* （改变主意吗？）", "是", "否")
      ],
      indie1b: () => [
         ">{#p/toriel}{#f/5}* 我的孩子。",
         ">{#f/1}* 学会独立是非常非常重要的，\n  对吧？",
         choicer.create("* （改变主意吗？）", "是", "否")
      ],
      indie2a: [">{#p/toriel}{#f/1}* 好的...", ">{#f/0}* 祝你好运！"],
      indie2b: [">{#p/toriel}{#f/5}* ...", ">{#f/9}* ...明白了。"],
      indie2b1: [
         ">{#p/toriel}{#f/10}* 别害怕，孩子。",
         ">{#f/1}* 如果你真的不想\n  离开我的身边，那么...",
         ">{#f/0}* 我会陪你穿过\n  外域的其他地方的。",
         ">{#f/5}* ...",
         ">{#f/5}* 孩子，握住我的手...",
         ">{#f/5}* 我们一起回家。"
      ],
      indie2f: [">{#p/human}{#s/equip}* （你得到了一部手机。）"],
      indie3a: [">{#p/toriel}* 你做到了！"],
      indie3b: [
         ">{#p/toriel}{#f/3}* 我的乖乖，你怎么\n  花了这么长时间才到！？",
         ">{#f/4}* 是迷路了吗？",
         ">{#f/1}* ...\n* 应该没事..."
      ],
      indie4: () => [
         ...([1, 5].includes(SAVE.data.n.state_wastelands_dummy) && SAVE.data.b.w_state_riddleskip
            ? [
               ">{#f/0}* 说实话，你能自己走到这里\n  我都挺意外的。",
               ">{#f/3}* 之前表现成那样，\n  我都怀疑...",
               ">{#f/4}* ...你一直在故意整我，\n  是不是？",
               ">{#f/23}* 告诉你，\n  我现在可没空跟你胡闹。"
            ]
            : [
               ">{#p/toriel}{#f/0}* 别担心，孩子。\n  这只是个给你准备的\n  独立性测试！",
               ">{#f/0}* 一路上并没有什么危险。",
               ">{#f/1}* 其实呢..."
            ]),
         ">{#f/5}* 我要去忙一些重要的事了。",
         ">{#f/0}* 在我不在时，\n  希望你能好好表现。",
         ">{#f/1}* 前面有些谜题，\n  还没来得及给你解释。\n* 而且...",
         ">{#f/0}* 如果你擅自离开房间的话，\n  可能会遇到危险。",
         ">{#f/10}* 来，这个手机给你。",
         ">{#p/human}{#s/equip}* （你得到了一部手机。）",
         ...([1, 5].includes(SAVE.data.n.state_wastelands_dummy) && SAVE.data.b.w_state_riddleskip
            ? [
               ">{#p/toriel}{#f/1}* 我不在的时候...",
               ">{#f/0}* 如果遇到任何事情...\n  就给我打电话。",
               ">{#f/5}* ...",
               ">{#f/23}* 还有，别惹麻烦。"
            ]
            : [
               ">{#p/toriel}{#f/1}* 我不在的时候...",
               ">{#f/0}* 如果遇到任何事情...\n  就给我打电话。",
               ">{#f/5}* ...",
               ">{#f/1}* 乖乖的，好吗？"
            ])
      ],
      indie5: [
         [
            ">{#s/phone}{#p/event}* 铃铃，铃铃...",
            ">{#p/toriel}* 嗨！\n* 我是托丽尔。",
            ">* My errands are taking longer than I thought they would.",
            ">* You must wait a little longer.",
            ">{#f/1}* Thank you for being patient, my child...",
            ">{#f/0}* You are very good."
         ],
         [
            ">{#s/phone}{#p/event}* 铃铃，铃铃...",
            ">{#p/toriel}* 嗨...\n* 我是托丽尔。",
            ">{#f/1}* I found what I was looking for...",
            ">{#f/0}* But a small, white puppy snatched it away!\n* How odd.",
            ">{#f/1}* Do dogs even like flour?",
            ">{#f/0}* Err, that is an unrelated question, of course.",
            ">* It will take a little longer for me to return.",
            ">{#f/1}* Thank you again for being so patient..."
         ],
         [
            ">{#s/phone}{#p/event}* 铃铃，铃铃...",
            ">{#p/basic}* (...)",
            ">{#p/human}* (You hear heavy panting on the other end of the phone.)",
            ">{#s/bark}{#p/event}* Bark!\n{#s/bark}* Bark!",
            ">{#p/human}* (You hear a distant voice.)",
            ">{#p/toriel}{#f/2}* Stop, please!",
            ">{#s/bark}{#p/event}* Bark!\n{#s/bark}* Bark!",
            ">{#p/toriel}{#f/1}* Come back here with my cell phone!"
         ],
         [
            ">{#s/phone}{#p/event}* 铃铃，铃铃...",
            ">{#p/basic}* (...)",
            ">{#p/human}* (It sounds like a small, white dog is sleeping on the phone.)",
            ">{#p/basic}* (Snore... snore...)",
            ">{#p/human}* (You hear a distant voice.)",
            ">{#p/toriel}{#f/1}* Hellooo?\n* Little puppy...?",
            ">{#f/1}* Where are youuu?",
            ">{#f/0}* I will give you a nice pat on the head!",
            ">{#p/human}* (The snoring stops.)",
            ">{#p/toriel}* ... if you return with my cell phone.",
            ">{#p/human}* (The snoring resumes.)"
         ],
         [
            ">{#s/phone}{#p/event}* 铃铃，铃铃...",
            ">{#p/basic}* (...)",
            ">{#p/basic}* (Achoo!)",
            ">{#p/human}* (It sounds like a small, white dog sneezing in its sleep.)",
            ">* (You hear a distant voice.)",
            ">{#p/toriel}{#f/1}* Aha!\n* I heard that, you little white dog...",
            ">{#f/6}* Now I am going to find you!",
            ">{#p/human}* (The snoring stops.)\n* (The dog now seems to be on the run from something.)",
            ">{#p/toriel}{#f/8}* Hee hee, there is no escape!"
         ],
         [
            ">{#s/phone}{#p/event}* 铃铃，铃铃...",
            ">{#p/human}* (You hear a distant voice.)",
            ">{#p/toriel}{#f/1}* 嗨...\n* 我是... 托丽尔...",
            ">{#s/bark}{#p/event}* 汪！\n* 汪！",
            ">{#p/toriel}{#f/2}* No, bad puppy!",
            ">{#p/basic}* (Whimper... whimper...)",
            ">{#p/toriel}* There, there...\n* I will find another cell phone for you.",
            ">{#f/1}* Would that be alright?",
            ">{#p/basic}* (...)",
            ">{#s/bark}{#p/event}* 汪！",
            ">{#p/toriel}* Glad to hear it.",
            ">{#p/human}* (The dog could be heard walking away.)",
            ">{#p/toriel}* Please, forgive me for all of this nonsense.",
            ">{#f/1}* I will be back to pick you up shortly..."
         ]
      ],
      indie6: (early: boolean) => [
         ">{#s/phone}{#p/event}* 铃铃，铃铃...",
         ...([1, 5].includes(SAVE.data.n.state_wastelands_dummy) && SAVE.data.b.w_state_riddleskip
            ? [
               early
                  ? ">{#p/toriel}{#g/torielTired}* ...出来了？"
                  : ">{#p/toriel}{#g/torielTired}* ...待得不耐烦了吗？",
               ">{#f/9}* 没事，我已经猜到了。",
               ">{#f/5}* 只是，提醒你一下，\n  外面有很多危险等着你...",
               ">{#f/1}* 保护好自己，别受伤了。"
            ]
            : [
               ">{#p/toriel}* 喂？\n* 我是托丽尔。",
               ">{#f/1}* 你没离开房间吧？",
               ">{#f/0}* 外面非常危险，\n  受伤了可就不好了。",
               ">{#f/1}* 乖乖的，好吗？"
            ])
      ],
      indie7: [">{#p/basic}* A few minutes later..."],
      indie8: [
         ">{#p/toriel}* I have returned!",
         ">* Your patience thus far has been commendable.\n* Even I am impressed!",
         ">{#f/0}* Anyhoo.\n* It is time I took you home now.",
         ">{#f/1}* Please, allow me..."
      ],
      lobby_puzzle1: [
         ">{#p/toriel}{#f/0}* 欢迎来到我们简陋的前哨站，\n  单纯的孩子。",
         ">{#f/0}* 我必须教给你一些本领。\n* 学会这些，\n  你才能在这里生存下去。",
         ">{#f/1}* 第一样要学的...",
         ">{#f/0}* 当然是谜题了！",
         ">{#f/0}* 我来给你快速演示一下。"
      ],
      lobby_puzzle2: [
         ">{#p/toriel}{#f/1}* 现在，你可能还觉得很奇怪。\n* 不过...",
         ">{#f/0}* 在前哨站，\n  解谜就是我们的家常便饭。",
         ">{#f/0}* 只要有人指导，时间久了，\n  解起谜来就能轻车熟路。"
      ],
      lobby_puzzle3: [">{#p/toriel}* 等你准备好，\n  我们就可以继续前进了。"],
      loox: {
         a: [
            ">{#p/basic}{#n1}* 我听说，\n  作为人类的你很喜欢调情。",
            ">* 每当你对各式各样的怪物{@fill=#cf7fff}调情{@fill=#fff}时，\n  他们名字的右上角会出现一颗心。",
            ">* 你{@fill=#cf7fff}调情{@fill=#fff}的怪物种类越多，\n  你获得的心也就越多。",
            ">* 我寻思着...",
            ">* 你能在这条道上走多远呢？",
            ">* 也许，我的朋友，\n  你会成为一个... 传奇。"
         ],
         b: [
            ">{#p/basic}{#n1}* 嘿，人类！\n  你有尝试过调情吗？",
            ">* 哈！\n* 一看你的表情我就知道\n  你肯定没试过。",
            ">* 我得跟你说，\n  调情超级好玩的。",
            ">* 这样会让你的敌人\n  不知道怎么办才好！",
            ">* 那个那个...\n  如果你真的试过调情了，\n  我会告诉你更多事情哦。",
            ">* 祝你好运！"
         ],
         c: [
            ">{#p/basic}{#n1}* 嘿人类，\n  现在你已经开始调情了...",
            ">* 感觉如何？",
            ">* 非常好，对吧？",
            ">* 每当你对各式各样的怪物{@fill=#cf7fff}调情{@fill=#fff}时，\n  他们名字的右上角会出现一颗心。",
            ">* 你{@fill=#cf7fff}调情{@fill=#fff}的怪物种类越多，\n  你获得的心也就越多。",
            ">* 我寻思着...",
            ">* 你能在这条道上走多远呢？",
            ">* 也许，我的朋友，\n  你会成为一个... 传奇。"
         ],
         d: [
            ">{#p/basic}{#n1}* 我听说你在这一带\n  有点霸道。",
            ">* 哈！\n* 加入我们吧，伙计。",
            ">* 你在跟这片的头号恶霸说话呢。",
            ">* As you {@fill=#3f00ff}BULLY{@fill=#fff} different kinds of monsters, you'll see swords next to their names.",
            ">* 你{@fill=#3f00ff}欺负{@fill=#fff}的怪物的种类越多，\n  剑也会越来越多。",
            ">* Though, as a disclaimer, not ALL monsters can be bullied.",
            ">* 这就像调情...\n  不过是玩命的那种。",
            ">* 挺有意思，是吧？"
         ],
         e: pager.create(
            0,
            () => [
               ...(30 <= SAVE.data.n.bully
                  ? [
                     ">{#p/basic}{#n1}* 我听说你现在是这一带的恶霸。",
                     ">* 大家都很怕你，嗯？"
                  ]
                  : 20 <= world.flirt
                     ? [
                        ">{#p/basic}{#n1}* 我听说你现在\n  是这里最浪漫的人。",
                        ">* 大家都很爱你，嗯？"
                     ]
                     : [
                        ">{#p/basic}{#n1}* 我听说你现在是这一带的大英雄。",
                        ">* 大家都很喜欢你，嗯？"
                     ]),
               ">* 嗯... 仅我个人观点，\n  我觉得你的空闲时间太多了。"
            ],
            [">{#p/basic}{#n1}* 怎么？\n* 我说错了吗？"]
         )
      },
      manana: {
         a: pager.create(
            0,
            () =>
               SAVE.data.b.napsta_performance
                  ? [
                     ">{#p/basic}{#n1}* So, you're the one who co-hosted that music show, eh?",
                     ">* 也许现在你有办法接受我的提议了。",
                     ">* 我只是想让人买我这本\n  限量版《超级星之行者》漫画。",
                     ">* 不过，我挺喜欢你那场表演的。\n  给你打个折吧。\n* 5G，买还是不买？",
                     choicer.create("{#n1!}* （花5G买下这本\n  《超级星之行者1》漫画吗？）", "是", "否")
                  ]
                  : [
                     ...(world.postnoot
                        ? [
                           ">{#p/basic}{#n1}* Hey, have you noticed anything strange goin' on around here?",
                           ">* I could'a sworn all the puzzles just de-activated themselves earlier.",
                           ">* Anyway, I'm lookin' for a buyer on this limited edition Super Starwalker comic strip."
                        ]
                        : [
                           ">{#p/basic}{#n1}* 终于有人跟我说话了！",
                           ">* 我在这里站了好久，\n  都没人接受我的提议。",
                           ">* 我只是想让人买我这本\n  限量版《超级星之行者》漫画。"
                        ]),
                     ">* 感兴趣吗？\n* 我只收10G。",
                     choicer.create("{#n1!}* （花10G买下这本\n  《超级星之行者1》漫画吗？）", "是", "否")
                  ],
            () =>
               SAVE.data.b.napsta_performance
                  ? [
                     ">{#p/basic}{#n1}* 有兴趣买我的\n  限量版《超级星之行者》漫画吗？",
                     ">* 我只收5G。",
                     choicer.create("{#n1!}* （花5G买下这本\n  《超级星之行者1》漫画吗？）", "是", "否")
                  ]
                  : [
                     ">{#p/basic}{#n1}* 有兴趣买我的\n  限量版《超级星之行者》漫画吗？",
                     ">* 我只收10G。",
                     choicer.create("{#n1!}* （花10G买下这本\n  《超级星之行者1》漫画吗？）", "是", "否")
                  ]
         ),
         b: () => [
            ">{#p/human}{#n1!}* （你的钱不够。）",
            SAVE.data.b.napsta_performance
               ? ">{#p/basic}{#n1}* 我就直说了，\n  你那点钱可不够5G..."
               : ">{#p/basic}{#n1}* 我就直说了，\n  你那点钱可不够10G..."
         ],
         c: [">{#p/basic}{#n1}* 不感兴趣，对吗？", ">* 那好吧。\n* 我再找找其他人..."],
         d: [
            ">{#s/equip}{#p/human}{#n1!}* （你获得了《超级星之行者1》。）",
            ">{#p/basic}{#n1}* 太好了！\n* 尽情欣赏吧。"
         ],
         e: [">{#p/basic}{#n1}* 又回来了，嗯？", ">* 不好意思哈，\n  我没什么别的东西可卖了。"],
         f: [
            ">{#p/human}{#n1!}* （你带的东西太多了。）",
            ">{#p/basic}{#n1}* Them pockets of yours are lookin' kinda full..."
         ],
         g: [
            ">{#p/basic}{#n1}* I heard they're rebooting the comic franchise...",
            ">* The new main character is some snake fella with sunglasses or something.",
            ">* If I was in charge, I'd make a spinoff about that sidekick...",
            ">* Gumbert, I think?"
         ],
         h: [
            ">{#p/basic}{#n1}* Maybe now that we're free, they'll finally make that reboot they were planning.",
            ">* What was it called?\n* Oh, I've already forgotten..."
         ]
      },
      mananaX: () =>
         [
            [
               ">{#p/basic}{#n1}* 呃，刚才什么动静？",
               ">{#p/basic}{#n1}* 唉... \n  现在不行啦，眼睛花了。"
            ],
            [">{#p/basic}{#n1}* 啊？\n* 怎么又整出这动静了？\n  现在的孩子啊..."],
            [">{#p/basic}{#n1}* 现在的孩子啊..."]
         ][Math.min(roomKills().w_puzzle4++, 2)],
      afrogX: (k: number) =>
         [
            [">{#p/basic}{#n1}* 如... \n* 如果你再-再那么做的话... \n  我-我会站出来阻止你的！"],
            [">{#p/basic}{#n1}* 住-住手...\n* 别伤害他们了..."]
         ][k],
      patron: {
         a: pager.create(
            0,
            () =>
               SAVE.data.n.plot === 72
                  ? 6 <= world.population
                     ? [
                        ">{#p/basic}{#n1}* I'm sad.\n* They took the DJ table to use for some tacky show later.",
                        ">* ... wait, that might actually be kind of cool."
                     ]
                     : [
                        ">{#p/basic}{#n1}* I'm sad.\n* The bully who came through here earlier...",
                        ">* ... turned out to be you.",
                        ">* You saved us in the end, but why resort to such violence along the way?"
                     ]
                  : SAVE.data.b.napsta_performance
                     ? [
                        ">{#p/basic}{#n1}* 我很伤心。\n* 这段时间，音乐家们\n  都把自己逼得好紧...",
                        ">* 我个人真的很喜欢他们的曲子。",
                        ">* 真可惜，\n  我们可能再也听不到第二次了。",
                        ">{#n1!}{#n2}* 至少你还有牛排作伴，\n  对吧？ ;)",
                        ">{#n2!}{#n1}* ...别再提这个了。"
                     ]
                     : [
                        ">{#p/basic}{#n1}* 我很伤心。\n* 这几天的伙食真的是每况愈下...",
                        ">* 他们当初承诺会给一些\n  “货真价实”的东西。\n* 但我所得的都是些伪劣仿制品。",
                        ">{#n1!}{#n2}* 嘿！ ;)\n* 别在顾客面前\n  说我店面的坏话！ ;)",
                        ">* 再说了，如果是你的味觉\n  出了些毛病呢 ;)",
                        ">{#n2!}{#n1}* ...一点都没变。"
                     ],
            () => [
               SAVE.data.n.plot === 72 && 6 <= world.population
                  ? ">{#p/basic}{#n1}* ...不是这么回事？"
                  : ">{#p/basic}{#n1}* ...就是这么回事。"
            ]
         )
      },
      pie: () =>
         3 <= SAVE.data.n.cell_insult
            ? [">{#p/human}* （你得到了烤糊的派。）"]
            : SAVE.data.n.state_wastelands_mash === 1
               ? [">{#p/human}* （你得到了派粥。）"]
               : SAVE.data.b.snail_pie
                  ? [">{#p/human}* （你得到了蜗牛派。）"]
                  : [">{#p/human}* （你得到了奶油糖肉桂派。）"],
      plot_call: {
         a: () => [
            ">{#p/event}* 铃铃，铃铃...",
            3 <= SAVE.data.n.cell_insult
               ? ">{#p/toriel}* 孩子，你好。"
               : ">{#p/toriel}* 喂？\n* 我是托丽尔。",
            ">{#f/1}* 不是啥大事，\n  只是想问一下...",
            ">{#f/0}* 你更喜欢肉桂，\n  还是奶油糖呢？",
            choicer.create("* （你更喜欢哪个？）", "肉桂", "奶油糖"),
            3 <= SAVE.data.n.cell_insult
               ? ">{#p/toriel}{#f/0}* 我知道了。"
               : ">{#p/toriel}* 哦，我知道了！\n* 十分感谢！"
         ],
         b: () => [
            ">{#p/event}* 铃铃，铃铃...",
            3 <= SAVE.data.n.cell_insult
               ? ">{#p/toriel}* 孩子，你好。"
               : ">{#p/toriel}* 喂？\n* 我是托丽尔。",
            [
               ">{#f/1}* 你不讨厌奶油糖吧？",
               ">{#f/1}* 你不讨厌肉桂吧？"
            ][SAVE.data.n.choice_flavor],
            ">{#f/1}* 我知道你更喜欢另一种，\n  只是...",
            ">{#f/1}* 假如食物里放了它，\n  你还愿意吃吗？",
            choicer.create("* （你要怎么回答？）", "愿意吃", "不吃了")
         ],
         b1: () => [
            3 <= SAVE.data.n.cell_insult
               ? ">{#p/toriel}{#f/0}* 知道了。"
               : ">{#p/toriel}* 好的，好的，没问题。",
            ">{#f/1}* 那我先挂了..."
         ],
         b2: () => [
            ">{#p/toriel}{#f/5}* ...",
            ">{#f/0}* 好吧。",
            ">{#f/1}* ...",
            3 <= SAVE.data.n.cell_insult
               ? ">{#f/0}* 我看看怎么办吧。"
               : ">{#f/0}* 我会回头再打给你的，\n  孩子。"
         ],
         c: [
            ">{#p/event}* 铃铃，铃铃...",
            ">{#p/toriel}{#f/1}* 你没什么过敏的东西吧？",
            ">{#f/5}* ...",
            ">{#f/5}* 我感觉人类不该\n  对怪物的食物过敏。",
            ">{#f/0}* 嘻嘻。\n* 刚问的别放在心上！"
         ],
         d: [
            ">{#p/event}* 铃铃，铃铃...",
            ">{#p/toriel}{#f/1}* 嗨，小家伙。",
            ">{#f/0}* 我想起来\n  好久没收拾这地方了。",
            ">{#f/1}* 所以，这里可能\n  四处散落着各种东西。",
            ">{#f/0}* 你可以把它们捡起来，\n  带在身上，但别带太多。",
            ">{#f/1}* 万一以后碰到什么\n  真正想要的东西呢？",
            ">{#f/0}* 那时，你就会希望\n  自己的口袋里还有空地方了。"
         ]
      },
      puzzle1A: () =>
         SAVE.data.b.svr
            ? [">{#p/human}* （开关好像卡住了。）"]
            : [">{#p/basic}* 开关卡住了。"],
      puzzle3A: () =>
         SAVE.data.b.svr
            ? [">{#p/human}* （开关好像卡住了。）"]
            : [">{#p/basic}* 开关卡住了。"],
      return1: () => [
         SAVE.data.n.cell_insult < 3
            ? ">{#p/toriel}{#f/1}* 你是怎么到这里的，\n  我的孩子？"
            : ">{#p/toriel}{#f/1}* 哦... 你到了。",
         ">* 你还好吗？"
      ],
      return2a: () =>
         SAVE.data.n.cell_insult < 3
            ? [">{#p/toriel}* 一点伤都没有！\n* 很厉害！"]
            : [">{#p/toriel}{#f/10}* 没有受伤...\n* 挺好的。"],
      return2b: () =>
         SAVE.data.n.cell_insult < 3
            ? [">{#p/toriel}{#f/4}* 你好像受伤了...", ">{#f/10}* 乖，乖。\n* 让我帮你疗伤。"]
            : [">{#p/toriel}{#f/9}* 你受伤了。", ">{#f/10}* 请让我帮你疗伤。"],
      return2c: [
         ">{#p/toriel}{#f/3}* ...",
         ">{#f/11}* 是谁把你弄成这样的？\n* 他该为此付出代价。"
      ],
      return3: () => [
         ">{#p/toriel}* 孩子，对不起。\n* 我真是个笨蛋，居然把你\n  一个人扔下这么长时间。",
         ...(world.postnoot
            ? [
               ">{#f/1}* ...是我的错觉吗？\n  感觉空气不太对劲。",
               ">{#f/5}* 估计是供气系统出故障了。",
               ">{#f/5}* ...",
               ">{#f/0}* 别担心。\n* 很快就会有人解决的。"
            ]
            : []),
         ">{#f/1}* 来吧！\n* 我给你准备了个惊喜。"
      ],
      return4: () => [
         ">{#p/toriel}* 欢迎来到我的住所！",
         ...(3 <= SAVE.data.n.cell_insult
            ? [
               ">{#f/1}* 你闻到...",
               ">{#p/toriel}{#f/2}* ...哎呀，\n  忘了看烤箱了！",
               ">{#p/toriel}{#f/5}* 刚刚我全顾着去想你\n  之前为什么那么做，我...",
               ">{#p/toriel}{#f/1}* 我得马上去看看派怎么样了，\n  请别到处乱跑！"
            ]
            : [
               ">{#f/1}* 闻到了吗？",
               ...(SAVE.data.b.snail_pie
                  ? [">{#f/0}* 惊喜！\n* 是我亲手做的蜗牛派。"]
                  : [
                     ">{#f/0}* 惊喜！\n* 我做了个奶油糖肉桂派。",
                     ">{#f/0}* 今晚我原本是想做蜗牛派的，\n  但我猜你更喜欢这个。"
                  ]),
               ">{#f/1}* 嗯，尽管我很久\n  没有照顾过其他人了...",
               ">{#f/0}* 但还是希望\n  你能在这里过得开心。",
               ">{#f/0}* 跟我来！\n* 还有个惊喜等着你。"
            ])
      ],
      return5: [
         ">{#p/toriel}* 快看！\n* 这是属于你自己的房间。",
         ">{#f/1}* 希望你能喜欢它..."
      ],
      return6: [
         ">{#p/toriel}{#f/1}* 嗯，我得去看一下派\n  烤得怎么样了。",
         ">{#f/0}* 请四处走走，熟悉下吧！"
      ],
      runaway1: [
         [">{#p/toriel}{#f/1}* 你是不是应该在屋里玩呢？", ">{#f/0}* 来吧。"],
         [">{#p/toriel}{#f/9}* 在这里玩很危险的，\n  孩子。", ">{#f/5}* 相信我。"],
         [">{#p/toriel}{#f/5}* 这里的重力很小。\n* 你会飘走的。"],
         [">{#p/toriel}{#f/5}* 这里的空气系统很脆弱。\n* 你会窒息的。"],
         [">{#p/toriel}{#f/23}* 这里真的没有什么\n  值得你看的东西。"],
         [">{#p/toriel}{#f/1}* 想跟我一起读本书吗？"],
         [">{#p/toriel}{#f/1}* 你想再去看看外域的\n  其他地方吗？"],
         [">{#p/toriel}{#f/5}* 我不会让你一个人\n  遇到危险的。"],
         [">{#p/toriel}{#f/3}* 你想让我一整天都这样子吗？"],
         [">{#p/toriel}{#f/4}* ..."],
         [">{#p/toriel}{#f/17}* ...", ">{#f/15}* 我不喜欢你玩这种游戏。"],
         [">{#p/toriel}{#f/17}* ..."]
      ],
      runaway2: [
         ">{#p/toriel}{#f/1}* 回屋里去吧，孩子...",
         ">{#f/0}* 我要给你看样东西！"
      ],
      runaway3: [
         ">{#p/toriel}{#f/2}* 孩子，快回去！\n* 这里非常不安全！",
         ">{#f/0}* 跟我来吧。\n  早餐已经做好了。"
      ],
      runaway4: [">{#p/toriel}{#f/2}* 孩子！\n* 为什么要来这里！？"],
      runaway5: [
         ">{#p/toriel}{#f/1}* 你想过离开外域之后\n  等待你的是什么吗？",
         ">{#f/5}* 对不起，我...\n  我之前对你太冷淡了...",
         ">{#f/9}* 是不是因为我不够关心你，\n  你才逃跑的呢..."
      ],
      runaway6: [
         ">{#g/torielStraightUp}* 说实话... 我不敢离开这里。",
         ">{#f/9}* 外面非常危险，那些怪物\n  足以威胁到你我的生命。",
         ">{#g/torielSincere}* 我也想尽力保护你，\n  不让他们伤害到你...",
         ">{#g/torielStraightUp}* 可要是我跟你一起离开，\n  他们会把我也当成一种威胁。",
         ">{#f/9}* 等待你的，\n  只会是更大的危险。"
      ],
      runaway7: [
         ">{#p/toriel}{#f/5}* 求求你...",
         ">{#f/1}* 跟我回家吧，\n  我保证会好好照顾你的。",
         ">{#f/5}* 你说什么我都答应，好吗？",
         ">{#f/18}* 求你了...\n  不要像他们一样抛下我..."
      ],
      runaway7a: [
         ">{#p/toriel}{#f/18}* ...",
         ">{#g/torielCompassionSmile}* 没事啦，没事啦，孩子。\n* 一切都会好起来的。",
         ">{#f/1}* 你先回家，\n  我要在这处理些事情。",
         ">{#f/5}* 很快就回去。"
      ],
      runaway7b: [
         ">{#p/toriel}{#f/21}* 真可悲啊...",
         ">* 我连一个人类孩子...\n  都保护不了...",
         ">{#p/human}* （你听见脚步声逐渐远去。）"
      ],
      silencio: {
         a: pager.create(
            0,
            () =>
               SAVE.data.n.plot === 72
                  ? [
                     ">{#p/basic}{#n1}* Hey there.\n* Nice to see you back here.",
                     ">* I've decided to revisit this old stomping ground of mine...",
                     ">* Besides, it's quiet here.\n* Just like me.",
                     ">* Oh, and I've retired from working at the CORE.",
                     ">* You see, when I joined the engineering team...",
                     ">* I didn't realize I'd be called on for impromptu guard duty.",
                     ">* ... it would seem deception of the corporate variety is beyond even my foresight."
                  ]
                  : SAVE.data.b.napsta_performance
                     ? [
                        ">{#p/basic}{#n1}* 嘿，你好。\n* 很高兴能在演出看到你。",
                        ">* 我叫Silencio...\n  但我觉得你应该听过了。",
                        ">* 这里的人都知道我的名字，\n  连那个DJ都知道。",
                        ">* 我曾经在这里表演过\n  我自己的音乐剧。",
                        ">* 名字叫“Silencio的大逃亡”。",
                        ">* 结束了之后，\n  观众还没来得及叹口气，我就走了。"
                     ]
                     : [
                        ">{#p/basic}{#n1}* 嘿，你好。\n* 很高兴见到你。",
                        ">* 我叫Silencio...\n  好吧，这称呼是其他人给我取的。",
                        ">* 想知道为什么他们\n  这样叫我吗？",
                        ">* 我寂静如最沉寂的夜晚，\n  好似一位星际忍者。",
                        ">* 我能在任何危机中逃出生天，\n  从未失手。",
                        ">* 不信是吧？\n* 你试着整点动静，反正我肯定是\n  跑得比谁都快的。"
                     ],
            () =>
               SAVE.data.n.plot === 72
                  ? [
                     ">{#p/basic}{#n1}* Oh, yeah, I guess I'm free to leave the galaxy now.",
                     ">* ... but maybe I'll stay."
                  ]
                  : SAVE.data.b.napsta_performance
                     ? [
                        ">{#p/basic}{#n1}* 你甚至可以说，我的演出...",
                        ">* 让人“叹为观止”。"
                     ]
                     : [
                        ">{#p/basic}{#n1}* 你为什么还要继续找我搭话，嗯？",
                        ">* 我已经说完了我想说的。"
                     ]
         )
      },

      socks1: () =>
         world.darker
            ? [">{#p/human}* （你往里面瞅了瞅。）", ">{#p/basic}* 只是个放袜子的抽屉。"]
            : [
               ">{#p/human}* （你往里面瞅了瞅。）",
               ">{#p/basic}* 真羞人！\n* 这里面全是托丽尔收藏的袜子。\n* 有点乱...",
               world.meanie
                  ? choicer.create("* （让它们更乱点吗？）", "弄乱", "算了")
                  : choicer.create("* （整理一下吗？）", "整理", "算了")
            ],
      socks2: () =>
         world.meanie
            ? [">{#p/human}* （你把袜子弄得一团糟。）"]
            : [
               ">{#p/human}* （你把袜子整理成一双一双的。）",
               ...(!SAVE.isCanon() || !SAVE.flag.b.$asr || SAVE.data.b.oops
                  ? []
                  : [
                     ">{#p/human}* （不知为何，\n  你觉得这里会有什么东西...）",
                     ">{#p/human}* (...)\n* （抽屉里好像藏着一把钥匙。）",
                     choicer.create("* （拿走钥匙吗？）", "拿走", "不拿")
                  ])
            ],
      socks3: () => [
         ">{#p/human}* (...)\n* （抽屉里好像藏着一把钥匙。）",
         choicer.create("* （拿走钥匙吗？）", "拿走", "不拿")
      ],
      socks4: [">{#p/human}* （你打算不这么做。）"],
      socks5: () =>
         SAVE.flag.b.$svr
            ? [">{#p/human}* (But you got the sense that it'd be a bad idea.)"]
            : [">{#s/equip}{#p/human}* （你把钥匙串秘密钥匙\n  挂到了钥匙串上。）"],
      socks6: [">{#p/human}* （你决定什么也不拿。）"],
      socks7: () =>
         SAVE.data.b.svr
            ? [
               ">{#p/human}* (You stare into the sock drawer, recalling the long journey that started here.)",
               ">{#p/human}* (You can't help but wonder where you'd be without it.)"
            ]
            : world.darker
               ? [">{#p/basic}* 只是个放袜子的抽屉。"]
               : SAVE.data.n.plot < 72
                  ? [">{#p/basic}* 你的视线没办法从袜子上挪开。"]
                  : SAVE.data.b.oops
                     ? [
                        ">{#p/basic}* You came all this way just to revisit Toriel's sock drawer...?",
                        ">* You have great priorities in life."
                     ]
                     : [
                        ">{#p/basic}* You came all this way just to revisit Toriel's sock drawer...?",
                        ">* ... I guess that makes sense."
                     ],
      steaksale: {
         a: pager.create(
            0,
            () =>
               SAVE.data.b.napsta_performance
                  ? [
                     ">{#p/basic}{#n1}* 您好，亲 ;)",
                     ">* 能在演出看到你真的很开心，\n  你懂吧 ;)",
                     ">* 你真的超级出彩 ;)",
                     ">* 反正，无论如何，\n  我觉得我得给你一个特别待遇 ;)",
                     ">* 在一段时间之内，\n  我将我们的产品注入了“优质”成分 ;)",
                     ">* 相信我，亲，\n  这可就跟以前的东西\n  完全不一样了 ;)",
                     ">* 这东西可是货真价实的哟 ;)",
                     ">* 会有一点贵，希望你不要介意 ;)",
                     ">* 那么... \n  稍微看看我们这的东西吧？ ;)"
                  ]
                  : [
                     ">{#p/basic}{#n1}* 您好，亲 ;)",
                     ">* 为了看看你们这群乡下佬在忙什么，\n  上头特地派我来这里，知道吧？ ;)",
                     ">* 你可以认为我们正在\n  进行业务扩张 ;)",
                     ">* 你问什么是我们的业务？ ;)",
                     ">* 嗯，其实很简单...\n  卖牛排而已 ;)",
                     ">* 这可不是什么赝品，嗯哼？ ;)",
                     ">* 这牛排可是真货哟 ;)",
                     ">* 所有质疑这是假货的人都在骗你，\n  懂我的意思吧？ ;)",
                     ">* 话虽如此，\n  要不稍微看看我们这的东西吧？ ;)"
                  ],
            [">{#p/basic}{#n1}* 稍微看看我们这的东西吧？ ;)"]
         ),
         a1: [">{#p/basic}{#n1}* 谢谢惠顾，亲 ;)"],
         b: () => [
            SAVE.data.b.napsta_performance
               ? world.darker
                  ? ">{#p/basic}{#n1!}* “滋滋牛排” - 售价40G。"
                  : ">{#p/basic}{#n1!}* 上面写着“滋滋牛排”，售价40G。\n* 闻起来过于夸张。"
               : world.darker
                  ? ">{#p/basic}{#n1!}* “滋滋牛排” - 售价20G。"
                  : ">{#p/basic}{#n1!}* 上面写着“滋滋牛排”，售价20G。\n* 闻起来很夸张。",
            choicer.create("* （花20G买下滋滋牛排吗？）", "是", "否")
         ],
         b1: [">{#p/human}{#n1!}* （你得到了滋滋牛排。）", ">{#p/basic}{#n1}* 绝佳的选择，亲 ;)"],
         b2: [">{#p/human}{#n1!}* （你决定先不买。）"],
         c: () => [
            SAVE.data.b.napsta_performance
               ? world.darker
                  ? ">{#p/basic}{#n1!}* “呲呲汽水” - 售价10G。"
                  : ">{#p/basic}{#n1!}* 上面写着“呲呲汽水”，售价10G。\n* 究竟谁会去买这种东西啊？"
               : world.darker
                  ? ">{#p/basic}{#n1!}* “呲呲汽水” - 售价5G。"
                  : ">{#p/basic}{#n1!}* 上面写着“呲呲汽水”，售价5G。\n* 谁会去买这种东西啊？",
            choicer.create("* （花5G买下呲呲汽水吗？）", "是", "否")
         ],
         c1: [">{#p/human}{#n1!}* （你得到了呲呲汽水。）", ">{#p/basic}{#n1}* 小心点，挺甜的 ;)"],
         c2: [">{#p/human}{#n1!}* （你决定先不买。）"],
         d: pager.create(
            0,
            () => [
               ">{#p/human}{#n1!}* （你的钱不够。）",
               ">{#p/basic}{#n1}* 钱不够，是吗？ ;)",
               SAVE.data.b.napsta_performance
                  ? ">{#p/basic}* 没关系的，亲 ;)\n* 不是每个人都买得起“高端”食材的 ;)"
                  : ">{#p/basic}* 没关系的，亲 ;)\n* 搞到一些之后再过来就好 ;)"
            ],
            [">{#p/human}{#n1!}* （你的钱不够。）"]
         ),
         e: pager.create(
            0,
            [
               ">{#p/human}{#n1!}* （你带的东西太多了。）",
               ">{#p/basic}{#n1}* 也许你该过一会再来看看 ;)"
            ],
            [">{#p/human}{#n1!}* （你带的东西太多了。）"]
         ),
         f: [">{#p/human}{#n1!}* （你得到了滋滋牛排。）"],
         g: [">{#p/human}{#n1!}* （你得到了呲呲汽水。）"],
         h: [">{#p/human}{#n1!}* （你带的东西太多了。）"],
         i: [
            ">{#p/basic}{#n1}* 顺便说下，我们缺货了 ;)",
            ">* 看起来你对我们的商品情有独钟 ;)",
            ">* 如果-\n* 不，当你见到我们上司的时候...\n  记得和他说一声 ;)",
            ">{#p/human}{#n1!}* （Aaron在你耳边低语了几句。）",
            ">{#p/basic}{#n1}* 一路顺风，亲 ;)"
         ]
      },
      supervisor: {
         a: [">{#p/basic}* 过了一阵子..."],
         b: [
            ">{#p/napstablook}* 嘿各位...",
            ">* 这是我不久前写的一首小调...",
            ">* 我还在尝试各种音乐风格...\n  所以...",
            ">* 希望各位能喜欢这首曲子",
            ">* ...",
            ">* 那，我们开始吧..."
         ],
         c1: [">{*}{#p/basic}* 哇，爵士乐的味道。{^30}{%}"],
         c2: [
            ">{*}{#p/toriel}{#f/7}* 为什么纳普斯特之前\n  完全没提过呢？？\n* 真的好厉害！{^30}{%}",
            ">{*}{#p/basic}* 是啊，可能它只是有点害羞吧。{^30}{%}"
         ],
         c3: [">{*}{#p/basic}* 哦，好棒 ;){^30}{%}"],
         c4: [">{*}{#p/basic}* 高潮要来了！{^30}{%}"],
         c5: [">{*}{#p/basic}* 哇哦，真是... 有点东西啊。{^30}{%}"],
         d: [
            ">{#p/napstablook}* 是啊，是有点东西",
            ">{#p/napstablook}* 哦好吧...\n* 我可能让你们觉得无聊了...",
            ">{#p/napstablook}* 对不起..."
         ],
         e: [
            ">{|}{#p/toriel}{#f/2}* 不，等等！\n* 我很喜...",
            ">{#p/basic}* 我觉得它听不见的，托丽尔。",
            ">{#p/toriel}{#f/9}* ...\n* 它一直都听不见的..."
         ]
      },
      terminal: {
         a: () =>
            postSIGMA()
               ? [">{#p/human}* （你激活了终端。）\n* （上面什么消息也没有。）"]
               : SAVE.data.n.plot === 72
                  ? !world.runaway
                     ? [
                        ">{#p/human}* （你激活了终端。）\n* （上面有一条新消息。）",
                        ">{#p/alphys}* We're free, everyone!\n* This isn't a joke, the force field's gone!",
                        ">* Seriously, they're shutting down the core in a few days, so it's time to go!",
                        ">* You don't want to die here, do you?"
                     ]
                     : [
                        ">{#p/human}* （你激活了终端。）\n* （上面有一条新消息。）",
                        ">{#p/alphys}* The force field's gone.\n* Calling all citizens for immediate evacuation.",
                        ">* ... I know you're all afraid, but it's going to be okay.",
                        ">* They can't hurt us if we leave them behind."
                     ]
                  : 37.2 <= SAVE.data.n.plot
                     ? [
                        ">{#p/human}* （你激活了终端。）\n* （上面有一条新消息。）",
                        ">{#p/alphys}* The Foundry's fluid network has been repaired, thanks to our... v-very kind workers.",
                        ">* ...",
                        ">* On an unrelated note, we're... l-looking for new workers."
                     ]
                     : [
                        ">{#p/human}* （你激活了终端。）\n* （上面有一条新消息。）",
                        ">{#p/alphys}* 铸厂的流体网络又-又断了。",
                        ">* 工人们承诺\n  很快就会恢复正常，\n  但真实情况看起来并不乐观。",
                        ">* 如-如果这附近现在有人，\n  请赶紧过来帮忙..."
                     ]
      },
      torieldanger: {
         a: [">{#p/toriel}{#f/1}* 去看看那边的终端吧。"],
         b: [">{#p/toriel}{#f/1}* 小家伙，终端就在那里。\n  去输下密码吧。"]
      },
      latetoriel1: [
         ">{#p/toriel}{#npc/a}{#f/2}* ...！",
         ">{#f/5}* What are you doing out here, my ch...",
         ">{#f/9}* ... child...",
         ">{#f/5}* I cannot care for you any longer, child.\n* Nor should I.",
         ">{#f/5}* You have places to be, things to see...",
         ">{#f/10}* Who am I to keep you from that?",
         ">{#f/9}* ...",
         ">{#f/5}* Please, carry on without me...",
         ">{#f/1}* ... I know you can do the right thing..."
      ],
      latetoriel2: [">{#p/toriel}{#npc/a}{#f/5}* ... go on..."],

      lateasriel: () =>
         [
            [">{#p/asriel1}{#f/13}* Just leave me, Frisk...", ">{#f/15}* I can't come back with you, okay?"],
            [
               ">{#p/asriel1}{#f/16}* I don't want to break their hearts all over again.",
               ">{#f/13}* It's better if they never see me at all."
            ],
            [
               ">{#p/asriel1}{#f/15}* ... what are you doing?",
               ">{#f/15}* Are you trying to keep me company?",
               ">{#f/23}* Frisk...",
               ">{#f/22}* ...",
               ">{#f/13}* Hey.",
               ">{#f/13}* Let me ask you a question.",
               ">{#f/15}* Frisk...\n* Why did you come here?",
               ">{#f/13}* Everyone knows the story, right...?",
               ">{#f/23}* \"Spacecraft who fly into the Ebott sector are said to disappear.\"",
               ">{#f/22}* ...",
               ">{#p/human}* (...)\n* (You tell Asriel the truth.)",
               ">{#p/asriel1}{#f/25}* ...",
               ">{#f/25}* Frisk... you...",
               ">{#f/23}* ...",
               ">{#f/23}* You don't have to be alone anymore, okay?",
               ">{#f/17}* You've made so many wonderful friends here...",
               ">{#f/17}* They'll look out for you, okay?"
            ],
            [
               ">{#p/asriel1}{#f/15}* ...",
               ">{#f/15}* I know why $(name) flew out here.",
               ">{#f/16}* It wasn't for a very happy reason.",
               ">{#f/13}* Frisk.\n* I'll be honest with you.",
               ">{#f/15}* $(name) wanted nothing to do with humanity.",
               ">{#f/16}* Why, they never said.",
               ">{#f/15}* But they felt very strongly about that."
            ],
            [
               ">{#p/asriel1}{#f/17}* Frisk, it's okay.\n* You're not like $(name) at all.",
               ">{#f/15}* In fact, though you have similar, uh, fashion choices...",
               ">{#f/13}* I don't know why I ever acted like you were the same person.",
               ">{#f/15}* Maybe...\n* The truth is...",
               ">{#f/16}* $(name) just wasn't who I wanted them to be.",
               ">{#f/13}* While, Frisk...",
               ">{#f/17}* You're the kind of friend I've always wanted to have.",
               ">{#f/20}* So maybe I was kind of projecting a little.",
               ">{#f/17}* Let's be honest.\n* I did some weird stuff as a star."
            ],
            [
               ">{#p/asriel1}{#f/13}* There's one last thing I feel like I should tell you.",
               ">{#f/15}* When $(name) and I combined our SOULs together...",
               ">{#f/16}* The control over our body was actually split between us.",
               ">{#f/15}* They were the one that picked up their own empty body.",
               ">{#f/13}* And then, when we made it to the planet's remains...",
               ">{#f/13}* They were the one that wanted to...",
               ">{#f/16}* ... to use our full power.",
               ">{#f/13}* It took everything I had to resist it.",
               ">{#f/15}* And then, because of me, we...",
               ">{#f/22}* Well, that's why I ended up the way I did.",
               ">{#f/23}* ...弗里斯克.",
               ">{#f/17}* This whole time, I've blamed myself for that decision.",
               ">{#f/13}* It's why I adopted that horrible view of the world.",
               ">{#f/13}* \"Kill or be killed.\"",
               ">{#f/17}* But now...\n* After meeting you...",
               ">{#f/23}* Frisk, I don't regret that decision anymore.",
               ">{#f/22}* I did the right thing.",
               ">{#f/13}* If we'd killed those humans...",
               ">{#f/15}* We would have had to wage war against all of humanity.",
               ">{#f/17}* And in the end, everyone went free, right?",
               ">{#f/17}* Even the others who came here made it out alive.",
               ">{#f/13}* ...",
               ">{#f/15}* But, $(name)...",
               ">{#f/16}* ... I can't say for certain what happened to them after we died.",
               ">{#f/15}* Nothing was ever found... not even their SOUL.",
               ">{#f/15}* So... I can't help but wonder if they're... still out there.",
               ">{#p/basic}* ...",
               ">{#p/human}* （你听到有人在哭...）"
            ],
            [
               ">{#p/asriel1}{#f/17}* Frisk, thank you for listening to me.",
               ">{#f/17}* You should really go be with your friends now, okay?",
               ">{#f/13}* Oh, and, please...",
               ">{#f/20}* In the future, if you, uh, see me...",
               ">{#f/15}* ... don't think of it as me, okay?",
               ">{#f/16}* I just want you to remember me like... this.",
               ">{#f/17}* Someone that was your friend for a little while.",
               ">{#f/13}* ...",
               ">{|}{#p/human}* (You tell Asriel you really- {%}",
               ">{#p/asriel1}{#f/23}* Frisk, it's okay.",
               ">{#f/22}* You don't have to save everyone to be a good person.",
               ">{#f/13}* Besides... even if I could keep this form...",
               ">{#f/15}* I don't know if I could move on from what happened in the past.",
               ">{#f/17}* ... just promise me you'll take care of yourself, alright?",
               ">{#f/13}* ...",
               ">{#f/15}* Well, see you."
            ],
            [">{#p/asriel1}{#f/13}* Frisk...", ">{#f/15}* Don't you have anything better to do?"],
            []
         ][Math.min(SAVE.data.n.lateasriel++, 8)],
      securefield: [">{#p/basic}* 这里有一道安保屏障。\n* 已被激活。"],
      trivia: {
         w_security: [">{#p/basic}* 一道安保屏障。"],
         photoframe: () =>
            SAVE.data.b.svr
               ? [
                  [
                     ">{#p/asriel1}{#f/13}* An empty photo frame...",
                     ">{#f/16}* Once upon a time, there WERE pictures in these frames.",
                     ">{#f/15}* Then, she took them out and never put them back.",
                     ">{#f/16}* ... must've hurt too much to look at them."
                  ],
                  [
                     ">{#p/asriel1}{#f/13}* Empty photo frames are like missing memories...",
                     ">{#p/asriel1}{#f/15}* This place has way too many of them."
                  ],
                  [">{#p/asriel1}{#f/22}* Too many of these in this strange place."]
               ][Math.min(asrielinter.photoframe++, 1)]
               : SAVE.data.n.plot === 72 && !world.runaway
                  ? [">{#p/basic}* Still an empty photo frame."]
                  : [">{#p/basic}* 一个空相框。"],
         w_paintblaster: () =>
            SAVE.data.b.svr
               ? [">{#p/human}* (This device seems to be a few decades out of date.)"]
               : world.darker
                  ? [">{#p/basic}* 毫无价值的摆设。"]
                  : [">{#p/basic}* 一台老旧的燃油喷射装置。"],
         w_candy: () =>
            SAVE.data.b.svr
               ? [">{#p/human}* (The sign warns of unexpected appliance malfunctions.)"]
               : [">{#p/basic}* “请注意：\n   有的机器可能看起来没问题，\n   但内部已经坏了。”"],
         w_djtable: () =>
            SAVE.data.b.svr
               ? [">{#p/human}* (You touch the DJ set.)\n* (It makes an oddly satisfying scratching sound.)"]
               : world.darker
                  ? [">{#p/basic}* 一台打碟机。"]
                  : SAVE.data.n.plot === 72
                     ? [">{#p/basic}* 一台花哨的打碟机。\n  现在没人在用，有点出人意料。"]
                     : [">{#p/basic}* 一台花哨的打碟机，\n  装有各式各样的旋钮与滑块。"],
         w_froggit: () =>
            SAVE.data.n.plot === 72
               ? [
                  ">{#p/basic}* 呱呱，呱呱。\n* （打扰一下，人类。）",
                  ">* (You seem like you have grown into a thoughtful and conscientious person.)",
                  ">* (Whether that was from my advice or not...)\n* (I'm quite proud.)",
                  ">* 呱呱。"
               ]
               : [
                  ">{#p/basic}* 呱呱，呱呱。\n* （打扰一下，人类...）",
                  ">* （我想给你几点对战怪物的建议。）",
                  ">* （如果你采取特定的{@fill=#ff0}行动{@fill=#fff}，\n  或用{@fill=#3f00ff}战斗{@fill=#fff}把他们揍到濒死...）",
                  ">* （他们估计就不想战斗了。）",
                  ">* （如果一个怪物不想战斗，那么...）",
                  ">* （就对它{@fill=#ff0}仁慈{@fill=#fff}一点吧，人类。）\n* 呱呱。"
               ],
         w_froggit_view: () =>
            SAVE.data.b.svr
               ? [">{#p/human}* (You stare thoughtfully into the cosmos beyond...)"]
               : world.darker
                  ? []
                  : SAVE.data.n.plot === 72
                     ? [
                        ">{#p/basic}* It's ironic how staring at outer space...",
                        ">* Tends to be a great way to channel your inner thoughts."
                     ]
                     : [
                        ">{#p/basic}* 这是外太空的一景。",
                        ">* 这附近肯定不缺这种东西，\n  是吧？"
                     ],
         w_kitchenwall: () =>
            SAVE.data.n.plot === 9
               ? [">{#p/toriel}{#f/1}* 再等等就好，我的孩子！"]
               : [">{#p/toriel}{#f/1}* 给我点时间..."],
         w_lobby1: () =>
            SAVE.data.b.svr
               ? [">{#p/human}* (The sign speaks of strength of will in times of trouble.)"]
               : [">{#p/basic}* “纵使曲折难行，\n   亦当砥砺奋进。”"],
         w_pacing_view: () =>
            SAVE.data.b.svr
               ? [">{#p/human}* (You stare happily into the cosmos beyond...)"]
               : world.darker
                  ? []
                  : SAVE.data.n.plot === 72
                     ? [
                        ">{#p/basic}* After such a long journey, the glass doesn't seem to scare you.",
                        ">* Not that it ever did in the first place."
                     ]
                     : [
                        ">{#p/basic}* 想想看，\n  在你和无边无际的宇宙之间，\n  只有一块玻璃...",
                        ">* 尽管违背了常识，\n  但这似乎并没有困扰到你。"
                     ],
         w_pacing1: () =>
            SAVE.data.n.plot === 72
               ? [
                  ">{#p/basic}* Ribbit, ribbit.\n* (Someone passed by here not too long ago.)",
                  ">* (He told me not to tell you where he was going.)",
                  ">* (I wasn't going to, but then, he just seemed so sad...)",
                  ">* (He's probably at the platform just past the entrance now.)",
                  ">* (Go. Speak to him. Something good will come of it.)\n* Ribbit.",
                  ">{#p/basic}* ...艾斯利尔..."
               ]
               : [
                  ">{#p/basic}* 呱呱，呱呱。\n* （唉...）",
                  ">* （我的“朋友”并不愿意善待我。）",
                  ">* （相反，只要逮着机会，\n  他就会伤害我。）",
                  ">* （没错.......）\n* （伤害我吧............）\n* （................）",
                  ">* （至少你愿意善待我。）\n* 呱呱。"
               ],
         w_pacing2: () =>
            SAVE.data.n.plot === 72
               ? SAVE.data.b.oops
                  ? [
                     ">{#p/basic}* 呱呱，呱呱。\n* （你好，人类...）",
                     ">* （你有看到我的朋友吗？）",
                     ">* （几天前它还在这，\n  就站在我的左边...）",
                     ">* （但自打你来之后，\n  从某个时刻起，它就不见了。）",
                     ">* （它说过，如果你伤害了怪物\n  就会离开这里...）",
                     SAVE.data.n.exp <= 0
                        ? ">* （真奇怪，因为你根本\n  没伤害任何怪物啊。）\n* 呱呱。"
                        : ">* （如果有机会，\n  下次对他们好一点。如何？）\n* 呱呱。"
                  ]
                  : [
                     ">{#p/basic}* 呱呱，呱呱。\n* （你好，人类...）",
                     ">* (My friend is the happiest they've ever been.)",
                     ">* (They said they'd leave if you hurt anyone, but you haven't.)",
                     ">* (In fact, they've decided to stay to my left forever.)",
                     ">* (As for that \"friend\" of theirs who always tried to hurt them...)",
                     ">* (Oh, he seems to have turned himself into a goat.)\n* Ribbit."
                  ]
               : [
                  ">{#p/basic}* 呱呱，呱呱。\n* （你好，人类...）",
                  ">* （你有尝试查看过\n  自己的“物品栏”吗？）",
                  ">* （你捡到过的东西，\n  都能在那里找到。）",
                  ">* （你问，我的物品栏都有什么？）",
                  ">* （哦，你可真傻... \n  怪物根本没有“物品栏”！）\n* 呱呱。"
               ],
         w_pacing3: () =>
            SAVE.data.n.plot === 72
               ? SAVE.data.n.bully < 1
                  ? [
                     ">{#p/basic}* Ribbit, ribbit.\n* (Thank you for always showing mercy to us monsters.)",
                     ">* (I know I gave you advice on how to beat people up safely...)",
                     ">* (But that didn't mean I wanted you to do it.)",
                     ">* (You are a kind human indeed.)\n* Ribbit."
                  ]
                  : SAVE.data.n.bully < 15
                     ? [
                        ">{#p/basic}* Ribbit, ribbit.\n* (Thank you for keeping the beatings to a minimum.)",
                        ">* (I know I gave you advice on how to beat people up safely...)",
                        ">* (But that didn't mean I wanted you to do it.)",
                        ">* (You aren't too terrible, at least for a human.)\n* Ribbit."
                     ]
                     : [
                        ">{#p/basic}* Ribbit, ribbit.\n* (So you have proven to be a formidable threat.)",
                        ">* (Yet, somehow, I'm still not afraid of you...)",
                        ">* (Perhaps at the end, you offered mercy when you could have attacked.)",
                        ">* (I do appreciate the restraint you have shown.)\n* Ribbit."
                     ]
               : [
                  ">{#p/basic}* 呱呱，呱呱。\n* （如果你把一只怪物打到了\n  濒死的程度...）",
                  ">* （它的名字就会变成蓝色。）",
                  ">* （很奇怪，对吧？）\n* （但我听说，人类被打了之后\n  也会变蓝受呢。）",
                  ">* （所以我觉得，\n  你应该是可以联想得到的。）",
                  ">* （那么，感谢你花时间\n  听我唠叨这些。）\n* 呱呱。"
               ],
         w_puzzle1_view: () =>
            SAVE.data.b.svr
               ? [">{#p/human}* (You stare deeply into the cosmos beyond...)"]
               : world.darker
                  ? []
                  : SAVE.data.n.plot === 72
                     ? [">{#p/basic}* In the end, these rooms still feel like nothing more than lookout areas."]
                     : [
                        ">{#p/basic}* 为什么总感觉有些房间...",
                        ">* ...单纯是用来当瞭望区的呢？"
                     ],
         w_puzzle2: () =>
            SAVE.data.b.svr
               ? world.nootflags.has('w_puzzle2') // NO-TRANSLATE

                  ? [
                     ">{#p/human}* (The sign describes puzzle- solving as an unnecessary part of space exploration.)",
                     ...[
                        [
                           ">{#p/asriel1}{#f/13}* Unlike most signs, this one has a point.",
                           ">{#f/15}* And that's not just because I'm the one who wrote it."
                        ],
                        [">{#p/asriel1}{#f/3}* ... don't tell me you actually enjoyed these puzzles."],
                        [">{#p/asriel1}{#f/10}* Frisk, even you're not THAT weird."]
                     ][Math.min(asrielinter.w_puzzle2++, 2)]
                  ]
                  : [">{#p/human}* (The sign describes the value of patience in space.)"]
               : world.nootflags.has('w_puzzle2') // NO-TRANSLATE

                  ? [
                     ">{#p/basic}* “浩渺长空，恰似深邃海洋。”",
                     ">* \"Navigating its waters should NEVER require solving badly designed puzzles!\""
                  ]
                  : [
                     ">{#p/basic}* “浩渺长空，恰似深邃海洋。”",
                     ">{#p/basic}* “风平浪静，{@fill=#00a2e8}静待{@fill=#fff}暗流涌动，\n   波涌潮启，{@fill=#ff993d}启程{@fill=#fff}无垠长空。”"
                  ],
         w_puzzle3_view: () =>
            SAVE.data.b.svr
               ? [">{#p/human}* (You stare reflectively into the cosmos beyond...)"]
               : world.darker
                  ? []
                  : SAVE.data.n.plot === 72
                     ? [">{#p/basic}* It sure... was... a nice view."]
                     : [">{#p/basic}* 景色确实不错。"],
         w_puzzle4: () =>
            SAVE.data.b.svr
               ? [">{#p/human}* (The sign appears to be an advertisement for a now- defunct steak sale.)"]
               : [
                  ">{#p/basic}* “赶紧前往活动室品尝\n   老滑头的招牌牛排(TM)吧！”"
               ],
         w_ta_box: () =>
            SAVE.data.b.svr
               ? [
                  [
                     ">{#p/asriel1}{#f/20}* Yeah... Toriel was never one to keep these in one piece.",
                     ">{#f/21}* Even these replicas of my model starships got smashed..."
                  ],
                  [
                     ">{#f/13}* It's surprising.\n* She's usually such an organized person.",
                     ">{#p/asriel1}{#f/17}* ... she must have been having a bad day."
                  ],
                  [">{#p/asriel1}{#f/13}* It happens..."]
               ][Math.min(asrielinter.w_ta_box++, 2)]
               : world.darker
                  ? [">{#p/basic}* 一个玩具盒。\n* 里面的星际飞船模型\n  都被砸得粉碎。"]
                  : SAVE.data.n.plot === 72
                     ? [
                        ">{#p/basic}* The little ships in this box were never repaired.",
                        ">* If this was at Asgore's house, they'd be in perfect shape."
                     ]
                     : [
                        ">{#p/basic}* 一盒星际飞船模型！\n* 以及... 玻璃碎片？",
                        ">* 看起来应该有人把小飞船摔碎了。"
                     ],
         w_ta_cabinet: () =>
            SAVE.data.b.svr
               ? [">{#p/human}* (You can't find anything in here besides several of the exact same outfit.)"]
               : [
                  ">{#p/basic}* 衣柜里挂满了黄蓝条纹衫。",
                  ...(SAVE.data.n.plot === 72 ? [">* Like that's ever gonna change."] : [])
               ],
         w_ta_frame: () =>
            SAVE.data.b.svr
               ? [[">{#p/asriel1}{#f/21}* ... it's missing..."], [">{#p/asriel1}{#f/21}* ..."]][
               Math.min(asrielinter.w_ta_frame++, 1)
               ]
               : SAVE.data.n.plot === 72
                  ? [">{#p/basic}* 一个空相框。", ">* There still isn't much else to say."]
                  : [">{#p/basic}* 一个空相框。", ">* 没什么好说的。"],
         w_ta_paper: () =>
            SAVE.data.b.svr
               ? [
                  ">{#p/human}* (The drawing doesn't appear to be anything of importance.)",
                  ...[
                     [
                        ">{#p/asriel1}{#f/13}* It's long gone now, but the real drawing I made here...",
                        ">{#f/17}* ... was basically the blueprint for my \"god of hyperdeath\" form.",
                        ">{#f/17}* Super skybreaker, titanium striker...",
                        ">{#f/20}* And, of course, the legendary \"hyper goner.\""
                     ],
                     [
                        ">{#p/asriel1}{#f/17}* Yeah... I guess I had it all planned out.",
                        ">{#f/20}* I came up with lots of crazy stuff, all the time...",
                        ">{#f/1}* Ooh, you would have ADORED my pan-galactic starship concept."
                     ],
                     [
                        ">{#p/asriel1}{#f/17}* Frisk, I hope...",
                        ">{#f/23}* I really hope we can have a moment like that between us.",
                        ">{#f/22}* Back with $(name), it was always...",
                        ">{#f/15}* ... difficult."
                     ],
                     [">{#p/asriel1}{#f/20}* Don't worry.\n* If you can't draw, I'll just teach you."]
                  ][Math.min(asrielinter.w_ta_paper++, 3)]
               ]
               : world.darker
                  ? [">{#p/basic}* 平平无奇的画。\n* 和原型一点都不像。"]
                  : [
                     ">{#p/basic}* 这是一幅儿童画，\n  上面画了一个长着彩虹翅膀的\n  巨大怪物。",
                     ">* 很像家里的那只..."
                  ],
         w_tf_couch: () =>
            SAVE.data.b.svr
               ? [">{#p/human}* (The couch appears to have never been used.)"]
               : SAVE.data.n.plot === 72
                  ? [">{#p/basic}* No matter how much time passes, it's unlikely anyone will ever sit here."]
                  : world.darker
                     ? [">{#p/basic}* 一张沙发。\n* 难道你还有别的事要做吗？"]
                     : [
                        ">{#p/basic}* 一张看起来很舒适的沙发。",
                        ">* 很难抗拒陷入柔软坐垫的\n  甜蜜诱惑中。"
                     ],
         w_tf_table: () =>
            SAVE.data.b.svr
               ? [">{#p/human}* (You glance at the end table, but it doesn't appear to glance back.)"]
               : [
                  ">{#p/basic}* 一张毫不起眼的茶几。",
                  ">{#p/basic}* 不可思议的是，它几乎是崭新的。"
               ],
         w_tf_window: () =>
            SAVE.data.b.svr
               ? SAVE.data.b.c_state_secret1_used && SAVE.data.b.c_state_secret5_used
                  ? [">{#p/human}* (You stare wishfully into the cosmos beyond...)"]
                  : [">{#p/human}* (You stare wistfully into the cosmos beyond...)"]
               : world.darker
                  ? [">{#p/basic}* 又一扇窗而已。"]
                  : SAVE.data.n.plot === 72
                     ? [">{#p/basic}* Despite everything, it's a beautiful view of outer space."]
                     : [">{#p/basic}* 外太空的景色真不错。"],
         w_th_door: () =>
            SAVE.data.b.svr
               ? [
                  ">{#p/human}* (The sign describes the room within as being incomplete.)",
                  ...[
                     [
                        ">{#p/asriel1}{#f/3}* If this house weren't a replica, that would be Dad's room...",
                        ">{#f/4}* You can guess why it was never finished."
                     ],
                     [
                        ">{#p/asriel1}{#f/13}* ...",
                        ">{#f/15}* That speech affected Mom in a... not good way.",
                        ">{#f/4}* As a star, I sometimes... spied on her.",
                        ">{#f/3}* And the way she was talking, it's like she never left that moment.",
                        ">{#f/13}* Then, you arrived, and everything changed..."
                     ],
                     [
                        ">{#p/asriel1}{#f/13}* ...",
                        ">{#f/15}* This is too awkward.\n* I'm going to pretend we aren't here."
                     ],
                     [">{#p/asriel1}{#f/13}* ..."]
                  ][Math.min(asrielinter.w_th_door++, 3)]
               ]
               : [">{#p/basic}* “房间正在翻修。”"],
         w_th_mirror: () =>
            SAVE.data.b.svr
               ? [">{#p/asriel1}{#f/24}* 这是我们..."]
               : world.genocide
                  ? [">{#p/basic}* ..."]
                  : world.darker
                     ? [">{#p/basic}* 这是你。"]
                     : SAVE.data.b.w_state_catnap || SAVE.data.n.plot > 17
                        ? [">{#p/basic}* 这是你...", ">{#p/basic}* ...而且，永远都会是你。"]
                        : [">{#p/basic}* 这是你！"],
         w_th_plant: () =>
            SAVE.data.b.svr
               ? [">{#p/human}* (You thank the plant for the warmth it brings each day.)"]
               : SAVE.data.n.plot === 72
                  ? [">{#p/basic}* This plant is just happy you're still alive."]
                  : world.darker
                     ? [">{#p/basic}* 这株植物不想见到你。"]
                     : SAVE.data.b.oops
                        ? [">{#p/basic}* 这株植物很开心见到你。"]
                        : [">{#p/basic}* 这株植物见到你非常激动！"],
         w_th_sausage: () =>
            SAVE.data.b.svr
               ? [">{#p/human}* (You rustle the corny plant.)"]
               : [">{#p/basic}* 这株忧玉的植物一点都不米人。"],
         w_th_table1: () => [
            ">{#p/human}* （你在桌子底下找到了一套蜡笔。）",
            ...(SAVE.data.b.svr
               ? [
                  [
                     ">{#p/asriel1}{#f/24}* I think $(name) might have lost the blue crayon.",
                     ">{#f/7}* ... actually, no.\n* I KNOW they lost the blue crayon.",
                     ">{#f/6}* It turned up later in a food chest, but nobody thought to check it.",
                     ">{#f/16}* They must have been trying to claim the chest as their own."
                  ],
                  [
                     ">{#p/asriel1}{#f/4}* If we ever get a new set of crayons, I'm keeping watch.",
                     ">{#f/3}* The moment you even think about losing a crayon...",
                     ">{#f/8}* I'll be there to stop that crime train before it even hits the tracks.",
                     ">{#f/2}* Just you wait."
                  ],
                  [">{#p/asriel1}{#f/31}* I've got my eyes on you, Frisk.", ">{#f/8}* And... maybe my ears."],
                  [">{#p/asriel1}{#f/10}* Are you staring at my ears again?\n* You keep doing that."]
               ][Math.min(asrielinter.w_th_table1++, 3)]
               : world.edgy
                  ? [">{#p/basic}* 少了两支。"]
                  : world.darker
                     ? [">{#p/basic}* 少了一支。"]
                     : [
                        ">{#p/basic}* 那支永远不知所踪的蓝色蜡笔，\n  已经丢了一百年了...",
                        ">{#p/basic}* 真可谓我们这时代的传奇。"
                     ])
         ],
         w_th_table2: () =>
            SAVE.data.b.svr
               ? [
                  ">{#p/human}* （你在桌子底下找到了一副牌。）",
                  ...[
                     [
                        ">{#p/asriel1}{#f/27}* $(name) and I were never really into those kinds of things.",
                        ">{#p/asriel1}{#f/15}* Well... I say never.",
                        ">{#p/asriel1}{#f/15}* Uh, let's just not talk about it."
                     ],
                     [
                        ">{#p/asriel1}{#f/13}* ...",
                        ">{#p/asriel1}{#f/13}* The last time we did, a table got flipped over.",
                        ">{#p/asriel1}{#f/17}* Just sibling things.\n* You know how it goes with card games."
                     ],
                     [">{#p/asriel1}{#f/17}* ..."]
                  ][Math.min(asrielinter.w_th_table2++, 2)]
               ]
               : world.darker
                  ? [
                     ">{#p/human}* （你在桌子底下找到了一副牌。）",
                     ">{#p/basic}* 你不想浪费时间玩牌。"
                  ]
                  : SAVE.data.n.plot === 72
                     ? [
                        ">{#p/human}* （你在桌子底下找到了一副牌。）",
                        ">{#p/basic}* Soon enough, we'll never have to think about these again."
                     ]
                     : [
                        ">{#p/human}* （你在桌子底下找到了一副牌。）",
                        ">{#p/basic}* 当然是全息款式的。"
                     ],
         w_tk_counter: () =>
            SAVE.data.b.svr
               ? [
                  ">{#p/human}* (You run your hand across the cutting board, noting the various grooves and ridges.)"
               ]
               : world.darker
                  ? [">{#p/basic}* 一块砧板。"]
                  : [">{#p/basic}* 托丽尔的砧板。\n  上面已经有一些使用的痕迹了。"],
         w_tk_sink: () =>
            SAVE.data.b.svr
               ? [
                  [
                     ">{#p/asriel1}{#f/21}* $(name) always said leaving fur in the drain was super gross.",
                     ">{#f/15}* I always thought it was normal, though..."
                  ],
                  [
                     ">{#p/asriel1}{#f/13}* Do humans not shed fur?\n* $(name) would never tell me things like this."
                  ],
                  [">{#p/asriel1}{#f/17}* I do have reason to believe humans shed.\n* Even if it's not fur."]
               ][Math.min(asrielinter.w_tk_sink++, 2)]
               : SAVE.data.n.plot === 72
                  ? [">{#p/basic}* Remnants of the white fur once stuck here still remain to this very day."]
                  : [">{#p/basic}* 一团白色的毛堵在下水管里。"],
         w_tk_stove: () =>
            SAVE.data.b.svr
               ? [
                  [
                     ">{#p/asriel1}{#f/13}* I have to wonder why she thought buying this would be a good idea.",
                     ">{#f/10}* Unless she wanted to re-create Asgore's kitchen...?",
                     ">{#f/17}* For someone who didn't like him, she had a weird way to show it."
                  ],
                  [
                     ">{#p/asriel1}{#f/15}* I really wish Toriel and Asgore stayed together sometimes.",
                     ">{#f/16}* ... but I guess it's for the best that they didn't."
                  ],
                  [">{#p/asriel1}{#f/13}* It just wasn't meant to be, Frisk..."]
               ][Math.min(asrielinter.w_tk_stove++, 2)]
               : SAVE.data.n.state_wastelands_toriel === 2
                  ? [">{#p/basic}* 只是个灶台。\n* 没人会再用它了。"]
                  : world.darker
                     ? [">{#p/basic}* 只是个灶台。"]
                     : SAVE.data.n.plot === 72
                        ? [">{#p/basic}* The stovetop is very clean.\n* Toriel may not need a new one on the new world."]
                        : [">{#p/basic}* 灶台非常干净。\n* 托丽尔肯定是用火魔法做饭的。"],
         w_tk_trash: () =>
            SAVE.data.b.svr
               ? [">{#p/human}* (You can't make out what's in the trash...)"]
               : SAVE.data.n.plot === 72
                  ? [">{#p/basic}* Rather symbolically, the trash can has been emptied."]
                  : [">{#p/basic}* 里面有一张揉皱的星花茶配方。"],

         w_tl_azzychair: () =>
            SAVE.data.b.svr
               ? [">{#p/human}* (You note the fairly large size of the dining chair.)"]
               : SAVE.data.n.state_wastelands_toriel === 2 || world.runaway
                  ? [">{#p/basic}* 大餐椅。"]
                  : [">{#p/basic}* 托丽尔的一把餐椅。\n* 比较适合王后。"],
         w_tl_bookshelf: pager.create(
            1,
            () =>
               SAVE.data.b.svr
                  ? [
                     ">{#p/human}* (The books on this bookshelf consist of snail facts, family recipes, and gardening tips.)"
                  ]
                  : [
                     ">{#p/basic}* 一个书架。",
                     ">{#p/human}* （你取下了一本书...）",
                     ">{#p/basic}* “你知道吗？\n   蜗牛的齿舌长得像链锯一样。”",
                     ">* “这可是个冷知识。”",
                     ">* “还有个趣事：蜗牛成熟后\n   会把自己的消化系统翻出来。”",
                     ">* “哦，顺带一提...”",
                     ">* “蜗牛的 {^5}说 {^5}话 {^5}速 {^5}度 {^5}很 {^5}慢。”",
                     ">* “开玩笑的，它们才不会说话。”",
                     ">* “你能想象，在某个世界，\n   那里的蜗牛会说话吗？”\n* “反正我是想象不出来。”",
                     ">{#p/human}* （你把书放回了书架。）"
                  ],
            () =>
               SAVE.data.b.svr
                  ? [
                     ">{#p/human}* (The books on this bookshelf consist of snail facts, family recipes, and gardening tips.)"
                  ]
                  : [
                     ">{#p/basic}* 一个书架。",
                     ">{#p/human}* （你取下了一本书...）",
                     ">{#p/basic}* 《逐梦家族的美味秘笈：蜗牛派》",
                     ">* “蜗牛派是逐梦家族的\n   一道风味独特的传统美食。”",
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
                  ? [
                     ">{#p/human}* (The books on this bookshelf consist of snail facts, family recipes, and gardening tips.)"
                  ]
                  : [
                     ">{#p/basic}* 一个书架。",
                     ">{#p/human}* （你取下了一本书...）",
                     ">{#p/basic}* “哈喽，热爱园艺的朋友们！”",
                     ">* “说到星花，它们生长与否的关键...”",
                     ">* “在于能否直接接触到宇宙射线。”",
                     ">* “所以它们多生长于空境。”",
                     ">* “毕竟在整个空间站中，\n   当属那里最为开阔。”",
                     ">{#p/human}* （你把书放回了书架。）"
                  ]
         ),

         w_tl_goreychair: () =>
            SAVE.data.b.svr
               ? [">{#p/human}* (You note the small size of the dining chair.)"]
               : SAVE.data.n.state_wastelands_toriel === 2 || world.runaway
                  ? [">{#p/basic}* 小餐椅。"]
                  : world.genocide
                     ? [">{#p/basic}* 托丽尔的一把餐椅。\n* 比较适合恶魔。"]
                     : world.darker
                        ? [">{#p/basic}* 托丽尔的一把餐椅。\n* 比较适合王子。"]
                        : SAVE.data.b.oops
                           ? [">{#p/basic}* 托丽尔的一把餐椅。\n* 比较适合小孩子。\n* 像你一样！"]
                           : [">{#p/basic}* 托丽尔的一把餐椅。\n* 比较适合... 小天使。\n* 像你一样！"],
         w_tl_table: () =>
            SAVE.data.b.svr
               ? [">{#p/human}* (The plant appears to be decorative in nature.)"]
               : world.darker
                  ? [">{#p/basic}* 一株观赏植物。\n* 仅此而已。"]
                  : [">{#p/basic}* 一株摆在托丽尔餐桌上的\n  观赏植物。"],
         w_tl_tools: () =>
            SAVE.data.b.svr
               ? [
                  [
                     ">{#p/asriel1}{#f/20}* $(name) used to pretend these things were musical instruments.",
                     ">{#f/17}* They'd pull them out, start \"playing\" them...",
                     ">{#f/20}* Once, I joined in, and we did a little fire- poker-instrument duet.",
                     ">{#f/13}* We started using our voices to emulate the instruments, and then...",
                     ">{#f/17}* Mom and Dad walked in to add backing vocals!"
                  ],
                  [
                     ">{#p/asriel1}{#f/13}* Then, as it turns out, someone had been listening in outside.",
                     ">{#f/15}* Before we knew it, we had monsters coming to the house in droves...",
                     ">{#f/17}* $(name) and I were still in the middle of the room, doing our thing.",
                     ">{#f/20}* But now we had an entire orchestra behind us!",
                     ">{#f/17}* We must have performed half of the Harmonexus Index that day.",
                     ">{#f/17}* ... it's an old book full of songs from our culture."
                  ],
                  [
                     ">{#p/asriel1}{#f/13}* All that because we played pretend with some fire pokers...",
                     ">{#f/17}* They say you can make an instrument out of anything.",
                     ">{#f/13}* ...",
                     ">{#f/15}* Wait...\n* I'M an anything..."
                  ],
                  [">{#p/asriel1}{#f/20}* Please don't make a musical instrument out of me."]
               ][Math.min(asrielinter.w_tl_tools++, 3)]
               : world.darker
                  ? [">{#p/basic}* 拨火棍。"]
                  : SAVE.data.n.plot === 72
                     ? [
                        ">{#p/basic}* They're just fire pokers...\n* Or are they?",
                        ">* Consider that Toriel's fire is only pleasantly warm, and not hot at all.",
                        ">* Why would she need these?",
                        ">* Thus, by the process of elimination, these must be advanced musical instruments."
                     ]
                     : [
                        ">{#p/basic}* 一架高级的乐器。",
                        ">* 但仔细一看，你会发现\n  这就是一些拨火棍。",
                        ">* 很难说，这些工具给人的感觉好像...",
                        ">* 是在前哨站建立之前就做出来了的。"
                     ],

         w_tl_torichair: () =>
            SAVE.data.b.svr
               ? [">{#p/human}* (You note the exceptional size of the dining chair.)"]
               : SAVE.data.n.state_wastelands_toriel === 2 || world.runaway
                  ? [">{#p/basic}* 餐椅王。"]
                  : [">{#p/basic}* 托丽尔的一把餐椅。\n* 比较适合国王。"],
         w_toriel_toriel: () => [
            ">{#p/basic}* 锁住了。",
            toriSV()
               ? SAVE.data.n.plot < 17.001
                  ? ">{#p/basic}* 听起来托丽尔在哭..."
                  : ">{#p/basic}* 听起来托丽尔睡着了..."
               : ">{#p/basic}* 听起来托丽尔在写东西..."
         ],
         w_tt_bed: () =>
            SAVE.data.b.svr
               ? [">{#p/human}* (The bed seems a lot smaller than it might have used to.)"]
               : SAVE.data.n.state_wastelands_toriel === 2 || world.runaway
                  ? [">{#p/basic}* 一张床。"]
                  : SAVE.data.n.plot < 72 || world.runaway
                     ? [
                        ">{#p/basic}* 托丽尔的床。",
                        ...(world.darker ? [] : [">* 对你来说有点太大了。"])
                     ]
                     : [
                        ">{#p/basic}* 托丽尔的床。",
                        ">* You've still got some time to go, but you'll grow into it."
                     ],
         w_tt_bookshelf: pager.create(
            1,
            () =>
               SAVE.data.b.svr
                  ? [
                     ">{#p/human}* (The books on this bookshelf consist of history, biology, and a foreboding possibility.)"
                  ]
                  : [
                     SAVE.data.n.state_wastelands_toriel === 2 || world.runaway
                        ? ">{#p/basic}* 一个书架。"
                        : ">{#p/basic}* 这是托丽尔的私人书架。",
                     ">{#p/human}* （你取下了一本书...）",
                     ">{#p/basic}* “我们家破人亡，生灵涂炭，\n   但这一切的起因是什么呢？”",
                     ">* “人类不会无缘无故攻击我们。”",
                     ">* “但是，我们潜在的力量\n   真的如此强大...”",
                     ">* “强大到可以对人类\n   造成实质威胁的地步吗？”",
                     ">* “不管真相如何，\n   此时我们已经走投无路，陷入绝境。”",
                     ">* “唯有投降，才有一丝生的希望。”",
                     ">{#p/human}* （你把书放回了书架。）"
                  ],
            () =>
               SAVE.data.b.svr
                  ? [
                     ">{#p/human}* (The books on this bookshelf consist of history, biology, and a foreboding possibility.)"
                  ]
                  : [
                     SAVE.data.n.state_wastelands_toriel === 2 || world.runaway
                        ? ">{#p/basic}* 一个书架。"
                        : ">{#p/basic}* 这是托丽尔的私人书架。",
                     ">{#p/human}* （你取下了一本书...）",
                     ">{#p/basic}* “‘王级怪物’出生时，\n   会与父母之间建立起一条魔法纽带。”",
                     ">* “靠着这条纽带，王级怪物\n   获得自己的灵魂，他的父母则会\n   随着孩子成长而逐渐衰老。”",
                     ">* “成年王级怪物的灵魂，\n   具有怪物界最强大的力量。”",
                     ">* “强大到足以在肉体死后\n   仍能短暂存续。”",
                     ">{#p/human}* （你把书放回了书架。）"
                  ],
            () =>
               SAVE.data.b.svr
                  ? [
                     ">{#p/human}* (The books on this bookshelf consist of history, biology, and a foreboding possibility.)"
                  ]
                  : [
                     SAVE.data.n.state_wastelands_toriel === 2 || world.runaway
                        ? ">{#p/basic}* 一个书架。"
                        : ">{#p/basic}* 这是托丽尔的私人书架。",
                     ">{#p/human}* （你取下了一本书...）",
                     ">{#p/basic}* “我们常常担心，面对人类突然袭击，\n   会是何种后果。”",
                     ">* “但却很少想过，倘若同胞自相残杀，\n   又该如何应对。",
                     ">* “即使联合起来，能否彻底平息叛乱，\n   仍是个未知数。”",
                     ">* “不过此等担忧，\n   或许只是杞人忧天？”",
                     ">{#p/human}* （你把书放回了书架。）"
                  ]
         ),
         w_tt_cactus: () =>
            SAVE.data.b.svr
               ? [">{#p/human}* (This cactus seems to remind you of someone you once knew.)"]
               : SAVE.data.n.plot < 72
                  ? world.darker
                     ? [">{#p/basic}* 终于，发现一株很像我们的植物。"]
                     : [">{#p/basic}* 啊，是仙人掌。\n* 确实是最傲娇的植物。"]
                  : [">{#p/basic}* It's not like this cactus was waiting for you to come back or anything..."],
         w_tt_chair: () =>
            SAVE.data.b.svr
               ? [">{#p/human}* (This chair appears to be a little small for the person who owns it.)"]
               : world.darker
                  ? [">{#p/basic}* 一把靠椅。"]
                  : SAVE.data.n.plot === 72
                     ? [
                        ">{#p/basic}* 托丽尔的专用阅读椅...",
                        ">* ... at least until Asgore decides he'd like it instead.",
                        ">* He's always wanted this chair.\n* I'd be surprised if he didn't take it with him."
                     ]
                     : [">{#p/basic}* 托丽尔的专用阅读椅。", ">* 懒骨头的味道扑面而来。"],
         w_tt_diary: pager.create(
            0,
            ...[
               [
                  ">{#p/human}* （你看了看圈起来的段落。）",
                  ">{#p/toriel}{#f/21}* “提问：为什么骷髅\n   想交朋友呢？”",
                  ">* “答案：因为他感觉很骨独...”",
                  ">{#p/basic}* 再往下的笑话也是同样的水准。"
               ],
               [
                  ">{#p/human}* （你看了看另一段。）",
                  ">{#p/toriel}{#f/21}* “提问：骷髅的坏习惯\n   又可以叫做什么？”",
                  ">* “答案：对髅空的追求...”",
                  ">{#p/basic}* 再读下去就没有意义了。"
               ],
               [
                  ">{#p/human}* （你看了看另一段。）",
                  ">{#p/toriel}{#f/21}* “提问：骷髅是怎么\n   跟别人道别的呢？”",
                  ">* “答案：骨德拜...”",
                  ">{#p/basic}* 这个感觉一点都不好笑。"
               ],
               [
                  ">{#p/human}* （你看了看另一段。）",
                  ">{#p/basic}* 这些蹩脚的双关笑话\n  你怎么看都不嫌多。",
                  ">{#p/toriel}{#f/21}* “提问：为什么骷髅睡觉时\n   会流口水？”",
                  ">* “答案：因为它正在做\n  ‘骨’感的梦...”",
                  ">{#p/basic}* 这笑话已经过时了..."
               ],
               [
                  ">{#p/human}* （你看了看另一段。）",
                  ">{#p/basic}* 你还是看不够这些\n  蹩脚的双关笑话。",
                  ">{#p/toriel}{#f/21}* “提问：骷髅打架之前\n   会说什么呢？”",
                  ">* “答案：我得好好从你骨里挑刺了...”",
                  ">{#p/basic}* 什么鬼？\n* 这个都不是双关了好吧！"
               ],
               [
                  ">{#p/human}* （你看了看另一段。）",
                  ">{#p/basic}* 我们的脑细胞要不够用了...",
                  ">{#p/toriel}{#f/21}* “‘有什么鸟事吗？’\n   一位骷髅问。”",
                  ">* “...鸟没有回答。”",
                  ">{#p/basic}* ...\n* 我没话可说了。"
               ],
               [
                  ">{#p/human}* （你看向书中最后的段落。）",
                  ">{#p/basic}* 嗯？\n* 这一段不是笑话...",
                  ">{#p/toriel}{#f/21}* “就在今天，\n   一个人类抵达了外域。”",
                  ">* 我相信衫斯能照看好这个人类，\n  但我不太想拿这事为难他...“",
                  ">* “而且...”",
                  ">* “前哨站其他地方都危险重重... \n   区区一个皇家哨兵，\n   真的能保护好人类吗？”",
                  ">* “希望这些疑虑随时间\n   烟消云散吧。”",
                  ">{#p/basic}* ..."
               ],
               [">{#p/human}* （再往后，就都是空白了。）"]
            ].map(
               lines => () =>
                  SAVE.data.b.svr
                     ? [">{#p/human}* (The diary seems to consist primarily of over-the-top skeleton puns.)"]
                     : SAVE.data.n.plot === 72
                        ? [
                           ">{#p/human}* （你读了读新写的段落。）",
                           ">{#p/toriel}{#f/21}* \"It seems my preconceptions about Asgore were incorrect.\"",
                           ">* \"In failing to confront him, I have failed to understand what was truly going on.\"",
                           ">* \"I was right in thinking I did not deserve to be a mother.\"",
                           ">* \"But perhaps now... I can learn what being a mother truly means.\"",
                           ">* \"I will need to think about this on my own.\""
                        ]
                        : SAVE.data.n.plot < 14 || SAVE.data.n.state_wastelands_toriel === 2 || world.runaway
                           ? world.darker
                              ? [">{#p/basic}* 这是托丽尔的日记，\n  你在里面找不到任何笑点。"]
                              : lines
                           : [
                              ">{#p/human}* （你读了读最近写的段落。）",
                              ...(world.edgy
                                 ? [">{#p/basic}* It's been scribbled out with a crayon."]
                                 : toriSV()
                                    ? [
                                       ">{#p/toriel}{#f/21}* “今天并不顺遂。”",
                                       ">* “又有一个人类失去了\n   我的照顾...”",
                                       ">* “他需要第七个，\n   也就是最后一个人类灵魂\n   来打破力场。”",
                                       ">* “我不应该允许\n   这样的事情发生。”",
                                       ">* “赌注如此之高，\n   冲突可能已经无法避免...”"
                                    ]
                                    : [
                                       ">{#p/toriel}{#f/21}* \"It has been an interesting day, to say the least.\"",
                                       ">* \"A human arrived...\"",
                                       ">* \"Then, tried to leave...\"",
                                       ">* \"And then, the strangest thing happened.\"",
                                       ">* \"A reminder I have been in need of for some time...\""
                                    ])
                           ]
            )
         ),
         w_tt_plant: () =>
            SAVE.data.b.svr
               ? [">{#p/human}* (This houseplant strikes you as exceedingly normal.)"]
               : [">{#p/basic}* 这是个盆栽。", ">* 有必要说别的吗？"],
         w_tt_trash: pager.create(
            0,
            () =>
               SAVE.data.b.svr
                  ? [">{#p/human}* (You can't make out what's in the trash...)"]
                  : world.darker
                     ? [">{#p/basic}* 蜗牛。"]
                     : SAVE.data.n.plot === 72
                        ? [">{#p/basic}* The snails are beginning to smell... ghostly.", ">* ... what could this mean?"]
                        : [
                           ">{#p/basic}* 这是托丽尔的私人垃圾桶，\n  里面有...",
                           ">* 蜗牛。",
                           ">* 更多的蜗牛。"
                        ],
            pager.create(
               1,
               () =>
                  SAVE.data.b.svr
                     ? [">{#p/human}* (You can't make out what's in the trash...)"]
                     : world.darker
                        ? [">{#p/basic}* 蜗牛。"]
                        : SAVE.data.n.plot === 72
                           ? [">{#p/basic}* 也许这就是蜗牛\n  过了保质期后的\n  生存方式。"]
                           : [">{#p/basic}* 除了蜗牛就没别的了。"],
               () =>
                  SAVE.data.b.svr
                     ? [">{#p/human}* (You can't make out what's in the trash...)"]
                     : world.darker
                        ? [">{#p/basic}* 蜗牛。"]
                        : SAVE.data.n.plot === 72
                           ? [">{#p/basic}* Or maybe I've just gone and lost it completely."]
                           : [">{#p/basic}* ...\n* 我刚刚说到了蜗牛吗？"],
               () =>
                  SAVE.data.b.svr
                     ? [">{#p/human}* (You can't make out what's in the trash...)"]
                     : world.darker
                        ? [">{#p/basic}* 蜗牛。"]
                        : SAVE.data.n.plot === 72
                           ? [">{#p/basic}* Or maybe...", ">* ... wait, what was I saying?"]
                           : [">{#p/basic}* 蜗牛。"],
               () =>
                  SAVE.data.b.svr
                     ? [">{#p/human}* (You can't make out what's in the trash...)"]
                     : world.darker
                        ? [">{#p/basic}* 蜗牛。"]
                        : SAVE.data.n.plot === 72
                           ? [">{#p/basic}* Oh, right.\n* The meaning of the snails' newfound ghostly scent."]
                           : [">* 更多的蜗牛。"]
            )
         ),
         w_tutorial_view: () =>
            SAVE.data.b.svr
               ? [">{#p/human}* (You stare excitedly into the cosmos beyond...)"]
               : world.darker
                  ? []
                  : [">{#p/basic}* 这是外域这一带的第一扇窗。"],
         w_tutorial1: () =>
            SAVE.data.b.svr
               ? [">{#p/human}* (The sign describes the qualities of a good relationship.)"]
               : [
                  ">{#p/basic}* “有了信任与善意，\n   方能携手并进，共筑友谊。”",
                  ...(world.goatbro && SAVE.flag.n.ga_asrielOutlands7++ < 1
                     ? [">{#p/asriel2}{#f/8}* 真是够矫情的。"]
                     : [])
               ]
      },
      piecheck: () =>
         SAVE.data.b.svr
            ? [
               [
                  ">{#p/asriel1}{#f/17}* Mom's pies were always the best...",
                  ">{#f/13}* I can still remember what the first one I ever had tasted like.",
                  ">{#f/15}* I'd never felt so happy to take a bite of something...",
                  ">{#f/17}* ... it was like I'd transcended to the next level of confection."
               ],
               [
                  ">{#p/asriel1}{#f/20}* Er, maybe I'm overselling it just a little.",
                  ">{#f/17}* But I'm telling you right now, Frisk...",
                  ">{#f/13}* ... no matter what happens with Mom and Dad...",
                  ">{#f/17}* You NEED to have her make one of her pies for me.",
                  ">{#f/20}* I'm... kind of curious if I'll still like it after all of this."
               ],
               [">{#p/asriel1}{#f/15}* It sure has been a while, huh..."]
            ][Math.min(asrielinter.piecheck++, 2)]
            : SAVE.data.n.plot < 8
               ? world.darker
                  ? [">{#p/basic}* It's just a countertop."]
                  : [">{#p/basic}* There is a nigh-invisible ring-shaped stain on the countertop."]
               : SAVE.data.n.state_wastelands_mash === 1 && SAVE.data.n.plot > 8
                  ? [">{#p/basic}* The ghost of a pie once smashed haunts the countertop."]
                  : SAVE.data.n.plot === 72
                     ? SAVE.data.n.state_wastelands_mash > 0
                        ? [">{#p/basic}* No amount of passed time will fix this atrocity."]
                        : SAVE.data.n.state_wastelands_toriel === 2
                           ? [">{#p/basic}* 一种强烈的念头阻止了你，\n  你只能让派保持原样。"]
                           : world.runaway
                              ? [
                                 ">{#p/basic}* You might have been a bully, but the pie remains untouched.",
                                 ">{#p/basic}* Perhaps some things are too sacred, even for you."
                              ]
                              : [
                                 world.meanie
                                    ? ">{#p/basic}* The pie may be intimidated by you, but after all this time..."
                                    : ">{#p/basic}* The size of the pie may no longer intimidate you, but after all this time...",
                                 ">{#p/basic}* You've gained a sense of respect for the pie that does not permit you to eat it."
                              ]
                     : SAVE.data.n.state_wastelands_mash > 0
                        ? [">{#p/basic}* 这里已经没有什么可做的了。"]
                        : SAVE.data.n.state_wastelands_toriel === 2
                           ? [">{#p/basic}* 一种强烈的念头阻止了你，\n  你只能让派保持原样。"]
                           : world.meanie
                              ? [
                                 ">{#p/basic}* 这个派的尺寸\n  根本吓不到你。",
                                 ">{#p/basic}* 事实上，\n  你可能都吓到它了...",
                                 choicer.create("* （要打烂它吗？）", "打烂", "算了")
                              ]
                              : [">{#p/basic}* 这个派的尺寸吓得你完全不敢吃它。"],
      piesmash1: [">{#p/human}* （你放了它一马。）"],
      piesmash2: [">{#p/human}* （你挥下了你的武器...）"],
      piesmash3: [">{#p/basic}* 派已经被彻底毁掉了。"],
      tutorial_puzzle1: [
         ">{#p/toriel}* 跟之前的不一样，\n  这个谜题稍稍有一些不同。",
         ">{#f/1}* 虽然不算特别常见，\n  但前哨站的一些谜题..."
      ],
      tutorial_puzzle2: [
         ">{#p/toriel}* ...需要另一个怪物的协助\n  才能解决。",
         ">{#f/1}* 你知道接下来该怎么办吗？"
      ],
      tutorial_puzzle2a: [">{#p/toriel}{#f/1}* 你知道接下来该怎么办吗？"],
      tutorial_puzzle3: [">{#p/toriel}* 非常好，小家伙！\n* 非常棒。"],
      tutorial_puzzle4: [">{#p/toriel}{#f/1}* 轮到你了..."],
      tutorial_puzzle4a: [">{#p/toriel}{#f/0}* 到你了。"],
      tutorial_puzzle5: [">{#p/toriel}* 干得漂亮！\n* 只剩下一道障碍了。"],
      tutorial_puzzle6: [">{#p/toriel}{#f/1}* 太棒了！\n* 孩子，你真令我骄傲！"],
      tutorial_puzzle7: [">{#p/toriel}* 等你准备好了，\n  我们就去下个房间，\n  我会教你下一项本领。"],
      tutorial_puzzle8a: [">{#p/toriel}* 答案不在我身上，小家伙。"],
      tutorial_puzzle8b: [">{#p/toriel}* 刚才怎么做的，\n  再做一次就好。"],
      tutorial_puzzle8c: [">{#p/toriel}{#f/1}* 试试看..."],
      twinkly1: [
         ">{#p/twinkly}{#f/5}* 哈喽！\n* 我叫{@fill=#ff0}闪闪{@fill=#fff}。\n* 星界的{@fill=#ff0}闪亮明星{@fill=#fff}！"
      ],
      twinkly2: [
         ">{#f/5}* 是哪阵风把你吹到\n  这前哨站来的呢，伙伴？",
         ">{#f/5}* ...",
         ">{#f/8}* 你是不是迷路了...",
         ">{#f/5}* 好啦，算你走运，\n  我会帮你的！",
         ">{#f/8}* 我最近不是很在状态，\n  不过...",
         ">{#f/5}* ...总得有人教你\n  这里的游戏规则！",
         ">{#f/10}* 看来，只能我闪闪献丑，\n  承担这个任务了。",
         ">{#f/5}* 我们开始吧，好吗？"
      ],
      twinkly3: [
         ">{#f/7}* 但你早就知道了，对吧？",
         ">{#f/8}* ...",
         ">{#f/5}* 不过，还得由我来给你\n  传授点经验。",
         ">* 准备好了吗？我们开始吧！"
      ],
      twinkly4: [
         ">{#p/twinkly}{#f/6}* 好了，我受够了。",
         ">{#f/8}* 你想一直重置下去，\n  那就随你的便...",
         ">{#f/6}* 你可以随便重置。",
         ">{#f/7}* 但别想轻易过我这关。"
      ],
      twinkly5: [">{#p/twinkly}{#f/6}* 你是闲得没别的事可做吗？"],
      twinkly6: [
         ">{#p/twinkly}{#f/6}* 刚挨了一击就马上重置，\n  是吧？",
         ">{#f/7}* 真是可悲。"
      ],
      twinkly6a: [
         ">{#p/twinkly}{#f/11}* 你以为我忘了你刚刚\n  干了什么吗？",
         ">{#f/7}* 肮脏的碎片闪避手。"
      ],
      twinkly7: [">{#p/twinkly}{#f/7}* 我能在这儿陪你玩一整天，\n  白痴。"],
      twinkly8: [">{#f/11}* 不过，既然你都知道接下来\n  会发生什么了...{%15}"],
      twinkly9: [
         ">{#p/twinkly}{#f/6}* 哈喽。",
         ">* 感觉我再待下去\n  就要引火上身了。",
         ">{#f/8}* 真是遗憾...",
         ">{#f/7}* 我本来想跟你好好玩玩的。",
         ">{#f/6}* ...",
         ">{#f/5}* Well, see ya!"
      ],
      twinkly9a: [
         ">{#p/twinkly}{#f/12}{#v/0}* What the HELL are you doing, $(name)?",
         ">{#f/12}{#v/0}* We had the outpost at our mercy!"
      ],
      twinkly9a1: [">{#f/6}{#v/0}* All we had to do was follow the plan."],
      twinkly9a2: [
         ">{#f/6}{#v/0}* All we had to do was get through the Foundry...",
         ">* Finish off the guards...",
         ">* And make it to the Citadel!"
      ],
      twinkly9a3: [
         ">{#f/6}{#v/0}* All we had to do was finish off the guards...",
         ">* And get through the Citadel!"
      ],
      twinkly9a4: [
         ">{#f/6}{#v/0}* All we had to do was KILL that stupid robot...",
         ">* And get through the Citadel!"
      ],
      twinkly9a5: [">{#f/6}{#v/0}* All we had to do was get through the Citadel!"],
      twinkly9a6: [">{#f/6}{#v/0}* All we had to do was KILL that nerdy trashbag!"],
      twinkly9a7: [">{#f/6}{#v/0}* All we had to do was walk to the end!", ">* We were so close!"],
      twinkly9a8: [">{#f/8}{#v/0}* 你个懦夫..."],
      twinkly9b: [
         ">{#p/twinkly}{#f/5}* $(name)...？",
         ">{#f/6}* I'm not really sure what just happened.",
         ">{#f/8}* We were on the shuttle, and then...",
         ">{#f/8}* ...",
         ">{#f/6}* I...",
         ">{#f/8}* I have to go..."
      ],
      twinkly9c: [
         ">{#p/twinkly}{#f/7}* So, we're back at the beginning, are we?",
         ">{#f/5}* I've been expecting you.\n* I wonder how you'll do this time around.",
         ">{#f/11}* Who knows?\n* Maybe it'll be easier for you now.",
         ">{#f/7}* It certainly was when I had your powers.",
         ">{#f/6}* ...",
         ">{#f/5}* Well, good luck!"
      ],
      twinkly10: [
         ">{#f/5}看见这颗心了吗？\n这是你的灵魂，\n是你生命的精华所在！",
         ">{#f/5}你的灵魂是你\n不可或缺的一部分，\n你需要LOVE来维持\n它的存在。"
      ],
      twinkly11: [
         ">{*}{#x2}{#f/5}在这太空，\nLOVE是通过...{#f/8}\n这些白色的...{#f/11}\n“幸福碎片”传递的。",
         ">{*}{#f/5}为了让你在正确的\n道路上启程，我会分你\n一点我自己的LOVE。",
         ">{*}{#f/5}能接多少就接多少！{^20}{*}{#x1}{%}"
      ],
      twinkly12: [
         ">{*}{#f/8}哦呦，\n看来你好像没接住...",
         ">{*}{#f/5}没关系！",
         ">{*}{#x2}{#f/10}来，我再送你点！{^20}{*}{#x1}{%}"
      ],
      twinkly13: [
         ">{*}{#f/12}搞什... \n你是脑残还是怎么着？？",
         ">{*}{#x2}给{^4} 我{^4} 撞{^4} 子弹！！！{^20}{*}{#x1}{^999}"
      ],
      twinkly14: "给 我 撞 幸福碎片~",
      twinkly15: [
         ">{#v/1}嘻嘻嘻...",
         ">在这个世界中...\n不是杀人就是被杀。",
         ">你该不会天真地以为，\n面对这自投罗网\n送上门来的灵魂...",
         ">我会蠢到放弃\n这大好机会吧？"
      ],
      twinkly16: [
         ">{#f/7}啧，你知道会发生什么，\n是不是？",
         ">你只想好好折磨一下\n楚楚可怜的闪闪，\n是不是？",
         ">天啦噜...\n你知道你惹的是谁吗？",
         ">{#f/11}嘻嘻嘻..."
      ],
      twinkly17: [">{#v/1}那么我们就直奔主题吧。", ">嘻嘻嘻..."],
      twinkly18: [">{*}{#f/2}{#v/1}{@random=1.1/1.1}死吧。{^20}{%}"],
      twinkly19: [">{#p/toriel}真是个残忍的家伙，\n居然折磨这么一个\n弱小无助的孩子..."],
      twinkly20: [
         ">不要害怕，孩子。",
         ">我是{@fill=#003cff}托丽尔{@fill=#000}，\n{@fill=#f00}外域{@fill=#000}的管理员。",
         ">我每天都会来看看\n有没有人被困在这里。",
         ">跟我来，孩子。\n我有很多东西要教你。"
      ],
      twinkly21: [
         ">{#p/toriel}{#f/1}* 哦我的天！\n* 你是从哪里来的，小家伙？",
         ">{#f/1}* 受伤了吗？",
         ">{#f/0}* ...\n* 请原谅我问了这么多问题。",
         ">{#f/0}* 我是{@fill=#003cff}托丽尔{@fill=#000}，\n  {@fill=#f00}外域{@fill=#000}的管理员。",
         ">{#f/0}* 我每天都会来看看\n  有没有人被困在这里。",
         ">{#f/0}* 跟我来，孩子。\n* 我有很多东西要教你。"
      ],
      twinkly22: [">{#f/0}* 跟我来。"],
      w_coffin0: () => [
         ">{#p/human}* （你觉得还是不要再看了。）",
         ...(SAVE.data.b.svr ? [">{#p/asriel1}{#f/13}* ..."] : [])
      ],
      w_coffin1: () => [
         ">{#p/basic}* 一口很旧的棺材，没什么特别的。",
         ...(world.goatbro && SAVE.flag.n.ga_asrielCoffin++ < 1
            ? [
               ">{#p/asriel2}{#f/13}* 哦，快看。\n* 他们还专门给你\n  做了口棺材呢，$(name)。",
               ">{#p/asriel2}{#f/5}* 真感动。"
            ]
            : [])
      ],
      w_coffin2: pager.create(
         0,
         () => [
            ">{#p/basic}* 这是一口早在251X年12月\n  就做好的棺材。",
            ">* 在它旁边，藏着一本\n  像是日记的小册子...",
            choicer.create("* （翻阅一下吗？）", "是", "否")
         ],
         () => [
            ">{#p/human}* （你又捡起了那本小册子。）",
            choicer.create("* （翻阅一下吗？）", "是", "否")
         ]
      ),
      w_coffin3: () => [choicer.create("* （看下一页？）", "是", "否")],
      w_coffin4: [">{#p/human}* （然而，这页之后什么都没有了。）"],
      w_coffin5: [">{#p/human}* （你把册子放回了原处。）"],
      w_dummy1: () =>
         SAVE.data.b.svr
            ? [">{#p/human}* (You place your hands on the dummy.)\n* (It seems very worn out.)"]
            : [">{#p/basic}* 一个标准规格的训练人偶，皇家出品。\n* 大约于251X年制成。"],
      wonder1: [
         ">{#p/basic}* 你听到了\n* 那来自群星的歌声了吗？",
         ">* 这歌声在前哨站的诸多地方响彻。\n  这里，便是其中一处...",
         ">* 你只需要，去聆听。",
         ">* Pretty cool, right?"
      ]
   },

   b_group_outlands: {
      froggitWhimsun: [">{#p/story}* 太空青蛙和星际飞虫！\n* 或者跟这差不多的东西。"],
      froggitWhimsun2a: [">{#p/story}* 太空青蛙...？"],
      froggitWhimsun2b: [">{#p/story}* 星际飞虫...？"],
      looxMigospWhimsun: [">{#p/story}* 挑事三人组来了！"],
      looxMigospWhimsun2: [">{#p/story}* 三人组变成两人组了。"],
      looxMigospWhimsun3: [">{#p/story}* 现在，只剩一个了。"],
      moldsmalMigosp: [">{#p/story}* Silente和他的同伙一同现身了！"]
   },

   b_opponent_froggit: {
      act_check: [">{#p/story}* 蛙吉特 - 攻击4 防御5\n* 这只怪物的生活并不轻松。"],
      act_check2: [">{#p/story}* 蛙吉特 - 攻击4 防御5\n* 这只怪物的生活逐渐向好。"],
      act_check3: [">{#p/story}* 蛙吉特 - 攻击4 防御5\n* 这只怪物的生活仍不好过。"],
      act_check4: [">{#p/story}* 蛙吉特 - 攻击4 防御5\n* 这只怪物的生活浑浑噩噩。"],
      act_check5: [">{#p/story}* 蛙吉特 - 攻击4 防御5\n* 这只怪物的生活颇为惬意。"],
      act_threat: [
         ">{#p/human}* （你对蛙吉特发出威胁。）",
         ">{#p/basic}* 但蛙吉特并不明白你在说什么..."
      ],
      act_threat2: [
         ">{#p/human}* （你再一次对蛙吉特发出威胁。）",
         ">{#p/basic}* 蛙吉特想起了\n  你先前的恐吓，\n  决定撒腿跑路。"
      ],
      act_compliment: [
         ">{#p/human}* （你称赞了蛙吉特一番。）",
         ">{#p/basic}* 但蛙吉特并不明白你在说什么..."
      ],
      act_flirt: [
         ">{#p/human}* （你对蛙吉特调情。）",
         ">{#p/basic}* 但蛙吉特并不明白你在说什么..."
      ],
      act_translate0: [">{#p/human}* （但你还什么都没说，没法翻译。）"],
      act_translate1: [
         ">{#p/human}* （你把你想说的话翻译了一下。）\n* （蛙吉特好像听懂你在说什么了。）",
         ">{#p/basic}* 蛙吉特受宠若惊。"
      ],
      act_translate1x: [
         ">{#p/human}* （你把你想说的话翻译了一下。）\n* （蛙吉特好像听懂你在说什么了。）",
         ">{#p/basic}* 蛙吉特犹豫该不该继续战斗下去。"
      ],
      act_translate1y: [
         ">{#p/human}* （你把你想说的话翻译了一下。）\n* （蛙吉特好像听懂你在说什么了。）",
         ">* 在巨大胁迫下，蛙吉特转头就跑了！"
      ],
      act_translate1z: [
         ">{#p/human}* （你把你想说的话翻译了一下。）\n* （蛙吉特好像听懂你在说什么了。）",
         ">{#p/basic}* 蛙吉特面不改色，毫无畏惧之情。"
      ],
      act_translate2: [
         ">{#p/human}* （你把你想说的话翻译了一下。）\n* （蛙吉特好像听懂你在说什么了。）",
         ">{#p/basic}* 蛙吉特脸红了，\n  虽然只是在内心里。"
      ],
      confuseText: [">{#p/basic}{~}呱呱，\n呱呱？"],
      flirtText: [">{#p/basic}{~}（脸涨得\n通红。）\n呱呱.."],
      idleText1: [">{#p/basic}{~}呱呱，\n呱呱。"],
      idleText2: [">{#p/basic}{~}咕呱，\n咕呱。"],
      idleText3: [">{#p/basic}{~}跳跳，\n跳跳。"],
      idleText4: [">{#p/basic}{~}喵。"],
      mercyStatus: [">{#p/story}* 蛙吉特似乎不愿意和你战斗了。"],
      name: "* 蛙吉特",
      meanText: [">{#p/basic}{~}（缩缩，\n抖抖。）\n呱呱.."],
      niceText: [">{#p/basic}{~}（脸微微\n泛红。）\n呱呱.."],
      perilStatus: [">{#p/story}* 蛙吉特正试图逃跑。"],
      status1: [">{#p/story}* 蛙吉特蹦了过来！"],
      status2: [">{#p/story}* 战场弥漫着曜菊的芬芳。"],
      status3: [">{#p/story}* 蛙吉特看起来并不知道\n  自己为什么在这里。"],
      status4: [">{#p/story}* 蛙吉特跳来跳去。"]
   },
   b_opponent_whimsun: {
      act_check: [">{#p/story}* FLUTTERLYTE - 攻击5 防御0\n* 这只怪物才刚学会飞..."],
      act_check2: [">{#p/story}* FLUTTERLYTE - 攻击5 防御0\n* 这只怪物后悔学习飞翔了。"],
      act_console: [
         ">{#p/human}* （你帮Flutterlyte飞得更高。）",
         ">{#p/basic}* Flutterlyte很感谢你，\n  然后飞走了..."
      ],
      act_flirt: [
         ">{#p/human}* （你对Flutterlyte调情。）",
         ">{#p/basic}* Flutterlyte无法接受你的赞美，\n  泪流满面地飞走了..."
      ],
      act_terrorize: [
         ">{#p/human}* （你呲牙咧嘴，\n  发出一阵鬼哭狼嚎。）",
         ">{#p/basic}* Flutterlyte吓坏了，\n  赶忙飞走了。"
      ],
      idleTalk1: [">{#p/basic}{~}为什么\n这么难.."],
      idleTalk2: [">{#p/basic}{~}请帮帮\n我.."],
      idleTalk3: [">{#p/basic}{~}我好怕.."],
      idleTalk4: [">{#p/basic}{~}我做\n不到..."],
      idleTalk5: [">{#p/basic}{~}\x00*呜呜*\n*呜呜*"],
      name: "* Flutterlyte",
      perilStatus: [">{#p/story}* Flutterlyte快要从空中掉下来了。"],
      status1: [">{#p/story}* Flutterlyte飘飘悠悠地飞了过来！"],
      status2: [">{#p/story}* * Flutterlyte继续咕哝着道歉。"],
      status3: [">{#p/story}* Flutterlyte悠悠地徘徊。"],
      status4: [">{#p/story}* 空气中弥漫着\n  新鲜桃子的香味。"],
      status5: [">{#p/story}* Flutterlyte气喘吁吁。"],
      status6: [">{#p/story}* Flutterlyte眼神闪躲。"]
   },
   b_opponent_loox: {
      act_check: [">{#p/story}* OCULOUX - 攻击6 防御6\n* 瞪大眼行家。\n* 姓：眼行家"],
      act_check2: [
         ">{#p/story}* OCULOUX - 攻击6 防御6\n* 这个恶霸很努力地\n  假装没有受宠若惊。"
      ],
      act_check3: [">{#p/story}* OCULOUX - 攻击6 防御6\n* 这只怪物很荣幸\n  能出现在你的视线里。"],
      act_dontpick: [
         ">{#p/human}* （你紧盯着Oculoux。）\n* （Oculoux更紧地向你盯了回去。）",
         ">{#p/human}* （Oculoux的眼睛越盯越紧，\n  最后它...）",
         ">{#p/human}* （...承受不住，屈服了。）"
      ],
      act_flirt: [">{#p/human}* （你对Oculoux调情。）"],
      act_pick: [">{#p/human}* （你粗鲁地告诫Oculoux\n  不要盯着别人看。）"],
      checkTalk1: [">{#p/basic}{~}你敢盯着\n看吗？"],
      dontDeny1: [">{#p/basic}{~}看看谁\n变卦了。"],
      dontTalk1: [">{#p/basic}{~}这货还\n真挺能\n盯的。"],
      flirtDeny1: [">{#p/basic}{~}你还挺\n傲娇。"],
      flirtTalk1: [">{#p/basic}{~}啥？\n没-没门！"],
      hurtStatus: [">{#p/story}* Oculoux在流泪。"],
      idleTalk1: [">{#p/basic}{~}我就盯着\n你了。"],
      idleTalk2: [">{#p/basic}{~}别告诉我\n我该怎么\n做。"],
      idleTalk3: [">{#p/basic}{~}盯着你\n意味着\n在意你。"],
      idleTalk4: [">{#p/basic}{~}真碍眼。"],
      idleTalk5: [">{#p/basic}{~}来个\n盯人比赛\n如何？"],
      name: "* Oculoux",
      pickTalk1: [">{#p/basic}{~}你怎么敢\n质疑我们的\n生活方式！"],
      spareStatus: [">{#p/story}* Oculoux完全不想战斗了。"],
      status1: [">{#p/story}* 一对Oculoux向你走来！"],
      status2: [">{#p/story}* Oculoux紧盯着你看。"],
      status3: [">{#p/story}* Oculoux咬牙切齿。"],
      status4: [">{#p/story}* 闻起来像眼药水。"],
      status5: [">{#p/story}* Oculoux充血了。"],
      status6: [">{#p/story}* Oculoux正凝视着你。"],
      status7: [">{#p/story}* Oculoux现在孤身一人了。"]
   },
   b_opponent_migosp: {
      act_check: [">{#p/story}* SILENTE - 攻击7 防御5\n* 它看起来很邪恶，但其实\n  只是被集体意识冲昏了头脑。"],
      act_check2: [">{#p/story}* SILENTE - 攻击7 防御5\n* 现在它独自一人，\n  开心地以舞明志。"],
      act_check3: [">{#p/story}* SILENTE - 攻击7 防御5\n* 它感觉和你在一起很舒服。\n* 特别舒服。"],
      act_check4: [">{#p/story}* SILENTE - 攻击7 防御5\n* 尽管它表现得很坚强，\n  但一看就知道很痛苦..."],
      act_flirt: [">{#p/human}* （你对Silente调情。）"],
      flirtTalk: [">{#p/basic}{~}嗨呀~"],
      groupInsult: [">{#p/human}* （你骂了Silente几句，\n  但它正忙着拉拢其他怪物，\n  没听到你的话。）"],
      groupStatus1: [">{#p/story}* Silente在跟别人说悄悄话。"],
      groupStatus2: [">{#p/story}* 闻起来逐渐像蟑螂屋的味道了。"],
      groupTalk1: [">{#p/basic}肮脏卑鄙，\n一心一意\n.."],
      groupTalk2: [">{#p/basic}服从于\n无上主宰\n.."],
      groupTalk3: [">{#p/basic}军团！\n我们是\n军团！"],
      groupTalk4: [">{#p/basic}当心虫群\n.."],
      groupTalk5: [">{#p/basic}现在，\n保持一致\n.."],
      groupTalk6: [">{#p/basic}我不在乎。"],
      name: "* Silente",
      perilStatus: [">{#p/story}* Silente不打算放弃。"],
      soloInsult: [">{#p/human}* （你打算辱骂Silente，\n  但它太开心了，根本不在乎。）"],
      soloStatus: [">{#p/story}* Silente在这宇宙中无忧无虑。"],
      soloTalk1: [">{#p/basic}{~}做自己\n才是\n最好的！"],
      soloTalk2: [">{#p/basic}{~}啦啦~\n做自己\n就好~"],
      soloTalk3: [">{#p/basic}{~}独处时间\n最棒了！"],
      soloTalk4: [">{#p/basic}{~}呣，\n恰恰恰！"],
      soloTalk5: [">{#p/basic}{~}挥动你的\n手臂，宝贝~"]
   },
   b_opponent_mushy: {
      act_challenge: [
         ">{#p/human}* （你向蘑西发起决斗挑战。）",
         ">{#p/story}* 蘑西本回合的攻击速度加快！"
      ],
      act_check: [">{#p/story}* 蘑西 - 攻击6 防御6\n* 是星际牛仔的忠实粉丝。\n  也是一位枪术高手。"],
      act_check2: [">{#p/story}* 蘑西 - 攻击6 防御6\n* 是星际牛仔的忠实粉丝。\n  包括性感牛仔。"],
      act_check3: [">{#p/story}* 蘑西 - 攻击6 防御6\n* 在拼尽全力之后，\n  这个枪手对你的印象\n  已是刻骨铭心。"],
      act_flirt: [">{#p/human}* （你向蘑西调情。）"],
      act_taunt: [">{#p/human}* （你对着蘑西一通嘲讽。）"],
      challengeStatus: [">{#p/story}* 蘑西正等着你的下个挑战。"],
      challengeTalk1: [">{#p/basic}{~}让我\n见识一下\n你有什么\n能耐。"],
      challengeTalk2: [">{#p/basic}{~}是想着\n要把我\n打败吗？"],
      flirtStatus1: [">{#p/story}* 蘑西既困惑又兴奋。"],
      flirtTalk1: [">{#p/basic}{~}嘿，\n别-别闹了！"],
      hurtStatus: [">{#p/story}* 蘑西准备拼死一搏。"],
      idleTalk1: [">{#p/basic}{~}砰！\n砰！\n砰！"],
      idleTalk2: [">{#p/basic}{~}上马！"],
      idleTalk3: [">{#p/basic}{~}不足为惧。"],
      name: "* 蘑西",
      spareStatus: [">{#p/story}* 蘑西浅鞠一躬，以表敬意。"],
      status1: [">{#p/story}* 刹那间，蘑西已至！"],
      status2: [">{#p/story}* 蘑西稍微调整了一下姿势。"],
      status3: [">{#p/story}* 蘑西正为这场盛大的对决做准备。"],
      status4: [">{#p/story}* 蘑西伸手向腰，直奔枪套。"],
      status5: [">{#p/story}* 闻起来像雨后泥土的气息。"],
      tauntStatus1: [">{#p/story}* 蘑西假装没听到你的嘲讽。"],
      tauntTalk1: [">{#p/basic}{~}雕虫小技，\n能奈我何？"]
   },
   b_opponent_napstablook: {
      act_check: [">{#p/story}* 纳普斯特 - 攻击10 防御255\n* 这位是纳普斯特。"],
      act_check2: [
         ">{#p/story}* 纳普斯特 - 攻击10 防御255\n* 看起来它完全不想呆在这里。"
      ],
      act_check3: [">{#p/story}* 纳普斯特 - 攻击10 防御255\n* 已经有许久没像这样感到希望了..."],
      act_check4: [">{#p/story}* 纳普斯特 - 攻击10 防御255\n* 浪漫的紧张气氛空前高涨。"],
      awkwardTalk: [">{#p/napstablook}{~}呃..."],
      checkTalk: [">{#p/napstablook}{~}是我..."],
      cheer0: [">{#p/human}* （你试图安慰纳普斯特。）"],
      cheer1: [">{#p/human}* （你给纳普斯特一个\n  耐心的微笑。）"],
      cheer2: [">{#p/human}* （你给纳普斯特讲了一个\n  小小的笑话。）"],
      cheer3: [">{#p/human}* （你赞美纳普斯特的大礼帽。）"],
      cheerTalk1: [">{#p/napstablook}{~}...？"],
      cheerTalk2: [">{#p/napstablook}{~}嘿嘿..."],
      cheerTalk3: [
         ">{*}{#p/napstablook}{~}让我{#x1}试试...{^20}{#x2}{^20}{%}",
         ">{*}{#p/napstablook}{~}我管这个叫{#x3}\n“纳普斯文”{^40}{%}",
         ">{*}{#p/napstablook}{~}你喜欢吗？{^40}{%}"
      ],
      cheerTalk4: [">{#p/napstablook}{~}哦天啊....."],
      consoleTalk1: [">{#p/napstablook}{~}是啊，是啊..."],
      consoleTalk2: [">{#p/napstablook}{~}不信..."],
      consoleTalk3: [">{#p/napstablook}{~}你并不感到\n抱歉..."],
      deadTalk: [
         ">{#p/napstablook}{~}嗯... 你知道\n你没办法杀死\n鬼魂，对吧...",
         ">{~}我们没有实体\n之类的",
         ">{~}我降低我的hp\n只是不希望我\n显得太粗鲁",
         ">{~}对不起...\n我把事情变得\n更尴尬了...",
         ">{~}假装你把我\n打败了吧...",
         ">{~}哦哦哦哦哦"
      ],
      flirt1: [">{#p/human}* （你对纳普斯特调情。）"],
      flirt2: [">{#p/human}* （你向纳普斯特用\n  最好的方式搭讪。）"],
      flirt3: [">{#p/human}* （你由衷地夸赞纳普斯特。）"],
      flirt4: [">{#p/human}* （你向纳普斯特表露\n  你对它的感觉。）"],
      flirtTalk1: [">{#p/napstablook}{~}我只会\n拖累你"],
      flirtTalk2: [">{#p/napstablook}{~}哦.....\n我听过这个....."],
      flirtTalk3: [">{#p/napstablook}{~}呃... 你真\n这样想吗？"],
      flirtTalk4: [">{#p/napstablook}{~}哦，你是\n认真的...", ">{~}哦不....."],
      idleTalk1: [">{#p/napstablook}{~}我很好，谢谢"],
      idleTalk2: [">{#p/napstablook}{~}再坚持下..."],
      idleTalk3: [">{#p/napstablook}{~}只是做我\n该做的事..."],
      insultTalk1: [">{#p/napstablook}{~}我就知道..."],
      insultTalk2: [">{#p/napstablook}{~}随便了..."],
      insultTalk3: [">{#p/napstablook}{~}随你\n怎么说..."],
      insultTalk4: [">{#p/napstablook}{~}尽情\n发泄吧..."],
      name: "* 纳普斯特",
      silentTalk: [">{#p/napstablook}{~}..."],
      sincere: [">{#p/human}* （你对纳普斯特的大礼帽\n  发表了暧昧的评论。）"],
      sincereTalk: [">{#p/napstablook}{~}嘿... 谢谢"],
      status1: [">{#p/story}* 纳普斯特来了。"],
      status2: [">{#p/story}* 纳普斯特看起来好受了一点。"],
      status3: [">{#p/story}* 纳普斯特想给你展示些什么。"],
      status3a: [">{#p/story}* 纳普斯特等待着你的回应。"],
      status4: [">{#p/story}* 纳普斯特的眼睛闪闪发光。"],
      status5: [">{#p/story}* 纳普斯特显然不确定\n  该怎么应对这种情况。"],
      status5a: [">{#p/story}* 纳普斯特正在质疑自己的存在。"],
      status6: [">{#p/story}* 纳普斯特正在伺机而动。"],
      status7: [">{#p/story}* 纳普斯特正在等待\n  你下一步的行动。"],
      status8: [">{#p/story}* 纳普斯特正凝视着远方。"],
      status9: [">{#p/story}* 纳普斯特希望它自己不在这里。"],
      status10: [">{#p/story}* 纳普斯特正在尽力将你忽视。"],
      suck: [">{#p/human}* （你告诉纳普斯特\n  它的帽子很难看。）"],
      threat: [">{#p/human}* （你威胁纳普斯特。）"]
   },
   b_opponent_toriel: {
      spannerText: [">{#p/human}* （你把扳手丢了出去。）\n* （托丽尔捡起扳手，还给了你。）"],
      spannerTalk: [">{#p/toriel}{#f/22}孩子，扔扳手\n解决不了\n任何问题。"],
      spannerTalkRepeat: [">{#p/toriel}{#f/22}..."],
      act_check: [">{#p/story}* 托丽尔 - 攻击80 防御80\n* 最了解你的人。"],
      act_check2: [">{#p/story}* 托丽尔 - 攻击80 防御80\n* 看起来有所克制。"],
      act_check3: [">{#p/story}* 托丽尔 - 攻击80 防御80\n* 看起来心不在焉。"],
      act_check4: [">{#p/story}* 托丽尔 - 攻击80 防御80\n* 只想把最好的给你。"],
      act_check5: [">{#p/story}* 托丽尔 - 攻击80 防御80\n* 觉得你很“天真可爱”。"],
      precrime: [">{#p/asriel2}..."],
      criminal1: (reveal: boolean) => [
         ">{#p/asriel2}{#f/3}哈喽，$(name)。",
         ">{#f/1}重获新生的感觉\n真是太棒了。",
         ">{#f/2}为啥露出那副表情？\n没想到我会回来吗？",
         ">{#f/13}...\n其实，$(name)...",
         ...(reveal
            ? [">{#f/1}这一刻，\n我等了好久。"]
            : [
               ">{#f/15}我一直被困在\n那颗星星里，\n我...",
               ">{#f/15}...",
               ">{#f/16}罢了，\n先不说这个。",
               ">{#f/1}眼前，最重要的是，\n一切终于重回正轨了。"
            ]),
         ">{#f/1}嘻嘻嘻...",
         ">{#f/2}我知道你的内在是\n空虚的，就像我一样。",
         ">{#f/5}过了这么多年，\n我们之间的纽带\n依然无法分割...",
         ">{#f/1}听着，我有个计划，\n能让我们变得亲密无间。",
         ">{#f/1}有了你和我的力量，\n再加上一起偷来的\n灵魂...",
         ">{#f/1}我们就能一举摧毁\n这该死前哨站的一切。",
         ">{#f/2}让我们把胆敢阻拦我们\n走向美好未来的家伙...",
         ">{#f/1}都变为尘埃吧。"
      ],
      criminal2: [">{#p/asriel2}{#f/3}欢迎回来，$(name)。", ">{#f/1}准备好再大干一番了吗？"],
      criminal3: [">{#p/asriel2}{#f/3}那么...", ">{#f/3}...", ">{#f/4}出发吧。"],
      cutscene1: [
         ">{#p/basic}* 也许是因为...\n  只有我说的话，你才听得进去吧。",
         ">{#p/toriel}{#f/16}* ...！？",
         ">{#p/basic}* 但我一个天真懵懂的小孩，\n  能讲出什么大道理呢？"
      ],
      cutscene2: [
         ">{#p/toriel}{#f/3}* ...",
         ">{#p/toriel}{#f/4}* 不可能...",
         ">{#f/0}* 我是不是没睡醒，\n  还是出现幻觉了？\n* 或者...",
         ">{#p/basic}* 不。",
         ">{#p/basic}* 这里，就是现实。",
         ">{#p/toriel}{#f/5}* 但你不是早就死了吗，\n  $(name)？",
         ">{#f/5}* 你绝对不可能\n  像这样开口说话。",
         ">{#p/basic}* 你要是还接受不了...",
         ">{#p/basic}* 就把这当成一场梦吧。",
         ">{#p/toriel}{#f/5}* ...",
         ">{#p/toriel}{#f/9}* 你想说什么？",
         ">{#p/basic}* 托丽尔...",
         ">{#p/basic}* 你应该知道\n  我对人类是什么态度吧？",
         ">{#p/toriel}{#f/13}* 知道。",
         ">{#p/basic}* 你不知道。",
         ">{#p/basic}* ...我对这个人类可不是那态度。",
         ">* 自从这个孩子坠落于此，\n  我就一直跟着他...",
         ">* 刚刚，这孩子求我帮忙，\n  让我说服你。",
         ">* 你明白，这意味着什么吗？",
         ">{#p/toriel}{#f/13}* ...",
         ">{#p/basic}* 这意味着\n  你应该马上放这孩子走。",
         ">{#p/toriel}{#f/12}* ...你不知道外面多危险吗？",
         ">{#f/11}* 我要是心软，\n  那孩子肯定会死在外头。",
         ">{#p/basic}* ...好好想想。",
         ">{#p/basic}* 你根本不是因为这个\n  才不让他走，对吧？",
         ">{#p/toriel}{#f/12}* 这股叛逆的劲\n  倒真像$(name)。",
         ">{#p/toriel}{#f/11}* 你老是爱挑战我的权威。",
         ">{#p/basic}* 因为我够格。",
         ">{#p/basic}* 你是自己害怕外域之外的未知，\n  所以才想把那孩子留在这，对吧？",
         ">{#p/basic}* 但是，过了一百年，\n  外面的世界早就不一样了。",
         ">{#p/basic}* 你不敢走出去看看，画地为牢。\n  才对这些视而不见。",
         ">{#p/toriel}{#f/13}* ...",
         ">{#p/toriel}{#f/13}* ...但我要是放这孩子走，\n  就没法...",
         ">{#p/basic}* 陪伴他，保护他了？",
         ">{#p/basic}* 呵，我明白那是什么滋味。",
         ">{#p/basic}* 但是，把那孩子\n  强行束缚在这一亩三分地，\n  他也会活不下去。",
         ">{#p/basic}* 不做点有意义的事，\n  那活着还有什么意义？",
         ">{#p/toriel}{#f/13}* ...",
         ">{#p/toriel}{#f/13}* $(name)，我...",
         ">{#p/basic}* 你之前不是给过这孩子\n  一部手机吗？",
         ">{#p/basic}* 别切断联络，保持电话畅通。\n  那孩子会给你打电话的。",
         ">{#p/toriel}{#f/9}* ...那你呢？",
         ">{#p/basic}* 别担心我。\n* 我没事的。",
         ">{#p/basic}* 我只希望，那孩子走后，\n  一定，一定不要忘了他。",
         ">{#p/toriel}{#f/13}* ...",
         ">{#p/basic}* 再见，托丽尔。",
         ">{#p/toriel}{#f/14}* ...再见，$(name)。"
      ],
      death1: [
         ">{#p/toriel}{#f/21}{#v/1}{#i/6}{#x1}{@random=1.1/1.1}呃啊...",
         ">{#v/1}{#i/6}{#x1}{@random=1.1/1.1}趁我\n毫无防备时\n杀了我...",
         ">{#v/1}{#i/6}{#x1}{@random=1.1/1.1}...",
         ">{#v/2}{#i/9}{#x2}{@random=1.1/1.1}哈...\n哈...",
         ">{#v/2}{#i/9}{#x2}{@random=1.1/1.1}现在看来，\n年轻人...",
         ">{#v/3}{#i/12}{#x2}{@random=1.2/1.2}一路上一直\n相信你的我，\n才是真正的\n傻子啊..."
      ],
      death2: [
         ">{#p/toriel}{#f/21}{#v/1}{#i/6}{#x1}{@random=1.1/1.1}呃啊...",
         ">{#v/1}{#i/6}{#x3}{@random=1.1/1.1}本以为，\n自己努力\n保护的人，\n是你...",
         ">{#v/1}{#i/6}{#x4}{@random=1.1/1.1}...",
         ">{#v/2}{#i/9}{#x2}{@random=1.1/1.1}哈...\n哈...",
         ">{#v/2}{#i/9}{#x1}{@random=1.1/1.1}现在看来，\n年轻人...",
         ">{#v/3}{#i/12}{#x2}{@random=1.2/1.2}我真正\n保护的，\n是他们啊..."
      ],
      death3: [
         ">{#p/toriel}{#f/21}{#v/1}{#i/6}{#x1}{@random=1.1/1.1}呃啊...",
         ">{#v/1}{#i/6}{#x1}{@random=1.1/1.1}没想到，\n你这么强...",
         ">{#v/1}{#i/6}{#x3}{@random=1.1/1.1}听我说，\n孩子...",
         ">{#v/1}{#i/6}{#x3}{@random=1.1/1.1}很快，\n我就会变成\n一堆灰烬...",
         ">{#v/1}{#i/6}{#x3}{@random=1.1/1.1}到那时，\n请你... \n马上吸收\n我的灵魂。",
         ">{#v/1}{#i/6}{#x1}{@random=1.1/1.1}只有这样...\n你才能\n逃出这里。",
         ">{#v/2}{#i/9}{#x3}{@random=1.1/1.1}绝不能...\n让... \n艾斯戈尔...\n计划得逞...",
         ">{#v/2}{#i/9}{#x1}{@random=1.1/1.1}...",
         ">{#v/3}{#i/12}{#x2}{@random=1.2/1.2}孩子...",
         ">{#v/3}{#i/12}{#x4}{@random=1.2/1.2}要乖啊... \n好吗？"
      ],
      magic1: [">{#p/asriel2}{#f/3}跟我来。"],
      name: "* 托丽尔",
      spareTalk1: [">{#p/toriel}{#f/11}..."],
      spareTalk2: [">{#p/toriel}{#f/11}...\n..."],
      spareTalk3: [">{#p/toriel}{#f/11}...\n...\n..."],
      spareTalk4: [">{#p/toriel}{#f/17}...？"],
      spareTalk5: [">{#p/toriel}{#f/17}你这是\n在做什么？"],
      spareTalk6: [">{#p/toriel}{#f/17}..."],
      spareTalk7: [">{#p/toriel}{#f/17}你这样做，\n究竟想\n证明什么？"],
      spareTalk8: [">{#p/toriel}{#f/17}..."],
      spareTalk9: [">{#p/toriel}{#f/12}要么战斗，\n要么离开！"],
      spareTalk10: [">{#p/toriel}{#f/12}不要用\n那种眼神看我！"],
      spareTalk11: [">{#p/toriel}{#f/12}走开！"],
      spareTalk12: [">{#p/toriel}{#f/13}..."],
      spareTalk13: [">{#p/toriel}{#f/13}...\n..."],
      spareTalk14: [">{#p/toriel}{#f/13}...\n...\n..."],
      spareTalk15: [
         ">{#p/toriel}{#f/13}我明白\n你想要回家\n的心情...",
         ">{#p/toriel}{#f/9}但是，\n你可能会在\n途中丧命。"
      ],
      spareTalk16: [">{#p/toriel}{#f/14}所以... 求你\n现在回去吧。"],
      spareTalk17: [
         ">{#p/toriel}{#f/13}我知道这里\n没有多少\n东西...",
         ">{#p/toriel}{#f/10}但我们\n仍可以幸福\n生活下去。"
      ],
      spareTalk18: [
         ">{#p/toriel}{#f/13}有你有我，\n就像\n一家人一样...",
         ">{#p/toriel}{#f/10}这样生活\n不好吗？"
      ],
      spareTalk19: [">{#p/toriel}{#f/21}..."],
      spareTalk20: [">{#p/toriel}{#f/18}你为什么\n要让事情变得\n这么难办呢？"],
      spareTalk21: [">{#p/toriel}{#f/21}..."],
      spareTalk22: [">{#p/toriel}{#f/18}求你了，\n回去吧...", ">{#p/toriel}{#f/9}回到我们的\n房间去吧。"],
      spareTalk23: [">{#p/toriel}{#f/21}..."],
      spareTalk24: [">{#p/toriel}{#f/18}哦，孩子..."],
      spareTalk28b: [
         ">{#p/toriel}{#f/9}也许\n真正糊涂的\n是我...",
         ">{#f/13}用这种方法\n试图阻止你...",
         ">{#f/9}也许我应该\n让你走。"
      ],
      spareTalk28c: [">{#p/toriel}{#f/17}...？", ">{#f/17}你为什么喊\n“$(name)”\n的名字呢？"],
      status1: [">{#p/story}* 托丽尔现在正站在你面前。"],
      status2: [">{#p/story}* 托丽尔准备着魔法攻击。"],
      status3: [">{#p/story}* 托丽尔表现得很冷漠。"],
      status4: [">{#p/story}* 托丽尔看穿了你。"],
      status5: [">{#p/story}* ..."],
      assistStatus: [">{#p/basic}* 肯定有其他办法的..."],
      talk1: [">{#p/human}* （你请求托丽尔让你过去。）\n* （没有效果。）"],
      talk2: [">{#p/human}* （你问托丽尔为什么要这么做。）\n* （她的身体轻轻颤抖了一下。）"],
      talk3: [">{#p/human}* （你求托丽尔停下。）\n* （她犹豫了。）"],
      talk4: [
         ">{#p/human}* （你再次求托丽尔停下。）",
         ">{#p/basic}* ...也许这么做对她来说风险太大了。"
      ],
      talk5: [">{#p/human}* （你冲托丽尔大喊。）\n* （她闭上眼睛，深吸一口气。）"],
      talk6: [
         ">{#p/human}* （你再次冲托丽尔大喊。）",
         ">{#p/basic}* ...或许交谈并不能有什么进展。"
      ],
      talk7: [">{#p/human}* （但你想不到什么别的话可说。）"],
      talk8: [">{#p/human}* （但这么做已经没有意义了。）"],
      theft: [">{*}{#p/twinkly}归我了。{^15}{%}"]
   },

   c_name_outlands: {
      hello: "打招呼",
      about: "介绍下自己",
      mom: "叫她“妈妈”",
      flirt: "调情",
      toriel: "托丽尔的手机",
      puzzle: "解谜提示",
      insult: "辱骂"
   },

   c_call_outlands: {
      about1: [
         ">{#p/toriel}{#f/1}* 你是想更深入的了解我...\n  对吗？",
         ">{#f/0}* 嗯，我怕我没有什么\n  可以跟你讲的。",
         ">{#f/0}* 我只不过是一位\n  爱瞎操心的老阿姨罢了！"
      ],
      about2: [
         ">{#p/toriel}{#f/1}* 如果你想深入了解我的话...",
         ">{#f/1}* 可以四处瞧瞧\n  这些建筑与陈设。",
         ">{#f/0}* 它们都是由我\n  直接或间接参与建造的。"
      ],
      about3: [
         ">{#p/toriel}{#f/1}* 如果你想深入了解我的话...",
         ">{#f/2}* 之前就别在电话里骂我！"
      ],
      flirt1: [
         ">{#p/toriel}{#f/7}* ...嗯？",
         ">{#f/1}* 哦，嘻... 嘻嘻...",
         ">{#f/6}* 哈哈哈！\n* 让我捏捏你的小脸蛋！",
         ">{#f/0}* 你肯定能找到\n  比我这种老阿姨更好的人！"
      ],
      flirt2: [
         ">{#p/toriel}{#f/7}* ...\n* 哦亲爱的，你是认真的吗...？",
         ">{#f/1}* 我实在不知道是喜还是悲，\n  我的孩子。"
      ],
      flirt3: [
         ">{#p/toriel}{#f/7}* ...\n* 哦亲爱的，你是认真的吗...？",
         ">{#f/5}* 先前你还叫我\n  “妈妈”来着...",
         ">{#f/1}* 好吧。\n* 你可真是个“有趣”的孩子。"
      ],
      flirt4: [">{#p/toriel}{#f/3}* ...", ">{#p/toriel}{#f/4}* 我真是想不通你的脑回路。"],
      hello: [
         [
            ">{#p/toriel}* 这里是托丽尔。",
            ">{#f/1}* 你只是想和我打声招呼...？",
            ">{#f/0}* 那好吧。\n* “你好！”",
            ">{#f/0}* 希望这一句招呼就足够了。\n* 嘻嘻。"
         ],
         [
            ">{#p/toriel}* 这里是托丽尔。",
            ">{#f/1}* 你还想和我打声招呼吗？",
            ">{#f/0}* 那就，“向你致意”吧！",
            ">{#f/1}* 足够了吗？"
         ],
         [
            ">{#p/toriel}{#f/1}* 你现在是觉得很无聊吗？",
            ">{#f/0}* 对不起。\n* 我应该给你找些事情做的。",
            ">{#f/1}* 试着放空大脑尽情想象，\n  来分散你的注意力，\n  如何？",
            ">{#f/0}* 假装你是一名...\n  战斗机飞行员！",
            ">{#f/1}* 上下旋转，左右摇摆，\n  以光速做着横滚侧翻...",
            ">{#f/1}* 能为我试着做一遍吗？"
         ],
         [
            ">{#p/toriel}{#f/5}* 你好，小家伙。",
            ">{#f/9}* 我很抱歉，因为我已经\n  没什么东西可说了。",
            ">{#f/1}* 但我很高兴\n  能听到你的声音..."
         ]
      ],
      helloX: [">{#p/toriel}{#g/torielLowConcern}* 嗯？"],
      mom1: [
         ">{#p/toriel}* ...",
         ">{#f/7}* 嗯？\n* 你刚才是不是叫我\n  “妈妈”了？",
         ">{#f/1}* 嗯...\n* 我想...",
         ">{#f/1}* 你叫我“妈妈”...",
         ">{#f/1}* 会不会让你...\n* 开心一点？",
         ">{#f/0}* 那就...\n* 随你怎么称呼吧！"
      ],
      mom2: [">{#p/toriel}{#f/7}* ...\n* 我的天... 又来？", ">{#f/0}* 嘻嘻嘻...\n* 你真是个小可爱。"],
      mom3: [
         ">{#p/toriel}{#f/7}* ...\n* 我的天... 又来？",
         ">{#f/5}* 先前你还跟我调情来着...",
         ">{#f/1}* 好吧。\n* 你可真是个“有趣”的孩子。"
      ],
      mom4: [">{#p/toriel}{#f/5}* ..."],
      puzzle1: [
         ">{#p/toriel}{#f/1}* 被谜题难住了吗？",
         ">{#f/1}* 你还在那个房间，对吧？",
         ">{#f/0}* 再等我几分钟，\n  等我回去了，咱们一起解开它。"
      ],
      puzzle2: [
         ">{#p/toriel}{#f/1}* 被谜题难住了吗？",
         ">{#f/23}* ...我感觉你应该不需要\n  我的帮助。"
      ],
      puzzle3: [
         ">{#p/toriel}{#f/1}* 被谜题难住了吗？",
         ">{#f/5}* ...\n* I am afraid I cannot help you at this time.",
         ">{#f/0}* 再等我几分钟，\n  等我回去了，咱们一起解开它。"
      ],
      insult1: (sus: boolean) =>
         sus
            ? [
               ">{#p/toriel}{#f/0}* 喂？\n* 我是...",
               ">{#f/2}* ...！",
               ">{#f/3}* 你有本事再说一遍？"
            ]
            : [
               ">{#p/toriel}{#f/0}* 喂？\n* 我是...",
               ">{#f/2}* ...！",
               ">{#f/1}* 我的孩子... \n  我觉得那不是你的本意。"
            ],
      insult2: (sus: boolean) =>
         sus
            ? [">{#p/toriel}{#f/15}* ...", ">{#f/12}* 我会当作没听见的。"]
            : [">{#p/toriel}{#f/1}* 我的孩子..."]
   },

   i_candy: {
      battle: {
         description: "有一种独特的，非甘草的味道。",
         name: "怪物糖果"
      },
      drop: [">{#p/human}* （你把怪物糖果扔掉了。）"],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? [">{#p/human}* （10 HP。）"]
            : [">{#p/basic}* “怪物糖果” 回复10 HP\n* 有一种独特的，非甘草的味道。"],
      name: "怪物糖果",
      use: [">{#p/human}* （你吃掉了怪物糖果。）"]
   },
   i_water: {
      battle: {
         description: "它的气味很像一氧化二氢。",
         name: "水"
      },
      drop: [">{#p/human}* （你把水倒掉了。）"],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? [">{#p/human}* （12 HP。）"]
            : [">{#p/basic}* “水” 回复12 HP\n* 它的气味很像一氧化二氢。"],
      name: "水",
      use: () => [
         ">{#p/human}* （你喝下了水。）",
         ...(SAVE.data.b.ufokinwotm8 ? [] : [">{#p/human}* （你充满了一氧化二氢的力量。）"])
      ]
   },
   i_chocolate: {
      battle: {
         description: "这巧克力棒是你应得的。",
         name: "巧克力棒"
      },
      drop: () => [
         ">{#p/human}* （你把巧克力棒扔掉了。）",
         ...(SAVE.data.b.svr || world.darker ? [] : [">{#p/basic}* ...唉，行吧。"])
      ],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? [">{#p/human}* （19 HP。它让你想起了某个人。）"]
            : [">{#p/basic}* “巧克力棒” 回复19 HP\n* 辛劳一路，犒劳下自己吧。"],
      name: "巧克力棒",
      use: () => [
         ">{#p/human}* （你吃掉了巧克力棒。）",
         ...(battler.active && battler.targetCurrent?.opponent.metadata.reactChocolate
            ? [">{#p/basic}* 托丽尔也闻到了巧克力的香味，\n  露出了微笑。"]
            : [])
      ]
   },
   i_delta: {
      battle: {
         description: "据说它能让你“飘飘欲仙”。",
         name: "大麻素"
      },
      drop: [">{#p/human}* （你把大麻素扔掉了。）"],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? [">{#p/human}* （5 HP. 你觉得它非常地奇怪。）"]
            : [">{#p/basic}* “大麻素” 回复5 HP\n* 据说它能让你“飘飘欲仙”。"],
      name: "大麻素",
      use: [">{#p/human}* （你吸食了大麻素。）"]
   },
   i_halo: {
      battle: {
         description: "一条头带，自带重力场。",
         name: "光环"
      },
      drop: [">{#p/human}* （你像丢飞盘一般\n  把光环扔得老远。）"],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? [">{#p/human}* （3防御。）"]
            : [">{#p/basic}* “光环” （3防御）\n* 一条头带，自带重力场。"],
      name: "光环",
      use: () => [
         ">{#p/human}* （你戴上了光环。）",
         ...(SAVE.data.b.svr && !SAVE.data.b.freedom && asrielinter.i_halo_use++ < 1
            ? [">{#p/asriel1}{#f/20}* 我觉得，它和你蛮配的。"]
            : [])
      ]
   },
   i_little_dipper: {
      battle: {
         description: "一把大勺子。",
         name: "小熊座"
      },
      drop: [">{#p/human}* （你把小熊座扔掉了。）"],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? [">{#p/human}* （3攻击。）"]
            : [">{#p/basic}* “小熊座” （3攻击）\n* 一把大勺子。"],
      name: "小熊座",
      use: [">{#p/human}* （你装备上了小熊座。）"]
   },
   i_pie: {
      battle: {
         description: "一片自家做的奶油糖肉桂派。",
         name: "派"
      },
      drop: [">{#p/human}* （你把奶油糖肉桂派扔掉了。）"],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? [">{#p/human}* （99 HP。）"]
            : [">{#p/basic}* “奶油糖肉桂派” 回复99 HP\n* 一片自家做的奶油糖肉桂派。"],
      name: "奶油糖肉桂派",
      use: [">{#p/human}* （你吃掉了奶油糖肉桂派。）"]
   },
   i_pie2: {
      battle: {
         description: "一道传统家常美食。",
         name: "蜗牛派"
      },
      drop: [">{#p/human}* （你把蜗牛派扔掉了。）"],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? [">{#p/human}* （99 HP。）"]
            : [">{#p/basic}* “蜗牛派” 回复99 HP\n* 一道传统家常美食。"],
      name: "蜗牛派",
      use: [">{#p/human}* （你吃掉了蜗牛派。）"]
   },
   i_pie3: {
      battle: {
         description: "变粥的派，也还是周到的派。",
         name: "派粥"
      },
      drop: [">{#p/human}* （你把派粥全倒掉了，\n  勺子也一起扔了。）"],
      info: [">{#p/basic}* “派粥” 回复49 HP\n* 变{@fill=#ff0}粥{@fill=#fff}的派，也还是{@fill=#ff0}周{@fill=#fff}到的派。"],
      name: "派粥",
      use: [">{#p/human}* （你用附带的勺子喝光了派粥。）"]
   },
   i_pie4: {
      battle: {
         description: "真是恶有恶报...",
         name: "糊派"
      },
      drop: [">{#p/human}* （你把烤糊的派随手扔在一边，\n  置之不理。）"],
      info: [">{#p/basic}* “糊派” 回复39 HP\n* 真是恶有恶报..."],
      name: "糊派",
      use: [">{#p/human}* （你把烤糊的派吃掉了。）"]
   },
   i_snails: {
      battle: {
         description: "一盘焗蜗牛。\n当然，是当做早餐的。",
         name: "焗蜗牛"
      },
      drop: [">{#p/human}* （你把焗蜗牛扔掉了。）"],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? [">{#p/human}* （19 HP。）"]
            : [">{#p/basic}* “焗蜗牛” 回复19 HP\n* 一盘焗蜗牛。\n* 当然，是当做早餐的。"],
      name: "焗蜗牛",
      use: [">{#p/human}* （你吃掉了焗蜗牛。）"]
   },
   i_soda: {
      battle: {
         description: "恶心的暗黄色液体。",
         name: "呲呲汽水"
      },
      drop: () => [
         ">{#p/human}* （你扔掉了呲呲汽水。）",
         ...(SAVE.data.b.svr || world.darker ? [] : [">{#p/basic}* 谢天谢地。"])
      ],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? [">{#p/human}* （8 HP。）"]
            : [">{#p/basic}* “呲呲汽水” 回复8 HP\n* 恶心的暗黄色液体。"],
      name: "呲呲汽水",
      use: () => [
         ">{#p/human}* （你喝掉了呲呲汽水。）",
         ...(SAVE.data.b.svr || world.darker ? [] : [">{#p/basic}* 好恶心！"])
      ]
   },
   i_spacesuit: {
      battle: {
         description: "在你坠毁的飞船上找到的。",
         name: "宇航服"
      },
      drop: [">{#p/human}* （你把破损的宇航服扔掉了。）"],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? [">{#p/human}* (20 HP. The last remaining fragment of a spacecraft flown in exile.)"]
            : [">{#p/basic}* “破损的宇航服” 回复20 HP\n* 在你坠毁的飞船上找到的。"],
      name: "破损的宇航服",
      use: [">{#p/human}* （在用完最后一个治疗包后，\n  破损的宇航服散架了。）"]
   },
   i_spanner: {
      battle: {
         description: "一把生锈的旧扳手。",
         name: "旧扳手"
      },
      drop: [">{#p/human}* （你把生锈的扳手扔掉了。）"],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? [">{#p/human}* (A trusty tool forged from beyond the galaxy's edge.)"]
            : [">{#p/basic}* 一把生锈的旧扳手。"],
      name: "生锈的扳手",
      use: () => [
         ...(battler.active && battler.targetCurrent?.opponent.metadata.reactSpanner
            ? []
            : [">{#p/human}* （你把扳手抛向了空中。）\n* （什么都没发生。）"])
      ]
   },
   i_starbertA: {
      battle: {
         description: "限量版《超级星之行者》连载漫画\n第1期。",
         name: "星之行者1"
      },
      drop: [">{#p/human}* （你把《超级星之行者1》扔掉了。）"],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? [">{#p/human}* (It seems like the beginning of a journey.)"]
            : [">{#p/basic}* 限量版《超级星之行者》连载漫画。\n* 共有3期，这是第1期。"],
      name: "《超级星之行者1》",
      use: () => (battler.active ? [">{#p/human}* （你看了看《超级星之行者1》。）", ">* （什么都没发生。）"] : [])
   },
   i_starbertB: {
      battle: {
         description: "限量版《超级星之行者》连载漫画\n第2期。",
         name: "星之行者2"
      },
      drop: [">{#p/human}* （你把《超级星之行者2》扔掉了。）"],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? [">{#p/human}* (It seems like the middle of a journey.)"]
            : [">{#p/basic}* 限量版《超级星之行者》连载漫画。\n* 共有3期，这是第2期。"],
      name: "《超级星之行者2》",
      use: () =>
         battler.active
            ? [
               ">{#p/human}* （你看了看《超级星之行者2》。）",
               ...(SAVE.data.b.stargum
                  ? [">* （什么都没发生。）"]
                  : [
                     ">* （你发现漫画上\n  “附赠”了一块口香糖...）",
                     choicer.create("* （嚼它吗？）", "嚼", "不嚼")
                  ])
            ]
            : []
   },
   i_starbertC: {
      battle: {
         description: "限量版《超级星之行者》连载漫画\n第3期。",
         name: "星之行者3"
      },
      drop: [">{#p/human}* （你把《超级星之行者3》扔掉了。）"],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? [">{#p/human}* (It seems like the end of a journey... or is it a new beginning?)"]
            : [">{#p/basic}* 限量版《超级星之行者》连载漫画。\n* 共有3期，这是最后一期。"],
      name: "《超级星之行者3》",
      use: () => (battler.active ? [">{#p/human}* （你看了看《超级星之行者3》。）", ">* （什么都没发生。）"] : [])
   },
   i_steak: {
      battle: {
         description: "买它真是亏爆了。",
         name: "滋滋牛排"
      },
      drop: () => [
         ">{#p/human}* （你把牛排扔掉了。）",
         ...(SAVE.data.b.svr || world.darker || SAVE.data.b.ufokinwotm8
            ? []
            : [">{#p/basic}* 哼，没人会稀罕它的。"])
      ],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? [">{#p/human}* （14 HP。）"]
            : [">{#p/basic}* “滋滋牛排” 回复14 HP\n* 质量存疑。"],
      name: "滋滋牛排",
      use: () => [
         ">{#p/human}* （你吃掉了滋滋牛排。）",
         ...(SAVE.data.b.svr || world.darker || SAVE.data.b.ufokinwotm8 ? [] : [">{#p/basic}* 真难吃！"])
      ]
   },

   k_coffin: {
      name: "秘密钥匙",
      description: () =>
         SAVE.data.b.w_state_secret
            ? "用它解锁了外域的隐藏房间。"
            : "在托丽尔房间的袜子抽屉中找到的。"
   },

   c_call_toriel: <Partial<CosmosKeyed<CosmosProvider<string[]>, string>>>{
      w_start: [
         ">{#p/toriel}{#f/0}* Ah, of course.\n* That must be where you crash-landed.",
         ">{#f/0}* The other humans who came here landed there, too.",
         ">{#f/1}* There must be something about the force field...",
         ">{#f/0}* ... which always makes incoming craft fly in on this vector."
      ],
      w_twinkly: () =>
         SAVE.data.b.toriel_twinkly
            ? [
               ">{#p/toriel}{#f/1}* Is that where I first found you?",
               ">{#f/5}* That talking star who tormented you has been a pest for some time.",
               ">{#f/1}* I have tried to reason with him before, but...",
               ">{#f/9}* My efforts never truly got anywhere."
            ]
            : [
               ">{#p/toriel}{#f/1}* Is that where I first found you?",
               ">{#f/5}* All alone out there, by yourself...",
               ">{#f/0}* It is a good thing I was there to bring you in."
            ],
      w_entrance: [
         ">{#p/toriel}{#f/1}* The entrance to the Outlands...",
         ">{#f/0}* Indeed, the area before this is not actually part of it.",
         ">{#f/5}* It is... more of an unmarked crash site.",
         ">{#f/1}* After the first human crashed directly INTO the Outlands...",
         ">{#f/0}* A separate platform seemed an obvious addition."
      ],
      w_lobby: [
         ">{#p/toriel}{#f/0}* The puzzle in this room works well for demonstrations.",
         ">{#f/1}* After all, why else would I build it?",
         ">{#f/5}* Unfortunately, not every human understood this.",
         ">{#f/3}* One of them even tried running at the security field directly...",
         ">{#f/0}* ... suffice it to say, the use of healing magic was required."
      ],
      w_tutorial: [
         ">{#p/toriel}* If this puzzle is not my favorite, I do not know what is!",
         ">* The way it teaches collaboration is a most valuable quality.",
         ">{#f/1}* Since my dream job IS to become a teacher...",
         ">{#f/0}* 所以总想找机会将这些\n  重要的东西教给别人。"
      ],
      w_dummy: () => [
         ">{#p/toriel}{#f/1}* The training room...?",
         ...(SAVE.data.n.plot < 42
            ? [
               [
                  ">{#f/0}* 嘻嘻，我还是很高兴\n  你按照我教的方法\n  完成了任务。",
                  ">{#f/1}* A friendly conversation is preferable to the alternative...",
                  ">{#f/0}* And not just because it helps you make friends!"
               ],
               [],
               [
                  ">{#f/5}* ...",
                  ">{#f/5}* 虽然你没按我教的去做...",
                  ">{#f/0}* At the very least, you avoided the conflict.",
                  ">{#f/0}* Considering the alternatives, it was... a preferable outcome."
               ],
               [
                  ">{#f/0}* ... hmm.",
                  ">{#f/0}* Truthfully, I still do not know how to react to what happened.",
                  ">{#f/1}* It was mesmerising to watch, though...",
                  ">{#f/3}* Just the two of you...\n* Staring at each other...",
                  ">{#f/4}* ..."
               ],
               [
                  ">{#f/1}* I cannot say I expected what happened, but...",
                  ">{#f/0}* It was still endearing nonetheless.",
                  ">{#f/0}* Surprisingly, you are the first human to try the approach.",
                  ">{#f/1}* And it seemed such an obvious solution in hindsight..."
               ],
               [],
               [
                  ">{#f/5}* ...",
                  ">{#f/7}* ...",
                  ">{#f/8}* Hahaha!\n* Ah, I cannot help but laugh!",
                  ">{#f/6}* The shamelessness with which you chose to flirt...",
                  ">{#f/1}* Certainly took me by surprise!",
                  ">{#f/0}* Listen to me, my child.",
                  ">{#f/9}* Flirting with your adversaries may not always be ideal.",
                  ">{#f/10}* But, if you can do it like THAT again...",
                  ">{#f/0}* There is no telling what you can accomplish this way."
               ]
            ][SAVE.data.n.state_wastelands_dummy]
            : [
               ">{#p/toriel}{#f/0}* Oh, right, about that.",
               ">{#p/toriel}{#f/0}* I recently discovered that a ghost was hiding in the dummy.",
               ">{#p/toriel}{#f/1}* They seemed bothered about something, but...",
               ">{#p/toriel}{#f/0}* After a little talk, I helped to calm them down.",
               ">{#p/toriel}{#f/1}* Hmm... I wonder where Lurksalot is now?"
            ])
      ],
      w_coffin: [
         ">{#p/toriel}{#f/5}* ...",
         ">{#f/5}* In times like this, it is important that we show respect.",
         ">{#f/10}* ... do you understand?",
         ">{#f/9}* 刚刚教你的东西，\n  比什么谜题和战斗技巧\n  重要得多。"
      ],
      w_danger: () =>
         SAVE.data.n.state_wastelands_froggit === 3
            ? [
               ">{#p/toriel}{#f/1}* The riddle offered by the terminal in that room...",
               ">{#f/0}* Was based on something I found in an old Earth legend.",
               ">{#f/1}* It involved a series of many intricate puzzles...",
               ">{#f/0}* And a certain deceptive baked good.",
               SAVE.data.b.w_state_riddleskip
                  ? ">{#f/5}* It is a shame you refused to solve it."
                  : ">{#f/0}* Seeing you solve it was quite gratifying."
            ]
            : [
               ">{#p/toriel}{#f/1}* As overseer of the Outlands, I took it upon myself...",
               ">{#f/0}* To ensure the other monsters did not attack you.",
               ">{#f/0}* Both they and I have a mutual understanding about this.",
               ">{#f/0}* That is why the Froggit left so readily."
            ],
      w_zigzag: [
         ">{#p/toriel}{#f/1}* My idea with building this room to be so long and windy...",
         ">{#f/0}* ... was that I felt a straight room would be too boring.",
         ">{#f/1}* After all, who wants to walk in a straight line all their life?",
         ">{#f/0}* A little change of pace can be quite nice."
      ],
      w_froggit: [
         ">{#p/toriel}* From this room forward, more monsters may be found.",
         ">{#f/0}* They often like to \"hang out\" here.\n* Nice, is it not?",
         ">{#f/1}* It tended to be a quiet place, until recently...",
         ">{#f/0}* When a monster began teaching the others how to flirt.",
         ">{#f/0}* This new element has greatly altered the social atmosphere."
      ],
      w_candy: () => [
         SAVE.data.n.state_wastelands_candy < 4
            ? ">{#p/toriel}{#f/1}* The vending machine has yet to break down?"
            : ">{#p/toriel}{#f/1}* Oh dear, is the vending machine broken again?",
         ">{#f/5}* Well, it has happened more times than I can count.",
         ">{#f/3}* On the positive side, it DOES save power...",
         ">{#f/0}* ... so perhaps it is not all bad."
      ],
      w_puzzle1: [
         ">{#p/toriel}{#f/1}* To ease the process of retrying the puzzle...",
         ">{#f/0}* I installed a system to move you back to the start.",
         ">{#f/5}* The scientist who helped to install it is long gone now...",
         ">{#f/0}* But his work continues to be of use every day."
      ],
      w_puzzle2: [
         ">{#p/toriel}{#f/1}* Ah, a most unique form of puzzle exists here.",
         ">{#f/0}* One that tests patience over memorization.",
         ">{#f/1}* For the most part, the other humans complained about it...",
         ">{#f/0}* Though, one did appreciate the value it provides."
      ],
      w_puzzle3: [
         ">{#p/toriel}{#f/1}* A little trick you may find helpful for this puzzle...",
         ">{#f/0}* Is that you can start moving even as the sequence is shown.",
         ">{#f/5}* ... I suppose that is not of much use to you now.",
         ">{#f/1}* But, if for some reason you need to solve it again...",
         ">{#f/0}* You may try the advice I have just given."
      ],
      w_puzzle4: [
         ">{#p/toriel}{#f/1}* It has come to my attention that, recently...",
         ">{#f/0}* Old editions of a now- defunct comic series are being sold.",
         ">{#f/0}* Perhaps, if you are bored, you could buy one.",
         ">{#f/0}* Children your age tend to be rather fond of these things!"
      ],
      w_mouse: [
         ">{#p/toriel}{#f/1}* As a matter of principle, I find it important...",
         ">{#f/0}* That there be a room designated for stopping and resting.",
         ">{#f/0}* In my own life, I often find breaks to be a useful asset.",
         ">{#f/1}* The stærmite who resides here would certainly agree..."
      ],
      w_blooky: () =>
         SAVE.data.b.killed_mettaton
            ? [
               ">{#p/toriel}{#f/1}* For whatever reason, that ghost who often comes here...",
               ">{#f/5}* Has been feeling worse than ever lately.",
               ">{#f/1}* I tried to ask them why, but they would not say...",
               ">{#f/5}* ... I have not seen them since."
            ]
            : !SAVE.data.b.a_state_hapstablook || SAVE.data.n.plot < 68
               ? [
                  ">{#p/toriel}{#f/0}* That ghost who called earlier often inhabits this area.",
                  ...(SAVE.data.b.napsta_performance
                     ? [">{#f/1}* I thought they would be happier after their performance..."]
                     : [">{#f/1}* I have tried to lift their spirits in the past..."]),
                  ">{#f/5}* But their troubles may not be so easy to resolve.",
                  ">{#f/1}* If only I knew what was holding them down..."
               ]
               : [
                  ">{#p/toriel}{#f/1}* For whatever reason, that ghost who often comes here...",
                  ">{#f/0}* Has been feeling a lot better lately.",
                  ">{#f/0}* They even came to my house to tell me so themselves.",
                  ">{#f/1}* Apparently you had something to do with this...?"
               ],
      w_party: [
         ">{#p/toriel}{#f/0}* The activities room.\n* We host all kinds of performances there.",
         ">{#f/0}* Drama, dance nights...\n* And, most important of all, the arts.",
         ">{#f/0}* It is always good to see people expressing themselves.",
         ">{#f/1}* I once attended a comedy show in that very room.",
         ">{#f/0}* It was the hardest I have ever laughed in my life!"
      ],
      w_pacing: () => [
         SAVE.data.b.toriel_twinkly
            ? ">{#p/toriel}{#f/0}* I heard someone here made a \"friend\" with that talking star."
            : ">{#p/toriel}{#f/0}* I heard someone here made a \"friend\" with a talking star.",
         ">{#f/1}* One of the Froggits, I presume...?",
         ">{#f/1}* To say I am worried for that monsters' safety...",
         ">{#f/5}* Would be quite the understatement."
      ],
      w_junction: [
         ">{#p/toriel}{#f/1}* The junction room...",
         ">{#f/0}* In the past, we had planned a community area of sorts here.",
         ">{#f/0}* Outlands visitors would be met with a warm, welcoming atmosphere.",
         ">{#f/1}* Over time, though, we realized not many people would come...",
         ">{#f/0}* And so, the design was altered into what you see today.",
         ">{#f/5}* A little boring, but I suppose not every room can be grand..."
      ],
      w_annex: [
         ">{#p/toriel}* From here, the all- important taxi stop can be reached.",
         ">{#f/1}* Not only are other areas of the outpost accessible...",
         ">{#f/0}* But other subsections of the Outlands are, too.",
         ">{#f/1}* Seeing as you are but a small child, however...",
         ">{#f/5}* It is unlikely the driver would offer that as an option to you.",
         ">{#f/0}* The shops and business there are mostly just for grown-ups."
      ],
      w_wonder: () => [
         ">{#p/toriel}{#f/1}* A little mushroom greeted me on my way back from shopping...",
         SAVE.data.b.snail_pie
            ? ">{#f/0}* ... as I returned with ingredients for that snail pie."
            : ">{#f/0}* ... as I returned with ingredients for that butterscotch pie.",
         ">{#f/3}* Strangely, it was floating above the doorway...",
         ">{#f/0}* The gravity must be weak in that room.",
         ">{#f/1}* Perhaps the presence of the taxi has some kind of effect...?"
      ],
      w_courtyard: [
         ">{#p/toriel}{#f/0}* Ah.\n* The courtyard.",
         ">{#f/1}* Admittedly, it is a little lacking...",
         ">{#f/5}* In terms of being a place for children like you to play.",
         ">{#f/1}* With every human who came, I thought of fixing that...",
         ">{#f/5}* But they always left before I had the chance."
      ],
      w_alley1: [
         ">{#p/toriel}{#f/9}* ... the room in which I lectured you about leaving.",
         ">{#f/5}* I thought, if I spoke of the force field...",
         ">{#f/5}* I might convince you to stay.",
         ">{#f/1}* ... I remember telling the other humans the same, but...",
         ">{#f/5}* It was as effective for you as it was for them."
      ],
      w_alley2: [
         ">{#p/toriel}{#f/9}* ... the room in which I warned you of the dangers ahead.",
         ">{#f/5}* I have been told my beliefs about them are misguided, but...",
         ">{#f/5}* I felt it unwise to take that chance.",
         ">{#f/9}* ... perhaps it is time I re-considered my viewpoint."
      ],
      w_alley3: [
         ">{#p/toriel}{#f/9}* ... I truly regret the way I acted towards you here.",
         ">{#f/5}* It was wrong of me to attempt to force you to stay...",
         ">{#f/5}* Merely acting on my own silly desires.",
         ">{#f/1}* I am sure you have already forgiven me, though...",
         ">{#f/5}* Regardless of whether or not I deserve it..."
      ],
      w_alley4: () =>
         SAVE.data.b.w_state_fightroom
            ? [
               ">{#s/phone}{#p/event}* Dialing...",
               ">{#p/toriel}{#f/1}* Although that room may not evoke the best of feelings for us...",
               ">{#f/0}* It is still one of my favorite places in the Outlands.",
               ">{#f/1}* There is a certain someone who visits sometimes...",
               ">{#f/6}* Perhaps you are already aware of him.",
               ">{#s/equip}{#p/event}* Click..."
            ]
            : instance('main', 'toriButNotGarb') === void 0 // NO-TRANSLATE

               ? [
                  ">{#s/phone}{#p/event}* Dialing...",
                  ">{#p/toriel}{#f/1}* Calling so soon...?",
                  ">{#f/0}* ... I have not even gotten back to the house yet!",
                  ">{#f/0}* Please, wait a moment before calling again.",
                  ">{#s/equip}{#p/event}* Click..."
               ]
               : [
                  ">{#w.stopThatGoat}{#s/phone}{#p/event}* Dialing...",
                  ">{#p/toriel}{#f/1}* Calling so soon...?",
                  ">{#f/0}* ... I have not even left the room yet!",
                  ">{#f/2}* A moment to breathe would be nice!",
                  ">{#w.startThatGoat}{#s/equip}{#p/event}* Click..."
               ],
      w_bridge: [
         ">{#p/toriel}{#f/1}* The bridge to the rest of the outpost...",
         ">{#f/5}* It is a shame to think I almost destroyed it.",
         ">{#f/0}* Of course, the taxi still would have been around.",
         ">{#f/3}* But I doubt that would have been very reliable.",
         ">{#f/1}* Let us be glad this bridge is still in place."
      ],
      w_exit: () =>
         SAVE.data.n.plot < 16
            ? [
               ">{#p/toriel}{#f/1}* My child, if you are leaving the Outlands...",
               ">{#f/0}* Then... I want you to remember something.",
               ">{#f/1}* Whatever happens, no matter how difficult it may seem...",
               ">{#f/0}* I want you to know that I have faith in you.",
               ">{#f/0}* That I know you can do the right thing.",
               ">{#f/1}* Remember that, alright?"
            ]
            : SAVE.data.n.plot < 17.001
               ? [
                  ">{#p/toriel}{#f/1}* Returning to the Outlands so soon...?",
                  ">{#f/0}* Well.\n* I cannot say I am opposed to that.",
                  ">{#f/1}* You may leave at any time, of course...",
                  ">{#f/0}* But, for the moment, it is nice to see you."
               ]
               : [
                  ">{#p/toriel}{#f/2}* How long have you been standing out there!?",
                  ">{#f/1}* Did you come back all this way just to call me?",
                  ">{#f/0}* ... silly goose.",
                  ">{#f/0}* If you would like to call, there is no need to go back this far."
               ],
      w_toriel_front: [
         ">{#p/toriel}{#f/1}* Did you know that this house is a re-creation of another?",
         ">{#f/1}* In the past, I lived in the Citadel...",
         ">{#f/0}* In a house that this one was made to resemble.",
         ">{#f/5}* Once in a while, I forget that I am not really there..."
      ],
      w_toriel_hallway: [
         ">{#p/toriel}{#f/0}* There is not much to say about thehallway.",
         ">{#f/1}* Though, you can take a look in the mirror, if you like...",
         ">{#f/0}* I hear self-reflection can be a powerful thing."
      ],
      w_toriel_asriel: [
         ">{#p/toriel}{#f/0}* Ah, it is your room!",
         ">{#f/5}* Your... room...",
         ">{#f/9}* ...",
         ">{#f/5}* Perhaps it is no longer as such.",
         ">{#f/1}* ...",
         ">{#f/1}* Actually, I will leave that decision to you...",
         ">{#f/0}* You may still rest any time you like."
      ],
      w_toriel_toriel: [
         ">{#p/toriel}{#f/0}* So you have stumbled into my room.",
         ">{#f/0}* If you like, you may read a book from my bookshelf.",
         ">{#f/0}* But, please, do not forget to put it back.",
         ">{#f/23}* And don't you dare open that sock drawer!"
      ],
      w_toriel_living: () =>
         toriCheck()
            ? [">{#p/toriel}{#f/3}* There is no need to call me when I am right here, little one."]
            : [
               ">{#p/toriel}{#f/1}* Rummaging around in the living room, are we?",
               ">{#f/0}* Say.\n* Have you read all of the books yet?",
               ">{#f/1}* I thought about reading you the snail fact book...",
               ">{#f/0}* But I decided it might be a little too repetitive for you."
            ],
      w_toriel_kitchen: [
         ">{#p/toriel}{#f/1}* The kitchen...?",
         ">{#f/0}* 我在冰箱里给你留了条\n  巧克力棒。",
         ">{#f/0}* I hear it is... an old favorite of humans.",
         ">{#f/1}* 希望你能喜欢它..."
      ],
      s_start: () =>
         SAVE.data.n.plot < 17.001
            ? [
               ">{#p/toriel}{#f/0}* If I am right, a certain friend of mine should be up ahead.",
               ">{#f/0}* Do not fear, little one.",
               ">{#f/1}* Keep going..."
            ]
            : [
               ">{#p/toriel}{#f/1}* From what I recall, this long room...",
               ">{#f/0}* ... would have been the basis for a town on the outskirts of Starton.",
               ">{#f/0}* Of course, that never came to pass.",
               ">{#f/2}* One town was more than enough!"
            ],
      s_sans: () =>
         SAVE.data.n.plot < 17.001
            ? [
               ">{#p/toriel}{#f/0}* If I am right, a certain friend of mine should be up ahead.",
               ">{#f/0}* Do not fear, little one.",
               ">{#f/1}* Keep going..."
            ]
            : [
               ">{#p/toriel}{#f/1}* I presume by now you have heard of the \"gravometric inverter?\"",
               ">{#f/0}* It is a device Sans has told me all about.",
               ">{#f/1}* Apparently, there is another world up there...",
               ">{#f/0}* A place where things do not always face the right way up."
            ],
      s_crossroads: [
         ">{#p/toriel}{#f/1}* This old landing pad was once a bustling intersection...",
         ">{#f/1}* Supply ships coming and going...",
         ">{#f/1}* Ready to aid in whatever was being built next...",
         ">{#f/5}* It is a shame the outpost seems to have stopped expanding.",
         ">{#f/0}* For a while, building new areas defined our culture!"
      ],
      s_human: [
         ">{#p/toriel}* I heard Sans's brother wants to join the Royal Guard someday.",
         ">{#f/1}* Such an aspirational young skeleton...",
         ">{#f/0}* Despite my feelings about the guard, it is good for him to dream.",
         ">{#f/5}* I worry that too many have given up on their dreams lately...",
         ">{#f/0}* But not him!\n* That skeleton knows what is best for him."
      ],
      s_papyrus: [
         ">{#p/toriel}* Sans told me all about the gadgets Papyrus added to his station.",
         ">{#f/1}* First, a handle, so he can \"swing\" into duty...",
         ">{#f/1}* A so-called \"sky wrench\" used to get a \"fix\" on the stars...",
         ">{#f/0}* And a screen attachment to keep track of his many responsibilities.",
         ">{#f/6}* With inventions like these, you would think he works at a lab."
      ],
      s_doggo: [
         ">{#p/toriel}{#f/5}* Is the Royal Guard giving you too much trouble?",
         ">{#f/0}* Sans did say he would warn you of potential encounters.",
         ">{#f/1}* ...",
         ">{#f/1}* Perhaps I should be more worried, but...",
         ">{#f/0}* Something tells me you will be alright.",
         ">{#f/0}* I have faith in that skeleton to look out for you."
      ],
      s_robot: [
         ">{#p/toriel}{#f/1}* Ah, what a lovely sound...",
         ">{#f/0}* I would recognize a builder bot anywhere.",
         ">{#f/5}* After the ban on AI programs, we had most of them disabled...",
         ">{#f/1}* But the two whose sentience did not corrupt them...",
         ">{#f/0}* Were allowed a more graceful retirement.",
         ">{#f/0}* It is nice to know that they have survived to this day."
      ],
      s_maze: [
         ">{#p/toriel}* Sans has told me all about his brother's fondness for puzzles.",
         ">{#f/1}* I hear he has even created some of his own...?",
         ">{#f/0}* I am most curious about the \"wall of fire.\"",
         ">{#f/1}* Are the flames hot?\n* Or are they merely pleasantly warm?",
         ">{#f/5}* For your sake, I would hope it is the latter."
      ],
      s_dogs: [
         ">{#p/toriel}{#f/1}* I hear the Royal Guard employs a pair of married dogs.",
         ">{#f/3}* To be married at the same time as being a royal guard...",
         ">{#f/4}* That relationship must have some \"interesting\" motivations.",
         ">{#f/6}* But what do I know.\n* As Sans would say, I am merely a \"goat!\""
      ],
      s_lesser: [
         ">{#p/toriel}* I wonder what kind of food is sold in Starton these days.",
         ">{#f/1}* When I was last here, everyone loved to eat ghost fruit...",
         ">{#f/0}* A strange food which could be eaten both by ghosts and non-ghosts.",
         ">{#f/0}* Whatever the favorite\n  is now, I am sure I could never dream of it."
      ],
      s_bros: [
         ">{#p/toriel}{#f/1}* Sans's fondness for spot-the-difference puzzles...",
         ">{#f/0}* Well, it has never really made sense to me.",
         ">{#f/1}* How could such a simple puzzle be appealing to him?",
         ">{#f/3}* ... more specifically...",
         ">{#f/1}* Where is the humor in such a puzzle?"
      ],
      s_spaghetti: [
         ">{#p/toriel}* Sans has often spoken of Papyrus's interest in spaghetti dishes.",
         ">{#f/6}* But why stop there?\n* Just imagine the PASTABILITIES...",
         ">{#f/8}* Rigatoni!\n* Fettuccine!\n* Acini di Pepe!",
         ">{#f/0}* Some variety could really help him go FARFALLE.",
         ">{#f/2}* ... in other words, go BIGOLI or go home!"
      ],
      s_puzzle1: [
         ">{#p/toriel}{#f/1}* Whatever the puzzles in Starton are like now, I am sure...",
         ">{#f/0}* They are nothing like the ones that were here when I left.",
         ">{#f/5}* A level of difficulty so unrealistic...",
         ">{#f/5}* It is a wonder anyone could solve them at all."
      ],
      s_puzzle2: [
         ">{#p/toriel}{#f/1}* They say some puzzles have secret solutions...",
         ">{#f/0}* ... a statement I find utterly unbelievable!",
         ">{#f/0}* A secret solution would defeat the whole purpose of a puzzle.",
         ">{#f/1}* Puzzles, at least ones with realistic difficulty...",
         ">{#f/2}* Should be solved the intended way only!"
      ],
      s_jenga: [
         ">{#p/toriel}* To my knowledge, Dr. Alphys is the current royal scientist.",
         ">{#f/1}* She may never replace the experience of her predecessor, but...",
         ">{#f/0}* I am sure she is more than capable of finding her own path forward.",
         ">{#f/0}* This may surprise you, but I have a certain respect for scientists.",
         ">{#f/2}* Such brilliant minds!"
      ],
      s_pacing: [
         ">{#p/toriel}{#f/1}* You would be wise to steer clear of dubious salesfolk...",
         ">{#f/0}* For you never know what strings they may pull.",
         ">{#f/0}* Or what moon rocks may end up falling into your lap.",
         ">{#f/3}* It is a lesson I have learned the hard way, unfortunately..."
      ],
      s_puzzle3: [
         ">{#p/toriel}{#f/1}* The puzzle in this room is one of memorization, is it not?",
         ">{#f/1}* Sans mentioned that his brother often updates the pattern...",
         ">{#f/0}* ... to maintain a strong \"rotating password.\"",
         ">{#f/6}* How silly!",
         ">{#f/0}* In the Outlands, our memorization puzzles update on-demand."
      ],
      s_greater: [
         ">{#p/toriel}{#f/1}* The old owner of that doghouse, Canis Maximus...",
         ">{#f/0}* ... retired from the guard a long while ago.",
         ">{#f/7}* Fortunately, its new owner is said to be a bundle of puppy energy!",
         ">{#f/0}* Clearly, it has learned well from such a wise master."
      ],
      s_math: [
         ">{#p/toriel}{#f/1}* Please, can somebody explain \"dog justice?\"",
         ">{#f/0}* It is an odd phrase I continue to hear every so often.",
         ">{#f/5}* I do know of one little puppy that visits the Outlands sometimes...",
         ">{#f/0}* Perhaps that is who is deserving of justice."
      ],
      s_bridge: [
         ">{#p/toriel}{#f/1}* When this bridge was first constructed...",
         ">{#f/0}* Its precarious nature prompted an upgrade to the outpost's systems.",
         ">{#f/0}* In short time, the aptly-named \"gravity guardrails\" were added.",
         ">{#f/0}* These are what prevent you from falling off the platforms."
      ],
      s_town1: [
         ">{#p/toriel}{#f/0}* Ah...\n* The town of Starton.",
         ">{#f/1}* I have heard much about a \"Grillby's\" there...",
         ">{#f/0}* ... and its diverse array of patrons both new and old.",
         ">{#f/0}* Sans often goes there to eat, you see.",
         ">{#f/7}* I hear the bartender is quite \"hot.\""
      ],
      s_taxi: [
         ">{#p/toriel}{#f/1}* A taxi stop near town?",
         ">{#f/1}* ... hmm...",
         ">{#f/0}* I wonder if it is any different from the one in the Outlands.",
         ">{#f/1}* Of course, I would have no way of knowing until I saw it...",
         ">{#f/0}* Which I have no way of doing without a fancy telescope.",
         ">{#f/0}* I wonder where I could find one of those."
      ],
      s_town2: [
         ">{#p/toriel}{#f/1}* Napstablook recently told me they opened a shop...",
         ">{#f/5}* ... on the \"south side\" of town.",
         ">{#f/1}* What could this mean?",
         ">{#f/0}* The town I remember organizing was a large, unified square.",
         ">{#f/1}* Perhaps there was a split at some point?",
         ">{#f/5}* That would be a shame, considering the original vision..."
      ],
      s_battle: [
         ">{#p/toriel}{#f/1}* The thing Sans seemed most eager to warn me about...",
         ">{#f/0}* Was his brother's so- called \"special attack.\"",
         ">{#f/1}* If Papyrus chooses to spar with you, you must avoid it at all costs.",
         ">{#f/2}* I repeat, avoid the special attack!\n* At all costs!",
         ">{#f/0}* That is all I have to say on this matter."
      ],
      s_exit: [
         ">{#p/toriel}{#f/1}* If you ever decide to leave Starton, you must understand...",
         ">{#f/5}* My phone is old, and can only reach certain rooms in the factory.",
         ">{#f/9}* It would be difficult to call me until you find your way out.",
         ">{#f/1}* Forgive me.\n* I just thought that I should let you know."
      ],
      f_entrance: [
         ">{#p/toriel}{#f/7}* So you found a place in the factory with good reception...?",
         ">{#f/1}* ... that must mean you are somewhere unenclosed...",
         ">{#f/0}* Which also implies the nearby presence of synth-bushes.",
         ">{#f/3}* Those things are terrible to get stuck in...",
         ">{#f/4}* Getting you all itchy and scratchy...",
         ">{#f/0}* Fortunately, I know you are smart enough not to run into them."
      ],
      f_bird: () =>
         SAVE.data.n.plot !== 47.2 && SAVE.data.n.plot > 42 && SAVE.data.s.state_foundry_deathroom !== 'f_bird' // NO-TRANSLATE

            ? [
               ">{#p/toriel}{#f/0}* There truly is nothing like the chirp of that fearless little bird.",
               ">{#f/1}* Even when it still lived within a bucket of water...",
               ">{#f/1}* It would fly its mighty little wings...",
               ">{#f/1}* Taking us places...",
               ">{#f/0}* I used its services to carry groceries often.",
               ">{#f/5}* ... back when we as a species all lived in that old factory."
            ]
            : [
               ">{#p/toriel}{#f/5}* Things sound awfully silent where you are...",
               ">{#f/5}* Almost like there is something missing.",
               ">{#f/5}* Something important...",
               ">{#f/0}* Well, no matter.\n* My imagination does run wild sometimes.",
               ">{#f/1}* ...",
               ">{#f/1}* Chirp, chirp, chirp, chirp, chirp..."
            ],
      f_taxi: [
         ">{#p/toriel}{#f/1}* So you found the factory's taxi stop...?",
         ">{#f/0}* Perhaps you could use it to escape that Royal Guard captain.",
         ">{#f/1}* A visitor here once spoke of her obsession with spears...",
         ">{#f/0}* How odd.\n* The captain I knew was into sabers."
      ],
      f_battle: [
         ">{#p/toriel}{#f/0}* Ah, there you are.",
         ">{#f/0}* You're at the edge of the factory there.",
         ">{#f/1}* From this point forward, I do not know what lies ahead of you...",
         ">{#f/5}* Before I left, there was only an elevator to the Citadel.",
         ">{#f/1}* Now, however, exists the area called \"Aerialis...\"",
         ">{#f/23}* ... I wonder who came up with THAT name."
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

         ? [">{#p/toriel}{#f/3}* ...", ">{#f/2}* Come back to the house this instant!"]
         : [
            3 <= SAVE.data.n.cell_insult
               ? ">{#p/toriel}{#f/23}* Are you not exhausted after how you behaved towards me?"
               : SAVE.data.n.state_wastelands_napstablook === 5
                  ? ">{#p/toriel}{#f/1}* Are you not exhausted after waiting so long?"
                  : ">{#p/toriel}{#f/1}* Are you not exhausted after all you have been through?",
            3 <= SAVE.data.n.cell_insult
               ? game.room.startsWith('w_toriel') // NO-TRANSLATE

                  ? ">{#f/0}* Perhaps you should see the bed I made for you in the guest room."
                  : ">{#f/0}* Perhaps you should see the bed I made for you at the house."
               : game.room.startsWith('w_toriel') // NO-TRANSLATE

                  ? ">{#f/0}* Come to the hallway, and I will show you something."
                  : ">{#f/0}* Come to the house, and I will show you something."
         ],
   c_call_toriel_late: () =>
      SAVE.data.n.plot === 8.1
         ? [">{#p/human}* (But the line was busy.)"]
         : game.room === 'w_bridge' || game.room.startsWith('w_alley') // NO-TRANSLATE

            ? [">{#p/toriel}{#f/3}* ...", ">{#f/2}* Come back to the house this instant!"]
            : [
               ">{#p/toriel}{#f/1}* 没有必要给我打电话，\n  孩子。",
               3 <= SAVE.data.n.cell_insult
                  ? ">{#f/23}* We already know what that tends to result in."
                  : game.room === 'w_toriel_living' // NO-TRANSLATE

                     ? toriCheck()
                        ? ">{#f/0}* 毕竟，我现在和你\n  在一间屋子里呢。"
                        : ">{#f/0}* I will be done in just a moment."
                     : game.room.startsWith('w_toriel') // NO-TRANSLATE

                        ? toriCheck()
                           ? ">{#f/0}* 如果你想见我，\n  可以在客厅等着。"
                           : ">{#f/0}* 如果你想见我，\n  可以来客厅。"
                        : ">{#f/0}* 如果你想见我，\n  可以来我的房子这边。"
            ],
   c_call_asriel: () =>
      [
         [
            ">{#p/asriel2}{#f/3}* Just so you know, I'm not picking that up.",
            ">{#p/asriel2}{#f/4}* It's a piece of junk anyway."
         ],
         [">{#p/asriel2}{#f/4}* ..."],
         [">{#p/asriel2}{#f/4}* ... seriously?"],
         [">{#p/asriel2}{#f/3}* You must be really, REALLY bored."],
         []
      ][Math.min(SAVE.flag.n.ga_asrielCall++, 4)],
   s_save_outlands: {
      w_courtyard: {
         name: "外域 - 空地",
         text: () =>
            SAVE.data.n.plot > 16
               ? [
                  6 <= world.population
                     ? ">{#p/human}* (Even when visiting, this little home fills you with determination.)"
                     : ">{#p/human}* (Even when visiting, this house fills you with determination.)"
               ]
               : 6 <= world.population
                  ? [">{#p/human}* （面前是一座温馨的小房子，\n  这使你充满了决心。）"]
                  : [">{#p/human}* （四周都是金属围墙，\n  眼前却有一座小屋，\n  这使你充满了决心。）"]
      },
      w_entrance: {
         name: "外域 - 入口",
         text: () =>
            world.runaway
               ? [
                  ">{#p/human}* （繁忙的外域如今一片死寂，\n  这使你充满了决心。）",
                  ">{#p/human}* （HP已回满。）"
               ]
               : SAVE.data.n.plot < 48
                  ? [
                     ">{#p/human}* （繁忙的外域就在前方，\n  这使你充满了决心。）",
                     ">{#p/human}* （HP已回满。）"
                  ]
                  : [
                     ">{#p/human}* (Returning to where it all began, after so long...)",
                     ">{#p/human}* (This fills you with determination.)",
                     ">{#p/human}* （HP已回满。）"
                  ]
      },
      w_froggit: {
         name: "外域 - 休息区",
         text: () =>
            SAVE.data.n.state_wastelands_toriel === 2 || world.runaway || roomKills().w_froggit > 0
               ? SAVE.data.n.plot < 8.1
                  ? [
                     ">{#p/human}* （空气变得浑浊了起来。）\n* （不知怎地，这使你充满了决心。）",
                     ">{#p/human}* （HP已回满。）"
                  ]
                  : [
                     ">{#p/human}* （这里变得死气沉沉。）\n* （当然，这使你充满了决心。）",
                     ">{#p/human}* （HP已回满。）"
                  ]
               : SAVE.data.b.svr
                  ? [
                     ">{#p/human}* (The area has been vacated, but the air remains fresh.)",
                     ">{#p/human}* （当然，这使你充满了决心。）",
                     ">{#p/human}* （HP已回满。）"
                  ]
                  : [
                     ">{#p/human}* （见到这些奇异的生物\n  使你充满了决心。）",
                     ">{#p/human}* （HP已回满。）"
                  ]
      },
      w_mouse: {
         name: "外域 - 䗌螨巢",
         text: () =>
            world.population > 5 && !SAVE.data.b.svr && !world.runaway
               ? [
                  ">{#p/human}* （想到䗌螨有朝一日会探出头来...）",
                  ">{#p/human}* （你充满了蚗心。）"
               ]
               : [
                  ">{#p/human}* （就算䗌螨大概\n  再也不会探出头来...）",
                  ">{#p/human}* （你还是充满了蚗心。）"
               ]
      },
      w_start: {
         name: "坠落点",
         text: []
      }
   }
};


// END-TRANSLATE
