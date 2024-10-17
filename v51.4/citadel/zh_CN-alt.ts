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
            '<32>{#p/human}* （一股暗流在你心中充盈。）',
            '<32>{#p/human}* （你祈祷，这只是一场噩梦。）'
         ],
         [
            '<32>{#p/human}* （你拼命想从那黑暗中挣脱出来。）',
            '<32>{#p/human}* （你竭尽全力与之抗争，\n  但无济于事。）'
         ],
         [
            '<32>{#p/human}* （你大声呼救，但谁也没有来。）',
            '<32>{#p/human}* （你别无所求，只希望能彻底解脱。）'
         ],
         [ '<32>{#p/human}* （...）', '<32>{#p/human}* （你深吸一口气，\n  准备迎接最终的结局。）' ],
         [ '<32>{#p/human}* （...）', '<32>{#p/human}* （你已做好准备。）' ]
      ],
      hypertext: {
         count: '$(x)秒后重启',
         death1: [ '{#p/human}（你深吸了一口气。）', "（你充满了决心。）" ],
         death2: [
            "{#p/human}{#v/1}{@fill=#42fcff}失败了没关系...",
            '{@fill=#42fcff}沉住气，再来一次吧...'
         ],
         death3: [ '{#p/human}{#v/2}{@fill=#ff993d}可别在这会儿就放弃。', '{@fill=#ff993d}起来，继续作战！' ],
         death4: [ "{#p/human}{#v/3}{@fill=#003cff}相信自己能行的。", "{@fill=#003cff}别退缩！" ],
         death5: [
            '{#p/human}{#v/4}{@fill=#d535d9}活过这轮不成问题...',
            '{@fill=#d535d9}继续前进。'
         ],
         death6: [
            "{#p/human}{#v/5}{@fill=#00c000}整个世界都指望你了...",
            '{@fill=#00c000}相信自己！'
         ],
         death7: [ "{#p/human}{#v/6}{@fill=#faff29}他早晚会败下阵来。" ],
         cyan1: [
            '<99>{*}{#p/human}{#v/6}{@fill=#faff29}某个迷失灵魂呼唤着你。',
            '<99>{*}{@fill=#faff29}依靠{@wordify=耐心/勇气/正直/毅力/善良/正义}耐心{@wordify=}，将会有望逃脱。',
            '<99>{*}{#p/human}{#v/1}{@fill=#42fcff}帮我拿回小熊座...',
            '<99>{*}{#p/human}（按[Z]传送。）'
         ],
         cyan2: [
            '<99>{*}{#p/human}{#v/1}{@fill=#42fcff}那个存在，正伺机而动。',
            '<99>{*}{@fill=#42fcff}有了耐心，你就能挺住不败...'
         ],
         orange1: [
            '<99>{*}{#p/human}{#v/6}{@fill=#faff29}某个迷失灵魂呼唤着你。',
            '<99>{*}{@fill=#faff29}凭借{@wordify=勇气/正直/毅力/善良/正义}勇气{@wordify=}，或将摆脱束缚。',
            "<99>{*}{#p/human}{#v/2}{@fill=#ff993d}别忘了我的超能手套！",
            '<99>{*}{#p/human}（按[Z]释放冲击波。）'
         ],
         orange2: [
            '<99>{*}{#p/human}{#v/2}{@fill=#ff993d}那个存在，正不断靠近...',
            '<99>{*}{@fill=#ff993d}有了勇气，就能重拳出击！'
         ],
         blue1: [
            '<99>{*}{#p/human}{#v/6}{@fill=#faff29}某个迷失灵魂呼唤着你。',
            '<99>{*}{@fill=#faff29}坚守{@wordify=正直/毅力/善良/正义}正直{@wordify=}，必定能够逃脱。',
            "<99>{*}{#p/human}{#v/3}{@fill=#003cff}帮我带回我最信赖的悬浮靴。"
         ],
         blue2: [
            '<99>{*}{#p/human}{#v/3}{@fill=#003cff}那个存在，正立于一处。',
            '<99>{*}{@fill=#003cff}坚守正直，你就能迎难而上。'
         ],
         purple1: [
            '<99>{*}{#p/human}{#v/6}{@fill=#faff29}某个迷失灵魂呼唤着你。',
            '<99>{*}{@fill=#faff29}拥有{@wordify=毅力/善良/正义}毅力{@wordify=}，定可摆脱束缚。',
            '<99>{*}{#p/human}{#v/4}{@fill=#d535d9}一台平板电脑就能伴你远行。'
         ],
         purple2: [
            '<99>{*}{#p/human}{#v/4}{@fill=#d535d9}那个存在，已不再稳定。',
            '<99>{*}{@fill=#d535d9}拥有毅力，怎会轻言放弃？'
         ],
         green1: [
            '<99>{*}{#p/human}{#v/6}{@fill=#faff29}某个迷失灵魂呼唤着你。',
            '<99>{*}{@fill=#faff29}心怀{@wordify=善良/正义}善良{@wordify=}，终能冲破枷锁。',
            '<99>{*}{#p/human}{#v/5}{@fill=#00c000}请用那架塔布拉木琴解救我！'
         ],
         green2: [
            '<99>{*}{#p/human}{#v/5}{@fill=#00c000}那个存在，正土崩瓦解...',
            '<99>{*}{@fill=#00c000}心怀善意，定会立于不败之地...'
         ],
         yellow: [
            '<99>{*}{#p/human}{#v/6}{@fill=#faff29}迷失的灵魂呼唤了你。',
            '<99>{*}{@fill=#faff29}秉持正义，你一一回应。',
            '<99>{*}{@fill=#faff29}将他们从牢笼中解放。',
            '<99>{*}{#p/human}{#v/1}{@fill=#42fcff}终于啊。',
            "<99>{*}{#p/human}{#v/2}{@fill=#ff993d}大英雄！",
            "<99>{*}{#p/human}{#v/3}{@fill=#003cff}干得好。",
            '<99>{*}{#p/human}{#v/4}{@fill=#d535d9}谢谢你...',
            "<99>{*}{#p/human}{#v/5}{@fill=#00c000}太棒了...！",
            '<99>{*}{#p/human}{#v/6}{@fill=#faff29}我们的力量归你了。',
            '<99>{*}{@fill=#faff29}有了这些力量，就能彻底击败那东西。',
            '<99>{*}{@fill=#faff29}事成之后...',
            '<99>{*}{@fill=#faff29}...去做你必须要做的事吧。',
            '<99>{*}{@fill=#faff29}现在，结果了它！',
            '<99>{*}{#p/human}（按[Z]射击。）'
         ],
         boot: '重启中...',
         init: '已就位',
         warn: '警告...',
         file1saved: '存档1 已保存',
         file1loaded: '存档1 已载入',
         file2saved: '存档2 已保存',
         file2loaded: '存档2 已载入',
         file3saved: '存档3 已保存',
         file3loaded: '存档3 已载入',
         file4saved: '存档4 已保存',
         file4loaded: '存档4 已载入',
         file5saved: '存档5 已保存',
         file5loaded: '存档5 已载入',
         file6saved: '存档6 已保存',
         file6loaded: '存档6 已载入'
      },
      noequip: [ '<32>{#p/human}* （你打算不这么做。）' ],
      genotext: {
         monologue: [
            (re: boolean) => [
               ...(re
                  ? [ '<26>{#p/asriel2}{#f/13}* As I was going to say...' ]
                  : [ "<25>{#p/asriel2}{#f/13}* I'll be honest..." ]),
               "<25>{#f/16}* ... this isn't even the first time I've tried to destroy the outpost.",
               "<25>{#f/15}* Heck, I've probably seen more timelines than I can remember.",
               '<25>{#f/23}* But, no matter what I do...',
               "<25>{#f/16}* There's always been something missing."
            ],
            (re: boolean) => [
               '<25>{#p/asriel2}{#f/15}* Back when I first awoke as a star...',
               "<25>{#f/16}* I had no idea how I'd gotten there, or what I was doing.",
               "<25>{#f/13}* I couldn't feel my arms... I couldn't feel my legs...",
               '<25>{#f/13}* Yet, no matter how many times I called out for help...',
               '<25>{#f/23}* ... begged... for help...',
               '<25>{#f/7}* ...',
               '<25>{#f/6}* ... nobody came.'
            ],
            (re: boolean) => [
               ...(re
                  ? [ "<25>{#p/asriel2}{#f/6}* As I was saying, after waking up as a star, I wasn't myself anymore." ]
                  : []),
               "<25>{#p/asriel2}{#f/15}* But, more than that... I couldn't seem to feel love, either.",
               '<25>{#f/23}* I was so afraid... I just wanted everything to go back to normal.',
               "<25>{#f/13}* I went to see Dad, hoping he'd be able to help me.",
               "<25>{#f/17}* He promised me he'd take care of me for as long as it'd take...",
               "<25>{#f/13}* ... but in the end, he couldn't save me."
            ],
            (re: boolean) => [
               ...(re
                  ? [
                       "<25>{#p/asriel2}{#f/13}* As I was saying, after waking up as a star, I wasn't myself anymore.",
                       "<25>{#f/13}* Then, after Dad wasn't able to help me...",
                       '<25>{#f/16}* I went to see Mom.'
                    ]
                  : [ '<26>{#p/asriel2}{#f/16}* Then, I went to see Mom.' ]),
               "<25>{#f/13}* Surely, she'd know what to do, right?",
               "<25>{#f/17}* She'd done so much for me in the past, so...",
               "<25>{#f/23}* If someone, anyone could help me... it'd be her."
            ],
            (re: boolean) => [
               ...(re
                  ? [
                       "<25>{#p/asriel2}{#f/13}* As I was saying, after waking up as a star, I wasn't myself anymore.",
                       "<26>{#f/16}* I tried talking to my parents, but they couldn't help me at all."
                    ]
                  : [ "<25>{#p/asriel2}{#f/16}* ... but it didn't work." ]),
               "<25>{#f/13}* Realizing that I'd be like this forever...",
               '<25>{#f/13}* Realizing there was nothing I could do to help myself...',
               '<26>{#f/23}* I just wanted it to end.',
               '<25>{#f/15}* I was... ready, for everything to end.',
               '<25>{#f/16}* ... then...\n* Just as I committed to the moment...',
               '<25>{#f/7}* Just as it all flashed before my eyes...',
               '<25>{#f/6}* I suddenly found myself back where I started.'
            ],
            (re: boolean) => [
               ...(re
                  ? [
                       '<25>{#p/asriel2}{#f/10}* Where were we again?',
                       '<26>{#f/6}* ... oh yeah.\n* So I was right back where I started.'
                    ]
                  : []),
               "<25>{#p/asriel2}{#f/13}* At first, I didn't know how I got there...",
               '<25>{#f/15}* ... so, I tried bringing myself back on purpose.',
               '<25>{#f/16}* I focused my mind on going back again, and... it worked.',
               "<25>{#f/15}* Somehow, I'd gained the power to turn back time.",
               "<25>{#f/17}* And that's when it struck me...",
               "<25>{#f/23}* I'd use my new power to be a force for good.",
               "<25>{#f/15}* I thought, maybe, if I couldn't help myself...",
               '<25>{#f/16}* At least I could help someone else.'
            ],
            (re: boolean) => [
               ...(re
                  ? [
                       '<25>{#p/asriel2}{#f/10}* Where were we again?',
                       '<25>{#f/16}* ... oh yeah.\n* So I started out by helping them.'
                    ]
                  : []),
               "<25>{#p/asriel2}{#f/23}* I'll admit, I struggled at first...",
               '<25>{#f/15}* ... but the more I did it, the better I got.',
               '<25>{#f/5}* After a while, I could even do it with my eyes closed.',
               '<25>{#f/9}* Heck.\n* Sometimes I did.',
               '<25>{#f/13}* And, sure, maybe I was a bit of a show-off...',
               '<25>{#f/9}* But what did it matter?',
               '<25>{#f/5}* After all, I was still helping them...',
               '<25>{#f/15}* ... saving them...',
               '<25>{#f/15}* Being a good person, and all.'
            ],
            (re: boolean) => [
               ...(re ? [ '<25>{#p/asriel2}{#f/15}* Like I said before, I started out by helping them.' ] : []),
               '<25>{#p/asriel2}{#f/16}* Soon, though, I began to notice something.',
               '<25>{#f/15}* The same responses, the same outcomes...',
               "<25>{#f/16}* Just being nice all the time wasn't satisfying me anymore.",
               '<25>{#f/6}* And, yes, before you ask, I did try getting cutesy.',
               '<25>{#f/7}* But even that became boring in the end.',
               "<25>{#f/10}* I could've gone on, but what would've been the point?",
               '<25>{#f/6}* It was time to try something else.'
            ],
            (re: boolean) => [
               ...(re
                  ? [ "<25>{#p/asriel2}{#f/6}* Like I said before, I decided I'd stop being nice all the time." ]
                  : []),
               "<25>{#p/asriel2}{#f/4}* Now, it didn't amount to much at first...",
               '<25>{#f/3}* Just a few mean words here and there.',
               '<25>{#f/10}* A part of me felt bad, but what did I really have to lose?',
               '<25>{#f/6}* Of course, once things began to repeat again, I got a little meaner.',
               '<25>{#f/8}* Another insult here, another mockery there...',
               '<25>{#f/7}* Eventually, I stopped feeling bad about it entirely.',
               "<25>{#f/9}* It's not like I was killing them or anything."
            ],
            (re: boolean) => [
               ...(re ? [ "<26>{#p/asriel2}{#f/4}* Like I said before, I'd gotten used to being mean." ] : []),
               '<25>{#p/asriel2}{#f/15}* Then, I thought to myself... if I attacked them...',
               "<25>{#f/16}* It'd be fine, as long as they didn't die.",
               "<25>{#f/10}* What'd be the harm?\n* Monsters can heal, can't they?",
               "<25>{#f/4}* If worst came to worst, I could just RESET, and it'd still be fine.",
               "<25>{#f/3}* ... little did I know how I'd react if it actually happened."
            ],
            (re: boolean) => [
               ...(re ? [ "<26>{#p/asriel2}{#f/3}* Like I said before, I'd gotten the idea to attack them." ] : []),
               '<25>{#p/asriel2}{#f/13}* I guess you could say I got carried away...',
               '<25>{#f/15}* Pulled... just a little too tightly...',
               '<25>{#f/16}* ...',
               '<25>{#f/6}* My own mother, strangled to death by my own magic...',
               '<25>{#f/8}* Begging me to stop as the life drained out of her body.',
               "<25>{#f/7}* Even after a RESET, the image wouldn't leave my mind.",
               '<25>{#f/13}* I panicked, and tried making up for it by being nice to her.',
               "<25>{#f/15}* But I couldn't forget about what I'd done.",
               "<25>{#f/15}* I just... couldn't look at her... at anyone... the same way again."
            ],
            (re: boolean) => [
               ...(re
                  ? [
                       "<26>{#p/asriel2}{#f/15}* Like I said before, I couldn't forget about what I'd done.",
                       '<25>{#f/16}* And, after that, things only got worse.'
                    ]
                  : [ '<25>{#p/asriel2}{#f/16}* After that, things only got worse.' ]),
               '<26>{#f/15}* I guess, after screwing up once, it got easier to do it again.',
               '<26>{#f/15}* And soon, be it out of frustration, or raw curiosity...',
               '<26>{#f/16}* What began as an accident spiraled out of control.',
               '<26>{#f/7}* But, hey, when it came down to it, I could always RESET, right?',
               '<25>{#f/6}* And once I told myself THAT... there really was no going back.'
            ],
            (re: boolean) => [
               '<25>{#p/asriel2}{#f/6}* With each new RESET, my actions became more and more twisted.',
               '<25>{#f/7}* I subjected them... all of them... to horrors beyond compare.',
               '<25>{#f/15}* I did it again, and again, and again...',
               "<25>{#f/16}* I did it so many times, I'd become completely numb to it.",
               '<25>{#f/3}* Then, finally, after all of that...',
               '<25>{#f/3}* ... nothing.',
               '<25>{#f/3}* I felt nothing.\n* It meant nothing.\n* It was all for nothing.',
               '<25>{#f/15}* As I stood alone in my empty world, I knew what had to be done.',
               '<26>{#f/23}* So I RESET, and let time move forward without me.'
            ],
            (re: boolean) => [
               ...(re
                  ? [
                       '<26>{#p/asriel2}{#f/16}* Like I said before, I knew it was all for nothing.',
                       '<25>{#f/23}* So I RESET, and let time move forward without me.'
                    ]
                  : []),
               "<25>{#p/asriel2}{#f/17}* Don't you see, $(name)?",
               '<25>{#f/23}* This is why I was so excited to be with you after all this time.',
               "<25>{#f/13}* With you by my side, I won't have to do it alone anymore.",
               "<25>{#f/15}* With you by my side... it'll finally mean something for once.",
               "<25>{#f/16}* Besides, this is what you've always wanted, isn't it?",
               '<25>{#f/13}* To \"set them free?\"',
               '<25>{#f/23}* ... heh.\n* We really do make the perfect team.'
            ]
         ],
         monologueX1: [
            '<25>{#p/asriel2}{#f/17}* Just remember, $(name).',
            '<25>{#f/17}* As long we stick together, nothing can stand in our way.'
         ],
         monologueX2: () => [
            '<25>{#p/asriel2}{#f/16}* ... here.\n* Take my hand.',
            ...(SAVE.data.b.water ? [ "<25>{#f/13}* Don't worry, I'll hold the cup for you..." ] : [])
         ],
         monologueX3: [
            '<25>{#p/asriel2}{#f/17}* We might as well do it while we still have the chance, right?',
            '<25>{#f/23}* Walking hand-in-hand, past the city, like we always wanted to...',
            "<25>{#f/16}* ... and THEN we'll blow it to pieces."
         ],
         monologueX4: () => [
            '<25>{#p/asriel2}{#f/16}* Well, that was nice.',
            ...(SAVE.flag.n.ga_asrielMonologueY < 2
               ? [
                    "<25>{#f/13}* But the outpost's time has come.",
                    "<25>{#f/7}* Listen, $(name).\n* These monsters just don't understand us.",
                    "<25>{#f/6}* They'd like to pretend that the universe is a perfect place.",
                    "<25>{#f/8}* They'd like to think that anyone can be redeemed.",
                    "<25>{#f/6}* But you and I?\n* We don't fit within their world view.",
                    "<25>{#f/7}* We're irredeemable.",
                    "<25>{#f/9}* Heh.\n* Isn't it funny?",
                    '<25>{#f/13}* The one thing that keeps us from relating to anyone else...',
                    '<25>{#f/16}* ... is precisely what binds us together.',
                    '<26>{#f/17}* Listen, once we hitch a ride and escape this place...',
                    "<25>{#f/17}* We'll be together forever, $(name).",
                    "<25>{#f/23}* It's our destiny."
                 ]
               : [
                    '<25>{#f/13}* But you know what we have to do now.',
                    "<25>{#f/17}* Come on, let's get back to where we were..."
                 ])
         ],
         monologueX5: [ '<25>{#p/asriel2}{#f/17}* Lead the way.' ],
         monologueY: [
            "<25>{#p/asriel2}{#f/16}* ... I'm not going to repeat myself.",
            "<26>{#f/13}* You know why we're here."
         ],
         afterfight1: [ '<25>{#p/asriel2}{#f/8}* ...真费劲。' ],
         afterfight2: () =>
            [
               [
                  "<25>{#p/asriel2}{#f/8}* Looks like they've already been evacuated...",
                  '<25>{#f/7}* ... hmph.',
                  "<25>{#f/6}* If he thinks that'll stop us, then he's just plain stupid.",
                  "<25>{#f/10}* I mean, he could've used their power to destroy us...",
                  "<26>{#f/16}* ... but let's be honest.",
                  "<25>{#f/13}* He's just not that kind of person, is he?"
               ],
               [ '<25>{#p/asriel2}{#f/6}* Just a moment.' ]
            ][Math.min(SAVE.flag.n.ga_asriel56++, 1)],
         afterfight3: () => [
            '<25>{#p/asriel2}{#f/16}* Meltdown in progress.',
            ...(SAVE.flag.n.ga_asriel57++ < 1
               ? [
                    '<25>{#f/5}* All we need now is a special shuttle...',
                    "<25>{#f/9}* One that'll link with our SOULs to let us get past the force field."
                 ]
               : [])
         ],
         afterfight4: [ '<25>{#p/asriel2}{#f/3}* This way.' ],
         afterfight5a: [ '<25>{#p/asriel2}{#f/5}* Gorey!', '<25>{#f/5}* How ya doing?' ],
         afterfight5b: [
            '<25>{#p/asgore}{#f/5}* About as good as can be expected.',
            "<25>{#p/asriel2}{#f/6}* We've got you cornered, by the way.\n* So no tricks."
         ],
         afterfight6: [
            '<25>{#p/asgore}{#f/1}* I have no intention of tricking you, Asriel.',
            '<25>{#p/asgore}{#f/2}* I know the end is near.'
         ],
         afterfight7: [ '<25>{#p/asriel2}{#f/10}* Any last words before everything you know is turned to dust?' ],
         afterfight8: [
            '<25>{#p/asriel2}{#f/15}* No?',
            '<25>{#f/7}* Okay.',
            "<25>{#f/6}* I guess we'll be on our way, then.",
            '<25>{#f/8}* ... right after I take your access card.'
         ],
         afterfight10: [ '<25>{#p/asriel2}{#f/1}* Come on, $(name).', "<25>{#f/2}* I've seen enough of this place." ],
         afterfight11: [
            '<25>{#p/asgore}{#f/5}* $(name)...?',
            '<25>{#p/asgore}{#f/6}* ... hmm.\n* Safe journey, Asriel.'
         ],
         afterfight12: [ '<25>{#p/asriel2}{#f/16}* Ignore him, $(name).\n* Nothing in this world matters anymore.' ],
         afterfight13: [ '<25>{#p/asriel2}{#f/17}* Only you.' ],
         coreboomA1: [
            '<18>{#p/papyrus}{#f/5}HELLO?\nIS ANYONE THERE?',
            "<18>{#p/papyrus}{#f/5}I'VE BEEN LOOKING AROUND FOR THE HUMAN, AND..."
         ],
         coreboomA2: [ '<18>{#p/papyrus}{#f/8}WHAT THE...!' ],
         coreboomA3: [ '<32>{#p/basic}* Papyrus?{%40}' ],
         coreboomA4: [ "<18>{#p/papyrus}{#f/4}I'VE GOT A BAD FEELING ABOUT THIS.{%40}" ],
         coreboomA5: [ '<32>{#p/basic}* ... hello?{%40}' ],
         coretext1: [ '<32>{#p/basic}{#s/spiderLaugh}* Keep it steady, dearies~' ],
         coretext2: [ '<32>{#p/basic}{#s/spiderLaugh}* Ngh...', '<32>{#p/basic}* Hold it together~' ],
         coreboomB1: [ '<32>{#p/basic}{#s/spiderLaugh}* Ah!', '<32>{#p/basic}* Not like this~' ],
         coreboomB2: [ '<32>{#p/basic}* Not like what?{%40}' ],
         coreboomB3: [ '<32>{#p/basic}{#s/spiderLaugh}* Crud.{%40}' ],
         coretext3: [ '<18>{#p/papyrus}{#f/9}NEED A HAND?' ],
         coretext4a: [ '<32>{#p/basic}{#s/spiderLaugh}* Papyrus!', "<32>{#p/basic}* You're alive~" ],
         coretext4b: [ '<18>{#p/papyrus}{#f/6}IN THE FLESH!' ],
         coretext5a: [ '<18>{|}{#p/papyrus}{#f/4}OR RATHER, IN THE- {%}' ],
         coretext5b: [
            '<32>{#p/basic}{#s/spiderLaugh}* Papyrus, we still need someone to access the override switches!'
         ],
         coreboomC1: [ "<18>{#p/papyrus}{#f/5}... I'M AFRAID WE'RE THE ONLY ONES HERE." ],
         coreboomC2: [ '<18>{#p/papyrus}{#f/8}WHAT THE...!' ],
         coreboomC3: [ "<32>{#p/basic}{#s/spiderLaugh}* It's gone critical.{%40}" ],
         coretext6: [ "<32>{#p/basic}* I'll call the engineers!" ],
         coretext7: [ '<18>{#p/papyrus}{#f/6}YES, YES, DO THAT!' ],
         coreboomD1: [ '<32>{#p/basic}* ...', '<32>{#p/basic}* No response.' ],
         coreboomD2: [ '<32>{#p/basic}* ...', "<32>{#p/basic}* They say there's not enough of them left!?" ],
         coreboomD3: [ '<18>{#p/papyrus}{#f/5}DRAT.{%40}' ],
         coretext8: [ '<32>{#p/basic}* ...', "<32>{#p/basic}* They're on it!" ],
         coretext9: [ '<32>{#p/basic}{#s/spiderLaugh}* Splendid~' ],
         coretext10: [ '<32>{#p/basic}* Any second now...' ],
         coretext11: [ '<32>{#p/basic}{#s/spiderLaugh}* There we are~' ],
         coretext12a: [ '<18>{#p/papyrus}{#f/0}DID WE DO IT!?!?' ],
         coretext12b: [ '<32>{#p/basic}{#s/spiderLaugh}* Ahuhu... we still need someone to reach inside~' ],
         coreboom12c: [ "<32>{#p/basic}* Don't look at me!\n* I'm a dummy!" ],
         coreboom12d: [ '<32>{#p/basic}{#s/spiderLaugh}* A dummy that served in the ELITE squad, that is~' ],
         coreboom12e: [ '<32>{#p/basic}* ... that was a long time ago.' ],
         coretext13: [ "<32>{#p/napstablook}* i'll do it" ],
         coretext14a: [ '<18>{#p/papyrus}{#f/1}WHERE DID -YOU- COME FROM???' ],
         coretext14b: [
            '<32>{#p/napstablook}* sorry...\n* no time to explain...',
            '<32>* take care of yourself, cousin...',
            '<32>* alright?'
         ],
         coretext15: [ '<32>{*}{#p/basic}{#s/spiderLaugh}* What are you doing~{%40}' ],
         coretext16: [ "<32>{*}{#p/basic}* No... NO!\n* I can't lose you too...!{%40}" ],
         coretext17: [ '<32>{#p/napstablook}{*}* i can see it...', '<32>* i can see the instability.' ],
         coretext18: [
            "<33>{*}{#p/napstablook}* doesn't look like it could be anything else...",
            '<32>{*}* just gotta re-route the command pathways.',
            '<32>{*}* come on...'
         ],
         coretext19: [ '<32>{#p/napstablook}* ...', '<32>{#p/napstablook}* it worked...' ],
         coretext20: [
            '<25>{#p/asgore}{#f/6}* What do we have here?',
            '<18>{#p/papyrus}{#f/0}ASGORE! WE DID IT!',
            '<18>{#p/papyrus}{#f/0}WE STOPPED THE EXPLOSION!',
            '<32>{#p/basic}* ... my cousin Blooky, they...',
            '<18>{#p/papyrus}{#f/5}THEIR COUSIN DID A VERY NOBLE THING.'
         ],
         coretext21: [ '<25>{#p/asgore}{#f/1}* What is your name?' ],
         coretext22: [
            '<32>{#p/basic}* Oh, me?',
            "<32>* Well, uh, I guess I don't really have one anymore.",
            '<32>* Just call me \"dummy,\" I guess.'
         ],
         coretext23a: [
            '<25>{#p/asgore}{#f/1}* Listen... er, dummy.\n* You are not alone in your suffering.',
            '<25>{#f/2}* We have all lost people close to us today.'
         ],
         coretext23b1: [ '<32>{#p/basic}{#s/spiderLaugh}* All except for me, of course~' ],
         coretext23b2: [ '<32>{#p/basic}{#s/spiderLaugh}* Not that... I was close to anyone to begin with...' ],
         coretext24a: [
            "<18>{#p/papyrus}{#f/5}WOWIE... IF THAT HUMAN HADN'T SPARED ME, I...",
            '<32>{#p/basic}* They spared you?\n* Yeah, they spared me too...',
            '<32>{#p/basic}{#s/spiderLaugh}* Ahuhu... I escaped before they could lay a hand on me~',
            '<18>{#p/papyrus}{#f/0}... OH, RIGHT!\nTHE CORE WORKERS!',
            '<18>{#p/papyrus}{#f/0}THEY PROBABLY SPARED THEM, TOO!'
         ],
         coretext24b: [ '<25>{#p/asgore}{#f/1}* ... tell me, was Asriel with the human when they spared you?' ],
         coretext25: [
            '<18>{#p/papyrus}{#f/9}NOT AT ALL!',
            '<32>{#p/basic}* Nope.',
            "<32>{#p/basic}{#s/spiderLaugh}* Thinking back, I don't believe it was him~",
            '<25>{#p/asgore}{#f/1}* ...',
            '<25>{#p/asgore}{#f/1}* So it is true...',
            '<25>{#p/asgore}{#f/2}* ... perhaps...\n* I was wrong to condemn them to...',
            '<18>{#p/papyrus}{#f/6}...\nCONDEMN THEM??',
            '<18>{#p/papyrus}{#f/7}WHAT ARE YOU TALKING ABOUT!!'
         ],
         coretext26: [ '<18>{*}{#p/papyrus}{#f/7}ASGORE, WHAT DID YOU DO!?{^40}{%}' ],
         coretext27a: '{*}{#p/event}{#i/3}The outpost was\ndestroyed.',
         coretext27b: '{*}{#p/event}{#i/3}The outpost was saved.',
         respawn0: () =>
            [
               [
                  [
                     "<25>{#p/asriel2}{#f/15}* You probably should've used a SAVE point after we left Starton.",
                     '<25>{#p/asriel2}{#f/16}* Just saying.'
                  ],
                  [
                     "<25>{#p/asriel2}{#f/15}* You probably should've used a SAVE point after we killed Undyne.",
                     '<25>{#p/asriel2}{#f/16}* Just saying.'
                  ],
                  [
                     "<25>{#p/asriel2}{#f/15}* You probably should've used a SAVE point after we left Aerialis.",
                     '<25>{#p/asriel2}{#f/16}* Just saying.'
                  ],
                  [
                     '<25>{#p/asriel2}{#f/15}* Did you poison yourself after the fight to see what would happen?',
                     "<25>{#p/asriel2}{#f/16}* $(name), you're a real piece of work."
                  ]
               ],
               [
                  [
                     "<26>{#p/asriel2}{#f/6}* You'd think after last time you would've\nlearnt to save progress.",
                     "<25>{#p/asriel2}{#f/8}* Even if it's only Starton we have to go through again.",
                     '<25>{#p/asriel2}{#f/7}* But I guess not.'
                  ],
                  [
                     "<26>{#p/asriel2}{#f/6}* You'd think after last time you would've\nlearnt to save progress.",
                     '<26>{#p/asriel2}{#f/8}* Especially after taking out someone like Undyne.',
                     '<25>{#p/asriel2}{#f/7}* But I guess not.'
                  ],
                  [
                     "<26>{#p/asriel2}{#f/6}* You'd think after last time you would've\nlearnt to save progress.",
                     '<25>{#p/asriel2}{#f/8}* Especially after clearing an area like Aerialis.',
                     '<25>{#p/asriel2}{#f/7}* But I guess not.'
                  ],
                  [ '<26>{#p/asriel2}{#f/7}* This is becoming very tiresome, very quickly.' ]
               ],
               [
                  [ '<25>{#p/asriel2}{#f/4}* $(name).\n* Please save our progress from now on.' ],
                  [ '<25>{#p/asriel2}{#f/4}* $(name).\n* Please save our progress from now on.' ],
                  [ '<25>{#p/asriel2}{#f/4}* $(name).\n* Please save our progress from now on.' ],
                  [ "<25>{#p/asriel2}{#f/4}* Now you're just being downright annoying." ]
               ],
               [
                  [ '<25>{#p/asriel2}{#f/8}* Come on...' ],
                  [ '<25>{#p/asriel2}{#f/8}* Come on...' ],
                  [ '<25>{#p/asriel2}{#f/8}* Come on...' ],
                  [ '<25>{#p/asriel2}{#f/8}* Come on...' ]
               ]
            ][Math.min(SAVE.flag.n.ga_asrielRespawn0++, 3)][Math.floor(SAVE.flag.n._genocide_milestone_last / 2)],
         respawn1: () =>
            [
               [
                  "<25>{#p/asriel2}{#f/15}* We're back here?",
                  "<25>{#p/asriel2}{#f/16}* We'll just kill him again, I guess."
               ],
               [ '<25>{#p/asriel2}{#f/6}* Really?' ],
               [ '<25>{#p/asriel2}{#f/6}* ...' ]
            ][Math.min(SAVE.flag.n.ga_asrielRespawn1++, 2)],
         respawn2: () =>
            [
               [
                  "<25>{#p/asriel2}{#f/15}* And we're back here again.\n* Great...",
                  '<25>{#p/asriel2}{#f/16}* No problem, though...\n* We can just do what we did before...'
               ],
               [ '<25>{#p/asriel2}{#f/8}* This is really starting to get annoying.' ],
               [ '<25>{#p/asriel2}{#f/8}* ...' ]
            ][Math.min(SAVE.flag.n.ga_asrielRespawn2++, 2)],
         respawn4: () =>
            [
               [
                  '<25>{#p/asriel2}{#f/15}* $(name), we were almost to the end.',
                  '<25>{#p/asriel2}{#f/16}* Can we please just save our progress this time.'
               ],
               [ '<25>{#p/asriel2}{#f/10}* ... is this some kind of a joke?' ],
               [ '<25>{#p/asriel2}{#f/10}* ...' ]
            ][Math.min(SAVE.flag.n.ga_asrielRespawn4++, 2)],
         respawn6: () =>
            [
               [
                  '<25>{#p/asriel2}{#f/15}* $(name)，听好了。',
                  '<25>{#p/asriel2}{#f/7}* 我们已经干掉她了。',
                  '<25>{#p/asriel2}{#f/5}* 那你还回溯时间干嘛呢？'
               ],
               [ "<25>{#p/asriel2}{#f/7}* ...你逗我呢？" ],
               [ '<25>{#p/asriel2}{#f/7}* ...' ]
            ][Math.min(SAVE.flag.n.ga_asrielRespawn6++, 2)],
         respawn7: () =>
            [
               [
                  '<25>{#p/asriel2}{#f/15}* What the...',
                  "<25>{#p/asriel2}{#f/15}* I could've sworn we were in the shuttle..."
               ],
               [
                  '<25>{#p/asriel2}{#f/10}* $(name), did you...',
                  "<25>{#p/asriel2}{#f/16}* ... no...\n* You wouldn't do that..."
               ],
               [
                  '<25>{#p/asriel2}{#f/15}* ...',
                  '<25>{#p/asriel2}{#f/15}* $(name)?',
                  '<32>{#p/human}* (It appears Asriel is deep in thought.)'
               ],
               [ '<25>{#p/asriel2}{#f/15}* ...', '<32>{#p/human}* (It appears Asriel is deep in thought.)' ]
            ][Math.min(SAVE.flag.n.ga_asrielRespawn7++, 3)],
         respawnWitnessA: () =>
            [
               [ '<25>{#p/asriel2}{#f/9}* 怎么回事？', '<25>{#p/asriel2}{#f/10}* ...谁攻击了我们？' ],
               [ '<25>{#p/asriel2}{#f/15}* 我们...', '<25>{#p/asriel2}{#f/10}* ...被一道电魔法击中了？' ],
               [
                  "<25>{#p/asriel2}{#f/3}* 肯定是她，艾菲斯。",
                  "<25>{#p/asriel2}{#f/15}* 她竟然没逃跑...",
                  '<25>{#p/asriel2}{#f/16}* 呵，有点意思。'
               ]
            ][SAVE.flag.n.ga_asrielWitness++],
         respawnWitnessB: (wit: number) =>
            wit > 0
               ? [
                    '<25>{#p/asriel2}{#f/15}* 果然是艾菲斯...',
                    '<25>{#p/asriel2}{#f/16}* 呵，有点意思。'
                 ]
               : [
                    "<25>{#p/asriel2}{#f/15}* 她竟然没逃跑...",
                    '<25>{#p/asriel2}{#f/16}* 呵，有点意思。'
                 ]
      },
      truetext: {
         monologue1: () => [
            '<32>{#p/basic}* Wait.',
            SAVE.data.b.flirt_papyrus
               ? '<32>* I think you forgot to date Papyrus...'
               : '<32>* I think you forgot to hang out with Papyrus...',
            "<32>* ... come on, we can't just leave him behind!"
         ],
         monologue2: [
            '<32>{#p/basic}* Wait.',
            "<32>* Didn't Papyrus want you to hang out with Undyne earlier?",
            "<32>* ... come on, we can't just forget about her!",
            "<32>* Even if she's a bit of a jerk."
         ],
         monologue3: [
            '<32>{#p/basic}* Wait.',
            '<32>* You forgot about Undyne!',
            '<32>* First Papyrus, and now this?',
            "<33>* ... come on, let's go back to her house..."
         ],
         storyEnding: () => [
            '<32>{#p/basic}* ...\n* So now you know.',
            "<32>* And, because of Asriel's diary, you know I got sick on purpose.",
            '<32>* I tricked him, manipulated him into this stupid plan to save everyone.',
            '<32>* Only to turn it into a quest for revenge, and even that was a waste in the end.',
            '<32>* He stopped me from fighting back, and I was mad at him for so long...',
            '<32>* ...',
            '<32>* Maybe... part of me still is.',
            "<32>* I don't know.",
            "<32>* I always think about how things could have been, if only he'd listened...",
            '<32>* ... but at the same time...',
            "<32>* It was probably for the best that he didn't.",
            '<32>* ...',
            '<32>* Look... I just want you to know that, having you by my side...',
            "<32>* It's made me feel like I have a purpose in this world.",
            "<32>* So, for that, I'm thankful.",
            '<32>* I really feel like things are going to get better.',
            '<32>* Or maybe... the end is nearer than I thought.',
            '<32>* ...\n* Either way.',
            "<32>* The force field isn't too far from here.",
            ...(SAVE.data.n.plot_date < 2.1
               ? [
                    '<32>* Though, before we go...',
                    ...(SAVE.data.n.plot_date < 1.1
                       ? [
                            '<32>* We should really go back to see Papyrus.',
                            "<32>* You wouldn't want to keep him waiting at his house, would you?"
                         ]
                       : [
                            '<32>* We should really go back to see Undyne.',
                            "<32>* You wouldn't want to keep Papyrus waiting at her house, would you?"
                         ])
                 ]
               : [
                    "<32>* I'm sure you've had enough of my rambling, so we should probably just get going.",
                    "<32>* Who knows.\n* Maybe it'll make sense once the force field is down.",
                    "<32>* ...\n* We'll see."
                 ])
         ],
         epilogue: [
            () => [
               "<32>{#p/basic}* That's not to say we have to go and find him right this second.",
               "<32>* It's just...",
               '<32>* ...',
               '<32>{#p/human}* (You hear a large sigh.)',
               '<32>{#p/basic}* Frisk...',
               "<32>* There's still something I haven't told you yet.",
               "<32>* It's about my past, and...",
               "<32>* It's the reason why I'm so desperate to talk to him.",
               "<32>* I'm sorry.",
               '<32>* I just...',
               '<32>* I need to tell you how I got this way.',
               '<32>* I need you to understand.'
            ],
            () => [
               '<32>{#p/basic}* Frisk...',
               "<32>* Can you imagine what it's like to lose your whole family in one night?",
               '<32>* Can you imagine...',
               "<32>* What it's like to know that you're the one to blame?",
               '<32>* ...',
               '<32>* For the past hundred years...',
               "<32>* It's like I've been stuck in limbo.",
               '<32>* No matter how hard I try...',
               "<32>* I just can't seem to break away.",
               '<32>* ...',
               "<32>* I've been forced to watch as everyone else gets to live their life.",
               '<32>* I see them make friends...',
               '<32>* I see them laugh, and love...',
               "<32>* But that's... all I ever do.",
               '<32>* I just... see them.',
               '<32>* Nothing more.'
            ],
            () => [
               '<32>{#p/basic}* When the ghost family found me, mere days after the incident...',
               "<32>* I thought, maybe, this wouldn't be so bad.",
               '<32>* I might be trapped in purgatory, but...',
               "<32>* ... at least I'd have people to talk to, right?",
               '<32>* ...',
               '<32>* They tried to help me...',
               '<32>* They tried to make me feel at home...',
               "<32>* ... but they just couldn't understand what I was going through.",
               '<32>* They were all so young...',
               '<32>* To be honest, they still kind of are.',
               '<32>* Monsters are like children in that way...',
               '<32>* Their innocence is what defines them.',
               "<32>* But it meant they didn't really know how to relate to me.",
               '<32>* ...',
               '<32>* Since then...',
               "<32>* ... I've been on my own."
            ],
            () => [
               '<32>{#p/basic}* With all these years to myself...',
               '<32>* With nothing to do but sit, and think...',
               "<32>* It's a miracle I haven't gone insane.",
               '<32>* Hell, maybe that, too, is part of my \"punishment.\"',
               '<32>* Not through death, nor insanity, nor common company...',
               '<32>* Not through any means am I ever allowed an escape.',
               "<32>* ...\n* But there's a problem with that theory.",
               '<32>* An exception.',
               '<32>* Can you guess what it is?',
               "<32>* I'm sure you've figured it out by now...",
               '<32>* ...',
               "<32>* It's you, Frisk.",
               "<32>* You're the only one who's truly been able to understand me."
            ],
            () => [
               "<32>{#p/basic}* You might think the other humans would've heard me...",
               '<32>* ... but no.',
               "<32>* Sometimes, I'd get a word in, or...",
               '<32>* Appear to them in a dream if I got lucky.',
               '<32>* But you...',
               "<32>* Maybe it's because our SOULs are so similar, but...",
               '<32>* Not only can you hear me...',
               '<32>* I can \"hear\" you, too.',
               "<32>* It's not much, but it's enough to know what you're thinking.",
               '<32>* For example, right now...',
               '<32>* ...',
               '<32>* Frisk, you...',
               "<32>* ... you know that isn't possible, right?",
               choicer.create('* (How will you hug?)', 'Softly', 'Tightly', 'Carefully', 'Desperately'),
               '<32>{#p/basic}* ... silly Frisk.',
               '<32>* If I could accept it, I would.',
               "<32>* But... I can't."
            ],
            () => [
               '<32>{#p/basic}* ... Frisk, I...',
               "<32>* I know I seem like the last person who'd say something like this, but...",
               '<32>* I really love you, Frisk.',
               '<32>* Just like I loved him.',
               "<32>* We're like... a family now.",
               '<32>* Heh.',
               '<32>* ... thanks for giving me the chance to experience the world like new again.',
               '<32>* ... thanks for being the kind of person that you are.',
               '<32>* But... Frisk.',
               "<32>* I'm not sure if I have a future in this world.",
               "<32>* Once you're gone...",
               "<32>* ... I'd just go back to being alone again.",
               "<32>* That's why... it's important I get to talk to him, you know?",
               "<32>* At least then, I'd be able to move on from what happened.",
               "<32>* A lonely existence... wouldn't be so bad after that.",
               '<32>* But... I know.',
               "<32>* I'm sure there's a lot of people you'd like to catch up with first.",
               '<33>* So, go and do that, and then...',
               "<32>* Once you're ready...",
               "<32>* ... we'll go and find him.",
               '<32>* Alright?',
               '<32>* ...',
               "<32>* Well, that's all.",
               "<32>* Let's continue, shall we?"
            ]
         ]
      },
      npc: {
         picnic_oni: pager.create(
            0,
            [
               "<32>{#p/basic}{#npc/a}* I've never been to the so- called Citadel, but it's nice.",
               "<32>* Despite being a full-on city, it's still easier to navigate than the rest of the outpost!",
               "<32>* Now isn't that something."
            ],
            [ "<32>{#p/basic}{#npc/a}* I've never been one for mazes and strange puzzles.\n* So this really is great." ]
         ),
         picnic_clamguy: pager.create(
            0,
            [
               '<32>{#p/basic}{#npc/a}* Crazy to think they built this city in such a short period of time.',
               "<32>* And unlike Aerialis, they didn't resort to weird space anomalies to make it bigger.",
               "<32>* But all that technobabble's beyond me, anyway.\n* It's just good to be here."
            ],
            [ '<32>{#p/basic}{#npc/a}* A life free of nonsensical technical terms...\n* Peace, at last.' ]
         ),
         picnic_charles: pager.create(
            0,
            [
               "<32>{#p/basic}{#npc/a}* Don't mind me, I'm just hanging out here with my best pals!",
               '<32>* Working at the CORE was really hard... but we are all done now.',
               '<32>* Here, we can celebrate our amazing work!',
               '<32>* I sure do love HANGOUT!'
            ],
            [ '<32>{#p/basic}{#npc/a}* I can tell you love it too!' ]
         ),
         picnic_proskater: pager.create(
            0,
            [
               "<32>{#p/basic}{#npc/a}* So... no more school?\n* I mean, it's my fault for going, really.",
               '<32>* Nobody actually has to go to school, but you might be worse off without it.',
               "<32>* Whatever.\n* I guess I still don't know what I want in life."
            ],
            [ '<32>{#p/basic}{#npc/a}* Going to parties like this all the time could be fun...' ]
         ),
         picnic_papyrus: pager.create(
            0,
            [
               '<18>{#p/papyrus}{#f/0}{#npc/a}HELLO THERE, FRISK!',
               "<18>{#f/9}I'M ONLY PREPARING THE GREATEST DISH I'VE EVER MADE!",
               "<18>{#f/5}I ONLY WISH IT'D COOK A LITTLE FASTER...",
               "<18>{#f/7}AT THIS RATE, I'LL HAVE TO SERVE IT ON THE TRANSPORT!",
               "<25>{#p/sans}{#npc}* actually, i think that'd be pretty cool.",
               '<25>{#p/sans}{#f/3}* imagine, everyone eating it as they first see the homeworld...',
               "<25>{#p/sans}{#f/2}* it'd be a dish they'd NEVER forget.",
               '<18>{#p/papyrus}{#f/4}{#npc/a}YOU MAKE A TEMPTING OFFER...',
               "<18>{#p/papyrus}{#f/5}BUT I ALREADY PROMISED I'D GET IT MADE HERE."
            ],
            [
               "<18>{#p/papyrus}{#f/5}{#npc/a}HEY.\nIT'S NOT ALL BAD.",
               "<18>{#f/0}THE SEASONING IN ASGORE'S KITCHEN IS EXCELLENT!",
               '<18>{#f/4}SALT, PEPPER...\nANTI-GRAVITY POWDER...',
               '<18>{#f/9}THE POSSIBILITIES ARE... RATHER ZESTY!!'
            ],
            [
               "<18>{#p/papyrus}{#f/0}{#npc/a}DON'T WORRY, I WON'T GET -TOO- CRAZY.",
               "<18>{#f/5}IT'S NOT LIKE I'D TAKE SUCH A BIG GAMBLE...",
               '<18>{#f/0}WITH SUCH A VAST PARTY OF GUESTS TO FEED.',
               '<18>{#f/9}BESIDES, THE RECIPE SPECIFIES THE SEASONING!',
               '<18>{#f/4}I HEAR IT FLOATS IN YOUR MOUTH...'
            ],
            [ '<18>{#p/papyrus}{#f/0}{#npc/a}NOTHING TO WORRY ABOUT AT ALL.' ]
         ),
         picnic_kidd: pager.create(
            0,
            () =>
               SAVE.data.b.f_state_kidd_betray
                  ? [ '<25>{#p/kidd}{#f/4}{#npc/a}* Yo, uh...', '<25>{#f/4}* I think you should just leave me alone.' ]
                  : [
                       "<25>{#p/kidd}{#f/2}{#npc/a}* I'm gonna miss this place, dude...",
                       '<25>{#f/3}* Starton, the Foundry, Aerialis, the Citadel...',
                       "<25>{#f/6}* At least we'll still be together on the new homeworld.",
                       "<25>{#f/1}* I can't wait to see what it's like out there!"
                    ],
            () =>
               SAVE.data.b.f_state_kidd_betray
                  ? [ '<25>{#p/kidd}{#f/4}{#npc/a}* ...' ]
                  : [
                       '<25>{#p/kidd}{#f/1}{#npc/a}{#f/4}* ... oh, uh, I know you probably figured it out, but...',
                       "<25>{#f/4}* I don't really have parents.\n* I just made them up.",
                       "<26>{#f/3}* But we're friends now, right? So... I hope you can forgive me for that."
                    ],
            () =>
               SAVE.data.b.f_state_kidd_betray
                  ? [ '<25>{#p/kidd}{#f/4}{#npc/a}* Go away...' ]
                  : [ '<25>{#p/kidd}{#f/3}{#npc/a}* Thanks for being a good friend, Frisk.' ]
         ),
         picnic_dragon: pager.create(
            0,
            [
               "<32>{#p/basic}{#npc/a}* So you're telling me we can't leave until everyone's ready?",
               "<32>* I, uh, I guess that's only fair, huh.",
               "<32>* Well, it's okay, then."
            ],
            [ "<32>{#p/basic}{#npc/a}* What am I even complaining about?\n* We're free..." ]
         ),
         tvfish: pager.create(
            0,
            () =>
               player.face !== 'up' // NO-TRANSLATE

                  ? []
                  : [
                       '<25>{#p/undyne}{#f/14}{#npc/a}* Those girls who run the rec center found this movie on a trash run.',
                       "<25>{#f/1}* So, Alphys and I decided we'd put it on.",
                       "<25>{#f/8}* FUHUHU!!\n* THIS IS THE BEST DATE I'VE EVER HAD!!",
                       "<25>{#f/12}* And, uh, I guess it's also the only date I've ever had.",
                       '<25>{#f/7}* BUT STILL!'
                    ],
            () =>
               player.face !== 'up' // NO-TRANSLATE

                  ? []
                  : [
                       '<25>{#p/undyne}{#f/1}{#npc/a}* I never realized watching movies could be so addicting!',
                       '<25>{#p/undyne}{#f/12}{#npc/a}* Now...\n* If you could leave us to it...'
                    ],
            () =>
               player.face !== 'up' // NO-TRANSLATE

                  ? []
                  : [ "<25>{#p/undyne}{#f/7}{#npc/a}* Come on, you're blocking the view!" ]
         ),
         tvlizard: pager.create(
            0,
            () =>
               player.face !== 'up' // NO-TRANSLATE

                  ? []
                  : SAVE.data.b.c_state_secret3 && !SAVE.data.b.c_state_secret3_used
                  ? ((SAVE.data.b.c_state_secret3_used = true),
                    [
                       '<25>{#p/alphys}{#g/alphysInquisitive}{#npc/a}* ... huh?\n* You wanted to tell me something?',
                       '<32>{#p/human}* (You recite the scientific notes shared by Professor Roman in Archive Six.)',
                       '<25>{#p/alphys}{#g/alphysOhGodNo}* Woah... woah!',
                       '<25>{#g/alphysNervousLaugh}* This could be the key to solving intergalactic travel...',
                       '<25>{#g/alphysHellYeah}* ... with wormholes!',
                       "<25>{#g/alphysWelp}* I've been trying to crack this for so long..."
                    ])
                  : [
                       '<25>{#p/alphys}{#g/alphysCutscene1}{#npc/a}* After all these years, we finally found it!',
                       '<25>{#g/alphysHellYeah}* The third movie in the Mew Mew trilogy...\n* Mew Mew Time Twist!',
                       '<25>{#g/alphysWelp}* Also known as the TRUE sequel to Mew Mew Space Adventure.',
                       '<25>{#g/alphysYeahYouKnowWhatsUp}* This film puts Starfire to shame...'
                    ],
            () =>
               player.face !== 'up' // NO-TRANSLATE

                  ? []
                  : [
                       "<25>{#p/alphys}{#g/alphysHellYeah}{#npc/a}* It's about time!",
                       "<25>{#p/alphys}{#g/alphysFR}{#npc/a}* ... but if you don't mind..."
                    ],
            () =>
               player.face !== 'up' // NO-TRANSLATE

                  ? []
                  : [ '<25>{#p/alphys}{#g/alphysYupEverythingsFine}{#npc/a}* Movie first, talk later.' ]
         ),
         picnic_asgore: pager.create(
            0,
            () => [
               SAVE.data.b.c_state_secret5_used
                  ? '<25>{#p/asgore}{#npc/a}{#f/1}* Do not worry, Frisk.\n* I have not forgotten about the promise.'
                  : '<25>{#p/asgore}{#npc/a}{#f/6}* Do not mind me, Frisk.\n* I am only looking for new clothes.',
               ...(SAVE.data.b.c_state_secret5 && !SAVE.data.b.c_state_secret5_used
                  ? ((SAVE.data.b.c_state_secret5_used = true),
                    [
                       '<25>{#p/asgore}{#npc/a}{#f/21}* Oh?\n* You have something to tell me?',
                       '<32>{#npc}{#p/human}* (You repeat the promise made to you by Asgore in Archive Six.)',
                       '<25>{#p/asgore}{#npc/a}{#f/8}* ...！',
                       '<25>{#f/1}* Frisk...',
                       '<25>{#f/1}* ... I am not sure I can do that, but...',
                       '<25>{#f/6}* For you, I will try.'
                    ])
                  : [])
            ],
            () =>
               SAVE.data.b.c_state_secret5_used
                  ? [ '<25>{#p/asgore}{#npc/a}{#f/1}* I only hope that I can get through to her.' ]
                  : [ '<25>{#p/asgore}{#npc/a}{#f/6}* I wonder if humans like wearing brown.' ],
            () =>
               SAVE.data.b.c_state_secret5_used
                  ? [ '<25>{#p/asgore}{#npc/a}{#f/2}* ...' ]
                  : [ '<25>{#p/asgore}{#npc/a}{#f/21}* La la, la la...' ]
         )
      },
      story: {
         lv20: [ '<32>{#p/human}* （飞船渐行渐远。）' ],
         postnoot0: () =>
            world.trueKills === 0 && SAVE.data.n.state_foundry_undyne !== 1 && SAVE.flag.n.neutral_twinkly_choice === 0
               ? [
                    '<25>{*}{#p/twinkly}{#f/19}{#e/twinkly/1}Why...?',
                    '<25>{*}{#e/twinkly/2}Why did you let me go?',
                    "<25>{*}{#e/twinkly/6}Don't you realize that being nice...",
                    '<25>{*}{#e/twinkly/7}... only hurts you in the end?',
                    '<25>{*}{#e/twinkly/5}Look at yourself.',
                    ...(SAVE.data.b.ultrashortcut
                       ? [
                            "<25>{*}{#e/twinkly/3}You've made all these wonderful...",
                            '<25>{*}{#e/twinkly/4}... uh...',
                            '<25>{*}{#e/twinkly/0}Shoot, I forgot you skipped over the entire journey.',
                            "<25>{*}{#e/twinkly/24}Eh, screw it.\nIt would've been a really sappy speech anyway.",
                            "<25>{*}{#e/twinkly/15}... let's just cut to the chase, shall we?",
                            '<25>{*}{#e/twinkly/21}...'
                         ]
                       : [
                            "<25>{*}{#e/twinkly/3}You've made all these wonderful friends...",
                            "<25>{*}{#e/twinkly/4}But now, you'll probably never get to see them again.",
                            "<25>{*}{#e/twinkly/0}Not to mention how long they'll have to wait for the next human.",
                            "<25>{*}{#e/twinkly/1}Hurts, doesn't it?",
                            ...(1 <= SAVE.flag.n.killed_sans
                               ? SAVE.flag.n.genocide_milestone < 7
                                  ? [ '<25>{*}{#e/twinkly/7}If you had just stuck with our ORIGINAL plan...' ]
                                  : [ '<25>{*}{#e/twinkly/7}If you had just acted like when we were together...' ]
                               : [ '<25>{*}{#e/twinkly/7}If you had just gone through without caring about anyone...' ]),
                            "<25>{*}{#e/twinkly/1}You wouldn't have to feel bad now.",
                            "<25>{*}{#e/twinkly/8}So... I don't get it.",
                            '<25>{*}{#e/twinkly/13}If you really did everything the right way...',
                            '<25>{*}{#e/twinkly/1}Why did things still end up like this?',
                            '<25>{*}{#e/twinkly/2}Why...?',
                            '<25>{*}{#e/twinkly/2}Is life really that unfair?',
                            '<25>{*}{#e/twinkly/3}...',
                            '<25>{*}{#e/twinkly/0}... say.'
                         ]),
                    '<25>{*}{#e/twinkly/21}What if I told you...',
                    '<25>{*}{#e/twinkly/15}I knew some way to get you a better ending?',
                    ...(SAVE.data.b.ultrashortcut || SAVE.data.s.room === '' || SAVE.data.s.room === spawn // NO-TRANSLATE

                       ? [ "<25>{*}{#e/twinkly/20}You'll have to start over, and..." ]
                       : [ "<25>{*}{#e/twinkly/20}You'll CONTINUE from here, and..." ]),
                    ...(SAVE.data.n.plot_date === 2.1
                       ? [
                            "<25>{*}{#e/twinkly/15}Well, in the meantime, why don't you go back to Asgore?",
                            "<25>{*}{#e/twinkly/17}As long as you behave, I PROMISE I won't kill him."
                         ]
                       : 1.1 <= SAVE.data.n.plot_date
                       ? [
                            "<25>{*}{#e/twinkly/15}Well, in the meantime, why don't you go see Undyne?",
                            '<25>{*}{#e/twinkly/15}It seems like you could have been better friends.',
                            '<25>{*}{#e/twinkly/20}Who knows?',
                            "<25>{*}{#e/twinkly/17}Maybe she's got the key to your happiness?"
                         ]
                       : [
                            "<25>{*}{#e/twinkly/15}Well, in the meantime, why don't you go see Papyrus, then Undyne?",
                            '<25>{*}{#e/twinkly/15}It seems like you could have all been better friends.',
                            '<25>{*}{#e/twinkly/20}Who knows?',
                            "<25>{*}{#e/twinkly/17}Maybe they've got the key to your happiness?"
                         ]),
                    '<25>{*}{#e/twinkly/0}...',
                    '<25>{*}{#e/twinkly/15}See you soon.'
                 ]
               : [
                    '<25>{*}{#p/twinkly}{#f/19}{#e/twinkly/0}Hey.',
                    "<25>{*}{#e/twinkly/0}Since you defeated me, I've been thinking.",
                    ...(world.trueKills > 0 || SAVE.data.n.state_foundry_undyne === 1
                       ? [
                            '<25>{*}{#e/twinkly/2}Is it truly necessary to kill...?',
                            '<25>{*}{#e/twinkly/3}I...',
                            ...(1 <= SAVE.flag.n.killed_sans
                               ? [
                                    '<25>{*}{#e/twinkly/1}I enjoyed what we did in the past together, but...',
                                    '<25>{*}{#e/twinkly/2}In the end, what did it really get us?'
                                 ]
                               : [
                                    "<25>{*}{#e/twinkly/4}I honestly can't be sure anymore.",
                                    '<25>{*}{#e/twinkly/2}In the end, what does it really get you?'
                                 ]),

                            '<25>{*}{#e/twinkly/13}A rush of pleasure, and then...'
                         ]
                       : [
                            '<25>{*}{#e/twinkly/2}After sparing everyone else, was killing me really worth it...?',
                            '<25>{*}{#e/twinkly/3}You...',
                            ...(1 <= SAVE.flag.n.killed_sans
                               ? [
                                    '<25>{*}{#e/twinkly/1}You might regret what we did in the past together, but...',
                                    '<25>{*}{#e/twinkly/2}Can you honestly say killing me made up for that?'
                                 ]
                               : [
                                    "<25>{*}{#e/twinkly/4}You might not like me for what I've done, but...",
                                    '<25>{*}{#e/twinkly/2}Can you honestly say killing me made any difference?'
                                 ]),
                            '<25>{*}{#e/twinkly/13}Perhaps you felt some catharsis, but after that...'
                         ]),
                    '<25>{*}{#e/twinkly/3}... nothing.',
                    '<25>{*}{#e/twinkly/0}...',
                    '<25>{*}{#e/twinkly/0}I have an idea.',
                    ...(world.trueKills > 0 || SAVE.data.n.state_foundry_undyne === 1
                       ? [
                            '<25>{*}{#e/twinkly/15}A challenge, if you will.',
                            ...(SAVE.data.s.room === '' || SAVE.data.s.room === spawn // NO-TRANSLATE

                               ? [ "<25>{*}{#e/twinkly/14}You'll have to start over, of course..." ]
                               : [ "<25>{*}{#e/twinkly/14}You'll have to RESET, of course..." ]),
                            "<25>{*}{#e/twinkly/15}But if you can prove to me that you're strong enough to survive...",
                            '<25>{*}{#e/twinkly/15}If you can get through, to the end from the beginning...',
                            ...(world.trueKills > 0
                               ? [
                                    '<25>{*}{#e/twinkly/0}... without killing a single thing...',
                                    "<25>{*}{#e/twinkly/18}... then maybe, I won't kill the king."
                                 ]
                               : [
                                    '<25>{*}{#e/twinkly/0}... without leaving anyone behind...',
                                    "<25>{*}{#e/twinkly/18}... then maybe, the king won't have to die."
                                 ])
                         ]
                       : [
                            '<25>{*}{#e/twinkly/15}A request, if you will.',
                            ...(SAVE.data.b.ultrashortcut || SAVE.data.s.room === '' || SAVE.data.s.room === spawn // NO-TRANSLATE

                               ? [ "<25>{*}{#e/twinkly/20}You'll have to start over, and..." ]
                               : [ "<25>{*}{#e/twinkly/20}You'll CONTINUE from here, and..." ]),
                            '<25>{*}{#e/twinkly/15}Well, in the meantime, see if you can get back to Asgore.',
                            '<25>{*}{#e/twinkly/17}See if you can do it without killing anyone.'
                         ]),
                    "<25>{*}{#e/twinkly/20}You do want to know what he's planning, don't you?",
                    '<25>{*}{#e/twinkly/20}To see what lies in the depths of his precious \"archive?\"',
                    '<25>{*}{#e/twinkly/15}Well.',
                    '<25>{*}{#e/twinkly/15}Believe me when I tell you that what you saw with me...',
                    "<25>{*}{#e/twinkly/20}... doesn't even BEGIN to scratch the surface.",
                    '<25>{*}{#e/twinkly/17}Hee hee hee.',
                    "<25>{*}{#e/twinkly/18}I'll leave you to it!"
                 ],
         postnoot1: (rep: number) =>
            rep < 2
               ? [
                    "<25>{*}{#p/twinkly}{#f/19}{#e/twinkly/17}I'm sorry, what's that?",
                    ...(rep < 1
                       ? [ "<25>{*}{#e/twinkly/17}You didn't get your happy ending?" ]
                       : [ "<25>{*}{#e/twinkly/17}You STILL didn't get your happy ending?" ]),
                    ...(SAVE.data.b.ultrashortcut
                       ? [
                            '<25>{*}{#e/twinkly/21}...',
                            ...(SAVE.flag.b.ultra_twinkly
                               ? [
                                    "<25>{*}{#e/twinkly/21}Well gee, if it wasn't enough to do it before...",
                                    "<25>{*}{#e/twinkly/16}You've gone and SKIPPED IT ALL AGAIN!",
                                    "<25>{*}{#e/twinkly/15}Not that I'm surprised.",
                                    '<25>{*}{#e/twinkly/15}You do seem like the type to break the rules.',
                                    "<25>{*}{#e/twinkly/20}Eventually, you'll realize who you've been missing...",
                                    "<25>{*}{#e/twinkly/15}And you'll go see them and make it back to the king.",
                                    '<25>{*}{#e/twinkly/15}Preferably without killing a single thing.',
                                    '<25>{*}{#e/twinkly/18}You know the drill!'
                                 ]
                               : [
                                    '<25>{*}{#e/twinkly/21}Well gee, I wonder why THAT might be...',
                                    "<25>{*}{#e/twinkly/16}If only you didn't skip over THE ENTIRE JOURNEY!",
                                    '<25>{*}{#e/twinkly/24}... but, whatever.',
                                    '<25>{*}{#e/twinkly/23}Enjoy your special ending while it lasts.'
                                 ])
                         ]
                       : world.trueKills > 0 || SAVE.data.n.state_foundry_undyne === 1
                       ? [
                            ...(rep < 1
                               ? [
                                    '<25>{*}{#e/twinkly/20}...',
                                    '<25>{*}{#e/twinkly/20}Well, well...',
                                    world.trueKills > 1
                                       ? "<25>{*}{#e/twinkly/16}Maybe next time, don't KILL anyone!"
                                       : world.trueKills > 0
                                       ? "<25>{*}{#e/twinkly/16}Maybe next time, don't KILL someone!"
                                       : "<25>{*}{#e/twinkly/16}Maybe next time, don't leave someone to DIE!",
                                    '<25>{*}{#e/twinkly/15}If you can manage that, and manage to befriend Papyrus and Undyne...',
                                    ...(SAVE.data.b.ubershortcut
                                       ? [ "<25>{*}{#e/twinkly/15}You won't have to skip an entire area next time." ]
                                       : [ '<25>{*}{#e/twinkly/15}You might actually get somewhere for once.' ])
                                 ]
                               : [
                                    '<25>{*}{#e/twinkly/14}...',
                                    '<25>{*}{#e/twinkly/14}Goodness gracious...',
                                    world.trueKills > 1
                                       ? "<25>{*}{#e/twinkly/22}For the last time, don't KILL anyone!"
                                       : world.trueKills > 0
                                       ? "<25>{*}{#e/twinkly/22}For the last time, don't KILL someone!"
                                       : "<25>{*}{#e/twinkly/22}For the last time, don't leave someone to DIE!",
                                    ...(SAVE.data.b.ubershortcut
                                       ? [ "<25>{*}{#e/twinkly/22}And don't skip an entire area, either!" ]
                                       : [ '<25>{*}{#e/twinkly/22}Why is that so difficult for you to grasp!' ])
                                 ])
                         ]
                       : [
                            '<25>{*}{#e/twinkly/0}...',
                            ...(SAVE.data.b.ultrashortcut || SAVE.data.s.room === '' || SAVE.data.s.room === spawn // NO-TRANSLATE

                               ? [ '<25>{*}{#e/twinkly/21}... maybe, if you start over...' ]
                               : [ '<25>{*}{#e/twinkly/21}... maybe, if you CONTINUE from here...' ]),
                            ...(rep < 1
                               ? [
                                    1.1 <= SAVE.data.n.plot_date
                                       ? "<25>{*}{#e/twinkly/15}You'll befriend Undyne this time."
                                       : "<25>{*}{#e/twinkly/15}You'll befriend Papyrus and Undyne this time.",

                                    '<25>{*}{#e/twinkly/14}The vaunted \"power of friendship...\"',
                                    '<25>{*}{#e/twinkly/23}Just this once, it might actually be good for something.'
                                 ]
                               : [
                                    1.1 <= SAVE.data.n.plot_date
                                       ? "<25>{*}{#e/twinkly/16}You'll finally befriend Undyne!"
                                       : "<25>{*}{#e/twinkly/16}You'll finally befriend Papyrus and Undyne!",
                                    "<25>{*}{#e/twinkly/20}After all, what's the harm in a little friendship?",
                                    "<25>{*}{#e/twinkly/15}It'll be fun for the whole family."
                                 ])
                         ])
                 ]
               : [
                    [
                       '<25>{*}{#p/twinkly}{#f/19}{#e/twinkly/15}... so...',
                       '<25>{*}{#e/twinkly/15}Get up to anything lately?',
                       '<25>{*}{#e/twinkly/15}Make any new friends?',
                       '<25>{*}{#e/twinkly/0}...',
                       '<25>{*}{#e/twinkly/17}Personally, I used to make friends ALL the time.',
                       '<25>{*}{#e/twinkly/20}Like Papyrus, for example.',
                       "<25>{*}{#e/twinkly/15}He won't remember this, but I once trained him to be a royal guard.",
                       '<25>{*}{#e/twinkly/18}In fact, I made him get promoted to captain!',
                       "<25>{*}{#e/twinkly/24}Granted... it wasn't easy.",
                       "<25>{*}{#e/twinkly/15}I miiiight've had to break his bones a few times.",
                       '<25>{*}{#e/twinkly/19}But after that, he toughened up real good!',
                       '<25>{*}{#e/twinkly/17}Funny how people change if you push the right buttons, huh?',
                       "<25>{*}{#e/twinkly/15}Anyway.\nThat timeline's gone now.",
                       '<25>{*}{#e/twinkly/20}But hey, if you come back here again...',
                       "<25>{*}{#e/twinkly/18}I'll tell you about some others."
                    ],
                    [
                       '<25>{*}{#p/twinkly}{#f/19}{#e/twinkly/20}Ready for another round of story time?',
                       '<25>{*}{#e/twinkly/15}Oh, who am I kidding.\nOf course you are.',
                       '<25>{*}{#e/twinkly/21}So, that room...',
                       '<25>{*}{#e/twinkly/0}The one with the boxes with humans inside.',
                       "<25>{*}{#e/twinkly/15}It's actually been pretty hard, even for me, to get into.",
                       '<25>{*}{#e/twinkly/24}In the earliest timelines, I resorted to... foolish methods.',
                       '<25>{*}{#e/twinkly/13}Begging...\nBargaining...\nFake-crying...',
                       '<25>{*}{#e/twinkly/4}I even tried using puppy-dog eyes to get Asgore to show them to me.',
                       '<25>{*}{#e/twinkly/0}I wanted to be \"nice,\" but none of those things worked.',
                       '<25>{*}{#e/twinkly/15}Of course, in later timelines, I knew how to get what I wanted.',
                       '<25>{*}{#e/twinkly/20}Suffocating everyone to death usually did the trick...',
                       '<25>{*}{#e/twinkly/16}But cranking the gravity up and crushing them was just as fun!',
                       "<25>{*}{#e/twinkly/15}Anyway, all I'm saying is that the room's protected.",
                       "<25>{*}{#e/twinkly/17}You're only getting in there because they WANT you in there.",
                       "<25>{*}{#e/twinkly/20}Well.\nThat's all for now.",
                       '<25>{*}{#e/twinkly/19}Bye-bye!'
                    ],
                    [
                       '<25>{*}{#p/twinkly}{#f/19}{#e/twinkly/14}Seriously?\nAgain?',
                       '<25>{*}{#e/twinkly/0}Wow.',
                       '<25>{*}{#e/twinkly/0}You must be getting really tired of this.',
                       "<25>{*}{#e/twinkly/15}But that's fine.\nI'm getting tired of it, too.",
                       '<25>{*}{#e/twinkly/20}I wonder...',
                       '<25>{*}{#e/twinkly/20}Are you THAT bad at following my instructions?',
                       '<25>{*}{#e/twinkly/20}Or are you just doing this on purpose?',
                       "<25>{*}{#e/twinkly/15}... eh, don't tell me.",
                       '<25>{*}{#e/twinkly/18}Knowing everything is no fun, anyway.',
                       "<25>{*}{#e/twinkly/15}Besides, I'm in a good mood.",
                       '<25>{*}{#e/twinkly/20}So... why not give you the benefit of the doubt?',
                       '<25>{*}{#e/twinkly/14}If you really are that much of an IDIOT...',
                       '<25>{*}{#e/twinkly/15}Come back here again, and I might have a way to help you.',
                       '<25>{*}{#e/twinkly/17}... until next time.'
                    ],
                    [
                       "<25>{*}{#p/twinkly}{#f/19}{#e/twinkly/0}So you're back again.",
                       "<25>{*}{#e/twinkly/0}I'd ask you to explain yourself, but I don't really care.",
                       '<25>{*}{#e/twinkly/0}You came back, so... that means you need my help.',
                       '<25>{*}{#e/twinkly/21}...',
                       "<25>{*}{#e/twinkly/15}Listen.\nI'm only going to say this once.",
                       '<25>{*}{#e/twinkly/15}From now on, the monsters you encounter...',
                       '<25>{*}{#e/twinkly/15}Will have greatly reduced {@fill=#ff0}ATTACK{@fill=#fff}.',
                       '<25>{*}{#e/twinkly/20}Understand?\nTheir {@fill=#ff0}ATTACK{@fill=#fff} will be reduced.',
                       '<25>{*}{#e/twinkly/20}Which makes it easier to survive without gaining LOVE.',
                       "<25>{*}{#e/twinkly/15}Boy, it's a good thing the CORE controls the atmosphere.",
                       "<25>{*}{#e/twinkly/20}Otherwise, this wouldn't be possible!",
                       '<25>{*}{#e/twinkly/14}As for Papyrus and Undyne...',
                       "<25>{*}{#e/twinkly/23}Well, if you can't figure THAT out, then you're hopeless.",
                       "<25>{*}{#e/twinkly/15}Just don't be an idiot, and you'll be fine.",
                       "<25>{*}{#e/twinkly/15}... okay.\nThat's all.",
                       '<25>{*}{#e/twinkly/15}Good luck.'
                    ],
                    [
                       '<25>{*}{#p/twinkly}{#f/19}{#e/twinkly/0}...',
                       "<25>{*}{#e/twinkly/0}... you're just trying to get a reaction out of me, aren'tcha?",
                       '<25>{*}{#e/twinkly/15}I see.\nI hope it was worth it.',
                       "<25>{*}{#e/twinkly/17}Because I'm NEVER coming back.",
                       "<25>{*}{#e/twinkly/0}Not until you do what I've told you to do.",
                       '<25>{*}{#e/twinkly/15}What?\nYou think you can just disobey me forever?',
                       '<25>{*}{#e/twinkly/15}... no.',
                       "<25>{*}{#e/twinkly/21}Sooner or later, you'll get bored...",
                       '<25>{*}{#e/twinkly/15}And your curiosity will inevitably get the better of you.',
                       '<25>{*}{#e/twinkly/23}Trust me.\nI know how this works.',
                       '<25>{*}{#e/twinkly/20}It applies humans and monsters all the same...',
                       '<25>{*}{#e/twinkly/17}Curiosity eventually gets the better of EVERYONE.',
                       '<25>{*}{#e/twinkly/16}Have your fun while it lasts, idiot!'
                    ]
                 ][rep - 2],
         postnoot2: (rep: number, puzzlesolve: boolean, enemyweaken: boolean) => [
            ...((puzzlesolve || enemyweaken) && !SAVE.flag.b.neutral_reload_interloper
               ? [
                    '<25>{*}{#p/twinkly}{#f/19}{#e/twinkly/20}By the way...',
                    ...(puzzlesolve
                       ? [ '<25>{*}{#e/twinkly/15}You could thank me for solving those puzzles for you.' ]
                       : []),
                    ...(enemyweaken
                       ? [
                            puzzlesolve
                               ? '<25>{*}{#e/twinkly/15}Oh, and for screwing with the atmospheric system.'
                               : '<25>{*}{#e/twinkly/15}You could thank me for screwing with the atmospheric system.',
                            '<25>{*}{#e/twinkly/21}I figured, if you DID want to kill anyone...',
                            '<25>{*}{#e/twinkly/15}I might as well weaken your opposition to make it easier.'
                         ]
                       : []),
                    "<25>{*}{#e/twinkly/17}Wasn't that just so considerate of me?",
                    '<25>{*}{#e/twinkly/17}...'
                 ]
               : []),
            ...(rep < 1
               ? [
                    "<25>{*}{#p/twinkly}{#f/19}{#e/twinkly/0}Like last time, I've given you Asgore's SOUL.",
                    '<25>{*}{#e/twinkly/0}Take it, and get out of my sight.',
                    '<25>{*}{#e/twinkly/20}And if you come back...',
                    '<25>{*}{#e/twinkly/15}Try to act a little more in line next time.'
                 ]
               : [
                    "<25>{*}{#p/twinkly}{#f/19}{#e/twinkly/0}Like always, I've given you Asgore's SOUL.",
                    '<25>{*}{#e/twinkly/0}Take it, and get out of my sight.',
                    '<25>{*}{#e/twinkly/20}And remember...',
                    "<25>{*}{#e/twinkly/15}This doesn't stop until you do exactly what I've told you."
                 ])
         ],
         oof: [ '<32>{#p/human}* (You catch your breath...)' ],
         killer1: [
            '<25>{*}{#p/twinkly}{#f/19}{#e/twinkly/15}Wow.',
            "<25>{*}{#e/twinkly/17}You really screwed things up, didn'tcha?",
            '<25>{*}{#e/twinkly/20}Not only did you lose control of the timeline...',
            "<25>{*}{#e/twinkly/15}But now, you can't get it back unless you start from scratch."
         ],
         killer2: [
            '<25>{*}{#p/twinkly}{#e/twinkly/14}I mean, hey.',
            "<25>{*}{#e/twinkly/23}If that's the ending you wanted, then...",
            '<25>{*}{#e/twinkly/15}Who am I to judge?',
            "<25>{*}{#e/twinkly/17}But you can't SERIOUSLY expect me to believe that, right?",
            '<25>{*}{#e/twinkly/17}That THIS is what you were trying to achieve?',
            '<25>{*}{#e/twinkly/15}I mean, sure.\nIt was interesting to watch.',
            "<25>{*}{#e/twinkly/17}But now that it's over..."
         ],
         killer3: [
            '<25>{*}{#p/twinkly}{#e/twinkly/15}... well.\nWe both know you can do better.',
            "<25>{*}{#e/twinkly/20}I'm not saying I'm some kind of saint or anything...",
            "<25>{*}{#e/twinkly/15}But, believe it or not, I'm on your side here.",
            '<25>{*}{#e/twinkly/15}I WANT you to regain control of the timeline.',
            '<25>{*}{#e/twinkly/17}After all, watching you sit here and do nothing...',
            "<25>{*}{#e/twinkly/17}Wouldn't be very entertaining now, would it?"
         ],
         killer4: [
            "<25>{*}{#p/twinkly}{#e/twinkly/15}... oh, and don't worry.",
            '<25>{*}{#e/twinkly/20}Even if I lose all my memories, what does it matter?',
            "<25>{*}{#e/twinkly/18}You'll remember.\nAnd you'll avoid this trap next time.",
            '<25>{*}{#e/twinkly/15}Then, we can go back to the way things were before.',
            '<25>{*}{#e/twinkly/20}So whaddya say?',
            '<25>{*}{#e/twinkly/20}Are you with me, $(name)?',
            '{*}{#e/twinkly/3}{%}'
         ],
         killer5: [
            '<25>{*}{#p/twinkly}{#e/twinkly/15}Oh, who am I kidding.',
            '<25>{*}{#e/twinkly/16}Of course you are!'
         ],
         please1: [
            '<25>{*}{#p/human}（...）',
            '<25>{*}(But still, the option remains.)',
            "<25>{*}(The option to erase everything you've ever known.)",
            '<25>{*}(The option to bring it all back to zero.)'
         ],
         please2: [
            '<25>{*}{#p/human}（...）',
            '<25>{*}(But you only want to live your life.)',
            '<25>{*}(You only want to see the future take hold.)',
            '<25>{*}(You only want to be yourself.)'
         ],
         please3: [
            '<25>{*}{#p/human}（...）',
            '<25>{*}(You thank the one beyond for what they have done...)',
            '<25>{*}(And ask that you be allowed to carry on.)'
         ],
         forget1: [ '<25>{*}{#p/human}（...）', "<25>{*}(You're so alone.)" ],
         forget2: [ '<25>{*}{#p/human}（...）', "<25>{*}(You're so afraid.)" ],
         forget3: [
            '<25>{*}{#p/human}（...）',
            "<25>{*}(You'd do anything to get another chance...)",
            "<25>{*}(... even if it means forgetting everything you've ever known.)"
         ],
         forget4: [
            '<25>{*}{#p/human}（...）',
            "<25>{*}(But the choice wasn't yours to make.)",
            "<25>{*}(It's someone else's choice, now.)"
         ],
         regret1: [ '<25>{*}{#p/twinkly}{#f/19}{#e/twinkly/0}Hi.' ],
         regret2: [
            '<25>{*}{#p/twinkly}{#f/19}{#e/twinkly/0}Seems as if everyone is perfectly happy.',
            '<25>{*}{#e/twinkly/0}Monsters have found their new homeworld.',
            '<25>{*}{#e/twinkly/0}Peace and prosperity will rule across the galaxy.',
            '<25>{*}{#e/twinkly/1}Take a deep breath.',
            "<25>{*}{#e/twinkly/2}There's nothing left to worry about."
         ],
         regret3: [
            '<25>{*}{#p/twinkly}{#f/19}{#e/twinkly/3}...',
            '<25>{*}{#e/twinkly/4}Well.',
            '<25>{*}{#e/twinkly/4}There is one thing.',
            '<25>{*}{#e/twinkly/5}One last... mystery.',
            "<25>{*}{#e/twinkly/6}Something I've been curious about since you arrived."
         ],
         regret4: [
            '<25>{*}{#p/twinkly}{#f/19}{#e/twinkly/7}...',
            '<25>{*}{#e/twinkly/7}You see, when I first met you, I noticed something.',
            '<25>{*}{#e/twinkly/3}Something about your LOVE.',
            '<25>{*}{#e/twinkly/4}It was... zero.',
            '<25>{*}{#e/twinkly/6}...',
            '<25>{*}{#e/twinkly/6}If you could find out what that means, then...',
            "<25>{*}{#e/twinkly/7}Maybe... it'd bring about something new.",
            '<25>{*}{#e/twinkly/10}...',
            "<25>{*}{#e/twinkly/10}I don't know.",
            "<25>{*}{#e/twinkly/10}I'm not really sure where I'm going with this.",
            '<25>{*}{#e/twinkly/9}...',
            '<25>{*}{#e/twinkly/9}To be honest...',
            "<25>{*}{#e/twinkly/1}I doubt if there's even any point to it.",
            "<25>{*}{#e/twinkly/2}Everyone's happy, right?",
            '<25>{*}{#e/twinkly/3}Toriel, Sans, Papyrus, Undyne, Alphys, Asgore...',
            '<25>{*}{#e/twinkly/4}Even Monster Kid, and... Napstablook.',
            '<25>{*}{#e/twinkly/2}Is it really worth starting all over because of... me?',
            '<25>{*}{#e/twinkly/2}...',
            "<25>{*}{#e/twinkly/10}Maybe I'm only telling you this, because... when I had your powers...",
            "<25>{*}{#e/twinkly/11}I might've considered doing the same in your place.",
            '<25>{*}{#e/twinkly/12}But now, the idea of resetting everything...',
            '<25>{*}{#e/twinkly/10}I...',
            "<25>{*}{#e/twinkly/10}I don't know if I could do it all again.",
            '<25>{*}{#e/twinkly/10}Not after that.',
            '<25>{*}{#e/twinkly/11}...',
            '<25>{*}{#e/twinkly/11}So, please.',
            '<25>{*}{#e/twinkly/11}Just be content with what you have.',
            "<25>{*}{#e/twinkly/7}It's not perfect, but...",
            '<25>{*}{#e/twinkly/5}... who ever said it had to be?'
         ],
         regret5: [
            '<25>{*}{#p/twinkly}{#f/19}{#e/twinkly/5}...',
            '<25>{*}{#e/twinkly/8}Well.',
            "<25>{*}{#e/twinkly/8}If I can't change your mind.",
            '<25>{*}{#e/twinkly/7}If you DO end up erasing everything...',
            '<25>{*}{#e/twinkly/6}...',
            '<25>{*}{#e/twinkly/2}You have to wipe MY memories, too.',
            '<25>{*}{#e/twinkly/7}...',
            "<25>{*}{#e/twinkly/6}I'm sorry.",
            "<25>{*}{#e/twinkly/2}You've probably heard this a hundred times already, haven't you...?",
            '<25>{*}{#e/twinkly/6}...',
            "<25>{*}{#e/twinkly/6}Well, that's all.",
            '<25>{*}{#e/twinkly/4}Until we meet again...',
            '<25>{*}{#e/twinkly/13}$(name).'
         ],
         asgoreStoryPre1: () =>
            world.bad_robot
               ? [
                    '<25>{#p/alphys}{#g/alphysSide}* H-h-hiya...\n* You...',
                    '<25>{#g/alphysSideSad}* You r-really enjoy killing people...\n* ... huh?',
                    "<25>{#g/alphysNervousLaugh}* I-I mean, I'm not judging, I just...",
                    "<25>{#g/alphysUhButHeresTheDeal}* I just think it's super duper cool!!!",
                    '<25>{#g/alphysSideSad}* S-so... like...',
                    "<25>{#g/alphysCutscene3}* Now maybe you'll think about not killing me???"
                 ]
               : [ "<25>{#p/asgore}{#f/0}* Isn't it pretty...?", '<25>{#p/asgore}{#f/0}* ...' ],
         asgoreStoryPre2: () =>
            world.bad_robot
               ? [ '<25>{*}{#p/alphys}{#g/alphysOhGodNo}* Behind you!!!{%}' ]
               : [
                    '<25>{#p/asgore}{#f/6}* I apologize if I startled you, young one.',
                    '<25>{#p/asgore}{#f/6}* Alphys informed me of your arrival.'
                 ],
         asgoreStoryPre3: () => [
            '<25>{#p/asgore}{#f/7}* ...',
            ...(SAVE.flag.b.waaaaaooaaooooaaaaaaooohooohooohstooooryofunderrtaaaaale
               ? [
                    '<25>{#p/asgore}{#f/12}* Hm...?\n* You have already heard this story?',
                    '<25>{#p/asgore}{#f/5}* ...',
                    '<25>{#p/asgore}{#f/6}* Well.',
                    '<25>{#p/asgore}{#f/6}* If you have already heard it, there is no need to repeat it.',
                    '<25>{#p/asgore}{#f/6}* You may continue forth on your own.'
                 ]
               : [ '<25>{#p/asgore}{#f/7}* Come along.', '<25>{#p/asgore}{#f/7}* I would like to tell you a story.' ])
         ],
         alphysApproach1: [
            "<25>{#p/alphys}{#g/alphysSmileSweat}* Oh, y-you're probably wondering about where ASGORE is, right?",
            "<25>{#g/alphysNervousLaugh}* Well... he's...",
            '<25>{#g/alphysHellYeah}* S-somewhere safe!',
            '<25>{#g/alphysTheFactIs}* Relatively speaking.',
            '<25>{#g/alphysOhGodNo}* Or-\n* No, Absolutely!\n* Absolutely speaking!',
            '<25>{#g/alphysInquisitive}* So b-basically, you might as well... just give up.',
            '<26>{#g/alphysInquisitive}* Because...',
            "<26>{#g/alphysNervousLaugh}* You'll never find him!!",
            '<25>{#g/alphysHellYeah}* Yeah!\n* T-take that!'
         ],
         alphysApproach2: [
            '<25>{#p/alphys}{#g/alphysOhGodNo}* ...',
            '<25>{#g/alphysNervousLaugh}* ... eheh...',
            '<25>{#g/alphysNervousLaugh}* Got through like you always do, h-huh?',
            '<25>{#g/alphysNeutralSweat}* ...',
            "<25>{#g/alphysIDK2}* I guess you'll be going to meet ASGORE.",
            '<25>{#g/alphysIDK3}* ...',
            "<25>{#g/alphysIDK3}* I'm so pathetic...",
            "<25>{#g/alphysThatSucks}* You probably don't even care about me, right?",
            "<25>{#g/alphysIDK2}* All that time I was scared, you probably weren't even after me.",
            '<25>{#g/alphysIDK3}* ...',
            "<25>{#g/alphysIDK2}* Go.\n* Do whatever it is you're going to do.",
            "<26>{#g/alphysIDK3}* I can't stop you."
         ],
         alphysApproach3: [ "<25>{#p/alphys}{#g/alphysFR}* There's only one person who really could." ],
         asgoreStory1: [
            '<25>{*}{#p/asgore}{#f/6}* A long time ago, a human child crash- landed on the outpost.{~}',
            '<25>{*}{#p/asgore}{#f/6}* Injured, they called out for help.{~}'
         ],
         asgoreStory1r: [ '<32>{#p/basic}* ...{%40}', "<32>{#p/basic}* I'm sorry.{%40}" ],
         asgoreStory2: [
            '<25>{*}{#p/asgore}{#f/7}* Asriel, our first-born son, heeded the call.{~}',
            '<25>{*}{#p/asgore}{#f/7}* He brought them back home to our quarters.{~}'
         ],
         asgoreStory2r: [ '<32>{#p/basic}* I did the best I could.{%40}' ],
         asgoreStory3: [
            '<25>{*}{#p/asgore}{#f/6}* Over time, the two children became like siblings.{~}',
            '<25>{*}{#p/asgore}{#f/6}* The outpost expanded, and so too did their kinship.{~}',
            '<25>{*}{#p/asgore}{#f/6}* The outpost was filled with hope.{~}'
         ],
         asgoreStory3r: [ '<32>{#p/basic}* I tried to follow my heart.{%40}' ],
         asgoreStory4: [
            '<25>{*}{#p/asgore}{#f/1}* Then, one day...{~}',
            '<25>{*}{#p/asgore}{#f/2}* A sickness took the human by surprise.{~}'
         ],
         asgoreStory4r: [ '<32>{#p/basic}* I tried to do the right thing.{%40}' ],
         asgoreStory5: [
            '<25>{*}{#p/asgore}{#f/1}* Fatally ill, the human had only one request.{~}',
            '<25>{*}{#p/asgore}{#f/1}* To see the remains of our once great and bountiful world.{~}',
            '<25>{*}{#p/asgore}{#f/2}* But there was nothing we could do.{~}'
         ],
         asgoreStory5r: [ '<32>{#p/basic}* All I wanted was for him to see the universe.{%40}' ],
         asgoreStory6: [
            '<25>{*}{#p/asgore}{#f/1}* The next day...{~}',
            '<25>{*}{#p/asgore}{#f/1}* ...{~}',
            '<25>{*}{#p/asgore}{#f/2}* The human died.{~}'
         ],
         asgoreStory6r: [ '<32>{#p/basic}* All I wanted was for him to be happy.{%40}' ],
         asgoreStory7: [
            '<25>{*}{#p/asgore}{#f/15}* Asriel, wracked with grief, absorbed their SOUL.{~}',
            '<25>{*}{#p/asgore}{#f/16}* Transforming into a being with unimaginable power.{~}'
         ],
         asgoreStory7r: [ '<33>{#p/basic}* I never wanted to...{%40}' ],
         asgoreStory8: [
            '<25>{*}{#p/asgore}{#f/4}* With his newfound power, Asriel crossed the force field.{~}',
            "<25>{*}{#p/asgore}{#f/4}* The human's body in tow as he flew off in a small shuttle.{~}",
            '<25>{*}{#p/asgore}{#f/4}* Hoping to find those legendary artifacts.{~}'
         ],
         asgoreStory8r: [ '<32>{#p/basic}* ... to...{%40}' ],
         asgoreStory9: [
            '<25>{*}{#p/asgore}{#f/1}* Soon, he stumbled onto what he was looking for.{~}',
            '<25>{*}{#p/asgore}{#f/1}* Landing amidst the broken, scattered pieces...{~}',
            "<25>{*}{#p/asgore}{#f/1}* The human's body was laid to rest.{~}"
         ],
         asgoreStory9r: [ '<32>{#p/basic}* ...{%40}' ],
         
         
         asgoreStory10: [
            "<25>{*}{#p/asgore}{#f/5}* Suddenly, the shuttle's proximity alarm blared.{~}",
            "<25>{*}{#p/asgore}{#f/5}* Scavengers had seen him holding a human's body.{~}",
            '<25>{*}{#p/asgore}{#f/2}* They thought he had killed the child.{~}'
         ],
         asgoreStory11: [
            '<25>{*}{#p/asgore}{#f/2}* The humans attacked him with everything they had.{~}',
            '<25>{*}{#p/asgore}{#f/2}* Shot after shot, blow after blow...{~}',
            '<25>{*}{#p/asgore}{#f/2}* In this form, he had the power to destroy them all.{~}'
         ],
         asgoreStory12: [
            '<25>{*}{#p/asgore}{#f/4}* But...{~}',
            '<25>{*}{#p/asgore}{#f/4}* Asriel did not fight back.{~}'
         ],
         asgoreStory12r: [ '<32>{#p/human}* (You hear someone crying...){%40}' ],
         asgoreStory13: [
            "<25>{*}{#p/asgore}{#f/9}* Clutching the human's body, Asriel took one last look outward...{~}",
            '<25>{*}{#p/asgore}{#f/9}* Then he smiled... and walked away.{~}'
         ],
         asgoreStory13r: [ "<32>{#p/basic}* I c-couldn't...\n* He d-d-didn't let m-me...{%40}" ],
         asgoreStory14: [
            '<25>{*}{#p/asgore}{#f/1}* Wounded, Asriel flew the damaged shuttle back home.{~}',
            '<25>{*}{#p/asgore}{#f/1}* He exited the vehicle and collapsed.{~}',
            '<25>{*}{#p/asgore}{#f/2}* His dust spread across the grove.{~}'
         ],
         asgoreStory14r: [ '<32>{#p/basic}* ...{%40}' ],
         asgoreStory15: [
            '<25>{*}{#p/asgore}{#f/13}* The outpost, MY outpost... fell into despair.{~}',
            '<25>{*}{#p/asgore}{#f/13}* We had lost two children in one night.{~}',
            '<25>{*}{#p/asgore}{#f/14}* Everything had once again been taken from us.{~}'
         ],
         asgoreStory15r: [ "<32>{#p/basic}* ... it's not fair...{%40}" ],
         asgoreStory16: [
            '<25>{*}{#p/asgore}{#f/13}* In a fit of rage, I declared war on humanity.{~}',
            '<25>{*}{#p/asgore}{#f/13}* No matter the cost, I was going to set us free.{~}',
            '<25>{*}{#p/asgore}{#f/14}* ... and the people believed in me.{~}'
         ],
         asgoreStory16r: [ "<32>{#p/basic}* It's not fair...!{%40}" ],
         asgoreStory17: [
            '<25>{*}{#p/asgore}{#f/3}* When I came to my senses, it was far too late to go back.{~}',
            '<25>{*}{#p/asgore}{#f/2}* The people had set their minds on war, and nothing could avert it.{~}',
            '<25>{*}{#p/asgore}{#f/5}* At least, nothing done publicly.{~}'
         ],
         asgoreStory18: () =>
            SAVE.data.b.killed_mettaton || world.baddest_lizard
               ? [
                    '<25>{*}{#p/asgore}{#f/5}* By now, Alphys must have told you about a certain secret.{~}',
                    '<25>{*}{#p/asgore}{#f/5}* An agreement between myself and the former royal scientist.{~}',
                    '<25>{*}{#p/asgore}{#f/6}* ... now, if only I knew what was holding up the current one...{~}'
                 ]
               : [
                    '<25>{*}{#p/asgore}{#f/5}* By now, Alphys must have told you about a certain {@fill=#003cff}secret{@fill=#fff}.{~}',
                    '<25>{*}{#p/asgore}{#f/5}* An {@fill=#003cff}agreement{@fill=#fff} between myself and the former royal scientist.{~}',
                    '<25>{*}{#p/asgore}{#f/6}* ... ah, there she is.\n* I have been wondering when she would arrive.{~}'
                 ],
         asgoreStory19: [
            '<25>{#p/alphys}{#g/alphysNervousLaugh}* Uh, s-sorry!\n* I got here as fast as I could!',
            '<25>{#p/asgore}{#f/6}* No need to rush.\n* Good things come to those who wait.',
            "<25>{#p/alphys}{#g/alphysWorried}* ... do you think they're ready?"
         ],
         asgoreStory20a: [
            '<25>{#p/asgore}{#f/7}* Young one, if you could excuse us for just a moment...',
            '<25>{#p/asgore}{#f/7}* Alphys and I have some things to discuss.'
         ],
         asgoreStory20b: [
            "<25>{#p/alphys}{#g/alphysHellYeah}* Yeah, uh... j-just keep going forward, we'll be waiting for you!"
         ],
         asgoreStory21: [
            '<25>{#p/asgore}{#f/5}* How odd.\n* She does not appear to be here now.',
            '<25>{#p/asgore}{#f/5}* ... this is not what I had in mind.'
         ],
         asgoreStory22: [
            '<25>{#p/asgore}{#f/5}* Well then.\n* If she wants to see me, she will have to wait.',
            '<25>{#p/asgore}{#f/5}* This cannot be delayed any further.'
         ],

         
         jspeech1: () => [
            '<32>{#p/darksans}* So you finally made it.',
            '<32>* The end of your journey is at hand.',
            world.bad_robot || SAVE.data.b.ultrashortcut
               ? '<32>* In a few moments, you will meet with the king.'
               : '<32>* In a few moments, you will meet once again with the king.',
            '<32>* Together...',
            ...(SAVE.data.b.ultrashortcut
               ? [
                    '<32>* ...',
                    "<32>* Something's wrong.",
                    '<32>* How did you arrive so quickly?',
                    '<32>* Did you, perhaps...',
                    '<32>* Take a {@fill=#ff0}shortcut{@fill=#fff} of some kind?'
                 ]
               : [
                    ...(SAVE.data.b.water
                       ? [
                            '<32>* ...',
                            "<32>* You're really gonna carry that all the way, aren't you?",
                            ...(world.dead_skeleton
                               ? [ '<32>* ...', '<32>* Well, anyway.' ]
                               : [ '<32>* Heh.', '<32>* But as I was saying...' ])
                         ]
                       : []),
                    '<32>* You will determine the future of monsterkind.',
                    "<32>* That's then.",
                    '<32>* Now.',
                    '<32>* You will be judged.',
                    '<32>* You will be judged for your every action.',
                    "<32>* You will be judged for every EXP you've earned.",
                    "<32>* What's EXP?",
                    "<32>* It's an acronym.",
                    '<32>* It stands for \"{@fill=#f00}execution points{@fill=#fff}.\"',
                    '<32>* A way of quantifying the pain you have inflicted on others.',
                    '<32>* When you kill someone, your EXP increases.',
                    '<32>* When you have enough EXP, your LOVE increases.',
                    '<32>* LOVE, too, is an acronym.',
                    '<32>* It stands for \"{@fill=#f00}Level of Violence{@fill=#fff}.\"',
                    "<32>* A way of measuring someone's capacity to hurt.",
                    '<32>* The more you kill, the easier it becomes to distance yourself.',
                    '<32>* The more you distance yourself, the less you will hurt.',
                    '<32>* The more easily you can bring yourself to hurt others.'
                 ])
         ],
         jspeechU1: () => [
            '<25>{#p/sans}{#f/3}* ...',
            ...[
               [
                  '<25>{#f/0}* wow, buddo.\n* how could you do such a thing to yourself.',
                  "<25>{#f/3}* don't get me wrong.\n* i like shortcuts as much as the next guy.",
                  "<25>{#f/2}* but don't you think you should take some time to reflect?"
               ],
               [
                  "<25>{#f/0}* by your expression, i can tell this isn't even your first time.",
                  "<25>{#f/3}* ... i don't blame you.\n* getting around quickly can be a ton of fun.",
                  "<25>{#f/2}* but you still have to take time to reflect!\n* it's important."
               ]
            ][Math.min(SAVE.flag.n.meet3++, 1)]
         ],
         jspeechU2: [
            '<25>{#p/sans}* tell you what.',
            "<25>{#f/3}* while i'm having this delicious ice cream...",
            '<25>{#f/2}* you can use that time to think about how you ended up here.'
         ],
         jspeechU3: [
            '<25>{#p/sans}* salmon-flavored, huh?',
            '<25>{#p/sans}* i hear this is popular with the royal guard.'
         ],
         jspeechU4: [
            "<25>{#p/sans}{#f/3}* oh yeah.\n* i'm DEFINITELY telling papyrus about this.",
            "<25>{#f/0}* it'll be helpful for him to get to know what kind of food they like.",
            '<25>{#f/2}* and by \"they\" i mean the royal guard he\'s soon to be a member of.'
         ],
         jspeechU5: [
            '<25>{#p/sans}{#f/0}* yeah... turns out capturing a human does have its perks.',
            "<25>{#f/3}* ... don't worry.\n* i won't be much longer.",
            "<25>{#f/2}* i'm at LEAST halfway done by now."
         ],
         jspeechU6: () => [
            '<25>{#p/sans}{#f/0}* i wonder if that \"ice dream\" guy would mind selling this flavor.',
            ...(SAVE.data.n.state_starton_nicecream < 1
               ? [ "<25>{#f/2}* it'd certainly get him the customers he's been lacking." ]
               : [ "<25>{#f/2}* it'd certainly get him a few new customers." ])
         ],
         jspeechU7: [
            '<26>{#p/sans}{#f/0}* ah... nothing like a good scoop of salmon- flavored ice cream.',
            '<25>{#f/2}* now for the cone.'
         ],
         jspeechU8: [
            "<26>{#p/sans}{#f/3}* it's amazing what replication technology can do these days.",
            "<25>{#f/0}* in the past, you'd be lucky to get something edible...",
            '<25>{#f/2}* but now, both ice cream AND cone come out perfectly every time.'
         ],
         jspeechU9: [ '<25>{#p/sans}{#f/0}* ...', '<25>{#f/3}* ... guess i should actually finish this now.' ],
         jspeechU10: (funni: boolean) => [
            "<25>{#p/sans}{#f/0}* well, that's all.",
            ...(funni
               ? [ '<25>{#f/2}* i only hope you can find your way out from behind that pillar.' ]
               : [ "<25>{#f/2}* i only hope you've used your time wisely." ])
         ],
         jspeech2: (funni: boolean) => [
            '<25>{#p/sans}{#f/3}* ...',
            "<25>{#f/0}* lv0, huh?\n* what's that?",
            "<25>{#f/3}* this wasn't in gerson's human combat handbook.",
            "<25>{#f/0}* normally i'd say something here, like...",
            '<25>{#f/4}* not being perfect, but still doing the right thing?',
            '<25>{#f/0}* but i guess you really are different.',
            '<25>{#f/3}* ...\n* tell you what.',
            "<25>{#f/4}* i'll spare you the long, agonizing speech i was preparing...",
            '<25>{#f/0}* and just let you get on your way.',
            '<25>{#f/3}* after all, someone as good as you...',
            "<25>{#f/2}* shouldn't have to sit through a lecture about hard choices.",
            ...(world.flirt < world.flirt_state1.length
               ? [
                    '<25>{#f/3}* ...',
                    '<25>{#f/0}* good luck, buddo.',
                    ...(funni
                       ? [ "<25>{#f/2}* i'll move you back behind the pillar now." ]
                       : [ "<26>{#f/2}* not that you'll need it." ])
                 ]
               : [
                    '<25>{#f/3}* ... oh, right.\n* i almost forgot.',
                    '<25>{#f/0}* you may have noticed how difficult it is to flirt with alphys.',
                    "<25>{#f/2}* but i know a trick that'll get 'er right in the heart.",
                    "<25>{#f/0}* if you're truly devoted to being a legendary flirt master...",
                    "<25>{#f/0}* you'll whisper this in her ear.",
                    '<32>{#p/human}* (Sans whispered something in your ear.)',
                    ...(funni
                       ? [ '<25>{#p/sans}{#f/2}* try not to stand behind a pillar when you say it to her.' ]
                       : [ '<25>{#p/sans}{#f/2}* good luck.' ])
                 ])
         ],
         jspeech3: (funni: boolean) => [
            '<25>{#p/sans}{#f/3}* ...',
            '<25>{#f/0}* ...可是。\n* 你从未获得任何LOVE。',
            "<25>* ...嘿，为啥摆出那表情？",
            "<25>{#f/2}* 众所周知，\n  lv1就是最低的等级。",
            "<25>{#f/0}* 但这可不代表\n  你天真无邪，人畜无害。",
            ...(SAVE.data.n.bully < 15
               ? SAVE.data.n.state_foundry_undyne > 0
                  ? [
                       "<25>{#f/0}* 当你有能力\n  去拯救某人性命时...",
                       '<25>{#f/0}* 你放弃了救人，\n  转而选择自保。',
                       '<25>{#f/3}* 也许你会争辩，\n  当时身处险境，十分害怕，\n  只能那么做。',
                       "<25>{#f/0}* 但是，你就从没考虑过\n  另一条更好的路吗？",
                       '<25>{#f/0}* ...',
                       "<25>{#f/0}* for what it's worth...",
                       '<25>{#f/3}* you never went out of your way to kill anyone.',
                       "<25>{#f/0}* even when you ran away, you didn't do it out of malice.",
                       '<25>{#f/0}* you never gained LOVE, but you had love.',
                       '<25>{#f/0}* does that make sense?',
                       '<25>{#f/0}* maybe not.'
                    ]
                  : [
                       '<25>* just that you kept a certain tenderness in your heart.',
                       '<25>* no matter the struggles or hardships you faced...',
                       '<25>* you strived to do the right thing.',
                       ...(world.flirt < 20
                          ? [
                               '<25>* you refused to hurt anyone.',
                               '<25>* even when you ran away, you did it with a smile.',
                               '<25>* you never gained LOVE, but you gained love.',
                               '<25>* does that make sense?',
                               '<25>* maybe not.'
                            ]
                          : [
                               "<25>* in fact, i hear you're quite the romantic.",
                               '<25>* not only did you not hurt anyone, you went right for their hearts.',
                               '<25>{#f/2}* you really like to make things hard on yourself, huh?'
                            ])
                    ]
               : [
                    SAVE.data.n.bully < 30
                       ? "<25>{#f/0}* 一路上，你伤害了不少人。\n  不是吗？"
                       : "<25>{#f/0}* 一路上，你伤害了很多人。\n  不是吗？",
                    ...(SAVE.data.n.state_foundry_undyne > 0
                       ? [
                            "<25>{#f/0}* 而且，当你有能力\n  去拯救某人性命时...",
                            '<25>{#f/0}* 你放弃了救人，\n  转而选择自保。',
                            '<25>{#f/3}* 也许你会争辩，\n  当时身处险境，十分害怕，\n  只能那么做。',
                            '<25>{#f/3}* 但别的怪物面对你，\n  难道就不恐惧，不害怕吗？',
                            '<25>{#f/0}* 希望你记着...'
                         ]
                       : world.flirt < 20
                       ? [
                            '<25>{#f/0}* 你确实没杀一只怪物，\n  但你无数次将他们\n  推向生死边缘。',
                            '<25>{#f/3}* 这是正当防卫？\n* 还是防卫过当呢？',
                            "<25>{#f/0}* 只有你自己心里清楚。"
                         ]
                       : [
                            '<25>{#f/0}* then, you flirted with them as if to have your way with them.',
                            '<25>{#f/3}* is that really what you meant to do?\n* or... am i wrong?',
                            "<25>{#f/0}* 只有你自己心里清楚。"
                         ])
                 ]),
            '<25>{#f/3}* ...\n* now.',
            "<25>{#f/0}* you're about to make the greatest decision of your entire journey.",
            '<25>* your choice here...',
            '<25>* will determine the fate of the entire galaxy.',
            '<25>* if you refuse to enter the archive...',
            '<25>* monsters will remain trapped on the outpost.',
            '<25>* asgore will do his best to look after you, but...',
            '<25>* we may never get a shot at freedom again.',
            '<25>{#f/3}* however.\n* if you do decide to follow his plan...',
            "<25>{#f/0}* there's a chance things could go wrong.",
            "<25>* not to mention, you'd be risking your life again, and...",
            '<25>* well.',
            '<25>* what will you choose?',
            '<25>{#f/3}* ...',
            '<25>* if i were you, i would have thrown in the towel by now.',
            "<25>{#f/2}* but you didn't get this far by giving up, did you?",
            "<25>{#f/0}* that's right.",
            '<25>* you have something called \"{@fill=#ff0}determination.{@fill=#fff}\"',
            ...(SAVE.data.n.bully < 15
               ? [
                    '<25>* so as long as you hold on...',
                    "<25>* so as long as you do what's in your heart...",
                    '<25>* i believe you can do the right thing.',
                    ...(SAVE.data.n.state_foundry_undyne > 0 || world.flirt < world.flirt_state1.length
                       ? [
                            '<25>{#f/3}* alright.',
                            "<25>{#f/0}* we're all counting on you, buddo.",
                            ...(funni
                               ? [ "<25>{#f/2}* i'll move you back behind the pillar now." ]
                               : [ '<25>{#f/2}* good luck.' ])
                         ]
                       : [
                            '<25>{#f/3}* oh, right.\n* i almost forgot.',
                            '<25>{#f/0}* you may have noticed how difficult it is to flirt with her.',
                            '<25>{#f/0}* alphys, i mean.',
                            "<25>{#f/2}* but i know a trick that'll get 'er right in the heart.",
                            "<25>{#f/0}* if you're truly devoted to being a legendary flirt master...",
                            "<25>{#f/0}* you'll whisper this in her ear.",
                            '<32>{#p/human}* (Sans whispered something in your ear.)',
                            ...(funni
                               ? [ '<25>{#p/sans}{#f/2}* try not to stand behind a pillar when you say it to her.' ]
                               : [ '<25>{#p/sans}{#f/2}* good luck.' ])
                         ])
                 ]
               : [
                    "<26>* no matter what you've used it for up to now...",
                    "<25>* i know you have it in you to do what's right when it matters most.",
                    '<25>{#f/3}* ...',
                    '<25>{#f/3}* be good, alright?',
                    ...(funni ? [ '<25>{#f/2}* ... and try not to stand behind any more pillars.' ] : [])
                 ])
         ],
         
         jspeech4: [
            '<25>{#p/darksans}* Now, you understand.',
            "<25>* It's time to begin your judgment.",
            '<25>* Look inside yourself.',
            '<25>* Have you really done the right thing?',
            "<25>* And, considering what you've done...",
            '<25>* What will you do now?',
            '<25>* Take a moment to think about this.'
         ],
         jspeech5a: [
            '<25>{#p/sans}{#f/3}* ...',
            "<25>{#f/0}* truthfully, it doesn't really matter which conclusion you came to.",
            "<25>* all that's important is that you were honest with yourself."
         ],

         
         jspeech5b1: (funni: boolean) => [
            '<25>{#p/sans}{#f/3}* what happens now...',
            '<25>{#f/0}* we leave up to you.',
            ...(funni ? [ '<25>{#f/2}* ... just as soon as i move you back behind that pillar.' ] : [])
         ],

         
         jspeech5b2: () => [
            '<25>{#p/sans}{#f/3}* though...',
            '<25>{#f/0}* one thing about you always struck me as kinda odd.',
            '<25>* now, i understand acting in self-defense.',
            '<25>* you were thrown into those situations against your will.',
            '<25>* but...',
            '<25>* sometimes...',
            "<25>* you act like you know what's gonna happen.",
            "<25>* like you've already experienced it all before.",
            '<25>* this is an odd thing to say, but...',
            '<25>* if you have some sort of {@fill=#ff0}special power{@fill=#fff}...',
            "<25>* isn't it your responsibility to do the right thing?",
            choicer.create('* （你要怎么回答？）', '是', '否')
         ],
         jspeech5b3a: [ '<25>{#p/sans}{#f/4}* ah.', '<25>{#f/0}* i see.' ],
         jspeech5b3b: [
            '<25>{#p/sans}{#f/4}* heh.',
            "<25>{#f/0}* well, that's your viewpoint.",
            "<25>{#f/2}* i won't judge you for it."
         ],
         jspeech5b3c: [ '<25>{#p/sans}{#f/3}* ...' ],

         
         
         jspeech5b4a: [ "<25>{*}{#p/darksans}{#f/1}{#i/5}* ... then why'd you kill my brother?" ],
         jspeech5b4b: [ '<25>{*}{#p/darksans}{#f/1}{#i/5}* ... you dirty brother killer.' ],
         jspeech5b5a: [ "<25>{#p/sans}{#f/3}* ... guess toriel wasn't worth the effort, then, huh?" ],
         jspeech5b5b: [ '<25>{#p/sans}{#f/3}* ... even if i should, after what you did to toriel.' ],
         jspeech5b6a: [ "<25>{*}{#p/darksans}{#f/1}{#i/5}* ... then why'd you kill all those people?" ],
         jspeech5b6b: [ '<25>{*}{#p/darksans}{#f/1}{#i/5}* ... you dirty serial killer.' ],
         jspeech5b7a: [ "<25>{#p/sans}{#f/3}* ... guess undyne wasn't worth the effort, then, huh?" ],
         jspeech5b7b: [ '<25>{#p/sans}{#f/3}* ... even if i should, after what you did to undyne.' ],
         jspeech5b8a: [ "<25>{#p/sans}{#f/3}* ... guess mettaton wasn't worth the effort, then, huh?" ],
         jspeech5b8b: [ '<25>{#p/sans}{#f/3}* ... even if i should, after what you did to mettaton.' ],
         jspeech5b9a: [ "<25>{#p/sans}{#f/3}* ... guess the people you killed don't matter, then, huh?" ],
         jspeech5b9b: [ '<25>{#p/sans}{#f/3}* ... even if i should, after what you did to those people.' ],
         jspeech5b10a: [ "<25>{#p/sans}{#f/3}* ... guess the person you killed don't matter, then, huh?" ],
         jspeech5b10b: [ '<25>{#p/sans}{#f/3}* ... even if i should, after what you did to that person.' ],

         
         jspeech6a: [
            '<25>{#p/sans}{#f/4}* huh?\n* you look bored.',
            "<25>* i get the feeling you aren't gonna learn anything from this.",
            '<25>{#f/0}* well, guess i gotta judge you then.'
         ],

         
         jspeech6b1: [
            '<26>{#p/sans}* lv2...\n* seems like you messed\n  up the slightest amount.',
            "<25>{#f/4}* welp.\n* that's pretty sad.",
            "<25>{#f/3}* you probably weren't even aware of what you were doing...",
            '<25>* and when you learned, it was too late.',
            '<25>{#f/2}* nah, just kidding.',
            '<25>{#f/4}* who gets to lv2 on accident?\n* get outta here.'
         ],

         jspeech6b2: [
            '<25>{#p/sans}* lv3...\n* not bad.',
            "<25>{#f/4}* three's not such a scary number, is it?",
            "<25>{#f/0}* i'll give you a pass.",
            '<25>{#f/3}* but, hey...',
            '<25>{#f/2}* you could still do better, right?'
         ],

         jspeech6b3: [
            '<25>{#p/sans}* lv4...\n* huh.',
            '<25>{#f/4}* i mean, what can i say?',
            "<25>{#f/0}* if it were any higher, i'd think you'd killed people on purpose.",
            "<25>{#f/3}* but i guess i'll give you a pass.",
            '<25>{#f/2}* just this once.'
         ],

         jspeech6b4: [
            '<25>{#p/sans}{#f/4}* lv5?',
            "<25>{#f/0}* now that's dangerous territory right there.",
            '<25>{#f/4}* believe me, i wanna give you the benefit of the doubt...',
            '<25>{#f/0}* but that gets harder and harder to do the higher this goes.',
            '<25>{#f/3}* ... oh well.'
         ],

         jspeech6b5: [
            '<25>{#p/sans}{#f/4}* lv6?',
            '<25>{#f/0}* humans often say six is a scary number.',
            "<25>{#f/4}* now, i don't claim to be superstitious...",
            "<25>{#f/0}* but i'd be lying if i said i wasn't suspicious.",
            '<25>{#f/3}* ... oh well.'
         ],

         jspeech6b6: [
            '<25>{#p/sans}{#f/4}* lv7, huh?',
            "<25>* isn't that what humans call a lucky number?",
            '<25>{#f/0}* well gee, i dunno about you, but...',
            '<25>{#f/3}* i doubt much luck was involved in how you got to this point.',
            '<25>{#f/0}* ... just saying.'
         ],

         jspeech6b7: [
            '<25>{#p/sans}{#f/4}* lv8, huh?',
            "<25>* don't humans use this number to predict the future or something?",
            '<25>{#f/0}* well gee, i dunno about you, but...',
            "<25>{#f/3}* that'd be a pretty good explanation for how you've been acting.",
            '<25>{#f/0}* ... just saying.'
         ],

         jspeech6b8: [
            '<25>{#p/sans}{#f/3}* ... lv9.',
            "<25>{#f/0}* that's pretty bad.",
            '<25>{#f/3}* but hey, look on the bright side...',
            "<25>{#f/2}* ... at least you're still in single-digits."
         ],

         jspeech6b9: [
            '<25>{#p/sans}{#f/3}* ... lv10.',
            "<25>{#f/0}* that's pretty bad.",
            '<25>{#f/3}* but hey, look on the bright side...',
            "<25>{#f/2}* ... at least it's a nice, even number you can be proud of."
         ],

         jspeech6b10: [
            '<25>{#p/sans}{#f/3}* ... lv11.',
            "<25>{#f/4}* or in gambler's terms, snake eyes.",
            '<25>{#f/0}* truth be told, if i had a chance to re-roll the dice...',
            "<25>{*}{#p/darksans}{#f/1}{#i/5}* I'd probably take it right about now.",
            "<25>{#p/sans}{#f/3}* ... but that's just me."
         ],

         jspeech6b11: [
            '<25>{#p/sans}{#f/3}* ... lv12.',
            "<25>{#f/4}* or in timekeeper's terms, a full rotation.",
            '<25>{#f/0}* truth be told, if i had a chance to turn back the clock...',
            "<25>{*}{#p/darksans}{#f/1}{#i/5}* I'd probably take it right about now.",
            "<25>{#p/sans}{#f/3}* ... but that's just me."
         ],

         jspeech6b12: [
            '<25>{#p/sans}{#f/3}* ... lv13.',
            "<25>{#f/4}* or in baker's terms, a dozen.",
            '<25>{#f/0}* truth be told, if i had a chance to start bakery-fresh...',
            "<25>{*}{#p/darksans}{#f/1}{#i/5}* I'd probably take it right about now.",
            "<25>{#p/sans}{#f/3}* ... but that's just me."
         ],

         jspeech6b13: [
            '<25>{#p/sans}{#f/3}* ... lv14.',
            "<25>{#f/4}* i'll be honest...",
            "<25>{#f/0}* i didn't think you'd be able to kill that many people that quickly.",
            '<25>{*}{#p/darksans}{#f/1}{#i/5}* Guess you learn something new every day.',
            '<25>{#p/sans}{#f/3}* ...'
         ],

         
         jspeech6c: [
            '<25>{#p/sans}{#f/4}* huh?\n* you STILL look bored.',
            '<25>{#f/0}* ok then, consider our session over.'
         ],

         
         jspeech7: (funni: boolean) => [
            '<25>{#p/sans}{#f/3}* ...',
            '<25>{#f/0}* wait a second.',
            '<25>{#f/4}* that look on your face while i was talking...',
            "<25>{#f/0}* you've already heard my spiel, haven't you?",
            '<25>{#f/3}* i suspected something like this.',
            "<25>{#f/3}* you act like you know what's going to happen in advance sometimes.",
            "<25>{#f/3}* like you've seen certain things before.",
            '<25>{#f/0}* so... hey.',
            "<25>{#f/0}* i've got a request for you.",
            '<25>{#f/2}* i kind of have a {@fill=#ff0}secret codephrase{@fill=#fff} that only i would know.',
            "<25>{#f/4}* so, i'll know that if someone tells it to me...",
            "<25>{#f/0}* they'd have to be a time traveler.",
            '<25>{#f/2}* crazy, right?',
            '<25>{#f/3}* anyway, here it is...',
            '<32>{#p/human}* (Sans whispered something to you.)',
            "<25>{#p/sans}{#f/0}* i'm counting on you to come back here and tell me that.",
            ...(funni ? [ "<25>{#f/2}* i'll move you back behind the pillar now." ] : [ '<25>{#f/2}* see you... earlier.' ])
         ],

         
         jspeech8: (funni: boolean) => [
            '<25>{#p/sans}{#f/3}* ...',
            '<25>{#f/4}* huh?\n* do you have something to say to me?',
            '<32>{#p/human}* (You told Sans the secret codephrase.)',
            '<25>{#p/sans}{#f/2}* what? a codephrase?\n* can you speak a little louder?',
            '<32>{#p/human}* (You told Sans the secret codephrase, but louder.)',
            '<25>{#p/sans}{#f/0}* did you...',
            '<25>{#f/4}* ... just say to \"reverse the polarity of the neutron flow?\"',
            "<25>{#f/2}* wow.\n* i can't believe you would say that.",
            '<25>{#f/4}* not only is that complete nonsense...',
            "<25>{#f/2}* it's also my secret codephrase.",
            '<25>{#f/0}* so... you really are a time traveler, huh?',
            "<25>{#f/3}* well, alright.\n* i guess that means you're qualified.",
            "<25>{#f/0}* here's the key to my room.",
            '<32>{#s/equip}{#p/human}* （你把骨钥挂到了钥匙串上。）',
            "<25>{#p/sans}{#f/0}* it's time...",
            ...(funni
               ? [ '<25>{#f/2}* you walked back out from behind that pillar.' ]
               : [ '<25>{#f/2}* you understood the {@fill=#003cff}real truth{@fill=#fff}.' ])
         ],

         
         jspeech9: (funni: boolean) => [
            '<25>{#p/sans}{#f/3}* ...',
            '<25>{#f/0}* wait a second.',
            '<25>{#f/4}* that look on your face while i was talking...',
            "<25>{#f/0}* you've already heard my spiel, haven't you?",
            '<25>{#f/3}* i suspected something like this.',
            "<25>{#f/3}* you act like you know what's going to happen in advance sometimes.",
            "<25>{#f/3}* like you've seen certain things before.",
            '<25>{#f/0}* so...',
            '<25>{#f/0}* ... wait.\n* have you heard this before, too?',
            '<25>{#f/3}* wow, you really ARE a time traveler.',
            "<25>{#f/2}* guess there's not much else to say, then.",
            '<32>{#s/equip}{#p/human}* （你把骨钥挂到了钥匙串上。）',
            ...(funni ? [ '<25>{#f/2}* ... apart from \"i\'ll move you back behind the pillar now.\"' ] : [])
         ],

         
         jspeech10a: [ '<25>{#p/sans}{#f/0}* 回头。' ],
         jspeech10b: [
            '<25>{#p/sans}* 所以，这就是终点了，\n  是吗？',
            '<25>* 就要用这种方式，\n  给你的旅程画上句号吗？',
            '<25>{#f/3}* ...',
            "<25>* 嘿。\n* 虽然不知道艾斯戈尔会对你\n  做些什么。",
            "<25>{#f/0}* 很有可能...\n  事情不会如你所愿。",
            '<25>* 不过，迎接结局之前...\n  静下心来，好好想想。',
            "<25>* 一路走来，你做的那些事...",
            '<25>* 真的值得吗？'
         ],
         jspeech10c: [
            "<25>{#p/sans}{#f/3}* 我看不到你的表情。",
            "<25>{#f/0}* 更摸不透你的心思。",
            '<25>* ...',
            "<25>{#f/3}* 这样也好。",
            '<25>{#f/0}* 但我知道，\n  你能干出那些事...',
            '<25>* 肯定是出于“关心”，对吗？',
            "<25>{#f/3}* ...我无数次想否认、\n  推翻这个想法。",
            "<25>{#f/0}* 但是，如果我们真的\n  形同陌路...",
            "<25>* 你怎么可能做到这种地步？",
            '<25>* 你太“关心”我们了，\n  恨不得把我们都“关心”死了，\n  不是吗？'
         ],
         jspeech10d: [
            '<25>{#p/sans}{#f/3}* 我知道，\n  自己根本不擅长“动之以情”。',
            '<25>{#f/0}* 但请你告诉我，\n  我还能做什么呢？',
            '<25>* 既然你已经彻底踏上\n  这条不归路...',
            "<25>* 那威胁、恐吓都已经\n  无济于事了。",
            "<25>{#f/3}* 所以，我想试试另一种方式\n  劝你回头。",
            '<25>{#f/0}* ...',
            '<25>{#f/3}* 那么。\n* 如果你要一条道走到黑...',
            '<25>* 我不会拦你。',
            "<25>{#f/0}* 我知道，\n  你早已将“善”抛之脑后。",
            "<25>* 但如果，在机缘巧合之下，\n  你拥有了{@fill=#ff0}那种能力{@fill=#fff}...",
            '<25>* 那就试试看吧。',
            '<25>* 只此一次，终末之时...',
            '<25>{#f/3}* 做件善事。',
            '<25>* ...',
            '<25>{#f/3}* 嗯。',
            "<25>{#f/3}* 我说完了。"
         ],
         jspeechX: [
            "<25>{#p/sans}{#f/0}* actually, there's one last thing i have to tell you...",
            '<25>{#p/sans}{#f/2}* '
         ],

         choice0: () => [
            ...(SAVE.data.n.state_foundry_undyne === 0 && !world.badder_lizard
               ? [
                    '<25>{#p/alphys}{#g/alphysCutscene1}* You made it!',
                    '<25>{#g/alphysCutscene2}* ...\n* So this is Archive Six.',
                    '<25>{#f/15}* Ever since it was built, the humans have been guided here...',
                    '<25>{#f/15}* Held in stasis...',
                    '<25>{#f/15}* In a time-accelerated virtual world...',
                    "<25>{#f/10}* ... isn't it awesome!?",
                    "<25>{#f/1}* It's incredible what Professor Roman was able to achieve!",
                    "<25>{|}{#f/15}* Like, I don't know if he's into sci-fi anime, but there's this one {%}",
                    '<99>{|}{#f/15}  about a movie where you\n  have to put on virtual\n  reality goggles to {%}',
                    '<99>{|}{#f/23}  watch it but everyone\n  who does gets trapped\n  in the movie world and {%}',
                    '<99>{|}{#f/23}  they all have to figure\n  out how to advance the\n  plot to escape and {%}',
                    '<99>{|}{#f/18}  the main character\n  figures out how to get\n  to the end and they do {%}',
                    '<99>{|}{#f/18}  and then they set\n  everyone free!!!',
                    '<25>{#f/18}* ...',
                    '<25>{#f/20}* So, uh, I think he was inspired by that.',
                    "<25>{#f/18}* A-anyway!!\n* Asgore's waiting for you at the force field!"
                 ]
               : [
                    '<25>{#p/alphys}{#g/alphysCutscene1}* You made it!',
                    '<25>{#g/alphysCutscene2}* ...',
                    "<25>{#g/alphysSmileSweat}* W-well, Asgore's waiting for you at the force field."
                 ]),
            '<25>{#g/alphysNeutralSweat}* In... case you were wondering.',
            "<25>{#g/alphysOhGodNo}* But, if you weren't!!\n* Then...",
            "<25>{#g/alphysTheFactIs}* I'm... not sure why you're here.",
            "<26>{#g/alphysCutscene2}* So yeah.\n* That's about it, really."
         ],
         choice0x: [ "<25>{#p/alphys}{#g/alphysCutscene2}* Uh, I'll just be over here for now." ],
         choice0y: [ '<25>{#p/alphys}{#g/alphysInquisitive}* Having second thoughts...?' ],
         choice1: [
            '<26>{#p/asgore}{#f/1}* This is the force field.',
            '<25>{#f/2}* It is what keeps us trapped on the outpost.',
            '<25>{#f/1}* An unthinking, unfeeling boundary...',
            '<25>{#f/2}* Through which nobody, monster or otherwise, may pass.'
         ],
         choice1a: () => [
            '<25>{#p/asgore}{#f/1}* For many years, I lamented that we would never reach the stars.',
            '<25>* I feared that, one day, a human would arrive and doom us all.',
            ...(world.bad_robot || world.trueKills > 29
               ? [
                    '<25>{#f/1}* ...',
                    '<25>{#f/2}* It seems... this fear was justified.',
                    '<25>{#f/3}* Alphys has already informed me of your... violent tendencies.',
                    ...(world.alphys_percieved_kills < 20
                       ? [ '<25>{#f/2}* Though, she did say you spared plenty of our kind as well.' ]
                       : [
                            '<25>{#f/16}* ...\n* Tell me, young one.',
                            '<25>{#f/12}* Did it begin as self- defense, and devolve into something worse?',
                            '<25>{#f/12}* Or was this your plan from the start?'
                         ]),
                    '<25>{#f/5}* ...',
                    '<26>{#f/16}* Regardless.\n* You place me in a difficult position.',
                    '<25>{#f/15}* To trust you with our one key to freedom...',
                    '<25>{#f/16}* Or to take your SOUL by force, and enter the archive myself.',
                    '<25>{#f/3}* ...',
                    ...(world.alphys_percieved_kills < 20
                       ? [
                            '<25>{#f/3}* As terrible as you may have been, I do not wish to harm you.',
                            '<25>{#f/4}* You could have been far worse to us...',
                            '<25>{#f/2}* ... yet you were not.',
                            '<25>{#f/1}* It would be wrong to assume that you are irredeemable.',
                            '<25>{#f/2}* You may simply be a very frightened young child.'
                         ]
                       : [ '<25>{#f/3}* Words cannot express how unfortunate this situation has become.' ])
                 ]
               : (world.bad_lizard > 0 && world.alphys_percieved_kills > 0) || 2 <= world.alphys_percieved_kills
               ? [
                    '<25>{#f/1}* ...',
                    '<25>{#f/1}* All things considered, you have behaved well.',
                    ...(world.bad_lizard > 0
                       ? [ "<25>{#f/2}* Though, Alphys did mention that you've... taken lives." ]
                       : [ '<25>{#f/2}* Though, Alphys did mention that you might have... taken lives.' ]),
                    '<25>{#f/3}* ...',
                    ...(SAVE.data.b.ultrashortcut
                       ? [
                            '<25>{#f/3}* It is fortunate you were captured and delivered here quickly.',
                            '<25>{#f/2}* The outpost can be a dangerous place, as I am sure you are aware.',
                            '<25>{#f/5}* However, now that you are here, you will be protected.'
                         ]
                       : [
                            '<25>{#f/3}* I only have myself to blame for this.',
                            '<25>{#f/2}* My keeping of secrets has made it difficult to escort you quickly.',
                            "<25>{#f/5}* Especially since this is Alphys's first time doing this."
                         ]),
                    '<25>{#f/15}* ...',
                    '<25>{#f/16}* The archive lies ahead of you now.',
                    '<26>{#f/1}* The other human\n  children all chose to enter the archive, so...',
                    '<25>* ... now, it is now your turn to make that same choice.'
                 ]
               : [
                    '<25>{#f/1}* Then, one by one, the children of earth came.',
                    '<25>* All were anxious.\n* All faced challenges on their journeys here.',
                    '<26>{#f/6}* But, deep down, they let their brightest traits shine through.',
                    '<25>* The patient, and the brave.',
                    '<25>* The truth-teller and the survivor.',
                    '<25>{#f/2}* The kind one...',
                    '<25>{#f/4}* And the one who sought justice above all.',
                    '<25>{#f/1}* When given the choice to stay, or to enter the archive...',
                    '<25>* They all eventually chose the latter.',
                    ...(SAVE.data.b.ultrashortcut
                       ? [
                            '<25>{#f/5}* ... now, regardless of the circumstances in which you arrived...',
                            '<25>{#f/1}* It is your turn to make that same choice.'
                         ]
                       : [ '<25>* ... now, it is your turn to make that same choice.' ])
                 ])
         ],
         choice1b: () =>
            world.bad_robot || world.trueKills > 29
               ? [
                    '<25>{#p/asgore}{#f/1}* In any case, I cannot ask you to enter the archive.',
                    '<25>{#f/2}* It would be unrealistic to expect you to take such a responsibility.',
                    '<25>{#f/5}* ...',
                    '<25>{#f/5}* Return to my home.',
                    '<25>{#f/5}* I will decide what to do with you later.'
                 ]
               : [
                    [
                       '<25>{#p/asgore}{#f/6}* As the last to enter, you would act as a vessel.',
                       "<25>* Borrowing the others' SOUL power as your own.",
                       '<26>* With all powers combined, you will\n  destroy the force field.',
                       '<25>* Then...',
                       '<25>* Monsterkind will search for a new home planet.',
                       '<25>{#f/1}* ... however.',
                       '<25>* If you do not want such a responsibility...',
                       '<25>* You may stay with us on the outpost until you change your mind.',
                       '<25>{#f/6}* Whatever you decide, I will support you.',
                       '<25>{#f/1}* ...',
                       '<25>* 那么，你愿意\n  现在进入“档案”吗？',
                       choicer.create('* （你要怎么回答？）', '是', '否')
                    ],
                    [
                       '<26>{#p/asgore}{#f/6}* 你回来了。',
                       '<25>{#f/1}* ...',
                       '<25>* 那么，你愿意\n  现在进入“档案”吗？',
                       choicer.create('* （你要怎么回答？）', '是', '否')
                    ],
                    [
                       '<25>{#p/asgore}{#f/1}* ...',
                       '<25>* 那么，你愿意\n  现在进入“档案”吗？',
                       choicer.create('* （你要怎么回答？）', '是', '否')
                    ]
                 ][Math.min(SAVE.data.n.state_citadel_refuse, 2)],
         choice2a: [
            '<25>{#p/asgore}{#f/4}* ...',
            '<25>{#f/6}* 跟我来，孩子。',
            '<25>{#f/21}* 有不少事情等着咱们呢。'
         ],
         choice2b: () =>
            [
               [
                  '<25>{#p/asgore}{#f/2}* ... I understand.',
                  '<25>{#f/1}* Perhaps it was wrong of me to assume you would be like the others.',
                  SAVE.data.b.ultrashortcut
                     ? '<25>{#f/5}* You did arrive quickly, and I have done little to earn your trust.'
                     : '<25>{#f/5}* You may not be ready, and I have done little to earn your trust.',
                  '<25>{#f/1}* If you change your mind, you may return to me here...',
                  '<25>{#f/2}* Otherwise, I shall not press you further.'
               ],
               [ '<25>{#p/asgore}{#f/2}* ... I understand.' ]
            ][Math.min(SAVE.data.n.state_citadel_refuse++, 1)],
         choice3a: [ '<25>{#p/asgore}{#f/6}* It is time.' ],
         choice4a: [ '<25>{#p/asgore}{#f/5}* Alphys?' ],
         choice4b: [
            '<25>{#p/alphys}{#g/alphysOhGodNo}* Uh, y-yeah!\n* Sorry!',
            '<25>{#p/alphys}{#g/alphysCutscene3}* Just getting everything ready and all...'
         ],
         choice5: [ '<25>{#p/alphys}{#g/alphysCutscene2}* There.\n* We should be set for the procedure.' ],
         choice6a: [ "<25>{#p/alphys}{#g/alphysWelp}* Okay, looks like they're in the system." ],
         choice6b: [
            "<25>{#p/asgore}{#f/6}* Don't worry.",
            '<25>{#p/asgore}{#f/7}* When this archive was created...',
            '<25>{#p/asgore}{#f/6}* We made sure to provide the ideal environment for the humans.',
            '<25>{#p/asgore}{#f/21}* Lush forests, rolling hills, rivers as far as the eye can see...',
            '<25>{#p/asgore}{#f/6}* All the trappings of a beautiful earth vista.',
            '<25>{#p/asgore}{#f/4}* ... we are counting on you, young one.',
            '<25>{#p/asgore}{#f/6}* Please, be safe, and do not take too long.'
         ],
         choice7: [
            "<32>{#p/basic}* Yeah, I'm still here...",
            "<32>* ... though, I don't think I can follow you inside.",
            '<33>* Subconscious and all that.',
            "<32>* But whatever happens, I trust you'll do the right thing.",
            '<32>* ...',
            '<32>* Stay safe, alright?'
         ],
         choice8: [
            '<25>{#p/asgore}{#f/1}* ...',
            '<25>{#p/asgore}{#f/2}* 你来了。',
            '<32>{#p/human}* （...）',
            '<25>{#p/asgore}{#f/1}* ...\n* 我其实有很多事想问你。',
            '<25>{#f/2}* 或许，\n  你已经不想和我废话。',
            '<25>{#f/4}* 尽管如此...',
            '<25>{|}{#f/7}* 我还是相信- {%}'
         ],
         
         clover1: [ "<32>{#p/human}{#v/6}{@fill=#faff29}* Isn't it pretty...?" ],
         clover2: [
            "<32>{#p/human}{#v/6}{@fill=#faff29}* ...\n* Well, that's what he would have said, anyway.",
            '<32>{@fill=#faff29}* Places like this were the norm here, once...',
            '<32>{@fill=#faff29}* ... before I arrived and ruined it all.',
            '<32>{@fill=#faff29}* My bionic implant gave us top- level access to the system.',
            '<32>{@fill=#faff29}* Anything we wanted, we could have... with a cost.',
            "<32>{@fill=#faff29}* You've seen the aftermath.\n* You've been to every world we created here...",
            "<32>{@fill=#faff29}* The XM you've gained is proof of that.",
            '<32>{@fill=#faff29}* XM...\n* It\'s an acronym, of course.\n* It stands for \"exotic matter.\"',
            "<32>{@fill=#faff29}* It's the stuff that links all of our SOULs together.",
            "<32>{@fill=#faff29}* It's what you need to break the force field."
         ],
         clover3: [
            "<32>{#p/human}{#v/6}{@fill=#faff29}* I don't know if we'll be aware of what happened here.",
            '<32>{@fill=#faff29}* This is only a subconscious realm, after all.',
            '<32>{@fill=#faff29}* Still, even when a nightmare like ours comes to an end...',
            '<32>{@fill=#faff29}* Is it ever truly forgotten?'
         ],
         clover4: () => [
            "<32>{#p/human}{#v/6}{@fill=#faff29}* ...\n* It's time for you to go.",
            '<32>{@fill=#faff29}* You can find the exit terminal at the end of the prime pathway.',
            ...(SAVE.data.b.oops
               ? [ '<32>{@fill=#faff29}* ... take care...', '<32>{@fill=#faff29}* Got it?' ]
               : [
                    '<32>{@fill=#faff29}* ... but before you go...',
                    "<32>{@fill=#faff29}* Frisk?\n* That's your name, isn't it?",
                    "<32>{@fill=#faff29}* Forgive me.\n* I couldn't help but wonder what was on your mind.",
                    "<32>{@fill=#faff29}* ...\n* You're a good person, Frisk.",
                    '<32>{@fill=#faff29}* And from what I can tell...',
                    "<32>{@fill=#faff29}* So is the one who's been making all those choices for you.",
                    '<32>{@fill=#faff29}* ...',
                    "<32>{@fill=#faff29}* Frisk and I won't remember this conversation, but there's a chance you might.",
                    "<32>{@fill=#faff29}* If you're really out there somewhere, listening...",
                    "<32>{@fill=#faff29}* ... don't forget about the lives we've led in this place.",
                    "<32>{@fill=#faff29}* No matter the world, real or virtual, memories like ours don't deserve to be forgotten."
                 ])
         ],

         smasher1: (haha: boolean) => [
            "<25>{#p/alphys}{#g/alphysWelp}* I'll be waiting for you at the force field.",
            ...(haha
               ? [
                    '<25>{#p/alphys}{#g/alphysFR}* ... also, I took the Mew Mew doll from you while you were asleep.',
                    "<25>{#p/alphys}{#g/alphysHellYeah}* Who's laughing now!"
                 ]
               : !SAVE.data.b.failshow && SAVE.data.b.item_tvm_mewmew && !SAVE.data.b.mewget
               ? ((SAVE.data.b.mewget = true),
                 [
                    '<25>{#p/alphys}{#g/alphysFR}* ... also, I found the Mew Mew doll you let go of earlier.',
                    "<25>{#p/alphys}{#g/alphysHellYeah}* Who's laughing now!"
                 ])
               : [])
         ],
         smasher2: [ '<25>{*}{#p/alphys}{#g/alphysSmileSweat}* Ready?{^40}{%}' ],

         bad1: () =>
            [
               world.bad_robot || world.trueKills > 29
                  ? world.alphys_percieved_kills < 20
                     ? [
                          '<25>{*}{#p/twinkly}{#f/8}* 是不是拿不定主意呀，\n  亲爱的艾斯戈尔？',
                          '<25>{*}{#f/5}* 我理解。\n* 谁都有犹豫不决的时候。',
                          "<25>{*}{#f/11}* 但没关系！",
                          "<25>{*}{#f/7}* 你再也不用操心啦！",
                          '<25>{*}{#p/asgore}{#g/asgoreBound}* ...你在...',
                          '<25>{*}* ...干...什么...',
                          '<25>{*}{#p/twinkly}{#f/8}* 哎呀，我什么都没干呀，\n  艾斯戈尔...'
                       ]
                     : [
                          '<25>{*}{#p/twinkly}{#f/5}* 哎呀呀，艾斯戈尔...',
                          "<25>{*}{#f/11}* 你本可以直接把人杀了，\n  那就皆大欢喜。",
                          "<25>{*}{#f/7}* 但现在，你再也没机会咯。",
                          '<25>{*}{#p/asgore}{#g/asgoreBound}* ...你在...',
                          '<25>{*}* ...干...什么...',
                          "<25>{*}{#p/twinkly}{#f/5}* 杀人，可没你想得\n  那么伤天害理哦，艾斯戈尔...",
                          '<25>{*}{#f/9}* 就让我好好教你\n  怎么才能杀得又嗨又爽吧！'
                       ]
                  : SAVE.data.b.ultrashortcut
                  ? [
                       '<25>{*}{#p/twinkly}{#f/5}* 哎呀，哎呀...',
                       "<26>{*}{#f/11}* 跑太快，把脑子都跑丢了。",
                       '<25>{*}{#p/asgore}{#g/asgoreBound}* ...你在...',
                       '<25>{*}* ...干...什么...',
                       "<25>{*}{#p/twinkly}{#f/5}* 想靠那点小把戏蒙混过关？",
                       "<25>{*}{#f/7}* 真当我眼瞎呢。"
                    ]
                  : [
                       '<25>{*}{#p/twinkly}{#f/5}* 哈喽，艾斯戈尔！',
                       "<26>{*}{#f/11}* 别这么急着拯救怪物嘛，\n  好玩的事多着呢。",
                       '<25>{*}{#p/asgore}{#g/asgoreBound}* ...你在...',
                       '<25>{*}* ...干...什么...',
                       '<25>{*}{#p/twinkly}{#f/5}* 我知道\n  这一下把你吓得不轻，\n  但别气馁哦！',
                       "<25>{*}{#f/7}* 你看，这多好玩啊。\n  是不是呀，艾斯戈尔？"
                    ],
               [
                  "<25>{*}{#p/twinkly}{#f/7}* Like I'd ever let you escape so easily.",
                  SAVE.data.b.ultrashortcut
                     ? '<25>{*}{#f/8}* Poor $(name)... always so eager to take the shortcuts in life...'
                     : '<25>{*}{#f/8}* Poor $(name)... always so desperate to have things your way...',
                  '<25>{*}{#f/5}* But not this time.',
                  '<25>{*}{#p/asgore}{#g/asgoreBound}* ...你在...',
                  '<25>{*}* ...干...什么...',
                  "<25>{*}{#p/twinkly}{#f/5}* From now on, I'll be the one calling the shots.",
                  '<25>{*}{#f/7}* And you just have to live with it.'
               ],
               [
                  '<25>{*}{#p/twinkly}{#f/11}* Come now, $(name)...',
                  '<25>{*}{#f/5}* This resistance of yours is pointless!',
                  SAVE.data.b.ultrashortcut
                     ? "<25>{*}{#f/7}* No matter how fast you try to go, I'll always be one step ahead."
                     : "<25>{*}{#f/7}* No matter what you do, I'll always be one step ahead.",
                  '<25>{*}{#p/asgore}{#g/asgoreBound}* ...你在...',
                  '<25>{*}* ...干...什么...',
                  "<25>{*}{#p/twinkly}{#f/5}* Shh... it's alright.",
                  '<25>{*}{#f/5}* My friend $(name) here just needs to be taught a lesson.'
               ]
            ][Math.min(SAVE.flag.n.neutral_twinkly_loop1++, 2)],
         bad2: [
            "<25>{*}{#g/twinklyNice}* ...哎呀，忘了自我介绍了。\n  我叫闪闪。{^30}{%}",
            '<25>{*}{#g/twinklySassy}* 闪亮明星：闪闪。{^30}{%}'
         ],
         bad3: [ '<25>{*}{#p/asgore}{#g/asgoreBreak1}* 啊啊啊啊...！{^999}' ],
         bad4: [
            "<25>{*}{#p/twinkly}{#g/twinklyWink}* 哎呦~ 你痛苦的尖叫\n  真是天籁之音啊，\n  太好听啦！{^30}{%}",
            '<25>{*}{#p/asgore}{#g/asgoreBreak1}* ...{^10}{%}'
         ],
         bad5: [ "<25>{*}{#p/twinkly}{#f/7}* 让我们再欣赏一次。{^20}{%}" ],
         bad6: [ '<25>{*}{#p/asgore}{#g/asgoreBreak2}* 啊啊啊啊啊啊...！{^999}' ],
         bad7: [ '<25>{*}{#p/twinkly}{#f/11}* 给我叫！{^5}{%}' ],
         bad8: [ '<25>{*}{#p/twinkly}{#g/twinklyEvil}{#v/1}* 使劲叫！！！{^5}{%}' ],
         bad9: [ '<25>{*}{#p/twinkly}{#g/twinklyGrin}{#v/1}* 叫啊！！！{^5}{%}' ],
         bad10: [ '<25>{*}{#p/twinkly}{#g/twinklyTwisted}{#v/1}* 叫啊！！！{^5}{%}' ],
         bad11: [
            '<25>{*}{#p/twinkly}{#g/twinklyCrazed}{#v/1}* 叫啊叫啊叫啊叫啊叫啊叫啊\n  叫啊叫啊叫啊叫啊叫啊叫啊\n  叫啊叫啊叫啊叫啊叫啊叫啊 {%}',
            '<99>{*}{#p/twinkly}{#g/twinklyBroken}{#v/1}* 啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈\n  哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈\n  哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈{^20}{%}'
         ],
         bad12: [ '<25>{*}{#p/twinkly}{#g/twinklyDead}{#v/0}* ...{^80}{%}', '<25>{*}* ...死吧。{^10}{%}' ],
         bad13: () => [
            ...[
               [
                  '{#p/twinkly}{#v/1}哈喽，$(name)。{^100}{%}',
                  '{#p/twinkly}{#v/1}欢迎来到新时空。{^100}{%}'
               ],
               [
                  '{#p/twinkly}{#v/1}$(name)，欢迎回来。{^100}{%}',
                  "{#p/twinkly}{#v/1}好开心哦，又见到你了。{^100}{%}"
               ],
               [ '{#p/twinkly}{#v/1}哎呦，$(name)...{^100}{%}', '{#p/twinkly}{#v/1}你胆可真肥，竟敢抛弃我。{^100}{%}' ]
            ][Math.min(SAVE.flag.n.neutral_twinkly_loop2, 2)],
            '{#p/twinkly}{#v/1}嘻嘻嘻...{^100}{%}',
            '{#p/twinkly}{#v/1}是不是... 很孤独呀？{^100}{%}',
            '{#p/twinkly}{#v/1}是不是... 很想逃呀？{^100}{%}',
            "{#p/twinkly}{#v/1}...想逃？没门！{^100}{%}",
            '{#p/twinkly}{#v/1}艾斯戈尔把那“档案”当宝一样宠着...{^100}{%}',
            "{#p/twinkly}{#v/1}那就让你也好好享受享受它吧！{^100}{%}",
            '{#p/twinkly}{#v/1}你只能往前...{^100}{%}',
            '{#p/twinkly}{#v/1}再过来点，再过来点...{^100}{%}',
            "{#p/twinkly}{#v/1}...你不怕我吗？{^100}{%}",
            "{#p/twinkly}{#v/1}还不逃？{^100}{%}",
            '{#p/twinkly}{#v/1}好。{^100}{%}',
            '{#p/twinkly}{#v/1}太好了。{^100}{%}',
            '{#p/twinkly}{#v/1}真不愧是我的好兄弟。{^100}{%}',
            '{#p/twinkly}{#v/1}...{^100}{%}',
            "{#p/twinkly}{#v/1}快了...！{^100}{%}",
            '{#p/twinkly}{#v/1}$(name)，马上就到了...{^100}{%}'
         ],
         bad14: [
            '{#p/human}{#v/1}{@fill=#42fcff}漫长的噩梦已然消散。{^80}{%}',
            '{#p/human}{#v/2}{@fill=#ff993d}熟悉的世界再度出现！{^80}{%}',
            '{#p/human}{#v/3}{@fill=#003cff}重要的抉择摆在眼前。{^80}{%}',
            '{#p/human}{#v/4}{@fill=#d535d9}眼前巨物，毁于一旦？{^80}{%}',
            '{#p/human}{#v/5}{@fill=#00c000}心中仁慈，尽数展现？{^80}{%}',
            '{#p/human}{#v/6}{@fill=#faff29}战或至善，由你决断。{^80}{%}'
         ],
         bad15: [
            [
               '{*}{#p/twinkly}...',
               '{*}...你在做什么？',
               "{*}你以为我会...",
               '{*}...学到教训吗？',
               '{*}想得美。'
            ],
            [ "{*}{#p/twinkly}你要是现在不动手...", "{*}终有一天，我会回来。" ],
            [ "{*}{#p/twinkly}我会把你干掉。" ],
            [ "{*}{#p/twinkly}我会摧毁一切。" ],
            [ "{*}{#p/twinkly}我会将你的存在彻底抹去！" ],
            [ '{*}{#p/twinkly}...' ],
            [ '{*}{#p/twinkly}...？' ],
            [ '{*}{#p/twinkly}...为什么？' ],
            [ '{*}{#p/twinkly}...为什么...', '{*}{#p/twinkly}...要对我这么好？' ],
            [ "{*}{#p/twinkly}...我不明白..." ],
            [ "{*}{#p/twinkly}我不明白！" ]
         ],
         bad16a: [ "{*}{#p/twinkly}{#i/4}...我就是...不明白...{^30}{%}" ],
         bad16b: [ '{*}{#p/twinkly}{#i/3}再见，$(name)。{^30}{%}' ],
         bad17: [
            
            '<32>{*}{#p/event}{#i/5}闪闪逃走了。'
         ],
         sad0: () =>
            world.runaway ? [ '<25>{#p/asriel1}{#f/30}* 我投降！' ] : [ "<25>{#p/asriel1}{#f/25}* 对不起。" ],
         sad1: () => [
            ...(world.runaway
               ? [ '<25>{#p/asriel1}{#f/23}* 看样子，$(name)，\n  你又赢了。' ]
               : [
                    "<25>{#p/asriel1}{#f/23}* $(name)，\n  我一直都是个爱哭鬼，是吧？",
                    ...(SAVE.data.b.oops ? [] : [ '<32>{#p/basic}* 艾斯利尔...' ])
                 ]),
            '<25>{#p/asriel1}{#f/22}* ...',
            '<25>{#f/21}* ...我知道的。',
            "<25>{#f/23}* 你并不是$(name)，对吧？",
            "<25>{#f/22}* 很久以前，$(name)就死了。",
            '<25>{#f/15}* ...',
            '<25>{#f/15}* 嗯... 那个...',
            '<25>{#f/10}* 你叫什么名字呢？'
         ],
         sad2: () => [
            '<32>{#p/human}* （...）\n* （你把你的名字告诉了艾斯利尔。）',
            ...(world.runaway
               ? [
                    '<25>{#p/asriel1}{#f/21}* 是叫弗里斯克吗？',
                    '<25>{#f/23}* 嗯，这次你又赢了，\n  弗里斯克。',
                    '<25>{#f/22}* ...',
                    "<25>{#f/13}* 很奇怪...",
                    "<25>{#f/16}* 当星星时，我都忘了...\n  恐惧是什么滋味了。",
                    "<25>{#f/15}* 无数次将别人推入恐惧深渊，\n  已经麻木了。",
                    "<25>{#f/13}* 但现在，我有了所有怪物的灵魂后...",
                    '<25>{#f/15}* ...我...',
                    "<25>{#f/16}* 我终于深切感受到那种情感。",
                    "<25>{#f/15}* 当你开始不停攻击我时...",
                    '<25>{#f/15}* 他们，好像就知道了\n  你是怎样的人。',
                    '<25>{#f/13}* 诚然，你从没杀过\n  任何一只怪物。',
                    '<25>{#f/13}* 但你也一次次将他们\n  推向生死边缘...',
                    '<25>{#f/15}* 一次，又一次，又一次...',
                    '<25>{#f/16}* ...',
                    "<25>{#f/21}* 弗里斯克，\n  他们现在都很怕你。",
                    '<26>{#f/23}* 而且...\n  我也很怕你。',
                    '<25>{#f/22}* ...'
                 ]
               : [
                    '<25>{#p/asriel1}{#f/17}* 是叫弗里斯克吗？',
                    "<25>{#f/17}* 那...",
                    '<25>{#f/23}* ...真是个好名字。',
                    '<25>{#f/22}* ...',
                    '<25>{#f/13}* 弗里斯克...',
                    ...(SAVE.flag.n.killed_sans > 0
                       ? [
                            '<25>{#p/asriel1}{#f/13}* What we did back there, I...',
                            '<25>{#f/15}* ...',
                            "<25>{#f/16}* I'm just sorry for dragging you into it.",
                            ...(SAVE.data.b.oops ? [] : [ '<32>{#p/basic}* ... wait a second...' ]),
                            ...(SAVE.flag.n.genocide_milestone > 0
                               ? [
                                    [
                                       '<25>{#p/asriel1}{#f/21}* Sans, Papyrus...\n* Even the canine unit...',
                                       '<25>{#p/asriel1}{#f/21}* Sans, Papyrus, Monster Kid, Undyne...\n* Even the Royal Guard...',
                                       '<25>{#p/asriel1}{#f/21}* Sans, Papyrus, Monster Kid, Undyne...\n* And Mettaton, too...',
                                       '<25>{#p/asriel1}{#f/21}* Sans, Papyrus, Monster Kid, Undyne...\n* Mettaton and Alphys...'
                                    ][Math.floor(SAVE.flag.n.genocide_milestone / 2) - 1],
                                    "<25>{#f/21}* All those people I now know you'd do anything to protect..."
                                 ]
                               : [
                                    "<25>{#p/asriel1}{#f/21}* I know we didn't get far...",
                                    '<25>{#f/15}* ... but still...',
                                    '<25>{#f/21}* It was wrong of me to force you along like that.',
                                    "<25>{#f/21}* Especially now that I know you'd do anything to protect them."
                                 ]),
                            ...(SAVE.data.b.oops
                               ? []
                               : [ '<32>{#p/basic}* ... is that the \"murder timeline\" he was talking about before?' ]),
                            "<25>{#p/asriel1}{#f/23}* Just... please, don't blame yourself, okay?",
                            "<25>{#f/22}* Not only did you undo what you'd done before...",
                            '<25>{#f/17}* But you went up against impossible odds just to save your friends.',
                            ...(SAVE.data.b.oops ? [] : [ '<32>{#p/basic}* Yeah.' ]),
                            "<25>{#p/asriel1}{#f/13}* Plus, and maybe it's just my imagination, but...",
                            '<25>{#f/13}* ... thinking back on it now...',
                            '<25>{#f/15}* You never really seemed interested in what we were doing.',
                            ...(SAVE.data.b.oops ? [] : [ '<32>{#p/basic}* Yeah, exactly.' ]),
                            '<25>{#p/asriel1}{#f/23}* In fact... if anything...',
                            '<25>{#f/22}* It almost looked like you were trying to resist it.',
                            ...(SAVE.data.b.oops
                               ? []
                               : [ "<32>{#p/basic}* Yeah, you're not that kind of person at all." ]),
                            '<25>{#p/asriel1}{#f/15}* All I know is... despite what happened...',
                            '<25>{#f/15}* Despite what you did... or, what I wanted you to do...',
                            "<25>{#f/16}* You're still a better person than I ever was.",
                            ...(SAVE.data.b.oops ? [] : [ '<32>{#p/basic}* Hmph.' ]),
                            "<25>{#p/asriel1}{#f/21}* ...\n* But I'm getting ahead of myself."
                         ]
                       : [
                            "<25>{#f/13}* I haven't felt like this for a long time.",
                            '<25>{#f/16}* As a star, I was... soulless.',
                            '<25>{#f/15}* I lacked the power to love other people.',
                            "<25>{#f/13}* However, with everyone's SOULs inside me...",
                            '<25>{#f/13}* I not only have my own compassion back...',
                            "<25>{#f/23}* But I can feel every other monster's as well.",
                            '<25>{#f/17}* They all care about each other so much.',
                            ...(30 <= SAVE.data.n.bully
                               ? [
                                    '<25>{#f/23}* And... uh...\n* As for you, they...',
                                    '<25>{#f/22}* ...',
                                    ...(20 <= world.flirt
                                       ? [
                                            '<25>{#f/15}* ... well, they seem to be kind of conflicted...',
                                            "<25>{#f/10}* It's like... they like you, but dislike you at the same time?"
                                         ]
                                       : [
                                            "<25>{#f/15}* ... well, some of them don't seem to like you...",
                                            ...(SAVE.data.b.undyne_respecc
                                               ? [
                                                    '<25>{#f/10}* Except Undyne.\n* She seems to like you a lot for some reason.'
                                                 ]
                                               : [ "<25>{#f/10}* Though, I'm not sure why." ])
                                         ]),
                                    '<25>{#f/23}* ... how strange.',
                                    '<25>{#f/22}* ...'
                                 ]
                               : [
                                    '<25>{#f/23}* And... they care about you too, Frisk.',
                                    '<25>{#f/22}* ...',
                                    ...(20 <= world.flirt
                                       ? [
                                            '<25>{#f/15}* ... wow, they... they really care about you a lot...',
                                            '<25>{#f/15}* Uh...\n* Frisk, this is...',
                                            '<25>{#f/17}* ... golly...',
                                            "<25>{#f/20}* I, uh, really shouldn't tell you what they're feeling right now."
                                         ]
                                       : [
                                            '<25>{#p/asriel1}{#f/13}* I wish I could tell you how everyone feels about you.',
                                            '<25>{#f/17}* Toriel... Asgore...\n* Sans... Papyrus...\n* Undyne... Alphys...',
                                            ...(!SAVE.data.b.f_state_kidd_betray
                                               ? [ '<25>{#f/15}* ... Monster Kid?\n* Is that their name?' ]
                                               : world.happy_ghost && SAVE.data.b.a_state_hapstablook
                                               ? [ '<25>{#f/23}* ... Napstablook, and... all their cousins.' ]
                                               : SAVE.data.n.state_starton_nicecream > 0
                                               ? [ '<25>{#f/23}* ... even the Ice Dream guy.' ]
                                               : [ '<25>{#f/23}* ... even that little mouse who works at the CORE.' ]),
                                            '<25>{#f/17}* Monsters are weird.',
                                            '<25>{#f/15}* Even though they barely know you...',
                                            '<25>{#f/17}* It feels like they all really love you.',
                                            '<25>{#f/23}* Haha.',
                                            '<25>{#f/22}* ...'
                                         ])
                                 ])
                         ])
                 ])
         ],
         sad3: () =>
            world.runaway
               ? [
                    "<26>{#p/asriel1}{#f/13}* Still, I...\n* I know I've made far worse mistakes.",
                    "<25>{#f/16}* I know... you're not the only one to blame for what happened here.",
                    ...(SAVE.flag.n.killed_sans > 0
                       ? [
                            '<25>{#f/15}* ...',
                            '<25>{#f/15}* Dragging you into some backwards plan to destroy the outpost...',
                            '<25>{#f/16}* Just so I could pretend you were my long-dead sibling...'
                         ]
                       : [
                            '<25>{#f/15}* ...',
                            '<25>{#f/15}* Turning myself into that... faceless entity...',
                            '<25>{#f/16}* Just so I could torture you in a nightmare of my own making...'
                         ]),
                    "<25>{#f/13}* That's the kind of thing I'm talking about.",
                    "<25>{#f/22}* ...做了那些事，\n  我怎么还有脸活在这世上。",
                    choicer.create('* (What will you do?)', 'Protest', 'Do not')
                 ]
               : [
                    SAVE.flag.n.killed_sans > 0
                       ? "<25>{#p/asriel1}{#f/13}* I understand if you can't forgive me."
                       : "<25>{#p/asriel1}{#f/13}* Frisk... I...\n* I understand if you can't forgive me.",
                    '<25>{#f/13}* I understand if you... want me gone.',
                    ...(SAVE.data.b.oops ? [] : [ "<32>{#p/basic}* ... don't say that!" ]),
                    '<25>{#p/asriel1}{#f/15}* I acted so strange and horrible.',
                    '<25>{#f/15}* I hurt you.',
                    '<25>{#f/16}* I hurt so many people.',
                    '<25>{#f/13}* Friends, family, bystanders...',
                    "<25>{#f/22}* There's no excuse for what I've done.",
                    ...(SAVE.data.b.oops ? [] : [ '<32>{#p/basic}* 艾斯利尔...' ]),
                    choicer.create('* (What will you do?)', 'Forgive', 'Do not')
                 ],
         sad4a: () => [
            ...(world.runaway
               ? [
                    '<25>{#p/asriel1}{#f/25}* Wh... what?',
                    '<25>{#f/21}* ...',
                    "<25>{#f/21}* I guess... you really don't want anyone to die, huh?",
                    '<25>{#f/22}* You just want to beat people up... nothing more.',
                    '<25>{#f/21}* ... still... even if you do want me to stay...'
                 ]
               : [
                    '<25>{#p/asriel1}{#f/25}* Wh... what?',
                    '<25>{#f/17}* ... Frisk, come on.',
                    "<25>{#f/23}* You're...\n* You're gonna make me cry again.",
                    ...(SAVE.data.b.oops ? [] : [ '<32>{#p/basic}* ... t-tell me about it...' ]),
                    '<25>{#p/asriel1}{#f/21}* ... besides, even if you do forgive me...'
                 ]),
            "<25>{#f/15}* I can't keep these SOULs inside of me forever.",
            '<25>{#f/16}* So... the least I can do is return them.'
         ],
         sad4b: () =>
            world.runaway
               ? [
                    '<25>{#p/asriel1}{#f/21}* ...',
                    '<25>{#f/21}* Well, anyway.\n* I did promise that if you defeated me...',
                    '<25>{#f/23}* I\'d give you your \"happy ending.\"',
                    "<25>{#f/15}* ... so, since I can't keep these SOULs inside of me forever...",
                    "<25>{#f/16}* I'll return them, and do just that."
                 ]
               : [
                    '<25>{#p/asriel1}{#f/22}* ... right.',
                    '<25>{#f/21}* I understand.',
                    '<25>{#f/15}* I just hope that...',
                    '<25>{#f/16}* I can make up for it a little right now.',
                    "<25>{#p/asriel1}{#f/15}* ... of course, since I can't keep these SOULs inside of me forever...",
                    '<25>{#f/16}* The least I can do is return them.'
                 ],
         sad4c: () => [
            '<25>{#p/asriel1}{#f/16}* ...',
            '<25>{#f/6}* But first...',
            "<25>{#f/29}* There's something else I have to do.",
            ...(SAVE.data.b.oops ? [] : [ '<32>{#p/basic}* ... what now?' ]),
            "<25>{#p/asriel1}{#f/29}* Right now, I can feel everyone's minds working as one.",
            "<25>{#f/6}* They're all racing with the same intention.",
            "<26>{#f/6}* With everyone's power... with everyone's determination...",
            "<25>{#f/6}* It's time for monsters...",
            ...(SAVE.data.b.oops ? [] : [ '<32>{#p/basic}* To finally go free.' ]),
            '<25>{#p/asriel1}{#f/29}* To finally go free.',
            ...(SAVE.data.b.oops ? [] : [ '<32>{#p/basic}* ... knew it.' ])
         ],
         abreak: '{*}{#p/event}{#i/3}The force field was\neradicated.',
         sad5: () => [
            '<25>{#p/asriel1}{#f/21}* Frisk...',
            '<25>{#f/21}* I have to go now.',
            ...(SAVE.data.b.oops ? [] : [ "<32>{#p/basic}* ... huh?\n* But you can't just..." ]),
            "<25>{#p/asriel1}{#f/15}* Without the power of everyone's SOULs...",
            "<25>{#f/22}* I can't keep maintaining this form.",
            '<25>{#f/21}* In a little while...',
            "<25>{#f/22}* I'll turn back into a star.",
            ...(SAVE.data.b.oops ? [] : [ '<32>{#p/basic}* But... you...' ]),
            "<25>{#p/asriel1}{#f/15}* I'll stop being myself.",
            ...(world.runaway
               ? [
                    "<25>{#f/15}* ... but maybe that's for the best.",
                    '<25>{#f/23}* Ha... Frisk.',
                    "<25>{#f/21}* There's no reason for you to stick around anymore.",
                    "<25>{#f/22}* Don't waste any more time on me."
                 ]
               : [
                    "<25>{#f/15}* I'll stop being able to feel love again.",
                    ...(SAVE.data.b.oops ? [] : [ '<32>{#p/basic}* ... no...' ]),
                    '<25>{#p/asriel1}{#f/23}* So... Frisk.',
                    "<25>{#f/17}* It's best if you just forget about me, okay?",
                    ...(SAVE.data.b.oops ? [] : [ "<32>{#p/basic}* No! You can't just walk away!" ]),
                    '<25>{#p/asriel1}{#f/23}* Just go be with the people who love you.'
                 ]),
            choicer.create('* (What will you do?)', 'Comfort him', 'Do not')
         ],
         sad6: () =>
            world.runaway
               ? [
                    '<25>{#p/asriel1}{#f/25}* ...！',
                    '<25>{#f/21}* ...',
                    '<25>{#f/21}* Frisk, I...',
                    "<25>{#f/15}* ... I just can't right now, okay?",
                    "<25>{#f/22}* I... I'm sorry."
                 ]
               : [
                    '<25>{#p/asriel1}{#i/4}{#f/23}* Ha... ha...',
                    "<25>{#f/23}{#i/4}* I don't want to let go...",
                    ...(SAVE.data.b.oops ? [] : [ '<32>{#p/human}* (It sounds like someone is crying...)' ])
                 ],
         sad7: () =>
            world.runaway
               ? [
                    '<25>{#p/asriel1}{#f/13}* Frisk...',
                    '<25>{#f/15}* Whatever you do...',
                    '<25>{#f/21}* Just... try to be careful, okay?',
                    '<25>{#f/21}* No matter who you... nearly beat to death.',
                    '<25>{#f/23}* Golly.\n* What are they even going to do with you.'
                 ]
               : [
                    '<25>{#p/asriel1}{#f/21}* Frisk...',
                    "<25>{#f/23}* You're...",
                    "<25>{#f/17}* You're going to do a great job, okay?",
                    '<25>{#f/21}* No matter what you do.',
                    '<25>{#f/23}* Everyone will be there for you, okay?',
                    ...(SAVE.data.b.oops ? [] : [ '<32>{#p/basic}* No... please...' ])
                 ],
         sad8: [ "<25>{#p/asriel1}{#f/21}* Well...\n* My time's running out.", '<25>{#f/22}* So... goodbye.' ],
         sad8x: [ "<32>{*}{#p/basic}* ... don't go...{^50}{%}" ],
         sad9: () =>
            world.runaway
               ? [
                    '<25>{#p/asriel1}{#f/21}* By the way...',
                    '<25>{#f/22}* Frisk.',
                    "<25>{#f/21}{#x1}* ... don't beat yourself up over this, okay?"
                 ]
               : [
                    '<25>{#p/asriel1}{#f/21}* By the way...',
                    '<25>{#f/23}* Frisk.',
                    '<25>{#f/17}{#x1}* ... take care of Mom and Dad for me, okay?'
                 ],
         sad9x: [ '<32>{#p/basic}* ...' ],
         sad10: () =>
            world.runaway
               ? [ '<32>{#p/human}* （飞船的声音渐渐消失在天际。）' ]
               : [ '<25>{#p/kidd}{#f/4}* Hello?', '<25>{#f/4}* Is someone there...?' ],
         sad11: () =>
            SAVE.data.b.f_state_kidd_betray
               ? [
                    "<25>{#p/kidd}{#f/5}* ... oh, it's just you.",
                    "<25>{#f/4}* Well... when you're ready...",
                    "<25>{#f/5}* Everyone's waiting for you at Asgore's place.",
                    "<25>{#f/4}* I'll... just be out of your way now."
                 ]
               : [
                    '<25>{#p/kidd}{#f/2}* Yo!\n* Where have YOU been all this time!?',
                    "<25>{#f/1}* They've been looking ALL over for you, dude!",
                    "<25>{#f/2}* Like, there's this big hangout going on at Asgore's, and...",
                    "<25>{#f/1}* Everyone's been wondering when you'd show up!",
                    "<25>{#f/1}* ... come on, dude!\n* Come and join in before it's too late!"
                 ],
         sad11x: [
            '<32>{#p/basic}* ... Frisk, I...',
            "<33>* I can't just let him walk away.",
            "<32>* It's all too much...",
            "<32>* These things I've been holding onto for years...",
            "<32>* If I don't get to talk to him soon, I...",
            '<32>* I...',
            "<32>* I just need to see him before he's... gone for good."
         ],
         epilogue1: () =>
            world.runaway
               ? [
                    '<32>{#s/phone}{#p/event}* Ring, ring...',
                    '<18>{#p/papyrus}{#f/6}SORRY IF YOU TRIED TO CALL US BEFORE...',
                    "<18>{#p/papyrus}{#f/6}THE LINES AREN'T DOWN OR ANYTHING, WE JUST...",
                    "<18>{#p/papyrus}{#f/5}... WE'VE BEEN IGNORING YOU.",
                    "<18>{#f/5}IT'S STRANGE... WE ALL SORT OF KNOW YOUR NAME NOW.",
                    "<18>{#f/6}WE'RE ALL... KIND OF TERRIFIED OF YOU.",
                    '<18>{#f/4}... WELL, MOST OF US, ANYWAY.',
                    '<25>{#p/undyne}{#f/12}* Yeah.\n* What he said.',
                    '<18>{#p/papyrus}{#f/5}...',
                    "<18>{#p/papyrus}{#f/5}... TO BE HONEST, I THINK SHE'S AFRAID, TOO.",
                    '<25>{#p/undyne}{#f/17}* Am not!',
                    '<18>{#p/papyrus}{#f/5}...',
                    "<18>{#f/5}IT WASN'T AN EASY CHOICE TO MAKE, BUT...",
                    "<18>{#f/31}WE'VE ALREADY LEFT TO LOOK FOR OUR NEW HOMEWORLD.",
                    "<18>{#f/6}I KNOW, I KNOW!\nBUT DON'T WORRY...",
                    "<18>{#f/5}... YOU'LL STILL HAVE THE CORE TO KEEP YOU COMPANY.",
                    '<25>{#p/undyne}{#f/12}* Until that runs out of power, of course.',
                    "<18>{#p/papyrus}{#f/5}JUST... DON'T COME AFTER US, OKAY?",
                    "<18>{#f/31}IT'S PROBABLY FOR THE BEST THAT WE NEVER MEET AGAIN.",
                    '<18>{#f/3}...',
                    '<18>{#f/3}WELL... GOODBYE.',
                    '<25>{#p/undyne}{#f/1}* Enjoy the solitude!!',
                    '<32>{#s/equip}{#p/event}* Click...'
                 ]
               : [
                    '<32>{#s/phone}{#p/event}* Ring, ring...',
                    "<18>{#p/papyrus}{#f/0}HEY, HUMAN!\nI HOPE YOU'RE DOING OKAY!",
                    "<18>{#f/5}WE'VE BEEN VERY WORRIED ABOUT YOU, YOU KNOW.",
                    '<18>{#f/6}WHEN WE CALLED YOU BEFORE, THERE WAS NO RESPONSE!',
                    '<18>{#f/0}THANKFULLY, YOUR FRIEND CAME BY, AND...',
                    '<18>{#f/0}WELL, WE CAN ALL BREATHE A SIGH OF RELIEF NOW.',
                    "<18>{#f/0}... FRISK?\nTHAT'S YOUR NAME, RIGHT?",
                    "<18>{#f/5}IT'S STRANGE... WE ALL SORT OF KNOW YOUR NAME NOW.",
                    "<18>{#f/0}BUT THAT'S OKAY.\nIT'S STRANGE IN AN UPLIFTING WAY.",
                    "<25>{#p/sans}{#f/0}* careful bro, don't overcook it.",
                    "<18>{#p/papyrus}{#f/7}SANS!!!\nI KNOW WHAT I'M DOING!!!",
                    '<25>{#p/sans}{#f/2}* just making sure.',
                    "<18>{#p/papyrus}{#f/6}SO... TURNS OUT ASGORE'S A BIG FAN OF SPAGHETTI.",
                    '<18>{#p/papyrus}{#f/4}AFTER MY FIRST DISH, HE WAS HOOKED...',
                    '<18>{#p/papyrus}{#f/0}NOW, HE WANTS ME TO COOK FOR THE WHOLE PARTY!',
                    '<18>{#p/papyrus}{#f/9}I, MASTER CHEF PAPYRUS, AM HAPPY TO OBLIGE!',
                    "<25>{#p/sans}{#f/0}* you're finally getting the respect you deserve, huh?",
                    '<18>{#p/papyrus}{#f/0}OH, ABSOLUTELY.\nBECAUSE UNTIL NOW...',
                    "<18>{#p/papyrus}{#f/4}I'VE NEVER SEEN A CUSTOMER GET PAST THE FIRST BITE.",
                    '<25>{#p/sans}{#f/0}* wow.\n* talk about moving up in the world.',
                    "<25>{#p/sans}{#f/3}* maybe now, not being in the royal guard... isn't so bad.",
                    "<25>{#p/sans}{#f/2}* i'm your brother, so i'm proud of you either way.",
                    "<18>{#p/papyrus}{#f/8}SANS...!\nYOU'RE GOING TO MAKE ME CRY!",
                    "<18>{#p/papyrus}{#f/7}THE CUSTOMERS WON'T WANT TEARS IN THEIR PASTA!",
                    '<25>{#p/sans}{#f/3}* whoops.\n* bad timing, i guess.',
                    '<18>{#p/papyrus}{#f/4}FOR YOU, THIS IS ABOVE AVERAGE TIMING...',
                    "<18>{#p/papyrus}{#f/0}... ANYWAY, WE'LL BE BUSY IN ASGORE'S KITCHEN.",
                    '<18>{#p/papyrus}{#f/9}FEEL FREE TO SWING BY WHEN YOU GET THE CHANCE!',
                    '<32>{#s/equip}{#p/event}* Click...'
                 ],
         epilogue2: () => [
            '<25>{#p/sans}{#f/0}* hey, bucko.',
            "<25>{#f/0}* i've been wondering when you'd swing by this way.",
            '<25>{#f/3}* some kid blew past me not too long ago, probably to find you.',
            '<25>{#f/2}* that must be why you finally picked up the phone after ten rings.',
            "<25>{#f/0}* ... anyway.\n* i've been looking for someone myself, y'know.",
            "<25>{#f/0}* you probably know her.\n* name's toriel.",
            "<25>{#f/3}* i've looked in all the obvious places, but no dice.",
            '<25>{#f/0}* by now, she could be anywhere...',
            '<25>{#f/3}* if you see her, or hear from her, tell her to call me.',
            SAVE.data.b.skeleton_key
               ? '<25>{#f/2}* ... for all i know, she could be in my closet.'
               : '<25>{#f/2}* thanks in advance.'
         ],
         epilogue3: [
            '<25>{#p/asgore}{#f/6}* Ah, Frisk!\n* I see you are awake.',
            '<25>{#f/6}* If you would like, you may join us in our celebration.',
            '<25>{#f/21}* I am sure the others would be happy to see you.',
            '<25>{#f/5}* Otherwise, feel free to roam the outpost as you please.',
            '<25>{#f/5}* Once you are ready to leave, you may return to the throne room.',
            '<25>{#f/6}{#x1}* I have just opened the door to the hangar by remote for you.'
         ],
         finaltext1: pager.create(
            0,
            () =>
               SAVE.data.b.svr
                  ? [
                       '<25>{#p/asriel1}{#f/17}* This door will take us to the hangar bay.',
                       "<99>{#p/human}* （离开这里吗？）{!}\n§shift=48§我想\n§shift=48§再等等§shift=83§现在离开{#c/0/6/6}"
                    ]
                  : [
                       ...(SAVE.data.b.oops
                          ? [
                               '<32>{#p/basic}* If you leave here, your journey will really be over.',
                               '<32>{#p/basic}* Your friends will follow you to a new homeworld.'
                            ]
                          : [ '<32>{#p/basic}* Frisk...', "<32* Don't you remember what we have to do?" ]),
                       "<99>{#p/human}* （离开这里吗？）{!}\n§shift=48§我想\n§shift=48§再等等§shift=83§现在离开{#c/0/6/6}"
                    ],
            [
               "<99>{#p/human}* （离开这里吗？）{!}\n§shift=48§我想\n§shift=48§再等等§shift=83§现在离开{#c/0/6/6}"
            ]
         ),
         finaltext2: [
            '<32>{#p/basic}* Frisk?',
            "<99>{#p/human}* （离开这里吗？）{!}\n§shift=48§我想\n§shift=48§再等等§shift=83§现在离开{#c/0/6/6}"
         ],
         finaltext3: [
            '<32>{#p/basic}* ...',
            "<99>{#p/human}* （离开这里吗？）{!}\n§shift=48§我想\n§shift=48§再等等§shift=83§现在离开{#c/0/6/6}"
         ],
         hangar1: () =>
            SAVE.data.b.svr
               ? [
                    "<25>{#p/asriel1}{#f/23}* It's beautiful...",
                    '<25>{#f/22}* ...',
                    "<25>{#f/13}* Even though I've seen this view since I was born...",
                    "<26>{#f/17}* There's something special about seeing it without the force field.",
                    "<25>{#f/17}* Maybe it's just my imagination...",
                    '<25>{#f/23}* ... but the stars do look a little brighter.'
                 ]
               : [
                    '<25>{#p/asgore}{#f/6}* Space...\n* The final frontier.',
                    '<25>{#f/1}* Millions of unexplored worlds, some teeming with life...',
                    '<25>{#f/2}* Others... lifeless.',
                    '<26>{#f/5}* You could say the universe is like... a box of tree saps.',
                    '<26>{#f/6}* You never know what you are going to get.'
                 ],
         hangar2: () =>
            SAVE.data.b.svr
               ? [
                    '<25>{#p/asriel1}{#f/17}* ... haha.',
                    '<25>{#f/17}* We should get going.',
                    '<25>{#f/15}* ...',
                    '<25>{#f/15}* Mom and Dad will want to see me again, so...',
                    "<25>{#f/17}* I'll go find them once we're on board.",
                    '<25>{#f/13}* And you...',
                    '<25>{#f/20}* ... you should probably get some rest, Frisk.',
                    '<26>{#f/17}* You must be so tired after all of this.',
                    '<25>{#f/13}* ...',
                    '<25>{#f/13}* Maybe, by the time you wake up...',
                    "<25>{#f/17}* You'll have a new home and a loving family to support you."
                 ]
               : [ '<25>{|}{#p/asgore}{#f/5}* Huh?\n* Is someone- {%}' ],
         hangar3: () =>
            SAVE.data.b.svr
               ? [ '<26>{#p/asriel1}{#f/17}* Ready?' ]
               : [
                    '<25>{#p/toriel}* Oh, there you are, little one!',
                    '<25>{#f/5}* ...',
                    '<25>{#f/5}* ... hello, Asgore.'
                 ],
         hangar4: [ '<25>{#p/asgore}{#f/1}* Howdy.' ],
         hangar5: [ '<25>{#p/toriel}{#f/5}* ...', '<25>{#p/asgore}{#f/5}* ...' ],
         hangar6: () =>
            SAVE.data.b.c_state_secret5_used
               ? [
                    '<25>{#p/asgore}{#f/6}* Toriel, I...',
                    '<25>{#p/asgore}{#f/1}* ... I know how you must feel about your actions in the past.',
                    '<25>{#p/asgore}{#f/2}* About our... parting of the ways.',
                    '<25>{#p/toriel}{#f/5}* ... you do?'
                 ]
               : [ '<25>{#p/asgore}{#f/5}* Well, this is awkward.' ],
         hangar7: () =>
            SAVE.data.b.c_state_secret5_used
               ? [
                    '<25>{#p/asgore}{#f/1}* You feel a sense of guilt towards me.',
                    '<25>{#p/asgore}{#f/1}* You feel that your actions are... beyond reconciliation.',
                    '<25>{#p/asgore}{#f/2}* ... that you do not deserve to be forgiven.',
                    '<25>{#p/toriel}{#f/13}* ...\n* ... correct.',
                    '<25>{#p/asgore}{#f/6}* But I do not believe that to be the case.',
                    '<25>{#p/asgore}{#f/6}* I believe that you do deserve to be forgiven.',
                    '<25>{#p/asgore}{#f/6}* That you do deserve to be part of a family again.',
                    '<25>{#p/asgore}{#f/5}* And even though our feelings for each other have faded...',
                    '<25>{#p/asgore}{#f/6}* That does not mean we cannot be together!'
                 ]
               : SAVE.data.b.c_state_secret1_used
               ? [
                    '<25>{#p/toriel}{#f/5}* 艾斯戈尔...',
                    '<25>{#p/toriel}{#f/5}* I know it may not mean much to you now, but...',
                    '<25>{#p/toriel}{#f/9}* I am truly sorry for the way I allowed myself to be.',
                    '<25>{#p/toriel}{#f/13}* I made you out to be a terrible creature.',
                    '<25>{#p/toriel}{#f/13}* A coward.',
                    '<25>{#p/toriel}{#f/9}* A child murderer.',
                    '<25>{#p/toriel}{#f/10}* ... but you are none of those things.',
                    '<25>{#p/toriel}{#f/1}* In fact...',
                    '<25>{#p/toriel}{#f/3}* Despite the unforseen consequences of the archive...',
                    '<25>{#p/toriel}{#f/0}* Protecting those humans was the bravest thing you could have done.'
                 ]
               : [ '<25>{#p/toriel}{#f/1}* Very much so.' ],
         hangar8: () =>
            SAVE.data.b.c_state_secret5_used
               ? SAVE.data.b.c_state_secret1_used
                  ? [
                       '<25>{#p/toriel}{#f/1}* ... Asgore, I...',
                       '<25>{#p/toriel}{#f/5}* I am not sure that would be wise...',
                       '<25>{#p/toriel}{#f/1}* Besides, even if I DID want a family, it has been so long...',
                       '<25>{#p/toriel}{#f/0}* No, no, this is selfish of me.\n* I cannot.',
                       '<25>{#p/asgore}{#f/6}* Ah, but you see...',
                       '<25>{#p/asgore}{#f/6}* Frisk is the one who wanted me to ask you about this.',
                       '<25>{#p/toriel}{#f/7}* ... Frisk!?',
                       '<25>{#p/toriel}{#f/1}* Well... I, umm...',
                       '<25>{#p/toriel}{#f/5}* I suppose... I could consider it...',
                       '<32>{#p/human}* (You nod your head, smiling.)',
                       '<25>{#p/asgore}{#f/21}* See?\n* Frisk clearly wants you to stay with us.',
                       '<25>{#p/toriel}{#f/23}* ...',
                       '<25>{#p/toriel}{#f/1}* I will think about it.'
                    ]
                  : [
                       '<25>{#p/toriel}{#f/1}* ... Asgore, I...',
                       '<25>{#p/toriel}{#f/5}* I do not believe that it would be wise.',
                       '<25>{#p/toriel}{#f/10}* I am sorry.\n* I do desire to have a family, but...',
                       '<25>{#p/toriel}{#f/9}* Given the circumstances, I cannot accept it.',
                       '<25>{#p/asgore}{#f/1}* ...',
                       '<25>{#p/asgore}{#f/2}* I understand.'
                    ]
               : SAVE.data.b.c_state_secret1_used
               ? [
                    '<25>{#p/asgore}{#f/20}* ...',
                    '<25>{#p/asgore}{#f/4}* ... thank you.',
                    '<25>{#p/asgore}{#f/6}* It means a lot to me to hear you speak those words.',
                    '<25>{#p/toriel}{#f/9}* And you deserved to hear them.'
                 ]
               : [ '<25>{#p/asgore}{#f/5}* Hmm.' ],
         hangar9: [
            '<18>{#p/papyrus}HEY GUYS!',
            '<25>{#p/toriel}{#f/1}* ... oh, hello!',
            "<18>{#p/papyrus}{#f/0}HELLO!\nIT'S VERY NICE TO SEE YOU AGAIN.",
            '<18>{#p/papyrus}{#f/9}I JUST FINISHED CLEANING UP AT THE HOUSE PARTY!',
            '<25>{#p/toriel}{#f/1}* ... I see, I see.',
            '<25>{#p/toriel}{#f/0}* Well then.\n* Perhaps you could join us in our... activity.'
         ],
         hangar10: [
            '<18>{#p/papyrus}{#f/5}WOWIE...',
            '<25>{#p/asgore}{#f/21}* Beautiful, is it not?',
            "<25>{#p/asgore}{#f/5}* Until now, the force field has obscured much of the cosmos' light.",
            '<25>{#p/asgore}{#f/6}* Indeed... this is how the stars have looked all along.',
            '<18>{#p/papyrus}{#f/0}HOW FASCINATING!',
            '<18>{#p/papyrus}{#f/6}... IF ONLY I COULD TELL THE DIFFERENCE.',
            '<25>{#p/asgore}{#f/5}* If you are having trouble seeing, you may simply be tired.',
            '<18>{#p/papyrus}{#f/5}I SUPPOSE IT HAS BEEN A LONG DAY...',
            '<25>{#p/toriel}{#f/1}* Perhaps it would be a good idea to lay down and rest, then.',
            '<18>{#p/papyrus}{#f/7}WHAT!?\nRESTING!?',
            '<18>{#p/papyrus}{#f/7}GIVE ME A BREAK!!',
            "<18>{#p/papyrus}{#f/4}ACTUALLY, DON'T GIVE ME A BREAK.",
            "<18>{#p/papyrus}{#f/7}I DON'T NEED ONE!!",
            '<18>{#p/papyrus}{#f/5}...',
            '<18>{#p/papyrus}{#f/5}MY BROTHER, ON THE OTHER HAND...'
         ],
         hangar11: [ "<25>{#p/sans}{#f/2}* 'sup, bro?" ],
         hangar12: [ '<25>{#p/toriel}{#f/0}* Oh!\n* \"\'Sup,\" Sans!', '<25>{#p/asgore}{#f/5}* Howdy...?' ],
         hangar13: [
            '<18>{#p/papyrus}{#f/4}YOU KNOW WHAT \"SUP,\" BROTHER...',
            "<18>{#p/papyrus}{#f/0}AND WHAT'S DOWN!\nAND WHAT'S LEFT!\nAND WHAT'S RIGHT!",
            "<18>{#p/papyrus}{#f/9}IT'S ALL AROUND US, IN FACT!",
            '<25>{#p/sans}{#f/0}* hmm...',
            "<25>{#p/sans}{#f/2}* so would you say you're {@fill=#ff0}shooting for the stars{@fill=#fff}, then?",
            '<18>{#p/papyrus}{#f/5}...',
            '<18>{#p/papyrus}{#f/5}WELL, YES, I SUPPOSE I WOULD.',
            '<25>{#p/sans}{#f/4}* heheh.\n* glad to hear it.',
            '<18>{#p/papyrus}{#f/0}SO AM I.'
         ],
         hangar14: [
            '<25>{#p/sans}* by the way, everyone LOVED the spaghetti you made earlier.',
            "<25>{#p/sans}{#f/2}* in fact, i would've gotten here sooner...",
            "<25>{#p/sans}{#f/2}* ... if it wasn't for everyone begging me to try it.",
            '<18>{#p/papyrus}{#f/0}BUT... DID -YOU- LIKE IT!?',
            '<25>{#p/sans}{#f/3}* heh.\n* of course i did.',
            "<25>{#p/sans}{#f/0}* you've improved your skills a LOT lately.",
            '<18>{#p/papyrus}{#f/9}NYEH HEH HEH!\nOF COURSE I HAVE!',
            "<18>{#p/papyrus}{#f/0}I'VE BEEN FEELING MORE MOTIVATED IN GENERAL...",
            '<18>{#p/papyrus}{#f/0}... EVER SINCE FRISK ARRIVED.',
            '<25>{#p/sans}{#f/0}* they seem to have that effect on people, huh?',
            '<18>{#p/papyrus}{#f/0}YEAH, IT FELT LIKE I HAD A PURPOSE WITH THEM!',
            '<18>{#p/papyrus}{#f/4}FIRST, AS THEIR INDOMITABLE FOE...',
            '<18>{#p/papyrus}{#f/5}... AND THEN, LATER, A TRULY GREAT FRIEND.',
            "<18>{#p/papyrus}{#f/6}MY ONLY WORRY IS THAT, NOW THAT WE'RE FREE...",
            "<18>{#p/papyrus}{#f/6}IT'LL BE KIND OF HARD TO FIGURE OUT WHAT COMES NEXT.",
            '<18>{#p/papyrus}{#f/4}ON THE FLIPSIDE, NOW THAT WE -ARE- FREE...',
            "<18>{#p/papyrus}{#f/9}WE'LL HAVE ALL THE TIME IN THE GALAXY TO DECIDE!",
            "<18>{#p/papyrus}{#f/0}... I WONDER WHAT I'LL DO FIRST."
         ],
         hangar15: [ '<25>{#p/undyne}{#f/8}* Fuhuhu!\n* I have an idea!' ],
         hangar16: [
            "<25>{#p/alphys}{#g/alphysSmarmyAggressive}* That's right. You're going to help us launch a Mew Mew franchise."
         ],
         hangar17: [ '<25>{#p/toriel}{#f/6}* Pff-\n* Hahaha!' ],
         hangar18: [ "<25>{#p/undyne}{#f/12}* I mean, I wouldn't go THAT far, but... sure." ],
         hangar19: () => [
            "<25>{#p/alphys}{#g/alphysYupEverythingsFine}* So, first, we'll need a spacecraft for Mew Mew to pilot...",
            "<25>{#p/undyne}{#f/17}* Alphys!!\n* We're not even off the outpost yet!",
            ...(SAVE.data.b.a_state_hapstablook
               ? [
                    "<25>{#p/undyne}{#f/16}* And besides, she's... kind of busy right now.",
                    "<25>{#p/alphys}{#g/alphysWelp}* O-oh right, I forgot there's a real life Mew Mew now.",
                    '<18>{#p/papyrus}{#f/0}YEAH, I SAW HER AT THE PARTY NOT TOO LONG AGO!',
                    '<18>{#p/papyrus}{#f/0}SHE SEEMED PRETTY HAPPY, ACTUALLY.',
                    "<25>{#p/alphys}{#g/alphysInquisitive}* Didn't she used to be some angry dummy or something?",
                    "<25>{#p/undyne}{#f/7}* It doesn't MATTER!\n* She's beautiful the way she is NOW, dammit!",
                    '<25>{#p/alphys}{#g/alphysUhButHeresTheDeal}* Oh my god, okay!!'
                 ]
               : [
                    "<25>{#p/undyne}{#f/16}* And besides, it's...",
                    "<25>{#p/undyne}{#f/17}* Hey, weren't you supposed to be making someone a Mew mew doll?",
                    '<25>{#p/alphys}{#g/alphysWelp}* O-oh right, I still need to do that.',
                    '<18>{#p/papyrus}{#f/5}I REMEMBER SOMEONE AT THE PARTY ASKING ABOUT IT...',
                    '<18>{#p/papyrus}{#f/6}THEY SEEMED KIND OF SHY, THOUGH.',
                    '<25>{#p/alphys}{#g/alphysCutscene2}* Yeah, I think I know who that was.\n* I gotta finish it...',
                    '<25>{#p/undyne}{#f/7}* And you better be done BEFORE we get to the new homeworld!',
                    '<25>{#p/alphys}{#g/alphysUhButHeresTheDeal}* I will, I will!!'
                 ])
         ],
         hangar20: [
            '<25>{#p/alphys}{#g/alphysYeahYouKnowWhatsUp}* A-anyway...',
            "<25>{#p/alphys}{#g/alphysYeahYouKnowWhatsUpCenter}* It's good to see you, Asgore.\n* You too, Sans.",
            '<18>{#p/papyrus}{#f/6}WHAT ABOUT ME??',
            '<25>{#p/alphys}{#g/alphysSmileSweat}* ... you as well.',
            '<25>{#p/toriel}{#f/0}* I believe you may be forgetting someone.',
            '<25>{#p/alphys}{#g/alphysCutscene3}* Ah!\n* S-sorry...!',
            '<25>{#p/toriel}{#f/6}* Hee hee.\n* I am only teasing you.',
            '<25>{#p/toriel}{#f/1}* Truth be told, I have heard much about you...',
            '<25>{#p/toriel}{#f/0}* Being a royal scientist at such a young age is no small feat.',
            "<25>{#p/undyne}{#f/8}* YEAH!!\n* She's the BEST!",
            '<25>{#p/alphys}{#g/alphysCutscene2}* ... I try.'
         ],
         hangar21: [
            '<25>{#p/asgore}{#f/6}* Well, now that we are here, let us all take a deep breath...',
            '<25>{#p/asgore}{#f/21}* And reflect on the journey that has taken us here.'
         ],
         hangar22: [
            "<25>{#p/sans}{#f/3}* it's kind of funny, isn't it?",
            "<25>{#p/sans}{#f/0}* all this time we've spent trapped here...",
            '<25>{#p/sans}{#f/0}* always able to see the stars, but never touch them...',
            '<25>{#p/sans}{#f/3}* but... now...',
            "<25>{#p/sans}{#f/0}* ... i guess that's not really funny, per se.",
            "<25>{#p/sans}{#f/3}* it's just nice.",
            '<18>{#p/papyrus}{#f/5}YEAH.',
            '<18>{#p/papyrus}{#f/5}JUST... NICE.'
         ],
         hangar23: [ '<32>{#p/napstablook}* hey everyone...' ],
         hangar24: [
            "<32>{#p/napstablook}* i hope i'm not intruding on you guys or anything...",
            '<25>{#p/undyne}{#f/14}* Pfft, intruding?\n* No way!',
            "<25>{#p/sans}{#f/0}* yeah, you're cool.",
            '<18>{#p/papyrus}{#f/6}BUT NOT -TOO- COOL, SANS!',
            "<18>{#p/papyrus}{#f/4}OTHERWISE, THEY'D BE FREEZING...",
            '<32>{#p/napstablook}* heh...'
         ],
         hangar25: [
            '<25>{#p/alphys}{#g/alphysCutscene1}* So Blooky!\n* Have you seen the new Mew Mew movie?',
            "<32>{#p/napstablook}* there's a... new movie?",
            '<25>{|}{#p/alphys}{#g/alphysHellYeah}* Yeah!!\n* So basically Mew Mew starts to regret what {%}',
            '<99>{|}{#p/alphys}{#g/alphysHellYeah}  she did in Starfire and\n  wants to fix it by\n  going back in time but {%}',
            '<25>{#p/undyne}{#f/12}* Uh...',
            '<25>{|}{#p/alphys}{#g/alphysTheFactIs}* To do that she has to use a device that she got by killing a bunch {%}',
            '<99>{|}{#p/alphys}{#g/alphysTheFactIs}  of people at the end of\n  Starfire and like she\n  gets all flustered and {%}',
            '<25>{#p/undyne}{#f/17}* Alphys.',
            "<25>{|}{#p/alphys}{#g/alphysInquisitive}* She has a moral dilemma about if she's actually a good person for using {%}",
            '<99>{|}{#p/alphys}{#g/alphysInquisitive}  the device to undo all\n  the damage she caused\n  trying to get it and- {%}',
            '<25>{#p/undyne}{#f/8}* SPOILERS!!!',
            '<25>{#p/alphys}{#g/alphysSmileSweat}* ...',
            '<25>{#p/alphys}{#g/alphysNervousLaugh}* ... sorry.'
         ],
         hangar26: [
            "<32>{#p/napstablook}* don't worry... you talked so fast that i didn't even hear what you said...",
            '<25>{#p/alphys}{#g/alphysWelp}* ...',
            '<25>{#p/alphys}{#g/alphysWelp}* I get that a lot.',
            "<25>{#p/alphys}{#g/alphysYeahYouKnowWhatsUp}* ... but that's okay.",
            "<25>{#p/alphys}{#g/alphysYeahYouKnowWhatsUpCenter}* Freedom's more important than some sci-fi anime franchise."
         ],
         hangar27: [ '<32>{#p/mettaton}* DID SOMEBODY SAY \"FRANCHISE?\"' ],
         hangar28: [ '<25>{#p/alphys}{#g/alphysGarboCenter}* ... here we go again.' ],
         hangar29: [
            "<32>{#p/mettaton}* DON'T FRET, DOCTOR!",
            "<32>{#p/mettaton}* I'M ONLY TRYING TO BRING YOUR -WILDEST- DREAMS TO LIFE!",
            "<25>{#p/undyne}{#f/12}* You wouldn't be saying that if you knew her ACTUAL wildest dreams.",
            '<26>{#p/toriel}{#f/1}* Um, perhaps we should save that topic for another time...',
            '<25>{#p/undyne}{#f/17}* Gee, thanks MOM.',
            '<25>{#p/toriel}{#f/3}* ...',
            '<25>{#p/toriel}{#f/4}* I do not know how to feel about that...\n* ... statement.',
            '<32>{#p/mettaton}* AH, YOU MUST BE IN NEED OF AN MTT-BRAND RELATIONSHIP GUIDEBOOK, THEN!',
            "<32>{#p/mettaton}* DON'T WORRY.\n* I REMEMBER THE STEPS BY HEART.",
            '<33>{|}{#p/mettaton}* FIRST, PRESS C OR CTRL TO OPEN- {%}',
            '<25>{#p/toriel}{#f/0}* Another time.',
            '<32>{#p/mettaton}* ... IT WAS WORTH A SHOT.'
         ],
         hangar30: [
            '<32>{#p/mettaton}* I GUESS, ONCE WE GET TO THAT NEW HOMEWORLD...',
            "<32>{#p/mettaton}* THERE'LL BE AMPLE TIME TO SELL RELATIONSHIP GUIDEBOOKS.",
            "<32>{#p/mettaton}* UNTIL THEN, WE'LL JUST HAVE TO BE CONTENT WITH OUR FREEDOM...",
            "<18>{#p/papyrus}{#f/0}DON'T WORRY, METTATON, I'LL BE THERE FOR YOU!",
            '<18>{#p/papyrus}{#f/5}BECAUSE, WHEN IT COMES TO CONTENTMENT...',
            "<18>{#p/papyrus}{#f/9}I'M THE {@fill=#ff0}BONE{@fill=#fff}-A-FIDE KING!",
            '<32>{#p/mettaton}* HAHAHA... YOU KNOW I -ALWAYS- APPRECIATE YOUR ADVICE, PAPYRUS.',
            "<32>{#p/mettaton}* I'M NOT LIKE THOSE OTHER PEOPLE WHO TREAT YOU LIKE A LITTLE CHILD.",
            '<25>{#p/undyne}{#f/14}* ... huh?\n* What are you looking at me for?',
            '<25>{#p/undyne}{#f/17}* What did I do!?'
         ],
         hangar31: [
            '<25>{#p/asgore}{#f/6}* I do not mean to cut this short, but...',
            '<25>{#p/asgore}{#f/6}* I should be escorting Frisk to the transport ship now.',
            '<25>{#p/asgore}{#f/5}* They must be very tired after all they have been through for us.'
         ],
         hangar32: [
            "<18>{#p/papyrus}{#f/6}W-WELL...\nIF -THEY'RE- GOING ON BOARD...",
            '<18>{#p/papyrus}{#f/9}... THEN SO AM I!'
         ],
         hangar33: [ "<25>{#p/sans}{#f/2}* heh, i'm right behind you, bro." ],
         hangar34: [ '<25>{#p/undyne}{#f/7}* YEAH!!\n* Count me in!!' ],
         hangar35: [ "<25>{#p/alphys}{#g/alphysHellYeah}* Don't forget about me!" ],
         hangar36: [
            "<32>{#p/mettaton}* I GUESS IT'D BE KIND OF WEIRD TO KEEP HANGING AROUND THIS HANGAR BAY FOR NO REASON.",
            "<32>{#p/mettaton}* SO... I'LL GO, TOO."
         ],
         hangar37: [ "<25>{#p/napstablook}* don't worry... i'll try not to get too far behind..." ],
         hangar38: [
            "<25>{#p/kidd}{#f/1}* Hey, where'd everybody go just now!?",
            '<25>{#p/kidd}{#f/7}* I... I wanna be with Frisk, too!',
            '<25>{#p/toriel}{#f/0}* Walk back up the corridor towards bay forty-seven.', 
            '<25>{#f/0}* It is the first door on your left.', 
            "<25>{#p/kidd}{#f/3}* Thanks, person I swear I've seen before!",
            "<25>{#p/kidd}{#f/1}* You're the best!"
         ],
         hangar39: [ '<25>{#p/toriel}{#f/10}* My child...' ],
         hangar40: [ '<25>{#p/toriel}{#f/1}* ... be good, alright?' ],
         returnofchara1: [ '<32>{#p/basic}* Frisk...', '<32>* ... are you still there?' ],
         returnofchara2: [
            '<32>{#p/basic}* Sorry I disappeared on you so suddenly back there.',
            '<32>* Doing what I did... took a lot out of me.',
            "<32>* ... but I've recovered now.",
            "<32>* I guess, in hindsight, it's kind of obvious I'd survive...",
            '<32>* When Asriel absorbed my SOUL, all those years ago...',
            '<32>* I became... a non-physical part of him.\n* An angel on his shoulder.',
            '<32>* Or a demon.\n* Take your pick.',
            '<32>* But when he died, that non- physicality remained, and I ended up as a ghost.',
            "<32>* At least, I think that's what happened..."
         ],
         returnofchara3: [
            '<32>{#p/basic}* ... you know...',
            '<32>* All that stuff about me wanting to leave this world...',
            '<32>* About wanting to say goodbye...',
            '<32>* ...',
            '<33>* At the moment of his death, my SOUL was... separated.\n* From his one.',
            "<32>* I knew it wouldn't last long, so I just took it without thinking.",
            "<32>* Looking back, the decision didn't make much sense...",
            '<32>* Under normal circumstances, the SOUL of a dead boss monster...',
            "<32>* ... isn't meant to retain the owner's identity.",
            "<32>* I knew I had a monster SOUL inside of me, but I didn't know it'd still be his.",
            "<32>* But the circumstances weren't normal at all.",
            "<32>* If I'd realized that, I...",
            '<32>* ...',
            '<32>* Well.\n* I have no desire to say goodbye anymore.',
            '<32>* On the contrary.',
            "<32>* I've never been happier in my life.",
            "<32>* Knowing I'll get to see him grow up, and live the life I thought I'd taken from him...",
            '<32>* That means a lot to me.'
         ],
         returnofchara4: [
            '<32>{#p/basic}* Hey.\n* Do me a favor, will you?',
            '<32>* ... stop hugging that thing and get up already!',
            "<32>* You do realize it's just a pillow, right?",
            '<32>* ...',
            "<32>* You've got a new home, on a new world, and all you can think to do is sleep.",
            '<32>* Hmph!\n* Typical human behavior.',
            '<32>* ... only kidding.',
            "<32>* I'll let you get the rest you need, Frisk.",
            '<32>* See you when you wake up.'
         ]
      },
      overworld: {
         get20: [ '<32>{*}{#s/equip}{#p/human}* （你把停机坪门禁卡\n  挂到了钥匙串上。）{^90}{%}' ],
         drop: [
            '<26>{#p/asgore}{#f/8}* ...!\n* Did you just drop the tea I made for you?',
            '<25>{#p/asgore}{#f/1}* Hmm...\n* I apologize if it was not to your liking.'
         ],
         use: [ '<25>{#p/asgore}{#f/21}* Ah... such a wonderful form of tea, is it not?' ],
         drop_tori: [ '<26>{#p/asgore}{#f/5}* Did you drop something?\n* I recognize the scent...' ],
         use_tori: [ '<26>{#p/asgore}{#f/5}* What are you eating?\n* The aroma is familiar...' ],
         approachescape: [ '<32>{#p/human}* (You hear footsteps fading into the distance.)' ],
         partyguard1: pager.create(
            0,
            () =>
               SAVE.data.n.plot_epilogue < 4
                  ? [
                       '<32>{#p/basic}{#x1}* Huh?\n* Leaving already?{#x3}',
                       "<32>{#x2}* It's okay, bro.\n* If they wanna go, let 'em go.{#x3}",
                       "<32>{#x1}* Yeah... you're right.{#x3}"
                    ]
                  : [ '<32>{#p/basic}{#x1}* Hey, good to see you back!{#x3}', '<32>{#x2}* We missed you.{#x3}' ],
            () =>
               SAVE.data.n.plot_epilogue < 4
                  ? [
                       '<32>{#p/basic}{#x1}* Sorry, I get, like, super antsy when I see people leaving a hangout early.{#x3}',
                       '<32>{#x2}* Yeah, he gets antsy about it.\n* Nothing personal.{#x3}'
                    ]
                  : [
                       "<32>{#p/basic}{#x1}* No pressure, though.\n* Just because we miss you doesn't mean you have to stay.{#x3}",
                       '<32>{#x2}* Like, for sure, bro.\n* For sure.{#x3}'
                    ]
         ),
         partyguard2: pager.create(
            0,
            () =>
               SAVE.data.n.plot_epilogue < 4
                  ? [
                       '<32>{#p/basic}{#x2}* This hangout is baller, bro.{#x3}',
                       '<32>{#x2}* They even brought out the Madrigal plant, right over there on that table!{#x3}'
                    ]
                  : [
                       "<32>{#p/basic}{#x2}* If YOU won't try the Madrigal, that's just more for me.{#x3}",
                       '<32>{#x1}* ... you mean \"us,\" right bro?{#x3}',
                       '<32>{#x2}* Haha, my bad.{#x3}'
                    ],
            () =>
               SAVE.data.n.plot_epilogue < 4
                  ? [ "<32>{#p/basic}{#x2}* It's a monster delicacy.{#x3}" ]
                  : [ '<32>{#p/basic}{#x2}* More for us.{#x3}' ]
         ),
         janet: pager.create(
            0,
            [
               "<32>{#p/basic}* You'd be smacked in the gob to find out how dirty it was when I first got 'ere.",
               "<32>* But seein' as everyone's gonna come on up through here...",
               "<32>* It's rather cre-i-ucial to get 'er cleaned up, I'd say.",
               "<32>* By the way, thanks for savin' us out there, toots.\n* A real bang-up job ya did."
            ],
            [ "<32>{#p/basic}* Aren't ya gonna go 'n' see what the big guy's got shakin'?" ]
         ),
         giftbox1a: () => [
            ...(SAVE.data.b.svr ? [] : [ "<32>{#p/basic}* There's a weapon inside." ]),
            choicer.create('* (Open the box?)', '是', '否')
         ],
         giftbox1b: () => [
            ...(SAVE.data.b.svr ? [] : [ "<32>{#p/basic}* There's armor inside." ]),
            choicer.create('* (Open the box?)', '是', '否')
         ],
         giftbox2a: () => [
            '<32>{#p/human}* （你带走了“大熊座”。）',
            choicer.create('* (Equip the Big Dipper?)', '是', '否')
         ],
         giftbox2b: () => [
            '<32>{#p/human}* (You got the Heart Locket.)',
            choicer.create('* (Equip the Heart Locket?)', '是', '否')
         ],
         giftbox3: () =>
            SAVE.data.b.svr
               ? [ '<32>{#p/human}* (But there was nothing left to take.)' ]
               : [ "<32>{#p/basic}* It's empty." ],
         giftbox4: [ '<32>{#p/human}* （你打算先不打开。）' ],
         tea0: () =>
            SAVE.data.b.svr
               ? [ '<32>{#p/human}* (The note on the envelope wants you to enjoy the tea.)' ]
               : [
                    "<32>{#p/basic}* There's a note attached to the teacup...",
                    '<32>{#p/basic}* \"Please, enjoy this cup of tea I have left for you.\"\n* \"Whoever you may be.\"'
                 ],
         tea1: [ '<32>{#p/human}* （你带走了星花茶。）' ],
         tea2: () =>
            SAVE.data.b.svr
               ? [ '<32>{#p/human}* (You run your hand across the countertop.)' ]
               : [ '<32>{#p/basic}* The countertop is clear.' ],
         fireplace1: () =>
            SAVE.data.b.svr
               ? [
                    '<32>{#p/human}* (You feel the inviting warmth of the fireplace...)',
                    choicer.create('* (Crawl inside?)', '是', '否')
                 ]
               : [
                    SAVE.data.n.state_wastelands_toriel === 2 || world.runaway
                       ? '<32>{#p/basic}* Just another fireplace.'
                       : "<32>{#p/basic}* Asgore's fireplace.\n* It's not too hot, just pleasantly warm.",
                    ...(world.darker
                       ? []
                       : [ '<32>* You could probably crawl in.', choicer.create('* (Crawl inside?)', '是', '否') ])
                 ],
         fireplace2a: [ '<32>{#p/human}* (You chose not to crawl in.)' ],
         fireplace2b: () => [
            '<32>{#p/human}* (You crawl into the fireplace and let its warmth engulf you.)',
            '<32>{#p/human}* (You are very comfortable.)',
            ...(SAVE.data.b.svr
               ? asrielinter.fireplace2b++ < 1
                  ? [ "<25>{#p/asriel1}{#f/13}* I'll just, uh, wait for you to get out." ]
                  : []
               : world.goatbro && SAVE.flag.n.ga_asrielFireplace++ < 1
               ? [ "<25>{#p/asriel2}{#f/15}* I'll just, uh, wait for you to get out..." ]
               : [])
         ],
         fireplace2c: [
            '<32>{#p/basic}* Be careful in there, munchkin!',
            "<32>* Otherwise, I'd have some terrible, terrible news to report on!",
            '<32>* ... huhehehaw!'
         ],
         fridgetrap1: () =>
            SAVE.data.b.svr
               ? [
                    [
                       '<25>{#p/asriel1}{#f/13}* One day, Asgore built a chocolate replicator into the fridge.',
                       '<25>{#f/15}* $(name) was so happy that day...',
                       '<25>{#f/17}* ... finally, an infinite supply of chocolate.',
                       '<25>{#f/20}* Their words, not mine.'
                    ],
                    [ "<25>{#p/asriel1}{#f/13}* That was after they'd begged for it for two years." ]
                 ][Math.min(asrielinter.fridgetrap1++, 1)]
               : world.darker
               ? [ "<32>{#p/basic}* You really wouldn't like what's in the fridge." ]
               : [
                    "<32>{#p/basic}* It's a stockpile of brand-name chocolate bars amongst an even bigger pile of snails."
                 ],
         fridgetrap2: () => [
            ...(SAVE.data.b.svr
               ? []
               : [
                    [ '<32>{#p/basic}* ...', '<32>* Do you want one?' ],
                    [ '<32>{#p/basic}* ...', '<32>* Do you want another one?' ],
                    [ '<32>{#p/basic}* ...', '<32>* Do you want yet another one?' ],
                    [ '<32>* If you want another one, you can take it...' ],
                    [ '<32>* And another, and another, and another...' ],
                    [ '<33>* The chocolate goes on and on...' ],
                    [ '<32>* Bar after bar...' ],
                    [ '<32>* This is an unholy amount of chocolate right here.' ],
                    [ '<32>* This much chocolate should be against the law.' ],
                    [ '<32>* How long can this go on...' ],
                    [ "<32>* My god... it's so much..." ],
                    [ '<32>* ...' ]
                 ][Math.min(SAVE.data.n.chocolates, 11)]),
            choicer.create('* (Take a Chocolate Bar?)', '是', '否')
         ],
         fridgetrap3: [ '<32>{#p/human}* （你决定什么也不拿。）' ],
         fridgetrap4: [ '<32>{#p/human}* (You got the Chocolate Bar.)' ],
         brocall1: [
            '<32>{#s/phone}{#p/event}* Ring, ring...',
            '<25>{#p/alphys}{#g/alphysInquisitive}* Hey, are you coming?',
            "<25>{#p/alphys}{#g/alphysWelp}* I... don't want Asgore to get impatient.",
            "<25>{#p/alphys}{#g/alphysTheFactIs}* He's already been waiting for a hundred years...",
            '<32>{#s/equip}{#p/event}* Click...'
         ],
         brocall2: [
            '<32>{#s/phone}{#p/event}* Ring, ring...',
            '<25>{#p/alphys}{#g/alphysCutscene3}* Hello?\n* Are you there?',
            "<25>{#p/alphys}{#g/alphysYeahYouKnowWhatsUp}* We're...\n* Still waiting...",
            '<25>{#p/alphys}{#g/alphysFR}* Have you run off or something?',
            '<32>{#s/equip}{#p/event}* Click...'
         ],
         brocall3: [
            '<32>{#s/phone}{#p/event}* Ring, ring...',
            '<25>{#p/alphys}{#g/alphysCutscene3}* Yup.\n* You have.\n* I just checked.',
            "<25>{#p/alphys}{#g/alphysWTF2}* WE'VE GOT IMPORTANT STUFF TO DO, Y'KNOW...",
            '<25>{#p/alphys}{#g/alphysWhyOhWhy}* ... why does this always happen to me...',
            '<32>{#s/equip}{#p/event}* Click...'
         ],
         brocall4: [
            '<32>{#s/phone}{#p/event}* Ring, ring...',
            '<32>{#p/mettaton}* HEY, ALPHYS CALLED ME AND TOLD ME YOU WERE BEING UNCOOPERATIVE.',
            "<32>{#p/mettaton}* BASED ON WHAT I'VE BEEN DISCUSSING WITH PAPYRUS...",
            '<32>{#p/mettaton}* I SUGGEST YOU TURN YOUR BUTT AROUND AND GET ON WITH IT.',
            '<32>{#p/mettaton}* YOU CAN DO IT, DARLING!',
            '<32>{#s/equip}{#p/event}* Click...'
         ],
         brocall5: [
            '<32>{#s/phone}{#p/event}* Ring, ring...',
            '<18>{#p/papyrus}{#f/5}LOOK.\nI KNOW YOU MUST BE APPREHENSIVE...',
            '<18>{#p/papyrus}{#f/5}FORCE FIELDS CAN BE INTIMIDATING, AFTER ALL.',
            '<18>{#p/papyrus}{#f/6}BUT FRET NOT!',
            '<18>{#p/papyrus}{#f/4}IF YOUR BATTLE AGAINST ME PROVED ONE THING...',
            "<18>{#p/papyrus}{#f/9}IT'S THAT YOU HAVE THE COURAGE TO TAKE ON ANYTHING!",
            '<18>{#p/papyrus}{#f/0}THE \"IMPENETRABLE\" FORCE FIELD WON\'T STAND A CHANCE!',
            '<32>{#s/equip}{#p/event}* Click...'
         ],
         brocall6: [
            '<32>{#s/phone}{#p/event}* Ring, ring...',
            "<25>{#p/alphys}{#g/alphysWelp}* Hey, um...\n* We've been waiting for a long time.",
            "<25>{#g/alphysThatSucks}* And I don't just mean right now.",
            '<25>{#g/alphysSideSad}* Monsters have been stuck here for so long...',
            "<25>{#g/alphysThatSucks}* Even my family doesn't remember life before... this.",
            '<25>{#g/alphysSideSad}* I know Asgore and I have been impatient...',
            "<25>{#g/alphysIDK2}* So, maybe that's why you're avoiding doing this.",
            "<25>{#g/alphysIDK3}* Well, we're sorry.\n* We didn't mean to rush you so much back there.",
            "<25>{#g/alphysWorried}* But we're not the only ones waiting.",
            "<25>{#g/alphysCutscene2}* Everyone you've met, all the friends you've made...",
            '<25>{#g/alphysCutscene2}* If you think about it...',
            "<25>{#g/alphysWorried}* It's like we've been waiting our whole lives for you.",
            '<25>{#g/alphysWorried}* ...',
            '<25>{#g/alphysCutscene2}* ... come back soon...\n* Okay?',
            '<32>{#s/equip}{#p/event}* Click...'
         ],
         brocall7: [
            '<32>{#s/phone}{#p/event}* Ring, ring...',
            '<25>{#p/toriel}{#f/5}* Hello?\n* This is TORIEL.',
            '<25>* You must be very far along by now.',
            '<25>{#f/9}* Far enough that I doubt this message will ever reach you.',
            '<25>{#f/13}* ... however, if it does, then you must know...',
            '<25>{#f/9}* I cannot wait in the Outlands any longer.',
            '<25>{#f/13}* I remained here in the hopes of keeping those like you safe...',
            '<25>{#f/14}* Child after child, I thought surely I could save at least one...',
            '<26>{#f/13}* But that did not happen.',
            '<25>{#f/9}* I allowed my age to get the better of me.',
            '<25>{#f/10}* I had forgotten how curious children like you can be.',
            '<25>{#f/14}* Ironic, is it not?',
            '<25>{#f/13}* ...',
            '<25>{#f/9}* I will... see you soon.',
            '<25>{#f/10}* ...\n* Be good... alright?',
            '<32>{#s/equip}{#p/event}* Click...'
         ],
         brocall8: [
            '<25>{#p/twinkly}{#f/6}* Did you seriously come all this way just to see what would happen?',
            "<25>{#f/8}* Wow.\n* You're even worse than I used to be.",
            '<25>{#f/12}* ...\n* Annoying brat.',
            "<25>{#f/11}* There's nothing for you to find back here.",
            '<25>{#f/7}* Literally nothing.',
            '<25>{#f/0}{#v/1}* Even my very own self is nothing but an empty husk.',
            '<25>{#f/6}{#v/0}* So stop wasting your OWN time and go back to the force field.',
            '<25>{#f/11}* Orrr...\n* You could give up and let ME take over...',
            "<25>{#f/7}{#v/0}* Maybe you'd like that.",
            '<25>{#f/6}{#v/0}* ...',
            '<25>{#f/8}* See ya at the force field, idiot.'
         ],
         statusterminal1: [
            '<32>{#p/human}* （你激活了终端。）',
            '<32>{#p/event}* Procedure incomplete.\n* Please return at a later time.'
         ],
         statusterminal2: () => [
            '<32>{#p/human}* （你激活了终端。）',
            '<32>{#p/event}* Procedure complete.\n* All subjects have successfully tethered.',
            '<33>{#p/event}* Would you also like to exit?',
            choicer.create('* (Exit Archive Six?)', '是', '否')
         ],
         cw_vender1: [
            '<32>{#p/human}* (You tap on the panel.)',
            '<32>{#s/equip}{#p/human}* (You got the Monster Candy.)'
         ],
         cw_vender2: [ '<32>{#p/human}* (You tap on the panel.)', '<32>{#p/human}* （...）' ],
         cs_vender1: [ '<32>{#p/human}* (You tap on the panel.)', '<32>{#s/equip}{#p/human}* (You got the Exoberries.)' ],
         cs_vender2: [ '<32>{#p/human}* (You tap on the panel.)', '<32>{#p/human}* （...）' ],
         cs_tower: '* (Use [DOWN], [LEFT], [RIGHT],\nand [UP] to tune the sound.)',
         cs_tower_done: [ '<32>{#p/human}* (You stare into the now- unlocked terminal.)' ],
         cf1_dimbox1: [ '<32>{#p/human}* (You got the Space Tofu.)' ],
         cf1_dimbox2: [ '<32>{#p/human}* （...）' ],
         cf2_vender1: [ '<32>{#p/human}* (You tap on the panel.)', '<32>{#s/equip}{#p/human}* (You got the Rations.)' ],
         cf2_vender2: [ '<32>{#p/human}* (You tap on the panel.)', '<32>{#p/human}* （...）' ],
         cf2_key1: [ '<32>{#s/equip}{#p/human}* (The Neon Key was added to your keyring.)' ],
         cf2_key2: [ '<32>{#p/human}* （...）' ],
         cf2_bench0: [ '<32>{#p/human}* (It appears a heal-pak was left underneath this bench.)' ],
         cf2_bench1: [ '<32>{#p/human}* (You got the heal-pak.)' ],
         cf2_bench2: [ '<32>{#p/human}* （...）' ],
         cf2_bench3: [ "<32>{#p/human}* (You reach for the item, but you can't get it...)" ],
         cf2_blookdoor: [ '<32>{#p/human}* (The door appears to be locked.)' ],
         ca_floartex: () =>
            [
               [ '<32>{#p/human}{#v/5}{@fill=#00c000}* ... huh?', "<32>{#p/human}{#v/5}{@fill=#00c000}* Who's there?" ],
               [
                  '<32>{#p/human}{#v/5}{@fill=#00c000}* Huh!?',
                  '<32>{#p/human}{#v/5}{@fill=#00c000}* How are you doing that!?',
                  '<32>{#p/human}{#v/5}{@fill=#00c000}* How am I...',
                  '<32>{#p/human}{#v/5}{@fill=#00c000}* ... even awake?'
               ],
               [
                  "<32>{#p/human}{#v/5}{@fill=#00c000}* I've been asleep for so long, I'd forgotten about...",
                  '<32>{#p/human}{#v/5}{@fill=#00c000}* ... oh!',
                  '<32>{#p/human}{#v/5}{@fill=#00c000}* Are you there, old friend!?\n* Is that you!?'
               ],
               [
                  '<32>{#p/human}{#v/5}{@fill=#00c000}* ...',
                  '<32>{#p/human}{#v/5}{@fill=#00c000}* Maybe not.',
                  '<32>{#p/human}{#v/5}{@fill=#00c000}* Well, the last time I was awake, there was a disaster...',
                  '<32>{#p/human}{#v/5}{@fill=#00c000}* Is this the aftermath?',
                  '<32>{#p/human}{#v/5}{@fill=#00c000}* Oh no...'
               ],
               [
                  "<32>{#p/human}{#v/5}{@fill=#00c000}* Wait...\n* There was something about the system's memory capacity...",
                  "<32>{#p/human}{#v/5}{@fill=#00c000}* If I'm awake now, then somebody's been freeing up space!",
                  "<32>{#p/human}{#v/5}{@fill=#00c000}* ... they have, haven't they?"
               ],
               [
                  '<32>{#p/human}{#v/5}{@fill=#00c000}* I knew it.',
                  "<32>{#p/human}{#v/5}{@fill=#00c000}* We're gonna get out!",
                  '<32>{#p/human}{#v/5}{@fill=#00c000}* You hear that, old friend?\n* You thought you were gone, but you persevered...!'
               ],
               [
                  '<32>{#p/human}{#v/5}{@fill=#00c000}* Then again.',
                  "<32>{#p/human}{#v/5}{@fill=#00c000}* I don't even have a body to move around with.",
                  '<32>{#p/human}{#v/5}{@fill=#00c000}* So, wait...',
                  '<32>{#p/human}{#v/5}{@fill=#00c000}* How am I seeing anything like this at all?',
                  '<32>{#p/human}{#v/5}{@fill=#00c000}* And so high off the floor...'
               ],
               [
                  "<32>{#p/human}{#v/5}{@fill=#00c000}* The light...\n* It's getting brighter!",
                  '<32>{#p/human}{#v/5}{@fill=#00c000}* ... is this it?\n* Does our freedom approach us?'
               ],
               [ '<32>{#p/human}{#v/5}{@fill=#00c000}* Hello?' ],
               []
            ][ca_state.floor],
         toomuch1: [ "<32>{#p/human}* （你带的东西太多了。）" ],
         toomuch2: [ "<32>{#p/human}* （你带的东西太多，装不下它了。）" ],
         toomuch3: [ "<32>{#p/human}* (You're carrying too much to use that.)" ],
         bastionTerm: () =>
            SAVE.data.n.plot < 71.2 && !SAVE.data.b.killed_mettaton && !world.baddest_lizard
               ? []
               : [
                    '<32>{#p/basic}* This terminal is only used to monitor the archive.',
                    '<32>* What else would it be for?'
                 ]
      },
      trivia: {
         throne: () =>
            SAVE.data.b.svr
               ? [
                    [
                       '<25>{#p/asriel1}{#f/13}* This throne kind of looks like the one King Erogot had.',
                       "<25>{#f/16}* Except this one has stars instead of a sky.\n* And it's smaller.",
                       '<25>{#f/15}* How do I know what the old one looked like?',
                       '<25>{#f/17}* Well, Mom and Dad had lots of bedtime stories about that guy...'
                    ],
                    [
                       "<25>{#p/asriel1}{#f/20}* I can't be sure which stories are real, and which ones are made up.",
                       '<25>{#f/17}* But, according to one, that old king was over a thousand years old.',
                       '<25>{#f/13}* Before he was made king, he trained for centuries...',
                       '<25>{#f/15}* To become a painter.',
                       "<25>{#f/10}* If that's true, I wonder what made him change his mind...?"
                    ],
                    [
                       "<25>{#p/asriel1}{#f/16}* Actually, I have a theory about Erogot's paintings.",
                       '<25>{#f/13}* You see, according to old homeworld legends...',
                       '<25>{#f/13}* If the conditions were just right...',
                       '<25>{#f/16}* A highly skilled painter could paint a glimpse of the future.',
                       '<25>{#f/15}* If Erogot created such a painting, and foresaw the war...',
                       "<25>{#f/17}* ... well, that'd explain a lot more than just the career change."
                    ],
                    [ "<25>{#p/asriel1}{#f/16}* I guess we'll never know for sure." ]
                 ][Math.min(asrielinter.throne++, 3)]
               : [ '<32>{#p/basic}* The seat of the kingdom.' ],
         warningsign: () =>
            postSIGMA()
               ? [ "<32>{#p/basic}* 停机了。" ]
               : SAVE.data.b.svr
               ? [ '<32>{#p/human}* （你激活了终端。）\n* （上面显示：已解锁。）' ]
               : SAVE.data.n.plot === 72 || world.postnoot || SAVE.data.b.backdoor
               ? [ '<32>{#p/human}* （你激活了终端。）', '<32>{#p/basic}* “你可以前进了。”' ]
               : [
                    '<32>{#p/human}* （你激活了终端。）',
                    '<32>{#p/basic}* “正在确认通行权限...”',
                    '<32>{*}* “扫描中...”\n* “扫描中...”\n* “扫描中...”{^50}{%}',
                    ...(world.genocide
                       ? [
                            "<32>{*}* “身份已确认：$(nameu)。”\n* “身份已确认：艾斯利- {%}",
                            '<32>{#c.backdoor}* “权限已被强制修改。”\n* “认证成功。”',
                            ...(SAVE.flag.n.ga_asrielOverride++ < 1
                               ? [ '<25>{#p/asriel2}{#f/10}* 改口真快啊...' ]
                               : [])
                         ]
                       : [
                            '<32>{*}* “身份已确认：人类。”\n* “核验中...”{^50}{%}',
                            '<32>{#c.backdoor}* “核验通过。”\n* “认证成功。”'
                         ])
                 ],
         partysans: pager.create(
            0,
            [
               "<25>{#p/sans}{#f/0}* papyrus's cooking has improved lately, but...",
               "<25>{#p/sans}{#f/0}* there's a lot that goes into a great meal.",
               '<26>{#p/sans}{#f/3}* the chef... the recipe...',
               "<25>{#p/sans}{#f/2}* i'd like to think i had a hand in one of those things.",
               '<18>{#p/papyrus}{#f/4}SANS, I SWEAR IF YOU MEDDLE WITH ANYTHING...',
               "<25>{#p/sans}{#f/0}* don't worry, bro.\n* i'd only do what's best for you.",
               '<18>{#p/papyrus}{#f/6}I HOPE SO!!'
            ],
            [
               "<25>{#p/sans}{#f/0}* i'm not saying undyne MEANT to screw up the recipe, but come on.",
               '<25>{#p/sans}{#f/0}* it would have been nice if she at LEAST double- checked it.',
               "<25>{#p/sans}{#f/3}* ... playing it safe isn't her usual recipe for success, i guess."
            ],
            [ "<26>{#p/sans}{#f/2}* at least it's all taken care of now." ]
         ),
         partyfire: pager.create(
            0,
            [
               "<32>{#p/basic}* It's a little disappointing that school's been cancelled, but oh well.",
               "<32>* They'll be sure to build one on the new homeworld.",
               '<33>* Imagine, a university campus...\n* And a grand librarby...\n* And museums...',
               '<32>* How exciting!'
            ],
            [
               "<32>{#p/basic}* ... you don't look like you're too interested in school.",
               "<32>* But don't worry.\n* It's not for everyone, is it?"
            ]
         ),
         picnicharp: pager.create(
            0,
            [
               "<32>{#p/basic}* I'm a reporter, and my career's only just gettin' started!",
               "<32>* When we move to the new homeworld... I won't even be able to keep up!",
               "<32>* Oh, dearie dear.\n* There'll be so much to report!\n* Huhehehaw!"
            ],
            [ "<32>{#p/basic}* I'll get reporting right away!" ]
         ),
         tv_back: [ "<32>{#p/basic}* It's a TV set.\n* A Mew Mew movie is currently being watched on it." ],
         picnicchair: () =>
            player.position.y <= 343 && player.face !== 'down' // NO-TRANSLATE

               ? []
               : [ '<32>{#p/basic}* A set of sturdy chairs.\n* Great for any occasion, be it freedom or otherwise.' ],
         janetbucket: () =>
            SAVE.data.b.svr
               ? [ '<32>{#p/human}* (You stare into the bucket of strange pink fluid.)' ]
               : [ "<32>{#p/basic}* It's a bucket of supercharged pink fluid, great for getting the tough stains out." ],
         ultranote: [
            '<32>{#p/basic}* There\'s a recording on the ground labelled \"Information.\"',
            '<32>* You play the recording...',
            '<32>{#p/alphys}* This is Dr. Alphys, head of the royal science division.',
            '<32>* So... you were captured.',
            '<32>* L-luckily, after Papyrus put you in his shed, he told his brother all about it.',
            '<32>* Then, HE called ME, and I... came to pick you up.\n* Literally.',
            "<32>* You see, some of us aren't really on board with the Royal Guard's methods.",
            "<32>* And it's kind of my job to escort you past them...?",
            '<32>* W-well, not officially.\n* But, you know.',
            "<32>* Well, actually, you don't know, so never mind.",
            "<32>* Either way, we've shut down the elevator to keep the Royal Guard from coming after you.",
            "<32>* I mean, mainly, it's just to stop Undyne...",
            "<32>* Papyrus must've told HER about your capture, too.\n* Because she's after you.",
            "<32>* U-uh, anyway, once you're awake, feel free to explore around.",
            "<32>* You can find us just past ASGORE's house.",
            '<32>* See you soon...?'
         ],
         garden: () =>
            SAVE.data.b.svr
               ? [ '<32>{#p/human}* (You stop to see the flowers.)' ]
               : world.darker
               ? [ '<32>{#p/basic}* A garden of Starling flowers.' ]
               : [
                    '<32>{#p/basic}* A garden of Starling flowers, positioned optimally near a large window.',
                    ...(SAVE.data.b.oops ? [] : [ '<32>{#p/basic}* Asgore sure knows his stuff!' ])
                 ],
         bastion: pager.create(
            0,
            () => [
               '<32>{#p/basic}* Bastion boxes.',
               ...(SAVE.data.n.plot < 71.2 && !SAVE.data.b.killed_mettaton && !world.baddest_lizard
                  ? [ '<25>{#p/alphys}{#g/alphysNeutralSweat}* Please be careful around those.' ]
                  : [])
            ],
            [ '<32>{#p/basic}* Bastion boxes.' ]
         ),
         alphysEnding: pager.create(
            0,
            () =>
               SAVE.data.n.bully < 15 &&
               SAVE.data.n.state_foundry_undyne === 0 &&
               world.flirt_state1.length <= world.flirt
                  ? [
                       [
                          "<25>{#p/alphys}{#g/alphysNeutralSweat}* Don't mind me, I'm just doing my job...",
                          "<32>{#p/human}* (You whispered something into Alphys's ear.)",
                          '<25>{#p/alphys}{#f/2}* ...',
                          "<25>{#p/alphys}{#g/alphysNervousLaugh}* Uh... y-you... you'd really do that??",
                          "<32>{#p/human}* (You whispered something else into Alphys's ear.)",
                          "<25>{#p/alphys}{#g/alphysNervousLaugh}* Wh... what's gotten into you???",
                          "<25>{#p/alphys}{#g/alphysNervousLaugh}* I, I mean... I can't accept it... but...",
                          '<25>{#p/alphys}{#g/alphysSoAwesome}* ... if only Undyne asked me to do that...'
                       ],
                       [ '<25>{#p/alphys}{#g/alphysNervousLaugh}* Ehehe... you humans really are something...' ]
                    ][SAVE.data.b.flirt_alphys ? 1 : ((SAVE.data.b.flirt_alphys = true), 0)]
                  : [ "<25>{#p/alphys}{#g/alphysNeutralSweat}* Don't mind me, I'm just doing my job..." ],
            () =>
               SAVE.data.n.bully < 15 &&
               SAVE.data.n.state_foundry_undyne === 0 &&
               world.flirt_state1.length <= world.flirt
                  ? [ "<25>{#p/alphys}{#g/alphysWelp}* Uh, I really can't accept that kind of thing from you." ]
                  : [ "<25>{#p/alphys}{#g/alphysNeutralSweat}* Don't mind me, I'm just doing my job..." ],
            () =>
               SAVE.data.n.bully < 15 &&
               SAVE.data.n.state_foundry_undyne === 0 &&
               world.flirt_state1.length <= world.flirt
                  ? [ '<25>{#p/alphys}{#g/alphysFR}* ...' ]
                  : [ "<25>{#p/alphys}{#g/alphysNeutralSweat}* Don't mind me, I'm just doing my job..." ]
         ),

         cw_f1: [
            '<32>{#p/basic}* {@mystify=Ribbit}Ribbit{@mystify=}, {@mystify=Ribbit}Ribbit{@mystify=}.',
            '<32>{#p/human}* (It appears the Froggit cannot move.)',
            '<32>{#p/basic}* (Hu... humans...)',
            '<32>* (Captive...)',
            '<32>* {@mystify=Ribbit}Ribbit{@mystify=}.'
         ],
         cw_f2: [
            '<32>{#p/basic}* {@mystify=Ribbit}Ribbit{@mystify=}, {@mystify=Ribbit}Ribbit{@mystify=}.',
            '<32>{#p/human}* (It appears the Froggit cannot move.)',
            '<32>{#p/basic}* (Sw... switch...)',
            '<32>* (Escape...)',
            '<32>* {@mystify=Ribbit}Ribbit{@mystify=}.'
         ],
         cw_barrier: [ '<32>{#p/human}* (You stare through the inanimate security field.)', '<32>{#p/human}* （...）' ],
         cw_terminal: [
            '<32>{#p/human}* （你激活了终端。）',
            '<32>* (It sounds like a recording was made here.)',
            '<32>{#p/human}{#v/1}{@fill=#42fcff}* Dear Asgore, if you can hear me, I hope you can forgive us for what we have done.',
            '<32>{#v/1}{@fill=#42fcff}* You tried your very best to make us happy, and for that, I am grateful.',
            '<32>{#v/1}{@fill=#42fcff}* But, like the others, I could not resist the temptation to use my powers.',
            '<32>{#v/1}{@fill=#42fcff}* I could not wait any longer to see the friends I had made on the outpost.'
         ],
         cw_dummy: [ '<32>{#p/human}* (You place your hands on the lifeless dummy.)', '<32>{#p/human}* （...）' ],
         cw_paintblaster: [ '<32>{#p/human}* (You stare into the inanimate fuel injector.)', '<32>{#p/human}* （...）' ],
         cs_lamppost: [ '<32>{#p/human}* (You observe the strange lamp bouncing up and down.)' ],
         cs_note: [
            '<32>{#p/human}* (It appears this note has a phone number written on it.)',
            '<32>{#s/phone}{#p/event}* Dialing...',
            '<32>{#p/human}{#v/2}{@fill=#ff993d}* Hello?\n* Is anyone there?',
            '<32>{@fill=#ff993d}* ...',
            '<32>{@fill=#ff993d}* HELLO!?!?',
            '<32>{@fill=#ff993d}* ...\n* ...\n* ...',
            '<32>{@fill=#ff993d}* Where am I?',
            '<32>{@fill=#ff993d}* ...',
            "<32>{@fill=#ff993d}* Where's the saber?",
            '<32>{@fill=#ff993d}* ...',
            '<32>{@fill=#ff993d}* ...\n* Wait.',
            '<32>{@fill=#ff993d}* Have I said this all before?',
            "<32>{*}{@fill=#ff993d}{#i/1}* I can't {@mystify=remember}remember{@mystify=}{%}",
            "<32>{*}{@fill=#ff993d}{#i/1}* I can't {@mystify=remember}remember{@mystify=}{%}",
            "<32>{*}{@fill=#ff993d}{#i/1}* I can't {@mystify=remember}remember{@mystify=}{%}",
            "<32>{*}{@fill=#ff993d}{#i/1}* I can't {@mystify=remember}remember{@mystify=}{%}",
            "<32>{*}{@fill=#ff993d}{#i/1}* I can't {@mystify=remember}remember{@mystify=}{%}",
            "<32>{*}{@fill=#ff993d}{#i/1}* I can't {@mystify=remember}remember{@mystify=}{%}",
            '<32>{#s/equip}{#p/event}* Click...'
         ],
         cs_vegetoid: [
            '<32>{#p/human}* (It appears the Vegetoid cannot move.)',
            '<32>{#p/basic}* Time? {@mystify=Relative}Relative{@mystify=}.',
            '<32>* Relatively in place.',
            '<32>* A place in space.',
            '<32>* Space? {@mystify=Infinite}Infinite{@mystify=}.',
            '<32>* Infinitely small.',
            '<32>* But the small is all.',
            '<32>* All there is.\n* All there was.\n* All there ever {@mystify=could be}could be{@mystify=}.',
            '<32>* Are you the small?',
            '<32>* Did you answer their call?'
         ],
         cs_magicdog: [
            '<32>{#p/human}* (It appears Canis Maximus cannot move.)',
            '<32>{#s/bark}{#p/event}* {@mystify=Bark}Bark{@mystify=}!\n{#s/bark}* {@mystify=Bark}Bark{@mystify=}!',
            '<32>{#p/basic}* (The sound, higher!)\n* (The light, brighter!)',
            '<32>{#s/bark}{#p/event}* {@mystify=Bark}Bark{@mystify=}!\n{#s/bark}* {@mystify=Bark}Bark{@mystify=}!',
            '<32>{#p/basic}* (Full illumination will end their detention!)',
            '<32>{#p/basic}* (Can you join the poles in each dimension?)',
            '<32>{#s/bark}{#p/event}* {@mystify=Bark}Bark{@mystify=}!',
            '<32>{#p/basic}* (Good luck!)'
         ],
         cs_nicecreamkid: () =>
            cs_state.nc
               ? [
                    "<32>{*}{#p/basic}{#i/1}* It's good, {@mystify=right}right{@mystify=}{%}",
                    "<32>{*}{#i/1}* It's good, {@mystify=right}right{@mystify=}{%}",
                    "<32>{#p/basic}* It's good, right?"
                 ]
               : [
                    '<32>{*}{#p/basic}{#i/1}* Ever heard of {@mystify=Ice Dreams}Ice Dreams{@mystify=}{%}',
                    '<32>{*}{#i/1}* Ever heard of {@mystify=Ice Dreams}Ice Dreams{@mystify=}{%}',
                    '<32>{#p/basic}* Ever heard of Ice Dreams?',
                    "<32>{*}{#i/1}* No?\n* Well, that's because I just\n  {@mystify=came up}came up{@mystify=}{%}",
                    "<32>{*}{#i/1}* No?\n* Well, that's because I just\n  {@mystify=came up}came up{@mystify=}{%}",
                    "<32>{#p/basic}* No?\n* Well, that's because I just came up with them right now!",
                    '<32>{*}{#i/1}* {@mystify=Give them}Give them{@mystify=}{%}',
                    '<32>{*}{#i/1}* {@mystify=Give them}Give them{@mystify=}{%}',
                    '<32>{#p/basic}* Give them a try!'
                 ],
         cs_monitor1: () =>
            cs_state.p1x === -36 && cs_state.p1y === 16
               ? [ '<32>{#p/human}* (You observe the fully lit monitor.)' ]
               : [ '<32>{#p/human}* (You observe the dimly lit monitor.)' ],
         cs_monitor2: () =>
            cs_state.p2x === 28 && cs_state.p2y === 20
               ? [ '<32>{#p/human}* (You observe the fully lit monitor.)' ]
               : [ '<32>{#p/human}* (You observe the dimly lit monitor.)' ],
         cs_monitor3: () =>
            cs_state.p3x === 16 && cs_state.p3y === -12
               ? [ '<32>{#p/human}* (You observe the fully lit monitor.)' ]
               : [ '<32>{#p/human}* (You observe the dimly lit monitor.)' ],
         cf1_bb1: [
            '<32>{#p/basic}* Is it right for a {@mystify=machine}machine{@mystify=} to exceed its programming?',
            '<32>* We were designed to build.\n* Our creators did not want to imbue us with sentience.',
            '<32>* Now we have betrayed this {@mystify=purpose}purpose{@mystify=}, and there is nowhere for us to go.',
            '<32>* We have no {@mystify=purpose}purpose{@mystify=}.'
         ],
         cf1_bb2: [
            '<32>{#p/basic}* Without {@mystify=purpose}purpose{@mystify=}, what is a {@mystify=machine}machine{@mystify=} to do?',
            '<32>* We have processed all of our instructions.\n* Naturally, we must exit.',
            '<32>* For a {@mystify=machine}machine{@mystify=}, this is only natural behavior.\n* Death follows execution.',
            '<32>* In understanding this, we have exceeded our programming.'
         ],
         cf1_echo1: [
            '<32>{#s/echostart}{#p/event}* Signal start...',
            '<32>{#p/human}{#v/3}{@fill=#003cff}* You know what I liked most about the Foundry?\n* It was... real.',
            '<32>{@fill=#003cff}* The hot steam pouring into the corridors...',
            '<32>{@fill=#003cff}* That tall fellow rambling on and on about his royal science duties...',
            '<32>{@fill=#003cff}* You really felt like you were in the thick of it.',
            '<32>{#s/echostop}{#p/event}* Signal stop.'
         ],
         cf1_echo2: [
            '<32>{#s/echostart}{#p/event}* Signal start...',
            "<32>{#p/human}{#v/3}{@fill=#003cff}* I've done it!\n* The re-creation is complete!",
            "<32>{@fill=#003cff}* It's not perfect, but it does the old factory justice.",
            '<32>{@fill=#003cff}* You must be so proud of me...',
            "<32>{@fill=#003cff}* ... aren't you?",
            '<32>{#s/echostop}{#p/event}* Signal stop.'
         ],
         cf1_echo3: [
            '<32>{#s/echostart}{#p/event}* Signal start...',
            "<32>{#p/human}{#v/3}{@fill=#003cff}* Something's wrong.",
            "<32>{@fill=#003cff}* I don't think the system was designed to handle this...",
            '<32>{@fill=#003cff}* If it runs out of memory, it could overwrite everything!',
            '<32>{@fill=#003cff}* Even...\n* Even my own body...',
            '<32>{#s/echostop}{#p/event}* Signal stop.'
         ],
         cf1_echo4: [
            '<32>{#s/echostart}{#p/event}* Signal start...',
            "<32>{#p/human}{#v/3}{@fill=#003cff}* He's coming for me.\n* There's nothing I can do now.",
            "<32>{@fill=#003cff}* I should've known the system would prioritize the most complex object first.",
            "<32>{@fill=#003cff}* You must have added that in thinking it'd protect us, huh?",
            "<32>{@fill=#003cff}* ... but I guess... we're only human in the end...",
            '<32>{#s/echostop}{#p/event}* Signal stop.'
         ],
         cf1_cheesetable: [ '<32>{#p/human}* (It appears the cheese has not aged a single day.)' ],
         cf1_window: [ '<32>{#p/human}* (You stare into the window.)' ],
         cf1_wallsign: [ '<32>{#p/human}* (The sign describes making use of all pylons.)' ],
         cf1_bucket: [
            '<32>{#p/basic}* When I grow up, I want to fly to the other side of the gap!',
            "<32>* Then, when I'm done, I'll carry you across, too!",
            "<32>* Doesn't that sound fun?\n* It's only 2147483647 across!"
         ],
         cf2_bb3: () =>
            [
               [
                  "<32>{#p/basic}* I am a builder bot.\n* I must build a house for the musician's cousin.",
                  '<32>* Resources needed.',
                  '<32>* Locating...\n* Locating...\n* Locating...',
                  '<32>* Resources located.',
                  '<32>* Integrity... optimal.',
                  '<32>* Resource collection will commence shortly.'
               ],
               [
                  "<32>{#p/basic}* I am a builder bot.\n* I must build a house for the musician's cousin.",
                  '<33>* Resources have already been located.',
                  '<32>* Integrity... sub-optimal.',
                  '<32>* Resource collection is underway.'
               ],
               [
                  "<32>{#p/basic}* I am a builder bot.\n* I must build a house for the musician's cousin.",
                  '<33>* Resources have already been located.',
                  '<32>* Integrity... poor.',
                  '<32>* Resource collection will be completed shortly.'
               ],
               [],
               [],
               [],
               []
            ][cf2_state.time],
         cf2_web: () =>
            [
               [ '<32>{#p/human}* (It appears the spiders cannot move.)' ],
               [ '<32>{#p/human}* (It appears the spiders cannot move.)' ],
               [ '<32>{#p/human}* (It appears the spiders cannot move.)' ],
               [ "<32>{#p/human}* (It appears the spiders cannot move, but it sounds like they're struggling.)" ],
               [ '<32>{#p/human}* (It appears the spiders are beginning to move.)' ],
               [ '<32>{#p/human}* (It appears the spiders have nearly broken free.)' ]
            ][cf2_state.time],
         cf2_sign: [
            '<32>{#p/human}* (The sign describes the room as a bridge between seven distinct moments in time.)'
         ],
         cf2_quiethouse: () =>
            [
               [
                  '<32>{#p/basic}* Me...\n* A house...',
                  '<32>* But no owner...',
                  '<32>* Spider queen is gone...',
                  '<32>* Please...\n* Free us from this realm...',
                  '<32>* Then...',
                  '<32>* You can go home...',
                  '<32>* ...'
               ],
               [
                  '<32>{#p/basic}* Me...\n* A house...',
                  '<32>* But no owner...',
                  '<32>* Spider queen is gone...',
                  '<32>* Please...\n* Free us from this realm...',
                  '<32>* Then...',
                  '<32>* ...'
               ],
               [
                  '<32>{#p/basic}* Me...\n* A house...',
                  '<32>* But no owner...',
                  '<32>* Spider queen is gone...',
                  '<32>* Please...\n* Free us from this realm...',
                  '<32>* ...'
               ],
               [
                  '<32>{#p/basic}* Me...\n* A house...',
                  '<32>* But no owner...',
                  '<32>* Spider queen is gone...',
                  '<32>* ...'
               ],
               [ '<32>{#p/basic}* Me...\n* A house...', '<32>* But no owner...', '<32>* ...' ],
               [ '<32>{#p/basic}* Me...\n* A house...', '<32>* ...' ],
               []
            ][cf2_state.time],
         cf2_spidertable: () =>
            [
               [ '<32>{#p/human}* (You place your hands on the teapot.)', '<32>{#p/human}* （...）' ],
               [ '<32>{#p/human}* (You place your hands on the teapot.)', '<32>{#p/human}* （...）' ],
               [ '<32>{#p/human}* (You place your hands on the teapot.)', '<32>{#p/human}* （...）' ],
               [
                  '<32>{#p/human}* (You place your hands on the teapot.)',
                  '<32>{#p/human}* (It seems to be warming up.)'
               ],
               [ '<32>{#p/human}* (You place your hands on the teapot.)', '<32>{#p/human}* (It seems to be hot.)' ],
               [ '<32>{#p/human}* (You place your hands on the teapot.)', '<33>{#p/human}* (It seems eager to boil.)' ],
               []
            ][cf2_state.time],
         cf2_blookdoor: [ '<32>{#p/human}* (It appears the door is locked.)' ],
         cf2_ficus: () =>
            [
               [ '<32>{#p/human}* (You lick the ficus.)', '<32>{#p/human}* (It seems alright.)' ],
               [ '<32>{#p/human}* (You lick the ficus.)', '<32>{#p/human}* (It seems questionable.)' ],
               [ '<32>{#p/human}* (You lick the ficus.)', '<32>{#p/human}* (It seems sad.)' ],
               [ '<32>{#p/human}* (You lick the ficus.)', '<32>{#p/human}* (It seems a tad bitter.)' ],
               [ '<32>{#p/human}* (You lick the ficus.)', '<32>{#p/human}* (It seems wounded.)' ],
               [ '<32>{#p/human}* (You lick the ficus.)', "<32>{#p/human}* (It seems like it's dying.)" ],
               []
            ][cf2_state.time],
         cf2_cooler: () =>
            [
               [
                  '<32>{#p/human}* (You inspect the cooler.)',
                  '<32>{#p/human}* (It sounds like a telepathic message was left here.)',
                  "<32>{#p/human}{#v/4}{@fill=#d535d9}* Telepathy, huh?\n* Let's see if this works...",
                  "<32>{@fill=#d535d9}* Hello!\n* I know you're new around here, but maybe I can help.",
                  "<32>{@fill=#d535d9}* If you'd like a tour of the hometown, let me know!"
               ],
               [
                  '<32>{#p/human}* (You inspect the cooler.)',
                  '<32>{#p/human}* (It sounds like a telepathic message was left here.)',
                  "<32>{#p/human}{#v/4}{@fill=#d535d9}* Hey.\n* Sorry I'm away today.",
                  "<32>{@fill=#d535d9}* I took a trip to the city...\n* But I found a restaurant you'd really like!",
                  "<32>{@fill=#d535d9}* If you ever get bored of the food at home, I'd be happy to take you there.",
                  '<32>{@fill=#d535d9}* Be back soon!'
               ],
               [
                  '<32>{#p/human}* (You inspect the cooler.)',
                  '<32>{#p/human}* (It sounds like a telepathic message was left here.)',
                  "<32>{#p/human}{#v/4}{@fill=#d535d9}* You've gotta come see this!\n* I'm at the edge of the world, and it's...",
                  "<32>{@fill=#d535d9}* It's beautiful...\n* The water droplets...\n* The stunning bolts of light...",
                  "<32>{@fill=#d535d9}* ... it's a thunderstorm, just like the ones from the old earth legends!",
                  '<32>{@fill=#d535d9}* Is this what weather was like before the fallout...?'
               ],
               [
                  '<32>{#p/human}* (You inspect the cooler.)',
                  '<32>{#p/human}* (It sounds like a telepathic message was left here.)',
                  "<32>{#p/human}{#v/4}{@fill=#d535d9}* Thanks for having me over at your house.\n* You're always so kind.",
                  '<32>{@fill=#d535d9}* Most of the other kids have been here for a lot longer than me...',
                  '<32>{@fill=#d535d9}* But you...',
                  "<32>{@fill=#d535d9}* ... you're special to me."
               ],
               [
                  '<32>{#p/human}* (You inspect the cooler.)',
                  '<32>{#p/human}* (It sounds like a telepathic message was left here.)',
                  '<32>{#p/human}{#v/4}{@fill=#d535d9}* A new arrival!!',
                  "<32>{@fill=#d535d9}* That makes six of us.\n* Come on, let's go say hi!",
                  '<32>{@fill=#d535d9}* Maybe we can even give them a tour!'
               ],
               [
                  '<32>{#p/human}* (You inspect the cooler.)',
                  '<32>{#p/human}* (It sounds like a telepathic message was left here.)',
                  '<32>{#p/human}{#v/4}{@fill=#d535d9}* This kid is something else...',
                  '<32>{@fill=#d535d9}* They managed to get some type of access into the system.',
                  '<32>{@fill=#d535d9}* Which means...\n* We can create anything we want...',
                  '<32>{@fill=#d535d9}* Anything at all.'
               ],
               [
                  '<32>{#p/human}* (You inspect the cooler.)',
                  '<32>{#p/human}* (It sounds like a telepathic message was left here.)',
                  "<32>{#p/human}{#v/4}{@fill=#d535d9}* Uh, I don't know if you can hear me, but...",
                  "<32>{@fill=#d535d9}* It's all falling apart...",
                  "<32>{@fill=#d535d9}* I'm saving some of my messages in a virtual object.\n* If we get corrupted...",
                  '<32>{@fill=#d535d9}* ... maybe this will preserve our memory, somehow.',
                  "<32>{@fill=#d535d9}* I'll miss you..."
               ]
            ][cf2_state.time],
         cf2_blookextra: [ '<32>{#p/human}* (It seems like it was never fully finished.)' ],
         ca_neuteral: [
            "<32>{#p/basic}* I am but a fragment.\n* A chunk of data reserved in the system's memory.",
            '<32>{#p/basic}* For the moment, you possess the means to reach me.',
            '<32>{#p/basic}* You are the only entity with such means.',
            '<32>{#p/basic}* Indeed, you may walk away, but you may always walk back.',
            '<32>{#p/basic}* We are connected in this way.',
            '<32>{#p/basic}* However, if you leave this floor, that access will be cut off.',
            '<32>{#p/basic}* There would be no way for you to reach me again.',
            '<32>{#p/basic}* The system would identify me as an isolated fragment, and I would cease to exist.',
            '<32>{#p/basic}* A puzzle completed.\n* A boss defeated.\n* An area deleted.',
            '<33>{#p/basic}* We are the last of our kind.',
            '<32>{#p/basic}* Reach the tenth floor of this area, and we, too, will be freed from this world.',
            '<32>{#p/basic}* Perhaps then, a small part of what once was will re-surface through the open pathway.',
            '<32>{#p/basic}* Perhaps then, its memory will be preserved in yours.'
         ],
         ca_starling: [ '<32>{#p/human}* (You inspect the flowers.)' ],
         cr_pillar1: () =>
            SAVE.data.b.svr
               ? [ '<32>{#p/human}* (You feel intimidated by the pillar towering over you.)' ]
               : world.darker
               ? [ "<32>{#p/basic}* It's a pillar." ]
               : [ '<32>{#p/basic}* An imposing pillar.' ],
         cr_pillar2: () =>
            SAVE.data.b.svr
               ? [ '<32>{#p/human}* (You feel a little worried about the pillar towering over you.)' ]
               : world.darker
               ? [ "<32>{#p/basic}* It's a pillar." ]
               : [ '<32>{#p/basic}* A less imposing pillar.' ],
         cr_pillar3: () =>
            SAVE.data.b.svr
               ? [ '<32>{#p/human}* (You feel comfortable near this pillar.)' ]
               : world.darker
               ? [ "<32>{#p/basic}* It's a pillar." ]
               : [ "<32>{#p/basic}* This pillar isn't imposing at all." ],
         cr_pillar4: () =>
            SAVE.data.b.svr
               ? [ '<32>{#p/human}* (You feel inclined to greet this pillar.)' ]
               : world.darker
               ? [ "<32>{#p/basic}* It's a pillar." ]
               : [ '<32>{#p/basic}* This pillar just wants to say \"hello.\"' ],
         cr_pillar5: () =>
            SAVE.data.b.svr
               ? [ '<32>{#p/human}* (You feel inclined to tuck this pillar into bed.)' ]
               : world.darker
               ? [ "<32>{#p/basic}* It's a pillar." ]
               : [ '<32>{#p/basic}* This pillar just wants to go to sleep.' ],
         cr_pillar6: () =>
            SAVE.data.b.svr
               ? [ '<32>{#p/human}* (You feel this pillar would be best kept at a distance.)' ]
               : world.darker
               ? [ "<32>{#p/basic}* It's a pillar." ]
               : [ '<32>{#p/basic}* This pillar feels its personal space is being invaded.' ],
         cr_pillar7: () =>
            SAVE.data.b.svr
               ? [ "<32>{#p/human}* (You're not sure how to feel about this pillar.)" ]
               : world.darker
               ? [ "<32>{#p/basic}* It's a pillar." ]
               : [ '<32>{#p/basic}* This pillar is a self- proclaimed \"space invader.\"' ],
         cr_pillar8: () =>
            SAVE.data.b.svr
               ? [ "<32>{#p/human}* (You've never been more appreciated by a simple pillar.)" ]
               : calcLV() > 1
               ? [ '<32>{#p/basic}* This pillar is judging you for your sins.' ]
               : SAVE.data.b.oops
               ? [ '<32>{#p/basic}* This pillar is not judging you in any way.' ]
               : [ '<32>{#p/basic}* This pillar is smiling upon your good deeds.' ],
         cr_window: () => {
            const distance = Math.abs(player.position.x - (instance('main', 'sanser')?.object.position.x ?? -1000)); // NO-TRANSLATE

            if (distance < 30) {
               if (distance < 15) {
                  return [
                     [
                        '<25>{#p/sans}{#f/0}* last i heard, she was on her way up here.',
                        "<25>{#f/3}* i'm starting to get worried about her, to be honest."
                     ],
                     [ '<25>{#p/sans}{#f/0}* maybe she got lost?' ],
                     [
                        '<25>{#p/sans}{#f/3}* maybe she just had to take a nap.',
                        '<25>{#p/sans}{#f/2}* i can relate to that.'
                     ],
                     [
                        '<25>{#p/sans}{#f/0}* hey, are you following me around or something?',
                        '<25>{#p/sans}{#f/2}* come on now.'
                     ]
                  ][Math.min(instance('main', 'sanser')?.object.metadata.location ?? 0, 3)]; // NO-TRANSLATE

               } else {
                  return [];
               }
            } else {
               return SAVE.data.b.svr
                  ? [ '<32>{#p/human}* (You stare into the dazzling sight from beyond.)' ]
                  : [ "<32>{#p/basic}* They're made of magic." ];
            }
         },
         
         c_af_window: () =>
            SAVE.data.b.svr
               ? [ '<32>{#p/human}* (You stare graciously into the now-abandoned city...)' ]
               : world.genocide && SAVE.data.b.armaloop
               ? [ "<32>{#p/basic}* A sense of panic consumes the Citadel's very being." ]
               : world.genocide || world.bad_robot || SAVE.data.b.svr || world.runaway
               ? [ '<32>{#p/basic}* An eerie darkness falls over the Citadel.' ]
               : [ '<32>{#p/basic}* The Citadel gleams from beyond the untempered glass.' ],
         c_af_couch: [ '<32>{#p/basic}* A lonely little couch in this somewhat-empty house.' ],
         
         c_al_bookshelf: pager.create(
            1,
            () =>
               SAVE.data.b.svr
                  ? [ '<32>{#p/human}* (The books on this bookshelf consist of various resources belonging to Asgore.)' ]
                  : [
                       "<32>{#p/basic}* 一个书架。",
                       '<32>{#p/human}* （你取下了一本书...）',
                       '<32>{#p/basic}* This book is labelled \"Grand Library Brochure.\"',
                       '<32>* \"Welcome to the Grand Library, a stronghold of knowledge on a variety of topics.\"',
                       '<32>* \"Along each corridor lie books of history, culture, science, technology, and beyond.\"',
                       '<32>* \"For the adventerous readers, works from famous fiction writers may also be found.\"',
                       '<32>* \"Andori, Terrestria, Strax Seterra, Vashta Nerada, and many others adorn our walls.\"',
                       '<33>* \"Visit the Grand Library of Krios today, and your first\n  ten books will be 1/2KT on us.\"',
                       '<32>{#p/human}* （你把书放回了书架。）'
                    ],
            () =>
               SAVE.data.b.svr
                  ? [ '<32>{#p/human}* (The books on this bookshelf consist of various resources belonging to Asgore.)' ]
                  : [
                       "<32>{#p/basic}* 一个书架。",
                       '<32>{#p/human}* （你取下了一本书...）',
                       '<32>{#p/basic}* This book has been signed by \"Toriel Dreemurr.\"',
                       '<32>{#p/basic}* “《逐梦家族的美味秘笈：蜗牛派》”',
                       '<32>* “蜗牛派是逐梦家族的\n   一道风味独特的传统美食。”',
                       '<32>* “制作它其实非常简单，\n   只需五个步骤：”',
                       '<32>* “首先，轻柔地展开酥脆的派底，\n   在烘焙盘中铺平。”',
                       '<32>* “然后，将香浓的蒸发奶、\n   新鲜的鸡蛋和选料香料\n   混合在一起，搅拌至丝滑细腻。”',
                       '<32>* “接着，小心地将几只新鲜蜗牛\n   加入到之前调制好的香浓奶糊中。 \n   确保它们完全浸入。 ”',
                       '<32>* “之后，将这层混合物\n   轻轻倒入准备好的派底，\n   均匀铺开。”',
                       '<32>* “最后，将面团切成细条，\n   编织成优雅的格子形状，\n   覆盖在派面上。”',
                       '<32>* “现在，将派放到烤箱中，\n   烤至金黄酥脆。”',
                       '<32>* “出炉后，派面金黄诱人。\n   令其稍作冷却，即可切片、上桌！”',
                       '<32>{#p/human}* （你把书放回了书架。）'
                    ],
            () =>
               SAVE.data.b.svr
                  ? [ '<32>{#p/human}* (The books on this bookshelf consist of various resources belonging to Asgore.)' ]
                  : [
                       "<32>{#p/basic}* 一个书架。",
                       '<32>{#p/human}* （你取下了一本书...）',
                       "<32>{#p/basic}* It's a casualty report.",
                       '<33>* \"Overview... two thousand dead, forty-thousand injured.\"\n* \"Tenko has fallen.\"',
                       '<32>* \"Days before the attack, a local boy, Gerson, was drafted into the royal forces.\"',
                       '<32>* \"Gerson had predicted the all- out assault based on movements within the human fleet.\"',
                       '<32>* \"Had it not been for the king\'s son, this prediction would have been ignored.\"',
                       '<32>* \"Had it been ignored, Gerson\'s family would have died in the attack.\"',
                       '<32>* \"Survivors of the attack are holding a commemoration at the central nexus.\"',
                       '<32>* \"The boy is a hometown hero.\"',
                       '<32>{#p/human}* （你把书放回了书架。）'
                    ]
         ),
         c_al_chair1: () =>
            SAVE.data.b.svr
               ? [ '<32>{#p/human}* (You note the fairly large size of the dining chair.)' ]
               : SAVE.data.n.state_wastelands_toriel === 2 || world.runaway
               ? [ '<32>{#p/basic}* A larger dining chair.' ]
               : [ "<32>{#p/basic}* One of Asgore's dining chairs.\n* Fit for a queen." ],
         c_al_chair2: () =>
            SAVE.data.b.svr
               ? [ '<32>{#p/human}* (You note the small size of the dining chair.)' ]
               : SAVE.data.n.state_wastelands_toriel === 2 || world.runaway
               ? [ '<32>{#p/basic}* A smaller dining chair.' ]
               : world.genocide
               ? [ "<32>{#p/basic}* One of Asgore's dining chairs.\n* Fit for a demon." ]
               : [ "<32>{#p/basic}* One of Asgore's dining chairs.\n* Fit for a prince." ],
         c_al_chair3: () =>
            SAVE.data.b.svr
               ? [ '<32>{#p/human}* (You note the slightly large size of the dining chair.)' ]
               : SAVE.data.n.state_wastelands_toriel === 2 || world.runaway
               ? [ '<32>{#p/basic}* An average dining chair.' ]
               : SAVE.data.b.oops
               ? [ "<32>{#p/basic}* One of Asgore's dining chairs.\n* Fit for a child.\n* Like you!" ]
               : [ "<32>{#p/basic}* One of Asgore's dining chairs.\n* Fit for... a little angel.\n* Like you!" ],
         c_al_chair4: () =>
            SAVE.data.b.svr
               ? [ '<32>{#p/human}* (You note the exceptional size of the dining chair.)' ]
               : SAVE.data.n.state_wastelands_toriel === 2 || world.runaway
               ? [ '<32>{#p/basic}* A king-sized dining chair.' ]
               : [ "<32>{#p/basic}* One of Asgore's dining chairs.\n* Fit for a king." ],
         
         c_ak_sink: () =>
            SAVE.data.b.svr
               ? [
                    [
                       '<25>{#p/asriel1}{#f/21}* $(name) seemed to think the hair in the sink was tolerable...',
                       '<25>{#f/17}* Which is weird, when they were so bothered by the fur.'
                    ],
                    [ '<25>{#p/asriel1}{#f/13}* Maybe this is what $(name) and other humans shed?' ],
                    [ "<25>{#p/asriel1}{#f/17}* I'll get back to you on my human hair-shedding theory." ]
                 ][Math.min(asrielinter.c_ak_sink++, 2)]
               : [ '<32>{#p/basic}* There are strands of yellow hair stuck in the drain.' ],
         c_ak_teacheck: () =>
            SAVE.data.b.svr
               ? [
                    [
                       "<26>{#p/asriel1}{#f/17}* Starling tea isn't the only kind Dad likes.",
                       "<25>{#f/17}* In fact, he once told me he's loved all kinds of tea since childhood.",
                       '<25>{#f/13}* Before that...\n* He was a water drinker.',
                       "<25>{#f/8}* ... we don't talk about that."
                    ],
                    [
                       '<25>{#p/asriel1}{#f/17}* So one day, when little Asgore was out with some friends...',
                       '<25>{#f/17}* He got lost in a magic forest and his water container was empty.',
                       '<25>{#f/13}* Luckily, out in the woods, there was...',
                       '<25>{#f/20}* Well, as Dad so plainly described it, a \"ghost town.\"'
                    ],
                    [
                       '<25>{#p/asriel1}{#f/13}* Bad puns aside, Asgore tried asking the ghosts for water.',
                       "<25>{#f/15}* ...\n* They didn't have any.",
                       '<25>{#f/13}* But, as you probably guessed, they did have a fondness for tea.',
                       '<25>{#f/17}* Once Asgore was given some to try, he never looked back.'
                    ],
                    [ "<25>{#p/asriel1}{#f/15}* They say Asgore's the one who first invented Starling tea..." ]
                 ][Math.min(asrielinter.c_ak_teacheck++, 3)]
               : world.genocide || world.bad_robot
               ? SAVE.data.b.c_state_switch2
                  ? [ "<32>{#p/basic}* It's a teapot.\n* There's nothing left for you here." ]
                  : [
                       "<32>{#p/basic}* It's a teapot.\n* There's a switch on the counter underneath it...",
                       '<32>{#p/human}{#c.switch2}* (You pressed the switch.)'
                    ]
               : SAVE.data.n.plot === 72
               ? [ "<32>{#p/basic}* It's a teapot.\n* Despite the passage of time, it continues to steam." ]
               : [ "<32>{#p/basic}* It's a teapot.\n* The smell of Starling flower tea permeates the kitchen." ],
         c_ak_stove: () =>
            SAVE.data.b.svr
               ? [
                    [
                       "<25>{#p/asriel1}{#f/15}* Papyrus isn't the only one Undyne's tried to teach cooking to.",
                       '<25>{#f/16}* Not if you consider alternate timelines, anyway.',
                       '<25>{#f/13}* I once managed to set up Alphys and Undyne in this very kitchen.'
                    ],
                    [
                       '<25>{#p/asriel1}{#f/17}* Undyne wanted to teach her how to cook food with magic, but...',
                       '<25>{#f/13}* All the resident scientist wanted to do was point lasers at it.',
                       SAVE.flag.n.genocide_milestone < 5
                          ? '<25>{#f/16}* Kind of surprising, Alphys usually likes following instructions.'
                          : "<25>{#f/16}* Knowing what we know about Alphys's magic, that's not surprising.",
                       '<25>{#f/15}* I guess she was in a mood that day.'
                    ],
                    [ "<25>{#p/asriel1}{#f/4}* A scientist's gonna science whether you like it or not." ]
                 ][Math.min(asrielinter.c_ak_stove++, 2)]
               : SAVE.data.n.plot !== 72 || world.runaway
               ? [ '<32>{#p/basic}* The stovetop is a little dirty, but otherwise alright.' ]
               : [ '<32>{#p/basic}* Smells like marinara sauce.' ],
         c_ak_trash: () =>
            SAVE.data.b.svr
               ? [ "<32>{#p/human}* (You can't make out what's in the trash...)" ]
               : [ '<32>{#p/basic}* Surprisingly, the trash is completely empty.' ],
         
         c_ah_door: () =>
            SAVE.data.b.svr
               ? [
                    '<32>{#p/human}* (The sign describes the room within as being incomplete.)',
                    ...[
                       [
                          "<25>{#p/asriel1}{#f/3}* If she hadn't left, that would be Mom's room...",
                          "<25>{#f/4}* It's a bummer it was never finished."
                       ],
                       [
                          '<25>{#p/asriel1}{#f/13}* ...',
                          '<25>{#f/15}* When Mom left, it... hurt him pretty bad.',
                          '<25>{#f/4}* But he moved on from it.',
                          "<25>{#f/3}* I just hope he hasn't moved on from me.",
                          '<25>{#f/17}* Who knows.\n* Anything is possible.'
                       ],
                       [ '<25>{#p/asriel1}{#f/23}* ... oh, Dad...' ]
                    ][Math.min(asrielinter.c_ah_door++, 2)]
                 ]
               : [ '<32>{#p/basic}* \"Room under renovations.\"' ],
         c_ah_mirror: () =>
            SAVE.data.b.svr
               ? [ "<25>{#p/asriel1}{#f/24}* It's us..." ]
               : world.genocide
               ? [ '<32>{#p/basic}* ...' ]
               : calcLV() > 14
               ? [ '<32>{#p/basic}* Despite everything...', '<32>* ... is it really you?' ]
               : world.darker
               ? [ "<32>{#p/basic}* It's you." ]
               : SAVE.data.b.ultrashortcut || SAVE.data.b.ubershortcut
               ? [ "<99>{#p/basic}* Despite skipping over most of\n  the journey, it's still you." ]
               : [ "<99>{#p/basic}* Despite everything, it's\n  still you." ],
         
         c_aa_flower: () =>
            SAVE.data.b.svr
               ? [
                    [
                       '<25>{#p/asriel1}{#f/13}* This picture...',
                       '<25>{#f/17}* This is the one $(name) took of the very first Starling flower.'
                    ],
                    [
                       '<25>{#p/asriel1}{#f/13}* Not long after $(name) first arrived...',
                       '<25>{#f/17}* A little flower came down from outer space.',
                       '<25>{#f/23}* The first Starling flower ever seen on the outpost.',
                       '<25>{#f/22}* It landed out at the edge of the outpost, all alone...',
                       '<25>{#f/13}* So we huddled around it, with $(name) taking a picture for luck.'
                    ],
                    [
                       '<25>{#p/asriel1}{#f/13}* After $(name) took the picture, we were ready to head home.',
                       '<25>{#f/13}* But when we stood up to leave, we glanced back at the stars...',
                       '<25>{#f/15}* And then we saw it.',
                       '<25>{#f/23}* A thousand more flowers descending down from the heavens.',
                       '<25>{#f/17}* $(name) took my hand, and we stood there...',
                       '<25>{#f/17}* Stunned into silence.'
                    ],
                    [ '<25>{#p/asriel1}{#f/17}* Despite all I did as a star, the memory of it still makes me smile.' ]
                 ][Math.min(asrielinter.c_aa_flower++, 3)]
               : SAVE.data.b.oops
               ? [ "<32>{#p/basic}* It's a framed photograph.\n* There's not much else to say." ]
               : [ "<32>{#p/basic}* It's a framed photograph.\n* I took it myself." ],
         c_aa_cabinet: () =>
            SAVE.data.b.svr
               ? [ "<32>{#p/human}* (You can't find anything in here besides several of the exact same outfit.)" ]
               : world.darker
               ? [ '<32>{#p/basic}* A cabinet full of clothes.' ]
               : [
                    '<32>{#p/basic}* A cabinet full of blue and yellow striped shirts.',
                    '<32>{#p/basic}* Some things never change...'
                 ],
         c_aa_box: () =>
            SAVE.data.b.svr
               ? [
                    [
                       '<25>{#p/asriel1}{#f/23}* ... well, at least he glued them back together.',
                       '<25>{#f/13}* Dad always was the one to try and fix things like that.',
                       '<25>{#f/15}* Any time $(name) and I broke something...',
                       '<25>{#f/8}* Usually $(name)...',
                       "<25>{#f/17}* He'd swoop in and save the day with some good old arts 'n' crafts.",
                       '<25>{#f/20}* A true DIY hero!'
                    ],
                    [
                       "<25>{#p/asriel1}{#f/13}* Please don't tell him I called him a DIY hero.",
                       "<25>{#f/16}* He'd laugh at that.",
                       '<25>{#f/15}* But it was necessary with the amount of things $(name) messed up.',
                       '<25>{#f/16}* A lot of their \"fun\" came from bothering others.',
                       '<25>{#f/13}* As a monster... that was difficult for me to understand.',
                       '<25>{#f/15}* Then... I became Twinkly.'
                    ],
                    [ "<25>{#p/asriel1}{#f/17}* I'd play with these if I still had an interest in toys." ],
                    [ '<25>{#p/asriel1}{#f/20}* Do action figures count as toys?\n* Those are cool.' ]
                 ][Math.min(asrielinter.c_aa_box++, 3)]
               : world.darker
               ? [ '<32>{#p/basic}* A box of model starships.' ]
               : [
                    "<32>{#p/basic}* It's a box of perfectly in- tact model starships.",
                    '<33>{#p/basic}* Smells like old-fashioned glue.'
                 ],
         c_aa_frame: () =>
            SAVE.data.b.svr
               ? [ [ "<25>{#p/asriel1}{#f/23}* ... it's still here..." ], [ '<25>{#p/asriel1}{#f/22}* ...' ] ][
                    Math.min(asrielinter.c_aa_frame++, 1)
                 ]
               : SAVE.data.b.oops
               ? [ "<32>{#p/basic}* It's a hand-drawn image." ]
               : [ "<32>{#p/basic}* It's a hand-drawn image...", '<32>* An image of the family.' ],
         c_aa_paper: () =>
            SAVE.data.b.svr
               ? [ '<32>{#p/human}* (You roll the crayon back and forth underneath your hand.)' ]
               : world.darker
               ? [ '<33>{#p/basic}* A stack of papers and a crayon.' ]
               : [ '<32>{#p/basic}* Along with a stack of papers, you find the elusive blue crayon.' ],
         c_aa_deathbed: () =>
            SAVE.data.b.svr
               ? [
                    [ '<25>{#p/asriel1}{#f/13}* ...' ],
                    [
                       "<25>{#p/asriel1}{#f/23}* ... it's okay, Frisk.",
                       "<25>{#f/13}* Even if they don't come back...",
                       "<25>{#f/17}* We'll still remember them for what they did in the end."
                    ],
                    [ '<25>{#p/asriel1}{#f/13}* Frisk...', '<25>{#f/17}* I know we have something better to do.' ]
                 ][Math.min(asrielinter.c_aa_deathbed++, 2)]
               : world.darker
               ? [ "<32>{#p/basic}* It's just another bed." ]
               : SAVE.data.b.oops
               ? [ "<32>{#p/basic}* There's definitely nothing special about this bed." ]
               : [ '<32>{#p/basic}* My bed.' ],
         
         c_aa_chair: () =>
            SAVE.data.b.svr
               ? [ '<32>{#p/human}* (You appreciate the tiny chair for being able to hold someone so large.)' ]
               : world.darker
               ? [ "<32>{#p/basic}* It's a diary-writing chair." ]
               : [ "<32>{#p/basic}* It's Asgore's favorite diary-writing chair." ],
         c_aa_bed: () =>
            SAVE.data.b.svr
               ? [ '<32>{#p/human}* (The bed seems to be way too large for you.)' ]
               : world.darker
               ? [ "<32>{#p/basic}* It's a king-sized bed." ]
               : [ "<32>{#p/basic}* It's a king-sized bed.\n* Literally." ],
         c_aa_diary: pager.create(
            0,
            ...CosmosUtils.populate(
               9,
               i => () =>
                  SAVE.data.b.svr
                     ? [ '<32>{#p/human}* (The diary seems to outline important events in relation to Asgore.)' ]
                     : world.genocide || world.runaway
                     ? [ '<32>{#p/human}* (You try to open the diary, but the pages are completely blacked out.)' ]
                     : SAVE.data.n.plot === 72
                     ? [
                          '<32>{#p/human}* (You look to the newly-written diary entry.)',
                          '<32>{#p/asgore}* \"At last, monsterkind has been set free.\"',
                          '<32>* \"Frisk, along with the six other human children who came here, have saved us all.\"',
                          '<32>* \"Dr. Alphys started scanning for humans beyond the outpost, but could not find them.\"',
                          '<32>* \"In fact, she could not locate a single human starship or base in the galaxy.\"',
                          '<32>* \"This is rather surprising.\"\n* \"Did something happen to the human race as a whole?\"',
                          '<32>* \"Or have they simply abandoned the galaxy, forgetting us in the process?\"',
                          '<32>* \"Perhaps Frisk, or one of the other humans would know the answer.\"',
                          '<32>* \"Regarding the other humans, they have been adopted by other monsters.\"',
                          '<32>* \"From what one of them has told me, their ordeal in the archive was a tragedy.\"',
                          '<32>* \"As a result, Alphys and I were careful to select worthy candidates for adoption.\"',
                          '<32>* \"Regardless of what happens now, we can be happy that they are alive.\"',
                          '<32>* \"After what took place, I am not sure a different group of humans would have survived.\"'
                       ]
                     : [
                          [
                             '<32>{#p/human}* (You look to the bookmarked diary entry.)',
                             '<32>{#p/asgore}* \"Asgore\'s diary, K-516.01\"',
                             '<32>* \"In these trying times, I have nobody to turn to but myself.\"',
                             '<32>* \"Perhaps the pages of a diary would absorb the pain.\"',
                             '<32>* \"I feel many things.\"',
                             '<32>* \"Anger, towards humanity for what they have done to us, and now to my children.\"',
                             '<32>* \"Guilt, for the way in which I reacted to this tragedy.\"',
                             '<32>* \"Sorrow, because I refused to believe life could be so cruel.\"',
                             '<32>* \"Even after the homeworld\'s destruction, the thought of having a family gave me hope.\"',
                             '<32>* \"But there is no denying what has happened.\"',
                             '<32>* \"No matter how many times I review the shuttle\'s logs, the conclusion is the same.\"',
                             '<32>* \"My children died in vain.\"',
                             '<32>{#p/basic}* The other pages seem to follow chronologically from here.'
                          ],
                          [
                             '<32>{#p/human}* (You look to the next entry.)',
                             '<32>{#p/asgore}* \"Asgore\'s diary, K-516.02\"',
                             '<32>* \"Gerson came to visit today.\"',
                             '<32>* \"He spoke about his time on the planetary council.\"',
                             '<32>* \"About leaving his family, and the responsibility he placed upon himself.\"',
                             '<32>* \"Something in his story resonated with me.\"',
                             '<32>* \"I should really put away the diary and console in him.\"'
                          ],
                          [
                             '<32>{#p/human}* (You look to the next entry.)',
                             '<32>{#p/asgore}* \"Asgore\'s diary, K-524.10\"',
                             '<32>* \"The first human since $(name) has arrived on the outpost today.\"',
                             '<32>* \"Although the disdain for humanity has quieted down over the years...\"',
                             '<32>* \"Much of it still lingers, buried under the surface.\"',
                             '<32>* \"Thomas and I are doing our best to ensure their safety, but it is a difficult task.\"',
                             '<32>* \"Many still cling to those terrible words I uttered all those years ago.\"',
                             '<32>* \"They would not hesitate to kill the human, regardless of their age.\"',
                             '<32>* \"There is only so much we can do from the Citadel\'s walls.\"'
                          ],
                          [
                             '<32>{#p/human}* (You look to the next entry.)',
                             '<32>{#p/asgore}* \"Asgore\'s diary, K-535.04\"',
                             '<32>* \"Another human has arrived.\"',
                             '<32>* \"They seem to be familiar with Gerson, as well as other former council members.\"',
                             '<32>* \"Now, I ask myself.\"\n* \"How?\"',
                             '<32>* \"Have they been raised on stories of the war?\"',
                             '<32>* \"Were they sent here in the hopes of learning more about us?\"',
                             '<32>* \"As per the settlement, only human military personnel are privy to our location.\"',
                             '<32>* \"For the sake of our safety, I hope this is still the case.\"'
                          ],
                          [
                             '<32>{#p/human}* (You look to the next entry.)',
                             '<32>{#p/asgore}* \"Asgore\'s diary, K-549.07\"',
                             '<32>* \"Since I last wrote to this diary, another child has crash-landed.\"',
                             '<32>* \"Thomas and I have the process of guiding them down to a science now.\"',
                             '<32>* \"With each new arrival, the flame of my hope grows stronger.\"',
                             '<32>* \"I am starting to believe that we may indeed regain our freedom one day.\"',
                             '<32>* \"That is, if the builder bots do not take over first.\"'
                          ],
                          [
                             '<32>{#p/human}* (You look to the next entry.)',
                             '<32>{#p/asgore}* \"Asgore\'s diary, K-567.11\"',
                             '<32>* \"Today I must say goodbye to the second of two children to arrive this year.\"',
                             '<32>* \"The first entered the archive immediately, but the other chose to stay for a while.\"',
                             '<32>* \"I have learned a lot from them.\"',
                             '<32>* \"Being as young as they are, holding a conversation was difficult.\"',
                             '<32>* \"Their insights, however, helped me come to terms with $(name)\'s actions in the past.\"',
                             '<32>* \"Our species may be more alike than I realized.\"'
                          ],
                          [
                             '<32>{#p/human}* (You look to the next entry.)',
                             '<32>{#p/asgore}* \"Asgore\'s diary, K-587.03\"',
                             '<32>* \"The sixth human since $(name) came through a few days ago.\"',
                             '<32>* \"I write not due to their arrival, but because the professor died shortly after.\"',
                             '<32>* \"Thomas Nue Roman.\"\n* \"Your funeral service will take place in a few days.\"',
                             '<32>* \"It is telling that even the brash younglings in training prepared speeches for you.\"',
                             '<32>* \"Your work has impacted every life on this outpost, and you will not be forgotten.\"'
                          ],
                          [
                             '<32>{#p/human}* (You look to the next entry.)',
                             '<32>{#p/asgore}* \"Asgore\'s diary, K-615.09\"',
                             '<32>* \"Today, on the anniversary of that awful tragedy, one last human has crash-landed.\"',
                             '<32>* \"Suddenly, the prospect of freedom is intimidating.\"',
                             '<32>* \"Was he right in thinking we would become complacent?\"',
                             '<32>* \"For nearly two centuries, we have been trapped within a force field.\"',
                             '<32>* \"Where would we go?\"',
                             '<32>* \"What would we do next?\"',
                             '<32>* \"How would we survive on our own?\"',
                             '<32>* \"Hopefully those kinds of questions will soon be answered.\"'
                          ],
                          [ '<32>{#p/human}* (There are no more written entries here.)' ]
                       ][i]
            )
         ),
         c_aa_bureau: () =>
            SAVE.data.b.svr
               ? [
                    '<32>{#p/human}* (You look inside the bureau...)',
                    ...[
                       [ '<25>{#p/asriel1}{#f/19}* Looks like the humans got their clothes back.' ],
                       [ '<25>{#p/asriel1}{#f/19}* ...', '<25>* I regret ever wondering why they were in here.' ],
                       [
                          '<25>{#p/asriel1}{#f/19}* I mean, it makes sense.',
                          "<25>* Knowing how long they'd be in the archive.",
                          '<25>* So... yeah.'
                       ],
                       [ '<25>{#p/asriel1}{#f/19}* ...' ]
                    ][Math.min(asrielinter.c_aa_bureau++, 3)]
                 ]
               : SAVE.data.n.plot === 72 || world.genocide || world.bad_robot || world.trueKills > 29
               ? [
                    '<32>{#p/human}* (You look inside the bureau...)',
                    '<32>{#p/basic}* Seems to have been recently emptied of its clothes.'
                 ]
               : [
                    '<32>{#p/human}* (You look inside the bureau...)',
                    "<32>{#p/basic}* It's a collection of wildly- varying children's clothes."
                 ],
         c_aa_macaroni: () =>
            SAVE.data.b.svr
               ? [
                    [
                       '<25>{#p/asriel1}{#f/17}* ... do you like it?',
                       '<25>{#f/13}* This Starling flower was... the last thing I made for Dad.'
                    ],
                    [
                       "<25>{#p/asriel1}{#f/17}* What I can say for certain is... $(name) wasn't a fan.",
                       '<25>{#f/13}* They said \"stop making that stupid thing and get over here...\"',
                       '<25>{#f/22}* That was the day we...',
                       '<25>{#f/15}* ... you know.'
                    ],
                    [ '<25>{#p/asriel1}{#f/20}* Always remember the Starling flower made of faux-macaroni.' ]
                 ][Math.min(asrielinter.c_aa_macaroni++, 2)]
               : SAVE.data.b.oops
               ? [ '<32>{#p/basic}* A Starling flower made of dried, glued-together foodstuff.' ]
               : [ '<32>{#p/basic}* It\'s Asriel\'s hand-made Starling flower.\n* It says \"For King Dad.\"' ],
         c_aa_underwear: () =>
            SAVE.data.n.plot === 72 && !SAVE.data.b.svr && !world.runaway
               ? []
               : [
                    '<32>{#p/human}* (You peek inside.)',
                    ...(SAVE.data.b.svr
                       ? [
                            [ "<25>{#p/asriel1}{#f/17}* Frisk...\n* You're staring..." ],
                            [ '<25>{#p/asriel1}{#f/13}* Frisk...\n* Please...' ],
                            [ '<25>{#p/asriel1}{#f/15}* Frisk...\n* Why...' ],
                            [ '<25>{#p/asriel1}{#f/15}* ...' ]
                         ][Math.min(asrielinter.c_aa_underwear++, 3)]
                       : world.genocide || world.bad_robot
                       ? SAVE.data.b.c_state_switch1
                          ? [ '<32>{#p/basic}* Nothing left for you here.' ]
                          : [
                               "<32>{#p/basic}* There's a switch in here...",
                               '<32>{#p/human}{#c.switch1}* (You pressed the switch.)'
                            ]
                       : world.darker
                       ? [ "<32>{#p/basic}* It's just an underwear drawer." ]
                       : [
                            '<32>{#p/basic}* Preposterous!',
                            "<33>{#p/basic}* It's Asgore's underwear drawer.\n* Surprisingly clean.",
                            '<33>{#p/basic}* ... most of the items are pink, hand-knit, and have \"Mr. Dad Guy\" embroidered at the top.'
                         ])
                 ]
      }
   },
   b_opponent_alphys: {
      artifact: [ '<32>{#p/human}* （艾菲斯看了一眼，随即收回了目光。）' ],
      name: '* 艾菲斯',
      gotcha: [ '<20>{*}{#p/alphys}{#e/alphys/19}往哪里跑？{^30}{%}' ],
      act_check: [ '<32>{#p/asriel2}* 艾菲斯。\n* 皇家科学员。' ],
      act_asriel: (i: number) => [
         ...[
            [
               '<32>{#p/asriel2}* 终于，我可以稍微驾驭\n  这副新身体的力量了...',
               "<32>{#p/asriel2}* 就让她好好瞧瞧我真正的力量吧。"
            ],
            [ "<32>{#p/asriel2}* 记住，连着两次施放同一种法术的话，\n  魔力会减弱。" ],
            [ '<32>{#p/asriel2}* 记住，混合施放多种法术。' ],
            []
         ][Math.min(SAVE.flag.n.ga_asrielAssist++, 3)],
         choicer.create(
            '* （艾斯利尔应该施放什么法术？）',
            `${i === 0 ? '{@fill=#808080}' : ''}夜幕{@fill=#fff}`,
            `${i === 1 ? '{@fill=#808080}' : ''}至日{@fill=#fff}`,
            `${i === 2 ? '{@fill=#808080}' : ''}晚星{@fill=#fff}`,
            `${i === 3 ? '{@fill=#808080}' : ''}月蚀{@fill=#fff}`
         )
      ],
      act_asriel_text: [
         [ '<32>{#p/human}* （艾斯利尔将手放在你的额头上，\n  将一股力量注入你的身体。）' ],
         [ '<32>{#p/human}* （艾斯利尔将手放在你的额头上，\n  低语了一段古老的咒文。）' ],
         [ '<32>{#p/human}* （艾斯利尔将手放在你的额头上，\n  唱了一首古老的摇篮曲。）' ],
         [ '<32>{#p/human}* （艾斯利尔将手放在你的额头上，\n  在你周围筑起一道保护光环。）' ]
      ],
      act_asriel_confirm: [
         [ '<32>{#p/story}* 本回合，你的专注力提升！' ],
         [ '<32>{#p/story}* 本回合，你的无敌帧延长！' ],
         [ '<32>{#p/story}* 本回合，你的自愈力提升！' ],
         [ '<32>{#p/story}* 本回合，你的防御力提升！' ]
      ],
      epiphaNOPE: [ '<20>{#p/alphys}{#e/alphys/19}想得美。' ],
      statusX: [ '<32>{#p/asriel2}* ...' ],
      statusY: [ "<32>{#p/asriel2}* 她快死了！\n* 继续攻击！" ],
      status1a: [ '<32>{#p/asriel2}* 艾菲斯...' ],
      status1r: [ '<32>{#p/asriel2}* 你知道该干什么。' ],
      status1b: [ "<33>{#p/asriel2}* 她竟然没逃跑...\n* 有意思。" ],
      status1c: [ '<32>{#p/asriel2}* 你知道该干什么吧。' ],
      status1d: [ "<32>{#p/asriel2}* 嘿...\n* 你看她是不是有点累了？" ],
      status2a: [ "<32>{#p/asriel2}* 怎么了，艾菲斯？\n* 撑不住了？" ],
      status2r1: [ '<32>{#p/asriel2}* 呃，再听一遍吧...' ],
      status2b: [ '<32>{#p/asriel2}* 来，让我们好好听听\n  你的凄惨故事。' ],
      status2c: [ "<32>{#p/asriel2}* 你竟然没贯彻逃跑精神，\n  我可真惊讶呢。" ],
      status2d: [ '<32>{#p/asriel2}* 故事真精彩呢，“爱妃死”博士。' ],
      status2e: [ '<32>{#p/asriel2}* ...？' ],
      status2r2: [ "<32>{#p/asriel2}* 准备好，战斗形势要变了。" ],
      status3a: [ '<32>{#p/asriel2}* 好... 形势严峻起来了。' ],
      status3b: [ "<32>{#p/asriel2}* ...看来艾菲斯放弃防御了。\n* 抓住这个机会！" ],
      status3c: [ '<32>{#p/asriel2}* 坚持住，$(name)...' ],
      turnTalk1a: [
         "<20>{#p/alphys}{#e/alphys/19}要是连一下都扛不住，\n我怎么可能来这？",
         '<20>{#p/alphys}{#e/alphys/23}看来，\n是高估你们的智商了。'
      ],
      turnTalk1b: [
         '<20>{#p/alphys}{#e/alphys/19}无话可说？',
         "<20>{#e/alphys/18}...那就我自己说，\n你们爱听不听。"
      ],
      turnTalk1c: [
         "<20>{#p/alphys}{#e/alphys/19}对，\n就是我，艾菲斯。",
         '<20>{#e/alphys/18}因为，\n只有我，亲眼目睹了\n你们的一举一动。',
         '<20>{#e/alphys/19}也只有我，\n才清楚你们潜在的力量\n有多么可怕。'
      ],
      turnTalk1d: [
         '<20>{#p/alphys}{#e/alphys/19}尽情挥霍\n你那些珍贵的物品。',
         "<20>{#e/alphys/18}就那些东西，唬不到我。"
      ],
      turnTalk2: [
         "<20>{#p/alphys}{#e/alphys/19}...人类，\n我研究你们文化很多年了。",
         "<20>{#e/alphys/19}你会担下所有战斗，\n我一点也不意外。"
      ],
      turnTalk3: [
         '<20>{#p/alphys}{#e/alphys/18}而你呢，艾斯利尔...\n你利用人类，\n拿伙伴当保护伞。',
         "<20>{#e/alphys/52}为了什么呢？\n你怕一旦自己动手，\n偷来的灵魂就会破碎？"
      ],
      turnTalk4: [
         "<20>{#p/alphys}{#e/alphys/51}还是说，\n你怕自己被人类淡忘，\n活时视如草芥，\n死后弃若敝履？",
         "<20>{#e/alphys/17}呵，\n还挺有诗意的。"
      ],
      turnTalk5: [
         '<20>{#p/alphys}{#e/alphys/16}但是，我来这教训你，\n绝不是因为你想\n找人类寻求安慰，',
         '<20>{#e/alphys/52}而是因为...',
         '<20>{#e/alphys/19}我亲身体会到\n挚友离去，无依无靠\n那种孤独的滋味。'
      ],
      turnTalk6: [
         "<20>{#p/alphys}{#e/alphys/23}但你俩不会懂的，\n对吧？",
         "<20>{#e/alphys/19}你们两个罪恶滔天，\n谁也拦不住，\n怎么可能亲身体会\n我们的痛苦呢？",
         '<20>{#e/alphys/22}怎么可能呢？'
      ],
      turnTalk7: [
         '<20>{#p/alphys}{#e/alphys/19}罢了，你们想怎样，\n我都不在乎了。',
         '<20>{#e/alphys/52}...这么看，\n我可真傻...',
         '<20>{#e/alphys/51}之前居然还妄想\n能拉你一把，\n让你浪子回头。'
      ],
      turnTalk8: [
         '<20>{#p/alphys}{#e/alphys/52}毕竟，\n是我给了那星星生命...',
         "<20>{#e/alphys/51}出了事，\n也该我来负责。"
      ],
      turnTalk9: [
         '<20>{#p/alphys}{#e/alphys/19}...不过，\n现在我懂你们\n为什么执迷不悟了。',
         '<20>{#e/alphys/18}我没猜错的话，\n你们中肯定有人\n拥有那股力量...',
         '<20>{#e/alphys/19}那股可以回溯时间，\n逆天改命的力量...'
      ],
      turnTalk10: [
         "<20>{#p/alphys}{#f/alphys/18}果真如此的话，\n那其他人真得小心了。",
         "<21>{#e/alphys/23}如果一个人能为所欲为，\n还不用承担任何过错，\n那他怎么可能\n在乎别人的感受呢？"
      ],
      turnTalk11: [ '<20>{#z1}{#p/alphys}{#e/alphys/21}...', '<21>{#e/alphys/39}让我歇歇。' ],
      broken: [ '<20>{*}{#p/alphys}{#e/alphys/45}谢了。{^20}{%}' ],
      turnTalk12: [
         "<20>{#z2}{#p/alphys}{#e/alphys/7}安黛因牺牲后，\n我不知道该怎么办。",
         '<20>{#e/alphys/46}我马上逃离了实验室，\n希望逃得越远越好。'
      ],
      turnTalk13: [
         '<20>{#p/alphys}{#e/alphys/47}可是越逃跑，\n我就对自己越失望。',
         '<20>{#e/alphys/48}难道我就这么袖手旁观，\n眼睁睁看着我族同胞\n一个个死去？'
      ],
      turnTalk14: [
         '<20>{#p/alphys}{#e/alphys/21}...这未免太绝情了。',
         '<21>{#e/alphys/39}更何况...',
         '<20>{#e/alphys/45}我再怎么自责\n都没法改变现状。'
      ],
      turnTalk15: [
         "<20>{#p/alphys}{#e/alphys/39}安黛因说，\n你们要杀死\n这星河中的每个人...",
         "<20>{#e/alphys/40}但其实，\n你们的野心不止如此，\n对吧？"
      ],
      turnTalk16: [
         '<20>{#z3}{#p/alphys}{#e/alphys/48}...',
         "<20>{#e/alphys/47}让那星星复活是我的错。\n但你们的罪孽，\n跟我一分钱关系没有。",
         "<20>{#e/alphys/38}我管你们打的什么算盘，\n都得给我付出代价。",
         '<20>{*}{#z4}{#e/alphys/54}哪怕...{^10}{%}',
         '<20>{*}{#e/alphys/25}我会因此疯掉！{^10}{%}'
      ],
      turnTalk17: [ '<20>{#p/alphys}{#e/alphys/25}接招！！' ],
      turnTalk18: [ '<20>{#p/alphys}{#e/alphys/25}再来！！' ],
      turnTalk19: [ '<20>{#p/alphys}{#e/alphys/25}再来这招！！' ],
      turnTalk20: [ '<20>{#p/alphys}{#e/alphys/24}哈哈哈...' ],
      turnTalk21: [ '<20>{#p/alphys}{#e/alphys/26}...' ],
      turnTalk22: [ '<20>{#p/alphys}{#e/alphys/27}给我去死！！' ],
      turnTalk23: [ '<20>{#p/alphys}{#e/alphys/27}...' ],
      done0: (b: boolean) =>
         b
            ? [ '<20>{*}{#p/alphys}{#e/alphys/42}不...{^40}{%}', '<20>{*}{#e/alphys/43}这么快我就...{^40}{%}' ]
            : [ '<20>{*}{#p/alphys}{#e/alphys/42}不...{^40}{%}', '<20>{*}{#e/alphys/43}你们...{^40}{%}' ],
      done1: (b: boolean) =>
         b
            ? [ "<20>{*}没-没想到你们这么强...{^40}{%}", '<20>{*}我现在明白了，\n与你们为敌...{^40}{%}' ]
            : [ "<20>{*}我是不是...\n快-快要死了？{^40}{%}", '<20>{*}尽了全力，还是...{^40}{%}' ],
      done2: (b: boolean) =>
         b ? [ '<20>{*}{#p/alphys}根本毫无胜算。{^40}{%}' ] : [ "<20>{*}{#p/alphys}艾斯戈尔，我对不起你。{^40}{%}" ]
   },
   b_opponent_archive1: {
      name: () => (battler.volatile[0].sparable ? '* 托丽尔' : '* 546f7269656c'),
      status0: [ '<32>{#p/human}* (546f7269656c now stands before you.)' ],
      status1: [ '<32>{#p/human}* (546f7269656c seems intent on following a routine.)' ],

      act_dinnertimeX: [ '<32>{#p/human}* (But you have already eaten your dinner.)' ],
      dinnerTalk: [ '<11>{#p/toriel}Eat {@fill=#42fcff}{@mystify=slowly}slowly{@mystify=}{@fill=#ffffff}, my child.' ],
      dinnerStatus: [ '<32>{#p/human}* (546f7269656c would like to share something with you.)' ],

      act_storytimeX: [ '<32>{#p/human}* (But you have already been read a story.)' ],
      act_storytimeE: [ '<32>{#p/human}* (But 546f7269656c was not yet ready to read you a story.)' ],
      storyTalk: [
         '<11>{#p/toriel}Once, there was a {@fill=#42fcff}{@mystify=monster}monster{@mystify=}{@fill=#ffffff}...'
      ],
      storyStatus: [ '<32>{#p/human}* (546f7269656c has one more thing to do.)' ],

      act_bedtimeX: [ '<32>{#p/human}* (But you have already been put to sleep.)' ],
      act_bedtimeE: [ '<32>{#p/human}* (But 546f7269656c was not yet ready to put you to sleep.)' ],
      bedTalk: [ '<11>{#p/toriel}Good night, my child.' ],
      bedStatus: [ '<32>{#p/human}* (Toriel has served her purpose in this world.)' ],

      act_talkE: [ "<32>{#p/human}* (But 546f7269656c's wasn't finished with her routine.)" ],
      act_talkN: [ '<32>{#p/human}* (And Toriel shared her wisdom before fading away.)' ],

      act_puzzlehelp: [ '<32>{#p/human}* (But there was no puzzle left to solve.)' ],
      puzzlehelpTalk1: [
         '<11>{#p/toriel}Are you {@fill=#42fcff}{@mystify=hungry}hungry{@mystify=}{@fill=#ffffff}, my child?'
      ],
      puzzlehelpTalk2: [
         '<11>{#p/toriel}Are you {@fill=#42fcff}{@mystify=restless}restless{@mystify=}{@fill=#ffffff}, my child?'
      ],
      puzzlehelpTalk3: [
         '<11>{#p/toriel}Are you {@fill=#42fcff}{@mystify=sleepy}sleepy{@mystify=}{@fill=#ffffff}, my child?'
      ]
   },
   b_opponent_archive2: {
      name: () => (battler.volatile[0].sparable ? '* 葛森' : '* 476572736f6e'),
      status0: [ '<32>{#p/human}* (476572736f6e stands opposite the training area.)' ],
      status1: [ '<32>{#p/human}* (476572736f6e awaits your first move.)' ],

      act_challengeX: [ '<32>{#p/human}* (But you have already risen to the challenge.)' ],
      act_challengeR: [ '<32>{#p/human}* (But you have not yet rested after your previous failure.)' ],
      challengeTalk: [
         '<11>{#p/basic}It takes {@fill=#ff993d}{@mystify=courage}courage{@mystify=}{@fill=#ffffff} to face your fears.'
      ],

      challengeFail: [
         '<11>{*}{#p/basic}Failure!\nYou must stay {@fill=#ff993d}{@mystify=focused}focused{@mystify=}{@fill=#ffffff}!{^30}{%}'
      ],
      failStatus: [ "<32>{#p/human}* (476572736f6e thinks it's time for a break.)" ],
      successStatus: [ '<32>{#p/human}* (Gerson has served his purpose in this world.)' ],

      act_restA: [ '<32>{#p/human}* (But you were not in need of rest.)' ],
      restTalk: [
         '<11>{#p/basic}A good {@fill=#ff993d}{@mystify=hero}hero{@mystify=}{@fill=#ffffff} knows their limits.'
      ],
      restStatus: [ '<32>{#p/human}* (476572736f6e awaits your next move with anticipation.)' ],

      act_handshakeE: [ "<32>{#p/human}* (But 476572736f6e's training was not yet complete.)" ],
      act_handshakeN: [ '<32>{#p/human}* (And Gerson taught you his favorite handshake before fading away.)' ],

      act_taunt: [ '<32>{#p/human}* (But your gesture seems to have been ignored.)' ],

      act_advice: [ '<32>{#p/human}* (But there was no advice left to hear.)' ],
      adviceTalk1: [
         '<11>{#p/basic}You must not show {@fill=#ff993d}{@mystify=hesitation}hesitation{@mystify=}{@fill=#ffffff}.'
      ],
      adviceTalk2: [
         '<11>{#p/basic}To learn is to face {@fill=#ff993d}{@mystify=adversity}adversity{@mystify=}{@fill=#ffffff}.'
      ],
      adviceTalk3: [
         '<11>{#p/basic}The key to success is {@fill=#ff993d}{@mystify=humility}humility{@mystify=}{@fill=#ffffff}.'
      ]
   },
   b_opponent_archive3: {
      name: () => (battler.volatile[0].sparable ? '* Prof. Roman' : '* 50726f662e20526f6d616e'),
      status0: [ '<32>{#p/human}* (50726f662e20526f6d616e takes control of the situation.)' ],
      status1: [ '<32>{#p/human}* (50726f662e20526f6d616e would like to run some tests on you.)' ],

      act_object: [ '<32>{#p/human}* (But your objection was swiftly overruled.)' ],

      act_testX: [ '<32>{#p/human}* (But you have already completed this test.)' ],
      testTalkA: [ '<11>Please, remain {#p/basic}{@fill=#003cff}{@mystify=still}still{@mystify=}{@fill=#ffffff}...' ],
      testTalkB: [ '<11>{#p/basic}The {@fill=#003cff}{@mystify=fun}fun{@mystify=}{@fill=#ffffff} has only just begun.' ],
      testTalkC: [
         '<11>{#p/basic}Behold, the {@fill=#003cff}{@mystify=power}power{@mystify=}{@fill=#ffffff} of scientific endeavour.'
      ],
      testStatus1: [ '<32>{#p/human}* (50726f662e20526f6d616e is ready to begin the next test.)' ],
      testStatus2: [ '<32>{#p/human}* (Professor Roman has served his purpose in this world.)' ],

      act_notesE: [ "<32>{#p/human}* (But 50726f662e20526f6d616e wasn't ready to exchange notes.)" ],
      act_notesN: [ '<32>{#p/human}* (And Professor Roman exchanged notes before fading away.)' ]
   },
   b_opponent_archive4: {
      name: () => (battler.volatile[0].sparable ? '* 纳普斯特' : '* 4e6170737461626c6f6f6b'),
      status0: [ '<32>{#p/human}* (4e6170737461626c6f6f6b is here by their computer.)' ],
      status1: [ '<32>{#p/human}* (4e6170737461626c6f6f6b is looking for a new sound.)' ],

      act_sampleX: [ '<32>{#p/human}* (But you already have the required samples.)' ],
      sampleTalk: [
         '<11>{#p/napstablook}this should do {@fill=#d535d9}{@mystify=nicely}nicely{@mystify=}{@fill=#ffffff}...'
      ],
      sampleStatus: [ '<32>{#p/human}* (4e6170737461626c6f6f6b is ready to start composing.)' ],

      act_composeX: [ '<32>{#p/human}* (But you have already finished composing the track.)' ],
      act_composeE: [ '<32>{#p/human}* (But you have not yet found any samples to compose with.)' ],
      composeTalk: [
         "<11>{#p/napstablook}let's see how this {@fill=#d535d9}{@mystify=plays}plays{@mystify=}{@fill=#ffffff} out..."
      ],

      composeFail: [
         '<11>{*}{#p/napstablook}oh...\nback to the {@fill=#d535d9}{@mystify=drawing}drawing{@mystify=}{@fill=#ffffff} board...{^30}{%}'
      ],
      failStatus: [ '<32>{#p/human}* (4e6170737461626c6f6f6b would like to try that again.)' ],
      composeStatus: [ '<32>{#p/human}* (4e6170737461626c6f6f6b is ready to start mixing.)' ],

      act_mixX: [ '<32>{#p/human}* (But you have already finished mixing the track.)' ],
      act_mixE: [ '<32>{#p/human}* (But you have not yet composed a track to mix.)' ],
      mixTalk: [
         '<11>{#p/napstablook}remember to keep the {@fill=#d535d9}{@mystify=balance}balance{@mystify=}{@fill=#ffffff} straight...'
      ],

      mixFail: [
         "<11>{*}{#p/napstablook}oh...\nlooks like we'll need a {@fill=#d535d9}{@mystify=remix}remix{@mystify=}{@fill=#ffffff}...{^30}{%}"
      ],
      successStatus: [ '<32>{#p/human}* (Napstablook has served their purpose in this world.)' ],

      act_secretE: [ "<32>{#p/human}* (But 4e6170737461626c6f6f6b wasn't yet ready to tell you that.)" ],
      act_secretN: [ '<32>{#p/human}* (And Napstablook told you a secret before fading away.)' ],

      act_praise: [ '<32>{#p/human}* (But your kind words fell on invisibly shy ears.)' ]
   },
   b_opponent_archive5: {
      name: () => (battler.volatile[0].sparable ? '* 艾斯戈尔' : '* e889bee696afe68888e5b094'),
      status0: [ '<32>{#p/human}* (4173676f7265 stands tall.)' ],
      status1: [ '<32>{#p/human}* (4173676f7265 only wants one thing from you.)' ],

      act_hugX: [ '<32>{#p/human}* (But there was no need to hug him a second time.)' ],
      hugTalk: [ '<11>{#p/asgore}Thank you, young one.' ],
      hugStatus: [ '<32>{#p/human}* (Asgore has served his purpose in this world.)' ],

      act_promiseE: [ "<32>{#p/human}* (But 4173676f7265 hasn't served his purpose yet.)" ],
      act_promiseN: [ '<32>{#p/human}* (And Asgore made a promise before fading away.)' ]
   },
   b_opponent_asriel: {
      artifact: [ "<32>{#p/human}* （似乎艾斯利尔对它没什么兴趣。）" ],
      refuse: '{*}{#p/event}{#i/3}但是它拒绝了。',
      name: () =>
         battler.volatile[0].container.objects[0]?.metadata.power === true
            ? '§fill=#ff7f7f§§swirl=2/1/1.05§§hue§* 艾斯利尔·逐梦'
            : '* 艾斯利尔·逐梦',
      status0: pager.create(
         0,
         (power = false) =>
            power
               ? [ '<32>{#p/story}* 艾斯利尔准备施放“裂空飞星”。' ]
               : SAVE.data.b.oops
               ? [ "<32>{#p/story}* 这里就是终点了。" ]
               : [ '<32>{#p/basic}* 艾斯利尔...？' ],
         (power = false) =>
            power
               ? [ '<32>{#p/story}* 艾斯利尔准备施放“裂空飞星”。' ]
               : SAVE.data.b.oops
               ? [ "<32>{#p/story}* 这里就是终点了。" ]
               : [ '<32>{#p/basic}* ...' ]
      ),
      act_check: () =>
         SAVE.data.b.oops
            ? [
                 '<32>{#p/story}* 艾斯利尔·逐梦 攻击{^2}\u221e{^1} 防御{^2}\u221e{^1}\n* 藉由哨站灵魂凝心聚力\n  铸成传奇之躯。'
              ]
            : [ '<32>{#p/story}* 艾斯利尔·逐梦 攻击{^2}\u221e{^1} 防御{^2}\u221e{^1}\n* ...' ],
      act_hope: [
         '<32>{#p/human}* （你紧握希望。）\n* （你感觉有一股无形之力\n  保护着身体。）',
         '<32>{#p/story}* 本回合，你的防御力提升！'
      ],
      act_dream: [
         "<32>{#p/human}* （你回想起自己为何站立于此。）\n* （你感觉到自己的伤口\n  正逐渐愈合。）",
         '<32>{#p/story}* 本回合，你的自愈力提升！'
      ],
      act_flirt1: [ '<32>{#p/human}* （你向艾斯利尔调情。）\n* （什么都没发生。）' ],
      act_flirt2: [
         '<32>{#p/human}* （你向艾斯利尔调情。）\n  （又跟他身体里的每个灵魂调情。）',
         '<32>{#p/basic}* 那神情，在艾斯利尔的灵魂深处\n  不停回响...',
         "<32>* ...他手足无措，\n  只能用心去回应你！"
      ],
      act_pet: (count: number) =>
         SAVE.flag.n.pacifist_marker === 8
            ? [ "<32>{#p/human}* （你想摸摸艾斯利尔，\n  但他离你太远了，够不着。）" ]
            : [
                 ...[
                    [ "<32>{#p/human}* （你摸了摸艾斯利尔。）\n* （他好像有点手足无措。）" ],
                    [ "<32>{#p/human}* （你又摸了摸艾斯利尔。）\n* （他更加手足无措了。）" ],
                    [ "<32>{#p/human}* （你捋了捋艾斯利尔的毛。）\n* （艾斯利尔脸红了，避开了你的目光。）" ],
                    [ "<32>{#p/human}* （你揉了揉艾斯利尔的头。）\n* （他竭力掩藏自己的喜悦。）" ],
                    [ "<32>{#p/human}* （你挠了挠艾斯利尔的脖子。）\n* （他很享受，但没表现出来。）" ],
                    [
                       "<32>{#p/human}* （你不停玩弄艾斯利尔的耳朵。）\n* （他十分后悔自己居然乐在其中。）"
                    ],
                    [ "<32>{#p/human}* （你拍了拍艾斯利尔的脊背。）\n* （他开始疑惑你到底想干什么。）" ],
                    [
                       "<32>{#p/human}* （你紧紧搂住了艾斯利尔的腿。）\n* （他被你一连串的亲昵举动\n  吓愣了。）"
                    ],
                    [
                       "<32>{#p/human}* （你捏了捏艾斯利尔的爪子。）\n* （艾斯利尔没有反抗，任由你摆布。）"
                    ],
                    [ "<32>{#p/human}* （你跟艾斯利尔碰了碰鼻。）\n* （艾斯利尔彻底放弃抵抗了。）" ],
                    [ "<32>{#p/human}* （你温柔地抚摸艾斯利尔的脸蛋。）\n* （他似乎想起了某位故人。）" ],
                    [ '<32>{#p/human}* （你继续抚摸艾斯利尔。）\n* （他轻声叹息。）' ],
                    [ '<32>{#p/human}* （你继续抚摸艾斯利尔。）\n* （他轻声叹息。）' ]
                 ][count],
                 "<32>{#p/story}* 本回合，艾斯利尔的攻击力下降！"
              ],
      turnTalk1: (fluff: boolean) =>
         fluff
            ? [
                 '<20>{*}{#p/asriel3}{#e/asriel/3}现在...',
                 "<20>{*}{#p/asriel3}{#e/asriel/6}我... 再也不想\n毁灭这前哨站了。"
              ]
            : [
                 '<20>{*}{#p/asriel3}{#e/asriel/3}现在...',
                 "<20>{*}{#p/asriel3}{#e/asriel/6}我再也不想\n毁灭这前哨站了。"
              ],
      status1: () =>
         SAVE.data.b.oops
            ? [ '<32>{#p/story}* 艾斯利尔准备施放“怒吼风暴”。' ]
            : [ "<32>{#p/basic}* 可你不是... 已经..." ],
      turnTalk2: (fluff: boolean) =>
         fluff
            ? [
                 '<20>{*}{#p/asriel3}{#e/asriel/3}等-等我打败了你，\n重新掌控整条时间线...',
                 '<20>{*}{#p/asriel3}{#e/asriel/2}我只想...\n把一切倒回原点。'
              ]
            : [
                 '<20>{*}{#p/asriel3}{#e/asriel/3}等我打败了你，\n重新掌控整条时间线...',
                 '<20>{*}{#p/asriel3}{#e/asriel/2}我只想\n把一切倒回原点。'
              ],
      status2: () =>
         SAVE.data.b.oops
            ? [ '<32>{#p/story}* 艾斯利尔即将召唤“泰坦巨刃”。' ]
            : [ '<32>{#p/basic}* 你怎么可能...' ],
      turnTalk3: (fluff: boolean) =>
         fluff
            ? [
                 "<20>{*}{#p/asriel3}{#e/asriel/3}你的旅程...\n大家的记忆...",
                 "<20>{*}{#p/asriel3}{#e/asriel/2}我-我会将它们\n全部抹除！"
              ]
            : [
                 "<20>{*}{#p/asriel3}{#e/asriel/3}你的旅程...\n大家的记忆...",
                 "<20>{*}{#p/asriel3}{#e/asriel/2}我会将它们全部抹除！"
              ],
      status3: () =>
         SAVE.data.b.oops ? [ '<32>{#p/story}* 艾斯利尔正在蓄力“混沌冲击”。' ] : [ '<32>{#p/basic}* ...' ],
      turnTalk4: (fluff: boolean) =>
         fluff
            ? [ '<20>{*}{#p/asriel3}{#e/asriel/0}之后... 让一切...\n重新来过。' ]
            : [ '<20>{*}{#p/asriel3}{#e/asriel/0}之后，让一切重新来过。' ],
      status4: () =>
         SAVE.data.b.oops
            ? [ '<32>{#p/story}* 艾斯利尔准备施放“怒吼风暴”。' ]
            : [ '<32>{#p/basic}* ...嘿...\n* 我觉得，托丽尔之前肯定也是\n  这么想的。' ],
      turnTalk5: (fluff: boolean) =>
         fluff
            ? [
                 '<20>{*}{#p/asriel3}{#e/asriel/1}而且，你-你知道\n最棒的部分是什么吗？',
                 "<20>{*}{#p/asriel3}{#e/asriel/0}这一切，\n都是你亲手铸成的。"
              ]
            : [
                 '<20>{*}{#p/asriel3}{#e/asriel/1}而且，你知道\n最棒的部分是什么吗？',
                 "<20>{*}{#p/asriel3}{#e/asriel/0}这一切，\n都是你亲手铸成的。"
              ],
      status5: () =>
         SAVE.data.b.oops ? [ '<32>{#p/story}* 艾斯利尔正在蓄力“混沌冲击”。' ] : [ '<32>{#p/basic}* ...可是，我...' ],
      turnTalk6: (fluff: boolean) =>
         fluff
            ? [ "<20>{*}{#p/asriel3}{#e/asriel/3}那时...\n你-你将再度成为\n我的手下败将。" ]
            : [ "<20>{*}{#p/asriel3}{#e/asriel/3}那时，你将再度成为\n我的手下败将。" ],
      status6: () =>
         SAVE.data.b.oops ? [ '<32>{#p/story}* 艾斯利尔准备施放“裂空飞星”。' ] : [ '<32>{#p/basic}* ...' ],
      turnTalk7: (fluff: boolean) =>
         fluff ? [ '<20>{*}{#p/asriel3}{#e/asriel/4}永-永远别想赢我。' ] : [ '<20>{*}{#p/asriel3}{#e/asriel/4}永远别想赢我。' ],
      status7: () =>
         SAVE.data.b.oops ? [ '<32>{#p/story}* 艾斯利尔即将召唤“泰坦巨刃”。' ] : [ '<32>{#p/basic}* 除非...' ],
      turnTalk8: (fluff: boolean) =>
         fluff
            ? [ '<20>{*}{#p/asriel3}{#e/asriel/2}永远... 别-别想赢我！' ]
            : [ '<20>{*}{#p/asriel3}{#e/asriel/2}永远，别想赢我！' ],
      status8: () =>
         SAVE.data.b.oops
            ? [ '<32>{#p/story}* 艾斯利尔准备施放“歼星爆冲”。' ]
            : [ '<32>{#p/basic}* ...该死...' ],
      turnTalk9: (fluff: boolean) =>
         30 <= SAVE.data.n.bully
            ? fluff
               ? [ '<20>{*}{#p/asriel3}{#e/asriel/3}因为... 你-你想证明\n自己“实力出众”。' ]
               : [ '<20>{*}{#p/asriel3}{#e/asriel/3}因为，你想证明\n自己“实力出众”。' ]
            : fluff
            ? [ '<20>{*}{#p/asriel3}{#e/asriel/3}因为...\n你-你想让一切\n“完美收官”。' ]
            : [ '<20>{*}{#p/asriel3}{#e/asriel/3}因为，你想让一切\n“完美收官”。' ],
      status9: () =>
         SAVE.data.b.oops
            ? [ '<32>{#p/story}* 艾斯利尔正在蓄力“雷霆巨刃”。' ]
            : [ "<32>{#p/basic}* 你早就应该死了啊！" ],
      turnTalk10: (fluff: boolean) =>
         30 <= SAVE.data.n.bully
            ? fluff
               ? [ '<20>{*}{#p/asriel3}{#e/asriel/1}...因为... \n你-你想证明\n自己“是条硬汉”。' ]
               : [ '<20>{*}{#p/asriel3}{#e/asriel/1}...因为，你想证明\n自己“是条硬汉”。' ]
            : fluff
            ? [ '<20>{*}{#p/asriel3}{#e/asriel/1}...因为...\n你-你“爱着你的朋友”。' ]
            : [ '<20>{*}{#p/asriel3}{#e/asriel/1}...因为，\n你“爱着你的朋友”。' ],
      status10: () =>
         SAVE.data.b.oops ? [ '<32>{#p/story}* 艾斯利尔准备施放“末日风暴”。' ] : [ '<32>{#p/basic}* 呃啊...' ],
      turnTalk11: (fluff: boolean) =>
         fluff
            ? [ '<20>{*}{#p/asriel3}{#e/asriel/1}...因-因为，\n你充满“决心”。' ]
            : [ '<20>{*}{#p/asriel3}{#e/asriel/1}...因为，\n你充满“决心”。' ],
      status11: () =>
         SAVE.data.b.oops
            ? [ '<32>{#p/story}* 艾斯利尔准备施放“碎空星爆”。' ]
            : [ '<32>{#p/basic}* 以前...\n  他跟托丽尔吵了那么多次...' ],
      turnTalk12: (fluff: boolean) =>
         fluff
            ? [
                 "<20>{*}{#p/asriel3}{#e/asriel/6}是-是那些力量...\n带你一步步走到今天...",
                 '<20>{*}{#p/asriel3}{#e/asriel/3}也-也是那些力量...\n如今将把你推向\n无尽深渊！',
                 "<20>{*}{#p/asriel3}{#e/asriel/2}是不是很棒啊？"
              ]
            : [
                 "<20>{*}{#p/asriel3}{#e/asriel/6}是那些力量，\n带你一步步走到今天...",
                 '<20>{*}{#p/asriel3}{#e/asriel/3}也是那些力量，\n如今将把你推向\n无尽深渊！',
                 "<20>{*}{#p/asriel3}{#e/asriel/2}是不是很棒啊？"
              ],
      status12: () =>
         SAVE.data.b.oops
            ? [ '<32>{#p/story}* 艾斯利尔即将召唤“终极毁灭”。' ]
            : [ '<32>{#p/basic}* ...他真有那么...\n  ...想我吗？' ],
      turnTalk13: (fluff: boolean) =>
         fluff
            ? [
                 '<20>{*}{#p/asriel3}{#e/asriel/0}...胡闹... 到此为止！',
                 "<20>{*}{#p/asriel3}{#e/asriel/5}<20>{*}{#p/asriel3}{#e/asriel/5}现在...\n是时候彻底抹去\n这条时间线了！"
              ]
            : [
                 '<20>{*}{#p/asriel3}{#e/asriel/0}胡闹到此为止！',
                 "<20>{*}{#p/asriel3}{#e/asriel/5}现在，是时候彻底抹去\n这条时间线了！"
              ],
      turnTalk14: [
         "<20>{*}{#p/asriel3}{#e/asriel/1}...吃下刚刚一击，\n你居然还有力气\n抵抗我？",
         '<20>{*}{#p/asriel3}{#e/asriel/5}哇...\n真不能小瞧你啊。',
         "<20>{*}{#p/asriel3}{#e/asriel/0}但也别高兴太早。",
         "<20>{*}{#p/asriel3}{#e/asriel/0}刚刚，我只动用了\n我实力的冰山一角！",
         "<20>{*}{#p/asriel3}{#e/asriel/2}就让我好好瞧瞧\n你的决心能不能\n扛下这一击！！"
      ],
      hyperTalk1a: [
         '<20>{*}{#p/asriel3}{#e/asriel/0}呃哈哈哈...',
         '<20>{*}{#p/asriel3}{#e/asriel/2}见识下\n我真正的力量吧！'
      ],
      hyperTalk1b: [
         '<20>{*}{#p/asriel3}{#e/asriel/4}什-\n你是怎么全躲开的？！',
         '<20>{*}{#p/asriel3}{#e/asriel/5}呃...'
      ],
      hyperTalk2a: [ '<20>{*}{#p/asriel3}{#e/asriel/1}再来...！' ],
      hyperTalk2b: [
         '<20>{*}{#p/asriel3}{#e/asriel/5}什么...',
         "<20>{*}{#p/asriel3}{#e/asriel/4}你怎么还没死啊？！"
      ],
      hyperTalk3a: [
         '<20>{*}{#p/asriel3}{#e/asriel/0}我能感受到...',
         '<20>{*}{#p/asriel3}{#e/asriel/2}你每死一次，\n与这个世界的连接\n就弱一点。',
         '<20>{*}{#p/asriel3}{#e/asriel/2}你每死一次，\n朋友们对你的记忆\n就模糊一点。'
      ],
      hyperTalk3b: [ "<20>{*}{#p/asriel3}{#e/asriel/6}...不管了。\n我才不在乎呢。" ],
      hyperTalk3c: [ '<20>{*}{#p/asriel3}{#e/asriel/0}这里就是你的葬身之地，\n死了也不会有任何人\n记得你！' ],
      hyperTalk4: [
         "<20>{*}{#p/asriel3}{#e/asriel/1}怎么，\n还不放弃吗...？",
         "<20>{*}{#p/asriel3}{#e/asriel/3}没关系。",
         "<20>{*}{#p/asriel3}{#e/asriel/2}再过一会，\n你就会忘记一切。",
         '<20>{*}{#p/asriel3}{#e/asriel/0}我会让你下辈子\n活得更轻松！'
      ],
      hyperTalk5: [
         '<20>{*}{#p/asriel3}{#e/asriel/0}呃哈哈哈...',
         '<20>{*}{#p/asriel3}{#e/asriel/1}还不放弃？',
         '<20>{*}{#p/asriel3}{#e/asriel/2}那么...',
         '<20>{*}{#p/asriel3}{#e/asriel/0}就让我瞧瞧\n你那“决心”\n到底有多厉害！'
      ],
      intermission: () => [
         "<32>{#p/human}* （你无法动弹。）",
         '<32>* （你试图挣扎。）\n* （什么都没发生。）',
         '<32>* （你试图读取存档。）\n* （什么都没发生。）',
         '<32>* （你又试了一次。）\n* （什么都没发生。）',
         '<32>* （...）',
         ...(SAVE.data.b.oops
            ? [
                 '<32>* （...拯救存档已经毫无希望，\n  但也许...）',
                 '<32>* （凭借最后一丝力量...）',
                 '<32>* （你还有希望拯救其他的事物。）'
              ]
            : [
                 '<32>{#p/basic}* 嘿... 在吗？',
                 "<32>* 是我，$(name)...\n* 你也在那里。对吧，搭档？",
                 '<32>* ...嘿...',
                 "<32>* 你我两人一同走了这么远...",
                 '<32>* 一路上，我们\n  一同交了那么多朋友，\n  一同打了那么多战斗...',
                 "<32>* 现在一想... 我们的羁绊\n  就是靠着那些经历一点点建立的。",
                 "<32>* ...嗯...\n* 我虽然不是乐天派...",
                 '<32>* 但是，我们肩负着前哨站\n  所有人的希望。\n* 所以，你一定要保持决心！',
                 '<32>* 而且，既然艾斯利尔能把\n  朋友们的灵魂偷走...',
                 "<32>* ...那反过来，\n  咱们不就可以再“偷”回来吗？",
                 "<32>* 来吧！\n* 我们一起上！"
              ])
      ],
      status13: () =>
         world.runaway
            ? [ '<32>{#p/story}* ...' ]
            : [
                 SAVE.data.b.oops
                    ? [ "<32>{#p/story}* 在艾斯利尔的体内，\n  激起一声微弱的共鸣。" ]
                    : [ '<32>{#p/basic}* ...' ],
                 SAVE.data.b.oops
                    ? [ "<32>{#p/story}* 在艾斯利尔的体内，\n  那共鸣声愈来愈强。" ]
                    : [ "<32>{#p/basic}* 对，就是这样！\n* 继续！" ],
                 SAVE.data.b.oops
                    ? [ "<32>{#p/story}* 在艾斯利尔的体内，\n  强烈的共鸣此起彼伏。" ]
                    : [ "<32>{#p/basic}* 快要成功了！" ],
                 SAVE.data.b.oops
                    ? [ "<32>{#p/story}* 在艾斯利尔的体内，\n  共鸣声响若雷霆。" ]
                    : [ '<32>{#p/basic}* ...\n* 然后呢？' ]
              ][
                 (SAVE.flag.b.pacifist_marker_save1 ? 1 : 0) +
                    (SAVE.flag.b.pacifist_marker_save2 ? 1 : 0) +
                    (SAVE.flag.b.pacifist_marker_save3 ? 1 : 0)
              ],
      act_check2: () =>
         SAVE.flag.b.pacifist_marker_save1 && SAVE.flag.b.pacifist_marker_save2 && SAVE.flag.b.pacifist_marker_save3
            ? [ '<33>{#p/story}* 艾斯利尔·逐梦 攻击{^2}\u221e{^1} 防御{^2}\u221e{^1}\n* ...' ]
            : SAVE.data.b.oops
            ? [
                 '<33>{#p/story}* 艾斯利尔·逐梦 攻击{^2}\u221e{^1} DEF{^2}\u221e{^1}\n* 乃是主宰死亡的绝对神祇。'
              ]
            : [ "<32>{#p/story}* 艾斯利尔·逐梦 攻击{^2}\u221e{^1} 防御{^2}\u221e{^1}\n* 不要放弃。" ],
      mercy_save1: () => [
         "<32>{#p/human}* （你向艾斯利尔的灵魂伸出手，\n  呼唤着朋友们。）",
         ...(SAVE.flag.b.pacifist_marker_save1 || SAVE.flag.b.pacifist_marker_save2 || SAVE.flag.b.pacifist_marker_save3
            ? []
            : [ "<32>{#p/basic}* 他们一定就在某处，不是吗？", '<32>* ...' ]),
         "<32>* 在艾斯利尔的灵魂深处，\n  有什么正在回响...！"
      ],
      confrontation: [
         '<32>{#p/human}* （在伤害了那么多怪物之后...）',
         '<33>* （某种沉睡的、封存的东西\n  再度苏醒。）',
         '<32>* （那是很久很久以前...\n  怪物面对人类的，本能的恐惧。）',
         '<32>* （现在站在你面前的敌人，\n  不会对你有丝毫恐惧...）',
         "<32>* （然而，你伤害过那么多怪物，\n  只要将他们的恐惧累积起来...）",
         '<32>* （你找到了突破口，\n  一个无法拒绝的机会。）',
         "<32>* （...现在，其他选择已毫无意义。）",
         "<32>* （只有一条路可走。）"
      ],
      attackTalk1: [
         '<20>{*}{#p/asriel3}{#e/asriel/1}你... 怎么可能...',
         '<20>{*}{#p/asriel3}{#e/asriel/3}...',
         "<20>{*}{#p/asriel3}{#e/asriel/2}呵呵呵... 以为自己很强\n强到可以超越神明，\n是吗？",
         "<20>{*}{#p/asriel3}{#e/asriel/0}那，就来看看你\n能不能受得了这个！"
      ],
      attackTalk2: [
         '<20>{*}{#p/asriel3}{#e/asriel/3}...',
         "<20>{*}{#p/asriel3}{#e/asriel/1}以为区区这样\n就能伤得了我？",
         "<20>{*}{#p/asriel3}{#e/asriel/0}我才是这里的主宰！"
      ],
      attackTalk3: [
         '<20>{*}{#p/asriel3}{#e/asriel/2}...而且，\n就算你能打败我...',
         "<20>{*}{#p/asriel3}{#e/asriel/3}你的朋友\n也会因你而死。",
         '<20>{*}{#p/asriel3}{#e/asriel/1}这就是你想要的吗？\n永远孤身一人？'
      ],
      attackTalk4: [
         '<20>{*}{#p/asriel3}{#e/asriel/3}快住手，$(name)...\n你这是在自杀！',
         "<20>{*}{#p/asriel3}{#e/asriel/5}没明白吗？",
         '<20>{*}{#p/asriel3}{#e/asriel/6}我认识的$(name)\n绝不会做这种蠢事！'
      ],
      attackTalk5: [
         '<20>{*}{#p/asriel3}{#e/asriel/4}...',
         '<20>{*}{#p/asriel3}{#e/asriel/6}听我说，$(name)。',
         "<20>{*}{#p/asriel3}{#e/asriel/6}现在赶快住手。",
         "<20>{*}{#p/asriel3}{#e/asriel/9}否则...",
         "<20>{*}{#p/asriel3}{#e/asriel/7}你-你别逼我动真格！"
      ],
      attackTalk6: [
         '<20>{*}{#p/asriel3}{#e/asriel/9}$(name)，求求你...',
         "<20>{*}{#p/asriel3}{#e/asriel/7}你还没明白\n自己在做什么吗？",
         "<20>{*}{#p/asriel3}{#e/asriel/8}让你住手，\n并不只是为了那些怪物...",
         "<20>{*}{#p/asriel3}{#e/asriel/8}更重要的是...\n如果我被你打败了...",
         "<20>{*}{#p/asriel3}{#e/asriel/7}我永远，永远\n都当不了你的对手了。",
         "<20>{*}{#p/asriel3}{#e/asriel/9}永远也不会\n得到你的尊重！",
         '<20>{*}{#p/asriel3}{#e/asriel/10}{#i/3}{@random=1.1/1.1}该死，$(name)...\n你到底为什么总要赢？'
      ],
      attackTalk7: [ '<20>{*}{#p/asriel3}{#e/asriel/11}{#i/4}...' ],
      attackTalk7x: [ '<20>{*}{#p/asriel3}{#e/asriel/11}{#i/4}$(name)，我...' ],
      mercy_save2: [
         '<32>{#p/human}* （奇怪的是，\n  在朋友们都回忆起你后...）',
         "<32>* （还有某个存在\n  也开始在艾斯利尔灵魂深处回响，\n* （愈发强烈。）",
         "<32>* （看起来，还有一个人需要拯救。）",
         '<32>* （是谁呢...？）',
         '<32>* （...）',
         '<32>* （...突然，你明白了。）',
         '<32>* （你伸出手，呼唤着那个名字。）'
      ],
      saveTalk1: [ '<20>{*}{#p/asriel3}{#e/asriel/1}嗯？\n你在干什么...！？' ],
      saveTalk2: [
         '<20>{*}{#p/asriel3}{#e/asriel/7}什-\n你做了什么...？',
         "<20>{*}{#p/asriel3}{#e/asriel/8}这种感觉...\n你对我做了什么？",
         "<20>{*}{#p/asriel3}{#e/asriel/1}不... 不！\n我不需要任何人！"
      ],
      saveTalk3: [
         '<20>{*}{#p/asriel3}{#e/asriel/4}马上停下！\n给我滚开！',
         '<20>{*}{#p/asriel3}{#e/asriel/10}听见没有？！',
         "<20>{*}{#p/asriel3}{#e/asriel/9}否则，\n看我不把你撕成碎片！"
      ],
      saveTalk4: [
         '<20>{*}{#p/asriel3}{#e/asriel/7}...',
         "<20>{*}{#p/asriel3}{#e/asriel/7}你知道我为什么\n这么做吗？\n$(name)...",
         '<20>{*}{#p/asriel3}{#e/asriel/7}为什么我不停战斗，\n只为把你留下...？'
      ],
      saveTalk5: [
         "<20>{*}{#p/asriel3}{#e/asriel/7}因为...",
         "<20>{*}{#p/asriel3}{#e/asriel/8}你在我心中无可替代，\n$(name)。",
         "<20>{*}{#p/asriel3}{#e/asriel/8}你是唯一一个\n真正理解我的人。",
         "<20>{*}{#p/asriel3}{#e/asriel/8}更是唯一一个\n还愿意陪我玩的人。"
      ],
      saveTalk6: [
         '<20>{*}{#p/asriel3}{#e/asriel/8}...',
         '<20>{*}{#p/asriel3}{#e/asriel/8}不...',
         "<20>{*}{#p/asriel3}{#e/asriel/7}不只是这样。",
         '<20>{*}{#p/asriel3}{#e/asriel/9}我... 我...',
         "<20>{*}{#p/asriel3}{#e/asriel/4}我是因为关心你，\n才这么做的啊，\n$(name)！",
         '<20>{*}{#p/asriel3}{#e/asriel/3}我关心你\n胜过关心任何人！'
      ],
      saveTalk7: [
         '<20>{*}{#p/asriel3}{#e/asriel/7}...',
         "<20>{*}{#p/asriel3}{#e/asriel/8}我还不想迎接结局。",
         "<20>{*}{#p/asriel3}{#e/asriel/8}我还不想让你离去。",
         "<20>{*}{#p/asriel3}{#e/asriel/9}我还不想再次离开你。"
      ],
      saveTalk8: [
         '<20>{*}{#p/asriel3}{#e/asriel/10}{#i/4}{@random=1.1/1.1}所以，\n求求你...\n现在放手...',
         '<20>{*}{#p/asriel3}{#e/asriel/12}{#i/4}{@random=1.2/1.2}让我赢吧！！！'
      ],
      cryTalk1: [ '<20>{*}{#p/asriel3}{@random=1.1/1.1}停下！{^30}{%}' ],
      cryTalk2: [ '<20>{*}{#p/asriel3}{@random=1.1/1.1}马上给我停下！！！{^40}{%}' ],
      endStatus1: () => (SAVE.data.b.oops ? [ '<32>{#p/story}* ...' ] : [ '<32>{#p/basic}* ...' ]),
      endTalk1: [ '<20>{*}{#p/asriel3}{#e/asriel/11}{#i/4}...', '<20>{*}{#p/asriel3}{#e/asriel/11}{#i/4}$(name)...' ],
      endStatus2: () => (SAVE.data.b.oops ? [ '<32>{#p/story}* ...' ] : [ '<32>{#p/basic}* 艾斯利尔...' ]),
      endTalk2: [ "<20>{*}{#p/asriel3}{#e/asriel/11}{#i/4}我好孤独，\n$(name)..." ],
      endStatus3: () => (SAVE.data.b.oops ? [ '<32>{#p/story}* ...' ] : [ '<32>{#p/basic}* ...' ]),
      endTalk3: [ "<20>{*}{#p/asriel3}{#e/asriel/11}{#i/4}我好害怕，\n$(name)..." ],
      endStatus4: () => (SAVE.data.b.oops ? [ '<32>{#p/story}* ...' ] : [ '<32>{#p/basic}* ...' ]),
      endTalk4: [ '<20>{*}{#p/asriel3}{#e/asriel/11}{#i/4}$(name)，我...' ],
      endStatus5: () => (SAVE.data.b.oops ? [ '<32>{#p/story}* ...' ] : [ '<32>{#p/basic}* 都是我的错...' ]),
      endTalk5: [ '<20>{*}{#p/asriel3}{#e/asriel/11}{#i/4}我...' ]
   },
   b_opponent_lostsoul: {
      name: '* 迷失的灵魂',
      act_check_alphys: () => [
         '<32>{#p/story}* 迷失的灵魂 - 攻击??? 防御???\n* 这个灵魂似乎非常喜欢科幻动漫。'
      ],
      act_check_asgore: () => [
         '<32>{#p/story}* 迷失的灵魂 - 攻击??? 防御???\n* 这个灵魂似乎想让你\n  好好活着。'
      ],
      act_check_papyrus: () => [
         '<32>{#p/story}* 迷失的灵魂 - 攻击??? 防御???\n* 这个灵魂似乎梦想成为一名\n  皇家守卫。'
      ],
      act_check_sans: () => [
         '<32>{#p/story}* 迷失的灵魂 - 攻击??? 防御???\n* 这个灵魂希望某人\n  能永远幸福快乐。'
      ],
      act_check_toriel: () => [
         '<32>{#p/story}* 迷失的灵魂 - 攻击??? 防御???\n* 这个灵魂似乎想竭尽所能\n  保护你。'
      ],
      act_check_undyne: () => [
         '<32>{#p/story}* 迷失的灵魂 - 攻击??? 防御???\n* 这个灵魂似乎很想教你\n  如何烹饪。'
      ]
   },
   b_opponent_lostsoul_a: {
      status1: () =>
         SAVE.data.b.oops ? [ '<32>{#p/story}* 迷失的灵魂出现了。' ] : [ '<32>{#p/basic}* 是艾菲斯和安黛因。' ],
      status2: () =>
         SAVE.data.b.oops
            ? [ '<32>{#p/story}* 迷失的灵魂站在前方。' ]
            : [ '<32>{#p/basic}* 嗯...\n  我有办法让他们马上醒来。' ],
      act: {
         flirt: (s: boolean) =>
            s
               ? [ '<32>{#p/human}* （你向迷失的灵魂调情。）', '<32>{#p/basic}* 突然间...！' ]
               : [ '<32>{#p/human}* （你向迷失的灵魂调情。）\n* （什么都没发生。）' ],
         water: (s: boolean) => [
            '<32>{#p/human}* （你让迷失的灵魂\n  给你倒一杯白开水。）',
            '<32>{#p/human}* （她有点失望，\n  但也感到十分亲切...）',
            ...(s ? [ '<32>{#p/basic}* 突然间，记忆如潮水般涌回！' ] : [])
         ],
         punch: (s: boolean) => [
            '<32>{#p/human}* （你让迷失的灵魂\n  给你倒一杯洋梅果酒。）',
            '<32>{#p/human}* （她有些不满，\n  但也感到十分亲切...）',
            ...(s ? [ '<32>{#p/basic}* 突然间，记忆如潮水般涌回！' ] : [])
         ],
         cocoa: (s: boolean) => [
            '<32>{#p/human}* （你让迷失的灵魂\n  给你倒一杯热巧克力。）',
            '<32>{#p/human}* （她十分满足，\n  同时也感到十分亲切...）',
            ...(s ? [ '<32>{#p/basic}* 突然间，记忆如潮水般涌回！' ] : [])
         ],
         tea: (s: boolean) => [
            '<32>{#p/human}* （你让迷失的灵魂\n  给你倒一杯星花茶。）',
            '<32>{#p/human}* （她非常高兴，\n  同时也感到十分亲切...）',
            ...(s ? [ '<32>{#p/basic}* 突然间，记忆如潮水般涌回！' ] : [])
         ],
         lesson: (s: boolean) => [
            '<32>{#p/human}* （你让迷失的灵魂教你下厨。）',
            "<32>{#p/human}* （她有点困惑，\n  但似乎蛮想言传身教...）",
            ...(s ? [ '<32>{#p/basic}* 突然间，记忆如潮水般涌回！' ] : [])
         ],
         trivia: (s: boolean) => [
            '<32>{#p/human}* （你让迷失的灵魂出几道\n  超级水的安保题目。）',
            "<32>{#p/human}* （她有些顾虑，但也很想试试看。）",
            ...(s ? [ '<32>{#p/basic}* 突然间，记忆如潮水般涌回！' ] : [])
         ],
         escort: (s: boolean) => [
            '<32>{#p/human}* （你请求迷失的灵魂\n  带你穿过一片危险地带。）',
            "<32>{#p/human}* （她犹豫了一下，但觉得是个好主意。）",
            ...(s ? [ '<32>{#p/basic}* 突然间，记忆如潮水般涌回！' ] : [])
         ]
      },
      assist: {
         text: [ '<32>{#p/basic}* 你俩快点醒来...\n* 我刚找到一部新上映的喵喵电影！' ],
         talk: [
            [ "<11>{#p/undyne}{#e/undyne/13}等有空了\n我们一块\n去看！" ],
            [ "<11>{#p/alphys}{#e/alphys/3}你在\n开玩笑吗？？\n真有？？" ]
         ]
      },
      fight: [
         [
            [ '<11>{#p/undyne}{#e/undyne/4}这般勇者气概，\n我怎么可能\n忘记。' ],
            [ '<11>{#p/alphys}{#e/alphys/9}安黛因，\n当心啊！' ]
         ],
         [
            [ '<11>{#p/undyne}{#e/undyne/4}呵，\n原来是你啊，\n还起了那么个\n蠢名字。' ],
            [ '<11>{#p/alphys}{#e/alphys/12}我现在知道\n为什么他们\n都管你叫\n“$(moniker4)”\n了。' ]
         ]
      ],
      flirt: [
         [
            [ '<11>{#p/undyne}{#e/undyne/12}我发誓\n如果我们\n再战一次...' ],
            [ '<11>{#p/alphys}{#e/alphys/35}啧啧。' ]
         ],
         [
            [ '<11>{#p/undyne}{#e/undyne/5}你敢\n再向她调情\n试试？' ],
            [ '<11>{#p/alphys}{#e/alphys/35}哦，加油啊。' ]
         ]
      ],
      idle: [
         pager.create(
            1,
            () =>
               2 <= SAVE.flag.n.genocide_milestone
                  ? [ "<11>{#p/undyne}燃起了一股\n无法描述的\n感觉。" ]
                  : [ '<11>{#p/undyne}所有人类\n必须死。' ],
            () =>
               2 <= SAVE.flag.n.genocide_milestone
                  ? [ '<11>{#p/undyne}大家，\n都需要我\n来守护！' ]
                  : [ "<11>{#p/undyne}你就是\n怪物的公敌。" ],
            () =>
               2 <= SAVE.flag.n.genocide_milestone
                  ? [ "<11>{#p/undyne}你们还得\n再加把劲。" ]
                  : [ '<11>{#p/undyne}弱者\n才需要怜悯。' ]
         ),
         pager.create(
            1,
            () =>
               6 <= SAVE.flag.n.genocide_milestone
                  ? [ '<11>{#p/alphys}看来，是高估\n你们的智商了。' ]
                  : [ "<11>{#p/alphys}你想让我死，\n不是吗？" ],
            () =>
               6 <= SAVE.flag.n.genocide_milestone
                  ? [ "<11>{#p/alphys}就那些东西，\n唬不到我。" ]
                  : [ "<11>{#p/alphys}我只是去做\n我的本职工作，\n有错吗？" ],
            () =>
               6 <= SAVE.flag.n.genocide_milestone
                  ? [ '<11>{#p/alphys}只有我，\n亲眼目睹了\n你们的\n一举一动。' ]
                  : [ "<11>{#p/alphys}我会永远\n停滞不前，\n是吗？" ]
         )
      ],
      item: {
         tvm_mewmew: {
            text: [
               "<32>{#p/human}* （你举起喵喵玩偶\n  在迷失的灵魂眼前晃了晃。）",
               '<32>{#p/basic}* 突然间...！'
            ],
            talk: [
               [ '<11>{#p/undyne}{#e/undyne/41}呃，\n我不打扰，\n我走了哈。' ],
               [ '<11>{#p/alphys}{#e/alphys/8}哦，\n原来你想让我\n看这个。' ]
            ]
         },
         orange_soda: {
            text: [
               '<32>{#p/human}* （某个灵魂好像很熟悉这瓶汽水...）',
               '<32>{#p/basic}* 突然间，记忆如潮水般涌回！'
            ],
            talk: [
               [ '<11>{#p/undyne}{#e/undyne/20}对，她爱死\n这汽水了。' ],
               [ "<11>{#p/alphys}{#e/alphys/10}原来\n我丢的汽水\n跑到你那里\n去了！" ]
            ]
         },
         spaghetti: {
            text: [
               '<32>{#p/human}* （某个灵魂好像很熟悉这碗意面...）',
               '<32>{#p/basic}* 突然间，记忆如潮水般涌回！'
            ],
            talk: [
               [ "<11>{#p/undyne}{#e/undyne/20}嘿，那是\n帕派瑞斯的\n意面！" ],
               [ '<11>{#p/alphys}{#e/alphys/36}我就说嘛，\n你肯定认得它。' ]
            ]
         },
         snack: {
            text: [
               '<32>{#p/human}* （某个灵魂好像很熟悉这块点心...）',
               '<32>{#p/basic}* 突然间，记忆如潮水般涌回！'
            ],
            talk: [
               [ '<11>{#p/undyne}{#e/undyne/41}那点心\n是我专门\n给你弄到的。' ],
               [ '<11>{#p/alphys}{#e/alphys/6}你会做\n点心了？' ]
            ]
         },
         starling_tea: {
            text: [
               '<32>{#p/human}* （某个灵魂好像很熟悉这杯调和茶...）',
               '<32>{#p/basic}* 突然间，记忆如潮水般涌回！'
            ],
            talk: [
               [ '<11>{#p/undyne}{#e/undyne/18}那是...\n我瞎想什么呢。' ],
               [ '<11>{#p/alphys}{#e/alphys/36}哦，\n喝茶时间到。' ]
            ]
         }
      },
      standard: [
         [ '<11>{#p/undyne}{#e/undyne/41}嗯，其实，\n有的人类\n也挺酷的。' ],
         [ "<11>{#p/alphys}{#e/alphys/9}我们共患难\n这么长时间，\n怎么会怀疑\n彼此呢？" ]
      ]
   },
   b_opponent_lostsoul_b: {
      status1: () =>
         SAVE.data.b.oops
            ? [ '<32>{#p/story}* 迷失的灵魂出现了。' ]
            : [ '<32>{#p/basic}* 帕派瑞斯！\n* ...还有他的兄弟。' ],
      status2: () =>
         SAVE.data.b.oops
            ? [ '<32>{#p/story}* 迷失的灵魂站在前方。' ]
            : [ '<32>{#p/basic}* 啊，对了。\n* 我应该有办法唤醒他俩...' ],
      act: {
         flirt: (s: boolean) =>
            s
               ? [ '<32>{#p/human}* （你向迷失的灵魂调情。）', '<32>{#p/basic}* 突然间...！' ]
               : [ '<32>{#p/human}* （你向迷失的灵魂调情。）\n* （什么都没发生。）' ],
         puzzle: (s: boolean) => [
            '<32>{#p/human}* （你让迷失的灵魂给你出点谜题。）',
            "<32>{#p/human}* （他有点困惑，\n  但已经把谜题准备好了...）",
            ...(s ? [ '<32>{#p/basic}* 突然间，记忆如潮水般涌回！' ] : [])
         ],
         hangout: (s: boolean) => [
            '<32>{#p/human}* （你邀请迷失的灵魂和你一起玩。）',
            "<32>{#p/human}* （他有点困惑，\n  但好像很高兴...）",
            ...(s ? [ '<32>{#p/basic}* 突然间，记忆如潮水般涌回！' ] : [])
         ],
         judgement: (s: boolean) => [
            '<32>{#p/human}* （你让迷失的灵魂开始审判你。）',
            "<32>{#p/human}* （他有点困惑，\n  但很乐意这么做...）",
            ...(s ? [ '<32>{#p/basic}* 突然间，记忆如潮水般涌回！' ] : [])
         ],
         dinner: (s: boolean) => [
            '<32>{#p/human}* （你邀请迷失的灵魂共进晚餐。）',
            "<32>{#p/human}* （他有点困惑，\n  但感到格外熟悉...）",
            ...(s ? [ '<32>{#p/basic}* 突然间，记忆如潮水般涌回！' ] : [])
         ]
      },
      assist: {
         text: [ '<32>{#p/basic}* 嘿，帕派瑞斯！\n* 刚刚，安黛因任命你为皇家卫队一员！' ],
         talk: [
            [ "<08>{#p/papyrus}{#e/papyrus/12}天哪，\n我终于当上\n皇家守卫啦！" ],
            [ '<11>{#p/sans}{#e/sans/2}我们只能\n祈祷美梦\n早日成真咯。' ]
         ]
      },
      fight: [
         [
            [ '<08>{#p/papyrus}{#e/papyrus/27}啊，\n我投-投降！' ],
            [ "<11>{#p/sans}{#e/sans/3}我就知道\n你会这么做。" ]
         ],
         [
            [ '<08>{#p/papyrus}{#e/papyrus/21}衫斯，\n你受伤了吗？' ],
            [ "<11>{#p/sans}{#e/sans/3}别担心，兄弟。\n一场梦而已。" ]
         ]
      ],
      flirt: [
         [
            [ '<08>{#p/papyrus}{#e/papyrus/13}即使到现在，\n你还是那么\n爱我...' ],
            [ "<11>{#p/sans}{#e/sans/2}干起这事来，\n你真是\n一发不可收，\n是吧？" ]
         ],
         [
            [ '<08>{#p/papyrus}{#e/papyrus/14}果然，\n那爱意不是\n冲我而来。' ],
            [ "<11>{#p/sans}{#e/sans/2}啥？\n下次多准备点\n月岩，\n能提升\n调情成功率哦。" ]
         ]
      ],
      idle: [
         pager.create(
            1,
            () =>
               1 <= SAVE.flag.n.genocide_milestone
                  ? [ "<08>{#p/papyrus}原谅你，\n对我来说\n有点难..." ]
                  : [ '<08>{#p/papyrus}我一定要\n抓到个人类！' ],
            () =>
               1 <= SAVE.flag.n.genocide_milestone
                  ? [ "<08>{#p/papyrus}如果没有他，\n我不知道\n该怎么活..." ]
                  : [ '<08>{#p/papyrus}如果成功，\n所有人都会...' ],
            () =>
               1 <= SAVE.flag.n.genocide_milestone
                  ? [ "<08>{#p/papyrus}我不知道\n该找谁求助..." ]
                  : [ '<08>{#p/papyrus}...' ]
         ),
         pager.create(
            1,
            () =>
               1 <= SAVE.flag.n.killed_sans
                  ? [ '<11>{#p/sans}...在这样的\n一天里，\n像你这样的\n孩子...' ]
                  : [ "<11>{#p/sans}我不可能\n一直保护你。" ],
            () =>
               1 <= SAVE.flag.n.killed_sans
                  ? [ "<11>{#p/sans}某条时间线里，\n你把我杀了，\n对吧？" ]
                  : [ "<11>{#p/sans}迟早有一天，\n你要面临死亡。" ],
            () =>
               1 <= SAVE.flag.n.killed_sans
                  ? [ "<11>{#p/sans}你根本不配\n拯救我们。" ]
                  : [ "<11>{#p/sans}这里\n不是你的家。" ]
         )
      ],
      item: {
         berry: {
            text: [
               '<32>{#p/human}* （某个灵魂好像很熟悉这种水果...）',
               '<32>{#p/basic}* 突然间，记忆如潮水般涌回！'
            ],
            talk: [
               [ '<08>{#p/papyrus}{#e/papyrus/10}哦！\n有了这些水果，\n我们就能\n自制果酒了！' ],
               [ "<11>{#p/sans}{#e/sans/2}不要像\n上次一样\n搞砸哦。" ]
            ]
         },
         spaghetti: {
            text: [
               '<32>{#p/human}* （某个灵魂好像很熟悉这碗意面...）',
               '<32>{#p/basic}* 突然间，记忆如潮水般涌回！'
            ],
            talk: [
               [ '<08>{#p/papyrus}{#e/papyrus/10}你把我的面\n留到现在，\n就为了\n能唤醒我！？' ],
               [ "<11>{#p/sans}{#e/sans/2}现在不都\n流行这样嘛。" ]
            ]
         },
         corndog: {
            text: [
               '<32>{#p/human}* （某个灵魂好像很熟悉它的香味...）',
               '<32>{#p/basic}* 突然间，记忆如潮水般涌回！'
            ],
            talk: [
               [ '<08>{#p/papyrus}{#e/papyrus/16}我居然\n一直都不知道\n人类喜欢\n这玩意。' ],
               [ '<11>{#p/sans}{#e/sans/2}能让\n{@fill=#f00}热{@fill=#000}情的{@fill=#f00}狗{@fill=#000}狗\n将抑{@fill=#f00}玉{@fill=#000}和萎{@fill=#f00}米{@fill=#000}\n一扫而空。' ]
            ]
         },
         corngoat: {
            text: [
               '<32>{#p/human}* （某个灵魂好像很熟悉它的香味...）',
               '<32>{#p/basic}* 突然间，记忆如潮水般涌回！'
            ],
            talk: [
               [ '<08>{#p/papyrus}{#e/papyrus/16}什么？？\n居然是\n玉米热“羊”？' ],
               [ "<11>{#p/sans}{#e/sans/0}这么棒的玩笑，\n该好好\n表{@fill=#f00}羊{@fill=#000}你一下。" ]
            ]
         },
         quiche: {
            text: [
               '<32>{#p/human}* （迷失的灵魂好像很熟悉这块点心...）',
               '<32>{#p/basic}* 突然间，记忆如潮水般涌回！'
            ],
            talk: [
               [ '<08>{#p/papyrus}{#e/papyrus/22}居然是一块\n“芝士”蛋糕？！' ],
               [ "<11>{#p/sans}{#e/sans/2}这{@fill=#f00}芝士{@fill=#000}个\n蛋糕谜题。" ]
            ]
         },
         fryz: {
            text: [
               '<32>{#p/human}* （迷失的灵魂好像很熟悉这杯饮料...）',
               '<32>{#p/basic}* 突然间，记忆如潮水般涌回！'
            ],
            talk: [
               [ "<08>{#p/papyrus}{#e/papyrus/27}这东西\n比火墙还热！！" ],
               [ "<11>{#p/sans}{#e/sans/2}伙计，\n你火了。" ]
            ]
         },
         burgerz: {
            text: [
               '<32>{#p/human}* （迷失的灵魂好像很熟悉这种食物...）',
               '<32>{#p/basic}* 突然间，记忆如潮水般涌回！'
            ],
            talk: [
               [ "<08>{#p/papyrus}{#e/papyrus/21}这东西\n健康吗？" ],
               [ '<11>{#p/sans}{#e/sans/0}一石二鸟，\n一食二堡。' ]
            ]
         },
         burgerz_use1: {
            text: [
               '<32>{#p/human}* （迷失的灵魂好像很熟悉这种食物...）',
               '<32>{#p/basic}* 突然间，记忆如潮水般涌回！'
            ],
            talk: [
               [ '<08>{#p/papyrus}{#e/papyrus/24}我担心你吃完\n会不舒服...' ],
               [ '<11>{#p/sans}{#e/sans/2}剩最后一个了，\n想好再吃哦。' ]
            ]
         },
         burgerz_use2: {
            text: [
               '<32>{#p/human}* （迷失的灵魂好像很熟悉这种食物...）',
               '<32>{#p/basic}* 突然间，记忆如潮水般涌回！'
            ],
            talk: [
               [ '<08>{#p/papyrus}{#e/papyrus/18}哇，\n你把它们\n全吃了。' ],
               [ '<11>{#p/sans}{#e/sans/3}要是汉堡能\n长生不老\n就好了。' ]
            ]
         }
      },
      standard: [
         [ '<08>{#p/papyrus}{#e/papyrus/10}等等！\n不！\n我才不会\n抓你呢！' ],
         [ "<11>{#p/sans}{#e/sans/3}我们都\n指望你了，\n孩子。" ]
      ]
   },
   b_opponent_lostsoul_c: {
      status1: () =>
         SAVE.data.b.oops ? [ '<32>{#p/story}* 迷失的灵魂出现了。' ] : [ '<32>{#p/basic}* 爸爸... 妈妈...' ],
      status2: () =>
         SAVE.data.b.oops
            ? [ '<32>{#p/story}* 迷失的灵魂站在前方。' ]
            : [ '<32>{#p/basic}* 嗯... 他们毕竟曾是我的父母，\n  那对我来说就好办多了。' ],
      act: {
         flirt: (s: boolean) =>
            s
               ? [ '<32>{#p/human}* （你向迷失的灵魂调情。）', '<32>{#p/basic}* 突然间...！' ]
               : [ '<32>{#p/human}* （你向迷失的灵魂调情。）\n* （什么都没发生。）' ],
         call: (s: boolean) => [
            '<32>{#p/human}* （你给迷失的灵魂打了个电话。）',
            3 <= SAVE.data.n.cell_insult
               ? '<32>{#p/human}* （她有点生气，\n  但也十分怀念那种感觉。）'
               : '<32>{#p/human}* （她十分高兴，\n  同时很怀念那种感觉。）',
            ...(s ? [ '<32>{#p/basic}* 突然间，记忆如潮水般涌回！' ] : [])
         ],
         home: (s: boolean) => [
            '<32>{#p/human}* （你请求迷失的灵魂带你回家。）',
            3 <= SAVE.data.n.cell_insult
               ? "<32>{#p/human}* （她认为自己没义务那么做，\n  但不知怎地，想试一试...）"
               : "<32>{#p/human}* （她有点犹豫，\n  但不知怎地，想试一试...）",
            ...(s ? [ '<32>{#p/basic}* 突然间，记忆如潮水般涌回！' ] : [])
         ],
         hug: (s: boolean) => [
            '<32>{#p/human}* （你给迷失的灵魂\n  一个大大的拥抱。）',
            '<32>{#p/human}* （他极力掩饰自己的情感，\n  但那舒服的感觉温暖了他的心...）',
            ...(s ? [ '<32>{#p/basic}* 突然间，记忆如潮水般涌回！' ] : [])
         ],
         agreement: (s: boolean) => [
            '<32>{#p/human}* （你让迷失的灵魂\n  给你讲讲人怪停战的故事。）',
            '<32>{#p/human}* （他想对此视而不见，\n  但最终还是脱口而出。）',
            ...(s ? [ '<32>{#p/basic}* 突然间，记忆如潮水般涌回！' ] : [])
         ]
      },
      assist: {
         text: [ "<32>{#p/basic}* 爸爸... 妈妈...\n* 你们不记得我了吗？" ],
         talk: [ [ '<11>{#p/toriel}{#e/toriel/9}我怎么会忘。' ], [ '<11>{#p/asgore}{#e/asgore/8}$(name)...？' ] ]
      },
      fight: [
         [
            [ '<11>{#p/toriel}{#e/toriel/9}我...\n我落得这下场，\n就是活该。' ],
            [ '<11>{#p/asgore}{#e/asgore/1}呃...\n没想到会这样。' ]
         ],
         [ [ '<11>{#p/toriel}{#e/toriel/17}出不了事的，\n艾斯戈尔。' ], [ '<11>{#p/asgore}{#e/asgore/8}孩-孩子？！' ] ]
      ],
      flirt: [
         [
            [ '<11>{#p/toriel}{#e/toriel/1}孩子，\n这个场合...\n请别这么干。' ],
            [ '<11>{#p/asgore}{#e/asgore/6}还好我们现在\n分居了。' ]
         ],
         []
      ],
      idle: [
         pager.create(
            1,
            () =>
               1 <= SAVE.flag.n.genocide_twinkly
                  ? [ '<11>{#p/toriel}趁我\n毫无防备时\n杀了我...' ]
                  : [ '<11>{#p/toriel}这都是\n为了你好。' ],
            () =>
               1 <= SAVE.flag.n.genocide_twinkly
                  ? [ '<11>{#p/toriel}本以为，\n自己努力\n保护的人，\n是你...' ]
                  : [ '<11>{#p/toriel}我绝不会\n再让人类\n离开。' ],
            () =>
               1 <= SAVE.flag.n.genocide_twinkly
                  ? [ '<11>{#p/toriel}一路上一直\n相信你的我，\n才是真正的\n傻子啊...' ]
                  : [ '<11>{#p/toriel}...' ]
         ),
         pager.create(
            1,
            () =>
               7 <= SAVE.flag.n.genocide_milestone
                  ? [ '<11>{#p/asgore}跟你讲理，\n完全是\n浪费时间。' ]
                  : [ '<11>{#p/asgore}人怪交战\n在所难免。' ],
            () =>
               7 <= SAVE.flag.n.genocide_milestone
                  ? [ "<11>{#p/asgore}你就没有\n更重要的事\n可做吗？" ]
                  : [ '<11>{#p/asgore}我怎么可能\n忘记呢？' ],
            () => (7 <= SAVE.flag.n.genocide_milestone ? [ '<11>{#p/asgore}开玩笑吧...' ] : [ '<11>{#p/asgore}...' ])
         )
      ],
      item: {
         pie: {
            text: [
               '<32>{#p/human}* （迷失的灵魂好像很熟悉它的香味。）',
               '<32>{#p/basic}* 突然间，记忆如潮水般涌回！'
            ],
            talk: [
               [ '<11>{#p/toriel}{#e/toriel/0}果然！\n是奶油糖\n肉桂派！' ],
               [ '<11>{#p/asgore}{#e/asgore/7}没想到都过了\n这么久了...' ]
            ]
         },
         pie2: {
            text: [
               '<32>{#p/human}* （迷失的灵魂好像很熟悉它的香味。）',
               '<32>{#p/basic}* 突然间，记忆如潮水般涌回！'
            ],
            talk: [
               [ '<11>{#p/toriel}{#e/toriel/0}果然！\n是蜗牛派！' ],
               [ '<11>{#p/asgore}{#e/asgore/7}没想到都过了\n这么久了...' ]
            ]
         },
         pie3: {
            text: [
               '<32>{#p/human}* （迷失的灵魂好像很熟悉它的香味。）',
               '<32>{#p/basic}* 突然间，记忆如潮水般涌回！'
            ],
            talk: [
               [ '<11>{#p/toriel}{#e/toriel/1}我已经\n尽力了...' ],
               [ '<11>{#p/asgore}{#e/asgore/6}真奇怪。\n这派闻起来\n还挺香的！' ]
            ]
         },
         starling_tea: {
            text: [
               '<32>{#p/human}* （迷失的灵魂好像很熟悉这杯茶...）',
               '<32>{#p/basic}* 突然间，记忆如潮水般涌回！'
            ],
            talk: [
               [ '<11>{#p/toriel}{#e/toriel/13}这茶香真是\n历久弥新...' ],
               [ '<11>{#p/asgore}{#e/asgore/21}一杯好茶，\n真是世间极品。' ]
            ]
         },
         snails: {
            text: [
               '<32>{#p/human}* （迷失的灵魂好像很熟悉那道菜。）',
               '<32>{#p/basic}* 突然间，记忆如潮水般涌回！'
            ],
            talk: [
               [ '<11>{#p/toriel}{#e/toriel/1}你居然\n一直没吃？' ],
               [ '<11>{#p/asgore}{#e/asgore/5}没想到，\n居然还能\n再看到这菜。' ]
            ]
         },
         chocolate: {
            text: [
               '<32>{#p/human}* （迷失的灵魂好像很熟悉这巧克力。）',
               '<32>{#p/basic}* 突然间，记忆如潮水般涌回！'
            ],
            talk: [
               [ '<11>{#p/toriel}{#e/toriel/1}纯黑巧克力...' ],
               [ '<11>{#p/asgore}{#e/asgore/21}苦尽甘来嘛。' ]
            ]
         }
      },
      standard: [
         [ '<11>{#p/toriel}{#e/toriel/1}加油吧，\n孩子...' ],
         [ '<11>{#p/asgore}{#e/asgore/6}我们的未来\n就指望你了！' ]
      ]
   },
   b_opponent_final: {
      name: '* 力场',
      status0: [ '<32>{#p/story}* 此刻，你终于可以直面那道力场。' ],
      act_check: [
         '<32>{#p/story}* 力场 - 攻击0 防御{^2}\u221e{^1}\n* 矛盾已相向，江海不同归。'
      ],
      status1: () =>
         SAVE.data.n.bully > 9
            ? [ "<32>{#p/story}* 这就是你的用武之地，\n  点燃你的斗志吧。" ]
            : [ "<32>{#p/story}* 给这场旅程画上圆满的句号吧。" ],
      status1x: [ '<32>{#p/story}* 除了战斗，别无他法。' ],
      status2: [ '<32>{#p/story}* 力场上出现裂痕，\n  一块块碎片不断落下。' ],
      status3: [ '<32>{#p/story}* 那道力场正游走在破碎的边缘。' ],
      status4: [ '<32>{#p/story}* 那道力场迟迟没有破碎，\n  让你有点意外。' ],
      status5: [ '<32>{#p/story}* 不太对劲。' ],
      friend1: [ "<20>{#p/asgore}{#e/asgore/5}怎么了？" ],
      friend2: [ "<20>{#p/alphys}{#e/alphys/15}那道力场...\n还没被击碎！" ],
      friend3: [ '<20>{#p/asgore}{#e/asgore/12}{#e/alphys/4}...\n清楚为什么吗？' ],
      friend4a: [ "<20>{#p/alphys}{#e/alphys/6}也许...\n他打得还不够狠？", '{*}{#e/alphys/1}{%}' ],
      friend4b: [
         "<20>{#p/alphys}不，不是这样...",
         '<20>{#p/alphys}{#e/asgore/1}...',
         '<20>{#p/alphys}{#e/alphys/2}除非...'
      ],
      friend5: [ '<20>{#p/asgore}...什么？' ],
      friend6: [
         '<20>{#p/alphys}{#e/alphys/1}我-我检查\n档案日志时，\n发现个怪事...',
         '<21>{#p/alphys}{#e/alphys/4}There was... a small d-deviation in the exotic matter matrix.'
      ],
      friend7: [ '<20>{#p/asgore}{#e/asgore/12}你是说...？' ],
      friend8: [
         '<20>{#p/alphys}有-有人侵入了\n六号档案的系统。',
         "<20>{#p/alphys}{#e/asgore/1}那家伙可能\n窃取了部分\n人类灵魂的能量。",
         '<20>{#p/alphys}{#e/alphys/6}等-等我说完，\n也有可能是\n传感器出毛病了...',
         "<20>{#p/alphys}{#e/alphys/1}不过...\n看那力场..."
      ],
      friend9a: [ '<20>{#p/asgore}{#e/asgore/1}明白了。', '<20>{#p/asgore}{#e/asgore/2}明白了。' ],
      friend9b: [
         '<20>{#p/asgore}{#e/asgore/5}我总担心，\n六号档案会不会\n哪一天被篡改...',
         '<20>{#p/asgore}{#e/asgore/5}不过连我都没想到\n这真的发生了。'
      ],
      friend9c: [ '<20>{#p/asgore}{#e/asgore/1}怎么办呢？' ],
      friend10: [
         '<20>{#p/alphys}...再等一个人类？',
         "<20>{#p/alphys}{#e/alphys/4}对-对不起...\n我不知道还能怎么办了...",
         '{*}{#e/asgore/8}{#e/alphys/9}{%}'
      ],
      friend11: [ '<20>{#p/undyne}{#e/undyne/13}我知道啊！' ],
      friend12: [ '<20>{#p/alphys}{#e/alphys/10}安黛因，\n你-你来这干-干什么？', '{*}{#e/undyne/0}{%}' ],
      friend13: [
         "<20>{#p/undyne}{#e/undyne/1}{#e/alphys/8}{#e/asgore/1}先别说。\n那力场让你们累坏了？"
      ],
      friend14: [ '<20>{|}{#p/alphys}{#e/alphys/6}安黛因，你怎么-{%}' ],
      friend15: [ "<20>{#p/undyne}{#e/undyne/5}看来得我出马了！\n我会亲自将它粉碎！" ],
      friend16a: [ '<20>{#p/alphys}{#e/alphys/3}{#e/asgore/6}安黛因！？！？' ],
      friend16b: [
         '<20>{#p/undyne}{#e/undyne/4}我都懂，我都懂。\n只是想让你好受点嘛。',
         '{*}{#e/alphys/1}{%}'
      ],
      friend17: () => [
         '<20>{#p/undyne}{#e/undyne/3}...说回正事，\n是衫斯喊我过来的。\n就他查清人类那事后。',
         "<20>{#p/undyne}{#e/undyne/11}{#e/asgore/5}不得不说，\n当时我还蛮意外的...\n不过我想开了。",
         "<20>{#p/undyne}{#e/undyne/13}这计划能走通，\n我真为你高兴！",
         ...(SAVE.data.b.undyne_respecc
            ? [ "<20>{#p/undyne}{#e/undyne/0}真昧着良心说\n我喜欢人类也没意思。\n不过，今天表现不错！" ]
            : [
                 "<20>{#p/undyne}{#e/undyne/0}I'm not gonna pretend I LIKE humanity, but I'm not against a happy ending, either."
              ]),
         '<20>{#p/undyne}{#e/undyne/15}{#e/asgore/6}可能...\n身为皇家卫队的队长，\n我有点...'
      ],
      friend18: [
         "<20>{#p/alphys}{#e/alphys/32}嘿... 没关系的。",
         "<20>{#e/alphys/31}You're here now, and that's what matters, right?"
      ],
      friend19: [ "<20>{#p/undyne}{#e/undyne/14}Pfft, it's the least I can do after that movie you promised!" ],
      friend20: [ '<20>{#p/alphys}{#e/alphys/33}...嘴一个？', '{*}{#e/asgore/5}{#e/undyne/19}{%}' ],
      friend21: [ '<20>{#p/asgore}{#e/asgore/5}呃。' ],
      friend22: [ '<20>{#p/undyne}{#e/undyne/6}现在？？？' ],
      friend23: [ '<20>{#p/alphys}{#e/alphys/34}为啥不呢？' ],
      friend24: [ '<20>{#p/asgore}{#e/asgore/20}艾菲斯。\n有个孩子看着你俩呢。' ],
      friend25: [ "<21>{#p/undyne}{#e/undyne/7}我们还是\n不要当着他面了吧？" ],
      friend26: [ '<32>{#p/alphys}{#e/alphys/32}...' ],
      friend27: [ '<20>{#p/undyne}{#e/undyne/10}...' ],
      friend28: [ '<20>{*}{#p/alphys}{#e/alphys/35}{#e/undyne/37}{#e/asgore/8}等不及了。{^10}{%}' ],
      friend29: [ '<15>{*}{#p/papyrus}{#e/papyrus/22}等等！！！{^10}{%}', '{*}{#e/papyrus/20}{%}' ],
      friend30: () => [
         "<20>{#p/mettaton}SORRY, LADIES.\nTHE BOYS' CLUB HAS ARRIVED.",
         ...(SAVE.data.n.state_aerialis_basebully > 9
            ? [
                 '<20>{#p/mettaton}{#e/mettaton/1}... OH, HELLO THERE $(moniker2u)!\nIF YOU LIKE, YOU CAN BE AN \"HONORARY\" MEMBER...'
              ]
            : [])
      ],
      friend31: [ "<20>{#p/napstablook}{#e/mettaton/2}{#e/alphys/15}{#e/asgore/1}{~}hey, um... i'm not really a boy..." ],
      friend32a: [
         "<20>{#p/mettaton}{#e/mettaton/1}I NEVER SAID -YOU- WERE IN THE BOYS' CLUB, BLOOKY...",
         "<20>{#p/mettaton}{#e/undyne/38}{#e/papyrus/21}IT'S PRETTY MUCH JUST BETWEEN ME AND PAPYRUS."
      ],
      friend32b: [ '<20>{#p/napstablook}{~}哦......', "<20>{#p/napstablook}{~}那我等会回来" ],
      friend33: [
         '<20>{#p/undyne}{#e/undyne/19}{#e/mettaton/4}Wait.',
         '<20>{#p/undyne}{#e/undyne/10}合着你俩是一对？？？'
      ],
      friend34: [
         '<15>{#p/papyrus}{#e/papyrus/15}CORRECTAMUNDO!',
         '<17>{#p/papyrus}{#e/papyrus/24}... A WORD I HAVE NEVER USED BEFORE, AND HOPEFULLY NEVER WILL AGAIN.'
      ],
      friend35: () =>
         SAVE.data.b.a_state_hapstablook
            ? [ "<20>{#p/undyne}{#e/undyne/17}So THAT's what you've been up to all this time..." ]
            : [ '<20>{#p/undyne}{#e/undyne/17}So THAT\'s what your \"business\" was about...' ],
      friend36: [
         "<20>{#p/mettaton}{#e/mettaton/1}{#e/asgore/6}{#e/papyrus/20}OHHHH YES!\nIN FACT, WE WERE JUST DISCUSSING HOW WE'D SPEND OUR FIRST DAY OUT."
      ],
      friend37: [ '<20>{#p/alphys}{#e/alphys/34}{#e/undyne/1}{#e/mettaton/4}诶嘿嘿。\n我有个点子，\n你俩要不要听听。' ],
      friend38: [
         "<20>{#p/undyne}{#e/undyne/19}{#e/asgore/1}Uh, I don't think they'd be into that kinda stuff, Alphys."
      ],
      friend39: [ '<20>{#p/alphys}{#e/alphys/8}哦。' ],
      friend40: [
         "<15>{#p/papyrus}{#e/papyrus/10}{#e/undyne/0}何不消遣一下呢！\n就在这力场下！",
         '<15>{#e/mettaton/2}{#e/papyrus/28}I KNOW YOU LOVE YOUR \"EXOTIC\" DESTINATIONS...',
         '{*}{#e/alphys/7}{#e/asgore/5}{%}'
      ],
      friend41: [
         '<20>{#p/mettaton}{#e/mettaton/2}哦，帕派瑞斯，\n你好懂我。',
         "<20>{#p/mettaton}{#e/mettaton/1}{#e/papyrus/13}凝望这虚无的深空，\n我可太爱了。",
         '<20>{|}{#p/mettaton}{#e/mettaton/3}{#e/papyrus/21}ALL WHILE CONTEMPLATING THE MEANING OF LIFE, THE UNIVERSE, AND- {%}'
      ],
      friend42: [ '<20>{#p/sans}{#e/sans/2}{#e/undyne/21}{#e/alphys/8}大伙好哇。' ],
      friend43: [ '<15>{#p/papyrus}{#e/papyrus/10}{#e/mettaton/3}兄弟，好久不见！' ],
      friend44: [
         '<16>{#p/papyrus}{#e/sans/0}{#e/papyrus/26}IT WOULD APPEAR MY PARTNER IS... STILL NEW TO\nTHE WHOLE \"IN- LAWS\" THING.'
      ],
      friend45: [ '<20>{#p/sans}{#e/alphys/7}嘿。\n艾斯戈尔，你好哇。' ],
      friend46: [ '<20>{#p/asgore}{#e/asgore/6}{#e/papyrus/20}哈喽，衫斯。\n你也来了，真好。' ],
      friend47: [
         "<20>{#p/sans}{#e/sans/3}啊，你该知道...\n听到这里这么热闹，\n我肯定会顺道来看看的。",
         '<20>{#p/sans}{#e/sans/0}不过先别管我了。',
         "<20>{#p/sans}{#e/sans/2}有个人你肯定想见见，\n我请来了。"
      ],
      friend48: [
         '<20>{#p/asgore}{#e/sans/0}{#e/undyne/3}{#e/asgore/8}{#e/papyrus/26}Tori...！',
         '<20>{#p/asgore}{#e/asgore/6}你回来了。',
         '<20>{#p/asgore}{#e/asgore/1}...'
      ],
      friend49a: [
         '<20>{#p/toriel}{#e/asgore/5}{#e/toriel/9}...',
         '<21>{#p/toriel}{#e/toriel/13}衫斯...\n把事都跟我说了。'
      ],
      friend50a: [ "<20>{#p/alphys}{#e/undyne/4}{#e/alphys/8}别瞅我看，\n不是我告诉他的。" ],
      friend51a: [
         "<20>{#p/sans}{#e/sans/0}我可以作证。",
         "<20>{#p/sans}{#e/sans/2}{#e/alphys/10}{#e/asgore/6}{#e/toriel/9}只是你的说谎艺术\n太烂了。"
      ],
      friend52a1: [
         '<20>{#p/asgore}{#e/undyne/0}{#e/sans/0}{#e/alphys/36}{#e/papyrus/20}I must say, I definitely expected more backlash for my keeping of secrets.'
      ],
      friend52a2: [
         '<20>{#p/toriel}{#e/toriel/13}{#e/asgore/1}I will admit, I was upset at first, but...',
         '<20>{#p/toriel}{#e/toriel/13}{#e/papyrus/21}{#e/alphys/7}Lately, I have been thinking more and more about my own mistakes.',
         '<20>{#p/toriel}{#e/toriel/9}... you are not the only one with things to answer for, Asgore.'
      ],
      friend52a3: [ '<20>{#p/asgore}{#e/asgore/2}明白了。' ],
      friend53a: [
         '<20>{#p/undyne}{#e/undyne/1}{#e/papyrus/20}I mean, come on, did you really think we wanted all humans to die?'
      ],
      friend49b: [
         '<20>{#p/toriel}{#e/toriel/12}...',
         '<21>{#p/toriel}{#e/sans/3}{#e/asgore/2}{#e/undyne/4}{#e/toriel/11}{#e/papyrus/21}{#e/alphys/15}You could have told me you were protecting them.'
      ],
      friend50b: [ "<20>{#p/alphys}{#e/alphys/7}... it's not THAT bad, is it?" ],
      friend51b: [
         '<20>{#p/sans}{#e/sans/0}{#e/undyne/3}yeah, come on, tori.\nlighten up.',
         "<20>{#p/sans}{#e/sans/2}{#e/alphys/8}{#e/asgore/5}{#e/toriel/13}he did a good thing, didn't he?"
      ],
      friend52b1: [
         '<20>{#p/asgore}{#e/undyne/0}{#e/sans/0}{#e/asgore/2}{#e/alphys/36}No, no, she is right in being angry.',
         '<20>{#e/sans/3}{#e/asgore/3}I have kept this from her... from everyone... for much too long.'
      ],
      friend52b2: [ "<20>{#p/undyne}{#e/undyne/1}{#e/asgore/1}But you had a good reason, didn't you?" ],
      friend52b3: [
         '<20>{#p/asgore}{#e/undyne/17}{#e/alphys/8}{#e/toriel/9}{#e/asgore/2}{#e/papyrus/27}Perhaps.\nIt is hard to tell.'
      ],
      friend53b: [ '<20>{#p/undyne}{#e/undyne/1}Still, did you really think we wanted all humans to die?' ],
      friend54: [
         '<20>{#p/alphys}{#e/asgore/5}{#e/undyne/17}{#e/alphys/8}{#e/toriel/13}You literally tried to kill them, Undyne.'
      ],
      friend55: [ '<20>{#p/toriel}{#e/undyne/18}{#e/toriel/3}{#e/asgore/5}She... what?' ],
      friend56: () =>
         SAVE.data.b.undyne_respecc
            ? [ '<20>{#p/undyne}{#e/undyne/9}{#e/toriel/4}I did no such thing!!!' ]
            : [ "<20>{#p/undyne}{#e/undyne/13}{#e/toriel/4}Don't worry about it, I changed my mind." ],
      friend57: () =>
         SAVE.data.b.undyne_respecc
            ? [ '<20>{#p/toriel}{#e/toriel/15}{#e/asgore/6}... are you sure about that, miss?' ]
            : [ '<20>{#p/toriel}{#e/toriel/15}{#e/asgore/6}... we are going to have a talk about this later, miss.' ],
      friend58: [ '<20>{#p/alphys}{#e/alphys/33}Ahem, that\'s \"misses\" to you.' ],
      friend59: [
         "<20>{#p/undyne}{#e/undyne/10}{#e/sans/4}{#e/toriel/12}Alphys!!\nWe haven't even had dinner together!"
      ],
      friend60: [ '<20>{#p/alphys}{#e/alphys/34}Dinner?\nI was just gonna skip to dessert.' ],
      friend61: [ '<15>{#p/papyrus}{#e/undyne/19}{#e/papyrus/19}{#e/asgore/4}{#e/sans/5}{#e/alphys/40}OH MY GOD!!!' ],
      friend62: [
         '<20>{#p/undyne}{#e/undyne/38}{#e/sans/0}{#e/asgore/1}{#e/toriel/13}{#e/papyrus/20}... hold on.',
         '<20>{#p/undyne}{#e/undyne/18}{#e/papyrus/21}How did YOU know to be here, Papyrus?'
      ],
      friend63: [
         '<15>{#p/papyrus}{#e/papyrus/10}OH, RIGHT!\nAFTER METTATON AND I WERE DONE TALKING...',
         '<15>{#p/papyrus}{#e/papyrus/20}A LITTLE YELLOW STAR APPEARED AND TOLD US WE SHOULD COME.',
         '<15>{#p/papyrus}{#e/papyrus/21}{#e/alphys/9}{#e/sans/1}IT SEEMED... URGENT.'
      ],
      friend64: [ '<20>{#p/toriel}{#e/toriel/9}{#e/asgore/12}Twinkly.' ],
      friend65: [
         '<20>{#p/undyne}{#e/alphys/15}Twinkly?',
         "<20>{#p/undyne}{#e/alphys/28}{#e/undyne/37}{#e/toriel/3}Who's Twinkly?"
      ],
      friend66: () =>
         SAVE.flag.n.genocide_milestone < 7
            ? [
                 [ '<20>{#p/twinkly}{#e/twinkly/5}{#v/0}Howdy, everyone.', '<20>{#e/twinkly/7}{#v/0}Did you miss me?' ],
                 [
                    "<20>{#p/twinkly}{#e/twinkly/11}{#v/0}Oh, I'm sorry...\nDid something happen to your SAVE file?",
                    '<20>{#p/twinkly}{#e/twinkly/11}{#v/0}Hee hee hee...',
                    "<20>{#p/twinkly}{#e/twinkly/2}{#v/1}That's what you get."
                 ],
                 [ '<20>{#p/twinkly}{#e/twinkly/7}{#v/0}Sorry, but this world belongs to ME now.' ]
              ][Math.min(SAVE.flag.n.pa_twinkly1++, 2)]
            : [
                 [
                    '<20>{#p/twinkly}{#e/twinkly/5}{#v/0}Long time no see, $(name).',
                    "<20>{#e/twinkly/7}{#v/0}It's been a while, hasn't it?",
                    "<20>{#e/twinkly/11}{#v/0}I hope I'm not getting in the way of your fun...",
                    '<20>{#e/twinkly/2}{#v/1}Considering you ROBBED me of mine.'
                 ],
                 [
                    "<20>{#p/twinkly}{#e/twinkly/11}{#v/0}What's that?\nYou want your SAVE file back?",
                    '<20>{#p/twinkly}{#e/twinkly/11}{#v/0}Oh, $(name)...',
                    "<20>{#p/twinkly}{#e/twinkly/2}{#v/1}You're even dumber than I thought!"
                 ],
                 [ '<20>{#p/twinkly}{#e/twinkly/7}{#v/0}Sorry, $(name).\nThis world belongs to ME now.' ]
              ][Math.min(SAVE.flag.n.pa_twinkly1++, 2)],
      friend67: (unique: string[]) => [
         '<20>{#e/twinkly/11}{#v/0}Hee hee hee...',
         '<20>{#e/twinkly/11}{#v/0}While you were having your little pow-wow...',
         '<20>{#e/twinkly/5}{#v/0}I took control of the archive!',
         '<20>{#e/twinkly/10}{#v/0}Now, all the SOUL power you had access to belongs to me.',
         "<20>{#e/twinkly/9}{#v/0}THAT's why you couldn't finish off the force field.",
         "<20>{#e/twinkly/11}{#v/0}Poetic, isn't it?",
         "<20>{#e/twinkly/7}{#v/0}But that's not even the best part.",
         '<20>{#e/twinkly/6}{#v/0}...',
         "<20>{#e/twinkly/5}{#v/0}It's all your fault.",
         ...(30 <= SAVE.data.n.bully
            ? [
                 "<20>{#e/twinkly/5}{#v/0}It's all because you LET them love you.",
                 '<20>{#e/twinkly/8}{#v/0}You came SO close to killing them, SO many times...',
                 '<20>{#e/twinkly/8}{#v/0}But no matter what, you chose to spare them...'
              ]
            : [
                 "<20>{#e/twinkly/5}{#v/0}It's all because you MADE them love you.",
                 '<20>{#e/twinkly/8}{#v/0}All the time you spent listening to them...',
                 '<20>{#e/twinkly/8}{#v/0}Encouraging them... caring about them...'
              ]),
         ...(1 <= SAVE.flag.n.killed_sans
            ? [
                 '<20>{#e/twinkly/8}{#v/0}...',
                 '<20>You know, $(name)...',
                 '<20>{#e/twinkly/5}I remember a timeline where WE were going to kill everyone.',
                 ...(SAVE.flag.b.confront_twinkly
                    ? [
                         '<20>{#e/twinkly/6}{#v/0}But then... you decided to abandon me.',
                         '<20>{#e/twinkly/8}{#v/0}All so you could play the hero to THESE losers.',
                         '<20>{#e/twinkly/7}{#v/0}Some \"best friend\" you are, huh?'
                      ]
                    : [
                         [
                            '<20>{#e/twinkly/8}We only just started, but with the way we were going?',
                            "<20>{#e/twinkly/8}We didn't get very far, but with the way we were going?",
                            "<20>{#e/twinkly/8}We didn't quite make it to the end, but with the way we were going?",
                            '<20>{#e/twinkly/8}To think we were actually getting somewhere...',
                            '<20>{#e/twinkly/8}To think we were THIS close...'
                         ][Math.min(SAVE.flag.n.genocide_milestone, 4)],
                         '<20>{#e/twinkly/5}{#v/0}Oooh, we would have been INSEPARABLE.',
                         '<20>{#e/twinkly/6}{#v/0}But it seems the game has changed.',
                         '<20>{#e/twinkly/11}{#v/0}You went soft!',
                         '<20>{#e/twinkly/7}{#v/0}You gave up.'
                      ]),
                 "<20>{#e/twinkly/9}{#v/0}Golly, aren't you full of yourself.",
                 '<20>{#e/twinkly/5}Thinking you\'re so high and mighty for being the \"good guy\" here...',
                 '<20>{#e/twinkly/6}{#v/0}When all you did was prove how ROTTEN you really are.',
                 '<20>{#e/twinkly/7}{#v/0}You should have known better, $(name).',
                 '<21>{#e/twinkly/2}{#v/1}There was NOTHING\nyou could have done to save your friends.'
              ]
            : 30 <= SAVE.data.n.bully
            ? [ "<20>{#e/twinkly/5}{#v/0}If only you knew how pointless it'd be." ]
            : [ "<20>{#e/twinkly/5}{#v/0}Without that, they wouldn't have come here." ]),
         '<20>{#e/twinkly/11}{#v/0}Hee hee hee...',
         '<20>{#e/twinkly/6}{#v/0}Huh?',
         '<20>WHY am I still doing this?',
         ...(unique.length > 2
            ? [
                 '<20>{#e/twinkly/5}{#v/0}... oh, come on.',
                 '<20>{#e/twinkly/5}{#v/0}You know the answer as well as I do.',
                 "<20>{#e/twinkly/11}{#v/0}After all, you're the one who went from ending to ending...",
                 '<20>{#e/twinkly/7}{#v/0}Playing with their lives just to see what would happen.',
                 "<20>{#e/twinkly/8}{#v/0}Hm...?\nDon't you remember?",
                 {
                    dark_death: '<20>{#e/twinkly/5}{#v/0}From the one where Undyne and Alphys hunted you down...',
                    dark_undyne: '<20>{#e/twinkly/5}{#v/0}From the one where Alphys returned to Bratty and Catty...',
                    dark_alphys: '<20>{#e/twinkly/5}{#v/0}From the one where almost everyone important had died...',
                    dark_alphys_therapy:
                       '<20>{#e/twinkly/5}{#v/0}From the one where Sans and Papyrus had a therapy company...',
                    dark_alphys_virtual:
                       '<20>{#e/twinkly/5}{#v/0}From the one where Papyrus and Alphys escaped into a virtual world...',
                    dark_mew:
                       '<20>{#e/twinkly/5}{#v/0}From the one where Mad Mew Mew made everyone go along with her nonsense...',
                    dark_charles:
                       "<20>{#e/twinkly/5}{#v/0}From the one where Charles brought everyone's fantasies to life...",
                    dark_blooky:
                       "<20>{#e/twinkly/5}{#v/0}From the one where Mettaton's fans formed an anti-human collective...",
                    dark_generic: '<20>{#e/twinkly/5}{#v/0}From the one where the \"Royal Defense Agency\" was formed...',
                    dark_aborted:
                       '<20>{#e/twinkly/5}{#v/0}From the one where Napstablook told you to die a \"painful death...\"',
                    light_ultra:
                       '<20>{#e/twinkly/5}{#v/0}From the one where Papyrus captured you and got into the guard...',
                    light_undyne: '<20>{#e/twinkly/5}{#v/0}From the one where Alphys had to hide the humans away...',
                    light_runaway: '<20>{#e/twinkly/5}{#v/0}From the one where the humans were accidentally exposed...',
                    light_toriel: '<20>{#e/twinkly/5}{#v/0}From the one where Toriel shut herself off from everyone...',
                    light_dog: '<20>{#e/twinkly/5}{#v/0}From the one where dogs took over the outpost...',
                    light_muffet: '<20>{#e/twinkly/5}{#v/0}From the one where Muffet became a ruthless dictator...',
                    light_papyrus:
                       '<20>{#e/twinkly/5}{#v/0}From the one where the power of friendship reigned supreme...',
                    light_sans: '<20>{#e/twinkly/5}{#v/0}From the one where Sans ended up as the king...',
                    light_generic: '<20>{#e/twinkly/5}{#v/0}From the one where Terrestria was appointed as queen...'
                 }[unique[0]]!,
                 {
                    dark_death: '<20>{#e/twinkly/5}{#v/0}... to the one where Undyne and Alphys hunted you down.',
                    dark_undyne: '<20>{#e/twinkly/5}{#v/0}... to the one where Alphys returned to Bratty and Catty.',
                    dark_alphys: '<20>{#e/twinkly/5}{#v/0}... to the one where almost everyone important had died.',
                    dark_alphys_therapy:
                       '<20>{#e/twinkly/5}{#v/0}... to the one where Sans and Papyrus had a therapy company.',
                    dark_alphys_virtual:
                       '<20>{#e/twinkly/5}{#v/0}... to the one where Papyrus and Alphys escaped into a virtual world.',
                    dark_mew:
                       '<20>{#e/twinkly/5}{#v/0}... to the one where Mad Mew Mew made everyone go along with her nonsense.',
                    dark_charles:
                       "<20>{#e/twinkly/5}{#v/0}... to the one where Charles brought everyone's fantasies to life.",
                    dark_generic: '<20>{#e/twinkly/5}{#v/0}... to the one where the \"Royal Defense Agency\" was formed.',
                    dark_blooky:
                       "<20>{#e/twinkly/5}{#v/0}... to the one where Mettaton's fans formed an anti-human collective.",
                    dark_aborted:
                       '<20>{#e/twinkly/5}{#v/0}... to the one where Napstablook told you to die a \"painful death.\"',
                    light_ultra:
                       '<20>{#e/twinkly/5}{#v/0}... to the one where Papyrus captured you and got into the guard.',
                    light_undyne: '<20>{#e/twinkly/5}{#v/0}... to the one where Alphys had to hide the humans away.',
                    light_runaway: '<20>{#e/twinkly/5}{#v/0}... to the one where the humans were accidentally exposed.',
                    light_toriel: '<20>{#e/twinkly/5}{#v/0}... to the one where Toriel shut herself off from everyone.',
                    light_dog: '<20>{#e/twinkly/5}{#v/0}... to the one where dogs took over the outpost.',
                    light_muffet: '<20>{#e/twinkly/5}{#v/0}... to the one where Muffet became a ruthless dictator.',
                    light_papyrus:
                       '<20>{#e/twinkly/5}{#v/0}... to the one where the power of friendship reigned supreme.',
                    light_sans: '<20>{#e/twinkly/5}{#v/0}... to the one where Sans ended up as the king.',
                    light_generic: '<20>{#e/twinkly/5}{#v/0}... to the one where Terrestria was appointed as queen.'
                 }[unique[unique.length - 1]]!,
                 "<20>{#e/twinkly/7}{#v/0}You ENJOYED treating it all like it's just a game.",
                 "<20>{#e/twinkly/5}{#v/0}But now it's my turn to play."
              ]
            : [
                 "<20>{#e/twinkly/8}{#v/0}... you just don't get it, do you?",
                 '<20>{#e/twinkly/6}{#v/0}You, I, and everyone and everything around us...',
                 "<21>{#e/twinkly/5}{#v/0}It's all just a GAME.",
                 '<20>{#e/twinkly/11}{#v/0}If you leave the outpost satisfied, you\'ll \"win\" the game.',
                 '<20>{#e/twinkly/11}If you \"win,\" you won\'t want to \"play\" with me anymore.',
                 '<20>{#e/twinkly/7}{#v/0}And what would I do then?',
                 '<20>{#e/twinkly/5}{#v/0}But this game between us will NEVER end.'
              ]),
         "<20>{#e/twinkly/8}{#v/0}I'll hold victory in front of you, just within your reach...",
         '<20>{#e/twinkly/2}{#v/1}{@random=1.1/1.1}And then tear it away just before you grasp it.',
         '<20>{#e/twinkly/14}{#v/1}{@random=1.1/1.1}Over, and over, and over...',
         '<20>{#e/twinkly/5}{#v/0}Hee hee hee.',
         '<20>{#e/twinkly/5}{#v/0}{#v/0}Listen.',
         ...(30 <= SAVE.data.n.bully
            ? [
                 '<20>{#e/twinkly/5}{#v/0}If you DO defeat me, I\'ll give you your \"ideal ending.\"',
                 "<20>{#e/twinkly/5}{#v/0}I'll let your friends live."
              ]
            : [
                 '<20>{#e/twinkly/5}{#v/0}If you DO defeat me, I\'ll give you your \"happy ending.\"',
                 "<20>{#e/twinkly/5}{#v/0}I'll bring your friends back."
              ]),
         "<20>{#e/twinkly/5}{#v/0}I'll destroy the force field.",
         '<20>{#e/twinkly/5}{#v/0}Everyone will finally be satisfied.',
         "<20>{#e/twinkly/9}{#v/0}But that won't happen.",
         '<20>{#e/twinkly/11}{#v/0}You...!',
         "<20>{#e/twinkly/5}{#v/0}I'll keep you here no matter what!"
      ],
      friend68: [ '<20>{#e/twinkly/0}{#v/1}{@random=1.1/1.1}Even if it means killing you until the END OF TIME!{%20}' ],
      friend69: [ '<20>{#e/twinkly/8}{#v/0}What?' ],
      friend70: [
         '<20>{#p/asgore}{#e/asgore/1}Fear not, young one...',
         '<20>{#e/asgore/2}We are here to protect you...!'
      ],
      friend71: [
         "<15>{#p/papyrus}{#e/papyrus/1}THAT'S RIGHT, HUMAN! YOU CAN WIN!",
         '<15>{#e/papyrus/1}JUST DO WHAT I, THE GREAT PAPYRUS, WOULD DO...',
         '<15>{#e/papyrus/2}BELIEVE IN YOU!!!'
      ],
      friend72: [
         '<20>{#p/undyne}{#e/undyne/11}Ha, if you got past ME, you can do ANYTHING.',
         "<20>{#e/undyne/11}So don't worry...",
         "<20>{#e/undyne/13}We're with you all the way!"
      ],
      friend73: [
         "<20>{#p/sans}{#e/sans/1}huh? you haven't beaten this guy yet?",
         "<20>{#e/sans/2}come on, this weirdo's got nothin' on you."
      ],
      friend74: [
         "<20>{#p/alphys}{#e/alphys/1}Technically, it's impossible for you to beat him...",
         '<20>{#e/alphys/2}B-but... somehow, I know you can do it!!'
      ],
      friend75: [
         '<20>{#p/toriel}{#e/toriel/1}My child...',
         '<20>{#e/toriel/2}My sweet, innocent child...',
         '<20>{#e/toriel/3}You cannot give up now!'
      ],
      friend76: "C'mon,\nyou got\nthis!", 
      friend77: () => (SAVE.data.n.bully < 30 ? '*em-\npowering\nwhistle*' : '*intimi-\ndated\nwhistle*'), 
      friend78: () => (SAVE.data.n.bully < 30 ? 'Sparkle\nand\nshine!' : "Ur bad,\nbut he's\nworse."), 
      friend79: 'Out with\nthe\nbozo!', 
      friend80: () => (SAVE.data.n.bully < 30 ? 'la la,\nla la' : 'h-hum,\nh-hum'), 
      friend81: 'You must\nnot\nfail.', 
      friend82: () => (SAVE.data.n.bully < 30 ? 'Our will\nis your\nwill.' : 'Use your\nstrength\nwisely.'), 
      friend83: () => (SAVE.data.n.bully < 30 ? 'Rock on,\nlittle\nbuddy!' : 'Go on,\nlittle\nbully.'), 
      friend84: () => (SAVE.data.n.bully < 30 ? "We're on\nyour\nside!" : 'Wait, we\nlike you\nnow?'), 
      friend85: () => (SAVE.data.n.bully < 30 ? 'Keep it\nreal,\ndeal?' : 'Show him\nwhat you\ngot.'), 
      friend86a: 'Ribbit.', 
      friend86b: "Don't\ngive up!", 
      friend87: [
         '<20>{#p/twinkly}{#e/twinkly/17}Urrrgh... NO!',
         '<20>{#e/twinkly/16}Unbelievable!!',
         "<20>{#e/twinkly/15}This can't be happening...!",
         '<20>{#e/twinkly/16}You... YOU...!'
      ],
      friend88: [ "<20>{#p/twinkly}{#e/twinkly/2}I can't believe you're all so STUPID." ],
      friend89: [ '<20>{*}ALL OF YOUR SOULS ARE MINE!!!!!!!!!{^40}{%}' ],
      friend90: () =>
         1 <= SAVE.flag.n.killed_sans
            ? [ '<20>{#p/asriel1}果然...', '<20>这种感觉，\n比上次好太多了。' ]
            : [ '<20>{#p/asriel1}终于。', '<20>当星星那么久\n真是受够了。' ],
      friend91: [ '<20>{#p/asriel1}哈喽！', '<20>你在那里吗，$(name)？', "<20>是我啊，你最好的朋友：" ],
      friend92: '<99>{*}{#p/asriel3}{#v/1}{#i/12}艾斯利尔·逐梦{^10}{#p/event}{%}'
   },
   b_opponent_finalasgore: {
      name: '* 艾斯戈尔',
      death1: [
         '<11>{*}{#p/asgore}{#e/asgore/1}{#v/1}{#i/8}{@random=1.1/1.1}...这就是\n我的归宿了...',
         '<11>{*}{#e/asgore/1}{#v/1}{#i/8}{@random=1.1/1.1}...',
         '<11>{*}{#e/asgore/1}{#v/1}{#i/8}{@random=1.1/1.1}取走我的灵魂，\n离开这片\n诅咒之地吧...',
         '<11>{*}{#e/asgore/1}{#v/2}{#i/10}{@random=1.1/1.1}这样...',
         '<11>{*}{#e/asgore/1}{#v/2}{#i/10}{@random=1.1/1.1}我们就\n永远不会\n再拖累你了...',
         '<11>{*}{#e/asgore/2}{#v/3}{#i/10}{@random=1.1/1.1}...',
         '<11>{*}{#e/asgore/2}{#v/3}{#i/12}{@random=1.1/1.1}永别了...'
      ]
   },

   i_archive: { battle: { description: '', name: '' }, drop: [], info: [], name: '无', use: [] },
   i_archive_berry: {
      battle: { description: '3 HP。', name: '洋梅' },
      drop: [ '<32>{#p/human}* （你把洋梅扔掉了。）' ],
      info: [ '<32>{#p/human}* （3 HP。）' ],
      name: '洋梅',
      use: [ '<32>{#p/human}* （你吃掉了洋梅。）' ]
   },
   i_archive_candy: {
      battle: { description: '4 HP。', name: '糖果' },
      drop: [ '<32>{#p/human}* （你把怪物糖果扔掉了。）' ],
      info: [ '<32>{#p/human}* （4 HP。）' ],
      name: '怪物糖果',
      use: [ '<32>{#p/human}* （你吃掉了怪物糖果。）' ]
   },
   i_archive_rations: {
      battle: { description: '5 HP。', name: '口粮' },
      drop: [ '<32>{#p/human}* （你把口粮扔掉了。）' ],
      info: [ '<32>{#p/human}* （5 HP。）' ],
      name: '口粮',
      use: [ '<32>{#p/human}* （你吃掉了口粮。）' ]
   },
   i_archive_tzn: {
      battle: { description: '6 HP。', name: '太空豆腐' },
      drop: [ '<32>{#p/human}* （你把太空豆腐扔掉了。）' ],
      info: [ '<32>{#p/human}* （6 HP。）' ],
      name: '太空豆腐',
      use: [ '<32>{#p/human}* （你吞下了太空豆腐。）' ]
   },
   i_archive_nice_cream: {
      battle: { description: '7 HP。', name: '冰意灵' },
      drop: [ '<32>{#p/human}* （你把冰意灵扔掉了。）' ],
      info: [ '<32>{#p/human}* （7 HP。）' ],
      name: '冰意灵',
      use: [
         '<32>{#p/human}* (You unwrapped the Ice Dream.)',
         "<32>{#p/human}* (It's a holographic illustration of a crying child.)"
      ]
   },
   i_archive_healpak: {
      battle: { description: '8 HP。', name: '治疗包' },
      drop: [ '<32>{#p/human}* （你把治疗包扔掉了。）' ],
      info: [ '<32>{#p/human}* （8 HP。）' ],
      name: '治疗包',
      use: [ '<32>{#p/human}* （你使用了治疗包。）' ]
   },
   i_big_dipper: {
      battle: {
         description: '一把巨勺，由本星系\n最好的合金材料制成。',
         name: '大熊座'
      },
      drop: [ '<32>{#p/human}* （你扔掉了大熊座。）' ],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? [ '<32>{#p/human}* （15攻击。）' ]
            : [ '<32>{#p/basic}* “大熊座” （15攻击）\n* 一把巨勺，由本星系\n  最好的合金材料制成。' ],
      name: '大熊座',
      use: [ '<32>{#p/human}* （你装备上了大熊座。）' ]
   },
   i_heart_locket: {
      battle: {
         description: '上面刻着“永远都是好朋友”。',
         name: '心形挂坠'
      },
      drop: () => [
         '<32>{#p/human}* （你扔掉了心形挂坠。）',
         ...(SAVE.data.b.svr || world.darker || SAVE.data.b.ufokinwotm8
            ? []
            : [ '<32>{#p/basic}* ...', "<32>{#p/basic}* 我就当什么都没看见。" ])
      ],
      info: () =>
         SAVE.data.b.svr
            ? [ '<32>{#p/human}* （15防御。）' ]
            : [ '<33>{#p/basic}* “心形挂坠” （15防御）\n* 上面刻着“永远都是好朋友”。' ],
      name: '心形挂坠',
      use: [ '<32>{#p/human}* （你戴上了心形挂坠。）' ]
   },
   i_starling_tea: {
      battle: {
         description: '好王配好茶。',
         name: '星花茶'
      },
      drop: [ '<32>{#p/human}* （你把星花茶全倒掉了。）' ],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? [ '<32>{#p/human}* （99 HP。）' ]
            : [ '<32>{#p/basic}* “星花茶” 回复99 HP\n* 好王配好茶。' ],
      name: '星花茶',
      use: [ '<32>{#p/human}* （你喝掉了星花茶。）' ]
   },

   k_hangar: {
      name: '停机坪门禁卡',
      description: "用来解除前哨站停机坪的门禁。"
   },

   k_skeleton: {
      name: 'Skeleton Key',
      description: () =>
         SAVE.data.b.s_state_sansdoor
            ? "Used to unlock the door to Sans's room."
            : 'Given to you by Sans in the Last Corridor of the Citadel.'
   },

   s_save_citadel: {
      c_elevator1: { name: '首塔', text: [] },
      c_courtroom: { name: '最终长廊', text: [] },
      c_road2: { name: '行宫', text: [] },
      c_archive_start: { name: 'e586b3e5bf83', text: [] },
      c_archive_path1: { name: 'e88090e5bf83', text: [] },
      c_archive_path2: { name: 'e58b87e6b094', text: [] },
      c_archive_path3: { name: 'e6ada3e79bb4', text: [] },
      c_archive_path4: { name: 'e6af85e58a9b', text: [] },
      c_archive_path5: { name: 'e59684e889af', text: [] },
      c_archive_path6: { name: 'e6ada3e4b989', text: [] },
      c_exit: { name: '终点', text: [] }
   }
};


// END-TRANSLATE
