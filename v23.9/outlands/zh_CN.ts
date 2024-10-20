import { asrielinter } from '../../code/common';
import { toriCheck, toriSV } from '../../code/outlands/extras';
import { game } from '../../code/systems/core';
import {
   battler,
   choicer,
   instance,
   outlandsKills,
   pager,
   resetThreshold,
   roomKills,
   world
} from '../../code/systems/framework';
import { SAVE } from '../../code/systems/save';
import { CosmosKeyed, CosmosProvider } from '../../code/systems/storyteller';

// START-TRANSLATE

export const toriel_aerialis = () =>
   SAVE.data.n.plot < 49
      ? [
           "<25>{#p/toriel}{#f/1}* I hear there is a certain kind of fluid in Aerialis...",
           "<25>{#f/0}* Used primarily to dampen electricity.",
           "<25>{#f/1}* If you could carry this fluid, how far would you take it?",
           "<25>{#f/1}* Would you carry it all the way to the Citadel?",
           "<25>{#f/1}* Or would you simply dispose of it in a recycle bin?",
           "<25>{#f/0}* How disappointing that would be."
        ]
      : SAVE.data.n.plot < 51
      ? [
           "<25>{#p/toriel}{#f/0}* Word of your TV premier has spread quickly, little one!",
           "<25>{#f/0}* Though, I have not seen it, due to my lack of a TV.",
           "<25>{#f/1}* When I heard about it, however, I must admit I was surprised...",
           SAVE.data.n.state_aerialis_talentfails === 0
              ? "<25>{#f/2}* How did you not \"miss\" even a SINGLE time?"
              : "<25>{#f/6}* I did not know you had such \"fabulous\" moves."
        ]
      : SAVE.data.n.plot < 56
      ? [
           "<25>{#p/toriel}{#f/1}* Hmm...\n* The royal guards in Aerialis...",
           "<25>{#f/0}* Apparently, their favorite food is... salmon.",
           "<25>{#f/1}* Or... was it ice cream?",
           "<25>{#f/2}* Wait, no, I think it was pizza!",
           "<25>{#f/0}* All of which would be impossible without the humble replicator."
        ]
      : SAVE.data.n.plot < 59
      ? [
           "<25>{#p/toriel}{#f/0}* I hear you have appeared on TV again, little one.",
           "<25>{#f/1}* I also hear you did something shocking...",
           SAVE.data.n.state_aerialis_crafterresult === 0
              ? "<25>{#f/2}* And held your ground against the threat of an impending explosion!"
              : "<25>{#f/2}* And flew a \"one-time use portable jetpack\" by yourself!",
           "<25>{#f/3}* ... are you...",
           "<25>{#f/4}* Are you TRYING to put your life in danger?"
        ]
      : SAVE.data.n.plot < 60
      ? [
           "<25>{#p/toriel}{#f/1}* What kind of puzzles do they have in Aerialis?",
           "<25>{#f/1}* Are they laser-based?",
           "<25>{#f/1}* Do they bring you back to the start when you fail?",
           "<25>{#f/1}* ... can they be explicitly \"failed\" as such?",
           "<25>{#f/0}* Hmm...\n* Pardon me for asking so many questions.",
           "<25>{#f/1}* A fan of puzzles like myself cannot help but ponder these things..."
        ]
      : SAVE.data.n.plot < 61
      ? [
           "<25>{#p/toriel}{#f/1}* When hearing about your hijinks with Mettaton...",
           "<25>{#f/0}* I had a thought.",
           "<25>{#f/1}* How could a robot like him exist after our ban on AI programs?",
           "<25>{#f/5}* Surely Dr. Alphys would not break such a well- established rule.",
           "<25>{#f/0}* No...\n* There must be some other explanation."
        ]
      : SAVE.data.n.plot < 62
      ? [
           "<25>{#p/toriel}{#f/1}* Hmm...\n* The royal guards in Aerialis...",
           "<25>{#f/0}* I heard they can be quite picky about their choice of weapons.",
           "<25>{#f/1}* Their swords were supposedly made only for them, and...",
           "<25>{#f/5}* They refuse to upgrade them despite better options.",
           "<25>{#f/0}* Not that I want them to upgrade the weapons.",
           "<25>{#f/2}* I worry about you enough as it is!"
        ]
      : [
           "<25>{#p/toriel}{#f/1}* My child, if you leave this part of the Outpost...",
           "<25>{#f/0}* My phone will simply be too far away to reach you.",
           "<25>{#f/10}* Please, young one...",
           "<25>{#f/10}* ... be good, won't you?",
           "<25>{#f/9}* I am so sorry I cannot be here for you on the rest of your journey."
        ];

const text = {
   a_outlands: {
      secret1: () =>
         SAVE.data.n.plot === 72 && !world.darker
            ? [
                 "<32>{#p/basic}* If only there was some hidden method of unlocking this drawer.",
                 "<32>* Sorry, did I say \"drawer?\"\n* Surely there aren't any of those in the Outlands."
              ]
            : [ "<32>{#p/basic}* 这里有一扇门。\n* 锁住了。" ],
      secret2: [ "<32>{#p/human}* (You use the Secret Key.)" ],
      exit: [ choicer.create("* （离开外域吗？）", "是", "否") ],
      nosleep: [ "<32>{#p/human}* （好像有什么\n  打扰了你休息。）" ],
      noequip: [ "<32>{#p/human}* （你不打算这么做。）" ],
      finaltext: {
         a: [ "<32>{#p/basic}* 他肯定就在附近..." ],
         b: [ "<32>{#p/basic}* 等等...？", "<32>{#p/basic}* 那边站着的...\n* 是他吗？" ],
         c: [
            "<32>{#p/basic}* ...真的是他。",
            "<32>* ...\n* Frisk，如果你准备好了...",
            "<32>* 如果你已见过每一位\n  重要的朋友，想见的人...",
            "<32>* ...",
            "<32>* 你知道该做什么。",
            "<32>* 否则，我会耐心等待。\n  直到你准备好。"
         ],
         d1: [ "<32>{#p/basic}* Asriel。" ],
         d2: [ "<25>{#p/asriel1}{#f/13}* ...Frisk？\n* 是你吗...？" ],
         d3: [ "<32>{#p/basic}* Asriel，是我啊...", "<32>{#p/basic}* 记得我吗，你最好的朋友？" ],
         d4: [
            "<25>{#p/asriel1}{#f/25}* ...！",
            "<25>{#f/25}* $(name)...？",
            "<25>{#f/13}* 可是... 你...",
            "<25>{#f/23}* ...你已经..."
         ],
         d5: [ "<32>{#p/basic}* 死了？" ],
         d6: [
            "<32>{#p/basic}* 呵。\n* 很长一段时间里...\n  有时我真希望当时就死了。",
            "<32>{#p/basic}* 我对你做了那种事，我...\n  我就活该去死。"
         ],
         d7: [ "<25>{#p/asriel1}{#f/7}* 别这么说， $(name)！", "<25>{#f/6}* ...你错了！" ],
         d8: [
            "<33>{#p/basic}* 哈哈... 瞧瞧是谁在反驳。\n* “去找爱你的人”先生。",
            "<32>* 但是，Asriel...\n  是时候告诉你真相了。",
            "<32>* 关于我的，我的一切。"
         ],
         d9: [ "<25>{#p/asriel1}{#f/23}* ...", "<25>{#f/23}* 但是..." ],
         d10: [ "<25>{#p/asriel1}{#f/13}* $(name)...", "<25>{#f/15}* 你是怎么..." ],
         d11: [
            "<32>{#p/basic}* ...那重要吗？",
            "<32>* 重要的是，我一直都不是什么好人。\n  这就是要告诉你的真相。",
            "<32>* 所以，你之前不记得我，\n  把我遗忘... 我不怪你。",
            "<32>* 而且，我也不配做\n  你的朋友，你的兄弟。"
         ],
         d12: [ "<25>{#p/asriel1}{#f/13}* $(name)，我..." ],
         d13: [ "<32>{#p/basic}* 别伤心，Asriel。", "<32>* 没必要逼自己觉得\n  我是个好人。" ],
         d14: [ "<25>{#p/asriel1}{#f/22}* ...", "<25>{#f/22}* ...为什么现在说这些？" ],
         d15: [
            "<32>{#p/basic}* 其实...",
            "<32>* 曾经，我一直觉得人性本恶。",
            "<32>* 也就是说...",
            "<32>* 只要你是个人类，\n  不管经历什么，最终必定堕入黑暗。",
            "<32>* 但在我目睹了Frisk的整段旅程，\n  见证了Frisk所做的一切后...",
            "<32>* 我才知道真相。",
            "<32>* 别的人类... \n  他们伤害怪物，欺负怪物。\n* 更有甚者，把他们...",
            "<33>* 所以，我一直对真相视而不见。",
            "<32>* 但Frisk不是。",
            "<32>* 无论面对什么困难，\n  Frisk总是施以善意，报以仁慈。",
            "<32>* 是Frisk... \n  让我看清自己的错误。",
            "<32>* 所以，现在我不该继续逃避责任。",
            "<32>* 让你受了那么多苦，\n  失去那么多重要的东西。",
            "<32>* 都是我的错。"
         ],
         d16: [ "<25>{#p/asriel1}{#f/13}* 对了，$(name)...", "<25>{#f/15}* 这段时间里，\n  你一直都有自己的意识吗？" ],
         d17: [
            "<32>{#p/basic}* ...对，应该是这样。",
            "<32>* 在咱们死后，\n  我就是以这种形态\n  继续“活着”的。",
            "<32>* 而且，我还有些话想跟你说。"
         ],
         d18: [ "<25>{#p/asriel1}{#f/21}* 是什么？" ],
         d19: [
            "<32>{#p/basic}* 还记得吗？",
            "<32>* 咱们一起穿过力场，\n  到达故园的废墟时，\n  被那伙人类发现了。",
            "<32>* 那时，\n  我打算用咱们的力量消灭他们...\n  但你阻止了我，还记得吗？"
         ],
         d20: [ "<25>{#p/asriel1}{#f/16}* ...当然。" ],
         d21: [
            "<32>{#p/basic}* 那时，我不理解\n  你为什么要那么做...",
            "<32>* 但现在我明白了。",
            "<32>* 你那么做... 是不想让我铸成大错。"
         ],
         d22: [ "<25>{#p/asriel1}{#f/15}* $(name)..." ],
         d23: [
            "<32>{#p/basic}* 如果没有你，\n  前哨站就会在又一次战争中\n  彻底毁灭。",
            "<32>* 如果没有你，\n  那些我想拯救的怪物们...",
            "<32>* ...就要与我们一同陪葬。"
         ],
         d24: [ "<25>{#p/asriel1}{#f/25}* $(name)，我..." ],
         d25: [
            "<32>{#p/basic}* 即使是现在，你当时的选择仍然很重要。",
            "<32>* 即使是现在...",
            "<32>* 你仍然是最好的兄弟姐妹。"
         ],
         d26: [
            "<25>{#p/asriel1}{#f/25}* 我原谅你，$(name)！",
            "<25>{#f/23}* 好吧？\n* 你不必这么做的...",
            "<25>{#f/22}* 我知道你当时的感受有多强烈，而且...",
            "<25>{#f/15}* 我不想你因为我改变想法..."
         ],
         d27: [
            "<32>{#p/basic}* 不。\n* 不用说了。",
            "<32>* 人人都会改变，Asriel...",
            "<32>* 这不是你一直相信的吗？"
         ],
         d28: [ "<25>{#p/asriel1}{#f/13}* ...是的。" ],
         d29: [
            "<32>{#p/basic}* 过去的一百年中，我一直在自责。",
            "<32>* 过去的一百年中，我一直怀恨在心。",
            "<32>* 那段时间，我一直在想是什么让我活着...",
            "<32>* 现在，我终于知道答案了。"
         ],
         d30: [ "<25>{#p/asriel1}{#f/15}* ...？" ],
         d31: [ "<32>{#p/basic}* ...是你，Asriel。", "<32>* 是你一直在支撑我活下去。" ],
         d32: [
            "<32>{#p/basic}* 像是一种...没有兑现的承诺。",
            "<32>* 怀恨在心...像我一样想着你...",
            "<32>* 知道我本可以为你付出比最终更多的努力。",
            "<32>* 一直以来，这就是阻止我前进的原因。"
         ],
         d33: [ "<25>{#p/asriel1}{#f/23}* $(name)..." ],
         d34: [ "<32>{#p/basic}* Asriel。\n* 我的兄弟。", "<32>* 你应该知道真相。" ],
         d35: [ "<25>{*}{#p/asriel1}{#f/25}* 嗯？\n* 但是你早就- {%}" ],
         d36: [ "<32>{#p/basic}* 我也原谅你。" ],
         d37: [ "<25>{#p/asriel1}{#f/30}{#i/4}* ...！", "<25>{#p/asriel1}{#f/26}{#i/4}* $(name)..." ],
         d38: [ "<32>{#p/basic}* 嘘...", "<32>* It's alright.", "<32>* 我懂你了，好吗？" ],
         d39: [ "<25>{#p/asriel1}{#f/25}{#i/4}* 我..." ],
         d40: [ "<32>{#p/basic}* 我懂你，Asriel。" ],
         d41: [
            "<32>{#p/basic}* ...我能感觉到。",
            "<32>* 即使过去了一百年...",
            "<32>* 他还在这，对吧？",
            "<32>* 就像个小天使一样...",
            "<32>* 守护我，保护我不受错误决定影响...",
            "<32>* ...所有这些都是为了有一天我能报答他。"
         ],
         d42: [ "<32>{#p/basic}* 这一切开始有意义了。", "<32>* 我知道我该怎么做。" ],
         d43: [ "<25>{*}{#p/asriel1}{#f/25}* 哈？\n* 你要... {^60}{%}" ],
         d44: [ "<25>{*}{#f/25}* 不...！{^60}{%}", "<25>{*}{#f/26}* 让...让我走！{^60}{%}" ],
         d45: [ "<32>{*}{#p/basic}* 呵...{^60}{%}", "<32>{*}* ...替我照顾好爸爸妈妈，好吗？{^60}{%}" ],
         d46: [ "<25>{#p/asriel1}{#f/25}* Frisk，你在那里吗？", "<25>{#f/22}* 拜托了...醒来吧..." ],
         d47: [ "<25>{#p/asriel1}{#f/23}* 我...\n* 我也不想失去你..." ],
         d48: [ "<25>{#p/asriel1}{#f/17}* ... there you are." ],
         d49: [
            "<25>{#p/asriel1}{#f/23}* Ha... I thought I'd lost you for a minute there.",
            "<25>{#f/22}* Don't scare me like that again, okay?",
            "<25>{#f/13}* ..."
         ],
         d50: [
            "<25>{#p/asriel1}{#f/13}* Well...\n* I have my SOUL back inside of me now.",
            "<25>{#f/15}* My original one.",
            "<25>{#f/16}* ...",
            "<26>{#f/16}* When $(name) and I died, they must've wrapped themselves around me...",
            "<25>{#f/13}* ... keeping me safe until I could be brought back here.",
            "<26>{#f/17}* They held on that whole time, just for a chance to see me, Frisk...",
            "<25>{#f/13}* ... so, the least I can do is honor it.",
            "<25>{#f/15}* Live the life they always wanted me to have."
         ],
         d51: [
            "<25>{#p/asriel1}{#f/23}* ...Frisk。",
            "<25>{#f/23}* I'm going to stay with you from now on.",
            "<25>{#f/17}* Wherever you go... I'll follow you.",
            "<25>{#f/13}* I feel like...\n* I can trust you with that sort of thing.",
            "<25>{#f/13}* Even if we don't know much about each other.",
            "<25>{#f/15}* ... I don't know.",
            "<25>{#f/15}* ...",
            "<25>{#f/13}* Frisk... are you really sure about this?",
            "<25>{#f/13}* All the times I've hurt you, hurt your friends...",
            "<25>{#f/22}* It's... all I can think about right now.",
            "<25>{#f/21}* Seeing them die like that in my mind, over and over...",
            "<25>{#f/22}* Knowing that I'm the one who did it.",
            "<25>{#f/15}* ...",
            "<25>{#f/15}* Are you really sure you can be there for someone like that?",
            choicer.create("* （你要怎么回答？）", "是", "否")
         ],
         d52: () => [
            "<25>{#p/asriel1}{#f/15}* ...",
            ...(choicer.result === 0
               ? [
                    "<25>{#f/17}* ... I guess I just don't understand you, Frisk.",
                    "<25>{#f/23}* No matter what I do to you... you just won't give in."
                 ]
               : [
                    "<25>{#f/17}* ... yeah, but you're still going to try, aren't you.",
                    "<25>{#f/23}* You're too stubborn for your own good, Frisk."
                 ]),
            "<25>{#f/22}* ...",
            "<25>{#f/13}* Hey.\n* Maybe it won't be so bad.",
            "<25>{#f/17}* Having you there with me definitely won't hurt matters.",
            "<25>{#f/13}* ...\n* The thing is...\n* If I stayed here now...",
            "<25>{#f/15}* It wouldn't be right by $(name)... you know?",
            "<25>{#f/13}* And besides, with my SOUL back inside of me...",
            "<25>{#f/13}* I won't turn back into a star.",
            "<25>{#f/13}* So... there's no point in me staying here."
         ],
         d53: [
            "<25>{#p/asriel1}{#f/17}* Well.\n* Better get going.",
            "<25>{#f/20}* Your friends are probably worried sick about you by now."
         ],
         e1: [
            "<25>{#p/asriel1}{#f/15}* ...",
            "<25>{#f/16}* I don't know what's going to happen to $(name) after this.",
            "<25>{#f/13}* They held on for a chance to see me, but that's...",
            "<25>{#f/15}* ... in the past now."
         ],
         e2: [
            "<25>{#p/asriel1}{#f/13}* I still can't believe they waited all that time just to see me...",
            "<25>{#f/23}* Stubborn idiot.",
            "<25>{#f/17}* ... is what I would have said, if I was still a talking star.",
            "<25>{#f/13}* But... I don't really think they're an idiot."
         ],
         e3: [
            "<25>{#p/asriel1}{#f/13}* $(name)'s not stupid.\n* And I...",
            "<25>{#f/13}* I agreed with a lot of what they said about themselves...",
            "<25>{#f/15}* About them not being the kind of friend I wish I had...",
            "<25>{#f/7}* ... but it doesn't mean I wanted them gone!"
         ],
         e4: [
            "<25>{#p/asriel1}{#f/13}* It's not like $(name) has to go away...",
            "<25>{#f/17}* If they wanted to, they could stay with us.\n* I'd like them to.",
            "<25>{#f/15}* But I'd understand if they wanted to go.",
            "<25>{#f/16}* They \"won\" their game.\n* They shouldn't want to \"play\" with me anymore."
         ],
         e5: [
            "<25>{#p/asriel1}{#f/13}* ... $(name)...\n* If you're still there, listening...",
            "<25>{#f/15}* I want you to know that I love you.",
            "<25>{#f/23}* You might not have been the greatest person...",
            "<25>{#f/22}* But, deep down, you still cared about me."
         ],
         e6: [
            "<25>{#p/asriel1}{#f/23}* Ha...",
            "<25>{#f/22}* I probably seem like a crazy person right now.",
            "<25>{#f/15}* Obsessing over someone I should have moved on from already...",
            "<26>{#f/17}* ... I guess $(name) and I really are just a \n  pair of stubborn idiots."
         ],
         e7: [
            "<25>{#p/asriel1}{#f/13}* One time, $(name) and I were fighting over a bed...",
            "<25>{#f/10}* 'Cause, both of us wanted the one with the nightstand next to it.",
            "<26>{#f/15}* We were both pushing each other off the side, trying to make room...",
            "<25>{#f/4}* All that fighting got us so tired, that we fell asleep.",
            "<25>{#f/13}* But when we woke up...",
            "<25>{#f/17}* We were lying right next to each other.",
            "<25>{#f/13}* I tried to get up, but... they didn't want to let go.",
            "<26>{#f/15}* They just kept saying...",
            "<25>{#f/15}* \"... warm...\"",
            "<25>{#f/15}* \"... fluffy...\"",
            "<25>{#f/20}* I would have complained about it, but...",
            "<25>{#f/17}* ... at that point, I was just happy we weren't fighting."
         ],
         e8: [
            "<25>{#p/asriel1}{#f/13}* This other time, $(name) and I were making dinner for Mom and Dad.",
            "<25>{#f/15}* They kept wanting to make it more spicy...",
            "<25>{#f/3}* To be honest, if they insisted on that now, I would not complain.",
            "<25>{#f/20}* I could go for something spicy right about now.",
            "<25>{#f/13}* But, back then, I was more into sweets.\n* Most monsters are.",
            "<25>{#f/15}* We ended up playing tug-of-war with the mixing bowl, and...",
            "<25>{#f/20}* You can imagine how that turned out.",
            "<25>{#f/17}* Mom made us clean up the mess, of course.",
            "<25>{#f/13}* Then, Dad took us out to eat, and we both got what we wanted."
         ],
         e9: [
            "<25>{#p/asriel1}{#f/15}* $(name) and I...\n* It's like we couldn't agree on anything...",
            "<25>{#f/20}* Besides spending time together, that is.",
            "<26>{#f/17}* Despite our differences, $(name) and I really were inseparable.",
            "<25>{#f/13}* Even death itself couldn't even keep us apart forever."
         ],
         e10: [
            "<25>{#p/asriel1}{#f/17}* ... do you think they're still around, Frisk?",
            "<25>{#f/17}* For all you know, they could be watching us right now.",
            "<25>{#f/23}* Wouldn't that be something.",
            "<25>{#f/22}* But it's impossible to know for sure."
         ],
         e11: [
            "<25>{#p/asriel1}{#f/17}* Golly.\n* For someone who'll be staying with you...",
            "<25>{#f/20}* I sure am making it sound like I'd rather be with $(name).",
            "<25>{#f/13}* But... it's not like that at all.",
            "<25>{#f/17}* I just can't help but reminisce about someone I used to know."
         ],
         e12: () => [
            "<25>{#p/asriel1}{#f/17}* Frisk...\n* I want you to know.",
            "<25>{#f/13}* Thanks to you...",
            "<25>{#f/23}* I feel like I have a future again.",
            "<25>{#f/22}* ...",
            ...(!SAVE.flag.b.pacifist_marker_forgive
               ? [ "<25>{#f/22}* Even though you couldn't forgive me for what I'd done..." ]
               : SAVE.flag.n.killed_sans > 0
               ? [ "<25>{#f/22}* Even though I wanted you to do all those terrible things..." ]
               : [ "<25>{#f/22}* Even though I tortured you, and threatened everyone you love..." ]),
            "<25>{#f/13}* You're still willing to help me move past it all.",
            "<25>{#f/23}* ... it means a lot.",
            "<25>{#f/22}* ...",
            "<25>{#f/13}* Mom, Dad...",
            "<25>{#f/13}* Sans, Papyrus, Undyne, Alphys...",
            "<25>{#f/15}* Everyone I've killed in past realities...",
            "<25>{#f/16}* ... it's going to difficult for me to face them.",
            "<25>{#f/13}* ...",
            "<25>{#f/17}* But I'll try.",
            "<25>{#f/23}* I'll try to be a better person.",
            "<25>{#f/22}* And, If I ever screw up...",
            "<25>{#f/13}* ... I know you'll be there to help me pick up the pieces."
         ],
         e13: [
            "<25>{#p/asriel1}{#f/17}* Ha... $(name).",
            "<25>{#f/23}* I won't let you down, okay?",
            "<25>{#f/22}* I'll make the most out of this chance you've given me.",
            "<25>{#f/17}* I'll make it count."
         ]
      },
      evac: [ "<32>{#p/human}* （你感觉周围的怪物越来越少了。）" ],
      stargum1: () =>
         SAVE.data.b.svr
            ? [
                 "<32>{#p/human}* （你发现漫画上\n  “附赠”了一块口香糖...）",
                 choicer.create("* （嚼它吗？）", "是", "否")
              ]
            : [
                 "<32>{#p/basic}* 漫画封面上附了一块口香糖。",
                 choicer.create("* （嚼它吗？）", "是", "否")
              ],
      stargum2: [ "<32>{#p/human}* （你决定不嚼。）" ],
      stargum3: [ "<32>{#p/human}* （你回复了$(x) HP。）" ],
      stargum4: [ "<32>{#p/human}* （HP已回满。）" ],
      fireplace1: () =>
         SAVE.data.b.svr
            ? [
                 "<32>{#p/human}* （壁炉的温暖让你无法抗拒...）",
                 choicer.create("* （爬进去吗？）", "是", "否")
              ]
            : [
                 SAVE.data.n.state_wastelands_toriel === 2 || world.runaway
                    ? "<32>{#p/basic}* 一个普通的壁炉。"
                    : "<32>{#p/basic}* Toriel的壁炉。\n* 里面并不烫，而是暖暖的，\n  很舒服。",
                 ...(world.darker
                    ? []
                    : [ "<32>* 你甚至可以爬进去。", choicer.create("* （爬进去吗？）", "是", "否") ])
              ],
      fireplace2a: [ "<32>{#p/human}* （你不打算爬进去。）" ],
      fireplace2b: () => [
         "<32>{#p/human}* （你爬进壁炉，\n  它的温暖紧紧将你包围。）",
         "<32>{#p/human}* （你感到十分舒适。）",
         ...(SAVE.data.b.svr
            ? asrielinter.fireplace2b++ < 1
               ? [ "<25>{#p/asriel1}{#f/13}* 呃，我会在这等你出来的。" ]
               : []
            : world.goatbro && SAVE.flag.n.ga_asrielFireplace++ < 1
            ? [ "<25>{#p/asriel2}{#f/15}* 呃，我就在这等你出来吧..." ]
            : [])
      ],
      fireplace2c: [ "<25>{#p/toriel}{#f/1}{#npc/a}* 别在里面待太久了..." ],
      fireplace2d: [ "<32>{#p/basic}* ...", "<32>* 挺舒服的。" ],
      noticereturn: [ "<25>{#p/asriel2}{#f/10}* 之前有什么东西\n  忘在这了吗？" ],
      noticestart: [
         "<25>{#p/asriel2}{#f/3}* 啊，这就是一切开始的地方。",
         "<25>{#p/asriel2}{#f/4}* $(name)，记得吗？\n  从那以后，无论去哪里，\n  我们都是在一起的。"
      ],
      noticedummy: [ "<25>{#p/asriel2}{#f/3}* ...", "<25>{#p/asriel2}{#f/10}* 这里以前\n  应该有个人偶吧...？" ],
      afrog: {
         a: [
            "<32>{#p/basic}{#n1}* 偷偷告诉你一件事哦...",
            "<32>* 刚才我看到那位羊女士\n  从这经过。",
            "<32>* 她买了很多吃的，于是我问她\n  这些是用来干什么的。她说...",
            "<32>* 嘿嘿，有惊喜等着你哦。"
         ],
         b: () =>
            SAVE.data.n.plot === 72
               ? [
                    "<32>{#p/basic}{#n1}* 偷偷告诉你一件事哦...",
                    "<32>* I saw that goat lady come through here earlier.",
                    "<32>* She said it was time to \"confront her fears.\"",
                    "<32>* Well, whatever she did clearly led to something!\n* We're all free now!"
                 ]
               : SAVE.data.b.w_state_lateleave
               ? [
                    "<32>{#p/basic}{#n1}* 偷偷告诉你一件事哦...",
                    "<32>* I saw that goat lady take the taxi to the supermarket earlier.",
                    "<32>* She said she was going off to buy milk, but she still hasn't come back...",
                    "<32>* I hope she's alright."
                 ]
               : [
                    "<32>{#p/basic}{#n1}* 偷偷告诉你一件事哦...",
                    "<32>* Sometimes, when I'm alone, I like to ride the taxi to the marketplace.",
                    "<32>* It's a quaint little shop, but there's loads of stuff to buy.",
                    "<32>* Maybe I'll take you there sometime... you'd adore it!"
                 ],
         c: () =>
            SAVE.data.n.plot === 72
               ? [
                    "<32>{#p/basic}{#n1}* 偷偷告诉你一件事哦...",
                    "<32>* I'm not a fan of how you beat us all up at first.",
                    "<32>* We were all so scared and confused...",
                    "<32>* ... at least you did something good in the end."
                 ]
               : [
                    "<32>{#p/basic}{#n1}* 偷偷告诉你一件事哦...",
                    "<32>* The people you've been beating up aren't happy about it.",
                    "<32>* Just be glad I'm off-duty...\n* 'Cause otherwise...",
                    "<32>* I'd have your head."
                 ],
         d: [ "<32>{#p/basic}{#n1}* No... no!", "<32>* G-get away from me!" ]
      },
      asriel2: [
         "<25>{#p/asriel2}{#f/1}* 准备好了？",
         "<25>{#f/2}* 迈出这一步后，\n  可就再也没有回头路了。",
         choicer.create("* （跟上他吗？）", "是", "否")
      ],
      asriel2b: [ "<25>{#p/asriel2}{#f/1}* 准备好了？", choicer.create("* （跟上他吗？）", "是", "否") ],
      asriel3: [ "<25>{#p/asriel2}{#f/2}* 好...", "<25>{#f/1}* 我们前进吧。" ],
      asriel4: [ "<25>{#p/asriel2}{#f/4}* 我会等你准备好的。" ],
      asrielDiary: [
         [
            "<32>{#p/human}* (You turn to the first page... you can barely make out the words.)",
            "<32>{#p/asriel1}{#v/2}* \"i am starting a dairy Cuz mommy said it wood be fun.\"",
            "<32>* \"today i lerned how to put seeds in daddys garden\"",
            "<32>* \"he says they will grow up soon But it wil take a long tiem.\"",
            "<32>* \"mommy is gona make a snail pie tonite And im exsited\"",
            "<32>* \"other then that im having a good day.\""
         ],
         [
            "<32>{#p/human}* (You turn to the second page...)",
            "<32>{#p/asriel1}{#v/2}* \"azzys dairy, k-504\"",
            "<32>* \"mommy said i shood rite down the date So folks can no when i rote it.\"",
            "<32>* \"my starling flower stil hasnt grown yet but daddy promises it wil be soon\"",
            "<32>* \"i wish there was a window on my room but daddy said there is pluming here.\"",
            "<32>* \"they said they wood put a window in the front room tho\"",
            "<32>* \"i am having a nice day today as wel.\""
         ],
         [
            "<32>{#p/human}* (You turn to the third page... seems a couple years went by.)",
            "<32>{#p/asriel1}{#v/2}* \"Azzys Diary, K-506.03\"",
            "<32>* \"My old diary was in a box of toys And i wanted to put more in it.\"",
            "<32>* \"Looks like I only rote the first part of The date last time.\"",
            "<32>* \"By the way The starling flower I planted before grew up.\"",
            "<32>* \"But I got in a fite with a frend The other day and we havent talked since that.\"",
            "<32>* \"Im worryed about them... i hope theyre not still mad.\""
         ],
         [
            "<32>{#p/human}* (You turn to the fourth page...)",
            "<32>{#p/asriel1}{#v/2}* \"Azzys Diary, K-506.03\"",
            "<32>* \"i talked with my frend, they say theyre not upset anymore, so thats good\"",
            "<32>* \"Mommy and I were watching the sky out side And we saw a shooting star.\"",
            "<32>* \"She said to make a wish... I wished that one day a human wood come down.\"",
            "<32>* \"Mommy and Daddy tell so many storys about them...\"",
            "<32>* \"They cant all be bad rite?\""
         ],
         [
            "<32>{#p/human}* (You turn to the fifth page...)",
            "<32>{#p/asriel1}{#v/2}* \"Azzys Diary, K-506.03\"",
            "<32>* \"Not alot to say today.\"",
            "<32>* \"Maybe this diary idea is silly.\"",
            "<32>* \"Mom saw me riting in it the other day and said she was proud of me.\"",
            "<32>* \"Is it realy that importint?\""
         ],
         [
            "<32>{#p/human}* (You turn to the sixth page... seems like a few more years went by.)",
            "<32>{#p/asriel1}{#v/1}* \"Azzy's Diary, K-510.08\"",
            "<32>* \"Seems I cant write in this thing for too long at once.\"",
            "<32>* \"But today I saw the book again and chose to write some more in it.\"",
            "<32>* \"The past few years have been good, I went to school and learned lots of things.\"",
            "<32>* \"Like how to add numbers.\"\n* \"And how to use a computer.\"",
            "<32>* \"Mom said Im too young to make an online acount tho.\"",
            "<32>* \"Maybe one day when Im older I can have one.\""
         ],
         [
            "<32>{#p/human}* (You turn to the seventh page...)",
            "<32>{#p/asriel1}{#v/1}* \"Azzy's Diary, K-510.08.\"",
            "<32>* \"That smart guy visited again today. He said he had a bad dream about a human.\"",
            "<32>* \"Oh, did I mention him? He is the science person dad talks to alot.\"",
            "<32>* \"He invented alot of things that we use now.\"",
            "<32>* \"Like the replicaters and fabricaters and gravity plate things.\"",
            "<32>* \"But he looked at me really odd Like I was so scary.\"",
            "<32>* \"Did I do somthing wrong?\""
         ],
         [
            "<32>{#p/human}* (You turn to the eighth page...)",
            "<32>{#p/asriel1}{#v/1}* \"Azzy's Diary, K-510.08.\"",
            "<32>* \"A new star appeared in the sky today.\"",
            "<32>* \"A really brite one.\"",
            "<32>* \"I wonder why more stars dont appear like that all the time.\"",
            "<32>* \"Also we are gonna move to the new citadel soon.\"",
            "<32>* \"I saw it in the distance, it looks amazing so far!\"",
            "<32>* \"It will be alot better than living in the factory too.\""
         ],
         [
            "<32>{#p/human}* (You turn to the ninth page... seems a day was skipped.)",
            "<32>{#p/asriel1}{#v/1}* \"Azzy's Diary, K-510.09.\"",
            "<32>* \"I met a real human yesterday. They crashed in the trash area near our house.\"",
            "<32>* \"I helped them out of the reck and they said thanks.\"",
            "<32>* \"I didnt think it would ever happen, but here they are.\"",
            "<32>* \"And they are actually he{#p/basic}f{#p/asriel1}{#v/1}h{#p/basic}sj haha azzy is a stinky butt and he{#p/asriel1}{#v/1}vh{#p/basic}v{#p/asriel1}{#v/1}j{#p/basic}a{#p/asriel1}{#v/1}s\"",
            "<32>* \"Okay so Im actually hiding under the covers so $(name) cant mess up what Im writing.\"",
            "<32>* \"They can be a bit mean some times, but thats ok.\"",
            "<32>* \"Mom did that battle thing with them and there heart was red and upside down.\"",
            "<32>* \"Its really nice to have someone else to talk to everyday.\""
         ],
         [
            "<32>{#p/human}* (You turn to the tenth page...)",
            "<32>{#p/asriel1}{#v/1}* \"Azzy's Diary, K-510.09.\"",
            "<32>* \"Mom said shes gonna adopt $(name) into the family.\"",
            "<32>* \"I dont know what adopt means but she said I will be like their brother.\"",
            "<32>* \"But thats good Cuz then I can spend more time with them.\"",
            "<32>* \"Me and $(name) are gonna do everything together!\"",
            "<32>* \"Also they said sorry for what happend in the last diary page.\"",
            "<32>* \"I didnt tell them yet but, I forgive them.\"",
            "<32>{#p/basic}* ..."
         ],
         [
            "<32>{#p/human}* (You turn to the eleventh page.)",
            "<32>{#p/asriel1}* \"Asriel's Diary, K-515.12\"",
            "<32>* \"$(name) said it's time for the plan.\"",
            "<32>* \"I was scared, but they said I could do it.\"",
            "<32>* \"After this entry, I'll wait for them to fall down...\"",
            "<32>* \"And then we can save everyone together.\"",
            "<32>* \"If something goes wrong, and you're reading this later...\"",
            "<32>* \"I want you to know that you're the best, $(name).\"",
            "<32>{#p/basic}* ...",
            "<32>{#p/human}* (It sounds like someone is crying...)"
         ]
      ],
      backdesk: {
         a: () => [
            ...(SAVE.data.b.svr ? [] : [ "<32>{#p/basic}* 衣架上挂了个背包。" ]),
            "<32>{#p/human}* （你往背包里瞅了一眼...）",
            ...(SAVE.data.b.svr
               ? [ "<32>{#p/human}* （但里面什么都没有。）" ]
               : [ "<32>{#p/basic}* 没有其他东西了。" ])
         ],
         b: () => [
            ...(SAVE.data.b.svr ? [] : [ "<32>{#p/basic}* 衣架上挂了个背包。" ]),
            "<32>{#p/human}* （你往背包里瞅了一眼...）",
            ...(SAVE.data.b.svr
               ? []
               : [ "<32>{#p/basic}* 这是什么？\n* 限量版的“超级星之行者”漫画？" ]),
            "<32>{#s/equip}{#p/human}* （你获得了“超级星之行者2”。）"
         ],
         b2: () => [
            ...(SAVE.data.b.svr ? [] : [ "<32>{#p/basic}* 衣架上挂了个背包。" ]),
            "<32>{#p/human}* （你往背包里瞅了一眼...）",
            ...(SAVE.data.b.svr
               ? []
               : [ "<32>{#p/basic}* 这是什么？\n* 限量版的“超级星之行者”漫画？" ]),
            "<32>{#p/human}* （你带的东西太多，装不下它了。）"
         ]
      },
      bedfailToriel: [
         "<25>{#p/toriel}{#f/5}* Oh dear.",
         "<25>{#f/1}* Perhaps my actions have done more harm than I first imagined...",
         "<25>{#f/0}* ...\n* Worry not, my child.",
         "<25>* 好好休息。\n  然后，以饱满的状态\n  去迎接之后的旅程。",
         "<32>{#p/human}* (Toriel sits next to you and sings a lullaby to put you to sleep.)"
      ],
      blooky1: [
         "<32>{#p/napstablook}* Zzz... Zzz...",
         "<32>* Zzz... Zzz...",
         "<32>{#p/basic}* 这只幽灵不停地大声说“z”，\n  假装自己在睡觉。",
         choicer.create("* （“踩”过去吗？）", "是", "否")
      ],
      blooky2: [
         "<32>{#p/basic}* 幽灵还是把路挡着。",
         choicer.create("* （“踩”过去吗？）", "是", "否")
      ],
      blooky3: [
         "<32>{#p/napstablook}* 我经常来这边\n  因为这里很宁静...",
         "<32>* 但是今天我碰到了很好的人...",
         "<32>* 哦，我不挡你路了",
         "<32>* 回见..."
      ],
      blooky4: [
         "<32>{#p/napstablook}* 呃，所以...\n* 你真的挺喜欢我的，是吧",
         "<32>* 嘿... 谢谢你...",
         "<32>* 还有，嗯... \n  对不起之前挡了你的路...",
         "<32>* 我现在要到...\n* 别的地方去了...",
         "<32>* 回见..."
      ],
      blooky5: [
         "<32>{#p/napstablook}* 呃，好吧...\n  看来，你打心底里厌恶我",
         "<32>* 这样... 也挺好的...",
         "<32>* 好吧，我要忙自己的事去了",
         "<32>* 拜拜..."
      ],
      blooky6: [
         "<32>{#p/napstablook}* 呃... 发生了什么...",
         "<32>* ...",
         "<32>* 哦... 我得走了",
         "<32>* 回见..."
      ],
      blooky7: [
         "<32>{#p/napstablook}* 你甚至连句话都没有...？",
         "<32>* 你... 我都不知道\n  你到底怎么了...",
         "<32>* 好吧，我走了",
         "<32>* 拜拜..."
      ],
      breakfast: [ "<32>{#p/human}* （你得到了焗蜗牛。）" ],
      breakslow: [ "<32>{#p/human}* （你带的东西太多，装不下它了。）" ],
      candy1: () =>
         SAVE.data.b.svr
            ? [
                 "<32>{#p/human}* (You approach the vending machine.)",
                 choicer.create("* （你想合成什么呢？）", "怪物糖果", "水", "大麻素", "放弃")
              ]
            : [
                 "<32>{#p/basic}* 要用这台机器合成什么呢？",
                 choicer.create("* （你想合成什么呢？）", "怪物糖果", "水", "大麻素", "放弃")
              ],
      candy2: [ "<32>{#p/human}* （你得到了$(x)。）\n* （按[C]打开菜单。）" ],
      candy3: [ "<32>{#p/human}* （你得到了$(x)。）" ],
      candy4: () => [
         "<32>{#p/human}* （你得到了$(x)。）",
         ...(SAVE.data.b.svr ? [] : [ "<32>{#p/basic}* 机器开始出现异常了。" ])
      ],
      candy5: () => [
         "<32>{#p/human}* （你得到了$(x)。）",
         ...(SAVE.data.b.svr ? [] : [ "<32>{#p/basic}* 机器坏掉了。" ])
      ],
      candy6: () =>
         SAVE.data.b.svr
            ? [
                 [
                    "<25>{#p/asriel1}{#f/13}* Out of order again?",
                    "<25>{#f/17}* Yeah, that's... by design, actually.",
                    "<25>{#f/13}* This machine runs on the Outlands' own power supply, so...",
                    "<25>{#f/15}* To avoid using too much power, Toriel just made it break itself.",
                    "<26>{#f/20}* Not that she'd tell you."
                 ],
                 [
                    "<25>{#p/asriel1}{#f/13}* The reason that power supply is so small, though...",
                    "<25>{#f/17}* It's because, unlike the CORE, it only uses background radiation.",
                    "<25>{#f/13}* To put it into numbers, I'd say...",
                    "<25>{#f/15}* It generates about ten- thousandths of the power the CORE does."
                 ],
                 [
                    "<25>{#p/asriel1}{#f/13}* Hmm...",
                    "<25>{#f/15}* I wonder if, despite its low capacity...",
                    "<25>{#f/13}* This generator would be enough to power a small atmospheric system.",
                    "<25>{#f/17}* If the CORE was destroyed, could people survive here...?"
                 ],
                 [ "<26>{#p/asriel1}{#f/20}* ... asking for a friend." ]
              ][Math.min(asrielinter.candy6++, 3)]
            : [ "<32>{#p/basic}* 完全不工作了。" ],
      candy7: [ "<32>{#p/human}* （你打算什么也不合成。）" ],
      candy8: [ "<32>{#p/human}* （你带的东西太多了。）" ],
      chair1a: [
         "<25>{#p/toriel}{#f/1}{#n1}* 怎么了，孩子？\n* 饿了吗？",
         "<25>{#f/0}* 还是，对我看的这本书\n  比较感兴趣？",
         choicer.create("{#n1!}* （你要怎么回答？）", "饿了", "看书", "回家", "没事")
      ],
      chair1b: [
         "<25>{#p/toriel}{#n1}* 怎么了，孩子？",
         choicer.create("{#n1!}* （你要怎么回答？）", "饿了", "看书", "回家", "没事")
      ],
      chair1c: [ "<25>{#p/toriel}{#n1}* 需要任何东西随时告诉我哦。" ],
      chair1d: [ "<25>{#p/toriel}{#n1}* 如果改变主意的话\n  随时告诉我哦。" ],
      chair1e: [
         "<25>{#p/toriel}{#f/1}{#n1}* 睡不着吗？",
         "<25>{#f/1}* ...\n* If you like, I can read you this book...",
         "<25>{#f/0}* 书名叫《慷慨的怪物》，\n  是一个人类写的。",
         choicer.create("{#n1!}* （要听吗？）", "是", "否")
      ],
      chair1f: pager.create(
         0,
         [ "<25>{#p/toriel}{#n1}{#f/1}* Back for a visit?", "<25>{#f/0}* Well, feel free to stay as long as you need." ],
         [ "<26>{#p/toriel}{#n1}{#f/5}* I shall remain here, as I always have..." ]
      ),
      chair2a1: [
         "<25>{#p/toriel}{#f/1}{#n1}* Are you hungry?\n* Would you like me to make you a breakfast?",
         choicer.create("{#n1!}* （吃早餐吗？）", "是", "否")
      ],
      chair2a2: [ "<25>{#p/toriel}{#n1}* 太好了！\n* 我会在厨房做饭。" ],
      chair2a3: [
         "<25>{#p/toriel}{#f/1}{#n1}* Have you changed your mind about breakfast?",
         choicer.create("{#n1!}* （吃早餐吗？）", "是", "否")
      ],
      chair2a4: () =>
         SAVE.data.b.drop_snails
            ? [
                 "<25>{#p/toriel}{#f/3}{#n1}* 把我做好的早饭扔了，\n  还想让我再给你做一份？",
                 "<25>{#f/4}* 这小子...",
                 "<25>{#f/0}* No, little one.\n* I will not prepare another breakfast."
              ]
            : [
                 "<25>{#p/toriel}{#n1}* 我已经做过早饭了，小家伙。",
                 "<25>{#f/1}* 我们不能一天吃两顿早饭，\n  对吧？",
                 "<25>{#f/0}* 不然，就会让人觉得很奇怪。"
              ],
      chair2c1: [
         "<25>{#p/toriel}{#n1}* Ah, the book!\n* Yes, it is quite the fun little read.",
         "<25>{#f/0}* It is called \"Generous Monster\" and was written by a human.",
         "<25>{#f/1}* 想让我把它读给你听吗？",
         choicer.create("{#n1!}* （要听吗？）", "是", "否")
      ],
      chair2c2: [ "<25>{#p/toriel}{#n1}* 太好了！", "<25>{#g/torielCompassionSmile}* ..." ],
      chair2c3: [
         "<25>{#p/toriel}{#f/1}{#n1}* Do you want me to read you the book now?",
         choicer.create("{#n1!}* （要听吗？）", "是", "否")
      ],
      chair2c4: [
         "<25>{#p/toriel}{#f/1}{#n1}* 你想再听我读一遍吗？",
         choicer.create("{#n1!}* （要听吗？）", "是", "否")
      ],
      chair2c5: [ "<25>{#p/toriel}{#f/1}{#n1}* 好，故事从这里开始...", "<25>{#p/toriel}{#g/torielCompassionSmile}* ..." ],
      chair2c6: [
         "<25>{#f/1}{#n1}* “从前，有一只怪物...”",
         "<25>{#f/0}* “这个怪物爱上了\n  一个小小的人类。”",
         "<25>{#f/1}* “每天，\n  这个人类都会去找她...”",
         "<25>{#f/0}* “他们一起在田野上\n  奔跑，玩耍。”",
         "<25>{#f/1}* “他们一起唱歌，\n  一起分享故事...”",
         "<25>{#f/0}* “还会一起捉迷藏。”",
         "<25>{#f/1}* “人类玩累了，\n  怪物就会哄人类入睡，\n  帮人类盖上被子...”",
         "<25>{#f/0}* “人类非常喜欢这个怪物。”",
         "<25>{#f/0}* “怪物也因此感到快乐。”",
         "<25>{#f/1}* “但是，随着时间流逝，\n  人类渐渐长大，\n  离开了怪物...”",
         "<25>{#f/0}* “怪物则只能孤身一人。”",
         "<25>{#f/1}* “突然有一天，\n  人类回来了...”",
         "<25>{#f/0}* “怪物对人类说：\n  ‘来吧，一起来玩吧！’”",
         "<25>{#f/5}* “‘我已经长大，不能再玩了。’\n  人类这样回答。”",
         "<25>{#f/1}* “‘我想有一辆车，\n  开着它找一个新家。’”",
         "<25>{#f/5}* “‘对不起，’怪物说道，\n  ‘但是我太穷了，买不起车。’”",
         "<25>{#f/5}* “‘我只有两条腿，’”",
         "<25>{#f/0}* “‘爬到我的背上，\n  我可以带你去你\n  想去的地方。’”",
         "<25>{#f/0}* “‘这样，你就能去到城镇，\n  感到快乐。’”",
         "<25>{#f/1}* “于是人类爬到\n  怪物的背上...”",
         "<25>{#f/0}* “怪物带他们去了一个新家。”",
         "<25>{#f/0}* “怪物也因此感到快乐。”",
         "<25>{#f/1}* “但是，人类再次离开了怪物，\n  很久都没有回来看她。”",
         "<25>{#f/5}* “怪物十分难过。”",
         "<25>{#f/0}* “突然有一天，\n  人类又回来了。”",
         "<25>{#f/1}* “怪物笑得合不拢嘴，\n  她说...”",
         "<25>{#f/1}* “‘来吧，人类！\n  骑在我的背上，\n  让我带你去任何地方。’”",
         "<25>{#f/5}* “‘我现在很伤心，\n  没心情到处转悠。’\n  人类这样说道。”",
         "<25>{#f/1}* “‘我想有一个家庭，\n  有自己的孩子...’”",
         "<25>{#f/5}* “‘对不起，\n  但是我给不了你这些。’”",
         "<25>{#f/5}* “‘我只是一只怪物。’\n  怪物这样说道，”",
         "<25>{#f/0}* “‘但是，你可以留下来\n  和我待一会，我可以帮你\n  找到一个约会对象。’”",
         "<25>{#f/0}* “‘这样，你就可以\n  找到心爱之人，感到快乐。’”",
         "<25>{#f/1}* “于是人类留下来，\n  和老朋友待了一会儿...”",
         "<25>{#f/0}* “怪物为其找到了\n  可能喜欢的人。”",
         "<25>{#f/0}* “怪物也因此感到快乐。”",
         "<25>{#f/5}* “人类又一次离开了怪物，\n  很久之后才回来。”",
         "<25>{#f/1}* “当人类最终回来的时候，\n  怪物欣喜若狂...”",
         "<25>{#f/9}* “但她已经连说话\n  都十分困难。”",
         "<25>{#f/1}* “‘来吧，人类。’\n  她低声说道...”",
         "<25>{#f/1}* “‘让我带你去找\n  约会对象吧。’”",
         "<25>{#f/5}* “‘我年岁大了，而且很忙，\n  没空操心这些。'\n  人类这样回答。”",
         "<25>{#f/1}* “‘我只是想找个\n  今晚过夜的地方...’”",
         "<25>{#f/5}* “‘对不起，’怪物说，\n  ‘但我没有适合你的床。’”",
         "<25>{#f/5}* “‘我还是太穷了，\n  连一张床都买不起。’”",
         "<25>{#f/0}* “‘和我一起睡吧。’”",
         "<25>{#f/0}* “‘这样，你就可以获得休息，\n  感到快乐。’”",
         "<25>{#f/1}* “于是，人类躺在了\n  怪物怀里...”",
         "<25>{#f/0}* “怪物伴着人类入睡。”",
         "<25>{#f/0}* “怪物也因此感到快乐。”",
         "<25>{#f/5}* “...但心中另有所思。”",
         "<25>{#f/9}* “...很久很久以后，\n  人类终于回到了怪物身边。”",
         "<25>{#f/5}* “‘对不起，人类。’怪物说，\n  ‘但我的生命快走到尽头了。‘”",
         "<25>{#f/5}* “‘我的腿脚不听使唤了，\n  没法带你去任何地方。’”",
         "<25>{#f/10}* “‘我哪儿也不想去了，’\n  人类说。”",
         "<26>{#f/5}* “‘我找不到约会对象了，\n  我认识的人都不在了。’”",
         "<25>{#f/10}* “‘我不需要什么约会了。’”",
         "<25>{#f/5}* “我身体很虚弱，\n  你也不能睡在我身上了。’”",
         "<25>{#f/10}* “‘我不需要多少休息了。’”",
         "<25>{#f/5}* “‘我很抱歉，’怪物叹息道。”",
         "<25>{#f/5}* “‘我希望我还能为你做什么，\n  但我已经一无所有。’”",
         "<25>{#f/9}* “‘我现在只是一个\n  快要死去的老怪物。’”",
         "<25>{#f/5}* “‘对不起...’”",
         "<25>{#f/10}* “‘我现在不需要太多，’\n  人类说。”",
         "<25>{#f/10}* “‘只想在死前拥抱一下\n  我最好的朋友。’”",
         "<25>{#f/1}* “‘好，’怪物挺直腰板...”",
         "<25>{#f/0}* “‘你的朋友，这只老怪物\n  永远在这里等着你。’”",
         "<25>{#f/0}* “‘来吧，人类，到我这里来。\n  最后一次和我在一起。’”",
         "<25>{#f/9}* “人类走了过去。”",
         "<25>{#f/10}* “怪物... 十分快乐。”"
         
      ],
      chair2c7: [ "<25>{#f/0}{#n1}* 嗯，故事讲完了。", "<25>{#f/1}* 希望你能喜欢这个故事..." ],
      chair2c8: [ "<25>{#f/0}{#n1}* 嗯，讲完了。" ],
      chair2d1: [
         "<25>{#p/toriel}{#f/1}{#n1}* 回家...？\n* 能说的具体点吗？",
         "<32>{#p/human}{#n1!}* （你要怎么回答？）{!}\nµµµµµµµµ　　　　　µµµµµ什么时候　\nµµµµµµµµ别放在心上µµµµµ可以回家？{#c/0/8/6}"
      ],
      chair2d2: [
         "<25>{#p/toriel}{#f/1}{#n1}* 但... 这里就是你的家啊，\n  不是吗？",
         "<32>{#p/human}{#n1!}* (What do you say?){!}\nµµµµµµµµµµµµµµµµµµHow to exit\nµµµµµµµµSorryµµµµµthe Outlands{#c/0/8/2}"
      ],
      chair2d3: [
         "<25>{#p/toriel}{#f/5}{#n1}* 请你... 理解一下...",
         "<25>{#p/toriel}{#f/5}{#n1}* 我这么做都是为了你好。"
      ],
      chair2d4: [
         "<25>{#p/toriel}{#f/5}{#n1}* My child...",
         "<32>{#p/human}{#n1!}* (What do you say?){!}\nµµµµµµNeverµµµµµµµµµHow to exit\nµµµµµµmindµµµµµµµµµµthe Outlands{#c/0/6/4}"
      ],
      chair2d5: [ "<25>{#p/toriel}{#f/5}{#n1}* ..." ],
      chair2d6: [
         "<25>{#p/toriel}{#f/9}{#n1}* ...",
         "<25>{#p/toriel}{#f/9}* Please, wait here.",
         "<25>{#p/toriel}{#f/5}* There is something I have to do."
      ],
      chair3: () =>
         SAVE.data.b.svr
            ? [
                 [
                    "<25>{#p/asriel1}{#f/20}* I still can't believe she moved this all the way from the Citadel.",
                    "<25>{#f/17}* But... I understand why she'd want to.",
                    "<25>{#f/13}* Mom and this chair of hers go pretty far back.."
                 ],
                 [
                    "<25>{#p/asriel1}{#f/13}* One time, she told me something...",
                    "<25>{#f/17}* \"This chair reminds me of home.\"",
                    "<25>{#f/13}* But she was already at home, so I asked her what she meant.",
                    "<25>{#f/17}* Turns out she had this at her home...",
                    "<25>{#f/23}* ... on the old homeworld."
                 ],
                 [
                    "<25>{#p/asriel1}{#f/13}* I don't know much about that world, Frisk...",
                    "<25>{#f/17}* But I hear it was very... idyllic.",
                    "<25>{#f/20}* Sure, there were lots of advances in magic and technology...",
                    "<25>{#f/17}* But people loved it, because life was so... simple."
                 ],
                 [ "<25>{#p/asriel1}{#f/23}* What I wouldn't give to have a simple life." ]
              ][Math.min(asrielinter.chair3++, 3)]
            : world.darker
            ? [ "<32>{#p/basic}* 一把扶椅。" ]
            : [ "<32>{#p/basic}* 一把舒适的扶椅。", "<32>* 大小正好适合Toriel。" ],
      chair4: [ "<25>{#p/toriel}{#n1!}* 啊，你醒了。", "<25>* I have left your breakfast on the table for you." ],
      closetrocket: {
         a: () => [
            "<32>{#p/human}* （你往箱子里瞅了一眼...）",
            ...(SAVE.data.b.svr
               ? [
                    [
                       "<25>{#p/asriel1}{#f/13}* Yeah, uh, that's about all you'll find in there.",
                       "<25>{#f/17}* I'm not sure why Toriel put this here.",
                       "<25>{#f/17}* $(name) and I were never interested in comic books."
                    ],
                    [ "<25>{#p/asriel1}{#f/10}* I guess she just wanted to pretend we were living here...?" ],
                    [ "<25>{#p/asriel1}{#f/13}* The things a mother does to make herself feel better..." ]
                 ][Math.min(asrielinter.closetrocket_a++, 2)]
               : [ "<32>{#p/basic}* 没有其他东西了。" ])
         ],
         b: () => [
            "<32>{#p/human}* （你往箱子里瞅了一眼...）",
            ...(SAVE.data.b.svr
               ? []
               : [ "<32>{#p/basic}* 这是什么？\n* 限量版的“超级星之行者”漫画？" ]),
            "<32>{#s/equip}{#p/human}* （你获得了“超级星之行者3”。）"
         ],
         b2: () => [
            "<32>{#p/human}* （你往箱子里瞅了一眼...）",
            ...(SAVE.data.b.svr
               ? []
               : [ "<32>{#p/basic}* 这是什么？\n* 限量版的“超级星之行者”漫画？" ]),
            "<32>{#p/human}* （你带的东西太多，装不下它了。）"
         ]
      },
      goner: {
         a1: [
            "<32>{#p/human}* 一片未被凡俗关联所羁绊的宇宙...",
            "<32>* 仅为了那纯洁无瑕的美，\n  而存在于斯...",
            "<32>* 在这里，\n  某种特别之物，独自闪耀。"
         ],
         a2: [ "<32>* 告诉我...", "<32>* 此情此景... 可曾引起过你的好奇？" ]
      },
      danger_puzzle1: () => [
         "<25>{#p/toriel}* 这个房间里的谜题\n  和之前的都不太一样。",
         [ 1, 5 ].includes(SAVE.data.n.state_wastelands_dummy)
            ? "<25>{#f/3}* 说不定，比起应付人偶...\n  这个谜题更合你胃口？"
            : "<25>{#f/1}* 你能靠自己解开它吗？"
      ],
      danger_puzzle2: () =>
         world.darker
            ? [ "<32>{#p/basic}* 这台终端太高了，你够不到。" ]
            : [ "<32>{#p/basic}* 终端高高地耸立在你的面前，\n  挡住了你急切的脚步。" ],
      danger_puzzle3: () => [
         [ 1, 5 ].includes(SAVE.data.n.state_wastelands_dummy)
            ? "<25>{#p/toriel}{#f/3}* 又怎么了..."
            : "<25>{#p/toriel}{#f/1}* 怎么了？\n* 需要帮忙吗？"
      ],
      danger_puzzle4: () => [
         ...([ 1, 5 ].includes(SAVE.data.n.state_wastelands_dummy)
            ? [ "<25>{#p/toriel}{#f/5}* 唉... 我知道了。", "<25>{#f/5}* 这台终端太高了，\n  你够不到。" ]
            : [
                 "<25>{#p/toriel}{#f/7}* ...天哪。",
                 "<25>{#f/6}* 这应该是个设计上的小失误。",
                 "<25>{#f/1}* 这台终端太高了，\n  你够不到是吗？"
              ]),
         "<25>{#f/0}* 没关系。\n* 我可以替你操作。",
         "<25>{#f/0}* ...",
         "<25>{#f/0}* 密码是一个谜语的谜底。\n* 想猜猜看吗？",
         choicer.create("* （猜谜吗？）", "是", "否")
      ],
      danger_puzzle5a: [
         "<25>{#p/toriel}* 太好了！\n* 对你这么大的孩子来说...",
         "<25>{#f/0}* 热爱学习，渴求知识\n  是尤为重要的。"
      ],
      danger_puzzle5b: [
         "<25>{#p/toriel}{#f/0}* 谜面是个问题。",
         "<25>{#p/toriel}{#f/1}* “什么东西，做起来像蛋糕，\n  读起来像小麦？\n  （打一单字食物名）”"
      ],
      danger_puzzle5c: [
         "<32>{#p/human}* （...）\n* （你把答案告诉了Toriel。）",
         "<25>{#p/toriel}{#f/0}* ...啊，想法不错！\n* 学习态度也很积极！"
      ],
      danger_puzzle5d: [
         "<32>{#p/human}* （...）\n* （你告诉Toriel，你猜不出来。）",
         "<25>{#p/toriel}{#f/1}* ...怎么了，孩子？\n* 有什么心事吗？",
         "<25>{#f/5}* ...嗯...",
         "<25>{#f/0}* 哦，好吧。\n* 我来帮你解开这个迷题吧。"
      ],
      danger_puzzle5e: () =>
         [ 1, 5 ].includes(SAVE.data.n.state_wastelands_dummy)
            ? [ "<25>{#p/toriel}{#f/5}* ...", "<25>{#f/5}* I see." ]
            : [ "<25>{#p/toriel}{#f/0}* ...", "<25>{#f/0}* 这次的谜题，我替你解吧。" ],
      danger_puzzle6: () => [
         [ 1, 5 ].includes(SAVE.data.n.state_wastelands_dummy) && SAVE.data.b.w_state_riddleskip
            ? "<25>{#p/toriel}{#f/5}* And... {#x1}there.\n* The pathway is clear."
            : "<25>{#p/toriel}* 还有... {#x1}这个！\n* 可以继续前进了。"
      ],
      danger_puzzle7: () => [
         [ 1, 5 ].includes(SAVE.data.n.state_wastelands_dummy) && SAVE.data.b.w_state_riddleskip
            ? "<25>{#p/toriel}{#f/5}* 我等着你来下个房间。"
            : "<25>{#p/toriel}* 要是你准备好了，\n  就可以来下个房间了。"
      ],
      danger_puzzle8: () =>
         SAVE.data.b.svr
            ? [ "<32>{#p/human}* （但你还是够不到终端。）" ]
            : [ "<32>{#p/basic}* 即便是现在，那台终端\n  依然高高耸立在这里。" ],
      denie: [ "<32>{#p/human}* （你带的东西太多，装不下它了。）" ],
      dipper: {
         a: [
            "<32>{#p/human}* （你捡起了“小熊座”。）",
            choicer.create("* （装备上小熊座吗？）", "是", "否")
         ],
         b: [ "<32>{#p/human}* （你带的东西太多，装不下它了。）" ]
      },
      drop_pie: [ "<25>{#p/toriel}{#f/1}* 派粥是用来喝的，\n  不是让你往地上倒的。" ],
      drop_pie3: [ "<25>{#p/toriel}{#f/1}* 请你别把好好的食物\n  往地上扔，好吗？" ],
      drop_snails: [ "<25>{#p/toriel}{#f/1}* 这些可怜的焗蜗牛\n  又怎么你了？" ],
      drop_soda: [ "<32>{#p/basic}{#n1}* Aww c'mon! ;)", "<32>* I poured my heart into that! ;)" ],
      drop_steak: [ "<32>{#p/basic}{#n1}* Seriously!? ;)", "<32>* That steak was utterly priceless! ;)" ],
      dummy1: [
         "<25>{#p/toriel}{#f/0}* 接下来，我要教你\n  如何应对其他怪物的攻击。",
         "<25>{#f/1}* 身为人类，在前哨站走动时，\n  怪物们很可能袭击你...",
         "<25>{#f/0}* 这时，你就会进入\n  称作“战斗”的环节。",
         "<25>{#f/0}* 幸好，你可以\n  通过多种方式解决。",
         "<25>{#f/1}* 眼下，我建议\n  友好地和他们对话...",
         "<25>{#f/0}* ...好给我机会出面解决冲突。"
      ],
      dummy2: [ "<25>{#p/toriel}* 你可以从试着\n  和那边的人偶说说话开始。" ],
      dummy3: [
         "<25>{#p/toriel}{#f/7}* ...你觉得\n  我就是训练人偶？",
         "<25>{#f/6}* 哈哈哈！\n* 你真是太可爱了！",
         "<25>{#f/0}* 但很遗憾，我只是个\n  喜欢瞎操心的老阿姨哦。"
      ],
      dummy4: [
         "<25>{#p/toriel}* 孩子，没有什么好担心的。",
         "<25>* 区区一个人偶也不会伤害你，\n  对吧？"
      ],
      dummy5: [ "<25>{#p/toriel}{#f/1}* 不要怕，小家伙..." ],
      dummy6: [
         "<25>{#p/toriel}{#f/2}* 住手啊，孩子！\n* 人偶不是用来打的！",
         "<25>{#f/1}* 而且，我们可不想\n  伤害任何人，对吗？",
         "<25>{#f/0}* 来吧。"
      ],
      dummy7: [ "<25>{#p/toriel}* 非常棒！\n* 你学得真快！" ],
      dummy8: [
         "<25>{#p/toriel}{#f/1}* 怎么逃跑了...？",
         "<25>{#f/0}* 好吧，其实这样也不差。",
         "<26>{#f/1}* 不管对手是想欺负你，\n  还是想这个人偶一样\n  想和你聊天...",
         "<25>{#f/0}* 只要你跑的够快，\n  什么都能避免。"
      ],
      dummy9: [ "<25>{#p/toriel}{#f/3}* ...", "<25>{#f/4}* ...", "<25>{#f/0}* 咱们去下一个房间吧。" ],
      dummy9a: [ "<25>{#p/toriel}{#f/3}* ...", "<25>{#f/4}* ...", "<25>{#f/6}* The next room awaits." ],
      dummy10: [
         "<25>{#p/toriel}{#f/7}* 天哪，孩子...",
         "<25>{#f/0}* 我第一次看到\n  这么有爱的场面啊...",
         "<25>{#f/0}* 总之，你已经出色地掌握了\n  教给你的东西。",
         "<25>{#f/0}* 咱们去下一个房间吧。"
      ],
      dummy11: [ "<25>{#p/toriel}* The next room awaits." ],
      dummy12: [
         "<25>{#p/toriel}{#f/2}* 我的天哪，孩子！\n* 快住手！",
         "<25>{#f/1}* ...",
         "<25>{#f/0}* 幸好，\n  打的只是一个训练人偶。",
         "<25>{#f/1}* In the future, however, it would be wise...",
         "<25>{#f/0}* ... not to slap people half to death!",
         "<26>{#f/0}* Anywho.\n* The next room awaits."
      ],
      eat_pie: [ "<25>{#p/toriel}{#f/1}{#n1}* Tasty, is it not?" ],
      eat_snails: [ "<25>{#p/toriel}{#f/0}{#n1}* I hope your breakfast sufficed." ],
      eat_soda: [
         "<32>{#p/basic}* Aaron pulled out his phone and snapped a picture.",
         "<32>{#p/basic}{#n1}* Ooh, I could definitely put this on an poster somewhere ;)"
      ],
      eat_steak: [
         "<32>{#p/basic}* Aaron shot you with a wink.",
         "<32>{#p/basic}{#n1}* You like the product, lassy? ;)"
      ],
      endtwinkly2: [
         "<32>{#p/basic}* Who does he think he is?",
         "<32>* You've been nothing but kind to everyone we've met.",
         "<32>* That talking star really needs to get a life..."
      ],
      endtwinklyA1: [
         "<25>{#p/twinkly}{#f/12}* You idiot...",
         "<25>* Didn't you hear me before!?",
         "<25>* I thought I told you not to screw it up!",
         "<25>* Now look what you've done to our plan.",
         "<25>{#f/8}* ...",
         "<25>{#f/6}* You better fix this, $(name).",
         "<25>{#f/5}* It's our destiny."
      ],
      endtwinklyA2: () =>
         SAVE.flag.n.genocide_milestone < 1
            ? [
                 "<25>{#p/twinkly}{#f/5}* 哈喽，$(name)。",
                 "<25>{#f/5}* Seems you don't want to play with me anymore.",
                 "<25>{#f/6}* I tried being patient with you, but here we are...",
                 "<25>{#f/6}* Back at the beginning again.",
                 "<25>{#f/8}* Again, and again...",
                 "<25>{#f/5}* You must think this is all very funny.",
                 "<25>{#f/7}* Teasing me with the chance to be with you, only to tear it away...",
                 "<25>{#f/5}* Well, that's fine.",
                 "<25>{#f/5}* If that's the game you're going to play, then go right ahead.",
                 "<25>{#f/11}* Just don't expect to be in control for long...",
                 "<25>{#f/7}* Sooner or later, you're going to regret what you've done."
              ]
            : [
                 "<25>{#p/twinkly}{#f/6}* 哈喽，$(name)。",
                 ...(SAVE.flag.n.genocide_milestone < 7
                    ? [
                         "<25>{#f/6}* I've had some time to think about what happened.",
                         "<25>{#f/5}* It was thrilling, at first...",
                         "<25>* The thought of taking the outpost by force together...",
                         "<25>{#f/6}* But now, I'm not sure.",
                         "<25>{#f/8}* ...",
                         "<25>{#f/8}* I guess... I got a bit carried away back there.",
                         "<25>{#f/5}* But that's okay, right?\n* You'll forgive me, won't you?"
                      ]
                    : [
                         "<25>{#f/6}* I'm still not really sure what happened back there...",
                         "<25>{#f/5}* It's... kinda scaring me, haha...",
                         "<25>{#f/8}* ...",
                         "<25>{#f/8}* Maybe... we should hold off on things for now.",
                         "<25>{#f/5}* But that's okay, right?\n* You'll be fine with that, won't you?"
                      ]),
                 "<25>{#f/6}* ...",
                 "<25>{#f/8}* Goodbye, $(name)...",
                 ...(SAVE.flag.n.genocide_milestone < 7 ? [ "<25>{#f/5}* I'll be back before you know it." ] : [])
              ],
      endtwinklyA3: [
         "<25>{#p/twinkly}{#f/5}* 哈喽！\n* 我叫{@fill:#ff0}TWINKLY{@fill:#fff}。\n* 星界的{@fill:#ff0}闪亮明星{@fill:#fff}！"
      ],
      endtwinklyA4: [
         "<32>{#p/event}* Apologies.\n* This was not the intended course of events.",
         "<32>* The data at your last SAVE point indicates Asriel has absorbed Toriel's SOUL.",
         "<32>* However, Asriel's character data indicates he no longer intends to repeat this event.",
         "<32>* Therefore, it is possible for you to LOAD to a point at which these states conflict.",
         "<32>* This possibility creates an anomaly in the causal nexus which cannot be accounted for.",
         "<32>* To put it in simpler terms, Asriel would be forced to react to each LOAD you perform.",
         "<32>* As he can remember each LOAD, his reaction would vary from one instance to the next.",
         "<32>* As you can LOAD an infinite number of times, he would have an infinite set of reactions.",
         "<32>* An infinite set of reactions cannot exist, and as such, this scenario cannot continue."
      ],
      endtwinklyA5: [ "<32>{#p/event}* Goodbye." ],
      endtwinklyAreaction: [
         "<32>{#p/basic}* Sorry, did I miss something?",
         "<32>* I've never talked to him in my life, let alone go on some mission with him.",
         "<32>* Oh well.\n* It wouldn't be the first time he's made up stories about me."
      ],
      endtwinklyB: () =>
         SAVE.data.b.w_state_lateleave
            ? [
                 "<25>{#p/twinkly}{#f/5}{#v/0}* 呵。\n* 没想到你就这么跑了。",
                 "<25>{#f/11}{#v/0}* 以为规矩这么好打破吗？",
                 "<25>{#f/7}{#v/0}* 嘻嘻嘻...",
                 "<25>{#f/0}{#v/1}* 在这个世界上...\n  不是杀人就是被杀。"
              ]
            : [
                 "<25>{#p/twinkly}{#f/5}{#v/0}* Clever.\n* Verrrryy clever.",
                 "<25>{#f/11}{#v/0}* You think you're really smart, don'tcha?",
                 "<25>{#f/7}{#v/0}* 嘻嘻嘻...",
                 "<25>{#f/0}{#v/1}* 在这个世界上...\n  不是杀人就是被杀。"
              ],
      endtwinklyB2: [
         "<25>{#f/8}{#v/0}* If you had just killed a FEW more monsters...",
         "<25>{#f/9}{#v/0}* Well, maybe I shouldn't reveal my plans this early.",
         "<25>{#f/7}{#v/0}* You know, $(name)...",
         "<25>{#f/5}{#v/0}* It's only a matter of time before we're together again.",
         "<25>{#f/6}{#v/0}* Try a little harder next time, and maybe...",
         "<25>{#f/5}{#v/0}* You'll get to see something new.",
         "<25>{#f/11}{#v/0}* Until we meet again..."
      ],
      endtwinklyB3: [
         "<25>{#f/8}{#v/0}* If you had just killed ONE more monster...",
         "<25>{#f/9}{#v/0}* Well, maybe I shouldn't reveal my plans this early.",
         "<25>{#f/7}{#v/0}* You know, $(name)...",
         "<25>{#f/5}{#v/0}* It's only a matter of time before we're together again.",
         "<25>{#f/6}{#v/0}* Try a little harder next time, and maybe...",
         "<25>{#f/5}{#v/0}* You'll get to see something new.",
         "<25>{#f/11}{#v/0}* Until we meet again..."
      ],
      endtwinklyBA: () => [
         SAVE.data.n.state_wastelands_napstablook === 5
            ? "<25>{#p/twinkly}{#f/6}{#v/0}* So you made it through without killing anyone."
            : "<25>{#p/twinkly}{#f/6}{#v/0}* So you spared the life of everyone you came across.",
         "<25>{#f/5}{#v/0}* I bet you feel really great.",
         "<25>{#f/2}{#v/1}* But what will you do if you meet a serial murderer?",
         "<25>{#f/9}{#v/0}* You'll die, and you'll die, and you'll die...",
         "<25>{#f/5}{#v/0}* Eventually, you'll tire of trying.",
         "<25>{#f/11}{#v/0}* What then, huh?",
         "<25>{#f/2}{#v/1}* Will you KILL out of frustration?",
         "<25>{#f/14}{#v/1}* Or will you simply GIVE UP?",
         "<25>{#f/11}{#v/0}* Hee hee hee...",
         "<25>{#f/7}{#v/0}* This is gonna be SO much fun.",
         "<25>{#f/9}{#v/0}* I'll be watching!"
      ],
      endtwinklyBB: () => [
         SAVE.data.b.w_state_lateleave
            ? "<25>{#p/twinkly}{#f/6}{#v/0}* So you managed to stay out of one person's way."
            : "<25>{#p/twinkly}{#f/6}{#v/0}* So you spared the life of a single person.",
         "<25>{#f/11}{#v/0}* But what about everyone else, huh?",
         "<25>{#f/7}{#v/0}* Froggit, Flutterlyte, Gelatini, Silente, Oculoux, Mushy...",
         "<25>{#f/6}{#v/0}* Don'tcha think any of them have families?",
         "<25>{#f/8}{#v/0}* Don'tcha think any of them have friends?",
         "<25>{#f/5}{#v/0}* Each one could've been someone else's Toriel.",
         "<25>{#f/5}{#v/0}* ...",
         "<25>{#f/7}{#v/0}* Selfish brat."
      ],
      endtwinklyBBA: [ "<25>{#f/0}{#v/1}* Someone's dead because of you." ],
      endtwinklyBBB: [ "<25>{#f/0}{#v/1}* Monsters are dead because of you." ],
      endtwinklyBC: [
         "<25>{#p/twinkly}{#f/5}{#v/0}* I'm sure you're well aware of that, though...",
         "<25>{#f/6}{#v/0}* Considering you've already killed Toriel once before.",
         "<25>{#f/7}{#v/0}* Ain't that right, brat?",
         "<25>{#f/2}{#v/1}* You MURDERED her.",
         "<25>{#f/7}{#v/0}* And then, you felt bad...\n* Ain't that right?",
         "<25>{#f/7}{#v/0}* 嘻嘻嘻...",
         "<25>{#f/11}{#v/0}* Do you think you're the only one with that power?",
         "<25>{#f/6}{#v/0}* The power to reshape the universe, purely by your determination...",
         "<25>{#f/8}{#v/0}* The power to SAVE...",
         "<25>{#f/7}{#v/0}* That used to be MY power, you know.",
         "<25>{#f/6}{#v/0}* Seems YOUR desires for this world override MINE.",
         "<25>{#f/5}{#v/0}* Well then.\n* Enjoy that power while you can.",
         "<25>{#f/9}{#v/0}* I'll be watching!"
      ],
      endtwinklyBD: () => [
         SAVE.data.b.w_state_lateleave
            ? "<25>{#p/twinkly}{#f/6}{#v/0}* So you managed to stay out of one person's way."
            : "<25>{#p/twinkly}{#f/6}{#v/0}* So you spared the life of a single person.",
         "<25>{#f/11}{#v/0}* But what about everyone else, huh?",
         "<25>{#f/7}{#v/0}* Froggit, Flutterlyte, Gelatini, Silente, Oculoux, Mushy...",
         "<25>{#f/0}{#v/0}* They're all gone now.",
         "<25>{#f/11}{#v/0}* What's Toriel gonna do when she finds out, huh?",
         "<25>{#f/2}{#v/1}* What if she KILLS herself out of grief?",
         "<25>{#f/11}{#v/0}* If you think you're saving her just by SPARING her...",
         "<25>{#f/7}{#v/0}* Then you're even dumber than I thought.",
         "<25>{#f/9}* Well, see ya!"
      ],
      endtwinklyC: [
         "<25>{#f/7}{#v/0}* After all, this used to be MY power.",
         "<25>{#f/6}{#v/0}* The power to reshape the universe, purely by your determination...",
         "<25>{#f/8}{#v/0}* The power to SAVE...",
         "<25>{#f/6}{#v/0}* I thought I was the only one who could do that.",
         "<25>{#f/6}{#v/0}* Seems YOUR desires for this world override MINE.",
         "<25>{#f/5}{#v/0}* Well then.\n* Enjoy that power while you can.",
         "<25>{#f/9}{#v/0}* I'll be watching!"
      ],
      endtwinklyD: [
         "<25>{#p/twinkly}{#f/11}{#v/0}* You're one hell of a tease, huh?",
         "<25>{#f/8}{#v/0}* Beating monsters within an inch of their lives, only to let them go...",
         "<25>{#f/7}{#v/0}* What will you do if a monster doesn't WANT your mercy?",
         "<25>{#f/6}{#v/0}* Will you snuff the light out of their eyes?",
         "<25>{#f/5}{#v/0}* Or will you realize your faulty \"pacifism\" is for nothing?",
         "<25>{#f/11}{#v/0}* Hee hee hee...",
         "<25>{#f/7}{#v/0}* This is gonna be SO much fun.",
         "<25>{#f/9}{#v/0}* I'll be watching!"
      ],
      endtwinklyE: [
         "<25>{#p/twinkly}{#f/7}{#v/0}* Wow, you're utterly repulsive.",
         "<26>{#f/11}{#v/0}* You got by peacefully...",
         "<25>{#f/5}{#v/0}* Then, you figured that wasn't good enough for you.",
         "<25>{#f/2}{#v/1}* So you KILLED her just to see what would happen.",
         "<25>{#f/7}{#v/0}* 嘻嘻嘻...",
         "<25>{#f/0}{#v/0}* You did it out of BOREDOM."
      ],
      endtwinklyEA: [ "<25>{#f/11}{#v/0}* Don't think I don't know how this works..." ],
      endtwinklyEB: [ "<25>{#f/6}{#v/0}* It's sad, though..." ],
      endtwinklyF: [ "<25>{#p/twinkly}{#f/11}{#v/0}* Look at you, playing with her life like this..." ],
      endtwinklyFA: [ "<25>{#f/7}{#v/0}* Killing her, leaving her, killing her again..." ],
      endtwinklyFB: [ "<25>{#f/7}{#v/0}* Leaving her, killing her, leaving her again..." ],
      endtwinklyFXA: [
         "<25>{#f/11}{#v/0}* It's fun, isn't it?",
         "<25>{#f/6}{#v/0}* Endlessly toying with the lives of others...",
         "<25>{#f/8}{#v/0}* Watching how they react to every possible decision...",
         "<25>{#f/11}{#v/0}* Isn't it thrilling?",
         "<25>{#f/7}{#v/0}* 嘻嘻嘻...",
         "<25>{#f/9}{#v/0}* I wonder what you'll do next.",
         "<25>{#f/5}{#v/0}* I'll be watching..."
      ],
      endtwinklyG: [
         "<25>{#p/twinkly}{#f/10}{#v/0}* You just can't get enough, can you~",
         "<25>{#f/11}{#v/0}* How many more times will you KILL her, eh?",
         "<25>{#f/7}{#v/0}* 嘻嘻嘻...",
         "<25>{#f/0}{#v/1}* You kinda remind me of myself.",
         "<25>{#f/9}{#v/0}* Well, cya!"
      ],
      endtwinklyG1: [
         "<25>{#p/twinkly}{#f/6}{#v/0}* Again?\n* Golly...",
         "<25>{#f/0}{#v/1}* You REALLY remind me of myself."
      ],
      endtwinklyG2: [
         "<25>{#p/twinkly}{#f/6}{#v/0}* Again!?",
         "<25>{#f/8}{#v/0}* Wow, you're even worse than I thought."
      ],
      endtwinklyH: () => [
         SAVE.data.b.w_state_lateleave
            ? "<25>{#p/twinkly}{#f/5}{#v/0}* So you've finally gotten by peacefully, huh?"
            : "<25>{#p/twinkly}{#f/5}{#v/0}* So you've finally decided to show mercy, huh?",
         "<25>{#f/5}{#v/0}* And after all that KILLING...",
         "<25>{#f/11}{#v/0}* Say, was this your idea all along?",
         "<25>{#f/2}{#v/1}* To get a rush out of her death, then spare her once you got bored?",
         "<25>{#f/7}{#v/0}* 嘻嘻嘻...",
         "<25>{#f/11}{#v/0}* What a saint you must think you are.",
         "<25>{#f/5}{#v/0}* But hey, it's not as if I don't know how this works..."
      ],
      endtwinklyI: [
         "<25>{#p/twinkly}{#f/11}{#v/0}* Hee hee hee...",
         "<25>{#f/7}{#v/0}* I hope you like your choice.",
         "<25>{#f/9}{#v/0}* I mean, it's not as if you can go back and change fate.",
         "<25>{#f/0}{#v/1}* 在这个世界上...\n  不是杀人就是被杀。",
         "<25>{#f/5}{#v/0}* That old woman thought she could break the rules.",
         "<25>{#f/8}{#v/0}* She tried so hard to save you humans...",
         "<25>{#f/6}{#v/0}* But when it came down to it, she couldn't even save herself."
      ],
      endtwinklyIX: [
         "<25>{#p/twinkly}{#f/11}{#v/0}* Hee hee hee...",
         "<25>{#f/11}{#v/0}* So you finally caved in and killed someone, huh?",
         "<25>{#f/7}{#v/0}* Well, I hope you like your choice.",
         "<25>{#f/9}{#v/0}* I mean, it's not as if you can go back and change fate.",
         "<25>{#f/0}{#v/1}* 在这个世界上...\n  不是杀人就是被杀。",
         "<25>{#f/8}{#v/0}* ... what's wrong?\n* Did she not last as long as you thought?",
         "<26>{#f/6}{#v/0}* Oh, how terrible.\n* Guess not everyone can be beat into submission."
      ],
      endtwinklyIA: [ "<25>{#f/11}{#v/0}* What an idiot!" ],
      endtwinklyIAX: [ "<25>{#f/7}{#v/0}* What a shame for her." ],
      endtwinklyIB: [ "<25>{#f/6}{#v/0}* As for you..." ],
      endtwinklyJ: [
         "<25>{#p/twinkly}{#f/6}{#v/0}* Wow.",
         "<25>{#f/7}{#v/0}* And here I thought you were the righteous one for showing mercy.",
         "<25>{#f/11}{#v/0}* Hah!\n* What a joke.",
         "<25>{#f/6}{#v/0}* ...",
         "<25>{#f/6}{#v/0}* How did it feel to finally satisfy your violent side?",
         "<25>{#f/7}{#v/0}* 嘻嘻嘻...",
         "<25>{#f/0}{#v/1}* I bet it felt GOOD, didn't it?",
         "<25>{#f/11}{#v/0}* I mean, I should know..."
      ],
      endtwinklyK: [
         "<25>{#p/twinkly}{#f/5}{#v/0}* Nice to see you again.",
         "<25>{#f/6}{#v/0}* By the way, you're the most boring person in the galaxy.",
         "<25>{#f/12}{#v/0}* Getting by peacefully, then going back just to do it again?",
         "<25>{#f/8}{#v/0}* Come on...",
         "<25>{#f/2}{#v/1}* You know as well as I do that it's KILL or BE killed."
      ],
      endtwinklyK1: [
         "<25>{#p/twinkly}{#f/6}* Aren't you getting tired of this?",
         "<25>{#f/8}{#v/0}* Come on...",
         "<25>{#f/2}{#v/1}* You KNOW deep down that part of you wants to hurt her.",
         "<25>{#f/14}{#v/1}* A few good hits, and she'd be dead before your very eyes.",
         "<25>{#f/11}{#v/0}* Wouldn't that be exciting?",
         "<25>{#f/6}{#v/0}* ...",
         "<25>{#f/8}{#v/0}* ...",
         "<25>{#f/7}{#v/0}* See ya, idiot."
      ],
      endtwinklyK2: [
         "<25>{#p/twinkly}{#f/8}{#v/0}* Are you doing this just to see how I react?",
         "<25>{#f/6}{#v/0}* Is that what this is about?",
         "<25>{#f/7}{#v/0}* Well, don't expect to get anything else outta me.",
         "<25>{#f/6}{#v/0}* All this boring pacifism is getting tiresome.",
         "<25>{#f/11}{#v/0}* Now, if something more interesting were to happen...",
         "<25>{#f/9}{#v/0}* Perhaps I'd be more inclined to talk.",
         "<25>{#f/6}{#v/0}* ...",
         "<25>{#f/8}{#v/0}* ...",
         "<25>{#f/7}{#v/0}* See ya, idiot."
      ],
      endtwinklyKA: [
         "<25>{#f/7}{#v/0}* Sooner or later, you'll be forced to realize that.",
         "<25>{#f/11}{#v/0}* And when that time comes...",
         "<25>{#f/5}{#v/0}* Well, let's just say I'm interested to see what happens.",
         "<25>{#f/11}{#v/0}* Hee hee hee...",
         "<25>{#f/9}{#v/0}* Good luck!"
      ],
      endtwinklyKB: [
         "<25>{#f/11}{#v/0}* Hee hee hee...",
         "<25>{#f/7}{#v/0}* Maybe that's why you killed that one monster.",
         "<25>{#f/8}{#v/0}* I mean, you went almost the whole way without killing anyone...",
         "<25>{#f/6}{#v/0}* But somewhere along the line, you screwed up.",
         "<25>{#f/5}{#v/0}* All that good karma you had went straight down the toilet.",
         "<25>{#f/11}{#v/0}* Golly, you can't do anything right!",
         "<25>{#f/11}{#v/0}* What a joke!"
      ],
      endtwinklyKC: [
         "<25>{#f/11}{#v/0}* Hee hee hee...",
         "<25>{#f/7}{#v/0}* Maybe that's why you killed those other monsters.",
         "<25>{#f/8}{#v/0}* I mean, you had a good run, but...",
         "<25>{#f/6}{#v/0}* What's the point in mercy if it doesn't mean anything?",
         "<25>{#f/7}{#v/0}* And believe me, after you did what you did...",
         "<25>{#f/2}{#v/1}* It doesn't mean JACK.",
         "<25>{#f/6}{#v/0}* ...",
         "<25>{#f/8}{#v/0}* ...",
         "<25>{#f/7}{#v/0}* See ya, idiot."
      ],
      endtwinklyKD: [
         "<25>{#f/11}{#v/0}* What's wrong with killing Toriel, huh?\n* Too good for that?",
         "<25>{#f/7}{#v/0}* 嘻嘻嘻...",
         "<25>{#f/2}{#v/1}* I know you're still rotten to the core.",
         "<25>{#f/11}{#v/0}* I mean, you managed to take out everyone in your path...",
         "<25>{#f/6}{#v/0}* But when it came to the final hurdle, you failed.",
         "<25>{#f/11}{#v/0}* Golly, you can't do anything right!",
         "<25>{#f/11}{#v/0}* What a joke!"
      ],
      endtwinklyL: [
         "<25>{#p/twinkly}{#f/6}{#v/0}* Back again, huh?\n* Golly...",
         "<25>{#f/8}{#v/0}* You've changed the timeline around so much...",
         "<25>{#f/6}{#v/0}* I don't even know what to think now.",
         "<25>{#f/8}{#v/0}* Are you good?\n* Evil?\n* Just curious?",
         "<25>{#f/6}{#v/0}* I dunno.",
         "<25>{#f/5}{#v/0}* There is one thing, though...",
         "<25>{#f/5}{#v/0}* One thing I KNOW you haven't done yet.",
         "<25>{#f/11}{#v/0}* Hee hee hee...",
         "<25>{#f/7}{#v/0}* That's right.",
         "<25>{#f/7}{#v/0}* You haven't killed everyone here in one run yet.",
         "<25>{#f/11}{#v/0}* Aren't you at least a LITTLE curious?",
         "<25>{#f/8}{#v/0}* Come on, $(name)...",
         "<25>{#f/5}{#v/0}* I know you're in there somewhere."
      ],
      endtwinklyL1: [
         "<25>{#p/twinkly}{#f/6}{#v/0}* Well well, we meet again.",
         "<25>{#f/8}{#v/0}* How many times is this now?",
         "<25>{#f/6}{#v/0}* Whatever.\n* Doesn't matter.",
         "<25>{#f/6}{#v/0}* You KNOW what you have to do, $(name).",
         "<25>{#f/8}{#v/0}* ...",
         "<25>{#f/5}{#v/0}* I'll be waiting."
      ],
      exit1: [
         "<25>{#p/toriel}{#f/13}* You wish to return \"home,\" do you not?",
         "<25>{#f/9}* ...",
         "<25>{#f/9}* If you leave here, I will not be able to protect you.",
         "<25>{#f/9}* I will not be able to save you from the dangers that lie ahead.",
         "<25>{#f/13}* So, please, little one...",
         "<25>{#f/9}* Go back the other way."
      ],
      exit2: [
         "<25>{#p/toriel}{#f/13}* Every human that ends up here meets the same fate.",
         "<25>{#f/9}* I have seen it repeat time and time again.",
         "<25>{#f/13}* They come.",
         "<25>{#f/13}* They leave.",
         "<25>{#f/9}* ... they die.",
         "<25>{#f/13}* My child...",
         "<25>{#f/13}* If you leave the Outlands...",
         "<25>{#f/9}* They...\n* {@fill:#f00}ASGORE{@fill:#fff}...\n* Will take your SOUL."
      ],
      exit3: [
         "<25>{#p/toriel}{#f/9}* ...",
         "<25>{#f/13}* I did not want to say this, but...",
         "<25>{#f/11}* I cannot allow you to continue this way.",
         "<25>{#f/9}* For your own sake, child...",
         "<25>{#f/9}* Do not follow me into the next room."
      ],
      exit4: [
         "<25>{#p/toriel}{#p/toriel}{#f/13}* ...",
         "<25>{#f/10}* ... of course.",
         "<25>{#f/9}* Perhaps it was always meant to come to this.",
         "<25>{#f/9}* Perhaps I was foolish to think you would be any different.",
         "<25>{#f/9}* ...",
         "<25>{#f/13}* I am afraid there is little choice now.",
         "<25>{#f/13}* Forgive me, my child...",
         "<25>{#f/11}* But I cannot allow you to leave."
      ],
      exitfail1: (lateleave: boolean) =>
         world.postnoot
            ? [
                 [
                    "<32>{#p/twinkly}{#f/19}* After you run back to Mommy's house, she goes out for groceries.",
                    "<32>{#x1}* But... oh no!\n* The taxi she was in exploded, killing her instantly!",
                    "<32>* Golly, I wonder how such an awful thing could have happened.",
                    "<32>{*}{#x2}* ...",
                    "<25>{*}{#f/7}* Sorry, $(name).\n* Guess your happy ending won't be so easy."
                 ],
                 [
                    "<32>{#p/twinkly}{#f/19}* After you run back to Mommy's house, she goes out for groceries.",
                    "<32>{#x1}* But... oh no!\n* A talking star appears and tortures her to death!",
                    "<32>* Golly, that's an even worse outcome than last time!",
                    "<32>{*}{#x2}* ...",
                    "<25>{*}{#f/6}* We've don't have time for this, $(name).\n* Get back on track."
                 ],
                 [
                    "<25>{*}{#p/twinkly}{#f/5}* Come on, $(name)...",
                    "<25>{*}{#f/7}* Do you really think I'm gonna let you run away from me THAT easily?"
                 ],
                 [ "<25>{*}{#p/twinkly}{#f/6}* We can do this all day." ],
                 [ "<25>{*}{#p/twinkly}{#f/8}* ..." ]
              ][Math.min(SAVE.flag.n.postnoot_exitfail++, 4)]
            : [
                 "<32>{#p/basic}* 在你回到Toriel家后，\n  她随即摧毁了离开外域\n  唯一的出口。",
                 ...(outlandsKills() > 10
                    ? [
                         "<32>* 日子一天天过去，\n  她很快就发现\n  许多怪物都是因你而死。",
                         "<32>* 她彻底陷入了绝望。\n  万念俱灰，最后...",
                         "<32>* ...",
                         "<32>* ...与-与此同时，\n  前哨站的其他居民苦苦等待着\n  下一个人类去解救他们。"
                      ]
                    : outlandsKills() > 5 || SAVE.data.n.bully_wastelands > 5
                    ? [
                         "<32>* 日子一天天过去，\n  Toriel尽己所能关心你，照顾你。",
                         "<32>* 带你读书，给你做派...",
                         "<32>* 每晚睡前，帮你盖好被子...",
                         ...(lateleave
                            ? [ "<32>* ...然而，她心底里仍担心\n  你会再度逃跑。" ]
                            : [ "<32>* ...尽力不去想那些\n  失踪的怪物。" ]),
                         "<32>* 与此同时，\n  前哨站的其他居民苦苦等待着\n  下一个人类去解救他们。"
                      ]
                    : [
                         "<32>* 日子一天天过去，\n  Toriel尽己所能关心你，照顾你。",
                         "<32>* 带你读书，给你做派...",
                         "<32>* 每晚睡前，帮你盖好被子...",
                         ...(lateleave
                            ? [ "<32>* 她总是紧紧抱住你，\n  仿佛这么做你就不会再度逃跑。" ]
                            : [ "<32>* 只要你想拥抱，\n  她都会无条件给你。" ]),
                         "<32>* 与此同时，\n  前哨站的其他居民苦苦等待着\n  下一个人类去解救他们。"
                      ]),
                 "<32>* ...然而，这个人类\n  永远都不会到来了。",
                 "<32>* 这是你希望的结果吗？",
                 "<32>* 前哨站的怪物，\n  活该接受这样的命运吗？"
              ],
      food: () => [
         ...(SAVE.data.n.state_wastelands_mash === 2
            ? [
                 "<25>{#p/toriel}{#f/1}* 抱歉让你久等了...",
                 "<25>{#f/3}* 估计那只小白狗\n  又洗劫我的厨房了。",
                 "<25>{#f/4}* 你应该也看到好好的派\n  现在被糟蹋成什么样了...",
                 "<26>{#f/0}* 不说这个了。\n* 我给你做好了一盘焗蜗牛。"
              ]
            : [ "<25>{#p/toriel}* 早餐做好啦！", "<26>* 我给你做了一盘焗蜗牛。" ]),
         "<25>{#f/1}* 我把吃的放在桌上吧..."
      ],
      fridgetrap: {
         a: () =>
            SAVE.data.b.svr
               ? []
               : world.darker
               ? [ "<32>{#p/basic}* 你对冰箱里的东西不感兴趣。" ]
               : [ "<32>{#p/basic}* 冰箱里有一条新的巧克力棒。" ],
         b: () => [
            ...(SAVE.data.b.svr ? [] : [ "<32>{#p/basic}* ...", "<32>* 你想尝尝吗？" ]),
            choicer.create("* （拿走它吗？）", "是", "否")
         ],
         b1: [ "<32>{#p/human}* （你决定什么也不拿。）" ],
         b2: () => [
            "<32>{#p/human}* （你拿走了巧克力棒。）",
            ...(SAVE.data.b.svr ? [ "<25>{#p/asriel1}{#f/17}* 啊... 是巧克力。", "<25>{#p/asriel1}{#f/13}* ..." ] : [])
         ],
         c: () =>
            SAVE.data.b.svr
               ? [
                    "<32>{#p/human}* （但里面什么都没有。）",
                    ...[
                       [
                          "<25>{#p/asriel1}{#f/23}* Oh... $(name) ALWAYS used to root around in the fridge.",
                          "<25>{#f/13}* They thought, if they dug deep enough...",
                          "<25>{#f/13}* Another bar of chocolate would reveal itself inside.",
                          "<25>{#f/17}* ... how silly."
                       ],
                       [ "<25>{#p/asriel1}{#f/20}* That was before the chocolate replicator was installed." ]
                    ][Math.min(asrielinter.fridgetrap_c++, 1)]
                 ]
               : [ "<32>{#p/basic}* 巧克力棒已经被拿走了。" ],
         d: [ "<32>{#p/human}* （你带的东西太多了。）" ]
      },
      front1: [
         "<25>{#p/toriel}{#f/1}* ...你想演奏一首自己的曲子？",
         "<25>{#f/0}* 好的，我看看能帮上什么忙。"
      ],
      front1x: [ "<25>{#p/toriel}{#f/1}* ... hello?" ],
      front2: () => [
         ...(world.postnoot
            ? [
                 "<25>{#p/toriel}{#f/2}* 这么早就起来了！？",
                 "<25>{#f/1}* You were not asleep for very long...",
                 "<25>{#f/5}* ...",
                 world.nootflags.has('toriel') // NO-TRANSLATE

                    ? "<25>{#f/1}* 供气系统应该还没修好。"
                    : "<25>{#f/1}* 供气系统好像坏掉了。",
                 "<25>{#f/1}* 要是觉得困，就再多睡一会吧。",
                 "<26>{#f/0}* ...顺便一提..."
              ]
            : [
                 "<25>{#p/toriel}{#f/2}* 你站在这里多久了！？",
                 "<25>{#f/5}* ...",
                 "<25>{#f/0}* 没事，顺带一提..."
              ]),
         "<25>{#f/0}* 一位叫Napstablook的客人\n  想在这里演奏自己的音乐。",
         "<25>{#f/0}* 而且，它特别邀请你\n  一起上台演出！",
         "<25>{#f/1}* 你想去活动室见见它吗？",
         ...(SAVE.data.n.state_wastelands_mash === 1
            ? [
                 "<25>{#f/3}* 对了，不好意思\n  派变成了那副样子。",
                 "<25>{#f/4}* 估计是那只小白狗\n  又去洗劫我的厨房了..."
              ]
            : 3 <= SAVE.data.n.cell_insult
            ? [
                 "<25>{#f/5}* 对了，不好意思\n  把派做成了那副样子。",
                 "<25>{#f/9}* 我已经尽力去抢救了..."
              ]
            : []),
         choicer.create("* （参加Napstablook的演出吗？）", "是", "否")
      ],
      front2a: [ "<25>{#p/toriel}{#f/0}* 太好了！\n* 我会转告给它的。" ],
      front2b: [ "<25>{#p/toriel}{#f/5}* ...", "<25>{#p/toriel}{#f/5}* 需要我的话，\n  随时可以到客厅找我。" ],
      front3: () => [
         ...(world.postnoot
            ? [
                 "<25>{#p/toriel}{#f/0}* 哦，早安，小家伙。\n* 你起的真早。",
                 "<25>{#f/1}* 确定睡足了吗？",
                 "<25>{#f/5}* ...",
                 world.nootflags.has('toriel') // NO-TRANSLATE

                    ? "<25>{#f/1}* 供气系统应该还没修好。"
                    : "<25>{#f/1}* 供气系统好像坏掉了。",
                 "<25>{#f/1}* 要是觉得困，就再多睡一会吧。",
                 "<26>{#f/0}* ...顺便一提..."
              ]
            : [ "<25>{#p/toriel}* 早上好，小家伙。" ]),
         ...(SAVE.data.n.state_wastelands_mash === 1
            ? [
                 "<25>{#f/3}* 估计那只小白狗\n  又洗劫我的厨房了。",
                 "<25>{#f/4}* 你应该也看到好好的派\n  现在被糟蹋成什么样了...",
                 "<25>{#f/0}* 不过，为了你能吃上派\n  我还是尽力抢救了一下。"
              ]
            : [ "<25>{#f/1}* The stars do look pretty today, do they not?" ]),
         "<25>{#f/5}* ...",
         "<25>{#f/5}* 需要我的话，\n  随时可以到客厅找我。"
      ],
      front4: () => [
         ...(world.postnoot
            ? [
                 "<25>{#p/toriel}{#f/0}* 哦，早安，小家伙。\n* 你起的真早。",
                 "<25>{#f/1}* 确定睡足了吗？",
                 "<25>{#f/5}* ...",
                 world.nootflags.has('toriel') // NO-TRANSLATE

                    ? "<25>{#f/1}* 供气系统应该还没修好。"
                    : "<25>{#f/1}* 供气系统好像坏掉了。",
                 "<25>{#f/1}* 要是觉得困，就再多睡一会吧。"
              ]
            : [ "<25>{#p/toriel}* 早上好，小家伙。" ]),
         "<25>{#f/5}* ...",
         ...(world.bullied
            ? [
                 "<25>* The Outlands have been unusually noisy today.",
                 "<25>* 听说有个恶霸四处游荡，\n  惹是生非。",
                 "<25>* 最好别离家太远。"
              ]
            : [
                 "<25>* The Outlands have been unusually silent today.",
                 "<25>* I tried calling someone just now, but...",
                 "<25>* 只有一片死寂。"
              ]),
         ...(SAVE.data.n.state_wastelands_mash === 1
            ? [
                 world.bullied
                    ? "<26>{#f/3}* 而且，那只小白狗\n  又洗劫了我的厨房。"
                    : "<25>{#f/3}* 以及洗劫我厨房的小白狗。",
                 "<25>{#f/4}* 你应该也看到好好的派\n  现在被糟蹋成什么样了...",
                 "<25>{#f/0}* 不过，为了你能吃上派\n  我还是尽力抢救了一下。",
                 "<25>{#f/1}* 希望你能喜欢它..."
              ]
            : world.bullied || (16 <= outlandsKills() && SAVE.flag.n.genocide_twinkly < resetThreshold())
            ? []
            : [ "<25>{#f/1}* 真令人担心..." ]),
         "<25>{#f/0}* 顺便一提，如果需要我的话，\n  随时可以到客厅找我。"
      ],
      goodbye1a: [ "<25>{#p/toriel}{#f/10}* ...", "<25>{#f/20}{|}* 过来- {%}" ],
      goodbye1b: [ "<25>{#p/toriel}{#f/9}* ...", "<25>{#f/19}{|}* 过来- {%}" ],
      goodbye2: [
         "<25>{#p/toriel}{#f/5}* I am sorry for what I have put you through, little one.",
         "<25>{#f/9}* I should have known that I could not keep you here forever.",
         "<25>{#f/5}* ... still, if you ever need someone to talk to...",
         "<25>{#f/1}* Feel free to call me at any time.",
         "<25>{#f/0}* As long as my phone can reach you, I will be there to pick up."
      ],
      goodbye3: [
         "<25>{#p/toriel}{#f/5}* I am sorry for what I have put you through, little one.",
         "<25>{#f/9}* I should have known that I could not keep you here forever.",
         "<25>{#f/10}* ...",
         "<25>{#f/14}* Be good, alright?"
      ],
      goodbye4: [ "<25>{#p/toriel}{#f/1}* Be good, alright?" ],
      goodbye5a: [
         "<25>{#p/toriel}{#f/5}* ... hmm?\n* You changed your mind?",
         "<25>{#f/9}* ...",
         "<25>{#f/10}* Perhaps you really are different from the others.",
         "<25>{#f/0}* ... well then.",
         "<25>{#f/0}* I will finish up here, and meet you back at the house.",
         "<25>{#f/0}* Thank you for listening, my child.",
         "<25>{#f/0}* It means a lot to me."
      ],
      goodbye5b: [
         "<25>{#p/toriel}{#f/5}* ... hmm?\n* You changed your mind?",
         "<25>{#f/10}* ...\n* Forgive me, my child.",
         "<25>{#f/9}* I might have lost it there for a moment.",
         "<25>{#f/0}* ... no matter.",
         "<25>{#f/0}* I will finish up here, and meet you back at the house.",
         "<25>{#f/0}* Thank you for listening, my child.",
         "<25>{#f/0}* It means a lot to me."
      ],
      halo: {
         a: [ "<32>{#p/human}* （你捡起了光环。）", choicer.create("* （戴上光环吗？）", "是", "否") ],
         b: [ "<32>{#p/human}* （你带的东西太多，装不下它了。）" ]
      },
      indie1: () => [
         ...([ 1, 5 ].includes(SAVE.data.n.state_wastelands_dummy) && SAVE.data.b.w_state_riddleskip
            ? [
                 "<25>{#p/toriel}{#f/5}* 之前的教学都不太顺利...",
                 "<25>{#f/5}* 希望这次能有所改善。"
              ]
            : [ "<26>{#p/toriel}* 好。\n* 现在教你第三项，\n  也是最后一项本领。" ]),
         "<25>{#f/1}* 有信心只靠自己...",
         "<25>{#f/1}* 走到房间的尽头吗？",
         choicer.create("* （你要怎么回答？）", "是", "否")
      ],
      indie1a: [
         "<25>{#p/toriel}{#f/1}* 你确定吗...？",
         "<25>{#f/0}* 这段路其实并不长...",
         choicer.create("* （改变主意吗？）", "是", "否")
      ],
      indie1b: [
         "<25>{#p/toriel}{#f/5}* 孩子。",
         "<25>{#f/1}* 学会独立是非常非常重要的，\n  对吧？",
         choicer.create("* （改变主意吗？）", "是", "否")
      ],
      indie2a: [ "<25>{#p/toriel}{#f/1}* 好的...", "<25>{#f/0}* 祝你好运！" ],
      indie2b: [ "<25>{#p/toriel}{#f/5}* ...", "<25>{#f/9}* ...明白了。" ],
      indie2b1: [
         "<25>{#p/toriel}{#f/10}* 别害怕，孩子。",
         "<25>{#f/1}* 如果你真的不想\n  离开我的身边，那么...",
         "<25>{#f/0}* 我会陪你穿过\n  外域的其他地方的。",
         "<25>{#f/5}* ...",
         "<25>{#f/5}* 孩子，握住我的手...",
         "<25>{#f/5}* 我们一起回家。"
      ],
      indie2f: [ "<32>{#p/human}{#s/equip}* （你得到了一部手机。）" ],
      indie3a: [ "<25>{#p/toriel}* 你做到了！" ],
      indie3b: [
         "<25>{#p/toriel}{#f/3}* 我的乖乖，你怎么\n  花了这么长时间才到！？",
         "<25>{#f/4}* 是迷路了吗？",
         "<25>{#f/1}* ...\n* 应该没事..."
      ],
      indie4: () => [
         ...([ 1, 5 ].includes(SAVE.data.n.state_wastelands_dummy) && SAVE.data.b.w_state_riddleskip
            ? [
                 "<25>{#f/0}* 说实话，你能自己走到这里\n  我都挺意外的。",
                 "<25>{#f/3}* 之前表现成那样，\n  我都怀疑...",
                 "<25>{#f/4}* ...你一直在故意整我，\n  是不是？",
                 "<25>{#f/23}* 告诉你，\n  我现在可没空跟你胡闹。"
              ]
            : [
                 "<25>{#p/toriel}{#f/0}* 别担心，孩子。\n  这只是个给你准备的\n  独立性测试！",
                 "<25>{#f/0}* 一路上并没有什么危险。",
                 "<25>{#f/1}* 其实呢..."
              ]),
         "<25>{#f/5}* 我要去忙一些重要的事了。",
         "<25>{#f/0}* 在我不在时，\n  希望你能好好表现。",
         "<25>{#f/1}* 前面还有些谜题，\n  还没来得及给你解释。\n* 而且...",
         "<25>{#f/0}* 如果你擅自离开房间的话，\n  可能会遇到危险。",
         "<25>{#f/10}* 来，这个手机给你。",
         "<32>{#p/human}{#s/equip}* （你得到了一部手机。）",
         ...([ 1, 5 ].includes(SAVE.data.n.state_wastelands_dummy) && SAVE.data.b.w_state_riddleskip
            ? [
                 "<25>{#p/toriel}{#f/1}* 我不在的时候...",
                 "<25>{#f/0}* 如果遇到任何事情...\n  就给我打电话。",
                 "<25>{#f/5}* ...",
                 "<26>{#f/23}* 还有，别惹麻烦。"
              ]
            : [
                 "<25>{#p/toriel}{#f/1}* 我不在的时候...",
                 "<25>{#f/0}* 如果遇到任何事情...\n  就给我打电话。",
                 "<25>{#f/5}* ...",
                 "<25>{#f/1}* 乖乖的，好吗？"
              ])
      ],
      indie5: [
         [
            "<32>{#s/phone}{#p/event}* 铃铃...",
            "<25>{#p/toriel}* 嗨！\n* 我是Toriel。",
            "<25>* My errands are taking longer than I thought they would.",
            "<25>* You must wait a little longer.",
            "<25>{#f/1}* Thank you for being patient, my child...",
            "<25>{#f/0}* You are very good."
         ],
         [
            "<32>{#s/phone}{#p/event}* 铃铃...",
            "<25>{#p/toriel}* 嗨...\n* 我是Toriel。",
            "<25>{#f/1}* I found what I was looking for...",
            "<25>{#f/0}* But a small, white puppy snatched it away!\n* How odd.",
            "<25>{#f/1}* Do dogs even like flour?",
            "<25>{#f/0}* Err, that is an unrelated question, of course.",
            "<25>* It will take a little longer for me to return.",
            "<25>{#f/1}* Thank you again for being so patient..."
         ],
         [
            "<32>{#s/phone}{#p/event}* 铃铃...",
            "<32>{#p/basic}* （...）",
            "<32>{#p/human}* (You hear heavy panting on the other end of the phone.)",
            "<32>{#s/bark}{#p/event}* 汪！\n* 汪！",
            "<32>{#p/human}* (You hear a distant voice.)",
            "<25>{#p/toriel}{#f/2}* Stop, please!",
            "<32>{#s/bark}{#p/event}* 汪！\n* 汪！",
            "<25>{#p/toriel}{#f/1}* Come back here with my cell phone!"
         ],
         [
            "<32>{#s/phone}{#p/event}* 铃铃...",
            "<32>{#p/basic}* （...）",
            "<32>{#p/human}* (It sounds like a small, white dog is sleeping on the phone.)",
            "<32>{#p/basic}* (Snore... snore...)",
            "<32>{#p/human}* (You hear a distant voice.)",
            "<25>{#p/toriel}{#f/1}* Hellooo?\n* Little puppy...?",
            "<25>{#f/1}* Where are youuu?",
            "<25>{#f/0}* I will give you a nice pat on the head!",
            "<32>{#p/human}* (The snoring stops.)",
            "<25>{#p/toriel}* ... if you return with my cell phone.",
            "<32>{#p/human}* (The snoring resumes.)"
         ],
         [
            "<32>{#s/phone}{#p/event}* 铃铃...",
            "<32>{#p/basic}* （...）",
            "<32>{#p/basic}* (Achoo!)",
            "<32>{#p/human}* (It sounds like a small, white dog sneezing in its sleep.)",
            "<25>* (You hear a distant voice.)",
            "<25>{#p/toriel}{#f/1}* Aha!\n* I heard that, you little white dog...",
            "<25>{#f/6}* Now I am going to find you!",
            "<32>{#p/human}* (The snoring stops.)\n* (The dog now seems to be on the run from something.)",
            "<25>{#p/toriel}{#f/8}* Hee hee, there is no escape!"
         ],
         [
            "<32>{#s/phone}{#p/event}* 铃铃...",
            "<32>{#p/human}* (You hear a distant voice.)",
            "<25>{#p/toriel}{#f/1}* 嗨...\n* 我是... Toriel...",
            "<32>{#s/bark}{#p/event}* 汪！\n* 汪！",
            "<25>{#p/toriel}{#f/2}* No, bad puppy!",
            "<32>{#p/basic}* (Whimper... whimper...)",
            "<25>{#p/toriel}* There, there...\n* I will find another cell phone for you.",
            "<25>{#f/1}* Would that be alright?",
            "<32>{#p/basic}* （...）",
            "<32>{#s/bark}{#p/event}* 汪！",
            "<25>{#p/toriel}* Glad to hear it.",
            "<32>{#p/human}* (The dog could be heard walking away.)",
            "<25>{#p/toriel}* Please, forgive me for all of this nonsense.",
            "<25>{#f/1}* I will be back to pick you up shortly..."
         ]
      ],
      indie6: (early: boolean) => [
         "<32>{#s/phone}{#p/event}* 铃铃...",
         ...([ 1, 5 ].includes(SAVE.data.n.state_wastelands_dummy) && SAVE.data.b.w_state_riddleskip
            ? [
                 early
                    ? "<25>{#p/toriel}{#g/torielTired}* ...出来了？"
                    : "<25>{#p/toriel}{#g/torielTired}* ...待的不耐烦了？",
                 "<25>{#f/9}* 没事，我已经猜到了。",
                 "<25>{#f/5}* 只是，提醒你一下，\n  外面有很多危险等着你...",
                 "<25>{#f/1}* 保护好自己，别受伤了。"
              ]
            : [
                 "<25>{#p/toriel}* 喂？\n* 我是Toriel。",
                 "<25>{#f/1}* 你没离开房间吧？",
                 "<25>{#f/0}* 外面非常危险，\n  受伤了可就不好了。",
                 "<25>{#f/1}* 乖乖的，好吗？"
              ])
      ],
      indie7: [ "<32>{#p/basic}* A few minutes later..." ],
      indie8: [
         "<25>{#p/toriel}* I have returned!",
         "<25>* Your patience thus far has been commendable.\n* Even I am impressed!",
         "<25>{#f/0}* Anyhoo.\n* It is time I took you home now.",
         "<25>{#f/1}* Please, allow me..."
      ],
      lobby_puzzle1: [
         "<25>{#p/toriel}{#f/0}* 欢迎来到我们简陋的前哨站，\n  单纯的孩子。",
         "<25>{#f/0}* 我必须教给你一些本领。\n* 学会这些，\n  你才能在这里生存下去。",
         "<25>{#f/1}* 首当其冲的...",
         "<25>{#f/0}* 当然是谜题了！",
         "<25>{#f/0}* 我来给你快速地演示一下。"
      ],
      lobby_puzzle2: [
         "<25>{#p/toriel}{#f/1}* 你可能现在还觉得很奇怪，\n  但是在前哨站...",
         "<25>{#f/0}* 解谜题是我们的家常便饭。",
         "<25>{#f/0}* 时间久了，再加上一点指导，\n  你就会逐渐习惯上的。"
      ],
      lobby_puzzle3: [ "<25>{#p/toriel}* 等你准备好了，\n  我们就可以继续前进了。" ],
      loox: {
         a: [
            "<32>{#p/basic}{#n1}* I heard you're quite flirty, for a human.",
            "<32>* As you {@fill:#cf7fff}FLIRT{@fill:#fff} with different kinds of monsters, you'll see hearts next to their names.",
            "<32>* The more types of monsters you {@fill:#cf7fff}FLIRT{@fill:#fff} with, the more hearts you'll have.",
            "<32>* I wonder...",
            "<32>* Just how far can you go?",
            "<32>* Perhaps, my friend, you could even become... a legend."
         ],
         b: [
            "<32>{#p/basic}{#n1}* Hey human, have you tried flirting yet?",
            "<32>* Ha!\n* I can tell by the look on your face that you haven't yet.",
            "<32>* I gotta tell you, it's tons of fun.",
            "<32>* Your enemies won't know what to do with themselves!",
            "<32>* Psst... if you DO start flirting, I might have more to tell you.",
            "<32>* Good luck with that!"
         ],
         c: [
            "<32>{#p/basic}{#n1}* Hey human, now that you've started flirting...",
            "<32>* How does it feel?",
            "<32>* It's pretty great, right?",
            "<32>* As you {@fill:#cf7fff}FLIRT{@fill:#fff} with different kinds of monsters, you'll see hearts next to their names.",
            "<32>* The more types of monsters you {@fill:#cf7fff}FLIRT{@fill:#fff} with, the more hearts you'll have.",
            "<32>* I wonder...",
            "<32>* Just how far can you go?",
            "<32>* Perhaps, my friend, you could even become... a legend."
         ],
         d: [
            "<32>{#p/basic}{#n1}* I hear you're somewhat of a bully in these parts.",
            "<32>* Ha!\n* Join the club, pal.",
            "<32>* You're talking to the number one bully around.",
            "<32>* If you {@fill:#3f00ff}BULLY{@fill:#fff} a certain kind of monster, you'll see a sword next to their name.",
            "<32>* The more types of monsters you {@fill:#3f00ff}BULLY{@fill:#fff}, the more swords you'll have.",
            "<32>* It's like flirting... but with death.",
            "<32>* Fun, right?"
         ],
         e: pager.create(
            0,
            () => [
               ...(30 <= SAVE.data.n.bully
                  ? [
                       "<32>{#p/basic}{#n1}* I heard you're quite the bully around here now.",
                       "<32>* Everyone's afraid of you, huh?"
                    ]
                  : 20 <= world.flirt
                  ? [
                       "<32>{#p/basic}{#n1}* I heard you're quite the romantic around here now.",
                       "<32>* Everyone loves you, huh?"
                    ]
                  : [
                       "<32>{#p/basic}{#n1}* I heard you're quite the hero around here now.",
                       "<32>* Everyone likes you, huh?"
                    ]),
               "<32>* Well... personally, I think you have too much free time."
            ],
            [ "<32>{#p/basic}{#n1}* What?\n* Am I wrong?" ]
         )
      },
      manana: {
         a: pager.create(
            0,
            () =>
               SAVE.data.b.napsta_performance
                  ? [
                       "<32>{#p/basic}{#n1}* So, you're the one who co-hosted that music show, eh?",
                       "<32>* Maybe now you'll have the means to accept my offer.",
                       "<32>* I'm just lookin' for someone to buy this limited edition Super Starwalker comic strip.",
                       "<32>* Now I liked that little show, so you'll get a discount.\n* 5G, take it or leave it.",
                       choicer.create("{#n1!}* (Buy the comic strip?)", "是", "否")
                    ]
                  : [
                       ...(world.postnoot
                          ? [
                               "<32>{#p/basic}{#n1}* Hey, have you noticed anything strange goin' on around here?",
                               "<32>* I could'a sworn all the puzzles just de-activated themselves earlier.",
                               "<32>* Anyway, I'm lookin' for a buyer on this limited edition Super Starwalker comic strip."
                            ]
                          : [
                               "<32>{#p/basic}{#n1}* Finally, someone speaks to me!",
                               "<32>* I've been standin' out here for ages, and nobody's takin' my offer.",
                               "<32>* I'm just lookin' for someone to buy this limited edition Super Starwalker comic strip."
                            ]),
                       "<32>* Interested?\n* All I'm askin' for is 10G.",
                       choicer.create("{#n1!}* (Buy the comic strip?)", "是", "否")
                    ],
            () =>
               SAVE.data.b.napsta_performance
                  ? [
                       "<32>{#p/basic}{#n1}* Interested in buyin' my limited edition Super Starwalker comic strip?",
                       "<32>* All I'm askin' for is 5G.",
                       choicer.create("{#n1!}* (Buy the comic strip?)", "是", "否")
                    ]
                  : [
                       "<32>{#p/basic}{#n1}* Interested in buyin' my limited edition Super Starwalker comic strip?",
                       "<32>* All I'm askin' for is 10G.",
                       choicer.create("{#n1!}* (Buy the comic strip?)", "是", "否")
                    ]
         ),
         b: () => [
            "<32>{#p/human}{#n1!}* （你的钱不够。）",
            SAVE.data.b.napsta_performance
               ? "<32>{#p/basic}{#n1}* I'll be honest, that don't look like 5G..."
               : "<32>{#p/basic}{#n1}* I'll be honest, that don't look like 10G..."
         ],
         c: [ "<32>{#p/basic}{#n1}* Not interested, huh?", "<32>* Well, that's fine.\n* I'll just find someone else..." ],
         d: [
            "<32>{#s/equip}{#p/human}{#n1!}* （你获得了“超级星之行者1”。）",
            "<32>{#p/basic}{#n1}* Splendid!\n* Enjoy the comic strip."
         ],
         e: [ "<32>{#p/basic}{#n1}* Back again, huh?", "<32>* Sorry bud, I've got nothin' left to sell." ],
         f: [
            "<32>{#p/human}{#n1!}* （你带的东西太多了。）",
            "<32>{#p/basic}{#n1}* Them pockets of yours are lookin' kinda full..."
         ],
         g: [
            "<32>{#p/basic}{#n1}* I heard they're rebooting the comic franchise...",
            "<32>* The new main character is some snake fella with sunglasses or something.",
            "<32>* If I was in charge, I'd make a spinoff about that sidekick...",
            "<32>* Gumbert, I think?"
         ],
         h: [
            "<32>{#p/basic}{#n1}* Maybe now that we're free, they'll finally make that reboot they were planning.",
            "<32>* What was it called?\n* Oh, I've already forgotten..."
         ]
      },
      mananaX: () =>
         [
            [
               "<32>{#p/basic}{#n1}* Now what was THAT racket?",
               "<32>{#p/basic}{#n1}* Er, sorry, my eyesight's not what it used to be..."
            ],
            [ "<32>{#p/basic}{#n1}* Huh?\n* It happened again?\n* Tch, kids these days..." ],
            [ "<32>{#p/basic}{#n1}* Kids these days..." ]
         ][Math.min(roomKills().w_puzzle4++, 2)],
      afrogX: (k: number) =>
         [
            [ "<32>{#p/basic}{#n1}* 如... 如果你再-再那么做的话... \n  我-我会站出来阻止你的！" ],
            [ "<32>{#p/basic}{#n1}* 住-住手...\n* 别伤害他们了..." ]
         ][k],
      patron: {
         a: pager.create(
            0,
            () =>
               SAVE.data.n.plot === 72
                  ? 6 <= world.population
                     ? [
                          "<32>{#p/basic}{#n1}* I'm sad.\n* They took the DJ table to use for some tacky show later.",
                          "<32>* ... wait, that might actually be kind of cool."
                       ]
                     : [
                          "<32>{#p/basic}{#n1}* I'm sad.\n* The bully who came through here earlier...",
                          "<32>* ... turned out to be you.",
                          "<32>* You saved us in the end, but why resort to such violence along the way?"
                       ]
                  : SAVE.data.b.napsta_performance
                  ? [
                       "<32>{#p/basic}{#n1}* I'm sad.\n* Musicians these days are way too hard on themselves...",
                       "<32>* Personally, I really liked that tune of theirs.",
                       "<32>* It's a shame we'll probably never get to hear it again.",
                       "<32>{#n1!}{#n2}* At least you still have steak to keep you company, right? ;)",
                       "<32>{#n2!}{#n1}* ... not this again."
                    ]
                  : [
                       "<32>{#p/basic}{#n1}* I'm sad.\n* The food these days just gets worse and worse...",
                       "<32>* I was promised something \"real,\" but all I got was a cheap copy.",
                       "<32>{#n1!}{#n2}* Hey! ;)\n* Quit bad-mouthing my shop in front of the customers! ;)",
                       "<32>* Besides, what if your sense of taste is to blame ;)",
                       "<32>{#n2!}{#n1}* ... typical."
                    ],
            () => [
               SAVE.data.n.plot === 72 && 6 <= world.population
                  ? "<32>{#p/basic}{#n1}* ... it isn't what it is?"
                  : "<32>{#p/basic}{#n1}* ... it is what it is."
            ]
         )
      },
      pie: () =>
         3 <= SAVE.data.n.cell_insult
            ? [ "<32>{#p/human}* （你捡起了烤糊的派。）" ]
            : SAVE.data.n.state_wastelands_mash === 1
            ? [ "<32>{#p/human}* （你捡起了派粥。）" ]
            : SAVE.data.b.snail_pie
            ? [ "<32>{#p/human}* （你捡起了蜗牛派。）" ]
            : [ "<32>{#p/human}* （你捡起了奶油糖肉桂派。）" ],
      plot_call: {
         a: () => [
            "<32>{#p/event}* 滴滴，滴滴...",
            3 <= SAVE.data.n.cell_insult
               ? "<25>{#p/toriel}* 孩子，你好。"
               : "<25>{#p/toriel}* 喂？\n* 我是Toriel。",
            "<25>{#f/1}* 不是啥大事，\n  只是想问一下...",
            "<25>{#f/0}* 你更喜欢肉桂，\n  还是奶油糖呢？",
            choicer.create("* （你更喜欢哪个？）", "肉桂", "奶油糖"),
            3 <= SAVE.data.n.cell_insult
               ? "<25>{#p/toriel}{#f/0}* 我知道了。"
               : "<25>{#p/toriel}* 哦，我知道了！\n* 十分感谢！"
         ],
         b: () => [
            "<32>{#p/event}* 滴滴，滴滴...",
            3 <= SAVE.data.n.cell_insult
               ? "<25>{#p/toriel}* 孩子，你好。"
               : "<25>{#p/toriel}* 喂？\n* 我是Toriel。",
            [
               "<25>{#f/1}* 你不讨厌奶油糖吧？",
               "<25>{#f/1}* 你不讨厌肉桂吧？"
            ][SAVE.data.n.choice_flavor],
            "<25>{#f/1}* 我知道你更喜欢另一种，\n  只是...",
            "<25>{#f/1}* 食物里放了它，\n  你还愿意吃吗？",
            choicer.create("* （你要怎么回答？）", "是", "否")
         ],
         b1: () => [
            3 <= SAVE.data.n.cell_insult
               ? "<25>{#p/toriel}{#f/0}* 知道了。"
               : "<25>{#p/toriel}* 好的，好的，没问题。",
            "<25>{#f/1}* 那我先挂了..."
         ],
         b2: () => [
            "<25>{#p/toriel}{#f/5}* ...",
            "<25>{#f/0}* 好吧。",
            "<25>{#f/1}* ...",
            3 <= SAVE.data.n.cell_insult
               ? "<25>{#f/0}* 我看看怎么办吧。"
               : "<25>{#f/0}* 我会回头再打给你的，\n  孩子。"
         ],
         c: [
            "<32>{#p/event}* 滴滴，滴滴...",
            "<25>{#p/toriel}{#f/1}* 你没什么过敏的东西吧？",
            "<25>{#f/5}* ...",
            "<25>{#f/0}* 呃... 没事。\n* 刚问的别放在心上！"
         ],
         d: [
            "<32>{#p/event}* 滴滴，滴滴...",
            "<25>{#p/toriel}{#f/1}* 嗨，小家伙。",
            "<25>{#f/0}* 我想起来\n  我好久没收拾这地方了。",
            "<25>{#f/1}* 所以，这里可能\n  四处散落着各种东西。",
            "<25>{#f/0}* 你可以把他们捡起来，\n  带在身上，但别带太多。",
            "<25>{#f/1}* 万一以后碰到什么\n  真正想要的东西呢？",
            "<25>{#f/0}* 那时，你就会希望\n  自己的口袋里还有空地方了。"
         ]
      },
      puzzle1A: () =>
         SAVE.data.b.svr
            ? [ "<32>{#p/human}* （开关好像卡住了。）" ]
            : [ "<32>{#p/basic}* 开关卡住了。" ],
      puzzle3A: () =>
         SAVE.data.b.svr
            ? [ "<32>{#p/human}* （开关好像卡住了。）" ]
            : [ "<32>{#p/basic}* 开关卡住了。" ],
      return1: () => [
         SAVE.data.n.cell_insult < 3
            ? "<25>{#p/toriel}{#f/1}* 你是怎么到这里的，\n  我的孩子？"
            : "<25>{#p/toriel}{#f/1}* 哦... 你到了。",
         "<25>* 你还好吗？"
      ],
      return2a: () =>
         SAVE.data.n.cell_insult < 3
            ? [ "<25>{#p/toriel}* 一点伤都没有！\n* 很厉害！" ]
            : [ "<25>{#p/toriel}{#f/10}* 没有受伤...\n* 挺好的。" ],
      return2b: () =>
         SAVE.data.n.cell_insult < 3
            ? [ "<25>{#p/toriel}{#f/4}* 你好像受伤了...", "<25>{#f/10}* 乖，乖。\n  让我帮你疗伤。" ]
            : [ "<25>{#p/toriel}{#f/9}* 你受伤了。", "<25>{#f/10}* 请让我帮你疗伤。" ],
      return2c: [
         "<25>{#p/toriel}{#f/3}* ...",
         "<25>{#f/11}* 是谁把你弄成这样的？\n* 他该为此付出代价。"
      ],
      return3: () => [
         "<25>{#p/toriel}* 孩子，对不起。\n* 我真是个笨蛋，居然把你\n  一个人扔下这么长时间。",
         ...(world.postnoot
            ? [
                 "<25>{#f/1}* ...是我的错觉吗？\n  感觉空气不太对劲。",
                 "<25>{#f/5}* 估计是供气系统出故障了。",
                 "<25>{#f/5}* ...",
                 "<25>{#f/0}* 别担心。\n* 很快就会有人解决的。"
              ]
            : []),
         "<25>{#f/1}* 来吧！\n* 我给你准备了个惊喜。"
      ],
      return4: () => [
         "<25>{#p/toriel}* 欢迎来到我的住所！",
         ...(3 <= SAVE.data.n.cell_insult
            ? [
                 "<25>{#f/1}* 你闻到...",
                 "<25>{#p/toriel}{#f/2}* ...哎呀，\n  忘了看烤箱了！",
                 "<25>{#p/toriel}{#f/5}* 刚刚我全顾着去想你\n  之前为什么那么做，我...",
                 "<25>{#p/toriel}{#f/1}* 我得马上去看看派怎么样了，\n  请别到处乱跑！"
              ]
            : [
                 "<25>{#f/1}* 闻到了吗？",
                 ...(SAVE.data.b.snail_pie
                    ? [ "<25>{#f/0}* 惊喜！\n* 是我亲手做的蜗牛派。" ]
                    : [
                         "<25>{#f/0}* 惊喜！\n* 这是个奶油糖肉桂派。",
                         "<25>{#f/0}* 今晚我原本是想做蜗牛派的，\n  但我猜你更喜欢这个。"
                      ]),
                 "<25>{#f/1}* 嗯，尽管我很久\n  没有照顾过其他人了...",
                 "<25>{#f/0}* 但还是希望\n  你能在这里过的开心。",
                 "<25>{#f/0}* 跟我来！\n* 还有个惊喜等着你。"
              ])
      ],
      return5: [
         "<25>{#p/toriel}* 快看！\n* 这是属于你自己的房间。",
         "<25>{#f/1}* 希望你能喜欢它..."
      ],
      return6: [
         "<25>{#p/toriel}{#f/1}* 嗯，我得去看一下派\n  烤的怎么样了。",
         "<25>{#f/0}* 请四处走走，熟悉下吧！"
      ],
      runaway1: [
         [ "<25>{#p/toriel}{#f/1}* 你是不是应该在屋里玩呢？", "<25>{#f/0}* 来吧。" ],
         [ "<25>{#p/toriel}{#f/9}* Child, it is dangerous to play out here.", "<25>{#f/5}* Trust me." ],
         [ "<26>{#p/toriel}{#f/5}* The gravity is low here.\n* You will float away." ],
         [ "<25>{#p/toriel}{#f/5}* The atmopsheric system is weak here.\n* You will suffocate." ],
         [ "<25>{#p/toriel}{#f/23}* There is really nothing for you to see here." ],
         [ "<25>{#p/toriel}{#f/1}* 想跟我一起读本书吗？" ],
         [ "<25>{#p/toriel}{#f/1}* Would you like to revisit the other rooms in the Outlands?" ],
         [ "<25>{#p/toriel}{#f/5}* I will not allow you to endanger yourself." ],
         [ "<25>{#p/toriel}{#f/3}* Do you expect me to do this all day?" ],
         [ "<25>{#p/toriel}{#f/4}* ..." ],
         [ "<25>{#p/toriel}{#f/17}* ...", "<25>{#f/15}* 我不喜欢你玩这种游戏。" ],
         [ "<25>{#p/toriel}{#f/17}* ..." ]
      ],
      runaway2: [
         "<25>{#p/toriel}{#f/1}* 回屋里去吧，孩子...",
         "<25>{#f/0}* 我要给你看样东西！"
      ],
      runaway3: [
         "<25>{#p/toriel}{#f/2}* 孩子，快回去！\n* 这里非常不安全！",
         "<25>{#f/0}* 跟我来吧。\n  早餐已经做好了。"
      ],
      runaway4: [ "<25>{#p/toriel}{#f/2}* 孩子！\n* 为什么要来这里！？" ],
      runaway5: [
         "<25>{#p/toriel}{#f/1}* 你想过离开外域之后\n  等待你的是什么吗？",
         "<25>{#f/5}* 对不起，我...\n  我之前对你太冷淡了...",
         "<25>{#f/9}* 是不是因为我不够关心你，\n  你才逃跑的呢..."
      ],
      runaway6: [
         "<25>{#g/torielStraightUp}* 说实话... 我不敢离开这里。",
         "<25>{#f/9}* 外面非常危险，那些怪物\n  足以威胁到你我的生命。",
         "<25>{#g/torielSincere}* 我也想尽力保护你，\n  不让他们伤害到你...",
         "<25>{#g/torielStraightUp}* 可要是我跟你一起离开，\n  他们会把我也当成一种威胁。",
         "<25>{#f/9}* 等待你的，\n  只会是更大的危险。"
      ],
      runaway7: [
         "<25>{#p/toriel}{#f/5}* 求求你...",
         "<25>{#f/1}* 跟我回家吧，\n  我保证会好好照顾你的。",
         "<25>{#f/5}* 你说什么我都答应，好吗？",
         "<25>{#f/18}* 求你了...\n  不要像他们一样抛下我..."
      ],
      runaway7a: [
         "<25>{#p/toriel}{#f/18}* ...",
         "<25>{#g/torielCompassionSmile}* 没事啦，没事啦，孩子。\n* 一切都会好起来的。",
         "<25>{#f/1}* 你先回家，\n  我要在这处理些事情。",
         "<25>{#f/5}* 很快就回去。"
      ],
      runaway7b: [
         "<25>{#p/toriel}{#f/21}* 真可悲啊...",
         "<25>* 我连一个人类孩子...\n  都保护不了..."
      ],
      silencio: {
         a: pager.create(
            0,
            () =>
               SAVE.data.n.plot === 72
                  ? [
                       "<32>{#p/basic}{#n1}* Hey there.\n* Nice to see you back here.",
                       "<32>* I've decided to revisit this old stomping ground of mine...",
                       "<32>* Besides, it's quiet here.\n* Just like me.",
                       "<32>* Oh, and I've retired from working at the CORE.",
                       "<32>* You see, when I joined the engineering team...",
                       "<32>* I didn't realize I'd be called on for impromptu guard duty.",
                       "<32>* ... it would seem deception of the corporate variety is beyond even my foresight."
                    ]
                  : SAVE.data.b.napsta_performance
                  ? [
                       "<32>{#p/basic}{#n1}* Hey there.\n* Nice to see you at the show.",
                       "<32>* The name's Silencio... but I'm sure you've heard that by now.",
                       "<32>* Everyone around here knows my name, even that DJ.",
                       "<32>* I once performed my own kind of musical here.",
                       "<32>* \"Silencio's Great Escape,\" it was called.",
                       "<32>* Once it was over, I was gone before the crowd could even catch their breath."
                    ]
                  : [
                       "<32>{#p/basic}{#n1}* Hey there.\n* Nice to meet you.",
                       "<32>* The name's Silencio... well, that's what they call me, anyway.",
                       "<32>* You wanna know why they call me that?",
                       "<32>* I'm like a space ninja, silent as the most silent of nights.",
                       "<32>* I can slip out of any danger, no exceptions.",
                       "<32>* Don't believe me?\n* Try something funny, and you'll see how fast I run."
                    ],
            () =>
               SAVE.data.n.plot === 72
                  ? [
                       "<32>{#p/basic}{#n1}* Oh, yeah, I guess I'm free to leave the galaxy now.",
                       "<32>* ... but maybe I'll stay."
                    ]
                  : SAVE.data.b.napsta_performance
                  ? [
                       "<32>{#p/basic}{#n1}* You might even say, that performance of mine...",
                       "<32>* Was \"breathtaking.\""
                    ]
                  : [
                       "<32>{#p/basic}{#n1}* What are you still talking to me for, huh?",
                       "<32>* I've already said everything I'm willing to."
                    ]
         )
      },
      
      socks1: pager.create(0, () =>
         world.darker
            ? [ "<32>{#p/human}* （你往里面瞅了瞅。）", "<32>{#p/basic}* 只是个放袜子的抽屉。" ]
            : [
                 "<32>{#p/human}* （你往里面瞅了瞅。）",
                 "<32>{#p/basic}* 真羞人！\n* 这里面全是Toriel收藏的袜子。\n* 有点乱...",
                 world.meanie
                    ? choicer.create("* （让它们更乱点吗？）", "是", "否")
                    : choicer.create("* （整理一下吗？）", "是", "否")
              ]
      ),
      socks2: () =>
         world.meanie
            ? [ "<33>{#p/human}* （你把袜子弄得一团糟。）" ]
            : [
                 "<32>{#p/human}* （你把袜子整理成一双一双的。）",
                 ...(!SAVE.flag.b.$asr || SAVE.data.b.oops
                    ? []
                    : [
                         "<32>{#p/human}* (Somehow, you got the sense that there was something here...)",
                         "<32>{#p/human}* (...)\n* (It appears there's a key hidden in the drawer.)",
                         choicer.create("* (Take the key?)", "是", "否")
                      ])
              ],
      socks3: [
         "<32>{#p/human}* (It appears there's a key hidden in the drawer.)",
         choicer.create("* (Take the key?)", "是", "否")
      ],
      socks4: [ "<32>{#p/human}* （你什么都不打算做。）" ],
      socks5: () =>
         SAVE.flag.b.$svr
            ? [ "<32>{#p/human}* (But you got the sense that it'd be a bad idea.)" ]
            : [ "<32>{#s/equip}{#p/human}* (The Secret Key was added to your keyring.)" ],
      socks6: [ "<32>{#p/human}* （你决定什么也不拿。）" ],
      socks7: () =>
         SAVE.data.b.svr
            ? [
                 "<32>{#p/human}* (You stare into the sock drawer, recalling the long journey that started here.)",
                 "<32>{#p/human}* (You can't help but wonder where you'd be without it.)"
              ]
            : world.darker
            ? [ "<32>{#p/basic}* 只是个放袜子的抽屉。" ]
            : SAVE.data.n.plot < 72
            ? [ "<32>{#p/basic}* You can't stop looking at the socks." ]
            : SAVE.data.b.oops
            ? [
                 "<32>{#p/basic}* You came all this way just to revisit Toriel's sock drawer...?",
                 "<32>* You have great priorities in life."
              ]
            : [
                 "<32>{#p/basic}* You came all this way just to revisit Toriel's sock drawer...?",
                 "<32>* ... I guess that makes sense."
              ],
      steaksale: {
         a: pager.create(
            0,
            () =>
               SAVE.data.b.napsta_performance
                  ? [
                       "<32>{#p/basic}{#n1}* Sup, lassy ;)",
                       "<32>* It was good seeyin' ya at the show, ya know? ;)",
                       "<32>* You did a real bang-up job ;)",
                       "<32>* If one thing's for sure, I think that calls for a special offer ;)",
                       "<32>* For a limited time only, our products will be infused with our \"premium\" ingredients ;)",
                       "<32>* And believe me, lassy, this ain't just the same old stuff as before, aw naw ;)",
                       "<32>* This stuff is GENUINE, yo ;)",
                       "<32>* It's a little more expensive, so I hope ya don't mind ;)",
                       "<32>* Now... why don'tcha check out what's for sale? ;)"
                    ]
                  : [
                       "<32>{#p/basic}{#n1}* Sup, lassy ;)",
                       "<32>* The boss man sent me out here to see what you country peeps are up to, ya know? ;)",
                       "<32>* You could say we're expanding our enterprise ;)",
                       "<32>* What's our enterprise, you ask? ;)",
                       "<32>* Well, it's quite simple really... we sell steak ;)",
                       "<32>* And this ain't the replicated stuff, aw naw ;)",
                       "<32>* This stuff is REAL, yo ;)",
                       "<32>* Anyone who says otherwise is a poser, ya feel me? ;)",
                       "<32>* That being said, why don'tcha check out what's for sale? ;)"
                    ],
            [ "<32>{#p/basic}{#n1}* Why don'tcha check out what's for sale? ;)" ]
         ),
         a1: [ "<32>{#p/basic}{#n1}* Thanks for everything, lassy ;)" ],
         b: () => [
            SAVE.data.b.napsta_performance
               ? world.darker
                  ? "<32>{#p/basic}{#n1!}* \"Sizzli Steak\" for 40G."
                  : "<32>{#p/basic}{#n1!}* It's labelled \"Sizzli Steak\" and costs 40G.\n* Smells like ultra-hyperbole."
               : world.darker
               ? "<32>{#p/basic}{#n1!}* \"Sizzli Steak\" for 20G."
               : "<32>{#p/basic}{#n1!}* It's labelled \"Sizzli Steak\" and costs 20G.\n* Smells like hyperbole.",
            choicer.create("* (Buy this item?)", "是", "否")
         ],
         b1: [ "<32>{#p/human}{#n1!}* （你得到了滋滋牛排。）", "<32>{#p/basic}{#n1}* Slick choice, lassy ;)" ],
         b2: [ "<32>{#p/human}{#n1!}* (You decide not to buy.)" ],
         c: () => [
            SAVE.data.b.napsta_performance
               ? world.darker
                  ? "<32>{#p/basic}{#n1!}* \"Fizzli Soda\" for 10G."
                  : "<32>{#p/basic}{#n1!}* It's labelled \"Fizzli Soda\" and costs 10G.\n* Who would EVER buy this?"
               : world.darker
               ? "<32>{#p/basic}{#n1!}* \"Fizzli Soda\" for 5G."
               : "<32>{#p/basic}{#n1!}* It's labelled \"Fizzli Soda\" and costs 5G.\n* Who would buy this?",
            choicer.create("* (Buy this item?)", "是", "否")
         ],
         c1: [ "<32>{#p/human}{#n1!}* （你得到了呲呲汽水。）", "<32>{#p/basic}{#n1}* Careful, it's sweet ;)" ],
         c2: [ "<32>{#p/human}{#n1!}* (You decide not to buy.)" ],
         d: pager.create(
            0,
            () => [
               "<32>{#p/human}{#n1!}* （你的钱不够。）",
               "<32>{#p/basic}{#n1}* Not enough money, huh? ;)",
               SAVE.data.b.napsta_performance
                  ? "<32>{#p/basic}* That's alright, lassy ;)\n* Not everyone can afford the \"premium\" ingredients ;)"
                  : "<32>{#p/basic}* That's alright, lassy ;)\n* Just be sure to come back when you've got some ;)"
            ],
            [ "<32>{#p/human}{#n1!}* （你的钱不够。）" ]
         ),
         e: pager.create(
            0,
            [
               "<32>{#p/human}{#n1!}* （你带的东西太多了。）",
               "<32>{#p/basic}{#n1}* Maybe you should come back later ;)"
            ],
            [ "<32>{#p/human}{#n1!}* （你带的东西太多了。）" ]
         ),
         f: [ "<32>{#p/human}{#n1!}* （你得到了滋滋牛排。）" ],
         g: [ "<32>{#p/human}{#n1!}* （你得到了呲呲汽水。）" ],
         h: [ "<32>{#p/human}{#n1!}* （你带的东西太多了。）" ],
         i: [
            "<32>{#p/basic}{#n1}* By the way, we're outta stock ;)",
            "<32>* Seems you can't get enough of our stuff ;)",
            "<32>* Say, if- no, when you meet the boss-man... tell him this ;)",
            "<32>{#p/human}{#n1!}* (Aaron whispered something in your ear.)",
            "<32>{#p/basic}{#n1}* Good luck out there, lassy ;)"
         ]
      },
      supervisor: {
         a: [ "<32>{#p/basic}* Later..." ],
         b: [
            "<32>{#p/napstablook}* hey everyone...",
            "<32>* this is a little tune i wrote a while ago...",
            "<32>* it's nothing special, but...",
            "<32>* hopefully, it's good enough for this club",
            "<32>* well, here we go..."
         ],
         c1: [ "<32>{*}{#p/basic}* Well, this is jazzy.{^30}{%}" ],
         c2: [
            "<25>{*}{#p/toriel}{#f/7}* Why has Napstablook never mentioned this??\n* This is good!{^30}{%}",
            "<32>{*}{#p/basic}* Yeah, maybe they're just shy.{^30}{%}"
         ],
         c3: [ "<32>{*}{#p/basic}* Ooh, bells ;){^30}{%}" ],
         c4: [ "<32>{*}{#p/basic}* Here comes the breakdown!{^30}{%}" ],
         c5: [ "<32>{*}{#p/basic}* Well, that was... something.{^30}{%}" ],
         d: [
            "<32>{#p/napstablook}* yeah, that was something",
            "<32>{#p/napstablook}* oh well...\n* i probably bored you guys...",
            "<32>{#p/napstablook}* sorry..."
         ],
         e: [
            "<25>{|}{#p/toriel}{#f/2}* No, wait!\n* That was actually- {%}",
            "<32>{#p/basic}* I don't think they can hear you, Toriel.",
            "<25>{#p/toriel}{#f/9}* No...\n* They never do..."
         ]
      },
      terminal: {
         a: () =>
            SAVE.data.n.plot === 72
               ? !world.runaway
                  ? [
                       "<32>{#p/human}* （你激活了终端。）\n* （上面有一条新消息。）",
                       "<32>{#p/alphys}* We're free, everyone!\n* This isn't a joke, the force field's gone!",
                       "<32>* Seriously, they're shutting down the core in a few days, so it's time to go!",
                       "<32>* You don't want to die here, do you?"
                    ]
                  : [
                       "<32>{#p/human}* （你激活了终端。）\n* （上面有一条新消息。）",
                       "<32>{#p/alphys}* The force field's gone.\n* Calling all citizens for immediate evacuation.",
                       "<32>* ... I know you're all afraid, but it's going to be okay.",
                       "<32>* They can't hurt us if we leave them behind."
                    ]
               : 37.2 <= SAVE.data.n.plot
               ? [
                    "<32>{#p/human}* （你激活了终端。）\n* （上面有一条新消息。）",
                    "<32>{#p/alphys}* The Foundry's fluid network has been repaired, thanks to our... v-very kind workers.",
                    "<32>* ...",
                    "<32>* On an unrelated note, we're... l-looking for new workers."
                 ]
               : [
                    "<32>{#p/human}* （你激活了终端。）\n* （上面有一条新消息。）",
                    "<32>{#p/alphys}* The Foundry's fluid network is f-falling apart again.",
                    "<32>* The workers have promised a short turnaround, but things are looking bleak.",
                    "<32>* Please, i-if anyone out there can help, we need you..."
                 ]
      },
      torieldanger: {
         a: [ "<25>{#p/toriel}{#f/1}* 去看看那边的终端吧。" ],
         b: [ "<25>{#p/toriel}{#f/1}* 小家伙，终端就在那里。\n  去输下密码吧。" ]
      },
      latetoriel1: [
         "<25>{#p/toriel}{#npc/a}{#f/2}* ...!",
         "<25>{#f/5}* What are you doing out here, my ch...",
         "<25>{#f/9}* ... child...",
         "<25>{#f/5}* I cannot care for you any longer, child.\n* Nor should I.",
         "<25>{#f/5}* You have places to be, things to see...",
         "<25>{#f/10}* Who am I to keep you from that?",
         "<25>{#f/9}* ...",
         "<25>{#f/5}* Please, carry on without me...",
         "<25>{#f/1}* ... I know you can do the right thing..."
      ],
      latetoriel2: [ "<25>{#p/toriel}{#npc/a}{#f/5}* ... go on..." ],
      
      lateasriel: () =>
         [
            [ "<25>{#p/asriel1}{#f/13}* Just leave me, Frisk...", "<25>{#f/15}* I can't come back with you, okay?" ],
            [
               "<25>{#p/asriel1}{#f/16}* I don't want to break their hearts all over again.",
               "<25>{#f/13}* It's better if they never see me at all."
            ],
            [
               "<25>{#p/asriel1}{#f/15}* ... what are you doing?",
               "<25>{#f/15}* Are you trying to keep me company?",
               "<25>{#f/23}* Frisk...",
               "<25>{#f/22}* ...",
               "<25>{#f/13}* Hey.",
               "<25>{#f/13}* Let me ask you a question.",
               "<25>{#f/15}* Frisk...\n* Why did you come here?",
               "<25>{#f/13}* Everyone knows the story, right...?",
               "<25>{#f/23}* \"Spacecraft who fly into the Ebott sector are said to disappear.\"",
               "<25>{#f/22}* ...",
               "<32>{#p/human}* (...)\n* (You tell Asriel the truth.)",
               "<25>{#p/asriel1}{#f/25}* ...",
               "<25>{#f/25}* Frisk... you...",
               "<25>{#f/23}* ...",
               "<25>{#f/23}* You don't have to be alone anymore, okay?",
               "<25>{#f/17}* You've made so many wonderful friends here...",
               "<25>{#f/17}* They'll look out for you, okay?"
            ],
            [
               "<25>{#p/asriel1}{#f/15}* ...",
               "<25>{#f/15}* I know why $(name) flew out here.",
               "<25>{#f/16}* It wasn't for a very happy reason.",
               "<25>{#f/13}* Frisk.\n* I'll be honest with you.",
               "<25>{#f/15}* $(name) wanted nothing to do with humanity.",
               "<25>{#f/16}* Why, they never said.",
               "<25>{#f/15}* But they felt very strongly about that."
            ],
            [
               "<25>{#p/asriel1}{#f/17}* Frisk, it's okay.\n* You're not like $(name) at all.",
               "<25>{#f/15}* In fact, though you have similar, uh, fashion choices...",
               "<25>{#f/13}* I don't know why I ever acted like you were the same person.",
               "<25>{#f/15}* Maybe...\n* The truth is...",
               "<25>{#f/16}* $(name) just wasn't who I wanted them to be.",
               "<25>{#f/13}* While, Frisk...",
               "<25>{#f/17}* You're the kind of friend I've always wanted to have.",
               "<25>{#f/20}* So maybe I was kind of projecting a little.",
               "<25>{#f/17}* Let's be honest.\n* I did some weird stuff as a star."
            ],
            [
               "<25>{#p/asriel1}{#f/13}* There's one last thing I feel like I should tell you.",
               "<25>{#f/15}* When $(name) and I combined our SOULs together...",
               "<25>{#f/16}* The control over our body was actually split between us.",
               "<25>{#f/15}* They were the one that picked up their own empty body.",
               "<25>{#f/13}* And then, when we made it to the planet's remains...",
               "<25>{#f/13}* They were the one that wanted to...",
               "<25>{#f/16}* ... to use our full power.",
               "<25>{#f/13}* It took everything I had to resist it.",
               "<25>{#f/15}* And then, because of me, we...",
               "<25>{#f/22}* Well, that's why I ended up the way I did.",
               "<25>{#f/23}* ... Frisk.",
               "<25>{#f/17}* This whole time, I've blamed myself for that decision.",
               "<25>{#f/13}* It's why I adopted that horrible view of the world.",
               "<25>{#f/13}* \"Kill or be killed.\"",
               "<25>{#f/17}* But now...\n* After meeting you...",
               "<25>{#f/23}* Frisk, I don't regret that decision anymore.",
               "<25>{#f/22}* I did the right thing.",
               "<25>{#f/13}* If we'd killed those humans...",
               "<25>{#f/15}* We would have had to wage war against all of humanity.",
               "<25>{#f/17}* And in the end, everyone went free, right?",
               "<25>{#f/17}* Even the others who came here made it out alive.",
               "<25>{#f/13}* ...",
               "<25>{#f/15}* But, $(name)...",
               "<25>{#f/16}* ... I can't say for certain what happened to them after we died.",
               "<25>{#f/15}* Nothing was ever found... not even their SOUL.",
               "<25>{#f/15}* So... I can't help but wonder if they're... still out there.",
               "<32>{#p/basic}* ...",
               "<32>{#p/human}* (It sounds like someone is crying...)"
            ],
            [
               "<25>{#p/asriel1}{#f/17}* Frisk, thank you for listening to me.",
               "<25>{#f/17}* You should really go be with your friends now, okay?",
               "<25>{#f/13}* Oh, and, please...",
               "<25>{#f/20}* In the future, if you, uh, see me...",
               "<25>{#f/15}* ... don't think of it as me, okay?",
               "<25>{#f/16}* I just want you to remember me like... this.",
               "<25>{#f/17}* Someone that was your friend for a little while.",
               "<25>{#f/13}* ...",
               "<32>{|}{#p/human}* (You tell Asriel you really- {%}",
               "<25>{#p/asriel1}{#f/23}* Frisk, it's okay.",
               "<25>{#f/22}* You don't have to save everyone to be a good person.",
               "<25>{#f/13}* Besides... even if I could keep this form...",
               "<25>{#f/15}* I don't know if I could move on from what happened in the past.",
               "<25>{#f/17}* ... just promise me you'll take care of yourself, alright?",
               "<25>{#f/13}* ...",
               "<25>{#f/15}* Well, see you."
            ],
            [ "<25>{#p/asriel1}{#f/13}* Frisk...", "<25>{#f/15}* Don't you have anything better to do?" ],
            []
         ][Math.min(SAVE.data.n.lateasriel++, 8)],
      securefield: [ "<33>{#p/basic}* 这里有一道安保屏障。\n* 已被激活。" ],
      trivia: {
         w_security: [ "<32>{#p/basic}* 一道安保屏障。" ],
         photoframe: () =>
            SAVE.data.b.svr
               ? [
                    [
                       "<25>{#p/asriel1}{#f/13}* An empty photo frame...",
                       "<25>{#f/16}* Once upon a time, there WERE pictures in these frames.",
                       "<25>{#f/15}* Then, she took them out and never put them back.",
                       "<25>{#f/16}* ... must've hurt too much to look at them."
                    ],
                    [
                       "<25>{#p/asriel1}{#f/13}* Empty photo frames are like missing memories...",
                       "<25>{#p/asriel1}{#f/15}* This place has way too many of them."
                    ],
                    [ "<25>{#p/asriel1}{#f/22}* Too many of these in this strange place." ]
                 ][Math.min(asrielinter.photoframe++, 1)]
               : SAVE.data.n.plot === 72 && !world.runaway
               ? [ "<32>{#p/basic}* Still an empty photo frame." ]
               : [ "<32>{#p/basic}* 一个空相框。" ],
         w_paintblaster: () =>
            SAVE.data.b.svr
               ? [ "<32>{#p/human}* (This device seems to be a few decades out of date.)" ]
               : world.darker
               ? [ "<32>{#p/basic}* 毫无价值的摆设。" ]
               : [ "<32>{#p/basic}* An old fuel injection device." ],
         w_candy: () =>
            SAVE.data.b.svr
               ? [ "<32>{#p/human}* (The sign warns of unexpected appliance malfunctions.)" ]
               : [ "<32>{#p/basic}* “请注意：\n  有的机器可能看起来没问题，\n  但内部已经坏了。”" ],
         w_djtable: () =>
            SAVE.data.b.svr
               ? [ "<32>{#p/human}* (You touch the DJ set.)\n* (It makes an oddly satisfying scratching sound.)" ]
               : world.darker
               ? [ "<32>{#p/basic}* 一台DJ打碟机。" ]
               : SAVE.data.n.plot === 72
               ? [ "<32>{#p/basic}* A fancy DJ set, which is surprisingly not in use right now." ]
               : [ "<32>{#p/basic}* A fancy DJ set, equipped with knobs and sliders galore." ],
         w_froggit: () =>
            SAVE.data.n.plot === 72
               ? [
                    "<32>{#p/basic}* 呱呱，呱呱。\n* （打扰一下，人类。）",
                    "<32>* (You seem like you have grown into a thoughtful and conscientious person.)",
                    "<32>* (Whether that was from my advice or not...)\n* (I'm quite proud.)",
                    "<32>* 呱呱。"
                 ]
               : [
                    "<32>{#p/basic}* 呱呱，呱呱。\n* （打扰一下，人类...）",
                    "<32>* （我给你几点战斗的建议。）",
                    "<32>* （如果你用特定的方式{@fill:#ff0}行动{@fill:#fff}，\n  或用{@fill:#ff0}战斗{@fill:#fff}把他们打到残血...）",
                    "<32>* （他们估计就不想战斗了。）",
                    "<32>* （如果一个怪物不想战斗，\n  那么...）",
                    "<32>* （就对它{@fill:#ff0}仁慈{@fill:#fff}一点吧，人类。）\n* 呱呱。"
                 ],
         w_froggit_view: () =>
            SAVE.data.b.svr
               ? [ "<32>{#p/human}* (You stare thoughtfully into the cosmos beyond...)" ]
               : world.darker
               ? []
               : SAVE.data.n.plot === 72
               ? [
                    "<32>{#p/basic}* It's ironic how staring at outer space...",
                    "<32>* Tends to be a great way to channel your inner thoughts."
                 ]
               : [
                    "<32>{#p/basic}* It's a view of outer space.",
                    "<32>* Certainly no shortage of those around here, is there?"
                 ],
         w_kitchenwall: () =>
            SAVE.data.n.plot === 9
               ? [ "<26>{#p/toriel}{#f/1}* Patience, my child!" ]
               : [ "<26>{#p/toriel}{#f/1}* 给我点时间..." ],
         w_lobby1: () =>
            SAVE.data.b.svr
               ? [ "<32>{#p/human}* (The sign speaks of strength of will in times of trouble.)" ]
               : [ "<32>{#p/basic}* “即使脚步蹒跚，\n  也要在逆境中绘出\n  胜利的路径。”" ],
         w_pacing_view: () =>
            SAVE.data.b.svr
               ? [ "<32>{#p/human}* (You stare happily into the cosmos beyond...)" ]
               : world.darker
               ? []
               : SAVE.data.n.plot === 72
               ? [
                    "<32>{#p/basic}* After such a long journey, the glass doesn't seem to scare you.",
                    "<32>* Not that it ever did in the first place."
                 ]
               : [
                    "<32>{#p/basic}* To think the only thing between you and the endless expanse is a sheet of glass...",
                    "<32>* Despite all common sense, this doesn't seem to bother you."
                 ],
         w_pacing1: () =>
            SAVE.data.n.plot === 72
               ? [
                    "<32>{#p/basic}* Ribbit, ribbit.\n* (Someone passed by here not too long ago.)",
                    "<32>* (He told me not to tell you where he was going.)",
                    "<32>* (I wasn't going to, but then, he just seemed so sad...)",
                    "<32>* (He's probably at the platform just past the entrance now.)",
                    "<32>* (Go. Speak to him. Something good will come of it.)\n* Ribbit.",
                    "<32>{#p/basic}* ... Asriel..."
                 ]
               : [
                    "<32>{#p/basic}* 呱呱，呱呱。\n* （唉...）",
                    "<32>* （我的“朋友”并不愿意善待我。）",
                    "<32>* （相反，只要逮着机会，\n  他就会伤害我。）",
                    "<32>* （没错.......）\n* （伤害我吧............）\n* （................）",
                    "<32>* （至少你愿意善待我。）\n* 呱呱。"
                 ],
         w_pacing2: () =>
            SAVE.data.n.plot === 72
               ? SAVE.data.b.oops
                  ? [
                       "<32>{#p/basic}* 呱呱，呱呱。\n* （你好，人类...）",
                       "<32>* （你有看到我的朋友吗？）",
                       "<32>* （几天前它还在这，\n  就站在我的左边...）",
                       "<32>* （但自打你来之后，\n  从某个时刻起，它就不见了。）",
                       "<32>* （它说过，如果你伤害了怪物\n  就会离开这里...）",
                       SAVE.data.n.exp <= 0
                          ? "<32>* （真奇怪，因为你根本\n  没伤害任何怪物啊。）\n* 呱呱。"
                          : "<32>* （如果有机会，下次对他们好一点。\n  如何？）\n* 呱呱。"
                    ]
                  : [
                       "<32>{#p/basic}* 呱呱，呱呱。\n* （你好，人类...）",
                       "<32>* (My friend is the happiest they've ever been.)",
                       "<32>* (They said they'd leave if you hurt anyone, but you haven't.)",
                       "<32>* (In fact, they've decided to stay to my left forever.)",
                       "<32>* (As for that \"friend\" of theirs who always tried to hurt them...)",
                       "<32>* (Oh, he seems to have turned himself into a goat.)\n* Ribbit."
                    ]
               : [
                    "<32>{#p/basic}* 呱呱，呱呱。\n* （你好，人类...）",
                    "<32>* （你有尝试查看过\n  自己的“物品栏”吗？）",
                    "<32>* （你捡到过的东西，\n  都能在那里找到。）",
                    "<32>* （你问，我的物品栏都有什么？）",
                    "<32>* （哦，你可真傻... \n  怪物根本没有“物品栏”！）\n* 呱呱。"
                 ],
         w_pacing3: () =>
            SAVE.data.n.plot === 72
               ? SAVE.data.n.bully < 1
                  ? [
                       "<32>{#p/basic}* Ribbit, ribbit.\n* (Thank you for always showing mercy to us monsters.)",
                       "<32>* (I know I gave you advice on how to beat people up safely...)",
                       "<32>* (But that didn't mean I wanted you to do it.)",
                       "<32>* (You are a kind human indeed.)\n* Ribbit."
                    ]
                  : SAVE.data.n.bully < 15
                  ? [
                       "<32>{#p/basic}* Ribbit, ribbit.\n* (Thank you for keeping the beatings to a minimum.)",
                       "<32>* (I know I gave you advice on how to beat people up safely...)",
                       "<32>* (But that didn't mean I wanted you to do it.)",
                       "<32>* (You aren't too terrible, at least for a human.)\n* Ribbit."
                    ]
                  : [
                       "<32>{#p/basic}* Ribbit, ribbit.\n* (So you have proven to be a formidable threat.)",
                       "<32>* (Yet, somehow, I'm still not afraid of you...)",
                       "<32>* (Perhaps at the end, you offered mercy when you could have attacked.)",
                       "<32>* (I do appreciate the restraint you have shown.)\n* Ribbit."
                    ]
               : [
                    "<32>{#p/basic}* Ribbit, ribbit.\n* (If you beat up a monster until it's almost dead...)",
                    "<32>* (Its name will turn blue.)",
                    "<32>* (Weird, right?)\n* (But I heard humans turn blue when they get beat up, too.)",
                    "<32>* (So, I suppose you can relate to that.)",
                    "<32>* (Well, thank you for listening to my head-talk.)\n* Ribbit."
                 ],
         w_puzzle1_view: () =>
            SAVE.data.b.svr
               ? [ "<32>{#p/human}* (You stare deeply into the cosmos beyond...)" ]
               : world.darker
               ? []
               : SAVE.data.n.plot === 72
               ? [ "<32>{#p/basic}* In the end, these rooms still feel like nothing more than lookout areas." ]
               : [
                    "<32>{#p/basic}* Why does it feel like some of these rooms...",
                    "<32>* ... were just made solely to be lookout areas?"
                 ],
         w_puzzle2: () =>
            SAVE.data.b.svr
               ? world.nootflags.has('w_puzzle2') // NO-TRANSLATE

                  ? [
                       "<32>{#p/human}* (The sign describes puzzle- solving as an unnecessary part of space exploration.)",
                       ...[
                          [
                             "<25>{#p/asriel1}{#f/13}* Unlike most signs, this one has a point.",
                             "<25>{#f/15}* And that's not just because I'm the one who wrote it."
                          ],
                          [ "<25>{#p/asriel1}{#f/3}* ... don't tell me you actually enjoyed these puzzles." ],
                          [ "<25>{#p/asriel1}{#f/10}* Frisk, even you're not THAT weird." ]
                       ][Math.min(asrielinter.w_puzzle2++, 2)]
                    ]
                  : [ "<32>{#p/human}* (The sign describes the value of patience in space.)" ]
               : world.nootflags.has('w_puzzle2') // NO-TRANSLATE

               ? [
                    "<32>{#p/basic}* \"The final frontier is a deep dark sea.\"",
                    "<32>* \"Navigating its waters should NEVER require solving badly designed puzzles!\""
                 ]
               : [
                    "<32>{#p/basic}* \"The final frontier is a deep dark sea.\"",
                    "<32>{#p/basic}* \"Before charging into the {@fill:#ff993d}great unknown{@fill:#fff}, you must wait for its {@fill:#00a2e8}currents to align{@fill:#fff}.\""
                 ],
         w_puzzle3_view: () =>
            SAVE.data.b.svr
               ? [ "<32>{#p/human}* (You stare reflectively into the cosmos beyond...)" ]
               : world.darker
               ? []
               : SAVE.data.n.plot === 72
               ? [ "<32>{#p/basic}* It sure... was... a nice view." ]
               : [ "<32>{#p/basic}* It sure is a nice view." ],
         w_puzzle4: () =>
            SAVE.data.b.svr
               ? [ "<32>{#p/human}* (The sign appears to be an advertisement for a now- defunct steak sale.)" ]
               : [
                    "<32>{#p/basic}* \"Be sure to catch a slice of Glyde's Signature Steak (TM) in the activities room!\""
                 ],
         w_ta_box: () =>
            SAVE.data.b.svr
               ? [
                    [
                       "<25>{#p/asriel1}{#f/20}* Yeah... Toriel was never one to keep these in one piece.",
                       "<25>{#f/21}* Even these replicas of my model starships got smashed..."
                    ],
                    [
                       "<25>{#f/13}* It's surprising.\n* She's usually such an organized person.",
                       "<25>{#p/asriel1}{#f/17}* ... she must have been having a bad day."
                    ],
                    [ "<25>{#p/asriel1}{#f/13}* It happens..." ]
                 ][Math.min(asrielinter.w_ta_box++, 2)]
               : world.darker
               ? [ "<32>{#p/basic}* 一个玩具盒。\n* 里面的飞船模型都被砸得粉碎。" ]
               : SAVE.data.n.plot === 72
               ? [
                    "<32>{#p/basic}* The little ships in this box were never repaired.",
                    "<32>* If this was at Asgore's house, they'd be in perfect shape."
                 ]
               : [
                    "<32>{#p/basic}* A box of model starships!\n* And... shattered glass?",
                    "<32>* Looks like someone broke their little ships."
                 ],
         w_ta_cabinet: () =>
            SAVE.data.b.svr
               ? [ "<32>{#p/human}* (You can't find anything in here besides several of the exact same outfit.)" ]
               : [
                    "<32>{#p/basic}* 衣柜里挂满了黄蓝条纹衫。",
                    ...(SAVE.data.n.plot === 72 ? [ "<32>* Like that's ever gonna change." ] : [])
                 ],
         w_ta_frame: () =>
            SAVE.data.b.svr
               ? [ [ "<25>{#p/asriel1}{#f/21}* ... it's missing..." ], [ "<25>{#p/asriel1}{#f/21}* ..." ] ][
                    Math.min(asrielinter.w_ta_frame++, 1)
                 ]
               : SAVE.data.n.plot === 72
               ? [ "<32>{#p/basic}* 一个空相框。", "<32>* There still isn't much else to say." ]
               : [ "<32>{#p/basic}* 一个空相框。", "<32>* 没什么好说的。" ],
         w_ta_paper: () =>
            SAVE.data.b.svr
               ? [
                    "<32>{#p/human}* (The drawing doesn't appear to be anything of importance.)",
                    ...[
                       [
                          "<25>{#p/asriel1}{#f/13}* It's long gone now, but the real drawing I made here...",
                          "<25>{#f/17}* ... was basically the blueprint for my \"god of hyperdeath\" form.",
                          "<25>{#f/17}* Super skybreaker, titanium striker...",
                          "<25>{#f/20}* And, of course, the legendary \"hyper goner.\""
                       ],
                       [
                          "<25>{#p/asriel1}{#f/17}* Yeah... I guess I had it all planned out.",
                          "<25>{#f/20}* I came up with lots of crazy stuff, all the time...",
                          "<25>{#f/1}* Ooh, you would have ADORED my pan-galactic starship concept."
                       ],
                       [
                          "<25>{#p/asriel1}{#f/17}* Frisk, I hope...",
                          "<25>{#f/23}* I really hope we can have a moment like that between us.",
                          "<25>{#f/22}* Back with $(name), it was always...",
                          "<25>{#f/15}* ... difficult."
                       ],
                       [ "<25>{#p/asriel1}{#f/20}* Don't worry.\n* If you can't draw, I'll just teach you." ]
                    ][Math.min(asrielinter.w_ta_paper++, 3)]
                 ]
               : world.darker
               ? [ "<32>{#p/basic}* 平平无奇的画。\n* 和原型一点都不像。" ]
               : [
                    "<32>{#p/basic}* A children's drawing, depicting a giant monster with rainbow wings.",
                    "<32>* It's just like the one at home..."
                 ],
         w_tf_couch: () =>
            SAVE.data.b.svr
               ? [ "<32>{#p/human}* (The couch appears to have never been used.)" ]
               : SAVE.data.n.plot === 72
               ? [ "<32>{#p/basic}* No matter how much time passes, it's unlikely anyone will ever sit here." ]
               : world.darker
               ? [ "<32>{#p/basic}* 一个沙发。\n* 难道你还有别的事要做吗？" ]
               : [
                    "<32>{#p/basic}* A comfortable-looking couch.",
                    "<32>* The temptation to sink into its luscious cushions is hard to resist..."
                 ],
         w_tf_table: () =>
            SAVE.data.b.svr
               ? [ "<32>{#p/human}* (You glance at the end table, but it doesn't appear to glance back.)" ]
               : [
                    "<32>{#p/basic}* 一张毫不起眼的茶几。",
                    "<32>{#p/basic}* 不可思议的是，它几乎是崭新的。"
                 ],
         w_tf_window: () =>
            SAVE.data.b.svr
               ? SAVE.data.b.c_state_secret1_used && SAVE.data.b.c_state_secret5_used
                  ? [ "<32>{#p/human}* (You stare wishfully into the cosmos beyond...)" ]
                  : [ "<32>{#p/human}* (You stare wistfully into the cosmos beyond...)" ]
               : world.darker
               ? [ "<32>{#p/basic}* 凝望深渊，你不禁扪心自问：\n  哪些悲剧与罪孽本可避免。" ]
               : SAVE.data.n.plot === 72
               ? [ "<32>{#p/basic}* Despite everything, it's a beautiful view of outer space." ]
               : [ "<32>{#p/basic}* It's a beautiful view of outer space." ],
         w_th_door: () =>
            SAVE.data.b.svr
               ? [
                    "<32>{#p/human}* (The sign describes the room within as being incomplete.)",
                    ...[
                       [
                          "<25>{#p/asriel1}{#f/3}* If this house weren't a replica, that would be Dad's room...",
                          "<25>{#f/4}* You can guess why it was never finished."
                       ],
                       [
                          "<25>{#p/asriel1}{#f/13}* ...",
                          "<25>{#f/15}* That speech affected Mom in a... not good way.",
                          "<25>{#f/4}* As a star, I sometimes... spied on her.",
                          "<25>{#f/3}* And the way she was talking, it's like she never left that moment.",
                          "<25>{#f/13}* Then, you arrived, and everything changed..."
                       ],
                       [
                          "<25>{#p/asriel1}{#f/13}* ...",
                          "<25>{#f/15}* This is too awkward.\n* I'm going to pretend we aren't here."
                       ],
                       [ "<25>{#p/asriel1}{#f/13}* ..." ]
                    ][Math.min(asrielinter.w_th_door++, 3)]
                 ]
               : [ "<32>{#p/basic}* “房间正在翻修。”" ],
         w_th_mirror: () =>
            SAVE.data.b.svr
               ? [ "<25>{#p/asriel1}{#f/24}* 这是我们..." ]
               : world.genocide
               ? [ "<32>{#p/basic}* ..." ]
               : world.darker
               ? [ "<32>{#p/basic}* 这是你。" ]
               : SAVE.data.b.w_state_catnap || SAVE.data.n.plot > 17
               ? [ "<32>{#p/basic}* 这是你...", "<32>{#p/basic}* ...而且，永远都会是你。" ]
               : [ "<32>{#p/basic}* 这是你！" ],
         w_th_plant: () =>
            SAVE.data.b.svr
               ? [ "<32>{#p/human}* (You thank the plant for the warmth it brings each day.)" ]
               : SAVE.data.n.plot === 72
               ? [ "<32>{#p/basic}* This plant is just happy you're still alive." ]
               : world.darker
               ? [ "<32>{#p/basic}* 这株植物不想见到你。" ]
               : SAVE.data.b.oops
               ? [ "<32>{#p/basic}* This plant is happy to see you." ]
               : [ "<32>{#p/basic}* This plant is ecstatic about seeing you!" ],
         w_th_sausage: () =>
            SAVE.data.b.svr
               ? [ "<32>{#p/human}* (You rustle the corny plant.)" ]
               : [ "<32>{#p/basic}* 这株忧玉的植物一点都不米人。" ],
         w_th_table1: () => [
            "<32>{#p/human}* （你在桌子底下找到了一套蜡笔。）",
            ...(SAVE.data.b.svr
               ? [
                    [
                       "<25>{#p/asriel1}{#f/24}* I think $(name) might have lost the blue crayon.",
                       "<25>{#f/7}* ... actually, no.\n* I KNOW they lost the blue crayon.",
                       "<25>{#f/6}* It turned up later in a food chest, but nobody thought to check it.",
                       "<25>{#f/16}* They must have been trying to claim the chest as their own."
                    ],
                    [
                       "<26>{#p/asriel1}{#f/4}* If we ever get a new set of crayons, I'm keeping watch.",
                       "<25>{#f/3}* The moment you even think about losing a crayon...",
                       "<26>{#f/8}* I'll be there to stop that crime train before it even hits the tracks.",
                       "<25>{#f/2}* Just you wait."
                    ],
                    [ "<25>{#p/asriel1}{#f/31}* I've got my eyes on you, Frisk.", "<25>{#f/8}* And... maybe my ears." ],
                    [ "<25>{#p/asriel1}{#f/10}* Are you staring at my ears again?\n* You keep doing that." ]
                 ][Math.min(asrielinter.w_th_table1++, 3)]
               : world.edgy
               ? [ "<32>{#p/basic}* 少了两支。" ]
               : world.darker
               ? [ "<32>{#p/basic}* 少了一支。" ]
               : [
                    "<32>{#p/basic}* The ever-evasive blue crayon, missing for a hundred years...",
                    "<32>{#p/basic}* Truly a legend of our time."
                 ])
         ],
         w_th_table2: () =>
            SAVE.data.b.svr
               ? [
                    "<32>{#p/human}* （你在桌子底下找到了一副牌。）",
                    ...[
                       [
                          "<25>{#p/asriel1}{#f/27}* $(name) and I were never really into those kinds of things.",
                          "<25>{#p/asriel1}{#f/15}* Well... I say never.",
                          "<25>{#p/asriel1}{#f/15}* Uh, let's just not talk about it."
                       ],
                       [
                          "<25>{#p/asriel1}{#f/13}* ...",
                          "<25>{#p/asriel1}{#f/13}* The last time we did, a table got flipped over.",
                          "<25>{#p/asriel1}{#f/17}* Just sibling things.\n* You know how it goes with card games."
                       ],
                       [ "<25>{#p/asriel1}{#f/17}* ..." ]
                    ][Math.min(asrielinter.w_th_table2++, 2)]
                 ]
               : world.darker
               ? [
                    "<32>{#p/human}* （你在桌子底下找到了一副牌。）",
                    "<33>{#p/basic}* 你不想浪费时间玩牌。"
                 ]
               : SAVE.data.n.plot === 72
               ? [
                    "<32>{#p/human}* （你在桌子底下找到了一副牌。）",
                    "<33>{#p/basic}* Soon enough, we'll never have to think about these again."
                 ]
               : [
                    "<32>{#p/human}* （你在桌子底下找到了一副牌。）",
                    "<33>{#p/basic}* They're holographic, of course."
                 ],
         w_tk_counter: () =>
            SAVE.data.b.svr
               ? [
                    "<32>{#p/human}* (You run your hand across the cutting board, noting the various grooves and ridges.)"
                 ]
               : world.darker
               ? [ "<32>{#p/basic}* 一块砧板。" ]
               : [ "<32>{#p/basic}* Toriel's cutting board.\n* It's not as up-to-scratch as it used to be." ],
         w_tk_sink: () =>
            SAVE.data.b.svr
               ? [
                    [
                       "<25>{#p/asriel1}{#f/21}* $(name) always said leaving fur in the drain was super gross.",
                       "<25>{#f/15}* I always thought it was normal, though..."
                    ],
                    [
                       "<25>{#p/asriel1}{#f/13}* Do humans not shed fur?\n* $(name) would never tell me things like this."
                    ],
                    [ "<25>{#p/asriel1}{#f/17}* I do have reason to believe humans shed.\n* Even if it's not fur." ]
                 ][Math.min(asrielinter.w_tk_sink++, 2)]
               : SAVE.data.n.plot === 72
               ? [ "<32>{#p/basic}* Remnants of the white fur once stuck here still remain to this very day." ]
               : [ "<32>{#p/basic}* 一团白色的毛堵在下水管里。" ],
         w_tk_stove: () =>
            SAVE.data.b.svr
               ? [
                    [
                       "<25>{#p/asriel1}{#f/13}* I have to wonder why she thought buying this would be a good idea.",
                       "<25>{#f/10}* Unless she wanted to re-create Asgore's kitchen...?",
                       "<25>{#f/17}* For someone who didn't like him, she had a weird way to show it."
                    ],
                    [
                       "<25>{#p/asriel1}{#f/15}* I really wish Toriel and Asgore stayed together sometimes.",
                       "<25>{#f/16}* ... but I guess it's for the best that they didn't."
                    ],
                    [ "<25>{#p/asriel1}{#f/13}* It just wasn't meant to be, Frisk..." ]
                 ][Math.min(asrielinter.w_tk_stove++, 2)]
               : SAVE.data.n.state_wastelands_toriel === 2
               ? [ "<32>{#p/basic}* It's just a stovetop.\n* No one is going to use it." ]
               : world.darker
               ? [ "<32>{#p/basic}* It's just a stovetop." ]
               : SAVE.data.n.plot === 72
               ? [ "<32>{#p/basic}* The stovetop is very clean.\n* Toriel may not need a new one on the new world." ]
               : [ "<32>{#p/basic}* The stovetop is very clean.\n* Toriel must use fire magic instead." ],
         w_tk_trash: () =>
            SAVE.data.b.svr
               ? [ "<32>{#p/human}* (You can't make out what's in the trash...)" ]
               : SAVE.data.n.plot === 72
               ? [ "<32>{#p/basic}* Rather symbolically, the trash can has been emptied." ]
               : [ "<32>{#p/basic}* 里面有一张揉皱的星花茶配方。" ],
         
         w_tl_azzychair: () =>
            SAVE.data.b.svr
               ? [ "<32>{#p/human}* (You note the fairly large size of the dining chair.)" ]
               : SAVE.data.n.state_wastelands_toriel === 2 || world.runaway
               ? [ "<32>{#p/basic}* 大餐椅。" ]
               : [ "<32>{#p/basic}* One of Toriel's dining chairs.\n* Fit for a queen." ],
         w_tl_bookshelf: pager.create(
            1,
            () =>
               SAVE.data.b.svr
                  ? [
                       "<32>{#p/human}* (The books on this bookshelf consist of snail facts, family recipes, and gardening tips.)"
                    ]
                  : [
                       "<32>{#p/basic}* 一个书架。",
                       "<32>{#p/human}* （你取下了一本书...）",
                       "<32>{#p/basic}* “你知道吗？\n  蜗牛的齿舌长得像链锯一样。”",
                       "<32>* “这可是个冷知识。”",
                       "<32>* “还有个趣事：蜗牛成熟后\n  会把自己的消化系统翻出来。”",
                       "<32>* “哦，顺带一提...”",
                       "<32>* “蜗牛的 {^5}说 {^5}话 {^5}速 {^5}度 {^5}很 {^5}慢。”",
                       "<32>* “开玩笑的，它们才不会说话。”",
                       "<32>* “你能想象，在某个世界，\n  那里的蜗牛会说话吗？”\n* “反正我是想象不出来。”",
                       "<32>{#p/human}* （你把书放回原处。）"
                    ],
            () =>
               SAVE.data.b.svr
                  ? [
                       "<32>{#p/human}* (The books on this bookshelf consist of snail facts, family recipes, and gardening tips.)"
                    ]
                  : [
                       "<32>{#p/basic}* 一个书架。",
                       "<32>{#p/human}* （你取下了一本书...）",
                       "<32>{#p/basic}* 《Dreemurr家族的美味秘笈：蜗牛派》",
                       "<32>* “蜗牛派是Dreemurr家族的\n  一道风味独特的传统美食。”",
                       "<32>* “制作它其实非常简单，\n  只需五个步骤：”",
                       "<32>* “首先，轻柔地展开酥脆的派底，\n  在烘焙盘中铺平。”",
                       "<32>* “然后，将香浓的蒸发奶、\n  新鲜的鸡蛋和选料香料\n  混合在一起，搅拌至丝滑细腻。”",
                       "<32>* “接着，小心地将几只新鲜活蜗牛\n  加入到之前调制好的香浓奶糊中。\n  确保它们完全浸入。”",
                       "<32>* “之后，将这层混合物\n  轻轻倒入准备好的派底，均匀铺开。”",
                       "<32>* “最后，将面团切成细条，\n  编织成优雅的格子形状，\n  覆盖在派面上。”",
                       "<32>* “现在，将派放到烤箱中，\n  烤至金黄酥脆。”",
                       "<32>* “出炉后，派面金黄诱人。\n  令其稍作冷却，即可切片、上桌！”",
                       "<32>{#p/human}* （你把书放回原处。）"
                    ],
            () =>
               SAVE.data.b.svr
                  ? [
                       "<32>{#p/human}* (The books on this bookshelf consist of snail facts, family recipes, and gardening tips.)"
                    ]
                  : [
                       "<32>{#p/basic}* 一个书架。",
                       "<32>{#p/human}* （你取下了一本书...）",
                       "<32>{#p/basic}* “哈喽，热爱园艺的朋友们！”",
                       "<32>* “说到星花，它们生长与否的关键...”",
                       "<32>* “在于能否直接接触到宇宙射线。”",
                       "<32>* “所以它们多生长于空境。”",
                       "<32>* “毕竟在整个空间站中，\n  当属那里最为开阔。”",
                       "<32>{#p/human}* （你把书放回原处。）"
                    ]
         ),
         
         w_tl_goreychair: () =>
            SAVE.data.b.svr
               ? [ "<32>{#p/human}* (You note the small size of the dining chair.)" ]
               : SAVE.data.n.state_wastelands_toriel === 2 || world.runaway
               ? [ "<32>{#p/basic}* 小餐椅。" ]
               : world.genocide
               ? [ "<32>{#p/basic}* One of Toriel's dining chairs.\n* Fit for a demon." ]
               : world.darker
               ? [ "<32>{#p/basic}* One of Toriel's dining chairs.\n* Fit for a prince." ]
               : SAVE.data.b.oops
               ? [ "<32>{#p/basic}* One of Toriel's dining chairs.\n* Fit for a child.\n* Like you!" ]
               : [ "<32>{#p/basic}* One of Toriel's dining chairs.\n* Fit for... a little angel.\n* Like you!" ],
         w_tl_table: () =>
            SAVE.data.b.svr
               ? [ "<32>{#p/human}* (The plant appears to be decorative in nature.)" ]
               : world.darker
               ? [ "<32>{#p/basic}* 一株观赏植物。\n* 仅此而已。" ]
               : [ "<32>{#p/basic}* A decorative plant on Toriel's dining table." ],
         w_tl_tools: () =>
            SAVE.data.b.svr
               ? [
                    [
                       "<25>{#p/asriel1}{#f/20}* $(name) used to pretend these things were musical instruments.",
                       "<25>{#f/17}* They'd pull them out, start \"playing\" them...",
                       "<25>{#f/20}* Once, I joined in, and we did a little fire- poker-instrument duet.",
                       "<26>{#f/13}* We started using our voices to emulate the instruments, and then...",
                       "<25>{#f/17}* Mom and Dad walked in to add backing vocals!"
                    ],
                    [
                       "<25>{#p/asriel1}{#f/13}* Then, as it turns out, someone had been listening in outside.",
                       "<25>{#f/15}* Before we knew it, we had monsters coming to the house in droves...",
                       "<25>{#f/17}* $(name) and I were still in the middle of the room, doing our thing.",
                       "<25>{#f/20}* But now we had an entire orchestra behind us!",
                       "<25>{#f/17}* We must have performed half of the Harmonexus Index that day.",
                       "<25>{#f/17}* ... it's an old book full of songs from our culture."
                    ],
                    [
                       "<25>{#p/asriel1}{#f/13}* All that because we played pretend with some fire pokers...",
                       "<25>{#f/17}* They say you can make an instrument out of anything.",
                       "<25>{#f/13}* ...",
                       "<25>{#f/15}* Wait...\n* I'M an anything..." 
                    ],
                    [ "<25>{#p/asriel1}{#f/20}* Please don't make a musical instrument out of me." ]
                 ][Math.min(asrielinter.w_tl_tools++, 3)]
               : world.darker
               ? [ "<32>{#p/basic}* 拨火棍。" ]
               : SAVE.data.n.plot === 72
               ? [
                    "<32>{#p/basic}* They're just fire pokers...\n* Or are they?",
                    "<32>* Consider that Toriel's fire is only pleasantly warm, and not hot at all.",
                    "<32>* Why would she need these?",
                    "<32>* Thus, by the process of elimination, these must be advanced musical instruments."
                 ]
               : [
                    "<32>{#p/basic}* A rack of advanced musical instruments.",
                    "<32>* Upon closer inspection, you realize these are in fact fire pokers.",
                    "<32>* It's hard to tell, given that these tools were likely made...",
                    "<32>* Before the outpost itself even existed."
                 ],
         
         w_tl_torichair: () =>
            SAVE.data.b.svr
               ? [ "<32>{#p/human}* (You note the exceptional size of the dining chair.)" ]
               : SAVE.data.n.state_wastelands_toriel === 2 || world.runaway
               ? [ "<32>{#p/basic}* 餐椅王。" ]
               : [ "<32>{#p/basic}* One of Toriel's dining chairs.\n* Fit for a king." ],
         w_toriel_toriel: () => [
            "<32>{#p/basic}* It's locked.",
            toriSV()
               ? SAVE.data.n.plot < 17.001
                  ? "<32>{#p/basic}* It sounds like Toriel is crying..."
                  : "<32>{#p/basic}* It sounds like Toriel is asleep..."
               : "<32>{#p/basic}* It sounds like Toriel is writing..."
         ],
         w_tt_bed: () =>
            SAVE.data.b.svr
               ? [ "<32>{#p/human}* (The bed seems a lot smaller than it might have used to.)" ]
               : SAVE.data.n.state_wastelands_toriel === 2 || world.runaway
               ? [ "<32>{#p/basic}* 一张床。" ]
               : SAVE.data.n.plot < 72 || world.runaway
               ? [
                    "<32>{#p/basic}* Toriel的床。",
                    ...(world.darker ? [] : [ "<32>* Certainly too big for the likes of you." ])
                 ]
               : [
                    "<32>{#p/basic}* Toriel的床。",
                    "<32>* You've still got some time to go, but you'll grow into it."
                 ],
         w_tt_bookshelf: pager.create(
            1,
            () =>
               SAVE.data.b.svr
                  ? [
                       "<32>{#p/human}* (The books on this bookshelf consist of history, biology, and a foreboding possibility.)"
                    ]
                  : [
                       SAVE.data.n.state_wastelands_toriel === 2 || world.runaway
                          ? "<32>{#p/basic}* 一个书架。"
                          : "<32>{#p/basic}* It's Toriel's private bookshelf.",
                       "<32>{#p/human}* （你取下了一本书...）",
                       "<32>{#p/basic}* “我们家破人亡，生灵涂炭，\n  但这一切的起因是什么呢？”",
                       "<32>* “人类不会无缘无故攻击我们。”",
                       "<32>* “但是，我们潜在的力量\n  真的如此强大...”",
                       "<32>* “强大到可以对人类\n  造成实质威胁的地步吗？”",
                       "<32>* “不管真相如何，\n  此时我们已经走投无路，陷入绝境。”",
                       "<32>* “唯有投降，才有一丝生的希望。”",
                       "<32>{#p/human}* （你把书放回原处。）"
                    ],
            () =>
               SAVE.data.b.svr
                  ? [
                       "<32>{#p/human}* (The books on this bookshelf consist of history, biology, and a foreboding possibility.)"
                    ]
                  : [
                       SAVE.data.n.state_wastelands_toriel === 2 || world.runaway
                          ? "<32>{#p/basic}* 一个书架。"
                          : "<32>{#p/basic}* It's Toriel's private bookshelf.",
                       "<32>{#p/human}* （你取下了一本书...）",
                       "<32>{#p/basic}* “‘王级怪物’出生时，\n  会与父母之间建立起一条魔法纽带。”",
                       "<32>* “靠着这条纽带，王级怪物\n  获得自己的灵魂，他的父母则会\n  随着孩子成长而逐渐衰老。”",
                       "<32>* “成年王级怪物的灵魂，\n  具有怪物界最强大的力量。”",
                       "<32>* “强大到足以在肉体死后\n  仍能短暂存续。”",
                       "<32>{#p/human}* （你把书放回原处。）"
                    ],
            () =>
               SAVE.data.b.svr
                  ? [
                       "<32>{#p/human}* (The books on this bookshelf consist of history, biology, and a foreboding possibility.)"
                    ]
                  : [
                       SAVE.data.n.state_wastelands_toriel === 2 || world.runaway
                          ? "<32>{#p/basic}* 一个书架。"
                          : "<32>{#p/basic}* It's Toriel's private bookshelf.",
                       "<32>{#p/human}* （你取下了一本书...）",
                       "<32>{#p/basic}* “我们常常担心，面对人类突然袭击，\n  会是何种后果。”",
                       "<33>* “但却很少想过，倘若同胞自相残杀，\n  又该如何应对。",
                       "<32>* “即使联合起来，能否彻底平息叛乱，\n  仍是个未知数。”",
                       "<32>* “不过此等担忧，\n  或许只是杞人忧天？”",
                       "<32>{#p/human}* （你把书放回原处。）"
                    ]
         ),
         w_tt_cactus: () =>
            SAVE.data.b.svr
               ? [ "<32>{#p/human}* (This cactus seems to remind you of someone you once knew.)" ]
               : SAVE.data.n.plot < 72
               ? world.darker
                  ? [ "<32>{#p/basic}* 终于，发现一株很像我们的植物。" ]
                  : [ "<32>{#p/basic}* Ah, the cactus.\n* Truly the most tsundere of plants." ]
               : [ "<32>{#p/basic}* It's not like this cactus was waiting for you to come back or anything..." ],
         w_tt_chair: () =>
            SAVE.data.b.svr
               ? [ "<32>{#p/human}* (This chair appears to be a little small for the person who owns it.)" ]
               : world.darker
               ? [ "<32>{#p/basic}* 一把靠椅。" ]
               : SAVE.data.n.plot === 72
               ? [
                    "<32>{#p/basic}* Toriel's dedicated reading chair...",
                    "<32>* ... at least until Asgore decides he'd like it instead.",
                    "<32>* He's always wanted this chair.\n* I'd be surprised if he didn't take it with him."
                 ]
               : [ "<32>{#p/basic}* Toriel's dedicated reading chair.", "<32>* Smells like lazy bones." ],
         w_tt_diary: pager.create(
            0,
            ...[
               [
                  "<32>{#p/human}* (You look to the circled paragraph.)",
                  "<32>{#p/toriel}{#f/21}* \"Question: Why did the skeleton want a friend?\"",
                  "<32>* \"Answer: Because he was feeling BONELY...\"",
                  "<32>{#p/basic}* The jokes continue from here at a similar caliber."
               ],
               [
                  "<32>{#p/human}* (You look to another paragraph.)",
                  "<32>{#p/toriel}{#f/21}* \"Question: What's another name for a skeleton's vices?\"",
                  "<32>* \"Answer: HOLLOW pursuits...\"",
                  "<32>{#p/basic}* There's no sense in continuing to read these."
               ],
               [
                  "<32>{#p/human}* (You look to another paragraph.)",
                  "<32>{#p/toriel}{#f/21}* \"Question: How does a skeleton say goodbye?\"",
                  "<32>* \"Answer: See you to-MARROW...\"",
                  "<32>{#p/basic}* That one wasn't even REMOTELY funny."
               ],
               [
                  "<32>{#p/human}* (You look to another paragraph.)",
                  "<32>{#p/basic}* You can't get enough of these lame puns.",
                  "<32>{#p/toriel}{#f/21}* \"Question: Why did the skeleton drool in their sleep?\"",
                  "<32>* \"Answer: Because they were having a FEMUR dream...\"",
                  "<32>{#p/basic}* This is getting old..."
               ],
               [
                  "<32>{#p/human}* (You look to another paragraph.)",
                  "<32>{#p/basic}* You still can't get enough of these lame puns.",
                  "<32>{#p/toriel}{#f/21}* \"Question: What does a skeleton say to start a fight?\"",
                  "<32>* \"Answer: I've got a BONE to pick with you...\"",
                  "<32>{#p/basic}* Seriously?\n* That wasn't even a pun!"
               ],
               [
                  "<32>{#p/human}* (You look to another paragraph.)",
                  "<32>{#p/basic}* We're losing brain cells here...",
                  "<32>{#p/toriel}{#f/21}* \"'What's up stairs?' asked the skeleton.\"",
                  "<32>* \"... the stairs did not reply.\"",
                  "<32>{#p/basic}* ...\n* I have no words."
               ],
               [
                  "<32>{#p/human}* (You look to the final paragraph.)",
                  "<32>{#p/basic}* Huh?\n* This one's not a joke...",
                  "<32>{#p/toriel}{#f/21}* \"A human has arrived in the Outlands today.\"",
                  "<32>* \"I do trust that Sans would look after them, but...\"",
                  "<32>* \"I would rather not force him to do so.\"",
                  "<32>* \"Besides, can one royal sentry really protect them from the rest of the outpost?\"",
                  "<32>* \"Hopefully those kinds of questions will soon be pointless.\"",
                  "<32>{#p/basic}* ..."
               ],
               [ "<32>{#p/human}* (There are no more written entries here.)" ]
            ].map(
               lines => () =>
                  SAVE.data.b.svr
                     ? [ "<32>{#p/human}* (The diary seems to consist primarily of over-the-top skeleton puns.)" ]
                     : SAVE.data.n.plot === 72
                     ? [
                          "<32>{#p/human}* (You look to the newly-written page.)",
                          "<32>{#p/toriel}{#f/21}* \"It seems my preconceptions about Asgore were incorrect.\"",
                          "<32>* \"In failing to confront him, I have failed to understand what was truly going on.\"",
                          "<32>* \"I was right in thinking I did not deserve to be a mother.\"",
                          "<32>* \"But perhaps now... I can learn what being a mother truly means.\"",
                          "<32>* \"I will need to think about this on my own.\""
                       ]
                     : SAVE.data.n.plot < 14 || SAVE.data.n.state_wastelands_toriel === 2 || world.runaway
                     ? world.darker
                        ? [ "<32>{#p/basic}* 这是Toriel的日记，\n  你在里面找不到任何笑点。" ]
                        : lines
                     : [
                          "<32>{#p/human}* (You look to the most recently written paragraph.)",
                          ...(world.edgy
                             ? [ "<32>{#p/basic}* It's been scribbled out with a crayon." ]
                             : toriSV()
                             ? [
                                  "<32>{#p/toriel}{#f/21}* \"It has not been the best of days.\"",
                                  "<32>* \"Yet another human has fallen out of my care...\"",
                                  "<32>* \"The seventh and final human he'd need to break the force field.\"",
                                  "<32>* \"I should not have allowed this to happen.\"",
                                  "<32>* \"With the stakes so high, a confrontation may be inevitable...\""
                               ]
                             : [
                                  "<32>{#p/toriel}{#f/21}* \"It has been an interesting day, to say the least.\"",
                                  "<32>* \"A human arrived...\"",
                                  "<32>* \"Then, tried to leave...\"",
                                  "<32>* \"And then, the strangest thing happened.\"",
                                  "<32>* \"A reminder I have been in need of for some time...\""
                               ])
                       ]
            )
         ),
         w_tt_plant: () =>
            SAVE.data.b.svr
               ? [ "<32>{#p/human}* (This houseplant strikes you as exceedingly normal.)" ]
               : [ "<32>{#p/basic}* 这是个盆栽。", "<32>* 有必要说别的吗？" ],
         w_tt_trash: pager.create(
            0,
            () =>
               SAVE.data.b.svr
                  ? [ "<32>{#p/human}* (You can't make out what's in the trash...)" ]
                  : world.darker
                  ? [ "<32>{#p/basic}* 蜗牛。" ]
                  : SAVE.data.n.plot === 72
                  ? [ "<32>{#p/basic}* The snails are beginning to smell... ghostly.", "<32>* ... what could this mean?" ]
                  : [
                       "<32>{#p/basic}* It's Toriel's private trash can, containing...",
                       "<32>* Snails.",
                       "<32>* Oodles and oodles of snails."
                    ],
            pager.create(
               1,
               () =>
                  SAVE.data.b.svr
                     ? [ "<32>{#p/human}* (You can't make out what's in the trash...)" ]
                     : world.darker
                     ? [ "<32>{#p/basic}* 蜗牛。" ]
                     : SAVE.data.n.plot === 72
                     ? [ "<32>{#p/basic}* Maybe this is how snails live past their expiry date." ]
                     : [ "<32>{#p/basic}* And nothing BUT snails." ],
               () =>
                  SAVE.data.b.svr
                     ? [ "<32>{#p/human}* (You can't make out what's in the trash...)" ]
                     : world.darker
                     ? [ "<32>{#p/basic}* 蜗牛。" ]
                     : SAVE.data.n.plot === 72
                     ? [ "<32>{#p/basic}* Or maybe I've just gone and lost it completely." ]
                     : [ "<32>{#p/basic}* ...\n* Did I mention the snails?" ],
               () =>
                  SAVE.data.b.svr
                     ? [ "<32>{#p/human}* (You can't make out what's in the trash...)" ]
                     : world.darker
                     ? [ "<32>{#p/basic}* 蜗牛。" ]
                     : SAVE.data.n.plot === 72
                     ? [ "<32>{#p/basic}* Or maybe...", "<32>* ... wait, what was I saying?" ]
                     : [ "<32>{#p/basic}* 蜗牛。" ],
               () =>
                  SAVE.data.b.svr
                     ? [ "<32>{#p/human}* (You can't make out what's in the trash...)" ]
                     : world.darker
                     ? [ "<32>{#p/basic}* 蜗牛。" ]
                     : SAVE.data.n.plot === 72
                     ? [ "<32>{#p/basic}* Oh, right.\n* The meaning of the snails' newfound ghostly scent." ]
                     : [ "<32>{#p/basic}* Oodles and oodles of snails." ]
            )
         ),
         w_tutorial_view: () =>
            SAVE.data.b.svr
               ? [ "<32>{#p/human}* (You stare excitedly into the cosmos beyond...)" ]
               : world.darker
               ? []
               : [ "<32>{#p/basic}* 这是外域这一带的第一扇窗。" ],
         w_tutorial1: () =>
            SAVE.data.b.svr
               ? [ "<32>{#p/human}* (The sign describes the qualities of a good relationship.)" ]
               : [
                    "<32>{#p/basic}* “有了信任与善意，\n  良好关系方能维系。\n  携手共进，步调统一。\"",
                    ...(world.goatbro && SAVE.flag.n.ga_asrielOutlands7++ < 1
                       ? [ "<26>{#p/asriel2}{#f/8}* 真是够矫情的。" ]
                       : [])
                 ]
      },
      piecheck: () =>
         SAVE.data.b.svr
            ? [
                 [
                    "<25>{#p/asriel1}{#f/17}* Mom's pies were always the best...",
                    "<25>{#f/13}* I can still remember what the first one I ever had tasted like.",
                    "<25>{#f/15}* I'd never felt so happy to take a bite of something...",
                    "<25>{#f/17}* ... it was like I'd transcended to the next level of confection."
                 ],
                 [
                    "<25>{#p/asriel1}{#f/20}* Er, maybe I'm overselling it just a little.",
                    "<25>{#f/17}* But I'm telling you right now, Frisk...",
                    "<25>{#f/13}* ... no matter what happens with Mom and Dad...",
                    "<25>{#f/17}* You NEED to have her make one of her pies for me.",
                    "<25>{#f/20}* I'm... kind of curious if I'll still like it after all of this."
                 ],
                 [ "<25>{#p/asriel1}{#f/15}* It sure has been a while, huh..." ]
              ][Math.min(asrielinter.piecheck++, 2)]
            : SAVE.data.n.plot < 8
            ? world.darker
               ? [ "<32>{#p/basic}* It's just a countertop." ]
               : [ "<32>{#p/basic}* There is a nigh-invisible ring-shaped stain on the countertop." ]
            : SAVE.data.n.state_wastelands_mash === 1 && SAVE.data.n.plot > 8
            ? [ "<32>{#p/basic}* The ghost of a pie once smashed haunts the countertop." ]
            : SAVE.data.n.plot === 72
            ? SAVE.data.n.state_wastelands_mash > 0
               ? [ "<32>{#p/basic}* No amount of passed time will fix this atrocity." ]
               : SAVE.data.n.state_wastelands_toriel === 2
               ? [ "<32>{#p/basic}* 一种强烈的念头阻止了你，\n  你只能让派保持原样。" ]
               : world.runaway
               ? [
                    "<32>{#p/basic}* You might have been a bully, but the pie remains untouched.",
                    "<32>{#p/basic}* Perhaps some things are too sacred, even for you."
                 ]
               : [
                    world.meanie
                       ? "<32>{#p/basic}* The pie may be intimidated by you, but after all this time..."
                       : "<32>{#p/basic}* The size of the pie may no longer intimidate you, but after all this time...",
                    "<32>{#p/basic}* You've gained a sense of respect for the pie that does not permit you to eat it."
                 ]
            : SAVE.data.n.state_wastelands_mash > 0
            ? [ "<32>{#p/basic}* There is simply nothing more to be done here." ]
            : SAVE.data.n.state_wastelands_toriel === 2
            ? [ "<32>{#p/basic}* 一种强烈的念头阻止了你，\n  你只能让派保持原样。" ]
            : world.meanie
            ? [
                 "<32>{#p/basic}* 这个派的尺寸\n  根本吓不到你。",
                 "<32>{#p/basic}* 事实上，\n  你可能都吓到它了...",
                 choicer.create("* （要打烂它吗？）", "是", "否")
              ]
            : [ "<32>{#p/basic}* 这个派的尺寸吓得你完全不敢吃它。" ],
      piesmash1: [ "<32>{#p/human}* （你放了它一马。）" ],
      piesmash2: [ "<32>{#p/human}* （你挥下了你的武器...）" ],
      piesmash3: [ "<32>{#p/basic}* 派已经被彻底毁掉了。" ],
      tutorial_puzzle1: [
         "<25>{#p/toriel}* 跟之前的不一样，\n  这个谜题稍稍有一些不同。",
         "<25>{#f/1}* 虽然不算特别常见，\n  但前哨站的一些谜题..."
      ],
      tutorial_puzzle2: [
         "<25>{#p/toriel}* ...需要另一个怪物的协助\n  才能解决。",
         "<25>{#f/1}* 你知道接下来该怎么办吗？"
      ],
      tutorial_puzzle2a: [ "<25>{#p/toriel}{#f/1}* 你知道接下来该怎么办吗？" ],
      tutorial_puzzle3: [ "<25>{#p/toriel}* 非常好，小家伙！\n* 非常棒。" ],
      tutorial_puzzle4: [ "<25>{#p/toriel}{#f/1}* 轮到你了..." ],
      tutorial_puzzle4a: [ "<25>{#p/toriel}{#f/0}* 到你了。" ],
      tutorial_puzzle5: [ "<25>{#p/toriel}* 干得漂亮！\n* 只剩下一道障碍了。" ],
      tutorial_puzzle6: [ "<25>{#p/toriel}{#f/1}* 太棒了！\n* 孩子，你真令我骄傲！" ],
      tutorial_puzzle7: [ "<25>{#p/toriel}* 等你准备好了，\n  我们就去下个房间，\n  我会教你下一项本领。" ],
      tutorial_puzzle8a: [ "<25>{#p/toriel}* 答案不在我身上，小家伙。" ],
      tutorial_puzzle8b: [ "<25>{#p/toriel}* 刚才怎么做的，\n  再做一次就好。" ],
      tutorial_puzzle8c: [ "<25>{#p/toriel}{#f/1}* 试试看..." ],
      twinkly1: [
         "<25>{#p/twinkly}{#f/5}* 哈喽！\n* 我叫{@fill:#ff0}TWINKLY{@fill:#fff}。\n* 星界的{@fill:#ff0}闪亮明星{@fill:#fff}！"
      ],
      twinkly2: [
         "<25>{#f/5}* 是哪阵风把你吹到\n  这前哨站来的呢，伙伴？",
         "<25>{#f/5}* ...",
         "<25>{#f/8}* 你是不是迷路了...",
         "<25>{#f/5}* 好啦，算你走运，\n  我会帮你的！",
         "<25>{#f/8}* 我最近不是很在状态，\n  不过...",
         "<25>{#f/5}* ...总得有人教你\n  这里的游戏规则！",
         "<25>{#f/10}* 看来，只能我Twinkly献丑，\n  承担这个任务了。",
         "<25>{#f/5}* 我们开始吧，好吗？"
      ],
      twinkly3: [
         "<25>{#f/7}* 但你早就知道了，对吧？",
         "<25>{#f/8}* ...",
         "<25>{#f/5}* 不过，还得由我来给你\n  传授点经验。",
         "<25>* 准备好了吗？我们开始吧！"
      ],
      twinkly4: [
         "<25>{#p/twinkly}{#f/6}* 好了，我受够了。",
         "<25>{#f/8}* 你想一直重置下去，\n  那就随你的便...",
         "<25>{#f/6}* 你可以随便重置。",
         "<25>{#f/7}* 但别想轻易过我这关。"
      ],
      twinkly5: [ "<25>{#p/twinkly}{#f/6}* 你是闲得没别的事可做吗？" ],
      twinkly6: [
         "<25>{#p/twinkly}{#f/6}* 刚挨了一击就马上重置，\n  是吧？",
         "<25>{#f/7}* 真是可悲。"
      ],
      twinkly6a: [
         "<25>{#p/twinkly}{#f/11}* 你以为我忘了你刚刚\n  干了什么吗？",
         "<25>{#f/7}* 肮脏的碎片闪避手。"
      ],
      twinkly7: [ "<25>{#p/twinkly}{#f/7}* 我能在这儿陪你玩一整天，\n  白痴。" ],
      twinkly8: [ "<25>{#f/11}* 不过，既然你都知道接下来\n  会发生什么了...{%15}" ],
      twinkly9: [
         "<25>{#p/twinkly}{#f/6}* 哈喽。",
         "<25>* 感觉我再待下去\n  就要引火上身了。",
         "<25>{#f/8}* 真是遗憾...",
         "<25>{#f/7}* 我本来想跟你好好玩玩的。",
         "<25>{#f/6}* ...",
         "<25>{#f/5}* Oop!\n* Time to go."
      ],
      twinkly9a: [
         "<25>{#p/twinkly}{#f/12}{#v/0}* What the HELL are you doing, $(name)?",
         "<25>{#f/12}{#v/0}* We had the outpost at our mercy!"
      ],
      twinkly9a1: [ "<25>{#f/6}{#v/0}* All we had to do was follow the plan." ],
      twinkly9a2: [
         "<25>{#f/6}{#v/0}* All we had to do was get through the Foundry...",
         "<25>* Finish off the guards...",
         "<25>* And make it to the Citadel!"
      ],
      twinkly9a3: [
         "<25>{#f/6}{#v/0}* All we had to do was finish off the guards...",
         "<25>* And get through the Citadel!"
      ],
      twinkly9a4: [
         "<25>{#f/6}{#v/0}* All we had to do was KILL that stupid robot...",
         "<25>* And get through the Citadel!"
      ],
      twinkly9a5: [ "<25>{#f/6}{#v/0}* All we had to do was get through the Citadel!" ],
      twinkly9a6: [ "<25>{#f/6}{#v/0}* All we had to do was KILL that nerdy trashbag!" ],
      twinkly9a7: [ "<25>{#f/6}{#v/0}* All we had to do was walk to the end!", "<25>* We were so close!" ],
      twinkly9a8: [ "<25>{#f/8}{#v/0}* 你个懦夫..." ],
      twinkly9b: [
         "<25>{#p/twinkly}{#f/5}* $(name)...？",
         "<25>{#f/6}* I'm not really sure what just happened.",
         "<25>{#f/8}* We were on the shuttle, and then...",
         "<25>{#f/8}* ...",
         "<25>{#f/6}* I...",
         "<25>{#f/8}* I have to go..."
      ],
      twinkly9c: [
         "<25>{#p/twinkly}{#f/7}* So, we're back at the beginning, are we?",
         "<26>{#f/5}* I've been expecting you.\n* I wonder how you'll do this time around.",
         "<25>{#f/11}* Who knows?\n* Maybe it'll be easier for you now.",
         "<25>{#f/7}* It certainly was when I had your powers.",
         "<25>{#f/6}* ...",
         "<25>{#f/5}* Well, good luck!"
      ],
      twinkly10: [
         "<20>{#f/5}看见这颗心了吗？\n这是你的灵魂，\n是你生命的精华所在！",
         "<20>{#f/5}你的灵魂是你\n不可或缺的一部分，\n你需要LOVE来维持\n它的存在。"
      ],
      twinkly11: [
         "<20>{*}{#x2}{#f/5}在这太空，\nLOVE是通过...{#f/8}\n这些白色的...{#f/11}\n“幸福碎片”传递的。",
         "<20>{*}{#f/5}为了让你在正确的\n道路上启程，我会分你\n一点我自己的LOVE。",
         "<20>{*}{#f/5}能接多少就接多少！{^20}{*}{#x1}{%}"
      ],
      twinkly12: [
         "<20>{*}{#f/8}哦呦，\n看来你好像没接住...",
         "<20>{*}{#f/5}没关系！",
         "<20>{*}{#x2}{#f/10}来，我再送你点！{^20}{*}{#x1}{%}"
      ],
      twinkly13: [
         "<20>{*}{#f/12}搞什... \n你是脑残还是怎么着？？",
         "<20>{*}{#x2}给. 我. 撞. 子弹！！！{^20}{*}{#x1}{^999}"
      ],
      twinkly14: "给. 我. 撞. 幸福碎片 ~",
      twinkly15: [
         "<20>{#v/1}嘻嘻嘻...",
         "<20>在这个世界中...\n不是杀人就是被杀。",
         "<20>你该不会天真地以为，\n面对这自投罗网\n送上门来的灵魂...",
         "<20>我会蠢到放弃\n这大好机会吧？"
      ],
      twinkly16: [
         "<20>{#f/7}啧，你知道会发生什么，\n是不是？",
         "<20>你只想好好折磨一下\n楚楚可怜的TWINKLY，\n是不是？",
         "<20>天啦噜...\n你知道你惹的是谁吗？",
         "<20>{#f/11}嘻嘻嘻..."
      ],
      twinkly17: [ "<20>{#v/1}那么我们就直奔主题吧。", "<20>嘻嘻嘻..." ],
      twinkly18: [ "<20>{*}{#f/2}{@random:1.1,1.1}死吧。{^20}{%}" ],
      twinkly19: [ "<20>{#p/toriel}真是个残忍的家伙，\n居然折磨这么一个\n弱小无助的孩子..." ],
      twinkly20: [
         "<20>不要害怕，孩子。",
         "<20>我是{@fill:#003cff}TORIEL{@fill:#000}，\n{@fill:#f00}外域{@fill:#000}的管理员。",
         "<20>我每天都会来看看\n有没有人被困在这里。",
         "<20>跟我来，孩子。\n我有很多东西要教你。"
      ],
      twinkly21: [
         "<25>{#p/toriel}{#f/1}* 哦我的天！\n* 你是从哪里来的，小家伙？",
         "<25>{#f/1}* 受伤了吗？",
         "<25>{#f/0}* ...\n* 请原谅我问了这么多问题。",
         "<25>{#f/0}* 我是{@fill:#003cff}TORIEL{@fill:#000}，\n  {@fill:#f00}外域{@fill:#000}的管理员。",
         "<26>{#f/0}* 我每天都会来看看\n  有没有人被困在这里。",
         "<25>{#f/0}* 跟我来，孩子。\n* 我有很多东西要教你。"
      ],
      twinkly22: [ "<25>{#f/0}* 跟我来。" ],
      w_coffin0: () => [
         "<32>{#p/human}* (You feel it would be best to leave this be.)",
         ...(SAVE.data.b.svr ? [ "<25>{#p/asriel1}{#f/13}* ..." ] : [])
      ],
      w_coffin1: () => [
         "<32>{#p/basic}* This coffin is very old.\n* There is nothing remarkable about it.",
         ...(world.goatbro && SAVE.flag.n.ga_asrielCoffin++ < 1
            ? [
                 "<25>{#p/asriel2}{#f/13}* Oh, look at that.\n* They made one just for you, $(name).",
                 "<25>{#p/asriel2}{#f/5}* How touching."
              ]
            : [])
      ],
      w_coffin2: pager.create(
         0,
         [
            "<32>{#p/basic}* This coffin dates back to December 251X.",
            "<32>* There is an old record-keeping manifest stashed next to it...",
            choicer.create("* (Access the manifest?)", "是", "否")
         ],
         [
            "<32>{#p/human}* (You once again pick up the manifest.)",
            choicer.create("* (Access the manifest?)", "是", "否")
         ]
      ),
      w_coffin3: [ choicer.create("* (Read the next page?)", "是", "否") ],
      w_coffin4: [ "<32>{#p/human}* (But there were no further pages to be read.)" ],
      w_coffin5: [ "<32>{#p/human}* (You put the manifest back where it belongs.)" ],
      w_dummy1: () =>
         SAVE.data.b.svr
            ? [ "<32>{#p/human}* (You place your hands on the dummy.)\n* (It seems very worn out.)" ]
            : [ "<32>{#p/basic}* A training dummy, circa 251X.\n* CITADEL standard-issue." ],
      wonder1: [
         "<32>{#p/basic}* Can you hear it?\n* The song of the stars?",
         "<32>* At certain places on the outpost, like this one... it's there.",
         "<32>* You just have to be listening for it."
      ]
   },

   b_group_outlands: {
      froggitWhimsun: [ "<32>{#p/story}* Space frogs and Starflies!\n* Or something of the like." ],
      froggitWhimsun2a: [ "<32>{#p/story}* Space frogs...?" ],
      froggitWhimsun2b: [ "<32>{#p/story}* Starflies...?" ],
      looxMigospWhimsun: [ "<32>{#p/story}* It's the troublesome trio!" ],
      looxMigospWhimsun2: [ "<32>{#p/story}* The trio has become a duo." ],
      looxMigospWhimsun3: [ "<32>{#p/story}* Only one remains." ],
      moldsmalMigosp: [ "<32>{#p/story}* Silente和他的同伙一同现身了！" ]
   },

   b_opponent_froggit: {
      act_check: [ "<32>{#p/story}* FROGGIT - 攻击4 防御5\n* 这只怪物的生活并不轻松。" ],
      act_check2: [ "<32>{#p/story}* FROGGIT - 攻击4 防御5\n* 这只怪物的生活逐渐向好。" ],
      act_check3: [ "<32>{#p/story}* FROGGIT - 攻击4 防御5\n* 这只怪物的生活仍不好过。" ],
      act_check4: [ "<32>{#p/story}* FROGGIT - 攻击4 防御5\n* 这只怪物的生活浑浑噩噩。" ],
      act_check5: [ "<32>{#p/story}* FROGGIT - 攻击4 防御5\n* 这只怪物的生活颇为惬意。" ],
      act_threat: [
         "<32>{#p/human}* (You threaten Froggit.)",
         "<32>{#p/basic}* Froggit doesn't understand what you said..."
      ],
      act_threat2: [
         "<32>{#p/human}* (You threaten Froggit again.)",
         "<32>{#p/basic}* Froggit recalls the previous threat and decides it's time to run away."
      ],
      act_compliment: [
         "<32>{#p/human}* (You compliment Froggit.)",
         "<32>{#p/basic}* Froggit doesn't understand what you said..."
      ],
      act_flirt: [
         "<32>{#p/human}* (You flirt with Froggit.)",
         "<32>{#p/basic}* Froggit doesn't understand what you said..."
      ],
      act_translate0: [ "<32>{#p/human}* (But you haven't said anything to translate yet.)" ],
      act_translate1: [
         "<32>{#p/human}* (You translate what you said.)\n* (Froggit seems to understand you now.)",
         "<32>{#p/basic}* Froggit is flattered."
      ],
      act_translate1x: [
         "<32>{#p/human}* (You translate what you said.)\n* (Froggit seems to understand you now.)",
         "<32>{#p/basic}* Froggit is hesitant to continue this battle."
      ],
      act_translate1y: [
         "<32>{#p/human}* (You translate what you said.)\n* (Froggit seems to understand you now.)",
         "<32>* Thoroughly threatened, Froggit runs away!"
      ],
      act_translate1z: [
         "<32>{#p/human}* (You translate what you said.)\n* (Froggit seems to understand you now.)",
         "<32>{#p/basic}* Froggit shows no sign of fear."
      ],
      act_translate2: [
         "<32>{#p/human}* (You translate what you said.)\n* (Froggit seems to understand you now.)",
         "<32>{#p/basic}* Froggit is blushing, if only on the inside.",
         "<32>{#p/basic}* Don't worry about it."
      ],
      confuseText: [ "<08>{#p/basic}{~}Ribbit, ribbit?" ],
      flirtText: [ "<08>{#p/basic}{~}(Blushes deeply.)\nRibbit.." ],
      idleText1: [ "<08>{#p/basic}{~}Ribbit, ribbit." ],
      idleText2: [ "<08>{#p/basic}{~}Croak, croak." ],
      idleText3: [ "<08>{#p/basic}{~}Hop, hop." ],
      idleText4: [ "<08>{#p/basic}{~}Meow." ],
      mercyStatus: [ "<32>{#p/story}* Froggit seems reluctant to fight you." ],
      name: "* Froggit",
      meanText: [ "<08>{#p/basic}{~}(Shiver, shake.)\nRibbit.." ],
      niceText: [ "<08>{#p/basic}{~}(Blushes softly.)\nRibbit.." ],
      perilStatus: [ "<32>{#p/story}* Froggit正试图逃跑。" ],
      status1: [ "<32>{#p/story}* Froggit蹦了过来！" ],
      status2: [ "<32>{#p/story}* The battlefield is filled with the smell of crystherium utilia." ],
      status3: [ "<32>{#p/story}* Froggit doesn't seem to know why it's here." ],
      status4: [ "<32>{#p/story}* Froggit跳来跳去。" ]
   },
   b_opponent_whimsun: {
      act_check: [ "<32>{#p/story}* FLUTTERLYTE - ATK 5 DEF 0\n* This monster has only just learned how to fly..." ],
      act_check2: [ "<32>{#p/story}* FLUTTERLYTE - ATK 5 DEF 0\n* This monster wishes it had stayed on the ground." ],
      act_console: [
         "<32>{#p/human}* (You help Flutterlyte fly higher into the air.)",
         "<32>{#p/basic}* Flutterlyte thanks you, and flies away..."
      ],
      act_flirt: [
         "<32>{#p/human}* (You flirt with Flutterlyte.)",
         "<32>{#p/basic}* Unable to handle your compliment, Flutterlyte bursts into tears and flies away..."
      ],
      act_terrorize: [
         "<32>{#p/human}* (You weep and wail and gnash your teeth.)",
         "<32>{#p/basic}* Flutterlyte panicks and flies away..."
      ],
      idleTalk1: [ "<08>{#p/basic}{~}Why is this so hard.." ],
      idleTalk2: [ "<08>{#p/basic}{~}Please help me.." ],
      idleTalk3: [ "<08>{#p/basic}{~}I'm scared.." ],
      idleTalk4: [ "<08>{#p/basic}{~}I can't do this.." ],
      idleTalk5: [ "<08>{#p/basic}{~}\x00*sniff sniff*" ],
      name: "* Flutterlyte",
      perilStatus: [ "<32>{#p/story}* Flutterlyte is barely keeping itself in the air." ],
      status1: [ "<32>{#p/story}* Flutterlyte飘飘悠悠地飞了过来！" ],
      status2: [ "<32>{#p/story}* Flutterlyte continues to mutter apologies." ],
      status3: [ "<32>{#p/story}* Flutterlyte hovers meekly." ],
      status4: [ "<32>{#p/story}* The smell of fresh peaches permeates the air." ],
      status5: [ "<32>{#p/story}* Flutterlyte is hyperventilating." ],
      status6: [ "<32>{#p/story}* Flutterlyte avoids eye contact." ]
   },
   b_opponent_loox: {
      act_check: [ "<32>{#p/story}* OCULOUX - 攻击6 防御6\n* 瞪大眼行家。\n* 姓：眼行家" ],
      act_check2: [
         "<32>{#p/story}* OCULOUX - ATK 6 DEF 6\n* This bully is trying very hard to pretend it's not flattered."
      ],
      act_check3: [ "<32>{#p/story}* OCULOUX - ATK 6 DEF 6\n* This monster is honored to be in your line of sight." ],
      act_dontpick: [
         "<32>{#p/human}* (You stare at Oculoux.)\n* (Oculoux stares back harder.)",
         "<32>{#p/human}* (Oculoux's eye becomes increasingly strained, and eventually...)",
         "<32>{#p/human}* (... Oculoux bows.)"
      ],
      act_flirt: [ "<32>{#p/human}* (You flirt with Oculoux.)" ],
      act_pick: [ "<32>{#p/human}* (You rudely lecture Oculoux about staring at people.)" ],
      checkTalk1: [ "<08>{#p/basic}{~}Do you dare to stare?" ],
      dontDeny1: [ "<08>{#p/basic}{~}Look who changed their mind." ],
      dontTalk1: [ "<99>{#p/basic}{~}The gaze\nis\nstrong\nwith\nthis one." ],
      flirtDeny1: [ "<08>{#p/basic}{~}How tsundere of you." ],
      flirtTalk1: [ "<08>{#p/basic}{~}What? N-no way!" ],
      hurtStatus: [ "<32>{#p/story}* Oculoux在流泪。" ],
      idleTalk1: [ "<08>{#p/basic}{~}I've got my eye on you." ],
      idleTalk2: [ "<08>{#p/basic}{~}Don't tell me what to do." ],
      idleTalk3: [ "<08>{#p/basic}{~}Staring is caring." ],
      idleTalk4: [ "<08>{#p/basic}{~}What an eyesore." ],
      idleTalk5: [ "<08>{#p/basic}{~}How about a staring contest?" ],
      name: "* Oculoux",
      pickTalk1: [ "<08>{#p/basic}{~}How dare you question our way of life!" ],
      spareStatus: [ "<32>{#p/story}* Oculoux doesn't care about fighting anymore." ],
      status1: [ "<32>{#p/story}* A pair of Oculoux walked in!" ],
      status2: [ "<32>{#p/story}* Oculoux is staring right through you." ],
      status3: [ "<32>{#p/story}* Oculoux gnashes its teeth." ],
      status4: [ "<32>{#p/story}* Smells like eyedrops." ],
      status5: [ "<32>{#p/story}* Oculoux has gone bloodshot." ],
      status6: [ "<32>{#p/story}* Oculoux is gazing at you." ],
      status7: [ "<32>{#p/story}* Oculoux is now alone." ]
   },
   b_opponent_migosp: {
      act_check: [ "<32>{#p/story}* SILENTE - 攻击7 防御5\n* 它看起来很邪恶，但其实\n  只是被集体意识冲昏了头脑。" ],
      act_check2: [ "<33>{#p/story}* SILENTE - ATK 7 DEF 5\n* Now alone, it joyfully expresses itself through dance." ],
      act_check3: [ "<32>{#p/story}* SILENTE - ATK 7 DEF 5\n* It seems comfortable with you.\n* VERY comfortable." ],
      act_check4: [ "<32>{#p/story}* SILENTE - ATK 7 DEF 5\n* Despite its tough act, it's clearly in pain..." ],
      act_flirt: [ "<32>{#p/human}* (You flirt with Silente.)" ],
      flirtTalk: [ "<08>{#p/basic}{~}Hiya~" ],
      groupInsult: [ "<32>{#p/human}* (You try insulting Silente, but it's too focused on the others.)" ],
      groupStatus1: [ "<32>{#p/story}* Silente is whispering to the others." ],
      groupStatus2: [ "<32>{#p/story}* It's starting to smell like a roach motel." ],
      groupTalk1: [ "<08>{#p/basic}FILTHY SINGLE MINDER\n.." ],
      groupTalk2: [ "<08>{#p/basic}服从于\n无 上\n主 宰 .." ],
      groupTalk3: [ "<08>{#p/basic}LEGION! WE ARE LEGION!" ],
      groupTalk4: [ "<08>{#p/basic}HEED THE SWARM\n.." ],
      groupTalk5: [ "<08>{#p/basic}IN UNISON, NOW\n.." ],
      groupTalk6: [ "<08>{#p/basic}I DON'T CARE." ],
      name: "* Silente",
      perilStatus: [ "<32>{#p/story}* Silente refuses to give up." ],
      soloInsult: [ "<32>{#p/human}* (You try insulting Silente, but it's too happy to care.)" ],
      soloStatus: [ "<32>{#p/story}* Silente在这宇宙中无忧无虑。" ],
      soloTalk1: [ "<08>{#p/basic}{~}Bein' me is the best!" ],
      soloTalk2: [ "<08>{#p/basic}{~}La la~ Just be your- self~" ],
      soloTalk3: [ "<08>{#p/basic}{~}Nothin' like alone time!" ],
      soloTalk4: [ "<08>{#p/basic}{~}Mmm, cha cha cha!" ],
      soloTalk5: [ "<08>{#p/basic}{~}Swing your arms, baby~" ]
   },
   b_opponent_mushy: {
      act_challenge: [
         "<32>{#p/human}* (You challenge Mushy to a duel.)",
         "<33>{#p/story}* Mushy's SPEED up for this turn!"
      ],
      act_check: [ "<32>{#p/story}* MUSHY - 攻击6 防御6\n* 对星际牛仔十分崇拜，\n  于是练就了一身好枪法。" ],
      act_check2: [ "<32>{#p/story}* MUSHY - ATK 6 DEF 6\n* Huge fan of space cowboys.\n* Even the sexy ones." ],
      act_check3: [ "<32>{#p/story}* MUSHY - ATK 6 DEF 6\n* After giving it your all, this gunslinger is impressed." ],
      act_flirt: [ "<32>{#p/human}* (You flirt with Mushy.)" ],
      act_taunt: [ "<32>{#p/human}* (You taunt Mushy.)" ],
      challengeStatus: [ "<32>{#p/story}* Mushy awaits your next challenge." ],
      challengeTalk1: [ "<08>{#p/basic}{~}Let's see what you got." ],
      challengeTalk2: [ "<08>{#p/basic}{~}Think you can take me?" ],
      flirtStatus1: [ "<32>{#p/story}* Mushy, the confused and the aroused." ],
      flirtTalk1: [ "<08>{#p/basic}{~}H-hey, knock it off!" ],
      hurtStatus: [ "<32>{#p/story}* Mushy准备拼死一搏。" ],
      idleTalk1: [ "<08>{#p/basic}{~}Bang!\nBang!\nBang!" ],
      idleTalk2: [ "<08>{#p/basic}{~}Saddle up!" ],
      idleTalk3: [ "<08>{#p/basic}{~}All in a day's." ],
      name: "* Mushy",
      spareStatus: [ "<32>{#p/story}* Mushy bows out of respect." ],
      status1: [ "<32>{#p/story}* Mushy stormed in!" ],
      status2: [ "<32>{#p/story}* Mushy adjusts their stance." ],
      status3: [ "<32>{#p/story}* Mushy is preparing for a grand standoff." ],
      status4: [ "<32>{#p/story}* Mushy reaches for their holster." ],
      status5: [ "<32>{#p/story}* Smells like petricore." ],
      tauntStatus1: [ "<32>{#p/story}* Mushy pretends they aren't bothered by your taunts." ],
      tauntTalk1: [ "<08>{#p/basic}{~}As if that'll work on me." ]
   },
   b_opponent_napstablook: {
      act_check: [ "<32>{#p/story}* NAPSTABLOOK - ATK 10 DEF 255\n* It's Napstablook." ],
      act_check2: [
         "<32>{#p/story}* NAPSTABLOOK - ATK 10 DEF 255\n* It doesn't seem like they want to be here anymore."
      ],
      act_check3: [ "<32>{#p/story}* NAPSTABLOOK - ATK 10 DEF 255\n* Hopeful, for the first time in a while..." ],
      act_check4: [ "<32>{#p/story}* NAPSTABLOOK - ATK 10 DEF 255\n* The romantic tension is at an all-time high." ],
      awkwardTalk: [ "<11>{#p/napstablook}{~}uh..." ],
      checkTalk: [ "<11>{#p/napstablook}{~}that's me..." ],
      cheer0: [ "<32>{#p/human}* (You try to console Napstablook.)" ],
      cheer1: [ "<32>{#p/human}* (You give Napstablook a patient smile.)" ],
      cheer2: [ "<32>{#p/human}* (You tell Napstablook a little joke.)" ],
      cheer3: [ "<32>{#p/human}* (You show adoration for Napstablook's top hat.)" ],
      cheerTalk1: [ "<11>{#p/napstablook}{~}...?" ],
      cheerTalk2: [ "<11>{#p/napstablook}{~}heh heh..." ],
      cheerTalk3: [
         "<11>{*}{#p/napstablook}{~}let me {#x1}try...{^20}{#x2}{^20}{%}",
         "<11>{*}{#p/napstablook}{~}i call it {#x3}'dapper blook'{^40}{%}",
         "<11>{*}{#p/napstablook}{~}do you like it?{^40}{%}"
      ],
      cheerTalk4: [ "<11>{#p/napstablook}{~}oh gee....." ],
      consoleTalk1: [ "<11>{#p/napstablook}{~}yeah, yeah..." ],
      consoleTalk2: [ "<11>{#p/napstablook}{~}not buying it..." ],
      consoleTalk3: [ "<11>{#p/napstablook}{~}you're not sorry..." ],
      deadTalk: [
         "<11>{#p/napstablook}{~}umm... you do know you can't kill ghosts, right...",
         "<11>{~}we're sorta incorporeal and all",
         "<11>{~}i was just lowering my hp because i didn't want to be rude",
         "<11>{~}sorry... i just made this more awkward...",
         "<11>{~}pretend you beat me...",
         "<11>{~}ooooooooo"
      ],
      flirt1: [ "<32>{#p/human}* (You flirt with Napstablook.)" ],
      flirt2: [ "<32>{#p/human}* (You try your best pickup line on Napstablook.)" ],
      flirt3: [ "<32>{#p/human}* (You give Napstablook a heartfelt compliment.)" ],
      flirt4: [ "<32>{#p/human}* (You reassure Napstablook of your feelings towards them.)" ],
      flirtTalk1: [ "<11>{#p/napstablook}{~}i'd just weigh you down" ],
      flirtTalk2: [ "<11>{#p/napstablook}{~}oh.....\ni've heard that one....." ],
      flirtTalk3: [ "<11>{#p/napstablook}{~}uh... you really think so?" ],
      flirtTalk4: [ "<11>{#p/napstablook}{~}oh, you're serious...", "<11>{~}oh no....." ],
      idleTalk1: [ "<11>{#p/napstablook}{~}i'm fine, thanks" ],
      idleTalk2: [ "<11>{#p/napstablook}{~}just pluggin along..." ],
      idleTalk3: [ "<11>{#p/napstablook}{~}just doing my thing..." ],
      insultTalk1: [ "<11>{#p/napstablook}{~}i knew it..." ],
      insultTalk2: [ "<11>{#p/napstablook}{~}whatever..." ],
      insultTalk3: [ "<11>{#p/napstablook}{~}say what you will..." ],
      insultTalk4: [ "<11>{#p/napstablook}{~}let it all out..." ],
      name: "* Napstablook",
      silentTalk: [ "<11>{#p/napstablook}{~}..." ],
      sincere: [ "<32>{#p/human}* (You flirtatiously comment on Napstablook's top hat.)" ],
      sincereTalk: [ "<11>{#p/napstablook}{~}heh... thanks" ],
      status1: [ "<32>{#p/story}* Here comes Napstablook." ],
      status2: [ "<32>{#p/story}* Napstablook looks just a little better." ],
      status3: [ "<32>{#p/story}* Napstablook wants to show you something." ],
      status3a: [ "<32>{#p/story}* Napstablook awaits your reply." ],
      status4: [ "<32>{#p/story}* Napstablook's eyes are glistening." ],
      status5: [ "<32>{#p/story}* Napstablook is clearly not sure how to handle this." ],
      status5a: [ "<32>{#p/story}* Napstablook is questioning their very being." ],
      status6: [ "<32>{#p/story}* Napstablook is biding their time." ],
      status7: [ "<32>{#p/story}* Napstablook is waiting for your next move." ],
      status8: [ "<32>{#p/story}* Napstablook is staring off into the distance." ],
      status9: [ "<32>{#p/story}* Napstablook is wishing they weren't here." ],
      status10: [ "<32>{#p/story}* Napstablook is trying their best to ignore you." ],
      suck: [ "<32>{#p/human}* (You tell Napstablook their hat sucks bad.)" ],
      threat: [ "<32>{#p/human}* (You threaten Napstablook.)" ]
   },
   b_opponent_toriel: {
      spannerText: [ "<32>{#p/human}* (You throw the spanner.)\n* (Toriel picks it up and returns it to you.)" ],
      spannerTalk: [ "<11>{#p/toriel}{#f/3}That will accomplish nothing, my child." ],
      spannerTalkRepeat: [ "<11>{#p/toriel}{#f/4}..." ],
      act_check: [ "<32>{#p/story}* TORIEL - ATK 80 DEF 80\n* Knows best for you." ],
      act_check2: [ "<32>{#p/story}* TORIEL - ATK 80 DEF 80\n* Seems to be holding back." ],
      act_check3: [ "<32>{#p/story}* TORIEL - ATK 80 DEF 80\n* Looks pre-occupied." ],
      act_check4: [ "<32>{#p/story}* TORIEL - ATK 80 DEF 80\n* Just wants the best for you." ],
      act_check5: [ "<32>{#p/story}* TORIEL - ATK 80 DEF 80\n* Thinks you are \"adorable.\"" ],
      precrime: [ "<20>{#p/asriel2}..." ],
      criminal1: (reveal: boolean) => [
         "<20>{#p/asriel2}{#f/3}哈喽，$(name)。",
         "<20>{#f/3}是我啊，Asriel...",
         "<20>{#f/3}没认出我？",
         "<20>{#f/4}...",
         ...(reveal
            ? [ "<20>{#f/2}嘿... 别装了，\n以为我认不出你吗？", "<20>{#f/1}我知道你的内在是\n空虚的，就像我一样。" ]
            : [
                 "<20>{#f/4}我被困在\n那颗星星里好久...",
                 "<20>{#f/3}但现在，\n看到你站在我的面前...",
                 "<20>{#f/4}我就知道\n一切等待都是值得的。",
                 "<20>{#f/1}你的内在是空虚的，\n和我一样，对吧？"
              ]),
         "<20>{#f/5}过了这么多年，\n我们之间的纽带\n依然无法分割...",
         "<20>{#f/1}听着，我有个计划，\n能让我们变得亲密无间。",
         "<20>{#f/2}有了你和我的力量，\n再加上一起偷来的\n灵魂...",
         "<20>{#f/1}我们就能一举摧毁\n这该死哨站的一切。",
         "<21>{#f/2}让我们把胆敢阻拦我们\n走向美好未来的家伙...",
         "<20>{#f/1}都变为尘埃吧。"
      ],
      criminal2: [ "<20>{#p/asriel2}{#f/3}欢迎回来，$(name)。", "<20>{#f/4}准备好继续了吗？" ],
      criminal3: [ "<20>{#p/asriel2}{#f/3}那么...", "<20>{#f/4}...", "<20>{#f/4}我们继续吧。" ],
      cutscene1: [
         "<32>{#p/basic}* Maybe because I'm the only one you'll listen to.",
         "<25>{#p/toriel}{#f/16}* ...!?",
         "<32>{#p/basic}* But what do I know, huh?\n* I'm just a sweet, innocent little child."
      ],
      cutscene2: [
         "<25>{#p/toriel}{#f/4}* No...\n* This is impossible...",
         "<25>{#f/0}* I must be dreaming.\n* Or hallucinating.\n* Or maybe...",
         "<32>{#p/basic}* No.\n* This is real.",
         "<25>{#p/toriel}{#f/5}* But you died, $(name).",
         "<25>{#f/5}* You cannot possibly be speaking to me.",
         "<32>{#p/basic}* Pretend it's a dream, then.\n* If that works for you.",
         "<25>{#p/toriel}{#f/9}* ...\n* What do you want?",
         "<32>{#p/basic}* Toriel...\n* You know how I feel about humanity, don't you?",
         "<25>{#p/toriel}{#f/13}* Right.",
         "<32>{#p/basic}* Wrong.\n* Not this human, anyway.",
         "<32>* Ever since they got here, I've been following them...",
         "<32>* And now they're asking me to reach out to you.",
         "<32>* What do you think that means?",
         "<25>{#p/toriel}{#f/13}* ...?",
         "<32>{#p/basic}* It means you have to let them go.",
         "<25>{#p/toriel}{#f/11}* ...",
         "<25>{#f/11}* ... with that attitude, perhaps you really are who you say.",
         "<25>{#f/11}* Do you not know what is at stake?",
         "<32>{#p/basic}* ... listen to me.",
         "<32>{#p/basic}* You wish to keep them here because you are afraid of what lies beyond the Outlands.",
         "<33>{#p/basic}* But things aren't the same as they were a hundred years ago.",
         "<33>{#p/basic}* You're only ignorant about it because you're too afraid to go see for yourself.",
         "<25>{#p/toriel}{#f/13}* ...",
         "<25>{#p/toriel}{#f/13}* You are correct.\n* But if I let them go, I won't be able to...",
         "<32>{#p/basic}* ... be there for them?",
         "<32>{#p/basic}* I know the feeling.",
         "<32>{#p/basic}* But keeping them here might as well be dooming them to death.",
         "<32>{#p/basic}* What's a life if it doesn't get to do anything worth living for?",
         "<25>{#p/toriel}{#f/13}* ...\n* $(name)...",
         "<32>{#p/basic}* You gave them a spare cell phone, remember?",
         "<32>{#p/basic}* Keep the line open, and maybe they'll give you a call.",
         "<25>{#p/toriel}{#f/9}* Right...",
         "<25>{#p/toriel}{#f/5}* ... but what about you?",
         "<32>{#p/basic}* I'll be alright.",
         "<32>{#p/basic}* All I ask is that you don't forget about them after they're gone.",
         "<25>{#p/toriel}{#f/14}* ...",
         "<32>{#p/basic}* Goodbye, Toriel."
      ],
      death1: [
         "<11>{#p/toriel}{#f/21}{#v/1}{#i/3}{#x1}{@random:1.1,1.1}呃啊...",
         "<11>{#v/1}{#i/3}{#x1}{@random:1.1,1.1}趁{^2}我\n毫{^2}无{^2}防{^2}备{^2}时\n将{^2}我{^2}杀{^2}死{^2}...",
         "<11>{#v/1}{#i/3}{#x1}{@random:1.1,1.1}...",
         "<11>{#v/2}{#i/4}{#x2}{@random:1.1,1.1}哈{^2}...\n哈{^2}...",
         "<11>{#v/2}{#i/4}{#x2}{@random:1.1,1.1}现{^2}在{^2}看{^2}来{^2}，\n年{^2}轻{^2}人...",
         "<11>{#v/3}{#i/5}{#x2}{@random:1.2,1.2}一{^3}路{^3}上{^3}一{^3}直\n相{^3}信{^3}你{^3}的{^3}我{^3}，\n才{^3}是{^3}真{^3}正{^3}的\n傻{^3}子{^3}啊{^3}..."
      ],
      death2: [
         "<11>{#p/toriel}{#f/21}{#v/1}{#i/3}{#x1}{@random:1.1,1.1}呃啊...",
         "<11>{#v/1}{#i/3}{#x3}{@random:1.1,1.1}本{^2}以{^2}为{^2}，{^2}自{^2}己\n努{^2}力{^2}保{^2}护{^2}的{^2}人{^2}，\n是{^2}你{^2}...",
         "<11>{#v/1}{#i/3}{#x4}{@random:1.1,1.1}...",
         "<11>{#v/2}{#i/4}{#x2}{@random:1.1,1.1}哈{^2}...\n哈{^2}...",
         "<11>{#v/2}{#i/4}{#x1}{@random:1.1,1.1}现{^2}在{^2}看{^2}来{^2}，\n年{^2}轻{^2}人{^2}...",
         "<11>{#v/3}{#i/5}{#x2}{@random:1.2,1.2}我{^3}真{^3}正{^3}保{^3}护{^3}的{^3}，\n是{^3}他{^3}们{^3}啊{^3}..."
      ],
      death3: [
         "<11>{#p/toriel}{#f/21}{#v/1}{#i/3}{#x1}{@random:1.1,1.1}呃啊...",
         "<11>{#v/1}{#i/3}{#x1}{@random:1.1,1.1}You are stronger than I thought...",
         "<11>{#v/1}{#i/3}{#x3}{@random:1.1,1.1}Listen to me, young one...",
         "<11>{#v/1}{#i/3}{#x3}{@random:1.1,1.1}In a few moments, I will turn to dust...",
         "<11>{#v/1}{#i/3}{#x3}{@random:1.1,1.1}When that happens, you must take my SOUL...",
         "<11>{#v/1}{#i/3}{#x1}{@random:1.1,1.1}It is the only real way you can escape this place.",
         "<11>{#v/2}{#i/4}{#x3}{@random:1.1,1.1}You cannot... allow ASGORE's plan to... succeed...",
         "<11>{#v/2}{#i/4}{#x1}{@random:1.1,1.1}...",
         "<11>{#v/3}{#i/5}{#x2}{@random:1.2,1.2}My child...",
         "<11>{#v/3}{#i/5}{#x4}{@random:1.2,1.2}Be good... won't you?"
      ],
      magic1: [ "<20>{#p/asriel2}{#f/3}我们出发。" ],
      name: "* Toriel",
      spareTalk1: [ "<11>{#p/toriel}{#f/11}..." ],
      spareTalk2: [ "<11>{#p/toriel}{#f/11}...\n..." ],
      spareTalk3: [ "<11>{#p/toriel}{#f/11}...\n...\n..." ],
      spareTalk4: [ "<11>{#p/toriel}{#f/17}...？" ],
      spareTalk5: [ "<11>{#p/toriel}{#f/17}你这是\n在做什么？" ],
      spareTalk6: [ "<11>{#p/toriel}{#f/17}..." ],
      spareTalk7: [ "<11>{#p/toriel}{#f/17}你这样做，\n究竟想\n证明什么？" ],
      spareTalk8: [ "<11>{#p/toriel}{#f/17}..." ],
      spareTalk9: [ "<11>{#p/toriel}{#f/12}要么战斗，\n要么离开！" ],
      spareTalk10: [ "<11>{#p/toriel}{#f/12}不要用\n那种眼神看我！" ],
      spareTalk11: [ "<11>{#p/toriel}{#f/12}走开！" ],
      spareTalk12: [ "<11>{#p/toriel}{#f/13}..." ],
      spareTalk13: [ "<11>{#p/toriel}{#f/13}...\n..." ],
      spareTalk14: [ "<11>{#p/toriel}{#f/13}...\n...\n..." ],
      spareTalk15: [
         "<11>{#p/toriel}{#f/13}我明白\n你想要回家\n的心情...",
         "<11>{#p/toriel}{#f/9}但是，\n你可能会在\n途中丧命。"
      ],
      spareTalk16: [ "<11>{#p/toriel}{#f/14}所以... 求你\n现在回去吧。" ],
      spareTalk17: [
         "<11>{#p/toriel}{#f/13}我知道这里\n没有多少东西...",
         "<11>{#p/toriel}{#f/10}但我们\n仍可以幸福\n生活下去。"
      ],
      spareTalk18: [
         "<11>{#p/toriel}{#f/13}有你有我，\n就像\n一家人一样...",
         "<11>{#p/toriel}{#f/10}这样生活\n不好吗？"
      ],
      spareTalk19: [ "<11>{#p/toriel}{#f/21}..." ],
      spareTalk20: [ "<11>{#p/toriel}{#f/18}你为什么\n要让事情变得\n这么难办呢？" ],
      spareTalk21: [ "<11>{#p/toriel}{#f/21}..." ],
      spareTalk22: [ "<11>{#p/toriel}{#f/18}求你了，\n回去吧...", "<11>{#p/toriel}{#f/9}回到我们的\n房间去吧。" ],
      spareTalk23: [ "<11>{#p/toriel}{#f/21}..." ],
      spareTalk24: [ "<11>{#p/toriel}{#f/18}哦，孩子..." ],
      spareTalk28b: [
         "<11>{#p/toriel}{#f/9}也许\n真正糊涂的\n是我...",
         "<11>{#f/13}用这种方法\n试图阻止你...",
         "<11>{#f/9}也许我应该\n让你走。"
      ],
      spareTalk28c: [ "<11>{#p/toriel}{#f/17}...？", "<11>{#f/17}你为什么喊\n“$(name)”\n的名字呢？" ],
      status1: [ "<32>{#p/story}* Toriel now stands before you." ],
      status2: [ "<32>{#p/story}* Toriel prepares a magical attack." ],
      status3: [ "<32>{#p/story}* Toriel is acting aloof." ],
      status4: [ "<32>{#p/story}* Toriel is looking through you." ],
      status5: [ "<32>{#p/story}* ..." ],
      assistStatus: [ "<32>{#p/basic}* 肯定有其他办法的..." ],
      talk1: [ "<32>{#p/human}* (You ask Toriel to let you through.)\n* (No effect.)" ],
      talk2: [ "<32>{#p/human}* (You ask Toriel why she's really doing this.)\n* (She winces briefly.)" ],
      talk3: [ "<32>{#p/human}* (You begged Toriel to stop.)\n* (She hesitates.)" ],
      talk4: [
         "<32>{#p/human}* (You once again begged Toriel to stop.)",
         "<32>{#p/basic}* ... perhaps there is too much at stake for her."
      ],
      talk5: [ "<32>{#p/human}* (You yell at Toriel.)\n* (She closes her eyes and takes a deep breath.)" ],
      talk6: [
         "<32>{#p/human}* (You once again yell at Toriel.)",
         "<32>{#p/basic}* ... perhaps talking won't do anymore good."
      ],
      talk7: [ "<32>{#p/human}* (But you couldn't think of anything else to say.)" ],
      talk8: [ "<32>{#p/human}* (But there was no sense in doing that now.)" ],
      theft: [ "<20>{*}{#p/twinkly}归我了。{^15}{%}" ]
   },

   c_name_outlands: {
      hello: "打招呼",
      about: "介绍下自己",
      mom: "叫她“妈妈”",
      flirt: "调情",
      toriel: "Toriel的电话",
      puzzle: "解谜提示",
      insult: "辱骂"
   },

   c_call_outlands: {
      about1: [
         "<25>{#p/toriel}{#f/1}* You want to know more about me...?",
         "<25>{#f/0}* Well, I am afraid there is not much to say.",
         "<25>{#f/0}* I am but a silly old lady who worries too often!"
      ],
      about2: [
         "<25>{#p/toriel}{#f/1}* 如果你想深入了解我的话...",
         "<25>{#f/1}* 可以四处瞧瞧\n  这些建筑与陈设。",
         "<25>{#f/0}* 它们都是由我\n  直接或间接参与建造的。"
      ],
      about3: [
         "<25>{#p/toriel}{#f/1}* 如果你想深入了解我的话...",
         "<25>{#f/2}* 之前就别在电话里骂我！"
      ],
      flirt1: [
         "<25>{#p/toriel}{#f/7}* ... huh?",
         "<25>{#f/1}* Oh, heh... heh...",
         "<25>{#f/6}* Hahaha!\n* I could pinch your cheek!",
         "<25>{#f/0}* You can certainly find better than an old woman like me."
      ],
      flirt2: [
         "<25>{#p/toriel}{#f/7}* ...\n* Oh dear, are you serious...?",
         "<25>{#f/1}* My child, I do not know if this is pathetic or endearing."
      ],
      flirt3: [
         "<25>{#p/toriel}{#f/7}* ...\n* Oh dear, are you serious...?",
         "<25>{#f/5}* And after you called me \"Mother...\"",
         "<25>{#f/1}* Well then.\n* You are a very \"interesting\" child."
      ],
      flirt4: [ "<25>{#p/toriel}{#f/3}* ...", "<25>{#p/toriel}{#f/4}* 我真是想不通你的脑回路。" ],
      hello: [
         [
            "<25>{#p/toriel}* This is Toriel.",
            "<25>{#f/1}* You only wanted to say hello...?",
            "<25>{#f/0}* Well then.\n* \"Hello!\"",
            "<25>{#f/0}* I hope that suffices.\n* Hee hee."
         ],
         [
            "<25>{#p/toriel}* This is Toriel.",
            "<25>{#f/1}* You wanted to say hello again?",
            "<25>{#f/0}* \"Salutations\" it is!",
            "<25>{#f/1}* Is that enough?"
         ],
         [
            "<25>{#p/toriel}{#f/1}* Are you bored?",
            "<25>{#f/0}* My apologies.\n* I should have given you something to do.",
            "<25>{#f/1}* Why not use your imagination to distract yourself?",
            "<25>{#f/0}* Pretend you are... a fighter pilot!",
            "<25>{#f/1}* Twisting and twirling, doing barrel rolls at light speed...",
            "<25>{#f/1}* Can you do that for me?"
         ],
         [
            "<25>{#p/toriel}{#f/5}* Hello, small one.",
            "<25>{#f/9}* I am sorry, but I do not have much else to say.",
            "<25>{#f/1}* It was nice to hear your voice, though..."
         ]
      ],
      helloX: [ "<25>{#p/toriel}{#g/torielLowConcern}* 嗯？" ],
      mom1: [
         "<25>{#p/toriel}* ...",
         "<25>{#f/7}* Huh?\n* Did you just call me \"Mom?\"",
         "<25>{#f/1}* Well...\n* I suppose...",
         "<25>{#f/1}* Would that make you happy?",
         "<25>{#f/1}* To call me...\n* \"Mother?\"",
         "<25>{#f/0}* Well then.\n* Call me whatever you like!"
      ],
      mom2: [ "<25>{#p/toriel}{#f/7}* ...\n* Oh my... again?", "<25>{#f/0}* Hee hee...\n* You are a very sweet child." ],
      mom3: [
         "<25>{#p/toriel}{#f/7}* ...\n* Oh my... again?",
         "<25>{#f/5}* And after you flirted with me...",
         "<25>{#f/1}* Well then.\n* You are a very \"interesting\" child."
      ],
      mom4: [ "<25>{#p/toriel}{#f/5}* ..." ],
      puzzle1: [
         "<25>{#p/toriel}{#f/1}* Help with a puzzle...?",
         "<25>{#f/1}* You have not left the room yet, have you?",
         "<25>{#f/0}* Wait for me to return, and we can solve it together."
      ],
      puzzle2: [
         "<25>{#p/toriel}{#f/1}* Help with a puzzle...?",
         "<25>{#f/23}* ... something tells me you do not sincerely need my help."
      ],
      insult1: (sus: boolean) =>
         sus
            ? [
                 "<25>{#p/toriel}{#f/0}* 喂？\n* 我是...",
                 "<25>{#f/2}* ...！",
                 "<25>{#f/3}* 你有本事再说一遍？"
              ]
            : [
                 "<25>{#p/toriel}{#f/0}* 喂？\n* 我是...",
                 "<25>{#f/2}* ...！",
                 "<25>{#f/1}* My child... I do not think that means what you think it means."
              ],
      insult2: (sus: boolean) =>
         sus
            ? [ "<25>{#p/toriel}{#f/15}* ...", "<25>{#f/12}* 我会当作没听见的。" ]
            : [ "<25>{#p/toriel}{#f/1}* My child..." ]
   },

   i_candy: {
      battle: {
         description: "Has a distinct, non-licorice flavor.",
         name: "怪物糖果"
      },
      drop: [ "<32>{#p/human}* （你把怪物糖果扔掉了。）" ],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? [ "<32>{#p/human}* （10 HP。）" ]
            : [ "<32>{#p/basic}* \"Monster Candy\" Heals 10 HP\n* Has a distinct, non-licorice flavor." ],
      name: "怪物糖果",
      use: [ "<32>{#p/human}* （你吃掉了怪物糖果。）" ]
   },
   i_chocolate: {
      battle: {
         description: "A well-deserved chocolate bar.",
         name: "巧克力棒"
      },
      drop: () => [
         "<32>{#p/human}* (You threw away the Chocolate Bar.)",
         ...(SAVE.data.b.svr || world.darker ? [] : [ "<32>{#p/basic}* ... oh well." ])
      ],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? [ "<32>{#p/human}* （19 HP。它让你想到了某个人。）" ]
            : [ "<32>{#p/basic}* \"Chocolate Bar\" Heals 19 HP\n* It's a well-deserved treat." ],
      name: "巧克力棒",
      use: () => [
         "<32>{#p/human}* （你吃掉了巧克力棒。）",
         ...(battler.active && battler.target?.opponent.metadata.reactChocolate
            ? [ "<32>{#p/basic}* Toriel recognizes the scent and smiles a little." ]
            : [])
      ]
   },
   i_delta: {
      battle: {
         description: "This substance is said to have highly relaxing properties.",
         name: "大麻素"
      },
      drop: [ "<32>{#p/human}* （你把大麻素扔掉了。）" ],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? [ "<32>{#p/human}* (5 HP. You feel strangely about this item.)" ]
            : [ "<32>{#p/basic}* \"Δ-9\" Heals 5 HP\n* This substance is said to have highly relaxing properties." ],
      name: "大麻素",
      use: [ "<32>{#p/human}* (You ingest the Δ-9.)" ]
   },
   i_halo: {
      battle: {
         description: "A headband with its own gravity field.",
         name: "光环"
      },
      drop: [ "<32>{#p/human}* (You fling the Halo away like a frisbee.)" ],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? [ "<32>{#p/human}* （3防御。）" ]
            : [ "<32>{#p/basic}* \"Halo\" (3 DF)\n* A headband with its own gravity field." ],
      name: "光环",
      use: () => [
         "<32>{#p/human}* （你戴上了光环。）",
         ...(SAVE.data.b.svr && !SAVE.data.b.freedom && asrielinter.i_halo_use++ < 1
            ? [ "<25>{#p/asriel1}{#f/20}* I think it suits you." ]
            : [])
      ]
   },
   i_little_dipper: {
      battle: {
         description: "A whacking spoon.",
         name: "小熊座"
      },
      drop: [ "<32>{#p/human}* （你把小熊座扔掉了。）" ],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? [ "<32>{#p/human}* （3攻击。）" ]
            : [ "<32>{#p/basic}* \"Little Dipper\" (3 AT)\n* A whacking spoon." ],
      name: "小熊座",
      use: [ "<32>{#p/human}* （你装备上了小熊座。）" ]
   },
   i_pie: {
      battle: {
         description: "Homemade butterscotch-cinnamon pie, one slice.",
         name: "派"
      },
      drop: [ "<32>{#p/human}* （你把奶油糖肉桂派扔掉了。）" ],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? [ "<32>{#p/human}* （99 HP。）" ]
            : [ "<32>{#p/basic}* \"Butterscotch Pie\" Heals 99 HP\n* Homemade butterscotch-cinnamon pie, one slice." ],
      name: "奶油糖肉桂派",
      use: [ "<32>{#p/human}* （你吃掉了奶油糖肉桂派。）" ]
   },
   i_pie2: {
      battle: {
         description: "一道传统家常美食。",
         name: "蜗牛派"
      },
      drop: [ "<32>{#p/human}* （你把蜗牛派扔掉了。）" ],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? [ "<32>{#p/human}* （99 HP。）" ]
            : [ "<32>{#p/basic}* \"Snail Pie\" Heals 99 HP\n* Classic family recipe." ],
      name: "蜗牛派",
      use: [ "<32>{#p/human}* （你吃掉了蜗牛派。）" ]
   },
   i_pie3: {
      battle: {
         description: "Despite being soup-ified, the pie remains delicious.",
         name: "派粥"
      },
      drop: [ "<32>{#p/human}* (You dump the Pie Soup and the spoon that came with it.)" ],
      info: [ "<32>{#p/basic}* \"Pie Soup\" Heals 49 HP\n* Despite being soup-ified, the pie remains delicious." ],
      name: "派粥",
      use: [ "<32>{#p/human}* (You consume the Pie Soup with the provided spoon.)" ]
   },
   i_pie4: {
      battle: {
         description: "真是恶有恶报...",
         name: "糊派"
      },
      drop: [ "<32>{#p/human}* （你把烤糊的派随手扔在一边，\n  置之不理。）" ],
      info: [ "<32>{#p/basic}* “糊派” 回复 39 HP\n* 真是恶有恶报..." ],
      name: "糊派",
      use: [ "<32>{#p/human}* （你把烤糊的派吃掉了。）" ]
   },
   i_snails: {
      battle: {
         description: "A plate of fried snails.\nFor breakfast, of course.",
         name: "焗蜗牛"
      },
      drop: [ "<32>{#p/human}* （你把焗蜗牛扔掉了。）" ],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? [ "  <32>{#p/human}* （19 HP。）" ]
            : [ "<32>{#p/basic}* \"Fried Snails\" Heals 19 HP\n* A plate of fried snails.\n* For breakfast, of course." ],
      name: "焗蜗牛",
      use: [ "<32>{#p/human}* （你吃掉了焗蜗牛。）" ]
   },
   i_soda: {
      battle: {
         description: "A sickly, dark yellow liquid.",
         name: "呲呲汽水"
      },
      drop: () => [
         "<32>{#p/human}* （你扔掉了呲呲汽水。）",
         ...(SAVE.data.b.svr || world.darker ? [] : [ "<32>{#p/basic}* Good riddance." ])
      ],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? [ "<32>{#p/human}* （8 HP。）" ]
            : [ "<32>{#p/basic}* \"Fizzli Soda\" Heals 8 HP\n* A dark, sickly yellow liquid." ],
      name: "呲呲汽水",
      use: () => [
         "<32>{#p/human}* （你喝掉了呲呲汽水。）",
         ...(SAVE.data.b.svr || world.darker ? [] : [ "<32>{#p/basic}* Yuck!" ])
      ]
   },
   i_spacesuit: {
      battle: {
         description: "It came with the craft you crash-landed in.",
         name: "宇航服"
      },
      drop: [ "<32>{#p/human}* （你把破损的宇航服扔掉了。）" ],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? [ "<32>{#p/human}* (20 HP. The last remaining fragment of a spacecraft flown in exile.)" ]
            : [ "<32>{#p/basic}* \"Broken Spacesuit\" Heals 20 HP\n* It came with the craft you crash-landed in." ],
      name: "破损的宇航服",
      use: [ "<33>{#p/human}* (After using its last heal-pak, the Broken Spacesuit died.)" ]
   },
   i_spanner: {
      battle: {
         description: "一把生锈的旧扳手。",
         name: "旧扳手"
      },
      drop: [ "<32>{#p/human}* （你把生锈的扳手扔掉了。）" ],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? [ "<32>{#p/human}* (A trusty tool forged from beyond the galaxy's edge.)" ]
            : [ "<32>{#p/basic}* A rusty old wrench." ],
      name: "生锈的扳手",
      use: () => [
         ...(battler.active && battler.target?.opponent.metadata.reactSpanner
            ? []
            : [ "<32>{#p/human}* (You toss the spanner into the air.)\n* (Nothing happens.)" ])
      ]
   },
   i_starbertA: {
      battle: {
         description: "限量版“超级星之行者”连载漫画第1期。",
         name: "星之行者1"
      },
      drop: [ "<32>{#p/human}* （你把“超级星之行者1”扔掉了。）" ],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? [ "<32>{#p/human}* (It seems like the beginning of a journey.)" ]
            : [ "<32>{#p/basic}* 限量版“超级星之行者”连载漫画。\n* 共有3期，这是第1期。" ],
      name: "超级星之行者1",
      use: () => (battler.active ? [ "<32>{#p/human}* （你看了看“超级星之行者1”。）", "<32>* (Nothing happens.)" ] : [])
   },
   i_starbertB: {
      battle: {
         description: "限量版“超级星之行者”连载漫画第2期。",
         name: "星之行者2"
      },
      drop: [ "<32>{#p/human}* （你把“超级星之行者2”扔掉了。）" ],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? [ "<32>{#p/human}* (It seems like the middle of a journey.)" ]
            : [ "<32>{#p/basic}* 限量版“超级星之行者”连载漫画。\n* 共有3期，这是第2期。" ],
      name: "超级星之行者2",
      use: () =>
         battler.active
            ? [
                 "<32>{#p/human}* （你看了看“超级星之行者2”。）",
                 ...(SAVE.data.b.stargum
                    ? [ "<32>* (Nothing happens.)" ]
                    : [
                         "<32>* (You found a piece of gum taped to the comic strip.)",
                         choicer.create("* (Use the gum?)", "是", "否")
                      ])
              ]
            : []
   },
   i_starbertC: {
      battle: {
         description: "限量版“超级星之行者”连载漫画第3期。",
         name: "星之行者3"
      },
      drop: [ "<32>{#p/human}* （你把“超级星之行者3”扔掉了。）" ],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? [ "<32>{#p/human}* (It seems like the end of a journey... or is it a new beginning?)" ]
            : [ "<32>{#p/basic}* 限量版“超级星之行者”连载漫画。\n* 共有3期，这是最后一期。" ],
      name: "超级星之行者3",
      use: () => (battler.active ? [ "<32>{#p/human}* （你看了看“超级星之行者3”。）", "<32>* (Nothing happens.)" ] : [])
   },
   i_steak: {
      battle: {
         description: "Questionable at best.",
         name: "滋滋牛排"
      },
      drop: () => [
         "<32>{#p/human}* （你把牛排扔掉了。）",
         ...(SAVE.data.b.svr || world.darker || SAVE.data.b.ufokinwotm8
            ? []
            : [ "<32>{#p/basic}* Well, that won't be missed." ])
      ],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? [ "<32>{#p/human}* （14 HP。）" ]
            : [ "<32>{#p/basic}* \"Sizzli Steak\" Heals 14 HP\n* Questionable." ],
      name: "滋滋牛排",
      use: () => [
         "<32>{#p/human}* （你吃掉了滋滋牛排。）",
         ...(SAVE.data.b.svr || world.darker || SAVE.data.b.ufokinwotm8 ? [] : [ "<32>{#p/basic}* Gross!" ])
      ]
   },

   k_coffin: {
      name: "Secret Key",
      description: () =>
         SAVE.data.b.w_state_secret
            ? "Used to access the room with a coffin in the Outlands."
            : "Acquired from the sock drawer in Toriel's room."
   },

   c_call_toriel: <Partial<CosmosKeyed<CosmosProvider<string[]>, string>>>{
      w_start: [
         "<25>{#p/toriel}{#f/0}* Ah, of course.\n* That must be where you crash-landed.",
         "<25>{#f/0}* The other humans who came here landed there, too.",
         "<25>{#f/1}* There must be something about the force field...",
         "<25>{#f/0}* ... which always makes incoming craft fly in on this vector."
      ],
      w_twinkly: () =>
         SAVE.data.b.toriel_twinkly
            ? [
                 "<25>{#p/toriel}{#f/1}* Is that where I first found you?",
                 "<25>{#f/5}* That talking star who tormented you has been a pest for some time.",
                 "<25>{#f/1}* I have tried to reason with him before, but...",
                 "<25>{#f/9}* My efforts never truly got anywhere."
              ]
            : [
                 "<25>{#p/toriel}{#f/1}* Is that where I first found you?",
                 "<25>{#f/5}* All alone out there, by yourself...",
                 "<25>{#f/0}* It is a good thing I was there to bring you in."
              ],
      w_entrance: [
         "<25>{#p/toriel}{#f/1}* The entrance to the Outlands...",
         "<25>{#f/0}* Indeed, the area before this is not actually part of it.",
         "<25>{#f/5}* It is... more of an unmarked crash site.",
         "<25>{#f/1}* After the first human crashed directly INTO the Outlands...",
         "<25>{#f/0}* A separate platform seemed an obvious addition."
      ],
      w_lobby: [
         "<25>{#p/toriel}{#f/0}* The puzzle in this room works well for demonstrations.",
         "<25>{#f/1}* After all, why else would I build it?",
         "<25>{#f/5}* Unfortunately, not every human understood this.",
         "<25>{#f/3}* One of them even tried running at the security field directly...",
         "<25>{#f/0}* ... suffice it to say, the use of healing magic was required."
      ],
      w_tutorial: [
         "<25>{#p/toriel}* If this puzzle is not my favorite, I do not know what is!",
         "<25>* The way it teaches collaboration is a most valuable quality.",
         "<25>{#f/1}* Since my dream job IS to become a teacher...",
         "<25>{#f/0}* 所以总想找机会将这些\n  重要的东西教给别人。"
      ],
      w_dummy: () => [
         "<25>{#p/toriel}{#f/1}* The dummy room...?",
         ...[
            [
               "<25>{#f/0}* 嘻嘻，我还是很高兴\n  你按照我教的方法\n  完成了任务。",
               "<25>{#f/1}* A friendly conversation is preferable to the alternative...",
               "<25>{#f/0}* And not just because it helps you make friends!"
            ],
            [],
            [
               "<25>{#f/5}* ...",
               "<25>{#f/5}* 虽然你没按我教的去做...",
               "<25>{#f/0}* At the very least, you avoided the conflict.",
               "<25>{#f/0}* Considering the alternatives, it is... a preferable outcome."
            ],
            [
               "<25>{#f/0}* ... hmm.",
               "<25>{#f/0}* Truthfully, I still do not know how to react to what happened.",
               "<25>{#f/1}* It was mesmerising to watch, though...",
               "<25>{#f/3}* Just the two of you...\n* Staring at each other...",
               "<25>{#f/4}* ..."
            ],
            [
               "<25>{#f/1}* I cannot say I expected what happened, but...",
               "<25>{#f/0}* It was still endearing nonetheless.",
               "<25>{#f/0}* Surprisingly, you are the first human to try the approach.",
               "<25>{#f/1}* And it seemed such an obvious solution in hindsight..."
            ],
            [],
            [
               "<25>{#f/5}* ...",
               "<25>{#f/7}* ...",
               "<25>{#f/8}* Hahaha!\n* Ah, I cannot help but laugh!",
               "<25>{#f/6}* The shamelessness with which you chose to flirt...",
               "<25>{#f/1}* Certainly took me by surprise!",
               "<25>{#f/0}* Listen to me, my child.",
               "<25>{#f/9}* Flirting with your adversaries may not always be ideal.",
               "<25>{#f/10}* But, if you can do it like THAT again...",
               "<25>{#f/0}* There is no telling what you can accomplish this way."
            ]
         ][SAVE.data.n.state_wastelands_dummy]
      ],
      w_coffin: [
         "<25>{#p/toriel}{#f/5}* ...",
         "<25>{#f/5}* In times like this, it is important that we show respect.",
         "<25>{#f/10}* ... do you understand?",
         "<25>{#f/9}* 刚刚教你的东西，\n  比什么谜题和战斗技巧\n  重要得多。"
      ],
      w_danger: () =>
         SAVE.data.n.state_wastelands_froggit === 3
            ? [
                 "<25>{#p/toriel}{#f/1}* The riddle offered by the terminal in that room...",
                 "<25>{#f/0}* Was based on something I found in an old Earth legend.",
                 "<25>{#f/1}* It involved a series of many intricate puzzles...",
                 "<25>{#f/0}* And a certain deceptive baked good.",
                 SAVE.data.b.w_state_riddleskip
                    ? "<25>{#f/5}* It is a shame you refused to solve it."
                    : "<25>{#f/0}* Seeing you solve it was quite gratifying."
              ]
            : [
                 "<25>{#p/toriel}{#f/1}* As overseer of the Outlands, I took it upon myself...",
                 "<25>{#f/0}* To ensure the other monsters did not attack you.",
                 "<25>{#f/0}* Both they and I have a mutual understanding about this.",
                 "<25>{#f/0}* That is why the Froggit left so readily."
              ],
      w_zigzag: [
         "<25>{#p/toriel}{#f/1}* My idea with building this room to be so long and windy...",
         "<25>{#f/0}* ... was that I felt a straight room would be too boring.",
         "<25>{#f/1}* After all, who wants to walk in a straight line all their life?",
         "<25>{#f/0}* A little change of pace can be quite nice."
      ],
      w_froggit: [
         "<25>{#p/toriel}* From this room forward, more monsters may be found.",
         "<25>{#f/0}* They often like to \"hang out\" here.\n* Nice, is it not?",
         "<25>{#f/1}* It tended to be a quiet place, until recently...",
         "<25>{#f/0}* When a monster began teaching the others how to flirt.",
         "<25>{#f/0}* This new element has greatly altered the social atmosphere."
      ],
      w_candy: () => [
         SAVE.data.n.state_wastelands_candy < 4
            ? "<25>{#p/toriel}{#f/1}* The vending machine has yet to break down?"
            : "<25>{#p/toriel}{#f/1}* Oh dear, is the vending machine broken again?",
         "<25>{#f/5}* Well, it has happened more times than I can count.",
         "<25>{#f/3}* On the positive side, it DOES save power...",
         "<25>{#f/0}* ... so perhaps it is not all bad."
      ],
      w_puzzle1: [
         "<25>{#p/toriel}{#f/1}* To ease the process of retrying the puzzle...",
         "<25>{#f/0}* I installed a system to move you back to the start.",
         "<25>{#f/5}* The scientist who helped to install it is long gone now...",
         "<25>{#f/0}* But his work continues to be of use every day."
      ],
      w_puzzle2: [
         "<25>{#p/toriel}{#f/1}* Ah, a most unique form of puzzle exists here.",
         "<25>{#f/0}* One that tests patience over memorization.",
         "<25>{#f/1}* For the most part, the other humans complained about it...",
         "<25>{#f/0}* Though, one did appreciate the value it provides."
      ],
      w_puzzle3: [
         "<25>{#p/toriel}{#f/1}* A little trick you may find helpful for this puzzle...",
         "<25>{#f/0}* Is that you can start moving even as the sequence is shown.",
         "<25>{#f/5}* ... I suppose that is not of much use to you now.",
         "<25>{#f/1}* But, if for some reason you need to solve it again...",
         "<25>{#f/0}* You may try the advice I have just given."
      ],
      w_puzzle4: [
         "<25>{#p/toriel}{#f/1}* It has come to my attention that, recently...",
         "<25>{#f/0}* Old editions of a now- defunct comic series are being sold.",
         "<25>{#f/0}* Perhaps, if you are bored, you could buy one.",
         "<25>{#f/0}* Children your age tend to be rather fond of these things!"
      ],
      w_mouse: [
         "<25>{#p/toriel}{#f/1}* As a matter of principle, I find it important...",
         "<25>{#f/0}* That there be a room designated for stopping and resting.",
         "<25>{#f/0}* In my own life, I often find breaks to be a useful asset.",
         "<25>{#f/1}* The stærmite who resides here would certainly agree..."
      ],
      w_blooky: () =>
         !SAVE.data.b.a_state_hapstablook || SAVE.data.n.plot < 68
            ? [
                 "<25>{#p/toriel}{#f/0}* That ghost who called earlier often inhabits this area.",
                 ...(SAVE.data.b.napsta_performance
                    ? [ "<25>{#f/1}* I thought they would be happier after their performance..." ]
                    : [ "<25>{#f/1}* I have tried to lift their spirits in the past..." ]),
                 "<25>{#f/5}* But their troubles may not be so easy to resolve.",
                 "<25>{#f/1}* If only I knew what was holding them down..."
              ]
            : [
                 "<25>{#p/toriel}{#f/1}* For whatever reason, that ghost who often comes here...",
                 "<25>{#f/0}* Has been feeling a lot better lately.",
                 "<25>{#f/0}* They even came to my house to tell me so themselves.",
                 "<25>{#f/1}* Apparently you had something to do with this...?"
              ],
      w_party: [
         "<25>{#p/toriel}{#f/0}* The activities room.\n* We host all kinds of performances there.",
         "<25>{#f/0}* Drama, dance nights...\n* And, most important of all, the arts.",
         "<25>{#f/0}* It is always good to see people expressing themselves.",
         "<25>{#f/1}* I once attended a comedy show in that very room.",
         "<25>{#f/0}* It was the hardest I have ever laughed in my life!"
      ],
      w_pacing: () => [
         SAVE.data.b.toriel_twinkly
            ? "<25>{#p/toriel}{#f/0}* I heard someone here made a \"friend\" with that talking star."
            : "<25>{#p/toriel}{#f/0}* I heard someone here made a \"friend\" with a talking star.",
         "<25>{#f/1}* One of the Froggits, I presume...?",
         "<25>{#f/1}* To say I am worried for that monsters' safety...",
         "<25>{#f/5}* Would be quite the understatement."
      ],
      w_junction: [
         "<25>{#p/toriel}{#f/1}* The junction room...",
         "<25>{#f/0}* In the past, we had planned a community area of sorts here.",
         "<25>{#f/0}* Outlands visitors would be met with a warm, welcoming atmosphere.",
         "<25>{#f/1}* Over time, though, we realized not many people would come...",
         "<25>{#f/0}* And so, the design was altered into what you see today.",
         "<25>{#f/5}* A little boring, but I suppose not every room can be grand..."
      ],
      w_annex: [
         "<25>{#p/toriel}* From here, the all- important taxi stop can be reached.",
         "<25>{#f/1}* Not only are other areas of the outpost accessible...",
         "<25>{#f/0}* But other subsections of the Outlands are, too.",
         "<25>{#f/1}* Seeing as you are but a small child, however...",
         "<25>{#f/5}* It is unlikely the driver would offer that as an option to you.",
         "<25>{#f/0}* The shops and business there are mostly just for grown-ups."
      ],
      w_wonder: () => [
         "<25>{#p/toriel}{#f/1}* A little mushroom greeted me on my way back from shopping...",
         SAVE.data.b.snail_pie
            ? "<25>{#f/0}* ... as I returned with ingredients for that snail pie."
            : "<25>{#f/0}* ... as I returned with ingredients for that butterscotch pie.",
         "<25>{#f/3}* Strangely, it was floating above the doorway...",
         "<25>{#f/0}* The gravity must be weak in that room.",
         "<25>{#f/1}* Perhaps the presence of the taxi has some kind of effect...?"
      ],
      w_courtyard: [
         "<25>{#p/toriel}{#f/0}* Ah.\n* The courtyard.",
         "<25>{#f/1}* Admittedly, it is a little lacking...",
         "<25>{#f/5}* In terms of being a place for children like you to play.",
         "<25>{#f/1}* With every human who came, I thought of fixing that...",
         "<25>{#f/5}* But they always left before I had the chance."
      ],
      w_alley1: [
         "<25>{#p/toriel}{#f/9}* ... the room in which I lectured you about leaving.",
         "<25>{#f/5}* I thought, if I spoke of the force field...",
         "<25>{#f/5}* I might convince you to stay.",
         "<25>{#f/1}* ... I remember telling the other humans the same, but...",
         "<25>{#f/5}* It was as effective for you as it was for them."
      ],
      w_alley2: [
         "<25>{#p/toriel}{#f/9}* ... the room in which I warned you of the dangers ahead.",
         "<25>{#f/5}* I have been told my beliefs about them are misguided, but...",
         "<25>{#f/5}* I felt it unwise to take that chance.",
         "<25>{#f/9}* ... perhaps it is time I re-considered my viewpoint."
      ],
      w_alley3: [
         "<25>{#p/toriel}{#f/9}* ... I truly regret the way I acted towards you here.",
         "<25>{#f/5}* It was wrong of me to attempt to force you to stay...",
         "<25>{#f/5}* Merely acting on my own silly desires.",
         "<25>{#f/1}* I am sure you have already forgiven me, though...",
         "<25>{#f/5}* Regardless of whether or not I deserve it..."
      ],
      w_alley4: () =>
         SAVE.data.b.w_state_fightroom
            ? [
                 "<32>{#s/phone}{#p/event}* Dialing...",
                 "<25>{#p/toriel}{#f/1}* Although that room may not evoke the best of feelings for us...",
                 "<25>{#f/0}* It is still one of my favorite places in the Outlands.",
                 "<25>{#f/1}* There is a certain someone who visits sometimes...",
                 "<25>{#f/6}* Perhaps you are already aware of him.",
                 "<32>{#s/equip}{#p/event}* Click..."
              ]
            : instance('main', 'toriButNotGarb') === void 0 // NO-TRANSLATE

            ? [
                 "<32>{#s/phone}{#p/event}* Dialing...",
                 "<25>{#p/toriel}{#f/1}* Calling so soon...?",
                 "<25>{#f/0}* ... I have not even gotten back to the house yet!",
                 "<25>{#f/0}* Please, wait a moment before calling again.",
                 "<32>{#s/equip}{#p/event}* Click..."
              ]
            : [
                 "<32>{#w.stopThatGoat}{#s/phone}{#p/event}* Dialing...",
                 "<25>{#p/toriel}{#f/1}* Calling so soon...?",
                 "<25>{#f/0}* ... I have not even left the room yet!",
                 "<25>{#f/2}* A moment to breathe would be nice!",
                 "<32>{#w.startThatGoat}{#s/equip}{#p/event}* Click..."
              ],
      w_bridge: [
         "<25>{#p/toriel}{#f/1}* The bridge to the rest of the outpost...",
         "<25>{#f/5}* It is a shame to think I almost destroyed it.",
         "<25>{#f/0}* Of course, the taxi still would have been around.",
         "<25>{#f/3}* But I doubt that would have been very reliable.",
         "<25>{#f/1}* Let us be glad this bridge is still in place."
      ],
      w_exit: () =>
         SAVE.data.n.plot < 16
            ? [
                 "<25>{#p/toriel}{#f/1}* My child, if you are leaving the Outlands...",
                 "<25>{#f/0}* Then... I want you to remember something.",
                 "<25>{#f/1}* Whatever happens, no matter how difficult it may seem...",
                 "<25>{#f/0}* I want you to know that I have faith in you.",
                 "<25>{#f/0}* That I know you can do the right thing.",
                 "<25>{#f/1}* Remember that, alright?",
                 "<25>{#f/0}* ... good luck."
              ]
            : SAVE.data.n.plot < 17.001
            ? [
                 "<25>{#p/toriel}{#f/1}* Returning to the Outlands so soon...?",
                 "<25>{#f/0}* Well.\n* I cannot say I am opposed to that.",
                 "<25>{#f/1}* You may leave at any time, of course...",
                 "<25>{#f/0}* But, for the moment, it is nice to see you."
              ]
            : [
                 "<25>{#p/toriel}{#f/2}* How long have you been standing out there!?",
                 "<25>{#f/1}* Did you come back all this way just to call me?",
                 "<25>{#f/0}* ... silly goose.",
                 "<25>{#f/0}* If you would like to call, there is no need to go back this far."
              ],
      w_toriel_front: [
         "<25>{#p/toriel}{#f/1}* Did you know that this house is a re-creation of another?",
         "<25>{#f/1}* In the past, I lived in the Citadel...",
         "<25>{#f/0}* In a house that this one was made to resemble.",
         "<25>{#f/5}* Once in a while, I forget that I am not really there..."
      ],
      w_toriel_hallway: [
         "<25>{#p/toriel}{#f/0}* There is not much to say about thehallway.",
         "<26>{#f/1}* Though, you can take a look in the mirror, if you like...",
         "<25>{#f/0}* I hear self-reflection can be a powerful thing."
      ],
      w_toriel_asriel: [
         "<25>{#p/toriel}{#f/0}* Ah, it is your room!",
         "<25>{#f/5}* Your... room...",
         "<25>{#f/9}* ...",
         "<25>{#f/5}* Perhaps it is no longer as such.",
         "<25>{#f/1}* ...",
         "<25>{#f/1}* Actually, I will leave that decision to you...",
         "<25>{#f/0}* You may still rest any time you like."
      ],
      w_toriel_toriel: [
         "<25>{#p/toriel}{#f/0}* So you have stumbled into my room.",
         "<25>{#f/0}* If you like, you may read a book from my bookshelf.",
         "<25>{#f/0}* But, please, do not forget to put it back.",
         "<25>{#f/23}* And don't you dare open that sock drawer!"
      ],
      w_toriel_living: () =>
         toriCheck()
            ? [ "<25>{#p/toriel}{#f/3}* There is no need to call me when I am right here, little one." ]
            : [
                 "<25>{#p/toriel}{#f/1}* Rummaging around in the living room, are we?",
                 "<25>{#f/0}* Say.\n* Have you read all of the books yet?",
                 "<25>{#f/1}* I thought about reading you the snail fact book...",
                 "<25>{#f/0}* But I decided it might be a little too repetitive for you."
              ],
      w_toriel_kitchen: [
         "<25>{#p/toriel}{#f/1}* The kitchen...?",
         "<25>{#f/0}* I left a chocolate bar in the fridge for you.",
         "<25>{#f/0}* I hear it is... an old favorite of humans.",
         "<25>{#f/1}* 希望你能喜欢它..."
      ],
      s_start: () =>
         SAVE.data.n.plot < 17.001
            ? [
                 "<25>{#p/toriel}{#f/0}* If I am right, a certain friend of mine should be up ahead.",
                 "<26>{#f/0}* Do not fear, little one.",
                 "<25>{#f/1}* Keep going..."
              ]
            : [
                 "<25>{#p/toriel}{#f/1}* From what I recall, this long room...",
                 "<26>{#f/0}* ... would have been the basis for a town on the outskirts of Starton.",
                 "<25>{#f/0}* Of course, that never came to pass.",
                 "<25>{#f/2}* One town was more than enough!"
              ],
      s_sans: () =>
         SAVE.data.n.plot < 17.001
            ? [
                 "<25>{#p/toriel}{#f/0}* If I am right, a certain friend of mine should be up ahead.",
                 "<26>{#f/0}* Do not fear, little one.",
                 "<25>{#f/1}* Keep going..."
              ]
            : [
                 "<25>{#p/toriel}{#f/1}* I presume by now you have heard of the \"gravometric inverter?\"",
                 "<26>{#f/0}* It is a device Sans has told me all about.",
                 "<25>{#f/1}* Apparently, there is another world up there...",
                 "<25>{#f/0}* A place where things do not always face the right way up."
              ],
      s_crossroads: [
         "<25>{#p/toriel}{#f/1}* This old landing pad was once a bustling intersection...",
         "<25>{#f/1}* Supply ships coming and going...",
         "<25>{#f/1}* Ready to aid in whatever was being built next...",
         "<25>{#f/5}* It is a shame the outpost seems to have stopped expanding.",
         "<25>{#f/0}* For a while, building new areas defined our culture!"
      ],
      s_human: [
         "<25>{#p/toriel}* I heard Sans's brother wants to join the royal guard someday.",
         "<25>{#f/1}* Such an aspirational young skeleton...",
         "<25>{#f/0}* Despite my feelings about the guard, it is good for him to dream.",
         "<25>{#f/5}* I worry that too many have given up on their dreams lately...",
         "<25>{#f/0}* But not him!\n* That skeleton knows what is best for him."
      ],
      s_papyrus: [
         "<25>{#p/toriel}* Sans told me all about the gadgets Papyrus added to his station.",
         "<25>{#f/1}* First, a handle, so he can \"swing\" into duty...",
         "<25>{#f/1}* A so-called \"sky wrench\" used to get a \"fix\" on the stars...",
         "<25>{#f/0}* And a screen attachment to keep track of his many responsibilities.",
         "<25>{#f/6}* With inventions like these, you would think he works at a lab."
      ],
      s_doggo: [
         "<25>{#p/toriel}{#f/5}* Is the royal guard giving you too much trouble?",
         "<25>{#f/0}* Sans did say he would warn you of potential encounters.",
         "<25>{#f/1}* ...",
         "<25>{#f/1}* Perhaps I should be more worried, but...",
         "<25>{#f/0}* Something tells me you will be alright.",
         "<25>{#f/0}* I have faith in that skeleton to look out for you."
      ],
      s_robot: [
         "<25>{#p/toriel}{#f/1}* Ah, what a lovely sound...",
         "<25>{#f/0}* I would recognize a builder bot anywhere.",
         "<25>{#f/5}* After the ban on AI programs, we had most of them disabled...",
         "<25>{#f/1}* But the two whose sentience did not corrupt them...",
         "<25>{#f/0}* Were allowed a more graceful retirement.",
         "<25>{#f/0}* It is nice to know that they have survived to this day."
      ],
      s_maze: [
         "<25>{#p/toriel}* Sans has told me all about his brother's fondness for puzzles.",
         "<25>{#f/1}* I hear he has even created some of his own...?",
         "<25>{#f/0}* I am most curious about the \"wall of fire.\"",
         "<25>{#f/1}* Are the flames hot?\n* Or are they merely pleasantly warm?",
         "<25>{#f/5}* For your sake, I would hope it is the latter."
      ],
      s_dogs: [
         "<25>{#p/toriel}{#f/1}* I hear the royal guard employs a pair of married dogs.",
         "<25>{#f/3}* To be married at the same time as being a royal guard...",
         "<25>{#f/4}* That relationship must have some \"interesting\" motivations.",
         "<25>{#f/6}* But what do I know.\n* As Sans would say, I am merely a \"goat!\""
      ],
      s_lesser: [
         "<25>{#p/toriel}* I wonder what kind of food is sold in Starton these days.",
         "<25>{#f/1}* When I was last here, everyone loved to eat ghost fruit...",
         "<25>{#f/0}* A strange food which could be eaten both by ghosts and non-ghosts.",
         "<26>{#f/0}* Whatever the favorite\n  is now, I am sure I could never dream of it."
      ],
      s_bros: [
         "<25>{#p/toriel}{#f/1}* Sans's fondness for spot-the-difference puzzles...",
         "<25>{#f/0}* Well, it has never really made sense to me.",
         "<25>{#f/1}* How could such a simple puzzle be appealing to him?",
         "<26>{#f/3}* ... more specifically...",
         "<25>{#f/1}* Where is the humor in such a puzzle?"
      ],
      s_spaghetti: [
         "<25>{#p/toriel}* Sans has often spoken of Papyrus's interest in spaghetti dishes.",
         "<25>{#f/6}* But why stop there?\n* Just imagine the PASTABILITIES...",
         "<25>{#f/8}* Rigatoni!\n* Fettuccine!\n* Acini di Pepe!",
         "<25>{#f/0}* Some variety could really help him go FARFALLE.",
         "<25>{#f/2}* ... in other words, go BIGOLI or go home!"
      ],
      s_puzzle1: [
         "<25>{#p/toriel}{#f/1}* Whatever the puzzles in Starton are like now, I am sure...",
         "<25>{#f/0}* They are nothing like the ones that were here when I left.",
         "<25>{#f/5}* A level of difficulty so unrealistic...",
         "<25>{#f/5}* It is a wonder anyone could solve them at all."
      ],
      s_puzzle2: [
         "<25>{#p/toriel}{#f/1}* They say some puzzles have secret solutions...",
         "<25>{#f/0}* ... a statement I find utterly unbelievable!",
         "<25>{#f/0}* A secret solution would defeat the whole purpose of a puzzle.",
         "<25>{#f/1}* Puzzles, at least ones with realistic difficulty...",
         "<25>{#f/2}* Should be solved the intended way only!"
      ],
      s_jenga: [
         "<25>{#p/toriel}* To my knowledge, Dr. Alphys is the current royal scientist.",
         "<25>{#f/1}* She may never replace the experience of Dr. Roman, but...",
         "<25>{#f/0}* I am sure she is more than capable of finding her own path forward.",
         "<25>{#f/0}* This may surprise you, but I have a certain respect for scientists.",
         "<25>{#f/2}* Such brilliant minds!"
      ],
      s_pacing: [
         "<25>{#p/toriel}{#f/1}* You would be wise to steer clear of dubious salesfolk...",
         "<25>{#f/0}* For you never know what strings they may pull.",
         "<25>{#f/0}* Or what moon rocks may end up falling into your lap.",
         "<25>{#f/3}* It is a lesson I have learned the hard way, unfortunately..."
      ],
      s_puzzle3: [
         "<25>{#p/toriel}{#f/1}* The puzzle in this room is one of memorization, is it not?",
         "<25>{#f/1}* Sans mentioned that his brother often updates the pattern...",
         "<25>{#f/0}* ... to maintain a strong \"rotating password.\"",
         "<25>{#f/6}* How silly!",
         "<25>{#f/0}* In the Outlands, our memorization puzzles update on-demand."
      ],
      s_greater: [
         "<25>{#p/toriel}{#f/1}* The old owner of that doghouse, Canis Maximus...",
         "<25>{#f/0}* ... retired from the guard a long while ago.",
         "<25>{#f/7}* Fortunately, its new owner is said to be a bundle of puppy energy!",
         "<25>{#f/0}* At least that is what I have heard through the exoberry-vine."
      ],
      s_math: [
         "<25>{#p/toriel}{#f/1}* Please, can somebody explain \"dog justice?\"",
         "<25>{#f/0}* It is an odd phrase I continue to hear every so often.",
         "<25>{#f/5}* I do know of one little puppy that visits the Outlands sometimes...",
         "<25>{#f/0}* Perhaps that is who is deserving of justice."
      ],
      s_bridge: [
         "<25>{#p/toriel}{#f/1}* When this bridge was first constructed...",
         "<25>{#f/0}* Its precarious nature prompted an upgrade to the outpost's systems.",
         "<25>{#f/0}* In short time, the aptly-named \"gravity guardrails\" were added.",
         "<25>{#f/0}* These are what prevent you from falling off the platforms."
      ],
      s_town1: [
         "<25>{#p/toriel}{#f/0}* Ah...\n* The town of Starton.",
         "<25>{#f/1}* I have heard much about a \"Grillby's\" there...",
         "<25>{#f/0}* ... and its diverse array of patrons both new and old.",
         "<25>{#f/0}* Sans often goes there to eat, you see.",
         "<25>{#f/7}* I hear the bartender is quite \"hot.\""
      ],
      s_taxi: [
         "<25>{#p/toriel}{#f/1}* A taxi stop near town?",
         "<25>{#f/1}* ... hmm...",
         "<25>{#f/0}* I wonder if it is any different from the one in the Outlands.",
         "<25>{#f/1}* Of course, I would have no way of knowing until I saw it...",
         "<25>{#f/0}* Which I have no way of doing without a fancy telescope.",
         "<25>{#f/0}* I wonder where I could find one of those."
      ],
      s_town2: [
         "<25>{#p/toriel}{#f/1}* Napstablook recently told me they opened a shop...",
         "<25>{#f/5}* ... on the \"south side\" of town.",
         "<25>{#f/1}* What could this mean?",
         "<25>{#f/0}* The town I remember organizing was a large, unified square.",
         "<25>{#f/1}* Perhaps there was a split at some point?",
         "<25>{#f/5}* That would be a shame, considering the original vision..."
      ],
      s_battle: [
         "<25>{#p/toriel}{#f/1}* The thing Sans seemed most eager to warn me about...",
         "<25>{#f/0}* Was his brother's so- called \"special attack.\"",
         "<25>{#f/1}* If Papyrus chooses to spar with you, you must avoid it at all costs.",
         "<25>{#f/2}* I repeat, avoid the special attack!\n* At all costs!",
         "<25>{#f/0}* That is all I have to say on this matter."
      ],
      s_exit: [
         "<25>{#p/toriel}{#f/1}* If you ever decide to leave Starton, you must understand...",
         "<25>{#f/5}* My phone is old, and can only reach certain rooms in the factory.",
         "<25>{#f/9}* It would be difficult to call me until you find your way out.",
         "<25>{#f/1}* Forgive me.\n* I just thought that I should let you know."
      ],
      f_entrance: [
         "<25>{#p/toriel}{#f/7}* So you found a place in the factory with good reception...?",
         "<25>{#f/1}* ... that must mean you are somewhere unenclosed...",
         "<25>{#f/0}* Which also implies the nearby presence of synth-bushes.",
         "<25>{#f/3}* Those things are terrible to get stuck in...",
         "<25>{#f/4}* Getting you all itchy and scratchy...",
         "<25>{#f/0}* Fortunately, I know you are smart enough not to run into them."
      ],
      f_bird: () =>
         SAVE.data.n.plot !== 47.2 && SAVE.data.n.plot > 42 && SAVE.data.s.state_foundry_deathroom !== 'f_bird' // NO-TRANSLATE

            ? [
                 "<25>{#p/toriel}{#f/0}* There truly is nothing like the chirp of that fearless little bird.",
                 "<25>{#f/1}* Even when it still lived within a bucket of water...",
                 "<25>{#f/1}* It would fly its mighty little wings...",
                 "<25>{#f/1}* Taking us places...",
                 "<25>{#f/0}* I used its services to carry groceries often.",
                 "<25>{#f/5}* ... back when we as a species all lived in that old factory."
              ]
            : [
                 "<25>{#p/toriel}{#f/5}* Things sound awfully silent where you are...",
                 "<25>{#f/5}* Almost like there is something missing.",
                 "<25>{#f/5}* Something important...",
                 "<25>{#f/0}* Well, no matter.\n* My imagination does run wild sometimes.",
                 "<25>{#f/1}* ...",
                 "<25>{#f/1}* Chirp, chirp, chirp, chirp, chirp..."
              ],
      f_taxi: [
         "<25>{#p/toriel}{#f/1}* So you found the factory's taxi stop...?",
         "<25>{#f/0}* Perhaps you could use it to escape that royal guard captain.",
         "<25>{#f/1}* A visitor here once spoke of her obsession with spears...",
         "<25>{#f/0}* How odd.\n* The captain I knew was into sabers."
      ],
      f_battle: [
         "<25>{#p/toriel}{#f/0}* Ah, there you are.",
         "<25>{#f/0}* You're at the edge of the factory there.",
         "<26>{#f/1}* From this point forward, I do not know what lies ahead of you...",
         "<25>{#f/5}* Before I left, there was only an elevator to the Citadel.",
         "<25>{#f/1}* Now, however, exists the area called \"Aerialis...\"",
         "<25>{#f/23}* ... I wonder who came up with THAT name."
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
      a_elevator3: toriel_aerialis
   },
   c_call_toriel_early: () =>
      game.room === 'w_bridge' || game.room.startsWith('w_alley') // NO-TRANSLATE

         ? [ "<25>{#p/toriel}{#f/3}* ...", "<25>{#f/2}* Come back to the house this instant!" ]
         : [
              3 <= SAVE.data.n.cell_insult
                 ? "<25>{#p/toriel}{#f/23}* Are you not exhausted after how you behaved towards me?"
                 : SAVE.data.n.state_wastelands_napstablook === 5
                 ? "<25>{#p/toriel}{#f/1}* Are you not exhausted after waiting so long?"
                 : "<25>{#p/toriel}{#f/1}* Are you not exhausted after all you have been through?",
              3 <= SAVE.data.n.cell_insult
                 ? game.room.startsWith('w_toriel') // NO-TRANSLATE

                    ? "<25>{#f/0}* Perhaps you should see the bed I made for you in the guest room."
                    : "<25>{#f/0}* Perhaps you should see the bed I made for you at the house."
                 : game.room.startsWith('w_toriel') // NO-TRANSLATE

                 ? "<25>{#f/0}* Come to the hallway, and I will show you something."
                 : "<25>{#f/0}* Come to the house, and I will show you something."
           ],
   c_call_toriel_late: () =>
      SAVE.data.n.plot === 8.1
         ? [ "<32>{#p/human}* (But the line was busy.)" ]
         : game.room === 'w_bridge' || game.room.startsWith('w_alley') // NO-TRANSLATE

         ? [ "<25>{#p/toriel}{#f/3}* ...", "<25>{#f/2}* Come back to the house this instant!" ]
         : [
              "<25>{#p/toriel}{#f/1}* There is no need to call me over the phone, my child.",
              3 <= SAVE.data.n.cell_insult
                 ? "<26>{#f/23}* We already know what that tends to result in."
                 : game.room === 'w_toriel_living' // NO-TRANSLATE

                 ? toriCheck()
                    ? "<25>{#f/0}* After all, I am here in the room with you."
                    : "<25>{#f/0}* I will be done in just a moment."
                 : game.room.startsWith('w_toriel') // NO-TRANSLATE

                 ? toriCheck()
                    ? "<25>{#f/0}* If you want to see me, you can wait in the living room."
                    : "<25>{#f/0}* If you want to see me, you can come to the living room."
                 : "<25>{#f/0}* If you want to see me, you can come to the house."
           ],
   c_call_tunnel: pager.create(
      0,
      [ "<25>{#p/toriel}{#f/5}* Frisk?", "<25>{#f/5}* Is that you...?" ],
      [ "<25>{#p/toriel}{#f/5}* Hello...?" ],
      [ "<25>{#p/toriel}{#f/5}* ..." ]
   ),

   s_save_outlands: {
      w_courtyard: {
         name: "外域 - 空地",
         text: () =>
            SAVE.data.n.plot > 16
               ? [
                    6 <= world.population
                       ? "<32>{#p/human}* (Even when visiting, this little home fills you with determination.)"
                       : "<32>{#p/human}* (Even when visiting, this house fills you with determination.)"
                 ]
               : 6 <= world.population
               ? [ "<32>{#p/human}* (This cute little home fills you with determination.)" ]
               : [ "<32>{#p/human}* (A house amidst the metallic walls fills you with determination.)" ]
      },
      w_entrance: {
         name: "外域 - 入口",
         text: () =>
            world.runaway
               ? [
                    "<32>{#p/human}* （繁忙的外域如今一片死寂，\n  这使你充满了决心。）",
                    "<32>{#p/human}* （HP已回满。）"
                 ]
               : SAVE.data.n.plot < 48
               ? [
                    "<32>{#p/human}* （繁忙的外域就在前方，\n  这使你充满了决心。）",
                    "<32>{#p/human}* （HP已回满。）"
                 ]
               : [
                    "<32>{#p/human}* (Returning to where it all began, after so long...)",
                    "<32>{#p/human}* (This fills you with determination.)",
                    "<32>{#p/human}* （HP已回满。）"
                 ]
      },
      w_froggit: {
         name: "外域 - 休息区",
         text: () =>
            world.runaway
               ? [
                    "<32>{#p/human}* （空气质量变得很差，\n  但你还是充满了决心。）",
                    "<32>{#p/human}* （HP已回满。）"
                 ]
               : SAVE.data.b.svr
               ? [
                    "<32>{#p/human}* （这里已经没什么人，\n  但空气还是清新的。）",
                    "<32>{#p/human}* （当然，这使你充满了决心。）",
                    "<32>{#p/human}* （HP已回满。）"
                 ]
               : world.population > 5
               ? [
                    "<32>{#p/human}* （见到这些奇异的生物\n  使你充满了决心。）",
                    "<32>{#p/human}* （HP已回满。）"
                 ]
               : SAVE.data.n.plot < 8.1
               ? [
                    "<32>{#p/human}* （空气变得浑浊了起来。）\n* （不知怎地，这使你充满了决心。）",
                    "<32>{#p/human}* （HP已回满。）"
                 ]
               : SAVE.data.n.state_wastelands_toriel === 2
               ? [
                    "<32>{#p/human}* （这里变得死气沉沉。）\n* （当然，这使你充满了决心。）",
                    "<32>{#p/human}* （HP已回满。）"
                 ]
               : [
                    "<32>{#p/human}* （空气仍然很浑浊。）\n* （不知怎地，这使你充满了决心。）",
                    "<32>{#p/human}* （HP已回满。）"
                 ]
      },
      w_mouse: {
         name: "外域 - 䗌螨巢",
         text: () =>
            world.population > 5 && !SAVE.data.b.svr && !world.runaway
               ? [
                    "<32>{#p/human}* （想到䗌螨有朝一日会探出头来...）",
                    "<32>{#p/human}* （你充满了蚗心。）"
                 ]
               : [
                    "<32>{#p/human}* （就算䗌螨大概\n  再也不会探出头来...）",
                    "<32>{#p/human}* （你还是充满了蚗心。）"
                 ]
      },
      w_start: {
         name: "坠落点",
         text: []
      }
   }
};


// END-TRANSLATE

export default text;
