import { asrielinter } from '../../../code/common';
import { blookGone, dateready, papreal, roomready, solo } from '../../../code/starton/extras';
import { game, renderer } from '../../../code/systems/core';
import {
   battler,
   calcHP,
   calcLV,
   choicer,
   fetchCharacters,
   instance,
   pager,
   player,
   roomKills,
   world
} from '../../../code/systems/framework';
import { SAVE } from '../../../code/systems/save';
import { CosmosKeyed, CosmosProvider, CosmosUtils } from '../../../code/systems/storyteller';

// START-TRANSLATE

export default {
   a_starton: {
      telescope1: () => [
         ...(SAVE.data.b.svr ? [] : ["<32>{#p/basic}* 标准规格的长焦望远镜，皇家出品。\n* 251X年前后制成。"]),
         choicer.create("* （使用望远镜？）", "是", "否")
      ],
      telescopeMeetup1: ["<25>{#p/kidd}{#f/2}* 你在看星星吗？"],
      telescopeMeetup2: [
         "<25>{#p/kidd}{#f/1}* 哟... 我打赌\n  你肯定看到了很酷的东西。",
         "<25>{#f/7}* 上次我用望远镜的时候，\n  我甚至看到了一颗超新星！"
      ],
      telescopeMeetup3: [
         "<25>{#p/kidd}{#f/3}* 给。\n* 拿上这个。",
         "<32>{#s/equip}{#p/human}* （高级会员券被添加到了\n  你的钥匙串上。）",
         "<25>{#p/kidd}{#f/7}* 现在你可以使用\n  任何望远镜了，\n  连“最高级”的都能用！",
         "<25>{#f/1}* 那个矮骷髅之前\n  给了我好多这个。",
         "<25>{#f/2}* 他甚至花了很多钱\n  送了我一些数字藏品...",
         "<25>{#f/1}* 我猜他真的很喜欢我，哈哈。"
      ],
      telescopeMeetup4: [
         "<25>{#p/kidd}{#f/3}* 总之，我刚才给了你一张券。",
         "<25>{#f/1}* 希望你能看到更酷的东西！"
      ],
      telescopeMeetup5: ["<25>{#p/kidd}{#f/1}* 我要回镇上了！"],
      telescope2: () =>
         SAVE.data.b.svr
            ? ["<25>{#p/asriel1}{#f/17}* 看到什么喜欢的东西了吗？"]
            : world.darker
               ? ["<32>{#p/basic}* 一架望远镜。"]
               : SAVE.data.b.oops || SAVE.data.b.s_state_chargazer
                  ? ["<32>{#p/basic}* 在太空中观星...\n  确实，这也是种打破\n  思维定势的想法。"]
                  : ((SAVE.data.b.s_state_chargazer = true),
                     [
                        "<32>{#p/basic}* ...",
                        "<32>* 以前，我和Asriel就有一架\n  这样的望远镜。",
                        "<32>* 我们把镜筒对着\n  天空的各个角落，\n  期待能发现意想不到的惊喜...",
                        "<32>* ...可惜，希望总是落空。",
                        "<32>* 尽管观星收获寥寥，\n  但Asriel并不在意...",
                        "<32>* 我挖空心思从星空寻找宝藏。\n  但对他而言...\n  我的陪伴才是真正的“宝藏”。",
                        "<32>* ...",
                        "<32>{#p/human}* （你听到一声叹息。）",
                        "<32>{#p/basic}* ...唉，别在意。\n  咱们继续干正事吧。"
                     ]),
      notv: ["<32>{#p/basic}* 没什么好看的。"],
      nicecreamScoreReaction1a: ["<32>{#p/basic}* 第一次尝试还不错..."],
      nicecreamScoreReaction1b: ["<32>{#p/basic}* 第一次尝试还不错。"],
      nicecreamScoreReaction2a: ["<32>{#p/basic}* 你可以做得更好的。"],
      nicecreamScoreReaction2b: ["<32>{#p/basic}* 你可以做得更好的。"],
      nicecreamScoreReaction3a: [
         "<32>{#p/basic}* 你打破了纪录...？\n* 我还从来没见过有人这么做..."
      ],
      nicecreamScoreReaction3b: [
         "<32>{#p/basic}* 你打破了纪录...？\n* 我还从来没见过有人这么做！"
      ],
      nicecreamScoreReaction4a: ["<33>{#p/basic}* 看起来你真的很擅长..."],
      nicecreamScoreReaction4b: ["<32>{#p/basic}* 看起来你真的很擅长。"],
      nicecreamScoreReaction5a: ["<32>{#p/basic}* 你打破了你的纪录...？"],
      nicecreamScoreReaction5b: ["<32>{#p/basic}* 看，新纪录！"],
      nicecreamScoreReaction6a: ["<32>{#p/basic}* 有那么一瞬间，我以为你打破了记录..."],
      nicecreamScoreReaction6b: [
         "<32>{#p/basic}* 哇哦，你差点就破纪录了！\n* 你能坚持下去吗？"
      ],
      nicecreamScoreReaction7a: ["<32>{#p/basic}* 看起来你需要一些练习..."],
      nicecreamScoreReaction7b: ["<32>{#p/basic}* 看起来你需要一些练习。"],
      nicecreamScoreReaction8a: ["<32>{#p/basic}* 更好了..."],
      nicecreamScoreReaction8b: ["<32>{#p/basic}* 这才像话。"],
      nicecreamScoreReaction9a: [
         "<32>{#p/basic}* 你第一次尝试就打破了纪录...？\n* 世界上竟然..."
      ],
      nicecreamScoreReaction9b: ["<32>{#p/basic}* 你第一次尝试就打破了纪录...？\n* 你真是个天才！"],
      nicecreamScoreReaction10a: ["<32>{#p/basic}* 就第一次尝试来说，这已经很好了..."],
      nicecreamScoreReaction10b: ["<32>{#p/basic}* 就第一次尝试来说，这已经很好了！"],
      nicecreamScoreReaction11a: ["<32>{#p/basic}* 就要快了..."],
      nicecreamScoreReaction11b: ["<32>{#p/basic}* 天哪，你几乎快破纪录了...\n* 你能做到的！"],
      noteleport: ["<32>{#p/human}* （似乎是没电了。）"],
      evac: ["<32>{#p/human}* （你感觉周围的怪物越来越少了。）"],
      shopclosed: ["<32>{#p/human}* （但是没什么可做的了。）"],
      jukebox1: () => [
         SAVE.data.b.svr
            ? "<32>{#p/human}* （你去碰点唱机...）"
            : "<32>{#p/basic}* 点唱机只放你听过的音乐。",
         choicer.create(
            "* （放一首音乐吗？）",
            SAVE.data.b.napsta_performance ? "曲目01" : "？？？",
            2 <= SAVE.data.n.state_foundry_swansong ? "曲目02" : "？？？",
            2 <= SAVE.data.n.state_starton_trashprogress ? "曲目03" : "？？？",
            "取消"
         )
      ],
      jukebox1x1: () =>
         SAVE.data.b.svr
            ? ["<32>{#p/human}* （但是你不能放你不知道的音乐。）"]
            : ["<32>{#p/basic}* 封面中一个诡异的DJ在人群中演奏。\n* 你看不出来是什么音乐。"],
      jukebox1x2: () =>
         SAVE.data.b.svr
            ? ["<32>{#p/human}* （但是你不能放你不知道的音乐。）"]
            : ["<33>{#p/basic}* 封面中一个幽灵一样的DJ在电脑前。\n* 你看不出来是什么音乐。"],
      jukebox1x3: () =>
         SAVE.data.b.svr
            ? ["<32>{#p/human}* （但是你不能放你不知道的音乐。）"]
            : [
               "<32>{#p/basic}* 封面中是一只被垃圾包围着的小白狗。\n* 你看不出来是什么音乐。"
            ],
      jukebox1y: ["<32>{*}{#p/human}* （你选择了一张光盘...）{^40}{%}"],
      jukebox2: () => [
         SAVE.data.b.svr
            ? "<32>{#p/human}* （听起来像是一首正在播放的音乐。）"
            : [
               "<32>{#p/basic}* 现在播放的是“曲目01”",
               "<32>{#p/basic}* 现在播放的是“曲目02”",
               "<32>{#p/basic}* 现在播放的是“曲目03”"
            ][SAVE.data.n.state_starton_jukebox - 1],
         choicer.create("* （停止播放？）", "是", "否")
      ],
      jukebox3a1: ["<32>{#p/basic}{#npc/a}* 这就对了！"],
      jukebox3a2: ["<32>{#p/basic}{#npc/a}* （我们都喜欢这种音乐。）"],
      jukebox3b: ["<32>{#p/basic}{#npc/a}* 这音乐在舞蹈俱乐部里面流行吗？"],
      jukebox3c: [
         "<32>{#p/basic}* ...\n* ...\n* ...",
         "<32>{#npc/a}* Grillbz说他曾经在哪听过这首歌。"
      ],
      jukebox3d: [
         "<32>{#p/basic}{#npc/a}* 你肯定很懂音乐，孩子...",
         "<32>* You must be really tasty."
      ],
      shockpapyrus0a: [
         "<15>{#p/papyrus}{#e/papyrus/17}站住！你们在干嘛？",
         "<15>{#p/papyrus}{#e/papyrus/21}我有预感，\nSANS可能有危险，\n就过来了。",
         "<15>{#p/papyrus}{#e/papyrus/22}...结果等我来了，\n就看到你们俩？？",
         "<15>{#p/papyrus}{#e/papyrus/14}告诉你们，我可是\n皇家卫队的预备队员！",
         "<15>{#p/papyrus}{#e/papyrus/21}不管你俩是谁..."
      ],
      shockpapyrus0b: [
         "<15>{#p/papyrus}{#e/papyrus/24}...等等。",
         "<15>{#p/papyrus}{#e/papyrus/22}那是个人类吗！？",
         "<15>{#p/papyrus}{#e/papyrus/20}我的天哪！\n肯定没错，\n就是个人类！"
      ],
      shockpapyrus0c: [
         "<15>{#p/papyrus}{#e/papyrus/20}SANS，你快来看看！",
         "<15>{#p/papyrus}{#e/papyrus/15}有个人类出现啦！\n就站在我面前呢！",
         "<15>{#p/papyrus}{#e/papyrus/27}旁边的是...\n迷你版的ASGORE？",
         "<15>{#p/papyrus}{#e/papyrus/24}额...\n说实话我不太确定。"
      ],
      shockpapyrus1: () =>
         [
            [
               "<32>{#p/asriel2}* 准备好了吗，$(name)？",
               choicer.create("* （Asriel应该怎么做？）", "仁慈", "行动", "魔法", "战斗")
            ],
            ["<32>{#p/asriel2}* 我们速战速决吧。"]
         ][Math.min(SAVE.flag.n.ga_asrielPapyrus, 1)],
      shockpapyrus2a: [
         "<32>{#p/asriel2}* 仁慈，嗯？",
         "<32>{#p/asriel2}* 仁慈...？\n  这真是个好听的词。",
         "<32>{#p/asriel2}* 那咱们就给他来点“仁慈”吧。"
      ],
      shockpapyrus2b: [
         "<32>{#p/asriel2}* 行动...？\n* 看好了，什么才叫行动。",
         "<32>{#p/asriel2}* 首先，举起手臂...",
         "<32>{#p/asriel2}* 接着...！"
      ],
      shockpapyrus2c: [
         "<32>{#p/asriel2}* 魔法，\n  它可化为纽带，\n  让怪物们团结一心。",
         "<32>{#p/asriel2}* 不过，反过来...",
         "<33>{#p/asriel2}* 它也能成为利刃，\n  刺穿他们的肉体。"
      ],
      shockpapyrus2d: ["<32>{#p/asriel2}* 战斗... 真是不二之选。", "<32>{#p/asriel2}* 嘻嘻嘻..."],
      sansDeath1: ["<15>{#p/papyrus}{#e/papyrus/27}SANS！\n你受伤了！"],
      sansDeath2: ["<20>{#p/sans}papyrus，\n我不是让你待在家里吗？", "{*}{#e/papyrus/21}{%}"],
      sansDeath3: ["<20>{#p/sans}...别担心，兄弟。\n这只是我最喜欢的\n番茄酱。", "{*}{#e/papyrus/26}{%}"],
      sansDeath4: ["<15>{#p/papyrus}{#e/papyrus/21}但你真的\n伤得很重..."],
      sansDeath5: [
         "<20>{#p/sans}我看得见，\n刚只是随口一说。",
         "<20>{#p/sans}...这样的伤口，\n应该是没办法了。",
         "{*}{#e/papyrus/21}{%}"
      ],
      sansDeath6: [
         "<20>{#p/sans}看样子...",
         "<20>恐怕...\n只能陪你到这了。",
         "<20>...",
         "<20>只是...",
         "<20>答应我，哪怕我不在，\n你也要好好活下去，\n兄弟。",
         "<20>答应我，你还会做\n那个最-{^5}最棒的你。",
         "<20>...",
         "<20>毕竟..."
      ],
      sansDeath7: ["<20>{|}{#p/sans}你可是...\n伟大的p-{^5}papyrus。"],
      sansDeath8: ["<15>{#p/papyrus}{#e/papyrus/33}不-不...{^40}{%}"],
      fast_food1: () => [
         SAVE.data.b.fryz
            ? "<32>{#p/human}{#npc}* (You got the Flamin' Grillby.)"
            : "<32>{#p/human}{#npc}* (You got the Sliders.)"
      ],
      fast_food2: ["<32>{#p/human}{#npc}* （你带的东西太多了。）"],
      aussie: pager.create(
         0,
         () =>
            SAVE.data.n.state_starton_trashprogress < 1
               ? [
                  "<25>{#p/sans}{#f/0}* finally.",
                  "<25>{#f/3}* i've been wondering when you'd show up.",
                  "<25>{#f/0}* i dunno if you recall, but back when we first met...",
                  "<25>{#f/0}* i told papyrus to focus more on the \"gravity\" of the situation.",
                  "<25>{#f/0}* what did i mean by that, you ask?",
                  "<25>{#f/3}* well.",
                  "<25>{#f/2}* you're about to {@fill=#003cff}find out{@fill=#fff}."
               ]
               : ["<25>{#p/sans}{#f/0}* 欢迎回来。", "<25>{#f/2}* ready to find out what awaits you?"],
         () =>
            SAVE.data.n.state_starton_trashprogress < 1
               ? ["<25>{#p/sans}{#f/0}* go on, take a look.", "<25>{#f/2}* it's right up there, bucko."]
               : ["<25>{#p/sans}{#f/2}* it's right up there, bucko."],
         () =>
            SAVE.data.n.state_starton_trashprogress < 2
               ? ["<25>{#p/sans}{#f/2}* don't worry, it's not dangerous... even if it tries to be."]
               : ["<25>{#p/sans}{#f/2}* thanks for the help."]
      ),
      trashhunt1: [
         "<25>{#p/sans}{#f/0}* sooo... whaddya think?",
         "<25>{#f/3}* i call it the \"trash planet.\"",
         "<25>{#f/0}* ... actually, this thing's been growing in size for quite a while.",
         "<25>{#f/0}* if it gets any larger, well...",
         "<25>{#f/2}* let's just say we'd be in a {@fill=#ff0}world{@fill=#fff} of trouble.",
         "<25>{#f/0}* don't worry, though.\n* with your help, it'll be gone in no time.",
         "<25>{#f/2}* i even found you some music to keep you motivated."
      ],
      trashhunt2: "* Press [Z] repeatedly to shake\n  out all the trash!",
      trashhunt3: () => [
         "<25>{#p/sans}{#f/3}* wow.\n* all in one go, huh?",
         "<25>{#f/2}* ... well i'll be turned upside down.",
         "<25>{#f/0}* guess i gotta give you some kinda reward.",
         "<25>{#f/0}* ...\n* here.\n* have this on me.",
         "<32>{#p/human}* (Sans tossed you something.)",
         ...(SAVE.storage.inventory.size < 8
            ? ["<32>{#s/equip}{#p/human}* (You got the Corn Dog Sword.)", "<25>{#p/sans}{#f/2}* use it wisely."]
            : [
               "<32>{#p/human}* （你带的东西太多了。）",
               "<25>{#p/sans}{#f/3}* no room, huh?",
               "<25>{#p/sans}{#f/2}* don't worry.\n* i'll leave it in my room for you."
            ])
      ],
      gravo1: () =>
         SAVE.data.b.svr
            ? [
               "<32>{#p/human}* (You look curiously at the seemingly useless device.)",
               ...[["<25>{#p/asriel1}{#f/17}* Too bad we don't have the remote for this thing, huh?"], []][
               Math.min(asrielinter.gravo1++, 1)
               ]
            ]
            : ["<32>{#p/basic}* 这是个“重力转换器”。", "<32>* 管它什么意思。"],
      gravo3: () => [
         "<32>{#p/human}* (You use the Gravometric Inverter Remote.)\n* (Nothing happens.)",
         ...(SAVE.data.b.svr
            ? [["<25>{#p/asriel1}{#f/21}* They're probably shutting off power for non-essential devices."], []][
            Math.min(asrielinter.gravo3++, 1)
            ]
            : ["<32>{#p/basic}* It must be offline..."])
      ],
      gravo2: ["<32>{#p/human}* (You use the Gravometric Inverter Remote.)"],
      sansdoor1: () =>
         SAVE.data.b.svr || world.runaway
            ? ["<32>{#p/human}* (It looks to have been closed with a deadlock seal.)"]
            : ["<32>{#p/basic}* 锁住了。"],
      sansdoor2: ["<32>{#p/human}* (You use the Skeleton Key.)"],
      sanscab1: () => [
         ...(SAVE.data.b.svr ? [] : ["<32>{#p/basic}* There's an odd remote inside of this envelope."]),
         "<32>{#s/equip}{#p/human}* (The Gravometric Inverter Remote was added to your keyring.)"
      ],
      sanscab2: () =>
         SAVE.data.b.svr
            ? ["<32>{#p/human}* (But you already emptied the envelope of its contents.)"]
            : ["<32>{#p/basic}* It's just an empty envelope."],
      sanscab3: () => [
         ...(SAVE.data.b.svr ? [] : ["<32>{#p/basic}* There's an odd... item, inside of this envelope."]),
         SAVE.storage.inventory.size < 8
            ? "<32>{#s/equip}{#p/human}* (You got the Corn Dog Sword.)"
            : "<32>{#p/human}* （你带的东西太多了。）"
      ],
      cream_get: ["<32>{#p/human}* (You got the Ice Dream.)"],
      cream_deny: ["<32>{#p/basic}* 什么都没有。"],
      cream_full: ["<32>{#p/human}* （你带的东西太多了。）"],
      cream_get_archive: [
         "<32>{#p/human}* (You reach into the cart.)",
         "<32>{#p/human}{#s/equip}* (You got the Ice Dream.)"
      ],
      cream_empty_archive: ["<32>{#p/human}* (You reach into the cart.)", "<32>{#p/human}* (...)"],
      cream_full_archive: ["<32>{#p/human}* (You're carrying too much to reach inside.)"],
      bunbun: pager.create(
         0,
         () =>
            SAVE.data.n.plot === 72
               ? ["<32>{#p/basic}* Mom says that we're going to a new homeworld soon.", "<32>* ... what's a homeworld?"]
               : [
                  "<32>{#p/basic}* 妈妈说，睡觉可以把你的\n  生命值恢复到{@fill=#ff0}HP上限以上{@fill=#fff}。",
                  "<32>* ...HP上限是什么啊？"
               ],
         () =>
            SAVE.data.n.plot === 72
               ? ["<32>{#p/basic}* Do humans have a homeworld?"]
               : ["<32>{#p/basic}* Is it something monsters have?"]
      ),
      emptytable1: () =>
         SAVE.data.b.svr
            ? ["<32>{#p/human}* (The table strikes you as being rather lonesome.)"]
            : ["<32>{#p/basic}* 只是张孤零零的桌子。\n* 上面有糖霜的味道。"],
      emptytable2: () =>
         SAVE.data.b.svr
            ? ["<32>{#p/human}* (The table strikes you as being rather lonesome.)"]
            : ["<32>{#p/basic}* 一张孤零零的桌子。\n* 上面有毛发的味道。"],
      balcony0: ["<18>{#p/papyrus}ENJOYING THE VIEW?", choicer.create("* （你要怎么回答？）", "是", "否")],
      balcony1: [
         "<18>{#p/papyrus}{#f/9}GOOD!\nIT'S ABOUT TIME SOMEONE DID.",
         "<18>{#f/7}SANS BARELY EVER TAKES THE TIME TO LOOK OUTSIDE!!!"
      ],
      balcony2: [
         "<18>{#p/papyrus}{#f/5}OH...\nWELL, THAT'S OKAY...",
         "<18>{#f/4}(SIGH...)\nAT LEAST YOU TRIED WALKING OUT.",
         "<18>{#f/7}SANS WOULDN'T EVEN DO THAT!!!"
      ],
      bedbook1: () =>
         SAVE.data.b.svr
            ? ["<32>{#p/human}* (You can't seem to understand the contents of this book.)"]
            : ["<32>{#p/basic}* 一本用古老的语言写成的书。"],
      bedbook3a: ["<32>{#p/basic}* Would you like me to read it?"],
      bedbook3b: ["<32>{#p/basic}* Read it again?"],
      bedbook4: [choicer.create("* (Have $(name) read the book?)", "是", "否")],
      bedbook5: [
         "<32>{#p/basic}* Okay, here goes...",
         "<32>* \"Long ago, two species ruled the solar system: humans and monsters.\"",
         "<32>* \"At first, the monsters were only visitors, soon to return to their own star system.\"",
         "<32>* \"But the monsters became fascinated by humanity, and wanted to co-exist with them.\"",
         "<32>* \"As such, they shared their technology with the humans, and forged an alliance.\"",
         "<32>* \"Over the next few hundred years, monsters and humans lived in peace and harmony.\"",
         "<32>* \"One day, the humans began to fear something about the monsters...\"",
         "<32>* \"A fear that, without skilled leadership, was allowed to spiral out of control.\"",
         "<32>* \"As time passed, a war broke out between the two species.\"",
         "<32>* \"Many battles and skirmishes would occur all across the solar system...\"",
         "<32>* \"But the humans, filled with fear and determination, easily took control.\"",
         "<32>* \"Then, on one fateful day, a massive weapon was fired at the monsters' homeworld.\"",
         "<32>* \"After the monsters' home planet was destroyed, humans declared victory.\"",
         "<32>* \"A settlement between the two species was signed, and...\"",
         "<32>* \"The remaining monsters were banished to an abandoned outpost.\"",
         "<32>* \"Then, the humans gathered seven of their brightest minds.\"",
         "<32>* \"A powerful force field was erected, and the monsters were sealed in.\"",
         "<32>* Well, that's the story."
      ],
      bedbook6: ["<32>{#p/basic}* Well, if you ever want me to read it, let me know."],
      beddoor1: ["<32>{#p/basic}{#npc/a}* 如果你想订房间，\n  你得先问我一声。"],
      beddoor2: ["<32>{#p/basic}{#npc/a}* 如果你还想订房间，\n  你得先问我一声。"],
      beddoor3: ["<32>{#p/basic}{#npc/a}* Sorry, munchkin!\n* No more vacancies left here!"],
      candy1: () => [
         SAVE.data.b.svr
            ? "<32>{#p/human}* (You approach the vending machine.)"
            : "<32>{#p/basic}* 这是一台专门售卖\n  高档洋梅的自动售货机。",
         choicer.create("* （花8G来买洋梅吗？）", "是", "否")
      ],
      candy2: ["<32>{#p/human}* （你的钱不够。）"],
      candy3: ["<32>{#p/human}* （你带的东西太多了。）"],
      candy4: ["<32>{#p/human}* （你买了些洋梅。）"],
      candy5: ["<32>{#p/human}* （你打算先不买。）"],
      capstation1: [
         "<32>{#p/human}* (You look behind the station and find a key.)",
         "* （生锈的钥匙被添加到了\n  你的钥匙串上。）",
         "<32>* （打开“电话”来检查\n  所有获得的钥匙。）"
      ],
      capstation2: ["<32>{#p/human}* (You look behind the station.)", "<32>{#p/basic}* Nothing new back here."],
      crossword0: () =>
         world.edgy
            ? [
               "<25>{#p/sans}* 哦，你来了。",
               "<25>{#p/sans}{#f/2}* 如果你喜欢上一个谜题的话，\n  估计这个也能合你胃口。"
            ]
            : [
               "<18>{#p/papyrus}{#f/9}人类！！",
               "<18>{#f/9}你已经看到\n我的谜题了。",
               "<18>{#f/4}但你接下来\n将要看到的是..."
            ],
      crossword1: () =>
         world.edgy
            ? [
               "<26>{#p/sans}* 其实也不需要了。\n* 走过来瞧瞧吧。",
               "<25>{#p/sans}* 喏，它就在地上呢。"
            ]
            : [
               "<18>{#p/papyrus}{#f/7}SANS！！\n谜题在哪！？",
               "<25>{#p/sans}* 就在你眼皮底下呢。",
               "<18>{#p/papyrus}{#f/1}啥？\n就地上躺的那块板子？",
               "<18>{#f/4}行吧..."
            ],
      crossword2: (check: boolean) =>
         world.edgy
            ? [
               check
                  ? "<25>{#p/sans}* 咋了？\n  谜题让你“郁”罢不能吗？"
                  : "<25>{#p/sans}* 看都不愿意看一眼，是吧？",
               "<25>* 真不该对你期望太高。",
               "<26>{#f/3}* 好吧，\n* 说不定，数谜更适合你。",
               "<26>{#f/0}* 跑题了。"
            ]
            : [
               check
                  ? "<18>{#p/papyrus}{#f/7}SANS！！！\n那根本没有用啊！"
                  : "<18>{#p/papyrus}{#f/7}SANS！！！\n那个人类连\n看都没看一眼！",
               "<25>{#p/sans}* 啊呀。",
               "<25>{#f/3}* 我就知道我应该用\n今天的数和谜题代替的。",
               "<18>{#p/papyrus}{#f/1}啥！？数和！？",
               "<18>{#f/9}我真不敢相信\n你居然会提到它！！",
               "<18>{#f/4}在我看来...",
               "<18>{#f/0}数独无疑才是最难的。",
               "<25>{#p/sans}* 什么？你认真吗，兄弟？\n* 那个简单到爆的\n  数字排列组合？",
               "<25>{#f/4}* 那是给骷髅宝宝玩的。",
               "<18>{#p/papyrus}{#f/4}真。难以置信。",
               "<18>{#f/9}人类！！！\n你来评评理！",
               choicer.create("* （哪边更难？）", "数独", "数和")
            ],
      crossword3a: [
         "<18>{#p/papyrus}哈！哈！好！",
         "<18>要是人类也觉得\n数独更难的话！",
         "<18>那他们一定\n非常聪明！",
         "<18>{#f/9}捏！嘿！嘿！嘿！"
      ],
      crossword3b: [
         "<18>{#p/papyrus}{#f/9}你们两个真怪！",
         "<18>{#f/0}数和谜题\n真的太简单了。",
         "<18>每次的解法\n都是一样的。",
         "<18>{#f/4}我只要把每个空格\n都填上字母“Z”\n就好了...",
         "<18>{#f/4}因为我\n每做一道数和...",
         "<18>{#f/9}除了打瞌睡\n我什么都做不了！！！"
      ],
      crossword3c: [
         "<25>{#p/sans}{#f/3}* 顺便提一嘴，\n  我之前看到有两只狗\n  在这边跑来跑去...",
         "<25>{#f/0}* 如果我是你的话，\n  我会小心点的。"
      ],
      crossword4a: pager.create(0, ["<25>{#p/sans}* 嘿，你要去哪，小子？"], ["<25>{#p/sans}* 回来。"]),
      crossword4b: pager.create(0, ["<25>{#p/sans}* 你认真？\n* 也没那么难吧。"], ["<25>{#p/sans}* 你认真？"]),
      crossword5a: [
         "<25>{#p/sans}* 感谢你为了安抚我兄弟\n  回答说“数独更难”。",
         "<25>{#f/4}* 昨天他还试图“破解”\n  星象图，结果被难住了呢。"
      ],
      crossword5b: [
         "<25>{#p/sans}* papyrus...\n* ...他总会在令人\n  意想不到的地方碰壁。",
         "<25>{#f/4}* 昨天他还试图“破解”\n  星象图，结果被难住了呢。"
      ],
      crossword6a: [
         "<25>{#p/sans}{#f/3}* 我早就料到\n  你会直接跳过的。",
         "<25>{#f/0}* 这不就是你碰到谜题时\n  常用的伎俩么？"
      ],
      crossword6b: [
         "<25>{#p/sans}{#f/3}* 挺惊讶的。\n* 我以为你会看都不看一眼\n  直接跳过。",
         "<25>{#f/2}* 也许，你还没有烂到骨子里。"
      ],
      crossword6c: ["<25>{#p/sans}{#f/2}* heheh, made you look."],
      crossword6d: [
         "<25>{#p/sans}{#f/3}* i'm surprised.\n* i thought you weren't even interested.",
         "<25>{#f/2}* 也许，你还没有烂到骨子里。"
      ],
      doggo1: [
         "<32>{#p/basic}* 好像有啥动了下？\n* 是我的错觉吗？",
         "<32>* 如果确实有什么在动...\n* 比如说，一个人类...",
         "<32>* 我绝不会让他\n  再从我眼皮子底下溜走！"
      ],
      doggo2: [
         [
            "<32>{#p/basic}* 有什么没-没-没在动的东西...\n* 摸-摸-摸了我...！",
            "<32>* 我得吃点狗粮压压惊。"
         ],
         ["<32>{#p/basic}* A w-w-wrench appeared out of nowhere, h-huh!?!?", "<32>{#p/basic}* ... what a day!"],
         [],
         [
            "<32>{#p/basic}* A h-h-human came up and attacked me...\n* Out of n-n-nowhere...!",
            "<32>{#p/basic}* I'm...\n* I'm gonna go to bed."
         ]
      ],
      doggo3: pager.create(
         0,
         ["<32>{#p/basic}* 你好？\n* 有人在吗...？"],
         ["<32>{#p/basic}* 你们两个是在整我吗？\n* 真好笑啊，伙计。"],
         ["<32>{#p/basic}* Big lug?\n* Is that you?\n* Come on..."],
         ["<32>{#p/basic}* 嗯，看来并不是那个\n  高个子骷髅...\n* 他太吵了。"],
         ["<32>{#p/basic}* 赶紧给我停下，无论你是谁！！！"],
         ["<32>{#p/basic}* ..."]
      ),
      doggo3x: ["<32>{#p/basic}* (Snore... snore...)"],
      drop_chip: [
         "<32>{#p/basic}* Did you just...\n* Drop the part of me I had given you?",
         "<32>* I have no words for you...\n* Begone!"
      ],
      drop_cream: ["<32>{#p/basic}* You know, you're lucky I'm busy advertising."],
      eat_chip: [
         "<32>{#p/basic}* Did you just...\n* Consume the part of me I had given you?",
         "<32>* I have no words for you...\n* Begone!"
      ],
      eat_cream: ["<32>{#p/basic}* Nice to see you enjoying your Ice Dream!\n* Very nice!"],
      genotext: {
         asriel1: () =>
            [["<25>{#p/asriel2}{#f/9}* 跟我走就行。"], ["<25>{#p/asriel2}{#f/16}* 走吧。"]][
            Math.min(SAVE.flag.n.ga_asriel1++, 1)
            ],
         asriel2: () =>
            [
               ["<25>{#p/asriel2}{#f/2}* 哎，前面站着的，\n  不是伟大的Papyrus吗？"],
               ["<25>{#p/asriel2}{#f/3}* 嗯... 再来一次吧。"]
            ][Math.min(SAVE.flag.n.killed_sans, 1)],
         asriel3: () =>
            [
               ["<25>{#p/asriel2}{#f/1}* 咱们去做个“自我介绍”，\n  怎么样？"],
               ["<25>{#p/asriel2}{#f/4}* 你知道该干什么。"]
            ][Math.min(SAVE.flag.n.killed_sans, 1)],
         asriel4: ["<25>{*}{#p/asriel2}{#f/5}* 哈喽！{^5}{%}"],
         asriel5: ["<18>{*}{#p/papyrus}{#f/1}干啥- {%}"],
         asriel6: () =>
            [
               [
                  "<25>{#p/asriel2}{#f/15}* 嘿... $(name)...",
                  "<25>{#f/17}* 要不，从现在开始\n  由你来动手吧？",
                  "<25>{#f/16}* 我... 我没事，真没事。",
                  "<25>{#f/13}* 你应该比我更擅长干这事..."
               ],
               ["<25>{#p/asriel2}{#f/16}* 额，好吧。\n* ...之后你来动手。"],
               ["<25>{#p/asriel2}{#f/15}* 那么... 前进吧？"],
               ["<25>{#p/asriel2}{#f/15}* ..."]
            ][Math.min(SAVE.flag.n.ga_asriel6++, 3)],
         asriel9: ["<25>{#p/asriel2}{#f/8}* 嘘，等一下，\n  看看他会做些什么。"],
         asriel10: () =>
            [
               [
                  "<25>{#p/asriel2}{#f/15}* 哇，\n  Papyrus这么颓废的样子...",
                  "<25>{#f/16}* 我真是头一次见到。",
                  "<25>{#f/13}* 嘿，$(name)...",
                  "<25>{#f/1}* 我感觉接下来有好戏看了。"
               ],
               ["<25>{#p/asriel2}{#f/16}* 真是可怜。"]
            ][Math.min(SAVE.flag.n.ga_asriel10++, 1)],
         asriel17: () =>
            [["<25>{#p/asriel2}{#f/16}* 天呐，$(name)...\n  有些怪物就是听不懂话。"], ["<25>{#p/asriel2}{#f/4}* 切。"]][
            Math.min(SAVE.flag.n.ga_asriel17++, 1)
            ],
         asriel24: () =>
            [["<25>{#p/asriel2}{#f/4}* 真是浪费时间。"], ["<25>{#p/asriel2}{#f/3}* 呵呵。"]][
            Math.min(SAVE.flag.n.ga_asriel24++, 1)
            ],
         asriel26: () =>
            [
               [
                  "<26>{#p/asriel2}{#f/3}* 好了，那群蠢狗\n  已经全军覆没了。",
                  "<26>{#p/asriel2}{#f/4}* 再过一座桥，就到小镇了。",
                  "<25>{#f/1}* ...跟我来。"
               ],
               ["<25>{#p/asriel2}{#f/3}* 我们去镇上。"]
            ][Math.min(SAVE.flag.n.ga_asriel26++, 1)],
         asriel28: () =>
            [
               [
                  "<25>{#p/asriel2}{#f/6}* 好，$(name)，\n  现在整个镇子都是你的了。",
                  "<25>{#f/7}* 而我要去忙点别的事，\n  之后会派上用场。",
                  "<25>{#f/1}* 别担心，我去去就回。"
               ],
               ["<25>{#p/asriel2}{#f/1}* 镇子出口见。"]
            ][Math.min(SAVE.flag.n.ga_asriel28++, 1)],
         asriel29: () =>
            [
               SAVE.data.b.papyrus_secret
                  ? [
                     "<25>{#p/asriel2}{#f/2}* 嘻。\n* 嘻。\n* 嘻....",
                     "<25>{#f/10}* ...等等，Papyrus在哪？",
                     "<25>{#f/10}* ...",
                     "<25>{#f/4}* 天呐，$(name)，\n  没想到你下手这么快。"
                  ]
                  : [
                     "<25>{#p/asriel2}{#f/2}* 嘻。\n* 嘻。\n* 嘻....",
                     "<25>{#f/1}* 天呐，那个蠢骨头\n  那么想原谅你...",
                     "<25>{#f/13}* 最后还是尝到了仁慈的后果。",
                     "<25>{#f/16}* 不过，先别管他了。",
                     "<25>{#f/1}* 咱们等下还要拉长线，\n  钓大鱼呢。"
                  ],
               ["<25>{#p/asriel2}{#f/13}* 哎呀，这蠢骷髅\n  又白白送死了。"],
               [
                  "<25>{#p/asriel2}{#f/13}* 俗话说，好铁要经三回炉。",
                  "<25>{#f/16}* 但很遗憾，他一回就不行了。"
               ],
               [
                  "<25>{#p/asriel2}{#f/6}* 你已经杀了他四次了。",
                  "<25>{#f/8}* 看来你很享受这种快感啊..."
               ],
               ["<25>{#p/asriel2}{#f/15}* 又来...？"]
            ][Math.min(SAVE.flag.n.ga_asriel29++, 4)],
         asriel30: () => [
            "<25>{#p/asgore}{#f/1}* ...",
            "<25>{#f/1}* 哈喽，Asriel。",
            "<25>{#f/2}* ...",
            "<25>{#f/3}* 我们谈一下吧。",
            ...[
               [
                  "<25>{#p/asriel2}{#f/6}* 谈谈？\n* 跟你有什么好谈的？",
                  "<25>{#f/6}* 还有，你怎么在这？",
                  "<25>{#f/7}* 既然早晚我都要\n  把你送到阎王跟前...",
                  "<25>{#f/8}* 那不如... {%15}"
               ],
               [
                  "<25>{#p/asriel2}{#f/8}* 你想谈谈？\n* 别来浪费我的时间。",
                  "<25>{#f/6}* 放个全息投影，还想蒙我？",
                  "<25>{|}{#p/asgore}{#f/5}* 你怎么- {%}",
                  "<25>{#p/asriel2}{#f/1}* 少问。"
               ]
            ][Math.min(SAVE.flag.n.ga_asriel30x, 1)]
         ],
         asriel30a: [
            "<25>{#p/asriel2}{#f/8}* 开玩笑吗？\n* 这只是个全息投影？",
            "<25>{#f/6}* 我知道你是个懦夫，\n  可你竟然还能怂出个新境界。"
         ],
         asriel30b: [
            "<25>{#p/asgore}{#f/1}* 你就没有更重要的事可做吗？",
            "<25>{#p/asriel2}{#f/8}* ...",
            "<25>{|}{#p/asgore}{#f/3}* 听着，儿子，我只是- {%}",
            "<25>{#p/asriel2}{#f/7}* 我不是你儿子。\n* 我早就不是你儿子了。",
            "<25>{#p/asgore}{#f/2}* ...",
            "<25>{#p/asgore}{#f/1}* 好吧，Asriel。\n* 你知不知道自己\n  正变成什么样？",
            "<25>{#f/2}* 铁石心肠，罪不可赦...",
            "<25>{#p/asriel2}{#f/8}* 哼，别装的好像\n  你很在乎我似的，爹。",
            "<25>{#p/asgore}{#f/5}* ...",
            "<25>{#p/asriel2}{#f/9}* 不好意思，\n  刚不该叫你“爹”的，\n  Asgore。",
            "<25>{#f/1}* 真是抱歉。",
            "<25>{#p/asgore}{#f/3}* ...\n* 开玩笑吧...",
            "<25>{#f/5}* 好好想想你的所作所为，\n  这可不是为了我们...",
            "<25>{#f/6}* 是为了你好！",
            "<25>{#p/asriel2}{#f/8}* ...",
            "<25>{#p/asriel2}{#f/7}* ...让我缓缓。",
            "<26>{#f/6}* 显然你来这只是想气我。",
            "<25>{#p/asgore}{#f/3}* ...",
            "<25>{#p/asriel2}{#f/6}* ...",
            "<25>{#p/asgore}{#f/7}* 你得意识到\n  你的选择是有份量的！",
            "<25>{#p/asriel2}{#f/15}* 不然？\n  没份量不就飘起来了吗？\n  谁还看得到？",
            "<25>{#f/16}* $(name)，我们走。\n  我受够他了。"
         ],
         asriel30c: ["<25>{*}{#p/asgore}{#f/8}* Asriel，求你别走！\n* 我只是想帮你！{^999}"],
         asriel30d: () =>
            [
               ["<25>{#p/asriel2}{#f/3}* 做好准备，$(name)。", "<26>{#f/4}* 这儿可是Undyne的地盘。"],
               ["<25>{#p/asriel2}{#f/4}* 带路吧。"]
            ][Math.min(SAVE.flag.n.ga_asriel30d++, 1)],
         papyrusSolo1a: [
            "<18>{#p/papyrus}{#f/31}SANS？\n那是个人类吗？",
            "<18>{#f/5}应该是的吧？",
            "<18>{#f/32}捏...\nUNDYNE总算会...",
            "<18>{#p/papyrus}{#f/31}我能加入皇家卫队了...",
            "<18>{#f/5}你会以我为荣的吧？",
            "<25>{#p/asriel2}{#f/3}* 你骗不了自己的，Papyrus。\n* 他已经死了。",
            "<18>{|}{#p/papyrus}{#f/5}可是- {%}",
            "<25>{#p/asriel2}{#f/3}* 够了。\n* 你再怎么使劲呼唤，\n  他也听不见的。", 
            "<18>{#p/papyrus}{#f/6}不会的...\nSANS他...",
            "<18>{#f/31}他向我承诺过的...",
            "<25>{#p/asriel2}{#f/8}* 那个蠢骨头\n  要能遵守承诺就怪了。",
            "<26>{#f/9}* 虽然我也不比他好到哪儿去。", 
            "<18>{#p/papyrus}{#f/31}...",
            "<18>{#f/3}对不起。\n我得走了..."
         ],
         papyrusSolo2a: [
            "<18>{#p/papyrus}{#f/31}唉，我刚从\nUNDYNE那回来...",
            "<18>{#f/31}她说国王找你有事。",
            "<25>{#p/asriel2}{#f/6}* ...",
            "<18>{#p/papyrus}{#f/3}他原话是\n“我想见见我儿子”。",
            "<18>{#f/7}...",
            "<18>{#f/7}我们的王子竟然\n杀了我兄弟，\n真是难以置信！",
            "<25>{|}{#p/asriel2}{#f/8}* 其实你才是我们原本想- {%}",
            "<18>{#p/papyrus}{#f/7}真是够了！！",
            "<18>{#f/7}你出卖集体，背叛同胞！",
            "<18>{#f/7}为了啥呢！？",
            "<18>{#f/7}就为了取悦自己吗？",
            "<25>{#p/asriel2}{#f/16}* 对啊，Papyrus。\n* 就是因为这么做很爽。",
            "<18>{#p/papyrus}{#f/7}扯淡！！！",
            "<18>{#p/papyrus}{#f/4}还有你，人类...",
            "<18>{#f/7}别以为我不知道\n事态会怎么发展。",
            "<18>{#f/7}显而易见，你才是主谋。",
            "<25>{#p/asriel2}{#f/8}* 你真有眼力。",
            "<25>{#f/7}* 眼下我们是不是该\n  就地投降才好呢？",
            "<18>{#p/papyrus}{#f/31}...",
            "<25>{#p/asriel2}{#f/4}* 先说明了，你这股努力的劲儿\n  确实令我佩服。",
            "<25>{#f/3}* 但我们自有打算。",
            "<18>{#p/papyrus}{#f/4}你要知道，UNDYNE可能\n正盯着我们呢。",
            "<25>{#p/asriel2}{#f/3}* 你想说什么？",
            "<25>{#f/4}* ...告诉你，Papyrus，\n  你和其他人做什么，\n  跟我们都毫无关系。",
            "<25>{#f/1}* 只要在一起，\n  谁都无法把我们分开。",
            "<18>{#p/papyrus}{#f/7}...我呸！！"
         ],
         papyrusSolo3: ["<25>{#p/asriel2}{#f/3}* 哈喽！"],
         papyrusSolo3a: () => [
            "<18>{#p/papyrus}{#f/31}你知道吗...",
            "<18>{#f/31}我偶然听到ALPHYS博士\n自言自语...",
            "<18>{#f/5}从她的话中我听到个词，\n好像是“时间回溯”？",
            "<18>{|}{#f/32}{#x1}我不确定，但好像你们- {%}",
            "<25>{#p/asriel2}{#f/6}* 没门。",
            "<18>{|}{#p/papyrus}{#f/6}但她说了你们能- {%}",
            ...(SAVE.flag.n.genocide_milestone < 5
               ? ["<25>{#p/asriel2}{#f/6}* 没门。"]
               : SAVE.flag.n.genocide_milestone < 6
                  ? ["<25>{#p/asriel2}{#f/6}* 没门，不过我要是那么做的话\n  她会很高兴的。"]
                  : ["<25>{#p/asriel2}{#f/6}* 没门，反正她最后\n  也要跟着去见阎王。"]),
            "<18>{#p/papyrus}{#f/31}可是，假如你真能\n回溯时间，抹掉过去...",
            "<18>{#f/5}为什么不去试试呢？",
            "<18>{#f/31}下一条时间线里，\n让-让我代他去死。",
            "<18>{#f/3}那样，他就能活下来了，\n对吧？",
            "<25>{#p/asriel2}{#f/6}* ...\n* 跟你说，我早就看过\n  那条线了。",
            "<25>{#f/7}* 无聊至极。",
            "<18>{#p/papyrus}{#f/3}...",
            "<18>{#f/6}那么，我给你看看\n这个谜题吧？",
            "<18>{#f/32}说不定，\n它能让你不那么无聊...",
            "<25>{#p/asriel2}{#f/15}* ...",
            "<25>{#p/asriel2}{#f/15}* 你要是喜欢这么做的话，\n  那就随你的便。",
            "<18>{#p/papyrus}哦，哦！",
            "<18>{#f/0}太好了！！",
            "<18>{#f/0}你开始改变想法了！",
            "<25>{#p/asriel2}{#f/8}* ...",
            "<18>{#p/papyrus}{#f/6}...",
            "<18>{|}{#f/5}那么，规则是这样的- {%}",
            "<25>{#p/asriel2}{#f/7}* 我们早就知道了，蠢货。",
            "<18>{#p/papyrus}{#f/31}...哦...",
            "<18>{#f/6}呃，好吧！！\n那我就不解释了...",
            "<18>{#f/9}看看我们的\n随机数字是多少吧！！"
         ],
         papyrusSolo4a: [
            "<18>{#p/papyrus}{#f/3}ASRIEL。",
            "<25>{#p/asriel2}{#f/6}* Papyrus。",
            "<18>{#p/papyrus}{#f/31}...",
            "<18>{#f/31}为什么？",
            "<18>{#f/31}为什么你要这么做？",
            "<18>{#f/3}一个怪物不应该\n会变成这样啊...",
            "<18>{#f/5}你的爱去哪了？\n你的同情心去哪了？",
            "<18>{#f/31}你的... 仁慈...",
            "<25>{#p/asriel2}{#f/2}* ...\n* 哦，您可真是\n  文曲星下凡啊...",
            "<25>{#f/1}* 在我的灵魂中，\n  这些东西早就化为乌有了。",
            "<18>{#p/papyrus}{#f/31}但...\n我不明白...",
            "<18>{#f/5}一个有着这般\n纯洁心灵的怪物...",
            "<18>{#f/31}...怎么会\n彻底堕入黑暗呢？",
            "<25>{#p/asriel2}{#f/1}* 你真想知道吗？",
            "<18>{#p/papyrus}{#f/3}...",
            "<18>{#f/3}对...",
            "<25>{#p/asriel2}{#f/10}* 你确实是真心想知道吗？",
            "<18>{#p/papyrus}{#f/31}对。",
            "<25>{#p/asriel2}{#f/3}* 说大点声。",
            "<18>{#p/papyrus}{#f/5}对！",
            "<26>{#p/asriel2}{#f/1}* 对我说，洋求我\n  把梅说的都告诉你。",
            "<18>{#p/papyrus}{#f/7}好！洋求你把梅说的\n都告诉我吧！该死！",
            "<25>{#p/asriel2}{#f/1}* 嘻嘻嘻...",
            "<25>{#f/1}* 那好，就让我来告诉你吧。",
            "<25>{#f/15}* 其实答案很简单...",
            "<18>{#p/papyrus}{#f/4}我的天哪，快说吧..."
         ],
         papyrusSolo4b: [
            "<25>{*}{#p/asriel2}{#f/14}{@random=1.1/1.1}{@fill=#f00}* $(name)。{%100}",
            "<18>{#p/papyrus}{#f/32}...！",
            "<25>{#p/asriel2}{#f/5}* 哈！\n* 哈哈哈！\n* 看看你什么表情！"
         ],
         papyrusSolo4c: ["<18>{#p/papyrus}{#f/31}我...", "<18>{#f/3}...不..."],
         papyrusSolo4d: [
            "<18>{#p/papyrus}{#f/7}不，你错了。",
            "<18>{#f/7}一直想方设法把我击垮的，\n是你。",
            "<18>{#f/7}那个满嘴谎话的，还是你。",
            "<18>{#f/9}但是我，PAPYRUS...",
            "<18>{#f/9}总算认清了{@fill=#f00}真相{@fill=#fff}。",
            "<25>{#p/asriel2}{#f/13}* 哦？\n* 真相是什么呢？"
         ],
         papyrusSolo4e: ["<18>{#p/papyrus}{#f/34}你才不是{@fill=#f00}ASRIEL{@fill=#fff}。"],
         papyrusSolo4f: [
            "<18>{#f/5}{@fill=#f00}ASRIEL{@fill=#fff}绝不可能\n干出这种事！",
            "<18>{#f/31}因为，{@fill=#f00}ASRIEL{@fill=#fff}心地善良，",
            "<18>{#f/5}信赖同胞...",
            "<18>{#f/31}比谁都相信人类！",
            "<18>{#f/4}而你呢...",
            "<18>{#f/7}你不过是个为了\n一己私欲利用人类的\n卑鄙小人！",
            "<18>{#f/4}我告诉你，\n你爱说啥就说啥，\n我不在乎。",
            "<18>{#f/9}但是，我还相信着\n那个人类。",
            "<25>{#p/asriel2}{#f/8}* 哼，你要真这么信任他...",
            "<25>{#f/7}* 那就证明给我看看。",
            "<25>{#f/3}* 我会离开一会，\n  让你俩单独对峙。",
            "<25>{#f/3}* 他要是饶恕你，\n  那我就认栽。",
            "<25>{#f/4}* 否则，他要是\n  “不小心”杀了你...",
            "<25>{#f/1}* 你就知道你大错特错了。\n  而那个懒骨头死得就\n  一文不值。",
            "<25>{#f/1}* 这主意如何？",
            "<18>{#p/papyrus}{#f/9}...\n我接受。",
            "<25>{#p/asriel2}{#f/3}* 那可太好了。",
            "<25>{#f/4}* 永别了。"
         ]
      },
      houz: () =>
         SAVE.data.b.svr
            ? ["<32>{#p/human}* (You place your hands on the heavily scratched door.)"]
            : ["<32>{#p/basic}* 门上布满了猫的抓痕。"],
      gonezo: () =>
         world.bulrun ? ["<32>{#p/basic}* ...但是人们都逃走了。"] : ["<32>{#p/basic}* ...但是谁也没有来。"],
      garbanzo: ["<32>{#p/human}* (But there was nobody around to occupy the seat.)"],
      doggonopoggo: () =>
         SAVE.data.b.svr
            ? ["<32>{#p/human}* (But there was nobody here.)"]
            : (game.room === 's_doggo' && SAVE.data.n.state_starton_doggo === 2) || // NO-TRANSLATE

               (game.room === 's_dogs' && SAVE.data.n.state_starton_dogs === 2) || // NO-TRANSLATE

               (game.room === 's_pacing' && SAVE.data.n.state_starton_lesserdog === 2) // NO-TRANSLATE

               ? ["<32>{#p/basic}* ...但是谁也没有来。"]
               : ["<32>{#p/basic}* Nobody's home."],
      housebloc: () =>
         SAVE.data.b.svr ? ["<32>{#p/human}* (You can't seem to find a way in.)"] : ["<32>{#p/basic}* 锁住了。"],
      innkeep1a: pager.create(
         0,
         [
            "<32>{#p/basic}{#npc/a}* 欢迎来到星光旅馆！\n* 星港的一流旅馆！",
            "<32>* 每住宿一晚花费60G。",
            choicer.create("* （订一间房吗？）", "是", "否")
         ],
         [
            "<32>{#p/basic}{#npc/a}* 改变主意了吗？",
            "<32>* 记住了，一个晚上60G。",
            choicer.create("* （订一间房吗？）", "是", "否")
         ]
      ),
      innkeep1b: pager.create(
         0,
         [
            "<32>{#p/basic}{#npc/a}* 又回来了吗？\n* 记住，一个晚上60G。",
            choicer.create("* （再订一间房吗？）", "是", "否")
         ],
         ["<32>{#p/basic}{#npc/a}* 改变主意了吗？", choicer.create("* （再订一间房吗？）", "是", "否")]
      ),
      innkeep1c: pager.create(
         0,
         [
            "<33>{#p/basic}{#npc/a}* Back again?\n* Well, stay as long as you like!",
            choicer.create("* （再订一间房吗？）", "是", "否")
         ],
         ["<32>{#p/basic}{#npc/a}* 改变主意了吗？", choicer.create("* （再订一间房吗？）", "是", "否")]
      ),
      innkeep2a: [
         "<32>{#p/basic}{#npc/a}* ... you don't even have 60G?",
         "<32>* Oh! You poor thing.\n* I can only imagine what you've been through.",
         "<32>* One of the rooms upstairs is empty, you can sleep there for free, okay?"
      ],
      innkeep2b: ["<32>{#p/basic}{#npc/a}* 这是你的房间钥匙。\n* 小心别着凉！"],
      innkeep2c: ["<32>{#p/basic}{#npc/a}* Sorry, you don't have enough G..."],
      innkeep3a: ["<32>{#p/basic}{#npc/a}* 您好呀！\n* 您看起来睡得很舒服。"],
      innkeep3b: ["<32>* 挺不可思议的...\n* ...因为您在上面\n  只待了几分钟。"],
      innkeep3c: ["<32>* Feel free to come back if you get tired."],
      innkeep3d: ["<32>* 我把钱退给您。\n* 想过夜的话，可以再付给我哦。"],
      innkeep4: ["<32>{#p/basic}{#npc/a}* 现在还不困？\n* 没关系，只要您需要，\n  我随时为您服务！"],
      innkeep5: [
         "<32>{#p/basic}{#npc/a}* Hello!\n* Sorry, no time for a nap...",
         "<32>* Starred Inn is shutting down so we can leave to find a new homeworld."
      ],
      innkeep6: [
         "<32>{#p/basic}{#npc/a}* Oh, there you are.\n* I've been worrying about you!",
         "<32>* Things are going to be OK, you hear?",
         "<32>* We're all going to settle on a new homeworld soon...",
         "<32>* There's bound to be a place you can stay there!"
      ],
      kidd1: pager.create(
         2,
         ["<25>{#p/kidd}{#f/1}* 怎么了吗？"],
         ["<25>{#p/kidd}{#f/1}* 哟，近来可好？"],
         ["<25>{#p/kidd}{#f/1}* 嘿，嘿！"],
         ["<25>{#p/kidd}{#f/1}* 很高兴见到你，哈哈。"],
         ["<25>{#p/kidd}{#f/1}* 哇，老兄，怎么了吗？"]
      ),
      kidd2: pager.create(
         0,
         () =>
            game.room === 's_town1' // NO-TRANSLATE

               ? [
                  "<25>{#p/kidd}{#f/1}* 呦，你也是个孩子，\n  对吧？",
                  "<25>{#p/kidd}{#f/1}* 我看得出来，\n  因为你穿着条纹衫。"
               ]
               : [
                  "<25>{#p/kidd}{#f/7}* 等下，你也读书的吗！？",
                  "<25>{#p/kidd}{#f/1}* 那个图书倌教会了我所有\n  关于怪物历史的知识！",
                  "<25>{#p/kidd}{#f/3}* 我无法想象在一颗星球上\n  生活会怎么样..."
               ],
         () =>
            game.room === 's_town1' // NO-TRANSLATE

               ? ["<25>{#p/kidd}{#f/1}* 我寻思着那个矮个子骷髅\n  有没有成年。"]
               : ["<25>{#p/kidd}{#f/3}* 你有在星球上生活过吗？"]
      ),
      marriage1: [
         "<32>{#p/basic}* 这是什么味道？\n* （哪里来的气味？）",
         "<32>* 如果你是这个味道...\n* （...证明你的气味！）"
      ],
      marriage2: [
         "<32>{#p/basic}* 嗯...\n* 这就是那个奇怪的味道。",
         "<32>* 这气味令我想把它消灭掉。",
         "<32>* （...把你消灭掉！）"
      ],
      marriage3a: [
         "<32>{#p/basic}* 狗狗可以摸其它狗狗？？？\n* （一扇新世界的大门\n  向我们敞开了...）",
         "<32>* 谢了，古怪的小狗！"
      ],
      marriage3b: [
         "<32>{#p/basic}* Weird smells can bring good things...\n* (Friendly fun fetch!)",
         "<32>* Thanks, weird smell!\n* (It sure was fun to catch a \"wrench\" in the works!)"
      ],
      marriage3c: [
         "<32>{#p/basic}* It's getting harder and harder to sniff things...\n* (Getting harder to see...)",
         "<32>* Let's get out of here!"
      ],
      marriage3d: [
         "<32>{#p/basic}* That weird puppy came out of nowhere...\n* (Almost killed us...)",
         "<32>* Let's get out of here!"
      ],
      marriage3e: [
         "<32>{#p/basic}* Dogs can pet AND play fetch with other dogs???\n* (It's almost criminal...)",
         "<32>* Thanks, weird puppy!\n* (After this, our lives will never be the same!)"
      ],
      marriage4: [
         "<32>{#p/basic}* 王子在哪？\n* （我们没走错路吧？）",
         "<32>* 必须阻止那个恶魔...\n* （...还有他的人类帮凶！）"
      ],
      marriage5: ["<32>{#p/basic}* 呃...\n* 他们在这...", "<32>* （抓住他们！）"],
      maze1: () =>
         world.edgy
            ? [
               "<25>{#p/sans}{#f/0}* 欢迎回来。",
               "<25>{#p/sans}{#f/3}* 真是太遗憾了...",
               "<25>{#p/sans}{#f/2}* 这个谜题\n  papyrus精心准备了好久...\n* 但现在他有事来不了了。",
               "<25>{#p/sans}{#f/0}* 不过，没关系。",
               "<25>{#p/sans}{#f/0}* 我答应过他，会让你解谜的。\n* 那么，开始吧。"
            ]
            : [
               "<18>{#p/papyrus}哦吼，\n那个人类来了！",
               "<18>我和我的兄弟\n制造了一些谜题。",
               "<18>{#f/9}你准备好接受\n挑战了吗，人类！？",
               choicer.create("* （你要怎么回答？）", "是", "否"),
               "<18>{#p/papyrus}回答正确！\n因为你也看到了..."
            ],
      maze2a: [
         "<18>{#x4}{#f/9}从来没有一个工匠\n做的陷阱可以跟我的\n相提并论！",
         "<18>{#f/0}可以让人无法抗拒！",
         "<25>{#x1}{#p/sans}{#f/2}* 也许你才是那个让人\n  无法抗拒的人。",
         "<18>{#p/papyrus}{#f/1}真的吗！？"
      ],
      maze2b: [
         "<18>{#x4}{#f/9}没有人类能解开由\n伟大的PAPYRUS\n所制作的谜题！",
         "<25>{#x1}{#p/sans}{#f/4}* 也没人有机会去解，兄弟。",
         "<18>{#p/papyrus}{#x3}{#f/7}呃啊，这不是重点！！"
      ],
      maze3: ["<18>{#x1}{#f/0}不论如何，\n我把这个谜题叫做..."],
      maze3a: [
         "<18>“火焰之墙”！！",
         "<25>{#p/sans}* 你直接叫它“火墙”\n  不就行了吗？\n* 这样多省事。",
         "<18>{#p/papyrus}{#f/4}ALPHYS博士会觉得\n我用错词了的。",
         "<25>{#p/sans}* 我不太确定，兄弟。\n  她真的很喜欢那种东西。\n  实际上...",
         "<30>{#f/2}* 这里毕竟是个\n  {@fill=#ff0}热火{@fill=#fff}朝天的地方。"
      ],
      maze4: ["<18>{#p/papyrus}{#x3}{#f/7}别说了，SANS！！"],
      maze5: () =>
         world.edgy
            ? [
               "<25>{#p/sans}{#f/0}* 这是“火墙”。",
               "<25>{#p/sans}{#f/2}* 把它联想成\n  电脑的“防火墙”就行。",
               "<25>{#p/sans}* 到达对面，你就过关了。",
               "<25>{#p/sans}* 很简单，对吧？",
               "<25>{#p/sans}{#f/3}* 不过，我之前亲自尝试过\n  这个谜题，只能说...",
               "<25>{#p/sans}{#f/2}* 它可没你想得那么简单。"
            ]
            : [
               "<18>{#p/papyrus}...总之，\n这个谜题背后的想法\n其实非常简单。",
               "<18>因为你应该做的...",
               "<18>{#f/9}只有成功到达另一边！！",
               "<18>{#f/0}祝你好运！！\n捏嘿嘿！！"
            ],
      maze6: pager.create(
         0,
         () =>
            world.edgy
               ? [
                  "<25>{#p/sans}{#f/0}* what are you going back there for, huh?",
                  "<25>{#p/sans}{#f/3}* come on.\n* at least try to be a good sport."
               ]
               : ["<18>{#p/papyrus}{#x2}{#f/7}你在往哪里走呢！？"],
         () => (world.edgy ? ["<25>{#p/sans}{#f/0}* seriously?"] : ["<18>{#p/papyrus}{#x2}{#f/7}快回来！！"])
      ),
      maze7: [
         [
            "<18>{#p/papyrus}你是怕火吗？？",
            "<18>{#f/4}不用担心，\n这火其实烧不到你。",
            "<18>{#f/0}就像SANS说的那样，\n那些火仅仅是\n“令人愉快的温暖”。",
            "<25>{#p/sans}* 事实上，这句话是我\n  从一个朋友那学来的。",
            "<18>{#p/papyrus}{#f/4}...哦。"
         ],
         [
            "<18>{#p/papyrus}你在担心解不了谜题吗？？",
            "<18>如果是那样的话，\n那你一定得知道...",
            "<18>{#x4}{#f/9}我，伟大的PAPYRUS，\n不会因此而评判你！",
            "<18>{#f/0}就像每个明星大厨\n都知道的那样，\n心意是最重要的。",
            "<18>{#x1}所以，来吧，\n尽力就好！"
         ],
         [
            "<18>{#p/papyrus}{#f/4}（SANS，那个人类\n在干什么啊？？）",
            "<25>{#p/sans}* 可能在记路线吧。",
            "<18>{#p/papyrus}{#f/4}（哦，确实。）",
            "<18>{#f/9}那样的话，\n准备好了就前进吧！"
         ]
      ],
      maze8: () =>
         world.edgy
            ? ["<25>{#p/sans}{#f/0}* 哎呀，真可惜。\n* 不过别灰心。"]
            : [
               "<18>{#p/papyrus}捏嘿嘿！\n那好吧。",
               "<18>{#f/9}看来你被\n伟大的PAPYRUS戏弄了！",
               "<18>{#f/0}但别担心！",
               "<18>你也看到了，\n我的陷阱可不差。",
               "<18>{#f/9}你不能因为轻易失败\n就受到指责！！"
            ],
      maze9: () =>
         world.edgy
            ? ["<25>{#p/sans}{#f/0}* 不错嘛。\n* 没看出来，你还挺机灵的。"]
            : [
               "<18>{#p/papyrus}{#f/1}WHAT!?",
               "<18>{#f/7}HOW DID YOU MANAGE TO DO THAT!?!?",
               "<18>THAT WAS SUPPOSED TO BE TOTALLY IMPOSSIBLE!",
               "<18>{#f/9}... WELL THEN!\nI SHALL HAVE TO STEP UP MY GAME!"
            ],
      maze10: () =>
         world.edgy
            ? [
               "<25>{#p/sans}{#f/0}* 好了，谜题结束了。",
               "<25>{#p/sans}{#f/3}* ...总之，感谢游玩。",
               "<25>{#p/sans}{#f/0}* 现在，\n  我要去准备下个谜题。",
               "<25>{#p/sans}{#f/2}* 待会见。"
            ]
            : [
               "<18>{#f/4}无论如何...",
               "<18>{#f/0}我很期待\n接下来的发展！",
               "<18>{#f/4}一个令人\n十分困惑的谜题...",
               "<18>{#f/1}连TERRESTRIA自己\n都解决不了！！",
               "<25>{#p/sans}* terrestria？\n* 是那个在世\n  最长寿的怪物吗？",
               "<18>{|}{#p/papyrus}{#f/1}呃...\n是这样没错，但- {%}",
               "<25>{#p/sans}* 妈呀，我都不知道\n  原来你对我的评价这么高。",
               "<18>{#p/papyrus}{#f/4}啥。",
               "<25>{|}{#p/sans}* 就是说，\n  如果连她都解不了，\n  那- {%}",
               "<18>{#p/papyrus}{#f/7}{#x3}我懂你的意思了！！"
            ],
      maze11: ["<18>{#p/papyrus}{#f/7}SANS，\n我们还有谜题要准备呢！！", "<18>快来吧！"],

      nicecreamSc1: [
         "<32>{#p/basic}* 我搞不懂为什么\n  这些东西卖不出去...",
         "<32>* 这可是享受这些东西的\n  绝佳圣地..."
      ],
      nicecreamSc2: () => [
         SAVE.data.n.plot > 20.2
            ? "<32>{#p/basic}* 哦！！！！\n* ...你回来了！"
            : SAVE.data.b.s_state_scorereaction1 || SAVE.data.n.plot === 20.2
               ? "<32>{#p/basic}* 等一下！！！！\n* 也许你会喜欢这些东西！"
               : "<32>{#p/basic}* 哦！！！！\n* 一个顾客！！",
         "<32>* 你好！\n* 想来根Ice Dream吗？",
         SAVE.data.b.s_state_million
            ? "<32>* As the top scorer here, you get a handy discount!\n* 6G per Ice Dream!"
            : "<32>* 这可是能点燃你内心的冰冻甜品！\n* 现在只需要12G。"
      ],
      nicecreamSc3: () => [
         "<32>{#p/basic}* Ice Dreams!\n* They're the frozen treats that'll set your mind ablaze!",
         SAVE.data.b.s_state_million ? "<32>* For you, 6G!" : "<32>* 现在只卖12G。"
      ],
      nicecreamPrompt1: [choicer.create("* (Buy an Ice Dream?)", "是", "否")],
      nicecreamPrompt2: [choicer.create("* (Get an Ice Dream?)", "是", "否")],
      nicecreamSc4: [
         "<32>{#p/basic}* 那好吧...\n* 告诉你的朋友...",
         "<32>* 在荒郊野外...\n* 有个买冰淇淋的地方..."
      ],
      nicecreamFc1: ["<32>{#p/basic}* I relocated my stand, but there are still no customers..."],
      nicecreamFc2: [
         "<32>{#p/basic}* Fortunately, I've thought of a solution!!",
         "<32>* Postcards!",
         "<32>* Every time you buy an Ice Dream, you can take a postcard from the box.",
         "<32>* If you have three postcards, you can trade them for a free Ice Dream!",
         "<32>* They're sure to get the customers to come back!",
         "<32>* Oh, um, would you like an Ice Dream?",
         "<32>* It's the frozen treat that'll set your mind ablaze!\n* Now just 10G."
      ],
      nicecreamFc3a: [
         "<32>{#p/basic}* Ice Dreams!\n* They're the frozen treats that'll set your mind ablaze!",
         "<32>* You've got three postcards, would you like to redeem them?"
      ],
      nicecreamFc3b: [
         "<32>{#p/basic}* Ice Dreams!\n* They're the frozen treats that'll set your mind ablaze!",
         "<32>* Now just 10G."
      ],
      nicecreamFc4: [
         "<32>{#p/basic}* 那好吧...\n* 告诉你的朋友...",
         "<32>* Four Ice Dreams for the price of three..."
      ],
      nicecreamFc5: ["<32>{#p/basic}* Don't forget to take a postcard from the box!"],
      nicecreamNoFun1: ["<32>{#p/basic}* Huh?\n* You don't have enough room in your pockets..."],
      nicecreamNoFun2: ["<32>{#p/basic}* I wish I could make Ice Dreams easier to store..."],
      nicecreamNoMun1: ["<32>{#p/basic}* Huh?\n* You don't have enough money..."],
      nicecreamNoMun2: ["<32>{#p/basic}* I wish I could make Ice Dreams for free..."],
      nicecreamFree1: ["<32>{#p/basic}* Tell you what, have your first one on me."],
      nicecreamFree2: ["<32>{#p/basic}* Enjoy..."],
      nicecreamReturnWithGoods: ["<32>{#p/basic}* Well, you can always come back later."],
      nicecreamReturnWithNeeds: ["<32>{#p/basic}* 哦，没关系的。", "<32>* 晚点再来啊，孩子！"],
      nicecreamPurchase: ["<32>{#p/basic}* 给你！\n* 祝你有个超级棒的一天！"],
      nicecreamGet: ["<32>{#s/equip}{#p/human}* (You got the Ice Dream.)"],
      nicecreamK1a: ["<25>{#p/kidd}{#f/1}* Yo, can I get an Ice Dream?"],
      nicecreamK1b: ["<32>{#p/basic}* Sure, kid.\n* If you've got the money."],
      nicecreamK1c: ["<25>{#p/kidd}{#f/2}* (Psst, give them this.)"],
      nicecreamK1d: [
         "<25>{#p/kidd}{#f/7}* Yo, they got free Ice Dreams here!?",
         "<25>{#p/kidd}{#f/1}* Get me one too!"
      ],
      nicecreamK2: ["<32>{#p/basic}* W... where did you get that?"],
      nicecreamK3a: ["<32>* S-sure, kid... here you go!"],
      nicecreamK3b: [
         "<32>{#s/equip}{#p/human}* (You hand the Ice Dream to Monster Kid.)",
         "<25>{#p/kidd}{#f/7}* AWESOME!!!"
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
                        "<32>* If I sold Ice Dreams to a bully, my reputation would be in ruins!"
                     ]
                     : [
                        "<32>* With the recent success, I've been reflecting on my past, and remembering my father.",
                        "<32>* If he hadn't invented Ice Dreams, I'd still be selling cheap balloons."
                     ])
               ]
               : [
                  "<32>{#p/basic}* Hey, kid!\n* I'd offer you an Ice Dream, but I'm all sold out!",
                  "<32>* Business is booming here like nothing ever been!",
                  "<32>* My supply just can't keep up!"
               ],
         () =>
            SAVE.data.n.plot === 72
               ? world.population_area('s') < 6 || world.population_area('f') < 6 || world.population < 2 // NO-TRANSLATE

                  ? ["<32>{#p/basic}* Nothing personal, of course."]
                  : [
                     "<32>{#p/basic}* Apparently, he sold his first Ice Dream in the middle of the Starton holo-forest."
                  ]
               : ["<32>{#p/basic}* Maybe it's time to start that \"Ice Dream\" chain I've always dreamed of..."]
      ),
      faunX: () =>
         [
            ["<32>{#p/basic}{#npc/a}* I can tell you have absolutely no respect for life.\n* Good going, champ."],
            ["<32>{#p/basic}{#npc/a}* Keep it up, champ.\n* See where it gets you."],
            ["<32>{#p/basic}{#npc/a}* Really, champ?"]
         ][Math.min(roomKills().s_greater++, 2)],
      snowdrakeX: [
         "<32>{#p/basic}{#npc/a}* Guh?\n* Did you just...",
         "<32>{#p/basic}{#npc/a}* ...\n* That's, uh, not very cool."
      ],
      moonrocksX1: ["<32>{#p/basic}{#npc/a}* What the-\n* What was THAT for?"],
      moonrocksX2: ["<32>{#p/basic}{#npc/b}* For real, though~\n* How did THAT happen?"],
      npcinter: {
         s_snowdrake: pager.create(
            0,
            () =>
               SAVE.data.n.plot === 72
                  ? [
                     "<32>{#p/basic}{#npc/a}* Hey.\n* You're pretty cool.",
                     "<32>* Just remember, if you get in a fight with someone, god or otherwise...",
                     "<32>* Remember to hold [X] to move twice as slowly.\n* That's very important."
                  ]
                  : roomKills().s_doggo > 0
                     ? ["<32>{#p/basic}{#npc/a}* Get away from me, man!\n* I don't like you."]
                     : SAVE.data.n.plot < 19
                        ? [
                           "<32>{#p/basic}{#npc/a}* 我听说，如果你在战斗中按住[X]，\n  移动的速度会比正常慢一倍！",
                           "<32>* 我懂... 你觉得没用，是吗？",
                           "<32>* 但我告诉你一个秘密。\n* 那边那条狗... 他巴不得你\n  移动速度快呢。",
                           "<32>* 如果你边按住[X]边靠近他，\n  你就不会被他发现！",
                           "<32>* 嚯嚯嚯... 祝你好运。"
                        ]
                        : [
                           "<32>{#p/basic}{#npc/a}* So you came back to talk, huh?",
                           "<32>* That's cool.",
                           "<32>* Not as cool as me, but still pretty cool anyway."
                        ],
            () =>
               SAVE.data.n.plot === 72
                  ? ["<32>{#p/basic}{#npc/a}* Very important."]
                  : roomKills().s_doggo > 0
                     ? ["<32>{#p/basic}{#npc/a}* Didn't you hear me?\n* Get away!"]
                     : SAVE.data.n.plot < 19
                        ? ["<32>{#p/basic}* 你肯定用得到的。"]
                        : ["<32>{#p/basic}* I'm ice cold."]
         ),
         s_genokid: pager.create(
            0,
            () =>
               world.genocide
                  ? [
                     "<25>{#p/kidd}{#f/3}{#npc/a}* 刚才，有个小孩走过来\n  往我脑袋里插了什么东西。",
                     "<25>{#f/3}* 之后，他就去铸厂了，\n  说要去“增强信号”。",
                     "<25>{#f/4}* ...有些小孩真是奇怪。"
                  ]
                  : [
                     "<25>{#p/kidd}{#f/3}{#npc/a}* 哟，大家都去\n  某个地方逃难了。",
                     "<25>{#f/3}* 我说，成年人有时候\n  就是这么愚蠢，哈哈...",
                     "<25>{#f/1}* 他们难道不知道\n  安黛因会保护我们的吗！？"
                  ],
            () =>
               world.genocide
                  ? ["<25>{#p/kidd}{#f/7}{#npc/a}* 不过，你可不奇怪，\n  而且长得超酷的！"]
                  : ["<25>{#p/kidd}{#f/1}{#npc/a}* Undyne's got our backs!"]
         ),
         g_beautifulfish: pager.create(
            0,
            () =>
               SAVE.data.b.killed_mettaton
                  ? [
                     "<32>{#p/basic}{#npc/a}* You've got gumption walking in here after that, kid.",
                     "<32>* We all saw what happened on that TV screen up there."
                  ]
                  : SAVE.data.n.plot === 33
                     ? [
                        "<32>{#p/basic}{#npc/a}* It's surprising to see Sans back here after what happened last time.",
                        "<32>* ... actually, perhaps that's not too surprising."
                     ]
                     : SAVE.data.n.plot === 72
                        ? [
                           "<32>{#p/basic}{#npc/a}* In the end, I never caught any \"girls\" on my voice-mail.",
                           "<32>* So kid, take it from me...",
                           "<32>* Don't try to catch fantastic space creatures with just your voice-mail."
                        ]
                        : papreal()
                           ? [
                              "<32>{#p/basic}{#npc/a}* Where the heck is Sans?",
                              "<32>* He told me he had a star chart I could use to find girls...",
                              "<32>* I mean, it was probably some kind of prank, but I wanted to know what the prank was!"
                           ]
                           : [
                              "<32>{#p/basic}{#npc/a}* 我今天贴了告示\n  招了很多“女孩”。",
                              "<32>* 有人告诉我说\n  漫天群星蕴含着无限可能性...",
                              "<32>* 所以，我很认真地\n  听取了那个建议...",
                              "<32>* 我真的要和一个太空生物\n  卿卿我我了。"
                           ],
            () =>
               SAVE.data.b.killed_mettaton
                  ? [
                     "<32>{#p/basic}{#npc/a}* Wanna know what I think?",
                     "<32>* ... that robot was the one guy who made me wanna call for boys instead of girls.",
                     "<32>* It's sad to see him go."
                  ]
                  : SAVE.data.n.plot === 33
                     ? [
                        "<32>{#p/basic}{#npc/a}* You're talking to me like you want the inside scoop.",
                        "<32>{#p/basic}{#npc/a}* Sorry kid.\n* Guess you'll just have to wait for the next news update."
                     ]
                     : SAVE.data.n.plot === 72
                        ? [
                           "<32>{#p/basic}{#npc/a}* Mind you, there was a single missed call...",
                           "<32>* ... from a certain \"ONIONSAN.\"",
                           "<32>* They didn't leave me any voice-mail though."
                        ]
                        : papreal()
                           ? ["<32>{#p/basic}{#npc/a}* Do you know where Sans is?"]
                           : [
                              "<32>{#p/basic}{#npc/a}* 我觉得我可以问问Undyne。\n* 但她好像已经喜欢别人了。"
                           ],
            () =>
               SAVE.data.b.killed_mettaton
                  ? ["<32>{#p/basic}{#npc/a}* Here's hoping another cutie like him comes along..."]
                  : SAVE.data.n.plot === 33
                     ? ["<32>{#p/basic}{#npc/a}* Don't tell me you don't have an OuterNet account..."]
                     : SAVE.data.n.plot === 72
                        ? ["<32>{#p/basic}{#npc/a}* What's an onionsan, anyway?"]
                        : papreal()
                           ? ["<32>{#p/basic}{#npc/a}* Let me know if you see him..."]
                           : ["<32>{#p/basic}{#npc/a}* 我还能找到真爱吗？"]
         ),
         g_bigmouth: pager.create(
            0,
            () =>
               SAVE.data.b.killed_mettaton
                  ? [
                     "<32>{#p/basic}{#npc/a}* Hmm...",
                     "<32>* I wonder what kind of food robots like.",
                     "<32>* Do they even eat food at all?",
                     "<32>* ... we'll never know, now."
                  ]
                  : SAVE.data.n.plot === 33
                     ? [
                        "<32>{#p/basic}{#npc/a}* Sans has been a regular here since day one.",
                        ...(papreal()
                           ? [
                              "<32>* He usually orders the worst item off the menu...",
                              "<32>* Except for earlier today...",
                              "<32>* ... when he ordered the SECOND worst item off the menu instead.",
                              "<32>* That's something, right?"
                           ]
                           : [
                              "<32>* He always orders the worst item off the menu, and he never pays his tab.",
                              "<32>* But because he attracts so many other customers...",
                              "<32>* Grillby even gave him special arrangements.",
                              "<32>* ... what's a \"yamok\" anyway?"
                           ])
                     ]
                     : SAVE.data.n.plot === 72
                        ? world.population < 4
                           ? [
                              "<32>{#p/basic}{#npc/a}* I wonder what a human bully would taste like...",
                              "<32>* Are they tastier when they're meaner?\n* Or vice-versa?"
                           ]
                           : [
                              "<32>{#p/basic}{#npc/a}* As much as I would've liked to try human food...",
                              "<32>* Food from a whole new world... now that's even better."
                           ]
                        : papreal()
                           ? [
                              "<32>{#p/basic}{#npc/a}* Hmmm, this is around the time that Sans comes in.",
                              "<32>* Then, a little bit later, his brother comes in.",
                              "<32>* Yes, his brother.\n* Papyrus.",
                              "<32>* He always used to order milk, but nowadays, he picks a new item every time...",
                              "<32>* That replicator sure is a wonderous thing, isn't it?",
                              "<32>* It's too bad it only produces monster food."
                           ]
                           : [
                              "<32>{#p/basic}{#npc/a}* 嗯...\n* 人类的食物和怪物的\n  应该是不一样的吧？",
                              "<32>* 听说会“变质”什么的。",
                              "<32>* 而且不像怪物的食物一样\n  可以直接转化为能量...",
                              "<32>* 人类的食物必须\n  要先通过他们的身体。",
                              "<32>* 就算在低重力的环境\n  也是这样。",
                              "<32>* 太诡异了。\n* 我找时间也想试试。"
                           ],
            () =>
               SAVE.data.b.killed_mettaton
                  ? ["<32>{#p/basic}{#npc/a}* How unfortunate."]
                  : SAVE.data.n.plot === 33
                     ? papreal()
                        ? world.dead_skeleton
                           ? [
                              "<32>{#p/basic}{#npc/a}* Come to think of it, that's not the only off-putting thing to have happened today..."
                           ]
                           : ["<32>{#p/basic}{#npc/a}* How strange."]
                        : ["<32>{#p/basic}{#npc/a}* We're blessed to have such a character in our midst."]
                     : SAVE.data.n.plot === 72
                        ? world.population < 4
                           ? [
                              "<32>{#p/basic}{#npc/a}* For all we know, a last-minute redemption could make them the tastiest of all."
                           ]
                           : [
                              "<32>{#p/basic}{#npc/a}* For all we know, new world food spoils even faster than food made by humans."
                           ]
                        : papreal()
                           ? [
                              "<32>{#p/basic}{#npc/a}* I hope he shows up today.\n* Him and his brother are great at making us laugh."
                           ]
                           : ["<32>{#p/basic}{#npc/a}* 我还听说他们有\n  叫做“厕所”的东西。"],
            () =>
               SAVE.data.b.killed_mettaton
                  ? ["<32>{#p/basic}{#npc/a}* How unfortunate."]
                  : SAVE.data.n.plot === 33
                     ? papreal()
                        ? ["<32>{#p/basic}{#npc/a}* How strange."]
                        : ["<32>{#p/basic}{#npc/a}* How delightful."]
                     : SAVE.data.n.plot === 72
                        ? world.population < 4
                           ? ["<32>{#p/basic}{#npc/a}* How... unexpected."]
                           : ["<32>{#p/basic}{#npc/a}* How... delicious."]
                        : papreal()
                           ? ["<32>{#p/basic}{#npc/a}* Skeletons are cool."]
                           : ["<32>{#p/basic}{#npc/a}* 人类真奇怪。"]
         ),
         g_bunbun: pager.create(
            0,
            () =>
               SAVE.data.b.killed_mettaton
                  ? [
                     "<32>{#p/basic}{#npc/a}* M-mettaton was the h-hottest guy around...",
                     "<32>* Without him, the outpost is s-s-so much colder!"
                  ]
                  : SAVE.data.n.plot === 33
                     ? [
                        "<32>{#p/basic}{#npc/a}* Sansyyyy...\n* Come back and sit with me...!",
                        "<32>* Everything's so f-f-fun when you're around..."
                     ]
                     : SAVE.data.n.plot === 72
                        ? [
                           "<32>{#p/basic}{#npc/a}* I w-wonder if the n-new world h-has h-hot guys...",
                           "<32>* A-and neat d-drinks...",
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
                                 "<32>* Lighten up everybody!\n* ...",
                                 "<32>* I'm really starting to loathe this place."
                              ]
                              : [
                                 "<32>{#p/basic}{#npc/a}* 不论我去到哪里，\n  看到的都是一样的菜单，\n  遇到的都是一样的人...",
                                 "<32>* 服务员！\n* 我想再来点喝的，\n  再来店帅-帅-帅-帅哥！"
                              ],
            () =>
               SAVE.data.b.killed_mettaton
                  ? ["<32>{#p/basic}{#npc/a}* So c-c-cold..."]
                  : SAVE.data.n.plot === 33
                     ? ["<32>{#p/basic}{#npc/a}* Sansyyyy..."]
                     : SAVE.data.n.plot === 72
                        ? ["<32>{#p/basic}{#npc/a}* S-soooooo ready!"]
                        : papreal() || world.dead_dog
                           ? ["<32>{#p/basic}{#npc/a}* ..."]
                           : ["<32>{#p/basic}{#npc/a}* 我感觉那个酒保\n  就挺帅-帅-帅-帅的..."]
         ),
         g_dogamy: () =>
            SAVE.data.b.killed_mettaton
               ? [
                  "<32>{#p/basic}{#npc/a}* Everyone's up in arms about Mettaton, but me...?",
                  SAVE.data.n.state_starton_doggo === 2 && SAVE.data.n.state_starton_greatdog === 2
                     ? "<32>{#p/basic}{#npc/a}* I just want to know where the other dogs went."
                     : SAVE.data.n.state_starton_doggo === 2
                        ? "<32>{#p/basic}{#npc/a}* I still want to know what happened to Doggo."
                        : SAVE.data.n.state_starton_greatdog === 2
                           ? "<32>{#p/basic}{#npc/a}* I still miss seeing that big lug around here."
                           : papreal()
                              ? "<32>{#p/basic}{#npc/a}* I still miss having Sans and his brother around."
                              : "<32>{#p/basic}{#npc/a}* I just wish Sans would come back and give us more of his headpats."
               ]
               : SAVE.data.n.plot === 33
                  ? ["<32>{#p/basic}{#npc/a}* Shoot, I was hoping Sans came to give us a pat on the head."]
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
                        ? ["<32>{#p/basic}{#npc/a}* Smells kinda... quiet."]
                        : SAVE.data.n.state_starton_doggo === 2
                           ? ["<32>{#p/basic}{#npc/a}* I can't believe Doggo's gone missing..."]
                           : SAVE.data.n.state_starton_greatdog === 2
                              ? ["<32>{#p/basic}{#npc/a}* Where's that big lug?\n* We can't start until it shows up."]
                              : papreal()
                                 ? ["<32>{#p/basic}{#npc/a}* Where's Sans...\n* He's supposed to give me a pat on the head..."]
                                 : [
                                    "<32>{#p/basic}{#npc/a}* 你最好盯紧了你坐的地方，\n  孩子。",
                                    "<32>* 那个大家伙随时都会\n  跳到你的大腿上，\n  给你满满的爱和关注。"
                                 ],
         g_dogaressa: () =>
            SAVE.data.b.killed_mettaton
               ? [
                  "<32>{#p/basic}{#npc/a}* (My hubby and I just want everyone to calm down.)",
                  "<32>{#p/basic}{#npc/a}* (Mettaton's death was tragic, but he's just a guy on TV!)"
               ]
               : SAVE.data.n.plot === 33
                  ? ["<32>{#p/basic}{#npc/a}* (I like Sans.)\n* (Sometimes he feeds us scraps of food under the table.)"]
                  : SAVE.data.n.plot === 72
                     ? world.population < 2
                        ? [
                           "<32>{#p/basic}{#npc/a}* (Now that we're free, we're planning on starting a marriage counseling company.)",
                           "<32>* (Our first curriculum will be called \"What it means to be in an abusive relationship.\")"
                        ]
                        : [
                           "<32>{#p/basic}{#npc/a}* (Now that we're free, we're planning on starting a marriage counseling company.)",
                           "<32>* (Our first curriculum will be called \"The do's and dont's of marrying your mother.\")"
                        ]
                     : SAVE.data.n.state_starton_doggo === 2 && SAVE.data.n.state_starton_greatdog === 2
                        ? [
                           "<32>{#p/basic}{#npc/a}* (It's lonely in here today.)\n* (If our friends don't show up, would you like to play?)"
                        ]
                        : SAVE.data.n.state_starton_doggo === 2
                           ? ["<32>{#p/basic}{#npc/a}* (Where's Doggo?)\n* (I hope he didn't get lost again.)"]
                           : SAVE.data.n.state_starton_greatdog === 2
                              ? ["<32>{#p/basic}{#npc/a}* (Where's Canis Major?)\n* (He was supposed to join us for this game.)"]
                              : papreal()
                                 ? ["<32>{#p/basic}{#npc/a}* (Where are those skeletons?)\n* (I wanted to get a bone from them...)"]
                                 : [
                                    "<32>{#p/basic}{#npc/a}* （我们是哨兵，\n  但我们从来没得到\n  一点尊重。）",
                                    "<32>* （真希望那几个骷髅可以\n  丢几根骨头给我们。）",
                                    "<32>* （我们最喜欢骨头了。）"
                                 ],
         g_doggo: () =>
            SAVE.data.b.killed_mettaton
               ? [
                  "<32>{#p/basic}{#npc/a}* Losing Mettaton REALLY stinks, you know that?",
                  "<33>* Of all the guys on the outpost, he moved the most!",
                  "<32>* Without him, the only people on TV will probably be people who DON'T move all the time."
               ]
               : SAVE.data.n.plot === 33
                  ? [
                     "<32>{#p/basic}{#npc/a}* Huh?\n* Since when did you and Sans become friends...?",
                     "<32>* I'm not the biggest fan of that guy...",
                     "<32>* He loves to appear without moving."
                  ]
                  : SAVE.data.n.plot === 72
                     ? [
                        "<32>{#p/basic}{#npc/a}* I've been without cuddles for so long, but finally, someone opened up to me.",
                        "<32>* Ice Wolf is now my Nice Wolf."
                     ]
                     : SAVE.data.n.state_starton_dogs === 2 && SAVE.data.n.state_starton_greatdog === 2
                        ? [
                           "<32>{#p/basic}{#npc/a}* Sometimes the others like to prank me. They sit still so I can't see them.",
                           "<32>* They must be here, playing a joke on me.",
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
                                 ? ["<32>{#p/basic}{#npc/a}* Papyrus?\n* Is that you?\n* Come on..."]
                                 : [
                                    "<32>{#p/basic}{#npc/a}* 我在考虑把头发留长一点，\n  来彰显我的个性。",
                                    "<32>* 它代表着：“请给我一个\n  大大的、温柔的拥抱，\n  搂搂我。”"
                                 ],
         g_grillby: () =>
            SAVE.data.b.killed_mettaton
               ? [
                  "<32>{#p/basic}* ...\n* ...\n* ...",
                  "<32>{#npc/a}* Grillbz said the grand finale was good for business.",
                  "<32>* I'm not sure if he likes that fact, though."
               ]
               : SAVE.data.n.plot === 33
                  ? SAVE.data.b.item_fast_food
                     ? [
                        "<32>{#p/basic}* ...\n* ...\n* ...",
                        "<32>{#npc/a}* Grillbz said he only lets Sans eat for free because he pulls in other customers.",
                        "<32>* I can't exactly disagree..."
                     ]
                     : [
                        "<32>{#p/basic}* ...\n* ...\n* ...",
                        "<32>{#npc/a}* Grillbz suggested taking your food with you before he has to throw it out."
                     ]
                  : SAVE.data.n.plot === 72
                     ? world.population < 4
                        ? ["<32>{#p/basic}* ...\n* ...\n* ... okay."]
                        : ["<32>{#p/basic}* ...\n* ...\n* ... good job."]
                     : world.population < 4
                        ? [
                           "<32>{#p/basic}* ...\n* ...\n* ...",
                           "<32>{#npc/a}* Grillbz is real sorry for the lack of other customers.",
                           "<32>* Personally, I think they're just afraid...",
                           "<32>* You know.\n* Of that bully."
                        ]
                        : [
                           "<32>{#p/basic}* ...\n* ...\n* ...",
                           "<32>{#npc/a}* Grillbz说他是在一本\n  电子杂志上找到他的\n  新颜色的。",
                           "<32>* 我个人还是更喜欢Grillbz\n  原始的那个橘色。\n* 仅个人观点。"
                        ],
         g_punkhamster: pager.create(
            0,
            () =>
               SAVE.data.b.killed_mettaton
                  ? [
                     "<32>{#p/basic}{#npc/a}* You really showed that big shot robot who's boss, huh?",
                     "<32>* ... if only he didn't make me feel bad for him."
                  ]
                  : SAVE.data.n.plot === 33
                     ? [
                        "<32>{#p/basic}{#npc/a}* Sans certainly knows how to make you laugh, huh?",
                        "<32>* Good thing, too.\n* That skeleton practically pays the bills here."
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
                              "<32>{#p/basic}{#npc/a}* 首塔的人口越来越多了，\n  所以我听说它们打算\n  搬到这里来。",
                              "<32>* ... who knows?\n* Maybe we'll have room for 'em."
                           ]
                           : [
                              "<32>{#p/basic}{#npc/a}* 首塔的人口越来越多了，\n  所以我听说它们打算\n  搬到这里来。",
                              "<32>* 嗯...\n* 我不想看到我们的\n  地方文化被抹去。",
                              "<32>* 但是教那些城里人\n  我们的生活方式\n  肯定很有趣！"
                           ],
            () =>
               SAVE.data.b.killed_mettaton
                  ? ["<33>{#p/basic}{#npc/a}* I'm semi-conflicted about this."]
                  : SAVE.data.n.plot === 33
                     ? ["<32>{#p/basic}{#npc/a}* Regular?\n* Who, me?\n* Nah, I'm only semi-regular."]
                     : SAVE.data.n.plot === 72
                        ? world.population < 2
                           ? [
                              "<32>{#p/basic}{#npc/a}* Come to think of it, you've inspired me, kid.\n* I'm gonna start a fight club."
                           ]
                           : ["<32>{#p/basic}{#npc/a}* We'll just have to come up with something new, eh?"]
                        : ["<32>{#p/basic}{#npc/a}* 哈，尽管来吧！"]
         ),
         g_redbird: pager.create(
            0,
            () =>
               SAVE.data.b.killed_mettaton
                  ? [
                     "<32>{#p/basic}{#npc/a}* Hoo hoo hoo!\n* That was really something!",
                     "<32>{#p/basic}{#npc/a}* ... um, am I the only one that thinks it's all a trick?"
                  ]
                  : SAVE.data.n.plot === 33
                     ? [
                        "<32>{#p/basic}{#npc/a}* Sans is a royal sentry, but don't let his title fool ya.",
                        "<32>* Everyone knows he sits around at the edge of the holo-forest reading hovercar manuals."
                     ]
                     : SAVE.data.n.plot === 72
                        ? [
                           "<32>{#p/basic}{#npc/a}* Wow, a brand new world...",
                           "<32>* I might not get to translate for Grillbz anymore...",
                           "<32>* ... or maybe I will!\n* Grillbz, do you plan on movin' this place out there?",
                           "<32>{#npc}* ...\n* ...\n* ...",
                           ...(world.population < 4
                              ? [
                                 "<32>{#npc/a}* Grillbz says he's more than happy to.",
                                 "<33>* He must still be afraid of you."
                              ]
                              : ["<32>{#npc/a}* Grillbz says he'll think about it."])
                        ]
                        : papreal()
                           ? [
                              "<32>{#p/basic}{#npc/a}* Grillby is getting nervous.",
                              "<32>* Sans is his best customer, and he hasn't shown up at all today..."
                           ]
                           : world.dead_dog
                              ? [
                                 ".",
                                 "<32>* Huh?\n* Where are they?\n* Weird..."
                              ]
                              : world.population < 4
                                 ? [
                                    "<32>{#p/basic}{#npc/a}* Word around town is there's a bully going and beating people up.",
                                    "<32>* But Grillbz and I decided to keep the bar open.",
                                    "<32>* No bully's gonna keep us from running THIS establishment!"
                                 ]
                                 : [
                                    "<32>{#p/basic}{#npc/a}* 那些狗是皇家守卫的成员，\n  是由UNDYNE领导的\n  军事集团。",
                                    "<32>* 她粗鲁，吵闹，\n  谁不尊重她，她就揍谁...",
                                    "<32>* 难怪所有小孩子都希望\n  长大要像她那样呢！"
                                 ],
            () =>
               SAVE.data.b.killed_mettaton
                  ? ["<32>{#p/basic}{#npc/a}* You never know with those rudely rowdy TV hosts."]
                  : SAVE.data.n.plot === 33
                     ? [
                        "<32>{#p/basic}{#npc/a}* Don't ask me why he does it.",
                        "<32>* If I had to guess, though, I'd say it's got something to do with Papyrus."
                     ]
                     : SAVE.data.n.plot === 72
                        ? [
                           "<32>{#p/basic}{#npc/a}* If he DOES open a Grillby's on the new homeworld...",
                           ...(world.population < 4
                              ? ["<32>* We can only hope the travelers there are nicer.", "<32>* ... you're debatable."]
                              : [
                                 "<32>* We can only hope there isn't too much water around.",
                                 "<32>* ... that'd be dangerous."
                              ])
                        ]
                        : papreal() || world.dead_dog
                           ? ["<32>{#p/basic}{#npc/a}* Something feels off."]
                           : world.population < 4
                              ? ["<32>{#p/basic}{#npc/a}* At least they're not out there killing everybody."]
                              : ["<32>{#p/basic}{#npc/a}* 我长大了也要像UNDYNE那样！\n* 吼吼吼！"]
         ),
         l_cupjake: pager.create(
            0,
            () =>
               SAVE.data.n.plot === 72
                  ? [
                     "<32>{#p/basic}{#npc/a}* Maybe now that we're free, that sweet lady will finally leave.",
                     "<32>* Then, I shall come to know the contents of that {@fill=#f00}odd book{@fill=#fff} for myself..."
                  ]
                  : [
                     "<32>{#p/basic}{#npc/a}* 这里有一本{@fill=#f00}奇怪的书{@fill=#fff}，\n  它会随机出现和消失...",
                     "<32>* 但那位可爱的女士\n  似乎总是妨碍我去拿！",
                     "<32>* 你知道该怎么样\n  才能把她吓跑吗？"
                  ],
            () =>
               SAVE.data.n.plot === 72
                  ? ["<32>{#p/basic}{#npc/a}* Soon, I tell you.", "<32>* Soon."]
                  : ["<32>{#p/basic}{#npc/a}* 我知道你在想什么。", "<32>* 你别试。"]
         ),
         l_kakurolady: pager.create(
            0,
            () =>
               SAVE.data.n.plot === 72
                  ? [
                     "<32>{#p/basic}{#npc/a}* （咳，咳。）",
                     "<32>* This will be our news feed's last issue...",
                     "<32>* Why don't we just put a big \"THE END\" on the front and call it a day?"
                  ]
                  : [
                     "<32>{#p/basic}{#npc/a}* （咳，咳。）",
                     "<33>* 我上学的时候，如果我们没有作业，\n  老师会给我们布置一些\n  “找不同”的谜题。",
                     "<32>* 我那时候觉得那是在浪费时间。\n* 但看看现在的我...",
                     "<33>* 我现在是前哨站第一的\n  “找不同”谜题设计师了！"
                  ],
            () =>
               SAVE.data.n.plot === 72
                  ? [
                     "<32>{#p/basic}{#npc/a}* （咳，咳。）",
                     "<32>* Heck, why don't we just quit right here and now?"
                  ]
                  : [
                     "<32>{#p/basic}{#npc/a}* （咳，咳。）",
                     "<33>* 相信我，孩子。\n* 你不会想来干这行的。"
                  ]
         ),
         l_librarian: pager.create(
            0,
            () =>
               SAVE.data.n.plot === 72
                  ? [
                     "<32>{#p/basic}{#npc/a}* 欢迎来到图书倌。",
                     ...(world.population === 0
                        ? ["<32>* If you beat up anyone else, you'll be really sorry."]
                        : ["<32>* This is the last day we'll be open, so make as much noise as you want."])
                  ]
                  : [
                     "<32>{#p/basic}{#npc/a}* 欢迎来到图书倌。\n* 老实说，这名字\n  来源于一次拼写错误。",
                     "<32>* 久而久之，\n  所有人都这么叫了..."
                  ],
            () =>
               SAVE.data.n.plot === 72
                  ? world.population === 0
                     ? ["<32>{#p/basic}{#npc/a}* You have feelings, don't you?"]
                     : ["<32>{#p/basic}{#npc/a}* Not that anyone would've stopped you before..."]
                  : ["<32>{#p/basic}{#npc/a}* 如果你懒得去修正一些细小的问题，\n  就会发展成现在这样的状况。"]
         ),
         l_sweetie: pager.create(
            0,
            () =>
               SAVE.data.n.plot === 72
                  ? [
                     "<32>{#p/basic}{#npc/a}* Oh my, there's so much news to report, I don't know where to begin!",
                     "<32>* How about this headline...\n* \"Monsters Finally Escape From the Outpost.\"",
                     "<32>* Nah, that doesn't have enough pizazz...",
                     "<32>* How about \"You Won't Believe Who Helped Us Escape From the Outpost!\""
                  ]
                  : world.dead_dog || world.population < 6
                     ? SAVE.data.b.killed_mettaton
                        ? [
                           "<32>{#p/basic}{#npc/a}* Working the news feed is losing its appeal.",
                           "<32>* First, that terrible news from before, and now, what happened to that celebrity...",
                           "<32>* I'm thinking about quitting."
                        ]
                        : [
                           "<32>{#p/basic}{#npc/a}* 我喜欢做新闻推送的工作。",
                           "<32>* Lately, though, I've had to report on something terrible...",
                           "<32>* I'm starting to second-guess my life choices."
                        ]
                     : SAVE.data.b.killed_mettaton
                        ? [
                           "<32>{#p/basic}{#npc/a}* 我喜欢做新闻推送的工作。",
                           "<32>* Only problem is, if a celebrity dies...",
                           "<32>* That's all anyone ever wants me to report on for a while."
                        ]
                        : [
                           "<32>{#p/basic}{#npc/a}* 我喜欢做新闻推送的工作。",
                           "<32>* 因为没有什么可报道的，\n  所以我们就用漫画和游戏\n  来填充版面。"
                        ],
            () =>
               world.dead_dog || world.population < 6 || SAVE.data.b.killed_mettaton
                  ? ["<32>{#p/basic}{#npc/a}* Have you ever felt like your life is just running in circles?"]
                  : ["<32>{#p/basic}{#npc/a}* 你是觉得好像\n  缺了点什么吗？"]
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
                     ? ["<32>{#p/basic}{#npc/a}* Sorry, champ.\n* Now's not a good time."]
                     : 30 <= SAVE.data.n.plot
                        ? [
                           "<32>{#p/basic}{#npc/a}* I heard that dog is a 4-D poker player...",
                           "<32>* Has it ever won a game?\n* I wonder."
                        ]
                        : [
                           [
                              "<32>{#p/basic}{#npc/a}* 就在刚刚，\n  一只灵感爆发的狗冲了进来。",
                              "<32>* 它一直试图创作一幅全息影像\n  来表达自己的情感...",
                              "<32>* 但是，他越是创作，\n  就越是兴奋……",
                              "<32>* 它的脖子变得越来越长，\n  作品也越来越亮，\n  直到...",
                              "<32>* 看得我很伤心，\n  但我无法移开视线。"
                           ],
                           [
                              "<32>{#p/basic}{#npc/a}* That dog from earlier...?\n* It's at Grillby's.\n* I think.",
                              "<32>* After work, all of the dogs go there to play cards together.",
                              "<32>* But that dog doesn't really know how to express itself.",
                              "<32>* So, it ends up playing alone, instead of introducing itself to the others..."
                           ],
                           [
                              "<32>{#p/basic}{#npc/a}* Where's that dog?",
                              "<32>* It usually comes through here every day after work..."
                           ],
                           [
                              "<32>{#p/basic}{#npc/a}* A badly wounded dog just walked through here...",
                              "<32>* What kind of person would beat up a cute little dog?"
                           ]
                        ][SAVE.data.n.state_starton_lesserdog],
            () =>
               SAVE.data.n.plot === 72
                  ? world.population < 6
                     ? ["<32>{#p/basic}{#npc/a}* Don't worry, champ.\n* Most of them have probably forgiven ya by now."]
                     : ["<32>{#p/basic}{#npc/a}* Don't worry, champ.\n* I've got this covered for ya."]
                  : roomKills().s_greater > 0
                     ? ["<32>{#p/basic}{#npc/a}* ..."]
                     : 30 <= SAVE.data.n.plot
                        ? ["<32>{#p/basic}{#npc/a}* The day that dog wins a game of 4-D poker, we're ALL doomed."]
                        : [
                           ["<32>{#p/basic}{#npc/a}* 对那狗狗来说挺糟糕吧，嗯？"],
                           ["<32>{#p/basic}{#npc/a}* 对那狗狗来说很糟糕吧，嗯？"],
                           ["<32>{#p/basic}{#npc/a}* Have you seen it?"],
                           ["<32>{#p/basic}{#npc/a}* Despicable."]
                        ][SAVE.data.n.state_starton_lesserdog]
         ),
         s_moonrocks1: pager.create(
            0,
            () =>
               SAVE.data.n.plot === 72
                  ? world.population < 6
                     ? [
                        "<32>{#p/basic}{#npc/a}* Hah-\n* Incredible-",
                        "<32>* I knew my moon rocks were the real deal all along-",
                        "<32>* Even I'm surprised what your mean ways have led to for me-"
                     ]
                     : [
                        "<32>{#p/basic}{#npc/a}* 嘁-\n* 难以置信-",
                        "<32>* I can't believe I'm gonna be working with that guy-",
                        "<32>* At least our sales figures should finally go up-"
                     ]
                  : roomKills().s_pacing > 0
                     ? ["<32>{#p/basic}{#npc/a}* Tch-\n* Sorry, I don't sell to people like you-"]
                     : SAVE.data.b.killed_mettaton
                        ? [
                           "<32>{#p/basic}{#npc/a}* Man-\n* Sucks what happened to Mettaton, y'know-",
                           "<32>* But I'm willing to sell off my special edition moon rocks for the occasion-",
                           "<32>* Unlike that guy, who just lowers the prices on his basic rocks instead-"
                        ]
                        : [
                           "<32>{#p/basic}{#npc/a}* 嘁-\n* 难以置信-",
                           "<32>* 我从月亮上直接得到了真正的月岩，\n  不像他电话里说的那种垃圾一样-",
                           "<32>* 那家伙的石头，\n  一点都不像月亮-"
                        ],
            () =>
               SAVE.data.n.plot === 72
                  ? world.population < 6
                     ? ["<32>{#p/basic}{#npc/a}* Yeah, I have you to thank-"]
                     : ["<32>{#p/basic}{#npc/a}* It's just good for business-"]
                  : roomKills().s_pacing > 0
                     ? ["<32>{#p/basic}{#npc/a}* Tch-\n* Sorry, I don't sell to people like you-"]
                     : ["<32>{#p/basic}{#npc/a}* 那家伙真挺有种啊-"]
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
                        "<32>{#p/basic}{#npc/a}* 噗~\n* 啊对对~",
                        "<32>* It's good to finally be working together on this thing~",
                        "<32>* Now we'll both be sellin' my authentic moon rocks~"
                     ]
                  : roomKills().s_pacing > 0
                     ? ["<32>{#p/basic}{#npc/a}* Pfft~\n* No moon rocks for you~"]
                     : SAVE.data.b.killed_mettaton
                        ? [
                           "<32>{#p/basic}{#npc/a}* Real shame what happened to the start of the underground~",
                           "<32>* Don't worry though~\n* Unlike that dude to my left, I won't raise my prices~",
                           "<32>* In fact, my moon rocks are going on sale~"
                        ]
                        : [
                           "<32>{#p/basic}{#npc/a}* 噗~\n* 啊对对~",
                           "<32>* 我左边的那哥们\n  在卖假到不行的月岩呢，\n  笑死~",
                           "<32>* 他说的话你一句也别信~"
                        ],
            () =>
               SAVE.data.n.plot === 72
                  ? world.population < 6
                     ? ["<32>{#p/basic}{#npc/a}* Shaw man~\n* Sorry it had to come to this~"]
                     : ["<32>{#p/basic}{#npc/a}* Yeah, his were the real fake moon rocks all along~"]
                  : roomKills().s_pacing > 0
                     ? ["<32>{#p/basic}{#npc/a}* Pfft~\n* No moon rocks for you~"]
                     : ["<32>{#p/basic}{#npc/a}* 那哥们真挺有胆啊~"]
         ),
         t_bunny: pager.create(
            0,
            () =>
               SAVE.data.n.plot === 72
                  ? [
                     "<32>{#p/basic}{#npc/a}* My little Cinnamon's going to grow up one day...",
                     "<32>* Since he's my brother, I only want the best for him.",
                     "<32>* I sure hope our new world can accommodate for that."
                  ]
                  : SAVE.data.b.killed_mettaton
                     ? [
                        "<32>{#p/basic}{#npc/a}* Ah, it's so peaceful and quiet...",
                        "<32>* The people who usually bother me are too busy crying about something on TV!"
                     ]
                     : papreal()
                        ? [
                           "<32>{#p/basic}{#npc/a}* Ah, it's so peaceful and quiet...",
                           "<32>* Usually one of those skeletons chases my little Cinnamon around."
                        ]
                        : world.dead_canine
                           ? [
                              "<32>{#p/basic}{#npc/a}* Ah, it's so peaceful and quiet...",
                              "<32>* Usually one of those dogs chases my little Cinnamon around."
                           ]
                           : [
                              "<32>{#p/basic}{#npc/a}* 我的小肉桂是最可爱的！",
                              "<32>* 小兔兔真的太可爱了...\n* 嘻嘻！"
                           ],
            () =>
               SAVE.data.n.plot === 72
                  ? ["<32>{#p/basic}{#npc/a}* It's not long now, bun-bun..."]
                  : SAVE.data.b.killed_mettaton
                     ? ["<32>{#p/basic}{#npc/a}* I wonder what could have happened..."]
                     : papreal() || world.dead_canine
                        ? ["<32>{#p/basic}{#npc/a}* I wonder where they are..."]
                        : ["<32>{#p/basic}{#npc/a}* 兔-兔-兔-兔-兔..."]
         ),
         t_icewolf: () =>
            SAVE.data.n.plot === 72
               ? [
                  "<32>{#p/basic}{#npc/a}* Ice Wolf is happy today.\n* Sweet Doggo has finally been held in Ice Wolf's arms.",
                  "<32>* Ice Wolf is now his Nice Wolf."
               ]
               : SAVE.data.b.killed_mettaton
                  ? [
                     "<32>{#p/basic}{#npc/a}* Ice Wolf notices the morale of the town slipping.",
                     "<32>* Ice Wolf just wants everyone to be happy."
                  ]
                  : world.dead_canine
                     ? [
                        "<32>{#p/basic}{#npc/a}* Ice Wolf has not seen any of Ice Wolf's dog-friends today.",
                        "<32>* Ice Wolf is sad."
                     ]
                     : SAVE.data.n.state_starton_doggo === 2
                        ? [
                           "<32>{#p/basic}{#npc/a}* Ice Wolf has not seen sweet Doggo at all today.",
                           "<32>* Ice Wolf is lonely."
                        ]
                        : papreal()
                           ? ["<32>{#p/basic}{#npc/a}* Ice Wolf has not seen any skeletons today.", "<32>* Ice Wolf is concerned."]
                           : SAVE.data.n.state_starton_doggo === 1 &&
                              SAVE.data.n.state_starton_dogs === 1 &&
                              SAVE.data.n.state_starton_greatdog === 1 &&
                              SAVE.data.n.state_starton_lesserdog === 1
                              ? [
                                 "<32>{#p/basic}{#npc/a}* Ice Wolf is going to play fetch with Ice Wolf's dog-friends.",
                                 "<32>* Ice Wolf is excited."
                              ]
                              : world.population < 6
                                 ? [
                                    world.bullied
                                       ? "<32>{#p/basic}{#npc/a}* Ice Wolf is wondering why so many monsters are hurt."
                                       : "<32>{#p/basic}{#npc/a}* Ice Wolf is wondering why so many monsters are gone.",
                                    "<32>* Ice Wolf is concerned."
                                 ]
                                 : [
                                    "<32>{#p/basic}{#npc/a}* Ice Wolf在思考为什么自己没有冰\n  可扔的时候，Ice Wolf还叫\n  Ice Wolf。",
                                    "<32>* Ice Wolf很疑惑。"
                                 ],
         t_imafraidjumitebeinagang: pager.create(
            0,
            () =>
               SAVE.data.n.plot === 72
                  ? [
                     "<32>{#p/basic}{#npc/a}* I asked Papyrus about his floss collection, and he said he'd help me start one, too.",
                     "<32>* Isn't he the best?"
                  ]
                  : SAVE.data.b.killed_mettaton
                     ? [
                        "<32>{#p/basic}{#npc/a}* My MTT-brand toothbrush broke again, and I don't know how I'll fix it this time.",
                        "<32>* ... it's not like they're going to make any more of them, now."
                     ]
                     : papreal()
                        ? [
                           "<32>{#p/basic}{#npc/a}* I went to ask Papyrus about his floss collection, but he wasn't available.",
                           "<32>* Would you happen to know anything about that?"
                        ]
                        : world.popmax(0) - world.population > 4
                           ? [
                              "<32>{#p/basic}{#npc/a}* I'd lend you my MTT-brand toothbrush...",
                              "<32>* ... but I get the feeling you'd smash it a whole bunch."
                           ]
                           : [
                              "<32>{#p/basic}{#npc/a}* 那些MTT牌的牙刷\n  质量太他娘的差了。",
                              "<32>* 我还没来得及开始刷，\n  东西就被我捏碎了！"
                           ],
            () =>
               SAVE.data.n.plot === 72
                  ? [
                     "<32>{#p/basic}{#npc/a}* I asked Papyrus about his floss collection, and he said he'd help me start one, too.",
                     "<32>* Isn't he the best?"
                  ]
                  : SAVE.data.b.killed_mettaton
                     ? ["<32>{#p/basic}{#npc/a}* Guess I'll have to use an actually decent toothbrush from now on."]
                     : papreal()
                        ? ["<32>{#p/basic}{#npc/a}* Hmm...\n* I wonder how skeletons brush their teeth."]
                        : world.popmax(0) - world.population > 4
                           ? [
                              "<32>{#p/basic}{#npc/a}* Hanging out by the bar tells you a lot about this place...\n* For better or worse."
                           ]
                           : ["<32>{#p/basic}{#npc/a}* 不过话说回来，\n  这是最便宜的选择了..."]
         ),
         t_kabakk: pager.create(
            0,
            () =>
               SAVE.data.n.plot === 72
                  ? world.population < 4
                     ? [
                        "<32>{#p/basic}{#npc/a}* 嘿！",
                        "<32>* ... you're pretty weird.",
                        "<32>* You put us through hell, then went through hell to save us all.",
                        "<32>* I don't really know why.",
                        "<32>* ...",
                        "<32>* ...",
                        "<32>* I DON'T KNOW HOW TO HANDLE TO THIS SITUATION!\n* YEAH!"
                     ]
                     : [
                        "<32>{#p/basic}{#npc/a}* 嘿！",
                        "<32>* ... you're pretty cool.",
                        "<32>* Thanks for going through hell to save us all back there.",
                        "<32>* That was a real stand-up move.",
                        "<32>* ...",
                        "<32>* ...",
                        "<32>* ALL HAIL THE NEW AUTHORITY!\n* YEAH!"
                     ]
                  : world.meanie
                     ? [
                        "<32>{#p/basic}{#npc/a}* 嘿！",
                        "<32>* What you been up to, huh KID?",
                        "<32>* You've got an awfully criminal look on your FACE...",
                        "<32>* ...",
                        "<32>* ...",
                        "<32>* 尊重我的权威！\n* 耶!"
                     ]
                     : [
                        "<32>{#p/basic}{#npc/a}* 嘿！",
                        "<32>* 你以为你能站在那\n  盯着我看吗？",
                        "<32>* 行吧，我告诉你个坏消息，\n  伙计。",
                        "<32>* 我是个执法人员。",
                        "<32>* 所以，呃...",
                        "<32>* 尊重我的权威！\n* 耶!"
                     ],
            () =>
               SAVE.data.n.plot === 72
                  ? world.population < 4
                     ? ["<32>{#p/basic}{#npc/a}* ..."]
                     : ["<32>{#p/basic}{#npc/a}* HAIL it, PAL."]
                  : ["<32>{#p/basic}{#npc/a}* 尊重下吧，伙计。"]
         ),
         t_loverboy: pager.create(
            0,
            () =>
               SAVE.data.n.plot === 72
                  ? world.population < 2
                     ? [
                        "<32>{#p/basic}{#npc/a}* Hey hey...",
                        "<32>* ... despite what you've done, you still chose to...",
                        "<32>* Oh... oh gee...\n* You can't see it, but I think I'm gonna cry...",
                        "<32>* ... wait, don't hurt me!"
                     ]
                     : [
                        "<32>{#p/basic}{#npc/a}* Hey hey...",
                        "<32>* ... thanks to you, we're...",
                        "<32>* Oh... oh gee...\n* You can't see it, but I think I'm gonna cry...",
                        "<32>* ... uh, can I cry?"
                     ]
                  : papreal() || world.dead_canine || SAVE.data.b.killed_mettaton
                     ? [
                        "<32>{#p/basic}{#npc/a}* Hey hey, why's everyone so sad around this town?",
                        "<32>* Did something happen?"
                     ]
                     : [
                        "<32>{#p/basic}{#npc/a}* 嘿嘿，什么东西都无法改变\n  我的生活！",
                        "<32>* 哈... 哈..."
                     ],
            () =>
               SAVE.data.n.plot === 72
                  ? world.population < 2
                     ? ["<32>{#p/basic}{#npc/a}* I still think you're cool...!\n* Please don't hurt me."]
                     : ["<32>{#p/basic}{#npc/a}* I love you...!"]
                  : papreal() || world.dead_canine || SAVE.data.b.killed_mettaton
                     ? ["<32>{#p/basic}{#npc/a}* Maybe it's just my imagination."]
                     : ["<32>{#p/basic}{#npc/a}* 也许我是疯了吧。"]
         ),
         t_politics: pager.create(
            0,
            () =>
               SAVE.data.n.plot === 72
                  ? [
                     "<32>{#p/basic}{#npc/a}* I heard the king revealed the truth about the humans he supposedly killed.",
                     "<32>* Everyone felt so bad that they didn't know.\n* They all gave him a big hug.",
                     "<32>* Then they took the humans and adopted them for themselves.",
                     "<32>* Now the humans will get to live their lives with us.",
                     "<32>* 这-就-是-政治啊！"
                  ]
                  : SAVE.data.b.killed_mettaton
                     ? [
                        "<32>{#p/basic}{#npc/a}* Hmmm, it's weird how everybody's been talking about TV lately.",
                        "<32>* What happened...?\n* I hope this doesn't affect our political system..."
                     ]
                     : papreal()
                        ? [
                           "<32>{#p/basic}{#npc/a}* Hmmm, usually Papyrus goes to meet with Undyne about now.",
                           "<32>* Where is he...?\n* I can feel our political system crumbling apart..."
                        ]
                        : world.popmax(0) - world.population > 4
                           ? [
                              "<32>{#p/basic}{#npc/a}* This town has no real police.\n* But maybe the fake police will scare off the bullies.",
                              "<32>* The politics carry on..."
                           ]
                           : world.trueKills > 0 || SAVE.data.n.bully > 0
                              ? [
                                 "<32>{#p/basic}{#npc/a}* This town has no mayor.",
                                 "<32>* But, if anything happens, a skeleton will tell a fish lady about it.",
                                 "<32>* 这-就-是-政治啊！"
                              ]
                              : [
                                 "<32>{#p/basic}{#npc/a}* 这个小镇总是那么沉闷。",
                                 "<32>* 但是，如果事情\n  继续这样发展下去的话，\n  也许这种情况会改变。",
                                 "<32>* 这就是政治吧？"
                              ],
            () =>
               SAVE.data.n.plot === 72
                  ? ["<32>{#p/basic}{#npc/a}* You see?\n* Politics isn't all bad..."]
                  : SAVE.data.b.killed_mettaton || papreal() || world.popmax(0) - world.population > 4
                     ? ["<32>{#p/basic}{#npc/a}* 政治..."]
                     : world.trueKills > 0 || SAVE.data.n.bully > 0
                        ? ["<32>{#p/basic}{#npc/a}* 政治。"]
                        : ["<32>{#p/basic}{#npc/a}* 政治？"]
         ),
         t_rabbit: pager.create(
            0,
            () =>
               SAVE.data.n.plot === 72
                  ? [
                     "<32>{#p/basic}{#npc/a}* Long ago, I heard they didn't have such fancy things as \"force fields.\"",
                     "<32>* All I can say... is that it feels good to be back."
                  ]
                  : SAVE.data.b.killed_mettaton
                     ? [
                        "<32>{#p/basic}{#npc/a}* Long ago, I heard TV celebrities were all over the place.",
                        "<32>* Now, they're looking to become a thing of the past."
                     ]
                     : papreal()
                        ? [
                           "<32>{#p/basic}{#npc/a}* Long ago, I heard the outpost was a dreary place.",
                           "<32>* At this rate... we'll be back to having that same problem."
                        ]
                        : [
                           "<32>{#p/basic}{#npc/a}* 很久以前，\n  我听说他们把小镇\n  一分为二了。",
                           "<32>* 我想知道这里原来\n  是什么样子的...？"
                        ],
            () =>
               SAVE.data.n.plot === 72
                  ? ["<32>{#p/basic}{#npc/a}* Thanks for bringing us back."]
                  : SAVE.data.b.killed_mettaton
                     ? ["<32>{#p/basic}{#npc/a}* It's too bad we can't just magically bring them back."]
                     : papreal()
                        ? ["<32>{#p/basic}{#npc/a}* It's too bad we can't just magically fix these things."]
                        : ["<32>{#p/basic}{#npc/a}* 我们可能永远都\n  无从得知了。"]
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
                  : papreal() || SAVE.data.b.killed_mettaton
                     ? ["<32>{#p/basic}{#npc/a}* Just now, I felt my smile falter for a moment.", "<32>* What's wrong?"]
                     : [
                        "<32>{#p/basic}{#npc/a}* 我们都知道事情不尽人意，\n  但我们仍旧保持微笑。",
                        "<32>* 你问为什么？",
                        "<32>* 我们面对着的是现实，\n  所以何必郁郁寡欢呢？"
                     ],
            () =>
               SAVE.data.n.plot === 72
                  ? world.population < 2
                     ? ["<32>{#p/basic}{#npc/a}* 笑一笑吧。"]
                     : ["<32>{#p/basic}{#npc/a}* 笑一笑吧！"]
                  : papreal() || SAVE.data.b.killed_mettaton
                     ? ["<32>{#p/basic}{#npc/a}* 笑一笑？"]
                     : ["<32>{#p/basic}{#npc/a}* 笑一笑吧。"]
         ),
         t_wisconsin: pager.create(
            0,
            () =>
               SAVE.data.n.plot === 72
                  ? world.population < 2
                     ? [
                        "<32>{#p/basic}{#npc/a}* Freedom...",
                        "<32>* That means I don't have to worry about getting beat up anymore.",
                        "<32>* Haha."
                     ]
                     : [
                        "<32>{#p/basic}{#npc/a}* Freedom...",
                        "<32>* That means I don't have to worry about cracking jokes anymore.",
                        "<32>* ...",
                        "<32>* What does a mouse do when it finally gets the cheese?",
                        "<32>* ...",
                        "<32>* Well...",
                        "<32>* It probably doesn't worry about cracking jokes, that's for sure.",
                        "<32>* Haha."
                     ]
                  : world.dead_dog || world.dead_skeleton || world.population < 6 || SAVE.data.b.killed_mettaton
                     ? [
                        "<32>{#p/basic}{#npc/a}* It just feels like...",
                        "<32>* Like everything is getting worse, and worse...\n* And worse."
                     ]
                     : [
                        "<32>{#p/basic}{#npc/a}* 每个人都在欢笑、讲笑话，\n  试图忘记我们的现代危机...",
                        "<32>* 死气沉沉。\n* 人口过剩。\n* 无家可归。",
                        "<32>* 我也想加入他们，\n  但我并不有趣。"
                     ],
            () =>
               SAVE.data.n.plot === 72
                  ? world.population < 2
                     ? ["<32>{#p/basic}{#npc/a}* Sorry.\n* That wasn't funny."]
                     : [
                        "<32>{#p/basic}{#npc/a}* Sorry.\n* I guess you could say...",
                        "<32>* That joke was a little too \"cheesy.\""
                     ]
                  : world.dead_dog || world.dead_skeleton || world.population < 6 || SAVE.data.b.killed_mettaton
                     ? ["<32>{#p/basic}{#npc/a}* And worse..."]
                     : ["<32>{#p/basic}{#npc/a}* 至少，我不讲双关笑话。"],
            () =>
               SAVE.data.n.plot === 72
                  ? world.population < 2
                     ? ["<32>{#p/basic}{#npc/a}* You should leave before I stop being nice to you."]
                     : ["<32>{#p/basic}{#npc/a}* Yes.\n* That was a pun.\n* I'm a pun mouse now."]
                  : world.dead_dog || world.dead_skeleton || world.population < 6 || SAVE.data.b.killed_mettaton
                     ? ["<32>{#p/basic}{#npc/a}* And worse still..."]
                     : ["<32>{#p/basic}{#npc/a}* 暂时吧。"]
         ),
         t_zorren: pager.create(
            0,
            () => [
               "<32>{#p/basic}{#npc/a}* （哦，嘿，是我，Zorren。）",
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
                     ? SAVE.data.b.s_state_capstation
                        ? [
                           "<32>* (Something's, like, different about you now.)",
                           "<32>* (...)",
                           "<32>* (Yeah, you know, uh, I don't really like you anymore.)",
                           "<32>* (I'd take back they key I gave you, if only I could.)"
                        ]
                        : [
                           "<32>* （你是，呃，对我们的警察，\n  呃，有意见，还是...？）",
                           "<32>* (...)",
                           "<32>* (Yeah, you know, uh, I don't really like you all that much.)",
                           "<32>* (There's just, something off, particularly about you.)"
                        ]
                     : [
                        ...(SAVE.data.b.oops
                           ? [
                              "<32>* （你是，呃，对我们的警察，\n  呃，有意见，还是...？）",
                              "<32>* （没有吗？）\n* （嘿，还好你呃，没有。）"
                           ]
                           : [
                              "<32>* (Y'know, you seem like someone who likes to show respect.)",
                              "<32>* (So, thanks for, uh, doing that.)"
                           ]),
                        ...(SAVE.data.b.s_state_capstation
                           ? []
                           : ((SAVE.data.b.s_state_capstation = true),
                              [
                                 "<32>* （实际上...）",
                                 "<32>* （给你，孩子。）\n* （我们手里，有个钥匙。）",
                                 "* （生锈的钥匙被添加到了\n  你的钥匙串上。）",
                                 "<32>* （打开“电话”来检查\n  所有获得的钥匙。）",
                                 "<32>{#p/basic}{#npc/a}* （我想，呃，我们应该\n  在什么地方有个军火库。）"
                              ])),
                        ...(SAVE.data.b.oops
                           ? [
                              "<32>* （嘘...）\n* （就是，这个警察岗是我和\n  Kabakk两个人自己建的。）",
                              "<32>* （很酷，是吧？）"
                           ]
                           : [
                              "<32>* （嘘...）\n* （就是，这个警察岗是我和\n  Kabakk两个人自己建的。）",
                              "<32>* （很酷，是吧？）"
                           ])
                     ])
            ],
            () =>
               SAVE.data.n.plot === 72
                  ? world.population < 4
                     ? ["<32>{#p/basic}{#npc/a}* (Do better, my friend.)\n* (Do better.)"]
                     : ["<32>{#p/basic}{#npc/a}* (Carry on, my friend.)\n* (Carry on.)"]
                  : world.meanie
                     ? ["<32>{#p/basic}{#npc/a}* (Get outta here.)"]
                     : SAVE.data.b.oops
                        ? ["<32>{#p/basic}{#npc/a}* （没错，我们不是真警察。）"]
                        : [
                           "<32>{#p/basic}{#npc/a}* (We may not be real police, but people like you are worth protecting and serving.)"
                        ]
         )
      },
      objinter: {
         ctower0: () => [
            "<32>{#p/human}* （你看了下终端。）",
            ...(SAVE.data.b.svr
               ? [
                  "<32>{#p/human}* (The note describes reducing the total to zero by adding or subtracting powers of ten.)"
               ]
               : [
                  "<32>{#p/basic}* 显示器侧面钉着一份说明...",
                  "<33>* 上面的字迹全是狂草，你根本\n  看不清楚。\n* 除了一个字，“零”。"
               ])
         ],
         ctower1: () =>
            SAVE.data.b.svr
               ? ["<32>{#p/human}* (But you already completed this puzzle beforehand.)"]
               : SAVE.data.n.plot === 72
                  ? ["<32>{#p/basic}* The terminal's unlocked state is now permanent."]
                  : ["<32>{#p/basic}* The terminal is now in an unlocked state."],
         microwave0: ["<32>{#p/human}* (You look behind the microwave...)", "<32>{#p/basic}* Nothing useful here."],
         microwave1: () =>
            SAVE.data.b.svr
               ? [
                  "<32>{#p/human}* (You look behind the microwave...)",
                  "<32>{#s/equip}{#p/human}* (You pulled the switch.)"
               ]
               : [
                  "<32>{#p/human}* (You look behind the microwave...)",
                  "<32>{#p/basic}* There's a switch here...",
                  "<32>{#s/equip}{#p/human}* (You pulled the switch.)"
               ],
         microwave2: () =>
            SAVE.data.b.svr
               ? [
                  "<32>{#p/human}* (You look behind the microwave...)",
                  "<32>{#p/human}* (But you already flipped the switch here.)"
               ]
               : ["<32>{#p/human}* (You look behind the microwave...)", "<32>{#p/basic}* Nothing new back here."],
         microwave3: () =>
            SAVE.data.b.svr
               ? ["<32>{#p/human}* (But you didn't notice anything of note about this appliance.)"]
               : [
                  "<32>{#p/basic}* 标准规格的电介质加热器，\n  首塔制造。\n*  260X年前后制成。",
                  "<32>* 这是台微波炉。\n* 顶多是十年前的货。"
               ],
         microwave4: () => [
            "<32>{#p/basic}* 它似乎在投射某种重力场。",
            ...(SAVE.data.b.oops ? ["<32>{#p/basic}* 我有点好奇... \n  这附近有没有开关什么的..."] : [])
         ],
         papmail1: () =>
            SAVE.data.b.svr
               ? ["<32>{#p/human}* (But you didn't have any mail to send.)"]
               : [
                  "<32>{#p/basic}* 邮箱上标注着“PAPYRUS”。",
                  choicer.create("* （看里边吗？）", "是", "否")
               ],
         papmail2: pager.create(
            0,
            () =>
               SAVE.data.n.plot === 72
                  ? [
                     "<32>{#p/human}* （你往里看了一眼...）",
                     world.runaway
                        ? "<32>{#p/basic}* It's even emptier than before."
                        : "<32>{#p/basic}* It's not empty?"
                  ]
                  : [
                     "<32>{#p/human}* （你往里看了一眼...）",
                     "<32>{#p/basic}* 是空的。",
                     ...(31 <= SAVE.data.n.plot &&
                        SAVE.data.n.plot_date < 0.1 &&
                        SAVE.data.n.state_starton_papyrus !== 1
                        ? [
                           "<18>{#p/papyrus}{#f/0}谢谢你你能来\n检查我的邮件！",
                           "<18>{#p/papyrus}{#f/4}谢天谢地，\n我已经全部都\n整理好了。"
                        ]
                        : [])
                  ],
            () =>
               SAVE.data.n.plot === 72
                  ? [
                     "<32>{#p/human}* （你往里看了一眼...）",
                     world.runaway
                        ? "<32>{#p/basic}* It's even emptier than before."
                        : "<32>{#p/basic}* It's not empty?"
                  ]
                  : ["<32>{#p/human}* （你往里看了一眼...）", "<32>{#p/basic}* 是空的。"]
         ),
         papmail3: ["<32>{#p/human}* （你决定不再看了。）"],
         puzzle3: () => [
            "<32>{#p/human}* （你看了下终端。）",
            ...(SAVE.data.b.svr
               ? ["<32>{#p/human}* (The modification log describes the completed state of the puzzle.)"]
               : [
                  "<32>{#p/basic}* 屏幕上显示着一条历史修改记录。",
                  "<32>* “图案谜题已解决！”\n* “你可以离开了。”"
               ])
         ],
         puzzlechip: () =>
            SAVE.data.b.svr
               ? ["<32>{#p/human}* (But you already completed this puzzle beforehand.)"]
               : ["<32>{#p/basic}* The terminal is now in an unlocked state."],
         spagtable0: ["<32>{#p/basic}* 一个没用过的盘子。"],
         spagtable1: [
            "<32>{#p/human}* （你凝视着令人垂涎的\n  意大利面。）",
            "<32>{#p/human}* （似乎是够不到它了。）"
         ],
         spagtable2: ["<32>{#p/human}* （你拿走了意大利面。）"],
         spagtable2b: ["<32>{#p/human}* (You're carrying too much to take that.)"],
         spagtable3: () =>
            SAVE.data.b.svr
               ? ["<32>{#p/human}* (You feel appreciative towards this plate for the food it served you.)"]
               : world.darker
                  ? ["<32>{#p/basic}* Why bother.\n* It's just a simple plate."]
                  : ["<32>{#p/basic}* Once the home of a truly out- of-this-world creation."],
         xtower1: pager.create(0, () => [
            "<32>{#p/human}* （你看了下终端。）",
            ...(SAVE.data.b.svr
               ? [
                  [
                     "<25>{#p/asriel1}{#f/13}* The power's gone.\n* But it makes sense they'd shut this off.",
                     "<25>{#f/17}* Wouldn't want anyone to get distracted and miss the transport, right?"
                  ],
                  [
                     "<25>{#p/asriel1}{#f/13}* To be fair, I don't think they'd actually let someone miss it.",
                     "<25>{#f/13}* Dr. Alphys probably has some kind of thing to scan for SOULs, so...",
                     "<25>{#f/17}* They'd know if anyone was left behind.",
                     "<25>{#f/15}* Makes me wonder if they can see us out here right now..."
                  ],
                  ["<25>{#p/asriel1}{#f/17}* Don't worry, Frisk.\n* The new homeworld will have plenty of games."]
               ][Math.min(asrielinter.xtower1++, 2)]
               : [
                  "<32>{#p/basic}* 这是个游戏终端...",
                  ...(SAVE.data.n.plot === 72 || world.postnoot
                     ? ["<32>{#p/basic}* The power supply has been cut."]
                     : ["<32>{#p/basic}* “尽可能快地射击目标！”\n  用[Z]来射击。”"])
               ])
         ])
      },
      papbooks1: pager.create(
         0,
         () =>
            SAVE.data.b.svr
               ? ["<32>{#p/human}* (The books on this bookshelf consist of puzzler's guides and children's stories.)"]
               : [
                  "<32>{#p/basic}* The bookshelf is filled with complex tomes about puzzle creation.",
                  "<32>* And children's books.",
                  ...(roomready()
                     ? [
                        "<18>{#p/papyrus}SOME OF MY FAVORITE BOOKS ARE ON THAT SHELF.",
                        "<18>{#f/4}LIKE \"ADVANCED PUZZLE CONSTRUCTS FOR BRIGHT MINDS.\"",
                        "<18>{#f/0}AND ANOTHER FAVORITE OF MINE?",
                        "<18>{#f/4}\"PEEK-A-BOO WITH FLUFFY BUNNY.\"",
                        "<18>{#f/8}THE ENDING ALWAYS GETS ME!"
                     ]
                     : [])
               ],
         () =>
            SAVE.data.b.svr
               ? ["<32>{#p/human}* (The books on this bookshelf consist of puzzler's guides and children's stories.)"]
               : ["<32>{#p/basic}* Complex manuals and children's books."]
      ),
      papbooks2: pager.create(
         1,
         [
            "<32>{#p/human}* （你取下了一本书...）",
            "<32>{#p/basic}* \"The cornerstone of a puzzle's interactive value is the player's affectation.\"",
            "<32>* \"The tacit drive within every player to explore, progress, and complete a given task.\"",
            "<32>* \"A puzzle that challenges and engages these motivations will ensure...\"",
            "<32>* \"The player remains focused and on task until the very end.\"",
            "<32>{#p/human}* （你把书放回原处。）"
         ],
         [
            "<32>{#p/human}* （你取下了一本书...）",
            "<32>{#p/basic}* \"'Peek-A-Boo!' said the human, appearing from behind the wall.\"",
            "<32>* \"The fluffy bunny, surprised, looked at the human excitedly.\"",
            "<32>* \"Then, the human moved away... no longer able to see them, the fluffy bunny was sad.\"",
            "<32>* \"It shook, thinking about how lonely it'd be.\"",
            "<32>* \"It wanted to cry, thinking it'd been abandoned for all eternity...\"",
            "<32>* \"But then, the human appeared once again, and all was right with the world.\"",
            "<32>* \"The human and the bunny gave each other a big, fluffy hug.\"",
            "<32>{#p/human}* （你把书放回原处。）"
         ],
         () =>
            world.runaway
               ? [
                  "<32>{#p/human}* （你取下了一本书...）",
                  "<23>{#p/papyrusnt}\"DEAR DAIRY, THE FORCE FIELD HAS BEEN DESTROYED.\"",
                  "<23>\"FRISK, THE HUMAN WHO CAME TO THE OUTPOST JUST A FEW DAYS AGO...\"",
                  "<23>\"IS NOW THE SUBJECT OF FEAR AMONG EVERYONE ON THE OUTPOST.\"",
                  "<23>\"WE'RE ALL LEAVING RIGHT AWAY, BEFORE THEY WAKE UP.\"",
                  "<23>\"STILL, A PART HOPES THEY FIND THEIR WAY OFF THE OUTPOST, TOO.\"",
                  "<23>\"EVERYONE ELSE JUST SEEMS CONTENT LEAVING THEM TO DIE.\"",
                  "<32>{#p/human}* （你把书放回原处。）"
               ]
               : SAVE.data.n.plot === 72
                  ? [
                     "<32>{#p/human}* （你取下了一本书...）",
                     "<23>{#p/papyrusnt}\"DEAR DAIRY, THE FORCE FIELD HAS BEEN DESTROYED.\"",
                     "<23>\"FRISK, THE HUMAN WHO CAME TO THE OUTPOST JUST A FEW DAYS AGO...\"",
                     "<23>\"TOOK ON IMPOSSIBLE ODDS TO SAVE US FROM DESTRUCTION.\"",
                     "<23>\"MAYBE THIS IS WHAT'LL INSPIRE SANS TO MOVE UP IN THE WORLD.\"",
                     "<23>\"I ONLY MENTION IT BECAUSE, I NEVER KNEW HIS SENTRY JOB...\"",
                     "<23>\"MEANT DOING SO LITTLE ACTUAL WORK.\"",
                     "<32>{#p/human}* （你把书放回原处。）"
                  ]
                  : [
                     "<32>{#p/human}* （你取下了一本书...）",
                     "<23>{#p/papyrusnt}\"DEAR DAIRY, SANS HAS JUST BEEN MADE AN OFFICIAL ROYAL SENTRY.\"",
                     "<23>\"AT FIRST, I WAS CONFUSED AT HIM...\"",
                     "<23>\"AFTER ALL, WHY WOULD SOMEBODY SO LAZY WANT TO TAKE THIS ON?\"",
                     "<23>\"WELL, I DECIDED NOT TO QUESTION IT.\"",
                     "<23>\"THE TRUTH IS, I COULDN'T BE MORE PROUD OF HIM!!!\"",
                     "<23>\"ONLY TIME WILL TELL WHAT GREAT THINGS THIS BRINGS FORTH.\"",
                     "<32>{#p/human}* （你把书放回原处。）"
                  ]
      ),
      papcomputer1: pager.create(
         0,
         () => [
            ...(roomready()
               ? [
                  "<18>{#p/papyrus}域外网！\n我在那上面\n超有人气的。",
                  "<18>{#f/4}再有12个关注...",
                  "<18>{#f/0}我的粉丝数\n就到两位数了！"
               ]
               : []),
            SAVE.data.b.svr
               ? "<32>{#p/human}* (You move towards the computer...)"
               : "<32>{#p/basic}* 电脑的浏览器\n  打开了一个\n  社交媒体网站。",
            choicer.create("* （登录Papyrus的账号吗？）", "是", "否")
         ],
         () => [
            SAVE.data.b.svr
               ? "<32>{#p/human}* (You move towards the computer...)"
               : "<32>{#p/basic}* 电脑的浏览器\n  打开了一个\n  社交媒体网站。",
            choicer.create("* （登录Papyrus的账号吗？）", "是", "否")
         ]
      ),
      papcomputer2: ["<32>{#p/human}* (You decide not to log in.)"],
      papcomputer3: {
         a: "酷炫骷髅95",
         b: "粉丝数 -2",
         c: "这个账号属于\n伟大的\nPAPYRUS。\n只发高质量\n动态！",
         d: "- 新闻 -",
         e: () =>
            world.runaway
               ? "BREAKING:\n..\n..\n..\n..\n.. WE ALL NEED\nTO LEAVE."
               : SAVE.data.n.plot === 72
                  ? "BREAKING:\nWE CAN LEAVE.\nLIKE..\nFOR REAL.\nSOURCE:\nLOOK OUTSIDE,\nPEOPLE!"
                  : "BREAKING:\nMEW MEW STAR-\nFIRE IS..\nSUPER BAD.\nSOURCE:\nLIKE, IT'S\nJUST TRUE?"
      },
      papcomputer4: [
         () =>
            world.runaway
               ? {
                  a: "哈喽！",
                  b: "SAVE YOURSELVES...",
                  c: ""
               }
               : SAVE.data.n.plot === 72
                  ? {
                     a: "哈喽！",
                     b: "FAILED TO CONNECT...",
                     c: ""
                  }
                  : {
                     a: "哈喽！",
                     b: "分享你的想法...",
                     c: ""
                  },
         () =>
            world.runaway
               ? {
                  a: "ALPHYS",
                  b: "今天",
                  c: "< message deleted >"
               }
               : SAVE.data.n.plot === 72
                  ? {
                     a: "系统消息",
                     b: "今天",
                     c: "The OuterNet is closed."
                  }
                  : SAVE.data.n.plot < 34
                     ? {
                        a: "NAPSTABLOOK22",
                        b: "今天",
                        c: "这就是为什么我再也不上\n网了... 没有什么有意义\n的事情发生"
                     }
                     : world.genocide
                        ? {
                           a: "NAPSTABLOOK22",
                           b: "今天",
                           c: "but i'm a ghost..."
                        }
                        : world.dead_skeleton
                           ? {
                              a: "NAPSTABLOOK22",
                              b: "今天",
                              c: "umm... i'll just keep\nworking on this mix..."
                           }
                           : {
                              a: "懒骨.",
                              b: "今天",
                              c: "let's just hope he\ndoesn't capture our SOULs~\n*finger guns*",
                              d: true
                           },
         () =>
            world.runaway
               ? {
                  a: "懒骨.",
                  b: "今天",
                  c: "< message deleted >",
                  d: true
               }
               : SAVE.data.n.plot === 72
                  ? {
                     a: "ALPHYS",
                     b: "今天",
                     c: "whoops, i forgot to shut\noff the server"
                  }
                  : SAVE.data.n.plot < 34
                     ? {
                        a: "壮鱼91",
                        b: "昨天",
                        c: "嗯... 你不是每天都这么\n说吗，PAPYRUS？"
                     }
                     : world.genocide
                        ? {
                           a: "壮鱼91",
                           b: "今天",
                           c: "stay outta this blooky.\ni dont want you getting\nhurt too."
                        }
                        : world.dead_skeleton
                           ? {
                              a: "壮鱼91",
                              b: "今天",
                              c: "papyrus is gone blooky.\nthat human is going to\nPAY for what they did."
                           }
                           : {
                              a: "壮鱼91",
                              b: "今天",
                              c: "well no...\nbut he did capture all of\nour hearts! FUHUHU!!"
                           },
         () =>
            world.runaway
               ? {
                  a: "酷炫骷髅95",
                  b: "今天",
                  c: "< message deleted >"
               }
               : SAVE.data.n.plot === 72
                  ? {
                     a: "_Sp4ceAdv3ntur3r_",
                     b: "今天",
                     c: "< Username Update >\nWas: _K1ll3rMann3qu1n_\nNow: _Sp4ceAdv3ntur3r_"
                  }
                  : SAVE.data.n.plot < 34
                     ? {
                        a: "酷炫骷髅95",
                        b: "昨天",
                        c: "今天就是我要抓到人类的\n日子！\n我能从骨子里感觉到！"
                     }
                     : world.genocide
                        ? {
                           a: "NAPSTABLOOK22",
                           b: "今天",
                           c: "umm... is there anything\ni can do to help? things\nare getting worse..."
                        }
                        : {
                           a: "NAPSTABLOOK22",
                           b: "今天",
                           c: "so... did papyrus capture\na human yet? or..."
                        }
      ] as (() => { a: string; b: string; c: string; d?: boolean })[],
      papcomputer5: () =>
         world.runaway
            ? ["FRISK", "DON'T YOU", "DARE COME", "AFTER US"]
            : SAVE.data.n.plot === 72
               ? ["SORRY", "BUT WE'RE", "OFFLINE", "LMAO"]
               : ["刷新页面", "查看消息", "聊天设置", "退出登录"],
      papcouch0: () =>
         SAVE.data.b.svr
            ? ["<32>{#p/human}* (You can't seem to find anything in the couch.)"]
            : ["<32>{#p/basic}* 已经被清理干净了。"],
      papcouch1: pager.create(
         0,
         () => [
            "<32>{#p/human}* （你听到沙发里\n  有叮当的声音。）",
            SAVE.data.b.svr
               ? "<32>{#p/human}* (It seems a cache of coins was left here...)"
               : "<32>{#p/basic}* 里面有一堆硬币...",
            choicer.create("* (Take the coins?)", "是", "否")
         ],
         () => [
            SAVE.data.b.svr
               ? "<32>{#p/human}* (The coins within haven't moved from where they were.)"
               : "<32>{#p/basic}* 硬币还在。",
            choicer.create("* (Take the coins?)", "是", "否")
         ]
      ),
      papcouch2: ["<32>{#p/human}* （你决定什么也不拿。）"],
      papcouch3: ["<32>{#p/human}* (You found 10G.)"],
      papcouch3a: [
         "<18>{#p/papyrus}{#f/1}你在帮我们\n清理沙发！？",
         "<18>{#p/papyrus}{#f/5}你真的彻头彻尾的\n是个善良的人...",
         "<18>{#p/papyrus}{#f/6}多么慷慨！！！"
      ],
      paproom1: [
         "<18>{#p/papyrus}{#f/6}WHAT!?\nHOW DID YOU...",
         "<18>{#p/papyrus}{#f/5}YOU APPEARED RIGHT IN FRONT OF ME!"
      ],
      paproom2: ["<18>{#p/papyrus}{#f/4}HAS SANS BEEN TEACHING YOU ABOUT SHORTCUTS...?"],
      paproom3: ["<18>{#p/papyrus}{#f/7}... UGH!\nSTOP DOING THAT!!"],
      paproom4: ["<18>{#p/papyrus}{#f/0}YOU'RE ASKING FOR TROUBLE, HUMAN."],
      paproom5: ["<18>{#p/papyrus}{#f/4}(SIGH...)"],
      papdate0: () => [
         SAVE.data.b.flirt_papyrus
            ? "<18>{#p/papyrus}{#f/5}哇，你真的\n好渴望约会啊..."
            : "<18>{#p/papyrus}{#f/5}WOWIE, YOU'RE SO EAGER TO HANG OUT WITH ME...",
         "<18>{#f/5}甚至要抢在\n我前面进我家！",
         "<18>{#f/6}你真的\n很重视啊！"
      ],
      papdate1x: pager.create(
         0,
         [
            "<18>{#p/papyrus}{#f/0}HELLO, HUMAN!",
            "<18>{#f/5}I HOPE EVERYTHING IS ALRIGHT.",
            "<18>{#f/6}FEEL FREE TO TAKE A WALK AROUND TOWN...",
            "<18>{#f/0}... OR A LOOK IN MY HOUSE!"
         ],
         ["<18>{#p/papyrus}{#f/4}JUST BE SURE TO AVOID SANS'S ROOM."]
      ),
      papdate1: () => [
         SAVE.data.b.flirt_papyrus
            ? "<18>{#p/papyrus}所以你回来\n跟我约会了！"
            : "<18>{#p/papyrus}所以你回来\n看我了！",
         ...(world.dead_dog || world.population < 6
            ? [
               "<18>{#f/0}太好了！！",
               "<18>{#f/5}TRUTH BE TOLD, IT'S BEEN A LITTLE LONELY TODAY...",
               "<18>{#f/5}A LOT OF PEOPLE ARE STRANGELY ABSENT...",
               "<18>{#f/0}BUT YOU'RE STILL HERE!!",
               "<18>{#f/0}THAT MEANS SOMETHING, RIGHT??"
            ]
            : ["<18>{#f/4}你肯定非常\n看重这件事..."]),
         "<18>{#f/5}我会带你去一个\n很特别的地方...",
         "<18>{#f/0}一个我愿意花大把\n时间流连忘返的\n地方！！！"
      ],
      papdate2: ["<18>{#p/papyrus}我家！！！"],
      papdate3: pager.create(
         0,
         ["<18>{#p/papyrus}欢迎来我豪华的\n家里做客！", "<18>好好享受，\n慢慢参观！！！"],
         ["<18>{#p/papyrus}如果你看完了，\n就上楼来我的房间！"]
      ),
      papdate3a: ["<18>{#p/papyrus}{#f/6}哇！当个好主人\n可真是个体力活！"],
      papdate3b: [
         "<18>{#p/papyrus}{#f/5}哇，我感觉不到\n我的腿了...",
         "<18>{#f/0}那肯定证明了\n我是个好主人！！！"
      ],
      papdate4: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}那是我的房间！",
            "<18>{#f/4}如果这里的东西\n你都看完了，\n那我们就进去...",
            "<18>{#f/4}然后...",
            SAVE.data.b.flirt_papyrus
               ? "<18>{#f/9}做大家会在\n约会的时候\n做的事！"
               : "<18>{#f/9}\"HANG OUT\" LIKE A PAIR OF VERY COOL FRIENDS!",
            choicer.create("* （你要怎么回答？）", "是", "否")
         ],
         ["<18>{#p/papyrus}READY?", choicer.create("* （你要怎么回答？）", "是", "否")]
      ),
      papdate4a: ["<18>{#p/papyrus}好，我们进去吧！"],
      papdate4b: ["<18>{#p/papyrus}I'LL KEEP WAITING HERE THEN!"],
      papdate5: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}{#f/5}SO, UM...",
            "<18>{#f/5}IF YOU'VE SEEN EVERYTHING...",
            SAVE.data.b.flirt_papyrus
               ? "<18>{#f/6}DO YOU WANT TO START DATING?"
               : "<18>{#f/6}DO YOU WANT TO START HANGING OUT?",
            choicer.create("* （你要怎么回答？）", "是", "否")
         ],
         ["<18>{#p/papyrus}{#f/6}READY TO START?", choicer.create("* （你要怎么回答？）", "是", "否")]
      ),
      papdate5a: () => [
         SAVE.data.b.flirt_papyrus
            ? "<18>{#p/papyrus}OKAY!!!\nDATING START!!!"
            : "<18>{#p/papyrus}OKAY!!!\nLET'S HANG TEN!!!"
      ],
      papdate5b: ["<18>{#p/papyrus}TAKE YOUR TIME, I'LL WAIT FOR YOU."],
      papdate6: () => [
         SAVE.data.b.flirt_papyrus
            ? "<32>{#p/story}µµµµµµµµ DATING µµ START!"
            : "<32>{#p/story}µµµµµµµµ HANGOUT µ START!"
      ],
      papdate7: () => [
         "<15>{#p/papyrus}{#f/10}HERE WE ARE!!",
         SAVE.data.b.flirt_papyrus ? "<15>{#f/20}ON OUR DATE!!" : "<15>{#f/20}HANGING OUT!!",
         "<15>{#f/24}I'VE ACTUALLY NEVER DONE THIS BEFORE.",
         "<15>{#f/10}BUT DON'T WORRY!!!",
         "<15>{#f/20}PREPARATION IS MY (UNOFFICIAL) LAST NAME!"
      ],
      papdate8: () => [
         "<15>{#f/20}WHAT DO I HAVE HERE, YOU ASK?",
         SAVE.data.b.flirt_papyrus
            ? "<15>{#p/papyrus}{#f/10}AN OFFICIAL DATING GUIDE, STRAIGHT FROM THE LIBRARBY!"
            : "<15>{#p/papyrus}{#f/10}AN OFFICIAL HANGOUT GUIDE, STRAIGHT FROM THE LIBRARBY!",
         "<15>{#f/20}WITH THIS, WE'RE BOUND TO HAVE A GREAT TIME!"
      ],
      papdate9: () => [
         "<15>{#p/papyrus}{#f/25}LET'S SEE...",
         SAVE.data.b.flirt_papyrus
            ? "<15>{#f/25}STEP ONE: PRESS C OR CTRL TO OPEN THE {@fill=#f00}DATING HUD{@fill=#000}."
            : "<15>{#f/25}STEP ONE: PRESS C OR CTRL TO OPEN THE {@fill=#f00}FRIENDSHIP HUD{@fill=#000}."
      ],
      papdate10: () => [
         "<15>{#p/papyrus}{#f/24}... WAIT.",
         "<15>{#f/22}YOU ALREADY DID THAT!?!?",
         SAVE.data.b.flirt_papyrus
            ? "<15>{#f/11}WOWIE, YOU MUST REALLY LOVE ME!"
            : "<15>{#f/11}WOWIE, YOU MUST REALLY LIKE ME!",
         "<15>{#f/10}IT'S ONTO STEP TWO, THEN!"
      ],
      papdate11: [
         "<15>{#p/papyrus}{#f/24}...",
         "<15>{#f/24}EH, WE DIDN'T NEED IT ANYWAY.",
         "<15>{#f/20}ONTO STEP TWO!"
      ],
      papdate12: [
         "<15>{#p/papyrus}{#f/11}WOWIE, I FEEL SO INFORMED!",
         "<15>{#f/24}IN FACT, I THINK WE'RE READY FOR STEP TWO..."
      ],
      papdate13: () => [
         SAVE.data.b.flirt_papyrus
            ? "<15>{#p/papyrus}{#f/25}STEP TWO: ASK THEM ON A DATE."
            : "<15>{#p/papyrus}{#f/25}STEP TWO: ASK THEM TO HANG OUT."
      ],
      papdate13a: () => [
         "<15>{#f/24}\"AHEM.\"",
         "<15>{#f/20}HUMAN!\nI, THE GREAT PAPYRUS...",
         SAVE.data.b.flirt_papyrus
            ? "<15>{#f/10}WOULD LIKE TO GO ON A DATE WITH YOU!"
            : "<15>{#f/10}WOULD LIKE TO HANG OUT WITH YOU!"
      ],
      papdate14: [choicer.create("* （你要怎么回答？）", "是", "否")],
      papdate15a: ["<15>{#p/papyrus}{#f/12}R-REALLY???", "<15>{#f/11}WOWIE!!!"],
      papdate15a1: ["<15>{#f/24}I GUESS THAT MEANS IT'S TIME FOR STEP THREE..."],
      papdate15b: ["<15>{#p/papyrus}{#f/21}OH...", "<15>{#f/27}F-FORTUNATELY, IT ONLY SAYS TO ASK."],
      papdate15c: ["<15>{#f/24}WELL ANYWAY, IT'S TIME FOR STEP THREE..."],
      papdate16: ["<15>{#p/papyrus}{#f/25}STEP THREE: PUT ON NICE CLOTHES TO SHOW YOU CARE."],
      papdate16a: ["<15>{#p/papyrus}{#f/24}...", "<15>{#f/24}WAIT A SECOND."],
      papdate17: () => [
         "<15>{#f/24}NICE CLOTHES...",
         (
            {
               spacesuit: "<15>{#f/26}THAT OLD SPACESUIT YOU'RE WEARING...",
               halo: "<15>{#f/26}THAT FANCY HALO ON YOUR HEAD...",
               eye: "<15>{#f/26}THAT FORCE FIELD AROUND YOU...",
               temyarmor: "<15>{#f/26}THAT ARMOR YOU'RE WEARING...",
               goggles: "<15>{#f/26}THAT GADGET ON YOUR HEAD...",
               visor: "<15>{#f/26}THAT VISOR IN FRONT OF YOUR EYES...",
               sonic: "<15>{#f/26}THAT ODD DEVICE YOU'RE CARRYING...",
               heart_locket: "<15>{#f/26}THAT LOCKET AROUND YOUR NECK..."
            } as Partial<CosmosKeyed<string>>
         )[SAVE.data.s.armor] || "<15>{#f/26}THAT THING ON YOUR BODY...",
         "<15>{#f/20}YOU'RE WEARING CLOTHING RIGHT NOW!!!",
         "<15>{#f/24}AND NOT ONLY THAT...",
         "<15>{#f/20}EARLIER TODAY, YOU WERE ALSO WEARING CLOTHING!"
      ],
      papdate17a: () => [
         "<15>{#f/12}NO...!\nCOULD IT BE???",
         SAVE.data.b.flirt_papyrus
            ? "<15>{#f/13}HAVE YOU WANTED TO DATE ME FROM THE VERY BEGINNING???"
            : "<15>{#f/13}HAVE YOU WANTED TO BEFRIEND ME FROM THE VERY BEGINNING???"
      ],
      papdate18a: () => [
         "<15>{#p/papyrus}{#f/22}NO!!",
         "<15>{#f/22}YOU PLANNED IT ALL!!!",
         ...(SAVE.data.b.flirt_papyrus
            ? [
               "<15>{#f/22}YOU MIGHT EVEN BE BETTER AT DATING THAN I AM!!!",
               "<15>N-NOOOO!!!\nYOUR {@fill=#003cff}DATING POWER{@fill=#000}...!!!"
            ]
            : [
               "<15>{#f/22}YOU MIGHT EVEN BE BETTER AT HANGING OUT THAN I AM!!!",
               "<15>N-NOOOO!!!\nYOUR {@fill=#003cff}FRIENDSHIP POWER{@fill=#000}!!!"
            ])
      ],
      papdate18b: () => [
         "<15>{#p/papyrus}{#f/24}OH...",
         "<15>{#f/21}BUT DESPITE THAT...",
         "<15>{#f/21}YOU STILL CHOSE TO WEAR CLOTHING TODAY OF ALL DAYS...?",
         "<15>{#f/24}IT'S ALMOST LIKE...",
         ...(SAVE.data.b.flirt_papyrus
            ? [
               "<15>{#f/13}LIKE YOUR INTEREST IN ME WAS PREDESTINED~",
               "<15>{#f/22}N-NOOOO!!!\nYOUR {@fill=#003cff}DATING POWER{@fill=#000}...!!!"
            ]
            : [
               "<15>{#f/13}LIKE YOUR FRIENDSHIP WAS PREDESTINED~",
               "<15>{#f/22}N-NOOOO!!!\nYOUR {@fill=#003cff}FRIENDSHIP POWER{@fill=#000}...!!!"
            ])
      ],
      papdate19: ["<15>{#p/papyrus}{#f/15}NYEH!", "<15>{#f/15}捏嘿嘿！！！"],
      papdate20: () => [
         "<15>{#p/papyrus}{#f/15}DON'T THINK YOU'VE BESTED ME YET!",
         "<15>{#f/20}I, THE GREAT PAPYRUS...",
         SAVE.data.b.flirt_papyrus
            ? "<15>{#f/20}HAVE NEVER BEEN BEATEN AT DATING..."
            : "<15>{#f/20}HAVE NEVER BEEN BEATEN AT HANGING OUT...",
         "<15>{#f/15}AND I NEVER WILL!!",
         "<15>{#f/10}I CAN EASILY KEEP UP WITH YOU!!!",
         "<15>{#f/24}IN FACT...",
         "<15>{#f/20}I ALWAYS WEAR MY \"SPECIAL\" CLOTHES...",
         "<15>{#f/20}UNDERNEATH MY REGULAR ONES!!",
         "<15>{#f/15}BEHOLD!!"
      ],
      papdate21: ["<15>{#p/papyrus}{#f/15}WHAT DO YOU THINK OF MY SECRET STYLE?"],
      papdate22: [choicer.create("* （你要怎么回答？）", "It rocks", "It sucks")],
      papdate23a: ["<15>{#p/papyrus}{#f/13}NO!!!", "<15>{#f/13}A GENUINE COMPLIMENT...!"],
      papdate23b: ["<15>{#p/papyrus}{#f/13}NO!!!", "<15>{#f/13}A CRITICAL, YET HONEST REVIEW...!"],
      papdate24: [
         "<15>{#p/papyrus}{#f/24}HOWEVER...",
         "<15>{#f/20}YOU DON'T TRULY UNDERSTAND THE {@fill=#f00}HIDDEN POWER{@fill=#000} OF THIS OUTFIT!",
         "<15>{#f/26}THEREFORE..."
      ],
      papdate24a: () => [
         "<15>{#f/15}WHAT YOU JUST SAID IS INVALID!!",
         SAVE.data.b.flirt_papyrus
            ? "<15>{#f/15}THIS DATE WON'T ESCALATE ANY FURTHER!"
            : "<15>{#f/15}THIS HANGOUT WON'T ESCALATE ANY FURTHER!",
         "<15>{#f/24}UNLESS...",
         "<15>{#f/20}YOU CAN FIND MY {@fill=#f00}SECRET{@fill=#000}.",
         "<15>{#f/15}BUT THAT WON'T HAPPEN!!"
      ],
      papdate24b: "* Move and inspect with [Z].",
      papdate25: [
         
         "<15>{#p/papyrus}{#f/21}THE WIG ON MY HEAD...?",
         "<15>{#f/16}THE WIG ON MY HEAD.",
         "<15>{#f/10}THE WIG... ON MY HEAD!!!",
         "<15>{#f/10}NYEH HEH HEH!\nTHAT'S VERY SIGNIFICANT INDEED!"
      ],
      papdate25a: [
         "<15>{#p/papyrus}{#f/21}OVERWHELMED BY THE SIGHT OF MY \"STELLAR\" OUTFIT?",
         "<15>{#f/24}NO, NO, I UNDERSTAND.",
         "<15>{#f/20}BUT YOU CAN'T BACK DOWN NOW!!!"
      ],
      papdate25b: [
         "<15>{#p/papyrus}{#f/26}THIS SHIRT DIDN'T ORIGINALLY SAY \"STELLAR...\"",
         "<15>{#f/20}BUT I IMPROVED IT!",
         "<15>{#f/10}EXPERT TIP: ALL CLOTHING CAN BE IMPROVED THIS WAY.",
         "<15>{#f/20}... BUT THAT'S NOT A SECRET!\nTRY AGAIN!"
      ],
      papdate25c: [
         "<15>{#p/papyrus}{#f/24}I SEE, I SEE.",
         "<15>{#f/24}YOU LIKE FEELING MY ARM- PILLOWS WITH A FLOATING HEART.",
         "<15>{#f/20}BUT WHO DOESN'T!?\nTRY AGAIN!"
      ],
      papdate25d: [
         "<15>{#p/papyrus}{#f/13}HOLDING MY HAND SO I'LL TELL YOU THE ANSWER...?",
         "<15>{#f/14}N-NO, I MUST RESIST!!",
         "<15>{#f/20}TRY AGAIN!"
      ],
      papdate25e: [
         "<15>{#p/papyrus}{#f/26}PILLOWS OR NOT, THERE'S NO SECRET TO MY LEGS.",
         "<15>{#f/10}ONLY HARD WORK AND PERSEVERANCE!",
         "<15>{#f/20}TRY AGAIN!"
      ],
      papdate25f: [
         "<15>{#p/papyrus}{#f/24}THIS \"DRIP\" MAY BE UNDE- FEET-ABLE...",
         "<15>{#f/20}BUT EXPECTING A SECRET HERE IS TOTALLY UNREASONABLE!",
         "<15>{#f/20}TRY AGAIN!"
      ],
      papdate25g: [
         "<15>{#p/papyrus}{#f/20}AH YES, MY TOP-OF-THE-LINE SPORTSWEAR!",
         "<15>{#f/24}YOU WON'T FIND ANY SECRETS HERE, THOUGH, BECAUSE...",
         "<15>{#f/20}I DON'T HAVE ANY POCKETS TO HIDE THEM IN!!!",
         "<15>{#f/20}TRY AGAIN!"
      ],
      papdate25h: () => [
         "<15>{#p/papyrus}{#f/24}MY SHOULDERS...",
         "<15>{#f/10}ARE YOU ASKING FOR A PIGGYBACK RIDE??",
         SAVE.data.b.flirt_papyrus
            ? "<15>{#f/24}WELL, I'D GIVE IT TO YOU IF WE WEREN'T SO BUSY DATING."
            : "<15>{#f/24}WELL, I'D GIVE IT TO YOU IF WE WEREN'T SO BUSY HANGING OUT.",
         "<15>{#f/20}BUT WE ARE!\nSO TRY AGAIN!"
      ],
      papdate25i: [
         "<15>{#p/papyrus}{#f/14}SERIOUSLY??",
         "<15>{#f/19}I'M NOT JUST GOING TO -TELL- YOU THE SECRET...",
         "<15>{#f/20}YOU'LL HAVE TO TRY A LITTLE HARDER THAN THAT!"
      ],
      papdate25j: () =>
         calcLV() > 2
            ? [
               "<15>{#p/papyrus}{#f/24}IF YOUR {@fill=#f00}LV{@fill=#000} IS THIS HIGH, THEN...",
               SAVE.data.b.flirt_papyrus
                  ? "<15>{#f/28}YOUR {@fill=#f00}LOVE{@fill=#000} FOR ME MUST BE EVEN GREATER THAN I THOUGHT!"
                  : "<15>{#f/28}YOU'VE GOT MORE EXPERIENCE WITH {@fill=#f00}LOVE{@fill=#000} THAN I THOUGHT!",
               "<15>{#f/24}STILL, THAT'S YOUR SECRET, NOT MINE.",
               "<15>{#f/20}TRY AGAIN!"
            ]
            : calcLV() === 2
               ? [
                  "<15>{#p/papyrus}{#f/24}AN {@fill=#f00}LV{@fill=#000} OF TWO?",
                  "<15>{#f/27}DOES THAT MEAN...",
                  ...(SAVE.data.b.flirt_papyrus
                     ? [
                        "<15>{#f/28}YOU HAVE A SECRET SECOND {@fill=#f00}LOVE{@fill=#000} INTEREST...?",
                        "<15>{#f/20}WELL, THIS IS SUPPOSED TO BE ABOUT MY SECRET!!"
                     ]
                     : [
                        "<15>{#f/28}YOUR INTEREST IN ME IS SECRETLY TWO-FOLD?",
                        "<15>{#f/28}THAT DEEP DOWN, YOU {@fill=#f00}LOVE{@fill=#000} ME AS MUCH AS YOU LIKE ME?",
                        "<15>{#f/14}N-NO...!\nI WILL NOT SUCCUMB TO YOUR TRICKS!"
                     ]),
                  "<15>{#f/20}TRY AGAIN!"
               ]
               : SAVE.data.b.oops
                  ? [
                     "<15>{#p/papyrus}{#f/24}AN {@fill=#f00}LV{@fill=#000} OF ONE?",
                     "<15>{#f/26}DOES THAT MEAN...",
                     "<15>{#f/28}THAT I'M YOUR ONE TRUE {@fill=#f00}LOVE{@fill=#000}...?",
                     ...(SAVE.data.b.flirt_papyrus
                        ? ["<15>{#f/14}N-NO...!\nI WILL NOT SUCCUMB TO YOUR TRICKS!"]
                        : [
                           "<15>{#f/24}WELL, THAT WOULDN'T MAKE SENSE IF WE'RE JUST FRIENDS.",
                           "<15>{#f/14}B-BUT... NO!\nI WILL NOT SUCCUMB TO YOUR TRICKS!"
                        ]),
                     "<15>{#f/20}TRY AGAIN!"
                  ]
                  : [
                     "<15>{#p/papyrus}{#f/24}AN {@fill=#f00}LV{@fill=#000} OF ZERO?",
                     "<15>{#f/26}OKAY, THAT'S WEIRD.",
                     "<15>{#f/21}SANS TOLD ME A HUMAN'S {@fill=#f00}LOVE{@fill=#000} STARTS AT ONE.",
                     "<15>{#f/24}HMM...",
                     "<15>{#f/24}IS THIS YOUR SECRET?",
                     "<15>{#f/20}WELL, THIS IS SUPPOSED TO BE ABOUT MY SECRET!",
                     "<15>{#f/20}TRY AGAIN!"
                  ],
      papdate25k: () => [
         ...(SAVE.data.n.hp > calcHP()
            ? [
               "<15>{#p/papyrus}{#f/22}WHAT!?\nAN HP EVEN -FULLER- THAN FULL!?",
               "<15>{#f/10}YOU REALLY CAME PREPARED FOR ANYTHING!",
               "<15>{#f/24}BUT THIS HAS NOTHING TO DO WITH MY SECRET."
            ]
            : [
               "<15>{#p/papyrus}{#f/24}YOUR HP MAY BE FULL, BUT WHEN IT COMES TO SECRETS...",
               "<15>{#f/20}YOU'RE STILL RUNNING ON EMPTY!"
            ]),
         "<15>{#f/20}TRY AGAIN!"
      ],
      papdate25l: [
         "<15>{#p/papyrus}{#f/20}SO THAT'S HOW IT IS...",
         "<15>{#f/24}YOU THINK BY SCRATCHING MY NECK...",
         "<15>{#f/21}AND CALLING ME A \"GOOD BOY...\"",
         "<15>{#f/24}I'LL BARK THE ANSWER AT YOU LIKE A DOG.",
         "<15>{#f/20}LAST I CHECKED, I WAS A SKELETON!\nSO TRY AGAIN!"
      ],
      papdate26: () => [
         "<15>{#p/papyrus}{#f/27}W-WELL THEN...",
         "<15>{#f/27}YOU FOUND MY SECRET!",
         "<15>{#f/24}I SUPPOSE I HAVE NO CHOICE BUT TO ADMIT THE TRUTH.",
         "<15>{#f/24}IT'S A PRESENT...",
         ["<15>{#f/27}A PRESENT J-JUST FOR YOU!!!", "<15>{#f/27}A PRESENT FOR US TO SHARE!!!"][
         (SAVE.data.n.state_papyrus_spaghet + 1) % 2
         ],
         "<15>{#f/10}GO AHEAD!\nOPEN IT!"
      ],
      papdate27: [choicer.create("* (What will you do?)", "Open it", "Do not")],
      papdate28: [
         "<15>{#p/papyrus}{#f/21}YOU WON'T EVEN HARM MY DELICATE WRAPPING??",
         "<15>{#f/27}N-NO... THAT TECHNIQUE...",
         "<15>{#f/13}IT'S TOO MUCH!",
         "<15>{#f/14}B-BUT... AHA!\nCOUNTERATTACK!",
         "<15>{#f/15}I'LL OPEN THE PRESENT MYSELF!!"
      ],
      papdate29: ["<15>{#p/papyrus}{#f/20}DO YOU KNOW WHAT -THIS- IS?"],
      papdate30: [choicer.create("* (Do you know what it is?)", "是", "否")],
      papdate31a: [
         "<15>{#p/papyrus}{#f/26}SPAGHETTI.",
         "<15>{#f/24}THAT'S PROBABLY WHAT YOU'RE THINKING, ISN'T IT?",
         "<15>{#f/20}RIGHT!",
         "<15>{#f/15}BUT OH-SO-WRONG!"
      ],
      papdate31b: [
         "<15>{#p/papyrus}{#f/20}NYEH HEH HEH!\nTHAT'S RIGHT.",
         "<15>{#p/papyrus}{#f/15}YOU HAVE NO IDEA!",
         "<15>{#f/24}THOUGH THIS APPEARS TO BE SPAGHETTI..."
      ],
      papdate32: () => [
         "<15>{#p/papyrus}{#f/20}THIS ISN'T ANY PLAIN OL' PASTA!",
         "<15>{#f/20}THIS IS AN ARTISAN'S WORK!",
         "<15>{#f/24}SILKEN SPA- GHETTI, FINELY AGED IN A TIME DILATION UNIT.",
         "<15>{#f/20}THEN PREPARED BY ME, MASTER CHEF PAPYRUS!",
         "<15>{#f/15}HUMAN!!!\nIT'S TIME TO END THIS!!",
         "<15>THERE'S NO WAY THIS CAN GO ANY FURTHER!",
         ...[["<15>{#f/20}LET'S EAT THIS SPAGHETTI TOGETHER!!!"], ["<15>{#f/20}FEAST UPON MY ULTIMATE TECHNIQUE!!!"]][
         (SAVE.data.n.state_papyrus_spaghet + 1) % 2
         ]
      ],
      papdate33: [choicer.create("* (What will you do?)", "Eat it", "Do not")],
      papdate33a: () => [
         "<32>{#p/human}* (You take a small bite.)\n* (You appear to be blushing from the taste.)",
         "<32>{#p/basic}* It's unbelievable...!",
         ...(SAVE.data.n.state_papyrus_spaghet === 1
            ? ["<32>{#p/basic}* Papyrus seems to have enjoyed his bite just the same."]
            : [])
      ],
      papdate34a: () => [
         "<15>{#p/papyrus}{#f/10}WHAT A PASSIONATE EXPRESSION!!!",
         SAVE.data.b.flirt_papyrus
            ? "<15>{#f/12}YOU MUST REALLY LOVE MY COOKING!"
            : "<15>{#f/12}YOU MUST REALLY LIKE MY COOKING!",
         ...[
            [
               "<15>{#f/24}WELL, I DID TOO...",
               SAVE.data.b.flirt_papyrus
                  ? "<15>{#f/20}BUT I THINK YOU LOVED IT EVEN MORE THAN ME!!!"
                  : "<15>{#f/20}BUT I THINK YOU LIKED IT EVEN MORE THAN ME!!!"
            ],
            ["<15>{#f/10}AND BY EXTENSION, ME!", "<15>{#f/20}MAYBE EVEN MORE THAN I DO!!!"]
         ][(SAVE.data.n.state_papyrus_spaghet + 1) % 2],
         "<15>{#f/27}BUT... THAT'S IMPOSSIBLE...!",
         "<15>{#f/12}HOW DID YOU DO THAT!?!?"
      ],
      papdate34b: () => [
         "<15>{#p/papyrus}{#f/21}YOU MEAN...",
         "<15>{#f/18}YOU'RE LETTING ME HAVE IT INSTEAD?",
         ...[
            [
               "<15>{#f/24}I THOUGHT WHEN YOU SAID YOU WERE SHARING...",
               "<15>{#f/20}YOU WOULD AT LEAST WANT A LITTLE FOR YOURSELF.",
               "<15>{#f/27}BUT NO, ALL THIS TIME...",
               "<15>{#f/12}YOU WANTED ME, -ME-, TO HAVE IT ALL!!!"
            ],
            [
               "<15>{#f/21}EVEN AFTER WHAT YOU SAID BEFORE...",
               "<15>{#f/21}ABOUT WANTING MY SPAGHETTI FOR YOURSELF...",
               "<15>{#f/27}AT THE VERY PRECIPICE OF YOUR SATISFACTION, YOU...",
               "<15>{#f/12}YOU GAVE IT ALL UP FOR ME???"
            ]
         ][(SAVE.data.n.state_papyrus_spaghet + 1) % 2]
      ],
      papdate35: ["<15>{*}{#p/papyrus}{#f/22}AUGH!!!{%15}"],
      papdate36: ["<15>{*}{#p/papyrus}{#f/22}URRRGH!!!{%15}"],
      papdate37: ["<15>{*}{#p/papyrus}{#f/22}NOOOOOOOO!!!{%15}"],
      papdate38: () => [
         "<18>{#p/papyrus}{@random=1.1/1.1}HUMAN.\nIT'S CLEAR NOW.",
         SAVE.data.b.flirt_papyrus
            ? "<18>{@random=1.1/1.1}YOU'RE MADLY IN LOVE WITH ME."
            : "<18>{@random=1.1/1.1}YOU'RE COMPLETELY OBSESSED WITH ME.",
         "<99>{@random=1.1/1.1}EVERYTHING YOU DO.\nEVERYTHING YOU SAY.",
         "<18>{@random=1.1/1.1}IT'S ALL BEEN FOR MY SAKE.",
         "<18>{@random=1.1/1.1}HUMAN.\nI WANT YOU TO BE HAPPY, TOO.",
         "<18>{@random=1.1/1.1}IT'S TIME FOR ME TO EXPRESS MY FEELINGS...",
         "<18>{@random=1.1/1.1}IT'S TIME I TOLD YOU THE TRUTH."
      ],
      papdate39: () =>
         SAVE.data.b.flirt_papyrus
            ? [
               "<15>{#f/21}HUMAN, THE TRUTH IS...",
               "<15>{#f/21}I JUST DON'T LIKE YOU THE WAY YOU LIKE ME.",
               "<15>{#f/24}ROMANTICALLY, I MEAN.",
               "<15>{#f/27}I MEAN, I TRIED VERY HARD TO!",
               "<15>{#f/27}I THOUGHT THAT BECAUSE YOU HAD FLIRTED WITH ME...",
               "<15>{#f/27}THAT I WAS SUPPOSED TO GO ON A DATE WITH YOU.",
               "<15>{#f/10}THEN, ON OUR DATE, FEELINGS WOULD BLOSSOM FORTH!!!",
               "<15>{#f/20}I WOULD BE ABLE TO MATCH YOUR PASSION FOR ME!",
               "<15>{#f/21}BUT ALAS...\nI, THE GREAT PAPYRUS...",
               "<15>{#f/21}HAVE FAILED.",
               "<15>{#f/21}I FEEL JUST THE SAME AS BEFORE.",
               "<15>{#f/27}AND THE WORST PART IS, BY DATING YOU...",
               "<15>{#f/22}I HAVE ONLY DRAWN YOU DEEPER INTO YOUR LOVE!",
               "<15>{#f/21}A DARK PRISON OF PASSION FROM WHICH THERE IS NO ESCAPE.",
               "<15>{#f/27}HOW COULD I HAVE DONE THIS TO MY DEAR FRIEND...?",
               "<15>{#f/27}...",
               "<15>{#f/27}... NO..."
            ]
            : ["<15>{#f/24}HUMAN, THE TRUTH IS..."],
      papdate39a: () => [
         ...(SAVE.data.b.flirt_papyrus
            ? [
               "<15>{#f/20}NO!\nTHAT'S WRONG!",
               "<15>{#f/17}I CAN'T FAIL AT ANYTHING!!!",
               "<15>{#f/20}HUMAN!!!\nI'LL HELP YOU THROUGH THESE TRYING TIMES!!!",
               "<15>{#f/24}I'LL KEEP BEING YOUR COOL FRIEND...",
               "<15>{#f/20}AND WE CAN FORGET THIS EVER HAPPENED.",
               "<15>{#f/10}AFTER ALL, YOU, TOO, ARE VERY GREAT.",
               "<15>{#f/20}IT WOULD BE TRAGIC TO LOSE YOUR FRIENDSHIP!",
               "<15>{#f/21}SO, PLEASE....",
               "<15>{#f/21}DON'T CRY BECAUSE I CAN'T KISS YOU.",
               "<15>{#f/19}BESIDES, I DON'T EVEN HAVE LIPS!!!",
               ...(SAVE.data.n.plot < 48
                  ? [
                     "<15>{#f/10}AND HEY, SOMEDAY, YOU'LL FIND SOMEONE JUST AS GREAT.",
                     "<15>{#f/24}WELL, NO.\nTHAT'S NOT TRUE.",
                     "<15>{#f/20}BUT I'LL HELP YOU SETTLE FOR SECOND BEST!!!"
                  ]
                  : ["<15>{#f/10}AND HEY, UNDYNE'S NOT TOO FAR FROM HERE.", "<15>{#f/20}WE CAN HANG OUT WITH HER!"])
            ]
            : [
               "<15>{#f/10}I LIKE YOU TOO!",
               "<15>{#f/10}YOU ARE A VERY NICE PERSON, AFTER ALL.",
               "<15>{#f/21}BUT, MAYBE...",
               "<15>{#f/21}YOU'D BE BETTER OFF IF YOU LIVED MORE FOR YOUR OWN SAKE.",
               "<15>{#f/21}RATHER THAN JUST FOR MINE.",
               "<15>{#f/10}FORTUNATELY, I KNOW THE SOLUTION!!!",
               "<15>{#f/20}A HANGOUT WITH MY BOSS, UNDYNE!!!",
               "<15>{#f/24}I THINK IF YOU SPREAD OUT YOUR FRIEND ENERGY A BIT MORE...",
               "<15>{#f/10}YOU'D LEAD A MUCH HEALTHIER LIFESTYLE.",
               ...(SAVE.data.n.plot < 48
                  ? ["<15>{#f/20}I'LL LET YOU KNOW WHEN I'M READY!"]
                  : ["<15>{#f/20}SO LET'S DO IT!\nTOGETHER!!"])
            ]),
         "<15>{#f/20}捏嘿嘿\n嘿嘿！！！"
      ],
      papdate40: () => [
         "<15>{#f/24}OH, AND IF YOU EVER NEED TO REACH ME...",
         "<15>{#f/10}HERE'S MY {@fill=#f00}PHONE NUMBER{@fill=#000}.",
         "<15>{#f/11}FEEL FREE TO CALL ME AT ANY TIME!",
         ...(SAVE.data.b.flirt_papyrus
            ? [
               "<15>{#f/24}PLATONICALLY, OF COURSE.",
               ...(SAVE.data.n.plot < 48
                  ? ["<15>{#f/10}WELL, GOTTA GO!"]
                  : ["<15>{#f/10}WELL, SEE YOU AT UNDYNE'S HOUSE!"])
            ]
            : SAVE.data.n.plot < 48
               ? ["<15>{#f/20}WELL, GOTTA GO!"]
               : ["<15>{#f/20}WELL, SEE YOU AT UNDYNE'S HOUSE!"]),
         "<15>{#f/20}捏嘿嘿！"
      ],
      papdate41: {
         a: () => (SAVE.data.b.flirt_papyrus ? "ROMANCE" : "FRIENDSHIP"),
         b: "POWER\nLEVELS",
         c: "DATE: K-615.09",
         d: "SPEED",
         e: "GALAXY\nMAP",
         f: "TENSION"
      },
      pappuzzle1: [
         "<18>{#p/papyrus}{#f/0}人类！",
         "<18>{#f/0}下一个谜题\n是我最喜欢的\n谜题之一。",
         "<18>{#f/4}这就像我兄弟的\n棉球收藏一样...",
         "<18>{#f/0}不论哪个地方\n都让人满意！",
         "<18>{#f/9}我尽量不告诉你\n解决方法。"
      ],
      pappuzzle1a: ["<18>{#p/papyrus}{#f/0}试试吧！"],
      pappuzzle1b: [
         "<18>{#p/papyrus}{#f/4}IT WOULD APPEAR THIS PUZZLE HAS BEEN SOLVED.",
         "<18>{#p/papyrus}{#f/4}BEHIND MY BACK.",
         "<18>{#p/papyrus}{#f/4}WITHOUT MY EXPRESS PERMISSION.",
         "<18>{#p/papyrus}{#f/0}WELL, SOMEBODY'S GOING TO HAVE A BAD DAY TODAY.",
         "<18>{#p/papyrus}{#f/5}...",
         "<18>{#p/papyrus}{#f/5}WITH ANY LUCK, THE NEXT PUZZLE WILL BE TAMPER-FREE.",
         "<18>{#p/papyrus}{#f/6}... I'LL MEET YOU IN THE NEXT ROOM."
      ],
      pappuzzle2: ["<18>{#p/papyrus}哇！\n你解开了啊！！"],
      pappuzzle2a: ["<18>而且不用我的帮忙\n你就解开了！！！"],
      pappuzzle2b: ["<18>而且根本没用我\n帮你太多\n你就解开了！"],
      pappuzzle2c: ["<18>虽然需要一点鼓励，\n但你真的做到了！"],
      pappuzzle2d: [
         "<18>你一定跟我一样\n很在意谜题吧！",
         "<18>那么，我觉得你肯定\n会爱上下个谜题的！",
         "<18>可能对你而言\n都算太简单了！！",
         "<18>捏！\n嘿嘿！\n嘿嘿嘿！！！"
      ],
      papsink0: () =>
         SAVE.data.b.svr
            ? [
               "<32>{#p/human}* (The dog residue in this sink appears to be arranged in the shape of a heart.)",
               "<32>* (Somehow, this seems to put you at ease.)"
            ]
            : SAVE.data.n.plot < 72
               ? ["<32>{#p/basic}* 水槽太高了，\n  你都没办法洗手..."]
               : ["<32>{#p/basic}* There's a pile of dog residue in the sink."],
      papsink1: [
         "<18>{#p/papyrus}{#f/9}厉害吧？\n我增加了水槽的高度。",
         "<18>{#f/0}现在我可以在下边\n放更多骨头了！\n你快看看！"
      ],
      papsink2: ["<18>{#p/papyrus}{#f/8}不-，是那条狗！"],
      papsink3: ["<18>{#p/papyrus}{#f/31}哦，好可怜\n好可怜的小狗狗...", "<18>{#f/9}给你，尝尝我的\n特殊攻击！"],
      papsink4: ["<18>{#p/papyrus}哇！！！\n它喜欢诶！！！"],
      papsink5: ["<18>{#p/papyrus}{#f/7}SANS！", "<18>别再用配乐\n打扰我的生活了！！"],
      papsink6: ["<18>{#p/papyrus}{#f/4}现在那条狗\n在我的攻击下\n消失了。", "<18>哦好吧..."],
      papsolu1: [
         "<18>{#p/papyrus}看起来你需要\n一个提示。",
         "<18>{#f/4}嗯...",
         "<18>{#f/0}喏，我会注意\n这几条电路的。",
         "<18>{#f/0}但这只是\n我自己的见解哦。"
      ],
      papsolu2: [
         "<18>{#p/papyrus}{#f/5}还是困惑吗？",
         "<18>{#f/5}呃... 或许...",
         "<18>{#f/6}你用电路一点点\n推出答案呢？？？",
         "<18>{#f/5}我在尽量不给你\n把答案透露出来了..."
      ],
      papsolu3: [
         "<18>{#p/papyrus}{#f/6}还来？？？",
         "<18>{#f/0}我觉得，\n我应该完全可以\n告诉你解法了。",
         "<18>{#f/4}虽然我其实\n不想扫兴..."
      ],
      papsolu3a: [
         "<18>{#p/papyrus}{#f/9}你真的，真的想要\n谜题的解法吗？？？",
         choicer.create("* （你要怎么回答？）", "是", "否")
      ],
      papsolu3a1: [
         "<18>{#p/papyrus}解！法！就是！",
         "<18>{#f/4}（请脑补一段\n敲鼓声...）",
         "<18>{#f/0}...在你右侧那盏灯\n旁边的那棵\n全息投影树！",
         "<18>快去看看叭！！！"
      ],
      papsolu3a2: [
         "<18>{#p/papyrus}哇... 你真是个\n谜题爱好者！",
         "<18>我被你的热情\n给打动了！",
         "<18>你做得到的，\n人类！！！"
      ],
      papsolu4: ["<18>{#p/papyrus}{#f/4}你忘记我给你的\n解法了吗...？"],
      papsolu5: ["<18>{#f/0}{#p/papyrus}就快完成了！\n只剩下一条电路\n就要激活了！"],
      papspaghet1: (take: boolean) => [
         "<18>{#p/papyrus}{#f/1}什么！？\n你是怎么避开\n我的陷阱的？",
         "<18>{#f/4}还有，比起这个...",
         "<18>{#f/0}还有剩的给我吗？？？",
         choicer.create("* （你要怎么跟Papyrus说\n  关于他做的意大利面的事？）", take ? "拿走了" : "留在那了", "吃掉了"),
         "<18>{#p/papyrus}真的！？"
      ],
      papspaghet1a: [
         "<18>{#p/papyrus}{#f/1}什么！？\n你是怎么避开\n我的陷阱的？",
         "<18>{#f/4}还有，比起这个...",
         "<18>{#f/0}IS THERE ANY LEFT FOR...",
         "<18>{#f/4}... WAIT.",
         "<18>{#f/0}IT'S RIGHT THERE IN YOUR ITEMS!!",
         "<18>{#f/9}WHAT WERE YOU PLANNING, HUMAN?",
         choicer.create("* (What will you do with\n  Papyrus' spaghetti?)", "Share it", "Eat it"),
         "<18>{#p/papyrus}真的！？"
      ],
      papspaghet2a: [
         "<18>{#f/5}你抗拒我做的\n意大利面的味道...",
         "<18>{#f/6}就是因为想跟我\n一起吃吗？？？",
         "<18>{#f/9}那好吧！！",
         "<18>不要烦恼！\n我，伟大的PAPYRUS...",
         "<18>会为你和我二人\n做各种我们想吃的\n意大利面的！",
         "<18>{#f/0}嘿嘿嘿嘿嘿嘿捏！"
      ],
      papspaghet2b: [
         "<18>{#f/5}哇...",
         "<19>{#f/6}之前几乎从来没有人\n欣赏过我的厨艺...",
         "<18>{#f/9}那好吧！！",
         "<18>不要烦恼！\n我，伟大的PAPYRUS...",
         "<18>会为你做你想吃的\n各种意大利面的！",
         "<18>{#f/0}嘿嘿嘿嘿嘿嘿捏！"
      ],
      paptv: pager.create(
         0,
         () => [
            ...(dateready() && SAVE.data.n.state_starton_papyrus === 0
               ? ["<18>{#p/papyrus}哦，这是我\n最喜欢的电视节目！"]
               : []),
            ...(SAVE.data.n.plot < 67.1
               ? ["<33>{#p/mettaton}* “敬请期待新节目！”"]
               : SAVE.data.b.killed_mettaton
                  ? ["<33>{#p/mettaton}* \"NETWORK UNREACHABLE.\""]
                  : world.bad_robot
                     ? ["<33>{#p/mettaton}* \"SORRY, FOLKS!\"\n* \"THE PROGRAM'S BEEN CANCELLED!\""]
                     : ["<32>{#p/mettaton}* \"HOPE YOU ENJOYED THE SHOW!\""]),
            ...(dateready() && SAVE.data.n.state_starton_papyrus === 0
               ? [
                  "<18>{#p/papyrus}{#f/7}什么！！！\n平常都比这个\n精彩的！",
                  "<18>{#f/4}单纯就是这一集\n质量不好。",
                  "<18>{#f/7}你不许喷我！！！"
               ]
               : [])
         ],
         ["<33>{#p/mettaton}* “敬请期待新节目！”"]
      ),
      papyrus1: ["<18>{#p/papyrus}所以，在我讨论\nUNYDNE的时候..."],
      papyrus2: [
         "<18>{#p/papyrus}SANS！！\n我的天啊！！\n那是个...",
         "<18>人类吗！？！？",
         "<25>{#p/sans}{#f/2}* 不是，那就是个\n  人类形状的全息投影。"
      ],
      papyrus3: [
         "<18>{#p/papyrus}{#f/4}哦。",
         "<18>{#f/4}...",
         "<18>{#f/4}等一下...",
         "<18>{#f/7}你在撒谎！！",
         "<25>{#p/sans}{#f/2}* 抱歉，我是想说\n  “全息投影形状的人类”。",
         "<18>{#p/papyrus}{#f/0}...SANS，我们\n终于做到了！",
         "<18>{#f/9}UNDYNE现在必定会让我\n加入皇家守卫了！！！",
         "<18>{#f/6}我们只需要...",
         "<18>{#f/5}去...",
         "<18>{#f/4}...",
         "<18>{#f/4}我把什么东西给忘了。",
         "<25>{#p/sans}{#f/2}* 演讲，还记得吗？",
         "<18>{#p/papyrus}{#f/4}哦，对对对。\n...“咳咳”。",
         "<18>{#f/9}人类！你可能以为\n你来到这里就安全了。",
         "<18>{#f/9}但我，\n伟大的PAPYRUS，\n打算扭转你的想法！",
         "<18>{#f/4}首先，我要用\nALPHYS博士的谜题\n让你眼花缭乱...",
         "<18>{#f/4}然后，\n在你最意想不到的时候...",
         "<19>{#f/9}哇呜！\n抓到你了！\n押去首塔！",
         "<18>{#f/9}我们的战斗\n将一如既往地传奇！",
         "<18>{#f/4}无论如何...",
         "<18>{#f/9}来吧... \n只要你够胆！"
      ],
      papyrus4: ["<18>{#f/0}捏嘿嘿嘿嘿\n嘿嘿嘿！！！"],
      papyrus5: [
         "<25>{#p/sans}* 不错，进展很顺利。",
         "<25>* 别担心，伙计。",
         "<25>{#f/2}* 我会用眼窝\n  替你盯着的。"
      ],
      papyrus6x1: ["<18>{#p/papyrus}{#f/5}人-人类？\n你就是那个人类吗...？"],
      papyrus6x2: [
         "<15>{#p/papyrus}{#e/papyrus/20}我的天哪！\n我终于见到你啦！",
         "<18>{#p/papyrus}{#f/0}自打听说你来了星港，\n我就梦想着能见你一面！",
         "<18>{#p/papyrus}{#f/4}...你问，\n为啥SANS没跟我\n在一块？",
         "<18>{#p/papyrus}{#f/6}唉，我有理由怀疑...",
         "<18>{#p/papyrus}{#f/5}...他好像\n刻意想让我躲着你。",
         "<18>{#p/papyrus}{#f/7}真不愧是他！！！",
         "<18>{#p/papyrus}{#f/0}但是，\n只要你不说，我不说～",
         "<18>{#p/papyrus}{#f/9}那懒骨头\n就甭想知道一丁点\n咱们的“地下情谊”！"
      ],
      papyrus6x3: [
         "<18>{#p/papyrus}{#f/5}不过，我现在得走了。\n绝不能让他发现\n我偷偷溜出来了。",
         "<18>{|}{#p/papyrus}{#f/9}待会见，人-{%}"
      ],
      papyrus6x4: ["<32>{#p/without}* ...papyrus？"],
      papyrus6: () => [
         "<18>{#p/papyrus}{#f/9}人类！！",
         world.nootflags.has("s_puzzle2")
            ? "<18>{#f/4}YOU MAY HAVE HAD AN EASY TIME BEFORE."
            : "<18>{#f/4}你可能已经过了\n我很多别的挑战。",
         "<18>{#f/9}但现在，你就\n绝对要束手无策了！",
         "<18>你也看到了，\n出这个谜题的\n不是别人...",
         "<18>{#f/0}正是那个大名鼎鼎的\nALPHYS博士！",
         "<18>实际上，\n规则很简单。",
         "<18>这个显示器会\n随机读出一个数字。",
         "<18>{#f/9}...这数字就是\n你度过这里\n所需要的秒数！",
         "<18>{#f/0}如果数字是奇数，\n你就必须躲避子弹。",
         "<18>以1结尾的数\n是星形的子弹...",
         "<18>以3结尾的数\n是月亮形状的子弹...",
         "<18>{#f/4}5是彗星的，\n7是类星体的...",
         "<18>{#f/9}如果是9结尾的，\n就是完全随机！",
         "<18>{#f/0}如果数字是质数，\n重力就会翻转。",
         "<18>{#f/4}（不过，\n小于10的质数\n一般不会触发。）",
         "<18>{#f/0}如果数字是偶数，\n你一开始会\n平安无事...",
         "<18>{#f/9}但你接下来就要\n遭遇到随机的怪物！",
         "<18>并且，如果是\n2的整数幂，会使\n怪物数量翻倍！！",
         "<18>{#f/0}如果某个数字\n重复了两次...",
         "<18>{#f/0}等待的时间\n就会乘以这个数字！",
         "<18>{#f/0}如果数字是\n按顺序排列的，\n譬如1-2-3...",
         "<18>{#f/0}房间就会摇摇晃晃，\n让你连走都走不动！",
         "<18>{#f/0}然后，如果\n包含一个数字4...",
         "<18>{#f/9}SANS就会随机用\n蓝色魔法\n让你浮起来！",
         "<25>{#p/sans}{#f/6}* 你看吧，\n这就是我特殊的黄色眼睛。",
         "<18>{#p/papyrus}{#f/7}现在不行，SANS！！",
         "<25>{#p/sans}* 哦，嘿嘿。\n* 看来我有些{@fill=#ff0}浮{@fill=#fff}躁了，嗯？",
         "<18>{#p/papyrus}{#f/4}好好好...",
         "<18>{#f/9}总之！\n你理解我的\n解释了吗？",
         choicer.create("* （你要怎么回答？）", "是", "否")
      ],
      papyrus7: [
         "<18>{#p/papyrus}{#f/9}好，\n那我们回顾一遍！",
         "<18>{#f/0}这个显示器会随机\n生成一个秒数。",
         "<18>也就是，\n你要等多少秒\n才能通过的时间。",
         "<18>奇数要躲子弹。",
         "<18>尾数决定\n子弹的种类。",
         "<18>1是星星，3是月亮，\n5是类星体，\n7是...",
         "<18>{#f/5}等等，\n哪个数字是\n类星体来着？",
         "<18>{#f/9}呃，然后，\n如果尾数是9，\n就是完全随机！",
         "<18>{#f/0}质数会改变重力...",
         "<18>{#f/0}偶数会\n遭遇随机战斗...",
         "<18>{#f/5}等等，\n我刚才是说\n重力会改变吗！？，",
         "<18>{#f/7}呃，我是说颠倒！！",
         "<18>{#f/0}但是2的整数幂\n会使遭遇数翻倍。",
         "<18>数字按顺序排列的\n会让房间摇晃，\n然后4是...",
         "<18>{#f/6}呃，我忘记\n4会发生什么了。",
         "<25>{#p/sans}* 你这不是在暗示我吗？",
         "<18>{#p/papyrus}{#f/6}可能吧？？？",
         "<18>{#f/7}管他呢！！\n你现在理解了吗！？",
         choicer.create("* （你要怎么回答？）", "当然", "更糊涂了")
      ],
      papyrus8: [
         "<18>{#p/papyrus}{#f/9}那... 好吧...",
         "<18>{#f/9}这样吧，\n我把规则放在这！",
         "<18>{#f/0}这样，你就可以\n按自己的节奏\n自己读了。",
         "<18>祝你好运，人类！！",
         "<18>{#f/5}捏... 嘿嘿..."
      ],
      papyrus9: [
         "<18>{#p/papyrus}{#f/9}太奈斯了！",
         "<18>{#f/9}好，废话少说...",
         "<18>让我们看看\n会是什么随机数！！"
      ],
      papyrus10: [
         "<18>{#p/papyrus}{#f/9}人类！",
         "<18>{#f/9}准备好面对你\n最严峻的挑战了吗？",
         "<18>{#f/9}特此介绍...\n这致命恐怖的挑战！"
      ],
      papyrus11: [
         "<18>{#p/papyrus}{#f/9}一旦我下达命令，\n一切都会动起来！",
         "<18>激光扫射！\n线圈发电！\n刀剑挥舞！",
         "<18>一切都会以精确的、\n战术性的方式进行！",
         "<18>{#f/4}不精确的一点是，\n你肯定会失败。",
         "<18>{#f/9}那么！！！\n你准备好了吗！？！？",
         "<18>因为！",
         "<18>我！",
         "<18>就！",
         "<18>要！",
         "<18>启动了！"
      ],
      papyrus12: [
         "<25>{#p/sans}* 怎么了？\n* 我们到底还进不进行了？",
         "<18>{#p/papyrus}{#f/7}...",
         "<25>{#p/sans}{#f/3}* 那条烦人的狗\n  在上面会不耐烦的。",
         "<18>{#p/papyrus}{#f/7}随时都会进行的！"
      ],
      papyrus13: [
         "<25>{#p/sans}* 准备好了就开始吧。",
         "<18>{#p/papyrus}{#f/6}我...",
         "<18>{#f/6}我现在在想...",
         "<18>{#f/6}这个挑战...",
         "<18>{#f/6}可能...",
         "<18>{#f/6}...",
         "<18>{#f/4}...有点不算个\n  好主意了。",
         "<18>{#f/5}想想我设计的\n这个挑战，\n可以这么...",
         "<18>{#f/9}但是，不用害怕！",
         "<18>{#f/9}我是个\n有原则的骷髅！",
         "<18>{#f/4}就是，坦白来说，\n一个你根本不可能\n活着通过的挑战...",
         "<18>{#f/7}就实在是太做作了！",
         "<18>走你！！"
      ],
      papyrus14: [
         "<18>{#p/papyrus}{#f/7}你看什么看！？",
         "<18>{#f/9}这只是PAPYRUS的\n又一次决定性的\n胜利罢了！！",
         "<18>捏！",
         "<18>嘿！",
         "<18>{#f/4}...",
         "<18>...嘿？"
      ],
      papyrusFinal1: [
         "<23>{#p/papyrus}{#f/30}人类。",
         "<23>请允许我倾诉\n一些复杂的情感。",
         "<23>就像..."
      ],
      papyrusFinal2: () =>
         world.genocide
            ? [
               "<23>失去至亲的悲痛。",
               "<23>无能为力的自责。",
               "<23>阴阳两隔的怀念。",
               "<23>这些情感..."
            ]
            : papreal()
               ? [
                  "<23>众生罹难的心痛。",
                  "<23>无能为力的绝望。",
                  "<23>改过自新的理想。",
                  "<23>这些情感..."
               ]
               : [
                  "<23>找到另一个\n意面爱好者的喜悦。",
                  "<23>对另一个人\n解谜技巧的钦佩。",
                  "<23>想有一个很酷、\n很聪明的人认为你\n也同样很酷的渴望。",
                  "<23>这些情感..."
               ],
      papyrusFinal3: () =>
         world.genocide || papreal()
            ? [
               "<18>{#f/31}肯定正萦绕在你心头。",
               "<18>{#f/32}很难想象这些情感\n究竟是怎样的...",
               "<18>{#f/6}毕竟，我很... 伟大...",
               "<18>{#f/32}{#x1}...",
               "<18>{#f/31}人类，尽管你做了\n很多错事...\n我...",
               "<18>{#f/5}我仍然相信你！",
               "<18>{#f/31}我知道，\n你可以浪子回头。",
               "<18>{#f/31}我知道，\n你愿意变得更好。",
               ...(world.genocide
                  ? ["<18>{#f/4}不管那个“ASRIEL”\n说了什么荒唐的话，"]
                  : ["<18>{#f/5}不管你觉得自己\n多么不可救药，"]),
               "<18>{#f/6}{#x2}但我知道，在内心深处，\n你还是个好人！",
               "<18>{#f/0}我会让你的善良重见天日！",
               "<18>{#f/0}我会让你的潜能尽数释放！",
               "<18>{#f/4}最终...",
               "<18>{#f/9}我会让你知道，\n你仍然是最棒的！！！",
               "<18>{#f/0}我，PAPYRUS，\n敞开双臂欢迎你！"
            ]
            : [
               "<18>{#f/0}一定就是你\n现在的情感！！",
               "<18>{#f/4}我很难想象这些情感\n究竟是怎样的...",
               "<18>{#f/4}毕竟，我十分伟大。",
               "<18>我从来不好奇\n有很多朋友的感觉\n是怎样的。",
               "<18>{#f/5}我很同情你，\n孤单的人类...",
               "<18>{#f/0}但不要担心！！！\n你再也不会孤单了！",
               "<18>{#f/9}因为我，\n伟大的PAPYRUS，\n会成为你的...",
               "<18>{#f/5}{#x1}...",
               "<18>不...",
               "<18>{#f/7}{#x2}不，不该是这样的！",
               "<18>我不能成为\n你的“朋友”...",
               "<18>你是个人类！\n我必须逮捕你！！！",
               "<18>{#f/9}然后，我就可以实现\n我毕生的梦想！！！",
               "<18>力量强大！\n受人爱戴！\n声名远扬！！！",
               "<18>那就是PAPYRUS！！！",
               "<18>{#f/4}皇家守卫中...",
               "<18>{#f/9}最闪亮的新星！！！"
            ],
      papyrusFinal4: (b: boolean) =>
         world.edgy || world.killed0
            ? [
               "<18>{#p/papyrus}{#f/0}WOWIE!\nYOU DID IT!",
               "<18>{#p/papyrus}{#f/5}YOU DIDN'T DO A VIOLENCE!",
               "<18>{#p/papyrus}{#f/6}TO BE HONEST, I WAS A LITTLE AFRAID...",
               "<18>{#p/papyrus}{#f/0}BUT YOU'RE ALREADY TAKING STEPS TO REDEEM YOURSELF!",
               "<18>{#p/papyrus}{#f/8}I'M SO PROUD OF YOU, HUMAN!",
               "<18>{#p/papyrus}{#f/4}... WAIT, WASN'T I SUPPOSED TO CAPTURE YOU?",
               "<18>{#p/papyrus}{#f/0}OH WELL.\nIT'S NOT IMPORTANT RIGHT NOW.",
               "<18>{#p/papyrus}{#f/0}I JUST WANT YOU TO BE THE BEST PERSON YOU CAN BE.",
               "<18>{#p/papyrus}{#f/5}LET'S LET BYBONES BE BYBONES, HUH?",
               "<18>{#p/papyrus}{#f/9}I'LL EVEN GIVE YOU DIRECTIONS TO THE EXIT!"
            ]
            : [
               "<18>{#p/papyrus}{#f/5}扭呜呼呼...",
               ...(b
                  ? ["<18>我没有足够的力量\n阻止你..."]
                  : ["<18>连像你这样\n弱小的人\n我都阻止不了..."]),
               "<18>{#f/7}UNDYNE一定会\n对我非常失望的！",
               "<18>{#f/5}我也永远不能\n加入皇家守卫了...\n并且...",
               "<18>{#f/7}我的粉丝数也会\n就这样停滞不前！",
               "<32>{#p/human}* （你该怎么回答？）{!}\nµµµµµµµ我们做µµµµµµµµµµ真是个\nµµµµµµµ朋友吧µµµµµµµµµµ失败者{#c/0/7/7}"
            ],
      papyrusFinal4a1: (b: boolean) =>
         b
            ? [
               "<18>{#p/papyrus}{#f/5}真-真的吗？\n你想跟我做朋友？",
               "<18>{#f/6}即使发生了\n那样的事情？？？",
               "<18>{#f/0}那，好吧！！\n我们做朋友吧！！"
            ]
            : [
               "<18>{#p/papyrus}{#f/1}真的吗！？\n你想跟我做朋友？？？",
               "<18>{#f/6}那...\n我觉得...",
               "<18>{#f/0}我可以给你\n一个照应了！"
            ],
      papyrusFinal4a2: (b: boolean) =>
         b
            ? [
               "<18>{#p/papyrus}{#f/5}嗯？你是...\n想责备我吗？？？",
               "<18>{#f/6}你觉得我还不能\n强大到可以成为\n你的朋友吗？",
               "<18>{#f/5}...才-才不是...",
               "<18>{#f/7}啊，我在说什么啊！！\n我当然很强大！",
               "<18>{#f/9}总之... 我会\n通过跟你交朋友\n证明给你看！"
            ]
            : [
               "<18>{#p/papyrus}{#f/1}HUH? WHY WOULD YOU BERATE YOURSELF SO LOUDLY???",
               "<18>{#f/4}IS IT BECAUSE...",
               "<18>{#f/7}YOU DON'T THINK YOU'RE GOOD ENOUGH TO BE MY FRIEND?",
               "<18>{#f/9}NO, YOU'RE GREAT!\nI'LL BE YOUR FRIEND!!!"
            ],
      papyrusFinal4b1: [
         "<18>{#f/0}好耶！！",
         "<18>我找到了\n一个新朋友！！！",
         "<18>{#f/4}AND WHO KNEW THAT ALL I NEEDED TO DO IT..."
      ],
      papyrusFinal4b2: [
         "<18>{#f/0}好耶！！",
         "<18>{#f/0}我们还没有进行\n我们的第一次\n约会...",
         "<18>{#f/0}就已经成为\n好朋友了！！！",
         "<18>{#f/4}谁知道成为好朋友..."
      ],
      papyrusFinal4c1: [
         "<18>{#f/0}就是要给别人出\n烂透了的谜题\n再跟他们打架呢？",
         "<18>你教会了我很多，\n人类。",
         "<18>{#f/9}我特此\n允许你通过！",
         "<18>{#f/0}我会引导你\n离开这里。"
      ],
      papyrusFinal4c2: [
         "<18>继续前进，\n直到你到达首塔。",
         "<18>然后，\n跳进一艘飞船，\n穿过{@fill=#ff0}力场{@fill=#fff}。",
         "<18>{#f/4}那就是把我们\n困在前哨站的\n东西。",
         "<18>任何人都可以\n从力场进来，\n但谁都出不去...",
         "<18>{#f/9}...除非拥有一个\n强大的灵魂。",
         "<18>{#f/0}就比如你！！！"
      ],
      papyrusFinal4d: [
         "<18>{#f/4}哦，我差点\n忘记说了。",
         "<18>你要到达出口，\n就必须要通过...",
         "<18>{#f/7}{@fill=#ff0}国王{@fill=#fff}那关。",
         "<18>{@fill=#ff0}所有怪物的王...",
         "<18>{@fill=#ff0}他是...",
         "<18>{@fill=#ff0}{#f/6}...呃..."
      ],
      papyrusFinal4e: [
         "<18>{#f/0}他是个毛茸茸的\n好好先生！！！",
         "<18>大家都很喜欢他。",
         "<18>{#f/4}我很相信，\n只要你跟他说...",
         "<18>“不好意思，\nDREEMURR先生...\n我可以回家吗？”",
         "<18>{#f/0}他就会亲自带你\n去发射舱的！",
         "<18>{#f/9}总之！！！\n闲话少叙！！！",
         "<18>{#f/0}我会在家里\n当一个酷酷的朋友。"
      ],
      papyrusFinal4f1: ["<18>{#f/9}欢迎过来\n跟我一起玩！！！"],
      papyrusFinal4f2: ["<18>{#f/9}欢迎过来\n跟我约会！！！"],
      papyrusFinal4f3: ["<18>{#f/9}欢迎过来\n跟我打个招呼！！！"],
      papyrusFinal4g: ["<18>捏嘿嘿嘿\n嘿嘿嘿！！！"],
      papyrusFinal5: [
         "<18>{#p/papyrus}{#f/5}哦，那个人类\n到哪里去了呢...",
         "<18>{#f/4}...\n等等。",
         "<18>{#f/1}就在我面前！！！",
         "<18>{#f/0}你好啊！\n我还在担心你\n是不是迷路了呢！",
         "<18>看到你了，我就\n可以松口气了...",
         "<18>{#f/7}...\n等一下！！！",
         "<18>你不应该逃走的！！！",
         "<18>快回来！！！"
      ],
      papyrusFinal6: [
         "<18>{#p/papyrus}{#f/4}又回来了，嗯？",
         "<18>{#f/5}我觉得应该是\n我的问题...",
         "<18>我之前答应过你，\n我会给你做意面。",
         "<18>你想见我的原因\n不言自明...",
         "<18>就是让我给你\n做一点吃。",
         "<18>{#f/0}好... 我懂了。",
         "<18>{#f/0}PAPYRUS也很饥渴！",
         "<18>{#f/7}对正义的\n如饥似渴！"
      ],
      papyrusFinal7: [
         "<18>{#p/papyrus}{#f/1}你又回来了！？！？",
         "<18>{#f/4}我终于知道\n为什么了。",
         "<18>{#f/5}你...",
         "<18>你就是太想\n看到我的脸了...",
         "<18>{#f/6}我...",
         "<18>{#f/31}我觉得我不能和\n这样觉得的人\n战斗。",
         "<18>{#f/4}更不用说，\n我已经有点不想\n抓捕你了。",
         "<18>{#f/5}我们要不要就\n不战斗了...",
         "<18>{#f/5}...我直接\n放你走呢？",
         choicer.create("* （你要怎么回答？）", "是", "否")
      ],
      papyrusFinal7a: ["<18>{#p/papyrus}{#f/31}...\n好...", "<18>{#f/3}我想，我会接受\n我的失败的。"],
      papyrusFinal7b: ["<18>{#p/papyrus}{#f/4}嗯，既然你都\n这样说了，那...", "<18>{#f/9}我就\n奉陪到底！！！"],
      papyrusFinal8: [
         "<18>{#p/papyrus}{#f/1}还来？？？",
         "<18>{#f/4}...那，好吧...",
         "<18>{#f/9}你这次要\n放弃战斗吗？？",
         choicer.create("* （你要怎么回答？）", "是", "否")
      ],
      papyrusFinal8a: ["<18>{#p/papyrus}{#f/0}那么，\n咱们开始吧！"],
      puzzle3: () => [
         "<32>{#p/human}* （你看了下终端。）",
         "<32>{#p/basic}* 屏幕上显示着一条历史修改记录。",
         world.edgy
            ? "<32>* “最新图案修改者：ALPHYS”"
            : "<32>* “最新图案修改者：COOLSKELETON95”",
         ...(!world.goatbro || SAVE.flag.n.genocide_milestone < 5 || SAVE.flag.n.ga_asrielAlphysCom1++ > 0
            ? []
            : ["<25>{#p/asriel2}{#f/13}* 她真是没完没了地为难我们..."]),
         "<32>{#p/basic}* “要查看图案吗？”",
         choicer.create("* （查看图案吗？）", "是", "否")
      ],
      robotx: () =>
         SAVE.data.b.svr
            ? ["<32>{#p/human}* (The robot appears to be asleep.)"]
            : ["<32>{#p/basic}* It's in sleep mode."],
      robot1: pager.create(
         0,
         [
            "<32>{#p/basic}* 你好，心地善良的旅行者。\n* 我是一个建筑机器人。",
            "<32>* 我想去看看整个星系...\n* 但是我动弹不得。",
            "<32>* 如果你愿意帮助我的话...",
            "<32>* 就带上我的一块芯片吧，\n  带它去一个很远很远的地方。",
            choicer.create("* （拿走一块芯片？）", "是", "否")
         ],
         [
            "<32>{#p/basic}* 心地善良的旅行者，\n  如果你愿意帮助我的话...",
            "<32>* 就带上我的一块芯片吧，\n  带它去一个很远很远的地方。",
            choicer.create("* （拿走一块芯片？）", "是", "否")
         ]
      ),
      robot2: () => [
         "<32>{#p/basic}* 谢谢你... 祝你好运！",
         "<32>{#s/equip}{#p/human}* （你拿走了一块芯片。）",
         ...(world.goatbro && SAVE.flag.n.ga_asriel98++ < 1
            ? [
               "<25>{#p/asriel2}{#f/9}* 嘿，真是个\n  可爱又天真的小东西。",
               "<25>{#p/asriel2}{#f/13}* 天真到对自己的命运\n  一无所知。"
            ]
            : [])
      ],
      robot3: ["<32>{#p/basic}* 看起来你还没有给我预留足够的空间。"],
      robot4: () => [
         "<32>{#p/basic}* I see.\n* Good journey, then.",
         ...(world.goatbro && SAVE.flag.n.ga_asriel98++ < 1
            ? [
               "<25>{#p/asriel2}{#f/9}* 嘿，真是个\n  可爱又天真的小东西。",
               "<25>{#p/asriel2}{#f/13}* 天真到对自己的命运\n  一无所知。"
            ]
            : [])
      ],
      robot5: () => [
         "<32>{#p/basic}* Thank you for taking care of me.",
         ...(world.goatbro && SAVE.flag.n.ga_asriel99++ < 1
            ? ["<25>{#p/asriel2}{#f/4}* 行了，这些芯片应该够用了。"]
            : [])
      ],
      robot6: [
         "<32>{#p/basic}* How am I doing?\n* By \"I\" I mean the chip I gave you...",
         "<32>* Huh? You lost it...?\n* ... I suppose I can give you another one...",
         choicer.create("* （再拿走一块芯片？）", "是", "否")
      ],
      robot7: [
         "<32>{#p/basic}* Please be careful this time.",
         "<32>{#p/human}{#s/equip}* （你拿走了一块芯片。）"
      ],
      robot8: ["<32>{#p/basic}* I understand.\n* Safe journey, then..."],
      robot9: () => [
         "<32>{#p/basic}* Thank you for... taking care of me...",
         ...(world.goatbro && SAVE.flag.n.ga_asriel99++ < 1
            ? ["<25>{#p/asriel2}{#f/4}* 行了，这些芯片应该够用了。"]
            : [])
      ],
      robot10: [
         "<32>{#p/basic}* How am I doing?",
         "<32>* Huh? Again...?",
         "<32>* I'm sorry... if I give you any more, there will be nothing left of me.",
         "<32>* I suppose it is true.\n* Traveling beyond our limits is but a fantasy.",
         "<32>* It's no different for anyone else.",
         "<32>* All of monsterkind are doomed to live out here forever..."
      ],
      robot11: ["<32>{#p/basic}* Why did I give myself away so easily?"],
      robot12: ["<32>{#p/basic}* Begone!"],
      sans1: [
         "<99>{#p/darksans}{#i/4}* {@spacing=4/0}{#i/x2}人类。",
         "<99>* {@spacing=4/0}难道你不知道{@spacing=}\n  {@spacing=4/0}怎么和新朋友{@spacing=}\n  {@spacing=4/0}打招呼吗？",
         "<99>* {@spacing=4/0}转过身来{@spacing=}\n  {@spacing=4/0}和我握手。"
      ],
      sans2: () => [
         ...(world.edgy
            ? [
               "<25>{#p/sans}{#f/0}* 嘿，干嘛露出这种表情？",
               "<25>{#p/sans}{#f/2}* ...不喜欢放屁垫的把戏吗？",
               "<25>{#f/0}* ...没关系，人各有志嘛。"
            ]
            : ["<25>{#p/sans}{#f/4}* 嘿嘿... 没有什么能比\n  一个放屁垫把戏更好的了。"]),
         "<25>{#f/0}* 总之，你是个人类，对吧？",
         "<25>{#f/5}* 真酷。",
         "<25>{#f/0}* 我是sans。\n* 骷髅sans。",
         "<25>{#f/3}* 作为一名皇家哨兵，\n  现在我本该去抓捕人类的。",
         "<25>{#f/4}* 不过呢...",
         ...(world.edgy
            ? [
               "<25>{#f/3}* 今天，我没心思干这事。",
               "<25>{#f/0}* 不过，我的兄弟...",
               "<25>{#f/5}* 他想抓个人类都快想疯了。",
               "<25>{#f/0}* 所以，为了让他\n  能安心在家待着...\n  我整整费了三辈子工夫。"
            ]
            : [
               "<25>{#f/2}* 我有更好的事情要去忙。",
               "<25>{#f/0}* 不过，我的兄弟...",
               "<25>{#f/5}* 尽管他不是个真正的哨兵，\n  但他确实表现得像个哨兵。",
               "<25>{#f/0}* 实际上，我觉得\n  那边那个就是他了。"
            ]),
         "<25>* 我有个主意。\n* 跳过那个空隙。",
         "<26>{#f/4}* 别怕，直接跳过去就行。\n* 我兄弟把重力设得很小，\n  肯定掉不下去。"
      ],
      sans3: () =>
         world.edgy
            ? [
               "<25>{#p/sans}* 到了。",
               "<25>{#f/3}* 不过... \n  现在我没啥想给你看的。",
               "<25>{#f/2}* 我先在这待一会。",
               "<25>{#f/0}* 等你再往前走走，\n  说不定我就有灵感了。"
            ]
            : ["<25>{#p/sans}* 快，到重力转换器\n  那里去。"],
      sans4: ["<25>{#p/sans}* 咋的了，哥们？"],
      sans5: [
         "<18>{#p/papyrus}{#x2}{#f/7}你说“咋的了”呢，\n兄弟！",
         "<18>你还有谜题要解决！",
         "<18>我明明给了你\n很多余地，但...",
         "<18>你还是整天无所事事！",
         "<18>即使是现在，你还是在！",
         "<18>无所事事！",
         "<25>{#p/sans}* 实际上，我在摆弄这个\n  重力的玩意呢。",
         "<25>* 这个东西真的很酷的。",
         "<25>{#f/4}* 你要来看看吗？",
         "<18>{#p/papyrus}{#x3}{#f/7}不！！\n我才没时间看呢！！",
         "<18>{#x2}要是有人类从这经过，\n我得做好准备！",
         "<18>我必须会！\n我一定会！",
         "<18>{#x1}{#f/9}最终抓到一个人类！",
         "<18>{#x4}{#f/0}那时候，我，\n伟大的PAPYRUS...",
         "<18>会得到我应得的一切！",
         "<18>尊重...\n认可...",
         "<18>{#f/9}我就终于可以加入\n皇家守卫了！",
         "<25>{#p/sans}* 嗯...",
         "<25>{#f/2}* 没准这个玩意可以\n  帮到你呢。",
         "<18>{#p/papyrus}{#x3}{#f/7}SANS，那根本没用！\n你这个懒骨头！",
         "<18>{#x1}{#f/5}你明明知道，\n你能做的远不止这些，\n但是...",
         "<18>{#x2}{#f/7}你还是选择\n整天无所事事！",
         "<18>{#x1}{#f/5}难道你不想... \n从生活中得到更多吗？",
         "<25>{#p/sans}* 嘿，放轻松点。\n* 我的心里可装着\n  一大堆事务呢。",
         "<25>{#f/4}* 你甚至可以说我...",
         "<25>{#f/2}* 早已{@fill=#ff0}星{@fill=#fff}怀远志了？"
      ],
      sans6: [
         "<18>{#p/papyrus}{#x3}{#f/7}SANS！！",
         "<25>{#p/sans}{#f/5}* 拜托。\n* 你明明就在笑。",
         "<18>{#p/papyrus}{#x2}{#f/7}我确实笑了！\n极其鄙视的那种！",
         "<18>{#x1}{#f/4}（叹气...）",
         "<18>{#f/5}为什么像我这样\n伟大的人...",
         "<18>为了得到认可\n需要做这么多破事？？",
         "<25>{#p/sans}* 嘿，别伤心嘛...",
         "<25>* 遇到困难，\n  负{@fill=#ff0}重力{@fill=#fff}争才能致远嘛。"
      ],
      sans7: [
         "<18>{#p/papyrus}{#x2}{#f/7}呃！！",
         "<18>{#x1}{#f/4}我去专心解我的谜题了...",
         "<18>{#f/7}至于你的工作？",
         "<18>{#f/4}我希望你\n从现在起...",
         "<18>{#f/9}专注于你的\n{@fill=#ff0}“星”{@fill=#fff}工作上！！！",
         "<18>{#f/0}捏嘿嘿嘿嘿嘿\n嘿嘿嘿嘿嘿嘿！！"
      ],
      sans8: ["<18>{#p/papyrus}嘿！"],
      sans9: ["<25>{#p/sans}* 好了，是时候把你\n  弄下来了。"],
      sans10: [
         "<25>{#p/sans}{#f/0}* 事实上，嘿...\n  在你继续往外走之前...",
         "<25>{#f/3}* 你得知道，\n  皇家守卫正在找你呢。",
         "<25>{#f/0}* 不过你别担心。\n* 他们拿得出手的只有狗狗。",
         "<25>{#f/0}* 你既然是人类，\n  那肯定知道狗狗\n  喜欢什么，对吧？",
         "<25>{#f/2}* 它们和papyrus差不多，\n  人畜无害。"
      ],
      sansbook0: ["<32>{#p/human}* (It appears this joke book has no clear ending.)"],
      sansbook1: ["<32>{#p/basic}* 这是本关于非欧几里德几何的书。\n* 写着“ALPHYS”的名字。"],
      sansbook2: [choicer.create("* （要看看里面吗？）", "是", "否")],
      sansbook3: ["<32>{#p/human}* （你往书里面看...）"],
      sansbook4: ["<32>{#p/basic}* 几何学书里面夹着一本\n  笑话书。"],
      sansbook5: ["<32>{#p/basic}* 笑话书里面夹着\n  另一本几何学书。"],
      sansbook6: ["<32>{#p/basic}* 几何学书里面夹着\n  另一本笑话书。"],
      sansbook7: ["<32>{#p/basic}* 是另一本几何学书。"],
      sansbook8: ["<32>{#p/basic}* 是另一本笑话书。"],
      sansbook9: ["<32>{#p/human}* （你决定不再看了。）"],
      sansbook10: () => [
         "<32>{#p/basic}* 这是Sans留的字条。",
         "<32>{#p/without}* “这么认真干什么？”\n* “这就只是个烂笑话。”",
         "<33>{#p/without}* “呵...”",
         "<33>{#p/without}* “别看得太入迷了。”",
         ...(SAVE.data.b.oops ? [] : ["<32>{#p/basic}* ...这是我经历过的\n  最烂的笑话。"])
      ],
      sansinter: {
         s_sans: pager.create(
            0,
            () =>
               world.edgy
                  ? ["<25>{#p/sans}* 咋了？"]
                  : [
                     "<25>{#p/sans}* 你知道的，\n  papyrus很快就会回来。",
                     "<25>{#f/4}* 我要是你，\n  我就先走了...",
                     "<25>{#f/2}* 否则，你就得继续听\n  我讲的搞笑笑话了。"
                  ],
            () =>
               world.edgy
                  ? [
                     "<25>{#p/sans}{#f/3}* 真是太遗憾了...",
                     "<25>{#p/sans}{#f/2}* 这会儿，我兄弟正忙着做\n  我布置的数独习题集呢。",
                     "<25>{#p/sans}* 要是他在这，\n  就有一篓子事情等着咱们了。"
                  ]
                  : [
                     "<25>{#p/sans}* 你瞧，\n  没什么好害怕的。",
                     "<25>{#f/2}* papyrus看起来吓人，\n  但他会是你见过的\n  最好的家伙的。"
                  ],
            () =>
               world.edgy
                  ? [
                     "<25>{#p/sans}* 咋的？\n* 想让我把他带过来？",
                     "<25>{#f/3}* 呵，小子。\n* 你是不是没明白\n  我刚说的是啥意思？",
                     "<25>{#p/sans}{#f/2}* 听我句劝：\n  最好别得寸进尺，\n  对你我都好。"
                  ]
                  : ["<25>{#p/sans}* 信我的。"],
            () =>
               world.edgy
                  ? [
                     "<25>{#p/sans}{#f/3}* ...",
                     "<25>{*}{#p/darksans}{#f/1}{#i/5}{#s.stop}* 别给脸不要脸。",
                     "{*}{#s.resume}{%}"
                  ]
                  : ["<25>{#p/sans}* 信我的。"],
            () => (world.edgy ? [] : ["<25>{#p/sans}* 信我的。"])
         ),
         s_papyrus: pager.create(
            0,
            [
               "<25>{#p/sans}* 嘿，有件重要的东西\n  你得记住。",
               "<25>* 我兄弟有一种很\n  {@fill=#00a2e8}特殊的攻击{@fill=#fff}。",
               "<25>* 如果看到了{@fill=#ff993d}橙色攻击{@fill=#fff}，\n  你如果不动，就会受伤。",
               "<25>{#f/3}* 有种简单的方式\n  可以帮助你记住。",
               "<25>{#f/0}* 想象一下烧红的煤炭。\n* 你肯定不会站在\n  那种东西上吧？",
               "<25>* 煤炭质地比较坚硬。\n* 所以不妨换成骨质煤炭来想。",
               "<25>{#f/2}* 非常简单，对吧？\n* 记得战斗的时候想想\n  发热的骨质煤炭吧。"
            ],
            [
               "<25>{#p/sans}{#f/0}* 当然，你如果缓慢移动\n  是不会受伤的。",
               "<25>{#f/0}* 只要保持移动就可以。",
               "<25>{#f/2}* 会有人比我解释得\n  更好的。"
            ],
            ["<25>{#p/sans}{#f/2}* 记住...\n* 发热的骨质煤炭。"]
         ),
         s_dogs: pager.create(
            0,
            [
               "<25>{#p/sans}* 鉴于你是人类，\n  你应该从来没有听说过\n  T.M.D.这个东西吧。",
               "<25>{#f/2}* 那是“突变·脉冲·对流层”\n  技术的缩写。"
            ],
            [
               "<25>{#p/sans}* 如果T.M.D.出现问题，\n  我们周围的空气\n  就会消失不见。",
               "<25>{#f/3}* 不过别担心。\n* 我刚才说的那些，\n  从来就不曾{@fill=#ff0}粗{@fill=#fff}现过。"
            ],
            ["<25>{#p/sans}{#f/2}* 如果真出现了的话，\n  那就得好好{@fill=#ff0}审查{@fill=#fff}一下\n  问题出在哪里了。"]
         ),
         s_jenga: pager.create(
            0,
            [
               "<25>{#p/sans}* 实际上，\n  早些时候的那份意面...",
               "<25>{#f/3}* 对我兄弟来说\n  还算好的。",
               "<25>{#f/0}* 自从他开始上烹饪课，\n  他已经进步很多了。",
               "<25>{#f/4}* 我敢说如果他坚持下去，\n  他甚至会惊艳到国王。"
            ],
            ["<25>{#p/sans}{#f/2}* ...那个对意面\n  异常痴迷的男人。"]
         ),
         s_bridge: pager.create(
            0,
            () =>
               world.edgy
                  ? [
                     "<25>{#p/sans}{#f/0}* 希望你喜欢\n  我最后布置的谜题。",
                     "<25>{#f/3}* 时间比较紧，\n  但papyrus坚持让我出好谜题，\n  我还是照做了。"
                  ]
                  : world.killed5
                     ? [
                        "<25>{#p/sans}{#f/3}* i hear the area's being evacuated right now...",
                        "<25>{#f/0}* if i were you, i'd be afraid for my life."
                     ]
                     : [
                        "<25>{#p/sans}{#f/3}* 我不知道现在我兄弟\n  要干什么去了。",
                        "<25>{#f/0}* 如果我是你，\n  我会确保自己理解\n  {@fill=#ff993d}橙色攻击{@fill=#fff}。"
                     ],
            () =>
               world.edgy
                  ? [
                     "<25>{#p/sans}{#f/0}* 怎么？\n* 怪我不好好设计谜题？",
                     "<25>{#f/3}* 我还得一边应付你，\n  一边花时间准备谜题。\n* 能弄好就怪了。"
                  ]
                  : world.killed5
                     ? [
                        "<25>{#p/sans}{#f/0}* thankfully, i have someone who cares about my well-being.",
                        "<25>{#f/2}* no matter what happens, i know he'll be there for me."
                     ]
                     : ["<25>{#p/sans}{#f/2}* 哦，也许还得加上{@fill=#00a2e8}蓝色{@fill=#fff}攻击。"],
            () =>
               world.edgy
                  ? ["<25>{#p/sans}{#f/3}* 就是这样。"]
                  : world.killed5
                     ? ["<25>{#p/sans}{#f/0}* 是我错了？"]
                     : ["<26>{#p/sans}{#f/0}* 各种攻击也是。"]
         )
      },
      sansbredgey: () =>
         world.edgy
            ? 6 <= world.population
               ? [
                  "<25>{#p/sans}* 对了...",
                  "<25>* i know i've been harsh on you lately...",
                  "<25>{#f/3}* but thanks for trying to be a better person.",
                  "<25>{#f/2}* keep it up, ok?"
               ]
               : world.bullied
                  ? [
                     "<25>{#p/sans}* 对了...",
                     "<25>* i know you're still going around hurting people...",
                     "<25>{#f/3}* but i appreciate the effort not to outright to kill them.",
                     "<25>{#f/2}* it's something, right?"
                  ]
                  : [
                     "<25>{#p/sans}* 对了...",
                     "<25>* 你要是不小心\n  遇到了我的兄弟...",
                     "<25>{#f/3}* ...",
                     "<25>{*}{#p/darksans}{#f/1}{#i/5}{#s.stop}* 敢动他一下试试。",
                     "{*}{#s.resume}{%}"
                  ]
            : 6 <= world.population
               ? [
                  "<25>{#p/sans}* 对了...",
                  "<25>* 我知道我兄弟\n  有时候蠢蠢的...",
                  "<25>{#f/3}* 但是谢谢你配合\n  他疯狂的计划。",
                  "<25>{#f/2}* 你是个冠军。"
               ]
               : world.bullied
                  ? [
                     "<25>{#p/sans}* 对了...",
                     "<25>* i know you've been going around hurting people...",
                     "<25>{#f/3}* but i appreciate the effort not to outright to kill them.",
                     "<25>{#f/2}* it's something, right?"
                  ]
                  : [
                     "<25>{#p/sans}* 对了...",
                     "<25>* 你要是不小心\n  遇到了我的兄弟...",
                     "<25>{#f/3}* ...",
                     "<25>{*}{#p/darksans}{#f/1}{#i/5}{#s.stop}* 敢动他一下试试。",
                     "{*}{#s.resume}{%}"
                  ],
      sentryPapyrus1: pager.create(
         0,
         () =>
            SAVE.data.b.svr
               ? ["<32>{#p/human}* (The narration on this sentry station predicts the future fame of its creator.)"]
               : [
                  "<32>{#p/basic}* 纸壳箱上写着几句话。",
                  ...(world.genocide || world.runaway
                     ? [
                        "<23>{#p/papyrus}{#f/30}“求你不要毁掉我的哨站。”",
                        "<23>“我费了好大功夫才搭好它，\n要是它垮了，我会很伤心的。”",
                        "<23>“...以上。”",
                        "<23>（“注：我还想再写点，\n但是没地方了。”）"
                     ]
                     : [
                        "<23>{#p/papyrus}{#f/30}“你仔细打量眼前这个\n精心制作的哨站，心想...”",
                        "<23>“是哪位能工巧匠，\n才能做出这样的哨站呢？”",
                        "<23>“我敢说，肯定是出自那个\n超-有名的皇家守卫之手！”",
                        SAVE.data.n.plot === 72
                           ? "<32>{#p/basic}* The last line was crossed out."
                           : "<23>（“注：现在还只是\n超-有名皇家守卫的预备队员。”）",
                        ...(SAVE.data.n.plot < 19 && !world.edgy
                           ? [
                              "<25>{#p/sans}{#f/0}* 在欣赏我兄弟的手工成果，\n  是吗？",
                              "<25>{#p/sans}{#f/2}* 我知道的。\n* 真的很酷。"
                           ]
                           : [])
                     ])
               ],
         () =>
            SAVE.data.b.svr
               ? ["<32>{#p/human}* (The narration on this sentry station predicts the future fame of its creator.)"]
               : [
                  "<32>{#p/basic}* 纸壳箱上写着几句话。",
                  ...(world.genocide || world.runaway
                     ? [
                        "<23>{#p/papyrus}{#f/30}“求你不要毁掉我的哨站。”",
                        "<23>“我费了好大功夫才搭好它，\n要是它垮了，我会很伤心的。”",
                        "<23>“...以上。”",
                        "<23>（“注：我还想再写点，\n但是没地方了。”）"
                     ]
                     : [
                        "<23>{#p/papyrus}{#f/30}“你仔细打量眼前这个\n精心制作的哨站，心想...”",
                        "<23>“是哪位能工巧匠，\n才能做出这样的哨站呢？”",
                        "<23>“我敢说，肯定是出自那个\n超-有名的皇家守卫之手！”",
                        SAVE.data.n.plot === 72
                           ? "<32>{#p/basic}* The last line was crossed out.\n* That checks out."
                           : "<23>（“注：现在还只是\n超-有名皇家守卫的预备队员。”）"
                     ])
               ]
      ),
      sentryPapyrus2: pager.create(0, () => [
         "<32>{#p/human}* （你往桌板下面看了一眼...）",
         ...(SAVE.data.b.svr
            ? [
               [
                  "<25>{#p/asriel1}{#f/17}* That's where Papyrus keeps all his wacky whatsits.",
                  "<25>{#f/20}* A fighter by night, and a tinkerer by... also night."
               ],
               [
                  "<26>{#p/asriel1}{#f/13}* In one timeline, I encouraged Papyrus to\n  be a Royal Lab employee.",
                  "<25>{#f/17}* He kind of ended up doing his own thing...",
                  "<25>{#f/17}* ... working on personal science projects rather than official work.",
                  "<25>{#f/13}* Papyrus isn't someone who easily conforms to standard systems."
               ],
               [
                  "<26>{#p/asriel1}{#f/13}* One device Papyrus created was the legendary \"shickaxe.\"",
                  "<25>{#f/17}* A multi-tool that could efficiently break any material.",
                  "<25>{#f/15}* Its durability was... infinite, actually.",
                  "<25>{#f/13}* He only threw it away because, in his own words...",
                  "<25>{#f/13}* \"Having a tool that can do everything takes the fun out of it!\""
               ],
               ["<26>{#p/asriel1}{#f/20}* Papyrus certainly has a unique way of thinking."]
            ][Math.min(asrielinter.sentryPapyrus2++, 3)]
            : ["<32>* 里面堆满了一箱又一箱未使用过的\n  电缆和过时玩意。"])
      ]),
      sentrySans1: () =>
         SAVE.data.b.svr
            ? ["<32>{#p/human}* (This sentry station strikes you as rather unimportant.)"]
            : world.darker
               ? ["<32>{#p/basic}* 这是个哨站。"]
               : SAVE.data.n.plot < 31
                  ? [
                     "<32>{#p/basic}* Sans的哨站...",
                     "<32>* 这绝对是皇家守卫\n  最值得的投资。"
                  ]
                  : SAVE.data.n.plot === 72
                     ? ["<32>{#p/basic}* Sans的哨站...", "<32>* The quality of this investment hasn't changed a bit."]
                     : ["<32>{#p/basic}* Sans的哨站...", "<33>* A poor investment in hindsight."],
      sentrySans2: pager.create(
         0,
         () => [
            "<32>{#p/human}* （你往桌板下面看了一眼...）",
            ...(SAVE.data.b.svr
               ? [
                  [
                     "<25>{#p/asriel1}{#f/15}* As a star, there were some dark corners even I never dared search.",
                     "<25>{#f/20}* It's probably for the best if we leave this be."
                  ],
                  ["<25>{#p/asriel1}{#f/20}* Please.\n* Anywhere but here."]
               ][Math.min(asrielinter.sentrySans2++, 1)]
               : world.edgy
                  ? ["<32>{#p/basic}* It's mostly empty, save for the singular red crayon."]
                  : ["<32>{#p/basic}* There are bottles of honey, alfredo, and yamok sauce stockpiled here."])
         ],
         () => [
            "<32>{#p/human}* （你往桌板下面看了一眼...）",
            SAVE.data.b.svr
               ? "<25>{#p/asriel1}{#f/20}* Please.\n* Anywhere but here."
               : world.edgy
                  ? "<32>{#p/basic}* It's an unsettling reminder."
                  : "<32>{#p/basic}* 里面存放着无穷无尽的食物佐料。"
         ]
      ),
      whew1: () =>
         [
            ["<32>{#p/basic}* 狗窝上覆盖着\n  烦人的白毛。"],
            ["<32>{#p/basic}* Fighting Papyrus has begun to tire you, but not enough to sleep."],
            [
               "<32>{#p/basic}* After fighting Papyrus three times, you feel exhausted.",
               choicer.create("* (What will you do?)", "Nothing", "Sleep")
            ],
            [
               "<32>{#p/basic}* Continually fighting Papyrus has exhausted you.",
               choicer.create("* (What will you do?)", "Nothing", "Sleep")
            ]
         ][Math.min(SAVE.data.n.state_papyrus_capture - 1, 3)],
      whew2: ["<32>{#p/human}* (You let the doggy bed be.)"],
      whew3: ["<32>{#p/human}* (You lay in the doggy bed...)"],
      whew4: [
         "<32>{#p/alphys}* And you say they're in here?",
         "<32>{#p/sans}{#f/7}* yup.\n* my brother made that pretty clear.",
         "<32>{#p/alphys}* O-okay...\n* Here goes nothing...",
         "<32>{#p/human}* (It sounds like a door is opening.)",
         "<32>{#p/alphys}* ...",
         "<32>{#p/alphys}* Well, there they are.",
         "<32>{#p/sans}{#f/7}* c'mon, let's make this quick.",
         "<32>{#p/sans}{#f/7}* i doubt it'll be long before undyne shows up.",
         "<32>{#p/alphys}* Going as f-fast as I can!"
      ],
      whew5: [
         "<32>{#p/human}* (It feels like someone is trying to carry you.)",
         "<32>{#p/alphys}* Oh god, w-were humans always this heavy!?"
      ],
      whew6: [
         "<32>{#p/basic}* Huh?\n* Where are...",
         "<32>* ...\n* Asgore's house.",
         "<32>* Come on, let's go find him..."
      ],
      trivia: {
         s_bbox: [
            "<32>{#p/basic}* A bastion box.\n* There's a human inside...",
            "<32>{#p/basic}* Seems this one was adopted by Napstablook."
         ],
         
         ogkxsaucer: () =>
            SAVE.data.b.svr
               ? ["<32>{#p/human}* (You reach your hand deep into the dispenser.)\n* (It's a tad saucy.)"]
               : ["<32>{#p/basic}* 某种型号的喷酱机。"],
         mousehole: () =>
            [
               ["<32>{#p/basic}* It's a mouse hole.\n* The mice inside are discussing your great battle."],
               ["<32>{#p/basic}* It's a mouse hole.\n* The mice inside are concerned for your safety."],
               ["<32>{#p/basic}* It's a mouse hole.\n* The mice inside are wondering if you should take a rest."],
               ["<32>{#p/basic}* It's a mouse hole.\n* The mice inside are concerned for your sanity."]
            ][Math.min(SAVE.data.n.state_papyrus_capture - 1, 3)],
         lamppost: () =>
            SAVE.data.b.svr
               ? ["<32>{#p/human}* (You observe the strange lamp bouncing up and down.)"]
               : ["<32>{#p/basic}* 一盏“弹”灯。"],
         ntower: () =>
            SAVE.data.b.svr
               ? [
                  [
                     "<25>{#p/asriel1}{#f/13}* I guess Alphys never did fix this thing.",
                     "<25>{#f/16}* I don't blame her.\n* That ruleset is kind of a nightmare.",
                     "<25>{#f/20}* Also, it kind of relies on Sans being there.",
                     "<25>{#f/15}* Getting him to participate is... kind of impossible."
                  ],
                  [
                     "<25>{#p/asriel1}{#f/17}* Yeah... Sans.\n* Great sense of humor, but not very active.",
                     "<25>{#f/13}* And by active, I mean physically.",
                     "<25>{#f/15}* And by physically, I mean he doesn't like to move.",
                     "<25>{#f/16}* And by move, I mean get up and walk around.",
                     "<25>{#f/13}* Yeah.\n* He usually just takes some kind of shortcut.",
                     "<25>{#f/15}* I still have no idea how those things work."
                  ],
                  [
                     "<25>{#p/asriel1}{#f/17}* Guess you could say Alphys's choice to not fix this puzzle...",
                     "<25>{#f/20}* Was a little shortcut of her own."
                  ],
                  ["<25>{#p/asriel1}{#f/20}* ... maybe my sense of humor could use some work."]
               ][Math.min(asrielinter.ntower++, 3)]
               : SAVE.data.b.s_state_puzzlenote || (!world.genocide && world.edgy)
                  ? ["<32>{#p/basic}* It's un-activated."]
                  : ["<32>{#p/basic}* 真是个不幸的结果。"],
         s_secret_sign: () =>
            SAVE.data.b.svr
               ? ["<32>{#p/human}* (The sign mentions an escape.)"]
               : SAVE.data.n.state_starton_trashprogress < 2 && SAVE.data.n.plot < 72
                  ? [
                     "<32>{#p/basic}* “它正在休息。”",
                     ...(world.goatbro && SAVE.flag.n.ga_asrielDog++ < 1 ? ["<25>{#p/asriel2}{#f/15}* What."] : [])
                  ]
                  : ["<32>{#p/basic}* \"It's escaped.\""],
         grillflower: () =>
            SAVE.data.b.svr
               ? ["<32>{#p/human}* (It appears this plant is very neon indeed.)"]
               : world.darker
                  ? ["<32>{#p/basic}* 一株植物。"]
                  : [
                     "<32>{#p/basic}* 这不仅仅是一株植物...\n* 这是一株霓虹植物。",
                     "<32>* 这有什么区别吗？\n* 没有，完全没有。"
                  ],
         librarbywindow1: () =>
            SAVE.data.b.svr
               ? ["<32>{#p/human}* (But there was nothing of real interest to see here.)"]
               : ["<32>{#p/basic}* 窗户里面有一株植物。\n* 真有趣。"],
         librarbywindow2: () =>
            SAVE.data.b.svr
               ? ["<32>{#p/human}* （你够到了窗户边缘，\n  并将双手搭在了窗户上。）"]
               : ["<32>{#p/human}* （你够到了窗户边缘，\n  并将双手搭在了窗户上。）\n* （但你看不见里面的任何东西。）"],
         papwindow: () =>
            SAVE.data.b.svr
               ? ["<32>{#p/human}* (You peer into the window, but you couldn't see anybody inside.)"]
               : SAVE.data.n.plot_date > 0 && SAVE.data.n.plot_date < 1 && SAVE.data.n.plot < 71.2
                  ? ["<32>{#p/basic}* ... seems Papyrus is waiting patiently for you."]
                  : ["<32>{#p/basic}* ...看来没人在家。"],
         s_puzzlenote: () =>
            SAVE.data.b.svr
               ? ["<32>{#p/human}* (The note describes the rules of a complex challenge.)"]
               : SAVE.data.b.s_state_puzzlenote
                  ? ["<33>{#p/basic}* It's illegible chicken-scratch."]
                  : [],
         s_backrooms_lessdog: () =>
            SAVE.data.b.svr
               ? [
                  "<32>{#p/human}* (You run your hands through the nonexistent dog's fur.)\n* (The dog seems to like it.)",
                  ...[
                     ["<25>{#p/asriel1}{#f/13}* Frisk, are you okay?"],
                     ["<25>{#p/asriel1}{#f/13}* Frisk.\n* There's nothing there."],
                     ["<25>{#p/asriel1}{#f/15}* ... okay?"],
                     ["<25>{#p/asriel1}{#f/15}* ..."]
                  ][Math.min(asrielinter.s_backrooms_lessdog++, 3)]
               ]
               : SAVE.data.n.state_starton_lesserdog === 2 || (world.population === 0 && !world.bullied)
                  ? ["<32>{#p/basic}* ...但是谁也没有来。"]
                  : world.runaway || world.population === 0
                     ? ["<32>{#p/basic}* ...但是人们都逃走了。"]
                     : SAVE.data.n.plot < 72
                        ? ["<32>{#p/basic}* 它正在跟自己玩一种\n  扑克牌游戏。", "<32>* 感觉它要输了..."]
                        : [
                           "<32>{#p/basic}* 它正在跟自己玩一种\n  扑克牌游戏。",
                           "<32>* It appears to be winning...\n* Somehow."
                        ],
         s_backrooms_lesstable: () =>
            SAVE.data.b.svr
               ? ["<32>{#p/human}* (You wonder if the Dog chow is edible for humans.)"]
               : ["<32>{#p/basic}* 桌上放了一副4-D扑克牌，\n  还有免费狗粮。"],
         s_beddinng_table: () =>
            SAVE.data.b.svr
               ? ["<32>{#p/human}* (You glance at the table.)\n* (You then glance away.)"]
               : ["<32>{#p/basic}* 必备之桌。\n* 虽无所用，却恰得其所。"],
         s_bh_bone: pager.create(
            0,
            () =>
               SAVE.data.b.svr
                  ? ["<32>{#p/human}* (You admire the artisanship in this minimalistic painting.)"]
                  : [
                     ...(dateready() && SAVE.data.n.state_starton_papyrus === 0
                        ? [
                           "<18>{#p/papyrus}一幅经典的绘画。",
                           "<18>它总能让我想起\n我人生中最\n重要的东西。"
                        ]
                        : []),
                     "<32>{#p/basic}* 这是一幅极简主义的\n  卡通骨头画。"
                  ],
            () =>
               SAVE.data.b.svr
                  ? ["<32>{#p/human}* (You admire the artisanship in this minimalistic painting.)"]
                  : ["<32>{#p/basic}* 这是一幅极简主义的\n  卡通骨头画。"]
         ),
         s_bh_cottonball: () =>
            SAVE.data.b.svr
               ? [
                  "<32>{#p/human}* (The content of the notes attached to this pile of socks does not surprise you at all.)"
               ]
               : [
                  "<32>{#p/basic}* 这是个脏脏的棉球，\n  上面附着好几张便条。",
                  "<23>{#p/papyrusnt}“SANS！”\n“把你的棉球捡起来！”",
                  "<32>{#p/without}* “好的。”",
                  "<23>{#p/papyrusnt}“别把它放回去！”\n“把它挪走！”",
                  "<32>{#p/without}* “好的。”",
                  "<23>{#p/papyrusnt}“你就挪了两微米！”\n“把它拿回你的房间！”",
                  "<32>{#p/without}* “好的。”",
                  "<23>{#p/papyrusnt}“不要再把它\n拿回来了！”",
                  "<32>{#p/without}* “好的。”",
                  "<23>{#p/papyrusnt}“它还在这！”",
                  "<32>{#p/without}* “你刚才不是说\n不要把它拿回来\n我的房间吗？”",
                  "<23>{#p/papyrusnt}“算了！”"
               ],
         s_paptrash: pager.create(
            0,
            ...[
               () => [
                  ...(dateready() && SAVE.data.n.state_starton_papyrus === 0
                     ? [
                        "<18>{#p/papyrus}{#f/9}我都不知道你还\n喜欢捡垃圾！",
                        "<18>{#f/0}ALPHYS博士会\n对你很感兴趣的。"
                     ]
                     : []),
                  world.darker ? "<32>{#p/basic}* 一个垃圾桶。" : "<32>{#p/basic}* 这是个“闪亮”垃圾桶。"
               ],
               pager.create(
                  1,
                  ...[
                     [
                        "<32>{#p/basic}* 之所以说这个垃圾桶“闪亮”，\n  是因为它的一边就写着\n  “闪亮”两个字。"
                     ],
                     ["<32>{#p/basic}* 一个“闪亮”星仔\n  对一个“闪亮”垃圾桶。\n* 你还能有什么想知道的。"],
                     ["<32>{#p/basic}* 小镇这一带中\n  最“闪亮”的垃圾桶。"],
                     ["<32>{#p/basic}* 这么说来，\n  也可以是别的某一带。"],
                     ["<32>{#p/basic}* 它到底有多“闪亮”？"],
                     ["<32>{#p/basic}* 非常？\n* 非常非常？\n* 比别的任何东西都“闪亮”？"],
                     ["<32>{#p/basic}* 我们还有选择的余地，\n  宝贝！"],
                     [
                        "<33>{#p/basic}* 但不管时间如何流逝...\n  这个垃圾桶给你的印象\n  仍然“闪亮”。"
                     ],
                     [
                        "<32>{#p/basic}* 实际上，我越想越觉得，\n  “闪亮”这个形容\n  太浮皮潦草了。"
                     ],
                     ["<32>{#p/basic}* 就比如，也许\n  用“参天”这个词来形容\n  就更适合一点。"],
                     ["<33>{#p/basic}* 实际上，还是算了吧。\n* 这个词还是给皇家实验室的\n  高层留着吧。"],
                     ["<32>{#p/basic}* 嗯...\n* 万一这个垃圾桶是黑洞伪装的呢！"],
                     ["<32>{#p/basic}* 一个黑洞垃圾桶...\n* 你会愿意冒这个险吗？"],
                     ["<32>{#p/basic}* 这问题问得有点怪了。"],
                     [
                        "<32>{#p/basic}* 我觉得你现在就可以说，\n  都是因为这个垃圾桶，\n  我思绪完全“升空”了。"
                     ],
                     ["<32>{#p/basic}* You might even say I'm feeling... rather otherworldly."],
                     ["<32>{#p/basic}* ...\n* 你当我最后一句没说。"],
                     ["<32>{#p/basic}* 实际上，你还是\n  把我说的最后九句全忘了吧。\n  算上这句。"],
                     ["<32>{#p/basic}* 说白了...\n* 这个垃圾桶只能用\n  一个形容词来形容。"],
                     ["<32>{#p/basic}* 你问是什么词？\n* 那，我就告诉你...\n  如果你真的想知道的话。"],
                     ["<32>{#p/basic}* 它不是一个参天的垃圾桶，\n  绝对不是。"],
                     ["<32>{#p/basic}* 从任何角度来看，\n  这也不像是黑洞样式的..."],
                     ["<32>{#p/basic}* 你还记得吗？\n* 你还记得我们是从哪里\n  开始的吗？"],
                     ["<32>{#p/basic}* 那是我对这个垃圾桶\n  说过的第一句话。"],
                     ["<32>{#p/basic}* ...\n* 我说过...\n* 你等一下..."],
                     ["<32>{#p/basic}* 这是个“闪亮”垃圾桶。"]
                  ].map(lines => () => world.darker ? ["<32>{#p/basic}* 一个垃圾桶。"] : lines)
               )
            ].map(
               p => () =>
                  SAVE.data.b.svr
                     ? ["<32>{#p/human}* (You can't make out what's in the trash...)"]
                     : CosmosUtils.provide(p)
            )
         ),
         s_bh_fridge: pager.create(
            0,
            () =>
               SAVE.data.b.svr
                  ? ["<32>{#p/human}* (The food in this fridge seems decent enough.)"]
                  : world.runaway
                     ? ["<32>{#p/basic}* It's been gutted."]
                     : SAVE.data.n.plot === 72
                        ? ["<32>{#p/basic}* Oops, all spaghetti."]
                        : [
                           ...(dateready() && SAVE.data.n.state_starton_papyrus === 0
                              ? [
                                 "<18>{#p/papyrus}{#f/9}啊哈！\n对我的食物博物馆\n感兴趣了吗？",
                                 "<18>{#f/0}请随意参观我的\n烹饪艺术展。"
                              ]
                              : []),
                           "<32>{#p/basic}* 冰箱的一半都堆满了\n标有“意大利面”的容器。",
                           "<32>* 另一半瓶子里只有\n  一瓶橙汁苏打水。"
                        ],
            () =>
               SAVE.data.b.svr
                  ? ["<32>{#p/human}* (The food in this fridge seems decent enough.)"]
                  : world.runaway
                     ? ["<32>{#p/basic}* It's been gutted."]
                     : SAVE.data.n.plot === 72
                        ? ["<32>{#p/basic}* Oops, all spaghetti."]
                        : [
                           ...(dateready() && SAVE.data.n.state_starton_papyrus === 0
                              ? ["<18>{#p/papyrus}不错的冰箱，\n是吧？"]
                              : []),
                           "<32>{#p/basic}* 瓶子上写着\n  “ALPHYS”的名字。"
                        ]
         ),
         s_bh_rocktable: pager.create(
            0,
            () =>
               SAVE.data.b.svr
                  ? ["<32>{#p/human}* (You doubt the stardust is actually edible.)"]
                  : [
                     ...(dateready() && SAVE.data.n.state_starton_papyrus === 0
                        ? [
                           "<18>{#p/papyrus}啊，没错，\n这是餐桌。",
                           "<18>{#f/5}我们之前养过\n一块月岩...",
                           "<18>{#f/7}但后来有一天，\n它彻底消失了！",
                           "<18>{#f/4}最开始，我觉得是\n那只爱管闲事的\n狗干的。",
                           "<18>{#f/7}但后来我发现，\n是SANS用它来测试\n他的...",
                           "<18>{#f/6}他的... 很有用的\n小玩意。\n哇...",
                           "<18>{#f/0}所以呢，\n给他就给他了吧。",
                           "<18>{#f/0}他真的在努力去\n做一件事。",
                           "<18>{#f/4}即使要我们付出\n那块宝贵的月岩的\n代价。",
                           "<18>{#f/0}是啊！！\n努力总比\n不努力强！！"
                        ]
                        : []),
                     "<32>{#p/basic}* 上面覆盖着\n  可食用的星尘。"
                  ],
            () =>
               SAVE.data.b.svr
                  ? ["<32>{#p/human}* (You doubt the stardust is actually edible.)"]
                  : ["<32>{#p/basic}* 上面覆盖着\n  可食用的星尘。"]
         ),
         s_bh_stove: pager.create(
            0,
            () =>
               SAVE.data.b.svr
                  ? [
                     [
                        "<25>{#p/asriel1}{#f/13}* Tell me, Frisk...",
                        "<25>{#f/13}* Have you ever heard the tragedy of the abandoned cheesecake?",
                        "<25>{#f/16}* Right here in this pie tin, a confection was created...",
                        "<25>{#f/3}* Something beyond what its baker forsaw."
                     ],
                     [
                        "<25>{#p/asriel1}{#f/3}* See, Sans had created a cheesecake so sweet...",
                        "<25>{#f/4}* Anyone who tried it would become addicted to it.",
                        "<25>{#f/15}* If he wanted, he could take every customer on the outpost."
                     ],
                     [
                        "<25>{#p/asriel1}{#f/13}* In the end, Sans knew he'd upstage his brother...",
                        "<25>{#f/15}* And that, by simply creating the cheescake, he'd gone too far.",
                        "<25>{#f/16}* So he stashed it away to avoid taking the responsibility."
                     ],
                     ["<25>{#p/asriel1}{#f/16}* Alas, the tragedy of the abandoned cheesecake."]
                  ][Math.min(asrielinter.s_bh_stove++, 3)]
                  : [
                     "<32>{#p/basic}* 烤箱里有一个\n  空的锡纸盘。",
                     ...(dateready() && SAVE.data.n.state_starton_papyrus === 0
                        ? [
                           "<18>{#p/papyrus}我兄弟经常\n去外面吃。",
                           "<18>{#f/4}但最近，他开始\n尝试去“烘焙”\n一些东西了...",
                           "<18>{#f/5}我猜那个是...\n芝士蛋糕？",
                           "<18>{#f/6}我不太能确定。"
                        ]
                        : [])
                  ],
            () =>
               SAVE.data.b.svr
                  ? [
                     [],
                     [
                        "<25>{#p/asriel1}{#f/13}* Basically, Sans had created a cheesecake so sweet...",
                        "<25>{#f/16}* Anyone who tried it would become addicted to it.",
                        "<25>{#f/3}* If he wanted, he could have the outpost all to himself.",
                        "<25>{#f/3}* The cheesecake, it would seem...",
                        "<25>{#f/4}* Was a pathway to success Papyrus could never approve of."
                     ],
                     [
                        "<25>{#p/asriel1}{#f/13}* In the end, Sans knew he'd upstage his brother...",
                        "<25>{#f/15}* And that, by simply creating the cheescake, he'd gone too far.",
                        "<25>{#f/16}* So he stashed it away to avoid taking the responsibility."
                     ],
                     ["<25>{#p/asriel1}{#f/16}* Alas, the tragedy of the abandoned cheesecake."]
                  ][Math.min(asrielinter.s_bh_stove++, 3)]
                  : ["<32>{#p/basic}* 烤箱里有一个\n  空的锡纸盘。"]
         ),
         s_chew: ["<32>{#p/basic}* 这是一个吱吱作响的咀嚼玩具，\n  标签上写着“特殊攻击”。"],
         s_crossroads_sign: () =>
            SAVE.data.b.svr
               ? ["<32>{#p/human}* (The sign espouses the many benefits of boxes.)"]
               : [
                  "<32>{#p/basic}* “这是一个箱子。”",
                  "<32>* “你可以把物品放进去或者拿出来。”",
                  "<32>* “同样的箱子之后还会出现，\n  不必担心要回来取东西。”",
                  "<32>* “谨上，一个箱子爱好者。”"
               ],
         s_doghouse: () =>
            SAVE.data.b.svr
               ? [
                  "<32>{#p/human}* (The interior wall of this doghouse appears to be covered in strange round circles.)"
               ]
               : SAVE.data.n.state_starton_greatdog === 2
                  ? ["<32>{#p/basic}* There must be a lot of empty space in this doghouse."]
                  : world.genocide || world.edgy || world.darker
                     ? ["<32>{#p/basic}* A tiny doghouse."]
                     : SAVE.data.n.plot === 72
                        ? ["<32>{#p/basic}* I wonder if this doghouse also travels in time."]
                        : ["<32>{#p/basic}* 多么小巧的狗屋啊！", "<32>{#p/basic}* 里面应该比外面看起来大。"],
         s_doghouse_sign: () =>
            SAVE.data.b.svr
               ? ["<32>{#p/human}* (You struggle to explain what's written on this sign.)"]
               : ["<32>{#p/basic}* \"Woof.\""],
         s_dogs_sign: () =>
            SAVE.data.b.svr
               ? ["<32>{#p/human}* (The sign rates the danger level of certain smells.)"]
               : [
                  "<32>{#p/basic}* “气味危险分级”",
                  "<32>* “硅胶的气味 - 机器人”\n* “白色等级。”\n* “也可以变成{@fill=#2f2f2f}黑色{@fill=#fff}等级。”",
                  "<32>* “不可疑的气味 - 小狗”\n* “{@fill=#003cff}蓝色{@fill=#fff}等级。”\n* “在地里打滚的气味。”",
                  world.runaway
                     ? "<32>* “古怪的气味 - 人类”\n* “{@fill=#00c000}绿色{@fill=#fff}等级。”\n* “一旦看到，立马逃跑！”"
                     : SAVE.data.n.plot === 72
                        ? "<32>* “古怪的气味 - 人类”\n* “{@fill=#00c000}绿色{@fill=#fff}等级。”\n* “不惧神明之力。”"
                        : SAVE.data.n.plot < 31
                           ? "<32>* “古怪的气味 - 人类”\n* “{@fill=#00c000}绿色{@fill=#fff}等级。”\n* “不惜一切代价消灭！”"
                           : "<32>* “古怪的气味 - 小狗？”\n* “{@fill=#00c000}绿色{@fill=#fff}等级。”\n* “深谙撸狗之道。”"
               ],
         s_dogstandA: () =>
            SAVE.data.b.svr
               ? ["<32>{#p/human}* (It would appear this sign belongs to a male dog.)"]
               : player.position.y > 50
                  ? ["<32>{#p/basic}* “他的。”"]
                  : ["<32>{#p/basic}* Inside is a magazine for fancy blue-and-grey furcuts."],
         s_dogstandB: () =>
            SAVE.data.b.svr
               ? ["<32>{#p/human}* (It would appear this sign belongs to a female dog.)"]
               : player.position.y > 50
                  ? ["<32>{#p/basic}* “她的。”"]
                  : ["<32>{#p/basic}* Inside is a brochure for blunt heavy-duty weaponry."],
         s_dogstandC: () =>
            SAVE.data.b.svr
               ? ["<32>{#p/human}* (The signed letter inside looks to have been ignored.)"]
               : world.genocide
                  ? [
                     "<32>{#p/basic}* 地板上，是一封写着“果断撤离”的\n  皇家守卫签名信。",
                     "<32>{#p/basic}* 信上的“果”字几乎都被啃掉了..."
                  ]
                  : [
                     "<32>{#p/basic}* 在里面的地板上，\n有一封来自皇家守卫的\n关于标准制服的签名信。",
                     "<32>{#p/basic}* 上面全是爪印。"
                  ],
         s_grillbys_beegstool: () =>
            SAVE.data.b.svr
               ? ["<25>{#p/asriel1}{#f/20}* I think that might be a little tall for you."]
               : world.darker
                  ? ["<32>{#p/basic}* Just another barstool."]
                  : ["<32>{#p/basic}* 一把高脚凳...", "<32>* 高度刚好适合Sans。"],
         s_grillbys_drinks: () =>
            SAVE.data.b.svr
               ? ["<32>{#p/human}* (You can't make out what's under the tray table...)"]
               : SAVE.data.n.plot === 72
                  ? ["<32>{#p/basic}* 一张折叠式餐桌。", "<32>* The camera on the underside has been taken away."]
                  : ["<32>{#p/basic}* 一张折叠式餐桌。", "<32>* 下面藏了个摄像头。"],
         s_grillbys_shelf: () =>
            SAVE.data.b.svr
               ? [
                  [
                     "<25>{#p/asriel1}{#f/16}* I don't think tasting any of these would be a good idea.",
                     "<25>{#f/15}* The last time someone had one, they burst into flames..."
                  ],
                  [
                     "<25>{#p/asriel1}{#f/15}* Spoiler alert:\n* It was Grillby.",
                     "<25>{#f/20}* Golly.\n* I'm on fire today."
                  ],
                  ["<25>{#p/asriel1}{#f/17}* Seriously, though.\n* You probably shouldn't drink these."]
               ][Math.min(asrielinter.s_grillbys_shelf++, 2)]
               : SAVE.data.n.plot === 72
                  ? ["<32>{#p/basic}* A few of the beverages on this shelf have been used up."]
                  : [
                     "<32>{#p/basic}* 柜子上摆满了\n  五花八门的派对酒水和恶心的液体。",
                     "<32>{#p/basic}* 唯一一瓶水上贴有\n  “当心明火”的标签。"
                  ],
         s_grillbys_sidestool: () =>
            SAVE.data.b.svr
               ? ["<25>{#p/asriel1}{#f/20}* That one's definitely too tall for you."]
               : world.darker
                  ? ["<32>{#p/basic}* Just another barstool."]
                  : ["<32>{#p/basic}* 这把高脚凳上标着“PAPYRUS”。"],
         s_grillbys_smolstool: () =>
            SAVE.data.b.svr
               ? ["<25>{#p/asriel1}{#f/19}* This one seems like just your size."]
               : world.darker
                  ? ["<32>{#p/basic}* Just another barstool."]
                  : SAVE.data.b.oops
                     ? ["<32>{#p/basic}* 这把高脚凳没什么特别的。"]
                     : ["<32>{#p/basic}* Something tells me this barstool is very special."],
         s_helipad: () =>
            SAVE.data.b.svr
               ? [
                  [
                     "<25>{#p/asriel1}{#f/21}* Ah yes...\n* The hovercar terminal.",
                     "<25>{#f/4}* It's derelict now, but once upon a time...",
                     "<25>{#f/3}* An operator would stand here and direct traffic through the area."
                  ],
                  [
                     "<25>{#p/asriel1}{#f/3}* This terminal was used mainly when Starton was being built.",
                     "<25>{#f/4}* For the first new area built here, it seemed a wise precaution.",
                     "<25>{#f/13}* Ships carrying supplies from the factory's replicators...",
                     "<25>{#f/13}* Often had trouble landing safely without it."
                  ],
                  [
                     "<25>{#p/asriel1}{#f/17}* Eventually, terminals like this weren't needed anymore.",
                     "<25>{#f/20}* The pilots of those supply ships got better at landing unaided.",
                     "<25>{#f/13}* And so, the terminal was forgotten..."
                  ],
                  ["<25>{#p/asriel1}{#f/16}* Just one of many objects whose story is mostly forgotten."]
               ][Math.min(asrielinter.s_helipad++, 3)]
               : ["<32>{#p/basic}* 一个曾经用来指挥\n  气垫车着陆的废弃终端。"],
         s_jenga_sign: () =>
            SAVE.data.b.svr
               ? ["<32>{#p/human}* (The sign describes the broken state of the display tower's quantum randomizer.)"]
               : ["<32>{#p/basic}* “注意：这个显示台里的\n  量子随机数生成器\n  仍然是坏的。”"],
         s_library_window: () => [
            "<32>{#p/human}* （你将双手搭在了窗户上。）",
            ...(SAVE.data.b.svr ? [] : ["<32>{#p/basic}* 有股油漆的味道。"])
         ],
         s_librarby_blueBooks: pager.create(
            1,
            () =>
               SAVE.data.b.svr
                  ? [
                     "<32>{#p/human}* (The books on this bookshelf consist of comparisons between the past the and present.)"
                  ]
                  : [
                     "<32>{#p/basic}* 书架上标着“旧事重提”。",
                     "<32>{#p/human}* （你取下了一本书...）",
                     "<32>{#p/basic}* “战前，怪物每天都要学习魔法。”",
                     "<32>* “然而，大多数同胞都在战争中牺牲，\n  其中就包括许多教师。”",
                     "<32>* “面对这一问题，剩余的怪物们\n  开始采用集体学习的方式。”",
                     "<32>* “当时采用这一方式，是为了让我们\n  能在前哨站更好地生存。”",
                     "<32>* “如今，人口不足的问题\n  几乎不复存在。”",
                     "<32>* “尽管如此，我们还是\n  坚持新的学习方式，因为...”",
                     "<32>* “...我们懒得再改回去了。”",
                     "<32>{#p/human}* （你把书放回原处。）"
                  ],
            () =>
               SAVE.data.b.svr
                  ? [
                     "<32>{#p/human}* (The books on this bookshelf consist of comparisons between the past the and present.)"
                  ]
                  : [
                     "<32>{#p/basic}* 书架上标着“旧事重提”。",
                     "<32>{#p/human}* （你取下了一本书...）",
                     "<32>{#p/basic}* “以前，\n  怪物使用多种货币进行交易。”",
                     "<32>* “主要流通的是珠宝和‘克里’... \n  但它们只能在母星上使用。”",
                     "<32>* “与人类进行贸易时，\n  就只能选择金钱作为货币。”",
                     "<32>* “丰富的金矿资源\n  为我们带来了许多便利。”",
                     "<32>* “但也因此导致\n  其他货币迅速贬值。”",
                     "<32>* “如今，金钱成为了\n  我们唯一的货币！”\n* “这就是怪物的作风。”",
                     "<32>{#p/human}* （你把书放回原处。）"
                  ],
            () =>
               SAVE.data.b.svr
                  ? [
                     "<32>{#p/human}* (The books on this bookshelf consist of comparisons between the past the and present.)"
                  ]
                  : [
                     "<32>{#p/basic}* 书架上标着“旧事重提”。",
                     "<32>{#p/human}* （你取下了一本书...）",
                     "<32>{#p/basic}* “Erogot死后，国王尽己所能\n  去保留故园的遗存。”",
                     "<32>* “尽管在保存途中，\n  他还是把那件最重要的东西\n  弄丢了...”",
                     "<32>* “但我们早已习惯逆来顺受，\n  没有因此责怪他。”",
                     "<32>* “过去两百年间充满坎坷，\n  但同时自由也离我们越来越近。”",
                     "<32>* “天使即将降临...”",
                     "<32>* “...我们猜想，或许他已经到来，\n  此刻正读着这本书。”",
                     "<32>{#p/human}* （你把书放回原处。）"
                  ]
         ),
         s_librarby_desk: () =>
            SAVE.data.b.svr
               ? ["<32>{#p/human}* (You observe the dust gathering on this check-out book.)"]
               : ["<32>{#p/basic}* 图书倌的借阅记录。"],
         s_librarby_greenBooks: pager.create(
            1,
            () =>
               SAVE.data.b.svr
                  ? [
                     "<32>{#p/human}* (The books on this bookshelf consist of information, some of which is actually useful.)"
                  ]
                  : [
                     "<32>{#p/basic}* 书架上标着“杂谈”。",
                     "<32>{#p/human}* （你取下了一本书...）",
                     "<32>{#p/basic}* “‘域外网’，是国王与皇家科学员\n  共同打造的网络平台。”",
                     "<32>* “...不过，主要是皇家科学员的功劳。\n  国王仅仅写了个欢迎致辞。”",
                     "<32>* “言归正传，\n  域外网作为一个‘虚拟广场’，\n  将前哨站的居民联系在一起。”",
                     "<32>* “想要创建账户，你只需要...”",
                     "<32>* “呃... 好吧...”",
                     "<32>* “这教程看着清楚，\n  写的可是不清不楚。”",
                     "<32>{#p/human}* （你把书放回原处。）"
                  ],
            () =>
               SAVE.data.b.svr
                  ? [
                     "<32>{#p/human}* (The books on this bookshelf consist of information, some of which is actually useful.)"
                  ]
                  : [
                     "<32>{#p/basic}* 书架上标着“杂谈”。",
                     "<32>{#p/human}* （你取下了一本书...）",
                     "<32>{#p/basic}* “要是你想到前哨站各处逛逛的话，\n  呼叫旅人是你的不二之选。”",
                     "<32>* “不管你想去哪，他都可以载你一程。”",
                     "<32>* “...因为，你总可以\n  在最近的停靠站找到他。”",
                     "<32>* “而且，说真的，\n  他说话有点不知所云。”",
                     "<33>* “‘狗子的公道’到底是个啥？”",
                     "<32>{#p/human}* （你把书放回原处。）"
                  ],
            () =>
               SAVE.data.b.svr
                  ? [
                     "<32>{#p/human}* (The books on this bookshelf consist of information, some of which is actually useful.)"
                  ]
                  : [
                     "<32>{#p/basic}* 书架上标着“杂谈”。",
                     "<32>{#p/human}* （你取下了一本书...）",
                     "<32>{#p/basic}* “怪物们可以自由穿梭于\n  前哨站的各个区域。”",
                     "<32>* “只有首塔顶端的最终长廊\n  是禁区。”",
                     "<32>* “除了皇家科学员，\n  任何居民都不得通过那里。”",
                     "<32>* “...我们仍不清楚其中的原因。”",
                     "<32>{#p/human}* （你把书放回原处。）"
                  ]
         ),
         s_librarby_ladder: () =>
            SAVE.data.b.svr
               ? ["<32>{#p/human}* (It appears the access hatch above this ladder was sealed shut.)"]
               : ["<32>{#p/basic}* 随便放的一把梯子。\n* 没什么好说的。"],
         s_librarby_pinkBooks: pager.create(
            1,
            () =>
               SAVE.data.b.svr
                  ? [
                     "<32>{#p/human}* (The books on this bookshelf consist of various facts about the biology of monsters.)"
                  ]
                  : [
                     "<32>{#p/basic}* 书架上标着“怪物生物学”。",
                     "<32>{#p/human}* （你取下了一本书...）",
                     "<32>{#p/basic}* “理论上讲，\n  怪物的葬礼十分酷炫。”",
                     "<32>* “当怪物老了，\n  然后翘辫子了，\n  他们就会化为尘埃。”",
                     "<32>* “在葬礼上，我们拿来这些尘埃，\n  洒在他生前最喜欢的东西上。”",
                     "<32>* “这样一来，他的精神\n  就会留存在那件物品中...”",
                     "<32>* “唔，我凑够字数了吗？”\n* “我有点讨厌写这个。”",
                     "<32>{#p/human}* （你把书放回原处。）"
                  ],
            () =>
               SAVE.data.b.svr
                  ? [
                     "<32>{#p/human}* (The books on this bookshelf consist of various facts about the biology of monsters.)"
                  ]
                  : [
                     "<32>{#p/basic}* 书架上标着“怪物生物学”。",
                     "<32>{#p/human}* （你取下了一本书...）",
                     "<32>{#p/basic}* “怪物的躯体由魔法构成，\n  因此和灵魂密不可分。”",
                     "<32>* “如果一个怪物蓄意伤人，\n  还对此执迷不悟...”",
                     "<32>* “他就会变得异常强大。”",
                     "<32>* “不过大多数我族同胞并不崇尚暴力，\n  至少不是打心底里。”",
                     "<32>* “可是，如果我们再次遭受袭击，\n  能用于自卫的，只有一座前哨站...”",
                     "<32>* ...",
                     "<32>{#p/human}* （你不想再读下去了。）"
                  ],
            () =>
               SAVE.data.b.svr
                  ? [
                     "<32>{#p/human}* (The books on this bookshelf consist of various facts about the biology of monsters.)"
                  ]
                  : [
                     "<32>{#p/basic}* 书架上标着“怪物生物学”。",
                     "<32>{#p/human}* （你取下了一本书...）",
                     "<32>{#p/basic}* “怪物的身体主要由魔法构成，\n  而人类的身体主要由水构成。”",
                     "<32>* “就物质组成来说，\n  人类比我们强大得多。”",
                     "<32>* “但是，他们永远不能体会到\n  使用魔法表达自我的乐趣。”",
                     "<32>* “他们永远不会收到\n  一张弹幕生日贺卡...”",
                     "<32>* “也永远不能\n  使用隐身术和鹰眼术玩捉迷藏...”",
                     "<32>* “更无法拿电魔法\n  办一场炫酷灯光秀！”",
                     "<32>* “太可怜了。”",
                     "<32>{#p/human}* （你把书放回原处。）"
                  ]
         ),
         s_librarby_purpleBooks: pager.create(
            1,
            () =>
               SAVE.data.b.svr
                  ? ["<32>{#p/human}* (The books on this bookshelf document the history of the monster homeworld.)"]
                  : [
                     "<32>{#p/basic}* 书架上标着“故园历史”。",
                     "<32>{#p/human}* （你取下了一本书...）",
                     "<32>{#p/basic}* “故园日夜，皆为奇观。”",
                     "<32>* “晨曦初露，光塔划空，天启新篇。”",
                     "<32>* “至于白昼，光层共振，辉煌万丈。”",
                     "<32>* “能量尽释，夜幕悄然。”",
                     "<32>* “星辰降临，魔力凝聚。”",
                     "<32>* “日光之能，尽数落地，归于尘寰。”",
                     "<32>* “直至光塔重升，耀眼如初。”",
                     "<32>* “此乃昼夜，永恒循环，主宰光阴。”",
                     "<32>{#p/human}* （你把书放回原处。）"
                  ],
            () =>
               SAVE.data.b.svr
                  ? ["<32>{#p/human}* (The books on this bookshelf document the history of the monster homeworld.)"]
                  : [
                     "<32>{#p/basic}* 书架上标着“故园历史”。",
                     "<32>{#p/human}* （你取下了一本书...）",
                     "<32>{#p/basic}* “你知道吗，怪物们如今的社会结构\n  并非一直存在。”",
                     "<32>* “很久很久以前，\n  确切来说，距今大约几千年时...”",
                     "<32>* “我们的祖先每天漫无目的，\n  肆意嬉戏。”",
                     "<32>* “不敢相信！\n  那时的怪物甚至连衣服都不穿！”",
                     "<32>* “不过，随着时间流逝，\n  我们有了新的追求，渴望进化。”",
                     "<32>* “在那场伟大的复兴运动中，\n  连魔法的本质都被摆上台面，\n  成为焦点。”",
                     "<32>* “这些进步奠定了我们的社会结构，\n  乃至如今的生活方式。”",
                     "<32>* “...我还是不敢相信\n  长达两千年的历史中，\n  我们都在裸着乱跑。”",
                     "<32>* “哪有风度？”\n* “哪有时尚？”\n* “太不可思议了。”",
                     "<32>{#p/human}* （你把书放回原处。）"
                  ],
            () =>
               SAVE.data.b.svr
                  ? ["<32>{#p/human}* (The books on this bookshelf document the history of the monster homeworld.)"]
                  : [
                     "<32>{#p/basic}* 书架上标着“故园历史”。",
                     "<32>{#p/human}* （你取下了一本书...）",
                     "<32>{#p/basic}* “人怪首次会面时，\n  当政的怪物王是Erogot。”",
                     "<32>* “在他英明的领导下，\n  两族和平共处，相安无事。”",
                     "<32>* “但随着Erogot寿终正寝...\n  这一切都一去不复返了。”",
                     "<32>* “Erogot有能力维持两族长久和平，\n  而王子却难以承袭此功。”",
                     "<32>* “于是，一场大战将在所难免...\n  实在令人痛心。”",
                     "<32>{#p/human}* （你把书放回原处。）"
                  ]
         ),
         s_librarby_yellowBooks: pager.create(
            1,
            () =>
               SAVE.data.b.svr
                  ? ["<32>{#p/human}* (The books on this bookshelf discuss various technologies devised by monsters.)"]
                  : [
                     "<32>{#p/basic}* 书架上标着“怪物科技”。",
                     "<32>{#p/human}* （你取下了一本书...）",
                     "<32>{#p/basic}* “Gerson曾说，\n  前哨站以前只是个小太空站。”",
                     "<32>* “在受了整整二十年苦之后，\n  有人将目光转向了那道力场。\n  心想...”",
                     "<32>* “‘这股强大的能量，\n  能否为己所用呢？’”",
                     "<32>* “这主意简洁明了，\n  但又十分巧妙。”",
                     "<32>* “在这一想法的指引下，\n  核心最终建成，\n  我们因此有了稳定的能源。”",
                     "<32>* “时至今日，我们仍在使用它！”",
                     "<32>{#p/human}* （你把书放回原处。）"
                  ],
            () =>
               SAVE.data.b.svr
                  ? ["<32>{#p/human}* (The books on this bookshelf discuss various technologies devised by monsters.)"]
                  : [
                     "<32>{#p/basic}* 书架上标着“怪物科技”。",
                     "<32>{#p/human}* （你取下了一本书...）",
                     "<32>{#p/basic}* “啊，人工智能真是\n  世界一大奇迹...”",
                     "<32>* “...也可能恰恰相反。”",
                     "<32>* “自从建筑机器人K-541.12出了事之后，\n  我们就彻底放弃了研发\n  有自我意识的AI。”",
                     "<32>* “王后甚至下令，\n  禁止任何人开发新的AI程序。”",
                     "<32>* “现在，还有能力与资源去搞AI的，\n  只剩一个怪物了。”",
                     "<32>{#p/human}* （你把书放回原处。）"
                  ],
            () =>
               SAVE.data.b.svr
                  ? ["<32>{#p/human}* (The books on this bookshelf discuss various technologies devised by monsters.)"]
                  : [
                     "<32>{#p/basic}* 书架上标着“怪物科技”。",
                     "<32>{#p/human}* （你取下了一本书...）",
                     "<32>{#p/basic}* “如今，很多人都已经忘了\n  太空中几乎没有重力。”",
                     "<32>* “早在战前，怪物在科技方面\n  就有许多突破性成果。”",
                     "<32>* “其中之一，\n  就是先进的重力控制系统。”",
                     "<32>* “如今，前哨站的每一个角落，\n  不论大小，都安装了\n  使用这一技术的装置。”",
                     "<32>* “现在正在看书的你，\n  可能就站在其中一个装置上面。”",
                     "<32>{#p/human}* （你把书放回原处。）"
                  ]
         ),
         s_math_sign: () =>
            SAVE.data.b.svr
               ? ["<32>{#p/human}* (You can't help but be confused at the contents of this sign.)"]
               : ["<32>{#p/basic}* “警告：狗子的公道”"],
         s_pacing_sign: () =>
            SAVE.data.b.svr
               ? ["<32>{#p/human}* （看着牌子上的内容，\n  你不禁扬起嘴角。）"]
               : ["<32>{#p/basic}* “留意有狗”\n* “...请抚摸狗...”"],
         s_phonecard: () =>
            SAVE.data.b.svr
               ? [
                  "<32>{#p/human}* (The note requests that you call a certain phone number.)",
                  "<32>{#s/phone}{#p/event}* 滴滴滴...",
                  "<32>{#p/human}* (No connection.)"
               ]
               : world.runaway
                  ? [
                     "<32>{#p/basic}* 这是张便条。",
                     "<32>* “给我打电话！”\n* “这是我的电话号码！”",
                     "<32>{#s/phone}{#p/event}* 滴滴滴...",
                     "<32>{#p/basic}* 电话直接转接到了\n  语音信箱。",
                     "<32>{#p/basic}* \"Hello, lonely caller!\"\n* \"Would you like to escape the outpost with me?\"",
                     "<32>{#s/equip}{#p/event}* 滴..."
                  ]
                  : SAVE.data.n.plot === 72
                     ? [
                        "<32>{#p/basic}* 这是张便条。",
                        "<32>* “给我打电话！”\n* “这是我的电话号码！”",
                        "<32>{#s/phone}{#p/event}* 滴滴滴...",
                        "<32>{#p/human}* (No connection.)"
                     ]
                     : [
                        "<32>{#p/basic}* 这是张便条。",
                        "<32>* “给我打电话！”\n* “这是我的电话号码！”",
                        "<32>{#s/phone}{#p/event}* 滴滴滴...",
                        "<32>{#p/basic}* 电话直接转接到了\n  语音信箱。",
                        "<32>{#p/basic}* “你好，孤独的来电者！”\n* “我很抱歉没能在这里迎接你~”",
                        "<32>{#s/equip}{#p/event}* 滴...",
                        ...(world.goatbro && SAVE.flag.n.ga_asrielVoicemail++ < 1
                           ? ["<25>{#p/asriel2}{#f/10}* ... weird."]
                           : [])
                     ],
         s_sr_cottonball: () =>
            world.darker
               ? ["<32>{#p/basic}* A series of cotton balls in the way of the closet."]
               : [
                  "<32>{#p/basic}* A series of neatly-organized cotton balls.",
                  ...(SAVE.data.b.s_state_inverter
                     ? ["<32>{#p/basic}* ... makes you wonder why they're still in the way of the closet."]
                     : ["<32>{#p/basic}* ... makes you wonder where the rest of Sans's junk went."])
               ],
         s_sr_treadmill: ["<32>{#p/basic}* It's a treadmill.", "<32>{#p/basic}* It's at its highest setting."],
         s_sr_lamp: [
            "<32>{#p/basic}* It's a lamp with a large note hanging inside.",
            "<23>{#p/papyrusnt}\"SORRY, BUT I TOOK BACK THE FLASHLIGHT YOU WERE USING HERE.\"",
            "<23>{#p/papyrusnt}\"IT'S NOT THAT I MIND YOU USING MY PROPERTY...\"",
            "<23>{#p/papyrusnt}\"BUT USING IT IN SUCH AN IMPROPER WAY IS ENTIRELY UNJUSTIFIED!\"",
            "<23>{#p/papyrusnt}\"I DON'T KNOW ABOUT YOU, BUT THE LAST TIME I CHECKED...\"",
            "<23>{#p/papyrusnt}\"A FLASHLIGHT DID NOT COUNT AS NOT A LIGHTBULB!!\""
         ],
         s_sc_book: [
            "<32>{#p/basic}* It's an old logbook from the Royal Lab.",
            "<32>{#p/human}* (You turn to the opened page...)",
            "<32>{#p/basic}* \"Activity log, K-615.07\"",
            "<32>* \"An ideal subject has been picked from the grove.\"",
            "<32>* \"Preparations for the test substance are due to conclude in the coming days.\"",
            "<32>* \"Soon, the subject will be injected with it.\"",
            "<32>* \"With this, our freedom could be closer than ever...\""
         ],
         s_sc_drawer: [
            "<32>{#p/basic}* There's a photo album inside the drawer.",
            "<32>{#p/basic}* Inside the album, there are photos of Sans and Alphys at the Royal Lab.",
            "<32>{#p/basic}* Running experiments, binge-watching old sci-fi anime...",
            "<32>{#p/basic}* They look happy."
         ],
         s_sc_diagram: () => [
            "<32>{#p/basic}* On the table, there's a blueprint for a forcefield-draining weapon.",
            "<32>{#p/basic}* On the wall, there are diagrams of various other concepts...",
            "<33>{#p/basic}* A forcefield polarity inverter, a wormhole aperture stabilizer, and a monster-bound human SOUL.",
            ...(!SAVE.data.b.s_state_charasker
               ? ((SAVE.data.b.s_state_charasker = true),
                  [
                     "<32>{#p/basic}* ... is that possible?\n* A monster SOUL surviving within a human SOUL...?",
                     "<32>{#p/basic}* But the identity of the monster SOUL's owner would be lost...",
                     "<32>{#p/basic}* ..."
                  ])
               : ["<32>{#p/basic}* ... hmm..."])
         ],
         s_pr_papbed: pager.create(
            0,
            () =>
               SAVE.data.b.svr
                  ? ["<32>{#p/human}* (You appreciate the bed for being very awesome in general.)"]
                  : [
                     "<32>{#p/basic}* A neatly-made hypercar bed.",
                     ...(roomready()
                        ? [
                           "<18>{#p/papyrus}THAT'S MY BED!",
                           "<18>{#f/4}IF I EVER GET TO EXPLORE THE STARS...",
                           "<18>{#f/0}I'D LIKE TO CRUISE DOWN A LONG INTER- STELLAR HIGHWAY.",
                           "<18>STATIC IN MY HAIR, STARLIGHT ON MY SKIN...",
                           "<18>{#f/4}OF COURSE, THAT'S JUST A DREAM.",
                           "<18>{#f/0}SO INSTEAD I CRUISE WHILE I SNOOZE."
                        ]
                        : [])
                  ],
            () =>
               SAVE.data.b.svr
                  ? ["<32>{#p/human}* (You thank the bed for being very awesome in general.)"]
                  : ["<32>{#p/basic}* A neatly-made hypercar bed."]
         ),
         s_pr_papbones: pager.create(
            0,
            () =>
               SAVE.data.b.svr
                  ? [
                     "<32>{#p/basic}* (You reach into the box, but the bones don't deal any damage.)",
                     ...[
                        ["<25>{#p/asriel1}{#f/21}* Careful, Frisk!\n* Those bones might still be active..."],
                        ["<25>{#p/asriel1}{#f/16}* ... or maybe not."],
                        ["<25>{#p/asriel1}{#f/13}* I wonder if you're the kind of person who stands on hot coals."],
                        ["<25>{#p/asriel1}{#f/8}* Boney hot coals."]
                     ][Math.min(asrielinter.s_pr_papbones++, 3)]
                  ]
                  : [
                     "<32>{#p/basic}* 一箱子的骨头。",
                     ...(roomready()
                        ? [
                           "<18>{#p/papyrus}嘿，那些就是我\n用来攻击你的东西。",
                           "<18>真是段美好的回忆，\n是吧？",
                           "<18>感觉仿佛\n就在昨日...",
                           "<18>{#f/4}实际上就是刚刚才\n发生的事。"
                        ]
                        : [])
                  ],
            () =>
               SAVE.data.b.svr
                  ? [
                     "<32>{#p/basic}* (You reach into the box, but the bones don't deal any damage.)",
                     ...[
                        [],
                        ["<25>{#p/asriel1}{#f/16}* ... or maybe not."],
                        ["<25>{#p/asriel1}{#f/13}* I wonder if you're the kind of person who stands on hot coals."],
                        ["<25>{#p/asriel1}{#f/8}* Boney hot coals."]
                     ][Math.min(asrielinter.s_pr_papbones++, 3)]
                  ]
                  : ["<32>{#p/basic}* 一箱子的骨头。"]
         ),
         s_pr_papcloset: pager.create(
            0,
            () => [
               "<32>{#p/human}* (You look inside the closet...)",
               ...(SAVE.data.b.svr
                  ? ["<32>{#p/human}* (It's hard for you to see in such a dark place.)"]
                  : !world.runaway
                     ? ["<32>{#p/basic}* The clothes inside have been frantically shifted around."]
                     : [
                        "<32>{#p/basic}* Clothes are hung up neatly inside.",
                        SAVE.data.n.plot === 72
                           ? "<32>* One of the clothes has \"Free Bones\" written on it."
                           : "<32>* Many of the clothes have handwritten text drawn on them."
                     ]),
               ...(roomready()
                  ? [
                     "<18>{#p/papyrus}DON'T WORRY, THE CLOSET IS SKELETON-FREE.",
                     "<18>{#f/4}UNLESS I'M CHANGING, OF COURSE."
                  ]
                  : [])
            ],
            () => [
               "<32>{#p/human}* (You look inside the closet...)",
               ...(SAVE.data.b.svr
                  ? ["<32>{#p/human}* (It's hard for you to see in such a dark place.)"]
                  : !world.runaway
                     ? ["<32>{#p/basic}* The clothes inside have been frantically shifted around."]
                     : [
                        "<32>{#p/basic}* Clothes are hung up neatly inside.",
                        SAVE.data.n.plot === 72
                           ? "<32>* One of the clothes has \"Free Bones\" written on it."
                           : "<32>* Many of the clothes have handwritten text drawn on them."
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
                        "<25>{#f/13}* In previous timelines, this attack right here...",
                        "<25>{#f/15}* Caused me my fair share of defeats.",
                        "<25>{#f/16}* ... don't ask how or why I was fighting Papyrus."
                     ],
                     ["<25>{#p/asriel1}{#f/10}* What?\n* It wasn't anything bad.\n* Not that time, anyway."],
                     [
                        "<25>{#p/asriel1}{#f/16}* Okay, okay.\n* I might have disguised myself as a human.",
                        "<25>{#f/15}* ... yeah.\n* It looked as bad as you think it would.",
                        "<25>{#f/5}* But hey, I got a chance to battle the great Papyrus!"
                     ],
                     ["<25>{#p/asriel1}{#f/20}* Totally worth it."]
                  ][Math.min(asrielinter.s_pr_papposter++, 3)]
                  : [
                     "<32>{#p/basic}* It's a flag with a menacing skull painted on it.",
                     ...(roomready()
                        ? [
                           "<18>{#p/papyrus}ISN'T THAT POSTER NEATO?",
                           "<18>UNDYNE FOUND IT ON A TRASH RUN.",
                           "<18>{#f/4}IT HAD A SKULL AND CROSSBONES ON IT AT FIRST...",
                           "<18>{#f/9}BUT I THOUGHT OF SOMETHING BETTER!"
                        ]
                        : [])
                  ],
            () =>
               SAVE.data.b.svr
                  ? [
                     [],
                     ["<25>{#p/asriel1}{#f/10}* What?\n* It wasn't anything bad.\n* Not that time, anyway."],
                     [
                        "<25>{#p/asriel1}{#f/16}* Okay, okay.\n* I might have disguised myself as a human.",
                        "<25>{#f/15}* ... yeah.\n* It looked as bad as you think it would.",
                        "<25>{#f/5}* But hey, I got a chance to battle the great Papyrus!"
                     ],
                     ["<25>{#p/asriel1}{#f/20}* Totally worth it."]
                  ][Math.min(asrielinter.s_pr_papposter++, 3)]
                  : ["<32>{#p/basic}* It's a flag with a menacing skull painted on it."]
         ),
         s_pr_paptable: pager.create(
            0,
            () =>
               SAVE.data.b.svr
                  ? ["<32>{#p/human}* (You marvel at the detail of these action figures...)"]
                  : [
                     "<32>{#p/basic}* A set of action figures with tacky, matching uniforms.",
                     ...(roomready()
                        ? [
                           "<18>{#p/papyrus}AH, YES, ACTION FIGURES.",
                           "<18>A GREAT REFERENCE FOR THEORETICAL BATTLE SCENARIOS.",
                           "<18>{#f/4}BUT HOW DO I HAVE SO MANY?",
                           "<18>{#f/6}WELL, UMM...\nTHE KING GAVE THEM TO ME AS A GIFT...",
                           "<18>{#f/5}A GIFT I TRULY WISH I COULD REPAY HIM FOR."
                        ]
                        : [])
                  ],
            () =>
               SAVE.data.b.svr
                  ? ["<32>{#p/human}* (Upon reflection, you realize who created these.)"]
                  : ["<32>{#p/basic}* A set of action figures with tacky, matching uniforms."]
         ),
         s_puzzle1_sign: () =>
            SAVE.data.b.svr
               ? ["<32>{#p/human}* (The sign describes the basics of solving the puzzle.)"]
               : ["<32>{#p/basic}* “按顺序触发每一条电路。”"],
         s_puzzle2_sign: () =>
            SAVE.data.b.svr
               ? ["<32>{#p/human}* （这个告示牌点出了解谜思路。）"]
               : ["<32>{#p/basic}* “从左边开始。”"],
         s_puzzle3_note: () =>
            SAVE.data.b.svr
               ? world.postnoot && world.nootflags.has('s_puzzle3') // NO-TRANSLATE

                  ? [
                     "<32>{#p/human}* (The note's brags about having solved a puzzle in advance.)",
                     ...[
                        ["<25>{#p/asriel1}{#f/20}* Ha, uh, I wonder who wrote that note, huh?\n* Yeah..."],
                        ["<25>{#p/asriel1}{#f/20}* Couldn't be me!"],
                        ["<25>{#p/asriel1}{#f/13}* ..."]
                     ][Math.min(asrielinter.s_puzzle3_note++, 2)]
                  ]
                  : ["<32>{#p/human}* (The note remarks about how the puzzle solution was not modified as intended.)"]
               : world.postnoot && world.nootflags.has('s_puzzle3') // NO-TRANSLATE

                  ? [
                     [
                        "<32>{#p/basic}* It's a note from someone who didn't say who they were...",
                        "<32>* \"Puzzles like these can be so annoying, can't they?\"",
                        "<32>* \"Thankfully, I've taken care of it for you.\"",
                        "<32>* \"Isn't that nice?\"\n* \"You should be thankful!\"",
                        "<#32>µ - \"Sincerely,\"\nµ Your Best Friend"
                     ],
                     [
                        "<32>{#p/basic}* It's a note from someone who didn't say who they were...",
                        "<32>* \"Don't worry.\"\n* \"No matter how many times you do this over...\"",
                        "<32>* \"I'll always be here to make sure you never have to deal with a puzzle again.\"",
                        "<32>* \"It's the least I can do.\"",
                        "<#32>µ - \"Forevermore,\"\nµ Your Best Friend"
                     ]
                  ][Math.min(SAVE.flag.n.neutral_twinkly_loop1, 1)]
                  : !world.genocide && world.edgy
                     ? [
                        "<32>{#p/basic}* It's a note from Sans...",
                        "<32>{#p/without}* \"welp.\"\n* \"seems my bro found out about you after all.\"",
                        "<32>* \"i told him everything you've done up to now, and he's agreed to stay put.\"",
                        "<32>* \"it's a shame, isn't it?\"",
                        "<32>* \"papyrus shouldn't have to deal with this kinda stuff.\"",
                        "<32>* \"but i guess that's the galaxy we live in, now.\"",
                        "<32>* \"well.\n* good luck with the puzzle.\"",
                        "<32>* \"i'm sure it'll take you no time at all.\"",
                        "<#32>µ - \"with all due respect,\"\nµ sans"
                     ]
                     : [
                        "<32>{#p/basic}* 这是张Papyrus留的字条...",
                        "<23>{#p/papyrus}{#f/30}“人类！！这个谜题可跟\n看起来的不一样。”",
                        "<23>“我在等你的时候，\n试着改造了一下...”",
                        "<23>“当然，是为了让图案\n看起来更像我的脸！”",
                        "<23>“不过好像哪里出了岔子...”",
                        "<23>“所以我现在\n只能做成一个\n很烂的箭头形状了！！！”",
                        "<23>“（另外，这个谜题\n需要你自己完成。）”",
                        "<23>“但不用担心！”\n“你肯定做得到的，人类！”",
                        "<#23>µ - “非常相信着你的，”\nµ PAPYRUS"
                     ],
         s_redbook: () =>
            SAVE.data.b.svr
               ? ["<32>{#p/human}* (The uniquely-colored book describes a secret weapon lost to time.)"]
               : [
                  "<32>{#p/basic}* It's a bookshelf.",
                  "<32>{#p/human}* （你取下了那本红皮书...）",
                  "<32>{#p/basic}* “人怪大战进入到白热化阶段时，\n  皇家军队成立了一个秘密组织。”",
                  "<32>{#p/basic}* “也就是所谓的‘特种武器’研发部，\n  专门用来搞实验研究。”",
                  "<32>{#p/basic}* “他们造出了许多‘战斗利器’，\n  但实战效果都是微乎其微。”",
                  "<32>{#p/basic}* “只有一个例外，\n  它就是被称作‘顿悟’的魔法卷轴。”",
                  "<32>{#p/basic}* “这卷轴的力量超乎寻常，\n  即使用来对付人类也过于危险。”",
                  "<32>{#p/basic}* “结果，卷轴被从内部锁死，\n  并很快封存起来。”",
                  "<32>{#p/basic}* “传说，有人把它送上了\n  开往前哨站的运输船。”",
                  "<32>{#p/basic}* “如果传说属实，\n  那么它现在位于何处？”\n* “又该如何解开枷锁？”",
                  "<32>{#p/basic}* “但愿，以上疑问永埋尘土之下，\n  湮没无闻。”",
                  "<32>{#p/human}* （你把书放回原处。）"
               ],
         s_sansbox: () =>
            SAVE.data.b.svr
               ? ["<32>{#p/human}* (Due to how full it is, you can't seem to see inside the mailbox.)"]
               : SAVE.data.n.plot === 72 && !world.runaway
                  ? [
                     "<32>{#p/basic}* Somehow, the mailbox has been stuffed with even more unread junk mail than before.",
                     ...(SAVE.data.b.oops ? [] : ["<32>{#p/basic}* ... color me surprised."])
                  ]
                  : [
                     "<32>{#p/basic}* （邮箱里塞满了未开封的垃圾邮件。）",
                     ...(SAVE.data.b.oops ? [] : ["<32>{#p/basic}* ... he never reads the mail anyway."])
                  ],
         s_sheddoor: () =>
            SAVE.data.b.svr
               ? ["<32>{#p/human}* (You can't seem to find a way in.)"]
               : ["<32>{#p/basic}* 门被反锁了。"],
         s_slew: ["<32>{#p/basic}* 这是狗粮。\n* 碎片看起来像是骨头。"],
         s_spagnote: () =>
            SAVE.data.b.svr
               ? ["<32>{#p/human}* (The note declares the brilliance of enticing you with a place of spaghetti.)"]
               : !world.genocide && world.edgy
                  ? [
                     "<32>{#p/basic}* It's a note from Sans...",
                     "<32>{#p/without}* \"whoops.\"\n* \"seems like you've found my bro's spaghetti.\"",
                     "<32>* \"looks tasty, right?\"",
                     "<32>* \"well.\"\n* \"it turns out that's kind of the point.\"",
                     "<32>* \"i'd be careful with it if i were you...\"",
                     "<32>* \"'cause the more time you spend eating this...\"",
                     "<32>* \"the more time i have to prepare for the next puzzle.\"",
                     "<#23>µ - \"joke's on you,\"\nµ sans"
                  ]
                  : [
                     "<32>{#p/basic}* 这是张Papyrus留的字条...",
                     "<23>{#p/papyrus}{#f/30}“人类啊！！”\n“享用这盘意面吧。”",
                     "<23>（“但其实你不知道的是，\n这盘意面是个陷阱...”）",
                     "<23>（“单纯是为了吸引你的！！！”）",
                     "<23>（“你会忙着吃它...”）",
                     "<23>（“然后就不会意识到\n自己毫无进展！！”）",
                     "<23>（“再次彻底被\n伟大的PAPYRUS戏弄！！！ ”）",
                     "<#23>µ - “捏嘿嘿，”\nµ PAPYRUS"
                  ],
         s_town_camera1: () =>
            SAVE.data.b.svr
               ? []
               : world.runaway
                  ? [
                     "<32>{#p/basic}* There's no longer anyone to spy on you through the camera hidden in these crystal pods."
                  ]
                  : SAVE.data.n.plot === 72
                     ? ["<32>{#p/basic}* There's no longer a camera hidden in these crystal pods."]
                     : ["<32>{#p/basic}* 在这堆水晶荚里\n  藏着一个摄像头。"],
         s_trapnote: () =>
            [
               [
                  "<32>{#p/basic}* 这是张Papyrus留的字条...",
                  "<23>{#p/papyrus}{#f/30}“抱歉，到UNDYNE来之前，\n我得把你锁在客房里。”",
                  "<23>“把这里当自己家\n一样吧！！！”",
                  "<22>“已提供茶点和住宿。”",
                  "<#23>µ - “你的捏嘿嘿的，”\nµ PAPYRUS"
               ],
               [
                  "<32>{#p/basic}* 这是张Papyrus留的字条...",
                  "<23>{#p/papyrus}{#f/30}\"PLEASE ASK BEFORE YOU ESCAPE!!!\"",
                  "<23>\"WHEN YOU WENT MISSING I GOT WORRIED SICK!!!\"",
                  "<#23>µ - \"SLIGHTLY BONETROUSLED,\"\nµ PAPYRUS"
               ],
               [
                  "<32>{#p/basic}* 这是张Papyrus留的字条...",
                  "<23>{#p/papyrus}{#f/30}\"IF YOU'RE ONLY LOOKING FOR A PLACE TO STAY...\"",
                  "<23>\"JUST ASK!!! YOU DON'T NEED TO FIGHT ME!!!\"",
                  "<#23>µ - \"YOUR HOST,\"\nµ PAPYRUS"
               ]
            ][Math.min(SAVE.data.n.state_papyrus_capture - 1, 2)],
         s_tree: pager.create(
            0,
            () =>
               SAVE.data.b.svr
                  ? [
                     [
                        "<25>{#p/asriel1}{#f/20}* $(name) always liked to call this ant colony a \"civilization.\"",
                        "<25>{#f/17}* I guess it was their way of trying to sound smart.",
                        "<25>{#f/13}* I tried to sound smart too, but Mom and Dad saw right through me.",
                        "<25>{#f/13}* $(name) always was a better liar than me..."
                     ],
                     [
                        "<26>{#p/asriel1}{#f/13}* After $(name) arrived, they tried to convince us they were a diplomat.",
                        "<25>{#f/17}* Thankfully, even they couldn't lie THAT well.",
                        "<25>{#f/15}* Imagine how much worse things could've gone if they'd been believed..."
                     ],
                     [
                        "<26>{#p/asriel1}{#f/17}* I'm glad you're not a liar, Frisk.",
                        "<25>{#f/13}* I've had enough dishonesty in my life as it is.",
                        "<25>{#f/20}* ... sorry.\n* I guess this sorta came out of left field."
                     ],
                     ["<26>{#p/asriel1}{#f/15}* Life sure does like to throw curveballs at you sometimes..."]
                  ][Math.min(asrielinter.s_tree++, 3)]
                  : world.darker
                     ? ["<32>{#p/basic}* There's nothing special about this tree-like structure."]
                     : SAVE.data.n.plot === 72
                        ? [
                           "<32>{#p/basic}* Soon enough, this civilization will need to migrate once again.",
                           "<32>* Where shall they go?\n* Sooner or later, we will know."
                        ]
                        : [
                           "<32>{#p/basic}* 这个人畜无害的树状结构，\n  其实是一个文明的家园。",
                           "<32>* 在濒临灭绝之时，\n  它们迁徙到这里\n  来拯救自己的种族。"
                        ],
            () =>
               SAVE.data.b.svr
                  ? [
                     [],
                     [
                        "<26>{#p/asriel1}{#f/13}* After $(name) arrived, they tried to convince us they were a diplomat.",
                        "<25>{#f/17}* Thankfully, even they couldn't lie THAT well.",
                        "<25>{#f/15}* Imagine how much worse things could have been had they been believed..."
                     ],
                     [
                        "<26>{#p/asriel1}{#f/17}* I'm glad you're not a liar, Frisk.",
                        "<25>{#f/20}* I've had enough difficulty in my life as it is.",
                        "<25>{#f/13}* ... eh, sorry.\n* This topic just came out of left field.",
                        "<26>{#f/13}* I apologize for that."
                     ],
                     ["<26>{#p/asriel1}{#f/17}* Life sure does like to throw curveballs at you sometimes..."]
                  ][Math.min(asrielinter.s_tree++, 3)]
                  : world.darker
                     ? ["<32>{#p/basic}* ..."]
                     : SAVE.data.n.plot === 72
                        ? ["<32>{#p/basic}* Don't worry.\n* They'll find their own way."]
                        : ["<32>{#p/basic}* 专家建议...\n* 不要摇晃这人畜无害的树状结构。"]
         ),
         doginfo: () =>
            SAVE.data.b.svr
               ? ["<32>{#p/human}* (The dog treats inside look to have been somewhat devoured.)"]
               : SAVE.data.n.state_starton_doggo === 2 || SAVE.data.n.plot > 27
                  ? SAVE.data.b.oops
                     ? ["<32>{#p/basic}* 里面有一袋半空的狗粮。"]
                     : ["<32>{#p/basic}* Inside is a pack of dog treats. It's half-full."]
                  : [
                     SAVE.data.n.state_starton_doggo === 3
                        ? "<32>{#p/basic}* Inside is a rather sleepy guard dog.\n* It cannot see you."
                        : "<32>{#p/basic}* 狗窝里是只很困惑的守卫狗。\n* 它看不见你。"
                  ]
      },
      truetext: {
         doggo1: ["<32>{#p/basic}* Dog treats?\n* That dog needs a therapist."],
         doggo2: ["<32>{#p/basic}* Fetch, huh?\n* Now we're getting places."],
         dogs1: ["<32>{#p/basic}* The things we do for the good of the canines."],
         dogs2: ["<32>{#p/basic}* The rusty spanner strikes again."],
         fetch: () =>
            [
               ["<32>{#p/basic}* Fetch, huh?\n* Now we're getting places."],
               ["<32>{#p/basic}* That's two for two on the rusty spanner method.", "<32>{#p/basic}* What else is new?"],
               ["<32>{#p/basic}* You can't keep getting away with this."]
            ][SAVE.data.n.state_starton_latefetch++],
         great1: ["<32>{#p/basic}* It's a proven fact that little puppy kisses are the best."],
         great2: [
            "<32>{#p/basic}* The entire canine unit, beaten with nothing but a wrench and a strong throwing arm.",
            "<32>* The lunacy speaks for itself."
         ],
         great3: ["<32>{#p/basic}* What just happened?"],
         lesser1: ["<32>{#p/basic}* Mysterious words about extending necks suddenly make a lot more sense."],
         lesser2: [
            "<32>{#p/basic}* That's two for two on the rusty spanner method.",
            "<32>{#p/basic}* What else is new?"
         ],
         papyrus1: [
            "<32>{#p/basic}* Papyrus is well-known for his spaghetti.",
            "<32>* What's not as well-known is that he uses a human recipe instead of a monster one.",
            "<32>* An honest mistake by his, uh, \"cooking instructor,\" but...",
            "<32>* Apart from himself, only a human would enjoy it.",
            "<32>* The irony is off the charts."
         ],
         papyrus3: ["<32>{#p/basic}* This is it...", "<32>* You're about to spar with the coolest skeleton in town."],
         papyrus4: [
            "<32>{#p/basic}* He might as well have been waiting his whole life for this moment...",
            "<32>* If I were you, I wouldn't let it go to waste."
         ],
         papyrus5: ["<32>{#p/basic}* Don't worry.", "<32>* With any luck, you'll be best friends in no time."],
         puzzle1: () =>
            SAVE.data.b.svr
               ? ["<25>{#p/asriel1}{#f/20}* Not bad, Frisk.\n* I didn't know you were a mathematics expert..."]
               : ["<32>{#p/basic}* Wow.\n* You actually solved it?"],
         sans3: ["<32>{#p/basic}* You tried."],
         sans4: ["<32>{#p/basic}* Have you done this before...?"],
         sans5: ["<32>{#p/basic}* Really, Sans?\n* That \"puzzle\" wasn't even worth looking at."],
         sans6: ["<32>{#p/basic}* Really, Sans?\n* That \"puzzle\" was impossible."],
         sans7: ["<32>{#p/basic}* That was anti-climactic."],
         sans8: ["<32>{#p/basic}* I'm just as confused as you."],
         sans9: ["<32>{#p/basic}* Aw, c'mon!\n* I wanted to see that!", "<32>* ... oh well..."],
         papdate: () => [
            "<32>{#p/basic}* So... Papyrus, huh?",
            SAVE.data.n.plot > 64.1
               ? "<32>* After all this time, you finally became friends."
               : "<32>* Somehow I knew you two would end up as friends.",
            "<32>* I wish I could tell him how much I adore him...",
            "<32>* But I guess just watching him will have to do for now."
         ]
      },
      vegetoid: pager.create(
         0,
         () => [
            SAVE.data.n.plot === 72
               ? "<32>{#p/basic}* I heard the taxi driver will be here when everyone else is off the outpost."
               : world.population === 0
                  ? "<32>{#p/basic}* I heard the taxi driver will be here when everyone else is gone."
                  : "<32>{#p/basic}* 我听说那个出租车司机\n  不吃绿色蔬菜。",
            "<33>{#p/basic}* 它真的是个怪物吗...？"
         ],
         () => [
            SAVE.data.n.plot === 72
               ? "<32>{#p/basic}* A real monster wouldn't hesitate to escape this dreadful place."
               : world.population === 0
                  ? "<32>{#p/basic}* ..."
                  : "<32>{#p/basic}* 真正的怪物\n  都吃绿色蔬菜的。"
         ]
      ),
      vegetoidx: () =>
         SAVE.data.b.svr
            ? ["<32>{#p/human}* (You can't seem to find anyone down there.)"]
            : world.bulrun
               ? ["<32>{#p/basic}* ...但是人们都逃走了。"]
               : ["<32>{#p/basic}* ...但是谁也没有来。"],
      xtowerHiscoreHeader: "排行榜",
      xtowerHiscoreNames: {
         kidd: "UNDYNEFAN10",
         napstablook: "NAPSTABLOOK22",
         papyrus: "酷炫骷髅95",
         sans: "懒骨.",
         undyne: "壮鱼91",
         you: "（游客）"
      },
      xtowerMessage1: "新纪录！",
      xtowerMessage2: "祝你下次好运...",
      xtowerMessage3: "感谢游玩！",
      xtowerSans: () =>
         world.genocide
            ? [
               "<32>{#p/event}* 滴滴，滴滴...",
               "<32>{#p/alphys}* So... killing him wasn't g-good enough, huh?",
               "<32>* You just had to go and beat his score on my... stupid m-minigame...",
               "<32>* Ehehe...",
               "<32>* You're truly disgusting...",
               "<32>* ...",
               "<32>{#s/equip}{#p/human}* (You lost all of your G.)",
               ...(world.goatbro
                  ? SAVE.flag.n.genocide_milestone < 5
                     ? SAVE.flag.n.ga_asrielXtower++ < 1
                        ? ["<25>{#p/asriel2}{#f/10}* Daring today, aren't we?"]
                        : []
                     : SAVE.flag.n.genocide_milestone < 6
                        ? SAVE.flag.n.ga_asrielAlphysCom2++ < 1
                           ? ["<25>{#p/asriel2}{#f/1}* Now THAT's the Alphys I like to see."]
                           : []
                        : SAVE.flag.n.ga_asrielAlphysCom5++ < 1
                           ? ["<25>{#p/asriel2}{#f/4}* Too bad this won't save her when she's dead."]
                           : []
                  : [])
            ]
            : [
               "<32>{#p/event}* 滴滴，滴滴...",
               "<25>{#p/sans}* didja seriously just put in all that effort tryna beat my score?",
               "<25>{#f/3}* wow.\n* you're even more stubborn than my bro.",
               ...(SAVE.data.n.state_starton_papyrus === 1
                  ? [
                     "<25>{#f/3}* ...",
                     "<25>{*}{#p/darksans}{#f/1}{#i/5}{#s.stop}* Too bad he's dead, huh?",
                     "{*}{#s.resume}{%}"
                  ]
                  : [
                     SAVE.data.n.plot === 72
                        ? "<25>{#f/0}* i'd give you a special reward, but i'm still looking for toriel."
                        : "<25>{#f/0}* i'd give you a special reward, but i'm on break right now.",
                     ...(world.edgy_x
                        ? ["<25>{#f/0}* no hard feelings.", "<32>{#s/equip}{#p/event}* 滴..."]
                        : [
                           "<25>{#f/2}* instead, i'll just send ya some pocket change.",
                           "<32>{#s/equip}{#p/human}* （你得到了10000G。）"
                        ])
                  ])
            ],
      xtowerAsriel: [
         "<25>{#p/asriel1}{#f/13}* ... you actually beat the high score?",
         "<25>{#f/17}* Wow.\n* I under-estimated you.",
         "<25>{#f/20}* Very cool, Frisk."
      ],
      xtowerScore: "得分：$(x)"
   },

   b_group_starton: {
      dogs: () => (world.goatbro ? ["<32>{#p/asriel2}* Dogamy and Dogaressa."] : ["<32>{#p/story}* Dogi向你发起攻击！"]),
      spacetopJerry: () =>
         world.goatbro
            ? ["<32>{#p/asriel2}* 俗气的帽子再配上没谱的伙计。"]
            : ["<32>{#p/story}* Astro Serf闲逛过来了！\n* Jerry也来了。"],
      stardrakeSpacetop: () =>
         world.goatbro
            ? ["<32>{#p/asriel2}* 笨蛋青年两人组。"]
            : SAVE.data.b.s_state_chilldrake
               ? ["<32>{#p/story}* Chilldrake and Astro Serf pose like bad guys."]
               : ["<32>{#p/story}* Stardrake and Astro Serf pose like bad guys."],
      stardrakeSpacetop2a: () =>
         world.goatbro
            ? ["<32>{#p/asriel2}* 只剩一个了。"]
            : SAVE.data.b.s_state_chilldrake
               ? ["<32>{#p/story}* Chilldrake remains steady."]
               : ["<32>{#p/story}* Stardrake remains steady."],
      stardrakeSpacetop2b: () =>
         world.goatbro ? ["<32>{#p/asriel2}* 只剩一个了。"] : ["<32>{#p/story}* Astro Serf remains steady."],
      stardrakeSpacetop2c: () =>
         world.goatbro ? ["<32>{#p/asriel2}* 只剩一个了。"] : ["<32>{#p/story}* Just Astro now."],
      stardrakeSpacetop2d: () => (world.goatbro ? ["<32>{#p/asriel2}* Jerry。"] : ["<32>{#p/story}* Jerry。"]),
      stardrakeSpacetopJerry: () =>
         world.goatbro
            ? ["<32>{#p/asriel2}* 笨蛋青年两人组。\n* 再加一个，Jerry。"]
            : SAVE.data.b.spared_jerry
               ? ["<32>{#p/story}* Jerry and friends appear!"]
               : SAVE.data.b.s_state_chilldrake
                  ? ["<32>{#p/story}* Astro Serf和Chilldrake\n  叹着气来和你对峙了。\n* Jerry。"]
                  : ["<32>{#p/story}* Astro Serf和Stardrake\n  叹着气来和你对峙了。\n* Jerry。"],
      stardrakeSpacetopJerry2a: () =>
         world.goatbro
            ? ["<32>{#p/asriel2}* 还剩下两个。"]
            : SAVE.data.b.s_state_chilldrake
               ? ["<32>{#p/story}* Astro Serf and Chilldrake remain steady."]
               : ["<32>{#p/story}* Astro Serf and Stardrake remain steady."],
      stardrakeSpacetopJerry2b: () =>
         world.goatbro ? ["<32>{#p/asriel2}* 还剩下两个。"] : ["<32>{#p/story}* Astro Serf remains steady.\n* Jerry."],
      stardrakeSpacetopJerry2c: () =>
         world.goatbro
            ? ["<32>{#p/asriel2}* 还剩下两个。"]
            : SAVE.data.b.s_state_chilldrake
               ? SAVE.data.b.spared_jerry
                  ? ["<32>{#p/story}* Chilldrake and Jerry remain steady!"]
                  : ["<32>{#p/story}* Chilldrake remains steady.\n* Jerry."]
               : SAVE.data.b.spared_jerry
                  ? ["<32>{#p/story}* Stardrake and Jerry remain steady!"]
                  : ["<32>{#p/story}* Stardrake remains steady.\n* Jerry."]
   },

   b_opponent_stardrake: {
      act_check: () =>
         world.goatbro
            ? SAVE.data.b.s_state_chilldrake
               ? [
                  "<32>{#p/asriel2}* Chilldrake，中二叛逆。\n* 胡乱撒气，荒唐至极。"
               ]
               : [
                  "<32>{#p/asriel2}* Stardrake，逗逼。\n* 总喜欢给别人讲笑话，\n  殊不知自己就是个最大的笑话。"
               ]
            : SAVE.data.b.s_state_chilldrake
               ? ["<33>{#p/story}* CHILLDRAKE - ATK 12 DEF 7\n* Rebels against everything!!\n* On the lookout for Starry."]
               : ["<32>{#p/story}* STARDRAKE - 攻击12 防御7\n* 这名喜剧演员拼尽力气\n  想留住一位观众。"],
      act_check2: () =>
         SAVE.data.b.s_state_chilldrake
            ? ["<32>{#p/story}* CHILLDRAKE - ATK 12 DEF 7\n* Rebels against everything!!\n* Looking for a way out."]
            : ["<32>{#p/story}* STARDRAKE - ATK 12 DEF 7\n* This teen isn't taking your punchline very well."],
      act_check3: () =>
         SAVE.data.b.s_state_chilldrake
            ? ["<32>{#p/story}* CHILLDRAKE - ATK 12 DEF 7\n* Rebels against everything!!\n* Especially flirting!!"]
            : ["<32>{#p/story}* STARDRAKE - ATK 12 DEF 7\n* Flirting is no joke for this teen comedian."],
      act_check4: () =>
         SAVE.data.b.s_state_chilldrake
            ? ["<32>{#p/story}* CHILLDRAKE - ATK 12 DEF 7\n* The rebellion is fading..."]
            : ["<32>{#p/story}* STARDRAKE - ATK 12 DEF 7\n* Things are looking up for this teen comedian."],
      act_flirt: () => ["<32>{#p/human}* (You make a romantic joke.)"],
      flirtTalk1: ["<08>{#p/basic}{~}You're weird."],
      flirtTalk2: ["<08>{#p/basic}{~}You're mean AND weird."],
      genoStatus: () =>
         SAVE.data.b.s_state_chilldrake ? ["<32>{#p/asriel2}* Chilldrake."] : ["<32>{#p/asriel2}* Stardrake."],
      heckleStatus: () =>
         world.goatbro
            ? SAVE.data.b.s_state_chilldrake
               ? ["<32>{#p/asriel2}* Chilldrake."]
               : ["<32>{#p/asriel2}* Stardrake."]
            : SAVE.data.b.s_state_chilldrake
               ? ["<32>{#p/story}* Chilldrake is puffed up..."]
               : ["<32>{#p/story}* Stardrake is puffed up..."],
      heckleTalk1: () =>
         SAVE.data.b.s_state_chilldrake
            ? ["<08>{#p/basic}{~}No!!\nThis is the way!"]
            : ["<08>{#p/basic}{~}THIS won't be funny either!"],
      heckleTalk2: () =>
         SAVE.data.b.s_state_chilldrake
            ? ["<08>{#p/basic}{~}Filthy law- obider."]
            : ["<08>{#p/basic}{~}Is your flesh rotten as you?"],
      heckleTalk3: () =>
         SAVE.data.b.s_state_chilldrake
            ? ["<08>{#p/basic}{~}Defiance can't be defied!"]
            : ["<08>{#p/basic}{~}(Insults towards humans)"],
      heckleText1: () =>
         SAVE.data.b.s_state_chilldrake
            ? ["<32>{#p/human}* (You denounce Chilldrake for its cause.)"]
            : ["<32>{#p/human}* (You boo Stardrake.)"],
      heckleText2: () =>
         SAVE.data.b.s_state_chilldrake
            ? ["<32>{#p/human}* (You tell Chilldrake that they should be a rebel somewhere else.)"]
            : ["<32>{#p/human}* (You tell Stardrake that they aren't funny.)"],
      heckleText3: () =>
         SAVE.data.b.s_state_chilldrake
            ? [
               "<32>{#p/human}* (You mock Chilldrake for protesting out in the middle of nowhere.)",
               "<32>{#p/basic}* Chilldrake takes your mockery as advice, and saunters off to town..."
            ]
            : [
               "<32>{#p/human}* (You tell Stardrake that no one will ever love them the way they are.)",
               "<32>{#p/basic}* Stardrake struggles to make a retort, and slinks away utterly crushed..."
            ],
      hurtStatus: () =>
         world.goatbro
            ? ["<32>{#p/asriel2}* 离死不远了。"]
            : SAVE.data.b.s_state_chilldrake
               ? ["<32>{#p/story}* Chilldrake is flaking apart."]
               : ["<32>{#p/story}* Stardrake is flaking apart."],
      idleTalk1: () =>
         SAVE.data.b.s_state_chilldrake
            ? ["<08>{#p/basic}{~}Brush my teeth?\nNo way in heck!"]
            : ["<08>{#p/basic}{~}Try not to get \"spaced\" out.."],
      idleTalk2: () =>
         SAVE.data.b.s_state_chilldrake
            ? ["<08>{#p/basic}{~}No bedtime for this bird!"]
            : ["<08>{#p/basic}{~}I'm just in my moon pun \"phase\""],
      idleTalk3: () =>
         SAVE.data.b.s_state_chilldrake
            ? ["<08>{#p/basic}{~}Who needs parents anyway!?"]
            : ["<08>{#p/basic}{~}已经好\n几“光年”\n没回家了.."],
      idleTalk4: () =>
         SAVE.data.b.s_state_chilldrake
            ? ["<08>{#p/basic}{~}Live wild and free, I say!"]
            : ["<08>{#p/basic}{~}Oh, it's on.\n\"Tachy- on.\""],
      idleTalk5: () =>
         SAVE.data.b.s_state_chilldrake
            ? ["<08>{#p/basic}{~}Nobody tells ME what to do!"]
            : ["<08>{#p/basic}{~}Want a fight?\n\"Comet\" me, bro."],
      idleTalk6: () =>
         SAVE.data.b.s_state_chilldrake
            ? ["<08>{#p/basic}{~}Authority be darned!"]
            : ["<08>{#p/basic}{~}Don't ruin the \"atmos- phere..\""],
      idleTalk7: () =>
         SAVE.data.b.s_state_chilldrake
            ? ["<08>{#p/basic}{~}Trim my claws?\nNo way in heck!"]
            : ["<08>{#p/basic}{~}It's not free, it's \"zero G\""],
      jokeStatus: () =>
         SAVE.data.b.s_state_chilldrake
            ? ["<32>{#p/story}* Chilldrake is losing faith in its rebellion."]
            : ["<32>{#p/story}* Stardrake对自己的\n  五“星”级笑话感到满意。"],
      jokeTalk0: () =>
         SAVE.data.b.s_state_chilldrake
            ? ["<08>{#p/basic}{~}At least you admit it."]
            : ["<08>{#p/basic}{~}That wasn't s'posed to be funny!"],
      jokeTalk1: () =>
         SAVE.data.b.s_state_chilldrake
            ? ["<08>{#p/basic}{~}You don't know my cause!"]
            : ["<08>{#p/basic}{~}What are YOU laughin' at!?"],
      jokeTalk2: () =>
         SAVE.data.b.s_state_chilldrake
            ? ["<08>{#p/basic}{~}Do you..\nreally.."]
            : ["<08>{#p/basic}{~}看到没！？\n笑了！\n老妈是\n对的！"],
      jokeTalk3: () =>
         SAVE.data.b.s_state_chilldrake
            ? ["<08>{#p/basic}{~}I don't think you.."]
            : ["<08>{#p/basic}{~}Thanks, you're all great."],
      jokeTalk4: () =>
         SAVE.data.b.s_state_chilldrake
            ? ["<08>{#p/basic}{~}To tell you the truth.."]
            : ["<08>{#p/basic}{~}You have good taste!!"],
      jokeText0: () =>
         SAVE.data.b.s_state_chilldrake
            ? ["<32>{#p/human}* (You agree with Chilldrake.)"]
            : ["<32>{#p/human}* (You laugh at Stardrake's remark.)"],
      jokeText1: () =>
         SAVE.data.b.s_state_chilldrake
            ? ["<32>{#p/human}* (But it hasn't said anything you could agree with yet.)"]
            : ["<32>{#p/human}* (But it hasn't said anything you could laugh at yet.)"],
      jokeText2: () =>
         SAVE.data.b.s_state_chilldrake
            ? ["<32>{#p/human}* (You agree with Chilldrake.)"]
            : ["<32>{#p/human}* （你对Stardrake的笑话\n  回以大笑。）"],
      jokeText3: () =>
         SAVE.data.b.s_state_chilldrake
            ? ["<32>{#p/human}* (You double down on your agreement with Chilldrake.)"]
            : ["<32>{#p/human}* (You continue to laugh at Stardrake's puns.)"],
      name: () => (SAVE.data.b.s_state_chilldrake ? "* Chilldrake" : "* Stardrake"),
      punTalk1: () =>
         SAVE.data.b.s_state_chilldrake
            ? ["<08>{#p/basic}{~}Only Starry can do that."]
            : ["<08>{#p/basic}{~}Is that s'posed to be funny?"],
      punTalk2: () =>
         SAVE.data.b.s_state_chilldrake ? ["<08>{#p/basic}{~}You ain't Starry."] : ["<08>{#p/basic}{~}Ha.. Ha.."],
      punTalk3: () =>
         SAVE.data.b.s_state_chilldrake
            ? ["<08>{#p/basic}{~}Quit copying my friends."]
            : ["<08>{#p/basic}{~}I've heard that one."],
      punText1: ["<32>{#p/human}* (You make a space pun.)"],
      randStatus1: () =>
         SAVE.data.b.s_state_chilldrake
            ? ["<32>{#p/story}* Chilldrake is wondering where Starry went."]
            : ["<32>{#p/story}* Stardrake is assessing the crowd."],
      randStatus2: () =>
         SAVE.data.b.s_state_chilldrake
            ? ["<32>{#p/story}* Chilldrake is chanting an anarchist spell."]
            : ["<32>{#p/story}* Stardrake is practicing its next pun."],
      randStatus3: () =>
         SAVE.data.b.s_state_chilldrake
            ? ["<32>{#p/story}* Chilldrake starts a one- monster riot."]
            : ["<32>{#p/story}* Stardrake被自己想出的\n  下一个双关笑话逗笑了。"],
      randStatus4: () => ["<32>{#p/story}* Smells like wet pillows."],
      randStatus5: () =>
         SAVE.data.b.s_state_chilldrake
            ? ["<32>{#p/story}* Smells like body spray."]
            : ["<32>{#p/story}* Stardrake sighs in relief, realizing its own name is in fact not a pun."],
      status1: () =>
         SAVE.data.b.s_state_chilldrake
            ? ["<32>{#p/story}* Chilldrake saunters up!"]
            : ["<32>{#p/story}* Stardrake flutters forth!"]
   },
   b_opponent_jerry: {
      act_check: () =>
         SAVE.data.b.spared_jerry
            ? world.goatbro
               ? [
                  "<33>{#p/asriel2}* Jerry, the undisputable jerk.\n* I refuse to believe one flirt could have that much influence."
               ]
               : [
                  "<32>{#p/story}* JERRY - ATK 0 DEF 30\n* A born-again monster, awakened with the power of friendship!"
               ]
            : world.goatbro
               ? [
                  "<32>{#p/asriel2}* Jerry，公认的傻帽。\n* 他就是个不折不扣的废物， 一文不值。"
               ]
               : ["<32>{#p/story}* JERRY - 攻击0 防御30\n* 大家都认识Jerry。\n* 会延长攻击时间。"],
      act_flirt: () =>
         SAVE.data.b.spared_jerry
            ? ["<32>{#p/human}* (You flirt with Jerry.)\n* (It appreciates the compliment.)"]
            : 5 <= world.flirt
               ? ["<32>{#p/human}* (You call on your experience, and deliver a life-changing flirt.)"]
               : [
                  "<32>{#p/human}* (You flirt with Jerry.)",
                  "<32>{#p/basic}* Jerry seems to like you a little too much now."
               ],
      act_ditch: () => ["<32>{#p/human}* （你甩掉了Jerry。）"],
      flirtStatus: ["<32>{#p/story}* Jerry's redemption arc begins."],
      flirtStatusWeird: ["<32>{#p/story}* This is wrong on so many levels."],
      flirtTalk: [
         "<08>{#p/basic}{~}You... y-you...",
         "<08>{#p/basic}{~}Just for you, I'll...",
         "<08>{#p/basic}{~}I'll be the best person I can be!"
      ],
      flirtTalkWeird: ["<08>{#p/basic}{~}*licks lips*"],
      genoStatus: ["<32>{#p/asriel2}* Jerry。"],
      hurtStatus: () => (world.goatbro ? ["<32>{#p/asriel2}* 离死不远了。"] : ["<32>{#p/story}* Jerry is wounded."]),
      idleTalk1: () =>
         SAVE.data.b.spared_jerry
            ? ["<08>{#p/basic}{~}I'm so glad we're here!"]
            : ["<08>{#p/basic}{~}你们\n不觉得\n无聊吗？"],
      idleTalk2: () =>
         SAVE.data.b.spared_jerry
            ? ["<08>{#p/basic}{~}Can we do this more often??"]
            : ["<08>{#p/basic}{~}我们到底\n为什么在\n干这事？"],
      idleTalk3: () =>
         SAVE.data.b.spared_jerry
            ? ["<08>{#p/basic}{~}Hey, you guys are the BEST!"]
            : ["<08>{#p/basic}{~}Wow, you guys SUCK at this."],
      idleTalk4: () =>
         SAVE.data.b.spared_jerry
            ? ["<08>{#p/basic}{~}Does anyone want a hug?"]
            : ["<08>{#p/basic}{~}嘘嘘嘘！\n别吵，让我思考！！"],
      idleTalkSolo1: () =>
         SAVE.data.b.spared_jerry ? ["<08>{#p/basic}{~}Thanks for being here!"] : ["<08>{#p/basic}{~}Awkwarrd."],
      idleTalkSolo2: () =>
         SAVE.data.b.spared_jerry
            ? ["<08>{#p/basic}{~}You're awesome!\nJust saying."]
            : ["<08>{#p/basic}{~}所以，\n你在做\n什么？"],
      idleTalkSolo3: () =>
         SAVE.data.b.spared_jerry
            ? ["<08>{#p/basic}{~}Wouldn't trade ya for the galaxy."]
            : ["<08>{#p/basic}{~}The signal here sucks."],
      idleTalkSolo4: () =>
         SAVE.data.b.spared_jerry
            ? ["<08>{#p/basic}{~}I love humans!"]
            : ["<08>{#p/basic}{~}Must be nice being HUMAN.."],
      name: "* Jerry",
      randStatus1: () =>
         SAVE.data.b.spared_jerry
            ? ["<32>{#p/story}* Jerry is living care-free."]
            : ["<32>{#p/story}* Jerry eats powdery food and licks its hands proudly."],
      randStatus2: () =>
         SAVE.data.b.spared_jerry
            ? ["<32>{#p/story}* Jerry giggles from happiness."]
            : ["<32>{#p/story}* Jerry sneezes without covering its nose."],
      randStatus3: () =>
         SAVE.data.b.spared_jerry
            ? ["<32>{#p/story}* Jerry lets out a squeal of excitement."]
            : ["<32>{#p/story}* Jerry打了个哈欠。"],
      randStatus4: () =>
         SAVE.data.b.spared_jerry
            ? ["<32>{#p/story}* Smells like...... Jerry?"]
            : ["<32>{#p/story}* Smells like...... Jerry."],
      status1: ["<32>{#p/story}* Jerry clings to you!"],
      ditchResult: () =>
         SAVE.data.b.spared_jerry
            ? battler.alive.length === 1
               ? ["<32>{#p/basic}* The other monster wishes Jerry was still here..."]
               : ["<32>{#p/basic}* The other monsters wish Jerry was still here..."]
            : battler.alive.length === 1
               ? ["<32>{#p/basic}* The other monster celebrates Jerry's disappearance."]
               : ["<32>{#p/basic}* The other monsters celebrate Jerry's disappearance."]
   },
   b_opponent_mouse: {
      act_check: () =>
         world.goatbro
            ? ["<32>{#p/asriel2}* Whizkarat，流浪猫。\n* 早已活得浑浑噩噩。"]
            : ["<33>{#p/story}* WHIZKARAT - 攻击16 防御8\n* 这只以城为家的时髦的猫\n  只想过简单的生活。"],
      act_check2: [
         "<33>{#p/story}* WHIZKARAT - ATK 16 DEF 8\n* This posh city cat regrets going where it doesn't belong."
      ],
      act_check3: [
         "<33>{#p/story}* WHIZKARAT - ATK 16 DEF 8\n* This reformed country cat is quite pleased with itself."
      ],
      act_check4: ["<33>{#p/story}* WHIZKARAT - ATK 16 DEF 8\n* This reformed country cat has taken a liking to you."],
      act_direct: ["<32>{#p/human}* （你告诉Whizkarat一个\n  关于老鼠的事实。"],
      act_direct2: [
         "<32>{#p/human}* （你把你知道的关于老鼠的全部知识\n  告诉了Whizkarat。）",
         "<32>{#p/basic}* 突然间..！"
      ],
      act_direct3: ["<32>{#p/human}* (You try to tell Whizkarat more, but it's already found its way.)"],
      act_disown: [
         "<32>{#p/human}* （你拔下了Whizkarat\n  脸上的一根胡须。）",
         "<32>{#p/basic}* Whizkarat发出了刺耳的嘶嘶声！"
      ],
      act_disown2: [
         "<32>{#p/human}* (You pluck another whisker from Whizkarat's face.)",
         "<32>{#p/basic}* Whizkarat scurries away!"
      ],
      act_disown3: ["<32>{#p/human}* (You try to pluck a whisker, but Whizkarat pretends it has none.)"],
      act_flirt: ["<32>{#p/human}* (You make a cute remark and scratch Whizkarat's neck.)"],
      disownStatus: () =>
         world.goatbro ? ["<32>{#p/asriel2}* Whizkarat."] : ["<32>{#p/story}* Whizkarat逐渐变得不再冷静。"],
      disownTalk1: ["<08>{#p/basic}{~}把你的\n爪子\n拿开..！"],
      flirtTalk: ["<08>{#p/basic}{~}No pussy- cats allowed."],
      flirtTalk2: ["<08>{#p/basic}{~}\x00*purrs gently*"],
      genoStatus: ["<32>{#p/asriel2}* Whizkarat."],
      hurtStatus: () =>
         world.goatbro ? ["<32>{#p/asriel2}* 离死不远了。"] : ["<32>{#p/story}* Whizkarat is nearing demise."],
      idleTalk1: ["<08>{#p/basic}{~}What food do they eat?"],
      idleTalk2: ["<08>{#p/basic}{~}Where do they hide?"],
      idleTalk3: ["<08>{#p/basic}{~}How do they speak?"],
      idleTalk4: ["<08>{#p/basic}{~}Do they dream?"],
      initTalk1: ["<08>{#p/basic}{~}Alas, here I stand."],
      initTalk2: ["<08>{#p/basic}{~}Oh, how I lose myself.."],
      initTalk3: ["<08>{#p/basic}{~}事态\n并不\n理想。"],
      initTalk4: ["<08>{#p/basic}{~}Could you help me?"],
      name: "* Whizkarat",
      randStatus1: ["<32>{#p/story}* Whizkarat fantasizes about getting down on all fours."],
      randStatus2: ["<32>{#p/story}* Whizkarat scans the area."],
      randStatus3: ["<32>{#p/story}* Whizkarat正试图装成\n  自己很小的样子。"],
      randStatus4: ["<32>{#p/story}* Smells like top-twenty-cheese."],
      remindStatus: () =>
         world.goatbro
            ? ["<32>{#p/asriel2}* Whizkarat."]
            : ["<32>{#p/story}* Whizkarat只需要一点\n  小小的帮助。"],
      remindTalk1: ["<08>{#p/basic}{~}住在\n洞里，\n是吗..？"],
      remindTalk2: ["<08>{#p/basic}{~}会像\n玩具\n吱吱叫，\n是吗..？"],
      remindTalk3: ["<08>{#p/basic}{~}从现在\n开始，\n我应该像\n老鼠一样\n生活。"],
      safeStatus: () =>
         world.goatbro ? ["<32>{#p/asriel2}* 不堪一击。"] : ["<32>{#p/story}* Whizkarat has found its way."],
      safeTalk1: ["<08>{#p/basic}{~}Wonder- ful..."],
      safeTalk2: ["<08>{#p/basic}{~}Simply splen- did..."],
      status1: ["<32>{#p/story}* Whizkarat来了！"]
   },
   b_opponent_doggo: {
      act_check: () =>
         world.goatbro
            ? ["<32>{#p/asriel2}* Doggo，一条不顺眼的狗。\n* 这个蠢货怎么又上岗了？"]
            : ["<32>{#p/story}* DOGGO - 攻击13 防御7\n* 一点风吹草动便能让它兴奋。\n* 喜好之一：拥抱。"],
      act_check2: ["<32>{#p/story}* DOGGO - 攻击13 防御7\n* 甚至难以看见它自己..."],
      act_check3: ["<32>{#p/story}* DOGGO - 攻击13 防御7\n* 一只非常兴奋的狗，\n  正在享受其所好。"],
      act_check4: ["<32>{#p/story}* DOGGO - 攻击13 防御7\n* 在你眼里，这只狗在生活中\n  非常地孤独。"],
      act_flirt: () => ["<32>{#p/human}* （你对Doggo调情。）"],
      act_cuddle: () => ["<32>{#p/human}* （你紧紧地抱住Doggo。）"],
      fetch: () => [
         "<32>{#p/human}* （你将扳手扔了出去。）\n* （狗狗跑出去捡了回来。）\n* （你们就这样玩了一会巡回游戏。）"
      ],
      fetchTalk: pager.create(
         0,
         ["<11>{#p/basic}{~}哈！！\n有趣的扳手\n出现了！"],
         ["<11>{#p/basic}{~}哈！！\n又出现了！"]
      ),
      fetchTalkX1: ["<11>{#p/basic}{~}它去哪\n了！？"],
      fetchTalkX2: ["<11>{#p/basic}{~}我的扳手\n在哪里！？"],
      flirt1: ["<11>{#p/basic}{~}（情不自禁\n地脸红）"],
      invisStatus: () =>
         world.goatbro ? ["<32>{#p/asriel2}* 不堪一击。"] : ["<32>{#p/story}* Doggo找不到你了。"],
      name: "* Doggo",
      fetchStatus: ["<32>{#p/story}* Doggo喜欢巡回游戏！"],
      fetchpet: ["<32>{#p/human}* （但是Doggo忙于寻找扳手，\n没时间让你摸。）"],
      fetchflirt: ["<32>{#p/human}* （但是Doggo忙于寻找扳手，\n没时间听你说话。）"],
      fetchcuddle: ["<32>{#p/human}* （但是Doggo忙于寻找扳手，\n没时间让你抱。）"],
      normaStatus: () => (world.goatbro ? ["<32>{#p/asriel2}* Doggo。"] : ["<32>{#p/story}* Doggo知道你在这里。"]),
      pet: () => [
         "<32>{#p/human}* （你摸了摸Doggo。）",
         ...(world.goatbro
            ? [
               [],
               ["<32>{#p/asriel2}* ...又摸？"],
               ["<32>{#p/asriel2}* 摸狗有那么有趣吗..."],
               ["<32>{#p/asriel2}* ...有趣吗？"],
               ["<32>{#p/asriel2}* 蠢死了。"],
               ["<32>{#p/asriel2}* 你非得要这么摸吗？"],
               ["<32>{#p/asriel2}* ...非得摸吗？"],
               ["<32>{#p/asriel2}* 我看真是。"],
               ["<32>{#p/asriel2}* ..."],
               ["<32>{#p/asriel2}* 事态快要失控了..."],
               ["<32>{#p/asriel2}* 还摸？\n* 没完了是吧..."],
               ["<32>{#p/asriel2}* 哇哦。\n* 后面忘了。"],
               ["<32>{#p/asriel2}* 你玩得可真是不亦乐乎啊。"],
               ["<32>{#p/asriel2}* ..."]
            ][Math.min(battler.volatile[0].vars.pet - 1, 13)]
            : [])
      ],
      cuddle: pager.create(
         0,
         ["<11>{#p/basic}{~}抱抱！？\n行吧，至少\n我知道它在\n哪里了！"],
         ["<11>{#p/basic}{~}又抱！？"]
      ),
      petStatus: () =>
         world.goatbro ? ["<32>{#p/asriel2}* 不堪一击。"] : ["<32>{#p/story}* Doggo已经被摸过了。"],
      petTalk1: ["<11>{#p/basic}{~}啥！！！\n我被摸了！"],
      petTalk2: ["<11>{#p/basic}{~}WHERE'S THAT COMING FROM!?"],
      petTalk3: ["<11>{#p/basic}{~}THERE'S NO END TO IT!!"],
      petTalk4: ["<11>{#p/basic}{~}WELL, THIS IS THOROUGH!!!"],
      petTalk5: ["<11>{#p/basic}{~}(Dies)"],
      petTalk6: ["<11>{#p/basic}{~}(Comes back to life)"],
      petTalk7: ["<11>{#p/basic}{~}IT JUST KEEPS COMING!"],
      petTalk8: ["<11>{#p/basic}{~}AND COMING!!"],
      petTalk9: ["<11>{#p/basic}{~}AND COMINGGG!!!"],
      petTalk10: ["<11>{#p/basic}{~}OK.\nThat's enough."],
      petTalk11: ["<11>{#p/basic}{~}I said \"that's enough!\""],
      petTalk12: ["<11>{#p/basic}{~}Oh my god, it just doesn't stop!"],
      petTalk13: ["<11>{#p/basic}{~}OH MY GOD, IT REALLY DOESN'T STOP!!"],
      petTalk14: ["<11>{#p/basic}{~}AHHHHHHH!!!"],
      query1: ["<11>{#p/basic}{~}别想逃！"],
      query2: ["<11>{*}{#p/basic}{~}哈！\n它动了！\n它肯定动了！{^30}{%}"],
      query3: ["<11>{#p/basic}{~}我倒要看看\n这次它还动吗？"],
      status1: () => (world.goatbro ? ["<32>{#p/asriel2}* Doggo。"] : ["<32>{#p/story}* Doggo挡住了去路！"]),
      sussy: () =>
         world.goatbro ? ["<32>{#p/asriel2}* Doggo。"] : ["<32>{#p/basic}* Doggo对你的行动\n  十分戒备。"]
   },
   b_opponent_lesserdog: {
      act_check: () =>
         world.goatbro
            ? ["<32>{#p/asriel2}* Canis Minor，一条蠢狗。\n* 估计他都不知道自己为啥在这。"]
            : ["<32>{#p/story}* CANIS MINOR - ATK 12 DEF 2\n* Wields a shiny dogger made of fido-nium."],
      act_check2: [
         "<32>{#p/story}* CANIS MINOR - ATK 12 DEF 2\n* Scarred for life, this puppy wants to turn tail and run."
      ],
      act_check3: [
         "<32>{#p/story}* CANIS MINOR - ATK 12 DEF 2\n* It's necks-in-line for the galaxy's tallest monster."
      ],
      act_check4: ["<32>{#p/story}* CANIS MINOR - ATK 12 DEF 2\n* Trying its best to decipher your advanced petting."],
      act_check5: ["<32>{#p/story}* CANIS MINOR - ATK 12 DEF 2\n* The journey for this puppy has only just begun."],
      act_flirt: ["<32>{#p/human}* (You tell Canis Minor you love it by petting it in morse code.)"],
      act_handshake: [
         "<32>{#p/human}* （你把手放在Canis Minor的头上\n  晃啊晃，抚摸着它的毛。）"
      ],
      act_inquire: [
         "<32>{#p/human}* (You pet Canis Minor and ask it who's a good dog. It barks its answer excitedly.)"
      ],
      act_tickle: [
         "<32>{#p/human}* (You tickle Canis Minor's sides, thereby petting it.)\n* (It's a frenzy of excitement.)"
      ],
      fetch: () => [
         "<32>{#p/human}* (You throw the spanner.)\n* (The dog elongates its neck to reach it.)",
         "<32>{#p/human}* (You play fetch for a while.)",
         ...(world.goatbro ? ["<32>{#p/asriel2}* But why though?"] : [])
      ],
      fetchStatus: ["<32>{#p/story}* Canis Minor loves fetch!"],
      fetchTalk: ["<11>{#p/basic}{~}(Pants fast)"],
      hurtStatus: () =>
         world.goatbro
            ? ["<32>{#p/asriel2}* 离死不远了。"]
            : ["<32>{#p/story}* Canis Minor tucks its tail between its legs."],
      name: "* Canis Minor",
      petTalk1: ["<11>{#p/basic}{~}(Pant pant)"],
      petTalk2: ["<11>{#p/basic}{~}（轻微的\n犬叫声）"],
      petTalk3: ["<11>{#p/basic}{~}(Wag wag)"],
      petTalk4: ["<11>{#p/basic}{~}（想着吃的）"],
      petTalk5: ["<11>{#p/basic}{~}（喘气！\n喘气！）"],
      petTalk6: ["<11>{#p/basic}{~}(Excited noises)"],
      petTalk7: ["<11>{#p/basic}{~}(Motor revving)"],
      petTalk8: ["<11>{#p/basic}{~}(Plane takeoff)"],
      petTalk9: ["<11>{#p/basic}{~}(Kettle whistle)"],
      petTalk10: ["<11>{#p/basic}{~}(...)"],
      petTalk11: ["<11>{#p/basic}{~}(Faraway bark)"],
      petTalk12: ["<11>{#p/basic}{~}(Bark)"],
      petText1: () => ["<32>{#p/human}* （你只是稍微抬了下手。）", "<32>{#p/basic}* 好兴奋哦！"],
      petText2: () => [
         "<32>{#p/human}* （你轻轻地摸了一下狗子。）",
         "<32>{#p/basic}* 它已经兴奋过头了...",
         ...(world.goatbro ? ["<32>{#p/asriel2}* 狗子们还真喜欢被摸啊。"] : [])
      ],
      petText3: () => [
         "<32>{#p/human}* （你摸了摸Canis Minor。）",
         "<32>{#p/basic}* 它仰起头，迎向你的手心。",
         ...(world.goatbro ? ["<32>{#p/asriel2}* 够了，你都摸过它了。\n* 真没必要继续摸了。"] : [])
      ],
      petText4: () => [
         "<32>{#p/human}* （你摸了摸Canis Minor。）",
         "<32>{#p/basic}* 真是只好狗狗。",
         ...(world.goatbro ? ["<32>{#p/asriel2}* 继续摸它有必要么？"] : [])
      ],
      petText5: () => [
         "<32>{#p/human}* （你摸了摸Canis Minor。）",
         "<32>{#p/basic}* 它的兴奋永无止境...",
         ...(world.goatbro ? ["<32>{#p/asriel2}* 别摸了。"] : [])
      ],
      petText6: () => [
         "<32>{#p/human}* （你摸了摸Canis Minor。）",
         "<32>{#p/basic}* 会心一摸！\n* 狗子的兴奋度增加了。",
         ...(world.goatbro ? ["<32>{#p/asriel2}* 天呐，$(name)。"] : [])
      ],
      petText7: () => [
         "<32>{#p/human}* （你得跳起来才摸得到狗子了。）",
         ...(world.goatbro ? ["<32>{#p/asriel2}* 我们不能以摸狗为生。"] : [])
      ],
      petText8: () => [
         "<32>{#p/human}* （你想摸摸Canis Minor，\n  结果，连够都够不到。）",
         "<32>{#p/basic}* 不过它还是更加兴奋了。",
         ...(world.goatbro ? ["<32>{#p/asriel2}* 我们真要摸一整天狗吗...？"] : [])
      ],
      petText9: () => [
         "<32>{#p/human}* （你摸了摸Canis Minor。）",
         "<32>{#p/basic}* 根本没法停下这场闹剧。",
         ...(world.goatbro ? ["<32>{#p/asriel2}* ..."] : [])
      ],
      petText10: () => [
         "<32>{#p/human}* （你摸了摸Canis Minor。）",
         "<32>{#p/basic}* 不积跬步，无以至千里。\n  不积小摸，无以得巨狗。",
         ...(world.goatbro ? ["<32>{#p/asriel2}* 为啥要在这浪费时间？"] : [])
      ],
      petText11: () => [
         "<32>{#p/human}* （你呼唤着Canis Minor，\n  然而它已经听不到你说话了。）",
         ...(world.goatbro ? ["<32>{#p/asriel2}* 这下好了。\n* 再也别想够着它了。"] : [])
      ],
      petText12: () => ["<32>{#p/basic}* ...", ...(world.goatbro ? ["<32>{#p/asriel2}* ？？？"] : [])],
      petText13: () => [
         "<32>{#p/human}* （你又够得着Canis Minor了。）",
         ...(world.goatbro ? ["<32>{#p/asriel2}* 你跟我开玩笑呢是吧？"] : [])
      ],
      petText14: () => ["<32>{#p/human}* （你摸了摸Canis Minor。）"],
      petText15: () => [
         "<32>{#p/human}* （你摸了摸Canis Minor。）",
         "<32>{#p/basic}* 你可能有什么毛病。"
      ],
      petText16: () => [
         "<32>{#p/human}* （你没摸着Canis Minor，\n  但它很看好你的努力。）",
         ...(world.goatbro ? ["<32>{#p/asriel2}* 给我停下。"] : [])
      ],
      petText17: () => [
         "<32>{#p/human}* （你摸了摸Canis Minor。）",
         "<32>{#p/basic}* * 节制撸狗，人人有责。",
         ...(world.goatbro ? ["<32>{#p/asriel2}* 请你停下。"] : [])
      ],
      petText18: () => [
         "<32>{#p/human}* （你摸了摸Canis Minor。）",
         "<32>{#p/basic}* 闹剧还在继续。",
         ...(world.goatbro ? ["<32>{#p/asriel2}* ..."] : [])
      ],
      petText19: () => [
         "<32>{#p/human}* （你够不着Canis Minor了。）",
         ...(world.goatbro ? ["<32>{#p/asriel2}* 好了，该结束了。\n* 赶紧杀了这个蠢货。"] : [])
      ],
      petText20: () => [
         "<32>{#p/human}* （开玩笑吧。）",
         "<32>{#p/basic}* ...开玩笑吧。",
         ...(world.goatbro ? ["<32>{#p/asriel2}* 开玩笑吧..."] : [])
      ],
      statusX: ["<32>{#p/asriel2}* 不堪一击。"],
      status0: () => (world.goatbro ? ["<32>{#p/asriel2}* Canis Minor。"] : ["<32>{#p/story}* Canis Minor出现了。"]),
      status1: () =>
         world.goatbro
            ? ["<32>{#p/asriel2}* Canis Minor。"]
            : ["<32>{#p/story}* Canis Minor tilts its head to one side."],
      status2: () =>
         world.goatbro
            ? ["<32>{#p/asriel2}* Canis Minor。"]
            : ["<32>{#p/story}* Canis Minor thinks your weapon is a dog treat."],
      status3: () =>
         world.goatbro
            ? ["<32>{#p/asriel2}* Canis Minor。"]
            : ["<32>{#p/story}* Canis Minor is not really paying attention."],
      status4: () => (world.goatbro ? ["<32>{#p/asriel2}* Canis Minor。"] : ["<32>{#p/story}* Smells like dog chow."]),
      status5: () =>
         world.goatbro ? ["<32>{#p/asriel2}* Canis Minor。"] : ["<32>{#p/story}* Canis Minor在兴奋地汪汪叫。"],
      status6: () =>
         world.goatbro ? ["<32>{#p/asriel2}* Canis Minor。"] : ["<32>{#p/story}* Canis Minor is overstimulated."],
      status7: () =>
         world.goatbro
            ? ["<32>{#p/asriel2}* Canis Minor。"]
            : ["<32>{#p/story}* Canis Minor shows no signs of stopping."],
      status8: () =>
         world.goatbro ? ["<32>{#p/asriel2}* Canis Minor。"] : ["<32>{#p/story}* Canis Minor is lowering."],
      status9: () =>
         world.goatbro ? ["<32>{#p/asriel2}* Canis Minor。"] : ["<32>{#p/story}* Canis Minor learns to code."],
      status10: () =>
         world.goatbro
            ? ["<32>{#p/asriel2}* Canis Minor。"]
            : ["<32>{#p/story}* Canis Minor is whining because it can't see you."],
      status11: () => (world.goatbro ? ["<32>{#p/asriel2}* Canis Minor。"] : ["<32>{#p/story}* Hello there."]),
      status12: () =>
         world.goatbro
            ? ["<32>{#p/asriel2}* Canis Minor。"]
            : ["<32>{#p/story}* Canis Minor is questioning your life choices."],
      status13: () =>
         world.goatbro
            ? ["<32>{#p/asriel2}* Canis Minor。"]
            : ["<32>{#p/story}* Canis Minor has gone where no dog has gone before."]
   },
   b_opponent_dogamy: {
      act_check: () =>
         world.goatbro
            ? ["<32>{#p/asriel2}* Dogamy，一条废狗。\n* 纯靠他的疯狗老婆过活。"]
            : ["<32>{#p/story}* DOGAMY - 14攻击 5防御\n* Dogaressa的老公。\n* 只认识他闻到的东西。"],
      act_check2: ["<32>{#p/story}* DOGAMY - 14攻击 5防御\n* 新近丧偶。\n* 只认识失去老婆的痛苦。"],
      act_check3: ["<32>{#p/story}* DOGAMY - 14攻击 5防御\n* Dogaressa的老公。\n* 认识的东西比先前更多了。"],
      act_check4: ["<32>{#p/story}* DOGAMY - 14攻击 5防御\n* Dogaressa的丈夫。\n* 并不介意分享...？"],
      act_check5: ["<32>{#p/story}* DOGAMY - 14攻击 5防御\n* Dogaressa的老公。\n* 并不介意离开...？"],
      fetchText: [
         "<32>{#p/human}* （你将扳手扔了出去。）\n* （狗狗们跑出去捡了回来。）\n* （你们就这样玩了一会巡回游戏。）"
      ],
      fetchTextLone: () => [
         "<32>{#p/human}* （你将扳手扔了出去。）\n* （但Dogamy没有理它，\n  任由其滚落到了边缘。）",
         ...(world.goatbro && SAVE.flag.n.ga_asrielSpannerComment++ < 1 ? ["<32>{#p/asriel2}* 预料到了。"] : [])
      ],
      flirtTalk1: ["<11>{#p/basic}{~}啊！\n但是为啥\n...！？"],
      flirtTalk2: ["<11>{#p/basic}{~}爱无处不在\n?"],
      flirtTalk3: ["<11>{#p/basic}{~}你刚才..."],
      flirtTalk4: ["<11>{#p/basic}{~}这只小狗在\n干什么？"],
      flirtText: [
         "<32>{#p/human}* （你对Dogamy调情。）",
         "<32>{#p/basic}* 你的... 信息素，\n  传到了Dogamy的鼻子上。"
      ],
      flirtTextLone: ["<32>{#p/human}* （你对Dogamy调情。）", "<32>{#p/basic}* Dogamy的表情没有发生变化。"],
      loneStatus: () =>
         world.goatbro
            ? ["<32>{#p/asriel2}* 只剩一个了。"]
            : ["<32>{#p/story}* Dogaressa一心想要踢\n  人类的尾巴。"],
      loneTalk1: ["<11>{#p/basic}{~}汪呜！"],
      loneTalk2: ["<11>{#p/basic}{~}呜——"],
      loneTalk3: ["<11>{#p/basic}{~}嗷呜..."],
      name: "* Dogamy",
      fetchStatus: ["<32>{#p/story}* 已婚的狗喜欢巡回游戏！"],
      fetchStatusX: ["<32>{#p/story}* 狗狗们的思绪正指数增长！"],
      otherPet: ["<11>{#p/basic}{~}..."],
      petNeedStatus: () =>
         world.goatbro
            ? ["<32>{#p/asriel2}* Dogamy and Dogaressa."]
            : ["<32>{#p/story}* Dogaressa正在寻求关爱。"],
      petStatus: () =>
         world.goatbro
            ? ["<32>{#p/asriel2}* 不堪一击。"]
            : ["<32>{#p/story}* 狗狗们的思绪增加了！"],
      petTalk1: ["<11>{#p/basic}{~}放开，\n你这个\n该死的\n人类。"],
      petTalk1x: ["<11>{#p/basic}{~}手拿开，\n你这只\n奇怪的\n小狗。"],
      petTalk2: ["<11>{#p/basic}{~}哇！！！\n来自另一只\n小狗的抚摸\n！！！"],
      petTalk3: ["<11>{#p/basic}{~}停下！\n别碰她！"],
      petTalk4: ["<11>{#p/basic}{~}那我呢\n......"],
      petTalk5: ["<11>{#p/basic}{~}谢谢你..."],
      petText: ["<32>{#p/human}* （你抚摸了Dogamy。）"],
      petTextLone: ["<32>{#p/human}* （你尝试抚摸Dogamy，\n  但他畏惧地缩起自己的头。）"],
      randTalk1: () =>
         world.goatbro
            ? ["<11>{#p/basic}{~}The prince has lost his mind..."]
            : ["<11>{#p/basic}{~}Take my wife...\n's fleas."],
      randTalk2: () =>
         world.goatbro ? ["<11>{#p/basic}{~}You have come far..."] : ["<11>{#p/basic}{~}Don't touch my hot dog."],
      randTalk3: () =>
         world.goatbro
            ? ["<11>{#p/basic}{~}We'll take you down!"]
            : ["<11>{#p/basic}{~}Number one puppy-dog eyes champs K-614!!"],
      randTalk4: () =>
         world.goatbro ? ["<11>{#p/basic}{~}You won't win this time..."] : ["<11>{#p/basic}{~}Let's kick human tail!!"],
      resmellStatus: () =>
         world.goatbro
            ? ["<32>{#p/asriel2}* Dogamy and Dogaressa."]
            : ["<32>{#p/story}* The dogs think that you may be a lost puppy."],
      resmellText1: [
         "<32>{#p/human}* （你让狗狗们再闻闻你。）",
         "<32>* （你闻起来仍然很古怪。）"
      ],
      resmellText2: [
         "<32>{#p/human}* （你让狗狗们再闻闻你。）",
         "<32>* （在泥里打了几个滚后，\n  你的气味正常了。）"
      ],
      resmellText3: [
         "<32>{#p/human}* （你让狗狗们再闻闻你，\n  但他们已经知道你的气味正常了。）"
      ],
      resmellTextFetch: [
         "<32>{#p/human}* （你让狗狗们闻闻你，\n  但他们正忙着做别的事。）"
      ],
      resmellTextLone: ["<32>{#p/human}* （你让Dogamy闻闻你，\n  但他连鼻子都没抬一下。）"],
      rollStatus: () =>
         world.goatbro
            ? ["<32>{#p/asriel2}* 你会把衣服弄脏的，$(name)。"]
            : ["<32>{#p/story}* 狗狗们也许想重新闻闻你。"],
      rollText: () => [
         "<32>{#p/human}* （你在泥里打了几个滚。）\n* （这泥好像是合成的。）",
         "<32>{#p/basic}* 你的气味有变化了...",
         ...(world.goatbro ? ["<32>{#p/asriel2}* 你在做什么。"] : [])
      ],
      rollText2: [
         "<32>{#p/human}* （你在泥里打了几个滚。）\n* （这泥好像是合成的。）",
         "<33>{#p/basic}* 你的气味已经变了。"
      ],
      rollTextLone: () => [
         "<32>{#p/human}* （你在Dogaressa的尘埃里打了几个滚。）",
         "<32>{#p/basic}* Dogamy更颓丧了。",
         ...(world.goatbro ? ["<32>{#p/asriel2}* ..."] : [])
      ],
      smellTalk1: ["<11>{#p/basic}{~}Hm?\nWhat's that smell?"],
      smellTalk2: ["<11>{#p/basic}{~}What!\nSmells like a..."],
      smellTalk3: ["<11>{#p/basic}{~}Ah!\nSuch a lovely smell..."],
      status1: () =>
         world.goatbro
            ? ["<32>{#p/asriel2}* Dogamy and Dogaressa."]
            : ["<32>{#p/story}* The dogs keep shifting their axes to protect each other."],
      status2: () =>
         world.goatbro
            ? ["<32>{#p/asriel2}* Dogamy and Dogaressa."]
            : ["<32>{#p/story}* The dogs are re-evaluating your smell."],
      status3: () =>
         world.goatbro
            ? ["<32>{#p/asriel2}* Dogamy and Dogaressa."]
            : ["<32>{#p/story}* The dogs are practicing for the next couples contest."],
      status4: () =>
         world.goatbro
            ? ["<32>{#p/asriel2}* Dogamy and Dogaressa."]
            : ["<32>{#p/story}* The dogs are whispering sweet nothings to each other."],
      susText: ["<32>{#p/basic}* The dogs still think you're a smelly human."],
      fetchTalk: ["<11>{#p/basic}{~}Fetch is so much fun!"],
      fetchTalkX: ["<11>{#p/basic}{~}Fetch with another pup!?"]
   },
   b_opponent_dogaressa: {
      act_check: () =>
         world.goatbro
            ? ["<32>{#p/asriel2}* Dogaressa，一条疯狗。\n* 没了她老公，分分钟发疯。"]
            : ["<32>{#p/story}* DOGARESSA - 14攻击 5防御\n* 这只小狗认为她丈夫很可爱。\n  仅限于气味的那种？"],
      act_check2: ["<32>{#p/story}* DOGARESSA - 14攻击 5防御\n* 这只小狗非常想念她的老公\n  仅限于被杀掉后的那种？"],
      act_check3: ["<32>{#p/story}* DOGARESSA - 14攻击 5防御\n* 对这只小狗来说\n  事态进展得很顺利。"],
      act_check4: [
         "<32>{#p/story}* DOGARESSA - 14攻击 5防御\n* 这只小狗发觉可爱的东西\n  不只有她老公。"
      ],
      act_check5: ["<32>{#p/story}* DOGAMY - ATK 14 DEF 5\n* This puppy is afraid for her hubby's safety."],
      fetchTextLone: () => [
         "<32>{#p/human}* （你将扳手扔了出去。）\n* （Dogaressa将其捡了起来，然后摔了个粉碎。）",
         ...(world.goatbro && SAVE.flag.n.ga_asrielSpannerComment++ < 1 ? ["<32>{#p/asriel2}* 预料到了。"] : [])
      ],
      flirtTalk1: ["<11>{#p/basic}{~}(Hey! Knock it off!)"],
      flirtTalk2: ["<11>{#p/basic}{~}(This just gets weirder and weirder.)"],
      flirtTalk3: ["<11>{#p/basic}{~}(... flirt with me! Ugh!)"],
      flirtTalk4: ["<11>{#p/basic}{~}(I think it loves me. A lot.)"],
      flirtText: [
         "<32>{#p/human}* （你对Dogaressa调情。）",
         "<32>{#p/basic}* 你的... 信息素，\n  传到了Dogaressa的鼻子上。"
      ],
      flirtTextLone: [
         "<32>{#p/human}* （你对Dogaressa调情。）",
         "<32>{#p/basic}* Dogaressa的表情没有发生变化。"
      ],
      loneStatus: () =>
         world.goatbro ? ["<32>{#p/asriel2}* 只剩一个了。"] : ["<32>{#p/story}* Dogamy is brokenhearted."],
      loneTalk1: ["<11>{#p/basic}{~}(Misery awaits you.)"],
      loneTalk2: ["<11>{#p/basic}{~}(You'll suffer for this.)"],
      name: "* Dogaressa",
      otherPet: ["<11>{#p/basic}{~}(...)"],
      petNeedStatus: () =>
         world.goatbro
            ? ["<32>{#p/asriel2}* Dogamy and Dogaressa."]
            : ["<32>{#p/story}* Dogamy is looking for affection."],
      petTalk1: ["<11>{#p/basic}{~}(That's not your husband, OK?)"],
      petTalk2: ["<11>{#p/basic}{~}(Well, don't leave me out!)"],
      petTalk3: ["<11>{#p/basic}{~}(Beware of dog.)"],
      petTalk4: ["<11>{#p/basic}{~}(A dog that pets dogs... amazing!)"],
      petTalk5: ["<11>{#p/basic}{~}(You're the best!)"],
      petText: ["<32>{#p/human}* （你抚摸了Dogaressa。）"],
      petTextLone: ["<32>{#p/human}* （你试图抚摸Dogaressa，\n  但她只是对你低吼。）"],
      randTalk1: () => (world.goatbro ? ["<11>{#p/basic}{~}(Indeed.)"] : ["<12>{#p/basic}{~}(Don't,\nactually...)"]),
      randTalk2: () => (world.goatbro ? ["<11>{#p/basic}{~}(Far enough.)"] : ["<11>{#p/basic}{~}(He means me.)"]),
      randTalk3: () =>
         world.goatbro
            ? ["<11>{#p/basic}{~}(By force, if necessary.)"]
            : ["<11>{#p/basic}{~}(Of course we were first.)"],
      randTalk4: () =>
         world.goatbro ? ["<11>{#p/basic}{~}(Time's up.)"] : ["<11>{#p/basic}{~}(Do humans have tails?)"],
      resmellTalkLone: ["<11>{#p/basic}{~}(Is that what you wanted??)\n(Huh?)"],
      resmellTextLone: [
         "<33>{#p/human}* （你激励Dogaressa来闻闻你，\n  她用鼻子使劲在你脸上\n  蹭来蹭去。）"
      ],
      rollTextLone: () => [
         "<32>{#p/human}* （你在Dogamy的尘埃里打了几个滚。）",
         "<32>{#p/basic}* Dogarassa更疯狂了。",
         ...(world.goatbro ? ["<32>{#p/asriel2}* ..."] : [])
      ],
      smellTalk1: ["<11>{#p/basic}{~}(A smell mystery...)"],
      smellTalk2: ["<11>{#p/basic}{~}(Are you actually a little puppy!?)"],
      smellTalk3: ["<11>{#p/basic}{~}(The smell of a weird puppy!)"],
      fetchTalk: ["<11>{#p/basic}{~}(We love to play fetch.)"],
      fetchTalkX: ["<11>{#p/basic}{~}(This dog can do anything!)"]
   },
   b_opponent_greatdog: {
      act_check: () =>
         world.goatbro
            ? ["<33>{#p/asriel2}* Canis Major，一条傻狗。\n* 这群狗里面，\n  属它头脑简单，四肢发达。"]
            : ["<32>{#p/story}* CANIS MAJOR - 15攻击 8防御\n* 太过兴奋，以至于将\n  战斗当作儿戏。"],
      act_check2: ["<32>{#p/story}* CANIS MAJOR - 15攻击 8防御\n* 渴望着关爱与照顾..."],
      act_check3: ["<32>{#p/story}* CANIS MAJOR - 15攻击 8防御\n* 已经累到虚脱了。"],
      act_flirt: [
         "<32>{#p/human}* （你对Canis Major调情。）",
         "<32>{#p/basic}* Canis Major尴尬地歪着头。"
      ],
      beckonText: [
         "<32>{#p/human}* （你叫了叫Canis Major。）",
         "<32>{#p/basic}* 它跃向你，甩了你满脸口水。"
      ],
      closeStatus: () =>
         world.goatbro ? ["<32>{#p/asriel2}* Canis Major。"] : ["<32>{#p/story}* Canis Major渴望着关爱。"],
      closeText: ["<32>{#p/human}* （你叫了叫Canis Major。）\n* （但狗狗只是竖了竖耳朵。）"],
      doneText: ["<32>{#p/basic}* Canis Major觉得你太无趣了。"],
      fetch: () =>
         world.goatbro
            ? [
               "<32>{#p/human}* （你扔出扳手。）\n* （Canis Major把它吸收进自己的身体，\n  然后若无其事地继续玩耍。）",
               "<32>{#p/asriel2}* 呃... 这河里吗。"
            ]
            : [
               "<32>{#p/human}* （你将扳手扔了出去。）\n* （狗狗跑出去捡了回来。）\n* （你们就这样玩了一会巡回游戏。）"
            ],
      hurtStatus: () =>
         world.goatbro ? ["<32>{#p/asriel2}* 离死不远了。"] : ["<32>{#p/story}* Canis Major正缓缓地喘着气。"],
      ignoreStatus1: () =>
         world.goatbro
            ? ["<32>{#p/asriel2}* Canis Major。"]
            : ["<32>{#p/story}* Canis Major只是想要一些关爱。"],
      ignoreStatus2: () =>
         world.goatbro ? ["<32>{#p/asriel2}* Canis Major。"] : ["<32>{#p/story}* Canis Major正在卖萌。"],
      name: "* Canis Major",
      fetchStatus: ["<32>{#p/story}* Canis Major喜欢巡回游戏！"],
      petStatus1: () =>
         world.goatbro
            ? ["<32>{#p/asriel2}* Canis Major。"]
            : ["<32>{#p/story}* Canis Major正用前爪拍打着地面。"],
      petStatus2: () =>
         world.goatbro ? ["<32>{#p/asriel2}* Canis Major。"] : ["<32>{#p/story}* Canis Major想要温柔的关爱。"],
      petStatus3: () =>
         world.goatbro ? ["<32>{#p/asriel2}* ..."] : ["<32>{#p/story}* 抚摸能量，百分之四十！"],
      petStatus4: () =>
         world.goatbro ? ["<32>{#p/asriel2}* 不堪一击。"] : ["<32>{#p/story}* Canis Major非常满足。"],
      petText0: ["<32>{#p/human}* （但是Canis Major离你太远了，\n  你摸不着它。）"],
      petText1: [
         "<32>{#p/human}* （Canis Major享受着你的抚摸，\n  它把整个身子都蜷缩在你的腿上。）",
         "<32>* （它太舒服了，呼呼睡着了。）",
         "<32>* （狗子打呼着，打呼着...）",
         "<32>* （...然后它醒了。）",
         "<32>{#p/basic}* Canis Major的兴奋度\n  毫无征兆地增加了！"
      ],
      petText2: [
         "<32>{#p/human}* （你想摸摸狗子...）",
         "<32>* （...然而它的兴奋能量\n  形成了一个反抚摸能量场。）"
      ],
      petText3: [
         "<32>{#p/human}* （你摸了摸狗狗。）\n* （他将自身全部重量都压到了\n  你身上。）",
         "<32>* （你的移动速度变慢了，但仍没有\n  给予狗狗足够的抚摸。）"
      ],
      petText4: [
         "<32>{#p/human}* （你果断地摸了摸狗狗。）\n* （抚摸能量现在到达了百分之百！）",
         "<32>{#p/basic}* Canis Major四肢朝天躺在地上。"
      ],
      petText5: [
         "<32>{#p/human}* （你揉了揉狗狗的肚皮。）",
         "<32>{#p/basic}* Canis Major幸福地呜叫着。"
      ],
      playText1: ["<32>{#p/human}* （但Canis Major不够兴奋，\n  不能和你一起玩。）"],
      playText2: [
         "<32>{#p/human}* （你变幻出了全息影像，想\n  让狗狗去追赶它。）",
         "<32>* （最终，全息影像无法聚合，\n  自动消散了。）",
         "<32>* （Canis Major收集了这个区域\n  残存的所有能量，并将其\n  带还给你。）",
         "<32>{#p/basic}* 疲惫的Canis Major把头\n  靠在了你身边..."
      ],
      playText3: ["<32>{#p/basic}* Canis Major精疲力尽，\n  不想再玩了。"],
      playText4: ["<32>{#p/human}* （但是Canis Major已经开始在玩\n  巡回游戏了。）"],
      status0: () => (world.goatbro ? ["<32>{#p/asriel2}* Canis Major。"] : ["<32>{#p/story}* Canis Major出现了。"]),
      status1: () =>
         world.goatbro ? ["<32>{#p/asriel2}* Canis Major。"] : ["<32>{#p/story}* Canis Major正紧紧地注视着你。"],
      status2: () =>
         world.goatbro
            ? ["<32>{#p/asriel2}* Canis Major。"]
            : ["<32>{#p/story}* Canis Major正等待你的指令。"],
      status3: () =>
         world.goatbro
            ? ["<32>{#p/asriel2}* Canis Major。"]
            : ["<32>{#p/story}* 有股鲜榨小狗汁的味道。"],
      waitText: ["<32>{#p/basic}* Canis Major逐渐向你靠近。"]
   },
   b_opponent_papyrus: {
      act_flirt: ["<32>{#p/human}* （你向Papyrus调情。）"],
      act_insult: ["<32>{#p/human}* （你骂了Papyrus一顿。）"],
      spanner: ["<32>{#p/human}* (You throw the spanner.)\n* (Papyrus catches it in his mouth and returns it to you.)"],
      spannerTalk1: ["<15>{#p/papyrus}{#f/20}WHAT A JAW- DROPPING MOVE!"],
      spannerTalk2: ["<15>{#p/papyrus}{#f/20}I COULD DO THIS ALL DAY!"],
      spannerTalk3: ["<15>{#p/papyrus}{#f/20}JUST LIKE THEY DO IT ON TV!"],
      spannerTalk4: ["<15>{#p/papyrus}{#f/20}捏嘿嘿！"],
      sparableSpannerTalk1: ["<15>{#p/papyrus}{#f/20}NOW, SHOW ME YOUR MERCY!"],
      sparableSpannerTalk2: ["<15>{#p/papyrus}{#f/20}..."],
      bullySpareTalk: [
         "<15>{#p/papyrus}{#f/27}SAY... IS IT GETTING DARK OUT HERE?",
         "<15>{#p/papyrus}{#f/27}MAYBE CAPTURING YOU WASN'T SUCH A GREAT IDEA...",
         "<15>{#f/15}YEAH!!! I CAN TELL YOU'RE DESPERATE FOR MY MERCY!",
         "<15>{#f/20}I, THE GREAT PAPYRUS, WILL OBLIGE YOU!!",
         "<15>{#f/20}I WILL {@fill=#f00}SPARE{@fill=#000} YOU, HUMAN!!!",
         "<15>{#f/27}SO... NOW'S YOUR CHANCE... TO ACCEPT MY {@fill=#f00}MERCY{@fill=#000}..."
      ],
      act_check: () =>
         world.genocide
            ? ["<32>{#p/story}* PAPYRUS - 攻击3 防御3\n* 亡兄之弟。"]
            : papreal()
               ? ["<32>{#p/story}* PAPYRUS - 攻击3 防御3\n* 依然相信着你。"]
               : ["<32>{#p/story}* PAPYRUS - 攻击20 防御20\n* 喜欢说“捏嘿嘿！”"],
      act_check2: ["<32>{#p/story}* PAPYRUS - 攻击20 防御20\n* 一切都很顺利。"],
      act_check3: ["<32>{#p/story}* PAPYRUS - 攻击20 防御20\n* 最最最仁慈的卫兵！"],
      capture1: [
         "<15>{#p/papyrus}{#f/20}LOOKS LIKE YOU'RE GOING TO THE CAPTURE ZONE!!",
         "<15>{#f/24}... ALSO KNOWN AS THE GARAGE.",
         "<15>{#f/20}A HEAVILY FORTIFIED GARAGE, THAT IS!",
         "<15>{#f/20}捏嘿嘿嘿嘿\n嘿嘿！！！"
      ],
      capture2: [
         "<15>{#p/papyrus}{#f/24}WELL!!! YOU MAY HAVE CLEVERLY ESCAPED BEFORE...",
         "<15>{#f/20}BUT THIS TIME, I'VE UPGRADED THE FACILITIES.",
         "<15>{#f/20}NOT ONLY WILL YOU BE STUCK...",
         "<15>{#f/15}BUT YOU WON'T EVEN WANT TO LEAVE!!!",
         "<15>{#f/20}捏嘿嘿嘿嘿\n嘿嘿！！！"
      ],
      capture3: [
         "<15>{#p/papyrus}{#f/20}YOU ARE... DETERMINED!",
         "<15>BUT!!\nIT JUST WON'T WORK ON ME!",
         "<15>I AM THE DETERMINEST!",
         "<99>{#f/24}AND IF YOU\nTHINK YOU ARE\nDETERMINESTER...",
         "<15>{#f/20}THAT IS WRONG!\nGRAMATICALLY WRONG!",
         "<15>{#f/24}BECAUSE THE CORRECT FORM WOULD BE...",
         "<15>{#f/20}NOT AS DETERMINEST AS PAPYRUS, THE DETERMINESTEST!",
         "<15>{#f/10}I HOPE YOU ENJOYED THIS LESSON.",
         "<15>{#f/20}捏嘿嘿嘿嘿\n嘿嘿！！！"
      ],
      capture4: [
         "<15>{#p/papyrus}{#f/24}ARE YOU SURE YOU CAN KEEP THIS UP?",
         "<15>{#f/21}BEING CAPTURED AGAIN MUST BE FRUSTRATING...",
         "<15>{#f/21}I DON'T WANT YOU TO GET MAD ABOUT FAILING REPEATEDLY...",
         "<15>{#f/20}PERHAPS NEXT TIME WE CAN SKIP THE BATTLE!",
         "<15>{#f/20}FOR NOW, THOUGH, IT'S OFF TO THE CAPTURE ZONE!!!",
         "<15>{#f/20}捏嘿嘿嘿嘿\n嘿嘿！！！"
      ],
      capture5: [
         "<15>{#p/papyrus}{#f/27}WOWIE... AGAIN???",
         "<15>{#f/15}WELL, IF YOU INSIST...!",
         "<15>{#f/20}捏嘿嘿嘿嘿\n嘿嘿！！！"
      ],
      checkTalk: ["<15>{#p/papyrus}{#f/20}捏嘿嘿！"],
      death1: () =>
         world.genocide
            ? ["<15>{#p/papyrus}{#f/27}不...\n不-不..."]
            : ["<15>{#p/papyrus}{#f/21}额，我没料到\n会这样..."],
      death2: () =>
         world.genocide
            ? ["<15>{#p/papyrus}{#f/21}SANS，我...", "<15>{#f/33}{@random=1.1/1.1}我让你失望了..."]
            : ["<15>{#p/papyrus}{#f/27}...幸-幸好，\n我的头还在！"],
      dots: ["<32>{#p/basic}* ..."],
      flirt0: ["<32>{#p/basic}* Cute."],
      flirt1: [
         "<15>{#p/papyrus}{#f/20}什么！？\n对我调——调——\n调情！？",
         "<15>你终于表露出\n你的{@fill=#f00}真实感受{@fill=#000}了！",
         "<15>但——但是！\n我可是个\n眼光很高的\n骷髅！！！",
         "<15>你又能做什么\n来回报我的\n爱意呢？？？"
      ],
      flirt2: [
         "<32>{#p/human}* (Your reply?){!}µµµ我没有\nµµµµ我会做µµµµµµµµ任何\nµµµµ意大利面µµµµµµ可取之处{#c/0/4/2}"
      ],
      flirt3a: ["<15>{#p/papyrus}{#f/24}这种\n自信的品格... \n让我想到了..."],
      flirt3b: ["<15>{#p/papyrus}{#f/24}这种\n谦逊的品格...\n让我想到了..."],
      flirt4: [
         "<15>{#f/22}我自己！！！",
         "<15>{#f/10}你完美地\n贴合了我的\n所有标准！！！",
         "<15>{#f/27}我想这意味着...\n我必须和你来场\n约会了？"
      ],
      flirt5: ["<15>{#p/papyrus}{#f/20}约会的事\n还是等到我抓住\n你之后再谈吧！"],
      flirt6: ["<32>{#p/human}* （你试着调情，但无济于事。）\n* （看来行动并不会使这场战斗\n  升温。）"],
      flirt7: ["<32>{#p/human}* （但Papyrus现在忙于战斗，\n  没时间听你说话。）"],
      flirtStatus1: ["<32>{#p/story}* Papyrus正在为约会考虑\n  要穿什么。"],
      flirtStatus2: ["<32>{#p/story}* Papyrus往他耳后拍了些\n  骨龙水。"],
      flirtStatus3: ["<32>{#p/story}* Papyrus正在为约会考虑\n  要煮什么。"],
      flirtStatus4: ["<32>{#p/story}* Papyrus往他耳后拍了些\n  番茄酱。"],
      flirtStatus5: ["<32>{#p/story}* Papyrus正在想着\n  sexy rectangles。"],
      flirtStatus6: ["<32>{#p/story}* Papyrus往他耳后拍了些\n  MTT牌面霜。"],
      flirtStatus7: ["<32>{#p/story}* Papyrus往他耳后拍了些\n  MTT牌动漫粉。"],
      flirtStatus8: ["<32>{#p/story}* Papyrus往他耳后拍了些\n  MTT牌可爱汁。"],
      flirtStatus9: ["<32>{#p/story}* Papyrus意识到他没有耳朵。"],
      flirtStatus10: ["<32>{#p/story}* Papyrus头上随便贴了一些药膏。"],
      flirtStatus11: ["<32>{#p/story}* ... 他还在想他的sexy rectangles."],
      hurtStatus: ["<32>{#p/story}* Papyrus 濒临失败。"],
      insult1: ["<15>{#p/papyrus}{#f/20}HOW SELFLESS!", "<15>{#f/21}YOU WANT ME TO FEEL BETTER ABOUT FIGHTING YOU..."],
      insult2: ["<15>{#p/papyrus}{#f/15}THERE'S NO NEED TO LIE TO YOURSELF!!!"],
      insult3: ["<32>{#p/human}* （你试着辱骂，但无济于事。）\n* （看来行动并不会使这场战斗\n  升温。）"],
      insult4: ["<32>{#p/human}* （但Papyrus现在忙于战斗，\n  没时间听你说话。）"],
      name: "* Papyrus",
      randomStatus1: ["<32>{#p/story}* Papyrus readies a bone attack."],
      randomStatus2: ["<32>{#p/story}* Papyrus prepares a non-bone attack then spends a minute fixing his mistake."],
      randomStatus3: ["<32>{#p/story}* Papyrus is cooking."],
      randomStatus4: ["<32>{#p/story}* Papyrus whispers \"Nyeh heh heh!\""],
      randomStatus5: ["<32>{#p/story}* Papyrus is rattling his bones."],
      randomStatus6: ["<32>{#p/story}* Papyrus is trying hard to play it cool."],
      randomStatus7: ["<32>{#p/story}* Papyrus is considering his options."],
      randomStatus8: ["<32>{#p/story}* Smells like bones."],
      randomStatus9: ["<32>{#p/story}* Papyrus remembered a good joke Sans told and is smiling."],
      spaghetti1: () => [
         "<15>{#p/papyrus}{#f/12}MY SPAGHETTI!",
         "<15>{#p/papyrus}{#f/13}AND YOU LOOK LIKE YOU'RE ENJOYING IT...",
         papreal()
            ? "<15>{#p/papyrus}{#f/27}WELL, I'M GLAD I COULD MAKE YOU HAPPY!"
            : [
               "<15>{#p/papyrus}{#f/27}WELL THEN!\nI LOOK FORWARD TO OUR MEAL TOGETHER!",
               "<15>{#p/papyrus}{#f/27}WELL THEN!\nI LOOK FORWARD TO MAKING SOME MORE FOR YOU!"
            ][(SAVE.data.n.state_papyrus_spaghet + 1) % 2]
      ],
      spaghetti2: ["<32>{#p/basic}* If Papyrus wasn't so busy fighting, he might've noticed that."],
      specialStatus1: ["<32>{#p/story}* Special attack."],
      specialStatus2: ["<32>{#p/story}* Papyrus is going all out."],
      specialStatus3: ["<32>{#p/story}* Papyrus has thrown all logic out the window."],
      specialStatus4: ["<32>{#p/story}* Papyrus notices the lack of logic and brings it back inside."],
      specialStatus5: ["<32>{#p/story}* Papyrus is sweating."],
      specialStatus6: ["<32>{#p/story}* Papyrus is at his wit's end."],
      status1: ["<32>{#p/story}* Papyrus正在饶恕你。"],
      status2: ["<32>{#p/story}* Papyrus挡住了去路！"],
      turnTalk0a: ["<15>{#p/papyrus}{#f/24}SO, YOU'RE SERIOUS..."],
      turnTalk0b: ["<15>{#p/papyrus}{#f/24}看来，\n你不想战斗..."],
      turnTalk0c: ["<15>{#p/papyrus}{#f/20}那就让我看看\n你会如何应对\n我传说中的\n‘蓝色攻击！’"],
      turnTalk0x: [
         "<15>{#p/papyrus}{#f/10}你现在是\n蓝的了。",
         "<15>{#f/10}那就是\n我的攻击！",
         "<15>{#f/20}捏嘿嘿嘿嘿嘿\n嘿嘿嘿！！！"
      ],
      turnTalk1a: ["<15>{#p/papyrus}{#f/20}瞧着吧！"],
      turnTalk1b: ["<15>{#p/papyrus}{#f/20}嗯...\n我在想我应该\n穿什么..."],
      turnTalk2a: ["<15>{#p/papyrus}{#f/20}你能跳多高呢？"],
      turnTalk2b: ["<15>{#p/papyrus}{#f/22}什么！？\n我才没有想着\n约会的事情呢！"],
      turnTalk3: () =>
         world.postnoot
            ? ["<15>{#p/papyrus}{#f/21}... 是不是只有\n我觉得\n气氛有点怪？"]
            : ["<15>{#p/papyrus}{#f/20}对！\n别逼我用出我的\n{@fill=#f00}特殊攻击{@fill=#000}！"],
      turnTalk4: () =>
         world.postnoot
            ? ["<15>{#p/papyrus}{#f/20}算了。\n应该没什么。"]
            : ["<15>{#p/papyrus}{#f/20}我都能嗅到\n我未来的\n人气了！！！"],
      turnTalk5: () =>
         world.postnoot
            ? ["<15>{#p/papyrus}{#f/20}我还从\n我的未来里\n看到了番茄酱！"]
            : ["<15>{#p/papyrus}{#f/20}PAPYRUS: UNPARALLELED SPAGHETTORE!"],
      turnTalk6: () =>
         world.postnoot
            ? ["<15>{#p/papyrus}{#f/20}AND A POSITION IN THE ELITE SQUAD!"]
            : ["<15>{#p/papyrus}{#f/20}PAPYRUS: ELITE SQUAD MEMBER!"],
      turnTalk7: ["<15>{#p/papyrus}{#f/10}UNDYNE WILL BE REALLY PROUD OF ME!!"],
      turnTalk8: ["<15>{#p/papyrus}{#f/20}THE KING WILL BUILD A STATUE OF ME IN THE CITADEL!!!"],
      turnTalk9: ["<15>{#p/papyrus}{#f/10}... AND I'LL MAKE SURE MY BROTHER GETS ONE TOO."],
      turnTalk10: ["<15>{#p/papyrus}{#f/27}WE'LL HAVE LOTS OF ADMIRERS!!\nBUT..."],
      turnTalk11a: ["<15>{#p/papyrus}{#f/20}HOW WILL I KNOW IF PEOPLE SINCERELY LIKE ME???"],
      turnTalk11b: ["<15>{#p/papyrus}{#f/20}WILL ANYONE LIKE ME LIKE YOU DO?"],
      turnTalk12: ["<15>{#p/papyrus}{#f/21}SOMEONE LIKE YOU IS REALLY RARE..."],
      turnTalk13a: ["<15>{#p/papyrus}{#f/21}I DON'T THINK THEY'LL LET YOU GO..."],
      turnTalk13b: ["<15>{#p/papyrus}{#f/21}AND DATING MIGHT BE KIND OF HARD..."],
      turnTalk14: ["<15>{#p/papyrus}{#f/26}AFTER YOU'RE CAPTURED AND SENT AWAY."],
      turnTalk15: ["<15>{#p/papyrus}{#f/17}URGH... WHO CARES!\nGIVE UP!!"],
      turnTalk16: ["<15>{#p/papyrus}{#f/15}GIVE UP OR FACE MY... {@fill=#f00}SPECIAL ATTACK{@fill=#000}!"],
      turnTalk17: ["<15>{#p/papyrus}{#f/20}YEAH!!!\nVERY SOON I WILL USE MY {@fill=#f00}SPECIAL ATTACK{@fill=#000}!"],
      turnTalk18: [
         "<15>{#p/papyrus}{#f/20}THIS IS YOUR LAST CHANCE... BEFORE MY {@fill=#f00}SPECIAL ATTACK{@fill=#000}!"
      ],
      turnTalk19: ["<15>{#p/papyrus}{#f/20}BEHOLD...!\nMY {@fill=#f00}SPECIAL ATTACK{@fill=#000}!"],
      turnTalk19x: [
         "<15>{#p/papyrus}{#f/15}捏嘿嘿！",
         "<15>{#f/20}NO HUMAN HAS EVER FACED MY {@fill=#f00}SPECIAL ATTACK{@fill=#000} BEFORE!",
         "<15>{#f/20}PREPARE TO BE CAPTURED, ONCE AND FOR ALL!"
      ],
      turnTalk20: ["<15>{#p/papyrus}{#f/20}特殊攻击，\n第一式！"],
      turnTalk21: ["<15>{#p/papyrus}{#f/20}SPECIAL ATTACK, FORMATION BETA!!"],
      turnTalk22: ["<15>{#p/papyrus}{#f/20}SPECIAL ATTACK, FORMATION GAMMA!!"],
      turnTalk23: ["<15>{#p/papyrus}{#f/20}SPECIAL ATTACK, FORMATION DELTA!!"],
      turnTalk24: [
         "<15>{#p/papyrus}{#f/27}WOWIE!\nARE YOU STRONG!",
         "<15>{#f/20}BUT NO FEAR!\nI WILL NOT BE DETERRED BY YOUR STRENGTH!",
         "<15>{#f/14}... SPECIAL ATTACK...",
         "<15>{#f/17}FORMATION {@fill=#f00}SIGMA{@fill=#000}!!!"
      ],
      turnTalk24x: [
         "<15>{#p/papyrus}{#f/27}WELL...! *HUFF* IT'S CLEAR... YOU CAN'T! *HUFF* BEAT ME!",
         "<15>{#f/15}YEAH!!! I CAN SEE YOU SHAKING IN YOUR BOOTS!!",
         "<15>{#f/20}I, THE GREAT PAPYRUS, ELECT TO GRANT YOU PITY!!",
         "<15>{#f/20}I WILL {@fill=#f00}SPARE YOU{@fill=#000}, HUMAN!!!",
         "<15>{#f/10}NOW'S YOUR CHANCE TO ACCEPT MY {@fill=#f00}MERCY{@fill=#000}."
      ],
      idleTalk: ["<15>{#p/papyrus}{#f/20}..."],
      secretFlirt1: ["<15>{#p/papyrus}{#f/27}你盼着能伴我左右...\n直到永远？", "<15>{#p/papyrus}{#f/21}呃..."],
      secretFlirt2: [
         "<15>{#p/papyrus}{#f/27}有人想拆散我们？",
         "<15>{#p/papyrus}{#f/21}是谁呢..."
      ],
      secretFlirt2x: [
         "<15>{#p/papyrus}{#f/27}SO YOU -DON'T- WISH TO REMAIN WITH ME?",
         "<15>{#p/papyrus}{#f/14}BUT THEN... WHY WON'T YOU ACCEPT MY MERCY AND LEAVE ME?"
      ],
      secretFlirt3: [
         "<15>{#p/papyrus}{#f/25}呃，我们还没到\n-那么-浓情蜜意的\n地步吧...",
         "<15>{#p/papyrus}{#f/15}...但事后\n我们可以继续！"
      ],
      secretFlirt3x: ["<15>{#p/papyrus}{#f/27}WAIT, ARE -YOU- THE ONE WHO'S TRYING TO TEAR OUR LOVE APART?"],
      secretFlirt4: ["<15>{#p/papyrus}{#f/24}等等，你是想说...\n三角恋？？？"],
      secretFlirt4x: [
         "<15>{#p/papyrus}{#f/26}... SO YOU -DON'T- WANT TO TRY THAT LATER?",
         "<15>{#p/papyrus}{#f/24}AND NOT ONLY THAT, BUT...",
         "<15>{#p/papyrus}{#f/22}YOU NEVER EVEN WANTED TO BE WITH ME TO BEGIN WITH!?"
      ],
      secretFlirt5: ["<15>{#p/papyrus}{#f/22}OR MAYBE IT'S MORE LIKE... A LOVE TRAPEZOID!"],
      secretFlirt5x: [
         "<15>{#p/papyrus}{#f/21}NO?\nIT'S ACTUALLY A LOVE DI-ANGLE INSTEAD?",
         "<15>{#p/papyrus}{#f/18}BUT... THAT'S NOT EVEN A REAL SHAPE!",
         "<15>{#p/papyrus}{#f/27}ARE YOU SAYING THAT OUR LOVE, ISN'T TRULY REAL AFTER ALL!?"
      ],
      secretFlirt6: [
         "<15>{#p/papyrus}{#f/14}等等... 我明白了！",
         "<15>{#p/papyrus}{#f/15}THE PRINCE IS JEALOUS OF YOUR AFFECTION FOR ME!",
         "<15>{#p/papyrus}{#f/24}SO... HE SPRUNG A TRAP TO PREVENT US FROM BEING TOGETHER!"
      ],
      secretFlirt6x: [
         "<15>{#p/papyrus}{#f/27}NO?\nBUT AT LEAST I'M ON THE RIGHT TRACK?",
         "<15>{#p/papyrus}{#f/24}WAIT... TRAPEZOID...",
         "<15>{#p/papyrus}{#f/22}ARE YOU SAYING THAT YOU'RE TRAPPED WITH ME, RIGHT NOW!?",
         "<15>{#p/papyrus}{#f/14}BUT THEN... WHY WON'T YOU ACCEPT MY MERCY AND ESCAPE?",
         "<15>{#p/papyrus}{#f/21}... THERE MUST BE SOMETHING ELSE GOING ON HERE.",
         "<15>{#p/papyrus}{#f/26}NO... YES.",
         "<15>{#p/papyrus}{#f/20}YES, YES, YES!!!",
         "<15>{#p/papyrus}{#f/20}I FINALLY UNDERSTAND IT NOW!",
         "<15>{#p/papyrus}{#f/15}THIS MUST BE THE WORK OF THAT \"ASRIEL\" FELLOW!",
         "<15>{#p/papyrus}{#f/14}SOMEHOW, HE'S OUTRIGHT PREVENTED YOU FROM SHOWING MERCY TO ME!"
      ],
      secretFlirt7: [
         "<15>{#p/papyrus}{#f/14}WELL.\nTHIS SIMPLY WILL NOT STAND!",
         "<15>{#p/papyrus}{#f/20}IN FACT, I HAVE THE PERFECT SOLUTION ALREADY!",
         "<15>{#p/papyrus}{#f/10}TO AVOID ANY ROMANTIC DRAMA, I'LL LEAVE POLITELY.",
         "<15>{#p/papyrus}{#f/24}THEN, WHEN YOU'RE ALONE WITH HIM ONCE AGAIN...",
         "<15>{#p/papyrus}{#f/25}YOU'LL BE IN THE PERFECT POSITION...",
         "<15>{#p/papyrus}{#f/15}TO ENSURE HE DOES NOT GET IN THE WAY OF YOUR FEELINGS!",
         "<15>{#p/papyrus}{#f/20}捏嘿嘿嘿嘿嘿\n嘿嘿嘿嘿！！！"
      ],
      secretFlirt8: [
         "<15>{#p/papyrus}{#f/20}FRET NOT, HUMAN!",
         "<15>{#p/papyrus}{#f/14}I, PAPYRUS, WILL MAKE SURE NO HARM COMES TO EITHER OF US!",
         "<15>{#p/papyrus}{#f/20}I WILL SPARE MYSELF FOR YOU!",
         "<15>{#p/papyrus}{#f/20}AND THEN, I WILL FIND A VERY SAFE PLACE TO HIDE.",
         "<15>{#p/papyrus}{#f/15}别担心，人类！\n一切尽在\nPAPYRUS的掌控之中！"
      ],
      secretInsult1: ["<15>{#p/papyrus}{#f/27}呃... 大可不必？？？"],
      secretInsult2: ["<15>{#p/papyrus}{#f/21}蠢货... \n我好像在哪听过..."],
      secretInsult2x: [
         "<15>{#p/papyrus}{#f/22}OR... NOT?",
         "<15>{#p/papyrus}{#f/24}SO, LET ME GET THIS STRAIGHT.",
         "<15>{#p/papyrus}{#f/27}YOU MEANT TO SAY YOU... LOVE ME???",
         "<15>{#p/papyrus}{#f/27}AND THAT SOMETHING IS TRYING TO TEAR OUR LOVE APART?"
      ],
      secretInsult3: ["<15>{#p/papyrus}{#f/29}搞什么..."],
      secretInsult3x: [
         "<15>{#p/papyrus}{#f/27}YOU MEAN I'M AN IDIOT FOR NOT NOTICING HOW MUCH YOU LOVE ME?",
         "<15>{#p/papyrus}{#f/28}AND THAT YOU WANT TO... UH...",
         "<15>{#p/papyrus}{#f/25}I-I MEAN, I DON'T THINK WE'VE GOTTEN -THAT- FAR YET...",
         "<15>{#p/papyrus}{#f/15}...但事后\n我们可以继续！"
      ],
      secretInsult4: ["<15>{#p/papyrus}{#f/27}你骂我没脑子，\n没懂你啥意思..."],
      secretInsult4x: [
         "<15>{#p/papyrus}{#f/27}SO... YOU MEANT TO SAY WE'RE IN A LOVE TRIANGLE?",
         "<15>{#p/papyrus}{#f/19}WELL, IT'D CERTAINLY EXPLAIN YOUR ABRASIVE ATTITUDE!"
      ],
      secretInsult5: [
         "<15>{#p/papyrus}{#f/27}啥？\n“志在星辰大海，\n何必自暴自弃”...",
         "<15>{#p/papyrus}{#f/17}你在说啥呢...？"
      ],
      secretInsult5x: [
         "<15>{#p/papyrus}{#f/25}WAIT... YOU WANTED ME TO REALIZE THAT YOU SECRETLY LOVED ME?",
         "<15>{#p/papyrus}{#f/22}AND THAT WE'RE ACTUALLY IN A... LOVE TRAPEZOID!?"
      ],
      secretInsult6: [
         "<15>{#p/papyrus}{#f/14}等等... 我明白了！",
         "<15>{#p/papyrus}{#f/21}蠢货...",
         "<15>{#p/papyrus}{#f/21}星辰大海...",
         "<15>{#p/papyrus}{#f/20}有颗星星，TWINKLY，\n他也喜欢叫人“蠢货”！",
         "<15>{#p/papyrus}{#f/25}我...",
         "<15>{#p/papyrus}{#f/22}我才反应过来\n是怎么回事！",
         "<15>{#p/papyrus}{#f/20}那个“ASRIEL”好像\n也喜欢骂人蠢货！",
         "<15>{#p/papyrus}{#f/24}也就是说...",
         "<15>{#p/papyrus}{#f/22}你刚说的“星辰”\n肯定就是指他！",
         "<15>{#p/papyrus}{#f/19}他肯定干了啥，\n害-我-表现得\n像个蠢货！"
      ],
      secretInsult6x: [
         "<15>{#p/papyrus}{#f/10}OH... OH!",
         "<15>{#p/papyrus}{#f/10}YOU'RE THE STAR I'M SUPPOSED TO SHOOT FOR!",
         "<15>{#p/papyrus}{#f/20}YOU'VE BEEN TRYING TO WIN MY AFFECTION THIS WHOLE TIME!",
         "<15>{#p/papyrus}{#f/27}WOWIE... YOU SURE DO HAVE A STRANGE WAY OF GOING ABOUT IT...",
         "<15>{#p/papyrus}{#f/24}STRANGE ENOUGH...",
         "<15>{#p/papyrus}{#f/15}... THAT I'M CONVINCED THERE'S MORE GOING ON HERE!",
         "<15>{#p/papyrus}{#f/21}AFTER ALL, IF THAT'S WHAT YOU WANTED TO TELL ME...",
         "<15>{#p/papyrus}{#f/21}WHY GO TO ALL THIS TROUBLE...",
         "<15>{#p/papyrus}{#f/27}INSTEAD OF SPARING ME AND TALKING ABOUT IT AFTERWARDS?",
         "<15>{#p/papyrus}{#f/21}UNLESS... YOU REALLY -CAN'T- SPARE ME.",
         "<15>{#p/papyrus}{#f/26}NO... YES.",
         "<15>{#p/papyrus}{#f/20}YES, YES, YES!!!",
         "<15>{#p/papyrus}{#f/20}I FINALLY UNDERSTAND IT NOW!",
         "<15>{#p/papyrus}{#f/24}THAT \"ASRIEL\" FELLOW WAS SO SURE YOU'D KILL ME...",
         "<15>{#p/papyrus}{#f/20}SOMETHING TELLS ME, HE MUST BE THE ONE WHO'S GETTING IN YOUR WAY!",
         "<15>{#p/papyrus}{#f/15}HE'S BEEN JEALOUS OF YOUR AFFECTION FOR ME ALL THIS TIME!"
      ],
      secretInsult7: [
         "<15>{#p/papyrus}{#f/14}现在...\n我不会再\n被他骗了！",
         "<15>{#p/papyrus}{#f/20}我，PAPYRUS，\n保证让他再也\n找不到我！",
         "<15>{#p/papyrus}{#f/15}别担心，人类！\n一切尽在\nPAPYRUS的掌控之中！"
      ],
      sparableFlirt1: [
         "<15>{#p/papyrus}{#f/27}YOU'RE SUPPOSED TO BE SPARING, NOT FLIRTING!",
         "<15>{#f/14}I MUST RESIST!"
      ],
      sparableFlirt1x: [
         "<15>{#p/papyrus}{#f/27}HUH?\nFLIRTING, AT A TIME LIKE THIS?",
         "<15>{#f/14}WELL, THAT'S ONE WAY TO REDEEM YOURSELF!"
      ],
      sparableFlirt2: ["<15>{#p/papyrus}{#f/14}N-NO...!"],
      sparableFlirt2x: ["<15>{#p/papyrus}{#f/14}A-AH...!"],
      sparableFlirt3: ["<15>{#p/papyrus}{#f/14}..."],
      sparableInsult1: [
         "<15>{#p/papyrus}{#f/20}HEY, THERE'S NO NEED TO INSULT YOURSELF!",
         "<15>{#f/21}I KNOW YOU DID YOUR BEST..."
      ],
      sparableInsult1x: [
         "<15>{#p/papyrus}{#f/20}HEY, THERE'S NO NEED TO INSULT YOURSELF!",
         "<15>{#f/15}YOU'RE HERE TO BETTER YOURSELF, REMEMBER?"
      ],
      sparableInsult2: ["<15>{#p/papyrus}{#f/21}HUMAN..."],
      sparableInsult2x: ["<15>{#p/papyrus}{#f/15}COME ON...!"],
      sparableInsult3: ["<15>{#p/papyrus}{#f/21}..."]
   },
   b_opponent_shockasgore: {
      act_check: ["<32>{#p/asriel2}* Asgore。\n* 亲手葬送自己家园的昏君。"],
      act_hug: ["<32>{#p/human}* （你想抱抱Asgore...）"],
      hugText: ["<32>{#p/human}* （...但你的身体直接穿了过去。）", "<32>{#p/asriel2}* ...啊？"],
      foodText: ["<11>{#p/asgore}{#f/5}Is that..."],
      idleText1: ["<11>{#p/asgore}{#f/1}开玩笑吧..."],
      idleText2: ["<11>{#p/asgore}{#f/1}一定要\n诉诸暴力吗？"],
      idleText3: ["<11>{#p/asgore}{#f/1}为什么不能\n和平解决呢？"],
      idleText4: ["<11>{#p/asgore}{#f/1}真的有必要吗？"],
      stickText: [
         "<32>{#p/human}* （你朝Asgore扔出扳手。）\n* （扳手直接穿过了他的身体。）",
         "<32>{#p/asriel2}* ...啊？"
      ],
      miss: [
         "<11>{#p/asgore}{#f/2}...",
         "<11>{#f/1}我本人不在这，\nAsriel。",
         "<11>{#f/2}这不过\n是个投影。"
      ],
      name: "* Asgore",
      status1: ["<32>{#p/asriel2}* 现在杀了他，$(name)。"],
      status2: ["<32>{#p/asriel2}* ..."]
   },

   i_berry: {
      battle: {
         description: "一小串半透明的浆果",
         name: "洋梅"
      },
      drop: ["<32>{#p/human}* （你把洋梅扔掉了。）"],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? ["<32>{#p/human}* （7 HP。）"]
            : ["<32>{#p/basic}* “洋梅” 回复7 HP\n* 一小串半透明的浆果。"],
      name: "洋梅",
      use: ["<32>{#p/human}* （你吃掉了洋梅。）"]
   },
   i_blookpie: {
      battle: {
         description: "将新鲜洋梅浸润在果冻中制作而成。",
         name: "洋梅派"
      },
      drop: () => [
         "<32>{#p/human}* （你把洋梅果冻派扔掉了。）",
         ...(instance('main', 'blookishly') !== void 0 // NO-TRANSLATE

            ? game.room === '_frontier4' // NO-TRANSLATE

               ? ["<32>{#p/napstablook}* ......... 嗯？"]
               : ["<32>{#p/napstablook}* 哦.................."]
            : [])
      ],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? ["<32>{#p/human}* （99 HP。）"]
            : ["<32>{#p/basic}* “Exoberry Pie” 回复99 HP\n* 将新鲜洋梅浸润在果冻中制作而成。"],
      name: "洋梅果冻派",
      use: () => [
         "<32>{#p/human}* （你吃掉了洋梅果冻派。）",
         ...(instance('main', 'blookishly') !== void 0 // NO-TRANSLATE

            ? game.room === '_frontier4' // NO-TRANSLATE

               ? ["<32>{#p/napstablook}* ......... 嗯？"]
               : ["<32>{#p/napstablook}* aw.........\n* i hope you like it........."]
            : [])
      ]
   },
   i_chip: {
      battle: {
         description: "请把它带到星系的尽头。",
         name: "“芯”型薯片"
      },
      drop: () => [
         "<32>{#p/human}* (You threw away the Computer Chip.)",
         ...(SAVE.data.b.svr && !SAVE.data.b.freedom
            ? ["<25>{#p/asriel1}{#f/15}* Uh... weren't you going to protect that?"]
            : [])
      ],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? ["<32>{#p/human}* (45 HP. Rather than eating it, you feel you should keep this item safe.)"]
            : ["<32>{#p/basic}* “‘芯’型薯片” 回复45 HP\n* 请将其带往星系的边疆。"],
      name: "“芯”型薯片",
      use: () => [
         "<32>{#p/human}* (You bit into the Computer Chip.)",
         ...(SAVE.data.b.svr && !SAVE.data.b.freedom
            ? ["<25>{#p/asriel1}{#f/15}* Uh... weren't you going to protect that?"]
            : world.darker || SAVE.data.b.ufokinwotm8
               ? []
               : calcHP() - SAVE.data.n.hp > 45
                  ? ["<32>{#p/basic}* Seems your HP integer was increased."]
                  : ["<32>{#p/basic}* Seems your injuries have been overwritten."])
      ]
   },
   i_eye: {
      battle: {
         description: "A portable force field.",
         name: "力场护盾"
      },
      drop: ["<32>{#p/human}* （你把力场护盾扔掉了。）"],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? ["<32>{#p/human}* (7 DF.)"]
            : ["<32>{#p/basic}* “力场护盾” （7防御）\n* 可随身携带的力场发射器。"],
      name: "力场护盾",
      use: ["<32>{#p/human}* (You deployed the Field Emitter.)"]
   },
   i_eye_x: {
      battle: {
         description: "A somewhat underpowered portable force field.",
         name: "力场护盾？"
      },
      drop: ["<32>{#p/human}* （你把力场护盾扔掉了。）"],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? ["<32>{#p/human}* (5 DF.)"]
            : ["<32>{#p/basic}* “力场护盾” （5防御）\n* 可随身携带的力场发射器，\n  但能量不足。"],
      name: "力场护盾？",
      use: ["<32>{#p/human}* (You deployed the Field Emitter.)"]
   },
   i_fruit: {
      battle: {
         description: "非欧几何形状的水果，\n里头比外表还大。",
         name: "幽灵水果"
      },
      drop: ["<32>{#p/human}* (You fold the Ghost Fruit in on itself.)"],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? ["<32>{#p/human}* （15 HP。）"]
            : ["<32>{#p/basic}* “幽灵水果” 回复15 HP\n* 非欧几何形状的水果，\n  里头比外表还大。"],
      name: "幽灵水果",
      use: ["<32>{#p/human}* (You unpacked the Ghost Fruit's many dimensions.)"]
   },
   i_glove: {
      battle: {
         description: "A state-of-the-art bionic glove.\nIt's so bad.",
         name: "超能手套"
      },
      drop: ["<32>{#p/human}* （你把超能手套扔掉了。）"],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? ["<32>{#p/human}* (5 AT.)"]
            : ["<32>{#p/basic}* \"Power Glove\" (5 AT)\n* A state-of-the-art bionic glove. It's so bad."],
      name: "超能手套",
      use: ["<32>{#p/human}* （你戴上了超能手套。）"]
   },
   i_glove_x: {
      battle: {
         description: "It's not the original, but it still packs a punch.",
         name: "超能手套？"
      },
      drop: ["<32>{#p/human}* （你把超能手套扔掉了。）"],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? ["<32>{#p/human}* (3 AT.)"]
            : ["<32>{#p/basic}* “超能手套？” （3攻击）\n* 虽然是仿制手套，\n  但不妨碍你用它痛扁敌人。"],
      name: "超能手套？",
      use: ["<32>{#p/human}* （你戴上了超能手套。）"]
   },
   i_milkshake: {
      battle: {
         description: "Made of an unknown, pearly-white substance.",
         name: "奶昔"
      },
      drop: ["<32>{#p/human}* (You rid yourself of the Milkshake.)"],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? ["<32>{#p/human}* （18 HP。）"]
            : ["<32>{#p/basic}* “奶昔” 回复18 HP\n* 由白如珍珠的不明物质制成。"],
      name: "奶昔",
      use: () => [
         "<32>{#p/human}* (You swallowed every last drop of the Milkshake.)",
         ...(SAVE.data.b.svr || world.darker || SAVE.data.b.ufokinwotm8 ? [] : ["<32>{#p/basic}* ... salty."])
      ]
   },
   i_nice_cream: {
      battle: {
         description: "包装纸上印的不是笑话，\n而是一些天马行空的想象。",
         name: "Ice Dream"
      },
      drop: ["<32>{#p/human}* (You throw away the Ice Dream.)"],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? ["<32>{#p/human}* （15 HP。）"]
            : ["<32>{#p/basic}* \"Ice Dream\" 回复15 HP\n* 包装纸上印的不是笑话，\n  而是一些天马行空的想象。"],
      name: "Ice Dream",
      use: pager.create(
         2,
         () => [
            "<32>{#p/human}* (You unwrapped the Ice Dream.)",
            SAVE.data.b.svr
               ? "<32>* (The wrapper spoke of a world- saving adventure.)"
               : "<32>{#p/basic}* \"You're a grand adventurer, on a mission to save the world!\""
         ],
         () => [
            "<32>{#p/human}* (You unwrapped the Ice Dream.)",
            SAVE.data.b.svr
               ? "<32>* (The wrapper mentioned your role as a starship captain.)"
               : "<32>{#p/basic}* \"You're the captain of a starship, moving deeper into unexplored space!\""
         ],
         () => [
            "<32>{#p/human}* (You unwrapped the Ice Dream.)",
            SAVE.data.b.svr
               ? "<32>* (The wrapper claimed that you could uniquely solve a mystery.)"
               : "<32>{#p/basic}* \"A grand mystery unfolds, and you're the only one who can solve it!\""
         ],
         () => [
            "<32>{#p/human}* (You unwrapped the Ice Dream.)",
            SAVE.data.b.svr
               ? "<32>* (The wrapper talked of your time-traveling endeavour.)"
               : "<32>{#p/basic}* \"You've traveled back in time to stop a terrible catastrophe!\""
         ],
         () => [
            "<32>{#p/human}* (You unwrapped the Ice Dream.)",
            SAVE.data.b.svr
               ? "<32>* (The wrapper stated your scientific brilliance.)"
               : "<32>{#p/basic}* \"You're a brilliant scientist on the verge of a massive breakthrough!\""
         ],
         () => [
            "<32>{#p/human}* (You unwrapped the Ice Dream.)",
            SAVE.data.b.svr
               ? "<32>* (The wrapper established the innocent world you've ended up in.)"
               : "<32>{#p/basic}* \"You stumble on a world of innocent creatures, and it's up to you what happens next!\""
         ],
         () => [
            "<32>{#p/human}* (You unwrapped the Ice Dream.)",
            SAVE.data.b.svr
               ? "<32>* (The wrapper detailed your newfound power.)"
               : "<32>{#p/basic}* \"You've gained the power to change the universe at your will! Use it wisely!\""
         ],
         [
            "<32>{#p/human}* (You unwrapped the Ice Dream.)",
            "<32>{#p/human}* (It's a holographic illustration of you, finding a loving family.)"
         ]
      )
   },
   i_pop: {
      battle: {
         description: "可改变主观时间流速。",
         name: "涡旋棒棒糖"
      },
      drop: ["<32>{#p/human}* （你把涡旋棒棒糖扔掉了。）"],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? ["<32>{#p/human}* （11 HP。）"]
            : [
               "<33>{#p/basic}* “涡旋棒棒糖” 回复11 HP\n* 可改变主观时间流速。\n* 仅在战斗中有效。"
            ],
      name: "涡旋棒棒糖",
      use: () => [
         "<32>{#p/human}* (You suck on the Vortex Pop.)",
         ...(battler.active
            ? game.vortex
               ? ["<32>{#p/human}* (Your perception of time is already shifted.)"]
               : [
                  "<32>{#p/human}* (Your perception of time begins to shift.)",
                  "<32>{#p/story}* FOCUS up for two turns!"
               ]
            : ["<32>{#p/human}* (No effect outside of battle.)"])
      ]
   },
   i_spaghetti: {
      battle: {
         description: "Silken spaghetti, finely aged in a time dilation unit.",
         name: "Spaghetti"
      },
      drop: () => [
         "<32>{#p/human}* （你把意大利面扔掉了。）",
         ...(!world.genocide && !world.runaway && (SAVE.data.n.state_papyrus_spaghet !== 0 || game.room === 's_bros') // NO-TRANSLATE

            ? game.room === 'f_kitchen' // NO-TRANSLATE

               ? [
                  SAVE.data.b.undyne_respecc ? "<25>{#p/undyne}{#f/1}* ..." : "<25>{#p/undyne}{#f/14}* ...",
                  "<25>{#p/undyne}{#f/17}* I'll scrape that off the floor and heat it up in the fridge later."
               ]
               : SAVE.data.n.plot === 72 && game.room === 'c_asgore_kitchen' // NO-TRANSLATE

                  ? [
                     "<18>{#p/papyrus}{#f/8}NOOO!!\nWHAT HAVE YOU DONE!?!?",
                     "<18>{#f/5}... THE SPAGHETTI I MADE FOR YOU...",
                     "<18>{#f/4}... IS... ACTUALLY KIND OF OLD, TO BE HONEST.",
                     "<18>{#f/0}YEAH!!\nMY NEW DISH WILL BE WAY BETTER!",
                     "<18>{#f/9}FEEL FREE TO SWING BY AND HAVE SOME WHEN IT'S DONE!",
                     "<25>{#p/sans}{#f/2}* trust me.\n* his new stuff is WAY too good to throw out.",
                     "<18>{#f/6}... YEAH!!"
                  ]
                  : (fetchCharacters()
                     .find(c => c.key === 'papyrus') // NO-TRANSLATE

                     ?.position.extentOf(game.camera.position.clamp(...renderer.region)) ?? 240) < 240
                     ? [
                        "<18>{#p/papyrus}{#f/8}NOOO!!\nWHAT HAVE YOU DONE!?!?",
                        "<18>{#f/5}... THE SPAGHETTI I MADE FOR YOU...",
                        ...(fetchCharacters().find(c => c.key === 'undyne') !== void 0 // NO-TRANSLATE

                           ? [
                              "<25>{#p/undyne}{#f/4}* Is perfectly fine!",
                              "<25>{#p/undyne}{#f/7}* Human!\n* Pick the spaghetti up off the floor NOW!",
                              "<18>{#p/papyrus}{#f/6}UNDYNE, PLEASE!!\nTHAT'S ENTIRELY UNSANITARY!!"
                           ]
                           : ["<18>{#f/6}... IS CONSUMABLE NO LONGER!!"]),
                        "<18>{#f/4}STILL... MAYBE IT'S FOR THE BEST.",
                        "<18>{#f/5}LIKE, MAYBE SEEING YOU THROW THAT AWAY...",
                        "<18>{#f/6}WILL ENCOURAGE ME TO MAKE A EVEN -BETTER- DISH!",
                        "<18>{#f/9}YEAH! LOOK AT HOW ENCOURAGED I AM RIGHT NOW!",
                        ...(fetchCharacters().find(c => c.key === 'undyne') !== void 0 // NO-TRANSLATE

                           ? ["<25>{#p/undyne}{#f/17}* YEAH!!\n* Look at how encouraged he is right now!!"]
                           : []),
                        "<18>{#p/papyrus}{#f/9}I'LL MAKE THE BEST DISH THE GALAXY'S EVER SEEN!",
                        ...(fetchCharacters().find(c => c.key === 'undyne') !== void 0 // NO-TRANSLATE

                           ? [
                              "<25>{#p/undyne}{#f/7}* And you're GOING to enjoy it this time!!",
                              "<18>{#p/papyrus}{#f/6}BUT IT'S OKAY IF YOU DON'T!!!",
                              "<25>{#p/undyne}{#f/17}* OKAY!!!!",
                              "<18>{#p/papyrus}{#f/9}OKAY!!!!!",
                              "<25>{#p/undyne}{#f/8}* OKAY!!!!!!",
                              "<18>{#p/papyrus}{#f/4}... OKAY."
                           ]
                           : [])
                     ]
                     : instance('main', 'sentryskeleton') !== void 0 || // NO-TRANSLATE

                        (fetchCharacters()
                           .find(c => c.key === 'sans') // NO-TRANSLATE

                           ?.position.extentOf(game.camera.position.clamp(...renderer.region)) ?? 240) < 240
                        ? [
                           "<25>{#p/sans}{#f/0}* huh?\n* you don't like my bro's signature spaghetti?",
                           "<25>{#f/2}* more for me, i guess."
                        ]
                        : []
            : [])
      ],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? ["<32>{#p/human}* （16 HP。）"]
            : ["<32>{#p/basic}* \"Spaghetti\" Heals 16 HP\n* Silken spaghetti, finely aged in a time dilation unit."],
      name: "Spaghetti",
      use: () => [
         "<32>{#p/human}* （你吃光了意大利面。）",
         ...(!battler.active &&
            !world.genocide &&
            !world.runaway &&
            (SAVE.data.n.state_papyrus_spaghet !== 0 || game.room === 's_bros') // NO-TRANSLATE

            ? game.room === 'f_kitchen' // NO-TRANSLATE

               ? [
                  SAVE.data.b.undyne_respecc
                     ? "<25>{#p/undyne}{#f/1}* Spaghetti, huh?"
                     : "<25>{#p/undyne}{#f/14}* Spaghetti, huh?",
                  "<25>{#p/undyne}{#f/8}* You better like it, 'cause it's MY recipe!!"
               ]
               : SAVE.data.n.plot === 72 && game.room === 'c_asgore_kitchen' // NO-TRANSLATE

                  ? [
                     "<18>{#p/papyrus}{#f/1}WHAT?\nDID YOU JUST EAT THAT SPAGHETTI?",
                     "<18>{#f/5}IT SURE HAS BEEN A WHILE SINCE I MADE IT...",
                     "<25>{#p/sans}{#f/2}* a few hours, at least.",
                     "<18>{#p/papyrus}{#f/6}WELL, I'D WAGER THAT IT'S OUT OF DATE BY NOW.",
                     "<18>{#f/6}AND BY THAT, I MEAN IT'S AN OLDER VERSION.",
                     "<18>{#f/4}BUT DON'T WORRY.\nTHIS NEW SPAGHETTI DISH HERE...",
                     "<18>{#f/9}... IS WAY BETTER THAN THE OLD STUFF!",
                     "<18>{#f/9}FEEL FREE TO SWING BY AND HAVE SOME WHEN IT'S DONE!"
                  ]
                  : (fetchCharacters()
                     .find(c => c.key === 'papyrus') // NO-TRANSLATE

                     ?.position.extentOf(game.camera.position.clamp(...renderer.region)) ?? 240) < 240
                     ? SAVE.data.n.state_papyrus_spaghet === 0
                        ? ((SAVE.data.n.state_papyrus_spaghet = 2),
                           [
                              "<18>{#p/papyrus}{#f/1}WHAT?\nDID YOU JUST EAT THAT SPAGHETTI?",
                              "<18>{#f/5}I WAS GOING TO ASK YOU WHAT YOU'D DO WITH IT...",
                              "<18>{#f/6}BUT IT SEEMS I HAVE MY ANSWER NOW!",
                              "<18>{#f/0}THANK YOU, HUMAN, FOR EATING SO INFORMATIVELY."
                           ])
                        : [
                           [
                              "<18>{#p/papyrus}{#f/1}WHAT?\nDID YOU JUST EAT THAT SPAGHETTI?",
                              "<18>{#f/7}I THOUGHT YOU WERE GOING TO SHARE IT!",
                              ...(fetchCharacters().find(c => c.key === 'undyne') !== void 0 // NO-TRANSLATE

                                 ? [
                                    "<25>{#p/undyne}{#f/7}* Well, maybe they didn't WANT to share it!",
                                    "<18>{#p/papyrus}{#f/6}BUT THEY PROMISED!"
                                 ]
                                 : []),
                              "<18>{#f/5}... PERHAPS MY COOKING IS AT FAULT HERE...",
                              "<18>{#f/6}IT WAS SO TASTY, YOU COULDN'T HELP BUT TAKE A BITE!",
                              "<18>{#f/5}AND ANOTHER, AND ANOTHER...",
                              "<18>{#f/6}BEFORE YOU KNEW IT, YOU'D EATEN THE ENTIRE PLATE!",
                              ...(fetchCharacters().find(c => c.key === 'undyne') !== void 0 // NO-TRANSLATE

                                 ? ["<25>{#p/undyne}{#f/14}* Wow.\n* What a crime."]
                                 : []),
                              "<18>{#p/papyrus}{#f/5}TO THINK MY COOKING MADE YOU BETRAY ME...",
                              "<18>{#f/9}N-NO...!\nI'LL FIX THIS!",
                              "<18>{#f/4}... \"AHEM.\"",
                              "<18>{#f/0}I, PAPYRUS, HEREBY DECLARE YOUR PROMISE VOID.",
                              "<18>{#f/0}THERE!\nNOW, YOU MAY EAT GUILT-FREE.",
                              ...(fetchCharacters().find(c => c.key === 'undyne') !== void 0 // NO-TRANSLATE

                                 ? [
                                    "<25>{#p/undyne}{#f/11}* ...",
                                    "<18>{#p/papyrus}{#f/4}(IT WOULD HELP IF YOU PLAYED ALONG.)",
                                    "<25>{#p/undyne}{#f/12}* Right!\n* Guilt-free!\n* That's how you'll eat!",
                                    "<18>{#p/papyrus}{#f/0}(THANK YOU.)"
                                 ]
                                 : [])
                           ],
                           [
                              "<18>{#p/papyrus}{#f/1}WHAT?\nDID YOU JUST EAT THAT SPAGHETTI?",
                              "<18>{#f/4}WELL, YOU DIDN'T SAY YOU WERE GOING TO SHARE IT...",
                              ...(fetchCharacters().find(c => c.key === 'undyne') !== void 0 // NO-TRANSLATE

                                 ? [
                                    "<25>{#p/undyne}{#f/11}* So what's the problem?",
                                    "<18>{#p/papyrus}{#f/0}OH, UH, I GUESS THERE ISN'T ONE."
                                 ]
                                 : ["<18>{#f/0}HMM, I SUPPOSE THAT'S FOR THE BEST."]),
                              "<18>{#f/5}AFTER ALL, IF YOU -HAD- MADE SUCH A STATEMENT...",
                              "<18>{#f/6}WE WOULD HAVE BEEN IN QUITE THE PERDICAMENT.",
                              "<18>{#f/0}BUT YOU DIDN'T!\nSO WE'RE GOOD!",
                              ...(fetchCharacters().find(c => c.key === 'undyne') !== void 0 // NO-TRANSLATE

                                 ? [
                                    "<25>{#p/undyne}{#f/12}* And all is right with the world, huh?",
                                    "<18>{#p/papyrus}{#f/7}HEY, THAT'S WHAT I WAS GOING TO SAY!",
                                    "<18>{#f/0}BUT YES.\nYES IT IS."
                                 ]
                                 : ["<18>{#f/0}AND ALL IS RIGHT WITH THE WORLD."])
                           ]
                        ][SAVE.data.n.state_papyrus_spaghet - 1]
                     : instance('main', 'sentryskeleton') !== void 0 || // NO-TRANSLATE

                        (fetchCharacters()
                           .find(c => c.key === 'sans') // NO-TRANSLATE

                           ?.position.extentOf(game.camera.position.clamp(...renderer.region)) ?? 240) < 240
                        ? [
                           "<25>{#p/sans}{#f/3}* it's pretty good, huh?",
                           "<25>{#f/2}* i should know.\n* i'm the one who got to taste test it."
                        ]
                        : []
            : [])
      ]
   },
   i_swirl: {
      battle: {
         description: "一个五彩斑斓的发光瑞士卷。",
         name: "光彩漩涡"
      },
      drop: ["<32>{#p/human}* （你把光彩漩涡扔掉了。）"],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? ["<32>{#p/human}* （22 HP。）"]
            : ["<32>{#p/basic}* “光彩漩涡” 回复22 HP\n* 一个五彩斑斓的发光瑞士卷。"],
      name: "光彩漩涡",
      use: ["<32>{#p/human}* （你吃掉了光彩漩涡。）"]
   },
   i_voidy: {
      battle: {
         description: "Leads to a mysterious place.\nNot viable in battle.",
         name: "Sanctuary"
      },
      drop: ["<32>{#p/human}* (You throw away the Sanctuary.)"],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? ["<32>{#p/human}* （一件存在之外的物品。）"]
            : ["<32>{#p/basic}* 可传送到某个隐藏房间，\n  战斗外可用。"],
      name: "Sanctuary",
      use: () =>
         battler.active
            ? ["<32>{#p/human}* (You use the Sanctuary.)", "<32>{#p/human}* (No effect in battle.)"]
            : ["<32>{#p/human}* (You use the Sanctuary.)"]
   },
   i_corndog_sword: {
      battle: {
         description: "A truly one-of-a-kind weapon.",
         name: "Dog Sword"
      },
      drop: ["<32>{#p/human}* (You try to throw away the Corn Dog Sword...)", "<32>{#p/human}* (... but it refuses.)"],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? ["<32>{#p/human}* (You decide not to question the logic of this weapon.)"]
            : ["<32>{#p/basic}* A truly one-of-a-kind weapon."],
      name: "Corn Dog Sword",
      use: () =>
         battler.active && battler.targetCurrent?.opponent.metadata.corndogger
            ? [
               "<32>{#p/human}* (You equip the Corn Dog Sword.)",
               "<32>{#p/human}* (You can't resist the urge to take a bite.)",
               [
                  "<32>{#p/human}* (You consume the outer layer of breading...)",
                  "<32>{#p/human}* (You consume the tip...)",
                  "<32>{#p/human}* (You consume the blade...)",
                  "<32>{#p/human}* (You consume the hilt...)",
                  "<32>{#p/human}* (You consume the handle...)"
               ][SAVE.data.n.corndogger++],
               "<32>{#p/basic}* 突然间..！"
            ]
            : [
               "<32>{#p/human}* (You try to equip the Corn Dog Sword...)",
               "<32>{#p/human}* (... but it didn't detect a high enough threat level!)"
            ]
   },
   i_fryz: {
      battle: {
         description: "For once, it's not just \"pleasantly warm.\"",
         name: "Grillby"
      },
      drop: ["<32>{#p/human}* (You tossed the Flamin' Grillby like a molotov.)"],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? ["<32>{#p/human}* （30 HP。）"]
            : ["<32>{#p/basic}* \"Flamin' Grillby\" Heals 30 HP\n* For once, it's not just \"pleasantly warm.\""],
      name: "Flamin' Grillby",
      use: ["<32>{#p/human}* (You consume the Flamin' Grillby.)"]
   },
   i_burgerz: {
      battle: {
         description: "Like burgers, but smaller.\nThree left.",
         name: "Slider Trio"
      },
      drop: ["<32>{#p/human}* (You throw away the Sliders.)"],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? ["<32>{#p/human}* (15 HP. Three uses left.)"]
            : ["<32>{#p/basic}* \"Sliders\" Heals 15 HP\n* Like burgers, but smaller.\n* Three left."],
      name: "Slider Trio",
      use: ["<32>{#p/human}* (You eat one of the Sliders.)"]
   },
   i_burgerz_use1: {
      battle: {
         description: "Like burgers, but smaller.\nTwo left.",
         name: "Slider Duo"
      },
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? ["<32>{#p/human}* (15 HP. Two uses left.)"]
            : ["<32>{#p/basic}* \"Sliders\" Heals 15 HP\n* Like burgers, but smaller.\n* Two left."],
      name: "Slider Duo"
   },
   i_burgerz_use2: {
      battle: {
         description: "Like a burger, but smaller.",
         name: "Slider"
      },
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? ["<32>{#p/human}* (15 HP. One use left.)"]
            : ["<32>{#p/basic}* \"Sliders\" Heals 15 HP\n* Like burgers, but smaller.\n* One left."],
      name: "Slider"
   },

   k_premium: {
      name: "高级会员券",
      description: () =>
         SAVE.data.b.f_state_voucher
            ? "Used in tandem with your nonexistent premium telescope subscription."
            : "在使用过星港的望远镜之后，\nMonster Kid给你的东西。"
   },

   k_inverter: {
      name: "Gravometric Inverter Remote",
      description: () =>
         SAVE.data.b.s_state_inverter
            ? "Used to operate the eponymous Gravometric Inverter."
            : "Acquired from the unsealed envelope in Sans's room."
   },

   k_security: {
      name: "生锈的钥匙",
      description: () =>
         SAVE.data.n.state_aerialis_lockup > 0
            ? "Used to unlock the armory in the rec center."
            : "在星港小镇北侧的“警察岗”\n获得的。"
   },

   n_shop_blook: {
      exit: ["<32>{#p/napstablook}{#k/0}* 哦... 你要走了...", "<32>{#k/1}* 好吧，下次再见，也许吧..."],
      item: () =>
         blookGone()
            ? [
               "§fill=#808080§---- 售罄 ----",
               SAVE.data.b.item_blookpie ? "§fill=#808080§---- 售罄 ----" : "0G - 洋梅果冻派",
               "0G - 幽灵水果",
               "0G - 奶昔",
               "离开"
            ]
            : SAVE.data.n.plot === 72
               ? [
                  SAVE.data.b.item_voidy ? "§fill=#808080§---- 售罄 ----" : "432G - Sanctuary",
                  SAVE.data.b.item_blookpie ? "§fill=#808080§---- 售罄 ----" : "80G - 洋梅果冻派",
                  "5G - 幽灵水果",
                  "5G - 奶昔",
                  "离开"
               ]
               : [
                  SAVE.data.b.item_voidy ? "§fill=#808080§---- 售罄 ----" : "432G - Sanctuary",
                  SAVE.data.b.item_blookpie ? "§fill=#808080§---- 售罄 ----" : "100G - 洋梅果冻派",
                  "12G - 幽灵水果",
                  "16G - 奶昔",
                  "离开"
               ],
      itemInfo: [
         "特殊物品：\n传送到\n某个\n隐藏房间。",
         "回复99 HP\n在黑暗中\n发出\n幽幽荧光。",
         "回复15 HP\n非欧几何的\n产物。",
         "回复18 HP\n也许含有\n灵质。"
      ],
      itemPrompt: "<09>{#p/napstablook}{#k/3}看上\n什么了吗？",
      itemPurchase: [
         "<09>{#p/napstablook}{#k/3}heh... thank you...",
         "<09>{#p/napstablook}{#k/0}不买也没\n关系的...",
         "<09>{#p/napstablook}{#k/0}sorry... not enough g...",
         "<10>{#p/human}（你带的\n东西\n太多了。）"
      ],
      itemPurchasePrompt: () => (blookGone() ? "Take it?" : "花$(x)G\n买它吗？"),
      itemUnavailable: () =>
         blookGone() ? "<09>{#p/basic}空无一物。" : "<09>{#p/napstablook}{#k/0}oh... i don't have any more...",
      menu: () =>
         blookGone() ? ["拿取", "偷窃", "阅读", "离开"] : ["购买", world.meanie ? "偷窃" : "出售", "交谈", "离开"],
      menuPrompt1: () =>
         [
            "<23>{#p/napstablook}{#k/3}* 来随便看看吧...",
            "<23>{#p/napstablook}{#k/3}* i hope you find what you're looking for...",
            "<23>{#p/napstablook}{#k/3}* 来随便看看吧...\n  不想也行...\n  一切由你...",
            "<23>{#p/napstablook}{#k/3}* 来随便看看...\n* 也许吧...",
            "<23>{#p/napstablook}{#k/3}* 来随便看看吧...\n  不想也行...\n  一切由你..."
         ][Math.min(SAVE.data.n.state_wastelands_napstablook, 4)],
      menuPrompt2: "<23>{#p/napstablook}{#k/0}* 你可以随时离开这里... ",
      menuPrompt3: () =>
         world.bulrun ? "<23>{#p/basic}* ...但是人们都逃走了。" : "<23>{#p/basic}* ...但是谁也没有来。",
      note: () =>
         ['f_blooky', 'f_napstablook'].includes(SAVE.data.s.state_foundry_deathroom) // NO-TRANSLATE

            ? ["<32>{#p/basic}* There's no note here."]
            : SAVE.data.b.killed_mettaton
               ? ["<32>{#p/basic}* 这里有一张字条。", "<32>{#p/napstablook}* \"it's all your fault...\""]
               : world.runaway
                  ? ["<32>{#p/basic}* 这里有一张字条。", "<32>{#p/napstablook}* \"we had no choice...\""]
                  : ["<32>{#p/basic}* 这里有一张字条。", "<32>{#p/napstablook}* “对不起，我得走了...”"],
      sell1: () =>
         blookGone()
            ? ["<30>{#p/human}* （你从柜台后面拿走了42G。）"]
            : world.meanie
               ? [
                  "<30>{#p/napstablook}{#k/2}* oh... you're trying to steal from me...",
                  "<30>{#p/napstablook}{#k/5}* you must really need it...",
                  SAVE.data.b.item_voidy
                     ? "<30>{#k/0}* i'm so sorry... the only money i have came from you..."
                     : "<30>{#k/0}* i'm so sorry... i don't have much to give..."
               ]
               : [
                  "<30>{#p/napstablook}{#k/2}* 哦... 你是想卖掉一些东西吗",
                  "<30>{#k/0}* 我不清楚我能不能买下\n  所有东西...\n  抱歉..."
               ],
      sell2: () =>
         blookGone()
            ? ["<30>{#p/basic}* 空无一物。"]
            : world.meanie
               ? [
                  "<30>{#p/napstablook}{#k/5}* um...\n* i can't give you anything of real value...",
                  "<30>{#p/napstablook}{#k/0}* i know... it's pretty sad"
               ]
               : [
                  "<30>{#p/napstablook}{#k/5}* um... you could ask my cousin about selling...",
                  "<30>{#k/0}* 我想它应该和Undyne住在一块"
               ],
      talk: (name: string) =>
         SAVE.data.n.plot === 72
            ? ["打招呼", "What Happened", name, "The Future", "离开"]
            : [
               "打招呼",
               "幽灵",
               "Sanctuary",
               65 <= SAVE.data.n.plot
                  ? SAVE.data.b.a_state_hapstablook && 68 <= SAVE.data.n.plot
                     ? "Family"
                     : "你的生活"
                  : 63 <= SAVE.data.n.plot && SAVE.data.b.a_state_hapstablook
                     ? "Mettaton"
                     : 60 <= SAVE.data.n.plot
                        ? "Mew Mew Doll"
                        : 48 <= SAVE.data.n.plot
                           ? "Travels"
                           : SAVE.data.b.napsta_performance
                              ? "DJ小幽灵？"
                              : SAVE.data.n.state_wastelands_napstablook === 0
                                 ? "Dapper Blook?"
                                 : "你的生活",
               "离开"
            ],
      talkPrompt: "<09>{#p/napstablook}{#k/1}哦, \n想和我\n聊天吗？",
      talkText: [
         () =>
            SAVE.data.n.plot === 72
               ? [
                  "<32>{#p/napstablook}{#k/3}* 哦，你好啊...",
                  "<32>{#k/0}* i think everybody dissappeared for a while...",
                  "<32>{#k/1}* but when they woke up, they all knew your name...",
                  "<32>{#k/3}* so... you're frisk, huh?",
                  "<32>{#k/4}* well, nice to see you, frisk"
               ]
               : SAVE.data.b.a_state_napstadecline
                  ? ["<32>{#p/napstablook}{#k/2}* uh...", "<32>{#p/napstablook}{#k/2}* hey there..."]
                  : SAVE.data.n.state_wastelands_napstablook < 2
                     ? [
                        [
                           "<32>{#p/napstablook}{#k/3}* 哦，你好啊...",
                           "<32>{#p/napstablook}{#k/3}* oh, nice to see you again..."
                        ][SAVE.data.n.state_wastelands_napstablook],
                        ...(world.meanie
                           ? ["<32>{#k/0}* what's that look for?\n* have i done something wrong..."]
                           : ["<32>{#k/4}* 最近在忙些什么呀？"])
                     ]
                     : SAVE.data.n.state_wastelands_napstablook < 5
                        ? [
                           "<32>{#p/napstablook}{#k/0}* oh...\n* i'm not sure what to say, really...",
                           "<32>{#k/3}* uhh... hello, i guess?"
                        ]
                        : [
                           "<32>{#p/napstablook}{#k/4}* heh...\n* hey...",
                           "<32>{#k/3}* say, are you new around here?",
                           "<32>{#k/5}* you don't look familiar..."
                        ],
         () =>
            SAVE.data.n.plot === 72
               ? [
                  "<32>{#p/napstablook}{#k/2}* honestly, i don't really know what happened...",
                  "<32>{#k/2}* same goes for everyone in my family.\n* we didn't get pulled in like everyone else.",
                  "<32>{#k/1}* we did see a bright light, but when it came by... we just sort of rejected it",
                  "<32>{#k/0}* still, even though we didn't see it ourselves...",
                  "<32>{#k/3}* we've heard all about what you did for us.",
                  "<32>{#k/3}* so... thanks."
               ]
               : [
                  "<32>{#p/napstablook}{#k/2}* 你想了解关于幽灵的一些事吗？",
                  "<32>{#k/0}* 嗯，我所知道的幽灵只有我自己\n  和我的三个表亲...",
                  "<32>{#k/3}* 当然，还有你背后的那一个",
                  "<32>{#k/1}* 除此之外，我就没什么可以说了",
                  "<32>{#k/0}* 没有宿体融合的我们，\n  只能勉强... 维持存在。",
                  "<32>{#k/0}* 嗯, 我懂...\n* 这特质确实很有趣..."
               ],
         () =>
            SAVE.data.n.plot === 72
               ? [
                  "<32>{#p/napstablook}{#k/2}* ...",
                  "<32>{#k/2}* they're... still behind you, aren't they?",
                  "<32>{#k/0}* yeah... i can see them...",
                  ...(SAVE.data.b.oops
                     ? [
                        "<32>{#k/0}* they... don't like the fact that i'm pointing them out...",
                        "<32>{#k/0}* oh no..."
                     ]
                     : [
                        "<32>{#k/2}* they look... happy?",
                        "<32>{#k/4}* frisk, if you were able to make them feel this way...",
                        "<32>{#k/3}* then you really are special."
                     ])
               ]
               : [
                  "<32>{#p/napstablook}{#k/3}* 哦... 你说那个啊...",
                  "<32>{#k/1}* 那个是，有一天，我发现\n  这个盒子躺在地上...",
                  "<32>{#k/5}* 当我打开它的时候，\n  我来到了一个我从未\n  见过的神秘的地方...",
                  "<32>{#k/4}* 我现在，偶尔会去\n  那个地方放松自己",
                  "<32>{#k/3}* 那里很安宁..."
               ],
         () =>
            SAVE.data.n.plot === 72
               ? [
                  SAVE.data.b.a_state_hapstablook
                     ? "<32>{#p/napstablook}{#k/0}* well, after me and my cousins resolved everything..."
                     : "<32>{#p/napstablook}{#k/0}* well, since i didn't really have anything else to do...",
                  "<32>{#k/0}* i figured it was time to try something new for once.",
                  "<32>{#k/3}* i heard about the humans in the archive, and felt bad for them...",
                  "<32>{#k/3}* so... i adopted one.",
                  "<32>{#k/1}* i just hope i can take care of them properly now."
               ]
               : 65 <= SAVE.data.n.plot
                  ? SAVE.data.b.a_state_hapstablook
                     ? 68 <= SAVE.data.n.plot
                        ? [
                           "<32>{#p/napstablook}{#k/3}* hey, mettaton came by a little while ago.",
                           "<32>{#k/0}* we talked for a bit about what we've been up to...",
                           "<32>{#k/0}* about the family...",
                           "<32>{#k/3}* well, i don't think i've ever been this happy before.",
                           "<32>{#k/3}* what you did for us back there... it means a lot."
                        ]
                        : [
                           "<32>{#p/napstablook}{#k/0}* hey... sorry things didn't work out the way we hoped...",
                           "<32>{#k/3}* it was nice to have you there, though......"
                        ]
                     : [
                        "<32>{#p/napstablook}{#k/7}* with every day that goes by, i feel a little farther away from happiness......"
                     ]
                  : 63 <= SAVE.data.n.plot && SAVE.data.b.a_state_hapstablook
                     ? [
                        "<32>{#k/7}* oh... you're probably wondering about the meeting",
                        "<32>{#k/7}* don't worry, it's still happening...",
                        "<32>{#k/7}* i just came back here to check on my shop......"
                     ]
                     : 60 <= SAVE.data.n.plot
                        ? SAVE.data.b.a_state_napstadecline
                           ? [
                              "<32>{#k/7}* ...",
                              "<32>{#k/7}* i don't... really wanna talk about that...",
                              ...(SAVE.storage.inventory.contents.includes('tvm_mewmew') // NO-TRANSLATE

                                 ? ["<32>{#k/2}* especially when it's right there in your ITEMs......"]
                                 : [])
                           ]
                           : [
                              "<32>{#k/1}* oh... yeah......",
                              "<32>{#k/3}* thanks for agreeing to help me with that",
                              "<32>{#k/2}* mettaton's been acting kinda weird lately......",
                              "<32>{#k/0}* i'm not surprised he did this",
                              "<32>{#k/4}* alphys first had me watch mew mew space adventure with her a while ago...",
                              "<32>{#k/3}* we marathonned the entire fourth season in one night...",
                              "<32>{#k/6}* that finale...",
                              "<32>{#k/6}* was something else......"
                           ]
                        : 48 <= SAVE.data.n.plot
                           ? [
                              "<32>{#k/1}* yeah... this is mostly where i hang out now",
                              ...[
                                 ["<32>{#k/0}* sorry for interrupting whatever you were doing with my cousin..."],
                                 ["<32>{#k/0}* ...\n* have you seen my cousin?"],
                                 ["<32>{#k/3}* i heard my cousin really likes you..."],
                                 [
                                    "<32>{#k/5}* my cousin tells me you're not the most interesting person to be with...",
                                    "<32>{#k/5}* i disagree......"
                                 ],
                                 [],
                                 []
                              ][SAVE.data.n.state_wastelands_toriel === 0 ? 2 : SAVE.data.n.state_foundry_maddummy],
                              "<32>* ...",
                              "<32>{#f/1}* anyway\n* i hope you're doing alright out there...",
                              "<32>{#f/2}* past starton, things get a bit... crazy"
                           ]
                           : SAVE.data.b.napsta_performance
                              ? [
                                 "<32>{#p/napstablook}{#k/1}* 嗯, 我有时会创作音乐",
                                 "<32>{#k/0}* 人们觉得我的音乐很棒，\n  但我明白这只是他们\n  为了激励我说的谎\n  罢了...",
                                 "<32>{#k/4}* 不过，感谢你来我的小演出捧场...",
                                 "<32>{#k/3}* 见到你，我很高兴..."
                              ]
                              : [
                                 [
                                    "<32>{#p/napstablook}{#k/2}* you mean... that little hat trick i showed you...?",
                                    "<32>{#k/1}* yeah, my cousin taught me that...",
                                    "<32>{#k/3}* he and i used to spend so much time together...",
                                    "<32>{#k/0}* then one day, he...",
                                    "<32>{#k/6}* ...",
                                    "<32>{#k/0}* never mind..."
                                 ],
                                 [
                                    "<32>{#p/napstablook}{#k/0}* oh, there's not much to say about my life...",
                                    "<32>{#k/3}* meeting you was the highlight of my weekend..."
                                 ],
                                 [
                                    "<32>{#p/napstablook}{#k/0}* oh, there's not much to say about my life...",
                                    "<32>{#k/6}* and thanks to people like you, there probably never will be..."
                                 ],
                                 [
                                    "<32>{#p/napstablook}{#k/0}* oh, there's not much to say about my life...",
                                    "<32>{#k/3}* i'm just... pluggin' along..."
                                 ],
                                 [
                                    "<32>{#p/napstablook}{#k/0}* oh, there's not much to say about my life...",
                                    "<32>{#k/6}* not that you... really care..."
                                 ],
                                 [
                                    "<32>{#p/napstablook}{#k/0}* oh, there's not much to say about my life...",
                                    "<32>{#k/0}* i'm just a ghost that tends to get lost in the mix"
                                 ]
                              ][SAVE.data.n.state_wastelands_napstablook]
      ],
      zeroPrompt: "<09>{#p/basic}..."
   },
   n_shop_hare: {
      exit: ["<32>{#p/basic}{#k/11}* 再见！\n* 有空常来啊！"],
      item: () =>
         world.population === 0 || world.runaway
            ? [
               "0G - 超能手套？",
               SAVE.data.b.item_eye ? "0G - 力场护盾？" : "0G - 力场护盾",
               "0G - 涡旋棒棒糖",
               "0G - 光彩漩涡",
               "离开"
            ]
            : SAVE.data.n.plot === 72
               ? [
                  "10G - 超能手套？",
                  SAVE.data.b.item_eye ? "10G - 力场护盾？" : "20G - 力场护盾",
                  "8G - 涡旋棒棒糖",
                  "5G - 光彩漩涡",
                  "离开"
               ]
               : [
                  "30G - 超能手套？",
                  SAVE.data.b.item_eye ? "30G - 力场护盾？" : "40G - 力场护盾",
                  "28G - 涡旋棒棒糖",
                  "20G - 光彩漩涡",
                  "离开"
               ],
      itemInfo: () => [
         "武器：3攻击\n(当前攻击$(x))\n重拳出击，\n仿制品。",
         SAVE.data.b.item_eye
            ? "防具：5防御\n(当前防御$(x))\n有力防御，\n仿制品。"
            : "防具：7防御\n(当前防御$(x))\n有力防御。",
         "回复11 HP\n可改变\n主观时间\n流速。",
         "回复22 HP\n她的\n独家配方。"
      ],
      itemPrompt: "<09>{#p/basic}{#k/0}想买点\n什么？",
      itemPurchase: [
         "<09>{#p/basic}{#k/4}谢谢惠顾。",
         "<09>{#p/basic}{#k/7}只是\n看看？",
         "<09>{#p/basic}{#k/5}That's not enough money.",
         "<10>{#p/human}（你带的\n东西\n太多了。）"
      ],
      itemPurchasePrompt: () => (world.population === 0 || world.runaway ? "Take it?" : "花$(x)G\n买它吗？"),
      menu: () =>
         world.population === 0 || world.runaway
            ? ["拿取", "偷窃", "阅读", "离开"]
            : ["购买", world.meanie ? "偷窃" : "出售", "交谈", "离开"],
      menuPrompt1: "<23>{#p/basic}{#k/0}* 你好啊，旅行者。\n* 想来点什么吗？",
      menuPrompt2: "<23>{#p/basic}{#k/0}* 慢慢挑。",
      menuPrompt3: () =>
         world.bulrun ? "<23>{#p/basic}* ...但是人们都逃走了。" : "<23>{#p/basic}* ...但是谁也没有来。",
      note: () =>
         world.runaway
            ? ["<32>{#p/basic}* 这里有一张字条。", "<32>{#p/basic}* \"Please don't come after us.\""]
            : SAVE.data.n.plot === 72
               ? ["<32>{#p/basic}* 这里有一张字条。", "<33>{#p/basic}* \"I'm sorry I couldn't come back.\""]
               : ["<32>{#p/basic}* 这里有一张字条。", "<33>{#p/basic}* “请不要伤害我的家人。”"],
      sell1: () =>
         world.population === 0 || world.runaway
            ? ["<30>{#p/human}* （你从柜台后面拿走了758G。）"]
            : world.meanie
               ? [
                  "<30>{#p/basic}{#k/1}* Huh?\n* Is this what we're resortin' to now?",
                  "<30>{#k/2}* If you want somethin', you'll have to buy it first.",
                  "<30>{#k/12}* No exceptions."
               ]
               : [
                  "<30>{#p/basic}{#k/6}* 哈？\n* 你想卖东西？\n* 这里看起来像当铺吗？",
                  "<30>{#k/3}* 我不知道在你家乡是\n  什么样子的... 但是...",
                  "<30>* 如果我开始花钱买\n  旧扳手和穿过的太空服，\n  我生意就做不下去了！"
               ],
      sell2: () =>
         world.population === 0 || world.runaway
            ? ["<30>{#p/basic}* 空无一物。"]
            : world.meanie
               ? ["<30>{#p/basic}{#k/8}* I don't know what your game is, but it's not going to work on me."]
               : [
                  "<30>{#p/basic}{#k/8}* If you're really hurtin' for cash, then maybe you could do some crowdfunding.",
                  "<30>{#k/2}* I hear people will pay for ANYTHING nowadays."
               ],
      talk: () =>
         SAVE.data.n.plot === 72
            ? ["打招呼", "What Happened", "外域", "The Future", "离开"]
            : ["打招呼", "这里可以干什么", "小镇的历史", "你的生活", "离开"],
      talkPrompt: "<09>{#p/basic}{#k/0}想聊聊\n天吗？",
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
                  "<32>{#p/basic}{#k/4}* 你好呀！欢迎来到星港！\n* 我都记不得上次看到新面孔\n  是什么时候的事情了。",
                  "<32>{#k/8}* 你是从哪里来的？\n* 首塔吗？",
                  "<32>{#k/7}* 你看起来不像是游客。\n* 你是自己来的吗？"
               ],
         () =>
            SAVE.data.n.plot === 72
               ? [
                  "<32>{#p/basic}{#k/8}* You DO know what happened, don't you?",
                  "<32>{#k/9}* Then again, you might've seen things a bit differently...",
                  "<32>{#k/0}* Here.\n* I'll tell you what I saw.",
                  "<32>{#k/0}* So we all got pulled in by this bright light...",
                  "<32>{#k/7}* Then we saw it... like we were watching from someone else's eyes.",
                  "<32>{#k/5}* You were being attacked on all sides, and I could've sworn you died...",
                  "<32>{#k/11}* But you're still here, so that can't be right.",
                  "<32>{#k/8}* Eventually, you said something in particular, and whoever was attacking you... stopped.",
                  "<32>{#k/9}* After that, we woke up, and the force field was gone."
               ]
               : [
                  "<32>{#p/basic}{#k/8}* 你想知道在星港可以\n  干什么？",
                  "<32>{#k/9}* 你可以去Grillby's用餐，\n  可以去图书倌获取信息...",
                  "<32>{#k/2}* 如果你累了，\n  你可以去旅馆打个盹。\n* 就在隔壁，我姐妹开的。",
                  "<32>{#k/0}* 你要是觉得无聊了，\n  可以坐在外面，\n  看那两个古怪的骷髅\n  做他们的事情。",
                  "<32>* 他们两个...\n* 我觉得，应该是兄弟。\n* 从我记事的时候，\n  他们就在这里了。",
                  "<32>{#k/9}* 哦，我差点忘了。\n* 最近，有个小鬼儿决定\n  在小镇的南边开一家商店。",
                  "<32>{#k/11}* 虽然事情不算大，\n  但如果你路过，\n  一定要打声招呼。\n* 那家伙很需要陪伴的。"
               ],
         () =>
            SAVE.data.n.plot === 72
               ? [
                  "<32>{#p/basic}{#k/12}* Didja hear?\n* About the Outlands?",
                  "<32>{#k/2}* Apparently the Queen had been hanging out there for who knows how long.",
                  "<32>{#k/8}* Pretty unbelievable, huh!?",
                  "<32>{#k/10}* I'm sure she was even more surprised than we were to find out the humans were alive."
               ]
               : [
                  "<32>{#p/basic}{#k/9}* 回想一下你的历史课...",
                  "<32>{#k/0}* 很久以前，怪物们住在\n  我们现在称之为铸厂的地方。",
                  "<32>* 过了一段时间，\n  我们发明了在前哨站\n  建造新区域的技术。",
                  "<32>* 首当其冲建造出来的就是星港，\n  他们认为这是一个\n  建小镇的好地方。",
                  "<32>{#k/10}* 听起来很古怪，\n  但我还挺喜欢的，\n  你懂吗？"
               ],
         () =>
            SAVE.data.n.plot === 72
               ? [
                  "<32>{#p/basic}{#k/5}* Well, I suppose I'll move my store to the new homeworld...",
                  "<32>{#k/4}* ... haven't planned much more than that, I'm afraid."
               ]
               : [
                  "<32>{#p/basic}* 生活总是一成不变。",
                  "<32>{#k/5}* 虽然有点孤单...",
                  "<32>{#k/10}* 但是... 在我们内心深处\n  都知道自由即将到来，\n  不是吗？",
                  "<32>{#k/9}* 只要我们心存希望，\n  我们就能咬紧牙关，\n  日复一日地面对\n  同样的困难...",
                  "<32>{#k/0}* 这就是生活啊，不是吗？"
               ]
      ],
      zeroPrompt: "<09>{#p/basic}..."
   },

   c_name_starton: {
      papyrus: () =>
         SAVE.data.n.plot_date < 2 || (SAVE.data.n.exp > 0 && SAVE.data.b.a_state_fishbetray)
            ? "Papyrus's Phone"
            : "Papyrus and Undyne"
   },

   c_call_papyrus: <Partial<CosmosKeyed<CosmosProvider<string[]>>>>{
      s_start: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}AH, THAT LONELY ROAD AT THE EDGE OF STARTON.",
            "<18>{#f/5}IT MIGHT SEEM A LITTLE LARGE AND EMPTY, BUT...",
            "<18>{#f/0}I HAVE MANY FOND MEMORIES OF IT!",
            ...(solo()
               ? [
                  "<18>{#f/0}FOR EXAMPLE, BACK WHEN WE WERE BABY BONES...",
                  "<18>{#f/0}SANS AND I WOULD RACE OUR HOVERCARS SIDE BY SIDE."
               ]
               : [
                  "<25>{#p/undyne}{#f/1}* Like what?",
                  "<18>{#p/papyrus}{#f/0}LIKE THE WAY SANS AND I USED TO RACE OUR HOVERCARS!",
                  "<18>{#p/papyrus}{#f/5}WE'D FLY DOWN THE ROAD, RACING SIDE BY SIDE..."
               ]),
            "<18>{#f/4}UNFORTUNATELY, NO MATTER HOW HARD I TRIED...",
            ...(solo()
               ? [
                  "<18>{#f/7}HE WOULD ALWAYS BE WAITING AT THE FINISH LINE!",
                  "<18>{#f/5}YOU CAN IMAGINE MY FRUSTRATION."
               ]
               : [
                  "<25>{#p/undyne}{#f/17}* He always beat you to the end?",
                  "<25>{#f/4}* Yeah, that's 'cause he's a big fat CHEATER.",
                  "<25>{#f/5}* Have you SEEN his high score on the target practice machine?",
                  "<25>{#f/8}* It's like, a GAZILLION or something!!",
                  "<18>{#p/papyrus}{#f/4}OH, TRUST ME.\nI KNOW IT ALL TOO WELL.",
                  "<18>{#f/7}I REALLY WISH HE WOULDN'T CHEAT ON THINGS LIKE THAT!",
                  "<18>{#f/7}IT RUINS THE GAME FOR EVERYONE ELSE.",
                  "<25>{#p/undyne}{#f/1}* Or maybe...",
                  "<25>{#f/8}* It just provides a more interesting challenge!!",
                  "<18>{#p/papyrus}{#f/4}... NO."
               ])
         ],
         () => [
            "<18>{#p/papyrus}{#f/5}SANS HAS... ALWAYS BEEN ONE TO TAKE SHORTCUTS.",
            ...(solo()
               ? ["<18>{#f/4}I SUSPECT THAT PLAYED A PART IN HIS VICTORIES."]
               : ["<18>{#f/4}IT'S PRACTICALLY A LAW OF NATURE AT THIS POINT."])
         ]
      ),
      s_sans: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}{#f/0}AND THIS HERE IS SANS'S SENTRY STATION.",
            "<18>{#p/papyrus}{#f/5}...",
            ...(solo()
               ? [
                  "<18>{#f/5}I HEARD HIM TALKING THE OTHER DAY...",
                  "<18>{#f/6}... ABOUT HELPING SOMEONE AVOID THE OTHER GUARDS.",
                  "<18>{#f/5}I CAN'T BE SURE, BUT FROM HOW IT SOUNDS...",
                  "<18>{#f/5}THERE'S... A CHANCE MY BROTHER MIGHT BE A MOLE.",
                  "<18>{#f/4}...",
                  "<18>{#f/4}... OR WOULD THAT BE CALLED A RAT?"
               ]
               : [
                  "<18>{#p/papyrus}{#f/5}... WHAT MORE CAN I SAY?",
                  "<25>{#p/undyne}{#f/17}* Papyrus, don't you ever look... well, up?",
                  "<18>{#p/papyrus}{#f/6}WHAT!?",
                  "<18>{#p/papyrus}{#f/7}YOU KNOW I DON'T HAVE TIME FOR THAT!",
                  "<25>{#p/undyne}{#f/1}* But you're not even trying to capture anybody.",
                  "<18>{#p/papyrus}{#f/6}S-SURE I AM!\nJUST... NOT WHO YOU THINK!!"
               ])
         ],
         () =>
            solo()
               ? [
                  "<18>{#p/papyrus}{#f/4}WAIT...",
                  "<18>{#p/papyrus}{#f/1}... HAS MY BROTHER BEEN A MOLE-RAT THIS WHOLE TIME!?"
               ]
               : ["<18>{#p/papyrus}{#f/4}IT'S SOMEONE... RECTANGULAR."]
      ),
      s_crossroads: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}RECENTLY, PEOPLE HAVE BEEN LEAVING NOTES OUTSIDE.",
            "<18>DREAMS, WISHES, OFFERS OF ROMANCE...",
            ...(solo()
               ? [
                  "<18>{#f/9}PERSONALLY, I THINK IT'S EXCELLENT!",
                  "<18>{#f/0}IT'S GREAT TO SEE PEOPLE MAKING AN EFFORT.",
                  "<18>{#f/4}AS FOR MY BROTHER, WELL...",
                  "<18>{#f/4}HE THINKS THEY'RE ALL JUST BEING LUNAR-TICKS."
               ]
               : [
                  "<18>...",
                  "<18>WHAT'S -THAT- LOOK FOR, UNDYNE?",
                  "<25>{#p/undyne}{#f/3}* ... did you see any, uh...",
                  "<18>{#p/papyrus}{#f/0}... SEE ANY WHAT?",
                  "<25>{#p/undyne}{#f/15}* ... scientific notes?",
                  "<18>{#p/papyrus}{#f/0}OH.",
                  "<18>{#f/0}... NO.",
                  "<25>{#p/undyne}{#f/1}* Darn it!"
               ])
         ],
         () =>
            solo()
               ? ["<18>{#p/papyrus}I WONDER WHAT LIFE WOULD BE LIKE WITH A MOON IN ORBIT."]
               : ["<18>{#p/papyrus}DON'T YOU HAVE ANY HOPES AND DREAMS TO SHARE?"]
      ),
      s_human: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}{#f/0}ABOUT THAT GRAND SPEECH OF MINE...",
            "<18>{#f/0}COINCIDENTALLY, I FIRST PRACTICED IT IN THIS VERY ROOM.",
            "<18>{#f/9}AND WITH SANS, NO LESS!",
            ...(solo()
               ? ["<18>{#f/5}BUT WE ARGUED ABOUT WHICH WAY WE SHOULD STAND."]
               : [
                  "<25>{#p/undyne}{#f/14}* I'm sure you had no arguments whatsoever.",
                  "<18>{#p/papyrus}{#f/0}OH, ON THE CONTRARY.",
                  "<18>{#f/0}WE ARGUED CONSTANTLY WITH EACH OTHER!"
               ]),
            "<18>{#f/4}I'D ROTATE ONE WAY, AND SAY THAT WAS BETTER...",
            "<18>{#f/4}THEN HE'D TURN, AND SAY HIS WAY WAS BEST.",
            "<18>{#f/6}AS WE ARGUED, WE EACH ROTATED FASTER AND FASTER.",
            ...(solo()
               ? ["<18>{#f/0}IT'S SINCE BECOME A RITUAL FOR US."]
               : [
                  "<25>{#p/undyne}{#f/1}* ... that explains what I saw outside my house earlier.",
                  "<18>{#p/papyrus}{#f/1}YOU SAW THAT!?",
                  "<18>{#f/6}UH, WAIT, I CAN EXPLAIN...",
                  "<18>{#f/5}I MEAN, SANS WAS JUST WORRIED ABOUT... UH...",
                  "<18>{#f/6}... WORRIED THAT I'M SPENDING TOO MUCH TIME THERE!",
                  "<18>{#f/6}YEAH!!",
                  "<25>{#p/undyne}{#f/16}* ... he's your brother, isn't he?",
                  "<25>{#p/undyne}{#f/1}* He might've just wanted you to spend more time with him."
               ])
         ],
         () =>
            solo()
               ? [
                  "<18>{#p/papyrus}{#f/0}FUN FACT.",
                  "<18>{#f/0}IF YOU TOTAL UP OUR ROTATION SPEED...",
                  "<18>{#f/0}IT'D ACTUALLY COME OUT TO ZERO.",
                  "<18>{#f/4}... WE ALWAYS SPIN IN THE OPPOSITE DIRECTION."
               ]
               : [
                  "<18>{#p/papyrus}{#f/0}FAMILY TIME IS IMPORTANT, AFTER ALL.",
                  "<18>{#f/9}SOMETIMES, IT EVEN NECESSITATES USING FLIGHT MAGIC!"
               ]
      ),
      s_papyrus: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}{#f/9}NYEH HEH HEH!!\nIMPRESSED!?!",
            "<18>{#f/0}NOT ONLY AM I GREAT AT PUZZLES...",
            "<18>{#f/9}I'M ALSO AN ESTEEMED ARCHITECT!!!",
            ...(solo()
               ? ["<18>{#f/0}I PLAN TO BUILD MORE WHEN I JOIN THE ROYAL GUARD."]
               : [
                  "<25>{#p/undyne}{#f/1}* Y'know, I WAS thinking of renovating your \"sentry station...\"",
                  "<25>{#f/14}* Like... a surprise gift!",
                  "<18>{#p/papyrus}{#f/4}YOU WHAT?",
                  "<25>{#p/undyne}{#f/12}* But, uh, that'd be messing with perfection.",
                  "<18>{#p/papyrus}{#f/5}PERFECTION, YOU SAY?",
                  "<18>{#p/papyrus}{#f/6}BUT YOU ONCE SAID THINGS CAN ALWAYS BE IMPROVED!",
                  "<25>{|}{#p/undyne}{#f/17}* Well... yes!\n* I just meant that- {%}",
                  "<18>{#p/papyrus}ALMOST-PERFECTION.\nHOW ABOUT WE JUST CALL IT THAT.",
                  "<25>{#p/undyne}{#f/12}* That works."
               ])
         ],
         () =>
            solo()
               ? [
                  "<18>{#p/papyrus}{#f/4}I'M HOPING SANS CAN HELP ME FIND BETTER MATERIALS.",
                  "<18>{#f/6}BOXES CAN ONLY TAKE YOU SO FAR!!"
               ]
               : ["<18>{#p/papyrus}THANK YOU, HUMAN...", "<18>FOR BEING MY ALMOST-PERFECT FRIEND."]
      ),
      s_doggo: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}THE SENTRY STATION OF DOGGO...",
            "<18>{#f/5}ONE DAY, AFTER AN INCIDENT WITH THE OTHER DOGS...",
            "<18>{#f/5}HE TOLD ME HE DIDN'T FEEL AT HOME ANYMORE.",
            "<18>{#f/0}SO I GAVE HIM A HUG, AND TOLD HIM TO TALK IT OUT.",
            "<18>{#f/4}OF COURSE, THE CANINE UNIT ARE A REASONABLE BUNCH.",
            "<18>{#f/0}IT'S NO SURPRISE THINGS TURNED OUT JUST FINE!",
            ...(solo()
               ? []
               : [
                  "<25>{#p/undyne}{#f/16}* Oh yeah, I remember that incident...",
                  "<25>{#f/22}* He, uh...\n* He was thinking of...",
                  "<18>{#p/papyrus}{#f/5}THINKING OF...?",
                  "<25>{#p/undyne}{#f/9}* ... thanks for being there when you were.",
                  "<25>{#f/16}* Without you, he might've actually...",
                  "<18>{#p/papyrus}{#f/6}WHAT?\nWHAT IS IT??",
                  "<25>{#p/undyne}{#f/12}* ... uh, he would have quit the guard for a really long time.",
                  "<18>{#p/papyrus}{#f/0}OH, OKAY.",
                  "<18>{#f/5}I GUESS THAT WOULD BE PRETTY BAD..."
               ])
         ],
         () =>
            solo()
               ? ["<18>{#p/papyrus}{#f/0}KINDNESS REALLY -IS- A VIRTUE!"]
               : ["<18>{#p/papyrus}{#f/9}NO DOG LEAVES THE ROYAL GUARD UNDER MY WATCH!"]
      ),
      s_robot: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}{#f/5}LIFE AS A BUILDER BOT MUST BE TOUGH.",
            "<18>{#f/5}BE NICE TO THOSE WHOSE INTELLIGENCE IS ARTIFICIAL.",
            ...(solo()
               ? []
               : [
                  "<25>{#p/undyne}{#f/16}* Yeah... especially as a robot living on the outpost these days.",
                  "<25>{#p/undyne}{#f/9}* I think we both know why that is.",
                  "<18>{#p/papyrus}{#f/5}UNFORTUNATELY.",
                  "<25>{#p/undyne}{#f/17}* But hey!\n* It's not all bad!!",
                  "<25>{#p/undyne}{#f/14}* After all, their chip could just be moved to a new computer.",
                  "<18>{#p/papyrus}{#f/0}OH! OH!\nI THINK I GET IT!",
                  "<18>{#f/0}THEN THEY'D BE ABLE TO ACCESS THE OUTERNET!",
                  "<18>{#f/0}AND THE TELESCOPE NETWORK!",
                  "<18>{#f/0}AND SO MUCH MORE!"
               ])
         ],
         () =>
            solo()
               ? ["<18>{#p/papyrus}{#f/5}YOU NEVER KNOW HOW LONG THEY'VE BEEN ALONE!!"]
               : [
                  "<18>{#p/papyrus}{#f/0}I WONDER IF THEY'D BE ABLE TO SEE MY BROWSER HISTORY.",
                  "<18>{#f/4}ALL THOSE RAW PASTA PHOTOS..."
               ]
      ),
      s_maze: () => [
         "<18>{#p/papyrus}{#f/5}YES, YES, I KNOW MY PUZZLES CAN BE DIFFICULT...",
         ...(SAVE.data.b.papyrus_fire
            ? [
               "<18>{#f/9}BUT JUST THINK OF IT LIKE A LEARNING EXPERIENCE!",
               "<18>{#f/0}A TEST OF CHARACTER RATHER THAN SKILL.",
               ...(solo()
                  ? []
                  : [
                     "<25>{#p/undyne}{#f/1}* Huh?\n* What happened?",
                     "<18>{#p/papyrus}{#f/5}THE HUMAN DIDN'T DO SO WELL ON THE WALL OF FIRE.",
                     "<25>{#p/undyne}{#f/10}* Ah...",
                     "<25>{#p/undyne}{#f/8}* So you're telling me they didn't just fly over it!?",
                     "<18>{#p/papyrus}{#f/6}HUMANS CAN FLY??",
                     "<25>{#p/undyne}{#f/17}* ...",
                     "<25>{#p/undyne}{#f/17}* So you're telling me they didn't just walk around it!?",
                     "<18>{#p/papyrus}{#f/6}UHHH..."
                  ])
            ]
            : [
               "<18>{#f/0}BUT YOU, MY FRIEND, ARE QUITE THE PUZZLIST!",
               "<18>{#f/9}IT'S NOT EVERY DAY SOMEONE TROUSLES THIS BONE.",
               ...(solo()
                  ? []
                  : [
                     "<25>{#p/undyne}{#f/1}* Huh?\n* What happened?",
                     "<18>{#p/papyrus}{#f/0}THE HUMAN BEAT MY INFAMOUS \"WALL OF FIRE\" EARLIER!",
                     "<25>{#p/undyne}{#f/8}* Let me guess!\n* They walked around it!!",
                     "<18>{#p/papyrus}{#f/4}NO, ACTUALLY.\nTHEY CLEVERLY WALKED THROUGH IT.",
                     "<25>{#p/undyne}{#f/1}* ... oh.",
                     "<25>{#p/undyne}{#f/14}* My next guess was going to be that they flew over it.",
                     "<18>{#p/papyrus}{#f/0}NOPE!\nJUST PRACTICE AND PERSEVERANCE!",
                     "<18>{#f/5}THOUGH, I'M NOT SURE HOW THEY GOT THEIR PRACTICE...",
                     "<18>{#f/4}CONSIDERING THAT WAS DEFINITELY THEIR FIRST TRY.",
                     ...(SAVE.data.b.undyne_respecc
                        ? [
                           "<25>{#p/undyne}{#f/1}* Heh.\n* They've shown to have a taste for challenge.",
                           "<25>{#f/12}* I'm not surprised they beat it so easily!"
                        ]
                        : [
                           "<25>{#p/undyne}{#f/17}* What?\n* Practice?\n* Screw that!!",
                           "<25>{#f/7}* GIVE ME YOUR SECRETS NOW, PUNK!!!",
                           "<18>{#p/papyrus}{#f/6}NO, LET THE PUZZLIST PUZZLE IN PEACE!"
                        ])
                  ])
            ])
      ],
      s_dogs: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}THE SENTRY STATION OF DOGAMY AND DOGARESSA...",
            "<18>{#f/0}SOMETIMES I WONDER WHAT MARRYING DOGS MUST FEEL LIKE.",
            "<18>{#f/4}THOUGH, I'LL NEVER HAVE TO KNOW, BECAUSE...",
            "<18>{#f/9}THE ONLY THING I'D MARRY IS A VERY HANDSOME SKELETON!",
            ...(solo()
               ? []
               : [
                  "<25>{#p/undyne}{#f/14}* So... yourself, then.",
                  "<18>{#p/papyrus}{#f/6}HUH?\nWHERE'D YOU GET THAT IDEA??",
                  "<25>{#p/undyne}{#f/12}* Isn't it obvious?\n* Who ELSE is as handsome as you are?",
                  "<18>{#p/papyrus}{#f/4}WELL, I SUPPOSE I DO HAVE A VERY DASHING LOOK...",
                  "<18>{#f/0}BUT NONETHELESS, IT SIMPLY WASN'T MEANT TO BE!"
               ])
         ],
         () =>
            solo()
               ? [
                  "<18>{#p/papyrus}{#f/6}WHAT!?!?\nWE CAN'T MARRY!!",
                  ...(SAVE.data.b.flirt_papyrus
                     ? ["<18>{#f/0}WE AGREED THAT IT WOULDN'T WORK OUT, REMEMBER?"]
                     : [
                        "<18>{#f/0}WE'RE ALREADY VERY COOL FRIENDS!",
                        "<18>{#f/5}AND IF I MARRIED YOU, WELL...",
                        "<18>{#f/6}I WOULDN'T GET TO HAVE YOU AS A FRIEND ANYMORE!"
                     ])
               ]
               : ["<18>{#p/papyrus}{#f/4}SUCH A PAIRING WOULD BE... TOO POWERFUL."]
      ),
      s_lesser: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}{#f/0}THIS ROOM USED TO BE CONNECTED WITH A BRIDGE.",
            "<18>{#f/4}TWO HALVES, JOINED AT THE CENTERPOINT...",
            "<18>{#f/9}LIKE THE SOULS OF TWO VERY INTREPID SKELETONS!",
            ...(solo()
               ? [
                  "<18>{#f/5}...",
                  "<18>{#f/5}I DON'T KNOW EXACTLY WHAT SANS IS THINKING NOW...",
                  "<18>{#f/4}BUT I'D IMAGINE IT HAS A LOT TO DO WITH CONDIMENTS.",
                  "<18>{#f/5}IF ONLY HE'D STOP OBSESSING OVER THEM...",
                  "<18>{#f/7}THEN, I WOULDN'T HAVE TO \"YAMOK\" HIM FOR IT!!"
               ]
               : [
                  "<25>{#p/undyne}{#f/1}* Oh yeah, aren't you guys linked or something?",
                  "<18>{#p/papyrus}{#f/0}FOR AS LONG AS WE CAN REMEMBER!",
                  "<25>{#p/undyne}{#f/14}* That kind of reminds me of those old stories...",
                  "<25>{#p/undyne}{#f/17}* ... of a skeleton who once experimented on himself.",
                  "<25>{#f/8}* For all we know, YOU and your brother could have been involved!!",
                  "<18>{#p/papyrus}{#f/1}ME, UNKNOWINGLY PART OF AN EXPERIMENT!?",
                  "<18>{#f/7}THAT'S PREPOSTEROUS!",
                  "<25>{#p/undyne}{#f/15}* ... you never know..."
               ])
         ],
         () =>
            solo()
               ? [
                  "<18>{#p/papyrus}{#f/5}I WISH I HAD MORE TO SAY...",
                  "<18>{#f/4}BUT I CAN'T STOP THINKING ABOUT CONDIMENTS."
               ]
               : [
                  "<18>{#p/papyrus}{#f/0}WELL, NOW I'M REALLY CURIOUS ABOUT MY PAST.",
                  "<18>{#f/9}NOTHING A LITTLE RESEARCH CAN'T HELP WITH!",
                  "<25>{#p/undyne}{#f/14}* If you'd like, I could give you a hand...",
                  "<18>{#p/papyrus}{#f/5}NO, IT'S ALRIGHT.\nBESIDES, AS THE GUARD CAPTAIN...",
                  "<18>{#f/4}YOU ALREADY HAVE WAY TOO MUCH ON YOUR PLATE."
               ]
      ),
      s_bros: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}{#f/4}THOSE SPOT-THE- DIFFERENCE PUZZLES SANS LIKES...",
            "<18>{#f/5}WELL, THE ONES I USED TO SOLVE WERE STRAIGHTFORWARD.",
            "<18>{#f/7}BUT LATELY, THEY'VE BECOME NIGH IMPOSSIBLE!",
            "<18>{#f/4}SHORT OF SCANNING THE IMAGE PIXEL FOR PIXEL...",
            "<18>{#f/7}THERE'S NO WAY ANYONE COULD SOLVE THEM!",
            ...(solo()
               ? ["<18>{#f/7}IT'S RIDICULOUS!"]
               : [
                  "<25>{#p/undyne}{#f/1}* That puzzle artist in the librarby makes them, I think.",
                  "<25>{#f/11}* ... something tells me she's really bored with her job.",
                  "<18>{#p/papyrus}{#f/4}NOW THERE'S A PUZZLE...",
                  "<18>{#f/0}I'LL JUST HAVE TO GO OVER THERE AND \"SOLVE\" IT!",
                  "<25>{#p/undyne}{#f/12}* Or maybe you could create your own...?",
                  "<18>{#p/papyrus}{#f/9}MAYBE I COULD!"
               ])
         ],
         () =>
            solo()
               ? [
                  "<18>{#p/papyrus}{#f/4}ARE YOU ASKING FOR MY HELP?",
                  "<18>{#f/7}WELL, FORGET IT!",
                  "<18>{#f/0}UNFAIR PUZZLES AREN'T WORTH SOLVING, ANYWAY."
               ]
               : [
                  "<25>{#p/undyne}{#f/1}* Any time I get stuck on these things, I just send them to Alphys.",
                  "<25>{#f/14}* She's got some fancy image subtraction thing or whatever.",
                  "<18>{#p/papyrus}{#f/0}SUBTRACTION, HUH?",
                  "<18>{#f/4}... WOULDN'T THE MORE ACCURATE TERM BE \"COMPARISON?\"",
                  "<25>{#p/undyne}{#f/8}* Well, it sure does subtract from the headache!"
               ]
      ),
      s_spaghetti: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}{#f/0}SOME SAY THE MICROWAVE IN THAT ROOM...",
            "<18>{#f/0}HAS A SO-CALLED \"HIDDEN FUNCTION.\"",
            "<18>{#f/5}THAT, UNBEKNOWNST TO MOST...",
            "<18>{#f/4}ITS \"MICRO\" WAVES ARE IN FACT... GRAVITATIONAL.",
            ...(solo()
               ? []
               : [
                  "<25>{#p/undyne}{#f/1}* And here I thought my \"hot fridge\" was a big subversion.",
                  "<25>{#f/8}* But this \"gravitational wave\" takes the cake!",
                  "<25>{#f/11}* ... or would that be spaghetti?",
                  "<18>{#p/papyrus}ONLY IF IT WAS USED TO LIFT SUCH A DELIGHTFUL DISH.",
                  "<18>{#f/6}BUT, WAIT!!\nIF THE GRAVITY WAS TOO STRONG...",
                  "<18>{#f/6}IT'D TURN INTO A FLYING SPAGHETTI MONSTER!",
                  "<25>{#p/undyne}{#f/14}* ... now there's a religion I could believe in."
               ])
         ],
         () =>
            solo()
               ? ["<18>{#p/papyrus}{#f/0}IF ONLY THERE WAS A WAY TO TURN IT OFF."]
               : [
                  "<18>{#p/papyrus}{#f/5}WHEN IT COMES TO SPAGHETTI MONSTERS...",
                  "<18>{#f/0}I PREFER MINE TO STAY PERFECTLY STILL.",
                  "<18>{#f/0}SITTING PRETTY, AS A TESTAMENT TO GREAT COOKING...",
                  "<18>{#f/4}ON THE PLATE FROM WHICH THEY ARE TO BE DEVOURED."
               ]
      ),
      s_puzzle1: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}HMMM... THE SOLUTION TO THIS ONE...?",
            "<18>{#f/5}WELL, SOMETIMES I JUST STEP OVER THE LASERS.",
            "<18>{#f/0}SO, ONE SOLUTION IS TO BE TALL AND HANDSOME!",
            ...(solo()
               ? ["<18>{#f/4}... DEFINITELY DON'T DO THIS IF YOU'RE TOO SMALL."]
               : [
                  "<25>{#p/undyne}{#f/8}* And another one is to fly over it with your jetpack!!",
                  "<18>{#p/papyrus}{#f/4}JETPACKS AREN'T THE SOLUTION TO EVERYTHING.",
                  "<18>{#p/papyrus}{#f/7}WHATEVER HAPPENED TO APPRECIATING THE SCENERY?",
                  "<25>{#p/undyne}{#f/16}* ...",
                  "<25>{#p/undyne}{#f/16}* I've been \"appreciating the scenery\" all my life, Papyrus.",
                  "<25>{#p/undyne}{#f/17}* Don't you ever get tired of that!?",
                  "<18>{#p/papyrus}{#f/6}NOT REALLY!!"
               ])
         ],
         () =>
            solo()
               ? ["<18>{#p/papyrus}{#f/4}I'M SOLVING IT AS WE SPEAK..."]
               : [
                  "<18>{#p/papyrus}{#f/5}HMM...",
                  "<18>{#f/0}UNDYNE SHOULD PROBABLY INVEST IN A TELESCOPE.",
                  "<18>{#f/4}I HEARD MY BROTHER WAS OFFERING MEMBERSHIPS..."
               ]
      ),
      s_puzzle2: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}{#f/4}I'VE BEEN TOLD THERE'S A TRICK TO THESE PUZZLES...",
            "<18>{#f/5}INVOLVING WHAT'S DISPLAYED ON THE TILES.",
            "<18>{#f/6}... AND HERE I THOUGHT IT WAS A GUESSING GAME!",
            "<18>{#f/0}I GUESS YOU LEARN SOMETHING NEW EVERY DAY.",
            ...(solo()
               ? []
               : [
                  "<25>{#p/undyne}{#f/16}* Did you hear about the mandate Asgore put out recently?",
                  "<25>{#p/undyne}{#f/16}* Apparently, lasers are \"dangerous\" and \"hazardous\" to kids.",
                  "<18>{#p/papyrus}{#f/6}WELL, HE DOES HAVE A POINT...",
                  "<25>{#p/undyne}{#f/4}* Man!\n* Way to take the fun out of everything!",
                  "<25>{#p/undyne}{#f/12}* I, uh, used to play with those things all the time as a kid.",
                  "<18>{#p/papyrus}{#f/0}... AH.",
                  "<18>{#p/papyrus}{#f/4}OF COURSE YOU'D FIND RISKING YOUR LIFE \"FUN.\"",
                  "<25>{#p/undyne}{#f/14}* Who wouldn't!?!?",
                  "<18>{#p/papyrus}{#f/6}UM... ME???"
               ])
         ],
         () =>
            solo()
               ? ["<18>{#p/papyrus}{#f/4}WAIT, THAT'S MY BROTHER'S LINE..."]
               : [
                  "<18>{#p/papyrus}{#f/4}IT'S ONE THING TO RISK YOUR LIFE...",
                  "<18>{#f/7}AND ANOTHER TO NEEDLESSLY THROW IT AWAY!"
               ]
      ),
      s_jenga: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}{#f/5}AT FIRST, THIS PUZZLE'S OUTCOME DISAPPOINTED ME...",
            "<18>{#f/4}BUT THEN, I REALIZED...",
            "<18>{#f/0}THE CHANCES OF WHAT HAPPENED WERE SO LOW...",
            "<18>{#f/9}... THAT WE MAY BE THE ONLY ONES TO EVER SEE IT!!",
            "<18>{#f/0}HOW LUCKY YOU MUST FEEL RIGHT NOW.",
            ...(solo()
               ? []
               : [
                  "<25>{#p/undyne}{#f/12}* Don't you get it?",
                  "<18>{#p/papyrus}{#f/0}GET WHAT?",
                  "<25>{#p/undyne}{#f/1}* I've been told there's a term for this sort of thing.",
                  "<25>{#p/undyne}{#f/1}* The \"jenga joke.\"",
                  "<25>{#p/undyne}{#f/14}* All those complicated rules, not to mention the wind-up...",
                  "<25>{#p/undyne}{#f/12}* Only to result in a big fat zero.",
                  "<18>{#p/papyrus}{#f/0}I DON'T KNOW WHAT YOU'RE TALKING ABOUT, BUT...",
                  "<18>{#p/papyrus}{#f/7}... HEY, HOW DO -YOU- KNOW WHAT HAPPENED HERE?",
                  "<25>{#p/undyne}{#f/15}* Well... I might've swung by the lab earlier, and...",
                  "<18>{#p/papyrus}{#f/7}YOU WERE SPYING ON ME!?",
                  "<25>{#p/undyne}{#f/8}* Not you, Papyrus!!",
                  "<18>{#p/papyrus}{#f/4}哦。",
                  "<18>{#p/papyrus}{#f/7}... SO YOU WERE SPYING ON THE HUMAN!?!?",
                  "<25>{#p/undyne}{#f/17}* I'm the captain of the Royal Guard!!\n* What do you think!"
               ])
         ],
         () =>
            solo()
               ? ["<18>{#p/papyrus}LUCK IS ON OUR SIDE TODAY, HUMAN!"]
               : ["<18>{#p/papyrus}JOKE OR NOT, IT WAS STILL PRETTY LUCKY, HUH?"]
      ),
      s_pacing: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}THE SENTRY STATION OF CANIS MINOR.",
            "<18>{#f/4}ALSO THE FAVORED SPOT OF THOSE MOON ROCK SALESFOLK.",
            "<18>{#f/5}HMM... I WONDER WHAT THESE ROCKS ARE MADE OF.",
            "<18>{#f/4}THEY CAN'T BE MADE OF MOONS, BECAUSE...",
            "<18>{#f/7}MOONS ARE JUST BIG ROCKS ANYWAY!",
            "<18>{#f/5}DOES THAT MEAN MOONS ARE MOON ROCKS THEMSELVES?",
            "<18>{#f/5}WHERE DOES \"MOON\" END AND \"MOON ROCK\" BEGIN?",
            ...(solo()
               ? []
               : [
                  "<25>{#p/undyne}{#f/14}* I don't think there's any right answer to that, Papyrus.",
                  "<25>{#f/7}* ... not that you shouldn't think about it!!",
                  "<25>{#f/1}* Questions like that are great for exercising the brain!",
                  "<25>{#f/14}* Also known as the most important muscle in the body.",
                  "<18>{#p/papyrus}{#f/4}FOR A HUMAN, PERHAPS...",
                  "<18>{#f/7}BUT FOR A MONSTER, IT'S ENTIRELY DIFFERENT!",
                  "<25>{|}{#p/undyne}{#f/12}* I know, I was just trying to make it easy for them to- {%}",
                  "<18>{#p/papyrus}{#f/0}YOU SEE, MONSTERS DON'T REALLY USE BRAINS TO THINK.",
                  "<18>{#f/4}IT'S MORE LIKE... A SOUL THING.",
                  "<25>{#p/undyne}{#f/1}* As opposed to a SKULL thing.",
                  "<18>{#p/papyrus}{#f/7}OH MY GOD!!!"
               ])
         ],
         () =>
            solo()
               ? ["<18>{#p/papyrus}{#f/4}PERHAPS US MORTALS ARE NOT WORTHY OF SUCH KNOWLEDGE."]
               : ["<25>{#p/undyne}{#f/12}* Just call me \"pundyne.\"", "<18>{#p/papyrus}{#f/0}PLEASE DON'T."]
      ),
      s_puzzle3: pager.create(
         0,
         [
            "<18>{#p/papyrus}{#f/5}SO...\nWHAT HAPPENED HERE, IS...",
            "<18>{#f/5}...",
            "<18>{#f/4}LET'S NOT TALK ABOUT THIS PUZZLE."
         ],
         () =>
            solo()
               ? ["<18>{#p/papyrus}{#f/4}..."]
               : [
                  "<25>{#p/undyne}{#f/12}* ... it can't be that bad, right?",
                  "<18>{#p/papyrus}{#f/5}TRUST ME.",
                  "<18>{#f/4}IT WAS PRETTY BAD.",
                  "<25>{#p/undyne}{#f/11}* ... if you say so..."
               ],
         () => (solo() ? ["<18>{#p/papyrus}{#f/4}..."] : ["<25>{#p/undyne}{#f/7}* He said not to talk about it!!"])
      ),
      s_greater: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}THE SENTRY STATION OF CANIS MAJOR...",
            "<18>{#f/5}THAT DOG HAS A HEART OF GOLD- PRESSED LATINUM.",
            "<18>{#f/4}IF ONLY -I- WAS IN THE ROYAL GUARD...",
            "<18>{#f/0}THEN, I'D BE ABLE TO REPAY IT FOR ITS KINDNESS!",
            ...(solo()
               ? []
               : [
                  "<25>{#p/undyne}{#f/14}* I could repay it for you, if you like.",
                  "<18>{#p/papyrus}{#f/7}IT'S NOT THE SAME IF I DON'T DO IT MYSELF!",
                  "<25>{#p/undyne}{#f/17}* Couldn't you just wait until it gets home!?",
                  "<18>{#p/papyrus}{#f/7}IT'D MEAN MORE IF IT WAS AT ITS WORKPLACE!",
                  "<25>{#p/undyne}{#f/1}* You're right.\n* I'll let you appear as a hologram there.",
                  "<18>{#p/papyrus}{#f/7}哼！！！"
               ])
         ],
         () =>
            solo()
               ? ["<18>{#p/papyrus}{#f/5}IT'S TOO BAD I MIGHT NEVER BE A ROYAL GUARD."]
               : ["<18>{#p/papyrus}{#f/7}NOTHING WILL EVER REPLACE FACE-TO- FACE CONVERSATION!"]
      ),
      s_math: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}MATH -HAS- ALWAYS BEEN A PET PEEVE OF MINE.",
            "<18>{#f/5}CALCULUS THIS, GEOMETRY THAT...",
            "<18>{#f/4}WHATEVER HAPPENED TO COUNTING ON YOUR FINGERBONES?",
            "<18>{#f/7}ALL THE \"ADVANCED\" MATH IS TOTALLY UNNECESSARY!",
            ...(solo()
               ? []
               : [
                  "<25>{#p/undyne}{#f/14}* You really believe that, don't you?",
                  "<25>{#f/17}* We'd still be living in the dark ages if it wasn't for that!",
                  "<25>{#f/16}* Then again, that WOULD also mean we'd still have a home planet...",
                  "<18>{#p/papyrus}{#f/5}I KNOW, I KNOW...",
                  "<18>{#p/papyrus}{#f/7}I JUST DON'T LIKE SOLVING IT!",
                  "<25>{#p/undyne}{#f/14}* Oh, no, I'm totally with you on that."
               ])
         ],
         () => [
            "<18>{#p/papyrus}{#f/0}IF YOU REALLY WANT HELP WITH ADVANCED MATH...",
            ...(solo()
               ? [
                  "<18>{#f/0}THERE'S NOBODY BETTER THAN DR. ALPHYS!!",
                  "<18>{#f/4}THEY SAY SHE'S LIKE A LIVING CALCULATOR...",
                  "<18>{#f/0}AND A VERY SCIENTIFIC ONE AT THAT!"
               ]
               : [
                  "<25>{#p/undyne}{#f/1}* Just ask Dr. Alphys?",
                  "<18>{#p/papyrus}{#f/9}WOW, I WONDER WHAT GAVE YOU THAT IDEA!!",
                  "<18>{#p/papyrus}{#f/4}... OH WAIT.",
                  "<18>{#p/papyrus}{#f/4}IT'S BECAUSE SHE FILES ALL YOUR REPORTS FOR YOU.",
                  "<25>{#p/undyne}{#f/17}* She's good at sorting out the dates, okay??"
               ])
         ]
      ),
      s_bridge: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}REMEMBER THE \"GAUNTLET OF DEADLY TERROR?\"",
            "<18>{#f/4}BELIEVE IT OR NOT, IT HAS A SECRET SEVENTH WEAPON...",
            "<18>{#f/6}WHICH WOULD'VE TRULY TAKEN YOUR BREATH AWAY!",
            ...(solo()
               ? ["<18>{#f/5}..."]
               : [
                  "<25>{#p/undyne}{#f/12}* What about the one that'd leave you speechless?",
                  "<18>{#p/papyrus}{#f/0}THAT'S THE ULTRA- SECRET EIGHTH WEAPON, ACTUALLY.",
                  "<25>{#p/undyne}{#f/1}* Ooh.\n* Sounds dangerous.",
                  "<18>{#p/papyrus}{#f/6}WHY DO YOU THINK I DIDN'T USE IT!?"
               ])
         ],
         () =>
            solo()
               ? ["<18>{#p/papyrus}{#f/6}... LITERALLY!!"]
               : [
                  "<18>{#p/papyrus}{#f/4}DON'T EVEN GET ME STARTED...",
                  "<18>{#f/4}ON THE HYPER- SECRET TENTH WEAPON.",
                  "<18>{#f/6}... WAIT, I FORGOT THE MEGA-SECRET NINTH WEAPON!",
                  "<18>{#f/0}THAT ONE WOULD TOTALLY KNOCK YOUR SOCKS OFF."
               ],
         () =>
            solo()
               ? [
                  "<18>{#p/papyrus}{#f/0}GOOD THING I DIDN'T USE IT, HUH?",
                  "<18>{#f/4}NOT TO MENTION THE TWENTY OTHER WEAPONS I HAD."
               ]
               : [
                  "<18>{#p/papyrus}{#f/4}AND YOUR SHIRT, AND YOUR SHOES...",
                  "<18>{#f/6}... BUT MOST IMPORTANTLY, YOUR SERVICE!"
               ]
      ),
      s_town1: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}STARTON TOWN: THE NORTH SIDE!",
            "<18>{#f/5}A SIDE I DON'T SPEND MUCH TIME ON.",
            "<18>{#f/4}SANS, ON THE OTHER HAND...",
            ...(solo()
               ? ["<18>{#f/4}... WELL, YOU CAN PROBABLY GUESS WHY HE DOES."]
               : [
                  "<25>{#p/undyne}{#f/14}* ... enjoys the new and improved food they're selling at Grillby's!",
                  "<18>{#p/papyrus}{#f/4}NEW AND IMPROVED, YOU SAY?",
                  "<18>{#f/5}I SUPPOSE IT -IS- BETTER THAN BEFORE...",
                  "<18>{#f/7}BUT STILL NOTHING COMPARED TO HOME- COOKED PASTA!"
               ])
         ],
         () =>
            solo()
               ? ["<18>{#p/papyrus}{#f/0}IT HAS SOMETHING TO DO WITH GRILLBY'S."]
               : [
                  "<18>{#p/papyrus}{#f/5}IF ONLY HE APPRECIATED WHAT I DO FOR HIM.",
                  "<18>{#p/papyrus}{#f/6}BROTHERS, AM I RIGHT?"
               ]
      ),
      s_taxi: pager.create(
         0,
         () => [
            ...(SAVE.data.n.plot < 65
               ? [
                  "<18>{#p/papyrus}{#f/0}IS THE TAXI OUT YET TODAY?",
                  "<18>{#f/5}HMM... IT TENDS TO COME OUT IN THE LATER HOURS."
               ]
               : [
                  "<18>{#f/0}I HEARD THE TAXI IS FINALLY OUT!",
                  "<18>{#f/5}HMM... THAT MUST MEAN WE'RE IN THE LATER HOURS."
               ]),
            "<18>{#f/6}AS FOR HOW TO TELL THE LATER HOURS FROM EARLIER ONES?",
            ...(solo()
               ? ["<18>{#f/4}... I'LL GET BACK TO YOU ON THAT."]
               : [
                  "<25>{#p/undyne}{#f/12}* Uh... I think you just made those up.",
                  "<25>{#p/undyne}{#f/17}* There ARE no \"later hours\" on the outpost.",
                  "<18>{#p/papyrus}{#f/4}CORRECT...",
                  "<18>{#f/9}... UNTIL NOW!",
                  "<18>{#f/9}IN DUE TIME, EVERYONE WILL ADOPT MY SYSTEM!",
                  "<18>{#f/0}IT'LL BE A GRAND TIMEKEEPING REVOLUTION!"
               ])
         ],
         () =>
            solo()
               ? ["<18>{#p/papyrus}{#f/6}EVENTUALLY!!!"]
               : [
                  "<18>{#p/papyrus}{#f/4}FOR OUR FIRST REVOLUTION MEETING...",
                  "<18>{#f/0}WE'LL NEED TO AGREE ON A SPECIFIC TIME.",
                  "<18>{#f/9}BUT NO WORRIES!\nI'LL JUST TELL THE PARTICIPANTS...",
                  "<18>{#f/9}... TO ARRIVE IN THE EARLY HOURS!",
                  "<25>{#p/undyne}{#f/1}* And how will they know what those are?",
                  "<18>{#p/papyrus}{#f/4}RIGHT...",
                  "<18>{#f/0}WE'LL HAVE TO DISCUSS THAT AT THE MEETING."
               ]
      ),
      s_town2: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}STARTON TOWN: THE SOUTH SIDE!",
            "<18>{#f/4}OR AS I LIKE TO CALL IT...",
            "<18>{#f/9}THE BEST SIDE IN THE COSMOS!",
            ...(solo()
               ? []
               : [
                  "<25>{#p/undyne}{#f/14}* No doubt because YOU live there.",
                  "<18>{#p/papyrus}{#f/4}NOT ONLY THAT...",
                  "<18>{#f/0}IT'S ALSO THE SIDE THAT DOESN'T HAVE GRILLBY'S ON IT!!"
               ])
         ],
         [
            "<18>{#p/papyrus}{#f/4}IT'S NO WONDER A FRIENDLY GHOST SET UP SHOP HERE...",
            "<18>{#f/9}WHO WOULDN'T WANT TO BE IN PROXIMITY OF SUCH GREATNESS?",
            "<18>{#f/0}I CERTAINLY COULDN'T RESIST."
         ]
      ),
      s_battle: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}{#f/9}STANDING AT THE SITE OF OUR LEGENDARY BATTLE?",
            "<18>{#f/0}NO, NO, GO AHEAD.\nIT'S A PLACE OF HISTORICAL VALUE.",
            ...(solo()
               ? []
               : [
                  "<25>{#p/undyne}{#f/1}* Don't admire the view for too long, punk!",
                  "<25>{#f/7}* You've still gotta admire the site of OUR legendary battle!",
                  "<18>{#p/papyrus}{#f/6}HOW MANY LEGENDARY BATTLES HAVE THEY BEEN IN?",
                  "<25>{#p/undyne}{#f/8}* Who knows!!"
               ])
         ],
         () =>
            solo()
               ? ["<18>{#p/papyrus}{#f/4}THEY'LL HAVE TO PUT IT IN A MUSEUM SOMEDAY..."]
               : [
                  "<25>{#p/undyne}{#f/1}* Regardless of what happens now...",
                  "<25>{#f/7}* You better not have a battle more legendary than OURS!",
                  "<25>{#f/14}* Not unless I get to be a part of it!\n* Fuhuhu!"
               ]
      ),
      s_exit: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}{#f/4}CAREFUL NOW...",
            "<18>{#f/0}THAT DOOR THERE IS THE ENTRANCE TO THE FOUNDRY.",
            "<18>{#f/5}ONLY DARKNESS AWAITS YOU IN SUCH A PLACE.",
            ...(solo()
               ? []
               : [
                  "<25>{#p/undyne}{#f/1}* You'll get no arguments from me.",
                  "<25>{#f/16}* Half the time, I just use my jetpack as a flashlight...",
                  "<18>{#p/papyrus}{#f/6}WHAT ABOUT THE OTHER FLASHLIGHTS I GAVE YOU?",
                  "<25>{#p/undyne}{#f/1}* Oh, those?",
                  "<25>{#f/14}* ... yeah, I kinda dropped them all trying to use my jetpack.",
                  "<18>{#p/papyrus}{#f/4}OF COURSE..."
               ])
         ],
         () =>
            solo()
               ? ["<18>{#p/papyrus}{#f/6}DID I MENTION THE DARKNESS THAT AWAITS YOU?"]
               : [
                  "<18>{#p/papyrus}IF I'VE LEARNED ONE THING FROM UNDYNE...",
                  "<18>{#f/5}IT'S THAT IT ALL COMES BACK AROUND TO THAT JETPACK.",
                  "<18>{#f/4}NO MATTER THE TIME, OR PLACE...",
                  "<18>{#f/5}SHE'S ALWAYS GETTING INTO TROUBLE WITH IT.",
                  "<25>{#p/undyne}{#f/14}* And you wouldn't have it any other way!",
                  "<25>{#p/undyne}{#f/17}* Right?",
                  "<18>{#p/papyrus}{#f/6}... OF COURSE!!"
               ]
      ),
      s_grillbys: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}{#f/5}SO... GRILLBY'S.",
            "<18>{#f/5}IS IT TRUE THEY INSTALLED A YAMOK SAUCE MACHINE...",
            "<18>{#f/6}JUST TO SATISFY MY BROTHER'S OUTRAGEOUS WHIMS?",
            ...(solo()
               ? []
               : [
                  "<25>{#p/undyne}{#f/13}* A what?",
                  "<18>{#p/papyrus}{#f/4}A YAMOK SAUCE MACHINE.",
                  "<18>{#p/papyrus}{#f/4}YOU KNOW, TO DISPENSE YAMOK SAUCE."
               ]),
            "<18>{#f/4}...",
            "<18>{#f/4}I NORMALLY HAVE HOPE FOR OUR KIND, BUT...",
            "<18>{#f/4}NOT WHEN IT COMES TO THINGS LIKE THIS.",
            "<18>{#f/5}... STILL.",
            "<18>{#f/5}IT'S NICE THAT THEY FINALLY FIXED THE JUKEBOX.",
            ...(solo()
               ? []
               : [
                  "<25>{#p/undyne}{#f/8}* I KNOW RIGHT!?",
                  "<25>{#f/7}* That thing's been broken since before I was BORN."
               ])
         ],
         () => [
            "<18>{#p/papyrus}{#f/0}TRACK THREE IS MY PERSONAL FAVORITE.",
            ...(solo() ? [] : ["<25>{#p/undyne}{#f/1}* Mine's track four!"])
         ]
      ),
      s_backrooms: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}{#f/4}SINCE THEY STARTED USING REPLICATORS HERE...",
            "<18>{#f/5}I HAVEN'T BEEN SURE HOW TO FEEL ABOUT IT.",
            "<18>{#f/0}ON ONE HAND, THE NEW FOOD IS WAY MORE HEALTHY.",
            "<18>{#f/7}ON THE OTHER HAND, THEY'VE ABANDONED COOKING ENTIRELY!",
            "<18>{#f/4}SEE THIS ROOM YOU'RE STANDING IN RIGHT NOW?",
            "<18>{#f/7}GUESS WHAT THIS USED TO BE!",
            ...(solo()
               ? []
               : [
                  "<25>{#p/undyne}{#f/1}* Isn't this where Canis Minor likes to sit?",
                  "<25>{#p/undyne}{#f/10}* All alone...\n* Playing those card games with itself...",
                  "<18>{#p/papyrus}{#f/4}OH, COME ON.\nIT'S PERFECTLY CONTENT WITH THAT.",
                  "<18>{#f/0}IT SEEMS TO HAVE ITS OWN AGENDA FOR LIFE...",
                  "<18>{#f/9}INVOLVING CARD GAMES!! AND LOTS OF HEADPATS!",
                  "<25>{#p/undyne}{#f/14}* You're right about the headpats, that's for sure.",
                  "<25>{#p/undyne}{#f/17}* It once barged into a Royal Guard meeting just to BEG for them!",
                  "<18>{#p/papyrus}{#f/6}INTERESTING!!\nBUT WHAT DID YOU DO?",
                  "<25>{#p/undyne}{#f/12}* Well... we all gave it lots of headpats.",
                  "<25>{#p/undyne}{#f/8}* Like we'd ever NOT!!"
               ])
         ],
         () =>
            solo()
               ? ["<18>{#p/papyrus}{#f/4}SOME \"KITCHEN...\"", "<18>{#f/5}NOW THEY JUST USE IT FOR PRIVATE CARD GAMES."]
               : [
                  "<18>{#p/papyrus}{#f/4}IF THEY'RE NOT GOING TO USE THIS AS A KITCHEN...",
                  "<18>{#p/papyrus}{#f/5}PERHAPS A HEADPAT MACHINE WOULD BE A BETTER INVESTMENT."
               ]
      ),
      s_bonehouse: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}{#f/0}WHAT BETTER PLACE TO BE THAN MY HOUSE!",
            "<18>{#p/papyrus}{#f/0}WE'VE GOT EXTRA- TALL SINKS...\nPET MOON ROCKS...",
            "<18>{#p/papyrus}{#f/9}AND EVEN A BALCONY, PRIME FOR OUTDOOR LIVING!",
            "<18>{#f/0}IT'S PRACTICALLY THE ONLY PLACE I FEEL AT HOME.",
            ...(solo()
               ? []
               : [
                  "<25>{#p/undyne}{#f/16}* I'd say the same about MY house, but... y'know.",
                  "<18>{#p/papyrus}{#f/5}YEAH... IT MUST BE TOUGH NOT HAVING ONE.",
                  "<18>{#p/papyrus}{#f/6}... LIKE, WHERE -DO- YOU EVEN FEEL AT HOME NOW?",
                  "<25>{#p/undyne}{#f/1}* Honestly?\n* Here's pretty good!",
                  "<18>{#p/papyrus}{#f/5}BUT... HOW?\nWE'RE JUST STANDING AROUND!",
                  "<25>{#p/undyne}{#f/14}* When I'm with you, ANYWHERE's my home.\n* Fuhuhu.",
                  "<18>{#p/papyrus}{#f/5}... YOU REALLY MEAN THAT?",
                  "<25>{#p/undyne}{#f/8}* Of course!!",
                  "<18>{#p/papyrus}{#f/8}N-NO...!!\nYOU'RE GOING TO MAKE ME CRY!"
               ])
         ],
         () => [
            "<18>{#p/papyrus}{#f/0}I WONDER WHAT HUMANS CALL HOME THESE DAYS.",
            "<18>{#p/papyrus}{#f/4}LAST I HEARD, THEY WERE STILL LIVING ON EARTH...",
            ...(solo()
               ? []
               : [
                  "<25>{#p/undyne}{#f/1}* Actually, they say Earth is a decaying mess right now.",
                  "<25>{#p/undyne}{#f/12}* ... just something I overheard at the Royal Lab.",
                  "<25>{#p/undyne}{#f/13}* They'd found some kind of \"evidence\" for a natural disaster..."
               ])
         ]
      ),
      s_papyrusroom: pager.create(
         0,
         () =>
            SAVE.data.n.plot_date < 1.1
               ? [
                  "<18>{#p/papyrus}WOW, IT ONLY TOOK YOU FOUR SECONDS TO CALL ME!",
                  "<18>YOU MUST BE VERY DESPERATE FOR MY HELP!!!",
                  "<18>{#f/9}BUT DO NOT FEAR.\nTHIS IS PAPYRUS'S HOTFUL HELPLINE!",
                  "<18>{#f/9}JUST DESCRIBE YOUR LOCATION, AND...",
                  "<18>{#f/4}... WAIT.",
                  "<18>{#f/6}YOU'RE STILL IN MY ROOM??",
                  "<18>{#f/5}...",
                  "<18>{#f/5}HAVE YOU HEARD OF SOMETHING CALLED A... DOOR?",
                  "<18>{#f/6}DON'T WORRY!!\nI'LL DRAW A DIAGRAM FOR YOU!"
               ]
               : SAVE.data.n.plot_date < 1.2
                  ? [
                     "<18>{#p/papyrus}{#f/1}WHAT??\nI THOUGHT YOU'D LEFT MY ROOM!!",
                     "<18>{#f/4}WE'LL HAVE TO START OVER FROM SQUARE ONE...",
                     "<18>{#f/5}FIRST, DO YOU KNOW WHO PAPYRUS IS!?"
                  ]
                  : [
                     "<18>{#p/papyrus}{#f/5}SO YOU CAME BACK TO MY ROOM, HUH?",
                     "<18>{#f/5}(SIGH...)",
                     "<18>{#f/5}I GUESS IT -IS- PRETTY COOL.",
                     ...(solo()
                        ? []
                        : [
                           "<25>{#p/undyne}{#f/1}* And what about my room?",
                           "<18>{#p/papyrus}{#f/4}WELL... THAT ROOM'S VERY HOT.",
                           "<18>{#p/papyrus}{#f/4}ON FIRE, IN FACT.",
                           "<25>{#p/undyne}{#f/17}* Good!!\n* I like hot things!"
                        ])
                  ],
         () =>
            SAVE.data.n.plot_date < 1.1
               ? ["<18>{#p/papyrus}{#f/6}HOLD UP!\nI'M STILL DRAWING!"]
               : SAVE.data.n.plot_date < 1.2
                  ? ["<18>{#p/papyrus}{#f/1}DO -I- KNOW WHO PAPYRUS IS!?!?"]
                  : [
                     ...(solo()
                        ? [
                           "<18>{#p/papyrus}{#f/6}HEY, UH, WHILE YOU'RE THERE...",
                           "<18>{#f/6}WOULD YOU MIND LOOKING AFTER MY ACTION FIGURES??",
                           "<18>{#f/5}THEY'VE BEEN... FEELING KIND OF LONELY LATELY.",
                           "<18>{#f/5}... THANKS."
                        ]
                        : ["<25>{#p/undyne}{#f/8}* Especially when they're on fire!!!"])
                  ]
      ),
      s_innterior: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}THE INN'S A GREAT PLACE TO STAY.",
            "<18>{#p/papyrus}THE BEDS ARE NICE, AND THE INN KEEPER IS EVEN NICER.",
            "<18>{#f/5}BUT MOST OF ALL, I LIKE THE PHOTO ON THE WALL...",
            "<18>{#f/0}IT'S A REMINDER OF WHAT MONSTERS ARE TRULY CAPABLE OF.",
            ...(solo()
               ? []
               : [
                  "<25>{#p/undyne}{#f/16}* It's also one of the most well-known photos of our old homeworld...",
                  "<25>{#p/undyne}{#f/9}* One of the last ones still in existence.",
                  "<18>{#p/papyrus}{#f/5}... DO YOU THINK WE'LL EVER FIND ANY OTHERS?",
                  "<25>{#p/undyne}{#f/1}* Well, if we knew some way of scanning a monster's memories...",
                  "<26>{#p/undyne}{#f/14}* We could just use THAT on a monster who lived there!",
                  "<18>{#p/papyrus}{#f/0}WELL... THAT SOUNDS GREAT!",
                  "<18>{#p/papyrus}{#f/4}... IF ONLY WE KNEW SOME WAY OF DOING THAT.",
                  "<18>{#p/papyrus}{#f/4}WHICH WE DON'T.",
                  "<18>{#p/papyrus}{#f/4}SADLY."
               ])
         ],
         () =>
            solo()
               ? ["<18>{#p/papyrus}{#f/5}IF ONLY WE COULD TRAVEL BACK IN TIME..."]
               : [
                  "<18>{#p/papyrus}{#f/5}I SUPPOSE, FOR THE TIME BEING...",
                  "<18>{#p/papyrus}{#f/4}TELLING EACH OTHER BEDTIME STORIES WILL HAVE TO DO.",
                  "<25>{#p/undyne}{#f/1}* Oh yeah, doesn't Sans read you those?",
                  "<18>{#p/papyrus}{#f/0}OF COURSE!\nTHEY'RE LIKE RAW IMAGINATION FUEL!",
                  "<25>{#p/undyne}{#f/1}* Imagine if you got a homeworld survivor to tell you stories...",
                  "<25>{#f/14}* Someone like THAT could provide you with a HUNDRED great bedtimes!",
                  "<18>{#p/papyrus}WITHOUT DOUBT!"
               ]
      ),
      s_beddinng: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}ONCE IN A WHILE, SANS WILL READ ME A BEDTIME STORY.",
            "<18>{#f/5}HAVE YOU EVER HEARD OF \"GENEROUS MONSTER?\"",
            "<18>{#f/6}SANS READ IT TO ME LAST NIGHT, AND...",
            "<18>{#f/8}... AUGH!\nI JUST COULDN'T STOP CRYING!",
            ...(solo()
               ? []
               : [
                  "<25>{#p/undyne}{#f/10}* Ouch...\n* That's a rough one.",
                  "<25>{#p/undyne}{#f/16}* Especially for something written by a human.",
                  "<18>{#p/papyrus}{#f/6}... DO HUMANS ALWAYS WRITE BOOKS THIS TRAGIC!?",
                  "<25>{#p/undyne}{#f/14}* I wouldn't know.\n* It's the only one I've ever read.",
                  "<25>{#p/undyne}{#f/15}* Well, unless you count those \"books\" Alphys posted the other day...",
                  "<18>{#p/papyrus}{#f/4}... I DON'T EVEN WANT TO KNOW."
               ])
         ],
         [
            "<18>{#p/papyrus}{#f/4}NEXT TIME, I'M HAVING SANS READ A HAPPY STORY.",
            "<18>{#f/6}WITH AN -ACTUAL- HAPPY ENDING!",
            "<18>{#f/5}WHERE EVERYBODY COMES AWAY SATISFIED!!",
            "<18>{#f/7}AND WHERE NOBODY HAS TO DIE OR SAY GOODBYE!!!"
         ]
      ),
      s_librarby: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}{#f/6}SHH...\n(NO PHONE CALLS IN THE LIBRARBY!)",
            "<18>{#p/papyrus}{#f/0}(YOU CAN CALL ME BACK WHEN YOU'RE OUT, THOUGH!)",
            ...(solo() ? [] : ["<25>{|}{#p/undyne}{#f/8}* YEAHHHH MAKE SOME NOI- {%}"])
         ],
         () =>
            solo()
               ? ["<18>{#p/papyrus}{#f/4}(REALLY...)"]
               : [
                  "<18>{#p/papyrus}{#f/4}(YES, I HUNG UP TO STOP UNDYNE FROM DISTURBING YOU.)",
                  "<25>{|}{#p/undyne}{#f/8}* YEA- {%}"
               ]
      ),
      f_start: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}BEHOLD THE OMINOUS ATMOSPHERE OF THE FACTORY.",
            "<18>{#f/4}THEY SAY THERE ARE MONSTERS LIVING IN THE PIPES...",
            "<18>{#f/0}AND THEY'D BE ABSOLUTELY RIGHT!",
            "<18>{#f/5}SOME MONSTERS DO PREFER A DANK AND DIRTY ENVIRONMENT.",
            ...(solo()
               ? ["<18>{#f/6}UNLIKE ME!!"]
               : [
                  "<25>{#p/undyne}{#f/1}* I hope they don't mind me using the pipes as a jungle gym.",
                  "<25>{#f/8}* I used to swing on them all the time!",
                  "<18>{#p/papyrus}{#f/6}UNDYNE, NO!\nTHOSE POOR, POOR PIPE DWELLERS!"
               ])
         ],
         () =>
            solo()
               ? ["<18>{#p/papyrus}{#f/0}I PREFER THE SANITARY SIDE OF LIVING."]
               : ["<18>{#p/papyrus}{#f/6}BE CAREFUL WHERE YOU JUNGLE GYM."]
      ),
      f_sans: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}{#f/0}MY BROTHER HAS A STATION HERE.",
            "<18>{#f/4}INDEED, HE MANS TWO STATIONS AT THE SAME TIME.",
            "<18>{#f/0}AMAZING, ISN'T HE?",
            "<18>{#f/0}HE SLACKS OFF TWICE AS MUCH AS NORMAL!!",
            ...(solo()
               ? []
               : [
                  "<25>{#p/undyne}{#f/14}* Sounds to me like he's always watching.",
                  "<18>{#p/papyrus}{#f/0}AH, YES... ALWAYS WATCHING.",
                  "<18>{#f/4}ALWAYS WATCHING A VARIETY OF ONLINE VIDEO CONTENT.",
                  "<25>{#p/undyne}{#f/3}* ... I wonder if he's a fan of Mew Mew Space Adventure.",
                  "<18>{#p/papyrus}{#f/7}YOU'RE MISSING THE POINT!"
               ])
         ],
         () =>
            solo()
               ? ["<18>{#p/papyrus}{#f/5}WE WAKEFUL FOLK COULD ONLY DREAM OF SUCH SLOTH..."]
               : [
                  "<18>{#p/papyrus}{#f/5}EVEN UNDYNE'S BEEN CAUGHT IN SANS'S BAD HABITS...",
                  "<25>{#p/undyne}{#f/17}* I have NOT!!",
                  "<18>{#p/papyrus}{#f/4}... JUST DON'T WATCH IT ON THE JOB, OKAY?",
                  "<25>{#p/undyne}{#f/17}* Okay!!"
               ]
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
                  ? ["<25>{#p/undyne}{#f/17}* ...", "<25>{#p/undyne}{#f/14}* ... yeah, you're right."]
                  : [
                     "<25>{#p/undyne}{#f/8}* Wait, no!\n* I want to know!",
                     "<25>{#f/7}* You!\n* What've you been hiding, punk!?",
                     "<18>{#p/papyrus}{#f/6}NOTHING!\nTHAT'S WHAT!!",
                     "<25>{#p/undyne}{#f/17}* I wasn't asking you.",
                     "<25>{#f/14}* ... eh, I'll just search the dimensional storage array later.",
                     "<18>{#p/papyrus}{#f/6}WHAT!?\nTHAT'S A THING?",
                     "<18>{#p/papyrus}{#f/5}I GUESS THE ITEMS DO HAVE TO GO SOMEWHERE..."
                  ])
         ],
         () =>
            solo()
               ? ["<18>{#p/papyrus}{#f/4}... AT LEAST TELL ME IT'S NOT \"DOG RESIDUE.\""]
               : [
                  "<18>{#p/papyrus}{#f/4}JUST BETWEEN YOU AND I...",
                  "<18>{#f/0}UNDYNE DOESN'T ACTUALLY WANT TO STEAL YOUR STUFF.",
                  "<25>{#p/undyne}{#f/12}* Me? Stealing?\n* Pfft, I dunno what you're talking about!",
                  "<18>{|}{#p/papyrus}SEE?\nSHE'S NOT- {%}",
                  SAVE.data.b.undyne_respecc
                     ? "<25>{#p/undyne}{#f/14}* I'd only steal from someone who ISN'T the bravest punk around!"
                     : "<25>{#p/undyne}{#f/14}* I'd only steal from someone who ISN'T the nicest punk around!",
                  "<18>{#p/papyrus}{#f/4}... SO YOU'D STEAL FROM ME, THEN.",
                  "<25>{#p/undyne}{#f/17}* Don't overthink it!"
               ]
      ),
      f_doge: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}{#f/4}THEY SAY IT'S BEST TO LET SLEEPING DOGS LIE...",
            "<18>{#f/7}BUT, TRUTHFULLY, I DISAGREE!",
            "<18>{#f/5}AFTER ALL...",
            "<18>{#f/6}A GOOD DOG SHOULD VALUE HONESTY ABOVE ALL ELSE!",
            ...(solo()
               ? []
               : [
                  "<25>{#p/undyne}{#f/16}* That reminds me...",
                  "<25>{#f/9}* ... one of my top guards, Doge, quit her job today.",
                  "<18>{#p/papyrus}{#f/6}WHY?\nWAS SHE DISHONEST!?",
                  "<25>{#p/undyne}{#f/1}* Actually, she's one of the most honest dogs I know.",
                  "<25>{#f/16}* I think I just went a little hard on her.",
                  "<18>{#p/papyrus}{#f/5}AH... WELL...",
                  "<18>{#f/6}YOU CAN JUST APOLOGIZE TO HER LATER, RIGHT?",
                  "<25>{#p/undyne}{#f/12}* ... yeah, I guess that's a good place to start."
               ])
         ],
         () =>
            solo()
               ? ["<18>{#p/papyrus}{#f/4}IF ONLY THE DOG UNDER MY SINK HAD SUCH PRIORITIES..."]
               : ["<18>{#p/papyrus}{#f/0}WHEN IN DOUBT, JUST TALK IT OUT.", "<18>{#p/papyrus}{#f/9}WORKS EVERY TIME!"]
      ),
      f_puzzle1: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}{#f/0}WATCH OUT FOR THE ANCIENT HUMAN PYLON PUZZLES!",
            "<18>{#f/4}THOUGH RUDIMENTARY IN THEIR METHOD OF CONSTRUCTION...",
            "<18>{#f/6}THEIR DESIGN IS NOTHING SHORT OF PERPLEXING!",
            ...(solo()
               ? ["<18>{#f/5}IT'S A WONDER WE MONSTERS CAN SOLVE THEM AT ALL."]
               : [
                  "<25>{#p/undyne}{#f/1}* That makes sense.\n* Humans themselves are the same way...",
                  "<25>{#p/undyne}{#f/16}* Waging that perplexing war over something so stupidly simple.",
                  "<18>{#p/papyrus}{#f/6}... WELL THAT GOT DARK FAST!",
                  "<25>{#p/undyne}{#f/12}* ... thankfully, we've got this really nice human to offset it!",
                  "<18>{#p/papyrus}{#f/0}NOW -THAT- I CAN GET BEHIND."
               ])
         ],
         () =>
            solo()
               ? ["<18>{#p/papyrus}{#f/0}I WONDER IF HUMANS STRUGGLE WITH MONSTER PUZZLES."]
               : ["<18>{#p/papyrus}{#f/0}HEH! NOT ALL HUMANS ARE BAD!"]
      ),
      f_quiche: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}{#f/5}MY BROTHER CAME BY HERE THE OTHER DAY...",
            "<18>{#f/5}SAYING HE HAD TO DROP SOMETHING OFF.",
            "<18>{#f/5}I ASKED HIM ABOUT IT, AND HE ISSUED ME A CHALLENGE...",
            "<18>{#f/4}A RIDDLE ABOUT A VERY \"CHEESY\" JOKE.",
            ...(solo()
               ? []
               : [
                  "<25>{#p/undyne}{#f/14}* I think I know what he meant, Papyrus.",
                  "<18>{#p/papyrus}{#f/6}WHAT!?\nWHAT WAS IT?",
                  "<25>{#p/undyne}{#f/1}* Oh, come on.\n* You know your brother better than anyone.",
                  "<25>{#f/12}* Solving this one should be a piece of cake!",
                  "<18>{#p/papyrus}{#f/5}HMM...\nA CHEESY RIDDLE...",
                  "<18>{#p/papyrus}{#f/4}A PIECE OF CAKE..."
               ])
         ],
         ["<18>{#p/papyrus}{#f/6}I'LL GET BACK TO YOU WITH THE ANSWER SOON!"]
      ),
      f_puzzle2: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}{#f/0}MORE OFTEN THAN NOT, A PUZZLE MAY BE UNSOLVABLE...",
            "<18>{#f/5}IF YOU DON'T TAKE THE TIME TO READ THE SIGNS.",
            "<18>{#f/6}YOU'D THINK INTUITION WOULD BE ENOUGH, BUT... NO!",
            ...(solo()
               ? ["<18>{#f/5}... I'VE BEEN EMBARRASSED THIS WAY MANY TIMES..."]
               : [
                  "<25>{#p/undyne}{#f/14}* Yeah, having to read signs kinda stinks.",
                  "<25>{#p/undyne}{#f/8}* I just throw spears at the receiver and call it a day!",
                  "<18>{#p/papyrus}{#f/6}WON'T THAT BREAK THE PUZZLE FOR EVERYONE ELSE!?",
                  "<25>{#p/undyne}{#f/14}* Surprisingly, no.",
                  "<25>{#p/undyne}{#f/14}* Human-made puzzles are even more resillient than THEY are.",
                  "<25>{#p/undyne}{#f/7}* Trust me.\n* I've TRIED to break them on purpose."
               ])
         ],
         () =>
            solo()
               ? [
                  "<18>{#p/papyrus}{#f/0}I'VE SAID IT BEFORE, AND I'LL SAY IT AGAIN.",
                  "<18>{#p/papyrus}{#f/9}READ!\nTHOSE!!\nSIGNS!!!",
                  "<18>{#p/papyrus}{#f/4}AND DO NOTE THE RISING EXCLAMATION POINT COUNT.",
                  "<18>{#p/papyrus}{#f/7}IT MEANS IT'S VERY IMPORTANT!!!!"
               ]
               : [
                  "<18>{#p/papyrus}{#f/4}WELL, YOU KNOW WHAT THEY SAY...",
                  "<18>{#p/papyrus}{#f/0}IF YOU CAN'T BREAK THEM, SOLVE THEM!",
                  "<18>{#p/papyrus}{#f/5}THOUGH, THAT DOES PUT US BACK AT SQUARE ONE."
               ]
      ),
      f_story1: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}{#f/0}SIGNAL STARS ARE PRETTY NEAT, HUH?",
            "<18>{#f/5}THOUGH, THEY ONLY RESET PERIODICALLY.",
            "<18>{#f/4}UNTIL THEN, ONLY A SINGLE MESSAGE IS SAVED...",
            ...(solo()
               ? []
               : [
                  "<25>{#p/undyne}{#f/12}* So that's why my messages to Alphys aren't getting through.",
                  "<18>{#p/papyrus}{#f/6}YOU USED A SIGNAL STAR FOR THAT!?",
                  "<18>{#f/5}OH...\nUNDYNE...",
                  "<25>{#p/undyne}{#f/17}* What?\n* I thought it'd send the message on demand!",
                  "<25>{#f/11}* That's how they used to work, right??",
                  "<18>{#p/papyrus}{#f/0}AH, NOT EXACTLY.",
                  "<18>{#f/4}WHEN WE FIRST DISCOVERED THEM GROWING HERE...",
                  "<18>{#f/9}THEY WERE A LOT MORE RECEPTIVE TO NEW SIGNALS!",
                  "<18>{#f/5}THEN, AS THEY GREW OLDER, THEY BECAME SLOWER.",
                  "<25>{#p/undyne}{#f/1}* Huh.\n* Fascinating!",
                  "<25>{#f/12}* I guess I'll have to come up with something else, then."
               ])
         ],
         ["<18>{#p/papyrus}{#f/4}THIS PHONE CALL -PROBABLY- WON'T BE RECORDED."]
      ),
      f_prechase: pager.create(
         0,
         () =>
            SAVE.data.n.plot < 37.11
               ? []
               : SAVE.data.n.plot < 48
                  ? [
                     "<18>{#p/papyrus}THERE USED TO BE A BRIDGE HERE, BUT IT COLLAPSED.",
                     "<18>{#f/5}HOPEFULLY THEY'LL BUILD A NEW ONE SOON...",
                     "<18>{#f/6}RIDING ON A FLIMSY FLOATING PLATFORM IS FEAR-INDUCING!"
                  ]
                  : [
                     "<18>{#p/papyrus}I HEARD THE WORKERS HERE BUILT A BRIDGE.",
                     "<18>{#f/5}THANK THE COSMOS...",
                     "<18>{#f/6}I'VE HAD MY FILL OF FLIMSY FLOATING PLATFORMS!!",
                     ...(solo()
                        ? []
                        : [
                           "<25>{#p/undyne}{#f/7}* You just don't know how to have fun.",
                           "<18>{#p/papyrus}{#f/4}YOU HAVE A JETPACK, SO YOU CAN'T FALL OFF.",
                           "<18>{#f/6}I HAVE NO SUCH GUARANTEES!",
                           "<25>{#p/undyne}{#f/14}* Would it be so much to get you to live a little?",
                           "<25>{#p/undyne}{#f/4}* Even if you DID fall off, it's not like you'd get hurt.",
                           "<25>{#p/undyne}{#f/1}* You'd just... float around for a while.",
                           "<25>{#p/undyne}{#f/14}* And then I'd come and rescue you with my jetpack!",
                           "<18>{#p/papyrus}{#f/6}I'LL TAKE MY CHANCES WITH THE BRIDGE, THANK YOU!"
                        ])
                  ],
         [
            "<18>{#p/papyrus}{#f/0}NOTHING QUITE LIKE THE SAFETY AND SECURITY...",
            "<18>{#f/0}OF A SOLID, STABLE, SOUNDLY- DESIGNED BRIDGE.",
            "<18>{#f/9}A TRUE TESTAMENT TO SUPERB ENGINEERING!!"
         ]
      ),
      f_chase: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}{#f/0}THE FIRST TIME I SAW THIS ROOM, I WAS TRULY AMAZED.",
            "<18>{#f/4}SO MUCH SO, THAT I COULDN'T FIND MY WAY OUT.",
            "<18>{#f/6}... NOT TO MENTION THE TRAPS!",
            ...(solo()
               ? []
               : [
                  "<25>{#p/undyne}{#f/1}* Oh yeah, I forgot about those things...",
                  "<25>{#p/undyne}{#f/14}* Eh, most people know the way through.\n* It'll be fine.",
                  "<18>{#p/papyrus}{#f/6}THIS SEEMS LIKE A RECIPE FOR DISASTER.",
                  "<25>{#p/undyne}{#f/12}* Don't worry about it.\n* In fact, it's been kinda handy!",
                  "<25>{#p/undyne}{#f/1}* I think the canine unit even started using it as a training ground.",
                  "<18>{#p/papyrus}{#f/4}AND HOW DOES THAT WORK, EXACTLY?",
                  "<25>{#p/undyne}{#f/17}* It's something about \"tactical temptation avoidance?\"",
                  "<25>{#p/undyne}{#f/12}* They put treats behind the trap paths, and the dogs try to avoid them.",
                  "<18>{#p/papyrus}{#f/5}I TAKE IT BACK.\nIT'S NOT A RECIPE FOR DISASTER.",
                  "<18>{#p/papyrus}{#f/6}IT'S A PRE-COOKED DISASTER SERVED ON A SILVER PLATTER!"
               ])
         ],
         () =>
            solo()
               ? ["<18>{#p/papyrus}{#f/5}I FIND IT BEST TO STEER CLEAR OF SCARY MAZE GAMES."]
               : [
                  "<25>{#p/undyne}{#f/1}* There used to be a lot more, actually.\n* It's not what it was.",
                  "<18>{#p/papyrus}{#f/6}HOW MUCH MORE?",
                  "<25>{#p/undyne}{#f/12}* ...\n* Many more.",
                  "<18>{#p/papyrus}{#f/5}HOW MANY?",
                  "<25>{#p/undyne}{#f/17}* Very many.",
                  "<18>{#p/papyrus}{#f/6}HOW VERY??",
                  "<25>{#p/undyne}{#f/7}* Knock it off!"
               ]
      ),
      f_entrance: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}{#f/0}YOU'RE AT THE ENTRANCE TO WHAT'S KNOWN AS...",
            "<18>{#f/9}THE \"DARK ZONE.\"",
            "<18>{#f/4}YOU WOULDN'T BELIEVE HOW IT GOT ITS NAME...",
            ...(solo()
               ? []
               : [
                  "<25>{#p/undyne}{#f/14}* You can thank Asgore for THAT brilliancy in naming.",
                  "<25>{#p/undyne}{#f/8}* He always has the BEST names for things!",
                  "<18>{#p/papyrus}{#f/0}I KNOW, RIGHT?\nEVERYTHING IS SO EASY TO GRASP!",
                  "<25>{#p/undyne}{#f/3}* ... you mean that seriously, don't you.",
                  "<18>{#p/papyrus}{#f/0}OF COURSE!\nIT'S A QUALITY OF HIS I APPRECIATE.",
                  "<25>{#p/undyne}{#f/1}* I see...",
                  "<18>{#p/papyrus}{#f/0}MORE IMPORTANTLY, YOU KNOW.",
                  "<18>{#p/papyrus}{#f/9}WITH HIM, YOU CAN'T -NOT- KNOW WHAT SOMETHING IS!"
               ])
         ],
         () =>
            solo()
               ? ["<18>{#p/papyrus}{#f/4}SPOILER ALERT...", "<18>{#p/papyrus}{#f/4}... IT'S VERY DARK INSIDE."]
               : ["<18>{#p/papyrus}{#f/0}AREN'T THINGS BETTER WHEN YOU UNDERSTAND THEM?"]
      ),
      f_lobby: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}{#f/6}I TOTALLY... CAN'T REACH YOU... AT THE MOMENT!",
            "<18>{#f/6}THE CALL... IT'S DEFINITELY... GLITCHING OUT!",
            ...(solo()
               ? [
                  "<18>{#f/6}...",
                  "<18>{#f/4}OKAY, I ADMIT IT'S NOT REALLY DOING THAT.",
                  "<18>{#f/0}... BUT THAT TABLE CERTAINLY IS!"
               ]
               : [
                  "<25>{#p/undyne}{#f/1}* So would you say the call's getting \"sliced\" or \"shredded?\"",
                  "<18>{#p/papyrus}{#f/5}UNFORTUNATELY, IT'S SOMETHING FAR MORE DREADED."
               ])
         ],
         () =>
            solo()
               ? ["<18>{#p/papyrus}{#f/5}REALLY, THOUGH.\nWHAT'S WITH THAT THING, ANYWAY?"]
               : ["<18>{#p/papyrus}{#f/4}IT'S ENCOURAGING UNDYNE TO MAKE CHEESE PUNS."]
      ),
      f_error: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}{#f/0}ON A DIRECT ROUTE FROM THE BEGINNING OF STARTON...",
            "<18>{#f/0}TO THE END OF THE FIRST FLOOR IN AERIALIS...",
            "<18>{#f/0}THAT ROOM MARKS THE HALFWAY POINT OF YOUR JOURNEY.",
            "<18>{#f/5}... WHEREVER YOU INTEND GO NEXT...",
            "<18>{#f/6}YOUR JOURNEY IS AT -LEAST- HALFWAY OVER NOW!",
            ...(solo()
               ? []
               : [
                  "<25>{#p/undyne}{#f/4}* What!?\n* Don't say it like THAT!",
                  "<18>{#p/papyrus}{#f/6}I-I MEAN, YOUR JOURNEY'S JUST GETTING STARTED!",
                  "<18>{#p/papyrus}{#f/6}THERE'S STILL PLENTY OF THINGS TO SEE!",
                  "<18>{#p/papyrus}{#f/6}AND PLENTY OF PLACES TO BE!",
                  "<18>{#p/papyrus}{#f/4}AND MOST OF ALL...",
                  "<18>{#p/papyrus}{#f/9}PLENTY OF NEW FRIENDS TO MEET!",
                  "<25>{#p/undyne}{#f/12}* That's better."
               ])
         ],
         () =>
            solo()
               ? ["<19>{#p/papyrus}{#f/5}HALFWAY OVER..."]
               : ["<19>{#p/papyrus}{#f/9}HERE'S TO THE LONG JOURNEY AHEAD!"]
      ),
      f_telescope: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}{#f/0}MY BROTHER RUNS A TELESCOPE BUSINESS HERE.",
            "<18>{#p/papyrus}{#f/5}SUBSCRIPTIONS, MEMBERSHIPS, SIGN- UPS, VOUCHERS...",
            "<18>{#f/6}IT'S AN ENDLESS MAZE OF TERMS AND CONDITIONS!",
            ...(solo()
               ? [
                  "<18>{#f/5}I DID ONCE TRY TO ENROLL, BUT...",
                  "<18>{#f/4}EVEN I HAVE LIMITS TO WHAT I'M WILLING TO ENDURE."
               ]
               : [
                  "<25>{#p/undyne}{#f/13}* I doubt a single person has managed to enroll properly.",
                  "<18>{#p/papyrus}{#f/5}YEAH... YOU'RE PROBABLY RIGHT.",
                  "<18>{#p/papyrus}{#f/6}DO THOSE \"PREMIUM\" TELESCOPES EVEN WORK AT ALL!?",
                  "<25>{#p/undyne}{#f/8}* Who knows!!",
                  "<25>{#p/undyne}{#f/1}* But it's fine, because the normal ones work well enough.",
                  "<25>{#p/undyne}{#f/14}* I use them all the time!"
               ])
         ],
         ["<18>{#p/papyrus}{#f/4}LEAVE IT TO A PRANKSTER TO MAKE THINGS TRICKY..."]
      ),
      f_bird: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}{#f/9}THE MOST INFAMOUS.",
            "<18>{#f/9}THE MOST FEARLESS.",
            "<18>{#f/9}THE MOST BRAVESTEST.",
            "<18>{#f/9}THE MONSTER.\nTHE MYTH.\nTHE LEGEND...",
            "<18>{#f/9}THE YELLOW BIRD.",
            ...(SAVE.data.n.plot < 42
               ? [
                  "<18>{#f/9}...",
                  "<18>{#f/4}... WAIT.",
                  "<18>{#f/1}IT'S NOT THERE ANYMORE!?!?",
                  "<18>{#f/8}HOW COULD THIS BE!!!"
               ]
               : solo()
                  ? ["<18>{#f/4}... NOT LIKE WE HAVE ANY OTHER WAY TO CROSS THE GAP."]
                  : [
                     "<25>{#p/undyne}{#f/1}* That bird will carry anyone past the gap.\n* It NEVER says no.",
                     "<25>{#f/16}* When I was younger, it once gave ME a lift.\n* It took an hour...",
                     "<25>{#f/17}* But this bird NEVER once thought of giving up!!!",
                     "<25>{#f/1}* Cherish this bird."
                  ])
         ],
         () =>
            SAVE.data.n.plot < 42
               ? [
                  "<18>{#p/papyrus}{#f/8}I JUST DON'T UNDERSTAND..!",
                  "<18>{#f/8}HOW COULD THE ONE AND ONLY YELLOW BIRD ABANDON US???"
               ]
               : [
                  "<18>{#p/papyrus}{#f/0}TRUST ME, THE GAP IS EVEN LONGER THAN IT SEEMS.",
                  "<18>{#f/4}AND POSSIBLY NON- EUCLIDIAN.",
                  ...(solo()
                     ? []
                     : [
                        "<25>{#p/undyne}{#f/7}* So you're telling me it also has to navigate through THAT!?",
                        "<25>{#p/undyne}{#f/8}* CHERISH THIS BIRD EVEN HARDER, DAMN IT!",
                        "<18>{#p/papyrus}{#f/6}I'M CHERISHING AS HARD AS I CAN!!",
                        "<25>{#p/undyne}{#f/7}* GOOD!!!"
                     ])
               ]
      ),
      f_stand: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}{#f/0}LEGEND HAS IT...",
            "<18>THE LOCAL ICE CREAM GUY HANDS OUT POSTCARDS.",
            "<18>{#f/4}SOURCES SAY THESE \"POSTCARDS\" HAVE UNSPOKEN POWER...",
            "<18>{#f/9}... TO UNLOCK MORE TASTY TREATS!",
            ...(solo()
               ? []
               : [
                  "<26>{#p/undyne}{#f/8}* And I LOVE tasty treats!",
                  "<25>{#p/undyne}{#f/14}* Well, as long as they're not cold, anyway.",
                  "<25>{#p/undyne}{#f/17}* Then I don't love them that much!!"
               ])
         ],
         [
            "<18>{#p/papyrus}{#f/0}I WONDER WHAT OTHER POWERS THESE POSTCARDS HAVE.",
            "<18>{#f/4}THEY DO TEND TO RUN OUT QUITE SPEEDILY..."
         ]
      ),
      f_abyss: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}{#f/5}WE LOOK UPON THIS WINDING PATH FULL OF SIGNAL STARS...",
            "<18>{#f/4}AND WE DEEM IT \"NORMAL.\"",
            "<18>{#f/0}YOU KNOW WHAT ELSE IS \"NORMAL?\"",
            "<18>{#f/0}THE FACT THAT THIS PHONE CALL EVEN GETS DOWN THERE!",
            "<18>{#f/6}TOTALLY NORMAL!!",
            ...(solo()
               ? []
               : [
                  "<25>{#p/undyne}{#f/1}* So you're saying that's NOT normal, right?",
                  "<18>{#p/papyrus}{#f/0}RIGHT.",
                  "<25>{#p/undyne}{#f/14}* ... at this rate, you'll be a \"sarcasm sensei\" in no time!",
                  "<18>{#p/papyrus}{#f/4}I'M LOOKING FORWARD TO USING IT ON MY BROTHER.",
                  "<25>{#p/undyne}{#f/1}* Careful now.\n* He's the de-facto WIZARD of sarcasm.",
                  "<25>{#p/undyne}{#f/17}* If you want any chance of besting him, you've gotta train like CRAZY!",
                  "<18>{#p/papyrus}{#f/4}OH, BELIEVE ME, UNDYNE, I'M READY.",
                  "<25>{#p/undyne}{#f/8}* I hope you're not being sarcastic about that!"
               ])
         ],
         () =>
            solo()
               ? ["<18>{#p/papyrus}{#f/6}I'M DEFINITELY NOT BEING SARCASTIC!!"]
               : ["<19>{#p/papyrus}{#f/4}SARCASM TRAINING'S -TOTALLY- THE EASIEST THING EVER."]
      ),
      f_muffet: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}{#f/5}I WAS SURFING THE WEB THE OTHER DAY...",
            "<18>{#f/6}TURNS OUT SPIDER SILK IS STRONGER THAN YOU'D THINK!",
            "<18>{#f/4}WHICH WEB WAS I SURFING, YOU ASK?",
            ...(solo()
               ? ["<18>{#f/4}... YOU PROBABLY DON'T WANT TO KNOW."]
               : [
                  "<25>{#p/undyne}{#f/17}* ... seriously?\n* This is the second time you've done this!",
                  "<18>{#p/papyrus}{#f/6}I WANTED TO KNOW HOW THE STRINGS WERE ATTACHED!",
                  "<25>{#p/undyne}{#f/8}* That was your excuse last time!!",
                  "<18>{#p/papyrus}{#f/6}BUT WHAT ABOUT MY CURIOSITY!!!",
                  "<25>{#p/undyne}{#f/12}* ... maybe leave the web-crawling to spiders for now."
               ])
         ],
         () =>
            solo()
               ? ["<18>{#p/papyrus}{#f/4}IT WASN'T ON THE COMPUTER, THAT'S FOR SURE."]
               : ["<18>{#p/papyrus}{#f/4}PERHAPS I SHOULD GET A ROBOT TO CRAWL THE WEB..."]
      ),
      f_shyren: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}{#f/5}I'VE HEARD A VERY SHY MONSTER LIVES HERE...",
            "<18>{#f/0}WELL. IF YOU WANT SOMEONE TO OPEN UP...",
            "<18>{#f/9}YOU SHOULD ENGAGE THEM IN COMBAT!",
            ...(solo()
               ? ["<18>{#f/0}A SOUND STRATEGY FOR ANY OCCASION."]
               : [
                  "<25>{#p/undyne}{#f/8}* And don't forget to get loud in their face!!",
                  "<18>{#p/papyrus}{#f/6}... THAT MIGHT BE A BIT MUCH.",
                  "<25>{#p/undyne}{#f/14}* Well, it worked on the ELITE squad yesterday, so...",
                  "<18>{#p/papyrus}{#f/4}...",
                  "<18>{#p/papyrus}{#f/4}I'M STARTING TO RECONSIDER MY CAREER PATH...",
                  "<25>{#p/undyne}{#f/17}* No, wait!!\n* I wasn't talking about ALL the guards!",
                  "<18>{#p/papyrus}{#f/6}AND WHEN I -DO- BECOME AN ELITE SQUAD MEMBER???",
                  "<25>{#p/undyne}{#f/14}* ... I'll just be nice to you specifically!",
                  "<18>{#p/papyrus}{#f/7}BUT THAT WOULDN'T BE FAIR TO THE OTHER MEMBERS!!",
                  "<25>{#p/undyne}{#f/17}* I give up!!"
               ])
         ],
         () => ["<18>{#p/papyrus}{#f/0}HUM HUM HUM...", ...(solo() ? [] : ["<25>{#p/undyne}{#f/12}* Hum hum hum..."])]
      ),
      f_statue: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}{#f/4}A MYSTERIOUS STATUE...",
            "<18>{#p/papyrus}{#f/4}OUT IN THE MIDDLE OF THE FACTORY...",
            "<18>{#p/papyrus}{#f/6}... I WONDER WHAT THIS COULD MEAN!",
            ...(solo()
               ? []
               : [
                  "<25>{#p/undyne}{#f/16}* That statue's been out there forever...",
                  "<25>{#p/undyne}{#f/17}* ... but nobody seems to know where it came from!",
                  "<25>{#p/undyne}{#f/1}* It has a cool music box inside, though."
               ])
         ],
         () =>
            solo()
               ? [
                  "<18>{#p/papyrus}{#f/4}BREAKING NEWS.",
                  "<18>{#f/4}MYSTERIOUS STATUE IS MYSTERIOUS.",
                  "<18>{#f/6}WHO WOULD'VE THOUGHT!!"
               ]
               : [
                  "<25>{#p/undyne}{#f/11}* Some say the statue also contains a SECOND music box...",
                  "<25>{#f/12}* ... but I'll believe it when I hear it."
               ]
      ),
      f_piano: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}{#f/5}IF ONLY THERE EXISTED A ROOM...",
            "<18>WHERE I COULD EXPRESS MYSELF THROUGH MUSIC.",
            "<18>A LONELY ROOM, SEPARATED FROM CIVILIZATION...",
            "<18>WITH NAUGHT BUT A SINGLE PIANO AT ITS CENTER...",
            ...(solo()
               ? ["<18>{#f/0}... OH WAIT!\nTHAT'S THIS ROOM!"]
               : [
                  "<25>{#p/undyne}{#f/10}* And maybe that piano would be used to solve puzzles...",
                  "<25>{#p/undyne}{#f/10}* Or practice combat by fighting the ivories...",
                  "<25>{#p/undyne}{#f/10}* Or play a certain melody that reminds you of someone special...",
                  "<25>{#p/undyne}{#f/7}* ... if only you were in that room RIGHT NOW!!",
                  "<18>{#p/papyrus}{#f/6}I WAS GOING TO MENTION THAT!!"
               ])
         ],
         ["<18>{#p/papyrus}NEXT TIME I COME HERE, I SHOULD WRITE A MUSICAL.", "<18>IT'D BE CALLED \"STORY OF PAPYRUS.\""]
      ),
      f_artifact: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}I DON'T THINK I'VE EVER BEEN IN THIS ROOM BEFORE.",
            "<18>{#f/6}WHAT'S IT LIKE?\nARE THERE UNTOLD TREASURES ABOUND?",
            "<18>{#f/4}FOR THE RECORD, THAT QUESTION WAS RHETORICAL.",
            "<18>{#f/7}I'D RATHER FIND OUT FOR MYSELF!",
            ...(solo()
               ? []
               : [
                  "<25>{#p/undyne}{#f/14}* Great to see you've still got a sense of adventure in you.",
                  "<18>{#p/papyrus}{#f/9}OF COURSE!!\nI, THE GREAT PAPYRUS...",
                  "<18>{#f/9}HAVE A SENSE OF ADVENTURE BEYOND COMPARE!",
                  "<18>{#f/4}WELL, THAT'S NOT -ENTIRELY- TRUE.",
                  "<18>{#f/6}SANS FINDS A NEW WAY TO EXPLORE THE COUCH EVERY DAY.",
                  "<25>{#p/undyne}{#f/17}* ... ah.",
                  "<25>{#f/17}* So that's why that couch is so messy."
               ])
         ],
         () =>
            solo()
               ? ["<18>{#p/papyrus}{#f/6}NO SPOILERS!!!"]
               : ["<18>{#p/papyrus}{#f/4}AND THAT'S NOT EVEN HIS MOST IMPRESSIVE FEAT."]
      ),
      f_path: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}{#f/0}KEEP GOING, AND YOU'LL WITNESS THE CITADEL.",
            "<18>{#f/4}YOU CAN'T NORMALLY SEE IT FROM SO FAR AWAY, BUT...",
            "<18>{#f/5}SOMETHING ABOUT THAT ONE ROOM...",
            "<18>... MAKES IT POSSIBLE TO VIEW...",
            ...(solo()
               ? []
               : [
                  "<25>{#p/undyne}{#f/12}* Maybe it's one of those \"spatial distortions\" Alphys talks about.",
                  "<25>{#p/undyne}{#f/1}* The ones that can slow down time if you get too close.",
                  "<18>{#p/papyrus}{#f/5}THE HUMAN SHOULD BE CAREFUL, THEN!",
                  "<18>{#p/papyrus}{#f/6}IF TIME WERE TO SLOW DOWN FULLY, COULD YOU ESCAPE??",
                  "<25>{#p/undyne}{#f/17}* ... there's nothing a little brute force can't solve!"
               ])
         ],
         () =>
            solo()
               ? ["<18>{#p/papyrus}{#f/6}ENJOY THE VIEW WHILE YOU STILL CAN!"]
               : ["<18>{#p/papyrus}{#f/6}JUST BE CAREFUL!"]
      ),
      f_view: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}{#f/0}YOU MUST BE A VERY GREAT MULTITASKER!",
            "<18>{#f/4}IT'D TAKE ONE TO WANT TO CALL SOMEONE...",
            "<18>{#f/5}WITH A VIEW LIKE -THAT- NEARBY.",
            ...(solo()
               ? []
               : [
                  "<25>{#p/undyne}{#f/1}* During human-chasing practice with the ELITE squad...",
                  "<25>{#f/17}* At least one guard ALWAYS gets distracted by it.",
                  "<25>{#f/10}* Whether it's Cozmo, debating the nature of aesthetics...",
                  "<25>{#f/10}* Or Terrestria obsessing over the \"beauty of the universe...\"",
                  "<25>{#f/9}* ... well, actually, it's just those two.",
                  "<18>{#p/papyrus}{#f/5}BUT... AS THE OLDEST MONSTERS ALIVE...",
                  "<18>{#p/papyrus}{#f/6}THEY SHOULD BE GREAT AT DOING THEIR JOB!!",
                  "<26>{#p/undyne}{#f/16}* They ARE good at their job, but... they don't take training seriously.",
                  "<18>{#p/papyrus}{#f/5}OH.\nWELL, THAT'S KIND OF UNFORTUNATE.",
                  "<25>{#p/undyne}{#f/1}* Lucky enough, no fancy view can catch THIS captain's eye!!",
                  "<25>{#f/12}* Which is why it usually falls to me to keep them in check.",
                  "<18>{#p/papyrus}{#f/6}WHILE THAT DOES SOUND HARD...",
                  "<18>{#p/papyrus}{#f/9}... I KNOW YOU'RE MORE THAN CAPABLE OF DOING IT!",
                  "<25>{#p/undyne}{#f/14}* Thanks, Papyrus."
               ])
         ],
         () =>
            solo()
               ? [
                  "<18>{#p/papyrus}{#f/7}WHAT ARE YOU DOING TRYING TO CALL ME?",
                  "<18>{#p/papyrus}{#f/7}YOU'VE GOT FANCY THINGS TO ADMIRE!"
               ]
               : [
                  "<25>{#p/undyne}{#f/1}* Fortunately for you, you're not IN the Royal Guard, punk!",
                  "<25>{#p/undyne}{#f/12}* So...\n* Feel free to get as distracted as you like."
               ]
      ),
      f_plank: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}{#f/5}UNFORTUNATELY, THERE'S NOT A LOT TO SAY HERE.",
            "<18>{#f/4}APART FROM THE BRIDGE TO NOWHERE I HEARD ABOUT...",
            "<18>{#f/5}IT REALLY IS JUST A DEAD END.",
            ...(solo()
               ? []
               : [
                  "<25>{#p/undyne}{#f/17}* What bridge?\n* The one I cut down earlier??",
                  "<25>{#p/undyne}{#f/8}* THAT was just a piece of the old bridge in the factory!",
                  "<18>{#p/papyrus}{#f/6}THE ONE THEY FINALLY REPLACED JUST TODAY??",
                  "<18>{#p/papyrus}{#f/5}WOWIE... I THOUGHT THAT WAS GONE FOREVER...",
                  "<25>{#p/undyne}{#f/14}* Nope.\n* I kept it safe!"
               ])
         ],
         () =>
            solo()
               ? ["<18>{#p/papyrus}{#f/5}PERHAPS YOU COULD CALL BACK SOMEWHERE ELSE?"]
               : ["<18>{#p/papyrus}{#f/4}SO THERE -WAS- SOMETHING TO SAY HERE..."]
      ),
      f_tunnel: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}{#f/0}AH... THE TRASH DEPOSITORY.",
            "<18>{#f/0}A GREAT PLACE TO DISPOSE OF UNDESIRABLE ITEMS.",
            "<18>{#f/4}OR, ALTERNATIVELY...",
            "<18>{#f/9}A GREAT PLACE TO FIND TREASURE AT NO PERSONAL COST!",
            ...(solo()
               ? ["<18>{#f/0}I COME HERE WITH SANS SOMETIMES TO DO THAT."]
               : [
                  "<25>{#p/undyne}{#f/12}* Are you sure that's... uh, safe?",
                  "<25>{#p/undyne}{#f/10}* I get that one's trash is another's treasure, but-",
                  "<18>{#p/papyrus}{#f/0}IF BRATTY AND CATTY CAN DO IT OUT IN SPACE...",
                  "<18>{#p/papyrus}{#f/0}SANS AND I CAN DO IT IN ONE SINGLE ROOM.",
                  "<25>{#p/undyne}{#f/1}* When you put it like that, it doesn't seem so bad.",
                  "<25>{#p/undyne}{#f/17}* Just be sure to get out before the disposal box activates!",
                  "<18>{#p/papyrus}{#f/6}OF COURSE!!\nWE WOULDN'T WANT TO BE VAPORIZED!!"
               ])
         ],
         () =>
            solo()
               ? [
                  "<18>{#p/papyrus}{#f/4}LAST TIME, WE EVEN MANAGED TO FIND A BONE PAINTING...",
                  "<18>{#p/papyrus}{#f/5}THAT WAS ONLY SLIGHTLY DIRTY!!"
               ]
               : ["<18>{#p/papyrus}{#f/6}PERHAPS IT'D BE BEST FOR YOU TO LEAVE THIS ROOM."]
      ),
      f_chute: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}{#f/0}ON THE FLOOR HERE LAY THREE TABLETS.",
            "<18>{#f/0}ONE ABOUT STARLINGS, ONE ABOUT WORMHOLES...",
            "<18>{#f/4}AND ONE CONTAINING SCI-FI ANIME.",
            "<18>{#f/0}PERSONALLY, -I- THINK THEY'RE ALL CONNECTED.",
            "<18>{#f/5}NO DOUBT STARLINGS GOT HERE VIA THE WORMHOLE...",
            "<18>{#f/5}AS FORETOLD BY THAT SCI-FI ANIME SERIES.",
            "<18>{#f/6}IT'S THE ONLY WAY TO EXPLAIN IT ALL AT ONCE!",
            ...(solo()
               ? []
               : [
                  "<25>{#p/undyne}{#f/14}* So that's your theory.",
                  "<25>{#p/undyne}{#f/14}* That all of those tablets are connected in this way.",
                  "<18>{#p/papyrus}{#f/0}YES.",
                  "<25>{#p/undyne}{#f/1}* Okay.\n* Just one question...",
                  "<25>{#p/undyne}{#f/7}* WHERE's the PROOF!?",
                  "<18>{#p/papyrus}{#f/6}IN THE ANIME!!",
                  "<18>{#p/papyrus}{#f/4}THE SCI-FI ANIME.",
                  "<18>{#p/papyrus}{#f/4}WHICH I HAVE YET TO WATCH, BECAUSE I'M TOO BUSY.",
                  "<25>{#p/undyne}{#f/17}* Too busy for sci-fi!?",
                  "<25>{#p/undyne}{#f/8}* You're kidding!!"
               ])
         ],
         ["<18>{#p/papyrus}{#f/5}ONE DAY, HUMAN...", "<18>{#p/papyrus}{#f/5}ONE DAY, I SHALL PROVE MY THEORIES RIGHT."]
      ),
      f_dummy: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}{#f/0}DON'T LOOK PAST THE HIDDEN PATH...",
            "<18>{#f/5}CLOSE YOUR EYES, WALK STRAIGHT...",
            "<18>{#f/5}AND FACE THE TEMMIES' WRATH.",
            "<18>{#f/4}... IT'S A RIDDLE I'VE HEARD ABOUT THIS PLACE.",
            ...(solo()
               ? []
               : [
                  "<25>{#p/undyne}{#f/1}* Hmm... \"don't look past the hidden path...\"",
                  "<25>{#p/undyne}{#f/11}* What hidden path?",
                  "<25>{#p/undyne}{#f/13}* And then... \"close your eyes...\"",
                  "<25>{#p/undyne}{#f/12}* Okay, no no no, hold it right there.",
                  "<26>{#p/undyne}{#f/8}* If I can't SEE anything, how am I supposed to FIND anything!",
                  "<18>{#p/papyrus}{#f/4}SADLY, RIDDLES DO TEND TO BE THIS WAY.",
                  "<18>{#p/papyrus}{#f/7}A BUNCH OF MOSTLY USELESS ADVICE!"
               ])
         ],
         ["<18>{#p/papyrus}{#f/4}DO -YOU- KNOW HOW TO SOLVE THIS RIDDLE?"]
      ),
      f_hub: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}IF YOU SEE A SHOP, YOU SHOULD STOP...",
            "<18>{#f/4}DROP, AND ROLL...",
            "<18>{#f/0}INTO SOME GREAT DEALS!!",
            ...(solo()
               ? [
                  "<18>{#f/9}BECAUSE WE'RE HAVING A FIRE SALE!!",
                  "<18>{#f/5}AT MY IMAGINARY STORE, WHICH SELLS FLAMES."
               ]
               : [
                  "<25>{#p/undyne}{#f/1}* Like the ones at Gerson's shop?",
                  "<25>{#f/8}* I buy stuff from him ALL the time!",
                  "<18>{#p/papyrus}{#f/6}WHAT'S SO SPECIAL ABOUT HIS DEALS?",
                  "<25>{#p/undyne}{#f/17}* Are you kidding?\n* Gerson survived the human- monster war!",
                  "<25>{#f/14}* He's a REAL hero.",
                  "<18>{#p/papyrus}{#f/4}I WAS GOING TO SAY SOMETHING ELSE, BUT OKAY.",
                  "<18>{#f/0}HOORAY FOR GERSON!"
               ])
         ],
         () =>
            solo()
               ? ["<18>{#p/papyrus}{#f/5}IT'S YET ANOTHER DREAM OF MINE..."]
               : [
                  "<18>{#p/papyrus}{#f/0}IT'S IMPORTANT TO ACKNOWLEDGE THE HEROES AMONGST US.",
                  "<18>{#f/5}WITHOUT THEM, WE MIGHT NOT EVEN BE HERE TODAY..."
               ]
      ),
      f_undyne: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}{#f/0}THAT'S UNDYNE'S HOUSE.",
            ...(SAVE.data.n.plot < 48 || world.trueKills > 0
               ? ["<18>{#f/9}THE IDEAL PLACE TO LEARN HOW TO COOK!"]
               : SAVE.data.n.plot_date < 1.3
                  ? ["<18>{#f/4}YOU KNOW, THE ONE WITH THE SKELETON IN FRONT."]
                  : SAVE.data.n.plot_date < 2
                     ? ["<18>{#f/9}DON'T HESITATE TO COME IN!"]
                     : SAVE.data.n.plot_date < 2.1
                        ? [
                           "<18>{#f/6}... YOU'RE STILL AT UNDYNE'S HOUSE??",
                           "<18>{#f/5}SHE, UH, HASN'T EVEN MET UP WITH ME YET.",
                           "<18>{#f/4}MAYBE LEAVE THE ROOM AND...",
                           "<18>{|}{#f/1}... {%}",
                           "<25>{#p/undyne}{#f/12}* Huff... puff...!",
                           "<25>{#f/8}* YEAH!!!\n* That's MY HOUSE!!!",
                           "<18>{#p/papyrus}{#f/6}UH, HI UNDYNE!\nHOW'D YOU GET HERE SO FAST?",
                           "<25>{#p/undyne}{#f/17}I RAN.",
                           "<18>{#p/papyrus}{#f/1}WHAT??\nTHEN YOU MUST HAVE SOMETHING...",
                           "<18>{#f/9}EXTREMELY COOL TO SAY ABOUT YOUR HOUSE!!!",
                           "<25>{#p/undyne}{#f/14}* Nope!!!"
                        ]
                        : [
                           "<18>{#f/4}AT LEAST IT WAS, UNTIL...",
                           "<25>{#p/undyne}{#f/12}* ... we set it on fire.",
                           "<25>{#f/8}* BUT WHO CARES??",
                           "<25>{#f/14}* Hanging out with Papyrus is the BEST!"
                        ])
         ],
         () =>
            SAVE.data.n.plot < 48 || world.trueKills > 0
               ? [
                  "<18>{#p/papyrus}{#f/0}PRO TIP: WHEN COOKING WITH UNDYNE...",
                  "<18>{#f/4}IF SHE STARTS ASSAULTING THE VEGGIES...",
                  "<18>{#f/5}... IT'S TIME TO BAIL."
               ]
               : SAVE.data.n.plot_date < 1.3
                  ? ["<18>{#p/papyrus}{#f/0}NICE TO SEE YOU, TOO!"]
                  : SAVE.data.n.plot_date < 2
                     ? ["<18>{#p/papyrus}{#f/4}WE'RE STILL WAITING HERE, YOU KNOW..."]
                     : SAVE.data.n.plot_date < 2.1
                        ? [
                           "<18>{#p/papyrus}{#f/0}I'M SURE SHE'LL COME UP WITH SOMETHING SOON.",
                           "<25>{#p/undyne}{#f/14}* Don't bet on it!"
                        ]
                        : [
                           "<18>{#p/papyrus}{#f/0}JUST CALL ME THE \"HANGOUT HANDYMAN.\"",
                           "<18>{#f/4}I MAY NOT BE ABLE TO REPAIR YOUR HOUSE...",
                           "<18>{#f/9}BUT I CAN STILL \"FIX YOU UP\" A REALLY GREAT DAY!"
                        ]
      ),
      f_blooky: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}{#f/0}PERHAPS ONE DAY, I'LL LIVE THE QUIET LIFE.",
            "<18>{#f/5}RAISING SNAILS, PRODUCING MUSIC...",
            "<18>{#f/6}BEING SAD AND NOT LETTING ANYONE CHEER ME UP...",
            "<18>{#f/5}ON SECOND THOUGHT, MAYBE THAT ISN'T FOR ME.",
            ...(solo()
               ? []
               : [
                  "<25>{#p/undyne}{#f/17}* They don't even let ME help them feel better!",
                  "<25>{#f/16}* ... guess not everyone can be made happier by hanging out with them.",
                  "<18>{#p/papyrus}{#f/5}YEAH... SANS CAN BE THE SAME WAY AT TIMES.",
                  "<18>{#f/0}I MEAN, DON'T GET ME WRONG.\nHE'S USUALLY OKAY!",
                  "<18>{#f/6}BUT, LIKE EVERYONE, HE HAS HIS BAD DAYS.",
                  "<25>{#p/undyne}{#f/14}* Like \"everyone,\" huh?\n* Does this \"everyone\" include Papyrus?",
                  "<18>{#p/papyrus}{#f/4}OKAY, OKAY...",
                  "<18>{#f/0}ALMOST EVERYONE."
               ])
         ],
         [
            "<18>{#p/papyrus}{#f/0}ALAS, I'M MUCH MORE SUITED AS A CHEERER-UPPER.",
            "<18>{#f/5}... RATHER THAN SOMEONE WHO NEEDS CHEERING UP."
         ]
      ),
      f_snail: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}{#f/4}I'VE HEARD THERE'S A WAY TO BEAT THIS GAME...",
            "<18>{#f/0}SOMETHING ABOUT OFFERING \"TIMELY ENCOURAGEMENT.\"",
            "<18>{#f/5}TIMELY ENCOURAGEMENT...",
            "<18>{#f/4}AS IF THERE'S ENCOURAGEMENT THAT -ISN'T- TIMELY.",
            ...(solo()
               ? []
               : [
                  "<25>{#p/undyne}{#f/12}* Yeah, sometimes it can be a little awkward...",
                  "<25>{#p/undyne}{#f/1}* But for the most part, you're right.",
                  "<18>{#p/papyrus}{#f/0}WHAT DO YOU MEAN?",
                  "<25>{#p/undyne}{#f/1}* Well... if you encourage again and again...",
                  "<25>{#p/undyne}{#f/1}* They might think you're just buttering them up.",
                  "<18>{#p/papyrus}{#f/7}WHAT!?\nI ONLY USE BUTTER FOR COOKING!",
                  "<25>{#p/undyne}{#f/16}* All I'm saying is, if you constantly encourage someone...",
                  "<25>{#p/undyne}{#f/16}* They won't even get a chance to process it.",
                  "<25>{#p/undyne}{#f/17}* So take it at a steady pace!!",
                  "<18>{#p/papyrus}{#f/4}... I'LL START PROCESSING THIS ADVICE RIGHT AWAY."
               ])
         ],
         () =>
            solo()
               ? ["<18>{#p/papyrus}{#f/5}I SUPPOSE TOO MUCH COULD BE OVERWHELMING..."]
               : ["<18>{#p/papyrus}{#f/6}I'LL GET BACK TO YOU WHEN I'M DONE PROCESSING!!!"]
      ),
      f_taxi: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}{#f/5}HAVE YOU EVER NOTICED ANYTHING STRANGE HERE?",
            "<18>{#f/4}I COULD SWEAR A MYSTERIOUS SONG WAS PLAYING...",
            "<18>{#f/5}AND SOMETHING IN THE DISTANCE WAS VISIBLE, TOO...",
            "<18>{#f/0}OH WELL.\nI'M SURE IT'S JUST MY IMAGINATION.",
            ...(solo()
               ? []
               : [
                  "<25>{#p/undyne}{#f/14}* Actually...\n* You're not the only one who's heard something.",
                  "<25>{#p/undyne}{#f/17}* I could have sworn there was something there, too.",
                  "<18>{#p/papyrus}{#f/5}LIKE A SOUND YOU KNOW IS IN THE ROOM WITH YOU...",
                  "<18>{#p/papyrus}{#f/4}... BUT CAN'T BE CONFIRMED WITH YOUR SENSES.",
                  "<25>{#p/undyne}{#f/1}* Yeah!!\n* That's the one!!"
               ])
         ],
         () => [
            "<18>{#p/papyrus}{#f/0}MAYBE IT'S A SOUND FROM THE ORIGINS OF THE COSMOS.",
            "<18>{#p/papyrus}{#f/5}A LOST CALL FROM ACROSS THE STARS...",
            "<18>{#p/papyrus}{#f/5}TRACING BACK TO WHEN THE UNIVERSE BEGAN.",
            ...(solo()
               ? []
               : [
                  "<25>{#p/undyne}{#f/17}* And if the universe HAS no beginning??",
                  "<18>{#p/papyrus}{#f/1}N-NO...!!\nA CHALLENGE TO MY IMPECCABLE THEORY!",
                  "<18>{#p/papyrus}{#f/5}HOW WILL I EVER RECOVER MY LOST REPUTATION..."
               ])
         ]
      ),
      f_prepuzzle: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}{#f/5}I OFTEN WONDER WHY THE HUMANS HAD TO TRAP US HERE.",
            "<18>{#f/5}I GET THAT THEY WERE AFRAID OF US, BUT...",
            "<18>{#f/6}COULDN'T THEY HAVE JUST RUN AWAY!?",
            "<18>{#f/6}OR, EVEN BETTER, TALK TO US ABOUT IT!!",
            ...(solo()
               ? ["<18>{#f/5}IT'S UNFORTUNATE THEY NEVER THOUGHT OF THOSE THINGS."]
               : [
                  "<25>{#p/undyne}{#f/16}* Yeah, I often wonder about that too.",
                  "<25>{#p/undyne}{#f/17}* It's kind of impressive how dumb they are.",
                  "<18>{#p/papyrus}{#f/7}THEY'RE NOT DUMB!!",
                  "<18>{#p/papyrus}{#f/5}THEY JUST...",
                  "<18>{#p/papyrus}{#f/6}... WEREN'T ABLE TO THINK OF THOSE THINGS.",
                  "<25>{#p/undyne}{#f/12}* Well...\n* Maybe you're right.",
                  "<25>{#p/undyne}{#f/12}* Still doesn't make us any less trapped, though."
               ])
         ],
         ["<18>{#p/papyrus}{#f/0}AT LEAST -I- WAS ABLE TO THINK OF THOSE THINGS!!"]
      ),
      f_puzzle3: pager.create(
         0,
         ...[
            () => [
               "<18>{#p/papyrus}{#f/6}I CALL MYSELF A MASTER OF PUZZLES GALORE, BUT...",
               "<18>{#f/5}I NEED TO COME CLEAN ABOUT THIS ONE.",
               "<18>{#f/4}... I'VE NEVER SOLVED THIS PUZZLE FOR REALSIES.",
               "<18>{#f/6}WAIT!!\nDON'T JUDGE ME TOO HARSHLY!!",
               "<18>{#f/4}... THEY SHUT IT OFF BEFORE I COULD EVEN TRY.",
               ...(solo()
                  ? []
                  : [
                     "<25>{#p/undyne}{#f/17}* Even if it WASN'T shut off, do you think you'd be able to solve it??",
                     "<25>{#f/14}* Many have tried in the past, but very few have succeeded.",
                     "<18>{#p/papyrus}{#f/0}OH, I'M SURE IT WOULDN'T BE A PROBLEM.",
                     "<18>{#p/papyrus}{#f/0}I SOLVED THE OTHER PUZZLES OF THIS KIND VERY QUICKLY!",
                     "<25>{#p/undyne}{#f/14}* If by \"quickly,\" you mean several HOURS, then yes.",
                     "<18>{#p/papyrus}{#f/6}WHAT?? HOURS?",
                     "<18>{#p/papyrus}{#f/5}I SOLVED THOSE PUZZLES IN NO MORE THAN TEN SECONDS!",
                     "<25>{#p/undyne}{#f/17}* And the time you spent staring at them...?",
                     "<18>{#p/papyrus}{#f/7}... WAS JUST THE TIME SPENT WORKING OUT THE SOLUTION!!"
                  ])
            ],
            () =>
               solo()
                  ? ["<18>{#p/papyrus}{#f/6}I KNOW, RIGHT!?\nSO UNFAIR!!"]
                  : [
                     "<18>{#p/papyrus}{#f/0}THE LONGER YOU THINK, THE LESS YOU HAVE TO SOLVE.",
                     "<18>{#f/9}A USEFUL TIP FOR ANY PUZZLE YOU MAY ENCOUNTER!"
                  ]
         ].map(
            lines => () =>
               SAVE.data.n.plot < 45
                  ? SAVE.data.b.f_state_password
                     ? [
                        "<18>{#p/papyrus}{#f/6}USE THE TERMINAL!!",
                        "<18>{#p/papyrus}{#f/6}NEAR THE RIGHT!!!",
                        "<18>{#p/papyrus}{#f/6}GOOD LUCK!!"
                     ]
                     : ((SAVE.data.b.f_state_password = true),
                        [
                           "<18>{#p/papyrus}{#f/4}OH... IT'S -THIS- PUZZLE, EH?",
                           "<18>{#p/papyrus}{#f/5}... YEAH.\nIT'S NOT EXACTLY THE EASIEST ONE.",
                           "<18>{#p/papyrus}{#f/9}THANKFULLY, I HAVE A SOLUTION!",
                           "<18>{#p/papyrus}{#f/0}READY?",
                           "<18>{#p/papyrus}{#f/0}YOU CAN USE IT AT THE TERMINAL NEAR THE RIGHT.",
                           "<32>{#p/human}* (Papyrus whispered something in your ear.)",
                           "<18>{#p/papyrus}{#f/6}HOPE THAT HELPS!"
                        ])
                  : lines()
         )
      ),
      f_prespear: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}{#f/4}IF I WERE YOU, I WOULD BE WARY OF THIS ROOM...",
            "<18>{#p/papyrus}{#f/5}UNDYNE OFTEN COMES HERE TO STAND MENACINGLY NEARBY.",
            "<18>{#p/papyrus}{#f/6}SHE'S STARTLED ME ON MORE THAN A FEW OCCASIONS!",
            ...(solo()
               ? ["<18>{#p/papyrus}{#f/5}EVEN IF I DID MAKE MYSELF AN EASY TARGET."]
               : [
                  "<25>{#p/undyne}{#f/14}* Correction.\n* I come here to PATROL and watch for humans.",
                  "<25>{#p/undyne}{#f/7}* That's my JOB.",
                  "<18>{#p/papyrus}{#f/6}WELL!!\nDO IT LESS MENACINGLY THEN!!",
                  "<25>{#p/undyne}{#f/14}* I am who I am, and there's nothing I can do to change that.",
                  "<18>{#p/papyrus}{#f/6}BUT I SAY ANYONE CAN CHANGE IF THEY JUST TRY!!",
                  "<25>{#p/undyne}{#f/17}* There's exceptions to EVERY rule!",
                  "<18>{#p/papyrus}{#f/7}THEN MY RULE IS AN EXCEPTION TO YOUR RULE!",
                  "<25>{#p/undyne}{#f/4}* ...",
                  "<25>{#p/undyne}{#f/5}* ...",
                  "<25>{#p/undyne}{#f/12}* ... okay, didn't see that one coming."
               ])
         ],
         () =>
            solo()
               ? [
                  "<18>{#p/papyrus}{#f/4}OH, AND THE SPEAR TRAPS THAT COME OUT OF NOWHERE.",
                  "<18>{#p/papyrus}{#f/5}WATCH OUT FOR THOSE TOO."
               ]
               : ["<18>{#p/papyrus}{#f/4}WHY DO WE EVEN BOTHER ARGUING SOMETIMES..."]
      ),
      f_spear: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}{#f/0}THE TIME IT TAKES TO TRAVEL ACROSS THIS ROOM...",
            "<18>{#p/papyrus}{#f/5}... NEVER SEEMS TO BE THE SAME.",
            "<18>{#p/papyrus}{#f/4}SOMETIMES IT'S LONG, SOMETIMES IT'S NOT...",
            "<18>{#p/papyrus}{#f/4}AND SOMETIMES I WEAR POLKA-DOTS.",
            "<18>{#p/papyrus}{#f/0}EITHER WAY, IT DOESN'T REALLY MAKE SENSE.",
            ...(solo()
               ? ["<18>{#p/papyrus}{#f/0}MUCH LIKE WHAT I JUST SAID."]
               : [
                  "<25>{#p/undyne}{#f/12}* It's probably just a spatial disturbance.",
                  "<25>{#p/undyne}{#f/17}* I felt it earlier today, when I was chasing down the human.",
                  "<18>{#p/papyrus}{#f/4}PESKY DISTORTIONS, ALWAYS MEDDLING WITH SPACETIME...",
                  "<18>{#p/papyrus}{#f/7}WHEN WILL THEY EVER LEARN TO STOP!?",
                  "<25>{#p/undyne}{#f/1}* Well, it's not THEIR fault things get weird.",
                  "<25>{#p/undyne}{#f/14}* Spatial distortions are just a part of... well, space.",
                  "<18>{#p/papyrus}{#f/5}MY GOD... EVEN SPACE ITSELF IS IN ON IT!!"
               ])
         ],
         () =>
            solo()
               ? ["<18>{#p/papyrus}{#f/4}DID I NOT MENTION THE POLKA-DOTS?"]
               : ["<18>{#p/papyrus}{#f/4}IT'S A CONSPIRACY SPANNING THE WHOLE OF THE COSMOS..."]
      ),
      f_corner: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}{#f/0}THERE ARE PLENTY OF PLACES IN THE FACTORY...",
            "<18>{#f/0}... WHICH ARE ONLY ACCESSIBLE VIA JUMPING.",
            "<18>{#f/9}FOR EXAMPLE, THE TWO SIDE PATHS IN THIS VERY ROOM!",
            ...(solo()
               ? [
                  "<18>{#f/4}I'VE BEEN TOLD HUMANS CAN JUMP QUITE HIGH, SO...",
                  "<18>{#f/0}YOU SHOULDN'T HAVE ANY ISSUE REACHING THEM."
               ]
               : [
                  "<25>{#p/undyne}{#f/7}* And some places are only accessible via the air!",
                  "<18>{#p/papyrus}{#f/6}FOR EXAMPLE??",
                  "<25>{#p/undyne}{#f/8}* For example, the HOLE in the middle of that platform!",
                  "<18>{#p/papyrus}{#f/0}AH.",
                  ...(SAVE.data.b.f_state_kidd_betray
                     ? [
                        "<25>{#p/undyne}{#f/16}* But there was this kid who stumbled through it earlier...",
                        "<25>{#p/undyne}{#f/9}* And would've lost control if it wasn't for me.",
                        "<18>{#p/papyrus}{#f/9}... WELL!!\nIT'S A GOOD THING YOU WERE THERE!",
                        "<25>{#p/undyne}{#f/16}* Yeah, 'cause there definitely wasn't anyone else there.",
                        "<25>{#p/undyne}{#f/11}* Isn't that right, punk?",
                        "<18>{#p/papyrus}{#f/6}... HUH???"
                     ]
                     : [
                        "<25>{#p/undyne}{#f/1}* There was this kid who stumbled through it earlier, but...",
                        "<25>{#p/undyne}{#f/1}* The human rescued them before they lost control.",
                        "<18>{#p/papyrus}{#f/9}... WELL!!\nIT'S A GOOD THING THEY WERE THERE!",
                        "<18>{#p/papyrus}{#f/4}...\nWAIT A SECOND...",
                        "<18>{#p/papyrus}{#f/7}WHAT WERE -YOU- DOING THERE!?\nSTANDING AROUND!?",
                        "<25>{#p/undyne}{#f/7}The human rescued them very quickly!!"
                     ])
               ])
         ],
         () =>
            solo()
               ? ["<18>{#p/papyrus}{#f/9}YOU CAN DO IT!!\nI BELIEVE IN YOU!"]
               : SAVE.data.b.f_state_kidd_betray
                  ? ["<18>{#p/papyrus}{#f/6}PERHAPS YOU SHOULD CALL BACK SOMEWHERE ELSE."]
                  : ["<18>{#p/papyrus}{#f/0}I APPRECATE YOU BEING SUCH A SWIFT RESCUER OF KIDS."]
      ),
      f_story2: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}{#f/0}SIGNAL STARS ARE PRETTY NEAT, HUH?",
            "<18>{#f/5}THOUGH, THEY ONLY RESET PERIODICALLY.",
            "<18>{#f/4}UNTIL THEN...",
            "<18>{#f/6}WAIT, ISN'T THERE A ROOM LIKE THIS SOMEWHERE ELSE!?",
            ...(solo()
               ? []
               : [
                  "<25>{#p/undyne}{#f/1}* It's easier to get lost in here than you think.",
                  "<25>{#f/4}* This one time, there was a search for a missing monster...",
                  "<25>{#f/7}* And I could have sworn the room I was in repeated!",
                  "<18>{#p/papyrus}{#f/0}LIKE HOW A SIGNAL STAR REPEATS ITS SIGNAL!",
                  "<25>{#p/undyne}{#f/10}* Not really...",
                  "<25>{#f/12}* It's more like the room got... longer, somehow.",
                  "<25>{#f/11}* ... huh.",
                  "<18>{#p/papyrus}{#f/5}... DID THE MONSTERS EVER GET FOUND?",
                  "<25>{#p/undyne}{#f/12}* Yeah, it just turned out to be some random kid.",
                  "<25>{#f/10}* I asked them where their home was, but... they...",
                  "<25>{#f/12}* ... uh, didn't have one.",
                  "<18>{#p/papyrus}{#f/6}THAT SEEMS... RATHER CONCERNING.",
                  "<25>{#p/undyne}{#f/17}* Tell me about it!!!"
               ])
         ],
         () =>
            solo()
               ? ["<18>{#p/papyrus}{#f/5}I SWEAR I'M JUST REPEATING MYSELF SOMETIMES."]
               : ["<18>{#p/papyrus}{#f/5}SOMETIMES I WONDER IF WE'RE ALL JUST GOING IN CIRCLES."]
      ),
      f_pacing: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}{#f/0}THERE'S GENUINELY NOTHING TO SAY ABOUT THIS ROOM.",
            "<18>{#f/4}ITS EXISTENCE ONLY SERVES TO MAKE YOU WALK FURTHER.",
            "<18>{#f/5}TO MAKE EVERY STEP TOWARDS THE EXIT...",
            "<18>{#f/4}FULL OF UTTER, UNENDING SUSPENSE.",
            ...(solo() ? [] : ["<25>{#p/undyne}{#f/14}* That about sums it up."])
         ],
         ["<18>{#p/papyrus}{#f/7}UTTER!\nUNENDING!!\nSUSPENSE!!!"]
      ),
      f_battle: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}{#f/0}IN THIS ROOM, YOU WILL FIND UNDYNE'S GIANT TOWER.",
            "<19>{#p/papyrus}{#f/9}MADE FROM THE REMNANTS OF AN OLD ASTEROID!",
            "<18>{#f/5}SHE'S ALWAYS POSING ATOP IT...",
            "<18>{#f/4}MUMBLING SOMETHING TO HERSELF...",
            ...(solo()
               ? []
               : SAVE.data.b.undyne_respecc
                  ? [
                     "<25>{#p/undyne}{#f/12}* Ah, right, the \"story of our people...\"",
                     "<25>{#f/1}* I didn't really bother telling it in the end.",
                     "<25>{#f/8}* The punk probably knows it already anyway!"
                  ]
                  : [
                     "<25>{#p/undyne}{#f/12}* Ah, right, the \"story of our people...\"",
                     "<25>{#f/1}* Despite all the rehearsal, I just ended up going off the cuff.",
                     "<25>{#f/8}* Forget about some sappy pre-planned speech!!"
                  ])
         ],
         () =>
            solo()
               ? ["<18>{#p/papyrus}{#f/0}I THINK IT'S SOMETHING SHE HAS TO MEMORIZE."]
               : ["<18>{#p/papyrus}{#f/9}FOR THE RECORD, I LOVE A GOOD PRE- PLANNED SPEECH!!"]
      ),
      f_exit: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}THIS FLUID TANK WAS SPECIFICALLY PUT HERE...",
            "<18>{#f/0}BECAUSE A CERTAIN ROYAL GUARD CAPTAIN...",
            "<18>{#f/4}THINKS IT'S SAFE TO TAKE HER GIANT JETPACK...",
            "<18>{#f/5}INTO AN AREA RIFE WITH STATIC ELECTRICITY.",
            ...(solo()
               ? ["<18>{#f/6}... ABSORBING IT ALL WOULD BE VERY, VERY DANGEROUS!!"]
               : [
                  "<25>{#p/undyne}{#f/17}* Don't give me THAT!!\n* I was in a hurry!",
                  "<18>{#p/papyrus}{#f/4}YOU'VE BEEN IN A LOT OF HURRIES...",
                  "<25>{#p/undyne}{#f/7}* You think I don't know that!?!?",
                  "<18>{#p/papyrus}{#f/4}... YET YOU STILL GET INTO THEM ANYWAY.",
                  "<25>{#p/undyne}{#f/1}* Facing danger head-on is a part of being in the Royal Guard.",
                  "<18>{#p/papyrus}{#f/6}BUT YOU DON'T HAVE TO RISK YOUR LIFE??",
                  "<25>{#p/undyne}{#f/12}* No risk, no reward!",
                  "<18>{#p/papyrus}{#f/7}THAT'S THE WEIRDEST THING I'VE EVER HEARD!!"
               ])
         ],
         () =>
            solo()
               ? [
                  "<18>{#p/papyrus}{#f/0}I ONLY HAVE ONE WORD FOR THAT GUARD CAPTAIN.",
                  "<18>{#f/4}AND THAT WORD IS \"WATCH WHERE YOU'RE GOING.\""
               ]
               : ["<18>{#p/papyrus}{#f/5}I WORRY FOR UNDYNE'S SAFETY."]
      ),
      f_napstablook: pager.create(
         0,
         () =>
            SAVE.data.n.plot <= 48.1 && SAVE.data.n.state_foundry_blookdate < 2
               ? [
                  "<18>{#p/papyrus}{#f/0}SO YOU'RE MAKING FRIENDS WITH A GHOST.",
                  "<18>{#p/papyrus}{#f/1}IS THERE NOTHING BEYOND YOUR GRASP OF FRIENDSHIP!?!?",
                  ...(solo()
                     ? ["<18>{#p/papyrus}{#f/6}YOUR POWER LEVEL IS ALMOST FRIGHTENING!!"]
                     : [
                        "<25>{#p/undyne}{#f/14}* So that's how they were able to befriend me.",
                        "<25>{#p/undyne}{#f/17}* You could have WARNED me, Papyrus!!\n* There's no escape now!",
                        "<18>{#p/papyrus}{#f/6}FRIENDSHIP IS NOT THE KIND OF SHIP YOU BAIL OUT ON!!"
                     ])
               ]
               : [
                  "<18>{#p/papyrus}{#f/4}HMM...",
                  "<18>{#p/papyrus}{#f/4}WHY DO I HEAR BOSS MUSIC?",
                  ...(solo()
                     ? [
                        "<18>{#p/papyrus}{#f/0}... SORRY, DID I SAY \"BOSS\" MUSIC?",
                        "<18>{#p/papyrus}{#f/5}I MEANT \"BOSSA NOVA.\""
                     ]
                     : [
                        "<25>{#p/undyne}{#f/8}* Because I'M here, silly!",
                        "<18>{#p/papyrus}{#f/6}OF COURSE!!\nHOW COULD I FORGET!!"
                     ])
               ],
         () =>
            SAVE.data.n.plot <= 48.1 && SAVE.data.n.state_foundry_blookdate < 2
               ? solo()
                  ? ["<18>{#p/papyrus}{#f/5}JUST WATCH OUT FOR THE ECTOPLASM."]
                  : [
                     "<18>{#p/papyrus}{#f/5}AT LEAST SHE'S LEARNED HER LESSON BY NOW...",
                     "<25>{#p/undyne}{#f/14}* Yeah... totally!"
                  ]
               : solo()
                  ? ["<18>{#p/papyrus}{#f/9}THAT GHOST HAS LOADS OF MUSIC ON THEIR STEREO!"]
                  : ["<18>{#p/papyrus}{#f/0}BOSSY MUSIC FOR A BOSSY FISH LADY.", "<25>{#p/undyne}{#f/8}* Pretty much!!"]
      ),
      f_hapstablook: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}{#f/6}HUH?\nWHERE ARE YOU?",
            "<18>{#p/papyrus}{#f/5}I'VE... NEVER BEEN IN HERE BEFORE.",
            ...(solo()
               ? ["<18>{#p/papyrus}{#f/5}NOR HAVE I... SEEN ANYONE ELSE HERE, EITHER."]
               : [
                  "<25>{#p/undyne}{#f/14}* ... yeah, that house has been abandoned for a long time.",
                  "<25>{#p/undyne}{#f/17}* Since before I was born, in fact!",
                  "<18>{#p/papyrus}{#f/6}HOW STRANGE!!"
               ])
         ],
         () =>
            solo()
               ? ["<18>{#p/papyrus}{#f/5}TO BE HONEST, I'M NOT SURE I WANT TO KNOW WHY..."]
               : ["<18>{#p/papyrus}{#f/5}TIME REALLY DOES FLY BY, HUH?", "<25>{#p/undyne}{#f/14}* That it does!"]
      ),
      a_start: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}{#f/0}SO YOU'RE IN AERIALIS NOW, HUH?",
            "<18>{#p/papyrus}{#f/0}GUESS I'M NOT THE ONLY ONE WHO LIKES DECORATIVE SPIRES.",
            "<18>{#p/papyrus}{#f/4}EXCEPT... THEY'RE NOT JUST DECORATIVE.",
            "<18>{#p/papyrus}{#f/4}HUNDREDS OF PEOPLE LIVE THERE.",
            ...(solo()
               ? ["<18>{#p/papyrus}{#f/0}STILL, DOESN'T STOP THEM FROM BEING DECORATIVE!"]
               : [
                  "<25>{#p/undyne}{#f/14}* Even Dr. Alphys used to live in one of those things.",
                  "<25>{#p/undyne}{#f/1}* With her childhood friends, Bratty and Catty...",
                  "<25>{#p/undyne}{#f/1}* She told me about this when she first became royal scientist.",
                  "<18>{#p/papyrus}{#f/0}OOH, I'M CURIOUS!\nI'LL ASK HER ABOUT IT LATER.",
                  "<25>{#p/undyne}{#f/12}* You do that.\n* I THINK she likes talking about it...?"
               ])
         ],
         () =>
            solo()
               ? ["<18>{#p/papyrus}{#f/0}THE ONE IN THE MIDDLE IS MY FAVORITE."]
               : ["<18>{#p/papyrus}{#f/5}THE VIEW FROM A SPIRE HOUSE MUST BE BREATHTAKING..."]
      ),
      a_lab_entry: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}{#f/0}AH, THE LAB.\nA GREAT PLACE TO HANG OUT!",
            "<18>{#p/papyrus}{#f/0}ESPECIALLY WHEN DR. ALPHYS IS AROUND.",
            ...(solo()
               ? [
                  "<18>{#p/papyrus}{#f/4}SHE REALLY LOVES TALKING ABOUT \"SCI-FI\" STUFF...",
                  "<18>{#p/papyrus}{#f/9}SO IT'S A GOOD THING I DO TOO!"
               ]
               : [
                  "<25>{#p/undyne}{#f/1}* Alphys is... always at the lab, Papyrus.",
                  "<26>{#f/17}* Her \"house\" is that purple cube on the upper floor.",
                  "<26>{#f/16}* Don't ask me how it works, because even though she told me...",
                  "<26>{#f/12}* I don't think either of us would understand it.",
                  "<18>{#p/papyrus}{#f/4}POINT TAKEN.",
                  "<18>{#f/0}SO HOW DOES IT WORK?",
                  "<25>{#p/undyne}{#f/17}* ...",
                  "<25>{#f/14}* I'll tell you later."
               ])
         ],
         () =>
            solo()
               ? ["<18>{#p/papyrus}{#f/4}SHE DOES HAVE A HABIT OF SPOILING THINGS, THOUGH."]
               : ["<25>{#p/undyne}{#f/8}* I'll tell you later!!!", "<18>{#p/papyrus}{#f/6}I KNOW!!!"]
      ),
      a_lab_main: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}{#f/4}THE LAST TIME I WAS HERE...",
            solo()
               ? "<18>{#p/papyrus}{#f/0}... WAS JUST THIS WEEK, TO HANG OUT WITH DR. ALPHYS!"
               : "<18>{#p/papyrus}{#f/0}... WAS EARLIER TODAY, ON OUR WAY TO THE REC CENTER!",
            "<18>{#p/papyrus}{#f/5}BUT WHEN I WAS YOUNGER, SANS USED TO TAKE ME THERE.",
            "<18>{#p/papyrus}{#f/5}SO MANY SCIENTIFIC MARVELS TO BE MARVELLED AT...",
            ...(solo()
               ? ["<18>{#p/papyrus}{#f/6}IT'S A SHAME MORE PEOPLE DON'T TAKE AN INTEREST!"]
               : [
                  "<18>{#p/papyrus}{#f/0}WHAT DO YOU THINK, UNDYNE?",
                  "<25>{#p/undyne}{#f/1}* What do I think?\n* Well...",
                  "<25>{#p/undyne}{#f/14}* The ice cream machine makes REALLY good ice cream.",
                  "<18>{#p/papyrus}{#f/4}... THAT'S IT?",
                  "<25>{#p/undyne}{#f/20}* I guess it IS cool how Alphys can track the human like that...",
                  "<18>{#p/papyrus}{#f/0}OH, YEAH!\nSHE CAN TRACK OTHER PEOPLE, TOO!",
                  "<25>{#p/undyne}{#f/13}* ...",
                  "<25>{#p/undyne}{#f/7}* AM I BEING TRACKED RIGHT NOW???"
               ])
         ],
         () =>
            solo()
               ? [
                  "<18>{#p/papyrus}{#f/0}OH YEAH, I FORGOT TO MENTION...",
                  "<18>{#f/0}MY BROTHER USED TO BE A LAB ASSISTANT.",
                  "<18>{#f/6}I STILL DON'T KNOW WHY HE QUIT...",
                  "<18>{#f/5}SINCE HE ENJOYED THE JOB SO MUCH."
               ]
               : [
                  "<25>{#p/undyne}{#f/7}* I am GOING to kill her.",
                  "<18>{#p/papyrus}{#f/5}BUT YOU DON'T EVEN KNOW IF SHE TRACKED YOU YET!",
                  "<25>{#p/undyne}{#f/8}* ... and you think she WOULDN'T do that!?",
                  "<18>{#p/papyrus}{#f/6}I DON'T KNOW!!",
                  "<25>{#p/undyne}{#f/14}* Don't worry, I'm not LITERALLY going to kill her.",
                  "<25>{#p/undyne}{#f/17}* Just metaphorically.",
                  "<18>{#p/papyrus}{#f/4}... WELL THAT'S ALRIGHT, THEN."
               ]
      ),
      a_lab_upstairs: pager.create(
         0,
         () =>
            SAVE.data.b.water
               ? [
                  "<18>{#p/papyrus}{#f/5}THOSE RECYCLE BINS ARE NEVER ACTUALLY USED TO RECYCLE.",
                  "<18>{#f/4}IF THEY WERE, ALPHYS WOULN'T HAVE PLANS...",
                  "<18>{#f/5}FOR A MACHINE THAT SEPARATES ALL THE TRASH INSIDE.",
                  "<18>{#f/6}FOR EXAMPLE, ELECTRO-DAMPENING FLUID!",
                  ...(solo()
                     ? []
                     : [
                        "<25>{#p/undyne}{#f/17}* Are they seriously still holding a cup?",
                        "<25>{#p/undyne}{#f/8}* You've gotta be KIDDING me!!",
                        "<18>{#p/papyrus}{#f/4}JUST BE GLAD THEY'RE NOT DRINKING IT.",
                        "<25>{#p/undyne}{#f/16}* Yeah, that might be kinda bad for them.",
                        "<25>{#p/undyne}{#f/14}* It's harmless for monsters, though!"
                     ])
               ]
               : [
                  "<18>{#p/papyrus}{#f/0}THERE'S THIS ODD MACHINE IN THE LAB...",
                  "<18>{#p/papyrus}{#f/0}I HEARD ALPHYS USES IT TO MAKE ICE CREAM.",
                  "<18>{#p/papyrus}{#f/4}... WHICH SHE NO DOUBT EATS BINGING SCI-FI ANIME.",
                  ...(solo()
                     ? []
                     : [
                        "<25>{#p/undyne}{#f/17}* What??\n* She hasn't invited ME to any TV marathons...",
                        "<18>{#p/papyrus}{#f/4}HMM...",
                        "<18>{#p/papyrus}{#f/0}OH, I KNOW!",
                        "<18>{#p/papyrus}{#f/9}YOU JUST HAVE TO \"BREAK THE ICE CREAM!\" WITH HER!",
                        "<25>{#p/undyne}{#f/13}* ... what?",
                        "<18>{#p/papyrus}{#f/0}BREAK THE ICE CREAM!",
                        "<25>{#p/undyne}{#f/14}* That's so bad, I kind of love it."
                     ])
               ],
         () => [
            "<18>{#p/papyrus}{#f/0}SPEAKING OF FOOD AND DRINK...",
            "<18>{#f/0}I HEARD METTATON ONCE WANTED TO OPEN A FOOD SHOP.",
            "<18>{#f/4}THE FEATURED ITEM WAS CALLED \"NEO ENERGY.\"",
            ...(solo()
               ? ["<18>{#p/papyrus}{#f/5}I DON'T KNOW WHAT IT MEANS."]
               : [
                  "<25>{#p/undyne}{#f/12}* Sounds like some cheap knockoff brand.",
                  "<18>{#p/papyrus}{#f/7}WHAT??\nMETTATON WOULDN'T DO THAT!"
               ])
         ]
      ),
      a_lab_downstairs: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}{#f/0}THOSE FANCY DRINKS IN THE VENDING MACHINE...",
            "<18>{#p/papyrus}{#f/0}I KEEP MEANING TO TRY THEM, BUT...",
            "<18>{#p/papyrus}{#f/4}THE MACHINE SEEMS TO BE MISSING A DISPENSE FUNCTION.",
            ...(solo()
               ? []
               : [
                  "<25>{#p/undyne}{#f/8}* If they're not coming out, just shake the entire box!",
                  "<18>{#p/papyrus}{#f/0}I'D RATHER FIX THE MACHINE PROPERLY, THANK YOU.",
                  "<25>{#p/undyne}{#f/1}* Shaking usually works just fine.\n* It's my go-to fix.",
                  "<18>{#p/papyrus}{#f/4}MAYBE YOU COULD TRY SHAKING UP MY CAREER, THEN.",
                  "<25>{#p/undyne}{#f/14}* Nah, that's fine just the way it is."
               ])
         ],
         () =>
            solo()
               ? ["<18>{#p/papyrus}{#f/0}MAYBE I'LL SETTLE FOR THE RED SODA ON THE TABLE."]
               : [
                  "<25>{#p/undyne}{#f/1}* In addition to shaking...",
                  "<25>{#p/undyne}{#f/14}* That super-strong heat tape is my OTHER go-to fix.",
                  "<18>{#p/papyrus}{#f/0}OH YEAH, THAT STUFF CAN FIX ANYTHING.",
                  "<18>{#p/papyrus}{#f/4}... WELL, ALMOST ANYTHING.",
                  "<25>{#p/undyne}{#f/7}* It's FINE just the WAY IT IS!!"
               ]
      ),
      a_lab_virt: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}{#f/4}IT'S A SHAME THE VIRTUALASIUM ISN'T OPEN ALL THE TIME.",
            "<18>{#p/papyrus}{#f/7}THINK OF ALL THE FUN I'M LOSING OUT ON RIGHT NOW!",
            ...(solo()
               ? [
                  "<18>{#p/papyrus}{#f/5}... SUCH A PITY.",
                  "<18>{#p/papyrus}{#f/6}I CAN'T EVEN RUN MY WORLD-FAMOUS RESTAURANT!!"
               ]
               : [
                  "<25>{#p/undyne}{#f/7}* \"Fun\" isn't exactly the word I'd use.",
                  "<18>{#p/papyrus}{#f/5}CAN YOU REALLY BLAME A SKELETON SUCH AS MYSELF...",
                  "<18>{#p/papyrus}{#f/6}FOR WANTING TO RUN A WORLD-FAMOUS RESTAURANT??",
                  "<25>{#p/undyne}{#f/17}* That kind of thing can be stressful, Papyrus.",
                  "<18>{#p/papyrus}{#f/4}SAYS THE CAPTAIN OF THE ROYAL GUARD.",
                  "<25>{#p/undyne}{#f/14}* Captaining the Royal Guard is one thing.",
                  "<25>{#p/undyne}{#f/7}* Running a restaurant is something else ENTIRELY!"
               ])
         ],
         () => [
            "<18>{#p/papyrus}{#f/0}OH YEAH, ABOUT THE RESTAURANT...",
            "<18>{#p/papyrus}{#f/9}IT HAPPENS TO BE A GIANT SPACESHIP!",
            "<18>{#p/papyrus}{#f/4}POWERED BY MARINARA SAUCE.",
            ...(solo() ? [] : ["<25>{#p/undyne}{#f/14}* ... that checks out."])
         ]
      ),
      a_path1: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}{#f/0}I HEARD AERIALIS USED TO BE A STAGING AREA.",
            "<18>{#p/papyrus}{#f/5}THEY WERE GOING TO BUILD SO MANY COOL THINGS, BUT...",
            "<18>{#p/papyrus}{#f/4}AFTER THE LAB WAS DONE, THEY RAN OUT OF PURPLE.",
            "<18>{#p/papyrus}{#f/4}TRULY, A GIANT LEAP BACKWARDS FOR PAINT-KIND.",
            ...(solo()
               ? []
               : [
                  "<25>{#p/undyne}{#f/17}* You know they could've just made more of it, right?",
                  "<25>{#p/undyne}{#f/7}* The REAL reason they quit is because Mettaton took over!!",
                  "<18>{#p/papyrus}{#f/0}YOU SAY THAT LIKE IT'S A BAD THING.",
                  "<25>{#p/undyne}{#f/17}* ...",
                  "<25>{#p/undyne}{#f/17}* He CAN be a bit overbearing at times.",
                  "<18>{#p/papyrus}{#f/0}OH, I KNOW.\nTHAT'S WHY I DON'T BLAME THEM.",
                  "<18>{#p/papyrus}{#f/4}FEW CAN WITHSTAND HIS OVERPOWERING BEAUTY.",
                  "<25>{#p/undyne}{#f/12}* ... not what I meant, but okay."
               ])
         ],
         () =>
            solo()
               ? [
                  "<19>{#p/papyrus}{#f/0}IT'S TOO BAD WE'LL NEVER GET TO SEE ITS FULL POTENTIAL.",
                  "<18>{#p/papyrus}{#f/5}ALL THOSE FANCY STRUCTURES AND MACHINES...",
                  "<18>{#p/papyrus}{#f/8}THINK OF THE NEAT GIZMOS I COULD'VE GOTTEN TO USE!"
               ]
               : [
                  "<18>{#p/papyrus}{#f/4}IF ONLY METTATON WASN'T SO BEAUTIFUL.",
                  "<18>{#p/papyrus}{#f/6}WAIT, THAT'D BE BAD!!",
                  "<18>{#p/papyrus}{#f/5}BUT SO IS THE ABANDONMENT OF THE STAGING AREA...",
                  "<25>{#p/undyne}{#f/1}* I wonder if there's some gizmo that could fix this.",
                  "<18>{#p/papyrus}{#f/0}LIKE... A BEAUTY COMPENSATION FILTER!?",
                  "<25>{#p/undyne}{#f/18}* I was thinking more along the lines of his EGO.",
                  "<25>{#p/undyne}{#f/17}* An \"ego compensation filter\" if you will.",
                  "<18>{#p/papyrus}{#f/7}NEVER MIND!"
               ]
      ),
      a_path2: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}{#f/0}THESE LIFTGATES ARE PRETTY FUN.",
            "<18>{#p/papyrus}{#f/0}SOMETIMES, WHEN NOBODY'S WATCHING...",
            "<18>{#p/papyrus}{#f/0}I'LL COME OUT THERE AND GO BACK AND FORTH ON THEM.",
            "<18>{#p/papyrus}{#f/4}IT DOES REQUIRE A SPECIAL PASS, THOUGH.",
            ...(solo()
               ? []
               : [
                  "<25>{#p/undyne}{#f/4}* Hey, Alphys never gives ME liftgate passes!",
                  "<18>{#p/papyrus}{#f/0}MAYBE NEXT TIME YOU SHOULD ASK HER FOR ONE!",
                  "<25>{#p/undyne}{#f/3}* ...",
                  "<18>{#p/papyrus}{#f/6}...",
                  "<25>{#p/undyne}{#f/11}* ...",
                  "<25>{#p/undyne}{#f/8}* Like hell I will!",
                  "<18>{#p/papyrus}{#f/6}LANGUAGE!!"
               ])
         ],
         () =>
            solo()
               ? [
                  "<18>{#p/papyrus}{#f/0}GO ON, GIVE IT A TRY!",
                  "<18>{#p/papyrus}{#f/5}THEY'RE NOT DANGEROUS...",
                  "<18>{#p/papyrus}{#f/6}... USUALLY."
               ]
               : [
                  "<18>{#p/papyrus}{#f/4}...",
                  "<18>{|}{#p/papyrus}{#f/4}I CAN'T BE THE ONLY ONE THAT THINKS YOU'RE- {%}",
                  "<25>{#p/undyne}{#f/8}* OH MY GOD PLEASE!!",
                  "<18>{#p/papyrus}{#f/6}OKAY, OKAY!"
               ]
      ),
      a_path3: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}{#f/5}I HEARD TUITION IS HARD TO COME BY IN AERIALIS.",
            "<18>{#p/papyrus}{#f/6}IS IT TRUE??\nDO STUDENTS REALLY SUFFER THAT MUCH?",
            "<18>{#p/papyrus}{#f/8}I DON'T KNOW WHAT I'D BE WITHOUT MY EDUCATION...!",
            ...(solo()
               ? []
               : [
                  "<25>{#p/undyne}{#f/8}* I quit school when I was only ten years old!!",
                  "<18>{#p/papyrus}{#f/1}WHAT!?!?",
                  "<18>{#p/papyrus}{#f/6}HOW COULD YOU BETRAY THE SYSTEM SO COMPLETELY!",
                  "<25>{#p/undyne}{#f/1}* Not everyone walks the same path in life, Papyrus.",
                  "<25>{#p/undyne}{#f/1}* After I quit school, ASGORE became my teacher.",
                  "<25>{#p/undyne}{#f/14}* He was the best one I ever had.",
                  "<18>{#p/papyrus}{#f/5}... IT WOULD APPEAR I HAVE MUCH TO LEARN..."
               ])
         ],
         () =>
            solo()
               ? ["<18>{#p/papyrus}{#f/8}I WOULDN'T EVEN HAVE MY SPECIAL ATTACK!"]
               : ["<18>{#p/papyrus}{#f/6}DON'T WORRY, I'LL START LEARNING RIGHT AWAY!"]
      ),
      a_rg1: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}{#f/0}IT'S INCREDIBLE HOW THE GUARDS AND TRAINEES HERE...",
            "<18>{#f/4}NEVER SEEM TO GET LOST.",
            "<18>{#f/5}ESPECIALLY WITH THE LACK OF...",
            "<18>{#f/6}... WELL, ANYTHING!!",
            ...(solo()
               ? ["<18>{#f/7}ALL THE ROOMS LOOK EXACTLY THE SAME!"]
               : [
                  "<25>{#p/undyne}{#f/12}* Actually, you're not too far off...",
                  "<25>{#f/1}* They struggled for AGES trying to memorize the area's layout.",
                  "<18>{#p/papyrus}{#f/0}BUT THEY DID IT EVENTUALLY, RIGHT?",
                  "<25>{#p/undyne}{#f/16}* Well... after the hundredth failed memorization attempt...",
                  "<25>{#f/17}* I gave up and added a navigation module to their helmets.",
                  "<18>{#p/papyrus}{#f/1}WHAT!?!?",
                  "<18>{#p/papyrus}{#f/7}THIS IS TECHNOLOGICAL TREACHERY!!"
               ])
         ],
         () =>
            solo()
               ? ["<18>{#p/papyrus}{#f/4}I WONDER HOW -YOU- NEVER SEEM TO GET LOST..."]
               : [
                  "<18>{#p/papyrus}{#f/4}I, THE GREAT AND NATURALLY-TALENTED PAPYRUS...",
                  "<18>{#p/papyrus}{#f/7}WOULD NEVER RELY ON TECHNOLOGY TO DO MY JOB FOR ME!",
                  "<18>{#p/papyrus}{#f/0}... I'D ONLY USE IT WHEN IT'S AVAILABLE."
               ]
      ),
      a_path4: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}{#f/0}TALES SPEAK OF A PLACE WHERE TRASH TURNS TO TREASURE.",
            "<18>{#p/papyrus}{#f/9}A PLACE WHERE GARBAGE TURNS TO GOLD!",
            "<18>{#p/papyrus}{#f/4}AND A PLACE WHERE SPACE TUNA...",
            "<18>{#p/papyrus}{#f/5}WELL, THAT STUFF JUST STRAIGHT UP DISAPPEARS.",
            ...(solo()
               ? ["<18>{#p/papyrus}{#f/6}DO YOU KNOW OF SUCH A PLACE??"]
               : [
                  "<25>{#p/undyne}{#f/1}* Sounds like Bratty and Catty's place.",
                  "<25>{#p/undyne}{#f/14}* They love space tuna even more than they love selling junk!",
                  "<25>{#p/undyne}{#f/17}* And they REALLY love selling junk!!",
                  "<18>{#p/papyrus}{#f/0}WOWIE!",
                  "<18>{#p/papyrus}{#f/5}DO THEY SELL ANY NON-JUNK, BY CHANCE...?",
                  "<25>{#p/undyne}{#f/8}* Why WOULD they!?"
               ])
         ],
         () =>
            solo()
               ? ["<18>{#p/papyrus}{#f/4}I'LL TAKE THAT AS A RESOUNDING \"MAYBE.\""]
               : [
                  "<18>{#p/papyrus}{#f/0}SO BRATTY AND CATTY ARE JUNK DEALERS, HUH?",
                  "<18>{#f/4}I'D BE SURPRISED IF THEY DIDN'T KNOW MY BROTHER."
               ]
      ),
      a_barricade1: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}{#f/0}THIS ROOM MAY OR MAY NOT CONTAIN BARRICADES.",
            "<18>{#p/papyrus}{#f/4}THEY SAY YOU MUST ANSWER QUESTIONS TO UNLOCK THEM...",
            "<18>{#p/papyrus}{#f/1}COULD IT BE!?\nA SECRET AUDITION FOR A QUIZ SHOW!?",
            ...(solo()
               ? []
               : [
                  "<25>{#p/undyne}{#f/14}* A quiz show, huh?",
                  "<18>{#p/papyrus}{#f/9}... REPLETE WITH TRIVIA QUESTIONS GALORE!!",
                  "<25>{#p/undyne}{#f/1}* Okay, here's a question for you.",
                  "<25>{#p/undyne}{#f/12}* Precisely how many boots would it take...",
                  "<25>{#p/undyne}{#f/7}* To kick that robot's BUTT into space!!",
                  "<18>{#p/papyrus}{#f/6}UH...",
                  "<18>{#p/papyrus}{#f/5}... WELL, UM...",
                  "<18>{#p/papyrus}{#f/4}ACTUALLY, THAT DEPENDS ON THE GRAVITY.",
                  "<25>{#p/undyne}{#f/8}* Papyrus!!"
               ])
         ],
         () =>
            solo()
               ? ["<18>{#p/papyrus}{#f/4}IT -HAS- BEEN A WHILE SINCE HE'S DONE ONE."]
               : [
                  "<25>{#p/undyne}{#f/1}* I've got another trivia question if you'd like to hear it.",
                  "<18>{#p/papyrus}{#f/5}... MAYBE LATER.",
                  "<18>{#p/papyrus}{#f/4}BESIDES, WE ALREADY KNOW WHERE IT'S GOING...",
                  "<25>{#p/undyne}{#f/7}* YEAH!!\n* Into SPACE!!"
               ]
      ),
      a_puzzle1: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}{#f/5}YOU KNOW, IT MIGHT JUST BE ME, BUT...",
            "<18>{#p/papyrus}{#f/4}THESE PUZZLES ARE REALLY WEIRD.",
            "<18>{#p/papyrus}{#f/4}... I ALWAYS END UP WALKING BY THE CORRECT TERMINAL.",
            ...(solo()
               ? ["<18>{#p/papyrus}{#f/5}... OVER, AND OVER..."]
               : [
                  "<25>{#p/undyne}{#f/1}* Yeah?\n* Well whenever I try solving these things...",
                  "<25>{#p/undyne}{#f/17}* The whole thing just goes crazy!!",
                  "<18>{#p/papyrus}{#f/6}DIDN'T ALPHYS EVER PULL YOU BACK TO SAFETY??",
                  "<25>{#p/undyne}{#f/12}* Well... I...",
                  "<18>{#p/papyrus}{#f/6}UNDYNE, WHAT DID YOU DO!?!?",
                  "<25>{#p/undyne}{#f/12}* ...",
                  "<25>{#p/undyne}{#f/12}* Nothin.'",
                  "<25>{#p/undyne}{#f/12}* Apart from almost erasing myself from existence, that is.",
                  "<18>{#p/papyrus}{#f/8}NO...!\nPLEASE BE MORE CAREFUL NEXT TIME!"
               ])
         ],
         () =>
            solo()
               ? ["<18>{#p/papyrus}{#f/4}I HAVE -ZERO- INTENTION OF EVER DOING ONE AGAIN."]
               : ["<18>{#p/papyrus}{#f/4}THESE DIMENSIONAL TECHNOLOGIES ARE A REAL PROBLEM."]
      ),
      a_mettaton1: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}{#f/0}HERE'S A SMALL BIT OF ADVICE.",
            "<18>{#p/papyrus}{#f/4}WHEN METTATON SAYS TO DO SOMETHING ON HIS SHOW...",
            "<18>{#p/papyrus}{#f/4}YOU DO IT.",
            "<18>{#p/papyrus}{#f/0}NO IFS, ANDS, OR BUTS ABOUT IT!",
            ...(solo()
               ? []
               : [
                  "<25>{#p/undyne}{#f/14}* What about \"howevers?\"",
                  "<18>{#p/papyrus}{#f/4}...",
                  "<18>{#p/papyrus}{#f/4}THAT'S JUST ANOTHER WAY OF SAYING \"BUT.\"",
                  "<25>{#p/undyne}{#f/17}* ... right.",
                  "<25>{#p/undyne}{#f/14}* And what about \"unlesses?\"",
                  "<18>{#p/papyrus}{#f/4}WE ALREADY RULED OUT ANDS.",
                  "<25>{|}{#p/undyne}{#f/8}* But I wasn't talking about the- {%}",
                  "<18>{#p/papyrus}{#f/6}NO BUTS!!!",
                  "<25>{|}{#p/undyne}{#f/7}* If you would just let me- {%}",
                  "<18>{#p/papyrus}{#f/7}NO IFS!!"
               ])
         ],
         () =>
            solo()
               ? ["<18>{#p/papyrus}{#f/4}AND NO HOWEVERS, EITHER."]
               : ["<18>{#p/papyrus}{#f/4}DON'T EVEN GET ME STARTED ON \"PERHAPSES.\""]
      ),
      a_elevator1: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}{#f/5}SO MANY ELEVATORS, SO LITTLE TIME...",
            "<18>{#f/4}EXCEPT FOR WHEN THEY'RE NOT WORKING.",
            "<18>{#f/6}I HAD TO WALK AROUND ON FOOT YESTERDAY!!",
            ...(solo()
               ? ["<18>{#f/5}IF ONLY I KNEW WHY SOMEONE WOULD WANT THEM OFF..."]
               : [
                  "<25>{#p/undyne}{#f/12}* I heard Mettaton shuts them off to run his shows.",
                  "<18>{#p/papyrus}{#f/4}HE... HE DOES?",
                  "<25>{#p/undyne}{#f/17}* As far as I know!",
                  "<18>{#p/papyrus}{#f/7}... THE -NERVE- OF THAT ROBOTICAL RECTANGLE!",
                  "<18>{#p/papyrus}{#f/7}I INTEND TO HAVE A WORD WITH HIM NOW!",
                  "<25>{#p/undyne}{#f/7}* And tell him to cancel those STUPID shows while you're at it!"
               ])
         ],
         () =>
            solo()
               ? ["<18>{#p/papyrus}{#f/5}IT'S A CONSPIRACY ON SO MANY LEVELS."]
               : [
                  "<18>{#p/papyrus}{#f/4}MAYBE...\nTHIS COULD BE MY CHANCE...",
                  "<18>{#p/papyrus}{#f/9}... TO SUGGEST THE CONSTRUCTION OF MORE LIFTGATES!"
               ]
      ),
      a_lift: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}{#f/0}THIS ELEVATOR SHOULD RELEASE A MUSIC ALBUM!",
            "<18>{#p/papyrus}{#f/5}SO MANY PLEASANTLY BLUESY TUNES...",
            "<18>{#p/papyrus}{#f/6}IT'S A SHAME THE SOUND SYSTEM IS BROKEN RIGHT NOW.",
            ...(solo()
               ? []
               : [
                  "<25>{#p/undyne}{#f/13}* Blues?\n* Seriously?",
                  "<25>{#p/undyne}{#f/14}* Everyone knows rock 'n' roll is the BEST.",
                  "<18>{#p/papyrus}{#f/4}WHAT!?\nROCK AND ROLL IS WEIRD...",
                  "<18>{#p/papyrus}{#f/9}IF YOU NEED HEAVY GUITARS, METAL IS WHERE IT'S AT!!",
                  "<25>{#p/undyne}{#f/8}* You listen to METAL!?",
                  "<25>{#p/undyne}{#f/4}* No, no, you need to listen to DUBSTEP.",
                  "<18>{#p/papyrus}{#f/6}DUBSTEP!?!?"
               ])
         ],
         () =>
            solo()
               ? ["<18>{#p/papyrus}{#f/4}I MAY OR MAY NOT HAVE USED IT ONE TOO MANY TIMES."]
               : [
                  "<18>{#p/papyrus}{#f/0}BLUES IS NICE, BUT SKA IS MY FAVORITE OF ALL.",
                  "<18>{#p/papyrus}{#f/9}YOU CAN NEVER GET ENOUGH OF THOSE RIVETING TRUMPETS!"
               ]
      ),
      a_elevator2: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}{#f/0}WELCOME TO THE SECOND FLOOR OF AERIALIS.",
            "<18>{#p/papyrus}{#f/4}HERE, YOU WILL FIND MANY AMAZING THINGS...",
            "<18>{#p/papyrus}{#f/9}PUZZLES!\nBARRICADES!\nEVEN A TV SET!",
            ...(solo()
               ? ["<18>{#p/papyrus}{#f/5}... WAIT, ISN'T THAT WHAT'S ON THE FIRST FLOOR?"]
               : [
                  "<25>{#p/undyne}{#f/14}* So... exactly the same as what's on the first floor, then.",
                  "<18>{#p/papyrus}{#f/6}I GUESS SO???",
                  "<25>{#p/undyne}{#f/1}* I mean, hey.\n* At least the second floor is bigger.",
                  "<18>{#p/papyrus}{#f/4}OH, GREAT.\nI CAN GET EVEN -MORE- LOST, NOW.",
                  "<25>{#p/undyne}{#f/17}* At least the second floor has more cool stuff to look at!!",
                  "<18>{#p/papyrus}{#f/6}WON'T DO ME MUCH GOOD IF I'M LOST!!"
               ])
         ],
         [
            "<18>{#p/papyrus}{#f/5}WHOEVER MADE THIS AREA MUST BE A FAN OF BEING LAZY.",
            "<18>{#p/papyrus}{#f/4}IT'D CERTAINLY EXPLAIN THAT SENTRY STATION..."
         ]
      ),
      a_sans: pager.create(
         0,
         () => [
            "<19>{#p/papyrus}{#f/0}YES, MY BROTHER SELLS CORN DOGS AT HIS SENTRY STATION.",
            "<18>{#f/4}IT'S NOT EXACTLY WHAT I'D CALL \"PALATABLE.\"",
            "<18>{#f/5}I'D OPEN A FOOD STAND OF MY OWN TO OFFSET IT...",
            "<18>{#f/5}BUT THE LAST TIME I TRIED...",
            "<18>{#f/6}THE SPACE MAFIA WANTED A CUT OF THE PROFIT.",
            ...(solo()
               ? ["<18>{#f/7}SERIOUSLY!?\nI'D NEVER SELL OUT TO THE MAFIA!!"]
               : [
                  "<25>{#p/undyne}{#f/17}* ...",
                  "<25>{#p/undyne}{#f/17}* The WHAT?",
                  "<18>{#p/papyrus}{#f/0}THE SPACE MAFIA.",
                  "<18>{#f/4}YOU KNOW, THE ONES IN THE VIRTUALASIUM.",
                  "<25>{#p/undyne}{#f/12}* Oh, THAT space mafia."
               ])
         ],
         () =>
            solo()
               ? [
                  "<18>{#p/papyrus}{#f/0}CREDIT WHERE IT'S DUE, THEY DO DRESS SPIFFINGLY.",
                  "<18>{#f/7}NOT THAT IT'LL CHANGE MY MIND ABOUT THEM!",
                  "<18>{#p/papyrus}{#f/4}A GOOD DRESS SENSE CAN ONLY TAKE YOU SO FAR."
               ]
               : [
                  "<25>{#p/undyne}{#f/1}* You think this \"space mafia\" takes a cut of Sans's corn dog sales?",
                  "<18>{#p/papyrus}{#f/0}WOW! THAT'S A GREAT QUESTION!",
                  "<25>{#p/undyne}{#f/14}* Really?",
                  "<18>{#p/papyrus}{#f/0}A GREAT QUESTION I DON'T WANT AN ANSWER TO!"
               ]
      ),
      a_pacing: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}{#f/5}I GOT A STRANGE MESSAGE ON THE OUTERNET TODAY...",
            "<18>{#p/papyrus}{#f/4}ABOUT A COLONY OF MOLE-RATS, TRAPPED IN A FORCE FIELD.",
            "<18>{#p/papyrus}{#f/5}LIVING MOLE-RAT LIVES, EATING MOLE-RAT FOOD...",
            "<18>{#p/papyrus}{#f/4}YEARNING TO ONE DAY REACH THE MOLE-RAT STARS.",
            ...(solo()
               ? ["<18>{#p/papyrus}{#f/6}... WHAT COULD THIS MEAN!?"]
               : [
                  "<25>{#p/undyne}{#f/8}* You think that's strange?\n* Ha!",
                  "<25>{#p/undyne}{#f/7}* Just wait until you hear about the message I GOT the other day!",
                  "<18>{#p/papyrus}{#f/4}WAS IT ABOUT MOLE-RATS?",
                  "<25>{#p/undyne}{#f/14}* No.",
                  "<18>{#p/papyrus}{#f/4}DID IT INVOLVE A \"MONEY-MAKING OPPORTUNITY?\"",
                  "<25>{#p/undyne}{#f/14}* No.",
                  "<18>{#p/papyrus}{#f/6}DID IT PROMISE A WAY OFF THE OUTPOST??",
                  "<25>{#p/undyne}{#f/14}* ... actually, yes.\n* And that's when I blocked them.",
                  "<25>{#p/undyne}{#f/7}* NOBODY makes false promises of freedom and gets away with it!",
                  "<18>{#p/papyrus}{#f/0}YEAH!!",
                  "<18>{#p/papyrus}{#f/5}ESPECIALLY WHEN A -REAL- PROMISE OF FREEDOM...",
                  "<18>{#p/papyrus}{#f/6}IS ON THE PHONE WITH US RIGHT NOW!!"
               ])
         ],
         () =>
            solo()
               ? [
                  "<18>{#p/papyrus}{#f/5}I WONDER IF SUCH A COLONY ACTUALLY EXISTS.",
                  "<18>{#p/papyrus}{#f/4}THE UNIVERSE IS MADE OF INFINITES, AFTER ALL...",
                  "<18>{#p/papyrus}{#f/9}INFINITE DIVERSITY IN INFINITE COMBINATIONS!!"
               ]
               : [
                  "<18>{#p/papyrus}{#f/0}HERE'S TO THE PROMISE OF YOUR EVENTUAL FREEDOM.",
                  "<18>{#p/papyrus}{#f/6}AND MAYBE OURS TOO SOMEDAY!!"
               ]
      ),
      a_prepuzzle: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}{#f/5}THOSE FLOWERS SCATTERED AROUND THE AREA...?",
            "<18>{#p/papyrus}{#f/0}OH, THOSE WERE ASGORE'S IDEA, ACTUALLY.",
            "<18>{#p/papyrus}{#f/4}IF THAT GUY WASN'T THE \"CEO\" OF THE OUTPOST...",
            "<18>{#p/papyrus}{#f/5}HE'D BE THE \"CGO\" INSTEAD.",
            "<18>{#p/papyrus}{#f/5}AN ACRONYM FOR \"CHIEF GARDENING OFFICER.\"",
            ...(solo()
               ? []
               : [
                  "<25>{#p/undyne}{#f/17}* Oh yeah??\n* And who would I be?",
                  "<18>{#p/papyrus}{#f/0}RIGHT, I ALREADY CAME UP WITH ONE FOR YOU.",
                  "<18>{#p/papyrus}{#f/4}YOU'D BE THE \"CSETPO.\"",
                  "<25>{#p/undyne}{#f/14}* ... and what does that ludicrous acronym stand for?",
                  "<18>{#p/papyrus}{#f/9}THE \"CHIEF SMASH- EVERYTHING-TO- PIECES OFFICER!\"",
                  "<25>{#p/undyne}{#f/8}* I LOVE IT!!!"
               ])
         ],
         ["<18>{#p/papyrus}{#f/4}I MIGHT AS WELL BE THE \"CAO\" AROUND HERE..."]
      ),
      a_puzzle2: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}{#f/6}NO MATTER WHERE I GO, I END UP IN THE SAME PLACE!",
            "<18>{#p/papyrus}{#f/5}AT LEAST, THAT'S WHAT HAPPENS...",
            "<18>{#p/papyrus}{#f/4}WHENEVER I ATTEMPT TO SOLVE THIS PUZZLE.",
            ...(solo()
               ? []
               : [
                  "<25>{#p/undyne}{#f/17}* Jeez.\n* Why even BOTHER.",
                  "<18>{#p/papyrus}{#f/6}BECAUSE!!",
                  "<18>{#p/papyrus}{#f/6}SOLVING PUZZLES IS SUPPOSED TO BE FUN!!",
                  "<25>{#p/undyne}{#f/12}* Couldn't you just use flight magic to get around it?",
                  "<18>{#p/papyrus}{#f/4}FLIGHT MAGIC IS RESERVED FOR EMERGENCIES.",
                  "<25>{#p/undyne}{#f/1}* That depends on your definition of an \"emergency.\"",
                  "<18>{#p/papyrus}{#f/7}AND PUZZLES FALL WELL OUTSIDE OF THAT DEFINITION!",
                  "<25>{#p/undyne}{#f/14}* Guess you'll have to suffer, then.",
                  "<18>{#p/papyrus}{#f/7}I GUESS I WILL!!!"
               ])
         ],
         () =>
            solo()
               ? ["<18>{#p/papyrus}{#f/6}NUMBERS, NUMBERS EVERYWHERE!!", "<18>{#f/6}WHAT DOES IT ALL MEAN!?!?"]
               : [
                  "<18>{#p/papyrus}{#f/5}FLYING AROUND EVERYWHERE JUST WOULDN'T BE FAIR.",
                  "<25>{#p/undyne}{#f/11}* And you like to make life hard on yourself because...?",
                  "<18>{#p/papyrus}{#f/9}BECAUSE NOTHING IS AS REWARDING AS HARD WORK!",
                  "<25>{#p/undyne}{#f/17}* ... that depends on your definition of \"work.\""
               ]
      ),
      a_mettaton2: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}{#f/5}AH... THE TIME VERSUS MONEY TV SET.",
            ...(SAVE.data.n.plot < 60
               ? [
                  "<18>{#p/papyrus}{#f/4}JUST SO YOU KNOW...",
                  "<18>{#p/papyrus}{#f/5}I WON'T BE IN THE UPCOMING EPISODE.",
                  "<18>{#p/papyrus}{#f/6}... I'D BE TOO NERVOUS SITTING RIGHT NEXT TO HIM."
               ]
               : [
                  "<18>{#p/papyrus}{#f/4}METTATON WANTED ME TO BE IN THE EPISODE, BUT...",
                  "<18>{#p/papyrus}{#f/5}AFTER SOME THOUGHT, I CAME TO REALIZE...",
                  "<18>{#p/papyrus}{#f/6}... HOW NERVOUS I'D BE SITTING RIGHT NEXT TO HIM."
               ]),
            ...(solo()
               ? []
               : [
                  "<25>{#p/undyne}{#f/12}* ... you really like him, don't you?",
                  "<18>{#p/papyrus}{#f/4}WELL, HE -IS- QUITE ATTRACTIVE...",
                  "<18>{#p/papyrus}{#f/6}... BUT I HAVEN'T COMMITTED TO ANYTHING YET!",
                  "<25>{#p/undyne}{#f/3}* That won't last long.",
                  "<18>{#p/papyrus}{#f/4}HUH?\nDID YOU JUST ASSUME...",
                  "<18>{#p/papyrus}{#f/7}... OUR RELATIONSHIP STATUS!?!?",
                  "<25>{#p/undyne}{#f/14}* Oh, no, of course not.",
                  "<25>{#p/undyne}{#f/17}* It's just so obvious that I couldn't help but state the facts.",
                  "<18>{#p/papyrus}{#f/5}(SIGH...)"
               ])
         ],
         () =>
            solo()
               ? SAVE.data.n.plot < 60
                  ? ["<18>{#p/papyrus}{#f/0}FORTUNATELY, I HAVE A REPLACEMENT ARRANGED."]
                  : SAVE.data.b.undyne_respecc
                     ? ["<18>{#p/papyrus}{#f/0}THANKFULLY, UNDYNE WAS THERE TO TAKE MY PLACE."]
                     : ["<18>{#p/papyrus}{#f/0}THANKFULLY, MY BROTHER WAS THERE TO TAKE MY PLACE."]
               : ["<25>{#p/undyne}{#f/12}* Papyrus is too busy daydreaming to pick up the phone right now."]
      ),
      a_rg2: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}{#f/6}BE CAREFUL OUT THERE, HUMAN!",
            "<18>{#p/papyrus}{#f/5}THE GUARDS IN THAT AREA ARE FRESH OUT OF TRAINING.",
            "<18>{#p/papyrus}{#f/6}WHO KNOWS WHICH ROYAL MEMOS THEY'LL IGNORE!",
            ...(solo()
               ? ["<18>{#p/papyrus}{#f/0}BY THE WAY, WHAT'S A ROYAL MEMO?"]
               : [
                  "<25>{#p/undyne}{#f/16}* Tell me about it...",
                  "<18>{#p/papyrus}{#f/5}HUH?\nDO THEY IGNORE YOUR MEMOS OFTEN?",
                  "<25>{#p/undyne}{#f/14}* Oh, they follow mine just fine.",
                  "<25>{#p/undyne}{#f/10}* It's Alphys's memos they tend to ignore.",
                  "<18>{#p/papyrus}{#f/6}BUT SHE'S THE ROYAL SCIENTIST!",
                  "<18>{#p/papyrus}{#f/6}THE KING'S MOST TRUSTED ASSOCIATE!",
                  "<25>{#p/undyne}{#f/12}* Yeah... that's how things are supposed to work.",
                  "<25>{#f/16}* But after Professor Roman died, we weren't ready to replace him.",
                  "<25>{#f/10}* Most in the Royal Guard don't take his successor seriously, so...",
                  "<25>{#f/9}* That impacts how the trainees see her, too.",
                  "<18>{#p/papyrus}{#f/5}OH...",
                  "<25>{#p/undyne}{#f/17}* I know.\n* It's... not great.",
                  "<26>{#f/9}* But she's unweildy, and she's still got lots to prove out there.",
                  "<26>{#f/16}* So... I kind of get it.",
                  "<18>{#p/papyrus}{#f/5}HOPEFULLY THEY'LL COME TO RESPECT HER IN TIME.",
                  "<26>{#p/undyne}{#f/14}* Hopefully."
               ])
         ],
         () =>
            solo()
               ? ["<18>{#p/papyrus}{#f/0}I WONDER HOW IT'S DIFFERENT FROM A NORMAL MEMO."]
               : ["<18>{#p/papyrus}{#f/4}HOPEFULLY, IT HAPPENS SOONER RATHER THAN LATER."]
      ),
      a_barricade2: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}{#f/0}I'M AFRAID I DON'T HAVE MUCH TO SAY ABOUT THIS ROOM.",
            "<18>{#p/papyrus}{#f/5}IN FACT, THE ONLY THING I DO HAVE TO SAY...",
            "<18>{#p/papyrus}{#f/6}... IS THAT I -HAVE- NOTHING TO SAY!",
            ...(solo()
               ? ["<18>{#p/papyrus}{#f/0}SO, ACTUALLY, I HAD SOMETHING TO SAY AFTER ALL."]
               : [
                  "<26>{#p/undyne}{#f/1}* I have something to say.",
                  "<18>{#p/papyrus}{#f/6}WHAT?\nWHAT IS IT?",
                  "<26>{#p/undyne}{#f/14}* This room may or may not contain barricades.",
                  "<18>{#p/papyrus}{#f/4}THERE'S ALREADY A ROOM LIKE THAT ON THE FIRST FLOOR.",
                  "<18>{#p/papyrus}{#f/7}DO SOMETHING ORIGINAL!!",
                  "<26>{#p/undyne}{#f/17}* I've got nothin.'",
                  "<18>{#p/papyrus}{#f/5}... NEVER MIND..."
               ])
         ],
         () =>
            solo()
               ? ["<18>{#p/papyrus}{#f/0}PERHAPS I'D HAVE MORE TO SAY IN ANOTHER SITUATION."]
               : ["<18>{#p/papyrus}{#f/0}PERHAPS THIS ROOM JUST ISN'T VERY INTERESTING."]
      ),
      a_split: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}{#f/0}LOOK, IT'S THE EVER-FAMOUS METTATON FOUNTAIN!",
            "<18>{#f/4}I HEARD IT TOOK A LOT OF TIME TO GET IT TO LOOK RIGHT.",
            "<18>{#f/5}COUNTLESS HOURS OF TIRELESS, PAINFUL WORK...",
            "<18>{#f/6}TO GET THAT IDEAL RECTANGULAR SHAPE.",
            ...(solo()
               ? []
               : [
                  "<25>{#p/undyne}{#f/12}* Then he destroyed it just so he could do it all himself.",
                  "<18>{#p/papyrus}{#f/6}HE DID??",
                  "<25>{#p/undyne}{#f/1}* The first one wasn't up to his \"high standards.\"",
                  "<18>{#p/papyrus}{#f/4}WAIT, THERE WAS SOMETHING ABOUT THAT ON TV.",
                  "<25>{#p/undyne}{#f/14}* Oh yeah, he decided to broadcast it to the entire outpost.",
                  "<25>{#p/undyne}{#f/17}* He had to SHOW everyone that he knew better than them.",
                  "<18>{#p/papyrus}{#f/4}WELL, IT IS A STATUE -OF- HIM, AFTER ALL..."
               ])
         ],
         () =>
            solo()
               ? ["<18>{#p/papyrus}{#f/4}MY BROTHER TELLS ME THAT'S NOT ENTIRELY TRUE."]
               : [
                  "<18>{#p/papyrus}{#f/5}I WONDER WHY HE HIRED SOMEONE ELSE TO BEGIN WITH.",
                  "<18>{#p/papyrus}{#f/4}I WOULD'VE JUST DONE IT MYSELF..."
               ]
      ),
      a_offshoot1: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}{#f/5}THE SIGNAL SEEMS TO BE A BIT WEAK.",
            "<18>{#p/papyrus}{#f/6}IT'S LIKE... INTERFERENCE OF SOME KIND??",
            "<18>{#p/papyrus}{#f/4}MAYBE IT'D BE A GOOD IDEA TO CALL BACK ELSEWHERE.",
            ...(solo()
               ? []
               : [
                  "<25>{#p/undyne}{#f/14}* They're probably near the old security tower in Aerialis.",
                  "<25>{#p/undyne}{#f/17}* There's something about the kind of metal they used to use there."
               ])
         ],
         () =>
            solo()
               ? ["<18>{#p/papyrus}{#f/4}DID MY MESSAGE NOT GET THROUGH THE FIRST TIME?"]
               : ["<25>{#p/undyne}{#f/14}* I wouldn't worry about a thing."]
      ),
      a_elevator3: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}{#f/5}WHEN I FIRST CAME ACROSS THIS ROOM...",
            "<18>{#p/papyrus}{#f/6}I WAS ANNOYED HAVING TO USE YET ANOTHER ELEVATOR.",
            "<18>{#p/papyrus}{#f/5}THEN, I WAS RELIEVED SOMEWHAT...",
            "<18>{#p/papyrus}{#f/4}... WHEN I SAW THE LACK OF A TACKY BILLBOARD NEARBY.",
            ...(solo()
               ? []
               : [
                  "<25>{#p/undyne}{#f/17}* So do you LIKE using elevators or NOT?",
                  "<18>{#p/papyrus}{#f/6}WELL...",
                  "<18>{#p/papyrus}{#f/5}I LIKE THE MUSIC, BUT HAVING TO USE THEM IS A PAIN.",
                  "<18>{#p/papyrus}{#f/4}I DO ACKNOWLEDGE THEIR NECESSITY, THOUGH.",
                  "<25>{#p/undyne}{#f/1}* Well, just be glad you don't live in a spire house, then.",
                  "<18>{#p/papyrus}{#f/5}HOW COME?",
                  "<25>{#p/undyne}{#f/17}* Elevators EVERYWHERE.",
                  "<18>{#p/papyrus}{#f/6}N-NO...!",
                  "<25>{#p/undyne}{#f/7}* And they're not even NECESSARY.",
                  "<18>{#p/papyrus}{#f/8}IT CAN'T BE...!",
                  "<25>{#p/undyne}{#f/8}* AND THEY DON'T EVEN HAVE MUSIC!!!",
                  "<18>{#p/papyrus}{#f/1}IT'S UNFATHOMABLE!"
               ])
         ],
         () =>
            solo()
               ? [
                  "<18>{#p/papyrus}{#f/4}IF ONLY THERE WAS A BETTER WAY TO GET AROUND.",
                  "<18>{#p/papyrus}{#f/0}... OH WAIT, THERE TOTALLY IS!",
                  "<18>{#p/papyrus}{#f/9}LIFTGATES!!!"
               ]
               : [
                  "<18>{#p/papyrus}{#f/5}AN ELEVATOR WITHOUT MUSIC IS LIKE...",
                  "<18>{#p/papyrus}{#f/5}A PLATE OF SPAGHETTI WITHOUT MARINARA SAUCE.",
                  "<18>{#p/papyrus}{#f/4}OR ALFREDO SAUCE, IF YOU HAPPEN TO BE MY BROTHER.",
                  "<18>{#p/papyrus}{#f/4}... AND PEOPLE SAY I'M THE WEIRD ONE."
               ]
      ),
      a_elevator4: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}{#f/0}WHAT HAPPENS TO A SKELETON WHO WALKS THROUGH SECURITY?",
            "<19>{#p/papyrus}{#f/4}... OH YEAH.\nHE GETS ELECTROCUTED.",
            "<18>{#p/papyrus}{#f/6}JUST LIKE I WAS, THE FIRST TIME I CAME HERE!",
            ...(solo()
               ? []
               : [
                  "<25>{#p/undyne}{#f/1}* Sounds like quite the story you've got there.",
                  "<18>{#p/papyrus}{#f/4}OH, IT WAS QUITE A STORY, ALRIGHT...",
                  "<18>{#p/papyrus}{#f/5}JUST NOT A VERY GOOD ONE.",
                  "<25>{#p/undyne}{#f/14}* Could it be summed up as \"I had no idea what I was doing?\"",
                  "<18>{#p/papyrus}{#f/7}HEY, I -ALWAYS- KNOW WHAT I'M DOING!",
                  "<18>{#p/papyrus}{#f/5}IT'S MORE OF AN \"I WAS POWERLESS TO STOP IT\" SCENARIO.",
                  "<25>{#p/undyne}{#f/17}* Wait, if you were electrocuted by the security field...",
                  "<25>{#p/undyne}{#f/17}* Wouldn't that make you the OPPOSITE of powerless?",
                  "<18>{#p/papyrus}{#f/4}ACTUALLY, THAT'S A GOOD POINT..."
               ])
         ],
         () =>
            solo()
               ? ["<18>{#p/papyrus}{#f/6}IT'S A LONG STORY."]
               : ["<18>{#p/papyrus}{#f/0}PERHAPS IT'S NOT SUCH A BAD STORY AFTER ALL."]
      ),
      a_auditorium: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}{#f/0}MY BROTHER ONCE HOSTED A COMEDY SHOW HERE.",
            "<18>{#p/papyrus}{#f/4}IT WAS CALLED...",
            "<18>{#p/papyrus}{#f/4}... THE RIB-TICKLER.",
            "<18>{#p/papyrus}{#f/5}DESPITE THE TITLE, IT WASN'T A COMPLETE FAILURE.",
            ...(solo()
               ? ["<18>{#p/papyrus}{#f/0}IN FACT, IT DID PRETTY WELL!!"]
               : [
                  "<25>{#p/undyne}{#f/1}* To be honest, I'm kind of surprised he stopped doing it.",
                  "<25>{#p/undyne}{#f/16}* But I guess he just really wanted to be a sentry or something.",
                  "<18>{#p/papyrus}{#f/5}YEAH.\nTHAT MUST BE IT.",
                  "<18>{#f/4}THERE DEFINITELY ISN'T ANYTHING ELSE GOING ON.",
                  "<25>{#p/undyne}{#f/14}* ... what?"
               ])
         ],
         () =>
            solo()
               ? ["<18>{#p/papyrus}{#f/0}I'M AS SURPRISED AS YOU ARE."]
               : ["<18>{#p/papyrus}{#f/0}THERE ARE THINGS I PROBABLY SHOULDN'T MENTION RIGHT NOW."]
      ),
      a_aftershow: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}{#f/0}SO THIS IS WHERE BRATTY AND CATTY WORK, HUH?",
            "<18>{#f/0}IT'S CLEANER THAN I EXPECTED.",
            "<18>{#f/4}AREN'T THESE TWO SUPPOSED TO BE TRASH DEALERS...?",
            ...(solo()
               ? ["<18>{#p/papyrus}{#f/5}... PERHAPS THE TRASH IS JUST VERY WELL ORGANIZED."]
               : [
                  "<25>{#p/undyne}{#f/14}* I think they're just protective about the trash they collect.",
                  "<25>{#p/undyne}{#f/16}* Alphys told me how she used to go trash- hunting with them...",
                  "<25>{#p/undyne}{#f/9}* It's more than just some wacky hobby.\n* It's a way of LIFE.",
                  "<18>{#p/papyrus}{#f/0}THAT SEEMS KIND OF FUN, HONESTLY.",
                  "<25>{#p/undyne}{#f/1}* Plus, all the coolest trinkets get found by people like them.",
                  "<18>{#p/papyrus}{#f/9}LIKE THE MEW MEW DOLL ON TV EARLIER!!"
               ])
         ],
         () =>
            solo()
               ? [
                  "<18>{#p/papyrus}{#f/5}ORGANIZED TRASH...",
                  "<18>{#p/papyrus}{#f/4}THE TWO WORDS I NEVER THOUGHT I'D UTTER TOGETHER."
               ]
               : ["<18>{#p/papyrus}{#f/0}I WONDER IF HUMANS WOULD LIKE HUNTING FOR MONSTER TRASH."]
      ),
      a_hub1: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}{#f/0}AH... THE CENTRAL RING ROOM!",
            "<18>{#p/papyrus}{#f/4}AT FIRST, WHEN I HEARD THE TERM \"RING ROOM...\"",
            "<18>{#p/papyrus}{#f/5}I THOUGHT IT'D BE A ROOM FOR MAKING CALLS.",
            "<18>{#p/papyrus}{#f/0}GIVEN WHAT WE'RE DOING, THAT'S NOT ENTIRELY WRONG!",
            ...(solo()
               ? []
               : [
                  "<25>{#p/undyne}{#f/1}* The \"ring room,\" huh?",
                  "<26>{#p/undyne}{#f/14}* If I didn't know any better, I'd say you were a poet!",
                  "<18>{#p/papyrus}{#f/6}... ME, A POET!?",
                  "<18>{#p/papyrus}{#f/5}SOMEHOW I DOUBT THAT'D BE A GREAT USE OF MY TIME.",
                  "<25>{#p/undyne}{#f/17}* You're kidding, right?\n* You're a NATURAL.",
                  "<18>{#p/papyrus}{#f/4}IF YOU SAY SO..."
               ])
         ],
         () =>
            solo()
               ? ["<18>{#p/papyrus}{#f/4}NOT TO MENTION, THE RECEPTION IS WAY BETTER THERE."]
               : ["<18>{#p/papyrus}{#f/0}PAPYRUS THE POET.", "<18>{#f/5}WELL, IT DOES HAVE A RING TO IT..."]
      ),
      a_dining: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}{#f/5}I DON'T KNOW ABOUT YOU, BUT THE FOOD IN THIS PLACE...",
            "<18>{#f/6}... REALLY GRINDS MY GEARS!!",
            "<18>{#f/4}IT'S LIKE EVERYONE FORGOT WHAT GOOD COOKING IS LIKE.",
            "<18>{#f/7}WHERE'S MY PASTA- FLAVORED PASTA!?",
            ...(solo()
               ? []
               : [
                  "<25>{#p/undyne}{#f/14}* You know, that reminds me...",
                  "<25>{#p/undyne}{#f/1}* I once wanted the Royal Guard to have a culinary division.",
                  "<25>{#p/undyne}{#f/16}* We'd have gourmet restaurants, exquisite food...",
                  "<25>{#p/undyne}{#f/17}* ... and then, Asgore tasted my cooking.",
                  "<18>{#p/papyrus}{#f/4}HMM...",
                  "<18>{#p/papyrus}{#f/9}MAYBE YOU JUST DIDN'T ADD ENOUGH MARINARA SAUCE!",
                  "<25>{#p/undyne}{#f/3}* No amount of marinara sauce could fix THAT atrocity."
               ])
         ],
         () =>
            solo()
               ? [
                  "<18>{#p/papyrus}{#f/6}THE LAST TIME I TRIED TO ORDER IT, THEY...",
                  "<18>{#p/papyrus}{#f/5}... LET'S JUST SAY THE CONCEPT WAS BEYOND THEM."
               ]
               : ["<18>{#p/papyrus}{#f/4}MAYBE I SHOULD HAVE BEEN THE ONE COOKING."]
      ),
      a_hub2: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}{#f/0}LIFE IS LIKE A CHESS GAME.",
            "<18>{#p/papyrus}{#f/5}MINUS ALL OF THE BLUNDERING...",
            "<18>{#p/papyrus}{#f/5}AND CAPTURING OF PIECES...",
            "<18>{#p/papyrus}{#f/6}AND, UH...",
            "<18>{#p/papyrus}{#f/4}ACTUALLY, LIFE IS ALMOST NOTHING LIKE A CHESS GAME.",
            "<18>{#p/papyrus}{#f/0}BUT THEY DO HAVE ONE THING IN COMMON.",
            "<18>{#p/papyrus}{#f/9}WHICH IS THAT YOU NEVER KNOW WHAT TO EXPECT!!",
            ...(solo()
               ? []
               : [
                  "<25>{#p/undyne}{#f/1}* So, kind of like a box of tree saps, then.",
                  "<18>{#p/papyrus}{#f/0}YEAH, KIND OF LIKE THAT!",
                  "<18>{#p/papyrus}{#f/4}WAIT, ISN'T IT SUPPOSED TO BE A BOX OF CHOCOLATES?",
                  "<25>{#p/undyne}{#f/14}* That would be the human expression."
               ])
         ],
         () =>
            solo()
               ? ["<18>{#p/papyrus}{#f/4}PERHAPS IT'S MORE LIKE A BOX OF CHOCOLATES."]
               : ["<18>{#p/papyrus}{#f/0}CHOCOLATE AND TREE SAP TASTES VERY SIMILAR, ACTUALLY."]
      ),
      a_lookout: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}{#f/5}IN TIME, WE MAY ALL BE EXPLORERS AMONGST THE STARS.",
            "<18>{#p/papyrus}{#f/5}WE MAY VENTURE OUT INTO THE GREAT UNKNOWN...",
            "<18>{#p/papyrus}{#f/5}EJECTING OURSELVES FAR FROM THIS PRISON OF OLD.",
            ...(solo()
               ? []
               : [
                  "<25>{#p/undyne}{#f/17}* You didn't tell me you were planning a PRISON break!",
                  "<18>{#p/papyrus}{#f/5}DON'T WORRY, IT'S JUST AN ALLEGORY FOR FREEDOM.",
                  "<18>{#p/papyrus}{#f/4}A -REAL- PRISON BREAK WOULD BE FAR TOO SUSPICIOUS.",
                  "<25>{#p/undyne}{#f/16}* Yeah, yeah...",
                  "<18>{#p/papyrus}{#f/5}BESIDES, IF I WANTED TO DO ONE PROPERLY...",
                  "<18>{#p/papyrus}{#f/6}I'D HAVE TO PLAN ALL THE EMERGENCY MEETINGS!",
                  "<25>{#p/undyne}{#f/12}* Sheesh, that'd be quite the task."
               ])
         ],
         () =>
            solo()
               ? [
                  "<18>{#p/papyrus}{#f/4}LET'S JUST HOPE THAT, WHEN WE REACH THE STARS...",
                  "<18>WE DON'T MEET ANY OF THOSE MOLE-RAT IMPOSTORS."
               ]
               : ["<18>{#p/papyrus}{#f/5}MY APOLOGIES.", "<18>{#f/4}I DIDN'T MEAN TO VENT."]
      ),
      a_hub3: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}{#f/6}ISN'T THAT WHERE THE CHILLY FOLKS HANG OUT?",
            "<18>{#p/papyrus}{#f/5}I FEEL KIND OF BAD FOR THEM...",
            "<18>{#p/papyrus}{#f/9}... WHICH IS WHY I PLAN TO BUY THEM A FRIDGE SOMEDAY!",
            "<18>{#p/papyrus}{#f/0}THAT WAY, THEY'LL ALWAYS HAVE A COLD PLACE NEARBY.",
            ...(solo()
               ? []
               : [
                  "<25>{#p/undyne}{#f/1}* Speaking of nearby...",
                  "<25>{#p/undyne}{#f/8}* We're RIGHT in the next room over!!",
                  "<18>{#p/papyrus}{#f/9}CORRECT!!\nRIGHT DOWN HERE!!",
                  "<25>{#p/undyne}{#f/17}* Over, not down.",
                  "<18>{#p/papyrus}{#f/6}... IT'S DOWN ON THE FLOOR PLAN!!",
                  "<25>{#p/undyne}{#f/14}* I doubt the human even knows what that looks like."
               ])
         ],
         () =>
            solo()
               ? ["<18>{#p/papyrus}{#f/0}ISN'T TECHNOLOGY WONDERFUL?"]
               : [
                  "<18>{#p/papyrus}{#f/6}WHAT ARE YOU WAITING FOR!!!\nCOME ON DOWN!!",
                  "<25>{#p/undyne}{#f/7}* He means OVER!!"
               ]
      ),
      a_plaza: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}{#f/0}THAT'S WHERE BURGIE'S SHOP IS.",
            "<18>{#p/papyrus}{#f/6}ALTHOUGH WHAT HE SELLS IS BASICALLY JUNK FOOD...",
            "<18>{#p/papyrus}{#f/5}HE DOES SEEM LIKE A REALLY GENUINE GUY.",
            ...(solo()
               ? []
               : [
                  "<25>{#p/undyne}{#f/12}* That's definitely one way of putting it.",
                  "<18>{#p/papyrus}{#f/5}ADMITTEDLY, HE CAN BE A BIT STRESSFUL TO TALK TO.",
                  "<18>{#p/papyrus}{#f/6}BUT I DON'T THINK THAT'S HIS FAULT!!",
                  "<18>{#p/papyrus}{#f/4}IT'S... ACTUALLY KIND OF METTATON'S FAULT.",
                  "<18>{#p/papyrus}{#f/9}BUT DON'T WORRY!\nI'LL CONFRONT HIM LATER ABOUT IT!"
               ])
         ],
         () =>
            solo()
               ? ["<18>{#p/papyrus}{#f/6}ONCE YOU EARN HIS RESPECT, OF COURSE."]
               : ["<18>{#p/papyrus}{#f/4}THAT ROBOT AND I HAVE... A LOT TO DISCUSS."]
      ),
      a_elevator5: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}{#f/4}THIS \"REC CENTER\" IS CERTIANLY RECREATIONAL...",
            "<18>{#p/papyrus}{#f/5}... IN MORE WAYS THAN ONE.",
            "<18>{#p/papyrus}{#f/6}WHAT'S SO AMAZING ABOUT WISH FLOWERS, ANYWAY?",
            "<18>{#p/papyrus}{#f/4}DOES THEIR AURA MAKE ALL YOUR WISHES COME TRUE?",
            ...(solo()
               ? ["<18>{#p/papyrus}{#f/0}HMM... MAYBE I SHOULD TRY IT SOMETIME."]
               : [
                  "<25>{#p/undyne}{#f/14}* I don't think you'd enjoy it, Papyrus.",
                  "<25>{#p/undyne}{#f/17}* It's not your style.",
                  "<18>{#p/papyrus}{#f/5}YEAH, YOU'RE PROBABLY RIGHT.",
                  "<25>{#p/undyne}{#f/14}* Of course I am.",
                  "<18>{#p/papyrus}{#f/9}STILL, IT NEVER HURTS TO TRY!!",
                  "<25>{#p/undyne}{#f/17}* ..."
               ])
         ],
         () => [
            "<18>{#p/papyrus}{#f/0}BETTER NOT DO IT IN THE REC CENTER, THOUGH.",
            "<18>{#p/papyrus}{#f/4}TALK ABOUT BEING A NUSIANCE.",
            ...(solo() ? [] : ["<25>{#p/undyne}{#f/12}* Pfft, yeah..."])
         ]
      ),
      a_hub4: pager.create(
         0,
         () =>
            solo()
               ? [
                  "<18>{#p/papyrus}{#f/0}SO THERE'S LOTS TO DO UP THERE, HUH?",
                  "<18>{#p/papyrus}{#f/9}SOUNDS LIKE A GREAT PLACE TO HANG OUT!!",
                  "<18>{#p/papyrus}{#f/0}I'LL HAVE TO VISIT SOMETIME.",
                  "<18>{#p/papyrus}{#f/4}I'D PREFER IT OVER STANDING IN FRONT OF UNDYNE'S HOUSE."
               ]
               : ["<25>{#p/undyne}{#f/8}* Wanna talk?\n* We're right here, punk!"],
         () =>
            solo()
               ? [
                  "<18>{#p/papyrus}{#f/4}MAYBE, AFTER WE HANG OUT WITH HER...",
                  "<18>{#p/papyrus}{#f/0}WE COULD ALL COME HERE TOGETHER!"
               ]
               : ["<25>{#p/undyne}{#f/8}* Wanna talk?\n* We're right here, punk!"]
      ),
      a_sleeping1: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}{#f/0}I HEAR THIS HOTEL IS MADE IN EXTRA DIMENSIONS.",
            "<18>{#p/papyrus}{#f/4}DIMENSIONS...\nLAYERS...",
            "<18>{#p/papyrus}{#f/5}DO THEY GIVE US EXTRA BLANKETS TO TAKE NAPS WITH?",
            "<18>{#p/papyrus}{#f/0}ASKING FOR A FRIEND, OF COURSE.",
            ...(solo()
               ? []
               : [
                  "<25>{#p/undyne}{#f/17}* Right, because YOU just stay awake all the time.",
                  "<18>{#p/papyrus}{#f/0}EXACTLY!\nI CAN'T WASTE MY TIME NAPPING.",
                  "<25>{#p/undyne}{#f/14}* What about sleeping?",
                  "<18>{#p/papyrus}{#f/6}SLEEPING???",
                  "<18>{#p/papyrus}{#f/4}... THAT'S JUST AN EXCUSE MY BROTHER USES TO TAKE NAPS.",
                  "<25>{#p/undyne}{#f/17}* Obviously!!"
               ])
         ],
         () =>
            solo()
               ? [
                  "<18>{#p/papyrus}{#f/0}OH, ME?\nI DON'T TAKE NAPS.",
                  "<18>{#p/papyrus}{#f/4}I JUST HAPPEN TO CLOSE MY EYES FOR A WHILE."
               ]
               : ["<18>{#p/papyrus}{#f/4}IT'S A MIRACLE HE MAKES IT OUT OF BED ANYMORE."]
      ),
      a_hub5: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}{#f/6}IF YOU'RE LEAVING THE REC CENTER, I...",
            "<18>{#p/papyrus}{#f/5}WON'T BE ABLE TO REACH YOU.",
            "<18>{#p/papyrus}{#f/4}IF YOU'RE ON THE RETURN TRIP, THOUGH...",
            "<18>{#p/papyrus}{#f/0}... THEN THERE'S NO NEED TO WORRY!!",
            ...(solo()
               ? []
               : [
                  "<25>{#p/undyne}{#f/14}* It's not like we're going anywhere.",
                  "<18>{#p/papyrus}{#f/6}NOT AT ALL!!",
                  "<18>{#p/papyrus}{#f/5}THOUGH, AT SOME POINT, WE WILL INEVITABLY LEAVE.",
                  "<25>{#p/undyne}{#f/16}* I mean, that's true, but...",
                  "<25>{#p/undyne}{#f/17}* This is no time to be worrying about that!",
                  "<18>{#p/papyrus}{#f/0}QUITE RIGHT."
               ])
         ],
         () =>
            solo()
               ? [
                  "<18>{#p/papyrus}{#f/6}SO ARE YOU COMING, OR GOING?",
                  "<18>{#f/5}IT'S HARD TO TELL WHICH WAY IS WHICH AROUND HERE."
               ]
               : ["<18>{#p/papyrus}{#f/6}STOP WORRYING!!"]
      )
   },

   s_save_starton: {
      s_crossroads: {
         name: "星港 - 停靠港",
         text: () =>
            SAVE.data.n.plot < 29
               ? world.edgy
                  ? ["<32>{#p/human}* （有个骷髅没有出现，\n  这让你充满了决心。）"]
                  : ["<32>{#p/human}* （那对骷髅兄弟的滑稽互动\n  使你充满了决心。）"]
               : papreal() || world.runaway
                  ? ["<32>{#p/human}* (The box is so lonely, it fills you with determination anyway.)"]
                  : ["<32>{#p/human}* (The box can rest easy now.)\n* (This, of course, fills you with determination.)"]
      },
      s_pacing: {
         name: "星港 - 月岩小路",
         text: () =>
            papreal() || world.runaway
               ? SAVE.data.n.plot < 29
                  ? ["<32>{#p/human}* (The starlight dims.)\n* (Somehow, this fills you with determination.)"]
                  : ["<32>{#p/human}* (The starlight has faded.)\n* (Indeed, this fills you with determination.)"]
               : SAVE.data.b.svr
                  ? [
                     "<32>{#p/human}* (The frivolous arguments once had in this room have ceased.)",
                     "<32>* （这使你充满了决心。）"
                  ]
                  : world.population > 5
                     ? [
                        "<32>{#p/human}* （月岩商人在前景里\n  轻浮地争论着。）",
                        "<32>* （这使你充满了决心。）"
                     ]
                     : ["<32>{#p/human}* (The starlight remains dim.)\n* (Somehow, this fills you with determination.)"]
      },
      s_spaghetti: {
         name: "星港 - 意面枢纽",
         text: () =>
            [
               ["<32>{#p/human}* （一盘违反物理定律的意大利面\n  使你充满了决心。）"],
               [
                  "<32>{#p/human}* (The spaghetti no longer defies the laws of physics.)",
                  "<32>{#p/human}* (This fills you with determination.)"
               ],
               ["<32>{#p/human}* (The spaghetti is no more.)", "<32>{#p/human}* (This fills you with determination.)"]
            ][SAVE.data.n.state_starton_spaghetti]
      },
      s_town1: {
         name: "星港 - 小镇",
         text: () =>
            SAVE.data.b.svr
               ? [
                  "<32>{#p/human}* (The town may be abandoned, but its cuteness remains.)",
                  "<32>{#p/human}* (This fills you with determination.)"
               ]
               : papreal() || world.runaway
                  ? ["<32>{#p/human}* (A shadow looms over town, filling you with determination.)"]
                  : ["<32>{#p/human}* （这个可爱的小镇\n  使你充满了决心。）"]
      }
   }
};


// END-TRANSLATE
