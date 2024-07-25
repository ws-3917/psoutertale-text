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
   roomKills,
   world
} from '../../../code/systems/framework';
import { SAVE } from '../../../code/systems/save';

// START-TRANSLATE

export default {
   a_foundry: {
      locketseller: [
         "<32>{#p/basic}* ...",
         "<32>{#p/basic}* I'm going to pretend you didn't just sell that locket."
      ],
      noequip: [ "<32>{#p/human}* （你打算不這麼做。）" ],
      darktoriel1: [
         "<32>{#p/human}* （你抓住了托麗爾的手。）",
         "<25>{#p/toriel}{#f/2}* 噢天哪...！\n* 弗-弗里斯克，是你嗎？",
         "<25>{#f/1}* 在這裡見到你真不容易..."
      ],
      darktoriel2: [
         "<25>{#p/toriel}{#f/9}* 我向你道歉。你肯定在到處找我。",
         "<25>{#f/9}* If you tried to call me, I had my phone turned off.",
         "<25>{#f/13}* ...",
         "<25>{#f/13}* 我為我所做的道歉，小傢伙。",
         "<25>{#f/13}* 即使你原諒我，我也很難接受。",
         "<25>{#f/9}* 我才剛剛開始接受我的所作所為。",
         "<25>{#f/10}* ...",
         "<25>{#f/10}* 總之，很高興見到你。"
      ],
      darktoriel3: [
         "<25>{#p/toriel}{#f/5}* ...嗯？\n* 你想讓我叫... 衫斯？",
         "<25>{#f/1}* Let me turn it on..."
      ],
      darktoriel4a: [
         "<32>{#s/phone}{#p/event}* 撥號中...",
         "<25>{#p/toriel}{#f/3}* ...喔，好吧。\n* 我的手機在這裡會出點問題。"
      ],
      darktoriel4b: [
         "<25>{#f/4}* 我得自己去找他。",
         "<25>{#f/5}* 呃... 我會的。\n* 但不是現在。",
         "<25>{#f/5}* ..."
      ],
      darktoriel5a: [
         "<25>{#p/toriel}{#f/5}* ...嗯？\n* 你還有話要跟我說？",
         "<32>{#p/human}* （你重複托麗爾在Archive Six中\n  給你的建議。）",
         "<25>{#p/toriel}{#f/2}* ...",
         "<25>{#f/1}* 這些話...",
         "<25>{#f/1}* 你怎麼可能聽過...？",
         "<25>{#f/0}* 我上次那麼說已經是一個世紀前了。",
         "<25>{#f/5}* ...",
         "<25>{#f/1}* 好吧...\n* 我會記住你說的話的。"
      ],
      darktoriel5b: [ "<25>{#p/toriel}{#f/1}* 嗯，現在該走了。" ],
      darktoriel6: [
         "<25>{#f/5}* 運輸船快出發了，我不能錯過。",
         "<25>{#f/9}* 然而，現在，我必須收集我的想法。",
         "<25>{#f/1}* ...謝謝你的好意，弗里斯克。\n* 你是最棒的。"
      ],
      darktoriel7: () =>
         SAVE.data.b.c_state_secret1_used
            ? [
                 "<25>{#p/toriel}{#f/10}* 別擔心，弗里斯克。\n* 我會沒事的。",
                 "<25>{#f/1}* 運輸船上見。\n* 好嗎？"
              ]
            : [
                 "<25>{#p/toriel}{#f/5}* 弗里斯克，你得給我時間處理一下。",
                 "<25>{#f/1}* 運輸船上見。\n* 好嗎？"
              ],
      ghostpartymusic1: [
         "<32>{#p/finalghost}* Ah, the classic.\n* Not just \"a\" spooktune, but \"the\" spooktune.",
         "<32>* The original, you might say."
      ],
      ghostpartymusic2: [
         "<32>{#p/mettaton}{#e/mettaton/9}* NOW THIS IS SOMETHING I CAN REALLY \"VIBE\" TO, AS BLOOKY WOULD SAY.",
         "<32>{#e/mettaton/36}* IT'S GOT JUST THE RIGHT MIX OF ELEMENTS...",
         "<32>{#e/mettaton/8}* AND THE BREAKDOWN?",
         "<32>{#e/mettaton/9}* NOT WHAT I WOULD HAVE GONE FOR, BUT DECENT NONETHELESS."
      ],
      ghostpartymusic3: [
         "<32>{#p/basic}{#e/maddummy/1}* I always thought this one felt really slow, you know?",
         "<32>* Just... super... duper... slow.",
         "<32>{#e/maddummy/0}* But that's just me."
      ],
      evac: [ "<32>{#p/human}* （你感覺周圍的怪物越來越少了。）" ],
      shopclosed: [ "<32>{#p/human}* （但是沒什麼可做的了。）" ],
      starKILLER: [ "<32>{#p/basic}{#npc/a}* The grass is fading faster than I had thought." ],
      quicksolve3: () =>
         SAVE.data.b.svr
            ? [ "<32>{#p/human}* (You access the terminal.)\n* (It appears to be unlocked.)" ]
            : [
                 "<32>{#p/human}* (You access the terminal.)",
                 "<32>{#p/basic}* \"Pathway unlocked!\"\n* \"No further action required.\""
              ],
      quicksolve4: [ "<32>{#p/human}* (You access the terminal.)", "<32>{#p/basic}* \"Enter override code!\"" ],
      quicksolve5: [
         "<32>{#p/basic}* ...",
         "<32>{#p/basic}* If only you knew a puzzle officionado who could tell you what that code might be."
      ],
      quicksolve6: [ "<32>{#p/basic}* ...", choicer.create("* (Enter the code?)", "是", "否") ],
      quicksolve7: [ "<32>{#p/human}* (You decide not to enter.)" ],
      quicksolve8: [ "<32>{#p/basic}* Well, that's a mercy." ],
      escape: [
         "<32>{#p/event}* Ring, ring...",
         "<32>{#p/alphys}* H-hey... are you there?",
         "<32>* I know you want to keep going forward, but...",
         "<32>* If you do, she'll... try to kill you...",
         "<32>* I tried to stop her... b-but she wouldn't listen to me!",
         "<32>* Now she's...",
         "<32>* ...",
         "<32>* But, uh, it's okay!\n* Because...",
         "<32>* B-because there's another way to get past her!",
         "<32>* I know it'd be kind of...\n* Inconvenient...",
         "<32>* But it's the only way you'll make it out alive...!",
         "<32>* T-trust me... okay?",
         "<32>* Go back to the balcony j-just before the pylon puzzle.",
         "<32>* If you don't, I...",
         "<32>* I...",
         "<32>* I'll... let you go now.\n* Good luck...",
         "<32>{#s/equip}{#p/event}* Click..."
      ],
      artifact1: [ "<32>{#p/human}* （你獲得了傳說中的神器。）" ],
      artifact2: [ "<32>{#p/human}* （你帶的東西太多，裝不下它了。）" ],
      artifact3: () =>
         SAVE.data.b.svr
            ? [ "<32>{#p/human}* (The inscription describes a riddle of ivories and melodies.)" ]
            : [
                 "<32>{#p/basic}* There is a inscription inscribed on the pedastal.",
                 "<32>* \"Two halves, split by the ivories.\"",
                 "<32>* \"If the prince's is your left, then whose is your right?",
                 "<32>* \"And what is their melody?\""
              ],
      tome0: () =>
         SAVE.data.b.svr
            ? [ "<32>{#p/human}* (It seems there's something missing here.)" ]
            : [ "<32>{#p/basic}* The tome is attached firmly to the pedastal." ],
      tome1: () =>
         SAVE.data.b.svr
            ? [ "<32>{#p/human}* (But the tome seems to have been taken.)" ]
            : [
                 "<32>{#p/human}* (You acquired The Epiphany.)",
                 ...(world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
                    ? [ "<25>{#p/kidd}{#f/2}* Ooh... what's that?", "<25>{#f/1}* That thing must be, like, REALLY old." ]
                    : [])
              ],
      tome2: [ "<32>{#p/human}* （你帶的東西太多，裝不下它了。）" ],
      tome3: () =>
         SAVE.data.b.svr
            ? [ "<32>{#p/human}* (The inscription speaks of peace and good intentions.)" ]
            : [
                 "<32>{#p/basic}* There is a writ inscribed on the pedastal.",
                 "<32>* \"To those who are worthy, to those who are kind.\"",
                 "<32>* \"To those who wish well, in both heart and mind.\"",
                 "<32>* \"May peace follow you on your journey home.\""
              ],
      tome4: () => [
         choicer.create(
            "* (What do you intend to do?)",
            "Spare",
            world.meanie ? "Bully" : world.flirt > 9 ? "放電" : SAVE.data.b.oops ? "Befriend" : "Hug",
            "Kill",
            "Take Gold"
         )
      ],
      tome5a: "<32>{#p/human}* (You focus your mind on the intent to spare.)",
      tome5b: () =>
         world.meanie
            ? "<32>{#p/human}* (You focus your mind on the intent to bully.)"
            : world.flirt > 9
            ? "<32>{#p/human}* (You focus your mind on the intent to flirt.)"
            : SAVE.data.b.oops
            ? "<32>{#p/human}* (You focus your mind on the intent to befriend.)"
            : "<32>{#p/human}* (You focus your mind on the intent to hug.)",
      tome5c: "<32>{#p/human}* (You focus your mind on the intent to kill.)",
      tome5d: "<32>{#p/human}* (You focus your mind on the intent to take gold.)",
      tome5e: "<32>{#p/basic}* Suddenly...!",
      tome5f: "\n* (Nothing happens.)",
      astrofood0: [
         "<32>{#p/human}* (You can't make out what's in the box...)",
         choicer.create("* (Take something out?)", "是", "否")
      ],
      astrofood1: () =>
         [
            [
               "<32>{#p/basic}* There are three portions of Space Tofu in the box.",
               choicer.create("* (Take one?)", "是", "否")
            ],
            [
               "<32>{#p/basic}* There are two portions of Space Tofu left in the box.",
               choicer.create("* (Take one?)", "是", "否")
            ],
            [
               "<32>{#p/basic}* There is one portion of Space Tofu left in the box.",
               choicer.create("* (Take it?)", "是", "否")
            ]
         ][SAVE.data.n.state_foundry_astrofood],
      astrofood2: [ "<32>{#p/human}* (You got the Space Tofu.)" ],
      astrofood3: [ "<32>{#p/human}* （你帶的東西太多了。）" ],
      astrofood4: () => [ "<32>{#p/human}* (You decide not to take anything.)" ],
      astrofood5: () =>
         SAVE.data.b.svr
            ? [ "<32>{#p/human}* (But you couldn't find anything inside.)" ]
            : [ "<32>{#p/basic}* The box is empty." ],
      bird1: () => [
         ...(SAVE.data.b.svr ? [] : [ "<32>{#p/basic}* This small bird wants to carry you across the gap." ]),
         choicer.create("* (Accept the bird's offer?)", "是", "否")
      ],
      blookdate1: () =>
         world.sad_ghost || world.population === 0
            ? [
                 "<32>{#p/napstablook}* oh...\n* hi there...",
                 "<32>* sorry, i...\n* wasn't expecting you to follow me here.",
                 "<32>* uh...\n* make yourself at home...?"
              ]
            : [
                 "<32>{#p/napstablook}* oh...\n* you actually came...",
                 "<32>* sorry, i...\n* wasn't expecting that.",
                 "<32>* it's not much, but make yourself at home."
              ],
      blookdate2: () => [
         ...(world.sad_ghost || world.population === 0
            ? [ "<32>{#p/napstablook}* oh... you want my food...", "<32>* let me see what i have..." ]
            : [ "<32>{#p/napstablook}* are you hungry?", "<32>* i think i have something in the fridge..." ])
      ],
      blookdate2x: pager.create(
         0,
         () =>
            SAVE.data.b.svr
               ? [
                    "<32>{#p/human}* (You inspect the fridge.)\n* (It doesn't seem like you can exactly see the contents.)"
                 ]
               : [
                    "<32>{#p/human}* （你看了下冰箱裡頭。）",
                    "<32>{#p/basic}* 很難說裡面到底有些什麼。",
                    ...(ghostpartyCondition()
                       ? [
                            "<32>{#p/mettaton}{#e/mettaton/8}* THERE'S PROBABLY NOTHING BUT GHOST FOOD IN THERE, DARLING.",
                            "<32>{#p/mettaton}{#e/mettaton/9}* IF YOU TRIED TO EAT IT, IT'D JUST PHASE THROUGH YOU."
                         ]
                       : [])
                 ],
         () =>
            SAVE.data.b.svr
               ? [
                    "<32>{#p/human}* (You inspect the fridge.)\n* (It doesn't seem like you can exactly see the contents.)"
                 ]
               : [
                    "<32>{#p/human}* （你看了下冰箱裡頭。）",
                    "<32>{#p/basic}* 很難說裡面到底有些什麼。"
                 ]
      ),
      blookdate3: [
         "<32>{#p/napstablook}* it's a ghost sandwich...",
         "<32>* do you want to try it...",
         choicer.create("* (Take a bite?)", "是", "否")
      ],
      blookdate4a: [
         "<32>{#p/human}* (You attempt to bite into the ghost sandwich.)",
         "<32>{#p/human}* (You phase right through it.)",
         "<32>{#p/napstablook}* oh...",
         "<32>* nevermind..."
      ],
      blookdate4b: [ "<32>{#p/napstablook}* oh..........." ],
      blookdate5: [
         "<32>{#p/napstablook}* after a great meal i like to lie on the ground and feel like garbage...",
         "<32>* it's a family tradition...",
         "<32>* do you want...\n* ... to join me...?",
         choicer.create("* （你要怎麼回答？）", "是", "否")
      ],
      blookdate6a: [ "<32>{#p/napstablook}* okay...\n* follow my lead..." ],
      blookdate6b: [ "<32>{#p/napstablook}* oh......................", "<32>* i'll just be outside then" ],
      blookdate7: [
         "<32>{#p/napstablook}* here we go...\n* you'll lie down as long as you don't move.",
         "<32>* so...\n* only move around when you want to get up, i guess."
      ],
      blookdate8: [ "<32>{#p/napstablook}* well, that was nice...", "<32>* thank you..." ],
      blookdate8x: [ "<32>{#p/napstablook}* well, that was fast......", "<32>* thanks for trying, though......" ],
      blookdate8y: [ "<32>{#p/napstablook}* well, that was that", "<32>* ............" ],
      blookdate9: [
         "<32>{#p/napstablook}* i'll be outside...\n* feel free to join me...\n* or not...",
         "<32>* it's up to you..."
      ],
      blookmusic1: () => [
         SAVE.data.b.svr
            ? "<32>{#p/human}* (You reach for the sound system...)"
            : "<32>{#p/basic}* There is currently no music playing.",
         choicer.create("* (Play a song?)", "Spooktune", "Spookwave", "Spookwaltz", "Cancel")
      ],
      blookmusic1y: [ "<32>{*}{#p/human}* (You turn the dial...){^40}{%}" ],
      blookmusic2: () => [
         SAVE.data.b.svr
            ? "<32>{#p/human}* (It sounds like a song is currently playing.)"
            : [
                 "<32>{#p/basic}* Currently playing \"Spooktune\"",
                 "<32>{#p/basic}* Currently playing \"Spookwave\"",
                 "<32>{#p/basic}* Currently playing \"Spookwaltz\""
              ][SAVE.data.n.state_foundry_blookmusic - 1],
         choicer.create("* (Stop playback?)", "是", "否")
      ],
      blookmusic3a: [
         "<32>{#p/napstablook}* oh...\n* a classic spooktune...",
         "<32>* they really don't make music like this anymore..."
      ],
      blookmusic3b: [ "<32>{#p/napstablook}* dang, that ambience...", "<32>* it's like my whole body is being spooked" ],
      blookmusic3c: [
         "<32>{#p/napstablook}* this one's kinda slow...",
         "<32>* but once you get into the groove, it's pretty good"
      ],
      blookmusic3d: [
         "<32>{#p/napstablook}* hey...\n* you really like listening to that old playlist, huh",
         "<32>* heh...\n* that's very nice of you..."
      ],
      blooksnail1: pager.create(
         0,
         [
            "<32>{#p/napstablook}* do you want to play a game?\n* it's called electrosnail.",
            "<32>* the snails will race, and if the yellow snail wins, you win.",
            "<32>* it's 10G to play.",
            choicer.create("* (Play the game?)", "是", "否")
         ],
         [ "<32>{#p/napstablook}* did you change your mind?", choicer.create("* (Play the game?)", "是", "否") ]
      ),
      blooksnail1i: [
         "<32>{#p/napstablook}* do you want to play again?",
         choicer.create("* (Play the game?)", "是", "否")
      ],
      blooksnail2a: [
         "<32>{#p/napstablook}* um...\n* you don't have enough money......",
         "<32>* n-no, you can still play, don't worry about it..."
      ],
      blooksnail2b: [ "<32>{#p/napstablook}* oh..........." ],
      blooksnail2b0: [ "<32>{#p/napstablook}* alright..........." ],
      blooksnail3: [ "<32>{#p/napstablook}* okay...\n* press [Z] repeatedly to encourage your snail.", "<32>* ready?" ],
      blooksnail3i: [ "<32>{#p/napstablook}* okay...\n* remember, you can always encourage your snail.", "<32>* ready?" ],
      blooksnail4a: [
         "<32>{#p/napstablook}* you won... congratulations.",
         "<32>* i hope the prize is enough...",
         "<32>{#s/equip}{#p/human}* （你得到了20G。）"
      ],
      blooksnail4b: [
         "<32>{#p/napstablook}* your snail lost by a thin margin.",
         "<32>* wait...\n* the snail is under the false belief that it won...",
         "<32>* oh no... the snail is going to be sad...",
         "<32>* here, i'll just give you some money...\n* act like you won...",
         "<32>{#s/equip}{#p/human}* （你得到了40G。）"
      ],
      blooksnail4c: [
         "<32>{#p/napstablook}* oh...........\n* you both tried your best...",
         "<32>* the snail looks discouraged...",
         "<32>* i guess her best wasn't good enough...",
         "<32>* oh..........."
      ],
      blooksnail4d: [
         "<32>{#p/napstablook}* oh...........\n* looks like you encouraged your snail a little too much...",
         "<32>* all that pressure to succeed...\n* really got to her...",
         "<32>* oh..........."
      ],
      blooksnail4e: [
         "<32>{#p/napstablook}* oh...........\n* looks like you encouraged your snail too much...",
         "<32>* she won't even look at you...",
         "<32>* oh..........."
      ],
      blooksnail4f: [
         "<32>{#p/napstablook}* oh...........\n* looks like you encouraged your snail way too much...",
         "<32>* now she's... just gone...",
         "<32>* oh..........."
      ],
      blooksnailX: {
         a: "3...",
         b: "2...",
         c: "1...",
         d: "GO!",
         e: "RACE END"
      },
      blooksorry1: [
         "<32>{#p/napstablook}* ...？",
         "<32>* you...\n* you're...",
         "<32>* ... are you sure?",
         choicer.create("* （你要怎麼回答？）", "是", "否")
      ],
      blooksorry2: [
         "<32>{#p/napstablook}* i...",
         "<32>* i never thought you'd...",
         "<32>* ... um...",
         "<32>* ... are you absolutely sure?",
         choicer.create("* （你要怎麼回答？）", "是", "否")
      ],
      blooksorry3: [
         "<32>{#p/napstablook}* you...",
         "<32>* you really mean it, don't you?",
         "<32>* ...\n* heh...",
         "<32>* okay...",
         "<32>* i'll try to forget about what you did before..."
      ],
      blooksorryX: [ "<32>{#p/napstablook}* oh...........\n* ...........\n* ..........." ],
      blooksorryY: [ "<32>{#p/napstablook}* ..." ],
      blooktouch1: () =>
         world.sad_ghost
            ? [
                 "<32>{#p/napstablook}* what do you want......",
                 choicer.create("* （你要怎麼回答？）", "Sorry", "Nothing")
              ]
            : [
                 "<32>{#p/napstablook}* oh, do you need anything?",
                 choicer.create("* （你要怎麼回答？）", "Hug", "Sleep", "Music", "Nothing")
              ],
      blooktouch2a1: [
         "<32>{#p/napstablook}* you... want to...\n* umm...",
         "<32>* you want me to give you a hug?",
         "<32>* well...\n* if it'll make you happy...",
         "<32>{#p/basic}* Napstablook attempts to give you a big hug.",
         "<32>* They pass right through you.",
         "<32>{#p/napstablook}* oh...........",
         "<32>* i guess...........\n* i can't do it..........."
      ],
      blooktouch2a2: [
         "<32>{#p/napstablook}* you really need a hug, don't you...",
         "<32>* i'm sorry...\n* i wish i could..."
      ],
      blooktouch2b1: [
         "<32>{#p/napstablook}* do you need a place to sleep?",
         "<32>* umm... i don't really have a bed in here...",
         "<32>* hmm...",
         "<32>* go to the fridge and see if there's anything to eat...",
         "<32>* after that, we can lie down on the ground...",
         "<32>* you'll see..."
      ],
      blooktouch2b2: [ "<32>{#p/napstablook}* the fridge..." ],
      blooktouch2c1: [
         "<32>{#p/napstablook}* if you wanna listen to music, there's some on my stereo...",
         "<32>* feel free to take a look...\n* or not..."
      ],
      blooktouch2c2: [
         "<32>{#p/napstablook}* is the stereo...\n* ... not to your liking...",
         "<32>* maybe...\n* i could show you a new song i've been working on...",
         "<32>* it's way different than my usual stuff...",
         "<32>* do you want to hear it?",
         choicer.create("* （你要怎麼回答？）", "是", "否")
      ],
      blooktouch2c2x: [
         "<32>{#p/napstablook}* want to hear my new song?",
         choicer.create("* （你要怎麼回答？）", "是", "否")
      ],
      blooktouch2c3a: [ "<32>{#p/napstablook}* oh...\n* well, let me know if you change your mind..." ],
      blooktouch2c3b: [ "<32>{#p/napstablook}* okay...\n* let me put it on..." ],
      blooktouch2c4: [
         "<32>{#p/napstablook}* so... what did you think",
         choicer.create("* （你要怎麼回答？）", "Good", "Bad")
      ],
      blooktouch2c5a: [
         "<32>{#p/napstablook}* it's... not bad?",
         "<32>* oh-\n* umm... thank you...",
         "<32>* i'll...\n* i'll tell you when it's done!"
      ],
      blooktouch2c5b: [ "<32>{#p/napstablook}* oh.........\n* you're probably right........." ],
      blooktouch2d1: [ "<32>{#p/napstablook}* sorry...\n* that's all the music i have for now..." ],
      blooktouch2d2: [ "<32>{#p/napstablook}* sorry...\n* i'll try to make something better next time..." ],
      blookyard1: pager.create(
         0,
         () =>
            SAVE.storage.inventory.contents.includes('tvm_mewmew') // NO-TRANSLATE

               ? [
                    "<32>{#p/napstablook}* you can keep your mew mew doll",
                    "<32>{#p/napstablook}* thanks for...\n* not being helpful, i guess"
                 ]
               : 65 <= SAVE.data.n.plot
               ? SAVE.data.b.a_state_hapstablook
                  ? 68 <= SAVE.data.n.plot
                     ? [
                          "<32>{#p/napstablook}* hey, mettaton came by a little while ago.",
                          "<32>* we talked for a bit about what we've been up to...",
                          "<32>* about the family...",
                          "<32>* well, i don't think i've ever been this happy before.",
                          "<32>* what you did for us back there... it means a lot."
                       ]
                     : [
                          "<32>{#p/napstablook}* hey... sorry things didn't work out the way we hoped...",
                          "<32>* it was nice to have you there, though......"
                       ]
                  : [
                       "<32>{#p/napstablook}* with every day that goes by, i feel a little farther away from happiness......"
                    ]
               : 63 <= SAVE.data.n.plot && SAVE.data.b.a_state_hapstablook
               ? [ "<32>* oh...\n* hey......", "<32>* i just came back here to keep an eye on the snails......" ]
               : 60 <= SAVE.data.n.plot
               ? [
                    "<32>{#p/napstablook}* being a contestant on one of mettaton's shows was a dream come true...",
                    "<32>* i wonder if i'll ever get to do it again"
                 ]
               : 49 <= SAVE.data.n.plot
               ? [
                    "<32>{#p/napstablook}* dang, you sure get around",
                    "<32>* i mean...",
                    "<32>* i guess i do too...",
                    "<32>* but, i'm kind of incorporeal, so it's not that impressive for me"
                 ]
               : [
                    "<32>{#p/napstablook}* welcome to blook family snail farm...",
                    "<32>* ... yeah.\n* i'm the only employee.",
                    ...(world.killed0
                       ? [
                            "<32>* hey, that's weird...",
                            "<32>* my snails disappeared...",
                            "<32>* maybe they were picked up by that guy with a beard..."
                         ]
                       : [
                            "<32>* this place used to get a lot of business...",
                            "<32>* but our main customer disappeared one day...",
                            "<32>* now it's just some hairy guy who shows up once in a while..."
                         ])
                 ],
         () =>
            SAVE.storage.inventory.contents.includes('tvm_mewmew') // NO-TRANSLATE

               ? [ "<32>{#p/napstablook}* ............" ]
               : 65 <= SAVE.data.n.plot
               ? SAVE.data.b.a_state_hapstablook
                  ? 68 <= SAVE.data.n.plot
                     ? [ "<32>{#p/napstablook}* hopefully next time you won't have to risk your life." ]
                     : [ "<32>{#p/napstablook}* it is what it is..." ]
                  : [ "<32>{#p/napstablook}* it is what it is..." ]
               : 63 <= SAVE.data.n.plot && SAVE.data.b.a_state_hapstablook
               ? [ "<33>{#p/napstablook}* don't worry, they're alright...", "<32>* at least, i hope so......" ]
               : 60 <= SAVE.data.n.plot
               ? [ "<32>{#p/napstablook}* hopefully next time he's a little nicer to the contestants........." ]
               : 49 <= SAVE.data.n.plot
               ? [
                    "<32>{#p/napstablook}* oh yeah, i saw you on that talent show earlier...",
                    ...(SAVE.data.n.state_aerialis_talentfails === 0
                       ? [
                            "<32>{#p/napstablook}* that was quite a performance... you didn't even mess up once",
                            "<32>* i don't think i've ever someone do that before......"
                         ]
                       : SAVE.data.n.state_aerialis_talentfails < 15
                       ? [
                            "<32>{#p/napstablook}* even if your performance wasn't perfect, you did pretty good",
                            "<32>* most of mettaton's contestants don't even make it halfway...",
                            "<32>* including me......"
                         ]
                       : [
                            "<32>{#p/napstablook}* even if your performance wasn't the greatest, i could tell you were trying your best",
                            "<32>* and besides, you made it to the end...",
                            "<32>* unlike me......"
                         ])
                 ]
               : world.killed0
               ? [
                    "<32>{#p/napstablook}* oh hey...\n* that rhymed, didn't it...",
                    "<32>* i guess i could make a song about this... or not..."
                 ]
               : [
                    "<32>{#p/napstablook}* a friend of mine recently told me it was the king...",
                    "<32>* but that can't be true\n* he wouldn't even know me..."
                 ],
         () =>
            SAVE.storage.inventory.contents.includes('tvm_mewmew') // NO-TRANSLATE

               ? [ "<32>{#p/napstablook}* ............" ]
               : 65 <= SAVE.data.n.plot
               ? SAVE.data.b.a_state_hapstablook && 68 <= SAVE.data.n.plot
                  ? [ "<32>{#p/napstablook}* i wish i had more to say..." ]
                  : [ "<32>{#p/napstablook}* it is what it is..." ]
               : 60 <= SAVE.data.n.plot
               ? [ "<32>{#p/napstablook}* ........." ]
               : 49 <= SAVE.data.n.plot
               ? SAVE.data.n.state_aerialis_talentfails === 0
                  ? [ "<32>{#p/napstablook}* congratulations, i guess" ]
                  : [ "<32>{#p/napstablook}* ......" ]
               : [ "<32>{#p/napstablook}* i wish i had more to say..." ]
      ),
      boots1: [ "<32>{#p/human}* （你撿到了一雙懸浮靴。）", choicer.create("* （穿上懸浮靴嗎？）", "是", "否") ],
      boots2: [ "<32>{#p/human}* （你帶的東西太多，裝不下它了。）" ],
      bruh: [ "<32>{*}{#p/undyne}* 等會見。{^20}{%}" ],
      candy1: () =>
         SAVE.data.b.svr
            ? [
                 "<32>{#p/human}* (You approach the vending machine.)",
                 choicer.create("* (What will you make?)", "甘草糖", "Chisps", "口糧", "Nothing")
              ]
            : [
                 "<32>{#p/basic}* Synthesize something with the vending machine?",
                 choicer.create("* (What will you make?)", "甘草糖", "Chisps", "口糧", "Nothing")
              ],
      candy2: [ "<32>{#p/human}* （你買了$(x)。）" ],
      candy3: [ choicer.create("* （花$(y)G來買$(x)嗎？）", "是", "否") ],
      candy4: [ "<32>{#p/human}* （你的錢不夠。）" ],
      candy5: [ "<32>{#p/human}* (You decide not to buy.)" ],
      candy6: [ "<32>{#p/human}* （你帶的東西太多了。）" ],
      candy7: [ "<32>{#p/human}* (You decide not to make anything.)" ],
      deathReaction: {
         f_bird: [ "<32>{#p/basic}* This small bird no longer wants to carry you across the gap." ],
         
         f_blooky: [
            "<32>{#p/basic}{#npc/a}* Did you hear about Undyne?",
            "<32>{#p/basic}{#npc/a}* Oh, not at all!",
            "<32>{#p/basic}{#npc/a}* I heard she's doing well.",
            "<32>{#p/basic}{#npc/a}* Sounds good to me!",
            "<32>{#p/basic}{#npc/a}* Undyne will never die.",
            "<32>{#p/basic}{#npc/a}* Indeed not!"
         ],
         f_dummy: [
            "<32>{#p/basic}{#npc/a}* Fatal energy signature detected.",
            "<32>* Name... Undyne.",
            "<32>* Relationship status... \"BESTIES!!!\"",
            "<32>* Last interaction... asked about humans.",
            "<32>* Time to compensate for loss...",
            "<32>* Indeterminate."
         ],
         f_hub: [
            "<32>{#p/basic}{#npc/a}* Wh...\n* What've you done!?",
            "<32>* Ole' Gerson's not gonna be a happy camper after that..."
         ],
         f_snail: () => [
            "<32>{#p/basic}* ...",
            SAVE.data.b.f_state_thundersnail_win
               ? "<32>* I'll make sure you NEVER win another game of electrosnail."
               : "<32>* I'll make sure you NEVER win a game of electrosnail."
         ],
         f_undyne: [
            "<32>{#p/basic}* No.\n* No!\n* NO!!!",
            "<32>* What. Have. You. DONE???",
            "<32>* She was...",
            "<32>* She was my FAVORITE bully!\n* How dare you take her away from me like that!?"
         ]
      },
      dummy1x: () =>
         SAVE.data.n.state_wastelands_dummy === 4
            ? [
                 "<32>{#p/basic}* Gah!\n* I just KNEW you were going to do that!!",
                 "<32>* What an IMBECILE!!!\n* You just hugged someone with haphephobia!!!!",
                 "<32>* Guooohh, you're gonna PAY."
              ]
            : [
                 "<32>{#p/basic}* Gah!\n* Why would you EVER do that!?",
                 "<32>* Don't you know who I am!?!?\n* You just hugged someone with haphephobia!!!!",
                 "<32>* Guooohh, you're gonna PAY."
              ],
      dummy1a: () =>
         SAVE.data.n.state_wastelands_dummy === 2
            ? [ "<32>{#p/basic}* 呵。\n* 我就知道，你這懦夫\n  看到我指定得逃。", "<32>* 是不是啊，笨蛋？" ]
            : [ "<32>{#p/basic}* 放肆！\n* 闖進我的地盤，\n  還把我當空氣？", "<32>* 真是蠢到極點！" ],
      dummy1b: () =>
         SAVE.data.n.state_wastelands_dummy === 1
            ? [ "<32>{#p/basic}* 看到我，嚇破膽了？", "<32>* 你也就這點本事。" ]
            : [ "<32>{#p/basic}* 放肆！\n* 闖進我的地盤，\n  還跟我大眼瞪小眼？", "<32>* 真是蠢到極點！" ],
      dummy1c: () =>
         SAVE.data.n.state_wastelands_dummy === 1
            ? [ "<32>{#p/basic}* 我就知道，\n  不揍我兩下你心都癢癢。", "<32>* 迂腐。\n* 迂腐！\n* 迂腐！！！" ]
            : [
                 "<32>{#p/basic}* 哎呀，看來你來這\n  可不只是想聊聊天。",
                 "<32>* 不過，你那點小把戲\n  在我這屁用沒有！\n* 看我不揍死你！"
              ],
      dummy2: () => [
         "<32>{#p/basic}* 那群飯桶沒殺了你，\n  因為他們少一樣看家本領-\n  沒！有！實！體！",
         "<32>* 沒錯，人類！\n* 有了這個，我就能\n  所向披靡，天下無敵！",
         "<32>* 我是一隻住在人偶裡的幽靈！",
         "<32>* 我的表親以前也住在一個人偶裡，\n  直到...！",
         ...(SAVE.data.n.state_wastelands_toriel === 0
            ? [
                 "<32>* 直到...！",
                 "<32>* 直到...",
                 "<32>{#x1}* ...額，它其實是自己離開的...",
                 "<32>* 肯定是那位善良的女士\n  在外域給它找到了新家，\n  貼心照顧著它。",
                 "<32>* 我的表親說，\n  有個人類讓那位女士感到幸福。",
                 "<32>* 那個人類就是你，對吧？",
                 "<32>* ...該死。\n* 你走吧，我不打你了..."
              ]
            : [
                 "<32>* 直到你出現為止！！！",
                 ...(16 <= SAVE.data.n.kills_wastelands
                    ? [
                         "<32>* 你的所作所為\n  不光害它離開了自己的家...",
                         "<32>* 還把它的鄰居全嚇跑了！",
                         "<32>* 可惡。\n* 可惡！\n* 可惡！！！",
                         "<32>{#x1}* 你個敗類，人渣，廢物！\n* 我快要氣死了啊啊啊！！！",
                         "<32>* 呀啊啊啊啊啊啊！！！\n* 我的人偶能量快要爆發了！！！"
                      ]
                    : SAVE.data.n.state_wastelands_dummy === 3
                    ? [
                         "<32>* YOU... you...",
                         "<32>* Shucks!\n* You were really boring!",
                         "<32>* They got annoyed and flew away like any self-respecting spectre.",
                         "<32>* Well then.\n* Well then!\n* WELL THEN!",
                         "<32>* I guess I'll just have to entertain MYSELF!",
                         "<32>* Buckle up, sleepyhead!\n* It's time to put on a show!"
                      ]
                    : SAVE.data.n.state_wastelands_dummy === 4
                    ? [
                         "<32>* YOU... you...",
                         "<32>* 該死，喜歡當老好人是吧？",
                         "<32>* 自己當老好人不要緊，\n  還讓我表親染上抱癮，\n  總想擁抱，戒不掉了！！！",
                         "<32>* 它丟掉了原本的身體，\n  每次發作時，就找我發洩自己的慾望。",
                         "<32>* 它明知道我患有接觸恐懼症，\n  還瘋了似的騷擾我。\n  我快被它煩死了！！！",
                         "<32>* 人類，我要讓你付出代價！"
                      ]
                    : [
                         ...(SAVE.data.n.state_wastelands_dummy === 0
                            ? [
                                 "<32>* When you talked with them, they were hoping for a nice chat...",
                                 "<32>* But the things you said...!",
                                 "<32>* Horrible.\n* Shocking!\n* UNBELIEVABLE!",
                                 "<32>* You spooked them right out of their dummy!",
                                 "<32>* Grr..."
                              ]
                            : SAVE.data.n.state_wastelands_dummy === 1
                            ? [
                                 "<32>* Us ghosts spend our whole lives looking for a proper vessel.",
                                 "<32>* Slowly, slowly, we grow closer to our new bodies, until one day...",
                                 "<32>* We too maybe become corporeal beings, able to laugh, love, and dance like any other.",
                                 "<32>* But YOU!!!\n* My cousin's future...\n* You snatched it all away!",
                                 "<32>* Uraaahhhhh!!!"
                              ]
                            : SAVE.data.n.state_wastelands_dummy === 2
                            ? [
                                 "<32>* They were a shy sort.\n* Living a lonely life in the Outlands...",
                                 "<32>* They saw you and HOPED you might TALK to them.",
                                 "<32>* But NO!\n* You ran away!",
                                 "<32>* Pathetic.\n* Pathetic!\n* PATHETIC!!!",
                                 "<32>* Nobody breaks my cousin's HEART and GETS AWAY with it!"
                              ]
                            : SAVE.data.n.state_wastelands_dummy === 5
                            ? [
                                 "<32>* When you first showed up, they were so excited to talk...",
                                 "<32>* And then you went and SLAPPED them in the FACE!",
                                 "<32>* Not just once.\n* Not just twice!",
                                 "<32>* But THREE TIMES!!",
                                 "<32>* How AWFUL do you have to BE!?"
                              ]
                            : SAVE.data.n.state_wastelands_dummy === 6
                            ? [
                                 "<32>* My cousin is a nice fellow.",
                                 "<32>* But that doesn't mean you can just GO AROUND and FLIRT with them!",
                                 "<32>* Your stupid advances weirded them out SO MUCH...",
                                 "<32>* ... they just couldn't take it anymore!!",
                                 "<32>* Disgusting.\n* Disgusting!\n* DISGUSTING!!!"
                              ]
                            : []),
                         "<32>* You'll DIE for this, HUMAN!!!!"
                      ])
              ])
      ],
      dummy3: [
         "<32>{#p/basic}* ...？",
         "<32>* 這...\n* 這種感覺...？",
         "<32>{#x3}* 明白了。\n* 明白了！\n* 明白了！！！",
         "<32>* 人類。\n* 剛剛我那徹底失控的情緒...",
         "<32>* 讓我終於可以完美地\n  和我的身體融為一體啦！",
         "<32>* 我是有血有肉的存在了！\n* 我... 我不是在做夢吧？\n* 這是真的嗎？？？",
         "<32>* 作為報答，\n  我不會再攻擊你啦。",
         "<32>* 怎麼樣？"
      ],
      dummy4: (mover: boolean) => [
         ...(mover
            ? [
                 SAVE.data.n.state_foundry_maddummy === 1
                    ? "<32>{#p/napstablook}* hey...\n* i thought i heard someone being attacked..."
                    : "<32>{#p/napstablook}* hey...\n* i thought i heard someone yelling...",
                 "<32>{#p/napstablook}* but i guess you're alright",
                 "<32>* i was actually about to head home..."
              ]
            : [ "<32>{#p/napstablook}* well...\n* i'm going to head home now..." ]),
         ...(world.sad_ghost || world.population === 0
            ? [
                 "<32>* just warning you...",
                 "<32>* so you don't accidentally follow me to my house...",
                 "<32>* you probably wouldn't like that..."
              ]
            : [
                 "<32>* so... um...\n* feel free to \"come with\" if you want...",
                 "<32>* but no pressure...",
                 "<32>* i understand if you're busy...",
                 "<32>* it's fine...",
                 "<32>* no worries...",
                 "<32>* just thought i'd offer..."
              ])
      ],
      dummypunch1: () =>
         SAVE.data.b.oops
            ? [
                 "<32>{#p/basic}* 一個訓練人偶。\n* 教訓教訓它嗎？",
                 choicer.create("* （動手嗎？）", "是", "否")
              ]
            : [ "<32>{#p/basic}* It's a training dummy.\n* Hug it?", choicer.create("* (Hug the dummy?)", "是", "否") ],
      dummypunch2a: [ "<32>{#p/human}* （你打算不這麼做。）" ],
      dummypunch2b: () =>
         world.genocide || world.meanie
            ? [ "<32>{#p/human}* （你使勁揍了人偶一拳。）" ]
            : SAVE.data.n.exp > 0
            ? [ "<32>{#p/human}* （你給人偶來了一拳。）" ]
            : SAVE.data.b.oops
            ? [ "<32>{#p/human}* （...你只是戳了戳人偶。）" ]
            : [ "<32>{#p/human}* (You hugged the dummy.)" ],
      dummypunch3: () =>
         SAVE.data.b.f_state_dummypunch
            ? [ "<32>{#p/basic}* 人偶被你教訓了一頓。" ]
            : [ "<32>{#p/basic}* It's a happy hugging dummy." ],
      epicreaction: () =>
         [
            [ "<25>{#p/kidd}{#f/7}* What was THAT!?" ],
            [ "<25>{#p/kidd}{#f/7}* Ack!!" ],
            [ "<25>{#p/kidd}{#f/7}* Not again!" ],
            [ "<25>{#p/kidd}{#f/7}* How many of those things are there!" ],
            [ "<25>{#p/kidd}{#f/7}* Seriously!?" ],
            [ "<25>{#p/kidd}{#f/7}* Jeez!!" ],
            [ "<25>{#p/kidd}{#f/4}* We've gotta find a way outta here..." ],
            [ "<25>{#p/kidd}{#f/4}* ..." ]
         ][Math.min(SAVE.data.n.state_foundry_kiddreaction++, 7)],
      fallenfish: [ "<33>{#p/basic}* Electricity permeates the body." ],
      fallenfish2: [ "<32>{#p/basic}* She's fallen down." ],
      fallenfish3: [ "<32>{#p/basic}* ... but nothing happened." ],
      finalfish1: [ "<25>{#p/undyne}{#f/19}* Ngah..." ],
      finalfish2: [ "<25>{#p/undyne}{#f/19}* Stupid...\n* Interference..." ],
      finalpre: [ choicer.create("* (Continue to Aerialis?)", "是", "否") ],
      genotext: {
         asgoreFinal1: () =>
            SAVE.flag.n.genocide_milestone < 5
               ? SAVE.flag.n.ga_asrielStutter < 1
                  ? [
                       "<25>{#p/asgore}{#f/15}* 你到底還是選擇\n  與他為伍啊...",
                       "<25>{#p/asriel2}{#f/7}* 艾斯戈爾，誰都不能分割\n  我和$(name)之間的紐帶。\n* 你不是不知道。",
                       "<25>{#p/asgore}{#f/15}* $(name)... 當-當然了。\n* 那... 你-你們帶著那個孩子\n  在幹什麼呢？",
                       "<25>{#p/asriel2}{#f/8}* 真是的，關你什麼事。",
                       "<25>{#p/asgore}{#f/15}* （呃... 我早該料到的...）",
                       "<25>{#p/asriel2}{#f/6}* 不過呢，總的來說...\n* 我們只是在這旅行。",
                       "<25>{#f/6}* 就我們三個。\n* 哎呀，我們沒邀請你呢，\n  意不意外。",
                       "<25>{#p/asgore}{#f/15}* 你看我-我像是\n  想受你邀請的樣子嗎？？",
                       "<25>{#p/asriel2}{#f/6}* 你說呢？",
                       "<25>{#p/asgore}{#f/15}* 呃，我只是想看看\n  你怎麼樣了。\n* 沒別的。",
                       "<26>{#p/asriel2}{#f/10}{#x1}* ...\n* 不對勁。",
                       "<25>{#p/asriel2}{#f/10}* 艾菲斯博士？\n* ...是你吧？"
                    ]
                  : [
                       "<25>{#p/asgore}{#f/15}* 你到底還是選擇\n  與他為伍啊...",
                       "<25>{#p/asriel2}{#f/8}* 艾菲斯，沒人能分割\n  我和$(name)間的紐帶。",
                       "<25>{#p/asriel2}{#f/7}* 不過你對這事完全沒數吧。"
                    ]
               : [
                    "<25>{#p/asgore}{#f/15}* 你到底還是選擇\n  與他為伍啊...",
                    "<25>{#p/asriel2}{#f/8}* 艾菲斯，沒人能分割\n  我和$(name)間的紐帶。",
                    ...(SAVE.flag.n.ga_asrielQuestion < 1
                       ? [ "<25>{#p/asriel2}{#f/7}* Like I don't already know you're planning to kill us." ]
                       : [ "<25>{#p/asriel2}{#f/7}* 真以為你能阻止我們？" ])
                 ],
         asgoreFinal2: () =>
            SAVE.flag.n.genocide_milestone < 5
               ? [
                    "<25>{#p/alphys}{#g/alphysThatSucks}* ...騙不過你，嗯？",
                    "<25>{#p/asriel2}{#f/3}* 的確。",
                    "<25>{#p/alphys}{#g/alphysGarbo}* ...\n* 倒還算說了句實話。",
                    "<25>{#p/asriel2}{#f/13}* 看著好友死去，\n  你肯定急瘋了...",
                    "<25>{#p/asriel2}{#f/16}* 沒法和你感同身受呢。",
                    "<25>{#p/alphys}{#g/alphysIDK}* ...",
                    "<25>{#p/alphys}{#g/alphysNeutralSweat}* ...",
                    "<25>{#p/alphys}{#g/alphysNeutralSweat}* 這主意糟透了。",
                    "<25>{|}{#p/asriel2}{#f/8}* 你不會又想- {%}"
                 ]
               : [
                    "<25>{#p/alphys}{#g/alphysOhGodNo}* 你說什麼？",
                    "<25>* 我...\n* 面對你，我-我哪來的勝算！",
                    ...(SAVE.flag.n.ga_asrielQuestion < 1
                       ? [ "<25>{#p/asriel2}{#f/10}* ...當真？", "<25>{#p/alphys}{#g/alphysIDK}* ..." ]
                       : [ "<25>{#p/asriel2}{#f/7}* ..." ]),
                    "<25>{#p/alphys}{#g/alphysNeutralSweat}* ...",
                    "<25>{#p/alphys}{#g/alphysNeutralSweat}* 這主意糟透了。"
                 ],
         asgoreFinal3: () =>
            SAVE.flag.n.genocide_milestone < 5
               ? [ "<25>{#p/asriel2}{#f/7}* 真是個膽小鬼。" ]
               : [
                    [ "<25>{#p/asriel2}{#f/15}* 呵... 看來我話說太早了。" ],
                    [ "<25>{#p/asriel2}{#f/15}* 行吧。" ]
                 ][Math.min(SAVE.flag.n.ga_asrielQuestion++, 1)],
         asgoreMK1: [
            "<25>{#p/kidd}{#f/7}* 哇，那是...\n  我在做夢吧...",
            "<25>{#f/1}* 真的是國王欸！",
            "<25>* 艾斯戈爾國王！\n* 您來這做啥呢！？",
            "<25>{#p/asgore}{#f/3}* ...",
            "<25>{#f/3}* 這事... 說來話長啊。",
            "<25>{#p/kidd}{#f/4}* 噢...",
            "<25>{#f/1}* 沒事，您跟我說說吧！",
            "<25>{#p/asgore}{#f/7}* 呃...\n* 對不起，我不能說。",
            "<25>{#f/6}* 不過，我有個事想問你。",
            "<25>{#p/kidd}{#f/3}* ...？",
            "<25>{#p/asgore}{#f/7}* 這個人類是你的好朋友嗎？",
            "<25>{#p/kidd}{#f/1}* 嗯... 對呀！",
            "<25>{#f/4}* 可是，之前跟我們在一塊的\n  另一個小孩...",
            "<25>{#f/8}* ...我很害怕他。",
            "<25>{#p/asgore}{#f/1}* 看來就是他了。\n* 都是因為他...",
            "<25>{#p/kidd}{#f/4}* 怎麼了？",
            "<25>{#p/asgore}{#f/6}* 呃... 沒事。\n* 我不該拿這事打攪你的。",
            "<25>{#f/3}* 而你，人類...",
            "<25>{#f/2}* 你和離開的那位「朋友」\n  闖了不少禍。",
            "<25>{#f/1}* 許許多多怪物都...\n  哎，你知道我要說什麼。",
            "<25>{#p/kidd}{#f/4}* ...到底怎麼了？",
            "<25>{#p/asgore}{#f/7}* 沒事，沒事。\n* 我只是覺得...",
            "<25>{#f/5}* 相比... 我剛說的，\n  你還可以做點更有意義的事。",
            "<25>{#f/5}* 說不上來為什麼，不過...\n  也許帕派瑞斯沒說錯。",
            "<25>{#f/6}* 既然你的「朋友」\n  已經拋下了你...",
            "<25>* 那你就有機會重新來過了。",
            "<25>{#p/kidd}{#f/1}* 我會幫忙的！",
            "<25>{#p/asgore}{#f/6}* 哈哈，小傢伙，\n  說不定你真能幫上忙。\n* 真說不定呢。",
            "<25>{#f/5}* 我們上次見面之後，\n  我就努力在想... \n  這一切究竟是怎麼回事。",
            "<25>{#f/2}* 真的不想承認，可...\n* 他實在陷得太深了。",
            "<25>{#f/2}* 我的兒子...\n  再也回不來了。",
            "<25>{#p/kidd}{#f/4}* 你們聊吧，我先不插嘴了...",
            "<25>{#p/asgore}{#f/1}* 沒關係，沒關係。\n  我快說完了。",
            "<25>{#f/1}* 人類，我剛說的話\n  往心裡去吧。",
            "<25>{#f/1}* 這我唯一的請求了。"
         ],
         asgoreMK2: [
            "<25>{#p/kidd}{#f/2}* 哇... 他好厲害！",
            "<25>{#f/1}* 之前聽別人說過國王的演講。\n  但親眼見到，真的酷斃了！",
            "<25>{#f/3}* 他要是我爹該多好啊..."
         ],
         asriel32: [
            "<25>{#p/asgore}{#f/15}* ...",
            "<25>{#f/16}* 看來我的話\n  你一個字都沒聽進去。",
            "<25>{#p/asriel2}{#f/3}* 那肯定的。",
            "<25>{#p/asgore}{#f/1}* ...",
            "<25>{#f/16}* 你知道嗎...\n  有件事一直困擾著我。",
            "<25>{#f/16}* 現在你不認我這個爹，\n  可你就是我的兒子啊...",
            "<25>{#f/15}* 儘管那是很久以前的事了。",
            "<25>{#p/asriel2}{#f/10}* 你到底想說啥？",
            "<25>{#p/asgore}{#f/12}* ...",
            "<25>{#p/asgore}{#f/12}* 唉... 究竟怎麼了？",
            "<25>{#f/12}* 為什麼... 我面前的這個你... \n  看著這麼陌生？",
            "<26>{#p/asriel2}{#f/6}* 你真想知道嗎？",
            "<26>{#p/asgore}{#f/7}* ...",
            "<26>{#p/asriel2}{#f/7}* 說實話。",
            "<26>{#p/asgore}{#f/1}* ...\n* 呃，不...\n* 我不太確定...",
            "<26>{#p/asriel2}{#f/8}* 切。\n* 這慫樣，才像我認識的\n  艾斯戈爾嘛。",
            "<26>{#f/6}* 只會裝作啥～事兒\n  都沒有的樣子，\n* 我說得沒錯吧？",
            "<26>{#f/7}* 老東西，你猜怎麼著？\n* 現在想亡羊補牢，已經晚嘍。",
            "<26>{#f/8}* （要不是你拿這該死的\n  全息影像糊弄我，現在就可以\n  好好「開導開導」你。）",
            "<26>{#p/asgore}{#f/12}* ...",
            "<26>{#p/asriel2}{#f/8}* ...",
            "<26>{#p/asgore}{#f/15}* 你知道嗎？我常常在想...\n  自己為何淪落到如此地步。",
            "<25>{#f/16}* 家園被毀，愛子離去，\n  只能被束縛在這片土地之上...",
            "<25>{#f/15}* 如今，前哨站危在旦夕，\n  我卻只能眼睜睜地看著。",
            "<25>{#p/asriel2}{#f/15}* 您老這是在向我尋求\n  獨到見解嗎？\n* 真是可悲...",
            "<25>{#f/16}* 就讓我給你個小小的忠告吧：\n* 下輩子，別再挑起戰爭了。",
            "<25>{#p/asgore}{#f/2}* ...",
            "<25>{#f/4}* 你...",
            "<25>{#f/2}* ...",
            "<25>{#f/6}* 艾斯利爾，你猜怎麼著？\n* 我想通了。",
            "<25>{#f/7}* 你說的都對。",
            "<25>{#f/5}* 跟你講理，完全是浪費時間。",
            "<25>{#p/asriel2}{#f/15}* ...哇。\n* 您可終於開竅了。",
            "<25>{#f/16}* 真令我刮目相看啊。",
            "<25>{#p/asgore}{#f/1}* ...",
            "<25>{#p/asriel2}{#f/10}* 然後呢？\n* 這位英明的國王\n  要怎麼行動呢？",
            "<25>{#p/asgore}{#f/15}* 你認真的？",
            "<25>{#f/15}* ...",
            "<25>{#f/16}* 我不知道，艾斯利爾。"
         ],
         asriel33: [ "<25>{#p/asriel2}{#f/10}* ...他這是要發火了？" ],
         
         asriel34: [
            "<25>{#p/asriel2}{#f/3}* 我去處理點事，\n  你倆先作個伴。",
            "<25>{#p/kidd}{#f/3}* 你一會還回來嗎？\n* 還想聽你講更多\n  安黛因 的軼事呢...",
            "<25>{#p/asriel2}{#f/4}* 說到做到。",
            "<25>{#f/1}* 別擔心，我去去就回。",
            "<25>{#p/kidd}{#f/4}* 好吧..."
         ],
         asriel34x: [ "<25>{#p/asriel2}{#f/3}* 停一下。" ],
         asriel35: () =>
            SAVE.flag.n.undying > 0
               ? [
                    [
                       "<25>{#p/asriel2}{#f/6}* Well, here we are again, $(name).",
                       "<25>{#f/7}* ... look, I know Undyne won't die when the kid attacks her.",
                       "<25>{#f/15}* From what I can see, though, it's our best way forward for now.",
                       "<25>{#f/16}* Let's just stick to the script, okay?"
                    ],
                    []
                 ][Math.min(SAVE.flag.n.ga_asrielUndying++, 1)]
               : [
                    [
                       "<25>{#p/asriel2}{#f/1}* 哈囉，$(name)。",
                       "<25>{#f/13}* 想我了沒？",
                       "<25>{#f/4}* 唉，對不起。\n* 剛才我有事得辦，\n  又把你拋下了。",
                       "<25>{#f/3}* 不過我可沒空手而歸。",
                       "<25>{#f/13}* $(name)，我看到你那小夥伴\n  和你告別了...",
                       "<25>{#f/16}* 我想，你肯定\n  感覺老～孤單了。\n  沒說錯吧？"
                    ],
                    []
                 ][Math.min(SAVE.flag.n.ga_asriel35++, 1)],
         asriel37: () => [
            "<25>{#p/asriel2}{#f/1}* 所以呢...\n  我把他請回來了！",
            "<25>{#f/17}* 不管我們想做啥，\n  你都會幫忙的，對吧？",
            "<25>{#p/kidd}{#f/9}* 嗯..."
         ],
         asriel38: () => [
            ...[
               [
                  
                  "<25>{#p/asriel2}{#f/17}* 唔，不錯吧？",
                  "<25>{#f/16}* 你要知道，\n  這小傢伙可不好管。",
                  ...(SAVE.data.n.state_foundry_muffet === 1
                     ? [
                          "<25>{#f/15}* 他總說他想被遺忘...",
                          "<25>{#f/10}* 天吶，$(name)。\n* 我不在的時候，\n  你對他幹了些什麼啊？"
                       ]
                     : [
                          "<25>{#f/15}* 他一直問我你去哪了...",
                          "<25>{#f/10}* 天吶，$(name)。\n* 我不在的時候，\n  你倆一起幹了些啥啊？"
                       ]),
                  "<25>{#f/3}* 呃，不用回答我。\n* 反正他回來了，\n  過去的事不重要。"
               ],
               [ "<25>{#p/asriel2}{#f/3}* Well, at least that's outta the way now." ]
            ][Math.min(SAVE.flag.n.ga_asriel38++, 1)]
         ],
         asriel39: [
            "<25>{#p/asriel2}{#f/8}* 等等。\n* 小傢伙，能幫我個忙嗎？",
            "<25>{#p/kidd}{#f/9}* ...？",
            "<25>{#p/asriel2}{#f/6}* 解開這個謎題。"
         ],
         asriel40: () =>
            SAVE.flag.n.ga_asriel40++ < 1
               ? [
                    "<25>{#p/asriel2}{#f/10}* 完活了？\n* 天吶，這麼快...",
                    "<25>{#f/3}* 看看吶，$(name)。\n  有些怪物總是為情感所困。",
                    "<25>{#f/16}* 像什麼希望，恐懼，同理心...\n  只能葬送他們的潛能，毫無價值。",
                    "<25>{#f/15}* Imagine how much better they'd be if they were all like this."
                 ]
               : [ "<25>{#p/asriel2}{#f/4}* Right on schedule." ],
         asriel41: [ "<25>{#p/asriel2}{#f/3}* 回來吧，小傢伙。" ],
         asriel42: [ "<25>{#p/asriel2}{#f/4}* If we keep this up, we'll be over and done with in no time." ],
         asriel43: () =>
            [
               [
                  "<25>{#p/asriel2}{#f/16}* $(name)，結束了...",
                  "<25>{#f/3}* 我們做到了。",
                  "<25>{#f/2}* 皇家衛隊的隊長...",
                  "<25>{#f/15}* 不會真覺得她有勝算吧？",
                  SAVE.flag.n.undying > 2
                     ? "<25>{#f/8}* 她的確逼我們\n  回溯了幾次時間軸..."
                     : SAVE.flag.n.undying > 1
                     ? "<25>{#f/8}* 她的確逼我們\n  回溯了一次時間軸..."
                     : "<25>{#f/8}* 敢和我們對著幹，她的確很英勇...",
                  "<25>{#f/7}* 不過嘛，你我都清楚，\n  她最終落得個什麼下場。"
               ],
               [
                  "<25>{#p/asriel2}{#f/3}* ...這趟勝利的滋味，\n  要是能有第一次\n  那般甘甜就好了。",
                  "<25>{#f/4}* 唉，好吧。"
               ],
               [ "<25>{#p/asriel2}{#f/6}* Killing Undyne is quickly becoming our hobby." ],
               [ "<25>{#p/asriel2}{#f/6}* ..." ]
            ][Math.min(SAVE.flag.n.ga_asriel43++, 3)],
         asriel44: [ "<25>{#p/asriel2}{#f/13}* Uh, you can take the lead, $(name)." ],
         asriel45: [
            "<25>{#p/asriel2}{#f/13}* Well, well, well...{%40}",
            "<25>{#f/16}* I can't express how grateful I am for all your help.{%40}",
            "<25>{#f/1}* This body might not be perfect, but for what it's worth...?{%40}",
            "<25>{#f/2}* I won't miss being a stupid talking star.{%40}"
         ],
         asrielHug1: [ "<25>{#p/asriel2}{#f/13}* ..." ],
         asrielHug2: [ "<25>{*}{#p/asriel2}{#f/13}* $(name)...{^100}{%}" ],
         asrielHug3: [ "<25>{#p/asriel2}{#f/13}* 呃...\n* 謝謝你，$(name)。" ],
         bombshell1: [
            "<32>{*}{#p/alphys}* 會說話的... 星星...？",
            "<32>{*}* 但那個實驗...\n  不-不是失敗了嗎...",
            "<32>{*}* 莫非..."
         ],
         bombshell2: [ "<32>{*}* 不...", "<32>{*}{@random=1.1/1.1}* 不..." ],
         bombshell3: [
            "<32>{*}{@random=1.1/1.1}* 托麗爾...\n* 衫斯...\n* 帕派瑞斯...",
            "<32>{*}{@random=1.1/1.1}* 安黛因...",
            "<32>{*}{@random=1.1/1.1}* 都-都怪我...",
            "<32>{*}{@random=1.1/1.1}{#i/4}* 啊... 天-天吶..."
         ],
         bombshell4: [ "<32>{*}{@random=1.1/1.1}{#i/5}* 是我害死了你們..." ],
         kidd1: [
            "<25>{#p/kidd}{#f/4}* 他叫你什麼來著？\n* $(name)... 是吧？",
            "<25>{#f/3}* 好，$(name)。\n  這話可別告訴他喔，\n  跟他在一塊...",
            "<25>{#f/4}* 我覺得很不自在。"
         ],
         kiddFinal1: [
            "<25>{#p/kidd}{#f/11}* ...！",
            "<25>{#p/asriel2}{#f/5}* 我就知道。\n* 看到安黛因你很激動吧？",
            "<25>{#p/kidd}{#f/9}* ...",
            "<25>{|}{#f/12}* 我沒有- {%}",
            "<25>{#p/asriel2}{#f/4}* 不用說了。\n* 沒關係的。",
            "<25>{#p/asriel2}{#f/3}* 別忘了我們來幹嘛的就好。"
         ],
         kiddFinal2: () => [
            "<25>{#p/kidd}{#f/9}* 安黛因...",
            "<25>{#p/asriel2}{#f/10}* ...？",
            "<25>{#f/6}* 我猜... 你還有顧慮？",
            "<25>{|}{#p/kidd}{#f/12}* 對不起，我- {%}",
            "<25>{#p/asriel2}{#f/13}* Undyne, schmundyne...\n* She's not the hero you take her for.",
            "<25>{#p/asriel2}{#f/4}* 不... 我是說真英雄\n  可都是些會動腦子的人。",
            SAVE.flag.n.genocide_milestone < 5
               ? SAVE.flag.n.ga_asrielKiddFinal1++ < 1
                  ? "<26>{#f/15}* 比如...\n* 呃，不像她的人。"
                  : "<25>{#f/15}* 她可算不上。"
               : "<26>{#f/3}* 比如艾菲斯。",
            "<25>{#p/kidd}{#f/12}* 她... 真的..."
         ],
         kiddFinal3: () => [
            "<25>{#p/kidd}{#f/10}* ...",
            "<25>{#f/10}* 安黛因不會死的。",
            "<25>* 就算讓我去，她...",
            "<25>* She'll be fine.\n* She'll be strong...",
            ...(SAVE.flag.n.ga_asrielKiddFinal3a < 1
               ? [ "<25>{#p/asriel2}{#f/8}* （對，儘管說，好讓你好受點...）" ]
               : []),
            "<25>{#p/kidd}{#f/9}* 因為...\n* 她... 比其他怪物都強...",
            "<25>{#f/12}* 她充滿了{@fill=#ff0}決心{@fill=#fff}...",
            ...(SAVE.flag.n.ga_asrielKiddFinal3a++ < 1
               ? [ "<25>{#p/asriel2}{#f/10}* 呃... 沒事吧？\n* （我的天，這小傢伙\n  說什麼胡話呢？）" ]
               : SAVE.flag.n.undying > 0 && SAVE.flag.n.ga_asrielKiddFinal3b++ < 1
               ? [ "<25>{#p/asriel2}{#f/8}* （他怎麼知道？）" ]
               : [ "<25>{#p/asriel2}{#f/10}* ..." ])
         ],
         kiddFinal4: [ "<32>{#p/asriel2}{#f/6}* 她在那。" ],
         kiddFinal5: [ "<32>{#f/6}* 給我上。", "<32>{#f/7}* ..." ],
         kiddFinal6: [ "<32>{*}{#p/asriel2}{#f/14}{@random=1.1/1.1}{@fill=#f00}* 還不快去。{%100}" ],
         kiddFinal7: [
            "<25>{#p/kidd}{#f/12}* ...",
            "<25>{#p/undyne}{#f/13}* 搞什麼？\n* 你來這幹嘛！？",
            "<25>{|}{#f/13}* 還有，你眼睛怎麼- {%}"
         ]
      },
      goatreaction: () =>
         [
            [ "<25>{#p/asriel2}{#f/15}* 小心點，$(name)。" ],
            [ "<25>{#p/asriel2}{#f/15}* $(name)..." ],
            [ "<25>{#p/asriel2}{#f/15}* 開玩笑嗎？" ],
            [ "<25>{#p/asriel2}{#f/15}* 我們可不想死在這，\n  $(name)..." ],
            [ "<25>{#p/asriel2}{#f/16}* 我有點擔心了。" ],
            [ "<25>{#p/asriel2}{#f/8}* 你是眼瞎還是有什麼毛病？" ],
            [ "<25>{#p/asriel2}{#f/7}* 別鬧了！" ],
            [ "<25>{#p/asriel2}{#f/7}* ..." ]
         ][Math.min(SAVE.flag.n.ga_asrielEpic++, 7)],
      hapstadoor1: () =>
         SAVE.data.b.svr ? [ "<32>{#p/human}* (But you didn't have the key.)" ] : [ "<32>{#p/basic}* 鎖住了。" ],
      hapstadoor2: [ "<32>{#p/human}* (You use the Mystery Key.)" ],
      jumpsuit1: [
         "<32>{#p/human}* （你撿到了一件飛行服。）",
         choicer.create("* （穿上飛行服嗎？）", "是", "否")
      ],
      jumpsuit2: [ "<32>{#p/human}* （你帶的東西太多，裝不下它了。）" ],
      kiddStatue: [
         "<25>{#p/kidd}{#f/1}* Yo, I remember this place!",
         "<25>{#f/3}* My, uh, Mom took me here one time, haha.",
         "<25>{#f/1}* If we both stand on a switch, it lights up.\n* Isn't that awesome!?"
      ],
      kitchencall: () => [
         "<32>{#p/event}* Ring, ring...",
         "<18>{#p/papyrus}HUMAN!\nI WAS THINKING.",
         ...(SAVE.data.n.plot_date < 1
            ? [
                 SAVE.data.b.flirt_papyrus
                    ? "<18>WE SHOULD TOTALLY DATE SOMETIME!"
                    : "<18>WE SHOULD TOTALLY HANG OUT SOMETIME!",
                 "<18>{#f/5}AND BESIDES... I HAVEN'T SEEN YOU IN A WHILE.",
                 "<18>{#f/0}IT'LL BE GOOD TO CATCH UP!",
                 "<18>{#f/0}WELL, MEET ME AT MY HOUSE WHEN YOU'RE READY."
              ]
            : [
                 "<18>SO, YOU KNOW HOW WE SPENT TIME TOGETHER?",
                 "<18>{#f/5}WELL... I THINK UNDYNE NEEDS TO DO THE SAME.",
                 "<18>{#f/4}BESIDES, I BET YOU TWO WOULD BE GREAT FRIENDS...",
                 SAVE.data.b.flirt_papyrus ? "<18>{#f/6}... JUST FRIENDS!" : "<18>{#f/0}JUST LIKE WE WERE!",
                 "<18>{#f/0}WELL, MEET ME AT UNDYNE'S HOUSE WHEN YOU'RE READY."
              ]),
         "<18>{#f/9}THIS IS GOING TO BE FANTASTIC!",
         "<32>{#s/equip}{#p/event}* Click..."
      ],
      madfish1: () => [
         ...(SAVE.flag.n.ga_asrielUndyneX++ < 1
            ? [ "<25>{#p/asriel2}{#f/8}* 接下來，又到了\n  聽高談闊論的時間了..." ]
            : []),
         "<32>{#p/undyne}* 站住。",
         "<32>{#x1}* 真以為自己能\n  大搖大擺地濫殺無辜，\n  沒人管得了你們？",
         "<32>* 我告訴你，兩個小混蛋：",
         "<32>* 你們的死期到了！",
         "<32>{#x2}* 以為自己勉勉強強\n  過了Doge這關就了不起了？\n  聽好了...",
         "<32>{#x3}* 只要剩下的特戰隊成員\n  逮到你們，就等著受苦吧。"
      ],
      madfish2: () =>
         SAVE.flag.n.genocide_milestone < 5
            ? [
                 "<32>* 無話可說？\n* 呵。",
                 "<32>{#x4}* 眼下，我可沒閒工夫陪你們玩。\n  我得去幫艾菲斯疏散民眾。",
                 "<32>{#x5}* 呋呼呼...\n* 在臨死之前好好掙扎吧。\n* 你活不長的。"
              ]
            : [
                 "<32>* 無話可說？\n* 呵。",
                 "<32>{#x4}{|}* 眼下，我可沒\n  閒工夫陪你們玩。\n  我得去幫Alphys- {%}",
                 "<25>{#x5}{#p/asriel2}{#f/8}* 跟你說，\n  艾菲斯可比你強多了。",
                 "<25>{#f/2}* 我早就知道\n  這條時間軸的後續發展了。",
                 "<25>{#f/1}* 和她比起來，\n  你的攻擊屁都不是。",
                 "<32>{#p/undyne}* 真的嗎？",
                 "<32>* ...好吧。\n* 即便如此，你還是得先過我這一關。",
                 "<32>{#p/asriel2}{#f/6}* 喔，相信我。\n* 我們肯定能打敗你。",
                 "<32>{#p/undyne}* 走著瞧。"
              ],
      madfish3: () =>
         SAVE.flag.n.genocide_milestone < 5
            ? SAVE.flag.n.ga_asrielMadfish++ < 1
               ? [ "<25>{#p/asriel2}{#f/8}* 她愛咋咋地。" ]
               : [ "<25>{#p/asriel2}{#f/8}* ..." ]
            : [ "<25>{#p/asriel2}{#f/8}* 切。" ],
      muffet1: () =>
         badSpider()
            ? [ "<32>{#p/basic}* Ahuhuhuhu...", "<32>* Tell her she should increase my payout next time." ]
            : SAVE.data.b.flirt_muffet
            ? [ "<32>{#p/basic}* Ahuhuhuhu...", "<32>* Let's just pretend this never happened, shall we, dearies?" ]
            : [ "<32>{#p/basic}* Ahuhuhuhu...", "<32>* That was fun!\n* See you again, dearies!" ],
      muffet2: () =>
         badSpider()
            ? [ "<25>{#p/kidd}{#f/4}* Yo... that was weird..." ]
            : SAVE.data.b.flirt_muffet
            ? [ "<25>{#p/kidd}{#f/4}* Yo... at least it's over now?" ]
            : [ "<25>{#p/kidd}{#f/4}* Yo... that was not fun at ALL." ],
      muffetGeno1: () =>
         SAVE.data.n.state_foundry_kidddeath < 1
            ? [ "<25>{#p/kidd}{#f/4}* 呦...\n* 剛發生什麼了？", "<25>* 她是... {%}" ]
            : [
                 "<25>{#p/kidd}{#f/4}* 喲... 她又...",
                 "<25>* 為什麼怪物都這麼消失呢？{%}"
              ],
      muffetGeno1x: [ "<32>{#p/basic}* 她死了。" ],
      muffetGeno2: [
         "<25>{#p/kidd}{#f/7}* 不-不...\n* 我不是故意...",
         "<25>{#f/7}* 她-她沒... 不會的...\n* 她...",
         "<25>{#f/4}* 不，這...\n* 這不可-可能...",
         "<25>{#f/4}* 她只是...",
         "<25>{#f/8}* 只是..."
      ],
      muffetGeno3: [ "<25>{#f/8}* ...", "<25>{#f/8}* ...我幹了什麼..." ],
      mushroomdance1: [ "<32>{#p/basic}* Mushroom dance\n* Mushroom dance\n* Whatever could it mean" ],
      mushroomdance2: () =>
         SAVE.data.n.plot === 72
            ? SAVE.data.b.f_state_mushroomdanceEpilogue
               ? [ "<32>{#p/basic}* It means the future is very uncertain indeed." ]
               : SAVE.data.b.f_state_mushroomdanceGeno
               ? [
                    "<32>{#p/basic}* It means I'm going free.\n* They're going to transplant me to the new homeworld.",
                    "<32>* But why should you care?\n* Unless...",
                    "<32>* ... unless you have absolved yourself of sin?"
                 ]
               : [
                    "<32>{#p/basic}* It means I'm going free.\n* They're going to transplant me to the new homeworld.",
                    "<32>{#p/basic}* Goodbye, old outpost, for you have been my abode..."
                 ]
            : world.meanie || SAVE.data.s.state_foundry_deathroom === 'f_village' // NO-TRANSLATE

            ? SAVE.data.b.f_state_mushroomdanceGeno
               ? [ "<32>{#p/basic}* It means... don't talk to me." ]
               : [
                    "<32>{#p/basic}* It means you've lived a life of sin.",
                    ...(SAVE.data.b.f_state_mushroomdance ? [ "<32>* Wait.\n* Weren't you nicer before?" ] : [])
                 ]
            : SAVE.data.b.f_state_mushroomdance
            ? [
                 "<32>{#p/basic}* If only I could see the galaxy beyond.",
                 "<32>* But even if the force field was destroyed, how would I leave...?"
              ]
            : [
                 "<32>{#p/basic}* It symbolizes my inner torment, trapped here by my hyphae.",
                 "<32>* My struggle to pull away.\n* My struggle to escape.\n* But alas, to no avail."
              ],
      musicbox: [
         "<18>{#p/asriel1}{#i/4}It sounds like it came from over here...",
         "<18>Oh! You've crash- landed, haven't you...",
         "<18>Are you okay?",
         "<18>Here, get up...",
         "<18>...",
         "<18>$(name), huh?",
         "<18>That's a nice name.",
         "<18>{*}{#x1}{#p/asriel3}{#i/18}My name is   {%}"
      ],
      napcomputer1: pager.create(0, () => [
         SAVE.data.b.svr
            ? "<32>{#p/human}* (You move towards the computer...)"
            : "<32>{#p/basic}* 電腦上打開了一個音樂分享軟體。",
         choicer.create("* （看一眼嗎？）", "是", "否")
      ]),
      napcomputer2: [ "<32>{#p/human}* （你不想看。）" ],
      napcomputer3: {
         a: () => [
            "鎂塔靜聽 - 日光漣漪.kwac",
            "鎂塔靜聽 - 星河渡歌.kwac",
            SAVE.data.n.plot === 72 ? "緣聚緣散.kwac" : "惡狼.kwac",
            "喵喵航天行 - 主題曲.kwac",
            !world.genocide && SAVE.data.n.state_starton_papyrus === 1 ? "帕派瑞斯求包養.kwac" : "滑腔動調.kwac",
            "群星之歌.kwac"
         ],
         b: () => [
            "酷炫骷髏95",
            "酷炫骷髏95",
            SAVE.data.n.plot === 72 ? "_Sp4ceAdv3ntur3r_" : "_K1ll3rMann3qu1n_",
            "艾菲斯",
            "懶骨.",
            "（遊客）"
         ]
      },
      napcomputer4: {
         a: () => [ "鬼怪舞曲.kwac", "鬼怪混音集.kwac" ],
         b: () => [ "納普斯特22", "納普斯特22" ]
      },
      noTem: [ "<32>{#p/tem}* oh no, it's a... FISHES!!!" ],
      noShroom: [ "<32>{#p/basic}* Watch out\n* Watch out\n* There's a fish running about" ],
      noTortoise: () =>
         world.population === 0 ? [ "<32>{#p/basic}* Wa ha ha..." ] : [ "<32>{#p/basic}* Run while ya still can, kid!" ],
      npc86x: () =>
         SAVE.data.b.svr
            ? [ "<32>{#p/human}* (The robot appears to be asleep.)" ]
            : [ "<32>{#p/basic}* It's in sleep mode." ],
      npc86z: () =>
         [
            [
               "<32>{#p/basic}{#npc/a}* Familiar energy signature detected in combat.",
               "<32>{#p/basic}* Recommended action... run."
            ],
            [
               "<32>{#p/basic}{#npc/a}* Familiar energy signature detected in combat.",
               "<32>{#p/basic}* Recommended action... stand still."
            ],
            [
               "<32>{#p/basic}{#npc/a}* Familiar energy signature detected in combat.",
               "<32>{#p/basic}* Recommended action... unknown."
            ],
            [
               "<32>{#p/basic}{#npc/a}* Familiar energy signature detected in combat.",
               "<32>{#p/basic}* Recommended action... hide."
            ]
         ][(SAVE.data.n.state_foundry_npc86_feelings || 3) - 1],
      npc86a: () => [
         "<32>{#p/basic}{#npc/a}* Foreign energy signature detected.",
         "<32>* Name... unknown.",
         "<32>* Relationship status... stranger.",
         SAVE.data.n.plot < 42.1 ? "<32>* Last interaction... none." : "<32>* Last interaction... observed in battle.",
         "<32>* Processing...\n* Processing...\n* Processing...",
         "<32>* Hello, stranger.\n* I am eight-six, the all- purpose delivery bot.",
         "<32>* It is far from my intended function, but would you like to complete a survey today?",
         choicer.create("* （你要怎麼回答？）", "是", "否")
      ],
      npc86b: [
         "<32>{#p/basic}{#npc/a}* Thank you.\n* The question is as follows.",
         "<32>* \"Out of the colors red, green, and blue, which do you prefer?\"",
         choicer.create("* （你要怎麼回答？）", "Red", "Green", "Blue", "Not sure")
      ],
      npc86c: [
         "<32>{#p/basic}* Thank you.\n* Your choice will be inscribed deeply into my memory bank.",
         "<32>{#p/basic}{#npc/a}* Your relationship status is now set to \"acquaintance.\""
      ],
      npc86d: () => [
         "<32>{#p/basic}{#npc/a}* Familiar energy signature detected.",
         "<32>* Name... unknown.",
         "<32>* Relationship status... acquaintance.",
         SAVE.data.n.state_foundry_npc86 === 1
            ? "<32>* Last interaction... survey declined."
            : "<32>* Last interaction... survey taken.",
         "<32>* Processing...\n* Processing...\n* Processing...",
         "<32>* Hello again, acquaintance.\n* How is your day today?",
         choicer.create("* （你要怎麼回答？）", "Good", "Bad", "Neutral", "Not sure")
      ],
      npc86e: () => [
         ...[
            [ "<32>{#p/basic}{#npc/a}* Good?\n* That is good to hear." ],
            [ "<32>{#p/basic}{#npc/a}* Bad?\n* I hope things get better." ],
            [ "<32>{#p/basic}{#npc/a}* Neutral?\n* That is understandable." ],
            [ "<32>{#p/basic}{#npc/a}* Not sure?\n* That is... understandable." ]
         ][choicer.result],
         "<32>{#p/basic}{#npc/a}* Your relationship status is now set to \"friend.\""
      ],
      npc86f: () => [
         "<32>{#p/basic}{#npc/a}* Familiar energy signature detected.",
         "<32>* Name... unknown.",
         "<32>* Relationship status... friend.",
         "<32>* Last interaction... asked about mood.",
         "<32>* Processing...\n* Processing...\n* Processing...",
         [
            "<32>* Hello again, friend.\n* I hope your mood has remained since our last interaction.",
            "<32>* Hello again, friend.\n* I hope your mood has improved since our last interaction.",
            "<32>* Hello again, friend.\n* Based on our last interaction...",
            "<32>* Hello again, friend.\n* Based on our last interaction..."
         ][SAVE.data.n.state_foundry_npc86_mood - 1],
         "<32>* It appears you have a great deal of interest towards me.",
         "<32>* What emotion do you most commonly feel about me?",
         choicer.create("* （你要怎麼回答？）", "Love", "Disgust", "None", "Not sure")
      ],
      npc86g: () =>
         [
            [
               "<32>{#p/basic}{#npc/a}* ...",
               "<32>* Your relationship status is now set to \"bestie.\"",
               "<32>* I love you too, bestie."
            ],
            [
               "<32>{#p/basic}{#npc/a}* ...",
               "<32>* Your relationship status is now set to \"enemy.\"",
               "<32>* I have no further need for you, enemy."
            ],
            [
               "<32>{#p/basic}{#npc/a}* ...",
               "<32>* Your relationship status is now set to \"acquaintance.\"",
               "<32>* Perhaps this was not a good idea, acquaintance."
            ],
            [
               "<32>{#p/basic}{#npc/a}* ...",
               "<32>* Your relationship status is unchanged.",
               ...(SAVE.data.n.state_foundry_npc86 === 5 && SAVE.data.n.state_foundry_npc86_feelings === 4
                  ? [ "<32>* Expected reply to all questions is now set to \"Not sure.\"" ]
                  : [])
            ]
         ][choicer.result],
      npc86h: () => [
         "<32>{#p/basic}{#npc/a}* Familiar energy signature detected.",
         "<32>* Name... unknown.",
         [
            "<32>* Relationship status... bestie.",
            "<32>* Relationship status... enemy.",
            "<32>* Relationship status... acquaintance",
            "<32>* Relationship status... friend."
         ][SAVE.data.n.state_foundry_npc86_feelings - 1],
         SAVE.data.b.f_state_done86
            ? [
                 "<32>* Last interaction... showed appreciation.",
                 "<32>* Last interaction... declined conversation.",
                 "<32>* Last interaction... made small talk.",
                 "<32>* Last interaction... gave advice."
              ][SAVE.data.n.state_foundry_npc86_feelings - 1]
            : "<32>* Last interaction... asked about feelings.",
         "<32>* Processing...\n* Processing...\n* Processing...",
         [
            [
               "<32>* Hello again, bestie.\n* I hope you are doing well.",
               "<32>* Hello again, bestie.\n* I love you very much.",
               "<32>* Hello again, bestie.\n* It is good to see you today."
            ],
            [
               "<32>* ...\n* Do not speak to me again.",
               "<32>* ...\n* Do not speak to me again.",
               "<32>* ...\n* Do not speak to me again."
            ],
            [
               "<32>* Hello again, acquaintance.\n* The factory is musty today.",
               "<32>* Hello again, acquaintance.\n* The starlight is glimmering today.",
               "<32>* Hello again, acquaintance.\n* The steam is humid today."
            ],
            [
               "<32>* Hello again, friend.\n* Remember to eat something.",
               "<32>* Hello again, friend.\n* Remember to take breaks.",
               "<32>* Hello again, friend.\n* Remember to talk things out."
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
                               "<32>{#p/basic}{#s/spiderLaugh}{#npc/a}* No matter how many monsters you've bullied, your payment to me is all that matters~"
                            ]
                          : [
                               "<32>{#p/basic}{#s/spiderLaugh}{#npc/a}* Your payment to me means more than you can possibly imagine~"
                            ]),
                       "<32>* Thank you for your generous donation, dearie~",
                       "<32>* If you or your little armless friend need anything, you just let me know~"
                    ]
                  : [
                       "<32>{#p/basic}{#s/spiderLaugh}{#npc/a}* It's a shame I wasn't able to capture you the first time around~",
                       ...(world.population < 6 && world.bullied
                          ? [ "<32>* A little bully like you would have been a wonderful prize~" ]
                          : [ "<32>* Oh well~\n* Now that the force field's gone, I won't have to~" ])
                    ],
            [
               "<32>{#p/basic}{#s/spiderLaugh}{#npc/a}* Oh, dearie~\n* When the spider clans arrive on the new homeworld...",
               "<32>* There'll be so many natural resouces to exploit~",
               "<32>* We're going to build the largest tea empire this new world has ever seen~"
            ],
            [
               "<32>{#p/basic}{#s/spiderLaugh}{#npc/a}* Oh, and if I can help it...",
               "<32>* It'll be the only tea empire this new world will ever see~\n* Ahuhuhu~"
            ],
            [ "<32>{#p/basic}{#s/spiderLaugh}{#npc/a}* Ahuhuhu~" ]
         ),
         f_dogenpc: pager.create(
            0,
            () =>
               SAVE.data.n.state_foundry_doge === 2
                  ? [
                       ...(world.population < 6 && world.bullied
                          ? [
                               "<32>{#p/basic}{#npc/a}* I know you have been violent, but I appreciate the compassion you have shown me."
                            ]
                          : [ "<32>{#p/basic}{#npc/a}* Thank you for the compassion you have shown me." ]),
                       "<32>* It is what I needed to see the error in my choice of career.",
                       "<33>* Still, I'm keeping the uniform.\n* It suits me well."
                    ]
                  : [
                       "<32>{#p/basic}{#npc/a}* I regretted letting you get past me, but after what you've done, I'm fine with that.",
                       ...(world.population < 6 && world.bullied
                          ? [ "<32>* I shall overlook your rather... violent tendencies for the moment." ]
                          : [ "<32>* I shall recall your name for many centuries to come." ])
                    ],
            [
               "<32>{#p/basic}{#npc/a}* I do apologize for mis- judging you, Frisk.",
               "<32>* As a member of the ELITE squad, it was difficult for me to see the good in you."
            ],
            [
               "<32>* Well.\n* There is much for me to reflect on, now.",
               "<32>* I would appreciate if you gave me the time and space to do so.",
               "<33>* Thank you for the conversation."
            ],
            [ "<32>{#p/basic}{#npc/a}* Until next time." ]
         ),
         f_clamgirl: pager.create(
            0,
            () =>
               SAVE.data.n.plot === 72
                  ? [
                       "<32>{#p/basic}{#npc/a}* How silly...\n* As soon as I choose to stay somewhere, we all have to go.",
                       "<32>* The irony of the situation has not escaped me.\n* Still, it is for the best.",
                       "<32>* On our new homeworld...\n* I'm sure to find lots of new neighbors for myself."
                    ]
                  : SAVE.data.n.plot === 47.2
                  ? [ "<32>{#p/basic}{#npc/a}* Er, she's still after you..." ]
                  : SAVE.data.s.state_foundry_deathroom === 'f_hub' // NO-TRANSLATE

                  ? [ "<32>{#p/basic}{#npc/a}* You should never have come." ]
                  : SAVE.data.n.state_foundry_undyne === 1
                  ? [
                       "<32>{#p/basic}{#npc/a}* I sense a disturbance in the nearby aura...",
                       "<32>* You really shouldn't have left that girl alone."
                    ]
                  : SAVE.data.n.state_foundry_undyne === 2
                  ? [
                       "<32>{#p/basic}{#npc/a}* I sense a disturbance in the nearby aura...",
                       "<32>* You really should have left that girl alone."
                    ]
                  : 2 <= SAVE.data.n.plot_date
                  ? [
                       "<32>{#p/basic}{#npc/a}* I sense a disturbance in the nearby aura...",
                       "<32>* You and my new neighbor are getting along, I see."
                    ]
                  : SAVE.data.n.plot > 47.2 && SAVE.data.n.plot_date > 1
                  ? world.trueKills > 0
                     ? [ "<32>{#p/basic}{#npc/a}* Papyrus is waiting nearby.", "<32>* Isn't he brave?" ]
                     : [ "<32>{#p/basic}{#npc/a}* Papyrus is waiting nearby.", "<32>* Won't you meet my new neighbor?" ]
                  : [
                       "<32>{#p/basic}{#npc/a}* I'm visiting the Foundry from the Citadel, by the way.",
                       "<32>* There, I hardly knew anyone, but here, I've met several friendly neighbors already.",
                       "<32>* I don't think I'll be leaving here any time soon."
                    ],
            () =>
               SAVE.data.n.plot === 72
                  ? [ "<32>{#p/basic}{#npc/a}* Won't that be splendid?" ]
                  : SAVE.data.n.plot === 47.2
                  ? [ "<32>{#p/basic}{#npc/a}* Er, she's still after you..." ]
                  : SAVE.data.n.state_foundry_undyne > 0
                  ? [ "<32>{#p/basic}{#npc/a}* ..." ]
                  : 2 <= SAVE.data.n.plot_date
                  ? [ "<32>{#p/basic}{#npc/a}* Good neighbors have been quite difficult to find." ]
                  : SAVE.data.n.plot > 47.2 && SAVE.data.n.plot_date > 1
                  ? world.trueKills > 0
                     ? [ "<32>{#p/basic}{#npc/a}* ..." ]
                     : [
                          "<32>{#p/basic}{#npc/a}* Go on. She won't bite.\n* She might throw a few spears at you, though."
                       ]
                  : [ "<32>{#p/basic}{#npc/a}* Having neighbors is nice." ]
         ),
         f_echo1: () =>
            world.runaway
               ? [
                    "<32>{#s/echostart}{#p/event}{#npc/a}* 訊號開始...",
                    "<32>{#p/undyne}* Citizens of the Foundry...",
                    "<32>* ... you should all know what happened to you by now.",
                    "<32>* It's time to go, and you damn well know it.",
                    "<32>* So let's get going.",
                    "<32>{#s/echostop}{#p/event}{#npc}* 訊號終止。"
                 ]
               : SAVE.data.n.plot === 72
               ? [
                    "<32>{#s/echostart}{#p/event}{#npc/a}* 訊號開始...",
                    "<32>{#p/undyne}* Listen up, everyone!\n* The force field's gone!\n* We can all go home!",
                    "<32>* If you're still down there dawdling by the time we leave...",
                    "<32>* Then... we'll probably just come back for you later.",
                    "<32>* But don't make us do that!",
                    "<32>{#s/echostop}{#p/event}{#npc}* 訊號終止。"
                 ]
               : geno()
               ? [
                    "<32>{#s/echostart}{#p/event}{#npc/a}* 訊號開始...",
                    "<32>{#p/undyne}* 鑄廠居民聽好！\n* 趁現在，快給我逃！",
                    world.genocide
                       ? "<32>* 有殺人狂到達鑄廠，還未落網！\n  你要是碰著了，就是死路一條！"
                       : "<32>* 有殺人狂到達鑄廠，還未落網！\n  你要是碰著了，就是死路一條！",
                    "<32>* 不聽勸，後果自負！！",
                    "<32>{#s/echostop}{#p/event}{#npc}* 訊號終止。",
                    ...(world.goatbro && SAVE.flag.n.ga_asrielEcho1++ < 1
                       ? [ "<25>{#p/asriel2}{#f/2}* 謝了，安黛因。\n* 要是還動不動碰上怪物，\n  我就真吃不消了。" ]
                       : [])
                 ]
               : [
                    "<32>{#s/echostart}{#p/event}{#npc/a}* 訊號開始...",
                    "<32>{#p/basic}* 我是鑄廠員工Skrubby。\n* 麻煩你檢查一下管道有無洩露。",
                    "<32>{#p/alphys}* 喔- 呃... 抱-抱歉哈！\n* 我現在稍微有點忙！",
                    "<32>{#p/basic}* 好吧。\n* 我去叫Raddy來幫忙。\n* 真是謝謝您了。",
                    "<32>{#p/alphys}* 不-不用謝？？",
                    "<32>{#s/echostop}{#p/event}{#npc}* 訊號終止。"
                 ],
         f_echo2: () =>
            world.runaway
               ? [
                    "<32>{#s/echostart}{#p/event}{#npc/a}* 訊號開始...",
                    "<32>{#p/basic}* Hey... everything's gonna be okay, kiddo.",
                    "<32>* (Gerson?)\n* (Is that you again?)",
                    "<32>* Oh, I dunno.\n* Is that really you, Burgie?\n* Wa ha ha.",
                    "<32>* (Yeah, yeah.)\n* (I'm just a little scared... like everyone else.)",
                    "<32>{#s/echostop}{#p/event}{#npc}* 訊號終止。"
                 ]
               : SAVE.data.n.plot === 72
               ? [
                    "<32>{#s/echostart}{#p/event}{#npc/a}* 訊號開始...",
                    "<32>{#p/basic}* Well, you heard her!\n* Time for us to go, kiddo!",
                    "<32>{#p/basic}* ... wa ha ha.\n* In truth, we've still got the rest of the day.",
                    "<32>{#p/basic}* (Yeah, I'm gonna hang out here for a bit longer.)",
                    "<32>{#p/basic}* (Who knows?)\n* (Maybe Frisk'll come by.)",
                    "<32>{#s/echostop}{#p/event}{#npc}* 訊號終止。"
                 ]
               : geno()
               ? [
                    "<32>{#s/echostart}{#p/event}{#npc/a}* 訊號開始...",
                    "<32>{#p/basic}* 嘿，小子。\n  聽到廣播裡的警告了嗎？",
                    "<32>* （小點聲！）\n* （...所以說，\n  有個人類什麼的過來了，是嗎？）",
                    "<32>* 毫無疑問，是的。",
                    "<32>* （難怪呢，\n  不過強制疏散真的很煩人。）",
                    "<32>{#s/echostop}{#p/event}{#npc}* 訊號終止。"
                 ]
               : [
                    "<32>{#s/echostart}{#p/event}{#npc/a}* 訊號開始...",
                    "<32>{#s/phone}* Ring, ring...",
                    "<32>{#p/basic}* Hey kiddo!\n* Just wanted to check in on how that new shop of yours is.",
                    "<32>* I hear you're doin' pretty well!",
                    "<32>* (...)\n* (It's kinda hard for me to talk right now.)",
                    "<32>{#s/echostop}{#p/event}{#npc}* 訊號終止。"
                 ],
         f_echo3: () =>
            world.runaway
               ? [
                    "<32>{#s/echostart}{#p/event}{#npc/a}* 訊號開始...",
                    "<32>{#p/basic}* I hear ya.\n* Hey, maybe it'd help if ya told me what ya saw.",
                    "<32>* From your point of view.",
                    "<32>* (Well...)\n* (It all started when...)",
                    "<32>* (I was at the force field with a bunch of others.)",
                    "<32>{#s/echostop}{#p/event}{#npc}* 訊號終止。"
                 ]
               : SAVE.data.n.plot === 72
               ? [
                    "<32>{#s/echostart}{#p/event}{#npc/a}* 訊號開始...",
                    "<32>{#p/basic}* That'd be a treat!\n* I know I'd sure as hell like to see 'em.",
                    "<32>{#p/basic}* It's kind of hard to imagine, isn't it?\n* Being saved by a human?",
                    "<32>{#p/basic}* (I know, right?)\n* (And those other humans... they're alive, too.)",
                    "<32>{#p/basic}* (What a crazy day it's been.)",
                    "<32>{#s/echostop}{#p/event}{#npc}* 訊號終止。"
                 ]
               : geno()
               ? [
                    "<32>{#s/echostart}{#p/event}{#npc/a}* 訊號開始...",
                    "<32>{#p/basic}* 撤離？沒門！\n* 我敢保證，待在原地，也沒人來傷你。",
                    "<32>* （呃...）\n* （你明知道我正身處危險之中，\n  為什麼還這麼說？）",
                    "<32>* 或許處境確實不利，\n  但是，我碰巧知道有個東西...",
                    "<32>* 它能保護我們這些小商販免受危險。",
                    "<32>{#s/echostop}{#p/event}{#npc}* 訊號終止。"
                 ]
               : [
                    "<32>{#s/echostart}{#p/event}{#npc/a}* 訊號開始...",
                    "<32>{#p/basic}* Huh?\n* What's the problem?",
                    "<32>* (... don't you know?)",
                    "<32>* Wait...",
                    "<32>* (It's THAT menace.)",
                    "<32>{#s/echostop}{#p/event}{#npc}* 訊號終止。"
                 ],
         f_echo4: () =>
            world.runaway
               ? [
                    "<32>{#s/echostart}{#p/event}{#npc/a}* 訊號開始...",
                    "<32>{#p/basic}* (We were all there to see the force field be taken down.)",
                    "<32>* (We'd been told something like that could happen, but when we got there...)",
                    "<32>* (The same talking star who told us to go there was holding monsters hostage.)",
                    "<32>* Little star, huh?\n* I have heard stories of a little yellow star...",
                    "<32>{#s/echostop}{#p/event}{#npc}* 訊號終止。"
                 ]
               : SAVE.data.n.plot === 72
               ? [
                    "<32>{#s/echostart}{#p/event}{#npc/a}* 訊號開始...",
                    "<32>{#p/basic}* (I wonder what we'll do when we arrive on the new homeworld.)",
                    "<32>{#p/basic}* (Maybe the two of us could open a shop together!)\n* (You'd sell the trinkets...)",
                    "<32>{#p/basic}* And you'd sell the food.\n* I like the way you think about it, kiddo!",
                    "<32>{#p/basic}* But it'd likely be better if one of us sells, and the other tracks the finances.",
                    "<32>{#s/echostop}{#p/event}{#npc}* 訊號終止。"
                 ]
               : geno()
               ? [
                    "<32>{#s/echostart}{#p/event}{#npc/a}* 訊號開始...",
                    "<32>{#p/basic}* （啥？）\n* （蠢到家了。）",
                    "<32>* 這可是真事！\n* 想聽的話，現在就給你\n  好好講講它的來龍去脈！",
                    "<32>* （呃，不-不必了！）\n* （我相信你，老-老人家！）",
                    "<32>* 哇哈哈！\n* 每天都能收穫新知，挺不錯的吧！",
                    "<32>{#s/echostop}{#p/event}{#npc}* 訊號終止。"
                 ]
               : [
                    "<32>{#s/echostart}{#p/event}{#npc/a}* 訊號開始...",
                    "<32>{#p/basic}* ... wa ha ha.\n* It's the fella who goes around selling steak, ain't it?",
                    "<32>* (What am I gonna do!)",
                    "<32>* Shhhh.\n* It's alright, kiddo.\n* That shop's got a backdoor!",
                    "<32>* (It does!?!?)",
                    "<32>{#s/echostop}{#p/event}{#npc}* 訊號終止。"
                 ],
         f_echo5: () =>
            world.runaway
               ? [
                    "<32>{#s/echostart}{#p/event}{#npc/a}* 訊號開始...",
                    "<32>{#p/basic}* (Well, he's real.)\n* (And we thought we'd helped the human beat him...)",
                    "<32>* (But he just ended up taking everyone's SOULs anyway.)",
                    "<32>* That must've been the bright light I saw...\n* I just couldn't shake it.",
                    "<32>* (Yeah, and it was even brighter at the source.)\n* (We didn't stand a chance.)",
                    "<32>{#s/echostop}{#p/event}{#npc}* 訊號終止。"
                 ]
               : SAVE.data.n.plot === 72
               ? [
                    "<32>{#s/echostart}{#p/event}{#npc/a}* 訊號開始...",
                    "<32>{#p/basic}* (Ha. We'll take turns, then.)",
                    "<32>{#p/basic}* (Doing the same thing all the time would get boring, don't you think?)",
                    "<32>{#p/basic}* Wa ha ha.\n* Maybe I'm just old, but I don't mind doing finances.",
                    "<32>{#p/basic}* You can have the fun job all to yourself, kiddo!",
                    "<32>{#s/echostop}{#p/event}{#npc}* 訊號終止。"
                 ]
               : geno()
               ? [
                    "<32>{#s/echostart}{#p/event}{#npc/a}* 訊號開始...",
                    "<32>{#p/basic}* （看來，我們註定要在這裡\n  度過餘生了...）",
                    "<32>* 嘿，別小瞧皇家守衛！\n* 他們各個都是驍勇善戰的猛士！",
                    "<32>* （你有把握他們能阻止那人類嗎？）",
                    "<32>* 那個人類小孩嗎？\n* 我不確定，感覺難度挺大的。",
                    "<32>{#s/echostop}{#p/event}{#npc}* 訊號終止。",
                    ...(world.goatbro && SAVE.flag.n.ga_asrielEcho4++ < 1
                       ? [ "<25>{#p/asriel2}{#f/5}* 嘻嘻嘻..." ]
                       : [])
                 ]
               : [
                    "<32>{#s/echostart}{#p/event}{#npc/a}* 訊號開始...",
                    "<32>{#p/basic}* (Woah...)\n* (This door leads to a balcony on the outside!)",
                    "<32>{#p/basic}* (I swear the stars have never looked this bright...)",
                    "<32>* Huh.\n* Must be a distortion field or something.",
                    "<32>* Take a minute, and enjoy it while ya can!",
                    "<32>{#s/echostop}{#p/event}{#npc}* 訊號終止。"
                 ],
         f_echo6: () =>
            world.runaway
               ? [
                    "<32>{#s/echostart}{#p/event}{#npc/a}* 訊號開始...",
                    "<32>{#p/basic}* So what happened next?",
                    "<32>* (Well, you should know.)\n* (This is the part that everyone knows.)",
                    "<32>* (From our perspective, we saw a human fending off attacks...)",
                    "<32>* (Whatever that star turned himself into was relentlessly attacking the human.)",
                    "<32>{#s/echostop}{#p/event}{#npc}* 訊號終止。"
                 ]
               : SAVE.data.n.plot === 72
               ? [
                    "<32>{#s/echostart}{#p/event}{#npc/a}* 訊號開始...",
                    "<32>{#p/basic}* I do feel like a part of me's going to miss this old place.",
                    "<32>{#p/basic}* We really made it our own.",
                    "<32>{#p/basic}* (You're kidding, right?)\n* (I won't miss this old dump for a second.)",
                    "<32>{#p/basic}* (But I guess I've also had it pretty bad up here.)",
                    "<32>{#s/echostop}{#p/event}{#npc}* 訊號終止。"
                 ]
               : geno()
               ? [
                    "<32>{#s/echostart}{#p/event}{#npc/a}* 訊號開始...",
                    "<32>{#p/basic}* Bad news, kiddo.\n* The human came through not too long ago.",
                    ...(world.genocide
                       ? [
                            "<32>{#p/basic}* ... they had a partner with 'em, too.",
                            "<32>{#p/basic}* (What?)\n* (Who was it?)",
                            "<32>{#p/basic}* Wa ha ha...\n* You wouldn't believe me."
                         ]
                       : [
                            "<32>{#p/basic}* (Are they on their way here?)",
                            "<32>{#p/basic}* Sure, but it'll be a while until ya see 'em.\n* Not to mention Undyne...",
                            "<32>{#p/basic}* (Yeah, she'll stop them.)\n* (She's in charge of the Royal Guard, after all...)"
                         ]),
                    "<32>{#s/echostop}{#p/event}{#npc}* 訊號終止。"
                 ]
               : [
                    "<32>{#s/echostart}{#p/event}{#npc/a}* 訊號開始...",
                    "<32>{#s/phone}* Ring, ring...",
                    "<32>{#p/basic}* Sorry about that, the phone signal here isn't the greatest.",
                    "<32>* You seen anything interesting so far?",
                    "<32>* (... well...)",
                    "<32>* (How about a shooting star?)",
                    "<32>{#s/echostop}{#p/event}{#npc}* 訊號終止。"
                 ],
         f_echo7: () =>
            world.runaway
               ? [
                    "<32>{#s/echostart}{#p/event}{#npc/a}* 訊號開始...",
                    "<32>{#p/basic}* (Eventually, though, the human mustered some kind of power...)",
                    "<32>* (And then...)",
                    "<32>* (... IT... happened.)",
                    "<32>* Yeah... that.\n* The moment where it all turned upside-down, huh?",
                    "<32>{#s/echostop}{#p/event}{#npc}* 訊號終止。"
                 ]
               : SAVE.data.n.plot === 72
               ? [
                    "<32>{#s/echostart}{#p/event}{#npc/a}* 訊號開始...",
                    "<32>{#p/basic}* Hey, it's alright.",
                    "<32>{#p/basic}* On a new homeworld... you'll be able to go wherever you want.",
                    "<32>{#p/basic}* (Really? I thought I was going to settle down with you.)",
                    "<32>{#p/basic}* Oh, did you now?\n* Wa ha ha.",
                    "<32>{#s/echostop}{#p/event}{#npc}* 訊號終止。"
                 ]
               : geno()
               ? [
                    "<32>{#s/echostart}{#p/event}{#npc/a}* 訊號開始...",
                    ...(world.genocide
                       ? [
                            "<32>{#p/basic}* (So you're telling me this kid's been resurrected from the dead?)",
                            "<32>{#p/basic}* (Wow.)\n* (I knew you were a crazy old coot, but this is something!)",
                            "<32>{#p/basic}* ... would I lie to you?",
                            "<32>{#p/basic}* (Well... knowing you... I guess... probably not.)\n* (Hmph.)"
                         ]
                       : [
                            "<32>{#p/basic}* (So what are we supposed to do in the meantime?)",
                            "<32>{#p/basic}* Oh, y'know, just the usual jiggery-pokery, I'd guess.",
                            "<32>{#p/basic}* (You and your weird sayings.)",
                            "<32>{#p/basic}* Wa ha ha, you know it!"
                         ]),
                    "<32>{#s/echostop}{#p/event}{#npc}* 訊號終止。"
                 ]
               : [
                    "<32>{#s/echostart}{#p/event}{#npc/a}* 訊號開始...",
                    "<32>{#p/basic}* Oh!\n* Make a wish, kiddo!",
                    "<32>* (...)\n* (It'd never come true.)",
                    "<32>* ... freedom, huh?\n* Wa ha ha... I might have some good news for you.",
                    "<32>* I saw a human come through just a little while ago.",
                    "<32>{#s/echostop}{#p/event}{#npc}* 訊號終止。"
                 ],
         f_echo8: () =>
            world.runaway
               ? [
                    "<32>{#s/echostart}{#p/event}{#npc/a}* 訊號開始...",
                    "<32>{#p/basic}* I remember that bit.\n* The power changed hands... the human was in control.",
                    "<32>* (Yeah, and then they started attacking us!)\n* (I thought we were all...)",
                    "<32>* Going to die?",
                    "<32>* (Yeah, and it's like I could feel their fear.)\n* (Everyone was so afraid.)",
                    "<32>{#s/echostop}{#p/event}{#npc}* 訊號終止。"
                 ]
               : SAVE.data.n.plot === 72
               ? [
                    "<32>{#s/echostart}{#p/event}{#npc/a}* 訊號開始...",
                    "<32>{#p/basic}* (Who else am I gonna go to?)\n* (The girls?)",
                    "<32>{#p/basic}* Hmm...\n* I see your point.",
                    "<32>{#p/basic}* (You're the only one I feel like I can rely on, old buddy.)",
                    "<32>{#p/basic}* (Using this shop to make fun of Mettaton was a blast, but it's time for a change.)",
                    "<32>{#s/echostop}{#p/event}{#npc}* 訊號終止。"
                 ]
               : geno()
               ? [
                    "<32>{#s/echostart}{#p/event}{#npc/a}* 訊號開始...",
                    "<32>{#p/basic}* (Hey... if we ever manage to get out of this...)",
                    "<32>* (Maybe... we could go for some lunch together?)",
                    "<32>* Huh?\n* Sure, kiddo!\n* I don't see why not!",
                    "<32>* It'll give us somethin' to look forward to.",
                    "<32>{#s/echostop}{#p/event}{#npc}* 訊號終止。"
                 ]
               : [
                    "<32>{#s/echostart}{#p/event}{#npc/a}* 訊號開始...",
                    "<32>{#p/basic}* (So it's true...)\n* (Freedom really is coming.)",
                    "<32>* One would assume.",
                    "<32>* (Guess it's all up to the king, then, huh?)",
                    "<32>* ... if it comes to that.",
                    "<32>{#s/echostop}{#p/event}{#npc}* 訊號終止。"
                 ],
         f_echo9: () =>
            world.runaway
               ? [
                    "<32>{#s/echostart}{#p/event}{#npc/a}* 訊號開始...",
                    "<32>{#p/basic}* Yeah... I remember.",
                    "<32>* (Look, whatever happens...)\n* (I'm just glad you're safe, ya fat old mole-rat.)",
                    "<32>* Wa ha ha... that's my boy.",
                    "<32>* (... when we get to the new homeworld, would you... like to go out for dinner?)",
                    "<32>{#s/echostop}{#p/event}{#npc}* 訊號終止。"
                 ]
               : SAVE.data.n.plot === 72
               ? [
                    "<32>{#s/echostart}{#p/event}{#npc/a}* 訊號開始...",
                    "<32>{#p/basic}* That robot... I don't know if he'll be able to stay popular on the new homeworld.",
                    "<32>{#p/basic}* But hey, if he gets poor, we can always remind him how much better off we are.",
                    "<32>{#p/basic}* (Jeez, you're even more ruthless than I am when it comes to him!)",
                    "<32>{#p/basic}* (... if he comes to our shop, we'll charge him double.)",
                    "<32>{#s/echostop}{#p/event}{#npc}* 訊號終止。"
                 ]
               : geno()
               ? [
                    "<32>{#s/echostart}{#p/event}{#npc/a}* 訊號開始...",
                    "<32>{#p/basic}* (Thanks, old buddy...)\n* (... for a second there, I'd forgotten our troubles.)",
                    "<32>* Wa ha ha...\n* Glad I could help out.",
                    "<32>* And even if we never do make it outta here...",
                    "<32>* ... maybe we could go for lunch anyway.",
                    "<32>* (Yeah...)\n* (That'd be nice.)",
                    "<32>{#s/echostop}{#p/event}{#npc}* 訊號終止。"
                 ]
               : [
                    "<32>{#s/echostart}{#p/event}{#npc/a}* 訊號開始...",
                    "<32>{#p/basic}* (If it comes to that...?)\n* (What's the alternative, let them go free?)",
                    "<32>* I dunno.\n* I wish I had all the answers.",
                    "<32>* (Wait...)\n* (Is there something the king hasn't been telling us!?)",
                    "<32>* Wa ha ha...\n* Talk to ya later, kiddo.",
                    "<32>* (... huh!?!?)",
                    "<32>{#s/echostop}{#p/event}{#npc}* 訊號終止。"
                 ],
         f_echoAbyss1: () =>
            SAVE.data.n.plot === 72
               ? [
                    "<32>{#s/echostart}{#p/event}{#npc/a}* 訊號開始...",
                    "<32>{#p/basic}* I don't know where I am...",
                    "<32>* I was just doing my laundry, but then there was this bright light...",
                    "<32>* Now it's like... I'm in some kind of limbo...",
                    "<32>* Please... help me...",
                    "<32>{#s/echostop}{#p/event}{#npc}* 訊號終止。",
                    ...(SAVE.data.b.svr ? [ "<25>{#p/asriel1}{#f/13}* ..." ] : [])
                 ]
               : geno()
               ? [
                    "<32>{#s/echostart}{#p/event}{#npc/a}* 訊號開始...",
                    "<32>{#p/basic}* 有東西正在靠-靠-靠近我...\n  嚇-嚇-嚇死我了！",
                    "<32>{#p/undyne}* 遁狗？\n* 是你嗎？",
                    "<32>{#p/basic}* 是... 那玩意要過來了...\n* 啊！",
                    "<32>{#p/basic}* （咳咳）\n* 好像有啥動了下？\n* 是我的錯覺嗎？",
                    "<32>{#s/echostop}{#p/event}{#npc}* 訊號終止。"
                 ]
               : [
                    "<32>{#s/echostart}{#p/event}{#npc/a}* 訊號開始...",
                    "<32>{#p/radio}{#v/1}* Helloooooo everyone!\n* You are listening to The Midnight Rush!",
                    "<32>{#p/alphys}* (What the-)\n* (What is this!?)",
                    "<32>{#p/radio}{#v/1}* It is the fifteenth of September two-thousand, and well, not much happened today.",
                    "<32>{#p/alphys}* (Some kind of communications system... must've been dormant for hundreds of years!)",
                    "<32>{#s/echostop}{#p/event}{#npc}* 訊號終止。"
                 ],
         f_echoAbyss2: () =>
            SAVE.data.n.plot === 72
               ? [
                    "<32>{#s/echostart}{#p/event}{#npc/a}* 訊號開始...",
                    "<32>{#p/basic}* Gosh, where could I be...",
                    "<32>* We were out hunting for trash, but then this bright white light came in.",
                    "<32>* Catty thinks we're in some sort of shared dream...",
                    "<32>* But, like, wouldn't we be able to wake ourselves up?",
                    "<32>{#s/echostop}{#p/event}{#npc}* 訊號終止。",
                    ...(SAVE.data.b.svr ? [ "<25>{#p/asriel1}{#f/15}* ..." ] : [])
                 ]
               : world.genocide
               ? [
                    "<32>{#s/echostart}{#p/event}{#npc/a}* 訊號開始...",
                    "<23>{#p/papyrusnt}安黛因，在嗎？\n我兄弟他...\n他...",
                    "<33>{#p/undyne}* 他怎麼了，帕派瑞斯？",
                    "<23>{#p/papyrusnt}...",
                    "<32>{#p/undyne}* 帕派瑞斯？",
                    "<32>{#s/echostop}{#p/event}{#npc}* 訊號終止。"
                 ]
               : geno()
               ? [
                    "<32>{#s/echostart}{#p/event}{#npc/a}* 訊號開始...",
                    "<32>{#p/sans}{#f/7}* hey, not to bother ya, but you should probably have starton evacuated.",
                    "<32>{#p/undyne}* Huh?\n* What's this about?",
                    "<32>{#p/sans}{#f/7}* ...",
                    "<32>{#p/undyne}* Not... particularly liking the silent treatment...",
                    "<32>{#s/echostop}{#p/event}{#npc}* 訊號終止。"
                 ]
               : [
                    "<32>{#s/echostart}{#p/event}{#npc/a}* 訊號開始...",
                    "<32>{#p/radio}{#v/0}* Not much happened!?\n* You're outta your mind.",
                    "<32>{#p/alphys}* (Hmm...)",
                    "<32>{#p/radio}{#v/0}* ALIENS from the neighboring planet are due to arrive today!",
                    "<32>{#p/alphys}* (I guess I'll let it play out, then. Ehehe.)",
                    "<32>{#s/echostop}{#p/event}{#npc}* 訊號終止。",
                    ...(world.kiddo && !SAVE.data.b.f_state_dc_kidd2
                       ? ((SAVE.data.b.f_state_dc_kidd2 = true),
                         [
                            "<25>{#p/kidd}{#f/7}* Neighboring planet?\n* Could that mean...",
                            "<25>{#f/2}* ... n-no way."
                         ])
                       : [])
                 ],
         f_echoAbyss3: () =>
            SAVE.data.n.plot === 72
               ? [
                    "<32>{#s/echostart}{#p/event}{#npc/a}* 訊號開始...",
                    "<32>{#p/toriel}{#f/21}* My child... are you there?",
                    "<32>* That Twinkly...",
                    "<32>* I should have known he'd cause some sort of trouble, but...",
                    "<32>* Once again... I've failed to see the reality that lay right in front of me...",
                    "<32>{#s/echostop}{#p/event}{#npc}* 訊號終止。",
                    ...(SAVE.data.b.svr ? [ "<25>{#p/asriel1}{#f/16}* ..." ] : [])
                 ]
               : geno()
               ? [
                    "<32>{#s/echostart}{#p/event}{#npc/a}* 訊號開始...",
                    ...(SAVE.data.b.s_state_chilldrake
                       ? [
                            "<32>{#p/basic}* 救命啊！\n* 我朋友星鐵龍失蹤了...",
                            "<32>{#p/basic}* 他出門去找新笑話靈感，\n  結果到現在也沒回家！",
                            "<32>{#p/undyne}* 小子，別亂跑。\n* 我馬上派搜救隊去找你朋友。"
                         ]
                       : [
                            "<32>{#p/basic}* 救命啊！\n* 我朋友星鐵龍現在很危險！",
                            "<32>{#p/basic}* 他說自己看見個人類\n  四處遊蕩，屠殺怪物！",
                            "<32>{#p/undyne}* 小子，別亂跑。\n* 皇家衛隊會將那人類\n  繩之以法的。"
                         ]),
                    "<32>{#p/basic}* 謝謝您... 安黛因...",
                    "<32>{#s/echostop}{#p/event}{#npc}* 訊號終止。",
                    ...(world.kiddo && !SAVE.data.b.f_state_dc_kidd3
                       ? ((SAVE.data.b.f_state_dc_kidd3 = true),
                         [ "<25>{#p/kidd}{#f/3}* 呃...\n  聽起來怪嚇人的，哈哈...", "<25>{#f/4}* ..." ])
                       : [])
                 ]
               : [
                    "<32>{#s/echostart}{#p/event}{#npc/a}* 訊號開始...",
                    "<32>{#p/radio}{#v/1}* Okay, nobody panic!\n* We're not just gonna let 'em walk all over us, right?",
                    "<32>{#v/0}* You say that like you mean it literally.",
                    "<32>{#v/1}* What if I do?",
                    "<32>{#v/0}* Well, I think these aliens could be great allies.\n* They seem pretty nice.",
                    "<32>{#v/0}* They even brought that translation field thing so we can understand them!",
                    "<32>{#s/echostop}{#p/event}{#npc}* 訊號終止。"
                 ],
         f_echoAbyss4: () =>
            SAVE.data.n.plot === 72
               ? [
                    "<32>{#s/echostart}{#p/event}{#npc/a}* 訊號開始...",
                    "<23>{#p/papyrusnt}HUH? WHAT'S WRONG WITH THINKING EVERYTHING'S JUST FINE?",
                    "<33>{#p/without}* well, the way i see it...",
                    "<32>{#p/without}* you're just a-{@fill=#ff0}void{@fill=#fff}-ing the problem.",
                    "<23>{#p/papyrusnt}UGH... MAYBE YOU'RE RIGHT. THINGS DO SEEM PRETTY... {@fill=#ff0}DARK{@fill=#fff}.",
                    "<32>{#s/echostop}{#p/event}{#npc}* 訊號終止。",
                    ...(SAVE.data.b.svr ? [ "<25>{#p/asriel1}{#f/23}* ..." ] : [])
                 ]
               : geno()
               ? [
                    "<32>{#s/echostart}{#p/event}{#npc/a}* 訊號開始...",
                    "<32>{#p/undyne}* 沒聽懂嗎？\n  那可不是什麼好對付的小混混...\n  趁現在快逃！不然下個遭殃的就是你！",
                    "<32>{#p/basic}* 那傢伙是誰我不在乎。\n* 我只在乎能不能履行職責，\n  保護好前哨站！",
                    "<32>{#p/basic}* 你不是很想揍人類一頓嗎？\n  那你現在就過來啊！",
                    "<32>{#p/undyne}* 狗來米！！",
                    "<32>{#s/echostop}{#p/event}{#npc}* 訊號終止。",
                    ...(world.kiddo && !SAVE.data.b.f_state_dc_kidd4
                       ? ((SAVE.data.b.f_state_dc_kidd4 = true),
                         [
                            "<25>{#p/kidd}{#f/1}* 老兄，皇家衛隊真勇猛啊！",
                            "<25>{#f/3}* 有他們保護我們...\n  真是太好了！"
                         ])
                       : [])
                 ]
               : [
                    "<32>{#s/echostart}{#p/event}{#npc/a}* 訊號開始...",
                    "<32>{#p/radio}{#v/1}* Yeah, yeah...\n* If we're gonna be all lovey-dovey with E.T. here...",
                    "<32>{#v/1}* We're gonna have to do better than just walking up and saying \"Howdy.\"",
                    "<32>{#v/0}* ... isn't that Erogot's preferred way of saying Hello?",
                    "<32>{#v/0}* The dude's clearly into western movies, no doubt.",
                    "<32>{#s/echostop}{#p/event}{#npc}* 訊號終止。",
                    ...(world.kiddo && !SAVE.data.b.f_state_dc_kidd4
                       ? ((SAVE.data.b.f_state_dc_kidd4 = true),
                         [ "<25>{#p/kidd}{#f/1}* Erogot?", "<25>{#f/1}* KING Erogot!?", "<25>{#f/3}* Dude..." ])
                       : [])
                 ],
         f_echoAbyss5: () =>
            SAVE.data.n.plot === 72
               ? [
                    "<32>{#s/echostart}{#p/event}{#npc/a}* 訊號開始...",
                    "<32>{#p/kidding}* Yo... what is this place?",
                    "<32>* It's really dark, and I can't see anything in here...",
                    "<32>* I'm scared...",
                    "<32>* Is anyone there?\n* Please... someone help me...",
                    "<32>{#s/echostop}{#p/event}{#npc}* 訊號終止。",
                    ...(SAVE.data.b.svr ? [ "<25>{#p/asriel1}{#f/22}* ..." ] : [])
                 ]
               : world.genocide
               ? [
                    "<32>{#s/echostart}{#p/event}{#npc/a}* 訊號開始...",
                    "<32>{#p/alphys}* 新身體用著怎麼樣？",
                    "<32>{#p/mettaton}* 真的很不錯。\n* 我再看看有沒有故障零件。",
                    "<32>{#p/alphys}* 那-那就好。\n* 我研究研究\n  怎麼優化能量分配。",
                    "<32>{#p/mettaton}* 博士，別擔心。\n* 我們還有的是時間。",
                    "<32>{#s/echostop}{#p/event}{#npc}* 訊號終止。"
                 ]
               : geno()
               ? [
                    "<32>{#s/echostart}{#p/event}{#npc/a}* 訊號開始...",
                    "<32>{#p/alphys}* 難道我...\n  我就只能袖手旁觀嗎？",
                    "<32>{#p/mettaton}* 唉... 還有別的可做嗎？\n* 戰鬥？你可不擅長。",
                    "<32>{#p/mettaton}* 你要是現在衝上去，\n  很可能會喪命。\n  怪物們也會失去一員大將。",
                    "<32>{#p/alphys}* 為什麼...\n  為什麼我總遇到這種事...",
                    "<32>{#p/mettaton}* ...平心而論，\n  你還是第一次看到怪物死吧。",
                    "<32>{#s/echostop}{#p/event}{#npc}* 訊號終止。"
                 ]
               : [
                    "<32>{#s/echostart}{#p/event}{#npc/a}* 訊號開始...",
                    "<33>{#p/radio}{#v/0}* Just between us, some of them are pretty cute.",
                    "<32>{#v/1}* Uh... okay?",
                    "<32>{#v/0}* What?\n* I don't mean like THAT.\n* I just mean they're adorable.",
                    "<32>{#v/0}* The same way a pet might be.",
                    "<32>{#v/1}* ...\n* We've got a listener calling into the station.",
                    "<32>{#s/echostop}{#p/event}{#npc}* 訊號終止。"
                 ],
         f_echoAbyss6: () =>
            SAVE.data.n.plot === 72
               ? [
                    "<32>{#s/echostart}{#p/event}{#npc/a}* 訊號開始...",
                    "<32>{#p/alphys}* How strange...",
                    "<32>* So our SOULs have been absorbed into another being.",
                    "<32>* This could be a kind of \"separate plane\" where we're held before...",
                    "<32>* ... wait.\n* There m-might be a way I could contact the others!",
                    "<32>{#s/echostop}{#p/event}{#npc}* 訊號終止。",
                    ...(SAVE.data.b.svr ? [ "<25>{#p/asriel1}{#f/10}* ..." ] : [])
                 ]
               : geno()
               ? [
                    "<32>{#s/echostart}{#p/event}{#npc/a}* 訊號開始...",
                    world.genocide
                       ? "<32>{#p/basic}* 那人類跟艾斯利爾快到這裡了，\n* 只要發現他們，定將其一舉殲滅！"
                       : "<32>{#p/basic}* 那人類快到這裡了，\n* 只要我發現了，定將其一舉殲滅！",
                    "<32>{#p/undyne}* Doge，你肯定知道\n  即將面對的是什麼敵人。",
                    dogex()
                       ? "<32>{#p/basic}* They are responsible for the deaths in Starton.\n* I will show no mercy!"
                       : world.dead_canine
                       ? "<32>{#p/basic}* 朋友的生命親手葬送在敵人手裡。\n* 我絕不會心慈手軟！"
                       : "<32>{#p/basic}* This is the moment I have long prepared myself for.\n* I will not falter!",
                    "<32>{#p/undyne}* Yeah!! Get out there and show 'em what the ELITE squad are all about!!",
                    "<32>{#s/echostop}{#p/event}{#npc}* 訊號終止。"
                 ]
               : [
                    "<32>{#s/echostart}{#p/event}{#npc/a}* 訊號開始...",
                    "<32>{#p/radio}{#v/0}* Welcome, dear caller, to The Midnight Rush!\n* Got anything for us?",
                    "<32>{#p/human}* Yeah, I've got a few words.\n* The fact is, us humans aren't ready for this sorta thing.",
                    "<32>{#p/radio}{#v/0}* Just what are you implying?\n* That we're too dumb to comprehend alien concepts?",
                    "<32>{#p/human}* ... you're so naive.\n* It's not us I'm really worried for, but rather... the aliens.",
                    "<32>{#s/echostop}{#p/event}{#npc}* 訊號終止。"
                 ],
         f_echoAbyss7: () =>
            SAVE.data.n.plot === 72
               ? [
                    "<32>{#s/echostart}{#p/event}{#npc/a}* 訊號開始...",
                    "<32>{#p/basic}* Where am I?\n* What is this... place?",
                    "<32>{#p/alphys}* Hello?\n* I'm Dr. Alphys, and I'm... t-trying something!",
                    "<32>{#p/basic}* Dr. Alphys!\n* I'm here, can you hear me?",
                    "<32>{#p/alphys}* Yes... yes!\n* I just have to think about them... and I'm there!",
                    "<32>{#s/echostop}{#p/event}{#npc}* 訊號終止。",
                    ...(SAVE.data.b.svr ? [ "<25>{#p/asriel1}{#f/21}* ..." ] : [])
                 ]
               : geno()
               ? [
                    "<32>{#s/echostart}{#p/event}{#npc/a}* 訊號開始...",
                    "<32>{#p/basic}* 我是鑄廠員工Skrubby。\n* 就人類一事，我深感擔憂。",
                    "<32>{#p/alphys}* 呃...\n* 安黛因應該幫得上忙...\n  她遠比我能幹...",
                    "<32>{#p/basic}* 贊成。\n* 您的確啥忙也幫不上。",
                    "<32>{#p/alphys}* 沒-沒禮貌...",
                    "<32>{#s/echostop}{#p/event}{#npc}* 訊號終止。"
                 ]
               : [
                    "<32>{#s/echostart}{#p/event}{#npc/a}* 訊號開始...",
                    "<32>{#p/radio}{#v/1}* Oh, come on.\n* We're not a threat to them.\n* They hold all the cards!",
                    "<32>{#p/human}* Sure, but have you seen the way they act?\n* They're too nice...",
                    "<32>* I know you two won't do any harm, but some human is going to take advantage of that.",
                    "<32>{#p/radio}{#v/1}* Yeah... well...",
                    "<32>{#s/echostop}{#p/event}{#npc}* 訊號終止。"
                 ],
         f_echoAbyss8: () =>
            SAVE.data.n.plot === 72
               ? [
                    "<32>{#s/echostart}{#p/event}{#npc/a}* 訊號開始...",
                    "<32>{#p/basic}* My name is Thomas Roman.\n* Royal scientist, and trusted associate of the crown.",
                    "<32>{#p/alphys}* Professor Roman?\n* But you're...",
                    "<32>{#p/basic}* My name is Thomas Roman.\n* Royal scientist, and trusted associate of the crown.",
                    "<32>{#p/alphys}* He's repeating...\n* It must just be the professor in everyone's memory.",
                    "<32>{#s/echostop}{#p/event}{#npc}* 訊號終止。",
                    ...(SAVE.data.b.svr ? [ "<25>{#p/asriel1}{#f/3}* ..." ] : [])
                 ]
               : world.genocide
               ? [
                    "<32>{#s/echostart}{#p/event}{#npc/a}* 訊號開始...",
                    "<23>{#p/papyrusnt}我是帕派瑞斯。\n聽到提示音後儘管留言！",
                    "<33>{#p/undyne}* 該死...",
                    "<33>{#p/undyne}* 帕派瑞斯，我真不該讓你遭這種罪。",
                    "<33>{#p/undyne}* 你們兄弟倆命不該如此。",
                    "<32>{#s/echostop}{#p/event}{#npc}* 訊號終止。"
                 ]
               : geno()
               ? [
                    "<32>{#s/echostart}{#p/event}{#npc/a}* 訊號開始...",
                    "<32>{#p/undyne}* ... and even Doge has failed to capture the human.",
                    "<32>{#p/sans}{#f/7}* i'll be honest, this doesn't sound good.\n* evacuate the foundry?",
                    "<33>{#p/undyne}* At this point, everyone knows about what's going on.\n* They'll evacuate.",
                    "<32>{#p/sans}{#f/7}* i feel like it's better to be safe than sorry.\n* but what do i know.",
                    "<32>{#s/echostop}{#p/event}{#npc}* 訊號終止。"
                 ]
               : [
                    "<32>{#s/echostart}{#p/event}{#npc/a}* 訊號開始...",
                    "<32>{#p/radio}{#v/0}* Hey, cheer up.\n* Don't let that guy bring you down, alright?",
                    "<32>{#v/1}* But he's got a point...\n* For many, this situation might be overwhelming.",
                    "<32>* And not everybody's intentions are as pure as you and your... pet obsession.",
                    "<32>{#v/0}* Now wait just a minute!",
                    "<32>{#s/echostop}{#p/event}{#npc}* 訊號終止。"
                 ],
         f_echoAbyss9: () =>
            SAVE.data.n.plot === 72
               ? [
                    "<32>{#s/echostart}{#p/event}{#npc/a}* 訊號開始...",
                    "<32>{#p/alphys}* Yeah, just think of who you'd like to see, and you'll be with them.",
                    "<32>{#p/asgore}* Asriel... are you there?",
                    "<32>{#p/alphys}* Huh, it's not working...\n* Maybe there's not enough of him left in us?",
                    "<32>{#p/asgore}* Please... come back...",
                    "<32>{#s/echostop}{#p/event}{#npc}* 訊號終止。",
                    ...(SAVE.data.b.svr ? [ "<25>{#p/asriel1}{#f/25}* ..." ] : [])
                 ]
               : geno()
               ? [
                    "<32>{#s/echostart}{#p/event}{#npc/a}* 訊號開始...",
                    "<32>{#p/undyne}* Mind if I ask you a favor?",
                    "<32>{#p/basic}* Ahuhuhu~\n* Anything for the one who now occupies the old nest~",
                    world.genocide
                       ? "<33>{#p/undyne}* Track down the human and their accomplice. Take them to me.\n* Biggest payout you've ever had."
                       : "<33>{#p/undyne}* Track down the human and take them to me.\n* Biggest payout you've ever had.",
                    "<32>{#p/basic}* Hmmm...\n* I'll see what I can do~",
                    "<32>{#s/echostop}{#p/event}{#npc}* 訊號終止。",
                    ...(world.kiddo && !SAVE.data.b.f_state_dc_kidd9
                       ? ((SAVE.data.b.f_state_dc_kidd9 = true), [ "<25>{#p/kidd}{#f/4}* Not THAT spider..." ])
                       : [])
                 ]
               : [
                    "<32>{#s/echostart}{#p/event}{#npc/a}* 訊號開始...",
                    "<32>{#p/radio}{#v/1}* Now, now.\n* There's no shame in admitting what you like.",
                    "<32>{#v/0}* It's not like that at all!",
                    "<32>{#v/1}* Speaking of love, queue the jazz tune that's been blowing up in clubs everywhere...",
                    "<32>{#v/1}* \"Married to an Alien!\"",
                    "<32>{#s/echostop}{#p/event}{#npc}* 訊號終止。",
                    ...(world.kiddo && !SAVE.data.b.f_state_dc_kidd9
                       ? ((SAVE.data.b.f_state_dc_kidd9 = true),
                         [ "<25>{#p/kidd}{#f/2}* Pfft, only a human could come up with a title like THAT." ])
                       : [])
                 ],
         f_echoAbyss10: () =>
            SAVE.data.n.plot === 72
               ? [
                    "<32>{#s/echostart}{#p/event}{#npc/a}* 訊號開始...",
                    "<32>{#p/undyne}* I can't keep holding on...",
                    "<32>{#p/undyne}* The others... have already slipped away...",
                    "<32>{#p/undyne}* It's like they don't know who they are anymore...",
                    "<32>{#p/undyne}* No... no!\n* Not like this...\n* I can't forget who I am!",
                    "<32>{#s/echostop}{#p/event}{#npc}* 訊號終止。",
                    ...(SAVE.data.b.svr ? [ "<25>{#p/asriel1}{#f/21}* ..." ] : [])
                 ]
               : world.genocide
               ? [
                    "<32>{#s/echostart}{#p/event}{#npc/a}* 訊號開始...",
                    "<32>{#p/mettaton}* 博士啊...",
                    "<32>{#p/mettaton}* 我該料到你會就這麼逃跑的...",
                    "<32>{#p/mettaton}* ...\n* 該死...",
                    "<32>{#p/mettaton}* 你不明白嗎？",
                    "<32>{#p/mettaton}* 沒有你，我沒法完善\n  那些防禦部件啊...",
                    "<32>{#s/echostop}{#p/event}{#npc}* 訊號終止。"
                 ]
               : geno()
               ? [
                    "<32>{#s/echostart}{#p/event}{#npc/a}* 訊號開始...",
                    "<32>{#p/mettaton}* 唉，他們馬上就到了。\n* 不知道你會怎麼應對這種場面，\n  不過...",
                    "<32>{#p/mettaton}* 不管你在這堅守陣地，\n  還是打了退堂鼓...",
                    "<33>{#p/mettaton}* 我都會全力支援你。",
                    "<32>{#p/alphys}* ... ehehe...",
                    "<33>* The same goes to you, Mettaton.",
                    "<32>{#s/echostop}{#p/event}{#npc}* 訊號終止。"
                 ]
               : [
                    "<32>{#s/echostart}{#p/event}{#npc/a}* 訊號開始...",
                    "<32>{#p/alphys}* Wait, wait!\n* This would be perfect for my date with Undyne...",
                    "<32>{#p/mettaton}* OH WOULD IT NOW?",
                    "<32>{#p/alphys}* Mettaton!?\n* Where did you...\n* ... I'm not d-dating anyone!",
                    "<32>{#p/mettaton}* OH, DON'T YOU WORRY.\n* YOUR SECRET'S SAFE WITH ME...\n* ... PROBABLY.",
                    "<32>{#s/echostop}{#p/event}{#npc}* 訊號終止。",
                    ...(world.kiddo && !SAVE.data.b.f_state_dc_kidd10
                       ? ((SAVE.data.b.f_state_dc_kidd10 = true),
                         [
                            "<25>{#p/kidd}{#f/1}* Alphys wants to marry UNDYNE!?",
                            "<25>{#f/6}* You really DO learn something new every day..."
                         ])
                       : [])
                 ],
         f_echodude: pager.create(
            0,
            () =>
               SAVE.data.n.plot === 72
                  ? [
                       "<32>{#p/basic}{#npc/a}* With a new world comes new kinds of stars.",
                       "<32>* These signal stars may be the least of our worries..."
                    ]
                  : [
                       "<32>{#p/basic}{#npc/a}* 這是一臺訊星。\n* 它會重複它剛剛接收到的訊息，\n  一遍又一遍..."
                    ],
            () =>
               SAVE.data.n.plot === 72
                  ? [ "<32>{#p/basic}{#npc/a}* Hopefully the stars out there are more honest." ]
                  : [ "<32>{#p/basic}{#npc/a}* 絕對不要相信一顆星星。", "<32>* 它們最典型的特質就是欺詐。" ]
         ),
         f_echoLobby: () =>
            world.runaway
               ? [
                    "<32>{#s/echostart}{#p/event}{#npc/a}* 訊號開始...",
                    "<32>{#p/basic}* Raddy of the foundry crew.\n* We've no time to keep running the show here.",
                    "<32>* Don't worry about pipes, unless you're slidin' through em to escape!",
                    "<32>* Got it, Skrubby?\n* Large lata?\n* My teeny tini?",
                    "<32>* We've gotta go, right away.",
                    "<32>{#s/echostop}{#p/event}{#npc}* 訊號終止。"
                 ]
               : SAVE.data.n.plot === 72
               ? [
                    "<32>{#s/echostart}{#p/event}{#npc/a}* 訊號開始...",
                    "<32>{#p/basic}* Raddy of the foundry crew.\n* Everyone, you've done a real great job so far.",
                    "<32>* Now that we're free, we can all give it a rest!",
                    "<32>* Ya hear that, Skrubby?\n* Large lata?\n* My teeny tini?",
                    "<32>* It's time for a totally tubular celebration!",
                    "<32>{#s/echostop}{#p/event}{#npc}* 訊號終止。"
                 ]
               : [
                    "<32>{#s/echostart}{#p/event}{#npc/a}* 訊號開始...",
                    "<32>{#p/basic}* 我是鑄廠員工Skrubby。\n* 向您報告我和Raddy的維修成果。",
                    geno()
                       ? "<32>{#p/alphys}* 那真是... 太-太好了...\n* 因為，我-我現在沒空修復它，\n  所以只能..."
                       : "<32>{#p/alphys}* 呃... 很-很高興\n  你們修好了它！",
                    "<32>{#p/basic}* 沒事。\n* 您啥忙都沒幫上，\n  但我還是謝謝您嘞。",
                    "<32>{#p/alphys}* ...不客氣。",
                    "<32>{#s/echostop}{#p/event}{#npc}* 訊號終止。"
                 ],
         f_kidd: pager.create(
            0,
            () =>
               world.genocide
                  ? [
                       "<25>{#p/kidd}{#npc/a}{#f/3}* 呃... 嘿...",
                       "<25>{#p/asriel2}{#f/15}{#npc}* 怪胎。",
                       "<25>{#p/kidd}{#npc/a}{#f/1}* 嗯... 你好！\n* 哈哈哈！"
                    ]
                  : SAVE.data.n.plot === 33
                  ? [
                       "<25>{#p/kidd}{#npc/a}{#f/1}* How was lunch?",
                       "<25>{#f/1}* Did that short skeleton make everyone laugh again?"
                    ]
                  : [
                       "<25>{#p/kidd}{#npc/a}{#f/2}* 喲，你也是來這看她的嗎？",
                       "<25>{#f/1}* 哈哈。\n* 她最酷了！！",
                       "<25>{#f/2}* 我長大了要成為她那樣..."
                    ],
            () =>
               world.genocide
                  ? [ "<25>{#p/kidd}{#npc/a}{#f/4}* ..." ]
                  : SAVE.data.n.plot === 33
                  ? [ "<25>{#p/kidd}{#npc/a}{#f/3}* He always gets kicked out for pulling awful pranks." ]
                  : [ "<25>{#p/kidd}{#npc/a}{#f/1}* 你先走吧。", "<25>{#f/1}* 我隨後就來！" ]
         ),
         f_longsy: pager.create(
            0,
            () =>
               SAVE.data.n.plot === 72
                  ? [
                       "<32>{#p/basic}{#npc/a}* My friend Shortsy and I plan to become the new world's premiere architects.",
                       "<32>* We'll build bridges, spires, space stations... if you can imagine it, we can build it!",
                       "<32>* As always, I'll be in charge of carrying the tools."
                    ]
                  : SAVE.data.n.plot < 48
                  ? [
                       "<32>{#p/basic}{#npc/a}* My friend Shortsy and I plan to build a bridge.",
                       "<32>* He's got his reasons, but personally, I'm just tired of using that unstable raft.",
                       "<32>* Let's hope we can do something a little better than that."
                    ]
                  : [
                       "<32>{#p/basic}{#npc/a}* How'd you like our bridge?\n* Was it stable?\n* Was it gravitationally secure?",
                       "<32>* Well, Shortsy said it's fine, and they're kinda the expert here.",
                       "<32>* I'm mostly just here to carry around the tools!"
                    ],
            () =>
               SAVE.data.n.plot === 72
                  ? [ "<32>{#p/basic}{#npc/a}* Shortsy told me about a new kind of tool recently..." ]
                  : SAVE.data.n.plot < 48
                  ? [ "<32>{#p/basic}{#npc/a}* Instability and I don't get along very well.\n* That's just how I am." ]
                  : [
                       "<32>{#p/basic}{#npc/a}* Don't get it twisted.\n* I'm a fantastic tool-toter.\n* That's just what I do."
                    ]
         ),
         f_shortsy: pager.create(
            0,
            () =>
               SAVE.data.n.plot === 72
                  ? [
                       "<32>{#p/basic}{#npc/a}* My buddy Longsy and I want to become full-time architects.",
                       "<32>* I've invented a brand new tool for Longsy to use...",
                       "<32>* ... called the builder's wand."
                    ]
                  : SAVE.data.n.plot < 48
                  ? [
                       "<32>{#p/basic}{#npc/a}* My buddy Longsy and I want to build a new bridge to impress the king.",
                       "<32>* It'll be the straightest, most sturdy bridge you've ever seen.",
                       "<32>* I'll make sure of it!"
                    ]
                  : [
                       "<32>{#p/basic}{#npc/a}* Take a look at our newest bridge.",
                       "<32>* Longsy and I figure this will be enough to impress the king...",
                       "<32>* It needs to be if we're going to work alongside him!"
                    ],
            () =>
               SAVE.data.n.plot === 72
                  ? [ "<32>{#p/basic}{#npc/a}* With enough power, it could create anything you can imagine..." ]
                  : SAVE.data.n.plot < 48
                  ? [ "<32>{#p/basic}{#npc/a}* I'm set on doing nothing less than the best.\n* That's just how I am." ]
                  : [
                       "<32>{#p/basic}{#npc/a}* No need to thank us, it's only a community service.\n* That's just what I do."
                    ]
         ),
         f_snail1: () =>
            SAVE.data.n.plot === 72
               ? [ "<32>{#p/basic}{#npc/a}* (Snail snail...)\n* Everyone's leaving, it seems." ]
               : [ "<32>{#p/basic}{#npc/a}* (Snail snail...)\n* Optimism, any day..." ],
         f_snail2: () =>
            SAVE.data.n.plot === 72
               ? [ "<32>{#p/basic}{#npc/a}* (Snail snail...)\n* It's time for us to go." ]
               : [ "<32>{#p/basic}{#npc/a}* (Snail snail...)\n* All's well that ends well..." ],
         f_starkiller: pager.create(
            0,
            () =>
               SAVE.data.n.plot === 72
                  ? [
                       "<32>{#p/basic}{#npc/a}* The smell of grass grows ever closer now...",
                       "<33>* Soon, I will see it for myself."
                    ]
                  : SAVE.data.n.state_foundry_undyne !== 0
                  ? [ "<32>{#p/basic}{#npc/a}* I feel the grass has faded.", "<32>* Don't you...?" ]
                  : roomKills().f_telescope > 0
                  ? [ "<32>{#p/basic}{#npc/a}* The grass may already be too far gone.", "<32>* Or am I wrong...?" ]
                  : [
                       "<32>{#p/basic}{#npc/a}* What's grass?",
                       ...(world.genocide
                          ? [ "<32>* Can it find you?", "<32>* Can it eat you?", "<32>* Can it kill you?" ]
                          : [ "<32>* Can you find it?", "<32>* Can you eat it?", "<32>* Can you kill it?" ]),
                       "<32>* ...",
                       "<32>* Are you made of grass?"
                    ],
            () =>
               SAVE.data.n.plot === 72
                  ? [
                       "<32>{#p/basic}{#npc/a}* The grass may not always be greener, but who says it has to be?",
                       "<32>* A new world may have any number of colors in its grass."
                    ]
                  : [ "<32>{#p/basic}{#npc/a}* The grass isn't always greener on the other side." ]
         ),
         f_temmie1: () =>
            SAVE.data.n.plot === 72
               ? [ "<32>{#p/tem}{#npc/a}* woa... tem hear news...\n* VERY GOODS!!!" ]
               : [ "<32>{#p/tem}{#npc/a}* hOI!!\n* im temmie!!!", "<32>* and dis is my friend...\n* temmie!!!" ],
         f_temmie2: () =>
            SAVE.data.n.plot === 72
               ? [ "<32>{#p/tem}{#npc/a}* yaYA!!!\n* tems can go free!!" ]
               : [ "<32>{#p/tem}{#npc/a}* hOI!!\n* im temmie!!!", "<32>* and dis is my friend...\n* temmie!!!" ],
         f_temmie3: () =>
            SAVE.data.n.plot === 72
               ? [
                    "<32>{#p/tem}{#npc/a}* woa...\n* if tems can go to new homeworld, can make,",
                    "<32>{#p/tem}{#npc/a}* LOT OF TEMS HISTORY!!!"
                 ]
               : [ "<32>{#p/tem}{#npc/a}* hOI!!\n* im temmie!!!", "<32>* don forget my friend!" ],
         f_temmie4: () =>
            SAVE.data.n.plot === 72
               ? [ "<32>{#p/tem}{#npc/a}* A pleasing development, no?" ]
               : world.genocide || 10 <= world.trueKills
               ? [
                    [ "<32>{*}{#p/tem}{#i/5}{#s.stop}* I know what you did.", "{*}{#s.resume}{%}" ],
                    [ "<32>{#p/tem}{#npc/a}* Hi.", "<32>* I'm Bob." ]
                 ][Math.min(SAVE.flag.n._bob++, 1)]
               : SAVE.data.n.plot === 47.2
               ? [ "<32>{#p/tem}{#npc/a}* Hi.", "<32>* I'm afraid for your life." ]
               : [ "<32>{#p/tem}{#npc/a}* Hi.", "<32>* I'm Bob." ],
         f_temmie5: () =>
            SAVE.data.n.plot === 72
               ? [ "<32>{#p/tem}{#npc/a}* awawawawah!!", "<32>* humans...\n* such a...", "<32>* HEROES!!!!" ]
               : [ "<32>{#p/tem}{#npc/a}* awawawawah!!", "<32>* humans...\n* such a...", "<32>* CUTE!!!!" ],
         f_temmie6: () =>
            SAVE.data.n.plot === 72
               ? [
                    "<32>{#p/tem}{#npc/a}* everyones go free...\n* BUT TEM!!!",
                    "<32>* TEM NOT LEAV!!!\n* TEM WATCH EG!!!",
                    "<32>* tem will be happily fambily,"
                 ]
               : [
                    "<32>{#p/tem}{#npc/a}* tem... WATCH EGG!!!",
                    "<32>* eg... wil HATCH!!!",
                    "<32>* tem... PROUD PARENT!!"
                 ]
      },
      punchcard0: () =>
         SAVE.data.b.svr ? [ "<32>{#p/human}* (But the box was empty.)" ] : [ "<32>{#p/basic}* The box is empty." ],
      punchcard1: [ "<32>{#p/basic}* There is one postcard in the box." ],
      punchcard2: [ "<32>{#p/basic}* There are multiple postcards in the box." ],
      punchcard3: [ choicer.create("* (Take a postcard?)", "是", "否") ],
      punchcard4: [ "<32>{#p/human}* （你獲得了一張明信片。）" ],
      punchcardX: [
         "<32>{#p/human}* (You can't make out what's in the box...)",
         choicer.create("* (Take something out?)", "是", "否")
      ],
      puzzle1switch: () =>
         SAVE.data.b.svr
            ? [ "<32>{#p/human}* (You can't seem to use the switch anymore.)" ]
            : world.darker
            ? [ "<32>{#p/basic}* It's stuck, like always." ]
            : [ "<32>{#p/basic}* The switch, quite shockingly, is stuck.", "<32>* What a turn of events!" ],
      puzzle2switch: () =>
         SAVE.data.b.svr
            ? [ "<32>{#p/human}* (You can't seem to use the switch anymore.)" ]
            : world.darker
            ? [ "<32>{#p/basic}* It's stuck, like always." ]
            : [ "<32>{#p/basic}* The switch is stuck.\n* Naturally." ],
      puzzle3switch: () =>
         SAVE.data.b.svr
            ? [ "<32>{#p/human}* (You can't seem to use the switch anymore.)" ]
            : world.darker
            ? [ "<32>{#p/basic}* It's stuck, like always." ]
            : [
                 "<32>{#p/basic}* Believe it or not...",
                 "<32>* The switch isn't stuck, it's just out of order.\n* Oh wait."
              ],
      quiche1: () =>
         SAVE.data.b.svr
            ? [
                 "<32>{#p/human}* (The note attached to this cheesecake describes how it was abandoned.)",
                 choicer.create("* （拿走芝士蛋糕嗎？）", "是", "否")
              ]
            : [
                 "<32>{#p/basic}* 這放著一塊芝士蛋糕，\n  上面粘著一張字條。",
                 "<32>* 「我真的承擔不了\n  照顧它的重任。」",
                 choicer.create("* （拿走芝士蛋糕嗎？）", "是", "否")
              ],
      quiche2: [ "<32>{#p/human}* （你帶的東西太多了。）" ],
      quiche3: [ "<32>{#p/human}* （你拿走了芝士蛋糕。）" ],
      quiche4: () =>
         SAVE.data.b.svr
            ? [
                 [
                    "<25>{#p/asriel1}{#f/24}* Before we moved out, $(name) used to sit here all the time...",
                    "<25>{#f/23}* We'd swap stories about our hopes and our dreams...",
                    "<25>{#f/22}* And bring the telescope out and watch for stars sometimes.",
                    "<25>{#f/13}* Even as a star...\n* I wished I could return to those moments..."
                 ],
                 [
                    "<25>{#p/asriel1}{#f/23}* Look at me, getting all sentimental over a random bench.",
                    "<25>{#f/17}* But hey.\n* At least it's sturdy.",
                    "<25>{#f/3}* Heck, even Asgore's tremendous figure couldn't break it.",
                    "<25>{#f/4}* Back when we all lived here, I mean."
                 ],
                 [
                    "<25>{#p/asriel1}{#f/13}* It's kind of funny to think about...",
                    "<25>{#f/13}* The house we used to live in is now lived in by Undyne.",
                    "<25>{#f/17}* Or was, until the force field was destroyed.",
                    "<25>{#f/13}* And... it's not your usual kind of house.\n* It's a monster."
                 ],
                 [ "<25>{#p/asriel1}{#f/15}* ... all the other monster homes were lost in the war." ]
              ][Math.min(asrielinter.quiche4++, 3)]
            : world.darker
            ? [ "<32>{#p/basic}* It's a bench." ]
            : SAVE.data.n.plot === 72
            ? [ "<32>{#p/basic}* Coming back to give a lonely bench some company...\n* The gesture is appreciated." ]
            : [ "<32>{#p/basic}* Just a lonely bench out in the middle of a factory.\n* Nothing weird about that!" ],
      quiche5: [ "<32>{#p/human}* (You decide not to take anything.)" ],
      run1: [ "<32>{*}{#p/undyne}* Run.{^20}{%}" ],
      run2a1: [ "<32>{#p/undyne}* ...", "<32>{#p/undyne}* I'll go check." ],
      run2b1: [ "<32>{#p/undyne}* (Stupid spiders...)" ],
      run2a2: [ "<32>{#p/undyne}* ...", "<32>{#p/undyne}* I'm a little busy right now." ],
      run2b2: [ "<32>{#p/undyne}* (Ugh...)" ],
      run3: [ "<25>{*}{#p/kidd}{#f/13}{#x1}* I'll save you!{#x2}{^20}{%}" ],
      run4: [ "<25>{*}{#p/kidd}{#f/1}{#x1}* Sorry, I, uh... don't really know how to land this thing!{#x2}{^20}{%}" ],
      run5: [ "<25>{*}{#p/kidd}{#f/7}{#x1}* What the...{#x2}{^20}{%}" ],
      run6: [ "<25>{*}{#p/kidd}{#f/7}{#x1}* Help!!!{#x2}{^20}{%}" ],
      run6a: [
         "<25>{*}{#p/kidd}{#f/7}{#x1}* Quit {@fill=#ff0}standing around{@fill=#fff} and {@fill=#ff0}get over here{@fill=#fff}, dude!!!{#x2}{^20}{%}"
      ],
      run6b: [ "<25>{*}{#p/kidd}{#f/7}{#x1}* Come on, please!!!{#x2}{^20}{%}" ],
      run6c: [ "<25>{*}{#p/kidd}{#f/7}{#x1}* I...\n* I-I can't stop it...!{#x2}{^20}{%}" ],
      run6d: [
         "<25>{*}{#p/kidd}{#f/7}{#x1}* What are you doing!?{#x2}{^20}{%}",
         "<25>{*}{#p/kidd}{#f/7}{#x1}* Ah...!{#x2}{^20}{%}"
      ],
      run7: [
         "<25>{#p/kidd}{#f/4}* Y... y... yo... dude...",
         "<25>* If...\n* If y-you wanna hurt my friend...",
         "<25>* You're gonna have to get through me, first."
      ],
      run8: [
         "<25>{#p/kidd}{#f/3}* She's gone...",
         "<25>{#f/1}* Yo, you really saved my skin.",
         "<25>{#f/3}* Even if I was trying to save yours instead.",
         "<25>{#f/2}* Haha.",
         "<25>{#f/3}* ... man, I've never been so TIRED...",
         "<25>{#f/4}* Guess I should probably go home.",
         "<25>{#f/7}* I...\n* I bet my parents are worried sick about me!"
      ],
      run9: [ "<25>{#p/kidd}{#f/13}* L... later, dude!" ],
      run10: [
         "<32>{#p/kidd}* Undyne...\n* You....\n* You saved me!",
         "<32>* Huh?\n* They ran away?",
         "<32>* Yo, you're wrong...",
         "<32>* They went to get help!",
         "<32>* They'll be back any second!!",
         "<32>* ...",
         "<32>* O-okay, I'll go home..."
      ],
      run11: (charged: boolean) => [
         "<32>{#p/kidd}* Undyne...",
         "<32>* You saved me...?",
         "<32>* Yo... I...\n* I thought I was a goner.\n* Haha...",
         "<32>* ... wait, are you okay?\n* It looks like you hit the ceiling pretty hard...",
         "<32>* Th-this is my fault.\n* I should have stayed away from them, like you said.",
         charged
            ? "<32>* They just went straight to fight you instead of helping me..."
            : "<32>* They just stood there...\n* Watching...\n* Waiting for me to disappear.",
         "<32>* I was so scared, and you...",
         "<32>* What?\n* You're gonna go fight them now?",
         "<32>* But you look hurt...\n* You should rest, haha...",
         "<32>* ...",
         "<32>* W-warriors don't rest, huh?",
         "<32>* Undyne...\n* You're really cool."
      ],
      sansSentry: () =>
         SAVE.data.b.svr
            ? [ "<32>{#p/human}* (This sentry station strikes you as rather unnecessary.)" ]
            : world.darker
            ? [ "<32>{#p/basic}* 一個哨站。" ]
            : [ "<32>{#p/basic}* Sans's second sentry station...", "<32>* As if the first one wasn't already enough." ],
      sansSentryBack: () =>
         !world.genocide && SAVE.data.n.state_starton_papyrus === 1
            ? [ "<32>{#p/human}* (You look under the shelf...)", "<32>{#p/basic}* It's a box of bones." ]
            : [
                 "<32>{#p/human}* (You look under the shelf...)",
                 ...(SAVE.data.b.svr
                    ? [
                         [
                            "<25>{#p/asriel1}{#f/13}* The notes in here are actually really interesting.",
                            "<25>{#f/17}* Don't you know anything about time travel?",
                            "<25>{#f/15}* I had a theory that my power to RESET was time travel...",
                            "<25>{#f/13}* ... but I never did prove it."
                         ],
                         [
                            "<25>{#p/asriel1}{#f/13}* There's a lot of different theories I've tried to prove.",
                            "<25>{#f/13}* Quantum gravity, simulation theory, the Skasis paradigm...",
                            "<25>{#f/17}* In hindsight, I might have spent a little too much time on them.",
                            "<25>{#f/20}* Not that it made it any less interesting!"
                         ],
                         [
                            "<25>{#p/asriel1}{#f/16}* I am surprised that Sans even keeps this around.",
                            "<25>{#f/3}* He used to work at the lab, though, so...",
                            "<25>{#f/4}* I guess it could just be a sentimental thing."
                         ],
                         [
                            "<25>{#p/asriel1}{#f/13}* I never used to understand why monsters are so sentimental...",
                            "<25>{#f/17}* ... but my years as a star changed that forever."
                         ]
                      ][Math.min(asrielinter.sansSentryBack++, 3)]
                    : [ "<32>{#p/basic}* It's a series of notes on time travel." ])
              ],
      secretcallA: [
         "<32>{#s/phone}{#p/event}* Ring, ring...",
         "<18>{#p/papyrus}{#f/9}PSST, THIS IS PAPYRUS!",
         "<18>{#f/0}AT THE MOMENT, I AM STILL HIDING IN MY SAFE PLACE.",
         "<18>{#f/4}I HOPE YOU'RE NOT GETTING INTO TROUBLE...",
         "<18>{#f/4}BECAUSE IF YOU ARE...",
         "<19>{#f/9}I'D HAVE TO COME OVER THERE AND DO SOMETHING ABOUT IT!",
         "<18>{#f/6}... WHICH I CAN'T DO, BECAUSE OF THE CURRENT SITUATION.",
         "<18>{#f/7}SO DON'T GET INTO ANY TROUBLE!",
         "<18>{#f/5}...",
         "<18>{#f/5}PAPYRUS OUT...",
         "<32>{#s/equip}{#p/event}* Click..."
      ],
      secretcallB: [
         "<32>{#s/phone}{#p/event}* Ring, ring...",
         "<18>{#p/papyrus}{#f/0}PSST, IT'S PAPYRUS AGAIN.",
         "<18>{#f/5}WOWIE... IT MUST BE GETTING LATE BY NOW.",
         "<18>{#f/6}ARE YOU WELL?\nHAS ANYONE ELSE BEEN... KILLED?",
         "<18>{#f/5}THESE ARE THE QUESTIONS I ASK MYSELF EVERY DAY.",
         "<18>{#f/4}GRANTED, I'VE ONLY BEEN IN HIDING FOR A SHORT TIME.",
         "<18>{#f/7}BUT STILL!!!",
         "<18>{#f/5}...",
         "<18>{#f/4}... YOU MUST BE NEARLY OUT OF THE FOUNDRY BY NOW.",
         "<18>{#f/5}I WISH I COULD DO MORE TO HELP, BUT ALAS...",
         "<18>{#f/3}IT WOULD BE UNSAFE FOR ME TO RETURN RIGHT NOW.",
         "<18>{#f/9}S-STILL!!!\nI KNOW YOU WON'T LET ME DOWN!",
         "<18>{#f/5}...",
         "<18>{#f/5}PAPYRUS OUT...",
         "<32>{#s/equip}{#p/event}* Click..."
      ],
      spider1: () => [ "<32>{#p/basic}* ...嗯？" ],
      spider2: () =>
         badSpider()
            ? [ "<32>{#p/basic}* 黑暗中，有東西在前進。" ]
            : [ "<32>{#p/basic}* 黑暗中，有人在走動。" ],
      spider3: () => (badSpider() ? [ "<32>{#p/basic}* 它十分強大..." ] : [ "<32>{#p/basic}* 那人十分好奇..." ]),
      spider4: () =>
         badSpider() ? [ "<32>{#p/basic}* 它極其危險..." ] : [ "<32>{#p/basic}* 那人神神秘秘..." ],
      spider5: () => (badSpider() ? [ "<32>{#p/basic}* 它..." ] : [ "<32>{#p/basic}* 那人..." ]),
      spider6: () =>
         badSpider()
            ? [
                 "<32>{#p/basic}* ...將會葬身於此。",
                 "<32>* 你以為能輕易逃得掉嗎，親？",
                 "<32>* 啊哈哈~\n* 你欠下的血債，可有的還！"
              ]
            : [
                 "<32>{#p/basic}* ...我會在此攔住。",
                 "<32>* 你以為過了特戰隊那關，\n  就萬事大吉了，親？",
                 "<32>* 啊哈哈~\n* 你可真是天真！"
              ],
      spookydate0x: pager.create(
         0,
         [ "<25>{#p/sans}* hey, i respect what you did back there.", "<25>{#f/3}* thanks." ],
         [ "<25>{#p/sans}{#f/2}* keep it up, and i might even even take you out for dinner." ]
      ),
      spookydate0y: [
         "<32>{#p/basic}* There's a pair of eyes painted on the back of Sans's head.",
         "<32>{#p/basic}* They don't seem very convincing."
      ],
      spookydate0z: [
         "<32>{#p/basic}* Surprisingly, there are no ears painted on the side of Sans's head.",
         "<33>{#p/basic}* Makes a change from the back..."
      ],
      spookydate0: pager.create(
         0,
         [ "<25>{#p/sans}* thanks for treatin' me, bud.", "<25>* glad we could talk." ],
         [ "<25>{#p/sans}{#f/2}* maybe later we could go out for dinner." ]
      ),
      spookydate1: pager.create(
         0,
         [
            "<25>{#p/sans}* 嘿，我聽說你和我的兄弟\n  和好了。\n* 就是那個偉大的帕派瑞斯。",
            "<25>{#f/2}* 嗯... \n  我覺得這也是一場\n  {@fill=#ff0}偉大的勝利{@fill=#fff}。",
            "<26>{#f/0}* 我們去烤爾比那慶祝一番，\n  咋樣？",
            "<26>{#f/3}* 獲得了帕派瑞斯的好感，你就\n  在我內心有了一席之地。",
            choicer.create("* （你要怎麼回答？）", "走吧", "不了")
         ],
         [ "<25>{#p/sans}* my offer remains.\n* grillby's?", choicer.create("* （你要怎麼回答？）", "走吧", "不了") ]
      ),
      spookydate2a: () => [ "<25>{#p/sans}* 那行，我會特意為你從工作中\n  抽身的..." ],
      spookydate2b: () => [
         "<25>{#p/sans}* well, suit yourself.",
         ...(SAVE.data.n.sans_doge_warning++ < 1
            ? [
                 "<25>{#p/sans}* just don't complain if you get in a fight and get hurt...",
                 "<25>{#p/sans}* ... all because you forgot to eat something."
              ]
            : [])
      ],
      spookydate3: [ "<25>{#p/sans}* 這裡。\n* 我知道一條捷徑。" ],
      spookydate4: [ "<25>{#p/sans}* 很快的捷徑，不是嗎？" ],
      spookydate5: [ "<25>{#p/sans}* 嘿，各位。" ],
      spookydate6: [ "<32>{#p/basic}* 好啊，衫斯。\n{#x1}* 嘿呀，衫衫~" ],
      spookydate7: [ "<32>{#p/basic}* 嘿，衫斯。\n{#x1}* （嗨，衫斯。）" ],
      spookydate8: [ "<32>{#p/basic}* 我聽說你用烈焰燒烤把酒吧\n  給點燃了，是這樣嗎？" ],
      spookydate9: [
         "<25>{#p/sans}{#f/3}* 嗯?\n* 不，那東西完全無害。",
         "<25>{#f/2}* 能讓這酒吧燃起來的\n  只有我的招牌幽默笑話。"
      ],
      spookydate9x: [ "<25>{#p/sans}{#f/3}* gee grillby, where'd everybody go?" ],
      spookydate9y: [
         "<32>{#p/basic}{#npc/a}* ...\n* ...\n* ...",
         "<32>* ... Grillbz doesn't mention customers, but says seeing you is a nice relief."
      ],
      spookydate9z: [ "<25>{#p/sans}{#f/0}* how strange." ],
      spookydate10: [ "<25>{#p/sans}* 為什麼不過來坐一下呢，\n  夥計？" ],
      spookydate11: [
         "<25>{#p/sans}* 嗷喲，小心你坐的地方。",
         "<25>{#f/2}* 有些怪咖會把屁墊\n  放在座位上。",
         "<25>{#f/0}* ... 那麼，來點餐吧。\n* 你呲點啥？",
         "<32>{#p/human}* (What do you say?){!}\nµµµµµµµµFlamin'\nµµµµµµµµGrillbysµµµµµµµSliders{#c/0/8/7}",
         "<26>{#p/sans}{#f/2}* 嘿，聽上去挺不錯。"
      ],
      spookydate12a: [ "<25>{#p/sans}* 烤爾比，給我們來兩份\n  烈焰的你。" ],
      spookydate12b: [ "<25>{#p/sans}* 烤爾比，給我們來兩份漢堡。" ],
      spookydate13: [
         "<25>{#p/sans}* 那麼，你覺得我兄弟的攻擊\n  咋樣？",
         choicer.create("* （你要怎麼回答？）", "簡單", "難爆")
      ],
      spookydate14a: [
         "<25>{#p/sans}* 簡單？\n* 不會吧。",
         "<25>{#f/3}* 帕派瑞斯的攻擊遠沒有那麼\n  簡單。",
         "<25>{#f/0}* 你會為他製作這些攻擊的時長\n  而感到驚訝。",
         "<26>{#f/0}* 喔，好吧。\n* 至少他休息了。",
         "<25>{#f/2}* 我是說，他把他的攻擊手冊\n  帶出來了。"
      ],
      spookydate14b: [
         "<25>{#p/sans}{#f/0}* 跟我說說看。",
         "<25>{#f/3}* 一次，在經過了漫長一天的\n  攻擊修改後...",
         "<25>{#f/0}* 帕派瑞斯向我透露了他先前的\n  所有制作成果。",
         "<25>{#f/0}* 說實話，在看到的那一刻，\n  我大受震撼。",
         "<25>{#f/2}* 也許有朝一日，我會設計\n  獨屬於我的攻擊。"
      ],
      spookydate15: [ "<25>{#p/sans}* 吃的來了。" ],
      spookydate16: [
         "<25>{#p/sans}* 不管怎樣，有一點你得承認：\n  他成功地超越了自我。",
         "<25>{#f/0}* 他的那些攻擊設計就是很好的\n  例子。",
         "<25>{#f/3}* 不久前，帕派瑞斯去拜訪了\n  皇家衛隊隊長...",
         "<25>{#f/0}* 並懇求她讓他加入皇家衛隊。",
         "<25>{#f/3}* 唉，她直接當著他的面把門\n  摔上了。\n* 經典的安黛因式作風。",
         "<25>{#f/0}* 但幾個小時後，當帕派瑞斯\n  帶著他的設計歸來時...",
         "<25>{#f/0}* 安黛因大受震撼，所以她決\n  定給予他...",
         "<25>{#f/2}* ... 好吧，咱姑且叫做\n  「軍人般的訓練」。"
      ],
      spookydate17: [ "<25>{#p/sans}* 喔對了，我想問你點事來著。" ],
      spookydate18: [
         "<25>{#p/sans}{#f/3}* 你曾聽說過一種{@fill=#ff0}會說話的星星{@fill=#fff}\n  嗎?",
         choicer.create("* （你要怎麼回答？）", "是", "否")
      ],
      spookydate19a: [
         "<25>{#p/sans}* 原來你都知道啊。",
         "<25>{#p/sans}* {@fill=#003cff}訊星{@fill=#fff}。"
      ],
      spookydate19b: [ "<25>{#p/sans}* 那麼，我來告訴你吧\n* 它叫{@fill=#003cff}訊星{@fill=#fff}。" ],
      spookydate20: [
         "<25>* 工廠到處都是。",
         "<25>* 如果它們接收到一條訊息，就\n  會一遍又一遍地重複著...",
         "<25>{#f/3}* 怎樣？",
         "<25>{#f/0}* 其實，有一天，帕派瑞斯對我\n  講了一些有趣的事。",
         "<25>* 有些時候，當四下無人...",
         "<25>* 一顆星星就會從天上飛下來，\n  對他說悄悄話。",
         "<25>* 有讚揚...\n* 有建議...\n* 有鼓勵...",
         "<25>{#f/3}* ... 也有預言。",
         "<25>{#f/0}* 很詭異，對麼？",
         "<25>* 肯定是誰用了訊星對他玩了\n  什麼詭計。",
         "<25>* 幫我留意一下，行嗎？",
         "<25>* 謝了。"
      ],
      spookydate21: [ "<25>{#p/sans}* ... 呃，烤爾比。\n* 能幫忙把雅莫萬用醬\n  遞給我嗎？" ],
      spookydate22: [ "<25>{#p/sans}{#f/8}* 真是美味啊。" ],
      spookydate23: [
         "<25>{#p/sans}{#f/8}* 行吧，我要回到我的崗位上\n  了...",
         "<25>{#f/8}* 記得把吃的帶上再出門。",
         "<25>{#f/9}* 後面可能會用上。"
      ],
      telescopeX: pager.create(
         0,
         () => [
            "<25>{#p/sans}* i'm thinking about getting into the telescope business.",
            "<25>{#f/3}* this here is what you'd call a PREMIUM telescope.",
            "<25>{#f/3}* i was planning on waiting to show it off tomorrow...",
            SAVE.data.b.voucher
               ? "<25>{#f/2}* but, with that premium membership voucher, you can use it early."
               : "<25>{#f/2}* but, since i know you, you can use it early.",
            "<25>{#f/0}* howzzabout it?",
            choicer.create("* （你要怎麼回答？）", "是", "否")
         ],
         [ "<25>{#p/sans}{#f/2}* wanna try my telescope?", choicer.create("* （你要怎麼回答？）", "是", "否") ]
      ),
      telescopeY: () =>
         SAVE.data.b.voucher
            ? ((SAVE.data.b.f_state_voucher = true),
              [
                 "<25>{#p/sans}* lemme guess...\n* it doesn't work?",
                 "<25>{#f/3}* oh, sorry, i thought you knew.",
                 "<25>{#f/2}* a premium membership requires a premium subscription.",
                 ...(world.kiddo
                    ? [
                         "<25>{#p/kidd}{#f/2}* You're kidding, right?",
                         "<25>{#p/sans}{#f/0}* nope.\n* premium subscription.",
                         "<25>{#p/kidd}{#f/1}* Darn!"
                      ]
                    : [])
              ])
            : [
                 "<25>{#p/sans}* lemme guess...\n* it doesn't work?",
                 "<25>{#f/3}* oh, sorry, i thought you knew.",
                 "<25>{#f/2}* a premium telescope requires a premium membership.",
                 ...(world.kiddo
                    ? [
                         "<25>{#p/kidd}{#f/1}* What if I give them my membership voucher?",
                         "<25>{#p/sans}{#f/0}* oh.\n* well, that'd require a premium subscription.",
                         "<25>{#p/kidd}{#f/1}* Darn!"
                      ]
                    : [])
              ],
      telescopeZ: [ "<25>{#p/sans}{#f/2}* oh well..." ],
      temmiepat1: [
         "<32>{#p/tem}{#npc/a}* p...\n* tem heard human loves to pet tem...",
         "<32>* u wana...\n* PET???",
         choicer.create("{#npc}* (What do you say?)", "Yuz.", "Nuu!")
      ],
      temmiepat2a: [ "<32>{#p/human}* (You pet temmie.)", "<32>{#p/tem}{#npc/a}* uwawawawah....." ],
      temmiepat2b: [ "<32>{#p/tem}{#npc/a}* ...", "<32>{#p/tem}{#npc/a}* Go away." ],
      temmiepat3a: [ "<32>{#p/human}* (You continue petting temmie.)", "<32>{#p/tem}{#npc/a}* uwawawawah....." ],
      temmiepat3b: [ "<32>{#p/tem}{#npc/a}* ..." ],
      temstatue: () =>
         SAVE.data.b.svr
            ? [
                 "<32>{#p/human}* (You flip the switch behind the statue.)",
                 "<32>{#p/human}* (The riddle here describes a statue like this one and hints at a sequence of notes.)",
                 "<32>{#p/human}* (It also mentions bringing an item to a specific opposing room.)"
              ]
            : [
                 "<32>{#p/human}* (You flip the switch behind the statue.)",
                 "<32>{#p/basic}* ... there's a riddle here.",
                 "<32>* \"Flip the switch and bring a friend to a place you've been before again...\"",
                 "<32>* \"A figure not unlike my own, a statue carved and set in stone.\"",
                 "<32>* \"Follow the sequence of notes divined, to unlock the path to the other side...\"",
                 "<32>* \"Bring the item to the room nextdoor, and all the power will be yours.\""
              ],
      temstatueAftuh: () =>
         SAVE.data.b.svr
            ? [
                 "<32>{#p/human}* (The riddle here describes a statue like this one and hints at a sequence of notes.)",
                 "<32>{#p/human}* (It also mentions bringing an item to a specific area.)"
              ]
            : [
                 "<32>{#p/basic}* \"Flip the switch and bring a friend to a place you've been before again...\"",
                 "<32>* \"A figure not unlike my own, a statue carved and set in stone.\"",
                 "<32>* \"Follow the sequence of notes divined, to unlock the path to the other side...\"",
                 "<32>* \"Bring the item to the room nextdoor, and all the power will be yours.\"",
                 "<32>* ... the switch back here has already been pulled."
              ],
      temstatueNormuh: () =>
         SAVE.data.b.svr
            ? [ "<32>{#p/human}* (The sign emphasizes the fame of the statue.)" ]
            : [ "<32>{#p/basic}* \"Statue of tem... very famus\"\n* \"VERY!!!!!!!!!\"" ],
      shard1: [ "<32>{#p/basic}* A pile of glass shards." ],
      shard2: [ choicer.create("* (Stomp on them?)", "是", "否") ],
      shard3: [ "<32>{#p/human}* (You decide not to stomp.)" ],
      shard4: [ "<32>{#p/basic}* With the might of your indomitable soles, you charged up the ultimate power move!" ],
      shard5: () => [
         "<32>{#p/basic}* The shards have been scattered across the room.",
         "<25>{#p/undyne}{#f/8}* PFFT-\n* OH MY GOD!!!",
         ...(SAVE.data.b.undyne_respecc
            ? [ "<25>{#p/undyne}{#f/1}* That's the kind of attitude I like to see!" ]
            : [
                 "<25>{#p/undyne}{#f/17}* I mean, uh, I mean, how could you do that to my kitchen...!",
                 "<25>{#p/undyne}{#f/4}* ..."
              ])
      ],
      sanscall2: () => [
         "<32>{#s/phone}{#p/event}* Ring, ring...",
         "<25>{#p/sans}{#f/0}* hey, you there?",
         ...(SAVE.data.n.state_foundry_muffet === 1
            ? [
                 "<25>{#f/3}* it's been a while since i heard from you.",
                 "<25>{#f/2}* didja fall into a wormhole or something?"
              ]
            : [
                 "<25>{#f/3}* some kid seemed really antsy to see you again.",
                 "<25>{#f/2}* didja make a new friend while i was gone?"
              ]),
         "<25>{#f/0}* ... heh.",
         "<25>{#f/0}* i guess you're okay.",
         "<25>{#f/3}* i did want to keep a closer eye on you, but...",
         "<25>{#f/0}* for some reason, this premium telescope can't see through walls.",
         "<25>{#f/2}* what a scam.\n* i'll have to call my premium fraud agent.",
         ...(world.population === 0
            ? [
                 "<25>{#f/0}* in the meantime, you should be fine for now.",
                 "<25>{#f/3}* the area ahead of you seems pretty empty, by my estimate.",
                 "<25>{#f/2}* but hey.\n* i could be wrong."
              ]
            : world.killed5
            ? [
                 "<25>{#f/0}* in the meantime, you shouldn't have too much more trouble.",
                 "<25>{#f/3}* the area ahead of you will be evacuated soon.",
                 "<25>{#f/2}* hmm... i wonder if anyone will still be out there."
              ]
            : geno()
            ? [
                 "<25>{#f/0}* in the meantime, just be careful what you do next.",
                 "<25>{#f/3}* it'd be a shame if we had to evacuate the foundry as well."
              ]
            : antiAteThreshold()
            ? [
                 "<25>{#f/0}* in the meantime, just be careful who you talk to.",
                 "<25>{#f/3}* rumor has it, someone's been roughhousing folks in the factory."
              ]
            : [
                 "<25>{#f/0}* in the meantime, just be careful who you talk to.",
                 "<25>{#f/3}* rumor has it, someone's been causing havoc near the trash depository."
              ]),
         "<32>{#s/equip}{#p/event}* Click..."
      ],
      trivia: {
         f_bbox: [
            "<32>{#p/basic}* A bastion box.\n* There's a human inside...",
            "<32>{#p/basic}* Seems this one was adopted by Gerson."
         ],
         ghostparty1: pager.create(
            0,
            () => [
               "<32>{#p/finalghost}* Hello there.\n* I still remember the first time we met...",
               ...[
                  [
                     "<32>{#p/finalghost}* Toriel was so proud of you for talking to me.",
                     "<32>* Personally, I don't think too much about how I talk to people, so...",
                     "<32>* I'm not sure what else to say about that."
                  ],
                  [
                     "<32>{#p/finalghost}* ... much to my dismay.",
                     "<32>* Being forced out of your dummy outright is kind of annoying."
                  ],
                  [
                     "<32>{#p/finalghost}* It was rather silly how you ran away from me.",
                     "<32>* Toriel had every right to be worried about you running from an inanimate object."
                  ],
                  [
                     "<32>{#p/finalghost}* ... not that I have any right to.",
                     "<32>* I mean, how could you actually be that boring?\n* It must be a skill."
                  ],
                  [
                     "<32>{#p/finalghost}* ... ha...",
                     "<32>* ... maybe, when I get another vessel, the two of us can... do our thing again.",
                     "<32>* You remember, don't you?"
                  ],
                  [
                     "<32>{#p/finalghost}* ... much to my dismay.",
                     "<32>* Being forced to move after such a long period of blissful inanimateness...",
                     "<32>* It was very uncomfortable."
                  ],
                  [
                     "<32>{#p/finalghost}* Toriel was so taken aback by your flirtatious ways.",
                     "<32>* Personally, I thought it was hilarious.",
                     "<32>* I was laughing on the inside."
                  ]
               ][SAVE.data.n.state_wastelands_dummy],
               "<32>* Anyway...",
               "<32>* We all decided to hang out at Blooky's before leaving for the new homeworld.",
               "<32>* I will say, Blooky sure had some \"interesting\" music queued for download here...",
               "<32>* What's a \"Hyper Rage\" anyway?",
               "<32>{#p/basic}* A song I wish I hadn't made.",
               "<32>{#p/finalghost}* Oh?\n* You made this?",
               "<32>{#p/basic}* Unfortunately, mew.",
               "<32>{#p/finalghost}* I can see why you would want to forget about it."
            ],
            [ "<32>{#p/finalghost}* She's looking to move past her violent ways." ]
         ),
         ghostparty2: pager.create(
            0,
            [
               "<32>{#p/basic}* So, being an angry dummy got boring after a while.",
               "<32>* Then I asked Alphys to make me a replica of her favorite Mew Mew doll, mew!",
               "<32>* Wow.\n* Wow!\n* WOW!!",
               "<32>* I haven't felt this happy in a long time."
            ],
            [ "<32>{#p/basic}* Sometimes all it takes is the right vessel, mew!!" ]
         ),
         ghostparty3: pager.create(
            0,
            [
               "<32>{#p/mettaton}{#e/mettaton/9}* WHILE BLOOKY'S BUSY AT THE SHOP, WE DECIDED WE'D LOOK AFTER THEIR FARM ONCE MORE.",
               "<32>{#e/mettaton/8}* OF COURSE, IT'S ONLY FOR A DAY BEFORE WE LEAVE THE OUTPOST.\n* BUT STILL.",
               "<32>{#e/mettaton/36}* THINKING BACK, I'VE BEEN PRETTY OVER-DRAMATIC ABOUT THE WHOLE THING.",
               "<32>{#e/mettaton/36}* BLOOKY NEVER DID -THAT- MUCH WRONG... I GUESS I JUST DIDN'T WANT TO ADMIT I WAS BORED.",
               "<32>{#e/mettaton/8}* BUT MAYBE THAT'S WHAT MAKES ME SUCH A GREAT ACTOR.",
               "<32>{#e/mettaton/37}* IT'S NOT ACTING IF YOU CAN'T PUT TOO MUCH EMOTION INTO IT!",
               "<32>{#e/mettaton/9}* ... OR SOMETHING LIKE THAT."
            ],
            [ "<32>{#p/mettaton}{#e/mettaton/9}* IF YOU EVER NEED AN ACTOR, YOU KNOW WHO TO CALL." ]
         ),
         sleepingdogs: () =>
            world.darker
               ? [
                    "<32>{#p/basic}* 一隻站得筆挺的狗子睡得正香。",
                    ...(world.goatbro && SAVE.flag.n.ga_asrielDogepoke++ < 1
                       ? [ "<25>{#p/asriel2}{#f/10}* 不得不說，她就是這種貨色。" ]
                       : [])
                 ]
               : [
                    "<32>{#p/basic}* This dog appears to be asleep, yet its stance is one of ultra battle-readiness.",
                    "<33>{#p/basic}* Quite the para-dogs!"
                 ],
         napstacouch: pager.create(
            0,
            () =>
               SAVE.data.b.svr
                  ? [ "<32>{#p/human}* (The couch appears to be new, but something tells you it's not.)" ]
                  : [
                       "<32>{#p/basic}* This couch looks just as worn as it does brand-new.",
                       ...(ghostpartyCondition()
                          ? [
                               "<32>{#p/basic}* We're ghosts, so we don't really need a couch, mew.",
                               "<32>* We just thought the room looked better with one in it!",
                               "<32>{#p/mettaton}* OF COURSE.\n* ANY GOOD LIVING SPACE REQUIRES AT LEAST ONE COUCH!",
                               "<32>{#p/mettaton}* PREFERABLY MTT-BRAND.",
                               "<32>{#p/finalghost}* This seems like an entirely pointless requirement."
                            ]
                          : [])
                    ],
            () =>
               SAVE.data.b.svr
                  ? [ "<32>{#p/human}* (The couch appears to be new, but something tells you it's not.)" ]
                  : [ "<32>{#p/basic}* This couch looks just as worn as it does brand-new." ]
         ),
         f_armor_sign: () =>
            SAVE.data.b.svr
               ? [ "<32>{#p/human}* (The sign warns of dogs who appear to be asleep.)" ]
               : [ "<32>{#p/basic}* \"Be wary of sleeping dogs.\"" ],
         f_backsign: () =>
            SAVE.data.b.svr
               ? [ "<32>{#p/human}* (The sign speaks of strength of will in times of uncertainty.)" ]
               : [ "<32>{#p/basic}* \"Even when you're lost, the will to find yourself shows through.\"" ],
         f_cheesetable: () =>
            SAVE.data.b.svr
               ? [ "<32>{#p/human}* (Something about this cheese doesn't sit right with you.)" ]
               : world.darker
               ? [ "<32>{#p/basic}* 幻象罷了。" ]
               : SAVE.data.n.plot === 72
               ? [ "<32>{#p/basic}* Despite being holographic, it looks like a small slice of cheese was taken..." ]
               : [ "<32>{#p/basic}* Holographic cheese.", "<32>{#p/basic}* The table is holographic, too." ],
         f_creamsign: () =>
            SAVE.data.b.svr
               ? [ "<32>{#p/human}* (The sign declares the monsters' ownership of the outpost.)" ]
               : world.population_area('s') < 6 || world.genocide || SAVE.data.n.plot === 72 // NO-TRANSLATE

               ? [ "<32>{#p/basic}* \"We claim this outpost as our own, never to be taken prisoner again.\"" ]
               : [ "<32>{#p/basic}* The glyphs have been painted over with a list of 21 different flavors." ],
         f_doge_sign: () =>
            SAVE.data.b.svr
               ? [ "<32>{#p/human}* (The sign derides boxes for their lack of real-time utility.)" ]
               : [
                    "<32>{#p/basic}* \"This is a box.\"",
                    "<32>* \"You can put an item inside or take an item out.\"",
                    "<32>* \"Why would you, though??\"\n* \"It's not like you can use items while they're inside.\"",
                    "<32>* \"Sincerely, a box critic.\""
                 ],
         f_doge1: () =>
            SAVE.data.b.svr
               ? [ "<32>{#p/human}* (The sign details the difference in power between human and monster SOULs.)" ]
               : [
                    "<32>{#p/basic}* \"Why did the humans attack?\"\n* \"Indeed, it seemed that they had nothing to fear.\"",
                    "<32>* \"Humans are unbelievably strong. It would take the SOUL of nearly every monster...\"",
                    "<32>* \"... just to equal the power of a single human SOUL.\""
                 ],
         f_doge3: () =>
            SAVE.data.b.svr
               ? [ "<32>{#p/human}* (The sign outlines a key weakness of human SOULs and its consequences.)" ]
               : [
                    "<32>{#p/basic}* \"But humans have one weakness. Ironically, it is the strength of their SOUL.\"",
                    "<32>* \"Its power allows it to persist outside the human body, even after death.\"",
                    "<32>* \"If a monster defeats a human, they can take its SOUL.\"",
                    "<32>* \"A monster with a human SOUL... a cosmic being with unfathomable power.\"",
                    ...(world.goatbro && SAVE.flag.n.ga_asrielBeast++ < 1
                       ? [ "<25>{#p/asriel2}{#f/15}* Cosmic doesn't even BEGIN to cover it..." ]
                       : [])
                 ],
         f_doge5: () =>
            SAVE.data.b.svr
               ? [ "<32>{#p/human}* (The sign depicts something the likes of which you've never seen before.)" ]
               : [
                    "<32>{#p/basic}* It's an illustration of a harrowing space creature...",
                    "<32>* There's something very unsettling about this drawing.",
                    ...(world.goatbro && SAVE.flag.n.ga_asrielDrawing++ < 1
                       ? [
                            "<25>{#p/asriel2}{#f/5}* Look, $(name)!\n* It's us!\n* ... sort of.",
                            "<26>{#f/4}* ... is that really how they think we looked?"
                         ]
                       : [])
                 ],
         f_gersonshop: () =>
            SAVE.data.b.svr
               ? [
                    [
                       "<25>{#p/asriel1}{#f/17}* To think he'd been running that store for this long...",
                       "<25>{#f/20}* I wonder what other things he's sold over the years.",
                       "<25>{#f/15}* Remember, in this timeline, I've only been here two weeks.",
                       "<25>{#f/13}* My guess is, he's mainly been selling trinkets...",
                       "<25>{#f/16}* Either from the early outpost days, or the old homeworld."
                    ],
                    [
                       "<25>{#p/asriel1}{#f/13}* I did hear something about a certain artifact...",
                       "<25>{#f/15}* One so dangerous, its use was banned in the war.",
                       "<25>{#f/16}* I'm not sure if Gerson ever sold it, though.",
                       "<25>{#f/13}* Even he might not be old enough to know if it exists."
                    ],
                    [
                       "<25>{#p/asriel1}{#f/15}* Knowledge about that artifact's existence...",
                       "<25>{#f/13}* It'd have to be within someone who was born even before the war.",
                       "<25>{#f/16}* Someone like that would know all about that sort of thing."
                    ]
                 ][Math.min(asrielinter.f_gersonshop++, 2)]
               : [ "<32>{#p/basic}* \"Gerson's Bits 'n' Bobs!\"\n* \"A humble store for all your factory life needs!\"" ],
         f_hub_sign: () =>
            SAVE.data.b.svr
               ? [ "<32>{#p/human}* (The sign lists off what lies in each direction.)" ]
               : [
                    "<32>{#p/basic}* \"Left - Dark Zone\"\n* \"Forward - Undyne's House\"\n* \"Right - Gerson's Shop\"",
                    "<32>{#p/basic}* \"Backward - Snail Preserve\""
                 ],
         f_lobbywindow: [
            "<32>{#p/human}* (You feel like you've already seen a window like this from another perspective.)"
         ],
         f_shinycab: () =>
            SAVE.data.b.svr
               ? [
                    [
                       "<25>{#p/asriel1}{#f/13}* Looks like it already cleaned out the room...",
                       "<25>{#f/17}* No trash here!"
                    ],
                    [
                       "<25>{#p/asriel1}{#f/15}* Unless you consider yourself a piece of trash.",
                       "<25>{#f/16}* Knowing you, that wouldn't surprise me.",
                       "<25>{#f/31}* You'd probably be proud of it or something."
                    ],
                    [
                       "<25>{#p/asriel1}{#f/13}* ... come on.",
                       "<25>{#f/17}* You don't REALLY believe you're a piece of trash, do you?"
                    ]
                 ][Math.min(asrielinter.f_shinycab++, 2)]
               : world.darker
               ? [ "<32>{#p/basic}* 一臺垃圾處理器。" ]
               : [
                    "<32>{#p/basic}* A garbage disposal box.\n* While active, it fills the room with ultra-hot gas.",
                    "<32>{#p/basic}* You wouldn't survive."
                 ],
         f_path1: () =>
            SAVE.data.b.svr
               ? [ "<32>{#p/human}* (The sign describes how a being can leave the force field.)" ]
               : [
                    "<32>{#p/basic}* \"When the humans trapped us, they sealed us in with a force field.\"",
                    "<32>* \"Only beings with a powerful SOUL can leave.\""
                 ],
         f_path2: () =>
            SAVE.data.b.svr
               ? [ "<32>{#p/human}* (The sign describes how the force field can be broken.)" ]
               : [
                    "<32>{#p/basic}* \"There is only one way to free ourselves.\"",
                    "<32>* \"If a huge power, equivalent to seven human SOULs, attacks the force field...\"",
                    "<32>* \"It will be destroyed.\""
                 ],
         f_path3: () =>
            SAVE.data.b.svr
               ? [ "<32>{#p/human}* (It appears this sign was very wrong indeed.)" ]
               : [
                    "<32>{#p/basic}* \"But this cursed place is not even in the solar system.\"",
                    "<32>* \"There is no way a human could find us out here.\"",
                    "<32>* \"We will remain trapped here forever.\""
                 ],
         f_puzzle1_sign: () =>
            SAVE.data.b.svr
               ? world.postnoot && world.nootflags.has('f_puzzle1') // NO-TRANSLATE

                  ? [
                       "<32>{#p/human}* (The sign tells you to ignore the puzzle outright.)",
                       ...[
                          [
                             "<25>{#p/asriel1}{#f/15}* Whoever wrote that must've had a bad sense of humor...",
                             "<25>{#f/17}* You'd have to be REALLY bored to ignore a puzzle this simple."
                          ],
                          [
                             "<25>{#p/asriel1}{#f/9}* What are you looking at me for?\n* I love puzzles.",
                             "<25>{#f/4}* Big ol' puzzle lover right here."
                          ],
                          [ "<25>{#p/asriel1}{#f/15}* ..." ]
                       ][Math.min(asrielinter.f_puzzle1_sign++, 2)]
                    ]
                  : [ "<32>{#p/human}* (The sign informs you on how to solve the puzzle.)" ]
               : world.postnoot && world.nootflags.has('f_puzzle1') // NO-TRANSLATE

               ? [ "<32>{#p/basic}* \"Walk right into the next room if you don't mind.\"\n* \"And ignore the switch.\"" ]
               : [
                    "<32>{#p/basic}* \"Move the pylons to guide the laser into the receiver.\"\n* \"Then press the switch.\""
                 ],
         f_puzzle2_sign: () =>
            SAVE.data.b.svr
               ? world.postnoot && world.nootflags.has('f_puzzle2') // NO-TRANSLATE

                  ? [
                       "<32>{#p/human}* (The sign claims nobody would care about this puzzle.)",
                       ...[
                          [
                             "<25>{#p/asriel1}{#f/13}* Yeah, puzzles like this just solve themselves sometimes...",
                             "<25>{#f/17}* What else can I say?"
                          ],
                          [
                             "<25>{#p/asriel1}{#f/10}* Huh?\n* You think I solved this one for you...?",
                             "<25>{#f/20}* No way.\n* Puzzles barely interest me at all."
                          ],
                          [ "<25>{#p/asriel1}{#f/15}* ..." ]
                       ][Math.min(asrielinter.f_puzzle2_sign++, 2)]
                    ]
                  : [ "<32>{#p/human}* (The sign informs you on how to solve the puzzle.)" ]
               : world.postnoot && world.nootflags.has('f_puzzle2') // NO-TRANSLATE

               ? [ "<32>{#p/basic}* \"Honestly, who cares about this puzzle?\"\n* \"It's not worth it.\"" ]
               : [ "<32>{#p/basic}* \"All pylons must be used in the puzzle solution.\"" ],
         f_puzzle3_sign: () =>
            SAVE.data.b.svr
               ? [
                    "<32>{#p/human}* (The sign declares the decided unfairness of this puzzle as the reason it was shut down.)"
                 ]
               : !world.genocide && world.trueKills < 30
               ? [ "<32>{#p/basic}* \"The puzzler's guild has shut this puzzle down on the basis of its unfairness.\"" ]
               : world.postnoot && world.nootflags.has('f_puzzle3') // NO-TRANSLATE

               ? [
                    "<32>{#p/basic}* The contents of this sign have been crossed out...",
                    "<32>* ... and crossed out again?"
                 ]
               : [
                    "<32>{#p/basic}* The contents of this sign have been crossed out...",
                    "<32>* ... with a distinct sense of illegible chicken-scratch."
                 ],
         f_statue_kidd: () =>
            SAVE.data.b.svr
               ? [ "<26>{#p/asriel1}{#f/20}* Er, try standing the other switch." ]
               : [ "<25>{#p/kidd}{#f/1}* Stand on the other switch!" ],
         f_telescope: () =>
            SAVE.data.b.svr
               ? [
                    [ "<25>{#p/asriel1}{#f/15}* Frisk.\n* It's no use.\n* Don't even bother." ],
                    [
                       "<25>{#p/asriel1}{#f/13}* Even if you COULD get a premium subscription...",
                       "<25>{#p/asriel1}{#f/15}* You'd never be able to cancel it."
                    ],
                    [ "<25>{#p/asriel1}{#f/16}* There's just too many premium hoops to jump through here." ]
                 ][Math.min(asrielinter.f_telescope++, 2)]
               : world.darker
               ? [ "<32>{#p/basic}* 一架望遠鏡。" ]
               : [ "<32>{#p/basic}* It's a \"premium\" telescope." ],
         f_temhistory: () =>
            SAVE.data.b.svr
               ? [ "<32>{#p/human}* (The painting depicts a tale of a nondescript nature.)" ]
               : world.darker
               ? [ "<32>{#p/basic}* The history of Tem." ]
               : SAVE.data.n.plot === 72
               ? [ "<32>{#p/basic}* Tem history.\n* May its richness and deepness never be forgotten." ]
               : [ "<32>{#p/basic}* Tem history.\n* The deepest and most rich history in all the galaxy." ],
         f_temhole: () =>
            SAVE.data.b.svr
               ? [ "<32>{#p/human}* (Through the hole, you stare into the rumbling underbelly of the factory.)" ]
               : world.runaway ||
                 SAVE.data.s.state_foundry_deathroom === 'f_village' || // NO-TRANSLATE

                 world.genocide ||
                 30 <= world.trueKills
               ? [ "<32>{#p/basic}* It's a hole." ]
               : [ "<32>{#p/basic}* It's a temmie in a hole.\n* A tem hole." ],
         f_trash: pager.create(
            1,
            [ "<32>{#p/basic}* 是垃圾。" ],
            () => (world.darker ? [ "<32>{#p/basic}* 是垃圾。" ] : [ "<32>{#p/basic}* 還是垃圾。" ]),
            () => (world.darker ? [ "<32>{#p/basic}* 是垃圾。" ] : [ "<32>{#p/basic}* 只是些垃圾..." ]),
            () => (world.darker ? [ "<32>{#p/basic}* 是垃圾。" ] : [ "<32>{#p/basic}* 垃圾就是垃圾。" ]),
            () => (world.darker ? [ "<32>{#p/basic}* 是垃圾。" ] : [ "<32>{#p/basic}* 垃圾形狀的垃圾。" ]),
            () => (world.darker ? [ "<32>{#p/basic}* 是垃圾。" ] : [ "<32>{#p/basic}* 真意外，這是垃圾。" ]),
            () => (world.darker ? [ "<32>{#p/basic}* 是垃圾。" ] : [ "<32>{#p/basic}* 垃圾！！！！！！！！" ])
         ),
         f_trash1: () =>
            SAVE.data.b.svr
               ? [ "<32>{#p/human}* (The tablet seems to describe the lifecycle of a particular kind of flower.)" ]
               : world.darker
               ? [ "<32>{#p/basic}* 這臺平板上的資料沒什麼重要的。" ]
               : [
                    "<33>{#p/basic}* It's an old tablet.\n* The data is mostly corrupted...",
                    "<32>* \"A flower from beyond... a second life... the shape of a star...\"",
                    "<32>* That's all you can make out."
                 ],
         f_trash2: () =>
            SAVE.data.b.svr
               ? [ "<32>{#p/human}* (The tablet describes various uses for wormholes.)" ]
               : world.darker
               ? [ "<32>{#p/basic}* 這臺平板上只記了些毫無意義的瑣事。" ]
               : [
                    "<32>{#p/basic}* It's a tablet with information pertaining to wormhole travel.",
                    "<32>* An additional section mentions the danger of wormhole weapons..."
                 ],
         f_trash3: () =>
            SAVE.data.b.svr
               ? [ "<32>{#p/human}* (The tablet contains the entire run of a science fiction anime.)" ]
               : world.darker
               ? [ "<32>{#p/basic}* 這臺平板上存了些影片。\n* 你對影片內容不感興趣。" ]
               : [
                    "<32>{#p/basic}* It's an old video tablet for a science fiction anime.",
                    "<32>* The cover reads \"MEW MEW STARFIRE: COMPLETE COLLECTION.\""
                 ],
         f_undynedummy: () =>
            SAVE.data.n.plot === 72
               ? [
                    "<32>{#p/basic}* I've been thinking of finding a new identity...",
                    "<32>* The \"Mad Dummy\" shtick just doesn't suit me anymore.",
                    "<32>* I wonder if Alphys could make me a new body...",
                    "<32>* Something like... a robo-girl, or... a digi-woman...",
                    "<32>* Or even a sci-fi doll?"
                 ]
               : SAVE.data.b.killed_mettaton
               ? []
               : SAVE.data.s.state_foundry_deathroom === 'f_undyne' // NO-TRANSLATE

               ? [
                    "<32>{#p/basic}* No.\n* No!\n* NO!!",
                    "<32>* You killed my only training partner.",
                    "<32>* How DARE you kill the only person who knows how to hit me properly!?",
                    ...(SAVE.data.n.bad_lizard < 2 && 49 <= SAVE.data.n.plot
                       ? [ "<32>* No matter how many dumb game shows I agree to be in to try and distract myself..." ]
                       : [ "<32>* No matter what lame excuse I come up with..." ]),
                    "<32>* I'll never be able to replace her!"
                 ]
               : world.goatbro
               ? [
                    "<32>{#p/basic}* Seriously.\n* Seriously?\n* SERIOUSLY!?",
                    "<32>{#p/basic}* You guys are genuinely adorable.",
                    ...(SAVE.flag.n.ga_asrielDummy++ < 1
                       ? [ "<25>{#p/asriel2}{#f/13}* Are we... really...", "<25>{#p/asriel2}{#f/16}* ..." ]
                       : [])
                 ]
               : SAVE.data.n.plot_date > 1.3 && SAVE.data.n.plot_date < 2.1
               ? SAVE.data.n.state_wastelands_toriel === 0
                  ? [ "<32>{#p/basic}* Don't worry.\n* Everything is fine.\n* This happens all the time." ]
                  : [ "<32>{#p/basic}* What.\n* What?\n* WHAT!?", "<32>{#p/basic}* This happens all the time." ]
               : SAVE.storage.inventory.contents.includes('tvm_mewmew') // NO-TRANSLATE

               ? [
                    "<32>{#p/basic}* Yeah, you're so cool with that Mew Mew doll of yours, huh?",
                    "<32>{#p/basic}* You think it's so adorable and lovable and...",
                    "<32>{#p/basic}* W-what!?\n* I'm not blushing!"
                 ]
               : 65 <= SAVE.data.n.plot
               ? SAVE.data.b.a_state_hapstablook
                  ? 68 <= SAVE.data.n.plot
                     ? [ "<32>{#p/basic}* You did it, human.", "<32>{#p/basic}* I'm sorry I ever doubted you." ]
                     : [
                          "<32>{#p/basic}* Well.\n* Well!\n* WELL!",
                          "<32>* You certainly know how to choose your battles."
                       ]
                  : [ "<32>{#p/basic}* Ugh.\n* Ugh!\n* UGH!", "<33>{#p/basic}* My life really sucks right now." ]
               : 63 <= SAVE.data.n.plot && SAVE.data.b.a_state_hapstablook
               ? [
                    "<32>{#p/basic}* Hey, aren't you supposed to be in Mettaton's next show?",
                    "<32>* What are you doing way back here?",
                    "<32>* Come on.\n* Come on!\n* COME ON!!",
                    "<32>* Get back in the spotlight so we can go forward with our plan!"
                 ]
               : SAVE.data.n.bad_lizard < 2 && 49 <= SAVE.data.n.plot
               ? [
                    "<32>{#p/basic}* So.\n* So!\n* SO!",
                    "<32>* You're a TV star now, huh?",
                    "<32>* Yeah, Mettaton usually has that effect on people."
                 ]
               : SAVE.data.n.plot === 47.2
               ? [ "<32>{#p/basic}* Ready or not, here she comes!!" ]
               : SAVE.data.n.state_wastelands_toriel === 0
               ? [ "<32>{#p/basic}* Hello!" ]
               : SAVE.data.b.f_state_dummypunch
               ? [
                    "<32>{#p/basic}* Hey.\n* Hey!\n* HEY!",
                    ...(SAVE.data.b.f_state_dummypunch_meanie
                       ? [
                            "<32>* You don't hit too bad for a dummy.",
                            "<32>* It's a pity...",
                            "<32>* BECAUSE I'M ALREADY TAKEN!",
                            "<32>* Go find your own dummy and get the hell outta my face!"
                         ]
                       : [
                            "<32>* Hands off the goods!\n* I ain't rated \"E\" for everyone, you know!",
                            "<32>* Wimpy strikes like yours will never compare to those of Undyne!"
                         ])
                 ]
               : SAVE.data.b.f_state_dummyhug
               ? [
                    "<32>{#p/basic}* Hey.\n* Hey!\n* HEY!",
                    "<32>* ... you're...\n* Actually a pretty good hugger.",
                    "<32>* So... even though I have my fear... I still appreciate the attempt."
                 ]
               : SAVE.data.b.f_state_dummytalk
               ? [
                    "<32>{#p/basic}* Hey.\n* Hey!\n* HEY!",
                    ...(SAVE.data.b.f_state_dummytalk_meanie
                       ? [
                            "<32>* You've got quite the intimidating stare.",
                            "<32>* It's a shame you wasted it on me...",
                            "<32>* BECAUSE I COULDN'T CARE LESS!"
                         ]
                       : [
                            "<32>* Eyes off the prize!\n* I ain't rated \"E\" for everyone, you know!",
                            "<32>* A weak stare like yours will never compare to Undyne's menacing gaze!"
                         ])
                 ]
               : [ "<32>{#p/basic}* What.\n* What?\n* WHAT!?", "<32>{#p/basic}* It's a living." ],
         f_view: [ "<25>{#p/kidd}{#f/14}* Awesome..." ],
         f_village_egg: () => [ "<32>{#p/basic}* It's hard-boiled." ],
         f_village_sign1: () =>
            SAVE.data.b.svr
               ? [ "<32>{#p/human}* (The sign welcomes you to the area.)" ]
               : [ "<32>{#p/tem}* \"hOI!!\"\n* \"welcom to...\"\n* \"TEM VILLAGE!!!\"" ],
         f_village_sign2: () =>
            SAVE.data.b.svr
               ? [ "<32>{#p/human}* (The sign implores you to check the nearby shop.)" ]
               : [ "<32>{#p/tem}* \"hOI!!\"\n* \"u shud check out...\"\n* \"TEM SHOP!!!\"" ],
         f_village_sign3: () =>
            SAVE.data.b.svr
               ? [ "<32>{#p/human}* (The sign agrees with another sign imploring you to check the nearby shop.)" ]
               : [ "<32>{#p/tem}* \"yaYA!! i AGREES!!\"\n* \"shud check...\"\n* \"TEM SHOP!!!\"" ],
         fstatue: () =>
            SAVE.data.b.svr
               ? [
                    [ "<25>{#p/asriel1}{#f/13}* This statue...", "<25>{#f/15}* Is this supposed to be of me...?" ],
                    [
                       "<25>{#p/asriel1}{#f/13}* I don't remember this being built...",
                       "<25>{#f/23}* Must've been after I...",
                       "<25>{#f/22}* ..."
                    ],
                    [ "<25>{#p/asriel1}{#f/22}* ..." ]
                 ][Math.min(asrielinter.fstatue++, 2)]
               : [ "<32>{#p/basic}* It's an old, derelict statue." ],
         hapstabed: () =>
            SAVE.data.b.svr
               ? [
                    [
                       "<25>{#p/asriel1}{#f/15}* I doubt even WE'D sleep very well in this bed.",
                       "<25>{#f/23}* No matter how comfortable that might sound."
                    ],
                    [
                       "<25>{#p/asriel1}{#f/13}* Yeah.\n* This is a ghost bed, Frisk.",
                       "<25>{#f/13}* Ghosts have different sorts of needs than... well, not ghosts.",
                       "<25>{#f/13}* And I'm not just talking about their sleeping arrangements."
                    ],
                    [
                       "<26>{#p/asriel1}{#f/13}* Ghosts, more than any other kind of monster...",
                       "<25>{#f/13}* Seem to focus more on the world around them.",
                       "<25>{#f/15}* It's like they never let what's in front of them...",
                       "<25>{#f/13}* Distract them from the bigger picture for long.",
                       "<25>{#f/17}* On second thought, maybe that's why Mettaton loves TV.",
                       "<25>{#f/16}* Getting the \"bigger picture\" is basically the whole idea..."
                    ],
                    [ "<26>{#p/asriel1}{#f/20}* Mettaton and his TV shows, am I right?" ]
                 ][Math.min(asrielinter.hapstabed++, 3)]
               : world.darker
               ? [ "<32>{#p/basic}* It's a ghost bed." ]
               : SAVE.data.n.plot === 72
               ? [ "<32>{#p/basic}* Just because you saved the galaxy doesn't mean you can sleep on a ghost bed." ]
               : [ "<32>{#p/basic}* It's a ghost bed.\n* You'd sleep right through it." ],
         hapstabook1: () => [
            ...(SAVE.data.b.svr ? [] : [ "<32>{#p/basic}* It's a voicebook." ]),
            "<32>{#p/human}* (You pick up the voicebook and open to the only recorded section.)",
            "<32>{#p/hapstablook}* Dear diary, volume one...",
            "<32>* Humans dream of so many fantastical stories, yet when I look out my window...",
            "<32>* ... all I can see is a wall.",
            "<32>* Is it right that we monsters have become used to this sad state of living?",
            "<32>* Is it right that only the youngest children seem to be truly alive?",
            "<32>* Our sense of wonder has been beaten out of us...",
            "<32>* There's no denying it now.",
            "<32>{#p/human}* (You put the book back down.)",
            ...(SAVE.data.b.svr || SAVE.data.b.oops || SAVE.data.n.state_foundry_hapstacom1++ > 0
               ? []
               : [
                    "<32>{#p/basic}* ... he was always like this in the early days...",
                    "<32>{#p/basic}* Always wanting everyone to be as happy as he was.",
                    "<32>{#p/basic}* Especially me."
                 ])
         ],
         hapstabook2: () => [
            ...(SAVE.data.b.svr ? [] : [ "<32>{#p/basic}* It's a voicebook." ]),
            "<32>{#p/human}* (You pick up the voicebook and open to the only recorded section.)",
            "<32>{#p/hapstablook}* Dear diary, volume two...",
            "<32>* I've been binge-watching old human television series.",
            "<32>* These people aren't like what I've been told... in fact, they're a lot like us.",
            "<32>* Living, laughing, loving...\n* Hurting and crying.\n* Doing what they believe in.",
            "<32>* They say humanity is a species that should be feared.",
            "<32>* But the more I see of them... the more I grow tired of that idea.",
            "<32>* Monsters aren't all starlight and roses, either.",
            "<32>{#p/human}* (You put the book back down.)",
            ...(SAVE.data.b.svr || SAVE.data.b.oops || SAVE.data.n.state_foundry_hapstacom2++ > 0
               ? []
               : [
                    "<32>{#p/basic}* I remember how, when we first met, he was the first one to open up to me.",
                    "<32>{#p/basic}* It wasn't long before I opened up, too..."
                 ])
         ],
         hapstabook3: () => [
            ...(SAVE.data.b.svr ? [] : [ "<32>{#p/basic}* It's a voicebook." ]),
            "<32>{#p/human}* (You pick up the voicebook and open to the only recorded section.)",
            "<32>{#p/hapstablook}* Dear diary, volume three...",
            "<32>* It's been a hard day at the farm for Blooky and me.",
            "<32>* Two of the snails we'd been looking after escaped, and we couldn't find them.",
            "<32>* No matter what I do, something like this always happens.",
            "<32>* Blooky says it's fine, of course, but they say that about everything.",
            "<32>* And I wonder why I still bother working here.",
            "<32>{#p/human}* (You put the book back down.)",
            ...(SAVE.data.b.svr || SAVE.data.b.oops || SAVE.data.n.state_foundry_hapstacom3++ > 0
               ? []
               : [
                    "<32>{#p/basic}* I tried to help the family out, but with the way things were...",
                    "<32>{#p/basic}* There wasn't much I could do."
                 ])
         ],
         hapstabook4: () => [
            ...(SAVE.data.b.svr ? [] : [ "<32>{#p/basic}* It's a voicebook." ]),
            "<32>{#p/human}* (You pick up the voicebook and open to the only recorded section.)",
            "<32>{#p/hapstablook}* Dear diary, volume four...",
            "<32>* I was at the store today when I ran into a girl... Alphys, I think?",
            "<32>* Apparently, she's next in line to be the royal scientist.\n* Who would've thought?",
            "<32>* Anyway, her and I have become fast friends due to our shared love of humanity.",
            "<33>* Funny... the previous royal scientist was sympathetic, too.",
            "<32>* I wonder why that is.",
            "<32>{#p/human}* (You put the book back down.)",
            ...(SAVE.data.b.svr || SAVE.data.b.oops || SAVE.data.n.state_foundry_hapstacom4++ > 0
               ? []
               : [ "<32>{#p/basic}* Oh, if only you knew..." ])
         ],
         hapstabook5: () => [
            ...(SAVE.data.b.svr ? [] : [ "<32>{#p/basic}* It's a voicebook." ]),
            "<32>{#p/human}* (You pick up the voicebook and open to the only recorded section.)",
            "<32>{#p/hapstablook}* Dear diary, volume five...",
            "<32>* Alphys and I have started work on a new project.",
            "<32>* We'll be taking inspiration from those imaginative humans...",
            "<32>* ... by starting a new, public- broadcast television series!",
            "<32>* I've already written numerous elaborate scripts.",
            "<32>* If this doesn't lift the public's spirits, then I don't know what will!",
            "<32>* Haha... let's just say things could get \"explosive.\"",
            "<32>{#p/human}* (You put the book back down.)",
            ...(SAVE.data.b.svr || SAVE.data.b.oops || SAVE.data.n.state_foundry_hapstacom5++ > 0
               ? []
               : [ "<32>{#p/basic}* All he ever wanted to do was make them happy..." ])
         ],
         hapstabook6: () => [
            ...(SAVE.data.b.svr ? [] : [ "<32>{#p/basic}* It's a voicebook." ]),
            "<32>{#p/human}* (You pick up the voicebook and open to the only recorded section.)",
            "<32>{#p/hapstablook}* Dear diary, volume six...",
            "<32>* That Alphys... shes done something I never could have imagined.",
            "<32>* Thanks to her, my future seems brighter than ever...",
            "<32>* ... I only hope the others come to understand my choice.",
            "<32>* No matter what happens to me next, a part of me will always miss being with you.",
            "<32>* Please... never forget that.\n* Even if I myself do.",
            "<32>{#p/human}* (You put the book back down.)",
            ...(SAVE.data.b.svr || SAVE.data.b.oops || SAVE.data.n.state_foundry_hapstacom6++ > 0
               ? []
               : SAVE.data.n.plot < 68
               ? [
                    "<32>{#p/basic}* Sentimental as ever, eh?",
                    "<32>{#p/basic}* Well.\n* With any luck, you'll be re- united on better terms soon."
                 ]
               : [
                    "<32>{#p/basic}* Sentimental as ever, eh?",
                    "<32>{#p/basic}* Heh.\n* I'm just glad you got to re- unite with them in the end."
                 ])
         ],
         hapstacouch: () =>
            SAVE.data.b.svr
               ? [ "<32>{#p/human}* (But you knew you still had a little farther to go before you could rest.)" ]
               : world.darker
               ? [ "<32>{#p/basic}* It's just a couch." ]
               : SAVE.data.n.plot === 72
               ? [
                    "<32>{#p/basic}* Another couch, another temptation... you're so tired after all this traveling.",
                    "<32>{#p/basic}* ... but you can't stay here forever!"
                 ]
               : [
                    "<32>{#p/basic}* Another couch, another temptation... you're so tired after all this traveling.",
                    "<32>{#p/basic}* ... but you have to keep going!"
                 ],
         hapstaposter: () =>
            SAVE.data.b.svr
               ? [ "<32>{#p/human}* (The caption on this poster describes a love story.)" ]
               : [ "<32>{#p/basic}* \"Two star-crossed lovers fall into a digital abyss...\"" ],
         hapstatv: () =>
            SAVE.data.b.svr
               ? [
                    [
                       "<25>{#p/asriel1}{#f/13}* This thing must be centuries old...",
                       "<25>{#f/17}* Makes you wonder how it got here from Earth so quickly."
                    ],
                    [
                       "<25>{#p/asriel1}{#f/13}* You do realize Earth is thousands of lightyears from here, right?",
                       "<25>{#f/15}* The odds of this being here are so slim...",
                       "<25>{#f/16}* That part of me thinks it wasn't an accident.",
                       "<25>{#f/10}* But why would the humans send us their centuries-old junk?"
                    ],
                    [
                       "<25>{#p/asriel1}{#f/17}* My theory is that some human was... secretly on our side.",
                       "<25>{#f/13}* They couldn't send us modern technology, that'd be detected.",
                       "<25>{#f/1}* But if they sent us ancient technology...",
                       "<25>{#f/2}* Well, the other humans might not have noticed.",
                       "<25>{#f/3}* But that's just a theory."
                    ],
                    [ "<25>{#p/asriel1}{#f/21}* Sure would've been nice to have an extra ally out there..." ]
                 ][Math.min(asrielinter.hapstatv++, 3)]
               : [ "<32>{#p/basic}* An old earth television set." ],
         hapstawindow: () =>
            SAVE.data.b.svr
               ? [ "<32>{#p/human}* (Through the window, you gaze long into the wall on the other side.)" ]
               : world.darker
               ? [ "<32>{#p/basic}* There's nothing to see here." ]
               : [ "<32>{#p/basic}* A beautiful view... of the outside foundry wall." ],
         k_bonedrawer: pager.create(
            0,
            () => [
               "<25>{#p/undyne}{#f/1}* I'll be honest...",
               "<25>{#f/14}* It's been a long time since I've seen the bottom of that drawer.",
               SAVE.data.b.oops
                  ? "<32>{#p/basic}* Nothing but bones."
                  : "<32>{#p/basic}* It's a drawer reserved just for Papyrus.\n* I like this."
            ],
            () => [
               SAVE.data.b.oops
                  ? "<32>{#p/basic}* Nothing but bones."
                  : "<32>{#p/basic}* It's a drawer reserved just for Papyrus.\n* I like this."
            ]
         ),
         k_broadsword: pager.create(
            0,
            () => [
               "<25>{#p/undyne}{#f/1}* Humans can be awful, but their history... kinda rules.",
               "<25>{#f/1}* Case in point, this giant energy saber!",
               "<25>{#f/1}* Historically, humans wielded sabers up to ten times their size.",
               "<25>{#f/15}* Not to mention their inter-dimensional portals...",
               "<25>{#f/15}* Colossal parsec-length battleships...",
               "<25>{#f/1}* When I first heard about it, I immediately wanted my own!",
               "<25>{#f/14}* That's why Alphys and I built a giant replica saber together.",
               "<25>{#f/12}* She even figured out all the specs herself!",
               SAVE.data.b.oops
                  ? "<32>{#p/basic}* This weapon seems to have quite a storied past."
                  : "<32>{#p/basic}* I once saw a saber just like this... except it was real, and a lot smaller."
            ],
            () => [
               SAVE.data.b.oops
                  ? "<32>{#p/basic}* This weapon seems to have quite a storied past."
                  : "<32>{#p/basic}* I once saw a saber just like this... except it was real, and a lot smaller."
            ]
         ),
         k_closet: pager.create(
            0,
            () => [
               "<25>{#p/undyne}{#f/1}* That's my snack closet.",
               "<25>{#f/17}* What, you thought I had a bedroom back there or something?",
               "<25>{#f/8}* Pfft, hah!\n* Everyone knows I sleep on a cold, hard floor.",
               SAVE.data.b.oops
                  ? "<32>{#p/basic}* 鎖住了。"
                  : "<32>{#p/basic}* I get the feeling there's more to this \"closet\" than snacks."
            ],
            () => [
               SAVE.data.b.oops
                  ? "<32>{#p/basic}* 鎖住了。"
                  : "<32>{#p/basic}* I get the feeling there's more to this \"closet\" than snacks."
            ]
         ),
         k_fridge: pager.create(
            0,
            () => [
               "<25>{#p/undyne}{#f/11}* Cold food and I don't really get along.",
               "<25>{#f/14}* Luckily, Alphys modded my fridge so it heats up food instead!",
               "<25>{#f/1}* Neat, huh?",
               SAVE.data.b.oops
                  ? "<32>{#p/basic}* There are several pre-heated plates of spaghetti inside."
                  : "<32>{#p/basic}* A hot fridge would have done wonders back home."
            ],
            () => [
               SAVE.data.b.oops
                  ? "<32>{#p/basic}* There are several pre-heated plates of spaghetti inside."
                  : "<32>{#p/basic}* A hot fridge would have done wonders back home."
            ]
         ),
         k_otherdrawer: pager.create(
            0,
            () => [
               SAVE.data.b.undyne_respecc
                  ? "<26>{#p/undyne}{#f/12}* Careful with that stuff."
                  : "<25>{#p/undyne}{#f/17}* Steal anything from that drawer, and you're DEAD.",
               "<32>{#p/basic}* There's a silverware drawer.\n* It has forks, spoons, knives...",
               "<32>* ... tiny cosmo-spears, plasma sabers, dimensional axes, anti-grav boomerangs..."
            ],
            [
               "<32>{#p/basic}* There's a silverware drawer.\n* It has forks, spoons, knives...",
               "<32>* ... tiny cosmo-spears, plasma sabers, dimensional axes, anti-grav boomerangs..."
            ]
         ),
         k_piano: pager.create(
            0,
            [
               "<25>{#p/undyne}{#f/1}* That's my piano.",
               "<25>{#f/16}* Say what you want about humans, they have great taste in acoustics!",
               "<32>{#p/basic}* Smells... scientific."
            ],
            [ "<32>{#p/basic}* Smells... scientific." ]
         ),
         k_sink: pager.create(
            0,
            [
               "<25>{#p/undyne}{#f/1}* I once forgot to turn the sink off before heading out to work.",
               "<25>{#f/17}* When I got back home, the house was completely flooded...",
               "<25>{#f/8}* Not that it was a problem for ME!\n* Fuhuhu!",
               "<32>{#p/basic}* The drain is eerily clean of any fur or hair."
            ],
            [ "<32>{#p/basic}* The drain is eerily clean of any fur or hair." ]
         ),
         k_stove: pager.create(
            0,
            [
               "<25>{#p/undyne}{#f/1}* This stove is supposed to be some top-of-the- line MTT thing.",
               "<25>* But, as much as technology advances...",
               "<25>* Nothing will ever beat food home-cooked with fire magic.",
               "<32>{#p/basic}* The stove has seen an average amount of use."
            ],
            [ "<32>{#p/basic}* The stove has seen an average amount of use." ]
         ),
         k_window: pager.create(
            0,
            () => [
               "<25>{#p/undyne}{#f/16}* Yeah.",
               "<25>{#f/14}* Papyrus tends to go the \"scenic route.\"",
               "<32>{#p/basic}* He flew out so fast, it triggered a sonic boom."
            ],
            [ "<32>{#p/basic}* He flew out so fast, it triggered a sonic boom." ]
         ),
         plankstop: () =>
            SAVE.data.b.svr
               ? [
                    [ "<25>{#p/asriel1}{#f/13}* Seems like a dead end." ],
                    [ "<25>{#p/asriel1}{#f/15}* We're not just stand here all day, right?" ],
                    [ "<25>{#p/asriel1}{#f/10}* What are we even doing out here." ],
                    [ "<25>{#p/asriel1}{#f/10}* ..." ]
                 ][Math.min(asrielinter.plankstop++, 3)]
               : world.darker || SAVE.data.n.plot < 42.1
               ? []
               : [ "<32>{#p/basic}* The endless abyss of space is met only by the distant sight of the factory's edge." ],
         wallsign4: () =>
            SAVE.data.b.svr
               ? [ "<32>{#p/human}* (The sign labels its location.)" ]
               : [ "<32>{#p/basic}* \"Left - Maintenance Shaft\"\n* \"Right - Foundry Exit\"" ]
      },
      truetext: {
         doge1: [ "<32>{#p/basic}* ... well, that went better than I expected." ],
         muffet: [ "<32>{#p/basic}* ... that was too close." ],
         preundyne: [
            "<32>{#p/basic}* ...",
            "<32>* To doubt you after everything you've done...",
            "<32>* ... no.\n* I know you'll find a way to get through to her.",
            "<32>* You just have to believe in yourself... right?",
            "<32>* ...\n* Go on, step forward.",
            "<32>* Show her the kindness she needs to see."
         ],
         unddate: () => [
            "<32>{#p/basic}* So.\n* One second, we're running for our lives from her...",
            "<32>* And the next?",
            "<32>* We're cooking spaghetti with her.\n* And burning her house down.",
            "<32>{#p/human}* (You hear a small giggle.)",
            ...(SAVE.data.n.plot > 64.1
               ? [
                    "<32>{#p/basic}* Jeez.\n* We've come a long way since you first arrived, huh?",
                    "<32>* Even if there's not much left to see now...",
                    "<32>* I still appreciate the time I've spent with you."
                 ]
               : [
                    "<32>{#p/basic}* Oh, uh, sorry!\n* I...",
                    "<32>* It's been a while since I've felt... happy like this.",
                    "<32>* With you here, things never seem to go wrong."
                 ]),
            "<32>* So... you just keep doing what you're doing, alright?",
            "<32>* And I'll...",
            "<32>* I'll be here for you."
         ],
         undyne1: [
            "<32>{#p/basic}* We did it.\n* We really did it!",
            "<32>* I mean, uh, you did it.",
            "<32>* Yeah...",
            "<32>* ... at least it'll be nice to finally have her off your back.",
            "<32>* At least for now.",
            "<32>* ... heh...\n* Well done, partner.",
            "<32>* I don't think anyone's going to replicate THAT stunt again."
         ],
         view1: [
            "<32>{#p/basic}* Look at that...",
            "<32>* ...\n* It's the Citadel.",
            "<32>* It's where this journey's been taking us.",
            "<32>* The silver city, nestled in the twin arches of Aradon...",
            "<32>* ...\n* I'm getting ahead of myself.",
            "<32>* We've still got a ways to go before we get there, so...",
            "<32>* For now, let's just admire the view before us."
         ]
      },
      unddate0: () =>
         world.trueKills > 0 && SAVE.data.n.state_foundry_undyne === 0
            ? [
                 "<18>{#p/papyrus}SO YOU'RE HERE.",
                 "<18>{#f/5}UNDYNE... ISN'T READY TO BEFRIEND YOU RIGHT NOW.",
                 SAVE.data.b.undyne_respecc
                    ? "<18>{#f/5}SHE BLAMES HERSELF FOR TRUSTING YOU..."
                    : "<18>{#f/5}SHE BLAMES HERSELF FOR LETTING YOU GET AWAY...",
                 "<18>{#f/6}AND THAT YOU... DESERVE TO DIE??",
                 "<18>{#f/7}WELL, I DISAGREE!",
                 "<18>{#f/0}BUT THAT'S OKAY.",
                 "<18>{#f/0}I'LL JUST WAIT HERE UNTIL SHE RETURNS."
              ]
            : [
                 "<18>{#p/papyrus}OHO, THE HUMAN ARRIVES!",
                 ...(SAVE.data.n.state_foundry_undyne > 0
                    ? [
                         "<18>{#f/4}... THOUGH, I'M NOT QUITE SURE WHERE UNDYNE IS.",
                         "<18>{#f/5}SHE ISN'T NORMALLY OUT THIS LONG...",
                         "<18>{#f/6}AND SHE WON'T EVEN ANSWER THE PHONE!",
                         "<18>{#f/0}WELL, I'LL JUST WAIT HERE UNTIL SHE RETURNS."
                      ]
                    : [
                         "<18>{#f/4}ARE YOU UP FOR THE DAUNTING TASK...",
                         "<18>{#f/1}OF BEFRIENDING THE CAPTAIN OF THE ROYAL GUARD!?!?",
                         choicer.create("* (Befriend Undyne?)", "是", "否")
                      ])
              ],
      unddate0x: () =>
         world.trueKills > 0 || SAVE.data.n.state_foundry_undyne > 0
            ? [
                 "<18>{#p/papyrus}{#f/0}UNDYNE'S NOT HERE RIGHT NOW.",
                 "<18>{#p/papyrus}{#f/4}YOU'LL HAVE TO WAIT FOR HER LIKE I ALWAYS DO."
              ]
            : [
                 "<18>{#p/papyrus}{#f/0}OKAY!\nALL READIED UP TO HANG OUT?",
                 choicer.create("* (Befriend Undyne?)", "是", "否")
              ],
      
      unddate1a: [ "<18>{#p/papyrus}{#f/0}OKAY!\nSTAND BEHIND ME!" ],
      unddate1b: pager.create(
         0,
         [ "<18>{#p/papyrus}{#f/4}HMM... STILL GETTING READY?", "<18>{#f/0}WELL, TAKE YOUR TIME!" ],
         [ "<18>{#p/papyrus}{#f/0}TAKE YOUR TIME!" ]
      ),
      unddate2a: [ "<18>{#p/papyrus}{#f/4}PSST...\nGIVE HER THIS." ],
      unddate2b: [ "<18>{#f/0}SHE LOVES THESE!" ],
      unddate3: [
         "<25>{#p/undyne}{#f/14}* Hi, Papyrus!",
         "<25>{#f/1}* Ready for your extra- private, one-on-one training?",
         "<18>{#p/papyrus}YOU BET I AM!",
         "<18>{#f/9}AND I BROUGHT A FRIEND!"
      ],
      unddate4: () =>
         SAVE.data.b.undyne_respecc
            ? [
                 "<25>{#p/undyne}{#f/1}* Hi, I don't think we've...",
                 "<25>{#f/8}* ... OH MY GOD!!!",
                 "<18>{#p/papyrus}{#f/6}... UNDYNE?",
                 "<25>{#p/undyne}{#f/12}* Pfft, I can't believe you actually brought THEM here.",
                 "<18>{#p/papyrus}{#f/5}...",
                 "<25>{#p/undyne}{#f/1}* Come on, get inside!"
              ]
            : [
                 "<25>{#p/undyne}{#f/1}* Hi, I don't think we've...",
                 "<25>{#f/4}* ...",
                 "<18>{#p/papyrus}...",
                 "<25>{#p/undyne}{#f/5}* ...",
                 "<18>{#p/papyrus}{#f/5}...",
                 "<25>{#p/undyne}{#f/17}* Why don't.\n* You two.\n* Come in?"
              ],
      
      unddate5: [ "<18>{#p/papyrus}HERE, UNDYNE.", "<18>MY FRIEND WANTED YOU TO HAVE THIS!" ],
      unddate5x: [
         "<25>{#p/undyne}{#f/17}* There you are!",
         "<25>{#f/1}* We've been waiting here FOREVER for you!",
         "<18>{#p/papyrus}{#f/4}AND, DON'T WORRY, I ALREADY SHOWED UNDYNE YOUR GIFT.",
         "<18>{#f/0}SHE LOVED IT!",
         "<25>{#p/undyne}{#f/14}* Yeah, uh...",
         "<25>{#f/12}* I sure did!"
      ],
      unddate6: [ "<25>{#p/undyne}{#f/1}* Uhhh... thanks." ],
      unddate7: [ "<25>{#f/14}* I'll, uh, put it with the others." ],
      unddate8: [ "<25>* So are we ready to start?" ],
      unddate9: [
         "<18>{#p/papyrus}{#f/1}WHOOPSY DOOPSY!\nI JUST REMEMBERED!",
         "<18>{#f/0}I HAVE TO CHECK ON MY BROTHER!!",
         "<18>{#f/9}YOU TWO HAVE FUN!!!"
      ],
      unddate10: () =>
         SAVE.data.b.undyne_respecc
            ? [
                 SAVE.data.b.f_state_undynecheck
                    ? "<26>{#p/undyne}{#f/17}* If it isn't the human who tried to break into my house IN FRONT OF ME."
                    : "<25>{#p/undyne}{#f/1}* Well then.\n* Look who's come crawling back for more.",
                 "<25>{#f/16}* To be honest, though, I dunno if I'm in the mood for another fight.",
                 "<25>{#f/12}* Still, I can get you something to drink in the meantime!",
                 "<25>{#f/1}* Have a seat, and I'll see what I can do."
              ]
            : [
                 "<25>{#p/undyne}{#f/11}* ...",
                 ...(SAVE.data.b.f_state_undynecheck
                    ? [
                         "<25>* So why were YOU so desperate to break into my house earlier?",
                         "<25>* Is this some kind of humilation tactic?",
                         "<25>* To parade into my house and act like you OWN the place?"
                      ]
                    : [
                         "<25>* So why are YOU here?",
                         "<25>* To rub your victory in my face?",
                         "<25>* To humiliate me even further?"
                      ]),
                 "<25>{#f/4}* IS THAT IT?",
                 choicer.create("* （你要怎麼回答？）", "是", "否")
              ],
      unddate11a: [
         "<25>{#p/undyne}{#f/11}* Then why are you here?",
         "<25>{#f/1}* Wait, I get it.",
         "<25>* You think that I'm gonna be friends with you, huh?",
         "<25>{#f/17}* Right???",
         choicer.create("* （你要怎麼回答？）", "是", "否")
      ],
      unddate11a1a: [
         "<25>{#p/undyne}{#f/14}* Really?\n* How delightful!\n* I accept!",
         "<25>{#f/8}* Let's all frolick in the fields of friendship!",
         "<25>{#f/7}* ... NOT!",
         "<25>{#f/1}* You're the enemy of everyone's hopes and dreams!",
         "<25>* If you weren't my houseguest, I'd kick you out right now!",
         "<25>{#f/5}* ..."
      ],
      unddate11a1b: [
         "<25>{#p/undyne}{#f/15}* Then again...",
         "<25>{#f/17}* ...",
         "<25>{#f/4}* WHAT ARE YOU LOOKING AT?",
         "<25>{#f/5}* I WOULDN'T MAKE FRIENDS WITH YOU JUST TO IMPRESS SOMEONE???",
         "<25>{#f/12}* Not at all!",
         "<25>{#f/1}* In fact, my sudden change of mind...",
         "<25>{#f/7}* Comes from nothing but a burning passion for VENGEANCE!"
      ],
      unddate11a2: [
         "<25>{#p/undyne}{#f/13}* ...",
         "<25>{#f/11}* So... let me get this straight.",
         "<25>* First, you parade into my house.",
         "<25>{#f/7}* And then you don't give me a reason WHY??",
         "<25>{#f/4}* You little BRAT!\n* If you weren't my houseguest, I'd...!",
         "<25>{#f/5}* ...",
         "<25>{#f/4}* ... no, you know what?",
         "<25>{#f/7}* I'll prove you WRONG.",
         "<25>{#f/1}* And we aren't JUST going to be friends."
      ],
      unddate11b: [
         "<25>{#p/undyne}{#f/4}* Oh-ho-ho.",
         "<25>{#f/7}* Well, I've got news for you, BRAT.",
         "<25>{#f/1}* You're on MY battlefield now!",
         "<25>{#f/7}* And you AREN'T going to humiliate me.",
         "<25>{#f/11}* No.\n* I'll TELL you what's going to happen.",
         "<25>{#f/17}* We're going to hang out.",
         "<25>{#f/17}* We're going to have a good time.",
         "<25>{#f/7}* We're going to be \"friends.\""
      ],
      unddate12a: [
         "<25>{#f/1}* I'll make you like me so much...",
         "<25>{#f/7}* You won't be able to think of anyone else!"
      ],
      unddate12b: [ "<25>{#f/8}* Fuhuhuhu!\n* It's the PERFECT REVENGE!!" ],
      unddate12c: [ "<25>{#f/12}* Err... why don't you have a seat?" ],
      unddate13: () => [
         SAVE.data.b.undyne_respecc
            ? "<25>{#p/undyne}{#f/1}* Need anything?"
            : "<25>{#p/undyne}{#f/14}* Need anything?",
         choicer.create("* （你要怎麼回答？）", "Hungry", "Book", "Home", "Nothing")
      ],
      unddate13a1: [
         "<25>{#p/undyne}{#f/1}* You want a snack or something?",
         "<25>{#f/1}* Let me see what I have in the closet."
      ],
      unddate13a2: [ "<25>{#p/undyne}{#f/1}* Ah... this should do nicely." ],
      unddate13a3: [ "<25>{#p/undyne}{#f/14}* All yours...\n* Fuhuhu." ],
      unddate13a4a: [ "<32>{#p/human}* （你帶的東西太多了。）" ],
      unddate13a4b: [ "<32>{#p/human}* (You got the Odd Snack.)" ],
      unddate13a5: () =>
         SAVE.data.b.drop_snack
            ? [
                 "<25>{#p/undyne}{#f/17}* I know dropping food is fun, but I can't let it all go to waste.",
                 "<25>{#p/undyne}{#f/12}* Sorry."
              ]
            : SAVE.data.b.undyne_respecc
            ? [
                 "<25>{#p/undyne}{#f/17}* Just because you're my friend doesn't mean you can have two snacks!",
                 "<25>{#p/undyne}{#f/1}* Maybe some other time."
              ]
            : [
                 "<25>{#p/undyne}{#f/11}* Listen punk, it's one snack per person here.",
                 "<25>* Get with the program or get lost."
              ],
      unddate13b: pager.create(
         0,
         () => [
            "<25>{#p/undyne}{#f/13}* A book???\n* Does this look like a librarby to you?",
            "<25>{#f/1}* The only books you'll find in the kitchen are cookbooks!",
            "<25>{#f/4}* Which I don't use, because cooking is supposed to be an ART.",
            "<25>{#f/5}* Why does nobody seem to get that???",
            SAVE.data.b.undyne_respecc
               ? "<25>{#f/1}* ... let me know if you need anything else."
               : "<25>{#f/14}* Well, let me know if you need anything else!"
         ],
         [
            "<25>{#p/undyne}{#f/1}* Look, there's a librarby in Starton.",
            "<25>{#f/1}* If you really want to read a book, that's your best bet.",
            "<25>{#f/7}* But not right now!!!",
            "<25>{#f/14}* ... let me know if you need anything else."
         ]
      ),
      unddate13c: pager.create(
         0,
         () => [
            "<25>{#p/undyne}{#f/3}* ...",
            "<25>{#f/17}* This IS home.",
            "<25>{#f/17}* You're already HERE.",
            "<25>{#f/16}* Unless you mean the home planet...",
            "<25>{#f/9}* ...",
            "<25>{#f/19}* But nothing can bring that back.",
            SAVE.data.b.undyne_respecc
               ? "<25>{#f/1}* ... I'll be here if you need anything else."
               : "<25>{#f/14}* Well, let me know if you need anything else!"
         ],
         () => [
            "<25>{#p/undyne}{#f/16}* I'd give a description of that place if I could, y'know.",
            "<25>{#f/16}* But I was born here, on the outpost...",
            "<25>{#f/9}* The memory of our world seems to fade more and more every day.",
            SAVE.data.b.undyne_respecc
               ? "<25>{#f/1}* ... let me know if you need anything else."
               : "<25>{#f/12}* ... let me know if you need anything else."
         ]
      ),
      unddate13d: () => [
         SAVE.data.b.undyne_respecc
            ? "<25>{#p/undyne}{#f/1}* Well, alright.\n* Remember, I'm here if you change your mind."
            : "<25>{#p/undyne}{#f/14}* Well, alright.\n* Remember, I'm here if you change your mind!"
      ],
      unddate14: [ choicer.create("* (Sit down?)", "是", "否") ],
      unddate15a: () => [
         "<25>{#p/undyne}{#f/14}* Comfortable?",
         SAVE.data.b.undyne_respecc
            ? "<25>{#f/1}* I'll get you something to drink."
            : "<25>{#f/14}* I'll get you something to drink."
      ],
      unddate15b: () => [
         "<25>{#p/undyne}{#f/14}* Comfortable?",
         SAVE.data.b.undyne_respecc
            ? "<25>{#f/1}* I'll get you something to..."
            : "<25>{#f/14}* I'll get you something to...",
         "<25>{#f/17}* ...",
         "<25>{#f/17}* What are you still doing with a cup of dampening fluid?",
         "<25>{#f/17}* Throw that thing away!"
      ],
      unddate15c: () => [
         "<32>{#p/human}* (You discarded the electro- dampening fluid.)",
         SAVE.data.b.undyne_respecc ? "<25>{#p/undyne}{#f/1}* Thanks." : "<25>{#p/undyne}{#f/14}* Much appreciated."
      ],
      unddate16: () => [
         SAVE.data.b.undyne_respecc
            ? "<25>{#p/undyne}{#f/1}* All set!\n* Take your pick!"
            : "<25>{#p/undyne}{#f/14}* All set!\n* What would you like?"
      ],
      unddate17: () => [
         "<25>{#p/undyne}{#f/17}* HEY!\n* DON'T GET UP!",
         ...(SAVE.data.b.undyne_respecc
            ? [ "<25>{#f/10}* ...", "<25>{#f/16}* Sorry, reflex.\n* I seriously gotta stop doing that..." ]
            : [ "<25>{#f/17}* YOU'RE THE GUEST!\n* SIT DOWN AND ENJOY YOURSELF!", "<25>{#f/17}* ..." ])
      ],
      unddate18: () =>
         SAVE.data.b.undyne_respecc
            ? [ "<25>{#p/undyne}{#f/1}* Um, why not just point to what you want?", "<25>{#f/16}* You can use the spear." ]
            : [
                 "<25>{#p/undyne}{#f/12}* Um, why not just point to what you want?",
                 "<25>{#f/12}* You can use the spear!"
              ],
      unddate19x: "* Move left and right to aim.\n* Select with [Z].",
      unddate19y: () => [
         SAVE.data.b.undyne_respecc ? "* Undyne\n* Awesome fish lady." : "* Undyne\n* Mad fish lady.",
         "* Snack Closet\n* Tons of goodies in there!",
         "* Water\n* The smart choice.",
         "* Sugar\n* Great for sweetening tea.",
         "* Exoberry Punch\n* Made locally... or so they say.",
         "* Hot Cocoa\n* It's a blue cylinder.",
         "* Tea\n* Blatantly correct choice?",
         "* Fridge\n* Too much for one meal.",
         "* Energy Saber\n* Legendary human weapon."
      ],
      unddate20: [
         pager.create(0, [ "<25>{#p/undyne}{#f/13}* Are you...\n* Hitting on me???" ], [ "<25>{#p/undyne}{#f/13}* ?????" ]),
         pager.create(
            0,
            [
               "<25>{#p/undyne}{#f/17}* You're supposed to be choosing a drink??",
               "<25>{#f/1}* There's nothing in that closet but snacks."
            ],
            [ "<25>{#p/undyne}{#f/1}* Really, it's all just snacks in there.\n* Nothing more!" ],
            [ "<25>{#p/undyne}{#f/1}* Really!" ]
         ),
         pager.create(
            0,
            [
               "<25>{#p/undyne}{#f/13}* You want WATER?",
               "<25>{#f/11}* Just... water.",
               "<25>{#f/11}* With no added flavors or sugars or anything.",
               "<25>{#f/11}* ..."
            ],
            [ "<25>{#p/undyne}{#f/11}* ..." ]
         ),
         pager.create(
            0,
            [
               "<25>{#p/undyne}{#f/12}* That sugar's only there for the tea.",
               "<25>{#f/7}* I'm not gonna give you a cup of sugar!"
            ],
            () =>
               SAVE.data.b.undyne_respecc
                  ? [ "<25>{#p/undyne}{#f/1}* No sugar, sweetheart." ]
                  : [ "<25>{#p/undyne}{#f/14}* The sugar's for the tea, mmm'kay?" ]
         ),
         pager.create(
            0,
            [
               "<25>{#p/undyne}{#f/1}* Ah... exoberry punch.",
               "<25>{#f/14}* Well, Papyrus loves this stuff, so I guess it's alright."
            ],
            [ "<25>{#p/undyne}{#f/17}* You gonna pick something or what?" ]
         ),
         pager.create(
            0,
            [ "<25>{#p/undyne}{#f/14}* Nothing like a good cup of hot cocoa." ],
            [ "<25>{#p/undyne}{#f/17}* Hot cocoa, right?" ]
         ),
         pager.create(0, [ "<25>{#p/undyne}{#f/14}* Tea, huh?" ], [ "<25>{#p/undyne}{#f/12}* So it's tea, right?" ]),
         pager.create(
            0,
            [
               "<25>{#p/undyne}{#f/4}* The fridge!?\n* You want to have the entire fridge!?",
               "<25>{#p/undyne}{#f/17}* No!"
            ],
            [ "<25>{#p/undyne}{#f/17}* I said no!" ],
            [ "<25>{#p/undyne}{#f/17}* No means no!" ],
            [ "<25>{#p/undyne}{#f/17}* Do you not know what the word \"no\" means?" ],
            [ "<25>{#p/undyne}{#f/17}* ... clearly not!" ],
            [ "<25>{#p/undyne}{#f/17}* ..." ]
         ),
         pager.create(
            0,
            [
               "<25>{#p/undyne}{#f/1}* The energy saber...",
               "<25>{#p/undyne}{#f/12}* That's the weapon the humans wielded against us in the war.",
               "<25>{#p/undyne}{#f/16}* ... one of them, anyway."
            ],
            [ "<25>{#p/undyne}{#f/17}* It's not for sale." ]
         )
      ],
      unddate21: [ choicer.create("* (Choose this drink?)", "是", "否") ],
      unddate22: [
         [ "<25>{#p/undyne}{#f/16}* Okay, I guess..." ],
         [ "<25>{#p/undyne}{#f/1}* Let's fruit-punch your ticket to hydration!" ],
         [ "<25>{#p/undyne}{#f/14}* No time like hot cocoa time!" ],
         [ "<25>{#p/undyne}{#f/14}* Tea, coming right up." ]
      ],
      unddate22x: [ "<25>{#p/undyne}{#f/12}* It'll take a moment for the water to boil." ],
      unddate22y: () => [
         SAVE.data.b.undyne_respecc ? "<25>{#p/undyne}{#f/1}* There." : "<25>{#p/undyne}{#f/12}* All done!"
      ],
      unddate23: [ "<25>{#p/undyne}{#f/1}* Here we are." ],
      unddate24: [
         [ "<25>{#p/undyne}{#f/12}* Enjoy...?" ],
         [ "<25>{#p/undyne}{#f/12}* Careful, it's sour." ],
         [ "<25>{#p/undyne}{#f/14}* Careful, it's hot." ],
         [ "<25>{#p/undyne}{#f/14}* Careful, it's hot." ]
      ],
      unddate25: [
         () => [
            "<25>{#p/undyne}{#f/17}* Seriously?\n* Just drink it already!",
            "<32>{#p/human}{#s/heal}* (You take a sip of the water.)",
            "<32>{#p/basic}* It, uh... yeah, it's water.\n* So it tasted fine.",
            SAVE.data.b.undyne_respecc
               ? "<25>{#p/undyne}{#f/1}* Heh.\n* At least you're happy."
               : "<25>{#p/undyne}{#f/12}* Well, you look like you're satisfied."
         ],
         [
            "<25>{#p/undyne}{#f/17}* What's the holdup?\n* Just drink it already!",
            "<32>{#p/human}{#s/heal}* (You take a sip of the punch.)",
            "<32>{#p/basic}* It's so sour, your lips are already puckered up..."
         ],
         [
            "<25>{#p/undyne}{#f/17}* It's not that hot!!\n* Just drink it already!",
            "<32>{#p/human}{#s/heal}* (You take a sip of the hot cocoa.)",
            "<32>{#p/basic}* It's burning..."
         ],
         [
            "<25>{#p/undyne}{#f/17}* It's not that hot!!\n* Just drink it already!",
            "<32>{#p/human}{#s/heal}* (You take a sip of the tea.)",
            "<32>{#p/basic}* It's burning..."
         ]
      ],
      unddate25x: () => [
         "<32>* But other than that, it's pretty good.",
         ...(SAVE.data.b.undyne_respecc
            ? [ "<25>{#p/undyne}{#f/1}* Heh.\n* I'm glad you like it." ]
            : [
                 "<25>{#p/undyne}{#f/12}* It's good, right?",
                 "<25>{#f/8}* Nothing but the best for my ABSOLUTELY SPECIAL FRIEND!"
              ])
      ],
      unddate27: [
         [
            "<25>{#p/undyne}{#f/12}* You know, it's kinda funny you chose THAT drink...",
            "<25>{#f/12}* Water, I mean.",
            "<25>{#f/1}* Asgore and I once joked about how humans are made of it...",
            "<25>{#f/8}* And that if we drank it, we'd be CONSUMING humanity!!!",
            "<25>{#f/16}* ... well, he didn't really find it funny.",
            "<25>{#f/16}* The guy's got a soft spot for just about everyone..."
         ],
         [
            "<25>{#p/undyne}{#f/12}* You know, it's kinda neat you picked out THAT drink...",
            "<25>{#f/12}* Exoberry punch...",
            "<25>{#f/1}* Alphys and Papyrus sort of \"invented\" it together.",
            "<25>{#f/16}* I wasn't the biggest fan, but when I showed it to Asgore...",
            "<25>{#f/12}* Well, let's just say he had it put into mass- production."
         ],
         [
            "<25>{#p/undyne}{#f/12}* You know, it's kinda cool you went with THAT drink...",
            "<25>{#f/12}* Hot cocoa...",
            "<25>{#f/16}* This one time, after the CORE malfunctioned...",
            "<25>{#f/16}* They had to reboot the entire atmospheric system.",
            "<25>{#f/10}* No heat, very little air... it got colder, and colder...",
            "<25>{#f/1}* Then, Asgore came over and offered me a hot cocoa.",
            "<25>{#f/12}* We sat together in this very room..."
         ],
         [
            "<25>{#p/undyne}{#f/12}* You know, it's kinda weird you ended up liking THAT tea...",
            "<25>{#f/12}* Starling flower tea...",
            "<25>{#f/1}* That's always been Asgore's favorite kind."
         ]
      ],
      unddate28: () => [
         "<25>{#p/undyne}{#f/14}* Actually, now that I think about it...",
         "<25>{#f/12}* You kinda remind me of him.",
         ...(SAVE.data.b.undyne_respecc
            ? [
                 "<25>{#f/17}* I mean, your fighting styles are TOTALLY different, but...",
                 "<25>{#f/1}* You're the only two people who've actually managed to beat me!",
                 "<25>{#f/9}* ... in a sense."
              ]
            : [ "<25>{#f/8}* You're both TOTAL weenies!", "<25>{#f/9}* ... sort of." ])
      ],
      unddate29: [
         "<25>{#p/undyne}{#f/16}* The thing is, I was a pretty hot-headed kid.",
         "<25>* Once, to prove I was the strongest, I tried to fight Asgore.",
         "<25>{#f/17}* Emphasis on TRIED.",
         "<25>{#f/1}* I could barely land a single blow on him!",
         "<25>* And worse, the whole time, he refused to fight back!",
         "<25>{#f/9}* I was so humiliated...",
         "<25>{#f/16}* Afterwards, he apologized and said something goofy...",
         "<25>* \"Excuse me, do you want to know how to beat me?\"",
         "<25>{#f/1}* I said yes, and from then on, he trained me.",
         "<25>{#f/16}* One day, during practice, I finally knocked him down.",
         "<25>{#f/9}* I felt... bad.",
         "<25>{#f/12}* But he was beaming...",
         "<25>{#f/1}* I had never seen someone more proud to get their butt kicked.",
         "<25>* Anyway, long story short, after completing my training...",
         "<25>{#f/14}* I took up leadership of the Royal Guard!",
         "<25>{#f/8}* So I'm the one who gets to train dorks to fight!",
         "<25>{#f/1}* ... like, uh, Papyrus."
      ],
      unddate30: [
         "<25>{#f/16}* But, um, to be honest...",
         "<25>{#f/16}* ... I don't know if...",
         "<25>{#f/9}* I can ever let Papyrus into the Royal Guard.",
         "<25>{#f/17}* Don't tell him I said that!",
         "<25>{#f/10}* He's just...\n* Well...",
         "<25>{#f/9}* I mean, it's not that he's stupid.",
         "<25>{#f/17}* His attack designs are actually pretty freaking wild!",
         "<25>{#f/10}* It's just that...\n* He's...",
         "<25>{#f/17}* He's too innocent and nice!!!",
         "<25>{#f/16}* I mean, look, he was SUPPOSED to capture you...",
         "<25>{#f/11}* And he ended up being FRIENDS with you instead.",
         "<25>{#f/4}* I could NEVER send him into battle!",
         "<25>{#f/9}* He'd get ripped into little smiling shreds.",
         "<25>{#f/12}* That's part of why...",
         "<25>{#f/12}* I started teaching him how to cook, you know?",
         "<25>{#f/9}* So, um, maybe he can do something else with his life."
      ],
      unddate31: () => [
         SAVE.data.b.undyne_respecc
            ? "<25>{#p/undyne}{#f/1}* Oh, sorry, I was talking for so long..."
            : "<25>{#p/undyne}{#f/12}* Oh, sorry, I was talking for so long..."
      ],
      unddate32: [
         [ "<25>{#f/12}* You're out of water, aren't you?" ],
         [ "<25>{#f/12}* You're out of punch, aren't you?" ],
         [ "<25>{#f/12}* You're out of cocoa, aren't you?" ],
         [ "<25>{#f/12}* You're out of tea, aren't you?" ]
      ],
      unddate33: () => [
         SAVE.data.b.undyne_respecc
            ? "<25>{#p/undyne}{#f/1}* Heh, don't worry.\n* I'll get you some more."
            : "<25>{#p/undyne}{#f/12}* Heh, don't worry.\n* I'll get you some more."
      ],
      unddate34: [ "<25>{#p/undyne}{#f/17}* Wait a second...", "<25>{#f/17}* Papyrus...\n* His cooking lesson..." ],
      unddate35: [
         "<25>{#p/undyne}{#f/17}* HE WAS SUPPOSED TO HAVE THAT RIGHT NOW!!!",
         "<25>{#f/11}* And if HE's not here to have it...",
         "<25>{#f/7}* YOU'LL HAVE TO HAVE IT FOR HIM!"
      ],
      unddate36: () =>
         SAVE.data.b.undyne_respecc
            ? [
                 "<25>{#f/1}* That's right!",
                 "<25>{#f/1}* NOTHING has brought Papyrus and I closer than cooking!",
                 "<25>{#f/17}* Heheh, if you thought we were friends before...",
                 "<25>{#f/8}* JUST WAIT UNTIL YOU SEE US AFTER THIS!"
              ]
            : [
                 "<25>{#f/1}* That's right!",
                 "<25>{#f/1}* NOTHING has brought Papyrus and I closer than cooking!",
                 "<25>{#f/17}* Which means that if I give you his lesson...",
                 "<25>{#f/8}* WE'LL BECOME CLOSER THAN YOU CAN EVER IMAGINE!"
              ],
      unddate37: [ "<25>{#f/1}* First, let's start with the sauce!!" ],
      unddate38: [
         "<25>{#f/1}* Envision these veggies as your mortal enemy!",
         "<25>{#f/7}* Now, pound them to bits with your fists!!",
         choicer.create("* (What will you do?)", "Pet", "Pound")
      ],
      unddate39a: () => [
         "<32>{#p/human}* (You pet the vegetables in an affectionate manner.)",
         SAVE.data.b.undyne_respecc
            ? "<99>{#p/undyne}{#f/17}* OH MY GOD!!!\n* NOW I -KNOW- YOU'RE\n  JUST SCREWING WITH ME!!!"
            : "<25>{#p/undyne}{#f/17}* OH MY GOD!!!\n* STOP PETTING THE ENEMY!!!",
         "<25>{#x1}{#f/7}* I'll show you how it's done!",
         "<25>{#f/4}* NGAHHH!"
      ],
      unddate39b: () =>
         world.meanie
            ? [ "<32>{#p/human}* (You punch the vegetables with all your might.)" ]
            : [
                 "<32>{#p/human}* (You punch the vegetables with all your might.)\n* (You knock over a tomato.)",
                 "<25>{#p/undyne}{#f/1}* YEAH!\n* YEAH!",
                 "<25>{#f/1}* Our minds are uniting against these healthy ingredients!",
                 "<25>{#x1}{#f/7}* NOW IT'S MY TURN!",
                 "<25>{#f/4}* NGAHHH!"
              ],
      unddate40: (res: number) => [
         ...(world.meanie && res === 1
            ? [
                 SAVE.data.b.undyne_respecc
                    ? "<25>{#p/undyne}{#f/2}* YEAH!!!\n* THAT'S THE WARRIOR I KNOW!!!"
                    : "<25>{#p/undyne}{#f/6}* Feisty today, huh?",
                 "<25>{#f/6}* Heh, we'll just scrape this into a bowl later."
              ]
            : [ "<25>{#p/undyne}{#f/6}* Uh, we'll just scrape this into a bowl later." ]),
         "<25>{#f/2}* But for NOW!"
      ],
      unddate41: [
         "<25>{#p/undyne}{#f/1}* We add the noodles!",
         "<25>{#f/1}* Homemade noodles are the best, so I always keep some around."
      ],
      unddate41x: [ "<25>{#p/undyne}{#f/12}* Uhh, you can come over here now, kiddo." ],
      unddate41y: [
         "<25>{#p/undyne}{#f/1}* Anyway, you see these noodles here, right?",
         "<25>{#f/1}* Well...",
         "<25>{#f/17}* DISH 'EM OUT!",
         choicer.create("* (What will your approach be?)", "Careful", "Fierce")
      ],
      unddate42a: [
         "<32>{#p/human}* (You carefully place each spaghetti strand in one at a time.)",
         "<32>* The noodles clank against the empty bottom.",
         "<25>{#p/undyne}{#f/17}* I mean, that works???",
         "<25>{#f/1}* Well, now it's time to stir the pasta!"
      ],
      unddate42b: [
         "<32>{#p/human}* (You throw everything into the pot, including the box.)",
         "<32>* The box and the noodles clank against the empty bottom.",
         "<25>{#p/undyne}{#f/17}* YEAH!!\n* I'M INTO IT!!",
         "<25>{#f/1}* Alright!\n* Now it's time to stir the pasta!"
      ],
      unddate43: [
         "<25>{#p/undyne}{#f/1}* As a general rule of thumb, the more you stir...",
         "<25>{#f/17}* The better it tastes!"
      ],
      unddate44: [ "<25>{#p/undyne}{#f/17}* Ready?", "<25>{#f/1}* Let's do it!" ],
      unddate45: "* Press [Z] repeatedly to stir!",
      unddate46: [ "<25>{*}{#p/undyne}{#f/17}* Stir harder!{^20}{%}" ],
      unddate46x: [ "<25>{*}{#p/undyne}{#f/17}* Don't just stand there!{^20}{%}" ],
      unddate47: [ "<25>{*}{#p/undyne}{#f/7}* HARDER!{^20}{%}" ],
      unddate47x: [ "<25>{*}{#p/undyne}{#f/7}* STIR, DAMN IT!{^20}{%}" ],
      unddate48: [ "<25>{*}{#p/undyne}{#f/8}* HARDER!!!{^20}{%}" ],
      unddate48x: [ "<25>{*}{#p/undyne}{#f/8}* STIR!!!{^20}{%}" ],
      unddate49: [ "<25>{*}{#p/undyne}{#f/8}* Ugh, let me do it-{^10}{%}" ],
      unddate50: [ "<25>{#p/undyne}{#f/8}* Fuhuhuhu!\n* That's the stuff!" ],
      unddate51: [
         "<25>{#p/undyne}{#f/1}* Alright, now for the final step...",
         "<25>{#f/17}* TURN UP THE HEAT!",
         "<25>{#f/1}* Let the stovetop symbolize your passion!",
         "<25>{#f/1}* Let your hopes and dreams turn into burning fire!",
         "<25>{#f/8}* And of course, don't hold anything back!!!"
      ],
      unddate52: [ "<25>{#p/undyne}{#f/17}* Ready?", "<25>{#f/1}* Here we go!" ],
      unddate53: "* Hold [RIGHT] to crank it up!",
      unddate53x: [ "<25>{*}{#p/undyne}{#f/8}* You fool!\n* This burner only goes ONE WAY!!!{^20}{%}" ],
      unddate54: [ "<25>{*}{#p/undyne}{#f/17}* Make it hotter!{^20}{%}" ],
      unddate54x: [ "<25>{*}{#p/undyne}{#f/17}* What are you doing?{^20}{%}" ],
      unddate55: [ "<25>{*}{#p/undyne}{#f/7}* HOTTER!{^20}{%}" ],
      unddate55x: [ "<25>{*}{#p/undyne}{#f/7}* STOP HESITATING!{^20}{%}" ],
      unddate56: [ "<25>{*}{#p/undyne}{#f/8}* HOTTER!!!{^20}{%}" ],
      unddate56x: [ "<25>{*}{#p/undyne}{#f/8}* JUST DO IT!!!{^20}{%}" ],
      unddate57a: [ "<25>{*}{#p/undyne}{#f/17}* Ugh, let me do it...{^10}{%}" ],
      unddate57b: [ "<25>{*}{#p/undyne}{#f/17}* See, this is how you-{^20}{%}" ],
      unddate58: [ "<25>{*}{#p/undyne}{#f/17}* No, wait, that's too-{^10}{%}" ],
      unddate59: [ "<25>{#p/undyne}{#f/14}* Ah." ],
      unddate60: [ "<25>{#p/undyne}{#f/14}* Man, no wonder Papyrus isn't improving at cooking anymore." ],
      unddate61: [ "<25>{#p/undyne}{#f/12}* So what's next?\n* Trash hunting?\n* Entanglement bracelets?" ],
      unddate62: () =>
         SAVE.data.b.undyne_respecc
            ? [
                 "<25>{#p/undyne}{#f/10}* ...",
                 "<25>{#f/9}* ... who am I kidding...",
                 "<25>{#f/16}* I really let this get outta hand, didn't I...?",
                 "<25>{#f/16}* Heh..."
              ]
            : [
                 "<25>{#p/undyne}{#f/10}* ...",
                 "<25>{#f/9}* ... who am I kidding...",
                 "<25>{#f/16}* I really screwed this up, didn't I...?",
                 "<25>{#f/16}* Heh..."
              ],
      unddate63: () =>
         SAVE.data.b.undyne_respecc
            ? [
                 "<25>{#f/16}* Y'know what?",
                 "<25>{#f/9}* I'm not ready to give up on this just yet.",
                 "<25>{#f/1}* So I failed to teach you how to cook.\n* Big whoop.",
                 "<25>{#f/14}* There's still something we can do to salvage this mess.",
                 "<26>{#f/1}* And that something is..."
              ]
            : [
                 "<25>{#f/16}* I can't force you to like me, human.",
                 "<25>{#f/9}* Some people just don't easily get along.",
                 "<25>{#f/16}* I'd understand if you felt that way about me...",
                 "<25>{#f/9}* And if we can't be friends... that's okay.",
                 "<25>{#f/9}* Because...\n* If we're not gonna be friends..."
              ],
      unddate64: () =>
         SAVE.data.b.undyne_respecc
            ? [ "<25>{#p/undyne}{#f/17}* ONE LAST DUEL TO SHOW THE GALAXY WHAT WE'RE MADE OF!!!" ]
            : [ "<25>{#p/undyne}{#f/17}* THEN I CAN DESTROY YOU WITHOUT REGRET!!!" ],
      unddate65: () => [
         "<25>{#p/undyne}{#f/12}* Well, that was fun, huh?",
         SAVE.data.b.undyne_respecc
            ? "<25>{#f/8}* We'll have to spar again another time!"
            : "<25>{#f/8}* We'll have to hang out again another time!",
         "<25>{#f/9}* But, uh, somewhere else, I guess.",
         ...(world.postnoot
            ? [
                 "<25>{#f/1}* By the way, have you noticed something weird in the air?",
                 ...(world.nootflags.has('papyrus') // NO-TRANSLATE

                    ? [ "<25>{#f/13}* Even Papyrus mentioned it earlier..." ]
                    : [ "<25>{#f/13}* It seems like it just started recently..." ]),
                 "<25>{#f/16}* ... maybe it's nothing, but I swear I feel weaker than usual."
              ]
            : []),
         ...(SAVE.data.n.plot < 68.1 || SAVE.data.b.a_state_hapstablook
            ? [
                 "<25>{#f/1}* In the meantime, I'll be at the rec center with Papyrus.",
                 "<25>{#f/12}* I look forward to seeing you there!",
                 "<25>{#f/1}* Until then, you can give Papyrus a ring on your phone.",
                 "<25>{#f/8}* Since we're in the same place, I'll be able to talk too!"
              ]
            : [
                 "<25>{#f/1}* In the meantime, I'll be at the rec center.",
                 "<25>{#f/12}* I look forward to seeing you there!",
                 "<25>{#f/1}* Oh, and uh, Papyrus said he has to go do something.",
                 "<25>{#f/14}* Just letting you know, since he won't be available on the phone."
              ])
      ],
      unddate66: () =>
         SAVE.data.b.undyne_respecc
            ? [ "<25>{#f/1}* Well, see ya later, pal!!" ]
            : [ "<25>{#f/14}* Well, see ya later, punk!!" ],
      undroom1: () => [ "<25>{#p/undyne}{#f/17}* Huh?\n* The heck was THAT?" ],
      undroom2: () => [
         SAVE.data.b.undyne_respecc
            ? "<25>{#p/undyne}{#f/1}* Maybe don't do that right now."
            : "<25>{#p/undyne}{#f/12}* We're trying to be friends here."
      ],
      undroom3: () => [
         SAVE.data.b.undyne_respecc
            ? "<25>{#p/undyne}{#f/11}* This is some kind of weird battle tactic, isn't it?"
            : "<25>{#p/undyne}{#f/11}* So that's your way of making friends?"
      ],
      undroom4: () => [ "<25>{#p/undyne}{#f/17}* Stop doing that!" ],
      undroom5: () => [ "<25>{#p/undyne}{#f/17}* ..." ],
      undyne1a: [
         "<23>{#p/papyrus}{#f/30}H... HI, UNDYNE!\nI'M HERE WITH MY DAILY REPORT...",
         "<23>UHHH... REGARDING THAT HUMAN I CALLED YOU ABOUT EARLIER..."
      ],
      undyne1b: [ "<23>{#p/papyrus}{#f/30}... HUH?\nDID I FIGHT THEM?" ],
      undyne1c: () =>
         
         world.edgy || (world.population_area('s') < 6 && !world.bullied_area('s')) // NO-TRANSLATE

            ? [ "<23>{#p/papyrusnt}UH...", "<23>I-IT'S COMPLICATED!" ]
            : [ "<23>{#p/papyrusnt}Y-YES!\nOF COURSE I DID!", "<23>I FOUGHT THEM VALIANTLY!" ],
      undyne1d: [ "<23>{#p/papyrus}{#f/30}... WHAT?\nDID I CAPTURE THEM...?" ],
      undyne1e: [ "<23>{#p/papyrus}{#f/30}W-W-WELL...", "<23>NO..." ],
      undyne1f: () =>
         world.edgy || (world.population_area('s') < 6 && !world.bullied_area('s')) // NO-TRANSLATE

            ? [ "<23>{#p/papyrus}{#f/30}L-LIKE I SAID, IT'S COMPLICATED!" ]
            : [ "<23>{#p/papyrus}{#f/30}I-I MEAN, I TRIED VERY HARD TO, B-BUT, IN THE END..." ],
      undyne1g: () => [
         "<23>{#p/papyrus}{#f/30}... W-WHAT?",
         ...(SAVE.data.n.state_foundry_doge === 1
            ? [ "<23>THEY'VE ALREADY KILLED AN ELITE SQUAD MEMBER??", "<23>N-NO... THEY WOULDN'T DO THAT, WOULD THEY?" ]
            : [ "<23>YOU'RE GOING TO TAKE THE HUMAN'S SOUL YOURSELF??" ])
      ],
      undyne1h: () =>
         SAVE.data.n.state_foundry_doge === 1
            ? [ "<23>{#p/papyrus}{#f/30}SURELY THERE MUST BE ANOTHER WAY!", "<23>SURELY..." ]
            : [ "<23>{#p/papyrus}{#f/30}BUT UNDYNE, YOU DON'T H-HAVE TO DESTROY THEM! YOU SEE...", "<23>YOU SEE..." ],
      undyne1i: () => [
         "<23>{#p/papyrus}{#f/30}I...",
         "<23>... I UNDERSTAND.",
         "<23>I'LL HELP YOU IN ANY WAY I CAN.",
         ...(world.postnoot
            ? [
                 "<23>BY THE WAY... YOU NEED TO DOUBLE-CHECK THE ATMOSPHERIC SYSTEM.",
                 "<23>WHAT WAS IT CALLED?\nTHE WIDE-AREA TROPE-A- SPHERE FRAMEWORK?",
                 "<23>SOMETHING SEEMS... OFF."
              ]
            : [])
      ],
      undyne1j: [ "<25>{#p/kidd}{#f/1}* 喲！\n* 她就在那裡！" ],
      undyne1k: [ "<25>{#p/kidd}{#f/7}* 等等... 你是個人類，\n  對吧？" ],
      undyne1l: [ "<25>{*}{#p/kidd}{#f/7}* 快跑啊啊啊啊啊！{^20}{%}" ],
      undyne1m: [ "<25>{#p/kidd}{#f/2}* 呼..." ],
      undyne1n: [ "<25>{#p/kidd}{#f/1}* 呃，你可以從平臺上\n  下來了。" ],
      undyne1o: [ "<25>{#p/kidd}{#f/4}* 她去哪了...？" ],
      undyne1p: [ "<25>{#p/kidd}{#f/7}* 啊！{^10}{%}" ],
      undyne1q: [ "<25>{#p/kidd}{#f/2}* 噓...\n  我感覺我們可以偷渡過去。\n* 快跟上我！" ],
      undyne1r: [ "<25>{#p/kidd}{#f/4}* 這裡烏黑一片...", "<25>{#p/kidd}{#f/7}* ...但是我們得保持\n  前進！" ],
      undyne1s: [ "<25>{#p/kidd}{#f/7}* 快躲進那叢便於藏身\n  的植物裡！" ],
      undyne2a: [
         "<25>{#p/kidd}{#f/7}* 她... 她...",
         "<25>{#f/7}* 她摸到我了！！",
         "<25>{#f/4}* ...\n* 我們應該都算走運，\n  你說是吧？",
         "<25>{#f/5}* 如果她看見你，\n  那就大事不妙了。"
      ],
      undyne2ax: () => [
         "<25>{#p/kidd}{#f/1}* 她... 她...",
         "<25>{#f/1}* 哪兒都找不到她！！",
         "<25>{#f/3}* 你倆看到她了沒有？",
         "<25>{#p/asriel2}{#f/3}* 誰呀，安黛因嗎？",
         "<25>{#p/kidd}{#f/1}* 對呀！\n* 我找她找了好久！",
         "<25>{#p/asriel2}{#f/2}* （嘻嘻嘻...）",
         "<25>{#p/kidd}{#f/4}* 嗯？？",
         "<25>{#p/asriel2}{#f/4}* 沒事。",
         "<25>{#f/13}* 話說，想跟我們一塊走嗎？",
         "<25>{#p/kidd}{#f/3}* 你... 想讓我跟著你們？",
         "<25>{#p/asriel2}{#f/4}* 當然嘍，快來吧。\n* 超有趣的。",
         "<25>{#p/kidd}{#f/4}* 呃...\n* 我...",
         ...(SAVE.flag.n.genocide_milestone < 5
            ? [
                 "<25>{#p/asriel2}{#f/15}* 嘿，你知道艾菲斯博士\n  喜歡安黛因的事嗎？",
                 "<25>* 就是... 呃...\n  那種很親密的喜歡。"
              ]
            : [
                 "<25>{#p/asriel2}{#f/9}* 嘿，你知道艾菲斯博士\n  其實比安黛因還強嗎？",
                 "<25>{#f/5}* 只是她膽子太小，不敢動手！"
              ]),
         "<25>{#p/kidd}{#f/7}* 什麼？\n* 怎麼可能...",
         "<25>{#p/asriel2}{#f/1}* 呵，關於她倆...\n  我知道的還不止這些呢。",
         "<25>{#p/kidd}{#f/7}* 快告訴我！",
         "<25>{#p/asriel2}{#f/5}* 當然，當然...\n* 不過你得跟$(name)和我走\n  我才告訴你。",
         "<25>{#p/kidd}{#f/1}* 成交！\n* 哈哈。",
         "<25>{#f/2}* ..."
      ],
      undyne2b: [ "<25>{#p/kidd}{#f/1}* 喲，還等什麼呢？" ],
      undyne2bx: [ "<25>{#p/kidd}{#f/1}* 出發吧！" ],
      undyne2c: [
         "<25>{#f/3}* 嘿... 我知道我們剛\n  認識不久，但是...",
         "<25>{#f/4}* 我，其實，並不想讓\n  安黛因傷害你...",
         "<25>* ...",
         "<25>{#f/2}* 要不然我們一起行動？",
         "<25>{#f/1}* 來吧，這會很有趣的！"
      ],
      undyne2cx: [
         "<25>{#p/kidd}{#f/2}* 老兄，我超推薦你們去看看\n  安黛因的人類追逐練習的！",
         "<25>{#f/1}* 她一秒就能扔出\n  上億隻矛呢！"
      ],
      undyne2d: [ "<25>{#f/1}* 我正在你身後呢！" ],
      undyne2dx: () => [
         "<25>{#p/kidd}{#f/2}* 每當獵物快要逃脫...",
         "<25>{#f/1}* 她總能在最後一刻精準命中！",
         ...(SAVE.flag.n.ga_asrielKidd2++ < 1
            ? [ "<25>{#p/asriel2}{#f/6}* 她可真棒啊。", "<25>{#p/kidd}{#f/1}* 是吧！！" ]
            : [])
      ],
      undyne2ex: [
         "<25>{#p/kidd}{#f/4}* 等等...",
         "<25>* 如果安黛因不在這，\n  誰來痛扁那些壞蛋，\n  保護大家呢？",
         "<25>{|}{#f/8}* 就是那些- {%}",
         "<25>{#p/asriel2}{#f/4}* 沒啥好擔心的。",
         "<25>{#f/3}* 而且，如果安黛因真像\n  你說的那麼多謀善斷...",
         "<25>{#f/4}* 那她就不會無緣無故離開，\n  對吧？\n* 她多聰明啊。",
         "<25>{#p/kidd}{#f/4}* 確實...\n* 你說得對...",
         "<25>{#p/kidd}{#f/2}* 對了，謝謝你們帶上我。",
         "<25>{#p/asriel2}{#f/10}* 是嗎...？\n* 我們還沒走兩步呢...",
         "<25>{#p/kidd}{#f/3}* 嗯，我很開心...\n* 不過，我還沒怎麼\n  離開過爹孃，所以...",
         "<25>{#p/asriel2}{#f/8}* 你還有爹孃？\n* 真新奇。",
         "<25>{#p/kidd}{#f/7}* 呃，我-我當然有啊，\n  誰沒爹孃啊？？",
         "<25>{#p/asriel2}{#f/16}* ...\n* 是是是。"
      ],
      undynefinal1a: () =>
         respecc()
            ? [ "<32>{#p/undyne}* 七個。", "<32>* 七個人類靈魂。", "<32>* ..." ]
            : [
                 "<32>{#p/undyne}* 七個。",
                 "<32>* 有了七個靈魂，\n  {@fill=#f00}艾斯戈爾國王{@fill=#fff}就能成為神。",
                 "<32>{#x1}* 六個。",
                 "<32>{#x1}* 我們已經有了六個。",
                 "<32>{#x1}* 懂了嗎？",
                 "<32>{#x1}* 只要有了你這最後一個靈魂，\n  怪物們就能重獲自由。",
                 "<32>{#x3}* 不過在這之前，\n  我應該遵循前輩們立下的規矩...",
                 "<32>{#x4}* 向你講述一段\n  我族人民的悲慘歷史。",
                 "<32>{#x5}* 一切，都要從很久以前說起..."
              ],
      undynefinal1b: () => (respecc() ? [ "<32>{#p/undyne}* No..." ] : [ "<32>{#p/undyne}* You know what?" ]),
      undynefinal1c: () =>
         respecc() ? [ "<32>{*}{#p/undyne}{#i/2}* NO!!{^999}" ] : [ "<32>{*}{#p/undyne}{#i/2}* SCREW IT!!{^999}" ],
      undynefinal1d: () =>
         respecc()
            ? [ "<32>{*}{#p/undyne}{#i/1}* HOW COULD I TALK DOWN TO YOU LIKE THAT!!{^999}" ]
            : [ "<32>{*}{#p/undyne}{#i/1}* WHY SHOULD I TELL YOU THAT STORY!!{^999}" ],
      undynefinal1e: () =>
         respecc()
            ? [ "<32>{*}{#p/undyne}{#i/1}* AFTER YOU'VE FOUGHT SO HONORABLY!!{^999}" ]
            : [ "<32>{*}{#p/undyne}{#i/1}* WHEN YOU'RE ABOUT TO DIE!!{^999}" ],
      undynefinal1f: [ "<32>{*}{#p/undyne}{#i/2}* NGAHHHHHHHHHHHH!!!{^999}" ],
      undynefinal1g: () =>
         respecc()
            ? [
                 "<25>{#p/undyne}{#f/1}* LISTEN UP!",
                 "<25>* I like the way you fight.",
                 "<25>{#f/16}* Like any good warrior, you fight until your enemy's been crushed...",
                 "<25>{#f/17}* ... and then you spare them, so they can live to tell the tale!",
                 "<25>{#f/10}* What courage..."
              ]
            : [
                 "<25>{#p/undyne}{#f/1}* HUMAN!",
                 "<25>* YOU'RE standing in the way of EVERYBODY's hopes and dreams!",
                 "<25>{#f/11}* Alphys's history films made me think humans were cool...",
                 "<25>{#f/16}* ... with their living spacecraft and inter- dimensional portals.",
                 "<25>{#f/4}* But YOU???"
              ],
      undynefinal2a: () =>
         respecc()
            ? [
                 "<25>{#f/1}* I guess I should apologize for how I acted back there.",
                 "<25>{#f/16}* You and your friend were just standing up for each other, right?",
                 "<25>{#f/1}* Well, I can respect that sort of thing.",
                 "<25>{#f/17}* And then there's the local ELITE squad!",
                 "<25>{#f/9}* I'll admit, I was impressed...",
                 ...(SAVE.data.n.state_foundry_doge === 2 && SAVE.data.n.state_foundry_muffet === 2
                    ? [
                         "<25>* The way you managed to not only get past them...",
                         "<25>{#f/10}* But BEFRIEND them???",
                         "<25>{#f/1}* I guess I shouldn't be surprised, though.\n* They'd like your style."
                      ]
                    : SAVE.data.n.state_foundry_doge === 3 && SAVE.data.n.state_foundry_muffet === 3
                    ? [
                         "<25>{#f/10}* The way you managed to EMBARRASS them?",
                         "<25>{#f/11}* I don't think I've ever seen those two so red-faced."
                      ]
                    : [
                         "<25>{#f/10}* Even when faced with their blades, you still held your nerve?",
                         "<25>{#f/1}* I guess you really are something special!"
                      ]),
                 "<25>{#f/8}* ... BUT GETTING BACK TO MY POINT!",
                 "<25>{#f/1}* So, normally, I'd just try to kill you and take your SOUL.",
                 "<25>{#f/11}* However, after seeing the way you fight...",
                 "<25>{#f/8}* THERE'S NO WAY I'D GO SO EASY ON YOU!!!",
                 "<25>{#f/1}* No... I want you to show me what you're REALLY made of!",
                 "<25>{#f/4}* And only once I've beaten you fair and square...",
                 "<25>{#f/5}* Will I finally claim the freedom that's rightfully ours!",
                 "<25>{#f/16}* But, if you manage to beat me...",
                 "<25>{#f/9}* I'll let you through.",
                 "<25>{#f/8}* ... IF you actually manage to beat me!!!",
                 "<25>{#f/1}* Step forward when you're ready!\n* Fuhuhuhu!"
              ]
            : [
                 "<25>{#f/7}* You're just a COWARD!",
                 ...(SAVE.data.b.f_state_kidd_betray
                    ? [
                         "<25>{#f/16}* Remember that friend of yours from earlier?",
                         "<25>{#f/17}* The one you ABANDONED?",
                         "<25>{#f/13}* Even when their life was in danger, you didn't bat an eye.",
                         ...(world.trueKills === 0 && SAVE.data.n.bully > 9
                            ? [
                                 "<25>{#f/9}* Maybe if you had, your fighting style would've earned my respect.",
                                 "<25>{#f/16}* But it'd be naive to think you've got any sort of honor NOW."
                              ]
                            : [ "<25>{#f/16}* Typical human.\n* Always quick to stab people in the back." ]),
                         "<25>{#f/4}* But that's fine...\n* I didn't need you to be some kind of saint...",
                         "<25>{#f/7}* ALL THAT MATTERS IS SOUL!"
                      ]
                    : [
                         "<25>* Hiding behind that kid so you could run away from me again!",
                         "<25>{#f/9}* I'll admit, I was impressed...",
                         ...(SAVE.data.n.state_foundry_doge === 2 && SAVE.data.n.state_foundry_muffet === 2
                            ? [
                                 "<25>* The way you managed to not only get past the local ELITE squad...",
                                 "<25>{#f/10}* But BEFRIEND them???",
                                 "<25>{#f/11}* You've got cojones, punk.",
                                 "<25>{#f/8}* ... NOT THAT IT ACTUALLY MATTERS!"
                              ]
                            : SAVE.data.n.state_foundry_doge === 3 && SAVE.data.n.state_foundry_muffet === 3
                            ? [
                                 "<25>{#f/10}* The way you managed to EMBARRASS the local ELITE squad?",
                                 "<25>{#f/11}* I don't think I've ever seen those two so red-faced.",
                                 "<25>{#f/8}* ... AS IF THAT'D WORK ON ME!"
                              ]
                            : [
                                 "<25>{#f/10}* The way you've managed to get through without killing anyone?",
                                 "<25>{#f/11}* Congratulations, punk.\n* You're a little nicer than the average human.",
                                 "<25>{#f/8}* ... AS IF I CARE!"
                              ]),
                         "<25>{#f/4}* You know what would be more valuable to everyone?",
                         "<25>{#f/7}* IF YOU WERE DEAD!"
                      ]),
                 "<25>{#f/17}* Your life is all that stands between us and our freedom!",
                 "<25>{#f/1}* Right now, I can feel everyone's minds racing together!",
                 "<25>* Everyone's been waiting their whole lives for this moment!",
                 "<25>{#f/9}* But we're not nervous at all.",
                 "<25>{#f/17}* When everyone puts their minds together, they can't lose!",
                 "<25>{#f/1}* Now, human!\n* Let's end this, right here, right now!",
                 "<25>{#f/17}* I'll show you how determined monsters can truly be!",
                 "<25>{#f/1}* Step forward when you're ready!\n* Fuhuhuhu!"
              ],
      undynefinal2b1: [ "<25>{#f/7}* You're just a ruthless MURDERER!" ],
      undynefinal2b1a: [ "<25>{#f/11}* Self-defense?\n* Please." ],
      undynefinal2b1b: [
         "<25>{#f/11}* What? You thought I'd overlook what you were up to in the Outlands?",
         "<25>{#f/1}* Fuhuhu... think again."
      ],
      undynefinal2b2: () => [
         world.trueKills === 1
            ? "<25>{#f/9}* You didn't kill that monster because you had to."
            : "<25>{#f/9}* You didn't kill those monsters because you had to.",
         "<25>{#f/11}* You did it because it was EASY for you.\n* Because it was FUN.",
         "<25>{#f/16}* Do you think it was fun when I found out?"
      ],
      undynefinal2b2a: [
         "<25>{#f/9}* The canine unit.\n* The local ELITE squad.\n* And many others, too...",
         "<25>* Almost everyone I know and love, dead just like that."
      ],
      undynefinal2b2b: [
         "<25>{#f/9}* The canine unit, AND the local ELITE squad...",
         "<25>* People I've served with for years, gone in the blink of an eye."
      ],
      undynefinal2b2c: [
         "<26>{#f/9}* The local ELITE squad, who dedicated their lives to service...",
         "<25>* Gone in one fell swoop."
      ],
      undynefinal2b2d: [
         "<25>{#f/9}* The canine unit, who protected that little town for years...",
         "<25>* Gone without a trace."
      ],
      undynefinal2b2e: [
         "<26>{#f/9}* That ghost, who wanted nothing more than to fuse with their dummy...",
         "<25>* Erased in a mere moment."
      ],
      undynefinal2b2f: [
         "<25>{#f/9}* That spider, who only wanted to protect and care for the clans...",
         "<25>* Not only is she dead, but spiders' lives are in jeopardy."
      ],
      undynefinal2b2g: [
         "<25>{#f/9}* Doge, who had a strong and unwavering sense of duty...",
         "<25>* Even if putting her life at risk was her job, she's still dead."
      ],
      undynefinal2b2h: [
         "<25>{#f/9}* That big dog, one of the kindest and sweetest dogs ever...",
         "<25>* Eliminated before his time."
      ],
      undynefinal2b2i: [
         "<25>{#f/9}* Those two dogs, caring for each other through thick and thin...",
         "<25>* Their love and legacy, ripped away in an instant."
      ],
      undynefinal2b2j: [
         "<25>{#f/9}* That little dog who wanted nothing more than to be pet...",
         "<25>* Only to be met with a ruthless attack."
      ],
      undynefinal2b2k: [
         "<25>{#f/9}* Doggo, who I PERSONALLY looked after for some time...",
         "<25>* Now dead thanks to the whims of a single human."
      ],
      undynefinal2b2l: [
         "<25>{#f/9}* That woman in the Outlands... I didn't know her, but...",
         "<25>* She hasn't been seen since you arrived in Starton."
      ],
      undynefinal2b2m: [
         "<25>{#f/9}* Every. Single. Monster. who spent their lives in the factory...",
         "<25>* Only to have it all snatched away."
      ],
      undynefinal2b2n: [
         "<25>{#f/9}* Every. Single. Monster. who lived peacefully in Starton...",
         "<25>* Only to meet an untimely end."
      ],
      undynefinal2b2o: [
         "<25>{#f/9}* Those monsters who spent their lives here in the factory...",
         "<25>* Only to have it all be undone."
      ],
      undynefinal2b2p: [
         "<25>{#f/9}* Those monsters who lived peacefully in Starton...",
         "<25>* Slaughtered in cold blood."
      ],
      undynefinal2b2q1: [
         "<25>{#f/9}* One monster dead from each area thus far...",
         "<25>{#f/13}* It's like you have some kind of per-area kill quota."
      ],
      undynefinal2b2q2: [
         "<25>{#f/9}* Two monsters dead from each area thus far...",
         "<25>{#f/13}* It's like you have some kind of per-area kill quota."
      ],
      undynefinal2b2q3: [
         "<25>{#f/9}* Three monsters dead from each area thus far...",
         "<25>{#f/13}* It's like you have some kind of per-area kill quota."
      ],
      undynefinal2b2q4: [
         "<25>{#f/9}* Four monsters dead from each area thus far...",
         "<25>{#f/13}* It's like you have some kind of per-area kill quota."
      ],
      undynefinal2b2q5: [
         "<25>{#f/9}* Five monsters dead from each area thus far...",
         "<25>{#f/13}* It's like you have some kind of per-area kill quota."
      ],
      undynefinal2b2r: () => [
         world.trueKills === 1
            ? "<26>{#f/9}* That monster in the Outlands... I didn't really know them, but..."
            : "<26>{#f/9}* Those monsters in the Outlands... I didn't really know them, but...",
         "<25>* Thanks to you, they're dead now."
      ],
      undynefinal2b2s: [
         "<25>{#f/9}* Even if it was just one monster...",
         "<25>* That's still one less SOUL that'll get to see the stars one day."
      ],
      
      undynefinal2b2t: [
         "<25>{#f/9}* At least two monsters left home for the last time today.",
         "<25>* Thanks to you, their families will never see them again."
      ],
      undynefinal2b2u1: [
         "<25>{#f/9}* That big dog, who enjoyed the company of his comrades...",
         "<25>* Awakening to find them dead."
      ],
      undynefinal2b2u2: [
         "<25>{#f/9}* Those two dogs, always looking out for the other canines...",
         "<25>* Only to discover there's nobody to look out for anymore."
      ],
      undynefinal2b2u3: [
         "<25>{#f/9}* That little dog who mostly kept to itself...",
         "<26>* The other dogs' deaths might not bother it now, but they will someday."
      ],
      undynefinal2b2u4: [
         "<25>{#f/9}* Doggo, who spent years to find a home in the canine unit...",
         "<25>* Only to have it all ripped away again."
      ],
      undynefinal2b2v1: [
         "<25>{#f/9}* That big dog, as well as Dogamy and Dogaressa...",
         "<25>* All wiped from the face of Starton."
      ],
      undynefinal2b2v2: [
         "<25>{#f/9}* Both the big dog, and the little dog...",
         "<25>{#f/13}* So, according to you, only the average-sized dogs get to live."
      ],
      undynefinal2b2v3: [
         "<25>{#f/9}* That big dog, along with Doggo, too...",
         "<25>* Both dead thanks to the whims of a single human."
      ],
      undynefinal2b2v4: [
         "<25>{#f/9}* Those two dogs, always looking out for the other canines...",
         "<25>* Not only are THEY dead, but a little dog they looked after is, too."
      ],
      undynefinal2b2v5: [
         "<25>{#f/9}* Those two dogs, always looking out for the other canines...",
         "<25>* They, along with Doggo who they looked after, are all dead."
      ],
      undynefinal2b2v6: [
         "<25>{#f/9}* That little dog, as well as its comrade Doggo...",
         "<25>* Both dead thanks to the whims of a single human."
      ],
      undynefinal2b3: () => [
         "<25>{#f/11}* Do you think that's FUN?",
         "<25>* ...",
         "<25>{#f/17}* Well guess what, punk.",
         ...(SAVE.data.n.state_foundry_muffet === 1
            ? [ "<25>* No phone call's gonna save you THIS time." ]
            : [ "<25>* Your time is UP." ]),
         "<25>{#f/4}* All the pain you inflicted on the fallen...",
         "<25>{#f/7}* Every hope, every dream you've turned to dust...",
         "<25>{#f/1}* This hero's gonna send it all right back through her spear!",
         "<25>{#f/4}* NGAHHH!!!",
         "<25>{#f/5}* I'll show you how determined monsters truly are!",
         "<25>{#f/17}* Come on!\n* Step forward and let's end this!"
      ],
      undynefinal2c1: [ "<32>* ...", "<32>* 罷了。" ],
      undynefinal2c2: () => [
         "<25>{#f/16}{#x1}* 聽好了。",
         "<25>* 帕派瑞斯今天沒來報到。",
         "<25>{#f/19}* ...",
         "<25>{#x2}* 你怎麼想他都無所謂。",
         "<25>{#f/18}* 沒錯，帕派瑞斯是很古怪，\n  很天真，很自戀...",
         "<25>{#f/20}{#x3}* 可是，他絕不會\n  錯過任何一次報到。",
         "<25>{#f/18}{#x4}* 而且，不管幾點鐘\n  給他打電話...",
         "<25>{#f/20}{#x5}* 他都絕不會\n  響鈴兩次還不接。",
         "<25>* ...",
         "<25>{#f/18}{#x6}* 現在，他不在了。",
         "<25>{#f/22}{#x7}* 他的兄弟，也失蹤了。",
         "<25>* ...",
         "<25>{#f/18}* 告訴我，你把他怎麼了？",
         "<25>{#f/11}{#x8}* 你把他{^6} 怎{^6} 麼{^6} 了{^6}？",
         ...((SAVE.data.n.state_foundry_doge === 1 ? 1 : 0) +
            (SAVE.data.n.state_starton_doggo === 2 ? 1 : 0) +
            (SAVE.data.n.state_starton_dogs === 2 ? 2 : 0) +
            (SAVE.data.n.state_starton_greatdog === 2 ? 1 : 0) +
            (SAVE.data.n.state_starton_lesserdog === 2 ? 1 : 0) >
         1
            ? [
                 "<25>{#f/16}{#x9}* 不僅如此，好幾名衛隊成員\n  也接連失蹤...",
                 "<25>{#f/13}* 他們，是不是也被你殺了？"
              ]
            : [
                 "<25>{#f/16}{#x9}* 帕派瑞斯，我每天\n  都會親自訓練他...",
                 "<25>{#f/19}* 儘管我早知道他傻到\n  不會去傷害任何人..."
              ]),
         "<25>* ...",
         "<25>{#f/16}{#x10}* 想前進，隨你。\n* 我給你準備的時間。",
         "<25>{#f/20}* 但只要你再往前踏出一步...",
         "<25>{#f/11}{#x11}* 我就會殺了你。"
      ],
      undynefinal3: () => [
         ...(SAVE.data.n.state_starton_papyrus === 1
            ? [ "<25>{#p/undyne}{#f/21}* 那好。", "<25>{#f/19}* ..." ]
            : world.trueKills > 1
            ? [ "<25>{#p/undyne}{#f/11}* 混蛋，你自找的。", "<25>{#f/9}* Ready or not..." ]
            : respecc()
            ? [ "<25>{#p/undyne}{#f/1}* That's it, then...!", "<25>{#f/17}* It's time you met your one true equal!" ]
            : [ "<25>{#p/undyne}{#f/1}* That's it, then...!", "<25>{#f/17}* No more running away!" ])
      ],
      undynefinal3x: [ "<25>{#f/7}{*}* 去死吧！！！{#x1}{^999}" ],
      undynehouse1: [ "<32>{#p/basic}* 鎖住了。" ],
      undynehouse2: () =>
         SAVE.data.b.svr || world.runaway
            ? [ "<32>{#p/human}* (You can't seem to find a way in.)" ]
            : SAVE.data.n.plot === 72
            ? [
                 "<32>{#p/basic}* First, the goat family...\n* Then, the spider queen...",
                 "<32>* And now, the fish lady...",
                 "<32>* I'll miss her... just like I'm going to miss being here...",
                 "<32>* But maybe... I've inhabited this house for too long...",
                 "<32>* Maybe I'll be happier if I spend time... somewhere new..."
              ]
            : [ "<32>{#p/basic}* It's literally on fire.\n* You're not getting in there." ],
      walktext: {
         bird: () => [
            "<25>{#p/kidd}{#f/4}* 沒路了...",
            world.genocide
               ? "<25>{#f/3}* 那隻小鳥肯定忙著\n  帶他去另一邊了，哈哈。"
               : "<25>{#f/3}* 那隻小鳥現在肯定很忙，\n  哈哈。"
         ],
         birdx: [ "<32>{#p/basic}* ...但是誰也沒有來。" ],
         path1: () =>
            SAVE.data.n.state_foundry_muffet === 1
               ? [
                    "<25>{#p/kidd}{#f/8}* I feel like I'm gonna puke...",
                    SAVE.data.n.state_foundry_kidddeath > 5
                       ? "<25>* We killed so many monsters..."
                       : SAVE.data.n.state_foundry_kidddeath > 1
                       ? "<25>* We killed other monsters..."
                       : "<25>* We killed a monster..."
                 ]
               : [
                    "<25>{#p/kidd}{#f/1}* Did I ever tell you about how we got shuttle pilot lessons!?",
                    "<25>{#p/kidd}{#f/7}* It was EPIC!"
                 ],
         path2: () =>
            SAVE.data.n.state_foundry_muffet === 1
               ? [
                    SAVE.data.b.f_state_kidd_fight
                       ? "<25>{#p/kidd}{#f/4}* 雖然... 你讓我攻擊他們..."
                       : "<25>{#p/kidd}{#f/4}* 雖然... 一直是你在攻擊他們...",
                    "<25>{#p/kidd}{#f/8}* 但你真的...\n* ...真的打-打心裡想...\n* ...那麼做嗎...？"
                 ]
               : [
                    "<25>{#p/kidd}{#f/2}* One day, that short skeleton and his brother subbed in...",
                    "<25>{#p/kidd}{#f/2}* And, this is a secret, but...",
                    "<25>{#f/1}* They let me fly around the outpost all by MYSELF!!"
                 ],
         path3: () =>
            SAVE.data.n.state_foundry_muffet === 1
               ? [
                    "<25>{#p/kidd}{#f/4}* 我從沒想傷害任何人，\n  我只是...\n* 我...",
                    "<25>{#p/kidd}{#f/8}* 我只是想醒過來...\n* 好希望... 這只是場噩夢..."
                 ]
               : [
                    "<25>{#p/kidd}{#f/1}* Maybe one day I'll be a real pilot, with my own starship.",
                    "<25>{#p/kidd}{#f/1}* It'd have FLAMES painted on the side, and HUGE wings, and...",
                    "<25>{#p/kidd}{#f/6}* Man, that'd be so cool..."
                 ],
         path4: () =>
            SAVE.data.n.state_foundry_muffet === 1
               ? [ "<25>{#p/kidd}{#f/8}* I...", "<25>{#f/8}* 我...", "<25>{#f/5}* 我... \n* ...我會住嘴的。" ]
               : [
                    "<25>{#p/kidd}{#f/2}* We could go anywhere in the universe, dude...",
                    "<25>{#p/kidd}{#f/1}* And the best part?\n* No more school, like, EVER!"
                 ],
         path5: [ "<25>{#p/kidd}{#f/4}* 等等..." ],
         path6: () =>
            SAVE.data.n.state_foundry_muffet === 1
               ? [
                    "<25>{#p/kidd}{#f/8}* 你一個人是過不去的...",
                    "<25>{#p/kidd}{#f/8}* ...",
                    "<25>{#p/kidd}{#f/5}* ...我幫你。"
                 ]
               : [
                    "<25>{#p/kidd}{#f/2}* You sure you can get across that gap?",
                    "<25>{#p/kidd}{#f/1}* Yo, let me help you!"
                 ],
         path7: () =>
            SAVE.data.n.state_foundry_muffet === 1
               ? [ "<25>{#p/kidd}{#f/8}* 爬上來。" ]
               : [ "<25>{#p/kidd}{#f/1}* Climb on!" ],
         path8: () =>
            SAVE.data.n.state_foundry_muffet === 1
               ? [
                    "<25>{#p/kidd}{#f/4}* ...\n* 唉...",
                    "<25>{#f/8}* 要是以後你再也見不到我了...\n* 告訴我父母...",
                    "<25>{#f/5}* ...\n* 就當沒生過我吧。"
                 ]
               : [ "<25>{#p/kidd}{#f/1}* Don't worry, dude!\n* I always find my own way around!" ],
         prechase: [
            "<25>{#p/kidd}{#f/4}* 嘿... 呃...\n* 我感覺這地方有點嚇人...",
            "<25>{#f/3}* 要不咱們回去吧？"
         ],
         rescue1: () => [
            "<25>{#p/kidd}{#f/7}* Undyne, please!\n* They're my friend!",
            geno()
               ? "<32>{#p/undyne}* No, they're not.\n* You really shouldn't be with them, kiddo."
               : "<32>{#p/undyne}* Go home, kiddo.\n* You don't belong with them."
         ],
         rescue2: [ "<25>{*}{#p/kidd}{#f/8}* Undyne...{#x1}{^20}{%}" ],
         rescue3: [
            "<25>{*}{#p/kidd}{#f/13}* I promise, I... I-I'll come back for you!{^20}{%}",
            "<25>{*}{#p/kidd}{#f/13}* Don't die, okay?{^20}{%}"
         ],
         snailcom: [
            "<25>{#p/kidd}{#f/9}* That ghost and I played electrosnail here one time...",
            "<25>* Have you ever...?",
            "<25>{#p/asriel2}{#f/10}* Um... no?",
            "<25>{#f/4}* Not in this timeline, anyway.",
            "<25>{#p/kidd}{#f/9}* Timeline?"
         ],
         trashcom: [
            "<25>{#p/asriel2}{#f/13}* Oh, hey...\n* This is where we...",
            "<25>{#f/13}* Where you...",
            "<25>{#f/15}* ...",
            "<25>{#f/16}* Oh, $(name)...",
            "<25>{#p/kidd}{#f/9}* ...？",
            "<25>{#p/asriel2}{#f/6}* It's nothing.",
            "<25>{#f/7}* Just a little reminder, that's all.",
            "<25>{#p/kidd}{#f/9}* Oh..."
         ],
         undynecom: [
            "<25>{#p/kidd}{#f/11}* Oh, it's...\n* This is Undyne's house...!",
            "<25>{#p/asriel2}{#f/8}* Thankfully, Undyne's not here right now.",
            "<25>{#f/6}* If all goes to plan, she never will be again."
         ]
      },
      watercooler1: () => [
         ...(SAVE.data.b.svr
            ? [ "<32>{#p/human}* (The label describes using this fluid only in a specific kind of emergency.)" ]
            : [
                 "<32>{#p/basic}* It's a cooler full of electro- dampening fluid with an oddly specific warning label.",
                 "<32>{#p/basic}* \"Use only to negate electro- static interference with portable jetpacks.\""
              ]),
         choicer.create("* (Get a cup?)", "是", "否")
      ],
      watercooler2a: [ "<32>{#p/human}* (You now hold a cup of the electro-dampening fluid.)" ],
      watercooler2b: [ "<32>{#p/human}* (You decide not to get a cup.)" ],
      watercooler3: () => [
         ...(SAVE.data.b.svr
            ? [ "<32>{#p/human}* (The label describes using this fluid only in a specific kind of emergency.)" ]
            : [
                 "<32>{#p/basic}* It's a cooler full of electro- dampening fluid with an oddly specific warning label.",
                 "<32>{#p/basic}* \"Use only to negate electro- static interference with portable jetpacks.\""
              ]),
         "<32>{#p/human}* (You already have a cup.)"
      ]
   },

   b_group_foundry: {
      moldsmalMoldbygg1: () =>
         world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
            ? [ "<32>{#p/kidding}* Holy moldy!" ]
            : [ "<32>{#p/story}* It's a gelatin festival!" ],
      moldsmalMoldbygg2a: () =>
         world.goatbro
            ? [ "<32>{#p/asriel2}* 只剩一個了。" ]
            : world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
            ? [ "<32>{#p/kidding}* Just us now!" ]
            : [ "<32>{#p/story}* Gelata is all alone now." ],
      moldsmalMoldbygg2b: () =>
         world.goatbro
            ? [ "<32>{#p/asriel2}* 只剩一個了。" ]
            : world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
            ? [ "<32>{#p/kidding}* Just us now!" ]
            : [ "<32>{#p/story}* Gelatini now blorbs solo." ],
      woshuaMoldbygg2: () =>
         world.goatbro
            ? [ "<32>{#p/asriel2}* 矛盾二人組。" ]
            : world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
            ? [ "<32>{#p/kidding}* 哇，你好..." ]
            : [ "<32>{#p/story}* Skrubbington straddles up.\n* Much to its dismay, Gelata is also here..." ],
      woshuaMoldbygg2a: () =>
         world.goatbro
            ? [ "<32>{#p/asriel2}* 只剩一個了。" ]
            : world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
            ? [ "<32>{#p/kidding}* Just us now!" ]
            : [ "<32>{#p/story}* Gelata is all alone now." ],
      woshuaMoldbygg2b: () =>
         world.goatbro
            ? [ "<32>{#p/asriel2}* 只剩一個了。" ]
            : world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
            ? [ "<32>{#p/kidding}* Just us now!" ]
            : [ "<32>{#p/story}* Skrubbington is not sure how to feel anymore." ]
   },
   b_opponent_woshua: {
      tweet: "tweet",
      epiphany: [
         [ "<08>{#p/basic}{~}Skrubby accepts your mercy." ],
         () =>
            world.meanie
               ? [ "<08>{#p/basic}{~}Skrubby will retreat now..", "<08>{#p/basic}{~}Thx for warning!" ]
               : world.flirt > 9
               ? [ "<08>{#p/basic}{~}Skrub u entire body..", "<08>{#p/basic}{~}Special service just for you!" ]
               : SAVE.data.b.oops
               ? [
                    "<08>{#p/basic}{~}Even if u get dirty sometimes..",
                    "<08>{#p/basic}{~}Skrubby will be there to clean u."
                 ]
               : [ "<08>{#p/basic}{~}Skrubby accepts hug..", "<08>{#p/basic}{~}Regard- less if u are clean or dirty." ],
         [ "<08>{#p/basic}{~}Skrubby knows what must be done.", "<08>{#p/basic}{~}Thx for showing me the way." ],
         [ "<08>{#p/basic}{~}Okie.\nTake u G." ]
      ],
      act_check: () =>
         world.goatbro
            ? [ "<32>{#p/asriel2}* Skrubbington，潔癖狂魔。\n* 眼裡容不下半點灰塵。" ]
            : [
                 "<32>{#p/story}* SKRUBBINGTON - ATK 18 DEF 5\n* This humble germophobe seeks to cleanse the whole galaxy."
              ],
      act_check2: [
         "<33>{#p/story}* SKRUBBINGTON - ATK 18 DEF 5\n* This humble germophobe wants to go home to wash its wounds."
      ],
      act_check3: [
         "<32>{#p/story}* SKRUBBINGTON - ATK 18 DEF 5\n* One wheel closer to a cleaner future for monsterkind."
      ],
      act_check4: [
         "<32>{#p/story}* SKRUBBINGTON - ATK 18 DEF 5\n* This humble germophobe's love story is as soapy as it gets."
      ],
      name: "* Skrubbington",
      status1: () =>
         world.goatbro
            ? [ "<32>{#p/asriel2}* Skrubbington." ]
            : world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
            ? [ "<32>{#p/kidding}* Skrubby來了！" ]
            : [ "<32>{#p/story}* Skrubbington strolls in." ],
      idleTalk1a: [ "<08>{#p/basic}{~}Skrub u SOUL" ],
      idleTalk1b: [ "<08>{#p/basic}{~}Skrub u hands" ],
      idleTalk1c: [ "<08>{#p/basic}{~}Skrub u face" ],
      idleTalk1d: [ "<08>{#p/basic}{~}Skrub u hair" ],
      idleTalk1e: [ "<08>{#p/basic}{~}Skrub u feet" ],
      idleTalk2a: [ "<08>{#p/basic}{~}Skrub a dub-dubs" ],
      idleTalk2b: [ "<08>{#p/basic}{~}Oops, I meant..\nSkrub a sub-SUBS" ],
      idleTalk2c: [ "<08>{#p/basic}{~}Skrub a sub-subs" ],
      idleTalk3: () =>
         world.trueKills > 0 ? [ "<08>{#p/basic}{~}Your SOUL is unclean." ] : [ "<08>{#p/basic}{~}\x00*whistle whistle*" ],
      cleanTalk: [ "<08>{#p/basic}{~}Green means clean" ],
      jokeTalk1: [ "<08>{#p/basic}{~}NO. THAT JOKE'S TOO.. DIRTY" ],
      jokeTalk2: [ "<08>{#p/basic}{~}EUGH.. I CAN'T BELIEVE THIS" ],
      randStatus1: () =>
         world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
            ? [ "<32>{#p/kidding}* Look at the little bird!" ]
            : [ "<32>{#p/story}* Skrubbington is friends with a little bird." ],
      randStatus2: () =>
         world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
            ? [ "<32>{#p/kidding}* You should've SEEN when it tried to clean my school lunch off." ]
            : [ "<32>{#p/story}* Skrubbington is rinsing off a saucer." ],
      randStatus3: () =>
         world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
            ? [ "<33>{#p/kidding}* We should go spacesuit-shining with this one." ]
            : [ "<32>{#p/story}* Skrubbington is looking for some good clean fun." ],
      randStatus4: () =>
         world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
            ? [ "<32>{#p/kidding}* Squeaky clean?\n* This is gonna be FREAKY clean." ]
            : [ "<32>{#p/story}* Smells like detergent." ],
      randStatus5: () =>
         world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
            ? [ "<32>{#p/kidding}* You do NOT wanna get dirty around this one, dude." ]
            : [ "<32>{#p/story}* Skrubbington wonders if stardust is sanitary." ],
      hurtStatus: () =>
         world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
            ? [ "<32>{#p/kidding}* 一切... 還好嗎？" ]
            : [ "<32>{#p/story}* Skrubbington is revolted at its own wounds." ],
      jokeText1: [ "<32>{#p/human}* (You tell a joke about a rusty piece of space junk.)" ],
      jokeText2: [ "<32>{#p/human}* (You tell a joke about atmospheric pollution.)" ],
      jokeText3: [ "<32>{#p/human}* (You tell a joke about two starships that got stuck in a trash barge.)" ],
      touchText0: [
         "<32>{#p/human}* (You give Skrubbington a friendly pat.)",
         "<32>{#p/basic}* Skrubbington can't stand your slime-covered hands and runs away!"
      ],
      touchText1: [
         "<32>{#p/human}* (You give Skrubbington a friendly pat.)",
         "<32>{#p/basic}* Skrubbington recoils from your touch."
      ],
      touchText2: [
         "<32>{#p/human}* (You give Skrubbington a friendly pat.)",
         "<32>{#p/basic}* Skrubbington is flattered."
      ],
      cleanText1: [
         "<32>{#p/human}* (You ask Skrubbington to clean you.)",
         "<32>{#p/basic}* Skrubbington hops around excitedly."
      ],
      flirtTalk1: [ "<08>{#p/basic}{~}No!\nUnclean romance!" ],
      flirtTalk2: [ "<08>{#p/basic}{~}Sparkle and shine!" ],
      cleanText2: [
         "<32>{#p/human}* (You ask Skrubbington to clean you.)",
         "<32>{#p/basic}* Skrubbington resumes cleaning."
      ]
   },
   b_opponent_moldbygg: {
      sexyChat: [ "<08>{#p/basic}{~}\x00*sexy shuffle*" ],
      epiphany: [
         [ "<08>{#p/basic}{~}\x00*slime sounds*" ],
         () =>
            world.meanie
               ? [ "<08>{#p/basic}{~}Guoooh.." ]
               : world.flirt > 9
               ? [ "<08>{#p/basic}{~}\x00*erotic shuffle*" ]
               : SAVE.data.b.oops
               ? [ "<08>{#p/basic}{~}*happy shuffle*" ]
               : [ "<08>{#p/basic}{~}*slimy embrace*" ],
         [ "<08>{#p/basic}{~}Final roar." ],
         [ "<08>{#p/basic}{~}\x00*shiny shuffle*" ]
      ],
      status1: () =>
         world.goatbro
            ? [ "<32>{#p/asriel2}* Gelata." ]
            : world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
            ? [ "<32>{#p/kidding}* 哇！" ]
            : [ "<32>{#p/story}* Gelata appears!" ],
      act_check: () =>
         world.goatbro
            ? [ "<32>{#p/asriel2}* Gelata，噁心粘球。\n* 為啥我要多費口舌給你解釋這些？" ]
            : [ "<32>{#p/story}* GELATA - ATK 18 DEF 18\n* Not so tini anymore." ],
      act_check2: [ "<32>{#p/story}* GELATA - ATK 18 DEF 18\n* Not in the best of shape." ],
      act_check3: [ "<32>{#p/story}* GELATA - ATK 18 DEF 18\n* Not against becoming a full- time jelly cushion." ],
      act_check4: [ "<32>{#p/story}* GELATA - ATK 18 DEF 18\n* Not your ideal relationship..." ],
      act_topple1: [ "<32>{#p/human}* (You try to topple Moldbygg, but it hasn't been weakened enough.)" ],
      act_topple2: [ "<32>{#p/human}* (You topple Moldbygg.)\n* (Its body parts collapse and roll into the distance.)" ],
      name: "* Gelata",
      idleTalk1: [ "<08>{#p/basic}{~}Guoooh!" ],
      idleTalk2: [ "<08>{#p/basic}{~}\x00*slime sounds*" ],
      idleTalk3: [ "<08>{#p/basic}{~}Roar." ],
      idleTalk4: [ "<08>{#p/basic}{~}\x00*eager shuffle*" ],
      randStatus1: () =>
         world.goatbro
            ? [ "<32>{#p/asriel2}* Gelata." ]
            : world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
            ? [ "<32>{#p/kidding}* What does it want?" ]
            : [ "<32>{#p/story}* Gelata wants to carry you." ],
      randStatus2: () =>
         world.goatbro
            ? [ "<32>{#p/asriel2}* Gelata." ]
            : world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
            ? [ "<32>{#p/kidding}* I wonder what would happen if I hugged it." ]
            : [ "<32>{#p/story}* Gelata wobbles anxiously." ],
      randStatus3: () =>
         world.goatbro
            ? [ "<32>{#p/asriel2}* Gelata." ]
            : world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
            ? [ "<32>{#p/kidding}* 黏糊糊的... 但我喜歡！" ]
            : [ "<32>{#p/story}* Gelata mills about nearby." ],
      randStatus4: () =>
         world.goatbro
            ? [ "<32>{#p/asriel2}* Gelata." ]
            : world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
            ? [ "<32>{#p/kidding}* 啥都黏糊糊的。" ]
            : [ "<32>{#p/story}* Smells like a jell-o store." ],
      hurtStatus: () =>
         world.goatbro
            ? [ "<32>{#p/asriel2}* 離死不遠了。" ]
            : world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
            ? [ "<32>{#p/kidding}* Gelata的狀態看起來不太好..." ]
            : [ "<32>{#p/story}* Gelata has seen better days." ],
      act_handshake: [
         "<32>{#p/human}* (You offer a handshake.)\n* (Gelata engulfs you in slime.)",
         "<32>{#p/story}* SPEED decreased!"
      ],
      act_sit: [ "<32>{#p/human}* (You sit on top of Gelata.)\n* (Gelata now feels that it has been useful to you.)" ],
      distanceStatus: () =>
         world.goatbro
            ? [ "<32>{#p/asriel2}* Gelata." ]
            : world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
            ? [ "<32>{#p/kidding}* Can I come sit too!?" ]
            : [ "<32>{#p/story}* Gelata seems happy with your presence." ],
      act_flirt: [
         "<32>{#p/human}* (You wiggle your hips.)\n* (Gelata does a tornado spin.)",
         "<32>{#p/basic}* A meaningful conversation...?"
      ]
   },
   b_opponent_moldfake: {
      act_check: () =>
         world.goatbro
            ? [ "<32>{#p/asriel2}* Gelatini...\n* 直覺告訴我，這隻怪物可沒有\n  它外表看起來那麼簡單。" ]
            : [ "<32>{#p/story}* GELATINI - ATK 18 DEF 18\n* Not a squorch to be heard." ],
      name: "* Gelatini",
      smalTalk: [ "<08>{#p/basic}{~}..." ],
      status1: () => (world.goatbro ? [ "<32>{#p/asriel2}* Gelatini." ] : [ "<32>{#p/story}* Gelatini出現了？" ]),
      fakeStatus1: () =>
         world.goatbro
            ? [ "<32>{#p/asriel2}* Gelatini." ]
            : world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
            ? [ "<32>{#p/kidding}* Do Gelatinis always sit this still?" ]
            : [ "<32>{#p/story}* Gelatini isn't moving." ],
      fakeStatus2: () =>
         world.goatbro
            ? [ "<32>{#p/asriel2}* Gelatini." ]
            : world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
            ? [ "<32>{#p/kidding}* Something's off with that Gelatini..." ]
            : [ "<32>{#p/story}* Gelatini is a perfectly tempered gelatin with no flaws." ],
      fakeStatus3: () =>
         world.goatbro
            ? [ "<32>{#p/asriel2}* Gelatini." ]
            : world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
            ? [ "<32>{#p/kidding}* Are Gelatinis always this quiet?" ]
            : [ "<32>{#p/story}* It's Gelatini's quiet time." ],
      fakeStatus4: () =>
         world.goatbro
            ? [ "<32>{#p/asriel2}* Gelatini." ]
            : world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
            ? [ "<32>{#p/kidding}* This seems kinda weird." ]
            : [ "<32>{#p/story}* Smells like a jell-o store." ],
      act_imitate: [ "<32>{#p/human}* (You approach Gelatini.)", "<32>{#p/basic}* Suddenly...!" ],
      act_flirt: [ "<32>{#p/human}* (You wiggle your hips.)", "<32>{#p/basic}* Suddenly...!" ],
      act_slap: [ "<32>{#p/human}* (You give Gelatini a big slap.)", "<32>{#p/basic}* Suddenly...!" ]
   },
   b_opponent_shyren: {
      act_check: [ "<32>{#p/story}* SHYREN - ATK 19 DEF 0\n* A prophetic singer, held back by her own shame." ],
      act_check2: [ "<32>{#p/story}* SHYREN - ATK 19 DEF 0\n* With newfound confidence, she takes to the stage!" ],
      act_check3: [ "<32>{#p/story}* SHYREN - ATK 19 DEF 0\n* With newfound confidence, she sings for the crowd!" ],
      act_check4: [ "<32>{#p/story}* SHYREN - ATK 19 DEF 0\n* With newfound confidence, she's the star of the show!" ],
      act_check5: [ "<32>{#p/story}* SHYREN - ATK 19 DEF 0\n* A prophetic singer, held back by fresh wounds." ],
      act_check6: [ "<32>{#p/story}* SHYREN - ATK 19 DEF 0\n* Alas, the bitter dregs of rejection." ],
      act_check7: [ "<32>{#p/story}* SHYREN - ATK 19 DEF 0\n* Suddenly, love songs." ],
      awkwardtoot: [ "<08>{#p/basic}{~}(awkward toot)" ],
      creepStatus: () =>
         SAVE.data.n.state_foundry_muffet === 1
            ? [ "<32>{#p/story}* Shyren cowers in the corner." ]
            : [ "<32>{#p/kidding}* I don't think that helped..." ],
      creepText1: [
         "<32>{#p/human}* (You flirt with Shyren, offering your best smile.)",
         "<32>{#p/basic}* Shyren turns away..."
      ],
      creepText2: [
         "<32>{#p/human}* (You flirt with Shyren again.)",
         "<32>{#p/basic}* Shyren is uncomfortable now, and decides to leave."
      ],
      encourage1: () =>
         SAVE.data.n.state_foundry_muffet === 1
            ? [ "<32>{#p/story}* Shyren seems much more comfortable singing along." ]
            : [ "<32>{#p/kidding}* A sing-along?\n* Heck yeah, dude!" ],
      encourage2: () =>
         world.dead_skeleton || geno()
            ? world.genocide
               ? SAVE.data.n.state_foundry_muffet === 1
                  ? [ "<32>{#p/story}* The eerily quiet air passes behind the symphony of voices." ]
                  : [ "<32>{#p/kidding}* Haha, this is kinda fun!\n* Even though it's just the three of us..." ]
               : SAVE.data.n.state_foundry_muffet === 1
               ? [ "<32>{#p/story}* A shadowy figure watches the commotion from afar." ]
               : [ "<32>{#p/kidding}* Yo... uh...\n* What's that weird shadowy guy doing over there?" ]
            : SAVE.data.n.state_foundry_muffet === 1
            ? [ "<32>{#p/story}* Sans is selling tickets made of carbon fiber." ]
            : [ "<32>{#p/kidding}* Is that short skeleton selling TICKETS now??" ],
      encourage3: () =>
         world.dead_skeleton || geno()
            ? SAVE.data.n.state_foundry_muffet === 1
               ? [ "<32>{#p/story}* Your previous hums echo back into the room." ]
               : [ "<32>{#p/kidding}* This place is so empty, we can hear ourselves from the past.\n* So trippy..." ]
            : SAVE.data.n.state_foundry_muffet === 1
            ? [ "<32>{#p/story}* The crowd tosses clothing.\n* It's a storm of cotton balls." ]
            : [ "<32>{#p/kidding}* Woah, so many people!" ],
      encourage4: () =>
         SAVE.data.n.state_foundry_muffet === 1
            ? [ "<32>{#p/story}* Shyren thinks about her future." ]
            : [ "<32>{#p/kidding}* One last time, one last time, one last time!" ],
      flirtText1: [ "<32>{#p/human}* (You flirt with Shyren.)\n* (Though uneasy, she blushes a little in return.)" ],
      flirttoot: [ "<08>{#p/basic}{~}(happy toot)" ],
      hum0: [ "<32>{#p/human}* (You hum a melancholy waltz.)\n* (Shyren follows your melody.)" ],
      hum1: [ "<32>{#p/human}* (You hum a funky tune.)\n* (Shyren follows your melody.)" ],
      hum2: [ "<32>{#p/human}* (You hum a bluesy song.)\n* (Shyren follows your melody.)" ],
      hum3: [ "<32>{#p/human}* (You hum a jazz ballad.)\n* (Shyren follows your melody.)" ],
      hum4: [ "<32>{#p/human}* (You hum an apology song.)\n* (Shyren calms down.)" ],
      humX1: () =>
         world.dead_skeleton || geno()
            ? [ "<32>{#p/human}* (You hum some more.)", "<32>{#p/basic}* It's a veritable duet!" ]
            : [
                 "<32>{#p/human}* (You hum some more.)",
                 "<32>{#p/basic}* Monsters are drawn to the music.",
                 "<32>{#p/basic}* Suddenly, it's a concert..."
              ],
      humX2: () =>
         world.dead_skeleton || geno()
            ? [
                 "<32>{#p/human}* (You hum some more.)",
                 "<32>{#p/basic}* Shyren is happy to have you as her vocal partner."
              ]
            : [
                 "<32>{#p/human}* (You hum some more.)",
                 "<32>{#p/basic}* The seats are sold out.\n* It's a rockstar performance!"
              ],
      humX3: () =>
         world.dead_skeleton || geno()
            ? [
                 "<33>{#p/human}* (You hum some more.)",
                 "<32>{#p/basic}* Even without a crowd, a dance of melody and harmony persists."
              ]
            : [
                 "<32>{#p/human}* (You hum some more.)",
                 "<32>{#p/basic}* Despite your success, the constant attention...",
                 "<32>* The tours...\n* The groupies...\n* It's all..."
              ],
      humX4: () => [
         "<32>{#p/human}* (You and Shyren have come so far, but it's time.)",
         "<32>* (You both have your own journeys to embark on.)",
         "<32>* (You hum a farewell song.)"
      ],
      hurtStatus: [ "<32>{#p/story}* Shyren's voice is raspy." ],
      name: "* Shyren",
      randStatus1: () =>
         SAVE.data.n.state_foundry_muffet === 1
            ? [ "<32>{#p/story}* Shyren hums very faintly." ]
            : [ "<32>{#p/kidding}* Are you okay?" ],
      randStatus2: () =>
         SAVE.data.n.state_foundry_muffet === 1
            ? [ "<32>{#p/story}* Shyren pretends to be a pop idol." ]
            : [ "<32>{#p/kidding}* You look sad..." ],
      randStatus3: () =>
         SAVE.data.n.state_foundry_muffet === 1
            ? [ "<32>{#p/story}* Shyren taps a little beat with her fins." ]
            : [ "<32>{#p/kidding}* Do you need any help?" ],
      randStatus4: () =>
         SAVE.data.n.state_foundry_muffet === 1
            ? [ "<32>{#p/story}* Shyren thinks about doing karaoke by herself." ]
            : [ "<32>{#p/kidding}* Is there anything I can do?" ],
      randStatus5: () =>
         SAVE.data.n.state_foundry_muffet === 1
            ? [ "<32>{#p/story}* Smells like music." ]
            : [ "<32>{#p/kidding}* Wait... what's with her body?" ],
      sadtalk1: [ "<08>{#p/basic}{~}..\n..\ntoot\n.." ],
      sadtalk2: [ "<08>{#p/basic}{~}..\n..\nhum hum\n.." ],
      status1: () =>
         SAVE.data.n.state_foundry_muffet === 1
            ? [ "<32>{#p/kidding}* 不...\n* 別再這樣了..." ]
            : [ "<32>{#p/kidding}* Yo, how's it going?\n* You look sad..." ],
      talk3: [ "<08>{#p/basic}{~}si re, si re, si mi, si mi" ],
      talk4: [ "<08>{#p/basic}{~}Si Fa Si Fa So Fa So Mi Re Re" ],
      talk5: [ "<08>{#p/basic}{~}Mi So Mi So Mi Si Mi La Si So" ],
      talk6: [ "<08>{#p/basic}{~}(pas- sionate tooting)" ],
      talk7: [ "<08>{#p/basic}{~}(final toot)" ],
      wave1: [ "<32>{#p/human}* (You wave your arms wildly.)\n* (Nothing happens.)" ],
      wave2: () =>
         world.genocide
            ? [ "<32>{#p/human}* (You wave your arms wildly.)\n* (Nothing happens.)" ]
            : [ "<32>{#p/human}* (You wave your arms wildly.)", "<32>{#p/basic}* The crowd eats it up!" ],
      act_boo1: [ "<32>{#p/human}* (You boo Shyren.)", "<32>{#p/basic}* Her head down, Shyren moves away quietly..." ],
      act_boo2: [
         "<32>{#p/human}* (You boo Shyren.)",
         "<32>{#p/basic}* Shyren, seeing how you handle rejection, leaves in a huff."
      ],
      act_boo3: [
         "<32>{#p/human}* (You boo Shyren.)",
         "<32>{#p/basic}* Shyren's fleeting joy fades just as soon as it came to her."
      ],
      act_boo4: [
         "<32>{#p/human}* (You boo Shyren.)",
         "<32>{#p/basic}* The crowd, distraught, watches as Shyren flees the scene."
      ],
      act_boo5: [
         "<32>{#p/human}* (You boo Shyren.)",
         "<32>{#p/basic}* The betrayal brings Shyren to tears as she flees the scene."
      ]
   },
   b_opponent_radtile: {
      epiphany: [
         [ "<08>{#p/basic}{~}Until next time, G." ],
         () =>
            world.meanie
               ? [ "<08>{#p/basic}{~}Huh..!\nSince when did you get scary!" ]
               : world.flirt > 9
               ? [ "<08>{#p/basic}{~}This feeling..", "<08>{#p/basic}{~}I mustn't resist!" ]
               : SAVE.data.b.oops
               ? [ "<08>{#p/basic}{~}Yeah..\nWe make a pretty radical team." ]
               : [ "<08>{#p/basic}{~}It's so comfort- able.." ],
         [ "<08>{#p/basic}{~}At least my end will serve a purpose.", "<08>{#p/basic}{~}Peace 'n' tran- quility, G." ],
         [ "<08>{#p/basic}{~}Here's your G, my G!" ]
      ],
      act_check: () =>
         world.goatbro
            ? [ "<32>{#p/asriel2}* Radtile，自詡「酷斃」的鱷魚。\n* 真是可笑至極，\n  瞧瞧這個二貨到底有多土。" ]
            : [ "<32>{#p/story}* RADTILE - ATK 24 DEF 12\n* A stargazer in starglasses.\n* Favorite genre: Kriobeat" ],
      act_check2: [ "<32>{#p/story}* RADTILE - ATK 24 DEF 12\n* Things aren't looking so hot for this cool crocodile." ],
      act_check3: [ "<33>{#p/story}* RADTILE - ATK 24 DEF 12\n* This cool crocodile is on fire." ],
      act_check4: [
         "<32>{#p/story}* RADTILE - ATK 24 DEF 12\n* When it comes to romance, this cool crocodile is stone cold."
      ],
      name: "* Radtile",
      status1: () =>
         world.goatbro
            ? [ "<32>{#p/asriel2}* Radtile。" ]
            : world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
            ? [ "<32>{#p/kidding}* 別是這傢伙呀..." ]
            : [ "<32>{#p/story}* Radtile makes an impression!" ],
      randStatus1: () =>
         world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
            ? [ "<32>{#p/kidding}* That sure is an interesting hat he's got on his head." ]
            : [ "<32>{#p/story}* Radtile adjusts his hat." ],
      randStatus2: () =>
         world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
            ? [ "<32>{#p/kidding}* Everyone around here just loves Raddy's little mirror." ]
            : [ "<32>{#p/story}* Radtile looks deeply into his mirror image." ],
      randStatus3: () =>
         world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
            ? [ "<32>{#p/kidding}* What's he doing, anyway?" ]
            : [ "<32>{#p/story}* Radtile is making gestures to improve his cool factor." ],
      randStatus4: () =>
         world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
            ? [ "<32>{#p/kidding}* I wonder what his face looks like." ]
            : [ "<32>{#p/story}* Smells like an old skatepark." ],
      idleTalk1: [ "<08>{#p/basic}{~}Check it." ],
      idleTalk2: [ "<08>{#p/basic}{~}Take a looksie." ],
      idleTalk3: [ "<08>{#p/basic}{~}Sneak a peek.." ],
      idleTalk4: [ "<08>{#p/basic}{~}Give it a gaze.." ],
      insultIdleTalk1: [ "<08>{#p/basic}{~}Meh." ],
      insultIdleTalk2: [ "<08>{#p/basic}{~}Whatever." ],
      insultIdleTalk3: [ "<09>{#p/basic}{~}\x00*shrugs*" ],
      insultIdleTalk4: [ "<08>{#p/basic}{~}Very un- cool." ],
      act_praise: [ "<32>{#p/human}* (You tell Radtile he's as cool as a quantum cucumber.)" ],
      act_praise_bullied: [ "<32>{#p/human}* (You tell Radtile his scars make him look tougher.)" ],
      complimentTalk1: [ "<08>{#p/basic}{~}Were you really lookin'?" ],
      complimentTalk2: [ "<08>{#p/basic}{~}Check first, opinions later." ],
      complimentTalk3: [ "<08>{#p/basic}{~}Show and tell, in that order." ],
      complimentPostInsultTalk1: [ "<08>{#p/basic}{~}You're a liar, anyway." ],
      complimentPostInsultStatus: () =>
         world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
            ? [ "<32>{#p/kidding}* Yeah, I don't think that's gonna work now, dude..." ]
            : [ "<32>{#p/story}* Radtile isn't having it." ],
      flirtTalk1: [ "<08>{#p/basic}{~}Woah, hey, hold on.." ],
      complimentStatus: () =>
         world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
            ? [ "<32>{#p/kidding}* Maybe if you show him you're checking him out first...?" ]
            : [ "<32>{#p/story}* Radtile wants you to check him out first." ],
      checkTalk: [ "<08>{#p/basic}{~}Study me, heh heh." ],
      realTalk1: [ "<08>{#p/basic}{~}Right on." ],
      realStatus: () =>
         world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
            ? [ "<32>{#p/kidding}* You did it!\n* ... can we leave now?" ]
            : [ "<32>{#p/story}* Radtile's feeling a whole lot cooler than before." ],
      realTalkY1: [ "<08>{#p/basic}{~}\x00*fist bump*" ],
      realTalkY2: [ "<08>{#p/basic}{~}You're the coolest." ],
      realTalkY3: [ "<08>{#p/basic}{~}Let's rock 'n' roll." ],
      shockTalk1: [ "<08>{#p/basic}{~}.. cool." ],
      shockStatus: () =>
         world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
            ? [ "<32>{#p/kidding}* Uh..." ]
            : [ "<32>{#p/story}* Radtile is not amused." ],
      act_insult: [ "<32>{#p/human}* (You call Radtile a loser, and tell him to shut up.)" ],
      act_insult_bullied: [ "<32>{#p/human}* (You mock Radtile's bruises, and tell him to go away.)" ],
      act_flirt: [ "<32>{#p/human}* (You beckon Radtile.)" ],
      act_flirt_bullied: [ "<32>{#p/human}* (You tell Radtile he's beautiful no matter how disfigured he is.)" ],
      insultTalk1: [ "<08>{#p/basic}{~}And what if I don't?" ],
      insultStatus: () =>
         world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
            ? [ "<32>{#p/kidding}* Uh..." ]
            : [ "<32>{#p/story}* Radtile keeps his distance." ],
      checkPostInsultTalk: [ "<08>{#p/basic}{~}Come to take another look?" ],
      checkPostInsultStatus: () =>
         world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
            ? [ "<32>{#p/kidding}* Ah, we're going in circles!" ]
            : [ "<32>{#p/story}* Radtile gives you a chance." ],
      hurtStatus: () =>
         world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
            ? [ "<32>{#p/kidding}* This isn't looking good..." ]
            : [ "<32>{#p/story}* Radtile的牙齒開始脫落了。" ]
   },
   b_opponent_doge: {
      act_check: () =>
         world.goatbro
            ? [ "<32>{#p/asriel2}* Doge，一條冷血的狗。\n* 純純的工作機器。" ]
            : [ "<32>{#p/story}* DOGE - ATK 14 DEF 10\n* Pronounced \"dohj.\" Soft j.\n* Member of the ELITE squad." ],
      act_flirt: () => [
         ...(dogecon() || world.goatbro
            ? [ "<32>{#p/human}* （你向Doge調情。）", "<32>{#p/basic}* 她對這種拍須溜馬不屑一顧。" ]
            : battler.volatile[0].vars.pet
            ? [ "<32>{#p/human}* （你向Doge調情。）", "<32>{#p/basic}* Doge giggles playfully." ]
            : battler.volatile[0].sparable
            ? [
                 "<32>{#p/human}* （你向Doge調情。）",
                 "<32>{#p/basic}* Doge, despondent, was unreceptive to your remark."
              ]
            : world.flirt < 10
            ? [ "<32>{#p/human}* （你向Doge調情。）", "<32>{#p/basic}* Doge tries not to react in any strong way." ]
            : [ "<32>{#p/human}* （你向Doge調情。）", "<32>{#p/basic}* Doge is giving it her all to resist you." ])
      ],
      act_flirt2: [
         "<32>{#p/human}* (You flirt with Doge again.)",
         "<32>{#p/basic}* Doge can't keep this up for much longer..."
      ],
      act_flirt3: [
         "<32>{#p/human}* (You muster your courage, and call Doge a little munchkin.)",
         "<32>{#p/basic}* Doge tries not to react, but finds herself blushing.",
         "<32>* She squirms and she struggles, but there's no hiding what's on her face.",
         "<32>* Thoroughly embarrassed, Doge flees the scene..."
      ],
      batheText: [
         "<32>{#p/human}* （你建議Doge去洗個澡。）",
         "<32>{#p/basic}* Doge rips open a pipe from the ceiling... water comes flooding out.",
         "<32>* It's cold, but she doesn't seem to mind...",
         "<32>* Soon, the water runs dry.\n* Doge relaxes a little...",
         "<32>{#p/story}* Doge's ATTACK down!"
      ],
      batheTextEarly: [ "<32>{#p/human}* (You suggest Doge get a shower, but she wasn't in the mood yet.)" ],
      batheTextGeno: [
         "<32>{#p/human}* （你建議Doge去洗個澡。）",
         "<32>{#p/basic}* 但她根本不在乎自己髒不髒。"
      ],
      batheTextLate: [ "<32>{#p/human}* (You suggest Doge get a shower, but it was too late.)" ],
      batheTextPost: [ "<32>{#p/human}* (But Doge was already clean.)" ],
      fetchStatus: [ "<32>{#p/story}* Doge is a little smarter than the average dog." ],
      fetchText: () => [
         "<32>{#p/human}* (You throw the spanner.)\n* (Doge intercepts your throw, launching it back at you.)",
         "<32>{#p/basic}* The spanner bonks you directly in the head!",
         "<32>{#p/story}* SPEED down!",
         ...(world.goatbro && SAVE.flag.n.ga_asrielSpanner++ < 1
            ? [ "<32>{#p/asriel2}* Maybe don't try that again." ]
            : [])
      ],
      fetchTextEpic: [
         "<32>{#p/human}* (You throw the spanner.)\n* (Doge, inspired, picks it up and brings it back to you.)"
      ],
      fetchTextGarb: [ "<32>{#p/human}* (You throw the spanner.)\n* (Doge, exhausted, ignores it.)" ],
      flirtStatus: [ "<32>{#p/story}* Doge questions the intention behind your advances." ],
      flirtStatusAccept: [ "<32>{#p/story}* Doge blushes slightly." ],
      flirtStatusReject: [ "<32>{#p/story}* Doge sighs apathetically." ],
      hurtStatus: () =>
         world.goatbro
            ? [ "<32>{#p/asriel2}* 離死不遠了。" ]
            : [ "<32>{#p/story}* Doge is trying desperately to pretend she's just fine." ],
      name: "* Doge",
      petTalkPost: [ "<11>{#p/basic}{~}Ah..." ],
      petText: [
         "<32>{#p/human}* （你想摸摸Doge。）",
         "<32>{#p/basic}* Doge hesitantly reaches her head up to meet your hand.",
         "<32>* You make contact.\n* Her face lights up.\n* She gives you a big smile.",
         "<32>* All her pent-up stress has finally been released.",
         "<32>* Doge is no longer interested in fighting you."
      ],
      petTextEarly: [ "<32>{#p/human}* (You try to pet Doge, but she can't be reached yet.)" ],
      petTextGeno: [
         "<32>{#p/human}* （你想摸摸Doge。）",
         "<32>{#p/basic}* 她對這份親暱漠然置之。"
      ],
      petTextLate: [ "<32>{#p/human}* (You try to pet Doge, but it was too late.)" ],
      petTextPost1: [
         "<32>{#p/human}* (You try to pet Doge again.)",
         "<32>{#p/basic}* Doge laps up your love like it's the first time she's been cared for in years..."
      ],
      petTextPost2: [ "<32>{#p/human}* (You try to pet Doge yet again.)", "<32>{#p/basic}* Doge has reached nirvana." ],
      petTextPost3: [ "<32>{#p/human}* (You continue petting Doge.)", "<32>{#p/basic}* Is this even legal?" ],
      petTextPost4: [ "<32>{#p/human}* (You pet Doge some more.)", "<32>{#p/basic}* Doge flops on the ground." ],
      petTextPost5: [ "<32>{#p/human}* (You give Doge a side rub.)", "<32>{#p/basic}* Doge is drooling..." ],
      petTextPost6: [ "<32>{#p/human}* (You pet Doge.)", "<32>{#p/basic}* It continues." ],
      petTextPost7: [ "<32>{#p/human}* (You pet Doge.)", "<32>{#p/basic}* ..." ],
      petTextSus: [ "<32>{#p/human}* (But Doge was too antsy to be pet.)" ],
      status1: () => (world.goatbro ? [ "<32>{#p/asriel2}* Doge。" ] : [ "<32>{#p/story}* Doge昂首闊步向你走來。" ]),
      turnStatus1: [ "<32>{#p/story}* Doge studies your stance, and deems it lacking." ],
      turnStatus2: () =>
         dogecon() ? [ "<32>{#p/story}* Doge fiddles with her spear." ] : [ "<32>{#p/story}* Doge needs a good washdown." ],
      turnStatus3: () =>
         dogecon()
            ? [ "<32>{#p/story}* Doge一再檢查她的站姿。" ]
            : battler.volatile[0].vars.bathe
            ? [ "<32>{#p/story}* Doge is dripping wet." ]
            : [ "<32>{#p/story}* Doge's hygiene remains unchanged, much to her dismay." ],
      turnStatus4: () =>
         dogex()
            ? [ "<32>{#p/story}* Doge thinks of her duty." ]
            : world.dead_canine
            ? [ "<32>{#p/story}* Doge thinks of her colleagues." ]
            : battler.volatile[0].vars.bathe
            ? [ "<32>{#p/story}* Doge seeks a little adventure." ]
            : [ "<32>{#p/story}* Doge ponders the meaning of her duty." ],
      turnStatus5: () =>
         dogex()
            ? [ "<32>{#p/story}* Doge thinks of her honor." ]
            : world.dead_canine
            ? [ "<32>{#p/story}* Doge想起了她的朋友們。" ]
            : battler.volatile[0].vars.walk
            ? [ "<32>{#p/story}* Doge relaxes back into her standard pose." ]
            : battler.volatile[0].vars.bathe
            ? [ "<32>{#p/story}* Doge regains her composure." ]
            : [ "<32>{#p/story}* Doge remembers an old colleague fondly." ],
      turnStatus6: () =>
         dogecon()
            ? [ "<32>{#p/story}* Doge keeps a cool head." ]
            : battler.volatile[0].vars.walk
            ? [ "<32>{#p/story}* Doge takes a deep breath." ]
            : [ "<32>{#p/story}* Doge breaks into a cold sweat." ],
      turnStatus7: () =>
         battler.volatile[0].vars.walk
            ? [ "<32>{#p/story}* Doge seeks affection." ]
            : [ "<32>{#p/story}* Doge takes a deep breath." ],
      turnStatus8: () =>
         dogecon()
            ? [ "<32>{#p/story}* Doge remains intent." ]
            : battler.volatile[0].vars.walk
            ? [ "<32>{#p/story}* Doge could use a helping hand." ]
            : [ "<32>{#p/story}* Doge's breath shortens." ],
      turnStatus9: () =>
         dogecon()
            ? [ "<32>{#p/story}* Doge remains intent." ]
            : battler.volatile[0].vars.walk
            ? [ "<32>{#p/story}* Doge just wants to be pet." ]
            : [ "<32>{#p/story}* Doge is hyperventilating." ],
      turnStatus10: () =>
         dogecon()
            ? [ "<32>{#p/story}* Doge remains intent." ]
            : battler.volatile[0].vars.pet
            ? [ "<32>{#p/story}* Doge is satisfied." ]
            : [ "<32>{#p/story}* Doge stands patiently before you in surrender." ],
      turnTalk1: () =>
         dogecon() || world.goatbro
            ? [ "<11>{#p/basic}{~}你犯下的罪行，\n我一清二楚。" ]
            : [ "<11>{#p/basic}{~}隊長警告我們\n要提防你。" ],
      turnTalk2: () =>
         world.goatbro
            ? [
                 "<11>{#p/basic}{~}兩人聯手，\n濫殺無辜...",
                 "<11>{#p/basic}{~}已然沉溺於\n殺戮快感之中\n無法自拔？"
              ]
            : dogex()
            ? [ "<11>{#p/basic}{~}當你屠戮平民，\n踐踏生命時...", "<11>{#p/basic}{~}可曾懊悔過\n自己的\n所作所為？" ]
            : world.dead_canine
            ? [ "<11>{#p/basic}{~}犬衛隊\n所有成員...", "<11>{#p/basic}{~}都慘死於\n你的暴行之下，\n無一倖免。" ]
            : [
                 "<11>{#p/basic}{~}As such, I have been on extended patrol.",
                 "<11>{#p/basic}{~}Mind you... it is quite dirty here."
              ],
      turnTalk3: () =>
         world.goatbro
            ? [
                 "<11>{#p/basic}{~}不願下出\n如此定論...",
                 "<11>{#p/basic}{~}但依我所見，\n絕無其他可能。"
              ]
            : dogecon()
            ? [
                 "<11>{#p/basic}{~}你隨時可以\n棄甲投戈...",
                 "<11>{#p/basic}{~}然而你選擇\n將殺戮\n貫徹到底。"
              ]
            : battler.volatile[0].vars.bathe
            ? [ "<11>{#p/basic}{~}Ah...", "<11>{#p/basic}{~}How pleasant..." ]
            : [
                 "<11>{#p/basic}{~}But we are ELITE squad members, I suppose.",
                 "<11>{#p/basic}{~}We must adapt to any situation."
              ],
      turnTalk4: () =>
         dogecon() || world.goatbro
            ? [
                 "<11>{#p/basic}{~}遙想當年，\n初入特戰隊...",
                 "<11>{#p/basic}{~}那時，安黛因\n視人類為敵，\n我將信將疑。"
              ]
            : battler.volatile[0].vars.bathe
            ? [ "<11>{#p/basic}{~}Too much water in my hair..." ]
            : [
                 "<11>{#p/basic}{~}When I asked to join the ELITE squad...",
                 "<11>{#p/basic}{~}I never imagined I'd make it in."
              ],
      turnTalk5: () =>
         dogecon() || world.goatbro
            ? [ "<11>{#p/basic}{~}而當親眼目睹\n你這般行徑...", "<11>{#p/basic}{~}我的心中\n已再無疑慮。" ]
            : battler.volatile[0].vars.walk
            ? [ "<11>{#p/basic}{~}Well.\nNothing beats a nice walk." ]
            : battler.volatile[0].vars.bathe
            ? [
                 "<11>{#p/basic}{~}{#f.batmusic1}Just a moment.",
                 "<11>{#p/basic}{~}...",
                 "<11>{#p/basic}{~}\x00*whips around*",
                 "<11>{#p/basic}{~}\x00*whipping continues*",
                 "<11>{#p/basic}{~}\x00*shakes off*",
                 "<11>{#p/basic}{~}...",
                 "<11>{#p/basic}{~}There, all dry now.\nBack to fighting, yes?",
                 "{*}{#f.batmusic2}{%}"
              ]
            : [
                 "<11>{#p/basic}{~}But after that dummy called it quits...",
                 "<11>{#p/basic}{~}I became the next in line."
              ],
      turnTalk6: () =>
         world.goatbro
            ? [
                 "<11>{#p/basic}{~}而你，\n艾斯利爾，\n就是我族叛徒。",
                 "<11>{#p/basic}{~}難以置信，\n如此邪惡至極，\n卻將登基為王。"
              ]
            : dogex()
            ? [ "<11>{#p/basic}{~}It would be wise for you to surrender.", "<11>{#p/basic}{~}Not that you know how." ]
            : world.dead_canine
            ? [
                 "<12>{#p/basic}{~}遁狗是狗衛隊\n最新成員。",
                 "<11>{#p/basic}{~}有些人... 把他的視力\n當作一種空去鑽...",
                 "<11>{#p/basic}{~}但是他的前途\n那麼明朗。"
              ]
            : battler.volatile[0].vars.walk
            ? [
                 "<11>{#p/basic}{~}You've sure been walking for a while.",
                 "<11>{#p/basic}{~}How much stamina do YOU have?"
              ]
            : battler.volatile[0].vars.bathe
            ? [ "<11>{#p/basic}{~}Apologies.\nThere is much on my mind." ]
            : [
                 "<11>{#p/basic}{~}It has been a difficult line of work...",
                 "<11>{#p/basic}{~}Even Undyne herself has moments of doubt.",
                 "<11>{#p/basic}{~}... do not tell her I shared that."
              ],
      turnTalk7: () =>
         world.goatbro
            ? [
                 "<11>{#p/basic}{~}我們的宿命\n竟是這般？",
                 "<11>{#p/basic}{~}卑鄙的王子\n與人類共謀...",
                 "<11>{#p/basic}{~}...誓要剿滅\n我族所有同胞？"
              ]
            : dogex()
            ? [
                 "<11>{#p/basic}{~}For life, you show nothing but contempt.",
                 "<11>{#p/basic}{~}At every turn, you treat us as inferior."
              ]
            : world.dead_canine
            ? [
                 "<11>{#p/basic}{~}小犬座是\n大犬座\n的直系下屬。",
                 "<11>{#p/basic}{~}它獨特的觀察\n方式幫了很\n多忙...",
                 "<11>{#p/basic}{~}即使這種行為\n常常被大家\n誤解。"
              ]
            : battler.volatile[0].vars.walk
            ? [ "<11>{#p/basic}{~}Clearly more than I antici- pated..." ]
            : [ "<11>{#p/basic}{~}(Sigh...)" ],
      turnTalk8: () =>
         world.goatbro
            ? [
                 "<11>{#p/basic}{~}終究...",
                 "<11>{#p/basic}{~}兩人孰更惡劣，\n難以論斷。"
              ]
            : dogex()
            ? [ "<11>{#p/basic}{~}Now, it is your turn.", "<11>{#p/basic}{~}Your turn to be treated as inferior." ]
            : world.dead_canine
            ? [
                 "<11>{#p/basic}{~}Dogamy and Dogaressa, a duo of dilligence.",
                 "<11>{#p/basic}{~}Before they met, they often misbehaved.",
                 "<11>{#p/basic}{~}But once together, they could do ANYTHING."
              ]
            : battler.volatile[0].vars.walk
            ? [ "<11>{#p/basic}{~}...", "<11>{#p/basic}{~}Can we really keep going like this?" ]
            : [ "<11>{#p/basic}{~}This battle is starting to drag on." ],
      turnTalk9: () =>
         world.goatbro
            ? 
              [ "<11>{#p/basic}{~}只此一言...", "<11>{#p/basic}{~}這一切，\n未曾預料。" ]
            : dogex()
            ? [ "<11>{#p/basic}{~}..." ]
            : world.dead_canine
            ? [
                 "<11>{#p/basic}{~}Canis Major was there when the canine unit was formed.",
                 "<11>{#p/basic}{~}Along with its master, it led the unit well.",
                 "<11>{#p/basic}{~}But now..."
              ]
            : [ "<11>{#p/basic}{~}Human, I..." ],
      turnTalk10: () =>
         world.goatbro
            ? [
                 "<11>{#p/basic}{~}言盡至此。",
                 "<11>{#p/basic}{~}I will have justice for the terror you have inspired."
              ]
            : dogex()
            ? [
                 "<11>{#p/basic}{~}言盡至此。",
                 "<11>{#p/basic}{~}正義，\n我必索回。"
              ]
            : world.dead_canine
            ? [
                 "<11>{#p/basic}{~}言盡至此。",
                 "<11>{#p/basic}{~}I will have justice for those dogs' deaths."
              ]
            : battler.volatile[0].vars.pet
            ? [ "<11>{#p/basic}{~}(Blushes)", "<11>{#p/basic}{~}You are a... kind human..." ]
            : [
                 "<11>{#p/basic}{~}I think I have had enough.",
                 "<11>{#p/basic}{~}...",
                 "<11>{#p/basic}{~}In fairness, you do not seem so bad.",
                 "<11>{#p/basic}{~}At least, compared to how Undyne described.",
                 "<11>{#p/basic}{~}Accept my mercy as a plea...",
                 "<11>{#p/basic}{~}A plea that you will not stray into the darkness."
              ],
      turnTalk11: () => [ "<11>{#p/basic}{~}..." ],
      walkText: [
         "<32>{#p/human}* (You offer to take Doge on a walk.)",
         "<32>{#p/basic}* Doge follows your lead.\n* Together you march in unison.",
         "<32>* This continues for a while...",
         "<32>* But eventually...",
         "<32>* Doge grows tired of this frivolous exercise.",
         "<32>* She follows you back to her patrol zone, and relaxes a little...",
         "<32>{#p/story}* Doge's ATTACK down!"
      ],
      walkTextEarly: [ "<32>{#p/human}* (You offer to take Doge on a walk, but she has no reason to go on one yet.)" ],
      walkTextGeno: [
         "<32>{#p/human}* (You offer to take Doge on a walk.)",
         "<32>{#p/basic}* Doge refuses to walk anywhere with you."
      ],
      walkTextLate1: [
         "<32>{#p/human}* (You offer to take Doge on a walk, but she's already dried herself up for you.)"
      ],
      walkTextLate2: [
         "<32>{#p/human}* (You offer to take Doge on a walk, but she never did anything to necessitate it.)"
      ],
      walkTextPost: [ "<32>{#p/human}* (But Doge was already spent from walking beforehand.)" ],
      walkTextSus: [ "<32>{#p/human}* (But Doge was too dirty to go on a walk.)" ]
   },
   b_opponent_muffet: {
      act_check: [ "<32>{#p/story}* MUFFET - ATK 39 DEF 19\n* Queen of all spider clans.\n* ELITE squad volunteer." ],
      act_flirt: () => [
         ...(badSpider()
            ? [ "<32>{#p/human}* (You flirt with Muffet.)\n* (Muffet gives you the stink eyes.)" ]
            : battler.volatile[0].sparable
            ? [ "<32>{#p/human}* (You flirt with Muffet.)\n* (Muffet giggles and pats your head with several hands.)" ]
            : world.flirt < 10
            ? [ "<32>{#p/human}* (You flirt with Muffet.)\n* (Muffet giggles and wags several fingers at you.)" ]
            : [ "<32>{#p/human}* (You flirt with Muffet.)\n* (Muffet seems intrigued, but it may not enough.)" ])
      ],
      act_flirt2: [
         "<32>{#p/human}* (You flirt with Muffet again.)\n* (Muffet turns more than a few eyes towards you.)"
      ],
      act_flirt3: [
         "<32>{#p/human}* (You muster your courage, and ask Muffet out on a picnic date.)",
         "<32>{#p/basic}* Muffet giggles...",
         "<32>* Then giggles some more...",
         "<32>* She can't stop herself!\n* Muffet succumbs to your immaculate flirtatious power!",
         "<32>* ... then promptly decides to end this battle, so as not to shame her fellow spiders.",
         "<32>{#p/kidding}* ... what?"
      ],
      flirtReaction1: [ "<11>{#p/basic}{~}How adorable~" ],
      flirtReaction2: [ "<11>{#p/basic}{~}You're the sweetest~" ],
      flirtReaction3: [ "<11>{#p/basic}{~}Ahuhu~" ],
      appeaseText: () =>
         world.dead_canine
            ? [
                 "<33>{#p/human}* (You make an appeal to Muffet.)\n* (Muffet is once again intrigued by your words.)",
                 "<32>* (You mention how Doge was forced to fight, and Undyne's lack of care is clear.)",
                 "<32>* (As such, you suggest that trusting Undyne would mean putting spider clans at risk.)",
                 "<32>{#p/basic}* Muffet starts considering the situation...",
                 "<32>{#p/story}* Muffet's SPEED down!"
              ]
            : [
                 "<33>{#p/human}* (You make an appeal to Muffet.)\n* (Muffet is once again intrigued by your words.)",
                 "<32>* (You mention how Doge was mistreated, and Undyne's lack of care is clear.)",
                 "<32>* (As such, you suggest that trusting Undyne would mean putting spider clans at risk.)",
                 "<32>{#p/basic}* Muffet starts considering the situation...",
                 "<32>{#p/story}* Muffet's SPEED down!"
              ],
      appeaseTextEarly: [ "<32>{#p/human}* (You make an appeal to Muffet, but she doesn't seem ready to hear it yet.)" ],
      appeaseTextGeno: [
         "<32>{#p/human}* (You make an appeal to Muffet.)",
         "<32>{#p/basic}* Muffet will not be swayed by your shallow claims."
      ],
      appeaseTextLate: [
         "<32>{#p/human}* (You make an appeal to Muffet, but she's already past the point of hearing you out.)"
      ],
      appeaseTextPost: [ "<32>{#p/human}* (But Muffet didn't need to be appeased twice.)" ],
      appeaseTextSus: [ "<32>{#p/human}* (But Muffet had no reason to listen to you.)" ],
      counterText: [
         "<32>{#p/human}* (You try to counter Muffet.)\n* (Muffet is intrigued by your words.)",
         "<32>* (You propose that a deal with the ELITE squad is flimsy.)",
         "<32>* (You point out that one of their ranks already failed to capture you.)",
         "<32>{#p/basic}* Muffet begins to carefully think everything over...",
         "<32>{#p/story}* Muffet's SPEED down!"
      ],
      counterTextEarly: [
         "<32>{#p/human}* (You try to counter Muffet, but she hasn't said anything that could be countered yet.)"
      ],
      counterTextGeno: [
         "<32>{#p/human}* (You try to counter Muffet.)",
         "<32>{#p/basic}* Muffet is deadset in her goal."
      ],
      counterTextLate: [ "<32>{#p/human}* (You try to counter Muffet, but she's already made up her mind.)" ],
      counterTextPost: [ "<32>{#p/human}* (But Muffet has already heard your argument.)" ],
      name: "* 瑪菲特",
      payTalkPost: [ "<11>{#p/basic}{~}That's very kind, but we already have more than enough~" ],
      payText: [
         "<32>{#p/human}* (You try to pay Muffet.)",
         "<32>* As it turns out, Monster Kid had enough G to cover all of the spider clans' expenses!",
         "<32>* Muffet pockets the money and bows to you and Monster Kid.",
         "<32>* Her subjects will be well fed for quite a while.",
         "<32>* Muffet doesn't care about fighting anymore."
      ],
      payTextEarly: [
         "<32>{#p/human}* (You try to pay Muffet, but she didn't yet see any basis on which she could accept it.)"
      ],
      payTextGeno: [
         "<32>{#p/human}* (You try to pay Muffet.)",
         "<32>{#p/basic}* Muffet doesn't need any money from you."
      ],
      payTextLate: [ "<32>{#p/human}* (You try to pay Muffet, but she's already past the point of bribery.)" ],
      payTextPost: [ "<32>{#p/human}* (You try to pay Muffet again.)" ],
      payTextSus: [ "<32>{#p/human}* (But Muffet had no reason to trust you.)" ],
      status1: [ "<32>{#p/kidding}* 我被困住了...！" ],
      turnStatus1: () =>
         badSpider()
            ? world.genocide
               ? world.bullied
                  ? [ "<32>{#p/kidding}* Little bullies...?" ]
                  : [ "<32>{#p/kidding}* Little killers...?" ]
               : world.bullied
               ? [ "<32>{#p/kidding}* Little bully...?" ]
               : [ "<32>{#p/kidding}* Little killer...?" ]
            : [ "<32>{#p/kidding}* Help...!" ],
      turnStatus2: () =>
         badSpider()
            ? world.genocide
               ? [ "<32>{#p/kidding}* But we haven't done anything!" ]
               : [ "<32>{#p/kidding}* I've got a bad feeling about this..." ]
            : [ "<32>{#p/kidding}* So it's a business thing..." ],
      turnStatus3: () =>
         badSpider()
            ? [ "<32>{#p/kidding}* Yo...\n* She REALLY doesn't like you..." ]
            : battler.volatile[0].vars.counter
            ? [ "<32>{#p/kidding}* What are we going to do?" ]
            : [ "<32>{#p/kidding}* We're never getting outta here, are we..." ],
      turnStatus4: () =>
         badSpider()
            ? [ "<32>{#p/kidding}* What the heck was THAT?" ]
            : battler.volatile[0].vars.counter
            ? [ "<32>{#p/kidding}* Is she... changing her mind?" ]
            : [ "<32>{#p/kidding}* What the heck was THAT?" ],
      turnStatus5: () =>
         badSpider()
            ? [ "<32>{#p/kidding}* Of course..." ]
            : battler.volatile[0].vars.counter
            ? [ "<32>{#p/kidding}* Guess it won't be so easy..." ]
            : [ "<32>{#p/kidding}* Y... you're kidding, right?\n* This isn't fun at all!" ],
      turnStatus6: () =>
         badSpider()
            ? [ "<32>{#p/kidding}* I don't like what she's saying about you, dude..." ]
            : battler.volatile[0].vars.counter
            ? [ "<32>{#p/kidding}* Fellow spiders...?" ]
            : [ "<32>{#p/kidding}* Uh..." ],
      turnStatus7: () =>
         badSpider()
            ? [ "<32>{#p/kidding}* She's relentless...!" ]
            : battler.volatile[0].vars.appease
            ? [ "<32>{#p/kidding}* Hey, wait...\n* I think this is working!\n* Keep going, dude!" ]
            : [ "<32>{#p/kidding}* I'm...\n* I'm scared, dude..." ],
      turnStatus8: () =>
         badSpider()
            ? [ "<32>{#p/kidding}* Dude, HOW are we STILL ALIVE??" ]
            : battler.volatile[0].vars.appease
            ? [ "<32>{#p/kidding}* Yo, freaky muffins aside... we're making progress!\n* I think?" ]
            : [ "<32>{#p/kidding}* Ack, not again!!" ],
      turnStatus9: () =>
         badSpider()
            ? [ "<32>{#p/kidding}* What's \"inevitable?\"" ]
            : battler.volatile[0].vars.appease
            ? [ "<32>{#p/kidding}* But...\n* I thought we..." ]
            : [ "<32>{#p/kidding}* Ack, not again!!" ],
      turnStatus10: () =>
         badSpider()
            ? [ "<32>{#p/kidding}* Yo, I'm here too, you know..." ]
            : battler.volatile[0].vars.appease
            ? [ "<32>{#p/kidding}* Hey, I've got money!\n* Let's use it, dude!" ]
            : [ "<32>{#p/kidding}* Someone, anyone..." ],
      turnStatus11: () =>
         badSpider()
            ? [ "<32>{#p/kidding}* This isn't funny...!" ]
            : battler.volatile[0].vars.pay
            ? [ "<32>{#p/kidding}* I hope that short skeleton doesn't mind me using the money he gave me..." ]
            : battler.volatile[0].vars.appease
            ? [ "<32>{#p/kidding}* Dude...\n* Why didn't we help her?" ]
            : [ "<32>{#p/kidding}* It's over..." ],
      turnStatus12: () =>
         badSpider() ? [ "<32>{#p/kidding}* ..." ] : [ "<32>{#p/kidding}* Are we gonna end this, or...?" ],
      turnStatus13: () =>
         badSpider() ? [ "<32>{#p/kidding}* Is it really over?" ] : [ "<32>{#p/kidding}* Are we gonna end this, or...?" ],
      turnTalk1: () =>
         badSpider()
            ? world.genocide
               ? world.bullied
                  ? [ "<11>{#p/basic}{~}Ahuhuhu... two little bullies crawl into my web~" ]
                  : [ "<11>{#p/basic}{~}Ahuhuhu... two little killers crawl into my web~" ]
               : world.bullied
               ? [ "<11>{#p/basic}{~}Ahuhuhu... a little bully crawls into my web~" ]
               : [ "<11>{#p/basic}{~}Ahuhuhu... a little killer crawls into my web~" ]
            : [ "<11>{#p/basic}{~}You're mine now, dearies~" ],
      turnTalk1a: [
         "<11>{#p/basic}{~}I hope you like your new color~",
         "<11>{#p/basic}{~}I think purple looks better on you...",
         "<11>{#p/basic}{~}Don't you, dearie?"
      ],
      turnTalk2: () =>
         badSpider()
            ? [
                 world.genocide
                    ? "<11>{#p/basic}{~}What did you think would happen, dearies?"
                    : "<11>{#p/basic}{~}What did you think would happen, dearie?",
                 "<11>{#p/basic}{~}Did you expect me to SPARE you?"
              ]
            : [
                 "<11>{#p/basic}{~}Don't expect me to go easy on you, little human.",
                 "<11>{#p/basic}{~}That ELITE squad offered lots of money for your SOUL~"
              ],
      turnTalk3: () =>
         badSpider()
            ? [ "<11>{#p/basic}{~}Oh my~", "<11>{#p/basic}{~}Such a shame for you~" ]
            : battler.volatile[0].vars.counter
            ? [ "<11>{#p/basic}{~}Ahuhuhu...\nWell..." ]
            : [
                 "<11>{#p/basic}{~}With your lack of a counter- offer...",
                 "<11>{#p/basic}{~}The choice for me is clear~"
              ],
      turnTalk4: () =>
         badSpider()
            ? [
                 "<11>{#p/basic}{~}Well.\nThere is one good thing about it~",
                 "<11>{#p/basic}{~}I don't have to feel bad about feeding my pet!"
              ]
            : battler.volatile[0].vars.counter
            ? [ "<11>{#p/basic}{~}A better deal would be nice..." ]
            : [ "<11>{#p/basic}{~}Where are you, my pet~", "<11>{#p/basic}{~}It's time to eat~" ],
      turnTalk5: () =>
         badSpider()
            ? [
                 "<11>{#p/basic}{~}You survived?\nImpressive~",
                 "<11>{#p/basic}{~}I shall have to reward you...",
                 "<11>{#p/basic}{~}... with more attacks, of course.\nAhuhuhu!"
              ]
            : battler.volatile[0].vars.counter
            ? [
                 "<11>{#p/basic}{~}But what guarantee do I have...",
                 "<11>{#p/basic}{~}... that you won't just stab me in the back?"
              ]
            : [
                 "<11>{#p/basic}{~}I often wondered what fighting would be like.",
                 "<11>{#p/basic}{~}I never realized it'd be so much fun~"
              ],
      turnTalk6: () =>
         badSpider()
            ? [
                 "<11>{#p/basic}{~}How did it feel, hmm?",
                 !world.bullied
                    ? "<11>{#p/basic}{~}All those monsters falling like dominoes..."
                    : "<11>{#p/basic}{~}All those monsters running scared..."
              ]
            : battler.volatile[0].vars.counter
            ? [
                 "<11>{#p/basic}{~}My fellow spiders need kept safe...",
                 "<11>{#p/basic}{~}I can't put THEM in danger, can I?\nAhuhuhu..."
              ]
            : [
                 "<11>{#p/basic}{~}Aren't you having fun, dearies?",
                 "<11>{#p/basic}{~}My fellow spiders certainly will...",
                 "<11>{#p/basic}{~}... when they get their share of the money~"
              ],
      turnTalk7: () =>
         badSpider()
            ? world.genocide || !world.bullied
               ? [
                    world.genocide ? "<11>{#p/basic}{~}Well, dearies..." : "<11>{#p/basic}{~}Well, dearie...",
                    "<11>{#p/basic}{~}I shall enjoy killing you personally~"
                 ]
               : [ "<11>{#p/basic}{~}Well, dearie...", "<11>{#p/basic}{~}I shall enjoy paying back the favor~" ]
            : battler.volatile[0].vars.appease
            ? [ "<11>{#p/basic}{~}I must admit, that is very worrying..." ]
            : [
                 "<11>{#p/basic}{~}Well, no matter, little human~",
                 "<11>{#p/basic}{~}The only thing that matters now is your SOUL~"
              ],
      turnTalk8: () =>
         badSpider()
            ? [
                 world.genocide
                    ? "<11>{#p/basic}{~}Oh, this is so much fun, you two!"
                    : "<11>{#p/basic}{~}Oh, this is so much fun, is it not?",
                 "<11>{#p/basic}{~}My pet, it's feeding time~"
              ]
            : battler.volatile[0].vars.appease
            ? [
                 "<11>{#p/basic}{~}And they didn't exactly do much to earn my trust...",
                 "<11>{#p/basic}{~}Oh, hello, my pet~"
              ]
            : [ "<11>{#p/basic}{~}Time for round two, my pet~" ],
      turnTalk9: () =>
         badSpider()
            ? [ "<11>{#p/basic}{~}You only delay the inevitable~" ]
            : battler.volatile[0].vars.appease
            ? [ "<11>{#p/basic}{~}Still, dearies...", "<11>{#p/basic}{~}I don't know if I can trust you~" ]
            : [ "<11>{#p/basic}{~}You're resilient, I'll give you that~" ],
      turnTalk10: () =>
         badSpider()
            ? [ "<11>{#p/basic}{~}Come now...", "<11>{#p/basic}{~}Aren't you getting tired?" ]
            : battler.volatile[0].vars.appease
            ? [ "<11>{#p/basic}{~}Unless, perhaps...", "<11>{#p/basic}{~}You can offer me a little insurance?" ]
            : [ "<11>{#p/basic}{~}But unless my deal changes, your SOUL is as good as mine~" ],
      turnTalk11: () =>
         badSpider()
            ? [ "<11>{#p/basic}{~}Ahuhuhu..." ]
            : battler.volatile[0].vars.pay
            ? [
                 "<11>{#p/basic}{~}You two have my sincerest apologies~",
                 "<11>{#p/basic}{~}This is a good deed I won't easily forget!"
              ]
            : [
                 "<11>{#p/basic}{~}What's this?\nA message from Undyne?",
                 "<11>{#p/basic}{~}She's called off the deal...?",
                 "<11>{#p/basic}{~}... hmmm...",
                 "<11>{#p/basic}{~}Well, I think my job here is done, don't you?",
                 "<11>{#p/basic}{~}Sorry for wasting your time~"
              ],
      turnTalk12: () => [ "<11>{#p/basic}{~}..." ],
      turnTalk13: (didf: boolean) =>
         badSpider()
            ? [
                 world.genocide
                    ? "<11>{#p/basic}{~}You know what, dearies?"
                    : "<11>{#p/basic}{~}You know what, dearie?",
                 "<11>{#p/basic}{~}I've had enough of fighting you.",
                 "<11>{#p/basic}{~}So do what you will.",
                 world.genocide || !world.bullied
                    ? didf
                       ? "<11>{#p/basic}{~}... sorry, Undyne.\nI'd rather die on my own terms, thank you."
                       : "<11>{#p/basic}{~}... sorry, Undyne.\nThis has dragged on for long enough."
                    : didf
                    ? "<11>{#p/basic}{~}Honestly, a little bully like you isn't worth dying over..."
                    : "<11>{#p/basic}{~}Honestly, a little bully like you isn't worth my time...",
                 "<11>{#p/basic}{~}Bye bye, now~"
              ]
            : [ "<11>{#p/basic}{~}..." ]
   },
   b_opponent_undyne: {
      artifact: [ "<32>{#p/human}* (Undyne doesn't even seem to know what it is.)" ],
      epiphaNOPE: [ "<20>{#p/undyne}Huh?\nWhat even IS this?" ],
      spaghetti1: [
         "<32>{#p/basic}* The smell reminds Undyne of someone close to her...",
         "<32>{#p/story}* Undyne's ATTACK down!"
      ],
      spaghetti2: () =>
         world.genocide
            ? [
                 "<32>{#p/basic}* The smell reminds Undyne of someone she'll never see again...",
                 "<32>{#p/basic}* ... but her determination to eliminate you strengthens.",
                 "<32>{#p/story}* Undyne's ATTACK up!\n* Undyne's DEFENSE down!"
              ]
            : [
                 "<32>{#p/basic}* The smell reminds Undyne of someone she'll never see again...",
                 "<32>{#p/story}* Undyne's DEFENSE down!"
              ],
      act_check: () =>
         world.genocide
            ? [ "<32>{#p/asriel2}* 安黛因 the Undying。\n* 你怎麼不攻擊？" ]
            : helmetdyne()
            ? [ "<32>{#p/story}* UNDYNE - ATK 40 DEF 100\n* Captain of the Royal Guard.\n* Relentless." ]
            : respecc()
            ? [ "<32>{#p/story}* UNDYNE - ATK 25 DEF 10\n* Once your sworn enemy, now your unmatched equal!" ]
            : [ "<32>{#p/story}* 安黛因 - 攻擊50 防禦20\n* 永不放棄的英雄。" ],
      name: () => (world.genocide ? "* Undyne the Undying" : "* 安黛因"),
      status1: () =>
         helmetdyne()
            ? [ "<32>{#p/story}* Undyne towers above you." ]
            : respecc()
            ? [ "<32>{#p/story}* Undyne takes you head-on!" ]
            : [ "<32>{#p/story}* 安黛因來襲！" ],
      intro1: () =>
         SAVE.data.n.state_starton_papyrus === 1
            ? [ "<20>{*}{#p/undyne}準備迎戰吧。" ]
            : [ "<20>{*}{#p/undyne}En guarde!" ],
      intro2: () =>
         SAVE.data.n.state_starton_papyrus === 1
            ? [ "<20>{*}{#p/undyne}讓我把故事講完。" ]
            : respecc()
            ? [ "<20>{*}{#p/undyne}Huh!?\nI thought you were tough!" ]
            : [ "<20>{*}{#p/undyne}You won't get away from me this time!" ],
      intro3: () =>
         respecc()
            ? [ "<20>{*}{#p/undyne}No more second chances!" ]
            : [ "<20>{*}{#p/undyne}You've escaped from me for the LAST time!" ],
      intro4: [ "<20>{*}{#p/undyne}STOP RUNNING AWAY!!!" ],
      intro5: [ "<20>{*}{#p/undyne}COME BACK HERE, YOU LITTLE PUNK!!" ],
      earlyChallenge: () =>
         SAVE.data.n.state_starton_papyrus === 1
            ? [
                 "<20>{#p/undyne}{#e/undyne/3}想跟我{@fill=#f00}硬碰硬{@fill=#000}，是嗎？",
                 "<20>{#e/undyne/2}成全你。"
              ]
            : respecc()
            ? [
                 "<20>{#p/undyne}{#e/undyne/17}What!?\nI'm already going as fast as I can!",
                 "<20>{#e/undyne/17}But...\nI... you...",
                 "<20>{#e/undyne/17}N-no!\nI'll show you!",
                 "<20>{#e/undyne/1}I'll show you {@fill=#f00}EVERYTHING I'VE GOT{@fill=#000}!"
              ]
            : [
                 "<20>{#p/undyne}{#e/undyne/17}So, you wanna do this the {@fill=#f00}hard way{@fill=#000}, huh?",
                 "<20>{#e/undyne/1}FINE BY ME!\nFUHUHU!"
              ],
      earlyChallengeStatus: [ "<32>{#p/story}* 戰鬥局勢開始升溫。" ],
      randStatus1: () =>
         respecc()
            ? [ "<32>{#p/story}* Undyne points dramatically towards space." ]
            : [ "<32>{#p/story}* Undyne points heroically towards space." ],
      randStatus2: () =>
         respecc()
            ? [ "<32>{#p/story}* Undyne twirls her spear with grace." ]
            : [ "<32>{#p/story}* Undyne flips her spear impatiently." ],
      randStatus3: () => [ "<32>{#p/story}* Undyne suplexes an asteroid.\n* Just because she can." ],
      randStatus4: () =>
         respecc() ? [ "<32>{#p/story}* Undyne bounces with fervor." ] : [ "<32>{#p/story}* Undyne bounces impatiently." ],
      randStatus5: () =>
         respecc()
            ? [ "<32>{#p/story}* Undyne flashes a genuine smile." ]
            : [ "<32>{#p/story}* Undyne flashes a menacing smile." ],
      randStatus6: () =>
         respecc()
            ? [ "<33>{#p/story}* Undyne looks on with adoration." ]
            : [ "<32>{#p/story}* Undyne draws her finger across her neck." ],
      randStatus7: () =>
         respecc()
            ? [ "<32>{#p/story}* Undyne lets out a battle cry." ]
            : [ "<32>{#p/story}* Undyne holds her fist in front of her and shakes her head." ],
      randStatus8: () =>
         respecc()
            ? [ "<32>{#p/story}* Undyne stares into your SOUL." ]
            : [ "<32>{#p/story}* Undyne towers threateningly." ],
      randStatus9: () =>
         respecc()
            ? [ "<32>{#p/story}* Undyne thinks of her friends... and thinks of you." ]
            : [ "<32>{#p/story}* Undyne thinks of her friends and pounds the ground with her fists." ],
      randStatus10: () =>
         respecc() ? [ "<32>{#p/story}* Smells like talapia." ] : [ "<32>{#p/story}* Smells like sushi." ],
      papStatus1: [ "<32>{#p/story}* 安黛因的眼角閃爍著淚光。" ],
      papStatus2: [ "<32>{#p/story}* 安黛因沉著臉，死死瞪著你。" ],
      papStatus3: [ "<32>{#p/story}* 安黛因想到了她的朋友，\n  用盡全力向地猛擊。" ],
      papStatus4: [ "<32>{#p/story}* 安黛因沒心情跟你胡鬧。" ],
      papStatus5: [ "<32>{#p/story}* 金槍魚沙拉的味道撲面而來。" ],
      endStatus1: [ "<32>{#p/story}* Undyne's eye is twitching involuntarily." ],
      endStatus2: [ "<32>{#p/story}* Undyne is smashing spears on the ground." ],
      endStatus3: [ "<32>{#p/story}* Undyne's eye dart around to see if this is a prank." ],
      endStatus4: [ "<32>{#p/story}* Undyne is hyperventilating." ],
      endStatus5: [ "<32>{#p/story}* Smells like roasted fish." ],
      tutorial1: () =>
         SAVE.data.n.state_starton_papyrus === 1
            ? [
                 "<20>{#p/undyne}{#e/undyne/3}...",
                 "<20>{#e/undyne/4}怎麼？\n還想我杵在這，\n教你怎麼應戰嗎？"
              ]
            : [
                 "<20>{#p/undyne}{#e/undyne/0}As long as you're {@fill=#00c000}GREEN{@fill=#000} you {@fill=#f00}CAN'T ESCAPE{@fill=#000}!",
                 "<20>{#e/undyne/0}Unless you learn to {@fill=#f00}face danger head-on{@fill=#000}...",
                 "<20>{#e/undyne/1}You won't last a SECOND against ME!"
              ],
      tutorial2: [
         "<20>{#p/undyne}{#e/undyne/0}When I said {@fill=#f00}face towards danger{@fill=#000}...",
         "<20>{#e/undyne/1}I meant face towards the bullets!"
      ],
      tutorial3: () => [
         "<20>{#p/undyne}{#e/undyne/3}Look.",
         "<20>{#e/undyne/3}I gave you a spear.",
         "<20>{#e/undyne/2}You can use that to block my attacks.",
         respecc()
            ? "<20>{#e/undyne/17}I should not have to explain this to YOU of all people!"
            : "<20>{#e/undyne/17}Do I have to explain this any more clearly?"
      ],
      tutorial4: [
         "<20>{#p/undyne}{#e/undyne/6}WHAT ARE YOU DOING?",
         "<20>{#e/undyne/7}JUST FACE UPWARDS!!!",
         "<20>{#e/undyne/5}IT'S NOT THAT HARD!!!"
      ],
      tutorial5: () =>
         respecc()
            ? [
                 "<20>{#p/undyne}{#e/undyne/2}...",
                 "<20>{#e/undyne/2}I wanted this to be a fair fight.",
                 "<20>{#e/undyne/3}I had hoped you'd show me what you're capable of.",
                 "<20>{#e/undyne/4}And maybe, if you beat me like this...",
                 "<20>{#e/undyne/2}It'd truly show how strong you are.",
                 "<20>{#e/undyne/6}BUT NOW???",
                 "<20>{#e/undyne/5}I DON'T CARE!",
                 "<20>{#e/undyne/5}I'M NOT YOUR FREAKING BABYSITTER!",
                 "<20>{#e/undyne/17}Unless your babysitter...",
                 "<20>{#e/undyne/5}DOES THIS!"
              ]
            : [
                 "<20>{#p/undyne}{#e/undyne/2}...",
                 "<20>{#e/undyne/2}I wanted this to be a fair fight.",
                 "<20>{#e/undyne/3}I wanted to give you a chance.",
                 "<20>{#e/undyne/4}And maybe, if I beat you like this...",
                 "<20>{#e/undyne/2}It'd truly show how strong monsters can be.",
                 "<20>{#e/undyne/6}BUT NOW???",
                 "<20>{#e/undyne/5}I DON'T CARE!",
                 "<20>{#e/undyne/5}I'M NOT YOUR FREAKING BABYSITTER!",
                 "<20>{#e/undyne/17}Unless your babysitter...",
                 "<20>{#e/undyne/5}DOES THIS!"
              ],
      turnTalkA1: () =>
         SAVE.data.n.state_starton_papyrus === 1
            ? SAVE.data.n.hp < 6
               ? [
                    "<20>{#p/undyne}{#e/undyne/33}Too difficult?\nFeh.",
                    "<20>{#p/undyne}{#e/undyne/2}You should've thought about THAT when you had the chance."
                 ]
               : SAVE.data.n.hp < 11
               ? [
                    "<20>{#p/undyne}{#e/undyne/3}Not bad, not great.",
                    "<20>{#p/undyne}{#e/undyne/2}Papyrus certainly wouldn't be satisfied, though."
                 ]
               : SAVE.data.n.hp < 16
               ? [
                    "<20>{#p/undyne}{#e/undyne/3}So you're gonna be a little tougher than I expected.",
                    "<20>{#p/undyne}{#e/undyne/2}Fair enough."
                 ]
               : [
                    "<20>{#p/undyne}{#e/undyne/4}Impressive...",
                    "<20>{#p/undyne}{#e/undyne/2}Just don't expect your luck to last long."
                 ]
            : battler.volatile[0].vars.trolled
            ? respecc()
               ? [
                    "<20>{#p/undyne}{#e/undyne/1}\x00*huff...*\n\x00*huff...*",
                    "<20>{#e/undyne/1}So this was your plan all along, huh?",
                    "<20>{#e/undyne/5}Get me all riled up so you could face me at FULL STRENGTH?",
                    "<20>{#e/undyne/0}Well then.",
                    "<20>{#e/undyne/6}Looks like WE'RE gonna have to do this the {@fill=#f00}hard way{@fill=#000}!",
                    "<20>{#e/undyne/1}Fuhuhuhu!!"
                 ]
               : [
                    "<20>{#p/undyne}{#e/undyne/1}\x00*huff...*\n\x00*huff...*",
                    "<20>{#e/undyne/21}Not bad.",
                    "<20>{#e/undyne/15}But I don't have time for your games.",
                    "<20>{#e/undyne/6}So WE'RE gonna have to do this the {@fill=#f00}hard way{@fill=#000}!",
                    "<20>{#e/undyne/1}Fuhuhuhu!!"
                 ]
            : [ "<20>{#p/undyne}{#e/undyne/1}Not bad!\nThen how about THIS!?" ],
      turnTalkA2: () =>
         SAVE.data.n.state_starton_papyrus === 1
            ? [ "<20>{#p/undyne}{#e/undyne/2}給你講個故事吧。" ]
            : respecc()
            ? [ "<20>{#p/undyne}{#e/undyne/0}It's been a long time since I've met a warrior like you..." ]
            : [ "<20>{#p/undyne}{#e/undyne/0}For years, we've dreamed of a happy ending..." ],
      turnTalkA3: () =>
         SAVE.data.n.state_starton_papyrus === 1
            ? [
                 "<20>{#p/undyne}{#e/undyne/2}在我小的時候，\n我努力訓練，\n夢想成為一名皇家守衛...",
                 "<20>{#p/undyne}{#e/undyne/2}然而，\n事情並非一帆風順。"
              ]
            : respecc()
            ? [ "<20>{#p/undyne}{#e/undyne/0}And now, I've got the chance to do battle with one!" ]
            : [ "<20>{#p/undyne}{#e/undyne/0}And now, the stars are just within reach!" ],
      turnTalkA4: () =>
         SAVE.data.n.state_starton_papyrus === 1
            ? [ "<20>{#p/undyne}{#e/undyne/2}許多人反對我加入衛隊，\n包括我的家人。" ]
            : respecc()
            ? [ "<20>{#p/undyne}{#e/undyne/1}I'll savor this moment for as long as it lasts!" ]
            : [ "<20>{#p/undyne}{#e/undyne/1}I won't let you snatch it away from us!" ],
      turnTalkA5: () =>
         SAVE.data.n.state_starton_papyrus === 1
            ? [
                 "<20>{#p/undyne}{#e/undyne/3}後來，\n在一次訓練事故中，\n我瞎了左眼...",
                 "<20>{#p/undyne}{#e/undyne/2}困難重重，無依無靠。"
              ]
            : [ "<20>{#p/undyne}{#e/undyne/5}NGAHHH!\nEnough warming up!" ],
      turnTalkA6a: () =>
         SAVE.data.n.state_starton_papyrus === 1
            ? [
                 "<20>{#p/undyne}{#e/undyne/11}重重困難將我擊垮，\n每一步，都異常艱難。",
                 "<20>{#e/undyne/3}我哀嚎著，多麼希望\n有人能聽到我的心聲。"
              ]
            : [ "<20>{#p/undyne}{#e/undyne/20}Well... you're tough!" ],
      turnTalkA6b: () =>
         SAVE.data.n.state_starton_papyrus === 1
            ? [
                 "<20>{#p/undyne}{#e/undyne/11}重重困難將我擊垮，\n每一步，都異常艱難。",
                 "<20>{#e/undyne/3}我哀嚎著，多麼希望\n有人能聽到我的心聲。"
              ]
            : respecc()
            ? [ "<20>{#p/undyne}{#e/undyne/9}Come on!\nHit me already!", "<20>{#e/undyne/7}Don't just stand there!" ]
            : [
                 "<20>{#p/undyne}{#e/undyne/6}Mercy!\nHa!",
                 "<20>{#e/undyne/5}I still can't believe you want to SPARE me!"
              ],
      turnTalkA7a: () =>
         SAVE.data.n.state_starton_papyrus === 1
            ? [
                 "<20>{#p/undyne}{#e/undyne/4}突然，\n一個聲音從遠處傳來。",
                 "<20>{#e/undyne/3}一個天真無邪的聲音。"
              ]
            : respecc()
            ? [ "<20>{#p/undyne}{#e/undyne/0}Not that I expected anything less..." ]
            : [ "<20>{#p/undyne}{#e/undyne/0}But even if you could beat me..." ],
      turnTalkA7b: () =>
         SAVE.data.n.state_starton_papyrus === 1
            ? [
                 "<20>{#p/undyne}{#e/undyne/4}突然，\n一個聲音從遠處傳來。",
                 "<20>{#e/undyne/3}一個天真無邪的聲音。"
              ]
            : respecc()
            ? [ "<20>{#p/undyne}{#e/undyne/10}This isn't like you at all!" ]
            : [ "<20>{#p/undyne}{#e/undyne/3}But even if I DID spare you..." ],
      turnTalkB1: () =>
         SAVE.data.n.state_starton_papyrus === 1
            ? [
                 "<20>{#p/undyne}{#e/undyne/2}我四處求援，\n卻徒勞無功。",
                 "<20>{#e/undyne/3}突然，我聽到一個聲音\n呼喚著我的名字。"
              ]
            : respecc()
            ? [
                 "<20>{#p/undyne}{#e/undyne/3}You know...",
                 "<20>{#p/undyne}{#e/undyne/4}Even though we haven't escaped the outpost yet..."
              ]
            : [ "<20>{#p/undyne}{#e/undyne/3}Honestly, I'm doing you a favor..." ],
      turnTalkB2: () =>
         SAVE.data.n.state_starton_papyrus === 1
            ? [ "<20>{#p/undyne}{#e/undyne/2}那時，帕派瑞斯\n還只是個孩子。" ]
            : respecc()
            ? [ "<20>{#p/undyne}{#e/undyne/0}Getting to fight makes me FEEL like I'm already free!" ]
            : [ "<20>{#p/undyne}{#e/undyne/1}No human has EVER made it past ASGORE!" ],
      turnTalkB3: () =>
         SAVE.data.n.state_starton_papyrus === 1
            ? [ "<20>{#p/undyne}{#e/undyne/3}遇到危險，大多數小孩\n都會馬上逃跑...", "<20>{#e/undyne/4}但他不會。" ]
            : respecc()
            ? [ "<20>{#p/undyne}{#e/undyne/4}Just like that one anime Alphys showed me..." ]
            : [ "<20>{#p/undyne}{#e/undyne/4}Killing you now is an act of mercy..." ],
      turnTalkB4: () =>
         SAVE.data.n.state_starton_papyrus === 1
            ? [
                 "<20>{#p/undyne}{#e/undyne/2}他只在乎是不是\n有人正深陷危險...",
                 "<20>{#e/undyne/2}等著他-\n不，需要他出手相助。"
              ]
            : respecc()
            ? [
                 "<20>{#p/undyne}{#e/undyne/1}No matter how awful being trapped out here can be...",
                 "<20>{#e/undyne/0}It won't stop us from doing what we love!"
              ]
            : [ "<20>{#p/undyne}{#e/undyne/6}So STOP being so damn resilient!" ],
      turnTalkB5: () =>
         SAVE.data.n.state_starton_papyrus === 1
            ? [
                 "<20>{#p/undyne}{#e/undyne/4}他的天性如此。",
                 "<20>{#p/undyne}{#e/undyne/3}故事講完了。"
              ]
            : respecc()
            ? [
                 "<20>{#p/undyne}{#e/undyne/1}... but man, you really don't know when to quit!",
                 "<20>{#e/undyne/17}How'd you manage to get this strong!?"
              ]
            : [ "<20>{#p/undyne}{#e/undyne/5}What the hell are humans made out of!?" ],
      turnTalkB6: () =>
         SAVE.data.n.state_starton_papyrus === 1
            ? [
                 "<20>{#p/undyne}{#e/undyne/4}即便我擁有再大的膽識，\n再多的力量...",
                 "<20>{#e/undyne/11}也無法像他那樣，\n擁有純潔無瑕的心靈。"
              ]
            : respecc()
            ? [ "<20>{#p/undyne}{#e/undyne/5}Anyone else would've GIVEN UP by now!" ]
            : [ "<20>{#p/undyne}{#e/undyne/5}Anyone else would be DEAD by now!" ],
      turnTalkB7a: () =>
         SAVE.data.n.state_starton_papyrus === 1
            ? [
                 "<20>{#p/undyne}{#e/undyne/2}你殺死的，\n不僅是我的學生，\n我的摯友...",
                 "<20>{#e/undyne/2}更是能對極惡行徑\n既往不咎，寬恕你\n一切過錯的高尚之人。"
              ]
            : respecc()
            ? [ "<20>{#p/undyne}{#e/undyne/3}Then again, you've had time to train..." ]
            : [ "<20>{#p/undyne}{#e/undyne/7}Are you even listening to me!?" ],
      turnTalkB7b: () =>
         SAVE.data.n.state_starton_papyrus === 1
            ? [
                 "<20>{#p/undyne}{#e/undyne/2}你殺死的，\n不僅是我的學生，\n我的摯友...",
                 "<20>{#e/undyne/2}更是能對極惡行徑\n既往不咎，寬恕你\n一切過錯的高尚之人。"
              ]
            : respecc()
            ? [ "<20>{#p/undyne}{#e/undyne/3}Huh?\nDon't tell me you're ACTUALLY giving up..." ]
            : [ "<20>{#p/undyne}{#e/undyne/8}And sparing me won't do anything!!" ],
      turnTalkB8a: () =>
         SAVE.data.n.state_starton_papyrus === 1
            ? [
                 world.trueKills > 9
                    ? "<20>{#p/undyne}{#e/undyne/11}With him and so many others gone..."
                    : "<20>{#p/undyne}{#e/undyne/11}你斬碎了他的頭顱之時，\n也斬碎了僅存的仁慈。",
                 "<20>{#p/undyne}{#e/undyne/2}而我能給你的\n全部「仁慈」...",
                 "<20>{#p/undyne}{#e/undyne/1}就是讓你死得痛快點！"
              ]
            : respecc()
            ? [
                 "<20>{#p/undyne}{#e/undyne/18}All those other monsters you fought...",
                 "<20>{#p/undyne}{#e/undyne/1}THAT'S the source of your power!"
              ]
            : [ "<20>{#p/undyne}{#e/undyne/9}Come on!" ],
      turnTalkB8b: () =>
         SAVE.data.n.state_starton_papyrus === 1
            ? [
                 world.trueKills > 9
                    ? "<20>{#p/undyne}{#e/undyne/11}With him and so many others gone..."
                    : "<20>{#p/undyne}{#e/undyne/11}你斬碎了他的頭顱之時，\n也斬碎了僅存的仁慈。",
                 "<20>{#p/undyne}{#e/undyne/2}而我能給你的\n全部「仁慈」...",
                 "<20>{#p/undyne}{#e/undyne/1}就是讓你死得痛快點！"
              ]
            : respecc()
            ? [ "<20>{#p/undyne}{#e/undyne/5}Come on, I'm GIVING you an opening here!" ]
            : [ "<20>{#p/undyne}{#e/undyne/1}Seriously." ],
      turnTalkC1: () =>
         SAVE.data.n.state_starton_papyrus === 1
            ? [
                 "<20>{#p/undyne}{#e/undyne/11}You know, punk...",
                 "<20>{#p/undyne}{#e/undyne/2}It's rude to interrupt people when they're monologuing.",
                 ...(world.trueKills > 9
                    ? [
                         "<20>{#p/undyne}{#e/undyne/11}...\nYou're going to pay for what you did to him...",
                         "<20>{#p/undyne}{#e/undyne/2}... and all the other monsters you've slaughtered."
                      ]
                    : [ "<20>{#p/undyne}{#e/undyne/2}...\nYou're going to pay for what you did to him." ])
              ]
            : [
                 "<20>{#p/undyne}{#e/undyne/17}Keep a close eye on my attacks, and maybe...",
                 "<20>{#p/undyne}{#e/undyne/5}... you'll be smart enough to know when to let 'em through!"
              ],
      turnTalkC2: () =>
         SAVE.data.n.state_starton_papyrus === 1
            ? [
                 "<20>{#p/undyne}{#e/undyne/2}艾菲斯告訴過我，\n人類充滿了決心...",
                 "<20>{#p/undyne}{#e/undyne/1}呵呵，你那點破決心，\n也就只能送你到這了。"
              ]
            : respecc()
            ? [
                 "<20>{#p/undyne}{#e/undyne/1}Still going!?",
                 "<20>{#p/undyne}{#e/undyne/17}Ha...\nAlphys told me humans can be determined..."
              ]
            : [
                 "<20>{#p/undyne}{#e/undyne/1}Alphys told me humans can be determined...",
                 "<20>{#p/undyne}{#e/undyne/1}I see now what she meant by that!"
              ],
      turnTalkC3: () =>
         SAVE.data.n.state_starton_papyrus === 1 || respecc()
            ? [ "<20>{#p/undyne}{#e/undyne/1}但是，你知道嗎？", "<20>{#e/undyne/1}我也充滿了決心！" ]
            : [ "<20>{#p/undyne}{#e/undyne/1}But I'm determined, too!" ],
      turnTalkC4: () =>
         respecc()
            ? [ "<20>{#p/undyne}{#e/undyne/5}Determined to show you who's BOSS!" ]
            : [ "<20>{#p/undyne}{#e/undyne/6}此時此地，\n幹掉你的決心！" ],
      turnTalkC5: () =>
         respecc() ? [ "<20>{#p/undyne}{#e/undyne/9}... WHO'S BOSS!" ] : [ "<20>{#p/undyne}{#e/undyne/7}...幹掉你！" ],
      turnTalkC6: () =>
         respecc()
            ? [ "<20>{#p/undyne}{#e/undyne/10}... WHO'S...\n...\n... BOSS!!" ]
            : [ "<20>{#p/undyne}{#e/undyne/9}...幹掉...\n你..." ],
      turnTalkC7: [ "<20>{#p/undyne}{#e/undyne/10}呼...\n呼..." ],
      turnTalkC8: () =>
         respecc()
            ? [ "<20>{#p/undyne}{#e/undyne/5}NGAHHH!!!\nFINAL ATTACK!!!" ]
            : [ "<20>{#p/undyne}{#e/undyne/5}哈啊啊啊啊！！！\n你個小屁孩，\n快給我去死啊！" ],
      turnTalkC9a: [ "<20>{#p/undyne}{#e/undyne/5}真礙事！" ],
      turnTalkC9b: [ "<20>{#p/undyne}{#e/undyne/5}I WILL NEVER TAKE MERCY FROM THE LIKES OF YOU!" ],
      turnTalkC10a: [ "<20>{#p/undyne}{#e/undyne/6}別想打敗我！" ],
      turnTalkC10b: [ "<20>{#p/undyne}{#e/undyne/6}I WILL FIGHT YOU TO THE BITTER END!" ],
      turnTalkD: [ "<20>{#p/undyne}{#e/undyne/9}..." ],
      respeccTalk1: [
         "<20>{#p/undyne}{#e/undyne/11}\x00*huff...*\n\x00*huff...*",
         "<20>{#e/undyne/3}...",
         "<20>{#e/undyne/4}Well...",
         "<20>{#e/undyne/17}You're certainly tough, aren't you?"
      ],
      respeccTalk2: [
         "<20>{#e/undyne/0}... heh, enough to beat me, anyway.",
         "<20>{#e/undyne/13}But hey, that's pretty freaking tough!",
         "<20>{#e/undyne/1}Even though not everyone's gonna like you for it...",
         "<20>{#e/undyne/0}Seeing a human fight with honor gives me hope for your kind.",
         "<20>{#e/undyne/4}...",
         "<20>{#e/undyne/3}It's a shame we can't do battle forever, huh?"
      ],
      respeccTalk3: [
         "<20>{#e/undyne/1}Just... whatever you do, whoever you fight with...",
         "<20>{#e/undyne/1}Don't let it change who you are, got it?",
         "<20>{#e/undyne/3}...",
         "<20>{#e/undyne/4}Until next time...",
         "<20>{#e/undyne/4}Warrior."
      ],
      death1: () =>
         respecc()
            ? [
                 "<20>{#p/undyne}哈啊...",
                 "<21>I thought...\nYou were different...",
                 "<20>But then...\n... you actually...\n... urgh...",
                 "<20>..."
              ]
            : [
                 "<20>{#p/undyne}哈啊...",
                 "<20>我沒想到...\n你... 居然這麼強...",
                 "<20>看來...\n這裡...\n...就是我的葬身之地...",
                 "<20>..."
              ],
      death2: () =>
         helmetdyneAttack() ? [ "<20>{#p/undyne}{#e/undyne/31}..." ] : [ "<20>{#p/undyne}{#e/undyne/31}不..." ],
      death3: () =>
         helmetdyneAttack()
            ? [ "<20>{#p/undyne}{#e/undyne/46}... no.", "<20>{#e/undyne/43}Not yet." ]
            : [
                 "<20>{#p/undyne}{#e/undyne/32}不！",
                 "<20>我不能死！",
                 ...(respecc()
                    ? [ "<20>This betrayal...\nThis... dishonor...", "<20>I won't let you get away with it!" ]
                    : [
                         SAVE.data.n.state_starton_papyrus === 1
                            ? "<20>{#e/undyne/36}艾菲斯...\n艾斯戈爾..."
                            : "<20>{#e/undyne/36}艾菲斯...\n艾斯戈爾...\n帕派瑞斯...",
                         "<20>{#e/undyne/32}大家，都需要我來守護！"
                      ]),
                 "<20>{#e/undyne/32}哈啊啊啊！！"
              ],
      death4: () =>
         helmetdyneAttack()
            ? [ "<20>{#e/undyne/45}Not while you're still breathing." ]
            : [
                 "<20>{#p/undyne}{#e/undyne/32}人類！",
                 respecc()
                    ? "<20>{#e/undyne/36}In the name of a good and fair fight..."
                    : "<20>{#e/undyne/36}以希望與夢想起誓...",
                 "<20>{#e/undyne/32}我定會擊敗你！"
              ],
      determination1: () =>
         helmetdyneAttack() ? [] : [ "<20>{#p/undyne}{#e/undyne/32}來啊，\n你就這點能耐嗎？" ],
      determination2: () => (helmetdyneAttack() ? [] : [ "<20>{#p/undyne}{#e/undyne/32}...真是可悲。" ]),
      determination3: () =>
         helmetdyneAttack() ? [] : [ "<20>{#p/undyne}{#e/undyne/32}就你那點力氣，\n還想打敗我？" ],
      determination4: () =>
         helmetdyneAttack()
            ? []
            : respecc()
            ? [ "<20>{#p/undyne}{#e/undyne/34}W-where's your fighting spirit now, huh?" ]
            : [ "<20>{#p/undyne}{#e/undyne/34}當我們相信自己時，\n爆發出的力量有多強，\n你見-見識到了吧？" ],
      determination5: () =>
         helmetdyneAttack() ? [] : [ "<20>{#p/undyne}{#e/undyne/35}呵... \n呵呵...", "<20>{#e/undyne/34}鬧夠了沒有？" ],
      determination6: () => (helmetdyneAttack() ? [] : [ "<20>{#p/undyne}{#e/undyne/34}..." ]),
      determination7: () =>
         helmetdyneAttack() ? [] : [ "<20>{#p/undyne}{#e/undyne/35}...我不能...\n...\n放棄..." ],
      determination8: () => (helmetdyneAttack() ? [] : [ "<20>{#p/undyne}{#e/undyne/34}..." ]),
      death5: () => [
         helmetdyneAttack() ? "<20>{#p/undyne}{#e/undyne/43}..." : "<20>{#p/undyne}{#e/undyne/34}...",
         "<20>{#p/undyne}{#e/undyne/47}哈...\n哈...",
         "<20>{#e/undyne/44}...\n艾菲斯...",
         "<20>知道為什麼\n我一直沒對你說...",
         "<20>{#e/undyne/49}因為我怕...",
         "<20>..."
      ],
      death6: () => [
         "<20>{#p/undyne}{#e/undyne/44}不...\n不！",
         "<20>{#e/undyne/34}還沒完！",
         "<20>{#e/undyne/48}我不能死！"
      ],
      death7: [ "<20>{*}{#p/undyne}{#i/4}{@random=1.1/1.1}哈啊啊啊啊！！！{^10}{%}" ],
      death8a: [ "<20>{*}{#p/undyne}{#i/5}{#v/1}{@random=1.1/1.1}我不能死！{^15}{%}" ],
      death8b: [ "<20>{*}{#p/undyne}{#i/5}{#v/2}{@random=1.1/1.1}我不能死！{^15}{%}" ],
      death8c: [ "<20>{*}{#p/undyne}{#i/6}{#v/3}{@random=1.1/1.1}我不能死！{^15}{%}" ],
      death9: [ "<20>{*}{#p/undyne}{#i/8}{#v/4}{@random=1.1/1.1}我{^10}不{^10}能{^30}{%}" ],
      deterStatus1: [ "<32>{#p/story}* 安黛因笑著，強裝自己沒事。" ],
      deterStatus2: [ "<32>{#p/story}* 安黛因的身體正一點一點融化。" ],
      deterStatus3: [ "<32>{#p/story}* 安黛因的身體已經化得\n  看不出形狀了。" ],
      deterStatus4: [ "<32>{#p/story}* 安黛因深吸了一口氣。" ],
      deterStatus5: [ "<32>{#p/story}* 安黛因閉上了眼睛。" ],
      challengeText1: [ "<32>{#p/human}* (You tell Undyne her attacks are too easy.)\n* (She doesn't care.)" ],
      challengeText2: [
         "<32>{#p/human}* (You tell Undyne her attacks are too easy.)",
         "<32>{#p/basic}* The bullets get faster."
      ],
      challengeText3: [
         "<32>{#p/human}* (You tell Undyne her attacks are too easy.)",
         "<32>{#p/basic}* The bullets get ridiculous."
      ],
      challengeText4: [ "<32>{#p/human}* （你告訴安黛因，\n  你想來一場真正的對決。）" ],
      challengeText5: [
         "<32>{#p/human}* (You tell Undyne her attacks are too easy.)",
         "<32>{#p/basic}* Undyne can't go any faster."
      ],
      challengeText7: [ "<32>{#p/human}* (You tell Undyne her attacks are too easy.)\n* (She's not paying attention.)" ],
      pleadText1: [ "<32>{#p/human}* (You tell Undyne you didn't want to fight.)\n* (Nothing happens.)" ],
      pleadText2: [
         "<32>{#p/human}* (You tell Undyne you just want to be friends.)",
         "<32>{#p/basic}* Undyne remembers someone.\n* The bullets get a little less extreme."
      ],
      pleadText3: [ "<32>{#p/human}* (You tell Undyne you just want to be friends.)\n* (She doesn't believe you.)" ],
      pleadText4: [ "<32>{#p/human}* (You tell Undyne you didn't want to fight.)\n* (She laughs.)" ],
      pleadText5: [ "<32>{#p/human}* (You tell Undyne you didn't want to fight.)\n* (She looks confused.)" ],
      pleadText6: [ "<32>{#p/human}* (You tell Undyne you didn't want to fight.)\n* (She's not paying attention.)" ],
      pleadText7a: [
         "<32>{#p/human}* (You tell Undyne you just want to be friends.)",
         "<32>{#p/basic}* Undyne agrees.\n* The bullets get a little more extreme."
      ],
      pleadText7b: [
         "<32>{#p/human}* (You tell Undyne you just want to be friends.)",
         "<32>{#p/basic}* Undyne agrees.\n* But the bullets can't get any faster."
      ],
      pleadText7c: [
         "<32>{#p/human}* (You tell Undyne you just want to be friends.)",
         "<32>{#p/basic}* Undyne agrees.\n* The bullets are getting out of control."
      ],
      pleadText8: [ "<32>{#p/human}* (You tell Undyne you didn't want to fight.)\n* She glares at you coldly." ],
      genoCutscene1: [ "<08>{#p/kidding}{#e/kidd/0}...", "<08>{#e/kidd/1}呃... 嗯？", "<08>{|}{#e/kidd/1}What is- {%}" ],
      genoCutscene2: [ "<08>{#p/kidding}{#e/kidd/3}安黛因！！！", "<08>{#e/kidd/4}我...！" ],
      genoCutscene3: [ "<20>{#p/undyne}{#e/undyne/1}小子...？" ],
      genoCutscene3x: [
         "<20>{#p/undyne}{#e/undyne/4}嘿，不用說什麼...",
         "<20>{#e/kidd/7}小子，我沒事。",
         "<20>{#p/undyne}趕緊逃吧，好嗎？"
      ],
      genoCutscene4: [
         "<08>{#p/kidding}{#e/kidd/5}我控制\n不了\n自己...",
         "<08>{#e/kidd/6}他們... 他...",
         "<08>{#e/kidd/7}不知道他\n對我\n做了什麼..."
      ],
      genoCutscene5: [ "<20>{#p/undyne}{#e/undyne/2}你的眼睛..." ],
      genoCutscene6: [ "<08>{#p/kidding}{#e/kidd/6}我...", "<08>{#p/kidding}{#e/kidd/6}我..." ],
      genoCutscene7: [ "<08>{#p/kidding}{#e/kidd/7}我\n打傷你了..." ],
      genoCutscene8: [ "<20>{#p/undyne}{#e/undyne/3}小傷，沒什麼大不了的..." ],
      genoCutscene9: [
         "<20>{#e/undyne/4}聽著，我會幹翻這些混蛋。",
         "<20>你不用聽他們使喚了。",
         "<20>趕緊逃吧，好嗎？"
      ],
      genoCutscene10: [ "<08>{#e/kidd/8}{#p/kidding}..." ],
      genoCutscene11: [ "<20>{#p/undyne}{#e/undyne/5}艾菲斯博士會照顧好你的。", "<20>{#e/undyne/6}逃啊！" ],
      genoCutscene12a: [
         "<20>{#p/undyne}{#e/undyne/7}...呵...\n「沒什麼大不了的...」",
         "<20>...才怪。不知怎麼，\n只是那麼一擊..."
      ],
      genoCutscene12b: [ "<20>我就...", "<20>就..." ],
      genoCutscene12c: [ "<20>該...\n該死...", "<20>帕派瑞斯...\n艾斯戈爾...\n艾菲斯..." ],
      genoCutscene12d: [ "<20>我就這樣...", "<20>{#e/undyne/8}讓你們失望了。" ],
      genoCutscene12e: [ "<20>我...", "{#e/undyne/8}我不能..." ],
      genoCutscene13: [ "<20>{#p/undyne}...", "<11>{#e/undyne/12}不..." ],
      genoCutscene14: [
         "<20>{*}{#p/undyne}{#e/undyne/11}我的身體...\n感覺要四分五裂了。{^15}{%15}",
         "<20>{*}好像隨時...\n都可能粉身碎骨。{^15}{%15}",
         "<20>{*}但從我的靈魂深處...{^15}{%15}",
         "<20>{*}燃燒起了一股\n無法表述的感覺。{^15}{%15}",
         "<20>{*}{#e/undyne/12}那燃起的炙熱\n不允許我死去。{^15}{%15}",
         "<20>{*}{#e/undyne/11}那麼多人民...\n那麼多摯友...\n都慘死在暴行之下...{^15}{%15}",
         "<20>{*}過了我這關，\n你們會毀掉一切...{^15}{%15}",
         "<20>{*}大夥的希望，\n大夥的夢想，\n頃刻間就會化為烏有。{^15}{%15}",
         "<20>{*}{#e/undyne/12}我不會讓你們\n如願以償的。{^15}{%15}",
         "<20>{*}{#e/undyne/13}此時此刻，這星河裡的每個人...{^15}{%15}",
         "<20>{*}I can feel their minds working as one.{^15}{%15}",
         "<20>{*}我們都有一個\n共同的目標。{^15}{%15}",
         "<20>{*}{#e/undyne/14}那就是戰勝你。{^15}{%15}",
         "<20>{*}{#e/undyne/13}人類。艾斯利爾。\n...不，不管你們是誰。{^15}{%15}",
         "<20>{*}{#e/undyne/14}為了讓這星河存續下去...{^15}{%15}",
         "<20>{*}{#e/undyne/15}{@random=1.1/1.1}我，安黛因，\n會將你們徹底擊垮！{^15}{%15}"
      ],
      genoCutscene14x: [
         "<20>{#e/undyne/11}不...",
         "<20>{#e/undyne/12}不能就這麼結束...！",
         "<20>{#e/undyne/13}Everyone in the galaxy is counting on me!",
         "<20>{#e/undyne/14}我不能讓他們失望！"
      ],
      genoCutscene15: [ "<20>{*}{#p/undyne}{#v/1}你們還得再加把勁。{%20}" ],
      genoCutscene15x: [ "<20>{#p/undyne}{#v/1}你們還得再加把勁！{%20}" ],
      genoDeath1: [
         "<20>{#p/undyne}{#v/1}Damn it...",
         "<20>So even THAT power...\nIt wasn't enough...?",
         "<20>...",
         "<20>{#e/undyne/25}Heh...",
         "<20>Heheheh..."
      ],
      genoDeath2: [
         "<20>{*}{#e/undyne/26}If you...{^60}{%}",
         "<20>{*}If you think I'm gonna give up hope, you're wrong.{^60}{%}",
         "<20>{*}{#e/undyne/27}'Cause I've... got my friends behind me.{^60}{%}",
         "<20>{*}{#e/undyne/28}Alphys told me she had a backup plan in case I failed...{^60}{%}",
         "<20>{*}{#e/undyne/29}By now, she's called Asgore and told him to absorb the six human SOULs.{^60}{%}"
      ],
      genoDeath3: [ "<20>{*}{#p/undyne}{#v/1}{#e/undyne/30}{@random=1.1/1.1}And with that power...{^60}{%}" ],
      genoDeath4: [ "<20>{*}{#p/undyne}{#v/1}{#e/undyne/30}{@random=1.1/1.1}This world will live on...!{^60}{%}" ],
      lowStatus1: [ "<32>{#p/story}* The starlight is glimmering..." ],
      lowStatus2: [ "<32>{#p/story}* Undyne flips her spear impatiently." ],
      lowStatus3: [ "<32>{#p/story}* Twinkling shards drift in front of you." ],
      lowStatus4: [ "<32>{#p/story}* Steam whirls around you." ],
      lowStatus5: [ "<32>{#p/story}* 有一瞬，長矛的攻勢停了下來。" ],
      genoStatus1: [ "<32>{#p/asriel2}* 怎麼會..." ],
      genoStatus2: [ "<32>{#p/asriel2}* 不..." ],
      genoStatus3: [ "<32>{#p/asriel2}* 遊歷了這麼多條時間軸，\n  我也從沒見過她..." ],
      genoStatus4: [ "<32>{#p/asriel2}* $(name)，光靠你打不過她。" ],
      genoStatus5: [ "<32>{#p/asriel2}* ..." ],
      trueGenoStatusX: () =>
         battler.volatile[0].vars.azzyAssist < 2
            ? [ "<32>{#p/asriel2}* Let's see how she likes THIS." ]
            : [ "<32>{#p/asriel2}* 別忘了我們的戰術。" ],
      trueGenoStatus1: [ "<32>{#p/asriel2}* 別走神了。" ],
      trueGenoStatus2: [ "<32>{#p/asriel2}* 可別讓她唬到你了。" ],
      trueGenoStatus3: [ "<32>{#p/asriel2}* 繼續攻擊就好..." ],
      trueGenoStatus4: [ "<32>{#p/asriel2}* 她早晚會撐不住的。" ],
      trueGenoStatus5: [ "<32>{#p/asriel2}* 勝利終將屬於我們。" ],
      trueGenoStatusLow1: [ "<32>{#p/asriel2}* Almost dead...!" ],
      trueGenoStatusLow2: [ "<32>{#p/asriel2}* ...搞什麼！" ],
      asrielExplain: () => [
         ...(battler.volatile[0].vars.azzyAssist < 2
            ? [ "<20>{#p/asriel2}{#f/4}$(name)，\n你的攻擊傷不到她。" ]
            : [
                 "<20>{#p/asriel2}{#f/8}上回交鋒，\n你沒能傷到她。",
                 "<20>{#f/4}$(name)，\n你肯定沒忘吧？",
                 "<20>{#f/3}Between then and now, though, I had a chance to think."
              ]),
         "<20>{#f/13}雖說這幅身體...\n還沒完全接納我。",
         "<20>{#f/16}但我想幫你，\n這幅身體應該夠用。",
         "<20>{#f/3}接下來，你先進攻，\n我則會用法術找出\n安黛因盔甲的破綻。",
         "<20>{#f/4}你要瞄準它們，\n並逐一突破。",
         "<20>{#f/3}祝好運..."
      ],
      neutralFinalStatus: [ "<32>{#p/story}* 安黛因充滿了決心。" ]
   },
   b_opponent_dateundyne: {
      name: "* 安黛因",
      snacker: () =>
         SAVE.data.b.undyne_respecc
            ? [ "<20>{#p/undyne}{#e/undyne/13}Hope you like it, fuhuhu!" ]
            : [ "<20>{#p/undyne}{#e/undyne/12}Enjoy it while you still can." ],
      intro: () =>
         SAVE.data.b.undyne_respecc
            ? [
                 "<20>{#p/undyne}{#f/0}... so this is it.",
                 "<20>Our final battle.",
                 "<20>...",
                 "<20>{#e/undyne/12}Warrior to warrior.",
                 "<20>Across the sky of stars.",
                 "<20>I challenge you to a duel...",
                 "<20>{#e/undyne/9}For the honor of EVERYONE ON THE OUTPOST!!",
                 "<20>{#e/undyne/7}IT'S THE ONLY WAY I CAN SETTLE THE SCORE BETWEEN US!!",
                 "<20>{#e/undyne/9}SO COME ON, HIT ME WITH EVERYTHING YOU'VE GOT!!!\nNGAHHHH!!!"
              ]
            : [
                 "<20>{#p/undyne}{#f/0}I've been defeated, my house is in ruins...",
                 "<20>I even failed to befriend you.",
                 "<20>...",
                 "<20>{#e/undyne/12}That's it.",
                 "<20>I don't care if you're my house- guest anymore.",
                 "<20>{#e/undyne/9}One final rematch, all out on both sides!!",
                 "<20>{#e/undyne/7}IT'S THE ONLY WAY I CAN REGAIN MY LOST PRIDE!!",
                 "<20>{#e/undyne/9}NOW COME ON, HIT ME WITH EVERYTHING YOU'VE GOT!!!\nNGAHHHH!!!"
              ],
      status1: [ "<32>{#p/story}* Undyne is letting you make the first attack." ],
      act_check: [ "<32>{#p/story}* UNDYNE - ATK 41 DEF 21\n* The real, ACTUAL final battle has finally begun!" ],
      idleTalk1: [ "<20>{#p/undyne}{#e/undyne/9}Show me what you're made of!" ],
      idleTalk2: [ "<20>{#p/undyne}{#e/undyne/9}Come on!" ],
      idleTalk3: [ "<20>{#p/undyne}{#e/undyne/9}What's the matter, scared?" ],
      idleTalk4: [ "<20>{#p/undyne}{#e/undyne/9}What's the holdup?" ],
      fightTalk: (stronk: boolean) =>
         SAVE.data.b.undyne_respecc
            ? [
                 "<20>{#p/undyne}{#e/undyne/19}Ouch.",
                 "<20>{#e/undyne/19}That actually kind of hurt.",
                 "<20>{#e/undyne/4}Heh...",
                 "<20>{#e/undyne/3}I guess that's what I get for under- estimating my opponent.",
                 "<20>{#e/undyne/0}Though, I'm not sure why I'm so surprised.",
                 "<20>{#e/undyne/1}Given your battle style to date."
              ]
            : [
                 "<20>{#p/undyne}{#e/undyne/16}What.",
                 "<20>{#e/undyne/15}That's the best you can manage...?",
                 ...(SAVE.data.b.oops
                    ? [
                         "<20>{#e/undyne/3}Even attacking at full force...",
                         stronk
                            ? "<20>{#e/undyne/33}You can't give me more than a scratch, huh?"
                            : "<20>{#e/undyne/33}You just can't muster any intent to hurt me, huh?"
                      ]
                    : [ "<20>{#e/undyne/17}You didn't even land the hit on me!", "<20>{#e/undyne/17}..." ])
              ],
      flirtTalk0: [
         "<20>{#p/undyne}{#e/undyne/12}When I told you to hit me...",
         "<20>{#e/undyne/9}I MEANT IT LITERALLY!"
      ],
      flirtTalk1: [
         "<20>{#p/undyne}{#e/undyne/6}Wh-... no!",
         "<20>{#e/undyne/8}If anyone's got someone's heart, it's...",
         "<20>{#e/undyne/5}Wait, no-\nShut up!!!"
      ],
      flirtTalk2: [
         "<20>{#p/undyne}{#e/undyne/10}Would you STOP THAT!?",
         "<20>{#e/undyne/15}If you keep going like this, I'll...",
         "<20>{#e/undyne/16}I'll..."
      ],
      flirtTalk3: [
         "<20>{#p/undyne}{#p/undyne}{#e/undyne/18}Wha-...\nI...!",
         "<20>{#e/undyne/19}...",
         "<20>{#e/undyne/10}AHHHHHHHHHHHHHH-\nYOU FLIRTATIOUS LITTLE BRAT!",
         "<20>{#e/undyne/8}I HAVE HALF THE NERVE TO...",
         "<20>{#e/undyne/7}TO...",
         "<20>{#e/undyne/7}..."
      ],
      flirtStatus0: [ "<33>{#p/story}* In this case, FIGHTING might not be such a bad idea." ],
      flirtStatus1: [ "<33>{#p/story}* Something magical is happening." ],
      flirtStatus2: [ "<32>{#p/story}* Undyne is at her limit." ],
      flirtText0: [ "<32>{#p/human}* (You flirt with Undyne.)" ],
      flirtText1: [ "<32>{#p/human}* (You tell Undyne she's got your heart hook, line, and sinker.)" ],
      flirtText2: [ "<32>{#p/human}* (You commend Undyne on her brave, fighting spirit.)\n* (She's YOUR hero, now.)" ],
      flirtText3: [ "<32>{#p/human}* (You tell Undyne she's a precious, adorable little urchin.)" ],
      cutscene1: [ "<20>{#p/undyne}{#e/undyne/4}Heh... you know what?" ],
      cutscene2: (fought: boolean) => [
         ...(SAVE.data.b.undyne_respecc
            ? [
                 "<20>{#e/undyne/11}I don't really want to hurt you.",
                 "<20>{#e/undyne/11}At first, I was excited by the prospect of fighting you..."
              ]
            : [
                 "<20>{#e/undyne/11}I don't actually want to hurt you either.",
                 "<20>{#e/undyne/11}At first, I despised your stupid saccharine schtick, but..."
              ]),
         ...(fought
            ? SAVE.data.b.undyne_respecc
               ? [ "<20>{#e/undyne/3}But seeing you go along with me right now, it..." ]
               : [ "<20>{#e/undyne/3}The way you hit me right now, it..." ]
            : SAVE.data.b.undyne_respecc
            ? [ "<20>{#e/undyne/3}But seeing you act that way towards me right now, it..." ]
            : [ "<20>{#e/undyne/3}The way you acted towards me right now, it..." ]),
         "<20>{#e/undyne/4}Reminded me of someone I used to train with.",
         ...(SAVE.data.b.undyne_respecc
            ? [
                 "<20>{#e/undyne/11}You may not be a wimpy loser like him.",
                 "<20>{#e/undyne/11}But one thing you have in common...",
                 "<20>{#e/undyne/1}Is a sense of respect for what it means to fight."
              ]
            : [
                 "<20>{#e/undyne/11}Now I know you aren't just some wimpy loser.",
                 "<20>{#e/undyne/13}You're a wimpy loser with a big heart!",
                 "<20>{#e/undyne/4}Just like him..."
              ]),
         "<20>{#e/undyne/3}...",
         "<20>{#e/undyne/3}Listen, human.",
         "<20>{#f/undyne/0}It seems that you and Asgore are destined to meet.",
         SAVE.data.b.undyne_respecc ? "<20>{#e/undyne/3}Unlike you..." : "<20>{#e/undyne/3}Knowing him...",
         "<20>{#e/undyne/4}He probably doesn't want to fight you.",
         ...(SAVE.data.b.undyne_respecc
            ? [
                 "<20>{#e/undyne/0}Talk to him, if you can.",
                 "<20>{#e/undyne/0}Tell him what you want upfront.",
                 "<20>{#e/undyne/3}I get that might be a little weird for you, but...",
                 "<20>{#e/undyne/4}I'm sure you two can work something out.",
                 "<20>{#e/undyne/0}And as for our freedom?",
                 "<20>{#e/undyne/1}Well.",
                 "<20>{#e/undyne/3}If some other, less respectable human ends up here...",
                 "<20>{#e/undyne/3}I'll take THEIR soul instead of yours."
              ]
            : [
                 "<20>{#f/undyne/0}Talk to him.",
                 "<20>{#f/undyne/1}I'm sure you two can work something out.",
                 "<20>{#e/undyne/3}Eventually, some meaner human will end up here...",
                 "<20>{#e/undyne/3}And I'll take THEIR soul instead of yours."
              ]),
         "<20>{#f/undyne/1}That makes sense, right?\nFuhuhu.",
         "<20>{#f/undyne/0}Oh, and if you DO hurt Asgore...",
         "<20>{#e/undyne/11}I'll take the human SOULs... cross the force field...",
         ...(SAVE.data.b.undyne_respecc
            ? [ "<20>{#e/undyne/8}And give you a REAL battle!", "<20>{#e/undyne/13}That's what warriors do, right?" ]
            : [
                 "<20>{#e/undyne/8}And beat the hell out of you!",
                 "<20>{#e/undyne/13}That's what friends are for, right?"
              ]),
         "<20>{#e/undyne/13}Fuhuhu!",
         "<20>{#e/undyne/13}Now let's get the hell out of this flaming house!"
      ]
   },

   i_artifact: {
      battle: {
         description: "It is said this pendant was worn by Erogot himself.",
         name: "神器"
      },
      drop: () => [
         "<32>{#p/human}* (You threw away the Legendary Artifact.)",
         ...(!SAVE.data.b.svr && game.room === 's_secret' && SAVE.data.n.state_starton_trashprogress < 2 // NO-TRANSLATE

            ? SAVE.data.b.s_state_papsink
               ? [ "<32>{#p/basic}* The dog dances even harder!" ]
               : [ "<32>{#p/basic}* ... the dog's sighing quiets down, even if you can't tell." ]
            : [])
      ],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? [ "<32>{#p/human}* (Inscribed with the signature of a former world leader.)" ]
            : [ "<32>{#p/basic}* It is said this pendant was worn by Erogot himself." ],
      name: "神器",
      use: () => [
         "<32>{#p/human}* (You use the Legendary Artifact.)",
         ...((battler.active && battler.targetCurrent?.opponent.metadata.reactArtifact) ||
         (game.room === 'f_truth' && // NO-TRANSLATE

            SAVE.data.n.epiphany < 1 &&
            !SAVE.data.b.svr &&
            !world.runaway)
            ? []
            : !SAVE.data.b.svr && game.room === 's_secret' && SAVE.data.n.state_starton_trashprogress < 2 // NO-TRANSLATE

            ? SAVE.data.b.s_state_papsink
               ? [ "<32>{#p/basic}* ... the dog's dancing slows down, even if you can't tell." ]
               : [ "<32>{#p/basic}* The dog sighs even louder!" ]
            : [ "<32>{#p/human}* (Nothing happens.)" ])
      ]
   },
   i_epiphany: {
      battle: {
         description: "Makes the weak-willed see things from your point of view.",
         name: "頓悟"
      },
      drop: [ "<32>{#p/human}* (You cast The Epiphany away.)" ],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? [ "<32>{#p/human}* (A tome from centuries past, used first by a former world leader.)" ]
            : [
                 "<33>{#p/basic}* Makes the weak-willed see things from your point of view.\n* Not viable outside of battle."
              ],
      name: "頓悟",
      use: () =>
         battler.active
            ? []
            : SAVE.data.b.ufokinwotm8
            ? [
                 "<32>{#p/human}* (You activated The Epiphany on yourself, with the intent to hug.)",
                 "<32>{#p/human}* (No effect.)"
              ]
            : SAVE.data.b.svr
            ? [
                 "<32>{#p/human}* (You read through the ancient text of the tome.)",
                 "<33>* (The text appears to be self- translating.)"
              ]
            : [ "<32>{#p/human}* (You activated The Epiphany.)", "<32>{#p/human}* (No effect outside of battle.)" ]
   },
   i_astrofood: {
      battle: {
         description: "牙口不好的別吃。",
         name: "甘草糖"
      },
      drop: [ "<32>{#p/human}* （你把甘草糖扔掉了。）" ],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? [ "<32>{#p/human}* (24 HP.)" ]
            : [ "<32>{#p/basic}* 「甘草糖」 回復24 HP\n* 牙口不好的別吃。" ],
      name: "甘草糖",
      use: [ "<32>{#p/human}* (You gnawed at the Licorice.)" ]
   },
   i_sap: {
      battle: {
         description: "Sourced from a tree that grew on the monsters' homeworld.",
         name: "Sap"
      },
      drop: [ "<32>{#p/human}* (You throw away the Tree Sap.)" ],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? [ "<32>{#p/human}* (35 HP.)" ]
            : [ "<32>{#p/basic}* \"Tree Sap\" Heals 35 HP\n* Sourced from a tree that grew on the monsters' homeworld." ],
      name: "Tree Sap",
      use: [ "<32>{#p/human}* (You chewed the Tree Sap.)" ]
   },
   i_goggles: {
      battle: {
         description: "Expand your reality!\nMakes you invincible longer.",
         name: "AR眼鏡"
      },
      drop: [ "<32>{#p/human}* （你把AR眼鏡扔掉了。）" ],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? [ "<32>{#p/human}* (6 DF.)" ]
            : [ "<32>{#p/basic}* 「AR眼鏡」 （6防禦）\n* 超越現實！\n  能為你提供更長的喘息時間。" ],
      name: "AR眼鏡",
      use: [ "<32>{#p/human}* （你戴上了AR眼鏡。）" ]
   },
   i_goggles_x: {
      battle: {
         description: "Makes you invincible just a little longer.",
         name: "AR眼鏡？"
      },
      drop: [ "<32>{#p/human}* （你把AR眼鏡扔掉了。）" ],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? [ "<32>{#p/human}* (4 DF.)" ]
            : [ "<32>{#p/basic}* 「AR眼鏡？」 （4防禦）\n* 超越現實！\n  能為你提供稍長的喘息時間。" ],
      name: "AR眼鏡？",
      use: [ "<32>{#p/human}* （你戴上了AR眼鏡。）" ]
   },
   i_padd: {
      battle: {
         description: "A digital journal.\nMakes you invincible longer.",
         name: "Datapad"
      },
      drop: [ "<32>{#p/human}* (You throw away the Datapad.)" ],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? [ "<32>{#p/human}* (2 AT.)" ]
            : [ "<32>{#p/basic}* \"Datapad\" (2 AT)\n* A digital journal.\n* Makes you invincible longer." ],
      name: "Datapad",
      use: [ "<32>{#p/human}* (You equip the Datapad.)" ]
   },
   i_padd_x: {
      battle: {
         description: "Makes you invincible just a little longer.",
         name: "Datapad?"
      },
      drop: [ "<32>{#p/human}* (You throw away the Datapad.)" ],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? [ "<32>{#p/human}* (0 AT.)" ]
            : [ "<32>{#p/basic}* \"Datapad?\" (0 AT)\n* Makes you invincible just a little longer." ],
      name: "Datapad?",
      use: [ "<32>{#p/human}* (You equip the Datapad.)" ]
   },
   i_punchcard: {
      battle: {
         description: "A picturesque landscape...",
         name: "明信片"
      },
      drop: [ "<32>{#p/human}* （你把明信片扔掉了。）" ],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? [ "<32>{#p/human}* (A perfectly ordinary piece of paper, with no notable attributes.)" ]
            : [ "<32>{#p/basic}* A picturesque landscape..." ],
      name: "明信片",
      use: () =>
         world.meanie
            ? [
                 "<32>{#p/human}* (You rip up the Postcard.)",
                 battler.active
                    ? `<32>{#p/story}* ATTACK up by ${2 + battler.at_bonus}!`
                    : "<32>{#p/human}* (No effect outside of battle.)"
              ]
            : battler.active
            ? [ "<32>{#p/human}* (You daydream about the landscape on the Postcard.)\n* (Nothing happens.)" ]
            : []
   },
   i_quiche: {
      battle: {
         description: "With great confections come great sweetsponsibilities.",
         name: "芝士蛋糕"
      },
      drop: () => [
         "<32>{#p/human}* （你把芝士蛋糕扔掉了。）",
         ...(SAVE.data.b.svr || world.darker || SAVE.data.b.ufokinwotm8
            ? []
            : [ "<32>{#p/basic}* And the cycle of abandonment continues." ]),
         ...(!battler.active &&
         (fetchCharacters()
            .find(c => c.key === 'sans') // NO-TRANSLATE

            ?.position.extentOf(player) ?? 200) < 200
            ? [
                 "<25>{#p/sans}{#f/3}* ... oh.\n* that's a shame.",
                 "<25>{#p/sans}{#f/2}* i'd hoped someone would take care of that for me."
              ]
            : [])
      ],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? [ "<32>{#p/human}* (45 HP.)" ]
            : [ "<32>{#p/basic}* 「芝士蛋糕」 回復45 HP\n* 甜蜜的零食背後，\n  是一份甜蜜的責任。" ],
      name: "芝士蛋糕",
      use: () => [
         "<32>{#p/human}* （你吃掉了芝士蛋糕。）",
         ...(!battler.active &&
         (fetchCharacters()
            .find(c => c.key === 'sans') // NO-TRANSLATE

            ?.position.extentOf(player) ?? 200) < 200
            ? [
                 "<25>{#p/sans}{#f/0}* ... oh.\n* you actually ate it?",
                 "<25>{#p/sans}{#f/2}* i had no idea anyone liked my baking skills."
              ]
            : [])
      ]
   },
   i_crisp: {
      battle: {
         description: "A bag of chisps from far beyond the stars.",
         name: "Chisps"
      },
      drop: [ "<32>{#p/human}* (You throw away the Cosmic Chisps.)" ],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? [ "<32>{#p/human}* (18 HP.)" ]
            : [ "<32>{#p/basic}* \"Cosmic Chisps\" Heals 18 HP\n* A bag of chisps from far beyond the stars." ],
      name: "Cosmic Chisps",
      use: [ "<32>{#p/human}* (You eat the Cosmic Chisps.)" ]
   },
   i_rations: {
      battle: {
         description: "皇家出品，救急精品。",
         name: "口糧"
      },
      drop: [ "<32>{#p/human}* （你把口糧扔掉了。）" ],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? [ "<32>{#p/human}* (30 HP.)" ]
            : [ "<32>{#p/basic}* 「口糧」 回復30 HP\n* 皇家出品，救急精品。" ],
      name: "口糧",
      use: [ "<32>{#p/human}* (You consume the Rations.)" ]
   },
   i_tea: {
      battle: {
         description: "Increases your SPEED in battle.",
         name: "Tea"
      },
      drop: [ "<32>{#p/human}* (You throw away the Nebula Tea.)" ],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? [ "<32>{#p/human}* (15 HP.)" ]
            : [
                 "<33>{#p/basic}* \"Nebula Tea\" Heals 15 HP\n* Increases your SPEED in battle.\n* Not viable outside of battle."
              ],
      name: "Nebula Tea",
      use: () => [
         "<32>{#p/human}* (You drank the Nebula Tea.)",
         battler.active ? "<32>{#p/story}* SPEED up by 1!" : "<32>{#p/human}* (No effect outside of battle.)"
      ]
   },
   i_tzn: {
      battle: {
         description: "Like Earth tofu, but spacier.",
         name: "Tofu"
      },
      drop: [ "<32>{#p/human}* (You throw away the Space Tofu.)" ],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? [ "<32>{#p/human}* (17 HP.)" ]
            : [ "<32>{#p/basic}* \"Space Tofu\" Heals 17 HP\n* Like Earth tofu, but spacier." ],
      name: "Space Tofu",
      use: () => [
         "<32>{#p/human}* (You ingest the Space Tofu.)",
         ...(world.meanie
            ? [
                 "<32>* (The taste fills you with a certain kind of feeling...)",
                 battler.active
                    ? `<32>{#p/story}* ATTACK up by ${4 + battler.at_bonus}!`
                    : "<32>{#p/human}* (No effect outside of battle.)"
              ]
            : [])
      ]
   },
   i_flakes: {
      battle: {
         description: "Finally, a proper breakfast.",
         name: "Tem Flakes"
      },
      drop: [ "<32>{#p/human}* (You discard the Temmie Flakes.)" ],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? [ "<32>{#p/human}* (2 HP.)" ]
            : [ "<32>{#p/basic}* \"Temmie Flakes\" Heals 2 HP\n* Finally, a proper breakfast." ],
      name: "Temmie Flakes",
      use: [ "<32>{#p/human}* (You eat the Temmie Flakes.)" ]
   },
   i_temyarmor: {
      battle: {
         description: "The things you can do with a college education!",
         name: "Tem Armor"
      },
      drop: [ "<32>{#p/human}* (You throw away the Temmie Armor.)" ],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? [ "<32>{#p/human}* (10 AT, 20 DF.)" ]
            : [
                 "<32>{#p/basic}* \"Temmie Armor\" (10 AT, 20 DF)\n* The things you can do with a college education!",
                 "<32>* Makes you invincible a lot longer...",
                 "<32>* Restores a lot of lost HP after each turn...",
                 "<32>* Your opposition's attacks have a fair chance to heal you...",
                 "<32>* Significantly increases aim time in battle...",
                 "<32>* It does everything any other item can do, but better."
              ],
      name: "Temmie Armor",
      use: [ "<32>{#p/human}* (You don the Temmie Armor.)" ]
   },
   i_boots: {
      battle: {
         description: "Nimble, but fickle. Not a suitable jetpack replacement.",
         name: "懸浮靴"
      },
      drop: [ "<32>{#p/human}* （你把懸浮靴扔掉了。）" ],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? [ "<32>{#p/human}* (7 AT.)" ]
            : [ "<32>{#p/basic}* 「懸浮靴」 （7攻擊）\n* 靈活但輕浮，\n  想取代飛行器，有點懸。" ],
      name: "懸浮靴",
      use: [ "<32>{#p/human}* （你穿上了懸浮靴。）" ]
   },
   i_flight_suit: {
      battle: {
         description: "膽小鬼別穿。",
         name: "飛行服"
      },
      drop: [ "<32>{#p/human}* （你把飛行服扔掉了。）" ],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? [ "<32>{#p/human}* (10 DF.)" ]
            : [ "<32>{#p/basic}* 「飛行服」 （10防禦）\n* 膽小鬼別穿。" ],
      name: "飛行服",
      use: [ "<32>{#p/human}* （你穿上了飛行服。）" ]
   },
   i_snack: {
      battle: {
         description: "Undyne's personal recipe...?",
         name: "Odd Snack"
      },
      drop: () => [
         "<32>{#p/human}* (You throw away the Odd Snack.)",
         ...(game.room === 'f_kitchen' // NO-TRANSLATE

            ? ((SAVE.data.b.drop_snack = true),
              [ "<25>{#p/undyne}{#f/8}* Fuhuhuhu!\n* Throw that snack on the cold, hard floor!" ])
            : [])
      ],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? [ "<32>{#p/human}* (15 HP.)" ]
            : [ "<32>{#p/basic}* \"Odd Snack\" Heals 15 HP\n* Undyne's personal recipe...?" ],
      name: "Odd Snack",
      use: () => [
         "<32>{#p/human}* (You eat the Odd Snack.)",
         ...(game.room === 'f_kitchen' // NO-TRANSLATE

            ? [
                 SAVE.data.b.undyne_respecc
                    ? "<25>{#p/undyne}{#f/1}* Hope you like it!"
                    : "<25>{#p/undyne}{#f/14}* Hope you like it!"
              ]
            : SAVE.data.b.svr || world.darker || SAVE.data.b.ufokinwotm8
            ? []
            : [ "<32>{#p/basic}* Crispy." ])
      ]
   },

   n_shop_tem: {
      exit: [ "<32>{#p/tem}{#k/0}* bOI!!" ],
      item: (armorprice: number) =>
         SAVE.data.n.plot === 72
            ? [
                 "0G - free flake!!",
                 "0G - free flake!!",
                 "0G - free flake!!",
                 SAVE.data.b.item_temyarmor || temgone()
                    ? "§fill=#808080§--- UNAVAILABLE ---"
                    : SAVE.data.b.colleg
                    ? `${armorprice}G - temy ARMOR!!!`
                    : "1000G - tem pay 4 colleg",
                 "離開"
              ]
            : [
                 "4G - tem flake",
                 "2G - tem flake (ON SALE,)",
                 "20G - tem flake (expensiv)",
                 SAVE.data.b.item_temyarmor
                    ? "§fill=#808080§--- UNAVAILABLE ---"
                    : SAVE.data.b.colleg
                    ? `${armorprice}G - temy ARMOR!!!`
                    : "1000G - tem pay 4 colleg",
                 "離開"
              ],
      itemInfo: () =>
         SAVE.data.n.plot === 72
            ? [
                 "Heals 2HP\nfree food\nof tem!!",
                 "Heals 2HP\nfree food\nof tem!!",
                 "Heals 2HP\nfree food\nof tem!!",
                 SAVE.data.b.colleg ? "Armor: 20DF\nmake\nbattles\nver easy!!!" : "COLLEG\ntem pursu\nhigher\neducation"
              ]
            : [
                 "Heals 2HP\nfood of\ntem",
                 "Heals 2HP\nDISCOUNT\nFOOD OF\nTEM!!!",
                 "Heals 2HP\nfood of\ntem\n(expensiv)",
                 SAVE.data.b.colleg ? "Armor: 20DF\nmake\nbattles\nver easy!!!" : "COLLEG\ntem pursu\nhigher\neducation"
              ],
      itemPrompt: "<09>{#p/tem}{#k/0}hOI!\nwelcome to...\nTEM SHOP!",
      itemPurchase: [
         "<09>{#p/tem}{#k/6}thanks PURCHASE!",
         "<09>{#p/tem}{#k/0}fdshfg",
         "<09>{#p/tem}{#k/2}you don hav da muns,",
         "<10>{#p/human}* （你帶的東西太多了。）"
      ],
      itemPurchasePrompt: (free: boolean) => (free || temgone() ? "Take it?" : "花$(x)G\n買它嗎？"),
      itemSellPrompt: "出$(x)G\n賣掉它嗎？",
      itemUnavailable: () => (temgone() ? "<09>{#p/basic}空無一物。" : "<09>{#p/tem}{#k/2}no more item..."),
      itemRestricted: "<09>{#p/tem}{#k/2}not for sale...",
      menu: () =>
         temgone() ? [ "拿取", "偷竊", "閱讀", "離開" ] : [ "購買", world.meanie ? "偷竊" : "出售", "交談", "離開" ],
      menuPrompt1: "<23>{#p/tem}{#k/0}* hOI!\n* welcom to...\n* da TEM SHOP!!!",
      menuPrompt2: "<23>{#p/basic}* ...但是人們都逃走了。",
      sell1: [ "<30>{#p/tem}{#k/2}* 別哇！！！\n* 我滴錢錢，，，", "<30>{#p/tem}{#k/4}* 不許偷錢！！！" ],
      sell2: [ "<30>{#p/tem}{#k/3}* 沒門。" ],
      steal1: [ "<30>{#p/human}* (You took 32767G from behind the counter.)" ],
      steal2: [ "<30>{#p/basic}* 空無一物。" ],
      note: [ "<30>{#p/human}* (But there was no note to be found here.)" ],
      talk: () => [
         SAVE.data.n.plot === 72 ? "Good News" : "打招呼",
         SAVE.data.n.plot === 72 ? "Your Future" : SAVE.data.b.colleg ? "About Temmie Armor" : "來個自我介紹",
         SAVE.data.n.plot === 72 ? "Temmie Secrets" : "Temmie History",
         "About Shop",
         "離開"
      ],
      talkPrompt: "<09>{#p/tem}{#k/0}HOI!!!\nim temmie",
      talkText: [
         () =>
            SAVE.data.n.plot === 72
               ? [ "<32>{#p/tem}{#k/0}* yAYA!", "<32>{#p/tem}{#k/0}* tem go to NEW WORLDS!!!" ]
               : [ "<32>{#p/tem}{#k/0}* hOI!!!", "<32>* i'm temmie" ],
         () =>
            SAVE.data.n.plot === 72
               ? [ "<32>{#p/tem}{#k/0}* yAYA!", "<32>{#p/tem}{#k/0}* tem go to NEW WORLDS!!!" ]
               : SAVE.data.b.colleg
               ? [
                    "<32>{#k/1}* tem armor so GOOds!\n* any battle becom!\n* a EASY victories!!!",
                    "<32>{#k/4}* but, hnnn, tem think...\n* if u use armors, battles woudn b a challenge anymores,",
                    "<32>{#k/3}* but tem...\n* have a solushun.",
                    "<32>{#k/6}* tem wil offer...\n* a {@fill=#ff0}SKOLARSHIPS{@fill=#fff}!",
                    "<32>{#k/3}* if u {@fill=#ff0}lose a lot of battles,{@fill=#fff} tem wil {@fill=#ff0}LOWER THE PRICE{@fill=#fff}!",
                    ...(armorprice() <= 1000
                       ? [
                            "<32>{#k/1}* in fack...\n* PRICE MAY ALREADY BE LOWERS!!!\n* WOA!!!!",
                            "<32>{#k/6}* Congra-tem-lations!!!"
                         ]
                       : [
                            "<32>{#k/3}* so if you get to TOUGH BATLE and feel FRUSTRATE, can buy TEM armor as last resort!",
                            "<32>{#k/5}* but tem armor so goods,\n* promise to only buy if you really needs it,"
                         ])
                 ]
               : [ "<32>{#p/tem}{#k/0}* hOI!!!", "<32>* i'm temmie" ],
         () =>
            SAVE.data.n.plot === 72
               ? [
                    "<32>{#p/tem}{#k/0}* at back of famus statue, can find SPECIL SWITCH,",
                    "<32>{#p/tem}{#k/0}* and SWITCHs...\n* come wif RIDDLES!",
                    SAVE.data.b.colleg
                       ? "<32>{#p/tem}{#k/2}* even after colleg, tem don know what it means,,,"
                       : "<32>{#p/tem}{#k/0}* tem don know what it means,,,",
                    "<32>{#p/tem}{#k/1}* but mayb humans can solve!!\n* yAYA!!"
                 ]
               : SAVE.data.b.colleg
               ? [
                    "<32>{#p/tem}{#k/0}* yaYA!!!\n* tem got degree in TEM STUDIES!\n* tem can tell you all about tem's DEEP HISTORY!!!"
                 ]
               : [ "<32>{#p/tem}{#k/0}* us tems hav a DEEP HISTORY!!!" ],
         () =>
            SAVE.data.n.plot === 72
               ? [ "<32>{#p/tem}{#k/0}* yaYA!!!\n* wil close TEM SHOP soon!!!" ]
               : [ "<32>{#p/tem}{#k/0}* yaYA!!!\n* go to TEM SHOP!!!" ]
      ],
      colleg1: [
         "<32>{#p/tem}{#k/1}* WOA!!",
         "<32>{#k/2}* thas ALOT o muns...\n* can tem realy acepts...",
         "<32>{#k/6}* OKs!!!!\n* tem go to colleg and make u prouds!!!"
      ],
      colleg2: [
         "<32>{#p/tem}* tem bak from cool leg,",
         "<32>{#k/0}* tem learn MANY THINs,\n* learn to sell new ITEM!\n* yayA!!!"
      ],
      sellExit: "離開",
      sellValue: "$(x)G",
      sellStory1: () => [
         "<32>{#p/tem}{#k/1}* WOA!!",
         "<32>{#k/2}* u gota... $(x)s!!!",
         SAVE.data.b.colleg
            ? "<32>{#k/4}* hnnn....\n* i gota have dat $(x)s...\n* but i gota pay for gradskool,"
            : "<32>{#k/4}* hnnn....\n* i gota have dat $(x)s...\n* but i gota pay for colleg,",
         "<32>{#k/5}* hnnnn....!!!\n* tem always wanna $(x)s...!"
      ],
      sellStory2: [ "<32>{#p/tem}{#k/2}* b.. but...", "<32>{#k/4}* p!!!!!!!!!!!!" ],
      sellStory3: () =>
         SAVE.data.b.colleg
            ? [
                 "<32>{#p/tem}{#k/3}* Is this a joke?\n* Are you having a laugh?\n* Ha ha, very funny.\n* I'm the one with a degree."
              ]
            : [ "<32>{#p/tem}{#k/3}* You're gonna regret that." ],
      zeroPrompt: "<09>{#p/basic}..."
   },
   n_shop_tortoise: {
      exit: () =>
         world.runaway
            ? []
            : world.genocide || world.killed0 || SAVE.data.s.state_foundry_deathroom === 'f_hub' // NO-TRANSLATE

            ? [ "<32>{#p/basic}{#k/1}* Good riddance." ]
            : [ "<32>{#p/basic}{#k/0}* Be careful out there, kid!" ],
      item: () =>
         world.runaway
            ? [ "0G - Datapad?", "0G - AR眼鏡？", "0G - Nebula Tea", "0G - Tree Sap", "離開" ]
            : world.genocide || world.killed0 || SAVE.data.s.state_foundry_deathroom === 'f_hub' // NO-TRANSLATE

            ? [ "45G - Datapad?", "45G - AR眼鏡？", "16G - Nebula Tea", "25G - Tree Sap", "離開" ]
            : SAVE.data.n.plot === 72
            ? [
                 SAVE.data.b.item_padd ? "25G - Datapad?" : "35G - Datapad",
                 SAVE.data.b.item_goggles ? "25G - AR眼鏡？" : "35G - AR眼鏡",
                 "5G - Nebula Tea",
                 "5G - Tree Sap",
                 "離開"
              ]
            : [
                 SAVE.data.b.item_padd ? "45G - Datapad?" : "55G - Datapad",
                 SAVE.data.b.item_goggles ? "45G - AR眼鏡？" : "55G - AR眼鏡",
                 "16G - Nebula Tea",
                 "25G - Tree Sap",
                 "離開"
              ],
      itemInfo: () => [
         SAVE.data.b.item_padd || world.genocide || world.killed0 || SAVE.data.s.state_foundry_deathroom === 'f_hub' // NO-TRANSLATE

            ? "Weapon: 0AT\n($(x) AT)\nJust a bit\ninvincible."
            : "Weapon: 2AT\n($(x) AT)\nInvincible\nlonger.",
         SAVE.data.b.item_goggles || world.genocide || world.killed0 || SAVE.data.s.state_foundry_deathroom === 'f_hub' // NO-TRANSLATE

            ? "Armor: 4DF\n($(x) DF)\nJust a bit\ninvincible."
            : "Armor: 6DF\n($(x) DF)\nInvincible\nlonger.",
         "Heals 15HP\nSPEED\nup in\nbattle.",
         "Heals 35HP\nMade from\na real\ntree."
      ],
      itemPrompt: () =>
         world.genocide || world.killed0
            ? "<09>{#p/basic}{#k/3}Don't expect a discount."
            : "<09>{#p/basic}{#k/4}What are you lookin' for?",
      itemPurchase: () =>
         world.genocide || world.killed0
            ? [
                 "<09>{#p/basic}{#k/1}...",
                 "<09>{#p/basic}{#k/1}Here we are.",
                 "<09>{#p/basic}{#k/3}Eh?\nYou can't afford it?",
                 "<10>{#p/human}* （你帶的東西太多了。）"
              ]
            : [
                 "<09>{#p/basic}{#k/0}Thanks!\nWa ha ha.",
                 "<09>{#p/basic}{#k/2}Careful with that.",
                 "<09>{#p/basic}{#k/4}You're a bit short on cash.",
                 "<10>{#p/human}* （你帶的東西太多了。）"
              ],
      itemPurchasePrompt: () => (world.runaway ? "Take it?" : "花$(x)G\n買它嗎？"),
      menu: () =>
         world.runaway ? [ "拿取", "偷竊", "閱讀", "離開" ] : [ "購買", world.meanie ? "偷竊" : "出售", "交談", "離開" ],
      menuPrompt1: () =>
         SAVE.data.n.plot === 72
            ? "<23>{#p/basic}{#k/0}* Wa ha ha!\n* I knew you could do it!"
            : "<23>{#p/basic}{#k/0}* Woah there!\n* I've got some neat junk for sale.",
      menuPrompt2: () =>
         SAVE.data.n.plot === 72 ? "<23>{#p/basic}{#k/0}* Wa ha ha." : "<23>{#p/basic}{#k/0}* Don't be shy now.",
      menuPrompt3: () =>
         world.genocide
            ? "<23>{#p/basic}{#k/3}* 小夥子，你們幾個忙活啥呢？\n* 等下，當我沒問。\n* 不關我的事，對吧。"
            : "<24>{#p/basic}{#k/2}* Wa ha ha...\n* So you came to see me.\n* What a riot!",
      menuPrompt4: "<23>{#p/basic}* ...但是人們都逃走了。",
      note: [ "<32>{#p/human}* (But there was no note for you to read.)" ],
      sell1: () =>
         world.runaway
            ? [ "<30>{#p/human}* (You took 1394G from behind the counter.)" ]
            : world.genocide
            ? [
                 "<30>{#p/basic}{#k/4}* Wah ha ha...",
                 "<30>{#k/3}* You gonna steal my goods the same way you stole your SOULs?",
                 "<30>{#k/4}* If I were you, I'd appreciate what I already have."
              ]
            : world.meanie
            ? [
                 "<30>{#p/basic}{#k/2}* Woah there, kiddo.\n* That stuff ain't free, y'know?",
                 "<30>{#k/3}* It may look like junk to you, but to me, it's anything but!"
              ]
            : [
                 "<30>{#p/basic}{#k/2}* Ha!\n* I'm tryin' to get RID of my junk, not get more of it!",
                 "<30>{#k/3}* Though, I've heard if you want to sell stuff, the Temmies are your best bet.",
                 "<30>{#k/0}* Where can you find them?",
                 "<30>{#k/4}* ...",
                 "<30>{#k/0}* I don't remember."
              ],
      sell2: () =>
         world.runaway
            ? [ "<30>{#p/basic}* 空無一物。" ]
            : world.genocide || world.meanie
            ? [ "<30>{#p/basic}{#k/1}* I wouldn't give up my gilded treasures at phaser-point." ]
            : [ "<30>{#p/basic}{#k/0}* For the last time, I'm not taking it!" ],
      talk: () =>
         SAVE.data.n.plot === 72
            ? [
                 "Asgore",
                 "New Homeworld",
                 "Toriel",
                 SAVE.data.b.c_state_secret2 && !SAVE.data.b.c_state_secret2_used
                    ? "§fill=#ff0§Handshake"
                    : "Am I A Hero",
                 "離開"
              ]
            : world.genocide
            ? [ "Asriel", "(Threaten)", "(Fight)", "Undyne", "離開" ]
            : world.killed0
            ? [ "Your Fate", "(Threaten)", "(Fight)", "Hero", "離開" ]
            : [
                 48 <= SAVE.data.n.plot && SAVE.data.n.state_foundry_undyne > 0
                    ? "來個自我介紹"
                    : [ "來個自我介紹", "§fill=#ff0§The War (NEW)", "§fill=#ff0§Retirement (NEW)", "Retirement" ][
                         Math.min(SAVE.data.n.shop_gerson, 3)
                      ],
                 [ "The Homeworld", "§fill=#ff0§Family (NEW)", "§fill=#ff0§Erogot (NEW)", "Erogot" ][
                    Math.min(SAVE.data.n.shop_homeworld, 3)
                 ],
                 "The Foundry",
                 SAVE.data.s.state_foundry_deathroom === 'f_hub' // NO-TRANSLATE

                    ? "Undyne"
                    : SAVE.data.b.c_state_secret2 && !SAVE.data.b.c_state_secret2_used
                    ? "§fill=#ff0§Handshake"
                    : "About Undyne",
                 "離開"
              ],
      talkPrompt: () =>
         world.genocide || world.killed0
            ? "<09>{#p/basic}{#k/2}Really?\nYOU wanna talk?"
            : "<09>{#p/basic}{#k/0}Anything you wanna know?",
      talkText: [
         () =>
            SAVE.data.n.plot === 72
               ? [
                    "<32>{#p/basic}{#k/0}* Ol' King Fluffybuns, eh?\n* Now there's someone I know.",
                    "<32>{#k/2}* I'll say this, I had no clue about what he was doing with those humans until today!",
                    "<32>{#k/3}* I don't know how he kept such a secret for so long...",
                    "<32>{#k/0}* Especially since everyone woulda been fine with it if he told 'em before.",
                    "<32>{#k/0}* I've adopted one of the humans myself, actually.",
                    "<32>{#k/2}* They're asleep in their box, just outside the shop.\n* What an adorable little fella!",
                    "<32>{#k/0}* Asgore says they'll wake up once their body adjusts to the real world or whatever.",
                    "<32>{#k/3}* ... huh?\n* You want to know if Asgore can be your father?",
                    "<32>{#k/0}* Well, I don't see why not!",
                    "<32>{#k/0}* I'm sure he'd be happy to have you living with him.",
                    "<32>{#k/2}* It'd probably be good for him!\n* Wa ha ha."
                 ]
               : world.genocide
               ? [
                    "<32>{#p/basic}{#k/1}* You wanna know my thoughts on Asriel?",
                    "<32>{#k/0}* ...\n* He was a good kid.",
                    "<32>{#k/3}* And if he was still alive, he woulda made a great king.",
                    "<32>{#k/4}* As for what you got there standin' in front of me, well, it's not him.",
                    "<32>{#k/0}* It looks like him, talks like him, even has his damned adorable face... bless that kid.",
                    "<32>{#k/3}* But that SOUL... being this close to you, the resemblance is unmistakable.",
                    "<32>{#k/1}* How'd it feel taking the SOUL of your own mother, boy?",
                    "<32>{#k/0}* I wonder."
                 ]
               : world.killed0
               ? [
                    "<32>{#p/basic}{#k/0}* Long ago, the king and I agreed that escaping would be pointless...",
                    "<32>{#k/1}* Since once we left, humans would just kill us on the spot.",
                    "<32>{#k/3}* I'll admit I felt a little betrayed when he changed his mind.",
                    "<32>{#k/4}* But now, I think...\n* Maybe he was right to.",
                    "<32>{#k/0}* 'Cause after all, even though we never escaped...",
                    "<32>{#k/3}* A human's killing us anyway, ain't that right?"
                 ]
               : 48 <= SAVE.data.n.plot && SAVE.data.n.state_foundry_undyne > 0
               ? [
                    "<32>{#p/basic}{#k/0}* Eh, there's really not much to say about me.",
                    "<32>{#k/0}* I do my best to live my life...",
                    "<32>{#k/4}* Help those around me in ways that I can.",
                    "<32>{#k/0}* The thing of it is, we live in dangerous times.",
                    "<32>{#k/3}* If the wrong human were to stumble on our little outpost, we'd be as good as gone..."
                 ]
               : [
                    [
                       "<32>{#p/basic}{#k/0}* I've been around a long time.\n* Maybe too long.",
                       "<32>{#k/3}* Back in the day, I served as a chief on the planetary council.",
                       "<32>{#k/2}* The \"Saber of Justice\" they called me.",
                       "<32>{#k/1}* ... if it weren't for that damned war, I might still be in that position today."
                    ],
                    [
                       "<32>{#p/basic}{#k/0}* Ah yeah, the war.\n* That awful thing took a toll on me.\n* On all of us.",
                       "<32>{#k/4}* Every so often, we'd get these reports...\n* A list of the people who'd died protecting our home.",
                       "<32>{#k/1}* I still remember the look on Fluffybuns's face when he had to deliver the bad news to families.",
                       "<32>{#k/1}* That blank stare, those empty eyes...\n* That's what war does to people, kiddo.",
                       "<32>{#k/3}* That's why I retired."
                    ],
                    [
                       "<32>{#p/basic}{#k/3}* My retirement?",
                       "<32>{#k/2}* Wah ha ha!\n* I'd say it's going well!",
                       "<32>{#k/4}* This old shack ain't exactly up to par with those guys operating from Aerialis...",
                       "<32>{#k/2}* ... but who cares!\n* I don't need to compete with them.",
                       "<32>{#k/0}* The heroic, wacky, and sometimes shy neighors I live with out here are all I could ever ask for.",
                       "<32>{#k/0}* It may not be the home I once dreamed of, but you take what you can get in life."
                    ],
                    [
                       "<32>{#p/basic}{#k/3}* You want me to repeat myself?",
                       "<32>{#k/4}* Wa ha ha... you'll have to go back in time or something.",
                       "<32>{#k/2}* Even I don't remember what I said!"
                    ]
                 ][Math.min(SAVE.data.n.shop_gerson++, 3)],
         () =>
            SAVE.data.n.plot === 72
               ? [
                    "<32>{#p/basic}{#k/3}* A whole new world...",
                    "<32>{#k/0}* Boy, I never thought I'd see the day.",
                    "<32>{#k/3}* Dr. Alphys told everyone she'd started scanning for new worlds...",
                    "<32>{#k/0}* Then, just a short time ago, she said she'd found one.",
                    "<32>{#k/0}* It's called Eurybia.\n* Don't know much else about it beyond that.",
                    "<32>{#k/1}* All I can be sure of is that it'll be better than this place.",
                    "<32>{#k/3}* That's not to say I won't miss it.",
                    "<32>{#k/0}* I've lived through the entire period of monster captivity...",
                    "<32>{#k/0}* Leaving it so soon almost seems like a crime."
                 ]
               : world.genocide || world.killed0
               ? [
                    "<32>{#p/basic}{#k/3}* I've lived too long to be afraid of something like you.",
                    "<32>{#k/2}* Try it, kiddo!",
                    "<32>{#k/1}* ... I know you can't here.",
                    "<32>{#k/4}* Wah ha...\n* Knowledge like that is part of the reason I've survived so long."
                 ]
               : [
                    [
                       "<32>{#p/basic}{#k/0}* The homeworld...\n* Well, first off, it has a name.\n* It's Krios.",
                       "<33>{#k/3}* I myself grew up in a quiet little town outside the city.\n* Well, I say quiet.",
                       "<32>{#k/4}* Every few days, some of the kids from school would host these time trial races.",
                       "<32>{#k/0}* The weather wasn't always friendly, but they didn't care.\n* If anything, it just made things more interesting.",
                       "<32>{#k/0}* My family and I attended dozens of these races when I was just a kiddo.",
                       "<32>{#k/0}* Don't get me wrong.\n* Electrosnail is fun, but it's just not the same thing."
                    ],
                    [
                       "<32>{#p/basic}{#k/3}* My family?\n* Eh, there's not much to say.\n* I had good parents, a few siblings.",
                       "<32>{#k/0}* One day, King Erogot came to our town.\n* He and I met at one of those races I told ya about.",
                       "<32>{#k/0}* I was an insignificant country bumpkin, but he saw somethin' in me, somethin' more...",
                       "<32>{#k/4}* One thing led to another, and I ended up moving away from my family at an early age.",
                       "<32>{#k/3}* ... that was the last time I'd ever get to see them face to face."
                    ],
                    [
                       "<32>{#p/basic}{#k/0}* Erogot, the king of the last great era of our homeworld.",
                       "<32>* I'm sure you've read about him at some point.",
                       ...(SAVE.storage.inventory.has('artifact') // NO-TRANSLATE

                          ? [ "<32>{#k/2}* If you haven't, then what are ya holding his pendant for!?" ]
                          : [
                               "<32>{#k/2}* If you haven't, then what asteroid have ya been living in for all this time!?"
                            ]),
                       "<32>{#k/3}* Under his reign, the monster species came so far.\n* Perhaps a little too far.",
                       "<32>{#k/0}* He was so happy to meet a human for the first time... but not for himself.",
                       "<32>{#k/1}* Nah, that was his son's wish.\n* Poor kid got exactly what he asked for and then some..."
                    ],
                    [
                       "<32>{#p/basic}{#k/3}* Forgive me, but I don't really wanna talk about that too much more.",
                       "<32>{#k/1}* Ol' King Fluffybuns wouldn't want you to carry that kinda burden."
                    ]
                 ][Math.min(SAVE.data.n.shop_homeworld++, 3)],
         () =>
            SAVE.data.n.plot === 72
               ? [
                    "<32>{#p/basic}{#k/0}* Toriel?\n* She came through here not too long ago, actually.",
                    "<32>{#k/1}* Said she needed time to herself.",
                    "<32>{#k/3}* Well, y'know what?\n* I figure she's had enough time by now.",
                    "<32>{#k/0}* You can find her in the trash depository past the ladder in the room nearby.",
                    "<32>{#k/3}* I'm pretty sure I know what's got her so pre-occupied..."
                 ]
               : world.genocide || world.killed0
               ? 48 <= SAVE.data.n.plot
                  ? [
                       [
                          "<32>{#p/basic}{#k/3}* Eh?\n* Fight you?",
                          "<32>{#k/1}* Nah... I'm not a hero.\n* Not anymore.",
                          "<32>{#k/0}* And b'sides...\n* You may have spared Undyne, but everyone else is still dead.",
                          "<32>{#k/4}* I'm better off holding my ground right where I am..."
                       ],
                       [
                          "<32>{#p/basic}{#k/3}* Eh?\n* Fight you?",
                          "<32>{#k/1}* Nah... I'm not a hero.\n* Not anymore.",
                          "<32>{#k/3}* And b'sides...\n* People seem to go missing after they run into you.",
                          "<32>{#k/4}* I'll take that as an omen to stay right where I am..."
                       ],
                       [
                          "<32>{#p/basic}{#k/3}* Eh?\n* Fight you?",
                          "<32>{#k/1}* Nah... I'm not a hero.\n* Not anymore.",
                          "<32>{#k/0}* And b'sides...\n* After what you did to Undyne, I know I don't stand a chance.",
                          "<32>{#k/4}* I'm better off holding my ground right where I am..."
                       ]
                    ][world.genocide ? 2 : SAVE.data.n.state_foundry_undyne]
                  : [
                       "<32>{#p/basic}{#k/3}* Eh?\n* Fight you?",
                       "<32>{#k/1}* Nah... I'm not a hero.\n* Not anymore.",
                       "<32>{#k/0}* And b'sides...\n* These old bones aren't fit for fighting anyhoo.",
                       "<32>{#k/1}* One attack from you, and then I'd... well...",
                       "<32>{#k/4}* At least by talking to you, I've bought enough time for some of them to escape."
                    ]
               : 48 <= SAVE.data.n.plot && SAVE.data.n.state_foundry_undyne > 0
               ? [
                    [
                       "<32>{#p/basic}{#k/3}* You wanna know about the Foundry?\n* This old place?",
                       "<32>{#k/3}* Well, it's a place people often get lost...",
                       "<32>{#k/3}* Or left behind...",
                       "<32>{#k/2}* Boy, I sure hope that doesn't happen to you."
                    ],
                    [
                       "<32>{#p/basic}{#k/3}* You wanna know about the Foundry?\n* This old place?",
                       "<32>{#k/0}* Well, it's never been the friendliest location...",
                       "<32>{#k/3}* From the humans sending us here to die, to the recent loss of a fighting spirit...",
                       "<32>{#k/3}* Nothin' but bad luck down here, kiddo."
                    ]
                 ][SAVE.data.n.state_foundry_undyne - 1]
               : [
                    "<32>{#p/basic}{#k/3}* You wanna know about the Foundry?\n* This old place?",
                    "<32>{#k/2}* Well, back when we first got trapped out here, this WAS the outpost!",
                    "<32>{#k/0}* All those fancy-schmancy sections added on afterwards were built by us monsters.",
                    "<32>{#k/0}* Turns out most people aren't into the idea of living in the past.\n* Fair enough.",
                    "<32>{#k/2}* But... I just think there's something so decadent about repurposing this place.",
                    "<32>{#k/3}* It was the humans who trapped us here, hoping we'd rot and suffer in darkness.",
                    "<32>{#k/0}* But look at us now.\n* Look at how we've made this place our own.",
                    "<32>{#k/2}* Wa ha ha!\n* Talk about showing 'em who's boss, eh?"
                 ],
         () =>
            SAVE.data.b.c_state_secret2 && !SAVE.data.b.c_state_secret2_used
               ? ((SAVE.data.b.c_state_secret2_used = true),
                 [
                    "<32>{#p/basic}{#k/3}* What?\n* Where on Krios did you learn THAT handshake?",
                    "<32>{#k/2}* I haven't shown anyone that routine in years!",
                    "<32>{#k/0}* Wa ha ha... but I think I know where ya learned it from.",
                    "<32>{#k/0}* Long time ago, a human came here... me and them became good friends.",
                    ...(SAVE.data.n.plot === 72
                       ? [
                            "<32>{#k/3}* Maybe we still are.\n* I'll have to ask 'em when they wake up.",
                            "<32>{#k/4}* I've only just adopted the little rascal...",
                            "<32>{#k/0}* They seem pretty tired after all that archive business.",
                            "<32>{#k/3}* Imagine...\n* Living in a virtual world...",
                            "<32>{#k/2}* If you die in the simulation, do you die in real life?",
                            "<32>{#k/0}* Eh, never mind.\n* It doesn't matter now, anyway."
                         ]
                       : [ "<32>{#k/3}* I wonder what they're up to now..." ])
                 ])
               : SAVE.data.n.plot === 72
               ? [
                    "<32>{#p/basic}{#k/0}* Frisk, I could talk about you all day after what you did.",
                    "<32>{#k/4}* Risking your life, facing down a godlike being just to save us...",
                    "<32>{#k/3}* The words strong enough to do it justice don't exist.",
                    "<32>{#k/0}* I think, sometime in your future, if you really wanted it...",
                    "<32>{#k/0}* You could lead the monster race yourself, as ruler.",
                    "<33>{#k/2}* Everyone would follow you.\n* Even this old coot!",
                    "<32>{#k/0}* You're a real hero, kid."
                 ]
               : 48 <= SAVE.data.n.plot
               ? world.genocide
                  ? [
                       [
                          "<32>{#p/basic}{#k/1}* I take it you've killed her by now?",
                          "<32>{#k/1}* ...",
                          "<32>{#k/3}* Then why ask me...",
                          "<32>{#k/3}* Unless...",
                          "<32>{#k/2}* You just wanna get my reaction, don'tcha?",
                          "<32>{#k/4}* ...",
                          "<32>{#k/4}* How about... nah."
                       ],
                       [
                          "<32>{#p/basic}{#k/1}* I get it, guys.",
                          "<32>{#k/1}* She's dead.",
                          "<32>{#k/3}* You expectin' me to throw a party for you or somethin'?",
                          "<32>{#k/1}* Get outta my sight."
                       ]
                    ][Math.min(SAVE.data.n.shop_deadfish++, 1)]
                  : SAVE.data.s.state_foundry_deathroom === 'f_hub' // NO-TRANSLATE

                  ? [
                       "<32>{#p/basic}{#k/1}* ...",
                       "<32>{#k/1}* You've got a real twisted sense of humor, kiddo.",
                       "<32>{#k/3}* Killing her in front of me like that...",
                       "<32>{#k/1}* You're lucky I don't walk out there and kill you myself."
                    ]
                  : world.killed0
                  ? [
                       [
                          "<32>{#p/basic}{#k/4}* Undyne?",
                          49 <= SAVE.data.n.plot
                             ? "<32>{#k/4}* She passed through here earlier..."
                             : "<32>{#k/4}* She just passed through here a few moments ago.",
                          "<32>{#k/0}* Said she'd \"given up\" on tryin'a capture you.",
                          "<32>{#k/4}* ...",
                          "<32>{#k/4}* What happened back there...?"
                       ],
                       [
                          "<32>{#p/basic}{#k/3}* Undyne?",
                          "<32>{#k/0}* I haven't heard from her in a while.",
                          "<32>{#k/4}* She just kinda... disappeared.",
                          "<32>{#k/3}* Was that your doing?"
                       ],
                       [
                          [
                             "<32>{#p/basic}{#k/1}* ...",
                             "<32>{#k/1}* You killed her, just like you killed everyone else.",
                             "<32>{#k/3}* Granted, she wasn't intent on letting YOU live...",
                             "<32>{#k/1}* But don't act like this was just self-defense for you.",
                             "<32>{#k/3}* Wa ha...\n* I know you better than that."
                          ],
                          [ "<32>{#p/basic}{#k/4}* ...", "<32>{#k/0}* What more is there to say?" ]
                       ][Math.min(SAVE.data.n.shop_deadfish++, 1)]
                    ][SAVE.data.n.state_foundry_undyne]
                  : [
                       2 <= SAVE.data.n.plot_date
                          ? SAVE.data.b.undyne_respecc
                             ? [
                                  "<32>{#p/basic}{#k/4}* So you and her had a good time, eh?",
                                  "<32>{#k/2}* Wa ha ha!",
                                  "<32>{#k/0}* You've really made a good impression on her, kiddo!"
                               ]
                             : [
                                  "<32>{#p/basic}{#k/4}* So are you and her... friends now?",
                                  "<32>{#k/2}* Wa ha ha!",
                                  "<32>{#k/0}* You've done something I never thought possible, kiddo!"
                               ]
                          : [
                               [
                                  "<32>{#p/basic}{#k/4}* Undyne?",
                                  49 <= SAVE.data.n.plot
                                     ? "<32>{#k/4}* She passed through here earlier..."
                                     : "<32>{#k/4}* She just passed through here a few moments ago.",
                                  SAVE.data.b.undyne_respecc
                                     ? "<32>{#k/0}* Said she was proud to have fought an \"honorable\" human."
                                     : "<32>{#k/0}* Said she was \"done\" tryin'a capture you.",
                                  "<32>{#k/4}* ...",
                                  "<32>{#k/4}* The heck did you do to make her say THAT?"
                               ],
                               [
                                  "<32>{#p/basic}{#k/4}* If you're askin' me where to find her, she's at home.\n* Ain't but a few steps away.",
                                  "<32>{#k/3}* From her words to me before...",
                                  SAVE.data.b.undyne_respecc
                                     ? "<32>{#k/4}* It seems you two are on better terms than I thought."
                                     : "<32>{#k/4}* It seems you two have some things to work out."
                               ]
                            ][Math.min(SAVE.data.n.shop_deadfish++, 1)],
                       [
                          "<32>{#p/basic}{#k/3}* Undyne?",
                          "<32>{#k/0}* I haven't heard from her in a while.",
                          "<32>{#k/4}* She just kinda... disappeared.",
                          "<32>{#k/1}* Something tells me you played a part in that..."
                       ],
                       [
                          [
                             "<32>{#p/basic}{#k/4}* ...",
                             "<32>{#k/0}* Well... you killed her.",
                             "<32>{#k/3}* Though, that's kinda her own doing.",
                             "<32>{#k/4}* I never really got why she was so intent on killing you humans...",
                             "<32>{#k/0}* If she wanted your SOUL, couldn't she just wait until you died naturally?"
                          ],
                          [ "<32>{#p/basic}{#k/4}* ...", "<32>{#k/0}* What more is there to say?" ]
                       ][Math.min(SAVE.data.n.shop_deadfish++, 1)]
                    ][SAVE.data.n.state_foundry_undyne]
               : world.genocide
               ? [
                    "<32>{#p/basic}{#k/0}* Undyne?\n* Oh, that poor little urchin.\n* Normally, I'd call her the hero...",
                    "<32>{#k/1}* But to be honest, I've seen what you've done.\n* She doesn't stand a chance.",
                    "<32>{#k/4}* Don't get me wrong, she'll give ya one hell of a fight.",
                    "<32>{#k/3}* But no... the outpost needs a different kinda hero now.",
                    "<32>{#k/3}* Someone that doesn't operate on brawn and bravado...",
                    "<32>{#k/3}* Someone that doesn't see the universe like everyone else...",
                    "<32>{#k/0}* Wa ha ha.\n* I don't doubt someone like that will be the end of you."
                 ]
               : world.killed0
               ? world.trueKills > 29
                  ? [
                       "<32>{#p/basic}{#k/1}* I'm not a hero.",
                       "<32>{#k/3}* But I know there's someone out there.",
                       "<32>* Someone who'll never give up trying to do the right thing, no matter what.",
                       "<32>{#k/0}* There's no prophecy or legend 'bout anyone like that.",
                       "<32>* It's just something I know is true.",
                       "<32>{#k/3}* One day, someone like that will hunt you down."
                    ]
                  : [
                       "<32>{#p/basic}{#k/1}* I'm not a hero.",
                       "<32>{#k/3}* But I know there's someone out there.",
                       "<32>* Someone who'll never give up trying to do the right thing, no matter what.",
                       "<32>{#k/0}* I'd watch your back, kiddo.",
                       "<32>{#k/0}* 'Cause sooner or later, before you know it...",
                       "<32>{#k/3}* ... you'll be as good as dead."
                    ]
               : world.trueKills > 29
               ? [
                    "<32>{#p/basic}{#k/0}* Undyne?\n* Yeah, she's a local hero around here.",
                    "<32>{#k/3}* She stormed off earlier... seemed pretty upset at someone who looked just like you...",
                    "<32>{#k/2}* I'd watch your back, kiddo.\n* And buy some items...\n* It might just save your hide!\n* Wa ha ha!"
                 ]
               : [
                    "<32>{#p/basic}{#k/0}* Undyne?\n* Yeah, she's a local hero around here.",
                    "<32>{#k/4}* Through grit and determination alone, she fought her way to the top of the Royal Guard.",
                    "<32>{#k/3}* Actually, she just came through here asking about someone who looked just like you...",
                    "<32>{#k/2}* I'd watch your back, kiddo.\n* And buy some items...\n* It might just save your hide!\n* Wa ha ha!"
                 ]
      ],
      zeroPrompt: "<09>{#p/basic}..."
   },

   s_save_foundry: {
      f_abyss: {
         name: "鑄廠 - 深淵",
         text: [
            "<32>{#p/human}* (You find yourself at the lowest point on the outpost.)",
            "<32>{#p/human}* (This sense of limbo fills you with determination.)"
         ]
      },
      f_battle: {
         name: "鑄廠 - 鋼索橋",
         text: () =>
            SAVE.data.n.state_foundry_undyne > 0 || world.runaway
               ? [ "<32>{#p/human}* (The starlight dims, filling you with determination.)" ]
               : [
                    "<32>{#p/human}* (The starlight glimmers, distant as it may be.)",
                    "<32>{#p/human}* (This fills you with determination.)"
                 ]
      },
      f_hub: {
         name: "鑄廠 - 寧靜地帶",
         text: () =>
            SAVE.data.n.state_foundry_undyne > 0 || world.runaway
               ? [
                    "<32>{#p/human}* (The silence is deafening...)",
                    "<32>{#p/human}* (Yet it fills you with determination.)"
                 ]
               : SAVE.data.n.plot === 72
               ? [ "<32>{#p/human}* (Returning to such a quiet place after your journey fills you with determination.)" ]
               : SAVE.data.n.plot < 48
               ? [
                    "<32>{#p/human}* (A short reprieve in the ongoing chaos...)",
                    "<32>{#p/human}* (It fills you with determination.)"
                 ]
               : SAVE.data.n.plot_date < 2.1
               ? [ "<32>{#p/human}* (The chaos has come to an end, filling you with determination.)" ]
               : SAVE.data.n.exp > 0
               ? [
                    "<32>{#p/human}* (In with the steam comes the bitter scent of betrayal.)",
                    "<32>{#p/human}* (It fills you with determination.)"
                 ]
               : [
                    "<32>{#p/human}* (In with the steam comes the sweet scent of friendship.)",
                    "<32>{#p/human}* (It fills you with determination.)"
                 ]
      },
      f_lobby: {
         name: "鑄廠 - 暗區",
         text: () =>
            SAVE.data.n.plot < 39
               ? [ "<32>{#p/human}* (Wandering deeper into the factory fills you with determination.)" ]
               : SAVE.data.n.state_foundry_muffet === 1
               ? [ "<32>{#p/human}* (Thinking of the friends you corrupted along the way fills you with determination.)" ]
               : SAVE.data.b.f_state_kidd_betray
               ? [ "<32>{#p/human}* (Thinking of the friends you betrayed along the way fills you with determination.)" ]
               : world.runaway
               ? [
                    "<32>{#p/human}* (Thinking of the friends you'll never get to see again fills you with determination.)"
                 ]
               : SAVE.data.b.svr
               ? [
                    "<32>{#p/human}* (Thinking of the friends you went the extra mile to save fills you with determination.)"
                 ]
               : [ "<32>{#p/human}* (Thinking of the friends you made along the way fills you with determination.)" ]
      },
      f_prechase: {
         name: "鑄廠 - 岔路口",
         text: () =>
            SAVE.data.b.svr
               ? [
                    "<32>{#p/human}* (Despite it only being useful for you and your company...)",
                    "<32>{#p/human}* (The newly-built bridge nearby still fills you with determination.)"
                 ]
               : world.runaway
               ? [
                    "<32>{#p/human}* (Despite you being the only one who'll get to use it now...)",
                    "<32>{#p/human}* (The newly-built bridge nearby still fills you with determination.)"
                 ]
               : SAVE.data.n.plot < 48
               ? [
                    "<32>{#p/human}* (Pylon puzzles, signal stars, and vintage vents...)",
                    "<32>{#p/human}* (These fickle frivolities fill you with determination.)"
                 ]
               : [
                    "<32>{#p/human}* (A bridge now sits amidst the surroundings.)",
                    "<32>{#p/human}* (This development fills you with determination.)"
                 ]
      },
      f_sans: {
         name: "鑄廠 - 邊檢站",
         text: () =>
            world.dead_skeleton || world.runaway
               ? [
                    "<32>{#p/human}* （不知怎地，通風口排出的\n  蒸汽令人不安。）",
                    "<32>{#p/human}* （儘管如此，你充滿了\n  決心。）"
                 ]
               : [ "<32>{#p/human}* （通風口冒出的溼熱蒸汽使你\n  充滿了決心。）" ]
      },
      f_shyren: {
         name: "鑄廠 - 售貨機",
         text: () =>
            SAVE.data.b.killed_shyren
               ? [ "<32>{#p/human}* (A sad stillness permeates the air, filling you with determination.)" ]
               : SAVE.data.n.plot < 40
               ? [ "<32>{#p/human}* (A quiet hum echoes closeby, filling you with determination.)" ]
               : [ "<32>{#p/human}* (The sound of music fills you with determination.)" ]
      },
      f_tunnel: {
         name: "鑄廠 - 垃圾場",
         text: () =>
            SAVE.data.n.plot < 42.1
               ? [ "<32>{#p/human}* (Getting lost amongst the trash fills you with determination.)" ]
               : [ "<32>{#p/human}* (Finding yourself back amongst the trash fills you with determination.)" ]
      }
   }
};


// END-TRANSLATE
