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
            : [ "<32>{#p/basic}* 這裡有一扇門。\n* 鎖住了。" ],
      secret2: [ "<32>{#p/human}* (You use the Secret Key.)" ],
      exit: [ choicer.create("* （離開外域嗎？）", "是", "否") ],
      nosleep: [ "<32>{#p/human}* （好像有什麼\n  打擾了你休息。）" ],
      noequip: [ "<32>{#p/human}* （你不打算這麼做。）" ],
      finaltext: {
         a: [ "<32>{#p/basic}* 他肯定就在附近..." ],
         b: [ "<32>{#p/basic}* 等等...？", "<32>{#p/basic}* 那邊站著的...\n* 是他嗎？" ],
         c: [
            "<32>{#p/basic}* ...真的是他。",
            "<32>* ...\n* Frisk，如果你準備好了...",
            "<32>* 如果你已見過每一位\n  重要的朋友，想見的人...",
            "<32>* ...",
            "<32>* 你知道該做什麼。",
            "<32>* 否則，我會耐心等待。\n  直到你準備好。"
         ],
         d1: [ "<32>{#p/basic}* Asriel。" ],
         d2: [ "<25>{#p/asriel1}{#f/13}* ...Frisk？\n* 是你嗎...？" ],
         d3: [ "<32>{#p/basic}* Asriel，是我啊...", "<32>{#p/basic}* 記得我嗎，你最好的朋友？" ],
         d4: [
            "<25>{#p/asriel1}{#f/25}* ...！",
            "<25>{#f/25}* $(name)...？",
            "<25>{#f/13}* 可是... 你...",
            "<25>{#f/23}* ...你已經..."
         ],
         d5: [ "<32>{#p/basic}* 死了？" ],
         d6: [
            "<32>{#p/basic}* 呵。\n* 很長一段時間裡...\n  有時我真希望當時就死了。",
            "<32>{#p/basic}* 我對你做了那種事，我...\n  我就活該去死。"
         ],
         d7: [ "<25>{#p/asriel1}{#f/7}* 別這麼說， $(name)！", "<25>{#f/6}* ...你錯了！" ],
         d8: [
            "<33>{#p/basic}* 哈哈... 瞧瞧是誰在反駁。\n* “去找愛你的人”先生。",
            "<32>* 但是，Asriel...\n  是時候告訴你真相了。",
            "<32>* 關於我的，我的一切。"
         ],
         d9: [ "<25>{#p/asriel1}{#f/23}* ...", "<25>{#f/23}* 但是..." ],
         d10: [ "<25>{#p/asriel1}{#f/13}* $(name)...", "<25>{#f/15}* 你是怎麼..." ],
         d11: [
            "<32>{#p/basic}* ...那重要嗎？",
            "<32>* 重要的是，我一直都不是什麼好人。\n  這就是要告訴你的真相。",
            "<32>* 所以，你之前不記得我，\n  把我遺忘... 我不怪你。",
            "<32>* 而且，我也不配做\n  你的朋友，你的兄弟。"
         ],
         d12: [ "<25>{#p/asriel1}{#f/13}* $(name)，我..." ],
         d13: [ "<32>{#p/basic}* 別傷心，Asriel。", "<32>* 沒必要逼自己覺得\n  我是個好人。" ],
         d14: [ "<25>{#p/asriel1}{#f/22}* ...", "<25>{#f/22}* ...為什麼現在說這些？" ],
         d15: [
            "<32>{#p/basic}* 其實...",
            "<32>* 曾經，我一直覺得人性本惡。",
            "<32>* 也就是說...",
            "<32>* 只要你是個人類，\n  不管經歷什麼，最終必定墮入黑暗。",
            "<32>* 但在我目睹了Frisk的整段旅程，\n  見證了Frisk所做的一切後...",
            "<32>* 我才知道真相。",
            "<32>* 別的人類... \n  他們傷害怪物，欺負怪物。\n* 更有甚者，把他們...",
            "<33>* 所以，我一直對真相視而不見。",
            "<32>* 但Frisk不是。",
            "<32>* 無論面對什麼困難，\n  Frisk總是施以善意，報以仁慈。",
            "<32>* 是Frisk... \n  讓我看清自己的錯誤。",
            "<32>* 所以，現在我不該繼續逃避責任。",
            "<32>* 讓你受了那麼多苦，\n  失去那麼多重要的東西。",
            "<32>* 都是我的錯。"
         ],
         d16: [ "<25>{#p/asriel1}{#f/13}* 對了，$(name)...", "<25>{#f/15}* 這段時間裡，\n  你一直都有自己的意識嗎？" ],
         d17: [
            "<32>{#p/basic}* ...對，應該是這樣。",
            "<32>* 在咱們死後，\n  我就是以這種形態\n  繼續“活著”的。",
            "<32>* 而且，我還有些話想跟你說。"
         ],
         d18: [ "<25>{#p/asriel1}{#f/21}* 是什麼？" ],
         d19: [
            "<32>{#p/basic}* 還記得嗎？",
            "<32>* 咱們一起穿過力場，\n  到達故園的廢墟時，\n  被那夥人類發現了。",
            "<32>* 那時，\n  我打算用咱們的力量消滅他們...\n  但你阻止了我，還記得嗎？"
         ],
         d20: [ "<25>{#p/asriel1}{#f/16}* ...當然。" ],
         d21: [
            "<32>{#p/basic}* 那時，我不理解\n  你為什麼要那麼做...",
            "<32>* 但現在我明白了。",
            "<32>* 你那麼做... 是不想讓我鑄成大錯。"
         ],
         d22: [ "<25>{#p/asriel1}{#f/15}* $(name)..." ],
         d23: [
            "<32>{#p/basic}* 如果沒有你，\n  前哨站就會在又一次戰爭中\n  徹底毀滅。",
            "<32>* 如果沒有你，\n  那些我想拯救的怪物們...",
            "<32>* ...就要與我們一同陪葬。"
         ],
         d24: [ "<25>{#p/asriel1}{#f/25}* $(name)，我..." ],
         d25: [
            "<32>{#p/basic}* 即使是現在，你當時的選擇仍然很重要。",
            "<32>* 即使是現在...",
            "<32>* 你仍然是最好的兄弟姐妹。"
         ],
         d26: [
            "<25>{#p/asriel1}{#f/25}* 我原諒你，$(name)！",
            "<25>{#f/23}* 好吧？\n* 你不必這麼做的...",
            "<25>{#f/22}* 我知道你當時的感受有多強烈，而且...",
            "<25>{#f/15}* 我不想你因為我改變想法..."
         ],
         d27: [
            "<32>{#p/basic}* 不。\n* 不用說了。",
            "<32>* 人人都會改變，Asriel...",
            "<32>* 這不是你一直相信的嗎？"
         ],
         d28: [ "<25>{#p/asriel1}{#f/13}* ...是的。" ],
         d29: [
            "<32>{#p/basic}* 過去的一百年中，我一直在自責。",
            "<32>* 過去的一百年中，我一直懷恨在心。",
            "<32>* 那段時間，我一直在想是什麼讓我活著...",
            "<32>* 現在，我終於知道答案了。"
         ],
         d30: [ "<25>{#p/asriel1}{#f/15}* ...？" ],
         d31: [ "<32>{#p/basic}* ...是你，Asriel。", "<32>* 是你一直在支撐我活下去。" ],
         d32: [
            "<32>{#p/basic}* 像是一種...沒有兌現的承諾。",
            "<32>* 懷恨在心...像我一樣想著你...",
            "<32>* 知道我本可以為你付出比最終更多的努力。",
            "<32>* 一直以來，這就是阻止我前進的原因。"
         ],
         d33: [ "<25>{#p/asriel1}{#f/23}* $(name)..." ],
         d34: [ "<32>{#p/basic}* Asriel。\n* 我的兄弟。", "<32>* 你應該知道真相。" ],
         d35: [ "<25>{*}{#p/asriel1}{#f/25}* 嗯？\n* 但是你早就- {%}" ],
         d36: [ "<32>{#p/basic}* 我也原諒你。" ],
         d37: [ "<25>{#p/asriel1}{#f/30}{#i/4}* ...！", "<25>{#p/asriel1}{#f/26}{#i/4}* $(name)..." ],
         d38: [ "<32>{#p/basic}* 噓...", "<32>* It's alright.", "<32>* 我懂你了，好嗎？" ],
         d39: [ "<25>{#p/asriel1}{#f/25}{#i/4}* 我..." ],
         d40: [ "<32>{#p/basic}* 我懂你，Asriel。" ],
         d41: [
            "<32>{#p/basic}* ...我能感覺到。",
            "<32>* 即使過去了一百年...",
            "<32>* 他還在這，對吧？",
            "<32>* 就像個小天使一樣...",
            "<32>* 守護我，保護我不受錯誤決定影響...",
            "<32>* ...所有這些都是為了有一天我能報答他。"
         ],
         d42: [ "<32>{#p/basic}* 這一切開始有意義了。", "<32>* 我知道我該怎麼做。" ],
         d43: [ "<25>{*}{#p/asriel1}{#f/25}* 哈？\n* 你要... {^60}{%}" ],
         d44: [ "<25>{*}{#f/25}* 不...！{^60}{%}", "<25>{*}{#f/26}* 讓...讓我走！{^60}{%}" ],
         d45: [ "<32>{*}{#p/basic}* 呵...{^60}{%}", "<32>{*}* ...替我照顧好爸爸媽媽，好嗎？{^60}{%}" ],
         d46: [ "<25>{#p/asriel1}{#f/25}* Frisk，你在那裡嗎？", "<25>{#f/22}* 拜託了...醒來吧..." ],
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
            choicer.create("* （你要怎麼回答？）", "是", "否")
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
      evac: [ "<32>{#p/human}* （你感覺周圍的怪物越來越少了。）" ],
      stargum1: () =>
         SAVE.data.b.svr
            ? [
                 "<32>{#p/human}* （你發現漫畫上\n  “附贈”了一塊口香糖...）",
                 choicer.create("* （嚼它嗎？）", "是", "否")
              ]
            : [
                 "<32>{#p/basic}* 漫畫封面上附了一塊口香糖。",
                 choicer.create("* （嚼它嗎？）", "是", "否")
              ],
      stargum2: [ "<32>{#p/human}* （你決定不嚼。）" ],
      stargum3: [ "<32>{#p/human}* （你回覆了$(x) HP。）" ],
      stargum4: [ "<32>{#p/human}* （HP已回滿。）" ],
      fireplace1: () =>
         SAVE.data.b.svr
            ? [
                 "<32>{#p/human}* （壁爐的溫暖讓你無法抗拒...）",
                 choicer.create("* （爬進去嗎？）", "是", "否")
              ]
            : [
                 SAVE.data.n.state_wastelands_toriel === 2 || world.runaway
                    ? "<32>{#p/basic}* 一個普通的壁爐。"
                    : "<32>{#p/basic}* Toriel的壁爐。\n* 裡面並不燙，而是暖暖的，\n  很舒服。",
                 ...(world.darker
                    ? []
                    : [ "<32>* 你甚至可以爬進去。", choicer.create("* （爬進去嗎？）", "是", "否") ])
              ],
      fireplace2a: [ "<32>{#p/human}* （你不打算爬進去。）" ],
      fireplace2b: () => [
         "<32>{#p/human}* （你爬進壁爐，\n  它的溫暖緊緊將你包圍。）",
         "<32>{#p/human}* （你感到十分舒適。）",
         ...(SAVE.data.b.svr
            ? asrielinter.fireplace2b++ < 1
               ? [ "<25>{#p/asriel1}{#f/13}* 呃，我會在這等你出來的。" ]
               : []
            : world.goatbro && SAVE.flag.n.ga_asrielFireplace++ < 1
            ? [ "<25>{#p/asriel2}{#f/15}* 呃，我就在這等你出來吧..." ]
            : [])
      ],
      fireplace2c: [ "<25>{#p/toriel}{#f/1}{#npc/a}* 別在裡面待太久了..." ],
      fireplace2d: [ "<32>{#p/basic}* ...", "<32>* 挺舒服的。" ],
      noticereturn: [ "<25>{#p/asriel2}{#f/10}* 之前有什麼東西\n  忘在這了嗎？" ],
      noticestart: [
         "<25>{#p/asriel2}{#f/3}* 啊，這就是一切開始的地方。",
         "<25>{#p/asriel2}{#f/4}* $(name)，記得嗎？\n  從那以後，無論去哪裡，\n  我們都是在一起的。"
      ],
      noticedummy: [ "<25>{#p/asriel2}{#f/3}* ...", "<25>{#p/asriel2}{#f/10}* 這裡以前\n  應該有個人偶吧...？" ],
      afrog: {
         a: [
            "<32>{#p/basic}{#n1}* 偷偷告訴你一件事喔...",
            "<32>* 剛才我看到那位羊女士\n  從這經過。",
            "<32>* 她買了很多吃的，於是我問她\n  這些是用來幹什麼的。她說...",
            "<32>* 嘿嘿，有驚喜等著你喔。"
         ],
         b: () =>
            SAVE.data.n.plot === 72
               ? [
                    "<32>{#p/basic}{#n1}* 偷偷告訴你一件事喔...",
                    "<32>* I saw that goat lady come through here earlier.",
                    "<32>* She said it was time to \"confront her fears.\"",
                    "<32>* Well, whatever she did clearly led to something!\n* We're all free now!"
                 ]
               : SAVE.data.b.w_state_lateleave
               ? [
                    "<32>{#p/basic}{#n1}* 偷偷告訴你一件事喔...",
                    "<32>* I saw that goat lady take the taxi to the supermarket earlier.",
                    "<32>* She said she was going off to buy milk, but she still hasn't come back...",
                    "<32>* I hope she's alright."
                 ]
               : [
                    "<32>{#p/basic}{#n1}* 偷偷告訴你一件事喔...",
                    "<32>* Sometimes, when I'm alone, I like to ride the taxi to the marketplace.",
                    "<32>* It's a quaint little shop, but there's loads of stuff to buy.",
                    "<32>* Maybe I'll take you there sometime... you'd adore it!"
                 ],
         c: () =>
            SAVE.data.n.plot === 72
               ? [
                    "<32>{#p/basic}{#n1}* 偷偷告訴你一件事喔...",
                    "<32>* I'm not a fan of how you beat us all up at first.",
                    "<32>* We were all so scared and confused...",
                    "<32>* ... at least you did something good in the end."
                 ]
               : [
                    "<32>{#p/basic}{#n1}* 偷偷告訴你一件事喔...",
                    "<32>* The people you've been beating up aren't happy about it.",
                    "<32>* Just be glad I'm off-duty...\n* 'Cause otherwise...",
                    "<32>* I'd have your head."
                 ],
         d: [ "<32>{#p/basic}{#n1}* No... no!", "<32>* G-get away from me!" ]
      },
      asriel2: [
         "<25>{#p/asriel2}{#f/1}* 準備好了？",
         "<25>{#f/2}* 邁出這一步後，\n  可就再也沒有回頭路了。",
         choicer.create("* （跟上他嗎？）", "是", "否")
      ],
      asriel2b: [ "<25>{#p/asriel2}{#f/1}* 準備好了？", choicer.create("* （跟上他嗎？）", "是", "否") ],
      asriel3: [ "<25>{#p/asriel2}{#f/2}* 好...", "<25>{#f/1}* 我們前進吧。" ],
      asriel4: [ "<25>{#p/asriel2}{#f/4}* 我會等你準備好的。" ],
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
            ...(SAVE.data.b.svr ? [] : [ "<32>{#p/basic}* 衣架上掛了個揹包。" ]),
            "<32>{#p/human}* （你往揹包裡瞅了一眼...）",
            ...(SAVE.data.b.svr
               ? [ "<32>{#p/human}* （但裡面什麼都沒有。）" ]
               : [ "<32>{#p/basic}* 沒有其他東西了。" ])
         ],
         b: () => [
            ...(SAVE.data.b.svr ? [] : [ "<32>{#p/basic}* 衣架上掛了個揹包。" ]),
            "<32>{#p/human}* （你往揹包裡瞅了一眼...）",
            ...(SAVE.data.b.svr
               ? []
               : [ "<32>{#p/basic}* 這是什麼？\n* 限量版的“超級星之行者”漫畫？" ]),
            "<32>{#s/equip}{#p/human}* （你獲得了“超級星之行者2”。）"
         ],
         b2: () => [
            ...(SAVE.data.b.svr ? [] : [ "<32>{#p/basic}* 衣架上掛了個揹包。" ]),
            "<32>{#p/human}* （你往揹包裡瞅了一眼...）",
            ...(SAVE.data.b.svr
               ? []
               : [ "<32>{#p/basic}* 這是什麼？\n* 限量版的“超級星之行者”漫畫？" ]),
            "<32>{#p/human}* （你帶的東西太多，裝不下它了。）"
         ]
      },
      bedfailToriel: [
         "<25>{#p/toriel}{#f/5}* Oh dear.",
         "<25>{#f/1}* Perhaps my actions have done more harm than I first imagined...",
         "<25>{#f/0}* ...\n* Worry not, my child.",
         "<25>* 好好休息。\n  然後，以飽滿的狀態\n  去迎接之後的旅程。",
         "<32>{#p/human}* (Toriel sits next to you and sings a lullaby to put you to sleep.)"
      ],
      blooky1: [
         "<32>{#p/napstablook}* Zzz... Zzz...",
         "<32>* Zzz... Zzz...",
         "<32>{#p/basic}* 這隻幽靈不停地大聲說“z”，\n  假裝自己在睡覺。",
         choicer.create("* （“踩”過去嗎？）", "是", "否")
      ],
      blooky2: [
         "<32>{#p/basic}* 幽靈還是把路擋著。",
         choicer.create("* （“踩”過去嗎？）", "是", "否")
      ],
      blooky3: [
         "<32>{#p/napstablook}* 我經常來這邊\n  因為這裡很寧靜...",
         "<32>* 但是今天我碰到了很好的人...",
         "<32>* 喔，我不擋你路了",
         "<32>* 回見..."
      ],
      blooky4: [
         "<32>{#p/napstablook}* 呃，所以...\n* 你真的挺喜歡我的，是吧",
         "<32>* 嘿... 謝謝你...",
         "<32>* 還有，嗯... \n  對不起之前擋了你的路...",
         "<32>* 我現在要到...\n* 別的地方去了...",
         "<32>* 回見..."
      ],
      blooky5: [
         "<32>{#p/napstablook}* 呃，好吧...\n  看來，你打心底裡厭惡我",
         "<32>* 這樣... 也挺好的...",
         "<32>* 好吧，我要忙自己的事去了",
         "<32>* 拜拜..."
      ],
      blooky6: [
         "<32>{#p/napstablook}* 呃... 發生了什麼...",
         "<32>* ...",
         "<32>* 喔... 我得走了",
         "<32>* 回見..."
      ],
      blooky7: [
         "<32>{#p/napstablook}* 你甚至連句話都沒有...？",
         "<32>* 你... 我都不知道\n  你到底怎麼了...",
         "<32>* 好吧，我走了",
         "<32>* 拜拜..."
      ],
      breakfast: [ "<32>{#p/human}* （你得到了焗蝸牛。）" ],
      breakslow: [ "<32>{#p/human}* （你帶的東西太多，裝不下它了。）" ],
      candy1: () =>
         SAVE.data.b.svr
            ? [
                 "<32>{#p/human}* (You approach the vending machine.)",
                 choicer.create("* （你想合成什麼呢？）", "怪物糖果", "水", "大麻素", "放棄")
              ]
            : [
                 "<32>{#p/basic}* 要用這臺機器合成什麼呢？",
                 choicer.create("* （你想合成什麼呢？）", "怪物糖果", "水", "大麻素", "放棄")
              ],
      candy2: [ "<32>{#p/human}* （你得到了$(x)。）\n* （按[C]打開選單。）" ],
      candy3: [ "<32>{#p/human}* （你得到了$(x)。）" ],
      candy4: () => [
         "<32>{#p/human}* （你得到了$(x)。）",
         ...(SAVE.data.b.svr ? [] : [ "<32>{#p/basic}* 機器開始出現異常了。" ])
      ],
      candy5: () => [
         "<32>{#p/human}* （你得到了$(x)。）",
         ...(SAVE.data.b.svr ? [] : [ "<32>{#p/basic}* 機器壞掉了。" ])
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
      candy7: [ "<32>{#p/human}* （你打算什麼也不合成。）" ],
      candy8: [ "<32>{#p/human}* （你帶的東西太多了。）" ],
      chair1a: [
         "<25>{#p/toriel}{#f/1}{#n1}* 怎麼了，孩子？\n* 餓了嗎？",
         "<25>{#f/0}* 還是，對我看的這本書\n  比較感興趣？",
         choicer.create("{#n1!}* （你要怎麼回答？）", "餓了", "看書", "回家", "沒事")
      ],
      chair1b: [
         "<25>{#p/toriel}{#n1}* 怎麼了，孩子？",
         choicer.create("{#n1!}* （你要怎麼回答？）", "餓了", "看書", "回家", "沒事")
      ],
      chair1c: [ "<25>{#p/toriel}{#n1}* 需要任何東西隨時告訴我喔。" ],
      chair1d: [ "<25>{#p/toriel}{#n1}* 如果改變主意的話\n  隨時告訴我喔。" ],
      chair1e: [
         "<25>{#p/toriel}{#f/1}{#n1}* 睡不著嗎？",
         "<25>{#f/1}* ...\n* If you like, I can read you this book...",
         "<25>{#f/0}* 書名叫《慷慨的怪物》，\n  是一個人類寫的。",
         choicer.create("{#n1!}* （要聽嗎？）", "是", "否")
      ],
      chair1f: pager.create(
         0,
         [ "<25>{#p/toriel}{#n1}{#f/1}* Back for a visit?", "<25>{#f/0}* Well, feel free to stay as long as you need." ],
         [ "<26>{#p/toriel}{#n1}{#f/5}* I shall remain here, as I always have..." ]
      ),
      chair2a1: [
         "<25>{#p/toriel}{#f/1}{#n1}* Are you hungry?\n* Would you like me to make you a breakfast?",
         choicer.create("{#n1!}* （吃早餐嗎？）", "是", "否")
      ],
      chair2a2: [ "<25>{#p/toriel}{#n1}* 太好了！\n* 我會在廚房做飯。" ],
      chair2a3: [
         "<25>{#p/toriel}{#f/1}{#n1}* Have you changed your mind about breakfast?",
         choicer.create("{#n1!}* （吃早餐嗎？）", "是", "否")
      ],
      chair2a4: () =>
         SAVE.data.b.drop_snails
            ? [
                 "<25>{#p/toriel}{#f/3}{#n1}* 把我做好的早飯扔了，\n  還想讓我再給你做一份？",
                 "<25>{#f/4}* 這小子...",
                 "<25>{#f/0}* No, little one.\n* I will not prepare another breakfast."
              ]
            : [
                 "<25>{#p/toriel}{#n1}* 我已經做過早飯了，小傢伙。",
                 "<25>{#f/1}* 我們不能一天吃兩頓早飯，\n  對吧？",
                 "<25>{#f/0}* 不然，就會讓人覺得很奇怪。"
              ],
      chair2c1: [
         "<25>{#p/toriel}{#n1}* Ah, the book!\n* Yes, it is quite the fun little read.",
         "<25>{#f/0}* It is called \"Generous Monster\" and was written by a human.",
         "<25>{#f/1}* 想讓我把它讀給你聽嗎？",
         choicer.create("{#n1!}* （要聽嗎？）", "是", "否")
      ],
      chair2c2: [ "<25>{#p/toriel}{#n1}* 太好了！", "<25>{#g/torielCompassionSmile}* ..." ],
      chair2c3: [
         "<25>{#p/toriel}{#f/1}{#n1}* Do you want me to read you the book now?",
         choicer.create("{#n1!}* （要聽嗎？）", "是", "否")
      ],
      chair2c4: [
         "<25>{#p/toriel}{#f/1}{#n1}* 你想再聽我讀一遍嗎？",
         choicer.create("{#n1!}* （要聽嗎？）", "是", "否")
      ],
      chair2c5: [ "<25>{#p/toriel}{#f/1}{#n1}* 好，故事從這裡開始...", "<25>{#p/toriel}{#g/torielCompassionSmile}* ..." ],
      chair2c6: [
         "<25>{#f/1}{#n1}* “從前，有一隻怪物...”",
         "<25>{#f/0}* “這個怪物愛上了\n  一個小小的人類。”",
         "<25>{#f/1}* “每天，\n  這個人類都會去找她...”",
         "<25>{#f/0}* “他們一起在田野上\n  奔跑，玩耍。”",
         "<25>{#f/1}* “他們一起唱歌，\n  一起分享故事...”",
         "<25>{#f/0}* “還會一起捉迷藏。”",
         "<25>{#f/1}* “人類玩累了，\n  怪物就會哄人類入睡，\n  幫人類蓋上被子...”",
         "<25>{#f/0}* “人類非常喜歡這個怪物。”",
         "<25>{#f/0}* “怪物也因此感到快樂。”",
         "<25>{#f/1}* “但是，隨著時間流逝，\n  人類漸漸長大，\n  離開了怪物...”",
         "<25>{#f/0}* “怪物則只能孤身一人。”",
         "<25>{#f/1}* “突然有一天，\n  人類回來了...”",
         "<25>{#f/0}* “怪物對人類說：\n  ‘來吧，一起來玩吧！’”",
         "<25>{#f/5}* “‘我已經長大，不能再玩了。’\n  人類這樣回答。”",
         "<25>{#f/1}* “‘我想有一輛車，\n  開著它找一個新家。’”",
         "<25>{#f/5}* “‘對不起，’怪物說道，\n  ‘但是我太窮了，買不起車。’”",
         "<25>{#f/5}* “‘我只有兩條腿，’”",
         "<25>{#f/0}* “‘爬到我的背上，\n  我可以帶你去你\n  想去的地方。’”",
         "<25>{#f/0}* “‘這樣，你就能去到城鎮，\n  感到快樂。’”",
         "<25>{#f/1}* “於是人類爬到\n  怪物的背上...”",
         "<25>{#f/0}* “怪物帶他們去了一個新家。”",
         "<25>{#f/0}* “怪物也因此感到快樂。”",
         "<25>{#f/1}* “但是，人類再次離開了怪物，\n  很久都沒有回來看她。”",
         "<25>{#f/5}* “怪物十分難過。”",
         "<25>{#f/0}* “突然有一天，\n  人類又回來了。”",
         "<25>{#f/1}* “怪物笑得合不攏嘴，\n  她說...”",
         "<25>{#f/1}* “‘來吧，人類！\n  騎在我的背上，\n  讓我帶你去任何地方。’”",
         "<25>{#f/5}* “‘我現在很傷心，\n  沒心情到處轉悠。’\n  人類這樣說道。”",
         "<25>{#f/1}* “‘我想有一個家庭，\n  有自己的孩子...’”",
         "<25>{#f/5}* “‘對不起，\n  但是我給不了你這些。’”",
         "<25>{#f/5}* “‘我只是一隻怪物。’\n  怪物這樣說道，”",
         "<25>{#f/0}* “‘但是，你可以留下來\n  和我待一會，我可以幫你\n  找到一個約會對象。’”",
         "<25>{#f/0}* “‘這樣，你就可以\n  找到心愛之人，感到快樂。’”",
         "<25>{#f/1}* “於是人類留下來，\n  和老朋友待了一會兒...”",
         "<25>{#f/0}* “怪物為其找到了\n  可能喜歡的人。”",
         "<25>{#f/0}* “怪物也因此感到快樂。”",
         "<25>{#f/5}* “人類又一次離開了怪物，\n  很久之後才回來。”",
         "<25>{#f/1}* “當人類最終回來的時候，\n  怪物欣喜若狂...”",
         "<25>{#f/9}* “但她已經連說話\n  都十分困難。”",
         "<25>{#f/1}* “‘來吧，人類。’\n  她低聲說道...”",
         "<25>{#f/1}* “‘讓我帶你去找\n  約會對象吧。’”",
         "<25>{#f/5}* “‘我年歲大了，而且很忙，\n  沒空操心這些。'\n  人類這樣回答。”",
         "<25>{#f/1}* “‘我只是想找個\n  今晚過夜的地方...’”",
         "<25>{#f/5}* “‘對不起，’怪物說，\n  ‘但我沒有適合你的床。’”",
         "<25>{#f/5}* “‘我還是太窮了，\n  連一張床都買不起。’”",
         "<25>{#f/0}* “‘和我一起睡吧。’”",
         "<25>{#f/0}* “‘這樣，你就可以獲得休息，\n  感到快樂。’”",
         "<25>{#f/1}* “於是，人類躺在了\n  怪物懷裡...”",
         "<25>{#f/0}* “怪物伴著人類入睡。”",
         "<25>{#f/0}* “怪物也因此感到快樂。”",
         "<25>{#f/5}* “...但心中另有所思。”",
         "<25>{#f/9}* “...很久很久以後，\n  人類終於回到了怪物身邊。”",
         "<25>{#f/5}* “‘對不起，人類。’怪物說，\n  ‘但我的生命快走到盡頭了。‘”",
         "<25>{#f/5}* “‘我的腿腳不聽使喚了，\n  沒法帶你去任何地方。’”",
         "<25>{#f/10}* “‘我哪兒也不想去了，’\n  人類說。”",
         "<26>{#f/5}* “‘我找不到約會對象了，\n  我認識的人都不在了。’”",
         "<25>{#f/10}* “‘我不需要什麼約會了。’”",
         "<25>{#f/5}* “我身體很虛弱，\n  你也不能睡在我身上了。’”",
         "<25>{#f/10}* “‘我不需要多少休息了。’”",
         "<25>{#f/5}* “‘我很抱歉，’怪物嘆息道。”",
         "<25>{#f/5}* “‘我希望我還能為你做什麼，\n  但我已經一無所有。’”",
         "<25>{#f/9}* “‘我現在只是一個\n  快要死去的老怪物。’”",
         "<25>{#f/5}* “‘對不起...’”",
         "<25>{#f/10}* “‘我現在不需要太多，’\n  人類說。”",
         "<25>{#f/10}* “‘只想在死前擁抱一下\n  我最好的朋友。’”",
         "<25>{#f/1}* “‘好，’怪物挺直腰板...”",
         "<25>{#f/0}* “‘你的朋友，這隻老怪物\n  永遠在這裡等著你。’”",
         "<25>{#f/0}* “‘來吧，人類，到我這裡來。\n  最後一次和我在一起。’”",
         "<25>{#f/9}* “人類走了過去。”",
         "<25>{#f/10}* “怪物... 十分快樂。”"
         
      ],
      chair2c7: [ "<25>{#f/0}{#n1}* 嗯，故事講完了。", "<25>{#f/1}* 希望你能喜歡這個故事..." ],
      chair2c8: [ "<25>{#f/0}{#n1}* 嗯，講完了。" ],
      chair2d1: [
         "<25>{#p/toriel}{#f/1}{#n1}* 回家...？\n* 能說的具體點嗎？",
         "<32>{#p/human}{#n1!}* （你要怎麼回答？）{!}\nµµµµµµµµ　　　　　µµµµµ什麼時候　\nµµµµµµµµ別放在心上µµµµµ可以回家？{#c/0/8/6}"
      ],
      chair2d2: [
         "<25>{#p/toriel}{#f/1}{#n1}* 但... 這裡就是你的家啊，\n  不是嗎？",
         "<32>{#p/human}{#n1!}* (What do you say?){!}\nµµµµµµµµµµµµµµµµµµHow to exit\nµµµµµµµµSorryµµµµµthe Outlands{#c/0/8/2}"
      ],
      chair2d3: [
         "<25>{#p/toriel}{#f/5}{#n1}* 請你... 理解一下...",
         "<25>{#p/toriel}{#f/5}{#n1}* 我這麼做都是為了你好。"
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
            : [ "<32>{#p/basic}* 一把舒適的扶椅。", "<32>* 大小正好適合Toriel。" ],
      chair4: [ "<25>{#p/toriel}{#n1!}* 啊，你醒了。", "<25>* I have left your breakfast on the table for you." ],
      closetrocket: {
         a: () => [
            "<32>{#p/human}* （你往箱子裡瞅了一眼...）",
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
               : [ "<32>{#p/basic}* 沒有其他東西了。" ])
         ],
         b: () => [
            "<32>{#p/human}* （你往箱子裡瞅了一眼...）",
            ...(SAVE.data.b.svr
               ? []
               : [ "<32>{#p/basic}* 這是什麼？\n* 限量版的“超級星之行者”漫畫？" ]),
            "<32>{#s/equip}{#p/human}* （你獲得了“超級星之行者3”。）"
         ],
         b2: () => [
            "<32>{#p/human}* （你往箱子裡瞅了一眼...）",
            ...(SAVE.data.b.svr
               ? []
               : [ "<32>{#p/basic}* 這是什麼？\n* 限量版的“超級星之行者”漫畫？" ]),
            "<32>{#p/human}* （你帶的東西太多，裝不下它了。）"
         ]
      },
      goner: {
         a1: [
            "<32>{#p/human}* 一片未被凡俗關聯所羈絆的宇宙...",
            "<32>* 僅為了那純潔無瑕的美，\n  而存在於斯...",
            "<32>* 在這裡，\n  某種特別之物，獨自閃耀。"
         ],
         a2: [ "<32>* 告訴我...", "<32>* 此情此景... 可曾引起過你的好奇？" ]
      },
      danger_puzzle1: () => [
         "<25>{#p/toriel}* 這個房間裡的謎題\n  和之前的都不太一樣。",
         [ 1, 5 ].includes(SAVE.data.n.state_wastelands_dummy)
            ? "<25>{#f/3}* 說不定，比起應付人偶...\n  這個謎題更合你胃口？"
            : "<25>{#f/1}* 你能靠自己解開它嗎？"
      ],
      danger_puzzle2: () =>
         world.darker
            ? [ "<32>{#p/basic}* 這臺終端太高了，你夠不到。" ]
            : [ "<32>{#p/basic}* 終端高高地聳立在你的面前，\n  擋住了你急切的腳步。" ],
      danger_puzzle3: () => [
         [ 1, 5 ].includes(SAVE.data.n.state_wastelands_dummy)
            ? "<25>{#p/toriel}{#f/3}* 又怎麼了..."
            : "<25>{#p/toriel}{#f/1}* 怎麼了？\n* 需要幫忙嗎？"
      ],
      danger_puzzle4: () => [
         ...([ 1, 5 ].includes(SAVE.data.n.state_wastelands_dummy)
            ? [ "<25>{#p/toriel}{#f/5}* 唉... 我知道了。", "<25>{#f/5}* 這臺終端太高了，\n  你夠不到。" ]
            : [
                 "<25>{#p/toriel}{#f/7}* ...天哪。",
                 "<25>{#f/6}* 這應該是個設計上的小失誤。",
                 "<25>{#f/1}* 這臺終端太高了，\n  你夠不到是嗎？"
              ]),
         "<25>{#f/0}* 沒關係。\n* 我可以替你操作。",
         "<25>{#f/0}* ...",
         "<25>{#f/0}* 密碼是一個謎語的謎底。\n* 想猜猜看嗎？",
         choicer.create("* （猜謎嗎？）", "是", "否")
      ],
      danger_puzzle5a: [
         "<25>{#p/toriel}* 太好了！\n* 對你這麼大的孩子來說...",
         "<25>{#f/0}* 熱愛學習，渴求知識\n  是尤為重要的。"
      ],
      danger_puzzle5b: [
         "<25>{#p/toriel}{#f/0}* 謎面是個問題。",
         "<25>{#p/toriel}{#f/1}* “什麼東西，做起來像蛋糕，\n  讀起來像小麥？\n  （打一單字食物名）”"
      ],
      danger_puzzle5c: [
         "<32>{#p/human}* （...）\n* （你把答案告訴了Toriel。）",
         "<25>{#p/toriel}{#f/0}* ...啊，想法不錯！\n* 學習態度也很積極！"
      ],
      danger_puzzle5d: [
         "<32>{#p/human}* （...）\n* （你告訴Toriel，你猜不出來。）",
         "<25>{#p/toriel}{#f/1}* ...怎麼了，孩子？\n* 有什麼心事嗎？",
         "<25>{#f/5}* ...嗯...",
         "<25>{#f/0}* 喔，好吧。\n* 我來幫你解開這個迷題吧。"
      ],
      danger_puzzle5e: () =>
         [ 1, 5 ].includes(SAVE.data.n.state_wastelands_dummy)
            ? [ "<25>{#p/toriel}{#f/5}* ...", "<25>{#f/5}* I see." ]
            : [ "<25>{#p/toriel}{#f/0}* ...", "<25>{#f/0}* 這次的謎題，我替你解吧。" ],
      danger_puzzle6: () => [
         [ 1, 5 ].includes(SAVE.data.n.state_wastelands_dummy) && SAVE.data.b.w_state_riddleskip
            ? "<25>{#p/toriel}{#f/5}* And... {#x1}there.\n* The pathway is clear."
            : "<25>{#p/toriel}* 還有... {#x1}這個！\n* 可以繼續前進了。"
      ],
      danger_puzzle7: () => [
         [ 1, 5 ].includes(SAVE.data.n.state_wastelands_dummy) && SAVE.data.b.w_state_riddleskip
            ? "<25>{#p/toriel}{#f/5}* 我等著你來下個房間。"
            : "<25>{#p/toriel}* 要是你準備好了，\n  就可以來下個房間了。"
      ],
      danger_puzzle8: () =>
         SAVE.data.b.svr
            ? [ "<32>{#p/human}* （但你還是夠不到終端。）" ]
            : [ "<32>{#p/basic}* 即便是現在，那臺終端\n  依然高高聳立在這裡。" ],
      denie: [ "<32>{#p/human}* （你帶的東西太多，裝不下它了。）" ],
      dipper: {
         a: [
            "<32>{#p/human}* （你撿起了“小熊座”。）",
            choicer.create("* （裝備上小熊座嗎？）", "是", "否")
         ],
         b: [ "<32>{#p/human}* （你帶的東西太多，裝不下它了。）" ]
      },
      drop_pie: [ "<25>{#p/toriel}{#f/1}* 派粥是用來喝的，\n  不是讓你往地上倒的。" ],
      drop_pie3: [ "<25>{#p/toriel}{#f/1}* 請你別把好好的食物\n  往地上扔，好嗎？" ],
      drop_snails: [ "<25>{#p/toriel}{#f/1}* 這些可憐的焗蝸牛\n  又怎麼你了？" ],
      drop_soda: [ "<32>{#p/basic}{#n1}* Aww c'mon! ;)", "<32>* I poured my heart into that! ;)" ],
      drop_steak: [ "<32>{#p/basic}{#n1}* Seriously!? ;)", "<32>* That steak was utterly priceless! ;)" ],
      dummy1: [
         "<25>{#p/toriel}{#f/0}* 接下來，我要教你\n  如何應對其他怪物的攻擊。",
         "<25>{#f/1}* 身為人類，在前哨站走動時，\n  怪物們很可能襲擊你...",
         "<25>{#f/0}* 這時，你就會進入\n  稱作“戰鬥”的環節。",
         "<25>{#f/0}* 幸好，你可以\n  通過多種方式解決。",
         "<25>{#f/1}* 眼下，我建議\n  友好地和他們對話...",
         "<25>{#f/0}* ...好給我機會出面解決衝突。"
      ],
      dummy2: [ "<25>{#p/toriel}* 你可以從試著\n  和那邊的人偶說說話開始。" ],
      dummy3: [
         "<25>{#p/toriel}{#f/7}* ...你覺得\n  我就是訓練人偶？",
         "<25>{#f/6}* 哈哈哈！\n* 你真是太可愛了！",
         "<25>{#f/0}* 但很遺憾，我只是個\n  喜歡瞎操心的老阿姨喔。"
      ],
      dummy4: [
         "<25>{#p/toriel}* 孩子，沒有什麼好擔心的。",
         "<25>* 區區一個人偶也不會傷害你，\n  對吧？"
      ],
      dummy5: [ "<25>{#p/toriel}{#f/1}* 不要怕，小傢伙..." ],
      dummy6: [
         "<25>{#p/toriel}{#f/2}* 住手啊，孩子！\n* 人偶不是用來打的！",
         "<25>{#f/1}* 而且，我們可不想\n  傷害任何人，對嗎？",
         "<25>{#f/0}* 來吧。"
      ],
      dummy7: [ "<25>{#p/toriel}* 非常棒！\n* 你學得真快！" ],
      dummy8: [
         "<25>{#p/toriel}{#f/1}* 怎麼逃跑了...？",
         "<25>{#f/0}* 好吧，其實這樣也不差。",
         "<26>{#f/1}* 不管對手是想欺負你，\n  還是想這個人偶一樣\n  想和你聊天...",
         "<25>{#f/0}* 只要你跑的夠快，\n  什麼都能避免。"
      ],
      dummy9: [ "<25>{#p/toriel}{#f/3}* ...", "<25>{#f/4}* ...", "<25>{#f/0}* 咱們去下一個房間吧。" ],
      dummy9a: [ "<25>{#p/toriel}{#f/3}* ...", "<25>{#f/4}* ...", "<25>{#f/6}* The next room awaits." ],
      dummy10: [
         "<25>{#p/toriel}{#f/7}* 天哪，孩子...",
         "<25>{#f/0}* 我第一次看到\n  這麼有愛的場面啊...",
         "<25>{#f/0}* 總之，你已經出色地掌握了\n  教給你的東西。",
         "<25>{#f/0}* 咱們去下一個房間吧。"
      ],
      dummy11: [ "<25>{#p/toriel}* The next room awaits." ],
      dummy12: [
         "<25>{#p/toriel}{#f/2}* 我的天哪，孩子！\n* 快住手！",
         "<25>{#f/1}* ...",
         "<25>{#f/0}* 幸好，\n  打的只是一個訓練人偶。",
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
                 "<25>{#p/twinkly}{#f/5}* 哈嘍，$(name)。",
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
                 "<25>{#p/twinkly}{#f/6}* 哈嘍，$(name)。",
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
         "<25>{#p/twinkly}{#f/5}* 哈嘍！\n* 我叫{@fill:#ff0}TWINKLY{@fill:#fff}。\n* 星界的{@fill:#ff0}閃亮明星{@fill:#fff}！"
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
                 "<25>{#p/twinkly}{#f/5}{#v/0}* 呵。\n* 沒想到你就這麼跑了。",
                 "<25>{#f/11}{#v/0}* 以為規矩這麼好打破嗎？",
                 "<25>{#f/7}{#v/0}* 嘻嘻嘻...",
                 "<25>{#f/0}{#v/1}* 在這個世界上...\n  不是殺人就是被殺。"
              ]
            : [
                 "<25>{#p/twinkly}{#f/5}{#v/0}* Clever.\n* Verrrryy clever.",
                 "<25>{#f/11}{#v/0}* You think you're really smart, don'tcha?",
                 "<25>{#f/7}{#v/0}* 嘻嘻嘻...",
                 "<25>{#f/0}{#v/1}* 在這個世界上...\n  不是殺人就是被殺。"
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
         "<25>{#f/0}{#v/1}* 在這個世界上...\n  不是殺人就是被殺。",
         "<25>{#f/5}{#v/0}* That old woman thought she could break the rules.",
         "<25>{#f/8}{#v/0}* She tried so hard to save you humans...",
         "<25>{#f/6}{#v/0}* But when it came down to it, she couldn't even save herself."
      ],
      endtwinklyIX: [
         "<25>{#p/twinkly}{#f/11}{#v/0}* Hee hee hee...",
         "<25>{#f/11}{#v/0}* So you finally caved in and killed someone, huh?",
         "<25>{#f/7}{#v/0}* Well, I hope you like your choice.",
         "<25>{#f/9}{#v/0}* I mean, it's not as if you can go back and change fate.",
         "<25>{#f/0}{#v/1}* 在這個世界上...\n  不是殺人就是被殺。",
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
                 "<32>{#p/basic}* 在你回到Toriel家後，\n  她隨即摧毀了離開外域\n  唯一的出口。",
                 ...(outlandsKills() > 10
                    ? [
                         "<32>* 日子一天天過去，\n  她很快就發現\n  許多怪物都是因你而死。",
                         "<32>* 她徹底陷入了絕望。\n  萬念俱灰，最後...",
                         "<32>* ...",
                         "<32>* ...與-與此同時，\n  前哨站的其他居民苦苦等待著\n  下一個人類去解救他們。"
                      ]
                    : outlandsKills() > 5 || SAVE.data.n.bully_wastelands > 5
                    ? [
                         "<32>* 日子一天天過去，\n  Toriel盡己所能關心你，照顧你。",
                         "<32>* 帶你讀書，給你做派...",
                         "<32>* 每晚睡前，幫你蓋好被子...",
                         ...(lateleave
                            ? [ "<32>* ...然而，她心底裡仍擔心\n  你會再度逃跑。" ]
                            : [ "<32>* ...盡力不去想那些\n  失蹤的怪物。" ]),
                         "<32>* 與此同時，\n  前哨站的其他居民苦苦等待著\n  下一個人類去解救他們。"
                      ]
                    : [
                         "<32>* 日子一天天過去，\n  Toriel盡己所能關心你，照顧你。",
                         "<32>* 帶你讀書，給你做派...",
                         "<32>* 每晚睡前，幫你蓋好被子...",
                         ...(lateleave
                            ? [ "<32>* 她總是緊緊抱住你，\n  彷彿這麼做你就不會再度逃跑。" ]
                            : [ "<32>* 只要你想擁抱，\n  她都會無條件給你。" ]),
                         "<32>* 與此同時，\n  前哨站的其他居民苦苦等待著\n  下一個人類去解救他們。"
                      ]),
                 "<32>* ...然而，這個人類\n  永遠都不會到來了。",
                 "<32>* 這是你希望的結果嗎？",
                 "<32>* 前哨站的怪物，\n  活該接受這樣的命運嗎？"
              ],
      food: () => [
         ...(SAVE.data.n.state_wastelands_mash === 2
            ? [
                 "<25>{#p/toriel}{#f/1}* 抱歉讓你久等了...",
                 "<25>{#f/3}* 估計那隻小白狗\n  又洗劫我的廚房了。",
                 "<25>{#f/4}* 你應該也看到好好的派\n  現在被糟蹋成什麼樣了...",
                 "<26>{#f/0}* 不說這個了。\n* 我給你做好了一盤焗蝸牛。"
              ]
            : [ "<25>{#p/toriel}* 早餐做好啦！", "<26>* 我給你做了一盤焗蝸牛。" ]),
         "<25>{#f/1}* 我把吃的放在桌上吧..."
      ],
      fridgetrap: {
         a: () =>
            SAVE.data.b.svr
               ? []
               : world.darker
               ? [ "<32>{#p/basic}* 你對冰箱裡的東西不感興趣。" ]
               : [ "<32>{#p/basic}* 冰箱裡有一條新的巧克力棒。" ],
         b: () => [
            ...(SAVE.data.b.svr ? [] : [ "<32>{#p/basic}* ...", "<32>* 你想嚐嚐嗎？" ]),
            choicer.create("* （拿走它嗎？）", "是", "否")
         ],
         b1: [ "<32>{#p/human}* （你決定什麼也不拿。）" ],
         b2: () => [
            "<32>{#p/human}* （你拿走了巧克力棒。）",
            ...(SAVE.data.b.svr ? [ "<25>{#p/asriel1}{#f/17}* 啊... 是巧克力。", "<25>{#p/asriel1}{#f/13}* ..." ] : [])
         ],
         c: () =>
            SAVE.data.b.svr
               ? [
                    "<32>{#p/human}* （但裡面什麼都沒有。）",
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
               : [ "<32>{#p/basic}* 巧克力棒已經被拿走了。" ],
         d: [ "<32>{#p/human}* （你帶的東西太多了。）" ]
      },
      front1: [
         "<25>{#p/toriel}{#f/1}* ...你想演奏一首自己的曲子？",
         "<25>{#f/0}* 好的，我看看能幫上什麼忙。"
      ],
      front1x: [ "<25>{#p/toriel}{#f/1}* ... hello?" ],
      front2: () => [
         ...(world.postnoot
            ? [
                 "<25>{#p/toriel}{#f/2}* 這麼早就起來了！？",
                 "<25>{#f/1}* You were not asleep for very long...",
                 "<25>{#f/5}* ...",
                 world.nootflags.has('toriel') // NO-TRANSLATE

                    ? "<25>{#f/1}* 供氣系統應該還沒修好。"
                    : "<25>{#f/1}* 供氣系統好像壞掉了。",
                 "<25>{#f/1}* 要是覺得困，就再多睡一會吧。",
                 "<26>{#f/0}* ...順便一提..."
              ]
            : [
                 "<25>{#p/toriel}{#f/2}* 你站在這裡多久了！？",
                 "<25>{#f/5}* ...",
                 "<25>{#f/0}* 沒事，順帶一提..."
              ]),
         "<25>{#f/0}* 一位叫Napstablook的客人\n  想在這裡演奏自己的音樂。",
         "<25>{#f/0}* 而且，它特別邀請你\n  一起上臺演出！",
         "<25>{#f/1}* 你想去活動室見見它嗎？",
         ...(SAVE.data.n.state_wastelands_mash === 1
            ? [
                 "<25>{#f/3}* 對了，不好意思\n  派變成了那副樣子。",
                 "<25>{#f/4}* 估計是那隻小白狗\n  又去洗劫我的廚房了..."
              ]
            : 3 <= SAVE.data.n.cell_insult
            ? [
                 "<25>{#f/5}* 對了，不好意思\n  把派做成了那副樣子。",
                 "<25>{#f/9}* 我已經盡力去搶救了..."
              ]
            : []),
         choicer.create("* （參加Napstablook的演出嗎？）", "是", "否")
      ],
      front2a: [ "<25>{#p/toriel}{#f/0}* 太好了！\n* 我會轉告給它的。" ],
      front2b: [ "<25>{#p/toriel}{#f/5}* ...", "<25>{#p/toriel}{#f/5}* 需要我的話，\n  隨時可以到客廳找我。" ],
      front3: () => [
         ...(world.postnoot
            ? [
                 "<25>{#p/toriel}{#f/0}* 喔，早安，小傢伙。\n* 你起的真早。",
                 "<25>{#f/1}* 確定睡足了嗎？",
                 "<25>{#f/5}* ...",
                 world.nootflags.has('toriel') // NO-TRANSLATE

                    ? "<25>{#f/1}* 供氣系統應該還沒修好。"
                    : "<25>{#f/1}* 供氣系統好像壞掉了。",
                 "<25>{#f/1}* 要是覺得困，就再多睡一會吧。",
                 "<26>{#f/0}* ...順便一提..."
              ]
            : [ "<25>{#p/toriel}* 早上好，小傢伙。" ]),
         ...(SAVE.data.n.state_wastelands_mash === 1
            ? [
                 "<25>{#f/3}* 估計那隻小白狗\n  又洗劫我的廚房了。",
                 "<25>{#f/4}* 你應該也看到好好的派\n  現在被糟蹋成什麼樣了...",
                 "<25>{#f/0}* 不過，為了你能吃上派\n  我還是盡力搶救了一下。"
              ]
            : [ "<25>{#f/1}* The stars do look pretty today, do they not?" ]),
         "<25>{#f/5}* ...",
         "<25>{#f/5}* 需要我的話，\n  隨時可以到客廳找我。"
      ],
      front4: () => [
         ...(world.postnoot
            ? [
                 "<25>{#p/toriel}{#f/0}* 喔，早安，小傢伙。\n* 你起的真早。",
                 "<25>{#f/1}* 確定睡足了嗎？",
                 "<25>{#f/5}* ...",
                 world.nootflags.has('toriel') // NO-TRANSLATE

                    ? "<25>{#f/1}* 供氣系統應該還沒修好。"
                    : "<25>{#f/1}* 供氣系統好像壞掉了。",
                 "<25>{#f/1}* 要是覺得困，就再多睡一會吧。"
              ]
            : [ "<25>{#p/toriel}* 早上好，小傢伙。" ]),
         "<25>{#f/5}* ...",
         ...(world.bullied
            ? [
                 "<25>* The Outlands have been unusually noisy today.",
                 "<25>* 聽說有個惡霸四處遊蕩，\n  惹是生非。",
                 "<25>* 最好別離家太遠。"
              ]
            : [
                 "<25>* The Outlands have been unusually silent today.",
                 "<25>* I tried calling someone just now, but...",
                 "<25>* 只有一片死寂。"
              ]),
         ...(SAVE.data.n.state_wastelands_mash === 1
            ? [
                 world.bullied
                    ? "<26>{#f/3}* 而且，那隻小白狗\n  又洗劫了我的廚房。"
                    : "<25>{#f/3}* 以及洗劫我廚房的小白狗。",
                 "<25>{#f/4}* 你應該也看到好好的派\n  現在被糟蹋成什麼樣了...",
                 "<25>{#f/0}* 不過，為了你能吃上派\n  我還是盡力搶救了一下。",
                 "<25>{#f/1}* 希望你能喜歡它..."
              ]
            : world.bullied || (16 <= outlandsKills() && SAVE.flag.n.genocide_twinkly < resetThreshold())
            ? []
            : [ "<25>{#f/1}* 真令人擔心..." ]),
         "<25>{#f/0}* 順便一提，如果需要我的話，\n  隨時可以到客廳找我。"
      ],
      goodbye1a: [ "<25>{#p/toriel}{#f/10}* ...", "<25>{#f/20}{|}* 過來- {%}" ],
      goodbye1b: [ "<25>{#p/toriel}{#f/9}* ...", "<25>{#f/19}{|}* 過來- {%}" ],
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
         a: [ "<32>{#p/human}* （你撿起了光環。）", choicer.create("* （戴上光環嗎？）", "是", "否") ],
         b: [ "<32>{#p/human}* （你帶的東西太多，裝不下它了。）" ]
      },
      indie1: () => [
         ...([ 1, 5 ].includes(SAVE.data.n.state_wastelands_dummy) && SAVE.data.b.w_state_riddleskip
            ? [
                 "<25>{#p/toriel}{#f/5}* 之前的教學都不太順利...",
                 "<25>{#f/5}* 希望這次能有所改善。"
              ]
            : [ "<26>{#p/toriel}* 好。\n* 現在教你第三項，\n  也是最後一項本領。" ]),
         "<25>{#f/1}* 有信心只靠自己...",
         "<25>{#f/1}* 走到房間的盡頭嗎？",
         choicer.create("* （你要怎麼回答？）", "是", "否")
      ],
      indie1a: [
         "<25>{#p/toriel}{#f/1}* 你確定嗎...？",
         "<25>{#f/0}* 這段路其實並不長...",
         choicer.create("* （改變主意嗎？）", "是", "否")
      ],
      indie1b: [
         "<25>{#p/toriel}{#f/5}* 孩子。",
         "<25>{#f/1}* 學會獨立是非常非常重要的，\n  對吧？",
         choicer.create("* （改變主意嗎？）", "是", "否")
      ],
      indie2a: [ "<25>{#p/toriel}{#f/1}* 好的...", "<25>{#f/0}* 祝你好運！" ],
      indie2b: [ "<25>{#p/toriel}{#f/5}* ...", "<25>{#f/9}* ...明白了。" ],
      indie2b1: [
         "<25>{#p/toriel}{#f/10}* 別害怕，孩子。",
         "<25>{#f/1}* 如果你真的不想\n  離開我的身邊，那麼...",
         "<25>{#f/0}* 我會陪你穿過\n  外域的其他地方的。",
         "<25>{#f/5}* ...",
         "<25>{#f/5}* 孩子，握住我的手...",
         "<25>{#f/5}* 我們一起回家。"
      ],
      indie2f: [ "<32>{#p/human}{#s/equip}* （你得到了一部手機。）" ],
      indie3a: [ "<25>{#p/toriel}* 你做到了！" ],
      indie3b: [
         "<25>{#p/toriel}{#f/3}* 我的乖乖，你怎麼\n  花了這麼長時間才到！？",
         "<25>{#f/4}* 是迷路了嗎？",
         "<25>{#f/1}* ...\n* 應該沒事..."
      ],
      indie4: () => [
         ...([ 1, 5 ].includes(SAVE.data.n.state_wastelands_dummy) && SAVE.data.b.w_state_riddleskip
            ? [
                 "<25>{#f/0}* 說實話，你能自己走到這裡\n  我都挺意外的。",
                 "<25>{#f/3}* 之前表現成那樣，\n  我都懷疑...",
                 "<25>{#f/4}* ...你一直在故意整我，\n  是不是？",
                 "<25>{#f/23}* 告訴你，\n  我現在可沒空跟你胡鬧。"
              ]
            : [
                 "<25>{#p/toriel}{#f/0}* 別擔心，孩子。\n  這只是個給你準備的\n  獨立性測試！",
                 "<25>{#f/0}* 一路上並沒有什麼危險。",
                 "<25>{#f/1}* 其實呢..."
              ]),
         "<25>{#f/5}* 我要去忙一些重要的事了。",
         "<25>{#f/0}* 在我不在時，\n  希望你能好好表現。",
         "<25>{#f/1}* 前面還有些謎題，\n  還沒來得及給你解釋。\n* 而且...",
         "<25>{#f/0}* 如果你擅自離開房間的話，\n  可能會遇到危險。",
         "<25>{#f/10}* 來，這個手機給你。",
         "<32>{#p/human}{#s/equip}* （你得到了一部手機。）",
         ...([ 1, 5 ].includes(SAVE.data.n.state_wastelands_dummy) && SAVE.data.b.w_state_riddleskip
            ? [
                 "<25>{#p/toriel}{#f/1}* 我不在的時候...",
                 "<25>{#f/0}* 如果遇到任何事情...\n  就給我打電話。",
                 "<25>{#f/5}* ...",
                 "<26>{#f/23}* 還有，別惹麻煩。"
              ]
            : [
                 "<25>{#p/toriel}{#f/1}* 我不在的時候...",
                 "<25>{#f/0}* 如果遇到任何事情...\n  就給我打電話。",
                 "<25>{#f/5}* ...",
                 "<25>{#f/1}* 乖乖的，好嗎？"
              ])
      ],
      indie5: [
         [
            "<32>{#s/phone}{#p/event}* 鈴鈴...",
            "<25>{#p/toriel}* 嗨！\n* 我是Toriel。",
            "<25>* My errands are taking longer than I thought they would.",
            "<25>* You must wait a little longer.",
            "<25>{#f/1}* Thank you for being patient, my child...",
            "<25>{#f/0}* You are very good."
         ],
         [
            "<32>{#s/phone}{#p/event}* 鈴鈴...",
            "<25>{#p/toriel}* 嗨...\n* 我是Toriel。",
            "<25>{#f/1}* I found what I was looking for...",
            "<25>{#f/0}* But a small, white puppy snatched it away!\n* How odd.",
            "<25>{#f/1}* Do dogs even like flour?",
            "<25>{#f/0}* Err, that is an unrelated question, of course.",
            "<25>* It will take a little longer for me to return.",
            "<25>{#f/1}* Thank you again for being so patient..."
         ],
         [
            "<32>{#s/phone}{#p/event}* 鈴鈴...",
            "<32>{#p/basic}* （...）",
            "<32>{#p/human}* (You hear heavy panting on the other end of the phone.)",
            "<32>{#s/bark}{#p/event}* 汪！\n* 汪！",
            "<32>{#p/human}* (You hear a distant voice.)",
            "<25>{#p/toriel}{#f/2}* Stop, please!",
            "<32>{#s/bark}{#p/event}* 汪！\n* 汪！",
            "<25>{#p/toriel}{#f/1}* Come back here with my cell phone!"
         ],
         [
            "<32>{#s/phone}{#p/event}* 鈴鈴...",
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
            "<32>{#s/phone}{#p/event}* 鈴鈴...",
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
            "<32>{#s/phone}{#p/event}* 鈴鈴...",
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
         "<32>{#s/phone}{#p/event}* 鈴鈴...",
         ...([ 1, 5 ].includes(SAVE.data.n.state_wastelands_dummy) && SAVE.data.b.w_state_riddleskip
            ? [
                 early
                    ? "<25>{#p/toriel}{#g/torielTired}* ...出來了？"
                    : "<25>{#p/toriel}{#g/torielTired}* ...待的不耐煩了？",
                 "<25>{#f/9}* 沒事，我已經猜到了。",
                 "<25>{#f/5}* 只是，提醒你一下，\n  外面有很多危險等著你...",
                 "<25>{#f/1}* 保護好自己，別受傷了。"
              ]
            : [
                 "<25>{#p/toriel}* 喂？\n* 我是Toriel。",
                 "<25>{#f/1}* 你沒離開房間吧？",
                 "<25>{#f/0}* 外面非常危險，\n  受傷了可就不好了。",
                 "<25>{#f/1}* 乖乖的，好嗎？"
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
         "<25>{#p/toriel}{#f/0}* 歡迎來到我們簡陋的前哨站，\n  單純的孩子。",
         "<25>{#f/0}* 我必須教給你一些本領。\n* 學會這些，\n  你才能在這裡生存下去。",
         "<25>{#f/1}* 首當其衝的...",
         "<25>{#f/0}* 當然是謎題了！",
         "<25>{#f/0}* 我來給你快速地演示一下。"
      ],
      lobby_puzzle2: [
         "<25>{#p/toriel}{#f/1}* 你可能現在還覺得很奇怪，\n  但是在前哨站...",
         "<25>{#f/0}* 解謎題是我們的家常便飯。",
         "<25>{#f/0}* 時間久了，再加上一點指導，\n  你就會逐漸習慣上的。"
      ],
      lobby_puzzle3: [ "<25>{#p/toriel}* 等你準備好了，\n  我們就可以繼續前進了。" ],
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
            "<32>{#p/human}{#n1!}* （你的錢不夠。）",
            SAVE.data.b.napsta_performance
               ? "<32>{#p/basic}{#n1}* I'll be honest, that don't look like 5G..."
               : "<32>{#p/basic}{#n1}* I'll be honest, that don't look like 10G..."
         ],
         c: [ "<32>{#p/basic}{#n1}* Not interested, huh?", "<32>* Well, that's fine.\n* I'll just find someone else..." ],
         d: [
            "<32>{#s/equip}{#p/human}{#n1!}* （你獲得了“超級星之行者1”。）",
            "<32>{#p/basic}{#n1}* Splendid!\n* Enjoy the comic strip."
         ],
         e: [ "<32>{#p/basic}{#n1}* Back again, huh?", "<32>* Sorry bud, I've got nothin' left to sell." ],
         f: [
            "<32>{#p/human}{#n1!}* （你帶的東西太多了。）",
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
            [ "<32>{#p/basic}{#n1}* 如... 如果你再-再那麼做的話... \n  我-我會站出來阻止你的！" ],
            [ "<32>{#p/basic}{#n1}* 住-住手...\n* 別傷害他們了..." ]
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
            ? [ "<32>{#p/human}* （你撿起了烤糊的派。）" ]
            : SAVE.data.n.state_wastelands_mash === 1
            ? [ "<32>{#p/human}* （你撿起了派粥。）" ]
            : SAVE.data.b.snail_pie
            ? [ "<32>{#p/human}* （你撿起了蝸牛派。）" ]
            : [ "<32>{#p/human}* （你撿起了奶油糖肉桂派。）" ],
      plot_call: {
         a: () => [
            "<32>{#p/event}* 滴滴，滴滴...",
            3 <= SAVE.data.n.cell_insult
               ? "<25>{#p/toriel}* 孩子，你好。"
               : "<25>{#p/toriel}* 喂？\n* 我是Toriel。",
            "<25>{#f/1}* 不是啥大事，\n  只是想問一下...",
            "<25>{#f/0}* 你更喜歡肉桂，\n  還是奶油糖呢？",
            choicer.create("* （你更喜歡哪個？）", "肉桂", "奶油糖"),
            3 <= SAVE.data.n.cell_insult
               ? "<25>{#p/toriel}{#f/0}* 我知道了。"
               : "<25>{#p/toriel}* 喔，我知道了！\n* 十分感謝！"
         ],
         b: () => [
            "<32>{#p/event}* 滴滴，滴滴...",
            3 <= SAVE.data.n.cell_insult
               ? "<25>{#p/toriel}* 孩子，你好。"
               : "<25>{#p/toriel}* 喂？\n* 我是Toriel。",
            [
               "<25>{#f/1}* 你不討厭奶油糖吧？",
               "<25>{#f/1}* 你不討厭肉桂吧？"
            ][SAVE.data.n.choice_flavor],
            "<25>{#f/1}* 我知道你更喜歡另一種，\n  只是...",
            "<25>{#f/1}* 食物裡放了它，\n  你還願意吃嗎？",
            choicer.create("* （你要怎麼回答？）", "是", "否")
         ],
         b1: () => [
            3 <= SAVE.data.n.cell_insult
               ? "<25>{#p/toriel}{#f/0}* 知道了。"
               : "<25>{#p/toriel}* 好的，好的，沒問題。",
            "<25>{#f/1}* 那我先掛了..."
         ],
         b2: () => [
            "<25>{#p/toriel}{#f/5}* ...",
            "<25>{#f/0}* 好吧。",
            "<25>{#f/1}* ...",
            3 <= SAVE.data.n.cell_insult
               ? "<25>{#f/0}* 我看看怎麼辦吧。"
               : "<25>{#f/0}* 我會回頭再打給你的，\n  孩子。"
         ],
         c: [
            "<32>{#p/event}* 滴滴，滴滴...",
            "<25>{#p/toriel}{#f/1}* 你沒什麼過敏的東西吧？",
            "<25>{#f/5}* ...",
            "<25>{#f/0}* 呃... 沒事。\n* 剛問的別放在心上！"
         ],
         d: [
            "<32>{#p/event}* 滴滴，滴滴...",
            "<25>{#p/toriel}{#f/1}* 嗨，小傢伙。",
            "<25>{#f/0}* 我想起來\n  我好久沒收拾這地方了。",
            "<25>{#f/1}* 所以，這裡可能\n  四處散落著各種東西。",
            "<25>{#f/0}* 你可以把他們撿起來，\n  帶在身上，但別帶太多。",
            "<25>{#f/1}* 萬一以後碰到什麼\n  真正想要的東西呢？",
            "<25>{#f/0}* 那時，你就會希望\n  自己的口袋裡還有空地方了。"
         ]
      },
      puzzle1A: () =>
         SAVE.data.b.svr
            ? [ "<32>{#p/human}* （開關好像卡住了。）" ]
            : [ "<32>{#p/basic}* 開關卡住了。" ],
      puzzle3A: () =>
         SAVE.data.b.svr
            ? [ "<32>{#p/human}* （開關好像卡住了。）" ]
            : [ "<32>{#p/basic}* 開關卡住了。" ],
      return1: () => [
         SAVE.data.n.cell_insult < 3
            ? "<25>{#p/toriel}{#f/1}* 你是怎麼到這裡的，\n  我的孩子？"
            : "<25>{#p/toriel}{#f/1}* 喔... 你到了。",
         "<25>* 你還好嗎？"
      ],
      return2a: () =>
         SAVE.data.n.cell_insult < 3
            ? [ "<25>{#p/toriel}* 一點傷都沒有！\n* 很厲害！" ]
            : [ "<25>{#p/toriel}{#f/10}* 沒有受傷...\n* 挺好的。" ],
      return2b: () =>
         SAVE.data.n.cell_insult < 3
            ? [ "<25>{#p/toriel}{#f/4}* 你好像受傷了...", "<25>{#f/10}* 乖，乖。\n  讓我幫你療傷。" ]
            : [ "<25>{#p/toriel}{#f/9}* 你受傷了。", "<25>{#f/10}* 請讓我幫你療傷。" ],
      return2c: [
         "<25>{#p/toriel}{#f/3}* ...",
         "<25>{#f/11}* 是誰把你弄成這樣的？\n* 他該為此付出代價。"
      ],
      return3: () => [
         "<25>{#p/toriel}* 孩子，對不起。\n* 我真是個笨蛋，居然把你\n  一個人扔下這麼長時間。",
         ...(world.postnoot
            ? [
                 "<25>{#f/1}* ...是我的錯覺嗎？\n  感覺空氣不太對勁。",
                 "<25>{#f/5}* 估計是供氣系統出故障了。",
                 "<25>{#f/5}* ...",
                 "<25>{#f/0}* 別擔心。\n* 很快就會有人解決的。"
              ]
            : []),
         "<25>{#f/1}* 來吧！\n* 我給你準備了個驚喜。"
      ],
      return4: () => [
         "<25>{#p/toriel}* 歡迎來到我的住所！",
         ...(3 <= SAVE.data.n.cell_insult
            ? [
                 "<25>{#f/1}* 你聞到...",
                 "<25>{#p/toriel}{#f/2}* ...哎呀，\n  忘了看烤箱了！",
                 "<25>{#p/toriel}{#f/5}* 剛剛我全顧著去想你\n  之前為什麼那麼做，我...",
                 "<25>{#p/toriel}{#f/1}* 我得馬上去看看派怎麼樣了，\n  請別到處亂跑！"
              ]
            : [
                 "<25>{#f/1}* 聞到了嗎？",
                 ...(SAVE.data.b.snail_pie
                    ? [ "<25>{#f/0}* 驚喜！\n* 是我親手做的蝸牛派。" ]
                    : [
                         "<25>{#f/0}* 驚喜！\n* 這是個奶油糖肉桂派。",
                         "<25>{#f/0}* 今晚我原本是想做蝸牛派的，\n  但我猜你更喜歡這個。"
                      ]),
                 "<25>{#f/1}* 嗯，儘管我很久\n  沒有照顧過其他人了...",
                 "<25>{#f/0}* 但還是希望\n  你能在這裡過的開心。",
                 "<25>{#f/0}* 跟我來！\n* 還有個驚喜等著你。"
              ])
      ],
      return5: [
         "<25>{#p/toriel}* 快看！\n* 這是屬於你自己的房間。",
         "<25>{#f/1}* 希望你能喜歡它..."
      ],
      return6: [
         "<25>{#p/toriel}{#f/1}* 嗯，我得去看一下派\n  烤的怎麼樣了。",
         "<25>{#f/0}* 請四處走走，熟悉下吧！"
      ],
      runaway1: [
         [ "<25>{#p/toriel}{#f/1}* 你是不是應該在屋裡玩呢？", "<25>{#f/0}* 來吧。" ],
         [ "<25>{#p/toriel}{#f/9}* Child, it is dangerous to play out here.", "<25>{#f/5}* Trust me." ],
         [ "<26>{#p/toriel}{#f/5}* The gravity is low here.\n* You will float away." ],
         [ "<25>{#p/toriel}{#f/5}* The atmopsheric system is weak here.\n* You will suffocate." ],
         [ "<25>{#p/toriel}{#f/23}* There is really nothing for you to see here." ],
         [ "<25>{#p/toriel}{#f/1}* 想跟我一起讀本書嗎？" ],
         [ "<25>{#p/toriel}{#f/1}* Would you like to revisit the other rooms in the Outlands?" ],
         [ "<25>{#p/toriel}{#f/5}* I will not allow you to endanger yourself." ],
         [ "<25>{#p/toriel}{#f/3}* Do you expect me to do this all day?" ],
         [ "<25>{#p/toriel}{#f/4}* ..." ],
         [ "<25>{#p/toriel}{#f/17}* ...", "<25>{#f/15}* 我不喜歡你玩這種遊戲。" ],
         [ "<25>{#p/toriel}{#f/17}* ..." ]
      ],
      runaway2: [
         "<25>{#p/toriel}{#f/1}* 回屋裡去吧，孩子...",
         "<25>{#f/0}* 我要給你看樣東西！"
      ],
      runaway3: [
         "<25>{#p/toriel}{#f/2}* 孩子，快回去！\n* 這裡非常不安全！",
         "<25>{#f/0}* 跟我來吧。\n  早餐已經做好了。"
      ],
      runaway4: [ "<25>{#p/toriel}{#f/2}* 孩子！\n* 為什麼要來這裡！？" ],
      runaway5: [
         "<25>{#p/toriel}{#f/1}* 你想過離開外域之後\n  等待你的是什麼嗎？",
         "<25>{#f/5}* 對不起，我...\n  我之前對你太冷淡了...",
         "<25>{#f/9}* 是不是因為我不夠關心你，\n  你才逃跑的呢..."
      ],
      runaway6: [
         "<25>{#g/torielStraightUp}* 說實話... 我不敢離開這裡。",
         "<25>{#f/9}* 外面非常危險，那些怪物\n  足以威脅到你我的生命。",
         "<25>{#g/torielSincere}* 我也想盡力保護你，\n  不讓他們傷害到你...",
         "<25>{#g/torielStraightUp}* 可要是我跟你一起離開，\n  他們會把我也當成一種威脅。",
         "<25>{#f/9}* 等待你的，\n  只會是更大的危險。"
      ],
      runaway7: [
         "<25>{#p/toriel}{#f/5}* 求求你...",
         "<25>{#f/1}* 跟我回家吧，\n  我保證會好好照顧你的。",
         "<25>{#f/5}* 你說什麼我都答應，好嗎？",
         "<25>{#f/18}* 求你了...\n  不要像他們一樣拋下我..."
      ],
      runaway7a: [
         "<25>{#p/toriel}{#f/18}* ...",
         "<25>{#g/torielCompassionSmile}* 沒事啦，沒事啦，孩子。\n* 一切都會好起來的。",
         "<25>{#f/1}* 你先回家，\n  我要在這處理些事情。",
         "<25>{#f/5}* 很快就回去。"
      ],
      runaway7b: [
         "<25>{#p/toriel}{#f/21}* 真可悲啊...",
         "<25>* 我連一個人類孩子...\n  都保護不了..."
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
            ? [ "<32>{#p/human}* （你往裡面瞅了瞅。）", "<32>{#p/basic}* 只是個放襪子的抽屜。" ]
            : [
                 "<32>{#p/human}* （你往裡面瞅了瞅。）",
                 "<32>{#p/basic}* 真羞人！\n* 這裡面全是Toriel收藏的襪子。\n* 有點亂...",
                 world.meanie
                    ? choicer.create("* （讓它們更亂點嗎？）", "是", "否")
                    : choicer.create("* （整理一下嗎？）", "是", "否")
              ]
      ),
      socks2: () =>
         world.meanie
            ? [ "<33>{#p/human}* （你把襪子弄得一團糟。）" ]
            : [
                 "<32>{#p/human}* （你把襪子整理成一雙一雙的。）",
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
      socks4: [ "<32>{#p/human}* （你什麼都不打算做。）" ],
      socks5: () =>
         SAVE.flag.b.$svr
            ? [ "<32>{#p/human}* (But you got the sense that it'd be a bad idea.)" ]
            : [ "<32>{#s/equip}{#p/human}* (The Secret Key was added to your keyring.)" ],
      socks6: [ "<32>{#p/human}* （你決定什麼也不拿。）" ],
      socks7: () =>
         SAVE.data.b.svr
            ? [
                 "<32>{#p/human}* (You stare into the sock drawer, recalling the long journey that started here.)",
                 "<32>{#p/human}* (You can't help but wonder where you'd be without it.)"
              ]
            : world.darker
            ? [ "<32>{#p/basic}* 只是個放襪子的抽屜。" ]
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
               "<32>{#p/human}{#n1!}* （你的錢不夠。）",
               "<32>{#p/basic}{#n1}* Not enough money, huh? ;)",
               SAVE.data.b.napsta_performance
                  ? "<32>{#p/basic}* That's alright, lassy ;)\n* Not everyone can afford the \"premium\" ingredients ;)"
                  : "<32>{#p/basic}* That's alright, lassy ;)\n* Just be sure to come back when you've got some ;)"
            ],
            [ "<32>{#p/human}{#n1!}* （你的錢不夠。）" ]
         ),
         e: pager.create(
            0,
            [
               "<32>{#p/human}{#n1!}* （你帶的東西太多了。）",
               "<32>{#p/basic}{#n1}* Maybe you should come back later ;)"
            ],
            [ "<32>{#p/human}{#n1!}* （你帶的東西太多了。）" ]
         ),
         f: [ "<32>{#p/human}{#n1!}* （你得到了滋滋牛排。）" ],
         g: [ "<32>{#p/human}{#n1!}* （你得到了呲呲汽水。）" ],
         h: [ "<32>{#p/human}{#n1!}* （你帶的東西太多了。）" ],
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
                       "<32>{#p/human}* （你激活了終端。）\n* （上面有一條新消息。）",
                       "<32>{#p/alphys}* We're free, everyone!\n* This isn't a joke, the force field's gone!",
                       "<32>* Seriously, they're shutting down the core in a few days, so it's time to go!",
                       "<32>* You don't want to die here, do you?"
                    ]
                  : [
                       "<32>{#p/human}* （你激活了終端。）\n* （上面有一條新消息。）",
                       "<32>{#p/alphys}* The force field's gone.\n* Calling all citizens for immediate evacuation.",
                       "<32>* ... I know you're all afraid, but it's going to be okay.",
                       "<32>* They can't hurt us if we leave them behind."
                    ]
               : 37.2 <= SAVE.data.n.plot
               ? [
                    "<32>{#p/human}* （你激活了終端。）\n* （上面有一條新消息。）",
                    "<32>{#p/alphys}* The Foundry's fluid network has been repaired, thanks to our... v-very kind workers.",
                    "<32>* ...",
                    "<32>* On an unrelated note, we're... l-looking for new workers."
                 ]
               : [
                    "<32>{#p/human}* （你激活了終端。）\n* （上面有一條新消息。）",
                    "<32>{#p/alphys}* The Foundry's fluid network is f-falling apart again.",
                    "<32>* The workers have promised a short turnaround, but things are looking bleak.",
                    "<32>* Please, i-if anyone out there can help, we need you..."
                 ]
      },
      torieldanger: {
         a: [ "<25>{#p/toriel}{#f/1}* 去看看那邊的終端吧。" ],
         b: [ "<25>{#p/toriel}{#f/1}* 小傢伙，終端就在那裡。\n  去輸下密碼吧。" ]
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
      securefield: [ "<33>{#p/basic}* 這裡有一道安保屏障。\n* 已被激活。" ],
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
               : [ "<32>{#p/basic}* 一個空相框。" ],
         w_paintblaster: () =>
            SAVE.data.b.svr
               ? [ "<32>{#p/human}* (This device seems to be a few decades out of date.)" ]
               : world.darker
               ? [ "<32>{#p/basic}* 毫無價值的擺設。" ]
               : [ "<32>{#p/basic}* An old fuel injection device." ],
         w_candy: () =>
            SAVE.data.b.svr
               ? [ "<32>{#p/human}* (The sign warns of unexpected appliance malfunctions.)" ]
               : [ "<32>{#p/basic}* “請注意：\n  有的機器可能看起來沒問題，\n  但內部已經壞了。”" ],
         w_djtable: () =>
            SAVE.data.b.svr
               ? [ "<32>{#p/human}* (You touch the DJ set.)\n* (It makes an oddly satisfying scratching sound.)" ]
               : world.darker
               ? [ "<32>{#p/basic}* 一臺DJ打碟機。" ]
               : SAVE.data.n.plot === 72
               ? [ "<32>{#p/basic}* A fancy DJ set, which is surprisingly not in use right now." ]
               : [ "<32>{#p/basic}* A fancy DJ set, equipped with knobs and sliders galore." ],
         w_froggit: () =>
            SAVE.data.n.plot === 72
               ? [
                    "<32>{#p/basic}* 呱呱，呱呱。\n* （打擾一下，人類。）",
                    "<32>* (You seem like you have grown into a thoughtful and conscientious person.)",
                    "<32>* (Whether that was from my advice or not...)\n* (I'm quite proud.)",
                    "<32>* 呱呱。"
                 ]
               : [
                    "<32>{#p/basic}* 呱呱，呱呱。\n* （打擾一下，人類...）",
                    "<32>* （我給你幾點戰鬥的建議。）",
                    "<32>* （假如你使出特別的{@fill:#ff0}放招{@fill:#fff}，\n  或是透過{@fill:#ff0}搏鬥{@fill:#fff}把它們打得\n  只剩下一絲氣息...）",
                    "<32>* （他們八成就無心再戰。）",
                    "<32>* （如果一個怪物不想搏鬥，\n  那麼...）",
                    "<32>* （咱們就大發{@fill:#ff0}慈悲{@fill:#fff}吧，人類。）\n* 呱呱。"
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
               : [ "<26>{#p/toriel}{#f/1}* 給我點時間..." ],
         w_lobby1: () =>
            SAVE.data.b.svr
               ? [ "<32>{#p/human}* (The sign speaks of strength of will in times of trouble.)" ]
               : [ "<32>{#p/basic}* “即使腳步蹣跚，\n  也要在逆境中繪出\n  勝利的路徑。”" ],
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
                    "<32>* （我的“朋友”並不願意善待我。）",
                    "<32>* （相反，只要逮著機會，\n  他就會傷害我。）",
                    "<32>* （沒錯.......）\n* （傷害我吧............）\n* （................）",
                    "<32>* （至少你願意善待我。）\n* 呱呱。"
                 ],
         w_pacing2: () =>
            SAVE.data.n.plot === 72
               ? SAVE.data.b.oops
                  ? [
                       "<32>{#p/basic}* 呱呱，呱呱。\n* （你好，人類...）",
                       "<32>* （你有看到我的朋友嗎？）",
                       "<32>* （幾天前它還在這，\n  就站在我的左邊...）",
                       "<32>* （但自打你來之後，\n  從某個時刻起，它就不見了。）",
                       "<32>* （它說過，如果你傷害了怪物\n  就會離開這裡...）",
                       SAVE.data.n.exp <= 0
                          ? "<32>* （真奇怪，因為你根本\n  沒傷害任何怪物啊。）\n* 呱呱。"
                          : "<32>* （如果有機會，下次對他們好一點。\n  如何？）\n* 呱呱。"
                    ]
                  : [
                       "<32>{#p/basic}* 呱呱，呱呱。\n* （你好，人類...）",
                       "<32>* (My friend is the happiest they've ever been.)",
                       "<32>* (They said they'd leave if you hurt anyone, but you haven't.)",
                       "<32>* (In fact, they've decided to stay to my left forever.)",
                       "<32>* (As for that \"friend\" of theirs who always tried to hurt them...)",
                       "<32>* (Oh, he seems to have turned himself into a goat.)\n* Ribbit."
                    ]
               : [
                    "<32>{#p/basic}* 呱呱，呱呱。\n* （你好，人類...）",
                    "<32>* （你有嘗試查看過\n  自己的“物品欄”嗎？）",
                    "<32>* （你撿到過的東西，\n  都能在那裡找到。）",
                    "<32>* （你問，我的物品欄都有什麼？）",
                    "<32>* （喔，你可真傻... \n  怪物根本沒有“物品欄”！）\n* 呱呱。"
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
               ? [ "<32>{#p/basic}* 一個玩具盒。\n* 裡面的飛船模型都被砸得粉碎。" ]
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
                    "<32>{#p/basic}* 衣櫃裡掛滿了黃藍條紋衫。",
                    ...(SAVE.data.n.plot === 72 ? [ "<32>* Like that's ever gonna change." ] : [])
                 ],
         w_ta_frame: () =>
            SAVE.data.b.svr
               ? [ [ "<25>{#p/asriel1}{#f/21}* ... it's missing..." ], [ "<25>{#p/asriel1}{#f/21}* ..." ] ][
                    Math.min(asrielinter.w_ta_frame++, 1)
                 ]
               : SAVE.data.n.plot === 72
               ? [ "<32>{#p/basic}* 一個空相框。", "<32>* There still isn't much else to say." ]
               : [ "<32>{#p/basic}* 一個空相框。", "<32>* 沒什麼好說的。" ],
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
               ? [ "<32>{#p/basic}* 平平無奇的畫。\n* 和原型一點都不像。" ]
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
               ? [ "<32>{#p/basic}* 一個沙發。\n* 難道你還有別的事要做嗎？" ]
               : [
                    "<32>{#p/basic}* A comfortable-looking couch.",
                    "<32>* The temptation to sink into its luscious cushions is hard to resist..."
                 ],
         w_tf_table: () =>
            SAVE.data.b.svr
               ? [ "<32>{#p/human}* (You glance at the end table, but it doesn't appear to glance back.)" ]
               : [
                    "<32>{#p/basic}* 一張毫不起眼的茶几。",
                    "<32>{#p/basic}* 不可思議的是，它幾乎是嶄新的。"
                 ],
         w_tf_window: () =>
            SAVE.data.b.svr
               ? SAVE.data.b.c_state_secret1_used && SAVE.data.b.c_state_secret5_used
                  ? [ "<32>{#p/human}* (You stare wishfully into the cosmos beyond...)" ]
                  : [ "<32>{#p/human}* (You stare wistfully into the cosmos beyond...)" ]
               : world.darker
               ? [ "<32>{#p/basic}* 凝望深淵，你不禁捫心自問：\n  哪些悲劇與罪孽本可避免。" ]
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
               : [ "<32>{#p/basic}* “房間正在翻修。”" ],
         w_th_mirror: () =>
            SAVE.data.b.svr
               ? [ "<25>{#p/asriel1}{#f/24}* 這是我們..." ]
               : world.genocide
               ? [ "<32>{#p/basic}* ..." ]
               : world.darker
               ? [ "<32>{#p/basic}* 這是你。" ]
               : SAVE.data.b.w_state_catnap || SAVE.data.n.plot > 17
               ? [ "<32>{#p/basic}* 這是你...", "<32>{#p/basic}* ...而且，永遠都會是你。" ]
               : [ "<32>{#p/basic}* 這是你！" ],
         w_th_plant: () =>
            SAVE.data.b.svr
               ? [ "<32>{#p/human}* (You thank the plant for the warmth it brings each day.)" ]
               : SAVE.data.n.plot === 72
               ? [ "<32>{#p/basic}* This plant is just happy you're still alive." ]
               : world.darker
               ? [ "<32>{#p/basic}* 這株植物不想見到你。" ]
               : SAVE.data.b.oops
               ? [ "<32>{#p/basic}* This plant is happy to see you." ]
               : [ "<32>{#p/basic}* This plant is ecstatic about seeing you!" ],
         w_th_sausage: () =>
            SAVE.data.b.svr
               ? [ "<32>{#p/human}* (You rustle the corny plant.)" ]
               : [ "<32>{#p/basic}* 這株憂玉的植物一點都不米人。" ],
         w_th_table1: () => [
            "<32>{#p/human}* （你在桌子底下找到了一套蠟筆。）",
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
               ? [ "<32>{#p/basic}* 少了兩支。" ]
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
                    "<33>{#p/basic}* 你不想浪費時間玩牌。"
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
               ? [ "<32>{#p/basic}* 一塊砧板。" ]
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
               : [ "<32>{#p/basic}* 一團白色的毛堵在下水管裡。" ],
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
               : [ "<32>{#p/basic}* 裡面有一張揉皺的星花茶配方。" ],
         
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
                       "<32>{#p/basic}* 一個書架。",
                       "<32>{#p/human}* （你取下了一本書...）",
                       "<32>{#p/basic}* “你知道嗎？\n  蝸牛的齒舌長得像鏈鋸一樣。”",
                       "<32>* “這可是個冷知識。”",
                       "<32>* “還有個趣事：蝸牛成熟後\n  會把自己的消化系統翻出來。”",
                       "<32>* “喔，順帶一提...”",
                       "<32>* “蝸牛的 {^5}說 {^5}話 {^5}速 {^5}度 {^5}很 {^5}慢。”",
                       "<32>* “開玩笑的，它們才不會說話。”",
                       "<32>* “你能想象，在某個世界，\n  那裡的蝸牛會說話嗎？”\n* “反正我是想象不出來。”",
                       "<32>{#p/human}* （你把書放回原處。）"
                    ],
            () =>
               SAVE.data.b.svr
                  ? [
                       "<32>{#p/human}* (The books on this bookshelf consist of snail facts, family recipes, and gardening tips.)"
                    ]
                  : [
                       "<32>{#p/basic}* 一個書架。",
                       "<32>{#p/human}* （你取下了一本書...）",
                       "<32>{#p/basic}* 《Dreemurr家族的美味秘笈：蝸牛派》",
                       "<32>* “蝸牛派是Dreemurr家族的\n  一道風味獨特的傳統美食。”",
                       "<32>* “製作它其實非常簡單，\n  只需五個步驟：”",
                       "<32>* “首先，輕柔地展開酥脆的派底，\n  在烘焙盤中鋪平。”",
                       "<32>* “然後，將香濃的蒸發奶、\n  新鮮的雞蛋和選料香料\n  混合在一起，攪拌至絲滑細膩。”",
                       "<32>* “接著，小心地將幾隻新鮮活蝸牛\n  加入到之前調製好的香濃奶糊中。\n  確保它們完全浸入。”",
                       "<32>* “之後，將這層混合物\n  輕輕倒入準備好的派底，均勻鋪開。”",
                       "<32>* “最後，將麵糰切成細條，\n  編織成優雅的格子形狀，\n  覆蓋在派面上。”",
                       "<32>* “現在，將派放到烤箱中，\n  烤至金黃酥脆。”",
                       "<32>* “出爐後，派面金黃誘人。\n  令其稍作冷卻，即可切片、上桌！”",
                       "<32>{#p/human}* （你把書放回原處。）"
                    ],
            () =>
               SAVE.data.b.svr
                  ? [
                       "<32>{#p/human}* (The books on this bookshelf consist of snail facts, family recipes, and gardening tips.)"
                    ]
                  : [
                       "<32>{#p/basic}* 一個書架。",
                       "<32>{#p/human}* （你取下了一本書...）",
                       "<32>{#p/basic}* “哈嘍，熱愛園藝的朋友們！”",
                       "<32>* “說到星花，它們生長與否的關鍵...”",
                       "<32>* “在於能否直接接觸到宇宙射線。”",
                       "<32>* “所以它們多生長於空境。”",
                       "<32>* “畢竟在整個空間站中，\n  當屬那裡最為開闊。”",
                       "<32>{#p/human}* （你把書放回原處。）"
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
               ? [ "<32>{#p/basic}* 一株觀賞植物。\n* 僅此而已。" ]
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
               ? [ "<32>{#p/basic}* 撥火棍。" ]
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
               ? [ "<32>{#p/basic}* 一張床。" ]
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
                          ? "<32>{#p/basic}* 一個書架。"
                          : "<32>{#p/basic}* It's Toriel's private bookshelf.",
                       "<32>{#p/human}* （你取下了一本書...）",
                       "<32>{#p/basic}* “我們家破人亡，生靈塗炭，\n  但這一切的起因是什麼呢？”",
                       "<32>* “人類不會無緣無故攻擊我們。”",
                       "<32>* “但是，我們潛在的力量\n  真的如此強大...”",
                       "<32>* “強大到可以對人類\n  造成實質威脅的地步嗎？”",
                       "<32>* “不管真相如何，\n  此時我們已經走投無路，陷入絕境。”",
                       "<32>* “唯有投降，才有一絲生的希望。”",
                       "<32>{#p/human}* （你把書放回原處。）"
                    ],
            () =>
               SAVE.data.b.svr
                  ? [
                       "<32>{#p/human}* (The books on this bookshelf consist of history, biology, and a foreboding possibility.)"
                    ]
                  : [
                       SAVE.data.n.state_wastelands_toriel === 2 || world.runaway
                          ? "<32>{#p/basic}* 一個書架。"
                          : "<32>{#p/basic}* It's Toriel's private bookshelf.",
                       "<32>{#p/human}* （你取下了一本書...）",
                       "<32>{#p/basic}* “‘王級怪物’出生時，\n  會與父母之間建立起一條魔法紐帶。”",
                       "<32>* “靠著這條紐帶，王級怪物\n  獲得自己的靈魂，他的父母則會\n  隨著孩子成長而逐漸衰老。”",
                       "<32>* “成年王級怪物的靈魂，\n  具有怪物界最強大的力量。”",
                       "<32>* “強大到足以在肉體死後\n  仍能短暫存續。”",
                       "<32>{#p/human}* （你把書放回原處。）"
                    ],
            () =>
               SAVE.data.b.svr
                  ? [
                       "<32>{#p/human}* (The books on this bookshelf consist of history, biology, and a foreboding possibility.)"
                    ]
                  : [
                       SAVE.data.n.state_wastelands_toriel === 2 || world.runaway
                          ? "<32>{#p/basic}* 一個書架。"
                          : "<32>{#p/basic}* It's Toriel's private bookshelf.",
                       "<32>{#p/human}* （你取下了一本書...）",
                       "<32>{#p/basic}* “我們常常擔心，面對人類突然襲擊，\n  會是何種後果。”",
                       "<33>* “但卻很少想過，倘若同胞自相殘殺，\n  又該如何應對。",
                       "<32>* “即使聯合起來，能否徹底平息叛亂，\n  仍是個未知數。”",
                       "<32>* “不過此等擔憂，\n  或許只是杞人憂天？”",
                       "<32>{#p/human}* （你把書放回原處。）"
                    ]
         ),
         w_tt_cactus: () =>
            SAVE.data.b.svr
               ? [ "<32>{#p/human}* (This cactus seems to remind you of someone you once knew.)" ]
               : SAVE.data.n.plot < 72
               ? world.darker
                  ? [ "<32>{#p/basic}* 終於，發現一株很像我們的植物。" ]
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
                        ? [ "<32>{#p/basic}* 這是Toriel的日記，\n  你在裡面找不到任何笑點。" ]
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
               : [ "<32>{#p/basic}* 這是個盆栽。", "<32>* 有必要說別的嗎？" ],
         w_tt_trash: pager.create(
            0,
            () =>
               SAVE.data.b.svr
                  ? [ "<32>{#p/human}* (You can't make out what's in the trash...)" ]
                  : world.darker
                  ? [ "<32>{#p/basic}* 蝸牛。" ]
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
                     ? [ "<32>{#p/basic}* 蝸牛。" ]
                     : SAVE.data.n.plot === 72
                     ? [ "<32>{#p/basic}* Maybe this is how snails live past their expiry date." ]
                     : [ "<32>{#p/basic}* And nothing BUT snails." ],
               () =>
                  SAVE.data.b.svr
                     ? [ "<32>{#p/human}* (You can't make out what's in the trash...)" ]
                     : world.darker
                     ? [ "<32>{#p/basic}* 蝸牛。" ]
                     : SAVE.data.n.plot === 72
                     ? [ "<32>{#p/basic}* Or maybe I've just gone and lost it completely." ]
                     : [ "<32>{#p/basic}* ...\n* Did I mention the snails?" ],
               () =>
                  SAVE.data.b.svr
                     ? [ "<32>{#p/human}* (You can't make out what's in the trash...)" ]
                     : world.darker
                     ? [ "<32>{#p/basic}* 蝸牛。" ]
                     : SAVE.data.n.plot === 72
                     ? [ "<32>{#p/basic}* Or maybe...", "<32>* ... wait, what was I saying?" ]
                     : [ "<32>{#p/basic}* 蝸牛。" ],
               () =>
                  SAVE.data.b.svr
                     ? [ "<32>{#p/human}* (You can't make out what's in the trash...)" ]
                     : world.darker
                     ? [ "<32>{#p/basic}* 蝸牛。" ]
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
               : [ "<32>{#p/basic}* 這是外域這一帶的第一扇窗。" ],
         w_tutorial1: () =>
            SAVE.data.b.svr
               ? [ "<32>{#p/human}* (The sign describes the qualities of a good relationship.)" ]
               : [
                    "<32>{#p/basic}* “有了信任與善意，\n  良好關係方能維繫。\n  攜手共進，步調統一。\"",
                    ...(world.goatbro && SAVE.flag.n.ga_asrielOutlands7++ < 1
                       ? [ "<26>{#p/asriel2}{#f/8}* 真是夠矯情的。" ]
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
               ? [ "<32>{#p/basic}* 一種強烈的念頭阻止了你，\n  你只能讓派保持原樣。" ]
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
            ? [ "<32>{#p/basic}* 一種強烈的念頭阻止了你，\n  你只能讓派保持原樣。" ]
            : world.meanie
            ? [
                 "<32>{#p/basic}* 這個派的尺寸\n  根本嚇不到你。",
                 "<32>{#p/basic}* 事實上，\n  你可能都嚇到它了...",
                 choicer.create("* （要打爛它嗎？）", "是", "否")
              ]
            : [ "<32>{#p/basic}* 這個派的尺寸嚇得你完全不敢吃它。" ],
      piesmash1: [ "<32>{#p/human}* （你放了它一馬。）" ],
      piesmash2: [ "<32>{#p/human}* （你揮下了你的武器...）" ],
      piesmash3: [ "<32>{#p/basic}* 派已經被徹底毀掉了。" ],
      tutorial_puzzle1: [
         "<25>{#p/toriel}* 跟之前的不一樣，\n  這個謎題稍稍有一些不同。",
         "<25>{#f/1}* 雖然不算特別常見，\n  但前哨站的一些謎題..."
      ],
      tutorial_puzzle2: [
         "<25>{#p/toriel}* ...需要另一個怪物的協助\n  才能解決。",
         "<25>{#f/1}* 你知道接下來該怎麼辦嗎？"
      ],
      tutorial_puzzle2a: [ "<25>{#p/toriel}{#f/1}* 你知道接下來該怎麼辦嗎？" ],
      tutorial_puzzle3: [ "<25>{#p/toriel}* 非常好，小傢伙！\n* 非常棒。" ],
      tutorial_puzzle4: [ "<25>{#p/toriel}{#f/1}* 輪到你了..." ],
      tutorial_puzzle4a: [ "<25>{#p/toriel}{#f/0}* 到你了。" ],
      tutorial_puzzle5: [ "<25>{#p/toriel}* 幹得漂亮！\n* 只剩下一道障礙了。" ],
      tutorial_puzzle6: [ "<25>{#p/toriel}{#f/1}* 太棒了！\n* 孩子，你真令我驕傲！" ],
      tutorial_puzzle7: [ "<25>{#p/toriel}* 等你準備好了，\n  我們就去下個房間，\n  我會教你下一項本領。" ],
      tutorial_puzzle8a: [ "<25>{#p/toriel}* 答案不在我身上，小傢伙。" ],
      tutorial_puzzle8b: [ "<25>{#p/toriel}* 剛才怎麼做的，\n  再做一次就好。" ],
      tutorial_puzzle8c: [ "<25>{#p/toriel}{#f/1}* 試試看..." ],
      twinkly1: [
         "<25>{#p/twinkly}{#f/5}* 哈嘍！\n* 我叫{@fill:#ff0}TWINKLY{@fill:#fff}。\n* 星界的{@fill:#ff0}閃亮明星{@fill:#fff}！"
      ],
      twinkly2: [
         "<25>{#f/5}* 是哪陣風把你吹到\n  這前哨站來的呢，夥伴？",
         "<25>{#f/5}* ...",
         "<25>{#f/8}* 你是不是迷路了...",
         "<25>{#f/5}* 好啦，算你走運，\n  我會幫你的！",
         "<25>{#f/8}* 我最近不是很在狀態，\n  不過...",
         "<25>{#f/5}* ...總得有人教你\n  這裡的遊戲規則！",
         "<25>{#f/10}* 看來，只能我Twinkly獻醜，\n  承擔這個任務了。",
         "<25>{#f/5}* 我們開始吧，好嗎？"
      ],
      twinkly3: [
         "<25>{#f/7}* 但你早就知道了，對吧？",
         "<25>{#f/8}* ...",
         "<25>{#f/5}* 不過，還得由我來給你\n  傳授點經驗。",
         "<25>* 準備好了嗎？我們開始吧！"
      ],
      twinkly4: [
         "<25>{#p/twinkly}{#f/6}* 好了，我受夠了。",
         "<25>{#f/8}* 你想一直重置下去，\n  那就隨你的便...",
         "<25>{#f/6}* 你可以隨便重置。",
         "<25>{#f/7}* 但別想輕易過我這關。"
      ],
      twinkly5: [ "<25>{#p/twinkly}{#f/6}* 你是閒得沒別的事可做嗎？" ],
      twinkly6: [
         "<25>{#p/twinkly}{#f/6}* 剛捱了一擊就馬上重置，\n  是吧？",
         "<25>{#f/7}* 真是可悲。"
      ],
      twinkly6a: [
         "<25>{#p/twinkly}{#f/11}* 你以為我忘了你剛剛\n  幹了什麼嗎？",
         "<25>{#f/7}* 骯髒的碎片閃避手。"
      ],
      twinkly7: [ "<25>{#p/twinkly}{#f/7}* 我能在這兒陪你玩一整天，\n  白痴。" ],
      twinkly8: [ "<25>{#f/11}* 不過，既然你都知道接下來\n  會發生什麼了...{%15}" ],
      twinkly9: [
         "<25>{#p/twinkly}{#f/6}* 哈嘍。",
         "<25>* 感覺我再待下去\n  就要引火上身了。",
         "<25>{#f/8}* 真是遺憾...",
         "<25>{#f/7}* 我本來想跟你好好玩玩的。",
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
      twinkly9a8: [ "<25>{#f/8}{#v/0}* 你個懦夫..." ],
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
         "<20>{#f/5}看見這顆心了嗎？\n這是你的靈魂，\n是你生命的精華所在！",
         "<20>{#f/5}你的靈魂是你\n不可或缺的一部分，\n你需要LOVE來維持\n它的存在。"
      ],
      twinkly11: [
         "<20>{*}{#x2}{#f/5}在這太空，\nLOVE是通過...{#f/8}\n這些白色的...{#f/11}\n“幸福碎片”傳遞的。",
         "<20>{*}{#f/5}為了讓你在正確的\n道路上啟程，我會分你\n一點我自己的LOVE。",
         "<20>{*}{#f/5}能接多少就接多少！{^20}{*}{#x1}{%}"
      ],
      twinkly12: [
         "<20>{*}{#f/8}喔呦，\n看來你好像沒接住...",
         "<20>{*}{#f/5}沒關係！",
         "<20>{*}{#x2}{#f/10}來，我再送你點！{^20}{*}{#x1}{%}"
      ],
      twinkly13: [
         "<20>{*}{#f/12}搞什... \n你是腦殘還是怎麼著？？",
         "<20>{*}{#x2}給. 我. 撞. 子彈！！！{^20}{*}{#x1}{^999}"
      ],
      twinkly14: "給. 我. 撞. 幸福碎片 ~",
      twinkly15: [
         "<20>{#v/1}嘻嘻嘻...",
         "<20>在這個世界中...\n不是殺人就是被殺。",
         "<20>你該不會天真地以為，\n面對這自投羅網\n送上門來的靈魂...",
         "<20>我會蠢到放棄\n這大好機會吧？"
      ],
      twinkly16: [
         "<20>{#f/7}嘖，你知道會發生什麼，\n是不是？",
         "<20>你只想好好折磨一下\n楚楚可憐的TWINKLY，\n是不是？",
         "<20>天啦嚕...\n你知道你惹的是誰嗎？",
         "<20>{#f/11}嘻嘻嘻..."
      ],
      twinkly17: [ "<20>{#v/1}那麼我們就直奔主題吧。", "<20>嘻嘻嘻..." ],
      twinkly18: [ "<20>{*}{#f/2}{@random:1.1,1.1}死吧。{^20}{%}" ],
      twinkly19: [ "<20>{#p/toriel}這個傢伙真是夠\n狠心的耶，對那麼弱小\n又需要幫忙的小孩子\n都能下得了手喔..." ],
      twinkly20: [
         "<20>不要害怕，孩子。",
         "<20>我是{@fill:#003cff}TORIEL{@fill:#000}，\n{@fill:#f00}外域{@fill:#000}的管理員。",
         "<20>我每天都會來看看\n有沒有人被困在這裡。",
         "<20>跟我來，孩子。\n我有很多東西要教你。"
      ],
      twinkly21: [
         "<25>{#p/toriel}{#f/1}* 喔我的天！\n* 你是從哪裡來的，小傢伙？",
         "<25>{#f/1}* 受傷了嗎？",
         "<25>{#f/0}* ...\n* 請原諒我問了這麼多問題。",
         "<25>{#f/0}* 我是{@fill:#003cff}TORIEL{@fill:#000}，\n  {@fill:#f00}外域{@fill:#000}的管理員。",
         "<26>{#f/0}* 我每天都會來看看\n  有沒有人被困在這裡。",
         "<25>{#f/0}* 跟我來，孩子。\n* 我有很多東西要教你。"
      ],
      twinkly22: [ "<25>{#f/0}* 跟我來。" ],
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
      moldsmalMigosp: [ "<32>{#p/story}* Silente和他的同夥一同現身了！" ]
   },

   b_opponent_froggit: {
      act_check: [ "<32>{#p/story}* FROGGIT - 攻擊4 防禦5\n* 這隻怪物的生活並不輕鬆。" ],
      act_check2: [ "<32>{#p/story}* FROGGIT - 攻擊4 防禦5\n* 這隻怪物的生活逐漸向好。" ],
      act_check3: [ "<32>{#p/story}* FROGGIT - 攻擊4 防禦5\n* 這隻怪物的生活仍不好過。" ],
      act_check4: [ "<32>{#p/story}* FROGGIT - 攻擊4 防禦5\n* 這隻怪物的生活渾渾噩噩。" ],
      act_check5: [ "<32>{#p/story}* FROGGIT - 攻擊4 防禦5\n* 這隻怪物的生活頗為愜意。" ],
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
      perilStatus: [ "<32>{#p/story}* Froggit正試圖逃跑。" ],
      status1: [ "<32>{#p/story}* Froggit蹦了過來！" ],
      status2: [ "<32>{#p/story}* The battlefield is filled with the smell of crystherium utilia." ],
      status3: [ "<32>{#p/story}* Froggit doesn't seem to know why it's here." ],
      status4: [ "<32>{#p/story}* Froggit跳來跳去。" ]
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
      status1: [ "<32>{#p/story}* Flutterlyte飄飄悠悠地飛了過來！" ],
      status2: [ "<32>{#p/story}* Flutterlyte continues to mutter apologies." ],
      status3: [ "<32>{#p/story}* Flutterlyte hovers meekly." ],
      status4: [ "<32>{#p/story}* The smell of fresh peaches permeates the air." ],
      status5: [ "<32>{#p/story}* Flutterlyte is hyperventilating." ],
      status6: [ "<32>{#p/story}* Flutterlyte avoids eye contact." ]
   },
   b_opponent_loox: {
      act_check: [ "<32>{#p/story}* OCULOUX - 攻擊6 防禦6\n* 瞪大眼行家。\n* 姓：眼行家" ],
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
      hurtStatus: [ "<32>{#p/story}* Oculoux在流淚。" ],
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
      act_check: [ "<32>{#p/story}* SILENTE - 攻擊7 防禦5\n* 它看起來很邪惡，但其實\n  只是被集體意識衝昏了頭腦。" ],
      act_check2: [ "<33>{#p/story}* SILENTE - ATK 7 DEF 5\n* Now alone, it joyfully expresses itself through dance." ],
      act_check3: [ "<32>{#p/story}* SILENTE - ATK 7 DEF 5\n* It seems comfortable with you.\n* VERY comfortable." ],
      act_check4: [ "<32>{#p/story}* SILENTE - ATK 7 DEF 5\n* Despite its tough act, it's clearly in pain..." ],
      act_flirt: [ "<32>{#p/human}* (You flirt with Silente.)" ],
      flirtTalk: [ "<08>{#p/basic}{~}Hiya~" ],
      groupInsult: [ "<32>{#p/human}* (You try insulting Silente, but it's too focused on the others.)" ],
      groupStatus1: [ "<32>{#p/story}* Silente is whispering to the others." ],
      groupStatus2: [ "<32>{#p/story}* It's starting to smell like a roach motel." ],
      groupTalk1: [ "<08>{#p/basic}FILTHY SINGLE MINDER\n.." ],
      groupTalk2: [ "<08>{#p/basic}服從於\n無 上\n主 宰 .." ],
      groupTalk3: [ "<08>{#p/basic}LEGION! WE ARE LEGION!" ],
      groupTalk4: [ "<08>{#p/basic}HEED THE SWARM\n.." ],
      groupTalk5: [ "<08>{#p/basic}IN UNISON, NOW\n.." ],
      groupTalk6: [ "<08>{#p/basic}I DON'T CARE." ],
      name: "* Silente",
      perilStatus: [ "<32>{#p/story}* Silente refuses to give up." ],
      soloInsult: [ "<32>{#p/human}* (You try insulting Silente, but it's too happy to care.)" ],
      soloStatus: [ "<32>{#p/story}* Silente在這宇宙中無憂無慮。" ],
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
      act_check: [ "<32>{#p/story}* MUSHY - 攻擊6 防禦6\n* 對星際牛仔十分崇拜，\n  於是練就了一身好槍法。" ],
      act_check2: [ "<32>{#p/story}* MUSHY - ATK 6 DEF 6\n* Huge fan of space cowboys.\n* Even the sexy ones." ],
      act_check3: [ "<32>{#p/story}* MUSHY - ATK 6 DEF 6\n* After giving it your all, this gunslinger is impressed." ],
      act_flirt: [ "<32>{#p/human}* (You flirt with Mushy.)" ],
      act_taunt: [ "<32>{#p/human}* (You taunt Mushy.)" ],
      challengeStatus: [ "<32>{#p/story}* Mushy awaits your next challenge." ],
      challengeTalk1: [ "<08>{#p/basic}{~}Let's see what you got." ],
      challengeTalk2: [ "<08>{#p/basic}{~}Think you can take me?" ],
      flirtStatus1: [ "<32>{#p/story}* Mushy, the confused and the aroused." ],
      flirtTalk1: [ "<08>{#p/basic}{~}H-hey, knock it off!" ],
      hurtStatus: [ "<32>{#p/story}* Mushy準備拼死一搏。" ],
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
         "<20>{#p/asriel2}{#f/3}哈嘍，$(name)。",
         "<20>{#f/3}是我啊，Asriel...",
         "<20>{#f/3}沒認出我？",
         "<20>{#f/4}...",
         ...(reveal
            ? [ "<20>{#f/2}嘿... 別裝了，\n以為我認不出你嗎？", "<20>{#f/1}我知道你的內在是\n空虛的，就像我一樣。" ]
            : [
                 "<20>{#f/4}我被困在\n那顆星星裡好久...",
                 "<20>{#f/3}但現在，\n看到你站在我的面前...",
                 "<20>{#f/4}我就知道\n一切等待都是值得的。",
                 "<20>{#f/1}你的內在是空虛的，\n和我一樣，對吧？"
              ]),
         "<20>{#f/5}過了這麼多年，\n我們之間的紐帶\n依然無法分割...",
         "<20>{#f/1}聽著，我有個計劃，\n能讓我們變得親密無間。",
         "<20>{#f/2}有了你和我的力量，\n再加上一起偷來的\n靈魂...",
         "<20>{#f/1}我們就能一舉摧毀\n這該死哨站的一切。",
         "<21>{#f/2}讓我們把膽敢阻攔我們\n走向美好未來的傢伙...",
         "<20>{#f/1}都變為塵埃吧。"
      ],
      criminal2: [ "<20>{#p/asriel2}{#f/3}歡迎回來，$(name)。", "<20>{#f/4}準備好繼續了嗎？" ],
      criminal3: [ "<20>{#p/asriel2}{#f/3}那麼...", "<20>{#f/4}...", "<20>{#f/4}我們繼續吧。" ],
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
         "<11>{#v/1}{#i/3}{#x1}{@random:1.1,1.1}趁{^2}我\n毫{^2}無{^2}防{^2}備{^2}時\n將{^2}我{^2}殺{^2}死{^2}...",
         "<11>{#v/1}{#i/3}{#x1}{@random:1.1,1.1}...",
         "<11>{#v/2}{#i/4}{#x2}{@random:1.1,1.1}哈{^2}...\n哈{^2}...",
         "<11>{#v/2}{#i/4}{#x2}{@random:1.1,1.1}現{^2}在{^2}看{^2}來{^2}，\n年{^2}輕{^2}人...",
         "<11>{#v/3}{#i/5}{#x2}{@random:1.2,1.2}一{^3}路{^3}上{^3}一{^3}直\n相{^3}信{^3}你{^3}的{^3}我{^3}，\n才{^3}是{^3}真{^3}正{^3}的\n傻{^3}子{^3}啊{^3}..."
      ],
      death2: [
         "<11>{#p/toriel}{#f/21}{#v/1}{#i/3}{#x1}{@random:1.1,1.1}呃啊...",
         "<11>{#v/1}{#i/3}{#x3}{@random:1.1,1.1}本{^2}以{^2}為{^2}，{^2}自{^2}己\n努{^2}力{^2}保{^2}護{^2}的{^2}人{^2}，\n是{^2}你{^2}...",
         "<11>{#v/1}{#i/3}{#x4}{@random:1.1,1.1}...",
         "<11>{#v/2}{#i/4}{#x2}{@random:1.1,1.1}哈{^2}...\n哈{^2}...",
         "<11>{#v/2}{#i/4}{#x1}{@random:1.1,1.1}現{^2}在{^2}看{^2}來{^2}，\n年{^2}輕{^2}人{^2}...",
         "<11>{#v/3}{#i/5}{#x2}{@random:1.2,1.2}我{^3}真{^3}正{^3}保{^3}護{^3}的{^3}，\n是{^3}他{^3}們{^3}啊{^3}..."
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
      magic1: [ "<20>{#p/asriel2}{#f/3}我們出發。" ],
      name: "* Toriel",
      spareTalk1: [ "<11>{#p/toriel}{#f/11}..." ],
      spareTalk2: [ "<11>{#p/toriel}{#f/11}...\n..." ],
      spareTalk3: [ "<11>{#p/toriel}{#f/11}...\n...\n..." ],
      spareTalk4: [ "<11>{#p/toriel}{#f/17}...？" ],
      spareTalk5: [ "<11>{#p/toriel}{#f/17}你這是\n在做什麼？" ],
      spareTalk6: [ "<11>{#p/toriel}{#f/17}..." ],
      spareTalk7: [ "<11>{#p/toriel}{#f/17}你這樣做，\n究竟想\n證明什麼？" ],
      spareTalk8: [ "<11>{#p/toriel}{#f/17}..." ],
      spareTalk9: [ "<11>{#p/toriel}{#f/12}要麼戰鬥，\n要麼離開！" ],
      spareTalk10: [ "<11>{#p/toriel}{#f/12}不要用\n那種眼神看我！" ],
      spareTalk11: [ "<11>{#p/toriel}{#f/12}走開！" ],
      spareTalk12: [ "<11>{#p/toriel}{#f/13}..." ],
      spareTalk13: [ "<11>{#p/toriel}{#f/13}...\n..." ],
      spareTalk14: [ "<11>{#p/toriel}{#f/13}...\n...\n..." ],
      spareTalk15: [
         "<11>{#p/toriel}{#f/13}我明白\n你想要回家\n的心情...",
         "<11>{#p/toriel}{#f/9}但是，\n你可能會在\n途中喪命。"
      ],
      spareTalk16: [ "<11>{#p/toriel}{#f/14}所以... 求你\n現在回去吧。" ],
      spareTalk17: [
         "<11>{#p/toriel}{#f/13}我知道這裡\n沒有多少東西...",
         "<11>{#p/toriel}{#f/10}但我們\n仍可以幸福\n生活下去。"
      ],
      spareTalk18: [
         "<11>{#p/toriel}{#f/13}有你有我，\n就像\n一家人一樣...",
         "<11>{#p/toriel}{#f/10}這樣生活\n不好嗎？"
      ],
      spareTalk19: [ "<11>{#p/toriel}{#f/21}..." ],
      spareTalk20: [ "<11>{#p/toriel}{#f/18}你為什麼\n要讓事情變得\n這麼難辦呢？" ],
      spareTalk21: [ "<11>{#p/toriel}{#f/21}..." ],
      spareTalk22: [ "<11>{#p/toriel}{#f/18}求你了，\n回去吧...", "<11>{#p/toriel}{#f/9}回到我們的\n房間去吧。" ],
      spareTalk23: [ "<11>{#p/toriel}{#f/21}..." ],
      spareTalk24: [ "<11>{#p/toriel}{#f/18}喔，孩子..." ],
      spareTalk28b: [
         "<11>{#p/toriel}{#f/9}也許\n真正糊塗的\n是我...",
         "<11>{#f/13}用這種方法\n試圖阻止你...",
         "<11>{#f/9}也許我應該\n讓你走。"
      ],
      spareTalk28c: [ "<11>{#p/toriel}{#f/17}...？", "<11>{#f/17}你為什麼喊\n“$(name)”\n的名字呢？" ],
      status1: [ "<32>{#p/story}* Toriel now stands before you." ],
      status2: [ "<32>{#p/story}* Toriel prepares a magical attack." ],
      status3: [ "<32>{#p/story}* Toriel is acting aloof." ],
      status4: [ "<32>{#p/story}* Toriel is looking through you." ],
      status5: [ "<32>{#p/story}* ..." ],
      assistStatus: [ "<32>{#p/basic}* 肯定有其他辦法的..." ],
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
      theft: [ "<20>{*}{#p/twinkly}歸我了。{^15}{%}" ]
   },

   c_name_outlands: {
      hello: "哈拉",
      about: "來個自我介紹",
      mom: "叫她「媽咪」",
      flirt: "放電",
      toriel: "Toriel的電話",
      puzzle: "解謎提示",
      insult: "譙罵"
   },

   c_call_outlands: {
      about1: [
         "<25>{#p/toriel}{#f/1}* You want to know more about me...?",
         "<25>{#f/0}* Well, I am afraid there is not much to say.",
         "<25>{#f/0}* I am but a silly old lady who worries too often!"
      ],
      about2: [
         "<25>{#p/toriel}{#f/1}* 如果你想深入瞭解我的話...",
         "<25>{#f/1}* 可以四處瞧瞧\n  這些建築與陳設。",
         "<25>{#f/0}* 它們都是由我\n  直接或間接參與建造的。"
      ],
      about3: [
         "<25>{#p/toriel}{#f/1}* 如果你想深入瞭解我的話...",
         "<25>{#f/2}* 之前就別在電話裡罵我！"
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
      flirt4: [ "<25>{#p/toriel}{#f/3}* ...", "<25>{#p/toriel}{#f/4}* 我真是想不通你的腦回路。" ],
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
                 "<25>{#f/3}* 你有本事再說一遍？"
              ]
            : [
                 "<25>{#p/toriel}{#f/0}* 喂？\n* 我是...",
                 "<25>{#f/2}* ...！",
                 "<25>{#f/1}* My child... I do not think that means what you think it means."
              ],
      insult2: (sus: boolean) =>
         sus
            ? [ "<25>{#p/toriel}{#f/15}* ...", "<25>{#f/12}* 我會當作沒聽見的。" ]
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
            ? [ "<32>{#p/human}* （19 HP。它讓你想到了某個人。）" ]
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
         name: "光環"
      },
      drop: [ "<32>{#p/human}* (You fling the Halo away like a frisbee.)" ],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? [ "<32>{#p/human}* （3防禦。）" ]
            : [ "<32>{#p/basic}* \"Halo\" (3 DF)\n* A headband with its own gravity field." ],
      name: "光環",
      use: () => [
         "<32>{#p/human}* （你戴上了光環。）",
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
            ? [ "<32>{#p/human}* （3攻擊。）" ]
            : [ "<32>{#p/basic}* \"Little Dipper\" (3 AT)\n* A whacking spoon." ],
      name: "小熊座",
      use: [ "<32>{#p/human}* （你裝備上了小熊座。）" ]
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
         description: "一道傳統家常美食。",
         name: "蝸牛派"
      },
      drop: [ "<32>{#p/human}* （你把蝸牛派扔掉了。）" ],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? [ "<32>{#p/human}* （99 HP。）" ]
            : [ "<32>{#p/basic}* \"Snail Pie\" Heals 99 HP\n* Classic family recipe." ],
      name: "蝸牛派",
      use: [ "<32>{#p/human}* （你吃掉了蝸牛派。）" ]
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
         description: "真是惡有惡報...",
         name: "糊派"
      },
      drop: [ "<32>{#p/human}* （你把烤糊的派隨手扔在一邊，\n  置之不理。）" ],
      info: [ "<32>{#p/basic}* “糊派” 回覆 39 HP\n* 真是惡有惡報..." ],
      name: "糊派",
      use: [ "<32>{#p/human}* （你把烤糊的派吃掉了。）" ]
   },
   i_snails: {
      battle: {
         description: "A plate of fried snails.\nFor breakfast, of course.",
         name: "焗蝸牛"
      },
      drop: [ "<32>{#p/human}* （你把焗蝸牛扔掉了。）" ],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? [ "  <32>{#p/human}* （19 HP。）" ]
            : [ "<32>{#p/basic}* \"Fried Snails\" Heals 19 HP\n* A plate of fried snails.\n* For breakfast, of course." ],
      name: "焗蝸牛",
      use: [ "<32>{#p/human}* （你吃掉了焗蝸牛。）" ]
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
      drop: [ "<32>{#p/human}* （你把破損的宇航服扔掉了。）" ],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? [ "<32>{#p/human}* (20 HP. The last remaining fragment of a spacecraft flown in exile.)" ]
            : [ "<32>{#p/basic}* \"Broken Spacesuit\" Heals 20 HP\n* It came with the craft you crash-landed in." ],
      name: "破損的宇航服",
      use: [ "<33>{#p/human}* (After using its last heal-pak, the Broken Spacesuit died.)" ]
   },
   i_spanner: {
      battle: {
         description: "一把生鏽的舊扳手。",
         name: "舊扳手"
      },
      drop: [ "<32>{#p/human}* （你把生鏽的扳手扔掉了。）" ],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? [ "<32>{#p/human}* (A trusty tool forged from beyond the galaxy's edge.)" ]
            : [ "<32>{#p/basic}* A rusty old wrench." ],
      name: "生鏽的扳手",
      use: () => [
         ...(battler.active && battler.target?.opponent.metadata.reactSpanner
            ? []
            : [ "<32>{#p/human}* (You toss the spanner into the air.)\n* (Nothing happens.)" ])
      ]
   },
   i_starbertA: {
      battle: {
         description: "限量版“超級星之行者”連載漫畫第1期。",
         name: "星之行者1"
      },
      drop: [ "<32>{#p/human}* （你把“超級星之行者1”扔掉了。）" ],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? [ "<32>{#p/human}* (It seems like the beginning of a journey.)" ]
            : [ "<32>{#p/basic}* 限量版“超級星之行者”連載漫畫。\n* 共有3期，這是第1期。" ],
      name: "超級星之行者1",
      use: () => (battler.active ? [ "<32>{#p/human}* （你看了看“超級星之行者1”。）", "<32>* (Nothing happens.)" ] : [])
   },
   i_starbertB: {
      battle: {
         description: "限量版“超級星之行者”連載漫畫第2期。",
         name: "星之行者2"
      },
      drop: [ "<32>{#p/human}* （你把“超級星之行者2”扔掉了。）" ],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? [ "<32>{#p/human}* (It seems like the middle of a journey.)" ]
            : [ "<32>{#p/basic}* 限量版“超級星之行者”連載漫畫。\n* 共有3期，這是第2期。" ],
      name: "超級星之行者2",
      use: () =>
         battler.active
            ? [
                 "<32>{#p/human}* （你看了看“超級星之行者2”。）",
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
         description: "限量版“超級星之行者”連載漫畫第3期。",
         name: "星之行者3"
      },
      drop: [ "<32>{#p/human}* （你把“超級星之行者3”扔掉了。）" ],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? [ "<32>{#p/human}* (It seems like the end of a journey... or is it a new beginning?)" ]
            : [ "<32>{#p/basic}* 限量版“超級星之行者”連載漫畫。\n* 共有3期，這是最後一期。" ],
      name: "超級星之行者3",
      use: () => (battler.active ? [ "<32>{#p/human}* （你看了看“超級星之行者3”。）", "<32>* (Nothing happens.)" ] : [])
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
         "<25>{#f/0}* 所以總想找機會將這些\n  重要的東西教給別人。"
      ],
      w_dummy: () => [
         "<25>{#p/toriel}{#f/1}* The dummy room...?",
         ...[
            [
               "<25>{#f/0}* 嘻嘻，我還是很高興\n  你按照我教的方法\n  完成了任務。",
               "<25>{#f/1}* A friendly conversation is preferable to the alternative...",
               "<25>{#f/0}* And not just because it helps you make friends!"
            ],
            [],
            [
               "<25>{#f/5}* ...",
               "<25>{#f/5}* 雖然你沒按我教的去做...",
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
         "<25>{#f/9}* 剛剛教你的東西，\n  比什麼謎題和戰鬥技巧\n  重要得多。"
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
         "<25>{#f/1}* 希望你能喜歡它..."
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
                    "<32>{#p/human}* （繁忙的外域如今一片死寂，\n  這使你充滿了決心。）",
                    "<32>{#p/human}* （HP已回滿。）"
                 ]
               : SAVE.data.n.plot < 48
               ? [
                    "<32>{#p/human}* （繁忙的外域就在前方，\n  這使你充滿了決心。）",
                    "<32>{#p/human}* （HP已回滿。）"
                 ]
               : [
                    "<32>{#p/human}* (Returning to where it all began, after so long...)",
                    "<32>{#p/human}* (This fills you with determination.)",
                    "<32>{#p/human}* （HP已回滿。）"
                 ]
      },
      w_froggit: {
         name: "外域 - 休息區",
         text: () =>
            world.runaway
               ? [
                    "<32>{#p/human}* （空氣質量變得很差，\n  但你還是充滿了決心。）",
                    "<32>{#p/human}* （HP已回滿。）"
                 ]
               : SAVE.data.b.svr
               ? [
                    "<32>{#p/human}* （這裡已經沒什麼人，\n  但空氣還是清新的。）",
                    "<32>{#p/human}* （當然，這使你充滿了決心。）",
                    "<32>{#p/human}* （HP已回滿。）"
                 ]
               : world.population > 5
               ? [
                    "<32>{#p/human}* （見到這些奇異的生物\n  使你充滿了決心。）",
                    "<32>{#p/human}* （HP已回滿。）"
                 ]
               : SAVE.data.n.plot < 8.1
               ? [
                    "<32>{#p/human}* （空氣變得渾濁了起來。）\n* （不知怎地，這使你充滿了決心。）",
                    "<32>{#p/human}* （HP已回滿。）"
                 ]
               : SAVE.data.n.state_wastelands_toriel === 2
               ? [
                    "<32>{#p/human}* （這裡變得死氣沉沉。）\n* （當然，這使你充滿了決心。）",
                    "<32>{#p/human}* （HP已回滿。）"
                 ]
               : [
                    "<32>{#p/human}* （空氣仍然很渾濁。）\n* （不知怎地，這使你充滿了決心。）",
                    "<32>{#p/human}* （HP已回滿。）"
                 ]
      },
      w_mouse: {
         name: "外域 - 䗌蟎巢",
         text: () =>
            world.population > 5 && !SAVE.data.b.svr && !world.runaway
               ? [
                    "<32>{#p/human}* （想到䗌蟎有朝一日會探出頭來...）",
                    "<32>{#p/human}* （你充滿了蚗心。）"
                 ]
               : [
                    "<32>{#p/human}* （就算䗌蟎大概\n  再也不會探出頭來...）",
                    "<32>{#p/human}* （你還是充滿了蚗心。）"
                 ]
      },
      w_start: {
         name: "落地點",
         text: []
      }
   }
};


// END-TRANSLATE

export default text;
