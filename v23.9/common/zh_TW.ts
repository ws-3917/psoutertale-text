import { battler, choicer, pager, player, world } from '../../code/systems/framework';
import { SAVE } from '../../code/systems/save';

// START-TRANSLATE

const text = {
   _0: {
      _1: "The player did everything they could...",
      _2: "But alas, {^3}his fate was sealed, {^3}and...",
      _3: "No addendum to the story could unravel it.",
      _4: "There was no scenario in which the player could truly be satisfied.",
      _5: "Is this what they really deserve?",
      _6: "To live in bittersweet agony, {^3}knowing he could never be...",
      _7: "No...{^5}\nI will not allow it.",
      _8: "If bending the fabric of spacetime is what it takes, then...",
      _9: "So be it.",
      _10: "I will not rest until the task is done."
   },

   a_common: {
      bullybed: [
         [
            "<32>{#p/human}* （...）",
            "<32>{#p/human}* （你醒了。）",
            "<32>{#p/human}* （前哨站沒有任何變化。）"
         ],
         [
            "<32>{#p/human}* （你找遍了每個角落，\n  希望能發現生命的跡象。）\n* （一無所獲。）",
            "<32>{#p/human}* （你找了一遍，一遍，又一遍...）",
            "<32>{#p/human}* （一無所獲。）"
         ],
         [
            "<32>{#p/human}* （你找到了之前乘坐的飛船。）\n* （它已經徹底被毀。）",
            "<32>{#p/human}* （你試圖尋找怪物留下的飛船。）",
            "<32>{#p/human}* （但似乎...\n  哪怕一艘，都沒給你留下。）"
         ],
         [
            "<32>{#p/human}* （你去了實驗室，\n  希望能找到飛船的藍圖和部件。）",
            "<32>{#p/human}* （藍圖還在，部件也有剩餘...）",
            "<32>{#p/human}* （然而，此時核心能量已所剩無幾。\n  無法讓你發射飛船。）"
         ],
         [
            "<32>{#p/human}* （你試圖重置。）\n* （什麼都沒發生。）",
            "<32>{#p/human}* （你再次嘗試重置。）",
            "<32>{#p/human}* （什麼都沒發生。）"
         ],
         [
            "<32>{#p/human}* （絕望之中，你撥了Toriel的號碼。）\n* （沒有回應。）",
            "<32>{#p/human}* （你又給Papyrus，Undyne打電話...）",
            "<32>{#p/human}* （沒有回應。）"
         ],
         [
            "<32>{#p/human}* （...）",
            "<32>{#p/human}* （你已經不記得在這裏度過了多久。）",
            "<32>{#p/human}* （幾個星期？幾個月？幾年？）\n* （無從得知。）",
            "<32>{#p/human}* （你把核心的能量消耗調至最低...）",
            "<32>{#p/human}* （即便如此，終有一天也會用盡。）"
         ],
         [
            "<32>{#p/human}* （重力逐漸消失。）",
            "<32>{#p/human}* （溫度開始下降。）",
            "<32>{#p/human}* （大氣層即將解體。）",
            "<32>{#p/human}* （沒有了能量，前哨站將無法生存。）"
         ],
         [
            "<32>{#p/human}* （不知爲何，你感到平靜。）",
            "<32>{#p/human}* （你平靜地接受了自己的死亡。）",
            "<32>{#p/human}* （既然不可避免，那就隨它去吧。）",
            "<32>{#p/human}* （空氣即將消散。）\n* （最後一刻，你回憶起自己的旅程。）",
            "<32>{#p/human}* （從你離開人類世界的那一天，\n  一直到怪物重獲自由的那一天。）"
         ],
         [
            "<32>{#p/human}* （空氣徹底消失。）",
            "<32>{#p/human}* （你開始窒息。）",
            "<32>{#p/human}* （生命正在離你而去。）",
            "<32>{#p/human}* （看來，終點就是...）"
         ]
      ],
      neutral1: () => [ "<32>{#s/phone}{#p/event}* 滴滴，滴滴...", "<32>{#s/equip}{#p/event}* 滴..." ],
      neutral2: () => [ "<32>{#s/phone}{#p/event}* 滴滴，滴滴...", "<32>{#s/equip}{#p/event}* 滴..." ],
      lastblook1: [
         () => [
            "<32>{#p/napstablook}* oh...\n* hey frisk......",
            ...(SAVE.data.b.ufokinwotm8
               ? [
                    "<32>* ...",
                    "<32>* ... huh?\n* what's with that look?",
                    "<32>* did i... get in your way?",
                    "<32>* ...",
                    "<32>* oh......\n* i did, didn't i.........",
                    "<32>* sorry...",
                    "<32>* force of habit......",
                    "<32>* i'll... just be out of your way now......",
                    "<32>* please......\n* forgive me............"
                 ]
               : [
                    "<32>* they're still out there building the front door, so...",
                    "<32>* not much point in trying to go there, i guess",
                    ...(SAVE.data.b.c_state_secret4 && !SAVE.data.b.c_state_secret4_used
                       ? [
                            "<32>* ...",
                            "<32>{#p/human}* (You repeat the secret told to you by Napstablook in Archive Six.)",
                            "<32>{#p/napstablook}* a magic trick...?",
                            "<32>* wait...",
                            "<33>* i think i know what you mean...\n* let me try..."
                         ]
                       : [])
                 ])
         ],
         () => [
            ...(SAVE.data.b.c_state_secret4_used
               ? [ "<32>{#p/napstablook}* heh...\n* i really appreciate everything you've done, frisk." ]
               : [ "<32>{#p/napstablook}* hey...\n* i really appreciate everything you've done, frisk." ]),
            "<32>* setting us free and all...",
            "<32>* ...",
            "<32>* the truth is, my cousins and i started to think we'd never escape.",
            "<32>* it'd been so long since the last human arrived, and...",
            "<32>* considering what we recently found out about the humans...",
            "<32>* about how they all left the home galaxy...",
            "<32>* it's a miracle you even came to the outpost at all."
         ],
         () =>
            SAVE.data.b.a_state_hapstablook
               ? [
                    "<32>{#p/napstablook}* oh yeah, about my cousins...",
                    "<32>* after the whole mettaton thing, it's been going pretty good.",
                    "<32>* we've been talking it over, and...",
                    "<32>* ... we've decided to re-open the snail farm here on eurybia.",
                    "<32>* mettaton's doing the advertising, while i and the others look after the snails.",
                    "<32>* we even found a place we could stay once we get settled in...",
                    "<32>* a very kind house told us we could live there.",
                    "<32>* apparently, it's the same one undyne used to live in..."
                 ]
               : [
                    "<32>{#p/napstablook}* oh right... my cousins.",
                    "<32>* i don't really know if i should be telling you this, but...",
                    "<32>* we sort of figured out that mettaton might be our long-lost cousin.",
                    "<32>* the others and i tried to ask him about it, but...",
                    "<32>* ... it didn't really go the way we'd hoped.",
                    "<32>* then, everyone was blaming each other for messing it up...",
                    "<32>* i... haven't felt like talking with them since.",
                    "<32>* yeah... this was a bad topic",
                    "<32>* sorry..."
                 ],
         () => [
            ...(SAVE.data.b.a_state_hapstablook
               ? [ "<32>{#p/napstablook}* ...", "<32>* speaking of families..." ]
               : [ "<32>{#p/napstablook}* ...", "<32>* hey...\n* even if my family's not doing to well..." ]),
            "<32>* yours is only just getting started.",
            ...(SAVE.data.b.f_state_kidd_betray
               ? [ "<32>* you might not have any new siblings, but..." ]
               : SAVE.data.b.svr
               ? [ "<32>* even with those new siblings of yours..." ]
               : [ "<32>* even with that new sibling of yours..." ]),
            "<32>* i get the feeling asgore's going to take really good care of you.",
            "<32>* how do i know?",
            "<32>* well, recently, i found out he was the hairy guy who came to our farm all the time.",
            "<32>* he'd always take such good care of the snails he purchased...",
            "<32>* even healing them if they ever got hurt before dying of natural causes.",
            "<32>* if he cared that much for little space creatures, he'll care even more for you."
         ],
         () => [
            "<32>{#p/napstablook}* ... you know...\n* before the snail farm, and...",
            "<33>* before the outpost...",
            "<32>* my life on the old homeworld was a quiet one.",
            "<32>* that old homeworld...",
            "<32>* it really was a special place.",
            "<32>* the way the sky set itself on fire every day...",
            "<32>* how everyone who lived there was so at peace before the war...",
            "<32>* back then, i didn't think anything of it.",
            "<32>* now... after nearly two hundred years of captivity......",
            "<32>* i realized i'd been taking it all for granted."
         ],
         () => [
            "<32>{#p/napstablook}* well, anyway.\n* the old homeworld was great and all...",
            "<32>* but the new one's got a lot going for it, too.",
            "<32>* like the wildlife.",
            "<32>* when i traveled the surface earlier, i ran into some of it...",
            "<32>* and that's when i saw something interesting happen",
            "<32>* the creatures... starting using magic.",
            "<32>* when i mentioned this to alphys, she said the planet didn't have any magic...",
            "<32>* not according to the scans they took when we first arrived.",
            "<32>* has our arrival to this world...",
            "<32>* ... given it something it didn't have before?"
         ],
         () => [
            "<32>{#p/napstablook}* ... heh.",
            "<32>* i've been rambling a lot, huh?",
            "<32>* i appreciate you listening to me, though",
            "<32>* it's really nice of you to do that for me, frisk.",
            "<32>* just wanted you to know that."
         ],
         () => [
            "<32>{#p/napstablook}* huh?\n* you still wanted to talk?",
            "<32>* ...",
            "<32>* oh......",
            "<32>* i guess i ran out of conversation topics",
            "<32>* i doubt i'd have anything else of interest to say, so...",
            "<32>* feel free to go do something else, now"
         ],
         () => [
            "<32>{#p/napstablook}* ... frisk, uh...",
            "<32>* i'm not really sure what to talk about anymore",
            "<32>* maybe... if you come back later today...",
            "<33>* i'll think of something else..."
         ],
         () => [
            "<32>{#p/napstablook}* ... oh.........",
            "<32>* you're.........\n* still here.........",
            "<32>* even though i have nothing else to say.........",
            "<32>* well... i guess, if you just wanted my company... then...",
            "<32>* feel free to stick around a while longer"
         ],
         () => [
            "<32>{#p/napstablook}* ... hmm...",
            "<32>* actually...",
            "<32>* ... would you like me to tell you a joke?",
            "<32>* i don't have much of a sense of humor, but i can try..."
         ],
         () => [
            "<32>{#p/napstablook}* okay...\n* here goes...",
            "<32>* if a ghost gets tired in the middle of the road, what does it do?",
            "<32>* ...",
            "<32>* answer... it {@fill:#ff0}naps to block{@fill:#fff} you.",
            "<32>* get it?\n* napstablook?\n* naps to block?",
            "<32>* yeah...\n* that was kinda bad"
         ],
         () => [
            "<32>{#p/napstablook}* ... you wanted me to tell you another joke?",
            "<32>* hmm... let me think about it..."
         ],
         () => [
            "<32>{#p/napstablook}* okay, let's see...",
            "<32>* if a ghost changed vessels so they could have a child, what would you call it?",
            "<32>* ...",
            "<32>* answer... a {@fill:#ff0}trans-parent.{@fill:#fff}.",
            "<32>* ... heh."
         ],
         () => [ "<32>{#p/napstablook}* ... you wanted me to tell you a third joke?", "<32>* well... if you insist..." ],
         () => [
            "<32>{#p/napstablook}* okay.\n* i've got it.",
            "<32>* if a restaurant hires a ghost to taste test their food, what does that make the ghost?",
            "<32>* ...",
            "<32>* answer... a {@fill:#ff0}food-in-spectre.{@fill:#fff}."
         ],
         () => [
            "<32>{#p/napstablook}* alright, alright.\n* maybe i got a little carried away with that one.",
            "<33>* but i hope you liked it anyway."
         ],
         () => [
            "<32>{#p/napstablook}* ...",
            "<32>* oh...",
            "<32>* ... i guess i'm at a loss for what to say.",
            "<32>* you've been such a good listener, i'd feel bad if i ran out of ideas.",
            "<32>* c'mon, blooky, think...",
            "<32>* ... what can you talk about..."
         ],
         () => [
            "<32>{#p/napstablook}* wait, hold on",
            "<32>* do you know anything about ghost food?",
            "<32>* that last joke kind of got me thinking about it.",
            "<32>* you must be confused... it's not really explained anywhere.",
            "<32>* if you like, i can tell you about it..."
         ],
         () => [
            "<32>{#p/napstablook}* ... so, ghost food...",
            "<32>* it's exactly like normal monster food, except...",
            "<32>* when preparing it...",
            "<32>* there's a special kind of spell you have to use to make it edible for ghosts.",
            "<32>* that's right... any monster food can become ghost food."
         ],
         () => [
            "<32>{#p/napstablook}* as it turns out, though...",
            "<32>* certain kinds of food are easier to convert than others.",
            "<32>* like... standard fruit.\n* or milkshakes.",
            ...(SAVE.data.b.item_blookpie
               ? [ "<32>* but something like that exoberry pie you bought from me..." ]
               : [ "<32>* but something like that exoberry pie i had in my shop..." ]),
            "<32>* that... would take a lot of magical power to make.",
            "<32>* the more complicated the food, the more difficult it is to convert into ghost food."
         ],
         () => [
            ...(SAVE.data.b.a_state_hapstablook
               ? [ "<32>{#p/napstablook}* this one time, my... er, mettaton made me a chocolate cake." ]
               : [ "<32>{#p/napstablook}* this one time, my cousin made me a chocolate cake." ]),
            "<32>* chocolate filling, chocolate icing... chocolate everything.",
            "<32>* if i didn't know any better, i'd think it was actual human food.",
            ...(SAVE.data.b.a_state_hapstablook
               ? [
                    "<32>* but somehow, he managed to convert all of that into a ghost food...",
                    "<32>* not for a special occasion, but just because he wanted to see me smile."
                 ]
               : [
                    "<32>* but somehow, they managed to convert all of that into a ghost food...",
                    "<32>* not for a special occasion, but just because they wanted to see me smile."
                 ]),
            "<32>* well... i did.\n* and we ate the cake together.",
            "<32>* and i was happy."
         ],
         () => [
            "<32>{#p/napstablook}* ...",
            "<32>* heh...\n* i think i'm gonna pretend to sleep for a while...",
            "<32>* it helps me unwind after a long day like this one.",
            "<32>* ... wait, it's morning...",
            "<32>* i guess that would make it a long night, then.",
            "<32>* days and nights...\n* that's going to take some getting used to.",
            "<32>* ...",
            "<32>* well... thanks for talking to me, frisk",
            "<32>* feel free to lay down next to me... if you like......",
            "<32>* ...",
            "<32>* Zzz... Zzz..."
         ],
         () => [
            "<32>{#p/napstablook}* Zzz... Zzz...",
            "<32>* Zzz... Zzz...",
            "<32>{#p/basic}* This ghost keeps saying 'z' out loud repeatedly, pretending to sleep.",
            choicer.create("* (Lay down next to it?)", "是", "否")
         ],
         () => [ "<32>{#p/basic}* The ghost is still here.", choicer.create("* (Lay down next to it?)", "是", "否") ]
      ],
      lastblook2: [ "<32>{#p/napstablook}* oooooooooooo......", "<32>* this is really nice......" ],
      lastblook3: [
         "<32>{#p/human}* （...）",
         "<32>* (You feel... something.)",
         "<32>{#p/napstablook}* oh, sorry... i should probably explain what this is...",
         "<32>* ...\n* so, uh...",
         "<32>* i took your body...\n* as a vessel...",
         "<32>* and now...... we inhabit the same space......",
         "<32>* i don't know why, but the last human who tried this... really liked it...",
         "<32>* so...",
         "<32>* maybe you will too..."
      ],
      lastblook4: [
         "<32>{#p/napstablook}* well, we can stay like this as long as you don't try to move.",
         "<32>* so...\n* only try to move around when you want it to end, i guess."
      ],
      lastblook5: [
         "<32>{#p/napstablook}* well...\n* i hope you liked that...",
         "<32>* or at least found it kind of interesting...",
         "<32>* or something..."
      ],
      view: [ choicer.create("* (Are you ready to go outside?)", "是", "否") ],
      computer1: () =>
         SAVE.data.b.ufokinwotm8
            ? [ "<32>{#p/human}* (But you didn't feel like wasting your time here.)" ]
            : [ "<32>{#p/basic}* The computer's offline, but there's an empty slot for a computer chip." ],
      computer2: [ choicer.create("* (Insert the Computer Chip?)", "是", "否") ],
      computer3: [ "<32>{#p/human}* (You decide not to insert.)" ],
      computer4: [
         "<32>{#p/basic}* Ah!\n* Thank you!\n* Thank you so much!",
         "<32>* You really took care of me!\n* You have found a computer very far away indeed!",
         "<32>* ...",
         "<32>* I have established a link between this computer and my body on the outpost.",
         "<32>* ...",
         "<32>* I never could have imagined how it would feel to exist in two places at once!",
         "<32>* It is... incredible...",
         "<32>* I shall not forget this deed, fellow traveler!"
      ],
      computer5: [ "<32>{#p/basic}* Thank you, fellow traveler.\n* I owe you my future." ],
      end1: [
         "<25>{*}{#p/asgore}{#f/6}{#v/1}* This is emergency program one.{^20}{%}",
         "<25>{*}{#p/asgore}{#f/6}{#v/1}* Initiating automated self-destruct protocol.{^20}{%}"
      ],
      end2: [
         "<25>{*}{#p/asgore}{#f/6}{#v/1}* This is emergency program one.{^20}{%}",
         "<25>{*}{#p/asgore}{#f/6}{#v/1}* The self-destruct protocol has been terminated remotely.{^20}{%}",
         "<25>{*}{#p/asgore}{#f/6}{#v/1}* Systems powering down.{^20}{%}"
      ],
      save0: "<32>{#p/human}* ($(x) left.)",
      save1: "<32>{#p/human}{@fill:#f00}* （還剩下$(x)個。）",
      save2: "<32>{#p/human}{@fill:#f00}* （決心。）",
      save3: "<32>{#p/human}{@fill:#3f00ff}* （還剩下$(x)個。）",
      save4: "<32>{#p/human}{@fill:#3f00ff}* （決心。）",
      frontstop: pager.create(
         0,
         [
            "<32>{#p/basic}* Sorry, kiddo.\n* We're still out here building the front yard.",
            "<32>* And the front door.",
            "<32>* If you're looking for Asgore, he's out here with us.",
            "<32>* We'll be done in a few hours, so just sit tight for now."
         ],
         [ "<32>{#p/basic}* Just a few more hours, kiddo.", "<32>* Then you can come out." ],
         [ "<32>{#p/basic}* A few more hours." ]
      ),
      charatrigger: {
         _frontier1: pager.create(
            0,
            [
               "<32>{#p/basic}* So this is your room, huh?",
               "<32>* Kind of strange...",
               "<32>* ... but who am I kidding, this is you we're talking about.",
               "<32>* You'd sleep in a doggy bed if you had the choice.",
               "<32>* And you'd eat the dog food.",
               "<32>* And you'd like it if somebody tried to pet you whilst eating said dog food."
            ],
            [
               "<32>{#p/basic}* I'd offer you a treat, but...",
               "<32>* Even with my new ability to appear visually, I'm still just a ghost.",
               "<32>* You'll have to settle for ghost dog treats, I'm afraid."
            ],
            [
               "<32>{#p/basic}* Oh, right.\n* My new ability.",
               "<32>* I tried showing myself to Asriel like before, but he couldn't see me...",
               "<32>* So it looks like it only works for you right now.",
               "<32>* Still.\n* Better than nothing.",
               "<32>* At least you can actually walk up to and talk to me now."
            ],
            [ "<32>{#p/basic}* Like that, for example." ],
            [ "<32>{#p/basic}* Or that." ],
            [ "<32>{#p/basic}* Or even that!" ],
            [ "<32>{#p/basic}* ...", "<32>{#p/basic}* You can stop now." ],
            [ "<32>{#p/basic}* There's more to your room than me, isn't there?" ],
            [ "<32>{#p/basic}* ...", "<32>{#p/basic}* Maybe not." ],
            [ "<32>{#p/basic}* Maybe I'm all you've got." ],
            [ "<32>{#p/basic}* In which case...", "<32>{#p/basic}* We'll be here for a long time." ],
            [ "<32>{#p/basic}* A very long time." ],
            [ "<32>{#p/basic}* A very, very long time." ],
            [ "<32>{#p/basic}* A very, very long time indeed." ],
            [ "<32>{#p/basic}* Don't you have anything better to do?" ],
            []
         ),
         _frontier2: pager.create(
            0,
            [
               "<32>{#p/basic}* Ah, the humble hallway.",
               "<32>* For Asriel and I, it was the starting point of countless adventures...",
               "<33>* ... running dauntlessly across the various rooms of the house.",
               "<32>* I know, right?\n* So very adventurous.",
               "<32>* Sadly, we had to stop after the mirror got smashed in for the seven hundredth time.",
               "<32>* You wouldn't believe the excuses I'd come up with...",
               "<33>* Like when I blamed a particle collider for shooting a stray atom from Earth to the outpost.",
               "<33>* And somehow only hitting the glass because it \"phased\" through the wall.",
               "<32>* Yeah... that one might've been a stretch."
            ],
            [
               "<32>{#p/basic}* Nowadays, though, hallways are just hallways.",
               "<32>* And excuses are just excuses.",
               "<32>* Is there a valuable life lesson in there somewhere?\n* Probably.",
               "<32>* I will say, there's a kind of symbolism to a ghost in a hallway...",
               "<32>* With the whole \"between one place and another\" thing going on.",
               "<32>* Actually, that probably only applies to human ghosts.",
               "<32>* Monster ghosts are just born like that naturally...",
               "<32>* So, if anything, they'd be in the room at the beginning of the hallway...",
               "<32>* ... rather than standing in the middle of it."
            ],
            [
               "<32>{#p/basic}* Sorry.\n* Went on a tangent there.",
               "<32>* But what did you expect me to go on when you spoke to me in a boring hallway?",
               "<33>* Boring hallway, boring tangent.\n* That makes sense, right?"
            ],
            [ "<32>{#p/basic}* Or maybe it doesn't.\n* What do I know." ],
            [ "<32>{#p/basic}* Apart from the fact that I've run out of things to say." ],
            [ "<32>{#p/basic}* That, I know for sure." ],
            [ "<32>{#p/basic}* But what can you do?", "<32>{#p/basic}* ... wait, I know!\n* We could go to a new room!" ],
            []
         ),
         _frontier3: pager.create(
            0,
            [
               "<32>{#p/basic}* Ooh... Asgore's room.",
               "<32>* The big guy sure loves his diaries, huh?",
               "<32>* Even though he hasn't written anything into that one yet, I'm sure he'll do so soon.",
               "<32>* Reading them has always been a guilty pleasure of mine..."
            ],
            [
               "<32>{#p/basic}* What?\n* Everyone's got some kind of guilty pleasure, don't they?",
               "<32>* I wonder what yours would be...",
               "<32>* Maybe I'll find out later."
            ],
            [
               "<32>{#p/basic}* For now, though, I'll just be hanging around.",
               "<32>* Watching, waiting...",
               "<32>* ... ready to catch you the moment you do something you don't want me to see!"
            ],
            [ "<32>{#p/basic}* Okay, maybe I wouldn't actually go that far." ],
            [ "<33>{#p/basic}* Not while you're awake, anyway." ],
            []
         ),
         _frontier4: pager.create(
            0,
            [
               "<32>{#p/basic}* I took a peek outside, and they're STILL working on construction.",
               "<32>* The whole front of the house is STILL a big mess.",
               "<32>* And Asgore's... STILL tending to the ground...",
               "<32>* ... while the former CORE workers take their sweet, sweet time building the porch.",
               "<32>* I wonder what it'll look like when it's done...",
               "<32>* Hopefully, with Asgore in charge, it'll look better than what we've had before."
            ],
            [
               "<32>{#p/basic}* Actually, Asgore's only in charge of the design.",
               "<32>* Since construction started yesterday, Doge has been the one giving the orders.",
               "<32>* I snuck outside then, too.",
               "<32>* She's strict, but she seems to know what she's doing.",
               "<32>* Which is great, because as much as I love Asgore for who he is...",
               "<32>* He most certainly is NOT your ideal foreman."
            ],
            [
               "<33>{#p/basic}* Speaking of things being built, they finished the balcony earlier this morning.",
               "<32>* Monster Kid and Asriel are both outside...\n* ... sightseeing.",
               "<32>* They sure do that a lot together... they're probably waiting for you to join them.",
               "<32>* Once you're done taking in YOUR surroundings, you could go see them.",
               "<33>* Or you could just go back to your room.\n* Whatever floats your hoverboat."
            ],
            [
               "<32>{#p/basic}* Oh yeah, about boats...",
               "<32>* I guess those aren't really needed around here.",
               "<32>* But... Frisk!\n* There are places on this world you can't be without one.",
               "<32>* Especially the bog basins.\n* All that murky water...",
               "<32>* Just keep it in mind."
            ],
            [
               "<32>{#p/basic}* And no, you can't just get by swimming in those kinds of places.",
               "<33>* Only some of them.\n* And only at a good time of day."
            ],
            [
               "<32>{#p/basic}* Mind you, do monsters even have a sense of the time of day?",
               "<32>* Most WERE born in space..."
            ],
            [ "<32>{#p/basic}* ... maybe that's a question for another time of day." ],
            []
         ),
         _frontier5: pager.create(
            0,
            [
               "<32>{#p/basic}* Three little chairs at the dining table...",
               "<32>* One for you, one for Asriel, and one for Monster Kid.",
               "<32>* That's fine, really.\n* Asgore wouldn't know I'm here.",
               "<32>* Still...",
               "<32>* It does feel strange not to have a place there."
            ],
            [
               "<32>{#p/basic}* Asriel and I loved to swap the chairs around when Mom wasn't looking.",
               "<32>* Even Asgore would get in on it sometimes.\n* She... wasn't impressed.",
               "<32>* But it was all in good fun.",
               "<32>* Heck, he used to check under Asriel's chair for space creatures when he sat down.",
               "<32>* I'll never forget that time Toriel sat down on the chair, which we swapped beforehand...",
               "<33>* Asgore gave her the exact same treatment, and it was GLORIOUS.",
               "<32>* All of us were laughing... except for Toriel, who sat there in disbelief.",
               "<32>* Well.\n* She came around to it later."
            ],
            () => [
               "<32>{#p/basic}* But, yeah... she wasn't much for the chicanery we got up to.",
               SAVE.data.b.c_state_secret1_used && SAVE.data.b.c_state_secret5_used
                  ? "<32>* And even if she won't be here all the time..."
                  : "<32>* And although she probably won't visit here much at all...",
               "<32>* It's a good thing Asriel's got someone like you to calm him down.",
               "<32>* When he gets excited, he gets REALLY excited.",
               "<32>* ...",
               "<32>* ... or, used to, anyway."
            ],
            () => [
               "<32>{#p/basic}* I guess it's unfair to think of him as the same person he once was.",
               SAVE.flag.n.killed_sans
                  ? "<32>* With all that stuff he mentioned about trying to corrupt you..."
                  : "<32>* With all that stuff he mentioned about hurting you...",
               "<32>* He's probably a very different person by now.",
               "<32>* Not unlike myself.",
               "<32>* I just hope he can make the best of what he has, now.",
               "<32>* And that you'll be there for him when he needs you."
            ],
            [
               "<32>{#p/basic}* But I guess I'm starting to repeat myself.",
               "<32>* We've got a home, we've got sunlight... so there's no reason to complain!",
               "<32>* ... or something like that."
            ],
            []
         ),
         _frontier6: pager.create(
            0,
            [
               "<32>{#p/basic}* Of course they put a microwave in here.",
               "<32>* Of course they did.",
               "<32>* No doubt that'll be Asriel's primary source of food.",
               "<32>* Yeah, he's what you'd call a \"microwave master.\""
            ],
            [
               "<32>{#p/basic}* I mean, it's bad enough that so many of our ingredients are replicated these days...",
               "<32>* Formed with matter-energy conversion nonsense, rather than legitimate cooking.",
               "<32>* But at least that can still produce something palletable.",
               "<32>* Using the microwave is just...",
               "<32>* It's wrong.",
               "<32>* It's so very wrong."
            ],
            [
               "<33>{#p/basic}* I mean, that's just my opinion.",
               "<32>* You can feel free to disagree, and knowing you, you probably do...",
               "<32>* But some opinions...",
               "<32>* Let's just say some opinions are more correct than others."
            ],
            [
               "<32>{#p/basic}* All we can hope for is that Eurybia has a better selection of fresh ingredients.",
               "<32>* Considering Alphys was the one to seek out planets in the first place...",
               "<32>* You can't blame me for being at least a little wary."
            ],
            [
               "<33>{#p/basic}* If Asriel's a microwave master, Alphys would be a microwave overlord.",
               "<32>* That's all I'm saying."
            ],
            [ "<32>{#p/basic}* No, really.", "<32>* Won't say anything more." ],
            [ "<32>{#p/basic}* ...", "<32>{#p/basic}* Not in the kitchen, anyway." ],
            []
         ),
         _frontier7: pager.create(
            0,
            [
               "<32>{#p/basic}* The balcony's just outside...",
               "<32>* I wonder if the birds are saying anything interesting.",
               "<33>* Like \"what a nice house!\"\n* Or \"the weather's great today.\"",
               "<32>* Maybe they don't like the house OR the weather.\n* That'd be... kind of sad.",
               "<32>* Maybe they're not even birds.\n* Who knows what kinds of sounds birds make here.",
               "<32>* Who knows if birds even exist here at all.",
               "<33>* For all we know, what we're hearing are the cries of the damned buried deep underground."
            ],
            [
               "<32>{#p/basic}* After the monsters have lived here long enough, the planet might gain some form of magic.",
               "<32>* If that happens, would the animals be affected, too?",
               "<32>* Would they become conscious?\n* Understand us?",
               "<32>* Would we understand them?",
               "<33>* If the sounds we're hearing really ARE cries of the damned, I'm not sure I'd want to know."
            ],
            [
               "<32>{#p/basic}* But yeah, planetary magic.",
               "<32>* I think that's what happened to Krios, when monsters first gained THEIR magic.",
               "<32>* Either that, or the planet already had magic, and gave it to them.",
               "<32>* We'd have to ask Terrestria about that sort of thing.",
               "<32>* She'd know."
            ],
            [
               "<32>{#p/basic}* Hey.\n* Don't be nervous about going out there, Frisk.",
               "<32>* I'm sure those two would be happy to see you there.",
               "<32>* And if my analysis of the position is right...",
               "<32>* The planet itself will, too."
            ],
            [ "<32>{#p/basic}* Don't quote me on that, though.", "<32>* I'm not much of a chess player." ],
            [
               "<32>{#p/basic}* The smartest move I've ever played in a board game was a double-jump in checkers.",
               "<32>* It was downhill from there."
            ],
            [
               "<32>{#p/basic}* And if we weren't buried in a jungle, it might be downhill from here, too.",
               "<32>* Not that I blame Asgore for choosing such a low-risk location.",
               "<32>* He's got two adopted children to think about now...",
               "<32>* Not to mention his own son."
            ],
            [ "<32>{#p/basic}* Mountainside living might be cool, but the jungle has its own appeal, too." ],
            []
         ),
         _frontier9: pager.create(
            0,
            [
               "<32>{#p/basic}* Righty-o.\n* The bathroom.",
               "<32>* The bathroom, the bathroom, the bathroom...",
               "<32>* Bathroom bathroom bathroom bathroom bathroom.",
               "<32>* ...",
               "<32>* Bathroom.",
               "<32>* ...",
               "<32>* Bathroom!!!"
            ],
            [
               "<32>{#p/basic}* Okay... I will admit.",
               "<32>* It is pretty cool that you've got extra-fluffy shampoo.",
               "<32>* Even if it doesn't actually make sense for a human to have it.",
               "<32>* Unless... you ARE turning into a goat...",
               "<32>* ... baaah?"
            ],
            [
               "<32>{#p/basic}* ...",
               "<32>* There's a distinct possibility you are not the only one who uses this bathroom."
            ],
            []
         ),
         _frontier10: pager.create(
            0,
            [
               "<32>{#p/basic}* So this is Monster Kid and Asriel's room...",
               "<32>* I don't have much to say.",
               "<32>* Though... that poster on the wall is pretty cool.",
               "<32>* The old homeworld...",
               "<32>* Only now, it's in sepia tone."
            ],
            [
               "<32>{#p/basic}* I'm honestly not surprised he made this room so much smaller than yours.",
               "<32>* He knows monsters very well.\n* If the bed's comfortable, who cares what room it's in?",
               "<32>* Not monsters, that's who!"
            ],
            [ "<32>{#p/basic}* ...", "<32>* That must be why Asriel slept in your bed last night as opposed to his." ],
            []
         ),
         _void: pager.create(
            0,
            [
               "<32>{#p/basic}* From what I can tell...",
               "<32>* This room belonged to someone who spent a long time doing one specific thing.",
               "<32>* If I had that kind of free time, I have no idea what I'd do.",
               "<32>* I do know I wouldn't spend it on such a tedious and demoralizingly-large project.",
               "<32>* But I'm not them, so I wouldn't know what goes through their head."
            ],
            []
         )
      },
      balconyX: [
         "<32>{#p/human}* (And yet, despite the sight ahead of you...)",
         "<32>{#p/human}* (... you can't help but feel as if there's something missing.)"
      ],
      balcony0: [ "<25>{#p/kidd}{#f/1}* Is THIS what living on a planet is like?\n* This is INCREDIBLE!" ],
      balcony1: [ "<25>{#p/kidd}{#f/3}* ... haha.", "<25>{#f/1}* I can't wait to explore it!" ],
      balcony2: () => [
         "<25>{#p/kidd}{#f/7}* ... wait...",
         "<25>{#f/1}* What if the two of us formed a group or something?",
         "<25>{#f/6}* We'd explore everything here, and then go to other worlds...",
         ...(SAVE.data.b.c_state_secret3_used
            ? [ "<25>{#f/1}* Then, with Dr. Alphys's wormholes, we can even go to other galaxies!" ]
            : [ "<25>{#f/1}* When we're done, we'll have a map of the whole galaxy!" ]),
         ...(SAVE.data.b.c_state_secret2_used
            ? [ "<26>{#f/13}* And we should TOTALLY have a secret handshake!\n* Like Gerson's!" ]
            : [])
      ],
      balcony3: [
         "<25>{#p/kidd}{#f/2}* Man, this is gonna be so cool...",
         "<25>{#f/1}* You and I are gonna do EVERYTHING together!"
      ],
      balcony1a: [
         "<25>{#p/asriel1}{#f/10}* What?\n* A whole planet of this?",
         "<25>{#f/20}* Pfft.\n* This is nothing...",
         "<25>{#f/17}* Just past the forest, there's a giant mountain...",
         "<25>{#f/17}* And a lake beyond that."
      ],
      balcony2a: [
         "<25>{#p/kidd}{#f/2}* That must be the lake with that slimy red goo...",
         "<25>{#f/1}* Gross AND awesome!"
      ],
      balcony3a: [ "<25>{#p/asriel1}{#f/1}* ... I dare you to swim." ],
      balcony4a: [ "<25>{#p/kidd}{#f/7}* ...", "<25>{#f/13}* Deal.\n* But only if you swim WITH me!" ],
      balcony5a: [
         "<25>{#p/asriel1}{#f/21}* Uh... I mean...",
         "<25>{#f/20}* Maybe we'd be better off if we stuck to dune racing."
      ],
      balcony6a: [ "<25>{#p/kidd}{#f/6}* You're not afraid of getting sticky red goo all over you, are you?" ],
      balcony7a: [
         "<25>{#p/asriel1}{#f/8}* ... ugh, of course not, you idiot, I just-",
         "<25>{#p/kidd}{#f/8}* ...",
         "<25>{#p/asriel1}{#f/25}* ... w-wait, I didn't m-mean to..."
      ],
      balcony8a: [ "<25>{#p/kidd}{#f/4}* Asriel...?", "<25>{#p/kidd}{#f/4}* Are you okay?" ],
      balcony9a: [
         "<25>{#p/asriel1}{#f/13}* ... I...",
         "<25>{#f/22}* I'm alright.\n* You didn't do anything wrong, okay?"
      ],
      balcony10a: [
         "<25>{#p/asriel1}{#f/21}* ... you WOULD just forgive me like that, wouldn't you...",
         "<25>{#f/23}* You're just an innocent monster kid.",
         "<25>{#p/kidd}{#f/1}* That's my name!"
      ],
      balcony11a: [
         "<25>{#p/kidd}{#f/4}* So what were you saying?",
         "<25>{#p/asriel1}{#f/13}* ...",
         "<25>{#f/13}* ... there are deserts, but the races would be done in the tubules."
      ],
      balcony12a: [ "<25>{#p/kidd}{#f/7}* Tubules??\n* What the heck??" ],
      balcony13a: [
         "<25>{#p/asriel1}{#f/10}* Uh...\n* Haven't you read the geological surveys?",
         "<25>{#p/kidd}{#f/1}* What's a geological survey?",
         "<25>{#p/asriel1}{#f/15}* ...",
         "<25>{#f/15}* The tubules are a region made up of... uh, tubes.",
         "<26>{#f/17}* Large tubes form cliffs, medium tubes form hills, and small tubes, well...",
         "<25>{#f/20}* They don't really do much, I guess.",
         "<25>{#p/kidd}{#f/1}* Oh!\n* That makes sense."
      ],
      balcony14a: [
         "<25>{#p/kidd}{#f/1}* Do you think there's other planets out there like this?",
         "<25>{#f/2}* Will we explore those, too?",
         "<25>{#p/asriel1}{#f/10}* Hmm...\n* No doubt there is..."
      ],
      balcony15a: () => [
         "<25>{#p/kidd}{#f/7}* Yo... what if we formed an exploration group!\n* To travel the stars!",
         "<25>{#p/asriel1}{#f/27}* ... huh.",
         "<25>{#p/kidd}{#f/6}* We'd start with this world, and find everything we can...",
         "<26>{#p/kidd}{#f/1}* Then we'd visit more worlds, and make a huge map of the whole galaxy!",
         ...(SAVE.data.b.c_state_secret2_used
            ? [ "<26>{#p/kidd}{#f/13}* And we should TOTALLY have a secret handshake!\n* Like Gerson's!" ]
            : []),
         ...(SAVE.data.b.c_state_secret3_used
            ? [
                 ...(SAVE.data.b.c_state_secret2_used
                    ? [ "<25>{#p/asriel1}{#f/13}* With any luck, we'll be hand-in-hand with other galaxies' races, too." ]
                    : [ "<25>{#p/asriel1}{#f/13}* With any luck, we'll be making maps of other galaxies, too." ]),
                 "<25>{#f/13}* Dr. Alphys's wormhole travel gives us the means to visit them.",
                 "<25>{#f/17}* We'd be a pan-galactic exploration group."
              ]
            : [
                 "<25>{#p/asriel1}{#f/17}* Woah, uh, slow down there kiddo...",
                 ...(SAVE.data.b.c_state_secret2_used
                    ? [
                         "<25>{#p/asriel1}{#f/17}* ... a secret handshake would be pretty cool, but...",
                         "<25>{#f/13}* ... as for exploring other planets..."
                      ]
                    : []),
                 "<26>{#f/13}* It took us long enough just to make it here, let alone another world."
              ])
      ],
      balcony16a: () =>
         SAVE.data.b.c_state_secret3_used
            ? [ "<26>{#p/kidd}{#f/14}* Oh yeah, I totally forgot about that!\n* We've GOTTA try that!" ]
            : [ "<25>{#p/kidd}{#f/3}* Haha. Maybe.\n* But we could still totally explore it!" ],
      balcony17a: [
         "<25>{#p/asriel1}{#f/17}* Just us, huh?",
         "<25>{#p/kidd}{#f/1}* Totally, dude!\n* Just the three of us!"
      ],
      balcony18a1: [ "<32>{#p/basic}* ... uh, don't you mean \"the four of us?\"" ],
      balcony18a2: [ "<25>{#p/asriel1}{#f/25}* ...！", "<25>{#f/25}* $(name)... you're..." ],
      balcony19a1: [ "<32>{#p/basic}* ... wait, NOW you can hear me?" ],
      balcony19a2: [
         "<32>{#p/basic}* I tried reaching out to you before, but... it didn't work.",
         "<32>* I wonder what changed..."
      ],
      balcony20a: [ "<25>{#p/kidd}{#f/6}* Haha. If you're friends with him, then you're friends with me." ],
      balcony21a: [ "<32>{#p/basic}* Wait, YOU can hear me?" ],
      balcony22a: [ "<25>{#p/kidd}{#f/1}* Kind of hard not to when you're standing there, y'know." ],
      balcony23a1: [ "<32>{#p/basic}* YOU CAN SEE ME!?!?" ],
      balcony23a2: [ "<32>{#p/basic}* Oh... my god..." ],
      balcony24a: [ "<33>{#p/basic}* Asriel, how did you not notice me standing here?\n* I'm not even hidden!" ],
      balcony25a: [ "<26>{#p/asriel1}{#f/23}* ... $(name), I..." ],
      balcony26a1: [
         "<32>{#p/basic}* Asriel, it's okay.\n* You don't have to be ashamed of it anymore.",
         "<32>* If you need to cry...",
         "<32>* ... you can."
      ],
      balcony26a2: [
         "<32>{#p/basic}* Having that extra SOUL inside of me must've made it hard to appear visually...",
         "<32>* Back on the outpost, when I did finally manage to do it...",
         "<32>* That very same SOUL was released shortly after.",
         "<32>* ... I guess this means I'll be visible all the time now?",
         "<32>* To be honest, I'm not sure how to feel about that."
      ],
      balcony27a: [ "<25>{#p/kidd}{#f/7}* Wait, are you a human too!?" ],
      balcony28a: [
         "<32>{#p/basic}* Excuse me?",
         "<33>* I'm a human GHOST who wants their GOAT brother to be happy.\n* Get it right. Sheesh."
      ],
      balcony29a: [ "<25>{#p/kidd}{#f/14}* ... Asriel is your BROTHER!?", "<25>{#p/kidd}{#f/4}* This is too much..." ],
      balcony30a: [ "<25>{#p/kidd}{#f/1}* But, uh, you guys are all cool as heck, which means I'll be okay." ],
      balcony31a: [ "<32>{#p/basic}* Oh, I KNOW I'm cool.\n* I'm the coolest human ghost this side of the continent." ],
      balcony32a: [
         "<25>{#p/asriel1}{#f/15}* $(name), you're the only human ghost this side of the continent.",
         "<25>{#f/17}* And the planet.",
         "<25>{#f/20}* And the galaxy.",
         "<25>{#f/13}* And the future, since I won't be taking Frisk's SOUL any time soon.",
         "<25>{#f/15}* And then dying... and then meeting them a hundred years later...",
         "<25>{#f/17}* Etcetera, etcetera, radical circumstances notwithstanding."
      ],
      balcony33a: [
         "<32>{#p/basic}* Pfft.\n* You're funny, Asriel.",
         "<32>* Being the only human ghost doesn't exclude you from being the coolest human ghost.",
         "<32>* A certain handsome skeleton would concur."
      ],
      balcony34a1: [
         "<25>{#p/kidd}{#f/2}* $(name), huh?",
         "<25>{#f/1}* That's a nice name.",
         "<25>{#p/kidd}{#f/6}* My name is Monster Kid."
      ],
      balcony34a2: [ "<25>{#p/asriel1}{#f/15}* ... did you just...", "<33>{#p/basic}* Asriel.\n* They said the thing." ],
      balcony35a1: [
         "<25>{#p/asriel1}{#f/10}* They really did...",
         "<25>{#p/kidd}{#f/4}* What?\n* Did I say something wrong, or...",
         "<33>{#p/basic}* No, no, you're fine.\n* You just... uh, reminded us of something.",
         "<25>{#p/kidd}{#f/1}* Oh.\n* I hope it was something good, then."
      ],
      balcony35a2: [ "<25>{#p/asriel1}{#f/23}* ... it was." ],
      balcony36a: [
         "<25>{#p/kidd}{#f/3}* Hey... thanks for being here, guys.",
         "<25>{#f/1}* With friends like you, living here is gonna be the best!"
      ],
      balcony37a: [
         "<33>{#p/basic}* ... heh.\n* If we were just friends, maybe.\n* But we're more than that.",
         "<25>{#p/kidd}{#f/7}* ...?"
      ],
      balcony38a: [ "<25>{#p/asriel1}{#f/17}* We're your family." ],
      balcony39a: [
         "<25>{*}{#p/kidd}{#f/1}* Oh!\n* Oh!\n* Does that mean we can- {%}",
         "<25>{*}{#f/1}* eat together and tell stories and go for nice walks in the park and- {%}",
         "<25>{*}{#p/asriel1}{#f/20}* Yes, yes, of course- {%}",
         "<25>{*}{#p/kidd}{#f/1}* We could have sleepovers at other people's houses and- {^999}"
      ],
      trivia: {
         bed: (kiddo: boolean) =>
            SAVE.data.b.svr && !player.metadata.voidkey?.room.startsWith('_frontier') // NO-TRANSLATE

               ? [ "<25>{#p/asriel1}{#f/20}* This bed looks like it hasn't been washed in three years..." ]
               : [
                    SAVE.data.b.ufokinwotm8
                       ? "<32>{#p/human}* (You run your hands through the covers of the bed, and note the wear and tear.)"
                       : "<33>{#p/basic}* This bed, albeit well-made, has seen a lot of use.",
                    ...(kiddo ? [ "<25>{#p/kidd}{#f/1}* Looks comfy! " ] : [])
                 ],
         plushie: (kiddo: boolean) =>
            SAVE.data.b.svr && !player.metadata.voidkey?.room.startsWith('_frontier') // NO-TRANSLATE

               ? [ "<25>{#p/asriel1}{#f/20}* Whoever lives here must really like plushies." ]
               : [
                    SAVE.data.b.ufokinwotm8
                       ? "<32>{#p/human}* (You glance uninterestedly at the otherwise soft plushie.)"
                       : "<32>{#p/basic}* I see I'm not the only one who likes the soft things.",
                    ...(kiddo ? [ "<25>{#p/kidd}{#f/3}* Aw, cute." ] : [])
                 ],
         computer: (kiddo: boolean) =>
            SAVE.data.b.svr && !player.metadata.voidkey?.room.startsWith('_frontier') // NO-TRANSLATE

               ? [
                    "<25>{#p/asriel1}{#f/15}* I once dedicated myself to learning how to code...",
                    "<25>{#p/asriel1}{#f/16}* ... whoever wrote this stuff should reconsider their life choices."
                 ]
               : [
                    SAVE.data.b.ufokinwotm8
                       ? "<32>{#p/human}* (You wonder if something like this could be the answer to your dissatisfaction.)"
                       : "<32>{#p/basic}* Color-coded text fills the screen in a monospaced font.",
                    ...(kiddo ? [ "<25>{#p/kidd}{#f/1}* How OLD is this thing?" ] : [])
                 ],
         flowers: (kiddo: boolean) =>
            SAVE.data.b.svr && !player.metadata.voidkey?.room.startsWith('_frontier') // NO-TRANSLATE

               ? [ "<25>{#p/asriel1}{#f/10}* Huh?\n* What sort of flower is this anyway?" ]
               : [
                    SAVE.data.b.ufokinwotm8
                       ? "<32>{#p/human}* (You wonder where these flowers could have come from.)"
                       : "<32>{#p/basic}* Flowers, the universal symbol for sentimentality.",
                    ...(kiddo ? [ "<25>{#p/kidd}{#f/1}* I don't think I've ever seen flowers like THESE before..." ] : [])
                 ],
         x_window: () =>
            SAVE.data.b.ufokinwotm8
               ? [ "<32>{#p/human}* (You can tell it's going to be a day of some variety.)" ]
               : [
                    ...(SAVE.data.b.svr ? [ "<32>{#p/human}* (You can tell it's going to be a nice day.)" ] : []),
                    "<32>{#p/basic}* It's the start of a new day."
                 ],
         x_cab: () =>
            SAVE.data.b.ufokinwotm8
               ? [ "<32>{#p/human}* (It's a cabinet full of clothes you feel indifferent about.)" ]
               : [
                    ...(SAVE.data.b.svr ? [ "<32>{#p/human}* (It's a cabinet full of your favorite clothes.)" ] : []),
                    "<32>{#p/basic}* Various clothes can be found within the cabinet."
                 ],
         x_bed: () =>
            SAVE.data.b.ufokinwotm8
               ? [ "<32>{#p/human}* (It's a bed.)\n* (You wish you could just go back to sleep.)" ]
               : [
                    ...(SAVE.data.b.svr
                       ? [ "<32>{#p/human}* (It's a comfortable bed.)\n* (You had a good night's rest.)" ]
                       : []),
                    "<32>{#p/basic}* It's brand new, just for you."
                 ],
         x_lamp: () => [
            ...(SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
               ? [ "<32>{#p/human}* (It's a lamp.)\n* (It's just the right height for you to reach it.)" ]
               : []),
            ...(SAVE.data.b.ufokinwotm8 ? [] : [ "<32>{#p/basic}* It's an oddly short lamp." ])
         ],
         x_toybox: () =>
            SAVE.data.b.ufokinwotm8
               ? [ "<32>{#p/human}* (The toys are even less interesting than before.)" ]
               : [
                    ...(SAVE.data.b.svr
                       ? [ "<32>{#p/human}* (The toys appear to be rather interesting for once.)" ]
                       : []),
                    "<32>{#p/basic}* Perhaps these toys aren't so bad after all..."
                 ],
         x_wash: () =>
            SAVE.data.b.ufokinwotm8
               ? [ "<32>{#p/human}* (You stare into the drain.)" ]
               : [
                    ...(SAVE.data.b.svr
                       ? [ "<32>{#p/human}* (But your hands were already as clean as they could be.)" ]
                       : [ "<32>{#p/human}* (You wonder if your hands could be a little cleaner.)" ]),
                    "<32>{#p/basic}* It's a sink.\n* Don't sink too much time into thinking about it."
                 ],
         x_toilet: () =>
            SAVE.data.b.ufokinwotm8
               ? [ "<32>{#p/human}* (You ignore the toilet.)" ]
               : [
                    ...(SAVE.data.b.svr
                       ? [ "<32>{#p/human}* (You tip up the toilet lid.)\n* (You then tip it back down.)" ]
                       : []),
                    ...(SAVE.data.b.ufokinwotm8 ? [] : [ "<32>{#p/basic}* It's a toilet.\n* What else would it be." ])
                 ],
         x_bathrub: () =>
            SAVE.data.b.ufokinwotm8
               ? [ "<32>{#p/human}* (You wonder if a warm bath would make you feel better.)" ]
               : [
                    ...(SAVE.data.b.svr ? [ "<32>{#p/human}* (You look forward to taking your next warm bath.)" ] : []),
                    "<32>{#p/basic}* Everything in this room is fit exactly to your size..."
                 ],
         x_mirror: () => [
            ...(SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
               ? [ "<32>{#p/human}* (As you stare into the mirror, you reflect on the journey you took to get here.)" ]
               : []),
            ...(SAVE.data.b.ufokinwotm8 ? [] : [ "<32>{#p/basic}* No matter what happens, it'll always be you." ])
         ],
         x_sign1: () => [
            ...(SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
               ? [ "<32>{#p/human}* (The sign describes adjusting to life on a new planet.)" ]
               : []),
            ...(SAVE.data.b.ufokinwotm8
               ? []
               : [
                    "<33>{#p/basic}* It's a five-step guide on how to adjust to planet-bound life.\n* They all amount to \"have fun.\""
                 ])
         ],
         x_sign2: () => [
            ...(SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
               ? [ "<32>{#p/human}* (The sign outlines tasks that are yet to be completed.)" ]
               : []),
            ...(SAVE.data.b.ufokinwotm8
               ? []
               : [ "<33>{#p/basic}* It's a list of various pending tasks relating to building a new community." ])
         ],
         x_plant: () =>
            SAVE.data.b.ufokinwotm8
               ? [ "<32>{#p/human}* (You caress the plant and sigh as it sighs with you.)" ]
               : [
                    ...(SAVE.data.b.svr
                       ? [ "<32>{#p/human}* (You caress the plant and smile as it smiles back at you.)" ]
                       : []),
                    "<32>{#p/basic}* This plant will always be happy to see you."
                 ],
         x_desk: () =>
            SAVE.data.b.ufokinwotm8
               ? [ "<32>{#p/human}* (You stare into the empty diary, wishing you could write your own story.)" ]
               : [
                    ...(SAVE.data.b.svr
                       ? [
                            "<32>{#p/human}* (You stare into the empty diary, wondering what stories are yet to be told.)"
                         ]
                       : []),
                    "<32>{#p/basic}* It's a diary.\n* It's completely blank.",
                    "<32>{#p/basic}* Asgore's favorite diary- writing chair must still be on the transport ship."
                 ],
         x_paperwork: () => [
            ...(SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
               ? [ "<32>{#p/human}* (You wonder if any of these items could belong to you.)" ]
               : []),
            ...(SAVE.data.b.ufokinwotm8
               ? []
               : [ "<32>{#p/basic}* The papers list various items that have yet to be taken in." ])
         ],
         x_trash: () => [
            ...(SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
               ? [ "<32>{#p/human}* (You can't make out what's in the trash...)" ]
               : []),
            ...(SAVE.data.b.ufokinwotm8
               ? []
               : [
                    "<32>{#p/basic}* There is a crumpled up recipe for Starling Flower Tea.\n* That's not his trash can..."
                 ])
         ],
         x_bed_large: () => [
            ...(SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
               ? [ "<32>{#p/human}* (The bed still seems to be way too large for you.)" ]
               : []),
            ...(SAVE.data.b.ufokinwotm8 ? [] : [ "<32>{#p/basic}* Despite everything, it's still a king-sized bed." ])
         ],
         x_cactus: () =>
            SAVE.data.b.ufokinwotm8
               ? [ "<32>{#p/human}* (You poke the cactus.)\n* (It pokes back.)" ]
               : [
                    ...(SAVE.data.b.svr
                       ? [
                            "<32>{#p/human}* (You poke the cactus.)\n* (The cactus is touched by your sense of affection.)"
                         ]
                       : []),
                    "<32>{#p/basic}* So she finally gave up her inner cactus, eh...?"
                 ],
         x_booktable: () =>
            SAVE.data.b.ufokinwotm8
               ? [ "<32>{#p/human}* (But you weren't in the mood to read a diary.)" ]
               : [
                    ...(SAVE.data.b.svr
                       ? [ "<32>{#p/human}* (The book contains the diary entries of Monster Kid.)" ]
                       : [ "<32>{#p/basic}* It's Monster Kid's diary." ]),
                    "<32>{#p/human}* (You read the first and only entry...)",
                    "<32>{#p/kidding}* \"So asgores my dad now huh? Thats weird. But also AWESOME!\"",
                    "<32>{#p/kidding}* \"Asgore said i should put on some new clothes so maybe ill do that later.\"",
                    "<32>{#p/kidding}* \"He also said i should write a diary to keep track of things.\"",
                    "<32>{#p/kidding}* \"Im pretty good at reading and writing so this should be really easy.\"",
                    "<32>{#p/kidding}* \"And frisk can totally help me if i do something wrong!\"",
                    "<32>{#p/kidding}* \"Frisk if youre reading this please tell me what i did wrong.\"",
                    "<32>{#p/human}* (You close the diary.)"
                 ],
         x_bed_left: () => [
            ...(SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
               ? [ "<32>{#p/human}* (You check under the covers to make sure it's safe to sleep.)" ]
               : []),
            ...(SAVE.data.b.ufokinwotm8 ? [] : [ "<32>{#p/basic}* It's Monster Kid's bed." ])
         ],
         x_knickknacks: () => [
            ...(SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
               ? [ "<32>{#p/human}* (You re-arrange the knick knacks to pass the time.)\n* (You hope nobody notices.)" ]
               : []),
            ...(SAVE.data.b.ufokinwotm8 ? [] : [ "<32>{#p/basic}* It's a shelf full of various toys and knick knacks." ])
         ],
         x_bed_right: () =>
            SAVE.data.b.svr
               ? [
                    "<32>{#p/human}* (You pat the plushie.)\n* (It might just be you, but it seems a little happier.)",
                    "<32>{#p/basic}* It's Asriel's bed.\n* It doesn't look like it's been used yet."
                 ]
               : [],
         x_bookshelf: (() => {
            const pages = pager.create(
               1,
               [
                  "<32>{#p/basic}* \"EURYBIA GEOLOGICAL SURVEY\"\n* \"Authored by the Royal Science Division (RSD).\"",
                  "<32>* \"Preliminary scans of the surface have revealed vast diversity in its ecosystems.\"",
                  "<32>* \"Each section of this report will concentrate on biomes of a specific type.\"",
                  "<32>* \"Sections are as follows.\"",
                  "<32>* \"SECTION 001 - Subterranian\"\n* \"SECTION 002 - Oceanic\"\n* \"SECTION 003 - Structural\"",
                  "<32>* \"SECTION 004 - Magnetic\"\n* \"SECTION 005 - Airborne\"\n* \"SECTION 006 - Forested\"",
                  "<32>* \"SECTION 007 - Spired\"\n* \"SECTION 008 - Metallic\"\n* \"SECTION 009 - Crystalline\"",
                  "<32>* Jeez, how many ARE there?\n* Let's just stop reading here."
               ],
               [
                  "<32>{#p/basic}* \"Howdy, fellow gardeners.\"",
                  "<32>* \"When it comes to starling flowers, the line between growth and stagnation...\"",
                  "<32>* \"Is access to open space.\"",
                  "<32>* \"That is why they were commonly grown in Aerialis...\"",
                  "<32>* \"Though, on Eurybia, the best place to grow them is unknown.\"",
                  "<32>* \"For the moment, it is recommended that they be grown in orbit.\"",
                  "<32>* \"Space station five will be deployed on date K-615.12.\"",
                  "<32>* \"If this date has not yet arrived, a shuttlecraft will suffice.\""
               ],
               [
                  "<32>{#p/basic}* \"In the beginning, there was nothing.\"",
                  "<32>* \"Then... the human appeared out of thin air.\"",
                  "<32>* \"The human and the bunny gave each other a big, fluffy hug...\"",
                  "<32>* \"But then...!\"\n* \"The human and the bunny could hug no longer.\"",
                  "<32>* \"Shocking!\"\n* \"Their world views had been shaken to their cores.\"",
                  "<32>* \"Later, after much time had passed, the human began working on a solution.\"",
                  "<32>* \"Day by day, the human worked tirelessly, all so they could hug their bunny once again.\"",
                  "<32>* \"Eventually... the human's work was complete, and the bunny was ready.\"",
                  "<32>* \"The human opened their arms, waiting for the bunny to approach...\"",
                  "<32>* \"Before they knew it, the bunny was already in their arms!\"",
                  "<32>* \"And so it was that the human and the bunny lived fluffily ever after.\""
               ],
               () =>
                  SAVE.data.b.c_state_secret3_used
                     ? [
                          "<32>{#p/basic}* \"Wormhole experiment report!\"\n* \"From Dr. Alphys to Asgore\"",
                          "<32>* \"Progress on my wormhole experiment is going smoothly!\"",
                          "<32>* \"Ever since Frisk forwarded Dr. Roman's equations, I've made steady progress.\"",
                          "<32>* \"I've even managed to send small objects through the aperture...\"",
                          "<32>* \"In my next test, I'll send a tethered scanner through and see what it picks up.\"",
                          "<32>* \"Wormholes for monster travel could be here as soon as K-616.05!\""
                       ]
                     : [
                          "<32>{#p/basic}* \"Wormhole experiment report.\"\n* \"From Dr. Alphys to Asgore\"",
                          "<32>* \"Progress on my wormhole experiment has hit a snag.\"",
                          "<32>* \"Due to Dr. Roman's incomplete equations, I haven't managed to create a stable wormhole.\"",
                          "<32>* \"I'll keep trying, but I can't go too fast without putting my life at risk.\"",
                          "<32>* \"In my next experiment, I'll see if I can get the aperture to last a little longer...\"",
                          "<32>* \"Wormholes for monster travel won't be coming any time soon.\""
                       ],
               [
                  "<32>{#p/basic}* \"You have received an invitation to the transport ship triumph!\"",
                  "<32>* \"Events will be held from stem to stern, including hovercar races and dance raves!\"",
                  "<32>* \"When we reach the homeworld, a final event will be held on the forward section lounge!\"",
                  "<32>* \"This is an experience you won't want to miss, so get up and get loud while you can!\"",
                  "<32>* \"Please note that this invitation expires upon reaching the homeworld.\"",
                  "<32>* \"Can't wait to see you there!\""
               ],
               [
                  "<32>{#p/basic}* \"Toriel's fur care guide, dated K-614.09.\"",
                  "<32>* \"When shedding fur, one must always take great care to dispose properly.\"",
                  "<32>* \"The trash can is the obvious choice, but I myself prefer the sink.\"",
                  "<32>* \"If you shed often, consider investing in a sink with garbage disposal.\"",
                  "<32>* \"Regarding softness, the side you sleep on will be the most affected.\"",
                  "<32>* \"If you prefer your head or body fur to be soft, sleep on your side.\"",
                  "<32>* \"To keep your arms and legs soft, sleep on your back.\"",
                  "<32>* \"Thank you, dear readers.\"\n* \"That will be all.\""
               ]
            );
            return () =>
               SAVE.data.b.ufokinwotm8
                  ? [ "<32>{#p/human}* (But you weren't in the mood to read a book.)" ]
                  : [
                       ...(SAVE.data.b.svr
                          ? [
                               "<32>{#p/human}* (The books on this bookshelf are capable of swapping their content on-demand.)"
                            ]
                          : [
                               "<32>{#p/basic}* The books are all blank, but get filled with the text of the book you select."
                            ]),
                       "<32>{#p/human}* (You select a book from the control panel, and pick it out once it's ready...)",
                       ...pages(),
                       "<32>{#p/human}* (You put the book back on the shelf.)"
                    ];
         })(),
         x_endtable: () =>
            SAVE.data.b.ufokinwotm8
               ? [
                    SAVE.data.b.water
                       ? "<32>{#p/human}* (You observe the end table, and the cup on top of it.)\n* (It seems disturbed.)"
                       : "<32>{#p/human}* (You observe the end table.)\n* (It seems disturbed.)"
                 ]
               : [
                    ...(SAVE.data.b.svr
                       ? [
                            SAVE.data.b.water
                               ? "<32>{#p/human}* (You observe the end table, and the cup on top of it.)\n* (It seems pleased.)"
                               : "<32>{#p/human}* (You observe the end table.)\n* (It seems pleased.)"
                         ]
                       : []),
                    "<32>{#p/basic}* At last...\n* A remarkable end table.",
                    ...(SAVE.data.b.water
                       ? [
                            "<33>{#p/basic}* It even has a cup of electro- dampening fluid on it.\n* Truly, a sippy you can rely on."
                         ]
                       : [])
                 ],
         x_chasgore: () => [
            ...(SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
               ? SAVE.data.b.c_state_secret1_used && SAVE.data.b.c_state_secret5_used
                  ? [ "<32>{#p/human}* (The chair strikes you as being where it belongs.)" ]
                  : [ "<32>{#p/human}* (The chair strikes you as being out of place.)" ]
               : []),
            ...(SAVE.data.b.ufokinwotm8
               ? []
               : [ "<32>{#p/basic}* A comfy reading chair...", "<32>* Doesn't seem like the right size for Asgore." ])
         ],
         x_window_left: () =>
            SAVE.data.b.ufokinwotm8
               ? [ "<32>{#p/human}* (Staring out the window, you wonder where you went wrong to deserve this feeling.)" ]
               : [
                    ...(SAVE.data.b.svr
                       ? [
                            "<32>{#p/human}* (Staring out the window, you feel nothing but excitement for the future ahead.)"
                         ]
                       : []),
                    "<32>{#p/basic}* The window accentuates the atmosphere outside."
                 ],
         x_window_right: () =>
            SAVE.data.b.ufokinwotm8
               ? [ "<32>{#p/human}* (Staring out the window, you ask yourself why things had to end up this way.)" ]
               : [
                    ...(SAVE.data.b.svr
                       ? [
                            "<32>{#p/human}* (Staring out the window, you remind yourself of how long you've waited to get here.)"
                         ]
                       : []),
                    "<32>{#p/basic}* The window enhances the atmosphere inside."
                 ],
         x_plant_left: () =>
            SAVE.data.b.ufokinwotm8
               ? [ "<32>{#p/human}* (You touch the plant lightly.)\n* (It understands your pain.)" ]
               : [
                    ...(SAVE.data.b.svr
                       ? [
                            "<32>{#p/human}* (You touch the plant lightly.)\n* (It shakes and bobs, relieved that you were here.)"
                         ]
                       : []),
                    "<33>{#p/basic}* A compassionate plant."
                 ],
         x_plant_right: () =>
            SAVE.data.b.ufokinwotm8
               ? [ "<32>{#p/human}* (You touch the plant lightly.)\n* (It promises things will get better for you.)" ]
               : [
                    ...(SAVE.data.b.svr
                       ? [ "<32>{#p/human}* (You touch the plant lightly.)\n* (It appreciates the gesture.)" ]
                       : []),
                    "<32>{#p/basic}* An optimistic plant."
                 ],
         x_sign3: () => [
            ...(SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
               ? [ "<32>{#p/human}* (The sign doesn't appear to hold anything of note.)" ]
               : []),
            ...(SAVE.data.b.ufokinwotm8
               ? []
               : [
                    "<32>{#p/basic}* It's a digital picture frame.\n* All it needs now are some good memories, in visual form."
                 ])
         ],
         x_chair1: () => [
            ...(SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
               ? [ "<32>{#p/human}* (You note the fairly large size of the dining chair.)" ]
               : []),
            ...(SAVE.data.b.ufokinwotm8
               ? []
               : SAVE.data.b.c_state_secret1_used && SAVE.data.b.c_state_secret5_used
               ? [ "<32>{#p/basic}* One of Asgore's dining chairs.\n* Fit for a mother." ]
               : [ "<32>{#p/basic}* One of Asgore's dining chairs.\n* Not fit for anyone." ])
         ],
         x_chair2: () => [
            ...(SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
               ? [ "<32>{#p/human}* (You note the small size of the dining chair.)" ]
               : []),
            ...(SAVE.data.b.svr
               ? [ "<32>{#p/basic}* One of Asgore's dining chairs.\n* Fit for a brother." ]
               : SAVE.data.b.ufokinwotm8
               ? []
               : [ "<32>{#p/basic}* One of Asgore's dining chairs.\n* Not fit for anyone." ])
         ],
         x_chair3: () =>
            SAVE.data.b.ufokinwotm8
               ? [ "<32>{#p/human}* (You wonder if this chair is still fit for a little angel.)" ]
               : [
                    ...(SAVE.data.b.svr
                       ? [
                            "<32>{#p/human}* (You note the perfect size of the dining chair.)",
                            "<32>{#p/basic}* It's fit just for you, Frisk."
                         ]
                       : [ "<32>{#p/basic}* One of Asgore's dining chairs.\n* Still fit for a child." ])
                 ],
         x_chair4: () => [
            ...(SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
               ? [ "<32>{#p/human}* (You note the slightly small size of the dining chair.)" ]
               : []),
            ...(SAVE.data.b.svr
               ? [ "<32>{#p/basic}* One of Asgore's dining chairs.\n* Fit for a sibling." ]
               : SAVE.data.b.ufokinwotm8
               ? []
               : SAVE.data.b.f_state_kidd_betray
               ? [ "<32>{#p/basic}* One of Asgore's dining chairs.\n* Not fit for anyone." ]
               : [ "<32>{#p/basic}* One of Asgore's dining chairs.\n* Fit for a monster." ])
         ],
         x_chair5: () => [
            ...(SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
               ? [ "<32>{#p/human}* (You note the exceptional size of the dining chair.)" ]
               : []),
            ...(SAVE.data.b.svr
               ? [ "<32>{#p/basic}* One of Asgore's dining chairs.\n* Fit for a father." ]
               : SAVE.data.b.ufokinwotm8
               ? []
               : [ "<32>{#p/basic}* One of Asgore's dining chairs.\n* Still fit for a king." ])
         ],
         x_fridge: () =>
            SAVE.data.b.ufokinwotm8
               ? [ "<32>{#p/human}* (You place your hands on the exterior of the fridge.)\n* (It groans harshly.)" ]
               : [
                    ...(SAVE.data.b.svr
                       ? [ "<32>{#p/human}* (You place your hands on the exterior of the fridge.)\n* (It purrs gently.)" ]
                       : []),
                    ...[
                       [ "<32>{#p/basic}* The fridge is mostly empty, save for a single glass of water from Undyne." ],
                       [
                          "<32>{#p/basic}* The fridge is mostly empty, save for a single bottle of exoberry punch from Undyne."
                       ],
                       [
                          "<32>{#p/basic}* The fridge is mostly empty, save for a single mug of hot cocoa from Undyne.",
                          "<32>* ... it's freezing cold by now."
                       ],
                       [
                          "<32>{#p/basic}* The fridge is mostly empty, save for a single cup of starling tea from Undyne.",
                          "<32>* ... it's freezing cold by now."
                       ]
                    ][SAVE.data.n.undyne_drink]
                 ],
         x_sink: () => [
            ...(SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
               ? [ "<32>{#p/human}* (Surprisingly, you can't find any residue in the sink.)" ]
               : []),
            ...(SAVE.data.b.ufokinwotm8
               ? []
               : [ "<32>{#p/basic}* No fur, no hair...\n* Indeed, these are the wonders of technology." ])
         ],
         x_drawer: () =>
            SAVE.data.b.ufokinwotm8
               ? [ "<32>{#p/human}* (You open the drawer, and pet the dog within for comfort.)" ]
               : [
                    ...(SAVE.data.b.svr ? [ "<32>{#p/human}* (You open the drawer, and wave to the dog within.)" ] : []),
                    "<32>{#p/basic}* That dog, in that drawer...\n* Better not let Papyrus catch wind of this."
                 ],
         x_stove: () =>
            SAVE.data.b.ufokinwotm8
               ? [ "<32>{#p/human}* (You wonder if the stove will burn this house down, too.)" ]
               : [
                    ...(SAVE.data.b.svr
                       ? [ "<32>{#p/human}* (You wonder what delicious meals will be made here.)" ]
                       : []),
                    "<32>{#p/basic}* It's the same model as Undyne's stove...",
                    "<32>* We can only hope it came equipped with the appropriate safety measures this time."
                 ],
         x_sign4: () => [
            ...(SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
               ? [ "<32>{#p/human}* (The sign lists instructions to a certain recipe.)" ]
               : []),
            ...(SAVE.data.b.ufokinwotm8
               ? []
               : [
                    "<32>{#p/basic}* Tucca Zunasca, a new kind of soup for a new kind of world.",
                    "<32>* In a pot, brown a sausage, adding spicy pepper flakes as needed.",
                    "<32>* Add two Kriatas of basic stock, and bring the pot to a boil.",
                    "<32>* For best results, apply fire magic. Otherwise, oxygenated flame will suffice.",
                    "<32>* Dice one pound of Eurybian potatoes, and add them to the boiling pot.",
                    "<32>* Once the mixture begins to sparkle, begin adding whipping cream and bar-bird broth.",
                    "<32>* For now, source the cream from the giga-vine canopy. Other sources may be found later.",
                    "<32>* Additionally, kale or kretaada may be added, and cooked at high intensity until soft.",
                    "<32>* Once complete, your soup should be ready for the table!"
                 ])
         ]
      },
      moniker: [
         [ "Heartbreaker", "Heartbreaker", "Heartbreaker", "Heart- breaker" ],
         [ "the Yellow Kid", "Yellow Kid", "Kid", "Yellow Kid" ],
         [ "the Oncoming Storm", "Oncoming Storm", "Storm", "Oncoming Storm" ],
         [ "Hyper Rage", "Hyper Rage", "Rage", "Hyper Rage" ],
         [ "Space Invader", "Space Invader", "Invader", "Space Invader" ]
      ] as [string, string, string, string][]
   },

   b_act: {
      activate: "* 激活",
      advice: "* 建議",
      agree: "* 認同",
      alphys: "* Alphys",
      analyze: "* Analyze",
      annoy: "* 發火",
      appease: "* 安撫",
      approach: "* 靠近",
      asgore: "* Asgore",
      asriel: "* Asriel",
      asrieldreemurr: "§fill:#ff7f7f§§swirl:2,1,1.05,1§§hue§* Asriel Dreemurr",
      bathe: "* 洗澡",
      beckon: "* 招呼過來",
      bedtime: "* 睡覺時間",
      blind: "* Blind",
      boast: "* 自誇",
      boo: "* 喝倒彩",
      boost: "* 幫助",
      bow: "* 鞠躬",
      break: "* Break",
      burn: "* Burn",
      carry: "* Carry",
      challenge: "* 挑戰",
      charge: "* Charge",
      check: "* 查看",
      cheer: "* 鼓勵",
      clean: "* 清潔",
      cocoa: "* Cocoa",
      comfort: "* 安撫",
      compliment: "* 稱讚",
      compose: "* 作曲",
      conclude: "* Conclude",
      console: "* Console",
      counter: "* 反駁",
      create: "* 自己製作",
      criticize: "* 批評",
      cuddle: "* 擁抱",
      cut: "* Cut",
      dance: "* 跳舞",
      dream: "* 夢想",
      dinnertime: "* 晚餐時間",
      direct: "* Direct",
      disarm: "* 繳械",
      disown: "* Disown",
      diss: "* 貶損",
      distance: "* Distance",
      distract: "* Distract",
      ditch: "* 甩掉",
      dontpick: "* 不招惹",
      encourage: "* 鼓勵",
      escort: "* 護送",
      flash: "* 閃光",
      flirt: "* 調情",
      grin: "* 微笑",
      guide: "* 引導",
      handshake: "* 握手",
      hangout: "* 消遣",
      heckle: "* 責難",
      heel: "* 翻臉",
      highfive: "* High Five",
      home: "* 回家",
      hope: "* 希望",
      hug: "* 擁抱",
      hum: "* 哼唱",
      hypothesize: "* Hypothesize",
      ignore: "* 無視",
      imitate: "* 模仿",
      inquire: "* 詢問",
      insult: "* 辱罵",
      joke: "* 講笑話",
      agreement: "* Agreement",
      call: "* 電話",
      dinner: "* 晚餐",
      judgement: "* 審判",
      laugh: "* 大笑",
      lecture: "* Lecture",
      leech: "* Leech",
      lesson: "* 教學",
      mislead: "* 誤導",
      mix: "* 混音",
      mystify: "* 迷惑",
      notes: "* 筆記",
      object: "* 拒絕",
      papyrus: "* Papyrus",
      password: "* 密碼",
      pat: "* 輕拍",
      pay: "* 付錢",
      perch: "* 棲息",
      pet: "* 撫摸",
      pick: "* 招惹",
      play: "* 玩耍",
      playdead: "* 裝死",
      plead: "* 求饒",
      pluck: "* Pluck",
      poke: "* 戳刺",
      pose: "* 擺姿勢",
      praise: "* 稱讚",
      promise: "* 許諾",
      punch: "* Punch",
      puzzle: "* 謎題",
      puzzlehelp: "* 謎題求助",
      rap: "* 說唱",
      reassure: "* Re-Assure",
      release: "* Release",
      resniff: "* 重新聞聞",
      rest: "* 休息",
      roll: "* 打滾",
      sample: "* 採樣",
      sans: "* Sans",
      scream: "* 尖叫",
      secret: "* 祕密",
      shout: "* 喊叫",
      shove: "* Shove",
      siphon: "* 抽取",
      sit: "* 坐下",
      slap: "* 擊打",
      smile: "* 微笑",
      someoneelse: "* 別的什麼人",
      spark: "* 引燃",
      stare: "* 凝視",
      steal: "* 偷竊",
      storytime: "* 故事時間",
      suggest: "* Suggest",
      talk: "* 交談",
      taunt: "* 嘲諷",
      tea: "* Tea",
      telloff: "* 批判",
      terrorize: "* 恐嚇",
      test_a: "* Binding",
      test_b: "* Prosthesis",
      test_c: "* Infusion",
      threaten: "* 威脅",
      tickle: "* Tickle",
      topple: "* 推倒",
      toriel: "* Toriel",
      translate: "* 翻譯",
      travel: "* Travel",
      trivia: "* 瑣事",
      tug: "* 拽下",
      turn: "* Turn",
      undyne: "* Undyne",
      walk: "* 遛狗",
      water: "* 喝水",
      whisper: "* 耳語",
      whistle: "* 吹口哨",
      yell: "* Yell"
   },

   b_group_common: {
      nobody: () => (!world.genocide && world.bullied ? "* ...但是人們都逃走了。" : "* ...但是誰也沒有來。")
   },

   b_opponent_dummy: {
      act_check: [ "<32>{#p/story}* DUMMY - 攻擊0 防禦0\n* 殼中幽靈，祝君安寧。" ],
      act_flirt: [
         "<32>{#p/human}* （你向人偶調情。）",
         "<32>{#p/basic}* 它的反應和你想的完全一樣。",
         "<32>* Toriel強忍住不笑。"
      ],
      act_hug: [ "<32>{#p/human}* （你抱了抱人偶。）" ],
      act_slap: [ "<32>{#p/human}* （你扇了人偶一巴掌。）" ],
      act_talk: [
         "<32>{#p/human}* （你和人偶說了會話。）",
         "<32>{#p/basic}* 它好像不怎麼健談。",
         "<32>* Toriel看起來很高興。"
      ],
      bored: [ "<32>{#p/basic}* 人偶厭倦了你意味不明的把戲。" ],
      hugged: [ "<32>{#p/basic}* 人偶不知爲何... 臉紅了。" ],
      name: "* Dummy",
      slapped: [ "<32>{#p/basic}* 突然...！" ],
      status1: [ "<32>{#p/story}* 你遭遇了訓練人偶。" ],
      status2: [ "<32>{#p/story}* 人偶看起來有些厭倦了。" ],
      status3: [ "<32>{#p/story}* The dummy looks like it's lost in itself." ],
      status4: [ "<32>{#p/story}* 人偶好像要倒下了。" ],
      talk: [ "<09>{#p/basic}{#i/10}{~}....." ]
   },
   b_opponent_maddummy: {
      epiphaNOPE1: [ "<11>{#p/basic}{~}{#x3}Ugh, you're WASTING my time!" ],
      epiphaNOPE2: [ "<08>{#p/basic}{~}Oh.. how strange." ],
      act_check: () =>
         16 <= SAVE.data.n.kills_wastelands
            ? [ "<32>{#p/story}* GLAD DUMMY - 攻擊0 防禦0\n* 它的夢想成真啦！" ]
            : [ "<32>{#p/story}* MAD DUMMY - 攻擊30 防禦255\n* 免疫一切物理攻擊。" ],
      act_flirt: () =>
         16 <= SAVE.data.n.kills_wastelands
            ? [
                 "<32>{#p/human}* (You flirt with Glad Dummy.)",
                 "<32>{#p/basic}* They're too distracted with themselves to hear you."
              ]
            : [ "<32>{#p/human}* (You flirt with Mad Dummy.)", "<32>* 它的反應和你想的完全一樣。" ],
      act_hug: () =>
         16 <= SAVE.data.n.kills_wastelands
            ? [ "<32>{#p/human}* (You hug Glad Dummy.)" ]
            : [ "<32>{#p/human}* (You hug Mad Dummy.)" ],
      act_slap: () =>
         16 <= SAVE.data.n.kills_wastelands
            ? [
                 "<32>{#p/human}* （你扇了Glad Dummy一巴掌。）",
                 "<32>{#p/basic}* Glad Dummy exerts the better part of valor and gets out of your way."
              ]
            : [ "<32>{#p/human}* （你扇了Mad Dummy一巴掌。）" ],
      act_talk: () =>
         16 <= SAVE.data.n.kills_wastelands
            ? [
                 "<32>{#p/human}* (You talk to Glad Dummy.)",
                 "<32>{#p/basic}* They're too distracted with themselves to hear you."
              ]
            : [
                 "<32>{#p/human}* (You talk to Mad Dummy.)",
                 "<32>* They don't seem much for conversation.",
                 "<32>* Nobody is happy with this."
              ],
      boredTalk: [
         "<11>{#p/basic}{~}{#x3}What the hell?",
         "<11>{#p/basic}{~}{#x1}Why is NOTHING hap- pening?",
         "<11>{#p/basic}{~}{#x4}Am I INVISIBLE to you or something??",
         "<11>{#p/basic}{~}{#x4}...",
         "<11>{#p/basic}{~}{#x4}I CAN'T EVEN BE MAD AT YOU!!!",
         "<11>{#p/basic}{~}{#x4}You're so... INANIMATE!",
         "<11>{#p/basic}{~}{#x4}JUST... GAHH!\nGET OUT OF MY LIFE!",
         "<11>{#p/basic}{~}{#x4}GO LISTEN TO MUSIC WITH NAPSTABLOOK OR SOMETHING!"
      ],
      changeStatus1: [ "<32>{#p/story}* Mad Dummy is getting cotton all over the floor." ],
      changeStatus2: [ "<32>{#p/story}* Mechanical whirrs fill the room." ],
      fightFail: [
         "<11>{#p/basic}{~}{#x1}Foolish.\nFoolish!\nFOOLISH!",
         "<11>{#p/basic}{~}{#x3}Even if you attack my vessel...",
         "<11>{#p/basic}{~}{#x4}... you'll NEVER hurt ME!",
         "<11>{#p/basic}{~}{#x1}I'm still incor- poreal, you dummy!!!"
      ],
      final1: () => [
         "<11>{#p/napstablook}{~}sorry, i interrupted you, didn't i...",
         "<11>{#p/napstablook}{~}as soon as i came over, your friend immediately left...",
         ...(SAVE.data.n.state_wastelands_napstablook === 2
            ? [
                 "<11>{#p/napstablook}{~}oh wait...\ndidn't you attack me before...",
                 "<11>{#p/napstablook}{~}uhhh...\nthat's awkward.",
                 "<11>{#p/napstablook}{~}sorry..."
              ]
            : [
                 "<11>{#p/napstablook}{~}oh no...\nyou guys looked like you were having fun...",
                 "<11>{#p/napstablook}{~}oh no...\ni just wanted to say hi...",
                 "<11>{#p/napstablook}{~}oh no......\n...........\n...........\n...........\n..........."
              ])
      ],
      gladTalk1: [ "<08>{#p/basic}{~}Thanks!" ],
      gladTalk2: [ "<08>{#p/basic}{~}Thank you!" ],
      gladTalk3: [ "<08>{#p/basic}{~}Great work!" ],
      gladTalk4: [ "<08>{#p/basic}{~}Bravo!" ],
      gladTalk5: [ "<08>{#p/basic}{~}OK!" ],
      gladTalk6: [ "<08>{#p/basic}{~}..." ],
      hugTalk1: () =>
         16 <= SAVE.data.n.kills_wastelands
            ? [
                 "<08>{#p/basic}{~}My haphe- phobia!",
                 "<08>{#p/basic}{~}It's gone!",
                 "<08>{#p/basic}{~}Thank you.. human..",
                 "<08>{#p/basic}{~}I've never felt so happy.."
              ]
            : SAVE.data.n.state_wastelands_dummy === 4
            ? [ "<11>{#p/basic}{~}{#x4}Are you for REAL??" ]
            : [ "<11>{#p/basic}{~}{#x3}N-no..!\nI have haphe- phobia!" ],
      hugTalk2: [ "<11>{#p/basic}{~}{#x4}Stop that!" ],
      hugTalk3: [ "<11>{#p/basic}{~}{#x2}Knock it off!" ],
      hugTalk4: [ "<11>{#p/basic}{~}{#x3}..." ],
      name: () => (16 <= SAVE.data.n.kills_wastelands ? "* Glad Dummy" : "* Mad Dummy"),
      phase2Talk1: [ "<11>{#p/basic}{~}{#x1}I'll defeat you and take your SOUL!" ],
      phase2Talk2: [ "<11>{#p/basic}{~}{#x1}I'll use your SOUL to break the force field!" ],
      phase2Talk3: [ "<11>{#p/basic}{~}{#x6}The other monsters will love me, praise me...!" ],
      phase2Talk4: [ "<11>{#p/basic}{~}{#x4}THEN EVERYTHING I WANT WILL BE MINE!" ],
      phase2Talk5: [ "<11>{#p/basic}{~}{#x3}Huh?\nYeah, I guess that'll avenge my cousin." ],
      phase2Talk6: [ "<11>{#p/basic}{~}{#x5}Do my other cousins care...?" ],
      phase2Talk7: [ "<11>{#p/basic}{~}{#x4}Whatever.\nWhatever!\nWHATEVER!" ],
      phase2Talk8: [ "<11>{#p/basic}{~}{#x1}..." ],
      phase3Talk1: [ "<11>{#p/basic}{~}{#x1}DUMMY BOTS!\nMAGIC MISSILE!" ],
      phase3Talk2: [ "<11>{#p/basic}{~}{#x3}DUMMY BOTS!\nTRY AGAIN!" ],
      phase3Talk3: [ "<11>{#p/basic}{~}{#x5}DUMMY BOTS!\nYou're awful???" ],
      phase3Talk4: [ "<11>{#p/basic}{~}{#x4}DUMMY BOTS!\nFINAL ATTACK!" ],
      phaseChange1: [
         "<11>{#p/basic}{~}{#x2}OWWWW, you DUMMIES!!",
         "<11>{#p/basic}{~}{#x1}Watch where you aim your {@fill:#f00}MAGIC{@fill:#000} attacks!",
         "<11>{#p/basic}{~}{#x4}...",
         "<11>{#p/basic}{~}{#x4}Hey!\nYou!",
         "<11>{#p/basic}{~}{#x3}Forget I said anything about {@fill:#f00}MAGIC{@fill:#000}."
      ],
      phaseChange2a: [ "<11>{#p/basic}{~}{#x4}HEY GUYS!" ],
      phaseChange2b1: [
         "<11>{#p/basic}{~}{#x1}Dummies.\nDummies!\nDUMMIES!",
         "<11>{#p/basic}{~}{#x3}Remember how I said NOT to shoot at me?",
         "<11>{#p/basic}{~}{#x3}Well..."
      ],
      phaseChange2b2: [ "<11>{#p/basic}{~}{#x4}FAILURES!\nYOU'RE FIRED!\nYOU'RE ALL BEING REPLACED!" ],
      phaseChange2c: [
         "<11>{#p/basic}{~}{#x4}Hahaha.\nHahaha!\nHAHAHA!",
         "<11>{#p/basic}{~}{#x3}Now you'll see my true power...",
         "<11>{#p/basic}{~}{#x6}Relying on people that aren't garbage!"
      ],
      phaseChange3a1: [
         "<11>{#p/basic}{~}{#x3}N... no way!",
         "<11>{#p/basic}{~}{#x3}These guys are WORSE than the other guys!"
      ],
      phaseChange3a2: [
         "<11>{#p/basic}{~}{#x1}Who cares.\nWho cares!\nWHO CARES!",
         "<11>{#p/basic}{~}{#x4}I DON'T NEED FRIENDS!!"
      ],
      phaseChange3b: [ "<11>{#p/basic}{~}{#x6}I'VE GOT KNIVES!!!" ],
      phaseChange3c1: [ "<11>{#p/basic}{~}{#x3}I'm...", "<11>{#p/basic}{~}{#x3}Out of knives." ],
      phaseChange3c2: [
         "<11>{#p/basic}{~}{#x4}BUT IT DOESN'T MATTER!!!",
         "<11>{#p/basic}{~}{#x4}YOU CAN'T HURT ME AND I CAN'T HURT YOU!",
         "<11>{#p/basic}{~}{#x1}YOU'LL BE STUCK FIGHTING ME..."
      ],
      phaseChange3c3: [ "<11>{#p/basic}{~}{#x1}Forever." ],
      phaseChange3c4: [ "<11>{#p/basic}{~}{#x4}Forever!" ],
      phaseChange3c5: [ "<11>{#p/basic}{~}{#x6}FOREVER!!!!" ],
      phaseChange3d: [ "<11>{*}{#p/basic}{~}{#x6}AHAHAHAHA HAHAHAHAH AHAHAHAHA HAHAHAHAH AHAHAHAHA{%}" ],
      phaseChange3e: [
         "<11>{*}{#p/basic}{~}{#x2}Wh...\nWhat the heck is this!?{^20}{%}",
         "<11>{*}{#p/basic}{~}{#x6}Ergh!\nAcid rain!?{^20}{%}",
         "<11>{*}{#p/basic}{~}{#x4}Oh, FORGET IT!\nI'm OUTTA here!!{^20}{%}"
      ],
      randStatus1: [ "<32>{#p/story}* Mad Dummy is looking for the nearest airlock to throw you out of." ],
      randStatus2: [ "<32>{#p/story}* Mad Dummy is bossing around its bullets." ],
      randStatus3: [ "<32>{#p/story}* Mad Dummy glares into a portal, then turns to you with the same expression." ],
      randStatus4: [ "<32>{#p/story}* Mad Dummy is hopping mad." ],
      randStatus5: [ "<32>{#p/story}* Smells like a textile factory." ],
      gladStatus1: [ "<32>{#p/story}* Glad Dummy is just happy to be here." ],
      gladStatus2: [ "<32>{#p/story}* Glad Dummy thinks of all the wonderful things it's going to do." ],
      gladStatus3: [ "<32>{#p/story}* Glad Dummy seems content." ],
      randTalk1: [ "<11>{#p/basic}{~}{#x1}Foolish.\nFoolish!\nFOOLISH!" ],
      randTalk2: [ "<11>{#p/basic}{~}{#x1}Futile.\nFutile!\nFUTILE!" ],
      randTalk3: [ "<11>{#p/basic}{~}{#x1}Pitiful.\nPitiful!\nPITIFUL!" ],
      randTalk4: [ "<11>{#p/basic}{~}{#x1}Feeble.\nFeeble!\nFEEBLE!" ],
      slapTalk1: [ "<11>{#p/basic}{~}{#x6}Why you little...!" ],
      slapTalk2: [ "<11>{#p/basic}{~}{#x4}Are you kidding me??" ],
      slapTalk3: [ "<11>{#p/basic}{~}{#x2}Come on!" ],
      slapTalk4: [ "<11>{#p/basic}{~}{#x3}..." ],
      status1: () =>
         16 <= SAVE.data.n.kills_wastelands
            ? [ "<32>{#p/story}* Glad Dummy lets you go." ]
            : [ "<32>{#p/story}* Mad Dummy blocks the way!" ]
   },
   b_opponent_moldsmal: {
      epiphany: [
         [ "<08>{#p/basic}{~}\x00*slime sounds*" ],
         () =>
            world.meanie
               ? [ "<08>{#p/basic}{~}Squorch!" ]
               : world.flirt > 9
               ? [ "<08>{#p/basic}{~}\x00*erotic wiggle*" ]
               : SAVE.data.b.oops
               ? [ "<08>{#p/basic}{~}\x00*happy wiggle*" ]
               : [ "<08>{#p/basic}{~}\x00*shakes in your arms*" ],
         [ "<08>{#p/basic}{~}Final blorb." ],
         [ "<08>{#p/basic}{~}\x00*shiny wiggle*" ]
      ],
      act_check0: [ "<32>{#p/asriel2}* Gelatini，沒腦子的粘球。\n* 有什麼好說的？" ],
      act_check: [ "<32>{#p/story}* GELATINI - 攻擊6 防禦0\n* 典型印象：身段妖嬈氣質好，\n  就是沒大腦..." ],
      act_check2: [ "<32>{#p/story}* GELATINI - ATK 6 DEF 0\n* It's even more attractive in this season's colors." ],
      act_check3: [ "<32>{#p/story}* GELATINI - ATK 6 DEF 0\n* It's exactly your type.\n* It's \"stereo.\"" ],
      act_check4: [ "<32>{#p/story}* GELATINI - ATK 6 DEF 0\n* This mold supermodel appears to be past its prime." ],
      act_flirt: [
         "<32>{#p/human}* (You wiggle your hips.)\n* (Gelatini wiggles back.)",
         "<33>{#p/basic}* What a meaningful conversation!"
      ],
      act_imitate: [
         "<33>{#p/human}* (You give Gelatini a nice pat.)\n* (Its body changes color...)",
         "<32>{#p/basic}* It's Gelatini's happy color!"
      ],
      act_slap: [
         "<32>{#p/human}* （你使勁地給了Galatini一巴掌。）",
         "<32>{#p/basic}* Gelatini is jostled, but remains ultimately unfazed."
      ],
      act_slap2: [
         "<32>{#p/human}* (You deliver your mightiest slap to Gelatini.)",
         "<32>{#p/basic}* Gelatini is shaken to its core!"
      ],
      act_slap3: [
         "<32>{#p/human}* (You deliver your mightiest slap to Gelatini.)",
         "<32>{#p/basic}* Gelatini flees the scene!"
      ],
      idleTalk1: [ "<08>{#p/basic}{~}Blorb.." ],
      idleTalk2: [ "<08>{#p/basic}{~}Squorch.." ],
      idleTalk3: [ "<08>{#p/basic}{~}\x00*slime sounds*" ],
      name: "* Gelatini",
      perilStatus: () =>
         world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
            ? [ "<32>{#p/kidding}* This can't be good..." ]
            : [ "<32>{#p/story}* Gelatini has started to rot." ],
      sexyChat: [ "<08>{#p/basic}{~}\x00*sexy wiggle*" ],
      status1: () =>
         world.goatbro ? [ "<32>{#p/asriel2}* Gelatini squared." ] : [ "<32>{#p/story}* 一對Gelatini跳了過來。" ],
      status2: () =>
         world.goatbro
            ? [ "<32>{#p/asriel2}* Gelatini." ]
            : world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
            ? [ "<32>{#p/kidding}* Shh... it's thinking!" ]
            : [ "<32>{#p/story}* Gelatini blorbs quietly." ],
      status3: () =>
         world.goatbro ? [ "<32>{#p/asriel2}* Gelatini." ] : [ "<32>{#p/story}* Gelatini waits optimistically." ],
      status4: () =>
         world.goatbro
            ? [ "<32>{#p/asriel2}* Gelatini." ]
            : world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
            ? [ "<32>{#p/kidding}* A blorb here, a blorb there..." ]
            : [ "<32>{#p/story}* Gelatini is ruminating." ],
      status5: () =>
         world.goatbro
            ? [ "<32>{#p/asriel2}* Gelatini." ]
            : world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
            ? [ "<32>{#p/kidding}* I wonder what Gelatinis are actually made of." ]
            : [ "<32>{#p/story}* The aroma of lime gelatin wafts through." ],
      status6: [ "<32>{#p/story}* And then, there was one." ],
      status8: () =>
         world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
            ? [ "<32>{#p/kidding}* Just us now!" ]
            : [ "<32>{#p/story}* Gelatini now blorbs solo." ]
   },
   b_opponent_spacetop: {
      epiphany: [
         [ "<08>{#p/basic}{~}I can communi- cate else- where." ],
         () =>
            world.meanie
               ? [ "<08>{#p/basic}{~}Warning broad- cast is well re- ceived!" ]
               : world.flirt > 9
               ? [ "<08>{#p/basic}{~}Ooh.. I like this kind of signal.." ]
               : SAVE.data.b.oops
               ? [ "<08>{#p/basic}{~}I'm on your wave- length now!" ]
               : [ "<08>{#p/basic}{~}The signal.. is right on top of me.." ],
         [ "<08>{#p/basic}{~}I'm just a waste of band- width.." ],
         [ "<08>{#p/basic}{~}I'll wire you the cash right away!" ]
      ],
      act_check: () =>
         world.goatbro
            ? [ "<32>{#p/asriel2}* Astro Serf，宇航員，渴望引人注目。\n* 除了自己的天線，他什麼都不在乎。" ]
            : [ "<32>{#p/story}* ASTRO SERF - ATK 11 DEF 4\n* This teen wonders why it isn't named 'Radio Jack.'" ],
      act_check2: [ "<32>{#p/story}* ASTRO SERF - ATK 11 DEF 4\n* This teen seems to appreciate your sense of fashion." ],
      act_check3: [ "<32>{#p/story}* ASTRO SERF - ATK 11 DEF 4\n* This teen is getting ALL the right signals." ],
      act_check4: [
         "<32>{#p/story}* ASTRO SERF - ATK 11 DEF 4\n* Attempting to hijack a public radio to call for help."
      ],
      act_compliment: [ "<32>{#p/human}* (You inform Astro Serf that it has a great antenna.)" ],
      act_flirt: [ "<32>{#p/human}* (You flirt with Astro Serf.)" ],
      complimentTalk1: [ "<08>{#p/basic}{~}DUH!\nWho DOESN'T know?" ],
      complimentTalk2: [ "<08>{#p/basic}{~}Envious?\nTOO BAD!" ],
      createStatus1: () =>
         world.goatbro
            ? [ "<32>{#p/asriel2}* Astro Serf." ]
            : [ "<32>{#p/story}* Astro Serf is secretly checking if you're looking at its antenna." ],
      createStatus2: () =>
         world.goatbro ? [ "<32>{#p/asriel2}* Astro Serf." ] : [ "<32>{#p/story}* Astro Serf is impressed." ],
      createTalk1: [ "<09>{#p/basic}{~}HELLO???\nMy antenna's up here." ],
      createTalk2: [ "<08>{#p/basic}{~}What?\nWhat are you doing?" ],
      createTalk3: [ "<08>{#p/basic}{~}But.. it can't be..!" ],
      createTalk4: [ "<08>{#p/basic}{~}Woah..\nHow did you do that??" ],
      createTalk5: [ "<08>{#p/basic}{~}You're.. making your OWN antenna?" ],
      act_create: () =>
         [
            [ "<32>{#p/human}* (You begin to fashion your own antenna.)", "<32>{#p/basic}* But... how?" ],
            [ "<32>{#p/human}* (You finish the antenna, and proceed to put it on.)" ],
            [
               "<32>{#p/human}* (You start on another antenna.)",
               "<32>{#p/basic}* Not knowing what to do, Astro Serf runs away."
            ]
         ][battler.target?.vars.create ?? 0],
      flirtStatus1: [ "<32>{#p/story}* Astro Serf is not impressed by your attire." ],
      flirtStatus2: [ "<32>{#p/story}* Astro Serf is in love." ],
      flirtTalk1: [ "<08>{#p/basic}{~}No deal!\nNot without an antenna!" ],
      flirtTalk2: [ "<08>{#p/basic}{~}W-what??\nUm..\nI..\nYou.." ],
      genoStatus: [ "<32>{#p/asriel2}* Astro Serf." ],
      hurtStatus: () =>
         world.goatbro ? [ "<32>{#p/asriel2}* 離死不遠了。" ] : [ "<32>{#p/story}* Astro Serf's suit is loose." ],
      idleTalk1: [ "<08>{#p/basic}{~}Where's YOUR antenna?" ],
      idleTalk2: [ "<08>{#p/basic}{~}Your head looks so ..NAKED" ],
      idleTalk3: [ "<08>{#p/basic}{~}What a great antenna!\n(Mine)" ],
      idleTalk4: [ "<09>{#p/basic}{~}It's signal feedback, not radi- ation" ],
      idleTalk5: [ "<08>{#p/basic}{~}I just looove my antenna.\nOK?" ],
      justiceTalk: [ "<08>{#p/basic}{~}What have you done.." ],
      name: "* Astro Serf",
      randStatus1: [ "<32>{#p/story}* Astro Serf also wants antennae for its other body parts." ],
      randStatus2: [ "<32>{#p/story}* Astro Serf makes sure its antenna is still there." ],
      randStatus3: [ "<32>{#p/story}* Astro Serf is thinking about a certain article of clothing." ],
      randStatus4: [ "<32>{#p/story}* Smells like lithium." ],
      status1: [ "<32>{#p/story}* Astro Serf struts into view." ],
      stealTalk1: [ "<08>{#p/basic}{~}I KNEW IT!!!\nTHIEF!!" ],
      stealTalk2: [ "<08>{#p/basic}{~}HELP!!!\nFASHION POLICE!!" ],
      act_steal: () =>
         battler.hurt.includes(battler.target!)
            ? [
                 "<33>{#p/human}* (You steal Astro Serf's antenna.)\n* (Its spacesuit falls off.)",
                 "<33>{#p/basic}* Looks like it was powered by lithium the whole time."
              ]
            : [ "<32>{#p/human}* (You try stealing Astro Serf's antenna, but it hasn't been weakened enough.)" ]
   },
   b_opponent_space: {
      act_check: () =>
         world.goatbro
            ? [ "<32>{#p/asriel2}* Lithium.\n* That's literally it." ]
            : [ "<32>{#p/story}* LITHIUM - ATK 1 DEF 0\n* Without its spacesuit..." ],
      act_reassure: [ "<32>{#p/human}* (You inform Lithium that it still looks fine.)" ],
      genoStatus: [ "<32>{#p/asriel2}* Lithium." ],
      happyStatus: [ "<32>{#p/story}* Lithium doesn't mind its identity." ],
      happyTalk1: [ "<08>{#p/basic}{~}Yeah.. I like my body too." ],
      happyTalk2: [ "<08>{#p/basic}{~}Hmm.. antennae are for posers." ],
      happyTalk3: [ "<08>{#p/basic}{~}So I can still impress you?" ],
      happyTalk4: [ "<08>{#p/basic}{~}I wanted you to see me as cool." ],
      hurtStatus: () =>
         world.goatbro ? [ "<32>{#p/asriel2}* 也要去見閻王了。" ] : [ "<32>{#p/story}* It's disintegrating." ],
      idleTalk1: [ "<08>{#p/basic}{~}I..\nI.." ],
      idleTalk2: [ "<08>{#p/basic}{~}What can I say.." ],
      idleTalk3: [ "<08>{#p/basic}{~}What's the point.." ],
      idleTalk4: [ "<08>{#p/basic}{~}So.. alone.." ],
      name: "* Lithium",
      randStatus1: [ "<32>{#p/story}* \"Astro Serf\" is no more." ],
      randStatus2: [ "<32>{#p/story}* Smells like battery power." ]
   },

   b_party_kidd: {
      mkNobody: [ "<25>{#p/kidd}{#f/4}* 周圍怎麼一個人也沒有，\n  是我的錯覺嗎..." ],
      mkDeath1: [
         "<32>{#p/kidding}* 呃...",
         "<32>* 對手爲啥是這樣消失的呢？",
         "<32>* 嗯... 我們打了對手。\n  估計太害怕，就傳送走了。\n* 哈哈，肯定是的。"
      ],
      mkDeath2: [ "<32>{#p/kidding}* 又消失了？", "<32>* 該死，爲啥我沒有\n  這麼酷的傳送器呢！？" ],
      mkDeath3: [ "<32>{#p/kidding}* 消失了..." ],
      mkDeath4: [ "<32>{#p/kidding}* ..." ],
      mkDeath1OW: [
         "<25>{#p/kidd}{#f/4}* 呃...",
         "<25>* 對手爲啥是這樣消失的呢？",
         "<25>{#f/1}* 嗯... 我們打了對手，所以...",
         "<25>* 估計太害怕，就傳送走了。\n* 哈哈，肯定是的。"
      ],
      mkDeath2OW: [
         "<25>{#p/kidd}{#f/4}* 又消失了？",
         "<25>{#f/1}* 該死，爲啥我沒有\n  這麼酷的傳送器呢！？"
      ],
      mkDeath3OW: [ "<25>{#p/kidd}{#f/4}* 消失了..." ],
      mkDeath4OW: [ "<25>{#p/kidd}{#f/4}* ..." ],
      mkBully1: [
         "<32>{#p/kidding}* 呃...",
         "<32>* 對手好像嚇壞了...",
         "<32>* 希望我們下手沒那麼重..."
      ],
      mkBully2: [ "<32>{#p/kidding}* 那位也...！", "<32>* 我們打得那麼狠嗎...？" ],
      mkBully3: [ "<32>{#p/kidding}* ..." ],
      mkBully1OW: [
         "<25>{#p/kidd}{#f/4}* 呃...",
         "<25>* They seemed really scared...",
         "<25>* I hope we didn't hurt them too badly or something..."
      ],
      mkBully2OW: [ "<25>{#p/kidd}{#f/7}* 那位也...！", "<25>{#f/4}* 我們打得那麼狠嗎...？" ],
      mkBully3OW: [ "<25>{#p/kidd}{#f/4}* ..." ],
      mkShyrenDeath: [ "<25>{#p/kidd}{#f/4}* 嘿...", "<25>{#p/kidd}{#f/1}* 大家都去哪了？" ],
      mkMagic1: [
         "<32>{#p/kidding}* 喲... 我還不會釋放很酷的魔法...",
         "<32>{#p/kidding}* 不過，嗯... 我可以幫你療傷！"
      ],
      mkMagic2a: [ "<32>{#p/kidding}* 治療術！" ],
      mkMagic2b: [ "<32>{#p/kidding}* 健康與你同在！" ],
      mkMagic2c: [ "<32>{#p/kidding}* 看好了！" ],
      mkNope: [ "<32>{#p/kidding}* 不要再讓我戰鬥了..." ],
      mkTurn1: [ "<32>{#p/kidding}* 幫幫我，我從來沒戰鬥過！\n* 我要怎麼做！？" ],
      mkTurn2: [ "<32>{#p/kidding}* 呃... 幫我！" ],
      mkTurn3: [ "<32>{#p/kidding}* 我... 我好像會了。" ],
      mkTurnAct1: [ "<32>{#p/kidding}* 喔！喔！", "<32>* 我知道要怎麼行動！", "<32>* 看好了...！" ],
      mkWeaken1: [ "<32>{#p/kidding}* 真的要這麼做嗎...？\n* 對手好像不喜歡這樣...", "<32>* ..." ],
      mkWeaken2: [ "<32>{#p/kidding}* 這麼做真的好嗎...？", "<32>* ..." ],
      mkWeaken3a: [ "<32>{#p/kidding}* 呃..." ],
      mkWeaken3b: [ "<32>{#p/kidding}* 嗯..." ],
      mkWeaken3c: [ "<32>{#p/kidding}* 呃..." ],
      
      mkTurnActRand1: (opponent: string) =>
         opponent === "muffet" 
            ? [
                 [ "<32>{#p/story}* Monster Kid struggled in the web and made a scary face." ],
                 [ "<32>{#p/story}* Monster Kid struggled in the web and yelled." ],
                 [ "<32>{#p/story}* Monster Kid gave out a menacing laugh." ]
              ]
            : opponent === "shyren" 
            ? [
                 [ "<32>{#p/story}* Monster Kid sang a scary tune." ],
                 [ "<32>{#p/story}* Monster Kid yelled overly edgy lyrics." ],
                 [ "<32>{#p/story}* Monster Kid drummed loudly with their feet." ]
              ]
            : opponent === "woshua" 
            ? [
                 [ "<32>{#p/story}* Monster Kid pointed out the dirty floors." ],
                 [ "<32>{#p/story}* Monster Kid pointed out the leaky pipes." ],
                 [ "<32>{#p/story}* Monster Kid made a gross face." ]
              ]
            : [
                 [ "<32>{#p/story}* Monster Kid stared $(x) directly in the face." ],
                 [ "<32>{#p/story}* Monster Kid pointed at $(x) accusingly." ],
                 [ "<32>{#p/story}* Monster Kid circled around $(x) like a predator." ]
              ],
      
      mkTurnActRand2: (opponent: string) =>
         opponent === "muffet" 
            ? [
                 [ "<32>{#p/story}* Monster Kid complimented Muffet on her eloquent taste in clothing." ],
                 [ "<32>{#p/story}* Monster Kid told Muffet her pastries are the best known to monsterkind." ],
                 [ "<32>{#p/story}* Monster Kid said no webs are as strong as Muffet's." ]
              ]
            : opponent === "shyren" 
            ? [
                 [ "<32>{#p/story}* Monster Kid hummed a pretty melody." ],
                 [ "<32>{#p/story}* Monster Kid complimented Shyren's hair." ],
                 [ "<32>{#p/story}* Monster Kid complimented Shyren's voice." ]
              ]
            : opponent === "woshua" 
            ? [
                 [ "<32>{#p/story}* Monster Kid called Skrubbington the cleanest monster on the block." ],
                 [ "<32>{#p/story}* Monster Kid appreciated Skrubbington's efforts to freshen up the factory." ],
                 [ "<32>{#p/story}* Monster Kid noted Skrubbington's committment to perfection." ]
              ]
            : opponent === "radtile" 
            ? [
                 [ "<32>{#p/story}* Monster Kid complimented Radtile's mirror." ],
                 [ "<32>{#p/story}* Monster Kid complimented Radtile's hat." ],
                 [ "<32>{#p/story}* Monster Kid made sure to double-check Radtile's appearance." ]
              ]
            : [
                 [ "<32>{#p/story}* Monster Kid offered to keep $(x) company." ],
                 [ "<32>{#p/story}* Monster Kid told $(x) they'd be there if it'd help." ],
                 [ "<32>{#p/story}* Monster Kid stood on top of $(x)." ]
              ],
      
      mkTurnActRand3: (opponent: string) =>
         opponent === "muffet" 
            ? [
                 [ "<32>{#p/story}* Monster Kid tried asking Muffet about spider clans." ],
                 [ "<32>{#p/story}* Monster Kid tried asking Muffet about bakeries." ],
                 [ "<32>{#p/story}* Monster Kid tried asking Muffet about tea." ]
              ]
            : opponent === "shyren" 
            ? [
                 [ "<32>{#p/story}* Monster Kid debated about musical notation." ],
                 [ "<32>{#p/story}* Monster Kid spoke about music theory." ],
                 [ "<32>{#p/story}* Monster Kid discussed their favorite music genres." ]
              ]
            : opponent === "woshua" 
            ? [
                 [ "<32>{#p/story}* Monster Kid waxed poetic about proper hygiene." ],
                 [ "<32>{#p/story}* Monster Kid rapped about hazard safety." ],
                 [ "<32>{#p/story}* Monster Kid showed off their polished sewer pipe set." ]
              ]
            : opponent === "radtile" 
            ? [
                 [ "<32>{#p/story}* Monster Kid made an ugly face at Radtile." ],
                 [ "<32>{#p/story}* Monster Kid came near and inspected Radtile up close." ],
                 [ "<32>{#p/story}* Monster Kid acted out as if they were a feral creature." ]
              ]
            : [
                 [ "<32>{#p/story}* Monster Kid wiggled around, mimicing $(x)." ],
                 [ "<32>{#p/story}* Monster Kid did a handstand, impressing $(x)." ],
                 [ "<32>{#p/story}* Monster Kid spun around, bewildering $(x)." ]
              ],
      
      mkTurnActRand4: (opponent: string) =>
         opponent === "muffet" 
            ? [ [ "<32>{#p/story}* Monster Kid tried telling Muffet there's no point in all this!" ] ]
            : opponent === "shyren" || opponent === "radtile" 
            ? [ [ "<32>{#p/story}* Monster Kid claimed a spatial distortion was approaching fast!" ] ]
            : opponent === "woshua" 
            ? [ [ "<32>{#p/story}* Monster Kid claimed an airborne viral agent was on its way!" ] ]
            : [ [ "<32>{#p/story}* Monster Kid claimed the nearby pipes were leaking acid!" ] ],
      mkTurnActResult0: [ "<32>{#p/story}* Nothing happened." ],
      mkTurnActResult1: (opponent: string) =>
         opponent === "woshua" 
            ? [ "<32>{#p/story}* Skrubbington was grossed out!\n* Skrubbington's DEFENSE down!" ]
            : opponent === "shyren" 
            ? [ "<32>{#p/story}* Shyren felt uncomfortable!\n* Shyren's DEFENSE down!" ]
            : opponent === "radtile" 
            ? [ "<32>{#p/story}* Radtile felt uncomfortable!\n* Radtile's DEFENSE down!" ]
            : [ "<32>{#p/story}* $(x) felt uncomfortable!\n* $(x)'s DEFENSE down!" ],
      mkTurnActResult2: (opponent: string) =>
         opponent === "woshua" 
            ? [ "<32>{#p/story}* Skrubbington felt flattered!\n* Skrubbington's ATTACK down!" ]
            : opponent === "shyren" 
            ? [ "<32>{#p/story}* Shyren felt flattered!\n* Shyren's ATTACK down!" ]
            : opponent === "radtile" 
            ? [ "<32>{#p/story}* Radtile felt respected!\n* Radtile's ATTACK down!" ]
            : [ "<32>{#p/story}* $(x) felt respected!\n* $(x)'s ATTACK down!" ],
      mkTurnActResult3: (opponent: string, multiple: boolean) =>
         opponent === "woshua" 
            ? multiple
               ? [ "<32>{#p/story}* Skrubbington and the others were distracted by Monster Kid and forgot their turn!" ]
               : [ "<32>{#p/story}* Skrubbington was distracted by Monster Kid and forgot their turn!" ]
            : opponent === "shyren" 
            ? [ "<32>{#p/story}* Distracted by Monster Kid, Shyren forgot her turn!" ]
            : multiple
            ? [ "<32>{#p/story}* Entranced by Monster Kid, $(x) and the others forgot their turn!" ]
            : opponent === "radtile" 
            ? [ "<32>{#p/story}* Entranced by Monster Kid, Radtile forgot his turn!" ]
            : [ "<32>{#p/story}* Entranced by Monster Kid, $(x) forgot their turn!" ],
      mkTurnActResult4: (opponent: string, multiple: boolean, allowpac: boolean) =>
         opponent === "woshua" 
            ? [
                 "<32>{#p/story}* Fearful for its life, Skrubbington panicked and left the battle!",
                 ...(multiple ? [ "<32>{#p/story}* The other monsters continue to fight you." ] : [])
              ]
            : opponent === "shyren" 
            ? allowpac
               ? [ "<32>{#p/story}* Fearful for her life, Shyren panicked and left the battle!" ]
               : [ "<32>{#p/story}* Encouraged by her own performance, Shyren braved the threat!" ]
            : opponent === "radtile" 
            ? [ "<32>{#p/story}* Fearful for his life, Radtile panicked and left the battle!" ]
            : [
                 "<32>{#p/story}* Fearful for its life, $(x) panicked and left the battle!",
                 ...(multiple ? [ "<32>{#p/story}* The other monsters continue to fight you." ] : [])
              ],
      mkTurnFight1: [
         "<32>{#p/kidding}* 你... 你-你讓我戰鬥？\n* 真的嗎？",
         choicer.create("* （確定戰鬥嗎？）", "是", "否")
      ],
      mkTurnFight2a: [ "<32>{#p/kidding}* 好吧... 那我試試..." ],
      mkTurnFight2b: [ "<32>{#p/kidding}* 喔，好...", "<32>* 那我就饒恕他們吧！" ],
      mkTurnFight3a: [ "<32>* 呀哈...！" ],
      mkTurnFight3b: [ "<32>* 嘿呀...！" ],
      mkTurnFight3c: [ "<32>* 我打！" ],
      mkTurnMercy1: [ "<32>{#p/kidding}* 仁慈？\n* 讓我饒恕對手嗎？", "<32>{#p/kidding}* 哈哈，容易！" ],
      mkTurnX: [ choicer.create("* （Monster Kid應該怎麼做？）", "伶俐", "放招", "魔法", "打鬥") ]
   },

   c_name_common: {
      keyring: "鑰匙串",
      hello_asgore: "哈拉",
      about_asgore: "來個自我介紹",
      dad: "叫他「爹地」",
      flirt_asgore: "放電",
      insult_asgore: "谯罵"
   },

   c_call_common: {
      start: "<32>{#s/phone}{#p/event}* 滴滴滴...",
      end: "<32>{#s/equip}{#p/event}* 滴...",
      nobody0: [ "<32>{#p/human}* (Too much interference.)" ],
      nobody1: [ "<32>{#p/human}* （沒有回應。）" ],
      nobody2: [ "<32>{#p/basic}* ...但是誰也沒有來。" ],
      nobody3: [ "<32>{#p/human}* （沒有信號。）" ],
      nobody4: [
         "<32>{#p/human}* (It sounds like a small, white dog is sleeping on the cell phone.)",
         "<32>{#p/basic}* (Snore... snore...)",
         "<32>* (Snore... snore...)"
      ],
      nobody4a: [
         "<32>{#p/human}* (It sounds like a small, white dog is sleeping on the cell phone.)",
         "<32>{#p/basic}* (Snore... snore... snore...)",
         "<32>* (Snore... snore... snore...)"
      ],
      nobody4f: [
         "<32>{#p/human}* (It sounds like a small, white dog is sleeping on the cell phone.)",
         "<32>{#p/basic}* (Snore...!)",
         "<32>* (Snore...!)"
      ],
      nobody4m: [
         "<32>{#p/human}* (It sounds like a small, white dog is sleeping on the cell phone.)",
         "<32>{#p/basic}* (Snore...?)",
         "<32>* (Snore...?)"
      ],
      nobody4i: [
         "<32>{#p/human}* (It sounds like a small, white dog is sleeping on the cell phone.)",
         "<32>{#p/basic}* (Whimper.)",
         "<32>* (Whine.)"
      ],
      about1: [
         "<25>{#p/asgore}{#f/5}* About me?",
         "<25>{#f/7}* ... oh, but where would I begin?",
         "<25>{#f/6}* There is far too much to tell at once.",
         "<25>{#f/6}* Perhaps, over time, you will come to know me very well.",
         "<25>{#f/21}* It would be better than telling you everything at once."
      ],
      about2: [
         "<25>{#p/asgore}{#f/5}* If you like, I can tell you something about myself later.",
         "<25>{#f/7}* How does that sound?"
      ],
      flirt1: [
         "<25>{#p/asgore}{#f/20}* ...",
         "<25>{#f/4}* Frisk.",
         "<25>{#f/6}* Surely there is someone more your age.",
         "<25>{#f/5}* I am not saying I cannot oblige, but...",
         "<25>{#f/6}* There is a world of difference between \"can\" and \"should.\""
      ],
      flirt2: [
         "<25>{#p/asgore}{#f/20}* Frisk.",
         "<25>{#f/20}* Perhaps when you are older, we may explore this further.",
         "<25>{#f/6}* But not now."
      ],
      flirt3: [
         "<25>{#p/asgore}{#f/20}* Frisk.",
         "<25>{#f/6}* You call me \"Dad,\" and then you flirt with me.",
         "<25>{#f/5}* I am not sure how to react to this."
      ],
      hello: [
         [ "<25>{#p/asgore}{#f/21}* A greeting, you say?", "<25>{#f/7}* Hmm...", "<25>{#f/6}* I give you a \"Howdy!\"" ],
         [ "<25>{#p/asgore}{#f/5}* Another greeting?", "<25>{#f/21}* I know...", "<25>{#f/6}* \"How do you do!\"" ],
         [
            "<25>{#p/asgore}{#f/5}* ...",
            "<25>{#f/5}* At this rate, I am going to run out of greetings.",
            "<25>{#f/6}* Though, the birds outside may be more willing to oblige.",
            "<25>{#f/7}* Why not try with them?"
         ],
         [ "<25>{#p/asgore}{#f/5}* ... howdy, little one.", "<25>{#f/6}* It is always nice to hear your voice." ]
      ],
      dad1: [
         "<25>{#p/asgore}{#f/6}* ...",
         "<25>{#f/24}* ...",
         "<25>{#f/21}* Of course.",
         "<25>{#f/6}* I suppose it is only natural you would call me that.",
         "<25>{#f/6}* You may call me \"Dad\" if you want, Frisk."
      ],
      dad2: [
         "<25>{#p/asgore}{#f/24}* ...\n* Goodness gracious.",
         "<25>{#f/6}* You seem very intent on me being your father.",
         "<25>{#f/21}* Fortunately, I had already planned to fill that role."
      ],
      dad3: [
         "<25>{#p/asgore}{#f/24}* ...\n* Goodness gracious.",
         "<25>{#f/6}* You flirt with me, and then you call me \"Dad.\"",
         "<25>{#f/5}* I am not sure how to react to this."
      ],
      insult1: () =>
         SAVE.data.b.ufokinwotm8
            ? [
                 "<25>{#p/asgore}{#f/1}* ...",
                 "<25>{#f/1}* You seem very upset about something...",
                 "<25>{#f/6}* If you like, we may talk once construction has come to an end."
              ]
            : [
                 "<25>{#p/asgore}{#f/8}* ...",
                 "<26>{#f/6}* Ooh.\n* How dastardly of you.",
                 "<25>{#f/21}* But do not worry...\n* I can tell you are only kidding with me."
              ],
      insult2: () =>
         SAVE.data.b.ufokinwotm8
            ? [ "<25>{#p/asgore}{#f/1}* ...", "<25>{#p/asgore}{#f/6}* I will be available to talk with you soon, okay?" ]
            : [ "<25>{#p/asgore}{#f/21}* Now, now.\n* There is no need to be so brazen." ]
   },

   i_water: {
      battle: {
         description: "Smells like Dihydrogen Monoxide.",
         name: "水"
      },
      drop: [ "<32>{#p/human}* (You throw away the Water.)" ],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? [ "<32>{#p/human}* （12 HP。）" ]
            : [ "<32>{#p/basic}* “水” 回覆 12 HP\n* 它的氣味很像一氧化二氫。" ],
      name: "水",
      use: () => [
         "<32>{#p/human}* (You drank the Water.)",
         ...(SAVE.data.b.ufokinwotm8 ? [] : [ "<33>{#p/human}* （你充滿了一氧化二氫的力量。）" ]) 
      ]
   },

   s_save_common: {
      _cockpit: {
         name: "Deep Space",
         text: []
      },
      _frontier1: {
         name: "Your Room",
         text: [ "<32>{#p/human}* （你充滿了決心。）" ]
      },
      _frontier8: {
         name: "Eurybia",
         text: []
      }
   }
};


// END-TRANSLATE

export default text;
