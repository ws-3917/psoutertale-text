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
      locketseller: [">{#p/basic}* ...", ">{#p/basic}* I'm going to pretend you didn't just sell that locket."],
      noequip: [">{#p/human}* （你打算不这么做。）"],
      darktoriel1: [
         ">{#p/human}* （你抓住了托丽尔的手。）",
         ">{#p/toriel}{#f/2}* 噢天哪...！\n* 弗-弗里斯克，是你吗？",
         ">{#f/1}* 在这里见到你真不容易..."
      ],
      darktoriel2: [
         ">{#p/toriel}{#f/9}* 我向你道歉。你肯定在到处找我。",
         ">{#f/9}* If you tried to call me, I had my phone turned off.",
         ">{#f/13}* ...",
         ">{#f/13}* 我为我所做的道歉，小家伙。",
         ">{#f/13}* 即使你原谅我，我也很难接受。",
         ">{#f/9}* 我才刚刚开始接受我的所作所为。",
         ">{#f/10}* ...",
         ">{#f/10}* 总之，很高兴见到你。"
      ],
      darktoriel3: [
         ">{#p/toriel}{#f/5}* ...嗯？\n* 你想让我叫... 衫斯？",
         ">{#f/1}* Let me turn it on..."
      ],
      darktoriel4a: [
         ">{#s/phone}{#p/event}* 拨号中...",
         ">{#p/toriel}{#f/3}* ...哦，好吧。\n* 我的手机在这里会出点问题。"
      ],
      darktoriel4b: [
         ">{#f/4}* 我得自己去找他。",
         ">{#f/5}* 呃... 我会的。\n* 但不是现在。",
         ">{#f/5}* ..."
      ],
      darktoriel5a: [
         ">{#p/toriel}{#f/5}* ...嗯？\n* 你还有话要跟我说？",
         ">{#p/human}* （你重复托丽尔在Archive Six中\n  给你的建议。）",
         ">{#p/toriel}{#f/2}* ...",
         ">{#f/1}* 这些话...",
         ">{#f/1}* 你怎么可能听过...？",
         ">{#f/0}* 我上次那么说已经是一个世纪前了。",
         ">{#f/5}* ...",
         ">{#f/1}* 好吧...\n* 我会记住你说的话的。"
      ],
      darktoriel5b: [">{#p/toriel}{#f/1}* 嗯，现在该走了。"],
      darktoriel6: [
         ">{#f/5}* 运输船快出发了，我不能错过。",
         ">{#f/9}* 然而，现在，我必须收集我的想法。",
         ">{#f/1}* ...谢谢你的好意，弗里斯克。\n* 你是最棒的。"
      ],
      darktoriel7: () =>
         SAVE.data.b.c_state_secret1_used
            ? [
               ">{#p/toriel}{#f/10}* 别担心，弗里斯克。\n* 我会没事的。",
               ">{#f/1}* 运输船上见。\n* 好吗？"
            ]
            : [
               ">{#p/toriel}{#f/5}* 弗里斯克，你得给我时间处理一下。",
               ">{#f/1}* 运输船上见。\n* 好吗？"
            ],
      ghostpartymusic1: [
         ">{#p/finalghost}* Ah, the classic.\n* Not just \"a\" spooktune, but \"the\" spooktune.",
         ">* The original, you might say."
      ],
      ghostpartymusic2: [
         ">{#p/mettaton}{#e/mettaton/9}* NOW THIS IS SOMETHING I CAN REALLY \"VIBE\" TO, AS BLOOKY WOULD SAY.",
         ">{#e/mettaton/36}* IT'S GOT JUST THE RIGHT MIX OF ELEMENTS...",
         ">{#e/mettaton/8}* AND THE BREAKDOWN?",
         ">{#e/mettaton/9}* NOT WHAT I WOULD HAVE GONE FOR, BUT DECENT NONETHELESS."
      ],
      ghostpartymusic3: [
         ">{#p/basic}{#e/maddummy/1}* I always thought this one felt really slow, you know?",
         ">* Just... super... duper... slow.",
         ">{#e/maddummy/0}* But that's just me."
      ],
      evac: [">{#p/human}* （你感觉周围的怪物越来越少了。）"],
      shopclosed: [">{#p/human}* （但是没什么可做的了。）"],
      starKILLER: [">{#p/basic}{#npc/a}* The grass is fading faster than I had thought."],
      quicksolve3: () =>
         postSIGMA()
            ? [">{#p/basic}* It's out of service."]
            : SAVE.data.b.svr
               ? [">{#p/human}* (The terminal appears to have been powered off.)"]
               : [
                  ">{#p/human}* （你激活了终端。）",
                  ">{#p/basic}* “通路已打开！”\n* “不必再进行任何操作。”"
               ],
      quicksolve4: [">{#p/human}* （你激活了终端。）", ">{#p/basic}* \"Enter override code!\""],
      quicksolve5: [
         ">{#p/basic}* ...",
         ">{#p/basic}* If only you knew a puzzle officionado who could tell you what that code might be."
      ],
      quicksolve6: () => [">{#p/basic}* ...", choicer.create("* (Enter the code?)", "是", "否")],
      quicksolve7: [">{#p/human}* (You decide not to enter.)"],
      quicksolve8: [">{#p/basic}* Well, that's a mercy."],
      escape: [
         ">{#p/event}* 铃铃，铃铃...",
         ">{#p/alphys}* H-hey... are you there?",
         ">* I know you want to keep going forward, but...",
         ">* If you do, she'll... try to kill you...",
         ">* I tried to stop her... b-but she wouldn't listen to me!",
         ">* Now she's...",
         ">* ...",
         ">* But, uh, it's okay!\n* Because...",
         ">* B-because there's another way to get past her!",
         ">* I know it'd be kind of...\n* Inconvenient...",
         ">* But it's the only way you'll make it out alive...!",
         ">* T-trust me... okay?",
         ">* Go back to the balcony j-just before the pylon puzzle.",
         ">* If you don't, I...",
         ">* I...",
         ">* I'll... let you go now.\n* Good luck...",
         ">{#s/equip}{#p/event}* 滴..."
      ],
      artifact1: [">{#p/human}* （你获得了传说中的神器。）"],
      artifact2: [">{#p/human}* （你带的东西太多，装不下它了。）"],
      artifact3: () =>
         SAVE.data.b.svr
            ? [">{#p/human}* (The inscription describes a riddle of ivories and melodies.)"]
            : [
               ">{#p/basic}* 底座上刻着铭文。",
               ">* “雅乐喈喈，分为二别。”",
               ">* “左居王子，右居者谁？”",
               ">* “奏其旋律，訇然谜解。”"
            ],
      tome0: () =>
         SAVE.data.b.svr
            ? [">{#p/human}* (It seems there's something missing here.)"]
            : [">{#p/basic}* 这册书牢牢地固定在底座上。"],
      tome1: () =>
         SAVE.data.b.svr
            ? [">{#p/human}* (But the tome seems to have been taken.)"]
            : [
               ">{#p/human}* （你取下了卷轴《顿悟》。）",
               ...(world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
                  ? [">{#p/kidd}{#f/2}* 哈哈。", ">{#f/2}* That thing must be REALLY old."]
                  : [])
            ],
      tome2: [">{#p/human}* （你带的东西太多，装不下它了。）"],
      tome3: () =>
         SAVE.data.b.svr
            ? [">{#p/human}* (The inscription speaks of peace and good intentions.)"]
            : [
               ">{#p/basic}* There is a writ inscribed on the pedastal.",
               ">* \"To those who are worthy, to those who are kind.\"",
               ">* \"To those who wish well, in both heart and mind.\"",
               ">* \"May peace follow you on your journey home.\""
            ],
      tome4: () => [
         choicer.create(
            "* (What do you intend to do?)",
            "Spare",
            world.meanie ? "Bully" : world.flirt > 9 ? "调情" : SAVE.data.b.oops ? "Befriend" : "拥抱",
            "Kill",
            "Take Gold"
         )
      ],
      tome5a: ">{#p/human}* (You focus your mind on the intent to spare.)",
      tome5b: () =>
         world.meanie
            ? ">{#p/human}* (You focus your mind on the intent to bully.)"
            : world.flirt > 9
               ? ">{#p/human}* (You focus your mind on the intent to flirt.)"
               : SAVE.data.b.oops
                  ? ">{#p/human}* (You focus your mind on the intent to befriend.)"
                  : ">{#p/human}* (You focus your mind on the intent to hug.)",
      tome5c: ">{#p/human}* (You focus your mind on the intent to kill.)",
      tome5d: ">{#p/human}* (You focus your mind on the intent to take gold.)",
      tome5e: ">{#p/basic}* Suddenly...!",
      tome5f: "\n* (Nothing happens.)",
      astrofood0: () => [
         ">{#p/human}* (You can't make out what's in the box...)",
         choicer.create("* (Take something out?)", "是", "否")
      ],
      astrofood1: () =>
         [
            [
               ">{#p/basic}* 箱子里有三份太空豆腐。",
               choicer.create("* （拿一个吗？）", "是", "否")
            ],
            [
               ">{#p/basic}* There are two portions of Space Tofu left in the box.",
               choicer.create("* （拿一个吗？）", "是", "否")
            ],
            [
               ">{#p/basic}* There is one portion of Space Tofu left in the box.",
               choicer.create("* （拿走它吗？）", "是", "否")
            ]
         ][SAVE.data.n.state_foundry_astrofood],
      astrofood2: [">{#p/human}* （你得到了太空豆腐。）"],
      astrofood3: [">{#p/human}* （你带的东西太多了。）"],
      astrofood4: () => [">{#p/human}* （你不打算这么做。）"],
      astrofood5: () =>
         SAVE.data.b.svr
            ? [">{#p/human}* (But you couldn't find anything inside.)"]
            : [">{#p/basic}* 箱子是空的。"],
      bird1: () => [
         ...(SAVE.data.b.svr ? [] : [">{#p/basic}* 这只小鸟想带你\n  穿过这道沟。"]),
         choicer.create("* （接受小鸟的好意吗？）", "是", "否")
      ],
      blookdate1: () =>
         world.sad_ghost || world.population === 0
            ? [
               ">{#p/napstablook}* oh...\n* hi there...",
               ">* 对不起，我...\n* 没想到你会跟我过来。",
               ">* uh...\n* make yourself at home...?"
            ]
            : [
               ">{#p/napstablook}* 哦...\n* 你真的来了...",
               ">* 对不起，我...\n* 没想到你会来。",
               ">* 虽然比较寒酸，\n  但是不要太拘束哦。"
            ],
      blookdate2: () => [
         ...(world.sad_ghost || world.population === 0
            ? [">{#p/napstablook}* oh... you want my food...", ">* let me see what i have..."]
            : SAVE.data.b.f_state_ghostsleep
               ? [">{#p/napstablook}* okay, so...", ">* let me show you what's in the fridge"]
               : [">{#p/napstablook}* 你饿了吗？", ">* 我冰箱里应该有点吃的..."])
      ],
      blookdate2x: pager.create(
         0,
         () =>
            SAVE.data.b.svr
               ? [
                  ">{#p/human}* (You inspect the fridge.)\n* (It doesn't seem like you can exactly see the contents.)"
               ]
               : [
                  ">{#p/human}* （你看了下冰箱里头。）",
                  ">{#p/basic}* 很难说里面到底有些什么。",
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
                  ">{#p/human}* （你看了下冰箱里头。）",
                  ">{#p/basic}* 很难说里面到底有些什么。"
               ]
      ),
      blookdate3: () => [
         ">{#p/napstablook}* 这是一份幽灵三明治...",
         ">* 你想尝尝吗...",
         choicer.create("* （咬一口吗？）", "是", "否")
      ],
      blookdate4a: [
         ">{#p/human}* （你试着咬了一口幽灵三明治。）",
         ">{#p/human}* （你的身体穿过了它。）",
         ">{#p/napstablook}* 哦...",
         ">* 当做什么都没发生吧..."
      ],
      blookdate4b: [">{#p/napstablook}* 哦..........."],
      blookdate5: () => [
         ">{#p/napstablook}* 美餐一顿后，\n  我喜欢躺在地上，\n  感觉自己像是垃圾一样...",
         ">* 这是个家族传统...",
         ">* 你想不想...\n* ...也来试试...？",
         choicer.create("* （你要怎么回答？）", "是", "否")
      ],
      blookdate6a: [">{#p/napstablook}* 好...\n* 跟我来做..."],
      blookdate6b: [">{#p/napstablook}* 哦......................", ">* i'll just be outside then"],
      blookdate7: [
         ">{#p/napstablook}* 我们开始吧...\n* 一直躺着不要动就好。",
         ">* 所以...\n* 你要想起来了的话，\n  动起来就好，大概。"
      ],
      blookdate8: [">{#p/napstablook}* 嗨，感觉不错...", ">* 谢谢你..."],
      blookdate8x: [">{#p/napstablook}* well, that was fast......", ">* thanks for trying, though......"],
      blookdate8y: [">{#p/napstablook}* well, that was that", ">* ............"],
      blookdate9: [
         ">{#p/napstablook}* 我先出去一下...\n* 你可以跟我来...\n* 不来也可以...",
         ">* 由你来决定..."
      ],
      blookmusic0: [">{#p/basic}* It's out of service."],
      blookmusic1: () => [
         SAVE.data.b.svr
            ? ">{#p/human}* (You reach for the sound system...)"
            : ">{#p/basic}* 现在没有播放音乐。",
         choicer.create("* （放一首吗？）", "鬼怪旋律", "鬼怪音波", "鬼怪华尔兹", "取消")
      ],
      blookmusic1y: [">{*}{#p/human}* （你转动旋钮...）{^40}{%}"],
      blookmusic2: () => [
         SAVE.data.b.svr
            ? ">{#p/human}* (It sounds like a song is currently playing.)"
            : [
               ">{#p/basic}* 正在播放《鬼怪旋律》",
               ">{#p/basic}* 正在播放《鬼怪音波》",
               ">{#p/basic}* 正在播放《鬼怪华尔兹》"
            ][SAVE.data.n.state_foundry_blookmusic - 1],
         choicer.create("* （停止播放吗？）", "是", "否")
      ],
      blookmusic3a: [
         ">{#p/napstablook}* 哦...\n* 一首经典诡异单曲...",
         ">* 他们现在已经不做\n  这种歌了..."
      ],
      blookmusic3b: [">{#p/napstablook}* 天，这氛围...", ">* 让我全身都开始颤抖"],
      blookmusic3c: [
         ">{#p/napstablook}* 这首稍微有点慢...",
         ">* 但一旦你听进状态，\n  就会感觉很好听"
      ],
      blookmusic3d: [
         ">{#p/napstablook}* 嘿...\n* 你真的很喜欢听\n  那个旧歌单，嗯",
         ">* 我是说......\n* 我从那次以后，\n  做了些更好的东西.....",
         ">* 不过，我还是很感激",
         ">* 所以... 谢谢你，嘿"
      ],
      blooksnail1: pager.create(
         0,
         () => [
            ">{#p/napstablook}* 你想玩个游戏吗？\n* 它叫做“雷霆蜗牛”。",
            ">* 几只蜗牛会赛跑，\n  然后如果黄色的蜗牛赢了，\n  你就赢了。",
            ">* 玩一次需要10G。",
            choicer.create("* （玩游戏吗？）", "是", "否")
         ],
         () => [">{#p/napstablook}* 你改变主意了吗？", choicer.create("* （玩游戏吗？）", "是", "否")]
      ),
      blooksnail1i: () => [
         ">{#p/napstablook}* 你想再玩一次吗？",
         choicer.create("* （玩游戏吗？）", "是", "否")
      ],
      blooksnail2a: [
         ">{#p/napstablook}* um...\n* you don't have enough money......",
         ">* n-no, you can still play, don't worry about it..."
      ],
      blooksnail2b: [">{#p/napstablook}* 哦..........."],
      blooksnail2b0: [">{#p/napstablook}* 好吧..........."],
      blooksnail3: [">{#p/napstablook}* 好...\n* 重复按[Z]为你的蜗牛加油。", ">* 准备好了吗？"],
      blooksnail3i: [">{#p/napstablook}* 好的...\n* 记住，你随时可以为你的蜗牛\n  加油。", ">* 准备好了吗？"],
      blooksnail4a: [
         ">{#p/napstablook}* 你赢了... 恭喜。",
         ">* 希望奖励对你来说足够了...",
         ">{#s/equip}{#p/human}* （你得到了20G。）"
      ],
      blooksnail4b: [
         ">{#p/napstablook}* 你的蜗牛差一点点\n  就能赢了。",
         ">* 等一下...\n* 蜗牛以为是自己赢了...",
         ">* 哦不... 蜗牛会很伤心的...",
         ">* 那么，我就给你一些钱吧...\n* 表现得像你赢了的样子...",
         ">{#s/equip}{#p/human}* （你得到了40G。）"
      ],
      blooksnail4c: [
         ">{#p/napstablook}* 哦...........\n* 你们都尽力了...",
         ">* 那只蜗牛看起来很气馁...",
         ">* 我觉得她应该还没有\n  发挥到最好...",
         ">* 哦..........."
      ],
      blooksnail4d: [
         ">{#p/napstablook}* 哦...........\n* 看起来你为你的蜗牛\n  加油有点过头了...",
         ">* 你给她施加的压力...\n* 真的让它吃不消...",
         ">* 哦..........."
      ],
      blooksnail4e: [
         ">{#p/napstablook}* 哦...........\n* 看起来你为你的蜗牛\n  加油过头了...",
         ">* 她甚至都不看你了...",
         ">* 哦..........."
      ],
      blooksnail4f: [
         ">{#p/napstablook}* 哦...........\n* 看起来你为你的蜗牛\n  加油实在太过头了...",
         ">* 现在她... 直接消失了...",
         ">* 哦..........."
      ],
      blooksnailX: {
         a: "3...",
         b: "2...",
         c: "1...",
         d: "开始!",
         e: "比赛结束"
      },
      blooksorry1: () => [
         ">{#p/napstablook}* ...？",
         ">* you...\n* you're...",
         ">* ... are you sure?",
         choicer.create("* （你要怎么回答？）", "是", "否")
      ],
      blooksorry2: () => [
         ">{#p/napstablook}* i...",
         ">* i never thought you'd...",
         ">* ... um...",
         ">* ... are you absolutely sure?",
         choicer.create("* （你要怎么回答？）", "是", "否")
      ],
      blooksorry3: [
         ">{#p/napstablook}* you...",
         ">* you really mean it, don't you?",
         ">* ...\n* heh...",
         ">* okay...",
         ">* i'll try to forget about what you did before..."
      ],
      blooksorryX: [">{#p/napstablook}* 哦...........\n* ...........\n* ..........."],
      blooksorryY: [">{#p/napstablook}* ..."],
      blooktouch1: () =>
         world.sad_ghost
            ? [
               ">{#p/napstablook}* what do you want......",
               choicer.create("* （你要怎么回答？）", "Sorry", "放弃")
            ]
            : [
               ">{#p/napstablook}* 哦，你需要什么吗？",
               choicer.create("* （你要怎么回答？）", "拥抱", "睡觉", "音乐", "放弃")
            ],
      blooktouch2a1: [
         ">{#p/napstablook}* 你... 想要...\n* 嗯...",
         ">* 你想让我抱抱你？",
         ">* 好...\n* 如果能让你开心的话...",
         ">{#p/basic}* 纳普斯特试着抱了抱你。",
         ">* 它直接穿过了你。",
         ">{#p/napstablook}* 哦...........",
         ">* 我感觉...........\n* 我做不到..........."
      ],
      blooktouch2a2: [
         ">{#p/napstablook}* 你真的想要抱抱，\n  是吗...",
         ">* 抱歉...\n* 我也希望我可以..."
      ],
      blooktouch2b1: [
         ">{#p/napstablook}* 你想找个地方睡觉吗？",
         ">* 嗯... 我这里其实没有床...",
         ">* 嗯...",
         ">* 去冰箱看看有没有吃的...",
         ">* 吃完之后，我们就可以\n  在地上躺一躺...",
         ">* 你到时候就知道了..."
      ],
      blooktouch2b2: [">{#p/napstablook}* 冰箱..."],
      blooktouch2c1: [
         ">{#p/napstablook}* 如果你想听音乐，\n  我的音响里有一些...",
         ">* 可以随便听听看...\n* 不听也可以..."
      ],
      blooktouch2c2: () => [
         ">{#p/napstablook}* 音响里的...\n* ...你不喜欢听吗...",
         ">* 或许...\n* 我可以给你听一首\n  我还在做的歌曲...",
         ">* 跟我平常的风格很不一样...",
         ">* 你想听听吗？",
         choicer.create("* （你要怎么回答？）", "是", "否")
      ],
      blooktouch2c2x: () => [
         ">{#p/napstablook}* want to hear my new song?",
         choicer.create("* （你要怎么回答？）", "是", "否")
      ],
      blooktouch2c3a: [">{#p/napstablook}* oh...\n* well, let me know if you change your mind..."],
      blooktouch2c3b: [">{#p/napstablook}* 好...\n* 让我播放一下..."],
      blooktouch2c4: () => [
         ">{#p/napstablook}* 所以... 你感觉怎么样",
         choicer.create("* （你要怎么回答？）", "好听", "不好听")
      ],
      blooktouch2c5a: [
         ">{#p/napstablook}* 听起来... 还不错？",
         ">* 哦-\n* 嗯... 谢谢你...",
         ">* 等...\n* 等我做完之后我会告诉你的！"
      ],
      blooktouch2c5b: [">{#p/napstablook}* 哦.........\n* 你应该是对的........."],
      blooktouch2d1: [">{#p/napstablook}* sorry...\n* that's all the music i have for now..."],
      blooktouch2d2: [">{#p/napstablook}* sorry...\n* i'll try to make something better next time..."],
      blookyard1: pager.create(
         0,
         () =>
            SAVE.storage.inventory.contents.includes('tvm_mewmew') // NO-TRANSLATE

               ? [
                  ">{#p/napstablook}* you can keep your mew mew doll",
                  ">{#p/napstablook}* thanks for...\n* not being helpful, i guess"
               ]
               : 65 <= SAVE.data.n.plot
                  ? SAVE.data.b.a_state_hapstablook
                     ? 68 <= SAVE.data.n.plot
                        ? [
                           ">{#p/napstablook}* hey, mettaton came by a little while ago.",
                           ">* we talked for a bit about what we've been up to...",
                           ">* about the family...",
                           ">* well, i don't think i've ever been this happy before.",
                           ">* what you did for us back there... it means a lot."
                        ]
                        : [
                           ">{#p/napstablook}* hey... sorry things didn't work out the way we hoped...",
                           ">* it was nice to have you there, though......"
                        ]
                     : [
                        ">{#p/napstablook}* with every day that goes by, i feel a little farther away from happiness......"
                     ]
                  : 63 <= SAVE.data.n.plot && SAVE.data.b.a_state_hapstablook
                     ? [">* oh...\n* hey......", ">* i just came back here to keep an eye on the snails......"]
                     : 60 <= SAVE.data.n.plot
                        ? [
                           ">{#p/napstablook}* being a contestant on one of mettaton's shows was a dream come true...",
                           ">* i wonder if i'll ever get to do it again"
                        ]
                        : 49 <= SAVE.data.n.plot
                           ? [
                              ">{#p/napstablook}* 天，你真的跑来跑去的",
                              ">* 我是说...",
                              ">* 其实我也是...",
                              ">* 但是，我是没有实体的，\n  所以对我来说不算\n  那么令人印象深刻"
                           ]
                           : [
                              ">{#p/napstablook}* 欢迎来到幽灵家族的\n  蜗牛农场...",
                              ">* ...是的。\n* 我是这里唯一的员工。",
                              ...(world.killed0
                                 ? [
                                    ">* hey, that's weird...",
                                    ">* my snails disappeared...",
                                    ">* maybe they were picked up by that guy with a beard..."
                                 ]
                                 : [
                                    ">* 这个地方原先生意\n  很红火的...",
                                    ">* 但有一天我们的主顾\n  突然不来了...",
                                    ">* 现在只有一个毛茸茸的家伙\n  会偶尔出现..."
                                 ])
                           ],
         () =>
            SAVE.storage.inventory.contents.includes('tvm_mewmew') // NO-TRANSLATE

               ? [">{#p/napstablook}* ............"]
               : 65 <= SAVE.data.n.plot
                  ? SAVE.data.b.a_state_hapstablook
                     ? 68 <= SAVE.data.n.plot
                        ? [">{#p/napstablook}* hopefully next time you won't have to risk your life."]
                        : [">{#p/napstablook}* it is what it is..."]
                     : [">{#p/napstablook}* it is what it is..."]
                  : 63 <= SAVE.data.n.plot && SAVE.data.b.a_state_hapstablook
                     ? [">{#p/napstablook}* don't worry, they're alright...", ">* at least, i hope so......"]
                     : 60 <= SAVE.data.n.plot
                        ? [">{#p/napstablook}* hopefully next time he's a little nicer to the contestants........."]
                        : 49 <= SAVE.data.n.plot
                           ? [
                              ">{#p/napstablook}* 哦对了，我早些时候\n  看到你在达人秀上了...",
                              ...(SAVE.data.n.state_aerialis_talentfails === 0
                                 ? [
                                    ">{#p/napstablook}* 真的太精彩了...\n  你一次都没搞砸",
                                    ">* 我觉得你应该是\n  开天辟地第一个......"
                                 ]
                                 : SAVE.data.n.state_aerialis_talentfails < 15
                                    ? [
                                       ">{#p/napstablook}* 即使你的表现不算完美，\n  你也做得很好",
                                       ">* 镁塔顿的大多数参赛者\n  甚至都没坚持到一半...",
                                       ">* 包括我......"
                                    ]
                                    : [
                                       ">{#p/napstablook}* 即使你的表现不是最好的，\n  我也能看出你已经尽力了",
                                       ">* 更何况，你坚持到了最后...",
                                       ">* 不像我......"
                                    ])
                           ]
                           : world.killed0
                              ? [
                                 ">{#p/napstablook}* oh hey...\n* that rhymed, didn't it...",
                                 ">* i guess i could make a song about this... or not..."
                              ]
                              : [
                                 ">{#p/napstablook}* a friend of mine recently told me it was the king...",
                                 ">* but that can't be true\n* he wouldn't even know me..."
                              ],
         () =>
            SAVE.storage.inventory.contents.includes('tvm_mewmew') // NO-TRANSLATE

               ? [">{#p/napstablook}* ............"]
               : 65 <= SAVE.data.n.plot
                  ? SAVE.data.b.a_state_hapstablook && 68 <= SAVE.data.n.plot
                     ? [">{#p/napstablook}* i wish i had more to say..."]
                     : [">{#p/napstablook}* it is what it is..."]
                  : 60 <= SAVE.data.n.plot
                     ? [">{#p/napstablook}* ........."]
                     : 49 <= SAVE.data.n.plot
                        ? SAVE.data.n.state_aerialis_talentfails === 0
                           ? [">{#p/napstablook}* congratulations, i guess"]
                           : [">{#p/napstablook}* ......"]
                        : [">{#p/napstablook}* i wish i had more to say..."]
      ),
      boots1: () => [
         ">{#p/human}* （你捡到了一双悬浮靴。）",
         choicer.create("* （穿上悬浮靴吗？）", "是", "否")
      ],
      boots2: [">{#p/human}* （你带的东西太多，装不下它了。）"],
      bruh: [">{*}{#p/undyne}* 等会见。{^20}{%}"],
      candy1: () =>
         postSIGMA()
            ? [">{#p/basic}* It's out of service."]
            : SAVE.data.b.svr
               ? [
                  ">{#p/human}* (You approach the vending machine.)",
                  choicer.create("* （你想合成什么呢？）", "甘草糖", "Chisps", "口粮", "放弃")
               ]
               : [
                  ">{#p/basic}* 要用这台机器合成什么呢？",
                  choicer.create("* （你想合成什么呢？）", "甘草糖", "Chisps", "口粮", "放弃")
               ],
      candy2: [">{#p/human}* （你买了$(x)。）"],
      candy3: () => [choicer.create(" * （花$(y)G来买$(x)吗？）", "是", "否")],
      candy4: [">{#p/human}* （你的钱不够。）"],
      candy5: [">{#p/human}* （你决定先不买。）"],
      candy6: [">{#p/human}* （你带的东西太多了。）"],
      candy7: [">{#p/human}* （你打算什么也不合成。）"],
      deathReaction: {
         f_bird: [">{#p/basic}* This small bird no longer wants to carry you across the gap."],

         f_blooky: [
            ">{#p/basic}{#npc/a}* Did you hear about Undyne?",
            ">{#p/basic}{#npc/a}* Oh, not at all!",
            ">{#p/basic}{#npc/a}* I heard she's doing well.",
            ">{#p/basic}{#npc/a}* Sounds good to me!",
            ">{#p/basic}{#npc/a}* Undyne will never die.",
            ">{#p/basic}{#npc/a}* Indeed not!"
         ],
         f_dummy: [
            ">{#p/basic}{#npc/a}* Fatal energy signature detected.",
            ">* Name... Undyne.",
            ">* Relationship status... \"BESTIES!!!\"",
            ">* Last interaction... asked about humans.",
            ">* Time to compensate for loss...",
            ">* Indeterminate."
         ],
         f_hub: [
            ">{#p/basic}{#npc/a}* Wh...\n* What've you done!?",
            ">* Ole' Gerson's not gonna be a happy camper after that..."
         ],
         f_snail: () => [
            ">{#p/basic}* ...",
            SAVE.data.b.f_state_thundersnail_win
               ? ">* I'll make sure you NEVER win another game of electrosnail."
               : ">* I'll make sure you NEVER win a game of electrosnail."
         ],
         f_undyne: [
            ">{#p/basic}* No.\n* No!\n* NO!!!",
            ">* What. Have. You. DONE???",
            ">* She was...",
            ">* She was my FAVORITE bully!\n* How dare you take her away from me like that!?"
         ]
      },
      dummy1x: () =>
         SAVE.data.n.state_wastelands_dummy === 4
            ? [
               ">{#p/basic}* Gah!\n* I just KNEW you were going to do that!!",
               ">* What an IMBECILE!!!\n* You just hugged someone with haphephobia!!!!",
               ">* Guooohh, you're gonna PAY."
            ]
            : [
               ">{#p/basic}* Gah!\n* Why would you EVER do that!?",
               ">* Don't you know who I am!?!?\n* You just hugged someone with haphephobia!!!!",
               ">* Guooohh, you're gonna PAY."
            ],
      dummy1a: () =>
         SAVE.data.n.state_wastelands_dummy === 2
            ? [">{#p/basic}* 呵。\n* 我就知道，你这懦夫\n  看到我指定得逃。", ">* 是不是啊，笨蛋？"]
            : [">{#p/basic}* 放肆！\n* 闯进我的地盘，\n  还把我当空气？", ">* 真是蠢到极点！"],
      dummy1b: () =>
         SAVE.data.n.state_wastelands_dummy === 1
            ? [">{#p/basic}* 看到我，吓破胆了？", ">* 你也就这点本事。"]
            : [">{#p/basic}* 放肆！\n* 闯进我的地盘，\n  还跟我大眼瞪小眼？", ">* 真是蠢到极点！"],
      dummy1c: () =>
         SAVE.data.n.state_wastelands_dummy === 1
            ? [">{#p/basic}* 我就知道，\n  不揍我两下你心都痒痒。", ">* 迂腐。\n* 迂腐！\n* 迂腐！！！"]
            : [
               ">{#p/basic}* 哎呀，看来你来这\n  可不只是想聊聊天。",
               ">* 不过，你那点小把戏\n  在我这屁用没有！\n* 看我不揍死你！"
            ],
      dummy2: () => [
         ">{#p/basic}* 那群饭桶没杀了你，\n  因为他们少一样看家本领-\n  没！有！实！体！",
         ">* 没错，人类！\n* 有了这个，我就能\n  所向披靡，天下无敌！",
         ">* 我是一只住在人偶里的幽灵！",
         ">* 我的表亲以前也住在一个人偶里，\n  直到...！",
         ...(SAVE.data.n.state_wastelands_toriel === 0
            ? [
               ">* 直到...！",
               ">* 直到...",
               ">{#x1}* ...呃，其实它是自己离开的...",
               ">* 肯定是那位善良的女士\n  在外域给它找到了新家，\n  贴心照顾着它。",
               ">* 我的表亲说，\n  有个人类让那位女士感到幸福。",
               ">* 那个人类就是你，对吧？",
               ">* ...该死。\n* 你走吧，我不打你了..."
            ]
            : [
               ">* 直到你出现为止！！！",
               ...(16 <= SAVE.data.n.kills_wastelands
                  ? [
                     ">* 你的所作所为\n  不光害它离开了自己的家...",
                     ">* 还把它的邻居全吓跑了！",
                     ">* 可恶。\n* 可恶！\n* 可恶！！！",
                     ">{#x1}* 你个败类，人渣，废物！\n* 我快要气死了啊啊啊！！！",
                     ">* 呀啊啊啊啊啊啊！！！\n* 我的人偶能量快要爆发了！！！"
                  ]
                  : SAVE.data.n.state_wastelands_dummy === 3
                     ? [
                        ">* YOU... you...",
                        ">* Shucks!\n* You were really boring!",
                        ">* They got annoyed and flew away like any self-respecting spectre.",
                        ">* Well then.\n* Well then!\n* WELL THEN!",
                        ">* I guess I'll just have to entertain MYSELF!",
                        ">* Buckle up, sleepyhead!\n* It's time to put on a show!"
                     ]
                     : SAVE.data.n.state_wastelands_dummy === 4
                        ? [
                           ">* YOU... you...",
                           ">* 该死，喜欢当老好人是吧？",
                           ">* 自己当老好人不要紧，\n  还让我表亲染上抱瘾，\n  总想拥抱，戒不掉了！！！",
                           ">* 它丢掉了原本的身体，\n  每次发作时，就找我发泄自己的欲望。",
                           ">* 它明知道我患有接触恐惧症，\n  还疯了似的骚扰我。\n  我快被它烦死了！！！",
                           ">* 人类，我要让你付出代价！"
                        ]
                        : [
                           ...(SAVE.data.n.state_wastelands_dummy === 0
                              ? [
                                 ">* 当你和它聊天的时候，\n  它本来希望能好好聊聊...",
                                 ">* 但看看你都说了些什么...！",
                                 ">* 真是可怕。\n* 叫人震惊！\n* 难以置信！",
                                 ">* 你把他从人偶里\n  吓了出来！",
                                 ">* 呃啊啊..."
                              ]
                              : SAVE.data.n.state_wastelands_dummy === 1
                                 ? [
                                    ">* Us ghosts spend our whole lives looking for a proper vessel.",
                                    ">* Slowly, slowly, we grow closer to our new bodies, until one day...",
                                    ">* We too maybe become corporeal beings, able to laugh, love, and dance like any other.",
                                    ">* But YOU!!!\n* My cousin's future...\n* You snatched it all away!",
                                    ">* Uraaahhhhh!!!"
                                 ]
                                 : SAVE.data.n.state_wastelands_dummy === 2
                                    ? [
                                       ">* They were a shy sort.\n* Living a lonely life in the Outlands...",
                                       ">* They saw you and HOPED you might TALK to them.",
                                       ">* But NO!\n* You ran away!",
                                       ">* Pathetic.\n* Pathetic!\n* PATHETIC!!!",
                                       ">* Nobody breaks my cousin's HEART and GETS AWAY with it!"
                                    ]
                                    : SAVE.data.n.state_wastelands_dummy === 5
                                       ? [
                                          ">* When you first showed up, they were so excited to talk...",
                                          ">* And then you went and SLAPPED them in the FACE!",
                                          ">* Not just once.\n* Not just twice!",
                                          ">* But THREE TIMES!!",
                                          ">* How AWFUL do you have to BE!?"
                                       ]
                                       : SAVE.data.n.state_wastelands_dummy === 6
                                          ? [
                                             ">* My cousin is a nice fellow.",
                                             ">* But that doesn't mean you can just GO AROUND and FLIRT with them!",
                                             ">* Your stupid advances weirded them out SO MUCH...",
                                             ">* ... they just couldn't take it anymore!!",
                                             ">* Disgusting.\n* Disgusting!\n* DISGUSTING!!!"
                                          ]
                                          : []),
                           ">* 你会为此而死的，人类！！！！"
                        ])
            ])
      ],
      dummy3: [
         ">{#p/basic}* ...？",
         ">* 这...\n* 这种感觉...？",
         ">{#x3}* 明白了。\n* 明白了！\n* 明白了！！！",
         ">* 人类。\n* 刚刚我那彻底失控的情绪...",
         ">* 让我终于可以完美地\n  和我的身体融为一体啦！",
         ">* 我是有血有肉的存在了！\n* 我... 我不是在做梦吧？\n* 这是真的吗？？？",
         ">* 作为报答，\n  我不会再攻击你啦。",
         ">* 怎么样？"
      ],
      dummy4: (mover: boolean) => [
         ...(mover
            ? [
               SAVE.data.n.state_foundry_maddummy === 1
                  ? ">{#p/napstablook}* hey...\n* i thought i heard someone being attacked..."
                  : ">{#p/napstablook}* hey...\n* i thought i heard someone yelling...",
               ">{#p/napstablook}* but i guess you're alright",
               ">* i was actually about to head home..."
            ]
            : [">{#p/napstablook}* 嗯...\n* 我现在要回家了..."]),
         ...(world.sad_ghost || world.population === 0
            ? [
               ">* just warning you...",
               ">* so you don't accidentally follow me to my house...",
               ">* you probably wouldn't like that..."
            ]
            : [
               ">* 所以... 嗯...\n* 如果你想“附”约的话...\n  随时都可以...",
               ">* 但别有压力...",
               ">* 如果你忙，我能理解...",
               ">* 没关系的...",
               ">* 不用担心...",
               ">* 只是想说我先邀请一下..."
            ])
      ],
      dummypunch1: () =>
         SAVE.data.b.oops
            ? [
               ">{#p/basic}* 一个训练人偶。\n* 教训教训它吗？",
               choicer.create("* （动手吗？）", "是", "否")
            ]
            : [">{#p/basic}* It's a training dummy.\n* Hug it?", choicer.create("* (Hug the dummy?)", "是", "否")],
      dummypunch2a: [">{#p/human}* （你打算不这么做。）"],
      dummypunch2b: () =>
         world.genocide || world.meanie
            ? [">{#p/human}* （你使劲揍了人偶一拳。）"]
            : SAVE.data.n.exp > 0
               ? [">{#p/human}* （你给人偶来了一拳。）"]
               : SAVE.data.b.oops
                  ? [">{#p/human}* （...你只是戳了戳人偶。）"]
                  : [">{#p/human}* (You hugged the dummy.)"],
      dummypunch3: () =>
         SAVE.data.b.f_state_dummypunch
            ? [">{#p/basic}* 人偶被你教训了一顿。"]
            : [">{#p/basic}* It's a happy hugging dummy."],
      epicreaction: () =>
         [
            [">{#p/kidd}{#f/7}* 那是什么！？"],
            [">{#p/kidd}{#f/7}* 呃啊！！"],
            [">{#p/kidd}{#f/7}* 别再来了啊！"],
            [">{#p/kidd}{#f/7}* 那东西到底有多少啊！"],
            [">{#p/kidd}{#f/7}* 认真的吗！？"],
            [">{#p/kidd}{#f/7}* 天啊！！"],
            [">{#p/kidd}{#f/4}* 我们得想办法\n  从这里出去..."],
            [">{#p/kidd}{#f/4}* ..."]
         ][Math.min(SAVE.data.n.state_foundry_kiddreaction++, 7)],
      fallenfish: [">{#p/basic}* 电流通过了她的全身。"],
      fallenfish2: [">{#p/basic}* She's fallen down."],
      fallenfish3: [">{#p/basic}* ... but nothing happened."],
      finalfish1: [">{#p/undyne}{#f/19}* 哈啊..."],
      finalfish2: [">{#p/undyne}{#f/19}* 该死的...\n* 干扰..."],
      finalpre: () => [choicer.create("* (Continue to Aerialis?)", "是", "否")],
      genotext: {
         asgoreFinal1: () =>
            SAVE.flag.n.genocide_milestone < 5
               ? SAVE.flag.n.ga_asrielStutter < 1
                  ? [
                     ">{#p/asgore}{#f/15}* 你到底还是选择\n  与他为伍啊...",
                     ">{#p/asriel2}{#f/7}* 艾斯戈尔，谁都不能分割\n  我和$(name)之间的纽带。\n* 你不是不知道。",
                     ">{#p/asgore}{#f/15}* $(name)... 当-当然了。\n* 那... 你-你们带着那个孩子\n  在干什么呢？",
                     ">{#p/asriel2}{#f/8}* 真是的，关你什么事。",
                     ">{#p/asgore}{#f/15}* （呃... 我早该料到的...）",
                     ">{#p/asriel2}{#f/6}* 不过呢，总的来说...\n* 我们只是在这旅行。",
                     ">{#f/6}* 就我们三个。\n* 哎呀，我们没邀请你呢，\n  意不意外。",
                     ">{#p/asgore}{#f/15}* 你看我-我像是\n  想受你邀请的样子吗？？",
                     ">{#p/asriel2}{#f/6}* 你说呢？",
                     ">{#p/asgore}{#f/15}* 呃，我只是想看看\n  你怎么样了。\n* 没别的。",
                     ">{#p/asriel2}{#f/10}{#x1}* ...\n* 不对劲。",
                     ">{#p/asriel2}{#f/10}* 艾菲斯博士？\n* ...是你吧？"
                  ]
                  : [
                     ">{#p/asgore}{#f/15}* 你到底还是选择\n  与他为伍啊...",
                     ">{#p/asriel2}{#f/8}* 艾菲斯，没人能分割\n  我和$(name)间的纽带。",
                     ">{#p/asriel2}{#f/7}* 不过你对这事完全没数吧。"
                  ]
               : [
                  ">{#p/asgore}{#f/15}* 你到底还是选择\n  与他为伍啊...",
                  ">{#p/asriel2}{#f/8}* 艾菲斯，没人能分割\n  我和$(name)间的纽带。",
                  ...(SAVE.flag.n.ga_asrielQuestion < 1
                     ? [">{#p/asriel2}{#f/7}* Like I don't already know you're planning to kill us."]
                     : [">{#p/asriel2}{#f/7}* 真以为你能阻止我们？"])
               ],
         asgoreFinal2: () =>
            SAVE.flag.n.genocide_milestone < 5
               ? [
                  ">{#p/alphys}{#g/alphysThatSucks}* ...骗不过你，嗯？",
                  ">{#p/asriel2}{#f/3}* 的确。",
                  ">{#p/alphys}{#g/alphysGarbo}* ...\n* 倒还算说了句实话。",
                  ">{#p/asriel2}{#f/13}* 看着好友死去，\n  你肯定急疯了...",
                  ">{#p/asriel2}{#f/16}* 没法和你感同身受呢。",
                  ">{#p/alphys}{#g/alphysIDK}* ...",
                  ">{#p/alphys}{#g/alphysNeutralSweat}* ...",
                  ">{#p/alphys}{#g/alphysNeutralSweat}* 这主意糟透了。",
                  ">{|}{#p/asriel2}{#f/8}* 你不会又想- {%}"
               ]
               : [
                  ">{#p/alphys}{#g/alphysOhGodNo}* 你说什么？",
                  ">* 我...\n* 面对你，我-我哪来的胜算！",
                  ...(SAVE.flag.n.ga_asrielQuestion < 1
                     ? [">{#p/asriel2}{#f/10}* ...当真？", ">{#p/alphys}{#g/alphysIDK}* ..."]
                     : [">{#p/asriel2}{#f/7}* ..."]),
                  ">{#p/alphys}{#g/alphysNeutralSweat}* ...",
                  ">{#p/alphys}{#g/alphysNeutralSweat}* 这主意糟透了。"
               ],
         asgoreFinal3: () =>
            SAVE.flag.n.genocide_milestone < 5
               ? [">{#p/asriel2}{#f/7}* 真是个胆小鬼。"]
               : [
                  [">{#p/asriel2}{#f/15}* 呵... 看来我话说太早了。"],
                  [">{#p/asriel2}{#f/15}* 行吧。"]
               ][Math.min(SAVE.flag.n.ga_asrielQuestion++, 1)],
         asgoreMK1: [
            ">{#p/kidd}{#f/7}* 哇，那是...\n  我在做梦吧...",
            ">{#f/1}* 真的是国王欸！",
            ">* 艾斯戈尔国王！\n* 您来这做啥呢！？",
            ">{#p/asgore}{#f/3}* ...",
            ">{#f/3}* 这事... 说来话长啊。",
            ">{#p/kidd}{#f/4}* 噢...",
            ">{#f/1}* 没事，您跟我说说吧！",
            ">{#p/asgore}{#f/7}* 呃...\n* 对不起，我不能说。",
            ">{#f/6}* 不过，我有个事想问你。",
            ">{#p/kidd}{#f/3}* ...？",
            ">{#p/asgore}{#f/7}* 这个人类是你的好朋友吗？",
            ">{#p/kidd}{#f/1}* 嗯... 对呀！",
            ">{#f/4}* 可是，之前跟我们在一块的\n  另一个小孩...",
            ">{#f/8}* ...我很害怕他。",
            ">{#p/asgore}{#f/1}* 看来就是他了。\n* 都是因为他...",
            ">{#p/kidd}{#f/4}* 怎么了？",
            ">{#p/asgore}{#f/6}* 呃... 没事。\n* 我不该拿这事打搅你的。",
            ">{#f/3}* 而你，人类...",
            ">{#f/2}* 你和离开的那位“朋友”\n  闯了不少祸。",
            ">{#f/1}* 许许多多怪物都...\n  哎，你知道我要说什么。",
            ">{#p/kidd}{#f/4}* ...到底怎么了？",
            ">{#p/asgore}{#f/7}* 没事，没事。\n* 我只是觉得...",
            ">{#f/5}* 相比... 我刚说的，\n  你还可以做点更有意义的事。",
            ">{#f/5}* 说不上来为什么，不过...\n  也许帕派瑞斯没说错。",
            ">{#f/6}* 既然你的“朋友”\n  已经抛下了你...",
            ">* 那你就有机会重新来过了。",
            ">{#p/kidd}{#f/1}* 我会帮忙的！",
            ">{#p/asgore}{#f/6}* 哈哈，小家伙，\n  说不定你真能帮上忙。\n* 真说不定呢。",
            ">{#f/5}* 我们上次见面之后，\n  我就努力在想... \n  这一切究竟是怎么回事。",
            ">{#f/2}* 真的不想承认，可...\n* 他实在陷得太深了。",
            ">{#f/2}* 我的儿子...\n  再也回不来了。",
            ">{#p/kidd}{#f/4}* 你们聊吧，我先不插嘴了...",
            ">{#p/asgore}{#f/1}* 没关系，没关系。\n  我快说完了。",
            ">{#f/1}* 人类，我刚说的话\n  往心里去吧。",
            ">{#f/1}* 这我唯一的请求了。"
         ],
         asgoreMK2: [
            ">{#p/kidd}{#f/2}* 哇... 他好厉害！",
            ">{#f/1}* 之前听别人说过国王的演讲。\n  但亲眼见到，真的酷毙了！",
            ">{#f/3}* 他要是我爹该多好啊..."
         ],
         asriel32: [
            ">{#p/asgore}{#f/15}* ...",
            ">{#f/16}* 看来我的话\n  你一个字都没听进去。",
            ">{#p/asriel2}{#f/3}* 那肯定的。",
            ">{#p/asgore}{#f/1}* ...",
            ">{#f/16}* 你知道吗...\n  有件事一直困扰着我。",
            ">{#f/16}* 现在你不认我这个爹，\n  可你就是我的儿子啊...",
            ">{#f/15}* 尽管那是很久以前的事了。",
            ">{#p/asriel2}{#f/10}* 你到底想说啥？",
            ">{#p/asgore}{#f/12}* ...",
            ">{#p/asgore}{#f/12}* 唉... 究竟怎么了？",
            ">{#f/12}* 为什么... 我面前的这个你... \n  看着这么陌生？",
            ">{#p/asriel2}{#f/6}* 你真想知道吗？",
            ">{#p/asgore}{#f/7}* ...",
            ">{#p/asriel2}{#f/7}* 说实话。",
            ">{#p/asgore}{#f/1}* ...\n* 呃，不...\n* 我不太确定...",
            ">{#p/asriel2}{#f/8}* 切。\n* 这怂样，才像我认识的\n  艾斯戈尔嘛。",
            ">{#f/6}* 只会装作啥~事儿\n  都没有的样子，\n* 我说得没错吧？",
            ">{#f/7}* 老东西，你猜怎么着？\n* 现在想亡羊补牢，已经晚喽。",
            ">{#f/8}* （要不是你拿这该死的\n  全息影像糊弄我，现在就可以\n  好好“开导开导”你。）",
            ">{#p/asgore}{#f/12}* ...",
            ">{#p/asriel2}{#f/8}* ...",
            ">{#p/asgore}{#f/15}* 你知道吗？我常常在想...\n  自己为何沦落到如此地步。",
            ">{#f/16}* 家园被毁，爱子离去，\n  只能被束缚在这片土地之上...",
            ">{#f/15}* 如今，前哨站危在旦夕，\n  我却只能眼睁睁地看着。",
            ">{#p/asriel2}{#f/15}* 您老这是在向我寻求\n  独到见解吗？\n* 真是可悲...",
            ">{#f/16}* 就让我给你个小小的忠告吧：\n* 下辈子，别再挑起战争了。",
            ">{#p/asgore}{#f/2}* ...",
            ">{#f/4}* 你...",
            ">{#f/2}* ...",
            ">{#f/6}* 艾斯利尔，你猜怎么着？\n* 我想通了。",
            ">{#f/7}* 你说的都对。",
            ">{#f/5}* 跟你讲理，完全是浪费时间。",
            ">{#p/asriel2}{#f/15}* ...哇。\n* 您可终于开窍了。",
            ">{#f/16}* 真令我刮目相看啊。",
            ">{#p/asgore}{#f/1}* ...",
            ">{#p/asriel2}{#f/10}* 然后呢？\n* 这位英明的国王\n  要怎么行动呢？",
            ">{#p/asgore}{#f/15}* 你认真的？",
            ">{#f/15}* ...",
            ">{#f/16}* 我不知道，艾斯利尔。"
         ],
         asriel33: [">{#p/asriel2}{#f/10}* ...他这是要发火了？"],

         asriel34: [
            ">{#p/asriel2}{#f/3}* 我去处理点事，\n  你俩先作个伴。",
            ">{#p/kidd}{#f/3}* 你一会还回来吗？\n* 还想听你讲更多\n  安黛因的轶事呢...",
            ">{#p/asriel2}{#f/4}* 说到做到。",
            ">{#f/1}* 别担心，我去去就回。",
            ">{#p/kidd}{#f/4}* 好吧..."
         ],
         asriel34x: [">{#p/asriel2}{#f/3}* 停一下。"],
         asriel35: () =>
            SAVE.flag.n.undying > 0
               ? [
                  [
                     ">{#p/asriel2}{#f/6}* Well, here we are again, $(name).",
                     ">{#f/7}* ... look, I know Undyne won't die when the kid attacks her.",
                     ">{#f/15}* From what I can see, though, it's our best way forward for now.",
                     ">{#f/16}* Let's just stick to the script, okay?"
                  ],
                  []
               ][Math.min(SAVE.flag.n.ga_asrielUndying++, 1)]
               : [
                  [
                     ">{#p/asriel2}{#f/1}* 哈喽，$(name)。",
                     ">{#f/13}* 想我了没？",
                     ">{#f/4}* 唉，对不起。\n* 刚才我有事得办，\n  又把你抛下了。",
                     ">{#f/3}* 不过，我那段时间可没闲着。",
                     ">{#f/13}* $(name)，我看到你那小伙伴\n  和你告别了...",
                     ">{#f/16}* 我想，你肯定\n  感觉老~孤单了。\n  没说错吧？"
                  ],
                  []
               ][Math.min(SAVE.flag.n.ga_asriel35++, 1)],
         asriel37: () => [
            ">{#p/asriel2}{#f/1}* 所以呢...\n  我把他请回来了！",
            ">{#f/17}* 不管我们想做啥，\n  你都会帮忙的，对吧？",
            ">{#p/kidd}{#f/9}* 嗯..."
         ],
         asriel38: () => [
            ...[
               [

                  ">{#p/asriel2}{#f/17}* 唔，不错吧？",
                  ">{#f/16}* 你要知道，\n  这小家伙可不好管。",
                  ...(SAVE.data.n.state_foundry_muffet === 1
                     ? [
                        ">{#f/15}* 他总说他想被遗忘...",
                        ">{#f/10}* 天呐，$(name)。\n* 我不在的时候，\n  你对他干了些什么啊？"
                     ]
                     : [
                        ">{#f/15}* 他一直问我你去哪了...",
                        ">{#f/10}* 天呐，$(name)。\n* 我不在的时候，\n  你俩一起干了些啥啊？"
                     ]),
                  ">{#f/3}* 呃，不用回答我。\n* 反正他回来了，\n  过去的事不重要。"
               ],
               [">{#p/asriel2}{#f/3}* Well, at least that's outta the way now."]
            ][Math.min(SAVE.flag.n.ga_asriel38++, 1)]
         ],
         asriel39: [
            ">{#p/asriel2}{#f/8}* 等等。\n* 小家伙，能帮我个忙吗？",
            ">{#p/kidd}{#f/9}* ...？",
            ">{#p/asriel2}{#f/6}* 解开这个谜题。"
         ],
         asriel40: () =>
            SAVE.flag.n.ga_asriel40++ < 1
               ? [
                  ">{#p/asriel2}{#f/10}* 完活了？\n* 天呐，这么快...",
                  ">{#f/3}* 看看呐，$(name)。\n  有些怪物总是为情感所困。",
                  ">{#f/16}* 什么希望，恐惧，同理心...\n  只能葬送他们的潜能，\n  毫无价值。",
                  ">{#f/15}* Imagine how much better they'd be if they were all like this."
               ]
               : [">{#p/asriel2}{#f/4}* Right on schedule."],
         asriel41: [">{#p/asriel2}{#f/3}* 回来吧，小家伙。"],
         asriel42: [">{#p/asriel2}{#f/4}* If we keep this up, we'll be over and done with in no time."],
         asriel43: () =>
            [
               [
                  ">{#p/asriel2}{#f/16}* $(name)，结束了...",
                  ">{#f/3}* 我们做到了。",
                  ">{#f/2}* 皇家卫队的队长...",
                  ">{#f/15}* 不会真觉得她有胜算吧？",
                  SAVE.flag.n.undying > 2
                     ? ">{#f/8}* 她的确逼我们\n  回溯了几次时间线..."
                     : SAVE.flag.n.undying > 1
                        ? ">{#f/8}* 她的确逼我们\n  回溯了一次时间线..."
                        : ">{#f/8}* 敢和我们对着干，\n  她的确很英勇...",
                  ">{#f/7}* 不过嘛，你我都清楚，\n  她最终落得个什么下场。"
               ],
               [
                  ">{#p/asriel2}{#f/3}* ...这趟胜利的滋味，\n  要是能有第一次\n  那般甘甜就好了。",
                  ">{#f/4}* 唉，好吧。"
               ],
               [">{#p/asriel2}{#f/6}* Killing Undyne is quickly becoming our hobby."],
               [">{#p/asriel2}{#f/6}* ..."]
            ][Math.min(SAVE.flag.n.ga_asriel43++, 3)],
         asriel44: [">{#p/asriel2}{#f/13}* Uh, you can take the lead, $(name)."],
         asriel45: [
            ">{#p/asriel2}{#f/13}* Well, well, well...{%40}",
            ">{#f/16}* I can't express how grateful I am for all your help.{%40}",
            ">{#f/1}* This body might not be perfect, but for what it's worth...?{%40}",
            ">{#f/2}* I won't miss being a stupid talking star.{%40}"
         ],
         asrielHug1: [">{#p/asriel2}{#f/13}* ..."],
         asrielHug2: [">{*}{#p/asriel2}{#f/13}* $(name)...{^100}{%}"],
         asrielHug3: [">{#p/asriel2}{#f/13}* 呃...\n* 谢谢你，$(name)。"],
         bombshell1: [
            ">{*}{#p/alphys}* 会说话的... 星星...？",
            ">{*}* 但那个实验...\n  不-不是失败了吗...",
            ">{*}* 莫非..."
         ],
         bombshell2: [">{*}* 不...", ">{*}{@random=1.1/1.1}* 不..."],
         bombshell3: [
            ">{*}{@random=1.1/1.1}* 托丽尔...\n* 衫斯...\n* 帕派瑞斯...",
            ">{*}{@random=1.1/1.1}* 安黛因...",
            ">{*}{@random=1.1/1.1}* 都-都怪我...",
            ">{*}{@random=1.1/1.1}{#i/4}* 啊... 天-天呐..."
         ],
         bombshell4: [">{*}{@random=1.1/1.1}{#i/5}* 是我害死了你们..."],
         kidd1: [
            ">{#p/kidd}{#f/4}* 他叫你什么来着？\n* $(name)... 是吧？",
            ">{#f/3}* 好，$(name)。\n  这话可别告诉他哦，\n  跟他在一块...",
            ">{#f/4}* 我觉得很不自在。"
         ],
         kiddFinal1: [
            ">{#p/kidd}{#f/11}* ...！",
            ">{#p/asriel2}{#f/5}* 我就知道。\n* 看到安黛因你很激动吧？",
            ">{#p/kidd}{#f/9}* ...",
            ">{|}{#f/12}* 我没有- {%}",
            ">{#p/asriel2}{#f/4}* 不用说了。\n* 没关系的。",
            ">{#p/asriel2}{#f/3}* 别忘了我们来干嘛的就好。"
         ],
         kiddFinal2: () => [
            ">{#p/kidd}{#f/9}* 安黛因...",
            ">{#p/asriel2}{#f/10}* ...？",
            ">{#f/6}* 我猜... 你还有顾虑？",
            ">{|}{#p/kidd}{#f/12}* 对不起，我- {%}",
            ">{#p/asriel2}{#f/13}* Undyne, schmundyne...\n* She's not the hero you take her for.",
            ">{#p/asriel2}{#f/4}* 不... 我是说真英雄\n  可都是些会动脑子的人。",
            SAVE.flag.n.genocide_milestone < 5
               ? SAVE.flag.n.ga_asrielKiddFinal1++ < 1
                  ? ">{#f/15}* 比如...\n* 呃，不像她的人。"
                  : ">{#f/15}* 她可算不上。"
               : ">{#f/3}* 比如艾菲斯。",
            ">{#p/kidd}{#f/12}* 她... 真的..."
         ],
         kiddFinal3: () => [
            ">{#p/kidd}{#f/10}* ...",
            ">{#f/10}* 安黛因不会死的。",
            ">* 就算让我去，她...",
            ">* She'll be fine.\n* She'll be strong...",
            ...(SAVE.flag.n.ga_asrielKiddFinal3a < 1
               ? [">{#p/asriel2}{#f/8}* （对，尽管说，\n  好让你好受点...）"]
               : []),
            ">{#p/kidd}{#f/9}* 因为...\n* 她... 比其他怪物都强...",
            ">{#f/12}* 她充满了{@fill=#ff0}决心{@fill=#fff}...",
            ...(SAVE.flag.n.ga_asrielKiddFinal3a++ < 1
               ? [">{#p/asriel2}{#f/10}* 呃... 没事吧？\n* （我的天，这小家伙\n  说什么胡话呢？）"]
               : SAVE.flag.n.undying > 0 && SAVE.flag.n.ga_asrielKiddFinal3b++ < 1
                  ? [">{#p/asriel2}{#f/8}* （他怎么知道？）"]
                  : [">{#p/asriel2}{#f/10}* ..."])
         ],
         kiddFinal4: [">{#p/asriel2}{#f/6}* 她在那。"],
         kiddFinal5: [">{#f/6}* 给我上。", ">{#f/7}* ..."],
         kiddFinal6: [">{*}{#p/asriel2}{#f/14}{@random=1.1/1.1}{@fill=#f00}* 还不快去。{%100}"],
         kiddFinal7: [
            ">{#p/kidd}{#f/12}* ...",
            ">{#p/undyne}{#f/13}* 搞什么？\n* 你来这干嘛！？",
            ">{|}{#f/13}* 还有，你眼睛怎么- {%}"
         ]
      },
      goatreaction: () =>
         [
            [">{#p/asriel2}{#f/15}* 小心点，$(name)。"],
            [">{#p/asriel2}{#f/15}* $(name)..."],
            [">{#p/asriel2}{#f/15}* 开玩笑吗？"],
            [">{#p/asriel2}{#f/15}* 我们可不想死在这，\n  $(name)..."],
            [">{#p/asriel2}{#f/16}* 我有点担心了。"],
            [">{#p/asriel2}{#f/8}* 你是眼瞎还是有什么毛病？"],
            [">{#p/asriel2}{#f/7}* 别闹了！"],
            [">{#p/asriel2}{#f/7}* ..."]
         ][Math.min(SAVE.flag.n.ga_asrielEpic++, 7)],
      hapstadoor1: () =>
         SAVE.data.b.svr ? [">{#p/human}* (But you didn't have the key.)"] : [">{#p/basic}* 锁住了。"],
      hapstadoor2: [">{#p/human}* (You use the Mystery Key.)"],
      jumpsuit1: () => [
         ">{#p/human}* （你捡到了一件飞行服。）",
         choicer.create("* （穿上飞行服吗？）", "是", "否")
      ],
      jumpsuit2: [">{#p/human}* （你带的东西太多，装不下它了。）"],
      kiddStatue: [
         ">{#p/kidd}{#f/1}* 哟，我记得这个地方！",
         ">{#f/3}* 我，呃，我妈妈带我\n  来过一次，哈哈。",
         ">{#f/1}* 如果我们一人站在一边的\n  开关上，灯就会亮起来。\n* 很厉害吧！？"
      ],
      kitchencall: () => [
         ">{#p/event}* 铃铃，铃铃...",
         ">{#p/papyrus}人类！\n我在想。",
         ...(SAVE.data.n.plot_date < 1
            ? [
               SAVE.data.b.flirt_papyrus
                  ? ">WE SHOULD TOTALLY DATE SOMETIME!"
                  : ">WE SHOULD TOTALLY HANG OUT SOMETIME!",
               ">{#f/5}AND BESIDES... I HAVEN'T SEEN YOU IN A WHILE.",
               ">{#f/0}IT'LL BE GOOD TO CATCH UP!",
               ">{#f/0}WELL, MEET ME AT MY HOUSE WHEN YOU'RE READY."
            ]
            : [
               ">所以，你知道我跟你\n当初是怎么相处的吗？",
               ">{#f/5}我觉得... 安黛因\n也应该跟你\n好好相处一下。",
               ">{#f/4}而且，我敢打赌你们\n肯定能成为\n很好的朋友...",
               SAVE.data.b.flirt_papyrus ? ">{#f/6}...朋友而已！" : ">{#f/0}JUST LIKE WE WERE!",
               ">{#f/0}那，等你准备好\n就来安黛因的家门口\n见我吧。"
            ]),
         ">{#f/9}肯定会经历一段\n非常棒的时光的！",
         ">{#s/equip}{#p/event}* 滴..."
      ],
      madfish1: () => [
         ...(SAVE.flag.n.ga_asrielUndyneX++ < 1
            ? [">{#p/asriel2}{#f/8}* 接下来，又到了\n  听高谈阔论的时间了..."]
            : []),
         ">{#p/undyne}* 站住。",
         ">{#x1}* 真以为自己能\n  大摇大摆地滥杀无辜，\n  没人管得了你们？",
         ">* 我告诉你，两个小混蛋：",
         ">* 你们的死期到了！",
         ">{#x2}* 以为自己勉勉强强\n  过了Doge这关就了不起了？\n  听好了...",
         ">{#x3}* 只要剩下的特战队成员\n  逮到你们，就等着受苦吧。"
      ],
      madfish2: () =>
         SAVE.flag.n.genocide_milestone < 5
            ? [
               ">* 无话可说？\n* 呵。",
               ">{#x4}* 眼下，我可没闲工夫陪你们玩。\n  我得去帮艾菲斯疏散民众。",
               ">{#x5}* 呋呼呼...\n* 在临死之前好好挣扎吧。\n* 你活不长的。"
            ]
            : [
               ">* 无话可说？\n* 呵。",
               ">{#x4}{|}* 眼下，我可没\n  闲工夫陪你们玩。\n  我得去帮Alphys- {%}",
               ">{#x5}{#p/asriel2}{#f/8}* 跟你说，\n  艾菲斯可比你强多了。",
               ">{#f/2}* 我早就知道\n  这条时间线的后续发展了。",
               ">{#f/1}* 和她比起来，\n  你的攻击屁都不是。",
               ">{#p/undyne}* 真的吗？",
               ">* ...好吧。\n* 即便如此，你还是得先过我这一关。",
               ">{#p/asriel2}{#f/6}* 哦，相信我。\n* 我们肯定能打败你。",
               ">{#p/undyne}* 走着瞧。"
            ],
      madfish3: () =>
         SAVE.flag.n.genocide_milestone < 5
            ? SAVE.flag.n.ga_asrielMadfish++ < 1
               ? [">{#p/asriel2}{#f/8}* 她爱咋咋地。"]
               : [">{#p/asriel2}{#f/8}* ..."]
            : [">{#p/asriel2}{#f/8}* 切。"],
      muffet1: () =>
         badSpider()
            ? [">{#p/basic}* 啊哈哈哈哈...", ">* Tell her she should increase my payout next time."]
            : SAVE.data.b.flirt_muffet
               ? [">{#p/basic}* 啊哈哈哈哈...", ">* Let's just pretend this never happened, shall we, dearies?"]
               : [">{#p/basic}* 啊哈哈哈哈...", ">* 刚才很有趣哦！\n* 下次再见，亲！"],
      muffet2: () =>
         badSpider()
            ? [">{#p/kidd}{#f/4}* Yo... that was weird..."]
            : SAVE.data.b.flirt_muffet
               ? [">{#p/kidd}{#f/4}* Yo... at least it's over now?"]
               : [">{#p/kidd}{#f/4}* 哟...\n  一点都不好玩。"],
      muffetGeno1: () =>
         SAVE.data.n.state_foundry_kidddeath < 1
            ? [">{#p/kidd}{#f/4}* 哟...\n* 刚发生什么了？", ">* 她是... {%}"]
            : [
               ">{#p/kidd}{#f/4}* 哟... 她又...",
               ">* 为什么怪物都这么消失呢？{%}"
            ],
      muffetGeno1x: [">{#p/basic}* 她死了。"],
      muffetGeno2: [
         ">{#p/kidd}{#f/7}* 不-不...\n* 我不是故意...",
         ">{#f/7}* 她-她没... 不会的...\n* 她...",
         ">{#f/4}* 不，这...\n* 这不可-可能...",
         ">{#f/4}* 她只是...",
         ">{#f/8}* 只是..."
      ],
      muffetGeno3: [">{#f/8}* ...", ">{#f/8}* ...我干了什么..."],
      mushroomdance1: [">{#p/basic}* 蘑菇舞\n* 蘑菇舞\n* 管它什么意义"],
      mushroomdance2: () =>
         SAVE.data.n.plot === 72
            ? SAVE.data.b.f_state_mushroomdanceEpilogue
               ? [">{#p/basic}* It means the future is very uncertain indeed."]
               : SAVE.data.b.f_state_mushroomdanceGeno
                  ? [
                     ">{#p/basic}* It means I'm going free.\n* They're going to transplant me to the new homeworld.",
                     ">* But why should you care?\n* Unless...",
                     ">* ... unless you have absolved yourself of sin?"
                  ]
                  : [
                     ">{#p/basic}* It means I'm going free.\n* They're going to transplant me to the new homeworld.",
                     ">{#p/basic}* Goodbye, old outpost, for you have been my abode..."
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
                     ">{#p/basic}* 要是我能看到远处的星系，\n  就好了。",
                     ">* 但哪怕力场被摧毁了，\n  我要怎么离开呢...？"
                  ]
                  : [
                     ">{#p/basic}* 它代表了我被菌丝困在这里，\n  所产生的内心的痛楚。",
                     ">* 我奋力地挣扎着。\n* 我竭力地想挣脱。\n* 可惜啊，无济于事。"
                  ],
      musicbox: [
         ">{#p/asriel1}{#i/4}听上去像是从这附近\n传来的声音...",
         ">啊！你的飞船坠毁了，\n是吗...",
         ">你还好吗？",
         ">来，我扶你起来...",
         ">...",
         ">$(name)，是吗？",
         ">这名字真好听。",
         ">{*}{#x1}{#p/asriel3}{#i/18}My name is   {%}"
      ],
      napcomputer1: () =>
         postSIGMA()
            ? [">{#p/basic}* It's out of service."]
            : [
               SAVE.data.b.svr
                  ? ">{#p/human}* (You move towards the computer...)"
                  : ">{#p/basic}* 电脑上打开了一个音乐分享软件。",
               choicer.create("* （看一眼吗？）", "是", "否")
            ],
      napcomputer2: [">{#p/human}* （你不想看。）"],
      napcomputer3: {
         a: () => [
            "镁塔静听 - 日光涟漪.kwac",
            "镁塔静听 - 星河渡歌.kwac",
            SAVE.data.n.plot === 72 ? "缘聚缘散.kwac" : "恶狼.kwac",
            "喵喵航天行 - 主题曲.kwac",
            !world.genocide && SAVE.data.n.state_starton_papyrus === 1 ? "帕派瑞斯求包养.kwac" : "滑腔动调.kwac",
            "群星之歌.kwac"
         ],
         b: () => [
            "酷炫骷髅95",
            "酷炫骷髅95",
            SAVE.data.n.plot === 72 ? "_Sp4ceAdv3ntur3r_" : "_摋掱亾耦_",
            "艾菲斯",
            "懒骨.",
            "（游客）"
         ]
      },
      napcomputer4: {
         a: () => ["鬼怪舞曲.kwac", "鬼怪混音集.kwac"],
         b: () => ["纳普斯特22", "纳普斯特22"]
      },
      noTem: [">{#p/tem}* oh no, it's a... FISHES!!!"],
      noShroom: [">{#p/basic}* Watch out\n* Watch out\n* There's a fish running about"],
      noTortoise: () =>
         world.population === 0 ? [">{#p/basic}* 哇哈哈..."] : [">{#p/basic}* Run while ya still can, kid!"],
      npc86x: () =>
         SAVE.data.b.svr
            ? [">{#p/human}* (The robot appears to be asleep.)"]
            : [">{#p/basic}* It's in sleep mode."],
      npc86z: () =>
         [
            [
               ">{#p/basic}{#npc/a}* Familiar energy signature detected in combat.",
               ">{#p/basic}* Recommended action... run."
            ],
            [
               ">{#p/basic}{#npc/a}* Familiar energy signature detected in combat.",
               ">{#p/basic}* Recommended action... stand still."
            ],
            [
               ">{#p/basic}{#npc/a}* Familiar energy signature detected in combat.",
               ">{#p/basic}* Recommended action... unknown."
            ],
            [
               ">{#p/basic}{#npc/a}* Familiar energy signature detected in combat.",
               ">{#p/basic}* Recommended action... hide."
            ]
         ][(SAVE.data.n.state_foundry_npc86_feelings || 3) - 1],
      npc86a: () => [
         ">{#p/basic}{#npc/a}* 检测到陌生的能量信号。",
         ">* 姓名... 未知。",
         ">* 关系状态... 陌生人。",
         SAVE.data.n.plot < 42.1 ? ">* 上次互动... 暂无。" : ">* Last interaction... observed in battle.",
         ">* 处理中...\n* 处理中...\n* 处理中...",
         ">* 您好，陌生人。\n* 我叫8-6，是个\n  万能送货机器人。",
         ">* 这与我的预期功能相去甚远，\n  但您现在愿意完成\n  一份调查吗？",
         choicer.create("* （你要怎么回答？）", "是", "否")
      ],
      npc86b: () => [
         ">{#p/basic}{#npc/a}* 谢谢您。\n* 问题如下。",
         ">* “在红色、绿色、蓝色\n  三种颜色中，\n  你更喜欢哪一种？”",
         choicer.create("* （你要怎么回答？）", "红色", "绿色", "蓝色", "不确定")
      ],
      npc86c: [
         ">{#p/basic}* 谢谢您。\n* 您的选择将深深地\n  铭刻在我的内存中。",
         ">{#p/basic}{#npc/a}* 您的关系状态现已被\n  设置为“熟人”。"
      ],
      npc86d: () => [
         ">{#p/basic}{#npc/a}* 检测到熟悉的能量信号。",
         ">* 姓名... 未知。",
         ">* 关系状态... 熟人。",
         SAVE.data.n.state_foundry_npc86 === 1
            ? ">* 上次互动... 拒绝调查。"
            : ">* 上次互动... 接受调查。",
         ">* 处理中...\n* 处理中...\n* 处理中...",
         ">* 欢迎回来，熟人。\n* 您今天过得怎样？",
         choicer.create("* （你要怎么回答？）", "好听", "不好听", "一般", "不确定")
      ],
      npc86e: () => [
         ...[
            [">{#p/basic}{#npc/a}* 很好？\n* 很高兴听您这么说。"],
            [">{#p/basic}{#npc/a}* 不好？\n* 希望事情会好起来。"],
            [">{#p/basic}{#npc/a}* 一般？\n* 可以理解。"],
            [">{#p/basic}{#npc/a}* 不确定？\n* 这... 可以理解。"]
         ][choicer.result],
         ">{#p/basic}{#npc/a}* 您的关系状态现已被\n  设置为“朋友”。"
      ],
      npc86f: () => [
         ">{#p/basic}{#npc/a}* 检测到熟悉的能量信号。",
         ">* 姓名... 未知。",
         ">* 关系状态... 朋友。",
         ">* 上次互动... 关于心情的询问。",
         ">* 处理中...\n* 处理中...\n* 处理中...",
         [
            ">* 欢迎回来，朋友。\n* 我希望自从上一次互动后，\n  您的心情仍旧很好如初。",
            ">* 欢迎回来，朋友。\n* 我希望自从上一次互动后，\n  您的心情好转了很多。",
            ">* 您好，朋友。\n* 基于上一次互动...",
            ">* 您好，朋友。\n* 基于上一次互动..."
         ][SAVE.data.n.state_foundry_npc86_mood - 1],
         ">* 看来您对我很感兴趣。",
         ">* 您对我最常见的情感是什么？",
         choicer.create("* （你要怎么回答？）", "爱", "恶心", "暂无", "不确定")
      ],
      npc86g: () =>
         [
            [
               ">{#p/basic}{#npc/a}* ...",
               ">* 您的关系状态现已被\n  设置为“挚友”。",
               ">* 我也爱您，挚友。"
            ],
            [
               ">{#p/basic}{#npc/a}* ...",
               ">* 您的关系状态现已被\n  设置为“敌人”。",
               ">* 我已经不需要您了，敌人。"
            ],
            [
               ">{#p/basic}{#npc/a}* ...",
               ">* 您的关系状态现已被\n  设置为“熟人”。",
               ">* 这个回答可能不太好，熟人。"
            ],
            [
               ">{#p/basic}{#npc/a}* ...",
               ">* 您的关系状态保持不变。",
               ...(SAVE.data.n.state_foundry_npc86 === 5 && SAVE.data.n.state_foundry_npc86_feelings === 4
                  ? [">* 对所有问题的预期回答\n  现已被设置为“不确定”。"]
                  : [])
            ]
         ][choicer.result],
      npc86h: () => [
         ">{#p/basic}{#npc/a}* 检测到熟悉的能量信号。",
         ">* 姓名... 未知。",
         [
            ">* 关系状态... 挚友。",
            ">* 关系状态... 敌人。",
            ">* 关系状态... 熟人。",
            ">* 关系状态... 朋友。"
         ][SAVE.data.n.state_foundry_npc86_feelings - 1],
         SAVE.data.b.f_state_done86
            ? [
               ">* 上次互动... 表达赞美。",
               ">* 上次互动... 拒绝对话。",
               ">* 上次互动... 闲聊。",
               ">* 上次互动... 给予建议。"
            ][SAVE.data.n.state_foundry_npc86_feelings - 1]
            : ">* 上次互动... 询问感受。",
         ">* 处理中...\n* 处理中...\n* 处理中...",
         [
            [
               ">* 欢迎回来，挚友。\n* 我希望您一切都好。",
               ">* 欢迎回来，挚友。\n* 我很爱您。",
               ">* 欢迎回来，挚友。\n* 今天见到您很高兴。"
            ],
            [
               ">* ...\n* 请不要再跟我说话了。",
               ">* ...\n* 请不要再跟我说话了。",
               ">* ...\n* 请不要再跟我说话了。"
            ],
            [
               ">* 欢迎回来，熟人。\n* 工厂今天有点霉味。",
               ">* 欢迎回来，熟人。\n* 今天星光闪烁。",
               ">* 欢迎回来，熟人。\n* 今天蒸汽很潮湿。"
            ],
            [
               ">* 欢迎回来，朋友。\n* 记得吃点东西。",
               ">* 欢迎回来，朋友。\n* 记得休息一下。",
               ">* 欢迎回来，朋友。\n* 记得把事情说出来。"
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
                           ">{#p/basic}{#s/spiderLaugh}{#npc/a}* Your payment to me means more than you can possibly imagine~"
                        ]),
                     ">* Thank you for your generous donation, dearie~",
                     ">* If you or your little armless friend need anything, you just let me know~"
                  ]
                  : [
                     ">{#p/basic}{#s/spiderLaugh}{#npc/a}* It's a shame I wasn't able to capture you the first time around~",
                     ...(world.population < 6 && world.bullied
                        ? [">* A little bully like you would have been a wonderful prize~"]
                        : [">* Oh well~\n* Now that the force field's gone, I won't have to~"])
                  ],
            [
               ">{#p/basic}{#s/spiderLaugh}{#npc/a}* Oh, dearie~\n* When the spider clans arrive on the new homeworld...",
               ">* There'll be so many natural resouces to exploit~",
               ">* We're going to build the largest tea empire this new world has ever seen~"
            ],
            [
               ">{#p/basic}{#s/spiderLaugh}{#npc/a}* Oh, and if I can help it...",
               ">* It'll be the only tea empire this new world will ever see~\n* Ahuhuhu~"
            ],
            [">{#p/basic}{#s/spiderLaugh}{#npc/a}* Ahuhuhu~"]
         ),
         f_dogenpc: pager.create(
            0,
            () =>
               SAVE.data.n.state_foundry_doge === 2
                  ? [
                     ...(world.population < 6 && world.bullied
                        ? [
                           ">{#p/basic}{#npc/a}* I know you have been violent, but I appreciate the compassion you have shown me."
                        ]
                        : [">{#p/basic}{#npc/a}* Thank you for the compassion you have shown me."]),
                     ">* It is what I needed to see the error in my choice of career.",
                     ">* Still, I'm keeping the uniform.\n* It suits me well."
                  ]
                  : [
                     ">{#p/basic}{#npc/a}* I regretted letting you get past me, but after what you've done, I'm fine with that.",
                     ...(world.population < 6 && world.bullied
                        ? [">* I shall overlook your rather... violent tendencies for the moment."]
                        : [">* I shall recall your name for many centuries to come."])
                  ],
            [
               ">{#p/basic}{#npc/a}* I do apologize for mis- judging you, Frisk.",
               ">* As a member of the ELITE squad, it was difficult for me to see the good in you."
            ],
            [
               ">* Well.\n* There is much for me to reflect on, now.",
               ">* I would appreciate if you gave me the time and space to do so.",
               ">* Thank you for the conversation."
            ],
            [">{#p/basic}{#npc/a}* Until next time."]
         ),
         f_clamgirl: pager.create(
            0,
            () =>
               SAVE.data.n.plot === 72
                  ? [
                     ">{#p/basic}{#npc/a}* How silly...\n* As soon as I choose to stay somewhere, we all have to go.",
                     ">* The irony of the situation has not escaped me.\n* Still, it is for the best.",
                     ">* On our new homeworld...\n* I'm sure to find lots of new neighbors for myself."
                  ]
                  : SAVE.data.n.plot === 47.2
                     ? [">{#p/basic}{#npc/a}* Er, she's still after you..."]
                     : SAVE.data.s.state_foundry_deathroom === 'f_hub' // NO-TRANSLATE

                        ? [">{#p/basic}{#npc/a}* You should never have come."]
                        : SAVE.data.n.state_foundry_undyne === 1
                           ? [
                              ">{#p/basic}{#npc/a}* I sense a disturbance in the nearby aura...",
                              ">* You really shouldn't have left that girl alone."
                           ]
                           : SAVE.data.n.state_foundry_undyne === 2
                              ? [
                                 ">{#p/basic}{#npc/a}* I sense a disturbance in the nearby aura...",
                                 ">* You really should have left that girl alone."
                              ]
                              : 2 <= SAVE.data.n.plot_date
                                 ? [
                                    ">{#p/basic}{#npc/a}* I sense a disturbance in the nearby aura...",
                                    ">* You and my new neighbor are getting along, I see."
                                 ]
                                 : SAVE.data.n.plot > 47.2 && SAVE.data.n.plot_date > 1
                                    ? world.trueKills > 0
                                       ? [">{#p/basic}{#npc/a}* 帕派瑞斯在附近等着呢。", ">* Isn't he brave?"]
                                       : [">{#p/basic}{#npc/a}* 帕派瑞斯在附近等着呢。", ">* 想见见我的新邻居去吗？"]
                                    : [
                                       ">{#p/basic}{#npc/a}* 话说，我是从首塔过来\n  铸厂这里游览的。",
                                       ">* 我在那几乎不认识任何人，\n  但在这，我已经遇到了\n  几个友好的邻居。",
                                       ">* 我觉得我短期内\n  不会离开这里。"
                                    ],
            () =>
               SAVE.data.n.plot === 72
                  ? [">{#p/basic}{#npc/a}* Won't that be splendid?"]
                  : SAVE.data.n.plot === 47.2
                     ? [">{#p/basic}{#npc/a}* Er, she's still after you..."]
                     : SAVE.data.n.state_foundry_undyne > 0
                        ? [">{#p/basic}{#npc/a}* ..."]
                        : 2 <= SAVE.data.n.plot_date
                           ? [">{#p/basic}{#npc/a}* Good neighbors have been quite difficult to find."]
                           : SAVE.data.n.plot > 47.2 && SAVE.data.n.plot_date > 1
                              ? world.trueKills > 0
                                 ? [">{#p/basic}{#npc/a}* ..."]
                                 : [
                                    ">{#p/basic}{#npc/a}* 没事的。她不咬人的。\n* 不过她可能会朝你\n  扔几支长矛。"
                                 ]
                              : [">{#p/basic}{#npc/a}* 有邻居就是好。"]
         ),
         f_echo1: () =>
            world.runaway
               ? [
                  ">{#s/echostart}{#p/event}{#npc/a}* 讯号开始...",
                  ">{#p/undyne}* Citizens of the Foundry...",
                  ">* ... you should all know what happened to you by now.",
                  ">* It's time to go, and you damn well know it.",
                  ">* So let's get going.",
                  ">{#s/echostop}{#p/event}{#npc}* 讯号终止。"
               ]
               : SAVE.data.n.plot === 72
                  ? [
                     ">{#s/echostart}{#p/event}{#npc/a}* 讯号开始...",
                     ">{#p/undyne}* Listen up, everyone!\n* The force field's gone!\n* We can all go home!",
                     ">* If you're still down there dawdling by the time we leave...",
                     ">* Then... we'll probably just come back for you later.",
                     ">* But don't make us do that!",
                     ">{#s/echostop}{#p/event}{#npc}* 讯号终止。"
                  ]
                  : geno()
                     ? [
                        ">{#s/echostart}{#p/event}{#npc/a}* 讯号开始...",
                        ">{#p/undyne}* 铸厂居民听好！\n* 趁现在，快给我逃！",
                        world.genocide
                           ? ">* 有杀人狂到达铸厂，还未落网！\n  你要是碰着了，就是死路一条！"
                           : ">* 有杀人狂到达铸厂，还未落网！\n  你要是碰着了，就是死路一条！",
                        ">* 不听劝，后果自负！！",
                        ">{#s/echostop}{#p/event}{#npc}* 讯号终止。",
                        ...(world.goatbro && SAVE.flag.n.ga_asrielEcho1++ < 1
                           ? [">{#p/asriel2}{#f/2}* 谢了，安黛因。\n* 要是还动不动碰上怪物，\n  我就真吃不消了。"]
                           : [])
                     ]
                     : [
                        ">{#s/echostart}{#p/event}{#npc/a}* 讯号开始...",
                        ">{#p/basic}* 我是铸厂员工Skrubby。\n* 麻烦你检查一下管道有无泄漏。",
                        ">{#p/alphys}* 哦- 呃... 抱-抱歉哈！\n* 我现在稍微有点忙！",
                        ">{#p/basic}* 好吧。\n* 我去叫Raddy来帮忙。\n* 真是谢谢您了。",
                        ">{#p/alphys}* 不-不用谢？？",
                        ">{#s/echostop}{#p/event}{#npc}* 讯号终止。"
                     ],
         f_echo2: () =>
            world.runaway
               ? [
                  ">{#s/echostart}{#p/event}{#npc/a}* 讯号开始...",
                  ">{#p/basic}* Hey... everything's gonna be okay, kiddo.",
                  ">* (Gerson?)\n* (Is that you again?)",
                  ">* Oh, I dunno.\n* Is that really you, Burgie?\n* Wa ha ha.",
                  ">* (Yeah, yeah.)\n* (I'm just a little scared... like everyone else.)",
                  ">{#s/echostop}{#p/event}{#npc}* 讯号终止。"
               ]
               : SAVE.data.n.plot === 72
                  ? [
                     ">{#s/echostart}{#p/event}{#npc/a}* 讯号开始...",
                     ">{#p/basic}* Well, you heard her!\n* Time for us to go, kiddo!",
                     ">{#p/basic}* ... wa ha ha.\n* In truth, we've still got the rest of the day.",
                     ">{#p/basic}* (Yeah, I'm gonna hang out here for a bit longer.)",
                     ">{#p/basic}* (Who knows?)\n* (Maybe Frisk'll come by.)",
                     ">{#s/echostop}{#p/event}{#npc}* 讯号终止。"
                  ]
                  : geno()
                     ? [
                        ">{#s/echostart}{#p/event}{#npc/a}* 讯号开始...",
                        ">{#p/basic}* 嘿，小子。\n  听到广播里的警告了吗？",
                        ">* （小点声！）\n* （...所以说，\n  有个人类什么的过来了，是吗？）",
                        ">* 毫无疑问，是的。",
                        ">* （难怪呢，\n  不过强制疏散真的很烦人。）",
                        ">{#s/echostop}{#p/event}{#npc}* 讯号终止。"
                     ]
                     : [
                        ">{#s/echostart}{#p/event}{#npc/a}* 讯号开始...",
                        ">{#s/phone}* 铃铃，铃铃...",
                        ">{#p/basic}* 嘿，孩子！\n* 我就是想问问你的新店\n  怎么样了。",
                        ">* 我听说开得挺不错呢！",
                        "* （...）\n* （我现在有点不方便讲话。）",
                        ">{#s/echostop}{#p/event}{#npc}* 讯号终止。"
                     ],
         f_echo3: () =>
            world.runaway
               ? [
                  ">{#s/echostart}{#p/event}{#npc/a}* 讯号开始...",
                  ">{#p/basic}* I hear ya.\n* Hey, maybe it'd help if ya told me what ya saw.",
                  ">* From your point of view.",
                  ">* (Well...)\n* (It all started when...)",
                  ">* (I was at the force field with a bunch of others.)",
                  ">{#s/echostop}{#p/event}{#npc}* 讯号终止。"
               ]
               : SAVE.data.n.plot === 72
                  ? [
                     ">{#s/echostart}{#p/event}{#npc/a}* 讯号开始...",
                     ">{#p/basic}* That'd be a treat!\n* I know I'd sure as hell like to see 'em.",
                     ">{#p/basic}* It's kind of hard to imagine, isn't it?\n* Being saved by a human?",
                     ">{#p/basic}* (I know, right?)\n* (And those other humans... they're alive, too.)",
                     ">{#p/basic}* (What a crazy day it's been.)",
                     ">{#s/echostop}{#p/event}{#npc}* 讯号终止。"
                  ]
                  : geno()
                     ? [
                        ">{#s/echostart}{#p/event}{#npc/a}* 讯号开始...",
                        ">{#p/basic}* 撤离？没门！\n* 我敢保证，待在原地，也没人来伤你。",
                        ">* （呃...）\n* （你明知道我正身处危险之中，\n  为什么还这么说？）",
                        ">* 或许处境确实不利，\n  但是，我碰巧知道有个东西...",
                        ">* 它能保护我们这些小商贩免受危险。",
                        ">{#s/echostop}{#p/event}{#npc}* 讯号终止。"
                     ]
                     : [
                        ">{#s/echostart}{#p/event}{#npc/a}* 讯号开始...",
                        ">{#p/basic}* 嗯？\n* 发生什么了？",
                        ">* （...你不知道吗？）",
                        ">* 等一下...",
                        ">* （就是那种的威胁。）",
                        ">{#s/echostop}{#p/event}{#npc}* 讯号终止。"
                     ],
         f_echo4: () =>
            world.runaway
               ? [
                  ">{#s/echostart}{#p/event}{#npc/a}* 讯号开始...",
                  ">{#p/basic}* (We were all there to see the force field be taken down.)",
                  ">* (We'd been told something like that could happen, but when we got there...)",
                  ">* (The same talking star who told us to go there was holding monsters hostage.)",
                  ">* Little star, huh?\n* I have heard stories of a little yellow star...",
                  ">{#s/echostop}{#p/event}{#npc}* 讯号终止。"
               ]
               : SAVE.data.n.plot === 72
                  ? [
                     ">{#s/echostart}{#p/event}{#npc/a}* 讯号开始...",
                     ">{#p/basic}* (I wonder what we'll do when we arrive on the new homeworld.)",
                     ">{#p/basic}* (Maybe the two of us could open a shop together!)\n* (You'd sell the trinkets...)",
                     ">{#p/basic}* And you'd sell the food.\n* I like the way you think about it, kiddo!",
                     ">{#p/basic}* But it'd likely be better if one of us sells, and the other tracks the finances.",
                     ">{#s/echostop}{#p/event}{#npc}* 讯号终止。"
                  ]
                  : geno()
                     ? [
                        ">{#s/echostart}{#p/event}{#npc/a}* 讯号开始...",
                        ">{#p/basic}* （啥？）\n* （蠢到家了。）",
                        ">* 这可是真事！\n* 想听的话，现在就给你\n  好好讲讲它的来龙去脉！",
                        ">* （呃，不-不必了！）\n* （我相信你，老-老人家！）",
                        ">* 哇哈哈！\n* 每天都能收获新知，挺不错的吧！",
                        ">{#s/echostop}{#p/event}{#npc}* 讯号终止。"
                     ]
                     : [
                        ">{#s/echostart}{#p/event}{#npc/a}* 讯号开始...",
                        ">{#p/basic}* ...哇哈哈。\n* 是那个到处卖牛排的家伙，\n  对吧？",
                        ">* （我该怎么办！）",
                        ">* 嘘...\n* 没事的，孩子。\n* 那家商店是有个后门的！",
                        ">* （真的有吗！？！？）",
                        ">{#s/echostop}{#p/event}{#npc}* 讯号终止。"
                     ],
         f_echo5: () =>
            world.runaway
               ? [
                  ">{#s/echostart}{#p/event}{#npc/a}* 讯号开始...",
                  ">{#p/basic}* (Well, he's real.)\n* (And we thought we'd helped the human beat him...)",
                  ">* (But he just ended up taking everyone's SOULs anyway.)",
                  ">* That must've been the bright light I saw...\n* I just couldn't shake it.",
                  ">* (Yeah, and it was even brighter at the source.)\n* (We didn't stand a chance.)",
                  ">{#s/echostop}{#p/event}{#npc}* 讯号终止。"
               ]
               : SAVE.data.n.plot === 72
                  ? [
                     ">{#s/echostart}{#p/event}{#npc/a}* 讯号开始...",
                     ">{#p/basic}* (Ha. We'll take turns, then.)",
                     ">{#p/basic}* (Doing the same thing all the time would get boring, don't you think?)",
                     ">{#p/basic}* Wa ha ha.\n* Maybe I'm just old, but I don't mind doing finances.",
                     ">{#p/basic}* You can have the fun job all to yourself, kiddo!",
                     ">{#s/echostop}{#p/event}{#npc}* 讯号终止。"
                  ]
                  : geno()
                     ? [
                        ">{#s/echostart}{#p/event}{#npc/a}* 讯号开始...",
                        ">{#p/basic}* （看来，我们注定要在这里\n  度过余生了...）",
                        ">* 嘿，别小瞧皇家守卫！\n* 他们各个都是骁勇善战的猛士！",
                        ">* （你有把握他们能阻止那人类吗？）",
                        ">* 那个人类小孩吗？\n* 我不确定，感觉难度挺大的。",
                        ">{#s/echostop}{#p/event}{#npc}* 讯号终止。",
                        ...(world.goatbro && SAVE.flag.n.ga_asrielEcho4++ < 1
                           ? [">{#p/asriel2}{#f/5}* 嘻嘻嘻..."]
                           : [])
                     ]
                     : [
                        ">{#s/echostart}{#p/event}{#npc/a}* 讯号开始...",
                        ">{#p/basic}* （哇...）\n* （这扇门通往外面的阳台！）",
                        ">{#p/basic}* （我真的感觉星星\n  从来没有这么明亮过...）",
                        ">* 哈。\n* 肯定是有个扭曲力场\n  什么的。",
                        ">* 稍微等一下，\n  就尽情享受吧！",
                        ">{#s/echostop}{#p/event}{#npc}* 讯号终止。"
                     ],
         f_echo6: () =>
            world.runaway
               ? [
                  ">{#s/echostart}{#p/event}{#npc/a}* 讯号开始...",
                  ">{#p/basic}* So what happened next?",
                  ">* (Well, you should know.)\n* (This is the part that everyone knows.)",
                  ">* (From our perspective, we saw a human fending off attacks...)",
                  ">* (Whatever that star turned himself into was relentlessly attacking the human.)",
                  ">{#s/echostop}{#p/event}{#npc}* 讯号终止。"
               ]
               : SAVE.data.n.plot === 72
                  ? [
                     ">{#s/echostart}{#p/event}{#npc/a}* 讯号开始...",
                     ">{#p/basic}* I do feel like a part of me's going to miss this old place.",
                     ">{#p/basic}* We really made it our own.",
                     ">{#p/basic}* (You're kidding, right?)\n* (I won't miss this old dump for a second.)",
                     ">{#p/basic}* (But I guess I've also had it pretty bad up here.)",
                     ">{#s/echostop}{#p/event}{#npc}* 讯号终止。"
                  ]
                  : geno()
                     ? [
                        ">{#s/echostart}{#p/event}{#npc/a}* 讯号开始...",
                        ">{#p/basic}* Bad news, kiddo.\n* The human came through not too long ago.",
                        ...(world.genocide
                           ? [
                              ">{#p/basic}* ... they had a partner with 'em, too.",
                              ">{#p/basic}* (What?)\n* (Who was it?)",
                              ">{#p/basic}* Wa ha ha...\n* You wouldn't believe me."
                           ]
                           : [
                              ">{#p/basic}* (Are they on their way here?)",
                              ">{#p/basic}* Sure, but it'll be a while until ya see 'em.\n* Not to mention Undyne...",
                              ">{#p/basic}* (Yeah, she'll stop them.)\n* (She's in charge of the Royal Guard, after all...)"
                           ]),
                        ">{#s/echostop}{#p/event}{#npc}* 讯号终止。"
                     ]
                     : [
                        ">{#s/echostart}{#p/event}{#npc/a}* 讯号开始...",
                        ">{#s/phone}* 铃铃，铃铃...",
                        ">{#p/basic}* 很抱歉，\n  这里的手机信号不是很好。",
                        ">* 到目前为止你看到什么\n  有趣的东西了吗？",
                        ">* （... 这个嘛...）",
                        ">* （流星算吗？）",
                        ">{#s/echostop}{#p/event}{#npc}* 讯号终止。"
                     ],
         f_echo7: () =>
            world.runaway
               ? [
                  ">{#s/echostart}{#p/event}{#npc/a}* 讯号开始...",
                  ">{#p/basic}* (Eventually, though, the human mustered some kind of power...)",
                  ">* (And then...)",
                  ">* (... IT... happened.)",
                  ">* Yeah... that.\n* The moment where it all turned upside-down, huh?",
                  ">{#s/echostop}{#p/event}{#npc}* 讯号终止。"
               ]
               : SAVE.data.n.plot === 72
                  ? [
                     ">{#s/echostart}{#p/event}{#npc/a}* 讯号开始...",
                     ">{#p/basic}* Hey, it's alright.",
                     ">{#p/basic}* On a new homeworld... you'll be able to go wherever you want.",
                     ">{#p/basic}* (Really? I thought I was going to settle down with you.)",
                     ">{#p/basic}* Oh, did you now?\n* Wa ha ha.",
                     ">{#s/echostop}{#p/event}{#npc}* 讯号终止。"
                  ]
                  : geno()
                     ? [
                        ">{#s/echostart}{#p/event}{#npc/a}* 讯号开始...",
                        ...(world.genocide
                           ? [
                              ">{#p/basic}* (So you're telling me this kid's been resurrected from the dead?)",
                              ">{#p/basic}* (Wow.)\n* (I knew you were a crazy old coot, but this is something!)",
                              ">{#p/basic}* ... would I lie to you?",
                              ">{#p/basic}* (Well... knowing you... I guess... probably not.)\n* (Hmph.)"
                           ]
                           : [
                              ">{#p/basic}* (So what are we supposed to do in the meantime?)",
                              ">{#p/basic}* Oh, y'know, just the usual jiggery-pokery, I'd guess.",
                              ">{#p/basic}* (You and your weird sayings.)",
                              ">{#p/basic}* Wa ha ha, you know it!"
                           ]),
                        ">{#s/echostop}{#p/event}{#npc}* 讯号终止。"
                     ]
                     : [
                        ">{#s/echostart}{#p/event}{#npc/a}* 讯号开始...",
                        ">{#p/basic}* 哦！\n* 快许个愿，孩子！",
                        ">* （...）\n* （永远不会实现的。）",
                        ">* ...自由，是吗？\n* 哇哈哈... 那我可有个\n  好消息要告诉你了。",
                        ">* 我在早些时候\n  看到一个人类过来了。",
                        ">{#s/echostop}{#p/event}{#npc}* 讯号终止。"
                     ],
         f_echo8: () =>
            world.runaway
               ? [
                  ">{#s/echostart}{#p/event}{#npc/a}* 讯号开始...",
                  ">{#p/basic}* I remember that bit.\n* The power changed hands... the human was in control.",
                  ">* (Yeah, and then they started attacking us!)\n* (I thought we were all...)",
                  ">* Going to die?",
                  ">* (Yeah, and it's like I could feel their fear.)\n* (Everyone was so afraid.)",
                  ">{#s/echostop}{#p/event}{#npc}* 讯号终止。"
               ]
               : SAVE.data.n.plot === 72
                  ? [
                     ">{#s/echostart}{#p/event}{#npc/a}* 讯号开始...",
                     ">{#p/basic}* (Who else am I gonna go to?)\n* (The girls?)",
                     ">{#p/basic}* Hmm...\n* I see your point.",
                     ">{#p/basic}* (You're the only one I feel like I can rely on, old buddy.)",
                     ">{#p/basic}* (Using this shop to make fun of Mettaton was a blast, but it's time for a change.)",
                     ">{#s/echostop}{#p/event}{#npc}* 讯号终止。"
                  ]
                  : geno()
                     ? [
                        ">{#s/echostart}{#p/event}{#npc/a}* 讯号开始...",
                        ">{#p/basic}* (Hey... if we ever manage to get out of this...)",
                        ">* (Maybe... we could go for some lunch together?)",
                        ">* Huh?\n* Sure, kiddo!\n* I don't see why not!",
                        ">* It'll give us somethin' to look forward to.",
                        ">{#s/echostop}{#p/event}{#npc}* 讯号终止。"
                     ]
                     : [
                        ">{#s/echostart}{#p/event}{#npc/a}* 讯号开始...",
                        ">{#p/basic}* （所以是真的...）\n* （自由真的越来越近了。）",
                        ">* 可以这么说。",
                        ">* （看来一切都取决于\n  国王了，是吧？）",
                        ">* ...如果真到那种情况了的话。",
                        ">{#s/echostop}{#p/event}{#npc}* 讯号终止。"
                     ],
         f_echo9: () =>
            world.runaway
               ? [
                  ">{#s/echostart}{#p/event}{#npc/a}* 讯号开始...",
                  ">{#p/basic}* Yeah... I remember.",
                  ">* (Look, whatever happens...)\n* (I'm just glad you're safe, ya fat old mole-rat.)",
                  ">* Wa ha ha... that's my boy.",
                  ">* (... when we get to the new homeworld, would you... like to go out for dinner?)",
                  ">{#s/echostop}{#p/event}{#npc}* 讯号终止。"
               ]
               : SAVE.data.n.plot === 72
                  ? [
                     ">{#s/echostart}{#p/event}{#npc/a}* 讯号开始...",
                     ">{#p/basic}* That robot... I don't know if he'll be able to stay popular on the new homeworld.",
                     ">{#p/basic}* But hey, if he gets poor, we can always remind him how much better off we are.",
                     ">{#p/basic}* (Jeez, you're even more ruthless than I am when it comes to him!)",
                     ">{#p/basic}* (... if he comes to our shop, we'll charge him double.)",
                     ">{#s/echostop}{#p/event}{#npc}* 讯号终止。"
                  ]
                  : geno()
                     ? [
                        ">{#s/echostart}{#p/event}{#npc/a}* 讯号开始...",
                        ">{#p/basic}* (Thanks, old buddy...)\n* (... for a second there, I'd forgotten our troubles.)",
                        ">* Wa ha ha...\n* Glad I could help out.",
                        ">* And even if we never do make it outta here...",
                        ">* ... maybe we could go for lunch anyway.",
                        ">* (Yeah...)\n* (That'd be nice.)",
                        ">{#s/echostop}{#p/event}{#npc}* 讯号终止。"
                     ]
                     : [
                        ">{#s/echostart}{#p/event}{#npc/a}* 讯号开始...",
                        ">{#p/basic}* （“真到那种情况了的话”...？）\n* （不然还能是什么？\n  难不成还要把他放走吗？）",
                        ">* 我不知道。\n* 我心里应该有答案了。",
                        ">* （等一下...）\n* （难不成国王还有什么事\n  瞒着我们吗！？）",
                        ">* 哇哈哈...\n* 晚点再跟你说，孩子。",
                        ">* （...啊！？！？）",
                        ">{#s/echostop}{#p/event}{#npc}* 讯号终止。"
                     ],
         f_echoAbyss1: () =>
            SAVE.data.n.plot === 72
               ? [
                  ">{#s/echostart}{#p/event}{#npc/a}* 讯号开始...",
                  ">{#p/basic}* I don't know where I am...",
                  ">* I was just doing my laundry, but then there was this bright light...",
                  ">* Now it's like... I'm in some kind of limbo...",
                  ">* Please... help me...",
                  ">{#s/echostop}{#p/event}{#npc}* 讯号终止。",
                  ...(SAVE.data.b.svr ? [">{#p/asriel1}{#f/13}* ..."] : [])
               ]
               : geno()
                  ? [
                     ">{#s/echostart}{#p/event}{#npc/a}* 讯号开始...",
                     ">{#p/basic}* 有东西正在靠-靠-靠近我...\n  吓-吓-吓死我了！",
                     ">{#p/undyne}* 遁狗？\n* 是你吗？",
                     ">{#p/basic}* 是... 那玩意要过来了...\n* 啊！",
                     ">{#p/basic}* （咳咳）\n* 好像有啥动了下？\n* 是我的错觉吗？",
                     ">{#s/echostop}{#p/event}{#npc}* 讯号终止。"
                  ]
                  : [
                     ">{#s/echostart}{#p/event}{#npc/a}* 讯号开始...",
                     ">{#p/radio}{#v/1}* 大-家-好哇！\n* 欢迎收听《午夜狂奔》！",
                     ">{#p/alphys}* （我嘞个-）\n* （这是什么啊！？）",
                     ">{#p/radio}{#v/1}* 今天是2000年9月15日，\n  还算幸运，没有发生什么大事。",
                     ">{#p/alphys}* （某种通讯系统...\n  肯定已经休眠了几百年了！）",
                     ">{#s/echostop}{#p/event}{#npc}* 讯号终止。"
                  ],
         f_echoAbyss2: () =>
            SAVE.data.n.plot === 72
               ? [
                  ">{#s/echostart}{#p/event}{#npc/a}* 讯号开始...",
                  ">{#p/basic}* Gosh, where could I be...",
                  ">* We were out hunting for trash, but then this bright white light came in.",
                  ">* Catty thinks we're in some sort of shared dream...",
                  ">* But, like, wouldn't we be able to wake ourselves up?",
                  ">{#s/echostop}{#p/event}{#npc}* 讯号终止。",
                  ...(SAVE.data.b.svr ? [">{#p/asriel1}{#f/15}* ..."] : [])
               ]
               : world.genocide
                  ? [
                     ">{#s/echostart}{#p/event}{#npc/a}* 讯号开始...",
                     ">{#p/papyrusnt}安黛因，在吗？\n我兄弟他...\n他...",
                     ">{#p/undyne}* 他怎么了，帕派瑞斯？",
                     ">{#p/papyrusnt}...",
                     ">{#p/undyne}* 帕派瑞斯？",
                     ">{#s/echostop}{#p/event}{#npc}* 讯号终止。"
                  ]
                  : geno()
                     ? [
                        ">{#s/echostart}{#p/event}{#npc/a}* 讯号开始...",
                        ">{#p/sans}{#f/7}* hey, not to bother ya, but you should probably have starton evacuated.",
                        ">{#p/undyne}* Huh?\n* What's this about?",
                        ">{#p/sans}{#f/7}* ...",
                        ">{#p/undyne}* Not... particularly liking the silent treatment...",
                        ">{#s/echostop}{#p/event}{#npc}* 讯号终止。"
                     ]
                     : [
                        ">{#s/echostart}{#p/event}{#npc/a}* 讯号开始...",
                        ">{#p/radio}{#v/0}* 你说没发生什么大事！？\n* 你简直是疯了。",
                        ">{#p/alphys}* （嗯...）",
                        ">{#p/radio}{#v/0}* 来自邻近星球的外星人\n  今天就要到达了！",
                        ">{#p/alphys}* （我还是让它播下去吧。\n  诶嘿嘿。）",
                        ">{#s/echostop}{#p/event}{#npc}* 讯号终止。",
                        ...(world.kiddo && !SAVE.data.b.f_state_dc_kidd2
                           ? ((SAVE.data.b.f_state_dc_kidd2 = true),
                              [
                                 ">{#p/kidd}{#f/7}* 临近星球？\n* 不会是说...",
                                 ">{#f/2}* ...不-不可能。"
                              ])
                           : [])
                     ],
         f_echoAbyss3: () =>
            SAVE.data.n.plot === 72
               ? [
                  ">{#s/echostart}{#p/event}{#npc/a}* 讯号开始...",
                  ">{#p/toriel}{#f/21}* My child... are you there?",
                  ">* That Twinkly...",
                  ">* I should have known he'd cause some sort of trouble, but...",
                  ">* Once again... I've failed to see the reality that lay right in front of me...",
                  ">{#s/echostop}{#p/event}{#npc}* 讯号终止。",
                  ...(SAVE.data.b.svr ? [">{#p/asriel1}{#f/16}* ..."] : [])
               ]
               : geno()
                  ? [
                     ">{#s/echostart}{#p/event}{#npc/a}* 讯号开始...",
                     ...(SAVE.data.b.s_state_chilldrake
                        ? [
                           ">{#p/basic}* 救命啊！\n* 我朋友星铁龙失踪了...",
                           ">{#p/basic}* 他出门去找新笑话灵感，\n  结果到现在也没回家！",
                           ">{#p/undyne}* 小子，别乱跑。\n* 我马上派搜救队去找你朋友。"
                        ]
                        : [
                           ">{#p/basic}* 救命啊！\n* 我朋友星铁龙现在很危险！",
                           ">{#p/basic}* 他说自己看见个人类\n  四处游荡，屠杀怪物！",
                           ">{#p/undyne}* 小子，别乱跑。\n* 皇家卫队会将那人类\n  绳之以法的。"
                        ]),
                     ">{#p/basic}* 谢谢您... 安黛因...",
                     ">{#s/echostop}{#p/event}{#npc}* 讯号终止。",
                     ...(world.kiddo && !SAVE.data.b.f_state_dc_kidd3
                        ? ((SAVE.data.b.f_state_dc_kidd3 = true),
                           [">{#p/kidd}{#f/3}* 呃...\n  听起来怪吓人的，哈哈...", ">{#f/4}* ..."])
                        : [])
                  ]
                  : [
                     ">{#s/echostart}{#p/event}{#npc/a}* 讯号开始...",
                     ">{#p/radio}{#v/1}* 好了，不要慌！\n* 我们不会让他们欺负我们的，\n  对吧？",
                     ">{#v/0}* 你说得还挺一本正经的。",
                     ">{#v/1}* 如果我真的是认真说的呢？",
                     ">{#v/0}* 我觉得，这些外星人\n  有可能是很好的盟友。\n* 他们看起来人不错的。",
                     ">{#v/0}* 他们甚至带来了翻译领域的东西，\n  这样我们就能理解他们了！",
                     ">{#s/echostop}{#p/event}{#npc}* 讯号终止。"
                  ],
         f_echoAbyss4: () =>
            SAVE.data.n.plot === 72
               ? [
                  ">{#s/echostart}{#p/event}{#npc/a}* 讯号开始...",
                  ">{#p/papyrusnt}HUH? WHAT'S WRONG WITH THINKING EVERYTHING'S JUST FINE?",
                  ">{#p/without}* well, the way i see it...",
                  ">{#p/without}* you're just a-{@fill=#ff0}void{@fill=#fff}-ing the problem.",
                  ">{#p/papyrusnt}UGH... MAYBE YOU'RE RIGHT. THINGS DO SEEM PRETTY... {@fill=#ff0}DARK{@fill=#fff}.",
                  ">{#s/echostop}{#p/event}{#npc}* 讯号终止。",
                  ...(SAVE.data.b.svr ? [">{#p/asriel1}{#f/23}* ..."] : [])
               ]
               : geno()
                  ? [
                     ">{#s/echostart}{#p/event}{#npc/a}* 讯号开始...",
                     ">{#p/undyne}* 没听懂吗？\n  那可不是什么好对付的小混混...\n  趁现在快逃！不然下个遭殃的就是你！",
                     ">{#p/basic}* 那家伙是谁我不在乎。\n* 我只在乎能不能履行职责，\n  保护好前哨站！",
                     ">{#p/basic}* 你不是很想揍人类一顿吗？\n  那你现在就过来啊！",
                     ">{#p/undyne}* 狗来米！！",
                     ">{#s/echostop}{#p/event}{#npc}* 讯号终止。",
                     ...(world.kiddo && !SAVE.data.b.f_state_dc_kidd4
                        ? ((SAVE.data.b.f_state_dc_kidd4 = true),
                           [
                              ">{#p/kidd}{#f/1}* 老兄，皇家卫队真勇猛啊！",
                              ">{#f/3}* 有他们保护我们...\n  真是太好了！"
                           ])
                        : [])
                  ]
                  : [
                     ">{#s/echostart}{#p/event}{#npc/a}* 讯号开始...",
                     ">{#p/radio}{#v/1}* 是啊，是啊...\n* 如果我们要在这里\n  和外星人卿卿我我...",
                     ">{#v/1}* 我们就得做得更好，\n  而不光是走上去说句“哈喽”。",
                     ">{#v/0}* ...这不是Erogot喜欢的\n  打招呼方式吗？",
                     ">{#v/0}* 那家伙肯定喜欢看西部电影，\n  毫无疑问。",
                     ">{#s/echostop}{#p/event}{#npc}* 讯号终止。",
                     ...(world.kiddo && !SAVE.data.b.f_state_dc_kidd4
                        ? ((SAVE.data.b.f_state_dc_kidd4 = true),
                           [">{#p/kidd}{#f/1}* Erogot？", ">{#f/1}* Erogot国王！？", ">{#f/3}* 天..."])
                        : [])
                  ],
         f_echoAbyss5: () =>
            SAVE.data.n.plot === 72
               ? [
                  ">{#s/echostart}{#p/event}{#npc/a}* 讯号开始...",
                  ">{#p/kidding}* Yo... what is this place?",
                  ">* It's really dark, and I can't see anything in here...",
                  ">* I'm scared...",
                  ">* Is anyone there?\n* Please... someone help me...",
                  ">{#s/echostop}{#p/event}{#npc}* 讯号终止。",
                  ...(SAVE.data.b.svr ? [">{#p/asriel1}{#f/22}* ..."] : [])
               ]
               : world.genocide
                  ? [
                     ">{#s/echostart}{#p/event}{#npc/a}* 讯号开始...",
                     ">{#p/alphys}* 新身体用着怎么样？",
                     ">{#p/mettaton}* 真的很不错。\n* 我再看看有没有故障零件。",
                     ">{#p/alphys}* 那-那就好。\n* 我研究研究\n  怎么优化能量分配。",
                     ">{#p/mettaton}* 博士，别担心。\n* 我们还有的是时间。",
                     ">{#s/echostop}{#p/event}{#npc}* 讯号终止。"
                  ]
                  : geno()
                     ? [
                        ">{#s/echostart}{#p/event}{#npc/a}* 讯号开始...",
                        ">{#p/alphys}* 难道我...\n  我就只能袖手旁观吗？",
                        ">{#p/mettaton}* 唉... 还有别的可做吗？\n* 战斗？你可不擅长。",
                        ">{#p/mettaton}* 你要是现在冲上去，\n  很可能会丧命。\n  怪物们也会失去一员大将。",
                        ">{#p/alphys}* 为什么...\n  为什么我总遇到这种事...",
                        ">{#p/mettaton}* ...平心而论，\n  你还是第一次看到怪物死吧。",
                        ">{#s/echostop}{#p/event}{#npc}* 讯号终止。"
                     ]
                     : [
                        ">{#s/echostart}{#p/event}{#npc/a}* 讯号开始...",
                        ">{#p/radio}{#v/0}* 你别跟别人说，\n  我觉得他们有些人还挺可爱的。",
                        ">{#v/1}* 呃... 你什么意思？",
                        ">{#v/0}* 什么？\n* 我不是那种意思。\n* 我就是单纯觉得可爱。",
                        ">{#v/0}* 就像宠物的那种。",
                        ">{#v/1}* ...\n* 有一个听众给我们电台\n  打电话过来了。",
                        ">{#s/echostop}{#p/event}{#npc}* 讯号终止。"
                     ],
         f_echoAbyss6: () =>
            SAVE.data.n.plot === 72
               ? [
                  ">{#s/echostart}{#p/event}{#npc/a}* 讯号开始...",
                  ">{#p/alphys}* How strange...",
                  ">* So our SOULs have been absorbed into another being.",
                  ">* This could be a kind of \"separate plane\" where we're held before...",
                  ">* ... wait.\n* There m-might be a way I could contact the others!",
                  ">{#s/echostop}{#p/event}{#npc}* 讯号终止。",
                  ...(SAVE.data.b.svr ? [">{#p/asriel1}{#f/10}* ..."] : [])
               ]
               : geno()
                  ? [
                     ">{#s/echostart}{#p/event}{#npc/a}* 讯号开始...",
                     world.genocide
                        ? ">{#p/basic}* 那人类跟艾斯利尔快到这里了，\n* 只要发现他们，定将其一举歼灭！"
                        : ">{#p/basic}* 那人类快到这里了，\n* 只要我发现了，定将其一举歼灭！",
                     ">{#p/undyne}* Doge，你肯定知道\n  即将面对的是什么敌人。",
                     dogex()
                        ? ">{#p/basic}* They are responsible for the deaths in Starton.\n* I will show no mercy!"
                        : world.dead_canine
                           ? ">{#p/basic}* 朋友的生命亲手葬送在敌人手里。\n* 我绝不会心慈手软！"
                           : ">{#p/basic}* This is the moment I have long prepared myself for.\n* I will not falter!",
                     ">{#p/undyne}* Yeah!! Get out there and show 'em what the ELITE squad are all about!!",
                     ">{#s/echostop}{#p/event}{#npc}* 讯号终止。"
                  ]
                  : [
                     ">{#s/echostart}{#p/event}{#npc/a}* 讯号开始...",
                     ">{#p/radio}{#v/0}* 您好啊，亲爱的听众，\n  欢迎致电《午夜狂奔》。\n* 您有带来什么消息吗？",
                     ">{#p/human}* 是的，我有几句话要说。\n* 实际上，我们人类还没有\n  准备好这种事情呢。",
                     ">{#p/radio}{#v/0}* 所以你什么意思？\n* 我们太笨了理解不了\n  外星人的概念吗？",
                     ">{#p/human}* ...你太天真了。\n* 我真正担心的不是我们，\n  而是... 外星人他们。",
                     ">{#s/echostop}{#p/event}{#npc}* 讯号终止。"
                  ],
         f_echoAbyss7: () =>
            SAVE.data.n.plot === 72
               ? [
                  ">{#s/echostart}{#p/event}{#npc/a}* 讯号开始...",
                  ">{#p/basic}* Where am I?\n* What is this... place?",
                  ">{#p/alphys}* Hello?\n* I'm Dr. Alphys, and I'm... t-trying something!",
                  ">{#p/basic}* Dr. Alphys!\n* I'm here, can you hear me?",
                  ">{#p/alphys}* Yes... yes!\n* I just have to think about them... and I'm there!",
                  ">{#s/echostop}{#p/event}{#npc}* 讯号终止。",
                  ...(SAVE.data.b.svr ? [">{#p/asriel1}{#f/21}* ..."] : [])
               ]
               : geno()
                  ? [
                     ">{#s/echostart}{#p/event}{#npc/a}* 讯号开始...",
                     ">{#p/basic}* 我是铸厂员工Skrubby。\n* 就人类一事，我深感担忧。",
                     ">{#p/alphys}* 呃...\n* 安黛因应该帮得上忙...\n  她远比我能干...",
                     ">{#p/basic}* 赞成。\n* 您的确啥忙也帮不上。",
                     ">{#p/alphys}* 没-没礼貌...",
                     ">{#s/echostop}{#p/event}{#npc}* 讯号终止。"
                  ]
                  : [
                     ">{#s/echostart}{#p/event}{#npc/a}* 讯号开始...",
                     ">{#p/radio}{#v/1}* 唉，得了吧。\n* 我们对他们来说算不上威胁。\n* 他们掌握着全部的主动权呢！",
                     ">{#p/human}* 话是这么说，\n  但你看到他们的行为方式了吗？\n* 他们真的很好...",
                     ">* 我知道你们俩不会伤害他们，\n  但总有人类会利用这一点的。",
                     ">{#p/radio}{#v/1}* 是啊... 唉...",
                     ">{#s/echostop}{#p/event}{#npc}* 讯号终止。"
                  ],
         f_echoAbyss8: () =>
            SAVE.data.n.plot === 72
               ? [
                  ">{#s/echostart}{#p/event}{#npc/a}* 讯号开始...",
                  ">{#p/basic}* My name is Thomas Roman.\n* Royal scientist, and trusted associate of the crown.",
                  ">{#p/alphys}* Professor Roman?\n* But you're...",
                  ">{#p/basic}* My name is Thomas Roman.\n* Royal scientist, and trusted associate of the crown.",
                  ">{#p/alphys}* He's repeating...\n* It must just be the professor in everyone's memory.",
                  ">{#s/echostop}{#p/event}{#npc}* 讯号终止。",
                  ...(SAVE.data.b.svr ? [">{#p/asriel1}{#f/3}* ..."] : [])
               ]
               : world.genocide
                  ? [
                     ">{#s/echostart}{#p/event}{#npc/a}* 讯号开始...",
                     ">{#p/papyrusnt}我是帕派瑞斯。\n听到提示音后尽管留言！",
                     ">{#p/undyne}* 该死...",
                     ">{#p/undyne}* 帕派瑞斯，我真不该让你遭这种罪。",
                     ">{#p/undyne}* 你们兄弟俩命不该如此。",
                     ">{#s/echostop}{#p/event}{#npc}* 讯号终止。"
                  ]
                  : geno()
                     ? [
                        ">{#s/echostart}{#p/event}{#npc/a}* 讯号开始...",
                        ">{#p/undyne}* ... and even Doge has failed to capture the human.",
                        ">{#p/sans}{#f/7}* i'll be honest, this doesn't sound good.\n* evacuate the foundry?",
                        ">{#p/undyne}* At this point, everyone knows about what's going on.\n* They'll evacuate.",
                        ">{#p/sans}{#f/7}* i feel like it's better to be safe than sorry.\n* but what do i know.",
                        ">{#s/echostop}{#p/event}{#npc}* 讯号终止。"
                     ]
                     : [
                        ">{#s/echostart}{#p/event}{#npc/a}* 讯号开始...",
                        ">{#p/radio}{#v/0}* 嘿，振作起来。\n* 别让那个家伙把你弄得这么失落，\n  好吗？",
                        ">{#v/1}* 但他说得有道理...\n* 对大多数人来说，\n  这个情况都让人不知所措。",
                        ">* 并不是每个人的想法都像你...\n  还有你当做宠物般的那种痴迷...\n  那样的纯洁。",
                        ">{#v/0}* 先等一下！",
                        ">{#s/echostop}{#p/event}{#npc}* 讯号终止。"
                     ],
         f_echoAbyss9: () =>
            SAVE.data.n.plot === 72
               ? [
                  ">{#s/echostart}{#p/event}{#npc/a}* 讯号开始...",
                  ">{#p/alphys}* Yeah, just think of who you'd like to see, and you'll be with them.",
                  ">{#p/asgore}* Asriel... are you there?",
                  ">{#p/alphys}* Huh, it's not working...\n* Maybe there's not enough of him left in us?",
                  ">{#p/asgore}* Please... come back...",
                  ">{#s/echostop}{#p/event}{#npc}* 讯号终止。",
                  ...(SAVE.data.b.svr ? [">{#p/asriel1}{#f/25}* ..."] : [])
               ]
               : geno()
                  ? [
                     ">{#s/echostart}{#p/event}{#npc/a}* 讯号开始...",
                     ">{#p/undyne}* Mind if I ask you a favor?",
                     ">{#p/basic}* Ahuhuhu~\n* Anything for the one who now occupies the old nest~",
                     world.genocide
                        ? ">{#p/undyne}* Track down the human and their accomplice. Take them to me.\n* Biggest payout you've ever had."
                        : ">{#p/undyne}* Track down the human and take them to me.\n* Biggest payout you've ever had.",
                     ">{#p/basic}* Hmmm...\n* I'll see what I can do~",
                     ">{#s/echostop}{#p/event}{#npc}* 讯号终止。",
                     ...(world.kiddo && !SAVE.data.b.f_state_dc_kidd9
                        ? ((SAVE.data.b.f_state_dc_kidd9 = true), [">{#p/kidd}{#f/4}* Not THAT spider..."])
                        : [])
                  ]
                  : [
                     ">{#s/echostart}{#p/event}{#npc/a}* 讯号开始...",
                     ">{#p/radio}{#v/1}* 好了，好了。\n* 承认自己喜欢什么并不丢人。",
                     ">{#v/0}* 我不是那个意思！",
                     ">{#v/1}* 说到爱，让我们来听听\n  俱乐部里流行的那种\n  爵士乐吧...",
                     ">{#v/1}* 《和外星人结婚》！",
                     ">{#s/echostop}{#p/event}{#npc}* 讯号终止。",
                     ...(world.kiddo && !SAVE.data.b.f_state_dc_kidd9
                        ? ((SAVE.data.b.f_state_dc_kidd9 = true),
                           [">{#p/kidd}{#f/2}* 噗，只有人类能想出来\n  这种标题吧。"])
                        : [])
                  ],
         f_echoAbyss10: () =>
            SAVE.data.n.plot === 72
               ? [
                  ">{#s/echostart}{#p/event}{#npc/a}* 讯号开始...",
                  ">{#p/undyne}* I can't keep holding on...",
                  ">{#p/undyne}* The others... have already slipped away...",
                  ">{#p/undyne}* It's like they don't know who they are anymore...",
                  ">{#p/undyne}* No... no!\n* Not like this...\n* I can't forget who I am!",
                  ">{#s/echostop}{#p/event}{#npc}* 讯号终止。",
                  ...(SAVE.data.b.svr ? [">{#p/asriel1}{#f/21}* ..."] : [])
               ]
               : world.genocide
                  ? [
                     ">{#s/echostart}{#p/event}{#npc/a}* 讯号开始...",
                     ">{#p/mettaton}* 博士啊...",
                     ">{#p/mettaton}* 我该料到你会就这么逃跑的...",
                     ">{#p/mettaton}* ...\n* 该死...",
                     ">{#p/mettaton}* 你不明白吗？",
                     ">{#p/mettaton}* 没有你，我没法完善\n  那些防御部件啊...",
                     ">{#s/echostop}{#p/event}{#npc}* 讯号终止。"
                  ]
                  : geno()
                     ? [
                        ">{#s/echostart}{#p/event}{#npc/a}* 讯号开始...",
                        ">{#p/mettaton}* 唉，他们马上就到了。\n* 不知道你会怎么应对这种场面，\n  不过...",
                        ">{#p/mettaton}* 不管你在这坚守阵地，\n  还是打了退堂鼓...",
                        ">{#p/mettaton}* 我都会全力支持你。",
                        ">{#p/alphys}* ... ehehe...",
                        ">* The same goes to you, Mettaton.",
                        ">{#s/echostop}{#p/event}{#npc}* 讯号终止。"
                     ]
                     : [
                        ">{#s/echostart}{#p/event}{#npc/a}* 讯号开始...",
                        ">{#p/alphys}* 等下等下！\n* 这首放在我和安黛因的约会\n  应该很完美...",
                        ">{#p/mettaton}* 哦真的吗？",
                        ">{#p/alphys}* 镁塔顿！？\n* 你是从哪...\n* ...我没说要跟谁约会！",
                        ">{#p/mettaton}* 哦，你别担心。\n* 我会保守你的秘密的。\n* ...大概吧。",
                        ">{#s/echostop}{#p/event}{#npc}* 讯号终止。",
                        ...(world.kiddo && !SAVE.data.b.f_state_dc_kidd10
                           ? ((SAVE.data.b.f_state_dc_kidd10 = true),
                              [
                                 ">{#p/kidd}{#f/1}* 艾菲斯想跟安黛因\n  结婚！？",
                                 ">{#f/6}* 真是每天都能学到\n  新东西啊..."
                              ])
                           : [])
                     ],
         f_echodude: pager.create(
            0,
            () =>
               SAVE.data.n.plot === 72
                  ? [
                     ">{#p/basic}{#npc/a}* With a new world comes new kinds of stars.",
                     ">* These signal stars may be the least of our worries..."
                  ]
                  : [
                     ">{#p/basic}{#npc/a}* 这是一台讯星。\n* 它会重复它刚刚接收到的讯息，\n  一遍又一遍..."
                  ],
            () =>
               SAVE.data.n.plot === 72
                  ? [">{#p/basic}{#npc/a}* Hopefully the stars out there are more honest."]
                  : [">{#p/basic}{#npc/a}* 绝对不要相信一颗星星。", ">* 它们最典型的特质就是欺诈。"]
         ),
         f_echoLobby: () =>
            world.runaway
               ? [
                  ">{#s/echostart}{#p/event}{#npc/a}* 讯号开始...",
                  ">{#p/basic}* Raddy of the foundry crew.\n* We've no time to keep running the show here.",
                  ">* Don't worry about pipes, unless you're slidin' through em to escape!",
                  ">* Got it, Skrubby?\n* Large lata?\n* My teeny tini?",
                  ">* We've gotta go, right away.",
                  ">{#s/echostop}{#p/event}{#npc}* 讯号终止。"
               ]
               : SAVE.data.n.plot === 72
                  ? [
                     ">{#s/echostart}{#p/event}{#npc/a}* 讯号开始...",
                     ">{#p/basic}* Raddy of the foundry crew.\n* Everyone, you've done a real great job so far.",
                     ">* Now that we're free, we can all give it a rest!",
                     ">* Ya hear that, Skrubby?\n* Large lata?\n* My teeny tini?",
                     ">* It's time for a totally tubular celebration!",
                     ">{#s/echostop}{#p/event}{#npc}* 讯号终止。"
                  ]
                  : [
                     ">{#s/echostart}{#p/event}{#npc/a}* 讯号开始...",
                     ">{#p/basic}* 我是铸厂员工Skrubby。\n* 向您报告我和Raddy的检修成果。",
                     geno()
                        ? ">{#p/alphys}* 那真是... 太-太好了...\n* 因为，我-我现在没空修复它，\n  所以只能..."
                        : ">{#p/alphys}* 呃... 很-很高兴\n  你们修好了它！",
                     ">{#p/basic}* 没事。\n* 您啥忙都没帮上，\n  但我还是谢谢您嘞。",
                     ">{#p/alphys}* ...不客气。",
                     ">{#s/echostop}{#p/event}{#npc}* 讯号终止。"
                  ],
         f_kidd: pager.create(
            0,
            () =>
               world.genocide
                  ? [
                     ">{#p/kidd}{#npc/a}{#f/3}* 呃... 嘿...",
                     ">{#p/asriel2}{#f/15}{#npc}* 怪胎。",
                     ">{#p/kidd}{#npc/a}{#f/1}* 嗯... 你好！\n* 哈哈哈！"
                  ]
                  : SAVE.data.n.plot === 33
                     ? [
                        ">{#p/kidd}{#npc/a}{#f/1}* How was lunch?",
                        ">{#f/1}* Did that short skeleton make everyone laugh again?"
                     ]
                     : [
                        ">{#p/kidd}{#npc/a}{#f/2}* 哟，你也是来这看她的吗？",
                        ">{#f/1}* 哈哈。\n* 她最酷了！！",
                        ">{#f/2}* 我长大了要成为她那样..."
                     ],
            () =>
               world.genocide
                  ? [">{#p/kidd}{#npc/a}{#f/4}* ..."]
                  : SAVE.data.n.plot === 33
                     ? [">{#p/kidd}{#npc/a}{#f/3}* He always gets kicked out for pulling awful pranks."]
                     : [">{#p/kidd}{#npc/a}{#f/1}* 你先走吧。", ">{#f/1}* 我随后就来！"]
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
                        ">{#p/basic}{#npc/a}* 我和我的朋友Shortsy\n  打算建一座桥。",
                        ">* 他倒是有自己的想法。\n* 但就我而言，我只是不想再用\n  那个不稳定的木筏了。",
                        ">* 希望我们能做得\n  比之前更好吧。"
                     ]
                     : [
                        ">{#p/basic}{#npc/a}* How'd you like our bridge?\n* Was it stable?\n* Was it gravitationally secure?",
                        ">* Well, Shortsy said it's fine, and they're kinda the expert here.",
                        ">* I'm mostly just here to carry around the tools!"
                     ],
            () =>
               SAVE.data.n.plot === 72
                  ? [">{#p/basic}{#npc/a}* Shortsy told me about a new kind of tool recently..."]
                  : SAVE.data.n.plot < 48
                     ? [">{#p/basic}{#npc/a}* 情绪不稳定，\n  和其他人合不来。\n* 这就是我。"]
                     : [
                        ">{#p/basic}{#npc/a}* Don't get it twisted.\n* I'm a fantastic tool-toter.\n* That's just what I do."
                     ]
         ),
         f_shortsy: pager.create(
            0,
            () =>
               SAVE.data.n.plot === 72
                  ? [
                     ">{#p/basic}{#npc/a}* 我和我的伙伴Longsy\n  想成为全职建筑师。",
                     ">* I've invented a brand new tool for Longsy to use...",
                     ">* ... called the builder's wand."
                  ]
                  : SAVE.data.n.plot < 48
                     ? [
                        ">{#p/basic}{#npc/a}* 我和我的伙伴Longsy\n  想造座桥给国王看看。",
                        ">* 这会是你见过的最笔直、\n  最坚固的桥。",
                        ">* 我向你保证！"
                     ]
                     : [
                        ">{#p/basic}{#npc/a}* Take a look at our newest bridge.",
                        ">* Longsy and I figure this will be enough to impress the king...",
                        ">* It needs to be if we're going to work alongside him!"
                     ],
            () =>
               SAVE.data.n.plot === 72
                  ? [">{#p/basic}{#npc/a}* With enough power, it could create anything you can imagine..."]
                  : SAVE.data.n.plot < 48
                     ? [">{#p/basic}{#npc/a}* 不遗余力，\n  将事情做到最好。\n* 这就是我。"]
                     : [
                        ">{#p/basic}{#npc/a}* No need to thank us, it's only a community service.\n* That's just what I do."
                     ]
         ),
         f_snail1: () =>
            SAVE.data.n.plot === 72
               ? [">{#p/basic}{#npc/a}* (Snail snail...)\n* Everyone's leaving, it seems."]
               : [">{#p/basic}{#npc/a}* （蜗牛蜗牛...）\n* 每一天都要乐观..."],
         f_snail2: () =>
            SAVE.data.n.plot === 72
               ? [">{#p/basic}{#npc/a}* (Snail snail...)\n* It's time for us to go."]
               : [">{#p/basic}{#npc/a}* （蜗牛蜗牛...）\n* 结局好，一切都好..."],
         f_starkiller: pager.create(
            0,
            () =>
               SAVE.data.n.plot === 72
                  ? [
                     ">{#p/basic}{#npc/a}* The smell of grass grows ever closer now...",
                     ">* Soon, I will see it for myself."
                  ]
                  : SAVE.data.n.state_foundry_undyne !== 0
                     ? [">{#p/basic}{#npc/a}* I feel the grass has faded.", ">* Don't you...?"]
                     : roomKills().f_telescope > 0
                        ? [">{#p/basic}{#npc/a}* The grass may already be too far gone.", ">* Or am I wrong...?"]
                        : [
                           ">{#p/basic}{#npc/a}* 草是什么？",
                           ...(world.genocide
                              ? [">* 它能找到你吗？", ">* 它能吃掉你吗？", ">* 它能杀掉你吗？"]
                              : [">* 你能找到它吗？", ">* 你能吃掉它吗？", ">* 你能杀掉它吗？"]),
                           ">* ...",
                           ">* 你是用草做成的吗？"
                        ],
            () =>
               SAVE.data.n.plot === 72
                  ? [
                     ">{#p/basic}{#npc/a}* The grass may not always be greener, but who says it has to be?",
                     ">* A new world may have any number of colors in its grass."
                  ]
                  : [">{#p/basic}{#npc/a}* 这草望着那草绿。"]
         ),
         f_temmie1: () =>
            SAVE.data.n.plot === 72
               ? [">{#p/tem}{#npc/a}* woa... tem hear news...\n* VERY GOODS!!!"]
               : [">{#p/tem}{#npc/a}* 吼！！\n* 我素提米！！！", ">* 介素我盆友...\n* 提米！！！"],
         f_temmie2: () =>
            SAVE.data.n.plot === 72
               ? [">{#p/tem}{#npc/a}* yaYA!!!\n* tems can go free!!"]
               : [">{#p/tem}{#npc/a}* 吼！！\n* 我素提米！！！", ">* 介素我盆友...\n* 提米！！！"],
         f_temmie3: () =>
            SAVE.data.n.plot === 72
               ? [
                  ">{#p/tem}{#npc/a}* woa...\n* if tems can go to new homeworld, can make,",
                  ">{#p/tem}{#npc/a}* LOT OF TEMS HISTORY!!!"
               ]
               : [">{#p/tem}{#npc/a}* 吼！！\n* 我素提米！！！", ">* 别忘辣我盆友！"],
         f_temmie4: () =>
            SAVE.data.n.plot === 72
               ? [">{#p/tem}{#npc/a}* A pleasing development, no?"]
               : world.genocide || 10 <= world.trueKills
                  ? [
                     [">{*}{#p/tem}{#i/5}{#s.stop}* I know what you did.", "{*}{#s.resume}{%}"],
                     [">{#p/tem}{#npc/a}* 嘿。", ">* 我是Bob。"]
                  ][Math.min(SAVE.flag.n._bob++, 1)]
                  : SAVE.data.n.plot === 47.2
                     ? [">{#p/tem}{#npc/a}* 嘿。", ">* I'm afraid for your life."]
                     : [">{#p/tem}{#npc/a}* 嘿。", ">* 我是Bob。"],
         f_temmie5: () =>
            SAVE.data.n.plot === 72
               ? [">{#p/tem}{#npc/a}* 啊哇哦哇哦哇哦！！", ">* 银类...\n* 炒鸡...", ">* HEROES!!!!"]
               : [">{#p/tem}{#npc/a}* 啊哇哦哇哦哇哦！！", ">* 银类...\n* 炒鸡...", ">* 萌呆呆！！！！"],
         f_temmie6: () =>
            SAVE.data.n.plot === 72
               ? [
                  ">{#p/tem}{#npc/a}* everyones go free...\n* BUT TEM!!!",
                  ">* TEM NOT LEAV!!!\n* TEM WATCH EG!!!",
                  ">* tem will be happily fambily,"
               ]
               : [
                  ">{#p/tem}{#npc/a}* 提咪...\n* 看蛋！！！",
                  ">* 蛋... 会孵！！！",
                  ">* 提咪... 骄嗷父母！！"
               ]
      },
      punchcard0: () =>
         SAVE.data.b.svr ? [">{#p/human}* (But the box was empty.)"] : [">{#p/basic}* 箱子是空的。"],
      punchcard1: [">{#p/basic}* 箱子里有一张明信片。"],
      punchcard2: [">{#p/basic}* 箱子里有好几张明信片。"],
      punchcard3: () => [choicer.create("* （拿一张明信片吗？）", "是", "否")],
      punchcard4: [">{#p/human}* （你获得了一张明信片。）"],
      punchcardX: () => [
         ">{#p/human}* (You can't make out what's in the box...)",
         choicer.create("* (Take something out?)", "是", "否")
      ],
      puzzle1switch: () =>
         SAVE.data.b.svr
            ? [">{#p/human}* (You can't seem to use the switch anymore.)"]
            : world.darker
               ? [">{#p/basic}* It's stuck, like always."]
               : [">{#p/basic}* 令人震惊的是，\n  开关卡住了。", ">* 变化真大！"],
      puzzle2switch: () =>
         SAVE.data.b.svr
            ? [">{#p/human}* (You can't seem to use the switch anymore.)"]
            : world.darker
               ? [">{#p/basic}* It's stuck, like always."]
               : [">{#p/basic}* The switch is stuck.\n* Naturally."],
      puzzle3switch: () =>
         SAVE.data.b.svr
            ? [">{#p/human}* (You can't seem to use the switch anymore.)"]
            : world.darker
               ? [">{#p/basic}* It's stuck, like always."]
               : [
                  ">{#p/basic}* 不论你信不信...",
                  ">* 这个开关没有被卡住，\n  只是坏了而已。\n* 哦等等。"
               ],
      quiche1: () =>
         SAVE.data.b.svr
            ? [
               ">{#p/human}* (The note attached to this cheesecake describes how it was abandoned.)",
               choicer.create("* （拿走芝士蛋糕吗？）", "是", "否")
            ]
            : [
               ">{#p/basic}* 这放着一块芝士蛋糕，\n  上面粘着一张字条。",
               ">* “我真的承担不了\n   照顾它的重任。”",
               choicer.create("* （拿走芝士蛋糕吗？）", "是", "否")
            ],
      quiche2: [">{#p/human}* （你带的东西太多了。）"],
      quiche3: [">{#p/human}* （你拿走了芝士蛋糕。）"],
      quiche4: () =>
         SAVE.data.b.svr
            ? [
               [
                  ">{#p/asriel1}{#f/24}* Before we moved out, $(name) used to sit here all the time...",
                  ">{#f/23}* We'd swap stories about our hopes and our dreams...",
                  ">{#f/22}* And bring the telescope out and watch for stars sometimes.",
                  ">{#f/13}* Even as a star...\n* I wished I could return to those moments..."
               ],
               [
                  ">{#p/asriel1}{#f/23}* Look at me, getting all sentimental over a random bench.",
                  ">{#f/17}* But hey.\n* At least it's sturdy.",
                  ">{#f/3}* Heck, even Asgore's tremendous figure couldn't break it.",
                  ">{#f/4}* Back when we all lived here, I mean."
               ],
               [
                  ">{#p/asriel1}{#f/13}* It's kind of funny to think about...",
                  ">{#f/13}* The house we used to live in is now lived in by Undyne.",
                  ">{#f/17}* Or was, until the force field was destroyed.",
                  ">{#f/13}* And... it's not your usual kind of house.\n* It's a monster."
               ],
               [">{#p/asriel1}{#f/15}* ... all the other monster homes were lost in the war."]
            ][Math.min(asrielinter.quiche4++, 3)]
            : world.darker
               ? [">{#p/basic}* It's a bench."]
               : SAVE.data.n.plot === 72
                  ? [">{#p/basic}* Coming back to give a lonely bench some company...\n* The gesture is appreciated."]
                  : [">{#p/basic}* 只是工厂中央的一张\n  孤独的长椅。\n* 没什么好奇怪的！"],
      quiche5: [">{#p/human}* （你不打算这么做。）"],
      run1: [">{*}{#p/undyne}* 逃吧。{^20}{%}"],
      run2a1: [">{#p/undyne}* ...", ">{#p/undyne}* I'll go check."],
      run2b1: [">{#p/undyne}* (Stupid spiders...)"],
      run2a2: [">{#p/undyne}* ...", ">{#p/undyne}* I'm a little busy right now."],
      run2b2: [">{#p/undyne}* (Ugh...)"],
      run3: [">{*}{#p/kidd}{#f/13}{#x1}* 我来救你！{#x2}{^20}{%}"],
      run4: [">{*}{#p/kidd}{#f/1}{#x1}* 抱歉，我，呃...\n  我不知道怎么着陆啊！{#x2}{^20}{%}"],
      run5: [">{*}{#p/kidd}{#f/7}{#x1}* 我嘞个...{#x2}{^20}{%}"],
      run6: [">{*}{#p/kidd}{#f/7}{#x1}* 救命啊！！！{#x2}{^20}{%}"],
      run6a: [
         ">{*}{#p/kidd}{#f/7}{#x1}* 别{@fill=#ff0}呆呆站着{@fill=#fff}了，\n  快{@fill=#ff0}过来帮我{@fill=#fff}啊，伙计！！！{#x2}{^20}{%}"
      ],
      run6b: [">{*}{#p/kidd}{#f/7}{#x1}* 快来救我啊！！！{#x2}{^20}{%}"],
      run6c: [">{*}{#p/kidd}{#f/7}{#x1}* 我...\n* 我-我停不下来...！{#x2}{^20}{%}"],
      run6d: [
         ">{*}{#p/kidd}{#f/7}{#x1}* 你在干什么啊！？{#x2}{^20}{%}",
         ">{*}{#p/kidd}{#f/7}{#x1}* 啊...！{#x2}{^20}{%}"
      ],
      run7: [
         ">{#p/kidd}{#f/4}* 呃... 哟... 哟... 伙计...",
         ">* 如...\n* 如果你打算伤害\n  我的朋友...",
         ">* 你必须先通过我这关，\n  才行。"
      ],
      run8: [
         ">{#p/kidd}{#f/3}* 她走掉了...",
         ">{#f/1}* 哟，你真是救了我一命。",
         ">{#f/3}* 虽然我本来是想\n  来救你的啦。",
         ">{#f/2}* 哈哈。",
         ">{#f/3}* ...老兄，\n  我感觉好累啊...",
         ">{#f/4}* 我觉得我该回家了。",
         ">{#f/7}* 我...\n* 我打赌我的父母现在\n  一定担心死我了！"
      ],
      run9: [">{#p/kidd}{#f/13}* 待... 待会见，伙计！"],
      run10: [
         ">{#p/kidd}* 安黛因...\n* 你....\n* 你救了我！",
         ">* 啊？\n* 那个人类跑掉了？",
         ">* 哟，你不要乱说...",
         ">* 那个人类肯定是去\n  找人帮忙了！",
         ">* 随时都会回来的！",
         ">* ...",
         ">* 好-好吧，我会回家的..."
      ],
      run11: (charged: boolean) => [
         ">{#p/kidd}* 安黛因...",
         ">* 你救了我...？",
         ">* 哟... 我...\n* 我还以为我刚刚就要完蛋了。\n* 哈哈。",
         ">* ...等等，你还好吗？\n* 你看起来摔的很重的样子...",
         ">* 这-这都是我的错。\n* 我应该要离他远一点\n  才对，就像你说的那样。",
         charged
            ? ">* 那人类只顾着跟你战斗\n  完全没来救我..."
            : ">* 那个人类只是站在原地...\n* 等着...\n* 等着我掉下去。",
         ">* 我当时真的好害怕，而你...",
         ">* 什么？\n* 你说你现在就要去找那个人类\n  战斗？",
         ">* 但你看上去好像受伤了...\n* 你该休息的，哈哈...",
         ">* ...",
         ">* 战-战士从来都不需要休息？",
         ">* 安黛因...\n* 你真的很酷啊。"
      ],
      sansSentry: () =>
         SAVE.data.b.svr
            ? [">{#p/human}* (This sentry station strikes you as rather unnecessary.)"]
            : world.darker
               ? [">{#p/basic}* 一个哨站。"]
               : [">{#p/basic}* Sans's second sentry station...", ">* As if the first one wasn't already enough."],
      sansSentryBack: () =>
         !world.genocide && SAVE.data.n.state_starton_papyrus === 1
            ? [">{#p/human}* (You look under the shelf...)", ">{#p/basic}* It's a box of bones."]
            : [
               ">{#p/human}* (You look under the shelf...)",
               ...(SAVE.data.b.svr
                  ? [
                     [
                        ">{#p/asriel1}{#f/13}* The notes in here are actually really interesting.",
                        ">{#f/17}* Don't you know anything about time travel?",
                        ">{#f/15}* I had a theory that my power to RESET was time travel...",
                        ">{#f/13}* ... but I never did prove it."
                     ],
                     [
                        ">{#p/asriel1}{#f/13}* There's a lot of different theories I've tried to prove.",
                        ">{#f/13}* Quantum gravity, simulation theory, the Skasis paradigm...",
                        ">{#f/17}* In hindsight, I might have spent a little too much time on them.",
                        ">{#f/20}* Not that it made it any less interesting!"
                     ],
                     [
                        ">{#p/asriel1}{#f/16}* I am surprised that Sans even keeps this around.",
                        ">{#f/3}* He used to work at the lab, though, so...",
                        ">{#f/4}* I guess it could just be a sentimental thing."
                     ],
                     [
                        ">{#p/asriel1}{#f/13}* I never used to understand why monsters are so sentimental...",
                        ">{#f/17}* ... but my years as a star changed that forever."
                     ]
                  ][Math.min(asrielinter.sansSentryBack++, 3)]
                  : [">{#p/basic}* It's a series of notes on time travel."])
            ],
      secretcallA: [
         ">{#s/phone}{#p/event}* 铃铃，铃铃...",
         ">{#p/papyrus}{#f/9}PSST, THIS IS PAPYRUS!",
         ">{#f/0}AT THE MOMENT, I AM STILL HIDING IN MY SAFE PLACE.",
         ">{#f/4}I HOPE YOU'RE NOT GETTING INTO TROUBLE...",
         ">{#f/4}BECAUSE IF YOU ARE...",
         ">{#f/9}I'D HAVE TO COME OVER THERE AND DO SOMETHING ABOUT IT!",
         ">{#f/6}... WHICH I CAN'T DO, BECAUSE OF THE CURRENT SITUATION.",
         ">{#f/7}SO DON'T GET INTO ANY TROUBLE!",
         ">{#f/5}...",
         ">{#f/5}PAPYRUS OUT...",
         ">{#s/equip}{#p/event}* 滴..."
      ],
      secretcallB: [
         ">{#s/phone}{#p/event}* 铃铃，铃铃...",
         ">{#p/papyrus}{#f/0}PSST, IT'S PAPYRUS AGAIN.",
         ">{#f/5}WOWIE... IT MUST BE GETTING LATE BY NOW.",
         ">{#f/6}ARE YOU WELL?\nHAS ANYONE ELSE BEEN... KILLED?",
         ">{#f/5}THESE ARE THE QUESTIONS I ASK MYSELF EVERY DAY.",
         ">{#f/4}GRANTED, I'VE ONLY BEEN IN HIDING FOR A SHORT TIME.",
         ">{#f/7}BUT STILL!!!",
         ">{#f/5}...",
         ">{#f/4}... YOU MUST BE NEARLY OUT OF THE FOUNDRY BY NOW.",
         ">{#f/5}I WISH I COULD DO MORE TO HELP, BUT ALAS...",
         ">{#f/3}IT WOULD BE UNSAFE FOR ME TO RETURN RIGHT NOW.",
         ">{#f/9}S-STILL!!!\nI KNOW YOU WON'T LET ME DOWN!",
         ">{#f/5}...",
         ">{#f/5}PAPYRUS OUT...",
         ">{#s/equip}{#p/event}* 滴..."
      ],
      spider1: () => [">{#p/basic}* ...嗯？"],
      spider2: () =>
         badSpider()
            ? [">{#p/basic}* 黑暗中，有东西在前进。"]
            : [">{#p/basic}* 黑暗中，有人在走动。"],
      spider3: () => (badSpider() ? [">{#p/basic}* 它十分强大..."] : [">{#p/basic}* 那人十分好奇..."]),
      spider4: () =>
         badSpider() ? [">{#p/basic}* 它极其危险..."] : [">{#p/basic}* 那人神神秘秘..."],
      spider5: () => (badSpider() ? [">{#p/basic}* 它..."] : [">{#p/basic}* 那人..."]),
      spider6: () =>
         badSpider()
            ? [
               ">{#p/basic}* ...将会葬身于此。",
               ">* 你以为能轻易逃得掉吗，亲？",
               ">* 啊哈哈~\n* 你欠下的血债，可有的还！"
            ]
            : [
               ">{#p/basic}* ...会被我在此拦住。",
               ">* 你以为过了特战队那关，\n  就万事大吉了，亲？",
               ">* 啊哈哈~\n* 你可真是天真！"
            ],
      spookydate0x: pager.create(
         0,
         [">{#p/sans}* hey, i respect what you did back there.", ">{#f/3}* thanks."],
         [">{#p/sans}{#f/2}* keep it up, and i might even even take you out for dinner."]
      ),
      spookydate0y: [
         ">{#p/basic}* Snas的后脑勺上\n  画着一双眼睛。",
         ">{#p/basic}* 感觉不太可靠的样子。"
      ],
      spookydate0z: [
         ">{#p/basic}* 令人惊讶的是，\n  衫斯脑袋的侧面\n  没有画耳朵。",
         ">{#p/basic}* 去后面看看..."
      ],
      spookydate0: pager.create(
         0,
         [">{#p/sans}* 谢谢你请我吃饭，\n  伙计。", ">* 很高兴能畅聊一番。"],
         [">{#p/sans}{#f/2}* 也许我们过会还可以\n  一起去吃个晚饭。"]
      ),
      spookydate1: pager.create(
         0,
         () => [
            ">{#p/sans}* 嘿，我听说你和我的兄弟\n  和好了。\n* 就是那个伟大的帕派瑞斯。",
            ">{#f/2}* 嗯... \n  我觉得这也是一场\n  {@fill=#ff0}伟大的胜利{@fill=#fff}。",
            ">{#f/0}* 我们去烤尔比那庆祝一番，\n  咋样？",
            ">{#f/3}* 获得了帕派瑞斯的好感，你就\n  在我内心有了一席之地。",
            choicer.create("* （你要怎么回答？）", "走吧", "不了")
         ],
         () => [">{#p/sans}* my offer remains.\n* grillby's?", choicer.create("* （你要怎么回答？）", "走吧", "不了")]
      ),
      spookydate2a: () => [">{#p/sans}* 那行，我会特意为你从工作中\n  抽身的..."],
      spookydate2b: () => [
         ">{#p/sans}* 那行，随你便了。",
         ...(SAVE.data.n.sans_doge_warning++ < 1
            ? [
               ">{#p/sans}* just don't complain if you get in a fight and get hurt...",
               ">{#p/sans}* ... all because you forgot to eat something."
            ]
            : [])
      ],
      spookydate3: [">{#p/sans}* 这里。\n* 我知道一条捷径。"],
      spookydate4: [">{#p/sans}* 很快的捷径，不是吗？"],
      spookydate5: [">{#p/sans}* 嘿，各位。"],
      spookydate6: [">{#p/basic}* 好啊，衫斯。\n{#x1}* 嘿呀，衫衫~"],
      spookydate7: [">{#p/basic}* 嘿，衫斯。\n{#x1}* （嗨，衫斯。）"],
      spookydate8: [">{#p/basic}* 我听说你用烈焰烧烤把酒吧\n  给点燃了，是这样吗？"],
      spookydate9: [
         ">{#p/sans}{#f/3}* 嗯？\n* 不，那东西完全无害。",
         ">{#f/2}* 能让这酒吧燃起来的\n  只有我的招牌幽默笑话。"
      ],
      spookydate9x: [">{#p/sans}{#f/3}* gee grillby, where'd everybody go?"],
      spookydate9y: [
         ">{#p/basic}{#npc/a}* ...\n* ...\n* ...",
         ">* ... Grillbz doesn't mention customers, but says seeing you is a nice relief."
      ],
      spookydate9z: [">{#p/sans}{#f/0}* how strange."],
      spookydate10: [">{#p/sans}* 为什么不过来坐一下呢，\n  伙计？"],
      spookydate11: [
         ">{#p/sans}* 嗷哟，小心你坐的地方。",
         ">{#f/2}* 有些怪咖会把放屁垫\n  放在座位上。",
         ">{#f/0}* ... 那么，来点餐吧。\n* 你呲点啥？",
         ">{#p/human}* （你要怎么回答？）{!}\n§shift=64§烈焰\n§shift=64§烤尔比§shift=56§小汉堡{#c/0/8/7}",
         ">{#p/sans}{#f/2}* 嘿，听上去挺不错。"
      ],
      spookydate12a: [">{#p/sans}* 烤尔比，给我们来两份\n  烈焰你自己。"],
      spookydate12b: [">{#p/sans}* 烤尔比，给我们来两份小汉堡。"],
      spookydate13: () => [
         ">{#p/sans}* 那么，你觉得我兄弟的攻击\n  咋样？",
         choicer.create("* （你要怎么回答？）", "简单", "难爆")
      ],
      spookydate14a: [
         ">{#p/sans}* 简单？\n* 不会吧。",
         ">{#f/3}* 帕派瑞斯的攻击远没有那么\n  简单。",
         ">{#f/0}* 你会为他制作这些攻击的时长\n  而感到惊讶。",
         ">{#f/0}* 哦，好吧。\n* 至少他休息了。",
         ">{#f/2}* 我是说，他把他的攻击手册\n  带出来了。"
      ],
      spookydate14b: [
         ">{#p/sans}{#f/0}* 跟我说说看。",
         ">{#f/3}* 有一次，在经过了\n  漫长一天的攻击修改后...",
         ">{#f/0}* 帕派瑞斯向我透露了\n  他先前的所有制作成果。",
         ">{#f/0}* 说实话，在看到的那一刻，\n  我大受震撼。",
         ">{#f/2}* 也许有朝一日，我会设计\n  独属于我的攻击。"
      ],
      spookydate15: [">{#p/sans}* 吃的来了。"],
      spookydate16: [
         ">{#p/sans}* 不管怎样，有一点你得承认：\n  他成功地超越了自我。",
         ">{#f/0}* 他的那些攻击设计就是\n  很好的例子。",
         ">{#f/3}* 不久前，帕派瑞斯去拜访了\n  皇家守卫队队长...",
         ">{#f/0}* 并恳求她让他加入\n  皇家守卫。",
         ">{#f/3}* 唉，她直接当着他的面把门\n  摔上了。\n* 经典的安黛因式作风。",
         ">{#f/0}* 但几个小时后，当帕派瑞斯\n  带着他的设计归来时...",
         ">{#f/0}* 安黛因大受震撼，所以她\n  决定给予他...",
         ">{#f/2}* ... 好吧，咱姑且叫做\n  “军人般的训练”。"
      ],
      spookydate17: [">{#p/sans}* 哦对了，我想问你点事来着。"],
      spookydate18: () => [
         ">{#p/sans}{#f/3}* 你曾听说过一种\n  {@fill=#ff0}会说话的星星{@fill=#fff}吗？",
         choicer.create("* （你要怎么回答？）", "是", "否")
      ],
      spookydate19a: [
         ">{#p/sans}* 原来你都知道啊。",
         ">{#p/sans}* {@fill=#003cff}讯星{@fill=#fff}。"
      ],
      spookydate19b: [">{#p/sans}* 那么，我来告诉你吧\n* 它叫{@fill=#003cff}讯星{@fill=#fff}。"],
      spookydate20: [
         ">* 工厂到处都是。",
         ">* 如果它们接收到一条讯息，\n  就会一遍又一遍地重复着...",
         ">{#f/3}* 怎样？",
         ">{#f/0}* 其实，有一天，帕派瑞斯\n  对我讲了一些有趣的事。",
         ">* 有些时候，当四下无人...",
         ">* 一颗星星就会从天上飞下来，\n  对他说悄悄话。",
         ">* 有赞扬...\n* 有建议...\n* 有鼓励...",
         ">{#f/3}* ...也有预言。",
         ">{#f/0}* 很诡异，对吗？",
         ">* 肯定是谁用了讯星对他玩了\n  什么诡计。",
         ">* 帮我留意一下，行吗？",
         ">* 谢了。"
      ],
      spookydate21: [">{#p/sans}* ...呃，烤尔比。\n* 能帮忙把雅莫万用酱\n  递给我吗？"],
      spookydate22: [">{#p/sans}{#f/8}* 真是美味啊。"],
      spookydate23: [
         ">{#p/sans}{#f/8}* 行吧，我要回到我的\n  岗位上了。",
         ">{#f/8}* 对了，\n  记得把吃的带上再出门。",
         ">{#f/9}* 后面可能会用上。"
      ],
      telescopeX: pager.create(
         0,
         () => [
            ">{#p/sans}* 我在考虑经营\n  望远镜生意。",
            ">{#f/3}* 放在我旁边的\n  就是所谓\n  高级望远镜。",
            ">{#f/3}* 我本打算明天再\n  开放给公众...",
            SAVE.data.b.voucher
               ? ">{#f/2}* 但因为你有那张\n  高级会员券，\n  所以你可以提前用。"
               : ">{#f/2}* 但咱俩很熟，\n  所以你可以提前用。",
            ">{#f/0}* 肿么样？",
            choicer.create("* （你要怎么回答？）", "是", "否")
         ],
         () => [">{#p/sans}{#f/2}* 要试试\n  我的望远镜吗？", choicer.create("* （你要怎么回答？）", "是", "否")]
      ),
      telescopeY: () =>
         SAVE.data.b.voucher
            ? ((SAVE.data.b.f_state_voucher = true),
               [
                  ">{#p/sans}* 让我猜猜...\n* 是坏掉了吗？",
                  ">{#f/3}* 哦，抱歉，\n  我以为你知道呢。",
                  ">{#f/2}* 高级会员是需要\n  付费订阅的。",
                  ...(world.kiddo
                     ? [
                        ">{#p/kidd}{#f/2}* 你在开玩笑，对吧？",
                        ">{#p/sans}{#f/0}* 没。\n* 付费订阅。",
                        ">{#p/kidd}{#f/1}* 可恶！"
                     ]
                     : [])
               ])
            : [
               ">{#p/sans}* 让我猜猜...\n* 是坏掉了吗？",
               ">{#f/3}* 哦，抱歉，\n  我以为你知道呢。",
               ">{#f/2}* 要使用高级望远镜\n  需要你具有\n  高级会员资格。",
               ...(world.kiddo
                  ? [
                     ">{#p/kidd}{#f/1}* 如果我拿出会员券呢？",
                     ">{#p/sans}{#f/0}* 哦。\n* 这个嘛，就需要\n  付费订阅了。",
                     ">{#p/kidd}{#f/1}* 可恶！"
                  ]
                  : [])
            ],
      telescopeZ: [">{#p/sans}{#f/2}* 哎呀..."],
      temmiepat1: () => [
         ">{#p/tem}{#npc/a}* 求...\n* 提咪听说银类喜翻\n  摸摸提咪...",
         ">* 尼想...\n* 摸摸嘛？？？",
         choicer.create("{#npc}* （你要怎么回答？）", "素的。", "卜要！")
      ],
      temmiepat2a: [">{#p/human}* （你摸了摸提米。）", ">{#p/tem}{#npc/a}* 呜哇哦哇哦哇哦....."],
      temmiepat2b: [">{#p/tem}{#npc/a}* ...", ">{#p/tem}{#npc/a}* Go away."],
      temmiepat3a: [">{#p/human}* （你继续摸提米。）", ">{#p/tem}{#npc/a}* 呜哇哦哇哦哇哦....."],
      temmiepat3b: [">{#p/tem}{#npc/a}* ..."],
      temstatue: () =>
         SAVE.data.b.svr
            ? [
               ">{#p/human}* （你按下了雕像后的开关。）",
               ">{#p/human}* (The riddle here describes a statue like this one and hints at a sequence of notes.)",
               ">{#p/human}* (It also mentions bringing an item to a specific opposing room.)"
            ]
            : [
               ">{#p/human}* （你按下了雕像后的开关。）",
               ">{#p/basic}* ...这里有个谜题。",
               ">* \"Flip the switch and bring a friend to a place you've been before again...\"",
               ">* \"A figure not unlike my own, a statue carved and set in stone.\"",
               ">* \"Follow the sequence of notes divined, to unlock the path to the other side...\"",
               ">* \"Bring the item to the room nextdoor, and all the power will be yours.\""
            ],
      temstatueAftuh: () =>
         SAVE.data.b.svr
            ? [
               ">{#p/human}* (The riddle here describes a statue like this one and hints at a sequence of notes.)",
               ">{#p/human}* (It also mentions bringing an item to a specific area.)"
            ]
            : [
               ">{#p/basic}* \"Flip the switch and bring a friend to a place you've been before again...\"",
               ">* \"A figure not unlike my own, a statue carved and set in stone.\"",
               ">* \"Follow the sequence of notes divined, to unlock the path to the other side...\"",
               ">* \"Bring the item to the room nextdoor, and all the power will be yours.\"",
               ">* ...这里的开关\n  已经被拉下来了。"
            ],
      temstatueNormuh: () =>
         SAVE.data.b.svr
            ? [">{#p/human}* (The sign emphasizes the fame of the statue.)"]
            : [">{#p/basic}* “提咪的雕像... 超级著民”\n* “超级！！！！！！！！！”"],
      shard1: [">{#p/basic}* 一堆玻璃碎片。"],
      shard2: () => [choicer.create("* (Stomp on them?)", "是", "否")],
      shard3: [">{#p/human}* (You decide not to stomp.)"],
      shard4: [">{#p/basic}* With the might of your indomitable soles, you charged up the ultimate power move!"],
      shard5: () => [
         ">{#p/basic}* The shards have been scattered across the room.",
         ">{#p/undyne}{#f/8}* PFFT-\n* OH MY GOD!!!",
         ...(SAVE.data.b.undyne_respecc
            ? [">{#p/undyne}{#f/1}* That's the kind of attitude I like to see!"]
            : [
               ">{#p/undyne}{#f/17}* I mean, uh, I mean, how could you do that to my kitchen...!",
               ">{#p/undyne}{#f/4}* ..."
            ])
      ],
      sanscall2: () => [
         ">{#s/phone}{#p/event}* 铃铃，铃铃...",
         ">{#p/sans}{#f/0}* 嘿，你在吗？",
         ...(SAVE.data.n.state_foundry_muffet === 1
            ? [
               ">{#f/3}* it's been a while since i heard from you.",
               ">{#f/2}* didja fall into a wormhole or something?"
            ]
            : [
               ">{#f/3}* 有个孩子好像等不及\n  想再见到你了。",
               ">{#f/2}* 你是等我走了之后\n  交了个新朋友吗？"
            ]),
         ">{#f/0}* ...哈。",
         ">{#f/0}* 我猜你现在还好。",
         ">{#f/3}* 我真的很想密切关注你，\n  但是...",
         ">{#f/0}* 出于某些原因，\n  这台昂贵的望远镜\n  没法透过墙壁看到东西。",
         ">{#f/2}* 我被骗了。\n* 我得打电话给我的\n  保费欺诈代理人。",
         ...(world.population === 0
            ? [
               ">{#f/0}* 现在，\n  你应该不会有事的。",
               ">{#f/3}* the area ahead of you seems pretty empty, by my estimate.",
               ">{#f/2}* but hey.\n* i could be wrong."
            ]
            : world.killed5
               ? [
                  ">{#f/0}* in the meantime, you shouldn't have too much more trouble.",
                  ">{#f/3}* the area ahead of you will be evacuated soon.",
                  ">{#f/2}* hmm... i wonder if anyone will still be out there."
               ]
               : geno()
                  ? [
                     ">{#f/0}* in the meantime, just be careful what you do next.",
                     ">{#f/3}* it'd be a shame if we had to evacuate the foundry as well."
                  ]
                  : antiAteThreshold()
                     ? [
                        ">{#f/0}* in the meantime, just be careful who you talk to.",
                        ">{#f/3}* rumor has it, someone's been roughhousing folks in the factory."
                     ]
                     : [
                        ">{#f/0}* in the meantime, just be careful who you talk to.",
                        ">{#f/3}* 有传言说，\n  有谁在垃圾处理站附近\n  大搞破坏。"
                     ]),
         ">{#s/equip}{#p/event}* 滴..."
      ],
      trivia: {
         f_bbox: [
            ">{#p/basic}* A bastion box.\n* There's a human inside...",
            ">{#p/basic}* Seems this one was adopted by Gerson."
         ],
         ghostparty1: pager.create(
            0,
            () => [
               ">{#p/finalghost}* Hello there.\n* I still remember the first time we met...",
               ...[
                  [
                     ">{#p/finalghost}* Toriel was so proud of you for talking to me.",
                     ">* Personally, I don't think too much about how I talk to people, so...",
                     ">* I'm not sure what else to say about that."
                  ],
                  [
                     ">{#p/finalghost}* ... much to my dismay.",
                     ">* Being forced out of your dummy outright is kind of annoying."
                  ],
                  [
                     ">{#p/finalghost}* It was rather silly how you ran away from me.",
                     ">* Toriel had every right to be worried about you running from an inanimate object."
                  ],
                  [
                     ">{#p/finalghost}* ... not that I have any right to.",
                     ">* I mean, how could you actually be that boring?\n* It must be a skill."
                  ],
                  [
                     ">{#p/finalghost}* ... ha...",
                     ">* ... maybe, when I get another vessel, the two of us can... do our thing again.",
                     ">* You remember, don't you?"
                  ],
                  [
                     ">{#p/finalghost}* ... much to my dismay.",
                     ">* Being forced to move after such a long period of blissful inanimateness...",
                     ">* It was very uncomfortable."
                  ],
                  [
                     ">{#p/finalghost}* Toriel was so taken aback by your flirtatious ways.",
                     ">* Personally, I thought it was hilarious.",
                     ">* I was laughing on the inside."
                  ]
               ][SAVE.data.n.state_wastelands_dummy],
               ">* Anyway...",
               ">* We all decided to hang out at Blooky's before leaving for the new homeworld.",
               ">* I will say, Blooky sure had some \"interesting\" music queued for download here...",
               ">* What's a \"Hyper Rage\" anyway?",
               ">{#p/basic}* A song I wish I hadn't made.",
               ">{#p/finalghost}* Oh?\n* You made this?",
               ">{#p/basic}* Unfortunately, mew.",
               ">{#p/finalghost}* I can see why you would want to forget about it."
            ],
            [">{#p/finalghost}* She's looking to move past her violent ways."]
         ),
         ghostparty2: pager.create(
            0,
            [
               ">{#p/basic}* So, being an angry dummy got boring after a while.",
               ">* Then I asked Alphys to make me a replica of her favorite Mew Mew doll, mew!",
               ">* Wow.\n* Wow!\n* WOW!!",
               ">* I haven't felt this happy in a long time."
            ],
            [">{#p/basic}* Sometimes all it takes is the right vessel, mew!!"]
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
               ">{#e/mettaton/9}* ... OR SOMETHING LIKE THAT."
            ],
            [">{#p/mettaton}{#e/mettaton/9}* IF YOU EVER NEED AN ACTOR, YOU KNOW WHO TO CALL."]
         ),
         sleepingdogs: () =>
            world.darker
               ? [
                  ">{#p/basic}* 一只站得笔挺的狗子睡得正香。",
                  ...(world.goatbro && SAVE.flag.n.ga_asrielDogepoke++ < 1
                     ? [">{#p/asriel2}{#f/10}* 不得不说，她就是这种货色。"]
                     : [])
               ]
               : [
                  ">{#p/basic}* 这只狗看起来像是睡着了，\n  但它的姿势是一种极度的\n  战备状态。",
                  ">{#p/basic}* 不愧是空降犬！"
               ],
         napstacouch: pager.create(
            0,
            () =>
               SAVE.data.b.svr
                  ? [">{#p/human}* (The couch appears to be new, but something tells you it's not.)"]
                  : [
                     ">{#p/basic}* This couch looks just as worn as it does brand-new.",
                     ...(ghostpartyCondition()
                        ? [
                           ">{#p/basic}* We're ghosts, so we don't really need a couch, mew.",
                           ">* We just thought the room looked better with one in it!",
                           ">{#p/mettaton}* OF COURSE.\n* ANY GOOD LIVING SPACE REQUIRES AT LEAST ONE COUCH!",
                           ">{#p/mettaton}* PREFERABLY MTT-BRAND.",
                           ">{#p/finalghost}* This seems like an entirely pointless requirement."
                        ]
                        : [])
                  ],
            () =>
               SAVE.data.b.svr
                  ? [">{#p/human}* (The couch appears to be new, but something tells you it's not.)"]
                  : [">{#p/basic}* This couch looks just as worn as it does brand-new."]
         ),
         f_armor_sign: () =>
            SAVE.data.b.svr
               ? [">{#p/human}* (The sign warns of dogs who appear to be asleep.)"]
               : [">{#p/basic}* “小心睡觉的狗。”"],
         f_backsign: () =>
            SAVE.data.b.svr
               ? [">{#p/human}* (The sign speaks of strength of will in times of uncertainty.)"]
               : [">{#p/basic}* \"Even when you're lost, the will to find yourself shows through.\""],
         f_cheesetable: () =>
            SAVE.data.b.svr
               ? [">{#p/human}* (Something about this cheese doesn't sit right with you.)"]
               : world.darker
                  ? [">{#p/basic}* 幻象罢了。"]
                  : SAVE.data.n.plot === 72
                     ? [">{#p/basic}* Despite being holographic, it looks like a small slice of cheese was taken..."]
                     : [">{#p/basic}* 全息奶酪。", ">{#p/basic}* 桌子也是全息的。"],
         f_creamsign: () =>
            SAVE.data.b.svr
               ? [">{#p/human}* (The sign declares the monsters' ownership of the outpost.)"]
               : world.population_area('s') < 6 || world.genocide || SAVE.data.n.plot === 72 // NO-TRANSLATE

                  ? [">{#p/basic}* \"We claim this outpost as our own, never to be taken prisoner again.\""]
                  : [">{#p/basic}* 象形文字被21种不同的口味\n  涂盖住了。"],
         f_doge_sign: () =>
            SAVE.data.b.svr
               ? [">{#p/human}* (The sign derides boxes for their lack of real-time utility.)"]
               : [
                  ">{#p/basic}* “这是一个箱子。”",
                  ">* “你可以把物品放进去\n   或者拿出来。”",
                  ">* “但你为什么要那么做？”\n* “东西放在箱子里的时候，\n   你又用不了。”",
                  ">* “谨上，一个箱子批评者。”"
               ],
         f_doge1: () =>
            SAVE.data.b.svr
               ? [">{#p/human}* (The sign details the difference in power between human and monster SOULs.)"]
               : [
                  ">{#p/basic}* “人类为什么要进攻？”\n* “诚然，他们似乎无所畏惧。”",
                  ">* “人类非常强大。\n   所有怪物的灵魂加起来...”",
                  ">* “...才能和一个人类灵魂的\n   力量相当。”"
               ],
         f_doge3: () =>
            SAVE.data.b.svr
               ? [">{#p/human}* (The sign outlines a key weakness of human SOULs and its consequences.)"]
               : [
                  ">{#p/basic}* “但人类有一个弱点。\n   讽刺的是，\n   这正是他们灵魂的力量。”",
                  ">* “他们的灵魂即使在他们死后\n   也可以在人体之外持续存在。”",
                  ">* “如果一个怪物打败了一个人类，\n   怪物就可以取走人类的灵魂。”",
                  ">* “一个有着人类灵魂的怪物...\n   一个拥有深不可测的力量的\n   宇宙生物。”",
                  ...(world.goatbro && SAVE.flag.n.ga_asrielBeast++ < 1
                     ? [">{#p/asriel2}{#f/15}* Cosmic doesn't even BEGIN to cover it..."]
                     : [])
               ],
         f_doge5: () =>
            SAVE.data.b.svr
               ? [">{#p/human}* (The sign depicts something the likes of which you've never seen before.)"]
               : [
                  ">{#p/basic}* 这是一幅悲惨的\n  太空生物的插画...",
                  ">* 这幅画有点让人不安。",
                  ...(world.goatbro && SAVE.flag.n.ga_asrielDrawing++ < 1
                     ? [
                        ">{#p/asriel2}{#f/5}* Look, $(name)!\n* It's us!\n* ... sort of.",
                        ">{#f/4}* ... is that really how they think we looked?"
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
                     ">{#f/16}* Either from the early outpost days, or the old homeworld."
                  ],
                  [
                     ">{#p/asriel1}{#f/13}* I did hear something about a certain artifact...",
                     ">{#f/15}* One so dangerous, its use was banned in the war.",
                     ">{#f/16}* I'm not sure if Gerson ever sold it, though.",
                     ">{#f/13}* Even he might not be old enough to know if it exists."
                  ],
                  [
                     ">{#p/asriel1}{#f/15}* Knowledge about that artifact's existence...",
                     ">{#f/13}* It'd have to be within someone who was born even before the war.",
                     ">{#f/16}* Someone like that would know all about that sort of thing."
                  ]
               ][Math.min(asrielinter.f_gersonshop++, 2)]
               : [">{#p/basic}* \"Gerson's Bits 'n' Bobs!\"\n* \"A humble store for all your factory life needs!\""],
         f_hub_sign: () =>
            SAVE.data.b.svr
               ? [">{#p/human}* (The sign lists off what lies in each direction.)"]
               : [
                  ">{#p/basic}* “向左 - 暗区”\n* “向前 - 安黛因的家”\n* “向右 - 葛森的商店”",
                  ">{#p/basic}* “向后 - 蜗牛保护区”"
               ],
         f_lobbywindow: [
            ">{#p/human}* （你觉得你已经从另一个角度\n  看到过这样的窗户了。）"
         ],
         f_shinycab: () =>
            SAVE.data.b.svr
               ? [
                  [
                     ">{#p/asriel1}{#f/13}* Looks like it already cleaned out the room...",
                     ">{#f/17}* No trash here!"
                  ],
                  [
                     ">{#p/asriel1}{#f/15}* Unless you consider yourself a piece of trash.",
                     ">{#f/16}* Knowing you, that wouldn't surprise me.",
                     ">{#f/31}* You'd probably be proud of it or something."
                  ],
                  [
                     ">{#p/asriel1}{#f/13}* ... come on.",
                     ">{#f/17}* You don't REALLY believe you're a piece of trash, do you?"
                  ]
               ][Math.min(asrielinter.f_shinycab++, 2)]
               : world.darker
                  ? [">{#p/basic}* 一台垃圾处理器。"]
                  : [
                     ">{#p/basic}* 一个垃圾处理箱。\n* 当它启动时，极热的气体\n  会充斥整个房间。",
                     ">{#p/basic}* 你活不下来的。"
                  ],
         f_path1: () =>
            SAVE.data.b.svr
               ? [">{#p/human}* (The sign describes how a being can leave the force field.)"]
               : [
                  ">{#p/basic}* “当人类把我们困住时，\n   他们用力场把我们\n   封印在了这里。”",
                  ">* “唯有拥有强大灵魂的存在\n   才能离开。”"
               ],
         f_path2: () =>
            SAVE.data.b.svr
               ? [">{#p/human}* (The sign describes how the force field can be broken.)"]
               : [
                  ">{#p/basic}* “只有一种方法能把我们\n   解放出来。”",
                  ">* “如果有一股强大的，\n   相当于七个人类灵魂的力量，\n   施加到力场上...”",
                  ">* “力场就会被摧毁。”"
               ],
         f_path3: () =>
            SAVE.data.b.svr
               ? [">{#p/human}* (It appears this sign was very wrong indeed.)"]
               : [
                  ">{#p/basic}* “但这个被诅咒的地方\n   甚至不在太阳系里。”",
                  ">* “人类根本不可能找到这里。”",
                  ">* “我们将永远被困在这里。”"
               ],
         f_puzzle1_sign: () =>
            SAVE.data.b.svr
               ? world.postnoot && world.nootflags.has('f_puzzle1') // NO-TRANSLATE

                  ? [
                     ">{#p/human}* (The sign tells you to ignore the puzzle outright.)",
                     ...[
                        [
                           ">{#p/asriel1}{#f/15}* Whoever wrote that must've had a bad sense of humor...",
                           ">{#f/17}* You'd have to be REALLY bored to ignore a puzzle this simple."
                        ],
                        [
                           ">{#p/asriel1}{#f/9}* What are you looking at me for?\n* I love puzzles.",
                           ">{#f/4}* Big ol' puzzle lover right here."
                        ],
                        [">{#p/asriel1}{#f/15}* ..."]
                     ][Math.min(asrielinter.f_puzzle1_sign++, 2)]
                  ]
                  : [">{#p/human}* (The sign informs you on how to solve the puzzle.)"]
               : world.postnoot && world.nootflags.has('f_puzzle1') // NO-TRANSLATE

                  ? [">{#p/basic}* \"Walk right into the next room if you don't mind.\"\n* \"And ignore the switch.\""]
                  : [
                     ">{#p/basic}* “移动塔架，\n   引导激光射向接收器。”\n  “然后按下开关。”"
                  ],
         f_puzzle2_sign: () =>
            SAVE.data.b.svr
               ? world.postnoot && world.nootflags.has('f_puzzle2') // NO-TRANSLATE

                  ? [
                     ">{#p/human}* (The sign claims nobody would care about this puzzle.)",
                     ...[
                        [
                           ">{#p/asriel1}{#f/13}* Yeah, puzzles like this just solve themselves sometimes...",
                           ">{#f/17}* What else can I say?"
                        ],
                        [
                           ">{#p/asriel1}{#f/10}* Huh?\n* You think I solved this one for you...?",
                           ">{#f/20}* No way.\n* Puzzles barely interest me at all."
                        ],
                        [">{#p/asriel1}{#f/15}* ..."]
                     ][Math.min(asrielinter.f_puzzle2_sign++, 2)]
                  ]
                  : [">{#p/human}* (The sign informs you on how to solve the puzzle.)"]
               : world.postnoot && world.nootflags.has('f_puzzle2') // NO-TRANSLATE

                  ? [">{#p/basic}* \"Honestly, who cares about this puzzle?\"\n* \"It's not worth it.\""]
                  : [">{#p/basic}* “所有的塔架都必须\n   应用在解谜中。”"],
         f_puzzle3_sign: () =>
            SAVE.data.b.svr
               ? [
                  ">{#p/human}* (The sign declares the decided unfairness of this puzzle as the reason it was shut down.)"
               ]
               : !world.genocide && world.trueKills < 30
                  ? [">{#p/basic}* “谜题公会以该谜题不公平为由\n   关闭了这个谜题。”"]
                  : world.postnoot && world.nootflags.has('f_puzzle3') // NO-TRANSLATE

                     ? [
                        ">{#p/basic}* The contents of this sign have been crossed out...",
                        ">* ... and crossed out again?"
                     ]
                     : [
                        ">{#p/basic}* The contents of this sign have been crossed out...",
                        ">* ... with a distinct sense of illegible chicken-scratch."
                     ],
         f_statue_kidd: () =>
            SAVE.data.b.svr
               ? [">{#p/asriel1}{#f/20}* Er, try standing the other switch."]
               : [">{#p/kidd}{#f/1}* 站在另一个开关上吧！"],
         f_telescope: () =>
            SAVE.data.b.svr
               ? [
                  [">{#p/asriel1}{#f/15}* Frisk.\n* It's no use.\n* Don't even bother."],
                  [
                     ">{#p/asriel1}{#f/13}* Even if you COULD get a premium subscription...",
                     ">{#p/asriel1}{#f/15}* You'd never be able to cancel it."
                  ],
                  [">{#p/asriel1}{#f/16}* There's just too many premium hoops to jump through here."]
               ][Math.min(asrielinter.f_telescope++, 2)]
               : world.darker
                  ? [">{#p/basic}* 一架望远镜。"]
                  : [">{#p/basic}* 这是一架“高级”望远镜。"],
         f_temhistory: () =>
            SAVE.data.b.svr
               ? [">{#p/human}* (The painting depicts a tale of a nondescript nature.)"]
               : world.darker
                  ? [">{#p/basic}* The history of Tem."]
                  : SAVE.data.n.plot === 72
                     ? [">{#p/basic}* Tem history.\n* May its richness and deepness never be forgotten."]
                     : [">{#p/basic}* 提咪的历史。\n* 银河系中最深远\n  最丰富的历史。"],
         f_temhole: () =>
            SAVE.data.b.svr
               ? [">{#p/human}* (Through the hole, you stare into the rumbling underbelly of the factory.)"]
               : world.runaway ||
                  SAVE.data.s.state_foundry_deathroom === 'f_village' || // NO-TRANSLATE

                  world.genocide ||
                  30 <= world.trueKills
                  ? [">{#p/basic}* It's a hole."]
                  : [">{#p/basic}* 有个提米在洞里。\n* 提咪洞。"],
         f_trash: pager.create(
            1,
            [">{#p/basic}* 是垃圾。"],
            () => (world.darker ? [">{#p/basic}* 是垃圾。"] : [">{#p/basic}* 还是垃圾。"]),
            () => (world.darker ? [">{#p/basic}* 是垃圾。"] : [">{#p/basic}* 只是些垃圾..."]),
            () => (world.darker ? [">{#p/basic}* 是垃圾。"] : [">{#p/basic}* 垃圾就是垃圾。"]),
            () => (world.darker ? [">{#p/basic}* 是垃圾。"] : [">{#p/basic}* 垃圾形状的垃圾。"]),
            () => (world.darker ? [">{#p/basic}* 是垃圾。"] : [">{#p/basic}* 真意外，这是垃圾。"]),
            () => (world.darker ? [">{#p/basic}* 是垃圾。"] : [">{#p/basic}* 垃圾！！！！！！！！"])
         ),
         f_trash1: () =>
            SAVE.data.b.svr
               ? [">{#p/human}* (The tablet seems to describe the lifecycle of a particular kind of flower.)"]
               : world.darker
                  ? [">{#p/basic}* 这台平板上的数据没什么重要的。"]
                  : [
                     ">{#p/basic}* 这是台旧平板电脑。\n* 数据基本都损坏了...",
                     ">* “一朵来自远方的花...\n  第二次生命...\n  星星的形状...”",
                     ">* 你能认出来的就是这些。"
                  ],
         f_trash2: () =>
            SAVE.data.b.svr
               ? [">{#p/human}* (The tablet describes various uses for wormholes.)"]
               : world.darker
                  ? [">{#p/basic}* 这台平板上只记了些毫无意义的琐事。"]
                  : [
                     ">{#p/basic}* 这是一台关于虫洞旅行的\n  平板电脑。",
                     ">* 另外一章节提到了\n  虫洞武器的危险..."
                  ],
         f_trash3: () =>
            SAVE.data.b.svr
               ? [">{#p/human}* (The tablet contains the entire run of a science fiction anime.)"]
               : world.darker
                  ? [">{#p/basic}* 这台平板上存了些视频。\n* 你对视频内容不感兴趣。"]
                  : [
                     ">{#p/basic}* 这是一台上面有\n  科幻动漫的旧平板电脑。",
                     ">* 封面上写着\n  “喵喵星火：全集”。"
                  ],
         f_undynedummy: () =>
            SAVE.data.n.plot === 72
               ? [
                  ">{#p/basic}* I've been thinking of finding a new identity...",
                  ">* The \"Mad Dummy\" shtick just doesn't suit me anymore.",
                  ">* I wonder if Alphys could make me a new body...",
                  ">* Something like... a robo-girl, or... a digi-woman...",
                  ">* Or even a sci-fi doll?"
               ]
               : SAVE.data.b.killed_mettaton
                  ? []
                  : SAVE.data.s.state_foundry_deathroom === 'f_undyne' // NO-TRANSLATE

                     ? [
                        ">{#p/basic}* No.\n* No!\n* NO!!",
                        ">* You killed my only training partner.",
                        ">* How DARE you kill the only person who knows how to hit me properly!?",
                        ...(SAVE.data.n.bad_lizard < 2 && 49 <= SAVE.data.n.plot
                           ? [">* No matter how many dumb game shows I agree to be in to try and distract myself..."]
                           : [">* No matter what lame excuse I come up with..."]),
                        ">* I'll never be able to replace her!"
                     ]
                     : world.goatbro
                        ? [
                           ">{#p/basic}* Seriously.\n* Seriously?\n* SERIOUSLY!?",
                           ">{#p/basic}* You guys are genuinely adorable.",
                           ...(SAVE.flag.n.ga_asrielDummy++ < 1
                              ? [">{#p/asriel2}{#f/13}* Are we... really...", ">{#p/asriel2}{#f/16}* ..."]
                              : [])
                        ]
                        : SAVE.data.n.plot_date > 1.3 && SAVE.data.n.plot_date < 2.1
                           ? SAVE.data.n.state_wastelands_toriel === 0
                              ? [">{#p/basic}* Don't worry.\n* Everything is fine.\n* This happens all the time."]
                              : [">{#p/basic}* 什么。\n* 什么？\n* 什-么-！？", ">{#p/basic}* 这种情况经常发生的。"]
                           : SAVE.storage.inventory.contents.includes('tvm_mewmew') // NO-TRANSLATE

                              ? [
                                 ">{#p/basic}* Yeah, you're so cool with that Mew Mew doll of yours, huh?",
                                 ">{#p/basic}* You think it's so adorable and lovable and...",
                                 ">{#p/basic}* W-what!?\n* I'm not blushing!"
                              ]
                              : 65 <= SAVE.data.n.plot
                                 ? SAVE.data.b.a_state_hapstablook
                                    ? 68 <= SAVE.data.n.plot
                                       ? [">{#p/basic}* You did it, human.", ">{#p/basic}* I'm sorry I ever doubted you."]
                                       : [
                                          ">{#p/basic}* Well.\n* Well!\n* WELL!",
                                          ">* You certainly know how to choose your battles."
                                       ]
                                    : [">{#p/basic}* Ugh.\n* Ugh!\n* UGH!", ">{#p/basic}* My life really sucks right now."]
                                 : 63 <= SAVE.data.n.plot && SAVE.data.b.a_state_hapstablook
                                    ? [
                                       ">{#p/basic}* Hey, aren't you supposed to be in Mettaton's next show?",
                                       ">* What are you doing way back here?",
                                       ">* Come on.\n* Come on!\n* COME ON!!",
                                       ">* Get back in the spotlight so we can go forward with our plan!"
                                    ]
                                    : SAVE.data.n.bad_lizard < 2 && 49 <= SAVE.data.n.plot
                                       ? [
                                          ">{#p/basic}* So.\n* So!\n* SO!",
                                          ">* You're a TV star now, huh?",
                                          ">* Yeah, Mettaton usually has that effect on people."
                                       ]
                                       : SAVE.data.n.plot === 47.2
                                          ? [">{#p/basic}* Ready or not, here she comes!!"]
                                          : SAVE.data.n.state_wastelands_toriel === 0
                                             ? [">{#p/basic}* Hello again!"]
                                             : SAVE.data.b.f_state_dummypunch
                                                ? [
                                                   ">{#p/basic}* 嘿。\n* 嘿！\n* 嘿-！",
                                                   ...(SAVE.data.b.f_state_dummypunch_meanie
                                                      ? [
                                                         ">* You don't hit too bad for a dummy.",
                                                         ">* It's a pity...",
                                                         ">* BECAUSE I'M ALREADY TAKEN!",
                                                         ">* Go find your own dummy and get the hell outta my face!"
                                                      ]
                                                      : [
                                                         ">* Hands off the goods!\n* I ain't rated \"E\" for everyone, you know!",
                                                         ">* Wimpy strikes like yours will never compare to those of Undyne!"
                                                      ])
                                                ]
                                                : SAVE.data.b.f_state_dummyhug
                                                   ? [
                                                      ">{#p/basic}* 嘿。\n* 嘿！\n* 嘿-！",
                                                      ">* ... you're...\n* Actually a pretty good hugger.",
                                                      ">* So... even though I have my fear... I still appreciate the attempt."
                                                   ]
                                                   : SAVE.data.b.f_state_dummytalk
                                                      ? [
                                                         ">{#p/basic}* 嘿。\n* 嘿！\n* 嘿-！",
                                                         ...(SAVE.data.b.f_state_dummytalk_meanie
                                                            ? [
                                                               ">* You've got quite the intimidating stare.",
                                                               ">* It's a shame you wasted it on me...",
                                                               ">* BECAUSE I COULDN'T CARE LESS!"
                                                            ]
                                                            : [
                                                               ">* 把你的眼睛从我身上挪开！\n* 我又不是人人都能评价的，\n  你又不是不知道！",
                                                               ">* 像你这样软弱的凝视\n  永远比不上安黛因那\n  凶狠的凝视！"
                                                            ])
                                                      ]
                                                      : [">{#p/basic}* 什么。\n* 什么？\n* 什-么-！？", ">{#p/basic}* It's a living."],
         f_view: [">{#p/kidd}{#f/14}* Awesome..."],
         f_village_egg: () => [">{#p/basic}* 已经煮得过熟了。"],
         f_village_sign1: () =>
            SAVE.data.b.svr
               ? [">{#p/human}* (The sign welcomes you to the area.)"]
               : [">{#p/tem}* “你吼！！”\n* “欢银来...”\n* “提咪村庄！！！”"],
         f_village_sign2: () =>
            SAVE.data.b.svr
               ? [">{#p/human}* (The sign implores you to check the nearby shop.)"]
               : [">{#p/tem}* “你吼！！”\n* “尼赢改看看...”\n* “提咪百嚯店！！！”"],
         f_village_sign3: () =>
            SAVE.data.b.svr
               ? [">{#p/human}* (The sign agrees with another sign imploring you to check the nearby shop.)"]
               : [">{#p/tem}* “嚎吖！！窝通噫！！”\n* “赢改看看...”\n* “提咪百嚯店！！！”"],
         fstatue: () =>
            SAVE.data.b.svr
               ? [
                  [">{#p/asriel1}{#f/13}* This statue...", ">{#f/15}* Is this supposed to be of me...?"],
                  [
                     ">{#p/asriel1}{#f/13}* I don't remember this being built...",
                     ">{#f/23}* Must've been after I...",
                     ">{#f/22}* ..."
                  ],
                  [">{#p/asriel1}{#f/22}* ..."]
               ][Math.min(asrielinter.fstatue++, 2)]
               : [">{#p/basic}* 这是座古老的、废弃的雕像。"],
         hapstabed: () =>
            SAVE.data.b.svr
               ? [
                  [
                     ">{#p/asriel1}{#f/15}* I doubt even WE'D sleep very well in this bed.",
                     ">{#f/23}* No matter how comfortable that might sound."
                  ],
                  [
                     ">{#p/asriel1}{#f/13}* Yeah.\n* This is a ghost bed, Frisk.",
                     ">{#f/13}* Ghosts have different sorts of needs than... well, not ghosts.",
                     ">{#f/13}* And I'm not just talking about their sleeping arrangements."
                  ],
                  [
                     ">{#p/asriel1}{#f/13}* Ghosts, more than any other kind of monster...",
                     ">{#f/13}* Seem to focus more on the world around them.",
                     ">{#f/15}* It's like they never let what's in front of them...",
                     ">{#f/13}* Distract them from the bigger picture for long.",
                     ">{#f/17}* On second thought, maybe that's why Mettaton loves TV.",
                     ">{#f/16}* Getting the \"bigger picture\" is basically the whole idea..."
                  ],
                  [">{#p/asriel1}{#f/20}* Mettaton and his TV shows, am I right?"]
               ][Math.min(asrielinter.hapstabed++, 3)]
               : world.darker
                  ? [">{#p/basic}* It's a ghost bed."]
                  : SAVE.data.n.plot === 72
                     ? [">{#p/basic}* Just because you saved the galaxy doesn't mean you can sleep on a ghost bed."]
                     : [">{#p/basic}* It's a ghost bed.\n* You'd sleep right through it."],
         hapstabook1: () => [
            ...(SAVE.data.b.svr ? [] : [">{#p/basic}* It's a voicebook."]),
            ">{#p/human}* (You pick up the voicebook and open to the only recorded section.)",
            ">{#p/hapstablook}* Dear diary, volume one...",
            ">* Humans dream of so many fantastical stories, yet when I look out my window...",
            ">* ... all I can see is a wall.",
            ">* Is it right that we monsters have become used to this sad state of living?",
            ">* Is it right that only the youngest children seem to be truly alive?",
            ">* Our sense of wonder has been beaten out of us...",
            ">* There's no denying it now.",
            ">{#p/human}* （你把书放下了。）",
            ...(SAVE.data.b.svr || SAVE.data.b.oops || SAVE.data.n.state_foundry_hapstacom1++ > 0
               ? []
               : [
                  ">{#p/basic}* ... he was always like this in the early days...",
                  ">{#p/basic}* Always wanting everyone to be as happy as he was.",
                  ">{#p/basic}* Especially me."
               ])
         ],
         hapstabook2: () => [
            ...(SAVE.data.b.svr ? [] : [">{#p/basic}* It's a voicebook."]),
            ">{#p/human}* (You pick up the voicebook and open to the only recorded section.)",
            ">{#p/hapstablook}* Dear diary, volume two...",
            ">* I've been binge-watching old human television series.",
            ">* These people aren't like what I've been told... in fact, they're a lot like us.",
            ">* Living, laughing, loving...\n* Hurting and crying.\n* Doing what they believe in.",
            ">* They say humanity is a species that should be feared.",
            ">* But the more I see of them... the more I grow tired of that idea.",
            ">* Monsters aren't all starlight and roses, either.",
            ">{#p/human}* （你把书放下了。）",
            ...(SAVE.data.b.svr || SAVE.data.b.oops || SAVE.data.n.state_foundry_hapstacom2++ > 0
               ? []
               : [
                  ">{#p/basic}* I remember how, when we first met, he was the first one to open up to me.",
                  ">{#p/basic}* It wasn't long before I opened up, too..."
               ])
         ],
         hapstabook3: () => [
            ...(SAVE.data.b.svr ? [] : [">{#p/basic}* It's a voicebook."]),
            ">{#p/human}* (You pick up the voicebook and open to the only recorded section.)",
            ">{#p/hapstablook}* Dear diary, volume three...",
            ">* It's been a hard day at the farm for Blooky and me.",
            ">* Two of the snails we'd been looking after escaped, and we couldn't find them.",
            ">* No matter what I do, something like this always happens.",
            ">* Blooky says it's fine, of course, but they say that about everything.",
            ">* And I wonder why I still bother working here.",
            ">{#p/human}* （你把书放下了。）",
            ...(SAVE.data.b.svr || SAVE.data.b.oops || SAVE.data.n.state_foundry_hapstacom3++ > 0
               ? []
               : [
                  ">{#p/basic}* I tried to help the family out, but with the way things were...",
                  ">{#p/basic}* There wasn't much I could do."
               ])
         ],
         hapstabook4: () => [
            ...(SAVE.data.b.svr ? [] : [">{#p/basic}* It's a voicebook."]),
            ">{#p/human}* (You pick up the voicebook and open to the only recorded section.)",
            ">{#p/hapstablook}* Dear diary, volume four...",
            ">* I was at the store today when I ran into a girl... Alphys, I think?",
            ">* Apparently, she's next in line to be the royal scientist.\n* Who would've thought?",
            ">* Anyway, her and I have become fast friends due to our shared love of humanity.",
            ">* Funny... the previous royal scientist was sympathetic, too.",
            ">* I wonder why that is.",
            ">{#p/human}* （你把书放下了。）",
            ...(SAVE.data.b.svr || SAVE.data.b.oops || SAVE.data.n.state_foundry_hapstacom4++ > 0
               ? []
               : [">{#p/basic}* Oh, if only you knew..."])
         ],
         hapstabook5: () => [
            ...(SAVE.data.b.svr ? [] : [">{#p/basic}* It's a voicebook."]),
            ">{#p/human}* (You pick up the voicebook and open to the only recorded section.)",
            ">{#p/hapstablook}* Dear diary, volume five...",
            ">* Alphys and I have started work on a new project.",
            ">* We'll be taking inspiration from those imaginative humans...",
            ">* ... by starting a new, public- broadcast television series!",
            ">* I've already written numerous elaborate scripts.",
            ">* If this doesn't lift the public's spirits, then I don't know what will!",
            ">* Haha... let's just say things could get \"explosive.\"",
            ">{#p/human}* （你把书放下了。）",
            ...(SAVE.data.b.svr || SAVE.data.b.oops || SAVE.data.n.state_foundry_hapstacom5++ > 0
               ? []
               : [">{#p/basic}* All he ever wanted to do was make them happy..."])
         ],
         hapstabook6: () => [
            ...(SAVE.data.b.svr ? [] : [">{#p/basic}* It's a voicebook."]),
            ">{#p/human}* (You pick up the voicebook and open to the only recorded section.)",
            ">{#p/hapstablook}* Dear diary, volume six...",
            ">* That Alphys... shes done something I never could have imagined.",
            ">* Thanks to her, my future seems brighter than ever...",
            ">* ... I only hope the others come to understand my choice.",
            ">* No matter what happens to me next, a part of me will always miss being with you.",
            ">* Please... never forget that.\n* Even if I myself do.",
            ">{#p/human}* （你把书放下了。）",
            ...(SAVE.data.b.svr || SAVE.data.b.oops || SAVE.data.n.state_foundry_hapstacom6++ > 0
               ? []
               : SAVE.data.n.plot < 68
                  ? [
                     ">{#p/basic}* Sentimental as ever, eh?",
                     ">{#p/basic}* Well.\n* With any luck, you'll be re- united on better terms soon."
                  ]
                  : [
                     ">{#p/basic}* Sentimental as ever, eh?",
                     ">{#p/basic}* Heh.\n* I'm just glad you got to re- unite with them in the end."
                  ])
         ],
         hapstacouch: () =>
            SAVE.data.b.svr
               ? [">{#p/human}* (But you knew you still had a little farther to go before you could rest.)"]
               : world.darker
                  ? [">{#p/basic}* It's just a couch."]
                  : SAVE.data.n.plot === 72
                     ? [
                        ">{#p/basic}* Another couch, another temptation... you're so tired after all this traveling.",
                        ">{#p/basic}* ... but you can't stay here forever!"
                     ]
                     : [
                        ">{#p/basic}* Another couch, another temptation... you're so tired after all this traveling.",
                        ">{#p/basic}* ... but you have to keep going!"
                     ],
         hapstaposter: () =>
            SAVE.data.b.svr
               ? [">{#p/human}* (The caption on this poster describes a love story.)"]
               : [">{#p/basic}* \"Two star-crossed lovers fall into a digital abyss...\""],
         hapstatv: () =>
            SAVE.data.b.svr
               ? [
                  [
                     ">{#p/asriel1}{#f/13}* This thing must be centuries old...",
                     ">{#f/17}* Makes you wonder how it got here from Earth so quickly."
                  ],
                  [
                     ">{#p/asriel1}{#f/13}* You do realize Earth is thousands of lightyears from here, right?",
                     ">{#f/15}* The odds of this being here are so slim...",
                     ">{#f/16}* That part of me thinks it wasn't an accident.",
                     ">{#f/10}* But why would the humans send us their centuries-old junk?"
                  ],
                  [
                     ">{#p/asriel1}{#f/17}* My theory is that some human was... secretly on our side.",
                     ">{#f/13}* They couldn't send us modern technology, that'd be detected.",
                     ">{#f/1}* But if they sent us ancient technology...",
                     ">{#f/2}* Well, the other humans might not have noticed.",
                     ">{#f/3}* But that's just a theory."
                  ],
                  [">{#p/asriel1}{#f/21}* Sure would've been nice to have an extra ally out there..."]
               ][Math.min(asrielinter.hapstatv++, 3)]
               : [">{#p/basic}* An old earth television set."],
         hapstawindow: () =>
            SAVE.data.b.svr
               ? [">{#p/human}* (Through the window, you gaze long into the wall on the other side.)"]
               : world.darker
                  ? [">{#p/basic}* There's nothing to see here."]
                  : [">{#p/basic}* A beautiful view... of the outside foundry wall."],
         k_bonedrawer: pager.create(
            0,
            () => [
               ">{#p/undyne}{#f/1}* 老实说...",
               ">{#f/14}* 这么长时间了，\n  那个抽屉真的越塞越满。",
               SAVE.data.b.oops
                  ? ">{#p/basic}* 全是骨头。"
                  : ">{#p/basic}* It's a drawer reserved just for Papyrus.\n* I like this."
            ],
            () => [
               SAVE.data.b.oops
                  ? ">{#p/basic}* 全是骨头。"
                  : ">{#p/basic}* It's a drawer reserved just for Papyrus.\n* I like this."
            ]
         ),
         k_broadsword: pager.create(
            0,
            () => [
               ">{#p/undyne}{#f/1}* 人类烂爆了，\n  不过他们的历史...\n  还挺炫酷的。",
               ">{#f/1}* 举个恰当的例子，\n  就是这把巨型能量剑！",
               ">{#f/1}* 据历史记载，人类使用长达\n  他们身高10倍的剑。",
               ">{#f/15}* 更不用说他们的\n  跨维度传送门了...",
               ">{#f/15}* 光年级的巨型战舰...",
               ">{#f/1}* 我第一次听说到的时候，\n  就想给自己搞一个！",
               ">{#f/14}* 所以我和艾菲斯一起\n  做了一把巨剑的复制品。",
               ">{#f/12}* 规格完全是她\n  自己算出来的！",
               SAVE.data.b.oops
                  ? ">{#p/basic}* 这武器似乎有一段\n  传奇的过往。"
                  : ">{#p/basic}* I once saw a saber just like this... except it was real, and a lot smaller."
            ],
            () => [
               SAVE.data.b.oops
                  ? ">{#p/basic}* 这武器似乎有一段\n  传奇的过往。"
                  : ">{#p/basic}* I once saw a saber just like this... except it was real, and a lot smaller."
            ]
         ),
         k_closet: pager.create(
            0,
            () => [
               ">{#p/undyne}{#f/1}* 那是我的零食柜。",
               ">{#f/17}* 怎么，你以为我在后面\n  藏了间卧室什么的吗？",
               ">{#f/8}* 噗，哈！\n* 大家都知道我睡在\n  又冷又硬的地板上。",
               SAVE.data.b.oops
                  ? ">{#p/basic}* 锁住了。"
                  : ">{#p/basic}* I get the feeling there's more to this \"closet\" than snacks."
            ],
            () => [
               SAVE.data.b.oops
                  ? ">{#p/basic}* 锁住了。"
                  : ">{#p/basic}* I get the feeling there's more to this \"closet\" than snacks."
            ]
         ),
         k_fridge: pager.create(
            0,
            () => [
               ">{#p/undyne}{#f/11}* 我不太喜欢冷食。",
               ">{#f/14}* 幸运的是，艾菲斯改造了\n  我的冰箱，现在它\n  可以加热食物了！",
               ">{#f/1}* 很厉害吧？",
               SAVE.data.b.oops
                  ? ">{#p/basic}* 里面有几盘预热好的\n  意大利面。"
                  : ">{#p/basic}* 在家里，一台热冰箱\n  就能创造奇迹。"
            ],
            () => [
               SAVE.data.b.oops
                  ? ">{#p/basic}* 里面有几盘预热好的\n  意大利面。"
                  : ">{#p/basic}* 在家里，一台热冰箱\n  就能创造奇迹。"
            ]
         ),
         k_otherdrawer: pager.create(
            0,
            () => [
               SAVE.data.b.undyne_respecc
                  ? ">{#p/undyne}{#f/12}* Careful with that stuff."
                  : ">{#p/undyne}{#f/17}* 你要是从那抽屉里偷东西，\n  你就死定了。",
               ">{#p/basic}* 这是个装满了银器的抽屉。\n* 里面有叉子、勺子、刀...",
               ">* ...微型宇宙长矛，等离子军刀，\n  次元战斧，反重力回旋镖..."
            ],
            [
               ">{#p/basic}* 这是个装满了银器的抽屉。\n* 里面有叉子、勺子、刀...",
               ">* ...微型宇宙长矛，等离子军刀，\n  次元战斧，反重力回旋镖..."
            ]
         ),
         k_piano: pager.create(
            0,
            [
               ">{#p/undyne}{#f/1}* 那是我的钢琴。",
               ">{#f/16}* 不管你对人类有什么看法，\n  他们在声学方面都很有品味！",
               ">{#p/basic}* 闻起来... 很科学。"
            ],
            [">{#p/basic}* 闻起来... 很科学。"]
         ),
         k_sink: pager.create(
            0,
            [
               ">{#p/undyne}{#f/1}* 我有一次在去工作前\n  忘了关水槽。",
               ">{#f/17}* 当我回到家时，\n  房子完全被水淹了...",
               ">{#f/8}* 这对我来说完全\n  不是问题！\n* 呋呼呼！",
               ">{#p/basic}* 下水道干净得有点吓人，\n  完全找不到毛发的痕迹。"
            ],
            [">{#p/basic}* 下水道干净得有点吓人，\n  完全找不到毛发的痕迹。"]
         ),
         k_stove: pager.create(
            0,
            [
               ">{#p/undyne}{#f/1}* 这个炉子应该是\n  顶级的镁塔牌产品。",
               ">* 但是，虽然技术\n  进步了这么多...",
               ">* 没什么能比得上家里\n  用火魔法煮的东西！",
               ">{#p/basic}* 这个炉子的使用率\n  不算高也不算低。"
            ],
            [">{#p/basic}* 这个炉子的使用率\n  不算高也不算低。"]
         ),
         k_window: pager.create(
            0,
            () => [
               ">{#p/undyne}{#f/16}* 唉。",
               ">{#f/14}* 帕派瑞斯比较喜欢\n  走“风景线”。",
               ">{#p/basic}* 他飞得太快了，引发了声爆。"
            ],
            [">{#p/basic}* 他飞得太快了，引发了声爆。"]
         ),
         plankstop: () =>
            SAVE.data.b.svr
               ? [
                  [">{#p/asriel1}{#f/13}* Seems like a dead end."],
                  [">{#p/asriel1}{#f/15}* We're not just stand here all day, right?"],
                  [">{#p/asriel1}{#f/10}* What are we even doing out here."],
                  [">{#p/asriel1}{#f/10}* ..."]
               ][Math.min(asrielinter.plankstop++, 3)]
               : world.darker || SAVE.data.n.plot < 42.1
                  ? []
                  : [">{#p/basic}* 无尽的宇宙深渊，\n  唯有远处工厂的边缘\n  可以映入眼帘。"],
         wallsign4: () =>
            SAVE.data.b.svr
               ? [">{#p/human}* (The sign labels its location.)"]
               : [">{#p/basic}* “向左 - 检修竖井”\n* “向右 - 铸厂出口”"]
      },
      truetext: {
         doge1: [">{#p/basic}* ... well, that went better than I expected."],
         muffet: [">{#p/basic}* ... that was too close."],
         preundyne: [
            ">{#p/basic}* ...",
            ">* To doubt you after everything you've done...",
            ">* ... no.\n* I know you'll find a way to get through to her.",
            ">* You just have to believe in yourself... right?",
            ">* ...\n* Go on, step forward.",
            ">* Show her the kindness she needs to see."
         ],
         unddate: () => [
            ">{#p/basic}* So.\n* One second, we're running for our lives from her...",
            ">* And the next?",
            ">* We're cooking spaghetti with her.\n* And burning her house down.",
            ">{#p/human}* (You hear a small giggle.)",
            ...(SAVE.data.n.plot > 64.1
               ? [
                  ">{#p/basic}* Jeez.\n* We've come a long way since you first arrived, huh?",
                  ">* Even if there's not much left to see now...",
                  ">* I still appreciate the time I've spent with you."
               ]
               : [
                  ">{#p/basic}* Oh, uh, sorry!\n* I...",
                  ">* It's been a while since I've felt... happy like this.",
                  ">* With you here, things never seem to go wrong."
               ]),
            ">* So... you just keep doing what you're doing, alright?",
            ">* And I'll...",
            ">* I'll be here for you."
         ],
         undyne1: [
            ">{#p/basic}* We did it.\n* We really did it!",
            ">* I mean, uh, you did it.",
            ">* Yeah...",
            ">* ... at least it'll be nice to finally have her off your back.",
            ">* At least for now.",
            ">* Heh.\n* Well done, partner.",
            ">* I don't think anyone's going to replicate THAT stunt again."
         ],
         view1: [
            ">{#p/basic}* Look at that...",
            ">* ...\n* It's the Citadel.",
            ">* It's where this journey's been taking us.",
            ">* The silver city, nestled in the twin arches of Aradon...",
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
                  ? ">{#f/5}SHE BLAMES HERSELF FOR TRUSTING YOU..."
                  : ">{#f/5}SHE BLAMES HERSELF FOR LETTING YOU GET AWAY...",
               ">{#f/6}AND THAT YOU... DESERVE TO DIE??",
               ">{#f/7}WELL, I DISAGREE!",
               ">{#f/0}BUT THAT'S OKAY.",
               ">{#f/0}I'LL JUST WAIT HERE UNTIL SHE RETURNS."
            ]
            : [
               ">{#p/papyrus}哦嚯，\n人类到啦！",
               ...(SAVE.data.n.state_foundry_undyne > 0
                  ? [
                     ">{#f/4}... THOUGH, I'M NOT QUITE SURE WHERE UNDYNE IS.",
                     ">{#f/5}SHE ISN'T NORMALLY OUT THIS LONG...",
                     ">{#f/6}AND SHE WON'T EVEN ANSWER THE PHONE!",
                     ">{#f/0}WELL, I'LL JUST WAIT HERE UNTIL SHE RETURNS."
                  ]
                  : [
                     ">{#f/4}你准备好接受这个...",
                     ">{#f/1}和皇家守卫队长\n做朋友的艰巨的\n任务了吗！？！？",
                     choicer.create("* （和安黛因做朋友吗？）", "是", "否")
                  ])
            ],
      unddate0x: () =>
         world.trueKills > 0 || SAVE.data.n.state_foundry_undyne > 0
            ? [
               ">{#p/papyrus}{#f/0}安黛因现在不在这。",
               ">{#p/papyrus}{#f/4}你得像我经常做的那样\n在这里等她。"
            ]
            : [
               ">{#p/papyrus}{#f/0}好！\n准备好消遣了吗？",
               choicer.create("* （和安黛因做朋友吗？）", "是", "否")
            ],

      unddate1a: [">{#p/papyrus}{#f/0}好的！\n站在我身后！"],
      unddate1b: pager.create(
         0,
         [">{#p/papyrus}{#f/4}嗯... 还没准备好吗？", ">{#f/0}没关系，慢慢来！"],
         [">{#p/papyrus}{#f/0}慢慢来！"]
      ),
      unddate2a: [">{#p/papyrus}{#f/4}嘶嘶...\n记得给她这个。"],
      unddate2b: [">{#f/0}她爱死这些东西了！"],
      unddate3: [
         ">{#p/undyne}{#f/14}* 嗨，帕派瑞斯！",
         ">{#f/1}* 准备好你的超机密，\n  一对一训练了吗？",
         ">{#p/papyrus}当然啦！",
         ">{#f/9}我还带了个\n朋友来！"
      ],
      unddate4: () =>
         SAVE.data.b.undyne_respecc
            ? [
               ">{#p/undyne}{#f/1}* 嗨，初次见...",
               ">{#f/8}* ... OH MY GOD!!!",
               ">{#p/papyrus}{#f/6}...安黛因？",
               ">{#p/undyne}{#f/12}* Pfft, I can't believe you actually brought THEM here.",
               ">{#p/papyrus}{#f/5}...",
               ">{#p/undyne}{#f/1}* Come on, get inside!"
            ]
            : [
               ">{#p/undyne}{#f/1}* 嗨，初次见...",
               ">{#f/4}* ...",
               ">{#p/papyrus}...",
               ">{#p/undyne}{#f/5}* ...",
               ">{#p/papyrus}{#f/5}...",
               ">{#p/undyne}{#f/17}* 你们。\n* 两个。\n* 进来坐吧？"
            ],

      unddate5: [">{#p/papyrus}给，安黛因。", ">我的朋友想\n送给你这个！"],
      unddate5x: [
         ">{#p/undyne}{#f/17}* There you are!",
         ">{#f/1}* We've been waiting here FOREVER for you!",
         ">{#p/papyrus}{#f/4}AND, DON'T WORRY, I ALREADY SHOWED UNDYNE YOUR GIFT.",
         ">{#f/0}SHE LOVED IT!",
         ">{#p/undyne}{#f/14}* Yeah, uh...",
         ">{#f/12}* I sure did!"
      ],
      unddate6: [">{#p/undyne}{#f/1}* 呃...谢了。"],
      unddate7: [">{#f/14}* 我会，呃，\n  和别的放一起吧。"],
      unddate8: [">* 所以我们准备开始了吗？"],
      unddate9: [
         ">{#p/papyrus}{#f/1}哎呀哎呀！\n我刚想起来！",
         ">{#f/0}我得去看看我兄弟\n怎么样了！！",
         ">{#f/9}你俩玩开心点！！！"
      ],
      unddate10: () =>
         SAVE.data.b.undyne_respecc
            ? [
               SAVE.data.b.f_state_undynecheck
                  ? ">{#p/undyne}{#f/17}* If it isn't the human who tried to break into my house IN FRONT OF ME."
                  : ">{#p/undyne}{#f/1}* Well then.\n* Look who's come crawling back for more.",
               ">{#f/16}* To be honest, though, I dunno if I'm in the mood for another fight.",
               ">{#f/12}* Still, I can get you something to drink in the meantime!",
               ">{#f/1}* Have a seat, and I'll see what I can do."
            ]
            : [
               ">{#p/undyne}{#f/11}* ...",
               ...(SAVE.data.b.f_state_undynecheck
                  ? [
                     ">* So why were YOU so desperate to break into my house earlier?",
                     ">* Is this some kind of humilation tactic?",
                     ">* To parade into my house and act like you OWN the place?"
                  ]
                  : [
                     ">* 所以你来这做什么？",
                     ">* 想用你的胜利打我的脸吗？",
                     ">* 更变本加厉地羞辱我？"
                  ]),
               ">{#f/4}* 是这样吗？",
               choicer.create("* （你要怎么回答？）", "是", "否")
            ],
      unddate11a: () => [
         ">{#p/undyne}{#f/11}* 那你来这里是？",
         ">{#f/1}* 等等，我明白了。",
         ">* 你觉得我会和你交朋友，\n  嗯？",
         ">{#f/17}* 没错吧？？？",
         choicer.create("* （你要怎么回答？）", "是", "否")
      ],
      unddate11a1a: [
         ">{#p/undyne}{#f/14}* 真的吗？\n* 我好高兴啊！\n* 我接受了！",
         ">{#f/8}* 让我们一同在友谊的\n  乐园中尽情嬉戏！",
         ">{#f/7}* ...个鬼！",
         ">{#f/1}* 你是将所有人的希望\n  与梦想拒之门外的敌人！",
         ">* 要不是看在\n  你是我客人的份上，\n  我立马就把你揍翻了！",
         ">{#f/5}* ..."
      ],
      unddate11a1b: [
         ">{#p/undyne}{#f/15}* 再者说...",
         ">{#f/17}* ...",
         ">{#f/4}* 你看什么看？",
         ">{#f/5}* 你觉得我不会为了取悦谁\n  而和你交朋友吗？？？",
         ">{#f/12}* 才不是！",
         ">{#f/1}* 事实上，我突然\n  改主意了...",
         ">{#f/7}* 因为我燃起了\n  复仇的欲望！"
      ],
      unddate11a2: [
         ">{#p/undyne}{#f/13}* ...",
         ">{#f/11}* 所以... 让我把事情\n  搞清楚。",
         ">* 首先，\n  你大摇大摆进了我家。",
         ">{#f/7}* 你还不给我一个\n  进我家的理由？？",
         ">{#f/4}* 你个小毛孩！\n* 你要不是我的客人的话，\n  我就...！",
         ">{#f/5}* ...",
         ">{#f/4}* ...不，你猜怎么着？",
         ">{#f/7}* 我要证明你是错的。",
         ">{#f/1}* 我们可不光要\n  成为朋友。"
      ],
      unddate11b: [
         ">{#p/undyne}{#f/4}* 哦-吼-吼。",
         ">{#f/7}* 我告诉你个坏消息，\n  小毛孩。",
         ">{#f/1}* 你现在可是在\n  我这里的战场上！",
         ">{#f/7}* 你还不是来羞辱我的。",
         ">{#f/11}* 好吧。\n* 我来告诉你接下来\n  会发生些什么。",
         ">{#f/17}* 我们来消遣消遣吧。",
         ">{#f/17}* 我们会过得很开心的。",
         ">{#f/7}* 我们要成为“朋友”。"
      ],
      unddate12a: [
         ">{#f/1}* 我要让你\n  对我无法自拔...",
         ">{#f/7}* 完全没法考虑其他的人！"
      ],
      unddate12b: [">{#f/8}* 呋呼呼呼！\n* 这就是我完美的复仇！！"],
      unddate12c: [">{#f/12}* 呃... 何不先找个\n  地方坐下呢？"],
      unddate13: () => [
         SAVE.data.b.undyne_respecc
            ? ">{#p/undyne}{#f/1}* 需要什么吗？"
            : ">{#p/undyne}{#f/14}* 需要什么吗？",
         choicer.create("* （你要怎么回答？）", "饿了", "看书", "回家", "没事")
      ],
      unddate13a1: [
         ">{#p/undyne}{#f/1}* 你想要点零食什么的吗？",
         ">{#f/1}* 让我看看我的柜子里\n  有什么。"
      ],
      unddate13a2: [">{#p/undyne}{#f/1}* 啊... 这应该挺不错的。"],
      unddate13a3: [">{#p/undyne}{#f/14}* 全都是你的...\n* 呋呼呼。"],
      unddate13a4a: [">{#p/human}* （你带的东西太多了。）"],
      unddate13a4b: [">{#p/human}* (You got the Odd Snack.)"],
      unddate13a5: () =>
         SAVE.data.b.drop_snack
            ? [
               ">{#p/undyne}{#f/17}* 我知道扔吃的很好玩，\n  但我不能白白浪费吧。",
               ">{#p/undyne}{#f/12}* 抱歉。"
            ]
            : SAVE.data.b.undyne_respecc
               ? [
                  ">{#p/undyne}{#f/17}* Just because you're my friend doesn't mean you can have two snacks!",
                  ">{#p/undyne}{#f/1}* Maybe some other time."
               ]
               : [
                  ">{#p/undyne}{#f/11}* 听着，混球，\n  每人只有一份零食。",
                  ">* 你得学会入乡随俗。"
               ],
      unddate13b: pager.create(
         0,
         () => [
            ">{#p/undyne}{#f/13}* 你要看书？？？\n* 这里看起来\n  像是图书倌吗？",
            ">{#f/1}* 你在厨房里\n  唯一能找到的书\n  就是烹饪指南！",
            ">{#f/4}* 我从来不用，\n  因为烹饪应该是门艺术。",
            ">{#f/7}* 而不是被条条框框\n  束缚的过程。",
            ">{#f/5}* 为什么就是没有人\n  能理解呢？？？",
            SAVE.data.b.undyne_respecc
               ? ">{#f/1}* ...如果你还需要什么，\n  就告诉我吧。"
               : ">{#f/14}* 好吧，\n  如果你还需要什么的话，\n  就告诉我吧！"
         ],
         [
            ">{#p/undyne}{#f/1}* 你听好，\n  星港有一家图书倌。",
            ">{#f/1}* 如果你真的想看书，\n  你去那里最合适。",
            ">{#f/7}* 但你现在没法去！！！",
            ">{#f/14}* ...如果你还需要什么，\n  就告诉我吧。"
         ]
      ),
      unddate13c: pager.create(
         0,
         () => [
            ">{#p/undyne}{#f/3}* ...",
            ">{#f/17}* 这里就是家。",
            ">{#f/17}* 你已经在这里了。",
            ">{#f/16}* 除非你指的是\n  你的母星...",
            ">{#f/9}* ...",
            ">{#f/19}* 但这任谁都没办法\n  做到。",
            SAVE.data.b.undyne_respecc
               ? ">{#f/1}* ...如果你还需要什么，\n  就告诉我吧。"
               : ">{#f/14}* 好吧，\n  如果你还需要什么的话，\n  就告诉我吧！"
         ],
         () => [
            ">{#p/undyne}{#f/16}* 我要是可以的话，\n  我可以给你描述一下\n  那个地方。",
            ">{#f/16}* 但我是在前哨站出生的...",
            ">{#f/9}* 我们对这个世界的记忆\n  似乎每天都在逐渐淡去。",
            SAVE.data.b.undyne_respecc
               ? ">{#f/1}* ...如果你还需要什么，\n  就告诉我吧。"
               : ">{#f/12}* ...如果你还需要什么，\n  就告诉我吧。"
         ]
      ),
      unddate13d: () => [
         SAVE.data.b.undyne_respecc
            ? ">{#p/undyne}{#f/1}* 好吧，没事。\n* 记住，如果你改变主意，\n  随时来找我！"
            : ">{#p/undyne}{#f/14}* 好吧，没事。\n* 记住，如果你改变主意，\n  随时来找我！"
      ],
      unddate14: () => [choicer.create("* （要坐下吗？）", "是", "否")],
      unddate15a: () => [
         ">{#p/undyne}{#f/14}* 坐得舒服吗？",
         SAVE.data.b.undyne_respecc
            ? ">{#f/1}* 我去拿些喝的给你。"
            : ">{#f/14}* 我去拿些喝的给你。"
      ],
      unddate15b: () => [
         ">{#p/undyne}{#f/14}* 坐得舒服吗？",
         SAVE.data.b.undyne_respecc
            ? ">{#f/1}* I'll get you something to..."
            : ">{#f/14}* I'll get you something to...",
         ">{#f/17}* ...",
         ">{#f/17}* What are you still doing with a cup of dampening fluid?",
         ">{#f/17}* Throw that thing away!"
      ],
      unddate15c: () => [
         ">{#p/human}* (You discarded the electro- dampening fluid.)",
         SAVE.data.b.undyne_respecc ? ">{#p/undyne}{#f/1}* Thanks." : ">{#p/undyne}{#f/14}* Much appreciated."
      ],
      unddate16: () => [
         SAVE.data.b.undyne_respecc
            ? ">{#p/undyne}{#f/1}* 准备完成！\n* 你来挑吧！"
            : ">{#p/undyne}{#f/14}* 准备完成！\n* 你想喝哪个？"
      ],
      unddate17: () => [
         ">{#p/undyne}{#f/17}* 喂！\n* 别站起来！",
         ...(SAVE.data.b.undyne_respecc
            ? [">{#f/10}* ...", ">{#f/16}* Sorry, reflex.\n* I seriously gotta stop doing that..."]
            : [">{#f/17}* 你是客人！\n* 给我坐下来慢慢享用！", ">{#f/17}* ..."])
      ],
      unddate18: () =>
         SAVE.data.b.undyne_respecc
            ? [">{#p/undyne}{#f/1}* 嗯，你需要什么\n  指出来不就好了？", ">{#f/16}* 你可以用这根矛！"]
            : [
               ">{#p/undyne}{#f/12}* 嗯，你需要什么\n  指出来不就好了？",
               ">{#f/12}* 你可以用这根矛！"
            ],
      unddate19x: "* 按←和→瞄准。\n* 按[Z]选定。",
      unddate19y: () => [
         SAVE.data.b.undyne_respecc ? "* Undyne\n* Awesome fish lady." : "* 安黛因\n* 疯狂的鱼女士。",
         "* 零食柜\n* 里面有超多好东西！",
         "* 水\n* 聪明的选择",
         "* 糖\n* 适合放在茶里。",
         "* 洋梅潘趣酒\n* 自家做的... 她是这么说的。",
         "* 热巧克力\n* 蓝色圆罐。",
         "* 茶\n* 毫无疑问是正确选项？",
         "* 冰箱\n* 对于一顿饭来说太多了。",
         "* 能量剑\n* 传说中的人类武器。"
      ],
      unddate20: [
         pager.create(0, [">{#p/undyne}{#f/13}* 你是在...\n* 指我吗？？？"], [">{#p/undyne}{#f/13}* ？？？？？"]),
         pager.create(
            0,
            [
               ">{#p/undyne}{#f/17}* 你应该选一个\n  喝的东西？？",
               ">{#f/1}* 那个柜子里只有零食。"
            ],
            [">{#p/undyne}{#f/1}* 真的，那个柜子里\n  只有零食。\n* 没有别的东西了！"],
            [">{#p/undyne}{#f/1}* 真的！"]
         ),
         pager.create(
            0,
            [
               ">{#p/undyne}{#f/13}* 你想要水？",
               ">{#f/11}* 就是... 水。",
               ">{#f/11}* 没什么味道，\n  也没加糖什么的。",
               ">{#f/11}* ..."
            ],
            [">{#p/undyne}{#f/11}* ..."]
         ),
         pager.create(
            0,
            [
               ">{#p/undyne}{#f/12}* 那个糖是用来\n  加在茶里的。",
               ">{#f/7}* 我没法给你盛一杯糖！"
            ],
            () =>
               SAVE.data.b.undyne_respecc
                  ? [">{#p/undyne}{#f/1}* 糖不可以，甜心。"]
                  : [">{#p/undyne}{#f/14}* 糖是加在茶里的，\n  好吗？"]
         ),
         pager.create(
            0,
            [
               ">{#p/undyne}{#f/1}* 啊... 洋梅潘趣酒。",
               ">{#f/14}* 我想，帕派瑞斯喜欢这东西，\n  所以没什么问题。"
            ],
            [">{#p/undyne}{#f/17}* 你到底选不选这个？"]
         ),
         pager.create(
            0,
            [">{#p/undyne}{#f/14}* 没什么能比一杯\n  热巧克力更棒了。"],
            [">{#p/undyne}{#f/17}* 热巧克力，是吧？"]
         ),
         pager.create(0, [">{#p/undyne}{#f/14}* 茶，是吧？"], [">{#p/undyne}{#f/12}* 所以选茶，是吗？"]),
         pager.create(
            0,
            [
               ">{#p/undyne}{#f/4}* 冰箱！？\n* 你想要一整台冰箱！？",
               ">{#p/undyne}{#f/17}* 不行！"
            ],
            [">{#p/undyne}{#f/17}* 我说了不行！"],
            [">{#p/undyne}{#f/17}* 不行就是不行！"],
            [">{#p/undyne}{#f/17}* 你知道“不行”是\n  什么意思吗？"],
            [">{#p/undyne}{#f/17}* ...就是不行！"],
            [">{#p/undyne}{#f/17}* ..."]
         ),
         pager.create(
            0,
            [
               ">{#p/undyne}{#f/1}* 那把能量剑...",
               ">{#p/undyne}{#f/12}* 那是人类在战争中\n  用来对付我们的武器。",
               ">{#p/undyne}{#f/16}* ...算是，其中一把吧。"
            ],
            [">{#p/undyne}{#f/17}* 那东西不能给你。"]
         )
      ],
      unddate21: () => [choicer.create("* （要选这个喝吗？）", "是", "否")],
      unddate22: [
         [">{#p/undyne}{#f/16}* 也... 行吧。"],
         [">{#p/undyne}{#f/1}* 来喝点果酒，补充水分吧！"],
         [">{#p/undyne}{#f/14}* 开始无与伦比的\n  热可可时间吧！"],
         [">{#p/undyne}{#f/14}* 马上给你上茶。"]
      ],
      unddate22x: [">{#p/undyne}{#f/12}* 还需要等一段时间\n  水才能沸腾。"],
      unddate22y: () => [
         SAVE.data.b.undyne_respecc ? ">{#p/undyne}{#f/1}* There." : ">{#p/undyne}{#f/12}* 好了！"
      ],
      unddate23: [">{#p/undyne}{#f/1}* 喝吧。"],
      unddate24: [
         [">{#p/undyne}{#f/12}* 好喝吗...？"],
         [">{#p/undyne}{#f/12}* 小心喝，有点酸。"],
         [">{#p/undyne}{#f/14}* 小心喝，有点烫。"],
         [">{#p/undyne}{#f/14}* 小心喝，有点烫。"]
      ],
      unddate25: [
         () => [
            ">{#p/undyne}{#f/17}* 不至于！\n* 快点喝啊！",
            ">{#p/human}{#s/heal}* （你喝了一口水。）",
            ">{#p/basic}* 它，呃...\n  嗯对，就是水。\n* 所以尝起来还好。",
            SAVE.data.b.undyne_respecc
               ? ">{#p/undyne}{#f/1}* 哈。\n* 至少你很开心。"
               : ">{#p/undyne}{#f/12}* 呀，你看起来很满足。"
         ],
         [
            ">{#p/undyne}{#f/17}* 你在等什么？\n* 快点喝啊！",
            ">{#p/human}{#s/heal}* （你抿了一口果酒。）",
            ">{#p/basic}* 实在太酸了，\n  你的嘴唇都皱起来了..."
         ],
         [
            ">{#p/undyne}{#f/17}* 也没有那么烫！！\n* 快点喝啊！",
            ">{#p/human}{#s/heal}* （你喝了一口热巧克力。）",
            ">{#p/basic}* 烫得像火烧..."
         ],
         [
            ">{#p/undyne}{#f/17}* 也没有那么烫！！\n* 快点喝啊！",
            ">{#p/human}{#s/heal}* （你喝了一口茶。）",
            ">{#p/basic}* 烫得像火烧..."
         ]
      ],
      unddate25x: () => [
         ">* 不过除去这点，\n  还挺好喝的。",
         ...(SAVE.data.b.undyne_respecc
            ? [">{#p/undyne}{#f/1}* 哈。\n* 你喜欢就好。"]
            : [
               ">{#p/undyne}{#f/12}* 味道不错吧？",
               ">{#f/8}* 我只会把最好的\n  给我绝对珍惜的朋友！"
            ])
      ],
      unddate27: [
         [
            ">{#p/undyne}{#f/12}* 你知道吗，\n  你会选那个当喝的\n  还挺有意思的。",
            ">{#f/12}* 我是说，水。",
            ">{#f/1}* 我跟艾斯戈尔有一次\n  开玩笑说人类是\n  由水组成的...",
            ">{#f/8}* 所以如果我们喝水，\n  就是在消化人类！！！",
            ">{#f/16}* ...好吧，他其实\n  没找到笑点在哪。",
            ">{#f/16}* 这家伙几乎对所有人\n  都有好感..."
         ],
         [
            ">{#p/undyne}{#f/12}* 你知道吗，\n  你会选那个当喝的\n  还挺不错的。",
            ">{#f/12}* 洋梅潘趣酒...",
            ">{#f/1}* 那是艾菲斯和帕派瑞斯\n  一起“发明”出来的。",
            ">{#f/16}* 我虽然不太喜欢，\n  但是当我把这个拿给\n  艾斯戈尔的时候...",
            ">{#f/12}* 这么说吧，\n  他把它投入了批量生产。"
         ],
         [
            ">{#p/undyne}{#f/12}* 你知道吗，\n  你会选那个当喝的\n  还挺酷的。",
            ">{#f/12}* 热巧克力...",
            ">{#f/16}* 有一次，\n  在核心发生故障之后...",
            ">{#f/16}* 他们不得不重启\n  整个大气系统。",
            ">{#f/10}* 没法取暖，空气稀薄...\n  逐渐变得越来越冷...",
            ">{#f/1}* 然后，艾斯戈尔赶了过来\n  递给我一杯热巧克力。",
            ">{#f/12}* 我们就一起坐在\n  这个房间里..."
         ],
         [
            ">{#p/undyne}{#f/12}* 你知道吗，\n  你会选那个当喝的\n  可真是奇怪...",
            ">{#f/12}* 星花茶...",
            ">{#f/1}* 那一直都是艾斯戈尔\n  最喜欢的。"
         ]
      ],
      unddate28: () => [
         ">{#p/undyne}{#f/14}* 实际上，\n  现在我开始觉得...",
         ">{#f/12}* 你让我想起他了。",
         ...(SAVE.data.b.undyne_respecc
            ? [
               ">{#f/17}* I mean, your fighting styles are TOTALLY different, but...",
               ">{#f/1}* You're the only two people who've actually managed to beat me!",
               ">{#f/9}* ... in a sense."
            ]
            : [">{#f/8}* 你俩都是软蛋！", ">{#f/9}* ...某种意义上啦。"])
      ],
      unddate29: [
         ">{#p/undyne}{#f/16}* 知道吗，我以前\n  是个非常冲动的孩子。",
         ">* 有一次，我为了\n  证明自己是最强的，\n  就去尝试和艾斯戈尔战斗。",
         ">{#f/17}* 重点是尝试二字。",
         ">{#f/1}* 我压根连一下\n  都打不中他！",
         ">* 更糟的是，从头到尾，\n  他都不肯还手！",
         ">{#f/9}* 我被羞辱得无地自容...",
         ">{#f/16}* 之后，他道了歉，\n  还说了些傻话...",
         ">* “抱歉，你想知道\n   打败我的方法吗？”",
         ">{#f/1}* 我说了“想”，从那以后，\n  他就开始训练我。",
         ">{#f/16}* 有一天，在练习时，\n  我终于打倒了他。",
         ">{#f/9}* 我觉得... 非常糟糕。",
         ">{#f/12}* 他却很高兴...",
         ">{#f/1}* 我从没见过哪个人\n  因为被扁了而感到荣幸。",
         ">* 总之，长话短说，\n  他一直训练着我...",
         ">{#f/14}* 然后我现在是皇家守卫的\n  首领了！",
         ">{#f/8}* 所以我成了那个训练\n  傻瓜们战斗的人了！",
         ">{#f/1}* ...比如，呃，帕派瑞斯。"
      ],
      unddate30: [
         ">{#f/16}* 但是，嗯，说实话...",
         ">{#f/16}* ...我自己也不知道...",
         ">{#f/9}* 到底能不能让\n  帕派瑞斯加入皇家守卫。",
         ">{#f/17}* 别跟他说这些话！",
         ">{#f/10}* 他只是...\n* 好吧...",
         ">{#f/9}* 我是指，他并不笨。",
         ">{#f/17}* 他的攻击设计\n  真的相当疯狂！",
         ">{#f/10}* 只不过...\n* 他...",
         ">{#f/17}* 他太天真善良了！！！",
         ">{#f/16}* 我是说，你看，\n  他本应该去抓你的...",
         ">{#f/11}* 结果他最后竟然\n  和你成为朋友了。",
         ">{#f/4}* 我永远没办法\n  把他派去战斗！",
         ">{#f/9}* 他会被撕成\n  微笑着的碎片的。",
         ">{#f/12}* 这也是我为什么...",
         ">{#f/12}* 教他烹饪的原因之一，\n  你明白吗？",
         ">{#f/9}* 所以，嗯，或许他\n  这辈子可以干点别的。"
      ],
      unddate31: () => [
         SAVE.data.b.undyne_respecc
            ? ">{#p/undyne}{#f/1}* 哦，抱歉，我讲太多了..."
            : ">{#p/undyne}{#f/12}* 哦，抱歉，我讲太多了..."
      ],
      unddate32: [
         [">{#f/12}* 你的水喝完了，是吧？"],
         [">{#f/12}* 你的潘趣酒喝完了，是吧？"],
         [">{#f/12}* 你的热巧克力喝完了，\n  是吧？"],
         [">{#f/12}* 你的茶喝完了，是吧？"]
      ],
      unddate33: () => [
         SAVE.data.b.undyne_respecc
            ? ">{#p/undyne}{#f/1}* 哈，没事的。\n* 我再给你倒些。"
            : ">{#p/undyne}{#f/12}* 哈，没事的。\n* 我再给你倒些。"
      ],
      unddate34: [">{#p/undyne}{#f/17}* 等一下...", ">{#f/17}* 帕派瑞斯...\n* 他的烹饪课..."],
      unddate35: [
         ">{#p/undyne}{#f/17}* 他现在本该在\n  上课的！！！",
         ">{#f/11}* 如果他没来\n  上课的话...",
         ">{#f/7}* 那只能用你来\n  代替他了！"
      ],
      unddate36: () =>
         SAVE.data.b.undyne_respecc
            ? [
               ">{#f/1}* 没错！",
               ">{#f/1}* 除了烹饪之外，\n  没什么能让我和\n  帕派瑞斯更亲近了！",
               ">{#f/17}* Heheh, if you thought we were friends before...",
               ">{#f/8}* JUST WAIT UNTIL YOU SEE US AFTER THIS!"
            ]
            : [
               ">{#f/1}* 没错！",
               ">{#f/1}* 除了烹饪之外，\n  没什么能让我和\n  帕派瑞斯更亲近了！",
               ">{#f/17}* 也就是说，如果我\n  给你上同样的课...",
               ">{#f/8}* 我们就会变得亲近到\n  超乎你的想象！"
            ],
      unddate37: [">{#f/1}* 首先，\n  我们从酱开始！！"],
      unddate38: () => [
         ">{#f/1}* 将这些蔬菜想象成\n  你的死对头！",
         ">{#f/7}* 现在，用你的拳头\n  将他们轰杀至渣！！",
         choicer.create("* （你要怎么做？）", "轻轻抚摸", "用力重击")
      ],
      unddate39a: () => [
         ">{#p/human}* （你亲切地抚摸着蔬菜。）",
         SAVE.data.b.undyne_respecc
            ? ">{#p/undyne}{#f/17}* 我的天啊！！！\n* 现在我【可算】知道了\n  你就是在耍我！！！"
            : ">{#p/undyne}{#f/17}* 我的天啊！！！\n* 不要抚摸敌人了！！！",
         ">{#x1}{#f/7}* 我来给你演示一下\n  该怎么做！",
         ">{#f/4}* 哈啊啊！"
      ],
      unddate39b: () =>
         world.meanie
            ? [">{#p/human}* （你全力用拳头砸向蔬菜。）"]
            : [
               ">{#p/human}* （你全力用拳头砸向蔬菜。）\n* （你打倒了一颗番茄。）",
               ">{#p/undyne}{#f/1}* 耶！\n* 耶！",
               ">{#f/1}* 我们齐心协力与这些\n健康食材们奋战到底！",
               ">{#x1}{#f/7}* 现在轮到我了！",
               ">{#f/4}* 哈啊啊！"
            ],
      unddate40: (res: number) => [
         ...(world.meanie && res === 1
            ? [
               SAVE.data.b.undyne_respecc
                  ? ">{#p/undyne}{#f/2}* 没错！！！\n* 这就是我认识的战士！！"
                  : ">{#p/undyne}{#f/6}* 今天可真是欢腾啊，\n  是吧？",
               ">{#f/6}* 哈，我们过会再把这堆\n  弄到个碗里去。"
            ]
            : [">{#p/undyne}{#f/6}* 呃，我们过会再把这堆\n  弄到个碗里去。"]),
         ">{#f/2}* 但是现在！"
      ],
      unddate41: [
         ">{#p/undyne}{#f/1}* 我们把面条加进去！",
         ">{#f/1}* 自家制的面条最棒了，\n  所以我总是备一些。"
      ],
      unddate41x: [">{#p/undyne}{#f/12}* 呃，小子，\n  你现在可以过来了。"],
      unddate41y: () => [
         ">{#p/undyne}{#f/1}* 无论如何，\n  你看到这里的面条了吧？",
         ">{#f/1}* 那么...",
         ">{#f/17}* 把它们丢进去！",
         choicer.create("* （你想怎么放进去？）", "小心地", "猛烈地")
      ],
      unddate42a: [
         ">{#p/human}* （你将面条一根一根地\n  放进锅里。）",
         ">* 它们与锅底相碰，\n  叮叮作响。",
         ">{#p/undyne}{#f/17}* 感觉，挺好？？?",
         ">{#f/1}* 那么，接下来就是\n  搅拌意面的时间了！"
      ],
      unddate42b: [
         ">{#p/human}* （你把所有东西都丢进锅里，\n  包括包装盒。）",
         ">* 包装盒和面条咣地一声\n  撞到锅底。",
         ">{#p/undyne}{#f/17}* 耶！！！\n* 我进入状态了！！",
         ">{#f/1}* 好了！\n* 现在就是搅拌\n  意面的时间！"
      ],
      unddate43: [
         ">{#p/undyne}{#f/1}* 经验表明...",
         ">{#f/17}* 搅得越多，它就越好吃！"
      ],
      unddate44: [">{#p/undyne}{#f/17}* 准备好了吗？", ">{#f/1}* 来搅拌吧！"],
      unddate45: "* 连续按[Z]来搅拌！",
      unddate46: [">{*}{#p/undyne}{#f/17}* 用力搅！{^20}{%}"],
      unddate46x: [">{*}{#p/undyne}{#f/17}* 别光站着！{^20}{%}"],
      unddate47: [">{*}{#p/undyne}{#f/7}* 再用力一点！{^20}{%}"],
      unddate47x: [">{*}{#p/undyne}{#f/7}* 该死的！搅啊！{^20}{%}"],
      unddate48: [">{*}{#p/undyne}{#f/8}* 再用力！！！{^20}{%}"],
      unddate48x: [">{*}{#p/undyne}{#f/8}* 搅啊！！！{^20}{%}"],
      unddate49: [">{*}{#p/undyne}{#f/8}* 呃，放着我来-{^10}{%}"],
      unddate50: [">{#p/undyne}{#f/8}* 呋呼呼呼！\n* 就该这样！"],
      unddate51: [
         ">{#p/undyne}{#f/1}* 好了，\n  现在就剩最后一步...",
         ">{#f/17}* 开大火！",
         ">{#f/1}* 炉子象征着\n  你的热情！",
         ">{#f/1}* 将你的希望与梦想\n  化为烈焰！",
         ">{#f/8}* 当然，\n  要不遗余力！！！"
      ],
      unddate52: [">{#p/undyne}{#f/17}* 准备好了吗？", ">{#f/1}* 开始吧！"],
      unddate53: "* 按住[→]开大火！",
      unddate53x: [">{*}{#p/undyne}{#f/8}* 你个蠢蛋！\n* 这个炉子只能\n  往一边开火！！！{^20}{%}"],
      unddate54: [">{*}{#p/undyne}{#f/17}* 再热一些！{^20}{%}"],
      unddate54x: [">{*}{#p/undyne}{#f/17}* 你在干什么？{^20}{%}"],
      unddate55: [">{*}{#p/undyne}{#f/7}* 再热些！{^20}{%}"],
      unddate55x: [">{*}{#p/undyne}{#f/7}* 别再犹豫了！{^20}{%}"],
      unddate56: [">{*}{#p/undyne}{#f/8}* 再热些！！！{^20}{%}"],
      unddate56x: [">{*}{#p/undyne}{#f/8}* 做就好了！！！{^20}{%}"],
      unddate57a: [">{*}{#p/undyne}{#f/17}* 呃，让我来吧...{^10}{%}"],
      unddate57b: [">{*}{#p/undyne}{#f/17}* 看到了吗，这就是你-{^20}{%}"],
      unddate58: [">{*}{#p/undyne}{#f/17}* 不，等下，有点太-{^10}{%}"],
      unddate59: [">{#p/undyne}{#f/14}* 啊。"],
      unddate60: [">{#p/undyne}{#f/14}* 啊，难怪帕派瑞斯\n  厨艺再也没有进步了。"],
      unddate61: [">{#p/undyne}{#f/12}* 然后做些什么？\n* 去淘些垃圾？\n* 还是绑个腕带？"],
      unddate62: () =>
         SAVE.data.b.undyne_respecc
            ? [
               ">{#p/undyne}{#f/10}* ...",
               ">{#f/9}* ...我在开什么玩笑...",
               ">{#f/16}* 我真的把事情弄失控了，\n  是吧...？",
               ">{#f/16}* 呵..."
            ]
            : [
               ">{#p/undyne}{#f/10}* ...",
               ">{#f/9}* ...我在开什么玩笑...",
               ">{#f/16}* 我真的搞砸了，\n  是吧...？",
               ">{#f/16}* 呵..."
            ],
      unddate63: () =>
         SAVE.data.b.undyne_respecc
            ? [
               ">{#f/16}* 你知道吗？",
               ">{#f/9}* 我还没打算就\n  这样放弃呢。",
               ">{#f/1}* 所以我放弃教你烹饪了。\n* 就这样。",
               ">{#f/14}* 我们还是有办法\n  挽救这个烂摊子的。",
               ">{#f/1}* 办法就是..."
            ]
            : [
               ">{#f/16}* 我没办法强迫你喜欢我，\n  人类。",
               ">{#f/9}* 有些人彼此就是\n  没办法相处。",
               ">{#f/16}* 如果你这么觉得，\n  我能理解...",
               ">{#f/9}* 如果我们做不了朋友...\n  也没关系。",
               ">{#f/9}* 因为...\n* 如果我们不是朋友..."
            ],
      unddate64: () =>
         SAVE.data.b.undyne_respecc
            ? [">{#p/undyne}{#f/17}* 来一场向银河系证明\n  我们实力的最后一战！！"]
            : [">{#p/undyne}{#f/17}* 这就意味着我能\n  毫不犹豫地干掉你！"],
      unddate65: () => [
         ">{#p/undyne}{#f/12}* 好吧，还挺好玩的，\n  是吧？",
         SAVE.data.b.undyne_respecc
            ? ">{#f/8}* 我们下次再\n  找时间斗一场！"
            : ">{#f/8}* 我们下次再约出去玩！",
         ">{#f/9}* 但是，呃，\n  我觉得该换个地方。",
         ...(world.postnoot
            ? [
               ">{#f/1}* By the way, have you noticed something weird in the air?",
               ...(world.nootflags.has('papyrus') // NO-TRANSLATE

                  ? [">{#f/13}* Even Papyrus mentioned it earlier..."]
                  : [">{#f/13}* It seems like it just started recently..."]),
               ">{#f/16}* ... maybe it's nothing, but I swear I feel weaker than usual."
            ]
            : []),
         ...(SAVE.data.n.plot < 68.1 || SAVE.data.b.a_state_hapstablook
            ? [
               ">{#f/1}* 与此同时，我会和帕派瑞斯\n  一起去休闲回廊。",
               ">{#f/12}* 期待能在那见到你！",
               ">{#f/1}* 到那时候，\n  你可以给帕派瑞斯打电话。",
               ">{#f/8}* 因为我俩在一起，\n  这样我也能和你说话！"
            ]
            : [
               ">{#f/1}* 与此同时，\n  我会去休闲回廊。",
               ">{#f/12}* 期待能在那见到你！",
               ">{#f/1}* 哦，对了，\n  帕派瑞斯说他必须得\n  办个什么事情去。",
               ">{#f/14}* 只是想告诉你一声，\n  因为他现在不方便接电话。"
            ])
      ],
      unddate66: () =>
         SAVE.data.b.undyne_respecc
            ? [">{#f/1}* 好啦，回见，朋友！！"]
            : [">{#f/14}* 好啦，回见，混球！！"],
      undroom1: () => [">{#p/undyne}{#f/17}* Huh?\n* The heck was THAT?"],
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
      undroom4: () => [">{#p/undyne}{#f/17}* Stop doing that!"],
      undroom5: () => [">{#p/undyne}{#f/17}* ..."],
      undyne1a: [
         ">{#p/papyrus}{#f/30}嗨... 嗨，安黛因！\n我是来做我的每日报告的...",
         ">呃... 关于我之前跟你\n说过的那个人类..."
      ],
      undyne1b: [">{#p/papyrus}{#f/30}...嗯？\n我有没有跟人类战斗？"],
      undyne1c: () =>

         world.edgy || (world.population_area('s') < 6 && !world.bullied_area('s')) // NO-TRANSLATE

            ? [">{#p/papyrusnt}UH...", ">I-IT'S COMPLICATED!"]
            : [">{#p/papyrusnt}当-当然了！\n我当然跟人类战斗了！", ">我英勇地和那个人类\n战斗过了！"],
      undyne1d: [">{#p/papyrus}{#f/30}...什么？\n我有没有把人类抓住...？"],
      undyne1e: [">{#p/papyrus}{#f/30}这-这-这个...", ">没有..."],
      undyne1f: () =>
         world.edgy || (world.population_area('s') < 6 && !world.bullied_area('s')) // NO-TRANSLATE

            ? [">{#p/papyrus}{#f/30}L-LIKE I SAID, IT'S COMPLICATED!"]
            : [">{#p/papyrus}{#f/30}我-我是说，\n我真的很努力了，\n但-但是，最终..."],
      undyne1g: () => [
         ">{#p/papyrus}{#f/30}...什-什么？",
         ...(SAVE.data.n.state_foundry_doge === 1
            ? [">THEY'VE ALREADY KILLED AN ELITE SQUAD MEMBER??", ">N-NO... THEY WOULDN'T DO THAT, WOULD THEY?"]
            : [">你要亲自去取走那个\n人类的灵魂？？"])
      ],
      undyne1h: () =>
         SAVE.data.n.state_foundry_doge === 1
            ? [">{#p/papyrus}{#f/30}SURELY THERE MUST BE ANOTHER WAY!", ">SURELY..."]
            : [">{#p/papyrus}{#f/30}但是安黛因，你不-\n不一定要把人类杀掉的！\n你看...", ">你看..."],
      undyne1i: () => [
         ">{#p/papyrus}{#f/30}我...",
         ">...我明白了。",
         ">我会尽力帮你的。",
         ...(world.postnoot
            ? [
               ">BY THE WAY... YOU NEED TO DOUBLE-CHECK THE ATMOSPHERIC SYSTEM.",
               ">WHAT WAS IT CALLED?\nTHE WIDE-AREA TROPE-A- SPHERE FRAMEWORK?",
               ">SOMETHING SEEMS... OFF."
            ]
            : [])
      ],
      undyne1j: [">{#p/kidd}{#f/1}* 哟！\n* 她就在那里！"],
      undyne1k: [">{#p/kidd}{#f/7}* 等等... 你是个人类，\n  对吧？"],
      undyne1l: [">{*}{#p/kidd}{#f/7}* 快跑啊啊啊啊啊！{^20}{%}"],
      undyne1m: [">{#p/kidd}{#f/2}* 呼..."],
      undyne1n: [">{#p/kidd}{#f/1}* 呃，你可以从平台上\n  下来了。"],
      undyne1o: [">{#p/kidd}{#f/4}* 她去哪了...？"],
      undyne1p: [">{#p/kidd}{#f/7}* 啊！{^10}{%}"],
      undyne1q: [">{#p/kidd}{#f/2}* 嘘...\n  我感觉我们可以偷偷溜过去。\n* 快跟上我！"],
      undyne1r: [">{#p/kidd}{#f/4}* 这里乌黑一片...", ">{#p/kidd}{#f/7}* ...但是我们得保持\n  前进！"],
      undyne1s: [">{#p/kidd}{#f/7}* 快躲进那丛便于藏身\n  的植物里！"],
      undyne2a: [
         ">{#p/kidd}{#f/7}* 她... 她...",
         ">{#f/7}* 她摸到我了！！",
         ">{#f/4}* ...\n* 我们应该都算走运，\n  你说是吧？",
         ">{#f/5}* 如果她看见你，\n  那就大事不妙了。"
      ],
      undyne2ax: () => [
         ">{#p/kidd}{#f/1}* 她... 她...",
         ">{#f/1}* 哪儿都找不到她！！",
         ">{#f/3}* 你俩看到她了没有？",
         ">{#p/asriel2}{#f/3}* 谁呀，安黛因吗？",
         ">{#p/kidd}{#f/1}* 对呀！\n* 我找她找了好久！",
         ">{#p/asriel2}{#f/2}* （嘻嘻嘻...）",
         ">{#p/kidd}{#f/4}* 嗯？？",
         ">{#p/asriel2}{#f/4}* 没事。",
         ">{#f/13}* 话说，想跟我们一块走吗？",
         ">{#p/kidd}{#f/3}* 你... 想让我跟着你们？",
         ">{#p/asriel2}{#f/4}* 当然喽，快来吧。\n* 超有趣的。",
         ">{#p/kidd}{#f/4}* 呃...\n* 我...",
         ...(SAVE.flag.n.genocide_milestone < 5
            ? [
               ">{#p/asriel2}{#f/15}* 嘿，你知道艾菲斯博士\n  喜欢安黛因的事吗？",
               ">* 就是... 呃...\n  那种很亲密的喜欢。"
            ]
            : [
               ">{#p/asriel2}{#f/9}* 嘿，你知道艾菲斯博士\n  其实比安黛因还强吗？",
               ">{#f/5}* 只是她胆子太小，不敢动手！"
            ]),
         ">{#p/kidd}{#f/7}* 什么？\n* 怎么可能...",
         ">{#p/asriel2}{#f/1}* 呵，关于她俩...\n  我知道的还不止这些呢。",
         ">{#p/kidd}{#f/7}* 快告诉我！",
         ">{#p/asriel2}{#f/5}* 当然，当然...\n* 不过你得跟$(name)和我走\n  我才告诉你。",
         ">{#p/kidd}{#f/1}* 成交！\n* 哈哈。",
         ">{#f/2}* ..."
      ],
      undyne2b: [">{#p/kidd}{#f/1}* 哟，还等什么呢？"],
      undyne2bx: [">{#p/kidd}{#f/1}* 出发吧！"],
      undyne2c: [
         ">{#f/3}* 嘿... 我知道我们刚\n  认识不久，但是...",
         ">{#f/4}* 我，其实，并不想让\n  安黛因伤害你...",
         ">* ...",
         ">{#f/2}* 要不然我们一起行动？",
         ">{#f/1}* 来吧，这会很有趣的！"
      ],
      undyne2cx: [
         ">{#p/kidd}{#f/2}* 老兄，我超推荐你们去看看\n  安黛因的人类追逐练习的！",
         ">{#f/1}* 她一秒就能扔出\n  上亿只矛呢！"
      ],
      undyne2d: [">{#f/1}* 你来带路吧！"],
      undyne2dx: () => [
         ">{#p/kidd}{#f/2}* 每当猎物快要逃脱...",
         ">{#f/1}* 她总能在最后一刻精准命中！",
         ...(SAVE.flag.n.ga_asrielKidd2++ < 1
            ? [">{#p/asriel2}{#f/6}* 她可真棒啊。", ">{#p/kidd}{#f/1}* 是吧！！"]
            : [])
      ],
      undyne2ex: [
         ">{#p/kidd}{#f/4}* 等等...",
         ">* 如果安黛因不在这，\n  谁来痛扁那些坏蛋，\n  保护大家呢？",
         ">{|}{#f/8}* 就是那些- {%}",
         ">{#p/asriel2}{#f/4}* 没啥好担心的。",
         ">{#f/3}* 而且，如果安黛因真像\n  你说的那么多谋善断...",
         ">{#f/4}* 那她就不会无缘无故离开，\n  对吧？\n* 她多聪明啊。",
         ">{#p/kidd}{#f/4}* 确实...\n* 你说得对...",
         ">{#p/kidd}{#f/2}* 对了，谢谢你们带上我。",
         ">{#p/asriel2}{#f/10}* 是吗...？\n* 我们还没走两步呢...",
         ">{#p/kidd}{#f/3}* 嗯，我很开心...\n* 不过，我还没怎么\n  离开过爹娘，所以...",
         ">{#p/asriel2}{#f/8}* 你还有爹娘？\n* 真新奇。",
         ">{#p/kidd}{#f/7}* 呃，我-我当然有啊，\n  谁没爹娘啊？？",
         ">{#p/asriel2}{#f/16}* ...\n* 是是是。"
      ],
      undynefinal1a: () =>
         respecc()
            ? [">{#p/undyne}* 七个。", ">* 七个人类灵魂。", ">* ..."]
            : [
               ">{#p/undyne}* 七个。",
               ">* 有了七个灵魂，\n  {@fill=#f00}艾斯戈尔国王{@fill=#fff}就能成为神。",
               ">{#x1}* 六个。",
               ">{#x1}* 我们已经有了六个。",
               ">{#x1}* 懂了吗？",
               ">{#x1}* 只要有了你这最后一个灵魂，\n  怪物们就能重获自由。",
               ">{#x3}* 不过在这之前，\n  我应该遵循前辈们立下的规矩...",
               ">{#x4}* 向你讲述一段\n  我族人民的悲惨历史。",
               ">{#x5}* 一切，都要从很久以前说起..."
            ],
      undynefinal1b: () => (respecc() ? [">{#p/undyne}* No..."] : [">{#p/undyne}* 你猜怎么着？"]),
      undynefinal1c: () =>
         respecc() ? [">{*}{#p/undyne}{#i/2}* 我不！！{^999}"] : [">{*}{#p/undyne}{#i/2}* 去它的吧！！{^999}"],
      undynefinal1d: () =>
         respecc()
            ? [">{*}{#p/undyne}{#i/1}* 我怎么能那样居高临下地\n  对你说话！！{^999}"]
            : [">{*}{#p/undyne}{#i/1}* 我干嘛要告诉你那段故事！！{^999}"],
      undynefinal1e: () =>
         respecc()
            ? [">{*}{#p/undyne}{#i/1}* 明明你都光荣地战斗过了！！{^999}"]
            : [">{*}{#p/undyne}{#i/1}* 明明你马上就得受死了！！{^999}"],
      undynefinal1f: [">{*}{#p/undyne}{#i/2}* 哈啊啊啊啊啊啊啊啊啊！！！{^999}"],
      undynefinal1g: () =>
         respecc()
            ? [
               ">{#p/undyne}{#f/1}* LISTEN UP!",
               ">* I like the way you fight.",
               ">{#f/16}* Like any good warrior, you fight until your enemy's been crushed...",
               ">{#f/17}* ... and then you spare them, so they can live to tell the tale!",
               ">{#f/10}* What courage..."
            ]
            : [
               ">{#p/undyne}{#f/1}* 人类！",
               ">* 你正是所有人通往希望\n  与梦想之路上的绊脚石！",
               ">{#f/11}* 艾菲斯的历史电影让我\n  以为人类很酷...",
               ">{#f/16}* ...比如那些生命航天器\n  还有跨维度传送门。",
               ">{#f/4}* 而你呢？？？"
            ],
      undynefinal2a: () =>
         respecc()
            ? [
               ">{#f/1}* I guess I should apologize for how I acted back there.",
               ">{#f/16}* You and your friend were just standing up for each other, right?",
               ">{#f/1}* Well, I can respect that sort of thing.",
               ">{#f/17}* And then there's the local ELITE squad!",
               ">{#f/9}* 我承认，我被你打动了...",
               ...(SAVE.data.n.state_foundry_doge === 2 && SAVE.data.n.state_foundry_muffet === 2
                  ? [
                     ">* The way you managed to not only get past them...",
                     ">{#f/10}* But BEFRIEND them???",
                     ">{#f/1}* I guess I shouldn't be surprised, though.\n* They'd like your style."
                  ]
                  : SAVE.data.n.state_foundry_doge === 3 && SAVE.data.n.state_foundry_muffet === 3
                     ? [
                        ">{#f/10}* The way you managed to EMBARRASS them?",
                        ">{#f/11}* I don't think I've ever seen those two so red-faced."
                     ]
                     : [
                        ">{#f/10}* Even when faced with their blades, you still held your nerve?",
                        ">{#f/1}* I guess you really are something special!"
                     ]),
               ">{#f/8}* ... BUT GETTING BACK TO MY POINT!",
               ">{#f/1}* So, normally, I'd just try to kill you and take your SOUL.",
               ">{#f/11}* However, after seeing the way you fight...",
               ">{#f/8}* THERE'S NO WAY I'D GO SO EASY ON YOU!!!",
               ">{#f/1}* No... I want you to show me what you're REALLY made of!",
               ">{#f/4}* And only once I've beaten you fair and square...",
               ">{#f/5}* Will I finally claim the freedom that's rightfully ours!",
               ">{#f/16}* But, if you manage to beat me...",
               ">{#f/9}* I'll let you through.",
               ">{#f/8}* ... IF you actually manage to beat me!!!",
               ">{#f/1}* 当你准备好就\n  上前迎战吧！\n* 呋呼呼呼！"
            ]
            : [
               ">{#f/7}* 你就是个懦夫！",
               ...(SAVE.data.b.f_state_kidd_betray
                  ? [
                     ">{#f/16}* Remember that friend of yours from earlier?",
                     ">{#f/17}* The one you ABANDONED?",
                     ">{#f/13}* Even when their life was in danger, you didn't bat an eye.",
                     ...(world.trueKills === 0 && SAVE.data.n.bully > 9
                        ? [
                           ">{#f/9}* Maybe if you had, your fighting style would've earned my respect.",
                           ">{#f/16}* But it'd be naive to think you've got any sort of honor NOW."
                        ]
                        : [">{#f/16}* Typical human.\n* Always quick to stab people in the back."]),
                     ">{#f/4}* But that's fine...\n* I didn't need you to be some kind of saint...",
                     ">{#f/7}* ALL THAT MATTERS IS SOUL!"
                  ]
                  : [
                     ">* 你躲在那孩子的身后，\n  得以再次从我手心里逃走！",
                     ">{#f/9}* 我承认，我被你打动了...",
                     ...(SAVE.data.n.state_foundry_doge === 2 && SAVE.data.n.state_foundry_muffet === 2
                        ? [
                           ">* The way you managed to not only get past the local ELITE squad...",
                           ">{#f/10}* But BEFRIEND them???",
                           ">{#f/11}* You've got cojones, punk.",
                           ">{#f/8}* ... NOT THAT IT ACTUALLY MATTERS!"
                        ]
                        : SAVE.data.n.state_foundry_doge === 3 && SAVE.data.n.state_foundry_muffet === 3
                           ? [
                              ">{#f/10}* The way you managed to EMBARRASS the local ELITE squad?",
                              ">{#f/11}* I don't think I've ever seen those two so red-faced.",
                              ">{#f/8}* ... AS IF THAT'D WORK ON ME!"
                           ]
                           : [
                              ">{#f/10}* 你在谁都没有杀害的情况下\n  来到了这里。",
                              ">{#f/11}* 祝贺你啊，混球。\n* 你比一般的人类好一点。",
                              ">{#f/8}* ...说得好像我在乎一样！"
                           ]),
                     ">{#f/4}* 你知道对大家而言\n  什么事才更有意义吗？",
                     ">{#f/7}* 就是你的死！！！"
                  ]),
               ">{#f/17}* 你的生命不过是\n  将自由阻挡在我们\n  面前的障碍！！",
               ">{#f/1}* 就在此刻，\n  我能感受到大家的心\n  正随着共同的节奏鼓动！",
               ">* Everyone's been waiting their whole lives for this moment!",
               ">{#f/9}* 但我们一点也不慌张。",
               ">{#f/17}* 只要所有人团结一心，\n  我们绝不会败！",
               ">{#f/1}* 来吧，人类！\n* 让我们了结这一切吧，\n  就在此时，就在此地！",
               ">{#f/17}* 我会让你见识一下\n  怪物们的决心有多么强大！",
               ">{#f/1}* 当你准备好就\n  上前迎战吧！\n* 呋呼呼呼！"
            ],
      undynefinal2b1: [">{#f/7}* You're just a ruthless MURDERER!"],
      undynefinal2b1a: [">{#f/11}* Self-defense?\n* Please."],
      undynefinal2b1b: [
         ">{#f/11}* What? You thought I'd overlook what you were up to in the Outlands?",
         ">{#f/1}* Fuhuhu... think again."
      ],
      undynefinal2b2: () => [
         world.trueKills === 1
            ? ">{#f/9}* You didn't kill that monster because you had to."
            : ">{#f/9}* You didn't kill those monsters because you had to.",
         ">{#f/11}* You did it because it was EASY for you.\n* Because it was FUN.",
         ">{#f/16}* Do you think it was fun when I found out?"
      ],
      undynefinal2b2a: [
         ">{#f/9}* The canine unit.\n* The local ELITE squad.\n* And many others, too...",
         ">* Almost everyone I know and love, dead just like that."
      ],
      undynefinal2b2b: [
         ">{#f/9}* The canine unit, AND the local ELITE squad...",
         ">* People I've served with for years, gone in the blink of an eye."
      ],
      undynefinal2b2c: [
         ">{#f/9}* The local ELITE squad, who dedicated their lives to service...",
         ">* Gone in one fell swoop."
      ],
      undynefinal2b2d: [
         ">{#f/9}* The canine unit, who protected that little town for years...",
         ">* Gone without a trace."
      ],
      undynefinal2b2e: [
         ">{#f/9}* That ghost, who wanted nothing more than to fuse with their dummy...",
         ">* Erased in a mere moment."
      ],
      undynefinal2b2f: [
         ">{#f/9}* That spider, who only wanted to protect and care for the clans...",
         ">* Not only is she dead, but spiders' lives are in jeopardy."
      ],
      undynefinal2b2g: [
         ">{#f/9}* Doge, who had a strong and unwavering sense of duty...",
         ">* Even if putting her life at risk was her job, she's still dead."
      ],
      undynefinal2b2h: [
         ">{#f/9}* That big dog, one of the kindest and sweetest dogs ever...",
         ">* Eliminated before his time."
      ],
      undynefinal2b2i: [
         ">{#f/9}* Those two dogs, caring for each other through thick and thin...",
         ">* Their love and legacy, ripped away in an instant."
      ],
      undynefinal2b2j: [
         ">{#f/9}* That little dog who wanted nothing more than to be pet...",
         ">* Only to be met with a ruthless attack."
      ],
      undynefinal2b2k: [
         ">{#f/9}* Doggo, who I PERSONALLY looked after for some time...",
         ">* Now dead thanks to the whims of a single human."
      ],
      undynefinal2b2l: [
         ">{#f/9}* That woman in the Outlands... I didn't know her, but...",
         ">* She hasn't been seen since you arrived in Starton."
      ],
      undynefinal2b2m: [
         ">{#f/9}* Every. Single. Monster. who spent their lives in the factory...",
         ">* Only to have it all snatched away."
      ],
      undynefinal2b2n: [
         ">{#f/9}* Every. Single. Monster. who lived peacefully in Starton...",
         ">* Only to meet an untimely end."
      ],
      undynefinal2b2o: [
         ">{#f/9}* Those monsters who spent their lives here in the factory...",
         ">* Only to have it all be undone."
      ],
      undynefinal2b2p: [
         ">{#f/9}* Those monsters who lived peacefully in Starton...",
         ">* Slaughtered in cold blood."
      ],
      undynefinal2b2q1: [
         ">{#f/9}* One monster dead from each area thus far...",
         ">{#f/13}* It's like you have some kind of per-area kill quota."
      ],
      undynefinal2b2q2: [
         ">{#f/9}* Two monsters dead from each area thus far...",
         ">{#f/13}* It's like you have some kind of per-area kill quota."
      ],
      undynefinal2b2q3: [
         ">{#f/9}* Three monsters dead from each area thus far...",
         ">{#f/13}* It's like you have some kind of per-area kill quota."
      ],
      undynefinal2b2q4: [
         ">{#f/9}* Four monsters dead from each area thus far...",
         ">{#f/13}* It's like you have some kind of per-area kill quota."
      ],
      undynefinal2b2q5: [
         ">{#f/9}* Five monsters dead from each area thus far...",
         ">{#f/13}* It's like you have some kind of per-area kill quota."
      ],
      undynefinal2b2r: () => [
         world.trueKills === 1
            ? ">{#f/9}* That monster in the Outlands... I didn't really know them, but..."
            : ">{#f/9}* Those monsters in the Outlands... I didn't really know them, but...",
         ">* Thanks to you, they're dead now."
      ],
      undynefinal2b2s: [
         ">{#f/9}* Even if it was just one monster...",
         ">* That's still one less SOUL that'll get to see the stars one day."
      ],

      undynefinal2b2t: [
         ">{#f/9}* At least two monsters left home for the last time today.",
         ">* Thanks to you, their families will never see them again."
      ],
      undynefinal2b2u1: [
         ">{#f/9}* That big dog, who enjoyed the company of his comrades...",
         ">* Awakening to find them dead."
      ],
      undynefinal2b2u2: [
         ">{#f/9}* Those two dogs, always looking out for the other canines...",
         ">* Only to discover there's nobody to look out for anymore."
      ],
      undynefinal2b2u3: [
         ">{#f/9}* That little dog who mostly kept to itself...",
         ">* The other dogs' deaths might not bother it now, but they will someday."
      ],
      undynefinal2b2u4: [
         ">{#f/9}* Doggo, who spent years to find a home in the canine unit...",
         ">* Only to have it all ripped away again."
      ],
      undynefinal2b2v1: [
         ">{#f/9}* That big dog, as well as Dogamy and Dogaressa...",
         ">* All wiped from the face of Starton."
      ],
      undynefinal2b2v2: [
         ">{#f/9}* Both the big dog, and the little dog...",
         ">{#f/13}* So, according to you, only the average-sized dogs get to live."
      ],
      undynefinal2b2v3: [
         ">{#f/9}* That big dog, along with Doggo, too...",
         ">* Both dead thanks to the whims of a single human."
      ],
      undynefinal2b2v4: [
         ">{#f/9}* Those two dogs, always looking out for the other canines...",
         ">* Not only are THEY dead, but a little dog they looked after is, too."
      ],
      undynefinal2b2v5: [
         ">{#f/9}* Those two dogs, always looking out for the other canines...",
         ">* They, along with Doggo who they looked after, are all dead."
      ],
      undynefinal2b2v6: [
         ">{#f/9}* That little dog, as well as its comrade Doggo...",
         ">* Both dead thanks to the whims of a single human."
      ],
      undynefinal2b3: () => [
         ">{#f/11}* Do you think that's FUN?",
         ">* ...",
         ">{#f/17}* Well guess what, punk.",
         ...(SAVE.data.n.state_foundry_muffet === 1
            ? [">* No phone call's gonna save you THIS time."]
            : [">* Your time is UP."]),
         ">{#f/4}* All the pain you inflicted on the fallen...",
         ">{#f/7}* Every hope, every dream you've turned to dust...",
         ">{#f/1}* This hero's gonna send it all right back through her spear!",
         ">{#f/4}* NGAHHH!!!",
         ">{#f/5}* I'll show you how determined monsters truly are!",
         ">{#f/17}* Come on!\n* Step forward and let's end this!"
      ],
      undynefinal2c1: [">* ...", ">* 罢了。"],
      undynefinal2c2: () => [
         ">{#f/16}{#x1}* 听好了。",
         ">* 帕派瑞斯今天没来报到。",
         ">{#f/19}* ...",
         ">{#x2}* 你怎么想他都无所谓。",
         ">{#f/18}* 没错，帕派瑞斯是很古怪，\n  很天真，很自恋...",
         ">{#f/20}{#x3}* 可是，他绝不会\n  错过任何一次报到。",
         ">{#f/18}{#x4}* 而且，不管几点钟\n  给他打电话...",
         ">{#f/20}{#x5}* 他都绝不会\n  响铃两次还不接。",
         ">* ...",
         ">{#f/18}{#x6}* 现在，他不在了。",
         ">{#f/22}{#x7}* 他的兄弟，也失踪了。",
         ">* ...",
         ">{#f/18}* 告诉我，你把他怎么了？",
         ">{#f/11}{#x8}* 你把他{^6} 怎{^6} 么{^6} 了{^6}？",
         ...((SAVE.data.n.state_foundry_doge === 1 ? 1 : 0) +
            (SAVE.data.n.state_starton_doggo === 2 ? 1 : 0) +
            (SAVE.data.n.state_starton_dogs === 2 ? 2 : 0) +
            (SAVE.data.n.state_starton_greatdog === 2 ? 1 : 0) +
            (SAVE.data.n.state_starton_lesserdog === 2 ? 1 : 0) >
            1
            ? [
               ">{#f/16}{#x9}* 不仅如此，好几名卫队成员\n  也接连失踪...",
               ">{#f/13}* 他们，是不是也被你杀了？"
            ]
            : [
               ">{#f/16}{#x9}* 帕派瑞斯，我每天\n  都会亲自训练他...",
               ">{#f/19}* 尽管我早知道他傻到\n  不会去伤害任何人..."
            ]),
         ">* ...",
         ">{#f/16}{#x10}* 想前进，随你。\n* 我给你准备的时间。",
         ">{#f/20}* 但只要你再往前踏出一步...",
         ">{#f/11}{#x11}* 我就会杀了你。"
      ],
      undynefinal3: () => [
         ...(SAVE.data.n.state_starton_papyrus === 1
            ? [">{#p/undyne}{#f/21}* 那好。", ">{#f/19}* ..."]
            : world.trueKills > 1
               ? [">{#p/undyne}{#f/11}* 混蛋，你自找的。", ">{#f/9}* Ready or not..."]
               : respecc()
                  ? [">{#p/undyne}{#f/1}* 那么，好了...！", ">{#f/17}* It's time you met your one true equal!"]
                  : [">{#p/undyne}{#f/1}* 那么，好了...！", ">{#f/17}* 别再想着逃走！"])
      ],
      undynefinal3x: [">{#f/7}{*}* 去死吧！！！{#x1}{^999}"],
      undynehouse1: [">{#p/basic}* 锁住了。"],
      undynehouse2: () =>
         SAVE.data.b.svr || world.runaway
            ? [">{#p/human}* (You can't seem to find a way in.)"]
            : SAVE.data.n.plot === 72
               ? [
                  ">{#p/basic}* First, the goat family...\n* Then, the spider queen...",
                  ">* And now, the fish lady...",
                  ">* I'll miss her... just like I'm going to miss being here...",
                  ">* But maybe... I've inhabited this house for too long...",
                  ">* Maybe I'll be happier if I spend time... somewhere new..."
               ]
               : [">{#p/basic}* 真的着火了。\n* 你不能进去。"],
      walktext: {
         bird: () => [
            ">{#p/kidd}{#f/4}* 没路了...",
            world.genocide
               ? ">{#f/3}* 那只小鸟肯定忙着\n  带他去另一边了，哈哈。"
               : ">{#f/3}* 那只小鸟现在肯定很忙，\n  哈哈。"
         ],
         birdx: [">{#p/basic}* ...但是谁也没有来。"],
         path1: () =>
            SAVE.data.n.state_foundry_muffet === 1
               ? [
                  ">{#p/kidd}{#f/8}* I feel like I'm gonna puke...",
                  SAVE.data.n.state_foundry_kidddeath > 5
                     ? ">* We killed so many monsters..."
                     : SAVE.data.n.state_foundry_kidddeath > 1
                        ? ">* We killed other monsters..."
                        : ">* We killed a monster..."
               ]
               : [
                  ">{#p/kidd}{#f/1}* 我有跟你说过我们是\n  怎么上航天飞机\n  驾驶课的吗！？",
                  ">{#p/kidd}{#f/7}* 真的超级壮观！"
               ],
         path2: () =>
            SAVE.data.n.state_foundry_muffet === 1
               ? [
                  SAVE.data.b.f_state_kidd_fight
                     ? ">{#p/kidd}{#f/4}* 虽然... 你让我攻击他们..."
                     : ">{#p/kidd}{#f/4}* 虽然... 一直是你在攻击他们...",
                  ">{#p/kidd}{#f/8}* 但你真的...\n* ...真的打-打心里想...\n* ...那么做吗...？"
               ]
               : [
                  ">{#p/kidd}{#f/2}* 有一天，那个矮个子骷髅\n  和他的兄弟来代课...",
                  ">{#p/kidd}{#f/2}* 还有，虽然是个秘密，\n  但是...",
                  ">{#f/1}* 他们让我自己一个人\n  绕着前哨站飞！！"
               ],
         path3: () =>
            SAVE.data.n.state_foundry_muffet === 1
               ? [
                  ">{#p/kidd}{#f/4}* 我从没想伤害任何人，\n  我只是...\n* 我...",
                  ">{#p/kidd}{#f/8}* 我只是想醒过来...\n* 好希望... 这只是场噩梦..."
               ]
               : [
                  ">{#p/kidd}{#f/1}* 也许有一天我会成为\n  一名真正的飞行员，\n  拥有自己的星际飞船。",
                  ">{#p/kidd}{#f/1}* 侧面画着火焰，\n  还有巨大的翅膀，\n  还有...",
                  ">{#p/kidd}{#f/6}* 天啊，肯定超酷的..."
               ],
         path4: () =>
            SAVE.data.n.state_foundry_muffet === 1
               ? [">{#p/kidd}{#f/8}* I...", ">{#f/8}* 我...", ">{#f/5}* 我... \n* ...我会住嘴的。"]
               : [
                  ">{#p/kidd}{#f/2}* 我们可以去宇宙的\n  任何地方，伙计...",
                  ">{#p/kidd}{#f/1}* 最好的事情呢？\n* 莫不如，不用，上学！"
               ],
         path5: [">{#p/kidd}{#f/4}* 等等..."],
         path6: () =>
            SAVE.data.n.state_foundry_muffet === 1
               ? [
                  ">{#p/kidd}{#f/8}* 你一个人是过不去的...",
                  ">{#p/kidd}{#f/8}* ...",
                  ">{#p/kidd}{#f/5}* ...我帮你。"
               ]
               : [
                  ">{#p/kidd}{#f/2}* 你确定你能跨过\n  那个空隙吗？",
                  ">{#p/kidd}{#f/1}* 哟，我来帮你！"
               ],
         path7: () =>
            SAVE.data.n.state_foundry_muffet === 1
               ? [">{#p/kidd}{#f/8}* 爬上来。"]
               : [">{#p/kidd}{#f/1}* 爬上来！"],
         path8: () =>
            SAVE.data.n.state_foundry_muffet === 1
               ? [
                  ">{#p/kidd}{#f/4}* ...\n* 唉...",
                  ">{#f/8}* 要是以后你\n  再也见不到我了...\n* 告诉我父母...",
                  ">{#f/5}* ...\n* 就当没生过我吧。"
               ]
               : [">{#p/kidd}{#f/1}* 别担心，伙计！\n* 我肯定能找条路过去的！"],
         prechase: [
            ">{#p/kidd}{#f/4}* 嘿... 呃...\n* 我感觉这地方有点吓人...",
            ">{#f/3}* 要不咱们回去吧？"
         ],
         rescue1: () => [
            ">{#p/kidd}{#f/7}* 安黛因，不要！\n* 那是我的朋友！",
            geno()
               ? ">{#p/undyne}* No, they're not.\n* You really shouldn't be with them, kiddo."
               : ">{#p/undyne}* 回家吧，孩子。\n* 你跟这家伙不是一路人。"
         ],
         rescue2: [">{*}{#p/kidd}{#f/8}* 安黛因...{#x1}{^20}{%}"],
         rescue3: [
            ">{*}{#p/kidd}{#f/13}* 我保证，我...\n  我-我会回来找你的！{^20}{%}",
            ">{*}{#p/kidd}{#f/13}* 你可千万别死，好吗？{^20}{%}"
         ],
         snailcom: [
            ">{#p/kidd}{#f/9}* That ghost and I played electrosnail here one time...",
            ">* Have you ever...?",
            ">{#p/asriel2}{#f/10}* Um... no?",
            ">{#f/4}* Not in this timeline, anyway.",
            ">{#p/kidd}{#f/9}* Timeline?"
         ],
         trashcom: [
            ">{#p/asriel2}{#f/13}* Oh, hey...\n* This is where we...",
            ">{#f/13}* Where you...",
            ">{#f/15}* ...",
            ">{#f/16}* Oh, $(name)...",
            ">{#p/kidd}{#f/9}* ...？",
            ">{#p/asriel2}{#f/6}* It's nothing.",
            ">{#f/7}* Just a little reminder, that's all.",
            ">{#p/kidd}{#f/9}* Oh..."
         ],
         undynecom: [
            ">{#p/kidd}{#f/11}* Oh, it's...\n* This is Undyne's house...!",
            ">{#p/asriel2}{#f/8}* Thankfully, Undyne's not here right now.",
            ">{#f/6}* If all goes to plan, she never will be again."
         ]
      },
      watercooler1: () => [
         ...(SAVE.data.b.svr
            ? [">{#p/human}* (The label describes using this fluid only in a specific kind of emergency.)"]
            : [
               ">{#p/basic}* 这是个装满电阻尼液的饮水机，\n  上面有一个奇怪的警告标签。",
               ">{#p/basic}* “仅用于消除便携式\n  喷气背包的静电干扰。”"
            ]),
         choicer.create("* （要接一杯吗？）", "是", "否")
      ],
      watercooler2a: [">{#p/human}* （你现在拿着一杯电阻尼液。）"],
      watercooler2b: [">{#p/human}* （你决定不接。）"],
      watercooler3: () => [
         ...(SAVE.data.b.svr
            ? [">{#p/human}* (The label describes using this fluid only in a specific kind of emergency.)"]
            : [
               ">{#p/basic}* 这是个装满电阻尼液的饮水机，\n  上面有一个奇怪的警告标签。",
               ">{#p/basic}* “仅用于消除便携式\n  喷气背包的静电干扰。”"
            ]),
         ">{#p/human}* (You already have a cup.)"
      ]
   },

   b_group_foundry: {
      moldsmalMoldbygg1: () =>
         world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
            ? [">{#p/kidding}* 呃啊，霉臭味！"]
            : [">{#p/story}* It's a gelatin festival!"],
      moldsmalMoldbygg2a: () =>
         world.goatbro
            ? [">{#p/asriel2}* 只剩一个了。"]
            : world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
               ? [">{#p/kidding}* 只剩我们了！"]
               : [">{#p/story}* Gelata is all alone now."],
      moldsmalMoldbygg2b: () =>
         world.goatbro
            ? [">{#p/asriel2}* 只剩一个了。"]
            : world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
               ? [">{#p/kidding}* 只剩我们了！"]
               : [">{#p/story}* Gelatini now blorbs solo."],
      woshuaMoldbygg2: () =>
         world.goatbro
            ? [">{#p/asriel2}* 矛盾二人组。"]
            : world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
               ? [">{#p/kidding}* 哇，你好..."]
               : [">{#p/story}* Skrubbington straddles up.\n* Much to its dismay, Gelata is also here..."],
      woshuaMoldbygg2a: () =>
         world.goatbro
            ? [">{#p/asriel2}* 只剩一个了。"]
            : world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
               ? [">{#p/kidding}* 只剩我们了！"]
               : [">{#p/story}* Gelata is all alone now."],
      woshuaMoldbygg2b: () =>
         world.goatbro
            ? [">{#p/asriel2}* 只剩一个了。"]
            : world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
               ? [">{#p/kidding}* 只剩我们了！"]
               : [">{#p/story}* Skrubbington is not sure how to feel anymore."]
   },
   b_opponent_woshua: {
      tweet: "tweet",
      epiphany: [
         [">{#p/basic}{~}Skrubby accepts your mercy."],
         () =>
            world.meanie
               ? [">{#p/basic}{~}Skrubby will retreat now..", ">{#p/basic}{~}Thx for warning!"]
               : world.flirt > 9
                  ? [">{#p/basic}{~}Skrub u entire body..", ">{#p/basic}{~}Special service just for you!"]
                  : SAVE.data.b.oops
                     ? [
                        ">{#p/basic}{~}Even if u get dirty sometimes..",
                        ">{#p/basic}{~}Skrubby will be there to clean u."
                     ]
                     : [">{#p/basic}{~}Skrubby accepts hug..", ">{#p/basic}{~}Regard- less if u are clean or dirty."],
         [">{#p/basic}{~}Skrubby knows what must be done.", ">{#p/basic}{~}Thx for showing me the way."],
         [">{#p/basic}{~}Okie.\nTake u G."]
      ],
      act_check: () =>
         world.goatbro
            ? [">{#p/asriel2}* Skrubbington，洁癖狂魔。\n* 眼里容不下半点灰尘。"]
            : [
               ">{#p/story}* SKRUBBINGTON - ATK 18 DEF 5\n* This humble germophobe seeks to cleanse the whole galaxy."
            ],
      act_check2: [
         ">{#p/story}* SKRUBBINGTON - ATK 18 DEF 5\n* This humble germophobe wants to go home to wash its wounds."
      ],
      act_check3: [
         ">{#p/story}* SKRUBBINGTON - ATK 18 DEF 5\n* One wheel closer to a cleaner future for monsterkind."
      ],
      act_check4: [
         ">{#p/story}* SKRUBBINGTON - ATK 18 DEF 5\n* This humble germophobe's love story is as soapy as it gets."
      ],
      name: "* Skrubbington",
      status1: () =>
         world.goatbro
            ? [">{#p/asriel2}* Skrubbington."]
            : world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
               ? [">{#p/kidding}* Skrubby来了！"]
               : [">{#p/story}* Skrubbington strolls in."],
      idleTalk1a: [">{#p/basic}{~}Skrub u SOUL"],
      idleTalk1b: [">{#p/basic}{~}Skrub u hands"],
      idleTalk1c: [">{#p/basic}{~}Skrub u face"],
      idleTalk1d: [">{#p/basic}{~}Skrub u hair"],
      idleTalk1e: [">{#p/basic}{~}Skrub u feet"],
      idleTalk2a: [">{#p/basic}{~}Skrub a dub-dubs"],
      idleTalk2b: [">{#p/basic}{~}Oops, I meant..\nSkrub a sub-SUBS"],
      idleTalk2c: [">{#p/basic}{~}Skrub a sub-subs"],
      idleTalk3: () =>
         world.trueKills > 0 ? [">{#p/basic}{~}Your SOUL is unclean."] : [">{#p/basic}{~}\x00*whistle whistle*"],
      cleanTalk: [">{#p/basic}{~}Green means clean"],
      jokeTalk1: [">{#p/basic}{~}NO. THAT JOKE'S TOO.. DIRTY"],
      jokeTalk2: [">{#p/basic}{~}EUGH.. I CAN'T BELIEVE THIS"],
      randStatus1: () =>
         world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
            ? [">{#p/kidding}* Look at the little bird!"]
            : [">{#p/story}* Skrubbington is friends with a little bird."],
      randStatus2: () =>
         world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
            ? [">{#p/kidding}* You should've SEEN when it tried to clean my school lunch off."]
            : [">{#p/story}* Skrubbington is rinsing off a saucer."],
      randStatus3: () =>
         world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
            ? [">{#p/kidding}* We should go spacesuit-shining with this one."]
            : [">{#p/story}* Skrubbington is looking for some good clean fun."],
      randStatus4: () =>
         world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
            ? [">{#p/kidding}* Squeaky clean?\n* This is gonna be FREAKY clean."]
            : [">{#p/story}* Smells like detergent."],
      randStatus5: () =>
         world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
            ? [">{#p/kidding}* You do NOT wanna get dirty around this one, dude."]
            : [">{#p/story}* Skrubbington wonders if stardust is sanitary."],
      hurtStatus: () =>
         world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
            ? [">{#p/kidding}* 一切... 还好吗？"]
            : [">{#p/story}* Skrubbington is revolted at its own wounds."],
      jokeText1: [">{#p/human}* (You tell a joke about a rusty piece of space junk.)"],
      jokeText2: [">{#p/human}* (You tell a joke about atmospheric pollution.)"],
      jokeText3: [">{#p/human}* (You tell a joke about two starships that got stuck in a trash barge.)"],
      touchText0: [
         ">{#p/human}* (You give Skrubbington a friendly pat.)",
         ">{#p/basic}* Skrubbington can't stand your slime-covered hands and runs away!"
      ],
      touchText1: [
         ">{#p/human}* (You give Skrubbington a friendly pat.)",
         ">{#p/basic}* Skrubbington recoils from your touch."
      ],
      touchText2: [
         ">{#p/human}* (You give Skrubbington a friendly pat.)",
         ">{#p/basic}* Skrubbington is flattered."
      ],
      cleanText1: [
         ">{#p/human}* (You ask Skrubbington to clean you.)",
         ">{#p/basic}* Skrubbington hops around excitedly."
      ],
      flirtTalk1: [">{#p/basic}{~}No!\nUnclean romance!"],
      flirtTalk2: [">{#p/basic}{~}Sparkle and shine!"],
      cleanText2: [
         ">{#p/human}* (You ask Skrubbington to clean you.)",
         ">{#p/basic}* Skrubbington resumes cleaning."
      ]
   },
   b_opponent_moldbygg: {
      sexyChat: [">{#p/basic}{~}\x00*sexy shuffle*"],
      epiphany: [
         [">{#p/basic}{~}\x00*slime sounds*"],
         () =>
            world.meanie
               ? [">{#p/basic}{~}Guoooh.."]
               : world.flirt > 9
                  ? [">{#p/basic}{~}\x00*erotic shuffle*"]
                  : SAVE.data.b.oops
                     ? [">{#p/basic}{~}\x00*happy shuffle*"]
                     : [">{#p/basic}{~}\x00*slimy embrace*"],
         [">{#p/basic}{~}Final roar."],
         [">{#p/basic}{~}\x00*shiny shuffle*"]
      ],
      status1: () =>
         world.goatbro
            ? [">{#p/asriel2}* Gelata."]
            : world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
               ? [">{#p/kidding}* 哇！"]
               : [">{#p/story}* Gelata appears!"],
      act_check: () =>
         world.goatbro
            ? [">{#p/asriel2}* Gelata，恶心粘球。\n* 为啥我要多费口舌给你解释这些？"]
            : [">{#p/story}* GELATA - ATK 18 DEF 18\n* Not so tini anymore."],
      act_check2: [">{#p/story}* GELATA - ATK 18 DEF 18\n* Not in the best of shape."],
      act_check3: [">{#p/story}* GELATA - ATK 18 DEF 18\n* Not against becoming a full- time jelly cushion."],
      act_check4: [">{#p/story}* GELATA - ATK 18 DEF 18\n* Not your ideal relationship..."],
      act_topple1: [">{#p/human}* (You try to topple Moldbygg, but it hasn't been weakened enough.)"],
      act_topple2: [">{#p/human}* (You topple Moldbygg.)\n* (Its body parts collapse and roll into the distance.)"],
      name: "* Gelata",
      idleTalk1: [">{#p/basic}{~}Guoooh!"],
      idleTalk2: [">{#p/basic}{~}\x00*slime sounds*"],
      idleTalk3: [">{#p/basic}{~}Roar."],
      idleTalk4: [">{#p/basic}{~}\x00*eager shuffle*"],
      randStatus1: () =>
         world.goatbro
            ? [">{#p/asriel2}* Gelata."]
            : world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
               ? [">{#p/kidding}* What does it want?"]
               : [">{#p/story}* Gelata wants to carry you."],
      randStatus2: () =>
         world.goatbro
            ? [">{#p/asriel2}* Gelata."]
            : world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
               ? [">{#p/kidding}* 我好奇我要是抱抱它\n  会发生什么。"]
               : [">{#p/story}* Gelata wobbles anxiously."],
      randStatus3: () =>
         world.goatbro
            ? [">{#p/asriel2}* Gelata."]
            : world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
               ? [">{#p/kidding}* 黏糊糊的... 但我喜欢！"]
               : [">{#p/story}* Gelata mills about nearby."],
      randStatus4: () =>
         world.goatbro
            ? [">{#p/asriel2}* Gelata."]
            : world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
               ? [">{#p/kidding}* 啥都黏糊糊的。"]
               : [">{#p/story}* Smells like a jell-o store."],
      hurtStatus: () =>
         world.goatbro
            ? [">{#p/asriel2}* 离死不远了。"]
            : world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
               ? [">{#p/kidding}* Gelata的状态看起来不太好..."]
               : [">{#p/story}* Gelata has seen better days."],
      act_handshake: [
         ">{#p/human}* (You offer a handshake.)\n* (Gelata engulfs you in slime.)",
         ">{#p/story}* 你的移速下降了！"
      ],
      act_sit: [">{#p/human}* (You sit on top of Gelata.)\n* (Gelata now feels that it has been useful to you.)"],
      distanceStatus: () =>
         world.goatbro
            ? [">{#p/asriel2}* Gelata."]
            : world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
               ? [">{#p/kidding}* Can I come sit too!?"]
               : [">{#p/story}* Gelata seems happy with your presence."],
      act_flirt: [
         ">{#p/human}* (You wiggle your hips.)\n* (Gelata does a tornado spin.)",
         ">{#p/basic}* A meaningful conversation...?"
      ]
   },
   b_opponent_moldfake: {
      act_check: () =>
         world.goatbro
            ? [">{#p/asriel2}* Gelatini...\n* 直觉告诉我，这只怪物可没有\n  它外表看起来那么简单。"]
            : [">{#p/story}* GELATINI - ATK 18 DEF 18\n* Not a squorch to be heard."],
      name: "* Gelatini",
      smalTalk: [">{#p/basic}{~}..."],
      status1: () => (world.goatbro ? [">{#p/asriel2}* Gelatini."] : [">{#p/story}* Gelatini出现了？"]),
      fakeStatus1: () =>
         world.goatbro
            ? [">{#p/asriel2}* Gelatini."]
            : world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
               ? [">{#p/kidding}* Do Gelatinis always sit this still?"]
               : [">{#p/story}* Gelatini isn't moving."],
      fakeStatus2: () =>
         world.goatbro
            ? [">{#p/asriel2}* Gelatini."]
            : world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
               ? [">{#p/kidding}* Something's off with that Gelatini..."]
               : [">{#p/story}* Gelatini is a perfectly tempered gelatin with no flaws."],
      fakeStatus3: () =>
         world.goatbro
            ? [">{#p/asriel2}* Gelatini."]
            : world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
               ? [">{#p/kidding}* Are Gelatinis always this quiet?"]
               : [">{#p/story}* It's Gelatini's quiet time."],
      fakeStatus4: () =>
         world.goatbro
            ? [">{#p/asriel2}* Gelatini."]
            : world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
               ? [">{#p/kidding}* This seems kinda weird."]
               : [">{#p/story}* Smells like a jell-o store."],
      act_imitate: [">{#p/human}* (You approach Gelatini.)", ">{#p/basic}* Suddenly...!"],
      act_flirt: [">{#p/human}* (You wiggle your hips.)", ">{#p/basic}* Suddenly...!"],
      act_slap: [">{#p/human}* (You give Gelatini a big slap.)", ">{#p/basic}* Suddenly...!"]
   },
   b_opponent_shyren: {
      act_check: [">{#p/story}* SHYREN - ATK 19 DEF 0\n* A prophetic singer, held back by her own shame."],
      act_check2: [">{#p/story}* SHYREN - ATK 19 DEF 0\n* With newfound confidence, she takes to the stage!"],
      act_check3: [">{#p/story}* SHYREN - ATK 19 DEF 0\n* With newfound confidence, she sings for the crowd!"],
      act_check4: [">{#p/story}* SHYREN - ATK 19 DEF 0\n* With newfound confidence, she's the star of the show!"],
      act_check5: [">{#p/story}* SHYREN - ATK 19 DEF 0\n* A prophetic singer, held back by fresh wounds."],
      act_check6: [">{#p/story}* SHYREN - ATK 19 DEF 0\n* Alas, the bitter dregs of rejection."],
      act_check7: [">{#p/story}* SHYREN - ATK 19 DEF 0\n* Suddenly, love songs."],
      awkwardtoot: [">{#p/basic}{~}(awkward toot)"],
      creepStatus: () =>
         SAVE.data.n.state_foundry_muffet === 1
            ? [">{#p/story}* Shyren cowers in the corner."]
            : [">{#p/kidding}* I don't think that helped..."],
      creepText1: [
         ">{#p/human}* (You flirt with Shyren, offering your best smile.)",
         ">{#p/basic}* Shyren turns away..."
      ],
      creepText2: [
         ">{#p/human}* (You flirt with Shyren again.)",
         ">{#p/basic}* Shyren is uncomfortable now, and decides to leave."
      ],
      encourage1: () =>
         SAVE.data.n.state_foundry_muffet === 1
            ? [">{#p/story}* Shyren seems much more comfortable singing along."]
            : [">{#p/kidding}* A sing-along?\n* Heck yeah, dude!"],
      encourage2: () =>
         world.dead_skeleton || geno()
            ? world.genocide
               ? SAVE.data.n.state_foundry_muffet === 1
                  ? [">{#p/story}* The eerily quiet air passes behind the symphony of voices."]
                  : [">{#p/kidding}* Haha, this is kinda fun!\n* Even though it's just the three of us..."]
               : SAVE.data.n.state_foundry_muffet === 1
                  ? [">{#p/story}* A shadowy figure watches the commotion from afar."]
                  : [">{#p/kidding}* Yo... uh...\n* What's that weird shadowy guy doing over there?"]
            : SAVE.data.n.state_foundry_muffet === 1
               ? [">{#p/story}* Sans is selling tickets made of carbon fiber."]
               : [">{#p/kidding}* Is that short skeleton selling TICKETS now??"],
      encourage3: () =>
         world.dead_skeleton || geno()
            ? SAVE.data.n.state_foundry_muffet === 1
               ? [">{#p/story}* Your previous hums echo back into the room."]
               : [">{#p/kidding}* This place is so empty, we can hear ourselves from the past.\n* So trippy..."]
            : SAVE.data.n.state_foundry_muffet === 1
               ? [">{#p/story}* The crowd tosses clothing.\n* It's a storm of cotton balls."]
               : [">{#p/kidding}* Woah, so many people!"],
      encourage4: () =>
         SAVE.data.n.state_foundry_muffet === 1
            ? [">{#p/story}* Shyren thinks about her future."]
            : [">{#p/kidding}* One last time!\n* One last time!\n* One last time!"],
      flirtText1: [">{#p/human}* (You flirt with Shyren.)\n* (Though uneasy, she blushes a little in return.)"],
      flirttoot: [">{#p/basic}{~}(happy toot)"],
      hum0: [">{#p/human}* (You hum a melancholy waltz.)\n* (Shyren follows your melody.)"],
      hum1: [">{#p/human}* (You hum a funky tune.)\n* (Shyren follows your melody.)"],
      hum2: [">{#p/human}* (You hum a bluesy song.)\n* (Shyren follows your melody.)"],
      hum3: [">{#p/human}* (You hum a jazz ballad.)\n* (Shyren follows your melody.)"],
      hum4: [">{#p/human}* (You hum an apology song.)\n* (Shyren calms down.)"],
      humX1: () =>
         world.dead_skeleton || geno()
            ? [">{#p/human}* (You hum some more.)", ">{#p/basic}* It's a veritable duet!"]
            : [
               ">{#p/human}* (You hum some more.)",
               ">{#p/basic}* Monsters are drawn to the music.",
               ">{#p/basic}* Suddenly, it's a concert..."
            ],
      humX2: () =>
         world.dead_skeleton || geno()
            ? [
               ">{#p/human}* (You hum some more.)",
               ">{#p/basic}* Shyren is happy to have you as her vocal partner."
            ]
            : [
               ">{#p/human}* (You hum some more.)",
               ">{#p/basic}* The seats are sold out.\n* It's a rockstar performance!"
            ],
      humX3: () =>
         world.dead_skeleton || geno()
            ? [
               ">{#p/human}* (You hum some more.)",
               ">{#p/basic}* Even without a crowd, a dance of melody and harmony persists."
            ]
            : [
               ">{#p/human}* (You hum some more.)",
               ">{#p/basic}* Despite your success, the constant attention...",
               ">* The tours...\n* The groupies...\n* It's all..."
            ],
      humX4: () => [
         ">{#p/human}* (You and Shyren have come so far, but it's time.)",
         ">* (You both have your own journeys to embark on.)",
         ">* (You hum a farewell song.)"
      ],
      hurtStatus: [">{#p/story}* Shyren's voice is raspy."],
      name: "* Shyren",
      randStatus1: () =>
         SAVE.data.n.state_foundry_muffet === 1
            ? [">{#p/story}* Shyren hums very faintly."]
            : [">{#p/kidding}* Are you okay?"],
      randStatus2: () =>
         SAVE.data.n.state_foundry_muffet === 1
            ? [">{#p/story}* Shyren pretends to be a pop idol."]
            : [">{#p/kidding}* You look sad..."],
      randStatus3: () =>
         SAVE.data.n.state_foundry_muffet === 1
            ? [">{#p/story}* Shyren taps a little beat with her fins."]
            : [">{#p/kidding}* Do you need any help?"],
      randStatus4: () =>
         SAVE.data.n.state_foundry_muffet === 1
            ? [">{#p/story}* Shyren thinks about doing karaoke by herself."]
            : [">{#p/kidding}* Is there anything I can do?"],
      randStatus5: () =>
         SAVE.data.n.state_foundry_muffet === 1
            ? [">{#p/story}* Smells like music."]
            : [">{#p/kidding}* Wait... what's with her body?"],
      sadtalk1: [">{#p/basic}{~}..\n..\ntoot\n.."],
      sadtalk2: [">{#p/basic}{~}..\n..\nhum hum\n.."],
      status1: () =>
         SAVE.data.n.state_foundry_muffet === 1
            ? [">{#p/kidding}* 不...\n* 别再这样了..."]
            : [">{#p/kidding}* 哟，你还好吗？\n* 你看起来很难过..."],
      talk3: [">{#p/basic}{~}si re, si re, si mi, si mi"],
      talk4: [">{#p/basic}{~}Si Fa Si Fa So Fa So Mi Re Re"],
      talk5: [">{#p/basic}{~}Mi So Mi So Mi Si Mi La Si So"],
      talk6: [">{#p/basic}{~}(pas- sionate tooting)"],
      talk7: [">{#p/basic}{~}(final toot)"],
      wave1: [">{#p/human}* (You wave your arms wildly.)\n* (Nothing happens.)"],
      wave2: () =>
         world.genocide
            ? [">{#p/human}* (You wave your arms wildly.)\n* (Nothing happens.)"]
            : [">{#p/human}* (You wave your arms wildly.)", ">{#p/basic}* The crowd eats it up!"],
      act_boo1: [">{#p/human}* (You boo Shyren.)", ">{#p/basic}* Her head down, Shyren moves away quietly..."],
      act_boo2: [
         ">{#p/human}* (You boo Shyren.)",
         ">{#p/basic}* Shyren, seeing how you handle rejection, leaves in a huff."
      ],
      act_boo3: [
         ">{#p/human}* (You boo Shyren.)",
         ">{#p/basic}* Shyren's fleeting joy fades just as soon as it came to her."
      ],
      act_boo4: [
         ">{#p/human}* (You boo Shyren.)",
         ">{#p/basic}* The crowd, distraught, watches as Shyren flees the scene."
      ],
      act_boo5: [
         ">{#p/human}* (You boo Shyren.)",
         ">{#p/basic}* The betrayal brings Shyren to tears as she flees the scene."
      ]
   },
   b_opponent_radtile: {
      epiphany: [
         [">{#p/basic}{~}Until next time, G."],
         () =>
            world.meanie
               ? [">{#p/basic}{~}Huh..!\nSince when did you get scary!"]
               : world.flirt > 9
                  ? [">{#p/basic}{~}This feeling..", ">{#p/basic}{~}I mustn't resist!"]
                  : SAVE.data.b.oops
                     ? [">{#p/basic}{~}Yeah..\nWe make a pretty radical team."]
                     : [">{#p/basic}{~}It's so comfort- able.."],
         [">{#p/basic}{~}At least my end will serve a purpose.", ">{#p/basic}{~}Peace 'n' tran- quility, G."],
         [">{#p/basic}{~}Here's your G, my G!"]
      ],
      act_check: () =>
         world.goatbro
            ? [">{#p/asriel2}* Radtile，自诩“酷毙”的鳄鱼。\n* 真是可笑至极，\n  瞧瞧这个二货到底有多土。"]
            : [">{#p/story}* RADTILE - ATK 24 DEF 12\n* A stargazer in starglasses.\n* Favorite genre: Kriobeat"],
      act_check2: [">{#p/story}* RADTILE - ATK 24 DEF 12\n* Things aren't looking so hot for this cool crocodile."],
      act_check3: [">{#p/story}* RADTILE - ATK 24 DEF 12\n* This cool crocodile is on fire."],
      act_check4: [
         ">{#p/story}* RADTILE - ATK 24 DEF 12\n* When it comes to romance, this cool crocodile is stone cold."
      ],
      name: "* Radtile",
      status1: () =>
         world.goatbro
            ? [">{#p/asriel2}* Radtile。"]
            : world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
               ? [">{#p/kidding}* 别是这家伙呀..."]
               : [">{#p/story}* Radtile makes an impression!"],
      randStatus1: () =>
         world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
            ? [">{#p/kidding}* That sure is an interesting hat he's got on his head."]
            : [">{#p/story}* Radtile adjusts his hat."],
      randStatus2: () =>
         world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
            ? [">{#p/kidding}* Everyone around here just loves Raddy's little mirror."]
            : [">{#p/story}* Radtile looks deeply into his mirror image."],
      randStatus3: () =>
         world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
            ? [">{#p/kidding}* What's he doing, anyway?"]
            : [">{#p/story}* Radtile is making gestures to improve his cool factor."],
      randStatus4: () =>
         world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
            ? [">{#p/kidding}* I wonder what his face looks like."]
            : [">{#p/story}* Smells like an old skatepark."],
      idleTalk1: [">{#p/basic}{~}Check it."],
      idleTalk2: [">{#p/basic}{~}Take a looksie."],
      idleTalk3: [">{#p/basic}{~}Sneak a peek.."],
      idleTalk4: [">{#p/basic}{~}Give it a gaze.."],
      insultIdleTalk1: [">{#p/basic}{~}Meh."],
      insultIdleTalk2: [">{#p/basic}{~}Whatever."],
      insultIdleTalk3: [">{#p/basic}{~}\x00*shrugs*"],
      insultIdleTalk4: [">{#p/basic}{~}Very un- cool."],
      act_praise: [">{#p/human}* (You tell Radtile he's as cool as a quantum cucumber.)"],
      act_praise_bullied: [">{#p/human}* (You tell Radtile his scars make him look tougher.)"],
      complimentTalk1: [">{#p/basic}{~}Were you really lookin'?"],
      complimentTalk2: [">{#p/basic}{~}Check first, opinions later."],
      complimentTalk3: [">{#p/basic}{~}Show and tell, in that order."],
      complimentPostInsultTalk1: [">{#p/basic}{~}You're a liar, anyway."],
      complimentPostInsultStatus: () =>
         world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
            ? [">{#p/kidding}* Yeah, I don't think that's gonna work now, dude..."]
            : [">{#p/story}* Radtile isn't having it."],
      flirtTalk1: [">{#p/basic}{~}Woah, hey, hold on.."],
      complimentStatus: () =>
         world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
            ? [">{#p/kidding}* Maybe if you show him you're checking him out first...?"]
            : [">{#p/story}* Radtile wants you to check him out first."],
      checkTalk: [">{#p/basic}{~}Study me, heh heh."],
      realTalk1: [">{#p/basic}{~}Right on."],
      realStatus: () =>
         world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
            ? [">{#p/kidding}* You did it!\n* ... can we leave now?"]
            : [">{#p/story}* Radtile's feeling a whole lot cooler than before."],
      realTalkY1: [">{#p/basic}{~}\x00*fist bump*"],
      realTalkY2: [">{#p/basic}{~}You're the coolest."],
      realTalkY3: [">{#p/basic}{~}Let's rock 'n' roll."],
      shockTalk1: [">{#p/basic}{~}.. cool."],
      shockStatus: () =>
         world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
            ? [">{#p/kidding}* Uh..."]
            : [">{#p/story}* Radtile is not amused."],
      act_insult: [">{#p/human}* (You call Radtile a loser, and tell him to shut up.)"],
      act_insult_bullied: [">{#p/human}* (You mock Radtile's bruises, and tell him to go away.)"],
      act_flirt: [">{#p/human}* (You beckon Radtile.)"],
      act_flirt_bullied: [">{#p/human}* (You tell Radtile he's beautiful no matter how disfigured he is.)"],
      insultTalk1: [">{#p/basic}{~}And what if I don't?"],
      insultStatus: () =>
         world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
            ? [">{#p/kidding}* Uh..."]
            : [">{#p/story}* Radtile keeps his distance."],
      checkPostInsultTalk: [">{#p/basic}{~}Come to take another look?"],
      checkPostInsultStatus: () =>
         world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
            ? [">{#p/kidding}* Ah, we're going in circles!"]
            : [">{#p/story}* Radtile gives you a chance."],
      hurtStatus: () =>
         world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
            ? [">{#p/kidding}* This isn't looking good..."]
            : [">{#p/story}* Radtile的牙齿开始脱落了。"]
   },
   b_opponent_doge: {
      act_check: () =>
         world.goatbro
            ? [">{#p/asriel2}* Doge，一条冷血的狗。\n* 纯纯的工作机器。"]
            : [">{#p/story}* DOGE - ATK 14 DEF 10\n* Pronounced \"dohj.\" Soft j.\n* Member of the ELITE squad."],
      act_flirt: () => [
         ...(dogecon() || world.goatbro
            ? [">{#p/human}* （你向Doge调情。）", ">{#p/basic}* 她对这种拍须溜马不屑一顾。"]
            : battler.volatile[0].vars.pet
               ? [">{#p/human}* （你向Doge调情。）", ">{#p/basic}* Doge smiles in return."]
               : battler.volatile[0].sparable
                  ? [
                     ">{#p/human}* （你向Doge调情。）",
                     ">{#p/basic}* Doge, despondent, was unreceptive to your remark."
                  ]
                  : world.flirt < 10
                     ? [">{#p/human}* （你向Doge调情。）", ">{#p/basic}* Doge doesn't react in any strong way."]
                     : [">{#p/human}* （你向Doge调情。）", ">{#p/basic}* Doge is giving it her all to resist you."])
      ],
      act_flirt2: [
         ">{#p/human}* (You flirt with Doge again.)",
         ">{#p/basic}* Doge can't keep this up for much longer..."
      ],
      act_flirt3: [
         ">{#p/human}* (You muster your courage, and call Doge a little munchkin.)",
         ">{#p/basic}* Doge tries not to react, but finds herself blushing.",
         ">* She squirms and she struggles, but there's no hiding what's on her face.",
         ">* Thoroughly embarrassed, Doge flees the scene..."
      ],
      batheText: [
         ">{#p/human}* （你建议Doge去洗个澡。）",
         ">{#p/basic}* Doge rips open a pipe from the ceiling... water comes flooding out.",
         ">* It's cold, but she doesn't seem to mind...",
         ">* Soon, the water runs dry.\n* Doge relaxes a little...",
         ">{#p/story}* Doge的攻击力下降了！"
      ],
      batheTextEarly: [">{#p/human}* (You suggest Doge get a shower, but she wasn't in the mood yet.)"],
      batheTextGeno: [
         ">{#p/human}* （你建议Doge去洗个澡。）",
         ">{#p/basic}* 但她根本不在乎自己脏不脏。"
      ],
      batheTextLate: [">{#p/human}* (You suggest Doge get a shower, but it was too late.)"],
      batheTextPost: [">{#p/human}* (But Doge was already clean.)"],
      fetchStatus: [">{#p/story}* Doge is a little smarter than the average dog."],
      fetchText: () => [
         ">{#p/human}* (You throw the spanner.)\n* (Doge intercepts your throw, launching it back at you.)",
         ">{#p/basic}* The spanner bonks you directly in the head!",
         ">{#p/story}* 你的移速下降了！",
         ...(world.goatbro && SAVE.flag.n.ga_asrielSpanner++ < 1
            ? [">{#p/asriel2}* Maybe don't try that again."]
            : [])
      ],
      fetchTextEpic: [
         ">{#p/human}* (You throw the spanner.)\n* (Doge, inspired, picks it up and brings it back to you.)"
      ],
      fetchTextGarb: [">{#p/human}* (You throw the spanner.)\n* (Doge, exhausted, ignores it.)"],
      flirtStatus: [">{#p/story}* Doge questions the intention behind your advances."],
      flirtStatusAccept: [">{#p/story}* Doge blushes slightly."],
      flirtStatusReject: [">{#p/story}* Doge sighs apathetically."],
      hurtStatus: () =>
         world.goatbro
            ? [">{#p/asriel2}* 离死不远了。"]
            : [">{#p/story}* Doge is trying desperately to pretend she's just fine."],
      name: "* Doge",
      petTalkPost: [">{#p/basic}{~}Ah..."],
      petText: [
         ">{#p/human}* （你想摸摸Doge。）",
         ">{#p/basic}* Doge hesitantly reaches her head up to meet your hand.",
         ">* You make contact.\n* Her face lights up.\n* She gives you a big smile.",
         ">* All her pent-up stress has finally been released.",
         ">* Doge is no longer interested in fighting you."
      ],
      petTextEarly: [">{#p/human}* (You try to pet Doge, but she can't be reached yet.)"],
      petTextGeno: [
         ">{#p/human}* （你想摸摸Doge。）",
         ">{#p/basic}* 她对这份亲昵漠然置之。"
      ],
      petTextLate: [">{#p/human}* (You try to pet Doge, but it was too late.)"],
      petTextPost1: [
         ">{#p/human}* (You try to pet Doge again.)",
         ">{#p/basic}* Doge laps up your love like it's the first time she's been cared for in years..."
      ],
      petTextPost2: [">{#p/human}* (You try to pet Doge yet again.)", ">{#p/basic}* Doge has reached nirvana."],
      petTextPost3: [">{#p/human}* (You continue petting Doge.)", ">{#p/basic}* Is this even legal?"],
      petTextPost4: [">{#p/human}* (You pet Doge some more.)", ">{#p/basic}* Doge flops on the ground."],
      petTextPost5: [">{#p/human}* (You give Doge a side rub.)", ">{#p/basic}* Doge is drooling..."],
      petTextPost6: [">{#p/human}* (You pet Doge.)", ">{#p/basic}* It continues."],
      petTextPost7: [">{#p/human}* (You pet Doge.)", ">{#p/basic}* ..."],
      petTextSus: [">{#p/human}* (But Doge was too antsy to be pet.)"],
      status1: () => (world.goatbro ? [">{#p/asriel2}* Doge。"] : [">{#p/story}* Doge昂首阔步向你走来。"]),
      turnStatus1: [">{#p/story}* Doge studies your stance, and deems it lacking."],
      turnStatus2: () =>
         dogecon() ? [">{#p/story}* Doge fiddles with her spear."] : [">{#p/story}* Doge needs a good washdown."],
      turnStatus3: () =>
         dogecon()
            ? [">{#p/story}* Doge一再检查她的站姿。"]
            : battler.volatile[0].vars.bathe
               ? [">{#p/story}* Doge is dripping wet."]
               : [">{#p/story}* Doge's hygiene remains unchanged, much to her dismay."],
      turnStatus4: () =>
         dogex()
            ? [">{#p/story}* Doge thinks of her duty."]
            : world.dead_canine
               ? [">{#p/story}* Doge thinks of her colleagues."]
               : battler.volatile[0].vars.bathe
                  ? [">{#p/story}* Doge seeks a little adventure."]
                  : [">{#p/story}* Doge ponders the meaning of her duty."],
      turnStatus5: () =>
         dogex()
            ? [">{#p/story}* Doge thinks of her honor."]
            : world.dead_canine
               ? [">{#p/story}* Doge想起了她的朋友们。"]
               : battler.volatile[0].vars.walk
                  ? [">{#p/story}* Doge relaxes back into her standard pose."]
                  : battler.volatile[0].vars.bathe
                     ? [">{#p/story}* Doge regains her composure."]
                     : [">{#p/story}* Doge remembers an old colleague fondly."],
      turnStatus6: () =>
         dogecon()
            ? [">{#p/story}* Doge keeps a cool head."]
            : battler.volatile[0].vars.walk
               ? [">{#p/story}* Doge takes a deep breath."]
               : [">{#p/story}* Doge breaks into a cold sweat."],
      turnStatus7: () =>
         battler.volatile[0].vars.walk
            ? [">{#p/story}* Doge seeks affection."]
            : [">{#p/story}* Doge takes a deep breath."],
      turnStatus8: () =>
         dogecon()
            ? [">{#p/story}* Doge remains intent."]
            : battler.volatile[0].vars.walk
               ? [">{#p/story}* Doge could use a helping hand."]
               : [">{#p/story}* Doge's breath shortens."],
      turnStatus9: () =>
         dogecon()
            ? [">{#p/story}* Doge remains intent."]
            : battler.volatile[0].vars.walk
               ? [">{#p/story}* Doge just wants to be pet."]
               : [">{#p/story}* Doge is hyperventilating."],
      turnStatus10: () =>
         dogecon()
            ? [">{#p/story}* Doge remains intent."]
            : battler.volatile[0].vars.pet
               ? [">{#p/story}* Doge is satisfied."]
               : [">{#p/story}* Doge stands patiently before you in surrender."],
      turnTalk1: () =>
         dogecon() || world.goatbro
            ? [">{#p/basic}{~}你犯下的罪行，\n我一清二楚。"]
            : [">{#p/basic}{~}队长警告我们\n要提防你。"],
      turnTalk2: () =>
         world.goatbro
            ? [
               ">{#p/basic}{~}两人联手，\n滥杀无辜...",
               ">{#p/basic}{~}已然沉溺于\n杀戮快感之中\n无法自拔？"
            ]
            : dogex()
               ? [">{#p/basic}{~}当你屠戮平民，\n践踏生命时...", ">{#p/basic}{~}可曾懊悔过\n自己的\n所作所为？"]
               : world.dead_canine
                  ? [">{#p/basic}{~}犬卫队\n所有成员...", ">{#p/basic}{~}都惨死于\n你的暴行之下，\n无一幸免。"]
                  : [
                     ">{#p/basic}{~}As such, I have been on extended patrol.",
                     ">{#p/basic}{~}Mind you... it is quite dirty here."
                  ],
      turnTalk3: () =>
         world.goatbro
            ? [
               ">{#p/basic}{~}不愿下出\n如此定论...",
               ">{#p/basic}{~}但依我所见，\n绝无其他可能。"
            ]
            : dogecon()
               ? [
                  ">{#p/basic}{~}你随时可以\n弃甲投戈...",
                  ">{#p/basic}{~}然而你选择\n将杀戮\n贯彻到底。"
               ]
               : battler.volatile[0].vars.bathe
                  ? [">{#p/basic}{~}Ah...", ">{#p/basic}{~}How pleasant..."]
                  : [
                     ">{#p/basic}{~}But we are ELITE squad members, I suppose.",
                     ">{#p/basic}{~}We must adapt to any situation."
                  ],
      turnTalk4: () =>
         dogecon() || world.goatbro
            ? [
               ">{#p/basic}{~}遥想当年，\n初入特战队...",
               ">{#p/basic}{~}那时，安黛因\n视人类为敌，\n我将信将疑。"
            ]
            : battler.volatile[0].vars.bathe
               ? [">{#p/basic}{~}Too much water in my hair..."]
               : [
                  ">{#p/basic}{~}When I asked to join the ELITE squad...",
                  ">{#p/basic}{~}I never imagined I'd make it in."
               ],
      turnTalk5: () =>
         dogecon() || world.goatbro
            ? [">{#p/basic}{~}而当亲眼目睹\n你这般行径...", ">{#p/basic}{~}我的心中\n已再无疑虑。"]
            : battler.volatile[0].vars.walk
               ? [">{#p/basic}{~}Well.\nNothing beats a nice walk."]
               : battler.volatile[0].vars.bathe
                  ? [
                     ">{#p/basic}{~}{#f.batmusic1}Just a moment.",
                     ">{#p/basic}{~}...",
                     ">{#p/basic}{~}\x00*whips around*",
                     ">{#p/basic}{~}\x00*whipping continues*",
                     ">{#p/basic}{~}\x00*shakes off*",
                     ">{#p/basic}{~}...",
                     ">{#p/basic}{~}There, all dry now.\nBack to fighting, yes?",
                     "{*}{#f.batmusic2}{%}"
                  ]
                  : [
                     ">{#p/basic}{~}But after that dummy called it quits...",
                     ">{#p/basic}{~}I became the next in line."
                  ],
      turnTalk6: () =>
         world.goatbro
            ? [
               ">{#p/basic}{~}而你，\n艾斯利尔，\n就是我族叛徒。",
               ">{#p/basic}{~}难以置信，\n如此邪恶至极，\n却将登基为王。"
            ]
            : dogex()
               ? [">{#p/basic}{~}It would be wise for you to surrender.", ">{#p/basic}{~}Not that you know how."]
               : world.dead_canine
                  ? [
                     ">{#p/basic}{~}遁狗是狗卫队\n最新成员。",
                     ">{#p/basic}{~}有些人... 把他的视力\n当作一种空去钻...",
                     ">{#p/basic}{~}但是他的前途\n那么明朗。"
                  ]
                  : battler.volatile[0].vars.walk
                     ? [
                        ">{#p/basic}{~}You've sure been walking for a while.",
                        ">{#p/basic}{~}How much stamina do YOU have?"
                     ]
                     : battler.volatile[0].vars.bathe
                        ? [">{#p/basic}{~}Apologies.\nThere is much on my mind."]
                        : [
                           ">{#p/basic}{~}It has been a difficult line of work...",
                           ">{#p/basic}{~}Even Undyne herself has moments of doubt.",
                           ">{#p/basic}{~}... do not tell her I shared that."
                        ],
      turnTalk7: () =>
         world.goatbro
            ? [
               ">{#p/basic}{~}我们的宿命\n竟是这般？",
               ">{#p/basic}{~}卑鄙的王子\n与人类共谋...",
               ">{#p/basic}{~}...誓要剿灭\n我族所有同胞？"
            ]
            : dogex()
               ? [
                  ">{#p/basic}{~}For life, you show nothing but contempt.",
                  ">{#p/basic}{~}At every turn, you treat us as inferior."
               ]
               : world.dead_canine
                  ? [
                     ">{#p/basic}{~}小犬座是\n大犬座\n的直系下属。",
                     ">{#p/basic}{~}它独特的观察\n方式帮了很\n多忙...",
                     ">{#p/basic}{~}即使这种行为\n常常被大家\n误解。"
                  ]
                  : battler.volatile[0].vars.walk
                     ? [">{#p/basic}{~}Clearly more than I antici- pated..."]
                     : [">{#p/basic}{~}(Sigh...)"],
      turnTalk8: () =>
         world.goatbro
            ? [
               ">{#p/basic}{~}终究...",
               ">{#p/basic}{~}两人孰更恶劣，\n难以论断。"
            ]
            : dogex()
               ? [">{#p/basic}{~}Now, it is your turn.", ">{#p/basic}{~}Your turn to be treated as inferior."]
               : world.dead_canine
                  ? [
                     ">{#p/basic}{~}Dogamy and Dogaressa, a duo of dilligence.",
                     ">{#p/basic}{~}Before they met, they often misbehaved.",
                     ">{#p/basic}{~}But once together, they could do ANYTHING."
                  ]
                  : battler.volatile[0].vars.walk
                     ? [">{#p/basic}{~}...", ">{#p/basic}{~}Can we really keep going like this?"]
                     : [">{#p/basic}{~}This battle is starting to drag on."],
      turnTalk9: () =>
         world.goatbro
            ?
            [">{#p/basic}{~}只此一言...", ">{#p/basic}{~}这一切，\n未曾预料。"]
            : dogex()
               ? [">{#p/basic}{~}..."]
               : world.dead_canine
                  ? [
                     ">{#p/basic}{~}Canis Major was there when the canine unit was formed.",
                     ">{#p/basic}{~}Along with its master, it led the unit well.",
                     ">{#p/basic}{~}But now..."
                  ]
                  : [">{#p/basic}{~}Human, I..."],
      turnTalk10: () =>
         world.goatbro
            ? [
               ">{#p/basic}{~}言尽至此。",
               ">{#p/basic}{~}I will have justice for the terror you have inspired."
            ]
            : dogex()
               ? [
                  ">{#p/basic}{~}言尽至此。",
                  ">{#p/basic}{~}正义，\n我必索回。"
               ]
               : world.dead_canine
                  ? [
                     ">{#p/basic}{~}言尽至此。",
                     ">{#p/basic}{~}I will have justice for those dogs' deaths."
                  ]
                  : battler.volatile[0].vars.pet
                     ? [">{#p/basic}{~}(Blushes)", ">{#p/basic}{~}You are a... kind human..."]
                     : [
                        ">{#p/basic}{~}I think I have had enough.",
                        ">{#p/basic}{~}...",
                        ">{#p/basic}{~}In fairness, you do not seem so bad.",
                        ">{#p/basic}{~}At least, compared to how Undyne described.",
                        ">{#p/basic}{~}Accept my mercy as a plea...",
                        ">{#p/basic}{~}A plea that you will not stray into the darkness."
                     ],
      turnTalk11: () => [">{#p/basic}{~}..."],
      walkText: [
         ">{#p/human}* (You offer to take Doge on a walk.)",
         ">{#p/basic}* Doge follows your lead.\n* Together you march in unison.",
         ">* This continues for a while...",
         ">* But eventually...",
         ">* Doge grows tired of this frivolous exercise.",
         ">* She follows you back to her patrol zone, and relaxes a little...",
         ">{#p/story}* Doge的攻击力下降了！"
      ],
      walkTextEarly: [">{#p/human}* (You offer to take Doge on a walk, but she has no reason to go on one yet.)"],
      walkTextGeno: [
         ">{#p/human}* (You offer to take Doge on a walk.)",
         ">{#p/basic}* Doge refuses to walk anywhere with you."
      ],
      walkTextLate1: [
         ">{#p/human}* (You offer to take Doge on a walk, but she's already dried herself up for you.)"
      ],
      walkTextLate2: [
         ">{#p/human}* (You offer to take Doge on a walk, but she never did anything to necessitate it.)"
      ],
      walkTextPost: [">{#p/human}* (But Doge was already spent from walking beforehand.)"],
      walkTextSus: [">{#p/human}* (But Doge was too dirty to go on a walk.)"]
   },
   b_opponent_muffet: {
      act_check: [">{#p/story}* 玛菲特 - 攻击39 防御19\n* 全蜘蛛部落的女王。\n* 特战队志愿兵。"],
      act_flirt: () => [
         ...(badSpider()
            ? [">{#p/human}* （你向玛菲特调情。）\n* （玛菲特狠狠瞪了你一眼。）"]
            : battler.volatile[0].sparable
               ? [">{#p/human}* （你向玛菲特调情。）\n* （玛菲特笑了笑，\n  伸出几只手拍了拍你的头。）"]
               : world.flirt < 10
                  ? [">{#p/human}* （你向玛菲特调情。）\n* （玛菲特笑了笑，\n  向你挥舞她的一些手指。）"]
                  : [">{#p/human}* （你向玛菲特调情。）\n* （玛菲特看起来颇有兴致，\n  但还是不够。）"])
      ],
      act_flirt2: [
         ">{#p/human}* （你向玛菲特调情。）\n* （玛菲特对你投向了更多目光。）"
      ],
      act_flirt3: [
         ">{#p/human}* （你鼓起勇气，邀请玛菲特\n  一同去野餐。）",
         ">{#p/basic}* 玛菲特咯咯笑了几下...",
         ">* 然后又笑了几声...",
         ">* 她已经无法控制自己的情感了！\n* 玛菲特向你完美的调情能力屈服！",
         ">* ... 然后立即决定结束战斗，\n  以免让她的蜘蛛同伴们蒙羞。",
         ">{#p/kidding}* ... 什么？"
      ],
      flirtReaction1: [">{#p/basic}{~}真可爱啊~"],
      flirtReaction2: [">{#p/basic}{~}你人真好~"],
      flirtReaction3: [">{#p/basic}{~}啊呼呼~"],
      appeaseText: () =>
         world.dead_canine
            ? [
               ">{#p/human}* （你对玛菲特提出异议。）\n* （玛菲特再一次被你的话\n  所吸引。）",
               ">* (You mention how Doge was forced to fight, and Undyne's lack of care is clear.)",
               ">* (As such, you suggest that trusting Undyne would mean putting spider clans at risk.)",
               ">{#p/basic}* Muffet starts considering the situation...",
               ">{#p/story}* 玛菲特的攻速下降了！"
            ]
            : [
               ">{#p/human}* （你对玛菲特提出异议。）\n* （玛菲特再一次被你的话\n  所吸引。）",
               ">* (You mention how Doge was mistreated, and Undyne's lack of care is clear.)",
               ">* (As such, you suggest that trusting Undyne would mean putting spider clans at risk.)",
               ">{#p/basic}* Muffet starts considering the situation...",
               ">{#p/story}* 玛菲特的攻速下降了！"
            ],
      appeaseTextEarly: [">{#p/human}* (You make an appeal to Muffet, but she doesn't seem ready to hear it yet.)"],
      appeaseTextGeno: [
         ">{#p/human}* (You make an appeal to Muffet.)",
         ">{#p/basic}* Muffet will not be swayed by your shallow claims."
      ],
      appeaseTextLate: [
         ">{#p/human}* (You make an appeal to Muffet, but she's already past the point of hearing you out.)"
      ],
      appeaseTextPost: [">{#p/human}* (But Muffet didn't need to be appeased twice.)"],
      appeaseTextSus: [">{#p/human}* (But Muffet had no reason to listen to you.)"],
      counterText: [
         ">{#p/human}* （你尝试反驳玛菲特。）\n* （玛菲特被你的话所吸引。）",
         ">* (You propose that a deal with the ELITE squad is flimsy.)",
         ">* (You point out that one of their ranks already failed to capture you.)",
         ">{#p/basic}* Muffet begins to carefully think everything over...",
         ">{#p/story}* 玛菲特的攻速下降了！"
      ],
      counterTextEarly: [
         ">{#p/human}* （你试图反驳玛菲特，\n  但她还没有说出\n  能供你反驳的话。）"
      ],
      counterTextGeno: [
         ">{#p/human}* （你尝试反驳玛菲特。）",
         ">{#p/basic}* 玛菲特对自己的目标坚定不移。"
      ],
      counterTextLate: [">{#p/human}* （你尝试反驳玛菲特，\n  但她早已拿定了主意。）"],
      counterTextPost: [">{#p/human}* （但玛菲特已经听过了\n  你的驳论。）"],
      name: "* 玛菲特",
      payTalkPost: [">{#p/basic}{~}That's very kind, but we already have more than enough~"],
      payText: [
         ">{#p/human}* (You try to pay Muffet.)",
         ">* As it turns out, Monster Kid had enough G to cover all of the spider clans' expenses!",
         ">* Muffet pockets the money and bows to you and Monster Kid.",
         ">* Her subjects will be well fed for quite a while.",
         ">* Muffet doesn't care about fighting anymore."
      ],
      payTextEarly: [
         ">{#p/human}* (You try to pay Muffet, but she didn't yet see any basis on which she could accept it.)"
      ],
      payTextGeno: [
         ">{#p/human}* (You try to pay Muffet.)",
         ">{#p/basic}* Muffet doesn't need any money from you."
      ],
      payTextLate: [">{#p/human}* (You try to pay Muffet, but she's already past the point of bribery.)"],
      payTextPost: [">{#p/human}* (You try to pay Muffet again.)"],
      payTextSus: [">{#p/human}* (But Muffet had no reason to trust you.)"],
      status1: [">{#p/kidding}* 我被困住了...！"],
      turnStatus1: () =>
         badSpider()
            ? world.genocide
               ? world.bullied
                  ? [">{#p/kidding}* 两只小流氓...？"]
                  : [">{#p/kidding}* 两只杀人犯...？"]
               : world.bullied
                  ? [">{#p/kidding}* 小流氓...？"]
                  : [">{#p/kidding}* 杀人犯...？"]
            : [">{#p/kidding}* 救命...！"],
      turnStatus2: () =>
         badSpider()
            ? world.genocide
               ? [">{#p/kidding}* But we haven't done anything!"]
               : [">{#p/kidding}* I've got a bad feeling about this..."]
            : [">{#p/kidding}* 所以说，这存粹是生意了..."],
      turnStatus3: () =>
         badSpider()
            ? [">{#p/kidding}* Yo...\n* She REALLY doesn't like you..."]
            : battler.volatile[0].vars.counter
               ? [">{#p/kidding}* What are we going to do?"]
               : [">{#p/kidding}* We're never getting outta here, are we..."],
      turnStatus4: () =>
         badSpider()
            ? [">{#p/kidding}* What the heck was THAT?"]
            : battler.volatile[0].vars.counter
               ? [">{#p/kidding}* Is she... changing her mind?"]
               : [">{#p/kidding}* What the heck was THAT?"],
      turnStatus5: () =>
         badSpider()
            ? [">{#p/kidding}* Of course..."]
            : battler.volatile[0].vars.counter
               ? [">{#p/kidding}* Guess it won't be so easy..."]
               : [">{#p/kidding}* Y... you're kidding, right?\n* This isn't fun at all!"],
      turnStatus6: () =>
         badSpider()
            ? [">{#p/kidding}* I don't like what she's saying about you, dude..."]
            : battler.volatile[0].vars.counter
               ? [">{#p/kidding}* Fellow spiders...?"]
               : [">{#p/kidding}* Uh..."],
      turnStatus7: () =>
         badSpider()
            ? [">{#p/kidding}* She's relentless...!"]
            : battler.volatile[0].vars.appease
               ? [">{#p/kidding}* Hey, wait...\n* I think this is working!\n* Keep going, dude!"]
               : [">{#p/kidding}* I'm...\n* I'm scared, dude..."],
      turnStatus8: () =>
         badSpider()
            ? [">{#p/kidding}* Dude, HOW are we STILL ALIVE??"]
            : battler.volatile[0].vars.appease
               ? [">{#p/kidding}* Yo, freaky muffins aside... we're making progress!\n* I think?"]
               : [">{#p/kidding}* Ack, not again!!"],
      turnStatus9: () =>
         badSpider()
            ? [">{#p/kidding}* What's \"inevitable?\""]
            : battler.volatile[0].vars.appease
               ? [">{#p/kidding}* But...\n* I thought we..."]
               : [">{#p/kidding}* Ack, not again!!"],
      turnStatus10: () =>
         badSpider()
            ? [">{#p/kidding}* Yo, I'm here too, you know..."]
            : battler.volatile[0].vars.appease
               ? [">{#p/kidding}* Hey, I've got money!\n* Let's use it, dude!"]
               : [">{#p/kidding}* Someone, anyone..."],
      turnStatus11: () =>
         badSpider()
            ? [">{#p/kidding}* This isn't funny...!"]
            : battler.volatile[0].vars.pay
               ? [">{#p/kidding}* I hope that short skeleton doesn't mind me using the money he gave me..."]
               : battler.volatile[0].vars.appease
                  ? [">{#p/kidding}* Dude...\n* Why didn't we help her?"]
                  : [">{#p/kidding}* It's over..."],
      turnStatus12: () =>
         badSpider() ? [">{#p/kidding}* ..."] : [">{#p/kidding}* Are we gonna end this, or...?"],
      turnStatus13: () =>
         badSpider() ? [">{#p/kidding}* Is it really over?"] : [">{#p/kidding}* Are we gonna end this, or...?"],
      turnTalk1: () =>
         badSpider()
            ? world.genocide
               ? world.bullied
                  ? [">{#p/basic}{~}啊呼呼呼...\n两只小流氓\n爬进我\n网里了~"]
                  : [">{#p/basic}{~}啊呼呼呼...\n两只杀人犯\n爬进我\n网里了~"]
               : world.bullied
                  ? [">{#p/basic}{~}啊呼呼呼...\n一只小流氓\n爬进我\n网里了~"]
                  : [">{#p/basic}{~}啊呼呼呼...\n一只杀人犯\n爬进我\n网里了~"]
            : [">{#p/basic}{~}小宝贝们，\n你们现在\n是我的了~"],
      turnTalk1a: [
         ">{#p/basic}{~}希望你能\n喜欢这种\n新颜色~",
         ">{#p/basic}{~}我觉得紫色\n更适合你...",
         ">{#p/basic}{~}不是吗，\n小宝贝们？"
      ],
      turnTalk2: () =>
         badSpider()
            ? [
               world.genocide
                  ? ">{#p/basic}{~}What did you think would happen, dearies?"
                  : ">{#p/basic}{~}What did you think would happen, dearie?",
               ">{#p/basic}{~}Did you expect me to SPARE you?"
            ]
            : [
               ">{#p/basic}{~}别以为\n我会对你\n手下留情，\n渺小的\n人类。",
               ">{#p/basic}{~}那个特战队\n为了得到\n你的灵魂\n可是给了我\n很多钱的~"
            ],
      turnTalk3: () =>
         badSpider()
            ? [">{#p/basic}{~}Oh my~", ">{#p/basic}{~}Such a shame for you~"]
            : battler.volatile[0].vars.counter
               ? [">{#p/basic}{~}Ahuhuhu...\nWell..."]
               : [
                  ">{#p/basic}{~}With your lack of a counter- offer...",
                  ">{#p/basic}{~}The choice for me is clear~"
               ],
      turnTalk4: () =>
         badSpider()
            ? [
               ">{#p/basic}{~}Well.\nThere is one good thing about it~",
               ">{#p/basic}{~}I don't have to feel bad about feeding my pet!"
            ]
            : battler.volatile[0].vars.counter
               ? [">{#p/basic}{~}A better deal would be nice..."]
               : [">{#p/basic}{~}Where are you, my pet~", ">{#p/basic}{~}It's time to eat~"],
      turnTalk5: () =>
         badSpider()
            ? [
               ">{#p/basic}{~}You survived?\nImpressive~",
               ">{#p/basic}{~}I shall have to reward you...",
               ">{#p/basic}{~}... with more attacks, of course.\nAhuhuhu!"
            ]
            : battler.volatile[0].vars.counter
               ? [
                  ">{#p/basic}{~}But what guarantee do I have...",
                  ">{#p/basic}{~}... that you won't just stab me in the back?"
               ]
               : [
                  ">{#p/basic}{~}I often wondered what fighting would be like.",
                  ">{#p/basic}{~}I never realized it'd be so much fun~"
               ],
      turnTalk6: () =>
         badSpider()
            ? [
               ">{#p/basic}{~}How did it feel, hmm?",
               !world.bullied
                  ? ">{#p/basic}{~}All those monsters falling like dominoes..."
                  : ">{#p/basic}{~}All those monsters running scared..."
            ]
            : battler.volatile[0].vars.counter
               ? [
                  ">{#p/basic}{~}My fellow spiders need kept safe...",
                  ">{#p/basic}{~}I can't put THEM in danger, can I?\nAhuhuhu..."
               ]
               : [
                  ">{#p/basic}{~}Aren't you having fun, dearies?",
                  ">{#p/basic}{~}My fellow spiders certainly will...",
                  ">{#p/basic}{~}... when they get their share of the money~"
               ],
      turnTalk7: () =>
         badSpider()
            ? world.genocide || !world.bullied
               ? [
                  world.genocide ? ">{#p/basic}{~}Well, dearies..." : ">{#p/basic}{~}Well, dearie...",
                  ">{#p/basic}{~}I shall enjoy killing you personally~"
               ]
               : [">{#p/basic}{~}Well, dearie...", ">{#p/basic}{~}I shall enjoy paying back the favor~"]
            : battler.volatile[0].vars.appease
               ? [">{#p/basic}{~}I must admit, that is very worrying..."]
               : [
                  ">{#p/basic}{~}Well, no matter, little human~",
                  ">{#p/basic}{~}The only thing that matters now is your SOUL~"
               ],
      turnTalk8: () =>
         badSpider()
            ? [
               world.genocide
                  ? ">{#p/basic}{~}Oh, this is so much fun, you two!"
                  : ">{#p/basic}{~}Oh, this is so much fun, is it not?",
               ">{#p/basic}{~}My pet, it's feeding time~"
            ]
            : battler.volatile[0].vars.appease
               ? [
                  ">{#p/basic}{~}And they didn't exactly do much to earn my trust...",
                  ">{#p/basic}{~}Oh, hello, my pet~"
               ]
               : [">{#p/basic}{~}Time for round two, my pet~"],
      turnTalk9: () =>
         badSpider()
            ? [">{#p/basic}{~}You only delay the inevitable~"]
            : battler.volatile[0].vars.appease
               ? [">{#p/basic}{~}Still, dearies...", ">{#p/basic}{~}I don't know if I can trust you~"]
               : [">{#p/basic}{~}You're resilient, I'll give you that~"],
      turnTalk10: () =>
         badSpider()
            ? [">{#p/basic}{~}Come now...", ">{#p/basic}{~}Aren't you getting tired?"]
            : battler.volatile[0].vars.appease
               ? [">{#p/basic}{~}Unless, perhaps...", ">{#p/basic}{~}You can offer me a little insurance?"]
               : [">{#p/basic}{~}But unless my deal changes, your SOUL is as good as mine~"],
      turnTalk11: () =>
         badSpider()
            ? [">{#p/basic}{~}Ahuhuhu..."]
            : battler.volatile[0].vars.pay
               ? [
                  ">{#p/basic}{~}You two have my sincerest apologies~",
                  ">{#p/basic}{~}This is a good deed I won't easily forget!"
               ]
               : [
                  ">{#p/basic}{~}What's this?\nA message from Undyne?",
                  ">{#p/basic}{~}She's called off the deal...?",
                  ">{#p/basic}{~}... hmmm...",
                  ">{#p/basic}{~}Well, I think my job here is done, don't you?",
                  ">{#p/basic}{~}Sorry for wasting your time~"
               ],
      turnTalk12: () => [">{#p/basic}{~}..."],
      turnTalk13: (didf: boolean) =>
         badSpider()
            ? [
               world.genocide
                  ? ">{#p/basic}{~}You know what, dearies?"
                  : ">{#p/basic}{~}You know what, dearie?",
               ">{#p/basic}{~}I've had enough of fighting you.",
               ">{#p/basic}{~}So do what you will.",
               world.genocide || !world.bullied
                  ? didf
                     ? ">{#p/basic}{~}... sorry, Undyne.\nI'd rather die on my own terms, thank you."
                     : ">{#p/basic}{~}... sorry, Undyne.\nThis has dragged on for long enough."
                  : didf
                     ? ">{#p/basic}{~}Honestly, a little bully like you isn't worth dying over..."
                     : ">{#p/basic}{~}Honestly, a little bully like you isn't worth my time...",
               ">{#p/basic}{~}Bye bye, now~"
            ]
            : [">{#p/basic}{~}..."]
   },
   b_opponent_undyne: {
      artifact: [">{#p/human}* (Undyne doesn't even seem to know what it is.)"],
      epiphaNOPE: [">{#p/undyne}Huh?\nWhat even IS this?"],
      spaghetti1: [
         ">{#p/basic}* The smell reminds Undyne of someone close to her...",
         ">{#p/story}* 安黛因的攻击力下降了！"
      ],
      spaghetti2: () =>
         world.genocide
            ? [
               ">{#p/basic}* The smell reminds Undyne of someone she'll never see again...",
               ">{#p/basic}* ... but her determination to eliminate you strengthens.",
               ">{#p/story}* 安黛因的攻击力提升了！\n* 安黛因的防御力下降了！"
            ]
            : [
               ">{#p/basic}* The smell reminds Undyne of someone she'll never see again...",
               ">{#p/story}* 安黛因的防御力下降了！"
            ],
      act_check: () =>
         world.genocide
            ? [">{#p/asriel2}* 安黛因 the Undying。\n* 你怎么不攻击？"]
            : helmetdyne()
               ? [">{#p/story}* UNDYNE - ATK 40 DEF 100\n* Captain of the Royal Guard.\n* Relentless."]
               : respecc()
                  ? [">{#p/story}* UNDYNE - ATK 25 DEF 10\n* Once your sworn enemy, now your unmatched equal!"]
                  : [">{#p/story}* 安黛因 - 攻击50 防御20\n* 永不放弃的英雄。"],
      name: () => (world.genocide ? "* Undyne the Undying" : "* 安黛因"),
      status1: () =>
         helmetdyne()
            ? [">{#p/story}* Undyne towers above you."]
            : respecc()
               ? [">{#p/story}* Undyne takes you head-on!"]
               : [">{#p/story}* 安黛因来袭！"],
      intro1: () =>
         SAVE.data.n.state_starton_papyrus === 1
            ? [">{*}{#p/undyne}准备迎战吧。"]
            : [">{*}{#p/undyne}准备！"],
      intro2: () =>
         SAVE.data.n.state_starton_papyrus === 1
            ? [">{*}{#p/undyne}让我把故事讲完。"]
            : respecc()
               ? [">{*}{#p/undyne}Huh!?\nI thought you were tough!"]
               : [">{*}{#p/undyne}You won't get away from me this time!"],
      intro3: () =>
         respecc()
            ? [">{*}{#p/undyne}No more second chances!"]
            : [">{*}{#p/undyne}You've escaped from me for the LAST time!"],
      intro4: [">{*}{#p/undyne}STOP RUNNING AWAY!!!"],
      intro5: [">{*}{#p/undyne}COME BACK HERE, YOU LITTLE PUNK!!"],
      earlyChallenge: () =>
         SAVE.data.n.state_starton_papyrus === 1
            ? [
               ">{#p/undyne}{#e/undyne/3}想跟我{@fill=#f00}硬碰硬{@fill=#000}，是吗？",
               ">{#e/undyne/2}成全你。"
            ]
            : respecc()
               ? [
                  ">{#p/undyne}{#e/undyne/17}What!?\nI'm already going as fast as I can!",
                  ">{#e/undyne/17}But...\nI... you...",
                  ">{#e/undyne/17}N-no!\nI'll show you!",
                  ">{#e/undyne/1}I'll show you {@fill=#f00}EVERYTHING I'VE GOT{@fill=#000}!"
               ]
               : [
                  ">{#p/undyne}{#e/undyne/17}So, you wanna do this the {@fill=#f00}hard way{@fill=#000}, huh?",
                  ">{#e/undyne/1}FINE BY ME!\nFUHUHU!"
               ],
      earlyChallengeStatus: [">{#p/story}* 战斗局势开始升温。"],
      randStatus1: () =>
         respecc()
            ? [">{#p/story}* Undyne points dramatically towards space."]
            : [">{#p/story}* Undyne points heroically towards space."],
      randStatus2: () =>
         respecc()
            ? [">{#p/story}* Undyne twirls her spear with grace."]
            : [">{#p/story}* Undyne flips her spear impatiently."],
      randStatus3: () => [">{#p/story}* Undyne suplexes an asteroid.\n* Just because she can."],
      randStatus4: () =>
         respecc() ? [">{#p/story}* Undyne bounces with fervor."] : [">{#p/story}* Undyne bounces impatiently."],
      randStatus5: () =>
         respecc()
            ? [">{#p/story}* Undyne flashes a genuine smile."]
            : [">{#p/story}* Undyne flashes a menacing smile."],
      randStatus6: () =>
         respecc()
            ? [">{#p/story}* Undyne looks on with adoration."]
            : [">{#p/story}* Undyne draws her finger across her neck."],
      randStatus7: () =>
         respecc()
            ? [">{#p/story}* Undyne lets out a battle cry."]
            : [">{#p/story}* Undyne holds her fist in front of her and shakes her head."],
      randStatus8: () =>
         respecc()
            ? [">{#p/story}* Undyne stares into your SOUL."]
            : [">{#p/story}* Undyne towers threateningly."],
      randStatus9: () =>
         respecc()
            ? [">{#p/story}* Undyne thinks of her friends... and thinks of you."]
            : [">{#p/story}* Undyne thinks of her friends and pounds the ground with her fists."],
      randStatus10: () =>
         respecc() ? [">{#p/story}* Smells like tilapia."] : [">{#p/story}* Smells like sushi."],
      papStatus1: [">{#p/story}* 安黛因的眼角闪烁着泪光。"],
      papStatus2: [">{#p/story}* 安黛因沉着脸，死死瞪着你。"],
      papStatus3: [">{#p/story}* 安黛因想到了她的朋友，\n  用尽全力向地猛击。"],
      papStatus4: [">{#p/story}* 安黛因没心情跟你胡闹。"],
      papStatus5: [">{#p/story}* 金枪鱼沙拉的味道扑面而来。"],
      endStatus1: [">{#p/story}* Undyne's eye is twitching involuntarily."],
      endStatus2: [">{#p/story}* Undyne is smashing spears on the ground."],
      endStatus3: [">{#p/story}* Undyne's eye dart around to see if this is a prank."],
      endStatus4: [">{#p/story}* Undyne is hyperventilating."],
      endStatus5: [">{#p/story}* Smells like roasted fish."],
      tutorial1: () =>
         SAVE.data.n.state_starton_papyrus === 1
            ? [
               ">{#p/undyne}{#e/undyne/3}...",
               ">{#e/undyne/4}怎么？\n还想我杵在这，\n教你怎么应战吗？"
            ]
            : [
               ">{#p/undyne}{#e/undyne/0}As long as you're {@fill=#00c000}GREEN{@fill=#000} you {@fill=#f00}CAN'T ESCAPE{@fill=#000}!",
               ">{#e/undyne/0}Unless you learn to {@fill=#f00}face danger head-on{@fill=#000}...",
               ">{#e/undyne/1}You won't last a SECOND against ME!"
            ],
      tutorial2: [
         ">{#p/undyne}{#e/undyne/0}When I said {@fill=#f00}face towards danger{@fill=#000}...",
         ">{#e/undyne/1}I meant face towards the bullets!"
      ],
      tutorial3: () => [
         ">{#p/undyne}{#e/undyne/3}Look.",
         ">{#e/undyne/3}I gave you a spear.",
         ">{#e/undyne/2}You can use that to block my attacks.",
         respecc()
            ? ">{#e/undyne/17}I should not have to explain this to YOU of all people!"
            : ">{#e/undyne/17}Do I have to explain this any more clearly?"
      ],
      tutorial4: [
         ">{#p/undyne}{#e/undyne/6}WHAT ARE YOU DOING?",
         ">{#e/undyne/7}JUST FACE UPWARDS!!!",
         ">{#e/undyne/5}IT'S NOT THAT HARD!!!"
      ],
      tutorial5: () =>
         respecc()
            ? [
               ">{#p/undyne}{#e/undyne/2}...",
               ">{#e/undyne/2}I wanted this to be a fair fight.",
               ">{#e/undyne/3}I had hoped you'd show me what you're capable of.",
               ">{#e/undyne/4}And maybe, if you beat me like this...",
               ">{#e/undyne/2}It'd truly show how strong you are.",
               ">{#e/undyne/6}BUT NOW???",
               ">{#e/undyne/5}I DON'T CARE!",
               ">{#e/undyne/5}I'M NOT YOUR FREAKING BABYSITTER!",
               ">{#e/undyne/17}Unless your babysitter...",
               ">{#e/undyne/5}DOES THIS!"
            ]
            : [
               ">{#p/undyne}{#e/undyne/2}...",
               ">{#e/undyne/2}I wanted this to be a fair fight.",
               ">{#e/undyne/3}I wanted to give you a chance.",
               ">{#e/undyne/4}And maybe, if I beat you like this...",
               ">{#e/undyne/2}It'd truly show how strong monsters can be.",
               ">{#e/undyne/6}BUT NOW???",
               ">{#e/undyne/5}I DON'T CARE!",
               ">{#e/undyne/5}I'M NOT YOUR FREAKING BABYSITTER!",
               ">{#e/undyne/17}Unless your babysitter...",
               ">{#e/undyne/5}DOES THIS!"
            ],
      turnTalkA1: () =>
         SAVE.data.n.state_starton_papyrus === 1
            ? SAVE.data.n.hp < 6
               ? [
                  ">{#p/undyne}{#e/undyne/33}Too difficult?\nFeh.",
                  ">{#p/undyne}{#e/undyne/2}You should've thought about THAT when you had the chance."
               ]
               : SAVE.data.n.hp < 11
                  ? [
                     ">{#p/undyne}{#e/undyne/3}Not bad, not great.",
                     ">{#p/undyne}{#e/undyne/2}Papyrus certainly wouldn't be satisfied, though."
                  ]
                  : SAVE.data.n.hp < 16
                     ? [
                        ">{#p/undyne}{#e/undyne/3}So you're gonna be a little tougher than I expected.",
                        ">{#p/undyne}{#e/undyne/2}Fair enough."
                     ]
                     : [
                        ">{#p/undyne}{#e/undyne/4}Impressive...",
                        ">{#p/undyne}{#e/undyne/2}Just don't expect your luck to last long."
                     ]
            : battler.volatile[0].vars.trolled
               ? respecc()
                  ? [
                     ">{#p/undyne}{#e/undyne/1}\x00*huff...*\n\x00*huff...*",
                     ">{#e/undyne/1}So this was your plan all along, huh?",
                     ">{#e/undyne/5}Get me all riled up so you could face me at FULL STRENGTH?",
                     ">{#e/undyne/0}Well then.",
                     ">{#e/undyne/6}Looks like WE'RE gonna have to do this the {@fill=#f00}hard way{@fill=#000}!",
                     ">{#e/undyne/1}Fuhuhuhu!!"
                  ]
                  : [
                     ">{#p/undyne}{#e/undyne/1}\x00*huff...*\n\x00*huff...*",
                     ">{#e/undyne/21}Not bad.",
                     ">{#e/undyne/15}But I don't have time for your games.",
                     ">{#e/undyne/6}So WE'RE gonna have to do this the {@fill=#f00}hard way{@fill=#000}!",
                     ">{#e/undyne/1}Fuhuhuhu!!"
                  ]
               : [">{#p/undyne}{#e/undyne/1}Not bad!\nThen how about THIS!?"],
      turnTalkA2: () =>
         SAVE.data.n.state_starton_papyrus === 1
            ? [">{#p/undyne}{#e/undyne/2}给你讲个故事吧。"]
            : respecc()
               ? [">{#p/undyne}{#e/undyne/0}It's been a long time since I've met a warrior like you..."]
               : [">{#p/undyne}{#e/undyne/0}For years, we've dreamed of a happy ending..."],
      turnTalkA3: () =>
         SAVE.data.n.state_starton_papyrus === 1
            ? [
               ">{#p/undyne}{#e/undyne/2}在我小的时候，\n我努力训练，\n梦想成为一名皇家守卫...",
               ">{#p/undyne}{#e/undyne/2}然而，\n事情并非一帆风顺。"
            ]
            : respecc()
               ? [">{#p/undyne}{#e/undyne/0}And now, I've got the chance to do battle with one!"]
               : [">{#p/undyne}{#e/undyne/0}And now, the stars are just within reach!"],
      turnTalkA4: () =>
         SAVE.data.n.state_starton_papyrus === 1
            ? [">{#p/undyne}{#e/undyne/2}许多人反对我加入卫队，\n包括我的家人。"]
            : respecc()
               ? [">{#p/undyne}{#e/undyne/1}I'll savor this moment for as long as it lasts!"]
               : [">{#p/undyne}{#e/undyne/1}I won't let you snatch it away from us!"],
      turnTalkA5: () =>
         SAVE.data.n.state_starton_papyrus === 1
            ? [
               ">{#p/undyne}{#e/undyne/3}后来，\n在一次训练事故中，\n我瞎了左眼...",
               ">{#p/undyne}{#e/undyne/2}困难重重，无依无靠。"
            ]
            : [">{#p/undyne}{#e/undyne/5}NGAHHH!\nEnough warming up!"],
      turnTalkA6a: () =>
         SAVE.data.n.state_starton_papyrus === 1
            ? [
               ">{#p/undyne}{#e/undyne/11}重重困难将我击垮，\n每一步，都异常艰难。",
               ">{#e/undyne/3}我哀嚎着，多么希望\n有人能听到我的心声。"
            ]
            : [">{#p/undyne}{#e/undyne/20}Well... you're tough!"],
      turnTalkA6b: () =>
         SAVE.data.n.state_starton_papyrus === 1
            ? [
               ">{#p/undyne}{#e/undyne/11}重重困难将我击垮，\n每一步，都异常艰难。",
               ">{#e/undyne/3}我哀嚎着，多么希望\n有人能听到我的心声。"
            ]
            : respecc()
               ? [">{#p/undyne}{#e/undyne/9}快啊！\n来打我吧！", ">{#e/undyne/7}Don't just stand there!"]
               : [
                  ">{#p/undyne}{#e/undyne/6}Mercy!\nHa!",
                  ">{#e/undyne/5}I still can't believe you want to SPARE me!"
               ],
      turnTalkA7a: () =>
         SAVE.data.n.state_starton_papyrus === 1
            ? [
               ">{#p/undyne}{#e/undyne/4}突然，\n一个声音从远处传来。",
               ">{#e/undyne/3}一个天真无邪的声音。"
            ]
            : respecc()
               ? [">{#p/undyne}{#e/undyne/0}Not that I expected anything less..."]
               : [">{#p/undyne}{#e/undyne/0}But even if you could beat me..."],
      turnTalkA7b: () =>
         SAVE.data.n.state_starton_papyrus === 1
            ? [
               ">{#p/undyne}{#e/undyne/4}突然，\n一个声音从远处传来。",
               ">{#e/undyne/3}一个天真无邪的声音。"
            ]
            : respecc()
               ? [">{#p/undyne}{#e/undyne/10}This isn't like you at all!"]
               : [">{#p/undyne}{#e/undyne/3}But even if I DID spare you..."],
      turnTalkB1: () =>
         SAVE.data.n.state_starton_papyrus === 1
            ? [
               ">{#p/undyne}{#e/undyne/2}我四处求援，\n却徒劳无功。",
               ">{#e/undyne/3}突然，我听到一个声音\n呼唤着我的名字。"
            ]
            : respecc()
               ? [
                  ">{#p/undyne}{#e/undyne/3}You know...",
                  ">{#p/undyne}{#e/undyne/4}Even though we haven't escaped the outpost yet..."
               ]
               : [">{#p/undyne}{#e/undyne/3}Honestly, I'm doing you a favor..."],
      turnTalkB2: () =>
         SAVE.data.n.state_starton_papyrus === 1
            ? [">{#p/undyne}{#e/undyne/2}那时，帕派瑞斯\n还只是个孩子。"]
            : respecc()
               ? [">{#p/undyne}{#e/undyne/0}Getting to fight makes me FEEL like I'm already free!"]
               : [">{#p/undyne}{#e/undyne/1}No human has EVER made it past ASGORE!"],
      turnTalkB3: () =>
         SAVE.data.n.state_starton_papyrus === 1
            ? [">{#p/undyne}{#e/undyne/3}遇到危险，大多数小孩\n都会马上逃跑...", ">{#e/undyne/4}但他不会。"]
            : respecc()
               ? [">{#p/undyne}{#e/undyne/4}Just like that one anime Alphys showed me..."]
               : [">{#p/undyne}{#e/undyne/4}Killing you now is an act of mercy..."],
      turnTalkB4: () =>
         SAVE.data.n.state_starton_papyrus === 1
            ? [
               ">{#p/undyne}{#e/undyne/2}他只在乎是不是\n有人正深陷危险...",
               ">{#e/undyne/2}等着他-\n不，需要他出手相助。"
            ]
            : respecc()
               ? [
                  ">{#p/undyne}{#e/undyne/1}No matter how awful being trapped out here can be...",
                  ">{#e/undyne/0}It won't stop us from doing what we love!"
               ]
               : [">{#p/undyne}{#e/undyne/6}So STOP being so damn resilient!"],
      turnTalkB5: () =>
         SAVE.data.n.state_starton_papyrus === 1
            ? [
               ">{#p/undyne}{#e/undyne/4}他的天性如此。",
               ">{#p/undyne}{#e/undyne/3}故事讲完了。"
            ]
            : respecc()
               ? [
                  ">{#p/undyne}{#e/undyne/1}... but man, you really don't know when to quit!",
                  ">{#e/undyne/17}How'd you manage to get this strong!?"
               ]
               : [">{#p/undyne}{#e/undyne/5}What the hell are humans made out of!?"],
      turnTalkB6: () =>
         SAVE.data.n.state_starton_papyrus === 1
            ? [
               ">{#p/undyne}{#e/undyne/4}即便我拥有再大的胆识，\n再多的力量...",
               ">{#e/undyne/11}也无法像他那样，\n拥有纯洁无瑕的心灵。"
            ]
            : respecc()
               ? [">{#p/undyne}{#e/undyne/5}Anyone else would've GIVEN UP by now!"]
               : [">{#p/undyne}{#e/undyne/5}Anyone else would be DEAD by now!"],
      turnTalkB7a: () =>
         SAVE.data.n.state_starton_papyrus === 1
            ? [
               ">{#p/undyne}{#e/undyne/2}你杀死的，\n不仅是我的学生，\n我的挚友...",
               ">{#e/undyne/2}更是能对极恶行径\n既往不咎，宽恕你\n一切过错的高尚之人。"
            ]
            : respecc()
               ? [">{#p/undyne}{#e/undyne/3}Then again, you've had time to train..."]
               : [">{#p/undyne}{#e/undyne/7}Are you even listening to me!?"],
      turnTalkB7b: () =>
         SAVE.data.n.state_starton_papyrus === 1
            ? [
               ">{#p/undyne}{#e/undyne/2}你杀死的，\n不仅是我的学生，\n我的挚友...",
               ">{#e/undyne/2}更是能对极恶行径\n既往不咎，宽恕你\n一切过错的高尚之人。"
            ]
            : respecc()
               ? [">{#p/undyne}{#e/undyne/3}Huh?\nDon't tell me you're ACTUALLY giving up..."]
               : [">{#p/undyne}{#e/undyne/8}And sparing me won't do anything!!"],
      turnTalkB8a: () =>
         SAVE.data.n.state_starton_papyrus === 1
            ? [
               world.trueKills > 9
                  ? ">{#p/undyne}{#e/undyne/11}With him and so many others gone..."
                  : ">{#p/undyne}{#e/undyne/11}你斩碎了他的头颅之时，\n也斩碎了仅存的仁慈。",
               ">{#p/undyne}{#e/undyne/2}而我能给你的\n全部“仁慈”...",
               ">{#p/undyne}{#e/undyne/1}就是让你死得痛快点！"
            ]
            : respecc()
               ? [
                  ">{#p/undyne}{#e/undyne/18}All those other monsters you fought...",
                  ">{#p/undyne}{#e/undyne/1}THAT'S the source of your power!"
               ]
               : [">{#p/undyne}{#e/undyne/9}快啊！"],
      turnTalkB8b: () =>
         SAVE.data.n.state_starton_papyrus === 1
            ? [
               world.trueKills > 9
                  ? ">{#p/undyne}{#e/undyne/11}With him and so many others gone..."
                  : ">{#p/undyne}{#e/undyne/11}你斩碎了他的头颅之时，\n也斩碎了仅存的仁慈。",
               ">{#p/undyne}{#e/undyne/2}而我能给你的\n全部“仁慈”...",
               ">{#p/undyne}{#e/undyne/1}就是让你死得痛快点！"
            ]
            : respecc()
               ? [">{#p/undyne}{#e/undyne/5}Come on, I'm GIVING you an opening here!"]
               : [">{#p/undyne}{#e/undyne/1}Seriously."],
      turnTalkC1: () =>
         SAVE.data.n.state_starton_papyrus === 1
            ? [
               ">{#p/undyne}{#e/undyne/11}You know, punk...",
               ">{#p/undyne}{#e/undyne/2}It's rude to interrupt people when they're monologuing.",
               ...(world.trueKills > 9
                  ? [
                     ">{#p/undyne}{#e/undyne/11}...\nYou're going to pay for what you did to him...",
                     ">{#p/undyne}{#e/undyne/2}... and all the other monsters you've slaughtered."
                  ]
                  : [">{#p/undyne}{#e/undyne/2}...\nYou're going to pay for what you did to him."])
            ]
            : [
               ">{#p/undyne}{#e/undyne/17}Keep a close eye on my attacks, and maybe...",
               ">{#p/undyne}{#e/undyne/5}... you'll be smart enough to know when to let 'em through!"
            ],
      turnTalkC2: () =>
         SAVE.data.n.state_starton_papyrus === 1
            ? [
               ">{#p/undyne}{#e/undyne/2}艾菲斯告诉过我，\n人类充满了决心...",
               ">{#p/undyne}{#e/undyne/1}呵呵，你那点破决心，\n也就只能送你到这了。"
            ]
            : respecc()
               ? [
                  ">{#p/undyne}{#e/undyne/1}Still going!?",
                  ">{#p/undyne}{#e/undyne/17}Ha...\nAlphys told me humans can be determined..."
               ]
               : [
                  ">{#p/undyne}{#e/undyne/1}Alphys told me humans can be determined...",
                  ">{#p/undyne}{#e/undyne/1}I see now what she meant by that!"
               ],
      turnTalkC3: () =>
         SAVE.data.n.state_starton_papyrus === 1 || respecc()
            ? [">{#p/undyne}{#e/undyne/1}但是，你知道吗？", ">{#e/undyne/1}我也充满了决心！"]
            : [">{#p/undyne}{#e/undyne/1}But I'm determined, too!"],
      turnTalkC4: () =>
         respecc()
            ? [">{#p/undyne}{#e/undyne/5}Determined to show you who's BOSS!"]
            : [">{#p/undyne}{#e/undyne/6}此时此地，\n干掉你的决心！"],
      turnTalkC5: () =>
         respecc() ? [">{#p/undyne}{#e/undyne/9}... WHO'S BOSS!"] : [">{#p/undyne}{#e/undyne/7}...干掉你！"],
      turnTalkC6: () =>
         respecc()
            ? [">{#p/undyne}{#e/undyne/10}... WHO'S...\n...\n... BOSS!!"]
            : [">{#p/undyne}{#e/undyne/9}...干掉...\n你..."],
      turnTalkC7: [">{#p/undyne}{#e/undyne/10}呼...\n呼..."],
      turnTalkC8: () =>
         respecc()
            ? [">{#p/undyne}{#e/undyne/5}NGAHHH!!!\nFINAL ATTACK!!!"]
            : [">{#p/undyne}{#e/undyne/5}哈啊啊啊啊！！！\n你个小屁孩，\n快给我去死啊！"],
      turnTalkC9a: [">{#p/undyne}{#e/undyne/5}真碍事！"],
      turnTalkC9b: [">{#p/undyne}{#e/undyne/5}I WILL NEVER TAKE MERCY FROM THE LIKES OF YOU!"],
      turnTalkC10a: [">{#p/undyne}{#e/undyne/6}别想打败我！"],
      turnTalkC10b: [">{#p/undyne}{#e/undyne/6}I WILL FIGHT YOU TO THE BITTER END!"],
      turnTalkD: [">{#p/undyne}{#e/undyne/9}..."],
      respeccTalk1: [
         ">{#p/undyne}{#e/undyne/11}\x00*huff...*\n\x00*huff...*",
         ">{#e/undyne/3}...",
         ">{#e/undyne/4}Well...",
         ">{#e/undyne/17}You're certainly tough, aren't you?"
      ],
      respeccTalk2: [
         ">{#e/undyne/0}... heh, enough to beat me, anyway.",
         ">{#e/undyne/13}But hey, that's pretty freaking tough!",
         ">{#e/undyne/1}Even though not everyone's gonna like you for it...",
         ">{#e/undyne/0}Seeing a human fight with honor gives me hope for your kind.",
         ">{#e/undyne/4}...",
         ">{#e/undyne/3}It's a shame we can't do battle forever, huh?"
      ],
      respeccTalk3: [
         ">{#e/undyne/1}Just... whatever you do, whoever you fight with...",
         ">{#e/undyne/1}Don't let it change who you are, got it?",
         ">{#e/undyne/3}...",
         ">{#e/undyne/4}Until next time...",
         ">{#e/undyne/4}Warrior."
      ],
      death1: () =>
         respecc()
            ? [
               ">{#p/undyne}哈啊...",
               ">I thought...\nYou were different...",
               ">But then...\n... you actually...\n... urgh...",
               ">..."
            ]
            : [
               ">{#p/undyne}哈啊...",
               ">我没想到...\n你... 居然这么强...",
               ">看来...\n这里...\n...就是我的葬身之地...",
               ">..."
            ],
      death2: () =>
         helmetdyneAttack() ? [">{#p/undyne}{#e/undyne/31}..."] : [">{#p/undyne}{#e/undyne/31}不..."],
      death3: () =>
         helmetdyneAttack()
            ? [">{#p/undyne}{#e/undyne/46}... no.", ">{#e/undyne/43}Not yet."]
            : [
               ">{#p/undyne}{#e/undyne/32}不！",
               ">我不能死！",
               ...(respecc()
                  ? [">This betrayal...\nThis... dishonor...", ">I won't let you get away with it!"]
                  : [
                     SAVE.data.n.state_starton_papyrus === 1
                        ? ">{#e/undyne/36}艾菲斯...\n艾斯戈尔..."
                        : ">{#e/undyne/36}艾菲斯...\n艾斯戈尔...\n帕派瑞斯...",
                     ">{#e/undyne/32}大家，都需要我来守护！"
                  ]),
               ">{#e/undyne/32}哈啊啊啊！！"
            ],
      death4: () =>
         helmetdyneAttack()
            ? [">{#e/undyne/45}Not while you're still breathing."]
            : [
               ">{#p/undyne}{#e/undyne/32}人类！",
               respecc()
                  ? ">{#e/undyne/36}In the name of a good and fair fight..."
                  : ">{#e/undyne/36}以希望与梦想起誓...",
               ">{#e/undyne/32}我定会击败你！"
            ],
      determination1: () =>
         helmetdyneAttack() ? [] : [">{#p/undyne}{#e/undyne/32}来啊，\n你就这点能耐吗？"],
      determination2: () => (helmetdyneAttack() ? [] : [">{#p/undyne}{#e/undyne/32}...真是可悲。"]),
      determination3: () =>
         helmetdyneAttack() ? [] : [">{#p/undyne}{#e/undyne/32}就你那点力气，\n还想打败我？"],
      determination4: () =>
         helmetdyneAttack()
            ? []
            : respecc()
               ? [">{#p/undyne}{#e/undyne/34}W-where's your fighting spirit now, huh?"]
               : [">{#p/undyne}{#e/undyne/34}当我们相信自己时，\n爆发出的力量有多强，\n你见-见识到了吧？"],
      determination5: () =>
         helmetdyneAttack() ? [] : [">{#p/undyne}{#e/undyne/35}呵... \n呵呵...", ">{#e/undyne/34}闹够了没有？"],
      determination6: () => (helmetdyneAttack() ? [] : [">{#p/undyne}{#e/undyne/34}..."]),
      determination7: () =>
         helmetdyneAttack() ? [] : [">{#p/undyne}{#e/undyne/35}...我不能...\n...\n放弃..."],
      determination8: () => (helmetdyneAttack() ? [] : [">{#p/undyne}{#e/undyne/34}..."]),
      death5: () => [
         helmetdyneAttack() ? ">{#p/undyne}{#e/undyne/43}..." : ">{#p/undyne}{#e/undyne/34}...",
         ">{#p/undyne}{#e/undyne/47}哈...\n哈...",
         ">{#e/undyne/44}...\n艾菲斯...",
         ">知道为什么\n我一直没对你说...",
         ">{#e/undyne/49}因为我怕...",
         ">..."
      ],
      death6: () => [
         ">{#p/undyne}{#e/undyne/44}不...\n不！",
         ">{#e/undyne/34}还没完！",
         ">{#e/undyne/48}我不能死！"
      ],
      death7: [">{*}{#p/undyne}{#i/4}{@random=1.1/1.1}哈啊啊啊啊！！！{^10}{%}"],
      death8a: [">{*}{#p/undyne}{#i/5}{#v/1}{@random=1.1/1.1}我不能死！{^15}{%}"],
      death8b: [">{*}{#p/undyne}{#i/5}{#v/2}{@random=1.1/1.1}我不能死！{^15}{%}"],
      death8c: [">{*}{#p/undyne}{#i/6}{#v/3}{@random=1.1/1.1}我不能死！{^15}{%}"],
      death9: [">{*}{#p/undyne}{#i/8}{#v/4}{@random=1.1/1.1}我{^10}不{^10}能{^30}{%}"],
      deterStatus1: [">{#p/story}* 安黛因笑着，强装自己没事。"],
      deterStatus2: [">{#p/story}* 安黛因的身体正一点一点融化。"],
      deterStatus3: [">{#p/story}* 安黛因的身体已经化得\n  看不出形状了。"],
      deterStatus4: [">{#p/story}* 安黛因深吸了一口气。"],
      deterStatus5: [">{#p/story}* Undyne stands defiantly."],
      challengeText1: [">{#p/human}* (You tell Undyne her attacks are too easy.)\n* (She doesn't care.)"],
      challengeText2: [
         ">{#p/human}* (You tell Undyne her attacks are too easy.)",
         ">{#p/basic}* The bullets get faster."
      ],
      challengeText3: [
         ">{#p/human}* (You tell Undyne her attacks are too easy.)",
         ">{#p/basic}* The bullets get ridiculous."
      ],
      challengeText4: [">{#p/human}* （你告诉安黛因，\n  你想来一场真正的对决。）"],
      challengeText5: [
         ">{#p/human}* (You tell Undyne her attacks are too easy.)",
         ">{#p/basic}* Undyne can't go any faster."
      ],
      challengeText7: [">{#p/human}* (You tell Undyne her attacks are too easy.)\n* (She's not paying attention.)"],
      pleadText1: [">{#p/human}* (You tell Undyne you didn't want to fight.)\n* (Nothing happens.)"],
      pleadText2: [
         ">{#p/human}* (You tell Undyne you just want to be friends.)",
         ">{#p/basic}* Undyne remembers someone.\n* The bullets get a little less extreme."
      ],
      pleadText3: [">{#p/human}* (You tell Undyne you just want to be friends.)\n* (She doesn't believe you.)"],
      pleadText4: [">{#p/human}* (You tell Undyne you didn't want to fight.)\n* (She laughs.)"],
      pleadText5: [">{#p/human}* (You tell Undyne you didn't want to fight.)\n* (She looks confused.)"],
      pleadText6: [">{#p/human}* (You tell Undyne you didn't want to fight.)\n* (She's not paying attention.)"],
      pleadText7a: [
         ">{#p/human}* (You tell Undyne you just want to be friends.)",
         ">{#p/basic}* Undyne agrees.\n* The bullets get a little more extreme."
      ],
      pleadText7b: [
         ">{#p/human}* (You tell Undyne you just want to be friends.)",
         ">{#p/basic}* Undyne agrees.\n* But the bullets can't get any faster."
      ],
      pleadText7c: [
         ">{#p/human}* (You tell Undyne you just want to be friends.)",
         ">{#p/basic}* Undyne agrees.\n* The bullets are getting out of control."
      ],
      pleadText8: [">{#p/human}* (You tell Undyne you didn't want to fight.)\n* She glares at you coldly."],
      genoCutscene1: [">{#p/kidding}{#e/kidd/0}...", ">{#e/kidd/1}呃... 嗯？", ">{|}{#e/kidd/1}What is- {%}"],
      genoCutscene2: [">{#p/kidding}{#e/kidd/3}安黛因！！！", ">{#e/kidd/4}我...！"],
      genoCutscene3: [">{#p/undyne}{#e/undyne/1}小子...？"],
      genoCutscene3x: [
         ">{#p/undyne}{#e/undyne/4}嘿，不用说什么...",
         ">{#e/kidd/7}小子，我没事。",
         ">{#p/undyne}赶紧逃吧，好吗？"
      ],
      genoCutscene4: [
         ">{#p/kidding}{#e/kidd/5}我控制\n不了\n自己...",
         ">{#e/kidd/6}他们... 他...",
         ">{#e/kidd/7}不知道他\n对我\n做了什么..."
      ],
      genoCutscene5: [">{#p/undyne}{#e/undyne/2}你的眼睛..."],
      genoCutscene6: [">{#p/kidding}{#e/kidd/6}我...", ">{#p/kidding}{#e/kidd/6}我..."],
      genoCutscene7: [">{#p/kidding}{#e/kidd/7}我\n打伤\n你了..."],
      genoCutscene8: [">{#p/undyne}{#e/undyne/3}小伤，没什么大不了的..."],
      genoCutscene9: [
         ">{#e/undyne/4}听着，我会干翻这些混蛋。",
         ">你不用听他们使唤了。",
         ">赶紧逃吧，好吗？"
      ],
      genoCutscene10: [">{#e/kidd/8}{#p/kidding}..."],
      genoCutscene11: [">{#p/undyne}{#e/undyne/5}艾菲斯博士会照顾好你的。", ">{#e/undyne/6}逃啊！"],
      genoCutscene12a: [
         ">{#p/undyne}{#e/undyne/7}...呵...\n“没什么大不了的...”",
         ">...才怪。不知怎么，\n只是那么一击..."
      ],
      genoCutscene12b: [">我就...", ">就..."],
      genoCutscene12c: [">该...\n该死...", ">帕派瑞斯...\n艾斯戈尔...\n艾菲斯..."],
      genoCutscene12d: [">我就这样...", ">{#e/undyne/8}让你们失望了。"],
      genoCutscene12e: [">我...", "{#e/undyne/8}我不能..."],
      genoCutscene13: [">{#p/undyne}...", ">{#e/undyne/12}不..."],
      genoCutscene14: [
         ">{*}{#p/undyne}{#e/undyne/11}我的身体...\n感觉要四分五裂了。{^15}{%15}",
         ">{*}好像随时...\n都可能粉身碎骨。{^15}{%15}",
         ">{*}但从我的灵魂深处...{^15}{%15}",
         ">{*}燃烧起了一股\n无法表述的感觉。{^15}{%15}",
         ">{*}{#e/undyne/12}那燃起的炙热\n不允许我死去。{^15}{%15}",
         ">{*}{#e/undyne/11}那么多人民...\n那么多挚友...\n都惨死在暴行之下...{^15}{%15}",
         ">{*}过了我这关，\n你们会毁掉一切...{^15}{%15}",
         ">{*}大伙的希望，\n大伙的梦想，\n顷刻间就会化为乌有。{^15}{%15}",
         ">{*}{#e/undyne/12}我不会让你们\n如愿以偿的。{^15}{%15}",
         ">{*}{#e/undyne/13}此时此刻，\n这星河里的每个人...{^15}{%15}",
         ">{*}I can feel their minds working as one.{^15}{%15}",
         ">{*}我们都有一个\n共同的目标。{^15}{%15}",
         ">{*}{#e/undyne/14}那就是战胜你。{^15}{%15}",
         ">{*}{#e/undyne/13}人类。艾斯利尔。\n...不，不管你们是谁。{^15}{%15}",
         ">{*}{#e/undyne/14}为了让这星河存续下去...{^15}{%15}",
         ">{*}{#e/undyne/15}{@random=1.1/1.1}我，安黛因，\n会将你们彻底击垮！{^15}{%15}"
      ],
      genoCutscene14x: [
         ">{#e/undyne/11}不...",
         ">{#e/undyne/12}不能就这么结束...！",
         ">{#e/undyne/13}Everyone in the galaxy is counting on me!",
         ">{#e/undyne/14}我不能让他们失望！"
      ],
      genoCutscene15: [">{*}{#p/undyne}{#v/1}你们还得再加把劲。{%20}"],
      genoCutscene15x: [">{#p/undyne}{#v/1}你们还得再加把劲！{%20}"],
      genoDeath1: [
         ">{#p/undyne}{#v/1}Damn it...",
         ">So even THAT power...\nIt wasn't enough...?",
         ">...",
         ">{#e/undyne/25}Heh...",
         ">Heheheh..."
      ],
      genoDeath2: [
         ">{*}{#e/undyne/26}If you...{^60}{%}",
         ">{*}If you think I'm gonna give up hope, you're wrong.{^60}{%}",
         ">{*}{#e/undyne/27}'Cause I've... got my friends behind me.{^60}{%}",
         ">{*}{#e/undyne/28}Alphys told me she had a backup plan in case I failed...{^60}{%}",
         ">{*}{#e/undyne/29}By now, she's called Asgore and told him to absorb the six human SOULs.{^60}{%}"
      ],
      genoDeath3: [">{*}{#p/undyne}{#v/1}{#e/undyne/30}{@random=1.1/1.1}And with that power...{^60}{%}"],
      genoDeath4: [">{*}{#p/undyne}{#v/1}{#e/undyne/30}{@random=1.1/1.1}This world will live on...!{^60}{%}"],
      lowStatus1: [">{#p/story}* The starlight is glimmering..."],
      lowStatus2: [">{#p/story}* Undyne flips her spear impatiently."],
      lowStatus3: [">{#p/story}* Twinkling shards drift in front of you."],
      lowStatus4: [">{#p/story}* Steam whirls around you."],
      lowStatus5: [">{#p/story}* 有一瞬，长矛的攻势停了下来。"],
      genoStatus1: [">{#p/asriel2}* 怎么会..."],
      genoStatus2: [">{#p/asriel2}* 不..."],
      genoStatus3: [">{#p/asriel2}* 游历了这么多条时间线，\n  我也从没见过她..."],
      genoStatus4: [">{#p/asriel2}* $(name)，光靠你打不过她。"],
      genoStatus5: [">{#p/asriel2}* ..."],
      trueGenoStatusX: () =>
         battler.volatile[0].vars.azzyAssist < 2
            ? [">{#p/asriel2}* Let's see how she likes THIS."]
            : [">{#p/asriel2}* 别忘了我们的战术。"],
      trueGenoStatus1: [">{#p/asriel2}* 别走神了。"],
      trueGenoStatus2: [">{#p/asriel2}* 可别让她唬到你了。"],
      trueGenoStatus3: [">{#p/asriel2}* 继续攻击就好..."],
      trueGenoStatus4: [">{#p/asriel2}* 她早晚会撑不住的。"],
      trueGenoStatus5: [">{#p/asriel2}* 胜利终将属于我们。"],
      trueGenoStatusLow1: [">{#p/asriel2}* Almost dead...!"],
      trueGenoStatusLow2: [">{#p/asriel2}* ...加把劲！"],
      asrielExplain: () => [
         ...(battler.volatile[0].vars.azzyAssist < 2
            ? [">{#p/asriel2}{#f/4}$(name)，\n你的攻击伤不到她。"]
            : [
               ">{#p/asriel2}{#f/8}上回交锋，\n你没能伤到她。",
               ">{#f/4}$(name)，\n你肯定没忘吧？",
               ">{#f/3}Between then and now, though, I had a chance to think."
            ]),
         ">{#f/13}虽说这幅身体...\n还没完全接纳我。",
         ">{#f/16}但我想帮你，\n这幅身体应该够用。",
         ">{#f/3}接下来，你先进攻，\n我则会用法术找出\n安黛因盔甲的破绽。",
         ">{#f/4}你要瞄准它们，\n并逐一突破。",
         ">{#f/3}祝好运..."
      ],
      neutralFinalStatus: [">{#p/story}* 安黛因充满了决心。"]
   },
   b_opponent_dateundyne: {
      name: "* 安黛因",
      snacker: () =>
         SAVE.data.b.undyne_respecc
            ? [">{#p/undyne}{#e/undyne/13}Hope you like it, fuhuhu!"]
            : [">{#p/undyne}{#e/undyne/12}Enjoy it while you still can."],
      intro: () =>
         SAVE.data.b.undyne_respecc
            ? [
               ">{#p/undyne}{#f/0}... so this is it.",
               ">Our final battle.",
               ">...",
               ">{#e/undyne/12}Warrior to warrior.",
               ">Across the sky of stars.",
               ">I challenge you to a duel...",
               ">{#e/undyne/9}For the honor of EVERYONE ON THE OUTPOST!!",
               ">{#e/undyne/7}IT'S THE ONLY WAY I CAN SETTLE THE SCORE BETWEEN US!!",
               ">{#e/undyne/9}SO COME ON, HIT ME WITH EVERYTHING YOU'VE GOT!!!\nNGAHHHH!!!"
            ]
            : [
               ">{#p/undyne}{#f/0}我被打败了，\n我的房子也\n完了...",
               ">甚至连和你\n交朋友都做不好。",
               ">...",
               ">{#e/undyne/12}就这样了。",
               ">我不在乎\n你是不是\n我的客人了。",
               ">{#e/undyne/9}最后比一场，\n双方都要拿出\n所有力量！！！",
               ">{#e/undyne/7}这是我唯一能够\n夺回我尊严的\n办法！！！",
               ">{#e/undyne/9}那就来吧！\n全力地攻上来！！！\n哈啊啊！！！"
            ],
      status1: [">{#p/story}* 安黛因让你先出招。"],
      act_check: [">{#p/story}* 安黛因 - 攻击41 防御21\n* 千真万确的最终决战\n  终于开始了！"],
      idleTalk1: [">{#p/undyne}{#e/undyne/9}让我看看\n你的实力吧！"],
      idleTalk2: [">{#p/undyne}{#e/undyne/9}快啊！"],
      idleTalk3: [">{#p/undyne}{#e/undyne/9}怎么，\n你怕了吗？"],
      idleTalk4: [">{#p/undyne}{#e/undyne/9}你在等什么？"],
      fightTalk: (stronk: boolean) =>
         SAVE.data.b.undyne_respecc
            ? [
               ">{#p/undyne}{#e/undyne/19}哎呀。",
               ">{#e/undyne/19}还真有点疼。",
               ">{#e/undyne/4}呵...",
               ">{#e/undyne/3}我想这就是\n我低估对手的\n下场吧。",
               ">{#e/undyne/0}不过，我不知道\n我为什么\n这么惊讶。",
               ">{#e/undyne/1}因为你战斗的\n风格。"
            ]
            : [
               ">{#p/undyne}{#e/undyne/16}啥。",
               ">{#e/undyne/15}这就是你的\n全力...？",
               ...(SAVE.data.b.oops
                  ? [
                     ">{#e/undyne/3}即使你使出了\n全力...",
                     stronk
                        ? ">{#e/undyne/33}你也只能\n让我受点擦伤，\n哈？"
                        : ">{#e/undyne/33}你还是无法\n狠下心来\n伤害我，哈？"
                  ]
                  : [">{#e/undyne/17}你的攻击\n甚至都没\n打中我！", ">{#e/undyne/17}..."])
            ],
      flirtTalk0: [
         ">{#p/undyne}{#e/undyne/12}当我让你\n打我的时候...",
         ">{#e/undyne/9}我是认真的！"
      ],
      flirtTalk1: [
         ">{#p/undyne}{#e/undyne/6}Wh-... no!",
         ">{#e/undyne/8}If anyone's got someone's heart, it's...",
         ">{#e/undyne/5}Wait, no-\nShut up!!!"
      ],
      flirtTalk2: [
         ">{#p/undyne}{#e/undyne/10}Would you STOP THAT!?",
         ">{#e/undyne/15}If you keep going like this, I'll...",
         ">{#e/undyne/16}I'll..."
      ],
      flirtTalk3: [
         ">{#p/undyne}{#p/undyne}{#e/undyne/18}Wha-...\nI...!",
         ">{#e/undyne/19}...",
         ">{#e/undyne/10}AHHHHHHHHHHHHHH-\nYOU FLIRTATIOUS LITTLE BRAT!",
         ">{#e/undyne/8}I HAVE HALF THE NERVE TO...",
         ">{#e/undyne/7}TO...",
         ">{#e/undyne/7}..."
      ],
      flirtStatus0: [">{#p/story}* 在这种情况下，\n  战斗可能不是个坏主意。"],
      flirtStatus1: [">{#p/story}* Something magical is happening."],
      flirtStatus2: [">{#p/story}* Undyne is at her limit."],
      flirtText0: [">{#p/human}* （你向安黛因调情。）"],
      flirtText1: [">{#p/human}* (You tell Undyne she's got your heart hook, line, and sinker.)"],
      flirtText2: [">{#p/human}* (You commend Undyne on her brave, fighting spirit.)\n* (She's YOUR hero, now.)"],
      flirtText3: [">{#p/human}* (You tell Undyne she's a precious, adorable little urchin.)"],
      cutscene1: [">{#p/undyne}{#e/undyne/4}呵...\n你知道吗？"],
      cutscene2: (fought: boolean) => [
         ...(SAVE.data.b.undyne_respecc
            ? [
               ">{#e/undyne/11}我其实不想\n伤害你。",
               ">{#e/undyne/11}一开始，\n想到要和你\n较量，我很\n兴奋..."
            ]
            : [
               ">{#e/undyne/11}我其实也不想\n伤害你。",
               ">{#e/undyne/11}一开始，\n我讨厌你那\n矫情的演戏，\n不过..."
            ]),
         ...(fought
            ? SAVE.data.b.undyne_respecc
               ? [">{#e/undyne/3}但看到你现在\n跟我相处的\n方式，那..."]
               : SAVE.data.b.oops
                  ? [">{#e/undyne/3}你刚才打我的\n那种方式，\n那..."]
                  : [">{#e/undyne/3}你刚才没打中\n我的那种方式，\n它..."]
            : SAVE.data.b.undyne_respecc
               ? [">{#e/undyne/3}但看到你现在\n对我的这种\n方式，那..."]
               : [">{#e/undyne/3}你刚才对我的\n那种方式，\n那..."]),
         ">{#e/undyne/4}让我想起了一个\n以前跟我训练的\n家伙。",
         ...(SAVE.data.b.undyne_respecc
            ? [
               ">{#e/undyne/11}...你可能\n不像他那样是个\n软弱的废柴。",
               ">{#e/undyne/11}但你们有一个\n共同点...",
               ">{#e/undyne/1}就是对\n战斗的意义的\n尊重。"
            ]
            : [
               ">{#e/undyne/11}现在我知道了\n你不只是个\n软弱的废柴。",
               ">{#e/undyne/13}你虽然是个\n软弱的废柴，\n但是心胸\n宽广！",
               ">{#e/undyne/4}跟他一样..."
            ]),
         ">{#e/undyne/3}...",
         ">{#e/undyne/3}听好了，人类。",
         ">{#f/undyne/0}看来你和\n艾斯戈尔\n命中注定\n难逃一战。",
         SAVE.data.b.undyne_respecc ? ">{#e/undyne/3}不像你..." : ">{#e/undyne/3}以我对\n他的了解...",
         ">{#e/undyne/4}他大概\n并不想和你\n战斗。",
         ...(SAVE.data.b.undyne_respecc
            ? [
               ">{#e/undyne/0}如果可以，\n跟他聊聊。",
               ">{#e/undyne/0}先告诉他你\n想要干什么。",
               ">{#e/undyne/3}我知道这\n对你来说可能\n有点奇怪，\n但是...",
               ">{#e/undyne/4}相信你肯定\n能说服他让你\n回家的。",
               ">{#e/undyne/0}至于我们的\n自由？",
               ">{#e/undyne/1}唉。",
               ">{#e/undyne/3}如果有其他\n不受尊敬的人类\n坠落下来...",
               ">{#e/undyne/3}我再夺取\n他的灵魂就\n好了。"
            ]
            : [
               ">{#f/undyne/0}跟他聊聊。",
               ">{#f/undyne/1}相信你肯定\n能说服他让你\n回家的。",
               ">{#e/undyne/3}不管多久，\n总会有坏人类\n坠落下来。",
               ">{#e/undyne/3}到时候我再\n夺取他的\n灵魂。"
            ]),
         ">{#f/undyne/1}有道理，\n对吧？\n呋呼呼。",
         ">{#f/undyne/0}哦对了，\n如果你真的\n伤害了艾斯戈尔...",
         ">{#e/undyne/11}我会亲自带上\n那些人类灵魂...\n穿过力场...",
         ...(SAVE.data.b.undyne_respecc
            ? [">{#e/undyne/8}跟你来一场\n真正的战斗！", ">{#e/undyne/13}这就是战士\n该做的，\n对吧？"]
            : [
               ">{#e/undyne/8}把你揍得\n万劫不复！",
               ">{#e/undyne/13}这就是\n朋友嘛，对吧？"
            ]),
         ">{#e/undyne/13}呋呼呼！",
         ">{#e/undyne/13}现在，咱们赶紧\n从这个着火的\n屋子里出去！"
      ]
   },

   i_artifact: {
      battle: {
         description: "据说这个吊坠是Erogot\n本人佩戴过的。",
         name: "神器"
      },
      drop: () => [
         ">{#p/human}* (You threw away the Legendary Artifact.)",
         ...(!SAVE.data.b.svr && game.room === 's_secret' && SAVE.data.n.state_starton_trashprogress < 2 // NO-TRANSLATE

            ? SAVE.data.b.s_state_papsink
               ? [">{#p/basic}* The dog dances even harder!"]
               : [">{#p/basic}* ... the dog's sighing quiets down, even if you can't tell."]
            : [])
      ],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? [">{#p/human}* (Inscribed with the signature of a former world leader.)"]
            : [">{#p/basic}* 据说这个吊坠\n  是Erogot本人佩戴过的。"],
      name: "神器",
      use: () => [
         ">{#p/human}* (You use the Legendary Artifact.)",
         ...((battler.active && battler.targetCurrent?.opponent.metadata.reactArtifact) ||
            (game.room === 'f_truth' && // NO-TRANSLATE

               SAVE.data.n.epiphany < 1 &&
               !SAVE.data.b.svr &&
               !world.runaway)
            ? []
            : !SAVE.data.b.svr && game.room === 's_secret' && SAVE.data.n.state_starton_trashprogress < 2 // NO-TRANSLATE

               ? SAVE.data.b.s_state_papsink
                  ? [">{#p/basic}* ... the dog's dancing slows down, even if you can't tell."]
                  : [">{#p/basic}* The dog sighs even louder!"]
               : [">{#p/human}* (Nothing happens.)"])
      ]
   },
   i_epiphany: {
      battle: {
         description: "Makes the weak-willed see things from your point of view.",
         name: "顿悟"
      },
      drop: [">{#p/human}* (You cast The Epiphany away.)"],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? [">{#p/human}* (A tome from centuries past, used first by a former world leader.)"]
            : [
               ">{#p/basic}* Makes the weak-willed see things from your point of view.\n* Not viable outside of battle."
            ],
      name: "顿悟",
      use: () =>
         battler.active
            ? []
            : SAVE.data.b.ufokinwotm8
               ? [
                  ">{#p/human}* (You activated The Epiphany on yourself, with the intent to hug.)",
                  ">{#p/human}* (No effect.)"
               ]
               : SAVE.data.b.svr
                  ? [
                     ">{#p/human}* (You read through the ancient text of the tome.)",
                     ">* (The text appears to be self- translating.)"
                  ]
                  : [">{#p/human}* (You activated The Epiphany.)", ">{#p/human}* (No effect outside of battle.)"]
   },
   i_astrofood: {
      battle: {
         description: "牙口不好的别吃。",
         name: "甘草糖"
      },
      drop: [">{#p/human}* （你把甘草糖扔掉了。）"],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? [">{#p/human}* （24 HP。）"]
            : [">{#p/basic}* “甘草糖” 回复24 HP\n* 牙口不好的别吃。"],
      name: "甘草糖",
      use: [">{#p/human}* （你咬了甘草糖。）"]
   },
   i_sap: {
      battle: {
         description: "取材自怪物故园里的一棵树。",
         name: "Sap"
      },
      drop: [">{#p/human}* （你把树液扔掉了。）"],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? [">{#p/human}* （35 HP。）"]
            : [">{#p/basic}* “树液” 回复35 HP\n* 取材自怪物故园里的一棵树。"],
      name: "树液",
      use: [">{#p/human}* (You chewed the Tree Sap.)"]
   },
   i_goggles: {
      battle: {
         description: "超越现实！\n能为你提供更长的喘息时间。",
         name: "AR眼镜"
      },
      drop: [">{#p/human}* （你把AR眼镜扔掉了。）"],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? [">{#p/human}* （6防御。）"]
            : [">{#p/basic}* “AR眼镜” （6防御）\n* 超越现实！\n  能为你提供更长的喘息时间。"],
      name: "AR眼镜",
      use: [">{#p/human}* （你戴上了AR眼镜。）"]
   },
   i_goggles_x: {
      battle: {
         description: "能为你提供稍长的喘息时间。",
         name: "AR眼镜？"
      },
      drop: [">{#p/human}* （你把AR眼镜扔掉了。）"],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? [">{#p/human}* （4防御。）"]
            : [">{#p/basic}* “AR眼镜？” （4防御）\n* 超越现实！\n  能为你提供稍长的喘息时间。"],
      name: "AR眼镜？",
      use: [">{#p/human}* （你戴上了AR眼镜。）"]
   },
   i_padd: {
      battle: {
         description: "A digital journal.\nMakes you invincible longer.",
         name: "Datapad"
      },
      drop: [">{#p/human}* （你把平板电脑扔掉了。）"],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? [">{#p/human}* (2 AT.)"]
            : [">{#p/basic}* \"Datapad\" (2 AT)\n* A digital journal.\n* Makes you invincible longer."],
      name: "Datapad",
      use: [">{#p/human}* (You equip the Datapad.)"]
   },
   i_padd_x: {
      battle: {
         description: "能为你提供稍长的喘息时间。",
         name: "Datapad?"
      },
      drop: [">{#p/human}* （你把平板电脑扔掉了。）"],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? [">{#p/human}* (0 AT.)"]
            : [">{#p/basic}* \"Datapad?\" (0 AT)\n* Makes you invincible just a little longer."],
      name: "Datapad?",
      use: [">{#p/human}* (You equip the Datapad.)"]
   },
   i_punchcard: {
      battle: {
         description: "风景如画...",
         name: "明信片"
      },
      drop: [">{#p/human}* （你把明信片扔掉了。）"],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? [">{#p/human}* (A perfectly ordinary piece of paper, with no notable attributes.)"]
            : [">{#p/basic}* 风景如画..."],
      name: "明信片",
      use: () =>
         world.meanie
            ? [
               ">{#p/human}* (You rip up the Postcard.)",
               battler.active
                  ? `>{#p/story}* 你的攻击力提升了${2 + battler.at_bonus}点！`
                  : ">{#p/human}* (No effect outside of battle.)"
            ]
            : battler.active
               ? [">{#p/human}* (You daydream about the landscape on the Postcard.)\n* (Nothing happens.)"]
               : []
   },
   i_quiche: {
      battle: {
         description: "With great confections come great sweetsponsibilities.",
         name: "芝士蛋糕"
      },
      drop: () => [
         ">{#p/human}* （你把芝士蛋糕扔掉了。）",
         ...(SAVE.data.b.svr || world.darker || SAVE.data.b.ufokinwotm8
            ? []
            : [">{#p/basic}* And the cycle of abandonment continues."]),
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
            ? [">{#p/human}* （45 HP。）"]
            : [">{#p/basic}* “芝士蛋糕” 回复45 HP\n* 甜蜜的零食背后，\n  是一份甜蜜的责任。"],
      name: "芝士蛋糕",
      use: () => [
         ">{#p/human}* （你吃掉了芝士蛋糕。）",
         ...(!battler.active &&
            (fetchCharacters()
               .find(c => c.key === 'sans') // NO-TRANSLATE

               ?.position.extentOf(player) ?? 200) < 200
            ? [
               ">{#p/sans}{#f/0}* ... oh.\n* you actually ate it?",
               ">{#p/sans}{#f/2}* i had no idea anyone liked my baking skills."
            ]
            : [])
      ]
   },
   i_crisp: {
      battle: {
         description: "A bag of chisps from far beyond the stars.",
         name: "Chisps"
      },
      drop: [">{#p/human}* (You throw away the Cosmic Chisps.)"],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? [">{#p/human}* （18 HP。）"]
            : [">{#p/basic}* \"Cosmic Chisps\" Heals 18 HP\n* A bag of chisps from far beyond the stars."],
      name: "Cosmic Chisps",
      use: [">{#p/human}* (You eat the Cosmic Chisps.)"]
   },
   i_rations: {
      battle: {
         description: "皇家出品，救急精品。",
         name: "口粮"
      },
      drop: [">{#p/human}* （你把口粮扔掉了。）"],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? [">{#p/human}* （30 HP。）"]
            : [">{#p/basic}* “口粮” 回复30 HP\n* 皇家出品，救急精品。"],
      name: "口粮",
      use: [">{#p/human}* （你吃掉了口粮。）"]
   },
   i_tea: {
      battle: {
         description: "让你在战斗中移动得更快。",
         name: "Tea"
      },
      drop: [">{#p/human}* （你把星云茶扔掉了。）"],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? [">{#p/human}* （15 HP。）"]
            : [
               ">{#p/basic}* “星云茶” 回复15 HP\n* 让你在战斗中移动得更快。\n* 仅在战斗中有效。"
            ],
      name: "Nebula Tea",
      use: () => [
         ">{#p/human}* (You drank the Nebula Tea.)",
         battler.active ? ">{#p/story}* 你的移速提升了1点！" : ">{#p/human}* (No effect outside of battle.)"
      ]
   },
   i_tzn: {
      battle: {
         description: "Like Earth tofu, but spacier.",
         name: "Tofu"
      },
      drop: [">{#p/human}* （你把太空豆腐扔掉了。）"],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? [">{#p/human}* （17 HP。）"]
            : [">{#p/basic}* \"Space Tofu\" Heals 17 HP\n* Like Earth tofu, but spacier."],
      name: "Space Tofu",
      use: () => [
         ">{#p/human}* （你吞下了太空豆腐。）",
         ...(world.meanie
            ? [
               ">* (The taste fills you with a certain kind of feeling...)",
               battler.active
                  ? `>{#p/story}* 你的攻击力提升了${4 + battler.at_bonus}点！`
                  : ">{#p/human}* (No effect outside of battle.)"
            ]
            : [])
      ]
   },
   i_flakes: {
      battle: {
         description: "Finally, a proper breakfast.",
         name: "Tem Flakes"
      },
      drop: [">{#p/human}* （你扔掉了提米薄片。）"],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? [">{#p/human}* （2 HP。）"]
            : [">{#p/basic}* \"Temmie Flakes\" Heals 2 HP\n* Finally, a proper breakfast."],
      name: "Temmie Flakes",
      use: [">{#p/human}* （你吃掉了提米薄片。）"]
   },
   i_temyarmor: {
      battle: {
         description: "The things you can do with a college education!",
         name: "Tem Armor"
      },
      drop: [">{#p/human}* （你把提米盔甲扔掉了。）"],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? [">{#p/human}* (10 AT, 20 DF.)"]
            : [
               ">{#p/basic}* \"Temmie Armor\" (10 AT, 20 DF)\n* The things you can do with a college education!",
               ">* Makes you invincible a lot longer...",
               ">* Restores a lot of lost HP after each turn...",
               ">* Your opposition's attacks have a fair chance to heal you...",
               ">* Significantly increases aim time in battle...",
               ">* It does everything any other item can do, but better."
            ],
      name: "提米盔甲",
      use: [">{#p/human}* (You don the Temmie Armor.)"]
   },
   i_boots: {
      battle: {
         description: "Nimble, but fickle. Not a suitable jetpack replacement.",
         name: "悬浮靴"
      },
      drop: [">{#p/human}* （你把悬浮靴扔掉了。）"],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? [">{#p/human}* （7攻击。）"]
            : [">{#p/basic}* “悬浮靴” （7攻击）\n* 灵活但轻浮，\n  想取代飞行器，有点悬。"],
      name: "悬浮靴",
      use: [">{#p/human}* （你穿上了悬浮靴。）"]
   },
   i_flight_suit: {
      battle: {
         description: "胆小鬼别穿。",
         name: "飞行服"
      },
      drop: [">{#p/human}* （你把飞行服扔掉了。）"],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? [">{#p/human}* （10防御。）"]
            : [">{#p/basic}* “飞行服” （10防御）\n* 胆小鬼别穿。"],
      name: "飞行服",
      use: [">{#p/human}* （你穿上了飞行服。）"]
   },
   i_snack: {
      battle: {
         description: "Undyne's personal recipe...?",
         name: "Odd Snack"
      },
      drop: () => [
         ">{#p/human}* (You throw away the Odd Snack.)",
         ...(game.room === 'f_kitchen' // NO-TRANSLATE

            ? ((SAVE.data.b.drop_snack = true),
               [">{#p/undyne}{#f/8}* 呋呼呼呼！\n* 把零食扔到\n  又冷又硬的地板上！"])
            : [])
      ],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? [">{#p/human}* （15 HP。）"]
            : [">{#p/basic}* \"Odd Snack\" Heals 15 HP\n* Undyne's personal recipe...?"],
      name: "Odd Snack",
      use: () => [
         ">{#p/human}* (You eat the Odd Snack.)",
         ...(game.room === 'f_kitchen' // NO-TRANSLATE

            ? [
               SAVE.data.b.undyne_respecc
                  ? ">{#p/undyne}{#f/1}* Hope you like it!"
                  : ">{#p/undyne}{#f/14}* Hope you like it!"
            ]
            : SAVE.data.b.svr || world.darker || SAVE.data.b.ufokinwotm8
               ? []
               : [">{#p/basic}* Crispy."])
      ]
   },

   n_shop_tem: {
      exit: [">{#p/tem}{#k/0}* 拜吼！！"],
      item: (armorprice: number) =>
         SAVE.data.n.plot === 72
            ? [
               "0G - 免费薄片！！",
               "0G - 免费薄片！！",
               "0G - 免费薄片！！",
               SAVE.data.b.item_temyarmor || temgone()
                  ? "§fill=#808080§--- 售罄 ---"
                  : SAVE.data.b.colleg
                     ? `${armorprice}G - temy盔甲！！！`
                     : "1000G - 供提咪上大鞋",
               "离开"
            ]
            : [
               "4G - 提咪薄片",
               "2G - 提咪薄片（促销，）",
               "20G - 提咪薄片（粉贵）",
               SAVE.data.b.item_temyarmor
                  ? "§fill=#808080§--- 售罄 ---"
                  : SAVE.data.b.colleg
                     ? `${armorprice}G - temy盔甲！！！`
                     : "1000G - 供提咪上大鞋",
               "离开"
            ],
      itemInfo: () =>
         SAVE.data.n.plot === 72
            ? [
               "回复2 HP\n提咪免费的\n食物！！",
               "回复2 HP\n提咪免费的\n食物！！",
               "回复2 HP\n提咪免费的\n食物！！",
               SAVE.data.b.colleg ? "防具：20防御\n让战斗\n炒鸡\n容易！！！" : "大鞋\n提咪追球\n更高级的\n教育"
            ]
            : [
               "回复2 HP\n提咪的\n食物",
               "回复2 HP\n提咪的\n促销\n食物！！",
               "回复2 HP\n提咪的\n食物\n（粉贵）",
               SAVE.data.b.colleg ? "防具：20防御\n让战斗\n炒鸡\n容易！！！" : "大鞋\n提咪追球\n更高级的\n教育"
            ],
      itemPrompt: ">{#p/tem}{#k/0}你吼！\n欢银光临...\n提咪百嚯店！",
      itemPurchase: [
         ">{#p/tem}{#k/6}谢谢惠顾！",
         ">{#p/tem}{#k/0}fdshfg",
         ">{#p/tem}{#k/2}你米有\n足够哒\n钱钱，",
         ">{#p/human}（你带的\n东西\n太多了。）"
      ],
      itemPurchasePrompt: (free: boolean) => (free || temgone() ? "偷走吗？" : "花$(x)G\n买它吗？"),
      itemSellPrompt: "出$(x)G\n卖掉它吗？",
      itemUnavailable: () => (temgone() ? ">{#p/basic}空无一物。" : ">{#p/tem}{#k/2}no more item..."),
      itemRestricted: ">{#p/tem}{#k/2}这个我\n不收...",
      menu: () =>
         temgone() ? ["拿取", "偷窃", "阅读", "离开"] : ["购买", world.meanie ? "偷窃" : "出售", "交谈", "离开"],
      menuPrompt1: ">{#p/tem}{#k/0}* 你吼！\n* 欢银光临...\n* 提咪百嚯店！！！",
      menuPrompt2: ">{#p/basic}* ...但是人们都逃走了。",
      sell1: [">{#p/tem}{#k/2}* 别哇！！！\n* 我滴钱钱，，，", ">{#p/tem}{#k/4}* 不许偷钱！！！"],
      sell2: [">{#p/tem}{#k/3}* 没门。"],
      steal1: [">{#p/human}* (You took 32767G from behind the counter.)"],
      steal2: [">{#p/basic}* 空无一物。"],
      note: [">{#p/human}* (But there was no note to be found here.)"],
      talk: () => [
         SAVE.data.n.plot === 72 ? "Good News" : "打招呼",
         SAVE.data.n.plot === 72 ? "Your Future" : SAVE.data.b.colleg ? "关于提米盔甲" : "介绍下自己",
         SAVE.data.n.plot === 72 ? "Temmie Secrets" : "提米的历史",
         "关于这个商店",
         "离开"
      ],
      talkPrompt: ">{#p/tem}{#k/0}你吼！！！\n我素提米",
      talkText: [
         () =>
            SAVE.data.n.plot === 72
               ? [">{#p/tem}{#k/0}* yAYA!", ">{#p/tem}{#k/0}* tem go to NEW WORLDS!!!"]
               : [">{#p/tem}{#k/0}* 你吼！！！", ">* 我素提米"],
         () =>
            SAVE.data.n.plot === 72
               ? [">{#p/tem}{#k/0}* yAYA!", ">{#p/tem}{#k/0}* tem go to NEW WORLDS!!!"]
               : SAVE.data.b.colleg
                  ? [
                     ">{#k/1}* 提咪盔甲太太吼了！\n* 任何战斗都变哒！\n* 炒鸡容易胜利！！！",
                     ">{#k/4}* 但，哼嗯嗯嗯，提咪想...\n* 如果尼用了盔甲，\n  战斗就卜再有挑战性了，",
                     ">{#k/3}* 但提咪...\n* 有一个姐决番案。",
                     ">{#k/6}* 提米会提供...\n* 一份{@fill=#ff0}奖鞋金{@fill=#fff}！",
                     ">{#k/3}* 如果尼{@fill=#ff0}输了好多战斗{@fill=#fff}，\n  提咪就费{@fill=#ff0}降低价格{@fill=#fff}！",
                     ...(armorprice() <= 1000
                        ? [
                           ">{#k/1}* in fack...\n* PRICE MAY ALREADY BE LOWERS!!!\n* WOA!!!!",
                           ">{#k/6}* Congra-tem-lations!!!"
                        ]
                        : [
                           ">{#k/3}* 所以如果你陷入了吼难的\n  战逗中觉得好灰森啊，\n  那你就可以买下提米盔甲\n  作为你的救命稻草！",
                           ">{#k/5}* 但提咪盔甲太吼了，\n* 答应窝一定在真的需要的\n  时候才买吼，"
                        ])
                  ]
                  : [">{#p/tem}{#k/0}* 你吼！！！", ">* 我素提米"],
         () =>
            SAVE.data.n.plot === 72
               ? [
                  ">{#p/tem}{#k/0}* at back of famus statue, can find SPECIL SWITCH,",
                  ">{#p/tem}{#k/0}* and SWITCHs...\n* come wif RIDDLES!",
                  SAVE.data.b.colleg
                     ? ">{#p/tem}{#k/2}* even after colleg, tem don know what it means,,,"
                     : ">{#p/tem}{#k/0}* tem don know what it means,,,",
                  ">{#p/tem}{#k/1}* but mayb humans can solve!!\n* yAYA!!"
               ]
               : SAVE.data.b.colleg
                  ? [
                     ">{#p/tem}{#k/0}* 嚎吖！\n* 提咪获得惹提米学的学位！\n* 提咪现在可以告诉你全部\n  提咪的深远历史了！！！"
                  ]
                  : [">{#p/tem}{#k/0}* 我们提咪有着\n  粉深远的历史！！！"],
         () =>
            SAVE.data.n.plot === 72
               ? [">{#p/tem}{#k/0}* yaYA!!!\n* wil close TEM SHOP soon!!!"]
               : [">{#p/tem}{#k/0}* 嚎吖！！！\n* 去提咪商店吧！！！"]
      ],
      colleg1: [
         ">{#p/tem}{#k/1}* 哇嗷！！",
         ">{#k/2}* 介么多钱钱...\n* 提咪尊的可以收下么...",
         ">{#k/6}* 好哒！！！！\n* 提咪要去上大鞋然后\n  让尼感到骄傲！！！"
      ],
      colleg2: [
         ">{#p/tem}* 提米从大鞋回来了，",
         ">{#k/0}* 提咪学会啦好多东东，\n* 学会卖新道具辣！\n* 嚎吖！！！"
      ],
      sellExit: "离开",
      sellValue: "$(x)G",
      sellStory1: () => [
         ">{#p/tem}{#k/1}* 哇嗷！！",
         ">{#k/2}* 尼带着... $(x)！！！",
         SAVE.data.b.colleg
            ? ">{#k/4}* hnnn....\n* i gota have dat $(x)s...\n* but i gota pay for gradskool,"
            : ">{#k/4}* 哼嗯嗯嗯....\n* 我炒鸡想要辣个$(x)...\n* 但我必须筹集我的大鞋鞋费，",
         ">{#k/5}* 哼嗯嗯嗯嗯....！！！\n* 提咪一直都想要个$(x)...！"
      ],
      sellStory2: [">{#p/tem}{#k/2}* 但.. 但是...", ">{#k/4}* 卟！！！！！！！！！！！！"],
      sellStory3: () =>
         SAVE.data.b.colleg
            ? [
               ">{#p/tem}{#k/3}* Is this a joke?\n* Are you having a laugh?\n* Ha ha, very funny.\n* I'm the one with a degree."
            ]
            : [">{#p/tem}{#k/3}* 你会后悔的。"],
      zeroPrompt: ">{#p/basic}..."
   },
   n_shop_tortoise: {
      exit: () =>
         world.runaway
            ? []
            : world.genocide || world.killed0 || SAVE.data.s.state_foundry_deathroom === 'f_hub' // NO-TRANSLATE

               ? [">{#p/basic}{#k/1}* 这就结了。"]
               : [">{#p/basic}{#k/0}* 在外面小心点，孩子！"],
      item: () =>
         world.runaway
            ? ["0G - 平板电脑？", "0G - AR眼镜？", "0G - 星云茶", "0G - 树液", "离开"]
            : world.genocide || world.killed0 || SAVE.data.s.state_foundry_deathroom === 'f_hub' // NO-TRANSLATE

               ? ["45G - 平板电脑？", "45G - AR眼镜？", "16G - 星云茶", "25G - 树液", "离开"]
               : SAVE.data.n.plot === 72
                  ? [
                     SAVE.data.b.item_padd ? "25G - 平板电脑？" : "35G - 平板电脑",
                     SAVE.data.b.item_goggles ? "25G - AR眼镜？" : "35G - AR眼镜",
                     "5G - 星云茶",
                     "5G - 树液",
                     "离开"
                  ]
                  : [
                     SAVE.data.b.item_padd ? "45G - 平板电脑？" : "55G - 平板电脑",
                     SAVE.data.b.item_goggles ? "45G - AR眼镜？" : "55G - AR眼镜",
                     "16G - 星云茶",
                     "25G - 树液",
                     "离开"
                  ],
      itemInfo: () => [
         SAVE.data.b.item_padd || world.genocide || world.killed0 || SAVE.data.s.state_foundry_deathroom === 'f_hub' // NO-TRANSLATE

            ? "武器：0攻击\n(当前攻击$(x))\n只能让你\n多喘口气。"
            : "武器：2攻击\n(当前攻击$(x))\n给你点时间\n喘口气。",
         SAVE.data.b.item_goggles || world.genocide || world.killed0 || SAVE.data.s.state_foundry_deathroom === 'f_hub' // NO-TRANSLATE

            ? "防具：4防御\n(当前防御$(x))\n只能让你\n多喘口气。"
            : "防具：6防御\n(当前防御$(x))\n给你点时间\n喘口气。",
         "回复15 HP\n能在战斗中\n移动得更快。",
         "回复35 HP\n取材自\n真正的树。"
      ],
      itemPrompt: () =>
         world.genocide || world.killed0
            ? ">{#p/basic}{#k/3}别指望\n我会打折。"
            : ">{#p/basic}{#k/4}想买些\n啥呢？",
      itemPurchase: () =>
         world.genocide || world.killed0
            ? [
               ">{#p/basic}{#k/1}Here we are.",
               ">{#p/basic}{#k/1}...",
               ">{#p/basic}{#k/3}咋了？\n这点钱\n都付不起？",
               ">{#p/human}（你带的\n东西\n太多了。）"
            ]
            : [
               ">{#p/basic}{#k/0}谢谢惠顾！\n哇哈哈。",
               ">{#p/basic}{#k/2}想好了\n再买哦。",
               ">{#p/basic}{#k/4}你的钱\n还不太够。",
               ">{#p/human}（你带的\n东西\n太多了。）"
            ],
      itemPurchasePrompt: () => (world.runaway ? "偷走吗？" : "花$(x)G\n买它吗？"),
      menu: () =>
         world.runaway ? ["拿取", "偷窃", "阅读", "离开"] : ["购买", world.meanie ? "偷窃" : "出售", "交谈", "离开"],
      menuPrompt1: () =>
         SAVE.data.n.plot === 72
            ? ">{#p/basic}{#k/0}* 哇哈哈！\n* 我果然没看错你！"
            : ">{#p/basic}{#k/0}* 来瞧瞧！\n* 我这有不少物美价廉的\n  废品打算卖呢。",
      menuPrompt2: () =>
         SAVE.data.n.plot === 72 ? ">{#p/basic}{#k/0}* 哇哈哈。" : ">{#p/basic}{#k/0}* 别见外哦。",
      menuPrompt3: () =>
         world.genocide
            ? ">{#p/basic}{#k/3}* 小伙子，\n  你们几个忙活啥呢？\n* 等等，当我没问。\n  不关我的事，对吧？"
            : ">{#p/basic}{#k/2}* Wa ha ha...\n* So you came to see me.\n* What a riot!",
      menuPrompt4: ">{#p/basic}* ...但是人们都逃走了。",
      note: [">{#p/human}* （但没有人给你留字条。）"],
      sell1: () =>
         world.runaway
            ? [">{#p/human}* （你从柜台后面拿走了1394G。）"]
            : world.genocide
               ? [
                  ">{#p/basic}{#k/4}* 哇哈哈...",
                  ">{#k/3}* 呵，先是把别人灵魂据为己有，\n  现在又想用同样的手段\n  偷我的东西？",
                  ">{#k/4}* 我建议你\n  最好不要得寸进尺。"
               ]
               : world.meanie
                  ? [
                     ">{#p/basic}{#k/2}* 哎呀，孩子。\n* 你知道这些东西\n  是要花钱的吧？",
                     ">{#k/3}* 也许对你来说\n  它们只是废品，\n  但对我来说绝非如此！"
                  ]
                  : [
                     ">{#p/basic}{#k/2}* 哈！\n* 我是卖废品的，\n  不是收废品的！",
                     ">{#k/3}* 不过，如果你想卖点东西，\n  我有个好主意，\n  去提米商店那里看看吧。",
                     ">{#k/0}* 你问它在哪？",
                     ">{#k/4}* ...",
                     ">{#k/0}* 想不起来了。"
                  ],
      sell2: () =>
         world.runaway
            ? [">{#p/basic}* 空无一物。"]
            : world.genocide || world.meanie
               ? [">{#p/basic}{#k/1}* I wouldn't give up my gilded treasures at phaser-point."]
               : [">{#p/basic}{#k/0}* 我再说最后一遍，\n  我不收！"],
      talk: () =>
         SAVE.data.n.plot === 72
            ? [
               "艾斯戈尔",
               "新家园",
               "托丽尔",
               SAVE.data.b.c_state_secret2 && !SAVE.data.b.c_state_secret2_used
                  ? "§fill=#ff0§握手"
                  : "我是英雄吗",
               "离开"
            ]
            : world.genocide
               ? ["艾斯利尔", "（威胁他）", "（揍他）", "安黛因", "离开"]
               : world.killed0
                  ? ["你的下场", "（威胁他）", "（揍他）", "谁是英雄", "离开"]
                  : [
                     48 <= SAVE.data.n.plot && SAVE.data.n.state_foundry_undyne > 0
                        ? "介绍下自己"
                        : ["介绍下自己", "§fill=#ff0§那场战争（新）", "§fill=#ff0§退休生活（新）", "退休生活"][
                        Math.min(SAVE.data.n.shop_gerson, 3)
                        ],
                     ["故园生活", "§fill=#ff0§你的家人（新）", "§fill=#ff0§Erogot（新）", "Erogot"][
                     Math.min(SAVE.data.n.shop_homeworld, 3)
                     ],
                     "铸厂",
                     SAVE.data.s.state_foundry_deathroom === 'f_hub' // NO-TRANSLATE

                        ? "安黛因"
                        : SAVE.data.b.c_state_secret2 && !SAVE.data.b.c_state_secret2_used
                           ? "§fill=#ff0§握手"
                           : "聊聊安黛因",
                     "离开"
                  ],
      talkPrompt: () =>
         world.genocide || world.killed0
            ? ">{#p/basic}{#k/2}是吗？\n就你\n还想聊天？"
            : ">{#p/basic}{#k/0}你想知道点\n啥呢？",
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
                  ">{#k/3}* ... huh?\n* You want to know if Asgore can be your father?",
                  ">{#k/0}* Well, I don't see why not!",
                  ">{#k/0}* I'm sure he'd be happy to have you living with him.",
                  ">{#k/2}* It'd probably be good for him!\n* Wa ha ha."
               ]
               : world.genocide
                  ? [
                     ">{#p/basic}{#k/1}* You wanna know my thoughts on Asriel?",
                     ">{#k/0}* ...\n* He was a good kid.",
                     ">{#k/3}* And if he was still alive, he woulda made a great king.",
                     ">{#k/4}* As for what you got there standin' in front of me, well, it's not him.",
                     ">{#k/0}* It looks like him, talks like him, even has his damned adorable face... bless that kid.",
                     ">{#k/3}* But that SOUL... being this close to you, the resemblance is unmistakable.",
                     ">{#k/1}* How'd it feel taking the SOUL of your own mother, boy?",
                     ">{#k/0}* I wonder."
                  ]
                  : world.killed0
                     ? [
                        ">{#p/basic}{#k/0}* Long ago, the king and I agreed that escaping would be pointless...",
                        ">{#k/1}* Since once we left, humans would just kill us on the spot.",
                        ">{#k/3}* I'll admit I felt a little betrayed when he changed his mind.",
                        ">{#k/4}* But now, I think...\n* Maybe he was right to.",
                        ">{#k/0}* 'Cause after all, even though we never escaped...",
                        ">{#k/3}* A human's killing us anyway, ain't that right?"
                     ]
                     : 48 <= SAVE.data.n.plot && SAVE.data.n.state_foundry_undyne > 0
                        ? [
                           ">{#p/basic}{#k/0}* Eh, there's really not much to say about me.",
                           ">{#k/0}* I do my best to live my life...",
                           ">{#k/4}* Help those around me in ways that I can.",
                           ">{#k/0}* The thing of it is, we live in dangerous times.",
                           ">{#k/3}* If the wrong human were to stumble on our little outpost, we'd be as good as gone..."
                        ]
                        : [
                           [
                              ">{#p/basic}{#k/0}* 我已经活了很久了。\n* 也许太久了。",
                              ">{#k/3}* 想当年，\n  人们称我为“正义之剑”。",
                              ">{#k/2}* 那时，\n  我还是行星理事会的主席。",
                              ">{#k/1}* ...要不是该死的战争，\n  我今天可能还在\n  那个位置上。"
                           ],
                           [
                              ">{#p/basic}{#k/0}* 啊，是啊，就是那场战争。\n* 那场战争，\n  给我，给这里每个人\n  都带来了难以磨灭的创伤。",
                              ">{#k/4}* 每隔一段时间，\n  我们会收到报告...\n* 上面，全是为了保护家园\n  而壮烈牺牲的烈士。",
                              ">{#k/1}* 我至今还记得，小毛球国王\n  将一封封噩耗告知烈士家属时，\n  他脸上的神情...",
                              ">{#k/1}* 眼神空洞，目光呆滞...\n* 孩子，这就是战争\n  给人带来的影响。",
                              ">{#k/3}* 所以，我就退休了。"
                           ],
                           [
                              ">{#p/basic}{#k/3}* 我的退休生活？",
                              ">{#k/2}* 哇哈哈！\n* 可谓是“逍遥自在”啊！",
                              ">{#k/4}* 也许那些在空境工作的员工\n  根本看不上这间破屋...",
                              ">{#k/2}* ...但关我啥事？\n  我又不用跟他们比。",
                              ">{#k/0}* 能有这些或英勇、或古怪、\n  或有点害羞的邻居，\n  我就已经知足。",
                              ">{#k/0}* 这也许并非我梦想的生活，\n  但人生在世，就该随遇而安嘛。"
                           ],
                           [
                              ">{#p/basic}{#k/3}* 想让我再重复一遍吗？",
                              ">{#k/4}* 哇哈哈...\n  恐怕，你得回溯时间了。",
                              ">{#k/2}* 就连我自己\n  都忘了刚才说过啥了！"
                           ]
                        ][Math.min(SAVE.data.n.shop_gerson++, 3)],
         () =>
            SAVE.data.n.plot === 72
               ? [
                  ">{#p/basic}{#k/3}* A whole new world...",
                  ">{#k/0}* Boy, I never thought I'd see the day.",
                  ">{#k/3}* Dr. Alphys told everyone she'd started scanning for new worlds...",
                  ">{#k/0}* Then, just a short time ago, she said she'd found one.",
                  ">{#k/0}* It's called Eurybia.\n* Don't know much else about it beyond that.",
                  ">{#k/1}* All I can be sure of is that it'll be better than this place.",
                  ">{#k/3}* That's not to say I won't miss it.",
                  ">{#k/0}* I've lived through the entire period of monster captivity...",
                  ">{#k/0}* Leaving it so soon almost seems like a crime."
               ]
               : world.genocide || world.killed0
                  ? [
                     ">{#p/basic}{#k/3}* I've lived too long to be afraid of something like you.",
                     ">{#k/2}* Try it, kiddo!",
                     ">{#k/1}* ... I know you can't here.",
                     ">{#k/4}* Wah ha...\n* Knowledge like that is part of the reason I've survived so long."
                  ]
                  : [
                     [
                        ">{#p/basic}{#k/0}* 故园生活啊...\n* 嗯... 首先，故园是有名字的。\n  叫做克里乌斯。",
                        ">{#k/3}* 我自己在城外一个\n  宁静的小镇中长大。\n* 嗯，应该还算宁静。",
                        ">{#k/4}* 每隔几天，学校里的孩子们\n  就会组织单车竞速比赛。",
                        ">{#k/0}* 有时候天公不作美，\n  但他们一点都不在乎。\n* 甚至，坏天气还让比赛\n  变得更刺激，更有趣了。",
                        ">{#k/0}* 那时，我还是个小毛孩，\n  和家人参加过好多次竞速比赛。",
                        ">{#k/0}* 你别误会。\n* “雷霆蜗牛”是很好玩，\n  但那可不是一回事。"
                     ],
                     [
                        ">{#p/basic}{#k/3}* 我的家人？\n* 呃，没什么太多可说的。\n* 父母对我很好，\n  还有几个兄弟姐妹。",
                        ">{#k/0}* 有一天，\n  Erogot国王来我们小镇。\n* 在一场竞速比赛中，\n  我和他碰面了。",
                        ">{#k/0}* 我只是个不起眼的乡巴佬，\n  但他从我身上看到了别的东西，\n  那是某种特质...",
                        ">{#k/4}* 一来二去，\n  我小小年纪就离开了家人。",
                        ">{#k/3}* ...那次一别，\n  此后就再也没能见到家人。"
                     ],
                     [
                        ">{#p/basic}{#k/0}* Erogot，我们家园\n  上一个伟大时代的国王。",
                        ">* 我相信你一定读过他的故事。",
                        ...(SAVE.storage.inventory.has('artifact') // NO-TRANSLATE

                           ? [">{#k/2}* 如果你没读过，\n  那你怎么拿着他的吊坠！？"]
                           : [
                              ">{#k/2}* 如果你没读过，\n  难不成你活的这么长时间\n  都是在外星过的吗！？"
                           ]),
                        ">{#k/3}* 在他的通知下，\n  怪物一族发展到了现在的盛况。\n* 可能有点太盛了。",
                        ">{#k/0}* 他第一次见到人类的时候\n  很高兴...\n  但不是为他自己而高兴。",
                        ">{#k/1}* 喏，是他儿子的愿望。\n* 那可怜的孩子不仅完全\n  得到了他想要的，\n  还得到了更多..."
                     ],
                     [
                        ">{#p/basic}{#k/3}* 抱歉，我不想谈太多\n  这个话题了。",
                        ">{#k/1}* 小毛球国王可不想让你\n  背负那样的重担。"
                     ]
                  ][Math.min(SAVE.data.n.shop_homeworld++, 3)],
         () =>
            SAVE.data.n.plot === 72
               ? [
                  ">{#p/basic}{#k/0}* Toriel?\n* She came through here not too long ago, actually.",
                  ">{#k/1}* Said she needed time to herself.",
                  ">{#k/3}* Well, y'know what?\n* I figure she's had enough time by now.",
                  ">{#k/0}* You can find her in the trash depository past the ladder in the room nearby.",
                  ">{#k/3}* I'm pretty sure I know what's got her so pre-occupied..."
               ]
               : world.genocide || world.killed0
                  ? 48 <= SAVE.data.n.plot
                     ? [
                        [
                           ">{#p/basic}{#k/3}* Eh?\n* Fight you?",
                           ">{#k/1}* Nah... I'm not a hero.\n* Not anymore.",
                           ">{#k/0}* And b'sides...\n* You may have spared Undyne, but everyone else is still dead.",
                           ">{#k/4}* I'm better off holding my ground right where I am..."
                        ],
                        [
                           ">{#p/basic}{#k/3}* Eh?\n* Fight you?",
                           ">{#k/1}* Nah... I'm not a hero.\n* Not anymore.",
                           ">{#k/3}* And b'sides...\n* People seem to go missing after they run into you.",
                           ">{#k/4}* I'll take that as an omen to stay right where I am..."
                        ],
                        [
                           ">{#p/basic}{#k/3}* Eh?\n* Fight you?",
                           ">{#k/1}* Nah... I'm not a hero.\n* Not anymore.",
                           ">{#k/0}* And b'sides...\n* After what you did to Undyne, I know I don't stand a chance.",
                           ">{#k/4}* I'm better off holding my ground right where I am..."
                        ]
                     ][world.genocide ? 2 : SAVE.data.n.state_foundry_undyne]
                     : [
                        ">{#p/basic}{#k/3}* Eh?\n* Fight you?",
                        ">{#k/1}* Nah... I'm not a hero.\n* Not anymore.",
                        ">{#k/0}* And b'sides...\n* These old bones aren't fit for fighting anyhoo.",
                        ">{#k/1}* One attack from you, and then I'd... well...",
                        ">{#k/4}* At least by talking to you, I've bought enough time for some of them to escape."
                     ]
                  : postSIGMA()
                     ? [
                        ">{#p/basic}{#k/3}* 你想了解铸厂？\n* 这个破地方？",
                        ">{#k/3}* Well, recently, we've been having some electricity problems...",
                        ">{#k/0}* Though I'm sure it's nothing the Foundry crew can't sort out.",
                        ">{#k/2}* Those folks can't get enough of their engineering jobs!"
                     ]
                     : 48 <= SAVE.data.n.plot && SAVE.data.n.state_foundry_undyne > 0
                        ? [
                           [
                              ">{#p/basic}{#k/3}* 你想了解铸厂？\n* 这个破地方？",
                              ">{#k/3}* 嗯，这是个大家经常迷路...",
                              ">{#k/3}* 或者被抛弃的地方...",
                              ">{#k/2}* 孩子，我真希望这种事情\n  不会发生在你身上。"
                           ],
                           [
                              ">{#p/basic}{#k/3}* 你想了解铸厂？\n* 这个破地方？",
                              ">{#k/0}* 唉，这地方从来都\n  称不上友好...",
                              ">{#k/3}* 从人类把我们死死逼到这里来，\n  到最近我们失去斗志...",
                              ">{#k/3}* 这里只有厄运啊，孩子。"
                           ]
                        ][SAVE.data.n.state_foundry_undyne - 1]
                        : [
                           ">{#p/basic}{#k/3}* 你想了解铸厂？\n* 这个破地方？",
                           ">{#k/2}* 回想我们刚被困在这里时，\n  这里就是前哨站！",
                           ">{#k/0}* 所有后来添加的花哨部分\n  都是由我们这些怪物建造的。",
                           ">{#k/0}* 事实证明，\n  大多数人都不喜欢活在过去。\n* 确实在理。",
                           ">{#k/2}* 但是... 我只是觉得\n  改造这个地方太安逸了。",
                           ">{#k/3}* 是人类把我们困在这里，\n  希望我们在黑暗中腐烂受苦。",
                           ">{#k/0}* 但看看现在的我们。\n* 看看我们把这里\n  变成了自己的地盘。",
                           ">{#k/2}* 哇哈哈！\n* 得让他们知道知道，\n  谁才是老大！"
                        ],
         () =>
            SAVE.data.b.c_state_secret2 && !SAVE.data.b.c_state_secret2_used
               ? ((SAVE.data.b.c_state_secret2_used = true),
                  [
                     ">{#p/basic}{#k/3}* What?\n* Where on Krios did you learn THAT handshake?",
                     ">{#k/2}* I haven't shown anyone that routine in years!",
                     ">{#k/0}* Wa ha ha... but I think I know where ya learned it from.",
                     ">{#k/0}* Long time ago, a human came here... me and them became good friends.",
                     ...(SAVE.data.n.plot === 72
                        ? [
                           ">{#k/3}* Maybe we still are.\n* I'll have to ask 'em when they wake up.",
                           ">{#k/4}* I've only just adopted the little rascal...",
                           ">{#k/0}* They seem pretty tired after all that archive business.",
                           ">{#k/3}* Imagine...\n* Living in a virtual world...",
                           ">{#k/2}* If you die in the simulation, do you die in real life?",
                           ">{#k/0}* Eh, never mind.\n* It doesn't matter now, anyway."
                        ]
                        : [">{#k/3}* I wonder what they're up to now..."])
                  ])
               : SAVE.data.n.plot === 72
                  ? [
                     ">{#p/basic}{#k/0}* Frisk, I could talk about you all day after what you did.",
                     ">{#k/4}* Risking your life, facing down a godlike being just to save us...",
                     ">{#k/3}* The words strong enough to do it justice don't exist.",
                     ">{#k/0}* I think, sometime in your future, if you really wanted it...",
                     ">{#k/0}* You could lead the monster race yourself, as ruler.",
                     ">{#k/2}* Everyone would follow you.\n* Even this old coot!",
                     ">{#k/0}* You're a real hero, kid."
                  ]
                  : 48 <= SAVE.data.n.plot
                     ? world.genocide
                        ? [
                           [
                              ">{#p/basic}{#k/1}* I take it you've killed her by now?",
                              ">{#k/1}* ...",
                              ">{#k/3}* Then why ask me...",
                              ">{#k/3}* Unless...",
                              ">{#k/2}* You just wanna get my reaction, don'tcha?",
                              ">{#k/4}* ...",
                              ">{#k/4}* How about... nah."
                           ],
                           [
                              ">{#p/basic}{#k/1}* I get it, guys.",
                              ">{#k/1}* She's dead.",
                              ">{#k/3}* You expectin' me to throw a party for you or somethin'?",
                              ">{#k/1}* Get outta my sight."
                           ]
                        ][Math.min(SAVE.data.n.shop_deadfish++, 1)]
                        : SAVE.data.s.state_foundry_deathroom === 'f_hub' // NO-TRANSLATE

                           ? [
                              ">{#p/basic}{#k/1}* ...",
                              ">{#k/1}* You've got a real twisted sense of humor, kiddo.",
                              ">{#k/3}* Killing her in front of me like that...",
                              ">{#k/1}* You're lucky I don't walk out there and kill you myself."
                           ]
                           : world.killed0
                              ? [
                                 [
                                    ">{#p/basic}{#k/4}* Undyne?",
                                    49 <= SAVE.data.n.plot
                                       ? ">{#k/4}* She passed through here earlier..."
                                       : ">{#k/4}* She just passed through here a few moments ago.",
                                    ">{#k/0}* Said she'd \"given up\" on tryin'a capture you.",
                                    ">{#k/4}* ...",
                                    ">{#k/4}* What happened back there...?"
                                 ],
                                 [
                                    ">{#p/basic}{#k/3}* Undyne?",
                                    ">{#k/0}* I haven't heard from her in a while.",
                                    ">{#k/4}* She just kinda... disappeared.",
                                    ">{#k/3}* Was that your doing?"
                                 ],
                                 [
                                    [
                                       ">{#p/basic}{#k/1}* ...",
                                       ">{#k/1}* You killed her, just like you killed everyone else.",
                                       ">{#k/3}* Granted, she wasn't intent on letting YOU live...",
                                       ">{#k/1}* But don't act like this was just self-defense for you.",
                                       ">{#k/3}* Wa ha...\n* I know you better than that."
                                    ],
                                    [">{#p/basic}{#k/4}* ...", ">{#k/0}* What more is there to say?"]
                                 ][Math.min(SAVE.data.n.shop_deadfish++, 1)]
                              ][SAVE.data.n.state_foundry_undyne]
                              : [
                                 2 <= SAVE.data.n.plot_date
                                    ? SAVE.data.b.undyne_respecc
                                       ? [
                                          ">{#p/basic}{#k/4}* So you and her had a good time, eh?",
                                          ">{#k/2}* Wa ha ha!",
                                          ">{#k/0}* You've really made a good impression on her, kiddo!"
                                       ]
                                       : [
                                          ">{#p/basic}{#k/4}* 所以你们现在...\n  是朋友了？",
                                          ">{#k/2}* Wa ha ha!",
                                          ">{#k/0}* 你做了我从没想过的事，\n  孩子！"
                                       ]
                                    : [
                                       [
                                          ">{#p/basic}{#k/4}* Undyne?",
                                          49 <= SAVE.data.n.plot
                                             ? ">{#k/4}* She passed through here earlier..."
                                             : ">{#k/4}* She just passed through here a few moments ago.",
                                          SAVE.data.b.undyne_respecc
                                             ? ">{#k/0}* Said she was proud to have fought an \"honorable\" human."
                                             : ">{#k/0}* Said she was \"done\" tryin'a capture you.",
                                          ">{#k/4}* ...",
                                          ">{#k/4}* The heck did you do to make her say THAT?"
                                       ],
                                       [
                                          ">{#p/basic}{#k/4}* If you're askin' me where to find her, she's at home.\n* Ain't but a few steps away.",
                                          ">{#k/3}* From her words to me before...",
                                          SAVE.data.b.undyne_respecc
                                             ? ">{#k/4}* It seems you two are on better terms than I thought."
                                             : ">{#k/4}* It seems you two have some things to work out."
                                       ]
                                    ][Math.min(SAVE.data.n.shop_deadfish++, 1)],
                                 [
                                    ">{#p/basic}{#k/3}* Undyne?",
                                    ">{#k/0}* I haven't heard from her in a while.",
                                    ">{#k/4}* She just kinda... disappeared.",
                                    ">{#k/1}* Something tells me you played a part in that..."
                                 ],
                                 [
                                    [
                                       ">{#p/basic}{#k/4}* ...",
                                       ">{#k/0}* Well... you killed her.",
                                       ">{#k/3}* Though, that's kinda her own doing.",
                                       ">{#k/4}* I never really got why she was so intent on killing you humans...",
                                       ">{#k/0}* If she wanted your SOUL, couldn't she just wait until you died naturally?"
                                    ],
                                    [">{#p/basic}{#k/4}* ...", ">{#k/0}* What more is there to say?"]
                                 ][Math.min(SAVE.data.n.shop_deadfish++, 1)]
                              ][SAVE.data.n.state_foundry_undyne]
                     : world.genocide
                        ? [
                           ">{#p/basic}{#k/0}* Undyne?\n* Oh, that poor little urchin.\n* Normally, I'd call her the hero...",
                           ">{#k/1}* But to be honest, I've seen what you've done.\n* She doesn't stand a chance.",
                           ">{#k/4}* Don't get me wrong, she'll give ya one hell of a fight.",
                           ">{#k/3}* But no... the outpost needs a different kinda hero now.",
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
                                 ">{#k/3}* One day, someone like that will hunt you down."
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
                                 ">{#p/basic}{#k/0}* 安黛因？\n* 是啊，她是这一带的英雄。",
                                 ">{#k/3}* She stormed off earlier... seemed pretty upset at someone who looked just like you...",
                                 ">{#k/2}* 我会帮你一把的，孩子。\n* 买些东西吧...\n* 说不定能救你一命呢！\n* 哇哈哈！"
                              ]
                              : [
                                 ">{#p/basic}{#k/0}* 安黛因？\n* 是啊，她是这一带的英雄。",
                                 ">{#k/4}* 凭借勇气和决心，\n  她一路奋斗到皇家守卫的顶点。",
                                 ">{#k/3}* 事实上，她刚刚来这里问过\n  有没有见到一个长得\n  很像你的人...",
                                 ">{#k/2}* 我会帮你一把的，孩子。\n* 买些东西吧...\n* 说不定能救你一命呢！\n* 哇哈哈！"
                              ]
      ],
      zeroPrompt: ">{#p/basic}..."
   },

   s_save_foundry: {
      f_abyss: {
         name: "铸厂 - 深渊",
         text: [
            ">{#p/human}* （你发现自己身处\n  前哨站的最低点。）",
            ">{#p/human}* （这种身处边境的不定感\n  使你充满了决心。）"
         ]
      },
      f_battle: {
         name: "铸厂 - 钢索桥",
         text: () =>
            SAVE.data.n.state_foundry_undyne > 0 || world.runaway
               ? [">{#p/human}* (The starlight dims, filling you with determination.)"]
               : [
                  ">{#p/human}* （虽然远在天际，星光依旧闪烁。）",
                  ">{#p/human}* （这使你充满了决心。）"
               ]
      },
      f_hub: {
         name: "铸厂 - 宁静地带",
         text: () =>
            SAVE.data.n.state_foundry_undyne > 0 || world.runaway
               ? [
                  ">{#p/human}* (The silence is deafening...)",
                  ">{#p/human}* (Yet it fills you with determination.)"
               ]
               : SAVE.data.n.plot === 72
                  ? [">{#p/human}* (Returning to such a quiet place after your journey fills you with determination.)"]
                  : SAVE.data.n.plot < 48
                     ? [
                        ">{#p/human}* （在持续的混乱中\n  得到短暂的喘息...）",
                        ">{#p/human}* （这使你充满了决心。）"
                     ]
                     : SAVE.data.n.plot_date < 2.1
                        ? [">{#p/human}* (The chaos has come to an end, filling you with determination.)"]
                        : SAVE.data.n.exp > 0
                           ? [
                              ">{#p/human}* （随着蒸汽而来的\n  是背叛的苦涩。）",
                              ">{#p/human}* （这使你充满了决心。）"
                           ]
                           : [
                              ">{#p/human}* （随着蒸汽而来的\n  是友谊的芬芳。）",
                              ">{#p/human}* （这使你充满了决心。）"
                           ]
      },
      f_lobby: {
         name: "铸厂 - 暗区",
         text: () =>
            SAVE.data.n.plot < 39
               ? [">{#p/human}* （在铸厂的深处漫步，\n  使你充满了决心。）"]
               : SAVE.data.n.state_foundry_muffet === 1
                  ? [">{#p/human}* (Thinking of the friends you corrupted along the way fills you with determination.)"]
                  : SAVE.data.b.f_state_kidd_betray
                     ? [">{#p/human}* (Thinking of the friends you betrayed along the way fills you with determination.)"]
                     : world.runaway
                        ? [
                           ">{#p/human}* (Thinking of the friends you'll never get to see again fills you with determination.)"
                        ]
                        : SAVE.data.b.svr
                           ? [
                              ">{#p/human}* (Thinking of the friends you went the extra mile to save fills you with determination.)"
                           ]
                           : [">{#p/human}* (Thinking of the friends you made along the way fills you with determination.)"]
      },
      f_prechase: {
         name: "铸厂 - 岔路口",
         text: () =>
            SAVE.data.b.svr
               ? [
                  ">{#p/human}* (Despite it only being useful for you and your company...)",
                  ">{#p/human}* (The newly-built bridge nearby still fills you with determination.)"
               ]
               : world.runaway
                  ? [
                     ">{#p/human}* (Despite you being the only one who'll get to use it now...)",
                     ">{#p/human}* (The newly-built bridge nearby still fills you with determination.)"
                  ]
                  : SAVE.data.n.plot < 48
                     ? [
                        ">{#p/human}* （塔架谜题、讯星，\n  还有老式通风口...)",
                        ">{#p/human}* （如同变幻莫测的滑稽剧一般，\n  使你充满了决心。）"
                     ]
                     : [
                        ">{#p/human}* (A bridge now sits amidst the surroundings.)",
                        ">{#p/human}* (This development fills you with determination.)"
                     ]
      },
      f_sans: {
         name: "铸厂 - 边检站",
         text: () =>
            world.dead_skeleton || world.runaway
               ? [
                  ">{#p/human}* （不知怎地，通风口排出的\n  蒸汽令人不安。）",
                  ">{#p/human}* （尽管如此，你充满了\n  决心。）"
               ]
               : [">{#p/human}* （通风口冒出的湿热蒸汽使你\n  充满了决心。）"]
      },
      f_shyren: {
         name: "铸厂 - 售货机",
         text: () =>
            SAVE.data.b.killed_shyren
               ? [">{#p/human}* (A sad stillness permeates the air, filling you with determination.)"]
               : SAVE.data.n.plot < 40
                  ? [">{#p/human}* （耳边回荡的嗡嗡声，\n  使你充满了决心。）"]
                  : [">{#p/human}* (The sound of music fills you with determination.)"]
      },
      f_tunnel: {
         name: "铸厂 - 垃圾场",
         text: () =>
            SAVE.data.n.plot < 42.1
               ? [">{#p/human}* （在垃圾中迷失方向\n  使你充满了决心。）"]
               : [">{#p/human}* (Finding yourself back amongst the trash fills you with determination.)"]
      }
   }
};


// END-TRANSLATE
