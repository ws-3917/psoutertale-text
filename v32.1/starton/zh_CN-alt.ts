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
         ...(SAVE.data.b.svr ? [] : ["{#p/basic}* A standard-issue CITADEL long- range telescope, circa 261X."]),
         choicer.create("* （使用望远镜？）", "是", "否")
      ],
      telescopeMeetup1: ["{#p/kidd}{#f/2}* You do stargazing??"],
      telescopeMeetup2: [
         "{#p/kidd}{#f/1}* Yo... I bet you just saw something really cool.",
         "{#f/7}* The last time I looked in a telescope, I saw a freaking SUPERNOVA!"
      ],
      telescopeMeetup3: [
         "{#p/kidd}{#f/3}* Here.\n* Take this.",
         "{#s/equip}{#p/human}* (The Premium Membership Voucher was added to your keyring.)",
         "{#p/kidd}{#f/7}* Now you can use ANY telescope, even the \"premium\" ones!",
         "{#f/1}* That short skeleton gave me a bunch of these earlier.",
         "{#f/2}* He also gave me some digital thing with a lot of money...",
         "{#f/1}* I guess he really likes me, haha."
      ],
      telescopeMeetup4: [
         "{#p/kidd}{#f/3}* Anyway, I kinda just wanted to give you the voucher.",
         "{#f/1}* I hope you see something cool with it, though!"
      ],
      telescopeMeetup5: ["{#p/kidd}{#f/1}* I'll be in town!"],
      telescope2: () =>
         SAVE.data.b.svr
            ? ["{#p/asriel1}{#f/17}* See anything you like?"]
            : world.darker
               ? ["{#p/basic}* It's a telescope."]
               : SAVE.data.b.oops || SAVE.data.b.s_state_chargazer
                  ? ["{#p/basic}* Stargazing in space...\n* Truly, this is some outside- the-box thinking."]
                  : ((SAVE.data.b.s_state_chargazer = true),
                     [
                        "{#p/basic}* ...",
                        "* Asriel and I had a telescope just like this.",
                        "* We'd point it in random directions, hoping to see something exciting...",
                        "* ... we never saw much at all.",
                        "* Despite that, it didn't seem to matter to him...",
                        "* While I was focused on looking outward, he was just happy to spend time with me.",
                        "* ...",
                        "{#p/human}* (You hear a sigh.)",
                        "{#p/basic}* ... uh, let's just get back to what we were doing."
                     ]),
      notv: ["{#p/basic}* It doesn't seem like there's anything interesting to watch."],
      nicecreamScoreReaction1a: ["{#p/basic}* Not bad for your first try..."],
      nicecreamScoreReaction1b: ["{#p/basic}* Not bad for your first try."],
      nicecreamScoreReaction2a: ["{#p/basic}* You can do better than that..."],
      nicecreamScoreReaction2b: ["{#p/basic}* You can do better than that."],
      nicecreamScoreReaction3a: [
         "{#p/basic}* You beat the top scorer...?\n* I don't think I've ever seen anyone do that..."
      ],
      nicecreamScoreReaction3b: [
         "{#p/basic}* You beat the top scorer?\n* I don't think I've ever seen anyone do that!"
      ],
      nicecreamScoreReaction4a: ["<33>{#p/basic}* 看起来你真的很擅长..."],
      nicecreamScoreReaction4b: ["{#p/basic}* You seem pretty good at this."],
      nicecreamScoreReaction5a: ["{#p/basic}* You beat your high score...?"],
      nicecreamScoreReaction5b: ["{#p/basic}* Look at that, new high score!"],
      nicecreamScoreReaction6a: ["{#p/basic}* For a second, I thought you were going to beat the top scorer..."],
      nicecreamScoreReaction6b: [
         "{#p/basic}* Woah, you could've beaten the top scorer!\n* Can you go all the way?"
      ],
      nicecreamScoreReaction7a: ["{#p/basic}* Looks like you could use some practice..."],
      nicecreamScoreReaction7b: ["{#p/basic}* Looks like you could use some practice."],
      nicecreamScoreReaction8a: ["{#p/basic}* That's better..."],
      nicecreamScoreReaction8b: ["{#p/basic}* That's more like it."],
      nicecreamScoreReaction9a: [
         "{#p/basic}* You beat the top scorer on your first try...?\n* How in the world..."
      ],
      nicecreamScoreReaction9b: ["{#p/basic}* You beat the top scorer on your first try?\n* You're a natural!"],
      nicecreamScoreReaction10a: ["{#p/basic}* For a first try, that's pretty good..."],
      nicecreamScoreReaction10b: ["{#p/basic}* For a first try, that's pretty good!"],
      nicecreamScoreReaction11a: ["{#p/basic}* You keep getting so close..."],
      nicecreamScoreReaction11b: ["{#p/basic}* Darn, you almost beat the top scorer again...\n* You can do it!"],
      noteleport: ["{#p/human}* (It doesn't seem to be powered on anymore.)"],
      evac: ["{#p/human}* (You feel the nearby monster presence dwindling.)"],
      shopclosed: ["{#p/human}* (But there was nothing left for you to do here.)"],
      jukebox1: () => [
         SAVE.data.b.svr
            ? "{#p/human}* (You reach for the jukebox...)"
            : "{#p/basic}* This jukebox only plays music you've heard before.",
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
            ? ["{#p/human}* (But you couldn't play a song you didn't know yet.)"]
            : ["{#p/basic}* The cover depicts a spooky DJ playing to the crowd.\n* You can't know this song."],
      jukebox1x2: () =>
         SAVE.data.b.svr
            ? ["{#p/human}* (But you couldn't play a song you didn't know yet.)"]
            : ["<33>{#p/basic}* 封面中一个幽灵一样的DJ在电脑前。\n* 你看不出来是什么音乐。"],
      jukebox1x3: () =>
         SAVE.data.b.svr
            ? ["{#p/human}* (But you couldn't play a song you didn't know yet.)"]
            : [
               "{#p/basic}* The cover depicts a little white dog surrounded by trash.\n* You can't know this song."
            ],
      jukebox1y: ["{*}{#p/human}* (You select the disc...){^40}{%}"],
      jukebox2: () => [
         SAVE.data.b.svr
            ? "{#p/human}* (It sounds like a song is currently playing.)"
            : [
               "{#p/basic}* Currently playing \"Track 01\"",
               "{#p/basic}* Currently playing \"Track 02\"",
               "{#p/basic}* Currently playing \"Track 03\""
            ][SAVE.data.n.state_starton_jukebox - 1],
         choicer.create("* （停止播放？）", "是", "否")
      ],
      jukebox3a1: ["{#p/basic}{#npc/a}* That's more like it!"],
      jukebox3a2: ["{#p/basic}{#npc/a}* (We love this kind of music.)"],
      jukebox3b: ["{#p/basic}{#npc/a}* Is that the song making the rounds at the dance club?"],
      jukebox3c: [
         "{#p/basic}* ...\n* ...\n* ...",
         "{#npc/a}* Grillbz says he's heard this song somewhere before."
      ],
      jukebox3d: [
         "{#p/basic}{#npc/a}* You sure know a lot of music offhand, kid...",
         "* You must be really tasty."
      ],
      shockpapyrus0a: [
         "<15>{#p/papyrus}{#e/papyrus/17}站住！你们在干嘛？",
         "<15>{#p/papyrus}{#e/papyrus/21}我有预感，\n衫斯可能有危险，\n就过来了。",
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
         "<15>{#p/papyrus}{#e/papyrus/20}衫斯，你快来看看！",
         "<15>{#p/papyrus}{#e/papyrus/15}有个人类出现啦！\n就站在我面前呢！",
         "<15>{#p/papyrus}{#e/papyrus/27}旁边的是...\n迷你版的艾斯戈尔？",
         "<15>{#p/papyrus}{#e/papyrus/24}额...\n说实话我不太确定。"
      ],
      shockpapyrus1: () =>
         [
            [
               "{#p/asriel2}* Ready, $(name)?",
               choicer.create("* （艾斯利尔应该怎么做？）", "仁慈", "行动", "魔法", "战斗")
            ],
            ["{#p/asriel2}* Let's just get this over with."]
         ][Math.min(SAVE.flag.n.ga_asrielPapyrus, 1)],
      shockpapyrus2a: [
         "{#p/asriel2}* Mercy, huh?",
         "{#p/asriel2}* Mercy... I think I like that word.",
         "{#p/asriel2}* Let's show him some \"Mercy.\""
      ],
      shockpapyrus2b: [
         "{#p/asriel2}* Act...?\n* I'll show you how to act.",
         "{#p/asriel2}* First, you raise your arm...",
         "{#p/asriel2}* Then...!"
      ],
      shockpapyrus2c: [
         "{#p/asriel2}* Magic.\n* The force that binds us monsters together.",
         "{#p/asriel2}* Or, in this case...",
         "<33>{#p/asriel2}* 它也能成为利刃，\n  刺穿他们的肉体。"
      ],
      shockpapyrus2d: ["{#p/asriel2}* Fight... the ideal choice.", "{#p/asriel2}* Hee hee hee..."],
      sansDeath1: ["<15>{#p/papyrus}{#e/papyrus/27}衫斯！\n你受伤了！"],
      sansDeath2: ["<20>{#p/sans}帕派瑞斯，\n我不是让你待在家里吗？", "{*}{#e/papyrus/21}{%}"],
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
      sansDeath7: ["<20>{|}{#p/sans}你可是...\n伟大的帕-{^5}帕派瑞斯。"],
      sansDeath8: ["<15>{#p/papyrus}{#e/papyrus/33}不-不...{^40}{%}"],
      fast_food1: () => [
         SAVE.data.b.fryz
            ? "{#p/human}{#npc}* (You got the Flamin' Grillby.)"
            : "{#p/human}{#npc}* (You got the Sliders.)"
      ],
      fast_food2: ["{#p/human}{#npc}* (You're carrying too much.)"],
      aussie: pager.create(
         0,
         () =>
            SAVE.data.n.state_starton_trashprogress < 1
               ? [
                  "{#p/sans}{#f/0}* finally.",
                  "{#f/3}* i've been wondering when you'd show up.",
                  "{#f/0}* i dunno if you recall, but back when we first met...",
                  "{#f/0}* i told papyrus to focus more on the \"gravity\" of the situation.",
                  "{#f/0}* what did i mean by that, you ask?",
                  "{#f/3}* well.",
                  "{#f/2}* you're about to {@fill=#003cff}find out{@fill=#fff}."
               ]
               : ["{#p/sans}{#f/0}* welcome back.", "{#f/2}* ready to find out what awaits you?"],
         () =>
            SAVE.data.n.state_starton_trashprogress < 1
               ? ["{#p/sans}{#f/0}* go on, take a look.", "{#f/2}* it's right up there, bucko."]
               : ["{#p/sans}{#f/2}* it's right up there, bucko."],
         () =>
            SAVE.data.n.state_starton_trashprogress < 2
               ? ["{#p/sans}{#f/2}* don't worry, it's not dangerous... even if it tries to be."]
               : ["{#p/sans}{#f/2}* thanks for the help."]
      ),
      trashhunt1: [
         "{#p/sans}{#f/0}* sooo... whaddya think?",
         "{#f/3}* i call it the \"trash planet.\"",
         "{#f/0}* ... actually, this thing's been growing in size for quite a while.",
         "{#f/0}* if it gets any larger, well...",
         "{#f/2}* let's just say we'd be in a {@fill=#ff0}world{@fill=#fff} of trouble.",
         "{#f/0}* don't worry, though.\n* with your help, it'll be gone in no time.",
         "{#f/2}* i even found you some music to keep you motivated."
      ],
      trashhunt2: "* Press [Z] repeatedly to shake\n  out all the trash!",
      trashhunt3: () => [
         "{#p/sans}{#f/3}* wow.\n* all in one go, huh?",
         "{#f/2}* ... well i'll be turned upside down.",
         "{#f/0}* guess i gotta give you some kinda reward.",
         "{#f/0}* ...\n* here.\n* have this on me.",
         "{#p/human}* (Sans tossed you something.)",
         ...(SAVE.storage.inventory.size < 8
            ? ["{#s/equip}{#p/human}* (You got the Corn Dog Sword.)", "{#p/sans}{#f/2}* use it wisely."]
            : [
               "{#p/human}* (You're carrying too much.)",
               "{#p/sans}{#f/3}* no room, huh?",
               "{#p/sans}{#f/2}* don't worry.\n* i'll leave it in my room for you."
            ])
      ],
      gravo1: () =>
         SAVE.data.b.svr
            ? [
               "{#p/human}* (You look curiously at the seemingly useless device.)",
               ...[["{#p/asriel1}{#f/17}* Too bad we don't have the remote for this thing, huh?"], []][
               Math.min(asrielinter.gravo1++, 1)
               ]
            ]
            : ["{#p/basic}* It's a \"gravometric inverter.\"", "* Whatever that means."],
      gravo3: () => [
         "{#p/human}* (You use the Gravometric Inverter Remote.)\n* (Nothing happens.)",
         ...(SAVE.data.b.svr
            ? [["{#p/asriel1}{#f/21}* They're probably shutting off power for non-essential devices."], []][
            Math.min(asrielinter.gravo3++, 1)
            ]
            : ["{#p/basic}* It must be offline..."])
      ],
      gravo2: ["{#p/human}* (You use the Gravometric Inverter Remote.)"],
      sansdoor1: () =>
         SAVE.data.b.svr || world.runaway
            ? ["{#p/human}* (It looks to have been closed with a deadlock seal.)"]
            : ["{#p/basic}* It's locked."],
      sansdoor2: ["{#p/human}* (You use the Skeleton Key.)"],
      sanscab1: () => [
         ...(SAVE.data.b.svr ? [] : ["{#p/basic}* There's an odd remote inside of this envelope."]),
         "{#s/equip}{#p/human}* (The Gravometric Inverter Remote was added to your keyring.)"
      ],
      sanscab2: () =>
         SAVE.data.b.svr
            ? ["{#p/human}* (But you already emptied the envelope of its contents.)"]
            : ["{#p/basic}* It's just an empty envelope."],
      sanscab3: () => [
         ...(SAVE.data.b.svr ? [] : ["{#p/basic}* There's an odd... item, inside of this envelope."]),
         SAVE.storage.inventory.size < 8
            ? "{#s/equip}{#p/human}* (You got the Corn Dog Sword.)"
            : "{#p/human}* (You're carrying too much.)"
      ],
      cream_get: ["{#p/human}* (You got the Ice Dream.)"],
      cream_deny: ["{#p/basic}* Nothing left."],
      cream_full: ["{#p/human}* (You're carrying too much.)"],
      cream_get_archive: [
         "{#p/human}* (You reach into the cart.)",
         "{#p/human}{#s/equip}* (You got the Ice Dream.)"
      ],
      cream_empty_archive: ["{#p/human}* (You reach into the cart.)", "{#p/human}* (...)"],
      cream_full_archive: ["{#p/human}* (You're carrying too much to reach inside.)"],
      bunbun: pager.create(
         0,
         () =>
            SAVE.data.n.plot === 72
               ? ["{#p/basic}* Mom says that we're going to a new homeworld soon.", "* ... what's a homeworld?"]
               : [
                  "{#p/basic}* Mom says that sleeping could recover your health {@fill=#ff0}above your maximum HP{@fill=#fff}.",
                  "* ... what's maximum HP?"
               ],
         () =>
            SAVE.data.n.plot === 72
               ? ["{#p/basic}* Do humans have a homeworld?"]
               : ["{#p/basic}* Is it something monsters have?"]
      ),
      emptytable1: () =>
         SAVE.data.b.svr
            ? ["{#p/human}* (The table strikes you as being rather lonesome.)"]
            : ["{#p/basic}* It's just a lonely table.\n* Smells like frosting."],
      emptytable2: () =>
         SAVE.data.b.svr
            ? ["{#p/human}* (The table strikes you as being rather lonesome.)"]
            : ["{#p/basic}* It's just a lonely table.\n* Smells like hair."],
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
            ? ["{#p/human}* (You can't seem to understand the contents of this book.)"]
            : ["{#p/basic}* It's a book, written in an ancient language."],
      bedbook3a: ["{#p/basic}* Would you like me to read it?"],
      bedbook3b: ["{#p/basic}* Read it again?"],
      bedbook4: [choicer.create("* (Have $(name) read the book?)", "是", "否")],
      bedbook5: [
         "{#p/basic}* Okay, here goes...",
         "* \"Long ago, two species ruled the solar system: humans and monsters.\"",
         "* \"At first, the monsters were only visitors, soon to return to their own star system.\"",
         "* \"But the monsters became fascinated by humanity, and wanted to co-exist with them.\"",
         "* \"As such, they shared their technology with the humans, and forged an alliance.\"",
         "* \"Over the next few hundred years, monsters and humans lived in peace and harmony.\"",
         "* \"One day, the humans began to fear something about the monsters...\"",
         "* \"A fear that, without skilled leadership, was allowed to spiral out of control.\"",
         "* \"As time passed, a war broke out between the two species.\"",
         "* \"Many battles and skirmishes would occur all across the solar system...\"",
         "* \"But the humans, filled with fear and determination, easily took control.\"",
         "* \"Then, on one fateful day, a massive weapon was fired at the monsters' homeworld.\"",
         "* \"After the monsters' home planet was destroyed, humans declared victory.\"",
         "* \"A settlement between the two species was signed, and...\"",
         "* \"The remaining monsters were banished to an abandoned outpost.\"",
         "* \"Then, the humans gathered seven of their brightest minds.\"",
         "* \"A powerful force field was erected, and the monsters were sealed in.\"",
         "* Well, that's the story."
      ],
      bedbook6: ["{#p/basic}* Well, if you ever want me to read it, let me know."],
      beddoor1: ["{#p/basic}{#npc/a}* If you want a room, you'll need to ask me first."],
      beddoor2: ["{#p/basic}{#npc/a}* If you want a room again, you'll need to ask me first."],
      beddoor3: ["{#p/basic}{#npc/a}* Sorry, munchkin!\n* No more vacancies left here!"],
      candy1: () => [
         SAVE.data.b.svr
            ? "{#p/human}* (You approach the vending machine.)"
            : "{#p/basic}* It's an exoberry-exclusive vending machine.",
         choicer.create("* （花8G来买洋梅吗？）", "是", "否")
      ],
      candy2: ["{#p/human}* (You don't have enough G.)"],
      candy3: ["{#p/human}* (You're carrying too much.)"],
      candy4: ["{#p/human}* (You got the Exoberries.)"],
      candy5: ["{#p/human}* (You decide not to buy.)"],
      capstation1: [
         "{#p/human}* (You look behind the station and find a key.)",
         "{#s/equip}{#p/human}* (The Rusty Key was added to your keyring.)",
         "* (Check your CELL to see all acquired keys.)"
      ],
      capstation2: ["{#p/human}* (You look behind the station.)", "{#p/basic}* Nothing new back here."],
      crossword0: () =>
         world.edgy
            ? [
               "{#p/sans}* oh, hey there.",
               "{#p/sans}{#f/2}* if you liked that last puzzle, just wait until you see this one."
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
               "{#p/sans}* it's right there on the ground."
            ]
            : [
               "<18>{#p/papyrus}{#f/7}衫斯！！\n谜题在哪！？",
               "{#p/sans}* you're lookin' at it.",
               "<18>{#p/papyrus}{#f/1}啥？\n就地上躺的那块板子？",
               "<18>{#f/4}行吧..."
            ],
      crossword2: (check: boolean) =>
         world.edgy
            ? [
               check
                  ? "{#p/sans}* well, how was it?\n* ... too hot to handle?"
                  : "{#p/sans}* can't even bring yourself to look at it, huh?",
               "* i guess i shouldn't have expected much.",
               "<26>{#f/3}* 好吧，\n* 说不定，数谜更适合你。",
               "<26>{#f/0}* 跑题了。"
            ]
            : [
               check
                  ? "<18>{#p/papyrus}{#f/7}衫斯！！！\n那根本没有用啊！"
                  : "<18>{#p/papyrus}{#f/7}衫斯！！！\n那个人类连\n看都没看一眼！",
               "{#p/sans}* whoops.",
               "{#f/3}* i knew i should have used today's kakuro puzzle instead.",
               "<18>{#p/papyrus}{#f/1}啥！？数和！？",
               "<18>{#f/9}我真不敢相信\n你居然会提到它！！",
               "<18>{#f/4}在我看来...",
               "<18>{#f/0}数独无疑才是最难的。",
               "{#p/sans}* what? really, dude?\n* that easy-peasy number shuffle?",
               "{#f/4}* that's for baby bones.",
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
         "{#p/sans}{#f/3}* by the way, i think i saw a pair of dogs running around...",
         "{#f/0}* i'd tread carefully if i were you."
      ],
      crossword4a: pager.create(0, ["{#p/sans}* hey, where ya goin there, bucko?"], ["{#p/sans}* wrong way."]),
      crossword4b: pager.create(0, ["{#p/sans}* really?\n* it's not THAT bad."], ["{#p/sans}* really?"]),
      crossword5a: [
         "{#p/sans}* thanks for saying \"sudoku\" just to appease my brother.",
         "{#f/4}* yesterday he got stumped trying to \"solve\" a star chart."
      ],
      crossword5b: [
         "{#p/sans}* papyrus...\n* ... finds difficulty in interesting places.",
         "{#f/4}* yesterday he got stumped trying to \"solve\" a star chart."
      ],
      crossword6a: [
         "{#p/sans}{#f/3}* i kinda figured you'd skip over it.",
         "{#f/0}* that just seems like the sort of thing you'd do, doesn't it?"
      ],
      crossword6b: [
         "{#p/sans}{#f/3}* i'm surprised.\n* i thought you'd walk right past it.",
         "{#f/2}* perhaps you're not so terrible after all."
      ],
      crossword6c: ["{#p/sans}{#f/2}* heheh, made you look."],
      crossword6d: [
         "{#p/sans}{#f/3}* i'm surprised.\n* i thought you weren't even interested.",
         "{#f/2}* perhaps you're not so terrible after all."
      ],
      doggo1: [
         "{#p/basic}* Did something move?\n* Was it just my imagination?",
         "* If something WAS moving...\n* For example, a human...",
         "* I'll make sure it never leaves my sight again!"
      ],
      doggo2: [
         [
            "{#p/basic}* S-S-S-Something pet me...\n* Something that isn't even m-m-moving...!",
            "* I'm gonna need some dog treats for this."
         ],
         ["{#p/basic}* A w-w-wrench appeared out of nowhere, h-huh!?!?", "{#p/basic}* ... what a day!"],
         [],
         [
            "{#p/basic}* A h-h-human came up and attacked me...\n* Out of n-n-nowhere...!",
            "{#p/basic}* I'm...\n* I'm gonna go to bed."
         ]
      ],
      doggo3: pager.create(
         0,
         ["{#p/basic}* Hello?\n* Is anybody there...?"],
         ["{#p/basic}* Are you two playing a trick on me?\n* Real funny, guys."],
         ["{#p/basic}* Big lug?\n* Is that you?\n* Come on..."],
         ["{#p/basic}* Well, it's not the tall skeleton...\n* He's too loud."],
         ["{#p/basic}* Whoever you are, knock it off!!!"],
         ["{#p/basic}* ..."]
      ),
      doggo3x: ["{#p/basic}* (Snore... snore...)"],
      drop_chip: [
         "{#p/basic}* Did you just...\n* Drop the part of me I had given you?",
         "* I have no words for you...\n* Begone!"
      ],
      drop_cream: ["{#p/basic}* You know, you're lucky I'm busy advertising."],
      eat_chip: [
         "{#p/basic}* Did you just...\n* Consume the part of me I had given you?",
         "* I have no words for you...\n* Begone!"
      ],
      eat_cream: ["{#p/basic}* Nice to see you enjoying your Ice Dream!\n* Very nice!"],
      genotext: {
         asriel1: () =>
            [["{#p/asriel2}{#f/9}* Just follow my lead..."], ["{#p/asriel2}{#f/16}* This way."]][
            Math.min(SAVE.flag.n.ga_asriel1++, 1)
            ],
         asriel2: () =>
            [
               ["{#p/asriel2}{#f/2}* Well, well... if it isn't the great Papyrus standing just ahead."],
               ["{#p/asriel2}{#f/3}* Well, well... here we go again."]
            ][Math.min(SAVE.flag.n.killed_sans, 1)],
         asriel3: () =>
            [
               ["{#p/asriel2}{#f/1}* Let's go introduce ourselves, shall we?"],
               ["{#p/asriel2}{#f/4}* You know the drill by now."]
            ][Math.min(SAVE.flag.n.killed_sans, 1)],
         asriel4: ["{*}{#p/asriel2}{#f/5}* Howdy!{^5}{%}"],
         asriel5: ["<18>{*}{#p/papyrus}{#f/1}干啥- {%}"],
         asriel6: () =>
            [
               [
                  "{#p/asriel2}{#f/15}* Well... $(name)...",
                  "{#f/17}* Maybe you could take over from here?",
                  "{#f/16}* I mean, I'm fine, really.",
                  "{#f/13}* I just think you'd be better at this than me..."
               ],
               ["{#p/asriel2}{#f/16}* Okay, yeah.\n* I'll, uh... let you take over now."],
               ["{#p/asriel2}{#f/15}* So, uh... onwards?"],
               ["{#p/asriel2}{#f/15}* ..."]
            ][Math.min(SAVE.flag.n.ga_asriel6++, 3)],
         asriel9: ["{#p/asriel2}{#f/8}* Psst, let's wait and see what he does."],
         asriel10: () =>
            [
               [
                  "{#p/asriel2}{#f/15}* Wow.\n* To see Papyrus in such a state...",
                  "{#f/16}* ... it's certainly unexpected, isn't it?",
                  "{#f/13}* Oh, $(name)...",
                  "{#f/1}* I think we're going to have a lot of fun."
               ],
               ["{#p/asriel2}{#f/16}* Poor, poor Papyrus."]
            ][Math.min(SAVE.flag.n.ga_asriel10++, 1)],
         asriel17: () =>
            [["{#p/asriel2}{#f/16}* Golly... some people just don't get it."], ["{#p/asriel2}{#f/4}* Tch."]][
            Math.min(SAVE.flag.n.ga_asriel17++, 1)
            ],
         asriel24: () =>
            [["{#p/asriel2}{#f/4}* What a waste of time."], ["{#p/asriel2}{#f/3}* Huh."]][
            Math.min(SAVE.flag.n.ga_asriel24++, 1)
            ],
         asriel26: () =>
            [
               [
                  "<26>{#p/asriel2}{#f/3}* 好了，那群蠢狗\n  已经全军覆没了。",
                  "<26>{#p/asriel2}{#f/4}* 再过一座桥，就到小镇了。",
                  "{#f/1}* ... stay behind me."
               ],
               ["{#p/asriel2}{#f/3}* Into town we go..."]
            ][Math.min(SAVE.flag.n.ga_asriel26++, 1)],
         asriel28: () =>
            [
               [
                  "{#p/asriel2}{#f/6}* Okay, $(name).\n* The town's all yours.",
                  "{#f/7}* In the meantime, I have to do something that'll be important later.",
                  "{#f/1}* I'll be back before you know it."
               ],
               ["{#p/asriel2}{#f/1}* See you around the back of town."]
            ][Math.min(SAVE.flag.n.ga_asriel28++, 1)],
         asriel29: () =>
            [
               SAVE.data.b.papyrus_secret
                  ? [
                     "{#p/asriel2}{#f/2}* Hee.\n* Hee.\n* Hee....",
                     "{#f/10}* ... wait, where's Papyrus?",
                     "{#f/10}* ...",
                     "{#f/4}* Golly, $(name), I didn't think you'd kill him THAT quickly."
                  ]
                  : [
                     "{#p/asriel2}{#f/2}* Hee.\n* Hee.\n* Hee....",
                     "{#f/1}* It's about time that bonehead paid the price for his mercy.",
                     "{#f/13}* Golly.\n* He wanted SO badly to forgive you.",
                     "{#f/16}* But, let's be honest with ourselves here...",
                     "{#f/1}* We've got bigger fish to fry up ahead."
                  ],
               ["{#p/asriel2}{#f/13}* Oh well.\n* The skeleton died for nothing again."],
               [
                  "{#p/asriel2}{#f/13}* You know, they say the third time's the charm...",
                  "{#f/16}* Too bad he only ever gets one."
               ],
               [
                  "{#p/asriel2}{#f/6}* That's four times you've killed him now.",
                  "{#f/8}* I'm starting to think you enjoy this..."
               ],
               ["{#p/asriel2}{#f/15}* Again...?"]
            ][Math.min(SAVE.flag.n.ga_asriel29++, 4)],
         asriel30: () => [
            "{#p/asgore}{#f/1}* ...",
            "{#f/1}* Howdy, Asriel.",
            "{#f/2}* ...",
            "{#f/3}* We need to talk.",
            ...[
               [
                  "{#p/asriel2}{#f/6}* Talk?\n* About what?",
                  "{#f/6}* Why are you even here?",
                  "{#f/7}* You know you'll just die to me anyway.",
                  "{#f/8}* Speaking of which... {%15}"
               ],
               [
                  "{#p/asriel2}{#f/8}* Talk?\n* Don't waste my time.",
                  "{#f/6}* I KNOW you're just using a hologram.",
                  "{|}{#p/asgore}{#f/5}* How did you- {%}",
                  "{#p/asriel2}{#f/1}* Hush."
               ]
            ][Math.min(SAVE.flag.n.ga_asriel30x, 1)]
         ],
         asriel30a: [
            "{#p/asriel2}{#f/8}* Seriously?\n* A hologram?",
            "{#f/6}* I knew you were a coward, but this is a whole new level."
         ],
         asriel30b: [
            "{#p/asgore}{#f/1}* Do you not have anything better to do?",
            "{#p/asriel2}{#f/8}* ...",
            "{|}{#p/asgore}{#f/3}* Look, son, I only- {%}",
            "{#p/asriel2}{#f/7}* I'm not your son.\n* I haven't BEEN your son for a long time.",
            "{#p/asgore}{#f/2}* ...",
            "{#p/asgore}{#f/1}* Alright, Asriel.\n* Do you not see what you are doing to yourself?",
            "{#f/2}* You've become callous.\n* Unforgiving.",
            "{#p/asriel2}{#f/8}* Ugh, don't say it like you actually care about me, dad.",
            "{#p/asgore}{#f/5}* ...",
            "{#p/asriel2}{#f/9}* Oh, sorry...\n* Did I say \"Dad?\"\n* I meant \"Asgore.\"",
            "{#f/1}* Forgive me.",
            "{#p/asgore}{#f/3}* ...\n* Really now...",
            "{#f/5}* You must reconsider what you are doing, not for our sakes...",
            "{#f/6}* But for yours!",
            "{#p/asriel2}{#f/8}* ...",
            "{#p/asriel2}{#f/7}* ... give me a break.",
            "<26>{#f/6}* 显然你来这只是想气我。",
            "{#p/asgore}{#f/3}* ...",
            "{#p/asriel2}{#f/6}* ...",
            "{#p/asgore}{#f/7}* You must consider the gravity of your choices!",
            "{#p/asriel2}{#f/15}* Or what? I'll float off into space, never to be seen again?",
            "{#f/16}* Come on $(name), we're done here."
         ],
         asriel30c: ["{*}{#p/asgore}{#f/8}* Asriel, please!\n* I only want to help!{^999}"],
         asriel30d: () =>
            [
               ["{#p/asriel2}{#f/3}* Ready yourself, $(name).", "<26>{#f/4}* 这儿可是安黛因的地盘。"],
               ["{#p/asriel2}{#f/4}* Take us in."]
            ][Math.min(SAVE.flag.n.ga_asriel30d++, 1)],
         papyrusSolo1a: [
            "<18>{#p/papyrus}{#f/31}衫斯？\n那是个人类吗？",
            "<18>{#f/5}应该是的吧？",
            "<18>{#f/32}捏...\n安黛因总算会...",
            "<18>{#p/papyrus}{#f/31}我能加入皇家卫队了...",
            "<18>{#f/5}你会以我为荣的吧？",
            "{#p/asriel2}{#f/3}* You can't keep pretending, Papyrus.\n* He's gone.",
            "<18>{|}{#p/papyrus}{#f/5}可是- {%}",
            "{#p/asriel2}{#f/3}* It's over.\n* You're wasting your time on him.", 
            "<18>{#p/papyrus}{#f/6}不会的...\n衫斯他...",
            "<18>{#f/31}他向我承诺过的...",
            "{#p/asriel2}{#f/8}* That bonehead is the LAST person I'd trust to keep a promise.",
            "<26>{#f/9}* 虽然我也不比他好到哪儿去。", 
            "<18>{#p/papyrus}{#f/31}...",
            "<18>{#f/3}对不起。\n我得走了..."
         ],
         papyrusSolo2a: [
            "<18>{#p/papyrus}{#f/31}唉，我刚从\n安黛因那回来...",
            "<18>{#f/31}她说国王找你有事。",
            "{#p/asriel2}{#f/6}* ...",
            "<18>{#p/papyrus}{#f/3}他原话是\n“我想见见我儿子”。",
            "<18>{#f/7}...",
            "<18>{#f/7}我们的王子竟然\n杀了我兄弟，\n真是难以置信！",
            "{|}{#p/asriel2}{#f/8}* Actually, it was you we were trying to- {%}",
            "<18>{#p/papyrus}{#f/7}真是够了！！",
            "<18>{#f/7}你出卖集体，背叛同胞！",
            "<18>{#f/7}为了啥呢！？",
            "<18>{#f/7}就为了取悦自己吗？",
            "{#p/asriel2}{#f/16}* Yes, Papyrus.\n* That's exactly what this is for.",
            "<18>{#p/papyrus}{#f/7}扯淡！！！",
            "<18>{#p/papyrus}{#f/4}还有你，人类...",
            "<18>{#f/7}别以为我不知道\n事态会怎么发展。",
            "<18>{#f/7}显而易见，你才是主谋。",
            "{#p/asriel2}{#f/8}* How observant.",
            "{#f/7}* Guess we should just admit defeat to you here and now, huh?",
            "<18>{#p/papyrus}{#f/31}...",
            "{#p/asriel2}{#f/4}* Let me be clear.\n* I do admire the effort.",
            "{#f/3}* But we've got our own plans to see to.",
            "<18>{#p/papyrus}{#f/4}你要知道，安黛因可能\n正盯着我们呢。",
            "{#p/asriel2}{#f/3}* And your point is?",
            "{#f/4}* ... look Papyrus, it doesn't matter what you or anyone else does.",
            "{#f/1}* When the two of us are together, NOTHING can bring us apart.",
            "<18>{#p/papyrus}{#f/7}...我呸！！"
         ],
         papyrusSolo3: ["{#p/asriel2}{#f/3}* Howdy."],
         papyrusSolo3a: () => [
            "<18>{#p/papyrus}{#f/31}你知道吗...",
            "<18>{#f/31}我偶然听到艾菲斯博士\n自言自语...",
            "<18>{#f/5}从她的话中我听到个词，\n好像是“时间回溯”？",
            "<18>{|}{#f/32}{#x1}我不确定，但好像你们- {%}",
            "{#p/asriel2}{#f/6}* No.",
            "<18>{|}{#p/papyrus}{#f/6}但她说了你们能- {%}",
            ...(SAVE.flag.n.genocide_milestone < 5
               ? ["{#p/asriel2}{#f/6}* No."]
               : SAVE.flag.n.genocide_milestone < 6
                  ? ["{#p/asriel2}{#f/6}* No.\n* Though, I'm sure she'd love it if I did."]
                  : ["{#p/asriel2}{#f/6}* No.\n* And she'll be dead in the end, anyway."]),
            "<18>{#p/papyrus}{#f/31}可是，假如你真能\n回溯时间，抹掉过去...",
            "<18>{#f/5}为什么不去试试呢？",
            "<18>{#f/31}下一条时间线里，\n让-让我代他去死。",
            "<18>{#f/3}那样，他就能活下来了，\n对吧？",
            "{#p/asriel2}{#f/6}* ...\n* Trust me, I've already seen that timeline.",
            "{#f/7}* It's BORING.",
            "<18>{#p/papyrus}{#f/3}...",
            "<18>{#f/6}那么，我给你看看\n这个谜题吧？",
            "<18>{#f/32}说不定，\n它能让你不那么无聊...",
            "{#p/asriel2}{#f/15}* ...",
            "{#p/asriel2}{#f/15}* If it makes you feel better, I guess.",
            "<18>{#p/papyrus}哦，哦！",
            "<18>{#f/0}太好了！！",
            "<18>{#f/0}你开始改变想法了！",
            "{#p/asriel2}{#f/8}* ...",
            "<18>{#p/papyrus}{#f/6}...",
            "<18>{|}{#f/5}那么，规则是这样的- {%}",
            "{#p/asriel2}{#f/7}* We already know the rules, idiot.",
            "<18>{#p/papyrus}{#f/31}...哦...",
            "<18>{#f/6}呃，好吧！！\n那我就不解释了...",
            "<18>{#f/9}看看我们的\n随机数字是多少吧！！"
         ],
         papyrusSolo4a: [
            "<18>{#p/papyrus}{#f/3}艾斯利尔。",
            "{#p/asriel2}{#f/6}* Papyrus.",
            "<18>{#p/papyrus}{#f/31}...",
            "<18>{#f/31}为什么？",
            "<18>{#f/31}为什么你要这么做？",
            "<18>{#f/3}一个怪物不应该\n会变成这样啊...",
            "<18>{#f/5}你的爱去哪了？\n你的同情心去哪了？",
            "<18>{#f/31}你的... 仁慈...",
            "{#p/asriel2}{#f/2}* ...\n* Oh, you sweet stellar star child...",
            "{#f/1}* I lost those things a LONG time ago.",
            "<18>{#p/papyrus}{#f/31}但...\n我不明白...",
            "<18>{#f/5}一个有着这般\n纯洁心灵的怪物...",
            "<18>{#f/31}...怎么会\n彻底堕入黑暗呢？",
            "{#p/asriel2}{#f/1}* You really wanna know?",
            "<18>{#p/papyrus}{#f/3}...",
            "<18>{#f/3}对...",
            "{#p/asriel2}{#f/10}* But do you really, really wanna know?",
            "<18>{#p/papyrus}{#f/31}对。",
            "{#p/asriel2}{#f/3}* Say it louder.",
            "<18>{#p/papyrus}{#f/5}对！",
            "<26>{#p/asriel2}{#f/1}* 对我说，洋求我\n  把梅说的都告诉你。",
            "<18>{#p/papyrus}{#f/7}好！洋求你把梅说的\n都告诉我吧！该死！",
            "{#p/asriel2}{#f/1}* Hee hee hee...",
            "{#f/1}* Alright, I'll tell you.",
            "{#f/15}* In fact, it'll only take one word...",
            "<18>{#p/papyrus}{#f/4}我的天哪，快说吧..."
         ],
         papyrusSolo4b: [
            "{*}{#p/asriel2}{#f/14}{@random=1.1/1.1}{@fill=#f00}* $(name).{%100}",
            "<18>{#p/papyrus}{#f/32}...！",
            "{#p/asriel2}{#f/5}* Hah!\n* Hahaha!\n* The look on your face!"
         ],
         papyrusSolo4c: ["<18>{#p/papyrus}{#f/31}我...", "<18>{#f/3}...不..."],
         papyrusSolo4d: [
            "<18>{#p/papyrus}{#f/7}不，你错了。",
            "<18>{#f/7}一直想方设法把我击垮的，\n是你。",
            "<18>{#f/7}那个满嘴谎话的，还是你。",
            "<18>{#f/9}但是我，帕派瑞斯...",
            "<18>{#f/9}总算认清了{@fill=#f00}真相{@fill=#fff}。",
            "{#p/asriel2}{#f/13}* Oh?\n* And what's that?"
         ],
         papyrusSolo4e: ["<18>{#p/papyrus}{#f/34}你才不是{@fill=#f00}艾斯利尔{@fill=#fff}。"],
         papyrusSolo4f: [
            "<18>{#f/5}{@fill=#f00}艾斯利尔{@fill=#fff}绝不可能\n干出这种事！",
            "<18>{#f/31}因为，{@fill=#f00}艾斯利尔{@fill=#fff}心地善良，",
            "<18>{#f/5}信赖同胞...",
            "<18>{#f/31}比谁都相信人类！",
            "<18>{#f/4}而你呢...",
            "<18>{#f/7}你不过是个为了\n一己私欲利用人类的\n卑鄙小人！",
            "<18>{#f/4}我告诉你，\n你爱说啥就说啥，\n我不在乎。",
            "<18>{#f/9}但是，我还相信着\n那个人类。",
            "{#p/asriel2}{#f/8}* Well, if you've got so much faith in them...",
            "{#f/7}* Then prove me wrong.",
            "{#f/3}* I'll let you take them on, one on one.",
            "{#f/3}* If they spare you, then I'll admit I was wrong.",
            "{#f/4}* But if they kill you, which they inevitably will...",
            "{#f/1}* You'll realize that I was right, and that HE died for nothing.",
            "{#f/1}* How does that sound?",
            "<18>{#p/papyrus}{#f/9}...\n我接受。",
            "{#p/asriel2}{#f/3}* Splendid.",
            "{#f/4}* See you never."
         ]
      },
      houz: () =>
         SAVE.data.b.svr
            ? ["{#p/human}* (You place your hands on the heavily scratched door.)"]
            : ["{#p/basic}* The door is covered in cat- claw scratches."],
      gonezo: () =>
         world.bulrun ? ["{#p/basic}* ... but everybody ran."] : ["{#p/basic}* ... but nobody came."],
      garbanzo: ["{#p/human}* (But there was nobody around to occupy the seat.)"],
      doggonopoggo: () =>
         SAVE.data.b.svr
            ? ["{#p/human}* (But there was nobody here.)"]
            : (game.room === 's_doggo' && SAVE.data.n.state_starton_doggo === 2) || // NO-TRANSLATE

               (game.room === 's_dogs' && SAVE.data.n.state_starton_dogs === 2) || // NO-TRANSLATE

               (game.room === 's_pacing' && SAVE.data.n.state_starton_lesserdog === 2) // NO-TRANSLATE

               ? ["{#p/basic}* ... but nobody came."]
               : ["{#p/basic}* Nobody's home."],
      housebloc: () =>
         SAVE.data.b.svr ? ["{#p/human}* (You can't seem to find a way in.)"] : ["{#p/basic}* It's locked."],
      innkeep1a: pager.create(
         0,
         [
            "{#p/basic}{#npc/a}* Welcome to Starred Inn!\n* Starton's premier hotel!",
            "* One night will cost you 60G.",
            choicer.create("* （订一间房吗？）", "是", "否")
         ],
         [
            "{#p/basic}{#npc/a}* Changed your mind?",
            "* Remember, one night is 60G.",
            choicer.create("* （订一间房吗？）", "是", "否")
         ]
      ),
      innkeep1b: pager.create(
         0,
         [
            "{#p/basic}{#npc/a}* Back again?\n* Remember, one night is 60G.",
            choicer.create("* （再订一间房吗？）", "是", "否")
         ],
         ["{#p/basic}{#npc/a}* Changed your mind?", choicer.create("* （再订一间房吗？）", "是", "否")]
      ),
      innkeep1c: pager.create(
         0,
         [
            "<33>{#p/basic}{#npc/a}* Back again?\n* Well, stay as long as you like!",
            choicer.create("* （再订一间房吗？）", "是", "否")
         ],
         ["{#p/basic}{#npc/a}* Changed your mind?", choicer.create("* （再订一间房吗？）", "是", "否")]
      ),
      innkeep2a: [
         "{#p/basic}{#npc/a}* ... you don't even have 60G?",
         "* Oh! You poor thing.\n* I can only imagine what you've been through.",
         "* One of the rooms upstairs is empty, you can sleep there for free, okay?"
      ],
      innkeep2b: ["{#p/basic}{#npc/a}* Here's your room key.\n* Remember to bundle up!"],
      innkeep2c: ["{#p/basic}{#npc/a}* Sorry, you don't have enough G..."],
      innkeep3a: ["{#p/basic}{#npc/a}* Hiya!\n* You look like you had a great sleep."],
      innkeep3b: ["* Which is incredible...\n* ... considering you were only up there for a few minutes."],
      innkeep3c: ["* Feel free to come back if you get tired."],
      innkeep3d: ["* Here's your money back.\n* You can pay me if you're going to stay overnight."],
      innkeep4: ["{#p/basic}{#npc/a}* Not in a sleepy mood?\n* Well, I'll always be here if you need me!"],
      innkeep5: [
         "{#p/basic}{#npc/a}* Hello!\n* Sorry, no time for a nap...",
         "* Starred Inn is shutting down so we can leave to find a new homeworld."
      ],
      innkeep6: [
         "{#p/basic}{#npc/a}* Oh, there you are.\n* I've been worrying about you!",
         "* Things are going to be OK, you hear?",
         "* We're all going to settle on a new homeworld soon...",
         "* There's bound to be a place you can stay there!"
      ],
      kidd1: pager.create(
         2,
         ["{#p/kidd}{#f/1}* What's up?"],
         ["{#p/kidd}{#f/1}* Yo, howzzitgoin?"],
         ["{#p/kidd}{#f/1}* Hey, hey!"],
         ["{#p/kidd}{#f/1}* Nice to see you, haha."],
         ["{#p/kidd}{#f/1}* Woah, dude, what's up?"]
      ),
      kidd2: pager.create(
         0,
         () =>
            game.room === 's_town1' // NO-TRANSLATE

               ? [
                  "{#p/kidd}{#f/1}* Yo, you're a kid too, right?",
                  "{#p/kidd}{#f/1}* I can tell 'cause you're wearing a striped shirt."
               ]
               : [
                  "{#p/kidd}{#f/7}* Wait, you read books too!?",
                  "{#p/kidd}{#f/1}* That librarby taught me everything I know about monster history!",
                  "{#p/kidd}{#f/3}* I can't even imagine what living on a planet is like..."
               ],
         () =>
            game.room === 's_town1' // NO-TRANSLATE

               ? ["{#p/kidd}{#f/1}* I wonder if that short skeleton is an adult or a kid."]
               : ["{#p/kidd}{#f/3}* Have you ever lived on a planet?"]
      ),
      marriage1: [
         "{#p/basic}* What's that smell?\n* (Where's that smell?)",
         "* If you're a smell...\n* (... identify yoursmellf!)"
      ],
      marriage2: [
         "{#p/basic}* Hmmm...\n* Here's that weird smell.",
         "* It makes me want to eliminate...",
         "* (... eliminate YOU!)"
      ],
      marriage3a: [
         "{#p/basic}* Dogs can pet other dogs???\n* (A new world has opened up for us...)",
         "* Thanks, weird puppy!"
      ],
      marriage3b: [
         "{#p/basic}* Weird smells can bring good things...\n* (Friendly fun fetch!)",
         "* Thanks, weird smell!\n* (It sure was fun to catch a \"wrench\" in the works!)"
      ],
      marriage3c: [
         "{#p/basic}* It's getting harder and harder to sniff things...\n* (Getting harder to see...)",
         "* Let's get out of here!"
      ],
      marriage3d: [
         "{#p/basic}* That weird puppy came out of nowhere...\n* (Almost killed us...)",
         "* Let's get out of here!"
      ],
      marriage3e: [
         "{#p/basic}* Dogs can pet AND play fetch with other dogs???\n* (It's almost criminal...)",
         "* Thanks, weird puppy!\n* (After this, our lives will never be the same!)"
      ],
      marriage4: [
         "{#p/basic}* Where's the prince?\n* (Did we come the right way?)",
         "* We must stop that menace...\n* (... and his human companion!)"
      ],
      marriage5: ["{#p/basic}* Hmmm...\n* Here they are...", "* (Let's capture them!)"],
      maze1: () =>
         world.edgy
            ? [
               "{#p/sans}{#f/0}* welcome back.",
               "{#p/sans}{#f/3}* it's a shame papyrus can't be here, because...",
               "{#p/sans}{#f/2}* he's been working very hard on this puzzle for a long time.",
               "{#p/sans}{#f/0}* but that's alright.",
               "{#p/sans}{#f/0}* i promised him earlier that i'd show it to you, so here goes."
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
         "{#x1}{#p/sans}{#f/2}* maybe you're the one who's irresistible.",
         "<18>{#p/papyrus}{#f/1}真的吗！？"
      ],
      maze2b: [
         "<18>{#x4}{#f/9}没有人类能解开由\n伟大的帕派瑞斯\n所制作的谜题！",
         "{#x1}{#p/sans}{#f/4}* no human has even had the chance to, bro.",
         "<18>{#p/papyrus}{#x3}{#f/7}呃啊，这不是重点！！"
      ],
      maze3: ["<18>{#x1}{#f/0}不论如何，\n我把这个谜题叫做..."],
      maze3a: [
         "<18>“火焰之墙”！！",
         "{#p/sans}* couldn't you just call it \"the firewall?\"\n* it'd save time.",
         "<18>{#p/papyrus}{#f/4}艾菲斯博士会觉得\n我用错词了的。",
         "{#p/sans}* i dunno bro, she's really into that kinda stuff. in fact...",
         "<30>{#f/2}* 这里毕竟是个\n  {@fill=#ff0}热火{@fill=#fff}朝天的地方。"
      ],
      maze4: ["<18>{#p/papyrus}{#x3}{#f/7}别说了，衫斯！！"],
      maze5: () =>
         world.edgy
            ? [
               "{#p/sans}{#f/0}* it's called \"the firewall.\"",
               "{#p/sans}{#f/2}* y'know.\n* like the firewall on a computer.",
               "{#p/sans}* the idea behind this one is to get to the other side.",
               "{#p/sans}* simple, right?",
               "{#p/sans}{#f/3}* though, i've tested this puzzle myself, and i gotta say...",
               "{#p/sans}{#f/2}* it's not as easy as it looks."
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
                  "{#p/sans}{#f/0}* what are you going back there for, huh?",
                  "{#p/sans}{#f/3}* come on.\n* at least try to be a good sport."
               ]
               : ["<18>{#p/papyrus}{#x2}{#f/7}你在往哪里走呢！？"],
         () => (world.edgy ? ["{#p/sans}{#f/0}* seriously?"] : ["<18>{#p/papyrus}{#x2}{#f/7}快回来！！"])
      ),
      maze7: [
         [
            "<18>{#p/papyrus}你是怕火吗？？",
            "<18>{#f/4}不用担心，\n这火其实烧不到你。",
            "<18>{#f/0}就像衫斯说的那样，\n那些火仅仅是\n“令人愉快的温暖”。",
            "{#p/sans}* actually, i picked that saying up from a friend.",
            "<18>{#p/papyrus}{#f/4}...哦。"
         ],
         [
            "<18>{#p/papyrus}你在担心解不了谜题吗？？",
            "<18>如果是那样的话，\n那你一定得知道...",
            "<18>{#x4}{#f/9}我，伟大的帕派瑞斯，\n不会因此而评判你！",
            "<18>{#f/0}就像每个明星大厨\n都知道的那样，\n心意是最重要的。",
            "<18>{#x1}所以，来吧，\n尽力就好！"
         ],
         [
            "<18>{#p/papyrus}{#f/4}（衫斯，那个人类\n在干什么啊？？）",
            "{#p/sans}* they could just be studying the pattern.",
            "<18>{#p/papyrus}{#f/4}（哦，确实。）",
            "<18>{#f/9}那样的话，\n准备好了就前进吧！"
         ]
      ],
      maze8: () =>
         world.edgy
            ? ["{#p/sans}{#f/0}* whoops.\n* nice try, though."]
            : [
               "<18>{#p/papyrus}捏嘿嘿！\n那好吧。",
               "<18>{#f/9}看来你被\n伟大的帕派瑞斯戏弄了！",
               "<18>{#f/0}但别担心！",
               "<18>你也看到了，\n我的陷阱可不差。",
               "<18>{#f/9}你不能因为轻易失败\n就受到指责！！"
            ],
      maze9: () =>
         world.edgy
            ? ["{#p/sans}{#f/0}* huh.\n* guess you're smarter than you look."]
            : [
               "<18>{#p/papyrus}{#f/1}WHAT!?",
               "<18>{#f/7}HOW DID YOU MANAGE TO DO THAT!?!?",
               "<18>THAT WAS SUPPOSED TO BE TOTALLY IMPOSSIBLE!",
               "<18>{#f/9}... WELL THEN!\nI SHALL HAVE TO STEP UP MY GAME!"
            ],
      maze10: () =>
         world.edgy
            ? [
               "{#p/sans}{#f/0}* well, that's it.",
               "{#p/sans}{#f/3}* ... thanks for playing along, at least.",
               "{#p/sans}{#f/0}* in the meantime, i've got another puzzle to set up.",
               "{#p/sans}{#f/2}* we'll be seeing each other again."
            ]
            : [
               "<18>{#f/4}无论如何...",
               "<18>{#f/0}我很期待\n接下来的发展！",
               "<18>{#f/4}一个令人\n十分困惑的谜题...",
               "<18>{#f/1}连TERRESTRIA自己\n都解决不了！！",
               "{#p/sans}* terrestria?\n* isn't she literally the oldest monster alive?",
               "<18>{|}{#p/papyrus}{#f/1}呃...\n是这样没错，但- {%}",
               "{#p/sans}* dang, i didn't know you thought THAT highly of me.",
               "<18>{#p/papyrus}{#f/4}啥。",
               "{|}{#p/sans}* like, if even SHE can't do it, then- {%}",
               "<18>{#p/papyrus}{#f/7}{#x3}我懂你的意思了！！"
            ],
      maze11: ["<18>{#p/papyrus}{#f/7}衫斯，\n我们还有谜题要准备呢！！", "<18>快来吧！"],

      nicecreamSc1: [
         "{#p/basic}* I don't understand why these aren't selling...",
         "* It's the perfect place for something nice..."
      ],
      nicecreamSc2: () => [
         SAVE.data.n.plot > 20.2
            ? "{#p/basic}* OH!!!!\n* ... you came back!"
            : SAVE.data.b.s_state_scorereaction1 || SAVE.data.n.plot === 20.2
               ? "{#p/basic}* WAIT!!!!\n* Maybe YOU'D like something!"
               : "{#p/basic}* OH!!!!\n* A CUSTOMER!!",
         "* Hello!\n* Would you like an Ice Dream?",
         SAVE.data.b.s_state_million
            ? "* As the top scorer here, you get a handy discount!\n* 6G per Ice Dream!"
            : "* It's the frozen treat that'll set your mind ablaze!\n* Now just 12G."
      ],
      nicecreamSc3: () => [
         "{#p/basic}* Ice Dreams!\n* They're the frozen treats that'll set your mind ablaze!",
         SAVE.data.b.s_state_million ? "* For you, 6G!" : "* Now just 12G."
      ],
      nicecreamPrompt1: [choicer.create("* (Buy an Ice Dream?)", "是", "否")],
      nicecreamPrompt2: [choicer.create("* (Get an Ice Dream?)", "是", "否")],
      nicecreamSc4: [
         "{#p/basic}* Well then...\n* Tell your friends...",
         "* There's ice cream out here...\n* In the middle of nowhere..."
      ],
      nicecreamFc1: ["{#p/basic}* I relocated my stand, but there are still no customers..."],
      nicecreamFc2: [
         "{#p/basic}* Fortunately, I've thought of a solution!!",
         "* Postcards!",
         "* Every time you buy an Ice Dream, you can take a postcard from the box.",
         "* If you have three postcards, you can trade them for a free Ice Dream!",
         "* They're sure to get the customers to come back!",
         "* Oh, um, would you like an Ice Dream?",
         "* It's the frozen treat that'll set your mind ablaze!\n* Now just 10G."
      ],
      nicecreamFc3a: [
         "{#p/basic}* Ice Dreams!\n* They're the frozen treats that'll set your mind ablaze!",
         "* You've got three postcards, would you like to redeem them?"
      ],
      nicecreamFc3b: [
         "{#p/basic}* Ice Dreams!\n* They're the frozen treats that'll set your mind ablaze!",
         "* Now just 10G."
      ],
      nicecreamFc4: [
         "{#p/basic}* Well then...\n* Tell your friends...",
         "* Four Ice Dreams for the price of three..."
      ],
      nicecreamFc5: ["{#p/basic}* Don't forget to take a postcard from the box!"],
      nicecreamNoFun1: ["{#p/basic}* Huh?\n* You don't have enough room in your pockets..."],
      nicecreamNoFun2: ["{#p/basic}* I wish I could make Ice Dreams easier to store..."],
      nicecreamNoMun1: ["{#p/basic}* Huh?\n* You don't have enough money..."],
      nicecreamNoMun2: ["{#p/basic}* I wish I could make Ice Dreams for free..."],
      nicecreamFree1: ["{#p/basic}* Tell you what, have your first one on me."],
      nicecreamFree2: ["{#p/basic}* Enjoy..."],
      nicecreamReturnWithGoods: ["{#p/basic}* Well, you can always come back later."],
      nicecreamReturnWithNeeds: ["{#p/basic}* Oh, that's okay.", "* Come again soon, kid!"],
      nicecreamPurchase: ["{#p/basic}* Here you go!\n* Have a super-duper day!"],
      nicecreamGet: ["{#s/equip}{#p/human}* (You got the Ice Dream.)"],
      nicecreamK1a: ["{#p/kidd}{#f/1}* Yo, can I get an Ice Dream?"],
      nicecreamK1b: ["{#p/basic}* Sure, kid.\n* If you've got the money."],
      nicecreamK1c: ["{#p/kidd}{#f/2}* (Psst, give them this.)"],
      nicecreamK1d: [
         "{#p/kidd}{#f/7}* Yo, they got free Ice Dreams here!?",
         "{#p/kidd}{#f/1}* Get me one too!"
      ],
      nicecreamK2: ["{#p/basic}* W... where did you get that?"],
      nicecreamK3a: ["* S-sure, kid... here you go!"],
      nicecreamK3b: [
         "{#s/equip}{#p/human}* (You hand the Ice Dream to Monster Kid.)",
         "{#p/kidd}{#f/7}* AWESOME!!!"
      ],
      nicecreamE: pager.create(
         0,
         () =>
            SAVE.data.n.plot === 72
               ? [
                  "{#p/basic}* Sold out again, I'm afraid!\n* The thought of freedom has drawn in many customers!",
                  ...(world.population_area('s') < 6 || world.population_area('f') < 6 || world.population < 2 // NO-TRANSLATE

                     ? [
                        "* Not that I'd sell to you if I wasn't sold out...",
                        "* If I sold Ice Dreams to a bully, my reputation would be in ruins!"
                     ]
                     : [
                        "* With the recent success, I've been reflecting on my past, and remembering my father.",
                        "* If he hadn't invented Ice Dreams, I'd still be selling cheap balloons."
                     ])
               ]
               : [
                  "{#p/basic}* Hey, kid!\n* I'd offer you an Ice Dream, but I'm all sold out!",
                  "* Business is booming here like nothing ever been!",
                  "* My supply just can't keep up!"
               ],
         () =>
            SAVE.data.n.plot === 72
               ? world.population_area('s') < 6 || world.population_area('f') < 6 || world.population < 2 // NO-TRANSLATE

                  ? ["{#p/basic}* Nothing personal, of course."]
                  : [
                     "{#p/basic}* Apparently, he sold his first Ice Dream in the middle of the Starton holo-forest."
                  ]
               : ["{#p/basic}* Maybe it's time to start that \"Ice Dream\" chain I've always dreamed of..."]
      ),
      faunX: () =>
         [
            ["{#p/basic}{#npc/a}* I can tell you have absolutely no respect for life.\n* Good going, champ."],
            ["{#p/basic}{#npc/a}* Keep it up, champ.\n* See where it gets you."],
            ["{#p/basic}{#npc/a}* Really, champ?"]
         ][Math.min(roomKills().s_greater++, 2)],
      snowdrakeX: [
         "{#p/basic}{#npc/a}* Guh?\n* Did you just...",
         "{#p/basic}{#npc/a}* ...\n* That's, uh, not very cool."
      ],
      moonrocksX1: ["{#p/basic}{#npc/a}* What the-\n* What was THAT for?"],
      moonrocksX2: ["{#p/basic}{#npc/b}* For real, though~\n* How did THAT happen?"],
      npcinter: {
         s_snowdrake: pager.create(
            0,
            () =>
               SAVE.data.n.plot === 72
                  ? [
                     "{#p/basic}{#npc/a}* Hey.\n* You're pretty cool.",
                     "* Just remember, if you get in a fight with someone, god or otherwise...",
                     "* Remember to hold [X] to move twice as slowly.\n* That's very important."
                  ]
                  : roomKills().s_doggo > 0
                     ? ["{#p/basic}{#npc/a}* Get away from me, man!\n* I don't like you."]
                     : SAVE.data.n.plot < 19
                        ? [
                           "{#p/basic}{#npc/a}* I heard if you hold [X] in battle, you'll move twice as slow as normal!",
                           "* I know... lame, right?",
                           "* But I'll tell you a secret.\n* That dog over there... won't expect you to move slowly.",
                           "* If you sneak up on him while holding [X], you might just get by undetected!",
                           "* Guh huh huh... good luck."
                        ]
                        : [
                           "{#p/basic}{#npc/a}* So you came back to talk, huh?",
                           "* That's cool.",
                           "* Not as cool as me, but still pretty cool anyway."
                        ],
            () =>
               SAVE.data.n.plot === 72
                  ? ["{#p/basic}{#npc/a}* Very important."]
                  : roomKills().s_doggo > 0
                     ? ["{#p/basic}{#npc/a}* Didn't you hear me?\n* Get away!"]
                     : SAVE.data.n.plot < 19
                        ? ["{#p/basic}* You're gonna need it."]
                        : ["{#p/basic}* I'm ice cold."]
         ),
         s_genokid: pager.create(
            0,
            () =>
               world.genocide
                  ? [
                     "{#p/kidd}{#f/3}{#npc/a}* Yo, this kid came up to me and stuck something in my head.",
                     "{#f/3}* Then, he went off to the Foundry so he could \"boost the signal...\"",
                     "{#f/4}* ... kids can be so weird sometimes."
                  ]
                  : [
                     "{#p/kidd}{#f/3}{#npc/a}* Yo, everyone ran away and hid somewhere.",
                     "{#f/3}* Man, adults can be so dumb sometimes, haha...",
                     "{#f/1}* Don't they know we've got Undyne to protect us!?"
                  ],
            () =>
               world.genocide
                  ? ["{#p/kidd}{#f/7}{#npc/a}* You're cool, though!"]
                  : ["{#p/kidd}{#f/1}{#npc/a}* Undyne's got our backs!"]
         ),
         g_beautifulfish: pager.create(
            0,
            () =>
               SAVE.data.b.killed_mettaton
                  ? [
                     "{#p/basic}{#npc/a}* You've got gumption walking in here after that, kid.",
                     "* We all saw what happened on that TV screen up there."
                  ]
                  : SAVE.data.n.plot === 33
                     ? [
                        "{#p/basic}{#npc/a}* It's surprising to see Sans back here after what happened last time.",
                        "* ... actually, perhaps that's not too surprising."
                     ]
                     : SAVE.data.n.plot === 72
                        ? [
                           "{#p/basic}{#npc/a}* In the end, I never caught any \"girls\" on my voice-mail.",
                           "* So kid, take it from me...",
                           "* Don't try to catch fantastic space creatures with just your voice-mail."
                        ]
                        : papreal()
                           ? [
                              "{#p/basic}{#npc/a}* Where the heck is Sans?",
                              "* He told me he had a star chart I could use to find girls...",
                              "* I mean, it was probably some kind of prank, but I wanted to know what the prank was!"
                           ]
                           : [
                              "{#p/basic}{#npc/a}* I put out a call for some \"girls\" today.",
                              "* Someone told me there are infinite possibilities among the stars...",
                              "* Well, I'm taking that seriously.",
                              "* I'm literally going to make out with a space creature."
                           ],
            () =>
               SAVE.data.b.killed_mettaton
                  ? [
                     "{#p/basic}{#npc/a}* Wanna know what I think?",
                     "* ... that robot was the one guy who made me wanna call for boys instead of girls.",
                     "* It's sad to see him go."
                  ]
                  : SAVE.data.n.plot === 33
                     ? [
                        "{#p/basic}{#npc/a}* You're talking to me like you want the inside scoop.",
                        "{#p/basic}{#npc/a}* Sorry kid.\n* Guess you'll just have to wait for the next news update."
                     ]
                     : SAVE.data.n.plot === 72
                        ? [
                           "{#p/basic}{#npc/a}* Mind you, there was a single missed call...",
                           "* ... from a certain \"ONIONSAN.\"",
                           "* They didn't leave me any voice-mail though."
                        ]
                        : papreal()
                           ? ["{#p/basic}{#npc/a}* Do you know where Sans is?"]
                           : [
                              "{#p/basic}{#npc/a}* I guess I could ask Undyne.\n* But I think she likes someone else already."
                           ],
            () =>
               SAVE.data.b.killed_mettaton
                  ? ["{#p/basic}{#npc/a}* Here's hoping another cutie like him comes along..."]
                  : SAVE.data.n.plot === 33
                     ? ["{#p/basic}{#npc/a}* Don't tell me you don't have an OuterNet account..."]
                     : SAVE.data.n.plot === 72
                        ? ["{#p/basic}{#npc/a}* What's an onionsan, anyway?"]
                        : papreal()
                           ? ["{#p/basic}{#npc/a}* Let me know if you see him..."]
                           : ["{#p/basic}{#npc/a}* Can I ever find love out here?"]
         ),
         g_bigmouth: pager.create(
            0,
            () =>
               SAVE.data.b.killed_mettaton
                  ? [
                     "{#p/basic}{#npc/a}* Hmm...",
                     "* I wonder what kind of food robots like.",
                     "* Do they even eat food at all?",
                     "* ... we'll never know, now."
                  ]
                  : SAVE.data.n.plot === 33
                     ? [
                        "{#p/basic}{#npc/a}* Sans has been a regular here since day one.",
                        ...(papreal()
                           ? [
                              "* He usually orders the worst item off the menu...",
                              "* Except for earlier today...",
                              "* ... when he ordered the SECOND worst item off the menu instead.",
                              "* That's something, right?"
                           ]
                           : [
                              "* He always orders the worst item off the menu, and he never pays his tab.",
                              "* But because he attracts so many other customers...",
                              "* Grillby even gave him special arrangements.",
                              "* ... what's a \"yamok\" anyway?"
                           ])
                     ]
                     : SAVE.data.n.plot === 72
                        ? world.population < 4
                           ? [
                              "{#p/basic}{#npc/a}* I wonder what a human bully would taste like...",
                              "* Are they tastier when they're meaner?\n* Or vice-versa?"
                           ]
                           : [
                              "{#p/basic}{#npc/a}* As much as I would've liked to try human food...",
                              "* Food from a whole new world... now that's even better."
                           ]
                        : papreal()
                           ? [
                              "{#p/basic}{#npc/a}* Hmmm, this is around the time that Sans comes in.",
                              "* Then, a little bit later, his brother comes in.",
                              "* Yes, his brother.\n* Papyrus.",
                              "* He always used to order milk, but nowadays, he picks a new item every time...",
                              "* That replicator sure is a wonderous thing, isn't it?",
                              "* It's too bad it only produces monster food."
                           ]
                           : [
                              "{#p/basic}{#npc/a}* Hmmm...\n* Isn't human food different from monster food?",
                              "* It does things like \"spoil.\"",
                              "* And while monster food converts to energy instantly...",
                              "* Human food has to pass all the way through their bodies first.",
                              "* Which it somehow does, even on low gravity.",
                              "* How strange.\n* I'd love to try it sometime."
                           ],
            () =>
               SAVE.data.b.killed_mettaton
                  ? ["{#p/basic}{#npc/a}* How unfortunate."]
                  : SAVE.data.n.plot === 33
                     ? papreal()
                        ? world.dead_skeleton
                           ? [
                              "{#p/basic}{#npc/a}* Come to think of it, that's not the only off-putting thing to have happened today..."
                           ]
                           : ["{#p/basic}{#npc/a}* How strange."]
                        : ["{#p/basic}{#npc/a}* We're blessed to have such a character in our midst."]
                     : SAVE.data.n.plot === 72
                        ? world.population < 4
                           ? [
                              "{#p/basic}{#npc/a}* For all we know, a last-minute redemption could make them the tastiest of all."
                           ]
                           : [
                              "{#p/basic}{#npc/a}* For all we know, new world food spoils even faster than food made by humans."
                           ]
                        : papreal()
                           ? [
                              "{#p/basic}{#npc/a}* I hope he shows up today.\n* Him and his brother are great at making us laugh."
                           ]
                           : ["{#p/basic}{#npc/a}* I've also heard they have things called \"bathrooms.\""],
            () =>
               SAVE.data.b.killed_mettaton
                  ? ["{#p/basic}{#npc/a}* How unfortunate."]
                  : SAVE.data.n.plot === 33
                     ? papreal()
                        ? ["{#p/basic}{#npc/a}* How strange."]
                        : ["{#p/basic}{#npc/a}* How delightful."]
                     : SAVE.data.n.plot === 72
                        ? world.population < 4
                           ? ["{#p/basic}{#npc/a}* How... unexpected."]
                           : ["{#p/basic}{#npc/a}* How... delicious."]
                        : papreal()
                           ? ["{#p/basic}{#npc/a}* Skeletons are cool."]
                           : ["{#p/basic}{#npc/a}* Humans are weird."]
         ),
         g_bunbun: pager.create(
            0,
            () =>
               SAVE.data.b.killed_mettaton
                  ? [
                     "{#p/basic}{#npc/a}* M-mettaton was the h-hottest guy around...",
                     "* Without him, the outpost is s-s-so much colder!"
                  ]
                  : SAVE.data.n.plot === 33
                     ? [
                        "{#p/basic}{#npc/a}* Sansyyyy...\n* Come back and sit with me...!",
                        "* Everything's so f-f-fun when you're around..."
                     ]
                     : SAVE.data.n.plot === 72
                        ? [
                           "{#p/basic}{#npc/a}* I w-wonder if the n-new world h-has h-hot guys...",
                           "* A-and neat d-drinks...",
                           "* Ooooooo, I'm ready!"
                        ]
                        : papreal()
                           ? [
                              "{#p/basic}{#npc/a}* H-hey, isn't Sansy s'posed to come swinging in right about now??",
                              "* C'mon Sansy!\n* You're the life of the party..."
                           ]
                           : world.dead_dog
                              ? [
                                 "{#p/basic}{#npc/a}* It's s-s-so quiet in here.",
                                 "* Lighten up everybody!\n* ...",
                                 "* I'm really starting to loathe this place."
                              ]
                              : [
                                 "{#p/basic}{#npc/a}* No matter where I go, it's the same menu, the same people...",
                                 "* Help!\n* I want new drinks an' h-h-h-hot guys!!"
                              ],
            () =>
               SAVE.data.b.killed_mettaton
                  ? ["{#p/basic}{#npc/a}* So c-c-cold..."]
                  : SAVE.data.n.plot === 33
                     ? ["{#p/basic}{#npc/a}* Sansyyyy..."]
                     : SAVE.data.n.plot === 72
                        ? ["{#p/basic}{#npc/a}* S-soooooo ready!"]
                        : papreal() || world.dead_dog
                           ? ["{#p/basic}{#npc/a}* ..."]
                           : ["{#p/basic}{#npc/a}* I guess the bartender's kind of h-h-h-hot..."]
         ),
         g_dogamy: () =>
            SAVE.data.b.killed_mettaton
               ? [
                  "{#p/basic}{#npc/a}* Everyone's up in arms about Mettaton, but me...?",
                  SAVE.data.n.state_starton_doggo === 2 && SAVE.data.n.state_starton_greatdog === 2
                     ? "{#p/basic}{#npc/a}* I just want to know where the other dogs went."
                     : SAVE.data.n.state_starton_doggo === 2
                        ? "{#p/basic}{#npc/a}* I still want to know what happened to Doggo."
                        : SAVE.data.n.state_starton_greatdog === 2
                           ? "{#p/basic}{#npc/a}* I still miss seeing that big lug around here."
                           : papreal()
                              ? "{#p/basic}{#npc/a}* I still miss having Sans and his brother around."
                              : "{#p/basic}{#npc/a}* I just wish Sans would come back and give us more of his headpats."
               ]
               : SAVE.data.n.plot === 33
                  ? ["{#p/basic}{#npc/a}* Shoot, I was hoping Sans came to give us a pat on the head."]
                  : SAVE.data.n.plot === 72
                     ? world.population < 2
                        ? [
                           "{#p/basic}{#npc/a}* We're free!\n* Maybe now, Sans can finally give us a pat on the head.",
                           "* It's better than worrying about a rogue bully tearing through town."
                        ]
                        : [
                           "{#p/basic}{#npc/a}* We're free!\n* Maybe now, Sans can finally give us a pat on the head.",
                           "* Or maybe our new company's clients will do that for us instead."
                        ]
                     : SAVE.data.n.state_starton_doggo === 2 && SAVE.data.n.state_starton_greatdog === 2
                        ? ["{#p/basic}{#npc/a}* Smells kinda... quiet."]
                        : SAVE.data.n.state_starton_doggo === 2
                           ? ["{#p/basic}{#npc/a}* I can't believe Doggo's gone missing..."]
                           : SAVE.data.n.state_starton_greatdog === 2
                              ? ["{#p/basic}{#npc/a}* Where's that big lug?\n* We can't start until it shows up."]
                              : papreal()
                                 ? ["{#p/basic}{#npc/a}* Where's Sans...\n* He's supposed to give me a pat on the head..."]
                                 : [
                                    "{#p/basic}{#npc/a}* You better watch where you sit down in here, kid.",
                                    "* That big lug WILL jump into your lap and give you lots of love and attention."
                                 ],
         g_dogaressa: () =>
            SAVE.data.b.killed_mettaton
               ? [
                  "{#p/basic}{#npc/a}* (My hubby and I just want everyone to calm down.)",
                  "{#p/basic}{#npc/a}* (Mettaton's death was tragic, but he's just a guy on TV!)"
               ]
               : SAVE.data.n.plot === 33
                  ? ["{#p/basic}{#npc/a}* (I like Sans.)\n* (Sometimes he feeds us scraps of food under the table.)"]
                  : SAVE.data.n.plot === 72
                     ? world.population < 2
                        ? [
                           "{#p/basic}{#npc/a}* (Now that we're free, we're planning on starting a marriage counseling company.)",
                           "* (Our first curriculum will be called \"What it means to be in an abusive relationship.\")"
                        ]
                        : [
                           "{#p/basic}{#npc/a}* (Now that we're free, we're planning on starting a marriage counseling company.)",
                           "* (Our first curriculum will be called \"The do's and dont's of marrying your mother.\")"
                        ]
                     : SAVE.data.n.state_starton_doggo === 2 && SAVE.data.n.state_starton_greatdog === 2
                        ? [
                           "{#p/basic}{#npc/a}* (It's lonely in here today.)\n* (If our friends don't show up, would you like to play?)"
                        ]
                        : SAVE.data.n.state_starton_doggo === 2
                           ? ["{#p/basic}{#npc/a}* (Where's Doggo?)\n* (I hope he didn't get lost again.)"]
                           : SAVE.data.n.state_starton_greatdog === 2
                              ? ["{#p/basic}{#npc/a}* (Where's Canis Major?)\n* (He was supposed to join us for this game.)"]
                              : papreal()
                                 ? ["{#p/basic}{#npc/a}* (Where are those skeletons?)\n* (I wanted to get a bone from them...)"]
                                 : [
                                    "{#p/basic}{#npc/a}* (We're sentries, but we never get any respect.)",
                                    "* (I wish those skeletons would throw us more bones.)",
                                    "* (We love bones.)"
                                 ],
         g_doggo: () =>
            SAVE.data.b.killed_mettaton
               ? [
                  "{#p/basic}{#npc/a}* Losing Mettaton REALLY stinks, you know that?",
                  "<33>* Of all the guys on the outpost, he moved the most!",
                  "* Without him, the only people on TV will probably be people who DON'T move all the time."
               ]
               : SAVE.data.n.plot === 33
                  ? [
                     "{#p/basic}{#npc/a}* Huh?\n* Since when did you and Sans become friends...?",
                     "* I'm not the biggest fan of that guy...",
                     "* He loves to appear without moving."
                  ]
                  : SAVE.data.n.plot === 72
                     ? [
                        "{#p/basic}{#npc/a}* I've been without cuddles for so long, but finally, someone opened up to me.",
                        "* Ice Wolf is now my Nice Wolf."
                     ]
                     : SAVE.data.n.state_starton_dogs === 2 && SAVE.data.n.state_starton_greatdog === 2
                        ? [
                           "{#p/basic}{#npc/a}* Sometimes the others like to prank me. They sit still so I can't see them.",
                           "* They must be here, playing a joke on me.",
                           "* I'll just wait until one of them admits it..."
                        ]
                        : SAVE.data.n.state_starton_dogs === 2
                           ? [
                              "{#p/basic}{#npc/a}* Where're the other two?\n* I can't play with this big lug alone...",
                              "* It'd be too hard!"
                           ]
                           : SAVE.data.n.state_starton_greatdog === 2
                              ? [
                                 "{#p/basic}{#npc/a}* Where's the big lug?\n* I can't play with these two alone...",
                                 "* It'd be too easy!"
                              ]
                              : papreal()
                                 ? ["{#p/basic}{#npc/a}* Papyrus?\n* Is that you?\n* Come on..."]
                                 : [
                                    "{#p/basic}{#npc/a}* I'm thinking of letting my hair grow out a little to show off my personality.",
                                    "* It makes a statement like \"Give me a big, soft hug and cuddle me, please.\""
                                 ],
         g_grillby: () =>
            SAVE.data.b.killed_mettaton
               ? [
                  "{#p/basic}* ...\n* ...\n* ...",
                  "{#npc/a}* Grillbz said the grand finale was good for business.",
                  "* I'm not sure if he likes that fact, though."
               ]
               : SAVE.data.n.plot === 33
                  ? SAVE.data.b.item_fast_food
                     ? [
                        "{#p/basic}* ...\n* ...\n* ...",
                        "{#npc/a}* Grillbz said he only lets Sans eat for free because he pulls in other customers.",
                        "* I can't exactly disagree..."
                     ]
                     : [
                        "{#p/basic}* ...\n* ...\n* ...",
                        "{#npc/a}* Grillbz suggested taking your food with you before he has to throw it out."
                     ]
                  : SAVE.data.n.plot === 72
                     ? world.population < 4
                        ? ["{#p/basic}* ...\n* ...\n* ... okay."]
                        : ["{#p/basic}* ...\n* ...\n* ... good job."]
                     : world.population < 4
                        ? [
                           "{#p/basic}* ...\n* ...\n* ...",
                           "{#npc/a}* Grillbz is real sorry for the lack of other customers.",
                           "* Personally, I think they're just afraid...",
                           "* You know.\n* Of that bully."
                        ]
                        : [
                           "{#p/basic}* ...\n* ...\n* ...",
                           "{#npc/a}* Grillbz said he found his new colors in an e-magazine.",
                           "* Personally, I prefer Grillbz' natural orange color.\n* But that's just me."
                        ],
         g_punkhamster: pager.create(
            0,
            () =>
               SAVE.data.b.killed_mettaton
                  ? [
                     "{#p/basic}{#npc/a}* You really showed that big shot robot who's boss, huh?",
                     "* ... if only he didn't make me feel bad for him."
                  ]
                  : SAVE.data.n.plot === 33
                     ? [
                        "{#p/basic}{#npc/a}* Sans certainly knows how to make you laugh, huh?",
                        "* Good thing, too.\n* That skeleton practically pays the bills here."
                     ]
                     : SAVE.data.n.plot === 72
                        ? world.population < 2
                           ? [
                              "{#p/basic}{#npc/a}* Y'know, I've taken a liking to your fighting spirit, kid.",
                              "* Now that we're all back in town, it seems we'll become great friends.",
                              "* ... but we're all moving out of here, huh?",
                              "* Oh well.\n* Guess it can't all be a haven for the tough stuff."
                           ]
                           : [
                              "{#p/basic}{#npc/a}* If we're free, people won't have to move in from the Citadel anymore!",
                              "* Seems like we won't have to lose our local culture.",
                              "* ... except we're all moving out of here, huh?",
                              "* Oh well.\n* Guess it can't all be punk- peaches and punk-cream."
                           ]
                        : papreal() || world.dead_canine || world.population < 6
                           ? [
                              "{#p/basic}{#npc/a}* The Citadel's getting pretty crowded, so I've heard they're going to start moving here.",
                              "* ... who knows?\n* Maybe we'll have room for 'em."
                           ]
                           : [
                              "{#p/basic}{#npc/a}* The Citadel's getting pretty crowded, so I've heard they're going to start moving here.",
                              "* Hmmm...\n* I don't want to see the erasure of our local culture.",
                              "* But it'd definitely be fun to teach those city slickers how we do things out here!"
                           ],
            () =>
               SAVE.data.b.killed_mettaton
                  ? ["<33>{#p/basic}{#npc/a}* I'm semi-conflicted about this."]
                  : SAVE.data.n.plot === 33
                     ? ["{#p/basic}{#npc/a}* Regular?\n* Who, me?\n* Nah, I'm only semi-regular."]
                     : SAVE.data.n.plot === 72
                        ? world.population < 2
                           ? [
                              "{#p/basic}{#npc/a}* Come to think of it, you've inspired me, kid.\n* I'm gonna start a fight club."
                           ]
                           : ["{#p/basic}{#npc/a}* We'll just have to come up with something new, eh?"]
                        : ["{#p/basic}{#npc/a}* Yeah, bring 'em on!"]
         ),
         g_redbird: pager.create(
            0,
            () =>
               SAVE.data.b.killed_mettaton
                  ? [
                     "{#p/basic}{#npc/a}* Hoo hoo hoo!\n* That was really something!",
                     "{#p/basic}{#npc/a}* ... um, am I the only one that thinks it's all a trick?"
                  ]
                  : SAVE.data.n.plot === 33
                     ? [
                        "{#p/basic}{#npc/a}* Sans is a royal sentry, but don't let his title fool ya.",
                        "* Everyone knows he sits around at the edge of the holo-forest reading hovercar manuals."
                     ]
                     : SAVE.data.n.plot === 72
                        ? [
                           "{#p/basic}{#npc/a}* Wow, a brand new world...",
                           "* I might not get to translate for Grillbz anymore...",
                           "* ... or maybe I will!\n* Grillbz, do you plan on movin' this place out there?",
                           "{#npc}* ...\n* ...\n* ...",
                           ...(world.population < 4
                              ? [
                                 "{#npc/a}* Grillbz says he's more than happy to.",
                                 "<33>* He must still be afraid of you."
                              ]
                              : ["{#npc/a}* Grillbz says he'll think about it."])
                        ]
                        : papreal()
                           ? [
                              "{#p/basic}{#npc/a}* Grillby is getting nervous.",
                              "* Sans is his best customer, and he hasn't shown up at all today..."
                           ]
                           : world.dead_dog
                              ? [
                                 "{#p/basic}{#npc/a}* Those dogs are part of the ROYAL GUARD, the...",
                                 "* Huh?\n* Where are they?\n* Weird..."
                              ]
                              : world.population < 4
                                 ? [
                                    "{#p/basic}{#npc/a}* Word around town is there's a bully going and beating people up.",
                                    "* But Grillbz and I decided to keep the bar open.",
                                    "* No bully's gonna keep us from running THIS establishment!"
                                 ]
                                 : [
                                    "{#p/basic}{#npc/a}* Those dogs are part of the ROYAL GUARD, the military group led by UNDYNE.",
                                    "* She's rude, loud, and beats up everybody hoo disrespects her...",
                                    "* It's no wonder all the kids want to be like her when they grow up!"
                                 ],
            () =>
               SAVE.data.b.killed_mettaton
                  ? ["{#p/basic}{#npc/a}* You never know with those rudely rowdy TV hosts."]
                  : SAVE.data.n.plot === 33
                     ? [
                        "{#p/basic}{#npc/a}* Don't ask me why he does it.",
                        "* If I had to guess, though, I'd say it's got something to do with Papyrus."
                     ]
                     : SAVE.data.n.plot === 72
                        ? [
                           "{#p/basic}{#npc/a}* If he DOES open a Grillby's on the new homeworld...",
                           ...(world.population < 4
                              ? ["* We can only hope the travelers there are nicer.", "* ... you're debatable."]
                              : [
                                 "* We can only hope there isn't too much water around.",
                                 "* ... that'd be dangerous."
                              ])
                        ]
                        : papreal() || world.dead_dog
                           ? ["{#p/basic}{#npc/a}* Something feels off."]
                           : world.population < 4
                              ? ["{#p/basic}{#npc/a}* At least they're not out there killing everybody."]
                              : ["{#p/basic}{#npc/a}* I want to be like UNDYNE when I grow up, too!\n* Hoo hoo hoo!"]
         ),
         l_cupjake: pager.create(
            0,
            () =>
               SAVE.data.n.plot === 72
                  ? [
                     "{#p/basic}{#npc/a}* Maybe now that we're free, that sweet lady will finally leave.",
                     "* Then, I shall come to know the contents of that {@fill=#f00}odd book{@fill=#fff} for myself..."
                  ]
                  : [
                     "{#p/basic}{#npc/a}* There's an {@fill=#f00}odd book{@fill=#fff} that appears and disappears here at random...",
                     "* But that sweet lady always seems to be in the way of it!",
                     "* Do you know anything that could scare her off?"
                  ],
            () =>
               SAVE.data.n.plot === 72
                  ? ["{#p/basic}{#npc/a}* Soon, I tell you.", "* Soon."]
                  : ["{#p/basic}{#npc/a}* I know what you're thinking.", "* Don't try it."]
         ),
         l_kakurolady: pager.create(
            0,
            () =>
               SAVE.data.n.plot === 72
                  ? [
                     "{#p/basic}{#npc/a}* (Cough, cough.)",
                     "* This will be our news feed's last issue...",
                     "* Why don't we just put a big \"THE END\" on the front and call it a day?"
                  ]
                  : [
                     "{#p/basic}{#npc/a}* (Cough, cough.)",
                     "<33>* 我上学的时候，如果我们没有作业，\n  老师会给我们布置一些\n  “找不同”的谜题。",
                     "* I thought they were a waste of time.\n* But look at me now...",
                     "<33>* 我现在是前哨站第一的\n  “找不同”谜题设计师了！"
                  ],
            () =>
               SAVE.data.n.plot === 72
                  ? [
                     "{#p/basic}{#npc/a}* (Cough, cough.)",
                     "* Heck, why don't we just quit right here and now?"
                  ]
                  : [
                     "{#p/basic}{#npc/a}* (Cough, cough.)",
                     "<33>* 相信我，孩子。\n* 你不会想来干这行的。"
                  ]
         ),
         l_librarian: pager.create(
            0,
            () =>
               SAVE.data.n.plot === 72
                  ? [
                     "{#p/basic}{#npc/a}* Welcome to the librarby.",
                     ...(world.population === 0
                        ? ["* If you beat up anyone else, you'll be really sorry."]
                        : ["* This is the last day we'll be open, so make as much noise as you want."])
                  ]
                  : [
                     "{#p/basic}{#npc/a}* Welcome to the librarby.\n* Actually, that name started as a spelling mistake.",
                     "* Now everybody calls it that..."
                  ],
            () =>
               SAVE.data.n.plot === 72
                  ? world.population === 0
                     ? ["{#p/basic}{#npc/a}* You have feelings, don't you?"]
                     : ["{#p/basic}{#npc/a}* Not that anyone would've stopped you before..."]
                  : ["{#p/basic}{#npc/a}* This is what happens when you're too lazy to fix simple problems."]
         ),
         l_sweetie: pager.create(
            0,
            () =>
               SAVE.data.n.plot === 72
                  ? [
                     "{#p/basic}{#npc/a}* Oh my, there's so much news to report, I don't know where to begin!",
                     "* How about this headline...\n* \"Monsters Finally Escape From the Outpost.\"",
                     "* Nah, that doesn't have enough pizazz...",
                     "* How about \"You Won't Believe Who Helped Us Escape From the Outpost!\""
                  ]
                  : world.dead_dog || world.population < 6
                     ? SAVE.data.b.killed_mettaton
                        ? [
                           "{#p/basic}{#npc/a}* Working the news feed is losing its appeal.",
                           "* First, that terrible news from before, and now, what happened to that celebrity...",
                           "* I'm thinking about quitting."
                        ]
                        : [
                           "{#p/basic}{#npc/a}* I love working the news feed.",
                           "* Lately, though, I've had to report on something terrible...",
                           "* I'm starting to second-guess my life choices."
                        ]
                     : SAVE.data.b.killed_mettaton
                        ? [
                           "{#p/basic}{#npc/a}* I love working the news feed.",
                           "* Only problem is, if a celebrity dies...",
                           "* That's all anyone ever wants me to report on for a while."
                        ]
                        : [
                           "{#p/basic}{#npc/a}* I love working the news feed.",
                           "* There's so little to report that we just fill it with comics and games."
                        ],
            () =>
               world.dead_dog || world.population < 6 || SAVE.data.b.killed_mettaton
                  ? ["{#p/basic}{#npc/a}* Have you ever felt like your life is just running in circles?"]
                  : ["{#p/basic}{#npc/a}* Have you ever felt like you're just missing something?"]
         ),
         s_faun: pager.create(
            0,
            () =>
               SAVE.data.n.plot === 72
                  ? world.population < 6
                     ? [
                        "{#p/basic}{#npc/a}* We're all free?",
                        "* OK, OK...\n* And here I thought we'd all be covered in bruises.",
                        "<33>* What a surprise.\n* I'm sure that dog won't care."
                     ]
                     : [
                        "{#p/basic}{#npc/a}* We're all free?",
                        "* OK, OK...\n* I'll stop lounging around.\n* Does that dog know?",
                        "<33>* Hm, I'll be sure to go tell it."
                     ]
                  : roomKills().s_greater > 0
                     ? ["{#p/basic}{#npc/a}* Sorry, champ.\n* Now's not a good time."]
                     : 30 <= SAVE.data.n.plot
                        ? [
                           "{#p/basic}{#npc/a}* I heard that dog is a 4-D poker player...",
                           "* Has it ever won a game?\n* I wonder."
                        ]
                        : [
                           [
                              "{#p/basic}{#npc/a}* A dog just rushed in here, filled with inspiration.",
                              "* It kept trying to create a hologram that expressed its own emotions...",
                              "* But, as it did, it kept getting more excited about the creation...",
                              "* Its neck got longer and longer, and it added more and more light, until...",
                              "* It was rather sad to watch, but I couldn't turn away."
                           ],
                           [
                              "{#p/basic}{#npc/a}* That dog from earlier...?\n* It's at Grillby's.\n* I think.",
                              "* After work, all of the dogs go there to play cards together.",
                              "* But that dog doesn't really know how to express itself.",
                              "* So, it ends up playing alone, instead of introducing itself to the others..."
                           ],
                           [
                              "{#p/basic}{#npc/a}* Where's that dog?",
                              "* It usually comes through here every day after work..."
                           ],
                           [
                              "{#p/basic}{#npc/a}* A badly wounded dog just walked through here...",
                              "* What kind of person would beat up a cute little dog?"
                           ]
                        ][SAVE.data.n.state_starton_lesserdog],
            () =>
               SAVE.data.n.plot === 72
                  ? world.population < 6
                     ? ["{#p/basic}{#npc/a}* Don't worry, champ.\n* Most of them have probably forgiven ya by now."]
                     : ["{#p/basic}{#npc/a}* Don't worry, champ.\n* I've got this covered for ya."]
                  : roomKills().s_greater > 0
                     ? ["{#p/basic}{#npc/a}* ..."]
                     : 30 <= SAVE.data.n.plot
                        ? ["{#p/basic}{#npc/a}* The day that dog wins a game of 4-D poker, we're ALL doomed."]
                        : [
                           ["{#p/basic}{#npc/a}* Too bad for the dog, huh?"],
                           ["{#p/basic}{#npc/a}* So sad for the dog, huh?"],
                           ["{#p/basic}{#npc/a}* Have you seen it?"],
                           ["{#p/basic}{#npc/a}* Despicable."]
                        ][SAVE.data.n.state_starton_lesserdog]
         ),
         s_moonrocks1: pager.create(
            0,
            () =>
               SAVE.data.n.plot === 72
                  ? world.population < 6
                     ? [
                        "{#p/basic}{#npc/a}* Hah-\n* Incredible-",
                        "* I knew my moon rocks were the real deal all along-",
                        "* Even I'm surprised what your mean ways have led to for me-"
                     ]
                     : [
                        "{#p/basic}{#npc/a}* Tch-\n* Unbelievable-",
                        "* I can't believe I'm gonna be working with that guy-",
                        "* At least our sales figures should finally go up-"
                     ]
                  : roomKills().s_pacing > 0
                     ? ["{#p/basic}{#npc/a}* Tch-\n* Sorry, I don't sell to people like you-"]
                     : SAVE.data.b.killed_mettaton
                        ? [
                           "{#p/basic}{#npc/a}* Man-\n* Sucks what happened to Mettaton, y'know-",
                           "* But I'm willing to sell off my special edition moon rocks for the occasion-",
                           "* Unlike that guy, who just lowers the prices on his basic rocks instead-"
                        ]
                        : [
                           "{#p/basic}{#npc/a}* Tch-\n* Unbelievable-",
                           "* I got authentic moon rocks straight from a moon, unlike his phoned in crap-",
                           "* That guy's rocks don't look anything like a moon-"
                        ],
            () =>
               SAVE.data.n.plot === 72
                  ? world.population < 6
                     ? ["{#p/basic}{#npc/a}* Yeah, I have you to thank-"]
                     : ["{#p/basic}{#npc/a}* It's just good for business-"]
                  : roomKills().s_pacing > 0
                     ? ["{#p/basic}{#npc/a}* Tch-\n* Sorry, I don't sell to people like you-"]
                     : ["{#p/basic}{#npc/a}* The nerve of that guy-"]
         ),
         s_moonrocks2: pager.create(
            0,
            () =>
               SAVE.data.n.plot === 72
                  ? world.population < 6
                     ? [
                        "{#p/basic}{#npc/a}* Ehhh~\n* I just couldn't deal with it anymore, man~",
                        "* Between his badgering and your bullying, I've just about had enough~",
                        "* His moon rocks may be fake, but if it gets me peace and quiet, I'll deal~"
                     ]
                     : [
                        "{#p/basic}{#npc/a}* Pfft~\n* Shaw man~",
                        "* It's good to finally be working together on this thing~",
                        "* Now we'll both be sellin' my authentic moon rocks~"
                     ]
                  : roomKills().s_pacing > 0
                     ? ["{#p/basic}{#npc/a}* Pfft~\n* No moon rocks for you~"]
                     : SAVE.data.b.killed_mettaton
                        ? [
                           "{#p/basic}{#npc/a}* Real shame what happened to the start of the underground~",
                           "* Don't worry though~\n* Unlike that dude to my left, I won't raise my prices~",
                           "* In fact, my moon rocks are going on sale~"
                        ]
                        : [
                           "{#p/basic}{#npc/a}* Pfft~\n* Shaw man~",
                           "* That dude to my left be sellin' phoney baloney moon rocks, bruh~",
                           "* Don't believe a word he says~"
                        ],
            () =>
               SAVE.data.n.plot === 72
                  ? world.population < 6
                     ? ["{#p/basic}{#npc/a}* Shaw man~\n* Sorry it had to come to this~"]
                     : ["{#p/basic}{#npc/a}* Yeah, his were the real fake moon rocks all along~"]
                  : roomKills().s_pacing > 0
                     ? ["{#p/basic}{#npc/a}* Pfft~\n* No moon rocks for you~"]
                     : ["{#p/basic}{#npc/a}* The gall o' that dude~"]
         ),
         t_bunny: pager.create(
            0,
            () =>
               SAVE.data.n.plot === 72
                  ? [
                     "{#p/basic}{#npc/a}* My little Cinnamon's going to grow up one day...",
                     "* Since he's my brother, I only want the best for him.",
                     "* I sure hope our new world can accommodate for that."
                  ]
                  : SAVE.data.b.killed_mettaton
                     ? [
                        "{#p/basic}{#npc/a}* Ah, it's so peaceful and quiet...",
                        "* The people who usually bother me are too busy crying about something on TV!"
                     ]
                     : papreal()
                        ? [
                           "{#p/basic}{#npc/a}* Ah, it's so peaceful and quiet...",
                           "* Usually one of those skeletons chases my little Cinnamon around."
                        ]
                        : world.dead_canine
                           ? [
                              "{#p/basic}{#npc/a}* Ah, it's so peaceful and quiet...",
                              "* Usually one of those dogs chases my little Cinnamon around."
                           ]
                           : [
                              "{#p/basic}{#npc/a}* Isn't my little Cinnamon just the cutest?",
                              "* Bun-buns are so adorable...\n* Tee hee!"
                           ],
            () =>
               SAVE.data.n.plot === 72
                  ? ["{#p/basic}{#npc/a}* It's not long now, bun-bun..."]
                  : SAVE.data.b.killed_mettaton
                     ? ["{#p/basic}{#npc/a}* I wonder what could have happened..."]
                     : papreal() || world.dead_canine
                        ? ["{#p/basic}{#npc/a}* I wonder where they are..."]
                        : ["{#p/basic}{#npc/a}* Bun-bun-bun-bun-bun..."]
         ),
         t_icewolf: () =>
            SAVE.data.n.plot === 72
               ? [
                  "{#p/basic}{#npc/a}* Ice Wolf is happy today.\n* Sweet Doggo has finally been held in Ice Wolf's arms.",
                  "* Ice Wolf is now his Nice Wolf."
               ]
               : SAVE.data.b.killed_mettaton
                  ? [
                     "{#p/basic}{#npc/a}* Ice Wolf notices the morale of the town slipping.",
                     "* Ice Wolf just wants everyone to be happy."
                  ]
                  : world.dead_canine
                     ? [
                        "{#p/basic}{#npc/a}* Ice Wolf has not seen any of Ice Wolf's dog-friends today.",
                        "* Ice Wolf is sad."
                     ]
                     : SAVE.data.n.state_starton_doggo === 2
                        ? [
                           "{#p/basic}{#npc/a}* Ice Wolf has not seen sweet Doggo at all today.",
                           "* Ice Wolf is lonely."
                        ]
                        : papreal()
                           ? ["{#p/basic}{#npc/a}* Ice Wolf has not seen any skeletons today.", "* Ice Wolf is concerned."]
                           : SAVE.data.n.state_starton_doggo === 1 &&
                              SAVE.data.n.state_starton_dogs === 1 &&
                              SAVE.data.n.state_starton_greatdog === 1 &&
                              SAVE.data.n.state_starton_lesserdog === 1
                              ? [
                                 "{#p/basic}{#npc/a}* Ice Wolf is going to play fetch with Ice Wolf's dog-friends.",
                                 "* Ice Wolf is excited."
                              ]
                              : world.population < 6
                                 ? [
                                    world.bullied
                                       ? "{#p/basic}{#npc/a}* Ice Wolf is wondering why so many monsters are hurt."
                                       : "{#p/basic}{#npc/a}* Ice Wolf is wondering why so many monsters are gone.",
                                    "* Ice Wolf is concerned."
                                 ]
                                 : [
                                    "{#p/basic}{#npc/a}* Ice Wolf is wondering why Ice Wolf is Ice Wolf when there is no ice to throw around.",
                                    "* Ice Wolf is confused."
                                 ],
         t_imafraidjumitebeinagang: pager.create(
            0,
            () =>
               SAVE.data.n.plot === 72
                  ? [
                     "{#p/basic}{#npc/a}* I asked Papyrus about his floss collection, and he said he'd help me start one, too.",
                     "* Isn't he the best?"
                  ]
                  : SAVE.data.b.killed_mettaton
                     ? [
                        "{#p/basic}{#npc/a}* My MTT-brand toothbrush broke again, and I don't know how I'll fix it this time.",
                        "* ... it's not like they're going to make any more of them, now."
                     ]
                     : papreal()
                        ? [
                           "{#p/basic}{#npc/a}* I went to ask Papyrus about his floss collection, but he wasn't available.",
                           "* Would you happen to know anything about that?"
                        ]
                        : world.popmax(0) - world.population > 4
                           ? [
                              "{#p/basic}{#npc/a}* I'd lend you my MTT-brand toothbrush...",
                              "* ... but I get the feeling you'd smash it a whole bunch."
                           ]
                           : [
                              "{#p/basic}{#npc/a}* Those MTT-brand toothbrushes are so freakin' brittle.",
                              "* Thing got crushed in my hands before I could even start!"
                           ],
            () =>
               SAVE.data.n.plot === 72
                  ? [
                     "{#p/basic}{#npc/a}* I asked Papyrus about his floss collection, and he said he'd help me start one, too.",
                     "* Isn't he the best?"
                  ]
                  : SAVE.data.b.killed_mettaton
                     ? ["{#p/basic}{#npc/a}* Guess I'll have to use an actually decent toothbrush from now on."]
                     : papreal()
                        ? ["{#p/basic}{#npc/a}* Hmm...\n* I wonder how skeletons brush their teeth."]
                        : world.popmax(0) - world.population > 4
                           ? [
                              "{#p/basic}{#npc/a}* Hanging out by the bar tells you a lot about this place...\n* For better or worse."
                           ]
                           : ["{#p/basic}{#npc/a}* Then again, it was the cheapest option..."]
         ),
         t_kabakk: pager.create(
            0,
            () =>
               SAVE.data.n.plot === 72
                  ? world.population < 4
                     ? [
                        "{#p/basic}{#npc/a}* HEY!",
                        "* ... you're pretty weird.",
                        "* You put us through hell, then went through hell to save us all.",
                        "* I don't really know why.",
                        "* ...",
                        "* ...",
                        "* I DON'T KNOW HOW TO HANDLE TO THIS SITUATION!\n* YEAH!"
                     ]
                     : [
                        "{#p/basic}{#npc/a}* HEY!",
                        "* ... you're pretty cool.",
                        "* Thanks for going through hell to save us all back there.",
                        "* That was a real stand-up move.",
                        "* ...",
                        "* ...",
                        "* ALL HAIL THE NEW AUTHORITY!\n* YEAH!"
                     ]
                  : world.meanie
                     ? [
                        "{#p/basic}{#npc/a}* HEY!",
                        "* What you been up to, huh KID?",
                        "* You've got an awfully criminal look on your FACE...",
                        "* ...",
                        "* ...",
                        "* Respect my AUTHORITY!\n* YEAH!"
                     ]
                     : [
                        "{#p/basic}{#npc/a}* HEY!",
                        "* You think you can just stand there and stare at ME?",
                        "* Well, I've got some bad news for you, PAL.",
                        "* I'm an officer of the LAW.",
                        "* So, UH...",
                        "* Respect my AUTHORITY!\n* YEAH!"
                     ],
            () =>
               SAVE.data.n.plot === 72
                  ? world.population < 4
                     ? ["{#p/basic}{#npc/a}* ..."]
                     : ["{#p/basic}{#npc/a}* HAIL it, PAL."]
                  : ["{#p/basic}{#npc/a}* Respect it, PAL."]
         ),
         t_loverboy: pager.create(
            0,
            () =>
               SAVE.data.n.plot === 72
                  ? world.population < 2
                     ? [
                        "{#p/basic}{#npc/a}* Hey hey...",
                        "* ... despite what you've done, you still chose to...",
                        "* Oh... oh gee...\n* You can't see it, but I think I'm gonna cry...",
                        "* ... wait, don't hurt me!"
                     ]
                     : [
                        "{#p/basic}{#npc/a}* Hey hey...",
                        "* ... thanks to you, we're...",
                        "* Oh... oh gee...\n* You can't see it, but I think I'm gonna cry...",
                        "* ... uh, can I cry?"
                     ]
                  : papreal() || world.dead_canine || SAVE.data.b.killed_mettaton
                     ? [
                        "{#p/basic}{#npc/a}* Hey hey, why's everyone so sad around this town?",
                        "* Did something happen?"
                     ]
                     : [
                        "{#p/basic}{#npc/a}* Hey hey, nothing's ever going to change in my life!",
                        "* Ha... ha..."
                     ],
            () =>
               SAVE.data.n.plot === 72
                  ? world.population < 2
                     ? ["{#p/basic}{#npc/a}* I still think you're cool...!\n* Please don't hurt me."]
                     : ["{#p/basic}{#npc/a}* I love you...!"]
                  : papreal() || world.dead_canine || SAVE.data.b.killed_mettaton
                     ? ["{#p/basic}{#npc/a}* Maybe it's just my imagination."]
                     : ["{#p/basic}{#npc/a}* Or maybe I'm just crazy."]
         ),
         t_politics: pager.create(
            0,
            () =>
               SAVE.data.n.plot === 72
                  ? [
                     "{#p/basic}{#npc/a}* I heard the king revealed the truth about the humans he supposedly killed.",
                     "* Everyone felt so bad that they didn't know.\n* They all gave him a big hug.",
                     "* Then they took the humans and adopted them for themselves.",
                     "* Now the humans will get to live their lives with us.",
                     "* Thaaaaaat's politics!"
                  ]
                  : SAVE.data.b.killed_mettaton
                     ? [
                        "{#p/basic}{#npc/a}* Hmmm, it's weird how everybody's been talking about TV lately.",
                        "* What happened...?\n* I hope this doesn't affect our political system..."
                     ]
                     : papreal()
                        ? [
                           "{#p/basic}{#npc/a}* Hmmm, usually Papyrus goes to meet with Undyne about now.",
                           "* Where is he...?\n* I can feel our political system crumbling apart..."
                        ]
                        : world.popmax(0) - world.population > 4
                           ? [
                              "{#p/basic}{#npc/a}* This town has no real police.\n* But maybe the fake police will scare off the bullies.",
                              "* The politics carry on..."
                           ]
                           : world.trueKills > 0 || SAVE.data.n.bully > 0
                              ? [
                                 "{#p/basic}{#npc/a}* This town has no mayor.",
                                 "* But, if anything happens, a skeleton will tell a fish lady about it.",
                                 "* Thaaaaaat's politics!"
                              ]
                              : [
                                 "{#p/basic}{#npc/a}* This town is always so dreary.",
                                 "* But, if things keep going the way they are, maybe that'll change.",
                                 "* Is that politics?"
                              ],
            () =>
               SAVE.data.n.plot === 72
                  ? ["{#p/basic}{#npc/a}* You see?\n* Politics isn't all bad..."]
                  : SAVE.data.b.killed_mettaton || papreal() || world.popmax(0) - world.population > 4
                     ? ["{#p/basic}{#npc/a}* Politics..."]
                     : world.trueKills > 0 || SAVE.data.n.bully > 0
                        ? ["{#p/basic}{#npc/a}* Politics."]
                        : ["{#p/basic}{#npc/a}* Politics?"]
         ),
         t_rabbit: pager.create(
            0,
            () =>
               SAVE.data.n.plot === 72
                  ? [
                     "{#p/basic}{#npc/a}* Long ago, I heard they didn't have such fancy things as \"force fields.\"",
                     "* All I can say... is that it feels good to be back."
                  ]
                  : SAVE.data.b.killed_mettaton
                     ? [
                        "{#p/basic}{#npc/a}* Long ago, I heard TV celebrities were all over the place.",
                        "* Now, they're looking to become a thing of the past."
                     ]
                     : papreal()
                        ? [
                           "{#p/basic}{#npc/a}* Long ago, I heard the outpost was a dreary place.",
                           "* At this rate... we'll be back to having that same problem."
                        ]
                        : [
                           "{#p/basic}{#npc/a}* Long ago, I heard they split the town into two halves.",
                           "* I wonder what it looked like before...?"
                        ],
            () =>
               SAVE.data.n.plot === 72
                  ? ["{#p/basic}{#npc/a}* Thanks for bringing us back."]
                  : SAVE.data.b.killed_mettaton
                     ? ["{#p/basic}{#npc/a}* It's too bad we can't just magically bring them back."]
                     : papreal()
                        ? ["{#p/basic}{#npc/a}* It's too bad we can't just magically fix these things."]
                        : ["{#p/basic}{#npc/a}* We may never know."]
         ),
         t_smileguy: pager.create(
            0,
            () =>
               SAVE.data.n.plot === 72
                  ? world.population < 2
                     ? [
                        "{#p/basic}{#npc/a}* So we're free, huh?",
                        "* I guess I don't have to keep smiling anymore...",
                        "* ... strange.\n* I don't feel like not smiling, but smiling also seems wrong.",
                        "* This is too deep.\n* I'm sticking to what I know."
                     ]
                     : [
                        "{#p/basic}{#npc/a}* So we're free, huh?",
                        "* I guess I don't have to keep smiling anymore...",
                        "* ... huh.\n* Then why can't I stop?",
                        "* For some reason, I don't want to stop smiling now!"
                     ]
                  : papreal() || SAVE.data.b.killed_mettaton
                     ? ["{#p/basic}{#npc/a}* Just now, I felt my smile falter for a moment.", "* What's wrong?"]
                     : [
                        "{#p/basic}{#npc/a}* We all know things haven't gone how we'd hoped, but we smile anyway.",
                        "* Why?",
                        "* This is our reality, so why be morose about it?"
                     ],
            () =>
               SAVE.data.n.plot === 72
                  ? world.population < 2
                     ? ["{#p/basic}{#npc/a}* Smile smile."]
                     : ["{#p/basic}{#npc/a}* Smile smile!"]
                  : papreal() || SAVE.data.b.killed_mettaton
                     ? ["{#p/basic}{#npc/a}* Smile smile?"]
                     : ["{#p/basic}{#npc/a}* Smile smile."]
         ),
         t_wisconsin: pager.create(
            0,
            () =>
               SAVE.data.n.plot === 72
                  ? world.population < 2
                     ? [
                        "{#p/basic}{#npc/a}* Freedom...",
                        "* That means I don't have to worry about getting beat up anymore.",
                        "* Haha."
                     ]
                     : [
                        "{#p/basic}{#npc/a}* Freedom...",
                        "* That means I don't have to worry about cracking jokes anymore.",
                        "* ...",
                        "* What does a mouse do when it finally gets the cheese?",
                        "* ...",
                        "* Well...",
                        "* It probably doesn't worry about cracking jokes, that's for sure.",
                        "* Haha."
                     ]
                  : world.dead_dog || world.dead_skeleton || world.population < 6 || SAVE.data.b.killed_mettaton
                     ? [
                        "{#p/basic}{#npc/a}* It just feels like...",
                        "* Like everything is getting worse, and worse...\n* And worse."
                     ]
                     : [
                        "{#p/basic}{#npc/a}* Everyone is always laughing and cracking jokes, trying to forget our modern crises...",
                        "* Dreariness.\n* Crowding.\n* Lack of a homeworld.",
                        "* I would join them, but I just don't feel like being funny."
                     ],
            () =>
               SAVE.data.n.plot === 72
                  ? world.population < 2
                     ? ["{#p/basic}{#npc/a}* Sorry.\n* That wasn't funny."]
                     : [
                        "{#p/basic}{#npc/a}* Sorry.\n* I guess you could say...",
                        "* That joke was a little too \"cheesy.\""
                     ]
                  : world.dead_dog || world.dead_skeleton || world.population < 6 || SAVE.data.b.killed_mettaton
                     ? ["{#p/basic}{#npc/a}* And worse..."]
                     : ["{#p/basic}{#npc/a}* At least I'm not making puns."],
            () =>
               SAVE.data.n.plot === 72
                  ? world.population < 2
                     ? ["{#p/basic}{#npc/a}* You should leave before I stop being nice to you."]
                     : ["{#p/basic}{#npc/a}* Yes.\n* That was a pun.\n* I'm a pun mouse now."]
                  : world.dead_dog || world.dead_skeleton || world.population < 6 || SAVE.data.b.killed_mettaton
                     ? ["{#p/basic}{#npc/a}* And worse still..."]
                     : ["{#p/basic}{#npc/a}* For now."]
         ),
         t_zorren: pager.create(
            0,
            () => [
               "{#p/basic}{#npc/a}* (Oh, hey, it's me, Zorren.)",
               ...(SAVE.data.n.plot === 72
                  ? world.population < 4
                     ? [
                        "* (We, uh, can't thank you enough for doing what you did.)",
                        "* (But...)\n* (You've, uh, not exactly been a model citizen.)",
                        "* (Why'd you have to go and, make it all so complicated?)"
                     ]
                     : [
                        "* (We, uh, can't thank you enough for doing what you did.)",
                        "* (But...)\n* (You've, uh, probably heard enough of that, by now.)",
                        "* (So I'll let you get back to, what you were doing.)"
                     ]
                  : world.meanie
                     ? SAVE.data.b.s_state_capstation
                        ? [
                           "* (Something's, like, different about you now.)",
                           "* (...)",
                           "* (Yeah, you know, uh, I don't really like you anymore.)",
                           "* (I'd take back they key I gave you, if only I could.)"
                        ]
                        : [
                           "* (You uh, got a problem with our, uh, police force, or...?)",
                           "* (...)",
                           "* (Yeah, you know, uh, I don't really like you all that much.)",
                           "* (There's just, something off, particularly about you.)"
                        ]
                     : [
                        ...(SAVE.data.b.oops
                           ? [
                              "* (You uh, got a problem with our, uh, police force, or...?)",
                              "* (No?)\n* (Hey, thanks for uh, not doing that.)"
                           ]
                           : [
                              "* (Y'know, you seem like someone who likes to show respect.)",
                              "* (So, thanks for, uh, doing that.)"
                           ]),
                        ...(SAVE.data.b.s_state_capstation
                           ? []
                           : ((SAVE.data.b.s_state_capstation = true),
                              [
                                 "* (In fact...)",
                                 "* (Here, kid.)\n* (Have a key, on us.)",
                                 "{#s/equip}{#p/human}* (The Rusty Key was added to your keyring.)",
                                 "* (Check your CELL to see all acquired keys.)",
                                 "{#p/basic}{#npc/a}* (We've, uh, got an armory somewhere, I think.)"
                              ])),
                        ...(SAVE.data.b.oops
                           ? [
                              "* (Psst...)\n* (Just between us, Kabakk and I built this station ourselves.)",
                              "* (Pretty cool, huh?)"
                           ]
                           : [
                              "* (Psst...)\n* (Just between us, Kabakk and I built this station ourselves.)",
                              "* (Pretty cool, huh?)"
                           ])
                     ])
            ],
            () =>
               SAVE.data.n.plot === 72
                  ? world.population < 4
                     ? ["{#p/basic}{#npc/a}* (Do better, my friend.)\n* (Do better.)"]
                     : ["{#p/basic}{#npc/a}* (Carry on, my friend.)\n* (Carry on.)"]
                  : world.meanie
                     ? ["{#p/basic}{#npc/a}* (Get outta here.)"]
                     : SAVE.data.b.oops
                        ? ["{#p/basic}{#npc/a}* (Yeah, we're not real police.)"]
                        : [
                           "{#p/basic}{#npc/a}* (We may not be real police, but people like you are worth protecting and serving.)"
                        ]
         )
      },
      objinter: {
         ctower0: () => [
            "{#p/human}* (You inspect the terminal.)",
            ...(SAVE.data.b.svr
               ? [
                  "{#p/human}* (The note describes reducing the total to zero by adding or subtracting powers of ten.)"
               ]
               : [
                  "{#p/basic}* There are written instructions tacked onto the side...",
                  "<33>* 上面的字迹全是狂草，你根本\n  看不清楚。\n* 除了一个字，“零”。"
               ])
         ],
         ctower1: () =>
            SAVE.data.b.svr
               ? ["{#p/human}* (But you already completed this puzzle beforehand.)"]
               : SAVE.data.n.plot === 72
                  ? ["{#p/basic}* The terminal's unlocked state is now permanent."]
                  : ["{#p/basic}* The terminal is now in an unlocked state."],
         microwave0: ["{#p/human}* (You look behind the microwave...)", "{#p/basic}* Nothing useful here."],
         microwave1: () =>
            SAVE.data.b.svr
               ? [
                  "{#p/human}* (You look behind the microwave...)",
                  "{#s/equip}{#p/human}* (You pulled the switch.)"
               ]
               : [
                  "{#p/human}* (You look behind the microwave...)",
                  "{#p/basic}* There's a switch here...",
                  "{#s/equip}{#p/human}* (You pulled the switch.)"
               ],
         microwave2: () =>
            SAVE.data.b.svr
               ? [
                  "{#p/human}* (You look behind the microwave...)",
                  "{#p/human}* (But you already flipped the switch here.)"
               ]
               : ["{#p/human}* (You look behind the microwave...)", "{#p/basic}* Nothing new back here."],
         microwave3: () =>
            SAVE.data.b.svr
               ? ["{#p/human}* (But you didn't notice anything of note about this appliance.)"]
               : [
                  "{#p/basic}* A standard-issue CITADEL dielectric heater, circa 260X.",
                  "* It's a microwave.\n* Can't be over a decade old."
               ],
         microwave4: () => [
            "{#p/basic}* It seems to be projecting some kind of gravity field.",
            ...(SAVE.data.b.oops ? ["{#p/basic}* I wonder... if there's a switch somewhere..."] : [])
         ],
         papmail1: () =>
            SAVE.data.b.svr
               ? ["{#p/human}* (But you didn't have any mail to send.)"]
               : [
                  "{#p/basic}* This mailbox is labelled \"PAPYRUS.\"",
                  choicer.create("* （看里边吗？）", "是", "否")
               ],
         papmail2: pager.create(
            0,
            () =>
               SAVE.data.n.plot === 72
                  ? [
                     "{#p/human}* (You look inside...)",
                     world.runaway
                        ? "{#p/basic}* It's even emptier than before."
                        : "{#p/basic}* It's not empty?"
                  ]
                  : [
                     "{#p/human}* (You look inside...)",
                     "{#p/basic}* It's empty.",
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
                     "{#p/human}* (You look inside...)",
                     world.runaway
                        ? "{#p/basic}* It's even emptier than before."
                        : "{#p/basic}* It's not empty?"
                  ]
                  : ["{#p/human}* (You look inside...)", "{#p/basic}* It's empty."]
         ),
         papmail3: ["{#p/human}* (You decide not to look.)"],
         puzzle3: () => [
            "{#p/human}* (You inspect the terminal.)",
            ...(SAVE.data.b.svr
               ? ["{#p/human}* (The modification log describes the completed state of the puzzle.)"]
               : [
                  "{#p/basic}* There is a log of previous modifications...",
                  "* \"Pattern has been solved!\"\n* \"You may now exit.\""
               ])
         ],
         puzzlechip: () =>
            SAVE.data.b.svr
               ? ["{#p/human}* (But you already completed this puzzle beforehand.)"]
               : ["{#p/basic}* The terminal is now in an unlocked state."],
         spagtable0: ["{#p/basic}* It's an unused plate."],
         spagtable1: [
            "{#p/human}* (You gaze upon the mouth- watering spaghetti.)",
            "{#p/human}* (It appears to be just beyond your reach.)"
         ],
         spagtable2: ["{#p/human}* (You got the Spaghetti.)"],
         spagtable2b: ["{#p/human}* (You're carrying too much to take that.)"],
         spagtable3: () =>
            SAVE.data.b.svr
               ? ["{#p/human}* (You feel appreciative towards this plate for the food it served you.)"]
               : world.darker
                  ? ["{#p/basic}* Why bother.\n* It's just a simple plate."]
                  : ["{#p/basic}* Once the home of a truly out- of-this-world creation."],
         xtower1: pager.create(0, () => [
            "{#p/human}* (You inspect the terminal.)",
            ...(SAVE.data.b.svr
               ? [
                  [
                     "{#p/asriel1}{#f/13}* The power's gone.\n* But it makes sense they'd shut this off.",
                     "{#f/17}* Wouldn't want anyone to get distracted and miss the transport, right?"
                  ],
                  [
                     "{#p/asriel1}{#f/13}* To be fair, I don't think they'd actually let someone miss it.",
                     "{#f/13}* Dr. Alphys probably has some kind of thing to scan for SOULs, so...",
                     "{#f/17}* They'd know if anyone was left behind.",
                     "{#f/15}* Makes me wonder if they can see us out here right now..."
                  ],
                  ["{#p/asriel1}{#f/17}* Don't worry, Frisk.\n* The new homeworld will have plenty of games."]
               ][Math.min(asrielinter.xtower1++, 2)]
               : [
                  "{#p/basic}* It's a game terminal...",
                  ...(SAVE.data.n.plot === 72 || world.postnoot
                     ? ["{#p/basic}* The power supply has been cut."]
                     : ["{#p/basic}* \"Shoot targets as fast as you can! Use [Z] to shoot.\""])
               ])
         ])
      },
      papbooks1: pager.create(
         0,
         () =>
            SAVE.data.b.svr
               ? ["{#p/human}* (The books on this bookshelf consist of puzzler's guides and children's stories.)"]
               : [
                  "{#p/basic}* The bookshelf is filled with complex tomes about puzzle creation.",
                  "* And children's books.",
                  ...(roomready()
                     ? [
                        "<18>{#p/papyrus}我把一部分\n我最喜欢的书\n都放在那个书架上。",
                        "<18>{#f/4}比如《为聪明人\n设计的高级\n谜题结构》。",
                        "<18>{#f/0}我另一本最爱呢？",
                        "<18>{#f/4}是《和毛茸茸的兔子\n捉迷藏》。",
                        "<18>{#f/8}结局每次都会\n打动到我！"
                     ]
                     : [])
               ],
         () =>
            SAVE.data.b.svr
               ? ["{#p/human}* (The books on this bookshelf consist of puzzler's guides and children's stories.)"]
               : ["{#p/basic}* Complex manuals and children's books."]
      ),
      papbooks2: pager.create(
         1,
         [
            "{#p/human}* (You pick out a book...)",
            "{#p/basic}* \"The cornerstone of a puzzle's interactive value is the player's affectation.\"",
            "* \"The tacit drive within every player to explore, progress, and complete a given task.\"",
            "* \"A puzzle that challenges and engages these motivations will ensure...\"",
            "* \"The player remains focused and on task until the very end.\"",
            "{#p/human}* (You put the book back on the shelf.)"
         ],
         [
            "{#p/human}* (You pick out a book...)",
            "{#p/basic}* \"'Peek-A-Boo!' said the human, appearing from behind the wall.\"",
            "* \"The fluffy bunny, surprised, looked at the human excitedly.\"",
            "* \"Then, the human moved away... no longer able to see them, the fluffy bunny was sad.\"",
            "* \"It shook, thinking about how lonely it'd be.\"",
            "* \"It wanted to cry, thinking it'd been abandoned for all eternity...\"",
            "* \"But then, the human appeared once again, and all was right with the world.\"",
            "* \"The human and the bunny gave each other a big, fluffy hug.\"",
            "{#p/human}* (You put the book back on the shelf.)"
         ],
         () =>
            world.runaway
               ? [
                  "{#p/human}* (You pick out a book...)",
                  "<23>{#p/papyrusnt}“亲爱的日计：\n力场已经被摧毁了。”",
                  "<23>\"FRISK, THE HUMAN WHO CAME TO THE OUTPOST JUST A FEW DAYS AGO...\"",
                  "<23>\"IS NOW THE SUBJECT OF FEAR AMONG EVERYONE ON THE OUTPOST.\"",
                  "<23>\"WE'RE ALL LEAVING RIGHT AWAY, BEFORE THEY WAKE UP.\"",
                  "<23>\"STILL, A PART HOPES THEY FIND THEIR WAY OFF THE OUTPOST, TOO.\"",
                  "<23>\"EVERYONE ELSE JUST SEEMS CONTENT LEAVING THEM TO DIE.\"",
                  "{#p/human}* (You put the book back on the shelf.)"
               ]
               : SAVE.data.n.plot === 72
                  ? [
                     "{#p/human}* (You pick out a book...)",
                     "<23>{#p/papyrusnt}“亲爱的日计：\n力场已经被摧毁了。”",
                     "<23>\"FRISK, THE HUMAN WHO CAME TO THE OUTPOST JUST A FEW DAYS AGO...\"",
                     "<23>\"TOOK ON IMPOSSIBLE ODDS TO SAVE US FROM DESTRUCTION.\"",
                     "<23>\"MAYBE THIS IS WHAT'LL INSPIRE SANS TO MOVE UP IN THE WORLD.\"",
                     "<23>\"I ONLY MENTION IT BECAUSE, I NEVER KNEW HIS SENTRY JOB...\"",
                     "<23>\"MEANT DOING SO LITTLE ACTUAL WORK.\"",
                     "{#p/human}* (You put the book back on the shelf.)"
                  ]
                  : [
                     "{#p/human}* (You pick out a book...)",
                     "<23>{#p/papyrusnt}“亲爱的日计：\n衫斯刚刚被任命为\n正式的皇家哨兵。”",
                     "<23>“最开始，\n我对他非常地不解...”",
                     "<23>“毕竟，为什么一个\n这么懒的人会想\n承担这个工作？”",
                     "<23>“算了，\n我就不去追问什么了。”",
                     "<23>“事实上，我为他感到\n非常骄傲！！！”",
                     "<23>“只有时间才能证明\n这会带来什么\n伟大的事情。”",
                     "{#p/human}* (You put the book back on the shelf.)"
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
               ? "{#p/human}* (You move towards the computer...)"
               : "{#p/basic}* The computer's web browser is opened to a social media site.",
            choicer.create("* （登录帕派瑞斯的账号吗？）", "是", "否")
         ],
         () => [
            SAVE.data.b.svr
               ? "{#p/human}* (You move towards the computer...)"
               : "{#p/basic}* The computer's web browser is opened to a social media site.",
            choicer.create("* （登录帕派瑞斯的账号吗？）", "是", "否")
         ]
      ),
      papcomputer2: ["{#p/human}* (You decide not to log in.)"],
      papcomputer3: {
         a: "酷炫骷髅95",
         b: "粉丝数 -2",
         c: "这个账号属于\n伟大的\n帕派瑞斯。\n只发高质量\n动态！",
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
                  a: "艾菲斯",
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
                        a: "纳普斯特22",
                        b: "今天",
                        c: "这就是为什么我再也不上网了...\n没有什么有意义的事情发生"
                     }
                     : world.genocide
                        ? {
                           a: "纳普斯特22",
                           b: "今天",
                           c: "but i'm a ghost..."
                        }
                        : world.dead_skeleton
                           ? {
                              a: "纳普斯特22",
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
                     a: "艾菲斯",
                     b: "今天",
                     c: "whoops, i forgot to shut\noff the server"
                  }
                  : SAVE.data.n.plot < 34
                     ? {
                        a: "壮鱼91",
                        b: "昨天",
                        c: "嗯... 你不是每天都这么说吗，\n帕派瑞斯？"
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
                        c: "今天就是我要抓到人类的日子！\n我能从骨子里感觉到！"
                     }
                     : world.genocide
                        ? {
                           a: "纳普斯特22",
                           b: "今天",
                           c: "umm... is there anything\ni can do to help? things\nare getting worse..."
                        }
                        : {
                           a: "纳普斯特22",
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
            ? ["{#p/human}* (You can't seem to find anything in the couch.)"]
            : ["{#p/basic}* It's been cleaned out."],
      papcouch1: pager.create(
         0,
         () => [
            "{#p/human}* (You hear a jangling sound within the couch.)",
            SAVE.data.b.svr
               ? "{#p/human}* (It seems a cache of coins was left here...)"
               : "{#p/basic}* There are a bunch of loose coins inside...",
            choicer.create("* (Take the coins?)", "是", "否")
         ],
         () => [
            SAVE.data.b.svr
               ? "{#p/human}* (The coins within haven't moved from where they were.)"
               : "{#p/basic}* The coins are still here.",
            choicer.create("* (Take the coins?)", "是", "否")
         ]
      ),
      papcouch2: ["{#p/human}* (You decide not to take anything.)"],
      papcouch3: ["{#p/human}* (You found 10G.)"],
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
            "<18>{#p/papyrus}{#f/5}所以，呃...",
            "<18>{#f/5}如果你看完了\n所有东西...",
            SAVE.data.b.flirt_papyrus
               ? "<18>{#f/6}那你想开始\n约会吗？"
               : "<18>{#f/6}那你想开始\n消遣吗？",
            choicer.create("* （你要怎么回答？）", "是", "否")
         ],
         ["<18>{#p/papyrus}{#f/6}准备开始了吗？", choicer.create("* （你要怎么回答？）", "是", "否")]
      ),
      papdate5a: () => [
         SAVE.data.b.flirt_papyrus
            ? "<18>{#p/papyrus}好！！！\n约会开始！！！"
            : "<18>{#p/papyrus}好！！！\n我们开始消遣叭！！！"
      ],
      papdate5b: ["<18>{#p/papyrus}慢慢看，不着急。\n我会等你的。"],
      papdate6: () => [
         SAVE.data.b.flirt_papyrus
            ? "{#p/story}µµµµµµµµ DATING µµ START!"
            : "{#p/story}µµµµµµµµ HANGOUT µ START!"
      ],
      papdate7: () => [
         "<15>{#p/papyrus}{#f/10}我们！！",
         SAVE.data.b.flirt_papyrus ? "<15>{#f/20}开始约会了！！" : "<15>{#f/20}开始消遣了！！",
         "<15>{#f/24}我实际上之前\n从来没做过\n这种事。",
         "<15>{#f/10}但别担心！！！",
         "<15>{#f/20}我的（个人）词典里\n可是有“准备”\n这个词的！"
      ],
      papdate8: () => [
         "<15>{#f/20}你问我手里\n拿的是什么？",
         SAVE.data.b.flirt_papyrus
            ? "<15>{#p/papyrus}{#f/10}这是本官方的\n约会指南，我直接\n从图书倌借来的！"
            : "<15>{#p/papyrus}{#f/10}这是本官方的\n消遣指南，我直接\n从图书倌借来的！",
         "<15>{#f/20}有了这个，\n我们一定会玩得\n很开心！"
      ],
      papdate9: () => [
         "<15>{#p/papyrus}{#f/25}让我看看...",
         SAVE.data.b.flirt_papyrus
            ? "<15>{#f/25}第一步：\n按下C或CTRL键\n打开{@fill=#f00}约会面板{@fill=#000}。"
            : "<15>{#f/25}第一步：\n按下C或CTRL键\n打开{@fill=#f00}消遣面板{@fill=#000}。"
      ],
      papdate10: () => [
         "<15>{#p/papyrus}{#f/24}...等下。",
         "<15>{#f/22}你早就\n按好了！？！？",
         SAVE.data.b.flirt_papyrus
            ? "<15>{#f/11}哇，你肯定\n很爱我吧！"
            : "<15>{#f/11}哇，你肯定\n很喜欢我吧！",
         "<15>{#f/10}那么，\n开始第二步！"
      ],
      papdate11: [
         "<15>{#p/papyrus}{#f/24}...",
         "<15>{#f/24}呃，反正\n我们也不需要。",
         "<15>{#f/20}来看第二步！"
      ],
      papdate12: [
         "<15>{#p/papyrus}{#f/11}哇，我感觉\n充满了信息！",
         "<15>{#f/24}事实上，我认为\n我们已经可以\n进入第二步了..."
      ],
      papdate13: () => [
         SAVE.data.b.flirt_papyrus
            ? "<15>{#p/papyrus}{#f/25}第二步：\n邀请约会对象。"
            : "<15>{#p/papyrus}{#f/25}第二步：\n邀请消遣对象。"
      ],
      papdate13a: () => [
         "<15>{#f/24}“咳咳。”",
         "<15>{#f/20}人类！\n我，伟大的\n帕派瑞斯...",
         SAVE.data.b.flirt_papyrus
            ? "<15>{#f/10}想和你\n进行一场\n约会！"
            : "<15>{#f/10}WOULD LIKE TO HANG OUT WITH YOU!"
      ],
      papdate14: [choicer.create("* （你要怎么回答？）", "是", "否")],
      papdate15a: ["<15>{#p/papyrus}{#f/12}真-真的？？？", "<15>{#f/11}哇！！！"],
      papdate15a1: ["<15>{#f/24}我想，这意味着\n是时候开始\n第三步了..."],
      papdate15b: ["<15>{#p/papyrus}{#f/21}哦...", "<15>{#f/27}还-还好，\n上面只说了\n要邀请。"],
      papdate15c: ["<15>{#f/24}那无论如何，\n是时候开始\n第三步了..."],
      papdate16: ["<15>{#p/papyrus}{#f/25}第三步：\n穿上漂亮的衣服\n表示你在乎。"],
      papdate16a: ["<15>{#p/papyrus}{#f/24}...", "<15>{#f/24}等一下。"],
      papdate17: () => [
         "<15>{#f/24}漂亮的衣服...",
         (
            {
               spacesuit: "<15>{#f/26}你身上的\n那件旧宇航服...",
               halo: "<15>{#f/26}你头上的\n那个光环...",
               eye: "<15>{#f/26}你周围的\n力场...",
               temyarmor: "<15>{#f/26}你现在穿戴着的\n防具...",
               goggles: "<15>{#f/26}你头上的\n那个玩意...",
               visor: "<15>{#f/26}THAT VISOR IN FRONT OF YOUR EYES...",
               sonic: "<15>{#f/26}THAT ODD DEVICE YOU'RE CARRYING...",
               heart_locket: "<15>{#f/26}THAT LOCKET AROUND YOUR NECK..."
            } as Partial<CosmosKeyed<string>>
         )[SAVE.data.s.armor] || "<15>{#f/26}你身上的\n那个东西...",
         "<15>{#f/20}你现在就\n穿着衣服呢！！！",
         "<15>{#f/24}不仅如此...",
         "<15>{#f/20}今天早些时候，\n你也穿着衣服呢！"
      ],
      papdate17a: () => [
         "<15>{#f/12}不会吧...！\n这是不是说？？？",
         SAVE.data.b.flirt_papyrus
            ? "<15>{#f/13}你打从一开始\n就打算和我\n约会了？？？"
            : "<15>{#f/13}你打从一开始\n就打算和我\n做朋友了？？？"
      ],
      papdate18a: () => [
         "<15>{#p/papyrus}{#f/22}不！！",
         "<15>{#f/22}这一切都在你\n计划之内！！！",
         ...(SAVE.data.b.flirt_papyrus
            ? [
               "<15>{#f/22}你可能都比我更\n擅长约会！！！",
               "<15>不-不！！！你的\n{@fill=#003cff}约会能量{@fill=#000}...！！！"
            ]
            : [
               "<15>{#f/22}你可能都比我更\n擅长消遣！！！",
               "<15>不-不！！！你的\n{@fill=#003cff}友谊能量{@fill=#000}...！！！"
            ])
      ],
      papdate18b: () => [
         "<15>{#p/papyrus}{#f/24}哦...",
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
      papdate19: ["<15>{#p/papyrus}{#f/15}捏！", "<15>{#f/15}捏嘿嘿！！！"],
      papdate20: () => [
         "<15>{#p/papyrus}{#f/15}别以为你已经\n打败我了!",
         "<15>{#f/20}我，伟大的\n帕派瑞斯...",
         SAVE.data.b.flirt_papyrus
            ? "<15>{#f/20}之前从来没有\n在约会上输过..."
            : "<15>{#f/20}之前从来没有\n在消遣上输过...",
         "<15>{#f/15}以后也不会！！",
         "<15>{#f/10}我很容易就\n可以跟上你的\n节奏！！！",
         "<15>{#f/24}实际上...",
         "<15>{#f/20}我在平常的\n衣服下面...",
         "<15>{#f/20}一直穿着我的\n“特别”服装！！",
         "<15>{#f/15}你等着！！"
      ],
      papdate21: ["<15>{#p/papyrus}{#f/15}你觉得我的\n秘密穿搭\n怎么样？"],
      papdate22: [choicer.create("* （你要怎么回答？）", "很棒", "很差劲")],
      papdate23a: ["<15>{#p/papyrus}{#f/13}不！！！", "<15>{#f/13}发自内心的\n赞美...！"],
      papdate23b: ["<15>{#p/papyrus}{#f/13}不！！！", "<15>{#f/13}虽然是批评，\n但是好诚实...！"],
      papdate24: [
         "<15>{#p/papyrus}{#f/24}然而...",
         "<15>{#f/20}你根本不明白\n这身衣服背后\n{@fill=#f00}隐藏的力量{@fill=#000}！",
         "<15>{#f/26}因此..."
      ],
      papdate24a: () => [
         "<15>{#f/15}你刚才的回答\n无效！！",
         SAVE.data.b.flirt_papyrus
            ? "<15>{#f/15}这场约会不会\n再有更多\n进展了！"
            : "<15>{#f/15}这场消遣不会\n再有更多\n进展了！",
         "<15>{#f/24}除非...",
         "<15>{#f/20}你能找到我的\n{@fill=#f00}秘密{@fill=#000}。",
         "<15>{#f/15}但那是不会\n发生的！！"
      ],
      papdate24b: "* 移动并用[Z]交互。",
      papdate25: [
         
         "<15>{#p/papyrus}{#f/21}我头上的\n假发...？",
         "<15>{#f/16}我头上的假发。",
         "<15>{#f/10}我头上的...\n假发！！！",
         "<15>{#f/10}捏嘿嘿！\n意义重大的\n回答！"
      ],
      papdate25a: [
         "<15>{#p/papyrus}{#f/21}OVERWHELMED BY THE SIGHT OF MY \"STELLAR\" OUTFIT?",
         "<15>{#f/24}NO, NO, I UNDERSTAND.",
         "<15>{#f/20}BUT YOU CAN'T BACK DOWN NOW!!!"
      ],
      papdate25b: [
         "<15>{#p/papyrus}{#f/26}这件衬衫上\n本来没有写着\n“闪亮”的...",
         "<15>{#f/20}但是我\n改良了一下！",
         "<15>{#f/10}专家提示：\n所有的衣服都\n可以通过这种\n方式改良。",
         "<15>{#f/20}...但这里可\n没藏什么秘密！\n再试试吧！"
      ],
      papdate25c: [
         "<15>{#p/papyrus}{#f/24}我懂，我懂。",
         "<15>{#f/24}你喜欢用一颗\n漂浮的心\n感受我的\n手臂靠枕。",
         "<15>{#f/20}但是谁又\n不喜欢呢！？\n再试试吧！"
      ],
      papdate25d: [
         "<15>{#p/papyrus}{#f/13}你握住我的手，\n想让我把答案\n告诉你...？",
         "<15>{#f/14}我-我不，\n我必须忍住！！",
         "<15>{#f/20}再试试吧！"
      ],
      papdate25e: [
         "<15>{#p/papyrus}{#f/26}PILLOWS OR NOT, THERE'S NO SECRET TO MY LEGS.",
         "<15>{#f/10}ONLY HARD WORK AND PERSEVERANCE!",
         "<15>{#f/20}再试试吧！"
      ],
      papdate25f: [
         "<15>{#p/papyrus}{#f/24}这里的“潮流”\n或许确实\n无人能敌...",
         "<15>{#f/20}但要是期待这里\n有什么秘密是\n完全不可能的！",
         "<15>{#f/20}再试试吧！"
      ],
      papdate25g: [
         "<15>{#p/papyrus}{#f/20}啊这个！\n这是我的\n顶级运动服！",
         "<15>{#f/24}你在这里可\n找不到任何\n秘密，因为...",
         "<15>{#f/20}我就没有口袋\n可以装！！！",
         "<15>{#f/20}再试试吧！"
      ],
      papdate25h: () => [
         "<15>{#p/papyrus}{#f/24}我的肩膀...",
         "<15>{#f/10}你是想让我\n把你背到\n肩上吗？？",
         SAVE.data.b.flirt_papyrus
            ? "<15>{#f/24}如果我们没在\n忙着约会的话，\n我肯定会给你。"
            : "<15>{#f/24}如果我们没在\n忙着消遣的话，\n我肯定会给你。",
         "<15>{#f/20}所以现在不行！\n再试试吧！"
      ],
      papdate25i: [
         "<15>{#p/papyrus}{#f/14}你认真吗？？",
         "<15>{#f/19}我没想就这么\n“告诉”你\n秘密的...",
         "<15>{#f/20}你还必须得\n再加把劲！"
      ],
      papdate25j: () =>
         calcLV() > 2
            ? [
               "<15>{#p/papyrus}{#f/24}IF YOUR {@fill=#f00}LV{@fill=#000} IS THIS HIGH, THEN...",
               SAVE.data.b.flirt_papyrus
                  ? "<15>{#f/28}YOUR {@fill=#f00}LOVE{@fill=#000} FOR ME MUST BE EVEN GREATER THAN I THOUGHT!"
                  : "<15>{#f/28}YOU'VE GOT MORE EXPERIENCE WITH {@fill=#f00}LOVE{@fill=#000} THAN I THOUGHT!",
               "<15>{#f/24}STILL, THAT'S YOUR SECRET, NOT MINE.",
               "<15>{#f/20}再试试吧！"
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
                  "<15>{#f/20}再试试吧！"
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
                     "<15>{#f/20}再试试吧！"
                  ]
                  : [
                     "<15>{#p/papyrus}{#f/24}AN {@fill=#f00}LV{@fill=#000} OF ZERO?",
                     "<15>{#f/26}OKAY, THAT'S WEIRD.",
                     "<15>{#f/21}SANS TOLD ME A HUMAN'S {@fill=#f00}LOVE{@fill=#000} STARTS AT ONE.",
                     "<15>{#f/24}HMM...",
                     "<15>{#f/24}IS THIS YOUR SECRET?",
                     "<15>{#f/20}WELL, THIS IS SUPPOSED TO BE ABOUT MY SECRET!",
                     "<15>{#f/20}再试试吧！"
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
         "<15>{#f/20}再试试吧！"
      ],
      papdate25l: [
         "<15>{#p/papyrus}{#f/20}SO THAT'S HOW IT IS...",
         "<15>{#f/24}YOU THINK BY SCRATCHING MY NECK...",
         "<15>{#f/21}AND CALLING ME A \"GOOD BOY...\"",
         "<15>{#f/24}I'LL BARK THE ANSWER AT YOU LIKE A DOG.",
         "<15>{#f/20}LAST I CHECKED, I WAS A SKELETON!\nSO TRY AGAIN!"
      ],
      papdate26: () => [
         "<15>{#p/papyrus}{#f/27}那-那好吧...",
         "<15>{#f/27}你找到我的\n秘密了！",
         "<15>{#f/24}我觉得我没有\n什么别的选择，\n只能承认\n事实了。",
         "<15>{#f/24}这是个...",
         ["<15>{#f/27}只-只送给你的\n礼物！！！", "<15>{#f/27}给我们两个\n分享的礼物！！！"][
         (SAVE.data.n.state_papyrus_spaghet + 1) % 2
         ],
         "<15>{#f/10}快！\n快打开！"
      ],
      papdate27: [choicer.create("* （你该怎么办？）", "打开", "不要")],
      papdate28: [
         "<15>{#p/papyrus}{#f/21}你甚至不忍心\n弄坏我精致的\n包装？？",
         "<15>{#f/27}不-不...\n居然来这招...",
         "<15>{#f/13}真的好厉害！",
         "<15>{#f/14}但-但是...\n啊哈！\n看我的反击！",
         "<15>{#f/15}I'LL OPEN THE PRESENT MYSELF!!"
      ],
      papdate29: ["<15>{#p/papyrus}{#f/20}你知道这是\n什么吗？"],
      papdate30: [choicer.create("* （你知道这是什么吗？）", "是", "否")],
      papdate31a: [
         "<15>{#p/papyrus}{#f/26}意大利面。",
         "<15>{#f/24}这是你现在\n脑子里的想法，\n没错吧？",
         "<15>{#f/20}对了！",
         "<15>{#f/15}但是也-\n错了！"
      ],
      papdate31b: [
         "<15>{#p/papyrus}{#f/20}捏嘿嘿！\n这才对嘛。",
         "<15>{#p/papyrus}{#f/15}你根本想不到！",
         "<15>{#f/24}虽然这看起来\n是意大利面..."
      ],
      papdate32: () => [
         "<15>{#p/papyrus}{#f/20}这可不是什么\n普通的意面！",
         "<15>{#f/20}这是一个\n大师的杰作！",
         "<15>{#f/24}丝般柔滑的意面，\n在时间膨胀\n单元之中\n精细陈化。",
         "<15>{#f/20}然后再由我，\n主厨帕派瑞斯\n来加工！",
         "<15>{#f/15}人类！！！\n是时候结束这\n一切了！！",
         "<15>我们不能再这样\n僵持下去了！",
         ...[["<15>{#f/20}我们一起来吃\n这盘意大利面\n吧！！！"], ["<15>{#f/20}尽情享受我的\n终极厨艺吧！！"]][
         (SAVE.data.n.state_papyrus_spaghet + 1) % 2
         ]
      ],
      papdate33: [choicer.create("* （你该怎么办？）", "吃掉", "不要")],
      papdate33a: () => [
         "{#p/human}* (You take a small bite.)\n* (You appear to be blushing from the taste.)",
         "{#p/basic}* It's unbelievable...!",
         ...(SAVE.data.n.state_papyrus_spaghet === 1
            ? ["{#p/basic}* Papyrus seems to have enjoyed his bite just the same."]
            : [])
      ],
      papdate34a: () => [
         "<15>{#p/papyrus}{#f/10}多么充满激情的\n表达！！",
         SAVE.data.b.flirt_papyrus
            ? "<15>{#f/12}你肯定真心爱着\n我的厨艺！"
            : "<15>{#f/12}你肯定真心喜欢\n我的厨艺！",
         ...[
            [
               "<15>{#f/24}那个，虽然\n我也这样...",
               SAVE.data.b.flirt_papyrus
                  ? "<15>{#f/20}但我觉得你甚至\n比我更爱我的\n厨艺！！！"
                  : "<15>{#f/20}但我觉得你甚至\n比我更喜欢我的\n厨艺！！！"
            ],
            ["<15>{#f/10}AND BY EXTENSION, ME!", "<15>{#f/20}MAYBE EVEN MORE THAN I DO!!!"]
         ][(SAVE.data.n.state_papyrus_spaghet + 1) % 2],
         "<15>{#f/27}但... 那是\n不可能的...！",
         "<15>{#f/12}你是怎么\n做到的！？！？"
      ],
      papdate34b: () => [
         "<15>{#p/papyrus}{#f/21}你的意思是...",
         "<15>{#f/18}你要留给我吃？",
         ...[
            [
               "<15>{#f/24}我以为你之前\n说要分享...",
               "<15>{#f/20}你会至少想自己\n尝一小口。",
               "<15>{#f/27}但你不是\n这样的，\n你都留给我了...",
               "<15>{#f/12}你想让我，\n让我来，\n全都吃掉！！！"
            ],
            [
               "<15>{#f/21}即使你之前\n说过...",
               "<15>{#f/21}你想自己品尝\n我的意大利面...",
               "<15>{#f/27}就在你马上要\n实现的时候，\n你...",
               "<15>{#f/12}你要放弃\n全留给我？？？"
            ]
         ][(SAVE.data.n.state_papyrus_spaghet + 1) % 2]
      ],
      papdate35: ["<15>{*}{#p/papyrus}{#f/22}啊！！！{%15}"],
      papdate36: ["<15>{*}{#p/papyrus}{#f/22}呃！！！{%15}"],
      papdate37: ["<15>{*}{#p/papyrus}{#f/22}不啊啊啊！！！{%15}"],
      papdate38: () => [
         "<18>{#p/papyrus}{@random=1.1/1.1}人类。\n一切都清晰明了了。",
         SAVE.data.b.flirt_papyrus
            ? "<18>{@random=1.1/1.1}你已经痴狂地\n爱上了我。"
            : "<18>{@random=1.1/1.1}你已经完全\n被我迷住了。",
         "<99>{@random=1.1/1.1}你做的每一件事。\n你说的每一个字。",
         "<18>{@random=1.1/1.1}一切的一切\n都是为了我。",
         "<18>{@random=1.1/1.1}人类。\n我也想让你，\n感到快乐。",
         "<18>{@random=1.1/1.1}现在轮到我\n来表达我的\n感情了...",
         "<18>{@random=1.1/1.1}轮到我来告诉你\n我的真心话了。"
      ],
      papdate39: () =>
         SAVE.data.b.flirt_papyrus
            ? [
               "<15>{#f/21}人类，我的\n真心话是...",
               "<15>{#f/21}我就是不\n像你那样\n喜欢我。",
               "<15>{#f/24}我是说，\n浪漫的那种。",
               "<15>{#f/27}我是说，我已经\n很努力了！",
               "<15>{#f/27}我觉得因为你\n跟我调情过了...",
               "<15>{#f/27}我就该跟你\n约一次会。",
               "<15>{#f/10}然后，在我们\n约会的过程中，\n感情就会开花\n结果！！！",
               "<15>{#f/20}我就能配得上\n你对我的热情！",
               "<15>{#f/21}但是...\n我，伟大的\n帕派瑞斯...",
               "<15>{#f/21}失败了。",
               "<15>{#f/21}我跟之前相比\n没什么两样。",
               "<15>{#f/27}最坏的部分是，\n跟你约会之后...",
               "<15>{#f/22}我只会把你拉进\n更深的爱里！",
               "<15>{#f/21}那是激情的\n黑暗牢笼，\n无处可逃。",
               "<15>{#f/27}我怎么能这样\n对我亲爱的\n朋友呢...？",
               "<15>{#f/27}...",
               "<15>{#f/27}... 不..."
            ]
            : ["<15>{#f/24}人类，实际上..."],
      papdate39a: () => [
         ...(SAVE.data.b.flirt_papyrus
            ? [
               "<15>{#f/20}不！\n不是这样的！",
               "<15>{#f/17}我不会在任何\n事情上失败！！！",
               "<15>{#f/20}人类！！！\n我会帮助你度过\n这段艰难的\n时光！！！",
               "<15>{#f/24}我可以继续当你\n酷酷的朋友...",
               "<15>{#f/20}然后把发生的\n这一切忘掉。",
               "<15>{#f/10}毕竟，你也，\n很伟大。",
               "<15>{#f/20}失去你的友谊\n会是一场悲剧！",
               "<15>{#f/21}所以，拜托...",
               "<15>{#f/21}不要因为我不能\n亲吻你而哭泣...",
               "<15>{#f/19}因为，我根本\n没有嘴唇！！！",
               ...(SAVE.data.n.plot < 48
                  ? [
                     "<15>{#f/10}嘿，总有一天，\n你会找到和我\n一样好的人。",
                     "<15>{#f/24}呃，不。\n那是不可能的。",
                     "<15>{#f/20}但我也会接受\n你找个第二好的\n人！！！"
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
         "<15>{#f/24}哦，如果你还想\n找我的话...",
         "<15>{#f/10}这是我的\n{@fill=#f00}电话号码{@fill=#000}。",
         "<15>{#f/11}欢迎你随时\n打给我！",
         ...(SAVE.data.b.flirt_papyrus
            ? [
               "<15>{#f/24}当然，\n是柏拉图式的。",
               ...(SAVE.data.n.plot < 48
                  ? ["<15>{#f/10}那么，\n我先走啦！"]
                  : ["<15>{#f/10}WELL, SEE YOU AT UNDYNE'S HOUSE!"])
            ]
            : SAVE.data.n.plot < 48
               ? ["<15>{#f/10}那么，\n我先走啦！"]
               : ["<15>{#f/20}WELL, SEE YOU AT UNDYNE'S HOUSE!"]),
         "<15>{#f/20}捏嘿嘿！"
      ],
      papdate41: {
         a: () => (SAVE.data.b.flirt_papyrus ? "浪漫" : "友谊"),
         b: "功率\n水平",
         c: "日期：克历615年9月",
         d: "速度",
         e: "星系\n地图",
         f: "紧张感"
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
               "{#p/human}* (The dog residue in this sink appears to be arranged in the shape of a heart.)",
               "* (Somehow, this seems to put you at ease.)"
            ]
            : SAVE.data.n.plot < 72
               ? ["{#p/basic}* The sink is so tall, you can't even wash your hands..."]
               : ["{#p/basic}* There's a pile of dog residue in the sink."],
      papsink1: [
         "<18>{#p/papyrus}{#f/9}厉害吧？\n我增加了水槽的高度。",
         "<18>{#f/0}现在我可以在下边\n放更多骨头了！\n你快看看！"
      ],
      papsink2: ["<18>{#p/papyrus}{#f/8}不-，是那条狗！"],
      papsink3: ["<18>{#p/papyrus}{#f/31}哦，好可怜\n好可怜的小狗狗...", "<18>{#f/9}给你，尝尝我的\n特殊攻击！"],
      papsink4: ["<18>{#p/papyrus}哇！！！\n它喜欢诶！！！"],
      papsink5: ["<18>{#p/papyrus}{#f/7}衫斯！", "<18>别再用配乐\n打扰我的生活了！！"],
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
         choicer.create("* （你要怎么跟帕派瑞斯说\n  关于他做的意大利面的事？）", take ? "拿走了" : "留在那了", "吃掉了"),
         "<18>{#p/papyrus}真的！？"
      ],
      papspaghet1a: [
         "<18>{#p/papyrus}{#f/1}什么！？\n你是怎么避开\n我的陷阱的？",
         "<18>{#f/4}还有，比起这个...",
         "<18>{#f/0}IS THERE ANY LEFT FOR...",
         "<18>{#f/4}... WAIT.",
         "<18>{#f/0}IT'S RIGHT THERE IN YOUR ITEMS!!",
         "<18>{#f/9}WHAT WERE YOU PLANNING, HUMAN?",
         choicer.create("* (What will you do with\n  Papyrus' spaghetti?)", "Share it", "吃掉"),
         "<18>{#p/papyrus}真的！？"
      ],
      papspaghet2a: [
         "<18>{#f/5}你抗拒我做的\n意大利面的味道...",
         "<18>{#f/6}就是因为想跟我\n一起吃吗？？？",
         "<18>{#f/9}那好吧！！",
         "<18>不要烦恼！\n我，伟大的帕派瑞斯...",
         "<18>会为你和我二人\n做各种我们想吃的\n意大利面的！",
         "<18>{#f/0}嘿嘿嘿嘿嘿嘿捏！"
      ],
      papspaghet2b: [
         "<18>{#f/5}哇...",
         "<19>{#f/6}之前几乎从来没有人\n欣赏过我的厨艺...",
         "<18>{#f/9}那好吧！！",
         "<18>不要烦恼！\n我，伟大的帕派瑞斯...",
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
                     : ["{#p/mettaton}* \"HOPE YOU ENJOYED THE SHOW!\""]),
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
         "<18>{#p/papyrus}衫斯！！\n我的天啊！！\n那是个...",
         "<18>人类吗！？！？",
         "{#p/sans}{#f/2}* nah, it's just a human shaped hologram."
      ],
      papyrus3: [
         "<18>{#p/papyrus}{#f/4}哦。",
         "<18>{#f/4}...",
         "<18>{#f/4}等一下...",
         "<18>{#f/7}你在撒谎！！",
         "{#p/sans}{#f/2}* sorry, meant to say \"hologram-shaped human.\"",
         "<18>{#p/papyrus}{#f/0}...衫斯，我们\n终于做到了！",
         "<18>{#f/9}安黛因现在必定会让我\n加入皇家守卫了！！！",
         "<18>{#f/6}我们只需要...",
         "<18>{#f/5}去...",
         "<18>{#f/4}...",
         "<18>{#f/4}我把什么东西给忘了。",
         "{#p/sans}{#f/2}* the speech, remember?",
         "<18>{#p/papyrus}{#f/4}哦，对对对。\n...“咳咳”。",
         "<18>{#f/9}人类！你可能以为\n你来到这里就安全了。",
         "<18>{#f/9}但我，\n伟大的帕派瑞斯，\n打算扭转你的想法！",
         "<18>{#f/4}首先，我要用\n艾菲斯博士的谜题\n让你眼花缭乱...",
         "<18>{#f/4}然后，\n在你最意想不到的时候...",
         "<19>{#f/9}哇呜！\n抓到你了！\n押去首塔！",
         "<18>{#f/9}我们的战斗\n将一如既往地传奇！",
         "<18>{#f/4}无论如何...",
         "<18>{#f/9}来吧... \n只要你够胆！"
      ],
      papyrus4: ["<18>{#f/0}捏嘿嘿嘿嘿\n嘿嘿嘿！！！"],
      papyrus5: [
         "{#p/sans}* well, that went well.",
         "* don't sweat it, bud.",
         "{#f/2}* i'll keep an eyesocket out for ya."
      ],
      papyrus6x1: ["<18>{#p/papyrus}{#f/5}人-人类？\n你就是那个人类吗...？"],
      papyrus6x2: [
         "<15>{#p/papyrus}{#e/papyrus/20}我的天哪！\n我终于见到你啦！",
         "<18>{#p/papyrus}{#f/0}自打听说你来了星港，\n我就梦想着能见你一面！",
         "<18>{#p/papyrus}{#f/4}...你问，\n为啥衫斯没跟我\n在一块？",
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
      papyrus6x4: ["{#p/without}* ... papyrus?"],
      papyrus6: () => [
         "<18>{#p/papyrus}{#f/9}人类！！",
         world.nootflags.has("s_puzzle2")
            ? "<18>{#f/4}YOU MAY HAVE HAD AN EASY TIME BEFORE."
            : "<18>{#f/4}你可能已经过了\n我很多别的挑战。",
         "<18>{#f/9}但现在，你就\n绝对要束手无策了！",
         "<18>你也看到了，\n出这个谜题的\n不是别人...",
         "<18>{#f/0}正是那个大名鼎鼎的\n艾菲斯博士！",
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
         "<18>{#f/9}衫斯就会随机用\n蓝色魔法\n让你浮起来！",
         "{#p/sans}{#f/6}* check it out, it's my special yellow eye.",
         "<18>{#p/papyrus}{#f/7}现在不行，衫斯！！",
         "{#p/sans}* oh, heheh.\n* guess i got a little {@fill=#ff0}carried away{@fill=#fff}, huh?",
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
         "{#p/sans}* wasn't that supposed to be my cue?",
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
         "{#p/sans}* well?\n* are we doing this thing or what?",
         "<18>{#p/papyrus}{#f/7}...",
         "{#p/sans}{#f/3}* that annoying dog's going to get impatient up there.",
         "<18>{#p/papyrus}{#f/7}随时都会进行的！"
      ],
      papyrus13: [
         "{#p/sans}* ready when you are.",
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
         "<18>{#f/9}这只是帕派瑞斯的\n又一次决定性的\n胜利罢了！！",
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
                  ? ["<18>{#f/4}不管那个“艾斯利尔”\n说了什么荒唐的话，"]
                  : ["<18>{#f/5}不管你觉得自己\n多么不可救药，"]),
               "<18>{#f/6}{#x2}但我知道，在内心深处，\n你还是个好人！",
               "<18>{#f/0}我会让你的善良重见天日！",
               "<18>{#f/0}我会让你的潜能尽数释放！",
               "<18>{#f/4}最终...",
               "<18>{#f/9}我会让你知道，\n你仍然是最棒的！！！",
               "<18>{#f/0}我，帕派瑞斯，\n敞开双臂欢迎你！"
            ]
            : [
               "<18>{#f/0}一定就是你\n现在的情感！！",
               "<18>{#f/4}我很难想象这些情感\n究竟是怎样的...",
               "<18>{#f/4}毕竟，我十分伟大。",
               "<18>我从来不好奇\n有很多朋友的感觉\n是怎样的。",
               "<18>{#f/5}我很同情你，\n孤单的人类...",
               "<18>{#f/0}但不要担心！！！\n你再也不会孤单了！",
               "<18>{#f/9}因为我，\n伟大的帕派瑞斯，\n会成为你的...",
               "<18>{#f/5}{#x1}...",
               "<18>不...",
               "<18>{#f/7}{#x2}不，不该是这样的！",
               "<18>我不能成为\n你的“朋友”...",
               "<18>你是个人类！\n我必须逮捕你！！！",
               "<18>{#f/9}然后，我就可以实现\n我毕生的梦想！！！",
               "<18>力量强大！\n受人爱戴！\n声名远扬！！！",
               "<18>那就是帕派瑞斯！！！",
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
               "<18>{#f/7}安黛因一定会\n对我非常失望的！",
               "<18>{#f/5}我也永远不能\n加入皇家守卫了...\n并且...",
               "<18>{#f/7}我的粉丝数也会\n就这样停滞不前！",
               "{#p/human}* (How will you respond?){!}\nµµµµµµµLet's beµµµµµµµµWhat a\nµµµµµµµfriendsµµµµµµµµµloser{#c/0/7/7}"
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
         "<18>“不好意思，\n逐梦先生...\n我可以回家吗？”",
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
         "<18>{#f/0}帕派瑞斯也很饥渴！",
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
         "{#p/human}* (You inspect the terminal.)",
         "{#p/basic}* There is a log of previous modifications...",
         world.edgy
            ? "* \"Pattern last modified by user: ALPHYS\""
            : "* \"Pattern last modified by user: COOLSKELETON95\"",
         ...(!world.goatbro || SAVE.flag.n.genocide_milestone < 5 || SAVE.flag.n.ga_asrielAlphysCom1++ > 0
            ? []
            : ["{#p/asriel2}{#f/13}* She's been against us the whole time..."]),
         "{#p/basic}* \"Would you like to view the pattern?\"",
         choicer.create("* （查看图案吗？）", "是", "否")
      ],
      robotx: () =>
         SAVE.data.b.svr
            ? ["{#p/human}* (The robot appears to be asleep.)"]
            : ["{#p/basic}* It's in sleep mode."],
      robot1: pager.create(
         0,
         [
            "{#p/basic}* Hello.\n* I am a builder bot.",
            "* I want to see the galaxy...\n* But I cannot move.",
            "* If you would be so kind, traveler, please...",
            "* Take one of my computer chips and bring it to another computer very far away.",
            choicer.create("* （拿走一块芯片？）", "是", "否")
         ],
         [
            "{#p/basic}* If you would be so kind, traveler, please...",
            "* Take one of my computer chips and bring it to another computer very far away.",
            choicer.create("* （拿走一块芯片？）", "是", "否")
         ]
      ),
      robot2: () => [
         "{#p/basic}* Thank you... good luck!",
         "{#s/equip}{#p/human}* (You got the Computer Chip.)",
         ...(world.goatbro && SAVE.flag.n.ga_asriel98++ < 1
            ? [
               "{#p/asriel2}{#f/9}* Pfft, that's adorable.",
               "{#p/asriel2}{#f/13}* This robot has no idea what's going on here..."
            ]
            : [])
      ],
      robot3: ["{#p/basic}* It seems you do not have enough room for me."],
      robot4: () => [
         "{#p/basic}* I see.\n* Good journey, then.",
         ...(world.goatbro && SAVE.flag.n.ga_asriel98++ < 1
            ? [
               "{#p/asriel2}{#f/9}* Pfft, that's adorable.",
               "{#p/asriel2}{#f/13}* This robot has no idea what's going on here..."
            ]
            : [])
      ],
      robot5: () => [
         "{#p/basic}* Thank you for taking care of me.",
         ...(world.goatbro && SAVE.flag.n.ga_asriel99++ < 1
            ? ["{#p/asriel2}{#f/4}* It's alright, we don't need any more for now."]
            : [])
      ],
      robot6: [
         "{#p/basic}* How am I doing?\n* By \"I\" I mean the chip I gave you...",
         "* Huh? You lost it...?\n* ... I suppose I can give you another one...",
         choicer.create("* （再拿走一块芯片？）", "是", "否")
      ],
      robot7: [
         "{#p/basic}* Please be careful this time.",
         "{#p/human}{#s/equip}* (You got the Computer Chip.)"
      ],
      robot8: ["{#p/basic}* I understand.\n* Safe journey, then..."],
      robot9: () => [
         "{#p/basic}* Thank you for... taking care of me...",
         ...(world.goatbro && SAVE.flag.n.ga_asriel99++ < 1
            ? ["{#p/asriel2}{#f/4}* It's alright, we don't need any more for now."]
            : [])
      ],
      robot10: [
         "{#p/basic}* How am I doing?",
         "* Huh? Again...?",
         "* I'm sorry... if I give you any more, there will be nothing left of me.",
         "* I suppose it is true.\n* Traveling beyond our limits is but a fantasy.",
         "* It's no different for anyone else.",
         "* All of monsterkind are doomed to live out here forever..."
      ],
      robot11: ["{#p/basic}* Why did I give myself away so easily?"],
      robot12: ["{#p/basic}* Begone!"],
      sans1: [
         "<99>{#p/darksans}{#i/4}* {@spacing=4/0}{#i/x2}人类。",
         "<99>* {@spacing=4/0}难道你不知道{@spacing=}\n  {@spacing=4/0}怎么和新朋友{@spacing=}\n  {@spacing=4/0}打招呼吗？",
         "<99>* {@spacing=4/0}转过身来{@spacing=}\n  {@spacing=4/0}和我握手。"
      ],
      sans2: () => [
         ...(world.edgy
            ? [
               "{#p/sans}{#f/0}* huh?\n* what's with the face?",
               "{#p/sans}{#f/2}* ... didn't you like my whoopee cushion?",
               "{#f/0}* ... eh.\n* to each their own."
            ]
            : ["{#p/sans}{#f/4}* heheh... nothin' like a good whoopee cushion."]),
         "{#f/0}* anyway, you're a human, right?",
         "{#f/5}* that's fantastic.",
         "{#f/0}* i'm sans.\n* sans the skeleton.",
         "{#f/3}* as a royal sentry, my job is to capture humans.",
         "{#f/4}* but... y'know...",
         ...(world.edgy
            ? [
               "{#f/2}* i don't really feel like doing much work today.",
               "{#f/0}* as for my brother, well...",
               "{#f/5}* he's OVERFLOWING with the stuff.",
               "{#f/0}* it took everything i had just to get him to stay home."
            ]
            : [
               "{#f/2}* i've got better things to do.",
               "{#f/0}* as for my brother, well...",
               "{#f/5}* despite not being an actual sentry, he sure ACTS like one.",
               "{#f/0}* in fact, i think that's him over there."
            ]),
         "* i have an idea.\n* jump across that gap, will ya?",
         "<26>{#f/4}* 别怕，直接跳过去就行。\n* 我兄弟把重力设得很小，\n  肯定掉不下去。"
      ],
      sans3: () =>
         world.edgy
            ? [
               "{#p/sans}* well, here we are.",
               "{#f/3}* i'm afraid there's not much else i can show you right now...",
               "{#f/2}* but maybe i'll come up with something if you keep heading forward.",
               "{#f/0}* for now, i'll just hang around here."
            ]
            : ["{#p/sans}* quick, to the gravometric inverter."],
      sans4: ["{#p/sans}* 'sup, bro?"],
      sans5: [
         "<18>{#p/papyrus}{#x2}{#f/7}你说“咋的了”呢，\n兄弟！",
         "<18>你还有谜题要解决！",
         "<18>我明明给了你\n很多余地，但...",
         "<18>你还是整天无所事事！",
         "<18>即使是现在，你还是在！",
         "<18>无所事事！",
         "{#p/sans}* actually, i'm playing with this gravometric thingy.",
         "* it's really cool.",
         "{#f/4}* do you wanna look?",
         "<18>{#p/papyrus}{#x3}{#f/7}不！！\n我才没时间看呢！！",
         "<18>{#x2}要是有人类从这经过，\n我得做好准备！",
         "<18>我必须会！\n我一定会！",
         "<18>{#x1}{#f/9}最终抓到一个人类！",
         "<18>{#x4}{#f/0}那时候，我，\n伟大的帕派瑞斯...",
         "<18>会得到我应得的一切！",
         "<18>尊重...\n认可...",
         "<18>{#f/9}我就终于可以加入\n皇家守卫了！",
         "{#p/sans}* hmm...",
         "{#f/2}* maybe this gadget will help you.",
         "<18>{#p/papyrus}{#x3}{#f/7}衫斯，那根本没用！\n你这个懒骨头！",
         "<18>{#x1}{#f/5}你明明知道，\n你能做的远不止这些，\n但是...",
         "<18>{#x2}{#f/7}你还是选择\n整天无所事事！",
         "<18>{#x1}{#f/5}难道你不想... \n从生活中得到更多吗？",
         "{#p/sans}* hey, take it easy.\n* i've got plenty of things in mind.",
         "{#f/4}* perhaps you could even say i'm...",
         "{#f/2}* shooting for the {@fill=#ff0}stars{@fill=#fff}?"
      ],
      sans6: [
         "<18>{#p/papyrus}{#x3}{#f/7}衫斯！！",
         "{#p/sans}{#f/5}* come on.\n* you're smiling.",
         "<18>{#p/papyrus}{#x2}{#f/7}我确实笑了！\n极其鄙视的那种！",
         "<18>{#x1}{#f/4}（叹气...）",
         "<18>{#f/5}为什么像我这样\n伟大的人...",
         "<18>为了得到认可\n需要做这么多破事？？",
         "{#p/sans}* heh.\n* perhaps you should focus more on, well...",
         "* the {@fill=#ff0}gravity{@fill=#fff} of the situation."
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
      sans9: ["{#p/sans}* ok, time to bring you back down."],
      sans10: [
         "{#p/sans}{#f/0}* actually, hey...\n* before you go out there on your own...",
         "{#f/3}* you should know the royal guard's on the lookout for you.",
         "{#f/0}* don't worry, though.\n* all they've got out here are the canines.",
         "{#f/0}* since you're a human, you should know what dogs love, right?",
         "{#f/2}* they're almost as harmless as papyrus."
      ],
      sansbook0: ["{#p/human}* (It appears this joke book has no clear ending.)"],
      sansbook1: ["{#p/basic}* It's a book about non-euclidian geometry.\n* Property of \"ALPHYS.\""],
      sansbook2: [choicer.create("* （要看看里面吗？）", "是", "否")],
      sansbook3: ["{#p/human}* (You look inside the book...)"],
      sansbook4: ["{#p/basic}* Inside the geometry book was a joke book."],
      sansbook5: ["{#p/basic}* Inside the joke book was another geometry book."],
      sansbook6: ["{#p/basic}* Inside the geometry book was another joke book."],
      sansbook7: ["{#p/basic}* It's another geometry book."],
      sansbook8: ["{#p/basic}* It's another joke book."],
      sansbook9: ["{#p/human}* (You decide not to look.)"],
      sansbook10: () => [
         "{#p/basic}* It's a note from Sans.",
         "{#p/without}* \"why so serious?\"\n* \"it's just a bad joke.\"",
         "<33>{#p/without}* “呵...”",
         "<33>{#p/without}* “别看得太入迷了。”",
         ...(SAVE.data.b.oops ? [] : ["{#p/basic}* ... this is the worst joke I have ever experienced."])
      ],
      sansinter: {
         s_sans: pager.create(
            0,
            () =>
               world.edgy
                  ? ["{#p/sans}* 'sup."]
                  : [
                     "{#p/sans}* papyrus will be back soon, y'know.",
                     "{#f/4}* i'd get going if i were you...",
                     "{#f/2}* otherwise, you'll have to listen to more of my hilarious jokes."
                  ],
            () =>
               world.edgy
                  ? [
                     "{#p/sans}* if my bro was here, you and i would have TONS of stuff to do.",
                     "{#p/sans}{#f/3}* but, alas...",
                     "{#p/sans}{#f/2}* he's busy solving the sudoku book i gave him."
                  ]
                  : [
                     "{#p/sans}* look, there's nothin' to be afraid of.",
                     "{#f/2}* he may seem scary, but papyrus is the nicest guy you'll ever meet."
                  ],
            () =>
               world.edgy
                  ? [
                     "{#p/sans}* huh?\n* you want me to bring you to him?",
                     "{#f/3}* look, bucko.\n* you're barking up the wrong holo-tree.",
                     "{#p/sans}{#f/2}* if i were you, i'd be thankful for what you already have."
                  ]
                  : ["{#p/sans}* trust me."],
            () =>
               world.edgy
                  ? [
                     "{#p/sans}{#f/3}* ...",
                     "{*}{#p/darksans}{#f/1}{#i/5}{#s.stop}* Don't push your luck.",
                     "{*}{#s.resume}{%}"
                  ]
                  : ["{#p/sans}* trust me."],
            () => (world.edgy ? [] : ["{#p/sans}* trust me."])
         ),
         s_papyrus: pager.create(
            0,
            [
               "{#p/sans}* hey, here's something important to remember.",
               "* my brother has a very {@fill=#00a2e8}special attack{@fill=#fff}.",
               "* if you see an {@fill=#ff993d}orange attack{@fill=#fff}, you'll get hurt if you're not moving.",
               "{#f/3}* here's an easy way to keep it in mind.",
               "{#f/0}* imagine hot coals.\n* you wouldn't stand still on those, right?",
               "* hot coals are rocky.\n* so imagine boney hot coals instead.",
               "{#f/2}* simple, right?\n* when fighting, think about boney hot coals."
            ],
            [
               "{#p/sans}{#f/0}* and no, you won't get hurt if you're moving slowly.",
               "{#f/0}* you just have to be moving.",
               "{#f/2}* there's someone out there who can explain it better."
            ],
            ["{#p/sans}{#f/2}* remember...\n* boney hot coals."]
         ),
         s_dogs: pager.create(
            0,
            [
               "{#p/sans}* since you're a human, you've probably never heard of the W.T.F.",
               "{#f/2}* that's short for \"wide- area troposphere framework.\""
            ],
            [
               "{#p/sans}* if the W.T.F. were to drop, the air around us would disappear.",
               "{#f/3}* don't worry, though.\n* i {@fill=#ff0}swear{@fill=#fff} it's never happened before."
            ],
            ["{#p/sans}{#f/2}* if it did, it'd be {@fill=#ff0}explicitly{@fill=#fff} crazy."]
         ),
         s_jenga: pager.create(
            0,
            [
               "{#p/sans}* actually, that spaghetti from earlier...",
               "{#f/3}* it wasn't too bad for my brother.",
               "{#f/0}* since he started cooking lessons, he's been improving a lot.",
               "{#f/4}* i bet if he keeps it up, he'll even impress the king."
            ],
            ["{#p/sans}{#f/2}* ... the man up top's a sucker for pasta."]
         ),
         s_bridge: pager.create(
            0,
            () =>
               world.edgy
                  ? [
                     "{#p/sans}{#f/0}* i hope you liked that last puzzle i set for you.",
                     "{#f/3}* i was kind of in a hurry, but papyrus insisted i prepare it."
                  ]
                  : world.killed5
                     ? [
                        "{#p/sans}{#f/3}* i hear the area's being evacuated right now...",
                        "{#f/0}* if i were you, i'd be afraid for my life."
                     ]
                     : [
                        "{#p/sans}{#f/3}* i don't know what my brother's going to do now.",
                        "{#f/0}* if i were you, i would make sure i understand {@fill=#ff993d}orange attacks{@fill=#fff}."
                     ],
            () =>
               world.edgy
                  ? [
                     "{#p/sans}{#f/0}* what?\n* can you blame me?",
                     "{#f/3}* it's hard to get ANYTHING done when i have you to consider."
                  ]
                  : world.killed5
                     ? [
                        "{#p/sans}{#f/0}* thankfully, i have someone who cares about my well-being.",
                        "{#f/2}* no matter what happens, i know he'll be there for me."
                     ]
                     : ["{#p/sans}{#f/2}* oh, and maybe {@fill=#00a2e8}blue attacks{@fill=#fff}, too."],
            () =>
               world.edgy
                  ? ["{#p/sans}{#f/3}* oh well."]
                  : world.killed5
                     ? ["{#p/sans}{#f/0}* am i wrong?"]
                     : ["<26>{#p/sans}{#f/0}* 各种攻击也是。"]
         )
      },
      sansbredgey: () =>
         world.edgy
            ? 6 <= world.population
               ? [
                  "{#p/sans}* by the way...",
                  "* i know i've been harsh on you lately...",
                  "{#f/3}* but thanks for trying to be a better person.",
                  "{#f/2}* keep it up, ok?"
               ]
               : world.bullied
                  ? [
                     "{#p/sans}* by the way...",
                     "* i know you're still going around hurting people...",
                     "{#f/3}* but i appreciate the effort not to outright to kill them.",
                     "{#f/2}* it's something, right?"
                  ]
                  : [
                     "{#p/sans}* by the way...",
                     "* if you happen to run into my brother...",
                     "{#f/3}* ...",
                     "{*}{#p/darksans}{#f/1}{#i/5}{#s.stop}* Don't even try it.",
                     "{*}{#s.resume}{%}"
                  ]
            : 6 <= world.population
               ? [
                  "{#p/sans}* by the way...",
                  "* i know it's kind of silly at times...",
                  "{#f/3}* but thanks for going along with my brother's crazy schemes.",
                  "{#f/2}* you're a champion."
               ]
               : world.bullied
                  ? [
                     "{#p/sans}* by the way...",
                     "* i know you've been going around hurting people...",
                     "{#f/3}* but i appreciate the effort not to outright to kill them.",
                     "{#f/2}* it's something, right?"
                  ]
                  : [
                     "{#p/sans}* by the way...",
                     "* if you happen to run into my brother...",
                     "{#f/3}* ...",
                     "{*}{#p/darksans}{#f/1}{#i/5}{#s.stop}* Don't even try it.",
                     "{*}{#s.resume}{%}"
                  ],
      sentryPapyrus1: pager.create(
         0,
         () =>
            SAVE.data.b.svr
               ? ["{#p/human}* (The narration on this sentry station predicts the future fame of its creator.)"]
               : [
                  "{#p/basic}* There's some narration on this cardboard box.",
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
                           ? "{#p/basic}* The last line was crossed out."
                           : "<23>（“注：现在还只是\n超-有名皇家守卫的预备队员。”）",
                        ...(SAVE.data.n.plot < 19 && !world.edgy
                           ? [
                              "{#p/sans}{#f/0}* admiring my bro's handiwork, are we?",
                              "{#p/sans}{#f/2}* i know.\n* it's pretty cool."
                           ]
                           : [])
                     ])
               ],
         () =>
            SAVE.data.b.svr
               ? ["{#p/human}* (The narration on this sentry station predicts the future fame of its creator.)"]
               : [
                  "{#p/basic}* There's some narration on this cardboard box.",
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
                           ? "{#p/basic}* The last line was crossed out.\n* That checks out."
                           : "<23>（“注：现在还只是\n超-有名皇家守卫的预备队员。”）"
                     ])
               ]
      ),
      sentryPapyrus2: pager.create(0, () => [
         "{#p/human}* (You look under the shelf...)",
         ...(SAVE.data.b.svr
            ? [
               [
                  "{#p/asriel1}{#f/17}* That's where Papyrus keeps all his wacky whatsits.",
                  "{#f/20}* A fighter by night, and a tinkerer by... also night."
               ],
               [
                  "<26>{#p/asriel1}{#f/13}* In one timeline, I encouraged Papyrus to\n  be a Royal Lab employee.",
                  "{#f/17}* He kind of ended up doing his own thing...",
                  "{#f/17}* ... working on personal science projects rather than official work.",
                  "{#f/13}* Papyrus isn't someone who easily conforms to standard systems."
               ],
               [
                  "<26>{#p/asriel1}{#f/13}* One device Papyrus created was the legendary \"shickaxe.\"",
                  "{#f/17}* A multi-tool that could efficiently break any material.",
                  "{#f/15}* Its durability was... infinite, actually.",
                  "{#f/13}* He only threw it away because, in his own words...",
                  "{#f/13}* \"Having a tool that can do everything takes the fun out of it!\""
               ],
               ["<26>{#p/asriel1}{#f/20}* Papyrus certainly has a unique way of thinking."]
            ][Math.min(asrielinter.sentryPapyrus2++, 3)]
            : ["* Boxes upon boxes of unused cables and old tech can be found here."])
      ]),
      sentrySans1: () =>
         SAVE.data.b.svr
            ? ["{#p/human}* (This sentry station strikes you as rather unimportant.)"]
            : world.darker
               ? ["{#p/basic}* It's a sentry station."]
               : SAVE.data.n.plot < 31
                  ? [
                     "{#p/basic}* Sans's sentry station...",
                     "* Truly the most worthwhile investment the Royal Guard could've made."
                  ]
                  : SAVE.data.n.plot === 72
                     ? ["{#p/basic}* Sans's sentry station...", "* The quality of this investment hasn't changed a bit."]
                     : ["{#p/basic}* Sans's sentry station...", "<33>* A poor investment in hindsight."],
      sentrySans2: pager.create(
         0,
         () => [
            "{#p/human}* (You look under the shelf...)",
            ...(SAVE.data.b.svr
               ? [
                  [
                     "{#p/asriel1}{#f/15}* As a star, there were some dark corners even I never dared search.",
                     "{#f/20}* It's probably for the best if we leave this be."
                  ],
                  ["{#p/asriel1}{#f/20}* Please.\n* Anywhere but here."]
               ][Math.min(asrielinter.sentrySans2++, 1)]
               : world.edgy
                  ? ["{#p/basic}* It's mostly empty, save for the singular red crayon."]
                  : ["{#p/basic}* There are bottles of honey, alfredo, and yamok sauce stockpiled here."])
         ],
         () => [
            "{#p/human}* (You look under the shelf...)",
            SAVE.data.b.svr
               ? "{#p/asriel1}{#f/20}* Please.\n* Anywhere but here."
               : world.edgy
                  ? "{#p/basic}* It's an unsettling reminder."
                  : "{#p/basic}* It's an unholy quantity of food toppings."
         ]
      ),
      whew1: () =>
         [
            ["{#p/basic}* The doggy bed is covered in annoying white fur."],
            ["{#p/basic}* Fighting Papyrus has begun to tire you, but not enough to sleep."],
            [
               "{#p/basic}* After fighting Papyrus three times, you feel exhausted.",
               choicer.create("* （你该怎么办？）", "Nothing", "Sleep")
            ],
            [
               "{#p/basic}* Continually fighting Papyrus has exhausted you.",
               choicer.create("* （你该怎么办？）", "Nothing", "Sleep")
            ]
         ][Math.min(SAVE.data.n.state_papyrus_capture - 1, 3)],
      whew2: ["{#p/human}* (You let the doggy bed be.)"],
      whew3: ["{#p/human}* (You lay in the doggy bed...)"],
      whew4: [
         "{#p/alphys}* And you say they're in here?",
         "{#p/sans}{#f/7}* yup.\n* my brother made that pretty clear.",
         "{#p/alphys}* O-okay...\n* Here goes nothing...",
         "{#p/human}* (It sounds like a door is opening.)",
         "{#p/alphys}* ...",
         "{#p/alphys}* Well, there they are.",
         "{#p/sans}{#f/7}* c'mon, let's make this quick.",
         "{#p/sans}{#f/7}* i doubt it'll be long before undyne shows up.",
         "{#p/alphys}* Going as f-fast as I can!"
      ],
      whew5: [
         "{#p/human}* (It feels like someone is trying to carry you.)",
         "{#p/alphys}* Oh god, w-were humans always this heavy!?"
      ],
      whew6: [
         "{#p/basic}* Huh?\n* Where are...",
         "* ...\n* Asgore's house.",
         "* Come on, let's go find him..."
      ],
      trivia: {
         s_bbox: [
            "{#p/basic}* A bastion box.\n* There's a human inside...",
            "{#p/basic}* Seems this one was adopted by Napstablook."
         ],
         
         ogkxsaucer: () =>
            SAVE.data.b.svr
               ? ["{#p/human}* (You reach your hand deep into the dispenser.)\n* (It's a tad saucy.)"]
               : ["{#p/basic}* It's a dispenser of some kind."],
         mousehole: () =>
            [
               ["{#p/basic}* It's a mouse hole.\n* The mice inside are discussing your great battle."],
               ["{#p/basic}* It's a mouse hole.\n* The mice inside are concerned for your safety."],
               ["{#p/basic}* It's a mouse hole.\n* The mice inside are wondering if you should take a rest."],
               ["{#p/basic}* It's a mouse hole.\n* The mice inside are concerned for your sanity."]
            ][Math.min(SAVE.data.n.state_papyrus_capture - 1, 3)],
         lamppost: () =>
            SAVE.data.b.svr
               ? ["{#p/human}* (You observe the strange lamp bouncing up and down.)"]
               : ["{#p/basic}* It's a bounce lamp."],
         ntower: () =>
            SAVE.data.b.svr
               ? [
                  [
                     "{#p/asriel1}{#f/13}* I guess Alphys never did fix this thing.",
                     "{#f/16}* I don't blame her.\n* That ruleset is kind of a nightmare.",
                     "{#f/20}* Also, it kind of relies on Sans being there.",
                     "{#f/15}* Getting him to participate is... kind of impossible."
                  ],
                  [
                     "{#p/asriel1}{#f/17}* Yeah... Sans.\n* Great sense of humor, but not very active.",
                     "{#f/13}* And by active, I mean physically.",
                     "{#f/15}* And by physically, I mean he doesn't like to move.",
                     "{#f/16}* And by move, I mean get up and walk around.",
                     "{#f/13}* Yeah.\n* He usually just takes some kind of shortcut.",
                     "{#f/15}* I still have no idea how those things work."
                  ],
                  [
                     "{#p/asriel1}{#f/17}* Guess you could say Alphys's choice to not fix this puzzle...",
                     "{#f/20}* Was a little shortcut of her own."
                  ],
                  ["{#p/asriel1}{#f/20}* ... maybe my sense of humor could use some work."]
               ][Math.min(asrielinter.ntower++, 3)]
               : SAVE.data.b.s_state_puzzlenote || (!world.genocide && world.edgy)
                  ? ["{#p/basic}* It's un-activated."]
                  : ["{#p/basic}* What an unfortunate result."],
         s_secret_sign: () =>
            SAVE.data.b.svr
               ? ["{#p/human}* (The sign mentions an escape.)"]
               : SAVE.data.n.state_starton_trashprogress < 2 && SAVE.data.n.plot < 72
                  ? [
                     "{#p/basic}* \"It's taking a time-out.\"",
                     ...(world.goatbro && SAVE.flag.n.ga_asrielDog++ < 1 ? ["{#p/asriel2}{#f/15}* What."] : [])
                  ]
                  : ["{#p/basic}* \"It's escaped.\""],
         grillflower: () =>
            SAVE.data.b.svr
               ? ["{#p/human}* (It appears this plant is very neon indeed.)"]
               : world.darker
                  ? ["{#p/basic}* It's a plant."]
                  : [
                     "{#p/basic}* It's not just a plant...\n* It's a NEON plant.",
                     "* What difference does it make?\n* None, none at all."
                  ],
         librarbywindow1: () =>
            SAVE.data.b.svr
               ? ["{#p/human}* (But there was nothing of real interest to see here.)"]
               : ["{#p/basic}* There's a plant in the window.\n* How interesting."],
         librarbywindow2: () =>
            SAVE.data.b.svr
               ? ["{#p/human}* (You reach up to the window and put your hands on it.)"]
               : ["{#p/human}* (You reach up to the window and put your hands on it.)\n* (You can't see inside.)"],
         papwindow: () =>
            SAVE.data.b.svr
               ? ["{#p/human}* (You peer into the window, but you couldn't see anybody inside.)"]
               : SAVE.data.n.plot_date > 0 && SAVE.data.n.plot_date < 1 && SAVE.data.n.plot < 71.2
                  ? ["{#p/basic}* ... seems Papyrus is waiting patiently for you."]
                  : ["{#p/basic}* ... seems like nobody's home."],
         s_puzzlenote: () =>
            SAVE.data.b.svr
               ? ["{#p/human}* (The note describes the rules of a complex challenge.)"]
               : SAVE.data.b.s_state_puzzlenote
                  ? ["<33>{#p/basic}* It's illegible chicken-scratch."]
                  : [],
         s_backrooms_lessdog: () =>
            SAVE.data.b.svr
               ? [
                  "{#p/human}* (You run your hands through the nonexistent dog's fur.)\n* (The dog seems to like it.)",
                  ...[
                     ["{#p/asriel1}{#f/13}* Frisk, are you okay?"],
                     ["{#p/asriel1}{#f/13}* Frisk.\n* There's nothing there."],
                     ["{#p/asriel1}{#f/15}* ... okay?"],
                     ["{#p/asriel1}{#f/15}* ..."]
                  ][Math.min(asrielinter.s_backrooms_lessdog++, 3)]
               ]
               : SAVE.data.n.state_starton_lesserdog === 2 || (world.population === 0 && !world.bullied)
                  ? ["{#p/basic}* ... but nobody came."]
                  : world.runaway || world.population === 0
                     ? ["{#p/basic}* ... but everybody ran."]
                     : SAVE.data.n.plot < 72
                        ? ["{#p/basic}* It's playing a game of poker against itself.", "* It appears to be losing..."]
                        : [
                           "{#p/basic}* It's playing a game of poker against itself.",
                           "* It appears to be winning...\n* Somehow."
                        ],
         s_backrooms_lesstable: () =>
            SAVE.data.b.svr
               ? ["{#p/human}* (You wonder if the Dog chow is edible for humans.)"]
               : ["{#p/basic}* It's a table for 4-D poker, plus complimentary dog chow."],
         s_beddinng_table: () =>
            SAVE.data.b.svr
               ? ["{#p/human}* (You glance at the table.)\n* (You then glance away.)"]
               : ["{#p/basic}* The obligatory table.\n* Despite its lack of purpose, it fills the space well."],
         s_bh_bone: pager.create(
            0,
            () =>
               SAVE.data.b.svr
                  ? ["{#p/human}* (You admire the artisanship in this minimalistic painting.)"]
                  : [
                     ...(dateready() && SAVE.data.n.state_starton_papyrus === 0
                        ? [
                           "<18>{#p/papyrus}一幅经典的绘画。",
                           "<18>它总能让我想起\n我人生中最\n重要的东西。"
                        ]
                        : []),
                     "{#p/basic}* It's a minimalistic painting of a cartoon bone."
                  ],
            () =>
               SAVE.data.b.svr
                  ? ["{#p/human}* (You admire the artisanship in this minimalistic painting.)"]
                  : ["{#p/basic}* It's a minimalistic painting of a cartoon bone."]
         ),
         s_bh_cottonball: () =>
            SAVE.data.b.svr
               ? [
                  "{#p/human}* (The content of the notes attached to this pile of socks does not surprise you at all.)"
               ]
               : [
                  "{#p/basic}* It's a dirty cotton ball with a series of notes on it.",
                  "<23>{#p/papyrusnt}“衫斯！”\n“把你的棉球捡起来！”",
                  "{#p/without}* \"ok.\"",
                  "<23>{#p/papyrusnt}“别把它放回去！”\n“把它挪走！”",
                  "{#p/without}* \"ok.\"",
                  "<23>{#p/papyrusnt}“你就挪了两微米！”\n“把它拿回你的房间！”",
                  "{#p/without}* \"ok.\"",
                  "<23>{#p/papyrusnt}“不要再把它\n拿回来了！”",
                  "{#p/without}* \"ok.\"",
                  "<23>{#p/papyrusnt}“它还在这！”",
                  "{#p/without}* \"didn't you just say not to bring it back to my room?\"",
                  "<23>{#p/papyrusnt}“算了！”"
               ],
         s_paptrash: pager.create(
            0,
            ...[
               () => [
                  ...(dateready() && SAVE.data.n.state_starton_papyrus === 0
                     ? [
                        "<18>{#p/papyrus}{#f/9}我都不知道你还\n喜欢捡垃圾！",
                        "<18>{#f/0}艾菲斯博士会\n对你很感兴趣的。"
                     ]
                     : []),
                  world.darker ? "{#p/basic}* It's a trash can." : "{#p/basic}* It's a \"stellar\" trash can."
               ],
               pager.create(
                  1,
                  ...[
                     [
                        "{#p/basic}* You can tell this trash can is \"stellar\" because it has \"stellar\" written on the side."
                     ],
                     ["{#p/basic}* A \"stellar\" dude with a \"stellar\" trash can.\n* What more could you want."],
                     ["{#p/basic}* The \"stellarest\" trash can this side of town."],
                     ["{#p/basic}* Or any side, for that matter."],
                     ["{#p/basic}* How \"stellar\" is that?"],
                     ["{#p/basic}* Very?\n* Very very?\n* More \"stellar\" than anything?"],
                     ["{#p/basic}* We've got options here, baby!"],
                     [
                        "<33>{#p/basic}* 但不管时间如何流逝...\n  这个垃圾桶给你的印象\n  仍然“闪亮”。"
                     ],
                     [
                        "{#p/basic}* Actually, the more I think about it, \"stellar\" doesn't begin to scratch the surface."
                     ],
                     ["{#p/basic}* Like, maybe \"astronomical\" would be a better term for it."],
                     ["<33>{#p/basic}* 实际上，还是算了吧。\n* 这个词还是给皇家实验室的\n  高层留着吧。"],
                     ["{#p/basic}* Hmm...\n* But what if the trash can is secretly a black hole!"],
                     ["{#p/basic}* A black hole trash can...\n* Would you risk it?"],
                     ["{#p/basic}* That's a weird question."],
                     [
                        "{#p/basic}* I guess you could say that, thanks to this trash can, I'm getting all \"spaced out.\""
                     ],
                     ["{#p/basic}* You might even say I'm feeling... rather otherworldly."],
                     ["{#p/basic}* ...\n* Ignore that last statement."],
                     ["{#p/basic}* Actually, ignore the last nine things I said entirely.\n* This too."],
                     ["{#p/basic}* Truth is...\n* There's only one adjective this trash can could ever be."],
                     ["{#p/basic}* What is it, you ask?\n* Well, I'll tell you... if you really want to know."],
                     ["{#p/basic}* It's not an astronomical trash can, not by any means."],
                     ["{#p/basic}* It's not black hole-ish in any capacity..."],
                     ["{#p/basic}* Don't you remember?\n* Don't you remember how this all started?"],
                     ["{#p/basic}* It was the first thing I ever said about this trash can."],
                     ["{#p/basic}* ...\n* I said...\n* Wait for it..."],
                     ["{#p/basic}* It's a \"stellar\" trash can."]
                  ].map(lines => () => world.darker ? ["{#p/basic}* It's a trash can."] : lines)
               )
            ].map(
               p => () =>
                  SAVE.data.b.svr
                     ? ["{#p/human}* (You can't make out what's in the trash...)"]
                     : CosmosUtils.provide(p)
            )
         ),
         s_bh_fridge: pager.create(
            0,
            () =>
               SAVE.data.b.svr
                  ? ["{#p/human}* (The food in this fridge seems decent enough.)"]
                  : world.runaway
                     ? ["{#p/basic}* It's been gutted."]
                     : SAVE.data.n.plot === 72
                        ? ["{#p/basic}* Oops, all spaghetti."]
                        : [
                           ...(dateready() && SAVE.data.n.state_starton_papyrus === 0
                              ? [
                                 "<18>{#p/papyrus}{#f/9}啊哈！\n对我的食物博物馆\n感兴趣了吗？",
                                 "<18>{#f/0}请随意参观我的\n烹饪艺术展。"
                              ]
                              : []),
                           "{#p/basic}* Half of the fridge is filled with containers all labelled \"spaghetti.\"",
                           "* The other half contains nothing but an empty bottle of orange crush soda."
                        ],
            () =>
               SAVE.data.b.svr
                  ? ["{#p/human}* (The food in this fridge seems decent enough.)"]
                  : world.runaway
                     ? ["{#p/basic}* It's been gutted."]
                     : SAVE.data.n.plot === 72
                        ? ["{#p/basic}* Oops, all spaghetti."]
                        : [
                           ...(dateready() && SAVE.data.n.state_starton_papyrus === 0
                              ? ["<18>{#p/papyrus}不错的冰箱，\n是吧？"]
                              : []),
                           "{#p/basic}* The bottle is labelled as property of \"ALPHYS.\""
                        ]
         ),
         s_bh_rocktable: pager.create(
            0,
            () =>
               SAVE.data.b.svr
                  ? ["{#p/human}* (You doubt the stardust is actually edible.)"]
                  : [
                     ...(dateready() && SAVE.data.n.state_starton_papyrus === 0
                        ? [
                           "<18>{#p/papyrus}啊，没错，\n这是餐桌。",
                           "<18>{#f/5}我们之前养过\n一块月岩...",
                           "<18>{#f/7}但后来有一天，\n它彻底消失了！",
                           "<18>{#f/4}最开始，我觉得是\n那只爱管闲事的\n狗干的。",
                           "<18>{#f/7}但后来我发现，\n是衫斯用它来测试\n他的...",
                           "<18>{#f/6}他的... 很有用的\n小玩意。\n哇...",
                           "<18>{#f/0}所以呢，\n给他就给他了吧。",
                           "<18>{#f/0}他真的在努力去\n做一件事。",
                           "<18>{#f/4}即使要我们付出\n那块宝贵的月岩的\n代价。",
                           "<18>{#f/0}是啊！！\n努力总比\n不努力强！！"
                        ]
                        : []),
                     "{#p/basic}* It's covered in edible stardust."
                  ],
            () =>
               SAVE.data.b.svr
                  ? ["{#p/human}* (You doubt the stardust is actually edible.)"]
                  : ["{#p/basic}* It's covered in edible stardust."]
         ),
         s_bh_stove: pager.create(
            0,
            () =>
               SAVE.data.b.svr
                  ? [
                     [
                        "{#p/asriel1}{#f/13}* Tell me, Frisk...",
                        "{#f/13}* Have you ever heard the tragedy of the abandoned cheesecake?",
                        "{#f/16}* Right here in this pie tin, a confection was created...",
                        "{#f/3}* Something beyond what its baker forsaw."
                     ],
                     [
                        "{#p/asriel1}{#f/3}* See, Sans had created a cheesecake so sweet...",
                        "{#f/4}* Anyone who tried it would become addicted to it.",
                        "{#f/15}* If he wanted, he could take every customer on the outpost."
                     ],
                     [
                        "{#p/asriel1}{#f/13}* In the end, Sans knew he'd upstage his brother...",
                        "{#f/15}* And that, by simply creating the cheescake, he'd gone too far.",
                        "{#f/16}* So he stashed it away to avoid taking the responsibility."
                     ],
                     ["{#p/asriel1}{#f/16}* Alas, the tragedy of the abandoned cheesecake."]
                  ][Math.min(asrielinter.s_bh_stove++, 3)]
                  : [
                     "{#p/basic}* There's an empty pie tin inside the stove.",
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
                        "{#p/asriel1}{#f/13}* Basically, Sans had created a cheesecake so sweet...",
                        "{#f/16}* Anyone who tried it would become addicted to it.",
                        "{#f/3}* If he wanted, he could have the outpost all to himself.",
                        "{#f/3}* The cheesecake, it would seem...",
                        "{#f/4}* Was a pathway to success Papyrus could never approve of."
                     ],
                     [
                        "{#p/asriel1}{#f/13}* In the end, Sans knew he'd upstage his brother...",
                        "{#f/15}* And that, by simply creating the cheescake, he'd gone too far.",
                        "{#f/16}* So he stashed it away to avoid taking the responsibility."
                     ],
                     ["{#p/asriel1}{#f/16}* Alas, the tragedy of the abandoned cheesecake."]
                  ][Math.min(asrielinter.s_bh_stove++, 3)]
                  : ["{#p/basic}* There's an empty pie tin inside the stove."]
         ),
         s_chew: ["{#p/basic}* It's a squeaky chew toy labelled 'special attack.'"],
         s_crossroads_sign: () =>
            SAVE.data.b.svr
               ? ["{#p/human}* (The sign espouses the many benefits of boxes.)"]
               : [
                  "{#p/basic}* \"This is a box.\"",
                  "* \"You can put an item inside or take an item out.\"",
                  "* \"The same box will appear later, so don't worry about coming back.\"",
                  "* \"Sincerely, a box fan.\""
               ],
         s_doghouse: () =>
            SAVE.data.b.svr
               ? [
                  "{#p/human}* (The interior wall of this doghouse appears to be covered in strange round circles.)"
               ]
               : SAVE.data.n.state_starton_greatdog === 2
                  ? ["{#p/basic}* There must be a lot of empty space in this doghouse."]
                  : world.genocide || world.edgy || world.darker
                     ? ["{#p/basic}* A tiny doghouse."]
                     : SAVE.data.n.plot === 72
                        ? ["{#p/basic}* I wonder if this doghouse also travels in time."]
                        : ["{#p/basic}* What a tiny doghouse!", "{#p/basic}* Seems bigger on the inside."],
         s_doghouse_sign: () =>
            SAVE.data.b.svr
               ? ["{#p/human}* (You struggle to explain what's written on this sign.)"]
               : ["{#p/basic}* \"Woof.\""],
         s_dogs_sign: () =>
            SAVE.data.b.svr
               ? ["{#p/human}* (The sign rates the danger level of certain smells.)"]
               : [
                  "{#p/basic}* \"Smell Danger Ratings\"",
                  "* \"Silicone Smell - Robot\"\n* \"WHITE rating\"\n* \"Can become {@fill=#2f2f2f}BLACK{@fill=#fff} rating.\"",
                  "* \"Unsuspicious Smell - Puppy\"\n* \"{@fill=#003cff}BLUE{@fill=#fff} rating.\"\n* \"Smell of rolling around.\"",
                  world.runaway
                     ? "* \"Weird Smell - Human\"\n* \"{@fill=#00c000}GREEN{@fill=#fff} rating.\"\n* \"Escape at all costs!\""
                     : SAVE.data.n.plot === 72
                        ? "* \"Weird Smell - Human\"\n* \"{@fill=#00c000}GREEN{@fill=#fff} rating.\"\n* \"Can defeat godlike beings.\""
                        : SAVE.data.n.plot < 31
                           ? "* \"Weird Smell - Human\"\n* \"{@fill=#00c000}GREEN{@fill=#fff} rating.\"\n* \"Destroy at all costs!\""
                           : "* \"Weird Smell - Puppy?\"\n* \"{@fill=#00c000}GREEN{@fill=#fff} rating.\"\n* \"Deep knowledge of petting.\""
               ],
         s_dogstandA: () =>
            SAVE.data.b.svr
               ? ["{#p/human}* (It would appear this sign belongs to a male dog.)"]
               : player.position.y > 50
                  ? ["{#p/basic}* \"His.\""]
                  : ["{#p/basic}* Inside is a magazine for fancy blue-and-grey furcuts."],
         s_dogstandB: () =>
            SAVE.data.b.svr
               ? ["{#p/human}* (It would appear this sign belongs to a female dog.)"]
               : player.position.y > 50
                  ? ["{#p/basic}* \"Hers.\""]
                  : ["{#p/basic}* Inside is a brochure for blunt heavy-duty weaponry."],
         s_dogstandC: () =>
            SAVE.data.b.svr
               ? ["{#p/human}* (The signed letter inside looks to have been ignored.)"]
               : world.genocide
                  ? [
                     "{#p/basic}* Inside, on the floor, is a signed Royal Guard letter about tactical retreat.",
                     "{#p/basic}* The \"treat\" in \"retreat\" was nibbled off..."
                  ]
                  : [
                     "{#p/basic}* Inside, on the floor, is a signed Royal Guard letter about standard uniforms.",
                     "{#p/basic}* It's covered in pawprints."
                  ],
         s_grillbys_beegstool: () =>
            SAVE.data.b.svr
               ? ["{#p/asriel1}{#f/20}* I think that might be a little tall for you."]
               : world.darker
                  ? ["{#p/basic}* Just another barstool."]
                  : ["{#p/basic}* A barstool...", "* Seems like the right size for Sans."],
         s_grillbys_drinks: () =>
            SAVE.data.b.svr
               ? ["{#p/human}* (You can't make out what's under the tray table...)"]
               : SAVE.data.n.plot === 72
                  ? ["{#p/basic}* It's a tray table.", "* The camera on the underside has been taken away."]
                  : ["{#p/basic}* It's a tray table.", "* There's a camera hidden on its underside."],
         s_grillbys_shelf: () =>
            SAVE.data.b.svr
               ? [
                  [
                     "{#p/asriel1}{#f/16}* I don't think tasting any of these would be a good idea.",
                     "{#f/15}* The last time someone had one, they burst into flames..."
                  ],
                  [
                     "{#p/asriel1}{#f/15}* Spoiler alert:\n* It was Grillby.",
                     "{#f/20}* Golly.\n* I'm on fire today."
                  ],
                  ["{#p/asriel1}{#f/17}* Seriously, though.\n* You probably shouldn't drink these."]
               ][Math.min(asrielinter.s_grillbys_shelf++, 2)]
               : SAVE.data.n.plot === 72
                  ? ["{#p/basic}* A few of the beverages on this shelf have been used up."]
                  : [
                     "{#p/basic}* A shelf full of various party beverages and sickly liquids.",
                     "{#p/basic}* And a single bottle of water labelled \"fire hazard.\""
                  ],
         s_grillbys_sidestool: () =>
            SAVE.data.b.svr
               ? ["{#p/asriel1}{#f/20}* That one's definitely too tall for you."]
               : world.darker
                  ? ["{#p/basic}* Just another barstool."]
                  : ["{#p/basic}* This barstool is labelled \"PAPYRUS.\""],
         s_grillbys_smolstool: () =>
            SAVE.data.b.svr
               ? ["{#p/asriel1}{#f/19}* This one seems like just your size."]
               : world.darker
                  ? ["{#p/basic}* Just another barstool."]
                  : SAVE.data.b.oops
                     ? ["{#p/basic}* There is nothing special about this barstool."]
                     : ["{#p/basic}* Something tells me this barstool is very special."],
         s_helipad: () =>
            SAVE.data.b.svr
               ? [
                  [
                     "{#p/asriel1}{#f/21}* Ah yes...\n* The hovercar terminal.",
                     "{#f/4}* It's derelict now, but once upon a time...",
                     "{#f/3}* An operator would stand here and direct traffic through the area."
                  ],
                  [
                     "{#p/asriel1}{#f/3}* This terminal was used mainly when Starton was being built.",
                     "{#f/4}* For the first new area built here, it seemed a wise precaution.",
                     "{#f/13}* Ships carrying supplies from the factory's replicators...",
                     "{#f/13}* Often had trouble landing safely without it."
                  ],
                  [
                     "{#p/asriel1}{#f/17}* Eventually, terminals like this weren't needed anymore.",
                     "{#f/20}* The pilots of those supply ships got better at landing unaided.",
                     "{#f/13}* And so, the terminal was forgotten..."
                  ],
                  ["{#p/asriel1}{#f/16}* Just one of many objects whose story is mostly forgotten."]
               ][Math.min(asrielinter.s_helipad++, 3)]
               : ["{#p/basic}* A derelict terminal once used to direct hovercar landings."],
         s_jenga_sign: () =>
            SAVE.data.b.svr
               ? ["{#p/human}* (The sign describes the broken state of the display tower's quantum randomizer.)"]
               : ["{#p/basic}* \"ATTENTION: The quantum randomizer in this display tower is still broken.\""],
         s_library_window: () => [
            "{#p/human}* (You put your hands on window.)",
            ...(SAVE.data.b.svr ? [] : ["{#p/basic}* Smells like paint."])
         ],
         s_librarby_blueBooks: pager.create(
            1,
            () =>
               SAVE.data.b.svr
                  ? [
                     "{#p/human}* (The books on this bookshelf consist of comparisons between the past the and present.)"
                  ]
                  : [
                     "{#p/basic}* This bookshelf is labelled \"Then and Now.\"",
                     "{#p/human}* (You pick out a book...)",
                     "{#p/basic}* \"Before the war, monsters were taught magic on a regular, day-to-day basis.\"",
                     "* \"When most of our race died, so too did many of our teachers.\"",
                     "* \"To account for this, monsters started learning in larger groups.\"",
                     "* \"These new teaching methods were focused on skills to help us survive on the outpost.\"",
                     "* \"By now, the population woes play a much smaller factor in our lives.\"",
                     "* \"Though, we still stick to the new methods, because...\"",
                     "* \"... we're honestly just too lazy to change back.\"",
                     "{#p/human}* (You put the book back on the shelf.)"
                  ],
            () =>
               SAVE.data.b.svr
                  ? [
                     "{#p/human}* (The books on this bookshelf consist of comparisons between the past the and present.)"
                  ]
                  : [
                     "{#p/basic}* This bookshelf is labelled \"Then and Now.\"",
                     "{#p/human}* (You pick out a book...)",
                     "{#p/basic}* \"Once upon a time, monsters used a wide variety of currencies.\"",
                     "* \"JEWEL and KRIOTAAN were the most prominent... but only on the home planet.\"",
                     "* \"When it came to interactions with humans, the only currency used was GOLD.\"",
                     "* \"Our abundant supply of the shiny mineral granted us many favors...\"",
                     "* \"But as a result, the other curriences lost their value in short time.\"",
                     "* \"Now, we just use gold for everything!\"\n* \"It's the monster way.\"",
                     "{#p/human}* (You put the book back on the shelf.)"
                  ],
            () =>
               SAVE.data.b.svr
                  ? [
                     "{#p/human}* (The books on this bookshelf consist of comparisons between the past the and present.)"
                  ]
                  : [
                     "{#p/basic}* This bookshelf is labelled \"Then and Now.\"",
                     "{#p/human}* (You pick out a book...)",
                     "{#p/basic}* \"Since Erogot's fall, our king has done his best to uphold our homeworld's legacy.\"",
                     "* \"Even if he lost the damn thing in the process...\"",
                     "* \"We've all come to accept what happened, and we don't really blame him anymore.\"",
                     "* \"The past two centuries have been tough, but we grow ever-closer to freedom.\"",
                     "* \"The angel is coming...\"",
                     "* \"... for all we know, it might already be here, having read this very book.\"",
                     "{#p/human}* (You put the book back on the shelf.)"
                  ]
         ),
         s_librarby_desk: () =>
            SAVE.data.b.svr
               ? ["{#p/human}* (You observe the dust gathering on this check-out book.)"]
               : ["{#p/basic}* The librarby's check-out book."],
         s_librarby_greenBooks: pager.create(
            1,
            () =>
               SAVE.data.b.svr
                  ? [
                     "{#p/human}* (The books on this bookshelf consist of information, some of which is actually useful.)"
                  ]
                  : [
                     "{#p/basic}* It's a bookshelf labelled \"Information.\"",
                     "{#p/human}* (You pick out a book...)",
                     "{#p/basic}* \"The OuterNet is a joint effort by the king and the royal scientist.\"",
                     "* \"... well, mostly the royal scientist, since the king just wrote the welcome message.\"",
                     "* \"Still, the website serves as a 'virtual town square' for outpost residents.\"",
                     "* \"All you have to do to create an account is...\"",
                     "* \"Um... well...\"",
                     "* \"The instructions weren't exactly 'clear...'\"",
                     "{#p/human}* (You put the book back on the shelf.)"
                  ],
            () =>
               SAVE.data.b.svr
                  ? [
                     "{#p/human}* (The books on this bookshelf consist of information, some of which is actually useful.)"
                  ]
                  : [
                     "{#p/basic}* It's a bookshelf labelled \"Information.\"",
                     "{#p/human}* (You pick out a book...)",
                     "{#p/basic}* \"If you wanna get around on the outpost, the traveler is your best bet.\"",
                     "* \"They can take you anywhere you wanna go...\"",
                     "* \"... given they're available at your nearest taxi stop.\"",
                     "* \"Not gonna lie, the stuff they say seems kinda random.\"",
                     "<33>* “‘狗子的公道’到底是个啥？”",
                     "{#p/human}* (You put the book back on the shelf.)"
                  ],
            () =>
               SAVE.data.b.svr
                  ? [
                     "{#p/human}* (The books on this bookshelf consist of information, some of which is actually useful.)"
                  ]
                  : [
                     "{#p/basic}* It's a bookshelf labelled \"Information.\"",
                     "{#p/human}* (You pick out a book...)",
                     "{#p/basic}* \"Monsters are free to traverse any area of the outpost.\"",
                     "* \"That is, any area short of the last corridor at the top of the Citadel.\"",
                     "* \"Beyond this, only the royal scientist is allowed through...\"",
                     "* \"... we still don't know why.\"",
                     "{#p/human}* (You put the book back on the shelf.)"
                  ]
         ),
         s_librarby_ladder: () =>
            SAVE.data.b.svr
               ? ["{#p/human}* (It appears the access hatch above this ladder was sealed shut.)"]
               : ["{#p/basic}* A random ladder.\n* That's all there is to it."],
         s_librarby_pinkBooks: pager.create(
            1,
            () =>
               SAVE.data.b.svr
                  ? [
                     "{#p/human}* (The books on this bookshelf consist of various facts about the biology of monsters.)"
                  ]
                  : [
                     "{#p/basic}* It's a bookshelf labelled \"Monster Biology.\"",
                     "{#p/human}* (You pick out a book...)",
                     "{#p/basic}* \"Monster funerals, technically speaking, are cool as heck.\"",
                     "* \"When monsters get old and kick the bucket, they turn into dust.\"",
                     "* \"At funerals, we take that dust and spread it on that person's favorite thing.\"",
                     "* \"Then their essence will live on in that thing...\"",
                     "* \"Uhhh, am I at the page minimum yet?\"\n* \"I'm tired of writing this.\"",
                     "{#p/human}* (You put the book back on the shelf.)"
                  ],
            () =>
               SAVE.data.b.svr
                  ? [
                     "{#p/human}* (The books on this bookshelf consist of various facts about the biology of monsters.)"
                  ]
                  : [
                     "{#p/basic}* It's a bookshelf labelled \"Monster Biology.\"",
                     "{#p/human}* (You pick out a book...)",
                     "{#p/basic}* \"Because they are made of magic, monsters' bodies are attuned to their SOUL.\"",
                     "* \"If a monster intends to cause harm, and truly believes in themselves...\"",
                     "* \"Such a monster could become unusually powerful.\"",
                     "* \"But most of our kind do not believe in fighting.\"\n* \"Not whole-heartedly.\"",
                     "* \"If an enemy were to attack us again, with only an outpost to defend ourselves...\"",
                     "* ...",
                     "{#p/human}* (You feel it would be best to stop here.)"
                  ],
            () =>
               SAVE.data.b.svr
                  ? [
                     "{#p/human}* (The books on this bookshelf consist of various facts about the biology of monsters.)"
                  ]
                  : [
                     "{#p/basic}* It's a bookshelf labelled \"Monster Biology.\"",
                     "{#p/human}* (You pick out a book...)",
                     "{#p/basic}* \"While monsters are mostly made of magic, humans are mostly made of water.\"",
                     "* \"With their physical forms, humans are far stronger than us.\"",
                     "* \"But, they will never know the joy of expressing themselves through magic.\"",
                     "* \"They'll never get a bullet- pattern birthday card...\"",
                     "* \"Or play hide-and-go seek with invisibility and clairvoyance...\"",
                     "* \"Or even create wild light shows with electricity magic!\"",
                     "* \"How unfortunate.\"",
                     "{#p/human}* (You put the book back on the shelf.)"
                  ]
         ),
         s_librarby_purpleBooks: pager.create(
            1,
            () =>
               SAVE.data.b.svr
                  ? ["{#p/human}* (The books on this bookshelf document the history of the monster homeworld.)"]
                  : [
                     "{#p/basic}* This bookshelf is labelled \"Homeworld History.\"",
                     "{#p/human}* (You pick out a book...)",
                     "{#p/basic}* \"Each day on our homeworld was a sight to behold.\"",
                     "* \"To start the morning, bright spires of magical energy pierced the skies.\"",
                     "* \"Throughout the day, these magical formations began to resonate together...\"",
                     "* \"All leading to a dazzling release that sent the planet into darkness.\"",
                     "* \"At nightfall, the process of magical coalescense would begin anew.\"",
                     "* \"Bolts of magical energy previously released struck back down from above.\"",
                     "* \"Once enough energy hit the ground, the spires would rise again...\"",
                     "* \"Such was the cycle that once governed our days and nights.\"",
                     "{#p/human}* (You put the book back on the shelf.)"
                  ],
            () =>
               SAVE.data.b.svr
                  ? ["{#p/human}* (The books on this bookshelf document the history of the monster homeworld.)"]
                  : [
                     "{#p/basic}* This bookshelf is labelled \"Homeworld History.\"",
                     "{#p/human}* (You pick out a book...)",
                     "{#p/basic}* \"Monsters didn't always have such an organized structure, you know?\"",
                     "* \"Long, long ago... thousands of years ago, in fact...\"",
                     "* \"Our race frolicked wild and free, with no sense of order or direction.\"",
                     "* \"Heck, we didn't even wear clothing back then!\"",
                     "* \"But as timed passed, we yearned for more.\"\n* \"We wanted to evolve...\"",
                     "* \"During the great renaissance, even the very essence of our magic came into focus.\"",
                     "* \"These developments begat our society, and eventually, our way of life.\"",
                     "* \"... I still can't believe we just ran around naked for two thousand years.\"",
                     "* \"Where's the class in that?\"\n* \"Where's the fashion?\"\n* \"Unbelievable.\"",
                     "{#p/human}* (You put the book back on the shelf.)"
                  ],
            () =>
               SAVE.data.b.svr
                  ? ["{#p/human}* (The books on this bookshelf document the history of the monster homeworld.)"]
                  : [
                     "{#p/basic}* This bookshelf is labelled \"Homeworld History.\"",
                     "{#p/human}* (You pick out a book...)",
                     "{#p/basic}* \"When monsterkind first met with humanity, Erogot was king.\"",
                     "* \"Through his wisdom and guidance, monsters and humans lived in peace and harmony.\"",
                     "* \"But when Erogot died of old age... things would never be the same.\"",
                     "* \"He was a skilled leader, and one his son could never replace.\"",
                     "* \"The war that followed was... sadly inevitable.\"",
                     "{#p/human}* (You put the book back on the shelf.)"
                  ]
         ),
         s_librarby_yellowBooks: pager.create(
            1,
            () =>
               SAVE.data.b.svr
                  ? ["{#p/human}* (The books on this bookshelf discuss various technologies devised by monsters.)"]
                  : [
                     "{#p/basic}* This bookshelf is labelled \"Monster Technology.\"",
                     "{#p/human}* (You pick out a book...)",
                     "{#p/basic}* \"Gerson says the outpost used to just be a small space station.\"",
                     "* \"Then, after twenty years of suffering, someone looked at the force field and said...\"",
                     "* \"'Couldn't WE harvest some of that energy?'\"",
                     "* \"A simple but brilliant idea!\"",
                     "* \"As a result, the CORE was built, and with it came a stable power supply.\"",
                     "* \"We're still using it to this very day!\"",
                     "{#p/human}* (You put the book back on the shelf.)"
                  ],
            () =>
               SAVE.data.b.svr
                  ? ["{#p/human}* (The books on this bookshelf discuss various technologies devised by monsters.)"]
                  : [
                     "{#p/basic}* This bookshelf is labelled \"Monster Technology.\"",
                     "{#p/human}* (You pick out a book...)",
                     "{#p/basic}* \"Ah, the wonders of artificial intelligence...\"",
                     "* \"... or not.\"",
                     "* \"After the builder bot tragedy of K-541.12, we abandoned the idea of a sentient AI.\"",
                     "* \"In fact, the queen barred anyone from creating new AI programs altogether.\"",
                     "* \"These days, there's only one monster who'd have the skills and resources to do so...\"",
                     "{#p/human}* (You put the book back on the shelf.)"
                  ],
            () =>
               SAVE.data.b.svr
                  ? ["{#p/human}* (The books on this bookshelf discuss various technologies devised by monsters.)"]
                  : [
                     "{#p/basic}* This bookshelf is labelled \"Monster Technology.\"",
                     "{#p/human}* (You pick out a book...)",
                     "{#p/basic}* \"Something people forget these days is that there's little to no gravity in space.\"",
                     "* \"One of the earliest advancements made by monsters, even before the war...\"",
                     "* \"Was our state-of-the-art gravity manipulation tech.\"",
                     "* \"Even now, it's built into all areas of the outpost, both big and small...\"",
                     "* \"You, reading this book, are probably standing on it right now.\"",
                     "{#p/human}* (You put the book back on the shelf.)"
                  ]
         ),
         s_math_sign: () =>
            SAVE.data.b.svr
               ? ["{#p/human}* (You can't help but be confused at the contents of this sign.)"]
               : ["{#p/basic}* \"Warning: Dog Justice\""],
         s_pacing_sign: () =>
            SAVE.data.b.svr
               ? ["{#p/human}* (You can't help but smile at the contents of this sign.)"]
               : ["{#p/basic}* \"AWARE OF DOG\"\n* \"... pleas pet dog...\""],
         s_phonecard: () =>
            SAVE.data.b.svr
               ? [
                  "{#p/human}* (The note requests that you call a certain phone number.)",
                  "{#s/phone}{#p/event}* Dialing...",
                  "{#p/human}* (No connection.)"
               ]
               : world.runaway
                  ? [
                     "{#p/basic}* It's a note.",
                     "* \"Call me!\"\n* \"Here's my number!\"",
                     "{#s/phone}{#p/event}* Dialing...",
                     "{#p/basic}* The call went straight to voice-mail.",
                     "{#p/basic}* \"Hello, lonely caller!\"\n* \"Would you like to escape the outpost with me?\"",
                     "{#s/equip}{#p/event}* Click..."
                  ]
                  : SAVE.data.n.plot === 72
                     ? [
                        "{#p/basic}* It's a note.",
                        "* \"Call me!\"\n* \"Here's my number!\"",
                        "{#s/phone}{#p/event}* Dialing...",
                        "{#p/human}* (No connection.)"
                     ]
                     : [
                        "{#p/basic}* It's a note.",
                        "* \"Call me!\"\n* \"Here's my number!\"",
                        "{#s/phone}{#p/event}* Dialing...",
                        "{#p/basic}* The call went straight to voice-mail.",
                        "{#p/basic}* \"Hello, lonely caller!\"\n* \"I'm so sorry I couldn't be here to greet you~\"",
                        "{#s/equip}{#p/event}* Click...",
                        ...(world.goatbro && SAVE.flag.n.ga_asrielVoicemail++ < 1
                           ? ["{#p/asriel2}{#f/10}* ... weird."]
                           : [])
                     ],
         s_sr_cottonball: () =>
            world.darker
               ? ["{#p/basic}* A series of cotton balls in the way of the closet."]
               : [
                  "{#p/basic}* A series of neatly-organized cotton balls.",
                  ...(SAVE.data.b.s_state_inverter
                     ? ["{#p/basic}* ... makes you wonder why they're still in the way of the closet."]
                     : ["{#p/basic}* ... makes you wonder where the rest of Sans's junk went."])
               ],
         s_sr_treadmill: ["{#p/basic}* It's a treadmill.", "{#p/basic}* It's at its highest setting."],
         s_sr_lamp: [
            "{#p/basic}* It's a lamp with a large note hanging inside.",
            "<23>{#p/papyrusnt}\"SORRY, BUT I TOOK BACK THE FLASHLIGHT YOU WERE USING HERE.\"",
            "<23>{#p/papyrusnt}\"IT'S NOT THAT I MIND YOU USING MY PROPERTY...\"",
            "<23>{#p/papyrusnt}\"BUT USING IT IN SUCH AN IMPROPER WAY IS ENTIRELY UNJUSTIFIED!\"",
            "<23>{#p/papyrusnt}\"I DON'T KNOW ABOUT YOU, BUT THE LAST TIME I CHECKED...\"",
            "<23>{#p/papyrusnt}\"A FLASHLIGHT DID NOT COUNT AS NOT A LIGHTBULB!!\""
         ],
         s_sc_book: [
            "{#p/basic}* It's an old logbook from the Royal Lab.",
            "{#p/human}* (You turn to the opened page...)",
            "{#p/basic}* \"Activity log, K-615.07\"",
            "* \"An ideal subject has been picked from the grove.\"",
            "* \"Preparations for the test substance are due to conclude in the coming days.\"",
            "* \"Soon, the subject will be injected with it.\"",
            "* \"With this, our freedom could be closer than ever...\""
         ],
         s_sc_drawer: [
            "{#p/basic}* There's a photo album inside the drawer.",
            "{#p/basic}* Inside the album, there are photos of Sans and Alphys at the Royal Lab.",
            "{#p/basic}* Running experiments, binge-watching old sci-fi anime...",
            "{#p/basic}* They look happy."
         ],
         s_sc_diagram: () => [
            "{#p/basic}* On the table, there's a blueprint for a forcefield-draining weapon.",
            "{#p/basic}* On the wall, there are diagrams of various other concepts...",
            "<33>{#p/basic}* A forcefield polarity inverter, a wormhole aperture stabilizer, and a monster-bound human SOUL.",
            ...(!SAVE.data.b.s_state_charasker
               ? ((SAVE.data.b.s_state_charasker = true),
                  [
                     "{#p/basic}* ... is that possible?\n* A monster SOUL surviving within a human SOUL...?",
                     "{#p/basic}* But the identity of the monster SOUL's owner would be lost...",
                     "{#p/basic}* ..."
                  ])
               : ["{#p/basic}* ... hmm..."])
         ],
         s_pr_papbed: pager.create(
            0,
            () =>
               SAVE.data.b.svr
                  ? ["{#p/human}* (You appreciate the bed for being very awesome in general.)"]
                  : [
                     "{#p/basic}* A neatly-made hypercar bed.",
                     ...(roomready()
                        ? [
                           "<18>{#p/papyrus}那是我的床！",
                           "<18>{#f/4}如果我有机会\n去探索星星的话...",
                           "<18>{#f/0}我想沿着一条\n漫长的星际公路\n航行。",
                           "<18>感受发丝中的静电，\n和皮肤上映出的\n星光...",
                           "<18>{#f/4}当然，这都只是\n一场梦罢了。",
                           "<18>{#f/0}所以我就\n边打盹边航行了。"
                        ]
                        : [])
                  ],
            () =>
               SAVE.data.b.svr
                  ? ["{#p/human}* (You thank the bed for being very awesome in general.)"]
                  : ["{#p/basic}* A neatly-made hypercar bed."]
         ),
         s_pr_papbones: pager.create(
            0,
            () =>
               SAVE.data.b.svr
                  ? [
                     "{#p/basic}* (You reach into the box, but the bones don't deal any damage.)",
                     ...[
                        ["{#p/asriel1}{#f/21}* Careful, Frisk!\n* Those bones might still be active..."],
                        ["{#p/asriel1}{#f/16}* ... or maybe not."],
                        ["{#p/asriel1}{#f/13}* I wonder if you're the kind of person who stands on hot coals."],
                        ["{#p/asriel1}{#f/8}* Boney hot coals."]
                     ][Math.min(asrielinter.s_pr_papbones++, 3)]
                  ]
                  : [
                     "{#p/basic}* A box of bones.",
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
                     "{#p/basic}* (You reach into the box, but the bones don't deal any damage.)",
                     ...[
                        [],
                        ["{#p/asriel1}{#f/16}* ... or maybe not."],
                        ["{#p/asriel1}{#f/13}* I wonder if you're the kind of person who stands on hot coals."],
                        ["{#p/asriel1}{#f/8}* Boney hot coals."]
                     ][Math.min(asrielinter.s_pr_papbones++, 3)]
                  ]
                  : ["{#p/basic}* A box of bones."]
         ),
         s_pr_papcloset: pager.create(
            0,
            () => [
               "{#p/human}* (You look inside the closet...)",
               ...(SAVE.data.b.svr
                  ? ["{#p/human}* (It's hard for you to see in such a dark place.)"]
                  : !world.runaway
                     ? ["{#p/basic}* The clothes inside have been frantically shifted around."]
                     : [
                        "{#p/basic}* Clothes are hung up neatly inside.",
                        SAVE.data.n.plot === 72
                           ? "* One of the clothes has \"Free Bones\" written on it."
                           : "* Many of the clothes have handwritten text drawn on them."
                     ]),
               ...(roomready()
                  ? [
                     "<18>{#p/papyrus}别担心，\n衣橱里没有骷髅。",
                     "<18>{#f/4}当然，\n除非我在换衣服。"
                  ]
                  : [])
            ],
            () => [
               "{#p/human}* (You look inside the closet...)",
               ...(SAVE.data.b.svr
                  ? ["{#p/human}* (It's hard for you to see in such a dark place.)"]
                  : !world.runaway
                     ? ["{#p/basic}* The clothes inside have been frantically shifted around."]
                     : [
                        "{#p/basic}* Clothes are hung up neatly inside.",
                        SAVE.data.n.plot === 72
                           ? "* One of the clothes has \"Free Bones\" written on it."
                           : "* Many of the clothes have handwritten text drawn on them."
                     ])
            ]
         ),
         s_pr_papposter: pager.create(
            0,
            () =>
               SAVE.data.b.svr
                  ? [
                     [
                        "{#p/asriel1}{#f/17}* Ah.\n* That's Papyrus's special attack...",
                        "{#f/13}* In previous timelines, this attack right here...",
                        "{#f/15}* Caused me my fair share of defeats.",
                        "{#f/16}* ... don't ask how or why I was fighting Papyrus."
                     ],
                     ["{#p/asriel1}{#f/10}* What?\n* It wasn't anything bad.\n* Not that time, anyway."],
                     [
                        "{#p/asriel1}{#f/16}* Okay, okay.\n* I might have disguised myself as a human.",
                        "{#f/15}* ... yeah.\n* It looked as bad as you think it would.",
                        "{#f/5}* But hey, I got a chance to battle the great Papyrus!"
                     ],
                     ["{#p/asriel1}{#f/20}* Totally worth it."]
                  ][Math.min(asrielinter.s_pr_papposter++, 3)]
                  : [
                     "{#p/basic}* It's a flag with a menacing skull painted on it.",
                     ...(roomready()
                        ? [
                           "<18>{#p/papyrus}很漂亮的海报吧？",
                           "<18>安黛因在捡垃圾的\n时候发现的。",
                           "<18>{#f/4}一开始上面是\n一个头骨和\n两根交叉的骨头...",
                           "<18>{#f/9}但我想到了\n更好的东西！"
                        ]
                        : [])
                  ],
            () =>
               SAVE.data.b.svr
                  ? [
                     [],
                     ["{#p/asriel1}{#f/10}* What?\n* It wasn't anything bad.\n* Not that time, anyway."],
                     [
                        "{#p/asriel1}{#f/16}* Okay, okay.\n* I might have disguised myself as a human.",
                        "{#f/15}* ... yeah.\n* It looked as bad as you think it would.",
                        "{#f/5}* But hey, I got a chance to battle the great Papyrus!"
                     ],
                     ["{#p/asriel1}{#f/20}* Totally worth it."]
                  ][Math.min(asrielinter.s_pr_papposter++, 3)]
                  : ["{#p/basic}* It's a flag with a menacing skull painted on it."]
         ),
         s_pr_paptable: pager.create(
            0,
            () =>
               SAVE.data.b.svr
                  ? ["{#p/human}* (You marvel at the detail of these action figures...)"]
                  : [
                     "{#p/basic}* A set of action figures with tacky, matching uniforms.",
                     ...(roomready()
                        ? [
                           "<18>{#p/papyrus}啊，那个，\n动作玩偶。",
                           "<18>用来参考理论战斗\n布置场景\n很合适。",
                           "<18>{#f/4}但我为什么\n会有这么多呢？",
                           "<18>{#f/6}那个，嗯...\n国王把它们当做\n礼物送给了我...",
                           "<18>{#f/5}我真心希望\n我也能回报他\n一份礼物。"
                        ]
                        : [])
                  ],
            () =>
               SAVE.data.b.svr
                  ? ["{#p/human}* (Upon reflection, you realize who created these.)"]
                  : ["{#p/basic}* A set of action figures with tacky, matching uniforms."]
         ),
         s_puzzle1_sign: () =>
            SAVE.data.b.svr
               ? ["{#p/human}* (The sign describes the basics of solving the puzzle.)"]
               : ["{#p/basic}* \"Trigger each circuit in order.\""],
         s_puzzle2_sign: () =>
            SAVE.data.b.svr
               ? ["{#p/human}* (The sign defines a starting point for solving the puzzle.)"]
               : ["{#p/basic}* \"Start at the left.\""],
         s_puzzle3_note: () =>
            SAVE.data.b.svr
               ? world.postnoot && world.nootflags.has('s_puzzle3') // NO-TRANSLATE

                  ? [
                     "{#p/human}* (The note's brags about having solved a puzzle in advance.)",
                     ...[
                        ["{#p/asriel1}{#f/20}* Ha, uh, I wonder who wrote that note, huh?\n* Yeah..."],
                        ["{#p/asriel1}{#f/20}* Couldn't be me!"],
                        ["{#p/asriel1}{#f/13}* ..."]
                     ][Math.min(asrielinter.s_puzzle3_note++, 2)]
                  ]
                  : ["{#p/human}* (The note remarks about how the puzzle solution was not modified as intended.)"]
               : world.postnoot && world.nootflags.has('s_puzzle3') // NO-TRANSLATE

                  ? [
                     [
                        "{#p/basic}* It's a note from someone who didn't say who they were...",
                        "* \"Puzzles like these can be so annoying, can't they?\"",
                        "* \"Thankfully, I've taken care of it for you.\"",
                        "* \"Isn't that nice?\"\n* \"You should be thankful!\"",
                        "<#32>µ - \"Sincerely,\"\nµ Your Best Friend"
                     ],
                     [
                        "{#p/basic}* It's a note from someone who didn't say who they were...",
                        "* \"Don't worry.\"\n* \"No matter how many times you do this over...\"",
                        "* \"I'll always be here to make sure you never have to deal with a puzzle again.\"",
                        "* \"It's the least I can do.\"",
                        "<#32>µ - \"Forevermore,\"\nµ Your Best Friend"
                     ]
                  ][Math.min(SAVE.flag.n.neutral_twinkly_loop1, 1)]
                  : !world.genocide && world.edgy
                     ? [
                        "{#p/basic}* It's a note from Sans...",
                        "{#p/without}* \"welp.\"\n* \"seems my bro found out about you after all.\"",
                        "* \"i told him everything you've done up to now, and he's agreed to stay put.\"",
                        "* \"it's a shame, isn't it?\"",
                        "* \"papyrus shouldn't have to deal with this kinda stuff.\"",
                        "* \"but i guess that's the galaxy we live in, now.\"",
                        "* \"well.\n* good luck with the puzzle.\"",
                        "* \"i'm sure it'll take you no time at all.\"",
                        "<#32>µ - \"with all due respect,\"\nµ sans"
                     ]
                     : [
                        "{#p/basic}* It's a note from Papyrus...",
                        "<23>{#p/papyrus}{#f/30}“人类！！这个谜题可跟\n看起来的不一样。”",
                        "<23>“我在等你的时候，\n试着改造了一下...”",
                        "<23>“当然，是为了让图案\n看起来更像我的脸！”",
                        "<23>“不过好像哪里出了岔子...”",
                        "<23>“所以我现在\n只能做成一个\n很烂的箭头形状了！！！”",
                        "<23>“（另外，这个谜题\n需要你自己完成。）”",
                        "<23>“但不用担心！”\n“你肯定做得到的，人类！”",
                        "<#23>µ - “非常相信着你的，”\nµ 帕派瑞斯"
                     ],
         s_redbook: () =>
            SAVE.data.b.svr
               ? ["{#p/human}* (The uniquely-colored book describes a secret weapon lost to time.)"]
               : [
                  "{#p/basic}* It's a bookshelf.",
                  "{#p/human}* (You pick out the red book...)",
                  "{#p/basic}* \"At the height of the war, a secret division of the royal forces was established.\"",
                  "{#p/basic}* \"The so-called 'special weapons' division, focused on experimental research.\"",
                  "{#p/basic}* \"The division would develop a variety of artifacts, but all proved useless in battle...\"",
                  "{#p/basic}* \"That is, all but one.\"\n* \"An enchanted tome known only as 'The Epiphany.'\"",
                  "{#p/basic}* \"Its power was so great, it was deemed too dangerous, even for use against humans.\"",
                  "{#p/basic}* \"The tome was locked from the inside, and stowed away in short order.\"",
                  "{#p/basic}* \"Some say the tome was taken aboard the transport ship used to reach the outpost.\"",
                  "{#p/basic}* \"If so, where is it?\"\n* \"And how would one go about unlocking it?\"",
                  "{#p/basic}* \"Perhaps these questions are better left unanswered.\"",
                  "{#p/human}* (You put the book back on the shelf.)"
               ],
         s_sansbox: () =>
            SAVE.data.b.svr
               ? ["{#p/human}* (Due to how full it is, you can't seem to see inside the mailbox.)"]
               : SAVE.data.n.plot === 72 && !world.runaway
                  ? [
                     "{#p/basic}* Somehow, the mailbox has been stuffed with even more unread junk mail than before.",
                     ...(SAVE.data.b.oops ? [] : ["{#p/basic}* ... color me surprised."])
                  ]
                  : [
                     "{#p/basic}* It's a mailbox overflowing with unread junk mail.",
                     ...(SAVE.data.b.oops ? [] : ["{#p/basic}* ... he never reads the mail anyway."])
                  ],
         s_sheddoor: () =>
            SAVE.data.b.svr
               ? ["{#p/human}* (You can't seem to find a way in.)"]
               : ["{#p/basic}* It's locked from the inside."],
         s_slew: ["{#p/basic}* It's dog food.\n* The pieces look like bones."],
         s_spagnote: () =>
            SAVE.data.b.svr
               ? ["{#p/human}* (The note declares the brilliance of enticing you with a place of spaghetti.)"]
               : !world.genocide && world.edgy
                  ? [
                     "{#p/basic}* It's a note from Sans...",
                     "{#p/without}* \"whoops.\"\n* \"seems like you've found my bro's spaghetti.\"",
                     "* \"looks tasty, right?\"",
                     "* \"well.\"\n* \"it turns out that's kind of the point.\"",
                     "* \"i'd be careful with it if i were you...\"",
                     "* \"'cause the more time you spend eating this...\"",
                     "* \"the more time i have to prepare for the next puzzle.\"",
                     "<#23>µ - \"joke's on you,\"\nµ sans"
                  ]
                  : [
                     "{#p/basic}* It's a note from Papyrus...",
                     "<23>{#p/papyrus}{#f/30}“人类啊！！”\n“享用这盘意面吧。”",
                     "<23>（“但其实你不知道的是，\n这盘意面是个陷阱...”）",
                     "<23>（“单纯是为了吸引你的！！！”）",
                     "<23>（“你会忙着吃它...”）",
                     "<23>（“然后就不会意识到\n自己毫无进展！！”）",
                     "<23>（“再次彻底被\n伟大的帕派瑞斯戏弄！！！ ”）",
                     "<#23>µ - “捏嘿嘿，”\nµ 帕派瑞斯"
                  ],
         s_town_camera1: () =>
            SAVE.data.b.svr
               ? []
               : world.runaway
                  ? [
                     "{#p/basic}* There's no longer anyone to spy on you through the camera hidden in these crystal pods."
                  ]
                  : SAVE.data.n.plot === 72
                     ? ["{#p/basic}* There's no longer a camera hidden in these crystal pods."]
                     : ["{#p/basic}* There's a camera hidden in these crystal pods."],
         s_trapnote: () =>
            [
               [
                  "{#p/basic}* It's a note from Papyrus...",
                  "<23>{#p/papyrus}{#f/30}“抱歉，到安黛因来之前，\n我得把你锁在客房里。”",
                  "<23>“把这里当自己家\n一样吧！！！”",
                  "<22>“已提供茶点和住宿。”",
                  "<#23>µ - “你的捏嘿嘿的，”\nµ 帕派瑞斯"
               ],
               [
                  "{#p/basic}* It's a note from Papyrus...",
                  "<23>{#p/papyrus}{#f/30}\"PLEASE ASK BEFORE YOU ESCAPE!!!\"",
                  "<23>\"WHEN YOU WENT MISSING I GOT WORRIED SICK!!!\"",
                  "<#23>µ - \"SLIGHTLY BONETROUSLED,\"\nµ PAPYRUS"
               ],
               [
                  "{#p/basic}* It's a note from Papyrus...",
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
                        "{#p/asriel1}{#f/20}* $(name) always liked to call this ant colony a \"civilization.\"",
                        "{#f/17}* I guess it was their way of trying to sound smart.",
                        "{#f/13}* I tried to sound smart too, but Mom and Dad saw right through me.",
                        "{#f/13}* $(name) always was a better liar than me..."
                     ],
                     [
                        "<26>{#p/asriel1}{#f/13}* After $(name) arrived, they tried to convince us they were a diplomat.",
                        "{#f/17}* Thankfully, even they couldn't lie THAT well.",
                        "{#f/15}* Imagine how much worse things could've gone if they'd been believed..."
                     ],
                     [
                        "<26>{#p/asriel1}{#f/17}* I'm glad you're not a liar, Frisk.",
                        "{#f/13}* I've had enough dishonesty in my life as it is.",
                        "{#f/20}* ... sorry.\n* I guess this sorta came out of left field."
                     ],
                     ["<26>{#p/asriel1}{#f/15}* Life sure does like to throw curveballs at you sometimes..."]
                  ][Math.min(asrielinter.s_tree++, 3)]
                  : world.darker
                     ? ["{#p/basic}* There's nothing special about this tree-like structure."]
                     : SAVE.data.n.plot === 72
                        ? [
                           "{#p/basic}* Soon enough, this civilization will need to migrate once again.",
                           "* Where shall they go?\n* Sooner or later, we will know."
                        ]
                        : [
                           "{#p/basic}* This innocent tree-like structure is actually the home of a civilization.",
                           "* On the brink of extinction, they migrated here to save their species."
                        ],
            () =>
               SAVE.data.b.svr
                  ? [
                     [],
                     [
                        "<26>{#p/asriel1}{#f/13}* After $(name) arrived, they tried to convince us they were a diplomat.",
                        "{#f/17}* Thankfully, even they couldn't lie THAT well.",
                        "{#f/15}* Imagine how much worse things could have been had they been believed..."
                     ],
                     [
                        "<26>{#p/asriel1}{#f/17}* I'm glad you're not a liar, Frisk.",
                        "{#f/20}* I've had enough difficulty in my life as it is.",
                        "{#f/13}* ... eh, sorry.\n* This topic just came out of left field.",
                        "<26>{#f/13}* I apologize for that."
                     ],
                     ["<26>{#p/asriel1}{#f/17}* Life sure does like to throw curveballs at you sometimes..."]
                  ][Math.min(asrielinter.s_tree++, 3)]
                  : world.darker
                     ? ["{#p/basic}* ..."]
                     : SAVE.data.n.plot === 72
                        ? ["{#p/basic}* Don't worry.\n* They'll find their own way."]
                        : ["{#p/basic}* Pro tip...\n* Don't shake the innocent tree- like structure."]
         ),
         doginfo: () =>
            SAVE.data.b.svr
               ? ["{#p/human}* (The dog treats inside look to have been somewhat devoured.)"]
               : SAVE.data.n.state_starton_doggo === 2 || SAVE.data.n.plot > 27
                  ? SAVE.data.b.oops
                     ? ["{#p/basic}* Inside is a half-empty pack of dog treats."]
                     : ["{#p/basic}* Inside is a pack of dog treats. It's half-full."]
                  : [
                     SAVE.data.n.state_starton_doggo === 3
                        ? "{#p/basic}* Inside is a rather sleepy guard dog.\n* It cannot see you."
                        : "{#p/basic}* Inside is a rather confused guard dog.\n* It cannot see you."
                  ]
      },
      truetext: {
         doggo1: ["{#p/basic}* Dog treats?\n* That dog needs a therapist."],
         doggo2: ["{#p/basic}* Fetch, huh?\n* Now we're getting places."],
         dogs1: ["{#p/basic}* The things we do for the good of the canines."],
         dogs2: ["{#p/basic}* The rusty spanner strikes again."],
         fetch: () =>
            [
               ["{#p/basic}* Fetch, huh?\n* Now we're getting places."],
               ["{#p/basic}* That's two for two on the rusty spanner method.", "{#p/basic}* What else is new?"],
               ["{#p/basic}* You can't keep getting away with this."]
            ][SAVE.data.n.state_starton_latefetch++],
         great1: ["{#p/basic}* It's a proven fact that little puppy kisses are the best."],
         great2: [
            "{#p/basic}* The entire canine unit, beaten with nothing but a wrench and a strong throwing arm.",
            "* The lunacy speaks for itself."
         ],
         great3: ["{#p/basic}* What just happened?"],
         lesser1: ["{#p/basic}* Mysterious words about extending necks suddenly make a lot more sense."],
         lesser2: [
            "{#p/basic}* That's two for two on the rusty spanner method.",
            "{#p/basic}* What else is new?"
         ],
         papyrus1: [
            "{#p/basic}* Papyrus is well-known for his spaghetti.",
            "* What's not as well-known is that he uses a human recipe instead of a monster one.",
            "* An honest mistake by his, uh, \"cooking instructor,\" but...",
            "* Apart from himself, only a human would enjoy it.",
            "* The irony is off the charts."
         ],
         papyrus3: ["{#p/basic}* This is it...", "* You're about to spar with the coolest skeleton in town."],
         papyrus4: [
            "{#p/basic}* He might as well have been waiting his whole life for this moment...",
            "* If I were you, I wouldn't let it go to waste."
         ],
         papyrus5: ["{#p/basic}* Don't worry.", "* With any luck, you'll be best friends in no time."],
         puzzle1: () =>
            SAVE.data.b.svr
               ? ["{#p/asriel1}{#f/20}* Not bad, Frisk.\n* I didn't know you were a mathematics expert..."]
               : ["{#p/basic}* Wow.\n* You actually solved it?"],
         sans3: ["{#p/basic}* You tried."],
         sans4: ["{#p/basic}* Have you done this before...?"],
         sans5: ["{#p/basic}* Really, Sans?\n* That \"puzzle\" wasn't even worth looking at."],
         sans6: ["{#p/basic}* Really, Sans?\n* That \"puzzle\" was impossible."],
         sans7: ["{#p/basic}* That was anti-climactic."],
         sans8: ["{#p/basic}* I'm just as confused as you."],
         sans9: ["{#p/basic}* Aw, c'mon!\n* I wanted to see that!", "* ... oh well..."],
         papdate: () => [
            "{#p/basic}* So... Papyrus, huh?",
            SAVE.data.n.plot > 64.1
               ? "* After all this time, you finally became friends."
               : "* Somehow I knew you two would end up as friends.",
            "* I wish I could tell him how much I adore him...",
            "* But I guess just watching him will have to do for now."
         ]
      },
      vegetoid: pager.create(
         0,
         () => [
            SAVE.data.n.plot === 72
               ? "{#p/basic}* I heard the taxi driver will be here when everyone else is off the outpost."
               : world.population === 0
                  ? "{#p/basic}* I heard the taxi driver will be here when everyone else is gone."
                  : "{#p/basic}* I heard the taxi driver doesn't eat their greens.",
            "<33>{#p/basic}* 它真的是个怪物吗...？"
         ],
         () => [
            SAVE.data.n.plot === 72
               ? "{#p/basic}* A real monster wouldn't hesitate to escape this dreadful place."
               : world.population === 0
                  ? "{#p/basic}* ..."
                  : "{#p/basic}* Real monsters always eat their greens."
         ]
      ),
      vegetoidx: () =>
         SAVE.data.b.svr
            ? ["{#p/human}* (You can't seem to find anyone down there.)"]
            : world.bulrun
               ? ["{#p/basic}* ... but everybody ran."]
               : ["{#p/basic}* ... but nobody came."],
      xtowerHiscoreHeader: "排行榜",
      xtowerHiscoreNames: {
         kidd: "UNDYNEFAN10",
         napstablook: "纳普斯特22",
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
               "{#p/event}* Ring, ring...",
               "{#p/alphys}* So... killing him wasn't g-good enough, huh?",
               "* You just had to go and beat his score on my... stupid m-minigame...",
               "* Ehehe...",
               "* You're truly disgusting...",
               "* ...",
               "{#s/equip}{#p/human}* (You lost all of your G.)",
               ...(world.goatbro
                  ? SAVE.flag.n.genocide_milestone < 5
                     ? SAVE.flag.n.ga_asrielXtower++ < 1
                        ? ["{#p/asriel2}{#f/10}* Daring today, aren't we?"]
                        : []
                     : SAVE.flag.n.genocide_milestone < 6
                        ? SAVE.flag.n.ga_asrielAlphysCom2++ < 1
                           ? ["{#p/asriel2}{#f/1}* Now THAT's the Alphys I like to see."]
                           : []
                        : SAVE.flag.n.ga_asrielAlphysCom5++ < 1
                           ? ["{#p/asriel2}{#f/4}* Too bad this won't save her when she's dead."]
                           : []
                  : [])
            ]
            : [
               "{#p/event}* Ring, ring...",
               "{#p/sans}* didja seriously just put in all that effort tryna beat my score?",
               "{#f/3}* wow.\n* you're even more stubborn than my bro.",
               ...(SAVE.data.n.state_starton_papyrus === 1
                  ? [
                     "{#f/3}* ...",
                     "{*}{#p/darksans}{#f/1}{#i/5}{#s.stop}* Too bad he's dead, huh?",
                     "{*}{#s.resume}{%}"
                  ]
                  : [
                     SAVE.data.n.plot === 72
                        ? "{#f/0}* i'd give you a special reward, but i'm still looking for toriel."
                        : "{#f/0}* i'd give you a special reward, but i'm on break right now.",
                     ...(world.edgy_x
                        ? ["{#f/0}* no hard feelings.", "{#s/equip}{#p/event}* Click..."]
                        : [
                           "{#f/2}* instead, i'll just send ya some pocket change.",
                           "{#s/equip}{#p/human}* (You got 10000G.)"
                        ])
                  ])
            ],
      xtowerAsriel: [
         "{#p/asriel1}{#f/13}* ... you actually beat the high score?",
         "{#f/17}* Wow.\n* I under-estimated you.",
         "{#f/20}* Very cool, Frisk."
      ],
      xtowerScore: "得分：$(x)"
   },

   b_group_starton: {
      dogs: () => (world.goatbro ? ["{#p/asriel2}* Dogamy and Dogaressa."] : ["{#p/story}* Dogi assault you!"]),
      spacetopJerry: () =>
         world.goatbro
            ? ["{#p/asriel2}* Tacky hats and fickle friends."]
            : ["{#p/story}* Astro Serf saunters in!\n* Jerry came too."],
      stardrakeSpacetop: () =>
         world.goatbro
            ? ["{#p/asriel2}* The teenage idiot squad."]
            : SAVE.data.b.s_state_chilldrake
               ? ["{#p/story}* Chilldrake and Astro Serf pose like bad guys."]
               : ["{#p/story}* Stardrake and Astro Serf pose like bad guys."],
      stardrakeSpacetop2a: () =>
         world.goatbro
            ? ["{#p/asriel2}* One left."]
            : SAVE.data.b.s_state_chilldrake
               ? ["{#p/story}* Chilldrake remains steady."]
               : ["{#p/story}* Stardrake remains steady."],
      stardrakeSpacetop2b: () =>
         world.goatbro ? ["{#p/asriel2}* One left."] : ["{#p/story}* Astro Serf remains steady."],
      stardrakeSpacetop2c: () =>
         world.goatbro ? ["{#p/asriel2}* One left."] : ["{#p/story}* Just Astro now."],
      stardrakeSpacetop2d: () => (world.goatbro ? ["{#p/asriel2}* Jerry."] : ["{#p/story}* Jerry."]),
      stardrakeSpacetopJerry: () =>
         world.goatbro
            ? ["{#p/asriel2}* The teenage idiot squad.\n* Also, Jerry."]
            : SAVE.data.b.spared_jerry
               ? ["{#p/story}* Jerry and friends appear!"]
               : SAVE.data.b.s_state_chilldrake
                  ? ["{#p/story}* Astro Serf and Chilldrake confront you, sighing.\n* Jerry."]
                  : ["{#p/story}* Astro Serf and Stardrake confront you, sighing.\n* Jerry."],
      stardrakeSpacetopJerry2a: () =>
         world.goatbro
            ? ["{#p/asriel2}* Two left."]
            : SAVE.data.b.s_state_chilldrake
               ? ["{#p/story}* Astro Serf and Chilldrake remain steady."]
               : ["{#p/story}* Astro Serf and Stardrake remain steady."],
      stardrakeSpacetopJerry2b: () =>
         world.goatbro ? ["{#p/asriel2}* Two left."] : ["{#p/story}* Astro Serf remains steady.\n* Jerry."],
      stardrakeSpacetopJerry2c: () =>
         world.goatbro
            ? ["{#p/asriel2}* Two left."]
            : SAVE.data.b.s_state_chilldrake
               ? SAVE.data.b.spared_jerry
                  ? ["{#p/story}* Chilldrake and Jerry remain steady!"]
                  : ["{#p/story}* Chilldrake remains steady.\n* Jerry."]
               : SAVE.data.b.spared_jerry
                  ? ["{#p/story}* Stardrake and Jerry remain steady!"]
                  : ["{#p/story}* Stardrake remains steady.\n* Jerry."]
   },

   b_opponent_stardrake: {
      act_check: () =>
         world.goatbro
            ? SAVE.data.b.s_state_chilldrake
               ? [
                  "{#p/asriel2}* Chilldrake, the teen rebel.\n* Nothing more pointless than a rebel without a cause."
               ]
               : [
                  "{#p/asriel2}* Stardrake, the comedian.\n* A bigger joke than he himself could ever hope to tell."
               ]
            : SAVE.data.b.s_state_chilldrake
               ? ["<33>{#p/story}* CHILLDRAKE - ATK 12 DEF 7\n* Rebels against everything!!\n* On the lookout for Starry."]
               : ["{#p/story}* STARDRAKE - ATK 12 DEF 7\n* This teen comedian fights to keep a captive audience."],
      act_check2: () =>
         SAVE.data.b.s_state_chilldrake
            ? ["{#p/story}* CHILLDRAKE - ATK 12 DEF 7\n* Rebels against everything!!\n* Looking for a way out."]
            : ["{#p/story}* STARDRAKE - ATK 12 DEF 7\n* This teen isn't taking your punchline very well."],
      act_check3: () =>
         SAVE.data.b.s_state_chilldrake
            ? ["{#p/story}* CHILLDRAKE - ATK 12 DEF 7\n* Rebels against everything!!\n* Especially flirting!!"]
            : ["{#p/story}* STARDRAKE - ATK 12 DEF 7\n* Flirting is no joke for this teen comedian."],
      act_check4: () =>
         SAVE.data.b.s_state_chilldrake
            ? ["{#p/story}* CHILLDRAKE - ATK 12 DEF 7\n* The rebellion is fading..."]
            : ["{#p/story}* STARDRAKE - ATK 12 DEF 7\n* Things are looking up for this teen comedian."],
      act_flirt: () => ["{#p/human}* (You make a romantic joke.)"],
      flirtTalk1: ["<08>{#p/basic}{~}You're weird."],
      flirtTalk2: ["<08>{#p/basic}{~}You're mean AND weird."],
      genoStatus: () =>
         SAVE.data.b.s_state_chilldrake ? ["{#p/asriel2}* Chilldrake."] : ["{#p/asriel2}* Stardrake."],
      heckleStatus: () =>
         world.goatbro
            ? SAVE.data.b.s_state_chilldrake
               ? ["{#p/asriel2}* Chilldrake."]
               : ["{#p/asriel2}* Stardrake."]
            : SAVE.data.b.s_state_chilldrake
               ? ["{#p/story}* Chilldrake is puffed up..."]
               : ["{#p/story}* Stardrake is puffed up..."],
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
            ? ["{#p/human}* (You denounce Chilldrake for its cause.)"]
            : ["{#p/human}* (You boo Stardrake.)"],
      heckleText2: () =>
         SAVE.data.b.s_state_chilldrake
            ? ["{#p/human}* (You tell Chilldrake that they should be a rebel somewhere else.)"]
            : ["{#p/human}* (You tell Stardrake that they aren't funny.)"],
      heckleText3: () =>
         SAVE.data.b.s_state_chilldrake
            ? [
               "{#p/human}* (You mock Chilldrake for protesting out in the middle of nowhere.)",
               "{#p/basic}* Chilldrake takes your mockery as advice, and saunters off to town..."
            ]
            : [
               "{#p/human}* (You tell Stardrake that no one will ever love them the way they are.)",
               "{#p/basic}* Stardrake struggles to make a retort, and slinks away utterly crushed..."
            ],
      hurtStatus: () =>
         world.goatbro
            ? ["{#p/asriel2}* Almost dead."]
            : SAVE.data.b.s_state_chilldrake
               ? ["{#p/story}* Chilldrake is flaking apart."]
               : ["{#p/story}* Stardrake is flaking apart."],
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
            ? ["{#p/story}* Chilldrake is losing faith in its rebellion."]
            : ["{#p/story}* Stardrake is pleased with its \"stellar\" joke."],
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
            ? ["{#p/human}* (You agree with Chilldrake.)"]
            : ["{#p/human}* (You laugh at Stardrake's remark.)"],
      jokeText1: () =>
         SAVE.data.b.s_state_chilldrake
            ? ["{#p/human}* (But it hasn't said anything you could agree with yet.)"]
            : ["{#p/human}* (But it hasn't said anything you could laugh at yet.)"],
      jokeText2: () =>
         SAVE.data.b.s_state_chilldrake
            ? ["{#p/human}* (You agree with Chilldrake.)"]
            : ["{#p/human}* (You laugh at Stardrake's pun.)"],
      jokeText3: () =>
         SAVE.data.b.s_state_chilldrake
            ? ["{#p/human}* (You double down on your agreement with Chilldrake.)"]
            : ["{#p/human}* (You continue to laugh at Stardrake's puns.)"],
      name: () => (SAVE.data.b.s_state_chilldrake ? "* Chilldrake" : "* 星铁龙"),
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
      punText1: ["{#p/human}* (You make a space pun.)"],
      randStatus1: () =>
         SAVE.data.b.s_state_chilldrake
            ? ["{#p/story}* Chilldrake is wondering where Starry went."]
            : ["{#p/story}* Stardrake is assessing the crowd."],
      randStatus2: () =>
         SAVE.data.b.s_state_chilldrake
            ? ["{#p/story}* Chilldrake is chanting an anarchist spell."]
            : ["{#p/story}* Stardrake is practicing its next pun."],
      randStatus3: () =>
         SAVE.data.b.s_state_chilldrake
            ? ["{#p/story}* Chilldrake starts a one- monster riot."]
            : ["{#p/story}* Stardrake is smiling at the thought of its next pun."],
      randStatus4: () => ["{#p/story}* Smells like wet pillows."],
      randStatus5: () =>
         SAVE.data.b.s_state_chilldrake
            ? ["{#p/story}* Smells like body spray."]
            : ["{#p/story}* Stardrake sighs in relief, realizing its own name is in fact not a pun."],
      status1: () =>
         SAVE.data.b.s_state_chilldrake
            ? ["{#p/story}* Chilldrake saunters up!"]
            : ["{#p/story}* Stardrake flutters forth!"]
   },
   b_opponent_jerry: {
      act_check: () =>
         SAVE.data.b.spared_jerry
            ? world.goatbro
               ? [
                  "<33>{#p/asriel2}* Jerry, the undisputable jerk.\n* I refuse to believe one flirt could have that much influence."
               ]
               : [
                  "{#p/story}* JERRY - ATK 0 DEF 30\n* A born-again monster, awakened with the power of friendship!"
               ]
            : world.goatbro
               ? [
                  "{#p/asriel2}* Jerry, the undisputable jerk.\n* A worthless piece of garbage, nothing more, nothing less."
               ]
               : ["{#p/story}* JERRY - ATK 0 DEF 30\n* Everyone knows Jerry.\n* Makes attacks last longer."],
      act_flirt: () =>
         SAVE.data.b.spared_jerry
            ? ["{#p/human}* (You flirt with Jerry.)\n* (It appreciates the compliment.)"]
            : 5 <= world.flirt
               ? ["{#p/human}* (You call on your experience, and deliver a life-changing flirt.)"]
               : [
                  "{#p/human}* (You flirt with Jerry.)",
                  "{#p/basic}* Jerry seems to like you a little too much now."
               ],
      act_ditch: () => ["{#p/human}* (You ditch Jerry.)"],
      flirtStatus: ["{#p/story}* Jerry's redemption arc begins."],
      flirtStatusWeird: ["{#p/story}* This is wrong on so many levels."],
      flirtTalk: [
         "<08>{#p/basic}{~}You... y-you...",
         "<08>{#p/basic}{~}Just for you, I'll...",
         "<08>{#p/basic}{~}I'll be the best person I can be!"
      ],
      flirtTalkWeird: ["<08>{#p/basic}{~}*licks lips*"],
      genoStatus: ["{#p/asriel2}* Jerry."],
      hurtStatus: () => (world.goatbro ? ["{#p/asriel2}* Almost dead."] : ["{#p/story}* Jerry is wounded."]),
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
      name: "* 杰瑞",
      randStatus1: () =>
         SAVE.data.b.spared_jerry
            ? ["{#p/story}* Jerry is living care-free."]
            : ["{#p/story}* Jerry eats powdery food and licks its hands proudly."],
      randStatus2: () =>
         SAVE.data.b.spared_jerry
            ? ["{#p/story}* Jerry giggles from happiness."]
            : ["{#p/story}* Jerry sneezes without covering its nose."],
      randStatus3: () =>
         SAVE.data.b.spared_jerry
            ? ["{#p/story}* Jerry lets out a squeal of excitement."]
            : ["{#p/story}* Jerry lets out a yawn."],
      randStatus4: () =>
         SAVE.data.b.spared_jerry
            ? ["{#p/story}* Smells like...... Jerry?"]
            : ["{#p/story}* Smells like...... Jerry."],
      status1: ["{#p/story}* Jerry clings to you!"],
      ditchResult: () =>
         SAVE.data.b.spared_jerry
            ? battler.alive.length === 1
               ? ["{#p/basic}* The other monster wishes Jerry was still here..."]
               : ["{#p/basic}* The other monsters wish Jerry was still here..."]
            : battler.alive.length === 1
               ? ["{#p/basic}* The other monster celebrates Jerry's disappearance."]
               : ["{#p/basic}* The other monsters celebrate Jerry's disappearance."]
   },
   b_opponent_mouse: {
      act_check: () =>
         world.goatbro
            ? ["{#p/asriel2}* Whizkarat, the homeless cat.\n* Lost its purpose in life a long time ago."]
            : ["<33>{#p/story}* WHIZKARAT - 攻击16 防御8\n* 这只以城为家的时髦的猫\n  只想过简单的生活。"],
      act_check2: [
         "<33>{#p/story}* WHIZKARAT - ATK 16 DEF 8\n* This posh city cat regrets going where it doesn't belong."
      ],
      act_check3: [
         "<33>{#p/story}* WHIZKARAT - ATK 16 DEF 8\n* This reformed country cat is quite pleased with itself."
      ],
      act_check4: ["<33>{#p/story}* WHIZKARAT - ATK 16 DEF 8\n* This reformed country cat has taken a liking to you."],
      act_direct: ["{#p/human}* (You tell Whizkarat a mouse fact.)"],
      act_direct2: [
         "{#p/human}* (You tell Whizkarat everything you know about mice.)",
         "{#p/basic}* Suddenly...!"
      ],
      act_direct3: ["{#p/human}* (You try to tell Whizkarat more, but it's already found its way.)"],
      act_disown: [
         "{#p/human}* (You pluck a whisker from Whizkarat's face.)",
         "{#p/basic}* Whizkarat lets out a gnarly hiss!"
      ],
      act_disown2: [
         "{#p/human}* (You pluck another whisker from Whizkarat's face.)",
         "{#p/basic}* Whizkarat scurries away!"
      ],
      act_disown3: ["{#p/human}* (You try to pluck a whisker, but Whizkarat pretends it has none.)"],
      act_flirt: ["{#p/human}* (You make a cute remark and scratch Whizkarat's neck.)"],
      disownStatus: () =>
         world.goatbro ? ["{#p/asriel2}* Whizkarat."] : ["{#p/story}* Whizkarat is losing its cool."],
      disownTalk1: ["<08>{#p/basic}{~}把你的\n爪子\n拿开..！"],
      flirtTalk: ["<08>{#p/basic}{~}No pussy- cats allowed."],
      flirtTalk2: ["<08>{#p/basic}{~}\x00*purrs gently*"],
      genoStatus: ["{#p/asriel2}* Whizkarat."],
      hurtStatus: () =>
         world.goatbro ? ["{#p/asriel2}* Almost dead."] : ["{#p/story}* Whizkarat is nearing demise."],
      idleTalk1: ["<08>{#p/basic}{~}What food do they eat?"],
      idleTalk2: ["<08>{#p/basic}{~}Where do they hide?"],
      idleTalk3: ["<08>{#p/basic}{~}How do they speak?"],
      idleTalk4: ["<08>{#p/basic}{~}Do they dream?"],
      initTalk1: ["<08>{#p/basic}{~}Alas, here I stand."],
      initTalk2: ["<08>{#p/basic}{~}Oh, how I lose myself.."],
      initTalk3: ["<08>{#p/basic}{~}事态\n并不\n理想。"],
      initTalk4: ["<08>{#p/basic}{~}Could you help me?"],
      name: "* Whizkarat",
      randStatus1: ["{#p/story}* Whizkarat fantasizes about getting down on all fours."],
      randStatus2: ["{#p/story}* Whizkarat scans the area."],
      randStatus3: ["{#p/story}* Whizkarat is trying to pretend that it is small."],
      randStatus4: ["{#p/story}* Smells like top-twenty-cheese."],
      remindStatus: () =>
         world.goatbro
            ? ["{#p/asriel2}* Whizkarat."]
            : ["{#p/story}* Whizkarat just needs a little more help."],
      remindTalk1: ["<08>{#p/basic}{~}住在\n洞里，\n是吗..？"],
      remindTalk2: ["<08>{#p/basic}{~}会像\n玩具\n吱吱叫，\n是吗..？"],
      remindTalk3: ["<08>{#p/basic}{~}从现在\n开始，\n我应该像\n老鼠一样\n生活。"],
      safeStatus: () =>
         world.goatbro ? ["{#p/asriel2}* It's vulnerable."] : ["{#p/story}* Whizkarat has found its way."],
      safeTalk1: ["<08>{#p/basic}{~}Wonder- ful..."],
      safeTalk2: ["<08>{#p/basic}{~}Simply splen- did..."],
      status1: ["{#p/story}* Whizkarat arrives!"]
   },
   b_opponent_doggo: {
      act_check: () =>
         world.goatbro
            ? ["{#p/asriel2}* Doggo, the unsightly dog.\n* How exactly did this idiot get a job again?"]
            : ["{#p/story}* DOGGO - ATK 13 DEF 7\n* Easily excited by movement.\n* Hobbies include: Cuddles."],
      act_check2: ["{#p/story}* DOGGO - ATK 13 DEF 7\n* Struggling to even see itself..."],
      act_check3: ["{#p/story}* DOGGO - ATK 13 DEF 7\n* A very excited dog, currently enjoying a hobby."],
      act_check4: ["{#p/story}* DOGGO - ATK 13 DEF 7\n* This dog strikes you as being lonely in life."],
      act_flirt: () => ["{#p/human}* (You flirt with Doggo.)"],
      act_cuddle: () => ["{#p/human}* (You cuddle Doggo closely.)"],
      fetch: () => [
         "{#p/human}* (You throw the spanner.)\n* (The dog runs to get it.)\n* (You play fetch for a while.)"
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
         world.goatbro ? ["{#p/asriel2}* He's vulnerable."] : ["{#p/story}* Doggo has lost sight of you."],
      name: "* 遁狗",
      fetchStatus: ["{#p/story}* Doggo loves fetch!"],
      fetchpet: ["{#p/human}* (But the dog was too busy looking for the spanner to be pet.)"],
      fetchflirt: ["{#p/human}* (But the dog was too busy looking for the spanner to hear you.)"],
      fetchcuddle: ["{#p/human}* (But the dog was too busy looking for the spanner to be cuddled.)"],
      normaStatus: () => (world.goatbro ? ["{#p/asriel2}* Doggo."] : ["{#p/story}* Doggo knows you're here."]),
      pet: () => [
         "{#p/human}* (You pet Doggo.)",
         ...(world.goatbro
            ? [
               [],
               ["{#p/asriel2}* ... again?"],
               ["{#p/asriel2}* It's not THAT funny..."],
               ["{#p/asriel2}* ... or is it?"],
               ["{#p/asriel2}* This is so stupid."],
               ["{#p/asriel2}* Do you really need to do this?"],
               ["{#p/asriel2}* ... do you?"],
               ["{#p/asriel2}* I guess so."],
               ["{#p/asriel2}* ..."],
               ["{#p/asriel2}* This is getting out of hand..."],
               ["{#p/asriel2}* Still?\n* Come on..."],
               ["{#p/asriel2}* Wow.\n* Just wow."],
               ["{#p/asriel2}* You are enjoying this way too much."],
               ["{#p/asriel2}* ..."]
            ][Math.min(battler.volatile[0].vars.pet - 1, 13)]
            : [])
      ],
      cuddle: pager.create(
         0,
         ["<11>{#p/basic}{~}抱抱！？\n行吧，至少\n我知道它在\n哪里了！"],
         ["<11>{#p/basic}{~}又抱！？"]
      ),
      petStatus: () =>
         world.goatbro ? ["{#p/asriel2}* He's vulnerable."] : ["{#p/story}* Doggo has been pet."],
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
      status1: () => (world.goatbro ? ["{#p/asriel2}* Doggo."] : ["{#p/story}* Doggo blocks the way!"]),
      sussy: () =>
         world.goatbro ? ["{#p/asriel2}* Doggo."] : ["{#p/basic}* Doggo is too suspicious of your actions."]
   },
   b_opponent_lesserdog: {
      act_check: () =>
         world.goatbro
            ? ["{#p/asriel2}* Canis Minor, the ignorant dog.\n* It probably doesn't even know why it's here."]
            : ["{#p/story}* CANIS MINOR - ATK 12 DEF 2\n* Wields a shiny dogger made of fido-nium."],
      act_check2: [
         "{#p/story}* CANIS MINOR - ATK 12 DEF 2\n* Scarred for life, this puppy wants to turn tail and run."
      ],
      act_check3: [
         "{#p/story}* CANIS MINOR - ATK 12 DEF 2\n* It's necks-in-line for the galaxy's tallest monster."
      ],
      act_check4: ["{#p/story}* CANIS MINOR - ATK 12 DEF 2\n* Trying its best to decipher your advanced petting."],
      act_check5: ["{#p/story}* CANIS MINOR - ATK 12 DEF 2\n* The journey for this puppy has only just begun."],
      act_flirt: ["{#p/human}* (You tell Canis Minor you love it by petting it in morse code.)"],
      act_handshake: [
         "{#p/human}* (You place your hand on Canis Minor's head, shaking and ruffling its fur to the core.)"
      ],
      act_inquire: [
         "{#p/human}* (You pet Canis Minor and ask it who's a good dog. It barks its answer excitedly.)"
      ],
      act_tickle: [
         "{#p/human}* (You tickle Canis Minor's sides, thereby petting it.)\n* (It's a frenzy of excitement.)"
      ],
      fetch: () => [
         "{#p/human}* (You throw the spanner.)\n* (The dog elongates its neck to reach it.)",
         "{#p/human}* (You play fetch for a while.)",
         ...(world.goatbro ? ["{#p/asriel2}* But why though?"] : [])
      ],
      fetchStatus: ["{#p/story}* Canis Minor loves fetch!"],
      fetchTalk: ["<11>{#p/basic}{~}(Pants fast)"],
      hurtStatus: () =>
         world.goatbro
            ? ["{#p/asriel2}* Almost dead."]
            : ["{#p/story}* Canis Minor tucks its tail between its legs."],
      name: "* 小犬座",
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
      petText1: () => ["{#p/human}* (You barely lift your hand.)", "{#p/basic}* How exciting!"],
      petText2: () => [
         "{#p/human}* (You lightly touch the dog.)",
         "{#p/basic}* It's already overexcited...",
         ...(world.goatbro ? ["{#p/asriel2}* Dogs do love to be pet."] : [])
      ],
      petText3: () => [
         "{#p/human}* (You pet Canis Minor.)",
         "{#p/basic}* It's raising its head to meet your hand.",
         ...(world.goatbro ? ["{#p/asriel2}* Okay, you've pet it.\n* There's really no reason to keep going."] : [])
      ],
      petText4: () => [
         "{#p/human}* (You pet Canis Minor.)",
         "{#p/basic}* It was a good dog.",
         ...(world.goatbro ? ["{#p/asriel2}* No reason to keep going?"] : [])
      ],
      petText5: () => [
         "{#p/human}* (You pet Canis Minor.)",
         "{#p/basic}* Its excitement knows no bounds...",
         ...(world.goatbro ? ["{#p/asriel2}* No reason to keep going."] : [])
      ],
      petText6: () => [
         "{#p/human}* (You pet Canis Minor.)",
         "{#p/basic}* Critical pet!\n* Dog excitement increased.",
         ...(world.goatbro ? ["{#p/asriel2}* Golly, $(name)."] : [])
      ],
      petText7: () => [
         "{#p/human}* (You have to jump up to pet the dog.)",
         ...(world.goatbro ? ["{#p/asriel2}* We can't do this all day."] : [])
      ],
      petText8: () => [
         "{#p/human}* (You pet Canis Minor without even reaching it.)",
         "{#p/basic}* It gets more excited.",
         ...(world.goatbro ? ["{#p/asriel2}* We CAN do this all day...?"] : [])
      ],
      petText9: () => [
         "{#p/human}* (You pet Canis Minor.)",
         "{#p/basic}* There is no way to stop this madness.",
         ...(world.goatbro ? ["{#p/asriel2}* ..."] : [])
      ],
      petText10: () => [
         "{#p/human}* (You pet Canis Minor.)",
         "{#p/basic}* Many small pets for a dog, one giant neck amongst dog-kind.",
         ...(world.goatbro ? ["{#p/asriel2}* Why are we still here."] : [])
      ],
      petText11: () => [
         "{#p/human}* (You call Canis Minor, but it cannot hear you.)",
         ...(world.goatbro ? ["{#p/asriel2}* There.\n* It's totally out of reach now."] : [])
      ],
      petText12: () => ["{#p/basic}* ...", ...(world.goatbro ? ["{#p/asriel2}* ???"] : [])],
      petText13: () => [
         "{#p/human}* (You can reach Canis Minor again.)",
         ...(world.goatbro ? ["{#p/asriel2}* You've GOT to be kidding me."] : [])
      ],
      petText14: () => ["{#p/human}* (You pet Canis Minor.)"],
      petText15: () => [
         "{#p/human}* (You pet Canis Minor.)",
         "{#p/basic}* It's possible that you may have a problem."
      ],
      petText16: () => [
         "{#p/human}* (Canis Minor is unpettable, but appreciates the attempt.)",
         ...(world.goatbro ? ["{#p/asriel2}* Stop."] : [])
      ],
      petText17: () => [
         "{#p/human}* (You pet Canis Minor.)",
         "{#p/basic}* Perhaps mankind was not meant to pet this much.",
         ...(world.goatbro ? ["{#p/asriel2}* Please stop."] : [])
      ],
      petText18: () => [
         "{#p/human}* (You pet Canis Minor.)",
         "{#p/basic}* It continues.",
         ...(world.goatbro ? ["{#p/asriel2}* ..."] : [])
      ],
      petText19: () => [
         "{#p/human}* (But Canis Minor was beyond your reach.)",
         ...(world.goatbro ? ["{#p/asriel2}* Okay, it's over.\n* Now kill this idiot already."] : [])
      ],
      petText20: () => [
         "{#p/human}* (Really now.)",
         "{#p/basic}* ... really now.",
         ...(world.goatbro ? ["{#p/asriel2}* Really now..."] : [])
      ],
      statusX: ["{#p/asriel2}* It's vulnerable."],
      status0: () => (world.goatbro ? ["{#p/asriel2}* Canis Minor."] : ["{#p/story}* Canis Minor appears."]),
      status1: () =>
         world.goatbro
            ? ["{#p/asriel2}* Canis Minor."]
            : ["{#p/story}* Canis Minor tilts its head to one side."],
      status2: () =>
         world.goatbro
            ? ["{#p/asriel2}* Canis Minor."]
            : ["{#p/story}* Canis Minor thinks your weapon is a dog treat."],
      status3: () =>
         world.goatbro
            ? ["{#p/asriel2}* Canis Minor."]
            : ["{#p/story}* Canis Minor is not really paying attention."],
      status4: () => (world.goatbro ? ["{#p/asriel2}* Canis Minor."] : ["{#p/story}* Smells like dog chow."]),
      status5: () =>
         world.goatbro ? ["{#p/asriel2}* Canis Minor."] : ["{#p/story}* Canis Minor is barking excitedly."],
      status6: () =>
         world.goatbro ? ["{#p/asriel2}* Canis Minor."] : ["{#p/story}* Canis Minor is overstimulated."],
      status7: () =>
         world.goatbro
            ? ["{#p/asriel2}* Canis Minor."]
            : ["{#p/story}* Canis Minor shows no signs of stopping."],
      status8: () =>
         world.goatbro ? ["{#p/asriel2}* Canis Minor."] : ["{#p/story}* Canis Minor is lowering."],
      status9: () =>
         world.goatbro ? ["{#p/asriel2}* Canis Minor."] : ["{#p/story}* Canis Minor learns to code."],
      status10: () =>
         world.goatbro
            ? ["{#p/asriel2}* Canis Minor."]
            : ["{#p/story}* Canis Minor is whining because it can't see you."],
      status11: () => (world.goatbro ? ["{#p/asriel2}* Canis Minor."] : ["{#p/story}* Hello there."]),
      status12: () =>
         world.goatbro
            ? ["{#p/asriel2}* Canis Minor."]
            : ["{#p/story}* Canis Minor is questioning your life choices."],
      status13: () =>
         world.goatbro
            ? ["{#p/asriel2}* Canis Minor."]
            : ["{#p/story}* Canis Minor has gone where no dog has gone before."]
   },
   b_opponent_dogamy: {
      act_check: () =>
         world.goatbro
            ? ["{#p/asriel2}* Dogamy, the pathetic dog.\n* Relies entirely on his over- aggressive partner."]
            : ["{#p/story}* DOGAMY - ATK 14 DEF 5\n* Husband of Dogaressa.\n* Knows only what he smells."],
      act_check2: ["{#p/story}* DOGAMY - ATK 14 DEF 5\n* Recently widowed.\n* Knows only the pain of loss."],
      act_check3: ["{#p/story}* DOGAMY - ATK 14 DEF 5\n* Husband of Dogaressa.\n* Knows more than ever before."],
      act_check4: ["{#p/story}* DOGAMY - ATK 14 DEF 5\n* Husband of Dogaressa.\n* Doesn't mind sharing...?"],
      act_check5: ["{#p/story}* DOGAMY - ATK 14 DEF 5\n* Husband of Dogaressa.\n* Wouldn't mind leaving...?"],
      fetchText: [
         "{#p/human}* (You throw the spanner.)\n* (The dogs run to get it.)\n* (You play fetch for a while.)"
      ],
      fetchTextLone: () => [
         "{#p/human}* (You throw the spanner.)\n* (Dogamy ignores it and lets it roll off the edge.)",
         ...(world.goatbro && SAVE.flag.n.ga_asrielSpannerComment++ < 1 ? ["{#p/asriel2}* Saw that coming."] : [])
      ],
      flirtTalk1: ["<11>{#p/basic}{~}啊！\n但是为啥\n...！？"],
      flirtTalk2: ["<11>{#p/basic}{~}爱无处不在\n?"],
      flirtTalk3: ["<11>{#p/basic}{~}你刚才..."],
      flirtTalk4: ["<11>{#p/basic}{~}这只小狗在\n干什么？"],
      flirtText: [
         "{#p/human}* (You flirt with Dogamy.)",
         "{#p/basic}* Your... pheromones, reach Dogamy's snout."
      ],
      flirtTextLone: ["{#p/human}* (You flirt with Dogamy.)", "{#p/basic}* Dogamy's expression is unchanged."],
      loneStatus: () =>
         world.goatbro
            ? ["{#p/asriel2}* One left."]
            : ["{#p/story}* Dogaressa is intent on kicking human tail."],
      loneTalk1: ["<11>{#p/basic}{~}汪呜！"],
      loneTalk2: ["<11>{#p/basic}{~}呜——"],
      loneTalk3: ["<11>{#p/basic}{~}嗷呜..."],
      name: "* 狗来米",
      fetchStatus: ["{#p/story}* Married dogs love fetch!"],
      fetchStatusX: ["{#p/story}* The dogs' minds are expanding at an exponential rate."],
      otherPet: ["<11>{#p/basic}{~}..."],
      petNeedStatus: () =>
         world.goatbro
            ? ["{#p/asriel2}* Dogamy and Dogaressa."]
            : ["{#p/story}* Dogaressa is looking for affection."],
      petStatus: () =>
         world.goatbro
            ? ["{#p/asriel2}* They're vulnerable."]
            : ["{#p/story}* The dogs' minds have been expanded."],
      petTalk1: ["<11>{#p/basic}{~}放开，\n你这个\n该死的\n人类。"],
      petTalk1x: ["<11>{#p/basic}{~}手拿开，\n你这只\n奇怪的\n小狗。"],
      petTalk2: ["<11>{#p/basic}{~}哇！！！\n来自另一只\n小狗的抚摸\n！！！"],
      petTalk3: ["<11>{#p/basic}{~}停下！\n别碰她！"],
      petTalk4: ["<11>{#p/basic}{~}那我呢\n......"],
      petTalk5: ["<11>{#p/basic}{~}谢谢你..."],
      petText: ["{#p/human}* (You pet Dogamy.)"],
      petTextLone: ["{#p/human}* (You try to pet Dogamy, but he cowers in fear.)"],
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
            ? ["{#p/asriel2}* Dogamy and Dogaressa."]
            : ["{#p/story}* The dogs think that you may be a lost puppy."],
      resmellText1: [
         "{#p/human}* (You encourage the dogs to sniff you again.)",
         "* (You smell just as weird as before.)"
      ],
      resmellText2: [
         "{#p/human}* (You encourage the dogs to sniff you again.)",
         "* (After rolling in the dirt, you smell alright.)"
      ],
      resmellText3: [
         "{#p/human}* (You encourage the dogs to sniff you again, but they already know you smell fine.)"
      ],
      resmellTextFetch: [
         "{#p/human}* (You encourage the dogs to sniff you, but they seem occupied with other things.)"
      ],
      resmellTextLone: ["{#p/human}* (You encourage Dogamy to sniff you, but he won't even lift up his snout.)"],
      rollStatus: () =>
         world.goatbro
            ? ["{#p/asriel2}* You're going to get your clothes dirty, $(name)."]
            : ["{#p/story}* The dogs may want to re-smell you."],
      rollText: () => [
         "{#p/human}* (You roll around in the dirt.)\n* (It appears to be synthetic.)",
         "{#p/basic}* Your scent is changing...",
         ...(world.goatbro ? ["{#p/asriel2}* I have questions."] : [])
      ],
      rollText2: [
         "{#p/human}* (You roll around in the dirt.)\n* (It appears to be synthetic.)",
         "<33>{#p/basic}* 你的气味已经变了。"
      ],
      rollTextLone: () => [
         "{#p/human}* (You roll around in Dogaressa's remains.)",
         "{#p/basic}* Dogamy looks even more defeated than before.",
         ...(world.goatbro ? ["{#p/asriel2}* ..."] : [])
      ],
      smellTalk1: ["<11>{#p/basic}{~}Hm?\nWhat's that smell?"],
      smellTalk2: ["<11>{#p/basic}{~}What!\nSmells like a..."],
      smellTalk3: ["<11>{#p/basic}{~}Ah!\nSuch a lovely smell..."],
      status1: () =>
         world.goatbro
            ? ["{#p/asriel2}* Dogamy and Dogaressa."]
            : ["{#p/story}* The dogs keep shifting their axes to protect each other."],
      status2: () =>
         world.goatbro
            ? ["{#p/asriel2}* Dogamy and Dogaressa."]
            : ["{#p/story}* The dogs are re-evaluating your smell."],
      status3: () =>
         world.goatbro
            ? ["{#p/asriel2}* Dogamy and Dogaressa."]
            : ["{#p/story}* The dogs are practicing for the next couples contest."],
      status4: () =>
         world.goatbro
            ? ["{#p/asriel2}* Dogamy and Dogaressa."]
            : ["{#p/story}* The dogs are whispering sweet nothings to each other."],
      susText: ["{#p/basic}* The dogs still think you're a smelly human."],
      fetchTalk: ["<11>{#p/basic}{~}Fetch is so much fun!"],
      fetchTalkX: ["<11>{#p/basic}{~}Fetch with another pup!?"]
   },
   b_opponent_dogaressa: {
      act_check: () =>
         world.goatbro
            ? ["{#p/asriel2}* Dogaressa, the rowdy dog.\n* Without her hubby, she'd lose herself completely."]
            : ["{#p/story}* DOGARESSA - ATK 14 DEF 5\n* This puppy finds her hubby lovely. SMELLS ONLY?"],
      act_check2: ["{#p/story}* DOGARESSA - ATK 14 DEF 5\n* This puppy misses her hubby dearly. KILLS ONLY?"],
      act_check3: ["{#p/story}* DOGARESSA - ATK 14 DEF 5\n* Things are going quite alright for this puppy."],
      act_check4: [
         "{#p/story}* DOGARESSA - ATK 14 DEF 5\n* Her hubby isn't the only thing this puppy finds lovely."
      ],
      act_check5: ["{#p/story}* DOGAMY - ATK 14 DEF 5\n* This puppy is afraid for her hubby's safety."],
      fetchTextLone: () => [
         "{#p/human}* (You throw the spanner.)\n* (Dogaressa takes it and smashes it to pieces.)",
         ...(world.goatbro && SAVE.flag.n.ga_asrielSpannerComment++ < 1 ? ["{#p/asriel2}* Saw that coming."] : [])
      ],
      flirtTalk1: ["<11>{#p/basic}{~}(Hey! Knock it off!)"],
      flirtTalk2: ["<11>{#p/basic}{~}(This just gets weirder and weirder.)"],
      flirtTalk3: ["<11>{#p/basic}{~}(... flirt with me! Ugh!)"],
      flirtTalk4: ["<11>{#p/basic}{~}(I think it loves me. A lot.)"],
      flirtText: [
         "{#p/human}* (You flirt with Dogaressa.)",
         "{#p/basic}* Your... pheromones, reach Dogaressa's snout."
      ],
      flirtTextLone: [
         "{#p/human}* (You flirt with Dogaressa.)",
         "{#p/basic}* Dogaressa's expression is unchanged."
      ],
      loneStatus: () =>
         world.goatbro ? ["{#p/asriel2}* One left."] : ["{#p/story}* Dogamy is brokenhearted."],
      loneTalk1: ["<11>{#p/basic}{~}(Misery awaits you.)"],
      loneTalk2: ["<11>{#p/basic}{~}(You'll suffer for this.)"],
      name: "* 狗媳儿",
      otherPet: ["<11>{#p/basic}{~}(...)"],
      petNeedStatus: () =>
         world.goatbro
            ? ["{#p/asriel2}* Dogamy and Dogaressa."]
            : ["{#p/story}* Dogamy is looking for affection."],
      petTalk1: ["<11>{#p/basic}{~}(That's not your husband, OK?)"],
      petTalk2: ["<11>{#p/basic}{~}(Well, don't leave me out!)"],
      petTalk3: ["<11>{#p/basic}{~}(Beware of dog.)"],
      petTalk4: ["<11>{#p/basic}{~}(A dog that pets dogs... amazing!)"],
      petTalk5: ["<11>{#p/basic}{~}(You're the best!)"],
      petText: ["{#p/human}* (You pet Dogaressa.)"],
      petTextLone: ["{#p/human}* (You try to pet Dogaressa, but she just growls at you.)"],
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
         "<33>{#p/human}* （你激励狗媳儿来闻闻你，\n  她用鼻子使劲在你脸上\n  蹭来蹭去。）"
      ],
      rollTextLone: () => [
         "{#p/human}* (You roll around in Dogamy's remains.)",
         "{#p/basic}* Dogaressa looks even angrier than before.",
         ...(world.goatbro ? ["{#p/asriel2}* ..."] : [])
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
            ? ["<33>{#p/asriel2}* 大犬座，一条傻狗。\n* 这群狗里面，\n  属它头脑简单，四肢发达。"]
            : ["{#p/story}* CANIS MAJOR - ATK 15 DEF 8\n* It's so excited that it thinks fighting is just play."],
      act_check2: ["{#p/story}* CANIS MAJOR - ATK 15 DEF 8\n* Desperate for some love and attention..."],
      act_check3: ["{#p/story}* CANIS MAJOR - ATK 15 DEF 8\n* All tuckered out."],
      act_flirt: [
         "{#p/human}* (You flirt with Canis Major.)",
         "{#p/basic}* Canis Major awkwardly cocks its head to one side."
      ],
      beckonText: [
         "{#p/human}* (You call Canis Major.)",
         "{#p/basic}* Canis Major bounds towards you, flecking slobber into your face."
      ],
      closeStatus: () =>
         world.goatbro ? ["{#p/asriel2}* Canis Major."] : ["{#p/story}* Canis Major seeks affection."],
      closeText: ["{#p/human}* (You call Canis Major.)\n* (Only the dog's ears perk up.)"],
      doneText: ["{#p/basic}* Canis Major decides you are too boring."],
      fetch: () =>
         world.goatbro
            ? [
               "{#p/human}* (You throw the spanner.)\n* (Canis Major absorbs it and carries on with its life.)",
               "{#p/asriel2}* Yeah... that makes sense."
            ]
            : [
               "{#p/human}* (You throw the spanner.)\n* (The dog runs to get it.)\n* (You play fetch for a while.)"
            ],
      hurtStatus: () =>
         world.goatbro ? ["{#p/asriel2}* Almost dead."] : ["{#p/story}* Canis Major is panting slowly."],
      ignoreStatus1: () =>
         world.goatbro
            ? ["{#p/asriel2}* Canis Major."]
            : ["{#p/story}* Canis Major just wants some affection."],
      ignoreStatus2: () =>
         world.goatbro ? ["{#p/asriel2}* Canis Major."] : ["{#p/story}* Canis Major is making puppy-dog eyes."],
      name: "* 大犬座",
      fetchStatus: ["{#p/story}* Canis Major love fetch!"],
      petStatus1: () =>
         world.goatbro
            ? ["{#p/asriel2}* Canis Major."]
            : ["{#p/story}* Canis Major is patting the ground with its front paws."],
      petStatus2: () =>
         world.goatbro ? ["{#p/asriel2}* Canis Major."] : ["{#p/story}* Canis Major wants some TLC."],
      petStatus3: () =>
         world.goatbro ? ["{#p/asriel2}* ..."] : ["{#p/story}* Pet capacity now at forty percent."],
      petStatus4: () =>
         world.goatbro ? ["{#p/asriel2}* It's vulnerable."] : ["{#p/story}* Canis Major is contented."],
      petText0: ["{#p/human}* (But Canis Major was too far away to pet.)"],
      petText1: [
         "{#p/human}* (Canis Major curls up in your lap as it is pet by you.)",
         "* (It gets so comfortable that it falls asleep.)",
         "* (The dog snores, and snores some more...)",
         "* (... until eventually, it wakes up.)",
         "{#p/basic}* Canis Major's excitement begins rising without warning!"
      ],
      petText2: [
         "{#p/human}* (You try to pet the dog...)",
         "* (... but its excitement is generating an energy field that prevents petting.)"
      ],
      petText3: [
         "{#p/human}* (You pet the dog.)\n* (It sinks its entire weight into you.)",
         "* (Your movement slows, but you still haven't pet enough.)"
      ],
      petText4: [
         "{#p/human}* (You pet decisively.)\n* (Pet capacity now at one- hundred percent.)",
         "{#p/basic}* Canis Major flops over with its legs hanging in the air."
      ],
      petText5: [
         "{#p/human}* (You give the dog a tummy rub.)",
         "{#p/basic}* Canis Major is whining in bliss..."
      ],
      playText1: ["{#p/human}* (But Canis Major was not excited enough to play with yet.)"],
      playText2: [
         "{#p/human}* (You conjure a hologram for the dog to chase after.)",
         "* (Eventually, the hologram loses cohesion and dissipates.)",
         "* (Canis Major collects all the residual energy in the area and brings it to you.)",
         "{#p/basic}* Canis Major, tired, rests its head on you..."
      ],
      playText3: ["{#p/basic}* Canis Major is too tired to play."],
      playText4: ["{#p/human}* (But Canis Major was already in the middle of playing fetch.)"],
      status0: () => (world.goatbro ? ["{#p/asriel2}* Canis Major."] : ["{#p/story}* Canis Major appears."]),
      status1: () =>
         world.goatbro ? ["{#p/asriel2}* Canis Major."] : ["{#p/story}* Canis Major is watching you intently."],
      status2: () =>
         world.goatbro
            ? ["{#p/asriel2}* Canis Major."]
            : ["{#p/story}* Canis Major is waiting for your command."],
      status3: () =>
         world.goatbro
            ? ["{#p/asriel2}* Canis Major."]
            : ["{#p/story}* Smells like fresh-squeezed puppy juice."],
      waitText: ["{#p/basic}* Canis Major moves closer."]
   },
   b_opponent_papyrus: {
      act_flirt: ["{#p/human}* (You flirt with Papyrus.)"],
      act_insult: ["{#p/human}* (You insult Papyrus.)"],
      spanner: ["{#p/human}* (You throw the spanner.)\n* (Papyrus catches it in his mouth and returns it to you.)"],
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
            ? ["{#p/story}* PAPYRUS - ATK 3 DEF 3\n* Sans a brother."]
            : papreal()
               ? ["{#p/story}* PAPYRUS - ATK 3 DEF 3\n* Believes in you."]
               : ["{#p/story}* PAPYRUS - ATK 20 DEF 20\n* Likes to say \"Nyeh Heh Heh!\""],
      act_check2: ["{#p/story}* PAPYRUS - ATK 20 DEF 20\n* Everything is fine."],
      act_check3: ["{#p/story}* PAPYRUS - ATK 20 DEF 20\n* The most benevolent and merciful guardsman!"],
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
            ? ["<15>{#p/papyrus}{#f/21}衫斯，我...", "<15>{#f/33}{@random=1.1/1.1}我让你失望了..."]
            : ["<15>{#p/papyrus}{#f/27}...幸-幸好，\n我的头还在！"],
      dots: ["{#p/basic}* ..."],
      flirt0: ["{#p/basic}* Cute."],
      flirt1: [
         "<15>{#p/papyrus}{#f/20}什么！？\n对我调——调——\n调情！？",
         "<15>你终于表露出\n你的{@fill=#f00}真实感受{@fill=#000}了！",
         "<15>但——但是！\n我可是个\n眼光很高的\n骷髅！！！",
         "<15>你又能做什么\n来回报我的\n爱意呢？？？"
      ],
      flirt2: [
         "{#p/human}* (Your reply?){!}µµµI have\nµµµµI can makeµµµµzero redeeming\nµµµµspaghettiµµµµµqualities{#c/0/4/2}"
      ],
      flirt3a: ["<15>{#p/papyrus}{#f/24}这种\n自信的品格... \n让我想到了..."],
      flirt3b: ["<15>{#p/papyrus}{#f/24}这种\n谦逊的品格...\n让我想到了..."],
      flirt4: [
         "<15>{#f/22}我自己！！！",
         "<15>{#f/10}你完美地\n贴合了我的\n所有标准！！！",
         "<15>{#f/27}我想这意味着...\n我必须和你来场\n约会了？"
      ],
      flirt5: ["<15>{#p/papyrus}{#f/20}约会的事\n还是等到我抓住\n你之后再谈吧！"],
      flirt6: ["{#p/human}* (You flirt, but to no avail.)\n* (It seems acting won't escalate this battle.)"],
      flirt7: ["{#p/human}* (But Papyrus was too busy fighting to hear you.)"],
      flirtStatus1: ["{#p/story}* Papyrus is thinking about what to wear for his date."],
      flirtStatus2: ["{#p/story}* Papyrus dabs some Bone Cologne behind his ear."],
      flirtStatus3: ["{#p/story}* Papyrus is thinking about what to cook for his date."],
      flirtStatus4: ["{#p/story}* Papyrus dabs marinara sauce behind his ear."],
      flirtStatus5: ["{#p/story}* Papyrus is thinking about sexy rectangles."],
      flirtStatus6: ["{#p/story}* Papyrus dabs MTT-brand Bishie Cream behind his ear."],
      flirtStatus7: ["{#p/story}* Papyrus dabs MTT-brand Anime Powder behind his ear."],
      flirtStatus8: ["{#p/story}* Papyrus dabs MTT-brand Cute Juice behind his ear."],
      flirtStatus9: ["{#p/story}* Papyrus realizes he doesn't have ears."],
      flirtStatus10: ["{#p/story}* Papyrus has random lumps of ointment on his head."],
      flirtStatus11: ["{#p/story}* ... he's still thinking about sexy rectangles."],
      hurtStatus: ["{#p/story}* Papyrus is at the edge of defeat."],
      insult1: ["<15>{#p/papyrus}{#f/20}HOW SELFLESS!", "<15>{#f/21}YOU WANT ME TO FEEL BETTER ABOUT FIGHTING YOU..."],
      insult2: ["<15>{#p/papyrus}{#f/15}THERE'S NO NEED TO LIE TO YOURSELF!!!"],
      insult3: ["{#p/human}* (You insult, but to no avail.)\n* (It seems acting won't escalate this battle.)"],
      insult4: ["{#p/human}* (But Papyrus was too busy fighting to hear you.)"],
      name: "* 帕派瑞斯",
      randomStatus1: ["{#p/story}* Papyrus readies a bone attack."],
      randomStatus2: ["{#p/story}* Papyrus prepares a non-bone attack then spends a minute fixing his mistake."],
      randomStatus3: ["{#p/story}* Papyrus is cooking."],
      randomStatus4: ["{#p/story}* Papyrus whispers \"Nyeh heh heh!\""],
      randomStatus5: ["{#p/story}* Papyrus is rattling his bones."],
      randomStatus6: ["{#p/story}* Papyrus is trying hard to play it cool."],
      randomStatus7: ["{#p/story}* Papyrus is considering his options."],
      randomStatus8: ["{#p/story}* Smells like bones."],
      randomStatus9: ["{#p/story}* Papyrus remembered a good joke Sans told and is smiling."],
      spaghetti1: () => [
         "<15>{#p/papyrus}{#f/12}我的意大利面！",
         "<15>{#p/papyrus}{#f/13}AND YOU LOOK LIKE YOU'RE ENJOYING IT...",
         papreal()
            ? "<15>{#p/papyrus}{#f/27}WELL, I'M GLAD I COULD MAKE YOU HAPPY!"
            : [
               "<15>{#p/papyrus}{#f/27}WELL THEN!\nI LOOK FORWARD TO OUR MEAL TOGETHER!",
               "<15>{#p/papyrus}{#f/27}WELL THEN!\nI LOOK FORWARD TO MAKING SOME MORE FOR YOU!"
            ][(SAVE.data.n.state_papyrus_spaghet + 1) % 2]
      ],
      spaghetti2: ["{#p/basic}* If Papyrus wasn't so busy fighting, he might've noticed that."],
      specialStatus1: ["{#p/story}* Special attack."],
      specialStatus2: ["{#p/story}* Papyrus is going all out."],
      specialStatus3: ["{#p/story}* Papyrus has thrown all logic out the window."],
      specialStatus4: ["{#p/story}* Papyrus notices the lack of logic and brings it back inside."],
      specialStatus5: ["{#p/story}* Papyrus is sweating."],
      specialStatus6: ["{#p/story}* Papyrus is at his wit's end."],
      status1: ["{#p/story}* Papyrus is sparing you."],
      status2: ["{#p/story}* Papyrus blocks the way!"],
      turnTalk0a: ["<15>{#p/papyrus}{#f/24}SO, YOU'RE SERIOUS..."],
      turnTalk0b: ["<15>{#p/papyrus}{#f/24}看来，\n你不想战斗..."],
      turnTalk0c: ["<15>{#p/papyrus}{#f/20}那就让我看看\n你会如何应对\n我传说中的\n‘蓝色攻击！’"],
      turnTalk0x: [
         "<15>{#p/papyrus}{#f/10}你现在是\n蓝色的了。",
         "<15>{#f/10}那就是\n我的攻击！",
         "<15>{#f/20}捏嘿嘿嘿嘿嘿\n嘿嘿嘿！！！"
      ],
      turnTalk1a: ["<15>{#p/papyrus}{#f/20}看好了！"],
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
            : ["<15>{#p/papyrus}{#f/20}帕派瑞斯:\n举世无双意面王！"],
      turnTalk6: () =>
         world.postnoot
            ? ["<15>{#p/papyrus}{#f/20}以及在皇家卫队\n的一席之地！"]
            : ["<15>{#p/papyrus}{#f/20}帕派瑞斯:\n皇家卫队成员！"],
      turnTalk7: ["<15>{#p/papyrus}{#f/10}安黛因一定会\n为我感到骄傲！！"],
      turnTalk8: ["<15>{#p/papyrus}{#f/20}国王会在首塔\n为我建造一座\n雕像！！！"],
      turnTalk9: ["<15>{#p/papyrus}{#f/10}... 我也会\n让我兄弟\n拥有一座的。"],
      turnTalk10: ["<15>{#p/papyrus}{#f/27}我们将会收获\n众多崇拜者！！\n但是..."],
      turnTalk11a: ["<15>{#p/papyrus}{#f/20}我又如何知道\n人们是否真心\n喜欢我呢？？？"],
      turnTalk11b: ["<15>{#p/papyrus}{#f/20}会有人像你一样\n喜欢我吗？"],
      turnTalk12: ["<15>{#p/papyrus}{#f/21}像你这样的人\n真是很少见..."],
      turnTalk13a: ["<15>{#p/papyrus}{#f/21}我不觉得他们\n会轻易放你走..."],
      turnTalk13b: ["<15>{#p/papyrus}{#f/21}再想约会\n估计会很难..."],
      turnTalk14: ["<15>{#p/papyrus}{#f/26}如果你被抓到，\n然后送走的话。"],
      turnTalk15: ["<15>{#p/papyrus}{#f/17}呃...\n管他呢！\n放弃吧！！"],
      turnTalk16: ["<15>{#p/papyrus}{#f/15}要么放弃，要么... \n就准备面对我的\n{@fill=#f00}特殊攻击{@fill=#000}！"],
      turnTalk17: ["<15>{#p/papyrus}{#f/20}没错！！！\n待会我就要使用\n我的{@fill=#f00}特殊攻击{@fill=#000}了！"],
      turnTalk18: [
         "<15>{#p/papyrus}{#f/20}在我使用\n{@fill=#f00}特殊攻击{@fill=#000}前... \n这是你的最后机会！"
      ],
      turnTalk19: ["<15>{#p/papyrus}{#f/20}看好了...！\n我的{@fill=#f00}特殊攻击{@fill=#000}！"],
      turnTalk19x: [
         "<15>{#p/papyrus}{#f/15}捏嘿嘿！",
         "<15>{#f/20}在这之前可没有人类\n见过我的{@fill=#f00}特殊攻击{@fill=#000}！",
         "<15>{#f/20}做好被抓住的准备吧！\n一劳永逸的那种！"
      ],
      turnTalk20: ["<15>{#p/papyrus}{#f/20}特殊攻击，\n阿尔法编阵！"],
      turnTalk21: ["<15>{#p/papyrus}{#f/20}特殊攻击，\n贝塔编阵！"],
      turnTalk22: ["<15>{#p/papyrus}{#f/20}特殊攻击，\n伽马编阵！"],
      turnTalk23: ["<15>{#p/papyrus}{#f/20}特殊攻击，\n德尔塔编阵！"],
      turnTalk24: [
         "<15>{#p/papyrus}{#f/27}哇塞！\n你也太强了吧！",
         "<15>{#f/20}但我可不怕！\n我不会被你的\n实力吓倒！",
         "<15>{#f/14}... 特殊攻击...",
         "<15>{#f/17}{@fill=#f00}西格玛{@fill=#000}编阵！！！"
      ],
      turnTalk24x: [
         "<15>{#p/papyrus}{#f/27}行吧...！ *喘气*\n很明显... 你不能！\n*喘气* 打败我！",
         "<15>{#f/15}没错！！！\n我看见你被吓得\n全身发抖了！！",
         "<15>{#f/20}我，伟大的帕派瑞斯，\n选择给予你\n怜悯！！",
         "<15>{#f/20}我会{@fill=#f00}饶恕你{@fill=#000}，\n人类！！！",
         "<15>{#f/10}现在是你接受\n我{@fill=#f00}仁慈{@fill=#000}的机会了。"
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
         "<15>{#p/papyrus}{#f/15}别担心，人类！\n一切尽在\n帕派瑞斯的掌控之中！"
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
         "<15>{#p/papyrus}{#f/20}有颗星星，闪闪，\n他也喜欢叫人“蠢货”！",
         "<15>{#p/papyrus}{#f/25}我...",
         "<15>{#p/papyrus}{#f/22}我才反应过来\n是怎么回事！",
         "<15>{#p/papyrus}{#f/20}那个“艾斯利尔”好像\n也喜欢骂人蠢货！",
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
         "<15>{#p/papyrus}{#f/20}我，帕派瑞斯，\n保证让他再也\n找不到我！",
         "<15>{#p/papyrus}{#f/15}别担心，人类！\n一切尽在\n帕派瑞斯的掌控之中！"
      ],
      sparableFlirt1: [
         "<15>{#p/papyrus}{#f/27}你现在要做的\n是饶恕，而不是\n调情！",
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
         "<15>{#p/papyrus}{#f/20}嘿，你没必要\n辱骂自己的！",
         "<15>{#f/21}我知道你已经尽力了..."
      ],
      sparableInsult1x: [
         "<15>{#p/papyrus}{#f/20}嘿，你没必要\n辱骂自己的！",
         "<15>{#f/15}YOU'RE HERE TO BETTER YOURSELF, REMEMBER?"
      ],
      sparableInsult2: ["<15>{#p/papyrus}{#f/21}HUMAN..."],
      sparableInsult2x: ["<15>{#p/papyrus}{#f/15}COME ON...!"],
      sparableInsult3: ["<15>{#p/papyrus}{#f/21}..."]
   },
   b_opponent_shockasgore: {
      act_check: ["{#p/asriel2}* Asgore.\n* The king who got his home planet destroyed."],
      act_hug: ["{#p/human}* (You attempt to hug Asgore...)"],
      hugText: ["{#p/human}* (... but your body goes right through him.)", "{#p/asriel2}* ... huh?"],
      foodText: ["<11>{#p/asgore}{#f/5}Is that..."],
      idleText1: ["<11>{#p/asgore}{#f/1}开玩笑吧..."],
      idleText2: ["<11>{#p/asgore}{#f/1}一定要\n诉诸暴力吗？"],
      idleText3: ["<11>{#p/asgore}{#f/1}为什么不能\n和平解决呢？"],
      idleText4: ["<11>{#p/asgore}{#f/1}真的有必要吗？"],
      stickText: [
         "{#p/human}* (You throw the spanner.)\n* (Asgore lets it pass right through him.)",
         "{#p/asriel2}* ... huh?"
      ],
      miss: [
         "<11>{#p/asgore}{#f/2}...",
         "<11>{#f/1}我本人不在这，\n艾斯利尔。",
         "<11>{#f/2}这不过\n是个投影。"
      ],
      name: "* 艾斯戈尔",
      status1: ["{#p/asriel2}* Kill him, $(name)."],
      status2: ["{#p/asriel2}* ..."]
   },

   i_berry: {
      battle: {
         description: "一小串半透明的浆果",
         name: "洋梅"
      },
      drop: ["{#p/human}* (You throw away the Exoberries.)"],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? ["{#p/human}* (7 HP.)"]
            : ["{#p/basic}* \"Exoberries\" Heals 7 HP\n* A small branch of semi-translucent berries."],
      name: "洋梅",
      use: ["{#p/human}* (You eat the Exoberries.)"]
   },
   i_blookpie: {
      battle: {
         description: "将新鲜洋梅浸润在果冻中制作而成。",
         name: "洋梅派"
      },
      drop: () => [
         "{#p/human}* (You throw away the Exoberry Pie.)",
         ...(instance('main', 'blookishly') !== void 0 // NO-TRANSLATE

            ? game.room === '_frontier4' // NO-TRANSLATE

               ? ["{#p/napstablook}* ......... huh?"]
               : ["{#p/napstablook}* oh.................."]
            : [])
      ],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? ["{#p/human}* (99 HP.)"]
            : ["{#p/basic}* \"Exoberry Pie\" Heals 99 HP\n* Fresh exoberries, bathed in a sea of moist Jell-O."],
      name: "洋梅果冻派",
      use: () => [
         "{#p/human}* (You eat the Exoberry Pie.)",
         ...(instance('main', 'blookishly') !== void 0 // NO-TRANSLATE

            ? game.room === '_frontier4' // NO-TRANSLATE

               ? ["{#p/napstablook}* ......... huh?"]
               : ["{#p/napstablook}* aw.........\n* i hope you like it........."]
            : [])
      ]
   },
   i_chip: {
      battle: {
         description: "请把它带到星系的尽头。",
         name: "“芯”型薯片"
      },
      drop: () => [
         "{#p/human}* (You threw away the Computer Chip.)",
         ...(SAVE.data.b.svr && !SAVE.data.b.freedom
            ? ["{#p/asriel1}{#f/15}* Uh... weren't you going to protect that?"]
            : [])
      ],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? ["{#p/human}* (45 HP. Rather than eating it, you feel you should keep this item safe.)"]
            : ["{#p/basic}* \"Computer Chip\" Heals 45 HP\n* Please take this to the edge of the galaxy."],
      name: "“芯”型薯片",
      use: () => [
         "{#p/human}* (You bit into the Computer Chip.)",
         ...(SAVE.data.b.svr && !SAVE.data.b.freedom
            ? ["{#p/asriel1}{#f/15}* Uh... weren't you going to protect that?"]
            : world.darker || SAVE.data.b.ufokinwotm8
               ? []
               : calcHP() - SAVE.data.n.hp > 45
                  ? ["{#p/basic}* Seems your HP integer was increased."]
                  : ["{#p/basic}* Seems your injuries have been overwritten."])
      ]
   },
   i_eye: {
      battle: {
         description: "A portable force field.",
         name: "力场护盾"
      },
      drop: ["{#p/human}* (You throw away the Field Emitter.)"],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? ["{#p/human}* (7 DF.)"]
            : ["{#p/basic}* \"Field Emitter\" (7 DF)\n* A portable force field."],
      name: "力场护盾",
      use: ["{#p/human}* (You deployed the Field Emitter.)"]
   },
   i_eye_x: {
      battle: {
         description: "A somewhat underpowered portable force field.",
         name: "力场护盾？"
      },
      drop: ["{#p/human}* (You throw away the Field Emitter.)"],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? ["{#p/human}* (5 DF.)"]
            : ["{#p/basic}* \"Field Emitter?\" (5 DF)\n* A somewhat underpowered portable force field."],
      name: "力场护盾？",
      use: ["{#p/human}* (You deployed the Field Emitter.)"]
   },
   i_fruit: {
      battle: {
         description: "非欧几何形状的水果，\n里头比外表还大。",
         name: "幽灵水果"
      },
      drop: ["{#p/human}* (You fold the Ghost Fruit in on itself.)"],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? ["{#p/human}* (15 HP.)"]
            : ["{#p/basic}* \"Ghost Fruit\" Heals 15 HP\n* A non-euclidian fruit, bigger on the inside."],
      name: "幽灵水果",
      use: ["{#p/human}* (You unpacked the Ghost Fruit's many dimensions.)"]
   },
   i_glove: {
      battle: {
         description: "A state-of-the-art bionic glove.\nIt's so bad.",
         name: "超能手套"
      },
      drop: ["{#p/human}* (You throw away the Power Glove.)"],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? ["{#p/human}* (5 AT.)"]
            : ["{#p/basic}* \"Power Glove\" (5 AT)\n* A state-of-the-art bionic glove. It's so bad."],
      name: "超能手套",
      use: ["{#p/human}* (You wear the Power Glove.)"]
   },
   i_glove_x: {
      battle: {
         description: "It's not the original, but it still packs a punch.",
         name: "超能手套？"
      },
      drop: ["{#p/human}* (You throw away the Power Glove.)"],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? ["{#p/human}* (3 AT.)"]
            : ["{#p/basic}* \"Power Glove?\" (3 AT)\n* It's not the original, but it still packs a punch."],
      name: "超能手套？",
      use: ["{#p/human}* (You wear the Power Glove.)"]
   },
   i_milkshake: {
      battle: {
         description: "Made of an unknown, pearly-white substance.",
         name: "奶昔"
      },
      drop: ["{#p/human}* (You rid yourself of the Milkshake.)"],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? ["{#p/human}* (18 HP.)"]
            : ["{#p/basic}* \"Milkshake\" Heals 18 HP\n* Made of an unknown, pearly-white substance."],
      name: "奶昔",
      use: () => [
         "{#p/human}* (You swallowed every last drop of the Milkshake.)",
         ...(SAVE.data.b.svr || world.darker || SAVE.data.b.ufokinwotm8 ? [] : ["{#p/basic}* ... salty."])
      ]
   },
   i_nice_cream: {
      battle: {
         description: "包装纸上印的不是笑话，\n而是一些天马行空的想象。",
         name: "Ice Dream"
      },
      drop: ["{#p/human}* (You throw away the Ice Dream.)"],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? ["{#p/human}* (15 HP.)"]
            : ["{#p/basic}* \"Ice Dream\" Heals 15 HP\n* Instead of a joke, the wrapper says something fantastical."],
      name: "Ice Dream",
      use: pager.create(
         2,
         () => [
            "{#p/human}* (You unwrapped the Ice Dream.)",
            SAVE.data.b.svr
               ? "* (The wrapper spoke of a world- saving adventure.)"
               : "{#p/basic}* \"You're a grand adventurer, on a mission to save the world!\""
         ],
         () => [
            "{#p/human}* (You unwrapped the Ice Dream.)",
            SAVE.data.b.svr
               ? "* (The wrapper mentioned your role as a starship captain.)"
               : "{#p/basic}* \"You're the captain of a starship, moving deeper into unexplored space!\""
         ],
         () => [
            "{#p/human}* (You unwrapped the Ice Dream.)",
            SAVE.data.b.svr
               ? "* (The wrapper claimed that you could uniquely solve a mystery.)"
               : "{#p/basic}* \"A grand mystery unfolds, and you're the only one who can solve it!\""
         ],
         () => [
            "{#p/human}* (You unwrapped the Ice Dream.)",
            SAVE.data.b.svr
               ? "* (The wrapper talked of your time-traveling endeavour.)"
               : "{#p/basic}* \"You've traveled back in time to stop a terrible catastrophe!\""
         ],
         () => [
            "{#p/human}* (You unwrapped the Ice Dream.)",
            SAVE.data.b.svr
               ? "* (The wrapper stated your scientific brilliance.)"
               : "{#p/basic}* \"You're a brilliant scientist on the verge of a massive breakthrough!\""
         ],
         () => [
            "{#p/human}* (You unwrapped the Ice Dream.)",
            SAVE.data.b.svr
               ? "* (The wrapper established the innocent world you've ended up in.)"
               : "{#p/basic}* \"You stumble on a world of innocent creatures, and it's up to you what happens next!\""
         ],
         () => [
            "{#p/human}* (You unwrapped the Ice Dream.)",
            SAVE.data.b.svr
               ? "* (The wrapper detailed your newfound power.)"
               : "{#p/basic}* \"You've gained the power to change the universe at your will! Use it wisely!\""
         ],
         [
            "{#p/human}* (You unwrapped the Ice Dream.)",
            "{#p/human}* (It's a holographic illustration of you, finding a loving family.)"
         ]
      )
   },
   i_pop: {
      battle: {
         description: "可改变主观时间流速。",
         name: "涡旋棒棒糖"
      },
      drop: ["{#p/human}* (You throw away the Vortex Pop.)"],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? ["{#p/human}* (11 HP.)"]
            : [
               "<33>{#p/basic}* “涡旋棒棒糖” 回复11 HP\n* 可改变主观时间流速。\n* 仅在战斗中有效。"
            ],
      name: "涡旋棒棒糖",
      use: () => [
         "{#p/human}* (You suck on the Vortex Pop.)",
         ...(battler.active
            ? game.vortex
               ? ["{#p/human}* (Your perception of time is already shifted.)"]
               : [
                  "{#p/human}* (Your perception of time begins to shift.)",
                  "{#p/story}* FOCUS up for two turns!"
               ]
            : ["{#p/human}* (No effect outside of battle.)"])
      ]
   },
   i_spaghetti: {
      battle: {
         description: "Silken spaghetti, finely aged in a time dilation unit.",
         name: "Spaghetti"
      },
      drop: () => [
         "{#p/human}* (You throw away the Spaghetti.)",
         ...(!world.genocide && !world.runaway && (SAVE.data.n.state_papyrus_spaghet !== 0 || game.room === 's_bros') // NO-TRANSLATE

            ? game.room === 'f_kitchen' // NO-TRANSLATE

               ? [
                  SAVE.data.b.undyne_respecc ? "{#p/undyne}{#f/1}* ..." : "{#p/undyne}{#f/14}* ...",
                  "{#p/undyne}{#f/17}* I'll scrape that off the floor and heat it up in the fridge later."
               ]
               : SAVE.data.n.plot === 72 && game.room === 'c_asgore_kitchen' // NO-TRANSLATE

                  ? [
                     "<18>{#p/papyrus}{#f/8}NOOO!!\nWHAT HAVE YOU DONE!?!?",
                     "<18>{#f/5}... THE SPAGHETTI I MADE FOR YOU...",
                     "<18>{#f/4}... IS... ACTUALLY KIND OF OLD, TO BE HONEST.",
                     "<18>{#f/0}YEAH!!\nMY NEW DISH WILL BE WAY BETTER!",
                     "<18>{#f/9}FEEL FREE TO SWING BY AND HAVE SOME WHEN IT'S DONE!",
                     "{#p/sans}{#f/2}* trust me.\n* his new stuff is WAY too good to throw out.",
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
                              "{#p/undyne}{#f/4}* Is perfectly fine!",
                              "{#p/undyne}{#f/7}* Human!\n* Pick the spaghetti up off the floor NOW!",
                              "<18>{#p/papyrus}{#f/6}UNDYNE, PLEASE!!\nTHAT'S ENTIRELY UNSANITARY!!"
                           ]
                           : ["<18>{#f/6}... IS CONSUMABLE NO LONGER!!"]),
                        "<18>{#f/4}STILL... MAYBE IT'S FOR THE BEST.",
                        "<18>{#f/5}LIKE, MAYBE SEEING YOU THROW THAT AWAY...",
                        "<18>{#f/6}WILL ENCOURAGE ME TO MAKE A EVEN -BETTER- DISH!",
                        "<18>{#f/9}YEAH! LOOK AT HOW ENCOURAGED I AM RIGHT NOW!",
                        ...(fetchCharacters().find(c => c.key === 'undyne') !== void 0 // NO-TRANSLATE

                           ? ["{#p/undyne}{#f/17}* YEAH!!\n* Look at how encouraged he is right now!!"]
                           : []),
                        "<18>{#p/papyrus}{#f/9}I'LL MAKE THE BEST DISH THE GALAXY'S EVER SEEN!",
                        ...(fetchCharacters().find(c => c.key === 'undyne') !== void 0 // NO-TRANSLATE

                           ? [
                              "{#p/undyne}{#f/7}* And you're GOING to enjoy it this time!!",
                              "<18>{#p/papyrus}{#f/6}BUT IT'S OKAY IF YOU DON'T!!!",
                              "{#p/undyne}{#f/17}* OKAY!!!!",
                              "<18>{#p/papyrus}{#f/9}OKAY!!!!!",
                              "{#p/undyne}{#f/8}* OKAY!!!!!!",
                              "<18>{#p/papyrus}{#f/4}... OKAY."
                           ]
                           : [])
                     ]
                     : instance('main', 'sentryskeleton') !== void 0 || // NO-TRANSLATE

                        (fetchCharacters()
                           .find(c => c.key === 'sans') // NO-TRANSLATE

                           ?.position.extentOf(game.camera.position.clamp(...renderer.region)) ?? 240) < 240
                        ? [
                           "{#p/sans}{#f/0}* huh?\n* you don't like my bro's signature spaghetti?",
                           "{#f/2}* more for me, i guess."
                        ]
                        : []
            : [])
      ],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? ["{#p/human}* (16 HP.)"]
            : ["{#p/basic}* \"Spaghetti\" Heals 16 HP\n* Silken spaghetti, finely aged in a time dilation unit."],
      name: "Spaghetti",
      use: () => [
         "{#p/human}* (You eat the Spaghetti.)",
         ...(!battler.active &&
            !world.genocide &&
            !world.runaway &&
            (SAVE.data.n.state_papyrus_spaghet !== 0 || game.room === 's_bros') // NO-TRANSLATE

            ? game.room === 'f_kitchen' // NO-TRANSLATE

               ? [
                  SAVE.data.b.undyne_respecc
                     ? "{#p/undyne}{#f/1}* Spaghetti, huh?"
                     : "{#p/undyne}{#f/14}* Spaghetti, huh?",
                  "{#p/undyne}{#f/8}* You better like it, 'cause it's MY recipe!!"
               ]
               : SAVE.data.n.plot === 72 && game.room === 'c_asgore_kitchen' // NO-TRANSLATE

                  ? [
                     "<18>{#p/papyrus}{#f/1}WHAT?\nDID YOU JUST EAT THAT SPAGHETTI?",
                     "<18>{#f/5}IT SURE HAS BEEN A WHILE SINCE I MADE IT...",
                     "{#p/sans}{#f/2}* a few hours, at least.",
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
                                    "{#p/undyne}{#f/7}* Well, maybe they didn't WANT to share it!",
                                    "<18>{#p/papyrus}{#f/6}BUT THEY PROMISED!"
                                 ]
                                 : []),
                              "<18>{#f/5}... PERHAPS MY COOKING IS AT FAULT HERE...",
                              "<18>{#f/6}IT WAS SO TASTY, YOU COULDN'T HELP BUT TAKE A BITE!",
                              "<18>{#f/5}AND ANOTHER, AND ANOTHER...",
                              "<18>{#f/6}BEFORE YOU KNEW IT, YOU'D EATEN THE ENTIRE PLATE!",
                              ...(fetchCharacters().find(c => c.key === 'undyne') !== void 0 // NO-TRANSLATE

                                 ? ["{#p/undyne}{#f/14}* Wow.\n* What a crime."]
                                 : []),
                              "<18>{#p/papyrus}{#f/5}TO THINK MY COOKING MADE YOU BETRAY ME...",
                              "<18>{#f/9}N-NO...!\nI'LL FIX THIS!",
                              "<18>{#f/4}... \"AHEM.\"",
                              "<18>{#f/0}I, PAPYRUS, HEREBY DECLARE YOUR PROMISE VOID.",
                              "<18>{#f/0}THERE!\nNOW, YOU MAY EAT GUILT-FREE.",
                              ...(fetchCharacters().find(c => c.key === 'undyne') !== void 0 // NO-TRANSLATE

                                 ? [
                                    "{#p/undyne}{#f/11}* ...",
                                    "<18>{#p/papyrus}{#f/4}(IT WOULD HELP IF YOU PLAYED ALONG.)",
                                    "{#p/undyne}{#f/12}* Right!\n* Guilt-free!\n* That's how you'll eat!",
                                    "<18>{#p/papyrus}{#f/0}(THANK YOU.)"
                                 ]
                                 : [])
                           ],
                           [
                              "<18>{#p/papyrus}{#f/1}WHAT?\nDID YOU JUST EAT THAT SPAGHETTI?",
                              "<18>{#f/4}WELL, YOU DIDN'T SAY YOU WERE GOING TO SHARE IT...",
                              ...(fetchCharacters().find(c => c.key === 'undyne') !== void 0 // NO-TRANSLATE

                                 ? [
                                    "{#p/undyne}{#f/11}* So what's the problem?",
                                    "<18>{#p/papyrus}{#f/0}OH, UH, I GUESS THERE ISN'T ONE."
                                 ]
                                 : ["<18>{#f/0}HMM, I SUPPOSE THAT'S FOR THE BEST."]),
                              "<18>{#f/5}AFTER ALL, IF YOU -HAD- MADE SUCH A STATEMENT...",
                              "<18>{#f/6}WE WOULD HAVE BEEN IN QUITE THE PERDICAMENT.",
                              "<18>{#f/0}BUT YOU DIDN'T!\nSO WE'RE GOOD!",
                              ...(fetchCharacters().find(c => c.key === 'undyne') !== void 0 // NO-TRANSLATE

                                 ? [
                                    "{#p/undyne}{#f/12}* And all is right with the world, huh?",
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
                           "{#p/sans}{#f/3}* it's pretty good, huh?",
                           "{#f/2}* i should know.\n* i'm the one who got to taste test it."
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
      drop: ["{#p/human}* (You throw away the Radiant Swirl.)"],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? ["{#p/human}* (22 HP.)"]
            : ["{#p/basic}* \"Radiant Swirl\" Heals 22 HP\n* A glowing, colorful sugar roll."],
      name: "光彩漩涡",
      use: ["{#p/human}* (You eat the Radiant Swirl.)"]
   },
   i_voidy: {
      battle: {
         description: "Leads to a mysterious place.\nNot viable in battle.",
         name: "Sanctuary"
      },
      drop: ["{#p/human}* (You throw away the Sanctuary.)"],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? ["{#p/human}* (A device whose origin is beyond the boundaries of existence.)"]
            : ["{#p/basic}* Leads to a mysterious place.\n* Accessible on-the-go."],
      name: "Sanctuary",
      use: () =>
         battler.active
            ? ["{#p/human}* (You use the Sanctuary.)", "{#p/human}* (No effect in battle.)"]
            : ["{#p/human}* (You use the Sanctuary.)"]
   },
   i_corndog_sword: {
      battle: {
         description: "A truly one-of-a-kind weapon.",
         name: "Dog Sword"
      },
      drop: ["{#p/human}* (You try to throw away the Corn Dog Sword...)", "{#p/human}* (... but it refuses.)"],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? ["{#p/human}* (You decide not to question the logic of this weapon.)"]
            : ["{#p/basic}* A truly one-of-a-kind weapon."],
      name: "Corn Dog Sword",
      use: () =>
         battler.active && battler.targetCurrent?.opponent.metadata.corndogger
            ? [
               "{#p/human}* (You equip the Corn Dog Sword.)",
               "{#p/human}* (You can't resist the urge to take a bite.)",
               [
                  "{#p/human}* (You consume the outer layer of breading...)",
                  "{#p/human}* (You consume the tip...)",
                  "{#p/human}* (You consume the blade...)",
                  "{#p/human}* (You consume the hilt...)",
                  "{#p/human}* (You consume the handle...)"
               ][SAVE.data.n.corndogger++],
               "{#p/basic}* Suddenly...!"
            ]
            : [
               "{#p/human}* (You try to equip the Corn Dog Sword...)",
               "{#p/human}* (... but it didn't detect a high enough threat level!)"
            ]
   },
   i_fryz: {
      battle: {
         description: "For once, it's not just \"pleasantly warm.\"",
         name: "Grillby"
      },
      drop: ["{#p/human}* (You tossed the Flamin' Grillby like a molotov.)"],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? ["{#p/human}* (30 HP.)"]
            : ["{#p/basic}* \"Flamin' Grillby\" Heals 30 HP\n* For once, it's not just \"pleasantly warm.\""],
      name: "Flamin' Grillby",
      use: ["{#p/human}* (You consume the Flamin' Grillby.)"]
   },
   i_burgerz: {
      battle: {
         description: "Like burgers, but smaller.\nThree left.",
         name: "Slider Trio"
      },
      drop: ["{#p/human}* (You throw away the Sliders.)"],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? ["{#p/human}* (15 HP. Three uses left.)"]
            : ["{#p/basic}* \"Sliders\" Heals 15 HP\n* Like burgers, but smaller.\n* Three left."],
      name: "Slider Trio",
      use: ["{#p/human}* (You eat one of the Sliders.)"]
   },
   i_burgerz_use1: {
      battle: {
         description: "Like burgers, but smaller.\nTwo left.",
         name: "Slider Duo"
      },
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? ["{#p/human}* (15 HP. Two uses left.)"]
            : ["{#p/basic}* \"Sliders\" Heals 15 HP\n* Like burgers, but smaller.\n* Two left."],
      name: "Slider Duo"
   },
   i_burgerz_use2: {
      battle: {
         description: "Like a burger, but smaller.",
         name: "Slider"
      },
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? ["{#p/human}* (15 HP. One use left.)"]
            : ["{#p/basic}* \"Sliders\" Heals 15 HP\n* Like burgers, but smaller.\n* One left."],
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
      exit: ["{#p/napstablook}{#k/0}* oh... you're leaving...", "{#k/1}* well, cya next time i guess..."],
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

            ? ["{#p/basic}* There's no note here."]
            : SAVE.data.b.killed_mettaton
               ? ["{#p/basic}* There's a note here.", "{#p/napstablook}* \"it's all your fault...\""]
               : world.runaway
                  ? ["{#p/basic}* There's a note here.", "{#p/napstablook}* \"we had no choice...\""]
                  : ["{#p/basic}* There's a note here.", "{#p/napstablook}* \"sorry, i had to go...\""],
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
                  "<30>{#k/0}* 我想它应该和安黛因住在一块"
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
                  "{#p/napstablook}{#k/3}* oh, hey...",
                  "{#k/0}* i think everybody dissappeared for a while...",
                  "{#k/1}* but when they woke up, they all knew your name...",
                  "{#k/3}* so... you're frisk, huh?",
                  "{#k/4}* well, nice to see you, frisk"
               ]
               : SAVE.data.b.a_state_napstadecline
                  ? ["{#p/napstablook}{#k/2}* uh...", "{#p/napstablook}{#k/2}* hey there..."]
                  : SAVE.data.n.state_wastelands_napstablook < 2
                     ? [
                        [
                           "{#p/napstablook}{#k/3}* oh, hey...",
                           "{#p/napstablook}{#k/3}* oh, nice to see you again..."
                        ][SAVE.data.n.state_wastelands_napstablook],
                        ...(world.meanie
                           ? ["{#k/0}* what's that look for?\n* have i done something wrong..."]
                           : ["{#k/4}* what have you been up to?"])
                     ]
                     : SAVE.data.n.state_wastelands_napstablook < 5
                        ? [
                           "{#p/napstablook}{#k/0}* oh...\n* i'm not sure what to say, really...",
                           "{#k/3}* uhh... hello, i guess?"
                        ]
                        : [
                           "{#p/napstablook}{#k/4}* heh...\n* hey...",
                           "{#k/3}* say, are you new around here?",
                           "{#k/5}* you don't look familiar..."
                        ],
         () =>
            SAVE.data.n.plot === 72
               ? [
                  "{#p/napstablook}{#k/2}* honestly, i don't really know what happened...",
                  "{#k/2}* same goes for everyone in my family.\n* we didn't get pulled in like everyone else.",
                  "{#k/1}* we did see a bright light, but when it came by... we just sort of rejected it",
                  "{#k/0}* still, even though we didn't see it ourselves...",
                  "{#k/3}* we've heard all about what you did for us.",
                  "{#k/3}* so... thanks."
               ]
               : [
                  "{#p/napstablook}{#k/2}* you wanna know about ghosts?",
                  "{#k/0}* well, the only ghosts i know are myself, my three cousins...",
                  "{#k/3}* and the one behind you, of course",
                  "{#k/1}* aside from that, there's not much to say",
                  "{#k/0}* without a fused host body, we just sorta... exist",
                  "{#k/0}* yeah, i know...\n* very interesting stuff..."
               ],
         () =>
            SAVE.data.n.plot === 72
               ? [
                  "{#p/napstablook}{#k/2}* ...",
                  "{#k/2}* they're... still behind you, aren't they?",
                  "{#k/0}* yeah... i can see them...",
                  ...(SAVE.data.b.oops
                     ? [
                        "{#k/0}* they... don't like the fact that i'm pointing them out...",
                        "{#k/0}* oh no..."
                     ]
                     : [
                        "{#k/2}* they look... happy?",
                        "{#k/4}* frisk, if you were able to make them feel this way...",
                        "{#k/3}* then you really are special."
                     ])
               ]
               : [
                  "{#p/napstablook}{#k/3}* oh yeah... that...",
                  "{#k/1}* well, one day, i found this box lying around...",
                  "{#k/5}* when i opened it, i ended up in this mysterious place i haven't seen before...",
                  "{#k/4}* now and then, i like to visit that place to relax",
                  "{#k/3}* it's peaceful..."
               ],
         () =>
            SAVE.data.n.plot === 72
               ? [
                  SAVE.data.b.a_state_hapstablook
                     ? "{#p/napstablook}{#k/0}* well, after me and my cousins resolved everything..."
                     : "{#p/napstablook}{#k/0}* well, since i didn't really have anything else to do...",
                  "{#k/0}* i figured it was time to try something new for once.",
                  "{#k/3}* i heard about the humans in the archive, and felt bad for them...",
                  "{#k/3}* so... i adopted one.",
                  "{#k/1}* i just hope i can take care of them properly now."
               ]
               : 65 <= SAVE.data.n.plot
                  ? SAVE.data.b.a_state_hapstablook
                     ? 68 <= SAVE.data.n.plot
                        ? [
                           "{#p/napstablook}{#k/3}* hey, mettaton came by a little while ago.",
                           "{#k/0}* we talked for a bit about what we've been up to...",
                           "{#k/0}* about the family...",
                           "{#k/3}* well, i don't think i've ever been this happy before.",
                           "{#k/3}* what you did for us back there... it means a lot."
                        ]
                        : [
                           "{#p/napstablook}{#k/0}* hey... sorry things didn't work out the way we hoped...",
                           "{#k/3}* it was nice to have you there, though......"
                        ]
                     : [
                        "{#p/napstablook}{#k/7}* with every day that goes by, i feel a little farther away from happiness......"
                     ]
                  : 63 <= SAVE.data.n.plot && SAVE.data.b.a_state_hapstablook
                     ? [
                        "{#k/7}* oh... you're probably wondering about the meeting",
                        "{#k/7}* don't worry, it's still happening...",
                        "{#k/7}* i just came back here to check on my shop......"
                     ]
                     : 60 <= SAVE.data.n.plot
                        ? SAVE.data.b.a_state_napstadecline
                           ? [
                              "{#k/7}* ...",
                              "{#k/7}* i don't... really wanna talk about that...",
                              ...(SAVE.storage.inventory.contents.includes('tvm_mewmew') // NO-TRANSLATE

                                 ? ["{#k/2}* especially when it's right there in your ITEMs......"]
                                 : [])
                           ]
                           : [
                              "{#k/1}* oh... yeah......",
                              "{#k/3}* thanks for agreeing to help me with that",
                              "{#k/2}* mettaton's been acting kinda weird lately......",
                              "{#k/0}* i'm not surprised he did this",
                              "{#k/4}* alphys first had me watch mew mew space adventure with her a while ago...",
                              "{#k/3}* we marathonned the entire fourth season in one night...",
                              "{#k/6}* that finale...",
                              "{#k/6}* was something else......"
                           ]
                        : 48 <= SAVE.data.n.plot
                           ? [
                              "{#k/1}* yeah... this is mostly where i hang out now",
                              ...[
                                 ["{#k/0}* sorry for interrupting whatever you were doing with my cousin..."],
                                 ["{#k/0}* ...\n* have you seen my cousin?"],
                                 ["{#k/3}* i heard my cousin really likes you..."],
                                 [
                                    "{#k/5}* my cousin tells me you're not the most interesting person to be with...",
                                    "{#k/5}* i disagree......"
                                 ],
                                 [],
                                 []
                              ][SAVE.data.n.state_wastelands_toriel === 0 ? 2 : SAVE.data.n.state_foundry_maddummy],
                              "* ...",
                              "{#f/1}* anyway\n* i hope you're doing alright out there...",
                              "{#f/2}* past starton, things get a bit... crazy"
                           ]
                           : SAVE.data.b.napsta_performance
                              ? [
                                 "{#p/napstablook}{#k/1}* yeah, i make music sometimes",
                                 "{#k/0}* people say it's great, but i know they're just lying to make me feel better...",
                                 "{#k/4}* thanks for coming to my little show, though...",
                                 "{#k/3}* seeing you made me happy..."
                              ]
                              : [
                                 [
                                    "{#p/napstablook}{#k/2}* you mean... that little hat trick i showed you...?",
                                    "{#k/1}* yeah, my cousin taught me that...",
                                    "{#k/3}* he and i used to spend so much time together...",
                                    "{#k/0}* then one day, he...",
                                    "{#k/6}* ...",
                                    "{#k/0}* never mind..."
                                 ],
                                 [
                                    "{#p/napstablook}{#k/0}* oh, there's not much to say about my life...",
                                    "{#k/3}* meeting you was the highlight of my weekend..."
                                 ],
                                 [
                                    "{#p/napstablook}{#k/0}* oh, there's not much to say about my life...",
                                    "{#k/6}* and thanks to people like you, there probably never will be..."
                                 ],
                                 [
                                    "{#p/napstablook}{#k/0}* oh, there's not much to say about my life...",
                                    "{#k/3}* i'm just... pluggin' along..."
                                 ],
                                 [
                                    "{#p/napstablook}{#k/0}* oh, there's not much to say about my life...",
                                    "{#k/6}* not that you... really care..."
                                 ],
                                 [
                                    "{#p/napstablook}{#k/0}* oh, there's not much to say about my life...",
                                    "{#k/0}* i'm just a ghost that tends to get lost in the mix"
                                 ]
                              ][SAVE.data.n.state_wastelands_napstablook]
      ],
      zeroPrompt: "<09>{#p/basic}..."
   },
   n_shop_hare: {
      exit: ["{#p/basic}{#k/11}* Bye now!\n* Come again sometime!"],
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
            ? ["{#p/basic}* There's a note here.", "{#p/basic}* \"Please don't come after us.\""]
            : SAVE.data.n.plot === 72
               ? ["{#p/basic}* There's a note here.", "<33>{#p/basic}* \"I'm sorry I couldn't come back.\""]
               : ["{#p/basic}* There's a note here.", "<33>{#p/basic}* “请不要伤害我的家人。”"],
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
                  "{#p/basic}{#k/4}* Oh, it's you!\n* You're the one who gave us back our freedom!",
                  "{#k/0}* Frisk, right?\n* Everyone's been talking about you.",
                  "{#k/5}* We've all seen the same thing... we know you must just want some peace and quiet.",
                  "{#k/4}* Still.\n* Can't help but get a little excited, now can we?"
               ]
               : [
                  "{#p/basic}{#k/4}* Hiya! Welcome to Starton!\n* I can't remember the last time I saw a fresh face around here.",
                  "{#k/8}* Where did you come from?\n* The Citadel?",
                  "{#k/7}* You don't look like a tourist.\n* Are you here by yourself?"
               ],
         () =>
            SAVE.data.n.plot === 72
               ? [
                  "{#p/basic}{#k/8}* You DO know what happened, don't you?",
                  "{#k/9}* Then again, you might've seen things a bit differently...",
                  "{#k/0}* Here.\n* I'll tell you what I saw.",
                  "{#k/0}* So we all got pulled in by this bright light...",
                  "{#k/7}* Then we saw it... like we were watching from someone else's eyes.",
                  "{#k/5}* You were being attacked on all sides, and I could've sworn you died...",
                  "{#k/11}* But you're still here, so that can't be right.",
                  "{#k/8}* Eventually, you said something in particular, and whoever was attacking you... stopped.",
                  "{#k/9}* After that, we woke up, and the force field was gone."
               ]
               : [
                  "{#p/basic}{#k/8}* You want to know what to do here in Starton?",
                  "{#k/9}* Grillby's has food, and the librarby has information...",
                  "{#k/2}* If you're tired, you can take a nap at the inn.\n* It's right nextdoor, my sister runs it.",
                  "{#k/0}* And if you're bored, you can sit outside and watch those wacky skeletons do their thing.",
                  "* There's two of 'em...\n* Brothers, I think.\n* They've been here for as long as I can remember.",
                  "{#k/9}* Oh, I almost forgot.\n* Recently, a ghost fella decided to open a store on the south side of town.",
                  "{#k/11}* It's not much, but if you drop by, be sure to say hello.\n* They could use the company."
               ],
         () =>
            SAVE.data.n.plot === 72
               ? [
                  "{#p/basic}{#k/12}* Didja hear?\n* About the Outlands?",
                  "{#k/2}* Apparently the Queen had been hanging out there for who knows how long.",
                  "{#k/8}* Pretty unbelievable, huh!?",
                  "{#k/10}* I'm sure she was even more surprised than we were to find out the humans were alive."
               ]
               : [
                  "{#p/basic}{#k/9}* Think back to your history class...",
                  "{#k/0}* A long time ago, monsters lived in what we now call the Foundry.",
                  "* After a while, we invented the technology to build new areas onto the outpost.",
                  "* The first of those areas was Starton, and they figured it'd be a good place for a town.",
                  "{#k/10}* It's quaint, but I kinda like that, you know?"
               ],
         () =>
            SAVE.data.n.plot === 72
               ? [
                  "{#p/basic}{#k/5}* Well, I suppose I'll move my store to the new homeworld...",
                  "{#k/4}* ... haven't planned much more than that, I'm afraid."
               ]
               : [
                  "{#p/basic}* Life is the same as usual.",
                  "{#k/5}* A little lonely...",
                  "{#k/10}* But... we all know deep down that freedom is coming, don't we?",
                  "{#k/9}* As long as we got that hope, we can grit our teeth and face the same struggles, day after day...",
                  "{#k/0}* That's life, ain't it?"
               ]
      ],
      zeroPrompt: "<09>{#p/basic}..."
   },

   c_name_starton: {
      papyrus: () =>
         SAVE.data.n.plot_date < 2 || (SAVE.data.n.exp > 0 && SAVE.data.b.a_state_fishbetray)
            ? "帕派瑞斯的手机"
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
                  "{#p/undyne}{#f/1}* Like what?",
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
                  "{#p/undyne}{#f/17}* He always beat you to the end?",
                  "{#f/4}* Yeah, that's 'cause he's a big fat CHEATER.",
                  "{#f/5}* Have you SEEN his high score on the target practice machine?",
                  "{#f/8}* It's like, a GAZILLION or something!!",
                  "<18>{#p/papyrus}{#f/4}OH, TRUST ME.\nI KNOW IT ALL TOO WELL.",
                  "<18>{#f/7}I REALLY WISH HE WOULDN'T CHEAT ON THINGS LIKE THAT!",
                  "<18>{#f/7}IT RUINS THE GAME FOR EVERYONE ELSE.",
                  "{#p/undyne}{#f/1}* Or maybe...",
                  "{#f/8}* It just provides a more interesting challenge!!",
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
                  "{#p/undyne}{#f/17}* Papyrus, don't you ever look... well, up?",
                  "<18>{#p/papyrus}{#f/6}WHAT!?",
                  "<18>{#p/papyrus}{#f/7}YOU KNOW I DON'T HAVE TIME FOR THAT!",
                  "{#p/undyne}{#f/1}* But you're not even trying to capture anybody.",
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
                  "{#p/undyne}{#f/3}* ... did you see any, uh...",
                  "<18>{#p/papyrus}{#f/0}... SEE ANY WHAT?",
                  "{#p/undyne}{#f/15}* ... scientific notes?",
                  "<18>{#p/papyrus}{#f/0}OH.",
                  "<18>{#f/0}... NO.",
                  "{#p/undyne}{#f/1}* Darn it!"
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
                  "{#p/undyne}{#f/14}* I'm sure you had no arguments whatsoever.",
                  "<18>{#p/papyrus}{#f/0}OH, ON THE CONTRARY.",
                  "<18>{#f/0}WE ARGUED CONSTANTLY WITH EACH OTHER!"
               ]),
            "<18>{#f/4}I'D ROTATE ONE WAY, AND SAY THAT WAS BETTER...",
            "<18>{#f/4}THEN HE'D TURN, AND SAY HIS WAY WAS BEST.",
            "<18>{#f/6}AS WE ARGUED, WE EACH ROTATED FASTER AND FASTER.",
            ...(solo()
               ? ["<18>{#f/0}IT'S SINCE BECOME A RITUAL FOR US."]
               : [
                  "{#p/undyne}{#f/1}* ... that explains what I saw outside my house earlier.",
                  "<18>{#p/papyrus}{#f/1}YOU SAW THAT!?",
                  "<18>{#f/6}UH, WAIT, I CAN EXPLAIN...",
                  "<18>{#f/5}I MEAN, SANS WAS JUST WORRIED ABOUT... UH...",
                  "<18>{#f/6}... WORRIED THAT I'M SPENDING TOO MUCH TIME THERE!",
                  "<18>{#f/6}YEAH!!",
                  "{#p/undyne}{#f/16}* ... he's your brother, isn't he?",
                  "{#p/undyne}{#f/1}* He might've just wanted you to spend more time with him."
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
                  "{#p/undyne}{#f/1}* Y'know, I WAS thinking of renovating your \"sentry station...\"",
                  "{#f/14}* Like... a surprise gift!",
                  "<18>{#p/papyrus}{#f/4}YOU WHAT?",
                  "{#p/undyne}{#f/12}* But, uh, that'd be messing with perfection.",
                  "<18>{#p/papyrus}{#f/5}PERFECTION, YOU SAY?",
                  "<18>{#p/papyrus}{#f/6}BUT YOU ONCE SAID THINGS CAN ALWAYS BE IMPROVED!",
                  "{|}{#p/undyne}{#f/17}* Well... yes!\n* I just meant that- {%}",
                  "<18>{#p/papyrus}ALMOST-PERFECTION.\nHOW ABOUT WE JUST CALL IT THAT.",
                  "{#p/undyne}{#f/12}* That works."
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
                  "{#p/undyne}{#f/16}* Oh yeah, I remember that incident...",
                  "{#f/22}* He, uh...\n* He was thinking of...",
                  "<18>{#p/papyrus}{#f/5}THINKING OF...?",
                  "{#p/undyne}{#f/9}* ... thanks for being there when you were.",
                  "{#f/16}* Without you, he might've actually...",
                  "<18>{#p/papyrus}{#f/6}WHAT?\nWHAT IS IT??",
                  "{#p/undyne}{#f/12}* ... uh, he would have quit the guard for a really long time.",
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
                  "{#p/undyne}{#f/16}* Yeah... especially as a robot living on the outpost these days.",
                  "{#p/undyne}{#f/9}* I think we both know why that is.",
                  "<18>{#p/papyrus}{#f/5}UNFORTUNATELY.",
                  "{#p/undyne}{#f/17}* But hey!\n* It's not all bad!!",
                  "{#p/undyne}{#f/14}* After all, their chip could just be moved to a new computer.",
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
                     "{#p/undyne}{#f/1}* Huh?\n* What happened?",
                     "<18>{#p/papyrus}{#f/5}THE HUMAN DIDN'T DO SO WELL ON THE WALL OF FIRE.",
                     "{#p/undyne}{#f/10}* Ah...",
                     "{#p/undyne}{#f/8}* So you're telling me they didn't just fly over it!?",
                     "<18>{#p/papyrus}{#f/6}HUMANS CAN FLY??",
                     "{#p/undyne}{#f/17}* ...",
                     "{#p/undyne}{#f/17}* So you're telling me they didn't just walk around it!?",
                     "<18>{#p/papyrus}{#f/6}UHHH..."
                  ])
            ]
            : [
               "<18>{#f/0}BUT YOU, MY FRIEND, ARE QUITE THE PUZZLIST!",
               "<18>{#f/9}IT'S NOT EVERY DAY SOMEONE TROUSLES THIS BONE.",
               ...(solo()
                  ? []
                  : [
                     "{#p/undyne}{#f/1}* Huh?\n* What happened?",
                     "<18>{#p/papyrus}{#f/0}THE HUMAN BEAT MY INFAMOUS \"WALL OF FIRE\" EARLIER!",
                     "{#p/undyne}{#f/8}* Let me guess!\n* They walked around it!!",
                     "<18>{#p/papyrus}{#f/4}NO, ACTUALLY.\nTHEY CLEVERLY WALKED THROUGH IT.",
                     "{#p/undyne}{#f/1}* ... oh.",
                     "{#p/undyne}{#f/14}* My next guess was going to be that they flew over it.",
                     "<18>{#p/papyrus}{#f/0}NOPE!\nJUST PRACTICE AND PERSEVERANCE!",
                     "<18>{#f/5}THOUGH, I'M NOT SURE HOW THEY GOT THEIR PRACTICE...",
                     "<18>{#f/4}CONSIDERING THAT WAS DEFINITELY THEIR FIRST TRY.",
                     ...(SAVE.data.b.undyne_respecc
                        ? [
                           "{#p/undyne}{#f/1}* Heh.\n* They've shown to have a taste for challenge.",
                           "{#f/12}* I'm not surprised they beat it so easily!"
                        ]
                        : [
                           "{#p/undyne}{#f/17}* What?\n* Practice?\n* Screw that!!",
                           "{#f/7}* GIVE ME YOUR SECRETS NOW, PUNK!!!",
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
                  "{#p/undyne}{#f/14}* So... yourself, then.",
                  "<18>{#p/papyrus}{#f/6}HUH?\nWHERE'D YOU GET THAT IDEA??",
                  "{#p/undyne}{#f/12}* Isn't it obvious?\n* Who ELSE is as handsome as you are?",
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
                  "{#p/undyne}{#f/1}* Oh yeah, aren't you guys linked or something?",
                  "<18>{#p/papyrus}{#f/0}FOR AS LONG AS WE CAN REMEMBER!",
                  "{#p/undyne}{#f/14}* That kind of reminds me of those old stories...",
                  "{#p/undyne}{#f/17}* ... of a skeleton who once experimented on himself.",
                  "{#f/8}* For all we know, YOU and your brother could have been involved!!",
                  "<18>{#p/papyrus}{#f/1}ME, UNKNOWINGLY PART OF AN EXPERIMENT!?",
                  "<18>{#f/7}THAT'S PREPOSTEROUS!",
                  "{#p/undyne}{#f/15}* ... you never know..."
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
                  "{#p/undyne}{#f/14}* If you'd like, I could give you a hand...",
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
                  "{#p/undyne}{#f/1}* That puzzle artist in the librarby makes them, I think.",
                  "{#f/11}* ... something tells me she's really bored with her job.",
                  "<18>{#p/papyrus}{#f/4}NOW THERE'S A PUZZLE...",
                  "<18>{#f/0}I'LL JUST HAVE TO GO OVER THERE AND \"SOLVE\" IT!",
                  "{#p/undyne}{#f/12}* Or maybe you could create your own...?",
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
                  "{#p/undyne}{#f/1}* Any time I get stuck on these things, I just send them to Alphys.",
                  "{#f/14}* She's got some fancy image subtraction thing or whatever.",
                  "<18>{#p/papyrus}{#f/0}SUBTRACTION, HUH?",
                  "<18>{#f/4}... WOULDN'T THE MORE ACCURATE TERM BE \"COMPARISON?\"",
                  "{#p/undyne}{#f/8}* Well, it sure does subtract from the headache!"
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
                  "{#p/undyne}{#f/1}* And here I thought my \"hot fridge\" was a big subversion.",
                  "{#f/8}* But this \"gravitational wave\" takes the cake!",
                  "{#f/11}* ... or would that be spaghetti?",
                  "<18>{#p/papyrus}ONLY IF IT WAS USED TO LIFT SUCH A DELIGHTFUL DISH.",
                  "<18>{#f/6}BUT, WAIT!!\nIF THE GRAVITY WAS TOO STRONG...",
                  "<18>{#f/6}IT'D TURN INTO A FLYING SPAGHETTI MONSTER!",
                  "{#p/undyne}{#f/14}* ... now there's a religion I could believe in."
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
                  "{#p/undyne}{#f/8}* And another one is to fly over it with your jetpack!!",
                  "<18>{#p/papyrus}{#f/4}JETPACKS AREN'T THE SOLUTION TO EVERYTHING.",
                  "<18>{#p/papyrus}{#f/7}WHATEVER HAPPENED TO APPRECIATING THE SCENERY?",
                  "{#p/undyne}{#f/16}* ...",
                  "{#p/undyne}{#f/16}* I've been \"appreciating the scenery\" all my life, Papyrus.",
                  "{#p/undyne}{#f/17}* Don't you ever get tired of that!?",
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
                  "{#p/undyne}{#f/16}* Did you hear about the mandate Asgore put out recently?",
                  "{#p/undyne}{#f/16}* Apparently, lasers are \"dangerous\" and \"hazardous\" to kids.",
                  "<18>{#p/papyrus}{#f/6}WELL, HE DOES HAVE A POINT...",
                  "{#p/undyne}{#f/4}* Man!\n* Way to take the fun out of everything!",
                  "{#p/undyne}{#f/12}* I, uh, used to play with those things all the time as a kid.",
                  "<18>{#p/papyrus}{#f/0}... AH.",
                  "<18>{#p/papyrus}{#f/4}OF COURSE YOU'D FIND RISKING YOUR LIFE \"FUN.\"",
                  "{#p/undyne}{#f/14}* Who wouldn't!?!?",
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
                  "{#p/undyne}{#f/12}* Don't you get it?",
                  "<18>{#p/papyrus}{#f/0}GET WHAT?",
                  "{#p/undyne}{#f/1}* I've been told there's a term for this sort of thing.",
                  "{#p/undyne}{#f/1}* The \"jenga joke.\"",
                  "{#p/undyne}{#f/14}* All those complicated rules, not to mention the wind-up...",
                  "{#p/undyne}{#f/12}* Only to result in a big fat zero.",
                  "<18>{#p/papyrus}{#f/0}I DON'T KNOW WHAT YOU'RE TALKING ABOUT, BUT...",
                  "<18>{#p/papyrus}{#f/7}... HEY, HOW DO -YOU- KNOW WHAT HAPPENED HERE?",
                  "{#p/undyne}{#f/15}* Well... I might've swung by the lab earlier, and...",
                  "<18>{#p/papyrus}{#f/7}YOU WERE SPYING ON ME!?",
                  "{#p/undyne}{#f/8}* Not you, Papyrus!!",
                  "<18>{#p/papyrus}{#f/4}哦。",
                  "<18>{#p/papyrus}{#f/7}... SO YOU WERE SPYING ON THE HUMAN!?!?",
                  "{#p/undyne}{#f/17}* I'm the captain of the Royal Guard!!\n* What do you think!"
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
                  "{#p/undyne}{#f/14}* I don't think there's any right answer to that, Papyrus.",
                  "{#f/7}* ... not that you shouldn't think about it!!",
                  "{#f/1}* Questions like that are great for exercising the brain!",
                  "{#f/14}* Also known as the most important muscle in the body.",
                  "<18>{#p/papyrus}{#f/4}FOR A HUMAN, PERHAPS...",
                  "<18>{#f/7}BUT FOR A MONSTER, IT'S ENTIRELY DIFFERENT!",
                  "{|}{#p/undyne}{#f/12}* I know, I was just trying to make it easy for them to- {%}",
                  "<18>{#p/papyrus}{#f/0}YOU SEE, MONSTERS DON'T REALLY USE BRAINS TO THINK.",
                  "<18>{#f/4}IT'S MORE LIKE... A SOUL THING.",
                  "{#p/undyne}{#f/1}* As opposed to a SKULL thing.",
                  "<18>{#p/papyrus}{#f/7}OH MY GOD!!!"
               ])
         ],
         () =>
            solo()
               ? ["<18>{#p/papyrus}{#f/4}PERHAPS US MORTALS ARE NOT WORTHY OF SUCH KNOWLEDGE."]
               : ["{#p/undyne}{#f/12}* Just call me \"pundyne.\"", "<18>{#p/papyrus}{#f/0}PLEASE DON'T."]
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
                  "{#p/undyne}{#f/12}* ... it can't be that bad, right?",
                  "<18>{#p/papyrus}{#f/5}TRUST ME.",
                  "<18>{#f/4}IT WAS PRETTY BAD.",
                  "{#p/undyne}{#f/11}* ... if you say so..."
               ],
         () => (solo() ? ["<18>{#p/papyrus}{#f/4}..."] : ["{#p/undyne}{#f/7}* He said not to talk about it!!"])
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
                  "{#p/undyne}{#f/14}* I could repay it for you, if you like.",
                  "<18>{#p/papyrus}{#f/7}IT'S NOT THE SAME IF I DON'T DO IT MYSELF!",
                  "{#p/undyne}{#f/17}* Couldn't you just wait until it gets home!?",
                  "<18>{#p/papyrus}{#f/7}IT'D MEAN MORE IF IT WAS AT ITS WORKPLACE!",
                  "{#p/undyne}{#f/1}* You're right.\n* I'll let you appear as a hologram there.",
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
                  "{#p/undyne}{#f/14}* You really believe that, don't you?",
                  "{#f/17}* We'd still be living in the dark ages if it wasn't for that!",
                  "{#f/16}* Then again, that WOULD also mean we'd still have a home planet...",
                  "<18>{#p/papyrus}{#f/5}I KNOW, I KNOW...",
                  "<18>{#p/papyrus}{#f/7}I JUST DON'T LIKE SOLVING IT!",
                  "{#p/undyne}{#f/14}* Oh, no, I'm totally with you on that."
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
                  "{#p/undyne}{#f/1}* Just ask Dr. Alphys?",
                  "<18>{#p/papyrus}{#f/9}WOW, I WONDER WHAT GAVE YOU THAT IDEA!!",
                  "<18>{#p/papyrus}{#f/4}... OH WAIT.",
                  "<18>{#p/papyrus}{#f/4}IT'S BECAUSE SHE FILES ALL YOUR REPORTS FOR YOU.",
                  "{#p/undyne}{#f/17}* She's good at sorting out the dates, okay??"
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
                  "{#p/undyne}{#f/12}* What about the one that'd leave you speechless?",
                  "<18>{#p/papyrus}{#f/0}THAT'S THE ULTRA- SECRET EIGHTH WEAPON, ACTUALLY.",
                  "{#p/undyne}{#f/1}* Ooh.\n* Sounds dangerous.",
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
                  "{#p/undyne}{#f/14}* ... enjoys the new and improved food they're selling at Grillby's!",
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
                  "{#p/undyne}{#f/12}* Uh... I think you just made those up.",
                  "{#p/undyne}{#f/17}* There ARE no \"later hours\" on the outpost.",
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
                  "{#p/undyne}{#f/1}* And how will they know what those are?",
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
                  "{#p/undyne}{#f/14}* No doubt because YOU live there.",
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
                  "{#p/undyne}{#f/1}* Don't admire the view for too long, punk!",
                  "{#f/7}* You've still gotta admire the site of OUR legendary battle!",
                  "<18>{#p/papyrus}{#f/6}HOW MANY LEGENDARY BATTLES HAVE THEY BEEN IN?",
                  "{#p/undyne}{#f/8}* Who knows!!"
               ])
         ],
         () =>
            solo()
               ? ["<18>{#p/papyrus}{#f/4}THEY'LL HAVE TO PUT IT IN A MUSEUM SOMEDAY..."]
               : [
                  "{#p/undyne}{#f/1}* Regardless of what happens now...",
                  "{#f/7}* You better not have a battle more legendary than OURS!",
                  "{#f/14}* Not unless I get to be a part of it!\n* Fuhuhu!"
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
                  "{#p/undyne}{#f/1}* You'll get no arguments from me.",
                  "{#f/16}* Half the time, I just use my jetpack as a flashlight...",
                  "<18>{#p/papyrus}{#f/6}WHAT ABOUT THE OTHER FLASHLIGHTS I GAVE YOU?",
                  "{#p/undyne}{#f/1}* Oh, those?",
                  "{#f/14}* ... yeah, I kinda dropped them all trying to use my jetpack.",
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
                  "{#p/undyne}{#f/14}* And you wouldn't have it any other way!",
                  "{#p/undyne}{#f/17}* Right?",
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
                  "{#p/undyne}{#f/13}* A what?",
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
                  "{#p/undyne}{#f/8}* I KNOW RIGHT!?",
                  "{#f/7}* That thing's been broken since before I was BORN."
               ])
         ],
         () => [
            "<18>{#p/papyrus}{#f/0}TRACK THREE IS MY PERSONAL FAVORITE.",
            ...(solo() ? [] : ["{#p/undyne}{#f/1}* Mine's track four!"])
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
                  "{#p/undyne}{#f/1}* Isn't this where Canis Minor likes to sit?",
                  "{#p/undyne}{#f/10}* All alone...\n* Playing those card games with itself...",
                  "<18>{#p/papyrus}{#f/4}OH, COME ON.\nIT'S PERFECTLY CONTENT WITH THAT.",
                  "<18>{#f/0}IT SEEMS TO HAVE ITS OWN AGENDA FOR LIFE...",
                  "<18>{#f/9}INVOLVING CARD GAMES!! AND LOTS OF HEADPATS!",
                  "{#p/undyne}{#f/14}* You're right about the headpats, that's for sure.",
                  "{#p/undyne}{#f/17}* It once barged into a Royal Guard meeting just to BEG for them!",
                  "<18>{#p/papyrus}{#f/6}INTERESTING!!\nBUT WHAT DID YOU DO?",
                  "{#p/undyne}{#f/12}* Well... we all gave it lots of headpats.",
                  "{#p/undyne}{#f/8}* Like we'd ever NOT!!"
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
                  "{#p/undyne}{#f/16}* I'd say the same about MY house, but... y'know.",
                  "<18>{#p/papyrus}{#f/5}YEAH... IT MUST BE TOUGH NOT HAVING ONE.",
                  "<18>{#p/papyrus}{#f/6}... LIKE, WHERE -DO- YOU EVEN FEEL AT HOME NOW?",
                  "{#p/undyne}{#f/1}* Honestly?\n* Here's pretty good!",
                  "<18>{#p/papyrus}{#f/5}BUT... HOW?\nWE'RE JUST STANDING AROUND!",
                  "{#p/undyne}{#f/14}* When I'm with you, ANYWHERE's my home.\n* Fuhuhu.",
                  "<18>{#p/papyrus}{#f/5}... YOU REALLY MEAN THAT?",
                  "{#p/undyne}{#f/8}* Of course!!",
                  "<18>{#p/papyrus}{#f/8}N-NO...!!\nYOU'RE GOING TO MAKE ME CRY!"
               ])
         ],
         () => [
            "<18>{#p/papyrus}{#f/0}I WONDER WHAT HUMANS CALL HOME THESE DAYS.",
            "<18>{#p/papyrus}{#f/4}LAST I HEARD, THEY WERE STILL LIVING ON EARTH...",
            ...(solo()
               ? []
               : [
                  "{#p/undyne}{#f/1}* Actually, they say Earth is a decaying mess right now.",
                  "{#p/undyne}{#f/12}* ... just something I overheard at the Royal Lab.",
                  "{#p/undyne}{#f/13}* They'd found some kind of \"evidence\" for a natural disaster..."
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
                           "{#p/undyne}{#f/1}* And what about my room?",
                           "<18>{#p/papyrus}{#f/4}WELL... THAT ROOM'S VERY HOT.",
                           "<18>{#p/papyrus}{#f/4}ON FIRE, IN FACT.",
                           "{#p/undyne}{#f/17}* Good!!\n* I like hot things!"
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
                        : ["{#p/undyne}{#f/8}* Especially when they're on fire!!!"])
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
                  "{#p/undyne}{#f/16}* It's also one of the most well-known photos of our old homeworld...",
                  "{#p/undyne}{#f/9}* One of the last ones still in existence.",
                  "<18>{#p/papyrus}{#f/5}... DO YOU THINK WE'LL EVER FIND ANY OTHERS?",
                  "{#p/undyne}{#f/1}* Well, if we knew some way of scanning a monster's memories...",
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
                  "{#p/undyne}{#f/1}* Oh yeah, doesn't Sans read you those?",
                  "<18>{#p/papyrus}{#f/0}OF COURSE!\nTHEY'RE LIKE RAW IMAGINATION FUEL!",
                  "{#p/undyne}{#f/1}* Imagine if you got a homeworld survivor to tell you stories...",
                  "{#f/14}* Someone like THAT could provide you with a HUNDRED great bedtimes!",
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
                  "{#p/undyne}{#f/10}* Ouch...\n* That's a rough one.",
                  "{#p/undyne}{#f/16}* Especially for something written by a human.",
                  "<18>{#p/papyrus}{#f/6}... DO HUMANS ALWAYS WRITE BOOKS THIS TRAGIC!?",
                  "{#p/undyne}{#f/14}* I wouldn't know.\n* It's the only one I've ever read.",
                  "{#p/undyne}{#f/15}* Well, unless you count those \"books\" Alphys posted the other day...",
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
            ...(solo() ? [] : ["{|}{#p/undyne}{#f/8}* YEAHHHH MAKE SOME NOI- {%}"])
         ],
         () =>
            solo()
               ? ["<18>{#p/papyrus}{#f/4}(REALLY...)"]
               : [
                  "<18>{#p/papyrus}{#f/4}(YES, I HUNG UP TO STOP UNDYNE FROM DISTURBING YOU.)",
                  "{|}{#p/undyne}{#f/8}* YEA- {%}"
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
                  "{#p/undyne}{#f/1}* I hope they don't mind me using the pipes as a jungle gym.",
                  "{#f/8}* I used to swing on them all the time!",
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
                  "{#p/undyne}{#f/14}* Sounds to me like he's always watching.",
                  "<18>{#p/papyrus}{#f/0}AH, YES... ALWAYS WATCHING.",
                  "<18>{#f/4}ALWAYS WATCHING A VARIETY OF ONLINE VIDEO CONTENT.",
                  "{#p/undyne}{#f/3}* ... I wonder if he's a fan of Mew Mew Space Adventure.",
                  "<18>{#p/papyrus}{#f/7}YOU'RE MISSING THE POINT!"
               ])
         ],
         () =>
            solo()
               ? ["<18>{#p/papyrus}{#f/5}WE WAKEFUL FOLK COULD ONLY DREAM OF SUCH SLOTH..."]
               : [
                  "<18>{#p/papyrus}{#f/5}EVEN UNDYNE'S BEEN CAUGHT IN SANS'S BAD HABITS...",
                  "{#p/undyne}{#f/17}* I have NOT!!",
                  "<18>{#p/papyrus}{#f/4}... JUST DON'T WATCH IT ON THE JOB, OKAY?",
                  "{#p/undyne}{#f/17}* Okay!!"
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
                  ? ["{#p/undyne}{#f/17}* ...", "{#p/undyne}{#f/14}* ... yeah, you're right."]
                  : [
                     "{#p/undyne}{#f/8}* Wait, no!\n* I want to know!",
                     "{#f/7}* You!\n* What've you been hiding, punk!?",
                     "<18>{#p/papyrus}{#f/6}NOTHING!\nTHAT'S WHAT!!",
                     "{#p/undyne}{#f/17}* I wasn't asking you.",
                     "{#f/14}* ... eh, I'll just search the dimensional storage array later.",
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
                  "{#p/undyne}{#f/12}* Me? Stealing?\n* Pfft, I dunno what you're talking about!",
                  "<18>{|}{#p/papyrus}SEE?\nSHE'S NOT- {%}",
                  SAVE.data.b.undyne_respecc
                     ? "{#p/undyne}{#f/14}* I'd only steal from someone who ISN'T the bravest punk around!"
                     : "{#p/undyne}{#f/14}* I'd only steal from someone who ISN'T the nicest punk around!",
                  "<18>{#p/papyrus}{#f/4}... SO YOU'D STEAL FROM ME, THEN.",
                  "{#p/undyne}{#f/17}* Don't overthink it!"
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
                  "{#p/undyne}{#f/16}* That reminds me...",
                  "{#f/9}* ... one of my top guards, Doge, quit her job today.",
                  "<18>{#p/papyrus}{#f/6}WHY?\nWAS SHE DISHONEST!?",
                  "{#p/undyne}{#f/1}* Actually, she's one of the most honest dogs I know.",
                  "{#f/16}* I think I just went a little hard on her.",
                  "<18>{#p/papyrus}{#f/5}AH... WELL...",
                  "<18>{#f/6}YOU CAN JUST APOLOGIZE TO HER LATER, RIGHT?",
                  "{#p/undyne}{#f/12}* ... yeah, I guess that's a good place to start."
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
                  "{#p/undyne}{#f/1}* That makes sense.\n* Humans themselves are the same way...",
                  "{#p/undyne}{#f/16}* Waging that perplexing war over something so stupidly simple.",
                  "<18>{#p/papyrus}{#f/6}... WELL THAT GOT DARK FAST!",
                  "{#p/undyne}{#f/12}* ... thankfully, we've got this really nice human to offset it!",
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
                  "{#p/undyne}{#f/14}* I think I know what he meant, Papyrus.",
                  "<18>{#p/papyrus}{#f/6}WHAT!?\nWHAT WAS IT?",
                  "{#p/undyne}{#f/1}* Oh, come on.\n* You know your brother better than anyone.",
                  "{#f/12}* Solving this one should be a piece of cake!",
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
                  "{#p/undyne}{#f/14}* Yeah, having to read signs kinda stinks.",
                  "{#p/undyne}{#f/8}* I just throw spears at the receiver and call it a day!",
                  "<18>{#p/papyrus}{#f/6}WON'T THAT BREAK THE PUZZLE FOR EVERYONE ELSE!?",
                  "{#p/undyne}{#f/14}* Surprisingly, no.",
                  "{#p/undyne}{#f/14}* Human-made puzzles are even more resillient than THEY are.",
                  "{#p/undyne}{#f/7}* Trust me.\n* I've TRIED to break them on purpose."
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
                  "{#p/undyne}{#f/12}* So that's why my messages to Alphys aren't getting through.",
                  "<18>{#p/papyrus}{#f/6}YOU USED A SIGNAL STAR FOR THAT!?",
                  "<18>{#f/5}OH...\nUNDYNE...",
                  "{#p/undyne}{#f/17}* What?\n* I thought it'd send the message on demand!",
                  "{#f/11}* That's how they used to work, right??",
                  "<18>{#p/papyrus}{#f/0}AH, NOT EXACTLY.",
                  "<18>{#f/4}WHEN WE FIRST DISCOVERED THEM GROWING HERE...",
                  "<18>{#f/9}THEY WERE A LOT MORE RECEPTIVE TO NEW SIGNALS!",
                  "<18>{#f/5}THEN, AS THEY GREW OLDER, THEY BECAME SLOWER.",
                  "{#p/undyne}{#f/1}* Huh.\n* Fascinating!",
                  "{#f/12}* I guess I'll have to come up with something else, then."
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
                           "{#p/undyne}{#f/7}* You just don't know how to have fun.",
                           "<18>{#p/papyrus}{#f/4}YOU HAVE A JETPACK, SO YOU CAN'T FALL OFF.",
                           "<18>{#f/6}I HAVE NO SUCH GUARANTEES!",
                           "{#p/undyne}{#f/14}* Would it be so much to get you to live a little?",
                           "{#p/undyne}{#f/4}* Even if you DID fall off, it's not like you'd get hurt.",
                           "{#p/undyne}{#f/1}* You'd just... float around for a while.",
                           "{#p/undyne}{#f/14}* And then I'd come and rescue you with my jetpack!",
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
                  "{#p/undyne}{#f/1}* Oh yeah, I forgot about those things...",
                  "{#p/undyne}{#f/14}* Eh, most people know the way through.\n* It'll be fine.",
                  "<18>{#p/papyrus}{#f/6}THIS SEEMS LIKE A RECIPE FOR DISASTER.",
                  "{#p/undyne}{#f/12}* Don't worry about it.\n* In fact, it's been kinda handy!",
                  "{#p/undyne}{#f/1}* I think the canine unit even started using it as a training ground.",
                  "<18>{#p/papyrus}{#f/4}AND HOW DOES THAT WORK, EXACTLY?",
                  "{#p/undyne}{#f/17}* It's something about \"tactical temptation avoidance?\"",
                  "{#p/undyne}{#f/12}* They put treats behind the trap paths, and the dogs try to avoid them.",
                  "<18>{#p/papyrus}{#f/5}I TAKE IT BACK.\nIT'S NOT A RECIPE FOR DISASTER.",
                  "<18>{#p/papyrus}{#f/6}IT'S A PRE-COOKED DISASTER SERVED ON A SILVER PLATTER!"
               ])
         ],
         () =>
            solo()
               ? ["<18>{#p/papyrus}{#f/5}I FIND IT BEST TO STEER CLEAR OF SCARY MAZE GAMES."]
               : [
                  "{#p/undyne}{#f/1}* There used to be a lot more, actually.\n* It's not what it was.",
                  "<18>{#p/papyrus}{#f/6}HOW MUCH MORE?",
                  "{#p/undyne}{#f/12}* ...\n* Many more.",
                  "<18>{#p/papyrus}{#f/5}HOW MANY?",
                  "{#p/undyne}{#f/17}* Very many.",
                  "<18>{#p/papyrus}{#f/6}HOW VERY??",
                  "{#p/undyne}{#f/7}* Knock it off!"
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
                  "{#p/undyne}{#f/14}* You can thank Asgore for THAT brilliancy in naming.",
                  "{#p/undyne}{#f/8}* He always has the BEST names for things!",
                  "<18>{#p/papyrus}{#f/0}I KNOW, RIGHT?\nEVERYTHING IS SO EASY TO GRASP!",
                  "{#p/undyne}{#f/3}* ... you mean that seriously, don't you.",
                  "<18>{#p/papyrus}{#f/0}OF COURSE!\nIT'S A QUALITY OF HIS I APPRECIATE.",
                  "{#p/undyne}{#f/1}* I see...",
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
                  "{#p/undyne}{#f/1}* So would you say the call's getting \"sliced\" or \"shredded?\"",
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
                  "{#p/undyne}{#f/4}* What!?\n* Don't say it like THAT!",
                  "<18>{#p/papyrus}{#f/6}I-I MEAN, YOUR JOURNEY'S JUST GETTING STARTED!",
                  "<18>{#p/papyrus}{#f/6}THERE'S STILL PLENTY OF THINGS TO SEE!",
                  "<18>{#p/papyrus}{#f/6}AND PLENTY OF PLACES TO BE!",
                  "<18>{#p/papyrus}{#f/4}AND MOST OF ALL...",
                  "<18>{#p/papyrus}{#f/9}PLENTY OF NEW FRIENDS TO MEET!",
                  "{#p/undyne}{#f/12}* That's better."
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
                  "{#p/undyne}{#f/13}* I doubt a single person has managed to enroll properly.",
                  "<18>{#p/papyrus}{#f/5}YEAH... YOU'RE PROBABLY RIGHT.",
                  "<18>{#p/papyrus}{#f/6}DO THOSE \"PREMIUM\" TELESCOPES EVEN WORK AT ALL!?",
                  "{#p/undyne}{#f/8}* Who knows!!",
                  "{#p/undyne}{#f/1}* But it's fine, because the normal ones work well enough.",
                  "{#p/undyne}{#f/14}* I use them all the time!"
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
                     "{#p/undyne}{#f/1}* That bird will carry anyone past the gap.\n* It NEVER says no.",
                     "{#f/16}* When I was younger, it once gave ME a lift.\n* It took an hour...",
                     "{#f/17}* But this bird NEVER once thought of giving up!!!",
                     "{#f/1}* Cherish this bird."
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
                        "{#p/undyne}{#f/7}* So you're telling me it also has to navigate through THAT!?",
                        "{#p/undyne}{#f/8}* CHERISH THIS BIRD EVEN HARDER, DAMN IT!",
                        "<18>{#p/papyrus}{#f/6}I'M CHERISHING AS HARD AS I CAN!!",
                        "{#p/undyne}{#f/7}* GOOD!!!"
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
                  "{#p/undyne}{#f/14}* Well, as long as they're not cold, anyway.",
                  "{#p/undyne}{#f/17}* Then I don't love them that much!!"
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
                  "{#p/undyne}{#f/1}* So you're saying that's NOT normal, right?",
                  "<18>{#p/papyrus}{#f/0}RIGHT.",
                  "{#p/undyne}{#f/14}* ... at this rate, you'll be a \"sarcasm sensei\" in no time!",
                  "<18>{#p/papyrus}{#f/4}I'M LOOKING FORWARD TO USING IT ON MY BROTHER.",
                  "{#p/undyne}{#f/1}* Careful now.\n* He's the de-facto WIZARD of sarcasm.",
                  "{#p/undyne}{#f/17}* If you want any chance of besting him, you've gotta train like CRAZY!",
                  "<18>{#p/papyrus}{#f/4}OH, BELIEVE ME, UNDYNE, I'M READY.",
                  "{#p/undyne}{#f/8}* I hope you're not being sarcastic about that!"
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
                  "{#p/undyne}{#f/17}* ... seriously?\n* This is the second time you've done this!",
                  "<18>{#p/papyrus}{#f/6}I WANTED TO KNOW HOW THE STRINGS WERE ATTACHED!",
                  "{#p/undyne}{#f/8}* That was your excuse last time!!",
                  "<18>{#p/papyrus}{#f/6}BUT WHAT ABOUT MY CURIOSITY!!!",
                  "{#p/undyne}{#f/12}* ... maybe leave the web-crawling to spiders for now."
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
                  "{#p/undyne}{#f/8}* And don't forget to get loud in their face!!",
                  "<18>{#p/papyrus}{#f/6}... THAT MIGHT BE A BIT MUCH.",
                  "{#p/undyne}{#f/14}* Well, it worked on the ELITE squad yesterday, so...",
                  "<18>{#p/papyrus}{#f/4}...",
                  "<18>{#p/papyrus}{#f/4}I'M STARTING TO RECONSIDER MY CAREER PATH...",
                  "{#p/undyne}{#f/17}* No, wait!!\n* I wasn't talking about ALL the guards!",
                  "<18>{#p/papyrus}{#f/6}AND WHEN I -DO- BECOME AN ELITE SQUAD MEMBER???",
                  "{#p/undyne}{#f/14}* ... I'll just be nice to you specifically!",
                  "<18>{#p/papyrus}{#f/7}BUT THAT WOULDN'T BE FAIR TO THE OTHER MEMBERS!!",
                  "{#p/undyne}{#f/17}* I give up!!"
               ])
         ],
         () => ["<18>{#p/papyrus}{#f/0}HUM HUM HUM...", ...(solo() ? [] : ["{#p/undyne}{#f/12}* Hum hum hum..."])]
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
                  "{#p/undyne}{#f/16}* That statue's been out there forever...",
                  "{#p/undyne}{#f/17}* ... but nobody seems to know where it came from!",
                  "{#p/undyne}{#f/1}* It has a cool music box inside, though."
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
                  "{#p/undyne}{#f/11}* Some say the statue also contains a SECOND music box...",
                  "{#f/12}* ... but I'll believe it when I hear it."
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
                  "{#p/undyne}{#f/10}* And maybe that piano would be used to solve puzzles...",
                  "{#p/undyne}{#f/10}* Or practice combat by fighting the ivories...",
                  "{#p/undyne}{#f/10}* Or play a certain melody that reminds you of someone special...",
                  "{#p/undyne}{#f/7}* ... if only you were in that room RIGHT NOW!!",
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
                  "{#p/undyne}{#f/14}* Great to see you've still got a sense of adventure in you.",
                  "<18>{#p/papyrus}{#f/9}OF COURSE!!\nI, THE GREAT PAPYRUS...",
                  "<18>{#f/9}HAVE A SENSE OF ADVENTURE BEYOND COMPARE!",
                  "<18>{#f/4}WELL, THAT'S NOT -ENTIRELY- TRUE.",
                  "<18>{#f/6}SANS FINDS A NEW WAY TO EXPLORE THE COUCH EVERY DAY.",
                  "{#p/undyne}{#f/17}* ... ah.",
                  "{#f/17}* So that's why that couch is so messy."
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
                  "{#p/undyne}{#f/12}* Maybe it's one of those \"spatial distortions\" Alphys talks about.",
                  "{#p/undyne}{#f/1}* The ones that can slow down time if you get too close.",
                  "<18>{#p/papyrus}{#f/5}THE HUMAN SHOULD BE CAREFUL, THEN!",
                  "<18>{#p/papyrus}{#f/6}IF TIME WERE TO SLOW DOWN FULLY, COULD YOU ESCAPE??",
                  "{#p/undyne}{#f/17}* ... there's nothing a little brute force can't solve!"
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
                  "{#p/undyne}{#f/1}* During human-chasing practice with the ELITE squad...",
                  "{#f/17}* At least one guard ALWAYS gets distracted by it.",
                  "{#f/10}* Whether it's Cozmo, debating the nature of aesthetics...",
                  "{#f/10}* Or Terrestria obsessing over the \"beauty of the universe...\"",
                  "{#f/9}* ... well, actually, it's just those two.",
                  "<18>{#p/papyrus}{#f/5}BUT... AS THE OLDEST MONSTERS ALIVE...",
                  "<18>{#p/papyrus}{#f/6}THEY SHOULD BE GREAT AT DOING THEIR JOB!!",
                  "<26>{#p/undyne}{#f/16}* They ARE good at their job, but... they don't take training seriously.",
                  "<18>{#p/papyrus}{#f/5}OH.\nWELL, THAT'S KIND OF UNFORTUNATE.",
                  "{#p/undyne}{#f/1}* Lucky enough, no fancy view can catch THIS captain's eye!!",
                  "{#f/12}* Which is why it usually falls to me to keep them in check.",
                  "<18>{#p/papyrus}{#f/6}WHILE THAT DOES SOUND HARD...",
                  "<18>{#p/papyrus}{#f/9}... I KNOW YOU'RE MORE THAN CAPABLE OF DOING IT!",
                  "{#p/undyne}{#f/14}* Thanks, Papyrus."
               ])
         ],
         () =>
            solo()
               ? [
                  "<18>{#p/papyrus}{#f/7}WHAT ARE YOU DOING TRYING TO CALL ME?",
                  "<18>{#p/papyrus}{#f/7}YOU'VE GOT FANCY THINGS TO ADMIRE!"
               ]
               : [
                  "{#p/undyne}{#f/1}* Fortunately for you, you're not IN the Royal Guard, punk!",
                  "{#p/undyne}{#f/12}* So...\n* Feel free to get as distracted as you like."
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
                  "{#p/undyne}{#f/17}* What bridge?\n* The one I cut down earlier??",
                  "{#p/undyne}{#f/8}* THAT was just a piece of the old bridge in the factory!",
                  "<18>{#p/papyrus}{#f/6}THE ONE THEY FINALLY REPLACED JUST TODAY??",
                  "<18>{#p/papyrus}{#f/5}WOWIE... I THOUGHT THAT WAS GONE FOREVER...",
                  "{#p/undyne}{#f/14}* Nope.\n* I kept it safe!"
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
                  "{#p/undyne}{#f/12}* Are you sure that's... uh, safe?",
                  "{#p/undyne}{#f/10}* I get that one's trash is another's treasure, but-",
                  "<18>{#p/papyrus}{#f/0}IF BRATTY AND CATTY CAN DO IT OUT IN SPACE...",
                  "<18>{#p/papyrus}{#f/0}SANS AND I CAN DO IT IN ONE SINGLE ROOM.",
                  "{#p/undyne}{#f/1}* When you put it like that, it doesn't seem so bad.",
                  "{#p/undyne}{#f/17}* Just be sure to get out before the disposal box activates!",
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
                  "{#p/undyne}{#f/14}* So that's your theory.",
                  "{#p/undyne}{#f/14}* That all of those tablets are connected in this way.",
                  "<18>{#p/papyrus}{#f/0}YES.",
                  "{#p/undyne}{#f/1}* Okay.\n* Just one question...",
                  "{#p/undyne}{#f/7}* WHERE's the PROOF!?",
                  "<18>{#p/papyrus}{#f/6}IN THE ANIME!!",
                  "<18>{#p/papyrus}{#f/4}THE SCI-FI ANIME.",
                  "<18>{#p/papyrus}{#f/4}WHICH I HAVE YET TO WATCH, BECAUSE I'M TOO BUSY.",
                  "{#p/undyne}{#f/17}* Too busy for sci-fi!?",
                  "{#p/undyne}{#f/8}* You're kidding!!"
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
                  "{#p/undyne}{#f/1}* Hmm... \"don't look past the hidden path...\"",
                  "{#p/undyne}{#f/11}* What hidden path?",
                  "{#p/undyne}{#f/13}* And then... \"close your eyes...\"",
                  "{#p/undyne}{#f/12}* Okay, no no no, hold it right there.",
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
                  "{#p/undyne}{#f/1}* Like the ones at Gerson's shop?",
                  "{#f/8}* I buy stuff from him ALL the time!",
                  "<18>{#p/papyrus}{#f/6}WHAT'S SO SPECIAL ABOUT HIS DEALS?",
                  "{#p/undyne}{#f/17}* Are you kidding?\n* Gerson survived the human- monster war!",
                  "{#f/14}* He's a REAL hero.",
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
                           "{#p/undyne}{#f/12}* Huff... puff...!",
                           "{#f/8}* YEAH!!!\n* That's MY HOUSE!!!",
                           "<18>{#p/papyrus}{#f/6}UH, HI UNDYNE!\nHOW'D YOU GET HERE SO FAST?",
                           "{#p/undyne}{#f/17}I RAN.",
                           "<18>{#p/papyrus}{#f/1}WHAT??\nTHEN YOU MUST HAVE SOMETHING...",
                           "<18>{#f/9}EXTREMELY COOL TO SAY ABOUT YOUR HOUSE!!!",
                           "{#p/undyne}{#f/14}* Nope!!!"
                        ]
                        : [
                           "<18>{#f/4}AT LEAST IT WAS, UNTIL...",
                           "{#p/undyne}{#f/12}* ... we set it on fire.",
                           "{#f/8}* BUT WHO CARES??",
                           "{#f/14}* Hanging out with Papyrus is the BEST!"
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
                           "{#p/undyne}{#f/14}* Don't bet on it!"
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
                  "{#p/undyne}{#f/17}* They don't even let ME help them feel better!",
                  "{#f/16}* ... guess not everyone can be made happier by hanging out with them.",
                  "<18>{#p/papyrus}{#f/5}YEAH... SANS CAN BE THE SAME WAY AT TIMES.",
                  "<18>{#f/0}I MEAN, DON'T GET ME WRONG.\nHE'S USUALLY OKAY!",
                  "<18>{#f/6}BUT, LIKE EVERYONE, HE HAS HIS BAD DAYS.",
                  "{#p/undyne}{#f/14}* Like \"everyone,\" huh?\n* Does this \"everyone\" include Papyrus?",
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
                  "{#p/undyne}{#f/12}* Yeah, sometimes it can be a little awkward...",
                  "{#p/undyne}{#f/1}* But for the most part, you're right.",
                  "<18>{#p/papyrus}{#f/0}WHAT DO YOU MEAN?",
                  "{#p/undyne}{#f/1}* Well... if you encourage again and again...",
                  "{#p/undyne}{#f/1}* They might think you're just buttering them up.",
                  "<18>{#p/papyrus}{#f/7}WHAT!?\nI ONLY USE BUTTER FOR COOKING!",
                  "{#p/undyne}{#f/16}* All I'm saying is, if you constantly encourage someone...",
                  "{#p/undyne}{#f/16}* They won't even get a chance to process it.",
                  "{#p/undyne}{#f/17}* So take it at a steady pace!!",
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
                  "{#p/undyne}{#f/14}* Actually...\n* You're not the only one who's heard something.",
                  "{#p/undyne}{#f/17}* I could have sworn there was something there, too.",
                  "<18>{#p/papyrus}{#f/5}LIKE A SOUND YOU KNOW IS IN THE ROOM WITH YOU...",
                  "<18>{#p/papyrus}{#f/4}... BUT CAN'T BE CONFIRMED WITH YOUR SENSES.",
                  "{#p/undyne}{#f/1}* Yeah!!\n* That's the one!!"
               ])
         ],
         () => [
            "<18>{#p/papyrus}{#f/0}MAYBE IT'S A SOUND FROM THE ORIGINS OF THE COSMOS.",
            "<18>{#p/papyrus}{#f/5}A LOST CALL FROM ACROSS THE STARS...",
            "<18>{#p/papyrus}{#f/5}TRACING BACK TO WHEN THE UNIVERSE BEGAN.",
            ...(solo()
               ? []
               : [
                  "{#p/undyne}{#f/17}* And if the universe HAS no beginning??",
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
                  "{#p/undyne}{#f/16}* Yeah, I often wonder about that too.",
                  "{#p/undyne}{#f/17}* It's kind of impressive how dumb they are.",
                  "<18>{#p/papyrus}{#f/7}THEY'RE NOT DUMB!!",
                  "<18>{#p/papyrus}{#f/5}THEY JUST...",
                  "<18>{#p/papyrus}{#f/6}... WEREN'T ABLE TO THINK OF THOSE THINGS.",
                  "{#p/undyne}{#f/12}* Well...\n* Maybe you're right.",
                  "{#p/undyne}{#f/12}* Still doesn't make us any less trapped, though."
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
                     "{#p/undyne}{#f/17}* Even if it WASN'T shut off, do you think you'd be able to solve it??",
                     "{#f/14}* Many have tried in the past, but very few have succeeded.",
                     "<18>{#p/papyrus}{#f/0}OH, I'M SURE IT WOULDN'T BE A PROBLEM.",
                     "<18>{#p/papyrus}{#f/0}I SOLVED THE OTHER PUZZLES OF THIS KIND VERY QUICKLY!",
                     "{#p/undyne}{#f/14}* If by \"quickly,\" you mean several HOURS, then yes.",
                     "<18>{#p/papyrus}{#f/6}WHAT?? HOURS?",
                     "<18>{#p/papyrus}{#f/5}I SOLVED THOSE PUZZLES IN NO MORE THAN TEN SECONDS!",
                     "{#p/undyne}{#f/17}* And the time you spent staring at them...?",
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
                           "{#p/human}* (Papyrus whispered something in your ear.)",
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
                  "{#p/undyne}{#f/14}* Correction.\n* I come here to PATROL and watch for humans.",
                  "{#p/undyne}{#f/7}* That's my JOB.",
                  "<18>{#p/papyrus}{#f/6}WELL!!\nDO IT LESS MENACINGLY THEN!!",
                  "{#p/undyne}{#f/14}* I am who I am, and there's nothing I can do to change that.",
                  "<18>{#p/papyrus}{#f/6}BUT I SAY ANYONE CAN CHANGE IF THEY JUST TRY!!",
                  "{#p/undyne}{#f/17}* There's exceptions to EVERY rule!",
                  "<18>{#p/papyrus}{#f/7}THEN MY RULE IS AN EXCEPTION TO YOUR RULE!",
                  "{#p/undyne}{#f/4}* ...",
                  "{#p/undyne}{#f/5}* ...",
                  "{#p/undyne}{#f/12}* ... okay, didn't see that one coming."
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
                  "{#p/undyne}{#f/12}* It's probably just a spatial disturbance.",
                  "{#p/undyne}{#f/17}* I felt it earlier today, when I was chasing down the human.",
                  "<18>{#p/papyrus}{#f/4}PESKY DISTORTIONS, ALWAYS MEDDLING WITH SPACETIME...",
                  "<18>{#p/papyrus}{#f/7}WHEN WILL THEY EVER LEARN TO STOP!?",
                  "{#p/undyne}{#f/1}* Well, it's not THEIR fault things get weird.",
                  "{#p/undyne}{#f/14}* Spatial distortions are just a part of... well, space.",
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
                  "{#p/undyne}{#f/7}* And some places are only accessible via the air!",
                  "<18>{#p/papyrus}{#f/6}FOR EXAMPLE??",
                  "{#p/undyne}{#f/8}* For example, the HOLE in the middle of that platform!",
                  "<18>{#p/papyrus}{#f/0}AH.",
                  ...(SAVE.data.b.f_state_kidd_betray
                     ? [
                        "{#p/undyne}{#f/16}* But there was this kid who stumbled through it earlier...",
                        "{#p/undyne}{#f/9}* And would've lost control if it wasn't for me.",
                        "<18>{#p/papyrus}{#f/9}... WELL!!\nIT'S A GOOD THING YOU WERE THERE!",
                        "{#p/undyne}{#f/16}* Yeah, 'cause there definitely wasn't anyone else there.",
                        "{#p/undyne}{#f/11}* Isn't that right, punk?",
                        "<18>{#p/papyrus}{#f/6}... HUH???"
                     ]
                     : [
                        "{#p/undyne}{#f/1}* There was this kid who stumbled through it earlier, but...",
                        "{#p/undyne}{#f/1}* The human rescued them before they lost control.",
                        "<18>{#p/papyrus}{#f/9}... WELL!!\nIT'S A GOOD THING THEY WERE THERE!",
                        "<18>{#p/papyrus}{#f/4}...\nWAIT A SECOND...",
                        "<18>{#p/papyrus}{#f/7}WHAT WERE -YOU- DOING THERE!?\nSTANDING AROUND!?",
                        "{#p/undyne}{#f/7}The human rescued them very quickly!!"
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
                  "{#p/undyne}{#f/1}* It's easier to get lost in here than you think.",
                  "{#f/4}* This one time, there was a search for a missing monster...",
                  "{#f/7}* And I could have sworn the room I was in repeated!",
                  "<18>{#p/papyrus}{#f/0}LIKE HOW A SIGNAL STAR REPEATS ITS SIGNAL!",
                  "{#p/undyne}{#f/10}* Not really...",
                  "{#f/12}* It's more like the room got... longer, somehow.",
                  "{#f/11}* ... huh.",
                  "<18>{#p/papyrus}{#f/5}... DID THE MONSTERS EVER GET FOUND?",
                  "{#p/undyne}{#f/12}* Yeah, it just turned out to be some random kid.",
                  "{#f/10}* I asked them where their home was, but... they...",
                  "{#f/12}* ... uh, didn't have one.",
                  "<18>{#p/papyrus}{#f/6}THAT SEEMS... RATHER CONCERNING.",
                  "{#p/undyne}{#f/17}* Tell me about it!!!"
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
            ...(solo() ? [] : ["{#p/undyne}{#f/14}* That about sums it up."])
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
                     "{#p/undyne}{#f/12}* Ah, right, the \"story of our people...\"",
                     "{#f/1}* I didn't really bother telling it in the end.",
                     "{#f/8}* The punk probably knows it already anyway!"
                  ]
                  : [
                     "{#p/undyne}{#f/12}* Ah, right, the \"story of our people...\"",
                     "{#f/1}* Despite all the rehearsal, I just ended up going off the cuff.",
                     "{#f/8}* Forget about some sappy pre-planned speech!!"
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
                  "{#p/undyne}{#f/17}* Don't give me THAT!!\n* I was in a hurry!",
                  "<18>{#p/papyrus}{#f/4}YOU'VE BEEN IN A LOT OF HURRIES...",
                  "{#p/undyne}{#f/7}* You think I don't know that!?!?",
                  "<18>{#p/papyrus}{#f/4}... YET YOU STILL GET INTO THEM ANYWAY.",
                  "{#p/undyne}{#f/1}* Facing danger head-on is a part of being in the Royal Guard.",
                  "<18>{#p/papyrus}{#f/6}BUT YOU DON'T HAVE TO RISK YOUR LIFE??",
                  "{#p/undyne}{#f/12}* No risk, no reward!",
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
                        "{#p/undyne}{#f/14}* So that's how they were able to befriend me.",
                        "{#p/undyne}{#f/17}* You could have WARNED me, Papyrus!!\n* There's no escape now!",
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
                        "{#p/undyne}{#f/8}* Because I'M here, silly!",
                        "<18>{#p/papyrus}{#f/6}OF COURSE!!\nHOW COULD I FORGET!!"
                     ])
               ],
         () =>
            SAVE.data.n.plot <= 48.1 && SAVE.data.n.state_foundry_blookdate < 2
               ? solo()
                  ? ["<18>{#p/papyrus}{#f/5}JUST WATCH OUT FOR THE ECTOPLASM."]
                  : [
                     "<18>{#p/papyrus}{#f/5}AT LEAST SHE'S LEARNED HER LESSON BY NOW...",
                     "{#p/undyne}{#f/14}* Yeah... totally!"
                  ]
               : solo()
                  ? ["<18>{#p/papyrus}{#f/9}THAT GHOST HAS LOADS OF MUSIC ON THEIR STEREO!"]
                  : ["<18>{#p/papyrus}{#f/0}BOSSY MUSIC FOR A BOSSY FISH LADY.", "{#p/undyne}{#f/8}* Pretty much!!"]
      ),
      f_hapstablook: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}{#f/6}HUH?\nWHERE ARE YOU?",
            "<18>{#p/papyrus}{#f/5}I'VE... NEVER BEEN IN HERE BEFORE.",
            ...(solo()
               ? ["<18>{#p/papyrus}{#f/5}NOR HAVE I... SEEN ANYONE ELSE HERE, EITHER."]
               : [
                  "{#p/undyne}{#f/14}* ... yeah, that house has been abandoned for a long time.",
                  "{#p/undyne}{#f/17}* Since before I was born, in fact!",
                  "<18>{#p/papyrus}{#f/6}HOW STRANGE!!"
               ])
         ],
         () =>
            solo()
               ? ["<18>{#p/papyrus}{#f/5}TO BE HONEST, I'M NOT SURE I WANT TO KNOW WHY..."]
               : ["<18>{#p/papyrus}{#f/5}TIME REALLY DOES FLY BY, HUH?", "{#p/undyne}{#f/14}* That it does!"]
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
                  "{#p/undyne}{#f/14}* Even Dr. Alphys used to live in one of those things.",
                  "{#p/undyne}{#f/1}* With her childhood friends, Bratty and Catty...",
                  "{#p/undyne}{#f/1}* She told me about this when she first became royal scientist.",
                  "<18>{#p/papyrus}{#f/0}OOH, I'M CURIOUS!\nI'LL ASK HER ABOUT IT LATER.",
                  "{#p/undyne}{#f/12}* You do that.\n* I THINK she likes talking about it...?"
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
                  "{#p/undyne}{#f/1}* Alphys is... always at the lab, Papyrus.",
                  "<26>{#f/17}* Her \"house\" is that purple cube on the upper floor.",
                  "<26>{#f/16}* Don't ask me how it works, because even though she told me...",
                  "<26>{#f/12}* I don't think either of us would understand it.",
                  "<18>{#p/papyrus}{#f/4}POINT TAKEN.",
                  "<18>{#f/0}SO HOW DOES IT WORK?",
                  "{#p/undyne}{#f/17}* ...",
                  "{#f/14}* I'll tell you later."
               ])
         ],
         () =>
            solo()
               ? ["<18>{#p/papyrus}{#f/4}SHE DOES HAVE A HABIT OF SPOILING THINGS, THOUGH."]
               : ["{#p/undyne}{#f/8}* I'll tell you later!!!", "<18>{#p/papyrus}{#f/6}I KNOW!!!"]
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
                  "{#p/undyne}{#f/1}* What do I think?\n* Well...",
                  "{#p/undyne}{#f/14}* The ice cream machine makes REALLY good ice cream.",
                  "<18>{#p/papyrus}{#f/4}... THAT'S IT?",
                  "{#p/undyne}{#f/20}* I guess it IS cool how Alphys can track the human like that...",
                  "<18>{#p/papyrus}{#f/0}OH, YEAH!\nSHE CAN TRACK OTHER PEOPLE, TOO!",
                  "{#p/undyne}{#f/13}* ...",
                  "{#p/undyne}{#f/7}* AM I BEING TRACKED RIGHT NOW???"
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
                  "{#p/undyne}{#f/7}* I am GOING to kill her.",
                  "<18>{#p/papyrus}{#f/5}BUT YOU DON'T EVEN KNOW IF SHE TRACKED YOU YET!",
                  "{#p/undyne}{#f/8}* ... and you think she WOULDN'T do that!?",
                  "<18>{#p/papyrus}{#f/6}I DON'T KNOW!!",
                  "{#p/undyne}{#f/14}* Don't worry, I'm not LITERALLY going to kill her.",
                  "{#p/undyne}{#f/17}* Just metaphorically.",
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
                        "{#p/undyne}{#f/17}* Are they seriously still holding a cup?",
                        "{#p/undyne}{#f/8}* You've gotta be KIDDING me!!",
                        "<18>{#p/papyrus}{#f/4}JUST BE GLAD THEY'RE NOT DRINKING IT.",
                        "{#p/undyne}{#f/16}* Yeah, that might be kinda bad for them.",
                        "{#p/undyne}{#f/14}* It's harmless for monsters, though!"
                     ])
               ]
               : [
                  "<18>{#p/papyrus}{#f/0}THERE'S THIS ODD MACHINE IN THE LAB...",
                  "<18>{#p/papyrus}{#f/0}I HEARD ALPHYS USES IT TO MAKE ICE CREAM.",
                  "<18>{#p/papyrus}{#f/4}... WHICH SHE NO DOUBT EATS BINGING SCI-FI ANIME.",
                  ...(solo()
                     ? []
                     : [
                        "{#p/undyne}{#f/17}* What??\n* She hasn't invited ME to any TV marathons...",
                        "<18>{#p/papyrus}{#f/4}HMM...",
                        "<18>{#p/papyrus}{#f/0}OH, I KNOW!",
                        "<18>{#p/papyrus}{#f/9}YOU JUST HAVE TO \"BREAK THE ICE CREAM!\" WITH HER!",
                        "{#p/undyne}{#f/13}* ... what?",
                        "<18>{#p/papyrus}{#f/0}BREAK THE ICE CREAM!",
                        "{#p/undyne}{#f/14}* That's so bad, I kind of love it."
                     ])
               ],
         () => [
            "<18>{#p/papyrus}{#f/0}SPEAKING OF FOOD AND DRINK...",
            "<18>{#f/0}I HEARD METTATON ONCE WANTED TO OPEN A FOOD SHOP.",
            "<18>{#f/4}THE FEATURED ITEM WAS CALLED \"NEO ENERGY.\"",
            ...(solo()
               ? ["<18>{#p/papyrus}{#f/5}I DON'T KNOW WHAT IT MEANS."]
               : [
                  "{#p/undyne}{#f/12}* Sounds like some cheap knockoff brand.",
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
                  "{#p/undyne}{#f/8}* If they're not coming out, just shake the entire box!",
                  "<18>{#p/papyrus}{#f/0}I'D RATHER FIX THE MACHINE PROPERLY, THANK YOU.",
                  "{#p/undyne}{#f/1}* Shaking usually works just fine.\n* It's my go-to fix.",
                  "<18>{#p/papyrus}{#f/4}MAYBE YOU COULD TRY SHAKING UP MY CAREER, THEN.",
                  "{#p/undyne}{#f/14}* Nah, that's fine just the way it is."
               ])
         ],
         () =>
            solo()
               ? ["<18>{#p/papyrus}{#f/0}MAYBE I'LL SETTLE FOR THE RED SODA ON THE TABLE."]
               : [
                  "{#p/undyne}{#f/1}* In addition to shaking...",
                  "{#p/undyne}{#f/14}* That super-strong heat tape is my OTHER go-to fix.",
                  "<18>{#p/papyrus}{#f/0}OH YEAH, THAT STUFF CAN FIX ANYTHING.",
                  "<18>{#p/papyrus}{#f/4}... WELL, ALMOST ANYTHING.",
                  "{#p/undyne}{#f/7}* It's FINE just the WAY IT IS!!"
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
                  "{#p/undyne}{#f/7}* \"Fun\" isn't exactly the word I'd use.",
                  "<18>{#p/papyrus}{#f/5}CAN YOU REALLY BLAME A SKELETON SUCH AS MYSELF...",
                  "<18>{#p/papyrus}{#f/6}FOR WANTING TO RUN A WORLD-FAMOUS RESTAURANT??",
                  "{#p/undyne}{#f/17}* That kind of thing can be stressful, Papyrus.",
                  "<18>{#p/papyrus}{#f/4}SAYS THE CAPTAIN OF THE ROYAL GUARD.",
                  "{#p/undyne}{#f/14}* Captaining the Royal Guard is one thing.",
                  "{#p/undyne}{#f/7}* Running a restaurant is something else ENTIRELY!"
               ])
         ],
         () => [
            "<18>{#p/papyrus}{#f/0}OH YEAH, ABOUT THE RESTAURANT...",
            "<18>{#p/papyrus}{#f/9}IT HAPPENS TO BE A GIANT SPACESHIP!",
            "<18>{#p/papyrus}{#f/4}POWERED BY MARINARA SAUCE.",
            ...(solo() ? [] : ["{#p/undyne}{#f/14}* ... that checks out."])
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
                  "{#p/undyne}{#f/17}* You know they could've just made more of it, right?",
                  "{#p/undyne}{#f/7}* The REAL reason they quit is because Mettaton took over!!",
                  "<18>{#p/papyrus}{#f/0}YOU SAY THAT LIKE IT'S A BAD THING.",
                  "{#p/undyne}{#f/17}* ...",
                  "{#p/undyne}{#f/17}* He CAN be a bit overbearing at times.",
                  "<18>{#p/papyrus}{#f/0}OH, I KNOW.\nTHAT'S WHY I DON'T BLAME THEM.",
                  "<18>{#p/papyrus}{#f/4}FEW CAN WITHSTAND HIS OVERPOWERING BEAUTY.",
                  "{#p/undyne}{#f/12}* ... not what I meant, but okay."
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
                  "{#p/undyne}{#f/1}* I wonder if there's some gizmo that could fix this.",
                  "<18>{#p/papyrus}{#f/0}LIKE... A BEAUTY COMPENSATION FILTER!?",
                  "{#p/undyne}{#f/18}* I was thinking more along the lines of his EGO.",
                  "{#p/undyne}{#f/17}* An \"ego compensation filter\" if you will.",
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
                  "{#p/undyne}{#f/4}* Hey, Alphys never gives ME liftgate passes!",
                  "<18>{#p/papyrus}{#f/0}MAYBE NEXT TIME YOU SHOULD ASK HER FOR ONE!",
                  "{#p/undyne}{#f/3}* ...",
                  "<18>{#p/papyrus}{#f/6}...",
                  "{#p/undyne}{#f/11}* ...",
                  "{#p/undyne}{#f/8}* Like hell I will!",
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
                  "{#p/undyne}{#f/8}* OH MY GOD PLEASE!!",
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
                  "{#p/undyne}{#f/8}* I quit school when I was only ten years old!!",
                  "<18>{#p/papyrus}{#f/1}WHAT!?!?",
                  "<18>{#p/papyrus}{#f/6}HOW COULD YOU BETRAY THE SYSTEM SO COMPLETELY!",
                  "{#p/undyne}{#f/1}* Not everyone walks the same path in life, Papyrus.",
                  "{#p/undyne}{#f/1}* After I quit school, ASGORE became my teacher.",
                  "{#p/undyne}{#f/14}* He was the best one I ever had.",
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
                  "{#p/undyne}{#f/12}* Actually, you're not too far off...",
                  "{#f/1}* They struggled for AGES trying to memorize the area's layout.",
                  "<18>{#p/papyrus}{#f/0}BUT THEY DID IT EVENTUALLY, RIGHT?",
                  "{#p/undyne}{#f/16}* Well... after the hundredth failed memorization attempt...",
                  "{#f/17}* I gave up and added a navigation module to their helmets.",
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
                  "{#p/undyne}{#f/1}* Sounds like Bratty and Catty's place.",
                  "{#p/undyne}{#f/14}* They love space tuna even more than they love selling junk!",
                  "{#p/undyne}{#f/17}* And they REALLY love selling junk!!",
                  "<18>{#p/papyrus}{#f/0}WOWIE!",
                  "<18>{#p/papyrus}{#f/5}DO THEY SELL ANY NON-JUNK, BY CHANCE...?",
                  "{#p/undyne}{#f/8}* Why WOULD they!?"
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
                  "{#p/undyne}{#f/14}* A quiz show, huh?",
                  "<18>{#p/papyrus}{#f/9}... REPLETE WITH TRIVIA QUESTIONS GALORE!!",
                  "{#p/undyne}{#f/1}* Okay, here's a question for you.",
                  "{#p/undyne}{#f/12}* Precisely how many boots would it take...",
                  "{#p/undyne}{#f/7}* To kick that robot's BUTT into space!!",
                  "<18>{#p/papyrus}{#f/6}UH...",
                  "<18>{#p/papyrus}{#f/5}... WELL, UM...",
                  "<18>{#p/papyrus}{#f/4}ACTUALLY, THAT DEPENDS ON THE GRAVITY.",
                  "{#p/undyne}{#f/8}* Papyrus!!"
               ])
         ],
         () =>
            solo()
               ? ["<18>{#p/papyrus}{#f/4}IT -HAS- BEEN A WHILE SINCE HE'S DONE ONE."]
               : [
                  "{#p/undyne}{#f/1}* I've got another trivia question if you'd like to hear it.",
                  "<18>{#p/papyrus}{#f/5}... MAYBE LATER.",
                  "<18>{#p/papyrus}{#f/4}BESIDES, WE ALREADY KNOW WHERE IT'S GOING...",
                  "{#p/undyne}{#f/7}* YEAH!!\n* Into SPACE!!"
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
                  "{#p/undyne}{#f/1}* Yeah?\n* Well whenever I try solving these things...",
                  "{#p/undyne}{#f/17}* The whole thing just goes crazy!!",
                  "<18>{#p/papyrus}{#f/6}DIDN'T ALPHYS EVER PULL YOU BACK TO SAFETY??",
                  "{#p/undyne}{#f/12}* Well... I...",
                  "<18>{#p/papyrus}{#f/6}UNDYNE, WHAT DID YOU DO!?!?",
                  "{#p/undyne}{#f/12}* ...",
                  "{#p/undyne}{#f/12}* Nothin.'",
                  "{#p/undyne}{#f/12}* Apart from almost erasing myself from existence, that is.",
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
                  "{#p/undyne}{#f/14}* What about \"howevers?\"",
                  "<18>{#p/papyrus}{#f/4}...",
                  "<18>{#p/papyrus}{#f/4}THAT'S JUST ANOTHER WAY OF SAYING \"BUT.\"",
                  "{#p/undyne}{#f/17}* ... right.",
                  "{#p/undyne}{#f/14}* And what about \"unlesses?\"",
                  "<18>{#p/papyrus}{#f/4}WE ALREADY RULED OUT ANDS.",
                  "{|}{#p/undyne}{#f/8}* But I wasn't talking about the- {%}",
                  "<18>{#p/papyrus}{#f/6}NO BUTS!!!",
                  "{|}{#p/undyne}{#f/7}* If you would just let me- {%}",
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
                  "{#p/undyne}{#f/12}* I heard Mettaton shuts them off to run his shows.",
                  "<18>{#p/papyrus}{#f/4}HE... HE DOES?",
                  "{#p/undyne}{#f/17}* As far as I know!",
                  "<18>{#p/papyrus}{#f/7}... THE -NERVE- OF THAT ROBOTICAL RECTANGLE!",
                  "<18>{#p/papyrus}{#f/7}I INTEND TO HAVE A WORD WITH HIM NOW!",
                  "{#p/undyne}{#f/7}* And tell him to cancel those STUPID shows while you're at it!"
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
                  "{#p/undyne}{#f/13}* Blues?\n* Seriously?",
                  "{#p/undyne}{#f/14}* Everyone knows rock 'n' roll is the BEST.",
                  "<18>{#p/papyrus}{#f/4}WHAT!?\nROCK AND ROLL IS WEIRD...",
                  "<18>{#p/papyrus}{#f/9}IF YOU NEED HEAVY GUITARS, METAL IS WHERE IT'S AT!!",
                  "{#p/undyne}{#f/8}* You listen to METAL!?",
                  "{#p/undyne}{#f/4}* No, no, you need to listen to DUBSTEP.",
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
                  "{#p/undyne}{#f/14}* So... exactly the same as what's on the first floor, then.",
                  "<18>{#p/papyrus}{#f/6}I GUESS SO???",
                  "{#p/undyne}{#f/1}* I mean, hey.\n* At least the second floor is bigger.",
                  "<18>{#p/papyrus}{#f/4}OH, GREAT.\nI CAN GET EVEN -MORE- LOST, NOW.",
                  "{#p/undyne}{#f/17}* At least the second floor has more cool stuff to look at!!",
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
                  "{#p/undyne}{#f/17}* ...",
                  "{#p/undyne}{#f/17}* The WHAT?",
                  "<18>{#p/papyrus}{#f/0}THE SPACE MAFIA.",
                  "<18>{#f/4}YOU KNOW, THE ONES IN THE VIRTUALASIUM.",
                  "{#p/undyne}{#f/12}* Oh, THAT space mafia."
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
                  "{#p/undyne}{#f/1}* You think this \"space mafia\" takes a cut of Sans's corn dog sales?",
                  "<18>{#p/papyrus}{#f/0}WOW! THAT'S A GREAT QUESTION!",
                  "{#p/undyne}{#f/14}* Really?",
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
                  "{#p/undyne}{#f/8}* You think that's strange?\n* Ha!",
                  "{#p/undyne}{#f/7}* Just wait until you hear about the message I GOT the other day!",
                  "<18>{#p/papyrus}{#f/4}WAS IT ABOUT MOLE-RATS?",
                  "{#p/undyne}{#f/14}* No.",
                  "<18>{#p/papyrus}{#f/4}DID IT INVOLVE A \"MONEY-MAKING OPPORTUNITY?\"",
                  "{#p/undyne}{#f/14}* No.",
                  "<18>{#p/papyrus}{#f/6}DID IT PROMISE A WAY OFF THE OUTPOST??",
                  "{#p/undyne}{#f/14}* ... actually, yes.\n* And that's when I blocked them.",
                  "{#p/undyne}{#f/7}* NOBODY makes false promises of freedom and gets away with it!",
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
                  "{#p/undyne}{#f/17}* Oh yeah??\n* And who would I be?",
                  "<18>{#p/papyrus}{#f/0}RIGHT, I ALREADY CAME UP WITH ONE FOR YOU.",
                  "<18>{#p/papyrus}{#f/4}YOU'D BE THE \"CSETPO.\"",
                  "{#p/undyne}{#f/14}* ... and what does that ludicrous acronym stand for?",
                  "<18>{#p/papyrus}{#f/9}THE \"CHIEF SMASH- EVERYTHING-TO- PIECES OFFICER!\"",
                  "{#p/undyne}{#f/8}* I LOVE IT!!!"
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
                  "{#p/undyne}{#f/17}* Jeez.\n* Why even BOTHER.",
                  "<18>{#p/papyrus}{#f/6}BECAUSE!!",
                  "<18>{#p/papyrus}{#f/6}SOLVING PUZZLES IS SUPPOSED TO BE FUN!!",
                  "{#p/undyne}{#f/12}* Couldn't you just use flight magic to get around it?",
                  "<18>{#p/papyrus}{#f/4}FLIGHT MAGIC IS RESERVED FOR EMERGENCIES.",
                  "{#p/undyne}{#f/1}* That depends on your definition of an \"emergency.\"",
                  "<18>{#p/papyrus}{#f/7}AND PUZZLES FALL WELL OUTSIDE OF THAT DEFINITION!",
                  "{#p/undyne}{#f/14}* Guess you'll have to suffer, then.",
                  "<18>{#p/papyrus}{#f/7}I GUESS I WILL!!!"
               ])
         ],
         () =>
            solo()
               ? ["<18>{#p/papyrus}{#f/6}NUMBERS, NUMBERS EVERYWHERE!!", "<18>{#f/6}WHAT DOES IT ALL MEAN!?!?"]
               : [
                  "<18>{#p/papyrus}{#f/5}FLYING AROUND EVERYWHERE JUST WOULDN'T BE FAIR.",
                  "{#p/undyne}{#f/11}* And you like to make life hard on yourself because...?",
                  "<18>{#p/papyrus}{#f/9}BECAUSE NOTHING IS AS REWARDING AS HARD WORK!",
                  "{#p/undyne}{#f/17}* ... that depends on your definition of \"work.\""
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
                  "{#p/undyne}{#f/12}* ... you really like him, don't you?",
                  "<18>{#p/papyrus}{#f/4}WELL, HE -IS- QUITE ATTRACTIVE...",
                  "<18>{#p/papyrus}{#f/6}... BUT I HAVEN'T COMMITTED TO ANYTHING YET!",
                  "{#p/undyne}{#f/3}* That won't last long.",
                  "<18>{#p/papyrus}{#f/4}HUH?\nDID YOU JUST ASSUME...",
                  "<18>{#p/papyrus}{#f/7}... OUR RELATIONSHIP STATUS!?!?",
                  "{#p/undyne}{#f/14}* Oh, no, of course not.",
                  "{#p/undyne}{#f/17}* It's just so obvious that I couldn't help but state the facts.",
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
               : ["{#p/undyne}{#f/12}* Papyrus is too busy daydreaming to pick up the phone right now."]
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
                  "{#p/undyne}{#f/16}* Tell me about it...",
                  "<18>{#p/papyrus}{#f/5}HUH?\nDO THEY IGNORE YOUR MEMOS OFTEN?",
                  "{#p/undyne}{#f/14}* Oh, they follow mine just fine.",
                  "{#p/undyne}{#f/10}* It's Alphys's memos they tend to ignore.",
                  "<18>{#p/papyrus}{#f/6}BUT SHE'S THE ROYAL SCIENTIST!",
                  "<18>{#p/papyrus}{#f/6}THE KING'S MOST TRUSTED ASSOCIATE!",
                  "{#p/undyne}{#f/12}* Yeah... that's how things are supposed to work.",
                  "{#f/16}* But after Professor Roman died, we weren't ready to replace him.",
                  "{#f/10}* Most in the Royal Guard don't take his successor seriously, so...",
                  "{#f/9}* That impacts how the trainees see her, too.",
                  "<18>{#p/papyrus}{#f/5}OH...",
                  "{#p/undyne}{#f/17}* I know.\n* It's... not great.",
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
                  "{#p/undyne}{#f/12}* Then he destroyed it just so he could do it all himself.",
                  "<18>{#p/papyrus}{#f/6}HE DID??",
                  "{#p/undyne}{#f/1}* The first one wasn't up to his \"high standards.\"",
                  "<18>{#p/papyrus}{#f/4}WAIT, THERE WAS SOMETHING ABOUT THAT ON TV.",
                  "{#p/undyne}{#f/14}* Oh yeah, he decided to broadcast it to the entire outpost.",
                  "{#p/undyne}{#f/17}* He had to SHOW everyone that he knew better than them.",
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
                  "{#p/undyne}{#f/14}* They're probably near the old security tower in Aerialis.",
                  "{#p/undyne}{#f/17}* There's something about the kind of metal they used to use there."
               ])
         ],
         () =>
            solo()
               ? ["<18>{#p/papyrus}{#f/4}DID MY MESSAGE NOT GET THROUGH THE FIRST TIME?"]
               : ["{#p/undyne}{#f/14}* I wouldn't worry about a thing."]
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
                  "{#p/undyne}{#f/17}* So do you LIKE using elevators or NOT?",
                  "<18>{#p/papyrus}{#f/6}WELL...",
                  "<18>{#p/papyrus}{#f/5}I LIKE THE MUSIC, BUT HAVING TO USE THEM IS A PAIN.",
                  "<18>{#p/papyrus}{#f/4}I DO ACKNOWLEDGE THEIR NECESSITY, THOUGH.",
                  "{#p/undyne}{#f/1}* Well, just be glad you don't live in a spire house, then.",
                  "<18>{#p/papyrus}{#f/5}HOW COME?",
                  "{#p/undyne}{#f/17}* Elevators EVERYWHERE.",
                  "<18>{#p/papyrus}{#f/6}N-NO...!",
                  "{#p/undyne}{#f/7}* And they're not even NECESSARY.",
                  "<18>{#p/papyrus}{#f/8}IT CAN'T BE...!",
                  "{#p/undyne}{#f/8}* AND THEY DON'T EVEN HAVE MUSIC!!!",
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
                  "{#p/undyne}{#f/1}* Sounds like quite the story you've got there.",
                  "<18>{#p/papyrus}{#f/4}OH, IT WAS QUITE A STORY, ALRIGHT...",
                  "<18>{#p/papyrus}{#f/5}JUST NOT A VERY GOOD ONE.",
                  "{#p/undyne}{#f/14}* Could it be summed up as \"I had no idea what I was doing?\"",
                  "<18>{#p/papyrus}{#f/7}HEY, I -ALWAYS- KNOW WHAT I'M DOING!",
                  "<18>{#p/papyrus}{#f/5}IT'S MORE OF AN \"I WAS POWERLESS TO STOP IT\" SCENARIO.",
                  "{#p/undyne}{#f/17}* Wait, if you were electrocuted by the security field...",
                  "{#p/undyne}{#f/17}* Wouldn't that make you the OPPOSITE of powerless?",
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
                  "{#p/undyne}{#f/1}* To be honest, I'm kind of surprised he stopped doing it.",
                  "{#p/undyne}{#f/16}* But I guess he just really wanted to be a sentry or something.",
                  "<18>{#p/papyrus}{#f/5}YEAH.\nTHAT MUST BE IT.",
                  "<18>{#f/4}THERE DEFINITELY ISN'T ANYTHING ELSE GOING ON.",
                  "{#p/undyne}{#f/14}* ... what?"
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
                  "{#p/undyne}{#f/14}* I think they're just protective about the trash they collect.",
                  "{#p/undyne}{#f/16}* Alphys told me how she used to go trash- hunting with them...",
                  "{#p/undyne}{#f/9}* It's more than just some wacky hobby.\n* It's a way of LIFE.",
                  "<18>{#p/papyrus}{#f/0}THAT SEEMS KIND OF FUN, HONESTLY.",
                  "{#p/undyne}{#f/1}* Plus, all the coolest trinkets get found by people like them.",
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
                  "{#p/undyne}{#f/1}* The \"ring room,\" huh?",
                  "<26>{#p/undyne}{#f/14}* If I didn't know any better, I'd say you were a poet!",
                  "<18>{#p/papyrus}{#f/6}... ME, A POET!?",
                  "<18>{#p/papyrus}{#f/5}SOMEHOW I DOUBT THAT'D BE A GREAT USE OF MY TIME.",
                  "{#p/undyne}{#f/17}* You're kidding, right?\n* You're a NATURAL.",
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
                  "{#p/undyne}{#f/14}* You know, that reminds me...",
                  "{#p/undyne}{#f/1}* I once wanted the Royal Guard to have a culinary division.",
                  "{#p/undyne}{#f/16}* We'd have gourmet restaurants, exquisite food...",
                  "{#p/undyne}{#f/17}* ... and then, Asgore tasted my cooking.",
                  "<18>{#p/papyrus}{#f/4}HMM...",
                  "<18>{#p/papyrus}{#f/9}MAYBE YOU JUST DIDN'T ADD ENOUGH MARINARA SAUCE!",
                  "{#p/undyne}{#f/3}* No amount of marinara sauce could fix THAT atrocity."
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
                  "{#p/undyne}{#f/1}* So, kind of like a box of tree saps, then.",
                  "<18>{#p/papyrus}{#f/0}YEAH, KIND OF LIKE THAT!",
                  "<18>{#p/papyrus}{#f/4}WAIT, ISN'T IT SUPPOSED TO BE A BOX OF CHOCOLATES?",
                  "{#p/undyne}{#f/14}* That would be the human expression."
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
                  "{#p/undyne}{#f/17}* You didn't tell me you were planning a PRISON break!",
                  "<18>{#p/papyrus}{#f/5}DON'T WORRY, IT'S JUST AN ALLEGORY FOR FREEDOM.",
                  "<18>{#p/papyrus}{#f/4}A -REAL- PRISON BREAK WOULD BE FAR TOO SUSPICIOUS.",
                  "{#p/undyne}{#f/16}* Yeah, yeah...",
                  "<18>{#p/papyrus}{#f/5}BESIDES, IF I WANTED TO DO ONE PROPERLY...",
                  "<18>{#p/papyrus}{#f/6}I'D HAVE TO PLAN ALL THE EMERGENCY MEETINGS!",
                  "{#p/undyne}{#f/12}* Sheesh, that'd be quite the task."
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
                  "{#p/undyne}{#f/1}* Speaking of nearby...",
                  "{#p/undyne}{#f/8}* We're RIGHT in the next room over!!",
                  "<18>{#p/papyrus}{#f/9}CORRECT!!\nRIGHT DOWN HERE!!",
                  "{#p/undyne}{#f/17}* Over, not down.",
                  "<18>{#p/papyrus}{#f/6}... IT'S DOWN ON THE FLOOR PLAN!!",
                  "{#p/undyne}{#f/14}* I doubt the human even knows what that looks like."
               ])
         ],
         () =>
            solo()
               ? ["<18>{#p/papyrus}{#f/0}ISN'T TECHNOLOGY WONDERFUL?"]
               : [
                  "<18>{#p/papyrus}{#f/6}WHAT ARE YOU WAITING FOR!!!\nCOME ON DOWN!!",
                  "{#p/undyne}{#f/7}* He means OVER!!"
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
                  "{#p/undyne}{#f/12}* That's definitely one way of putting it.",
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
                  "{#p/undyne}{#f/14}* I don't think you'd enjoy it, Papyrus.",
                  "{#p/undyne}{#f/17}* It's not your style.",
                  "<18>{#p/papyrus}{#f/5}YEAH, YOU'RE PROBABLY RIGHT.",
                  "{#p/undyne}{#f/14}* Of course I am.",
                  "<18>{#p/papyrus}{#f/9}STILL, IT NEVER HURTS TO TRY!!",
                  "{#p/undyne}{#f/17}* ..."
               ])
         ],
         () => [
            "<18>{#p/papyrus}{#f/0}BETTER NOT DO IT IN THE REC CENTER, THOUGH.",
            "<18>{#p/papyrus}{#f/4}TALK ABOUT BEING A NUSIANCE.",
            ...(solo() ? [] : ["{#p/undyne}{#f/12}* Pfft, yeah..."])
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
               : ["{#p/undyne}{#f/8}* Wanna talk?\n* We're right here, punk!"],
         () =>
            solo()
               ? [
                  "<18>{#p/papyrus}{#f/4}MAYBE, AFTER WE HANG OUT WITH HER...",
                  "<18>{#p/papyrus}{#f/0}WE COULD ALL COME HERE TOGETHER!"
               ]
               : ["{#p/undyne}{#f/8}* Wanna talk?\n* We're right here, punk!"]
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
                  "{#p/undyne}{#f/17}* Right, because YOU just stay awake all the time.",
                  "<18>{#p/papyrus}{#f/0}EXACTLY!\nI CAN'T WASTE MY TIME NAPPING.",
                  "{#p/undyne}{#f/14}* What about sleeping?",
                  "<18>{#p/papyrus}{#f/6}SLEEPING???",
                  "<18>{#p/papyrus}{#f/4}... THAT'S JUST AN EXCUSE MY BROTHER USES TO TAKE NAPS.",
                  "{#p/undyne}{#f/17}* Obviously!!"
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
                  "{#p/undyne}{#f/14}* It's not like we're going anywhere.",
                  "<18>{#p/papyrus}{#f/6}NOT AT ALL!!",
                  "<18>{#p/papyrus}{#f/5}THOUGH, AT SOME POINT, WE WILL INEVITABLY LEAVE.",
                  "{#p/undyne}{#f/16}* I mean, that's true, but...",
                  "{#p/undyne}{#f/17}* This is no time to be worrying about that!",
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
                  ? ["{#p/human}* (Missing skeletons fill you with determination.)"]
                  : ["{#p/human}* (The skeleton brothers' antics fill you with determination.)"]
               : papreal() || world.runaway
                  ? ["{#p/human}* (The box is so lonely, it fills you with determination anyway.)"]
                  : ["{#p/human}* (The box can rest easy now.)\n* (This, of course, fills you with determination.)"]
      },
      s_pacing: {
         name: "星港 - 月岩小路",
         text: () =>
            papreal() || world.runaway
               ? SAVE.data.n.plot < 29
                  ? ["{#p/human}* (The starlight dims.)\n* (Somehow, this fills you with determination.)"]
                  : ["{#p/human}* (The starlight has faded.)\n* (Indeed, this fills you with determination.)"]
               : SAVE.data.b.svr
                  ? [
                     "{#p/human}* (The frivolous arguments once had in this room have ceased.)",
                     "* (This fills you with determination.)"
                  ]
                  : world.population > 5
                     ? [
                        "{#p/human}* (Moon rock merchants argue frivolously in the foreground.)",
                        "* (This fills you with determination.)"
                     ]
                     : ["{#p/human}* (The starlight remains dim.)\n* (Somehow, this fills you with determination.)"]
      },
      s_spaghetti: {
         name: "星港 - 意面枢纽",
         text: () =>
            [
               ["{#p/human}* (A plate of spaghetti defying the laws of physics fills you with determination.)"],
               [
                  "{#p/human}* (The spaghetti no longer defies the laws of physics.)",
                  "{#p/human}* (This fills you with determination.)"
               ],
               ["{#p/human}* (The spaghetti is no more.)", "{#p/human}* (This fills you with determination.)"]
            ][SAVE.data.n.state_starton_spaghetti]
      },
      s_town1: {
         name: "星港 - 小镇",
         text: () =>
            SAVE.data.b.svr
               ? [
                  "{#p/human}* (The town may be abandoned, but its cuteness remains.)",
                  "{#p/human}* (This fills you with determination.)"
               ]
               : papreal() || world.runaway
                  ? ["{#p/human}* (A shadow looms over town, filling you with determination.)"]
                  : ["{#p/human}* (This cute little town fills you with determination.)"]
      }
   }
};


// END-TRANSLATE
