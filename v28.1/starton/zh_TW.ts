import { asrielinter } from '../../code/common';
import { blookGone, dateready, papreal, roomready, solo } from '../../code/starton/extras';
import { game, renderer } from '../../code/systems/core';
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
} from '../../code/systems/framework';
import { SAVE } from '../../code/systems/save';
import { CosmosKeyed, CosmosProvider, CosmosUtils } from '../../code/systems/storyteller';

// START-TRANSLATE

export default {
   a_starton: {
      telescope1: () => [
         ...(SAVE.data.b.svr ? [] : [ "<32>{#p/basic}* 標準規格的長焦望遠鏡，皇家出品。\n* 251X年前後製成。" ]),
         choicer.create("* （使用望遠鏡？）", "是", "否")
      ],
      telescopeMeetup1: [ "<25>{#p/kidd}{#f/2}* 你在看星星嗎？" ],
      telescopeMeetup2: [
         "<25>{#p/kidd}{#f/1}* 喲... 我打賭\n  你肯定看到了很酷的東西。",
         "<25>{#f/7}* 上次我用望遠鏡的時候，\n  我甚至看到了一顆超新星！"
      ],
      telescopeMeetup3: [
         "<25>{#p/kidd}{#f/3}* 給。\n* 拿上這個。",
         "<32>{#s/equip}{#p/human}* （高級會員券\n  被添加到了你的鑰匙圈。）",
         "<25>{#p/kidd}{#f/7}* 現在你可以使用任何望遠鏡了，\n  連“最高級”的都能用！",
         "<25>{#f/1}* 那個矮骷髏之前給了我好多這個。",
         "<25>{#f/2}* 他甚至花了很多錢\n  送了我一些數字藏品...",
         "<25>{#f/1}* 我猜他真的很喜歡我，哈哈。"
      ],
      telescopeMeetup4: [
         "<25>{#p/kidd}{#f/3}* 總之，我剛才給了你一張票券。",
         "<25>{#f/1}* 希望你能看到更酷的東西！"
      ],
      telescopeMeetup5: [ "<25>{#p/kidd}{#f/1}* 我要回鎮上了！" ],
      telescope2: () =>
         SAVE.data.b.svr
            ? [ "<25>{#p/asriel1}{#f/17}* 看到什麼喜歡的東西了嗎？" ]
            : world.darker
            ? [ "<32>{#p/basic}* 一架望遠鏡。" ]
            : SAVE.data.b.oops || SAVE.data.b.s_state_chargazer
            ? [ "<32>{#p/basic}* Stargazing in space...\n* Truly, this is some outside- the-box thinking." ]
            : ((SAVE.data.b.s_state_chargazer = true),
              [
                 "<32>{#p/basic}* ...",
                 "<32>* 以前，我和Asriel就有一架\n  這樣的望遠鏡。",
                 "<32>* 我們把鏡筒對著\n  天空的各個角落，\n  期待能發現意想不到的驚喜...",
                 "<32>* ...可惜，希望總是落空。",
                 "<32>* 儘管觀星收穫寥寥，\n  但Asriel並不在意...",
                 "<32>* 我挖空心思從星空尋找寶藏。\n  但對他而言...\n  我的陪伴才是真正的“寶藏”。",
                 "<32>* ...",
                 "<32>{#p/human}* （你聽到一聲嘆息。）",
                 "<32>{#p/basic}* ...唉，別在意。\n  咱們繼續幹正事吧。"
              ]),
      notv: [ "<32>{#p/basic}* 沒什麼好看的。" ],
      nicecreamScoreReaction1a: [ "<32>{#p/basic}* 第一次嘗試還不錯..." ],
      nicecreamScoreReaction1b: [ "<32>{#p/basic}* 第一次嘗試還不錯。" ],
      nicecreamScoreReaction2a: [ "<32>{#p/basic}* 你可以做得更好的。" ],
      nicecreamScoreReaction2b: [ "<32>{#p/basic}* 你可以做得更好的。" ],
      nicecreamScoreReaction3a: [
         "<32>{#p/basic}* 你打破了紀錄...？\n* 我還從來沒見過有人這麼做..."
      ],
      nicecreamScoreReaction3b: [
         "<32>{#p/basic}* 你打破了紀錄...？\n* 我還從來沒見過有人這麼做！"
      ],
      nicecreamScoreReaction4a: [ "<33>{#p/basic}* 看起來你真的很擅長..." ],
      nicecreamScoreReaction4b: [ "<32>{#p/basic}* 看起來你真的很擅長。" ],
      nicecreamScoreReaction5a: [ "<32>{#p/basic}* 你打破了你的紀錄...？" ],
      nicecreamScoreReaction5b: [ "<32>{#p/basic}* 看，新紀錄！" ],
      nicecreamScoreReaction6a: [ "<32>{#p/basic}* 有那麼一瞬間，我以為你打破了記錄..." ],
      nicecreamScoreReaction6b: [
         "<32>{#p/basic}* 哇喔，你差點就破紀錄了！\n* 你能堅持下去嗎？"
      ],
      nicecreamScoreReaction7a: [ "<32>{#p/basic}* 看起來你需要一些練習..." ],
      nicecreamScoreReaction7b: [ "<32>{#p/basic}* 看起來你需要一些練習。" ],
      nicecreamScoreReaction8a: [ "<32>{#p/basic}* 更好了..." ],
      nicecreamScoreReaction8b: [ "<32>{#p/basic}* 這才像話。" ],
      nicecreamScoreReaction9a: [
         "<32>{#p/basic}* 你第一次嘗試就打破了紀錄...？\n* 世界上竟然..."
      ],
      nicecreamScoreReaction9b: [ "<32>{#p/basic}* 你第一次嘗試就打破了紀錄...？\n* 你真是個天才！" ],
      nicecreamScoreReaction10a: [ "<32>{#p/basic}* 就第一次嘗試來說，這已經很好了..." ],
      nicecreamScoreReaction10b: [ "<32>{#p/basic}* 就第一次嘗試來說，這已經很好了！" ],
      nicecreamScoreReaction11a: [ "<32>{#p/basic}* 就要快了..." ],
      nicecreamScoreReaction11b: [ "<32>{#p/basic}* 天哪，你幾乎快破紀錄了...\n* 你能做到的！" ],
      noteleport: [ "<32>{#p/human}* （似乎是沒電了。）" ],
      evac: [ "<32>{#p/human}* （你感覺周圍的怪物越來越少了。）" ],
      shopclosed: [ "<32>{#p/human}* （但是沒什麼可做的了。）" ],
      jukebox1: () => [
         SAVE.data.b.svr
            ? "<32>{#p/human}* （你去碰點唱機...）"
            : "<32>{#p/basic}* 點唱機只放你聽過的音樂。",
         choicer.create(
            "* （放一首音樂嗎？）",
            SAVE.data.b.napsta_performance ? "曲目01" : "？？？",
            2 <= SAVE.data.n.state_foundry_swansong ? "曲目02" : "？？？",
            2 <= SAVE.data.n.state_starton_trashprogress ? "曲目03" : "？？？",
            "取消"
         )
      ],
      jukebox1x1: () =>
         SAVE.data.b.svr
            ? [ "<32>{#p/human}* （但是你不能放你不知道的音樂。）" ]
            : [ "<32>{#p/basic}* 封面中一個詭異的DJ在人群中演奏。\n* 你看不出來是什麼音樂。" ],
      jukebox1x2: () =>
         SAVE.data.b.svr
            ? [ "<32>{#p/human}* （但是你不能放你不知道的音樂。）" ]
            : [ "<33>{#p/basic}* 封面中一個幽靈一樣的DJ在電腦前。\n* 你看不出來是什麼音樂。" ],
      jukebox1x3: () =>
         SAVE.data.b.svr
            ? [ "<32>{#p/human}* （但是你不能放你不知道的音樂。）" ]
            : [
                 "<32>{#p/basic}* 封面中是一隻被垃圾包圍著的小白狗。\n* 你看不出來是什麼音樂。"
              ],
      jukebox1y: [ "<32>{*}{#p/human}* （你選擇了一張光盤...）{^40}{%}" ],
      jukebox2: () => [
         SAVE.data.b.svr
            ? "<32>{#p/human}* （聽起來像是一首正在播放的音樂。）"
            : [
                 "<32>{#p/basic}* 現在播放的是“曲目01”",
                 "<32>{#p/basic}* 現在播放的是“曲目02”",
                 "<32>{#p/basic}* 現在播放的是“曲目03”"
              ][SAVE.data.n.state_starton_jukebox - 1],
         choicer.create("* （停止播放？）", "是", "否")
      ],
      jukebox3a1: [ "<32>{#p/basic}{#npc/a}* 這就對了！" ],
      jukebox3a2: [ "<32>{#p/basic}{#npc/a}* （我們都喜歡這種音樂。）" ],
      jukebox3b: [ "<32>{#p/basic}{#npc/a}* 這音樂在舞蹈俱樂部裡面流行嗎？" ],
      jukebox3c: [
         "<32>{#p/basic}* ...\n* ...\n* ...",
         "<32>{#npc/a}* Grillbz說他曾經在哪聽過這首歌。"
      ],
      jukebox3d: [
         "<32>{#p/basic}{#npc/a}* 你肯定很懂音樂，孩子...",
         "<32>* You must be really tasty."
      ],
      shockpapyrus0a: [
         "<15>{#p/papyrus}{#e/papyrus/17}站住！你們在幹嘛？",
         "<15>{#p/papyrus}{#e/papyrus/21}我有預感，\nSANS可能有危險，\n就過來了。",
         "<15>{#p/papyrus}{#e/papyrus/22}...結果等我來了，\n就看到你們倆？？",
         "<15>{#p/papyrus}{#e/papyrus/14}告訴你們，我可是\n皇家衛隊的預備隊員！",
         "<15>{#p/papyrus}{#e/papyrus/21}不管你倆是誰..."
      ],
      shockpapyrus0b: [
         "<15>{#p/papyrus}{#e/papyrus/24}...等等。",
         "<15>{#p/papyrus}{#e/papyrus/22}那是個人類嗎！？",
         "<15>{#p/papyrus}{#e/papyrus/20}我的天哪！\n肯定沒錯，\n就是個人類！"
      ],
      shockpapyrus0c: [
         "<15>{#p/papyrus}{#e/papyrus/20}SANS，你快來看看！",
         "<15>{#p/papyrus}{#e/papyrus/15}有個人類出現啦！\n就站在我面前呢！",
         "<15>{#p/papyrus}{#e/papyrus/27}旁邊的是...\n迷你版的ASGORE？",
         "<15>{#p/papyrus}{#e/papyrus/24}額...\n說實話我不太確定。"
      ],
      shockpapyrus1: () =>
         [
            [
               "<32>{#p/asriel2}* 準備好了嗎，$(name)？",
               choicer.create("* （Asriel應該怎麼做？）", "伶俐", "放招", "魔法", "打鬥")
            ],
            [ "<32>{#p/asriel2}* 我們速戰速決吧。" ]
         ][Math.min(SAVE.flag.n.ga_asrielPapyrus, 1)],
      shockpapyrus2a: [
         "<32>{#p/asriel2}* 仁慈，嗯？",
         "<32>{#p/asriel2}* 仁慈...？\n  這真是個好聽的詞。",
         "<32>{#p/asriel2}* 那咱們就給他來點“仁慈”吧。"
      ],
      shockpapyrus2b: [
         "<32>{#p/asriel2}* 行動...？\n* 看好了，什麼才叫行動。",
         "<32>{#p/asriel2}* 首先，舉起手臂...",
         "<32>{#p/asriel2}* 接著...！"
      ],
      shockpapyrus2c: [
         "<32>{#p/asriel2}* 魔法，\n  它可化為紐帶，\n  讓怪物們團結一心。",
         "<32>{#p/asriel2}* 不過，反過來...",
         "<33>{#p/asriel2}* 它也能成為利刃，\n  刺穿他們的肉體。"
      ],
      shockpapyrus2d: [ "<32>{#p/asriel2}* 戰鬥... 真是不二之選。", "<32>{#p/asriel2}* 嘻嘻嘻..." ],
      sansDeath1: [ "<15>{#p/papyrus}{#e/papyrus/27}SANS！\n你受傷了！" ],
      sansDeath2: [ "<20>{#p/sans}papyrus，\n我不是讓你待在家裡嗎？", "{*}{#e/papyrus/21}{%}" ],
      sansDeath3: [ "<20>{#p/sans}...別擔心，兄弟。\n這只是我最喜歡的\n番茄醬。", "{*}{#e/papyrus/26}{%}" ],
      sansDeath4: [ "<15>{#p/papyrus}{#e/papyrus/21}但你真的\n傷得很重..." ],
      sansDeath5: [
         "<20>{#p/sans}我看得見，\n剛只是隨口一說。",
         "<20>{#p/sans}...這樣的傷口，\n應該是沒辦法了。",
         "{*}{#e/papyrus/21}{%}"
      ],
      sansDeath6: [
         "<20>{#p/sans}看樣子...",
         "<20>恐怕...\n只能陪你到這了。",
         "<20>...",
         "<20>只是...",
         "<20>答應我，哪怕我不在，\n你也要好好活下去，\n兄弟。",
         "<20>答應我，你還會做\n那個最棒-{^5}棒的你。",
         "<20>...",
         "<20>畢竟..."
      ],
      sansDeath7: [ "<20>{|}{#p/sans}你可是...\n偉大的p-{^5}papyrus。" ],
      sansDeath8: [ "<15>{#p/papyrus}{#e/papyrus/33}不-不...{^40}{%}" ],
      fast_food1: () => [
         SAVE.data.b.fryz
            ? "<32>{#p/human}{#npc}* (You got the Flamin' Grillby.)"
            : "<32>{#p/human}{#npc}* (You got the Sliders.)"
      ],
      fast_food2: [ "<32>{#p/human}{#npc}* (You're carrying too much.)" ],
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
                    "<25>{#f/2}* you're about to {@fill:#003cff}find out{@fill:#fff}."
                 ]
               : [ "<25>{#p/sans}{#f/0}* 歡迎回來。", "<25>{#f/2}* ready to find out what awaits you?" ],
         () =>
            SAVE.data.n.state_starton_trashprogress < 1
               ? [ "<25>{#p/sans}{#f/0}* go on, take a look.", "<25>{#f/2}* it's right up there, bucko." ]
               : [ "<25>{#p/sans}{#f/2}* it's right up there, bucko." ],
         () =>
            SAVE.data.n.state_starton_trashprogress < 2
               ? [ "<25>{#p/sans}{#f/2}* don't worry, it's not dangerous... even if it tries to be." ]
               : [ "<25>{#p/sans}{#f/2}* thanks for the help." ]
      ),
      trashhunt1: [
         "<25>{#p/sans}{#f/0}* sooo... whaddya think?",
         "<25>{#f/3}* i call it the \"trash planet.\"",
         "<25>{#f/0}* ... actually, this thing's been growing in size for quite a while.",
         "<25>{#f/0}* if it gets any larger, well...",
         "<25>{#f/2}* let's just say we'd be in a {@fill:#ff0}world{@fill:#fff} of trouble.",
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
            ? [ "<32>{#s/equip}{#p/human}* (You got the Corn Dog Sword.)", "<25>{#p/sans}{#f/2}* use it wisely." ]
            : [
                 "<32>{#p/human}* （你帶的東西太多了。）",
                 "<25>{#p/sans}{#f/3}* no room, huh?",
                 "<25>{#p/sans}{#f/2}* don't worry.\n* i'll leave it in my room for you."
              ])
      ],
      gravo1: () =>
         SAVE.data.b.svr
            ? [
                 "<32>{#p/human}* (You look curiously at the seemingly useless device.)",
                 ...[ [ "<25>{#p/asriel1}{#f/17}* Too bad we don't have the remote for this thing, huh?" ], [] ][
                    Math.min(asrielinter.gravo1++, 1)
                 ]
              ]
            : [ "<32>{#p/basic}* It's a \"gravometric inverter.\"", "<32>* Whatever that means." ],
      gravo3: () => [
         "<32>{#p/human}* (You use the Gravometric Inverter Remote.)\n* (Nothing happens.)",
         ...(SAVE.data.b.svr
            ? [ [ "<25>{#p/asriel1}{#f/21}* They're probably shutting off power for non-essential devices." ], [] ][
                 Math.min(asrielinter.gravo3++, 1)
              ]
            : [ "<32>{#p/basic}* It must be offline..." ])
      ],
      gravo2: [ "<32>{#p/human}* (You use the Gravometric Inverter Remote.)" ],
      sansdoor1: () =>
         SAVE.data.b.svr || world.runaway
            ? [ "<32>{#p/human}* (It looks to have been closed with a deadlock seal.)" ]
            : [ "<32>{#p/basic}* 鎖住了。" ],
      sansdoor2: [ "<32>{#p/human}* (You use the Skeleton Key.)" ],
      sanscab1: () => [
         ...(SAVE.data.b.svr ? [] : [ "<32>{#p/basic}* There's an odd remote inside of this envelope." ]),
         "<32>{#s/equip}{#p/human}* (The Gravometric Inverter Remote was added to your keyring.)"
      ],
      sanscab2: () =>
         SAVE.data.b.svr
            ? [ "<32>{#p/human}* (But you already emptied the envelope of its contents.)" ]
            : [ "<32>{#p/basic}* It's just an empty envelope." ],
      sanscab3: () => [
         ...(SAVE.data.b.svr ? [] : [ "<32>{#p/basic}* There's an odd... item, inside of this envelope." ]),
         SAVE.storage.inventory.size < 8
            ? "<32>{#s/equip}{#p/human}* (You got the Corn Dog Sword.)"
            : "<32>{#p/human}* （你帶的東西太多了。）"
      ],
      cream_get: [ "<32>{#p/human}* (You got the Ice Dream.)" ],
      cream_deny: [ "<32>{#p/basic}* 空無一物。" ],
      cream_full: [ "<32>{#p/human}* （你帶的東西太多了。）" ],
      cream_get_archive: [
         "<32>{#p/human}* (You reach into the cart.)",
         "<32>{#p/human}{#s/equip}* (You got the Ice Dream.)"
      ],
      cream_empty_archive: [ "<32>{#p/human}* (You reach into the cart.)", "<32>{#p/human}* (...)" ],
      cream_full_archive: [ "<32>{#p/human}* (You're carrying too much to reach inside.)" ],
      bunbun: pager.create(
         0,
         () =>
            SAVE.data.n.plot === 72
               ? [ "<32>{#p/basic}* Mom says that we're going to a new homeworld soon.", "<32>* ... what's a homeworld?" ]
               : [
                    "<32>{#p/basic}* Mom says that sleeping could recover your health {@fill:#ff0}above your maximum HP{@fill:#fff}.",
                    "<32>* ... what's maximum HP?"
                 ],
         () =>
            SAVE.data.n.plot === 72
               ? [ "<32>{#p/basic}* Do humans have a homeworld?" ]
               : [ "<32>{#p/basic}* Is it something monsters have?" ]
      ),
      emptytable1: () =>
         SAVE.data.b.svr
            ? [ "<32>{#p/human}* (The table strikes you as being rather lonesome.)" ]
            : [ "<32>{#p/basic}* 只是張孤零零的桌子。\n* 上面有糖霜的味道。" ],
      emptytable2: () =>
         SAVE.data.b.svr
            ? [ "<32>{#p/human}* (The table strikes you as being rather lonesome.)" ]
            : [ "<32>{#p/basic}* 一張孤零零的桌子。\n* 上面有毛髮的味道。" ],
      balcony0: [ "<18>{#p/papyrus}ENJOYING THE VIEW?", choicer.create("* （你要怎麼回答？）", "是", "否") ],
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
            ? [ "<32>{#p/human}* (You can't seem to understand the contents of this book.)" ]
            : [ "<32>{#p/basic}* 一本用古老的語言寫成的書。" ],
      bedbook3a: [ "<32>{#p/basic}* Would you like me to read it?" ],
      bedbook3b: [ "<32>{#p/basic}* Read it again?" ],
      bedbook4: [ choicer.create("* (Have $(name) read the book?)", "是", "否") ],
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
      bedbook6: [ "<32>{#p/basic}* Well, if you ever want me to read it, let me know." ],
      beddoor1: [ "<32>{#p/basic}{#npc/a}* If you want a room, you'll need to ask me first." ],
      beddoor2: [ "<32>{#p/basic}{#npc/a}* If you want a room again, you'll need to ask me first." ],
      beddoor3: [ "<32>{#p/basic}{#npc/a}* Sorry, munchkin!\n* No more vacancies left here!" ],
      candy1: () => [
         SAVE.data.b.svr
            ? "<32>{#p/human}* (You approach the vending machine.)"
            : "<32>{#p/basic}* It's an exoberry-exclusive vending machine.",
         choicer.create("* (Buy exoberries for 8G?)", "是", "否")
      ],
      candy2: [ "<32>{#p/human}* （你的錢不夠。）" ],
      candy3: [ "<32>{#p/human}* （你帶的東西太多了。）" ],
      candy4: [ "<32>{#p/human}* （你買了些洋梅。）" ],
      candy5: [ "<32>{#p/human}* (You decide not to buy.)" ],
      capstation1: [
         "<32>{#p/human}* (You look behind the station and find a key.)",
         "<32>{#s/equip}{#p/human}* (The Rusty Key was added to your keyring.)",
         "<32>* (Check your CELL to see all acquired keys.)"
      ],
      capstation2: [ "<32>{#p/human}* (You look behind the station.)", "<32>{#p/basic}* Nothing new back here." ],
      crossword0: () =>
         world.edgy
            ? [
                 "<25>{#p/sans}* 喔，你來了。",
                 "<25>{#p/sans}{#f/2}* 如果你喜歡上一個謎題的話，\n  估計這個也能合你胃口。"
              ]
            : [
                 "<18>{#p/papyrus}{#f/9}HUMAN!!",
                 "<18>{#f/9}YOU HAVE SEEN MY PUZZLES.",
                 "<18>{#f/4}BUT WHAT YOU ARE ABOUT TO SEE IS..."
              ],
      crossword1: () =>
         world.edgy
            ? [
                 "<26>{#p/sans}* 其實也不需要了。\n* 走過來瞧瞧吧。",
                 "<25>{#p/sans}* 喏，它就在地上呢。"
              ]
            : [
                 "<18>{#p/papyrus}{#f/7}SANS!!\nWHERE'S THE PUZZLE!?",
                 "<25>{#p/sans}* you're lookin' at it.",
                 "<18>{#p/papyrus}{#f/1}WHAT?\nTHAT TABLET LYING ON THE GROUND?",
                 "<18>{#f/4}OKAY..."
              ],
      crossword2: (check: boolean) =>
         world.edgy
            ? [
                 check
                    ? "<25>{#p/sans}* 咋了？\n  謎題讓你“鬱”罷不能嗎？"
                    : "<25>{#p/sans}* 看都不願意看一眼，是吧？",
                 "<25>* 真不該對你期望太高。",
                 "<26>{#f/3}* 好吧，\n* 說不定，數謎更適合你。",
                 "<26>{#f/0}* 跑題了。"
              ]
            : [
                 check
                    ? "<18>{#p/papyrus}{#f/7}SANS!!!\nTHAT DIDN'T DO ANYTHING!"
                    : "<18>{#p/papyrus}{#f/7}SANS!!!\nTHEY DIDN'T EVEN LOOK AT IT!",
                 "<25>{#p/sans}* whoops.",
                 "<25>{#f/3}* i knew i should have used today's kakuro puzzle instead.",
                 "<18>{#p/papyrus}{#f/1}WHAT!? KAKURO!?",
                 "<18>{#f/9}I CAN'T BELIEVE YOU SAID THAT!!",
                 "<18>{#f/4}IN MY OPINION...",
                 "<18>{#f/0}SUDOKU IS EASILY THE HARDEST.",
                 "<25>{#p/sans}* what? really, dude?\n* that easy-peasy number shuffle?",
                 "<25>{#f/4}* that's for baby bones.",
                 "<18>{#p/papyrus}{#f/4}UN. BELIEVABLE.",
                 "<18>{#f/9}HUMAN!!!\nSOLVE THIS DISPUTE!",
                 choicer.create("* (Which is harder?)", "Sudoku", "Kakuro")
              ],
      crossword3a: [
         "<18>{#p/papyrus}HA! HA! YES!",
         "<18>HUMANS MUST BE VERY INTELLIGENT!",
         "<18>IF THEY ALSO FIND SUDOKU SO DIFFICULT!",
         "<18>{#f/9}NYEH! HEH! HEH HEH!"
      ],
      crossword3b: [
         "<18>{#p/papyrus}{#f/9}YOU TWO ARE WEIRD!",
         "<18>{#f/0}KAKURO PUZZLES ARE SO EASY.",
         "<18>IT'S THE SAME SOLUTION EVERY TIME.",
         "<18>{#f/4}I JUST FILL ALL THE BOXES IN WITH THE LETTER \"Z\"...",
         "<18>{#f/4}BECAUSE EVERY TIME I LOOK AT A KAKURO...",
         "<18>{#f/9}ALL I CAN DO IS SNORE!!!"
      ],
      crossword3c: [
         "<25>{#p/sans}{#f/3}* by the way, i think i saw a pair of dogs running around...",
         "<25>{#f/0}* i'd tread carefully if i were you."
      ],
      crossword4a: pager.create(0, [ "<25>{#p/sans}* 嘿，你要去哪，小子？" ], [ "<25>{#p/sans}* 回來。" ]),
      crossword4b: pager.create(0, [ "<25>{#p/sans}* really?\n* it's not THAT bad." ], [ "<25>{#p/sans}* really?" ]),
      crossword5a: [
         "<25>{#p/sans}* thanks for saying \"sudoku\" just to appease my brother.",
         "<25>{#f/4}* yesterday he got stumped trying to \"solve\" a star chart."
      ],
      crossword5b: [
         "<25>{#p/sans}* papyrus...\n* ... finds difficulty in interesting places.",
         "<25>{#f/4}* yesterday he got stumped trying to \"solve\" a star chart."
      ],
      crossword6a: [
         "<25>{#p/sans}{#f/3}* 我早就料到\n  你會直接跳過的。",
         "<25>{#f/0}* 這不就是你碰到謎題時\n  常用的伎倆麼？"
      ],
      crossword6b: [
         "<25>{#p/sans}{#f/3}* 挺驚訝的。\n* 我以為你會看都不看一眼\n  直接跳過。",
         "<25>{#f/2}* 也許，你還沒有爛到骨子裡。"
      ],
      crossword6c: [ "<25>{#p/sans}{#f/2}* heheh, made you look." ],
      crossword6d: [
         "<25>{#p/sans}{#f/3}* i'm surprised.\n* i thought you weren't even interested.",
         "<25>{#f/2}* 也許，你還沒有爛到骨子裡。"
      ],
      doggo1: [
         "<32>{#p/basic}* 好像有啥動了下？\n* 是我的錯覺嗎？",
         "<32>* 如果確實有什麼在動...\n* 比如說，一個人類...",
         "<32>* 我絕不會讓他\n  再從我眼皮子底下溜走！"
      ],
      doggo2: [
         [
            "<32>{#p/basic}* S-S-S-Something pet me...\n* Something that isn't even m-m-moving...!",
            "<32>* I'm gonna need some dog treats for this."
         ],
         [ "<32>{#p/basic}* A w-w-wrench appeared out of nowhere, h-huh!?!?", "<32>{#p/basic}* ... what a day!" ],
         [],
         [
            "<32>{#p/basic}* A h-h-human came up and attacked me...\n* Out of n-n-nowhere...!",
            "<32>{#p/basic}* I'm...\n* I'm gonna go to bed."
         ]
      ],
      doggo3: pager.create(
         0,
         [ "<32>{#p/basic}* Hello?\n* Is anybody there...?" ],
         [ "<32>{#p/basic}* Are you two playing a trick on me?\n* Real funny, guys." ],
         [ "<32>{#p/basic}* Big lug?\n* Is that you?\n* Come on..." ],
         [ "<32>{#p/basic}* Well, it's not the tall skeleton...\n* He's too loud." ],
         [ "<32>{#p/basic}* Whoever you are, knock it off!!!" ],
         [ "<32>{#p/basic}* ..." ]
      ),
      doggo3x: [ "<32>{#p/basic}* (Snore... snore...)" ],
      drop_chip: [
         "<32>{#p/basic}* Did you just...\n* Drop the part of me I had given you?",
         "<32>* I have no words for you...\n* Begone!"
      ],
      drop_cream: [ "<32>{#p/basic}* You know, you're lucky I'm busy advertising." ],
      eat_chip: [
         "<32>{#p/basic}* Did you just...\n* Consume the part of me I had given you?",
         "<32>* I have no words for you...\n* Begone!"
      ],
      eat_cream: [ "<32>{#p/basic}* Nice to see you enjoying your Ice Dream!\n* Very nice!" ],
      genotext: {
         asriel1: () =>
            [ [ "<25>{#p/asriel2}{#f/9}* 跟我走就行。" ], [ "<25>{#p/asriel2}{#f/16}* 走吧。" ] ][
               Math.min(SAVE.flag.n.ga_asriel1++, 1)
            ],
         asriel2: () =>
            [
               [ "<25>{#p/asriel2}{#f/2}* 哎，前面站著的，\n  不是偉大的Papyrus嗎？" ],
               [ "<25>{#p/asriel2}{#f/3}* 嗯... 再來一次吧。" ]
            ][Math.min(SAVE.flag.n.killed_sans, 1)],
         asriel3: () =>
            [
               [ "<25>{#p/asriel2}{#f/1}* 咱們去做個“自我介紹”，\n  怎麼樣？" ],
               [ "<25>{#p/asriel2}{#f/4}* 你知道該幹什麼。" ]
            ][Math.min(SAVE.flag.n.killed_sans, 1)],
         asriel4: [ "<25>{*}{#p/asriel2}{#f/5}* 哈嘍！{^5}{%}" ],
         asriel5: [ "<18>{*}{#p/papyrus}{#f/1}幹啥- {%}" ],
         asriel6: () =>
            [
               [
                  "<25>{#p/asriel2}{#f/15}* 嘿... $(name)...",
                  "<25>{#f/17}* 要不，從現在開始\n  由你來動手吧？",
                  "<25>{#f/16}* 我... 我沒事，真沒事。",
                  "<25>{#f/13}* 你應該比我更擅長幹這事..."
               ],
               [ "<25>{#p/asriel2}{#f/16}* 額，好吧。\n* ...之後你來動手。" ],
               [ "<25>{#p/asriel2}{#f/15}* 那麼... 前進吧？" ],
               [ "<25>{#p/asriel2}{#f/15}* ..." ]
            ][Math.min(SAVE.flag.n.ga_asriel6++, 3)],
         asriel9: [ "<25>{#p/asriel2}{#f/8}* 噓，等一下，\n  看看他會做些什麼。" ],
         asriel10: () =>
            [
               [
                  "<25>{#p/asriel2}{#f/15}* 哇，\n  Papyrus這麼頹廢的樣子...",
                  "<25>{#f/16}* 我真是頭一次見到。",
                  "<25>{#f/13}* 嘿，$(name)...",
                  "<25>{#f/1}* 我感覺接下來有好戲看了。"
               ],
               [ "<25>{#p/asriel2}{#f/16}* 真是可憐。" ]
            ][Math.min(SAVE.flag.n.ga_asriel10++, 1)],
         asriel17: () =>
            [ [ "<25>{#p/asriel2}{#f/16}* 天吶，$(name)...\n  有些怪物就是聽不懂話。" ], [ "<25>{#p/asriel2}{#f/4}* 切。" ] ][
               Math.min(SAVE.flag.n.ga_asriel17++, 1)
            ],
         asriel24: () =>
            [ [ "<25>{#p/asriel2}{#f/4}* 真是浪費時間。" ], [ "<25>{#p/asriel2}{#f/3}* 呵呵。" ] ][
               Math.min(SAVE.flag.n.ga_asriel24++, 1)
            ],
         asriel26: () =>
            [
               [
                  "<26>{#p/asriel2}{#f/3}* 好了，那群蠢狗\n  已經全軍覆沒了。",
                  "<26>{#p/asriel2}{#f/4}* 再過一座橋，就到小鎮了。",
                  "<25>{#f/1}* ...跟我來。"
               ],
               [ "<25>{#p/asriel2}{#f/3}* 我們去鎮上。" ]
            ][Math.min(SAVE.flag.n.ga_asriel26++, 1)],
         asriel28: () =>
            [
               [
                  "<25>{#p/asriel2}{#f/6}* 好，$(name)，\n  現在整個鎮子都是你的了。",
                  "<25>{#f/7}* 而我要去忙點別的事，\n  之後會派上用場。",
                  "<25>{#f/1}* 別擔心，我去去就回。"
               ],
               [ "<25>{#p/asriel2}{#f/1}* 鎮子出口見。" ]
            ][Math.min(SAVE.flag.n.ga_asriel28++, 1)],
         asriel29: () =>
            [
               SAVE.data.b.papyrus_secret
                  ? [
                       "<25>{#p/asriel2}{#f/2}* 嘻。\n* 嘻。\n* 嘻....",
                       "<25>{#f/10}* ...等等，Papyrus在哪？",
                       "<25>{#f/10}* ...",
                       "<25>{#f/4}* 天吶，$(name)，\n  沒想到你下手這麼快。"
                    ]
                  : [
                       "<25>{#p/asriel2}{#f/2}* 嘻。\n* 嘻。\n* 嘻....",
                       "<25>{#f/1}* 天吶，那個蠢骨頭\n  那麼想原諒你...",
                       "<25>{#f/13}* 最後還是嚐到了仁慈的後果。",
                       "<25>{#f/16}* 不過，先別管他了。",
                       "<25>{#f/1}* 咱們等下還要拉長線，\n  釣大魚呢。"
                    ],
               [ "<25>{#p/asriel2}{#f/13}* 哎呀，這蠢骷髏\n  又白白送死了。" ],
               [
                  "<25>{#p/asriel2}{#f/13}* 俗話說，好鐵要經三回爐。",
                  "<25>{#f/16}* 但很遺憾，他一回就不行了。"
               ],
               [
                  "<25>{#p/asriel2}{#f/6}* 你已經殺了他四次了。",
                  "<25>{#f/8}* 看來你很享受這種快感啊..."
               ],
               [ "<25>{#p/asriel2}{#f/15}* 又來...？" ]
            ][Math.min(SAVE.flag.n.ga_asriel29++, 4)],
         asriel30: () => [
            "<25>{#p/asgore}{#f/1}* ...",
            "<25>{#f/1}* 哈嘍，Asriel。",
            "<25>{#f/2}* ...",
            "<25>{#f/3}* 我們談一下吧。",
            ...[
               [
                  "<25>{#p/asriel2}{#f/6}* 談談？\n* 跟你有什麼好談的？",
                  "<25>{#f/6}* 還有，你怎麼在這？",
                  "<25>{#f/7}* 既然早晚我都要\n  把你送到閻王跟前...",
                  "<25>{#f/8}* 那不如... {%15}"
               ],
               [
                  "<25>{#p/asriel2}{#f/8}* 你想談談？\n* 別來浪費我的時間。",
                  "<25>{#f/6}* 放個全息投影，還想蒙我？",
                  "<25>{|}{#p/asgore}{#f/5}* 你怎麼- {%}",
                  "<25>{#p/asriel2}{#f/1}* 少問。"
               ]
            ][Math.min(SAVE.flag.n.ga_asriel30x, 1)]
         ],
         asriel30a: [
            "<25>{#p/asriel2}{#f/8}* 開玩笑嗎？\n* 這只是個全息投影？",
            "<25>{#f/6}* 我知道你是個懦夫，\n  可你竟然還能慫出個新境界。"
         ],
         asriel30b: [
            "<25>{#p/asgore}{#f/1}* 你就沒有更重要的事可做嗎？",
            "<25>{#p/asriel2}{#f/8}* ...",
            "<25>{|}{#p/asgore}{#f/3}* 聽著，兒子，我只是- {%}",
            "<25>{#p/asriel2}{#f/7}* 我不是你兒子。\n* 我早就不是你兒子了。",
            "<25>{#p/asgore}{#f/2}* ...",
            "<25>{#p/asgore}{#f/1}* 好吧，Asriel。\n* 你知不知道自己\n  正變成什麼樣？",
            "<25>{#f/2}* 鐵石心腸，罪不可赦...",
            "<25>{#p/asriel2}{#f/8}* 哼，別裝的好像\n  你很在乎我似的，爹。",
            "<25>{#p/asgore}{#f/5}* ...",
            "<25>{#p/asriel2}{#f/9}* 不好意思，\n  剛不該叫你“爹”的，\n  Asgore。",
            "<25>{#f/1}* 真是抱歉。",
            "<25>{#p/asgore}{#f/3}* ...\n* 開玩笑吧...",
            "<25>{#f/5}* 好好想想你的所作所為，\n  這可不是為了我們...",
            "<25>{#f/6}* 是為了你好！",
            "<25>{#p/asriel2}{#f/8}* ...",
            "<25>{#p/asriel2}{#f/7}* ...讓我緩緩。",
            "<26>{#f/6}* 顯然你來這只是想氣我。",
            "<25>{#p/asgore}{#f/3}* ...",
            "<25>{#p/asriel2}{#f/6}* ...",
            "<25>{#p/asgore}{#f/7}* 你得意識到\n  你的選擇是有份量的！",
            "<25>{#p/asriel2}{#f/15}* 不然？\n  沒份量不就飄起來了嗎？\n  誰還看得到？",
            "<25>{#f/16}* $(name)，我們走。\n  我受夠他了。"
         ],
         asriel30c: [ "<25>{*}{#p/asgore}{#f/8}* Asriel，求你別走！\n* 我只是想幫你！{^999}" ],
         asriel30d: () =>
            [
               [ "<25>{#p/asriel2}{#f/3}* 做好準備，$(name)。", "<26>{#f/4}* 這兒可是Undyne的地盤。" ],
               [ "<25>{#p/asriel2}{#f/4}* 帶路吧。" ]
            ][Math.min(SAVE.flag.n.ga_asriel30d++, 1)],
         papyrusSolo1a: [
            "<18>{#p/papyrus}{#f/31}SANS？\n那是個人類嗎？",
            "<18>{#f/5}應該是的吧？",
            "<18>{#f/32}捏...\nUNDYNE總算會...",
            "<18>{#p/papyrus}{#f/31}我能加入皇家衛隊了...",
            "<18>{#f/5}你會以我為榮的吧？",
            "<25>{#p/asriel2}{#f/3}* 你騙不了自己的，Papyrus。\n* 他已經死了。",
            "<18>{|}{#p/papyrus}{#f/5}可是- {%}",
            "<25>{#p/asriel2}{#f/3}* 夠了。\n* 你再怎麼使勁呼喚，\n  他也聽不見的。", 
            "<18>{#p/papyrus}{#f/6}不會的...\nSANS他...",
            "<18>{#f/31}他向我承諾過的...",
            "<25>{#p/asriel2}{#f/8}* 那個蠢骨頭\n  要能遵守承諾就怪了。",
            "<26>{#f/9}* 雖然我也不比他好到哪兒去。", 
            "<18>{#p/papyrus}{#f/31}...",
            "<18>{#f/3}對不起。\n我得走了..."
         ],
         papyrusSolo2a: [
            "<18>{#p/papyrus}{#f/31}唉，我剛從\nUNDYNE那回來...",
            "<18>{#f/31}她說國王找你有事。",
            "<25>{#p/asriel2}{#f/6}* ...",
            "<18>{#p/papyrus}{#f/3}他原話是\n“我想見見我兒子”。",
            "<18>{#f/7}...",
            "<18>{#f/7}我們的王子竟然\n殺了我兄弟，\n真是難以置信！",
            "<25>{|}{#p/asriel2}{#f/8}* 其實你才是我們原本想- {%}",
            "<18>{#p/papyrus}{#f/7}真是夠了！！",
            "<18>{#f/7}你出賣集體，背叛同胞！",
            "<18>{#f/7}為了啥呢！？",
            "<18>{#f/7}就為了取悅自己嗎？",
            "<25>{#p/asriel2}{#f/16}* 對啊，Papyrus。\n* 就是因為這麼做很爽。",
            "<18>{#p/papyrus}{#f/7}扯淡！！！",
            "<18>{#p/papyrus}{#f/4}還有你，人類...",
            "<18>{#f/7}別以為我不知道\n事態會怎麼發展。",
            "<18>{#f/7}顯而易見，你才是主謀。",
            "<25>{#p/asriel2}{#f/8}* 你真有眼力。",
            "<25>{#f/7}* 眼下我們是不是該\n  就地投降才好呢？",
            "<18>{#p/papyrus}{#f/31}...",
            "<25>{#p/asriel2}{#f/4}* 先說明了，你這股努力的勁兒\n  確實令我佩服。",
            "<25>{#f/3}* 但我們自有打算。",
            "<18>{#p/papyrus}{#f/4}你要知道，UNDYNE可能\n正盯著我們呢。",
            "<25>{#p/asriel2}{#f/3}* 你想說什麼？",
            "<25>{#f/4}* ...告訴你，Papyrus，\n  你和其他人做什麼，\n  跟我們都毫無關係。",
            "<25>{#f/1}* 只要在一起，\n  誰都無法把我們分開。",
            "<18>{#p/papyrus}{#f/7}...我呸！！"
         ],
         papyrusSolo3: [ "<25>{#p/asriel2}{#f/3}* 哈嘍！" ],
         papyrusSolo3a: () => [
            "<18>{#p/papyrus}{#f/31}你知道嗎...",
            "<18>{#f/31}我偶然聽到ALPHYS博士\n自言自語...",
            "<18>{#f/5}從她的話中我聽到個詞，\n好像是“時間回溯”？",
            "<18>{|}{#f/32}{#x1}我不確定，但好像你們- {%}",
            "<25>{#p/asriel2}{#f/6}* 沒門。",
            "<18>{|}{#p/papyrus}{#f/6}但她說了你們能- {%}",
            ...(SAVE.flag.n.genocide_milestone < 5
               ? [ "<25>{#p/asriel2}{#f/6}* 沒門。" ]
               : SAVE.flag.n.genocide_milestone < 6
               ? [ "<25>{#p/asriel2}{#f/6}* 沒門，不過我要是那麼做的話\n  她會很高興的。" ]
               : [ "<25>{#p/asriel2}{#f/6}* 沒門，反正她最後\n  也要跟著去見閻王。" ]),
            "<18>{#p/papyrus}{#f/31}可是，假如你真能\n回溯時間，抹掉過去...",
            "<18>{#f/5}為什麼不去試試呢？",
            "<18>{#f/31}下一條時間軸裡，\n讓-讓我代他去死。",
            "<18>{#f/3}那樣，他就能活下來了，\n對吧？",
            "<25>{#p/asriel2}{#f/6}* ...\n* 跟你說，我早就看過\n  那條線了。",
            "<25>{#f/7}* 無聊至極。",
            "<18>{#p/papyrus}{#f/3}...",
            "<18>{#f/6}那麼，我給你看看\n這個謎題吧？",
            "<18>{#f/32}說不定，\n它能讓你不那麼無聊...",
            "<25>{#p/asriel2}{#f/15}* ...",
            "<25>{#p/asriel2}{#f/15}* 你要是喜歡這麼做的話，\n  那就隨你的便。",
            "<18>{#p/papyrus}喔，喔！",
            "<18>{#f/0}太好了！！",
            "<18>{#f/0}你開始改變想法了！",
            "<25>{#p/asriel2}{#f/8}* ...",
            "<18>{#p/papyrus}{#f/6}...",
            "<18>{|}{#f/5}那麼，規則是這樣的- {%}",
            "<25>{#p/asriel2}{#f/7}* 我們早就知道了，蠢貨。",
            "<18>{#p/papyrus}{#f/31}...喔...",
            "<18>{#f/6}呃，好吧！！\n那我就不解釋了...",
            "<18>{#f/9}看看我們的\n隨機數字是多少吧！！"
         ],
         papyrusSolo4a: [
            "<18>{#p/papyrus}{#f/3}ASRIEL。",
            "<25>{#p/asriel2}{#f/6}* Papyrus。",
            "<18>{#p/papyrus}{#f/31}...",
            "<18>{#f/31}為什麼？",
            "<18>{#f/31}為什麼你要這麼做？",
            "<18>{#f/3}一個怪物不應該\n會變成這樣啊...",
            "<18>{#f/5}你的愛去哪了？\n你的同情心去哪了？",
            "<18>{#f/31}你的... 仁慈...",
            "<25>{#p/asriel2}{#f/2}* ...\n* 喔，您可真是文曲星下凡啊...",
            "<25>{#f/1}* 在我的靈魂中，\n  這些東西早就化為烏有了。",
            "<18>{#p/papyrus}{#f/31}但...\n我不明白...",
            "<18>{#f/5}一個有著這般\n純潔心靈的怪物...",
            "<18>{#f/31}...怎麼會\n徹底墮入黑暗呢？",
            "<25>{#p/asriel2}{#f/1}* 你真想知道嗎？",
            "<18>{#p/papyrus}{#f/3}...",
            "<18>{#f/3}對...",
            "<25>{#p/asriel2}{#f/10}* 你確實是真心想知道嗎？",
            "<18>{#p/papyrus}{#f/31}對。",
            "<25>{#p/asriel2}{#f/3}* 說大點聲。",
            "<18>{#p/papyrus}{#f/5}對！",
            "<26>{#p/asriel2}{#f/1}* 對我說，洋求我\n  把梅說的都告訴你。",
            "<18>{#p/papyrus}{#f/7}好！洋求你把梅說的\n都告訴我吧！該死！",
            "<25>{#p/asriel2}{#f/1}* 嘻嘻嘻...",
            "<25>{#f/1}* 那好，就讓我來告訴你吧。",
            "<25>{#f/15}* 其實答案很簡單...",
            "<18>{#p/papyrus}{#f/4}我的天哪，快說吧..."
         ],
         papyrusSolo4b: [
            "<25>{*}{#p/asriel2}{#f/14}{@random:1.1,1.1}{@fill:#f00}* $(name)。{%100}",
            "<18>{#p/papyrus}{#f/32}...！",
            "<25>{#p/asriel2}{#f/5}* 哈！\n* 哈哈哈！\n* 看看你什麼表情！"
         ],
         papyrusSolo4c: [ "<18>{#p/papyrus}{#f/31}我...", "<18>{#f/3}...不..." ],
         papyrusSolo4d: [
            "<18>{#p/papyrus}{#f/7}不，你錯了。",
            "<18>{#f/7}一直想方設法把我擊垮的，\n是你。",
            "<18>{#f/7}那個滿嘴謊話的，還是你。",
            "<18>{#f/9}但是我，PAPYRUS...",
            "<18>{#f/9}總算認清了{@fill:#f00}真相{@fill:#fff}。",
            "<25>{#p/asriel2}{#f/13}* 喔？\n* 真相是什麼呢？"
         ],
         papyrusSolo4e: [ "<18>{#p/papyrus}{#f/34}你才不是{@fill:#f00}ASRIEL{@fill:#fff}。" ],
         papyrusSolo4f: [
            "<18>{#f/5}{@fill:#f00}ASRIEL{@fill:#fff}絕不可能\n幹出這種事！",
            "<18>{#f/31}因為，{@fill:#f00}ASRIEL{@fill:#fff}心地善良，",
            "<18>{#f/5}信賴同胞...",
            "<18>{#f/31}比誰都相信人類！",
            "<18>{#f/4}而你呢...",
            "<18>{#f/7}你不過是個為了\n一己私慾利用人類的\n卑鄙小人！",
            "<18>{#f/4}我告訴你，\n你愛說啥就說啥，\n我不在乎。",
            "<18>{#f/9}但是，我還相信著\n那個人類。",
            "<25>{#p/asriel2}{#f/8}* 哼，你要真這麼信任他...",
            "<25>{#f/7}* 那就證明給我看看。",
            "<25>{#f/3}* 我會離開一會，\n  讓你倆單獨對峙。",
            "<25>{#f/3}* 他要是饒恕你，\n  那我就認栽。",
            "<25>{#f/4}* 否則，他要是\n  “不小心”殺了你...",
            "<25>{#f/1}* 你就知道你大錯特錯了。\n  而那個懶骨頭死得就\n  一文不值。",
            "<25>{#f/1}* 這主意如何？",
            "<18>{#p/papyrus}{#f/9}...\n我接受。",
            "<25>{#p/asriel2}{#f/3}* 那可太好了。",
            "<25>{#f/4}* 永別了。"
         ]
      },
      houz: () =>
         SAVE.data.b.svr
            ? [ "<32>{#p/human}* (You place your hands on the heavily scratched door.)" ]
            : [ "<32>{#p/basic}* 門上佈滿了貓的抓痕。" ],
      gonezo: () =>
         world.bulrun ? [ "<32>{#p/basic}* ...但是人們都逃走了。" ] : [ "<32>{#p/basic}* ...但是誰也沒有來。" ],
      garbanzo: [ "<32>{#p/human}* (But there was nobody around to occupy the seat.)" ],
      doggonopoggo: () =>
         SAVE.data.b.svr
            ? [ "<32>{#p/human}* (But there was nobody here.)" ]
            : (game.room === "s_doggo" && SAVE.data.n.state_starton_doggo === 2) ||
              (game.room === "s_dogs" && SAVE.data.n.state_starton_dogs === 2) ||
              (game.room === "s_pacing" && SAVE.data.n.state_starton_lesserdog === 2)
            ? [ "<32>{#p/basic}* ...但是誰也沒有來。" ]
            : [ "<32>{#p/basic}* Nobody's home." ],
      housebloc: () =>
         SAVE.data.b.svr ? [ "<32>{#p/human}* (You can't seem to find a way in.)" ] : [ "<32>{#p/basic}* 鎖住了。" ],
      innkeep1a: pager.create(
         0,
         [
            "<32>{#p/basic}{#npc/a}* Welcome to Starred Inn!\n* Starton's premier hotel!",
            "<32>* One night will cost you 60G.",
            choicer.create("* (Get a room?)", "是", "否")
         ],
         [
            "<32>{#p/basic}{#npc/a}* Changed your mind?",
            "<32>* Remember, one night is 60G.",
            choicer.create("* (Get a room?)", "是", "否")
         ]
      ),
      innkeep1b: pager.create(
         0,
         [
            "<32>{#p/basic}{#npc/a}* Back again?\n* Remember, one night is 60G.",
            choicer.create("* (Get a room again?)", "是", "否")
         ],
         [ "<32>{#p/basic}{#npc/a}* Changed your mind?", choicer.create("* (Get a room again?)", "是", "否") ]
      ),
      innkeep1c: pager.create(
         0,
         [
            "<33>{#p/basic}{#npc/a}* Back again?\n* Well, stay as long as you like!",
            choicer.create("* (Get a room again?)", "是", "否")
         ],
         [ "<32>{#p/basic}{#npc/a}* Changed your mind?", choicer.create("* (Get a room again?)", "是", "否") ]
      ),
      innkeep2a: [
         "<32>{#p/basic}{#npc/a}* ... you don't even have 60G?",
         "<32>* Oh! You poor thing.\n* I can only imagine what you've been through.",
         "<32>* One of the rooms upstairs is empty, you can sleep there for free, okay?"
      ],
      innkeep2b: [ "<32>{#p/basic}{#npc/a}* Here's your room key.\n* Remember to bundle up!" ],
      innkeep2c: [ "<32>{#p/basic}{#npc/a}* Sorry, you don't have enough G..." ],
      innkeep3a: [ "<32>{#p/basic}{#npc/a}* Hiya!\n* You look like you had a great sleep." ],
      innkeep3b: [ "<32>* Which is incredible...\n* ... considering you were only up there for a few minutes." ],
      innkeep3c: [ "<32>* Feel free to come back if you get tired." ],
      innkeep3d: [ "<32>* Here's your money back.\n* You can pay me if you're going to stay overnight." ],
      innkeep4: [ "<32>{#p/basic}{#npc/a}* Not in a sleepy mood?\n* Well, I'll always be here if you need me!" ],
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
         [ "<25>{#p/kidd}{#f/1}* What's up?" ],
         [ "<25>{#p/kidd}{#f/1}* Yo, howzzitgoin?" ],
         [ "<25>{#p/kidd}{#f/1}* Hey, hey!" ],
         [ "<25>{#p/kidd}{#f/1}* Nice to see you, haha." ],
         [ "<25>{#p/kidd}{#f/1}* Woah, dude, what's up?" ]
      ),
      kidd2: pager.create(
         0,
         () =>
            game.room === 's_town1' // NO-TRANSLATE

               ? [
                    "<25>{#p/kidd}{#f/1}* Yo, you're a kid too, right?",
                    "<25>{#p/kidd}{#f/1}* I can tell 'cause you're wearing a striped shirt."
                 ]
               : [
                    "<25>{#p/kidd}{#f/7}* Wait, you read books too!?",
                    "<25>{#p/kidd}{#f/1}* That librarby taught me everything I know about monster history!",
                    "<25>{#p/kidd}{#f/3}* I can't even imagine what living on a planet is like..."
                 ],
         () =>
            game.room === 's_town1' // NO-TRANSLATE

               ? [ "<25>{#p/kidd}{#f/1}* I wonder if that short skeleton is an adult or a kid." ]
               : [ "<25>{#p/kidd}{#f/3}* Have you ever lived on a planet?" ]
      ),
      marriage1: [
         "<32>{#p/basic}* 這是什麼味道？\n* （哪裡來的氣味？）",
         "<32>* 如果你是這個味道...\n* （...證明你的氣味！）"
      ],
      marriage2: [
         "<32>{#p/basic}* 嗯...\n* 這就是那個奇怪的味道。",
         "<32>* 這氣味令我想把它消滅掉。",
         "<32>* （...把你消滅掉！）"
      ],
      marriage3a: [
         "<32>{#p/basic}* Dogs can pet other dogs???\n* (A new world has opened up for us...)",
         "<32>* Thanks, weird puppy!"
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
         "<32>{#p/basic}* 王子在哪？\n* （我們沒走錯路吧？）",
         "<32>* 必須阻止那個惡魔...\n* （...還有他的人類幫兇！）"
      ],
      marriage5: [ "<32>{#p/basic}* 呃...\n* 他們在這...", "<32>* （抓住他們！）" ],
      maze1: () =>
         world.edgy
            ? [
                 "<25>{#p/sans}{#f/0}* 歡迎回來。",
                 "<25>{#p/sans}{#f/3}* 真是太遺憾了...",
                 "<25>{#p/sans}{#f/2}* 這個謎題\n  papyrus精心準備了好久...\n* 但現在他有事來不了了。",
                 "<25>{#p/sans}{#f/0}* 不過，沒關係。",
                 "<25>{#p/sans}{#f/0}* 我答應過他，會讓你解謎的。\n* 那麼，開始吧。"
              ]
            : [
                 "<18>{#p/papyrus}OHO, THE HUMAN ARRIVES!",
                 "<18>MY BROTHER AND I HAVE CREATED MANY PUZZLES.",
                 "<18>{#f/9}ARE YOU UP FOR THE CHALLENGE, HUMAN!?",
                 choicer.create("* （你要怎麼回答？）", "是", "否"),
                 "<18>{#p/papyrus}CORRECT ANSWER!\nFOR YOU SEE..."
              ],
      maze2a: [
         "<18>{#x4}{#f/9}NO CRAFTSMAN HAS EVER MADE TRAPS AS FINE AS ME!",
         "<18>{#f/0}THEY'RE PRACTICALLY IRRESISTIBLE!",
         "<25>{#x1}{#p/sans}{#f/2}* maybe you're the one who's irresistible.",
         "<18>{#p/papyrus}{#f/1}REALLY!?"
      ],
      maze2b: [
         "<18>{#x4}{#f/9}NO HUMAN HAS EVER BESTED A PUZZLE BY THE GREAT PAPYRUS!",
         "<25>{#x1}{#p/sans}{#f/4}* no human has even had the chance to, bro.",
         "<18>{#p/papyrus}{#x3}{#f/7}UGH, THAT'S BESIDES THE POINT!!"
      ],
      maze3: [ "<18>{#x1}{#f/0}ANYWAY, THIS HERE IS WHAT I LIKE TO CALL..." ],
      maze3a: [
         "<18>\"THE WALL OF FIRE!!\"",
         "<25>{#p/sans}* couldn't you just call it \"the firewall?\"\n* it'd save time.",
         "<18>{#p/papyrus}{#f/4}DR. ALPHYS WOULD THINK I'M MIS- USING THE TERM.",
         "<25>{#p/sans}* i dunno bro, she's really into that kinda stuff. in fact...",
         "<30>{#f/2}* i bet she'd find it {@fill:#ff0}hot{@fill:#fff}."
      ],
      maze4: [ "<18>{#p/papyrus}{#x3}{#f/7}NOT NOW, SANS!!" ],
      maze5: () =>
         world.edgy
            ? [
                 "<25>{#p/sans}{#f/0}* 這是“火牆”。",
                 "<25>{#p/sans}{#f/2}* 把它聯想成\n  電腦的“防火牆”就行。",
                 "<25>{#p/sans}* 到達對面，你就過關了。",
                 "<25>{#p/sans}* 很簡單，對吧？",
                 "<25>{#p/sans}{#f/3}* 不過，我之前親自嘗試過\n  這個謎題，只能說...",
                 "<25>{#p/sans}{#f/2}* 它可沒你想得那麼簡單。"
              ]
            : [
                 "<18>{#p/papyrus}... ANYWAY, THE IDEA BEHIND THIS PUZZLE IS SIMPLE.",
                 "<18>BECAUSE ALL YOU HAVE TO DO...",
                 "<18>{#f/9}IS MAKE IT TO THE OTHER SIDE!!",
                 "<18>{#f/0}GOOD LUCK!!\nNYEH HEH HEH!!"
              ],
      maze6: pager.create(
         0,
         () =>
            world.edgy
               ? [
                    "<25>{#p/sans}{#f/0}* what are you going back there for, huh?",
                    "<25>{#p/sans}{#f/3}* come on.\n* at least try to be a good sport."
                 ]
               : [ "<18>{#p/papyrus}{#x2}{#f/7}WHERE DO YOU THINK YOU'RE GOING!?" ],
         () => (world.edgy ? [ "<25>{#p/sans}{#f/0}* seriously?" ] : [ "<18>{#p/papyrus}{#x2}{#f/7}GET BACK HERE!!" ])
      ),
      maze7: [
         [
            "<18>{#p/papyrus}ARE YOU AFRAID OF THE FLAMES??",
            "<18>{#f/4}DON'T WORRY, THEY CAN'T ACTUALLY\nHARM YOU.",
            "<18>{#f/0}AS SANS WOULD SAY, THEY'RE JUST \"PLEASANTLY WARM.\"",
            "<25>{#p/sans}* actually, i picked that saying up from a friend.",
            "<18>{#p/papyrus}{#f/4}... OH."
         ],
         [
            "<18>{#p/papyrus}ARE YOU ANXIOUS ABOUT FAILING THE PUZZLE??",
            "<18>IF THAT'S THE CASE, THEN YOU MUST KNOW...",
            "<18>{#x4}{#f/9}I, THE GREAT PAPYRUS, WOULD NOT JUDGE YOU FOR IT!",
            "<18>{#f/0}AS EVERY STAR CHEF KNOWS, THE THOUGHT IS WHAT COUNTS.",
            "<18>{#x1}SO GO ON, DO TRY YOUR BEST!"
         ],
         [
            "<18>{#p/papyrus}{#f/4}(SANS, WHAT IS THE HUMAN DOING??)",
            "<25>{#p/sans}* they could just be studying the pattern.",
            "<18>{#p/papyrus}{#f/4}(OH, TRUE.)",
            "<18>{#f/9}IN THAT CASE, PROCEED WHEN READY!"
         ]
      ],
      maze8: () =>
         world.edgy
            ? [ "<25>{#p/sans}{#f/0}* 哎呀，真可惜。\n* 不過別灰心。" ]
            : [
                 "<18>{#p/papyrus}NYEH HEH HEH!\nWELL THEN.",
                 "<18>{#f/9}IT SEEMS YOU'VE BEEN JAPED BY THE GREAT PAPYRUS!",
                 "<18>{#f/0}BUT FRET NOT!",
                 "<18>FOR YOU SEE, MY TRAPS ARE NO SLOUCH.",
                 "<18>{#f/9}YOU CAN'T BE BLAMED FOR FAILING ONE SO EASILY!!"
              ],
      maze9: () =>
         world.edgy
            ? [ "<25>{#p/sans}{#f/0}* 不錯嘛。\n* 沒看出來，你還挺機靈的。" ]
            : [
                 "<18>{#p/papyrus}{#f/1}WHAT!?",
                 "<18>{#f/7}HOW DID YOU MANAGE TO DO THAT!?!?",
                 "<18>THAT WAS SUPPOSED TO BE TOTALLY IMPOSSIBLE!",
                 "<18>{#f/9}... WELL THEN!\nI SHALL HAVE TO STEP UP MY GAME!"
              ],
      maze10: () =>
         world.edgy
            ? [
                 "<25>{#p/sans}{#f/0}* 好了，謎題結束了。",
                 "<25>{#p/sans}{#f/3}* 感謝遊玩。",
                 "<25>{#p/sans}{#f/0}* 現在，\n  我要去準備下個謎題。",
                 "<25>{#p/sans}{#f/2}* 待會見。"
              ]
            : [
                 "<18>{#f/4}IN ANY CASE...",
                 "<18>{#f/0}I AM EXCITED FOR WHAT COMES NEXT!",
                 "<18>{#f/4}A PUZZLE SO CONFOUNDING...",
                 "<18>{#f/1}EVEN TERRESTRIA HERSELF COULDN'T SOLVE IT!!!",
                 "<25>{#p/sans}* terrestria?\n* isn't she literally the oldest monster alive?",
                 "<18>{|}{#p/papyrus}{#f/1}UH...\nWELL YES, BUT- {%}",
                 "<25>{#p/sans}* dang, i didn't know you thought THAT highly of me.",
                 "<18>{#p/papyrus}{#f/4}WHAT.",
                 "<25>{|}{#p/sans}* like, if even SHE can't do it, then- {%}",
                 "<18>{#p/papyrus}{#f/7}{#x3}I GET THE POINT!!"
              ],
      maze11: [ "<18>{#p/papyrus}{#f/7}SANS, WE HAVE PUZZLES TO PREPARE!!", "<18>COME ON!" ],

      nicecreamSc1: [
         "<32>{#p/basic}* I don't understand why these aren't selling...",
         "<32>* It's the perfect place for something nice..."
      ],
      nicecreamSc2: () => [
         SAVE.data.n.plot > 20.2
            ? "<32>{#p/basic}* OH!!!!\n* ... you came back!"
            : SAVE.data.b.s_state_scorereaction1 || SAVE.data.n.plot === 20.2
            ? "<32>{#p/basic}* WAIT!!!!\n* Maybe YOU'D like something!"
            : "<32>{#p/basic}* OH!!!!\n* A CUSTOMER!!",
         "<32>* Hello!\n* Would you like an Ice Dream?",
         SAVE.data.b.s_state_million
            ? "<32>* As the top scorer here, you get a handy discount!\n* 6G per Ice Dream!"
            : "<32>* It's the frozen treat that'll set your mind ablaze!\n* Now just 12G."
      ],
      nicecreamSc3: () => [
         "<32>{#p/basic}* Ice Dreams!\n* They're the frozen treats that'll set your mind ablaze!",
         SAVE.data.b.s_state_million ? "<32>* For you, 6G!" : "<32>* Now just 12G."
      ],
      nicecreamPrompt1: [ choicer.create("* (Buy an Ice Dream?)", "是", "否") ],
      nicecreamPrompt2: [ choicer.create("* (Get an Ice Dream?)", "是", "否") ],
      nicecreamSc4: [
         "<32>{#p/basic}* Well then...\n* Tell your friends...",
         "<32>* There's ice cream out here...\n* In the middle of nowhere..."
      ],
      nicecreamFc1: [ "<32>{#p/basic}* I relocated my stand, but there are still no customers..." ],
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
         "<32>{#p/basic}* Well then...\n* Tell your friends...",
         "<32>* Four Ice Dreams for the price of three..."
      ],
      nicecreamFc5: [ "<32>{#p/basic}* Don't forget to take a postcard from the box!" ],
      nicecreamNoFun1: [ "<32>{#p/basic}* Huh?\n* You don't have enough room in your pockets..." ],
      nicecreamNoFun2: [ "<32>{#p/basic}* I wish I could make Ice Dreams easier to store..." ],
      nicecreamNoMun1: [ "<32>{#p/basic}* Huh?\n* You don't have enough money..." ],
      nicecreamNoMun2: [ "<32>{#p/basic}* I wish I could make Ice Dreams for free..." ],
      nicecreamFree1: [ "<32>{#p/basic}* Tell you what, have your first one on me." ],
      nicecreamFree2: [ "<32>{#p/basic}* Enjoy..." ],
      nicecreamReturnWithGoods: [ "<32>{#p/basic}* Well, you can always come back later." ],
      nicecreamReturnWithNeeds: [ "<32>{#p/basic}* Oh, that's okay.", "<32>* Come again soon, kid!" ],
      nicecreamPurchase: [ "<32>{#p/basic}* Here you go!\n* Have a super-duper day!" ],
      nicecreamGet: [ "<32>{#s/equip}{#p/human}* (You got the Ice Dream.)" ],
      nicecreamK1a: [ "<25>{#p/kidd}{#f/1}* Yo, can I get an Ice Dream?" ],
      nicecreamK1b: [ "<32>{#p/basic}* Sure, kid.\n* If you've got the money." ],
      nicecreamK1c: [ "<25>{#p/kidd}{#f/2}* (Psst, give them this.)" ],
      nicecreamK1d: [
         "<25>{#p/kidd}{#f/7}* Yo, they got free Ice Dreams here!?",
         "<25>{#p/kidd}{#f/1}* Get me one too!"
      ],
      nicecreamK2: [ "<32>{#p/basic}* W... where did you get that?" ],
      nicecreamK3a: [ "<32>* S-sure, kid... here you go!" ],
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

                  ? [ "<32>{#p/basic}* Nothing personal, of course." ]
                  : [
                       "<32>{#p/basic}* Apparently, he sold his first Ice Dream in the middle of the Starton holo-forest."
                    ]
               : [ "<32>{#p/basic}* Maybe it's time to start that \"Ice Dream\" chain I've always dreamed of..." ]
      ),
      faunX: () =>
         [
            [ "<32>{#p/basic}{#npc/a}* I can tell you have absolutely no respect for life.\n* Good going, champ." ],
            [ "<32>{#p/basic}{#npc/a}* Keep it up, champ.\n* See where it gets you." ],
            [ "<32>{#p/basic}{#npc/a}* Really, champ?" ]
         ][Math.min(roomKills().s_greater++, 2)],
      snowdrakeX: [
         "<32>{#p/basic}{#npc/a}* Guh?\n* Did you just...",
         "<32>{#p/basic}{#npc/a}* ...\n* That's, uh, not very cool."
      ],
      moonrocksX1: [ "<32>{#p/basic}{#npc/a}* What the-\n* What was THAT for?" ],
      moonrocksX2: [ "<32>{#p/basic}{#npc/b}* For real, though~\n* How did THAT happen?" ],
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
                  ? [ "<32>{#p/basic}{#npc/a}* Get away from me, man!\n* I don't like you." ]
                  : SAVE.data.n.plot < 19
                  ? [
                       "<32>{#p/basic}{#npc/a}* I heard if you hold [X] in battle, you'll move twice as slow as normal!",
                       "<32>* I know... lame, right?",
                       "<32>* But I'll tell you a secret.\n* That dog over there... won't expect you to move slowly.",
                       "<32>* If you sneak up on him while holding [X], you might just get by undetected!",
                       "<32>* Guh huh huh... good luck."
                    ]
                  : [
                       "<32>{#p/basic}{#npc/a}* So you came back to talk, huh?",
                       "<32>* That's cool.",
                       "<32>* Not as cool as me, but still pretty cool anyway."
                    ],
            () =>
               SAVE.data.n.plot === 72
                  ? [ "<32>{#p/basic}{#npc/a}* Very important." ]
                  : roomKills().s_doggo > 0
                  ? [ "<32>{#p/basic}{#npc/a}* Didn't you hear me?\n* Get away!" ]
                  : SAVE.data.n.plot < 19
                  ? [ "<32>{#p/basic}* You're gonna need it." ]
                  : [ "<32>{#p/basic}* I'm ice cold." ]
         ),
         s_genokid: pager.create(
            0,
            () =>
               world.genocide
                  ? [
                       "<25>{#p/kidd}{#f/3}{#npc/a}* 剛才，有個小孩走過來\n  往我腦袋裡插了什麼東西。",
                       "<25>{#f/3}* 之後，他就去鑄廠了，\n  說要去“增強信號\"。",
                       "<25>{#f/4}* ...有些小孩真是奇怪。"
                    ]
                  : [
                       "<25>{#p/kidd}{#f/3}{#npc/a}* 喲，大家都去\n  某個地方逃難了。",
                       "<25>{#f/3}* 我說，成年人有時候\n  就是這麼愚蠢，哈哈...",
                       "<25>{#f/1}* 他們難道不知道\n  安黛因會保護我們的嗎！？"
                    ],
            () =>
               world.genocide
                  ? [ "<25>{#p/kidd}{#f/7}{#npc/a}* 不過，你可不奇怪，\n  而且長得超酷的！" ]
                  : [ "<25>{#p/kidd}{#f/1}{#npc/a}* Undyne's got our backs!" ]
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
                       "<32>{#p/basic}{#npc/a}* I put out a call for some \"girls\" today.",
                       "<32>* Someone told me there are infinite possibilities among the stars...",
                       "<32>* Well, I'm taking that seriously.",
                       "<32>* I'm literally going to make out with a space creature."
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
                  ? [ "<32>{#p/basic}{#npc/a}* Do you know where Sans is?" ]
                  : [
                       "<32>{#p/basic}{#npc/a}* I guess I could ask Undyne.\n* But I think she likes someone else already."
                    ],
            () =>
               SAVE.data.b.killed_mettaton
                  ? [ "<32>{#p/basic}{#npc/a}* Here's hoping another cutie like him comes along..." ]
                  : SAVE.data.n.plot === 33
                  ? [ "<32>{#p/basic}{#npc/a}* Don't tell me you don't have an OuterNet account..." ]
                  : SAVE.data.n.plot === 72
                  ? [ "<32>{#p/basic}{#npc/a}* What's an onionsan, anyway?" ]
                  : papreal()
                  ? [ "<32>{#p/basic}{#npc/a}* Let me know if you see him..." ]
                  : [ "<32>{#p/basic}{#npc/a}* Can I ever find love out here?" ]
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
                       "<32>{#p/basic}{#npc/a}* Hmmm...\n* Isn't human food different from monster food?",
                       "<32>* It does things like \"spoil.\"",
                       "<32>* And while monster food converts to energy instantly...",
                       "<32>* Human food has to pass all the way through their bodies first.",
                       "<32>* Which it somehow does, even on low gravity.",
                       "<32>* How strange.\n* I'd love to try it sometime."
                    ],
            () =>
               SAVE.data.b.killed_mettaton
                  ? [ "<32>{#p/basic}{#npc/a}* How unfortunate." ]
                  : SAVE.data.n.plot === 33
                  ? papreal()
                     ? world.dead_skeleton
                        ? [
                             "<32>{#p/basic}{#npc/a}* Come to think of it, that's not the only off-putting thing to have happened today..."
                          ]
                        : [ "<32>{#p/basic}{#npc/a}* How strange." ]
                     : [ "<32>{#p/basic}{#npc/a}* We're blessed to have such a character in our midst." ]
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
                  : [ "<32>{#p/basic}{#npc/a}* I've also heard they have things called \"bathrooms.\"" ],
            () =>
               SAVE.data.b.killed_mettaton
                  ? [ "<32>{#p/basic}{#npc/a}* How unfortunate." ]
                  : SAVE.data.n.plot === 33
                  ? papreal()
                     ? [ "<32>{#p/basic}{#npc/a}* How strange." ]
                     : [ "<32>{#p/basic}{#npc/a}* How delightful." ]
                  : SAVE.data.n.plot === 72
                  ? world.population < 4
                     ? [ "<32>{#p/basic}{#npc/a}* How... unexpected." ]
                     : [ "<32>{#p/basic}{#npc/a}* How... delicious." ]
                  : papreal()
                  ? [ "<32>{#p/basic}{#npc/a}* Skeletons are cool." ]
                  : [ "<32>{#p/basic}{#npc/a}* Humans are weird." ]
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
                       "<32>{#p/basic}{#npc/a}* No matter where I go, it's the same menu, the same people...",
                       "<32>* Help!\n* I want new drinks an' h-h-h-hot guys!!"
                    ],
            () =>
               SAVE.data.b.killed_mettaton
                  ? [ "<32>{#p/basic}{#npc/a}* So c-c-cold..." ]
                  : SAVE.data.n.plot === 33
                  ? [ "<32>{#p/basic}{#npc/a}* Sansyyyy..." ]
                  : SAVE.data.n.plot === 72
                  ? [ "<32>{#p/basic}{#npc/a}* S-soooooo ready!" ]
                  : papreal() || world.dead_dog
                  ? [ "<32>{#p/basic}{#npc/a}* ..." ]
                  : [ "<32>{#p/basic}{#npc/a}* I guess the bartender's kind of h-h-h-hot..." ]
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
               ? [ "<32>{#p/basic}{#npc/a}* Shoot, I was hoping Sans came to give us a pat on the head." ]
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
               ? [ "<32>{#p/basic}{#npc/a}* Smells kinda... quiet." ]
               : SAVE.data.n.state_starton_doggo === 2
               ? [ "<32>{#p/basic}{#npc/a}* I can't believe Doggo's gone missing..." ]
               : SAVE.data.n.state_starton_greatdog === 2
               ? [ "<32>{#p/basic}{#npc/a}* Where's that big lug?\n* We can't start until it shows up." ]
               : papreal()
               ? [ "<32>{#p/basic}{#npc/a}* Where's Sans...\n* He's supposed to give me a pat on the head..." ]
               : [
                    "<32>{#p/basic}{#npc/a}* You better watch where you sit down in here, kid.",
                    "<32>* That big lug WILL jump into your lap and give you lots of love and attention."
                 ],
         g_dogaressa: () =>
            SAVE.data.b.killed_mettaton
               ? [
                    "<32>{#p/basic}{#npc/a}* (My hubby and I just want everyone to calm down.)",
                    "<32>{#p/basic}{#npc/a}* (Mettaton's death was tragic, but he's just a guy on TV!)"
                 ]
               : SAVE.data.n.plot === 33
               ? [ "<32>{#p/basic}{#npc/a}* (I like Sans.)\n* (Sometimes he feeds us scraps of food under the table.)" ]
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
               ? [ "<32>{#p/basic}{#npc/a}* (Where's Doggo?)\n* (I hope he didn't get lost again.)" ]
               : SAVE.data.n.state_starton_greatdog === 2
               ? [ "<32>{#p/basic}{#npc/a}* (Where's Canis Major?)\n* (He was supposed to join us for this game.)" ]
               : papreal()
               ? [ "<32>{#p/basic}{#npc/a}* (Where are those skeletons?)\n* (I wanted to get a bone from them...)" ]
               : [
                    "<32>{#p/basic}{#npc/a}* (We're sentries, but we never get any respect.)",
                    "<32>* (I wish those skeletons would throw us more bones.)",
                    "<32>* (We love bones.)"
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
               ? [ "<32>{#p/basic}{#npc/a}* Papyrus?\n* Is that you?\n* Come on..." ]
               : [
                    "<32>{#p/basic}{#npc/a}* I'm thinking of letting my hair grow out a little to show off my personality.",
                    "<32>* It makes a statement like \"Give me a big, soft hug and cuddle me, please.\""
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
                  ? [ "<32>{#p/basic}* ...\n* ...\n* ... okay." ]
                  : [ "<32>{#p/basic}* ...\n* ...\n* ... good job." ]
               : world.population < 4
               ? [
                    "<32>{#p/basic}* ...\n* ...\n* ...",
                    "<32>{#npc/a}* Grillbz is real sorry for the lack of other customers.",
                    "<32>* Personally, I think they're just afraid...",
                    "<32>* You know.\n* Of that bully."
                 ]
               : [
                    "<32>{#p/basic}* ...\n* ...\n* ...",
                    "<32>{#npc/a}* Grillbz said he found his new colors in an e-magazine.",
                    "<32>* Personally, I prefer Grillbz' natural orange color.\n* But that's just me."
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
                       "<32>{#p/basic}{#npc/a}* The Citadel's getting pretty crowded, so I've heard they're going to start moving here.",
                       "<32>* ... who knows?\n* Maybe we'll have room for 'em."
                    ]
                  : [
                       "<32>{#p/basic}{#npc/a}* The Citadel's getting pretty crowded, so I've heard they're going to start moving here.",
                       "<32>* Hmmm...\n* I don't want to see the erasure of our local culture.",
                       "<32>* But it'd definitely be fun to teach those city slickers how we do things out here!"
                    ],
            () =>
               SAVE.data.b.killed_mettaton
                  ? [ "<33>{#p/basic}{#npc/a}* I'm semi-conflicted about this." ]
                  : SAVE.data.n.plot === 33
                  ? [ "<32>{#p/basic}{#npc/a}* Regular?\n* Who, me?\n* Nah, I'm only semi-regular." ]
                  : SAVE.data.n.plot === 72
                  ? world.population < 2
                     ? [
                          "<32>{#p/basic}{#npc/a}* Come to think of it, you've inspired me, kid.\n* I'm gonna start a fight club."
                       ]
                     : [ "<32>{#p/basic}{#npc/a}* We'll just have to come up with something new, eh?" ]
                  : [ "<32>{#p/basic}{#npc/a}* Yeah, bring 'em on!" ]
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
                          : [ "<32>{#npc/a}* Grillbz says he'll think about it." ])
                    ]
                  : papreal()
                  ? [
                       "<32>{#p/basic}{#npc/a}* Grillby is getting nervous.",
                       "<32>* Sans is his best customer, and he hasn't shown up at all today..."
                    ]
                  : world.dead_dog
                  ? [
                       "<32>{#p/basic}{#npc/a}* Those dogs are part of the ROYAL GUARD, the...",
                       "<32>* Huh?\n* Where are they?\n* Weird..."
                    ]
                  : world.population < 4
                  ? [
                       "<32>{#p/basic}{#npc/a}* Word around town is there's a bully going and beating people up.",
                       "<32>* But Grillbz and I decided to keep the bar open.",
                       "<32>* No bully's gonna keep us from running THIS establishment!"
                    ]
                  : [
                       "<32>{#p/basic}{#npc/a}* Those dogs are part of the ROYAL GUARD, the military group led by UNDYNE.",
                       "<32>* She's rude, loud, and beats up everybody hoo disrespects her...",
                       "<32>* It's no wonder all the kids want to be like her when they grow up!"
                    ],
            () =>
               SAVE.data.b.killed_mettaton
                  ? [ "<32>{#p/basic}{#npc/a}* You never know with those rudely rowdy TV hosts." ]
                  : SAVE.data.n.plot === 33
                  ? [
                       "<32>{#p/basic}{#npc/a}* Don't ask me why he does it.",
                       "<32>* If I had to guess, though, I'd say it's got something to do with Papyrus."
                    ]
                  : SAVE.data.n.plot === 72
                  ? [
                       "<32>{#p/basic}{#npc/a}* If he DOES open a Grillby's on the new homeworld...",
                       ...(world.population < 4
                          ? [ "<32>* We can only hope the travelers there are nicer.", "<32>* ... you're debatable." ]
                          : [
                               "<32>* We can only hope there isn't too much water around.",
                               "<32>* ... that'd be dangerous."
                            ])
                    ]
                  : papreal() || world.dead_dog
                  ? [ "<32>{#p/basic}{#npc/a}* Something feels off." ]
                  : world.population < 4
                  ? [ "<32>{#p/basic}{#npc/a}* At least they're not out there killing everybody." ]
                  : [ "<32>{#p/basic}{#npc/a}* I want to be like UNDYNE when I grow up, too!\n* Hoo hoo hoo!" ]
         ),
         l_cupjake: pager.create(
            0,
            () =>
               SAVE.data.n.plot === 72
                  ? [
                       "<32>{#p/basic}{#npc/a}* Maybe now that we're free, that sweet lady will finally leave.",
                       "<32>* Then, I shall come to know the contents of that {@fill:#f00}odd book{@fill:#fff} for myself..."
                    ]
                  : [
                       "<32>{#p/basic}{#npc/a}* There's an {@fill:#f00}odd book{@fill:#fff} that appears and disappears here at random...",
                       "<32>* But that sweet lady always seems to be in the way of it!",
                       "<32>* Do you know anything that could scare her off?"
                    ],
            () =>
               SAVE.data.n.plot === 72
                  ? [ "<32>{#p/basic}{#npc/a}* Soon, I tell you.", "<32>* Soon." ]
                  : [ "<32>{#p/basic}{#npc/a}* I know what you're thinking.", "<32>* Don't try it." ]
         ),
         l_kakurolady: pager.create(
            0,
            () =>
               SAVE.data.n.plot === 72
                  ? [
                       "<32>{#p/basic}{#npc/a}* (Cough, cough.)",
                       "<32>* This will be our news feed's last issue...",
                       "<32>* Why don't we just put a big \"THE END\" on the front and call it a day?"
                    ]
                  : [
                       "<32>{#p/basic}{#npc/a}* (Cough, cough.)",
                       "<33>* Back in school, teachers gave us spot-the-difference puzzles when we ran out of work.",
                       "<32>* I thought they were a waste of time.\n* But look at me now...",
                       "<33>* I'm the number-one spot-the- difference artist on the outpost!"
                    ],
            () =>
               SAVE.data.n.plot === 72
                  ? [
                       "<32>{#p/basic}{#npc/a}* (Cough, cough.)",
                       "<32>* Heck, why don't we just quit right here and now?"
                    ]
                  : [
                       "<32>{#p/basic}{#npc/a}* (Cough, cough.)",
                       "<33>* Trust me, kid.\n* You don't really want this job."
                    ]
         ),
         l_librarian: pager.create(
            0,
            () =>
               SAVE.data.n.plot === 72
                  ? [
                       "<32>{#p/basic}{#npc/a}* Welcome to the librarby.",
                       ...(world.population === 0
                          ? [ "<32>* If you beat up anyone else, you'll be really sorry." ]
                          : [ "<32>* This is the last day we'll be open, so make as much noise as you want." ])
                    ]
                  : [
                       "<32>{#p/basic}{#npc/a}* Welcome to the librarby.\n* Actually, that name started as a spelling mistake.",
                       "<32>* Now everybody calls it that..."
                    ],
            () =>
               SAVE.data.n.plot === 72
                  ? world.population === 0
                     ? [ "<32>{#p/basic}{#npc/a}* You have feelings, don't you?" ]
                     : [ "<32>{#p/basic}{#npc/a}* Not that anyone would've stopped you before..." ]
                  : [ "<32>{#p/basic}{#npc/a}* This is what happens when you're too lazy to fix simple problems." ]
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
                          "<32>{#p/basic}{#npc/a}* I love working the news feed.",
                          "<32>* Lately, though, I've had to report on something terrible...",
                          "<32>* I'm starting to second-guess my life choices."
                       ]
                  : SAVE.data.b.killed_mettaton
                  ? [
                       "<32>{#p/basic}{#npc/a}* I love working the news feed.",
                       "<32>* Only problem is, if a celebrity dies...",
                       "<32>* That's all anyone ever wants me to report on for a while."
                    ]
                  : [
                       "<32>{#p/basic}{#npc/a}* I love working the news feed.",
                       "<32>* There's so little to report that we just fill it with comics and games."
                    ],
            () =>
               world.dead_dog || world.population < 6 || SAVE.data.b.killed_mettaton
                  ? [ "<32>{#p/basic}{#npc/a}* Have you ever felt like your life is just running in circles?" ]
                  : [ "<32>{#p/basic}{#npc/a}* Have you ever felt like you're just missing something?" ]
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
                  ? [ "<32>{#p/basic}{#npc/a}* Sorry, champ.\n* Now's not a good time." ]
                  : 30 <= SAVE.data.n.plot
                  ? [
                       "<32>{#p/basic}{#npc/a}* I heard that dog is a 4-D poker player...",
                       "<32>* Has it ever won a game?\n* I wonder."
                    ]
                  : [
                       [
                          "<32>{#p/basic}{#npc/a}* A dog just rushed in here, filled with inspiration.",
                          "<32>* It kept trying to create a hologram that expressed its own emotions...",
                          "<32>* But, as it did, it kept getting more excited about the creation...",
                          "<32>* Its neck got longer and longer, and it added more and more light, until...",
                          "<32>* It was rather sad to watch, but I couldn't turn away."
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
                     ? [ "<32>{#p/basic}{#npc/a}* Don't worry, champ.\n* Most of them have probably forgiven ya by now." ]
                     : [ "<32>{#p/basic}{#npc/a}* Don't worry, champ.\n* I've got this covered for ya." ]
                  : roomKills().s_greater > 0
                  ? [ "<32>{#p/basic}{#npc/a}* ..." ]
                  : 30 <= SAVE.data.n.plot
                  ? [ "<32>{#p/basic}{#npc/a}* The day that dog wins a game of 4-D poker, we're ALL doomed." ]
                  : [
                       [ "<32>{#p/basic}{#npc/a}* Too bad for the dog, huh?" ],
                       [ "<32>{#p/basic}{#npc/a}* So sad for the dog, huh?" ],
                       [ "<32>{#p/basic}{#npc/a}* Have you seen it?" ],
                       [ "<32>{#p/basic}{#npc/a}* Despicable." ]
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
                          "<32>{#p/basic}{#npc/a}* Tch-\n* Unbelievable-",
                          "<32>* I can't believe I'm gonna be working with that guy-",
                          "<32>* At least our sales figures should finally go up-"
                       ]
                  : roomKills().s_pacing > 0
                  ? [ "<32>{#p/basic}{#npc/a}* Tch-\n* Sorry, I don't sell to people like you-" ]
                  : SAVE.data.b.killed_mettaton
                  ? [
                       "<32>{#p/basic}{#npc/a}* Man-\n* Sucks what happened to Mettaton, y'know-",
                       "<32>* But I'm willing to sell off my special edition moon rocks for the occasion-",
                       "<32>* Unlike that guy, who just lowers the prices on his basic rocks instead-"
                    ]
                  : [
                       "<32>{#p/basic}{#npc/a}* Tch-\n* Unbelievable-",
                       "<32>* I got authentic moon rocks straight from a moon, unlike his phoned in crap-",
                       "<32>* That guy's rocks don't look anything like a moon-"
                    ],
            () =>
               SAVE.data.n.plot === 72
                  ? world.population < 6
                     ? [ "<32>{#p/basic}{#npc/a}* Yeah, I have you to thank-" ]
                     : [ "<32>{#p/basic}{#npc/a}* It's just good for business-" ]
                  : roomKills().s_pacing > 0
                  ? [ "<32>{#p/basic}{#npc/a}* Tch-\n* Sorry, I don't sell to people like you-" ]
                  : [ "<32>{#p/basic}{#npc/a}* The nerve of that guy-" ]
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
                          "<32>{#p/basic}{#npc/a}* Pfft~\n* Shaw man~",
                          "<32>* It's good to finally be working together on this thing~",
                          "<32>* Now we'll both be sellin' my authentic moon rocks~"
                       ]
                  : roomKills().s_pacing > 0
                  ? [ "<32>{#p/basic}{#npc/a}* Pfft~\n* No moon rocks for you~" ]
                  : SAVE.data.b.killed_mettaton
                  ? [
                       "<32>{#p/basic}{#npc/a}* Real shame what happened to the start of the underground~",
                       "<32>* Don't worry though~\n* Unlike that dude to my left, I won't raise my prices~",
                       "<32>* In fact, my moon rocks are going on sale~"
                    ]
                  : [
                       "<32>{#p/basic}{#npc/a}* Pfft~\n* Shaw man~",
                       "<32>* That dude to my left be sellin' phoney baloney moon rocks, bruh~",
                       "<32>* Don't believe a word he says~"
                    ],
            () =>
               SAVE.data.n.plot === 72
                  ? world.population < 6
                     ? [ "<32>{#p/basic}{#npc/a}* Shaw man~\n* Sorry it had to come to this~" ]
                     : [ "<32>{#p/basic}{#npc/a}* Yeah, his were the real fake moon rocks all along~" ]
                  : roomKills().s_pacing > 0
                  ? [ "<32>{#p/basic}{#npc/a}* Pfft~\n* No moon rocks for you~" ]
                  : [ "<32>{#p/basic}{#npc/a}* The gall o' that dude~" ]
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
                       "<32>{#p/basic}{#npc/a}* Isn't my little Cinnamon just the cutest?",
                       "<32>* Bun-buns are so adorable...\n* Tee hee!"
                    ],
            () =>
               SAVE.data.n.plot === 72
                  ? [ "<32>{#p/basic}{#npc/a}* It's not long now, bun-bun..." ]
                  : SAVE.data.b.killed_mettaton
                  ? [ "<32>{#p/basic}{#npc/a}* I wonder what could have happened..." ]
                  : papreal() || world.dead_canine
                  ? [ "<32>{#p/basic}{#npc/a}* I wonder where they are..." ]
                  : [ "<32>{#p/basic}{#npc/a}* Bun-bun-bun-bun-bun..." ]
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
               ? [ "<32>{#p/basic}{#npc/a}* Ice Wolf has not seen any skeletons today.", "<32>* Ice Wolf is concerned." ]
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
                    "<32>{#p/basic}{#npc/a}* Ice Wolf is wondering why Ice Wolf is Ice Wolf when there is no ice to throw around.",
                    "<32>* Ice Wolf is confused."
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
                       "<32>{#p/basic}{#npc/a}* Those MTT-brand toothbrushes are so freakin' brittle.",
                       "<32>* Thing got crushed in my hands before I could even start!"
                    ],
            () =>
               SAVE.data.n.plot === 72
                  ? [
                       "<32>{#p/basic}{#npc/a}* I asked Papyrus about his floss collection, and he said he'd help me start one, too.",
                       "<32>* Isn't he the best?"
                    ]
                  : SAVE.data.b.killed_mettaton
                  ? [ "<32>{#p/basic}{#npc/a}* Guess I'll have to use an actually decent toothbrush from now on." ]
                  : papreal()
                  ? [ "<32>{#p/basic}{#npc/a}* Hmm...\n* I wonder how skeletons brush their teeth." ]
                  : world.popmax(0) - world.population > 4
                  ? [
                       "<32>{#p/basic}{#npc/a}* Hanging out by the bar tells you a lot about this place...\n* For better or worse."
                    ]
                  : [ "<32>{#p/basic}{#npc/a}* Then again, it was the cheapest option..." ]
         ),
         t_kabakk: pager.create(
            0,
            () =>
               SAVE.data.n.plot === 72
                  ? world.population < 4
                     ? [
                          "<32>{#p/basic}{#npc/a}* HEY!",
                          "<32>* ... you're pretty weird.",
                          "<32>* You put us through hell, then went through hell to save us all.",
                          "<32>* I don't really know why.",
                          "<32>* ...",
                          "<32>* ...",
                          "<32>* I DON'T KNOW HOW TO HANDLE TO THIS SITUATION!\n* YEAH!"
                       ]
                     : [
                          "<32>{#p/basic}{#npc/a}* HEY!",
                          "<32>* ... you're pretty cool.",
                          "<32>* Thanks for going through hell to save us all back there.",
                          "<32>* That was a real stand-up move.",
                          "<32>* ...",
                          "<32>* ...",
                          "<32>* ALL HAIL THE NEW AUTHORITY!\n* YEAH!"
                       ]
                  : world.meanie
                  ? [
                       "<32>{#p/basic}{#npc/a}* HEY!",
                       "<32>* What you been up to, huh KID?",
                       "<32>* You've got an awfully criminal look on your FACE...",
                       "<32>* ...",
                       "<32>* ...",
                       "<32>* Respect my AUTHORITY!\n* YEAH!"
                    ]
                  : [
                       "<32>{#p/basic}{#npc/a}* HEY!",
                       "<32>* You think you can just stand there and stare at ME?",
                       "<32>* Well, I've got some bad news for you, PAL.",
                       "<32>* I'm an officer of the LAW.",
                       "<32>* So, UH...",
                       "<32>* Respect my AUTHORITY!\n* YEAH!"
                    ],
            () =>
               SAVE.data.n.plot === 72
                  ? world.population < 4
                     ? [ "<32>{#p/basic}{#npc/a}* ..." ]
                     : [ "<32>{#p/basic}{#npc/a}* HAIL it, PAL." ]
                  : [ "<32>{#p/basic}{#npc/a}* Respect it, PAL." ]
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
                       "<32>{#p/basic}{#npc/a}* Hey hey, nothing's ever going to change in my life!",
                       "<32>* Ha... ha..."
                    ],
            () =>
               SAVE.data.n.plot === 72
                  ? world.population < 2
                     ? [ "<32>{#p/basic}{#npc/a}* I still think you're cool...!\n* Please don't hurt me." ]
                     : [ "<32>{#p/basic}{#npc/a}* I love you...!" ]
                  : papreal() || world.dead_canine || SAVE.data.b.killed_mettaton
                  ? [ "<32>{#p/basic}{#npc/a}* Maybe it's just my imagination." ]
                  : [ "<32>{#p/basic}{#npc/a}* Or maybe I'm just crazy." ]
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
                       "<32>* Thaaaaaat's politics!"
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
                       "<32>* Thaaaaaat's politics!"
                    ]
                  : [
                       "<32>{#p/basic}{#npc/a}* This town is always so dreary.",
                       "<32>* But, if things keep going the way they are, maybe that'll change.",
                       "<32>* Is that politics?"
                    ],
            () =>
               SAVE.data.n.plot === 72
                  ? [ "<32>{#p/basic}{#npc/a}* You see?\n* Politics isn't all bad..." ]
                  : SAVE.data.b.killed_mettaton || papreal() || world.popmax(0) - world.population > 4
                  ? [ "<32>{#p/basic}{#npc/a}* Politics..." ]
                  : world.trueKills > 0 || SAVE.data.n.bully > 0
                  ? [ "<32>{#p/basic}{#npc/a}* Politics." ]
                  : [ "<32>{#p/basic}{#npc/a}* Politics?" ]
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
                       "<32>{#p/basic}{#npc/a}* Long ago, I heard they split the town into two halves.",
                       "<32>* I wonder what it looked like before...?"
                    ],
            () =>
               SAVE.data.n.plot === 72
                  ? [ "<32>{#p/basic}{#npc/a}* Thanks for bringing us back." ]
                  : SAVE.data.b.killed_mettaton
                  ? [ "<32>{#p/basic}{#npc/a}* It's too bad we can't just magically bring them back." ]
                  : papreal()
                  ? [ "<32>{#p/basic}{#npc/a}* It's too bad we can't just magically fix these things." ]
                  : [ "<32>{#p/basic}{#npc/a}* We may never know." ]
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
                  ? [ "<32>{#p/basic}{#npc/a}* Just now, I felt my smile falter for a moment.", "<32>* What's wrong?" ]
                  : [
                       "<32>{#p/basic}{#npc/a}* We all know things haven't gone how we'd hoped, but we smile anyway.",
                       "<32>* Why?",
                       "<32>* This is our reality, so why be morose about it?"
                    ],
            () =>
               SAVE.data.n.plot === 72
                  ? world.population < 2
                     ? [ "<32>{#p/basic}{#npc/a}* Smile smile." ]
                     : [ "<32>{#p/basic}{#npc/a}* Smile smile!" ]
                  : papreal() || SAVE.data.b.killed_mettaton
                  ? [ "<32>{#p/basic}{#npc/a}* Smile smile?" ]
                  : [ "<32>{#p/basic}{#npc/a}* Smile smile." ]
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
                       "<32>{#p/basic}{#npc/a}* Everyone is always laughing and cracking jokes, trying to forget our modern crises...",
                       "<32>* Dreariness.\n* Crowding.\n* Lack of a homeworld.",
                       "<32>* I would join them, but I just don't feel like being funny."
                    ],
            () =>
               SAVE.data.n.plot === 72
                  ? world.population < 2
                     ? [ "<32>{#p/basic}{#npc/a}* Sorry.\n* That wasn't funny." ]
                     : [
                          "<32>{#p/basic}{#npc/a}* Sorry.\n* I guess you could say...",
                          "<32>* That joke was a little too \"cheesy.\""
                       ]
                  : world.dead_dog || world.dead_skeleton || world.population < 6 || SAVE.data.b.killed_mettaton
                  ? [ "<32>{#p/basic}{#npc/a}* And worse..." ]
                  : [ "<32>{#p/basic}{#npc/a}* At least I'm not making puns." ],
            () =>
               SAVE.data.n.plot === 72
                  ? world.population < 2
                     ? [ "<32>{#p/basic}{#npc/a}* You should leave before I stop being nice to you." ]
                     : [ "<32>{#p/basic}{#npc/a}* Yes.\n* That was a pun.\n* I'm a pun mouse now." ]
                  : world.dead_dog || world.dead_skeleton || world.population < 6 || SAVE.data.b.killed_mettaton
                  ? [ "<32>{#p/basic}{#npc/a}* And worse still..." ]
                  : [ "<32>{#p/basic}{#npc/a}* For now." ]
         ),
         t_zorren: pager.create(
            0,
            () => [
               "<32>{#p/basic}{#npc/a}* (Oh, hey, it's me, Zorren.)",
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
                          "<32>* (You uh, got a problem with our, uh, police force, or...?)",
                          "<32>* (...)",
                          "<32>* (Yeah, you know, uh, I don't really like you all that much.)",
                          "<32>* (There's just, something off, particularly about you.)"
                       ]
                  : [
                       ...(SAVE.data.b.oops
                          ? [
                               "<32>* (You uh, got a problem with our, uh, police force, or...?)",
                               "<32>* (No?)\n* (Hey, thanks for uh, not doing that.)"
                            ]
                          : [
                               "<32>* (Y'know, you seem like someone who likes to show respect.)",
                               "<32>* (So, thanks for, uh, doing that.)"
                            ]),
                       ...(SAVE.data.b.s_state_capstation
                          ? []
                          : ((SAVE.data.b.s_state_capstation = true),
                            [
                               "<32>* (In fact...)",
                               "<32>* (Here, kid.)\n* (Have a key, on us.)",
                               "<32>{#s/equip}{#p/human}* (The Rusty Key was added to your keyring.)",
                               "<32>* (Check your CELL to see all acquired keys.)",
                               "<32>{#p/basic}{#npc/a}* (We've, uh, got an armory somewhere, I think.)"
                            ])),
                       ...(SAVE.data.b.oops
                          ? [
                               "<32>* (Psst...)\n* (Just between us, Kabakk and I built this station ourselves.)",
                               "<32>* (Pretty cool, huh?)"
                            ]
                          : [
                               "<32>* (Psst...)\n* (Just between us, Kabakk and I built this station ourselves.)",
                               "<32>* (Pretty cool, huh?)"
                            ])
                    ])
            ],
            () =>
               SAVE.data.n.plot === 72
                  ? world.population < 4
                     ? [ "<32>{#p/basic}{#npc/a}* (Do better, my friend.)\n* (Do better.)" ]
                     : [ "<32>{#p/basic}{#npc/a}* (Carry on, my friend.)\n* (Carry on.)" ]
                  : world.meanie
                  ? [ "<32>{#p/basic}{#npc/a}* (Get outta here.)" ]
                  : SAVE.data.b.oops
                  ? [ "<32>{#p/basic}{#npc/a}* (Yeah, we're not real police.)" ]
                  : [
                       "<32>{#p/basic}{#npc/a}* (We may not be real police, but people like you are worth protecting and serving.)"
                    ]
         )
      },
      objinter: {
         ctower0: () => [
            "<32>{#p/human}* （你看了下終端。）",
            ...(SAVE.data.b.svr
               ? [
                    "<32>{#p/human}* (The note describes reducing the total to zero by adding or subtracting powers of ten.)"
                 ]
               : [
                    "<32>{#p/basic}* 顯示器側面釘著一份說明...",
                    "<33>* 上面的字跡全是狂草，你根本\n  看不清楚。\n* 除了一個字，“零”。"
                 ])
         ],
         ctower1: () =>
            SAVE.data.b.svr
               ? [ "<32>{#p/human}* (But you already completed this puzzle beforehand.)" ]
               : SAVE.data.n.plot === 72
               ? [ "<32>{#p/basic}* The terminal's unlocked state is now permanent." ]
               : [ "<32>{#p/basic}* The terminal is now in an unlocked state." ],
         microwave0: [ "<32>{#p/human}* (You look behind the microwave...)", "<32>{#p/basic}* Nothing useful here." ],
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
               : [ "<32>{#p/human}* (You look behind the microwave...)", "<32>{#p/basic}* Nothing new back here." ],
         microwave3: () =>
            SAVE.data.b.svr
               ? [ "<32>{#p/human}* (But you didn't notice anything of note about this appliance.)" ]
               : [
                    "<32>{#p/basic}* A standard-issue CITADEL dielectric heater, circa 260X.",
                    "<32>* It's a microwave.\n* Can't be over a decade old."
                 ],
         microwave4: () => [
            "<32>{#p/basic}* It seems to be projecting some kind of gravity field.",
            ...(SAVE.data.b.oops ? [ "<32>{#p/basic}* I wonder... if there's a switch somewhere..." ] : [])
         ],
         papmail1: () =>
            SAVE.data.b.svr
               ? [ "<32>{#p/human}* (But you didn't have any mail to send.)" ]
               : [
                    "<32>{#p/basic}* 信箱上標註著“PAPYRUS”。",
                    choicer.create("* （看裡邊嗎？）", "是", "否")
                 ],
         papmail2: pager.create(
            0,
            () =>
               SAVE.data.n.plot === 72
                  ? [
                       "<32>{#p/human}* （你往裡看了一眼...）",
                       world.runaway
                          ? "<32>{#p/basic}* It's even emptier than before."
                          : "<32>{#p/basic}* It's not empty?"
                    ]
                  : [
                       "<32>{#p/human}* （你往裡看了一眼...）",
                       "<32>{#p/basic}* 是空的。",
                       ...(31 <= SAVE.data.n.plot &&
                       SAVE.data.n.plot_date < 0.1 &&
                       SAVE.data.n.state_starton_papyrus !== 1
                          ? [
                               "<18>{#p/papyrus}{#f/0}HOW NICE OF YOU TO CHECK MY MAIL!",
                               "<18>{#p/papyrus}{#f/4}THANKFULLY, I'VE ALREADY COLLECTED IT ALL."
                            ]
                          : [])
                    ],
            () =>
               SAVE.data.n.plot === 72
                  ? [
                       "<32>{#p/human}* （你往裡看了一眼...）",
                       world.runaway
                          ? "<32>{#p/basic}* It's even emptier than before."
                          : "<32>{#p/basic}* It's not empty?"
                    ]
                  : [ "<32>{#p/human}* （你往裡看了一眼...）", "<32>{#p/basic}* 是空的。" ]
         ),
         papmail3: [ "<32>{#p/human}* (You decide not to look.)" ],
         puzzle3: () => [
            "<32>{#p/human}* （你看了下終端。）",
            ...(SAVE.data.b.svr
               ? [ "<32>{#p/human}* (The modification log describes the completed state of the puzzle.)" ]
               : [
                    "<32>{#p/basic}* 屏幕上顯示著一條歷史修改記錄。",
                    "<32>* “圖案謎題已解決！”\n* “你可以離開了。”"
                 ])
         ],
         puzzlechip: () =>
            SAVE.data.b.svr
               ? [ "<32>{#p/human}* (But you already completed this puzzle beforehand.)" ]
               : [ "<32>{#p/basic}* The terminal is now in an unlocked state." ],
         spagtable0: [ "<32>{#p/basic}* 一個沒用過的盤子。" ],
         spagtable1: [
            "<32>{#p/human}* (You gaze upon the mouth- watering spaghetti.)",
            "<32>{#p/human}* (It appears to be just beyond your reach.)"
         ],
         spagtable2: [ "<32>{#p/human}* （你拿走了意大利麵。）" ],
         spagtable2b: [ "<32>{#p/human}* (You're carrying too much to take that.)" ],
         spagtable3: () =>
            SAVE.data.b.svr
               ? [ "<32>{#p/human}* (You feel appreciative towards this plate for the food it served you.)" ]
               : world.darker
               ? [ "<32>{#p/basic}* Why bother.\n* It's just a simple plate." ]
               : [ "<32>{#p/basic}* Once the home of a truly out- of-this-world creation." ],
         xtower1: pager.create(0, () => [
            "<32>{#p/human}* （你看了下終端。）",
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
                    [ "<25>{#p/asriel1}{#f/17}* Don't worry, Frisk.\n* The new homeworld will have plenty of games." ]
                 ][Math.min(asrielinter.xtower1++, 2)]
               : [
                    "<32>{#p/basic}* It's a game terminal...",
                    ...(SAVE.data.n.plot === 72 || world.postnoot
                       ? [ "<32>{#p/basic}* The power supply has been cut." ]
                       : [ "<32>{#p/basic}* \"Shoot targets as fast as you can! Use [Z] to shoot.\"" ])
                 ])
         ])
      },
      papbooks1: pager.create(
         0,
         () =>
            SAVE.data.b.svr
               ? [ "<32>{#p/human}* (The books on this bookshelf consist of puzzler's guides and children's stories.)" ]
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
               ? [ "<32>{#p/human}* (The books on this bookshelf consist of puzzler's guides and children's stories.)" ]
               : [ "<32>{#p/basic}* Complex manuals and children's books." ]
      ),
      papbooks2: pager.create(
         1,
         [
            "<32>{#p/human}* （你取下了一本書...）",
            "<32>{#p/basic}* \"The cornerstone of a puzzle's interactive value is the player's affectation.\"",
            "<32>* \"The tacit drive within every player to explore, progress, and complete a given task.\"",
            "<32>* \"A puzzle that challenges and engages these motivations will ensure...\"",
            "<32>* \"The player remains focused and on task until the very end.\"",
            "<32>{#p/human}* （你把書放回原處。）"
         ],
         [
            "<32>{#p/human}* （你取下了一本書...）",
            "<32>{#p/basic}* \"'Peek-A-Boo!' said the human, appearing from behind the wall.\"",
            "<32>* \"The fluffy bunny, surprised, looked at the human excitedly.\"",
            "<32>* \"Then, the human moved away... no longer able to see them, the fluffy bunny was sad.\"",
            "<32>* \"It shook, thinking about how lonely it'd be.\"",
            "<32>* \"It wanted to cry, thinking it'd been abandoned for all eternity...\"",
            "<32>* \"But then, the human appeared once again, and all was right with the world.\"",
            "<32>* \"The human and the bunny gave each other a big, fluffy hug.\"",
            "<32>{#p/human}* （你把書放回原處。）"
         ],
         () =>
            world.runaway
               ? [
                    "<32>{#p/human}* （你取下了一本書...）",
                    "<23>{#p/papyrusnt}\"DEAR DAIRY, THE FORCE FIELD HAS BEEN DESTROYED.\"",
                    "<23>\"FRISK, THE HUMAN WHO CAME TO THE OUTPOST JUST A FEW DAYS AGO...\"",
                    "<23>\"IS NOW THE SUBJECT OF FEAR AMONG EVERYONE ON THE OUTPOST.\"",
                    "<23>\"WE'RE ALL LEAVING RIGHT AWAY, BEFORE THEY WAKE UP.\"",
                    "<23>\"STILL, A PART HOPES THEY FIND THEIR WAY OFF THE OUTPOST, TOO.\"",
                    "<23>\"EVERYONE ELSE JUST SEEMS CONTENT LEAVING THEM TO DIE.\"",
                    "<32>{#p/human}* （你把書放回原處。）"
                 ]
               : SAVE.data.n.plot === 72
               ? [
                    "<32>{#p/human}* （你取下了一本書...）",
                    "<23>{#p/papyrusnt}\"DEAR DAIRY, THE FORCE FIELD HAS BEEN DESTROYED.\"",
                    "<23>\"FRISK, THE HUMAN WHO CAME TO THE OUTPOST JUST A FEW DAYS AGO...\"",
                    "<23>\"TOOK ON IMPOSSIBLE ODDS TO SAVE US FROM DESTRUCTION.\"",
                    "<23>\"MAYBE THIS IS WHAT'LL INSPIRE SANS TO MOVE UP IN THE WORLD.\"",
                    "<23>\"I ONLY MENTION IT BECAUSE, I NEVER KNEW HIS SENTRY JOB...\"",
                    "<23>\"MEANT DOING SO LITTLE ACTUAL WORK.\"",
                    "<32>{#p/human}* （你把書放回原處。）"
                 ]
               : [
                    "<32>{#p/human}* （你取下了一本書...）",
                    "<23>{#p/papyrusnt}\"DEAR DAIRY, SANS HAS JUST BEEN MADE AN OFFICIAL ROYAL SENTRY.\"",
                    "<23>\"AT FIRST, I WAS CONFUSED AT HIM...\"",
                    "<23>\"AFTER ALL, WHY WOULD SOMEBODY SO LAZY WANT TO TAKE THIS ON?\"",
                    "<23>\"WELL, I DECIDED NOT TO QUESTION IT.\"",
                    "<23>\"THE TRUTH IS, I COULDN'T BE MORE PROUD OF HIM!!!\"",
                    "<23>\"ONLY TIME WILL TELL WHAT GREAT THINGS THIS BRINGS FORTH.\"",
                    "<32>{#p/human}* （你把書放回原處。）"
                 ]
      ),
      papcomputer1: pager.create(
         0,
         () => [
            ...(roomready()
               ? [
                    "<18>{#p/papyrus}THE OUTERNET!\nI'M QUITE POPULAR THERE.",
                    "<18>{#f/4}I'M JUST A DOZEN AWAY...",
                    "<18>{#f/0}FROM A DOUBLE- DIGIT FOLLOWER COUNT!"
                 ]
               : []),
            SAVE.data.b.svr
               ? "<32>{#p/human}* (You move towards the computer...)"
               : "<32>{#p/basic}* The computer's web browser is opened to a social media site.",
            choicer.create("* (Log in to Papyrus's account?)", "是", "否")
         ],
         () => [
            SAVE.data.b.svr
               ? "<32>{#p/human}* (You move towards the computer...)"
               : "<32>{#p/basic}* The computer's web browser is opened to a social media site.",
            choicer.create("* (Log in to Papyrus's account?)", "是", "否")
         ]
      ),
      papcomputer2: [ "<32>{#p/human}* (You decide not to log in.)" ],
      papcomputer3: {
         a: "COOLSKELETON95",
         b: "-2 FOLLOWERS",
         c: "THIS ACCOUNT\nIS OWNED BY\nTHE GREAT\nPAPYRUS.\nHIGH-QUALITY\nPOSTS ONLY!",
         d: "- NEWS -",
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
                    a: "HOWDY!",
                    b: "SAVE YOURSELVES...",
                    c: ""
                 }
               : SAVE.data.n.plot === 72
               ? {
                    a: "HOWDY!",
                    b: "FAILED TO CONNECT...",
                    c: ""
                 }
               : {
                    a: "HOWDY!",
                    b: "SHARE YOUR THOUGHTS...",
                    c: ""
                 },
         () =>
            world.runaway
               ? {
                    a: "ALPHYS",
                    b: "TODAY",
                    c: "< message deleted >"
                 }
               : SAVE.data.n.plot === 72
               ? {
                    a: "SYSTEM",
                    b: "TODAY",
                    c: "The OuterNet is closed."
                 }
               : SAVE.data.n.plot < 34
               ? {
                    a: "NAPSTABLOOK22",
                    b: "TODAY",
                    c: "this is why i never go\nonline anymore... nothing\nmeaningful ever happens"
                 }
               : world.genocide
               ? {
                    a: "NAPSTABLOOK22",
                    b: "TODAY",
                    c: "but i'm a ghost..."
                 }
               : world.dead_skeleton
               ? {
                    a: "NAPSTABLOOK22",
                    b: "TODAY",
                    c: "umm... i'll just keep\nworking on this mix..."
                 }
               : {
                    a: "lazybones.",
                    b: "TODAY",
                    c: "let's just hope he\ndoesn't capture our SOULs~\n*finger guns*",
                    d: true
                 },
         () =>
            world.runaway
               ? {
                    a: "lazybones.",
                    b: "TODAY",
                    c: "< message deleted >",
                    d: true
                 }
               : SAVE.data.n.plot === 72
               ? {
                    a: "ALPHYS",
                    b: "TODAY",
                    c: "whoops, i forgot to shut\noff the server"
                 }
               : SAVE.data.n.plot < 34
               ? {
                    a: "STRONGFISH91",
                    b: "YESTERDAY",
                    c: "uh... dont you say that\nEVERY day, Papyrus?"
                 }
               : world.genocide
               ? {
                    a: "STRONGFISH91",
                    b: "TODAY",
                    c: "stay outta this blooky.\ni dont want you getting\nhurt too."
                 }
               : world.dead_skeleton
               ? {
                    a: "STRONGFISH91",
                    b: "TODAY",
                    c: "papyrus is gone blooky.\nthat human is going to\nPAY for what they did."
                 }
               : {
                    a: "STRONGFISH91",
                    b: "TODAY",
                    c: "well no...\nbut he did capture all of\nour hearts! FUHUHU!!"
                 },
         () =>
            world.runaway
               ? {
                    a: "COOLSKELETON95",
                    b: "TODAY",
                    c: "< message deleted >"
                 }
               : SAVE.data.n.plot === 72
               ? {
                    a: "_Sp4ceAdv3ntur3r_",
                    b: "TODAY",
                    c: "< Username Update >\nWas: _K1ll3rMann3qu1n_\nNow: _Sp4ceAdv3ntur3r_"
                 }
               : SAVE.data.n.plot < 34
               ? {
                    a: "COOLSKELETON95",
                    b: "YESTERDAY",
                    c: "TODAY'S THE DAY I FINALLY\nCAPTURE A HUMAN!\nI CAN FEEL IT IN MY BONES!"
                 }
               : world.genocide
               ? {
                    a: "NAPSTABLOOK22",
                    b: "TODAY",
                    c: "umm... is there anything\ni can do to help? things\nare getting worse..."
                 }
               : {
                    a: "NAPSTABLOOK22",
                    b: "TODAY",
                    c: "so... did papyrus capture\na human yet? or..."
                 }
      ] as (() => { a: string; b: string; c: string; d?: boolean })[],
      papcomputer5: () =>
         world.runaway
            ? [ "FRISK", "DON'T YOU", "DARE COME", "AFTER US" ]
            : SAVE.data.n.plot === 72
            ? [ "SORRY", "BUT WE'RE", "OFFLINE", "LMAO" ]
            : [ "REFRESH", "MESSAGES", "遊戲設定", "LOG OUT" ],
      papcouch0: () =>
         SAVE.data.b.svr
            ? [ "<32>{#p/human}* (You can't seem to find anything in the couch.)" ]
            : [ "<32>{#p/basic}* It's been cleaned out." ],
      papcouch1: pager.create(
         0,
         () => [
            "<32>{#p/human}* (You hear a jangling sound within the couch.)",
            SAVE.data.b.svr
               ? "<32>{#p/human}* (It seems a cache of coins was left here...)"
               : "<32>{#p/basic}* There are a bunch of loose coins inside...",
            choicer.create("* (Take the coins?)", "是", "否")
         ],
         () => [
            SAVE.data.b.svr
               ? "<32>{#p/human}* (The coins within haven't moved from where they were.)"
               : "<32>{#p/basic}* The coins are still here.",
            choicer.create("* (Take the coins?)", "是", "否")
         ]
      ),
      papcouch2: [ "<32>{#p/human}* (You decide not to take anything.)" ],
      papcouch3: [ "<32>{#p/human}* (You found 10G.)" ],
      papcouch3a: [
         "<18>{#p/papyrus}{#f/1}YOU'RE CLEANING OUT THE COUCH FOR US!?",
         "<18>{#p/papyrus}{#f/5}AND OUT OF NOTHING BUT THE KINDNESS OF YOUR HEART...",
         "<18>{#p/papyrus}{#f/6}SUCH GENEROSITY!!!"
      ],
      paproom1: [
         "<18>{#p/papyrus}{#f/6}WHAT!?\nHOW DID YOU...",
         "<18>{#p/papyrus}{#f/5}YOU APPEARED RIGHT IN FRONT OF ME!"
      ],
      paproom2: [ "<18>{#p/papyrus}{#f/4}HAS SANS BEEN TEACHING YOU ABOUT SHORTCUTS...?" ],
      paproom3: [ "<18>{#p/papyrus}{#f/7}... UGH!\nSTOP DOING THAT!!" ],
      paproom4: [ "<18>{#p/papyrus}{#f/0}YOU'RE ASKING FOR TROUBLE, HUMAN." ],
      paproom5: [ "<18>{#p/papyrus}{#f/4}(SIGH...)" ],
      papdate0: () => [
         SAVE.data.b.flirt_papyrus
            ? "<18>{#p/papyrus}{#f/5}WOWIE, YOU'RE SO EAGER TO DATE..."
            : "<18>{#p/papyrus}{#f/5}WOWIE, YOU'RE SO EAGER TO HANG OUT WITH ME...",
         "<18>{#f/5}THAT YOU'RE TRYING TO GO IN MY HOUSE AHEAD OF ME!",
         "<18>{#f/6}THAT'S DEDICATION!"
      ],
      papdate1x: pager.create(
         0,
         [
            "<18>{#p/papyrus}{#f/0}HELLO, HUMAN!",
            "<18>{#f/5}I HOPE EVERYTHING IS ALRIGHT.",
            "<18>{#f/6}FEEL FREE TO TAKE A WALK AROUND TOWN...",
            "<18>{#f/0}... OR A LOOK IN MY HOUSE!"
         ],
         [ "<18>{#p/papyrus}{#f/4}JUST BE SURE TO AVOID SANS'S ROOM." ]
      ),
      papdate1: () => [
         SAVE.data.b.flirt_papyrus
            ? "<18>{#p/papyrus}SO YOU CAME BACK TO HAVE A DATE WITH ME!"
            : "<18>{#p/papyrus}SO YOU CAME BACK TO SEE ME!",
         ...(world.dead_dog || world.population < 6
            ? [
                 "<18>{#f/0}太好了！！",
                 "<18>{#f/5}TRUTH BETOLD, IT'S BEEN A LITTLE LONELY TODAY...",
                 "<18>{#f/5}A LOT OF PEOPLE ARE STRANGELY ABSENT...",
                 "<18>{#f/0}BUT YOU'RE STILL HERE!!",
                 "<18>{#f/0}THAT MEANS SOMETHING, RIGHT??"
              ]
            : [ "<18>{#f/4}YOU MUST BE REALLY SERIOUS ABOUT THIS..." ]),
         "<18>{#f/5}I'LL HAVE TO TAKE YOU SOMEPLACE REALLY SPECIAL...",
         "<18>{#f/0}A PLACE I LIKE TO SPEND A LOT OF TIME!!!"
      ],
      papdate2: [ "<18>{#p/papyrus}MY HOUSE!!!" ],
      papdate3: pager.create(
         0,
         [ "<18>{#p/papyrus}WELCOME TO SCENIC MY HOUSE!", "<18>ENJOY AND TAKE YOUR TIME!!!" ],
         [ "<18>{#p/papyrus}WHEN YOU'RE DONE, HEAD UPSTAIRS TO MY ROOM!" ]
      ),
      papdate3a: [ "<18>{#p/papyrus}{#f/6}WOW! BEING A GOOD HOST IS A REAL WORKOUT!" ],
      papdate3b: [
         "<18>{#p/papyrus}{#f/5}WOWIE, I CAN'T FEEL MY LEGS...",
         "<18>{#f/0}THAT MUST MEAN I'M BEING A GREAT HOST!!!"
      ],
      papdate4: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}THAT'S MY ROOM!",
            "<18>{#f/4}IF YOU'VE FINISHED LOOKING AROUND, WE COULD GO IN AND...",
            "<18>{#f/4}AND...",
            SAVE.data.b.flirt_papyrus
               ? "<18>{#f/9}DO WHATEVER PEOPLE DO WHEN THEY DATE!"
               : "<18>{#f/9}\"HANG OUT\" LIKE A PAIR OF VERY COOL FRIENDS!",
            choicer.create("* （你要怎麼回答？）", "是", "否")
         ],
         [ "<18>{#p/papyrus}READY?", choicer.create("* （你要怎麼回答？）", "是", "否") ]
      ),
      papdate4a: [ "<18>{#p/papyrus}OKAY, LET'S GO!" ],
      papdate4b: [ "<18>{#p/papyrus}I'LL KEEP WAITING HERE THEN!" ],
      papdate5: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}{#f/5}SO, UM...",
            "<18>{#f/5}IF YOU'VE SEEN EVERYTHING...",
            SAVE.data.b.flirt_papyrus
               ? "<18>{#f/6}DO YOU WANT TO START DATING?"
               : "<18>{#f/6}DO YOU WANT TO START HANGING OUT?",
            choicer.create("* （你要怎麼回答？）", "是", "否")
         ],
         [ "<18>{#p/papyrus}{#f/6}READY TO START?", choicer.create("* （你要怎麼回答？）", "是", "否") ]
      ),
      papdate5a: () => [
         SAVE.data.b.flirt_papyrus
            ? "<18>{#p/papyrus}OKAY!!!\nDATING START!!!"
            : "<18>{#p/papyrus}OKAY!!!\nLET'S HANG TEN!!!"
      ],
      papdate5b: [ "<18>{#p/papyrus}TAKE YOUR TIME, I'LL WAIT FOR YOU." ],
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
         "<15>{#f/20}PREPERATION IS MY (UNOFFICIAL) LAST NAME!"
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
            ? "<15>{#f/25}STEP ONE: PRESS C OR CTRL TO OPEN THE {@fill:#f00}DATING HUD{@fill:#000}."
            : "<15>{#f/25}STEP ONE: PRESS C OR CTRL TO OPEN THE {@fill:#f00}FRIENDSHIP HUD{@fill:#000}."
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
      papdate14: [ choicer.create("* （你要怎麼回答？）", "是", "否") ],
      papdate15a: [ "<15>{#p/papyrus}{#f/12}R-REALLY???", "<15>{#f/11}WOWIE!!!" ],
      papdate15a1: [ "<15>{#f/24}I GUESS THAT MEANS IT'S TIME FOR STEP THREE..." ],
      papdate15b: [ "<15>{#p/papyrus}{#f/21}OH...", "<15>{#f/27}F-FORTUNATELY, IT ONLY SAYS TO ASK." ],
      papdate15c: [ "<15>{#f/24}WELL ANYWAY, IT'S TIME FOR STEP THREE..." ],
      papdate16: [ "<15>{#p/papyrus}{#f/25}STEP THREE: PUT ON NICE CLOTHES TO SHOW YOU CARE." ],
      papdate16a: [ "<15>{#p/papyrus}{#f/24}...", "<15>{#f/24}WAIT A SECOND." ],
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
                 "<15>N-NOOOO!!!\nYOUR {@fill:#003cff}DATING POWER{@fill:#000}...!!!"
              ]
            : [
                 "<15>{#f/22}YOU MIGHT EVEN BE BETTER AT HANGING OUT THAN I AM!!!",
                 "<15>N-NOOOO!!!\nYOUR {@fill:#003cff}FRIENDSHIP POWER{@fill:#000}!!!"
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
                 "<15>{#f/22}N-NOOOO!!!\nYOUR {@fill:#003cff}DATING POWER{@fill:#000}...!!!"
              ]
            : [
                 "<15>{#f/13}LIKE YOUR FRIENDSHIP WAS PREDESTINED~",
                 "<15>{#f/22}N-NOOOO!!!\nYOUR {@fill:#003cff}FRIENDSHIP POWER{@fill:#000}...!!!"
              ])
      ],
      papdate19: [ "<15>{#p/papyrus}{#f/15}NYEH!", "<15>{#f/15}NYEH HEH HEH!!!" ],
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
      papdate21: [ "<15>{#p/papyrus}{#f/15}WHAT DO YOU THINK OF MY SECRET STYLE?" ],
      papdate22: [ choicer.create("* （你要怎麼回答？）", "It rocks", "It sucks") ],
      papdate23a: [ "<15>{#p/papyrus}{#f/13}NO!!!", "<15>{#f/13}A GENUINE COMPLIMENT...!" ],
      papdate23b: [ "<15>{#p/papyrus}{#f/13}NO!!!", "<15>{#f/13}A CRITICAL, YET HONEST REVIEW...!" ],
      papdate24: [
         "<15>{#p/papyrus}{#f/24}HOWEVER...",
         "<15>{#f/20}YOU DON'T TRULY UNDERSTAND THE {@fill:#f00}HIDDEN POWER{@fill:#000} OF THIS OUTFIT!",
         "<15>{#f/26}THEREFORE..."
      ],
      papdate24a: () => [
         "<15>{#f/15}WHAT YOU JUST SAID IS INVALID!!",
         SAVE.data.b.flirt_papyrus
            ? "<15>{#f/15}THIS DATE WON'T ESCALATE ANY FURTHER!"
            : "<15>{#f/15}THIS HANGOUT WON'T ESCALATE ANY FURTHER!",
         "<15>{#f/24}UNLESS...",
         "<15>{#f/20}YOU CAN FIND MY {@fill:#f00}SECRET{@fill:#000}.",
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
                 "<15>{#p/papyrus}{#f/24}IF YOUR {@fill:#f00}LV{@fill:#000} IS THIS HIGH, THEN...",
                 SAVE.data.b.flirt_papyrus
                    ? "<15>{#f/28}YOUR {@fill:#f00}LOVE{@fill:#000} FOR ME MUST BE EVEN GREATER THAN I THOUGHT!"
                    : "<15>{#f/28}YOU'VE GOT MORE EXPERIENCE WITH {@fill:#f00}LOVE{@fill:#000} THAN I THOUGHT!",
                 "<15>{#f/24}STILL, THAT'S YOUR SECRET, NOT MINE.",
                 "<15>{#f/20}TRY AGAIN!"
              ]
            : calcLV() === 2
            ? [
                 "<15>{#p/papyrus}{#f/24}AN {@fill:#f00}LV{@fill:#000} OF TWO?",
                 "<15>{#f/27}DOES THAT MEAN...",
                 ...(SAVE.data.b.flirt_papyrus
                    ? [
                         "<15>{#f/28}YOU HAVE A SECRET SECOND {@fill:#f00}LOVE{@fill:#000} INTEREST...?",
                         "<15>{#f/20}WELL, THIS IS SUPPOSED TO BE ABOUT MY SECRET!!"
                      ]
                    : [
                         "<15>{#f/28}YOUR INTEREST IN ME IS SECRETLY TWO-FOLD?",
                         "<15>{#f/28}THAT DEEP DOWN, YOU {@fill:#f00}LOVE{@fill:#000} ME AS MUCH AS YOU LIKE ME?",
                         "<15>{#f/14}N-NO...!\nI WILL NOT SUCCUMB TO YOUR TRICKS!"
                      ]),
                 "<15>{#f/20}TRY AGAIN!"
              ]
            : SAVE.data.b.oops
            ? [
                 "<15>{#p/papyrus}{#f/24}AN {@fill:#f00}LV{@fill:#000} OF ONE?",
                 "<15>{#f/26}DOES THAT MEAN...",
                 "<15>{#f/28}THAT I'M YOUR ONE TRUE {@fill:#f00}LOVE{@fill:#000}...?",
                 ...(SAVE.data.b.flirt_papyrus
                    ? [ "<15>{#f/14}N-NO...!\nI WILL NOT SUCCUMB TO YOUR TRICKS!" ]
                    : [
                         "<15>{#f/24}WELL, THAT WOULDN'T MAKE SENSE IF WE'RE JUST FRIENDS.",
                         "<15>{#f/14}B-BUT... NO!\nI WILL NOT SUCCUMB TO YOUR TRICKS!"
                      ]),
                 "<15>{#f/20}TRY AGAIN!"
              ]
            : [
                 "<15>{#p/papyrus}{#f/24}AN {@fill:#f00}LV{@fill:#000} OF ZERO?",
                 "<15>{#f/26}OKAY, THAT'S WEIRD.",
                 "<15>{#f/21}SANS TOLD ME A HUMAN'S {@fill:#f00}LOVE{@fill:#000} STARTS AT ONE.",
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
         [ "<15>{#f/27}A PRESENT J-JUST FOR YOU!!!", "<15>{#f/27}A PRESENT FOR US TO SHARE!!!" ][
            (SAVE.data.n.state_papyrus_spaghet + 1) % 2
         ],
         "<15>{#f/10}GO AHEAD!\nOPEN IT!"
      ],
      papdate27: [ choicer.create("* (What will you do?)", "Open it", "Do not") ],
      papdate28: [
         "<15>{#p/papyrus}{#f/21}YOU WON'T EVEN HARM MY DELICATE WRAPPING??",
         "<15>{#f/27}N-NO... THAT TECHNIQUE...",
         "<15>{#f/13}IT'S TOO MUCH!",
         "<15>{#f/14}B-BUT... AHA!\nCOUNTERATTACK!",
         "<15>{#f/15}I'LL OPEN THE PRESENT MYSELF!!"
      ],
      papdate29: [ "<15>{#p/papyrus}{#f/20}DO YOU KNOW WHAT -THIS- IS?" ],
      papdate30: [ choicer.create("* (Do you know what it is?)", "是", "否") ],
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
         ...[ [ "<15>{#f/20}LET'S EAT THIS SPAGHETTI TOGETHER!!!" ], [ "<15>{#f/20}FEAST UPON MY ULTIMATE TECHNIQUE!!!" ] ][
            (SAVE.data.n.state_papyrus_spaghet + 1) % 2
         ]
      ],
      papdate33: [ choicer.create("* (What will you do?)", "Eat it", "Do not") ],
      papdate33a: () => [
         "<32>{#p/human}* (You take a small bite.)\n* (You appear to be blushing from the taste.)",
         "<32>{#p/basic}* It's unbelievable...!",
         ...(SAVE.data.n.state_papyrus_spaghet === 1
            ? [ "<32>{#p/basic}* Papyrus seems to have enjoyed his bite just the same." ]
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
            [ "<15>{#f/10}AND BY EXTENSION, ME!", "<15>{#f/20}MAYBE EVEN MORE THAN I DO!!!" ]
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
      papdate35: [ "<15>{*}{#p/papyrus}{#f/22}AUGH!!!{%15}" ],
      papdate36: [ "<15>{*}{#p/papyrus}{#f/22}URRRGH!!!{%15}" ],
      papdate37: [ "<15>{*}{#p/papyrus}{#f/22}NOOOOOOOO!!!{%15}" ],
      papdate38: () => [
         "<18>{#p/papyrus}{@random:1.1,1.1}HUMAN.\nIT'S CLEAR NOW.",
         SAVE.data.b.flirt_papyrus
            ? "<18>{@random:1.1,1.1}YOU'RE MADLY IN LOVE WITH ME."
            : "<18>{@random:1.1,1.1}YOU'RE COMPLETELY OBSESSED WITH ME.",
         "<99>{@random:1.1,1.1}EVERYTHING YOU DO.\nEVERYTHING YOU SAY.",
         "<18>{@random:1.1,1.1}IT'S ALL BEEN FOR MY SAKE.",
         "<18>{@random:1.1,1.1}HUMAN.\nI WANT YOU TO BE HAPPY, TOO.",
         "<18>{@random:1.1,1.1}IT'S TIME FOR ME TO EXPRESS MY FEELINGS...",
         "<18>{@random:1.1,1.1}IT'S TIME I TOLD YOU THE TRUTH."
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
            : [ "<15>{#f/24}HUMAN, THE TRUTH IS..." ],
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
                    : [ "<15>{#f/10}AND HEY, UNDYNE'S NOT TOO FAR FROM HERE.", "<15>{#f/20}WE CAN HANG OUT WITH HER!" ])
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
                    ? [ "<15>{#f/20}I'LL LET YOU KNOW WHEN I'M READY!" ]
                    : [ "<15>{#f/20}SO LET'S DO IT!\nTOGETHER!!" ])
              ]),
         "<15>{#f/20}NYEH HEH HEH HEH HEH!!!"
      ],
      papdate40: () => [
         "<15>{#f/24}OH, AND IF YOU EVER NEED TO REACH ME...",
         "<15>{#f/10}HERE'S MY {@fill:#f00}PHONE NUMBER{@fill:#000}.",
         "<15>{#f/11}FEEL FREE TO CALL ME AT ANY TIME!",
         ...(SAVE.data.b.flirt_papyrus
            ? [
                 "<15>{#f/24}PLATONICALLY, OF COURSE.",
                 ...(SAVE.data.n.plot < 48
                    ? [ "<15>{#f/10}WELL, GOTTA GO!" ]
                    : [ "<15>{#f/10}WELL, SEE YOU AT UNDYNE'S HOUSE!" ])
              ]
            : SAVE.data.n.plot < 48
            ? [ "<15>{#f/20}WELL, GOTTA GO!" ]
            : [ "<15>{#f/20}WELL, SEE YOU AT UNDYNE'S HOUSE!" ]),
         "<15>{#f/20}NYEH HEH HEH!"
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
         "<18>{#p/papyrus}{#f/0}HUMAN!",
         "<18>{#f/0}THIS NEXT PUZZLE IS ONE OF MY FAVORITES.",
         "<18>{#f/4}IT'S LIKE MY BROTHER'S COTTON BALL COLLECTION...",
         "<18>{#f/0}AN ODDLY SATISFYING SERIES OF OBJECTS!",
         "<18>{#f/9}I'LL -TRY- NOT TO GIVE AWAY THE SOLUTION."
      ],
      pappuzzle1a: [ "<18>{#p/papyrus}{#f/0}HAVE AT IT!" ],
      pappuzzle2: [ "<18>{#p/papyrus}WOW!\nYOU SOLVED IT!!" ],
      pappuzzle2a: [ "<18>AND YOU DID IT ALL WITHOUT MY HELP!!!" ],
      pappuzzle2b: [ "<18>AND I DIDN'T EVEN HAVE TO HELP YOU THAT MUCH!" ],
      pappuzzle2c: [ "<18>IT TOOK A BIT OF ENCOURAGEMENT, BUT YOU REALLY DID IT!" ],
      pappuzzle2d: [
         "<18>YOU MUST CARE ABOUT PUZZLES LIKE I DO!",
         "<18>WELL, I'M SURE YOU'LL LOVE THE NEXT PUZZLE, THEN!",
         "<18>IT MIGHT EVEN BE TOO EASY FOR YOU!!",
         "<18>NYEH!\nHEH HEH!\nHEHEHEH!!!"
      ],
      papsink0: () =>
         SAVE.data.b.svr
            ? [
                 "<32>{#p/human}* (The dog residue in this sink appears to be arranged in the shape of a heart.)",
                 "<32>* (Somehow, this seems to put you at ease.)"
              ]
            : SAVE.data.n.plot < 72
            ? [ "<32>{#p/basic}* The sink is so tall, you can't even wash your hands..." ]
            : [ "<32>{#p/basic}* There's a pile of dog residue in the sink." ],
      papsink1: [
         "<18>{#p/papyrus}{#f/9}IMPRESSED?\nI INCREASED THE HEIGHT OF MY SINK.",
         "<18>{#f/0}NOW I CAN FIT MORE BONES UNDER IT!\nTAKE A LOOKSY!"
      ],
      papsink2: [ "<18>{#p/papyrus}{#f/8}NOO, THE DOG!" ],
      papsink3: [ "<18>{#p/papyrus}{#f/31}OH, YOU POOR, POOR PUPPY...", "<18>{#f/9}HERE, HAVE MY SPECIAL ATTACK!" ],
      papsink4: [ "<18>{#p/papyrus}WOW!!!\nIT LOVES IT!!!" ],
      papsink5: [ "<18>{#p/papyrus}{#f/7}SANS!", "<18>STOP PLAGUING MY LIFE WITH INCIDENTAL MUSIC!!" ],
      papsink6: [ "<18>{#p/papyrus}{#f/4}AND NOW THE DOG HAS DISAPPEARED WITH MY ATTACK.", "<18>OH WELL..." ],
      papsolu1: [
         "<18>{#p/papyrus}YOU LOOK LIKE YOU NEED A HINT.",
         "<18>{#f/4}HMM...",
         "<18>{#f/0}WELL, I'D PAY ATTENTION TO THE CIRCUITS.",
         "<18>{#f/0}BUT THAT'S JUST ME."
      ],
      papsolu2: [
         "<18>{#p/papyrus}{#f/5}STILL CONFUSED?",
         "<18>{#f/5}UM... MAYBE...",
         "<18>{#f/6}USE THE CIRCUITS AS A GUIDE TO THE SEQUENCE???",
         "<18>{#f/5}I'M TRYING VERY HARD NOT TO SPOIL IT..."
      ],
      papsolu3: [
         "<18>{#p/papyrus}{#f/6}STILL???",
         "<18>{#f/0}I MEAN, I COULD TOTALLY GIVE YOU THE SOLUTION.",
         "<18>{#f/4}I DON'T WANT TO SPOIL THE FUN, THOUGH..."
      ],
      papsolu3a: [
         "<18>{#p/papyrus}{#f/9}DO YOU ABSOLUTELY, DAPSOLUTELY WANT THE SOLUTION???",
         choicer.create("* （你要怎麼回答？）", "是", "否")
      ],
      papsolu3a1: [
         "<18>{#p/papyrus}THE! SOLUTION! IS!",
         "<18>{#f/4}(PLEASE IMAGINE A DRUMROLL IN YOUR HEAD...)",
         "<18>{#f/0}... THAT HOLO-TREE NEXT TO THE LAMP ON YOUR RIGHT!",
         "<18>CHECK IT OUTIE!!!"
      ],
      papsolu3a2: [
         "<18>{#p/papyrus}WOW... YOU'RE TRULY A PUZZLE PASSIONEER!",
         "<18>I'M ENTHUSED BY YOUR ENTHUSIASM!",
         "<18>YOU CAN DO IT, HUMAN!!!"
      ],
      papsolu4: [ "<18>{#p/papyrus}{#f/4}DON'T YOU REMEMBER THE SOLUTION I GAVE YOU...?" ],
      papsolu5: [ "<18>{#f/0}{#p/papyrus}ALMOST DONE!\nONLY ONE CIRCUIT LEFT TO ACTIVATE!" ],
      papspaghet1: (take: boolean) => [
         "<18>{#p/papyrus}{#f/1}WHAT!?\nHOW DID YOU AVOID MY TRAP?",
         "<18>{#f/4}AND, MORE IMPORTANTLY...",
         "<18>{#f/0}IS THERE ANY LEFT FOR ME???",
         choicer.create("* (What do you tell Papyrus\n  about his spaghetti?)", take ? "Took it" : "Left it", "Ate it"),
         "<18>{#p/papyrus}REALLY!?"
      ],
      papspaghet1a: [
         "<18>{#p/papyrus}WHAT!?\nHOW DID YOU AVOID MY TRAP?",
         "<18>{#f/4}AND, MORE IMPORTANTLY...",
         "<18>{#f/0}IS THERE ANY...",
         "<18>{#f/4}... WAIT.",
         "<18>{#f/0}IT'S RIGHT THERE IN YOUR ITEMS!!",
         "<18>{#f/9}WHAT WERE YOU PLANNING, HUMAN?",
         choicer.create("* (What will you do with\n  Papyrus' spaghetti?)", "Share it", "Eat it"),
         "<18>{#p/papyrus}REALLY!?"
      ],
      papspaghet2a: [
         "<18>{#f/5}YOU'D RESIST THE FLAVOR OF MY HOME- COOKED PASTA...",
         "<18>{#f/6}JUST SO YOU COULD SHARE IT WITH ME???",
         "<18>{#f/9}WELL THEN!!",
         "<18>FRET NOT HUMAN!\nFOR I, MASTER CHEF PAPYRUS...",
         "<18>WILL MAKE US ALL THE PASTA WE COULD EVER WANT!",
         "<18>{#f/0}HEH HEH HEH HEH HEH HEH NYEH!"
      ],
      papspaghet2b: [
         "<18>{#f/5}WOWIE...",
         "<19>{#f/6}FEW HAVE EVER ENJOYED MY COOKING LIKE THAT BEFORE...",
         "<18>{#f/9}WELL THEN!!",
         "<18>FRET NOT HUMAN!\nFOR I, MASTER CHEF PAPYRUS...",
         "<18>WILL MAKE YOU ALL THE PASTA YOU COULD EVER WANT!",
         "<18>{#f/0}HEH HEH HEH HEH HEH HEH NYEH!"
      ],
      paptv: pager.create(
         0,
         () => [
            ...(dateready() && SAVE.data.n.state_starton_papyrus === 0
               ? [ "<18>{#p/papyrus}OOH, IT'S MY FAVORITE TV SHOW!" ]
               : []),
            ...(SAVE.data.n.plot < 67.1
               ? [ "<33>{#p/mettaton}* \"STAY TUNED FOR A NEW PROGRAM!\"" ]
               : SAVE.data.b.killed_mettaton
               ? [ "<33>{#p/mettaton}* \"NETWORK UNREACHABLE.\"" ]
               : world.bad_robot
               ? [ "<33>{#p/mettaton}* \"SORRY, FOLKS!\"\n* \"THE PROGRAM'S BEEN CANCELLED!\"" ]
               : [ "<32>{#p/mettaton}* \"HOPE YOU ENJOYED THE SHOW!\"" ]),
            ...(dateready() && SAVE.data.n.state_starton_papyrus === 0
               ? [
                    "<18>{#p/papyrus}{#f/7}WHAT!!!\nIT'S USUALLY BETTER THAN THIS!",
                    "<18>{#f/4}THIS IS JUST A BAD EPISODE.",
                    "<18>{#f/7}DON'T JUDGE ME!!!"
                 ]
               : [])
         ],
         [ "<33>{#p/mettaton}* \"STAY TUNED FOR A NEW PROGRAM!\"" ]
      ),
      papyrus1: [ "<18>{#p/papyrus}SO, AS I WAS SAYING ABOUT UNDYNE..." ],
      papyrus2: [
         "<18>{#p/papyrus}SANS!!\nOH MY GOD!!\nIS THAT...",
         "<18>A HUMAN!?!?",
         "<25>{#p/sans}{#f/2}* nah, it's just a human shaped hologram."
      ],
      papyrus3: [
         "<18>{#p/papyrus}{#f/4}OH.",
         "<18>{#f/4}...",
         "<18>{#f/4}WAIT...",
         "<18>{#f/7}YOU'RE LYING!!",
         "<25>{#p/sans}{#f/2}* sorry, meant to say \"hologram-shaped human.\"",
         "<18>{#p/papyrus}{#f/0}... SANS, WE FINALLY DID IT!",
         "<18>{#f/9}UNDYNE -HAS- TO LET ME INTO THE ROYAL GUARD NOW!!!",
         "<18>{#f/6}WE JUST HAVE TO...",
         "<18>{#f/5}TO...",
         "<18>{#f/4}...",
         "<18>{#f/4}I'M FORGETTING SOMETHING.",
         "<25>{#p/sans}{#f/2}* the speech, remember?",
         "<18>{#p/papyrus}{#f/4}OH, RIGHT.\n...\"AHEM.\"",
         "<18>{#f/9}HUMAN! YOU MAY THINK YOU'RE SAFE OUT HERE...",
         "<18>{#f/9}BUT I, THE GREAT PAPYRUS, INTEND TO CHANGE THAT!",
         "<18>{#f/4}FIRST, I'LL DAZZLE YOU WITH DR. ALPHYS' PUZZLES...",
         "<18>{#f/4}AND THEN, WHEN YOU LEAST EXPECT IT...",
         "<19>{#f/9}WHAM!\nCAPTURED!\nOFF TO THE CITADEL!",
         "<18>{#f/9}OUR BATTLE WILL BE AS LEGENDARY AS THEY COME!",
         "<18>{#f/4}IN ANY CASE...",
         "<18>{#f/9}CONTINUE... ONLY IF YOU DARE!!!"
      ],
      papyrus4: [ "<18>{#f/0}NYEH HEH HEH HEH HEH HEH HEH HEH!!!" ],
      papyrus5: [
         "<25>{#p/sans}* well, that went well.",
         "<25>* don't sweat it, bud.",
         "<25>{#f/2}* i'll keep an eyesocket out for ya."
      ],
      papyrus6x1: [ "<18>{#p/papyrus}{#f/5}人-人類？\n你就是那個人類嗎...？" ],
      papyrus6x2: [
         "<15>{#p/papyrus}{#e/papyrus/20}我的天哪！\n我終於見到你啦！",
         "<18>{#p/papyrus}{#f/0}自打聽說你來了星港，\n我就夢想著能見你一面！",
         "<18>{#p/papyrus}{#f/4}...你問，\n為啥SANS沒跟我\n在一塊？",
         "<18>{#p/papyrus}{#f/6}唉，我有理由懷疑...",
         "<18>{#p/papyrus}{#f/5}...他好像\n刻意想讓我躲著你。",
         "<18>{#p/papyrus}{#f/7}真不愧是他！！！",
         "<18>{#p/papyrus}{#f/0}但是，\n只要你不說，我不說～",
         "<18>{#p/papyrus}{#f/9}那懶骨頭\n就甭想知道一丁點\n咱們的“地下情誼”！"
      ],
      papyrus6x3: [
         "<18>{#p/papyrus}{#f/5}不過，我現在得走了。\n絕不能讓他發現\n我偷偷溜出來了。",
         "<18>{|}{#p/papyrus}{#f/9}待會見，人-­ {%}"
      ],
      papyrus6x4: [ "<32>{#p/without}* ...papyrus？" ],
      papyrus6: [
         "<18>{#p/papyrus}{#f/9}HUMAN!!",
         "<18>{#f/4}YOU MAY HAVE PASSED MY OTHER CHALLENGES.",
         "<18>{#f/9}BUT NOW YOU WILL SURELY MEET YOUR WIT'S END!",
         "<18>FOR YOU SEE, THIS PUZZLE WAS MADE BY NONE OTHER...",
         "<18>{#f/0}THAN THE AMAZING DR. ALPHYS!",
         "<18>THE RULES ARE QUITE SIMPLE, REALLY.",
         "<18>THIS DISPLAY WILL READ OUT A NUMBER AT RANDOM.",
         "<18>{#f/9}... THE NUMBER OF SECONDS UNTIL YOU CAN PASS!",
         "<18>{#f/0}IF THE NUMBER IS ODD, YOU MUST DODGE PROJECTILES.",
         "<18>NUMBERS ENDING IN 1 GIVE YOU STAR- SHAPED ONES...",
         "<18>NUMBERS ENDING IN 3 GIVE YOU MOON- SHAPED ONES...",
         "<18>{#f/4}5 GIVES YOU COMETS, 7 GIVES YOU QUASARS...",
         "<18>{#f/9}AND IF IT ENDS IN A 9, IT'S ENTIRELY RANDOM!",
         "<18>{#f/0}IF THE NUMBER IS PRIME, THE GRAVITY WILL FLIP.",
         "<18>{#f/4}(ALTHOUGH, PRIMES BELOW TEN DON'T OFTEN TRIGGER IT.)",
         "<18>{#f/0}IF THE NUMBER IS EVEN, YOU WILL BE FINE AT FIRST...",
         "<18>{#f/9}BUT RANDOM MONSTER ENCOUNTERS WILL OCCUR!",
         "<18>ALSO, POWERS OF TWO WILL DOUBLE THE FREQUENCY!!",
         "<18>{#f/0}IF THE NUMBER REPEATS THE SAME DIGIT TWICE...",
         "<18>{#f/0}THE WAIT TIME WILL BE MULTIPLIED BY SAID DIGIT!",
         "<18>{#f/0}IF THE NUMBER IS A RUN, I.E. 1-2-3...",
         "<18>{#f/0}THE ROOM WILL SHAKE, CAUSING YOU TO STUMBLE!",
         "<18>{#f/0}AND IF THE NUMBER CONTAINS A 4 AT ALL...",
         "<18>{#f/9}SANS WILL RANDOMLY LEVITATE YOU WITH BLUE MAGIC!",
         "<25>{#p/sans}{#f/6}* check it out, it's my special yellow eye.",
         "<18>{#p/papyrus}{#f/7}NOT NOW, SANS!!",
         "<25>{#p/sans}* oh, heheh.\n* guess i got a little {@fill:#ff0}carried away{@fill:#fff}, huh?",
         "<18>{#p/papyrus}{#f/4}YEAH, YEAH...",
         "<18>{#f/9}WELL!\nDO YOU UNDERSTAND THE EXPLANATION?",
         choicer.create("* （你要怎麼回答？）", "是", "否")
      ],
      papyrus7: [
         "<18>{#p/papyrus}{#f/9}WELL, LET'S REVIEW THEN!",
         "<18>{#f/0}THIS DISPLAY GENERATES A RANDOM NUMBER OF SECONDS.",
         "<18>AKA, HOW LONG YOU MUST WAIT TO PASS THROUGH.",
         "<18>ODD NUMBERS MEAN DODGING PROJECTILES.",
         "<18>THE NUMBER'S LAST DIGIT DETERMINES THE TYPE.",
         "<18>1 FOR STARS, 3 FOR MOONS, 5 FOR QUASARS, 7 FOR...",
         "<18>{#f/5}WAIT, WHICH NUMBER WAS FOR QUASARS AGAIN??",
         "<18>{#f/9}UH, WELL, IF IT ENDS IN 9, THE TYPE IS RANDOM!",
         "<18>{#f/0}PRIME NUMBERS SHIFT THE GRAVITY AROUND...",
         "<18>{#f/0}EVEN NUMBERS TRIGGER RANDOM ENCOUNTERS...",
         "<18>{#f/5}WAIT, DID I SAY THE GRAVITY SHIFTS!?,",
         "<18>{#f/7}UGH, I MEANT TO SAY IT FLIPS!!",
         "<18>{#f/0}BUT POWERS OF TWO DOUBLE THE ENCOUNTER RATE.",
         "<18>RUNS CAUSE THE ROOM TO SHAKE, AND 4 MEANS...",
         "<18>{#f/6}UH, I THINK I FORGOT WHAT 4 MEANS.",
         "<25>{#p/sans}* wasn't that supposed to be my cue?",
         "<18>{#p/papyrus}{#f/6}MAYBE???",
         "<18>{#f/7}WHATEVER!!\nDO YOU UNDERSTAND IT NOW!?",
         choicer.create("* （你要怎麼回答？）", "Sure", "Even less")
      ],
      papyrus8: [
         "<18>{#p/papyrus}{#f/9}WELL... THEN...",
         "<18>{#f/9}YOU KNOW WHAT, I'LL LEAVE THE INSTRUCTIONS HERE!",
         "<18>{#f/0}THEN, YOU CAN READ THEM AT YOUR OWN PACE.",
         "<18>GOOD LUCK, HUMAN!!",
         "<18>{#f/5}NYEH... HEH HEH..."
      ],
      papyrus9: [
         "<18>{#p/papyrus}{#f/9}AWESOME SAUCE!",
         "<18>{#f/9}WELL, WITHOUT FURTHER ADO...",
         "<18>LET'S FIND OUT WHAT OUR RANDOM NUMBER WILL BE!!"
      ],
      papyrus10: [
         "<18>{#p/papyrus}{#f/9}HUMAN!",
         "<18>{#f/9}ARE YOU READY FOR YOUR GREATEST CHALLENGE YET?",
         "<18>{#f/9}INTRODUCING... THE GAUNTLET OF DEADLY TERROR!"
      ],
      papyrus11: [
         "<18>{#p/papyrus}{#f/9}ONCE I GIVE THE WORD, IT WILL FULLY ACTIVATE!",
         "<18>LASERS WILL FIRE!\nCOILS WILL CHARGE!\nBLADES WILL SLICE!",
         "<18>ALL IN A PRECISE AND TACTICAL MANNER!",
         "<18>{#f/4}WITHOUT PERFECT ACCURACY, YOU WILL SURELY FAIL.",
         "<18>{#f/9}NOW!!!\nARE YOU READY!?!?",
         "<18>BECAUSE!",
         "<18>I!",
         "<18>AM!",
         "<18>ABOUT!",
         "<18>TO DO IT!"
      ],
      papyrus12: [
         "<25>{#p/sans}* well?\n* are we doing this thing or what?",
         "<18>{#p/papyrus}{#f/7}...",
         "<25>{#p/sans}{#f/3}* that annoying dog's going to get impatient up there.",
         "<18>{#p/papyrus}{#f/7}ANY SECOND NOW!"
      ],
      papyrus13: [
         "<25>{#p/sans}* ready when you are.",
         "<18>{#p/papyrus}{#f/6}I...",
         "<18>{#f/6}I'M STARTING TO THINK THAT...",
         "<18>{#f/6}MAYBE...",
         "<18>{#f/6}THIS CHALLENGE...",
         "<18>{#f/6}...",
         "<18>{#f/4}... WAS A BIT OF A BAD IDEA.",
         "<18>{#f/5}TO THINK I CREATED A CHALLENGE THAT COULD KILL...",
         "<18>{#f/9}BUT, HAVE NO FEAR!",
         "<18>{#f/9}I AM A SKELETON WITH STANDARDS!",
         "<18>{#f/4}AND, FRANKLY, A CHALLENGE YOU CANNOT SURVIVE...",
         "<18>{#f/7}IS A CHALLENGE FAR TOO CONTRIVED!",
         "<18>AWAY IT GOES!!"
      ],
      papyrus14: [
         "<18>{#p/papyrus}{#f/7}WHAT ARE YOU LOOKING AT!?",
         "<18>{#f/9}THIS WAS ANOTHER DECISIVE VICTORY FOR PAPYRUS!!",
         "<18>NYEH!",
         "<18>HEH!",
         "<18>{#f/4}...",
         "<18>... HEH?"
      ],
      papyrusFinal1: [
         "<23>{#p/papyrus}{#f/30}人類。",
         "<23>請允許我傾訴\n一些複雜的情感。",
         "<23>就像..."
      ],
      papyrusFinal2: () =>
         world.genocide
            ? [
                 "<23>失去至親的悲痛。",
                 "<23>無能為力的自責。",
                 "<23>陰陽兩隔的懷念。",
                 "<23>這些情感..."
              ]
            : papreal()
            ? [
                 "<23>眾生罹難的心痛。",
                 "<23>無能為力的絕望。",
                 "<23>改過自新的理想。",
                 "<23>這些情感..."
              ]
            : [
                 "<23>THE JOY OF FINDING ANOTHER PASTA LOVER.",
                 "<23>THE ADMIRATION FOR ANOTHER'S PUZZLE- SOLVING SKILLS.",
                 "<23>THE DESIRE TO HAVE A COOL, SMART PERSON THINK YOU ARE COOL.",
                 "<23>這些情感..."
              ],
      papyrusFinal3: () =>
         world.genocide || papreal()
            ? [
                 "<18>{#f/31}肯定正縈繞在你心頭。",
                 "<18>{#f/32}很難想象這些情感\n究竟是怎樣的...",
                 "<18>{#f/6}畢竟，我很... 偉大...",
                 "<18>{#f/32}{#x1}...",
                 "<18>{#f/31}人類，儘管你做了\n很多錯事...\n我...",
                 "<18>{#f/5}我仍然相信你！",
                 "<18>{#f/31}我知道，\n你可以浪子回頭。",
                 "<18>{#f/31}我知道，\n你願意變得更好。",
                 ...(world.genocide
                    ? [ "<18>{#f/4}不管那個“ASRIEL”\n說了什麼荒唐的話，" ]
                    : [ "<18>{#f/5}不管你覺得自己\n多麼不可救藥，" ]),
                 "<18>{#f/6}{#x2}但我知道，在內心深處，\n你還是個好人！",
                 "<18>{#f/0}我會讓你的善良重見天日！",
                 "<18>{#f/0}我會讓你的潛能盡數釋放！",
                 "<18>{#f/4}最終...",
                 "<18>{#f/9}我會讓你知道，\n你仍然是最棒的！！！",
                 "<18>{#f/0}我，PAPYRUS，\n敞開雙臂歡迎你！"
              ]
            : [
                 "<18>{#f/0}THEY MUST BE WHAT YOU ARE FEELING RIGHT NOW!!",
                 "<18>{#f/4}I CAN HARDLY IMAGINE WHAT THAT MUST FEEL LIKE.",
                 "<18>{#f/4}AFTER ALL, I AM VERY GREAT.",
                 "<18>I NEVER WONDER WHAT HAVING MANY FRIENDS IS LIKE.",
                 "<18>{#f/5}I PITY YOU, LONELY HUMAN...",
                 "<18>{#f/0}BUT WORRY NOT!!!\nYOU SHALL BE LONELY NO LONGER!",
                 "<18>{#f/9}FOR I, THE GREAT PAPYRUS, WILL BE YOUR...",
                 "<18>{#f/5}{#x1}...",
                 "<18>NO...",
                 "<18>{#f/7}{#x2}NO, THIS IS ALL WRONG!",
                 "<18>I CAN'T BE YOUR \"FRIEND...\"",
                 "<18>YOU ARE A HUMAN!\nI MUST CAPTURE YOU!!!",
                 "<18>{#f/9}THEN, I CAN FULFILL MY LIFELONG DREAM!!!",
                 "<18>POWERFUL!\nPOPULAR!\nPRESTIGIOUS!!!",
                 "<18>THAT'S PAPYRUS!!!",
                 "<18>{#f/4}THE NEWEST MEMBER...",
                 "<18>{#f/9}OF THE ROYAL GUARD!!!"
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
                 "<18>{#p/papyrus}{#f/5}NYOO HOO HOO...",
                 ...(b
                    ? [ "<18>I WASN'T STRONG ENOUGH TO STOP YOU..." ]
                    : [ "<18>I CAN'T EVEN STOP SOMEONE AS WEAK AS YOU..." ]),
                 "<18>{#f/7}UNDYNE'S GOING TO BE DISAPPOINTED!",
                 "<18>{#f/5}I'LL NEVER JOIN THE ROYAL GUARD... AND...",
                 "<18>{#f/7}MY FRIEND QUANTITY WILL REMAIN STAGNANT!",
                 "<32>{#p/human}* (How will you respond?){!}\nµµµµµµµLet's beµµµµµµµµWhat a\nµµµµµµµfriendsµµµµµµµµµloser{#c/0/7/7}"
              ],
      papyrusFinal4a1: (b: boolean) =>
         b
            ? [
                 "<18>{#p/papyrus}{#f/5}A-ARE YOU SURE?\nYOU WANT TO BE FRIENDS WITH ME?",
                 "<18>{#f/6}EVEN AFTER THAT???",
                 "<18>{#f/0}WELL, OKAY THEN!!\nLET'S BE FRIENDS!!"
              ]
            : [
                 "<18>{#p/papyrus}{#f/1}REALLY!?\nYOU WANT TO BE FRIENDS WITH ME???",
                 "<18>{#f/6}WELL THEN...\nI GUESS...",
                 "<18>{#f/0}I CAN MAKE AN ALLOWANCE FOR YOU!"
              ],
      papyrusFinal4a2: (b: boolean) =>
         b
            ? [
                 "<18>{#p/papyrus}{#f/5}HUH? ARE YOU... TRYING TO BERATE ME???",
                 "<18>{#f/6}YOU THINK I'M NOT STRONG ENOUGH TO BE YOUR FRIEND?",
                 "<18>{#f/5}... N-NO...",
                 "<18>{#f/7}NO, WHAT AM I SAYING!!\nOF COURSE I AM!",
                 "<18>{#f/9}AND... I'LL PROVE IT BY BEING YOUR FRIEND ANYWAY!"
              ]
            : [
                 "<18>{#p/papyrus}{#f/1}HUH? WHY WOULD YOU BERATE YOURSELF SO LOUDLY???",
                 "<18>{#f/4}IS IT BECAUSE...",
                 "<18>{#f/7}YOU DON'T THINK YOU'RE GOOD ENOUGH TO BE MY FRIEND?",
                 "<18>{#f/9}NO, YOU'RE GREAT!\nI'LL BE YOUR FRIEND!!!"
              ],
      papyrusFinal4b1: [
         "<18>{#f/0}WOWIE!!",
         "<18>I FOUND A NEW FRIEND!!!",
         "<18>{#f/4}AND WHO KNEW THAT ALL I NEEDED TO DO IT..."
      ],
      papyrusFinal4b2: [
         "<18>{#f/0}WOWIE!!",
         "<18>{#f/0}WE HAVEN'T EVEN HAD OUR FIRST DATE...",
         "<18>{#f/0}AND I'VE ALREADY MANAGED TO HIT THE FRIEND ZONE!!!",
         "<18>{#f/4}WHO KNEW THAT ALL I HAD TO DO..."
      ],
      papyrusFinal4c1: [
         "<18>{#f/0}WAS TO GIVE PEOPLE AWFUL PUZZLES AND THEN FIGHT THEM?",
         "<18>YOU TAUGHT ME A LOT, HUMAN.",
         "<18>{#f/9}I HEREBY GRANT YOU PERMISSION TO PASS THROUGH!",
         "<18>{#f/0}AND I'LL GIVE YOU DIRECTIONS TO THE EXIT."
      ],
      papyrusFinal4c2: [
         "<18>CONTINUE FORWARD UNTIL YOU REACH THE CITADEL.",
         "<18>THEN, HOP IN A CRAFT AND CROSS THE {@fill:#ff0}FORCE FIELD{@fill:#fff}.",
         "<18>{#f/4}THAT'S THE THING TRAPPING US ALL ON THE OUTPOST.",
         "<18>ANYONE CAN ENTER THROUGH IT, BUT NOBODY CAN EXIT...",
         "<18>{#f/9}... EXCEPT SOMEONE WITH A POWERFUL SOUL.",
         "<18>{#f/0}LIKE YOU!!!"
      ],
      papyrusFinal4d: [
         "<18>{#f/4}OH, I ALMOST FORGOT TO MENTION.",
         "<18>TO REACH THE EXIT, YOU WILL HAVE TO PASS...",
         "<18>{#f/7}BY {@fill:#ff0}THE KING{@fill:#fff}.",
         "<18>{@fill:#ff0}THE KING OF ALL MONSTERS...",
         "<18>{@fill:#ff0}HE IS...",
         "<18>{@fill:#ff0}{#f/6}... WELL..."
      ],
      papyrusFinal4e: [
         "<18>{#f/0}HE'S A BIG FUZZY PUSHOVER!!!",
         "<18>EVERYBODY LOVES THAT GUY.",
         "<18>{#f/4}I AM CERTAIN IF YOU JUST SAY...",
         "<18>\"EXCUSE ME, MR. DREEMURR... CAN I PLEASE GO HOME?\"",
         "<18>{#f/0}HE'LL GUIDE YOU OVER TO THE LAUNCH BAY HIMSELF!",
         "<18>{#f/9}ANYWAY!!!\nTHAT'S ENOUGH TALKING!!!",
         "<18>{#f/0}I'LL BE AT HOME BEING A COOL FRIEND."
      ],
      papyrusFinal4f1: [ "<18>{#f/9}FEEL FREE TO COME BY AND HANG OUT!!!" ],
      papyrusFinal4f2: [ "<18>{#f/9}FEEL FREE TO COME BY AND HAVE THAT DATE!!!" ],
      papyrusFinal4f3: [ "<18>{#f/9}FEEL FREE TO COME BY AND SAY HELLO!!!" ],
      papyrusFinal4g: [ "<18>NYEH HEH HEH HEH HEH HEH HEH!!!" ],
      papyrusFinal5: [
         "<18>{#p/papyrus}{#f/5}OH, WHERE COULD THAT HUMAN HAVE GONE...",
         "<18>{#f/4}...\nWAIT.",
         "<18>{#f/1}IT'S RIGHT IN FRONT OF ME!!!",
         "<18>{#f/0}HELLO! I WAS WORRIED THAT YOU HAD GOTTEN LOST!",
         "<18>IT SURE IS A RELIEF TO SEE THAT YOU'RE HERE...",
         "<18>{#f/7}...\nWAIT A SECOND!!!",
         "<18>YOU'RE NOT SUPPOSED TO ESCAPE!!!",
         "<18>GET BACK THERE!!!"
      ],
      papyrusFinal6: [
         "<18>{#p/papyrus}{#f/4}BACK AGAIN, EH?",
         "<18>{#f/5}I SUPPOSE IT'S MY FAULT...",
         "<18>I TOLD YOU BEFORE THAT I WOULD MAKE YOU SPAGHETTI.",
         "<18>IT'S ONLY NATURAL THAT YOU WOULD WANT TO SEE ME...",
         "<18>IN THE DIRE HOPE THAT I WOULD MAKE YOU SOME.",
         "<18>{#f/0}WELL... I UNDERSTAND.",
         "<18>{#f/0}PAPYRUS IS HUNGRY, TOO!",
         "<18>{#f/7}HUNGRY FOR JUSTICE!"
      ],
      papyrusFinal7: [
         "<18>{#p/papyrus}{#f/1}YOU'RE BACK AGAIN!?!?",
         "<18>{#f/4}I FINALLY REALIZE THE TRUE REASON WHY.",
         "<18>{#f/5}YOU...",
         "<18>YOU JUST MISS SEEING MY FACE SO MUCH...",
         "<18>{#f/6}I...",
         "<18>{#f/31}I'M NOT SURE I CAN FIGHT SOMEONE WHO FEELS THIS WAY.",
         "<18>{#f/4}NOT TO MENTION, I'M GETTING TIRED OF CAPTURING YOU.",
         "<18>{#f/5}WOULD YOU LIKE TO PASS THROUGH...",
         "<18>{#f/5}... WITHOUT A BATTLE?",
         choicer.create("* （你要怎麼回答？）", "是", "否")
      ],
      papyrusFinal7a: [ "<18>{#p/papyrus}{#f/31}...\nOKAY...", "<18>{#f/3}I GUESS I'LL ACCEPT MY FAILURE." ],
      papyrusFinal7b: [ "<18>{#p/papyrus}{#f/4}WELL, IF YOU SAY SO, THEN...", "<18>{#f/9}BY ALL MEANS!!!" ],
      papyrusFinal8: [
         "<18>{#p/papyrus}{#f/1}AGAIN??",
         "<18>{#f/4}... WELL, OKAY...",
         "<18>{#f/9}WILL YOU FORGO THE BATTLE THIS TIME??",
         choicer.create("* （你要怎麼回答？）", "是", "否")
      ],
      papyrusFinal8a: [ "<18>{#p/papyrus}{#f/0}OKAY, HERE WE GO!" ],
      puzzle3: () => [
         "<32>{#p/human}* （你看了下終端。）",
         "<32>{#p/basic}* 屏幕上顯示著一條歷史修改記錄。",
         world.edgy
            ? "<32>* “最新圖案修改者：ALPHYS”"
            : "<32>* “最新圖案修改者：COOLSKELETON95”",
         ...(!world.goatbro || SAVE.flag.n.genocide_milestone < 5 || SAVE.flag.n.ga_asrielAlphysCom1++ > 0
            ? []
            : [ "<25>{#p/asriel2}{#f/13}* 她真是沒完沒了地為難我們..." ]),
         "<32>{#p/basic}* “要查看圖案嗎？”",
         choicer.create("* （查看圖案嗎？）", "是", "否")
      ],
      robotx: () =>
         SAVE.data.b.svr
            ? [ "<32>{#p/human}* (The robot appears to be asleep.)" ]
            : [ "<32>{#p/basic}* It's in sleep mode." ],
      robot1: pager.create(
         0,
         [
            "<32>{#p/basic}* 你好，心地善良的旅行者。\n* 我是一個建築機器人。",
            "<32>* 我想去看看整個星系...\n* 但是我動彈不得。",
            "<32>* 如果你願意幫助我的話...",
            "<32>* 就帶上我的一塊芯片吧，\n  帶它去一個很遠很遠的地方。",
            choicer.create("* （拿走一塊芯片？）", "是", "否")
         ],
         [
            "<32>{#p/basic}* 心地善良的旅行者，\n  如果你願意幫助我的話...",
            "<32>* 就帶上我的一塊芯片吧，\n  帶它去一個很遠很遠的地方。",
            choicer.create("* （拿走一塊芯片？）", "是", "否")
         ]
      ),
      robot2: () => [
         "<32>{#p/basic}* 謝謝你... 祝你好運！",
         "<32>{#s/equip}{#p/human}* （你拿走了一塊芯片。）",
         ...(world.goatbro && SAVE.flag.n.ga_asriel98++ < 1
            ? [
                 "<25>{#p/asriel2}{#f/9}* 嘿，真是個\n  可愛又天真的小東西。",
                 "<25>{#p/asriel2}{#f/13}* 天真到對自己的命運\n  一無所知。"
              ]
            : [])
      ],
      robot3: [ "<32>{#p/basic}* 看起來你還沒有給我預留足夠的空間。" ],
      robot4: () => [
         "<32>{#p/basic}* I see.\n* Good journey, then.",
         ...(world.goatbro && SAVE.flag.n.ga_asriel98++ < 1
            ? [
                 "<25>{#p/asriel2}{#f/9}* 嘿，真是個\n  可愛又天真的小東西。",
                 "<25>{#p/asriel2}{#f/13}* 天真到對自己的命運\n  一無所知。"
              ]
            : [])
      ],
      robot5: () => [
         "<32>{#p/basic}* Thank you for taking care of me.",
         ...(world.goatbro && SAVE.flag.n.ga_asriel99++ < 1
            ? [ "<25>{#p/asriel2}{#f/4}* 行了，這些芯片應該夠用了。" ]
            : [])
      ],
      robot6: [
         "<32>{#p/basic}* How am I doing?\n* By \"I\" I mean the chip I gave you...",
         "<32>* Huh? You lost it...?\n* ... I suppose I can give you another one...",
         choicer.create("* （再拿走一塊芯片？）", "是", "否")
      ],
      robot7: [
         "<32>{#p/basic}* Please be careful this time.",
         "<32>{#p/human}{#s/equip}* （你拿走了一塊芯片。）"
      ],
      robot8: [ "<32>{#p/basic}* I understand.\n* Safe journey, then..." ],
      robot9: () => [
         "<32>{#p/basic}* Thank you for... taking care of me...",
         ...(world.goatbro && SAVE.flag.n.ga_asriel99++ < 1
            ? [ "<25>{#p/asriel2}{#f/4}* 行了，這些芯片應該夠用了。" ]
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
      robot11: [ "<32>{#p/basic}* Why did I give myself away so easily?" ],
      robot12: [ "<32>{#p/basic}* Begone!" ],
      sans1: [
         "<99>{#p/darksans}{#i/4}* {@spacing:4,0}{#i/x2}人類。",
         "<99>* {@spacing:4,0}難道你不知道{@spacing:}\n  {@spacing:4,0}怎麼和新朋友{@spacing:}\n  {@spacing:4,0}打招呼嗎？",
         "<99>* {@spacing:4,0}轉過身來{@spacing:}\n  {@spacing:4,0}和我握手。"
      ],
      sans2: () => [
         ...(world.edgy
            ? [
                 "<25>{#p/sans}{#f/0}* 嘿，幹嘛露出這種表情？",
                 "<25>{#p/sans}{#f/2}* ...不喜歡放屁墊的把戲嗎？",
                 "<25>{#f/0}* ...沒關係，人各有志嘛。"
              ]
            : [ "<25>{#p/sans}{#f/4}* heheh... nothin' like a good whoopee cushion." ]),
         "<25>{#f/0}* 總之，你是個人類，對吧？",
         "<25>{#f/5}* 真酷。",
         "<25>{#f/0}* 我是sans。\n* 骷髏sans。",
         "<25>{#f/3}* 作為一名皇家哨兵，\n  現在我本該去抓捕人類的。",
         "<25>{#f/4}* 不過呢...",
         ...(world.edgy
            ? [
                 "<25>{#f/3}* 今天，我沒心思幹這事。",
                 "<25>{#f/0}* 不過，我的兄弟...",
                 "<25>{#f/5}* 他想抓個人類都快想瘋了。",
                 "<25>{#f/0}* 所以，為了讓他\n  能安心在家待著...\n  我整整費了三輩子工夫。"
              ]
            : [
                 "<25>{#f/2}* i've got better things to do.",
                 "<25>{#f/0}* 不過，我的兄弟...",
                 "<25>{#f/5}* despite not being an actual sentry, he sure ACTS like one.",
                 "<25>{#f/0}* in fact, i think that's him over there."
              ]),
         "<25>* 我有個主意。\n* 跳過那個空隙。",
         "<26>{#f/4}* 別怕，直接跳過去就行。\n* 我兄弟把重力設得很小，\n  肯定掉不下去。"
      ],
      sans3: () =>
         world.edgy
            ? [
                 "<25>{#p/sans}* 到了。",
                 "<25>{#f/3}* 不過... \n  現在我沒啥想給你看的。",
                 "<25>{#f/2}* 我先在這待一會。",
                 "<25>{#f/0}* 等你再往前走走，\n  說不定我就有靈感了。"
              ]
            : [ "<25>{#p/sans}* quick, to the gravometric inverter." ],
      sans4: [ "<25>{#p/sans}* 'sup, bro?" ],
      sans5: [
         "<18>{#p/papyrus}{#x2}{#f/7}YOU KNOW WHAT \"SUP,\" BROTHER!",
         "<18>YOU HAVE PUZZLES TO ATTEND TO!",
         "<18>I'VE GIVEN YOU PLENTY OF LEEWAY, BUT STILL...",
         "<18>YOU SIT AROUND AND DO NOTHING ALL DAY!",
         "<18>EVEN NOW, THAT'S WHAT YOU'RE DOING!",
         "<18>NOTHING!",
         "<25>{#p/sans}* actually, i'm playing with this gravometric thingy.",
         "<25>* it's really cool.",
         "<25>{#f/4}* do you wanna look?",
         "<18>{#p/papyrus}{#x3}{#f/7}NO!!\nI DON'T HAVE TIME FOR THAT!!",
         "<18>{#x2}IF A HUMAN COMES THROUGH HERE, I WANT TO BE READY!",
         "<18>I MUST BE THE ONE!\nI WILL BE THE ONE!",
         "<18>{#x1}{#f/9}I WILL FINALLY CAPTURE A HUMAN!",
         "<18>{#x4}{#f/0}THEN I, THE GREAT PAPYRUS...",
         "<18>WILL GET ALL THE THINGS I UTTERLY DESERVE!",
         "<18>RESPECT...\nRECOGNITION...",
         "<18>{#f/9}I WILL FINALLY BE ABLE TO JOIN THE ROYAL GUARD!",
         "<25>{#p/sans}* hmm...",
         "<25>{#f/2}* maybe this gadget will help you.",
         "<18>{#p/papyrus}{#x3}{#f/7}SANS, THAT WON'T DO ANYTHING!\nYOU LAZYBONES!",
         "<18>{#x1}{#f/5}YOU KNOW, YOU ARE CAPABLE OF SO MUCH MORE, YET...",
         "<18>{#x2}{#f/7}YOU CHOOSE TO SIT AROUND AND DO NOTHING ALL DAY!",
         "<18>{#x1}{#f/5}DON'T YOU WANT... MORE, OUT OF LIFE?",
         "<25>{#p/sans}* hey, take it easy.\n* i've got plenty of things in mind.",
         "<25>{#f/4}* perhaps you could even say i'm...",
         "<25>{#f/2}* shooting for the {@fill:#ff0}stars{@fill:#fff}?"
      ],
      sans6: [
         "<18>{#p/papyrus}{#x3}{#f/7}SANS!!",
         "<25>{#p/sans}{#f/5}* come on.\n* you're smiling.",
         "<18>{#p/papyrus}{#x2}{#f/7}I AM AND I UTTERLY DESPISE IT!",
         "<18>{#x1}{#f/4}(SIGH...)",
         "<18>{#f/5}WHY DOES SOMEONE\nAS GREAT AS MYSELF...",
         "<18>HAVE TO DO SO MUCH JUST TO GET SOME RECOGNITION??",
         "<25>{#p/sans}* heh.\n* perhaps you should focus more on, well...",
         "<25>* the {@fill:#ff0}gravity{@fill:#fff} of the situation."
      ],
      sans7: [
         "<18>{#p/papyrus}{#x2}{#f/7}UGH!!",
         "<18>{#x1}{#f/4}I WILL ATTEND TO MY PUZZLES...",
         "<18>{#f/7}AS FOR YOUR WORK?",
         "<18>{#f/4}I EXPECT YOU TO DO A MORE...",
         "<18>{#f/9}{@fill:#ff0}\"STELLAR\"{@fill:#fff} JOB FROM NOW ON!!!",
         "<18>{#f/0}NYEHEHEHEHEHE\nHEHEHEHEHEHEH!!"
      ],
      sans8: [ "<18>{#p/papyrus}HEH!" ],
      sans9: [ "<25>{#p/sans}* ok, time to bring you back down." ],
      sans10: [
         "<25>{#p/sans}{#f/0}* actually, hey...\n* before you go out there on your own...",
         "<25>{#f/3}* you should know the royal guard's on the lookout for you.",
         "<25>{#f/0}* don't worry, though.\n* all they've got out here are the canines.",
         "<25>{#f/0}* since you're a human, you should know what dogs love, right?",
         "<25>{#f/2}* they're almost as harmless as papyrus."
      ],
      sansbook0: [ "<32>{#p/human}* (It appears this joke book has no clear ending.)" ],
      sansbook1: [ "<32>{#p/basic}* It's a book about non-euclidian geometry.\n* Property of \"ALPHYS.\"" ],
      sansbook2: [ choicer.create("* (Take a look inside?)", "是", "否") ],
      sansbook3: [ "<32>{#p/human}* (You look inside the book...)" ],
      sansbook4: [ "<32>{#p/basic}* Inside the geometry book was a joke book." ],
      sansbook5: [ "<32>{#p/basic}* Inside the joke book was another geometry book." ],
      sansbook6: [ "<32>{#p/basic}* Inside the geometry book was another joke book." ],
      sansbook7: [ "<32>{#p/basic}* It's another geometry book." ],
      sansbook8: [ "<32>{#p/basic}* It's another joke book." ],
      sansbook9: [ "<32>{#p/human}* (You decide not to look.)" ],
      sansbook10: () => [
         "<32>{#p/basic}* It's a note from Sans.",
         "<32>{#p/without}* \"why so serious?\"\n* \"it's just a bad joke.\"",
         "<33>{#p/without}* \"heh...\"",
         "<33>{#p/without}* \"don't read into it too deeply.\"",
         ...(SAVE.data.b.oops ? [] : [ "<32>{#p/basic}* ... this is the worst joke I have ever experienced." ])
      ],
      sansinter: {
         s_sans: pager.create(
            0,
            () =>
               world.edgy
                  ? [ "<25>{#p/sans}* 咋了？" ]
                  : [
                       "<25>{#p/sans}* papyrus will be back soon, y'know.",
                       "<25>{#f/4}* i'd get going if i were you...",
                       "<25>{#f/2}* otherwise, you'll have to listen to more of my hilarious jokes."
                    ],
            () =>
               world.edgy
                  ? [
                       "<25>{#p/sans}{#f/3}* 真是太遺憾了...",
                       "<25>{#p/sans}{#f/2}* 這會，我兄弟正忙著做\n  我佈置的數獨習題集呢。",
                       "<25>{#p/sans}* 要是他在這，\n  就有一簍子事情等著咱們了。"
                    ]
                  : [
                       "<25>{#p/sans}* look, there's nothin' to be afraid of.",
                       "<25>{#f/2}* he may seem scary, but papyrus is the nicest guy you'll ever meet."
                    ],
            () =>
               world.edgy
                  ? [
                       "<25>{#p/sans}* 咋的？\n* 想讓我把他帶過來？",
                       "<25>{#f/3}* 呵，小子。\n* 你是不是沒明白\n  我剛說的是啥意思？",
                       "<25>{#p/sans}{#f/2}* 聽我句勸：\n  最好別得寸進尺，\n  對你我都好。"
                    ]
                  : [ "<25>{#p/sans}* 信我的。" ],
            () =>
               world.edgy
                  ? [
                       "<25>{#p/sans}{#f/3}* ...",
                       "<25>{*}{#p/darksans}{#f/1}{#i/5}{#s.stop}* 別給臉不要臉。",
                       "{*}{#s.resume}{%}"
                    ]
                  : [ "<25>{#p/sans}* 信我的。" ],
            () => (world.edgy ? [] : [ "<25>{#p/sans}* 信我的。" ])
         ),
         s_papyrus: pager.create(
            0,
            [
               "<25>{#p/sans}* hey, here's something important to remember.",
               "<25>* my brother has a very {@fill:#00a2e8}special attack{@fill:#fff}.",
               "<25>* if you see an {@fill:#ff993d}orange attack{@fill:#fff}, you'll get hurt if you're not moving.",
               "<25>{#f/3}* here's an easy way to keep it in mind.",
               "<25>{#f/0}* imagine hot coals.\n* you wouldn't stand still on those, right?",
               "<25>* hot coals are rocky.\n* so imagine boney hot coals instead.",
               "<25>{#f/2}* simple, right?\n* when fighting, think about boney hot coals."
            ],
            [
               "<25>{#p/sans}{#f/0}* and no, you won't get hurt if you're moving slowly.",
               "<25>{#f/0}* you just have to be moving.",
               "<25>{#f/2}* there's someone out there who can explain it better."
            ],
            [ "<25>{#p/sans}{#f/2}* remember...\n* boney hot coals." ]
         ),
         s_dogs: pager.create(
            0,
            [
               "<25>{#p/sans}* since you're a human, you've probably never heard of the W.T.F.",
               "<25>{#f/2}* that's short for \"wide- area troposphere framework.\""
            ],
            [
               "<25>{#p/sans}* if the W.T.F. were to drop, the air around us would disappear.",
               "<25>{#f/3}* don't worry, though.\n* i {@fill:#ff0}swear{@fill:#fff} it's never happened before."
            ],
            [ "<25>{#p/sans}{#f/2}* if it did, it'd be {@fill:#ff0}explicitly{@fill:#fff} crazy." ]
         ),
         s_jenga: pager.create(
            0,
            [
               "<25>{#p/sans}* actually, that spaghetti from earlier...",
               "<25>{#f/3}* it wasn't too bad for my brother.",
               "<25>{#f/0}* since he started cooking lessons, he's been improving a lot.",
               "<25>{#f/4}* i bet if he keeps it up, he'll even impress the king."
            ],
            [ "<25>{#p/sans}{#f/2}* ... the man up top's a sucker for pasta." ]
         ),
         s_bridge: pager.create(
            0,
            () =>
               world.edgy
                  ? [
                       "<25>{#p/sans}{#f/0}* 希望你喜歡\n  我最後佈置的謎題。",
                       "<25>{#f/3}* 時間比較緊，\n  但papyrus堅持讓我出好謎題，\n  我還是照做了。"
                    ]
                  : world.killed5
                  ? [
                       "<25>{#p/sans}{#f/3}* i hear the area's being evacuated right now...",
                       "<25>{#f/0}* if i were you, i'd be afraid for my life."
                    ]
                  : [
                       "<25>{#p/sans}{#f/3}* i don't know what my brother's going to do now.",
                       "<25>{#f/0}* if i were you, i would make sure i understand {@fill:#ff993d}orange attacks{@fill:#fff}."
                    ],
            () =>
               world.edgy
                  ? [
                       "<25>{#p/sans}{#f/0}* 怎麼？\n* 怪我不好好設計謎題？",
                       "<25>{#f/3}* 我還得一邊應付你，\n  一邊花時間準備謎題。\n* 能弄好就怪了。"
                    ]
                  : world.killed5
                  ? [
                       "<25>{#p/sans}{#f/0}* thankfully, i have someone who cares about my well-being.",
                       "<25>{#f/2}* no matter what happens, i know he'll be there for me."
                    ]
                  : [ "<25>{#p/sans}{#f/2}* oh, and maybe {@fill:#00a2e8}blue attacks{@fill:#fff}, too." ],
            () =>
               world.edgy
                  ? [ "<25>{#p/sans}{#f/3}* 就是這樣。" ]
                  : world.killed5
                  ? [ "<25>{#p/sans}{#f/0}* am i wrong?" ]
                  : [ "<26>{#p/sans}{#f/0}* all sorts of attacks." ]
         )
      },
      sansbredgey: () =>
         world.edgy
            ? 6 <= world.population
               ? [
                    "<25>{#p/sans}* 對了...",
                    "<25>* i know i've been harsh on you lately...",
                    "<25>{#f/3}* but thanks for trying to be a better person.",
                    "<25>{#f/2}* keep it up, ok?"
                 ]
               : world.bullied
               ? [
                    "<25>{#p/sans}* 對了...",
                    "<25>* i know you're still going around hurting people...",
                    "<25>{#f/3}* but i appreciate the effort not to outright to kill them.",
                    "<25>{#f/2}* it's something, right?"
                 ]
               : [
                    "<25>{#p/sans}* 對了...",
                    "<25>* 你要是不小心\n  遇到了我的兄弟...",
                    "<25>{#f/3}* ...",
                    "<25>{*}{#p/darksans}{#f/1}{#i/5}{#s.stop}* 敢動他一下試試。",
                    "{*}{#s.resume}{%}"
                 ]
            : 6 <= world.population
            ? [
                 "<25>{#p/sans}* 對了...",
                 "<25>* i know it's kind of silly at times...",
                 "<25>{#f/3}* but thanks for going along with my brother's crazy schemes.",
                 "<25>{#f/2}* you're a champion."
              ]
            : world.bullied
            ? [
                 "<25>{#p/sans}* 對了...",
                 "<25>* i know you've been going around hurting people...",
                 "<25>{#f/3}* but i appreciate the effort not to outright to kill them.",
                 "<25>{#f/2}* it's something, right?"
              ]
            : [
                 "<25>{#p/sans}* 對了...",
                 "<25>* 你要是不小心\n  遇到了我的兄弟...",
                 "<25>{#f/3}* ...",
                 "<25>{*}{#p/darksans}{#f/1}{#i/5}{#s.stop}* 敢動他一下試試。",
                 "{*}{#s.resume}{%}"
              ],
      sentryPapyrus1: pager.create(
         0,
         () =>
            SAVE.data.b.svr
               ? [ "<32>{#p/human}* (The narration on this sentry station predicts the future fame of its creator.)" ]
               : [
                    "<32>{#p/basic}* 紙殼箱上寫著幾句話。",
                    ...(world.genocide || world.runaway
                       ? [
                            "<23>{#p/papyrus}{#f/30}“求你不要毀掉我的哨站。”",
                            "<23>“我費了好大功夫才搭好它，\n要是它垮了，我會很傷心的。”",
                            "<23>“...以上。”",
                            "<23>（“注：我還想再寫點，\n但是沒地方了。”）"
                         ]
                       : [
                            "<23>{#p/papyrus}{#f/30}“你仔細打量眼前這個\n精心製作的哨站，心想...”",
                            "<23>“是哪位能工巧匠，\n才能做出這樣的哨站呢？”",
                            "<23>“我敢說，肯定是出自那個\n超-有名的皇家守衛之手！”",
                            SAVE.data.n.plot === 72
                               ? "<32>{#p/basic}* The last line was crossed out."
                               : "<23>（“注：現在還只是\n超-有名皇家守衛的預備隊員。”）",
                            ...(SAVE.data.n.plot < 19 && !world.edgy
                               ? [
                                    "<25>{#p/sans}{#f/0}* admiring my bro's handiwork, are we?",
                                    "<25>{#p/sans}{#f/2}* i know.\n* it's pretty cool."
                                 ]
                               : [])
                         ])
                 ],
         () =>
            SAVE.data.b.svr
               ? [ "<32>{#p/human}* (The narration on this sentry station predicts the future fame of its creator.)" ]
               : [
                    "<32>{#p/basic}* 紙殼箱上寫著幾句話。",
                    ...(world.genocide || world.runaway
                       ? [
                            "<23>{#p/papyrus}{#f/30}“求你不要毀掉我的哨站。”",
                            "<23>“我費了好大功夫才搭好它，\n要是它垮了，我會很傷心的。”",
                            "<23>“...以上。”",
                            "<23>（“注：我還想再寫點，\n但是沒地方了。”）"
                         ]
                       : [
                            "<23>{#p/papyrus}{#f/30}“你仔細打量眼前這個\n精心製作的哨站，心想...”",
                            "<23>“是哪位能工巧匠，\n才能做出這樣的哨站呢？”",
                            "<23>“我敢說，肯定是出自那個\n超-有名的皇家守衛之手！”",
                            SAVE.data.n.plot === 72
                               ? "<32>{#p/basic}* The last line was crossed out.\n* That checks out."
                               : "<23>（“注：現在還只是\n超-有名皇家守衛的預備隊員。”）"
                         ])
                 ]
      ),
      sentryPapyrus2: pager.create(0, () => [
         "<32>{#p/human}* (You look under the shelf...)",
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
                 [ "<26>{#p/asriel1}{#f/20}* Papyrus certainly has a unique way of thinking." ]
              ][Math.min(asrielinter.sentryPapyrus2++, 3)]
            : [ "<32>* Boxes upon boxes of unused cables and old tech can be found here." ])
      ]),
      sentrySans1: () =>
         SAVE.data.b.svr
            ? [ "<32>{#p/human}* (This sentry station strikes you as rather unimportant.)" ]
            : world.darker
            ? [ "<32>{#p/basic}* It's a sentry station." ]
            : SAVE.data.n.plot < 31
            ? [
                 "<32>{#p/basic}* Sans's sentry station...",
                 "<32>* Truly the most worthwhile investment the Royal Guard could've made."
              ]
            : SAVE.data.n.plot === 72
            ? [ "<32>{#p/basic}* Sans's sentry station...", "<32>* The quality of this investment hasn't changed a bit." ]
            : [ "<32>{#p/basic}* Sans's sentry station...", "<33>* A poor investment in hindsight." ],
      sentrySans2: pager.create(
         0,
         () => [
            "<32>{#p/human}* (You look under the shelf...)",
            ...(SAVE.data.b.svr
               ? [
                    [
                       "<25>{#p/asriel1}{#f/15}* As a star, there were some dark corners even I never dared search.",
                       "<25>{#f/20}* It's probably for the best if we leave this be."
                    ],
                    [ "<25>{#p/asriel1}{#f/20}* Please.\n* Anywhere but here." ]
                 ][Math.min(asrielinter.sentrySans2++, 1)]
               : world.edgy
               ? [ "<32>{#p/basic}* It's mostly empty, save for the singular red crayon." ]
               : [ "<32>{#p/basic}* There are bottles of honey, alfredo, and yamok sauce stockpiled here." ])
         ],
         () => [
            "<32>{#p/human}* (You look under the shelf...)",
            SAVE.data.b.svr
               ? "<25>{#p/asriel1}{#f/20}* Please.\n* Anywhere but here."
               : world.edgy
               ? "<32>{#p/basic}* It's an unsettling reminder."
               : "<32>{#p/basic}* It's an unholy quantity of food toppings."
         ]
      ),
      whew1: () =>
         [
            [ "<32>{#p/basic}* The doggy bed is covered in annoying white fur." ],
            [ "<32>{#p/basic}* Fighting Papyrus has begun to tire you, but not enough to sleep." ],
            [
               "<32>{#p/basic}* After fighting Papyrus three times, you feel exhausted.",
               choicer.create("* (What will you do?)", "Nothing", "Sleep")
            ],
            [
               "<32>{#p/basic}* Continually fighting Papyrus has exhausted you.",
               choicer.create("* (What will you do?)", "Nothing", "Sleep")
            ]
         ][Math.min(SAVE.data.n.state_papyrus_capture - 1, 3)],
      whew2: [ "<32>{#p/human}* (You let the doggy bed be.)" ],
      whew3: [ "<32>{#p/human}* (You lay in the doggy bed...)" ],
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
               ? [ "<32>{#p/human}* (You reach your hand deep into the dispenser.)\n* (It's a tad saucy.)" ]
               : [ "<32>{#p/basic}* 某種型號的噴醬機。" ],
         mousehole: () =>
            [
               [ "<32>{#p/basic}* It's a mouse hole.\n* The mice inside are discussing your great battle." ],
               [ "<32>{#p/basic}* It's a mouse hole.\n* The mice inside are concerned for your safety." ],
               [ "<32>{#p/basic}* It's a mouse hole.\n* The mice inside are wondering if you should take a rest." ],
               [ "<32>{#p/basic}* It's a mouse hole.\n* The mice inside are concerned for your sanity." ]
            ][Math.min(SAVE.data.n.state_papyrus_capture - 1, 3)],
         lamppost: () =>
            SAVE.data.b.svr
               ? [ "<32>{#p/human}* (You observe the strange lamp bouncing up and down.)" ]
               : [ "<32>{#p/basic}* 一盞“彈”燈。" ],
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
                    [ "<25>{#p/asriel1}{#f/20}* ... maybe my sense of humor could use some work." ]
                 ][Math.min(asrielinter.ntower++, 3)]
               : SAVE.data.b.s_state_puzzlenote || (!world.genocide && world.edgy)
               ? [ "<32>{#p/basic}* It's un-activated." ]
               : [ "<32>{#p/basic}* What an unfortunate result." ],
         s_secret_sign: () =>
            SAVE.data.b.svr
               ? [ "<32>{#p/human}* (The sign mentions an escape.)" ]
               : SAVE.data.n.state_starton_trashprogress < 2 && SAVE.data.n.plot < 72
               ? [
                    "<32>{#p/basic}* “它正在休息。”",
                    ...(world.goatbro && SAVE.flag.n.ga_asrielDog++ < 1 ? [ "<25>{#p/asriel2}{#f/15}* What." ] : [])
                 ]
               : [ "<32>{#p/basic}* \"It's escaped.\"" ],
         grillflower: () =>
            SAVE.data.b.svr
               ? [ "<32>{#p/human}* (It appears this plant is very neon indeed.)" ]
               : world.darker
               ? [ "<32>{#p/basic}* 一株植物。" ]
               : [
                    "<32>{#p/basic}* It's not just a plant...\n* It's a NEON plant.",
                    "<32>* What difference does it make?\n* None, none at all."
                 ],
         librarbywindow1: () =>
            SAVE.data.b.svr
               ? [ "<32>{#p/human}* (But there was nothing of real interest to see here.)" ]
               : [ "<32>{#p/basic}* There's a plant in the window.\n* How interesting." ],
         librarbywindow2: () =>
            SAVE.data.b.svr
               ? [ "<32>{#p/human}* (You reach up to the window and put your hands on it.)" ]
               : [ "<32>{#p/human}* (You reach up to the window and put your hands on it.)\n* (You can't see inside.)" ],
         papwindow: () =>
            SAVE.data.b.svr
               ? [ "<32>{#p/human}* (You peer into the window, but you couldn't see anybody inside.)" ]
               : SAVE.data.n.plot_date > 0 && SAVE.data.n.plot_date < 1 && SAVE.data.n.plot < 71.2
               ? [ "<32>{#p/basic}* ... seems Papyrus is waiting patiently for you." ]
               : [ "<32>{#p/basic}* ...看來沒人在家。" ],
         s_puzzlenote: () =>
            SAVE.data.b.svr
               ? [ "<32>{#p/human}* (The note describes the rules of a complex challenge.)" ]
               : SAVE.data.b.s_state_puzzlenote
               ? [ "<33>{#p/basic}* It's illegible chicken-scratch." ]
               : [],
         s_backrooms_lessdog: () =>
            SAVE.data.b.svr
               ? [
                    "<32>{#p/human}* (You run your hands through the nonexistent dog's fur.)\n* (The dog seems to like it.)",
                    ...[
                       [ "<25>{#p/asriel1}{#f/13}* Frisk, are you okay?" ],
                       [ "<25>{#p/asriel1}{#f/13}* Frisk.\n* There's nothing there." ],
                       [ "<25>{#p/asriel1}{#f/15}* ... okay?" ],
                       [ "<25>{#p/asriel1}{#f/15}* ..." ]
                    ][Math.min(asrielinter.s_backrooms_lessdog++, 3)]
                 ]
               : SAVE.data.n.state_starton_lesserdog === 2 || (world.population === 0 && !world.bullied)
               ? [ "<32>{#p/basic}* ...但是誰也沒有來。" ]
               : world.runaway || world.population === 0
               ? [ "<32>{#p/basic}* ...但是人們都逃走了。" ]
               : SAVE.data.n.plot < 72
               ? [ "<32>{#p/basic}* It's playing a game of poker against itself.", "<32>* It appears to be losing..." ]
               : [
                    "<32>{#p/basic}* It's playing a game of poker against itself.",
                    "<32>* It appears to be winning...\n* Somehow."
                 ],
         s_backrooms_lesstable: () =>
            SAVE.data.b.svr
               ? [ "<32>{#p/human}* (You wonder if the Dog chow is edible for humans.)" ]
               : [ "<32>{#p/basic}* 桌上放了一副4-D撲克牌，\n  還有免費狗糧。" ],
         s_beddinng_table: () =>
            SAVE.data.b.svr
               ? [ "<32>{#p/human}* (You glance at the table.)\n* (You then glance away.)" ]
               : [ "<32>{#p/basic}* 必備之桌。\n* 雖無所用，卻恰得其所。" ],
         s_bh_bone: pager.create(
            0,
            () =>
               SAVE.data.b.svr
                  ? [ "<32>{#p/human}* (You admire the artisanship in this minimalistic painting.)" ]
                  : [
                       ...(dateready() && SAVE.data.n.state_starton_papyrus === 0
                          ? [
                               "<18>{#p/papyrus}A CLASSIC IMAGE.",
                               "<18>IT ALWAYS REMINDS ME OF WHAT'S IMPORTANT IN LIFE."
                            ]
                          : []),
                       "<32>{#p/basic}* It's a minimalistic painting of a cartoon bone."
                    ],
            () =>
               SAVE.data.b.svr
                  ? [ "<32>{#p/human}* (You admire the artisanship in this minimalistic painting.)" ]
                  : [ "<32>{#p/basic}* It's a minimalistic painting of a cartoon bone." ]
         ),
         s_bh_cottonball: () =>
            SAVE.data.b.svr
               ? [
                    "<32>{#p/human}* (The content of the notes attached to this pile of socks does not surprise you at all.)"
                 ]
               : [
                    "<32>{#p/basic}* It's a dirty cotton ball with a series of notes on it.",
                    "<23>{#p/papyrusnt}\"SANS!\"\n\"PLEASE PICK UP YOUR COTTON BALL!\"",
                    "<32>{#p/without}* \"ok.\"",
                    "<23>{#p/papyrusnt}\"DON'T PUT IT BACK DOWN!\"\n\"MOVE IT!\"",
                    "<32>{#p/without}* \"ok.\"",
                    "<23>{#p/papyrusnt}\"YOU MOVED IT TWO MICRONS!\"\n\"MOVE IT TO YOUR ROOM!\"",
                    "<32>{#p/without}* \"ok.\"",
                    "<23>{#p/papyrusnt}\"AND DON'T BRING IT BACK!\"",
                    "<32>{#p/without}* \"ok.\"",
                    "<23>{#p/papyrusnt}\"IT'S STILL HERE!\"",
                    "<32>{#p/without}* \"didn't you just say not to bring it back to my room?\"",
                    "<23>{#p/papyrusnt}\"FORGET IT!\""
                 ],
         s_paptrash: pager.create(
            0,
            ...[
               () => [
                  ...(dateready() && SAVE.data.n.state_starton_papyrus === 0
                     ? [
                          "<18>{#p/papyrus}{#f/9}I DIDN'T KNOW YOU WERE A FAN OF GARBAGE-HUNTING!",
                          "<18>{#f/0}DR. ALPHYS WOULD LIKE TO KNOW YOUR NUMBER."
                       ]
                     : []),
                  world.darker ? "<32>{#p/basic}* 一個垃圾桶。" : "<32>{#p/basic}* It's a \"stellar\" trash can."
               ],
               pager.create(
                  1,
                  ...[
                     [
                        "<32>{#p/basic}* You can tell this trash can is \"stellar\" because it has \"stellar\" written on the side."
                     ],
                     [ "<32>{#p/basic}* A \"stellar\" dude with a \"stellar\" trash can.\n* What more could you want." ],
                     [ "<32>{#p/basic}* The \"stellarest\" trash can this side of town." ],
                     [ "<32>{#p/basic}* Or any side, for that matter." ],
                     [ "<32>{#p/basic}* How \"stellar\" is that?" ],
                     [ "<32>{#p/basic}* Very?\n* Very very?\n* More \"stellar\" than anything?" ],
                     [ "<32>{#p/basic}* We've got options here, baby!" ],
                     [
                        "<33>{#p/basic}* But no matter how much time\n  has passed... the trash can\n  still strikes you as \"stellar.\""
                     ],
                     [
                        "<32>{#p/basic}* Actually, the more I think about it, \"stellar\" doesn't begin to scratch the surface."
                     ],
                     [ "<32>{#p/basic}* Like, maybe \"astronomical\" would be a better term for it." ],
                     [ "<33>{#p/basic}* Actually, no.\n* That term's reserved for the higher-ups at the Royal Lab." ],
                     [ "<32>{#p/basic}* 嗯...\n* 萬一這個垃圾桶是黑洞偽裝的呢！" ],
                     [ "<32>{#p/basic}* A black hole trash can...\n* Would you risk it?" ],
                     [ "<32>{#p/basic}* That's a weird question." ],
                     [
                        "<32>{#p/basic}* I guess you could say that, thanks to this trash can, I'm getting all \"spaced out.\""
                     ],
                     [ "<32>{#p/basic}* You might even say I'm feeling... rather otherwordly." ],
                     [ "<32>{#p/basic}* ...\n* Ignore that last statement." ],
                     [ "<32>{#p/basic}* Actually, ignore the last nine things I said entirely.\n* This too." ],
                     [ "<32>{#p/basic}* Truth is...\n* There's only one adjective this trash can could ever be." ],
                     [ "<32>{#p/basic}* What is it, you ask?\n* Well, I'll tell you... if you really want to know." ],
                     [ "<32>{#p/basic}* It's not an astronomical trash can, not by any means." ],
                     [ "<32>{#p/basic}* It's not black hole-ish in any capacity..." ],
                     [ "<32>{#p/basic}* Don't you remember?\n* Don't you remember how this all started?" ],
                     [ "<32>{#p/basic}* It was the first thing I ever said about this trash can." ],
                     [ "<32>{#p/basic}* ...\n* I said...\n* Wait for it..." ],
                     [ "<32>{#p/basic}* It's a \"stellar\" trash can." ]
                  ].map(lines => () => world.darker ? [ "<32>{#p/basic}* 一個垃圾桶。" ] : lines)
               )
            ].map(
               p => () =>
                  SAVE.data.b.svr
                     ? [ "<32>{#p/human}* (You can't make out what's in the trash...)" ]
                     : CosmosUtils.provide(p)
            )
         ),
         s_bh_fridge: pager.create(
            0,
            () =>
               SAVE.data.b.svr
                  ? [ "<32>{#p/human}* (The food in this fridge seems decent enough.)" ]
                  : world.runaway
                  ? [ "<32>{#p/basic}* It's been gutted." ]
                  : SAVE.data.n.plot === 72
                  ? [ "<32>{#p/basic}* Oops, all spaghetti." ]
                  : [
                       ...(dateready() && SAVE.data.n.state_starton_papyrus === 0
                          ? [
                               "<18>{#p/papyrus}{#f/9}AH-HA!\nINTERESTED IN MY FOOD MUSEUM?",
                               "<18>{#f/0}PLEASE, FEEL FREE TO PERUSE MY CULINARY ARTSHOW."
                            ]
                          : []),
                       "<32>{#p/basic}* Half of the fridge is filled with containers all labelled \"spaghetti.\"",
                       "<32>* The other half contains nothing but an empty bottle of orange crush soda."
                    ],
            () =>
               SAVE.data.b.svr
                  ? [ "<32>{#p/human}* (The food in this fridge seems decent enough.)" ]
                  : world.runaway
                  ? [ "<32>{#p/basic}* It's been gutted." ]
                  : SAVE.data.n.plot === 72
                  ? [ "<32>{#p/basic}* Oops, all spaghetti." ]
                  : [
                       ...(dateready() && SAVE.data.n.state_starton_papyrus === 0
                          ? [ "<18>{#p/papyrus}GREAT FRIDGE, ISN'T IT?" ]
                          : []),
                       "<32>{#p/basic}* The bottle is labelled as property of \"ALPHYS.\""
                    ]
         ),
         s_bh_rocktable: pager.create(
            0,
            () =>
               SAVE.data.b.svr
                  ? [ "<32>{#p/human}* (You doubt the stardust is actually edible.)" ]
                  : [
                       ...(dateready() && SAVE.data.n.state_starton_papyrus === 0
                          ? [
                               "<18>{#p/papyrus}AH YES, THE DINING TABLE.",
                               "<18>{#f/5}WE USED TO KEEP A PET MOON ROCK THERE...",
                               "<18>{#f/7}UNTIL ONE DAY, IT TOTALLY VANISHED!",
                               "<18>{#f/4}AT FIRST, I BLAMED THAT MEDDLING CANINE...",
                               "<18>{#f/7}BUT THEN I FOUND THAT SANS HAD USED IT TO TEST HIS...",
                               "<18>{#f/6}HIS... ACTUALLY USEFUL GADGET.\nWOWIE...",
                               "<18>{#f/0}YOU KNOW WHAT, I'LL GIVE IT TO HIM.",
                               "<18>{#f/0}HE GENUINELY TRIED PUTTING EFFORT INTO SOMETHING.",
                               "<18>{#f/4}EVEN IF IT COST US A VALUABLE MOON ROCK.",
                               "<18>{#f/0}YEAH!!\n'E' FOR EFFORT!!"
                            ]
                          : []),
                       "<32>{#p/basic}* It's covered in edible stardust."
                    ],
            () =>
               SAVE.data.b.svr
                  ? [ "<32>{#p/human}* (You doubt the stardust is actually edible.)" ]
                  : [ "<32>{#p/basic}* It's covered in edible stardust." ]
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
                       [ "<25>{#p/asriel1}{#f/16}* Alas, the tragedy of the abandoned cheesecake." ]
                    ][Math.min(asrielinter.s_bh_stove++, 3)]
                  : [
                       "<32>{#p/basic}* There's an empty pie tin inside the stove.",
                       ...(dateready() && SAVE.data.n.state_starton_papyrus === 0
                          ? [
                               "<18>{#p/papyrus}MY BROTHER ALWAYS GOES OUT TO EAT.",
                               "<18>{#f/4}BUT RECENTLY, HE TRIED 'BAKING' SOMETHING...",
                               "<18>{#f/5}I THINK IT WAS... A CHEESECAKE?",
                               "<18>{#f/6}I'M NOT QUITE SURE."
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
                       [ "<25>{#p/asriel1}{#f/16}* Alas, the tragedy of the abandoned cheesecake." ]
                    ][Math.min(asrielinter.s_bh_stove++, 3)]
                  : [ "<32>{#p/basic}* There's an empty pie tin inside the stove." ]
         ),
         s_chew: [ "<32>{#p/basic}* It's a squeaky chew toy labelled 'special attack.'" ],
         s_crossroads_sign: () =>
            SAVE.data.b.svr
               ? [ "<32>{#p/human}* (The sign espouses the many benefits of boxes.)" ]
               : [
                    "<32>{#p/basic}* “這是一個箱子。”",
                    "<32>* “你可以把物品放進去或者拿出來。”",
                    "<32>* “同樣的箱子之後還會出現，\n  不必擔心要回來取東西。”",
                    "<32>* “謹上，一個箱子愛好者。”"
                 ],
         s_doghouse: () =>
            SAVE.data.b.svr
               ? [
                    "<32>{#p/human}* (The interior wall of this doghouse appears to be covered in strange round circles.)"
                 ]
               : SAVE.data.n.state_starton_greatdog === 2
               ? [ "<32>{#p/basic}* There must be a lot of empty space in this doghouse." ]
               : world.genocide || world.edgy || world.darker
               ? [ "<32>{#p/basic}* A tiny doghouse." ]
               : SAVE.data.n.plot === 72
               ? [ "<32>{#p/basic}* I wonder if this doghouse also travels in time." ]
               : [ "<32>{#p/basic}* What a tiny doghouse!", "<32>{#p/basic}* Seems bigger on the inside." ],
         s_doghouse_sign: () =>
            SAVE.data.b.svr
               ? [ "<32>{#p/human}* (You struggle to explain what's written on this sign.)" ]
               : [ "<32>{#p/basic}* \"Woof.\"" ],
         s_dogs_sign: () =>
            SAVE.data.b.svr
               ? [ "<32>{#p/human}* (The sign rates the danger level of certain smells.)" ]
               : [
                    "<32>{#p/basic}* “氣味危險分級”",
                    "<32>* \"Silicone Smell - Robot\"\n* \"WHITE rating\"\n* \"Can become {@fill:#2f2f2f}BLACK{@fill:#fff} rating.\"",
                    "<32>* “不可疑的氣味 - 小狗”\n* “等級：{@fill:#003cff}藍色{@fill:#fff}。”\n* “在地裡打滾的氣味。”",
                    world.runaway
                       ? "<32>* “古怪的氣味 - 人類”\n* “等級：{@fill:#00c000}綠色{@fill:#fff}。”\n* “一旦看到，立馬逃跑！”"
                       : SAVE.data.n.plot === 72
                       ? "<32>* “古怪的氣味 - 人類”\n* “等級：{@fill:#00c000}綠色{@fill:#fff}。”\n* “不懼神明之力。”"
                       : SAVE.data.n.plot < 31
                       ? "<32>* “古怪的氣味 - 人類”\n* “等級：{@fill:#00c000}綠色{@fill:#fff}。”\n* “不惜一切代價消滅！”"
                       : "<32>* “古怪的氣味 - 小狗？”\n* “等級：{@fill:#00c000}綠色{@fill:#fff}。”\n* “深諳擼狗之道。”"
                 ],
         s_dogstandA: () =>
            SAVE.data.b.svr
               ? [ "<32>{#p/human}* (It would appear this sign belongs to a male dog.)" ]
               : player.position.y > 50
               ? [ "<32>{#p/basic}* “他的。”" ]
               : [ "<32>{#p/basic}* Inside is a magazine for fancy blue-and-grey furcuts." ],
         s_dogstandB: () =>
            SAVE.data.b.svr
               ? [ "<32>{#p/human}* (It would appear this sign belongs to a female dog.)" ]
               : player.position.y > 50
               ? [ "<32>{#p/basic}* “她的。”" ]
               : [ "<32>{#p/basic}* Inside is a brochure for blunt heavy-duty weaponry." ],
         s_dogstandC: () =>
            SAVE.data.b.svr
               ? [ "<32>{#p/human}* (The signed letter inside looks to have been ignored.)" ]
               : world.genocide
               ? [
                    "<32>{#p/basic}* 地板上，是一封寫著“果斷撤離”的\n  皇家守衛簽名信。",
                    "<32>{#p/basic}* 信上的“果”字幾乎都被啃掉了..."
                 ]
               : [
                    "<32>{#p/basic}* Inside, on the floor, is a signed Royal Guard letter about standard uniforms.",
                    "<32>{#p/basic}* It's covered in pawprints."
                 ],
         s_grillbys_beegstool: () =>
            SAVE.data.b.svr
               ? [ "<25>{#p/asriel1}{#f/20}* I think that might be a little tall for you." ]
               : world.darker
               ? [ "<32>{#p/basic}* Just another barstool." ]
               : [ "<32>{#p/basic}* 一把高腳凳...", "<32>* 高度剛好適合Sans。" ],
         s_grillbys_drinks: () =>
            SAVE.data.b.svr
               ? [ "<32>{#p/human}* (You can't make out what's under the tray table...)" ]
               : SAVE.data.n.plot === 72
               ? [ "<32>{#p/basic}* 一張摺疊式餐桌。", "<32>* The camera on the underside has been taken away." ]
               : [ "<32>{#p/basic}* 一張摺疊式餐桌。", "<32>* 下面藏了個攝像頭。" ],
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
                    [ "<25>{#p/asriel1}{#f/17}* Seriously, though.\n* You probably shouldn't drink these." ]
                 ][Math.min(asrielinter.s_grillbys_shelf++, 2)]
               : SAVE.data.n.plot === 72
               ? [ "<32>{#p/basic}* A few of the beverages on this shelf have been used up." ]
               : [
                    "<32>{#p/basic}* 櫃子上擺滿了\n  五花八門的派對酒水和噁心的液體。",
                    "<32>{#p/basic}* 唯一一瓶水上貼有“當心明火”的標籤。"
                 ],
         s_grillbys_sidestool: () =>
            SAVE.data.b.svr
               ? [ "<25>{#p/asriel1}{#f/20}* That one's definitely too tall for you." ]
               : world.darker
               ? [ "<32>{#p/basic}* Just another barstool." ]
               : [ "<32>{#p/basic}* 這把高腳凳上標著“PAPYRUS”。" ],
         s_grillbys_smolstool: () =>
            SAVE.data.b.svr
               ? [ "<25>{#p/asriel1}{#f/19}* This one seems like just your size." ]
               : world.darker
               ? [ "<32>{#p/basic}* Just another barstool." ]
               : SAVE.data.b.oops
               ? [ "<32>{#p/basic}* 這把高腳凳沒什麼特別的。" ]
               : [ "<32>{#p/basic}* Something tells me this barstool is very special." ],
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
                    [ "<25>{#p/asriel1}{#f/16}* Just one of many objects whose story is mostly forgotten." ]
                 ][Math.min(asrielinter.s_helipad++, 3)]
               : [ "<32>{#p/basic}* A derelict terminal once used to direct hovercar landings." ],
         s_jenga_sign: () =>
            SAVE.data.b.svr
               ? [ "<32>{#p/human}* (The sign describes the broken state of the display tower's quantum randomizer.)" ]
               : [ "<32>{#p/basic}* \"ATTENTION: The quantum randomizer in this display tower is still broken.\"" ],
         s_library_window: () => [
            "<32>{#p/human}* (You put your hands on window.)",
            ...(SAVE.data.b.svr ? [] : [ "<32>{#p/basic}* Smells like paint." ])
         ],
         s_librarby_blueBooks: pager.create(
            1,
            () =>
               SAVE.data.b.svr
                  ? [
                       "<32>{#p/human}* (The books on this bookshelf consist of comparisons between the past the and present.)"
                    ]
                  : [
                       "<32>{#p/basic}* 書架上標著“舊事重提”。",
                       "<32>{#p/human}* （你取下了一本書...）",
                       "<32>{#p/basic}* “戰前，怪物每天都要學習魔法。”",
                       "<32>* “然而，大多數同胞都在戰爭中犧牲，\n  其中就包括許多教師。”",
                       "<32>* “面對這一問題，剩餘的怪物們\n  開始採用集體學習的方式。”",
                       "<32>* “當時採用這一方式，是為了讓我們\n  能在前哨站更好地生存。”",
                       "<32>* “如今，人口不足的問題\n  幾乎不復存在。”",
                       "<32>* “儘管如此，我們還是\n  堅持新的學習方式，因為...”",
                       "<32>* “...我們懶得再改回去了。”",
                       "<32>{#p/human}* （你把書放回原處。）"
                    ],
            () =>
               SAVE.data.b.svr
                  ? [
                       "<32>{#p/human}* (The books on this bookshelf consist of comparisons between the past the and present.)"
                    ]
                  : [
                       "<32>{#p/basic}* 書架上標著“舊事重提”。",
                       "<32>{#p/human}* （你取下了一本書...）",
                       "<32>{#p/basic}* “以前，\n  怪物使用多種貨幣進行交易。”",
                       "<32>* “主要流通的是珠寶和‘克里’... \n  但它們只能在母星上使用。”",
                       "<32>* “與人類進行貿易時，\n  就只能選擇金錢作為貨幣。”",
                       "<32>* “豐富的金礦資源\n  為我們帶來了許多便利。”",
                       "<32>* “但也因此導致\n  其他貨幣迅速貶值。”",
                       "<32>* “如今，金錢成為了\n  我們唯一的貨幣！”\n* “這就是怪物的作風。”",
                       "<32>{#p/human}* （你把書放回原處。）"
                    ],
            () =>
               SAVE.data.b.svr
                  ? [
                       "<32>{#p/human}* (The books on this bookshelf consist of comparisons between the past the and present.)"
                    ]
                  : [
                       "<32>{#p/basic}* 書架上標著“舊事重提”。",
                       "<32>{#p/human}* （你取下了一本書...）",
                       "<32>{#p/basic}* “Erogot死後，國王盡己所能\n  去保留故園的遺存。”",
                       "<32>* “儘管在儲存途中，\n  他還是把那件最重要的東西\n  弄丟了...”",
                       "<32>* “但我們早已習慣逆來順受，\n  沒有因此責怪他。”",
                       "<32>* “過去兩百年間充滿坎坷，\n  但同時自由也離我們越來越近。”",
                       "<32>* “天使即將降臨...”",
                       "<32>* “...我們猜想，或許他已經到來，\n  此刻正讀著這本書。”",
                       "<32>{#p/human}* （你把書放回原處。）"
                    ]
         ),
         s_librarby_desk: () =>
            SAVE.data.b.svr
               ? [ "<32>{#p/human}* (You observe the dust gathering on this check-out book.)" ]
               : [ "<32>{#p/basic}* 圖書館的借閱記錄。" ],
         s_librarby_greenBooks: pager.create(
            1,
            () =>
               SAVE.data.b.svr
                  ? [
                       "<32>{#p/human}* (The books on this bookshelf consist of information, some of which is actually useful.)"
                    ]
                  : [
                       "<32>{#p/basic}* 書架上標著“雜談”。",
                       "<32>{#p/human}* （你取下了一本書...）",
                       "<32>{#p/basic}* “‘域外網’，是國王與皇家科學員\n  共同打造的網路平臺。”",
                       "<32>* “...不過，主要是皇家科學員的功勞。\n  國王僅僅寫了個歡迎致辭。”",
                       "<32>* “言歸正傳，\n  域外網作為一個‘虛擬廣場’，\n  將前哨站的居民聯繫在一起。”",
                       "<32>* “想要創建賬戶，你只需要...”",
                       "<32>* “呃... 好吧...”",
                       "<32>* “這教程看著清楚，\n  寫的可是不清不楚。”",
                       "<32>{#p/human}* （你把書放回原處。）"
                    ],
            () =>
               SAVE.data.b.svr
                  ? [
                       "<32>{#p/human}* (The books on this bookshelf consist of information, some of which is actually useful.)"
                    ]
                  : [
                       "<32>{#p/basic}* 書架上標著“雜談”。",
                       "<32>{#p/human}* （你取下了一本書...）",
                       "<32>{#p/basic}* “要是你想到前哨站各處逛逛的話，\n  呼叫旅人是你的不二之選。”",
                       "<32>* “不管你想去哪，他都可以載你一程。”",
                       "<32>* “...因為，你總可以\n  在最近的停靠站找到他。”",
                       "<32>* “而且，說真的，\n  他說話有點不知所云。”",
                       "<33>* “‘狗子的公道’到底是個啥？”",
                       "<32>{#p/human}* （你把書放回原處。）"
                    ],
            () =>
               SAVE.data.b.svr
                  ? [
                       "<32>{#p/human}* (The books on this bookshelf consist of information, some of which is actually useful.)"
                    ]
                  : [
                       "<32>{#p/basic}* 書架上標著“雜談”。",
                       "<32>{#p/human}* （你取下了一本書...）",
                       "<32>{#p/basic}* “怪物們可以自由穿梭於\n  前哨站的各個區域。”",
                       "<32>* “只有首塔頂端的最終長廊\n  是禁區。”",
                       "<32>* “除了皇家科學員，\n  任何居民都不得通過那裡。”",
                       "<32>* “...我們仍不清楚其中的原因。”",
                       "<32>{#p/human}* （你把書放回原處。）"
                    ]
         ),
         s_librarby_ladder: () =>
            SAVE.data.b.svr
               ? [ "<32>{#p/human}* (It appears the access hatch above this ladder was sealed shut.)" ]
               : [ "<32>{#p/basic}* 隨便放的一把梯子。\n* 沒什麼好說的。" ],
         s_librarby_pinkBooks: pager.create(
            1,
            () =>
               SAVE.data.b.svr
                  ? [
                       "<32>{#p/human}* (The books on this bookshelf consist of various facts about the biology of monsters.)"
                    ]
                  : [
                       "<32>{#p/basic}* 書架上標著“怪物生物學”。",
                       "<32>{#p/human}* （你取下了一本書...）",
                       "<32>{#p/basic}* “理論上講，\n  怪物的葬禮十分酷炫。”",
                       "<32>* “當怪物老了，\n  然後翹辮子了，\n  他們就會化為塵埃。”",
                       "<32>* “在葬禮上，我們拿來這些塵埃，\n  灑在他生前最喜歡的東西上。”",
                       "<32>* “這樣一來，他的精神\n  就會留存在那件物品中...”",
                       "<32>* “唔，我湊夠字數了嗎？”\n* “我有點討厭寫這個。”",
                       "<32>{#p/human}* （你把書放回原處。）"
                    ],
            () =>
               SAVE.data.b.svr
                  ? [
                       "<32>{#p/human}* (The books on this bookshelf consist of various facts about the biology of monsters.)"
                    ]
                  : [
                       "<32>{#p/basic}* 書架上標著“怪物生物學”。",
                       "<32>{#p/human}* （你取下了一本書...）",
                       "<32>{#p/basic}* “怪物的軀體由魔法構成，\n  因此和靈魂密不可分。”",
                       "<32>* “如果一個怪物蓄意傷人，\n  還對此執迷不悟...”",
                       "<32>* “他就會變得異常強大。”",
                       "<32>* “不過大多數我族同胞並不崇尚暴力，\n  至少不是打心底裡。”",
                       "<32>* “可是，如果我們再次遭受襲擊，\n  能用於自衛的，只有一座前哨站...”",
                       "<32>* ...",
                       "<32>{#p/human}* （你不想再讀下去了。）"
                    ],
            () =>
               SAVE.data.b.svr
                  ? [
                       "<32>{#p/human}* (The books on this bookshelf consist of various facts about the biology of monsters.)"
                    ]
                  : [
                       "<32>{#p/basic}* 書架上標著“怪物生物學”。",
                       "<32>{#p/human}* （你取下了一本書...）",
                       "<32>{#p/basic}* “怪物的身體主要由魔法構成，\n  而人類的身體主要由水構成。”",
                       "<32>* “就物質組成來說，\n  人類比我們強大得多。”",
                       "<32>* “但是，他們永遠不能體會到\n  使用魔法表達自我的樂趣。”",
                       "<32>* “他們永遠不會收到\n  一張彈幕生日賀卡...”",
                       "<32>* “也永遠不能\n  使用隱藏術和鷹眼術玩捉迷藏...”",
                       "<32>* “更無法拿電魔法\n  辦一場炫酷燈光秀！”",
                       "<32>* “太可憐了。”",
                       "<32>{#p/human}* （你把書放回原處。）"
                    ]
         ),
         s_librarby_purpleBooks: pager.create(
            1,
            () =>
               SAVE.data.b.svr
                  ? [ "<32>{#p/human}* (The books on this bookshelf document the history of the monster homeworld.)" ]
                  : [
                       "<32>{#p/basic}* 書架上標著“故園歷史”。",
                       "<32>{#p/human}* （你取下了一本書...）",
                       "<32>{#p/basic}* “故園日夜，皆為奇觀。”",
                       "<32>* “晨曦初露，光塔劃空，天啟新篇。”",
                       "<32>* “至於白晝，光層共振，輝煌萬丈。”",
                       "<32>* “能量盡釋，夜幕悄然。”",
                       "<32>* “星辰降臨，魔力凝聚。”",
                       "<32>* “日光之能，盡數落地，歸於塵寰。”",
                       "<32>* “直至光塔重升，耀眼如初。”",
                       "<32>* “此乃晝夜，永恆循環，主宰光陰。”",
                       "<32>{#p/human}* （你把書放回原處。）"
                    ],
            () =>
               SAVE.data.b.svr
                  ? [ "<32>{#p/human}* (The books on this bookshelf document the history of the monster homeworld.)" ]
                  : [
                       "<32>{#p/basic}* 書架上標著“故園歷史”。",
                       "<32>{#p/human}* （你取下了一本書...）",
                       "<32>{#p/basic}* “你知道嗎，怪物們如今的社會結構\n  並非一直存在。”",
                       "<32>* “很久很久以前，\n  確切來說，距今大約幾千年時...”",
                       "<32>* “我們的祖先每天漫無目的，\n  肆意嬉戲。”",
                       "<32>* “不敢相信！\n  那時的怪物甚至連衣服都不穿！”",
                       "<32>* “不過，隨著時間流逝，\n  我們有了新的追求，渴望進化。”",
                       "<32>* “在那場偉大的復興運動中，\n  連魔法的本質都被擺上檯面，\n  成為焦點。”",
                       "<32>* “這些進步奠定了我們的社會結構，\n  乃至如今的生活方式。”",
                       "<32>* “...我還是不敢相信\n  長達兩千年的歷史中，\n  我們都在裸著亂跑。”",
                       "<32>* “哪有風度？”\n* “哪有時尚？”\n* “太不可思議了。”",
                       "<32>{#p/human}* （你把書放回原處。）"
                    ],
            () =>
               SAVE.data.b.svr
                  ? [ "<32>{#p/human}* (The books on this bookshelf document the history of the monster homeworld.)" ]
                  : [
                       "<32>{#p/basic}* 書架上標著“故園歷史”。",
                       "<32>{#p/human}* （你取下了一本書...）",
                       "<32>{#p/basic}* “人怪首次會面時，\n  當政的怪物王是Erogot。”",
                       "<32>* “在他英明的領導下，\n  兩族和平共處，相安無事。”",
                       "<32>* “但隨著Erogot壽終正寢...\n  這一切都一去不復返了。”",
                       "<32>* “Erogot有能力維持兩族長久和平，\n  而王子卻難以承襲此功。”",
                       "<32>* “於是，一場大戰將在所難免...\n  實在令人痛心。”",
                       "<32>{#p/human}* （你把書放回原處。）"
                    ]
         ),
         s_librarby_yellowBooks: pager.create(
            1,
            () =>
               SAVE.data.b.svr
                  ? [ "<32>{#p/human}* (The books on this bookshelf discuss various technologies devised by monsters.)" ]
                  : [
                       "<32>{#p/basic}* 書架上標著“怪物科技”。",
                       "<32>{#p/human}* （你取下了一本書...）",
                       "<32>{#p/basic}* “Gerson曾說，\n  前哨站以前只是個小太空站。”",
                       "<32>* “在受了整整二十年苦之後，\n  有人將目光轉向了那道力場。\n  心想...”",
                       "<32>* “‘這股強大的能量，\n  能否為己所用呢？’”",
                       "<32>* “這主意簡潔明瞭，\n  但又十分巧妙。”",
                       "<32>* “在這一想法的指引下，\n  核心最終建成，\n  我們因此有了穩定的能源。”",
                       "<32>* “時至今日，我們仍在使用它！”",
                       "<32>{#p/human}* （你把書放回原處。）"
                    ],
            () =>
               SAVE.data.b.svr
                  ? [ "<32>{#p/human}* (The books on this bookshelf discuss various technologies devised by monsters.)" ]
                  : [
                       "<32>{#p/basic}* 書架上標著“怪物科技”。",
                       "<32>{#p/human}* （你取下了一本書...）",
                       "<32>{#p/basic}* “啊，人工智能真是\n  世界一大奇蹟...”",
                       "<32>* “...也可能恰恰相反。”",
                       "<32>* “自從建築機器人K-541.12出了事之後，\n  我們就徹底放棄了研發\n  有自我意識的AI。”",
                       "<32>* “王后甚至下令，\n  禁止任何人開發新的AI程式。”",
                       "<32>* “現在，還有能力與資源去搞AI的，\n  只剩一個怪物了。”",
                       "<32>{#p/human}* （你把書放回原處。）"
                    ],
            () =>
               SAVE.data.b.svr
                  ? [ "<32>{#p/human}* (The books on this bookshelf discuss various technologies devised by monsters.)" ]
                  : [
                       "<32>{#p/basic}* 書架上標著“怪物科技”。",
                       "<32>{#p/human}* （你取下了一本書...）",
                       "<32>{#p/basic}* “如今，很多人都已經忘了\n  太空中幾乎沒有重力。”",
                       "<32>* “早在戰前，怪物在科技方面\n  就有許多突破性成果。”",
                       "<32>* “其中之一，\n  就是先進的重力控制系統。”",
                       "<32>* “如今，前哨站的每一個角落，\n  不論大小，都安裝了\n  使用這一技術的裝置。”",
                       "<32>* “現在正在看書的你，\n  可能就站在其中一個裝置上面。”",
                       "<32>{#p/human}* （你把書放回原處。）"
                    ]
         ),
         s_math_sign: () =>
            SAVE.data.b.svr
               ? [ "<32>{#p/human}* (You can't help but be confused at the contents of this sign.)" ]
               : [ "<32>{#p/basic}* “警告：狗子的公道”" ],
         s_pacing_sign: () =>
            SAVE.data.b.svr
               ? [ "<32>{#p/human}* （看著牌子上的內容，\n  你不禁揚起嘴角。）" ]
               : [ "<32>{#p/basic}* “留意有狗”\n* “...請撫摸狗...”" ],
         s_phonecard: () =>
            SAVE.data.b.svr
               ? [
                    "<32>{#p/human}* (The note requests that you call a certain phone number.)",
                    "<32>{#s/phone}{#p/event}* 滴滴滴...",
                    "<32>{#p/human}* (No connection.)"
                 ]
               : world.runaway
               ? [
                    "<32>{#p/basic}* It's a note.",
                    "<32>* \"Call me!\"\n* \"Here's my number!\"",
                    "<32>{#s/phone}{#p/event}* 滴滴滴...",
                    "<32>{#p/basic}* The call went straight to voice-mail.",
                    "<32>{#p/basic}* \"Hello, lonely caller!\"\n* \"Would you like to escape the outpost with me?\"",
                    "<32>{#s/equip}{#p/event}* 滴..."
                 ]
               : SAVE.data.n.plot === 72
               ? [
                    "<32>{#p/basic}* It's a note.",
                    "<32>* \"Call me!\"\n* \"Here's my number!\"",
                    "<32>{#s/phone}{#p/event}* 滴滴滴...",
                    "<32>{#p/human}* (No connection.)"
                 ]
               : [
                    "<32>{#p/basic}* It's a note.",
                    "<32>* \"Call me!\"\n* \"Here's my number!\"",
                    "<32>{#s/phone}{#p/event}* 滴滴滴...",
                    "<32>{#p/basic}* The call went straight to voice-mail.",
                    "<32>{#p/basic}* \"Hello, lonely caller!\"\n* \"I'm so sorry I couldn't be here to greet you~\"",
                    "<32>{#s/equip}{#p/event}* 滴...",
                    ...(world.goatbro && SAVE.flag.n.ga_asrielVoicemail++ < 1
                       ? [ "<25>{#p/asriel2}{#f/10}* ... weird." ]
                       : [])
                 ],
         s_sr_cottonball: () =>
            world.darker
               ? [ "<32>{#p/basic}* A series of cotton balls in the way of the closet." ]
               : [
                    "<32>{#p/basic}* A series of neatly-organized cotton balls.",
                    ...(SAVE.data.b.s_state_inverter
                       ? [ "<32>{#p/basic}* ... makes you wonder why they're still in the way of the closet." ]
                       : [ "<32>{#p/basic}* ... makes you wonder where the rest of Sans's junk went." ])
                 ],
         s_sr_treadmill: [ "<32>{#p/basic}* It's a treadmill.", "<32>{#p/basic}* It's at its highest setting." ],
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
            "<32>* \"Preperations for the test substance are due to conclude in the coming days.\"",
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
               : [ "<32>{#p/basic}* ... hmm..." ])
         ],
         s_pr_papbed: pager.create(
            0,
            () =>
               SAVE.data.b.svr
                  ? [ "<32>{#p/human}* (You appreciate the bed for being very awesome in general.)" ]
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
                  ? [ "<32>{#p/human}* (You thank the bed for being very awesome in general.)" ]
                  : [ "<32>{#p/basic}* A neatly-made hypercar bed." ]
         ),
         s_pr_papbones: pager.create(
            0,
            () =>
               SAVE.data.b.svr
                  ? [
                       "<32>{#p/basic}* (You reach into the box, but the bones don't deal any damage.)",
                       ...[
                          [ "<25>{#p/asriel1}{#f/21}* Careful, Frisk!\n* Those bones might still be active..." ],
                          [ "<25>{#p/asriel1}{#f/16}* ... or maybe not." ],
                          [ "<25>{#p/asriel1}{#f/13}* I wonder if you're the kind of person who stands on hot coals." ],
                          [ "<25>{#p/asriel1}{#f/8}* Boney hot coals." ]
                       ][Math.min(asrielinter.s_pr_papbones++, 3)]
                    ]
                  : [
                       "<32>{#p/basic}* A box of bones.",
                       ...(roomready()
                          ? [
                               "<18>{#p/papyrus}HEY, THOSE ARE ALL THE ATTACKS I USED ON YOU.",
                               "<18>GREAT MEMORIES, HUH?",
                               "<18>SEEMS LIKE IT WAS ONLY YESTERDAY...",
                               "<18>{#f/4}EVEN THOUGH IT BASICALLY JUST HAPPENED."
                            ]
                          : [])
                    ],
            () =>
               SAVE.data.b.svr
                  ? [
                       "<32>{#p/basic}* (You reach into the box, but the bones don't deal any damage.)",
                       ...[
                          [],
                          [ "<25>{#p/asriel1}{#f/16}* ... or maybe not." ],
                          [ "<25>{#p/asriel1}{#f/13}* I wonder if you're the kind of person who stands on hot coals." ],
                          [ "<25>{#p/asriel1}{#f/8}* Boney hot coals." ]
                       ][Math.min(asrielinter.s_pr_papbones++, 3)]
                    ]
                  : [ "<32>{#p/basic}* A box of bones." ]
         ),
         s_pr_papcloset: pager.create(
            0,
            () => [
               "<32>{#p/human}* (You look inside the closet...)",
               ...(SAVE.data.b.svr
                  ? [ "<32>{#p/human}* (It's hard for you to see in such a dark place.)" ]
                  : !world.runaway
                  ? [ "<32>{#p/basic}* The clothes inside have been frantically shifted around." ]
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
                  ? [ "<32>{#p/human}* (It's hard for you to see in such a dark place.)" ]
                  : !world.runaway
                  ? [ "<32>{#p/basic}* The clothes inside have been frantically shifted around." ]
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
                       [ "<25>{#p/asriel1}{#f/10}* What?\n* It wasn't anything bad.\n* Not that time, anyway." ],
                       [
                          "<25>{#p/asriel1}{#f/16}* Okay, okay.\n* I might have disguised myself as a human.",
                          "<25>{#f/15}* ... yeah.\n* It looked as bad as you think it would.",
                          "<25>{#f/5}* But hey, I got a chance to battle the great Papyrus!"
                       ],
                       [ "<25>{#p/asriel1}{#f/20}* Totally worth it." ]
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
                       [ "<25>{#p/asriel1}{#f/10}* What?\n* It wasn't anything bad.\n* Not that time, anyway." ],
                       [
                          "<25>{#p/asriel1}{#f/16}* Okay, okay.\n* I might have disguised myself as a human.",
                          "<25>{#f/15}* ... yeah.\n* It looked as bad as you think it would.",
                          "<25>{#f/5}* But hey, I got a chance to battle the great Papyrus!"
                       ],
                       [ "<25>{#p/asriel1}{#f/20}* Totally worth it." ]
                    ][Math.min(asrielinter.s_pr_papposter++, 3)]
                  : [ "<32>{#p/basic}* It's a flag with a menacing skull painted on it." ]
         ),
         s_pr_paptable: pager.create(
            0,
            () =>
               SAVE.data.b.svr
                  ? [ "<32>{#p/human}* (You marvel at the detail of these action figures...)" ]
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
                  ? [ "<32>{#p/human}* (Upon reflection, you realize who created these.)" ]
                  : [ "<32>{#p/basic}* A set of action figures with tacky, matching uniforms." ]
         ),
         s_puzzle1_sign: () =>
            SAVE.data.b.svr
               ? [ "<32>{#p/human}* (The sign describes the basics of solving the puzzle.)" ]
               : [ "<32>{#p/basic}* \"Trigger each circuit in order.\"" ],
         s_puzzle2_sign: () =>
            SAVE.data.b.svr
               ? [ "<32>{#p/human}* (The sign defines a starting point for solving the puzzle.)" ]
               : [ "<32>{#p/basic}* \"Start at the left.\"" ],
         s_puzzle3_note: () =>
            SAVE.data.b.svr
               ? world.postnoot && world.nootflags.has('s_puzzle3') // NO-TRANSLATE

                  ? [
                       "<32>{#p/human}* (The note's brags about having solved a puzzle in advance.)",
                       ...[
                          [ "<25>{#p/asriel1}{#f/20}* Ha, uh, I wonder who wrote that note, huh?\n* Yeah..." ],
                          [ "<25>{#p/asriel1}{#f/20}* Couldn't be me!" ],
                          [ "<25>{#p/asriel1}{#f/13}* ..." ]
                       ][Math.min(asrielinter.s_puzzle3_note++, 2)]
                    ]
                  : [ "<32>{#p/human}* (The note remarks about how the puzzle solution was not modified as intended.)" ]
               : world.postnoot && world.nootflags.has('s_puzzle3') // NO-TRANSLATE

               ? [
                    [
                       "<32>{#p/basic}* It's a note from someone who didn't say who they were...",
                       "<32>* \"Puzzles like these can be so annoying, can't they?\"",
                       "<32>* \"Thankfully, I've taken care of it for you.\"",
                       "<32>* \"Isn't that nice?\"\n* \"You should be thankful!\"",
                       "<32>µ - \"Sincerely,\"\nµ Your Best Friend"
                    ],
                    [
                       "<32>{#p/basic}* It's a note from someone who didn't say who they were...",
                       "<32>* \"Don't worry.\"\n* \"No matter how many times you do this over...\"",
                       "<32>* \"I'll always be here to make sure you never have to deal with a puzzle again.\"",
                       "<32>* \"It's the least I can do.\"",
                       "<32>µ - \"Forevermore,\"\nµ Your Best Friend"
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
                    "<32>µ - \"with all due respect,\"\nµ sans"
                 ]
               : [
                    "<32>{#p/basic}* It's a note from Papyrus...",
                    "<23>{#p/papyrus}{#f/30}\"HUMAN!! THIS PUZZLE IS NOT AS IT SEEMS.\"",
                    "<23>\"WHILE I WAS WAITING FOR YOU, I TRIED TO MODIFY IT...\"",
                    "<23>\"TO MAKE THE PATTERN RESEMBLE MY FACE, OF COURSE!\"",
                    "<23>\"BUT SOMETHING WENT WRONG...\"",
                    "<23>\"ALL I COULD CREATE WAS A LOUSY ARROW SHAPE!!!\"",
                    "<23>\"(IN OTHER WORDS, YOU WILL HAVE TO SOLVE IT YOURSELF.)\"",
                    "<23>\"BUT DON'T WORRY!\"\n\"I KNOW YOU CAN DO IT, HUMAN!\"",
                    "<23>µ - \"WITH THE UTMOST FAITH,\"\nµ PAPYRUS"
                 ],
         s_redbook: () =>
            SAVE.data.b.svr
               ? [ "<32>{#p/human}* (The uniquely-colored book describes a secret weapon lost to time.)" ]
               : [
                    "<32>{#p/basic}* It's a bookshelf.",
                    "<32>{#p/human}* （你取下了那本紅皮書...）",
                    "<32>{#p/basic}* “人怪大戰進入到白熱化階段時，\n  皇家軍隊成立了一個秘密組織。”",
                    "<32>{#p/basic}* “也就是所謂的‘特種武器’研發部，\n  專門用來搞實驗研究。”",
                    "<32>{#p/basic}* “他們造出了許多‘戰鬥利器’，\n  但實戰效果都是微乎其微。”",
                    "<32>{#p/basic}* “只有一個例外，\n  它就是被稱作‘頓悟’的魔法卷軸。”",
                    "<32>{#p/basic}* “這卷軸的力量超乎尋常，\n  即使用來對付人類也過於危險。”",
                    "<32>{#p/basic}* “結果，卷軸被從內部鎖死，\n  並很快封存起來。”",
                    "<32>{#p/basic}* “傳說，有人把它送上了\n  開往前哨站的運輸船。”",
                    "<32>{#p/basic}* “如果傳說屬實，\n  那麼它現在位於何處？”\n* “又該如何解開枷鎖？”",
                    "<32>{#p/basic}* “但願，以上疑問永埋塵土之下，\n  湮沒無聞。”",
                    "<32>{#p/human}* （你把書放回原處。）"
                 ],
         s_sansbox: () =>
            SAVE.data.b.svr
               ? [ "<32>{#p/human}* (Due to how full it is, you can't seem to see inside the mailbox.)" ]
               : SAVE.data.n.plot === 72 && !world.runaway
               ? [
                    "<32>{#p/basic}* Somehow, the mailbox has been stuffed with even more unread junk mail than before.",
                    ...(SAVE.data.b.oops ? [] : [ "<32>{#p/basic}* ... color me surprised." ])
                 ]
               : [
                    "<32>{#p/basic}* （信箱裡塞滿了未開封的垃圾郵件。）",
                    ...(SAVE.data.b.oops ? [] : [ "<32>{#p/basic}* ... he never reads the mail anyway." ])
                 ],
         s_sheddoor: () =>
            SAVE.data.b.svr
               ? [ "<32>{#p/human}* (You can't seem to find a way in.)" ]
               : [ "<32>{#p/basic}* 門被反鎖了。" ],
         s_slew: [ "<32>{#p/basic}* It's dog food.\n* The pieces look like bones." ],
         s_spagnote: () =>
            SAVE.data.b.svr
               ? [ "<32>{#p/human}* (The note declares the brilliance of enticing you with a place of spaghetti.)" ]
               : !world.genocide && world.edgy
               ? [
                    "<32>{#p/basic}* It's a note from Sans...",
                    "<32>{#p/without}* \"whoops.\"\n* \"seems like you've found my bro's spaghetti.\"",
                    "<32>* \"looks tasty, right?\"",
                    "<32>* \"well.\"\n* \"it turns out that's kind of the point.\"",
                    "<32>* \"i'd be careful with it if i were you...\"",
                    "<32>* \"'cause the more time you spend eating this...\"",
                    "<32>* \"the more time i have to prepare for the next puzzle.\"",
                    "<23>µ - \"joke's on you,\"\nµ sans"
                 ]
               : [
                    "<32>{#p/basic}* It's a note from Papyrus...",
                    "<23>{#p/papyrus}{#f/30}\"HUMAN!!\"\n\"PLEASE ENJOY THIS SPAGHETTI.\"",
                    "<23>(\"LITTLE DO YOU KNOW, THIS SPAGHETTI IS A TRAP...\")",
                    "<23>(\"DESIGNED TO ENTICE YOU!!!\")",
                    "<23>(\"YOU'LL BE SO BUSY EATING IT...\")",
                    "<23>(\"THAT YOU WON'T REALIZE THAT YOU AREN'T PROGRESSING!!\")",
                    "<23>(\"THOROUGHLY JAPED AGAIN BY THE GREAT PAPYRUS!!!\")",
                    "<23>µ - \"NYEH-HEH-HEH,\"\nµ PAPYRUS"
                 ],
         s_town_camera1: () =>
            SAVE.data.b.svr
               ? []
               : world.runaway
               ? [
                    "<32>{#p/basic}* There's no longer anyone to spy on you through the camera hidden in these crystal pods."
                 ]
               : SAVE.data.n.plot === 72
               ? [ "<32>{#p/basic}* There's no longer a camera hidden in these crystal pods." ]
               : [ "<32>{#p/basic}* There's a camera hidden in these crystal pods." ],
         s_trapnote: () =>
            [
               [
                  "<32>{#p/basic}* It's a note from Papyrus...",
                  "<23>{#p/papyrus}{#f/30}\"SORRY, I HAVE TO LOCK YOU IN THE GUEST ROOM UNTIL UNDYNE ARRIVES.\"",
                  "<23>\"FEEL FREE TO MAKE YOURSELF AT HOME!!!\"",
                  "<22>\"REFRESHMENTS AND ACCOMODATIONS HAVE BEEN PROVIDED.\"",
                  "<23>µ - \"NYEHFULLY YOURS,\"\nµ PAPYRUS"
               ],
               [
                  "<32>{#p/basic}* It's a note from Papyrus...",
                  "<23>{#p/papyrus}{#f/30}\"PLEASE ASK BEFORE YOU ESCAPE!!!\"",
                  "<23>\"WHEN YOU WENT MISSING I GOT WORRIED SICK!!!\"",
                  "<23>µ - \"SLIGHTLY BONETROUSLED,\"\nµ PAPYRUS"
               ],
               [
                  "<32>{#p/basic}* It's a note from Papyrus...",
                  "<23>{#p/papyrus}{#f/30}\"IF YOU'RE ONLY LOOKING FOR A PLACE TO STAY...\"",
                  "<23>\"JUST ASK!!! YOU DON'T NEED TO FIGHT ME!!!\"",
                  "<23>µ - \"YOUR HOST,\"\nµ PAPYRUS"
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
                          "<25>{#f/15}* Imagine how much worse things could have been had they been believed..."
                       ],
                       [
                          "<26>{#p/asriel1}{#f/17}* I'm glad you're not a liar, Frisk.",
                          "<25>{#f/13}* I've had enough dishonesty in my life as it is.",
                          "<25>{#f/20}* ... sorry.\n* I guess this sorta came out of left field."
                       ],
                       [ "<26>{#p/asriel1}{#f/15}* Life sure does like to throw curveballs at you sometimes..." ]
                    ][Math.min(asrielinter.s_tree++, 3)]
                  : world.darker
                  ? [ "<32>{#p/basic}* There's nothing special about this tree-like structure." ]
                  : SAVE.data.n.plot === 72
                  ? [
                       "<32>{#p/basic}* Soon enough, this civilization will need to migrate once again.",
                       "<32>* Where shall they go?\n* Sooner or later, we will know."
                    ]
                  : [
                       "<32>{#p/basic}* 這個人畜無害的樹狀結構，\n  其實是一個文明的家園。",
                       "<32>* On the brink of extinction, they migrated here to save their species."
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
                       [ "<26>{#p/asriel1}{#f/17}* Life sure does like to throw curveballs at you sometimes..." ]
                    ][Math.min(asrielinter.s_tree++, 3)]
                  : world.darker
                  ? [ "<32>{#p/basic}* ..." ]
                  : SAVE.data.n.plot === 72
                  ? [ "<32>{#p/basic}* Don't worry.\n* They'll find their own way." ]
                  : [ "<32>{#p/basic}* Pro tip...\n* Don't shake the innocent tree- like structure." ]
         ),
         doginfo: () =>
            SAVE.data.b.svr
               ? [ "<32>{#p/human}* (The dog treats inside look to have been somewhat devoured.)" ]
               : SAVE.data.n.state_starton_doggo === 2 || SAVE.data.n.plot > 27
               ? SAVE.data.b.oops
                  ? [ "<32>{#p/basic}* 裡面有一袋半空的狗糧。" ]
                  : [ "<32>{#p/basic}* Inside is a pack of dog treats. It's half-full." ]
               : [
                    SAVE.data.n.state_starton_doggo === 3
                       ? "<32>{#p/basic}* Inside is a rather sleepy guard dog.\n* It cannot see you."
                       : "<32>{#p/basic}* Inside is a rather confused guard dog.\n* It cannot see you."
                 ]
      },
      truetext: {
         doggo1: [ "<32>{#p/basic}* Dog treats?\n* That dog needs a therapist." ],
         doggo2: [ "<32>{#p/basic}* Fetch, huh?\n* Now we're getting places." ],
         dogs1: [ "<32>{#p/basic}* The things we do for the good of the canines." ],
         dogs2: [ "<32>{#p/basic}* The rusty spanner strikes again." ],
         fetch: () =>
            [
               [ "<32>{#p/basic}* Fetch, huh?\n* Now we're getting places." ],
               [ "<32>{#p/basic}* That's two for two on the rusty spanner method.", "<32>{#p/basic}* What else is new?" ],
               [ "<32>{#p/basic}* You can't keep getting away with this." ]
            ][SAVE.data.n.state_starton_latefetch++],
         great1: [ "<32>{#p/basic}* It's a proven fact that little puppy kisses are the best." ],
         great2: [
            "<32>{#p/basic}* The entire canine unit, beaten with nothing but a wrench and a strong throwing arm.",
            "<32>* The lunacy speaks for itself."
         ],
         great3: [ "<32>{#p/basic}* What just happened?" ],
         lesser1: [ "<32>{#p/basic}* Mysterious words about extending necks suddenly make a lot more sense." ],
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
         papyrus3: [ "<32>{#p/basic}* This is it...", "<32>* You're about to spar with the coolest skeleton in town." ],
         papyrus4: [
            "<32>{#p/basic}* He might as well have been waiting his whole life for this moment...",
            "<32>* If I were you, I wouldn't let it go to waste."
         ],
         papyrus5: [ "<32>{#p/basic}* Don't worry.", "<32>* With any luck, you'll be best friends in no time." ],
         puzzle1: () =>
            SAVE.data.b.svr
               ? [ "<25>{#p/asriel1}{#f/20}* Not bad, Frisk.\n* I didn't know you were a mathematics expert..." ]
               : [ "<32>{#p/basic}* Wow.\n* You actually solved it?" ],
         sans3: [ "<32>{#p/basic}* You tried." ],
         sans4: [ "<32>{#p/basic}* Have you done this before...?" ],
         sans5: [ "<32>{#p/basic}* Really, Sans?\n* That \"puzzle\" wasn't even worth looking at." ],
         sans6: [ "<32>{#p/basic}* Really, Sans?\n* That \"puzzle\" was impossible." ],
         sans7: [ "<32>{#p/basic}* That was anti-climactic." ],
         sans8: [ "<32>{#p/basic}* I'm just as confused as you." ],
         sans9: [ "<32>{#p/basic}* Aw, c'mon!\n* I wanted to see that!", "<32>* ... oh well..." ],
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
               : "<32>{#p/basic}* I heard the taxi driver doesn't eat their greens.",
            "<33>{#p/basic}* Are they even a real monster...?"
         ],
         () => [
            SAVE.data.n.plot === 72
               ? "<32>{#p/basic}* A real monster wouldn't hesitate to escape this dreadful place."
               : world.population === 0
               ? "<32>{#p/basic}* ..."
               : "<32>{#p/basic}* Real monsters always eat their greens."
         ]
      ),
      vegetoidx: () =>
         SAVE.data.b.svr
            ? [ "<32>{#p/human}* (You can't seem to find anyone down there.)" ]
            : world.bulrun
            ? [ "<32>{#p/basic}* ...但是人們都逃走了。" ]
            : [ "<32>{#p/basic}* ...但是誰也沒有來。" ],
      xtowerHiscoreHeader: "排行榜",
      xtowerHiscoreNames: {
         kidd: "UNDYNEFAN10",
         napstablook: "NAPSTABLOOK22",
         papyrus: "COOLSKELETON95",
         sans: "lazybones.",
         undyne: "STRONGFISH91",
         you: () => (49 <= SAVE.data.n.plot ? "ALPHYS2" : "(Unknown)")
      },
      xtowerMessage1: "New High Score!",
      xtowerMessage2: "Better Luck Next Time...",
      xtowerMessage3: "Thanks For Playing!",
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
                          ? [ "<25>{#p/asriel2}{#f/10}* Daring today, aren't we?" ]
                          : []
                       : SAVE.flag.n.genocide_milestone < 6
                       ? SAVE.flag.n.ga_asrielAlphysCom2++ < 1
                          ? [ "<25>{#p/asriel2}{#f/1}* Now THAT's the Alphys I like to see." ]
                          : []
                       : SAVE.flag.n.ga_asrielAlphysCom5++ < 1
                       ? [ "<25>{#p/asriel2}{#f/4}* Too bad this won't save her when she's dead." ]
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
                            ? [ "<25>{#f/0}* no hard feelings.", "<32>{#s/equip}{#p/event}* 滴..." ]
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
      dogs: () => (world.goatbro ? [ "<32>{#p/asriel2}* Dogamy and Dogaressa." ] : [ "<32>{#p/story}* Dogi assault you!" ]),
      spacetopJerry: () =>
         world.goatbro
            ? [ "<32>{#p/asriel2}* 俗氣的帽子再配上沒譜的夥計。" ]
            : [ "<32>{#p/story}* Astro Serf saunters in!\n* Jerry came too." ],
      stardrakeSpacetop: () =>
         world.goatbro
            ? [ "<32>{#p/asriel2}* 笨蛋青年兩人組。" ]
            : SAVE.data.b.s_state_chilldrake
            ? [ "<32>{#p/story}* Chilldrake and Astro Serf pose like bad guys." ]
            : [ "<32>{#p/story}* Stardrake and Astro Serf pose like bad guys." ],
      stardrakeSpacetop2a: () =>
         world.goatbro
            ? [ "<32>{#p/asriel2}* 只剩一個了。" ]
            : SAVE.data.b.s_state_chilldrake
            ? [ "<32>{#p/story}* Chilldrake remains steady." ]
            : [ "<32>{#p/story}* Stardrake remains steady." ],
      stardrakeSpacetop2b: () =>
         world.goatbro ? [ "<32>{#p/asriel2}* 只剩一個了。" ] : [ "<32>{#p/story}* Astro Serf remains steady." ],
      stardrakeSpacetop2c: () =>
         world.goatbro ? [ "<32>{#p/asriel2}* 只剩一個了。" ] : [ "<32>{#p/story}* Just Astro now." ],
      stardrakeSpacetop2d: () => (world.goatbro ? [ "<32>{#p/asriel2}* Jerry。" ] : [ "<32>{#p/story}* Jerry。" ]),
      stardrakeSpacetopJerry: () =>
         world.goatbro
            ? [ "<32>{#p/asriel2}* 笨蛋青年兩人組。\n* 再加一個，Jerry。" ]
            : SAVE.data.b.spared_jerry
            ? [ "<32>{#p/story}* Jerry and friends appear!" ]
            : SAVE.data.b.s_state_chilldrake
            ? [ "<32>{#p/story}* Astro Serf and Chilldrake confront you, sighing.\n* Jerry." ]
            : [ "<32>{#p/story}* Astro Serf and Stardrake confront you, sighing.\n* Jerry." ],
      stardrakeSpacetopJerry2a: () =>
         world.goatbro
            ? [ "<32>{#p/asriel2}* 還剩下兩個。" ]
            : SAVE.data.b.s_state_chilldrake
            ? [ "<32>{#p/story}* Astro Serf and Chilldrake remain steady." ]
            : [ "<32>{#p/story}* Astro Serf and Stardrake remain steady." ],
      stardrakeSpacetopJerry2b: () =>
         world.goatbro ? [ "<32>{#p/asriel2}* 還剩下兩個。" ] : [ "<32>{#p/story}* Astro Serf remains steady.\n* Jerry." ],
      stardrakeSpacetopJerry2c: () =>
         world.goatbro
            ? [ "<32>{#p/asriel2}* 還剩下兩個。" ]
            : SAVE.data.b.s_state_chilldrake
            ? SAVE.data.b.spared_jerry
               ? [ "<32>{#p/story}* Chilldrake and Jerry remain steady!" ]
               : [ "<32>{#p/story}* Chilldrake remains steady.\n* Jerry." ]
            : SAVE.data.b.spared_jerry
            ? [ "<32>{#p/story}* Stardrake and Jerry remain steady!" ]
            : [ "<32>{#p/story}* Stardrake remains steady.\n* Jerry." ]
   },

   b_opponent_stardrake: {
      act_check: () =>
         world.goatbro
            ? SAVE.data.b.s_state_chilldrake
               ? [
                    "<32>{#p/asriel2}* Chilldrake，中二叛逆。\n* 胡亂撒氣，荒唐至極。"
                 ]
               : [
                    "<32>{#p/asriel2}* Stardrake，逗逼。\n* 總喜歡給別人講笑話，\n  殊不知自己就是個最大的笑話。"
                 ]
            : SAVE.data.b.s_state_chilldrake
            ? [ "<33>{#p/story}* CHILLDRAKE - ATK 12 DEF 7\n* Rebels against everything!!\n* On the lookout for Starry." ]
            : [ "<32>{#p/story}* STARDRAKE - ATK 12 DEF 7\n* This teen comedian fights to keep a captive audience." ],
      act_check2: () =>
         SAVE.data.b.s_state_chilldrake
            ? [ "<32>{#p/story}* CHILLDRAKE - ATK 12 DEF 7\n* Rebels against everything!!\n* Looking for a way out." ]
            : [ "<32>{#p/story}* STARDRAKE - ATK 12 DEF 7\n* This teen isn't taking your punchline very well." ],
      act_check3: () =>
         SAVE.data.b.s_state_chilldrake
            ? [ "<32>{#p/story}* CHILLDRAKE - ATK 12 DEF 7\n* Rebels against everything!!\n* Especially flirting!!" ]
            : [ "<32>{#p/story}* STARDRAKE - ATK 12 DEF 7\n* Flirting is no joke for this teen comedian." ],
      act_check4: () =>
         SAVE.data.b.s_state_chilldrake
            ? [ "<32>{#p/story}* CHILLDRAKE - ATK 12 DEF 7\n* The rebellion is fading..." ]
            : [ "<32>{#p/story}* STARDRAKE - ATK 12 DEF 7\n* Things are looking up for this teen comedian." ],
      act_flirt: () => [ "<32>{#p/human}* (You make a romantic joke.)" ],
      flirtTalk1: [ "<08>{#p/basic}{~}You're weird." ],
      flirtTalk2: [ "<08>{#p/basic}{~}You're mean AND weird." ],
      genoStatus: () =>
         SAVE.data.b.s_state_chilldrake ? [ "<32>{#p/asriel2}* Chilldrake." ] : [ "<32>{#p/asriel2}* Stardrake." ],
      heckleStatus: () =>
         world.goatbro
            ? SAVE.data.b.s_state_chilldrake
               ? [ "<32>{#p/asriel2}* Chilldrake." ]
               : [ "<32>{#p/asriel2}* Stardrake." ]
            : SAVE.data.b.s_state_chilldrake
            ? [ "<32>{#p/story}* Chilldrake is puffed up..." ]
            : [ "<32>{#p/story}* Stardrake is puffed up..." ],
      heckleTalk1: () =>
         SAVE.data.b.s_state_chilldrake
            ? [ "<08>{#p/basic}{~}No!!\nThis is the way!" ]
            : [ "<08>{#p/basic}{~}THIS won't be funny either!" ],
      heckleTalk2: () =>
         SAVE.data.b.s_state_chilldrake
            ? [ "<08>{#p/basic}{~}Filthy law- obider." ]
            : [ "<08>{#p/basic}{~}Is your flesh rotten as you?" ],
      heckleTalk3: () =>
         SAVE.data.b.s_state_chilldrake
            ? [ "<08>{#p/basic}{~}Defiance can't be defied!" ]
            : [ "<08>{#p/basic}{~}(Insults towards humans)" ],
      heckleText1: () =>
         SAVE.data.b.s_state_chilldrake
            ? [ "<32>{#p/human}* (You denounce Chilldrake for its cause.)" ]
            : [ "<32>{#p/human}* (You boo Stardrake.)" ],
      heckleText2: () =>
         SAVE.data.b.s_state_chilldrake
            ? [ "<32>{#p/human}* (You tell Chilldrake that they should be a rebel somewhere else.)" ]
            : [ "<32>{#p/human}* (You tell Stardrake that they aren't funny.)" ],
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
            ? [ "<32>{#p/asriel2}* 離死不遠了。" ]
            : SAVE.data.b.s_state_chilldrake
            ? [ "<32>{#p/story}* Chilldrake is flaking apart." ]
            : [ "<32>{#p/story}* Stardrake is flaking apart." ],
      idleTalk1: () =>
         SAVE.data.b.s_state_chilldrake
            ? [ "<08>{#p/basic}{~}Brush my teeth?\nNo way in heck!" ]
            : [ "<08>{#p/basic}{~}Try not to get \"spaced\" out.." ],
      idleTalk2: () =>
         SAVE.data.b.s_state_chilldrake
            ? [ "<08>{#p/basic}{~}No bedtime for this bird!" ]
            : [ "<08>{#p/basic}{~}I'm just in my moon pun \"phase\"" ],
      idleTalk3: () =>
         SAVE.data.b.s_state_chilldrake
            ? [ "<08>{#p/basic}{~}Who needs parents anyway!?" ]
            : [ "<08>{#p/basic}{~}Haven't seen home in \"light- years..\"" ],
      idleTalk4: () =>
         SAVE.data.b.s_state_chilldrake
            ? [ "<08>{#p/basic}{~}Live wild and free, I say!" ]
            : [ "<08>{#p/basic}{~}Oh, it's on.\n\"Tachy- on.\"" ],
      idleTalk5: () =>
         SAVE.data.b.s_state_chilldrake
            ? [ "<08>{#p/basic}{~}Nobody tells ME what to do!" ]
            : [ "<08>{#p/basic}{~}Want a fight?\n\"Comet\" me, bro." ],
      idleTalk6: () =>
         SAVE.data.b.s_state_chilldrake
            ? [ "<08>{#p/basic}{~}Authority be darned!" ]
            : [ "<08>{#p/basic}{~}Don't ruin the \"atmos- phere..\"" ],
      idleTalk7: () =>
         SAVE.data.b.s_state_chilldrake
            ? [ "<08>{#p/basic}{~}Trim my claws?\nNo way in heck!" ]
            : [ "<08>{#p/basic}{~}It's not free, it's \"zero G\"" ],
      jokeStatus: () =>
         SAVE.data.b.s_state_chilldrake
            ? [ "<32>{#p/story}* Chilldrake is losing faith in its rebellion." ]
            : [ "<32>{#p/story}* Stardrake is pleased with its \"stellar\" joke." ],
      jokeTalk0: () =>
         SAVE.data.b.s_state_chilldrake
            ? [ "<08>{#p/basic}{~}At least you admit it." ]
            : [ "<08>{#p/basic}{~}That wasn't s'posed to be funny!" ],
      jokeTalk1: () =>
         SAVE.data.b.s_state_chilldrake
            ? [ "<08>{#p/basic}{~}You don't know my cause!" ]
            : [ "<08>{#p/basic}{~}What are YOU laughin' at!?" ],
      jokeTalk2: () =>
         SAVE.data.b.s_state_chilldrake
            ? [ "<08>{#p/basic}{~}Do you..\nreally.." ]
            : [ "<08>{#p/basic}{~}See!?\nLaughs!\nMom was right!" ],
      jokeTalk3: () =>
         SAVE.data.b.s_state_chilldrake
            ? [ "<08>{#p/basic}{~}I don't think you.." ]
            : [ "<08>{#p/basic}{~}Thanks, you're all great." ],
      jokeTalk4: () =>
         SAVE.data.b.s_state_chilldrake
            ? [ "<08>{#p/basic}{~}To tell you the truth.." ]
            : [ "<08>{#p/basic}{~}You have good taste!!" ],
      jokeText0: () =>
         SAVE.data.b.s_state_chilldrake
            ? [ "<32>{#p/human}* (You agree with Chilldrake.)" ]
            : [ "<32>{#p/human}* (You laugh at Stardrake's remark.)" ],
      jokeText1: () =>
         SAVE.data.b.s_state_chilldrake
            ? [ "<32>{#p/human}* (But it hasn't said anything you could agree with yet.)" ]
            : [ "<32>{#p/human}* (But it hasn't said anything you could laugh at yet.)" ],
      jokeText2: () =>
         SAVE.data.b.s_state_chilldrake
            ? [ "<32>{#p/human}* (You agree with Chilldrake.)" ]
            : [ "<32>{#p/human}* (You laugh at Stardrake's pun.)" ],
      jokeText3: () =>
         SAVE.data.b.s_state_chilldrake
            ? [ "<32>{#p/human}* (You double down on your agreement with Chilldrake.)" ]
            : [ "<32>{#p/human}* (You continue to laugh at Stardrake's puns.)" ],
      name: () => (SAVE.data.b.s_state_chilldrake ? "* Chilldrake" : "* Stardrake"),
      punTalk1: () =>
         SAVE.data.b.s_state_chilldrake
            ? [ "<08>{#p/basic}{~}Only Starry can do that." ]
            : [ "<08>{#p/basic}{~}Is that s'posed to be funny?" ],
      punTalk2: () =>
         SAVE.data.b.s_state_chilldrake ? [ "<08>{#p/basic}{~}You ain't Starry." ] : [ "<08>{#p/basic}{~}Ha.. Ha.." ],
      punTalk3: () =>
         SAVE.data.b.s_state_chilldrake
            ? [ "<08>{#p/basic}{~}Quit copying my friends." ]
            : [ "<08>{#p/basic}{~}I've heard that one." ],
      punText1: [ "<32>{#p/human}* (You make a space pun.)" ],
      randStatus1: () =>
         SAVE.data.b.s_state_chilldrake
            ? [ "<32>{#p/story}* Chilldrake is wondering where Starry went." ]
            : [ "<32>{#p/story}* Stardrake is assessing the crowd." ],
      randStatus2: () =>
         SAVE.data.b.s_state_chilldrake
            ? [ "<32>{#p/story}* Chilldrake is chanting an anarchist spell." ]
            : [ "<32>{#p/story}* Stardrake is practicing its next pun." ],
      randStatus3: () =>
         SAVE.data.b.s_state_chilldrake
            ? [ "<32>{#p/story}* Chilldrake starts a one- monster riot." ]
            : [ "<32>{#p/story}* Stardrake is smiling at the thought of its next pun." ],
      randStatus4: () => [ "<32>{#p/story}* Smells like wet pillows." ],
      randStatus5: () =>
         SAVE.data.b.s_state_chilldrake
            ? [ "<32>{#p/story}* Smells like body spray." ]
            : [ "<32>{#p/story}* Stardrake sighs in relief, realizing its own name is in fact not a pun." ],
      status1: () =>
         SAVE.data.b.s_state_chilldrake
            ? [ "<32>{#p/story}* Chilldrake saunters up!" ]
            : [ "<32>{#p/story}* Stardrake flutters forth!" ]
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
                 "<32>{#p/asriel2}* Jerry，公認的傻帽。\n* 他就是個不折不扣的廢物， 一文不值。"
              ]
            : [ "<32>{#p/story}* JERRY - ATK 0 DEF 30\n* Everyone knows Jerry.\n* Makes attacks last longer." ],
      act_flirt: () =>
         SAVE.data.b.spared_jerry
            ? [ "<32>{#p/human}* (You flirt with Jerry.)\n* (It appreciates the compliment.)" ]
            : 5 <= world.flirt
            ? [ "<32>{#p/human}* (You call on your experience, and deliver a life-changing flirt.)" ]
            : [
                 "<32>{#p/human}* (You flirt with Jerry.)",
                 "<32>{#p/basic}* Jerry seems to like you a little too much now."
              ],
      act_ditch: () => [ "<32>{#p/human}* （你甩掉了Jerry。）" ],
      flirtStatus: [ "<32>{#p/story}* Jerry's redemption arc begins." ],
      flirtStatusWeird: [ "<32>{#p/story}* This is wrong on so many levels." ],
      flirtTalk: [
         "<08>{#p/basic}{~}You... y-you...",
         "<08>{#p/basic}{~}Just for you, I'll...",
         "<08>{#p/basic}{~}I'll be the best person I can be!"
      ],
      flirtTalkWeird: [ "<08>{#p/basic}{~}*licks lips*" ],
      genoStatus: [ "<32>{#p/asriel2}* Jerry。" ],
      hurtStatus: () => (world.goatbro ? [ "<32>{#p/asriel2}* 離死不遠了。" ] : [ "<32>{#p/story}* Jerry is wounded." ]),
      idleTalk1: () =>
         SAVE.data.b.spared_jerry
            ? [ "<08>{#p/basic}{~}I'm so glad we're here!" ]
            : [ "<08>{#p/basic}{~}Aren't you guys BORED?" ],
      idleTalk2: () =>
         SAVE.data.b.spared_jerry
            ? [ "<08>{#p/basic}{~}Can we do this more often??" ]
            : [ "<08>{#p/basic}{~}Why are we doing this?" ],
      idleTalk3: () =>
         SAVE.data.b.spared_jerry
            ? [ "<08>{#p/basic}{~}Hey, you guys are the BEST!" ]
            : [ "<08>{#p/basic}{~}Wow, you guys SUCK at this." ],
      idleTalk4: () =>
         SAVE.data.b.spared_jerry
            ? [ "<08>{#p/basic}{~}Does anyone want a hug?" ]
            : [ "<08>{#p/basic}{~}SHHHH!\nLet me think, guys!!" ],
      idleTalkSolo1: () =>
         SAVE.data.b.spared_jerry ? [ "<08>{#p/basic}{~}Thanks for being here!" ] : [ "<08>{#p/basic}{~}Awkwarrd." ],
      idleTalkSolo2: () =>
         SAVE.data.b.spared_jerry
            ? [ "<08>{#p/basic}{~}You're awesome!\nJust saying." ]
            : [ "<08>{#p/basic}{~}So like, what are you even doing?" ],
      idleTalkSolo3: () =>
         SAVE.data.b.spared_jerry
            ? [ "<08>{#p/basic}{~}Wouldn't trade ya for the galaxy." ]
            : [ "<08>{#p/basic}{~}The signal here sucks." ],
      idleTalkSolo4: () =>
         SAVE.data.b.spared_jerry
            ? [ "<08>{#p/basic}{~}I love humans!" ]
            : [ "<08>{#p/basic}{~}Must be nice being HUMAN.." ],
      name: "* Jerry",
      randStatus1: () =>
         SAVE.data.b.spared_jerry
            ? [ "<32>{#p/story}* Jerry is living care-free." ]
            : [ "<32>{#p/story}* Jerry eats powdery food and licks its hands proudly." ],
      randStatus2: () =>
         SAVE.data.b.spared_jerry
            ? [ "<32>{#p/story}* Jerry giggles from happiness." ]
            : [ "<32>{#p/story}* Jerry sneezes without covering its nose." ],
      randStatus3: () =>
         SAVE.data.b.spared_jerry
            ? [ "<32>{#p/story}* Jerry lets out a squeal of excitement." ]
            : [ "<32>{#p/story}* Jerry lets out a yawn." ],
      randStatus4: () =>
         SAVE.data.b.spared_jerry
            ? [ "<32>{#p/story}* Smells like...... Jerry?" ]
            : [ "<32>{#p/story}* Smells like...... Jerry." ],
      status1: [ "<32>{#p/story}* Jerry clings to you!" ],
      ditchResult: () =>
         SAVE.data.b.spared_jerry
            ? battler.alive.length === 1
               ? [ "<32>{#p/basic}* The other monster wishes Jerry was still here..." ]
               : [ "<32>{#p/basic}* The other monsters wish Jerry was still here..." ]
            : battler.alive.length === 1
            ? [ "<32>{#p/basic}* The other monster celebrates Jerry's disappearance." ]
            : [ "<32>{#p/basic}* The other monsters celebrate Jerry's disappearance." ]
   },
   b_opponent_mouse: {
      act_check: () =>
         world.goatbro
            ? [ "<32>{#p/asriel2}* Whizkarat，流浪貓。\n* 早已活得渾渾噩噩。" ]
            : [ "<33>{#p/story}* WHIZKARAT - ATK 16 DEF 8\n* This posh city cat wishes only to live the simple life." ],
      act_check2: [
         "<33>{#p/story}* WHIZKARAT - ATK 16 DEF 8\n* This posh city cat regrets going where it doesn't belong."
      ],
      act_check3: [
         "<33>{#p/story}* WHIZKARAT - ATK 16 DEF 8\n* This reformed country cat is quite pleased with itself."
      ],
      act_check4: [ "<33>{#p/story}* WHIZKARAT - ATK 16 DEF 8\n* This reformed country cat has taken a liking to you." ],
      act_direct: [ "<32>{#p/human}* (You tell Whizkarat a mouse fact.)" ],
      act_direct2: [
         "<32>{#p/human}* (You tell Whizkarat everything you know about mice.)",
         "<32>{#p/basic}* Suddenly...!"
      ],
      act_direct3: [ "<32>{#p/human}* (You try to tell Whizkarat more, but it's already found its way.)" ],
      act_disown: [
         "<32>{#p/human}* (You pluck a whisker from Whizkarat's face.)",
         "<32>{#p/basic}* Whizkarat lets out a gnarly hiss!"
      ],
      act_disown2: [
         "<32>{#p/human}* (You pluck another whisker from Whizkarat's face.)",
         "<32>{#p/basic}* Whizkarat scurries away!"
      ],
      act_disown3: [ "<32>{#p/human}* (You try to pluck a whisker, but Whizkarat pretends it has none.)" ],
      act_flirt: [ "<32>{#p/human}* (You make a cute remark and scratch Whizkarat's neck.)" ],
      disownStatus: () =>
         world.goatbro ? [ "<32>{#p/asriel2}* Whizkarat." ] : [ "<32>{#p/story}* Whizkarat is losing its cool." ],
      disownTalk1: [ "<08>{#p/basic}{~}Keep your paws off me..!" ],
      flirtTalk: [ "<08>{#p/basic}{~}No pussy- cats allowed." ],
      flirtTalk2: [ "<08>{#p/basic}{~}\x00*purrs gently*" ],
      genoStatus: [ "<32>{#p/asriel2}* Whizkarat." ],
      hurtStatus: () =>
         world.goatbro ? [ "<32>{#p/asriel2}* 離死不遠了。" ] : [ "<32>{#p/story}* Whizkarat is nearing demise." ],
      idleTalk1: [ "<08>{#p/basic}{~}What food do they eat?" ],
      idleTalk2: [ "<08>{#p/basic}{~}Where do they hide?" ],
      idleTalk3: [ "<08>{#p/basic}{~}How do they speak?" ],
      idleTalk4: [ "<08>{#p/basic}{~}Do they dream?" ],
      initTalk1: [ "<08>{#p/basic}{~}Alas, here I stand." ],
      initTalk2: [ "<08>{#p/basic}{~}Oh, how I lose myself.." ],
      initTalk3: [ "<08>{#p/basic}{~}The si- tuation is not ideal." ],
      initTalk4: [ "<08>{#p/basic}{~}Could you help me?" ],
      name: "* Whizkarat",
      randStatus1: [ "<32>{#p/story}* Whizkarat fantasizes about getting down on all fours." ],
      randStatus2: [ "<32>{#p/story}* Whizkarat scans the area." ],
      randStatus3: [ "<32>{#p/story}* Whizkarat is trying to pretend that it is small." ],
      randStatus4: [ "<32>{#p/story}* Smells like top-twenty-cheese." ],
      remindStatus: () =>
         world.goatbro
            ? [ "<32>{#p/asriel2}* Whizkarat." ]
            : [ "<32>{#p/story}* Whizkarat just needs a little more help." ],
      remindTalk1: [ "<08>{#p/basic}{~}Live in holes, do they..?" ],
      remindTalk2: [ "<08>{#p/basic}{~}Squeak like toys, do they..?" ],
      remindTalk3: [ "<08>{#p/basic}{~}From now on, I shall live as a mouse." ],
      safeStatus: () =>
         world.goatbro ? [ "<32>{#p/asriel2}* 不堪一擊。" ] : [ "<32>{#p/story}* Whizkarat has found its way." ],
      safeTalk1: [ "<08>{#p/basic}{~}Wonder- ful..." ],
      safeTalk2: [ "<08>{#p/basic}{~}Simply splen- did..." ],
      status1: [ "<32>{#p/story}* Whizkarat arrives!" ]
   },
   b_opponent_doggo: {
      act_check: () =>
         world.goatbro
            ? [ "<32>{#p/asriel2}* Doggo，一條不順眼的狗。\n* 這個蠢貨怎麼又上崗了？" ]
            : [ "<32>{#p/story}* DOGGO - ATK 13 DEF 7\n* Easily excited by movement.\n* Hobbies include: Cuddles." ],
      act_check2: [ "<32>{#p/story}* DOGGO - ATK 13 DEF 7\n* Struggling to even see itself..." ],
      act_check3: [ "<32>{#p/story}* DOGGO - ATK 13 DEF 7\n* A very excited dog, currently enjoying a hobby." ],
      act_check4: [ "<32>{#p/story}* DOGGO - ATK 13 DEF 7\n* This dog strikes you as being lonely in life." ],
      act_flirt: () => [ "<32>{#p/human}* (You flirt with Doggo.)" ],
      act_cuddle: () => [ "<32>{#p/human}* (You cuddle Doggo closely.)" ],
      fetch: () => [
         "<32>{#p/human}* (You throw the spanner.)\n* (The dog runs to get it.)\n* (You play fetch for a while.)"
      ],
      fetchTalk: pager.create(
         0,
         [ "<11>{#p/basic}{~}HUH!! A FUN WRENCH APPEARS!" ],
         [ "<11>{#p/basic}{~}HUH!! THERE IT IS AGAIN!" ]
      ),
      fetchTalkX1: [ "<11>{#p/basic}{~}WHERE'D IT GO!?" ],
      fetchTalkX2: [ "<11>{#p/basic}{~}WHERE'S MY WRENCH NOW!?" ],
      flirt1: [ "<11>{#p/basic}{~}(Blushes uncontrol- lably)" ],
      invisStatus: () =>
         world.goatbro ? [ "<32>{#p/asriel2}* 不堪一擊。" ] : [ "<32>{#p/story}* Doggo has lost sight of you." ],
      name: "* Doggo",
      fetchStatus: [ "<32>{#p/story}* Doggo loves fetch!" ],
      fetchpet: [ "<32>{#p/human}* (But the dog was too busy looking for the spanner to be pet.)" ],
      fetchflirt: [ "<32>{#p/human}* (But the dog was too busy looking for the spanner to hear you.)" ],
      fetchcuddle: [ "<32>{#p/human}* (But the dog was too busy looking for the spanner to be cuddled.)" ],
      normaStatus: () => (world.goatbro ? [ "<32>{#p/asriel2}* Doggo。" ] : [ "<32>{#p/story}* Doggo knows you're here." ]),
      pet: () => [
         "<32>{#p/human}* （你摸了摸Doggo。）",
         ...(world.goatbro
            ? [
                 [],
                 [ "<32>{#p/asriel2}* ...又摸？" ],
                 [ "<32>{#p/asriel2}* 摸狗有那麼有趣嗎..." ],
                 [ "<32>{#p/asriel2}* ...有趣嗎？" ],
                 [ "<32>{#p/asriel2}* 蠢死了。" ],
                 [ "<32>{#p/asriel2}* 你非得要這麼摸嗎？" ],
                 [ "<32>{#p/asriel2}* ...非得摸嗎？" ],
                 [ "<32>{#p/asriel2}* 我看真是。" ],
                 [ "<32>{#p/asriel2}* ..." ],
                 [ "<32>{#p/asriel2}* 事態快要失控了..." ],
                 [ "<32>{#p/asriel2}* 還摸？\n* 沒完了是吧..." ],
                 [ "<32>{#p/asriel2}* 哇喔。\n* 後面忘了。" ],
                 [ "<32>{#p/asriel2}* 你玩得可真是不亦樂乎啊。" ],
                 [ "<32>{#p/asriel2}* ..." ]
              ][Math.min(battler.volatile[0].vars.pet - 1, 13)]
            : [])
      ],
      cuddle: pager.create(
         0,
         [ "<11>{#p/basic}{~}CUDDLES!?!?\nWELL, AT LEAST I KNOW WHERE IT IS!" ],
         [ "<11>{#p/basic}{~}AGAIN!?!?" ]
      ),
      petStatus: () =>
         world.goatbro ? [ "<32>{#p/asriel2}* 不堪一擊。" ] : [ "<32>{#p/story}* Doggo has been pet." ],
      petTalk1: [ "<11>{#p/basic}{~}WHAT!!!\nI'VE BEEN PET!" ],
      petTalk2: [ "<11>{#p/basic}{~}WHERE'S THAT COMING FROM!?" ],
      petTalk3: [ "<11>{#p/basic}{~}THERE'S NO END TO IT!!" ],
      petTalk4: [ "<11>{#p/basic}{~}WELL, THIS IS THOROUGH!!!" ],
      petTalk5: [ "<11>{#p/basic}{~}(Dies)" ],
      petTalk6: [ "<11>{#p/basic}{~}(Comes back to life)" ],
      petTalk7: [ "<11>{#p/basic}{~}IT JUST KEEPS COMING!" ],
      petTalk8: [ "<11>{#p/basic}{~}AND COMING!!" ],
      petTalk9: [ "<11>{#p/basic}{~}AND COMINGGG!!!" ],
      petTalk10: [ "<11>{#p/basic}{~}OK.\nThat's enough." ],
      petTalk11: [ "<11>{#p/basic}{~}I said \"that's enough!\"" ],
      petTalk12: [ "<11>{#p/basic}{~}Oh my god, it just doesn't stop!" ],
      petTalk13: [ "<11>{#p/basic}{~}OH MY GOD, IT REALLY DOESN'T STOP!!" ],
      petTalk14: [ "<11>{#p/basic}{~}AHHHHHHH!!!" ],
      query1: [ "<11>{#p/basic}{~}No escape!" ],
      query2: [ "<11>{*}{#p/basic}{~}哈！\n它動了！\n它肯定動了！{^30}{%}" ],
      query3: [ "<11>{#p/basic}{~}我倒要看看\n這次它還動嗎？" ],
      status1: () => (world.goatbro ? [ "<32>{#p/asriel2}* Doggo。" ] : [ "<32>{#p/story}* Doggo blocks the way!" ]),
      sussy: () =>
         world.goatbro ? [ "<32>{#p/asriel2}* Doggo。" ] : [ "<32>{#p/basic}* Doggo is too suspicious of your actions." ]
   },
   b_opponent_lesserdog: {
      act_check: () =>
         world.goatbro
            ? [ "<32>{#p/asriel2}* Canis Minor，一條蠢狗。\n* 估計他都不知道自己為啥在這。" ]
            : [ "<32>{#p/story}* CANIS MINOR - ATK 12 DEF 2\n* Wields a shiny dogger made of fido-nium." ],
      act_check2: [
         "<32>{#p/story}* CANIS MINOR - ATK 12 DEF 2\n* Scarred for life, this puppy wants to turn tail and run."
      ],
      act_check3: [
         "<32>{#p/story}* CANIS MINOR - ATK 12 DEF 2\n* It's necks-in-line for the galaxy's tallest monster."
      ],
      act_check4: [ "<32>{#p/story}* CANIS MINOR - ATK 12 DEF 2\n* Trying its best to decipher your advanced petting." ],
      act_check5: [ "<32>{#p/story}* CANIS MINOR - ATK 12 DEF 2\n* The journey for this puppy has only just begun." ],
      act_flirt: [ "<32>{#p/human}* (You tell Canis Minor you love it by petting it in morse code.)" ],
      act_handshake: [
         "<32>{#p/human}* (You place your hand on Canis Minor's head, shaking and ruffling its fur to the core.)"
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
         ...(world.goatbro ? [ "<32>{#p/asriel2}* But why though?" ] : [])
      ],
      fetchStatus: [ "<32>{#p/story}* Canis Minor loves fetch!" ],
      fetchTalk: [ "<11>{#p/basic}{~}(Pants fast)" ],
      hurtStatus: () =>
         world.goatbro
            ? [ "<32>{#p/asriel2}* 離死不遠了。" ]
            : [ "<32>{#p/story}* Canis Minor tucks its tail between its legs." ],
      name: "* Canis Minor",
      petTalk1: [ "<11>{#p/basic}{~}(Pant pant)" ],
      petTalk2: [ "<11>{#p/basic}{~}（輕微的犬叫聲）" ],
      petTalk3: [ "<11>{#p/basic}{~}(Wag wag)" ],
      petTalk4: [ "<11>{#p/basic}{~}(Thinks of food)" ],
      petTalk5: [ "<11>{#p/basic}{~}(Pant! Pant!)" ],
      petTalk6: [ "<11>{#p/basic}{~}(Excited noises)" ],
      petTalk7: [ "<11>{#p/basic}{~}(Motor revving)" ],
      petTalk8: [ "<11>{#p/basic}{~}(Plane takeoff)" ],
      petTalk9: [ "<11>{#p/basic}{~}(Kettle whistle)" ],
      petTalk10: [ "<11>{#p/basic}{~}(...)" ],
      petTalk11: [ "<11>{#p/basic}{~}(Faraway bark)" ],
      petTalk12: [ "<11>{#p/basic}{~}(Bark)" ],
      petText1: () => [ "<32>{#p/human}* （你只是稍微抬了下手。）", "<32>{#p/basic}* 好興奮喔！" ],
      petText2: () => [
         "<32>{#p/human}* （你輕輕地摸了一下狗子。）",
         "<32>{#p/basic}* 它已經興奮過頭了...",
         ...(world.goatbro ? [ "<32>{#p/asriel2}* 狗子們還真喜歡被摸啊。" ] : [])
      ],
      petText3: () => [
         "<32>{#p/human}* （你摸了摸Canis Minor。）",
         "<32>{#p/basic}* 它仰起頭，迎向你的手心。",
         ...(world.goatbro ? [ "<32>{#p/asriel2}* 夠了，你都摸過它了。\n* 真沒必要繼續摸了。" ] : [])
      ],
      petText4: () => [
         "<32>{#p/human}* （你摸了摸Canis Minor。）",
         "<32>{#p/basic}* 真是隻好狗狗。",
         ...(world.goatbro ? [ "<32>{#p/asriel2}* 繼續摸它有必要麼？" ] : [])
      ],
      petText5: () => [
         "<32>{#p/human}* （你摸了摸Canis Minor。）",
         "<32>{#p/basic}* 它的興奮永無止境...",
         ...(world.goatbro ? [ "<32>{#p/asriel2}* 別摸了。" ] : [])
      ],
      petText6: () => [
         "<32>{#p/human}* （你摸了摸Canis Minor。）",
         "<32>{#p/basic}* 會心一摸！\n* 狗子的興奮度增加了。",
         ...(world.goatbro ? [ "<32>{#p/asriel2}* 天吶，$(name)。" ] : [])
      ],
      petText7: () => [
         "<32>{#p/human}* （你得跳起來才摸得到狗子了。）",
         ...(world.goatbro ? [ "<32>{#p/asriel2}* 我們不能以摸狗為生。" ] : [])
      ],
      petText8: () => [
         "<32>{#p/human}* （你想摸摸Canis Minor，\n  結果，連夠都夠不到。）",
         "<32>{#p/basic}* 不過它還是更加興奮了。",
         ...(world.goatbro ? [ "<32>{#p/asriel2}* 我們真要摸一整天狗嗎...？" ] : [])
      ],
      petText9: () => [
         "<32>{#p/human}* （你摸了摸Canis Minor。）",
         "<32>{#p/basic}* 根本沒法停下這場鬧劇。",
         ...(world.goatbro ? [ "<32>{#p/asriel2}* ..." ] : [])
      ],
      petText10: () => [
         "<32>{#p/human}* （你摸了摸Canis Minor。）",
         "<32>{#p/basic}* 不積跬步，無以至千里。\n  不積小摸，無以得巨狗。",
         ...(world.goatbro ? [ "<32>{#p/asriel2}* 為啥要在這浪費時間？" ] : [])
      ],
      petText11: () => [
         "<32>{#p/human}* （你呼喚著Canis Minor，\n然而它已經聽不到你說話了。）",
         ...(world.goatbro ? [ "<32>{#p/asriel2}* 這下好了。\n* 再也別想夠著它了。" ] : [])
      ],
      petText12: () => [ "<32>{#p/basic}* ...", ...(world.goatbro ? [ "<32>{#p/asriel2}* ？？？" ] : []) ],
      petText13: () => [
         "<32>{#p/human}* （你又夠得著Canis Minor了。）",
         ...(world.goatbro ? [ "<32>{#p/asriel2}* 你跟我開玩笑呢是吧？" ] : [])
      ],
      petText14: () => [ "<32>{#p/human}* （你摸了摸Canis Minor。）" ],
      petText15: () => [
         "<32>{#p/human}* （你摸了摸Canis Minor。）",
         "<32>{#p/basic}* 你可能有什麼毛病。"
      ],
      petText16: () => [
         "<32>{#p/human}* （你沒摸著Canis Minor，\n  但它很看好你的努力。）",
         ...(world.goatbro ? [ "<32>{#p/asriel2}* 給我停下。" ] : [])
      ],
      petText17: () => [
         "<32>{#p/human}* （你摸了摸Canis Minor。）",
         "<32>{#p/basic}* * 節制擼狗，人人有責。",
         ...(world.goatbro ? [ "<32>{#p/asriel2}* 請你停下。" ] : [])
      ],
      petText18: () => [
         "<32>{#p/human}* （你摸了摸Canis Minor。）",
         "<32>{#p/basic}* 鬧劇還在繼續。",
         ...(world.goatbro ? [ "<32>{#p/asriel2}* ..." ] : [])
      ],
      petText19: () => [
         "<32>{#p/human}* （你夠不著Canis Minor了。）",
         ...(world.goatbro ? [ "<32>{#p/asriel2}* 好了，該結束了。\n* 趕緊殺了這個蠢貨。" ] : [])
      ],
      petText20: () => [
         "<32>{#p/human}* （開玩笑吧。）",
         "<32>{#p/basic}* ...開玩笑吧。",
         ...(world.goatbro ? [ "<32>{#p/asriel2}* 開玩笑吧..." ] : [])
      ],
      statusX: [ "<32>{#p/asriel2}* 不堪一擊。" ],
      status0: () => (world.goatbro ? [ "<32>{#p/asriel2}* Canis Minor。" ] : [ "<32>{#p/story}* Canis Minor appears." ]),
      status1: () =>
         world.goatbro
            ? [ "<32>{#p/asriel2}* Canis Minor。" ]
            : [ "<32>{#p/story}* Canis Minor tilts its head to one side." ],
      status2: () =>
         world.goatbro
            ? [ "<32>{#p/asriel2}* Canis Minor。" ]
            : [ "<32>{#p/story}* Canis Minor thinks your weapon is a dog treat." ],
      status3: () =>
         world.goatbro
            ? [ "<32>{#p/asriel2}* Canis Minor。" ]
            : [ "<32>{#p/story}* Canis Minor is not really paying attention." ],
      status4: () => (world.goatbro ? [ "<32>{#p/asriel2}* Canis Minor。" ] : [ "<32>{#p/story}* Smells like dog chow." ]),
      status5: () =>
         world.goatbro ? [ "<32>{#p/asriel2}* Canis Minor。" ] : [ "<32>{#p/story}* Canis Minor is barking excitedly." ],
      status6: () =>
         world.goatbro ? [ "<32>{#p/asriel2}* Canis Minor。" ] : [ "<32>{#p/story}* Canis Minor is overstimulated." ],
      status7: () =>
         world.goatbro
            ? [ "<32>{#p/asriel2}* Canis Minor。" ]
            : [ "<32>{#p/story}* Canis Minor shows no signs of stopping." ],
      status8: () =>
         world.goatbro ? [ "<32>{#p/asriel2}* Canis Minor。" ] : [ "<32>{#p/story}* Canis Minor is lowering." ],
      status9: () =>
         world.goatbro ? [ "<32>{#p/asriel2}* Canis Minor。" ] : [ "<32>{#p/story}* Canis Minor learns to code." ],
      status10: () =>
         world.goatbro
            ? [ "<32>{#p/asriel2}* Canis Minor。" ]
            : [ "<32>{#p/story}* Canis Minor is whining because it can't see you." ],
      status11: () => (world.goatbro ? [ "<32>{#p/asriel2}* Canis Minor。" ] : [ "<32>{#p/story}* Hello there." ]),
      status12: () =>
         world.goatbro
            ? [ "<32>{#p/asriel2}* Canis Minor。" ]
            : [ "<32>{#p/story}* Canis Minor is questioning your life choices." ],
      status13: () =>
         world.goatbro
            ? [ "<32>{#p/asriel2}* Canis Minor。" ]
            : [ "<32>{#p/story}* Canis Minor has gone where no dog has gone before." ]
   },
   b_opponent_dogamy: {
      act_check: () =>
         world.goatbro
            ? [ "<32>{#p/asriel2}* Dogamy，一條廢狗。\n* 純靠他的瘋狗老婆過活。" ]
            : [ "<32>{#p/story}* DOGAMY - ATK 14 DEF 5\n* Husband of Dogaressa.\n* Knows only what he smells." ],
      act_check2: [ "<32>{#p/story}* DOGAMY - ATK 14 DEF 5\n* Recently widowed.\n* Knows only the pain of loss." ],
      act_check3: [ "<32>{#p/story}* DOGAMY - ATK 14 DEF 5\n* Husband of Dogaressa.\n* Knows more than ever before." ],
      act_check4: [ "<32>{#p/story}* DOGAMY - ATK 14 DEF 5\n* Husband of Dogaressa.\n* Doesn't mind sharing...?" ],
      act_check5: [ "<32>{#p/story}* DOGAMY - ATK 14 DEF 5\n* Husband of Dogaressa.\n* Wouldn't mind leaving...?" ],
      fetchText: [
         "<32>{#p/human}* (You throw the spanner.)\n* (The dogs run to get it.)\n* (You play fetch for a while.)"
      ],
      fetchTextLone: () => [
         "<32>{#p/human}* (You throw the spanner.)\n* (Dogamy ignores it and lets it roll off the edge.)",
         ...(world.goatbro && SAVE.flag.n.ga_asrielSpannerComment++ < 1 ? [ "<32>{#p/asriel2}* Saw that coming." ] : [])
      ],
      flirtTalk1: [ "<11>{#p/basic}{~}Ah!\nBut why...!?" ],
      flirtTalk2: [ "<11>{#p/basic}{~}Love is in the air?" ],
      flirtTalk3: [ "<11>{#p/basic}{~}You didn't just..." ],
      flirtTalk4: [ "<11>{#p/basic}{~}What's the puppy doing?" ],
      flirtText: [
         "<32>{#p/human}* (You flirt with Dogamy.)",
         "<32>{#p/basic}* Your... pheromones, reach Dogamy's snout."
      ],
      flirtTextLone: [ "<32>{#p/human}* (You flirt with Dogamy.)", "<32>{#p/basic}* Dogamy's expression is unchanged." ],
      loneStatus: () =>
         world.goatbro
            ? [ "<32>{#p/asriel2}* 只剩一個了。" ]
            : [ "<32>{#p/story}* Dogaressa is intent on kicking human tail." ],
      loneTalk1: [ "<11>{#p/basic}{~}Whine." ],
      loneTalk2: [ "<11>{#p/basic}{~}Whimper." ],
      loneTalk3: [ "<11>{#p/basic}{~}Shake." ],
      name: "* Dogamy",
      fetchStatus: [ "<32>{#p/story}* Married dogs love fetch!" ],
      fetchStatusX: [ "<32>{#p/story}* The dogs' minds are expanding at an exponential rate." ],
      otherPet: [ "<11>{#p/basic}{~}..." ],
      petNeedStatus: () =>
         world.goatbro
            ? [ "<32>{#p/asriel2}* Dogamy and Dogaressa." ]
            : [ "<32>{#p/story}* Dogaressa is looking for affection." ],
      petStatus: () =>
         world.goatbro
            ? [ "<32>{#p/asriel2}* 不堪一擊。" ]
            : [ "<32>{#p/story}* The dogs' minds have been expanded." ],
      petTalk1: [ "<11>{#p/basic}{~}放開，你這個該死的人類。" ],
      petTalk1x: [ "<11>{#p/basic}{~}Paws off you weird puppy." ],
      petTalk2: [ "<11>{#p/basic}{~}Wow!!!\nPet by another pup!!!" ],
      petTalk3: [ "<11>{#p/basic}{~}Stop!\nDon't touch her!" ],
      petTalk4: [ "<11>{#p/basic}{~}What\nabout\nme......" ],
      petTalk5: [ "<11>{#p/basic}{~}Thank\nyou..." ],
      petText: [ "<32>{#p/human}* (You pet Dogamy.)" ],
      petTextLone: [ "<32>{#p/human}* (You try to pet Dogamy, but he cowers in fear.)" ],
      randTalk1: () =>
         world.goatbro
            ? [ "<11>{#p/basic}{~}The prince has lost his mind..." ]
            : [ "<11>{#p/basic}{~}Take my wife...\n's fleas." ],
      randTalk2: () =>
         world.goatbro ? [ "<11>{#p/basic}{~}You have come far..." ] : [ "<11>{#p/basic}{~}Don't touch my hot dog." ],
      randTalk3: () =>
         world.goatbro
            ? [ "<11>{#p/basic}{~}We'll take you down!" ]
            : [ "<11>{#p/basic}{~}Number one puppy-dog eyes champs K-614!!" ],
      randTalk4: () =>
         world.goatbro ? [ "<11>{#p/basic}{~}You won't win this time..." ] : [ "<11>{#p/basic}{~}Let's kick human tail!!" ],
      resmellStatus: () =>
         world.goatbro
            ? [ "<32>{#p/asriel2}* Dogamy and Dogaressa." ]
            : [ "<32>{#p/story}* The dogs think that you may be a lost puppy." ],
      resmellText1: [
         "<32>{#p/human}* （你讓狗狗們再聞聞你。）",
         "<32>* （你聞起來仍然很古怪。）"
      ],
      resmellText2: [
         "<32>{#p/human}* （你讓狗狗們再聞聞你。）",
         "<32>* （在泥裡打了幾個滾後，\n  你的氣味正常了。）"
      ],
      resmellText3: [
         "<32>{#p/human}* （你讓狗狗們再聞聞你，\n  但他們已經知道你的氣味正常了。）"
      ],
      resmellTextFetch: [
         "<32>{#p/human}* （你讓狗狗們聞聞你，\n  但他們正忙著做別的事。）"
      ],
      resmellTextLone: [ "<32>{#p/human}* （你讓Dogamy聞聞你，\n  但他連鼻子都沒抬一下。）" ],
      rollStatus: () =>
         world.goatbro
            ? [ "<32>{#p/asriel2}* 你會把衣服弄髒的，$(name)。" ]
            : [ "<32>{#p/story}* 狗狗們也許想重新聞聞你。" ],
      rollText: () => [
         "<32>{#p/human}* （你在泥裡打了幾個滾。）\n* （這泥好像是合成的。）",
         "<32>{#p/basic}* 你的氣味有變化了...",
         ...(world.goatbro ? [ "<32>{#p/asriel2}* 你在做什麼。" ] : [])
      ],
      rollText2: [
         "<32>{#p/human}* （你在泥裡打了幾個滾。）\n* （這泥好像是合成的。）",
         "<33>{#p/basic}* 你的氣味已經變了。"
      ],
      rollTextLone: () => [
         "<32>{#p/human}* （你在Dogaressa的塵埃裡打了幾個滾。）",
         "<32>{#p/basic}* Dogamy更頹喪了。",
         ...(world.goatbro ? [ "<32>{#p/asriel2}* ..." ] : [])
      ],
      smellTalk1: [ "<11>{#p/basic}{~}Hm?\nWhat's that smell?" ],
      smellTalk2: [ "<11>{#p/basic}{~}What!\nSmells like a..." ],
      smellTalk3: [ "<11>{#p/basic}{~}Ah!\nSuch a lovely smell..." ],
      status1: () =>
         world.goatbro
            ? [ "<32>{#p/asriel2}* Dogamy and Dogaressa." ]
            : [ "<32>{#p/story}* The dogs keep shifting their axes to protect each other." ],
      status2: () =>
         world.goatbro
            ? [ "<32>{#p/asriel2}* Dogamy and Dogaressa." ]
            : [ "<32>{#p/story}* The dogs are re-evaluating your smell." ],
      status3: () =>
         world.goatbro
            ? [ "<32>{#p/asriel2}* Dogamy and Dogaressa." ]
            : [ "<32>{#p/story}* The dogs are practicing for the next couples contest." ],
      status4: () =>
         world.goatbro
            ? [ "<32>{#p/asriel2}* Dogamy and Dogaressa." ]
            : [ "<32>{#p/story}* The dogs are whispering sweet nothings to each other." ],
      susText: [ "<32>{#p/basic}* The dogs still think you're a smelly human." ],
      fetchTalk: [ "<11>{#p/basic}{~}Fetch is so much fun!" ],
      fetchTalkX: [ "<11>{#p/basic}{~}Fetch with another pup!?" ]
   },
   b_opponent_dogaressa: {
      act_check: () =>
         world.goatbro
            ? [ "<32>{#p/asriel2}* Dogaressa，一條瘋狗。\n* 沒了她老公，分分鐘發瘋。" ]
            : [ "<32>{#p/story}* DOGARESSA - ATK 14 DEF 5\n* This puppy finds her hubby lovely. SMELLS ONLY?" ],
      act_check2: [ "<32>{#p/story}* DOGARESSA - ATK 14 DEF 5\n* This puppy misses her hubby dearly. KILLS ONLY?" ],
      act_check3: [ "<32>{#p/story}* DOGARESSA - ATK 14 DEF 5\n* Things are going quite alright for this puppy." ],
      act_check4: [
         "<32>{#p/story}* DOGARESSA - ATK 14 DEF 5\n* Her hubby isn't the only thing this puppy finds lovely."
      ],
      act_check5: [ "<32>{#p/story}* DOGAMY - ATK 14 DEF 5\n* This puppy is afraid for her hubby's safety." ],
      fetchTextLone: () => [
         "<32>{#p/human}* (You throw the spanner.)\n* (Dogaressa takes it and smashes it to pieces.)",
         ...(world.goatbro && SAVE.flag.n.ga_asrielSpannerComment++ < 1 ? [ "<32>{#p/asriel2}* Saw that coming." ] : [])
      ],
      flirtTalk1: [ "<11>{#p/basic}{~}(Hey! Knock it off!)" ],
      flirtTalk2: [ "<11>{#p/basic}{~}(This just gets weirder and weirder.)" ],
      flirtTalk3: [ "<11>{#p/basic}{~}(... flirt with me! Ugh!)" ],
      flirtTalk4: [ "<11>{#p/basic}{~}(I think it loves me. A lot.)" ],
      flirtText: [
         "<32>{#p/human}* (You flirt with Dogaressa.)",
         "<32>{#p/basic}* Your... pheromones, reach Dogaressa's snout."
      ],
      flirtTextLone: [
         "<32>{#p/human}* (You flirt with Dogaressa.)",
         "<32>{#p/basic}* Dogaressa's expression is unchanged."
      ],
      loneStatus: () =>
         world.goatbro ? [ "<32>{#p/asriel2}* 只剩一個了。" ] : [ "<32>{#p/story}* Dogamy is brokenhearted." ],
      loneTalk1: [ "<11>{#p/basic}{~}(Misery awaits you.)" ],
      loneTalk2: [ "<11>{#p/basic}{~}(You'll suffer for this.)" ],
      name: "* Dogaressa",
      otherPet: [ "<11>{#p/basic}{~}(...)" ],
      petNeedStatus: () =>
         world.goatbro
            ? [ "<32>{#p/asriel2}* Dogamy and Dogaressa." ]
            : [ "<32>{#p/story}* Dogamy is looking for affection." ],
      petTalk1: [ "<11>{#p/basic}{~}(That's not your husband, OK?)" ],
      petTalk2: [ "<11>{#p/basic}{~}(Well, don't leave me out!)" ],
      petTalk3: [ "<11>{#p/basic}{~}(Beware of dog.)" ],
      petTalk4: [ "<11>{#p/basic}{~}(A dog that pets dogs... amazing!)" ],
      petTalk5: [ "<11>{#p/basic}{~}(You're the best!)" ],
      petText: [ "<32>{#p/human}* (You pet Dogaressa.)" ],
      petTextLone: [ "<32>{#p/human}* (You try to pet Dogaressa, but she just growls at you.)" ],
      randTalk1: () => (world.goatbro ? [ "<11>{#p/basic}{~}(Indeed.)" ] : [ "<12>{#p/basic}{~}(Don't,\nactually...)" ]),
      randTalk2: () => (world.goatbro ? [ "<11>{#p/basic}{~}(Far enough.)" ] : [ "<11>{#p/basic}{~}(He means me.)" ]),
      randTalk3: () =>
         world.goatbro
            ? [ "<11>{#p/basic}{~}(By force, if necessary.)" ]
            : [ "<11>{#p/basic}{~}(Of course we were first.)" ],
      randTalk4: () =>
         world.goatbro ? [ "<11>{#p/basic}{~}(Time's up.)" ] : [ "<11>{#p/basic}{~}(Do humans have tails?)" ],
      resmellTalkLone: [ "<11>{#p/basic}{~}(Is that what you wanted??)\n(Huh?)" ],
      resmellTextLone: [
         "<33>{#p/human}* (You encourage Dogaressa to sniff you, and she forcefully shoves her snout in your face.)"
      ],
      rollTextLone: () => [
         "<32>{#p/human}* （你在Dogamy的塵埃裡打了幾個滾。）",
         "<32>{#p/basic}* Dogarassa更瘋狂了。",
         ...(world.goatbro ? [ "<32>{#p/asriel2}* ..." ] : [])
      ],
      smellTalk1: [ "<11>{#p/basic}{~}(A smell mystery...)" ],
      smellTalk2: [ "<11>{#p/basic}{~}(Are you actually a little puppy!?)" ],
      smellTalk3: [ "<11>{#p/basic}{~}(The smell of a weird puppy!)" ],
      fetchTalk: [ "<11>{#p/basic}{~}(We love to play fetch.)" ],
      fetchTalkX: [ "<11>{#p/basic}{~}(This dog can do anything!)" ]
   },
   b_opponent_greatdog: {
      act_check: () =>
         world.goatbro
            ? [ "<33>{#p/asriel2}* Canis Major，一條傻狗。\n* 這群狗裡面，\n  屬它頭腦簡單，四肢發達。" ]
            : [ "<32>{#p/story}* CANIS MAJOR - ATK 15 DEF 8\n* It's so excited that it thinks fighting is just play." ],
      act_check2: [ "<32>{#p/story}* CANIS MAJOR - ATK 15 DEF 8\n* Desperate for some love and attention..." ],
      act_check3: [ "<32>{#p/story}* CANIS MAJOR - ATK 15 DEF 8\n* All tuckered out." ],
      act_flirt: [
         "<32>{#p/human}* (You flirt with Canis Major.)",
         "<32>{#p/basic}* Canis Major awkwardly cocks its head to one side."
      ],
      beckonText: [
         "<32>{#p/human}* （你叫了叫Canis Major。）",
         "<32>{#p/basic}* 它躍向你，甩了你滿臉口水。"
      ],
      closeStatus: () =>
         world.goatbro ? [ "<32>{#p/asriel2}* Canis Major。" ] : [ "<32>{#p/story}* Canis Major seeks affection." ],
      closeText: [ "<32>{#p/human}* (You call Canis Major.)\n* (Only the dog's ears perk up.)" ],
      doneText: [ "<32>{#p/basic}* Canis Major decides you are too boring." ],
      fetch: () =>
         world.goatbro
            ? [
                 "<32>{#p/human}* （你扔出扳手。）\n* （Canis Major把它吸收進自己的身體，\n  然後若無其事地繼續玩耍。）",
                 "<32>{#p/asriel2}* 呃... 這河裡嗎。"
              ]
            : [
                 "<32>{#p/human}* (You throw the spanner.)\n* (The dog runs to get it.)\n* (You play fetch for a while.)"
              ],
      hurtStatus: () =>
         world.goatbro ? [ "<32>{#p/asriel2}* 離死不遠了。" ] : [ "<32>{#p/story}* Canis Major is panting slowly." ],
      ignoreStatus1: () =>
         world.goatbro
            ? [ "<32>{#p/asriel2}* Canis Major。" ]
            : [ "<32>{#p/story}* Canis Major just wants some affection." ],
      ignoreStatus2: () =>
         world.goatbro ? [ "<32>{#p/asriel2}* Canis Major。" ] : [ "<32>{#p/story}* Canis Major is making puppy-dog eyes." ],
      name: "* Canis Major",
      fetchStatus: [ "<32>{#p/story}* Canis Major love fetch!" ],
      petStatus1: () =>
         world.goatbro
            ? [ "<32>{#p/asriel2}* Canis Major。" ]
            : [ "<32>{#p/story}* Canis Major is patting the ground with its front paws." ],
      petStatus2: () =>
         world.goatbro ? [ "<32>{#p/asriel2}* Canis Major。" ] : [ "<32>{#p/story}* Canis Major wants some TLC." ],
      petStatus3: () =>
         world.goatbro ? [ "<32>{#p/asriel2}* ..." ] : [ "<32>{#p/story}* Pet capacity now at forty percent." ],
      petStatus4: () =>
         world.goatbro ? [ "<32>{#p/asriel2}* 不堪一擊。" ] : [ "<32>{#p/story}* Canis Major is contented." ],
      petText0: [ "<32>{#p/human}* （但是Canis Major離你太遠了，\n  你摸不著它。）" ],
      petText1: [
         "<32>{#p/human}* （Canis Major享受著你的撫摸，\n  它把整個身子都蜷縮在你的腿上。）",
         "<32>* （它太舒服了，呼呼睡著了。）",
         "<32>* （狗子打呼著，打呼著...）",
         "<32>* （...然後它醒了。）",
         "<32>{#p/basic}* Canis Major的興奮度\n  毫無徵兆地增加了！"
      ],
      petText2: [
         "<32>{#p/human}* （你想摸摸狗子...）",
         "<32>* （...然而它的興奮能量\n  形成了一個反撫摸能量場。）"
      ],
      petText3: [
         "<32>{#p/human}* (You pet the dog.)\n* (It sinks its entire weight into you.)",
         "<32>* (Your movement slows, but you still haven't pet enough.)"
      ],
      petText4: [
         "<32>{#p/human}* (You pet decisively.)\n* (Pet capacity now at one- hundred percent.)",
         "<32>{#p/basic}* Canis Major flops over with its legs hanging in the air."
      ],
      petText5: [
         "<32>{#p/human}* (You give the dog a tummy rub.)",
         "<32>{#p/basic}* Canis Major is whining in bliss..."
      ],
      playText1: [ "<32>{#p/human}* (But Canis Major was not excited enough to play with yet.)" ],
      playText2: [
         "<32>{#p/human}* (You conjure a hologram for the dog to chase after.)",
         "<32>* (Eventually, the hologram loses cohesion and dissipates.)",
         "<32>* (Canis Major collects all the residual energy in the area and brings it to you.)",
         "<32>{#p/basic}* Canis Major, tired, rests its head on you..."
      ],
      playText3: [ "<32>{#p/basic}* Canis Major is too tired to play." ],
      playText4: [ "<32>{#p/human}* (But Canis Major was already in the middle of playing fetch.)" ],
      status0: () => (world.goatbro ? [ "<32>{#p/asriel2}* Canis Major。" ] : [ "<32>{#p/story}* Canis Major appears." ]),
      status1: () =>
         world.goatbro ? [ "<32>{#p/asriel2}* Canis Major。" ] : [ "<32>{#p/story}* Canis Major is watching you intently." ],
      status2: () =>
         world.goatbro
            ? [ "<32>{#p/asriel2}* Canis Major。" ]
            : [ "<32>{#p/story}* Canis Major is waiting for your command." ],
      status3: () =>
         world.goatbro
            ? [ "<32>{#p/asriel2}* Canis Major。" ]
            : [ "<32>{#p/story}* Smells like fresh-squeezed puppy juice." ],
      waitText: [ "<32>{#p/basic}* Canis Major moves closer." ]
   },
   b_opponent_papyrus: {
      act_flirt: [ "<32>{#p/human}* （你向Papyrus調情。）" ],
      act_insult: [ "<32>{#p/human}* （你罵了Papyrus一頓。）" ],
      spanner: [ "<32>{#p/human}* (You throw the spanner.)\n* (Papyrus catches it in his mouth and returns it to you.)" ],
      spannerTalk1: [ "<15>{#p/papyrus}{#f/20}WHAT A JAW- DROPPING MOVE!" ],
      spannerTalk2: [ "<15>{#p/papyrus}{#f/20}I COULD DO THIS ALL DAY!" ],
      spannerTalk3: [ "<15>{#p/papyrus}{#f/20}JUST LIKE THEY DO IT ON TV!" ],
      spannerTalk4: [ "<15>{#p/papyrus}{#f/20}NYEH HEH HEH!" ],
      sparableSpannerTalk1: [ "<15>{#p/papyrus}{#f/20}NOW, SHOW ME YOUR MERCY!" ],
      sparableSpannerTalk2: [ "<15>{#p/papyrus}{#f/20}..." ],
      bullySpareTalk: [
         "<15>{#p/papyrus}{#f/27}SAY... IS IT GETTING DARK OUT HERE?",
         "<15>{#p/papyrus}{#f/27}MAYBE CAPTURING YOU WASN'T SUCH A GREAT IDEA...",
         "<15>{#f/15}YEAH!!! I CAN TELL YOU'RE DESPERATE FOR MY MERCY!",
         "<15>{#f/20}I, THE GREAT PAPYRUS, WILL OBLIGE YOU!!",
         "<15>{#f/20}I WILL {@fill:#f00}SPARE{@fill:#000} YOU, HUMAN!!!",
         "<15>{#f/27}SO... NOW'S YOUR CHANCE... TO ACCEPT MY {@fill:#f00}MERCY{@fill:#000}..."
      ],
      act_check: () =>
         world.genocide
            ? [ "<32>{#p/story}* PAPYRUS - 攻擊3 防禦3\n* 亡兄之弟。" ]
            : papreal()
            ? [ "<32>{#p/story}* PAPYRUS - ATK 3 DEF 3\n* Believes in you." ]
            : [ "<32>{#p/story}* PAPYRUS - ATK 20 DEF 20\n* Likes to say \"Nyeh Heh Heh!\"" ],
      act_check2: [ "<32>{#p/story}* PAPYRUS - ATK 20 DEF 20\n* Everything is fine." ],
      act_check3: [ "<32>{#p/story}* PAPYRUS - ATK 20 DEF 20\n* The most benevolent and merciful guardsman!" ],
      capture1: [
         "<15>{#p/papyrus}{#f/20}LOOKS LIKE YOU'RE GOING TO THE CAPTURE ZONE!!",
         "<15>{#f/24}... ALSO KNOWN AS THE GARAGE.",
         "<15>{#f/20}A HEAVILY FORTIFIED GARAGE, THAT IS!",
         "<15>{#f/20}NYEH HEH HEH HEH HEH HEH HEH!!!"
      ],
      capture2: [
         "<15>{#p/papyrus}{#f/24}WELL!!! YOU MAY HAVE CLEVERLY ESCAPED BEFORE...",
         "<15>{#f/20}BUT THIS TIME, I'VE UPGRADED THE FACILITIES.",
         "<15>{#f/20}NOT ONLY WILL YOU BE STUCK...",
         "<15>{#f/15}BUT YOU WON'T EVEN WANT TO LEAVE!!!",
         "<15>{#f/20}NYEH HEH HEH HEH HEH HEH HEH!!!"
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
         "<15>{#f/20}NYEH HEH HEH HEH HEH HEH HEH!!!"
      ],
      capture4: [
         "<15>{#p/papyrus}{#f/24}ARE YOU SURE YOU CAN KEEP THIS UP?",
         "<15>{#f/21}BEING CAPTURED AGAIN MUST BE FRUSTRATING...",
         "<15>{#f/21}I DON'T WANT YOU TO GET MAD ABOUT FAILING REPEATEDLY...",
         "<15>{#f/20}PERHAPS NEXT TIME WE CAN SKIP THE BATTLE!",
         "<15>{#f/20}FOR NOW, THOUGH, IT'S OFF TO THE CAPTURE ZONE!!!",
         "<15>{#f/20}NYEH HEH HEH HEH HEH HEH HEH!!!"
      ],
      capture5: [
         "<15>{#p/papyrus}{#f/27}WOWIE... AGAIN???",
         "<15>{#f/15}WELL, IF YOU INSIST...!",
         "<15>{#f/20}NYEH HEH HEH HEH HEH HEH HEH!!!"
      ],
      checkTalk: [ "<15>{#p/papyrus}{#f/20}NYEH HEH HEH!" ],
      death1: () =>
         world.genocide
            ? [ "<15>{#p/papyrus}{#f/27}不...\n不-不..." ]
            : [ "<15>{#p/papyrus}{#f/21}額，我沒料到\n會這樣..." ],
      death2: () =>
         world.genocide
            ? [ "<15>{#p/papyrus}{#f/21}SANS，我...", "<15>{#f/33}{@random:1.1,1.1}我讓你失望了..." ]
            : [ "<15>{#p/papyrus}{#f/27}...幸-幸好，\n我的頭還在！" ],
      dots: [ "<32>{#p/basic}* ..." ],
      flirt0: [ "<32>{#p/basic}* Cute." ],
      flirt1: [
         "<15>{#p/papyrus}{#f/20}WHAT!?\nF-F-FLIRTING!?",
         "<15>SO YOU FINALLY REVEAL YOUR {@fill:#f00}ULTIMATE FEELINGS{@fill:#000}!",
         "<15>W-WELL!\nI'M A SKELETON WITH VERY HIGH STANDARDS!!!",
         "<15>WHAT CAN YOU DO IN RETURN FOR MY AFFECTION???"
      ],
      flirt2: [
         "<32>{#p/human}* (Your reply?){!}µµµI have\nµµµµI can makeµµµµzero redeeming\nµµµµspaghettiµµµµµqualities{#c/0/4/2}"
      ],
      flirt3a: [ "<15>{#p/papyrus}{#f/24}THAT CONFIDENCE... IT REMINDS ME OF..." ],
      flirt3b: [ "<15>{#p/papyrus}{#f/24}THAT HUMILITY... IT REMINDS ME OF..." ],
      flirt4: [
         "<15>{#f/22}MYSELF!!!",
         "<15>{#f/10}YOU'RE MEETING ALL MY STANDARDS!!!",
         "<15>{#f/27}I GUESS THIS MEANS I HAVE TO GO ON A DATE WITH YOU...?"
      ],
      flirt5: [ "<15>{#p/papyrus}{#f/20}LET'S DATE L-LATER!!\nAFTER I CAPTURE YOU!" ],
      flirt6: [ "<32>{#p/human}* (You flirt, but to no avail.)\n* (It seems acting won't escalate this battle.)" ],
      flirt7: [ "<32>{#p/human}* (But Papyrus was too busy fighting to hear you.)" ],
      flirtStatus1: [ "<32>{#p/story}* Papyrus is thinking about what to wear for his date." ],
      flirtStatus2: [ "<32>{#p/story}* Papyrus dabs some Bone Cologne behind his ear." ],
      flirtStatus3: [ "<32>{#p/story}* Papyrus is thinking about what to cook for his date." ],
      flirtStatus4: [ "<32>{#p/story}* Papyrus dabs marinara sauce behind his ear." ],
      flirtStatus5: [ "<32>{#p/story}* Papyrus is thinking about sexy rectangles." ],
      flirtStatus6: [ "<32>{#p/story}* Papyrus dabs MTT-brand Bishie Cream behind his ear." ],
      flirtStatus7: [ "<32>{#p/story}* Papyrus dabs MTT-brand Anime Powder behind his ear." ],
      flirtStatus8: [ "<32>{#p/story}* Papyrus dabs MTT-brand Cute Juice behind his ear." ],
      flirtStatus9: [ "<32>{#p/story}* Papyrus realizes he doesn't have ears." ],
      flirtStatus10: [ "<32>{#p/story}* Papyrus has random lumps of ointment on his head." ],
      flirtStatus11: [ "<32>{#p/story}* ... he's still thinking about sexy rectangles." ],
      hurtStatus: [ "<32>{#p/story}* Papyrus is at the edge of defeat." ],
      insult1: [ "<15>{#p/papyrus}{#f/20}HOW SELFLESS!", "<15>{#f/21}YOU WANT ME TO FEEL BETTER ABOUT FIGHTING YOU..." ],
      insult2: [ "<15>{#p/papyrus}{#f/15}THERE'S NO NEED TO LIE TO YOURSELF!!!" ],
      insult3: [ "<32>{#p/human}* (You insult, but to no avail.)\n* (It seems acting won't escalate this battle.)" ],
      insult4: [ "<32>{#p/human}* (But Papyrus was too busy fighting to hear you.)" ],
      name: "* Papyrus",
      randomStatus1: [ "<32>{#p/story}* Papyrus readies a bone attack." ],
      randomStatus2: [ "<32>{#p/story}* Papyrus prepares a non-bone attack then spends a minute fixing his mistake." ],
      randomStatus3: [ "<32>{#p/story}* Papyrus is cooking." ],
      randomStatus4: [ "<32>{#p/story}* Papyrus whispers \"Nyeh heh heh!\"" ],
      randomStatus5: [ "<32>{#p/story}* Papyrus is rattling his bones." ],
      randomStatus6: [ "<32>{#p/story}* Papyrus is trying hard to play it cool." ],
      randomStatus7: [ "<32>{#p/story}* Papyrus is considering his options." ],
      randomStatus8: [ "<32>{#p/story}* Smells like bones." ],
      randomStatus9: [ "<32>{#p/story}* Papyrus remembered a good joke Sans told and is smiling." ],
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
      spaghetti2: [ "<32>{#p/basic}* If Papyrus wasn't so busy fighting, he might've noticed that." ],
      specialStatus1: [ "<32>{#p/story}* Special attack." ],
      specialStatus2: [ "<32>{#p/story}* Papyrus is going all out." ],
      specialStatus3: [ "<32>{#p/story}* Papyrus has thrown all logic out the window." ],
      specialStatus4: [ "<32>{#p/story}* Papyrus notices the lack of logic and brings it back inside." ],
      specialStatus5: [ "<32>{#p/story}* Papyrus is sweating." ],
      specialStatus6: [ "<32>{#p/story}* Papyrus is at his wit's end." ],
      status1: [ "<32>{#p/story}* Papyrus正在饒恕你。" ],
      status2: [ "<32>{#p/story}* Papyrus blocks the way!" ],
      turnTalk0a: [ "<15>{#p/papyrus}{#f/24}SO, YOU'RE SERIOUS..." ],
      turnTalk0b: [ "<15>{#p/papyrus}{#f/24}SO, YOU WON'T FIGHT..." ],
      turnTalk0c: [ "<15>{#p/papyrus}{#f/20}THEN LET'S SEE HOW YOU HANDLE MY FABLED 'BLUE ATTACK!'" ],
      turnTalk0x: [
         "<15>{#p/papyrus}{#f/10}YOU'RE BLUE NOW.",
         "<15>{#f/10}THAT'S MY ATTACK!",
         "<15>{#f/20}NYEH HEH HEH HEH HEH HEH HEH HEH HEH!!!"
      ],
      turnTalk1a: [ "<15>{#p/papyrus}{#f/20}BEHOLD!" ],
      turnTalk1b: [ "<15>{#p/papyrus}{#f/20}HMMM... I WONDER WHAT I SHOULD WEAR..." ],
      turnTalk2a: [ "<15>{#p/papyrus}{#f/20}HOW HIGH CAN YOU JUMP?" ],
      turnTalk2b: [ "<15>{#p/papyrus}{#f/22}WHAT!?\nI'M NOT THINKING ABOUT THE DATE!!" ],
      turnTalk3: () =>
         world.postnoot
            ? [ "<15>{#p/papyrus}{#f/21}... IS IT JUST ME, OR DOES THE AIR SEEM A LITTLE WEIRD?" ]
            : [ "<15>{#p/papyrus}{#f/20}YEAH!\nDON'T MAKE ME USE MY {@fill:#f00}SPECIAL ATTACK{@fill:#000}!" ],
      turnTalk4: () =>
         world.postnoot
            ? [ "<15>{#p/papyrus}{#f/20}OH WELL.\nI'M SURE IT'S NOTHING." ]
            : [ "<15>{#p/papyrus}{#f/20}I CAN ALMOST TASTE MY FUTURE POPULARITY!!!" ],
      turnTalk5: () =>
         world.postnoot
            ? [ "<15>{#p/papyrus}{#f/20}BESIDES, I SEE MARINARA SAUCE IN MY FUTURE!" ]
            : [ "<15>{#p/papyrus}{#f/20}PAPYRUS: UNPARALLELED SPAGHETTORE!" ],
      turnTalk6: () =>
         world.postnoot
            ? [ "<15>{#p/papyrus}{#f/20}AND A POSITION IN THE ELITE SQUAD!" ]
            : [ "<15>{#p/papyrus}{#f/20}PAPYRUS: ELITE SQUAD MEMBER!" ],
      turnTalk7: [ "<15>{#p/papyrus}{#f/10}UNDYNE WILL BE REALLY PROUD OF ME!!" ],
      turnTalk8: [ "<15>{#p/papyrus}{#f/20}THE KING WILL BUILD A STATUE OF ME IN THE CITADEL!!!" ],
      turnTalk9: [ "<15>{#p/papyrus}{#f/10}... AND I'LL MAKE SURE MY BROTHER GETS ONE TOO." ],
      turnTalk10: [ "<15>{#p/papyrus}{#f/27}WE'LL HAVE LOTS OF ADMIRERS!!\nBUT..." ],
      turnTalk11a: [ "<15>{#p/papyrus}{#f/20}HOW WILL I KNOW IF PEOPLE SINCERELY LIKE ME???" ],
      turnTalk11b: [ "<15>{#p/papyrus}{#f/20}WILL ANYONE LIKE ME LIKE YOU DO?" ],
      turnTalk12: [ "<15>{#p/papyrus}{#f/21}SOMEONE LIKE YOU IS REALLY RARE..." ],
      turnTalk13a: [ "<15>{#p/papyrus}{#f/21}I DON'T THINK THEY'LL LET YOU GO..." ],
      turnTalk13b: [ "<15>{#p/papyrus}{#f/21}AND DATING MIGHT BE KIND OF HARD..." ],
      turnTalk14: [ "<15>{#p/papyrus}{#f/26}AFTER YOU'RE CAPTURED AND SENT AWAY." ],
      turnTalk15: [ "<15>{#p/papyrus}{#f/17}URGH... WHO CARES!\nGIVE UP!!" ],
      turnTalk16: [ "<15>{#p/papyrus}{#f/15}GIVE UP OR FACE MY... {@fill:#f00}SPECIAL ATTACK{@fill:#000}!" ],
      turnTalk17: [ "<15>{#p/papyrus}{#f/20}YEAH!!!\nVERY SOON I WILL USE MY {@fill:#f00}SPECIAL ATTACK{@fill:#000}!" ],
      turnTalk18: [
         "<15>{#p/papyrus}{#f/20}THIS IS YOUR LAST CHANCE... BEFORE MY {@fill:#f00}SPECIAL ATTACK{@fill:#000}!"
      ],
      turnTalk19: [ "<15>{#p/papyrus}{#f/20}BEHOLD...!\nMY {@fill:#f00}SPECIAL ATTACK{@fill:#000}!" ],
      turnTalk19x: [
         "<15>{#p/papyrus}{#f/15}NYEH HEH HEH!",
         "<15>{#f/20}NO HUMAN HAS EVER FACED MY {@fill:#f00}SPECIAL ATTACK{@fill:#000} BEFORE!",
         "<15>{#f/20}PREPARE TO BE CAPTURED, ONCE AND FOR ALL!"
      ],
      turnTalk20: [ "<15>{#p/papyrus}{#f/20}特殊攻擊，\n第一式！" ],
      turnTalk21: [ "<15>{#p/papyrus}{#f/20}SPECIAL ATTACK, FORMATION BETA!!" ],
      turnTalk22: [ "<15>{#p/papyrus}{#f/20}SPECIAL ATTACK, FORMATION GAMMA!!" ],
      turnTalk23: [ "<15>{#p/papyrus}{#f/20}SPECIAL ATTACK, FORMATION DELTA!!" ],
      turnTalk24: [
         "<15>{#p/papyrus}{#f/27}WOWIE!\nARE YOU STRONG!",
         "<15>{#f/20}BUT NO FEAR!\nI WILL NOT BE DETERRED BY YOUR STRENGTH!",
         "<15>{#f/14}... SPECIAL ATTACK...",
         "<15>{#f/17}FORMATION {@fill:#f00}SIGMA{@fill:#000}!!!"
      ],
      turnTalk24x: [
         "<15>{#p/papyrus}{#f/27}WELL...! *HUFF* IT'S CLEAR... YOU CAN'T! *HUFF* BEAT ME!",
         "<15>{#f/15}YEAH!!! I CAN SEE YOU SHAKING IN YOUR BOOTS!!",
         "<15>{#f/20}I, THE GREAT PAPYRUS, ELECT TO GRANT YOU PITY!!",
         "<15>{#f/20}I WILL {@fill:#f00}SPARE YOU{@fill:#000}, HUMAN!!!",
         "<15>{#f/10}NOW'S YOUR CHANCE TO ACCEPT MY {@fill:#f00}MERCY{@fill:#000}."
      ],
      idleTalk: [ "<15>{#p/papyrus}{#f/20}..." ],
      secretFlirt1: [ "<15>{#p/papyrus}{#f/27}你盼著能伴我左右...\n直到永遠？", "<15>{#p/papyrus}{#f/21}呃..." ],
      secretFlirt2: [
         "<15>{#p/papyrus}{#f/27}有人想拆散我們？",
         "<15>{#p/papyrus}{#f/21}是誰呢..."
      ],
      secretFlirt2x: [
         "<15>{#p/papyrus}{#f/27}SO YOU -DON'T- WISH TO REMAIN WITH ME?",
         "<15>{#p/papyrus}{#f/14}BUT THEN... WHY WON'T YOU ACCEPT MY MERCY AND LEAVE ME?"
      ],
      secretFlirt3: [
         "<15>{#p/papyrus}{#f/25}呃，我們還沒到\n-那麼-濃情蜜意的\n地步吧...",
         "<15>{#p/papyrus}{#f/15}...但事後\n我們可以繼續！"
      ],
      secretFlirt3x: [ "<15>{#p/papyrus}{#f/27}WAIT, ARE -YOU- THE ONE WHO'S TRYING TO TEAR OUR LOVE APART?" ],
      secretFlirt4: [ "<15>{#p/papyrus}{#f/24}等等，你是想說...\n三角戀？？？" ],
      secretFlirt4x: [
         "<15>{#p/papyrus}{#f/26}... SO YOU -DON'T- WANT TO TRY THAT LATER?",
         "<15>{#p/papyrus}{#f/24}AND NOT ONLY THAT, BUT...",
         "<15>{#p/papyrus}{#f/22}YOU NEVER EVEN WANTED TO BE WITH ME TO BEGIN WITH!?"
      ],
      secretFlirt5: [ "<15>{#p/papyrus}{#f/22}OR MAYBE IT'S MORE LIKE... A LOVE TRAPEZOID!" ],
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
         "<15>{#p/papyrus}{#f/20}NYEH HEH HEH HEH HEH HEH HEH HEH HEH HEH!"
      ],
      secretFlirt8: [
         "<15>{#p/papyrus}{#f/20}FRET NOT, HUMAN!",
         "<15>{#p/papyrus}{#f/14}I, PAPYRUS, WILL MAKE SURE NO HARM COMES TO EITHER OF US!",
         "<15>{#p/papyrus}{#f/20}I WILL SPARE MYSELF FOR YOU!",
         "<15>{#p/papyrus}{#f/20}AND THEN, I WILL FIND A VERY SAFE PLACE TO HIDE.",
         "<15>{#p/papyrus}{#f/15}別擔心，人類！\n一切盡在\nPAPYRUS的掌控之中！"
      ],
      secretInsult1: [ "<15>{#p/papyrus}{#f/27}呃... 大可不必？？？" ],
      secretInsult2: [ "<15>{#p/papyrus}{#f/21}蠢貨... \n我好像在哪聽過..." ],
      secretInsult2x: [
         "<15>{#p/papyrus}{#f/22}OR... NOT?",
         "<15>{#p/papyrus}{#f/24}SO, LET ME GET THIS STRAIGHT.",
         "<15>{#p/papyrus}{#f/27}YOU MEANT TO SAY YOU... LOVE ME???",
         "<15>{#p/papyrus}{#f/27}AND THAT SOMETHING IS TRYING TO TEAR OUR LOVE APART?"
      ],
      secretInsult3: [ "<15>{#p/papyrus}{#f/29}搞什麼..." ],
      secretInsult3x: [
         "<15>{#p/papyrus}{#f/27}YOU MEAN I'M AN IDIOT FOR NOT NOTICING HOW MUCH YOU LOVE ME?",
         "<15>{#p/papyrus}{#f/28}AND THAT YOU WANT TO... UH...",
         "<15>{#p/papyrus}{#f/25}I-I MEAN, I DON'T THINK WE'VE GOTTEN -THAT- FAR YET...",
         "<15>{#p/papyrus}{#f/15}...但事後\n我們可以繼續！"
      ],
      secretInsult4: [ "<15>{#p/papyrus}{#f/27}你罵我沒腦子，\n沒懂你啥意思..." ],
      secretInsult4x: [
         "<15>{#p/papyrus}{#f/27}SO... YOU MEANT TO SAY WE'RE IN A LOVE TRIANGLE?",
         "<15>{#p/papyrus}{#f/19}WELL, IT'D CERTAINLY EXPLAIN YOUR ABRASIVE ATTITUDE!"
      ],
      secretInsult5: [
         "<15>{#p/papyrus}{#f/27}啥？\n“志在星辰大海，\n何必自暴自棄”...",
         "<15>{#p/papyrus}{#f/17}你在說啥呢...？"
      ],
      secretInsult5x: [
         "<15>{#p/papyrus}{#f/25}WAIT... YOU WANTED ME TO REALIZE THAT YOU SECRETLY LOVED ME?",
         "<15>{#p/papyrus}{#f/22}AND THAT WE'RE ACTUALLY IN A... LOVE TRAPEZOID!?"
      ],
      secretInsult6: [
         "<15>{#p/papyrus}{#f/14}等等... 我明白了！",
         "<15>{#p/papyrus}{#f/21}蠢貨...",
         "<15>{#p/papyrus}{#f/21}星辰大海...",
         "<15>{#p/papyrus}{#f/20}有顆星星，TWINKLY，\n他也喜歡叫人“蠢貨”！",
         "<15>{#p/papyrus}{#f/25}我...",
         "<15>{#p/papyrus}{#f/22}我才反應過來\n是怎麼回事！",
         "<15>{#p/papyrus}{#f/20}那個“ASRIEL”好像\n也喜歡罵人蠢貨！",
         "<15>{#p/papyrus}{#f/24}也就是說...",
         "<15>{#p/papyrus}{#f/22}你剛說的“星辰”\n肯定就是指他！",
         "<15>{#p/papyrus}{#f/19}他肯定幹了啥，\n害-我-表現得\n像個蠢貨！"
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
         "<15>{#p/papyrus}{#f/14}現在...\n我不會再\n被他騙了！",
         "<15>{#p/papyrus}{#f/20}我，PAPYRUS，\n保證讓他再也\n找不到我！",
         "<15>{#p/papyrus}{#f/15}別擔心，人類！\n一切盡在\nPAPYRUS的掌控之中！"
      ],
      sparableFlirt1: [
         "<15>{#p/papyrus}{#f/27}YOU'RE SUPPOSED TO BE SPARING, NOT FLIRTING!",
         "<15>{#f/14}I MUST RESIST!"
      ],
      sparableFlirt1x: [
         "<15>{#p/papyrus}{#f/27}HUH?\nFLIRTING, AT A TIME LIKE THIS?",
         "<15>{#f/14}WELL, THAT'S ONE WAY TO REDEEM YOURSELF!"
      ],
      sparableFlirt2: [ "<15>{#p/papyrus}{#f/14}N-NO...!" ],
      sparableFlirt2x: [ "<15>{#p/papyrus}{#f/14}A-AH...!" ],
      sparableFlirt3: [ "<15>{#p/papyrus}{#f/14}..." ],
      sparableInsult1: [
         "<15>{#p/papyrus}{#f/20}HEY, THERE'S NO NEED TO INSULT YOURSELF!",
         "<15>{#f/21}I KNOW YOU DID YOUR BEST..."
      ],
      sparableInsult1x: [
         "<15>{#p/papyrus}{#f/20}HEY, THERE'S NO NEED TO INSULT YOURSELF!",
         "<15>{#f/15}YOU'RE HERE TO BETTER YOURSELF, REMEMBER?"
      ],
      sparableInsult2: [ "<15>{#p/papyrus}{#f/21}HUMAN..." ],
      sparableInsult2x: [ "<15>{#p/papyrus}{#f/15}COME ON...!" ],
      sparableInsult3: [ "<15>{#p/papyrus}{#f/21}..." ]
   },
   b_opponent_shockasgore: {
      act_check: [ "<32>{#p/asriel2}* Asgore。\n* 親手葬送自己家園的昏君。" ],
      act_hug: [ "<32>{#p/human}* （你想抱抱Asgore...）" ],
      hugText: [ "<32>{#p/human}* （...但你的身體直接穿了過去。）", "<32>{#p/asriel2}* ...啊？" ],
      foodText: [ "<11>{#p/asgore}{#f/5}Is that..." ],
      idleText1: [ "<11>{#p/asgore}{#f/1}開玩笑吧..." ],
      idleText2: [ "<11>{#p/asgore}{#f/1}一定要\n訴諸暴力嗎？" ],
      idleText3: [ "<11>{#p/asgore}{#f/1}為什麼不能\n和平解決呢？" ],
      idleText4: [ "<11>{#p/asgore}{#f/1}真的有必要嗎？" ],
      stickText: [
         "<32>{#p/human}* （你朝Asgore扔出扳手。）\n* （扳手直接穿過了他的身體。）",
         "<32>{#p/asriel2}* ...啊？"
      ],
      miss: [
         "<11>{#p/asgore}{#f/2}...",
         "<11>{#f/1}我本人不在這，\nAsriel。",
         "<11>{#f/2}這不過\n是個投影。"
      ],
      name: "* Asgore",
      status1: [ "<32>{#p/asriel2}* 現在殺了他，$(name)。" ],
      status2: [ "<32>{#p/asriel2}* ..." ]
   },

   i_berry: {
      battle: {
         description: "A small branch of semi-translucent berries.",
         name: "洋梅"
      },
      drop: [ "<32>{#p/human}* （你把洋梅扔掉了。）" ],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? [ "<32>{#p/human}* （7 HP。）" ]
            : [ "<32>{#p/basic}* \"Exoberries\" Heals 7 HP\n* A small branch of semi-translucent berries." ],
      name: "洋梅",
      use: [ "<32>{#p/human}* （你吃掉了洋梅。）" ]
   },
   i_blookpie: {
      battle: {
         description: "將新鮮洋梅浸潤在果凍中製作而成。",
         name: "洋梅派"
      },
      drop: () => [
         "<32>{#p/human}* （你把洋梅果凍派扔掉了。）",
         ...(instance('main', 'blookishly') !== void 0 // NO-TRANSLATE

            ? game.room === '_frontier4' // NO-TRANSLATE

               ? [ "<32>{#p/napstablook}* ......... huh?" ]
               : [ "<32>{#p/napstablook}* oh.................." ]
            : [])
      ],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? [ "<32>{#p/human}* （99 HP。）" ]
            : [ "<32>{#p/basic}* “Exoberry Pie” 回覆 99 HP\n* 將新鮮洋梅浸潤在果凍中製作而成。" ],
      name: "洋梅果凍派",
      use: () => [
         "<32>{#p/human}* （你吃掉了洋梅果凍派。）",
         ...(instance('main', 'blookishly') !== void 0 // NO-TRANSLATE

            ? game.room === '_frontier4' // NO-TRANSLATE

               ? [ "<32>{#p/napstablook}* ......... huh?" ]
               : [ "<32>{#p/napstablook}* aw.........\n* i hope you like it........." ]
            : [])
      ]
   },
   i_chip: {
      battle: {
         description: "Please take this to the edge of the galaxy.",
         name: "“芯”型薯片"
      },
      drop: () => [
         "<32>{#p/human}* (You threw away the Computer Chip.)",
         ...(SAVE.data.b.svr && !SAVE.data.b.freedom
            ? [ "<25>{#p/asriel1}{#f/15}* Uh... weren't you going to protect that?" ]
            : [])
      ],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? [ "<32>{#p/human}* (45 HP. Rather than eating it, you feel you should keep this item safe.)" ]
            : [ "<32>{#p/basic}* \"Computer Chip\" Heals 45 HP\n* Please take this to the edge of the galaxy." ],
      name: "“芯”型薯片",
      use: () => [
         "<32>{#p/human}* (You bit into the Computer Chip.)",
         ...(SAVE.data.b.svr && !SAVE.data.b.freedom
            ? [ "<25>{#p/asriel1}{#f/15}* Uh... weren't you going to protect that?" ]
            : world.darker || SAVE.data.b.ufokinwotm8
            ? []
            : [
                 "<32>{#p/basic}* One might say you took a \"byte\" out of the computer chip.",
                 ...(calcHP() - SAVE.data.n.hp > 45
                    ? [ "<32>{#p/basic}* It seems to have increased your HP integer." ]
                    : [ "<32>{#p/basic}* It seems your injuries have been overwritten." ])
              ])
      ]
   },
   i_eye: {
      battle: {
         description: "A portable force field.",
         name: "力場護盾"
      },
      drop: [ "<32>{#p/human}* （你把力場護盾扔掉了。）" ],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? [ "<32>{#p/human}* (7 DF.)" ]
            : [ "<32>{#p/basic}* “力場護盾” （7防禦）\n* 可隨身攜帶的力場發射器。" ],
      name: "力場護盾",
      use: [ "<32>{#p/human}* (You deployed the Field Emitter.)" ]
   },
   i_eye_x: {
      battle: {
         description: "A somewhat underpowered portable force field.",
         name: "力場護盾？"
      },
      drop: [ "<32>{#p/human}* （你把力場護盾扔掉了。）" ],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? [ "<32>{#p/human}* (5 DF.)" ]
            : [ "<32>{#p/basic}* “力場護盾” （5防禦）\n* 可隨身攜帶的力場發射器，\n  但能量不足。" ],
      name: "力場護盾？",
      use: [ "<32>{#p/human}* (You deployed the Field Emitter.)" ]
   },
   i_fruit: {
      battle: {
         description: "非歐幾何形狀的水果，\n裡頭比外表還大。",
         name: "幽靈水果"
      },
      drop: [ "<32>{#p/human}* (You fold the Ghost Fruit in on itself.)" ],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? [ "<32>{#p/human}* （15 HP。）" ]
            : [ "<32>{#p/basic}* “幽靈水果” 回覆 15 HP\n* 非歐幾何形狀的水果，\n  裡頭比外表還大。" ],
      name: "幽靈水果",
      use: [ "<32>{#p/human}* (You unpacked the Ghost Fruit's many dimensions.)" ]
   },
   i_glove: {
      battle: {
         description: "A state-of-the-art bionic glove.\nIt's so bad.",
         name: "超能手套"
      },
      drop: [ "<32>{#p/human}* （你把超能手套扔掉了。）" ],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? [ "<32>{#p/human}* (5 AT.)" ]
            : [ "<32>{#p/basic}* \"Power Glove\" (5 AT)\n* A state-of-the-art bionic glove. It's so bad." ],
      name: "超能手套",
      use: [ "<32>{#p/human}* （你戴上了超能手套。）" ]
   },
   i_glove_x: {
      battle: {
         description: "It's not the original, but it still packs a punch.",
         name: "超能手套？"
      },
      drop: [ "<32>{#p/human}* （你把超能手套扔掉了。）" ],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? [ "<32>{#p/human}* (3 AT.)" ]
            : [ "<32>{#p/basic}* “超能手套？” （3攻擊）\n* 雖然是仿製手套，\n  但不妨礙你用它痛扁敵人。" ],
      name: "超能手套？",
      use: [ "<32>{#p/human}* （你戴上了超能手套。）" ]
   },
   i_milkshake: {
      battle: {
         description: "Made of an unknown, pearly-white substance.",
         name: "奶昔"
      },
      drop: [ "<32>{#p/human}* (You rid yourself of the Milkshake.)" ],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? [ "<32>{#p/human}* （18 HP。）" ]
            : [ "<32>{#p/basic}* “奶昔” 回覆 18 HP\n* 由白如珍珠的不明物質製成。" ],
      name: "奶昔",
      use: () => [
         "<32>{#p/human}* (You swallowed every last drop of the Milkshake.)",
         ...(SAVE.data.b.svr || world.darker || SAVE.data.b.ufokinwotm8 ? [] : [ "<32>{#p/basic}* ... salty." ])
      ]
   },
   i_nice_cream: {
      battle: {
         description: "Instead of a joke, the wrapper says something fantastical.",
         name: "Ice Dream"
      },
      drop: [ "<32>{#p/human}* (You throw away the Ice Dream.)" ],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? [ "<32>{#p/human}* （15 HP。）" ]
            : [ "<32>{#p/basic}* \"Ice Dream\" Heals 15 HP\n* Instead of a joke, the wrapper says something fantastical." ],
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
         description: "可改變主觀時間流速。",
         name: "渦旋棒棒糖"
      },
      drop: [ "<32>{#p/human}* （你把渦旋棒棒糖扔掉了。）" ],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? [ "<32>{#p/human}* （11 HP。）" ]
            : [
                 "<33>{#p/basic}* “渦旋棒棒糖” 回覆 11 HP\n* 可改變主觀時間流速。\n* 僅在戰鬥中有效。"
              ],
      name: "渦旋棒棒糖",
      use: () => [
         "<32>{#p/human}* (You suck on the Vortex Pop.)",
         ...(battler.active
            ? game.vortex
               ? [ "<32>{#p/human}* (Your perception of time is already shifted.)" ]
               : [
                    "<32>{#p/human}* (Your perception of time begins to shift.)",
                    "<32>{#p/story}* FOCUS up for two turns!"
                 ]
            : [ "<32>{#p/human}* (No effect outside of battle.)" ])
      ]
   },
   i_spaghetti: {
      battle: {
         description: "Silken spaghetti, finely aged in a time dilation unit.",
         name: "Spaghetti"
      },
      drop: () => [
         "<32>{#p/human}* （你把意大利麵扔掉了。）",
         ...(!battler.active &&
         (SAVE.data.n.state_papyrus_spaghet !== 0 || (game.room === 's_bros' && SAVE.data.n.plot < 21)) // NO-TRANSLATE

            ? SAVE.data.n.plot === 72 && game.room === 'c_asgore_kitchen' // NO-TRANSLATE

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
                       : [ "<18>{#f/6}... IS CONSUMABLE NO LONGER!!" ]),
                    "<18>{#f/4}STILL... MAYBE IT'S FOR THE BEST.",
                    "<18>{#f/5}LIKE, MAYBE SEEING YOU THROW THAT AWAY...",
                    "<18>{#f/6}WILL ENCOURAGE ME TO MAKE A EVEN -BETTER- DISH!",
                    "<18>{#f/9}YEAH! LOOK AT HOW ENCOURAGED I AM RIGHT NOW!",
                    ...(fetchCharacters().find(c => c.key === 'undyne') !== void 0 // NO-TRANSLATE

                       ? [ "<25>{#p/undyne}{#f/17}* YEAH!!\n* Look at how encouraged he is right now!!" ]
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
               : []
            : [])
      ],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? [ "<32>{#p/human}* （16 HP。）" ]
            : [ "<32>{#p/basic}* \"Spaghetti\" Heals 16 HP\n* Silken spaghetti, finely aged in a time dilation unit." ],
      name: "Spaghetti",
      use: () => [
         "<32>{#p/human}* （你吃光了意大利麵。）",
         ...(!battler.active &&
         (SAVE.data.n.state_papyrus_spaghet !== 0 || (game.room === 's_bros' && SAVE.data.n.plot < 21)) // NO-TRANSLATE

            ? SAVE.data.n.plot === 72 && game.room === 'c_asgore_kitchen' // NO-TRANSLATE

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
               ? [
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

                          ? [ "<25>{#p/undyne}{#f/14}* Wow.\n* What a crime." ]
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
                          : [ "<18>{#f/0}HMM, I SUPPOSE THAT'S FOR THE BEST." ]),
                       "<18>{#f/5}AFTER ALL, IF YOU -HAD- MADE SUCH A STATEMENT...",
                       "<18>{#f/6}WE WOULD HAVE BEEN IN QUITE THE PERDICAMENT.",
                       "<18>{#f/0}BUT YOU DIDN'T!\nSO WE'RE GOOD!",
                       ...(fetchCharacters().find(c => c.key === 'undyne') !== void 0 // NO-TRANSLATE

                          ? [
                               "<25>{#p/undyne}{#f/12}* And all is right with the world, huh?",
                               "<18>{#p/papyrus}{#f/7}HEY, THAT'S WHAT I WAS GOING TO SAY!",
                               "<18>{#f/0}BUT YES.\nYES IT IS."
                            ]
                          : [ "<18>{#f/0}AND ALL IS RIGHT WITH THE WORLD." ])
                    ]
                 ][SAVE.data.n.state_papyrus_spaghet - 1]
               : []
            : [])
      ]
   },
   i_swirl: {
      battle: {
         description: "一個五彩斑斕的發光瑞士捲。",
         name: "光彩漩渦"
      },
      drop: [ "<32>{#p/human}* （你把光彩漩渦扔掉了。）" ],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? [ "<32>{#p/human}* （22 HP。）" ]
            : [ "<32>{#p/basic}* “光彩漩渦” 回覆 22 HP\n* 一個五彩斑斕的發光瑞士捲。" ],
      name: "光彩漩渦",
      use: [ "<32>{#p/human}* （你吃掉了光彩漩渦。）" ]
   },
   i_voidy: {
      battle: {
         description: "Leads to a mysterious place.\nNot viable in battle.",
         name: "Sanctuary"
      },
      drop: [ "<32>{#p/human}* (You throw away the Sanctuary.)" ],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? [ "<32>{#p/human}* （一件存在之外的物品。）" ]
            : [ "<32>{#p/basic}* 可傳送到某個隱藏房間，\n  戰鬥外可用。" ],
      name: "Sanctuary",
      use: () =>
         battler.active
            ? [ "<32>{#p/human}* (You use the Sanctuary.)", "<32>{#p/human}* (No effect in battle.)" ]
            : [ "<32>{#p/human}* (You use the Sanctuary.)" ]
   },
   i_corndog_sword: {
      battle: {
         description: "A truly one-of-a-kind weapon.",
         name: "Dog Sword"
      },
      drop: [ "<32>{#p/human}* (You try to throw away the Corn Dog Sword...)", "<32>{#p/human}* (... but it refuses.)" ],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? [ "<32>{#p/human}* (You decide not to question the logic of this weapon.)" ]
            : [ "<32>{#p/basic}* A truly one-of-a-kind weapon." ],
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
                 "<32>{#p/basic}* Suddenly...!"
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
      drop: [ "<32>{#p/human}* (You tossed the Flamin' Grillby like a molotov.)" ],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? [ "<32>{#p/human}* （30 HP。）" ]
            : [ "<32>{#p/basic}* \"Flamin' Grillby\" Heals 30 HP\n* For once, it's not just \"pleasantly warm.\"" ],
      name: "Flamin' Grillby",
      use: [ "<32>{#p/human}* (You consume the Flamin' Grillby.)" ]
   },
   i_burgerz: {
      battle: {
         description: "Like burgers, but smaller.\nThree left.",
         name: "Slider Trio"
      },
      drop: [ "<32>{#p/human}* (You throw away the Sliders.)" ],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? [ "<32>{#p/human}* (15 HP. Three uses left.)" ]
            : [ "<32>{#p/basic}* \"Sliders\" Heals 15 HP\n* Like burgers, but smaller.\n* Three left." ],
      name: "Slider Trio",
      use: [ "<32>{#p/human}* (You eat one of the Sliders.)" ]
   },
   i_burgerz_use1: {
      battle: {
         description: "Like burgers, but smaller.\nTwo left.",
         name: "Slider Duo"
      },
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? [ "<32>{#p/human}* (15 HP. Two uses left.)" ]
            : [ "<32>{#p/basic}* \"Sliders\" Heals 15 HP\n* Like burgers, but smaller.\n* Two left." ],
      name: "Slider Duo"
   },
   i_burgerz_use2: {
      battle: {
         description: "Like a burger, but smaller.",
         name: "Slider"
      },
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? [ "<32>{#p/human}* (15 HP. One use left.)" ]
            : [ "<32>{#p/basic}* \"Sliders\" Heals 15 HP\n* Like burgers, but smaller.\n* One left." ],
      name: "Slider"
   },

   k_premium: {
      name: "Premium Membership Voucher",
      description: () =>
         SAVE.data.b.f_state_voucher
            ? "Used in tandem with your nonexistent premium telescope subscription."
            : "Given to you by Monster Kid after using the telescope in Starton."
   },

   k_inverter: {
      name: "Gravometric Inverter Remote",
      description: () =>
         SAVE.data.b.s_state_inverter
            ? "Used to operate the eponymous Gravometric Inverter."
            : "Acquired from the unsealed envelope in Sans's room."
   },

   k_security: {
      name: "Rusty Key",
      description: () =>
         SAVE.data.n.state_aerialis_lockup > 0
            ? "Used to unlock the armory in the rec center."
            : "Acquired at the \"police station\" on the north side of Starton town."
   },

   n_shop_blook: {
      exit: [ "<32>{#p/napstablook}{#k/0}* oh... you're leaving...", "<32>{#k/1}* well, cya next time i guess..." ],
      item: () =>
         blookGone()
            ? [
                 "§fill:#808080§---- 售罄 ----",
                 SAVE.data.b.item_blookpie ? "§fill:#808080§---- 售罄 ----" : "0G - 洋梅果凍派",
                 "0G - 幽靈水果",
                 "0G - 奶昔",
                 "離開"
              ]
            : SAVE.data.n.plot === 72
            ? [
                 SAVE.data.b.item_voidy ? "§fill:#808080§---- 售罄 ----" : "432G - Sanctuary",
                 SAVE.data.b.item_blookpie ? "§fill:#808080§---- 售罄 ----" : "80G - 洋梅果凍派",
                 "5G - 幽靈水果",
                 "5G - 奶昔",
                 "離開"
              ]
            : [
                 SAVE.data.b.item_voidy ? "§fill:#808080§---- 售罄 ----" : "432G - Sanctuary",
                 SAVE.data.b.item_blookpie ? "§fill:#808080§---- 售罄 ----" : "100G - 洋梅果凍派",
                 "12G - 幽靈水果",
                 "16G - 奶昔",
                 "離開"
              ],
      itemInfo: [
         "特殊物品：\n傳送到\n某個\n隱藏房間。",
         "回覆 99HP\n在黑暗中\n發出\n幽幽熒光。",
         "回覆 15HP\n非歐幾何的\n產物。",
         "回覆 18HP\n也許含有\n靈質。"
      ],
      itemPrompt: "<09>{#p/napstablook}{#k/3}see anything you like?",
      itemPurchase: [
         "<09>{#p/napstablook}{#k/3}heh... thank you...",
         "<09>{#p/napstablook}{#k/0}you don't have to buy it...",
         "<09>{#p/napstablook}{#k/0}sorry... not enough g...",
         "<10>{#p/human}(You're carrying too much.)"
      ],
      itemPurchasePrompt: () => (blookGone() ? "Take it?" : "花$(x)G\n買它嗎？"),
      itemUnavailable: () =>
         blookGone() ? "<09>{#p/basic}空無一物。" : "<09>{#p/napstablook}{#k/0}oh... i don't have any more...",
      menu: () =>
         blookGone() ? [ "拿取", "偷竊", "閱讀", "離開" ] : [ "購買", world.meanie ? "偷竊" : "出售", "交談", "離開" ],
      menuPrompt1: () =>
         [
            "<23>{#p/napstablook}{#k/3}* have a look around...",
            "<23>{#p/napstablook}{#k/3}* i hope you find what you're looking for...",
            "<23>{#p/napstablook}{#k/3}* have a look around... or not... it's your choice...",
            "<23>{#p/napstablook}{#k/3}* have a look around, i guess...",
            "<23>{#p/napstablook}{#k/3}* have a look around... or not... it's your choice..."
         ][Math.min(SAVE.data.n.state_wastelands_napstablook, 4)],
      menuPrompt2: "<23>{#p/napstablook}{#k/0}* feel free to leave at any time...",
      menuPrompt3: () =>
         world.bulrun ? "<23>{#p/basic}* ...但是人們都逃走了。" : "<23>{#p/basic}* ...但是誰也沒有來。",
      note: () =>
         [ 'f_blooky', 'f_napstablook' ].includes(SAVE.data.s.state_foundry_deathroom) // NO-TRANSLATE

            ? [ "<32>{#p/basic}* There's no note here." ]
            : SAVE.data.b.killed_mettaton
            ? [ "<32>{#p/basic}* 這裡有一張字條。", "<32>{#p/napstablook}* \"it's all your fault...\"" ]
            : world.runaway
            ? [ "<32>{#p/basic}* 這裡有一張字條。", "<32>{#p/napstablook}* \"we had no choice...\"" ]
            : [ "<32>{#p/basic}* 這裡有一張字條。", "<32>{#p/napstablook}* “對不起，我得走了...”" ],
      sell1: () =>
         blookGone()
            ? [ "<30>{#p/human}* （你從櫃檯後面拿走了42G。）" ]
            : world.meanie
            ? [
                 "<30>{#p/napstablook}{#k/2}* oh... you're trying to steal from me...",
                 "<30>{#p/napstablook}{#k/5}* you must really need it...",
                 SAVE.data.b.item_voidy
                    ? "<30>{#k/0}* i'm so sorry... the only money i have came from you..."
                    : "<30>{#k/0}* i'm so sorry... i don't have much to give..."
              ]
            : [
                 "<30>{#p/napstablook}{#k/2}* oh... you wanted to sell something",
                 "<30>{#k/0}* i don't know if i can afford to buy anything... sorry..."
              ],
      sell2: () =>
         blookGone()
            ? [ "<30>{#p/basic}* 空無一物。" ]
            : world.meanie
            ? [
                 "<30>{#p/napstablook}{#k/5}* um...\n* i can't give you anything of real value...",
                 "<30>{#p/napstablook}{#k/0}* i know... it's pretty sad"
              ]
            : [
                 "<30>{#p/napstablook}{#k/5}* um... you could ask my cousin about selling...",
                 "<30>{#k/0}* they live with undyne, i think"
              ],
      talk: (name: string) =>
         SAVE.data.n.plot === 72
            ? [ "哈拉", "What Happened", name, "The Future", "離開" ]
            : [
                 "哈拉",
                 "Ghosts",
                 "Sanctuary",
                 65 <= SAVE.data.n.plot
                    ? SAVE.data.b.a_state_hapstablook && 68 <= SAVE.data.n.plot
                       ? "Family"
                       : "Your Life"
                    : 63 <= SAVE.data.n.plot && SAVE.data.b.a_state_hapstablook
                    ? "Mettaton"
                    : 60 <= SAVE.data.n.plot
                    ? "Mew Mew Doll"
                    : 48 <= SAVE.data.n.plot
                    ? "Travels"
                    : SAVE.data.b.napsta_performance
                    ? "DJ Blooky?"
                    : SAVE.data.n.state_wastelands_napstablook === 0
                    ? "Dapper Blook?"
                    : "Your Life",
                 "離開"
              ],
      talkPrompt: "<09>{#p/napstablook}{#k/1}oh, you wanna chat?",
      talkText: [
         () =>
            SAVE.data.n.plot === 72
               ? [
                    "<32>{#p/napstablook}{#k/3}* oh, hey...",
                    "<32>{#k/0}* i think everybody dissappeared for a while...",
                    "<32>{#k/1}* but when they woke up, they all knew your name...",
                    "<32>{#k/3}* so... you're frisk, huh?",
                    "<32>{#k/4}* well, nice to see you, frisk"
                 ]
               : SAVE.data.b.a_state_napstadecline
               ? [ "<32>{#p/napstablook}{#k/2}* uh...", "<32>{#p/napstablook}{#k/2}* hey there..." ]
               : SAVE.data.n.state_wastelands_napstablook < 2
               ? [
                    [
                       "<32>{#p/napstablook}{#k/3}* oh, hey...",
                       "<32>{#p/napstablook}{#k/3}* oh, nice to see you again..."
                    ][SAVE.data.n.state_wastelands_napstablook],
                    ...(world.meanie
                       ? [ "<32>{#k/0}* what's that look for?\n* have i done something wrong..." ]
                       : [ "<32>{#k/4}* what have you been up to?" ])
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
                    "<32>{#p/napstablook}{#k/2}* you wanna know about ghosts?",
                    "<32>{#k/0}* well, the only ghosts i know are myself, my three cousins...",
                    "<32>{#k/3}* and the one behind you, of course",
                    "<32>{#k/1}* aside from that, there's not much to say",
                    "<32>{#k/0}* without a fused host body, we just sorta... exist",
                    "<32>{#k/0}* yeah, i know...\n* very interesting stuff..."
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
                    "<32>{#p/napstablook}{#k/3}* oh yeah... that...",
                    "<32>{#k/1}* well, one day, i found this box lying around...",
                    "<32>{#k/5}* when i opened it, i ended up in this mysterious place i haven't seen before...",
                    "<32>{#k/4}* now and then, i like to visit that place to relax",
                    "<32>{#k/3}* it's peaceful..."
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

                          ? [ "<32>{#k/2}* especially when it's right there in your ITEMs......" ]
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
                       [ "<32>{#k/0}* sorry for interrupting whatever you were doing with my cousin..." ],
                       [ "<32>{#k/0}* ...\n* have you seen my cousin?" ],
                       [ "<32>{#k/3}* i heard my cousin really likes you..." ],
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
                    "<32>{#p/napstablook}{#k/1}* yeah, i make music sometimes",
                    "<32>{#k/0}* people say it's great, but i know they're just lying to make me feel better...",
                    "<32>{#k/4}* thanks for coming to my little show, though...",
                    "<32>{#k/3}* seeing you made me happy..."
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
      exit: [ "<32>{#p/basic}{#k/11}* Bye now!\n* Come again sometime!" ],
      item: () =>
         world.population === 0 || world.runaway
            ? [
                 "0G - 超能手套？",
                 SAVE.data.b.item_eye ? "0G - 力場護盾？" : "0G - 力場護盾",
                 "0G - 渦旋棒棒糖",
                 "0G - 光彩漩渦",
                 "離開"
              ]
            : SAVE.data.n.plot === 72
            ? [
                 "10G - 超能手套？",
                 SAVE.data.b.item_eye ? "10G - 力場護盾？" : "20G - 力場護盾",
                 "8G - 渦旋棒棒糖",
                 "5G - 光彩漩渦",
                 "離開"
              ]
            : [
                 "30G - 超能手套？",
                 SAVE.data.b.item_eye ? "30G - 力場護盾？" : "40G - 力場護盾",
                 "28G - 渦旋棒棒糖",
                 "20G - 光彩漩渦",
                 "離開"
              ],
      itemInfo: () => [
         "武器：3攻擊\n(當前攻擊$(x))\n重拳出擊，\n仿製品。",
         SAVE.data.b.item_eye
            ? "防具：5防禦\n(當前防禦$(x))\n有力防禦，\n仿製品。"
            : "防具：7防禦\n(當前防禦$(x))\n有力防禦。",
         "回覆 11HP\n可改變\n主觀時間\n流速。",
         "回覆 22HP\n她的\n獨家配方。"
      ],
      itemPrompt: "<09>{#p/basic}{#k/0}What would you like to buy?",
      itemPurchase: [
         "<09>{#p/basic}{#k/4}Thanks for your purchase.",
         "<09>{#p/basic}{#k/7}Just looking?",
         "<09>{#p/basic}{#k/5}That's not enough money.",
         "<10>{#p/human}(You're carrying too much.)"
      ],
      itemPurchasePrompt: () => (world.population === 0 || world.runaway ? "Take it?" : "花$(x)G\n買它嗎？"),
      menu: () =>
         world.population === 0 || world.runaway
            ? [ "拿取", "偷竊", "閱讀", "離開" ]
            : [ "購買", world.meanie ? "偷竊" : "出售", "交談", "離開" ],
      menuPrompt1: "<23>{#p/basic}{#k/0}* Hello, traveler.\n* How can I help you?",
      menuPrompt2: "<23>{#p/basic}{#k/0}* Take your time.",
      menuPrompt3: () =>
         world.bulrun ? "<23>{#p/basic}* ...但是人們都逃走了。" : "<23>{#p/basic}* ...但是誰也沒有來。",
      note: () =>
         world.runaway
            ? [ "<32>{#p/basic}* 這裡有一張字條。", "<32>{#p/basic}* \"Please don't come after us.\"" ]
            : SAVE.data.n.plot === 72
            ? [ "<32>{#p/basic}* 這裡有一張字條。", "<33>{#p/basic}* \"I'm sorry I couldn't come back.\"" ]
            : [ "<32>{#p/basic}* 這裡有一張字條。", "<33>{#p/basic}* “請不要傷害我的家人。”" ],
      sell1: () =>
         world.population === 0 || world.runaway
            ? [ "<30>{#p/human}* （你從櫃檯後面拿走了758G。）" ]
            : world.meanie
            ? [
                 "<30>{#p/basic}{#k/1}* Huh?\n* Is this what we're resortin' to now?",
                 "<30>{#k/2}* If you want somethin', you'll have to buy it first.",
                 "<30>{#k/12}* No exceptions."
              ]
            : [
                 "<30>{#p/basic}{#k/6}* Huh?\n* Sell somethin'?\n* Does this look like a pawn shop?",
                 "<30>{#k/3}* I don't know how it works where you come from... but...",
                 "<30>* If I started spending money on old wrenches and used spacesuits, I'd be out of business in a jiffy!"
              ],
      sell2: () =>
         world.population === 0 || world.runaway
            ? [ "<30>{#p/basic}* 空無一物。" ]
            : world.meanie
            ? [ "<30>{#p/basic}{#k/8}* I don't know what your game is, but it's not going to work on me." ]
            : [
                 "<30>{#p/basic}{#k/8}* If you're really hurtin' for cash, then maybe you could do some crowdfunding.",
                 "<30>{#k/2}* I hear people will pay for ANYTHING nowadays."
              ],
      talk: () =>
         SAVE.data.n.plot === 72
            ? [ "哈拉", "What Happened", "外域", "The Future", "離開" ]
            : [ "哈拉", "What To Do Here", "Town History", "Your Life", "離開" ],
      talkPrompt: "<09>{#p/basic}{#k/0}Care to chat?",
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
                    "<32>{#p/basic}{#k/4}* Hiya! Welcome to Starton!\n* I can't remember the last time I saw a fresh face around here.",
                    "<32>{#k/8}* Where did you come from?\n* The Citadel?",
                    "<32>{#k/7}* You don't look like a tourist.\n* Are you here by yourself?"
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
                    "<32>{#p/basic}{#k/8}* You want to know what to do here in Starton?",
                    "<32>{#k/9}* Grillby's has food, and the librarby has information...",
                    "<32>{#k/2}* If you're tired, you can take a nap at the inn.\n* It's right nextdoor, my sister runs it.",
                    "<32>{#k/0}* And if you're bored, you can sit outside and watch those wacky skeletons do their thing.",
                    "<32>* There's two of 'em...\n* Brothers, I think.\n* They've been here for as long as I can remember.",
                    "<32>{#k/9}* Oh, I almost forgot.\n* Recently, a ghost fella decided to open a store on the south side of town.",
                    "<32>{#k/11}* It's not much, but if you drop by, be sure to say hello.\n* They could use the company."
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
                    "<32>{#p/basic}{#k/9}* Think back to your history class...",
                    "<32>{#k/0}* A long time ago, monsters lived in what we now call the Foundry.",
                    "<32>* After a while, we invented the technology to build new areas onto the outpost.",
                    "<32>* The first of those areas was Starton, and they figured it'd be a good place for a town.",
                    "<32>{#k/10}* It's quaint, but I kinda like that, you know?"
                 ],
         () =>
            SAVE.data.n.plot === 72
               ? [
                    "<32>{#p/basic}{#k/5}* Well, I suppose I'll move my store to the new homeworld...",
                    "<32>{#k/4}* ... haven't planned much more than that, I'm afraid."
                 ]
               : [
                    "<32>{#p/basic}* Life is the same as usual.",
                    "<32>{#k/5}* A little lonely...",
                    "<32>{#k/10}* But... we all know deep down that freedom is coming, don't we?",
                    "<32>{#k/9}* As long as we got that hope, we can grit our teeth and face the same struggles, day after day...",
                    "<32>{#k/0}* That's life, ain't it?"
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
               ? [ "<18>{#f/4}I SUSPECT THAT PLAYED A PART IN HIS VICTORIES." ]
               : [ "<18>{#f/4}IT'S PRACTICALLY A LAW OF NATURE AT THIS POINT." ])
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
               : [ "<18>{#p/papyrus}{#f/4}IT'S SOMEONE... RECTANGULAR." ]
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
               ? [ "<18>{#p/papyrus}I WONDER WHAT LIFE WOULD BE LIKE WITH A MOON IN ORBIT." ]
               : [ "<18>{#p/papyrus}DON'T YOU HAVE ANY HOPES AND DREAMS TO SHARE?" ]
      ),
      s_human: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}{#f/0}ABOUT THAT GRAND SPEECH OF MINE...",
            "<18>{#f/0}COINCIDENTALLY, I FIRST PRACTICED IT IN THIS VERY ROOM.",
            "<18>{#f/9}AND WITH SANS, NO LESS!",
            ...(solo()
               ? [ "<18>{#f/5}BUT WE ARGUED ABOUT WHICH WAY WE SHOULD STAND." ]
               : [
                    "<25>{#p/undyne}{#f/14}* I'm sure you had no arguments whatsoever.",
                    "<18>{#p/papyrus}{#f/0}OH, ON THE CONTRARY.",
                    "<18>{#f/0}WE ARGUED CONSTANTLY WITH EACH OTHER!"
                 ]),
            "<18>{#f/4}I'D ROTATE ONE WAY, AND SAY THAT WAS BETTER...",
            "<18>{#f/4}THEN HE'D TURN, AND SAY HIS WAY WAS BEST.",
            "<18>{#f/6}AS WE ARGUED, WE EACH ROTATED FASTER AND FASTER.",
            ...(solo()
               ? [ "<18>{#f/0}IT'S SINCE BECOME A RITUAL FOR US." ]
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
               ? [ "<18>{#f/0}I PLAN TO BUILD MORE WHEN I JOIN THE ROYAL GUARD." ]
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
               : [ "<18>{#p/papyrus}THANK YOU, HUMAN...", "<18>FOR BEING MY ALMOST-PERFECT FRIEND." ]
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
               ? [ "<18>{#p/papyrus}{#f/0}KINDNESS REALLY -IS- A VIRTUE!" ]
               : [ "<18>{#p/papyrus}{#f/9}NO DOG LEAVES THE ROYAL GUARD UNDER MY WATCH!" ]
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
               ? [ "<18>{#p/papyrus}{#f/5}YOU NEVER KNOW HOW LONG THEY'VE BEEN ALONE!!" ]
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
                       ? [ "<18>{#f/0}WE AGREED THAT IT WOULDN'T WORK OUT, REMEMBER?" ]
                       : [
                            "<18>{#f/0}WE'RE ALREADY VERY COOL FRIENDS!",
                            "<18>{#f/5}AND IF I MARRIED YOU, WELL...",
                            "<18>{#f/6}I WOULDN'T GET TO HAVE YOU AS A FRIEND ANYMORE!"
                         ])
                 ]
               : [ "<18>{#p/papyrus}{#f/4}SUCH A PAIRING WOULD BE... TOO POWERFUL." ]
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
               ? [ "<18>{#f/7}IT'S RIDICULOUS!" ]
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
               ? [ "<18>{#p/papyrus}{#f/0}IF ONLY THERE WAS A WAY TO TURN IT OFF." ]
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
               ? [ "<18>{#f/4}... DEFINITELY DON'T DO THIS IF YOU'RE TOO SMALL." ]
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
               ? [ "<18>{#p/papyrus}{#f/4}I'M SOLVING IT AS WE SPEAK..." ]
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
               ? [ "<18>{#p/papyrus}{#f/4}WAIT, THAT'S MY BROTHER'S LINE..." ]
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
                    "<18>{#p/papyrus}{#f/4}OH.",
                    "<18>{#p/papyrus}{#f/7}... SO YOU WERE SPYING ON THE HUMAN!?!?",
                    "<25>{#p/undyne}{#f/17}* I'm the captain of the Royal Guard!!\n* What do you think!"
                 ])
         ],
         () =>
            solo()
               ? [ "<18>{#p/papyrus}LUCK IS ON OUR SIDE TODAY, HUMAN!" ]
               : [ "<18>{#p/papyrus}JOKE OR NOT, IT WAS STILL PRETTY LUCKY, HUH?" ]
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
               ? [ "<18>{#p/papyrus}{#f/4}PERHAPS US MORTALS ARE NOT WORTHY OF SUCH KNOWLEDGE." ]
               : [ "<25>{#p/undyne}{#f/12}* Just call me \"pundyne.\"", "<18>{#p/papyrus}{#f/0}PLEASE DON'T." ]
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
               ? [ "<18>{#p/papyrus}{#f/4}..." ]
               : [
                    "<25>{#p/undyne}{#f/12}* ... it can't be that bad, right?",
                    "<18>{#p/papyrus}{#f/5}TRUST ME.",
                    "<18>{#f/4}IT WAS PRETTY BAD.",
                    "<25>{#p/undyne}{#f/11}* ... if you say so..."
                 ],
         () => (solo() ? [ "<18>{#p/papyrus}{#f/4}..." ] : [ "<25>{#p/undyne}{#f/7}* He said not to talk about it!!" ])
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
               ? [ "<18>{#p/papyrus}{#f/5}IT'S TOO BAD I MIGHT NEVER BE A ROYAL GUARD." ]
               : [ "<18>{#p/papyrus}{#f/7}NOTHING WILL EVER REPLACE FACE-TO- FACE CONVERSATION!" ]
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
               ? [ "<18>{#f/5}..." ]
               : [
                    "<25>{#p/undyne}{#f/12}* What about the one that'd leave you speechless?",
                    "<18>{#p/papyrus}{#f/0}THAT'S THE ULTRA- SECRET EIGHTH WEAPON, ACTUALLY.",
                    "<25>{#p/undyne}{#f/1}* Ooh.\n* Sounds dangerous.",
                    "<18>{#p/papyrus}{#f/6}WHY DO YOU THINK I DIDN'T USE IT!?"
                 ])
         ],
         () =>
            solo()
               ? [ "<18>{#p/papyrus}{#f/6}... LITERALLY!!" ]
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
               ? [ "<18>{#f/4}... WELL, YOU CAN PROBABLY GUESS WHY HE DOES." ]
               : [
                    "<25>{#p/undyne}{#f/14}* ... enjoys the new and improved food they're selling at Grillby's!",
                    "<18>{#p/papyrus}{#f/4}NEW AND IMPROVED, YOU SAY?",
                    "<18>{#f/5}I SUPPOSE IT -IS- BETTER THAN BEFORE...",
                    "<18>{#f/7}BUT STILL NOTHING COMPARED TO HOME- COOKED PASTA!"
                 ])
         ],
         () =>
            solo()
               ? [ "<18>{#p/papyrus}{#f/0}IT HAS SOMETHING TO DO WITH GRILLBY'S." ]
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
               ? [ "<18>{#f/4}... I'LL GET BACK TO YOU ON THAT." ]
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
               ? [ "<18>{#p/papyrus}{#f/6}EVENTUALLY!!!" ]
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
               ? [ "<18>{#p/papyrus}{#f/4}THEY'LL HAVE TO PUT IT IN A MUSEUM SOMEDAY..." ]
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
               ? [ "<18>{#p/papyrus}{#f/6}DID I MENTION THE DARKNESS THAT AWAITS YOU?" ]
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
            ...(solo() ? [] : [ "<25>{#p/undyne}{#f/1}* Mine's track four!" ])
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
               ? [ "<18>{#p/papyrus}{#f/4}SOME \"KITCHEN...\"", "<18>{#f/5}NOW THEY JUST USE IT FOR PRIVATE CARD GAMES." ]
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
               ? [ "<18>{#p/papyrus}{#f/6}HOLD UP!\nI'M STILL DRAWING!" ]
               : SAVE.data.n.plot_date < 1.2
               ? [ "<18>{#p/papyrus}{#f/1}DO -I- KNOW WHO PAPYRUS IS!?!?" ]
               : [
                    ...(solo()
                       ? [
                            "<18>{#p/papyrus}{#f/6}HEY, UH, WHILE YOU'RE THERE...",
                            "<18>{#f/6}WOULD YOU MIND LOOKING AFTER MY ACTION FIGURES??",
                            "<18>{#f/5}THEY'VE BEEN... FEELING KIND OF LONELY LATELY.",
                            "<18>{#f/5}... THANKS."
                         ]
                       : [ "<25>{#p/undyne}{#f/8}* Especially when they're on fire!!!" ])
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
               ? [ "<18>{#p/papyrus}{#f/5}IF ONLY WE COULD TRAVEL BACK IN TIME..." ]
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
            ...(solo() ? [] : [ "<25>{|}{#p/undyne}{#f/8}* YEAHHHH MAKE SOME NOI- {%}" ])
         ],
         () =>
            solo()
               ? [ "<18>{#p/papyrus}{#f/4}(REALLY...)" ]
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
               ? [ "<18>{#f/6}UNLIKE ME!!" ]
               : [
                    "<25>{#p/undyne}{#f/1}* I hope they don't mind me using the pipes as a jungle gym.",
                    "<25>{#f/8}* I used to swing on them all the time!",
                    "<18>{#p/papyrus}{#f/6}UNDYNE, NO!\nTHOSE POOR, POOR PIPE DWELLERS!"
                 ])
         ],
         () =>
            solo()
               ? [ "<18>{#p/papyrus}{#f/0}I PREFER THE SANITARY SIDE OF LIVING." ]
               : [ "<18>{#p/papyrus}{#f/6}BE CAREFUL WHERE YOU JUNGLE GYM." ]
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
               ? [ "<18>{#p/papyrus}{#f/5}WE WAKEFUL FOLK COULD ONLY DREAM OF SUCH SLOTH..." ]
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
               ? [ "<25>{#p/undyne}{#f/17}* ...", "<25>{#p/undyne}{#f/14}* ... yeah, you're right." ]
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
               ? [ "<18>{#p/papyrus}{#f/4}... AT LEAST TELL ME IT'S NOT \"DOG RESIDUE.\"" ]
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
               ? [ "<18>{#p/papyrus}{#f/4}IF ONLY THE DOG UNDER MY SINK HAD SUCH PRIORITIES..." ]
               : [ "<18>{#p/papyrus}{#f/0}WHEN IN DOUBT, JUST TALK IT OUT.", "<18>{#p/papyrus}{#f/9}WORKS EVERY TIME!" ]
      ),
      f_puzzle1: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}{#f/0}WATCH OUT FOR THE ANCIENT HUMAN PYLON PUZZLES!",
            "<18>{#f/4}THOUGH RUDIMENTARY IN THEIR METHOD OF CONSTRUCTION...",
            "<18>{#f/6}THEIR DESIGN IS NOTHING SHORT OF PERPLEXING!",
            ...(solo()
               ? [ "<18>{#f/5}IT'S A WONDER WE MONSTERS CAN SOLVE THEM AT ALL." ]
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
               ? [ "<18>{#p/papyrus}{#f/0}I WONDER IF HUMANS STRUGGLE WITH MONSTER PUZZLES." ]
               : [ "<18>{#p/papyrus}{#f/0}HEH! NOT ALL HUMANS ARE BAD!" ]
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
         [ "<18>{#p/papyrus}{#f/6}I'LL GET BACK TO YOU WITH THE ANSWER SOON!" ]
      ),
      f_puzzle2: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}{#f/0}MORE OFTEN THAN NOT, A PUZZLE MAY BE UNSOLVABLE...",
            "<18>{#f/5}IF YOU DON'T TAKE THE TIME TO READ THE SIGNS.",
            "<18>{#f/6}YOU'D THINK INTUITION WOULD BE ENOUGH, BUT... NO!",
            ...(solo()
               ? [ "<18>{#f/5}... I'VE BEEN EMBARRASSED THIS WAY MANY TIMES..." ]
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
         [ "<18>{#p/papyrus}{#f/4}THIS PHONE CALL -PROBABLY- WON'T BE RECORDED." ]
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
               ? [ "<18>{#p/papyrus}{#f/5}I FIND IT BEST TO STEER CLEAR OF SCARY MAZE GAMES." ]
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
               ? [ "<18>{#p/papyrus}{#f/4}SPOILER ALERT...", "<18>{#p/papyrus}{#f/4}... IT'S VERY DARK INSIDE." ]
               : [ "<18>{#p/papyrus}{#f/0}AREN'T THINGS BETTER WHEN YOU UNDERSTAND THEM?" ]
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
               ? [ "<18>{#p/papyrus}{#f/5}REALLY, THOUGH.\nWHAT'S WITH THAT THING, ANYWAY?" ]
               : [ "<18>{#p/papyrus}{#f/4}IT'S ENCOURAGING UNDYNE TO MAKE CHEESE PUNS." ]
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
               ? [ "<19>{#p/papyrus}{#f/5}HALFWAY OVER..." ]
               : [ "<19>{#p/papyrus}{#f/9}HERE'S TO THE LONG JOURNEY AHEAD!" ]
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
         [ "<18>{#p/papyrus}{#f/4}LEAVE IT TO A PRANKSTER TO MAKE THINGS TRICKY..." ]
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
               ? [ "<18>{#f/4}... NOT LIKE WE HAVE ANY OTHER WAY TO CROSS THE GAP." ]
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
               ? [ "<18>{#p/papyrus}{#f/6}I'M DEFINITELY NOT BEING SARCASTIC!!" ]
               : [ "<19>{#p/papyrus}{#f/4}SARCASM TRAINING'S -TOTALLY- THE EASIEST THING EVER." ]
      ),
      f_muffet: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}{#f/5}I WAS SURFING THE WEB THE OTHER DAY...",
            "<18>{#f/6}TURNS OUT SPIDER SILK IS STRONGER THAN YOU'D THINK!",
            "<18>{#f/4}WHICH WEB WAS I SURFING, YOU ASK?",
            ...(solo()
               ? [ "<18>{#f/4}... YOU PROBABLY DON'T WANT TO KNOW." ]
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
               ? [ "<18>{#p/papyrus}{#f/4}IT WASN'T ON THE COMPUTER, THAT'S FOR SURE." ]
               : [ "<18>{#p/papyrus}{#f/4}PERHAPS I SHOULD GET A ROBOT TO CRAWL THE WEB..." ]
      ),
      f_shyren: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}{#f/5}I'VE HEARD A VERY SHY MONSTER LIVES HERE...",
            "<18>{#f/0}WELL. IF YOU WANT SOMEONE TO OPEN UP...",
            "<18>{#f/9}YOU SHOULD ENGAGE THEM IN COMBAT!",
            ...(solo()
               ? [ "<18>{#f/0}A SOUND STRATEGY FOR ANY OCCASION." ]
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
         () => [ "<18>{#p/papyrus}{#f/0}HUM HUM HUM...", ...(solo() ? [] : [ "<25>{#p/undyne}{#f/12}* Hum hum hum..." ]) ]
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
               ? [ "<18>{#f/0}... OH WAIT!\nTHAT'S THIS ROOM!" ]
               : [
                    "<25>{#p/undyne}{#f/10}* And maybe that piano would be used to solve puzzles...",
                    "<25>{#p/undyne}{#f/10}* Or practice combat by fighting the ivories...",
                    "<25>{#p/undyne}{#f/10}* Or play a certain melody that reminds you of someone special...",
                    "<25>{#p/undyne}{#f/7}* ... if only you were in that room RIGHT NOW!!",
                    "<18>{#p/papyrus}{#f/6}I WAS GOING TO MENTION THAT!!"
                 ])
         ],
         [ "<18>{#p/papyrus}NEXT TIME I COME HERE, I SHOULD WRITE A MUSICAL.", "<18>IT'D BE CALLED \"STORY OF PAPYRUS.\"" ]
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
               ? [ "<18>{#p/papyrus}{#f/6}NO SPOILERS!!!" ]
               : [ "<18>{#p/papyrus}{#f/4}AND THAT'S NOT EVEN HIS MOST IMPRESSIVE FEAT." ]
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
               ? [ "<18>{#p/papyrus}{#f/6}ENJOY THE VIEW WHILE YOU STILL CAN!" ]
               : [ "<18>{#p/papyrus}{#f/6}JUST BE CAREFUL!" ]
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
               ? [ "<18>{#p/papyrus}{#f/5}PERHAPS YOU COULD CALL BACK SOMEWHERE ELSE?" ]
               : [ "<18>{#p/papyrus}{#f/4}SO THERE -WAS- SOMETHING TO SAY HERE..." ]
      ),
      f_tunnel: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}{#f/0}AH... THE TRASH DEPOSITORY.",
            "<18>{#f/0}A GREAT PLACE TO DISPOSE OF UNDESIRABLE ITEMS.",
            "<18>{#f/4}OR, ALTERNATIVELY...",
            "<18>{#f/9}A GREAT PLACE TO FIND TREASURE AT NO PERSONAL COST!",
            ...(solo()
               ? [ "<18>{#f/0}I COME HERE WITH SANS SOMETIMES TO DO THAT." ]
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
               : [ "<18>{#p/papyrus}{#f/6}PERHAPS IT'D BE BEST FOR YOU TO LEAVE THIS ROOM." ]
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
         [ "<18>{#p/papyrus}{#f/5}ONE DAY, HUMAN...", "<18>{#p/papyrus}{#f/5}ONE DAY, I SHALL PROVE MY THEORIES RIGHT." ]
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
         [ "<18>{#p/papyrus}{#f/4}DO -YOU- KNOW HOW TO SOLVE THIS RIDDLE?" ]
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
               ? [ "<18>{#p/papyrus}{#f/5}IT'S YET ANOTHER DREAM OF MINE..." ]
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
               ? [ "<18>{#f/9}THE IDEAL PLACE TO LEARN HOW TO COOK!" ]
               : SAVE.data.n.plot_date < 1.3
               ? [ "<18>{#f/4}YOU KNOW, THE ONE WITH THE SKELETON IN FRONT." ]
               : SAVE.data.n.plot_date < 2
               ? [ "<18>{#f/9}DON'T HESITATE TO COME IN!" ]
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
               ? [ "<18>{#p/papyrus}{#f/0}NICE TO SEE YOU, TOO!" ]
               : SAVE.data.n.plot_date < 2
               ? [ "<18>{#p/papyrus}{#f/4}WE'RE STILL WAITING HERE, YOU KNOW..." ]
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
               ? [ "<18>{#p/papyrus}{#f/5}I SUPPOSE TOO MUCH COULD BE OVERWHELMING..." ]
               : [ "<18>{#p/papyrus}{#f/6}I'LL GET BACK TO YOU WHEN I'M DONE PROCESSING!!!" ]
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
               ? [ "<18>{#f/5}IT'S UNFORTUNATE THEY NEVER THOUGHT OF THOSE THINGS." ]
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
         [ "<18>{#p/papyrus}{#f/0}AT LEAST -I- WAS ABLE TO THINK OF THOSE THINGS!!" ]
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
                  ? [ "<18>{#p/papyrus}{#f/6}I KNOW, RIGHT!?\nSO UNFAIR!!" ]
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
               ? [ "<18>{#p/papyrus}{#f/5}EVEN IF I DID MAKE MYSELF AN EASY TARGET." ]
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
               : [ "<18>{#p/papyrus}{#f/4}WHY DO WE EVEN BOTHER ARGUING SOMETIMES..." ]
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
               ? [ "<18>{#p/papyrus}{#f/0}MUCH LIKE WHAT I JUST SAID." ]
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
               ? [ "<18>{#p/papyrus}{#f/4}DID I NOT MENTION THE POLKA-DOTS?" ]
               : [ "<18>{#p/papyrus}{#f/4}IT'S A CONSPIRACY SPANNING THE WHOLE OF THE COSMOS..." ]
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
               ? [ "<18>{#p/papyrus}{#f/9}YOU CAN DO IT!!\nI BELIEVE IN YOU!" ]
               : SAVE.data.b.f_state_kidd_betray
               ? [ "<18>{#p/papyrus}{#f/6}PERHAPS YOU SHOULD CALL BACK SOMEWHERE ELSE." ]
               : [ "<18>{#p/papyrus}{#f/0}I APPRECATE YOU BEING SUCH A SWIFT RESCUER OF KIDS." ]
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
               ? [ "<18>{#p/papyrus}{#f/5}I SWEAR I'M JUST REPEATING MYSELF SOMETIMES." ]
               : [ "<18>{#p/papyrus}{#f/5}SOMETIMES I WONDER IF WE'RE ALL JUST GOING IN CIRCLES." ]
      ),
      f_pacing: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}{#f/0}THERE'S GENUINELY NOTHING TO SAY ABOUT THIS ROOM.",
            "<18>{#f/4}ITS EXISTENCE ONLY SERVES TO MAKE YOU WALK FURTHER.",
            "<18>{#f/5}TO MAKE EVERY STEP TOWARDS THE EXIT...",
            "<18>{#f/4}FULL OF UTTER, UNENDING SUSPENSE.",
            ...(solo() ? [] : [ "<25>{#p/undyne}{#f/14}* That about sums it up." ])
         ],
         [ "<18>{#p/papyrus}{#f/7}UTTER!\nUNENDING!!\nSUSPENSE!!!" ]
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
               ? [ "<18>{#p/papyrus}{#f/0}I THINK IT'S SOMETHING SHE HAS TO MEMORIZE." ]
               : [ "<18>{#p/papyrus}{#f/9}FOR THE RECORD, I LOVE A GOOD PRE- PLANNED SPEECH!!" ]
      ),
      f_exit: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}THIS FLUID TANK WAS SPECIFICALLY PUT HERE...",
            "<18>{#f/0}BECAUSE A CERTAIN ROYAL GUARD CAPTAIN...",
            "<18>{#f/4}THINKS IT'S SAFE TO TAKE HER GIANT JETPACK...",
            "<18>{#f/5}INTO AN AREA RIFE WITH STATIC ELECTRICITY.",
            ...(solo()
               ? [ "<18>{#f/6}... ABSORBING IT ALL WOULD BE VERY, VERY DANGEROUS!!" ]
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
               : [ "<18>{#p/papyrus}{#f/5}I WORRY FOR UNDYNE'S SAFETY." ]
      ),
      f_napstablook: pager.create(
         0,
         () =>
            SAVE.data.n.plot <= 48.1 && SAVE.data.n.state_foundry_blookdate < 2
               ? [
                    "<18>{#p/papyrus}{#f/0}SO YOU'RE MAKING FRIENDS WITH A GHOST.",
                    "<18>{#p/papyrus}{#f/1}IS THERE NOTHING BEYOND YOUR GRASP OF FRIENDSHIP!?!?",
                    ...(solo()
                       ? [ "<18>{#p/papyrus}{#f/6}YOUR POWER LEVEL IS ALMOST FRIGHTENING!!" ]
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
                  ? [ "<18>{#p/papyrus}{#f/5}JUST WATCH OUT FOR THE ECTOPLASM." ]
                  : [
                       "<18>{#p/papyrus}{#f/5}AT LEAST SHE'S LEARNED HER LESSON BY NOW...",
                       "<25>{#p/undyne}{#f/14}* Yeah... totally!"
                    ]
               : solo()
               ? [ "<18>{#p/papyrus}{#f/9}THAT GHOST HAS LOADS OF MUSIC ON THEIR STEREO!" ]
               : [ "<18>{#p/papyrus}{#f/0}BOSSY MUSIC FOR A BOSSY FISH LADY.", "<25>{#p/undyne}{#f/8}* Pretty much!!" ]
      ),
      f_hapstablook: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}{#f/6}HUH?\nWHERE ARE YOU?",
            "<18>{#p/papyrus}{#f/5}I'VE... NEVER BEEN IN HERE BEFORE.",
            ...(solo()
               ? [ "<18>{#p/papyrus}{#f/5}NOR HAVE I... SEEN ANYONE ELSE HERE, EITHER." ]
               : [
                    "<25>{#p/undyne}{#f/14}* ... yeah, that house has been abandoned for a long time.",
                    "<25>{#p/undyne}{#f/17}* Since before I was born, in fact!",
                    "<18>{#p/papyrus}{#f/6}HOW STRANGE!!"
                 ])
         ],
         () =>
            solo()
               ? [ "<18>{#p/papyrus}{#f/5}TO BE HONEST, I'M NOT SURE I WANT TO KNOW WHY..." ]
               : [ "<18>{#p/papyrus}{#f/5}TIME REALLY DOES FLY BY, HUH?", "<25>{#p/undyne}{#f/14}* That it does!" ]
      ),
      a_start: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}{#f/0}SO YOU'RE IN AERIALIS NOW, HUH?",
            "<18>{#p/papyrus}{#f/0}GUESS I'M NOT THE ONLY ONE WHO LIKES DECORATIVE SPIRES.",
            "<18>{#p/papyrus}{#f/4}EXCEPT... THEY'RE NOT JUST DECORATIVE.",
            "<18>{#p/papyrus}{#f/4}HUNDREDS OF PEOPLE LIVE THERE.",
            ...(solo()
               ? [ "<18>{#p/papyrus}{#f/0}STILL, DOESN'T STOP THEM FROM BEING DECORATIVE!" ]
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
               ? [ "<18>{#p/papyrus}{#f/0}THE ONE IN THE MIDDLE IS MY FAVORITE." ]
               : [ "<18>{#p/papyrus}{#f/5}THE VIEW FROM A SPIRE HOUSE MUST BE BREATHTAKING..." ]
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
               ? [ "<18>{#p/papyrus}{#f/4}SHE DOES HAVE A HABIT OF SPOILING THINGS, THOUGH." ]
               : [ "<25>{#p/undyne}{#f/8}* I'll tell you later!!!", "<18>{#p/papyrus}{#f/6}I KNOW!!!" ]
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
               ? [ "<18>{#p/papyrus}{#f/6}IT'S A SHAME MORE PEOPLE DON'T TAKE AN INTEREST!" ]
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
               ? [ "<18>{#p/papyrus}{#f/5}I DON'T KNOW WHAT IT MEANS." ]
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
               ? [ "<18>{#p/papyrus}{#f/0}MAYBE I'LL SETTLE FOR THE RED SODA ON THE TABLE." ]
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
            ...(solo() ? [] : [ "<25>{#p/undyne}{#f/14}* ... that checks out." ])
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
               ? [ "<18>{#p/papyrus}{#f/8}I WOULDN'T EVEN HAVE MY SPECIAL ATTACK!" ]
               : [ "<18>{#p/papyrus}{#f/6}DON'T WORRY, I'LL START LEARNING RIGHT AWAY!" ]
      ),
      a_rg1: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}{#f/0}IT'S INCREDIBLE HOW THE GUARDS AND TRAINEES HERE...",
            "<18>{#f/4}NEVER SEEM TO GET LOST.",
            "<18>{#f/5}ESPECIALLY WITH THE LACK OF...",
            "<18>{#f/6}... WELL, ANYTHING!!",
            ...(solo()
               ? [ "<18>{#f/7}ALL THE ROOMS LOOK EXACTLY THE SAME!" ]
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
               ? [ "<18>{#p/papyrus}{#f/4}I WONDER HOW -YOU- NEVER SEEM TO GET LOST..." ]
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
               ? [ "<18>{#p/papyrus}{#f/6}DO YOU KNOW OF SUCH A PLACE??" ]
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
               ? [ "<18>{#p/papyrus}{#f/4}I'LL TAKE THAT AS A RESOUNDING \"MAYBE.\"" ]
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
               ? [ "<18>{#p/papyrus}{#f/4}IT -HAS- BEEN A WHILE SINCE HE'S DONE ONE." ]
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
               ? [ "<18>{#p/papyrus}{#f/5}... OVER, AND OVER..." ]
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
               ? [ "<18>{#p/papyrus}{#f/4}I HAVE -ZERO- INTENTION OF EVER DOING ONE AGAIN." ]
               : [ "<18>{#p/papyrus}{#f/4}THESE DIMENSIONAL TECHNOLOGIES ARE A REAL PROBLEM." ]
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
               ? [ "<18>{#p/papyrus}{#f/4}AND NO HOWEVERS, EITHER." ]
               : [ "<18>{#p/papyrus}{#f/4}DON'T EVEN GET ME STARTED ON \"PERHAPSES.\"" ]
      ),
      a_elevator1: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}{#f/5}SO MANY ELEVATORS, SO LITTLE TIME...",
            "<18>{#f/4}EXCEPT FOR WHEN THEY'RE NOT WORKING.",
            "<18>{#f/6}I HAD TO WALK AROUND ON FOOT YESTERDAY!!",
            ...(solo()
               ? [ "<18>{#f/5}IF ONLY I KNEW WHY SOMEONE WOULD WANT THEM OFF..." ]
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
               ? [ "<18>{#p/papyrus}{#f/5}IT'S A CONSPIRACY ON SO MANY LEVELS." ]
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
               ? [ "<18>{#p/papyrus}{#f/4}I MAY OR MAY NOT HAVE USED IT ONE TOO MANY TIMES." ]
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
               ? [ "<18>{#p/papyrus}{#f/5}... WAIT, ISN'T THAT WHAT'S ON THE FIRST FLOOR?" ]
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
               ? [ "<18>{#f/7}SERIOUSLY!?\nI'D NEVER SELL OUT TO THE MAFIA!!" ]
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
               ? [ "<18>{#p/papyrus}{#f/6}... WHAT COULD THIS MEAN!?" ]
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
         [ "<18>{#p/papyrus}{#f/4}I MIGHT AS WELL BE THE \"CAO\" AROUND HERE..." ]
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
               ? [ "<18>{#p/papyrus}{#f/6}NUMBERS, NUMBERS EVERYWHERE!!", "<18>{#f/6}WHAT DOES IT ALL MEAN!?!?" ]
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
                  ? [ "<18>{#p/papyrus}{#f/0}FORTUNATELY, I HAVE A REPLACEMENT ARRANGED." ]
                  : SAVE.data.b.undyne_respecc
                  ? [ "<18>{#p/papyrus}{#f/0}THANKFULLY, UNDYNE WAS THERE TO TAKE MY PLACE." ]
                  : [ "<18>{#p/papyrus}{#f/0}THANKFULLY, MY BROTHER WAS THERE TO TAKE MY PLACE." ]
               : [ "<25>{#p/undyne}{#f/12}* Papyrus is too busy daydreaming to pick up the phone right now." ]
      ),
      a_rg2: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}{#f/6}BE CAREFUL OUT THERE, HUMAN!",
            "<18>{#p/papyrus}{#f/5}THE GUARDS IN THAT AREA ARE FRESH OUT OF TRAINING.",
            "<18>{#p/papyrus}{#f/6}WHO KNOWS WHICH ROYAL MEMOS THEY'LL IGNORE!",
            ...(solo()
               ? [ "<18>{#p/papyrus}{#f/0}BY THE WAY, WHAT'S A ROYAL MEMO?" ]
               : [
                    "<25>{#p/undyne}{#f/16}* Tell me about it...",
                    "<18>{#p/papyrus}{#f/5}HUH?\nDO THEY IGNORE YOUR MEMOS OFTEN?",
                    "<25>{#p/undyne}{#f/14}* Oh, they follow mine just fine.",
                    "<25>{#p/undyne}{#f/10}* It's Alphys's memos they tend to ignore.",
                    "<18>{#p/papyrus}{#f/6}BUT SHE'S THE ROYAL SCIENTIST!",
                    "<18>{#p/papyrus}{#f/6}THE KING'S MOST TRUSTED ASSOCIATE!",
                    "<25>{#p/undyne}{#f/12}* Yeah... that's how things are supposed to work.",
                    "<25>{#f/16}* But after Professor Roman died, we weren't ready to replace him.",
                    "<25>{#f/10}* Most in the royal guard don't take his successor seriously, so...",
                    "<25>{#f/9}* That impacts how the trainees see her, too.",
                    "<18>{#p/papyrus}{#f/5}OH...",
                    "<25>{#p/undyne}{#f/17}* I know.\n* It's... not great.",
                    "<26>{#f/9}* But she's unweildy, and she's still got lots to prove out there.",
                    "<26>{#f/16}* So... I kind of get it.",
                    "<18>{#p/papyrus}{#f/5}HOPEFULLY THEY'LL COME TO RESPECT HER IN TIME.",
                    "<26>{#f/14}* Hopefully."
                 ])
         ],
         () =>
            solo()
               ? [ "<18>{#p/papyrus}{#f/0}I WONDER HOW IT'S DIFFERENT FROM A NORMAL MEMO." ]
               : [ "<18>{#p/papyrus}{#f/4}HOPEFULLY, IT HAPPENS SOONER RATHER THAN LATER." ]
      ),
      a_barricade2: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}{#f/0}I'M AFRAID I DON'T HAVE MUCH TO SAY ABOUT THIS ROOM.",
            "<18>{#p/papyrus}{#f/5}IN FACT, THE ONLY THING I DO HAVE TO SAY...",
            "<18>{#p/papyrus}{#f/6}... IS THAT I -HAVE- NOTHING TO SAY!",
            ...(solo()
               ? [ "<18>{#p/papyrus}{#f/0}SO, ACTUALLY, I HAD SOMETHING TO SAY AFTER ALL." ]
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
               ? [ "<18>{#p/papyrus}{#f/0}PERHAPS I'D HAVE MORE TO SAY IN ANOTHER SITUATION." ]
               : [ "<18>{#p/papyrus}{#f/0}PERHAPS THIS ROOM JUST ISN'T VERY INTERESTING." ]
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
               ? [ "<18>{#p/papyrus}{#f/4}MY BROTHER TELLS ME THAT'S NOT ENTIRELY TRUE." ]
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
               ? [ "<18>{#p/papyrus}{#f/4}DID MY MESSAGE NOT GET THROUGH THE FIRST TIME?" ]
               : [ "<25>{#p/undyne}{#f/14}* I wouldn't worry about a thing." ]
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
               ? [ "<18>{#p/papyrus}{#f/6}IT'S A LONG STORY." ]
               : [ "<18>{#p/papyrus}{#f/0}PERHAPS IT'S NOT SUCH A BAD STORY AFTER ALL." ]
      ),
      a_auditorium: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}{#f/0}MY BROTHER ONCE HOSTED A COMEDY SHOW HERE.",
            "<18>{#p/papyrus}{#f/4}IT WAS CALLED...",
            "<18>{#p/papyrus}{#f/4}... THE RIB-TICKLER.",
            "<18>{#p/papyrus}{#f/5}DESPITE THE TITLE, IT WASN'T A COMPLETE FAILURE.",
            ...(solo()
               ? [ "<18>{#p/papyrus}{#f/0}IN FACT, IT DID PRETTY WELL!!" ]
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
               ? [ "<18>{#p/papyrus}{#f/0}I'M AS SURPRISED AS YOU ARE." ]
               : [ "<18>{#p/papyrus}{#f/0}THERE ARE THINGS I PROBABLY SHOULDN'T MENTION RIGHT NOW." ]
      ),
      a_aftershow: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}{#f/0}SO THIS IS WHERE BRATTY AND CATTY WORK, HUH?",
            "<18>{#f/0}IT'S CLEANER THAN I EXPECTED.",
            "<18>{#f/4}AREN'T THESE TWO SUPPOSED TO BE TRASH DEALERS...?",
            ...(solo()
               ? [ "<18>{#p/papyrus}{#f/5}... PERHAPS THE TRASH IS JUST VERY WELL ORGANIZED." ]
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
               : [ "<18>{#p/papyrus}{#f/0}I WONDER IF HUMANS WOULD LIKE HUNTING FOR MONSTER TRASH." ]
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
               ? [ "<18>{#p/papyrus}{#f/4}NOT TO MENTION, THE RECEPTION IS WAY BETTER THERE." ]
               : [ "<18>{#p/papyrus}{#f/0}PAPYRUS THE POET.", "<18>{#f/5}WELL, IT DOES HAVE A RING TO IT..." ]
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
               : [ "<18>{#p/papyrus}{#f/4}MAYBE I SHOULD HAVE BEEN THE ONE COOKING." ]
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
               ? [ "<18>{#p/papyrus}{#f/4}PERHAPS IT'S MORE LIKE A BOX OF CHOCOLATES." ]
               : [ "<18>{#p/papyrus}{#f/0}CHOCOLATE AND TREE SAP TASTES VERY SIMILAR, ACTUALLY." ]
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
               : [ "<18>{#p/papyrus}{#f/5}MY APOLOGIES.", "<18>{#f/4}I DIDN'T MEAN TO VENT." ]
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
               ? [ "<18>{#p/papyrus}{#f/0}ISN'T TECHNOLOGY WONDERFUL?" ]
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
               ? [ "<18>{#p/papyrus}{#f/6}ONCE YOU EARN HIS RESPECT, OF COURSE." ]
               : [ "<18>{#p/papyrus}{#f/4}THAT ROBOT AND I HAVE... A LOT TO DISCUSS." ]
      ),
      a_elevator5: pager.create(
         0,
         () => [
            "<18>{#p/papyrus}{#f/4}THIS \"REC CENTER\" IS CERTIANLY RECREATIONAL...",
            "<18>{#p/papyrus}{#f/5}... IN MORE WAYS THAN ONE.",
            "<18>{#p/papyrus}{#f/6}WHAT'S SO AMAZING ABOUT WISH FLOWERS, ANYWAY?",
            "<18>{#p/papyrus}{#f/4}DOES THEIR AURA MAKE ALL YOUR WISHES COME TRUE?",
            ...(solo()
               ? [ "<18>{#p/papyrus}{#f/0}HMM... MAYBE I SHOULD TRY IT SOMETIME." ]
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
            ...(solo() ? [] : [ "<25>{#p/undyne}{#f/12}* Pfft, yeah..." ])
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
               : [ "<25>{#p/undyne}{#f/8}* Wanna talk?\n* We're right here, punk!" ],
         () =>
            solo()
               ? [
                    "<18>{#p/papyrus}{#f/4}MAYBE, AFTER WE HANG OUT WITH HER...",
                    "<18>{#p/papyrus}{#f/0}WE COULD ALL COME HERE TOGETHER!"
                 ]
               : [ "<25>{#p/undyne}{#f/8}* Wanna talk?\n* We're right here, punk!" ]
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
               : [ "<18>{#p/papyrus}{#f/4}IT'S A MIRACLE HE MAKES IT OUT OF BED ANYMORE." ]
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
               : [ "<18>{#p/papyrus}{#f/6}STOP WORRYING!!" ]
      )
   },

   s_save_starton: {
      s_crossroads: {
         name: "星港 - 停靠港",
         text: () =>
            SAVE.data.n.plot < 29
               ? world.edgy
                  ? [ "<32>{#p/human}* （有個骷髏沒有出現，\n  這讓你充滿了決心。）" ]
                  : [ "<32>{#p/human}* (The skeleton brothers' antics fill you with determination.)" ]
               : papreal() || world.runaway
               ? [ "<32>{#p/human}* (The box is so lonely, it fills you with determination anyway.)" ]
               : [ "<32>{#p/human}* (The box can rest easy now.)\n* (This, of course, fills you with determination.)" ]
      },
      s_pacing: {
         name: "星港 - 月岩小路",
         text: () =>
            papreal() || world.runaway
               ? SAVE.data.n.plot < 29
                  ? [ "<32>{#p/human}* (The starlight dims.)\n* (Somehow, this fills you with determination.)" ]
                  : [ "<32>{#p/human}* (The starlight has faded.)\n* (Indeed, this fills you with determination.)" ]
               : SAVE.data.b.svr
               ? [
                    "<32>{#p/human}* (The frivolous arguments once had in this room have ceased.)",
                    "<32>* (This fills you with determination.)"
                 ]
               : world.population > 5
               ? [
                    "<32>{#p/human}* (Moon rock merchants argue frivolously in the foreground.)",
                    "<32>* (This fills you with determination.)"
                 ]
               : [ "<32>{#p/human}* (The starlight remains dim.)\n* (Somehow, this fills you with determination.)" ]
      },
      s_spaghetti: {
         name: "星港 - 意麵樞紐",
         text: () =>
            [
               [ "<32>{#p/human}* (A plate of spaghetti defying the laws of physics fills you with determination.)" ],
               [
                  "<32>{#p/human}* (The spaghetti no longer defies the laws of physics.)",
                  "<32>{#p/human}* (This fills you with determination.)"
               ],
               [ "<32>{#p/human}* (The spaghetti is no more.)", "<32>{#p/human}* (This fills you with determination.)" ]
            ][SAVE.data.n.state_starton_spaghetti]
      },
      s_town1: {
         name: "星港 - 鎮上",
         text: () =>
            SAVE.data.b.svr
               ? [
                    "<32>{#p/human}* (The town may be abandoned, but its cuteness remains.)",
                    "<32>{#p/human}* (This fills you with determination.)"
                 ]
               : papreal() || world.runaway
               ? [ "<32>{#p/human}* (A shadow looms over town, filling you with determination.)" ]
               : [ "<32>{#p/human}* (This cute little town fills you with determination.)" ]
      }
   }
};


// END-TRANSLATE
